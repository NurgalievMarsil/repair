document.addEventListener("DOMContentLoaded", function (event) {
  
  const modal = document.querySelector(".modal"),
      switchModal = () => modal.classList.toggle('modal--visible');

  document.body.addEventListener('click', ev => {
      const target = ev.target;
      if (target.matches('[data-toggle=modal], .modal__close')) {
          switchModal();
      } else if (!target.closest('.modal') && modal.classList.contains('modal--visible')) {
          switchModal();
      }
  });

  document.addEventListener('keydown', function (e) {
      if (e.keyCode === 27 && modal.classList.contains('modal--visible')) switchModal();
  });

});