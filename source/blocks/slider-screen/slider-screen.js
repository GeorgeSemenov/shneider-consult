import Swiper from '../../../node_modules/swiper/swiper-bundle.js';
$(document).ready(function(){
  var swiper = new Swiper('.slider-screen',{
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    }
  });
})
