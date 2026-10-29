// Ejemplo 4: Callback asíncrono con setTimeout()

function notificarDescarga(nombreArchivo) {
    console.log("Notificación: El archivo '" + nombreArchivo + "' se ha descargado correctamente.");
}

function descargarArchivo(archivo, callbackAlTerminar) {
    console.log("Iniciando descarga de: " + archivo + "...");
    
    setTimeout(function() {
        callbackAlTerminar(archivo);
    }, 3000);
}

descargarArchivo("manual_javascript.pdf", notificarDescarga);
console.log("El usuario puede seguir navegando por la página mientras se descarga.");