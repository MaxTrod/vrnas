// import GraphAccordeon from '../functions/graph-accordeon.js';


// if (document.querySelector('.choose-section')) {
//   const accordeon1 = new GraphAccordeon('.accordeon--choose-1', {
//     speed: 500,
//   });

//   const accordeon2 = new GraphAccordeon('.accordeon--choose-2', {
//     speed: 500
//   });

//   const accordeon3 = new GraphAccordeon('.accordeon--choose-3', {
//     speed: 500
//   });
// }

document.addEventListener("click", function (e) {
  const targetElement = e.target;
  if (document.querySelector('.accordeon')) {
    if (targetElement.closest('.accordeon')) {
      const currentAccordeon = targetElement.closest('.accordeon');
      const currentControl = currentAccordeon.querySelector('.accordeon__control');
      const currentContent = currentAccordeon.querySelector('.accordeon__content');
      const isOpen = currentAccordeon.classList.contains('is-open');

      const accordeons = document.querySelectorAll('.accordeon');
      accordeons.forEach(acc => {
        acc.classList.remove('is-open');
        acc.querySelector('.accordeon__control').setAttribute('aria-expanded', false);
        acc.querySelector('.accordeon__content').setAttribute('aria-hidden', true);
        acc.querySelector('.accordeon__content').style.maxHeight = null;
      });

      if (!isOpen) {
        currentAccordeon.classList.add('is-open');
        currentControl.setAttribute('aria-expanded', true);
        currentContent.setAttribute('aria-hidden', false);
        currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
      }
    }
  }
});

