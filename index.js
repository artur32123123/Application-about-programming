
//     am5.ready(function () {

//     var root = am5.Root.new("chartdiv");
    
//     root.setThemes([
//         am5themes_Responsive.new(root)
//     ]);

//     var chart = root.container.children.push(
//         am5percent.PieChart.new(root, {
//             endAngle: 270
//         })
//     );

//     var series = chart.series.push(
//         am5percent.PieSeries.new(root, {
//             valueField: "value",
//             categoryField: "category",
//             endAngle: 270
//         })
//     );

//     series.states.create("hidden", {
//         endAngle: -90
//     });

//     series.data.setAll([{
//         category: "Python",
//         value: 18,
//     }, {
//         category: "JavaScript",
//         value: 12
//     }, {
//         category: "Java",
//         value: 11
//     }, {
//         category: "Go",
//         value: 10
//     }, {
//         category: "C++",
//         value: 9
//     }, {
//         category: "TypeScript",
//         value: 8
//     }, {
//         category: "PHP",
//         value: 6
//     }, {
//         category: "C",
//         value: 5
//     }, {
//         category: "C#",
//         value: 4
//     }, {
//         category: "Ruby",
//         value: 3
//     },  {
//         category: "Остальные",
//         value: 14
//     }, 
//     ]);

//     series.appear(1000, 300);

// });