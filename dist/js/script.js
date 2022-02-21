$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      $(".mynav").css({ "background-color": "#ffffff" });
      $(".nav-link").css("color", "black");
      $(".togSVG").css("fill", "black");
    } else {
      $(".mynav").css({ "background-color": "transparent" });
      $(".nav-link").css("color", "white");
      $(".togSVG").css("fill", "white");
    }
  });
});
