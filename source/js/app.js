(function($) {
  'use strict';

  var map               = require("./p_modules/gmap"),
      slider            = require("./p_modules/slider"),
      verticalParallax  = require("./p_modules/header-parallax"),
      preloader         = require("./p_modules/preloader");



  // ==============================
  // Slider
  // ==============================
  if($(".slider").length){
    $(".slider__info .portfolio-projects .project .project__inner .title .title__name, .slider__info .portfolio-projects .project .project__inner .skills .title__description")
      .each(function() {
        slider.prepareTitles($(this), 700);
      });

    slider.createSlider(".slider", 700);
  }



  // ==============================
  // Login card flip
  // ==============================
  $("#auth").click(function() {
    $("body").addClass("card_flipped");
  });

  $("#back-main").click(function(e) {
    e.preventDefault();
    $("body").removeClass("card_flipped");
  });




  // ==============================
  // Hamburger animation
  // ==============================
  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".main-mnu").slideToggle();
    return false;
  });






  // ==============================
  // Skills Pie
  // ==============================
  jQuery('.pie').each(function(index, element) {
    var num = +($(this).text());
    var chart = '<svg viewBox="0 0 32 32" class="pie-skill"><circle class="circle-2" r="16" cx="16" cy="16" style="stroke-dasharray: 10 100" /><circle class="circle" r="16" cx="16" cy="16" style="stroke-dasharray: 110 100" /></svg>';
    jQuery(this).html(chart);
    jQuery(this).find('.circle-2').css('stroke-dasharray', '110');
    jQuery(this).find('.circle').css('stroke-dasharray', num + ' 100');
  });






  // ==============================
  // Main menu
  // ==============================
  $("#menu-toggle").click(function(){
    $(this).add(".main-menu, .header__top-row").toggleClass("active");
  });

  $(".main-menu__item").each(function(index) {
    var item_delay = 0.3+0.1*index;

    $(this).css("transition-delay", item_delay + "s");
  });




  // ==============================
  // Parallax effect
  // ==============================
  verticalParallax.createParallax();
  



  // ==============================
  // Google Map Initiation
  // ==============================
  if($("#map_wrapper").length){
    google.maps.event.addDomListener(window, "load", map.init("map_wrapper"));
  }




  // ==============================
  // Preloader Initiation
  // ==============================
  preloader();




  
})(jQuery);