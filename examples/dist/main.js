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

/***/ "./node_modules/react-edu-carousel/build/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-edu-carousel/build/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/index.js");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./src/consts.js":
      /*!***********************!*\
        !*** ./src/consts.js ***!
        \***********************/

      /*! exports provided: elementClass, containerClass, buttonClass, DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP, DIRECTION_DOWN, defaultSpeed, defaultIterval, defaultTimingFunction, defaultDirection */

      /***/
      function srcConstsJs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "elementClass", function () {
          return elementClass;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "containerClass", function () {
          return containerClass;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "buttonClass", function () {
          return buttonClass;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DIRECTION_LEFT", function () {
          return DIRECTION_LEFT;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DIRECTION_RIGHT", function () {
          return DIRECTION_RIGHT;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DIRECTION_UP", function () {
          return DIRECTION_UP;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DIRECTION_DOWN", function () {
          return DIRECTION_DOWN;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultSpeed", function () {
          return defaultSpeed;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultIterval", function () {
          return defaultIterval;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultTimingFunction", function () {
          return defaultTimingFunction;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultDirection", function () {
          return defaultDirection;
        });

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
        /***/
      },

      /***/
      "./src/index.js":
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/

      /*! exports provided: default */

      /***/
      function srcIndexJs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "default", function () {
          return Carousel;
        });
        /* harmony import */


        var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./consts */
        "./src/consts.js");
        /* harmony import */


        var _mouseHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./mouseHandler */
        "./src/mouseHandler.js");
        /* harmony import */


        var _keyboardHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./keyboardHandler */
        "./src/keyboardHandler.js");
        /* harmony import */


        var _touchHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./touchHandler */
        "./src/touchHandler.js");
        /* harmony import */


        var _logic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./logic */
        "./src/logic.js");

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);

            if (typeof Object.getOwnPropertySymbols === 'function') {
              ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }));
            }

            ownKeys.forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          }

          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var Carousel =
        /*#__PURE__*/
        function () {
          function Carousel(containerId) {
            var _this = this;

            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            _classCallCheck(this, Carousel);

            this.direction = config.direction < 4 && config.direction >= 0 ? config.direction : this.defaultDirection;
            this.speed = config.speed > 50 ? config.speed : this.defaultSpeed;
            this.timingFunction = config.timingFunction || this.defaultTimingFunction;
            this.auto = config.auto || false;
            this.interval = config.interval > config.speed ? config.interval : config.speed || this.defaultIterval;
            this.array = [];
            this.inTransition = false;
            this.showButtons = config.showButtons || false;
            this.container = document.getElementById(containerId);
            if (this.container == null) throw new Error('Container not found');
            this.container.classList.add(_consts__WEBPACK_IMPORTED_MODULE_0__["containerClass"]);

            var _getComputedStyle = getComputedStyle(this.container),
                width = _getComputedStyle.width,
                height = _getComputedStyle.height;

            this.width = width;
            this.height = height;
            this.containerWidth = parseInt(width, 10);
            this.containerHeight = parseInt(height, 10);
            this.array = Array.from(this.container.children);
            this.array.forEach(function (item) {
              item.classList.add(_consts__WEBPACK_IMPORTED_MODULE_0__["elementClass"]);
              item.style.left = "".concat(_this.containerWidth, "px");
              item.style.top = "".concat(_this.containerHeight, "px");
            });
            this.array[0].style.left = 0;
            this.array[0].style.top = 0;
            setInterval(function () {
              if (!_this.inTransition && _this.auto) {
                _this.nextSlide(_this.direction);
              }
            }, this.interval);
            Object(_touchHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(containerId, function (direction) {
              return _this.nextSlide(direction);
            });
            Object(_mouseHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(containerId, function (direction) {
              return _this.nextSlide(direction);
            });
            Object(_keyboardHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(function (direction) {
              return _this.nextSlide(direction);
            });

            if (this.showButtons) {
              Object(_logic__WEBPACK_IMPORTED_MODULE_4__["generateButtonControl"])(containerId, {
                x: this.containerWidth / 2 - 100,
                y: this.containerHeight - 70
              }, {
                nextSlide: function nextSlide(rr) {
                  return _this.nextSlide(rr);
                },
                playPause: function playPause() {
                  _this.auto = !_this.auto;
                }
              }, this.auto);
            }
          }

          _createClass(Carousel, [{
            key: "getNextElement",
            value: function getNextElement() {
              var t = this.array.pop();
              this.array.unshift(t);
              return t;
            }
          }, {
            key: "getPreviousElement",
            value: function getPreviousElement() {
              var t = this.array.shift();
              this.array.push(t);
              return t;
            }
          }, {
            key: "nextSlide",
            value: function nextSlide(dir) {
              var _this2 = this;

              if (this.inTransition) return;
              var direction = dir === undefined ? this.direction : dir;

              var cfg = _objectSpread({}, Object(_logic__WEBPACK_IMPORTED_MODULE_4__["nextCoords"])(direction, this.containerWidth, this.containerHeight), {
                timingFunction: this.timingFunction,
                speed: this.speed
              });

              this.inTransition = true;

              if (direction === this.DIRECTION_LEFT || direction === this.DIRECTION_UP) {
                Object(_logic__WEBPACK_IMPORTED_MODULE_4__["moveSlides"])(cfg, this.array[0], this.getNextElement(), function () {
                  _this2.inTransition = false;
                });
              } else {
                var t = this.getPreviousElement();
                Object(_logic__WEBPACK_IMPORTED_MODULE_4__["moveSlides"])(cfg, t, this.array[0], function () {
                  _this2.inTransition = false;
                });
              }
            }
          }]);

          return Carousel;
        }();
        /***/

      },

      /***/
      "./src/keyboardHandler.js":
      /*!********************************!*\
        !*** ./src/keyboardHandler.js ***!
        \********************************/

      /*! exports provided: default */

      /***/
      function srcKeyboardHandlerJs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "default", function () {
          return keyboardHandler;
        });
        /* harmony import */


        var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./consts */
        "./src/consts.js"); // класик для обработки клавы


        function keyboardHandler(onPress) {
          document.addEventListener('keydown', function (event) {
            switch (event.keyCode) {
              case 37:
                onPress(_consts__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_LEFT"]);
                break;

              case 38:
                onPress(_consts__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_UP"]);
                break;

              case 39:
                onPress(_consts__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_RIGHT"]);
                break;

              case 40:
                onPress(_consts__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_DOWN"]);
                break;

              default:
                break;
            }
          });
        }
        /***/

      },

      /***/
      "./src/logic.js":
      /*!**********************!*\
        !*** ./src/logic.js ***!
        \**********************/

      /*! exports provided: clearElementTransition, setElementTransition, setElementPosition, addButton, generateButtonControl, moveSlides, nextCoords */

      /***/
      function srcLogicJs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "clearElementTransition", function () {
          return clearElementTransition;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "setElementTransition", function () {
          return setElementTransition;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "setElementPosition", function () {
          return setElementPosition;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "addButton", function () {
          return addButton;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "generateButtonControl", function () {
          return generateButtonControl;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "moveSlides", function () {
          return moveSlides;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "nextCoords", function () {
          return nextCoords;
        });
        /* harmony import */


        var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./consts */
        "./src/consts.js");

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
          leftButton.classList.add(_consts__WEBPACK_IMPORTED_MODULE_0__["buttonClass"]);
          leftButton.classList.add("".concat(_consts__WEBPACK_IMPORTED_MODULE_0__["buttonClass"], "-left"));
          var rightButton = document.createElement('div');
          rightButton.classList.add(_consts__WEBPACK_IMPORTED_MODULE_0__["buttonClass"]);
          rightButton.classList.add("".concat(_consts__WEBPACK_IMPORTED_MODULE_0__["buttonClass"], "-right"));
          var playPauseButton = document.createElement('div');
          playPauseButton.classList.add(_consts__WEBPACK_IMPORTED_MODULE_0__["buttonClass"]);
          playPauseButton.classList.add(auto === false ? "".concat(_consts__WEBPACK_IMPORTED_MODULE_0__["buttonClass"], "-play") : "".concat(_consts__WEBPACK_IMPORTED_MODULE_0__["buttonClass"], "-pause"));
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
            playPauseButton.classList.toggle("".concat(_consts__WEBPACK_IMPORTED_MODULE_0__["buttonClass"], "-play"));
            playPauseButton.classList.toggle("".concat(_consts__WEBPACK_IMPORTED_MODULE_0__["buttonClass"], "-pause"));
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
        }

        function nextCoords(direction, width, height) {
          var params = {
            initX: 0,
            initY: 0,
            destX: 0,
            destY: 0
          };

          switch (direction) {
            case _consts__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_LEFT"]:
              params.initX = width;
              params.destX = -width;
              break;

            case _consts__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_RIGHT"]:
              params.initX = -width;
              params.destX = width;
              break;

            case _consts__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_DOWN"]:
              params.initY = -height;
              params.destY = height;
              break;

            case _consts__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_UP"]:
              params.initY = height;
              params.destY = -height;
              break;

            default:
              break;
          }

          return params;
        }
        /***/

      },

      /***/
      "./src/mouseHandler.js":
      /*!*****************************!*\
        !*** ./src/mouseHandler.js ***!
        \*****************************/

      /*! exports provided: default */

      /***/
      function srcMouseHandlerJs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "default", function () {
          return mouseHandler;
        });
        /* harmony import */


        var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./consts */
        "./src/consts.js");

        function mouseHandler(contId, onSwipe) {
          var swipeDistance = 100;
          var container = document.getElementById(contId);
          var startPoint = {};
          var mouseActive = false;
          container.addEventListener('mousedown', function (event) {
            mouseActive = true;
            event.preventDefault();
            startPoint.x = event.pageX;
            startPoint.y = event.pageY;
          }, false);
          container.addEventListener('mouseup', function () {
            mouseActive = false;
          });
          container.addEventListener('mouseout', function () {
            mouseActive = false;
          });
          container.addEventListener('mousemove', function (event) {
            if (!mouseActive) return;
            event.preventDefault();
            event.stopPropagation();
            var newPoint = {};
            newPoint.pageX = event.pageX;
            newPoint.pageY = event.pageY;
            var offsetX = newPoint.pageX - startPoint.x;
            var offsetY = newPoint.pageY - startPoint.y;

            if (Math.abs(offsetX) > swipeDistance) {
              if (offsetX > 0) {
                onSwipe(_consts__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_RIGHT"]);
              }

              if (offsetX < 0) {
                onSwipe(_consts__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_LEFT"]);
              }

              startPoint.x = newPoint.pageX;
              startPoint.y = newPoint.pageY;
              return;
            }

            if (Math.abs(offsetY) > swipeDistance) {
              if (offsetY < 0) {
                onSwipe(_consts__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_UP"]);
              }

              if (offsetY > 0) {
                onSwipe(_consts__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_DOWN"]);
              }

              startPoint.x = newPoint.pageX;
              startPoint.y = newPoint.pageY;
            }
          }, false);
        }
        /***/

      },

      /***/
      "./src/touchHandler.js":
      /*!*****************************!*\
        !*** ./src/touchHandler.js ***!
        \*****************************/

      /*! exports provided: default */

      /***/
      function srcTouchHandlerJs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "default", function () {
          return touchHandler;
        });
        /* harmony import */


        var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./consts */
        "./src/consts.js"); // класик для обработки свайпа


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
                onSwipe(_consts__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_RIGHT"]);
              }

              if (offsetX < 0) {
                onSwipe(_consts__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_LEFT"]);
              }

              startPoint.x = newPoint.pageX;
              startPoint.y = newPoint.pageY;
              return;
            }

            if (Math.abs(offsetY) > swipeDistance) {
              if (offsetY < 0) {
                onSwipe(_consts__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_UP"]);
              }

              if (offsetY > 0) {
                onSwipe(_consts__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_DOWN"]);
              }

              startPoint.x = newPoint.pageX;
              startPoint.y = newPoint.pageY;
            }
          }, false);
        }
        /***/

      }
      /******/

    })
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_edu_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-edu-carousel */ "./node_modules/react-edu-carousel/build/index.js");
/* harmony import */ var react_edu_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_edu_carousel__WEBPACK_IMPORTED_MODULE_0__);

var containerId = 'cont';
react_edu_carousel__WEBPACK_IMPORTED_MODULE_0___default()(containerId, {
  auto: true,
  interval: 2000,
  speed: 300,
  direction: 2,
  timingFunction: 'ease-out',
  showButtons: true
}); // console.log("ASd")

/***/ })

/******/ });
//# sourceMappingURL=main.js.map