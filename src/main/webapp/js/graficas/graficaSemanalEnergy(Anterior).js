// Initialize the echarts instance based on the prepared dom
import {fetchWeeklyConsumption} from "../api-service.js";

const myChartSemanalEnergy = echarts.init(document.getElementById('graficaSemanalEnergy'));
const myChartSemanalEnergyActual = document.querySelector('#cantidadConsumoEnergyActual');

(async () => {
    try {
        const datosGraficaSemanalEnergy = await fetchWeeklyConsumption(2, 3);

        myChartSemanalEnergyActual.innerHTML =
            `${datosGraficaSemanalEnergy[1][datosGraficaSemanalEnergy[1].length - 1].lightConsumption} kWh`;

        // Filtrar el primer array de datos
        const datosSemanaActualEnergy = datosGraficaSemanalEnergy[1].map(dato => dato.lightConsumption);
        console.log("Datos semana actual", datosSemanaActualEnergy);
        // Filtrar el primer array de datos
        const fechaSemanaActualEnergy = datosGraficaSemanalEnergy[1].map(dato => dato.dateName);
        console.log("fechaSemanaActualEnergy" + fechaSemanaActualEnergy)
        // Inicializamos las nuevas matrices
        let diasSemana = [];

        let diaMesActual = [];

// Iteramos sobre cada cadena en cadenaArray
        fechaSemanaActualEnergy.forEach(cadena => {
            // Dividimos la cadena en partes usando split(" ")
            let partes = cadena.split(" ");

            // Agregamos la primera parte a la matriz primeraCadenaArray
            diasSemana.push(partes[0]);

            // Si hay al menos dos partes, agregamos las dos siguientes partes a la matriz siguientesDosCadenasArray
            if (partes.length >= 3) {
                diaMesActual.push(partes.slice(1, 3).join(" "));
            }
        });
        // Filtrar el segundo array de datos (ignorar el de la posición 0)
        const fechaSemanaPasadaEnergy = datosGraficaSemanalEnergy[0].map(dato => dato.dateName);
        // Inicializamos las nuevas matrices
        const diaMesPasado = [];

        // Iteramos sobre cada cadena en cadenaArray
        fechaSemanaPasadaEnergy.forEach(cadena => {
            // Dividimos la cadena en partes usando split(" ")
            const partes = cadena.split(" ");

            // Si hay al menos dos partes, agregamos las dos siguientes partes a la matriz siguientesDosCadenasArray
            if (partes.length >= 3) {
                diaMesPasado.push(partes.slice(1, 3).join(" "));
            }
        });
        const data = diaMesActual.map((element, index) =>
            `${element} ${diaMesPasado[index]}\n\n${diasSemana[index]}`
        );
        // Filtrar el segundo array de datos (ignorar el de la posición 0)
        const datosSemanaPasadaEnergy = datosGraficaSemanalEnergy[0].map(dato => dato.lightConsumption);

        // Specify the configuration items and data for the chart
        let option = {
            legend: {},
            tooltip: {},
            dataset: {
                dimensions: ['week', 'Semana_anterior', 'Semana_actual'],
                // source: [
                //   { week: 'Lunes', Semana_anterior: 43.3, Semana_actual: 85.8 },
                //   { week: 'Martes', Semana_anterior: 83.1, Semana_actual: 73.4 },
                //   { week: 'Miércoles', Semana_anterior: 86.4, Semana_actual: 65.2 },
                //   { week: 'Jueves', Semana_anterior: 72.4, Semana_actual: 53.9 },
                //   { week: 'Viernes', Semana_anterior: 43.3, Semana_actual: 5 },
                //   { week: 'Sábado', Semana_anterior: 72.4, Semana_actual: 53.9 },
                //   { week: 'Domingo', Semana_anterior: 43.3, Semana_actual: 10 }
                // ]
            },

            color: [
                '#FFCA7F',
                '#FFBB5C'
            ],

            grid: {
                left: '3%',
                right: '4%',
                bottom: '10%', // Aumenta el espacio en la parte inferior para hacer espacio para las etiquetas del eje x
                containLabel: true
            },

            xAxis: {
                type: 'category',
                axisTick: {show: false}, // Oculta las marcas del eje x para que solo se muestren las etiquetas
                data: data
            },
            yAxis: {},

            series: [
                {
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
        myChartSemanalEnergy.setOption(option);

    } catch (error) {
        console.error('Error:', error);
    }
})();