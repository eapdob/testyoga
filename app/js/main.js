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

	$(".price ul .priceItem .priceItem__content button").hover(function() {
		$(this).parent().parent().find(".priceItem__header").css("border", "1px solid #5363db");
		$(this).parent().parent().find(".priceItem__header").css("border-bottom", "1px solid transparent");
		$(this).parent().parent().find(".priceItem__header").css("background-color", "#fff");
		$(this).parent().parent().find(".priceItem__header h6").css("color", "#5363db")
		$(this).parent().css("border", "1px solid #5363db");
		$(this).parent().css("border-top", "1px solid transparent");

	}, function() {
		$(this).parent().parent().find(".priceItem__header").css("transition", "all .3s ease");
		$(this).parent().parent().find(".priceItem__header").css("border", "1px solid transparent");
		$(this).parent().parent().find(".priceItem__header").css("background-color", "#5363db");
		$(this).parent().parent().find(".priceItem__header h6").css("color", "#fff")
		$(this).parent().parent().find(".priceItem__header h6").css("transition", "all .3s ease");
		$(this).parent().css("transition", "all .3s ease");
		$(this).parent().css("border", "1px solid transparent");
	});
});