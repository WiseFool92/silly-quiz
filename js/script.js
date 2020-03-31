$(document).ready(function() {
  $("form#radio").submit(function(event) {
    event.preventDefault();

    var firstquestion = $("input:checkbox[name=q1]:checked").val();
    
  })
})