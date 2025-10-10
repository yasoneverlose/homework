
(function () {

    document.addEventListener('click', burgerInit)
    function burgerInit(e) {

        const headerNav = document.querySelector('.header__nav')
        const burgerIcon = document.querySelector('.burger-icon')

        const burgerIconTarget = e.target.closest('.burger-icon') // функция closest проверят, есть у элемента родитель с таким классом
        const burgerNavLink = e.target.closest('.header__nav-link') // она не только возвращает родителя, но и если сам эелмент является тем элементов который мы прописали

        if (burgerIconTarget || burgerNavLink) {

            if (document.documentElement.clientWidth > 1220) return // если ширина окна больше 900px то мы не будем добавлять модификатор классу body

            if (!headerNav.classList.contains('header__nav--mob')) {
                burgerIcon.classList.add('burger-icon--focus')
                headerNav.classList.add('header__nav--mob')
            }
            else {
                burgerIcon.classList.remove('burger-icon--focus')
                headerNav.classList.remove('header__nav--mob')
            }
        }
        else if (e.target.classList.contains('header__nav')) {
            return
        }
        else {
            burgerIcon.classList.remove('burger-icon--focus')
            headerNav.classList.remove('header__nav--mob')
        }
    }
    // --- Таймер ---
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 29);

    function updateTimer() {
        const now = new Date();
        const diff = endDate - now;

        const raffleTime = document.querySelector(".header__raffle-time");

        if (diff <= 0) {
            if (raffleTime) raffleTime.innerHTML = "Время вышло!";
            clearInterval(timer);
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.querySelector(".timer__days").textContent = String(days).padStart(2, '0');
        document.querySelector(".timer__hours").textContent = String(hours).padStart(2, '0');
        document.querySelector(".timer__minutes").textContent = String(minutes).padStart(2, '0');
        document.querySelector(".timer__seconds").textContent = String(seconds).padStart(2, '0');
    }

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    // --- Переключатели ---
    const switches = document.querySelectorAll('.portfel__switch-punkt');

    switches.forEach(item => {
        item.addEventListener('click', () => {
            switches.forEach(el => {
                el.classList.remove('active');
                const circle = el.querySelector('circle');
                if (circle) {
                    circle.setAttribute('r', '20');
                    circle.setAttribute('stroke-width', '2');
                    circle.setAttribute('stroke', 'url(#paint0_linear_113_146)');
                }
            });

            item.classList.add('active');
            const circleActive = item.querySelector('circle');
            if (circleActive) {
                circleActive.setAttribute('r', '15');
                circleActive.setAttribute('stroke-width', '12');
                circleActive.setAttribute('stroke', 'url(#paint0_linear_113_145)');
            }
        });
    });

    // --- Маска телефона ---
    const phoneInput = document.querySelector('.application__input-phone');
    if (phoneInput) {
        Inputmask("+7 999 999 99 99").mask(phoneInput);
    }

    // --- Swiper ---
    const swiperEl = document.querySelector('.swiper');
    if (swiperEl) {
        const swiper = new Swiper('.swiper', {
            spaceBetween: 15,
            centeredSlides: true,
            centeredSlidesBounds: true,
            breakpoints: {
                300: { slidesPerView: 2 },
                400: { slidesPerView: 2.5 },
                500: { slidesPerView: 3.5 },
                600: { slidesPerView: 4 },
                700: { spaceBetween: 5, slidesPerView: 4.5 }
            }
        });
        swiper.slideTo(2);
    }


    document.querySelectorAll('.accordion-list__control').forEach(control => {
        control.addEventListener('click', e => {
            e.preventDefault();
            const item = control.closest('.accordion-list__item');
            const content = item.querySelector('.accordion-list__content');

            document.querySelectorAll('.accordion-list__item').forEach(i => {
                if (i !== item) {
                    i.classList.remove('accordion-list__item--opened');
                    i.querySelector('.accordion-list__content').style.maxHeight = null;
                }
            });

            item.classList.toggle('accordion-list__item--opened');
            if (item.classList.contains('accordion-list__item--opened')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const modal = document.getElementById('leaderModal');
        const closeBtn = modal.querySelector('.modal__close');
        const overlay = modal.querySelector('.modal__overlay');

        // показать через 5 секунд
        setTimeout(() => {
            modal.classList.add('modal--show');
        }, 2000);

        // закрытие при клике на крестик или на затемнение
        [closeBtn, overlay].forEach(el => {
            el.addEventListener('click', () => {
                modal.classList.remove('modal--show');
            });
        });
    });


})();




