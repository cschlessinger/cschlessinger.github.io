$(document).ready(function() {

	// Smooth scroll to anchors
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	// Open all external links in new window, internal links in same windo
	$('a[href^="http"]').attr('target', '_blank');
	$('a[href^="//"]').attr('target', '_blank');
	$('a[href^="' + window.location.origin + '"]').attr('target', '_self')

})