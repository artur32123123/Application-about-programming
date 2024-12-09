var root = am5.Root.new("chartdiv1");

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


//                                АЛГОРИТМЫ








let input = document.querySelector('input');
var arrayCount;
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (input.value <= 1000 && input.value > 0) { 
      arrayCount = parseInt(input.value);
      input.value = ''
    } else { 
      alert('Введите число от 1 до 1000')
      input.value = '' 
    }
  }
  console.log(arrayCount);
  let algorithm = {
    // "bubbleSort": binarySearch(), 
    "selectionSort": 'selectionSort',
    "insertionSort": 'insertionSort',
    "mergeSort": 'mergeSort',
  }
  const numbers = Array.from({ length: arrayCount }, (_, index) => index + 1);
  console.log(numbers);
})


// for (arrayCount)
const sortedArray = [];


function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const target = 9;
const result = binarySearch(sortedArray, target);

if (result !== -1) {
  console.log(`Элемент найден на индексе: ${result}`);
} else {
  console.log('Элемент не найден');
}








//                                АЛГОРИТМЫ
var data = []
for (var i = 0; i < 1000; i++) {
  data.push({
    category: i,
    value1: i  // Значение value1 будет от 1 до 100
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
xAxis.data.setAll(data);

var series1 = chart.series.push(
  am5xy.LineSeries.new(root, {
    name: "Series",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value1",
    categoryXField: "category"
  })
);
chart.set("cursor", am5xy.XYCursor.new(root, {
  behavior: "zoomX"
}));
var scrollbarX = am5xy.XYChartScrollbar.new(root, {
  orientation: "horizontal",
  height: 50
});

series1.data.setAll(data);


series1.appear(1000);
chart.appear(1000, 100);

; // end am5.ready()