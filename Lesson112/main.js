const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')

btn.addEventListener('click', () => {
    modal.classList.add('modal--open')
})

modal.addEventListener('click', event  => {
    const target = event.target

    if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
        modal.classList.remove('modal--open')
    }
})

document.addEventListener('keydown', event =>{
    if (event.code === 'Escape' ){
        modal.classList.remove('modal--open')
    }
})