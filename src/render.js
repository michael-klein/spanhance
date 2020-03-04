import {
  patch,
  text,
  elementOpen,
  elementClose,
  currentPointer,
  skip,
  skipNode,
  currentElement
} from "../web_modules/incremental-dom.js";
import { normalizeHtmlResult } from "./html.js";
import { schedule } from "./scheduler.js";

function performRenderStep(htmlResult) {
  if (htmlResult) {
    htmlResult = normalizeHtmlResult(htmlResult);
    const { type, children, props } = htmlResult;
    if (type === "script") {
      const pointer = currentPointer();
      if (
        !(pointer instanceof HTMLScriptElement) ||
        pointer.textContent !== children[0]
      ) {
        if (pointer) {
          pointer.parentElement.removeChild(pointer);
        }
        const newScript = document.createElement("script");
        Object.keys(props).forEach(key =>
          newScript.setAttribute(key, props[key])
        );
        newScript.appendChild(document.createTextNode(children[0]));
        currentElement().appendChild(newScript);
      } else {
        skipNode();
      }
    } else {
      if (type) {
        elementOpen(
          type,
          null,
          null,
          ...(props
            ? Object.keys(props).reduce((memo, propName) => {
                memo.push(propName, props[propName]);
                return memo;
              }, [])
            : [])
        );
      }
      children.forEach(child => {
        if (!(child instanceof Object)) {
          if (child || Number(child) === child) text(child);
        } else if (typeof child === "function") {
          child();
        } else {
          performRenderStep(child);
        }
      });
      if (type) {
        elementClose(type);
      }
    }
  }
}

export function render(node, htmlResult) {
  return schedule(() =>
    patch(node, function() {
      performRenderStep(htmlResult);
    })
  );
}
