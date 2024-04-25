const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2=['junio', ' agosto']

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// array methods

// comprobar si un valor existe en un arreglo forma manual
// meses.forEach((mes)=>{
// if(mes==='Enero'){
//     console.log('existe')
// }
// })
// includes=====
//   no sirve para  arrays de objetos solo de indices
// const resultado = meses.includes('Enero')
// console.log(resultado)


// some======
// const existe =carrito.some((producto)=>{
//     return producto.nombre==='Celular'
// })

// console.log(existe)

// const existe2 =meses.some((mes)=>{
//     return mes==='Enero'
// })
// console.log(existe2)

// manual
// meses.forEach((mes,i)=>{
//     if(mes==='Abril'){
//         console.log(`${mes} encontrado en el indice ${i}`)
//     }
// })


// findIndex  
// enconttar el indice de abril
// const indice=meses.findIndex(mes=> mes==='Abril')
// console.log(indice);

// if(indice > 0){

// }

// encontar un indice de u arreglo de objetos
// const indice2 =carrito.findIndex(producto =>producto.precio===100)

// console.log(indice2)


// ========reduce=====
// manual
// let total= 0;
// carrito.forEach((producto)=>total= producto.precio)
// console.log(total)

// let resultado =carrito.reduce((total, producto)=> total + producto.precio, 0)

// filter======

// let resultado;
// resultado =carrito.filter(producto=>producto.precio>400)
// resultado =carrito.filter(producto=>producto.precio<600)
// resultado =carrito.filter(producto=>producto.nombre !== 'Audifonos')
// resultado =carrito.filter(producto=>producto.nombre === 'Audifonos')


// console.log(resultado)


// manual
// let resultado='';
// carrito.forEach((producto,index)=>{
//    if(producto.nombre==='Tablet'){
//     resultado= carrito[index]
//    } 
// })
// console.log(resultado)
// // find
// const resultado2 = carrito.find((producto)=>producto.precio===100)
// console.log(resultado2)

// every====== debe cumplir cierta condicion
// const resultado = carrito.every(producto =>producto.precio<1000)
// console.log(resultado)

// unir arreglos ==== el orden afecta la union de estos
// const resultado = meses.concat(meses2)
// console.log(resultado)

// // speat operator
// const resultado2=[...meses, ...meses2]

// otros ejemplos con spreat operator
// const meses3 =[...meses, 'Agosto']
// console.log(meses3)

// const producto ={producto:'Disco duro', precio:200}

// const carrito2 =[...carrito, producto]
// console.log(carrito2)