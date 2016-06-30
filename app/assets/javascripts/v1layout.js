//= require bootstrap
//= require jquery
//= require cbpAnimatedHeader
//= require classie
//= require agency
//= require jquery.easing.min
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


// Add active on seciton on scroll and smooth scroll

var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('.nav-link').removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});


// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top',
  offset: 51
})

// jQuery for page scrolling feature - requires jQuery Easing plugin
$('a.nav-links').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});