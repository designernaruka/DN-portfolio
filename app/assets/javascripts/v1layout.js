//= require agency
//= require bootstrap
//= require cbpAnimatedHeader
//= require classie
//= require jquery
//= require swiper.min

// For Touch Slider Carosol
var swiper = new Swiper('.heroSlider', {
  pagination: '.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  slidesPerView: 1,
  paginationClickable: true,
  spaceBetween: 30,
  loop: true
});
