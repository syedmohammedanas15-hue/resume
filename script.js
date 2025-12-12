// script.js
document.addEventListener('DOMContentLoaded', function () {
  // set current year in footers
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;
  document.getElementById('year2')?.textContent = y;
  document.getElementById('year3')?.textContent = y;

  // add active class to nav based on current page
  const links = document.querySelectorAll('.main-nav .nav-link');
  links.forEach(a => {
    if (a.getAttribute('href') === window.location.pathname.split('/').pop() || (window.location.pathname.endsWith('/') && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });

  // jQuery fade-in headline (if jQuery loaded)
  if (window.jQuery) {
    $(function(){
      $('h1').hide().fadeIn(600);
      $('.hero-left p').hide().delay(200).fadeIn(800);
    });
  }
});
