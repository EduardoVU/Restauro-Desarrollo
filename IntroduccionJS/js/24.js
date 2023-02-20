//Ciclo for




const carrito = [
    {nombre: "Monitor 20 pulgadas", precio: 500},
    {nombre: "Televisión 50 pulgadas", precio: 700},
    {nombre: "Tablet", precio: 300},
    {nombre: "Audifonos", precio: 200},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 500},
    {nombre: "Bocinas", precio: 300},
    {nombre: "Laptop", precio: 800}
];



// for (let i = 0; i < carrito.length; i++) {
//     console.log(carrito[i].nombre);
// }



// While loop

let i = 0;

while ( i < carrito.length) {
    console.log(carrito[i].nombre)
    i++
}

//Do while la diferencia es que al menos corre el código una vez y luego evalúa

let j = 101;

do {
    console.log(j);
    j++
}

while(j < 100)