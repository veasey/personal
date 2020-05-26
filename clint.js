$(function () {

  styleHeader();
  displayEmail();

  // make header follow top of screen
  $(document).on('scroll', function () {
    styleHeader();
  });

});

function styleHeader() {

  console.log($('.header').height());

  if ($(window).scrollTop() > 0) {
    $('.header').addClass('sticky');
    $('body').css('padding-top', $('.header').height());
  } else {
    $('.header').removeClass('sticky');
    $('body').removeClass('sticky');
    $('body').css('padding-top', 0);
  }
}

// tab expander
$('.tablinks').click(function() {

  var link = $(this).data('link');

  $('.tablinks').removeClass('active');
  $(this).addClass('active');

  $('.tabcontent').hide();
  $('#' + link).show();
});

$('.tablinks').first().addClass('active');
$('.tabcontent').first().show();

// stop bots getting my email... hopefully.
function displayEmail() {
  var first = 'clint';
  var second = 'veasey';
  var email = 'gmail';
  var fullemail = first + '.' + second + '@' + email + '.com';
  var link = '<a mailto:"'+fullemail+'">'+fullemail+'</a>';
  $('.email').html('<p>' + link + '</p>');
}