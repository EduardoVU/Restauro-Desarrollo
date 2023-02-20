/* Declaración de funciones */

function sumar(numero1 = 0, numero2 = 0) { //El igual de los parametros es un parametro por default, en caso de que no se llame la función con los parámetros
    console.log(numero1 + numero2);
}
sumar(15,40);

//Expresión de la función

const sumar2 = function() {
    console.log(3 + 3);
}
sumar2();