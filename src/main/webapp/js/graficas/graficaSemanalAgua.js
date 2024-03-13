// Initialize the echarts instance based on the prepared dom
import {fetchWeeklyConsumption} from "../api-service.js";

const myChartSemanalAgua = echarts.init(document.getElementById('graficaSemanalAgua'));
const myChartSemanalAguaActual = document.querySelector('#cantidadConsumoAguaActual');


(async () => {
  try {
    const datosGraficaSemanalAgua = await fetchWeeklyConsumption(2, 3);

    myChartSemanalAguaActual.innerHTML =
        `${datosGraficaSemanalAgua[1][datosGraficaSemanalAgua[1].length - 1].waterConsumption} L`;

    // Filtrar el primer array de datos
    const datosSemanaActualAgua = datosGraficaSemanalAgua[1].map(dato => dato.waterConsumption);
    console.log("Datos semana actual", datosSemanaActualAgua);
    // Filtrar el segundo array de datos (ignorar el de la posición 0)
    const datosSemanaPasadaAgua = datosGraficaSemanalAgua[0].map(dato => dato.waterConsumption);

    console.log("Datos semana pasada", datosSemanaPasadaAgua);

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
        axisTick: { show: false }, // Oculta las marcas del eje x para que solo se muestren las etiquetas
        data: ['Lun [4 y 11]', 'Mar [5 y 12]', 'Mie [6 y 13]', 'Jue [7 y 14]', 'Vie [8 y 15]', 'Sab [9 y 16]', 'Dom [10 y 17]'] // Etiquetas personalizadas del eje x
      },
      yAxis: {},

      series: [
        {
          type: 'bar',
          // data: [43.3, 83.1, 86.4, 72.4, 43.3, 72.4, 43.3], // Datos de la semana anterior
          data: datosSemanaActualAgua, // Datos de la semana anterior
          label: { // Configuración de la etiqueta
            show: true, // Mostrar etiqueta
            position: 'inside', // Posición de la etiqueta
            formatter: '{c}' // Formato de la etiqueta, "{c}" representa el valor del dato
          }
        },
        {
          type: 'bar',
          // data: [85.8, 73.4, 65.2, 53.9, 5, 53.9, 70], // Datos de la semana actual
          data: datosSemanaPasadaAgua, // Datos de la semana actual
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