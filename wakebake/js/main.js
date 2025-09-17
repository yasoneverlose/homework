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

const modal = document.querySelector('.modal')
const modalButton = document.querySelector('.about__img-button')

modalButton.addEventListener('click', openModal)
modal.addEventListener('click', closeModal)

function openModal(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal')
}

function closeModal(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
        document.body.classList.remove('body--opened-modal')
    }
}