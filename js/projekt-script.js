//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(window).scroll(function() {
   if ($(".fixed-to-top").offset().top > 1100) {
        $(".fixed-to-top").fadeIn(1500);
    } else {
        $(".fixed-to-top").fadeOut(2000);
    }
    });

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2000, 'easeInOutExpo');
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

