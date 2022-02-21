$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height()) {
      $(".mynav").css({ "background-color": "#ffffff" });
      $(".nav-link").css("color", "black");
    } else {
      $(".mynav").css({ "background-color": "transparent" });
      $(".nav-link").css("color", "white");
    }
  });
});
