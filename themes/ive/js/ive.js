(function($,Drupal, drupalSettings){
	$(document).ready(function()
	{
		//alert('Hello!');
		console.log('log');
	});

	$("a[href^='http']").attr('target', '_blank');

	$('content a').prepend('<img src="external-link.gif">');;
	
	$('div.block h2').css('cursor',' pointer').click(function() {
	  $(this).parent().find('div.content').slideToggle();
	});

	$('block-carouseljs').jcarousel({
        // Configuration goes here
    });
})(jQuery,Drupal,drupalSettings);