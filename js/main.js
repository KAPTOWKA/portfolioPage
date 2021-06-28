// change navigation div when scrolling
$(document).ready(function () {
    $(window).bind("scroll", function() {
        var navHeight = $("header").height();
        if ($(window).scrollTop() > navHeight) {
            $("header").addClass("fixed");
            $("nav ul").css("top", "68px"); // for burger menu change top absolute value
        }
        else {
            $("header").removeClass("fixed");
            $("nav ul").css("top", "82px"); // for burger menu change top absolute value
        }
    });
});

// show navigation bar
$(".burger").on("click", function (event) {
    $("nav ul").slideToggle("200");
});



// highlighting the active view of the menu when scrolling
const section = $('section'),
    nav = $('nav ul');
let navHeight = nav.outerHeight(); //



window.addEventListener('orientationchange', function () {
navHeight = nav.outerHeight();
}, false);

$(window).on('scroll', function () {
const position = $(this).scrollTop();

section.each(function () {
    const top = $(this).offset().top - navHeight,
        bottom = top + $(this).outerHeight();


    if (position >= top && position <= bottom) {
        nav.find('a').removeClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
    }
    });
});
