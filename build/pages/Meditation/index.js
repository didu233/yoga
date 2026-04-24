(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\babel-loader\\lib\\index.js?cwd=b:\\quickApp\\yoga&cacheDirectory&plugins[]=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/Meditation/index.ux?uxType=page":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\babel-loader\lib\index.js?cwd=b:\quickApp\yoga&cacheDirectory&plugins[]=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/pages/Meditation/index.ux?uxType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/Meditation/index.ux?uxType=page":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\less-loader\dist\cjs.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/pages/Meditation/index.ux?uxType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".page-wrap": {
    "flexDirection": "column",
    "flex": 1,
    "backgroundColor": "#FFF7F1"
  },
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

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/Meditation/index.ux?uxType=page&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/pages/Meditation/index.ux?uxType=page& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "page-wrap"
  ],
  "children": [
    {
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

var $app_script$ = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\babel-loader\lib\index.js?cwd=b:\quickApp\yoga&cacheDirectory&plugins[]=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\babel-loader\\lib\\index.js?cwd=b:\\quickApp\\yoga&cacheDirectory&plugins[]=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/Meditation/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/Meditation/index.ux?uxType=page&")
    $app_module$.exports.style = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\less-loader\dist\cjs.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/Meditation/index.ux?uxType=page")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veW9nYS1saWdodC9DOlxcVXNlcnNcXGRpZGl1MjMzXFxBcHBEYXRhXFxMb2NhbFxcUHJvZ3JhbXNcXFF1aWNrIEFwcCBJREVcXGI6XFxxdWlja0FwcFxceW9nYVxcc3JjXFxwYWdlc1xcTWVkaXRhdGlvblxcaW5kZXgudXg/MGIwMCIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL3BhZ2VzL01lZGl0YXRpb24vaW5kZXgudXg/MGU2YSIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL3BhZ2VzL01lZGl0YXRpb24vaW5kZXgudXg/NmQ2ZCIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL2RhdGEvbWVkaXRhdGlvbi5qcz8zMjMyIiwid2VicGFjazovL3lvZ2EtbGlnaHQvd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL3BhZ2VzL01lZGl0YXRpb24vaW5kZXgudXg/ZWRlZCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInBhZ2Utd3JhcFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0aW1lLXNlbGVjdG9yXCI+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwic2VsZWN0b3ItdGl0bGVcIj7pgInmi6nlhqXmg7Pml7bplb88L3RleHQ+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLWJ1dHRvbnNcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzcz1cInRpbWUtYnRuXCJcclxuICAgICAgICAgIGZvcj1cInt7KGluZGV4LCBpdGVtKSBpbiB0aW1lT3B0aW9uc319XCJcclxuICAgICAgICAgIG9uY2xpY2s9XCJzZWxlY3RUaW1lKGl0ZW0pXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInRpbWUtYnRuLXRleHRcIj57e2l0ZW19feWIhumSnzwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0aW1lci1zZWN0aW9uXCI+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwidGltZXItZGlzcGxheVwiPnt7ZGlzcGxheVRpbWV9fTwvdGV4dD5cclxuICAgICAgPHRleHQgY2xhc3M9XCJ0aW1lci1sYWJlbFwiPnt7dGltZXJMYWJlbH19PC90ZXh0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udHJvbC1idXR0b25zXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzPVwiY29udHJvbC1idG4gc3RhcnQtYnRuXCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICB2YWx1ZT1cInt7c3RhcnRCdXR0b25UZXh0fX1cIlxyXG4gICAgICAgIG9uY2xpY2s9XCJ0b2dnbGVUaW1lclwiXHJcbiAgICAgICAgZGlzYWJsZWQ9XCJ7e2lzUnVubmluZyAmJiBzZWxlY3RlZFRpbWUgPT09IDB9fVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzPVwiY29udHJvbC1idG4gcmVzZXQtYnRuXCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICB2YWx1ZT1cIumHjee9rlwiXHJcbiAgICAgICAgb25jbGljaz1cInJlc2V0VGltZXJcIlxyXG4gICAgICAgIGRpc2FibGVkPVwie3tzZWxlY3RlZFRpbWUgPT09IDB9fVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBtZWRpdGF0aW9uRGF0YSBmcm9tICcuLi8uLi9kYXRhL21lZGl0YXRpb24uanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJpdmF0ZToge1xyXG4gICAgdGltZU9wdGlvbnM6IFtdLFxyXG4gICAgc2VsZWN0ZWRUaW1lOiAwLCAvLyDpgInkuK3nmoTml7bpl7TvvIjliIbpkp/vvIlcclxuICAgIHJlbWFpbmluZ1NlY29uZHM6IDAsIC8vIOWJqeS9meenkuaVsFxyXG4gICAgaXNSdW5uaW5nOiBmYWxzZSxcclxuICAgIHRpbWVyOiBudWxsLFxyXG4gICAgZGlzcGxheVRpbWU6ICcwMDowMCcsXHJcbiAgICB0aW1lckxhYmVsOiAn6K+36YCJ5oup5Yal5oOz5pe26ZW/JyxcclxuICAgIHN0YXJ0QnV0dG9uVGV4dDogJ+W8gOWniydcclxuICB9LFxyXG4gIG9uSW5pdCgpIHtcclxuICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoeyB0ZXh0OiAn6K6h5pe25Yal5oOzJyB9KVxyXG4gICAgdGhpcy50aW1lT3B0aW9ucyA9IG1lZGl0YXRpb25EYXRhXHJcbiAgfSxcclxuICBvbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmNsZWFyVGltZXIoKVxyXG4gIH0sXHJcbiAgc2VsZWN0VGltZShpdGVtKSB7XHJcbiAgICBpZiAoIWl0ZW0pIHJldHVyblxyXG4gICAgaWYgKHRoaXMuaXNSdW5uaW5nKSB7XHJcbiAgICAgICR1dGlscy5zaG93VG9hc3QoJ+ivt+WFiOWBnOatouW9k+WJjeiuoeaXticpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3RlZFRpbWUgPSBwYXJzZUludChpdGVtKVxyXG4gICAgdGhpcy5yZW1haW5pbmdTZWNvbmRzID0gdGhpcy5zZWxlY3RlZFRpbWUgKiA2MFxyXG4gICAgdGhpcy5kaXNwbGF5VGltZSA9ICR1dGlscy5mb3JtYXRUaW1lKHRoaXMucmVtYWluaW5nU2Vjb25kcylcclxuICAgIHRoaXMudGltZXJMYWJlbCA9IGDlt7LpgInmi6kgJHt0aGlzLnNlbGVjdGVkVGltZX0g5YiG6ZKfYFxyXG4gIH0sXHJcbiAgdG9nZ2xlVGltZXIoKSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFRpbWUgPT09IDApIHtcclxuICAgICAgJHV0aWxzLnNob3dUb2FzdCgn6K+35YWI6YCJ5oup5Yal5oOz5pe26ZW/JylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc1J1bm5pbmcpIHtcclxuICAgICAgdGhpcy5wYXVzZVRpbWVyKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhcnRUaW1lcigpXHJcbiAgICB9XHJcbiAgfSxcclxuICBzdGFydFRpbWVyKCkge1xyXG4gICAgaWYgKHRoaXMucmVtYWluaW5nU2Vjb25kcyA8PSAwKSB7XHJcbiAgICAgICR1dGlscy5zaG93VG9hc3QoJ+aXtumXtOW3suWIsCcpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlXHJcbiAgICB0aGlzLnN0YXJ0QnV0dG9uVGV4dCA9ICfmmoLlgZwnXHJcbiAgICB0aGlzLnRpbWVyTGFiZWwgPSAn5Yal5oOz6L+b6KGM5LitLi4uJ1xyXG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgdGhpcy5yZW1haW5pbmdTZWNvbmRzLS1cclxuICAgICAgdGhpcy5kaXNwbGF5VGltZSA9ICR1dGlscy5mb3JtYXRUaW1lKHRoaXMucmVtYWluaW5nU2Vjb25kcylcclxuICAgICAgaWYgKHRoaXMucmVtYWluaW5nU2Vjb25kcyA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZVRpbWVyKClcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMClcclxuICB9LFxyXG4gIHBhdXNlVGltZXIoKSB7XHJcbiAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlXHJcbiAgICB0aGlzLnN0YXJ0QnV0dG9uVGV4dCA9ICfnu6fnu60nXHJcbiAgICB0aGlzLnRpbWVyTGFiZWwgPSAn5bey5pqC5YGcJ1xyXG4gICAgdGhpcy5jbGVhclRpbWVyKClcclxuICB9LFxyXG4gIHJlc2V0VGltZXIoKSB7XHJcbiAgICBpZiAodGhpcy5pc1J1bm5pbmcpIHtcclxuICAgICAgdGhpcy5jbGVhclRpbWVyKClcclxuICAgIH1cclxuICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2VcclxuICAgIHRoaXMuc3RhcnRCdXR0b25UZXh0ID0gJ+W8gOWniydcclxuICAgIHRoaXMuc2VsZWN0ZWRUaW1lID0gMFxyXG4gICAgdGhpcy5yZW1haW5pbmdTZWNvbmRzID0gMFxyXG4gICAgdGhpcy5kaXNwbGF5VGltZSA9ICcwMDowMCdcclxuICAgIHRoaXMudGltZXJMYWJlbCA9ICfor7fpgInmi6nlhqXmg7Pml7bplb8nXHJcbiAgfSxcclxuICBjb21wbGV0ZVRpbWVyKCkge1xyXG4gICAgdGhpcy5jbGVhclRpbWVyKClcclxuICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2VcclxuICAgIHRoaXMuc3RhcnRCdXR0b25UZXh0ID0gJ+W8gOWniydcclxuICAgIHRoaXMudGltZXJMYWJlbCA9ICflhqXmg7PlrozmiJDvvIEnXHJcbiAgICAkdXRpbHMuc2hvd1RvYXN0KCflhqXmg7Pml7bpl7TliLDvvIzovpvoi6bkuobvvIEnKVxyXG4gICAgLy8gM+enkuWQjuaBouWkjeWIneWni+eKtuaAgVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5pc1J1bm5pbmcpIHtcclxuICAgICAgICB0aGlzLnJlc2V0VGltZXIoKVxyXG4gICAgICB9XHJcbiAgICB9LCAzMDAwKVxyXG4gIH0sXHJcbiAgY2xlYXJUaW1lcigpIHtcclxuICAgIGlmICh0aGlzLnRpbWVyKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcclxuICAgICAgdGhpcy50aW1lciA9IG51bGxcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cImxlc3NcIj5cclxuQGltcG9ydCAnLi8uLi8uLi9hc3NldHMvc3R5bGVzL3N0eWxlLmxlc3MnO1xyXG5cclxuLnBhZ2Utd3JhcCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IEBiZy1tYWluO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IEBiZy1tYWluO1xyXG4gIHBhZGRpbmc6IDIwICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4udGltZS1zZWxlY3RvciB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAyMCAqIEBzaXplLWZhY3RvcjtcclxuICBtYXJnaW4tYm90dG9tOiA0MCAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLnNlbGVjdG9yLXRpdGxlIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgY29sb3I6IEBibGFjaztcclxuICBtYXJnaW4tYm90dG9tOiAyNCAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLnRpbWUtYnV0dG9ucyB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGltZS1idG4ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTQwICogQHNpemUtZmFjdG9yO1xyXG4gIGhlaWdodDogODAgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEyICogQHNpemUtZmFjdG9yO1xyXG4gIG1hcmdpbjogOCAqIEBzaXplLWZhY3RvcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyLWNvbG9yO1xyXG59XHJcblxyXG4udGltZS1idG4tdGV4dCB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiBAYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGltZXItc2VjdGlvbiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA0MCAqIEBzaXplLWZhY3RvciAwO1xyXG59XHJcblxyXG4udGltZXItZGlzcGxheSB7XHJcbiAgZm9udC1zaXplOiAxMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogQGJyYW5kO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4udGltZXItbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBjb2xvcjogQGdyZXk7XHJcbn1cclxuXHJcbi5jb250cm9sLWJ1dHRvbnMge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA0MCAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLmNvbnRyb2wtYnRuIHtcclxuICB3aWR0aDogMjAwICogQHNpemUtZmFjdG9yO1xyXG4gIGhlaWdodDogODggKiBAc2l6ZS1mYWN0b3I7XHJcbiAgYm9yZGVyLXJhZGl1czogNDQgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIG1hcmdpbjogMCAxMiAqIEBzaXplLWZhY3RvcjtcclxuICAvKiBib3JkZXI6IG5vbmU7ICovXHJcbn1cclxuXHJcbi5zdGFydC1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IEBicmFuZDtcclxuICBjb2xvcjogQHdoaXRlO1xyXG59XHJcblxyXG4uc3RhcnQtYnRuOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBAYm9yZGVyLWNvbG9yO1xyXG4gIGNvbG9yOiBAZ3JleTtcclxufVxyXG5cclxuLnJlc2V0LWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQHdoaXRlO1xyXG4gIGNvbG9yOiBAYmxhY2s7XHJcbiAgYm9yZGVyOiAycHggc29saWQgQGJvcmRlci1jb2xvcjtcclxufVxyXG5cclxuLnJlc2V0LWJ0bjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJnLW1haW47XHJcbiAgY29sb3I6IEBncmV5O1xyXG4gIGJvcmRlci1jb2xvcjogQGJvcmRlci1jb2xvcjtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIucGFnZS13cmFwXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkY3RjFcIlxuICB9LFxuICBcIi53cmFwcGVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRjdGMVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi50aW1lLXNlbGVjdG9yXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MHB4XCJcbiAgfSxcbiAgXCIuc2VsZWN0b3ItdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzQTJFMjhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI0cHhcIlxuICB9LFxuICBcIi50aW1lLWJ1dHRvbnNcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLnRpbWUtYnRuXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjE0MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI4cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiOHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI4cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI4cHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNGMEUyRDhcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNGMEUyRDhcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNGMEUyRDhcIlxuICB9LFxuICBcIi50aW1lLWJ0bi10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjhweFwiLFxuICAgIFwiY29sb3JcIjogXCIjM0EyRTI4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi50aW1lci1zZWN0aW9uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMHB4XCJcbiAgfSxcbiAgXCIudGltZXItZGlzcGxheVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEyMHB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiY29sb3JcIjogXCIjRTZBODdDXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHB4XCJcbiAgfSxcbiAgXCIudGltZXItbGFiZWxcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4QTZGNjNcIlxuICB9LFxuICBcIi5jb250cm9sLWJ1dHRvbnNcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLmNvbnRyb2wtYnRuXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjAwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjg4cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjQ0cHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzJweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEycHhcIlxuICB9LFxuICBcIi5zdGFydC1idG5cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0U2QTg3Q1wiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6ZGlzYWJsZWRcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJjb2xvcjpkaXNhYmxlZFwiOiBcIiM4QTZGNjNcIlxuICB9LFxuICBcIi5yZXNldC1idG5cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiY29sb3JcIjogXCIjM0EyRTI4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI0YwRTJEOFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6ZGlzYWJsZWRcIjogXCIjRkZGN0YxXCIsXG4gICAgXCJjb2xvcjpkaXNhYmxlZFwiOiBcIiM4QTZGNjNcIixcbiAgICBcImJvcmRlclRvcENvbG9yOmRpc2FibGVkXCI6IFwiI0YwRTJEOFwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvcjpkaXNhYmxlZFwiOiBcIiNGMEUyRDhcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yOmRpc2FibGVkXCI6IFwiI0YwRTJEOFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yOmRpc2FibGVkXCI6IFwiI0YwRTJEOFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwicGFnZS13cmFwXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwid3JhcHBlclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0aW1lLXNlbGVjdG9yXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIumAieaLqeWGpeaDs+aXtumVv1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNlbGVjdG9yLXRpdGxlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidGltZS1idXR0b25zXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidGltZS1idG5cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwicmVwZWF0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJleHBcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpbWVPcHRpb25zfSxcbiAgICAgICAgICAgICAgICAgICAgXCJrZXlcIjogXCJpbmRleFwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uIChldnQpIHsgcmV0dXJuIHRoaXMuc2VsZWN0VGltZSh0aGlzLml0ZW0sZXZ0KX1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICcnICsgKHRoaXMuaXRlbSkgKyAn5YiG6ZKfJ31cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGltZS1idG4tdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidGltZXItc2VjdGlvblwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRpc3BsYXlUaW1lfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0aW1lci1kaXNwbGF5XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpbWVyTGFiZWx9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRpbWVyLWxhYmVsXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImNvbnRyb2wtYnV0dG9uc1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zdGFydEJ1dHRvblRleHR9LFxuICAgICAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmlzUnVubmluZyYmdGhpcy5zZWxlY3RlZFRpbWU9PT0wfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjb250cm9sLWJ0blwiLFxuICAgICAgICAgICAgICAgIFwic3RhcnQtYnRuXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJ0b2dnbGVUaW1lclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIumHjee9rlwiLFxuICAgICAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNlbGVjdGVkVGltZT09PTB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImNvbnRyb2wtYnRuXCIsXG4gICAgICAgICAgICAgICAgXCJyZXNldC1idG5cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInJlc2V0VGltZXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwiLyoqXHJcbiAqIOWGpeaDs+mihOiuvuaXtumXtOaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgWzUsIDEwLCAxNSwgMjAsIDMwXVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcc2NyaXB0LWxvYWRlci5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXHBhY2thZ2VyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXG1vZHVsZS1sb2FkZXIuanMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/Y3dkPWI6XFxcXHF1aWNrQXBwXFxcXHlvZ2EmY2FjaGVEaXJlY3RvcnkmcGx1Z2luc1tdPWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxiYWJlbC1wbHVnaW4tanN4LmpzJmNvbW1lbnRzPWZhbHNlJmNvbmZpZ0ZpbGU9YzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxwYWNrYWdlclxcXFxiYWJlbC5jb25maWcuanMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGFjY2Vzcy1sb2FkZXIuanMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vaW5kZXgudXg/dXhUeXBlPXBhZ2VcIilcbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKSB7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gcmVxdWlyZShcIiFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGUtbG9hZGVyLmpzIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxmcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlIS4vaW5kZXgudXg/dXhUeXBlPXBhZ2UmXCIpXG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSByZXF1aXJlKFwiIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxsZXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuL2luZGV4LnV4P3V4VHlwZT1wYWdlXCIpXG59KTtcbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJWZXJzaW9uOiBRVUlDS0FQUF9UT09MS0lUX1ZFUlNJT04gfSk7Il0sIm5hbWVzIjpbIl9tZWRpdGF0aW9uIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJwcml2YXRlIiwidGltZU9wdGlvbnMiLCJzZWxlY3RlZFRpbWUiLCJyZW1haW5pbmdTZWNvbmRzIiwiaXNSdW5uaW5nIiwidGltZXIiLCJkaXNwbGF5VGltZSIsInRpbWVyTGFiZWwiLCJzdGFydEJ1dHRvblRleHQiLCJvbkluaXQiLCIkcGFnZSIsInNldFRpdGxlQmFyIiwidGV4dCIsIm1lZGl0YXRpb25EYXRhIiwib25EZXN0cm95IiwiY2xlYXJUaW1lciIsInNlbGVjdFRpbWUiLCJpdGVtIiwiJHV0aWxzIiwic2hvd1RvYXN0IiwicGFyc2VJbnQiLCJmb3JtYXRUaW1lIiwidG9nZ2xlVGltZXIiLCJwYXVzZVRpbWVyIiwic3RhcnRUaW1lciIsInNldEludGVydmFsIiwiY29tcGxldGVUaW1lciIsInJlc2V0VGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=