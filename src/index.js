import {
  documentReady,
  fetchLinkData,
  getLinks,
  removeEmptyTextNodes
} from "./utils.js";
import { render } from "./render.js";
import { onLocationChanged, changeLocation } from "./routing.js";
import { mountDirectives } from "./directives.js";
export { state } from "./state.js";
export { createDirective } from "./directives.js";

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

const onBeforeLocationChangeListeners = [];
export function onBeforeLocationChange(callback) {
  onBeforeLocationChangeListeners.push(callback);
}

export function start() {
  documentReady(() => {
    removeEmptyTextNodes(document.body);
    handleLinks();
    onLocationChanged(() => {
      const url = window.location.href;
      return linkData[url].then(async ({ htmlResult, title }) => {
        onBeforeLocationChangeListeners.forEach(callback => callback());
        onBeforeLocationChangeListeners.length = 0;
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
