// const vistaGeneral = document.querySelector("#contenidoVistaGeneral");
// const vistaMensual = document.querySelector("#vistaMensual");
//
// const tituloPrincipalVista = document.querySelector("#textoTituloPrincipalVista");
//
//
// tituloPrincipalVista.innerHTML = `Vista general`;
//
// const aplicarAnimationCambioVisibilidad = (vistaActual, vistaNueva, textoTituloVista) => {
//     vistaNueva.classList.remove('desaparecer')
//
//     vistaActual.classList.remove('aparecer');
//     vistaActual.classList.add('desaparecer');
//
//     tituloPrincipalVista.classList.add('desaparecer');
//
//     setTimeout(() => {
//         vistaActual.style.display = 'none';
//         vistaNueva.style.display = 'inherit';
//         tituloPrincipalVista.innerHTML = textoTituloVista;
//
//         vistaNueva.classList.add('aparecer');
//         tituloPrincipalVista.classList.remove(('desaparecer'))
//         tituloPrincipalVista.classList.add('aparecer');
//     }, 1900);  // Duración de la animación en milisegundos (1.9 segundo en este caso)
//
//     tituloPrincipalVista.classList.remove(('aparecer'))
// }
//
// function cambiarVisibilidad() {
//     (vistaGeneral.style.display === 'none')
//         ? aplicarAnimationCambioVisibilidad(vistaMensual, vistaGeneral, 'Vista general')
//         : aplicarAnimationCambioVisibilidad(vistaGeneral, vistaMensual, 'Vista mensual');
// }
//
// setInterval(cambiarVisibilidad, 8000);  // 8,000 milisegundos = 8 segundos

// const contenidoConsumoEnergyActual = document.querySelector("#contenidoConsumoEnergyActual");
// const contenidoConsumoAguaActual = document.querySelector("#contenidoConsumoAguaActual");
//
// const contenidoConsumoEnergyMensual = document.querySelector("#contenidoConsumoEnergyMensual");
// const contenidoConsumoAguaMensual = document.querySelector("#contenidoConsumoAguaMensual");
//
// const graficaSemanalEnergy = document.querySelector("#graficaSemanalEnergy");
// const graficaSemanalAgua = document.querySelector("#graficaSemanalAgua");
//
// const graficaMensualEnergy = document.querySelector("#graficaMensualEnergy");
// const graficaMensualAgua = document.querySelector("#graficaMensualAgua");
//
// const contenidoActual = [contenidoConsumoEnergyActual, contenidoConsumoAguaActual, graficaSemanalEnergy, graficaSemanalAgua];
// const contenidoMensual = [contenidoConsumoEnergyMensual, contenidoConsumoAguaMensual, graficaMensualEnergy, graficaMensualAgua];

// const obtenerElementos = (seleccionador) => document.querySelector(seleccionador);
//
// const contenidoActual = [
//     ...obtenerElementos("#contenidoConsumoEnergyActual").querySelectorAll('h3, span'),
//     ...obtenerElementos("#contenidoConsumoAguaActual").querySelectorAll('h3, span')
//     // obtenerElementos("#graficaSemanalEnergy"),
//     // obtenerElementos("#graficaSemanalAgua")
// ];
//
// console.log(contenidoActual);
//
// const contenidoMensual = [
//     ...obtenerElementos("#contenidoConsumoEnergyMensual").querySelectorAll('h3, span'),
//     ...obtenerElementos("#contenidoConsumoAguaMensual").querySelectorAll('h3, span')
//     // obtenerElementos("#graficaMensualEnergy"),
//     // obtenerElementos("#graficaMensualAgua")
// ];
//
// const aplicarAnimationCambioVisibilidad = (vistaActual, vistaNueva) => {
//     vistaActual.forEach((contenidoVista) => {contenidoVista.classList.add('desaparecer')});
//
//     setTimeout(() => {
//         vistaActual.forEach((contenidoVista) => contenidoVista.style.display = 'none');
//         vistaNueva.forEach((contenidoVista) => contenidoVista.style.display = 'inherit');
//
//         vistaNueva.forEach((contenidoVista) => {contenidoVista.classList.add('aparecer')});
//     }, 1900);  // Duración de la animación en milisegundos (1.9 segundo en este caso)
//
//     vistaActual.forEach((contenidoVista) => {contenidoVista.classList.remove('aparecer')});
//     vistaNueva.forEach((contenidoVista) => {contenidoVista.classList.remove('desaparecer')});
// }
//
// const cambiarVisibilidad = () => {
//     (document.querySelector("#contenidoConsumoEnergyMensual").style.display === 'none')
//         ? aplicarAnimationCambioVisibilidad(contenidoMensual, contenidoActual)
//         : aplicarAnimationCambioVisibilidad(contenidoActual, contenidoMensual);
// }
//
// setInterval(cambiarVisibilidad, 8000);  // 8,000 milisegundos = 8 segundos

//
// const contenidoConsumoEnergy = document.querySelector("#contenidoConsumoEnergy");
// const contenidoConsumoAgua = document.querySelector("#contenidoConsumoAgua");
//
// let vistaContenidoConsumoEnergyActual =
//     `
//         <h3>Consumo diario actual</h3>
//         <span id="cantidadConsumoEnergyActual">5000 kWh</span>
//     `;
//
// let vistaContenidoConsumoAguaActual =
//     `
//         <h3>Consumo diario actual</h3>
//         <span id="cantidadConsumoAguaActual">3.375 L</span>
//     `;
//
// let vistaContenidoConsumoEnergyMensual =
//     `
//         <h3>Consumo mensual actual</h3>
//         <span id="cantidadConsumoEnergyActual">15000 kWh</span>
//     `;
//
// let vistaContenidoConsumoAguaMensual =
//     `
//         <h3>Consumo mensual actual</h3>
//         <span id="cantidadConsumoAguaActual">33.375 L</span>
//     `;
//
// contenidoConsumoEnergy.innerHTML = vistaContenidoConsumoEnergyActual;
// contenidoConsumoAgua.innerHTML = vistaContenidoConsumoAguaActual;
//
// const aplicarAnimationCambioVisibilidad = (vista, nuevaVistaContenido) => {
//     let vistaElementosInternos = vista.querySelectorAll('h3, span');
//
//     vistaElementosInternos.forEach((elemento) => elemento.classList.add('desaparecer'));
//     console.log(vistaElementosInternos)
//
//     setTimeout(() => {
//         vista.innerHTML = nuevaVistaContenido;
//         vistaElementosInternos.forEach((elemento) => elemento.classList.add('aparecer'));
//         console.log(vistaElementosInternos)
//
//     }, 5900);
//
//     vistaElementosInternos.forEach((elemento) => elemento.classList.remove('aparecer'));
//     vistaElementosInternos.forEach((elemento) => elemento.classList.remove('desaparecer'));
// }
//
// setTimeout(() => {
//     aplicarAnimationCambioVisibilidad(contenidoConsumoEnergy, vistaContenidoConsumoEnergyMensual);
//     aplicarAnimationCambioVisibilidad(contenidoConsumoAgua, vistaContenidoConsumoAguaMensual);
// }, 8000);


