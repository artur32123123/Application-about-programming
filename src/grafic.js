

document.addEventListener("DOMContentLoaded", function() {
  var element = document.getElementById("chartdiv1");
  if (element) {
    let algorithm = {
      "binary": 'binarySearch',
      "linear": 'linearSort',
      "bubble": 'bubbleSort',
      "quick": 'insertionSort',
      "huffman": 'mergeSort',
    }

    var root = am5.Root.new("chartdiv1");
    let sas = document.getElementById('sas')
    let input = document.getElementById('arrayCount');
    let button = document.getElementById('button');
    let select = document.getElementById('city-select');
    let selectValue;
    function getValue() {
      if (input.value <= 1000 && input.value > 0) {
        var array = parseInt(input.value);
        input.value = ''
      } else {
        alert('Введите число от 1 до 1000')
        input.value = ''
      }
      return array
    }
    
    button.addEventListener('click', () => {
      let arrayCount = getValue()
      if (arrayCount) {
        selectValue = select.value
        if (selectValue && arrayCount) {
          useBinarySearch([selectValue, arrayCount]);
        } else {
          console.error('Выберите алгоритм сортировки и введите количество элементов в массиве');
        }
      }
    })
    
    function useBinarySearch(array) {
      var data = []
      var chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0
      }));
    
    
      root.setThemes([
        am5themes_Animated.new(root)
      ]);
    
    
      let algoritmValue = algorithm[array[0]]
    
      for (var i = 0; i < array[1]; i++) {
        let value1;
        switch (algoritmValue) {
          case 'binarySearch':
            value1 = 200;
            break;
          case 'binarySearch':
            value1 = Math.log(i);
            break;
          case 'linearSort':
            value1 = i;
            break;
          case 'bubbleSort':
            value1 = i * Math.log(i);
            break;
          case 'insertionSort':
            value1 = i ** 2;
            break;
          case 'mergeSort':
            value1 = i ** 3;
            break;
          default:
            console.error('Ты шо пес делаешь?');
            continue; 
        }
        data.push({
          category: i,
          value1: value1
        });
      }
    
      var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        min: 0,
        max: 1000,
        renderer: am5xy.AxisRendererY.new(root, {})
      }));
    
      var xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {}),
          categoryField: "category"
        })
      );
    
      var series1 = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value1",
          categoryXField: "category"
        })
      );
    
      button.addEventListener('click', () => {
        resetAsixes()
      })
      function resetAsixes() {
        xAxis.data.setAll([]);
        series1.data.setAll([]);
      }
    
      xAxis.data.setAll(data);
      series1.data.setAll(data);
    
      chart.set("cursor", am5xy.XYCursor.new(root, {
        behavior: "zoomX"
      }));
    
    
      series1.appear(5000);
      chart.appear(1500, 100);
    }
  } else {
      console.error("Element with ID 'chartdiv1' not found.");
  }
});


