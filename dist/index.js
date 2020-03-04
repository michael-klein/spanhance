var n=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a);}return e},t=new Map;function htm_module(s){var r=t.get(this);return r||(r=new Map,t.set(this,r)),(r=n(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e="";},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0]);}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}

function normalizeHtmlResult(htmlResult) {
  if (Array.isArray(htmlResult)) {
    htmlResult = {
      children: htmlResult
    };
  }
  return htmlResult;
}
function h(type, props, ...children) {
  return { type, props, children };
}

const html = htm_module.bind(h);

function documentReady(callback) {
  if ("completeinteractive".includes(document.readyState)) {
    Promise.resolve().then(callback);
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }
}

function parseDOM(htmlString) {
  return new Function("html", `return html\`${htmlString}\``)(html);
}

const bodyExtractPattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
const titleExtractPattern = /<title[^>]*>((.|[\n\r])*)<\/title>/im;
function fetchLinkData(linkNodes, linkData) {
  linkNodes.forEach(node => {
    const url = node.href;
    if (!linkData[url]) {
      linkData[url] = fetch(url)
        .then(response => response.text())
        .then(htmlContent => {
          return {
            htmlResult: parseDOM(bodyExtractPattern.exec(htmlContent)[1]),
            title: titleExtractPattern.exec(htmlContent)[1]
          };
        })
        .catch(function(err) {
          console.warn(`Could not fetch ${url}`, err);
        });
    }
  });
  return linkData;
}

function getLinks() {
  return Array.from(document.querySelectorAll("[data-link]"));
}

function removeEmptyTextNodes(node) {
  for (var n = 0; n < node.childNodes.length; n++) {
    var child = node.childNodes[n];
    if (child.nodeType === 3 && !/\S/.test(child.nodeValue)) {
      node.removeChild(child);
      n--;
    } else if (child.nodeType === 1) {
      removeEmptyTextNodes(child);
    }
  }
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var incrementalDomCjs = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The name of the HTML attribute that holds the element key
 * (e.g. `<div key="foo">`). The attribute value, if it exists, is then used
 * as the default key when importing an element.
 * If null, no attribute value is used as the default key.
 */
let keyAttributeName = "key";
function getKeyAttributeName() {
    return keyAttributeName;
}
function setKeyAttributeName(name) {
    keyAttributeName = name;
}

/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Keeps track whether or not we are in an attributes declaration (after
 * elementOpenStart, but before elementOpenEnd).
 */
let inAttributes = false;
/**
 * Keeps track whether or not we are in an element that should not have its
 * children cleared.
 */
let inSkip = false;
/**
 * Keeps track of whether or not we are in a patch.
 */
let inPatch = false;
/**
 * Asserts that a value exists and is not null or undefined. goog.asserts
 * is not used in order to avoid dependencies on external code.
 * @param val The value to assert is truthy.
 * @returns The value.
 */
function assert(val) {
    if (!val) {
        throw new Error("Expected value to be defined");
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return val;
}
/**
 * Makes sure that there is a current patch context.
 * @param functionName The name of the caller, for the error message.
 */
function assertInPatch(functionName) {
    if (!inPatch) {
        throw new Error("Cannot call " + functionName + "() unless in patch.");
    }
}
/**
 * Makes sure that a patch closes every node that it opened.
 * @param openElement
 * @param root
 */
function assertNoUnclosedTags(openElement, root) {
    if (openElement === root) {
        return;
    }
    let currentElement = openElement;
    const openTags = [];
    while (currentElement && currentElement !== root) {
        openTags.push(currentElement.nodeName.toLowerCase());
        currentElement = currentElement.parentNode;
    }
    throw new Error("One or more tags were not closed:\n" + openTags.join("\n"));
}
/**
 * Makes sure that node being outer patched has a parent node.
 * @param parent
 */
function assertPatchOuterHasParentNode(parent) {
    if (!parent) {
        console.warn("patchOuter requires the node have a parent if there is a key.");
    }
}
/**
 * Makes sure that the caller is not where attributes are expected.
 * @param functionName The name of the caller, for the error message.
 */
function assertNotInAttributes(functionName) {
    if (inAttributes) {
        throw new Error(functionName +
            "() can not be called between " +
            "elementOpenStart() and elementOpenEnd().");
    }
}
/**
 * Makes sure that the caller is not inside an element that has declared skip.
 * @param functionName The name of the caller, for the error message.
 */
function assertNotInSkip(functionName) {
    if (inSkip) {
        throw new Error(functionName +
            "() may not be called inside an element " +
            "that has called skip().");
    }
}
/**
 * Makes sure that the caller is where attributes are expected.
 * @param functionName The name of the caller, for the error message.
 */
function assertInAttributes(functionName) {
    if (!inAttributes) {
        throw new Error(functionName +
            "() can only be called after calling " +
            "elementOpenStart().");
    }
}
/**
 * Makes sure the patch closes virtual attributes call
 */
function assertVirtualAttributesClosed() {
    if (inAttributes) {
        throw new Error("elementOpenEnd() must be called after calling " + "elementOpenStart().");
    }
}
/**
 * Makes sure that tags are correctly nested.
 * @param currentNameOrCtor
 * @param nameOrCtor
 */
function assertCloseMatchesOpenTag(currentNameOrCtor, nameOrCtor) {
    if (currentNameOrCtor !== nameOrCtor) {
        throw new Error('Received a call to close "' +
            nameOrCtor +
            '" but "' +
            currentNameOrCtor +
            '" was open.');
    }
}
/**
 * Makes sure that no children elements have been declared yet in the current
 * element.
 * @param functionName The name of the caller, for the error message.
 * @param previousNode
 */
function assertNoChildrenDeclaredYet(functionName, previousNode) {
    if (previousNode !== null) {
        throw new Error(functionName +
            "() must come before any child " +
            "declarations inside the current element.");
    }
}
/**
 * Checks that a call to patchOuter actually patched the element.
 * @param maybeStartNode The value for the currentNode when the patch
 *     started.
 * @param maybeCurrentNode The currentNode when the patch finished.
 * @param expectedNextNode The Node that is expected to follow the
 *    currentNode after the patch;
 * @param expectedPrevNode The Node that is expected to preceed the
 *    currentNode after the patch.
 */
function assertPatchElementNoExtras(maybeStartNode, maybeCurrentNode, expectedNextNode, expectedPrevNode) {
    const startNode = assert(maybeStartNode);
    const currentNode = assert(maybeCurrentNode);
    const wasUpdated = currentNode.nextSibling === expectedNextNode &&
        currentNode.previousSibling === expectedPrevNode;
    const wasChanged = currentNode.nextSibling === startNode.nextSibling &&
        currentNode.previousSibling === expectedPrevNode;
    const wasRemoved = currentNode === startNode;
    if (!wasUpdated && !wasChanged && !wasRemoved) {
        throw new Error("There must be exactly one top level call corresponding " +
            "to the patched element.");
    }
}
/**
 * @param newContext The current patch context.
 */
function updatePatchContext(newContext) {
    inPatch = newContext != null;
}
/**
 * Updates the state of being in an attribute declaration.
 * @param value Whether or not the patch is in an attribute declaration.
 * @return the previous value.
 */
function setInAttributes(value) {
    const previous = inAttributes;
    inAttributes = value;
    return previous;
}
/**
 * Updates the state of being in a skip element.
 * @param value Whether or not the patch is skipping the children of a
 *    parent node.
 * @return the previous value.
 */
function setInSkip(value) {
    const previous = inSkip;
    inSkip = value;
    return previous;
}

/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A cached reference to the hasOwnProperty function.
 */
const hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * A constructor function that will create blank objects.
 */
function Blank() { }
Blank.prototype = Object.create(null);
/**
 * Used to prevent property collisions between our "map" and its prototype.
 * @param map The map to check.
 * @param property The property to check.
 * @return Whether map has property.
 */
function has(map, property) {
    return hasOwnProperty.call(map, property);
}
/**
 * Creates an map object without a prototype.
 * @returns An Object that can be used as a map.
 */
function createMap() {
    return new Blank();
}
/**
 * Truncates an array, removing items up until length.
 * @param arr The array to truncate.
 * @param length The new length of the array.
 */
function truncateArray(arr, length) {
    while (arr.length > length) {
        arr.pop();
    }
}
/**
 * Creates an array for a desired initial size. Note that the array will still
 * be empty.
 * @param initialAllocationSize The initial size to allocate.
 * @returns An empty array, with an initial allocation for the desired size.
 */
function createArray(initialAllocationSize) {
    const arr = new Array(initialAllocationSize);
    truncateArray(arr, 0);
    return arr;
}

/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const symbols = {
    default: "__default"
};

/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param name The name of the attribute. For example "tabindex" or
 *    "xlink:href".
 * @returns The namespace to use for the attribute, or null if there is
 * no namespace.
 */
function getNamespace(name) {
    if (name.lastIndexOf("xml:", 0) === 0) {
        return "http://www.w3.org/XML/1998/namespace";
    }
    if (name.lastIndexOf("xlink:", 0) === 0) {
        return "http://www.w3.org/1999/xlink";
    }
    return null;
}
/**
 * Applies an attribute or property to a given Element. If the value is null
 * or undefined, it is removed from the Element. Otherwise, the value is set
 * as an attribute.
 * @param el The element to apply the attribute to.
 * @param name The attribute's name.
 * @param value The attribute's value.
 */
function applyAttr(el, name, value) {
    if (value == null) {
        el.removeAttribute(name);
    }
    else {
        const attrNS = getNamespace(name);
        if (attrNS) {
            el.setAttributeNS(attrNS, name, String(value));
        }
        else {
            el.setAttribute(name, String(value));
        }
    }
}
/**
 * Applies a property to a given Element.
 * @param el The element to apply the property to.
 * @param name The property's name.
 * @param value The property's value.
 */
function applyProp(el, name, value) {
    el[name] = value;
}
/**
 * Applies a value to a style declaration. Supports CSS custom properties by
 * setting properties containing a dash using CSSStyleDeclaration.setProperty.
 * @param style A style declaration.
 * @param prop The property to apply. This can be either camelcase or dash
 *    separated. For example: "backgroundColor" and "background-color" are both
 *    supported.
 * @param value The value of the property.
 */
function setStyleValue(style, prop, value) {
    if (prop.indexOf("-") >= 0) {
        style.setProperty(prop, value);
    }
    else {
        style[prop] = value;
    }
}
/**
 * Applies a style to an Element. No vendor prefix expansion is done for
 * property names/values.
 * @param el The Element to apply the style for.
 * @param name The attribute's name.
 * @param  style The style to set. Either a string of css or an object
 *     containing property-value pairs.
 */
function applyStyle(el, name, style) {
    // MathML elements inherit from Element, which does not have style. We cannot
    // do `instanceof HTMLElement` / `instanceof SVGElement`, since el can belong
    // to a different document, so just check that it has a style.
    assert("style" in el);
    const elStyle = el.style;
    if (typeof style === "string") {
        elStyle.cssText = style;
    }
    else {
        elStyle.cssText = "";
        for (const prop in style) {
            if (has(style, prop)) {
                setStyleValue(elStyle, prop, style[prop]);
            }
        }
    }
}
/**
 * Updates a single attribute on an Element.
 * @param el The Element to apply the attribute to.
 * @param name The attribute's name.
 * @param value The attribute's value. If the value is an object or
 *     function it is set on the Element, otherwise, it is set as an HTML
 *     attribute.
 */
function applyAttributeTyped(el, name, value) {
    const type = typeof value;
    if (type === "object" || type === "function") {
        applyProp(el, name, value);
    }
    else {
        applyAttr(el, name, value);
    }
}
/**
 * A publicly mutable object to provide custom mutators for attributes.
 * NB: The result of createMap() has to be recast since closure compiler
 * will just assume attributes is "any" otherwise and throws away
 * the type annotation set by tsickle.
 */
const attributes = createMap();
// Special generic mutator that's called for any attribute that does not
// have a specific mutator.
attributes[symbols.default] = applyAttributeTyped;
attributes["style"] = applyStyle;
/**
 * Calls the appropriate attribute mutator for this attribute.
 * @param el The Element to apply the attribute to.
 * @param name The attribute's name.
 * @param value The attribute's value. If the value is an object or
 *     function it is set on the Element, otherwise, it is set as an HTML
 *     attribute.
 */
function updateAttribute(el, name, value) {
    const mutator = attributes[name] || attributes[symbols.default];
    mutator(el, name, value);
}

/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const notifications = {
    nodesCreated: null,
    nodesDeleted: null
};

/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A context object keeps track of the state of a patch.
 */
class Context {
    constructor() {
        this.created = [];
        this.deleted = [];
    }
    markCreated(node) {
        this.created.push(node);
    }
    markDeleted(node) {
        this.deleted.push(node);
    }
    /**
     * Notifies about nodes that were created during the patch operation.
     */
    notifyChanges() {
        if (notifications.nodesCreated && this.created.length > 0) {
            notifications.nodesCreated(this.created);
        }
        if (notifications.nodesDeleted && this.deleted.length > 0) {
            notifications.nodesDeleted(this.deleted);
        }
    }
}

/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Checks if the node is the root of a document. This is either a Document
 * or ShadowRoot. DocumentFragments are included for simplicity of the
 * implementation, though we only want to consider Documents or ShadowRoots.
 * @param node The node to check.
 * @return True if the node the root of a document, false otherwise.
 */
function isDocumentRoot(node) {
    return node.nodeType === 11 || node.nodeType === 9;
}
/**
 * Checks if the node is an Element. This is faster than an instanceof check.
 * @param node The node to check.
 * @return Whether or not the node is an Element.
 */
function isElement(node) {
    return node.nodeType === 1;
}
/**
 * @param  node The node to start at, inclusive.
 * @param  root The root ancestor to get until, exclusive.
 * @return The ancestry of DOM nodes.
 */
function getAncestry(node, root) {
    const ancestry = [];
    let cur = node;
    while (cur !== root) {
        const n = assert(cur);
        ancestry.push(n);
        cur = n.parentNode;
    }
    return ancestry;
}
/**
 * @param this
 * @returns The root node of the DOM tree that contains this node.
 */
const getRootNode = (typeof Node !== "undefined" && Node.prototype.getRootNode) ||
    function () {
        let cur = this;
        let prev = cur;
        while (cur) {
            prev = cur;
            cur = cur.parentNode;
        }
        return prev;
    };
/**
 * @param node The node to get the activeElement for.
 * @returns The activeElement in the Document or ShadowRoot
 *     corresponding to node, if present.
 */
function getActiveElement(node) {
    const root = getRootNode.call(node);
    return isDocumentRoot(root) ? root.activeElement : null;
}
/**
 * Gets the path of nodes that contain the focused node in the same document as
 * a reference node, up until the root.
 * @param node The reference node to get the activeElement for.
 * @param root The root to get the focused path until.
 * @returns The path of focused parents, if any exist.
 */
function getFocusedPath(node, root) {
    const activeElement = getActiveElement(node);
    if (!activeElement || !node.contains(activeElement)) {
        return [];
    }
    return getAncestry(activeElement, root);
}
/**
 * Like insertBefore, but instead instead of moving the desired node, instead
 * moves all the other nodes after.
 * @param parentNode
 * @param node
 * @param referenceNode
 */
function moveBefore(parentNode, node, referenceNode) {
    const insertReferenceNode = node.nextSibling;
    let cur = referenceNode;
    while (cur !== null && cur !== node) {
        const next = cur.nextSibling;
        parentNode.insertBefore(cur, insertReferenceNode);
        cur = next;
    }
}

/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Keeps track of information needed to perform diffs for a given DOM node.
 */
class NodeData {
    constructor(nameOrCtor, key, text) {
        /**
         * An array of attribute name/value pairs, used for quickly diffing the
         * incomming attributes to see if the DOM node's attributes need to be
         * updated.
         */
        this._attrsArr = null;
        /**
         * Whether or not the statics have been applied for the node yet.
         */
        this.staticsApplied = false;
        this.nameOrCtor = nameOrCtor;
        this.key = key;
        this.text = text;
    }
    hasEmptyAttrsArr() {
        const attrs = this._attrsArr;
        return !attrs || !attrs.length;
    }
    getAttrsArr(length) {
        return this._attrsArr || (this._attrsArr = createArray(length));
    }
}
/**
 * Initializes a NodeData object for a Node.
 * @param node The Node to initialized data for.
 * @param nameOrCtor The NameOrCtorDef to use when diffing.
 * @param key The Key for the Node.
 * @param text The data of a Text node, if importing a Text node.
 * @returns A NodeData object with the existing attributes initialized.
 */
function initData(node, nameOrCtor, key, text) {
    const data = new NodeData(nameOrCtor, key, text);
    node["__incrementalDOMData"] = data;
    return data;
}
/**
 * @param node The node to check.
 * @returns True if the NodeData already exists, false otherwise.
 */
function isDataInitialized(node) {
    return Boolean(node["__incrementalDOMData"]);
}
/**
 * Records the element's attributes.
 * @param node The Element that may have attributes
 * @param data The Element's data
 */
function recordAttributes(node, data) {
    const attributes = node.attributes;
    const length = attributes.length;
    if (!length) {
        return;
    }
    const attrsArr = data.getAttrsArr(length);
    // Use a cached length. The attributes array is really a live NamedNodeMap,
    // which exists as a DOM "Host Object" (probably as C++ code). This makes the
    // usual constant length iteration very difficult to optimize in JITs.
    for (let i = 0, j = 0; i < length; i += 1, j += 2) {
        const attr = attributes[i];
        const name = attr.name;
        const value = attr.value;
        attrsArr[j] = name;
        attrsArr[j + 1] = value;
    }
}
/**
 * Imports single node and its subtree, initializing caches, if it has not
 * already been imported.
 * @param node The node to import.
 * @param fallbackKey A key to use if importing and no key was specified.
 *    Useful when not transmitting keys from serverside render and doing an
 *    immediate no-op diff.
 * @returns The NodeData for the node.
 */
function importSingleNode(node, fallbackKey) {
    if (node["__incrementalDOMData"]) {
        return node["__incrementalDOMData"];
    }
    const nodeName = isElement(node) ? node.localName : node.nodeName;
    const keyAttrName = getKeyAttributeName();
    const keyAttr = isElement(node) && keyAttrName != null
        ? node.getAttribute(keyAttrName)
        : null;
    const key = isElement(node) ? keyAttr || fallbackKey : null;
    const data = initData(node, nodeName, key);
    if (isElement(node)) {
        recordAttributes(node, data);
    }
    return data;
}
/**
 * Imports node and its subtree, initializing caches.
 * @param node The Node to import.
 */
function importNode(node) {
    importSingleNode(node);
    for (let child = node.firstChild; child; child = child.nextSibling) {
        importNode(child);
    }
}
/**
 * Retrieves the NodeData object for a Node, creating it if necessary.
 * @param node The node to get data for.
 * @param fallbackKey A key to use if importing and no key was specified.
 *    Useful when not transmitting keys from serverside render and doing an
 *    immediate no-op diff.
 * @returns The NodeData for the node.
 */
function getData(node, fallbackKey) {
    return importSingleNode(node, fallbackKey);
}
/**
 * Gets the key for a Node. note that the Node should have been imported
 * by now.
 * @param node The node to check.
 * @returns The key used to create the node.
 */
function getKey(node) {
    assert(node["__incrementalDOMData"]);
    return getData(node).key;
}
/**
 * Clears all caches from a node and all of its children.
 * @param node The Node to clear the cache for.
 */
function clearCache(node) {
    node["__incrementalDOMData"] = null;
    for (let child = node.firstChild; child; child = child.nextSibling) {
        clearCache(child);
    }
}

/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Gets the namespace to create an element (of a given tag) in.
 * @param tag The tag to get the namespace for.
 * @param parent The current parent Node, if any.
 * @returns The namespace to use,
 */
function getNamespaceForTag(tag, parent) {
    if (tag === "svg") {
        return "http://www.w3.org/2000/svg";
    }
    if (tag === "math") {
        return "http://www.w3.org/1998/Math/MathML";
    }
    if (parent == null) {
        return null;
    }
    if (getData(parent).nameOrCtor === "foreignObject") {
        return null;
    }
    return parent.namespaceURI;
}
/**
 * Creates an Element and initializes the NodeData.
 * @param doc The document with which to create the Element.
 * @param parent The parent of new Element.
 * @param nameOrCtor The tag or constructor for the Element.
 * @param key A key to identify the Element.
 * @returns The newly created Element.
 */
function createElement(doc, parent, nameOrCtor, key) {
    let el;
    if (typeof nameOrCtor === "function") {
        el = new nameOrCtor();
    }
    else {
        const namespace = getNamespaceForTag(nameOrCtor, parent);
        if (namespace) {
            el = doc.createElementNS(namespace, nameOrCtor);
        }
        else {
            el = doc.createElement(nameOrCtor);
        }
    }
    initData(el, nameOrCtor, key);
    return el;
}
/**
 * Creates a Text Node.
 * @param doc The document with which to create the Element.
 * @returns The newly created Text.
 */
function createText(doc) {
    const node = doc.createTextNode("");
    initData(node, "#text", null);
    return node;
}

/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The default match function to use, if one was not specified when creating
 * the patcher.
 * @param matchNode The node to match against, unused.
 * @param nameOrCtor The name or constructor as declared.
 * @param expectedNameOrCtor The name or constructor of the existing node.
 * @param key The key as declared.
 * @param expectedKey The key of the existing node.
 * @returns True if the node matches, false otherwise.
 */
function defaultMatchFn(matchNode, nameOrCtor, expectedNameOrCtor, key, expectedKey) {
    // Key check is done using double equals as we want to treat a null key the
    // same as undefined. This should be okay as the only values allowed are
    // strings, null and undefined so the == semantics are not too weird.
    return nameOrCtor == expectedNameOrCtor && key == expectedKey;
}
let context = null;
let currentNode = null;
let currentParent = null;
let doc = null;
let focusPath = [];
let matchFn = defaultMatchFn;
/**
 * Used to build up call arguments. Each patch call gets a separate copy, so
 * this works with nested calls to patch.
 */
let argsBuilder = [];
/**
 * Used to build up attrs for the an element.
 */
let attrsBuilder = [];
/**
 * TODO(sparhami) We should just export argsBuilder directly when Closure
 * Compiler supports ES6 directly.
 * @returns The Array used for building arguments.
 */
function getArgsBuilder() {
    return argsBuilder;
}
/**
 * TODO(sparhami) We should just export attrsBuilder directly when Closure
 * Compiler supports ES6 directly.
 * @returns The Array used for building arguments.
 */
function getAttrsBuilder() {
    return attrsBuilder;
}
/**
 * Checks whether or not the current node matches the specified nameOrCtor and
 * key. This uses the specified match function when creating the patcher.
 * @param matchNode A node to match the data to.
 * @param nameOrCtor The name or constructor to check for.
 * @param key The key used to identify the Node.
 * @return True if the node matches, false otherwise.
 */
function matches(matchNode, nameOrCtor, key) {
    const data = getData(matchNode, key);
    return matchFn(matchNode, nameOrCtor, data.nameOrCtor, key, data.key);
}
/**
 * Finds the matching node, starting at `node` and looking at the subsequent
 * siblings if a key is used.
 * @param matchNode The node to start looking at.
 * @param nameOrCtor The name or constructor for the Node.
 * @param key The key used to identify the Node.
 * @returns The matching Node, if any exists.
 */
function getMatchingNode(matchNode, nameOrCtor, key) {
    if (!matchNode) {
        return null;
    }
    let cur = matchNode;
    do {
        if (matches(cur, nameOrCtor, key)) {
            return cur;
        }
    } while (key && (cur = cur.nextSibling));
    return null;
}
/**
 * Clears out any unvisited Nodes in a given range.
 * @param maybeParentNode
 * @param startNode The node to start clearing from, inclusive.
 * @param endNode The node to clear until, exclusive.
 */
function clearUnvisitedDOM(maybeParentNode, startNode, endNode) {
    const parentNode = maybeParentNode;
    let child = startNode;
    while (child !== endNode) {
        const next = child.nextSibling;
        parentNode.removeChild(child);
        context.markDeleted(child);
        child = next;
    }
}
/**
 * @return The next Node to be patched.
 */
function getNextNode() {
    if (currentNode) {
        return currentNode.nextSibling;
    }
    else {
        return currentParent.firstChild;
    }
}
/**
 * Changes to the first child of the current node.
 */
function enterNode() {
    currentParent = currentNode;
    currentNode = null;
}
/**
 * Changes to the parent of the current node, removing any unvisited children.
 */
function exitNode() {
    clearUnvisitedDOM(currentParent, getNextNode(), null);
    currentNode = currentParent;
    currentParent = currentParent.parentNode;
}
/**
 * Changes to the next sibling of the current node.
 */
function nextNode() {
    currentNode = getNextNode();
}
/**
 * Creates a Node and marking it as created.
 * @param nameOrCtor The name or constructor for the Node.
 * @param key The key used to identify the Node.
 * @return The newly created node.
 */
function createNode(nameOrCtor, key) {
    let node;
    if (nameOrCtor === "#text") {
        node = createText(doc);
    }
    else {
        node = createElement(doc, currentParent, nameOrCtor, key);
    }
    context.markCreated(node);
    return node;
}
/**
 * Aligns the virtual Node definition with the actual DOM, moving the
 * corresponding DOM node to the correct location or creating it if necessary.
 * @param nameOrCtor The name or constructor for the Node.
 * @param key The key used to identify the Node.
 */
function alignWithDOM(nameOrCtor, key) {
    nextNode();
    const existingNode = getMatchingNode(currentNode, nameOrCtor, key);
    const node = existingNode || createNode(nameOrCtor, key);
    // If we are at the matching node, then we are done.
    if (node === currentNode) {
        return;
    }
    // Re-order the node into the right position, preserving focus if either
    // node or currentNode are focused by making sure that they are not detached
    // from the DOM.
    if (focusPath.indexOf(node) >= 0) {
        // Move everything else before the node.
        moveBefore(currentParent, node, currentNode);
    }
    else {
        currentParent.insertBefore(node, currentNode);
    }
    currentNode = node;
}
/**
 * Makes sure that the current node is an Element with a matching nameOrCtor and
 * key.
 *
 * @param nameOrCtor The tag or constructor for the Element.
 * @param key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @return The corresponding Element.
 */
function open(nameOrCtor, key) {
    alignWithDOM(nameOrCtor, key);
    enterNode();
    return currentParent;
}
/**
 * Closes the currently open Element, removing any unvisited children if
 * necessary.
 * @returns The Element that was just closed.
 */
function close() {
    {
        setInSkip(false);
    }
    exitNode();
    return currentNode;
}
/**
 * Makes sure the current node is a Text node and creates a Text node if it is
 * not.
 * @returns The Text node that was aligned or created.
 */
function text() {
    alignWithDOM("#text", null);
    return currentNode;
}
/**
 * @returns The current Element being patched.
 */
function currentElement() {
    {
        assertInPatch("currentElement");
        assertNotInAttributes("currentElement");
    }
    return currentParent;
}
/**
 * @return The Node that will be evaluated for the next instruction.
 */
function currentPointer() {
    {
        assertInPatch("currentPointer");
        assertNotInAttributes("currentPointer");
    }
    // TODO(tomnguyen): assert that this is not null
    return getNextNode();
}
/**
 * Skips the children in a subtree, allowing an Element to be closed without
 * clearing out the children.
 */
function skip() {
    {
        assertNoChildrenDeclaredYet("skip", currentNode);
        setInSkip(true);
    }
    currentNode = currentParent.lastChild;
}
/**
 * Returns a patcher function that sets up and restores a patch context,
 * running the run function with the provided data.
 * @param run The function that will run the patch.
 * @param patchConfig The configuration to use for the patch.
 * @returns The created patch function.
 */
function createPatcher(run, patchConfig = {}) {
    const { matches = defaultMatchFn } = patchConfig;
    const f = (node, fn, data) => {
        const prevContext = context;
        const prevDoc = doc;
        const prevFocusPath = focusPath;
        const prevArgsBuilder = argsBuilder;
        const prevAttrsBuilder = attrsBuilder;
        const prevCurrentNode = currentNode;
        const prevCurrentParent = currentParent;
        const prevMatchFn = matchFn;
        let previousInAttributes = false;
        let previousInSkip = false;
        doc = node.ownerDocument;
        context = new Context();
        matchFn = matches;
        argsBuilder = [];
        attrsBuilder = [];
        currentNode = null;
        currentParent = node.parentNode;
        focusPath = getFocusedPath(node, currentParent);
        {
            previousInAttributes = setInAttributes(false);
            previousInSkip = setInSkip(false);
            updatePatchContext(context);
        }
        try {
            const retVal = run(node, fn, data);
            {
                assertVirtualAttributesClosed();
            }
            return retVal;
        }
        finally {
            context.notifyChanges();
            doc = prevDoc;
            context = prevContext;
            matchFn = prevMatchFn;
            argsBuilder = prevArgsBuilder;
            attrsBuilder = prevAttrsBuilder;
            currentNode = prevCurrentNode;
            currentParent = prevCurrentParent;
            focusPath = prevFocusPath;
            // Needs to be done after assertions because assertions rely on state
            // from these methods.
            {
                setInAttributes(previousInAttributes);
                setInSkip(previousInSkip);
                updatePatchContext(context);
            }
        }
    };
    return f;
}
/**
 * Creates a patcher that patches the document starting at node with a
 * provided function. This function may be called during an existing patch operation.
 * @param patchConfig The config to use for the patch.
 * @returns The created function for patching an Element's children.
 */
function createPatchInner(patchConfig) {
    return createPatcher((node, fn, data) => {
        currentNode = node;
        enterNode();
        fn(data);
        exitNode();
        {
            assertNoUnclosedTags(currentNode, node);
        }
        return node;
    }, patchConfig);
}
/**
 * Creates a patcher that patches an Element with the the provided function.
 * Exactly one top level element call should be made corresponding to `node`.
 * @param patchConfig The config to use for the patch.
 * @returns The created function for patching an Element.
 */
function createPatchOuter(patchConfig) {
    return createPatcher((node, fn, data) => {
        const startNode = { nextSibling: node };
        let expectedNextNode = null;
        let expectedPrevNode = null;
        {
            expectedNextNode = node.nextSibling;
            expectedPrevNode = node.previousSibling;
        }
        currentNode = startNode;
        fn(data);
        {
            assertPatchOuterHasParentNode(currentParent);
            assertPatchElementNoExtras(startNode, currentNode, expectedNextNode, expectedPrevNode);
        }
        if (currentParent) {
            clearUnvisitedDOM(currentParent, getNextNode(), node.nextSibling);
        }
        return startNode === currentNode ? null : currentNode;
    }, patchConfig);
}
const patchInner = createPatchInner();
const patchOuter = createPatchOuter();

/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const buffer = [];
let bufferStart = 0;
/**
 * TODO(tomnguyen): This is a bit silly and really needs to be better typed.
 * @param fn A function to call.
 * @param a The first argument to the function.
 * @param b The second argument to the function.
 * @param c The third argument to the function.
 */
function queueChange(fn, a, b, c) {
    buffer.push(fn);
    buffer.push(a);
    buffer.push(b);
    buffer.push(c);
}
/**
 * Flushes the changes buffer, calling the functions for each change.
 */
function flush() {
    // A change may cause this function to be called re-entrantly. Keep track of
    // the portion of the buffer we are consuming. Updates the start pointer so
    // that the next call knows where to start from.
    const start = bufferStart;
    const end = buffer.length;
    bufferStart = end;
    for (let i = start; i < end; i += 4) {
        const fn = buffer[i];
        fn(buffer[i + 1], buffer[i + 2], buffer[i + 3]);
    }
    bufferStart = start;
    truncateArray(buffer, start);
}

/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Used to keep track of the previous values when a 2-way diff is necessary.
 * This object is cleared out and reused.
 */
const prevValuesMap = createMap();
/**
 * Calculates the diff between previous and next values, calling the update
 * function when an item has changed value. If an item from the previous values
 * is not present in the the next values, the update function is called with a
 * value of `undefined`.
 * @param prev The previous values, alternating name, value pairs.
 * @param next The next values, alternating name, value pairs.
 * @param updateCtx The context for the updateFn.
 * @param updateFn A function to call when a value has changed.
 */
function calculateDiff(prev, next, updateCtx, updateFn) {
    const isNew = !prev.length;
    let i = 0;
    for (; i < next.length; i += 2) {
        const name = next[i];
        if (isNew) {
            prev[i] = name;
        }
        else if (prev[i] !== name) {
            break;
        }
        const value = next[i + 1];
        if (isNew || prev[i + 1] !== value) {
            prev[i + 1] = value;
            queueChange(updateFn, updateCtx, name, value);
        }
    }
    // Items did not line up exactly as before, need to make sure old items are
    // removed. This should be a rare case.
    if (i < next.length || i < prev.length) {
        const startIndex = i;
        for (i = startIndex; i < prev.length; i += 2) {
            prevValuesMap[prev[i]] = prev[i + 1];
        }
        for (i = startIndex; i < next.length; i += 2) {
            const name = next[i];
            const value = next[i + 1];
            if (prevValuesMap[name] !== value) {
                queueChange(updateFn, updateCtx, name, value);
            }
            prev[i] = name;
            prev[i + 1] = value;
            delete prevValuesMap[name];
        }
        truncateArray(prev, next.length);
        for (const name in prevValuesMap) {
            queueChange(updateFn, updateCtx, name, undefined);
            delete prevValuesMap[name];
        }
    }
    flush();
}

/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The offset in the virtual element declaration where the attributes are
 * specified.
 */
const ATTRIBUTES_OFFSET = 3;
/**
 * Used to keep track of the previous values when a 2-way diff is necessary.
 * This object is reused.
 * TODO(sparhamI) Scope this to a patch so you can call patch from an attribute
 * update.
 */
const prevAttrsMap = createMap();
/**
 * @param element The Element to diff the attrs for.
 * @param data The NodeData associated with the Element.
 */
function diffAttrs(element, data) {
    const attrsBuilder = getAttrsBuilder();
    const prevAttrsArr = data.getAttrsArr(attrsBuilder.length);
    calculateDiff(prevAttrsArr, attrsBuilder, element, updateAttribute);
    truncateArray(attrsBuilder, 0);
}
/**
 * Applies the statics. When importing an Element, any existing attributes that
 * match a static are converted into a static attribute.
 * @param node The Element to apply statics for.
 * @param data The NodeData associated with the Element.
 * @param statics The statics array.
 */
function diffStatics(node, data, statics) {
    if (data.staticsApplied) {
        return;
    }
    data.staticsApplied = true;
    if (!statics || !statics.length) {
        return;
    }
    if (data.hasEmptyAttrsArr()) {
        for (let i = 0; i < statics.length; i += 2) {
            updateAttribute(node, statics[i], statics[i + 1]);
        }
        return;
    }
    for (let i = 0; i < statics.length; i += 2) {
        prevAttrsMap[statics[i]] = i + 1;
    }
    const attrsArr = data.getAttrsArr(0);
    let j = 0;
    for (let i = 0; i < attrsArr.length; i += 2) {
        const name = attrsArr[i];
        const value = attrsArr[i + 1];
        const staticsIndex = prevAttrsMap[name];
        if (staticsIndex) {
            // For any attrs that are static and have the same value, make sure we do
            // not set them again.
            if (statics[staticsIndex] === value) {
                delete prevAttrsMap[name];
            }
            continue;
        }
        // For any attrs that are dynamic, move them up to the right place.
        attrsArr[j] = name;
        attrsArr[j + 1] = value;
        j += 2;
    }
    // Anything after `j` was either moved up already or static.
    truncateArray(attrsArr, j);
    for (const name in prevAttrsMap) {
        updateAttribute(node, name, statics[prevAttrsMap[name]]);
        delete prevAttrsMap[name];
    }
}
/**
 * Declares a virtual Element at the current location in the document. This
 * corresponds to an opening tag and a elementClose tag is required. This is
 * like elementOpen, but the attributes are defined using the attr function
 * rather than being passed as arguments. Must be folllowed by 0 or more calls
 * to attr, then a call to elementOpenEnd.
 * @param nameOrCtor The Element's tag or constructor.
 * @param key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param statics An array of attribute name/value pairs of the static
 *     attributes for the Element. Attributes will only be set once when the
 *     Element is created.
 */
function elementOpenStart(nameOrCtor, key, statics) {
    const argsBuilder = getArgsBuilder();
    {
        assertNotInAttributes("elementOpenStart");
        setInAttributes(true);
    }
    argsBuilder[0] = nameOrCtor;
    argsBuilder[1] = key;
    argsBuilder[2] = statics;
}
/**
 * Allows you to define a key after an elementOpenStart. This is useful in
 * templates that define key after an element has been opened ie
 * `<div key('foo')></div>`.
 * @param key The key to use for the next call.
 */
function key(key) {
    const argsBuilder = getArgsBuilder();
    {
        assertInAttributes("key");
        assert(argsBuilder);
    }
    argsBuilder[1] = key;
}
/**
 * Buffers an attribute, which will get applied during the next call to
 * `elementOpen`, `elementOpenEnd` or `applyAttrs`.
 * @param name The of the attribute to buffer.
 * @param value The value of the attribute to buffer.
 */
function attr(name, value) {
    const attrsBuilder = getAttrsBuilder();
    {
        assertInPatch("attr");
    }
    attrsBuilder.push(name);
    attrsBuilder.push(value);
}
/**
 * Closes an open tag started with elementOpenStart.
 * @return The corresponding Element.
 */
function elementOpenEnd() {
    const argsBuilder = getArgsBuilder();
    {
        assertInAttributes("elementOpenEnd");
        setInAttributes(false);
    }
    const node = open(argsBuilder[0], argsBuilder[1]);
    const data = getData(node);
    diffStatics(node, data, argsBuilder[2]);
    diffAttrs(node, data);
    truncateArray(argsBuilder, 0);
    return node;
}
/**
 * @param  nameOrCtor The Element's tag or constructor.
 * @param  key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param statics An array of attribute name/value pairs of the static
 *     attributes for the Element. Attributes will only be set once when the
 *     Element is created.
 * @param varArgs, Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return The corresponding Element.
 */
function elementOpen(nameOrCtor, key, 
// Ideally we could tag statics and varArgs as an array where every odd
// element is a string and every even element is any, but this is hard.
statics, ...varArgs) {
    {
        assertNotInAttributes("elementOpen");
        assertNotInSkip("elementOpen");
    }
    elementOpenStart(nameOrCtor, key, statics);
    for (let i = ATTRIBUTES_OFFSET; i < arguments.length; i += 2) {
        attr(arguments[i], arguments[i + 1]);
    }
    return elementOpenEnd();
}
/**
 * Applies the currently buffered attrs to the currently open element. This
 * clears the buffered attributes.
 */
function applyAttrs() {
    const node = currentElement();
    const data = getData(node);
    diffAttrs(node, data);
}
/**
 * Applies the current static attributes to the currently open element. Note:
 * statics should be applied before calling `applyAtrs`.
 * @param statics The statics to apply to the current element.
 */
function applyStatics(statics) {
    const node = currentElement();
    const data = getData(node);
    diffStatics(node, data, statics);
}
/**
 * Closes an open virtual Element.
 *
 * @param nameOrCtor The Element's tag or constructor.
 * @return The corresponding Element.
 */
function elementClose(nameOrCtor) {
    {
        assertNotInAttributes("elementClose");
    }
    const node = close();
    {
        assertCloseMatchesOpenTag(getData(node).nameOrCtor, nameOrCtor);
    }
    return node;
}
/**
 * Declares a virtual Element at the current location in the document that has
 * no children.
 * @param nameOrCtor The Element's tag or constructor.
 * @param key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param statics An array of attribute name/value pairs of the static
 *     attributes for the Element. Attributes will only be set once when the
 *     Element is created.
 * @param varArgs Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return The corresponding Element.
 */
function elementVoid(nameOrCtor, key, 
// Ideally we could tag statics and varArgs as an array where every odd
// element is a string and every even element is any, but this is hard.
statics, ...varArgs) {
    elementOpen.apply(null, arguments);
    return elementClose(nameOrCtor);
}
/**
 * Declares a virtual Text at this point in the document.
 *
 * @param value The value of the Text.
 * @param varArgs
 *     Functions to format the value which are called only when the value has
 *     changed.
 * @return The corresponding text node.
 */
function text$1(value, ...varArgs) {
    {
        assertNotInAttributes("text");
        assertNotInSkip("text");
    }
    const node = text();
    const data = getData(node);
    if (data.text !== value) {
        data.text = value;
        let formatted = value;
        for (let i = 1; i < arguments.length; i += 1) {
            /*
             * Call the formatter function directly to prevent leaking arguments.
             * https://github.com/google/incremental-dom/pull/204#issuecomment-178223574
             */
            const fn = arguments[i];
            formatted = fn(formatted);
        }
        // Setting node.data resets the cursor in IE/Edge.
        if (node.data !== formatted) {
            node.data = formatted;
        }
    }
    return node;
}

/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

exports.applyAttr = applyAttr;
exports.applyProp = applyProp;
exports.attributes = attributes;
exports.alignWithDOM = alignWithDOM;
exports.close = close;
exports.createPatchInner = createPatchInner;
exports.createPatchOuter = createPatchOuter;
exports.currentElement = currentElement;
exports.currentPointer = currentPointer;
exports.open = open;
exports.patch = patchInner;
exports.patchInner = patchInner;
exports.patchOuter = patchOuter;
exports.skip = skip;
exports.skipNode = nextNode;
exports.setKeyAttributeName = setKeyAttributeName;
exports.clearCache = clearCache;
exports.getKey = getKey;
exports.importNode = importNode;
exports.isDataInitialized = isDataInitialized;
exports.notifications = notifications;
exports.symbols = symbols;
exports.applyAttrs = applyAttrs;
exports.applyStatics = applyStatics;
exports.attr = attr;
exports.elementClose = elementClose;
exports.elementOpen = elementOpen;
exports.elementOpenEnd = elementOpenEnd;
exports.elementOpenStart = elementOpenStart;
exports.elementVoid = elementVoid;
exports.key = key;
exports.text = text$1;

});

var incrementalDomCjs$1 = unwrapExports(incrementalDomCjs);
var incrementalDomCjs_1 = incrementalDomCjs.applyAttr;
var incrementalDomCjs_2 = incrementalDomCjs.applyProp;
var incrementalDomCjs_3 = incrementalDomCjs.attributes;
var incrementalDomCjs_4 = incrementalDomCjs.alignWithDOM;
var incrementalDomCjs_5 = incrementalDomCjs.close;
var incrementalDomCjs_6 = incrementalDomCjs.createPatchInner;
var incrementalDomCjs_7 = incrementalDomCjs.createPatchOuter;
var incrementalDomCjs_8 = incrementalDomCjs.currentElement;
var incrementalDomCjs_9 = incrementalDomCjs.currentPointer;
var incrementalDomCjs_10 = incrementalDomCjs.open;
var incrementalDomCjs_11 = incrementalDomCjs.patch;
var incrementalDomCjs_12 = incrementalDomCjs.patchInner;
var incrementalDomCjs_13 = incrementalDomCjs.patchOuter;
var incrementalDomCjs_14 = incrementalDomCjs.skip;
var incrementalDomCjs_15 = incrementalDomCjs.skipNode;
var incrementalDomCjs_16 = incrementalDomCjs.setKeyAttributeName;
var incrementalDomCjs_17 = incrementalDomCjs.clearCache;
var incrementalDomCjs_18 = incrementalDomCjs.getKey;
var incrementalDomCjs_19 = incrementalDomCjs.importNode;
var incrementalDomCjs_20 = incrementalDomCjs.isDataInitialized;
var incrementalDomCjs_21 = incrementalDomCjs.notifications;
var incrementalDomCjs_22 = incrementalDomCjs.symbols;
var incrementalDomCjs_23 = incrementalDomCjs.applyAttrs;
var incrementalDomCjs_24 = incrementalDomCjs.applyStatics;
var incrementalDomCjs_25 = incrementalDomCjs.attr;
var incrementalDomCjs_26 = incrementalDomCjs.elementClose;
var incrementalDomCjs_27 = incrementalDomCjs.elementOpen;
var incrementalDomCjs_28 = incrementalDomCjs.elementOpenEnd;
var incrementalDomCjs_29 = incrementalDomCjs.elementOpenStart;
var incrementalDomCjs_30 = incrementalDomCjs.elementVoid;
var incrementalDomCjs_31 = incrementalDomCjs.key;
var incrementalDomCjs_32 = incrementalDomCjs.text;

function performRenderStep(htmlResult) {
  if (htmlResult) {
    htmlResult = normalizeHtmlResult(htmlResult);
    const { type, children, props } = htmlResult;
    if (type) {
      incrementalDomCjs_27(
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
        if (child || Number(child) === child) incrementalDomCjs_32(child);
      } else if (typeof child === "function") {
        child();
      } else {
        performRenderStep(child);
      }
    });
    if (type) {
      incrementalDomCjs_26(type);
    }
  }
}

function render(node, htmlResult) {
  return new Promise(resolve =>
    requestAnimationFrame(() => {
      incrementalDomCjs_11(node, function() {
        performRenderStep(htmlResult);
      });
      resolve();
    })
  );
}

const locationChangeCallbacks = [];

let callbackPromise;
function fireCallbacks() {
  callbackPromise = Promise.all(locationChangeCallbacks.map(cb => cb())).then(
    () => {
      callbackPromise = undefined;
    }
  );
}

window.addEventListener("popstate", () => {
  fireCallbacks();
});

function onLocationChanged(callback) {
  locationChangeCallbacks.push(callback);
}
let nextLocation;
async function changeLocation(url) {
  if (!callbackPromise) {
    history.pushState({ url }, "", url);
    await fireCallbacks();
    if (nextLocation) {
      nextLocation = undefined;
      changeLocation(nextLocation);
    }
  } else {
    nextLocation = url;
  }
}

var jsep = createCommonjsModule(function (module, exports) {
//     JavaScript Expression Parser (JSEP) 0.3.4
//     JSEP may be freely distributed under the MIT License
//     http://jsep.from.so/

/*global module: true, exports: true, console: true */
(function (root) {
	// Node Types
	// ----------

	// This is the full set of types that any JSEP node can be.
	// Store them here to save space when minified
	var COMPOUND = 'Compound',
		IDENTIFIER = 'Identifier',
		MEMBER_EXP = 'MemberExpression',
		LITERAL = 'Literal',
		THIS_EXP = 'ThisExpression',
		CALL_EXP = 'CallExpression',
		UNARY_EXP = 'UnaryExpression',
		BINARY_EXP = 'BinaryExpression',
		LOGICAL_EXP = 'LogicalExpression',
		CONDITIONAL_EXP = 'ConditionalExpression',
		ARRAY_EXP = 'ArrayExpression',

		PERIOD_CODE = 46, // '.'
		COMMA_CODE  = 44, // ','
		SQUOTE_CODE = 39, // single quote
		DQUOTE_CODE = 34, // double quotes
		OPAREN_CODE = 40, // (
		CPAREN_CODE = 41, // )
		OBRACK_CODE = 91, // [
		CBRACK_CODE = 93, // ]
		QUMARK_CODE = 63, // ?
		SEMCOL_CODE = 59, // ;
		COLON_CODE  = 58, // :

		throwError = function(message, index) {
			var error = new Error(message + ' at character ' + index);
			error.index = index;
			error.description = message;
			throw error;
		},

	// Operations
	// ----------

	// Set `t` to `true` to save space (when minified, not gzipped)
		t = true,
	// Use a quickly-accessible map to store all of the unary operators
	// Values are set to `true` (it really doesn't matter)
		unary_ops = {'-': t, '!': t, '~': t, '+': t},
	// Also use a map for the binary operations but set their values to their
	// binary precedence for quick reference:
	// see [Order of operations](http://en.wikipedia.org/wiki/Order_of_operations#Programming_language)
		binary_ops = {
			'||': 1, '&&': 2, '|': 3,  '^': 4,  '&': 5,
			'==': 6, '!=': 6, '===': 6, '!==': 6,
			'<': 7,  '>': 7,  '<=': 7,  '>=': 7,
			'<<':8,  '>>': 8, '>>>': 8,
			'+': 9, '-': 9,
			'*': 10, '/': 10, '%': 10
		},
	// Get return the longest key length of any object
		getMaxKeyLen = function(obj) {
			var max_len = 0, len;
			for(var key in obj) {
				if((len = key.length) > max_len && obj.hasOwnProperty(key)) {
					max_len = len;
				}
			}
			return max_len;
		},
		max_unop_len = getMaxKeyLen(unary_ops),
		max_binop_len = getMaxKeyLen(binary_ops),
	// Literals
	// ----------
	// Store the values to return for the various literals we may encounter
		literals = {
			'true': true,
			'false': false,
			'null': null
		},
	// Except for `this`, which is special. This could be changed to something like `'self'` as well
		this_str = 'this',
	// Returns the precedence of a binary operator or `0` if it isn't a binary operator
		binaryPrecedence = function(op_val) {
			return binary_ops[op_val] || 0;
		},
	// Utility function (gets called from multiple places)
	// Also note that `a && b` and `a || b` are *logical* expressions, not binary expressions
		createBinaryExpression = function (operator, left, right) {
			var type = (operator === '||' || operator === '&&') ? LOGICAL_EXP : BINARY_EXP;
			return {
				type: type,
				operator: operator,
				left: left,
				right: right
			};
		},
		// `ch` is a character code in the next three functions
		isDecimalDigit = function(ch) {
			return (ch >= 48 && ch <= 57); // 0...9
		},
		isIdentifierStart = function(ch) {
			return (ch === 36) || (ch === 95) || // `$` and `_`
					(ch >= 65 && ch <= 90) || // A...Z
					(ch >= 97 && ch <= 122) || // a...z
                    (ch >= 128 && !binary_ops[String.fromCharCode(ch)]); // any non-ASCII that is not an operator
		},
		isIdentifierPart = function(ch) {
			return (ch === 36) || (ch === 95) || // `$` and `_`
					(ch >= 65 && ch <= 90) || // A...Z
					(ch >= 97 && ch <= 122) || // a...z
					(ch >= 48 && ch <= 57) || // 0...9
                    (ch >= 128 && !binary_ops[String.fromCharCode(ch)]); // any non-ASCII that is not an operator
		},

		// Parsing
		// -------
		// `expr` is a string with the passed in expression
		jsep = function(expr) {
			// `index` stores the character number we are currently at while `length` is a constant
			// All of the gobbles below will modify `index` as we move along
			var index = 0,
				charAtFunc = expr.charAt,
				charCodeAtFunc = expr.charCodeAt,
				exprI = function(i) { return charAtFunc.call(expr, i); },
				exprICode = function(i) { return charCodeAtFunc.call(expr, i); },
				length = expr.length,

				// Push `index` up to the next non-space character
				gobbleSpaces = function() {
					var ch = exprICode(index);
					// space or tab
					while(ch === 32 || ch === 9 || ch === 10 || ch === 13) {
						ch = exprICode(++index);
					}
				},

				// The main parsing function. Much of this code is dedicated to ternary expressions
				gobbleExpression = function() {
					var test = gobbleBinaryExpression(),
						consequent, alternate;
					gobbleSpaces();
					if(exprICode(index) === QUMARK_CODE) {
						// Ternary expression: test ? consequent : alternate
						index++;
						consequent = gobbleExpression();
						if(!consequent) {
							throwError('Expected expression', index);
						}
						gobbleSpaces();
						if(exprICode(index) === COLON_CODE) {
							index++;
							alternate = gobbleExpression();
							if(!alternate) {
								throwError('Expected expression', index);
							}
							return {
								type: CONDITIONAL_EXP,
								test: test,
								consequent: consequent,
								alternate: alternate
							};
						} else {
							throwError('Expected :', index);
						}
					} else {
						return test;
					}
				},

				// Search for the operation portion of the string (e.g. `+`, `===`)
				// Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
				// and move down from 3 to 2 to 1 character until a matching binary operation is found
				// then, return that binary operation
				gobbleBinaryOp = function() {
					gobbleSpaces();
					var to_check = expr.substr(index, max_binop_len), tc_len = to_check.length;
					while(tc_len > 0) {
						// Don't accept a binary op when it is an identifier.
						// Binary ops that start with a identifier-valid character must be followed
						// by a non identifier-part valid character
						if(binary_ops.hasOwnProperty(to_check) && (
							!isIdentifierStart(exprICode(index)) ||
							(index+to_check.length< expr.length && !isIdentifierPart(exprICode(index+to_check.length)))
						)) {
							index += tc_len;
							return to_check;
						}
						to_check = to_check.substr(0, --tc_len);
					}
					return false;
				},

				// This function is responsible for gobbling an individual expression,
				// e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
				gobbleBinaryExpression = function() {
					var node, biop, prec, stack, biop_info, left, right, i;

					// First, try to get the leftmost thing
					// Then, check to see if there's a binary operator operating on that leftmost thing
					left = gobbleToken();
					biop = gobbleBinaryOp();

					// If there wasn't a binary operator, just return the leftmost node
					if(!biop) {
						return left;
					}

					// Otherwise, we need to start a stack to properly place the binary operations in their
					// precedence structure
					biop_info = { value: biop, prec: binaryPrecedence(biop)};

					right = gobbleToken();
					if(!right) {
						throwError("Expected expression after " + biop, index);
					}
					stack = [left, biop_info, right];

					// Properly deal with precedence using [recursive descent](http://www.engr.mun.ca/~theo/Misc/exp_parsing.htm)
					while((biop = gobbleBinaryOp())) {
						prec = binaryPrecedence(biop);

						if(prec === 0) {
							break;
						}
						biop_info = { value: biop, prec: prec };

						// Reduce: make a binary expression from the three topmost entries.
						while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
							right = stack.pop();
							biop = stack.pop().value;
							left = stack.pop();
							node = createBinaryExpression(biop, left, right);
							stack.push(node);
						}

						node = gobbleToken();
						if(!node) {
							throwError("Expected expression after " + biop, index);
						}
						stack.push(biop_info, node);
					}

					i = stack.length - 1;
					node = stack[i];
					while(i > 1) {
						node = createBinaryExpression(stack[i - 1].value, stack[i - 2], node);
						i -= 2;
					}
					return node;
				},

				// An individual part of a binary expression:
				// e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
				gobbleToken = function() {
					var ch, to_check, tc_len;

					gobbleSpaces();
					ch = exprICode(index);

					if(isDecimalDigit(ch) || ch === PERIOD_CODE) {
						// Char code 46 is a dot `.` which can start off a numeric literal
						return gobbleNumericLiteral();
					} else if(ch === SQUOTE_CODE || ch === DQUOTE_CODE) {
						// Single or double quotes
						return gobbleStringLiteral();
					} else if (ch === OBRACK_CODE) {
						return gobbleArray();
					} else {
						to_check = expr.substr(index, max_unop_len);
						tc_len = to_check.length;
						while(tc_len > 0) {
						// Don't accept an unary op when it is an identifier.
						// Unary ops that start with a identifier-valid character must be followed
						// by a non identifier-part valid character
							if(unary_ops.hasOwnProperty(to_check) && (
								!isIdentifierStart(exprICode(index)) ||
								(index+to_check.length < expr.length && !isIdentifierPart(exprICode(index+to_check.length)))
							)) {
								index += tc_len;
								return {
									type: UNARY_EXP,
									operator: to_check,
									argument: gobbleToken(),
									prefix: true
								};
							}
							to_check = to_check.substr(0, --tc_len);
						}

						if (isIdentifierStart(ch) || ch === OPAREN_CODE) { // open parenthesis
							// `foo`, `bar.baz`
							return gobbleVariable();
						}
					}

					return false;
				},
				// Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
				// keep track of everything in the numeric literal and then calling `parseFloat` on that string
				gobbleNumericLiteral = function() {
					var number = '', ch, chCode;
					while(isDecimalDigit(exprICode(index))) {
						number += exprI(index++);
					}

					if(exprICode(index) === PERIOD_CODE) { // can start with a decimal marker
						number += exprI(index++);

						while(isDecimalDigit(exprICode(index))) {
							number += exprI(index++);
						}
					}

					ch = exprI(index);
					if(ch === 'e' || ch === 'E') { // exponent marker
						number += exprI(index++);
						ch = exprI(index);
						if(ch === '+' || ch === '-') { // exponent sign
							number += exprI(index++);
						}
						while(isDecimalDigit(exprICode(index))) { //exponent itself
							number += exprI(index++);
						}
						if(!isDecimalDigit(exprICode(index-1)) ) {
							throwError('Expected exponent (' + number + exprI(index) + ')', index);
						}
					}


					chCode = exprICode(index);
					// Check to make sure this isn't a variable name that start with a number (123abc)
					if(isIdentifierStart(chCode)) {
						throwError('Variable names cannot start with a number (' +
									number + exprI(index) + ')', index);
					} else if(chCode === PERIOD_CODE) {
						throwError('Unexpected period', index);
					}

					return {
						type: LITERAL,
						value: parseFloat(number),
						raw: number
					};
				},

				// Parses a string literal, staring with single or double quotes with basic support for escape codes
				// e.g. `"hello world"`, `'this is\nJSEP'`
				gobbleStringLiteral = function() {
					var str = '', quote = exprI(index++), closed = false, ch;

					while(index < length) {
						ch = exprI(index++);
						if(ch === quote) {
							closed = true;
							break;
						} else if(ch === '\\') {
							// Check for all of the common escape codes
							ch = exprI(index++);
							switch(ch) {
								case 'n': str += '\n'; break;
								case 'r': str += '\r'; break;
								case 't': str += '\t'; break;
								case 'b': str += '\b'; break;
								case 'f': str += '\f'; break;
								case 'v': str += '\x0B'; break;
								default : str += ch;
							}
						} else {
							str += ch;
						}
					}

					if(!closed) {
						throwError('Unclosed quote after "'+str+'"', index);
					}

					return {
						type: LITERAL,
						value: str,
						raw: quote + str + quote
					};
				},

				// Gobbles only identifiers
				// e.g.: `foo`, `_value`, `$x1`
				// Also, this function checks if that identifier is a literal:
				// (e.g. `true`, `false`, `null`) or `this`
				gobbleIdentifier = function() {
					var ch = exprICode(index), start = index, identifier;

					if(isIdentifierStart(ch)) {
						index++;
					} else {
						throwError('Unexpected ' + exprI(index), index);
					}

					while(index < length) {
						ch = exprICode(index);
						if(isIdentifierPart(ch)) {
							index++;
						} else {
							break;
						}
					}
					identifier = expr.slice(start, index);

					if(literals.hasOwnProperty(identifier)) {
						return {
							type: LITERAL,
							value: literals[identifier],
							raw: identifier
						};
					} else if(identifier === this_str) {
						return { type: THIS_EXP };
					} else {
						return {
							type: IDENTIFIER,
							name: identifier
						};
					}
				},

				// Gobbles a list of arguments within the context of a function call
				// or array literal. This function also assumes that the opening character
				// `(` or `[` has already been gobbled, and gobbles expressions and commas
				// until the terminator character `)` or `]` is encountered.
				// e.g. `foo(bar, baz)`, `my_func()`, or `[bar, baz]`
				gobbleArguments = function(termination) {
					var ch_i, args = [], node, closed = false;
					while(index < length) {
						gobbleSpaces();
						ch_i = exprICode(index);
						if(ch_i === termination) { // done parsing
							closed = true;
							index++;
							break;
						} else if (ch_i === COMMA_CODE) { // between expressions
							index++;
						} else {
							node = gobbleExpression();
							if(!node || node.type === COMPOUND) {
								throwError('Expected comma', index);
							}
							args.push(node);
						}
					}
					if (!closed) {
						throwError('Expected ' + String.fromCharCode(termination), index);
					}
					return args;
				},

				// Gobble a non-literal variable name. This variable name may include properties
				// e.g. `foo`, `bar.baz`, `foo['bar'].baz`
				// It also gobbles function calls:
				// e.g. `Math.acos(obj.angle)`
				gobbleVariable = function() {
					var ch_i, node;
					ch_i = exprICode(index);

					if(ch_i === OPAREN_CODE) {
						node = gobbleGroup();
					} else {
						node = gobbleIdentifier();
					}
					gobbleSpaces();
					ch_i = exprICode(index);
					while(ch_i === PERIOD_CODE || ch_i === OBRACK_CODE || ch_i === OPAREN_CODE) {
						index++;
						if(ch_i === PERIOD_CODE) {
							gobbleSpaces();
							node = {
								type: MEMBER_EXP,
								computed: false,
								object: node,
								property: gobbleIdentifier()
							};
						} else if(ch_i === OBRACK_CODE) {
							node = {
								type: MEMBER_EXP,
								computed: true,
								object: node,
								property: gobbleExpression()
							};
							gobbleSpaces();
							ch_i = exprICode(index);
							if(ch_i !== CBRACK_CODE) {
								throwError('Unclosed [', index);
							}
							index++;
						} else if(ch_i === OPAREN_CODE) {
							// A function call is being made; gobble all the arguments
							node = {
								type: CALL_EXP,
								'arguments': gobbleArguments(CPAREN_CODE),
								callee: node
							};
						}
						gobbleSpaces();
						ch_i = exprICode(index);
					}
					return node;
				},

				// Responsible for parsing a group of things within parentheses `()`
				// This function assumes that it needs to gobble the opening parenthesis
				// and then tries to gobble everything within that parenthesis, assuming
				// that the next thing it should see is the close parenthesis. If not,
				// then the expression probably doesn't have a `)`
				gobbleGroup = function() {
					index++;
					var node = gobbleExpression();
					gobbleSpaces();
					if(exprICode(index) === CPAREN_CODE) {
						index++;
						return node;
					} else {
						throwError('Unclosed (', index);
					}
				},

				// Responsible for parsing Array literals `[1, 2, 3]`
				// This function assumes that it needs to gobble the opening bracket
				// and then tries to gobble the expressions as arguments.
				gobbleArray = function() {
					index++;
					return {
						type: ARRAY_EXP,
						elements: gobbleArguments(CBRACK_CODE)
					};
				},

				nodes = [], ch_i, node;

			while(index < length) {
				ch_i = exprICode(index);

				// Expressions can be separated by semicolons, commas, or just inferred without any
				// separators
				if(ch_i === SEMCOL_CODE || ch_i === COMMA_CODE) {
					index++; // ignore separators
				} else {
					// Try to gobble each expression individually
					if((node = gobbleExpression())) {
						nodes.push(node);
					// If we weren't able to find a binary expression and are out of room, then
					// the expression passed in probably has too much
					} else if(index < length) {
						throwError('Unexpected "' + exprI(index) + '"', index);
					}
				}
			}

			// If there's only one expression just try returning the expression
			if(nodes.length === 1) {
				return nodes[0];
			} else {
				return {
					type: COMPOUND,
					body: nodes
				};
			}
		};

	// To be filled in by the template
	jsep.version = '0.3.4';
	jsep.toString = function() { return 'JavaScript Expression Parser (JSEP) v' + jsep.version; };

	/**
	 * @method jsep.addUnaryOp
	 * @param {string} op_name The name of the unary op to add
	 * @return jsep
	 */
	jsep.addUnaryOp = function(op_name) {
		max_unop_len = Math.max(op_name.length, max_unop_len);
		unary_ops[op_name] = t; return this;
	};

	/**
	 * @method jsep.addBinaryOp
	 * @param {string} op_name The name of the binary op to add
	 * @param {number} precedence The precedence of the binary op (can be a float)
	 * @return jsep
	 */
	jsep.addBinaryOp = function(op_name, precedence) {
		max_binop_len = Math.max(op_name.length, max_binop_len);
		binary_ops[op_name] = precedence;
		return this;
	};

	/**
	 * @method jsep.addLiteral
	 * @param {string} literal_name The name of the literal to add
	 * @param {*} literal_value The value of the literal
	 * @return jsep
	 */
	jsep.addLiteral = function(literal_name, literal_value) {
		literals[literal_name] = literal_value;
		return this;
	};

	/**
	 * @method jsep.removeUnaryOp
	 * @param {string} op_name The name of the unary op to remove
	 * @return jsep
	 */
	jsep.removeUnaryOp = function(op_name) {
		delete unary_ops[op_name];
		if(op_name.length === max_unop_len) {
			max_unop_len = getMaxKeyLen(unary_ops);
		}
		return this;
	};

	/**
	 * @method jsep.removeAllUnaryOps
	 * @return jsep
	 */
	jsep.removeAllUnaryOps = function() {
		unary_ops = {};
		max_unop_len = 0;

		return this;
	};

	/**
	 * @method jsep.removeBinaryOp
	 * @param {string} op_name The name of the binary op to remove
	 * @return jsep
	 */
	jsep.removeBinaryOp = function(op_name) {
		delete binary_ops[op_name];
		if(op_name.length === max_binop_len) {
			max_binop_len = getMaxKeyLen(binary_ops);
		}
		return this;
	};

	/**
	 * @method jsep.removeAllBinaryOps
	 * @return jsep
	 */
	jsep.removeAllBinaryOps = function() {
		binary_ops = {};
		max_binop_len = 0;

		return this;
	};

	/**
	 * @method jsep.removeLiteral
	 * @param {string} literal_name The name of the literal to remove
	 * @return jsep
	 */
	jsep.removeLiteral = function(literal_name) {
		delete literals[literal_name];
		return this;
	};

	/**
	 * @method jsep.removeAllLiterals
	 * @return jsep
	 */
	jsep.removeAllLiterals = function() {
		literals = {};

		return this;
	};

	// In desktop environments, have a way to restore the old value for `jsep`
	{
		// In Node.JS environments
		if ( module.exports) {
			exports = module.exports = jsep;
		} else {
			exports.parse = jsep;
		}
	}
}());
});
var jsep_1 = jsep.parse;

const binops = {
  "||": function(a, b) {
    return a || b;
  },
  "&&": function(a, b) {
    return a && b;
  },
  "|": function(a, b) {
    return a | b;
  },
  "^": function(a, b) {
    return a ^ b;
  },
  "&": function(a, b) {
    return a & b;
  },
  "==": function(a, b) {
    return a == b;
  }, // jshint ignore:line
  "!=": function(a, b) {
    return a != b;
  }, // jshint ignore:line
  "===": function(a, b) {
    return a === b;
  },
  "!==": function(a, b) {
    return a !== b;
  },
  "<": function(a, b) {
    return a < b;
  },
  ">": function(a, b) {
    return a > b;
  },
  "<=": function(a, b) {
    return a <= b;
  },
  ">=": function(a, b) {
    return a >= b;
  },
  "<<": function(a, b) {
    return a << b;
  },
  ">>": function(a, b) {
    return a >> b;
  },
  ">>>": function(a, b) {
    return a >>> b;
  },
  "+": function(a, b) {
    return a + b;
  },
  "-": function(a, b) {
    return a - b;
  },
  "*": function(a, b) {
    return a * b;
  },
  "/": function(a, b) {
    return a / b;
  },
  "%": function(a, b) {
    return a % b;
  }
};

const unops = {
  "-": function(a) {
    return -a;
  },
  "+": function(a) {
    return +a;
  },
  "~": function(a) {
    return ~a;
  },
  "!": function(a) {
    return !a;
  }
};

function evaluateArray(list, context) {
  return list.map(function(v) {
    return evaluate(v, context);
  });
}

function evaluateMember(node, context) {
  const object = evaluate(node.object, context);
  if (node.computed) {
    return [object, object[evaluate(node.property, context)]];
  } else {
    return [object, object[node.property.name]];
  }
}

function evaluate(node, context) {
  switch (node.type) {
    case "ArrayExpression":
      return evaluateArray(node.elements, context);

    case "BinaryExpression":
      return binops[node.operator](
        evaluate(node.left, context),
        evaluate(node.right, context)
      );

    case "CallExpression":
      let caller, fn, assign;
      if (node.callee.type === "MemberExpression") {
        assign = evaluateMember(node.callee, context);
        caller = assign[0];
        fn = assign[1];
      } else {
        fn = evaluate(node.callee, context);
      }
      if (typeof fn !== "function") {
        return undefined;
      }
      return fn.apply(caller, evaluateArray(node.arguments, context));

    case "ConditionalExpression":
      return evaluate(node.test, context)
        ? evaluate(node.consequent, context)
        : evaluate(node.alternate, context);

    case "Identifier":
      return context[node.name];

    case "Literal":
      return node.value;

    case "LogicalExpression":
      if (node.operator === "||") {
        return evaluate(node.left, context) || evaluate(node.right, context);
      } else if (node.operator === "&&") {
        return evaluate(node.left, context) && evaluate(node.right, context);
      }
      return binops[node.operator](
        evaluate(node.left, context),
        evaluate(node.right, context)
      );

    case "MemberExpression":
      return evaluateMember(node, context)[1];

    case "ThisExpression":
      return context;

    case "UnaryExpression":
      return unops[node.operator](evaluate(node.argument, context));

    default:
      return undefined;
  }
}

const isProxyMap = new WeakSet();
function proxify(obj, onChange, hooks = {}) {
  let initialized = false;
  let onChangeWrapped = () => {
    if (initialized) {
      onChange();
    }
  };
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === "object" && !isProxyMap.has(obj[key])) {
      obj[key] = proxify(obj[key], onChange);
    }
  });
  const proxy = new Proxy(obj, {
    get: (obj, prop) => {
      if (hooks.get) {
        hooks.get(obj, prop);
      }
      return obj[prop];
    },
    set: (obj, prop, value) => {
      if (hooks.set) {
        value = hooks.set(obj, prop, value);
      }
      if (typeof value === "object" && !isProxyMap.has(value)) {
        value = proxify(value, onChangeWrapped);
      }
      if (
        (obj[prop] !== value || !initialized) &&
        prop !== "__$p" &&
        prop !== "on"
      ) {
        obj[prop] = value;
        onChangeWrapped();
      }
      obj[prop] = value;
      return true;
    }
  });
  isProxyMap.add(proxy);
  initialized = true;
  return proxy;
}

const $state = initialState => {
  let listeners = [];
  let canEmit = true;
  const proxy = proxify(initialState, () => {
    if (canEmit) {
      listeners.forEach(l => l(proxy));
    }
  });
  proxy.on = listener => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  };
  proxy.merge = otherState => {
    const performMerge = value => {
      Object.keys(value).forEach(key => {
        if (!["on", "merge"].includes(key)) {
          proxy[key] = value[key];
        }
      });
    };
    otherState.on(value => {
      performMerge(value);
    });
    canEmit = false;
    performMerge(otherState);
    canEmit = true;
  };
  return proxy;
};

const state = $state({});

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
function mountDirectives() {
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

function createDirective(name, callback) {
  window[DIRECTIVES][name] = callback;
  mountDirectives();
}

createDirective("bind-value", function*(node, path) {
  let object;
  let key;
  if (path.includes(".")) ; else {
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

let linkData = {};
function handleLinks() {
  const linkNodes = getLinks();
  linkData = fetchLinkData(getLinks(), linkData);
  linkNodes.forEach(node => {
    node.addEventListener("click", e => {
      const url = e.target.href;
      if (url) {
        e.preventDefault();
        changeLocation(url);
      }
    });
  });
}

function start() {
  documentReady(() => {
    removeEmptyTextNodes(document.body);
    handleLinks();
    onLocationChanged(() => {
      const url = window.location.href;
      return linkData[url].then(async ({ htmlResult, title }) => {
        if (url === window.location.href) {
          document.title = title;
          await render(document.body, htmlResult);
          handleLinks();
          mountDirectives();
        }
      });
    });
  });
}

export { createDirective, start };
