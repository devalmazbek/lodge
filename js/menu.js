const btnMobileMenu = document.querySelector('.menu__icon');
const btnCloseMenu = document.querySelector('.close-btn');
const menuBlock = document.querySelector('.mobile');

const showMobileMenu = () => {
    menuBlock.classList.add('active');
}

const hideMenu = () => {
    menuBlock.classList.remove('active');
}



btnCloseMenu.addEventListener('click', hideMenu);
btnMobileMenu.addEventListener('click', showMobileMenu);
