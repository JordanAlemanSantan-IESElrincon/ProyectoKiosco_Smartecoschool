// Initialize the echarts instance based on the prepared dom
var myChart = echarts.init(document.getElementById('diarioEnergy'));

// Specify the configuration items and data for the chart
var option = {
    legend: {},
    tooltip: {},
    dataset: {
        dimensions: ['week', 'Semana_anterior', 'Semana_pasada'],
        source: [
            { week: 'Lunes', Semana_anterior: 43.3, Semana_pasada: 85.8 },
            { week: 'Martes', Semana_anterior: 83.1, Semana_pasada: 73.4 },
            { week: 'Miércoles', Semana_anterior: 86.4, Semana_pasada: 65.2 },
            { week: 'Jueves', Semana_anterior: 72.4, Semana_pasada: 53.9 },
            { week: 'Viernes', Semana_anterior: 72.4, Semana_pasada: 53.9 },
            { week: 'Sábado', Semana_anterior: 72.4, Semana_pasada: 53.9 },
            { week: 'Domingo', Semana_anterior: 43.3, Semana_pasada: 0 }

        ]
    },
    color: [
        '#f9ff1e',
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