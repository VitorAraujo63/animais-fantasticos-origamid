// aula 0307

const img = document.querySelector('img')

function callback(event) {
    console.log(event)
}

// img.addEventListener('click', callback)


// const imgs = document.querySelector('.animais-lista')

function callbackLista(event) {
    console.log(event.currentTarget)
    console.log(event.target)
    console.log(event.type)
}

// imgs.addEventListener('click', callbackLista)


const linkExterno = document.querySelector('a[href^="https"')

function handleLinkExterno(event) {
    event.preventDefault()
}

linkExterno.addEventListener('click', handleLinkExterno)




function handleKeyboard(event) {
    if(event.key === 'f') {
        document.body.classList.toggle('fullscreen')
    }
    console.log(event.key)
}

window.addEventListener('keydown', handleKeyboard)
 
const imgs = document.querySelectorAll('img')

function handleImg(event) {
    console.log(event.target.getAttribute('src'))
}

imgs.forEach((item) => {
    item.addEventListener('click', handleImg)
})