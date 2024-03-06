const vistaGeneral = document.querySelector("#vistaGeneral");
const vistaMensual = document.querySelector("#vistaMensual");

const tituloPrincipalVistaGeneral = document.querySelector("#tituloPrincipalVistaGeneral");
const tituloPrincipalVistaMensual = document.querySelector("#tituloPrincipalVistaMensual");

tituloPrincipalVistaGeneral.innerHTML = `Vista general`;
tituloPrincipalVistaMensual.innerHTML = `Vista mensual`;


function cambiarVisibilidad() {
    if (vistaGeneral.style.display === 'none') {
        vistaGeneral.style.display = 'inherit';
        vistaMensual.style.display = 'none';
    } else {
        vistaGeneral.style.display = 'none';
        vistaMensual.style.display = 'inherit';
    }
}

// Llamada inicial
cambiarVisibilidad();

// Configurar el cambio cada 10 segundos
setInterval(cambiarVisibilidad, 10000);  // 10,000 milisegundos = 10 segundos
