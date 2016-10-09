
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
		// $("#home").animate({
		// 	opacity: '1'
		// },2000,"linear");
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
	    // Distance of between element and top page
	    top: function () {
	      return (this.top = $(window).height()-50)
	      // return (this.top = $(affixElement).offset().top)
	    },
	  }
	});

	/* Carousel */
	/* First carousel height settings*/
	var $item1 = $('#mycarousel.carousel .item');
	// var $wHeight1 = $(window).height();
	if(window.innerHeight > window.innerWidth){
	   	// console.log("Please use Land!");
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
	// var $wHeight2 = $(window).height();
	if(window.innerHeight > window.innerWidth){
	   	// console.log("Please use Land!");
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
	  // $wHeight1 = $(window).height();
	  if(window.innerHeight > window.innerWidth){
	   	// console.log("Please use Land!");
		   	var $wHeight1 = $(window).height()/2;
		}
		else {
			var $wHeight1 = $(window).height();
		}
	  $item1.height($wHeight1);

	});

	/* Second carousel height resize */
	$(window).on('resize', function (){
	  // $wHeight2 = $(window).height();
	  if(window.innerHeight > window.innerWidth){
	   	// console.log("Please use Land!");
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

	/** Scroll reveal animation **/
	window.sr = ScrollReveal({duration: 300, opacity: 0, reset: false});
	sr.reveal('.one', {origin: 'bottom',distance: '20px', delay:400});
	sr.reveal('.two', {origin: 'bottom',distance: '20px', delay: 500});
	sr.reveal('.three', {origin: 'bottom',distance: '20px', delay: 600});
	sr.reveal('.four', {origin: 'bottom',distance: '20px', delay: 700});
	sr.reveal('.five', {origin: 'bottom',distance: '20px', delay: 800});
	sr.reveal('.six', {origin: 'bottom',distance: '20px', delay: 900});
	sr.reveal('.vision-head', {origin: 'top', distance: '20px', delay:300})
	sr.reveal('.vision-bg', {origin: 'bottom', distance: '50px', delay: 400});

	

	/****** Contact quote ********/

	$('.quoteClose').click(function() {
		$('.foot-quote').addClass('slide-down', 1000, 'easeOutBounce');
        $('.foot-quote').removeClass('slide-up'); 
	});

	$('#quoteOpen').click(function() {
		$('.foot-quote').removeClass('slide-down');
        $('.foot-quote').addClass('slide-up', 1000, 'easeOutBounce'); 
	});

	//});
	// var $visionHeight = $('.vision-bg').height();
	// var $freelanHeight = $('.freelan-bg').height();
	// if($visionHeight > $freelanHeight) {
	// 	$('.freelan-bg').height($visionHeight);
	// }
	// else {
	// 	$('.vision-bg').height($freelanHeight);
	// }

});

