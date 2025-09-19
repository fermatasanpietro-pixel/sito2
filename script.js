// script.js - minimal interaction
document.addEventListener('DOMContentLoaded', function(){
  // year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile nav toggle
  var btn = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  btn.addEventListener('click', function(){
    nav.classList.toggle('open');
  });

  // simple form submit handler (demo)
  var form = document.getElementById('booking-form');
  form.addEventListener('submit', function(ev){
    ev.preventDefault();
    alert('Grazie! La tua richiesta è stata inviata. Riceverai una risposta al più presto.');
    form.reset();
  });
});