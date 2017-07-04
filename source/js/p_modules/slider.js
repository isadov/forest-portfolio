var letter_class_default    = "letter",
    word_class_default      = "word",
    animation_time_default  = 700;

// =======================================
// Wrap project title letters with <span>
// =======================================
var prepareTitles = function (title_container, animation_time, letter_class, word_class){
  var letters         = $.trim(title_container.text()),
      letters_amount  = letters.length,
      letter_class    = letter_class || letter_class_default,
      word_class      = word_class || word_class_default,
      animation_time  = animation_time/1000 || animation_time_default/1000,
      delay_base      = animation_time/letters_amount,
      new_title       = "";

  // Remove original text
  title_container.html("");

  // Create new wrapped text
  for(var i = 0; i < letters_amount; i++){
    var letter_delay = (delay_base)*(i+1),
      css_delay = "style='animation-delay: " + letter_delay + "s'",
      text = "<span class='" + letter_class + "' " + css_delay + ">" + letters[i] + "</span>";

    if(i==0){
      text = "<span class='"+word_class+"'>" + text;
    }
    if(letters[i] == " " || letters[i] == "&nbsp;"){
      text = "</span><span class='"+word_class+"'>";
    }
    if(i == letters.length-1) {
      text = text + "</span>";
    }

    new_title += text;
  }

  title_container.append(new_title);
}

// =======================================
// Slider processing
// =======================================
var createSlider = function(slider_container, animation_time, animation_class, letter_class, word_class){
  // Set static parameters
  var slider_container = slider_container || ".slider",
    slider = $(slider_container),
    previews = slider.find(".portfolio-preview"),
    projects_wrapper = slider.find(".slider__info"),
    projects = projects_wrapper.find(".portfolio-projects .project"),
    control_buttons = slider.find(".slider__controls-item"),
    letter_class = letter_class || letter_class_default,
    word_class = word_class || word_class_default,
    animation_time = animation_time || animation_time_default,
    animation_class = animation_class || "show-l";

  // Show active project title and technologies letters
  projects_wrapper.find(".active ." + letter_class).addClass("show-l");

  // Control buttons handler
  $(control_buttons).on("click", function(e){
    e.preventDefault();

    // Dynamically set CLICKED button parameters
    var this_button       = $(this),
        this_thumbnails   = this_button.next().find(".slider__thumbnail"),
        this_active_thumb = this_thumbnails.filter(".active"),
        this_next_index   = this_thumbnails.index(this_active_thumb);

    // Set SIBLING (other) button parameters
    var other_button        = this_button.parent().siblings().find(".slider__controls-item"),
        other_thumbnails    = other_button.next().find(".slider__thumbnail"),
        other_active_thumb  = other_thumbnails.filter(".active"),
        other_next_index    = other_thumbnails.index(other_active_thumb);

    // Set main preview and project indexes
    var active_preview      = previews.filter(".active"),
        next_preview_index  = previews.index(active_preview),
        active_project      = projects.filter(".active"),
        next_project_index  = projects.index(active_project);


    // If next button was clicked, then we need to increment indexes, else - decrement
    if(this_button.hasClass("slider__controls-item_next")) {
      next_project_index = (next_project_index >= projects.length-1) ? 0 : next_project_index+1;
      this_next_index = this_next_index >= this_thumbnails.length-1 ? 0 : this_next_index+1;
      other_next_index = (other_next_index >= other_thumbnails.length-1) ? 0 : other_next_index+1;

      next_preview_index = (next_preview_index >= previews.length-1) ? 0 : next_preview_index+1;
    } else {
      next_project_index--;
      this_next_index--;
      other_next_index--;

      next_preview_index--;
    }

    // MAIN FUNCTIONS
    function lock_buttons(){
      this_button.prop("disabled", true);
      other_button.prop("disabled", true);

      setTimeout(function(){
        this_button.prop("disabled", false);
        other_button.prop("disabled", false);
      }, animation_time);
    }

    function change_thumbs(){
      var this_next_thumb = this_thumbnails.eq(this_next_index),
          other_next_thumb = other_thumbnails.eq(other_next_index);

      this_next_thumb.removeClass("move-down").addClass("active move-up");
      this_active_thumb.removeClass("active move-down").addClass("move-up");

      other_next_thumb.removeClass("move-up").addClass("active move-down");
      other_active_thumb.removeClass("active move-up").addClass("move-down");
    }

    function change_preview(){
      var next_preview = previews.eq(next_preview_index);

      active_preview.removeClass("active");
      next_preview.addClass("active");
    }

    function change_project(){
      var next_project = projects.eq(next_project_index),
        letters = next_project.find("." + letter_class);

      active_project
        .removeClass("active")
        .find("." + letter_class)
        .removeClass("show-l");

      next_project.addClass("active");
      letters.addClass("show-l");
    }


    change_thumbs();
    change_project();
    change_preview();
    lock_buttons();
  });

};


module.exports = {
  prepareTitles : prepareTitles,
  createSlider : createSlider
}