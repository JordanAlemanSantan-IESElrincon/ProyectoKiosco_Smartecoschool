// Initialize the echarts instance based on the prepared dom
import {fetchMonthlyConsumption} from "../api-service.js";

/**
 * @typedef {Object} MonthlyConsumption
 * @property {string} dateName - Nombre de la fecha
 * @property {number} lightConsumption - Consumo de luz
 */

// Inicializa la instancia de echarts en relación con el DOM preparado
const myChartMensualEnergy = echarts.init(document.getElementById('graficaMensualEnergy'));

// Obtiene el elemento HTML para mostrar el valor actual de consumo de luz mensual
const myChartCantidadConsumoEnergyMensual = document.querySelector('#cantidadConsumoEnergyMensual');

// Specify the configuration items and data for the chart
(async () => {
    try {
        // Obtiene los datos mensuales de consumo de luz desde la API
        const datosGraficaMensualEnergy = await fetchMonthlyConsumption(2, 3);

        // Actualiza el valor actual de consumo de luz mensual en el HTML
        myChartCantidadConsumoEnergyMensual.innerHTML =`${datosGraficaMensualEnergy[datosGraficaMensualEnergy.length - 1].lightConsumption} kWh`;

        // Filtra el array de datos para obtener solo el consumo de luz mensual
        const datosMensualEnergy = datosGraficaMensualEnergy.map(dato => dato.lightConsumption);
        console.log("Datos mes energy actual", datosMensualEnergy);

        // Obtiene los nombres de los meses para el eje x
        const datosMesesEnergy = datosGraficaMensualEnergy.map(dato => dato.dateName);
        console.log("Datos meses energy", datosMesesEnergy);

        // Especifica los elementos de configuración y los datos para el gráfico
        let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },

            //titulo de leyenda
            // legend: {
            //     data: ['Consumo mensual'],
            //     //Cambiar el tamaño del dato Consumo Mensual
            //     textStyle: {
            //         fontSize: 24,
            //     },
            //     top: '5%'
            // },

            // Configuración del área del gráfico
            grid: {
                top: '10%', // Espaciado en la parte superior del gráfico
                left: '3%', // Espaciado en el lado izquierdo del gráfico
                right: '4%', // Espaciado en el lado derecho del gráfico
                bottom: '5%', // Espaciado en la parte inferior del gráfico
                containLabel: true // Ajuste automático de las etiquetas para evitar que se superpongan
            },

            // Configuración del eje x (horizontal)
            xAxis: [
                {
                    type: 'category', // Tipo de eje, en este caso, categoría (para datos de texto)
                    boundaryGap: false, // No deje espacio en blanco al principio y al final del eje x
                    data: datosMesesEnergy, // Datos a mostrar en el eje x (nombres de los meses)

                    // Configuración del tamaño de los nombres del mes en el eje x
                    axisLabel: {
                        fontSize: 18, // Tamaño de la fuente para los nombres de los meses
                    }
                }
            ],

            // Configuración del eje y (vertical)
            yAxis: [
                {
                    type: 'value', // Tipo de eje, en este caso, valor (para datos numéricos)

                    // Configuración del tamaño de las etiquetas en el eje y
                    axisLabel: {
                        fontSize: 18, // Tamaño de la fuente para las etiquetas del eje y
                        formatter: function (value) { // Transforma los valores
                            return value / 1000 + 'k   '; // Divide entre 1000 y agrega "k" para indicar miles
                        }
                    },

                    // Configuración de las líneas horizontales (grid) en el eje x
                    splitLine: {
                        show: true, // Muestra las líneas horizontales en el eje y
                        lineStyle: {
                            color: ['#d8e6f3'], // Color de las líneas horizontales
                        }
                    }
                }
            ],

            // Configuración de la serie del gráfico
            series: [
                {
                    name: 'Consumo mensual', // Etiqueta para la serie
                    type: 'line', // Tipo de gráfico (línea en este caso)
                    stack: 'Total', // Apilado para gráficos de área (no afecta a gráficos de líneas)
                    label: {
                        show: true, // Mostrar etiquetas sobre los puntos de datos
                        position: 'top', // Posición de las etiquetas (en la parte superior de los puntos)
                        formatter: function (params) {
                            return (params.value / 1000).toFixed(1) + 'k'; // Formateo de las etiquetas dividiendo entre 1000 y mostrando "k"
                        }
                    },

                    //Cambiar el color del interior de la gráfica
                    areaStyle: {
                        //Color R/G/B/Alfa
                        color: '#FFCA7F'
                    },
                    emphasis: {
                        focus: 'series'
                    },

                    //Cambiar el color de la línea de la gráfica
                    lineStyle: {
                        color: '#FFBB5C'
                    },

                    //Cambiar el color y tamaño de los círculos de la gráfica
                    symbol: 'circle', // Forma del símbolo (círculo en este caso)
                    symbolSize: 12, // Tamaño de los círculos
                    itemStyle: {
                        color: '#FFBB5C' // Color de los círculos de la gráfica
                    },

                    //Datos de los meses
                    data: datosMensualEnergy
                }
            ]
        };

        // Muestra el gráfico utilizando la configuración y los datos especificados
        myChartMensualEnergy.setOption(option);

    } catch (error) {
        // Muestra un mensaje de error en la consola en caso de fallo
        console.error('Error:', error);
    }
})();

