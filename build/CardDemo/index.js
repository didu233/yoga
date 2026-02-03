(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\Administrator\\QuickAppProjects\\yoga-light&cacheDirectory&plugins[]=c:\\Users\\Administrator\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\Administrator\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/CardDemo/index.ux?uxType=card":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\Users\Administrator\QuickAppProjects\yoga-light&cacheDirectory&plugins[]=c:\Users\Administrator\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\Administrator\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/CardDemo/index.ux?uxType=card ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  private: {
    text: '欢迎使用快应用卡片',
    des: '卡片是一种轻量级的快应用，快应用卡片使快应用能够在其他app和系统里提供可扩展的app功能'
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

/***/ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/CardDemo/index.ux?uxType=card&cardEntry=CardDemo":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/CardDemo/index.ux?uxType=card&cardEntry=CardDemo ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".demo-page": {
    "flex": 1,
    "flexDirection": "column",
    "alignItems": "center"
  }
}

/***/ }),

/***/ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/CardDemo/index.ux?uxType=card&&cardEntry=CardDemo&minCardRuntimeVersion=1032":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/CardDemo/index.ux?uxType=card&&cardEntry=CardDemo&minCardRuntimeVersion=1032 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return this.text}
      }
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.des}
      }
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
/*!************************************************************************************************************!*\
  !*** ./src/CardDemo/index.ux?uxType=card&minCardRuntimeVersion=1032&cardEntry=CardDemo&isTargetVivo=false ***!
  \************************************************************************************************************/

var $app_script$ = __webpack_require__(/*! !../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\Users\Administrator\QuickAppProjects\yoga-light&cacheDirectory&plugins[]=c:\Users\Administrator\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\Administrator\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=card */ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\Administrator\\QuickAppProjects\\yoga-light&cacheDirectory&plugins[]=c:\\Users\\Administrator\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\Administrator\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/CardDemo/index.ux?uxType=card")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=card&&cardEntry=CardDemo&minCardRuntimeVersion=1032 */ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/CardDemo/index.ux?uxType=card&&cardEntry=CardDemo&minCardRuntimeVersion=1032")
    $app_module$.exports.style = __webpack_require__(/*! !../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=card&cardEntry=CardDemo */ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/CardDemo/index.ux?uxType=card&cardEntry=CardDemo")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZERlbW9cXGluZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FTQTtFQUNBQSxPQUFBO0lBQ0FDLElBQUE7SUFDQUMsR0FBQSxFQUNBO0VBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztVQ3BCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDckJBLG1CQUFtQixtQkFBTyxDQUFDLHcyRUFBMnNDO0FBQ3R1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsa3lCQUE4WTtBQUMxYixpQ0FBaUMsbUJBQU8sQ0FBQyxvd0JBQStYO0FBQ3hhLENBQUM7QUFDRCx5Q0FBeUMsaUJBQWlCLE9BQXdCLEVBQUUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3lvZ2EtbGlnaHQvLi9zcmMvQ2FyZERlbW8vaW5kZXgudXg/Yjg4OSIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL0NhcmREZW1vL2luZGV4LnV4P2UyODIiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9DYXJkRGVtby9pbmRleC51eD8wZjE5Iiwid2VicGFjazovL3lvZ2EtbGlnaHQvd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL0NhcmREZW1vL2luZGV4LnV4Pzc1MjAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8IS0tIHRlbXBsYXRl6YeM5Y+q6IO95pyJ5LiA5Liq5qC56IqC54K5IC0tPlxuICA8ZGl2IGNsYXNzPVwiZGVtby1wYWdlXCI+XG4gICAgPHRleHQ+e3sgdGV4dCB9fTwvdGV4dD5cbiAgICA8dGV4dD57eyBkZXMgfX08L3RleHQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJpdmF0ZToge1xuICAgIHRleHQ6ICfmrKLov47kvb/nlKjlv6vlupTnlKjljaHniYcnLFxuICAgIGRlczpcbiAgICAgICfljaHniYfmmK/kuIDnp43ovbvph4/nuqfnmoTlv6vlupTnlKjvvIzlv6vlupTnlKjljaHniYfkvb/lv6vlupTnlKjog73lpJ/lnKjlhbbku5ZhcHDlkozns7vnu5/ph4zmj5Dkvpvlj6/mianlsZXnmoRhcHDlip/og70nXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4uZGVtby1wYWdlIHtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjwvc3R5bGU+XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuZGVtby1wYWdlXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImRlbW8tcGFnZVwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRleHR9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5kZXN9XG4gICAgICB9XG4gICAgfVxuICBdXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vQXBwRGF0YS9Mb2NhbC9Qcm9ncmFtcy9RdWljayBBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3NjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vQXBwRGF0YS9Mb2NhbC9Qcm9ncmFtcy9RdWljayBBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9wYWNrYWdlci9saWIvbG9hZGVycy9tb2R1bGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uL0FwcERhdGEvTG9jYWwvUHJvZ3JhbXMvUXVpY2sgQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2N3ZD1jOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXFF1aWNrQXBwUHJvamVjdHNcXFxceW9nYS1saWdodCZjYWNoZURpcmVjdG9yeSZwbHVnaW5zW109YzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcYmFiZWwtcGx1Z2luLWpzeC5qcyZjb21tZW50cz1mYWxzZSZjb25maWdGaWxlPWM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxwYWNrYWdlclxcXFxiYWJlbC5jb25maWcuanMhLi4vLi4vLi4vLi4vQXBwRGF0YS9Mb2NhbC9Qcm9ncmFtcy9RdWljayBBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2FjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vQXBwRGF0YS9Mb2NhbC9Qcm9ncmFtcy9RdWljayBBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vaW5kZXgudXg/dXhUeXBlPWNhcmRcIilcbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKSB7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9BcHBEYXRhL0xvY2FsL1Byb2dyYW1zL1F1aWNrIEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uL0FwcERhdGEvTG9jYWwvUHJvZ3JhbXMvUXVpY2sgQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlIS4vaW5kZXgudXg/dXhUeXBlPWNhcmQmJmNhcmRFbnRyeT1DYXJkRGVtbyZtaW5DYXJkUnVudGltZVZlcnNpb249MTAzMlwiKVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9BcHBEYXRhL0xvY2FsL1Byb2dyYW1zL1F1aWNrIEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuLi8uLi8uLi8uLi9BcHBEYXRhL0xvY2FsL1Byb2dyYW1zL1F1aWNrIEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuL2luZGV4LnV4P3V4VHlwZT1jYXJkJmNhcmRFbnRyeT1DYXJkRGVtb1wiKVxufSk7XG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L2luZGV4Jyx7IHBhY2thZ2VyVmVyc2lvbjogUVVJQ0tBUFBfVE9PTEtJVF9WRVJTSU9OIH0pOyJdLCJuYW1lcyI6WyJwcml2YXRlIiwidGV4dCIsImRlcyJdLCJzb3VyY2VSb290IjoiIn0=