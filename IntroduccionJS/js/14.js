// Arrays

const numeros = [10, 20, 30, 40, 50];


const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo"); //Otra manera de escribir arrays


meses.push("Marimacha");

numeros.push(60, 70, 80); //Agrega al final del arreglo

numeros.unshift(-30, -20, -10, 0 ); //Agrega al principio del arreglo

console.table(meses);

console.table(numeros);

meses.pop(); //Elimina el ultimo elemento del arreglo

meses.shift(); //Elimina el primer elemento del arreglo

console.table(meses);

const nuevoArreglo = [...meses, "Marimacha"];
console.table(nuevoArreglo);



/*//Acceder a elementos del array, se usa el numero del index
console.log(meses[1]);

//Cantidad de elementos en un array

console.log(meses.length);


meses.forEach(function(mes) { //pseudo ciclo for con iterador
    console.log(mes);
})*/

