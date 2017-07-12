(function() {
  'use strict';

  // Общие
  var initMenu          = require("./common/main-menu"),
      hamAnimation      = require("./common/hamburger-animation"),
      parallax          = require("./common/header-parallax"),
      preloader         = require("./common/preloader"),
      scrollTo          = require("./common/scroll-to"),
  // About
      map               = require("./about/gmap"),
      skillsAnimation   = require("./about/skills-animation"),
  // Blog
      blog             = require("./blog/blog"),
  // Welcome
      flip             = require("./welcome/flip"),
  // Works
      blur             = require("./works/blur"),
      slider           = require("./works/slider"),
      worksParallax    = require("./works/works-parallax");


  function isCurrent(page) {
    return $(page).length;
  }


  // Общие  
  if(!isCurrent('#page-welcome')) {
    initMenu();
  }

  hamAnimation();

  parallax();

  preloader();

  scrollTo('.js-scrollto', 500);





  // Welcome
  if(isCurrent('#page-welcome')) {
    flip();
  }



  // About
  if(isCurrent('#page-about')) {

    if($("#map_wrapper").length){
      google.maps.event.addDomListener(window, "load", map.init("map_wrapper"));
    }

    skillsAnimation();

  }


  // Blog
  if(isCurrent('#page-blog')) {

    blog();

  }



  // Works
  if(isCurrent('#page-works')) {

    blur();
    
    if($(".slider").length){
      $(".slider__info .portfolio-projects .project .project__inner .title .title__name, .slider__info .portfolio-projects .project .project__inner .skills .title__description")
      .each(function() {
        slider.prepareTitles($(this), 700);
      });

      slider.createSlider(".slider", 700);
    }


    worksParallax();

  }



})();