const DASHBOARD_URL = "http://127.0.0.1:5050/";
const CHECK_TIMEOUT_MS = 1000;

const checkingEl = document.getElementById("checking");
const notFoundEl = document.getElementById("not-found");
const foundEl = document.getElementById("found");
const retryBtn = document.getElementById("retry");

function show(el) {
  checkingEl.hidden = el !== checkingEl;
  notFoundEl.hidden = el !== notFoundEl;
  foundEl.hidden = el !== foundEl;
}

// A dashboard running on 127.0.0.1 is exempt from mixed-content blocking
// (browsers treat loopback addresses as trustworthy even from an https
// page), so this fetch is allowed. mode: "no-cors" means we can't read the
// response body or status, only whether the request reached a live server
// at all -- which is all we need to decide whether to redirect.
async function checkLocalDashboard() {
  show(checkingEl);
  try {
    await fetch(DASHBOARD_URL, {
      mode: "no-cors",
      cache: "no-store",
      signal: AbortSignal.timeout(CHECK_TIMEOUT_MS),
    });
    show(foundEl);
    window.location.href = DASHBOARD_URL;
  } catch (err) {
    show(notFoundEl);
  }
}

retryBtn.addEventListener("click", checkLocalDashboard);
checkLocalDashboard();
