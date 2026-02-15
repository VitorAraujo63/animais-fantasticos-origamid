// aula 0306

// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector('img')

console.log(img.offsetTop)

// Retorne a soma da largura de todas as imagens

const imgs = document.querySelectorAll('img')

let somaLargura = 0

imgs.forEach((item) => {
    somaLargura += item.clientWidth
})

console.log(somaLargura)

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')

links.forEach((item) => {
    const largura = item.offsetWidth
    const altura = item.offsetHeight

    if(largura >= 48 && altura >= 48) {
        console.log(`O link ${item} atende o mínimo recomendado`)
    } else {
        console.log(`O link ${item.outerHTML} não atende o mínimo recomendado`)
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu')

const browserSize = window.matchMedia('(max-width: 720px')

if(browserSize.matches) {
    menu.classList.add('menu-mobile')
} else {
    menu.classList.remove('menu-mobile')
}