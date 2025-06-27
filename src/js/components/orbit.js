let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

import { tooltipActions, closeTooltip } from './tooltip.js'; // Функция fn1 теперь доступна

tooltipActions();

closeTooltip();

// анимация кругов а также расположение открытого тултипа в зависимости от угла окружности (говнокод, но по-другому не смог)
function animateOrbit() {
  if (!isMobile.any() && window.innerWidth >= 767.98) {
    const wrap1 = document.querySelector('.orbit-test--1 .orbit-test__wrap');
    const tooltip1 = document.querySelectorAll('.orbit-test--1 .orbit-test__tooltip');
    const tooltipReview1 = document.querySelectorAll('.orbit-test--1 .tooltip-review');
    const wrapAnim1 = wrap1.animate([
      { rotate: '0deg' },
      { rotate: '360deg' }
    ], {
      duration: 60000,
      iterations: Infinity,
      easing: "linear"
    })

    tooltip1.forEach((tool1, index) => {
      const tooltipAnim1 = tool1.animate([
        { rotate: '0deg' },
        { rotate: '-360deg' }
      ], {
        duration: 60000,
        iterations: Infinity,
        easing: "linear"
      })
      setInterval(() => {
        const current1 = wrapAnim1.effect.getComputedTiming().progress;
        const toolRev1 = tool1.querySelector('.tooltip-review');
        if (index === 0) {
          if (current1 > 0.18) {
            toolRev1.classList.add('tooltip-review--reverse');
          }
          if (current1 > 0.68) {
            toolRev1.classList.remove('tooltip-review--reverse');
          }
        }
        if (index === 1) {
          if (current1 > 0.56) {
            toolRev1.classList.add('tooltip-review--reverse');
          }
          if (current1 > 0.99) {
            toolRev1.classList.remove('tooltip-review--reverse');
          }
        }
      }, 100);
      const wrap2 = document.querySelector('.orbit-test--2 .orbit-test__wrap');
      const tooltip2 = document.querySelector('.orbit-test--2 .orbit-test__tooltip');
      const tooltipReview2 = document.querySelector('.orbit-test--2 .tooltip-review');
      const wrapAnim2 = wrap2.animate([
        { rotate: '0deg' },
        { rotate: '360deg' }
      ], {
        duration: 60000,
        iterations: Infinity,
        easing: "linear"
      })
      const tooltipAnim2 = tooltip2.animate([
        { rotate: '0deg' },
        { rotate: '-360deg' }
      ], {
        duration: 60000,
        iterations: Infinity,
        easing: "linear"
      })

      setInterval(() => {
        const current2 = wrapAnim2.effect.getComputedTiming().progress;
        if (current2 > 0.35) {
          tooltipReview2.classList.add('tooltip-review--reverse');
        }
        if (current2 > 0.82) {
          tooltipReview2.classList.remove('tooltip-review--reverse');
        }
      }, 100);



      const wrap3 = document.querySelector('.orbit-test--3 .orbit-test__wrap');
      const tooltip3 = document.querySelector('.orbit-test--3 .orbit-test__tooltip');
      const tooltipReview3 = document.querySelector('.orbit-test--3 .tooltip-review');
      const wrapAnim3 = wrap3.animate([
        { rotate: '1deg' },
        { rotate: '360deg' }
      ], {
        duration: 60000,
        iterations: Infinity,
        easing: "linear"
      })
      const tooltipAnim3 = tooltip3.animate([
        { rotate: '-1deg' },
        { rotate: '-360deg' }
      ], {
        duration: 60000,
        iterations: Infinity,
        easing: "linear"
      })

      setInterval(() => {
        const current3 = wrapAnim3.effect.getComputedTiming().progress;
        if (current3 > 0.27) {
          tooltipReview3.classList.remove('tooltip-review--reverse');
        }
        if (current3 > 0.78) {
          tooltipReview3.classList.add('tooltip-review--reverse');
        }
      }, 100);


      const wrap4 = document.querySelector('.orbit-test--4 .orbit-test__wrap');
      const tooltip4 = document.querySelector('.orbit-test--4 .orbit-test__tooltip');
      const tooltipReview4 = document.querySelector('.orbit-test--4 .tooltip-review');
      const wrapAnim4 = wrap4.animate([
        { rotate: '1deg' },
        { rotate: '360deg' }
      ], {
        duration: 60000,
        iterations: Infinity,
        easing: "linear"
      })
      const tooltipAnim4 = tooltip4.animate([
        { rotate: '-1deg' },
        { rotate: '-360deg' }
      ], {
        duration: 60000,
        iterations: Infinity,
        easing: "linear"
      })

      setInterval(() => {
        const current4 = wrapAnim4.effect.getComputedTiming().progress;
        if (current4 > 0.46) {
          tooltipReview4.classList.remove('tooltip-review--reverse');
        }
        if (current4 > 0.96) {
          tooltipReview4.classList.add('tooltip-review--reverse');
        }
      }, 100);


      const wrap5 = document.querySelector('.orbit-test--5 .orbit-test__wrap');
      const tooltip5 = document.querySelector('.orbit-test--5 .orbit-test__tooltip');
      const tooltipReview5 = document.querySelector('.orbit-test--5 .tooltip-review');
      const wrapAnim5 = wrap5.animate([
        { rotate: '1deg' },
        { rotate: '360deg' }
      ], {
        duration: 60000,
        iterations: Infinity,
        easing: "linear"
      })
      const tooltipAnim5 = tooltip5.animate([
        { rotate: '-1deg' },
        { rotate: '-360deg' }
      ], {
        duration: 60000,
        iterations: Infinity,
        easing: "linear"
      })

      setInterval(() => {
        const current5 = wrapAnim5.effect.getComputedTiming().progress;
        if (current5 > 0.53) {
          tooltipReview5.classList.add('tooltip-review--reverse');
        }
        if (current5 > 0.99) {
          tooltipReview5.classList.remove('tooltip-review--reverse');
        }
      }, 100);

      const stopButtons = document.querySelectorAll('.orbit-test__btn');
      stopButtons.forEach(stopBtn => {
        stopBtn.addEventListener("mouseover", function (e) {
          wrapAnim1.pause();
          tooltipAnim1.pause();
          wrapAnim2.pause();
          tooltipAnim2.pause();
          wrapAnim3.pause();
          tooltipAnim3.pause();
          wrapAnim4.pause();
          tooltipAnim4.pause();
          wrapAnim5.pause();
          tooltipAnim5.pause();
        })
        stopBtn.addEventListener("mouseout", function (e) {
          wrapAnim1.play();
          tooltipAnim1.play();
          wrapAnim2.play();
          tooltipAnim2.play();
          wrapAnim3.play();
          tooltipAnim3.play();
          wrapAnim4.play();
          tooltipAnim4.play();
          wrapAnim5.play();
          tooltipAnim5.play();
        })
        stopBtn.addEventListener("focusin", function (e) {
          wrapAnim1.pause();
          tooltipAnim1.pause();
          wrapAnim2.pause();
          tooltipAnim2.pause();
          wrapAnim3.pause();
          tooltipAnim3.pause();
          wrapAnim4.pause();
          tooltipAnim4.pause();
          wrapAnim5.pause();
          tooltipAnim5.pause();
        })
        stopBtn.addEventListener("focusout", function (e) {
          wrapAnim1.play();
          tooltipAnim1.play();
          wrapAnim2.play();
          tooltipAnim2.play();
          wrapAnim3.play();
          tooltipAnim3.play();
          wrapAnim4.play();
          tooltipAnim4.play();
          wrapAnim5.play();
          tooltipAnim5.play();
        })
      })
    })



  }
}
animateOrbit();


// Круги на секции партнеров
function partnerOrbit() {
  const partnersInner = document.querySelector('.partners-solar__inner');
  const partners = document.querySelectorAll('.partners-solar__logo');
  const partnersItems = document.querySelectorAll('.partners-solar__item');
  const partnersWrap = document.querySelectorAll('.partners-solar__wrap');
  partners.forEach(partner => {
    partner.addEventListener("mouseover", function (e) {
      partnersItems.forEach(partnerItem => {
        partnerItem.style.animationPlayState = "paused";
      })
      partnersWrap.forEach(partnerWrap => {
        partnerWrap.style.animationPlayState = "paused";
      })
    });

    partner.addEventListener("mouseout", function (e) {
      partnersItems.forEach(partnerItem => {
        partnerItem.style.animationPlayState = "running";
      })
      partnersWrap.forEach(partnerWrap => {
        partnerWrap.style.animationPlayState = "running";
      })
    })

    if (partnersItems.length > 7) {
      partner.addEventListener("focusin", function (e) {
        partnersInner.classList.add('full');
      })
      partner.addEventListener("focusout", function (e) {
        partnersInner.classList.remove('full');
      })
    }
  })
}
partnerOrbit();






