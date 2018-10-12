/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Carousel; });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // eslint-disable-line\n\nvar elementClass = 'react-edu-carousel__element';\nvar containerClass = 'react-edu-carousel__container';\nvar buttonClass = 'react-edu-carousel__button';\nvar DIRECTION_LEFT = 0;\nvar DIRECTION_RIGHT = 2;\nvar DIRECTION_UP = 1;\nvar DIRECTION_DOWN = 3;\nvar defaultSpeed = 500;\nvar defaultIterval = 2000;\nvar defaultTimingFunction = 'ease-in-out';\nvar defaultDirection = DIRECTION_RIGHT;\n\nfunction mouseHandler(contId, onSwipe) {\n  var _this = this;\n\n  var swipeDistance = 100;\n  var container = document.getElementById(contId);\n  var startPoint = {};\n  this.mouseActive = false;\n  container.addEventListener('mousedown', function (event) {\n    _this.mouseActive = true;\n    event.preventDefault();\n    startPoint.x = event.pageX;\n    startPoint.y = event.pageY;\n  }, false);\n  container.addEventListener('mouseup', function () {\n    _this.mouseActive = false;\n  });\n  container.addEventListener('mouseout', function () {\n    _this.mouseActive = false;\n  });\n  container.addEventListener('mousemove', function (event) {\n    if (!_this.mouseActive) return;\n    event.preventDefault();\n    event.stopPropagation();\n    var newPoint = {};\n    newPoint.pageX = event.pageX;\n    newPoint.pageY = event.pageY;\n    var offsetX = newPoint.pageX - startPoint.x;\n    var offsetY = newPoint.pageY - startPoint.y;\n\n    if (Math.abs(offsetX) > swipeDistance) {\n      if (offsetX > 0) {\n        onSwipe(DIRECTION_RIGHT);\n      }\n\n      if (offsetX < 0) {\n        onSwipe(DIRECTION_LEFT);\n      }\n\n      startPoint.x = newPoint.pageX;\n      startPoint.y = newPoint.pageY;\n      return;\n    }\n\n    if (Math.abs(offsetY) > swipeDistance) {\n      if (offsetY < 0) {\n        onSwipe(DIRECTION_UP);\n      }\n\n      if (offsetY > 0) {\n        onSwipe(DIRECTION_DOWN);\n      }\n\n      startPoint.x = newPoint.pageX;\n      startPoint.y = newPoint.pageY;\n    }\n  }, false);\n} // класик для обработки свайпа\n\n\nfunction touchHandler(contId, onSwipe) {\n  var swipeDistance = 100;\n  var container = document.getElementById(contId);\n  var startPoint = {};\n  container.addEventListener('touchstart', function (event) {\n    event.preventDefault();\n    event.stopPropagation();\n    startPoint.x = event.changedTouches[0].pageX;\n    startPoint.y = event.changedTouches[0].pageY;\n  }, false);\n  container.addEventListener('touchmove', function (event) {\n    event.preventDefault();\n    event.stopPropagation();\n    var newPoint = event.changedTouches[0];\n    var offsetX = newPoint.pageX - startPoint.x;\n    var offsetY = newPoint.pageY - startPoint.y;\n\n    if (Math.abs(offsetX) > swipeDistance) {\n      if (offsetX > 0) {\n        onSwipe(DIRECTION_RIGHT);\n      }\n\n      if (offsetX < 0) {\n        onSwipe(DIRECTION_LEFT);\n      }\n\n      startPoint.x = newPoint.pageX;\n      startPoint.y = newPoint.pageY;\n      return;\n    }\n\n    if (Math.abs(offsetY) > swipeDistance) {\n      if (offsetY < 0) {\n        onSwipe(DIRECTION_UP);\n      }\n\n      if (offsetY > 0) {\n        onSwipe(DIRECTION_DOWN);\n      }\n\n      startPoint.x = newPoint.pageX;\n      startPoint.y = newPoint.pageY;\n    }\n  }, false);\n\n  this.remove = function () {\n    container.removeEventListener('touchstart');\n    container.removeEventListener('touchmove');\n  };\n} // класик для обработки клавы\n\n\nfunction keyboardHandler(onPress) {\n  document.addEventListener('keydown', function (event) {\n    switch (event.keyCode) {\n      case 37:\n        onPress(DIRECTION_LEFT);\n        break;\n\n      case 38:\n        onPress(DIRECTION_UP);\n        break;\n\n      case 39:\n        onPress(DIRECTION_RIGHT);\n        break;\n\n      case 40:\n        onPress(DIRECTION_DOWN);\n        break;\n\n      default:\n        break;\n    }\n  });\n} // чистим транзишены\n\n\nfunction clearElementTransition(element) {\n  element.style.transitionProperty = '';\n  element.style.transitionDuration = '';\n  element.style.transitionTimingFunction = '';\n} // устанавливаем транзишены\n\n\nfunction setElementTransition(element, speed, timingFunction) {\n  element.style.transitionDuration = \"\".concat(speed, \"ms\");\n  element.style.transitionTimingFunction = timingFunction;\n} // устанавливаем поизицию\n\n\nfunction setElementPosition(element, x, y) {\n  element.style.left = \"\".concat(x, \"px\");\n  element.style.top = \"\".concat(y, \"px\");\n}\n\nfunction addButton(containerId, element) {\n  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {\n    x: 0,\n    y: 0\n  };\n  var onPress = arguments.length > 3 ? arguments[3] : undefined;\n  var container = document.getElementById(containerId);\n  setElementPosition(element, position.x, position.y);\n  element.addEventListener('click', onPress);\n  element.addEventListener('touchstart', onPress);\n  container.appendChild(element);\n}\n\nfunction generateButtonControl(containerId) {\n  var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    x: 0,\n    y: 0\n  };\n  var onClick = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var auto = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  var offset = 70;\n  var x = position.x,\n      y = position.y;\n  var leftButton = document.createElement('div');\n  leftButton.classList.add(buttonClass);\n  leftButton.classList.add(\"\".concat(buttonClass, \"-left\"));\n  var rightButton = document.createElement('div');\n  rightButton.classList.add(buttonClass);\n  rightButton.classList.add(\"\".concat(buttonClass, \"-right\"));\n  var playPauseButton = document.createElement('div');\n  playPauseButton.classList.add(buttonClass);\n  playPauseButton.classList.add(auto === false ? \"\".concat(buttonClass, \"-play\") : \"\".concat(buttonClass, \"-pause\"));\n  addButton(containerId, leftButton, {\n    x: x,\n    y: y\n  }, function () {\n    return onClick.nextSlide(0);\n  });\n  addButton(containerId, rightButton, {\n    x: x + offset * 2,\n    y: y\n  }, function () {\n    return onClick.nextSlide(2);\n  });\n  addButton(containerId, playPauseButton, {\n    x: x + offset,\n    y: y\n  }, function () {\n    playPauseButton.classList.toggle(\"\".concat(buttonClass, \"-play\"));\n    playPauseButton.classList.toggle(\"\".concat(buttonClass, \"-pause\"));\n    onClick.playPause();\n  });\n} // двигаем слайды\n\n\nfunction moveSlides() {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    // дефолт значения\n    initX: 200,\n    initY: 0,\n    destX: -200,\n    destY: 0,\n    speed: 2000,\n    timingFunction: 'ease-out'\n  };\n  var currentElement = arguments.length > 1 ? arguments[1] : undefined;\n  var nextElement = arguments.length > 2 ? arguments[2] : undefined;\n  var onFinish = arguments.length > 3 ? arguments[3] : undefined;\n  clearElementTransition(nextElement);\n  clearElementTransition(currentElement);\n  setElementPosition(nextElement, params.initX, params.initY);\n  var t = getComputedStyle(nextElement).left; // грязный хак\n\n  t = getComputedStyle(nextElement).top; // грязный хак\n\n  t.trim();\n  setElementTransition(nextElement, params.speed, params.timingFunction);\n  setElementTransition(currentElement, params.speed, params.timingFunction);\n  setElementPosition(nextElement, 0, 0);\n  setElementPosition(currentElement, params.destX, params.destY);\n  setTimeout(function () {\n    clearElementTransition(nextElement);\n    clearElementTransition(currentElement);\n    setElementPosition(currentElement, params.initX, params.initY);\n    onFinish();\n  }, params.speed);\n} // выдаёт координаты для следующего слайдика в зависимости от направления\n\n\nfunction nextCoords(direction, width, height) {\n  var params = {\n    initX: 0,\n    initY: 0,\n    destX: 0,\n    destY: 0\n  };\n\n  switch (direction) {\n    case DIRECTION_LEFT:\n      params.initX = width;\n      params.destX = -width;\n      break;\n\n    case DIRECTION_RIGHT:\n      params.initX = -width;\n      params.destX = width;\n      break;\n\n    case DIRECTION_DOWN:\n      params.initY = -height;\n      params.destY = height;\n      break;\n\n    case DIRECTION_UP:\n      params.initY = height;\n      params.destY = -height;\n      break;\n\n    default:\n      break;\n  }\n\n  return params;\n}\n\nfunction Carousel(containerId) {\n  var _this2 = this;\n\n  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  this.direction = config.direction < 4 && config.direction >= 0 ? config.direction : defaultDirection;\n  this.speed = config.speed > 50 ? config.speed : defaultSpeed;\n  this.timingFunction = config.timingFunction || defaultTimingFunction;\n  this.auto = config.auto || false;\n  this.interval = config.interval > config.speed ? config.interval : config.speed || defaultIterval;\n  this.array = [];\n  this.inTransition = false;\n  this.showButtons = config.showButtons || false;\n  var container = document.getElementById(containerId);\n  if (container == null) throw new Error('Container not found');\n  container.classList.add(containerClass);\n\n  var _getComputedStyle = getComputedStyle(container),\n      width = _getComputedStyle.width,\n      height = _getComputedStyle.height;\n\n  this.containerWidth = parseInt(width, 10);\n  this.containerHeight = parseInt(height, 10);\n\n  this.getNextElement = function () {\n    var t = _this2.array.pop();\n\n    _this2.array.unshift(t);\n\n    return t;\n  };\n\n  this.getPreviousElement = function () {\n    var t = _this2.array.shift();\n\n    _this2.array.push(t);\n\n    return t;\n  };\n\n  this.nextSlide = function (dir) {\n    if (_this2.inTransition) return;\n    var direction = dir === undefined ? _this2.direction : dir;\n\n    var cfg = _objectSpread({}, nextCoords(direction, _this2.containerWidth, _this2.containerHeight), {\n      timingFunction: _this2.timingFunction,\n      speed: _this2.speed\n    });\n\n    _this2.inTransition = true;\n\n    if (direction === DIRECTION_LEFT || direction === DIRECTION_UP) {\n      moveSlides(cfg, _this2.array[0], _this2.getNextElement(), function () {\n        _this2.inTransition = false;\n      });\n    } else {\n      var t = _this2.getPreviousElement();\n\n      moveSlides(cfg, t, _this2.array[0], function () {\n        _this2.inTransition = false;\n      });\n    }\n  }; // инициализация;\n\n\n  this.array = Array.from(container.children);\n  this.array.forEach(function (item) {\n    item.classList.add(elementClass);\n    item.style.left = \"\".concat(_this2.containerWidth, \"px\");\n    item.style.top = \"\".concat(_this2.containerHeight, \"px\");\n  });\n  this.array[0].style.left = 0;\n  this.array[0].style.top = 0;\n  setInterval(function () {\n    if (!_this2.inTransition && _this2.auto) {\n      _this2.nextSlide(_this2.direction);\n    }\n  }, this.interval);\n  touchHandler(containerId, function (direction) {\n    return _this2.nextSlide(direction);\n  });\n  mouseHandler(containerId, function (direction) {\n    return _this2.nextSlide(direction);\n  });\n  keyboardHandler(function (direction) {\n    return _this2.nextSlide(direction);\n  });\n\n  if (this.showButtons) {\n    generateButtonControl(containerId, {\n      x: this.containerWidth / 2 - 100,\n      y: this.containerHeight - 70\n    }, {\n      nextSlide: this.nextSlide,\n      playPause: function playPause() {\n        _this2.auto = !_this2.auto;\n      }\n    }, this.auto);\n  }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });