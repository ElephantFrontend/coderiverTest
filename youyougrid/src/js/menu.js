	$('#menu-burger').click(function() {
  var overlayMenu = $('#overlay-menu'),
      menuIconLines = $('#menu-burger .menu-icon'),
      menuBurger = $('#menu-burger');
  
  if(overlayMenu.hasClass('open')) {
    overlayMenu.removeClass('open');
    menuIconLines.removeClass('open');
    menuBurger.removeClass('open');
  }else{    overlayMenu.addClass('open');
            menuIconLines.addClass('open');
            menuBurger.addClass('open');
  };
})