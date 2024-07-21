const testMarker1 = document.getElementById('test1');
const testMarker2 = document.getElementById('test2');
const testMarker3 = document.getElementById('test3');
const testMarker4 = document.getElementById('test4');
const testMarker5 = document.getElementById('test5');

const bodyTestHTML = `
 <div class="wrap-test" id="bodyTest">
        <header class="header-test">
            <div class="header-test__wrap-burger burger">
                <div class="burger__line"></div>
                <div class="burger__line"></div>
                <div class="burger__line"></div>
            </div>
            <div class="header-test__subwrap">
                <div class="header-test__wrap-logo">
                    <img class="header-test__logo" src="images/brain48*47.png" alt="brain">
                </div>
                <div class="header-test__subscribtion">
                    тест на определение IQ
                </div>
            </div>
        </header>
        <main class="main-test">
            <section class="line">
                <div class="line__main-line">
                    <div class="line__progress-line"></div>
                </div>
            </section>
            <section class="work-zone">
                <fieldset class="work-zone__field">
                    <div class="work-zone__question" id="question"></div>
                    <div class="work-zone__options">
                        <div class="work-zone__optIon">
                            <input class="work-zone__input" type="radio" id="" name="" value=""/>
                            <label class="work-zone__subscribtion" for=""></label>
                          </div>
                          <div class="work-zone__optIon">
                            <input class="work-zone__input" type="radio" id="" name="" value=""/>
                            <label class="work-zone__subscribtion" for=""></label>
                          </div>
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

const wrap = document.getElementById('wrap');
let wrapPermission = true;

const mainPage = document.getElementById('mainPage');
// const body = document.getElementById('body');

const arrQuestions = ['<div>ваш пол:</div>','<div>укажите ваш возраст:</div>','<div>Выберите лишнее:</div>','<div>Выберите лишнее:</div>','<div>Продолжите числовой ряд: 18 20 24 32</div>','<div>Выберите цвет, который сейчас наиболее Вам приятен:</div>','<div>Выберите цвет, который сейчас наиболее Вам приятен:<div>','<div>Какой из городов лишний?</div>','<div>Выберите правильную фигуру из четырёх пронумерованных.</div>','<div>Вам привычнее и важнее:<div>','<div>Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:</div>','<div>Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:</div>','<div>Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:</div>','<div>Обработка результатов</div>'];

const arrMarkerTest = [testMarker1,testMarker2,testMarker3,testMarker4,testMarker5];

arrMarkerTest.forEach((el)=>{
    el.addEventListener('click',()=> {
        wrap.classList.add('mod-dissapear')
        body.innerHTML = bodyTestHTML;
    })
})

// mainPage.addEventListener('click',()=> {
//     wrap.classList.remove('mod-dissapear');
// })