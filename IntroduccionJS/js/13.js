const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}


const medidas = {
    peso : "1kg",
    dimension : "1m"
}

//Cuando se unen dos objetos, lo ideal es que no se pueda modificar ni uno de los dos 


const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);
