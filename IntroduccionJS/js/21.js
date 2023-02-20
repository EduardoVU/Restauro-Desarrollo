//arrpw functions

const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(15, 24);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo("JavaScript")


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



meses.forEach(mes => {
    if(mes == "Marzo") {
        console.log("Marzo existe");
    }
})

let resultado;

//Some ideal para arreglo de objetos

resultado = carrito.some(producto => producto.nombre == "Celular");
console.log(resultado)


//reduce

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado)


//***********NOTA******************* REVISAR ARROW FUNCTIONS


//Filter

resultado = carrito.filter(producto => producto.precio > 400); //Regresa los productos que tengan un precio mayor a 400

console.log(resultado)

resultado = carrito.filter(producto => producto.nombre != "Celular"); //Regresa los productos que tengan un nombre distinto a celular

console.log(resultado)