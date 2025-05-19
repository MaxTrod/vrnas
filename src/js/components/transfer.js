import TransferElements from 'transfer-elements';

new TransferElements(
  {
    sourceElement: document.querySelector('.header__btn'),
    breakpoints: {
      1023.98: {
        targetElement: document.querySelector('.nav'),
        targetPosition: 1
      }
    }
  },
  // {
  //   sourceElement: document.querySelector('.content-hero__video'),
  //   breakpoints: {
  //     767.98: {
  //       targetElement: document.querySelector('.hero__images'),
  //       targetPosition: 1
  //     }
  //   }
  // }
);

new TransferElements(
  {
    sourceElement: document.querySelector('.content-hero__video'),
    breakpoints: {
      767.98: {
        targetElement: document.querySelector('.hero__images'),
        targetPosition: 1
      }
    }
  }
);
