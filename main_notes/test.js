// amChart
donut();
donut2();
donut3();
barChart();
barChart2();
// apex chart
apexBarChart();
apexBarChart2();
apexDonut();
apexDonut2();
apexDonut3();

test();

// amChart
function donut() {
    am4core.ready(function () {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // let chart_data = $("#dashboard_chart_data").html();
        let chart_data = [
            {
                "sentiment_count": "2",
                "sentiment_name": "In Process Loan"
            },
            {
                "sentiment_count": "17",
                "sentiment_name": "Pending Loan"
            },
            {
                "sentiment_count": "12",
                "sentiment_name": "Approved Loan"
            }
        ]
        // Create chart instance
        var chart = am4core.create("amchart_donut", am4charts.PieChart);

        chart.height = am4core.percent(100);
        chart.innerRadius = am4core.percent(50);

        // Add dataloan_summ

        chart.data = chart_data;

        // Add label
        var label = chart.seriesContainer.createChild(am4core.Label);
        label.text = "0";
        label.horizontalCenter = "middle";
        label.verticalCenter = "middle";
        label.fontSize = 30;

        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "sentiment_count";
        pieSeries.dataFields.category = "sentiment_name";

        chart.legend = new am4charts.Legend();


        var markerTemplate = chart.legend.markers.template;
        markerTemplate.width = 15;
        markerTemplate.height = 15;

        // Animate chart data

        let final_count = 0;

        chart_data = (chart_data);
        $.each(chart_data, function (k, item) {
            final_count += +item.sentiment_count;
        });

        // label.text = "20,000,000K /n" + "NGN";

    });
}

function donut2() {
    am4core.ready(function () {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("amchart_donut2", am4charts.PieChart);

        // Add data
        chart.data = [{
            "country": "Lithuania",
            "amount": 501.9
        }, {
            "country": "Czechia",
            "amount": 301.9
        }, {
            "country": "Ireland",
            "amount": 201.1
        }, {
            "country": "Germany",
            "amount": 165.8
        }
        ];

        // Set inner radius
        chart.innerRadius = am4core.percent(50);

        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "amount";
        pieSeries.dataFields.category = "";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;

        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;

        var label = chart.seriesContainer.createChild(am4core.Label);
        label.text = "0";
        label.horizontalCenter = "middle";
        label.verticalCenter = "middle";
        label.fontSize = 15;
        label.text = "20,000,000K \n" + "NGN";

    }); // end am4core.ready()
}

function donut3() {
    var chart = am4core.create("amchart_donut3", am4charts.PieChart);

    // Add data
    chart.data = [{
        "loan": "citibank Nigeria Limited",
        "amount": 501.9
    }, {
        "loan": "Nigeria Bank",
        "amount": 301.9
    }, {
        "loan": "Kenera Nigeria Limited",
        "amount": 201.1
    }, {
        "loan": "ban of Nigeria",
        "amount": 165.8
    }
    ];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "amount";
    pieSeries.dataFields.category = "loan";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

    chart.legend = new am4charts.Legend();
    // chart.legend.position = "right";
    // chart.legendSettings.itemValueText = "[bold]{valueY}[/bold]";

    chart.innerRadius = am4core.percent(60);

    var label = pieSeries.createChild(am4core.Label);
    label.text = "${values.value.sum}";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 10;
    label.text = "20,000,000K \n" + "NGN";
}

function barChart() {
    am4core.ready(function () {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end



        var chart = am4core.create('bar_chart', am4charts.XYChart)
        // chart.colors.step = 40;

        chart.legend = new am4charts.Legend()
        chart.legend.position = 'top'
        chart.legend.paddingBottom = 20
        chart.legend.labels.template.maxWidth = 95

        var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
        xAxis.dataFields.category = 'month'
        xAxis.renderer.cellStartLocation = 0.1
        xAxis.renderer.cellEndLocation = 0.9
        xAxis.renderer.grid.template.location = 0;

        var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
        yAxis.min = 0;

        function createSeries(value, name) {
            var series = chart.series.push(new am4charts.ColumnSeries())
            series.dataFields.valueY = value
            series.dataFields.categoryX = 'month'
            series.name = name
            series.tooltip.getFillFromObject = false;
            series.tooltip.label.propertyFields.fill = "payment";
            series.tooltip.background.propertyFields.stroke = "color";

            // --------------

            series.columns.template.tooltipText = "[#ff121f font-size: 15px]{name} in {categoryX}:\n[/][#f56ff font-size: 20px]{valueY}[/] [#ff6f]{additional}[/]"
            tooltipX = am4core.percent(100)
            tooltipY = am4core.percent(0)
            series.columns.template.propertyFields.fillOpacity = "fillOpacity";
            series.columns.template.propertyFields.strokeWidth = "strokeWidth";
            series.columns.template.propertyFields.strokeDasharray = "columnDash";
            series.tooltip.label.textAlign = "middel";
            // --------------

            series.events.on("hidden", arrangeColumns);
            series.events.on("shown", arrangeColumns);

            // var bullet = series.bullets.push(new am4charts.LabelBullet())
            // bullet.interactionsEnabled = false
            // bullet.dy = -10;
            // bullet.label.text = '{valueY}'
            // bullet.label.fill = am4core.color('#222222')
            // chart.maskBullets = false;

            return series;
        }

        chart.data = [
            {
                month: 'Jan',
                payment: 40,
                other_payments: 55

            },
            {
                month: 'Feb',
                payment: 30,
                other_payments: 78

            },
            {
                month: 'Mar',
                payment: 27,
                other_payments: 40

            },
            {
                month: 'Apr',
                payment: 50,
                other_payments: 33

            },
            {
                month: 'May',
                payment: 50,
                other_payments: 33

            },
            {
                month: 'Jun',
                payment: 50,
                other_payments: 33

            },
            {
                month: 'Jul',
                payment: 50,
                other_payments: 33

            },
            {
                month: 'Aug',
                payment: 50,
                other_payments: 33

            },
            {
                month: 'Sept',
                payment: 50,
                other_payments: 33

            },
            {
                month: 'Oct',
                payment: 50,
                other_payments: 33

            },
            {
                month: 'Nov',
                payment: 50,
                other_payments: 33

            },
            {
                month: 'Dec',
                payment: 50,
                other_payments: 33

            }
        ]
        chart.colors.list = [
            am4core.color("#2CD9C5"),
            am4core.color("#FD7979")
        ];

        createSeries('payment', 'Payment');
        createSeries('other_payments', 'Other Paymants');

        function arrangeColumns() {

            var series = chart.series.getIndex(0);

            var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
            if (series.dataItems.length > 1) {
                var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
                var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
                var delta = ((x1 - x0) / chart.series.length) * w;
                if (am4core.isNumber(delta)) {
                    var middle = chart.series.length / 2;

                    var newIndex = 0;
                    chart.series.each(function (series) {
                        if (!series.isHidden && !series.isHiding) {
                            series.dummyData = newIndex;
                            newIndex++;
                        }
                        else {
                            series.dummyData = chart.series.indexOf(series);
                        }
                    })
                    var visibleCount = newIndex;
                    var newMiddle = visibleCount / 2;

                    chart.series.each(function (series) {
                        var trueIndex = chart.series.indexOf(series);
                        var newIndex = series.dummyData;

                        var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                        series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                        series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);

                    })
                }
            }
        }

    }); // end am4core.ready()
}

function barChart2() {
    am4core.ready(function () {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("barChart2", am4charts.XYChart);

        // Export
        // chart.exporting.menu = new am4core.ExportMenu();

        // Data for both series
        var data = [
            {
                month: 'Jan',
                payment: 40
            },
            {
                month: 'Feb',
                payment: 30
            },
            {
                month: 'Mar',
                payment: 27
            },
            {
                month: 'Apr',
                payment: 60
            },
            {
                month: 'May',
                payment: 65
            },
            {
                month: 'Jun',
                payment: 14
            },
            {
                month: 'Jul',
                payment: 67
            },
            {
                month: 'Aug',
                payment: 99
            },
            {
                month: 'Sept',
                payment: 78
            },
            {
                month: 'Oct',
                payment: 32
            },
            {
                month: 'Nov',
                payment: 69
            },
            {
                month: 'Dec',
                payment: 45
            }
        ]

        /* Create axes */
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "month";
        categoryAxis.renderer.minGridDistance = 30;

        /* Create value axis */
        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        /* Create series */
        chart.colors.list = [
            am4core.color("#2CD9C5")
        ];
        var columnSeries = chart.series.push(new am4charts.ColumnSeries());
        columnSeries.name = "payment";
        columnSeries.dataFields.valueY = "payment";
        columnSeries.dataFields.categoryX = "month";

        columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
        columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
        columnSeries.columns.template.propertyFields.stroke = "stroke";
        columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
        columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
        columnSeries.tooltip.label.textAlign = "middle";

        var lineSeries = chart.series.push(new am4charts.LineSeries());
        lineSeries.name = "Expenses";
        lineSeries.dataFields.valueY = "payment";
        lineSeries.dataFields.categoryX = "month";

        lineSeries.stroke = am4core.color("#999999");
        lineSeries.strokeWidth = 3;
        lineSeries.propertyFields.strokeDasharray = "lineDash";
        lineSeries.tooltip.label.textAlign = "middle";

        var bullet = lineSeries.bullets.push(new am4charts.Bullet());
        bullet.fill = am4core.color("#dss44"); // tooltips grab fill from parent by default
        bullet.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"


        var bullet = columnSeries.bullets.push(new am4charts.LabelBullet());
        bullet.interactionsEnabled = false
        bullet.dy = -10;
        bullet.label.text = '{valueY}M'
        bullet.label.fill = am4core.color('#222222')
        chart.maskBullets = false;

        var circle = bullet.createChild(am4core.Circle);
        circle.radius = 4;
        circle.dy = 40;
        circle.fill = am4core.color("#fff");
        circle.strokeWidth = 3;

        chart.data = data;

    }); // end am4core.ready()
}
// apex chart
function apexBarChart() {
    var options = {
        chart: {
            type: 'bar'
        },
        series: [{
            name: 'sales',
            data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
        }],
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    }

    var chart = new ApexCharts(document.querySelector("#apex_bar_chart"), options);

    chart.render();
}

function apexBarChart2() {
    var element = document.getElementById("apex_bar_chart2");
    var height = '100px';
    var labelColor = 'gray';
    var borderColor = 'gray';
    var baseColor = 'gray';
    var secondaryColor = 'gray';


    var options = {
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105]
        }],
        chart: {
            fontFamily: 'inherit',
            type: 'bar',
            height: height,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: ['30%'],
                borderRadius: 4
            },
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            },
            labels: {
                style: {
                    colors: labelColor,
                    fontSize: '12px'
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: labelColor,
                    fontSize: '12px'
                }
            }
        },
        fill: {
            opacity: 1
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                    value: 0
                }
            }
        },
        tooltip: {
            style: {
                formatter: function (val) {
                    return "$" + val + " thousands"
                }
            }
        },
        colors: [baseColor, secondaryColor],
        grid: {
            borderColor: borderColor,
            strokeDashArray: 4,
            yaxis: {
                lines: {
                    show: true
                }
            }
        }
    };

    var chart = new ApexCharts(element, options);
    chart.render();
}

function apexDonut() {
    let value1 = 10;
    let name = "aman";
    var options = {
        series: [44],
        chart: {
            type: 'donut',
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            name
                        },
                        value: {
                            value1
                        }
                    }
                },
                customScale: 0.8
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 20
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    var chart = new ApexCharts(document.querySelector("#apex_donut_chart"), options);
    chart.render();
}

function apexDonut2() {
    var options = {
        labels: ["Installment"],
        series: [65],
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                },
                dataLabels: {
                    name: {
                        show: true,
                    },
                    value: {
                        fontSize: "30px",
                        show: true,
                        formatter: function (val, opt) {
                            return "65/100"
                        },
                    }
                }
            },
        },
        //   labels: ['Installment'],
    };

    var chart = new ApexCharts(document.querySelector("#apex_donut_chart2"), options);
    chart.render();
}

function apexDonut3() {
    var element = document.getElementById("apex_donut_chart3");
    var height = 100;
    var options = {
        labels: ["Total Members"],
        series: [74],
        chart: {
            fontFamily: 'inherit',
            height: height,
            type: 'radialBar',
            offsetY: 20
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,

                hollow: {
                    margin: 0,
                    size: "70%"
                },
                dataLabels: {
                    showOn: "always",
                    name: {
                        show: true,
                        fontSize: "13px",
                        fontWeight: "700",
                        offsetY: -5,
                        color: 'green'
                    },
                    value: {
                        color: 'green',
                        fontSize: "30px",
                        fontWeight: "700",
                        offsetY: -40,
                        show: true
                    }
                },
                track: {
                    background: 'green',
                    strokeWidth: '100%'
                }
            }
        },
        colors: ['green'],
        stroke: {
            lineCap: "round",
        }
    };

    var chart = new ApexCharts(element, options);
    chart.render();
}

function test() {
    console.log($('.test li').length);
    console.log($("[class^='test']").find('li'));
}
sudo su "enter"
system_password "enter"
chmod -R 777 www "enter"

root@hb-trainee:/home/hb# cd /var/www
root@hb-trainee:/var/www# mkdir aman_repo
root@hb-trainee:/var/www# chmod -R 777 aman_repo

// to config details like user name and email   
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
