// Initialize the echarts instance based on the prepared dom
import {fetchWeeklyConsumption} from "../api-service.js";

// Inicializa la instancia de echarts en relación con el DOM preparado
const myChartSemanalAgua = echarts.init(document.getElementById('graficaSemanalEnergy'));
const myChartSemanalAguaActual = document.querySelector('#cantidadConsumoEnergyActual');

(async () => {
    try {
        // Obtiene los datos semanales de consumo
        const datosGraficaSemanalAgua = await fetchWeeklyConsumption(2, 3);

        datosGraficaSemanalAgua.forEach(dato => console.log(dato));

        // Actualiza el valor actual de consumo de agua
        myChartSemanalAguaActual.innerHTML = `${datosGraficaSemanalAgua[1][datosGraficaSemanalAgua[1].length - 1].lightConsumption} L`;

        // Función para formatear los datos de la semana
        let numeroDiaCompletoEnergy = (diaCompeto) => diaCompeto.slice(diaCompeto.indexOf(" ") + 1, diaCompeto.length);

        const fechaParaEnergy = datosGraficaSemanalAgua[0].map((item, index) => {
            const diaCompletoSemanaAnterior = item.dateName;
            const diaCompletoSemanaPasada = datosGraficaSemanalAgua[1][index].dateName;

            const diaSemana = diaCompletoSemanaAnterior.split(" ")[0];
            const numeroDiaCompletoSemanaAnterior = numeroDiaCompletoEnergy(diaCompletoSemanaAnterior);
            const numeroDiaCompletoSemanaPasada = numeroDiaCompletoEnergy(diaCompletoSemanaPasada);

            return `${numeroDiaCompletoSemanaAnterior} ${numeroDiaCompletoSemanaPasada}\n\n${diaSemana}`;
        });

        console.log("fechaParaEnergy", fechaParaEnergy);

        const datosSemanaActualEnergy = datosGraficaSemanalAgua[1].map(dato => dato.lightConsumption);
        const datosSemanaPasadaEnergy = datosGraficaSemanalAgua[0].map(dato => dato.lightConsumption);

        // Obtener las fechas de inicio y fin de la semana anterior
        const inicioSemanaAnterior = numeroDiaCompletoEnergy(datosGraficaSemanalAgua[0][0].dateName);
        const finSemanaAnterior = numeroDiaCompletoEnergy(datosGraficaSemanalAgua[0][datosGraficaSemanalAgua[0].length - 1].dateName);

        // Obtener las fechas de inicio y fin de la semana pasada
        const inicioSemanaPasada = numeroDiaCompletoEnergy(datosGraficaSemanalAgua[1][0].dateName);
        const finSemanaPasada = numeroDiaCompletoEnergy(datosGraficaSemanalAgua[1][datosGraficaSemanalAgua[1].length - 1].dateName);

        // Specify the configuration items and data for the chart
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
                '#FFCA7F',
                '#FFBB5C'
            ],

            grid: {
                top: '10%',
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
            yAxis: {},

            series: [
                {
                    name: `Semana anterior: ${inicioSemanaAnterior} - ${finSemanaAnterior}     `, // Etiqueta para la serie de la semana anterior
                    type: 'bar',
                    // data: [43.3, 83.1, 86.4, 72.4, 43.3, 72.4, 43.3], // Datos de la semana anterior
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
                    // data: [85.8, 73.4, 65.2, 53.9, 5, 53.9, 70], // Datos de la semana actual
                    data: datosSemanaActualEnergy, // Datos de la semana actual
                    label: { // Configuración de la etiqueta
                        show: true, // Mostrar etiqueta
                        position: 'inside', // Posición de la etiqueta
                        formatter: '{c}' // Formato de la etiqueta, "{c}" representa el valor del dato
                    }
                }
            ]
        };

// Display the chart using the configuration items and data just specified.
        myChartSemanalAgua.setOption(option);
    } catch (error) {
        console.error('Error:', error);
    }
})();