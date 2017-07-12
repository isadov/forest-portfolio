module.exports = function () {

  $("#auth").click(function() {
    $("body").addClass("card_flipped");
  });

  $("#back-main").click(function(e) {
    e.preventDefault();
    $("body").removeClass("card_flipped");
  });

};