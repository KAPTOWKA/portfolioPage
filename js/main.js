let productID = null;

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
	$(".burger__element").toggleClass("burger__element--active");
    $("nav ul").slideToggle("200");
});

// hide navigation bar when the choise is made
$("nav ul a").on("click", function () {
	if ($(window).width() < 960) {
		$(".burger__element").toggleClass("burger__element--active");
		$("nav ul").slideToggle("200");
	}
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
        bottom = top + $(this).outerHeight()-100;


    if (position >= top && position <= bottom) {
        nav.find('a').removeClass('active');
        nav.find('a[href="#' + $(this).attr('class') + '"]').addClass('active');
    }
    });
});






// slideri i vsya huyna
document.querySelector(".desc-container").addEventListener("click", (event) => {
	console.log("hello");
	if (event.target.closest(".description-close-button")) {
		console.log("hellosss");
		let item = event.target.closest(".portfolio-description");
		$(item).slideUp("slow");
	}
	else {
		console.log("suclk");
	}
});



document.querySelector(".portfolio-items").addEventListener("click", (event) => {
	let item = event.target.closest(".item");
	if (!item) return;

	let itemId = item.dataset.productId;
	if (productID === itemId) return;

	let itemsDescription = document.querySelectorAll(".portfolio-description");
	itemsDescription.forEach((currentDescItem) => {
		if (currentDescItem.dataset.descriptionId == itemId) {
			let offset = $(currentDescItem).offset();
			$(currentDescItem).css("display", "flex").animate({
				scrollTop: offset.top
			}).show();
		}
		else {
			$(currentDescItem).hide();
		}
	})
});
