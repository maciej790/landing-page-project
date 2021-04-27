const mobileMenuElement = document.querySelector('.header__items');
const menuBarElement = document.querySelector('.header__nav');
const heightOfSroll = 700;

const handleScroll = () =>{
    let isMenuOpen = mobileMenuElement.attributes.class.value != 'header__items' ? true : false;
    scrollY >= heightOfSroll && !isMenuOpen
        ? menuBarElement.classList.add('stickyTop')
        : menuBarElement.classList.remove('stickyTop');
}

document.addEventListener('scroll', handleScroll);


