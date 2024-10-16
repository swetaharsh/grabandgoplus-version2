$(document).ready(function() {
            $('.banktransfer').click(function() {
                $(this).addClass('active');
		$('.bank-transfer-info').addClass('active');
              $('.creditcard').removeClass('active');
              $('.credit-card-info').removeClass('active');
            });
            $('.creditcard').click(function() {
              $(this).addClass('active');
              $('.credit-card-info').addClass('active');
              $('.banktransfer').removeClass('active');
              $('.bank-transfer-info').removeClass('active');
            });

            $('button.addaddress').click(function() {
                $('.shipping-info-add').addClass('active');
                $('.personal-info').removeClass('active');
                $('.add-edit-info').css("display", "none");
            });

            $('button.editaddress').click(function() {
                $('.shipping-info-edit').addClass('active');
                $('.personal-info').removeClass('active');
                $('.shipping-info-add').removeClass('active');
                $('.add-edit-info').css("display", "none");
                
            });

            $('button.add').click(function() {
                $('.shipping-info-add').removeClass('active');
                $('.shipping-info-edit').removeClass('active');
                $('.personal-info').addClass('active');
                $('.add-edit-info').css("display", "flex");
            });

           
            $('.checkbox').click(function() {
                $('.billing-address-add').toggleClass('active');                
            });
            $('.add-biling-address').click(function() {
                $('.billing-address-add').toggleClass('active');                
            }); 
            $('button.hamburger').click(function() {
              $('.topnav').addClass('active');
          }); 
          $('button.close-btn').click(function() {
            $('.topnav').removeClass('active');
        });  
        $('.step1').click(function() {
          $('.order-details').addClass('active-blue active');
          $('.sim-details').removeClass('active');
      });   
      $('.step2').click(function() {
        $('.final-details').addClass('active-blue active');
        $('.order-details').removeClass('active');
    }); 
    $('.heading').click(function() {
      $(this).closest('.active-blue').toggleClass("active");             
  });

$('.esim-plan-modal').click(function() {
    $('.plan-modal').addClass('active-modal');
    $('body').addClass('dark-overlay');
});
$('.close-modal-btn').click(function() {
  $('.plan-modal').removeClass('active-modal');;
  $('body').removeClass('dark-overlay');
});

$('.change-pswd').click(function() {
  $('.change-pswd-box').addClass('active-modal');
  $('body').addClass('light-overlay');
});
$('.change-secpin').click(function() {
  $('.change-secpin-box').addClass('active-modal');
  $('body').addClass('light-overlay');
});
$('.edit-loginsecurity').click(function() {
  $('.edit-loginsecurity-box').addClass('active-modal');
  $('body').addClass('light-overlay');
});
$('.add-newaddress').click(function() {
  $('.add-newaddress-box').addClass('active-modal');
  $('body').addClass('light-overlay');
});
$('.edit-address').click(function() {
  $('.edit-address-box').addClass('active-modal');
  $('body').addClass('light-overlay');
});
$('.remove-address').click(function() {
  $('.remove-address-box').addClass('active-modal');
  $('body').addClass('light-overlay');
});
$('.add-payment').click(function() {
  $('.add-payment-box').addClass('active-modal');
  $('body').addClass('light-overlay');
});
$('.edit-payment').click(function() {
  $('.edit-payment-box').addClass('active-modal');
  $('body').addClass('light-overlay');
});
$('.remove-paymentopt').click(function() {
  $('.remove-paymentoption-box').addClass('active-modal');
  $('body').addClass('light-overlay');
});
$('.close-modal-btn').click(function() {
$('.user-modal').removeClass('active-modal');;
$('body').removeClass('light-overlay');
});
        });
        jQuery(document).ready(function($) {
          "use strict";
          //  TESTIMONIALS CAROUSEL HOOK
          $('.customers-testimonials').owlCarousel({
              loop: true,
              center: true,
              items: 3,
              margin: 0,
              autoplay: true,
              dots:false,
            nav:true,
              autoplayTimeout: 8500,
              smartSpeed: 450,
              responsive: {
                0: {
                  items: 1
                },
                768: {
                  items: 2
                },
                1170: {
                  items: 3
                }
              }
          });
        });
        $('.owl-carousel').find('.owl-nav').removeClass('disabled');
$('.owl-carousel').on('changed.owl.carousel', function(event) {
	$(this).find('.owl-nav').removeClass('disabled');
});

        jQuery(document.body).scroll(function() {
          var scroll = jQuery(document.body).scrollTop();
        
          if (scroll >= 300) {
              //alert();
              header.addClass("sticky");
          } else {
              header.removeClass('sticky');
          }
        });

        function getTimeRemaining(endtime) {
     var t = Date.parse(endtime) - Date.parse(new Date());
     var seconds = Math.floor((t / 1000) % 60);
     var minutes = Math.floor((t / 1000 / 60) % 60);
     var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
     return {
       'total': t,
       'hours': hours,
       'minutes': minutes,
       'seconds': seconds
     };


   }

   
   jQuery('img[src$=".svg"]').each(function() {
    var $img = jQuery(this);
    var imgURL = $img.attr('src');
    var attributes = $img.prop("attributes");

    $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Remove any invalid XML tags
        $svg = $svg.removeAttr('xmlns:a');

        // Loop through IMG attributes and apply on SVG
        $.each(attributes, function() {
            $svg.attr(this.name, this.value);
        });

        // Replace IMG with SVG
        $img.replaceWith($svg);
    }, 'xml');
}); 
jQuery(document).ready(function($) {
        		"use strict";
        		//  TESTIMONIALS CAROUSEL HOOK
		        $('#customers-testimonials').owlCarousel({
		            loop: true,
		            center: true,
		            items: 3,
		            margin: 0,
		            autoplay: true,
		            dots:false,
                nav:true,
		            autoplayTimeout: 8500,
		            smartSpeed: 450,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 2
		              },
		              1170: {
		                items: 3
		              }
		            }
		        });
        	}); 
   
   function initializeClock(id, endtime) {
     var clock = document.getElementById(id);
     var hoursSpan = clock.querySelector('.hours');
     var minutesSpan = clock.querySelector('.minutes');
     var secondsSpan = clock.querySelector('.seconds');
   
     function updateClock() {
       var t = getTimeRemaining(endtime);
   
       hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
       minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
       secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
       if (t.total <= 0) {
         clearInterval(timeinterval);
       }
     }
   
     updateClock();
     var timeinterval = setInterval(updateClock, 1000);
   }
   var deadline = new Date(Date.parse(new Date()) + 0o1 * 60 * 60 * 1000);
   initializeClock('clockdiv', deadline);   
   