$(function() {
  var current_progress = 0;
  var donated_amount = 175;
  var total_amount = 600; 
  var percentage = 175*100/600; 
  var interval = setInterval(function() {
      current_progress += 1;
      $("#dynamic")
      .css("width", current_progress + "%")
      .attr("aria-valuenow", current_progress)
      .text(current_progress + "% Complete");
      if (current_progress >= percentage)
          clearInterval(interval);
  }, 10);
});