(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MyLibrary"] = factory();
	else
		root["MyLibrary"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // eslint-disable-line

var elementClass = 'react-edu-carousel__element';
var containerClass = 'react-edu-carousel__container';
var buttonClass = 'react-edu-carousel__button';
var DIRECTION_LEFT = 0;
var DIRECTION_RIGHT = 2;
var DIRECTION_UP = 1;
var DIRECTION_DOWN = 3;
var defaultSpeed = 500;
var defaultIterval = 2000;
var defaultTimingFunction = 'ease-in-out';
var defaultDirection = DIRECTION_RIGHT;

function mouseHandler(contId, onSwipe) {
  var _this = this;

  var swipeDistance = 100;
  var container = document.getElementById(contId);
  var startPoint = {};
  this.mouseActive = false;
  container.addEventListener('mousedown', function (event) {
    _this.mouseActive = true;
    event.preventDefault();
    startPoint.x = event.pageX;
    startPoint.y = event.pageY;
  }, false);
  container.addEventListener('mouseup', function () {
    _this.mouseActive = false;
  });
  container.addEventListener('mouseout', function () {
    _this.mouseActive = false;
  });
  container.addEventListener('mousemove', function (event) {
    if (!_this.mouseActive) return;
    event.preventDefault();
    event.stopPropagation();
    var newPoint = {};
    newPoint.pageX = event.pageX;
    newPoint.pageY = event.pageY;
    var offsetX = newPoint.pageX - startPoint.x;
    var offsetY = newPoint.pageY - startPoint.y;

    if (Math.abs(offsetX) > swipeDistance) {
      if (offsetX > 0) {
        onSwipe(DIRECTION_RIGHT);
      }

      if (offsetX < 0) {
        onSwipe(DIRECTION_LEFT);
      }

      startPoint.x = newPoint.pageX;
      startPoint.y = newPoint.pageY;
      return;
    }

    if (Math.abs(offsetY) > swipeDistance) {
      if (offsetY < 0) {
        onSwipe(DIRECTION_UP);
      }

      if (offsetY > 0) {
        onSwipe(DIRECTION_DOWN);
      }

      startPoint.x = newPoint.pageX;
      startPoint.y = newPoint.pageY;
    }
  }, false);
} // класик для обработки свайпа


function touchHandler(contId, onSwipe) {
  var swipeDistance = 100;
  var container = document.getElementById(contId);
  var startPoint = {};
  container.addEventListener('touchstart', function (event) {
    event.preventDefault();
    event.stopPropagation();
    startPoint.x = event.changedTouches[0].pageX;
    startPoint.y = event.changedTouches[0].pageY;
  }, false);
  container.addEventListener('touchmove', function (event) {
    event.preventDefault();
    event.stopPropagation();
    var newPoint = event.changedTouches[0];
    var offsetX = newPoint.pageX - startPoint.x;
    var offsetY = newPoint.pageY - startPoint.y;

    if (Math.abs(offsetX) > swipeDistance) {
      if (offsetX > 0) {
        onSwipe(DIRECTION_RIGHT);
      }

      if (offsetX < 0) {
        onSwipe(DIRECTION_LEFT);
      }

      startPoint.x = newPoint.pageX;
      startPoint.y = newPoint.pageY;
      return;
    }

    if (Math.abs(offsetY) > swipeDistance) {
      if (offsetY < 0) {
        onSwipe(DIRECTION_UP);
      }

      if (offsetY > 0) {
        onSwipe(DIRECTION_DOWN);
      }

      startPoint.x = newPoint.pageX;
      startPoint.y = newPoint.pageY;
    }
  }, false);

  this.remove = function () {
    container.removeEventListener('touchstart');
    container.removeEventListener('touchmove');
  };
} // класик для обработки клавы


function keyboardHandler(onPress) {
  document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
      case 37:
        onPress(DIRECTION_LEFT);
        break;

      case 38:
        onPress(DIRECTION_UP);
        break;

      case 39:
        onPress(DIRECTION_RIGHT);
        break;

      case 40:
        onPress(DIRECTION_DOWN);
        break;

      default:
        break;
    }
  });
} // чистим транзишены


function clearElementTransition(element) {
  element.style.transitionProperty = '';
  element.style.transitionDuration = '';
  element.style.transitionTimingFunction = '';
} // устанавливаем транзишены


function setElementTransition(element, speed, timingFunction) {
  element.style.transitionDuration = "".concat(speed, "ms");
  element.style.transitionTimingFunction = timingFunction;
} // устанавливаем поизицию


function setElementPosition(element, x, y) {
  element.style.left = "".concat(x, "px");
  element.style.top = "".concat(y, "px");
}

function addButton(containerId, element) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    x: 0,
    y: 0
  };
  var onPress = arguments.length > 3 ? arguments[3] : undefined;
  var container = document.getElementById(containerId);
  setElementPosition(element, position.x, position.y);
  element.addEventListener('click', onPress);
  element.addEventListener('touchstart', onPress);
  container.appendChild(element);
}

function generateButtonControl(containerId) {
  var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    x: 0,
    y: 0
  };
  var onClick = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var auto = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var offset = 70;
  var x = position.x,
      y = position.y;
  var leftButton = document.createElement('div');
  leftButton.classList.add(buttonClass);
  leftButton.classList.add("".concat(buttonClass, "-left"));
  var rightButton = document.createElement('div');
  rightButton.classList.add(buttonClass);
  rightButton.classList.add("".concat(buttonClass, "-right"));
  var playPauseButton = document.createElement('div');
  playPauseButton.classList.add(buttonClass);
  playPauseButton.classList.add(auto === false ? "".concat(buttonClass, "-play") : "".concat(buttonClass, "-pause"));
  addButton(containerId, leftButton, {
    x: x,
    y: y
  }, function () {
    return onClick.nextSlide(0);
  });
  addButton(containerId, rightButton, {
    x: x + offset * 2,
    y: y
  }, function () {
    return onClick.nextSlide(2);
  });
  addButton(containerId, playPauseButton, {
    x: x + offset,
    y: y
  }, function () {
    playPauseButton.classList.toggle("".concat(buttonClass, "-play"));
    playPauseButton.classList.toggle("".concat(buttonClass, "-pause"));
    onClick.playPause();
  });
} // двигаем слайды


function moveSlides() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    // дефолт значения
    initX: 200,
    initY: 0,
    destX: -200,
    destY: 0,
    speed: 2000,
    timingFunction: 'ease-out'
  };
  var currentElement = arguments.length > 1 ? arguments[1] : undefined;
  var nextElement = arguments.length > 2 ? arguments[2] : undefined;
  var onFinish = arguments.length > 3 ? arguments[3] : undefined;
  clearElementTransition(nextElement);
  clearElementTransition(currentElement);
  setElementPosition(nextElement, params.initX, params.initY);
  var t = getComputedStyle(nextElement).left; // грязный хак

  t = getComputedStyle(nextElement).top; // грязный хак

  t.trim();
  setElementTransition(nextElement, params.speed, params.timingFunction);
  setElementTransition(currentElement, params.speed, params.timingFunction);
  setElementPosition(nextElement, 0, 0);
  setElementPosition(currentElement, params.destX, params.destY);
  setTimeout(function () {
    clearElementTransition(nextElement);
    clearElementTransition(currentElement);
    setElementPosition(currentElement, params.initX, params.initY);
    onFinish();
  }, params.speed);
} // выдаёт координаты для следующего слайдика в зависимости от направления


function nextCoords(direction, width, height) {
  var params = {
    initX: 0,
    initY: 0,
    destX: 0,
    destY: 0
  };

  switch (direction) {
    case DIRECTION_LEFT:
      params.initX = width;
      params.destX = -width;
      break;

    case DIRECTION_RIGHT:
      params.initX = -width;
      params.destX = width;
      break;

    case DIRECTION_DOWN:
      params.initY = -height;
      params.destY = height;
      break;

    case DIRECTION_UP:
      params.initY = height;
      params.destY = -height;
      break;

    default:
      break;
  }

  return params;
}

function Carousel(containerId) {
  var _this2 = this;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  this.direction = config.direction < 4 && config.direction >= 0 ? config.direction : defaultDirection;
  this.speed = config.speed > 50 ? config.speed : defaultSpeed;
  this.timingFunction = config.timingFunction || defaultTimingFunction;
  this.auto = config.auto || false;
  this.interval = config.interval > config.speed ? config.interval : config.speed || defaultIterval;
  this.array = [];
  this.inTransition = false;
  this.showButtons = config.showButtons || false;
  var container = document.getElementById(containerId);
  if (container == null) throw new Error('Container not found');
  container.classList.add(containerClass);

  var _getComputedStyle = getComputedStyle(container),
      width = _getComputedStyle.width,
      height = _getComputedStyle.height;

  this.containerWidth = parseInt(width, 10);
  this.containerHeight = parseInt(height, 10);

  this.getNextElement = function () {
    var t = _this2.array.pop();

    _this2.array.unshift(t);

    return t;
  };

  this.getPreviousElement = function () {
    var t = _this2.array.shift();

    _this2.array.push(t);

    return t;
  };

  this.nextSlide = function (dir) {
    if (_this2.inTransition) return;
    var direction = dir === undefined ? _this2.direction : dir;

    var cfg = _objectSpread({}, nextCoords(direction, _this2.containerWidth, _this2.containerHeight), {
      timingFunction: _this2.timingFunction,
      speed: _this2.speed
    });

    _this2.inTransition = true;

    if (direction === DIRECTION_LEFT || direction === DIRECTION_UP) {
      moveSlides(cfg, _this2.array[0], _this2.getNextElement(), function () {
        _this2.inTransition = false;
      });
    } else {
      var t = _this2.getPreviousElement();

      moveSlides(cfg, t, _this2.array[0], function () {
        _this2.inTransition = false;
      });
    }
  }; // инициализация;


  this.array = Array.from(container.children);
  this.array.forEach(function (item) {
    item.classList.add(elementClass);
    item.style.left = "".concat(_this2.containerWidth, "px");
    item.style.top = "".concat(_this2.containerHeight, "px");
  });
  this.array[0].style.left = 0;
  this.array[0].style.top = 0;
  setInterval(function () {
    if (!_this2.inTransition && _this2.auto) {
      _this2.nextSlide(_this2.direction);
    }
  }, this.interval);
  touchHandler(containerId, function (direction) {
    return _this2.nextSlide(direction);
  });
  mouseHandler(containerId, function (direction) {
    return _this2.nextSlide(direction);
  });
  keyboardHandler(function (direction) {
    return _this2.nextSlide(direction);
  });

  if (this.showButtons) {
    generateButtonControl(containerId, {
      x: this.containerWidth / 2 - 100,
      y: this.containerHeight - 70
    }, {
      nextSlide: this.nextSlide,
      playPause: function playPause() {
        _this2.auto = !_this2.auto;
      }
    }, this.auto);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n> :root{\r\n|     --react-edu-button-play-color: #d33b3b;\r\n|     --react-edu-button-color: rgb(53, 53, 53);\r");

/***/ })

/******/ });
});
//# sourceMappingURL=bundle.js.map