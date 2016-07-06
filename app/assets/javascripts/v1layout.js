//= require jquery
//= require bootstrap
//= require cbpAnimatedHeader
//= require classie
//= require agency
//= require jquery.easing.min
//= require swiper.min
//= require bootstrapValidator.min

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

// Contact Forum Validation
$('#contact-form').bootstrapValidator({
  // live: 'disabled',
  message: 'This value is not valid',
  feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
  },
  fields: {
    Name: {
      validators: {
        notEmpty: {
          message: 'The Name is required and cannot be empty'
        }
      }
    },
    email: {
      validators: {
        notEmpty: {
          message: 'The email address is required'
        },
        emailAddress: {
          message: 'The email address is not valid'
        }
      }
    },
    Message: {
      validators: {
        notEmpty: {
          message: 'The Message is required and cannot be empty'
        }
      }
    }
  }
});

// Contact Forum Overlay
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}