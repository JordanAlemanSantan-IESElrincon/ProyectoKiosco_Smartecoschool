import {fetchWeeklyConsumption} from "./api-service.js";

// Initialize the echarts instance based on the prepared dom
var myChart = echarts.init(document.getElementById('semanal'));

fetchWeeklyConsumption(2).then(data => {
    // Specify the configuration items and data for the chart
    let source = data.map(d => {
        return {
            week: d.dateName,
            Agua: d.value,
            Luz: d.value
        }
    });
    var option = {
        legend: {},
        tooltip: {},
        dataset: {
            dimensions: ['week', 'Agua'], source: source
        },
        color: ['#5470c6', '#fac858'],
        xAxis: {type: 'category'},
        yAxis: {}, // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{type: 'bar'}, {type: 'bar'}]
    };

// Display the chart using the configuration items and data just specified.
    myChart.setOption(option);

    // Afinen mucho mejor este ejemplo para no estar sobrecargando la bbdd por todos lados
    // updateData(source, option);
});

function updateData(source, option) {
    setTimeout(() => {
        source = source.map(d => {
            return {
                week: d.dateName,
                Agua: d.value + 100,
                Luz: d.value + 50
            }
        })
        option.dataset.source = source;
        myChart.setOption(option);
        updateData(source);
    }, 5000);
}