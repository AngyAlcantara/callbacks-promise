// Ejemplo 6: Manejo de errores con callbacks (Patrón Error-First)

function gestionarRespuesta(error, producto) {
    if (error !== null) {
        console.log("ERROR DETECTADO: " + error);
        return;
    }
    console.log("ÉXITO: Producto encontrado -> " + producto.nombre + " ($" + producto.precio + ")");
}

function buscarProductoPorId(id, callback) {
    console.log("Buscando producto con ID: " + id + "...");
    
    setTimeout(function() {
        if (id <= 0) {
            callback("El ID del producto debe ser un número mayor a cero.", null);
        } else {
            var productoEncontrado = {
                id: id,
                nombre: "Monitor 24 pulgadas",
                precio: 3200
            };
            callback(null, productoEncontrado);
        }
    }, 1000);
}

// Caso 1: Búsqueda exitosa
buscarProductoPorId(10, gestionarRespuesta);

// Caso 2: Búsqueda fallida
buscarProductoPorId(-5, gestionarRespuesta);