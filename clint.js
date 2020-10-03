$( document ).ready(function() {
  displayEmail();

  $('body').css('padding-top', $('.header').height());
  $(document).on('scroll', function () {
    styleHeader();
  });
});

function styleHeader() {
  if ($(window).scrollTop() > 0) {
    $('.header').css('font-size','1em');
  } else {
    $('.header').css('font-size','1.5em');
  }
  $('body').css('padding-top', $('.header').height());
}

$('.tablinks').click(function() {
  var link = $(this).data('link');
  $('.tablinks').removeClass('active');
  $(this).addClass('active');
  $('.tabcontent').hide();
  $('#' + link).show();
});

$('.tablinks').first().addClass('active');
$('.tabcontent').first().show();

function displayEmail() {
  var first = 'clint';
  var second = 'veasey';
  var email = 'gmail';
  var fullemail = first + '.' + second + '@' + email + '.com';
  var link = '<a mailto:"'+fullemail+'">'+fullemail+'</a>';
  $('.email').html('<p>' + link + '</p>');
}
