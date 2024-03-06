var myChart = echarts.init(document.getElementById('mensual'));

// This example requires ECharts v5.4.0 or later
const cellSize = [80, 80];
const pieRadius = 30;
function getVirtualData() {
    const date = +echarts.time.parse('2024-03-01');
    const end = +echarts.time.parse('2024-04-01');
    const dayTime = 3600 * 24 * 1000;
    const data = [];
    for (let time = date; time < end; time += dayTime) {
        data.push([
            echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}
const scatterData = getVirtualData();
const pieSeries = scatterData.map(function (item, index) {
    return {
        type: 'pie',
        id: 'pie-' + index,
        center: item[0],
        radius: pieRadius,
        coordinateSystem: 'calendar',
        label: {
            formatter: '{c}',
            position: 'inside'
        },
        data: [
            { name: 'Agua', value: Math.round(Math.random() * 24) },
            { name: 'Luz', value: Math.round(Math.random() * 24) }
        ]
    };
});
var option = {
    tooltip: {},
    legend: {
        data: ['Agua', 'Luz'],
        bottom: 20
    },
    color: [
        '#5470c6',
        '#fac858'
    ],
    calendar: {
        top: 'middle',
        left: 'center',
        orient: 'vertical',
        cellSize: cellSize,
        yearLabel: {
            show: false,
            fontSize: 30
        },
        dayLabel: {
            margin: 20,
            firstDay: 1,
            nameMap: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
        },
        monthLabel: {
            show: false
        },
        range: ['2024-03']

    },
    series: [
        {
            id: 'label',
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 0,
            label: {
                show: true,
                formatter: function (params) {
                    return echarts.time.format(params.value[0], '{dd}', false);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                fontSize: 14
            },
            data: scatterData
        },
        ...pieSeries
    ]
};
myChart.setOption(option);