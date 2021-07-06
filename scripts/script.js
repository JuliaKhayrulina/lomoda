const headerCityButton = document.querySelector('.header__city-button');

headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Ваш город?';

headerCityButton.addEventListener('click', () => {
  const city = prompt('Укажите ваш город');
  if (city) {
    headerCityButton.textContent = city;
    localStorage.setItem('lomoda-location', city);
  } else {
    headerCityButton.textContent = 'Ваш город?';
  }
});
//=====Блокировка скролла=============================//
const disablescroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth;
  document.body.dbScrollY = window.scrollY;
  document.body.style.cssText = `
  position: fixed;
  top: ${-window.scrollY}px;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding-right: ${widthScroll}px;
  `;
};

const enablescroll = () => {
  document.body.style.cssText = '';
  window.scroll({
    top: document.body.dbScrollY,
  });
};
//=====Модальное окно================================//

const subheaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');

const cartModalOpen = () => {
  cartOverlay.classList.add('cart-overlay-open');
  disablescroll();
};
const cartModalClose = () => {
  cartOverlay.classList.remove('cart-overlay-open');
  enablescroll();
};

subheaderCart.addEventListener('click', cartModalOpen);

cartOverlay.addEventListener('click', (event) => {
  const target = event.target;
  console.log(target);
  if (target.matches('.cart__btn-close') || target.matches('.cart-overlay')) {
    cartModalClose();
  }
});
