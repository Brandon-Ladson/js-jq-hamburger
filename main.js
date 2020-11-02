var menuAperto = false;

$('a > i').click(function () {

  if (menuAperto === false) {
    $('.hamburger-menu').show(100);
    menuAperto = true;

  } else {
    $('.hamburger-menu').hide(100);
    menuAperto = false;
  }

});
