const cityOpen = document.querySelector('.js-city-open');
const city = document.querySelector('.city');

const headerBurger = $('.header__burger');
const navigation = $('.navigation');
const navigationClose = $('.navigation__close');
const presentBtn = $('.present__btn');
const modalOrder = $('.modal-order')
const modalOrderClose = $('.modal-order__close');
const headerSign = $('.header__sign2');
const alert = $('.alert');
const characteristicsListElem = document.querySelector('.characteristics__list');
const characteristicsItemElems = document.querySelectorAll('.characteristics__item');

//!--innert 

let prevActiveElement;


function addInnert(elem) {
    prevActiveElement = document.activeElement;
    for (let i = 0; i < document.body.children.length; i++) {
        if (document.body.children[i] !== elem) {
            document.body.children[i].inert = true;
        }
    };
    elem.inert = false;
    if (elem.closest('[inert]')) elem.closest('[inert]').inert = false;

    for (let i = 0; i < window.elemsInert.length; i++) {
        if (elem === window.elemsInert[i].elem && window.elemsInert[i].esc) {
            function esc(e) {
                if (e.key == 'Escape') {
                    window.elemsInert[i].esc()
                }
                document.removeEventListener('keydown', esc);
            }
            document.addEventListener('keydown', esc);
        }

    }
}

function activationInnert(elemsInert) {
    window.elemsInert = elemsInert;

    function removeInnert(elem) {
        if (elem) {
            for (let i = 0; i < document.body.children.length; i++) {
                if (document.body.children[i] !== elem) {
                    document.body.children[i].inert = false;
                }
            };
            elem.innert = true;
            prevActiveElement.focus();
        }

        for (let i = 0; i < elemsInert.length; i++) {
            if (window.screen.width <= elemsInert[i].breakpoints || !elemsInert[i].breakpoints) {
                elemsInert[i].elem.inert = true
                console.log(elemsInert[i]);
            }
        }
    }
    removeInnert();

    return removeInnert
}

//!--end-innert

const removeInnert = activationInnert([
    {
        elem: city,
        esc: choiseCity
    },
    {
        elem: modalOrder.get(0),
        esc: closeModal
    },
    {
        elem: navigation.get(0),
        esc: closeBurger,
        breakpoints: 1000
    }
]);

function openChoiseCity() {
    city.classList.add('city_open')
    addInnert(city);//!--активируем inert на city
}

function choiseCity(event) {
    if (!event) { // тригер закрытия
        city.classList.remove('city_open');
        removeInnert(city) //!--Деактивируем inert 
        return;
    }
    event.preventDefault();
    const target = event.target.closest('.city__choice');
    if (target) {
        cityOpen.textContent = target.textContent;
        city.classList.remove('city_open');
        removeInnert(city) //!--Деактивируем inert 
    }
}

cityOpen.addEventListener('click', openChoiseCity);
city.addEventListener('click', choiseCity);


function openBurger() {
    navigation.addClass('navigation_open').animate({
        left: 0,
    }, 500, function () {
        addInnert(navigation.get(0));//!--активируем inert на navigation
        navigationClose.animate({
            opacity: 1,
        }, 300);
    });
}

function closeBurger() {
    navigationClose.animate({
        opacity: 0,
    }, 300, function () {
        removeInnert(navigation.get(0))//!--Деактивируем inert 
        navigation.animate({
            left: '-400px',
        }, 500).removeClass('navigation_open');
    });
}

headerBurger.on('click', openBurger)

navigationClose.on('click', closeBurger);

function openModal() {
    modalOrder.show(300);
    addInnert(modalOrder.get(0));//!--активируем inert на modalOrder
}

function closeModal() {
    modalOrder.hide(300);
    removeInnert(modalOrder.get(0))//!--Деактивируем inert 
}

presentBtn.on('click', openModal)

modalOrderClose.on('click', closeModal)

const openAlert = () => {
    alert.attr("role", "alert");

    alert.addClass('visible');
    setTimeout(() => {
        alert.removeClass('visible');

        alert.removeAttr("role", "alert");

    }, 3000)
};

headerSign.click(openAlert)

characteristicsItemElems.forEach(elem => {
    if (elem.children[1].classList.contains('active')) {
        elem.children[1].style.height = elem.children[1].scrollHeight + 'px';
    }
})

const open = (button, dropDown) => {
    closeAllDrops(button, dropDown);
    button.ariaExpanded = true;

    dropDown.style.height = dropDown.scrollHeight + 'px';
    button.classList.add('active');
    dropDown.classList.add('active');
};

const close = (button, dropDown) => {
    button.ariaExpanded = false;
    button.classList.remove('active');
    dropDown.classList.remove('active');
    dropDown.style.height = '';
};

const closeAllDrops = (button, dropDown) => {
    characteristicsItemElems.forEach((elem) => {
        if (elem.children[0] !== button && elem.children[1] !== dropDown) {

            close(elem.children[0], elem.children[1]);
        }
    })
}

characteristicsListElem.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('characteristics__title')) {
        const parent = target.closest('.characteristics__item');
        const description = parent.querySelector('.characteristics__description');
        description.classList.contains('active') ?
            close(target, description) :
            open(target, description);
    }
});