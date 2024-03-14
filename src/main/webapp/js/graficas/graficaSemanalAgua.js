// Initialize the echarts instance based on the prepared dom
import {fetchWeeklyConsumption} from "../api-service.js";

/**
 * @typedef {Object} WeeklyConsumptionData
 * @property {string} dateName - Nombre de la fecha
 * @property {number} waterConsumption - Consumo de agua
 */

// Inicializa la instancia de echarts en relación con el DOM preparado
const myChartSemanalAgua = echarts.init(document.getElementById('graficaSemanalAgua'));

// Obtiene el elemento HTML para mostrar el valor actual de consumo de agua
const myChartSemanalAguaActual = document.querySelector('#cantidadConsumoAguaActual');

const implementarGraficaSemanalAgua = async () => {
    try {
        // Obtiene los datos semanales de consumo desde la API
        const datosGraficaSemanalAgua = await fetchWeeklyConsumption(1, 2);

        // Muestra los datos obtenidos desde la API en la consola
        datosGraficaSemanalAgua.forEach(dato => console.log(dato));

        // Actualiza el valor actual de consumo de agua en el HTML
        myChartSemanalAguaActual.innerHTML = `${datosGraficaSemanalAgua[1][datosGraficaSemanalAgua[1].length - 1].waterConsumption} L`;

        // Función para obtener el número del día completo
        let numeroDiaCompletoAgua = (diaCompeto) => diaCompeto.slice(diaCompeto.indexOf(" ") + 1, diaCompeto.length);

        // Genera las etiquetas personalizadas del eje x
        const fechaParaEnergy = datosGraficaSemanalAgua[0].map((item) => {
            const diaCompletoSemanaAnterior = item.dateName;
            // const diaCompletoSemanaPasada = datosGraficaSemanalAgua[1][index].dateName;

            const diaSemana = diaCompletoSemanaAnterior.split(" ")[0];
            // const diaSemana = diaCompletoSemanaAnterior.slice(0, 3);
            // const numeroDiaCompletoSemanaAnterior = numeroDiaCompletoAgua(diaCompletoSemanaAnterior);
            // const numeroDiaCompletoSemanaPasada = numeroDiaCompletoAgua(diaCompletoSemanaPasada);

            // return `${numeroDiaCompletoSemanaAnterior} ${numeroDiaCompletoSemanaPasada}\n\n${diaSemana}`;
            return `${diaSemana}`;
        });

        // Muestra las fechas personalizadas para el eje x en la consola
        console.log("fechaParaEnergy", fechaParaEnergy);

        // Obtiene los datos de consumo de agua para la semana actual y la semana pasada
        const datosSemanaActualAgua = datosGraficaSemanalAgua[1].map(dato => dato.waterConsumption);
        const datosSemanaPasadaAgua = datosGraficaSemanalAgua[0].map(dato => dato.waterConsumption);

        // Obtener las fechas de inicio y fin de la semana anterior
        const inicioSemanaAnterior = numeroDiaCompletoAgua(datosGraficaSemanalAgua[0][0].dateName);
        const finSemanaAnterior = numeroDiaCompletoAgua(datosGraficaSemanalAgua[0][datosGraficaSemanalAgua[0].length - 1].dateName);

        // Obtener las fechas de inicio y fin de la semana pasada
        const inicioSemanaPasada = numeroDiaCompletoAgua(datosGraficaSemanalAgua[1][0].dateName);
        const finSemanaPasada = numeroDiaCompletoAgua(datosGraficaSemanalAgua[1][datosGraficaSemanalAgua[1].length - 1].dateName);

        // Especifica los elementos de configuración y los datos para el gráfico
        let option = {

            // Comentario explicativo sobre el rango de tiempo
            /*
                El rango de tiempo de "Semana anterior" abarca desde el primer día hasta el último día de la semana anterior a la actual.
                El rango de tiempo de "Semana pasada" abarca desde el primer día hasta el último día de la semana pasada con respecto a la actual.
            */
            legend: {
                data: [`Semana: ${inicioSemanaAnterior} - ${finSemanaAnterior}     `, `Semana: ${inicioSemanaPasada} - ${finSemanaPasada}`],
                top: '5%',
                textStyle: {
                    fontSize: 20, // Tamaño de la fuente para la leyenda
                }
            },
            tooltip: {},
            dataset: {
                dimensions: ['week', 'Semana_anterior', 'Semana_actual'],
            },

            color: [
                '#8C88EE', // Color para la serie de "Semana anterior"
                '#6964DC' // Color para la serie de "Semana pasada"
            ],

            grid: {
                top: '15%',
                left: '3%',
                right: '4%',
                bottom: '5%', // Aumenta el espacio en la parte inferior para hacer espacio para las etiquetas del eje x
                containLabel: true
            },

            xAxis: {
                type: 'category',
                axisTick: {show: false}, // Oculta las marcas del eje x para que solo se muestren las etiquetas
                data: fechaParaEnergy, // Etiquetas personalizadas del eje x
                axisLabel: {
                    fontSize: 16, // Tamaño de la fuente para los nombres de los meses
                    fontWeight: 'bold' // Pone el texto del eje x en negrita
                }
            },
            yAxis: {
                // Configuración de las líneas horizontales (grid) en el eje x
                splitLine: {
                    show: true, // Muestra las líneas horizontales en el eje y
                    lineStyle: {
                        color: ['#f9f9df'], // Color de las líneas horizontales
                    }
                }},

            series: [
                {
                    name: `Semana: ${inicioSemanaAnterior} - ${finSemanaAnterior}     `, // Etiqueta para la serie de la semana anterior
                    type: 'bar',
                    data: datosSemanaPasadaAgua, // Datos de la semana anterior
                    label: { // Configuración de la etiqueta
                        show: true, // Mostrar etiqueta
                        position: 'inside', // Posición de la etiqueta
                        formatter: '{c}' // Formato de la etiqueta, "{c}" representa el valor del dato
                    }
                },
                {
                    name: `Semana: ${inicioSemanaPasada} - ${finSemanaPasada}`, // Etiqueta para la serie de la semana pasada
                    type: 'bar',
                    data: datosSemanaActualAgua, // Datos de la semana actual
                    label: { // Configuración de la etiqueta
                        show: true, // Mostrar etiqueta
                        position: 'inside', // Posición de la etiqueta
                        formatter: '{c}' // Formato de la etiqueta, "{c}" representa el valor del dato
                    }
                }
            ]
        };

        // Muestra el gráfico utilizando la configuración y los datos especificados
        myChartSemanalAgua.setOption(option);
    } catch (error) {
        // Muestra un mensaje de error en la consola en caso de fallo
        console.error('Error:', error);
    }
};

import {tiempoEsperaParaVolverASolicitarDatos} from "../api-service.js";
await  implementarGraficaSemanalAgua();
setInterval(async () => await implementarGraficaSemanalAgua(), tiempoEsperaParaVolverASolicitarDatos);