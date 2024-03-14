const fs = require('fs');
const crypto = require('crypto');
const axios = require('axios');

// Función para calcular el hash de un archivo o carpeta de manera recursiva
function calcularHash(archivoOCarpeta) {
    if (fs.existsSync(archivoOCarpeta)) {
        if (fs.statSync(archivoOCarpeta).isFile()) {
            // Si es un archivo, calcular el hash del contenido del archivo
            const contenido = fs.readFileSync(archivoOCarpeta);
            return crypto.createHash('sha256').update(contenido).digest('hex');
        } else if (fs.statSync(archivoOCarpeta).isDirectory()) {
            // Si es una carpeta, calcular el hash de todos los archivos dentro de la carpeta
            let hash = crypto.createHash('sha256');
            const archivos = fs.readdirSync(archivoOCarpeta);
            archivos.forEach(archivo => {
                const rutaArchivo = `${archivoOCarpeta}/${archivo}`;
                const contenidoArchivo = calcularHash(rutaArchivo);
                hash.update(contenidoArchivo);
            });
            return hash.digest('hex');
        }
    } else {
        console.error(`La ruta ${archivoOCarpeta} no existe.`);
        return null;
    }
}

// Nombre de la carpeta del proyecto a verificar
const carpetaProyecto = 'ProyectoKiosco_Smartecoschool';
// URL de la API en el servidor que devuelve el hash del proyecto
//const rutaServidor = 'https://tu-servidor.com/api/hash';
const rutaServidor = 'http://23.97.221.154:8080/api-kiosco/api/measurements';

// Función para comparar el hash local con el del servidor
async function compararHashConServidor() {
    const hashLocal = calcularHash(carpetaProyecto);

    try {
        // Realizar una solicitud al servidor para obtener el hash del proyecto
        const response = await axios.get(`${rutaServidor}?carpeta=${carpetaProyecto}`);
        const hashServidor = response.data.hash;

        // Comparar los hashes
        if (hashLocal === hashServidor) {
            console.log('Los hashes coinciden. El proyecto no ha sido modificado en el servidor.');
        } else {
            console.log('Los hashes son diferentes. El proyecto ha sido modificado en el servidor.');
        }
    } catch (error) {
        console.error('Error al obtener el hash del servidor:', error.message);
    }
}

// Llamar a la función para comparar los hashes
compararHashConServidor();

// Opcional: Ejecutar la verificación de modificaciones cada cierto tiempo (ej. cada 10 minutos)
const ejecutarVerificacionCadaTiempo = false; // Cambia a true para habilitar
if (ejecutarVerificacionCadaTiempo) {
    const intervaloTiempo = 10 * 60 * 1000; // 10 minutos en milisegundos
    setInterval(compararHashConServidor, intervaloTiempo);
}
