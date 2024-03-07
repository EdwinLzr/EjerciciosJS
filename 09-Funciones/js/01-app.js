
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

// return en las funciones

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