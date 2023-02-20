// objects

/*const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;
*/

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

/*console.log(producto);
console.log(producto.disponible);
console.log(producto.nombreProducto);
console.log(producto.precio);*/

producto.envio = true;

console.log(producto);

delete producto.disponible;
