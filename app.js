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

const walkthroughVideo = document.querySelector(".walkthrough-video");
const walkthroughPlayButton = document.querySelector(".walkthrough-play");

if (walkthroughVideo && walkthroughPlayButton) {
  walkthroughPlayButton.hidden = false;
  walkthroughPlayButton.addEventListener("click", () => {
    walkthroughVideo.play().catch(() => {
      // Leave the browser's built-in controls available if playback fails.
      walkthroughPlayButton.hidden = true;
    });
  });
  walkthroughVideo.addEventListener("playing", () => {
    walkthroughPlayButton.hidden = true;
  });
}
