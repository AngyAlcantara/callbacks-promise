// Ejemplo 1: Función básica con callback

function despedirse() {
    console.log("Adiós, hemos terminado el proceso.");
}

function iniciarProceso(miCallback) {
    console.log("Iniciando el proceso principal...");
    miCallback();
}

iniciarProceso(despedirse);
