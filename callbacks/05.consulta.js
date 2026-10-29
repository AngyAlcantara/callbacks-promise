// Ejemplo 5: Callback para simular una consulta de datos

function mostrarPerfilEnPantalla(usuarioRecibido) {
    console.log("Datos recibidos del servidor:");
    console.log("ID: " + usuarioRecibido.id + " | Nombre: " + usuarioRecibido.nombre);
}

function obtenerUsuarioDeServidor(idUsuario, callbackExito) {
    console.log("Consultando servidor para el usuario con ID " + idUsuario + "...");
    
    setTimeout(function() {
        var usuarioSimulado = {
            id: idUsuario,
            nombre: "Elena Gómez",
            rol: "Estudiante de Ingeniería"
        };
        callbackExito(usuarioSimulado);
    }, 1500);
}

obtenerUsuarioDeServidor(42, mostrarPerfilEnPantalla);