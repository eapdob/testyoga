$(function() {
	$(".sliderAboutUs").owlCarousel({
		items: 1,
		nav: true,
		navText: [],
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000
	});

	$(".sliderReview").owlCarousel({
		items: 1,
		nav: true,
		navText: [],
		margin: 10,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000
	});

	// price button highlight
	$(".price ul .priceItem .priceItem__content button").hover(function() {
		$(this).parent().parent().find(".priceItem__header").css("border", "1px solid #5363db");
		$(this).parent().parent().find(".priceItem__header").css("border-bottom", "1px solid transparent");
		$(this).parent().parent().find(".priceItem__header").css("background-color", "#fff");
		$(this).parent().parent().find(".priceItem__header h3").css("color", "#5363db")
		$(this).parent().css("border", "1px solid #5363db");
		$(this).parent().css("border-top", "1px solid transparent");

	}, function() {
		$(this).parent().parent().find(".priceItem__header").css("transition", "all .3s ease");
		$(this).parent().parent().find(".priceItem__header").css("border", "1px solid transparent");
		$(this).parent().parent().find(".priceItem__header").css("background-color", "#5363db");
		$(this).parent().parent().find(".priceItem__header h3").css("color", "#fff")
		$(this).parent().parent().find(".priceItem__header h3").css("transition", "all .3s ease");
		$(this).parent().css("transition", "all .3s ease");
		$(this).parent().css("border", "1px solid transparent");
	});

	// smooth scroll from menu
	$(".header .menu .menu__item a").click(function(e) {
		e.preventDefault();
		// get id
		var href = $(this).attr("href");

		// get height of header
		var headerHeight = $(".header").height();

		// animate to id
		$("html, body").animate({scrollTop: $(href).offset().top - headerHeight}, 750);
	});

	$("#heroForm").validate({
		rules: {
			name: {
				required: true,
				minlength: 3
			},
			phone: {
				required: true,
				digits: true
			},
			class: {
				required: true
			}
		},
		messages: {
			name: {
				required: "The name must be filled",
				minlength: "Length must be at least {0} letters"
			},
			phone: {
				required: "The phone must be filled"
			},
			class: {
				required: "The class must be choosen"
			}
		},
		focusCleanup: true,
		focusInvalid: false
	});
});