const fs = require('fs');
const crypto = require('crypto');
const { exec } = require('child_process');

// Función para calcular el hash de un archivo
function calcularHashArchivo(rutaArchivo) {
    const contenidoArchivo = fs.readFileSync(rutaArchivo);
    return crypto.createHash('sha256').update(contenidoArchivo).digest('hex');
}

// Ruta del archivo WAR local
const rutaArchivoLocal = 'target/web-1.0-SNAPSHOT.war';
// Host del servidor Tomcat
const hostTomcat = 'usuario@direccion_servidor'; // Cambia esto por tu dirección de servidor y usuario SSH

// Ejecutar comando SSH para obtener el hash del archivo en el servidor
exec(`ssh ${hostTomcat} "sha256sum /ruta/al/archivo/desplegado/en/tomcat/nombre_archivo.war"`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error al ejecutar comando SSH: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Error en salida de comando SSH: ${stderr}`);
        return;
    }

    // Hash del archivo desplegado en Tomcat obtenido a través de SSH
    const hashTomcat = stdout.trim().split(' ')[0];

    // Calcular el hash del archivo local
    const hashLocal = calcularHashArchivo(rutaArchivoLocal);

    // Comparar los hashes
    if (hashLocal !== hashTomcat) {
        console.log('Los hashes son diferentes. El archivo WAR ha sido modificado.');
        // Aquí puedes implementar la lógica para actualizar el archivo WAR en Tomcat si es necesario
    } else {
        console.log('Los hashes coinciden. No se han realizado cambios en el archivo WAR.');
    }
});
