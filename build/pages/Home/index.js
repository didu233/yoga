(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\Administrator\\QuickAppProjects\\yoga-light&cacheDirectory&plugins[]=c:\\Users\\Administrator\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\Administrator\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Home/index.ux?uxType=page":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\Users\Administrator\QuickAppProjects\yoga-light&cacheDirectory&plugins[]=c:\Users\Administrator\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\Administrator\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Home/index.ux?uxType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _system = _interopRequireDefault($app_require$("@app-module/system.router"));
var _system2 = _interopRequireDefault($app_require$("@app-module/system.storage"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  private: {
    isShowPrivacyPopup: false
  },
  onInit() {
    this.$page.setTitleBar({
      text: '轻瑜伽'
    });
  },
  onShow() {
    const that = this;
    _system2.default.get({
      key: 'isAgreePrivacyPolicy',
      success: function (data) {
        if (data === 'true') {
          that.isShowPrivacyPopup = false;
        } else {
          setTimeout(() => {
            that.isShowPrivacyPopup = true;
          }, 500);
        }
      },
      fail: function (data, code) {
        setTimeout(() => {
          that.isShowPrivacyPopup = true;
        }, 500);
      }
    });
  },
  goToMeditation() {
    _system.default.push({
      uri: '/pages/Meditation'
    });
  },
  goToPractice() {
    _system.default.push({
      uri: 'pages/PracticeList'
    });
  },
  goToKnowledge() {
    _system.default.push({
      uri: 'pages/KnowledgeList'
    });
  },
  goToPrivacyPolicy(type) {
    _system.default.push({
      uri: 'pages/PrivacyPolicy',
      params: {
        tab: type === 'agreement' ? 'agreement' : 'privacy'
      }
    });
  },
  disagree() {
    this.$app.exit();
  },
  agree() {
    const that = this;
    _system2.default.set({
      key: 'isAgreePrivacyPolicy',
      value: 'true',
      success: function (data) {
        console.log('隐私政策同意状态已保存');
      },
      fail: function (data, code) {
        console.log('保存失败，code = ' + code);
      }
    });
    this.isShowPrivacyPopup = false;
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

/***/ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/less-loader/dist/cjs.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Home/index.ux?uxType=page":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/less-loader/dist/cjs.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Home/index.ux?uxType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".wrapper": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "flex": 1,
    "backgroundColor": "#FFF7F1",
    "position": "relative"
  },
  ".header": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "100%",
    "paddingTop": "40px",
    "paddingRight": "20px",
    "paddingBottom": "30px",
    "paddingLeft": "20px"
  },
  ".app-title": {
    "fontSize": "48px",
    "fontWeight": "bold",
    "color": "#3A2E28",
    "marginBottom": "10px"
  },
  ".app-subtitle": {
    "fontSize": "28px",
    "color": "#8A6F63"
  },
  ".content": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "width": "100%",
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px"
  },
  ".card": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "100%",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "16px",
    "paddingTop": "30px",
    "paddingRight": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "30px",
    "marginBottom": "24px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#F0E2D8",
    "borderRightColor": "#F0E2D8",
    "borderBottomColor": "#F0E2D8",
    "borderLeftColor": "#F0E2D8",
    "flexShrink": 0
  },
  ".card-icon": {
    "fontSize": "60px",
    "marginBottom": "16px"
  },
  ".card-title": {
    "fontSize": "36px",
    "fontWeight": "bold",
    "color": "#3A2E28",
    "marginBottom": "8px"
  },
  ".card-desc": {
    "fontSize": "26px",
    "color": "#8A6F63",
    "textAlign": "center"
  },
  ".privacy-popup-bg": {
    "width": "100%",
    "height": "100%",
    "backgroundColor": "rgba(0,0,0,0.5)",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "position": "absolute",
    "top": "0px",
    "left": "0px",
    "right": "0px",
    "bottom": "0px"
  },
  ".privacy-popup-box": {
    "width": "600px",
    "minHeight": "400px",
    "flexDirection": "column",
    "alignItems": "center",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "20px",
    "paddingTop": "40px",
    "paddingRight": "40px",
    "paddingBottom": "40px",
    "paddingLeft": "40px"
  },
  ".privacy-popup-title": {
    "fontSize": "36px",
    "color": "#3A2E28",
    "fontWeight": "bold",
    "marginBottom": "30px",
    "textAlign": "center"
  },
  ".privacy-popup-content": {
    "fontSize": "28px",
    "color": "#8A6F63",
    "lineHeight": "1.6px",
    "width": "100%",
    "marginBottom": "40px"
  },
  ".privacy-link": {
    "color": "#E6A87C",
    "textDecoration": "underline"
  },
  ".privacy-popup-btn-box": {
    "width": "100%",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginTop": "20px"
  },
  ".privacy-popup-btn-disagree": {
    "width": "220px",
    "height": "80px",
    "borderTopWidth": "2px",
    "borderRightWidth": "2px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "2px",
    "borderStyle": "solid",
    "borderTopColor": "#979797",
    "borderRightColor": "#979797",
    "borderBottomColor": "#979797",
    "borderLeftColor": "#979797",
    "color": "#999999",
    "textAlign": "center",
    "borderRadius": "12px",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "fontSize": "28px"
  },
  ".privacy-popup-btn-agree": {
    "width": "220px",
    "height": "80px",
    "color": "#FFFFFF",
    "backgroundColor": "#E6A87C",
    "textAlign": "center",
    "borderRadius": "12px",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "fontSize": "28px"
  }
}

/***/ }),

/***/ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Home/index.ux?uxType=page&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Home/index.ux?uxType=page& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        "header"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "轻瑜伽"
          },
          "classList": [
            "app-title"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "让身心回归平静"
          },
          "classList": [
            "app-subtitle"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "content"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "card"
          ],
          "events": {
            "click": "goToMeditation"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "card-icon",
                "meditation-icon"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "计时冥想"
              },
              "classList": [
                "card-title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "专注当下，静心冥想"
              },
              "classList": [
                "card-desc"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "card"
          ],
          "events": {
            "click": "goToPractice"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "card-icon",
                "practice-icon"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "练习动作"
              },
              "classList": [
                "card-title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "学习标准瑜伽体式"
              },
              "classList": [
                "card-desc"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "card"
          ],
          "events": {
            "click": "goToKnowledge"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "card-icon",
                "knowledge-icon"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "瑜伽小知识"
              },
              "classList": [
                "card-title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "了解更多瑜伽知识"
              },
              "classList": [
                "card-desc"
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
        "privacy-popup-bg"
      ],
      "shown": function () {return this.isShowPrivacyPopup},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "privacy-popup-box"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "温馨提示"
              },
              "classList": [
                "privacy-popup-title"
              ]
            },
            {
              "type": "text",
              "attr": {},
              "classList": [
                "privacy-popup-content"
              ],
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": "欢迎使用本应用！本应用非常重视您的隐私和个人信息保护。在您使用本应用前，请认真阅读"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "《用户协议》"
                  },
                  "classList": [
                    "privacy-link"
                  ],
                  "events": {
                    "click": function (evt) { return this.goToPrivacyPolicy('agreement',evt)}
                  }
                },
                {
                  "type": "span",
                  "attr": {
                    "value": "及"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "《隐私政策》"
                  },
                  "classList": [
                    "privacy-link"
                  ],
                  "events": {
                    "click": function (evt) { return this.goToPrivacyPolicy('privacy',evt)}
                  }
                },
                {
                  "type": "span",
                  "attr": {
                    "value": "您同意并接受全部条款后方可开始使用本应用。"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "privacy-popup-btn-box"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "不同意"
                  },
                  "classList": [
                    "privacy-popup-btn-disagree"
                  ],
                  "events": {
                    "click": "disagree"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "同意并继续"
                  },
                  "classList": [
                    "privacy-popup-btn-agree"
                  ],
                  "events": {
                    "click": "agree"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

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
/*!*********************************************!*\
  !*** ./src/pages/Home/index.ux?uxType=page ***!
  \*********************************************/

var $app_script$ = __webpack_require__(/*! !../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\Users\Administrator\QuickAppProjects\yoga-light&cacheDirectory&plugins[]=c:\Users\Administrator\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\Administrator\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\Administrator\\QuickAppProjects\\yoga-light&cacheDirectory&plugins[]=c:\\Users\\Administrator\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\Administrator\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Home/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Home/index.ux?uxType=page&")
    $app_module$.exports.style = __webpack_require__(/*! !../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/less-loader/dist/cjs.js!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/less-loader/dist/cjs.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Home/index.ux?uxType=page")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7VUM5UUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3JCQSxtQkFBbUIsbUJBQU8sQ0FBQyx5M0VBQTB0QztBQUNydkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLDhzQkFBc1c7QUFDbFosaUNBQWlDLG1CQUFPLENBQUMsMjlCQUFpZjtBQUMxaEIsQ0FBQztBQUNELHlDQUF5QyxpQkFBaUIsT0FBd0IsRUFBRSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9wYWdlcy9Ib21lL2luZGV4LnV4PzgxNTEiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9wYWdlcy9Ib21lL2luZGV4LnV4PzM3YjIiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9wYWdlcy9Ib21lL2luZGV4LnV4PzRhYmUiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC93ZWJwYWNrL2Jvb3RzdHJhcD83ZjgwIiwid2VicGFjazovL3lvZ2EtbGlnaHQvLi9zcmMvcGFnZXMvSG9tZS9pbmRleC51eD8wYTE3Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImFwcC10aXRsZVwiPui9u+eRnOS8vTwvdGV4dD5cclxuICAgICAgPHRleHQgY2xhc3M9XCJhcHAtc3VidGl0bGVcIj7orqnouqvlv4Plm57lvZLlubPpnZk8L3RleHQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgb25jbGljaz1cImdvVG9NZWRpdGF0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaWNvbiBtZWRpdGF0aW9uLWljb25cIj7wn6eYPC9kaXY+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+6K6h5pe25Yal5oOzPC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1kZXNjXCI+5LiT5rOo5b2T5LiL77yM6Z2Z5b+D5Yal5oOzPC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBvbmNsaWNrPVwiZ29Ub1ByYWN0aWNlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaWNvbiBwcmFjdGljZS1pY29uXCI+8J+nmOKAjeKZgO+4jzwvZGl2PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC10aXRsZVwiPue7g+S5oOWKqOS9nDwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtZGVzY1wiPuWtpuS5oOagh+WHhueRnOS8veS9k+W8jzwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgb25jbGljaz1cImdvVG9Lbm93bGVkZ2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pY29uIGtub3dsZWRnZS1pY29uXCI+8J+TmjwvZGl2PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC10aXRsZVwiPueRnOS8veWwj+efpeivhjwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtZGVzY1wiPuS6huino+abtOWkmueRnOS8veefpeivhjwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0g6ZqQ56eB5pS/562W5by556qXIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInByaXZhY3ktcG9wdXAtYmdcIiBpZj1cInt7aXNTaG93UHJpdmFjeVBvcHVwfX1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInByaXZhY3ktcG9wdXAtYm94XCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJwcml2YWN5LXBvcHVwLXRpdGxlXCI+5rip6aao5o+Q56S6PC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicHJpdmFjeS1wb3B1cC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8c3Bhbj7mrKLov47kvb/nlKjmnKzlupTnlKjvvIHmnKzlupTnlKjpnZ7luLjph43op4bmgqjnmoTpmpDnp4HlkozkuKrkurrkv6Hmga/kv53miqTjgILlnKjmgqjkvb/nlKjmnKzlupTnlKjliY3vvIzor7forqTnnJ/pmIXor7s8L3NwYW4+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInByaXZhY3ktbGlua1wiIG9uY2xpY2s9XCJnb1RvUHJpdmFjeVBvbGljeSgnYWdyZWVtZW50JylcIj7jgIrnlKjmiLfljY/orq7jgIs8L3RleHQ+XHJcbiAgICAgICAgICA8c3Bhbj7lj4o8L3NwYW4+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInByaXZhY3ktbGlua1wiIG9uY2xpY2s9XCJnb1RvUHJpdmFjeVBvbGljeSgncHJpdmFjeScpXCI+44CK6ZqQ56eB5pS/562W44CLPC90ZXh0PlxyXG4gICAgICAgICAgPHNwYW4+5oKo5ZCM5oSP5bm25o6l5Y+X5YWo6YOo5p2h5qy+5ZCO5pa55Y+v5byA5aeL5L2/55So5pys5bqU55So44CCPC9zcGFuPlxyXG4gICAgICAgIDwvdGV4dD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJpdmFjeS1wb3B1cC1idG4tYm94XCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInByaXZhY3ktcG9wdXAtYnRuLWRpc2FncmVlXCIgb25jbGljaz1cImRpc2FncmVlXCI+5LiN5ZCM5oSPPC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwcml2YWN5LXBvcHVwLWJ0bi1hZ3JlZVwiIG9uY2xpY2s9XCJhZ3JlZVwiPuWQjOaEj+W5tue7p+e7rTwvdGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcml2YXRlOiB7XHJcbiAgICBpc1Nob3dQcml2YWN5UG9wdXA6IGZhbHNlXHJcbiAgfSxcclxuICBvbkluaXQoKSB7XHJcbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHsgdGV4dDogJ+i9u+eRnOS8vScgfSlcclxuICB9LFxyXG4gIG9uU2hvdygpIHtcclxuICAgIC8vIOajgOafpeaYr+WQpuW3suWQjOaEj+makOengeaUv+etllxyXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgIHN0b3JhZ2UuZ2V0KHtcclxuICAgICAga2V5OiAnaXNBZ3JlZVByaXZhY3lQb2xpY3knLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgdGhhdC5pc1Nob3dQcml2YWN5UG9wdXAgPSBmYWxzZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhhdC5pc1Nob3dQcml2YWN5UG9wdXAgPSB0cnVlXHJcbiAgICAgICAgICB9LCA1MDApXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbihkYXRhLCBjb2RlKSB7XHJcbiAgICAgICAgLy8g5aaC5p6c6I635Y+W5aSx6LSl77yM5pi+56S65by556qXXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGF0LmlzU2hvd1ByaXZhY3lQb3B1cCA9IHRydWVcclxuICAgICAgICB9LCA1MDApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICBnb1RvTWVkaXRhdGlvbigpIHtcclxuICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgdXJpOiAnL3BhZ2VzL01lZGl0YXRpb24nXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ29Ub1ByYWN0aWNlKCkge1xyXG4gICAgcm91dGVyLnB1c2goe1xyXG4gICAgICB1cmk6ICdwYWdlcy9QcmFjdGljZUxpc3QnXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ29Ub0tub3dsZWRnZSgpIHtcclxuICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgdXJpOiAncGFnZXMvS25vd2xlZGdlTGlzdCdcclxuICAgIH0pXHJcbiAgfSxcclxuICBnb1RvUHJpdmFjeVBvbGljeSh0eXBlKSB7XHJcbiAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgIHVyaTogJ3BhZ2VzL1ByaXZhY3lQb2xpY3knLFxyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICB0YWI6IHR5cGUgPT09ICdhZ3JlZW1lbnQnID8gJ2FncmVlbWVudCcgOiAncHJpdmFjeSdcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGRpc2FncmVlKCkge1xyXG4gICAgdGhpcy4kYXBwLmV4aXQoKVxyXG4gIH0sXHJcbiAgYWdyZWUoKSB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgc3RvcmFnZS5zZXQoe1xyXG4gICAgICBrZXk6ICdpc0FncmVlUHJpdmFjeVBvbGljeScsXHJcbiAgICAgIHZhbHVlOiAndHJ1ZScsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn6ZqQ56eB5pS/562W5ZCM5oSP54q25oCB5bey5L+d5a2YJylcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogZnVuY3Rpb24oZGF0YSwgY29kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfkv53lrZjlpLHotKXvvIxjb2RlID0gJyArIGNvZGUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICB0aGlzLmlzU2hvd1ByaXZhY3lQb3B1cCA9IGZhbHNlXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XHJcbkBpbXBvcnQgJy4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZS5sZXNzJztcclxuXHJcbi53cmFwcGVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJnLW1haW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNDAgKiBAc2l6ZS1mYWN0b3IgMjAgKiBAc2l6ZS1mYWN0b3IgMzAgKiBAc2l6ZS1mYWN0b3I7XHJcbn1cclxuXHJcbi5hcHAtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogQGJsYWNrO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4uYXBwLXN1YnRpdGxlIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgY29sb3I6IEBncmV5O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDIwICogQHNpemUtZmFjdG9yIDIwICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IEB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNiAqIEBzaXplLWZhY3RvcjtcclxuICBwYWRkaW5nOiAzMCAqIEBzaXplLWZhY3RvcjtcclxuICBtYXJnaW4tYm90dG9tOiAyNCAqIEBzaXplLWZhY3RvcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyLWNvbG9yO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uY2FyZC1pY29uIHtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTYgKiBAc2l6ZS1mYWN0b3I7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IEBibGFjaztcclxuICBtYXJnaW4tYm90dG9tOiA4ICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4uY2FyZC1kZXNjIHtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgY29sb3I6IEBncmV5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyog6ZqQ56eB5pS/562W5by556qX5qC35byPICovXHJcbi5wcml2YWN5LXBvcHVwLWJnIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4ucHJpdmFjeS1wb3B1cC1ib3gge1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwICogQHNpemUtZmFjdG9yO1xyXG4gIHBhZGRpbmc6IDQwICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4ucHJpdmFjeS1wb3B1cC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGNvbG9yOiBAYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzAgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJpdmFjeS1wb3B1cC1jb250ZW50IHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgY29sb3I6IEBncmV5O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDAgKiBAc2l6ZS1mYWN0b3I7XHJcbn1cclxuXHJcbi5wcml2YWN5LWxpbmsge1xyXG4gIGNvbG9yOiBAYnJhbmQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5wcml2YWN5LXBvcHVwLWJ0bi1ib3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjAgKiBAc2l6ZS1mYWN0b3I7XHJcbn1cclxuXHJcbi5wcml2YWN5LXBvcHVwLWJ0bi1kaXNhZ3JlZSB7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjOTc5Nzk3O1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMiAqIEBzaXplLWZhY3RvcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcblxyXG4ucHJpdmFjeS1wb3B1cC1idG4tYWdyZWUge1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgY29sb3I6IEB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnJhbmQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEyICogQHNpemUtZmFjdG9yO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLndyYXBwZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGN0YxXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCIuaGVhZGVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHB4XCJcbiAgfSxcbiAgXCIuYXBwLXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNDhweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIixcbiAgICBcImNvbG9yXCI6IFwiIzNBMkUyOFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBweFwiXG4gIH0sXG4gIFwiLmFwcC1zdWJ0aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhBNkY2M1wiXG4gIH0sXG4gIFwiLmNvbnRlbnRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi5jYXJkXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyNHB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI0YwRTJEOFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJmbGV4U2hyaW5rXCI6IDBcbiAgfSxcbiAgXCIuY2FyZC1pY29uXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNjBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTZweFwiXG4gIH0sXG4gIFwiLmNhcmQtdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNnB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiY29sb3JcIjogXCIjM0EyRTI4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI4cHhcIlxuICB9LFxuICBcIi5jYXJkLWRlc2NcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4QTZGNjNcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnByaXZhY3ktcG9wdXAtYmdcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuNSlcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogXCIwcHhcIixcbiAgICBcImxlZnRcIjogXCIwcHhcIixcbiAgICBcInJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJib3R0b21cIjogXCIwcHhcIlxuICB9LFxuICBcIi5wcml2YWN5LXBvcHVwLWJveFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjYwMHB4XCIsXG4gICAgXCJtaW5IZWlnaHRcIjogXCI0MDBweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjQwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcHhcIlxuICB9LFxuICBcIi5wcml2YWN5LXBvcHVwLXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzZweFwiLFxuICAgIFwiY29sb3JcIjogXCIjM0EyRTI4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIucHJpdmFjeS1wb3B1cC1jb250ZW50XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjhweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOEE2RjYzXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMS42cHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLnByaXZhY3ktbGlua1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNFNkE4N0NcIixcbiAgICBcInRleHREZWNvcmF0aW9uXCI6IFwidW5kZXJsaW5lXCJcbiAgfSxcbiAgXCIucHJpdmFjeS1wb3B1cC1idG4tYm94XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCJcbiAgfSxcbiAgXCIucHJpdmFjeS1wb3B1cC1idG4tZGlzYWdyZWVcIjoge1xuICAgIFwid2lkdGhcIjogXCIyMjBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODBweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMnB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiIzk3OTc5N1wiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiM5Nzk3OTdcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiIzk3OTc5N1wiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiIzk3OTc5N1wiLFxuICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEycHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cHhcIlxuICB9LFxuICBcIi5wcml2YWN5LXBvcHVwLWJ0bi1hZ3JlZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjIyMHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNFNkE4N0NcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTJweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwid3JhcHBlclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImhlYWRlclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCLovbvnkZzkvL1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJhcHAtdGl0bGVcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuiuqei6q+W/g+WbnuW9kuW5s+mdmVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImFwcC1zdWJ0aXRsZVwiXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjb250ZW50XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImNhcmRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcImdvVG9NZWRpdGF0aW9uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjYXJkLWljb25cIixcbiAgICAgICAgICAgICAgICBcIm1lZGl0YXRpb24taWNvblwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6K6h5pe25Yal5oOzXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2FyZC10aXRsZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5LiT5rOo5b2T5LiL77yM6Z2Z5b+D5Yal5oOzXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2FyZC1kZXNjXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImNhcmRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcImdvVG9QcmFjdGljZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2FyZC1pY29uXCIsXG4gICAgICAgICAgICAgICAgXCJwcmFjdGljZS1pY29uXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnu4PkuaDliqjkvZxcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjYXJkLXRpdGxlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlrabkuaDmoIflh4bnkZzkvL3kvZPlvI9cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjYXJkLWRlc2NcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY2FyZFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwiZ29Ub0tub3dsZWRnZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2FyZC1pY29uXCIsXG4gICAgICAgICAgICAgICAgXCJrbm93bGVkZ2UtaWNvblwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi55Gc5Ly95bCP55+l6K+GXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2FyZC10aXRsZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5LqG6Kej5pu05aSa55Gc5Ly955+l6K+GXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2FyZC1kZXNjXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicHJpdmFjeS1wb3B1cC1iZ1wiXG4gICAgICBdLFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXNTaG93UHJpdmFjeVBvcHVwfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicHJpdmFjeS1wb3B1cC1ib3hcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5rip6aao5o+Q56S6XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicHJpdmFjeS1wb3B1cC10aXRsZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJwcml2YWN5LXBvcHVwLWNvbnRlbnRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5qyi6L+O5L2/55So5pys5bqU55So77yB5pys5bqU55So6Z2e5bi46YeN6KeG5oKo55qE6ZqQ56eB5ZKM5Liq5Lq65L+h5oGv5L+d5oqk44CC5Zyo5oKo5L2/55So5pys5bqU55So5YmN77yM6K+36K6k55yf6ZiF6K+7XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLjgIrnlKjmiLfljY/orq7jgItcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJwcml2YWN5LWxpbmtcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiB0aGlzLmdvVG9Qcml2YWN5UG9saWN5KCdhZ3JlZW1lbnQnLGV2dCl9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5Y+KXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLjgIrpmpDnp4HmlL/nrZbjgItcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJwcml2YWN5LWxpbmtcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiB0aGlzLmdvVG9Qcml2YWN5UG9saWN5KCdwcml2YWN5JyxldnQpfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuaCqOWQjOaEj+W5tuaOpeWPl+WFqOmDqOadoeasvuWQjuaWueWPr+W8gOWni+S9v+eUqOacrOW6lOeUqOOAglwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJwcml2YWN5LXBvcHVwLWJ0bi1ib3hcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5LiN5ZCM5oSPXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicHJpdmFjeS1wb3B1cC1idG4tZGlzYWdyZWVcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImRpc2FncmVlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlkIzmhI/lubbnu6fnu61cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJwcml2YWN5LXBvcHVwLWJ0bi1hZ3JlZVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwiYWdyZWVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL0FwcERhdGEvTG9jYWwvUHJvZ3JhbXMvUXVpY2sgQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0FwcERhdGEvTG9jYWwvUHJvZ3JhbXMvUXVpY2sgQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvcGFja2FnZXIvbGliL2xvYWRlcnMvbW9kdWxlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9BcHBEYXRhL0xvY2FsL1Byb2dyYW1zL1F1aWNrIEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jd2Q9YzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxRdWlja0FwcFByb2plY3RzXFxcXHlvZ2EtbGlnaHQmY2FjaGVEaXJlY3RvcnkmcGx1Z2luc1tdPWM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGJhYmVsLXBsdWdpbi1qc3guanMmY29tbWVudHM9ZmFsc2UmY29uZmlnRmlsZT1jOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxccGFja2FnZXJcXFxcYmFiZWwuY29uZmlnLmpzIS4uLy4uLy4uLy4uLy4uL0FwcERhdGEvTG9jYWwvUHJvZ3JhbXMvUXVpY2sgQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0FwcERhdGEvTG9jYWwvUHJvZ3JhbXMvUXVpY2sgQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL2luZGV4LnV4P3V4VHlwZT1wYWdlXCIpXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2luZGV4JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCkge1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vQXBwRGF0YS9Mb2NhbC9Qcm9ncmFtcy9RdWljayBBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3RlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9BcHBEYXRhL0xvY2FsL1Byb2dyYW1zL1F1aWNrIEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZSEuL2luZGV4LnV4P3V4VHlwZT1wYWdlJlwiKVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9BcHBEYXRhL0xvY2FsL1Byb2dyYW1zL1F1aWNrIEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuLi8uLi8uLi8uLi8uLi9BcHBEYXRhL0xvY2FsL1Byb2dyYW1zL1F1aWNrIEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vQXBwRGF0YS9Mb2NhbC9Qcm9ncmFtcy9RdWljayBBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhLi9pbmRleC51eD91eFR5cGU9cGFnZVwiKVxufSk7XG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L2luZGV4Jyx7IHBhY2thZ2VyVmVyc2lvbjogUVVJQ0tBUFBfVE9PTEtJVF9WRVJTSU9OIH0pOyJdLCJuYW1lcyI6WyJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfc3lzdGVtMiIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByaXZhdGUiLCJpc1Nob3dQcml2YWN5UG9wdXAiLCJvbkluaXQiLCIkcGFnZSIsInNldFRpdGxlQmFyIiwidGV4dCIsIm9uU2hvdyIsInRoYXQiLCJzdG9yYWdlIiwiZ2V0Iiwia2V5Iiwic3VjY2VzcyIsImRhdGEiLCJzZXRUaW1lb3V0IiwiZmFpbCIsImNvZGUiLCJnb1RvTWVkaXRhdGlvbiIsInJvdXRlciIsInB1c2giLCJ1cmkiLCJnb1RvUHJhY3RpY2UiLCJnb1RvS25vd2xlZGdlIiwiZ29Ub1ByaXZhY3lQb2xpY3kiLCJ0eXBlIiwicGFyYW1zIiwidGFiIiwiZGlzYWdyZWUiLCIkYXBwIiwiZXhpdCIsImFncmVlIiwic2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==