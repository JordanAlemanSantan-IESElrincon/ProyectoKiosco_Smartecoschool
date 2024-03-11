const tiempoEsperaCambioVista = 10000;

const contenidoConsumoEnergyActual = document.querySelector("#contenidoConsumoEnergyActual");
const contenidoConsumoEnergyMensual = document.querySelector("#contenidoConsumoEnergyMensual");

const contenidoConsumoAguaActual = document.querySelector("#contenidoConsumoAguaActual");
const contenidoConsumoAguaMensual = document.querySelector("#contenidoConsumoAguaMensual");

const graficaSemanalEnergy = document.querySelector("#graficaSemanalEnergy");
const graficaMensualEnergy = document.querySelector("#graficaMensualEnergy");

const graficaSemanalAgua = document.querySelector("#graficaSemanalAgua");
const graficaMensualAgua = document.querySelector("#graficaMensualAgua");

graficaMensualEnergy.style.visibility = 'hidden';
graficaMensualAgua.style.visibility = 'hidden';

const aplicarAnimationCambioVisibilidad = (vistaActual, vistaNueva) => {
    if (vistaNueva.style.visibility === 'hidden')
        vistaNueva.style.visibility = 'visible';

    vistaNueva.classList.remove('desaparecer')

    vistaActual.classList.remove('aparecer');
    vistaActual.classList.add('desaparecer');

    setTimeout(() => {
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
