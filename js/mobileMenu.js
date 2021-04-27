const menuOpenButton = document.querySelector('.header__nav--icon');
const menuCloseButton = document.querySelector('.header__items--close');
const menuItems = document.querySelectorAll('.header__items--a');
const menuDropdown = document.querySelector('.header__items');

const handleMenuOpenButton = () =>{
    menuDropdown.classList.toggle('showMenu');
}

const handleMenuClose = () =>{
    menuDropdown.classList.remove('showMenu');
}

menuItems.forEach(item =>{
    item.addEventListener('click', handleMenuClose);
})

menuOpenButton.addEventListener('click', handleMenuOpenButton);
menuCloseButton.addEventListener('click', handleMenuClose);