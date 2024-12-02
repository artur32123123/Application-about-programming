am5.ready(function () {

    var root = am5.Root.new("chartdiv");

    root.setThemes([
        am5themes_Animated.new(root)
    ]);
   
    var chart = root.container.children.push(
        am5percent.PieChart.new(root, {
            endAngle: 270
        })
    );

    var series = chart.series.push(
        am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
            endAngle: 270
        })
    );

    series.states.create("hidden", {
        endAngle: -90
    });

    series.data.setAll([{
        category: "Python",
        value: 18.04 * 36,
    }, {
        category: "C++",
        value: 9.65 * 36
    }, {
        category: "C",
        value: 4.57 * 36
    }, {
        category: "C#",
        value: 3.43 * 36
    }, {
        category: "Java",
        value: 11.77 * 36
    }, {
        category: "JavaScript",
        value: 9.94 * 36
    }, {
        category: "Go",
        value: 10.00 * 36
    }, {
        category: "Ruby",
        value: 4.53 * 36
    },
    {
        category: "TypeScript",
        value: 7.46 * 36
    }, {
        category: "PHP",
        value: 5.48 * 36
    }
    ]);

    series.appear(1000, 300);

});