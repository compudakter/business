// import "./styles/common.scss";
// import Handlebars from "handlebars/runtime";
import "./js/menu";
import "./styles/index.scss";
import { Swiper, Navigation, Pagination, EffectFade } from "swiper";
Swiper.use([Navigation, Pagination, EffectFade]);
import "swiper/css";
import "swiper/css/pagination";

const swiper2 = new Swiper(".favorite__slider", {
  // direction: 'horizontal',
  loop: true,
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
  slidesPerView: 1,
  // speed: 1000,
  centeredSlides: true,
});
const gallerySwiper = new Swiper(".gallery__slider", {
  // direction: 'horizontal',
  // loop: true,

  // fadeEffect: { crossFade: true },
  navigation: {
    nextEl: ".gallery__next",
    prevEl: ".gallery__prev",
  },
  pagination: {
    el: ".gallery__page",
    type: "fraction",
  },
  observer: true,
  observeParents: true,
  parallax: true,
  slidesPerView: 1,
  // speed: 1000,
  centeredSlides: true,
  effect: "fade",
});
const reviewSwiper = new Swiper(".review__slider", {
  // direction: 'horizontal',
  loop: true,
  pagination: {
    clickable: true,
    el: ".review__pagination",
  },
  observer: true,
  observeParents: true,
  parallax: true,
  slidesPerView: 1,
  // speed: 1000,
  centeredSlides: true,
  breakpoints: {
    // when window width is >= 320px
    762: {
      slidesPerView: 3,
    },
  },
});
const articlesSwiper = new Swiper(".articles__slider", {
  // direction: 'horizontal',
  loop: true,
  pagination: {
    clickable: true,
    el: ".articles__pagination",
  },
  observer: true,
  observeParents: true,
  parallax: true,
  slidesPerView: 1,
  // speed: 1000,
  centeredSlides: true,
  breakpoints: {
    // when window width is >= 320px
    1124: {
      slidesPerView: 3,
    },
  },
});
