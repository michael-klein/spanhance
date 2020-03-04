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

export function onLocationChanged(callback) {
  locationChangeCallbacks.push(callback);
}
let nextLocation;
export async function changeLocation(url) {
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
