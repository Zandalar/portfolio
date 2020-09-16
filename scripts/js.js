const headerContainer = document.querySelector('.header');
const homeContainer = document.querySelector('.home');
const messageButton = document.querySelector('#message-button');
const popupContainer = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__button-close');

function fixMenu() {
  if(pageYOffset > 0) {
    headerContainer.classList.add('header_fixed');
    homeContainer.style.marginTop = '88px';
  } else {
    headerContainer.classList.remove('header_fixed');
    homeContainer.style.marginTop = '0';
  }
}

document.addEventListener('scroll', fixMenu);

function openPopup(element) {
  element.classList.add('popup_opened');
}

function closePopup(element) {
  element.classList.remove('popup_opened');
}

messageButton.addEventListener('click', () => {
  openPopup(popupContainer);
})

closeButton.addEventListener('click', () => {
  closePopup(popupContainer);
})

