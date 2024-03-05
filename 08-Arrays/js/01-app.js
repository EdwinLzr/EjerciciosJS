
// ========= Arrays =================
// nos permiten organizar elementos en una sola variable, es como una colecion de datos
// los arrays comienzan desde el indice 0

const numeros=[10,20,30]
const meses1= new Array('enero', 'febrero','marzo')
const meses=['enero', 'febrero','marzo']


// ===== ACCEDER A LOS ELEMTOS DE UN ARREGLO===

console.log(numeros)
// por indice
console.log(numeros[2])

// ==== OPERACIONES UTILES CON ARREGLOS===
// mostrar todos los elemetos en consola
console.log(meses)

// cuanto mide el arreglo
meses.length

// recorrer el arreglo para mostrar los datos
for(let i=0; i<meses.length; i++){
 console.log(i);
}

// ==== CARRITO DE COMPRAS ====
// al agregar elemetos al array  existen formas imperativas  y otras declarativas
const carrito =[];
// productos
const producto={
    nombre:'camisa',
    talla:'L',
    color:'verde'
}

const producto2={
    nombre:'Zapatos',
    talla:'38',
    color:'white'
}

// carrito.push(producto);
// carrito.unshift(producto2)
// MODIFICAR VALORES DE U ARRAY
meses[0]='nuevo mes'
// elemtos al final
meses.push('diciembre')
meses.shift('diciembre')

// agregar elemtos utilzando spreat operator ---forma declarativa

let resultado;
resultado=[...carrito, producto]
resultado=[producto2, ...carrito]


// eliminar ultimo elemento
carrito.pop()
// eliminar al inicio
carrito.shift()
// eliminar varios elementos recive desde donde inicia y hasta donde elimina
carrito.splice(0, 1)

// destructuring de arrays  definimos el el nombre ya que acedemos a los indices y estos no tienen nombre
const[primero, segundo, tercero]=numeros
// si queremos un elemento intermedio utilizamos ,
const[, , tercer]=numeros

// methods para arreglos
for(let i=0; i<carrito.length; i++){
    console.log(`${carrito[i].nombre}--${carrito[i].precio}`);
   }

   carrito.forEach(function(producto){
    return`${producto.nombre} -- ${producto.precio}`;
    // console.log(`${producto.nombre} -- ${producto.precio}`);
    
   })
   
//    .map crea un nuevo arreglo forEach no
   carrito.map(function(producto){
    return`${producto.nombre} -- ${producto.precio}`;
    // console.log(`${producto.nombre} -- ${producto.precio}`);
   })