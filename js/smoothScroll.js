const linksHeader = document.querySelectorAll('.menu-list__link')
const mainScroll = document.querySelector('.main__scroll')
const logoImg = document.querySelector('.logo__img')
const mainBtn = document.querySelector('.main__button')

const newArray = [...linksHeader, mainScroll, logoImg, mainBtn]

newArray.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()

        const ID = e.target.closest("A").getAttribute('href').substr(1)

        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
})