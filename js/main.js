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
	if (event.target.closest(".description-close-button")) {
		let item = event.target.closest(".portfolio-description");
		$(item).slideUp("fast", () => {
			$("html, body").animate({
				scrollTop: $(".container h2").offset().top - 100
			}, "fast");
		});
		productID = null;
	}
});


document.querySelector(".portfolio-items").addEventListener("click", (event) => {
	let item = event.target.closest(".item");
	if (!item) return;

	let itemId = item.dataset.productId;
	if (productID === itemId) return;
	productID = itemId;
	let itemsDescription = document.querySelectorAll(".portfolio-description");
	itemsDescription.forEach((currentDescItem) => {
		if (currentDescItem.dataset.descriptionId == itemId) {

			$(currentDescItem).css("display", "flex").show();
			let offset = $(currentDescItem).offset();


			$("html, body").animate({
				scrollTop: offset.top - 100
			}, "fast");
		}
		else {
			$(currentDescItem).hide();
		}
	})
});


document.querySelectorAll(".slide img").forEach((element) => {
	element.addEventListener("click", (event) => {
		let imageContainer = event.target.closest(".potfolio-description__image-container");
		imageContainer.classList.add("potfolio-description__image-container--popup");
		document.querySelector("body").classList.add("body--locked");


		const closeThis = (event) => {
			if (event.target.closest(".potfolio-description__image-container") && !event.target.closest(".popup-close")) {
				return;
			}
			imageContainer.classList.remove("potfolio-description__image-container--popup");


			document.querySelector("body").classList.remove("body--locked");
			document.querySelector("body").removeEventListener("click", closeThis);
		}

		document.querySelector("body").addEventListener("click", closeThis);

		event.stopPropagation();
	});

})



// точно слайдер

document.addEventListener("DOMContentLoaded", () => {
	const descriptionContainers = document.querySelectorAll(".potfolio-description__image-container");

	descriptionContainers.forEach(container => {
		new SliderController(container);
	})
});


class SliderController{
	constructor(containerSelector) {
		this.slidesCollection = containerSelector.querySelectorAll(".slide");
		this.demoCollection = containerSelector.querySelectorAll(".demo");
		this.slidesCollection.forEach(slide => {
			slide.querySelector(".prev").addEventListener("click", () => { this.changeSlide(-1) });
			slide.querySelector(".next").addEventListener("click", () => { this.changeSlide(1) });
		})

		this.demoCollection.forEach(demo => {
			demo.addEventListener("click", () => {
				this.setSlide(+demo.dataset.imgId);
			});
		})
		this.slideIndex = 1;
		this.showSlides(this.slideIndex);
	}

	changeSlide(index) {
		this.showSlides(this.slideIndex += index);
	}

	setSlide(index) {
		this.showSlides(this.slideIndex = index);
	}

	showSlides(index) {


		if (index > this.slidesCollection.length) {
			this.slideIndex = 1;
		}
		if (index <= 0) {
			this.slideIndex = this.slidesCollection.length;
		}

		this.slidesCollection.forEach(slide => {
			slide.classList.remove("slide--active");
			if (slide.dataset.slideId == this.slideIndex) {
				slide.classList.add("slide--active");
			}
		});

		this.demoCollection.forEach(demo => {
			demo.classList.remove("demo--active");
			if (demo.dataset.imgId == this.slideIndex) {
				demo.classList.add("demo--active");
			}
		})

	}
}

// knopka like this

document.querySelectorAll(".button-same").forEach(link => {
	link.addEventListener("click", (event) => {

		const callBackForm = document.querySelector("#callbackForm");

		callBackForm["user_question"].value = link.getAttribute("value");
	});
})
