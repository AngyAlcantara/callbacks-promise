// Ejemplo 2: Callback con parámetros

function mostrarTotal(montoFinal) {
    console.log("El total a pagar con IVA incluido es: $" + montoFinal);
}

function calcularPrecioConIVA(precioBase, callbackMostrar) {
    var iva = precioBase * 0.16;
    var total = precioBase + iva;
    callbackMostrar(total);
}

calcularPrecioConIVA(100, mostrarTotal);
