$( document ).ready(function() {
  displayEmail();
  displayQuote();
});

function displayEmail() {
  var first = 'clint';
  var second = 'veasey';
  var email = 'gmail';
  var fullemail = first + '.' + second + '@' + email + '.com';
  var link = '<a mailto:"'+fullemail+'">'+fullemail+'</a>';
  $('.email').html('<p>' + link + '</p>');
}

function displayQuote() {
  var quotes = [
    'Taking it easy since 1990',
    'Its not only feasible, it\'s Clint Veasible'
  ];

  var select = Math.floor(Math.random()*quotes.length);
  $("#quote").text("\"" + quotes[select] + "\"");
}
