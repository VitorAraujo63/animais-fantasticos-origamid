// aula 0303
// Retorne no console todas as imagens do site

const allImg = document.querySelectorAll('img')
console.log(allImg)

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imageName = document.querySelectorAll('img[src^="img/imagem"]')
imageName.forEach(function(item) {
    console.log(item.outerHTML)
})

// Selecione todos os links internos (onde o href começa com #)

const internalLinks = document.querySelectorAll('[href^="#"]')
internalLinks.forEach(function(item) {
    console.log(item.href)
})

// Selecione o primeiro h2 dentro de .animais-descricao

const firstH2 = document.querySelector(".animais-descricao h2")
console.log(firstH2)

// Selecione o último p do site

const allPTags = document.querySelectorAll("p")
const lastPTag = allPTags[allPTags.length - 1]
console.log(lastPTag)
console.log(allPTags[--allPTags.length])