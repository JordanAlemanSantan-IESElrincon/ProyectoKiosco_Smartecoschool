// // Tiempo de espera para el cambio automático de vistas en milisegundos
// const tiempoEsperaCambioVista = 6000;
//
// // Selección de elementos HTML por sus ID para manipulación posterior
// const bodyReto = document.querySelector("#body");
// const contenidoConsumoEnergyActual = document.querySelector("#contenidoConsumoEnergyActual");
// const contenidoConsumoEnergyMensual = document.querySelector("#contenidoConsumoEnergyMensual");
// const contenidoRetoEnergy = document.querySelector("#contenidoRetoEnergy");
//
// const contenidoConsumoAguaActual = document.querySelector("#contenidoConsumoAguaActual");
// const contenidoConsumoAguaMensual = document.querySelector("#contenidoConsumoAguaMensual");
// const contenidoRetoAgua = document.querySelector("#contenidoRetoAgua");
//
// const graficaSemanalEnergy = document.querySelector("#graficaSemanalEnergy");
// const graficaMensualEnergy = document.querySelector("#graficaMensualEnergy");
// const graficaRetoEnergy = document.querySelector("#graficaRetoEnergy");
//
// const graficaSemanalAgua = document.querySelector("#graficaSemanalAgua");
// const graficaMensualAgua = document.querySelector("#graficaMensualAgua");
// const graficaRetoAgua = document.querySelector("#graficaRetoAgua");
//
// const momentoReto = document.querySelector("#momentoReto");
//
// const contenidoTodasLasVistas = [
//     [
//         contenidoConsumoEnergyActual,
//         contenidoConsumoAguaActual,
//         graficaSemanalEnergy,
//         graficaSemanalAgua
//     ],
//     [
//         contenidoConsumoEnergyMensual,
//         contenidoConsumoAguaMensual,
//         graficaMensualEnergy,
//         graficaMensualAgua
//     ],
//     [
//         contenidoRetoEnergy,
//         contenidoRetoAgua,
//         graficaRetoEnergy,
//         graficaRetoAgua,
//     ]
// ]
//
// //      Las gráficas tienen que inicializarse en un div existente y con el suficiente espacio.
// //      Como serán dos gráficas ocupando el mismo espacio de div, se inicializa las mensuales
// // a hidden para que no se vean. Al aplicar "aplicarAnimationCambioVisibilidad()", ya se
// // ponen a visible por el resto del tiempo.
// //      Como están en una posición absoluta (ver en css/controlVistas.css), podrán ocupar
// // ambas gráficas el mismo espacio del div donde se encuentran.
// graficaMensualEnergy.style.visibility = 'hidden';
// graficaMensualAgua.style.visibility = 'hidden';
//
// graficaRetoEnergy.style.visibility = 'hidden';
// graficaRetoAgua.style.visibility = 'hidden';
//
// // Aplica animación para cambiar la visibilidad de las vistas entre actual y mensual.
// const aplicarAnimationCambioVisibilidad = (vistaActual, vistaNueva) => {
//
//     vistaNueva.classList.remove('desaparecer')
//
//     vistaActual.classList.remove('aparecer');
//     vistaActual.classList.add('desaparecer');
//
//     setTimeout(() => {
//         if (vistaNueva.style.visibility === 'hidden')
//             vistaNueva.style.visibility = 'visible';
//
//         vistaActual.style.display = 'none';
//         vistaNueva.style.display = 'flex';
//
//         vistaActual.classList.remove('desaparecer');
//         vistaNueva.classList.add('aparecer');
//     }, 1900);
// }
//
// let recorrerContenidos = 0;
//
// const cambiasVisibilidadTotal = () => {
//     const tamTotalContenidoTodasLasVistas = contenidoTodasLasVistas.length;
//
//     if (recorrerContenidos === 1) {
//         // Si momentoReto es totalmente transparente
//         if (momentoReto.style.opacity.valueOf() == 0) {
//             // Quitar clase con animacion de desaparicion
//             momentoReto.classList.remove("desaparecer");
//             // Añadir clase con animacion de aparicion
//             momentoReto.classList.add("aparecer");
//
//             // Asignar timeout
//             setTimeout(() => {
//                 momentoReto.style.opacity = 1;
//                 //bodyReto.classList.remove("bodyGeneral");
//                 //bodyReto.classList.add("bodyReto");
//             }, 2000);
//
//             // En caso de que momentoReto sea totalmente opaco
//         } else if (momentoReto.style.opacity.valueOf() == 1){
//             momentoReto.classList.remove("aparecer");
//             momentoReto.classList.add("desaparecer");
//
//             setTimeout(() => {
//                 momentoReto.style.opacity = 0;
//                 // bodyReto.classList.remove("bodyReto");
//                 // bodyReto.classList.add("bodyGeneral");
//             }, 2000);
//         }
//
//
//     }
//
//     // for (let i = 0; i < contenidoTodasLasVistas[0].length; i++)
//     //     aplicarAnimationCambioVisibilidad(contenidoTodasLasVistas[recorrerContenidos][i], contenidoTodasLasVistas[(recorrerContenidos + 1) % tamTotalContenidoTodasLasVistas][i]);
//
//     recorrerContenidos = (recorrerContenidos + 1) % tamTotalContenidoTodasLasVistas;
// };
//
// // Establece la ejecución de la función cada cierto tiempo definido por 'tiempoEsperaCambioVista'.
// setInterval(() => cambiasVisibilidadTotal(), tiempoEsperaCambioVista);
// momentoReto.style.opacity = 0