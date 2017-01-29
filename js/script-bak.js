
$(document).ready(function(){

	/* Animating the first logo part */
	$('.logo').click(function() {

		$(".logo").animate({
			height: '100%',
			bottom: '0',
			left:'0'
		},500,"linear").css('position', 'relative');

		$("#navBar").animate({
			bottom: '0px'
		},500,"linear", function() {
			$("#home").animate({
		 		opacity: '1'
			},2000,"linear");
		});
	});

	/* To set Navbar active */

	$(".nav a").on("click", function(){
	   $(".nav").find(".active").removeClass("active");
	   $(this).parent().addClass("active");
	});

	/* Navbar fix offset scroll spy */

	var affixElement = '#navbar-main';

	$(affixElement).affix({
	  offset: {
	    /* Distance of between element and top page */
	    top: function () {
	      return (this.top = $(window).height()-50);
	      /*return (this.top = $(affixElement).offset().top) */
	    },
	  }
	});

	/* Carousel */
	/* First carousel height settings*/
	var $item1 = $('#mycarousel.carousel .item');
	if(window.innerHeight > window.innerWidth){
	   	var $wHeight1 = $(window).height()/2;
	}
	else {
		var $wHeight1 = $(window).height();
	}
	$item1.eq(0).addClass('active');
	$item1.height($wHeight1); 
	$item1.addClass('full-screen');


	/* Second carousel height settings*/ 
	var $item2 = $('#mycarousel2.carousel .item'); 
	if(window.innerHeight > window.innerWidth){
	   	var $wHeight2 = $(window).height()/2;
	}
	else {
		var $wHeight2 = $(window).height();
	}
	$item2.eq(0).addClass('active');
	$item2.height($wHeight2); 
	$item2.addClass('full-screen'); 


	$('.carousel .bg-img').each(function() {
	  var $src = $(this).attr('src');
	  var $color = $(this).attr('data-color');
	  $(this).parent().css({
	    'background-image' : 'url(' + $src + ')',
	    'background-color' : $color
	  });
	  $(this).remove();
	});

	/* First carousel height resize */
	$(window).on('resize', function (){
	  if(window.innerHeight > window.innerWidth){
		   	var $wHeight1 = $(window).height()/2;
		}
		else {
			var $wHeight1 = $(window).height();
		}
	  $item1.height($wHeight1);

	});

	/* Second carousel height resize */
	$(window).on('resize', function (){
	  if(window.innerHeight > window.innerWidth){
		   	var $wHeight2 = $(window).height()/2;
		}
		else {
			var $wHeight2 = $(window).height();
		}
	  $item2.height($wHeight2);

	});

	$('.carousel').carousel({
	  interval: 6000,
	  pause: null
	});

	/* Smooth scroll */
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 800);
	        return false;
	      }
	    }
	  });
	});

	
	/****** Contact quote ********/
	$('.quoteClose').click(function() {
		$('.foot-quote').addClass('slide-down', 1000, 'easeOutBounce');
        $('.foot-quote').removeClass('slide-up'); 
	});

	$('#quoteOpen, #menuQuoteOpen').click(function() {
		$('.foot-quote').removeClass('slide-down');
        $('.foot-quote').addClass('slide-up', 1000, 'easeOutBounce'); 
	});

	/*** Hover Tool tip ***/
	$('[data-toggle="tooltip"]').tooltip();

	/** code for displaying tech insight BG image on hover **/

	var innerWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

	if (innerWidth >= 768) {
		var $imgsrc;
		$('.list-block').mouseenter(function(){
			$('#techInsight').css({"background" : 'none',
									"background-color" : '#050e24'});
			$imgsrc = $(this).find("img").attr('src');
			$('.insight-head').css("opacity", "0");
			$('.list-block').not(this).css("opacity", "0");
			$('#techInsight').css({"background" : 'url(' + $imgsrc + ') no-repeat center',
							 "background-size" : 'cover',
							 "background-color" : '#ffffff',
							 "-webkit-transition" : 'all 2.5s',
							  "-ms-transition" : 'all 2.5s',
							  "transition" : 'all 2.5s',
							  "z-index" : '8'	
							});
		}).mouseleave(function(){
			$('.insight-head').css("opacity", "1");
			$('.list-block').not(this).css("opacity", "1");
			$('#techInsight').css({"background" : 'none',
							"-webkit-transition" : 'all 2.5s',
							  "-ms-transition" : 'all 2.5s',
							  "transition" : 'all 2.5s',
							"background-color" : '#050e24'
			});
		});
	}


	$('#shareButton').hover(function() {
		$("#fb-share-btn").fadeIn("slow");
		$("#twitter-share-btn").fadeIn("slow");
	}, function() {
		$("#fb-share-btn").fadeOut(4000);
		$("#twitter-share-btn").fadeOut(4000);
	});
	
});

