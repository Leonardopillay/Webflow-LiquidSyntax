// live-reload.js

let isLiveReloading = false;
let reloadInterval = null;

/**
 * Starts polling the current page for changes.
 */
export function startLiveReload() {
  if (isLiveReloading) return;

  isLiveReloading = true;
  reloadInterval = setInterval(() => {
    fetch(window.location.href, { cache: "no-store" })
      .then((res) => res.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const newBody = doc.querySelector("body").innerHTML;
        const currentBody = document.body.innerHTML;

        if (newBody !== currentBody) {
          console.log("[LiveReload] Detected change. Reloading...");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.warn("[LiveReload] Fetch error:", err);
      });
  }, 3000);

  console.log("[LiveReload] Started.");
}

/**
 * Stops the live reload polling loop.
 */
export function stopLiveReload() {
  if (!isLiveReloading) return;

  isLiveReloading = false;
  clearInterval(reloadInterval);
  reloadInterval = null;

  console.log("[LiveReload] Stopped.");
}

/**
 * Toggles between active/inactive reload mode.
 */
export function toggleLiveReload() {
  if (isLiveReloading) {
    stopLiveReload();
  } else {
    startLiveReload();
  }
}
