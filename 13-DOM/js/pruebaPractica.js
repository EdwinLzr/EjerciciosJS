const contenedor=document.querySelector('.container')
// img
const img = document.createElement('img')
img.src='../img/hacer1.jpg'
img.alt='imagenCard'


// titulo
const titulo=document.createElement('h1')
titulo.classList.add('mititulo')
titulo.textContent='Hola mundo'

const descripcion= document.createElement('p')
descripcion.textContent='loren ipsum dolo ameba de las caas del cosa de mi masmkdnjjbc'

// card
const card=document.createElement('div')
card.classList.add('card')
card.classList.add('micard')

card.style.backgroundColor='red'
card.style.textAlign='center'

card.appendChild(img)
card.appendChild(titulo)
card.appendChild(descripcion)
contenedor.appendChild(card)



const libro=document.createElement('p')
libro.textContent='esta es la historia de la casa de las sepienetes que se estan acomodando para salir  a casar peor no se sabe que animal van a casar con los perros que estan furiosos y estan ladrando porque salio una vaca en pantalones'

const titulo_libro= document.createElement('h1')
titulo_libro.textContent='LIBRO DE CACERIA FORTIVA'

libro.appendChild(titulo_libro)

console.log(libro)



