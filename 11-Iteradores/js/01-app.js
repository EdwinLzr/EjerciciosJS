// iteradores el codigo se cumple hasta que se cumpla una condicion
// =====for==========
// for(let i=1; i<=10; i++){
//    console.log(` numero : ${i}`)
// }

// numeros pares y nones

//  for(let i=1; i<=10; i++){
//     if(i%2===0){
//         console.log(`el ${i} es numero par`)
//     }else{
//         console.log(`el ${i} es numero impar`)

//     }
//     }


// recorriendo carrito con for

// const carrito=[

//     {nombre:'perla', precio:500},
//     {nombre:'cama', precio:500},
//     {nombre:'olla', precio:500, descuento:true},
//     {nombre:'jarra', precio:500},
//     {nombre:'cono', precio:500}
// ]

// for(let i = 0; i<carrito.length; i++){
//     console.log(carrito[i])
// }

// const resultado=carrito.length


// for(let i = 1; i<=10; i++){
//    if(i===5){
//     console.log('cinco')
//     //  break; detiene la ejecucion
//   continue
//    }
//    console.log(`numero:${i}`)

   
   
// }
   
// for(let i = 1; i<carrito.length; i++){
//     if(carrito[i].descuento){
//       console.log(` ${carrito[i].nombre} tiene descuento`)
//       continue
//     }
//      console.log(carrito[i].nombre)
// }


// fizz buzz
// 3 6 9 12.... fizz
// 5 10 15 20.... buzz
// 15 30 45...FIZZBUZZ

// for(let i=1; i<=100; i++){
//     if(i % 15===0){
//         console.log(`${i} FIZZBUZZ`)
//     }else if(i % 5 ===0){
//         console.log(`${i} buzz`)
//     }
//     else if(i % 3 ===0){
//         console.log(`${i} fizz`)
//     } 
// }


// ==== while====
let i =0 //inicializar el 0
// while(i<10){

// i++
// }


// =========do while =============
// se ejecuta al menos una vez
// do{
//     // codigo
//   i++  
// }while(i<10){

// }


// ==== forEach======
const pendientes = ['tarea', 'ejercicio','comer', 'vertv']
pendientes.forEach((pendiente,indice)=>{
console.log(`${indice}: ${pendiente}`)
})


pendientes.map((pendiente,indice)=>{
console.log(`${indice}: ${pendiente}`)
})



// for of

for(let  pendiente of pendientes){
   console.log(pendientes);
}

for(let carrito of producto){
    console.log(carrito.nombre)
}

const autos ={
  marca:'BMW',
  color:'red',
  modelo:'2029'
}
// actua sobre objeto
for(let propiedad in autos){
   console.log(`${autos[propiedad]}`)

}
// otra forma
for(let [llave, valor]of Object.entries(autos)){
    console.log(valor)
}