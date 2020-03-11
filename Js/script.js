document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector(".modal");
  const dark = document.querySelector(".dark");
  const modalBtn = document.querySelectorAll("[data-toggle=modal]");
  const closeBtn = document.querySelector(".modal__close");
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
    dark.classList.toggle('dark--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  dark.addEventListener('click', switchModal);
  closeBtn.addEventListener('click', switchModal);
});
