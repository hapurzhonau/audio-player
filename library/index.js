const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');
const navLink = document.querySelectorAll("li");
const bodyStopScroll = document.querySelector(".body__wrapper");


burger.addEventListener('click', function () {
    nav.classList.toggle('nav--visible');
    burger.classList.toggle('burger--activ');
    body.classList.toggle('body--locked');
})



navLink.forEach(function (el) {
    return el.addEventListener('click', function () {
        nav?.classList.remove('nav--visible');
        body.classList.remove('body--locked');
    })
})

body.addEventListener('click', (event) => {
    if (!burger.contains(event.target)) {
        nav.classList.remove('nav--visible');
        burger.classList.remove('burger--activ');
        body.classList.remove('body--locked');
    }

});


// const paginationActiv = document.querySelectorAll('.pagination__button');


// paginationActiv.forEach((el) => el.addEventListener('click', () => {
//     el.classList.toggle('pagination__button--activ')
// })
// )

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 25,




    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 3,
        },

    }
});

console.log(`1. Верстка валидная +10\n
2.Вёрстка семантическая +16\n
3.Вёрстка соответствует макету +54\n
4.Общие требования к верстке +20`);

console.log(`
    1. Task: (https://github.com/rolling-scopes-school/tasks/blob/master/tasks/library/library-part2.md)
    \n
    2. Deploy: (https://rolling-scopes-school.github.io/hapurzhonau-JSFEPRESCHOOL2023Q2/library/)
    \n
    3. Done 12.08.2023 / deadline 14.08.2023
    \n
    4. Score: 50 / 50
    \n
    5. Вёрстка соответствует макету. Ширина экрана 768px +26
    \n
    6. Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12
    \n
    7.На ширине экрана 768рх реализовано адаптивное меню +12  
`);
