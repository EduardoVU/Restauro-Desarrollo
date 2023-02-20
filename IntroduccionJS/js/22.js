//Estructuras de control

//Estructuras de control son basicamente condicionales o if

/*const puntaje = 1000;

if(puntaje === 1000) { //si se utiliza el triple igual, compara que el valor sea igual y que el tipo de dato sea igual
    console.log("Si, el puntaje es 1000");
} else {
    console.log("No, el puntaje no es 1000");
} */

// const efectivo = 1000;
// const carrito = 800;


// if (efectivo >= carrito) {
//     console.log("El usuario puede pagar")
// } else {
//     console.log("El usuario no puede pagar")
// }

const rol = "ADMINISTRADOR";

if (rol === "ADMINISTRADOR") {
    console.log("Acceso a todo el sistema");
} else if (rol === "EDITOR") {
    console.log("Eres editor, puedes entrar pero no puedes hacer mucho");
} else {
    console.log("No tienes acceso");
}