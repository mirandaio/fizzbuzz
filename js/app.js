$(function() {
  $('input').keypress(function(event) {
    if(event.which == 13) {
      var val = +$(this).val();
      if(isNaN(val)) {
        alert("You did not supply a number!");
      } else {
        $('li').remove();
        fizzbuzz(val);
      }
    }
  });

  function fizzbuzz(num) {
    for(var i = 1; i <= num; i++) {
      if(i % 15 == 0) {
        $('ul').append('<li>fizz buzz</li>');
      } else if(i % 3 == 0) {
        $('ul').append('<li>fizz</li>');
      } else if(i % 5 == 0) {
        $('ul').append('<li>buzz</li>');
      } else {
        $('ul').append('<li>' + i + '</li>');
      }
    }
  }
});
