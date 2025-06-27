let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

// Открытие тултипа по наведению и фокусу а также клик на мобилках
export function tooltipActions() {
  const tooltipButtons = document.querySelectorAll('.tooltip-review__btn');
  const allReviewTooltips = document.querySelectorAll('.tooltip-review');

  tooltipButtons.forEach(tooltiptn => {
    const tooltipReview = tooltiptn.closest('.tooltip-review');
    if (!isMobile.any() && window.innerWidth >= 767.98) {
      tooltiptn.addEventListener("mouseover", function (e) {
        tooltipReview.classList.add('paused');
      })
      tooltiptn.addEventListener("mouseout", function (e) {
        tooltipReview.classList.remove('paused');
      })
      tooltiptn.addEventListener("focusin", function (e) {
        tooltipReview.classList.add('paused');
      })
      tooltiptn.addEventListener("focusout", function (e) {
        tooltipReview.classList.remove('paused');
      })
    } else {
      tooltiptn.addEventListener("click", function (e) {
        allReviewTooltips.forEach(tp => {
          tp.classList.remove('paused');
        })
        tooltipReview.classList.add('paused');
      })
    }
  })
}
tooltipActions();

export function closeTooltip() {
  const allTooltips = document.querySelectorAll('.tooltip-review');
  document.addEventListener("click", function (e) {
    if (!e.target.closest('.tooltip-review')) {
      allTooltips.forEach(tp => {
        tp.classList.remove('paused');
      })
    }
  })
}
closeTooltip();
