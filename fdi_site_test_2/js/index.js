// $("li.dropdown").click(function() {
//   $("nav.navbar").toggleClass("open");
// });

// $(window).click(function() {
// //Hide the menus if visible
//   if(!$(".dropdown").hasClass("open")){
//     $("nav.navbar").toggleClass("open");
//   }
// });

/* Smooth scroll */
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top - 80
	        }, 500);
	        return false;
	      }
	    }
	  });
	});

$("li.dropdown").mouseenter(function(){
    $(this).find("ul.dropdown-menu").css({"display":"block"});
    $(".push-down").css({"margin-top":"160px", "transition":"all 0.1s"});
}).mouseleave(function(){
    $(this).find("ul.dropdown-menu").css({"display":"none"});
    $(".push-down").css({"margin-top":"110px", "transition":"all 0.1s"});
});

/**
 * old
 */

$(".sub-highlights .info-text").each(function() { 
    var imageUrl = $(this).find("img").attr("src");
    console.log(imageUrl);
    $(this).parent().css({"background-image" : 'url(' + imageUrl + ')',
                            "background-size" : 'cover',
                            "background-position" : 'center'});
    // $(this).remove();
});

$(".block .info-text").each(function (){
    var imageUrl = $(this).find("img").attr("src");
    console.log(imageUrl);
    $(this).parent().css({"background-image" : 'url(' + imageUrl + ')',
                            "background-size" : 'cover',
                            "background-position" : 'center'}); 
});

$(".most-viewed-image").each(function (){
    var imageUrl = $(this).find("img").attr("src");
    console.log(imageUrl);
    $(this).css({"background-image" : 'url(' + imageUrl + ')',
                            "background-size" : 'cover',
                            "background-position" : 'center'}); 
});

$(".most-shared-image").each(function (){
    var imageUrl = $(this).find("img").attr("src");
    console.log(imageUrl);
    $(this).css({"background-image" : 'url(' + imageUrl + ')',
                            "background-size" : 'cover',
                            "background-position" : 'center'}); 
});


/**
 * new
 */

$(".info").each(function() { 
    var imageUrl = $(this).find("img").attr("src");
    console.log(imageUrl);
    $(this).parent().css({"background-image" : 'url(' + imageUrl + ')',
                            "background-size" : 'cover',
                            "background-position" : 'center'});
    // $(this).remove();
});

$(".news-image").each(function() { 
    var imageUrl = $(this).find("img").attr("src");
    console.log(imageUrl);
    $(this).parent().css({"background-image" : 'url(' + imageUrl + ')',
                            "background-size" : 'cover',
                            "background-position" : 'center'});
    // $(this).remove();
});

$(".features-image").each(function() { 
    var imageUrl = $(this).find("img").attr("src");
    console.log(imageUrl);
    $(this).parent().css({"background-image" : 'url(' + imageUrl + ')',
                            "background-size" : 'cover',
                            "background-position" : 'center'});
    // $(this).remove();
});

$(".promos").each(function() { 
    var imageUrl = $(this).find("img").attr("src");
    console.log(imageUrl);
    $(this).parent().css({"background-image" : 'url(' + imageUrl + ')',
                            "background-size" : 'cover',
                            "background-position" : 'center'});
    // $(this).remove();
});


$(".story-image-banner").each(function() { 
    var imageUrl = $(this).find("img").attr("src");
    console.log(imageUrl);
    $(this).parent().css({"background-image" : 'url(' + imageUrl + ')',
                            "background-size" : 'cover',
                            "background-position" : 'center'});
    // $(this).remove();
});

// $('.read-more').click(function() {
//     $('.story-detail').slideUp();
// });

$('.read-more').click(function(e){
    $('.story-detail').animate({'scrollTop':'0'});
    e.preventDefault();
});