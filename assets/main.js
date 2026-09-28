/* Two small behaviors. Without JavaScript the site still reads fine; the
   photo just won't flip on tap and the email link stays inert. */
(function () {
  'use strict';

  /* ---- Portrait flip ------------------------------------------------------
     Hover is handled in CSS. Clicking or tapping toggles a sticky state so
     the flip works on phones and keyboards too. */
  var portrait = document.querySelector('.portrait');
  var frame = portrait && portrait.querySelector('.portrait-frame');

  if (frame) {
    var primary = frame.querySelector('.portrait-primary');
    var alt = frame.querySelector('.portrait-alt');

    frame.addEventListener('click', function () {
      var flipped = frame.getAttribute('aria-pressed') !== 'true';
      frame.setAttribute('aria-pressed', flipped ? 'true' : 'false');
      portrait.classList.toggle('is-alt', flipped);
      if (primary) primary.setAttribute('aria-hidden', flipped ? 'true' : 'false');
      if (alt) alt.setAttribute('aria-hidden', flipped ? 'false' : 'true');
    });
  }

  /* ---- Email link ---------------------------------------------------------
     The address lives in data-user / data-domain so it isn't sitting in the
     HTML as one scrapable string. */
  var emailLinks = document.querySelectorAll('a[data-user][data-domain]');
  Array.prototype.forEach.call(emailLinks, function (link) {
    link.href = 'mailto:' + link.dataset.user + '@' + link.dataset.domain;
  });
})();
