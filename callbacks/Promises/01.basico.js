var miPromesa = new Promise(
    //Recibe un único argumento: 
    // Función ejecutora(executor fuction)
    function(resolve, reject){
        //Cuerpo de la función ejecutora
        var operacionExitosa = false;
        if(operacionExitosa){
            //Cambia el estado 'pending' a 'fulfilled' 
            // y entrega el valos
            resolve('Los datos se procesaron correctamente')
        } else {
            //Cambia el estado 'pending' a 'rejected' 
            // y entrega el motivo del fallo
            reject('Ocurrio el fallo al procesar los datos')

        }
    }
)

// then():Registrar una función que se ejecutará cuando 
// la promesa pase al estado fulfilled (cumplida)

// catch():Registrar una función que maneja rechazos y errores 
// que se ejecutara cuando la promesa pase al estado rejected (rechazada)

miPromesa
.then( function(mensajeRecibido){
        console.log('Resultado capturado en then();' + mensajeRecibido);
    })
    .catch(function(motivoError){
        console.log('Error capturado en catch();' + motivoError);
    });