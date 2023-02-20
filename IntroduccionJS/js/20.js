//Métodos de propiedad

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo canción con el ID: ${id}`)
    },
    pausa : function() {
        console.log("Pausando...")
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist : function(nombre) {
        console.log(`Reproduciento playlist con nombre: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción con el ID: ${id}`)
}

reproductor.reproducir(3840);
reproductor.pausa();
reproductor.borrarCancion(20);
reproductor.crearPlaylist("Música para señoras dolidas")
reproductor.reproducirPlaylist("Música para señoras dolidas")



//console.log(reproductor);