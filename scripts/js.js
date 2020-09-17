const headerContainer = document.querySelector('.header');
const homeContainer = document.querySelector('.home');
const messageButton = document.querySelector('#message-button');
const popupContainer = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__button-close');
const popupSubmitButton = document.querySelector('.popup__button');
const menuButton = document.querySelector('.menu__button');
const menuContainer = document.querySelector('.mini-menu');
const menuCloseButton = document.querySelector('.mini-menu__button-close');
const menuItem = document.querySelectorAll('.mini-menu__link');

function fixMenu() {
  if(pageYOffset > 0 && innerWidth > 600) {
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

popupSubmitButton.addEventListener('submit', (evt) => {
  evt.preventDefault();
  closePopup(popupContainer);
})

menuButton.addEventListener('click', () => {
  openPopup(menuContainer);
})

menuCloseButton.addEventListener('click', () => {
  closePopup(menuContainer);
})

function setEventListeners() {
  const menuItemsList = Array.from(menuItem);
  menuItemsList.forEach((item) => {
    item.addEventListener('click', () => {
      closePopup(menuContainer);
    })
  })
}

setEventListeners();
