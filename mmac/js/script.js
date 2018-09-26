$(function() {
//     $(".h1").each(function() {
//     // Some Vars
//     var elText,
//         openSpan = '<span class="first-word">',
//         closeSpan = '</span>';
    
//     // Make the text into array
//     elText = $(this).text().split(" ");
    
//     // Adding the open span to the beginning of the array
//     elText.unshift(openSpan);
    
//     // Adding span closing after the first word in each sentence
//     elText.splice(2, 0, closeSpan);
    
//     // Make the array into string 
//     elText = elText.join(" ");
    
//     // Change the html of each element to style it
//     $(this).html(elText);
// });

    // $(".h1").html(function(){
    // var text= $(this).text().trim().split(" ");
    // var last = text.pop();
    // return text.join(" ") + (text.length > 0 ? " <span class='first-word'>" + last + "</span>" : last);
    // });

    // $(".h1").html(function(){
    // var text= $(this).text().trim().split(" ");
    // var first = text.shift();
    // return (text.length > 0 ? "<span class='first-word'>"+ first + "</span> " : first) + text.join(" ");
    // });

     // Custom 
  var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop){
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky shadow-bottom");
      $(".navbar-brand img").fadeIn(200);
    }
    else{
      sticky.removeClass("is-sticky shadow-bottom");
      stickyWrapper.height('auto');
      $(".navbar-brand img").fadeOut(200);
    }
  };
  
  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function() {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');
    
    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
      stickyToggle(sticky, stickyWrapper, $(this));
    });
    
    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
  });

$('.responsive').slick({
  dots: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //   }
    // },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

});