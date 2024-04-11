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


