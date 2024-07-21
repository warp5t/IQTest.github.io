const logo = document.getElementById('logo');
const burger = document.getElementById('burger');
const burgerLine3 = document.getElementById('line3');
const burgerLine2 = document.getElementById('line2');
const burgerLine1 = document.getElementById('line1');

const header = document.getElementById('header');
const windowHeight = window.innerHeight;

const burgerNav = document.getElementById('burgerNav');
const burgerNavList = document.querySelector('header__navigation-list');

const body = document.getElementById('body');

let permissionBurg = true;


burger.addEventListener('click',()=>{
    burgerLine3.classList.toggle('mod-del-line')
    burgerLine2.classList.toggle('mod-burger-cross-2')
    burgerLine1.classList.toggle('mod-burger-cross-1')
    logo.classList.toggle('mod-del-logo');

    if(permissionBurg) {
        header.style.height = windowHeight + 'px';
        burgerNav.style.top = '30%';
        permissionBurg = false;
    } else {
        header.style.height = 'auto';
        burgerNav.style.top = '-500%';
        permissionBurg = true;
    }
    header.classList.toggle('mod-scroll');
    body.classList.toggle('mod-body-scroll');
})

