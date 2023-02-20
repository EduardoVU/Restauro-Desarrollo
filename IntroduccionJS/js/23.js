// Swith - case
const metodoPago = "cheque";

switch(metodoPago) {
    case "tarjeta": 
        console.log("Pagaste con tarjeta");
        break;
    case "cheque":
        console.log("Pagaste con cheque, revisaremos los fondos primero");
        break;
    case "efectivo":
        console.log("Pagaste con efectivo");
        break;
    default:
        console.log("Aun no has pagado");
        break;
}