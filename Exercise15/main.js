$(document).ready(function() {
    // run function on initial page load
    $('.head').hover(function() {
      $('.hmouth').toggleClass('hidden');
      $('.htounge').toggleClass('hidden');
      $('.mouth').toggleClass('hidden');
      $('.htongue').toggleClass('hidden');
    });

    $('.head').click(function() {
      $('.lblink').toggleClass('hidden');
      $('.rblink').toggleClass('hidden');
      $('.leye').toggleClass('hidden');
      $('.reye').toggleClass('hidden');
      $('.pupil').toggleClass('hidden');
    });
    // run function on resize of the window
    $(window).resize(function() {
      resize();
    });
    $(window).scroll(function() {
      scroll();
    });
});

function resize() {
  $('.leye').toggleClass('hidden');
  $('.reye').toggleClass('hidden');
  $('.pupil').toggleClass('hidden');
  $('.sleye').toggleClass('hidden');
  $('.sreye').toggleClass('hidden');
  $('.spupil').toggleClass('hidden');
}
function scroll() {
  $('.square').removeClass('purple');
}
