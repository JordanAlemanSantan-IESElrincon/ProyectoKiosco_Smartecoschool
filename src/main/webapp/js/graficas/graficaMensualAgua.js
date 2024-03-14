// Initialize the echarts instance based on the prepared dom
import {fetchMonthlyConsumption} from "../api-service.js";

/**
 * @typedef {Object} MonthlyConsumption
 * @property {string} dateName - Nombre de la fecha
 * @property {number} waterConsumption - Consumo de agua
 */

// Inicializa la instancia de echarts en relación con el DOM preparado
const myChartMensualAgua = echarts.init(document.getElementById('graficaMensualAgua'));

// Obtiene el elemento HTML para mostrar el valor actual de consumo de agua mensual
const myChartCantidadConsumoAguaMensual = document.querySelector('#cantidadConsumoAguaMensual');

export const implementarGraficaMensualAgua = async () => {
    try {
        // Obtiene los datos mensuales de consumo de agua desde la API
        const datosGraficaMensualAgua = await fetchMonthlyConsumption(1, 2);

        // Actualiza el valor actual de consumo de agua mensual en el HTML
        myChartCantidadConsumoAguaMensual.innerHTML = `${datosGraficaMensualAgua[datosGraficaMensualAgua.length - 1].waterConsumption} L`;

        // Filtra el array de datos para obtener solo el consumo de agua mensual
        const datosConsumoMensualAgua = datosGraficaMensualAgua.map(dato => dato.waterConsumption);
        console.log("Datos consumo del mes agua actual", datosConsumoMensualAgua);

        // Obtiene los nombres de los meses para el eje x
        const datosMesesAgua = datosGraficaMensualAgua.map(dato => dato.dateName);
        console.log("Datos meses agua", datosMesesAgua);


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
                    data: datosMesesAgua, // Datos a mostrar en el eje x (nombres de los meses)

                    // Configuración del tamaño de los nombres del mes en el eje x
                    axisLabel: {
                        fontSize: 18, // Tamaño de la fuente para los nombres de los meses
                        fontWeight: 'bold' // Pone el texto del eje x en negrita
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
                            color: ['#f9f9df'], // Color de las líneas horizontales
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
                        color: '#8C88EE'
                    },

                    emphasis: {
                        focus: 'series'
                    },

                    //Cambiar el color de la línea de la gráfica
                    lineStyle: {
                        color: '#6964DC'
                    },

                    //Cambiar el color y tamaño de los círculos de la gráfica
                    symbol: 'circle', // Forma del símbolo (círculo en este caso)
                    symbolSize: 12, // Tamaño de los círculos
                    itemStyle: {
                        color: '#068CAA' // Color de los círculos de la gráfica
                    },

                    //Datos de los meses
                    data: datosConsumoMensualAgua
                }
            ]
        };

        // Muestra el gráfico utilizando la configuración y los datos especificados
        myChartMensualAgua.setOption(option);

    } catch (error) {
        // Muestra un mensaje de error en la consola en caso de fallo
        console.error('Error:', error);
    }
};

// import {tiempoEsperaParaVolverASolicitarDatos} from "../api-service.js";
// await  implementarGraficaMensualAgua();
// setInterval(async () => await implementarGraficaMensualAgua(), tiempoEsperaParaVolverASolicitarDatos);