// aula 0303

const animaisSection = document.getElementById('animais')
const contatoSection = document.getElementById('contato')

console.log(animaisSection)


const gridSection = document.getElementsByClassName('grid-section')
const contato = document.getElementsByClassName('grid-section contato')

const ul = document.getElementsByTagName('ul')

console.log(gridSection[0])


const animais = document.querySelector('.animais')
const contato2 = document.querySelector('#contato')
const ultimoItem = document.querySelector('.animais-lista li:last-child')
const linkCSS = document.querySelector('[href^="https://"]')
const primeiroUl = document.querySelector('ul')

const navItem = primeiroUl.querySelector('li')


const animaisImg = document.querySelectorAll('.animais img')


const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

primeiroUl.classList.add('grid-section')

// console.log(gridSectionHTML)
// console.log(gridSectionNode)


// gridSectionNode.forEach(function(item) {
//     console.log(item)
// })

const arrayGrid = Array.from(gridSectionHTML)

arrayGrid.forEach(function(item) {
    console.log(item)
})