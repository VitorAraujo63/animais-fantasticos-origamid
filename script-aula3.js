// aula 0304

const imgs = document.querySelectorAll('img')

imgs.forEach(function(item, index, array) {
    // console.log(item, index, array)
})

const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)

titulosArray.forEach(function(item) {
    // console.log(item)
})


// arrow functions

// imgs.forEach((item) => {
//     console.log(item)
// })

// imgs.forEach(item => {
//     console.log(item)
// })

// imgs.forEach(() => {
//     console.log()
// })

// imgs.forEach((item) => console.log(item))

imgs.forEach((item) => {
    console.log(item)
})