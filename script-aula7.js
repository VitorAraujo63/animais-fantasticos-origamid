// aula 0306
const section = document.querySelector('.animais')

// console.log(section.clientHeight)
// console.log(section.clientWidth)


const listaAnimais = document.querySelector(".lista-animais")

// const height = listaAnimais.scrollHeight

const primeiroh2 = document.querySelector('h2')
const h2left = primeiroh2.offsetLeft

console.log(h2left)


const rect = primeiroh2.getBoundingClientRect()
console.log(rect)


if(rect.top < 0){
    console.log('passou do elemento')
}

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.pageYOffset

)

const small = window.matchMedia('(max-width: 600px)')

if(small.matches) {
    console.log('tela menor que 600px')
} else {
    console.log('tela maior que 600px')
}