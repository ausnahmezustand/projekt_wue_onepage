//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Close collapsed navbar after click on link
$(document).on('click', '.navbar-collapse.collapse.in a:not(.dropdown-toggle)', function() {
    $(this).closest(".navbar-collapse").collapse('hide');
});
$(document).on('click', '.navbar-collapse.collapse.in button:not(.navbar-toggle)', function() {
    $(this).closest(".navbar-collapse").collapse('hide');
});


//Lightbox support
//$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
//    event.preventDefault();
//    $(this).ekkoLightbox();
//});

$('.masonry-container').masonry({
  columnWidth: 60,
  itemSelector: '.work-masonry-thumb'
});