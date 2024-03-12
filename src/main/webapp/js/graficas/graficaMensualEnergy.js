// Initialize the echarts instance based on the prepared dom
const myChartMensualEnergy = echarts.init(document.getElementById('graficaMensualEnergy'));

// Specify the configuration items and data for the chart
option = {
  title: {
    text: 'Energía'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Consumo mensual']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep',
      'Oct', 'Nov', 'Dic', 'Ene', 'Feb', 'Mar']
    }
  ],
  yAxis: [
    {
      type: 'value'
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

      //Cambiar el color del interior de la grafica
      areaStyle: {
        //Color R/G/B/Alfa
        color: 'rgba(230, 232, 57, 0.5)'
      },
      emphasis: {
        focus: 'series'
      },

      //Cambiar el color de la linea de la grafica
      lineStyle: {
        color: '#CBCD2A'
      },

      //Cambiar el color de los circulos de la grafica
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