$(document).ready(function() {
      // Select link by id and add click event
      $('.slide-element').click(function() {
		var link = $(this).attr('href');
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $(link).offset().top },1500,'easeInOutExpo');

        // Prevent default behavior of link
        return false;
      });
	  
	   $('.circle').click(function() {
        $('html,body').animate({
          scrollTop: $('#about').offset().top },1300,'easeInOutExpo');

        // Prevent default behavior of link
        return false;
      });
    });