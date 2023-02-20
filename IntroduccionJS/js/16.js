//Funciones de JavaScript

/* Declaración de funciones */

function sumar() {
    console.log(10 + 10);
}

sumar();

//Expresión de la función

const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();



//IIFE (No se ocupan llamar porque se llaman a ellas mismas) tiende a ser algo similar a encapsulamiento para evitar que se mezclen las variables con otros archivos

(function() {
    console.log("Esto es una función")
})();