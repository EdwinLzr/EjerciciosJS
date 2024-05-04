// podemos utilizar el chaining o encadenamiento
// const encabezado= document.querySelector('.contenido-hero h1')
// console.log(encabezado)
// console.log(encabezado.innerText)//no encuentra textos ocultos con visibility hidden en css
// console.log(encabezado.textContent)//si lo encuentra
// console.log(encabezado.innerHTML)//se trae el html

// const nuevoHeading='Nuevo heading'
// document.querySelector('.contenido-hero h1').textContent=nuevoHeading

// const imagen = document.querySelector('.card img');
// imagen.src='img/hacer2.jpg'


// ======================= cambiando css de los elementos===================================

// const encabezado =document.querySelector('h1')
// encabezado.style.backgroundColor='red'
// encabezado.style.textTransform='uppercase'
// console.log(encabezado)


// const card =document.querySelector('.card')
// card.classList.add('nueva_clase','segunda_clase')
// card.classList.remove('card')
// console.log(card.classList);

// ================= traversing de dom====================
// const enlace=document.querySelector('.navegacion')
// console.log(enlace.firstElementChild)
// console.log(enlace.lastElementChild)

// console.log(enlace.childNodes)//los espacios en blanco son considerados espacios en blanco
// console.log(enlace.children)//lista los elementos html
// console.log(enlace.children[1]).nodeName
// console.log(enlace.children[1]).nodeType

// const card =document.querySelector('.card')
// // card.children[1].children[1].textContent='nuevo heading desde traversi de DOM'
// console.log(card.children[1].children[1].textContent)
// card.children[0].src='img/hacer3.jpg'
// console.log(card.children[0])



// traversing del hijo al padre podemos ir por los padres del elemento

// // console.log(card.parentNode)
// console.log(card.parentElement)

// atraves de los hermanos
// console.log(card)
// console.log(card.nextElementSibling)

// const ultimoCard=document.querySelector('.card')

// =====================eliminar elementos del DOM ======================

// const primerEnlace = document.querySelector('a')
// primerEnlace.remove()
// console.log(primerEnlace)


//==== eliminar desde el padre
// const navegacion= document.querySelector('.navegacion')
// console.log(navegacion.children)
// navegacion.removeChild(navegacion.children[2])



// ============ COMO CREAR HTML DESDE JS ===================
// // elemento
// const enlace=document.createElement('a')
// // texto
// enlace.textContent='nuevo enlace'
// // href
// enlace.href='/nuevo_enlace'
// // target
// enlace.target='_blanck'
// // insertar elemneto
// // class
// enlace.classList='clasee_enlace'
// const navegacion= document.querySelector('.navegacion')
// navegacion.appendChild(enlace)
// // con insert before tenemos mas control de posision
// // navegacion.insertBefore(enlace, navegacion.children[2])
// console.log(MediaElementAudioSourceNode)


// =============CREAR UN CARD DE FORMA DINAMICA========
// const parrafo1=document.createElement('p')
// parrafo1.textContent='Concierto'
// parrafo1.classList.add('categoria', 'concierto')

// const parrafo2=document.createElement('p')
// parrafo2.textContent='Concierto'
// parrafo2.classList.add('titulo')

// const parrafo3=document.createElement('p')
// parrafo3.textContent='$1600 por persona'
// parrafo3.classList.add('precio')

// // div con clae info
// const info=document.createElement('div')
// info.classList.add('info')

// info.appendChild(parrafo1)
// info.appendChild(parrafo2)
// info.appendChild(parrafo3)

// // crear imagen
// const imagen=document.createElement('img')
// imagen.src='img/hacer2.jpg'

// // crear card
// const card= document.createElement('div')
// card.classList.add('card')

// // asig img
// card.appendChild(imagen)
// // asig textos
// card.appendChild(info)

// // insertar en html
// const  contenedor=document.querySelector('.hacer .contenedor-cards')
// // contenedor.appendChild(card)
// contenedor.insertBefore(card, contenedor.children[0])


// hacer DOM SCRIPTING================

// Sseleccionamos el elemento
const btnFlotante=document.querySelector('.btn-flotante')
const footer=document.querySelector('.footer')

// btnFlotante.addEventListener('click', ()=>{
//     console.log('diste click')
// })

btnFlotante.addEventListener('click',mostrarOcultar)

function mostrarOcultar(){
    if(footer.classList.contains('activo')){
     footer.classList.remove('activo')
     btnFlotante.classList.remove('activo')  
     btnFlotante.textContent='Idioma y Moneda'

    }else{
     footer.classList.add('activo') 
     btnFlotante.classList.add('activo')  
     btnFlotante.textContent='Cerrar'
    }

}


