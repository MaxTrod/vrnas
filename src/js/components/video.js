import MsiLazyVideo from '../functions/msi-lazy.js';

//Лучший вариант chatgpt,
// заполнять атрибуты data-video в разметке и делать одинаковые значения атрибутов кнопки и модалки
const buttons = document.querySelectorAll('.thumb-video__btn');
buttons.forEach(button => {
  const path = button.dataset.graphPath;
  const videoUrl = button.dataset.video;
  const container = document.querySelector(`[data-graph-target="${path}"]`);

  if (!container || !videoUrl) return;

  new MsiLazyVideo(videoUrl, button, container);
});


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






