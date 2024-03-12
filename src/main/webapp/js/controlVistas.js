const tiempoEsperaCambioVista = 60000;

const contenidoConsumoEnergyActual = document.querySelector("#contenidoConsumoEnergyActual");
const contenidoConsumoEnergyMensual = document.querySelector("#contenidoConsumoEnergyMensual");

const contenidoConsumoAguaActual = document.querySelector("#contenidoConsumoAguaActual");
const contenidoConsumoAguaMensual = document.querySelector("#contenidoConsumoAguaMensual");

const graficaSemanalEnergy = document.querySelector("#graficaSemanalEnergy");
const graficaMensualEnergy = document.querySelector("#graficaMensualEnergy");

const graficaSemanalAgua = document.querySelector("#graficaSemanalAgua");
const graficaMensualAgua = document.querySelector("#graficaMensualAgua");

//      Las gráficas tienen que inicializarse en un div existente y con el suficiente espacio.
//      Como serán dos gráficas ocupando el mismo espacio de div, se inicializa las mensuales
// a hidden para que no se vean. Al aplicar "aplicarAnimationCambioVisibilidad()", ya se
// ponen a visible por el resto del tiempo.
//      Como están en una posición absoluta (ver en css/controlVistas.css), podrán ocupar
// ambas gráficas el mismo espacio del div donde se encuentran.
//      div de graficaMensualEnergy → contenidoGraficaConsumoEnergy
//      div de graficaMensualAgua → contenidoGraficaConsumoAgua
graficaMensualEnergy.style.visibility = 'hidden';
graficaMensualAgua.style.visibility = 'hidden';

const aplicarAnimationCambioVisibilidad = (vistaActual, vistaNueva) => {
    vistaNueva.classList.remove('desaparecer')

    vistaActual.classList.remove('aparecer');
    vistaActual.classList.add('desaparecer');

    setTimeout(() => {
        if (vistaNueva.style.visibility === 'hidden')
            vistaNueva.style.visibility = 'visible';

        vistaActual.style.display = 'none';
        vistaNueva.style.display = 'flex';

        vistaActual.classList.remove('desaparecer');
        vistaNueva.classList.add('aparecer');
    }, 1900);
}

const cambiarVisibilidad = (vistaActual, vistaMensual) => {
    (vistaActual.style.display === 'none')
        ? aplicarAnimationCambioVisibilidad(vistaMensual, vistaActual)
        : aplicarAnimationCambioVisibilidad(vistaActual, vistaMensual);
}

setInterval(() => {

    cambiarVisibilidad(contenidoConsumoEnergyActual, contenidoConsumoEnergyMensual)
    cambiarVisibilidad(contenidoConsumoAguaActual, contenidoConsumoAguaMensual)

    cambiarVisibilidad(graficaSemanalEnergy, graficaMensualEnergy);
    cambiarVisibilidad(graficaSemanalAgua, graficaMensualAgua);
}, tiempoEsperaCambioVista);
