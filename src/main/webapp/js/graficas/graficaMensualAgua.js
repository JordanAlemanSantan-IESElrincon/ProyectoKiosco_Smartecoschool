// Initialize the echarts instance based on the prepared dom
import {fetchMonthlyConsumption} from "../api-service.js";

const myChartMensualAgua = echarts.init(document.getElementById('graficaMensualAgua'));
const myChartCantidadConsumoAguaMensual = document.querySelector('#cantidadConsumoAguaMensual');

(async () => {
    try {
        const datosGraficaMensualAgua = await fetchMonthlyConsumption(2, 3);

        myChartCantidadConsumoAguaMensual.innerHTML =
            `${datosGraficaMensualAgua[datosGraficaMensualAgua.length - 1].waterConsumption} L`;

        // Filtrar el array de datos
        const datosMensualAgua = datosGraficaMensualAgua.map(dato => dato.waterConsumption);
        console.log("Datos mes agua actual", datosMensualAgua);

        const datosMesesAgua = datosGraficaMensualAgua.map(dato => dato.dateName);
        console.log("Datos meses agua", datosMesesAgua);


        // Specify the configuration items and data for the chart
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

            grid: {
                top: '10%',
                left: '3%',
                right: '4%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: datosMesesAgua,
                    //Cambiar el tamaño de los nombres del mes
                    axisLabel: {
                        fontSize: 18,
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        fontSize: 18,
                        formatter: function (value) { // Transforma los valores
                            return value / 1000 + 'k   ';
                        }
                    },

                    // Configuración de las líneas horizontales (grid) en el eje x
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#f9f9df'],
                        }
                    }
                }
            ],
            series: [
                {
                    name: 'Consumo mensual',
                    type: 'line',
                    stack: 'Total',
                    label: {
                        show: true,
                        position: 'top',
                        formatter: function (params) {
                            return (params.value / 1000).toFixed(1) + 'k';
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

                    //Cambiar el color de los círculos de la gráfica
                    itemStyle: {
                        color: '#068CAA'
                    },

                    //Datos de los meses
                    //Abr May Jun Jul Ago Sep Oct Nov Dic Ene Feb Mar
                    data: datosMensualAgua
                }
            ]
        };

        // Display the chart using the configuration items and data just specified.
        myChartMensualAgua.setOption(option);

    } catch (error) {
        console.error('Error:', error);
    }
})();