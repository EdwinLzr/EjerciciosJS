

// OBJETOS --agrupa todo en una sola variable

// object literal
const producto={
nombre:'edwin',
edad:41,
ciudad:'Bello',
informacion:{
peso:80,
medida:'1m'
}

}
// agregar nuevas propiedades al objeto
producto.imagen='imagen.jpg'
// eliminar
delete producto.edad;
// asignar valores del objeto a una variable
const edadp= producto.edad;
// destructuracion de objetos para acceder a los valores enun solo paso
// const {nombre, edad, ciudad} = producto;

// como acceder a los valores de un objeto
//  sintasis de punto
console.log(producto.nombre)
// sintasis de corchetes
console.log(producto['edad'])
// acceder aobjetos dentro de objetos utilizamos la sintaxis de puntos
console.lod(producto.informacion.medida)
// destructuring de objetos dentro de objetos
const {nombre, edad, ciudad, informacion, informacion:{peso,medida}}=producto

// notas sobre objetos 
// los objetos se pueden reagsignar o cambiar susvalores aun siendo const
producto.ciudad=false
delete producto.precio

// prevenir cambio de los valores de un objeto congelando el obj

// en la parte superior del objeto
"use strict" //nos obliga a tener en cuenta ciertas reglas

// METHODS PARA OBJETOS

// objects methods para congelar objetos
Object.freeze(producto)
// seal no permite agregar o eliminar pero si se pueden modificar
Object.seal(producto)
// verificar congelado
Object.isFrozen(producto)
Object.isSealed(producto)


// UNIR 2 OBJETOS
const color={
    color1:'verde',
    color2:'rojo'

}

let resultado;
// asignar
resultado=Object.assign(producto, color);

// rest operator
const rersultado2 = {...nombre, ...color};

// this dentro de objetos


const producto2={
    nombre:'caja',
    precio:41,
    ciudad:'Bello',
  mostrarInfo:function(){
    console.log(`el producto ${this.nombre} tiene un precio de:${this.precio} `)
  }
}

producto.mostrarInfo()


// crear objetos con object consructor

// object literal
const producto3={
    nombre:'caja',
    precio:41,
    ciudad:'Bello',
 
}

// object cosnstructor
function Producto(nombre, precio)
{
this.nombre=nombre;
this.precio=precio;
}

const producto5=new Producto('monitor', 500)


// obtener las llaves de un objeton 
Object.keys(producto)
// obtener los valores de un objeto
Object.values(producto)

// obtener llaves y valores
Object.entries(producto)