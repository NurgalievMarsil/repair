// document.addEventListener("DOMContentLoaded", (event) => {
  
//   const modal = document.querySelector(".modal"),
//       switchModal = () => modal.classList.toggle('modal--visible');

//   document.body.addEventListener('click', ev => {
//       const {target} = ev;
//       if (target.matches('[data-toggle=modal], .modal__close')) {
//           switchModal();
//       } else if (!target.closest('.modal') && modal.classList.contains('modal--visible')) {
//           switchModal();
//       }
//   });

//   document.addEventListener('keydown', e => {
//     e.keyCode === 27 && modal.classList.contains('modal--visible') ? switchModal() : false;
// });
// });
new WOW().init()

$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle="modal"]');
        closeBtn = $('.modal__close');
    
    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 10 + bullets.width() + 10) 
    bullets.css('left', prev.width() + 10)
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

