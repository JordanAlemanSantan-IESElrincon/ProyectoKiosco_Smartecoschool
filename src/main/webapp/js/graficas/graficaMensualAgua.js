// Initialize the echarts instance based on the prepared dom
import {fetchMonthlyConsumption} from "../api-service.js";

const myChartMensualAgua = echarts.init(document.getElementById('graficaMensualAgua'));
const myChartCantidadConsumoAguaMensual = document.querySelector('#cantidadConsumoAguaMensual');

(async () => {
    try {
        const datosGraficaMensualAgua = await fetchMonthlyConsumption(2, 3);

        myChartCantidadConsumoAguaMensual.innerHTML =
            `${datosGraficaMensualAgua[datosGraficaMensualAgua.length - 1].waterConsumption} L`;

        // Filtrar el primer array de datos
        // const datosSemanaActualEnergy = datosGraficaSemanalEnergy[1].map(dato => dato.lightConsumption);
        // console.log("Datos semana actual", datosSemanaActualEnergy);
        // // Filtrar el segundo array de datos (ignorar el de la posición 0)
        // const datosSemanaPasadaEnergy = datosGraficaSemanalEnergy[0].map(dato => dato.lightConsumption);
        //
        // console.log("Datos semana pasada", datosSemanaPasadaEnergy);

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
            legend: {
                data: ['Consumo mensual'],
                //Cambiar el tamaño del dato Consumo Mensual
                textStyle: {
                    fontSize: 24,
                },
                top: '5%'
            },

            grid: {
                top: '15%',
                left: '3%',
                right: '4%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep',
                        'Oct', 'Nov', 'Dic', 'Ene', 'Feb', 'Mar'],
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
                            return value / 1000 + 'k  ';
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
                        position: 'top'
                    },

                    //Cambiar el color del interior de la gráfica
                    areaStyle: {
                        //Color R/G/B/Alfa
                        color: 'rgba(6, 140, 170, 0.5)'
                    },

                    emphasis: {
                        focus: 'series'
                    },

                    //Cambiar el color de la línea de la gráfica
                    lineStyle: {
                        color: '#068CAA'
                    },

                    //Cambiar el color de los círculos de la gráfica
                    itemStyle: {
                        color: '#068CAA'
                    },

                    //Datos de los meses
                    //Abr May Jun Jul Ago Sep Oct Nov Dic Ene Feb Mar
                    data: [820, 932, 901, 934, 1290, 1330, 1320, 1000, 1200, 1100, 1000, 1005]
                }
            ]
        };

        // Display the chart using the configuration items and data just specified.
        myChartMensualAgua.setOption(option);

    } catch (error) {
        console.error('Error:', error);
    }
})();