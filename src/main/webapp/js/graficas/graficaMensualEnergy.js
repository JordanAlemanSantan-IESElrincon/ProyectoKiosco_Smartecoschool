// Initialize the echarts instance based on the prepared dom
const myChartMensualEnergy = echarts.init(document.getElementById('graficaMensualEnergy'));

// Specify the configuration items and data for the chart
option = {
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
        formatter: function(value) { // Transforma los valores
          return value / 1000 + 'k  ';
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
        position: 'top'
      },

      //Cambiar el color del interior de la gráfica
      areaStyle: {
        //Color R/G/B/Alfa
        color: 'rgba(230, 232, 57, 0.5)'
      },
      emphasis: {
        focus: 'series'
      },

      //Cambiar el color de la línea de la gráfica
      lineStyle: {
        color: '#CBCD2A'
      },

      //Cambiar el color de los círculos de la gráfica
      itemStyle: {
        color: '#CBCD2A'
      },
      //Datos de los meses
      //Abr May Jun Jul Ago Sep Oct Nov Dic Ene Feb Mar
      data: [820, 932, 901, 934, 1290, 1330, 1320, 1000, 1200, 1100, 1000, 1005]
    }
  ]
};

// Display the chart using the configuration items and data just specified.
myChartMensualEnergy.setOption(option);