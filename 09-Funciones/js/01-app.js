
// funciones--son procedimientos o instrucciones que realizan una accion 
// hay 2 maneras de crea funciones
// permite dividir el codigo
// son reutilizables


// declaracion de function
// esta funtion se ejecuta en un paso devido al hoisting de js que es la manera como se leee codigo en js

sumar()

function sumar(){
   console.log(2+2) 
}
sumar()



// expresion de function(function Expression)
// esta function se ejecuta es 2 pasos

sumar()
const sumar2=function(){
    console.log(3+3)
}

sumar2()


// funciones ya incluidas llamadas libreria standar
// window  es la ventana en js donde rejistra todos los eventos del lenguaje
alert('error')
prompt('como te llamas');


// diferencias entre funciones y methods
const nun1=20
const num="20"

// esto es una funcion
parseFloat()
// esto es un metodo
num.toString()

// argumntos en las funciones
function sumar2(a , b){
  console.log(a + b)
}
sumar2(3 , 9)

function saludar(nombre='', apellido=''){
    console.log(`hola ${nombre} ${apellido}`)
}
saludar('Edwin','Loaiza')

// como se comunican las funciones

iniciarApp();


function iniciarApp(){

  console.log('iniciando App....')
  segundaFuncion();
}

function segundaFuncion(){
  console.log('desde la segunda funcion')

  usuarioAuth('pablo');


}
function usuarioAuth(usuario){
  console.log('Autenticando usuario');
  console.log(`Usuario autenticado ${usuario}`);}


  // return en funciones
function sumar3(a,b){
  return a + b;
}

const resultado = sumar(2 , 3);

console.log(resultado)


// eejemplo mas avanzado

let total=0;
function agregarCarrito(precio){
return total += precio;
}

function calcularImpuesto(total){
return total * 1.15;
}
total=agregarCarrito(300)
total=agregarCarrito(200)
total=agregarCarrito(100)

const totalPagar = calcularImpuesto(total);
console.log(`total es: ${totalPagar}`)
console.log(total)


// metodos de propiedad son funciones paracidos a un metodo  es un objeto con multiples funciones

const reproductor={
  reproducir:function(id){
    console.log(` Reproduciendo cancion id${id}`)
  },
  pausar:function(id){
    console.log(` Pausando cancion id${id}`)
  },
  borrar: function(id){
     console.log(`borrando cancion... ${id}`)
  },
  crearPlayList:function(nombre){
    console.log(` creando playList: ${nombre}`)
  },
  reproducirPlayList:function(nombre){
    console.log(` reproduciendo playList: ${nombre}`)
  }
}
reproductor.reproducir(30)
reproductor.pausar(30)
reproductor.borrar(30);
reproductor.crearPlayList('music Metal');
reproductor.reproducirPlayList('music metal')


// arrow function o funciones de flecha

const aprendiendo = ()=>{

}

// las funciones de flecha se pueden optimizar cuando las funciones son de una sola linea
// se da por implicito el return y se elimina las llaves
const aprendiendo2=()=>'aprendiendo Javascript';

aprendiendo()

// funciones de flecha con parametros si pasas mas de 2 parametros es obligatorio el parentesis
const aprendiendo23 = function(tecnolgia){
  console.log(`aprendiedo ${tecnolgia}`)
}


// console.log(aprendiendo23())
// con arrow functions
const reproductor2={
  cancion:'',
  reproducir:id =>(` Reproduciendo cancion id${id}`),
  pausar:id=>(` Pausando cancion id${id}`),
  borrar: id=>(`borrando cancion... ${id}`),
  crearPlayList:nombre=>(` creando playList: ${nombre}`),
  reproducirPlayList:nombre=>(` reproduciendo playList: ${nombre}`),

  set nuevaCancion(cancion){
   this.cancion=cancion;
   console.log(`añadiendo ${cancion}`)
  },
  get obtenerCancion (){
    console.log(`${this.cancion}`)
  }
}

reproductor2.nuevaCancion='vestido de cristal';
reproductor2.obtenerCancion;
reproductor.reproducir(30)
reproductor.pausar(30)
reproductor.borrar(30);
reproductor.crearPlayList('music Metal');
reproductor.reproducirPlayList('music metal')
