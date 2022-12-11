// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

(() => {
  const openModalBtn = document.querySelector("[data-modal-open]");
  const closeModalBtn = document.querySelector("[data-modal-close]");
  const modalMenu = document.querySelector("[data-modal]");

  const toggleMenu = () => {
    const isMenuOpen = modalMenu.classList.toggle("is-hidden");

    const scrollLockMethod = !isMenuOpen ? "disableBodyScroll" : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openModalBtn.addEventListener("click", toggleMenu);
  closeModalBtn.addEventListener("click", toggleMenu);
})();
