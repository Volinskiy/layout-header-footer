import './menu.less';


$(window).on('load', function() {

  let buttonCloseMenu = $('#buttonCloseMenu'),
      menuNavigation = $('#mainNav'),
      menuBurgerButton = $('#menuBurgerButton'),
      body = $('body');


  buttonCloseMenu.on('click', function(){
    menuNavigation.removeClass('opened');
    body.removeClass('mobile-menu-opened');
  })
  
  menuBurgerButton.on('click', function(){
    menuNavigation.addClass('opened')
    body.addClass('mobile-menu-opened');
  })
})
