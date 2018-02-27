//Scroll to section
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

//Scroll to projects
$('.now_playing_button').click(function() {
		$('html, body').animate({
	        scrollTop: $(".now_playing_info").offset().top
	    }, 1000);
});

$('.mark_it_button').click(function() {
		$('html, body').animate({
	        scrollTop: $(".mark_it_info").offset().top
	    }, 1000);
});

$('.checkpoint_button').click(function() {
		$('html, body').animate({
	        scrollTop: $(".checkpoint_info").offset().top
	    }, 1000);
});