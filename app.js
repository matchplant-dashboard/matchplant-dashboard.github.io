// If a MatchPlant dashboard is already running on this computer, show a
// banner linking to it. A dashboard on 127.0.0.1 is exempt from
// mixed-content blocking (browsers treat loopback addresses as trustworthy
// even from an https page), so this fetch is allowed. mode: "no-cors" means
// we can't read the response, only whether the request reached a live
// server, which is all we need to decide whether to show the banner.
const DASHBOARD_URL = "http://127.0.0.1:5050/";
const CHECK_TIMEOUT_MS = 1000;

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelector(".hero-photo")?.pause();
}

(async function checkLocalDashboard() {
  try {
    await fetch(DASHBOARD_URL, {
      mode: "no-cors",
      cache: "no-store",
      signal: AbortSignal.timeout(CHECK_TIMEOUT_MS),
    });
    document.getElementById("dash-found").hidden = false;
  } catch (err) {
    // Nothing running locally; the install steps below cover that case.
  }
})();
