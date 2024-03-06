// Initialize the echarts instance based on the prepared dom
var myChart = echarts.init(document.getElementById('diario'));

// Specify the configuration items and data for the chart
var option = {
    legend: {},
    tooltip: {},
    dataset: {
        dimensions: ['week', 'Agua', 'Luz'],
        source: [
            { week: 'Lunes', Agua: 43.3, Luz: 85.8 },
            { week: 'Martes', Agua: 83.1, Luz: 73.4 },
            { week: 'Miércoles', Agua: 86.4, Luz: 65.2 },
            { week: 'Jueves', Agua: 72.4, Luz: 53.9 },
            { week: 'Viernes', Agua: 43.3, Luz: 0 }

        ]
    },
    color: [
        '#5470c6',
        '#fac858'
    ],
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }]
};

// Display the chart using the configuration items and data just specified.
myChart.setOption(option);