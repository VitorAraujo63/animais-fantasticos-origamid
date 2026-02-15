// aula 0307

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleLink(event) {
    event.preventDefault()
    linksInternos.forEach((item) => {
        item.classList.remove('Ativo')
    })
    event.currentTarget.classList.toggle('Ativo')
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const all = document.querySelectorAll('body')

function handleClick(event) {
    console.log(event.target)
}

// window.addEventListener('click', handleClick)


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function handleClickRemove(event) {
    event.target.remove()
}

// window.addEventListener('click', handleClickRemove)


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function toggleT(event) {
    if(event.key === 't') {
        document.body.classList.toggle('font-maior')
    }
}

window.addEventListener('keydown', toggleT)