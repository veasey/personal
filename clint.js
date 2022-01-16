$(document).ready(function() {
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
  $('span.email').html(link);
  $('a.email').attr("href", "mailto:" + fullemail);
}

function displayTelephoneNo() {
  var first = '078';
  var second = '438';
  var third = '69367';
  var fullNo = first + second + third;
  var link = '<a tel:"'+fullNo+'">'+fullNo+'</a>';
  $('span.telephone').html(link);
  $('a.telephone').attr("href", "tel:" + fullNo);
}

function displayQuote() {
  var quotes = [
    'Taking it easy since 1990',
    'Its not only feasible, it\'s Clint Veasible'
  ];
  var select = Math.floor(Math.random()*quotes.length);
  $("#quote").text("\"" + quotes[select] + "\"");
}
