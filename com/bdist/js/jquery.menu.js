$(document).ready(function() {
	"use strict";
	$('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
	$('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
	$(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">Navigation</a>");
	$(".menu > ul > li").hover(function(e) {
		if ($(window).width() > 943) {
			$(this).children("ul").stop(true, false).fadeToggle(150);
			e.preventDefault();
		}
	});
	$(".menu > ul > li").click(function(e) {
		if ($(window).width() <= 943) {
			$(this).children("ul").fadeToggle(150);
			e.preventDefault();
		}
	});
	$(".menu-mobile").click(function(e) {
		$(".menu > ul").toggleClass('show-on-mobile');
		e.preventDefault();
	});
});
