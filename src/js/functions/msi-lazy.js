export default class MsiLazyVideo {
  constructor(videoUrl, button, container, options = {}) {
    const defaultOptions = {
      isFile: false,
    };

    this.options = Object.assign(defaultOptions, options);
    this.videoUrl = videoUrl;
    this.button = button;
    this.container = container;

    this.init();
  }

  init() {
    if (!this.button || !this.container) return;

    this.button.addEventListener("click", () => this.loadVideo());
  }

  loadVideo() {
    const content = this.container.querySelector('.graph-modal__content');

    // Если видео уже загружено — ничего не делаем
    if (content.querySelector('video, iframe')) return;

    if (this.options.isFile) {
      const video = document.createElement('video');
      video.src = this.videoUrl;
      video.controls = true;
      video.autoplay = true;
      content.appendChild(video);
    } else {
      const iframe = document.createElement("iframe");
      iframe.src = `${this.videoUrl}?autoplay=1`;
      iframe.allow = "autoplay; encrypted-media";
      iframe.allowFullscreen = true;
      content.appendChild(iframe);
    }
  }
}
