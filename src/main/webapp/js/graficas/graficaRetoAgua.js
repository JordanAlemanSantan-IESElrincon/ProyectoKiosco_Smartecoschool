import {fetchWeeklyConsumption} from "../api-service.js";

/**
 * @typedef {Object} WeeklyConsumptionData
 * @property {string} dateName - Nombre de la fecha
 * @property {number} waterConsumption - Consumo de agua
 */

// Inicializa la instancia de echarts en relación con el DOM preparado
const myChartRetoAgua = echarts.init(document.getElementById('graficaRetoAgua'));

// Obtiene el elemento HTML para mostrar el valor actual de consumo de agua mensual
const myChartRetoConsumoAgua = document.querySelector('#retoAgua');

export const implementarGraficaRetoAgua = async () => {
    try {
        // Obtiene los datos semanales de consumo desde la API
        const datosGraficaSemanalAgua = await fetchWeeklyConsumption(1, 2);

        // Calcula los cuatro valores equitativos
        const cantidadConsumoAguaDiaSemanaAnterior = datosGraficaSemanalAgua[0][datosGraficaSemanalAgua[1].length - 1].waterConsumption;
        console.log("cantidadConsumoAguaDiaSemanaAnterior " + cantidadConsumoAguaDiaSemanaAnterior)
        const cantidadConsumoAguaDiaSemanaActual = datosGraficaSemanalAgua[1][datosGraficaSemanalAgua[1].length - 1].waterConsumption;
        console.log("cantidadConsumoEnergyDiaSemanaActual " + cantidadConsumoAguaDiaSemanaActual)

        // Calcular el porcentaje de consumo de agua del día actual respecto al día anterior
        const porcentajeConsumoAgua = (cantidadConsumoAguaDiaSemanaActual / cantidadConsumoAguaDiaSemanaAnterior) * 100;

        console.log(`El porcentaje de consumo de energia del día actual respecto al día anterior es: ${porcentajeConsumoAgua.toFixed(2)}%`);
        const division = cantidadConsumoAguaDiaSemanaAnterior / 4;
        const valoresAguaDivididos =
            [
                `${cantidadConsumoAguaDiaSemanaAnterior} L`,
                `${(division * 3).toFixed(1)} L`,
                `${(division * 2).toFixed(1)} L`,
                `${division.toFixed(1)} L`
            ];

        // Actualiza el valor actual de consumo de luz en el HTML
        myChartRetoConsumoAgua.innerHTML = `${cantidadConsumoAguaDiaSemanaAnterior} L`;

        let option = {
            series: [
                {
                    type: 'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    center: ['50%', '90%'],
                    radius: '140%',
                    min: 0,
                    max: 1,
                    splitNumber: 8,
                    axisLine: {
                        lineStyle: {
                            width: 6,
                            color: [
                                [0.25, '#7CFFB2'],
                                [0.5, '#58D9F9'],
                                [0.75, '#FDDD60'],
                                [1, '#FF6E76']
                            ]
                        }
                    },
                    pointer: {
                        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                        length: '12%',
                        width: 20,
                        offsetCenter: [0, '-60%'],
                        itemStyle: {
                            color: 'auto'
                        }
                    },
                    axisTick: {
                        length: 12,
                        lineStyle: {
                            color: 'auto',
                            width: 2
                        }
                    },
                    splitLine: {
                        length: 20,
                        lineStyle: {
                            color: 'auto',
                            width: 5
                        }
                    },
                    axisLabel: {
                        color: '#464646',
                        fontSize: 30,
                        distance: -60,
                        rotate: 'tangential',
                        formatter: function (value) {
                            if (value === 0.875) {
                                return valoresAguaDivididos[0];
                            } else if (value === 0.625) {
                                return valoresAguaDivididos[1];
                            } else if (value === 0.375) {
                                return valoresAguaDivididos[2];
                            } else if (value === 0.125) {
                                return valoresAguaDivididos[3];
                            }
                            return '';
                        }
                    },
                    title: {
                        offsetCenter: [0, '-10%'],
                        fontSize: 30,
                        // textStyle: {  // Ajusta el tamaño del texto aquí
                        //   fontSize: 30  // Tamaño de texto deseado para "Retos"
                        // }
                    },
                    detail: {
                        fontSize: 30,
                        offsetCenter: [0, '-35%'],
                        valueAnimation: true,
                        formatter: function (value) {
                            return Math.round(value * 100) + ' %'; // Agregar el símbolo "%" al valor
                        },
                        color: 'inherit'
                    },
                    data: [
                        {
                            value: porcentajeConsumoAgua / 100,
                            name: cantidadConsumoAguaDiaSemanaActual + ' L'
                        }
                    ]
                }
            ]
        };

        // Muestra el gráfico utilizando la configuración y los datos especificados
        myChartRetoAgua.setOption(option);
    } catch (error) {
        // Muestra un mensaje de error en la consola en caso de fallo
        console.error('Error:', error);
    }
};