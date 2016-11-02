'use strict';

/**
 * @ngdoc function
 * @name rock3rlabsApp.controller:AnalitycsCtrl
 * @description
 * # MainCtrl
 * Controller of the rock3rlabsApp
 */
angular.module('rock3rlabsApp')
  .controller('analitycsCtrl', ['dataService',function(dataService) {
    function addPieChart(feed) {
        Highcharts.chart('pieChart', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: 'Browser<br>shares<br>2015',
                align: 'center',
                verticalAlign: 'middle',
                y: 40
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -90,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
                    startAngle: -90,
                    endAngle: 270,
                    center: ['50%', '15%']
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                innerSize: '60%',
                data: [
                    ['Firefox',   10.38],
                    ['IE',       56.33],
                    ['Chrome', 24.03],
                    ['Safari',    4.77],
                    ['Opera',     0.91],
                    {
                        name: '',
                        y: 0.2,
                        dataLabels: {
                            enabled: false
                        }
                    }
                ]
            }]
        });
    };
    function addColumnChart(feed) {
        Highcharts.chart('columnChart', {
            data: {
                table: 'datatable'
            },
            chart: {
                type: 'column'
            },
            title: {
                text: 'Data extracted from a HTML table in the page'
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Units'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        this.point.y + ' ' + this.point.name.toLowerCase();
                }
            }
        });
    };
    function addLineChart(feed) {
        feed = feed.map(function(obj) {
            var tmpObj={};
            tmpObj.name = obj.name;
            tmpObj.data = obj.speed;
            tmpObj.time = new Date(obj.time);
            return tmpObj;
        }); 
        Highcharts.chart('lineChart', {
            title: {
                text: 'Speed Zones',
                x: -20 //center
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats : {
                    hour: '%I %p',
                    minute: '%I:%M %p'
                }
            },
            yAxis: {
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: 'KM'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: feed

        });
    };
    var dataFeed; 
    dataService.getData().then(function(data) {
        dataFeed = data;
        var lineChartFeed = dataFeed.map(function(obj) {
            var tmpObj={};
            tmpObj.name = obj.zoneId;
            tmpObj.speed = obj.data.speed;
            tmpObj.count = obj.data.count;
            tmpObj.time = new Date(obj.data.time);
            return tmpObj;
        });    
        addPieChart(lineChartFeed);
        addColumnChart(lineChartFeed);
        addLineChart(lineChartFeed);
    });
  }]);
