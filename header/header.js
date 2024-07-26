let permissionBurg = true, permissionBurgTest = true;


function wrapHeaderLogic() {
    const logo = document.getElementById('logo');
    const burgerLine3 = document.getElementById('line3');
    const burgerLine2 = document.getElementById('line2');
    const burgerLine1 = document.getElementById('line1');

    const header = document.getElementById('header');
    const windowHeight = window.innerHeight;

    const burgerNav = document.getElementById('burgerNav');

    const body = document.getElementById('body');
    console.log('HEADER_LOGIC');

    burgerLine3.classList.toggle('mod-del-line')
    burgerLine2.classList.toggle('mod-burger-cross-2')
    burgerLine1.classList.toggle('mod-burger-cross-1')
    logo.classList.toggle('mod-del-logo');

    if (permissionBurg) {
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
}



function wrapHeaderTestLogic() {
    console.log('HEADER_LOGIC_TEST');

    const logoTest = document.getElementById('logoTest');
    const line3Test = document.getElementById('line3Test');
    const line2Test = document.getElementById('line2Test');
    const line1Test = document.getElementById('line1Test');

    const headerTest = document.getElementById('headerTest');
    const windowHeight = window.innerHeight;
    const body = document.getElementById('body');

    const burgerNavTest = document.getElementById('burgerNavTest');

    line3Test.classList.toggle('mod-del-line')
    line2Test.classList.toggle('mod-burger-cross-2')
    line1Test.classList.toggle('mod-burger-cross-1')
    logoTest.classList.toggle('mod-del-logo');

    if (permissionBurgTest) {
        headerTest.style.height = windowHeight + 'px';
        burgerNavTest.style.top = '30%';
        permissionBurgTest = false;
    } else {
        headerTest.style.height = 'auto';
        burgerNavTest.style.top = '-500%';
        permissionBurgTest = true;
    }
    headerTest.classList.toggle('mod-scroll');
    body.classList.toggle('mod-body-scroll');

    // header.classList.toggle('mod-scroll');
    // body.classList.toggle('mod-body-scroll');
}


