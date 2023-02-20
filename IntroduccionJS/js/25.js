


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


//forEach ejecuta una vez por cada elemento, solo se puede usar en arreglos (arrays) este es bueno para imprimir algo en consola 

//Arrow function, eliminas la palabra function y pones la flecha despues del argumento, si solo tienes un parámetro, puedes eliminr los paréntesis del argumento, si solo es una linea de codigo, puedes eliminar las llaves

carrito.forEach(producto => console.log(producto.nombre)) 
 
//map solo se ejecuta en arreglos (arrays) este es bueno para asignar un arreglo a una variable
carrito.map(producto => console.log(producto.nombre)) 