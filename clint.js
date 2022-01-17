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
function displayTelephoneNo() {
  var first = '078';
  var second = '438';
  var third = '69367';
  var fullNo = first + second + third;
  var link = '<a tel:"'+fullNo+'">'+fullNo+'</a>';
  document.querySelector("span.telephone").innerHTML = link;
  if (telButton = document.querySelector("a.telephone")) {
    document.querySelector("a.telephone").setAttribute("href", "tel:" + fullNo);
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
displayTelephoneNo();
displayQuote();