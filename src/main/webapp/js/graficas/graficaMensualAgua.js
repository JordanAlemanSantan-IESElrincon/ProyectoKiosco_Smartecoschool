// Initialize the echarts instance based on the prepared dom
const myChartMensualAgua = echarts.init(document.getElementById('graficaMensualAgua'));

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
    //Cambiar el tamano del dato Consumo Mensual
    textStyle: {
      fontSize: 24,
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
      'Oct', 'Nov', 'Dic', 'Ene', 'Feb', 'Mar'],
      //Cambiar el tamano de los nombres del mes
      axisLabel: {
        fontSize: 18,
      }
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
        color: 'rgba(6, 140, 170, 0.5)'
      },

      emphasis: {
        focus: 'series'
      },

      //Cambiar el color de la linea de la grafica
      lineStyle: {
        color: '#068CAA'
      },

      //Cambiar el color de los circulos de la grafica
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

// fetchWeeklyConsumption(2, 3).then(d => console.log(d));