const fs = require('fs');
const crypto = require('crypto');

// Función para calcular el hash de un archivo o una carpeta
function calcularHash(archivoOCarpeta) {
    if (fs.statSync(archivoOCarpeta).isFile()) {
        // Si es un archivo, calcular el hash del contenido del archivo
        const contenido = fs.readFileSync(archivoOCarpeta);
        return crypto.createHash('sha256').update(contenido).digest('hex');
    } else if (fs.statSync(archivoOCarpeta).isDirectory()) {
        // Si es una carpeta, calcular el hash de todos los archivos dentro de la carpeta
        const archivos = fs.readdirSync(archivoOCarpeta);
        const hash = crypto.createHash('sha256');
        archivos.forEach(archivo => {
            const contenidoArchivo = fs.readFileSync(`${archivoOCarpeta}/${archivo}`);
            hash.update(contenidoArchivo);
        });
        return hash.digest('hex');
    } else {
        // Si no es ni un archivo ni una carpeta válida, retornar null
        return null;
    }
}

// Función para verificar si la carpeta o el archivo han sido modificados
function verificarModificaciones() {
    // Rutas de los archivos HTML y la carpeta de archivos JavaScript
    const rutaHTML = 'src/main/webapp/version2.html';
    const rutaJS = 'src/main/webapp/js';

    // Calcula los hashes de los archivos o carpeta
    const hashHTML = calcularHash(rutaHTML);
    const hashJS = calcularHash(rutaJS);

    // Compara los hashes con los hashes anteriores almacenados o con un valor conocido
    // Si los hashes son diferentes, significa que los archivos han sido modificados
    if (hashHTML !== hashHTMLAnterior) {
        copiarArchivo(rutaHTML, 'src/main/webapp/version2.html');
        console.log('El archivo HTML ha sido modificado y reemplazado.');
    }

    if (hashJS !== hashJSAnterior) {
        copiarCarpeta(rutaJS, 'src/main/webapp/version2.html');
        console.log('La carpeta de archivos JavaScript ha sido modificada y reemplazada.');
    }
}

// Opcional: Ejecutar la verificación de modificaciones cada cierto tiempo (ej. cada 10 minutos)
const ejecutarVerificacionCadaTiempo = false; // Cambia a true para habilitar
if (ejecutarVerificacionCadaTiempo) {
    const intervaloTiempo = 10 * 60 * 1000; // 10 minutos en milisegundos
    setInterval(verificarModificaciones, intervaloTiempo);
}

// Llamar a la función para verificar modificaciones
verificarModificaciones();
