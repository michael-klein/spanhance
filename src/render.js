import {
  patch,
  text,
  elementOpen,
  elementClose,
  currentPointer,
  skip
} from "../web_modules/incremental-dom.js";
import { normalizeHtmlResult } from "./html.js";

function performRenderStep(htmlResult) {
  if (htmlResult) {
    htmlResult = normalizeHtmlResult(htmlResult);
    const { type, children, props } = htmlResult;
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

export function render(node, htmlResult) {
  return new Promise(resolve =>
    requestAnimationFrame(() => {
      patch(node, function() {
        performRenderStep(htmlResult);
      });
      resolve();
    })
  );
}
