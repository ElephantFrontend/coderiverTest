	$('.xs-menu__burger').click(function() {
  var overlayMenu = $('.overlay-menu'),
      menuIconLines = $('.xs-menu__burger .xs-menu__icon'),
      menuBurger = $('.xs-menu__burger');
  
  if(overlayMenu.hasClass('open')) {
    overlayMenu.removeClass('open');
    menuIconLines.removeClass('open');
    menuBurger.removeClass('open');
  }else{    overlayMenu.addClass('open');
            menuIconLines.addClass('open');
            menuBurger.addClass('open');
  };
})