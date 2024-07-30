const testMarker1 = document.getElementById('test1');
const testMarker2 = document.getElementById('test2');
const testMarker3 = document.getElementById('test3');
const testMarker4 = document.getElementById('test4');
const testMarker5 = document.getElementById('test5');

const wrapTestHTML = `
     <div class="wrap" id="wrapTest">
        <header class="header" id="headerTest">
            <div class="header__container _container">
                <div class="header__wrap-burger burger" id="burgerTest">
                    <div class="burger__line" id="line1Test"></div>
                    <div class="burger__line" id="line2Test"></div>
                    <div class="burger__line" id="line3Test"></div>
                </div>
                <div class="header-test__subwrap" id="logoTest">
                    <div class="header-test__wrap-logo">
                        <img class="header-test__logo" src="images/brain48*47.png" alt="brain">
                    </div>
                    <div class="header-test__subscribtion">
                        тест на определение IQ
                    </div>
                </div>
            </div>
            <nav class="burger__navigation" id="burgerNavTest">
                <ul class="burger__navigation-list">
                    <li class="burger__navigation-item">
                        <a class="burger__item" id="mainPageTest" href="#">Главная</a>
                    </li>
                    <li class="burger__navigation-item">
                        <a class="burger__item"  href="#">Информация о тесте</a>
                    </li>
                    <li class="burger__navigation-item">
                        <a class="burger__item mod-choice" id="test2_test" href="#">пройти тест</a>
                    </li>
                </ul>
            </nav>
        </header>
        <main class="main-test">
            <section class="line">
                <div class="line__main-line">
                    <div class="line__progress-line" id="progressLine"></div>
                </div>
            </section>
            <section class="work-zone">
                <fieldset class="work-zone__field" id="fieldset">
                    <div class="work-zone__question" id="question"></div>
                    <div class="work-zone__options" id="optionsField">
                    </div>
                </fieldset>
            </section>
        </main>
        <footer class="footer-test">
            <div class="footer-test__wrap-btn">
                <button class="footer-test__btn mod-btn-shape mod-grey-btn" id="nextBtn">далее</button>
            </div>
        </footer>
    </div>
`;

const mainPageHTML = `
<div class="wrap" id="wrap">
        <header class="header" id="header">
            <div class="header__container _container">
                <div class="header__subwrap-right" id="logo">
                    <h2 class="header__title">
                        IQ Тест
                    </h2>
                    <div class="header__wrap-image">
                        <img class="header__logo" src="images/brain192x192.png" alt="logo">
                    </div>
                </div>
                <nav class="header__navigation">
                    <ul class="header__navigation-list">
                        <li class="header__navigation-item">
                            <a class="header__item _item-choice" href="#">Главная</a>
                        </li>
                        <li class="header__navigation-item">
                            <a class="header__item" href="#">Информация о тесте</a>
                        </li>
                        <li class="header__navigation-item">
                            <a class="header__item" id="test1" href="#">пройти тест</a>
                        </li>
                    </ul>
                </nav>
                <div class="header__wrap-burger" id="burger">
                    <div class="header__burger burger">
                        <div class="burger__line" id="line1"></div>
                        <div class="burger__line" id="line2"></div>
                        <div class="burger__line" id="line3"></div>
                    </div>
                </div>
            </div>
            <nav class="burger__navigation" id="burgerNav">
                <ul class="burger__navigation-list">
                    <li class="burger__navigation-item">
                        <a class="burger__item" id="mainPage" href="#">Главная</a>
                    </li>
                    <li class="burger__navigation-item">
                        <a class="burger__item" href="#">Информация о тесте</a>
                    </li>
                    <li class="burger__navigation-item">
                        <a class="burger__item mod-choice" id="test2" href="#">пройти тест</a>
                    </li>
                </ul>
            </nav>
        </header>
        <main class="main">
            <section class="first-acquaintance" id="section1">
                <div class="first-acquaintance__wrap-info _container">
                    <div class="first-acquaintance__subwrap-agenda">
                        <div class="first-acquaintance__agenda">Пройдите точный и быстрый</div>
                        <h1 class="first-acquaintance__title">
                            тест на определение IQ
                        </h1>
                    </div>
                    <div class="first-acquaintance__wrap-logo">
                        <img class="first-acquaintance__img-logo" src="images/brain.png" alt="brain-logo">
                        <img class="first-acquaintance__img-logo-320" src="images/brain192x192.png" alt="brain-logo">
                    </div>
                    <div class="first-acquaintance__wrap-btn">
                        <a class="first-acquaintance__btn mod-btn-shape mod-yellow-btn" id="test3" href="#">пРойти тест</a>
                    </div>
                    <div class="first-acquaintance__add-inf">
                        <span class="first-acquaintance__text mod-yellow-text">
                            И получите рекомендации по развитию своего интеллекта
                        </span>
                        <br>
                        и улучшению финансового благосостояния и личной жизни
                    </div>
                    <div class="first-acquaintance__nav-btn">
                        <a href="#" class="first-acquaintance__wrap-svg-icon">
                            <img class="first-acquaintance__svg-icon" src="images/arrow-up.svg" alt="arrow-up">
                        </a>
                        <div class="first-acquaintance__text-svg-icon">
                            подробнее
                        </div>
                    </div>
                </div>
                <div class="first-acquaintance__backgound-img">
                    <img class="first-acquaintance__img-space" src="images/space.jpeg" alt="backgound-space">
                </div>
            </section>
            <section class="test-opportunity">
                <div class="test-opportunity__background">
                    <div class="test-opportunity__back-layer"></div>
                    <img class="test-opportunity__image-star" src="images/blueStar_1.jpg" alt="backgound-star">
                </div>
                <div class="test-opportunity__wrap-text _container">
                    <div class="test-opportunity__wrap-quotes">
                        <div class="test-opportunity__quotes1">
                            <img class="test-opportunity__image-quote" src="images/“.png" alt="qoute">
                        </div>
                    </div>
                    <div class="test-opportunity__text">
                        Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, но и
                        выработать список рекомендаций для повышения этого показателя.
                    </div>
                    <div class="test-opportunity__wrap-quotes">
                        <div class="test-opportunity__quotes2">
                            <img class="test-opportunity__image-quote" src="images/“(1).png" alt="qoute">
                        </div>
                    </div>
                </div>
            </section>
            <section class="details">
                <div class="details__container _container">
                    <div class="details__text">
                        Также по результатам теста
                        <b class="mod-upper-case">вы получите</b> подробные <b class="mod-upper-case">советы</b> по
                        определению наиболее перспективной <b class="mod-upper-case">для вашего типа</b>
                        <b>интеллекта</b> <b class="mod-upper-case">сферы
                            деятельности</b>,
                        которая принесет вам скорейший финансовый результат.
                    </div>
                    <div class="details__wrap-image">
                        <img class="details__image" src="images/scheme.png" alt="scheme">
                    </div>
                    <div class="details__wrap-btn">
                        <a class="details__btn mod-btn-shape mod-yellow-btn" id="test4" href="#">пРойти тест</a>
                    </div>
                </div>
            </section>
            <footer class="footer">
                <div class="footer__background">
                    <img class="footer__image-stars" src="images/space.jpeg" alt="backgound-star">
                </div>
                <div class="footer__container _container">
                    <div class="footer__text-1">
                        Прохождение теста займет у вас не более <span class="mod-yellow-text">12 минут</span>, а его
                        <b>результаты</b> вы сможете <span class="mod-yellow-text">использовать всю жизнь.</span>
                    </div>
                    <div class="footer__text-2">
                        Профессиональная интерпретация и детально <b>проработанные рекомендации</b> позволят вам
                        качественно <b>изменить все аспекты своей жизни:</b> от финансового до любовного.
                    </div>
                    <div class="footer__wrap-btn">
                        <a class="footer__btn mod-btn-shape mod-transparent-btn" id="test5" href="#">пройти тест</a>
                    </div>
                    <div class="footer__year-wrap">
                        <div class="footer__circle">
                            <div>c</div>
                        </div>
                        <div class="footer__year">
                            2019
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    </div>
`;

const wrap = document.getElementById('wrap');

// let wrapPermission = true;

// const mainPage = document.getElementById('mainPage');


const arrQuestions = ['Ваш пол:', 'Укажите ваш возраст:', 'Выберите лишнее:', 'Продолжите числовой ряд: 18 20 24 32',
    'Выберите цвет, который сейчас наиболее Вам приятен:', 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
    'Какой из городов лишний?', 'Выберите правильную фигуру из четырёх пронумерованных.', 'Вам привычнее и важнее:',
    'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:', 'Вставьте подходящее число', 'Обработка результатов'
];

const arrAnswer = [
    ['Мужчина', 'Женщина'],
    ['До 18', 'От 18 до 28', 'от 29 до 35', 'От 36'],
    ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина'],
    ['62', '48', '74', '57', '60', '77'],
    ['#A8A8A8', '#0000A9', '#00A701', '#F60100', '#FDFF19', '#A95403', '#A95403', '#850068', '#850068'],
    ['#A95403', '#850068', '#850068', '#A8A8A8', '#0000A9', '#00A701', '#F60100', '#FDFF19', '#A95403'],
    ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава'],
    ['images/figures.png', '1', '2', '3', '4'],
    ['Наслаждаться каждой минутой проведенного времени', 'Быть устремленными мыслями в будущее', 'Учитывать в ежедневной практике прошлый опыт'],
    ['images/triangle.png', 'Оно остроконечное', 'Оно устойчиво', 'Оно-находится в состоянии равновесия'],
    ['images/star.png', '34', '36', '53', '44', '66', '42']
];

// const arrMarkerTest = [testMarker1, testMarker2, testMarker3, testMarker4, testMarker5];

// var optionAnswer;

const cloneMainPage = wrap.cloneNode(true);

const arrTargetBtn = ['test1', 'test2', 'test3', 'test4', 'test5'];

const arrTargerBurger = ['burger', 'burger_1', 'line1', 'line2', 'line3', 'mainPage', 'toInfoTest'];
const arrTargerBurgerTest = ['burgerTest', 'line1Test', 'line2Test', 'line3Test'];
const arrTargerBurgerTest_toMain = ['mainPageTest', 'toInfoTest_test'];

const countLevel = 13;
let counterLevel = countLevel;

function testBtnListener() {

    document.body.addEventListener('click', (event) => {
        const target = event.target;
        console.log('target: ', target.id)

        if (arrTargetBtn.includes(target.id)) {
            console.log('Test button clicked');
            wrapHeaderLogic()
            document.body.innerHTML = wrapTestHTML;
            progressLine()
            questionIterating()
        } else if (target.id === 'nextBtn') {
            // console.log('Next button clicked');
            progressLine()
            questionIterating()
            console.log('counter: ', counterLevel);
        } else if (arrTargerBurger.includes(target.id)) {
            console.log('BURGER');
            wrapHeaderLogic()
        } else if (arrTargerBurgerTest.includes(target.id)) {
            console.log('BURGER TEST');
            wrapHeaderTestLogic()
        } else if (target.id === 'mainPageTest') {
            console.log('mainPageTest');
            wrapHeaderTestLogic()
            document.body.replaceChildren(cloneMainPage)
        } else if (target.id === 'toInfoTest_test') {
            wrapHeaderTestLogic()
            document.body.replaceChildren(cloneMainPage)
            setTimeout(() => {
                const infTest = document.getElementById('opportunity');
                infTest.scrollIntoView()
            }, 300);
            window.location.replace(infTest.id)
        }
    });

}

testBtnListener();


function progressLine() {
    counterLevel--;
    const progressLine = document.getElementById('progressLine');
    const persentsRemain = Math.floor((100 * counterLevel) / countLevel);
    const progress = 100 - persentsRemain;
    progressLine.style.width = progress + '%';
}
let counterQuestions = 0;

function questionIterating() {
    console.log('questionIterating');

    const fieldset = document.getElementById('fieldset');
    const optionsField = document.getElementById('optionsField');
    optionsField.innerHTML = '';


    const questionHTML = `
    <div class="work-zone__optIon">
    <input class="work-zone__input" type="radio" id="" name="" value="">
    <label class="work-zone__subscribtion" for=""></label>
    </div>
    `;
    if (optionsField.classList.contains('mod-square-plate')) {
        optionsField.classList.remove('mod-square-plate')
        fieldset.classList.remove('mod-container-display')
    }
    const questionField = document.getElementById('question');
    questionField.innerText = arrQuestions[counterQuestions];


    for (let i = 0; arrAnswer[counterQuestions].length > i; i++) {
        const workZoneOption = document.createElement('div');
        workZoneOption.innerHTML = '';
        workZoneOption.classList.add('work-zone__optIon')
        if (/#/.test(arrAnswer[counterQuestions][i])) { // colors
            if (!optionsField.classList.contains('mod-square-plate')) {
                optionsField.classList.add('mod-square-plate')
                fieldset.classList.add('mod-container-display')
            }
            const frameSquareColor = document.createElement('div');
            const square = document.createElement('div');
            square.style.background = arrAnswer[counterQuestions][i];
            square.classList.add('mod-square-size')
            frameSquareColor.append(square)
            optionsField.append(square)
        } else if (/\s*\.png$/i.test(arrAnswer[counterQuestions][i])) { // images

        } else {
            const workZoneInput = document.createElement('input');
            workZoneInput.classList.add('work-zone__input')
            workZoneOption.append(workZoneInput);
            workZoneInput.type = 'radio';
            const workZoneSubscribtion = document.createElement('label');
            workZoneSubscribtion.classList.add('work-zone__subscribtion')
            workZoneOption.append(workZoneSubscribtion)
            workZoneSubscribtion.innerText = arrAnswer[counterQuestions][i];
            optionsField.append(workZoneOption)
        }
    }
    counterQuestions++;
}