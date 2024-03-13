// Initialize the echarts instance based on the prepared dom
import {fetchWeeklyConsumption} from "../api-service.js";

/**
 * @typedef {Object} WeeklyConsumptionData
 * @property {string} dateName - Nombre de la fecha
 * @property {number} lightConsumption - Consumo de luz
 */

// Inicializa la instancia de echarts en relación con el DOM preparado
const myChartSemanalEnergy = echarts.init(document.getElementById('graficaSemanalEnergy'));

// Obtiene el elemento HTML para mostrar el valor actual de consumo de luz
const myChartSemanalEnergyActual = document.querySelector('#cantidadConsumoEnergyActual');

(async () => {
    try {
        // Obtiene los datos semanales de consumo desde la API
        const datosGraficaSemanalEnergy = await fetchWeeklyConsumption(2, 3);

        // Muestra los datos obtenidos desde la API en la consola
        datosGraficaSemanalEnergy.forEach(dato => console.log(dato));

        // Actualiza el valor actual de consumo de luz en el HTML
        myChartSemanalEnergyActual.innerHTML = `${datosGraficaSemanalEnergy[1][datosGraficaSemanalEnergy[1].length - 1].lightConsumption} L`;

        // Función para obtener el número del día completo
        let numeroDiaCompletoEnergy = (diaCompeto) => diaCompeto.slice(diaCompeto.indexOf(" ") + 1, diaCompeto.length);

        // Genera las etiquetas personalizadas del eje x
        const fechaParaEnergy = datosGraficaSemanalEnergy[0].map((item, index) => {
            const diaCompletoSemanaAnterior = item.dateName;
            const diaCompletoSemanaPasada = datosGraficaSemanalEnergy[1][index].dateName;

            const diaSemana = diaCompletoSemanaAnterior.split(" ")[0];
            const numeroDiaCompletoSemanaAnterior = numeroDiaCompletoEnergy(diaCompletoSemanaAnterior);
            const numeroDiaCompletoSemanaPasada = numeroDiaCompletoEnergy(diaCompletoSemanaPasada);

            return `${numeroDiaCompletoSemanaAnterior} ${numeroDiaCompletoSemanaPasada}\n\n${diaSemana}`;
        });

        // Muestra las fechas personalizadas para el eje x en la consola
        console.log("fechaParaEnergy", fechaParaEnergy);

        // Obtiene los datos de consumo de luz para la semana actual y la semana pasada
        const datosSemanaActualEnergy = datosGraficaSemanalEnergy[1].map(dato => dato.lightConsumption);
        const datosSemanaPasadaEnergy = datosGraficaSemanalEnergy[0].map(dato => dato.lightConsumption);

        // Obtener las fechas de inicio y fin de la semana anterior
        const inicioSemanaAnterior = numeroDiaCompletoEnergy(datosGraficaSemanalEnergy[0][0].dateName);
        const finSemanaAnterior = numeroDiaCompletoEnergy(datosGraficaSemanalEnergy[0][datosGraficaSemanalEnergy[0].length - 1].dateName);

        // Obtener las fechas de inicio y fin de la semana pasada
        const inicioSemanaPasada = numeroDiaCompletoEnergy(datosGraficaSemanalEnergy[1][0].dateName);
        const finSemanaPasada = numeroDiaCompletoEnergy(datosGraficaSemanalEnergy[1][datosGraficaSemanalEnergy[1].length - 1].dateName);

        // Especifica los elementos de configuración y los datos para el gráfico
        let option = {

            // Comentario explicativo sobre el rango de tiempo
            /*
                El rango de tiempo de "Semana anterior" abarca desde el primer día hasta el último día de la semana anterior a la actual.
                El rango de tiempo de "Semana pasada" abarca desde el primer día hasta el último día de la semana pasada con respecto a la actual.
            */
            legend: {
                data: [`Semana anterior: ${inicioSemanaAnterior} - ${finSemanaAnterior}     `, `Semana pasada: ${inicioSemanaPasada} - ${finSemanaPasada}`],
                top: '5%'
            },
            tooltip: {},
            dataset: {
                dimensions: ['week', 'Semana_anterior', 'Semana_actual'],
            },

            color: [
                '#FFCA7F', // Color para la serie de "Semana anterior"
                '#FFBB5C' // Color para la serie de "Semana pasada"
            ],

            grid: {
                top: '15%',
                left: '3%',
                right: '4%',
                bottom: '10%', // Aumenta el espacio en la parte inferior para hacer espacio para las etiquetas del eje x
                containLabel: true
            },

            xAxis: {
                type: 'category',
                axisTick: {show: false}, // Oculta las marcas del eje x para que solo se muestren las etiquetas
                data: fechaParaEnergy // Etiquetas personalizadas del eje x

            },
            yAxis: {
                // Configuración de las líneas horizontales (grid) en el eje x
                splitLine: {
                    show: true, // Muestra las líneas horizontales en el eje y
                    lineStyle: {
                        color: ['#d8e6f3'], // Color de las líneas horizontales
                    }
                }},

            series: [
                {
                    name: `Semana anterior: ${inicioSemanaAnterior} - ${finSemanaAnterior}     `, // Etiqueta para la serie de la semana anterior
                    type: 'bar',
                    data: datosSemanaPasadaEnergy, // Datos de la semana anterior
                    label: { // Configuración de la etiqueta
                        show: true, // Mostrar etiqueta
                        position: 'inside', // Posición de la etiqueta
                        formatter: '{c}' // Formato de la etiqueta, "{c}" representa el valor del dato
                    }
                },
                {
                    name: `Semana pasada: ${inicioSemanaPasada} - ${finSemanaPasada}`, // Etiqueta para la serie de la semana pasada
                    type: 'bar',
                    data: datosSemanaActualEnergy, // Datos de la semana actual
                    label: { // Configuración de la etiqueta
                        show: true, // Mostrar etiqueta
                        position: 'inside', // Posición de la etiqueta
                        formatter: '{c}' // Formato de la etiqueta, "{c}" representa el valor del dato
                    }
                }
            ]
        };

        // Muestra el gráfico utilizando la configuración y los datos especificados
        myChartSemanalEnergy.setOption(option);
    } catch (error) {
        // Muestra un mensaje de error en la consola en caso de fallo
        console.error('Error:', error);
    }
})();