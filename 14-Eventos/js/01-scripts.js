
//SE EJECUTA CUANDO EL DOCUEMNTOESTA CARGADO

// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log('docuemnto listo')
// })


//EVENTOS CON EL MOUSE==============

// const nav=document.querySelector('.navegacion')
// nav.addEventListener('click',() =>{
// console.log('click en nav')
// })

// const nav=document.querySelector('.navegacion')
// nav.addEventListener('mouseenter',() =>{
// console.log('entraste al nav')
// })

// const nav=document.querySelector('.navegacion')
// nav.addEventListener('mousedown',() =>{
// console.log('similar al click')
// })

// const nav=document.querySelector('.navegacion')
// nav.addEventListener('mousedown',() =>{
// console.log('se ejecuta despues de dar click y soltar')
// })

// const nav=document.querySelector('.navegacion')
// nav.addEventListener('mouseup',() =>{
// console.log('se ejecut')
// })

// const nav=document.querySelector('.navegacion')
// nav.addEventListener('dblclick',() =>{
// console.log('doble click')
// })


// const nav=document.querySelector('.navegacion')
// nav.addEventListener('mouseout',() =>{
// console.log('saliste del nav')
// nav.style.backgroundColor='red'
// })


// EVENTOS CON EL TECLADO===============

// const busqueda= document.querySelector('.busqueda')

// busqueda.addEventListener('keydown',()=>{
//  console.log('escribiendo')
// })

// busqueda.addEventListener('keyup',()=>{
//  console.log('al soltar la tecla')
// })

// busqueda.addEventListener('blur',()=>{
//  console.log('diste click afuera')
// })

// busqueda.addEventListener('copy',()=>{
//  console.log('copiando')
// })

// busqueda.addEventListener('paste',()=>{
//  console.log('pegando')
// })

// busqueda.addEventListener('cut',()=>{
//  console.log('cortando')
// })

// busqueda.addEventListener('input',(e)=>{
//     if(e.target.value==='')
//  console.log('fallo')
// })

// EVENTOS EN UN FORMULARIO=====================


// const formulario= document.querySelector('#formulario')

// formulario.addEventListener('submit', (e)=>{
//  e.preventDefault();

// console.log(e.target.action)
// console.log(e.target.value)
// console.log(e.target.)

// })

// =====DECLARACION DE FUNCIOM
// formulario.addEventListener('submit', validarFormulario)


// function validarFormulario(e){
//     e.preventDefault();
   
//    console.log(e.target.action)
//    console.log(e.target.value)

// }


// EVENTOS CON EL SCROLL DEL MOUSE======================
// window.addEventListener('scroll', ()=>{
//     // const scroly=window.scrollY
//     // console.log(scroly)

//     const premium=document.querySelector('.premium')

//     const ubicacion=premium.getBoundingClientRect()
//     if(ubicacion.top<100){
//         console.log('ele elemento ya es visible')
//     }else{
//         console.log('el elemento no es bisible')
//     }
// })


// PREVENIR EVENT BUBBLING O PROPAGACION DE EVENTOS==================

const cardDiv=document.querySelector('.card')
// const cardInfo=document.querySelector('.info')
// const cardTitulo=document.querySelector('.titulo')

// cardDiv.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     console.log('click en card')
// })
// cardInfo.addEventListener('click',(e)=>{
//     e.stopPropagation()

//     console.log('click en info')
// })
// cardTitulo.addEventListener('click',(e)=>{
//     e.stopPropagation()

//     console.log('click en titulo')
// })


// DETERNER CON DELEGATION======================
// cardDiv.addEventListener('click', (e)=>{
//     if(e.target.classList.contains('titulo')){
//         console.log('diste en titulo')
//     }
   
//     if(e.target.classList.contains('precio')){
//         console.log('diste en precio')
     
//     }
   
//     if(e.target.classList.contains('card')){
//         console.log('diste en card')

//     }
   

// })




    