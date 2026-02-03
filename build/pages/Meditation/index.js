(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\Administrator\\QuickAppProjects\\yoga-light&cacheDirectory&plugins[]=c:\\Users\\Administrator\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\Administrator\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Meditation/index.ux?uxType=page":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\Users\Administrator\QuickAppProjects\yoga-light&cacheDirectory&plugins[]=c:\Users\Administrator\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\Administrator\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Meditation/index.ux?uxType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _meditation = _interopRequireDefault(__webpack_require__(/*! ../../data/meditation.js */ "./src/data/meditation.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  private: {
    timeOptions: [],
    selectedTime: 0,
    remainingSeconds: 0,
    isRunning: false,
    timer: null,
    displayTime: '00:00',
    timerLabel: '请选择冥想时长',
    startButtonText: '开始'
  },
  onInit() {
    this.$page.setTitleBar({
      text: '计时冥想'
    });
    this.timeOptions = _meditation.default;
  },
  onDestroy() {
    this.clearTimer();
  },
  selectTime(item) {
    if (!item) return;
    if (this.isRunning) {
      $utils.showToast('请先停止当前计时');
      return;
    }
    this.selectedTime = parseInt(item);
    this.remainingSeconds = this.selectedTime * 60;
    this.displayTime = $utils.formatTime(this.remainingSeconds);
    this.timerLabel = `已选择 ${this.selectedTime} 分钟`;
  },
  toggleTimer() {
    if (this.selectedTime === 0) {
      $utils.showToast('请先选择冥想时长');
      return;
    }
    if (this.isRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  },
  startTimer() {
    if (this.remainingSeconds <= 0) {
      $utils.showToast('时间已到');
      return;
    }
    this.isRunning = true;
    this.startButtonText = '暂停';
    this.timerLabel = '冥想进行中...';
    this.timer = setInterval(() => {
      this.remainingSeconds--;
      this.displayTime = $utils.formatTime(this.remainingSeconds);
      if (this.remainingSeconds <= 0) {
        this.completeTimer();
      }
    }, 1000);
  },
  pauseTimer() {
    this.isRunning = false;
    this.startButtonText = '继续';
    this.timerLabel = '已暂停';
    this.clearTimer();
  },
  resetTimer() {
    if (this.isRunning) {
      this.clearTimer();
    }
    this.isRunning = false;
    this.startButtonText = '开始';
    this.selectedTime = 0;
    this.remainingSeconds = 0;
    this.displayTime = '00:00';
    this.timerLabel = '请选择冥想时长';
  },
  completeTimer() {
    this.clearTimer();
    this.isRunning = false;
    this.startButtonText = '开始';
    this.timerLabel = '冥想完成！';
    $utils.showToast('冥想时间到，辛苦了！');
    setTimeout(() => {
      if (!this.isRunning) {
        this.resetTimer();
      }
    }, 3000);
  },
  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
};
const moduleOwn = exports.default || module.exports;
const accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    const accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (const name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/less-loader/dist/cjs.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Meditation/index.ux?uxType=page":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/less-loader/dist/cjs.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Meditation/index.ux?uxType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".wrapper": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "flex": 1,
    "backgroundColor": "#FFF7F1",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px"
  },
  ".time-selector": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "width": "100%",
    "marginTop": "20px",
    "marginBottom": "40px"
  },
  ".selector-title": {
    "fontSize": "32px",
    "color": "#3A2E28",
    "marginBottom": "24px"
  },
  ".time-buttons": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "100%"
  },
  ".time-btn": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "140px",
    "height": "80px",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "12px",
    "marginTop": "8px",
    "marginRight": "8px",
    "marginBottom": "8px",
    "marginLeft": "8px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#F0E2D8",
    "borderRightColor": "#F0E2D8",
    "borderBottomColor": "#F0E2D8",
    "borderLeftColor": "#F0E2D8"
  },
  ".time-btn-text": {
    "fontSize": "28px",
    "color": "#3A2E28",
    "textAlign": "center"
  },
  ".timer-section": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "flex": 1,
    "width": "100%",
    "marginTop": "40px",
    "marginRight": "0px",
    "marginBottom": "40px",
    "marginLeft": "0px"
  },
  ".timer-display": {
    "fontSize": "120px",
    "fontWeight": "bold",
    "color": "#E6A87C",
    "marginBottom": "20px"
  },
  ".timer-label": {
    "fontSize": "28px",
    "color": "#8A6F63"
  },
  ".control-buttons": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "100%",
    "marginBottom": "40px"
  },
  ".control-btn": {
    "width": "200px",
    "height": "88px",
    "borderRadius": "44px",
    "fontSize": "32px",
    "marginTop": "0px",
    "marginRight": "12px",
    "marginBottom": "0px",
    "marginLeft": "12px"
  },
  ".start-btn": {
    "backgroundColor": "#E6A87C",
    "color": "#FFFFFF",
    "backgroundColor:disabled": "#F0E2D8",
    "color:disabled": "#8A6F63"
  },
  ".reset-btn": {
    "backgroundColor": "#FFFFFF",
    "color": "#3A2E28",
    "borderTopWidth": "2px",
    "borderRightWidth": "2px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "2px",
    "borderStyle": "solid",
    "borderTopColor": "#F0E2D8",
    "borderRightColor": "#F0E2D8",
    "borderBottomColor": "#F0E2D8",
    "borderLeftColor": "#F0E2D8",
    "backgroundColor:disabled": "#FFF7F1",
    "color:disabled": "#8A6F63",
    "borderTopColor:disabled": "#F0E2D8",
    "borderRightColor:disabled": "#F0E2D8",
    "borderBottomColor:disabled": "#F0E2D8",
    "borderLeftColor:disabled": "#F0E2D8"
  }
}

/***/ }),

/***/ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Meditation/index.ux?uxType=page&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Meditation/index.ux?uxType=page& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "wrapper"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "time-selector"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "选择冥想时长"
          },
          "classList": [
            "selector-title"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "time-buttons"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "time-btn"
              ],
              "repeat": {
                "exp": function () {return this.timeOptions},
                "key": "index",
                "value": "item"
              },
              "events": {
                "click": function (evt) { return this.selectTime(this.item,evt)}
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return '' + (this.item) + '分钟'}
                  },
                  "classList": [
                    "time-btn-text"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "timer-section"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.displayTime}
          },
          "classList": [
            "timer-display"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.timerLabel}
          },
          "classList": [
            "timer-label"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "control-buttons"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": function () {return this.startButtonText},
            "disabled": function () {return this.isRunning&&this.selectedTime===0}
          },
          "classList": [
            "control-btn",
            "start-btn"
          ],
          "events": {
            "click": "toggleTimer"
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "重置",
            "disabled": function () {return this.selectedTime===0}
          },
          "classList": [
            "control-btn",
            "reset-btn"
          ],
          "events": {
            "click": "resetTimer"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./src/data/meditation.js":
/*!********************************!*\
  !*** ./src/data/meditation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/**
 * 冥想预设时间数据
 */
var _default = exports["default"] = [5, 10, 15, 20, 30];

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************************!*\
  !*** ./src/pages/Meditation/index.ux?uxType=page ***!
  \***************************************************/

var $app_script$ = __webpack_require__(/*! !../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\Users\Administrator\QuickAppProjects\yoga-light&cacheDirectory&plugins[]=c:\Users\Administrator\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\Administrator\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\Administrator\\QuickAppProjects\\yoga-light&cacheDirectory&plugins[]=c:\\Users\\Administrator\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\Administrator\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Meditation/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Meditation/index.ux?uxType=page&")
    $app_module$.exports.style = __webpack_require__(/*! !../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/less-loader/dist/cjs.js!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/less-loader/dist/cjs.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Meditation/index.ux?uxType=page")
});
$app_bootstrap$('@app-component/index',{ packagerVersion: "2.0.5" });
})();

/******/ })()
;
    };
    if (typeof window === "undefined") {
      return createPageHandler();
    }
    else {
      window.createPageHandler = createPageHandler
    }
  })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw0QkFBNEI7QUFDOUQscUNBQXFDO0FBQ3JDLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSEE7QUFDQTtBQUNBO0FBRkEsSUFBQVAsUUFBQSxHQUFBQyxrQkFBQSxHQUdlLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDOzs7Ozs7VUNIbEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3JCQSxtQkFBbUIsbUJBQU8sQ0FBQywrM0VBQTB0QztBQUNydkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLG90QkFBc1c7QUFDbFosaUNBQWlDLG1CQUFPLENBQUMsaStCQUFpZjtBQUMxaEIsQ0FBQztBQUNELHlDQUF5QyxpQkFBaUIsT0FBd0IsRUFBRSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9wYWdlcy9NZWRpdGF0aW9uL2luZGV4LnV4P2NjZWYiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9wYWdlcy9NZWRpdGF0aW9uL2luZGV4LnV4P2JlN2UiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9wYWdlcy9NZWRpdGF0aW9uL2luZGV4LnV4PzhjZTEiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9kYXRhL21lZGl0YXRpb24uanM/MzIzMiIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0L3dlYnBhY2svYm9vdHN0cmFwPzdmODAiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9wYWdlcy9NZWRpdGF0aW9uL2luZGV4LnV4P2I1YjMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGltZS1zZWxlY3RvclwiPlxyXG4gICAgICA8dGV4dCBjbGFzcz1cInNlbGVjdG9yLXRpdGxlXCI+6YCJ5oup5Yal5oOz5pe26ZW/PC90ZXh0PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGltZS1idXR0b25zXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3M9XCJ0aW1lLWJ0blwiXHJcbiAgICAgICAgICBmb3I9XCJ7eyhpbmRleCwgaXRlbSkgaW4gdGltZU9wdGlvbnN9fVwiXHJcbiAgICAgICAgICBvbmNsaWNrPVwic2VsZWN0VGltZShpdGVtKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ0aW1lLWJ0bi10ZXh0XCI+e3tpdGVtfX3liIbpkp88L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGltZXItc2VjdGlvblwiPlxyXG4gICAgICA8dGV4dCBjbGFzcz1cInRpbWVyLWRpc3BsYXlcIj57e2Rpc3BsYXlUaW1lfX08L3RleHQ+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwidGltZXItbGFiZWxcIj57e3RpbWVyTGFiZWx9fTwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRyb2wtYnV0dG9uc1wiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzcz1cImNvbnRyb2wtYnRuIHN0YXJ0LWJ0blwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgdmFsdWU9XCJ7e3N0YXJ0QnV0dG9uVGV4dH19XCJcclxuICAgICAgICBvbmNsaWNrPVwidG9nZ2xlVGltZXJcIlxyXG4gICAgICAgIGRpc2FibGVkPVwie3tpc1J1bm5pbmcgJiYgc2VsZWN0ZWRUaW1lID09PSAwfX1cIlxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzcz1cImNvbnRyb2wtYnRuIHJlc2V0LWJ0blwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgdmFsdWU9XCLph43nva5cIlxyXG4gICAgICAgIG9uY2xpY2s9XCJyZXNldFRpbWVyXCJcclxuICAgICAgICBkaXNhYmxlZD1cInt7c2VsZWN0ZWRUaW1lID09PSAwfX1cIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgbWVkaXRhdGlvbkRhdGEgZnJvbSAnLi4vLi4vZGF0YS9tZWRpdGF0aW9uLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByaXZhdGU6IHtcclxuICAgIHRpbWVPcHRpb25zOiBbXSxcclxuICAgIHNlbGVjdGVkVGltZTogMCwgLy8g6YCJ5Lit55qE5pe26Ze077yI5YiG6ZKf77yJXHJcbiAgICByZW1haW5pbmdTZWNvbmRzOiAwLCAvLyDliankvZnnp5LmlbBcclxuICAgIGlzUnVubmluZzogZmFsc2UsXHJcbiAgICB0aW1lcjogbnVsbCxcclxuICAgIGRpc3BsYXlUaW1lOiAnMDA6MDAnLFxyXG4gICAgdGltZXJMYWJlbDogJ+ivt+mAieaLqeWGpeaDs+aXtumVvycsXHJcbiAgICBzdGFydEJ1dHRvblRleHQ6ICflvIDlp4snXHJcbiAgfSxcclxuICBvbkluaXQoKSB7XHJcbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHsgdGV4dDogJ+iuoeaXtuWGpeaDsycgfSlcclxuICAgIHRoaXMudGltZU9wdGlvbnMgPSBtZWRpdGF0aW9uRGF0YVxyXG4gIH0sXHJcbiAgb25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jbGVhclRpbWVyKClcclxuICB9LFxyXG4gIHNlbGVjdFRpbWUoaXRlbSkge1xyXG4gICAgaWYgKCFpdGVtKSByZXR1cm5cclxuICAgIGlmICh0aGlzLmlzUnVubmluZykge1xyXG4gICAgICAkdXRpbHMuc2hvd1RvYXN0KCfor7flhYjlgZzmraLlvZPliY3orqHml7YnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0ZWRUaW1lID0gcGFyc2VJbnQoaXRlbSlcclxuICAgIHRoaXMucmVtYWluaW5nU2Vjb25kcyA9IHRoaXMuc2VsZWN0ZWRUaW1lICogNjBcclxuICAgIHRoaXMuZGlzcGxheVRpbWUgPSAkdXRpbHMuZm9ybWF0VGltZSh0aGlzLnJlbWFpbmluZ1NlY29uZHMpXHJcbiAgICB0aGlzLnRpbWVyTGFiZWwgPSBg5bey6YCJ5oupICR7dGhpcy5zZWxlY3RlZFRpbWV9IOWIhumSn2BcclxuICB9LFxyXG4gIHRvZ2dsZVRpbWVyKCkge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRUaW1lID09PSAwKSB7XHJcbiAgICAgICR1dGlscy5zaG93VG9hc3QoJ+ivt+WFiOmAieaLqeWGpeaDs+aXtumVvycpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNSdW5uaW5nKSB7XHJcbiAgICAgIHRoaXMucGF1c2VUaW1lcigpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXJ0VGltZXIoKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3RhcnRUaW1lcigpIHtcclxuICAgIGlmICh0aGlzLnJlbWFpbmluZ1NlY29uZHMgPD0gMCkge1xyXG4gICAgICAkdXRpbHMuc2hvd1RvYXN0KCfml7bpl7Tlt7LliLAnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZVxyXG4gICAgdGhpcy5zdGFydEJ1dHRvblRleHQgPSAn5pqC5YGcJ1xyXG4gICAgdGhpcy50aW1lckxhYmVsID0gJ+WGpeaDs+i/m+ihjOS4rS4uLidcclxuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVtYWluaW5nU2Vjb25kcy0tXHJcbiAgICAgIHRoaXMuZGlzcGxheVRpbWUgPSAkdXRpbHMuZm9ybWF0VGltZSh0aGlzLnJlbWFpbmluZ1NlY29uZHMpXHJcbiAgICAgIGlmICh0aGlzLnJlbWFpbmluZ1NlY29uZHMgPD0gMCkge1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVUaW1lcigpXHJcbiAgICAgIH1cclxuICAgIH0sIDEwMDApXHJcbiAgfSxcclxuICBwYXVzZVRpbWVyKCkge1xyXG4gICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZVxyXG4gICAgdGhpcy5zdGFydEJ1dHRvblRleHQgPSAn57un57utJ1xyXG4gICAgdGhpcy50aW1lckxhYmVsID0gJ+W3suaaguWBnCdcclxuICAgIHRoaXMuY2xlYXJUaW1lcigpXHJcbiAgfSxcclxuICByZXNldFRpbWVyKCkge1xyXG4gICAgaWYgKHRoaXMuaXNSdW5uaW5nKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJUaW1lcigpXHJcbiAgICB9XHJcbiAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlXHJcbiAgICB0aGlzLnN0YXJ0QnV0dG9uVGV4dCA9ICflvIDlp4snXHJcbiAgICB0aGlzLnNlbGVjdGVkVGltZSA9IDBcclxuICAgIHRoaXMucmVtYWluaW5nU2Vjb25kcyA9IDBcclxuICAgIHRoaXMuZGlzcGxheVRpbWUgPSAnMDA6MDAnXHJcbiAgICB0aGlzLnRpbWVyTGFiZWwgPSAn6K+36YCJ5oup5Yal5oOz5pe26ZW/J1xyXG4gIH0sXHJcbiAgY29tcGxldGVUaW1lcigpIHtcclxuICAgIHRoaXMuY2xlYXJUaW1lcigpXHJcbiAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlXHJcbiAgICB0aGlzLnN0YXJ0QnV0dG9uVGV4dCA9ICflvIDlp4snXHJcbiAgICB0aGlzLnRpbWVyTGFiZWwgPSAn5Yal5oOz5a6M5oiQ77yBJ1xyXG4gICAgJHV0aWxzLnNob3dUb2FzdCgn5Yal5oOz5pe26Ze05Yiw77yM6L6b6Ium5LqG77yBJylcclxuICAgIC8vIDPnp5LlkI7mgaLlpI3liJ3lp4vnirbmgIFcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuaXNSdW5uaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldFRpbWVyKClcclxuICAgICAgfVxyXG4gICAgfSwgMzAwMClcclxuICB9LFxyXG4gIGNsZWFyVGltZXIoKSB7XHJcbiAgICBpZiAodGhpcy50aW1lcikge1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXHJcbiAgICAgIHRoaXMudGltZXIgPSBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XHJcbkBpbXBvcnQgJy4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZS5sZXNzJztcclxuXHJcbi53cmFwcGVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJnLW1haW47XHJcbiAgcGFkZGluZzogMjAgKiBAc2l6ZS1mYWN0b3I7XHJcbn1cclxuXHJcbi50aW1lLXNlbGVjdG9yIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDIwICogQHNpemUtZmFjdG9yO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4uc2VsZWN0b3ItdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBjb2xvcjogQGJsYWNrO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0ICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4udGltZS1idXR0b25zIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aW1lLWJ0biB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxNDAgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgaGVpZ2h0OiA4MCAqIEBzaXplLWZhY3RvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTIgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgbWFyZ2luOiA4ICogQHNpemUtZmFjdG9yO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIEBib3JkZXItY29sb3I7XHJcbn1cclxuXHJcbi50aW1lLWJ0bi10ZXh0IHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgY29sb3I6IEBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aW1lci1zZWN0aW9uIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDQwICogQHNpemUtZmFjdG9yIDA7XHJcbn1cclxuXHJcbi50aW1lci1kaXNwbGF5IHtcclxuICBmb250LXNpemU6IDEyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBAYnJhbmQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjAgKiBAc2l6ZS1mYWN0b3I7XHJcbn1cclxuXHJcbi50aW1lci1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiBAZ3JleTtcclxufVxyXG5cclxuLmNvbnRyb2wtYnV0dG9ucyB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4uY29udHJvbC1idG4ge1xyXG4gIHdpZHRoOiAyMDAgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgaGVpZ2h0OiA4OCAqIEBzaXplLWZhY3RvcjtcclxuICBib3JkZXItcmFkaXVzOiA0NCAqIEBzaXplLWZhY3RvcjtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgbWFyZ2luOiAwIDEyICogQHNpemUtZmFjdG9yO1xyXG4gIC8qIGJvcmRlcjogbm9uZTsgKi9cclxufVxyXG5cclxuLnN0YXJ0LWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJyYW5kO1xyXG4gIGNvbG9yOiBAd2hpdGU7XHJcbn1cclxuXHJcbi5zdGFydC1idG46ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IEBib3JkZXItY29sb3I7XHJcbiAgY29sb3I6IEBncmV5O1xyXG59XHJcblxyXG4ucmVzZXQtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2hpdGU7XHJcbiAgY29sb3I6IEBibGFjaztcclxuICBib3JkZXI6IDJweCBzb2xpZCBAYm9yZGVyLWNvbG9yO1xyXG59XHJcblxyXG4ucmVzZXQtYnRuOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmctbWFpbjtcclxuICBjb2xvcjogQGdyZXk7XHJcbiAgYm9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi53cmFwcGVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRjdGMVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi50aW1lLXNlbGVjdG9yXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MHB4XCJcbiAgfSxcbiAgXCIuc2VsZWN0b3ItdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzQTJFMjhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI0cHhcIlxuICB9LFxuICBcIi50aW1lLWJ1dHRvbnNcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLnRpbWUtYnRuXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjE0MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI4cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiOHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI4cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI4cHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNGMEUyRDhcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNGMEUyRDhcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNGMEUyRDhcIlxuICB9LFxuICBcIi50aW1lLWJ0bi10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjhweFwiLFxuICAgIFwiY29sb3JcIjogXCIjM0EyRTI4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi50aW1lci1zZWN0aW9uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMHB4XCJcbiAgfSxcbiAgXCIudGltZXItZGlzcGxheVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEyMHB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiY29sb3JcIjogXCIjRTZBODdDXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHB4XCJcbiAgfSxcbiAgXCIudGltZXItbGFiZWxcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4QTZGNjNcIlxuICB9LFxuICBcIi5jb250cm9sLWJ1dHRvbnNcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLmNvbnRyb2wtYnRuXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjAwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjg4cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjQ0cHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzJweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEycHhcIlxuICB9LFxuICBcIi5zdGFydC1idG5cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0U2QTg3Q1wiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6ZGlzYWJsZWRcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJjb2xvcjpkaXNhYmxlZFwiOiBcIiM4QTZGNjNcIlxuICB9LFxuICBcIi5yZXNldC1idG5cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiY29sb3JcIjogXCIjM0EyRTI4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI0YwRTJEOFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6ZGlzYWJsZWRcIjogXCIjRkZGN0YxXCIsXG4gICAgXCJjb2xvcjpkaXNhYmxlZFwiOiBcIiM4QTZGNjNcIixcbiAgICBcImJvcmRlclRvcENvbG9yOmRpc2FibGVkXCI6IFwiI0YwRTJEOFwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvcjpkaXNhYmxlZFwiOiBcIiNGMEUyRDhcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yOmRpc2FibGVkXCI6IFwiI0YwRTJEOFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yOmRpc2FibGVkXCI6IFwiI0YwRTJEOFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwid3JhcHBlclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRpbWUtc2VsZWN0b3JcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwi6YCJ5oup5Yal5oOz5pe26ZW/XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2VsZWN0b3ItdGl0bGVcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRpbWUtYnV0dG9uc1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidGltZS1idG5cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJlcGVhdFwiOiB7XG4gICAgICAgICAgICAgICAgXCJleHBcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpbWVPcHRpb25zfSxcbiAgICAgICAgICAgICAgICBcImtleVwiOiBcImluZGV4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiB0aGlzLnNlbGVjdFRpbWUodGhpcy5pdGVtLGV2dCl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAnJyArICh0aGlzLml0ZW0pICsgJ+WIhumSnyd9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInRpbWUtYnRuLXRleHRcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidGltZXItc2VjdGlvblwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRpc3BsYXlUaW1lfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0aW1lci1kaXNwbGF5XCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpbWVyTGFiZWx9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRpbWVyLWxhYmVsXCJcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNvbnRyb2wtYnV0dG9uc1wiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnN0YXJ0QnV0dG9uVGV4dH0sXG4gICAgICAgICAgICBcImRpc2FibGVkXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pc1J1bm5pbmcmJnRoaXMuc2VsZWN0ZWRUaW1lPT09MH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY29udHJvbC1idG5cIixcbiAgICAgICAgICAgIFwic3RhcnQtYnRuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJ0b2dnbGVUaW1lclwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwi6YeN572uXCIsXG4gICAgICAgICAgICBcImRpc2FibGVkXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zZWxlY3RlZFRpbWU9PT0wfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJjb250cm9sLWJ0blwiLFxuICAgICAgICAgICAgXCJyZXNldC1idG5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcInJlc2V0VGltZXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIi8qKlxyXG4gKiDlhqXmg7PpooTorr7ml7bpl7TmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IFs1LCAxMCwgMTUsIDIwLCAzMF1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vQXBwRGF0YS9Mb2NhbC9Qcm9ncmFtcy9RdWljayBBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3NjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vQXBwRGF0YS9Mb2NhbC9Qcm9ncmFtcy9RdWljayBBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9wYWNrYWdlci9saWIvbG9hZGVycy9tb2R1bGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0FwcERhdGEvTG9jYWwvUHJvZ3JhbXMvUXVpY2sgQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2N3ZD1jOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXFF1aWNrQXBwUHJvamVjdHNcXFxceW9nYS1saWdodCZjYWNoZURpcmVjdG9yeSZwbHVnaW5zW109YzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcYmFiZWwtcGx1Z2luLWpzeC5qcyZjb21tZW50cz1mYWxzZSZjb25maWdGaWxlPWM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxwYWNrYWdlclxcXFxiYWJlbC5jb25maWcuanMhLi4vLi4vLi4vLi4vLi4vQXBwRGF0YS9Mb2NhbC9Qcm9ncmFtcy9RdWljayBBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2FjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vQXBwRGF0YS9Mb2NhbC9Qcm9ncmFtcy9RdWljayBBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vaW5kZXgudXg/dXhUeXBlPXBhZ2VcIilcbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKSB7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9BcHBEYXRhL0xvY2FsL1Byb2dyYW1zL1F1aWNrIEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0FwcERhdGEvTG9jYWwvUHJvZ3JhbXMvUXVpY2sgQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlIS4vaW5kZXgudXg/dXhUeXBlPXBhZ2UmXCIpXG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL0FwcERhdGEvTG9jYWwvUHJvZ3JhbXMvUXVpY2sgQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIS4uLy4uLy4uLy4uLy4uL0FwcERhdGEvTG9jYWwvUHJvZ3JhbXMvUXVpY2sgQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9BcHBEYXRhL0xvY2FsL1Byb2dyYW1zL1F1aWNrIEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuL2luZGV4LnV4P3V4VHlwZT1wYWdlXCIpXG59KTtcbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJWZXJzaW9uOiBRVUlDS0FQUF9UT09MS0lUX1ZFUlNJT04gfSk7Il0sIm5hbWVzIjpbIl9tZWRpdGF0aW9uIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJwcml2YXRlIiwidGltZU9wdGlvbnMiLCJzZWxlY3RlZFRpbWUiLCJyZW1haW5pbmdTZWNvbmRzIiwiaXNSdW5uaW5nIiwidGltZXIiLCJkaXNwbGF5VGltZSIsInRpbWVyTGFiZWwiLCJzdGFydEJ1dHRvblRleHQiLCJvbkluaXQiLCIkcGFnZSIsInNldFRpdGxlQmFyIiwidGV4dCIsIm1lZGl0YXRpb25EYXRhIiwib25EZXN0cm95IiwiY2xlYXJUaW1lciIsInNlbGVjdFRpbWUiLCJpdGVtIiwiJHV0aWxzIiwic2hvd1RvYXN0IiwicGFyc2VJbnQiLCJmb3JtYXRUaW1lIiwidG9nZ2xlVGltZXIiLCJwYXVzZVRpbWVyIiwic3RhcnRUaW1lciIsInNldEludGVydmFsIiwiY29tcGxldGVUaW1lciIsInJlc2V0VGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=