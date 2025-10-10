
(function () {

    document.addEventListener('click', burgerInit)
    function burgerInit(e) {

        const headerNav = document.querySelector('.header__nav')
        const burgerIcon = document.querySelector('.burger-icon')

        const burgerIconTarget = e.target.closest('.burger-icon') 
        const burgerNavLink = e.target.closest('.header__nav-link') 
        if (burgerIconTarget || burgerNavLink) {

            if (document.documentElement.clientWidth > 1220) return 

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

    // --- Дуга ---
    const range = document.querySelector(".portfel__range");
    const arc = document.querySelector(".portfel__arc-green");
    const riskWrapper = document.querySelector(".portfel__profit-riskwrapper");
    const riskText = document.querySelector(".portfel__profit-risk");
    const profitPercent = document.querySelector(".portfel__profit-percent");

    if (range && arc && riskWrapper && riskText && profitPercent) {
        const arcLength = arc.getTotalLength();

        range.addEventListener("input", () => {
            const progress = range.value / 100;
            arc.style.strokeDashoffset = arcLength - arcLength * progress;

            if (progress < 0.34) {
                riskText.textContent = "Низкий риск";
                riskWrapper.style.background = "linear-gradient(120deg, rgba(10, 173, 67, 0.4) 0%, rgba(101, 204, 125, 0.22) 100%)";
                profitPercent.textContent = `до ${Math.round(5 * progress / 0.34)}%`;
            } else if (progress < 0.67) {
                riskText.textContent = "Средний риск";
                riskWrapper.style.background = "linear-gradient(120deg, rgba(255, 191, 0, 1) 0%, rgba(138, 108, 26, 1) 100%)";
                profitPercent.textContent = `до ${Math.round(5 + (10 - 5) * (progress - 0.34) / 0.33)}%`;
            } else {
                riskText.textContent = "Высокий риск";
                riskWrapper.style.background = "linear-gradient(120deg, rgba(255, 0, 0, 1) 0%, rgba(239, 71, 111, 0.22) 100%)";
                profitPercent.textContent = `до ${Math.round(10 + (15 - 10) * (progress - 0.67) / 0.33)}%`;
            }

            if (progress === 0) {
                profitPercent.textContent = "до 0%";
                arc.style.strokeDashoffset = arcLength;
            }
        });
    }

})();




