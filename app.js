// If a MatchPlant dashboard is already running on this computer, show a
// banner linking to it. A dashboard on 127.0.0.1 is exempt from
// mixed-content blocking (browsers treat loopback addresses as trustworthy
// even from an https page), so this fetch is allowed. mode: "no-cors" means
// we can't read the response, only whether the request reached a live
// server, which is all we need to decide whether to show the banner.
const DASHBOARD_URL = "http://127.0.0.1:5050/";
const CHECK_TIMEOUT_MS = 1000;

const heroVideo = document.querySelector(".hero-photo");
const videoPlayButton = document.querySelector(".video-play");

if (heroVideo && videoPlayButton) {
  // Muted inline playback is eligible for browser autoplay. The button gives
  // visitors a way to start the preview if their browser still blocks it.
  heroVideo.muted = true;
  heroVideo.defaultMuted = true;

  async function startHeroVideo() {
    try {
      await heroVideo.play();
      videoPlayButton.hidden = true;
    } catch (error) {
      videoPlayButton.hidden = false;
    }
  }

  videoPlayButton.addEventListener("click", startHeroVideo);
  heroVideo.addEventListener("playing", () => { videoPlayButton.hidden = true; });
  heroVideo.addEventListener("pause", () => {
    if (!document.hidden && !heroVideo.ended) videoPlayButton.hidden = false;
  });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && heroVideo.paused) startHeroVideo();
  });
  startHeroVideo();
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
