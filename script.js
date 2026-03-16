/* ============================
   EFW Phase 1 – Enrolled Students
   script.js — minimal interactions
   ============================ */

(function () {
  'use strict';

  // Smooth scroll for any internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
