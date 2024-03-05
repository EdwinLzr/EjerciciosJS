// strings son cadenas de texto van entre comillas pueden ser sencillas o dobles

let nombre= 'pedro'

const producto = 'tv 20 pulgadas'
const descripcion='oled'
const producto2 =String('monitor de 24')
const producto3 =new String ('monitor de 24')


// metodos para strings

// saber extencion de una palabra
producto.length
// posision de una palabra palabra
producto.indexOf('tv')
// tomar primera palabra de un texto
producto.charAt()
// verificar si algo esta incluido
producto.includes('pulgadas')
// concatenar
producto.concat(descripcion);
// repetir
producto.repeat(3)

producto.lastIndexOf()
// eliminar espacios en blanco
producto.trim()
producto.trimEnd()
producto.trimStart()
// cortar y separar con por algo comun en el texto , spacios . etc
producto.split(' ')
// reemplazar un texto por otro
producto.replace('tv', 'televisor')
// mayusculas
producto.toUpperCase()
// minusculas
producto.toLowerCase()
// extraer recibe 2 arg donde inicia y donde termina
producto.slice(1,4)
// cortar y sustraer se comporta como slice la diferencia es que no importa el orden que le pases 
producto.substring(1,2)

console.log()