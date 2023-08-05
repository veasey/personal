function displayEmail() {
  var first = 'clint';
  var second = 'veasey';
  var email = 'gmail';
  var fullemail = first + '.' + second + '@' + email + '.com';
  var link = '<a mailto:"'+fullemail+'">'+fullemail+'</a>';

  document.querySelector("span.email").innerHTML = link;
  if (emailButton = document.querySelector("a.email")) {
    emailButton.setAttribute("href", "mailto:" + fullemail);
  }
}
function displayQuote() {
  var quotes = [
    'Taking it easy since 1990',
    'Its not only feasible, it\'s Clint Veasible'
  ];
  var select = Math.floor(Math.random()*quotes.length);
  document.querySelector("#quote").innerHTML = "\"" + quotes[select] + "\"";
}
displayEmail();
displayQuote();
