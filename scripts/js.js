const headerContainer = document.querySelector('.header');
const homeContainer = document.querySelector('.home');

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