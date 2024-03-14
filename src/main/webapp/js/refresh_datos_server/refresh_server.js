// Función para comprobar si hay cambios en el servidor
function verificarCambios() {
    // Realizar una solicitud AJAX al servidor para obtener la fecha de la última modificación
    var xhr = new XMLHttpRequest();
    xhr.open('GET', window.location.href, true);
    xhr.setRequestHeader('If-Modified-Since', document.lastModified);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Si el servidor devuelve 200 (OK), comparamos las fechas de última modificación.
                var ultimaModificacionServidor = new Date(xhr.getResponseHeader('Last-Modified'));
                var ultimaModificacionLocal = new Date(document.lastModified);

                // Si la fecha del servidor es más reciente que la fecha local, recargamos la página
                if (ultimaModificacionServidor > ultimaModificacionLocal) {
                    location.reload(true); // Recargar la página forzando la carga desde el servidor
                }
            }
        }
    };

    xhr.send();
}

// Verificar cambios cada cierto intervalo de tiempo (por ejemplo, cada 5 segundos)
setInterval(verificarCambios, 5000);