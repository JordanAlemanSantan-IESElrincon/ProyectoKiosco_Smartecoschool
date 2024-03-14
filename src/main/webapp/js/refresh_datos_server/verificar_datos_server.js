const fs = require('fs');
const crypto = require('crypto');

function calcularHashDirectorio(rutaDirectorio) {
    let hash = crypto.createHash('sha256');
    const archivos = fs.readdirSync(rutaDirectorio);
    archivos.forEach(archivo => {
        const rutaArchivo = `${rutaDirectorio}/${archivo}`;
        const stats = fs.statSync(rutaArchivo);
        if (stats.isFile()) {
            const contenidoArchivo = fs.readFileSync(rutaArchivo);
            hash.update(contenidoArchivo);
        } else if (stats.isDirectory()) {
            const contenidoDirectorio = calcularHashDirectorio(rutaArchivo);
            hash.update(contenidoDirectorio);
        }
    });
    return hash.digest('hex');
}

// Ruta del directorio desplegado en Tomcat
const rutaProyectoTomcat = 'http://23.97.221.154:8080/manager/html';
// Hash previo almacenado
let hashPrevio = 'hash_previo'; // Cambia esto por el hash previo almacenado

const hashActual = calcularHashDirectorio(rutaProyectoTomcat);
console.log('Hash actual del proyecto desplegado en Tomcat:', hashActual);

// Comparar los hashes
if (hashActual !== hashPrevio) {
    console.log('Los hashes son diferentes. Los archivos han sido modificados.');

    // Recorre los archivos del directorio local y copia los archivos a la ubicación en Tomcat
    const archivosLocal = fs.readdirSync('/ruta/al/directorio/local');
    archivosLocal.forEach(archivo => {
        const rutaArchivoLocal = `/ruta/al/directorio/local/${archivo}`;
        const rutaArchivoTomcat = `${rutaProyectoTomcat}/${archivo}`;
        fs.copyFileSync(rutaArchivoLocal, rutaArchivoTomcat);
    });
    console.log('Los archivos han sido actualizados en Tomcat.');

    // Guardar el hash actual como hash previo para la próxima vez
    // En este ejemplo, simplemente sobrescribimos el valor de la variable hashPrevio
    hashPrevio = hashActual;
} else {
    console.log('Los hashes coinciden. No se han realizado cambios en los archivos.');
}

// Aquí podrías guardar hashPrevio en una base de datos o en un archivo de configuración para usarlo la próxima vez.
