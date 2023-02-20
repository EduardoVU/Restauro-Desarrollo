//"use strict"; hace que se use de manera estricta las lineas de codigo


const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}


Object.freeze(producto);  //Freeze no permite modificar, ni añadir ni eliminar propiedades a los objetos

Object.seal(producto); //Seal es igual que freeze solo que si te permite modificar las propiedades existentes
producto.imagen = "imagen.jpg";

console.log(producto);