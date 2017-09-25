	$('.header__xs__menu__burger').click(function() {
  var overlayMenu = $('#overlay-menu'),
      menuIconLines = $('.header__xs__menu__burger .header__xs__menu__burger__icon'),
      menuBurger = $('.header__xs__menu__burger');
  
  if(overlayMenu.hasClass('open')) {
    overlayMenu.removeClass('open');
    menuIconLines.removeClass('open');
    menuBurger.removeClass('open');
  }else{    overlayMenu.addClass('open');
            menuIconLines.addClass('open');
            menuBurger.addClass('open');
  };
})