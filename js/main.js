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
