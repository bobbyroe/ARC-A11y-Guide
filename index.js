// Expander toggle
$('.expander-toggle').click(function() {
  if ($(this).attr('aria-expanded') == 'false') {
    $(this)
      .attr('aria-expanded', 'true')
      .next('.descriptive-text')
      .addClass('visible')
      .attr('aria-hidden', 'false');
  } else if ($(this).attr('aria-expanded') == 'true') {
    $(this)
      .attr('aria-expanded', 'false')
      .next('.descriptive-text')
      .removeClass('visible')
      .attr('aria-hidden', 'true');
  }
});

$("[name='expanderList']").on('change', function() {
  $("[name='expanderList']")
    .not(this)
    .prop('checked', false);
});
