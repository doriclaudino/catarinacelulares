$(function() {
  "use strict";
  function menuscroll() {
    var $navmenu = $(".nav-menu.change-on-scrolling");

    if ($(window).scrollTop() > 50) {
      $navmenu.addClass("is-scrolling");
    } else {
      $navmenu.removeClass("is-scrolling");
    }

    //show brand name
    if ($(window).scrollTop() > 120) {
      $("#nav_brand_name").show();
    } else {
      $("#nav_brand_name").hide();
    }
  }
  menuscroll();
  $(window).on("scroll", function() {
    menuscroll();
  });

  $(".navbar-nav > li:not(.dropdown) > a").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });

  var siteNav = $("#navbar");
  siteNav.on("show.bs.collapse", function(e) {
    $(this)
      .parents(".nav-menu")
      .addClass("menu-is-open");
  });
  siteNav.on("hide.bs.collapse", function(e) {
    $(this)
      .parents(".nav-menu")
      .removeClass("menu-is-open");
  });
});
