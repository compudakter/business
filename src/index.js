// import "./styles/common.scss";
// import Handlebars from "handlebars/runtime";
import "./js/menu";
import "./styles/index.scss";
import { Swiper, Navigation, Pagination, EffectFade } from "swiper";
Swiper.use([Navigation, Pagination, EffectFade]);
import "swiper/css";
import "swiper/css/pagination";

 
new Swiper(".reviews__slider", {
  
  pagination: {
    clickable: true,
    el: ".reviews__page", 
  },
  observer: true,
  observeParents: true,
  parallax: true,
  slidesPerView: 1,
  // speed: 1000,
  centeredSlides: true, 
  effect:'fade'
});
 