const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/html");

const myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("http://23.97.221.154:8080/kiosk/", myInit);

// Obtener el HTML del proyecto local
//Incluir la direccion del localhost configurada en el proyecto
fetch('http://localhost:8001/web')
  .then(response => response.text())
  .then(localHTML => {
    // Realizar la solicitud para obtener el HTML del servidor
    fetch(myRequest)
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Error al obtener el HTML del servidor');
        }
      })
      .then(serverHTML => {
        // Comparar el HTML del servidor con el HTML local
        if (localHTML !== serverHTML) {
          // Si los HTML son diferentes, realizar una solicitud para modificar el HTML del servidor
          const modifiedRequest = new Request("http://23.97.221.154:8080/kiosk/", {
            method: 'POST',
            body: localHTML,
            headers: new Headers({
              'Content-Type': 'text/html'
            }),
            mode: "cors",
            cache: "default",
          });

          fetch(modifiedRequest)
            .then(response => {
              if (response.ok) {
                console.log('El HTML del servidor ha sido modificado con éxito.');
              } else {
                throw new Error('Error al modificar el HTML del servidor');
              }
            })
            .catch(error => {
              console.error('Se produjo un error al modificar el HTML del servidor:', error);
            });
        } else {
          console.log('El HTML del servidor ya está actualizado.');
        }
      })
      .catch(error => {
        console.error('Se produjo un error al obtener el HTML del servidor:', error);
      });
  })
  .catch(error => {
    console.error('Se produjo un error al obtener el HTML del proyecto local:', error);
  });
