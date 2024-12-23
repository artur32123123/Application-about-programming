/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://application-about-programming/./src/styles.scss?");

/***/ }),

/***/ "./src/accordion.js":
/*!**************************!*\
  !*** ./src/accordion.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nvar acc = document.getElementsByClassName(\"accordion\");\nvar i;\n\nfor (i = 0; i < acc.length; i++) {\n  acc[i].addEventListener(\"click\", function() {\n    this.classList.toggle(\"active\");\n    var panel = this.nextElementSibling;\n    if (panel.style.maxHeight) {\n      panel.style.maxHeight = null;\n    } else {\n      panel.style.maxHeight = panel.scrollHeight + \"px\";\n    }\n  });\n}\n\n//# sourceURL=webpack://application-about-programming/./src/accordion.js?");

/***/ }),

/***/ "./src/grafic.js":
/*!***********************!*\
  !*** ./src/grafic.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  var element = document.getElementById(\"chartdiv1\");\n  if (element) {\n    let algorithm = {\n      \"binary\": 'binarySearch',\n      \"linear\": 'linearSort',\n      \"bubble\": 'bubbleSort',\n      \"quick\": 'insertionSort',\n      \"huffman\": 'mergeSort',\n    }\n\n    var root = am5.Root.new(\"chartdiv1\");\n    let sas = document.getElementById('sas')\n    let input = document.getElementById('arrayCount');\n    let button = document.getElementById('button');\n    let select = document.getElementById('city-select');\n    let selectValue;\n    function getValue() {\n      if (input.value <= 1000 && input.value > 0) {\n        var array = parseInt(input.value);\n        input.value = ''\n      } else {\n        alert('Введите число от 1 до 1000')\n        input.value = ''\n      }\n      return array\n    }\n    \n    button.addEventListener('click', () => {\n      let arrayCount = getValue()\n      if (arrayCount) {\n        selectValue = select.value\n        if (selectValue && arrayCount) {\n          useBinarySearch([selectValue, arrayCount]);\n        } else {\n          console.error('Выберите алгоритм сортировки и введите количество элементов в массиве');\n        }\n      }\n    })\n    \n    function useBinarySearch(array) {\n      var data = []\n      var chart = root.container.children.push(am5xy.XYChart.new(root, {\n        panX: true,\n        panY: true,\n        wheelX: \"panX\",\n        wheelY: \"zoomX\",\n        pinchZoomX: true,\n        paddingLeft: 0\n      }));\n    \n    \n      root.setThemes([\n        am5themes_Animated.new(root)\n      ]);\n    \n    \n      let algoritmValue = algorithm[array[0]]\n    \n      for (var i = 0; i < array[1]; i++) {\n        let value1;\n        switch (algoritmValue) {\n          case 'binarySearch':\n            value1 = Math.log(i);\n            break;\n          case 'linearSort':\n            value1 = i;\n            break;\n          case 'bubbleSort':\n            value1 = i * Math.log(i);\n            break;\n          case 'insertionSort':\n            value1 = i ** 2;\n            break;\n          case 'mergeSort':\n            value1 = i ** 3;\n            break;\n          default:\n            console.error('Не балуйся, выбери алгоритм!');\n            continue; \n        }\n        data.push({\n          category: i,\n          value1: value1\n        });\n      }\n    \n      var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {\n        min: 0,\n        max: 1000,\n        renderer: am5xy.AxisRendererY.new(root, {})\n      }));\n    \n      var xAxis = chart.xAxes.push(\n        am5xy.CategoryAxis.new(root, {\n          renderer: am5xy.AxisRendererX.new(root, {}),\n          categoryField: \"category\"\n        })\n      );\n    \n      var series1 = chart.series.push(\n        am5xy.LineSeries.new(root, {\n          name: \"Series\",\n          xAxis: xAxis,\n          yAxis: yAxis,\n          valueYField: \"value1\",\n          categoryXField: \"category\"\n        })\n      );\n    \n      button.addEventListener('click', () => {\n        resetAsixes()\n      })\n      function resetAsixes() {\n        xAxis.data.setAll([]);\n        series1.data.setAll([]);\n      }\n    \n      xAxis.data.setAll(data);\n      series1.data.setAll(data);\n    \n      chart.set(\"cursor\", am5xy.XYCursor.new(root, {\n        behavior: \"zoomX\"\n      }));\n    \n    \n      series1.appear(5000);\n      chart.appear(1500, 100);\n    }\n  } else {\n      console.error(\"Element with ID 'chartdiv1' not found.\");\n  }\n});\n\n\n\n\n//# sourceURL=webpack://application-about-programming/./src/grafic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grafic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grafic.js */ \"./src/grafic.js\");\n/* harmony import */ var _programing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./programing.js */ \"./src/programing.js\");\n/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.js */ \"./src/accordion.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n\n\n\n\n\n//# sourceURL=webpack://application-about-programming/./src/index.js?");

/***/ }),

/***/ "./src/programing.js":
/*!***************************!*\
  !*** ./src/programing.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    var element = document.getElementById(\"chartdiv\");\n    if (element) {\n     am5.ready(function () {\n\n    var root = am5.Root.new(\"chartdiv\");\n    \n    root.setThemes([\n        am5themes_Responsive.new(root)\n    ]);\n\n    var chart = root.container.children.push(\n        am5percent.PieChart.new(root, {\n            endAngle: 270\n        })\n    );\n\n    var series = chart.series.push(\n        am5percent.PieSeries.new(root, {\n            valueField: \"value\",\n            categoryField: \"category\",\n            endAngle: 270\n        })\n    );\n\n    series.states.create(\"hidden\", {\n        endAngle: -90\n    });\n\n    series.data.setAll([{\n        category: \"Python\",\n        value: 18,\n    }, {\n        category: \"JavaScript\",\n        value: 12\n    }, {\n        category: \"Java\",\n        value: 11\n    }, {\n        category: \"Go\",\n        value: 10\n    }, {\n        category: \"C++\",\n        value: 9\n    }, {\n        category: \"TypeScript\",\n        value: 8\n    }, {\n        category: \"PHP\",\n        value: 6\n    }, {\n        category: \"C\",\n        value: 5\n    }, {\n        category: \"C#\",\n        value: 4\n    }, {\n        category: \"Ruby\",\n        value: 3\n    },  {\n        category: \"Остальные\",\n        value: 14\n    }, \n    ]);\n\n    series.appear(1500, 300);\n\n});\n    } else {\n        console.error(\"Element with ID 'chartdiv' not found.\");\n    }\n});\n\n\n//# sourceURL=webpack://application-about-programming/./src/programing.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;