// Подключение свайпера
import Swiper from 'swiper';
import { Navigation, Pagination, A11y } from 'swiper/modules';

if (document.querySelector('.articles-slider__swiper')) {
  const articlesSwiper = new Swiper('.articles-slider__swiper', {
    modules: [Navigation, Pagination, A11y],
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.articles-slider__pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.articles-slider__next',
    },
  });
}
