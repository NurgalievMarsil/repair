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

