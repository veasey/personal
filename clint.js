$( document ).ready(function() {
  displayEmail();
  displayTelephoneNo();
  displayQuote();
});

function displayEmail() {
  var first = 'clint';
  var second = 'veasey';
  var email = 'gmail';
  var fullemail = first + '.' + second + '@' + email + '.com';
  var link = '<a mailto:"'+fullemail+'">'+fullemail+'</a>';
  $('.email').html(link);
}

function displayTelephoneNo() {
  var first = '078';
  var second = '438';
  var third = '69367';
  var fullNo = first + second + third;
  $('.telephone').html(fullNo);
}

function displayQuote() {
  var quotes = [
    'Taking it easy since 1990',
    'Its not only feasible, it\'s Clint Veasible'
  ];

  var select = Math.floor(Math.random()*quotes.length);
  $("#quote").text("\"" + quotes[select] + "\"");
}
