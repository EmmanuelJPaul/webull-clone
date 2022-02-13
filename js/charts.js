import chartData, { nasdaqData } from './data.js';

google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawColColors);

function drawColColors() {
    var data = google.visualization.arrayToDataTable([
        ["Element", "Amount", { role: "style" }],
        ['<-15%', 18, '#c2362e'],
        ['', 23, '#c2362e'],
        ['-10~-5%', 156, '#c2362e'],
        ['', 598, '#c2362e'],
        ['-2~0%', 2038, '#c2362e'],
        ['0', 244, '#DCDCDC'],
        ['0~2%', 1478, '#169c66'],
        ['', 353, '#169c66'],
        ['5~10%', 125, '#169c66'],
        ['', 35, '#169c66'],
        ['>15%', 30, '#169c66']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2]);
    var options = {
        colors: ['#c2362e', '#33ac71'],
        backgroundColor: 'transparent',
        hAxis: {
            viewWindow: 'max',
            textPosition: 'none',
            gridlines: { color: 'transparent' },
        },
        vAxis: {
            viewWindow: 'max',
            textPosition: 'none',
            gridlines: { color: 'transparent' }
        },
        legend: {
            position: 'none'
        },
        chartArea: {
            left: 0,
            top: 0,
            width: '100%',
            height: '90%',
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('barCart'));
    chart.draw(view, options);
}





google.charts.load('current', { 'packages': ['line'] });
google.charts.setOnLoadCallback(drawLineChart);

async function drawLineChart() {

    
    var data = new google.visualization.DataTable();
    data.addColumn('string', '');
    data.addColumn('number', '');
    data.addColumn('number', '');

    data.addRows(chartData);

    var options = {
        colors: ['#1782fa', '#fd7931'],
        backgroundColor: 'transparent',
        chartArea: {
            backgroundColor: 'transparent',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            
        },
        hAxis: {
            viewWindow: 'max',
            gridlines: { color: 'transparent' },
            textStyle: { color: 'transparent' }
        },
        vAxis: {
            viewWindow: 'max',
            gridlines: { color: 'transparent' },
            textStyle: { color: 'transparent' }
        },
        legend: {
            position: 'none'
        },
    };

    var chart = new google.charts.Line(document.getElementById('lineChart'));

    chart.draw(data, google.charts.Line.convertOptions(options));
}




google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawAreaChart);

function drawAreaChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales'],
    ...nasdaqData
  ]);

    var options = {
        colors: ['#1782fa'],
        areaOpacity: 0.1,
        backgroundColor: 'transparent',
        chartArea: {
            backgroundColor: 'transparent',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
        },
        hAxis: {
            viewWindow: 'max',
            textPosition: 'none',
            gridlines: { color: 'transparent' },
            baselineColor: 'transparent',
        },
        vAxis: {
            viewWindow: 'max',
            textPosition: 'none',
            gridlines: { color: 'transparent' },
            minValue: 0
        },
        legend: {
            position: 'none'
        }
  };

  var chart = new google.visualization.AreaChart(document.getElementById('areaChart'));
  chart.draw(data, options);
}

console.log()