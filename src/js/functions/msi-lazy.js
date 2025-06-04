// export default class MsiLazyVideo {
//   constructor(videoUrl, button, container, options = {}) {
//     const defaultOptions = {
//       isFile: false,
//     };

//     this.options = Object.assign(defaultOptions, options);
//     this.videoUrl = videoUrl;
//     this.button = button;
//     this.container = container;

//     this.init();
//   }

//   init() {
//     if (!this.button || !this.container) return;

//     this.button.addEventListener("click", () => this.loadVideo());
//   }

//   loadVideo() {
//     const content = this.container.querySelector('.graph-modal__content');

//     // Если видео уже загружено — ничего не делаем
//     if (content.querySelector('video, iframe')) return;

//     if (this.options.isFile) {
//       const video = document.createElement('video');
//       video.src = this.videoUrl;
//       video.controls = true;
//       video.autoplay = true;
//       content.appendChild(video);
//     } else {
//       const iframe = document.createElement("iframe");
//       iframe.src = `${this.videoUrl}?autoplay=1`;
//       iframe.allow = "autoplay; encrypted-media";
//       iframe.allowFullscreen = true;
//       content.appendChild(iframe);
//     }
//   }
// }




// рабочий вариант ----------------------------------------------------------------------------------------------------------------------------------------------
// export default class MsiLazyVideo {
//   constructor(videoUrl, button, container, options = {}) {
//     const defaultOptions = {
//       isFile: false,
//     };

//     this.options = Object.assign(defaultOptions, options);
//     this.videoUrl = videoUrl;
//     this.button = button;
//     this.container = container;

//     this.init();
//   }

//   init() {
//     if (!this.button || !this.container) return;

//     this.button.addEventListener("click", () => this.loadVideo());
//   }

//   loadVideo() {
//     if(this.container.querySelector('.graph-modal__content')) {
//     const content = this.container.querySelector('.graph-modal__content');

//     // Если видео уже загружено — ничего не делаем
//     if (content.querySelector('video, iframe')) return;

//     if (this.options.isFile) {
//       const video = document.createElement('video');
//       video.src = this.videoUrl;
//       video.controls = true;
//       video.autoplay = true;
//       content.appendChild(video);
//     } else {
//       const iframe = document.createElement("iframe");
//       iframe.src = `${this.videoUrl}?autoplay=1`;
//       iframe.allow = "autoplay; encrypted-media";
//       iframe.allowFullscreen = true;
//       content.appendChild(iframe);
//     }
//     }

//     if(this.container.querySelector('.video-block__movie-block')) {
//     const content = this.container.querySelector('.video-block__movie-block');

//     // Если видео уже загружено — ничего не делаем
//     if (content.querySelector('video, iframe')) return;

//     if (this.options.isFile) {
//       const video = document.createElement('video');
//       video.src = this.videoUrl;
//       video.controls = true;
//       video.autoplay = true;
//       video.muted = true;
//       video.classList.add('video-block__movie');
//       video.classList.add('video-js');
//       video.classList.add('vjs-theme-fantasy');
//       content.appendChild(video);
//     } else {
//       const iframe = document.createElement("iframe");
//       iframe.src = `${this.videoUrl}?autoplay=1`;
//       iframe.allow = "autoplay; encrypted-media";
//       iframe.allowFullscreen = true;
//       content.appendChild(iframe);
//     }
//     }
//   }
// }
//-----------------------------------------------------------------------------------------------------------------------------------------
export default class MsiLazyVideo {
  constructor(videoUrl, button, container, options = {}) {
    const defaultOptions = {
      isFile: false,
      isVideoJs: false,
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
    // Если видео уже загружено — ничего не делаем
    // if (content.querySelector('video, iframe')) return;
    if (this.container.querySelector('video, iframe')) return;

      if (this.options.isFile) {
        const video = document.createElement('video');
        video.src = this.videoUrl;
        video.controls = true;
        video.autoplay = true;
        video.muted = true;
        if (this.options.isVideoJs === true) {
          video.classList.add('video-block__movie');
          video.classList.add('video-js');
          video.classList.add('vjs-theme-fantasy');
        } else {
          video.classList.add('simple-video');
        }
        this.container.appendChild(video);
      } else {
        const iframe = document.createElement("iframe");
        iframe.src = `${this.videoUrl}?autoplay=1`;
        iframe.allow = "autoplay; encrypted-media";
        iframe.allowFullscreen = true;
        this.container.appendChild(iframe);
      }
  }
}
