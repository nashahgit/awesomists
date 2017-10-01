// $("li.dropdown").click(function() {
//   $("nav.navbar").toggleClass("open");
// });

// $(window).click(function() {
// //Hide the menus if visible
//   if(!$(".dropdown").hasClass("open")){
//     $("nav.navbar").toggleClass("open");
//   }
// });

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


