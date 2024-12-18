let algorithm = {
<<<<<<< HEAD
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
=======
  "binary": binarySearch,
  "selectionSort": 'selectionSort',
  "insertionSort": 'insertionSort',
  "mergeSort": 'mergeSort',
}

let input = document.getElementById('arrayCount');
let button = document.getElementById('button');
let select = document.getElementById('city-select');

button.addEventListener('click', () => {
  let arrayCount = getValue()
  if (arrayCount) {
    const numbers = Array.from({ length: arrayCount }, (_, index) => index + 1);
    var selectValue = select.value
    let result = algorithm[selectValue](numbers)
    console.log(result);
    
  }
})

// if (result !== -1) {
//   console.log(`Элемент найден на индексе: ${result}`);
// } else {
//   console.log('Элемент не найден');
// }

>>>>>>> 2495e795e73df462f607cf62056f075f207a45e3
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

function binarySearch(arr) {
  let count = 0
  let target = arr.length
  // let result = {
  //   'count': count,
  //   'index': target
  // }
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
<<<<<<< HEAD
=======
    // result['count'] += 1
>>>>>>> 2495e795e73df462f607cf62056f075f207a45e3
    count += 1
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return count;
<<<<<<< HEAD
=======
      // return [result];
>>>>>>> 2495e795e73df462f607cf62056f075f207a45e3
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

<<<<<<< HEAD
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
=======
console.log(Math.floor( Math.log(100)));

//                                АЛГОРИТМЫ


var data = []
for (var i = 0; i < 362; i++) {
  // i = i * 100
  // i = i ** 2
  data.push({
    category: i,
    value1: i  // Значение value1 будет от 1 до 100
  });
}
>>>>>>> 2495e795e73df462f607cf62056f075f207a45e3


  root.setThemes([
    am5themes_Animated.new(root)
  ]);


  let algoritmValue = algorithm[array[0]]
  console.log(algoritmValue);

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