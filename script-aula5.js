// aula 0305

const menu = document.querySelector('.menu')

menu.className
menu.classList
menu.classList.add('ativo')
menu.classList.add('ativo', 'mobile')
menu.classList.remove('ativo')
menu.classList.toggle('ativo')
menu.classList.contains('ativo')
menu.classList.replace('ativo', 'inativo')


menu.classList.toggle('azul')

if(menu.classList.contains('azul')) {
    menu.classList.add('possui-azul')
} else {
    menu.classList.add('nao-possui-azul')
}

// menu.className = menu.className + ' Vermelho'
menu.className += ' Vermelho'

const animais = document.querySelector('.animais')

console.log(animais.attributes)


const img = document.querySelector('img')

console.log(img.getAttribute('src'))


const carro = {
    portas: 4,
    andar(km) {
        console.log(`Andou ${km} km`)
    }
}