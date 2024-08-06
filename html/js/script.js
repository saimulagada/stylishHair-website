$(document).ready(function(){
    $('#slider').slick({
        autoplay:true,
        loop:true,
        infinite:true
    });
});

let btn = document.querySelector('.menu-bar i');
let nav = document.querySelector('.header1 nav');

btn.addEventListener('click',() => {
   
      nav.classList.toggle('show');
      if (btn.classList.contains('fa-bars')) {
        btn.classList.remove('fa-bars');
        btn.classList.add('fa-times');
      } else {
        btn.classList.remove('fa-times');
        btn.classList.add('fa-bars');
      }
});