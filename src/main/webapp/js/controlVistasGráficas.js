const vistaGeneral = document.querySelector("#vistaGeneral");
const vistaMensual = document.querySelector("#vistaMensual");

const tituloPrincipalVistaGeneral = document.querySelector("#tituloPrincipalVistaGeneral");
const tituloPrincipalVistaMensual = document.querySelector("#tituloPrincipalVistaMensual");

tituloPrincipalVistaGeneral.innerHTML = `Vista general`;
tituloPrincipalVistaMensual.innerHTML = `Vista mensual`;

function cambiarVisibilidad() {
    if (vistaGeneral.style.display === 'none') {
        vistaMensual.classList.remove('aparecer');
        vistaGeneral.classList.remove('desaparecer')

        vistaMensual.classList.add('desaparecer');

        setTimeout(() => {
            vistaMensual.style.display = 'none';
            vistaGeneral.style.display = 'inherit';
            vistaGeneral.classList.add('aparecer');
        }, 1900);  // Duración de la animación en milisegundos (1.9 segundo en este caso)

    } else {
        vistaGeneral.classList.remove('aparecer');
        vistaMensual.classList.remove('desaparecer')

        vistaGeneral.classList.add('desaparecer');

        setTimeout(() => {
            vistaGeneral.style.display = 'none';
            vistaMensual.style.display = 'inherit';
            vistaMensual.classList.add('aparecer');
        }, 1900);  // Duración de la animación en milisegundos (1.9 segundo en este caso)
    }
}

// Llamada inicial
cambiarVisibilidad();

// Configurar el cambio cada 8 segundos
setInterval(cambiarVisibilidad, 8000);  // 8,000 milisegundos = 8 segundos

