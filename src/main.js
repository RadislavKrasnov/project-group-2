  document.addEventListener('DOMContentLoaded', function() {

    const burger = document.querySelector('#burger');
    const close = document.querySelector('#close');
    const mobileMenu = document.querySelector('.mobile-menu');

    burger.addEventListener('click', function(event) {
      event.preventDefault(); 
      mobileMenu.classList.add('open');
    });

    close.addEventListener('click', function(event) {
      event.preventDefault(); 
      mobileMenu.classList.remove('open');
    });
  });