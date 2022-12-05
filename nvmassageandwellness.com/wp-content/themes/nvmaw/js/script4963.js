(function($) {

/* Burger Menus */
$('.desktop-menu-burger').on('click', function() {
  $('.desktop-menu-overlay').css("display", "flex").hide().fadeIn();
});
$('.desktop-menu-burger-close').on('click', function() {
  $('.desktop-menu-overlay').fadeOut();
});



/* Sub Menu */
$( "li.menu-item" ).mouseenter(function() {

  // Show this submenu
  if ( $( this ).hasClass( "dropdown" ) ) {
    $( this ).find( " > .sub-menu" ).slideDown();
  } else {
    $('.sub-menu').slideUp();
  }

}); // end

// Close General
$('.main-nav').mouseleave(function() {
    $('.sub-menu').slideUp();
});



/* =============
  Store notice
  ============= */
function storeMessage() {
  $('.store-message').delay(400).css('display', 'flex').hide().slideDown();
  $('.store-message i').click(function() {
    $('.store-message').slideUp();
  });
}
storeMessage();
	
	
	
  
/* =============
  Close popup
  ============= */

function doPopup() {
   $('.ncc-popup').delay(5000).css('display', 'flex');
}
setTimeout(function() {
	doPopup();
}, 12000);



	
$('.close').on('click', function() {
  $('.ncc-popup').css('display', 'none');
});




})( jQuery );
