// estrucuras de control
// revisan si se cumple  una condicion y ejecuta un algo


const puntaje=1000;
const puntaje2='2'
const targeta=true

if(puntaje===1000){
    console.log('si es igual...')
}else{
    console.log('no es igual')
}

// else if 
if(puntaje===1000){
    console.log('si es igual...')
}else if(targeta){
    console.log('puede pagar')
}else{
    console.log('fondos insuficientes')
}

// switch case


const metodoPago='efectivo'

switch(metodoPago){
    case 'efectivo':
        console.log(`pagaste con ${efectivo}`)
        break;

        default:
            console.log('metodo no soportado')
            break;
}


const usuario =true;
const puedePagar=true;
const edad = 18;

if(usuario && puedePagar){
    console.log('puede pagar')
}else if(puedePagar && usuario){
    console.log('puede pagar')
}else if(usuario || edad>=18){
console.log('no cumple los requisitos')
}
// operador ternario
const auth = false;
const puede=true;

console.log(auth ? 'si esta auth' : 'no est auth')
console.log(auth && puede ? 'si puede' : 'no est auth')
console.log(auth || puede ? 'si puede' : 'no est auth')


// if anidado ternario 
console.log(auth && puede ? 'no puede' ?'si puede' : 'es asi': 'no est auth')

