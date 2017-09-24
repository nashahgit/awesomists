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
    // $("ul.dropdown-menu").css({"display":"block","transition":"all 2s"});
    $(this).find("ul.dropdown-menu").css({"display":"block"});
    $(".push-down").css({"margin-top":"160px", "transition":"all 0.1s"});
}).mouseleave(function(){
    // $("ul.dropdown-menu").css({"display":"none","transition":"all 2s"});
    $(this).find("ul.dropdown-menu").css({"display":"none"});
    $(".push-down").css({"margin-top":"110px", "transition":"all 0.1s"});
});


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


