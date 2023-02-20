const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
    {nombre: "Monitor 20 pulgadas", precio: 500},
    {nombre: "Televisión 50 pulgadas", precio: 700},
    {nombre: "Tablet", precio: 300},
    {nombre: "Audifonos", precio: 200},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 500},
    {nombre: "Bocinas", precio: 300},
    {nombre: "Laptop", precio: 800}
]

//Simulación de ciclo for
meses.forEach(function(mes) {
    console.log(mes)
})

meses.forEach(function(mes){
    if(mes == "Marzo") {
        console.log("Marzo existe");
    }
})

//Includes
let resultado = meses.includes("Diciembre");
console.log(resultado)

//Some ideal para arreglo de objetos

resultado = carrito.some(function(producto) {
    return producto.nombre == "Celular"
});
console.log(resultado)


//reduce

resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);

console.log(resultado)


//***********NOTA******************* REVISAR ARROW FUNCTIONS


//Filter

resultado = carrito.filter(function(producto) {
    return producto.precio > 400
}); //Regresa los productos que tengan un precio mayor a 400

console.log(resultado)

resultado = carrito.filter(function(producto) {
    return producto.nombre != "Celular"
}); //Regresa los productos que tengan un nombre distinto a celular

console.log(resultado)