$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));
  if (age >= 18) {
    $('#over_18').show();
  }
  else if (age < 18) {
    $('#under_18').show();
  }

});
