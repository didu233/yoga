(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\babel-loader\\lib\\index.js?cwd=b:\\quickApp\\yoga&cacheDirectory&plugins[]=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/Feedback/index.ux?uxType=page":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\babel-loader\lib\index.js?cwd=b:\quickApp\yoga&cacheDirectory&plugins[]=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/pages/Feedback/index.ux?uxType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _system = _interopRequireDefault($app_require$("@app-module/system.router"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  private: {
    feedbackText: ''
  },
  onInit() {
    this.$page.setTitleBar({
      text: '投诉与建议'
    });
  },
  onTextChange(e) {
    this.feedbackText = e.text || '';
  },
  submitFeedback() {
    if (!this.feedbackText || this.feedbackText.trim().length === 0) {
      $utils.showToast('请输入反馈内容');
      return;
    }
    $utils.showToast('感谢您的反馈，我们会认真对待！');
    setTimeout(() => {
      _system.default.back();
    }, 1000);
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

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/Feedback/index.ux?uxType=page":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\less-loader\dist\cjs.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/pages/Feedback/index.ux?uxType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".wrapper": {
    "flexDirection": "column",
    "alignItems": "stretch",
    "flex": 1,
    "width": "100%",
    "backgroundColor": "#FFF7F1"
  },
  ".content-main": {
    "flex": 1,
    "flexDirection": "column",
    "alignItems": "stretch",
    "width": "100%",
    "paddingTop": "24px",
    "paddingRight": "20px",
    "paddingBottom": "24px",
    "paddingLeft": "20px"
  },
  ".tip-card": {
    "flexDirection": "column",
    "alignItems": "center",
    "width": "100%",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "16px",
    "paddingTop": "24px",
    "paddingRight": "24px",
    "paddingBottom": "24px",
    "paddingLeft": "24px",
    "marginBottom": "24px",
    "borderLeftWidth": "4px",
    "borderLeftColor": "#E6A87C"
  },
  ".tip-title": {
    "fontSize": "32px",
    "fontWeight": "bold",
    "color": "#3A2E28",
    "marginBottom": "8px"
  },
  ".tip-text": {
    "fontSize": "26px",
    "color": "#8A6F63",
    "textAlign": "center"
  },
  ".form-section": {
    "flexDirection": "column",
    "alignItems": "stretch",
    "width": "100%",
    "marginBottom": "24px"
  },
  ".label": {
    "fontSize": "28px",
    "color": "#3A2E28",
    "marginBottom": "12px",
    "paddingLeft": "4px"
  },
  ".textarea": {
    "width": "100%",
    "minHeight": "400px",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "16px",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "fontSize": "28px",
    "color": "#3A2E28",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#F0E2D8",
    "borderRightColor": "#F0E2D8",
    "borderBottomColor": "#F0E2D8",
    "borderLeftColor": "#F0E2D8",
    "placeholderColor": "#8A6F63"
  },
  ".char-count": {
    "fontSize": "24px",
    "color": "#8A6F63",
    "textAlign": "right",
    "marginTop": "8px",
    "paddingRight": "4px"
  },
  ".submit-btn": {
    "width": "100%",
    "height": "88px",
    "borderRadius": "44px",
    "fontSize": "32px",
    "backgroundColor": "#E6A87C",
    "color": "#FFFFFF",
    "backgroundColor:disabled": "#F0E2D8",
    "color:disabled": "#8A6F63"
  }
}

/***/ }),

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/Feedback/index.ux?uxType=page&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/pages/Feedback/index.ux?uxType=page& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        "content-main"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "tip-card"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "投诉与建议"
              },
              "classList": [
                "tip-title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "如有问题或建议，欢迎向我们反馈"
              },
              "classList": [
                "tip-text"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "form-section"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "请输入您的反馈内容"
              },
              "classList": [
                "label"
              ]
            },
            {
              "type": "textarea",
              "attr": {
                "placeholder": "请详细描述您遇到的问题或建议...",
                "maxlength": "500",
                "value": function () {return this.feedbackText}
              },
              "classList": [
                "textarea"
              ],
              "events": {
                "change": "onTextChange"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return '' + (this.feedbackText.length) + '/500'}
              },
              "classList": [
                "char-count"
              ]
            }
          ]
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "提交反馈",
            "disabled": function () {return this.feedbackText.length===0}
          },
          "classList": [
            "submit-btn"
          ],
          "events": {
            "click": "submitFeedback"
          }
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
/*!*************************************************!*\
  !*** ./src/pages/Feedback/index.ux?uxType=page ***!
  \*************************************************/

var $app_script$ = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\babel-loader\lib\index.js?cwd=b:\quickApp\yoga&cacheDirectory&plugins[]=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\babel-loader\\lib\\index.js?cwd=b:\\quickApp\\yoga&cacheDirectory&plugins[]=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/Feedback/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/Feedback/index.ux?uxType=page&")
    $app_module$.exports.style = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\less-loader\dist\cjs.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/Feedback/index.ux?uxType=page")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUNyQkEsbUJBQW1CLG1CQUFPLENBQUMsNDdFQUF5d0M7QUFDcHlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyxneEJBQTRZO0FBQ3hiLGlDQUFpQyxtQkFBTyxDQUFDLDBqQ0FBd2lCO0FBQ2psQixDQUFDO0FBQ0QseUNBQXlDLGlCQUFpQixPQUF3QixFQUFFLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b2dhLWxpZ2h0L0M6XFxVc2Vyc1xcZGlkaXUyMzNcXEFwcERhdGFcXExvY2FsXFxQcm9ncmFtc1xcUXVpY2sgQXBwIElERVxcYjpcXHF1aWNrQXBwXFx5b2dhXFxzcmNcXHBhZ2VzXFxGZWVkYmFja1xcaW5kZXgudXg/YjY0YiIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL3BhZ2VzL0ZlZWRiYWNrL2luZGV4LnV4PzU5ODgiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9wYWdlcy9GZWVkYmFjay9pbmRleC51eD8yNGEwIiwid2VicGFjazovL3lvZ2EtbGlnaHQvd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL3BhZ2VzL0ZlZWRiYWNrL2luZGV4LnV4P2ExNGIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1tYWluXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXAtY2FyZFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidGlwLXRpdGxlXCI+5oqV6K+J5LiO5bu66K6uPC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidGlwLXRleHRcIj7lpoLmnInpl67popjmiJblu7rorq7vvIzmrKLov47lkJHmiJHku6zlj43ppog8L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1zZWN0aW9uXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJsYWJlbFwiPuivt+i+k+WFpeaCqOeahOWPjemmiOWGheWuuTwvdGV4dD5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGNsYXNzPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLor7for6bnu4bmj4/ov7DmgqjpgYfliLDnmoTpl67popjmiJblu7rorq4uLi5cIlxyXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiNTAwXCJcclxuICAgICAgICAgIHZhbHVlPVwie3tmZWVkYmFja1RleHR9fVwiXHJcbiAgICAgICAgICBvbmNoYW5nZT1cIm9uVGV4dENoYW5nZVwiXHJcbiAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJjaGFyLWNvdW50XCI+e3tmZWVkYmFja1RleHQubGVuZ3RofX0vNTAwPC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3M9XCJzdWJtaXQtYnRuXCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICB2YWx1ZT1cIuaPkOS6pOWPjemmiFwiXHJcbiAgICAgICAgb25jbGljaz1cInN1Ym1pdEZlZWRiYWNrXCJcclxuICAgICAgICBkaXNhYmxlZD1cInt7ZmVlZGJhY2tUZXh0Lmxlbmd0aCA9PT0gMH19XCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcml2YXRlOiB7XHJcbiAgICBmZWVkYmFja1RleHQ6ICcnXHJcbiAgfSxcclxuICBvbkluaXQoKSB7XHJcbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHsgdGV4dDogJ+aKleivieS4juW7uuiuricgfSlcclxuICB9LFxyXG4gIG9uVGV4dENoYW5nZShlKSB7XHJcbiAgICB0aGlzLmZlZWRiYWNrVGV4dCA9IGUudGV4dCB8fCAnJ1xyXG4gIH0sXHJcbiAgc3VibWl0RmVlZGJhY2soKSB7XHJcbiAgICBpZiAoIXRoaXMuZmVlZGJhY2tUZXh0IHx8IHRoaXMuZmVlZGJhY2tUZXh0LnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgJHV0aWxzLnNob3dUb2FzdCgn6K+36L6T5YWl5Y+N6aaI5YaF5a65JylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICAkdXRpbHMuc2hvd1RvYXN0KCfmhJ/osKLmgqjnmoTlj43ppojvvIzmiJHku6zkvJrorqTnnJ/lr7nlvoXvvIEnKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5iYWNrKClcclxuICAgIH0sIDEwMDApXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XHJcbkBpbXBvcnQgJy4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZS5sZXNzJztcclxuXHJcbi53cmFwcGVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGZsZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJnLW1haW47XHJcbn1cclxuXHJcbi5jb250ZW50LW1haW4ge1xyXG4gIGZsZXg6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyNCAqIEBzaXplLWZhY3RvciAyMCAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLnRpcC1jYXJkIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2ICogQHNpemUtZmFjdG9yO1xyXG4gIHBhZGRpbmc6IDI0ICogQHNpemUtZmFjdG9yO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0ICogQHNpemUtZmFjdG9yO1xyXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA0ICogQHNpemUtZmFjdG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiBAYnJhbmQ7XHJcbn1cclxuXHJcbi50aXAtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogQGJsYWNrO1xyXG4gIG1hcmdpbi1ib3R0b206IDggKiBAc2l6ZS1mYWN0b3I7XHJcbn1cclxuXHJcbi50aXAtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGNvbG9yOiBAZ3JleTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLXNlY3Rpb24ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjQgKiBAc2l6ZS1mYWN0b3I7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiBAYmxhY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTIgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgcGFkZGluZy1sZWZ0OiA0ICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4udGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDQwMCAqIEBzaXplLWZhY3RvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTYgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgcGFkZGluZzogMjAgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiBAYmxhY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgQGJvcmRlci1jb2xvcjtcclxuICBwbGFjZWhvbGRlci1jb2xvcjogQGdyZXk7XHJcbn1cclxuXHJcbi5jaGFyLWNvdW50IHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6IEBncmV5O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDggKiBAc2l6ZS1mYWN0b3I7XHJcbiAgcGFkZGluZy1yaWdodDogNCAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODggKiBAc2l6ZS1mYWN0b3I7XHJcbiAgYm9yZGVyLXJhZGl1czogNDQgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IEBicmFuZDtcclxuICBjb2xvcjogQHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnN1Ym1pdC1idG46ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IEBib3JkZXItY29sb3I7XHJcbiAgY29sb3I6IEBncmV5O1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi53cmFwcGVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJzdHJldGNoXCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkY3RjFcIlxuICB9LFxuICBcIi5jb250ZW50LW1haW5cIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcInN0cmV0Y2hcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjI0cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyNHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi50aXAtY2FyZFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyNHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyNHB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCI0cHhcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNFNkE4N0NcIlxuICB9LFxuICBcIi50aXAtdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMnB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiY29sb3JcIjogXCIjM0EyRTI4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI4cHhcIlxuICB9LFxuICBcIi50aXAtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI2cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhBNkY2M1wiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuZm9ybS1zZWN0aW9uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJzdHJldGNoXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI0cHhcIlxuICB9LFxuICBcIi5sYWJlbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzNBMkUyOFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0cHhcIlxuICB9LFxuICBcIi50ZXh0YXJlYVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIm1pbkhlaWdodFwiOiBcIjQwMHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxNnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzQTJFMjhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNGMEUyRDhcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNGMEUyRDhcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNGMEUyRDhcIixcbiAgICBcInBsYWNlaG9sZGVyQ29sb3JcIjogXCIjOEE2RjYzXCJcbiAgfSxcbiAgXCIuY2hhci1jb3VudFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhBNkY2M1wiLFxuICAgIFwidGV4dEFsaWduXCI6IFwicmlnaHRcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjhweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNHB4XCJcbiAgfSxcbiAgXCIuc3VibWl0LWJ0blwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjg4cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjQ0cHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0U2QTg3Q1wiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6ZGlzYWJsZWRcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJjb2xvcjpkaXNhYmxlZFwiOiBcIiM4QTZGNjNcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIndyYXBwZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjb250ZW50LW1haW5cIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidGlwLWNhcmRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5oqV6K+J5LiO5bu66K6uXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidGlwLXRpdGxlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlpoLmnInpl67popjmiJblu7rorq7vvIzmrKLov47lkJHmiJHku6zlj43ppohcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0aXAtdGV4dFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJmb3JtLXNlY3Rpb25cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6K+36L6T5YWl5oKo55qE5Y+N6aaI5YaF5a65XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7for6bnu4bmj4/ov7DmgqjpgYfliLDnmoTpl67popjmiJblu7rorq4uLi5cIixcbiAgICAgICAgICAgICAgICBcIm1heGxlbmd0aFwiOiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmZlZWRiYWNrVGV4dH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjaGFuZ2VcIjogXCJvblRleHRDaGFuZ2VcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICcnICsgKHRoaXMuZmVlZGJhY2tUZXh0Lmxlbmd0aCkgKyAnLzUwMCd9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImNoYXItY291bnRcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwi5o+Q5Lqk5Y+N6aaIXCIsXG4gICAgICAgICAgICBcImRpc2FibGVkXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5mZWVkYmFja1RleHQubGVuZ3RoPT09MH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic3VibWl0LWJ0blwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwic3VibWl0RmVlZGJhY2tcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzY3JpcHQtbG9hZGVyLmpzIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxccGFja2FnZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcbW9kdWxlLWxvYWRlci5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz9jd2Q9YjpcXFxccXVpY2tBcHBcXFxceW9nYSZjYWNoZURpcmVjdG9yeSZwbHVnaW5zW109YzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGJhYmVsLXBsdWdpbi1qc3guanMmY29tbWVudHM9ZmFsc2UmY29uZmlnRmlsZT1jOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXHBhY2thZ2VyXFxcXGJhYmVsLmNvbmZpZy5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcYWNjZXNzLWxvYWRlci5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHQhLi9pbmRleC51eD91eFR5cGU9cGFnZVwiKVxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpIHtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSByZXF1aXJlKFwiIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZS1sb2FkZXIuanMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGUhLi9pbmRleC51eD91eFR5cGU9cGFnZSZcIilcbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9IHJlcXVpcmUoXCIhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGxlc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxmcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIS4vaW5kZXgudXg/dXhUeXBlPXBhZ2VcIilcbn0pO1xuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcseyBwYWNrYWdlclZlcnNpb246IFFVSUNLQVBQX1RPT0xLSVRfVkVSU0lPTiB9KTsiXSwibmFtZXMiOlsiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwicHJpdmF0ZSIsImZlZWRiYWNrVGV4dCIsIm9uSW5pdCIsIiRwYWdlIiwic2V0VGl0bGVCYXIiLCJ0ZXh0Iiwib25UZXh0Q2hhbmdlIiwic3VibWl0RmVlZGJhY2siLCJ0cmltIiwibGVuZ3RoIiwiJHV0aWxzIiwic2hvd1RvYXN0Iiwic2V0VGltZW91dCIsInJvdXRlciIsImJhY2siXSwic291cmNlUm9vdCI6IiJ9