import MsiLazyVideo from '../functions/msi-lazy.js';
import videojs from 'video.js';

function getVideo() {
  const videos = document.querySelectorAll('.video-block__movie');
  videos.forEach(video => {
    videojs(video);
  })
}

//Лучший вариант chatgpt,
// заполнять атрибуты data-video в разметке и делать одинаковые значения атрибутов кнопки и модалки
// const buttons = document.querySelectorAll('.thumb-video__btn');
// buttons.forEach(button => {
//   const path = button.dataset.graphPath;
//   const videoUrl = button.dataset.video;
//   const container = document.querySelector(`[data-graph-target="${path}"]`);

//   if (!container || !videoUrl) return;

//   new MsiLazyVideo(videoUrl, button, container, {isFile : false});
// });

// const buttonsVid = document.querySelectorAll('.video-block__play');
// buttonsVid.forEach(button => {
//   const path = button.dataset.videoBtn;
//   const videoUrl = button.dataset.videoSrc;
//   const container = document.querySelector(`[data-video-block="${path}"]`);

//   if (!container || !videoUrl) return;

//   new MsiLazyVideo(videoUrl, button, container, {isFile : true});
//   button.addEventListener("click", () => {
//     getVideo();
//   });
//   // getVideo();
// })


// document.addEventListener("click", function(e) {
//   const targetElement = e.target;

//   if(targetElement.closest('.video-block__play')) {
//     const currentBtn = targetElement.closest('.video-block__play');
//     const currentVideoBlock = currentBtn.closest('.video-block');
//     if(!currentVideoBlock.classList.contains('open-video')) {
//       currentVideoBlock.classList.add('open-video');
//     }
//   }
// })





const buttons = document.querySelectorAll('.lazy-play');
buttons.forEach(button => {
  const path = button.dataset.lazyBtn;
  const videoUrl = button.dataset.videoSrc;
  const container = document.querySelector(`[data-lazy-video="${path}"]`);

  if (!container || !videoUrl) return;

  if(button.hasAttribute('data-lazy-iframe')) {
    new MsiLazyVideo(videoUrl, button, container);
  } else {
    new MsiLazyVideo(videoUrl, button, container, {isFile : true, isVideoJs : true});
    button.addEventListener("click", () => {
      getVideo();
    });
  }


})

document.addEventListener("click", function(e) {
  const targetElement = e.target;

  if(targetElement.closest('.video-block__play')) {
    const currentBtn = targetElement.closest('.video-block__play');
    const currentVideoBlock = currentBtn.closest('.video-block');
    if(!currentVideoBlock.classList.contains('open-video')) {
      currentVideoBlock.classList.add('open-video');
    }
  }
})





//второй вариант без плагина (мой)
// добавлять новые условия в код и заполнять buttonData === "текст как у атрибутов кнопки и модалки"

// const hero = "https://www.youtube.com/embed/80IIEnSNwQc?si=YErQQImF3CwyXVK7";
// const vr = "https://www.youtube.com/embed/bdc9rcrZW8I?si=dp6g1HcZAQCuCFOM";


// function modalVideo() {
//   document.addEventListener("click", function(e) {
//     const targetElement = e.target;

//     if(targetElement.closest('.thumb-video__btn')) {
//       const activeButton = targetElement.closest('.thumb-video__btn');
//       const buttonData = activeButton.dataset.graphPath;
//       const graphModal = document.querySelector(`[data-graph-target="${buttonData}"]`);

//       if(buttonData === "hero") {
//         if(!activeButton.classList.contains('active-button')) {
//           activeButton.classList.add('active-button');
//           const activeContent = graphModal.querySelector('.graph-modal__content');
//           const iframe = document.createElement("iframe");
//           iframe.src = `${hero}?autoplay=1`;
//           iframe.allow = "autoplay; encrypted-media";
//           iframe.allowFullscreen = true;
//           activeContent.appendChild(iframe);
//         }
//       }
//       if(buttonData === "vr") {
//         if(!activeButton.classList.contains('active-button')) {
//           activeButton.classList.add('active-button');
//           const activeContent = graphModal.querySelector('.graph-modal__content');
//           const iframe = document.createElement("iframe");
//           iframe.src = `${vr}?autoplay=1`;
//           iframe.allow = "autoplay; encrypted-media";
//           iframe.allowFullscreen = true;
//           activeContent.appendChild(iframe);
//         }
//       }

//     }
//   })
// }
// modalVideo();










