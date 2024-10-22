const refs = {
  modalBtn: document.querySelector('.menu-icon-btn'),
  closeModal: document.querySelector('.header-modal-btn'),
  modal: document.querySelector('.header-modal'),
  navLinks: document.querySelectorAll('.modal-list-item a'),
};
const body = document.querySelector('body');

refs.modalBtn.addEventListener('click', toggleMenu);
refs.closeModal.addEventListener('click', closeMenu);
refs.navLinks.forEach(link => link.addEventListener('click', closeMenu));

function toggleMenu() {
  refs.modal.classList.toggle('is-visible');
  body.classList.add('modal-open');
}

function closeMenu() {
  {
    refs.modal.classList.remove('is-visible');
    body.classList.remove('modal-open');
  }
}
