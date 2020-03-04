import jsep from "../web_modules/jsep.js";
import { evaluate } from "./expressions.js";
import { state } from "./state.js";

const DIRECTIVES = Symbol.for("directive");
window[DIRECTIVES] = {};

function isExpression(value) {
  return (
    value && value.startsWith && value.startsWith("{{") && value.endsWith("}}")
  );
}

function evaluateExpression(value) {
  try {
    value = evaluate(jsep(value.replace(/{{|}}/g, "")), state);
  } catch (e) {
    value = null;
  }
  return value;
}

const dataWithExpressions = [];
function applyDirective(directive, node, value) {
  const data = mountedDirectives.get(directive).get(node);
  if (data) {
    if (isExpression(value)) {
      value = evaluateExpression(value);
      if (!dataWithExpressions.includes(data)) {
        dataWithExpressions.push(data);
      }
    }
    if (data.prevValue !== value) {
      data.prevValue = value;
      if (data.generator) {
        data.generator.next(value);
      } else {
        const result = directive(node, value);
        if (result && result.next) {
          data.generator = result;
          data.prevValue = undefined;
          applyDirective(directive, node, value);
        }
      }
    }
  }
}

function reEvaluateExpressions() {
  for (const data of dataWithExpressions) {
    applyDirective(
      data.directive,
      data.node,
      data.node.getAttribute(data.attributeName)
    );
  }
}

state.on(() => {
  reEvaluateExpressions();
});

const mountedDirectives = new Map();
export function mountDirectives() {
  Object.keys(window[DIRECTIVES]).forEach(key => {
    const directive = window[DIRECTIVES][key];
    const attributeName = `data-${key}`;
    const nodes = Array.from(document.querySelectorAll(`[${attributeName}]`));
    const mountedNodes = mountedDirectives.get(directive) || new Map();
    mountedDirectives.set(directive, mountedNodes);
    nodes.forEach(node => {
      if (!mountedNodes.has(node)) {
        mountedNodes.set(node, { directive, node, attributeName });
        applyDirective(directive, node, node.getAttribute(attributeName));
      }
    });
  });
}

function removeNodeData(directive, node) {
  const dataMap = mountedDirectives.get(directive);
  if (dataMap && dataMap.has(node)) {
    const data = dataMap.get(node);
    const index = dataWithExpressions.indexOf(data);
    if (index > -1) {
      dataWithExpressions.splice(index, 1);
    }
    dataMap.delete(node);
  }
}

function unMountNode(node) {
  for (const directive of mountedDirectives.keys()) {
    removeNodeData(directive, node);
  }
}

export function createDirective(name, callback) {
  window[DIRECTIVES][name] = callback;
  mountDirectives();
}

createDirective("bind-value", function*(node, path) {
  let object;
  let key;
  if (path.includes(".")) {
  } else {
    object = state;
    key = path;
  }
  let currentValue = object[key];
  const off = object.on(() => {
    if (document.body.contains(node)) {
      if (currentValue !== object[key]) {
        currentValue = object[key];
        node.value = currentValue;
      }
    } else {
      off();
    }
  });
  if (currentValue) {
    node.value = currentValue;
  }
  node.addEventListener("input", e => {
    currentValue = e.target.value;
    object[key] = currentValue;
  });
});

createDirective("text", function(node, value) {
  if (isExpression(value)) {
    node.textContent = evaluateExpression(value);
  } else {
    node.textContent = value;
  }
});

const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === "attributes") {
      console.log(mutation.attributeName);
      const attributeName = mutation.attributeName;
      const directive = window[DIRECTIVES][attributeName.replace("data-", "")];
      if (directive && document.body.contains(mutation.target)) {
        if (mutation.target.hasAttribute(attributeName)) {
          applyDirective(
            directive,
            mutation.target,
            mutation.target.getAttribute(attributeName)
          );
        } else {
          removeNodeData(directive, mutation.target);
        }
      }
    } else if (mutation.type === "childList") {
      mutation.removedNodes.forEach(node => unMountNode(node));
    }
  });
});

observer.observe(document.body, {
  attributes: true,
  subtree: true,
  childList: true
});
