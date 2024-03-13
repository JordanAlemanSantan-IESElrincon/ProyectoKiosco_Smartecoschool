// Initialize the echarts instance based on the prepared dom
import {fetchWeeklyConsumption} from "../api-service.js";

// Inicializa la instancia de echarts en relación con el DOM preparado
const myChartSemanalAgua = echarts.init(document.getElementById('graficaSemanalAgua'));
const myChartSemanalAguaActual = document.querySelector('#cantidadConsumoAguaActual');



(async () => {
    try {
        // Obtiene los datos semanales de consumo
        const datosGraficaSemanalAgua = await fetchWeeklyConsumption(2, 3);

        datosGraficaSemanalAgua.forEach(dato => console.log(dato));

        // Actualiza el valor actual de consumo de agua
        myChartSemanalAguaActual.innerHTML = `${datosGraficaSemanalAgua[1][datosGraficaSemanalAgua[1].length - 1].waterConsumption} L`;

        // Función para formatear los datos de la semana
        const fechaParaEnergy = () => {
            return datosGraficaSemanalAgua[0].map((item, index, array) => {
                const currentDay = item.dateName.split(" ")[1];
                const nextWeekDay = array[(index + 7) % array.length].dateName.split(" ")[1];
                return `${item.dateName} /n/n ${currentDay} ${nextWeekDay}`;
            });
        }

        // // Filtrar el primer array de datos
        // const fechaSemanaActualAgua = datosGraficaSemanalAgua[1].map(dato => dato.dateName);
        // // Inicializamos las nuevas matrices
        // let diasSemana = [];
        //
        // let diaMesActual = [];
        //
        // // Iteramos sobre cada cadena en cadenaArray
        // fechaSemanaActualAgua.forEach(cadena => {
        //     // Dividimos la cadena en partes usando split(" ")
        //     let partes = cadena.split(" ");
        //
        //     // Agregamos la primera parte a la matriz primeraCadenaArray
        //     diasSemana.push(partes[0]);
        //
        //     // Si hay al menos dos partes, agregamos las dos siguientes partes a la matriz siguientesDosCadenasArray
        //     if (partes.length >= 3) {
        //         diaMesActual.push(partes.slice(1, 3).join(" "));
        //     }
        // });
        //
        // // Filtrar el segundo array de datos (ignorar el de la posición 0)
        // const fechaSemanaPasadaAgua = datosGraficaSemanalAgua[0].map(dato => dato.dateName);
        // // Inicializamos las nuevas matrices
        // const diaMesPasado = [];
        //
        // // Iteramos sobre cada cadena en cadenaArray
        // fechaSemanaPasadaAgua.forEach(cadena => {
        //     // Dividimos la cadena en partes usando split(" ")
        //     const partes = cadena.split(" ");
        //
        //     // Si hay al menos dos partes, agregamos las dos siguientes partes a la matriz siguientesDosCadenasArray
        //     if (partes.length >= 3) {
        //         diaMesPasado.push(partes.slice(1, 3).join(" "));
        //     }
        // });
        // const data = diaMesActual.map((element, index) =>
        //     `${element} ${diaMesPasado[index]}\n\n${diasSemana[index]}`
        // );

        const datosSemanaActualAgua = datosGraficaSemanalAgua[1].map(dato => dato.waterConsumption);
        const datosSemanaPasadaAgua = datosGraficaSemanalAgua[0].map(dato => dato.waterConsumption);


        // Specify the configuration items and data for the chart
        let option = {
            legend: {
                data: ['Semana anterior', 'Semana actual'] // Etiquetas de la leyenda
            },
            tooltip: {},
            dataset: {
                dimensions: ['week', 'Semana_anterior', 'Semana_actual'],
            },

            color: [
                '#8C88EE',
                '#6964DC'
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
                data: fechaParaEnergy() // Etiquetas personalizadas del eje x
            },

            yAxis: {},

            series: [
                {
                    name: 'Semana anterior', // Etiqueta para la serie de la semana anterior
                    type: 'bar',
                    data: datosSemanaPasadaAgua, // Datos de la semana anterior
                    label: { // Configuración de la etiqueta
                        show: true, // Mostrar etiqueta
                        position: 'inside', // Posición de la etiqueta
                        formatter: '{c}' // Formato de la etiqueta, "{c}" representa el valor del dato
                    }
                },
                {
                    name: 'Semana actual', // Etiqueta para la serie de la semana actual
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

// Display the chart using the configuration items and data just specified.
        myChartSemanalAgua.setOption(option);
    } catch (error) {
        console.error('Error:', error);
    }
})();