bower install crypto-js// En tu archivo JavaScript en la aplicación web
function verificarDatosModificados() {
    // Enviar una solicitud al servidor para verificar los datos modificados
    fetch('ruta_en_tu_servidor_para_procesar_solicitud')
        .then(response => response.json())
        .then(data => {
            // Recibir el código hash del servidor
            const codigoHashServidor = data.codigoHash;

            // Calcular el código hash localmente
            const codigoHashLocal = calcularCodigoHashLocal();

            // Comparar los códigos hash
            if (codigoHashServidor === codigoHashLocal) {
                console.log('Los datos no han sido modificados.');
            } else {
                console.log('Los datos han sido modificados.');
            }
        })
        .catch(error => {
            console.error('Error al verificar los datos modificados:', error);
        });
}

// Importa la biblioteca CryptoJS si estás trabajando en Node.js
const CryptoJS = require('crypto-js');

function calcularCodigoHashLocal(data) {
    // Lógica para calcular el código hash localmente
    // Usar la librería CryptoJS para calcular el hash
    // https://github.com/brix/crypto-js

    // Calcula el hash SHA-256
    const hash = CryptoJS.SHA256(data);

    // Retorna el hash como una cadena hexadecimal
    return hash.toString(CryptoJS.enc.Hex);
}

// Ejemplo de uso
const data = 'Datos a ser hasheados';
const hash = calcularCodigoHashLocal(data);
console.log('Hash SHA-256:', hash);


// Llamar a la función para verificar los datos modificados cuando sea necesario
verificarDatosModificados();
