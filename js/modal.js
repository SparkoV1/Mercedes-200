const modalBtn = document.querySelectorAll('.more')
const modal = document.querySelector('.modal')

modalBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.classList.remove('hidden')
    })
})

modal.addEventListener('click', (event) => {
    const target = event.target

    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add('hidden')
    }
})