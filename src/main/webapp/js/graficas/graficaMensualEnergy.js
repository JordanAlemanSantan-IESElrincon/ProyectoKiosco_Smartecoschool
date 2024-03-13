// Initialize the echarts instance based on the prepared dom
import {fetchMonthlyConsumption} from "../api-service.js";

const myChartMensualEnergy = echarts.init(document.getElementById('graficaMensualEnergy'));
const myChartCantidadConsumoEnergyMensual = document.querySelector('#cantidadConsumoEnergyMensual');

// Specify the configuration items and data for the chart
(async () => {
    try {
        const datosGraficaMensualEnergy = await fetchMonthlyConsumption(2, 3);

        myChartCantidadConsumoEnergyMensual.innerHTML =
            `${datosGraficaMensualEnergy[datosGraficaMensualEnergy.length - 1].lightConsumption} kWh`;

        // Filtrar el array de datos
        const datosMensualEnergy = datosGraficaMensualEnergy.map(dato => dato.lightConsumption);
        console.log("Datos mes energy actual", datosMensualEnergy);

        const datosMesesEnergy = datosGraficaMensualEnergy.map(dato => dato.dateName);
        console.log("Datos meses energy", datosMesesEnergy);

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
                    data: datosMesesEnergy,
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
                            color: ['#d8e6f3'],
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
                        color: '#FFCA7F'
                    },
                    emphasis: {
                        focus: 'series'
                    },

                    //Cambiar el color de la línea de la gráfica
                    lineStyle: {
                        color: '#FFBB5C'
                    },

                    //Cambiar el color de los círculos de la gráfica
                    itemStyle: {
                        color: '#CBCD2A'
                    },
                    //Datos de los meses
                    //Abr May Jun Jul Ago Sep Oct Nov Dic Ene Feb Mar
                    data: datosMensualEnergy
                }
            ]
        };

        // Display the chart using the configuration items and data just specified.
        myChartMensualEnergy.setOption(option);

    } catch (error) {
        console.error('Error:', error);
    }
})();

