$('svg.radial-progress').each(function( index, value ) {
  $(this).find($('circle.complete')).removeAttr( 'style' );
});

$(window).scroll(function(){
  $('svg.radial-progress').each(function( index, value ) {
    // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
    if (
        $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
        $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
    ) {
        // Get percentage of progress
        percent = $(value).data('percentage');
        // Get radius of the svg's circle.complete
        radius = $(this).find($('circle.complete')).attr('r');
        // Get circumference (2πr)
        circumference = 2 * Math.PI * radius;
        // Get stroke-dashoffset value based on the percentage of the circumference
        strokeDashOffset = circumference - ((percent * circumference) / 100);
        // Transition progress for 1.25 seconds
        $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
    }
  });
}).trigger('scroll');



//**

<div class="col-md-3 box">
  <svg class="radial-progress html-css" data-percentage="75" viewBox="0 0 80 80">
    <circle class="incomplete" cx="40" cy="40" r="35"></circle>
    <circle class="complete" cx="40" cy="40" r="35" style="stroke-dashoffset: 50.58406743523136;"></circle>
    <text class="percentage NUMBER" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">75%</text>
  </svg>
  <h3>Html/css</h3>

</div>

<div class="col-md-3 box">
  <svg class="radial-progress graphic-design" data-percentage="70" viewBox="0 0 80 80">
    <circle class="incomplete" cx="40" cy="40" r="35"></circle>
    <circle class="complete" cx="40" cy="40" r="35" style="stroke-dashoffset: 60.58406743523136;"></circle>
    <text class="percentage NUMBER" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">70%</text>
  </svg>
  <h3>Graphic design</h3>

</div>

<div class="col-md-3 box">
  <svg class="radial-progress ux-design" data-percentage="85" viewBox="0 0 80 80">
    <circle class="incomplete" cx="40" cy="40" r="35"></circle>
    <circle class="complete" cx="40" cy="40" r="35" style="stroke-dashoffset: 30.58406743523136;"></circle>
    <text class="percentage NUMBER" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">85%</text>
  </svg>
  <h3>UI / UX</h3>

</div>
