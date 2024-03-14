// Tiempo de espera para el cambio automático de vistas en milisegundos
const tiempoEsperaCambioVista = 4000;

// Selección de elementos HTML por sus ID para manipulación posterior
const contenidoConsumoEnergyActual = document.querySelector("#contenidoConsumoEnergyActual");
const contenidoConsumoEnergyMensual = document.querySelector("#contenidoConsumoEnergyMensual");
const contenidoRetoEnergy = document.querySelector("#contenidoRetoEnergy");

const contenidoConsumoAguaActual = document.querySelector("#contenidoConsumoAguaActual");
const contenidoConsumoAguaMensual = document.querySelector("#contenidoConsumoAguaMensual");
const contenidoRetoAgua = document.querySelector("#contenidoRetoAgua");

const graficaSemanalEnergy = document.querySelector("#graficaSemanalEnergy");
const graficaMensualEnergy = document.querySelector("#graficaMensualEnergy");
const graficarRetoEnergy = document.querySelector("#graficarRetoEnergy");

const graficaSemanalAgua = document.querySelector("#graficaSemanalAgua");
const graficaMensualAgua = document.querySelector("#graficaMensualAgua");
const graficarRetoAgua = document.querySelector("#graficarRetoAgua");

const contenidoTodasLasVistas = [
    [
        contenidoConsumoEnergyActual,
        contenidoConsumoAguaActual,
        graficaSemanalEnergy,
        graficaSemanalAgua
    ],
    [
        contenidoConsumoEnergyMensual,
        contenidoConsumoAguaMensual,
        graficaMensualEnergy,
        graficaMensualAgua
    ],
    [
        contenidoRetoEnergy,
        contenidoRetoAgua,
        graficarRetoEnergy,
        graficarRetoAgua
    ]
]

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

graficarRetoEnergy.style.visibility = 'hidden';
graficarRetoAgua.style.visibility = 'hidden';

// Aplica animación para cambiar la visibilidad de las vistas entre actual y mensual.
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

// Cambia la visibilidad entre actual y mensual según su estado actual.
// const cambiarVisibilidad = (vistaActual, vistaMensual) => {
//     (vistaActual.style.display === 'none')
//         ? aplicarAnimationCambioVisibilidad(vistaMensual, vistaActual)
//         : aplicarAnimationCambioVisibilidad(vistaActual, vistaMensual);
// };

let recorrerContenidos = 0;

// Cambia la visibilidad total alternando entre vistas de consumo de energía y agua.
// const cambiasVisibilidadTotal = () => {
//     aplicarAnimationCambioVisibilidad(contenidoConsumoEnergyActual, contenidoConsumoEnergyMensual)
//     aplicarAnimationCambioVisibilidad(contenidoConsumoAguaActual, contenidoConsumoAguaMensual)
//
//     aplicarAnimationCambioVisibilidad(graficaSemanalEnergy, graficaMensualEnergy);
//     aplicarAnimationCambioVisibilidad(graficaSemanalAgua, graficaMensualAgua);
// };

const cambiasVisibilidadTotal = () => {
    aplicarAnimationCambioVisibilidad(contenidoTodasLasVistas[recorrerContenidos][0], contenidoTodasLasVistas[(recorrerContenidos + 1) % 3][0])
    aplicarAnimationCambioVisibilidad(contenidoTodasLasVistas[recorrerContenidos][1], contenidoTodasLasVistas[(recorrerContenidos + 1) % 3][1])

    aplicarAnimationCambioVisibilidad(contenidoTodasLasVistas[recorrerContenidos][2], contenidoTodasLasVistas[(recorrerContenidos + 1) % 3][2]);
    aplicarAnimationCambioVisibilidad(contenidoTodasLasVistas[recorrerContenidos][3], contenidoTodasLasVistas[(recorrerContenidos + 1) % 3][3]);

    recorrerContenidos = (recorrerContenidos + 1) % 3;
    console.log("recorrerContenidos", recorrerContenidos);
};


// Establece la ejecución de la función cada cierto tiempo definido por 'tiempoEsperaCambioVista'.
setInterval(() => cambiasVisibilidadTotal(), tiempoEsperaCambioVista);
