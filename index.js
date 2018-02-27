$('.about_me_button').click(function() {
		$('html, body').animate({
	        scrollTop: $(".about_me_info").offset().top
	    }, 1000);
});

$('.my_projects_button').click(function() {
		$('html, body').animate({
	        scrollTop: $(".projects_section").offset().top
	    }, 1000);
});

$('.contact_me_button').click(function() {
		$('html, body').animate({
	        scrollTop: $(".contact_me_section").offset().top
	    }, 800);
	});