$(function() {
  for(var i = 1; i <= 100; i++) {
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
});