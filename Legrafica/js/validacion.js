

const datos = {
    nombre: "",
    ciudad: "",
    telefono: 0,
    correo: "",
    mensaje: ""
}

//Eventos de inputs y textarea

const nombre = document.querySelector('#nombre');
const ciudad = document.querySelector('#ciudad');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
ciudad.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//Evento Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    //Validar formulario
    const {nombre, ciudad, telefono, correo, mensaje} = datos;

    if (nombre === "" || ciudad ==="" || telefono === "" || correo ==="" || mensaje ==="") {
        mostrarAlerta("Favor de llenar todos los campos", true);


        return;
    }

    //Enviar formulario
    mostrarAlerta("Mensaje enviado correctamente");
    
})



function leerTexto(evento) {
    datos[evento.target.id] = evento.target.value;
    //console.log(datos)
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add("error");
    } else {
        alerta.classList.add("correcto");
    }

    formulario.appendChild(alerta);

    //Desaparezca a los 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}
