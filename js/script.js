
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
	  pause: "false"
	});

	/* Hamburger Icon */

	// var trigger = $('#hamburger');
 //    var isClosed = true;
 //    var acTive = $("#my-id");
 //    trigger.click(function () {
    	
 //    	// if (activE.hasClass('uk-active')) {
 //    	// 	console.log('Its checked');
 //    	// }
 //      burgerTime();
 //    });

 //    function burgerTime() {
 //      if (acTive.hasClass('uk-active')) {
 //      	$('div#my-id.uk-offcanvas.uk-active').click();
 //        trigger.removeClass('is-open');
 //        trigger.addClass('is-closed');
 //        isClosed = false;
 //      } else {
 //      		console.log('Me in Else');
 //        trigger.removeClass('is-closed');
 //        trigger.addClass('is-open');
 //        isClosed = true;
 //      }
 //    }

    

});

