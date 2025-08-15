(function () {
    document.addEventListener('click', burgerInit);

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger__icon');
        const burgerNavLink = e.target.closest('.nav__link');

        if (!burgerIcon && !burgerNavLink) return;

        if (document.documentElement.clientWidth > 900) return;
        if (burgerIcon) {
            document.body.classList.toggle('body--opened-menu');
        }

        if (burgerNavLink) {
            document.body.classList.remove('body--opened-menu');
        }
    }
})();
