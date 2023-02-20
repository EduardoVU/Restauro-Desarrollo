//string o cadenas de texto
const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web Completo";
const producto2 = "Monitor HD";



//const producto2 = String("Monitor de 30 pulgadas"); //una manera no usual
//const producto3 = new String("Monitor de 50 pulgadas"); //objeto




//Lenght da la cantidad de caracteres del string
console.log(tweet.length); //Obviamente da el lenght del string

//Encontrar el elemento en un String (Da la posición)
console.log(tweet.indexOf("JavaScript"));
console.log(producto2.indexOf("Tablet")); //da como resultado -1 porque no se encuentra la palabra en el String

//Includes retorna "True" o "False"
console.log(tweet.includes("JavaScript"));
console.log(producto2.includes("Tablet"));



