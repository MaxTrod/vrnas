// if (wrapper && !isMobile.any()) {
let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

const allTooltips = document.querySelectorAll('.tooltip-review');
const tooltipBtns = document.querySelectorAll('.tooltip-review__btn');
tooltipBtns.forEach(btn => {
  const tooltip = btn.closest('.tooltip-review');
  const orbit = btn.closest('.orbit-test__wrap');
  const orbitTooltip = btn.closest('.orbit-test__tooltip');
  if (!isMobile.any()) {
    btn.addEventListener("mousemove", function (e) {
      if (btn.closest('.orbit-test')) {
        orbit.style.animationPlayState = "paused";
        orbitTooltip.style.animationPlayState = "paused";
        tooltip.classList.add('paused');
      } else {
        tooltip.classList.add('paused');
      }
    })

    btn.addEventListener("mouseout", function (e) {
      if (btn.closest('.orbit-test')) {
        orbit.style.animationPlayState = "running";
        orbitTooltip.style.animationPlayState = "running";
        tooltip.classList.remove('paused');
      } else {
        tooltip.classList.remove('paused');
      }
    })
  } else {
    btn.addEventListener("click", function (e) {
      allTooltips.forEach(tp => {
        tp.classList.remove('paused');
      })
      tooltip.classList.add('paused');
    })
  }
})

document.addEventListener("click", function (e) {
  if (!e.target.closest('.tooltip-review')) {
    allTooltips.forEach(tp => {
      tp.classList.remove('paused');
    })
  }
})

// document.addEventListener("mouseover", function(e) {
//   const targetElement = e.target;

//   if(targetElement.closest('.tooltip-review__btn')) {
//     const button = targetElement.closest('.tooltip-review__btn');
//     const orbit = button.closest('.orbit-test__wrap');
//     const orbitTooltip = button.closest('.orbit-test__tooltip');
//     const tooltip = button.closest('.tooltip-review');
//     orbit.style.animationPlayState = "paused";
//     orbitTooltip.style.animationPlayState = "paused";
//     tooltip.classList.add('paused');
//     console.log(button);
//     console.log(orbit);
//     console.log(tooltip);
//   }
// })

// document.addEventListener("mouseout", function(e) {
//   const targetElement = e.target;

//   if(targetElement.closest('.tooltip-review__btn')) {
//     const button = targetElement.closest('.tooltip-review__btn');
//     const orbit = button.closest('.orbit-test__wrap');
//     const orbitTooltip = button.closest('.orbit-test__tooltip');
//     const tooltip = button.closest('.tooltip-review');
//     orbit.style.animationPlayState = "running";
//     orbitTooltip.style.animationPlayState = "running";
//     tooltip.classList.remove('paused');
//     console.log(button);
//     console.log(orbit);
//   }
// })


