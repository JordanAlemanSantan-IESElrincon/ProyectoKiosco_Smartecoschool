// Inicializa la instancia de echarts en relación con el DOM preparado
const myChartRetoAgua = echarts.init(document.getElementById('graficaRetoEnergy'));

// Obtiene el elemento HTML para mostrar el valor actual de consumo de luz mensual
const myChartCantidadConsumoEnergyMensual = document.querySelector('#cantidadConsumoEnergyMensual');

option = {
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      center: ['50%', '75%'],
      radius: '90%',
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
        fontSize: 20,
        distance: -60,
        rotate: 'tangential',
        formatter: function (value) {
          if (value === 0.875) {
            return 'DATO4';
          } else if (value === 0.625) {
            return 'DATO3';
          } else if (value === 0.375) {
            return 'DATO2';
          } else if (value === 0.125) {
            return 'DATO1';
          }
          return '';
        }
      },
      title: {
        offsetCenter: [0, '-10%'],
        fontSize: 20,
        textStyle: {  // Ajusta el tamaño del texto aquí
          fontSize: 30  // Tamaño de texto deseado para "Retos"
        }
      },
      detail: {
        fontSize: 30,
        offsetCenter: [0, '-35%'],
        valueAnimation: true,
        formatter: function (value) {
          return Math.round(value * 100) + '';
        },
        color: 'inherit'
      },
      data: [
        {
          value: 0.7,
          name: 'Retos'
        }
      ]
    }
  ]
};

import {tiempoEsperaParaVolverASolicitarDatos} from "../api-service.js";
await  implementarGraficaMensualAgua();
setInterval(async () => await implementarGraficaMensualAgua(), tiempoEsperaParaVolverASolicitarDatos);