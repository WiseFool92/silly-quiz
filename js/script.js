$(document).ready(function() {
  $("form#checkbox").submit(function(event) {
    event.preventDefault();
    var firstQuestion = $("input:checkbox[name=q1]:checked").val();
    console.log(firstQuestion);
  });
});