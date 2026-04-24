(function(){
    
    var $app_define_wrap$ = $app_define_wrap$ || function() {}
    var manifestJson = {"package":"com.xyujia","name":"芯瑜伽","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1070,"icon":"/assets/images/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.fetch"},{"name":"system.webview"}],"permissions":[{"origin":"*"}],"template/official":"demo-template","config":{"logLevel":"debug"},"router":{"entry":"pages/Home","pages":{"pages/Home":{"component":"index"},"pages/Tools":{"component":"index"},"pages/Mine":{"component":"index"},"pages/Feedback":{"component":"index"},"pages/Meditation":{"component":"index"},"pages/PracticeList":{"component":"index"},"pages/KnowledgeList":{"component":"index"},"pages/KnowledgeList/KnowledgeDetail":{"component":"index"},"pages/PrivacyPolicy":{"component":"index"}},"widgets":{"CardDemo":{"name":"CardDemo","description":"快应用卡片展示","component":"index","path":"/CardDemo","minPlatformVersion":1032,"targetManufactorys":["vivo"],"features":[]}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","pages":{"pages/Home":{"titleBarText":"芯瑜伽"},"pages/Tools":{"titleBarText":"工具"},"pages/Mine":{"titleBarText":"我的"},"pages/Feedback":{"titleBarText":"投诉与建议"},"pages/Meditation":{"titleBarText":"计时冥想"},"pages/PracticeList":{"titleBarText":"练习动作"},"pages/KnowledgeList":{"titleBarText":"瑜伽小知识"},"pages/KnowledgeList/KnowledgeDetail":{"titleBarText":"知识详情"},"pages/PrivacyPolicy":{"titleBarText":"隐私政策"}}}}
    var createAppHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helper/apis sync recursive \\.js":
/*!************************************!*\
  !*** ./src/helper/apis/ sync \.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./example.js": "./src/helper/apis/example.js",
	"./index.js": "./src/helper/apis/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/helper/apis sync recursive \\.js";

/***/ }),

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\manifest-loader.js?path=b:\\quickApp\\yoga\\src!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\babel-loader\\lib\\index.js?cwd=b:\\quickApp\\yoga&cacheDirectory&comments=false&configFile=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\manifest-loader.js?path=b:\quickApp\yoga\src!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\babel-loader\lib\index.js?cwd=b:\quickApp\yoga&cacheDirectory&comments=false&configFile=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const $utils = (__webpack_require__(/*! ./helper/utils */ "./src/helper/utils.js")["default"]);
const $apis = (__webpack_require__(/*! ./helper/apis */ "./src/helper/apis/index.js")["default"]);
const hook2global = __webpack_require__.g.__proto__ || __webpack_require__.g;
hook2global.$utils = $utils;
hook2global.$apis = $apis;
var _default = exports.default = {
  onCreate() {}
};}

/***/ }),

/***/ "./src/helper/ajax.js":
/*!****************************!*\
  !*** ./src/helper/ajax.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ./utils */ "./src/helper/utils.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * 封装了一些网络请求方法，方便通过 Promise 的形式请求接口
 */

const TIMEOUT = 20000;
Promise.prototype.finally = function (callback) {
  const P = this.constructor;
  return this.then(value => P.resolve(callback()).then(() => value), reason => P.resolve(callback()).then(() => {
    throw reason;
  }));
};

/**
 * 调用快应用 fetch 接口做网络请求
 * @param params
 */
function fetchPromise(params) {
  return new Promise((resolve, reject) => {
    _system.default.fetch({
      url: params.url,
      method: params.method,
      data: params.data
    }).then(response => {
      const result = response.data;
      const content = JSON.parse(result.data);
      /* @desc: 可跟具体不同业务接口数据，返回你所需要的部分，使得使用尽可能便捷 */
      content.success ? resolve(content.value) : resolve(content.message);
    }).catch((error, code) => {
      console.log(`🐛 request fail, code = ${code}`);
      reject(error);
    }).finally(() => {
      console.log(`✔️ request @${params.url} has been completed.`);
      resolve();
    });
  });
}

/**
 * 处理网络请求，timeout 是网络请求超时之后返回，默认 20s 可自行修改
 * @param params
 */
function requestHandle(params, timeout = TIMEOUT) {
  try {
    return Promise.race([fetchPromise(params), new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('网络状况不太好，再刷新一次？'));
      }, timeout);
    })]);
  } catch (error) {
    console.log(error);
  }
}
var _default = exports["default"] = {
  post: function (url, params) {
    return requestHandle({
      method: 'post',
      url: url,
      data: params
    });
  },
  get: function (url, params) {
    return requestHandle({
      method: 'get',
      url: _utils.default.queryString(url, params)
    });
  },
  put: function (url, params) {
    return requestHandle({
      method: 'put',
      url: url,
      data: params
    });
  }
  // 如果，method 您需要更多类型，可自行添加更多方法；
};

/***/ }),

/***/ "./src/helper/apis/example.js":
/*!************************************!*\
  !*** ./src/helper/apis/example.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _ajax = _interopRequireDefault(__webpack_require__(/*! ../ajax */ "./src/helper/ajax.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * @desc 在实际开发中，您可以将 baseUrl 替换为您的请求地址前缀；
 *
 * 已将 $apis 挂载在 global，您可以通过如下方式，进行调用：
 * $apis.example.getApi().then().catch().finally()
 *
 * 备注：如果您不需要发起请求，删除 apis 目录，以及 app.ux 中引用即可；
 */
const baseUrl = 'https://api.exampel.com/';
var _default = exports["default"] = {
  getApi(data) {
    return _ajax.default.get(`${baseUrl}your-project-api`, data);
  },
  postOtherApi(data) {
    return _ajax.default.post(`${baseUrl}your-project-api`, data);
  }
};

/***/ }),

/***/ "./src/helper/apis/index.js":
/*!**********************************!*\
  !*** ./src/helper/apis/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/**
 * 导出 apis 下目录的所有接口
 */
const files = __webpack_require__("./src/helper/apis sync recursive \\.js");
const modules = {};
files.keys().forEach(key => {
  if (key === './index.js') {
    return;
  }
  modules[key.replace(/(^\.\/|\.js$)/g, '')] = files(key).default;
});
var _default = exports["default"] = modules;

/***/ }),

/***/ "./src/helper/utils.js":
/*!*****************************!*\
  !*** ./src/helper/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/**
 * 您可以将常用的方法、或系统 API，统一封装，暴露全局，以便各页面、组件调用，而无需 require / import.
 */
const prompt = $app_require$('@app-module/system.prompt');

/**
 * 拼接 url 和参数
 */
function queryString(url, query) {
  let str = [];
  for (let key in query) {
    str.push(key + '=' + query[key]);
  }
  let paramStr = str.join('&');
  return paramStr ? `${url}?${paramStr}` : url;
}
function showToast(message = '', duration = 0) {
  if (!message) return;
  prompt.showToast({
    message: message,
    duration
  });
}

/**
 * 将秒数转换为分:秒格式
 * @param {number} seconds - 总秒数
 * @returns {string} 格式化的时间字符串，如 "05:30"
 */
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
var _default = exports["default"] = {
  showToast,
  queryString,
  formatTime
};

/***/ }),

/***/ "./src/manifest.json":
/*!***************************!*\
  !*** ./src/manifest.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"package":"com.xyujia","name":"芯瑜伽","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1070,"icon":"/assets/images/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.fetch"},{"name":"system.webview"}],"permissions":[{"origin":"*"}],"template/official":"demo-template","config":{"logLevel":"debug"},"router":{"entry":"pages/Home","pages":{"pages/Home":{"component":"index"},"pages/Tools":{"component":"index"},"pages/Mine":{"component":"index"},"pages/Feedback":{"component":"index"},"pages/Meditation":{"component":"index"},"pages/PracticeList":{"component":"index"},"pages/KnowledgeList":{"component":"index"},"pages/KnowledgeList/KnowledgeDetail":{"component":"index"},"pages/PrivacyPolicy":{"component":"index"}},"widgets":{"CardDemo":{"name":"CardDemo","description":"快应用卡片展示","component":"index","path":"/CardDemo","minPlatformVersion":1032,"targetManufactorys":["vivo"],"features":[]}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","pages":{"pages/Home":{"titleBarText":"芯瑜伽"},"pages/Tools":{"titleBarText":"工具"},"pages/Mine":{"titleBarText":"我的"},"pages/Feedback":{"titleBarText":"投诉与建议"},"pages/Meditation":{"titleBarText":"计时冥想"},"pages/PracticeList":{"titleBarText":"练习动作"},"pages/KnowledgeList":{"titleBarText":"瑜伽小知识"},"pages/KnowledgeList/KnowledgeDetail":{"titleBarText":"知识详情"},"pages/PrivacyPolicy":{"titleBarText":"隐私政策"}}}}');

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/

var $app_style$ = {}
var $app_script$ = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\manifest-loader.js?path=b:\quickApp\yoga\src!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\babel-loader\lib\index.js?cwd=b:\quickApp\yoga&cacheDirectory&comments=false&configFile=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\manifest-loader.js?path=b:\\quickApp\\yoga\\src!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\babel-loader\\lib\\index.js?cwd=b:\\quickApp\\yoga&cacheDirectory&comments=false&configFile=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app")

$app_define$('@app-application/app', [], function ($app_require$, $app_exports$, $app_module$) {
  
  $app_script$($app_module$, $app_exports$, $app_require$)
  if ($app_exports$.__esModule && $app_exports$.default) {
    $app_module$.exports = $app_exports$.default
  }
  $app_module$.exports.manifest = __webpack_require__(/*! ./manifest.json */ "./src/manifest.json")
  $app_module$.exports.style = { list: [ $app_style$ ] }
  
})
$app_bootstrap$('@app-application/app', { packagerVersion: "2.0.5" })

})();

/******/ })()
;
    };
    if (typeof window === "undefined") {
      return createAppHandler();
    }
    else {
      window.createAppHandler = createAppHandler
      // H5注入manifest以获取features
      global.manifest = manifestJson;
    }
  })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1RwQixXQUFXO0VBQ1hzQjtBQUNGLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7Ozs7Ozs7QUNDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLGtvRUFBNm1DOztBQUV4b0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsNENBQWlCO0FBQzNELGlDQUFpQztBQUNqQztBQUNBLENBQUM7QUFDRCwwQ0FBMEMsaUJBQWlCLE9BQXdCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL2hlbHBlci9hcGlzLyBzeW5jIFxcLmpzPzlkNjkiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC9DOlxcVXNlcnNcXGRpZGl1MjMzXFxBcHBEYXRhXFxMb2NhbFxcUHJvZ3JhbXNcXFF1aWNrIEFwcCBJREVcXGI6XFxxdWlja0FwcFxceW9nYVxcc3JjXFxhcHAudXg/YWFlOCIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL2hlbHBlci9hamF4LmpzPzE4MWQiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9oZWxwZXIvYXBpcy9leGFtcGxlLmpzPzZkMmUiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9oZWxwZXIvYXBpcy9pbmRleC5qcz8xZTJiIiwid2VicGFjazovL3lvZ2EtbGlnaHQvLi9zcmMvaGVscGVyL3V0aWxzLmpzPzg5ZGYiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC93ZWJwYWNrL2Jvb3RzdHJhcD83ZjgwIiwid2VicGFjazovL3lvZ2EtbGlnaHQvd2VicGFjay9ydW50aW1lL2dsb2JhbD85OTM3Iiwid2VicGFjazovL3lvZ2EtbGlnaHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZD84YmM1Iiwid2VicGFjazovL3lvZ2EtbGlnaHQvLi9zcmMvYXBwLnV4PzU5OWIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2V4YW1wbGUuanNcIjogXCIuL3NyYy9oZWxwZXIvYXBpcy9leGFtcGxlLmpzXCIsXG5cdFwiLi9pbmRleC5qc1wiOiBcIi4vc3JjL2hlbHBlci9hcGlzL2luZGV4LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2hlbHBlci9hcGlzIHN5bmMgcmVjdXJzaXZlIFxcXFwuanNcIjsiLCI8c2NyaXB0PlxyXG4vKipcclxuICog5bqU55So57qn5Yir55qE6YWN572u77yM5L6b5omA5pyJ6aG16Z2i5YWs55SoXHJcbiAqL1xyXG5cclxuY29uc3QgJHV0aWxzID0gcmVxdWlyZSgnLi9oZWxwZXIvdXRpbHMnKS5kZWZhdWx0XHJcbmNvbnN0ICRhcGlzID0gcmVxdWlyZSgnLi9oZWxwZXIvYXBpcycpLmRlZmF1bHRcclxuXHJcbi8qIEBkZXNjOiDms6jlhaXmlrnms5Xoh7PlhajlsYAgZ2xvYmFsLOS7peS+v+mhtemdouiwg+eUqCAqL1xyXG5jb25zdCBob29rMmdsb2JhbCA9IGdsb2JhbC5fX3Byb3RvX18gfHwgZ2xvYmFsXHJcbmhvb2syZ2xvYmFsLiR1dGlscyA9ICR1dGlsc1xyXG5ob29rMmdsb2JhbC4kYXBpcyA9ICRhcGlzXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgb25DcmVhdGUoKSB7fVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCIvKipcclxuICog5bCB6KOF5LqG5LiA5Lqb572R57uc6K+35rGC5pa55rOV77yM5pa55L6/6YCa6L+HIFByb21pc2Ug55qE5b2i5byP6K+35rGC5o6l5Y+jXHJcbiAqL1xyXG5pbXBvcnQgJGZldGNoIGZyb20gJ0BzeXN0ZW0uZmV0Y2gnXHJcbmltcG9ydCAkdXRpbHMgZnJvbSAnLi91dGlscydcclxuXHJcbmNvbnN0IFRJTUVPVVQgPSAyMDAwMFxyXG5cclxuUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgUCA9IHRoaXMuY29uc3RydWN0b3JcclxuICByZXR1cm4gdGhpcy50aGVuKFxyXG4gICAgdmFsdWUgPT4gUC5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4gdmFsdWUpLFxyXG4gICAgcmVhc29uID0+XHJcbiAgICAgIFAucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aHJvdyByZWFzb25cclxuICAgICAgfSlcclxuICApXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDosIPnlKjlv6vlupTnlKggZmV0Y2gg5o6l5Y+j5YGa572R57uc6K+35rGCXHJcbiAqIEBwYXJhbSBwYXJhbXNcclxuICovXHJcbmZ1bmN0aW9uIGZldGNoUHJvbWlzZShwYXJhbXMpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgJGZldGNoXHJcbiAgICAgIC5mZXRjaCh7XHJcbiAgICAgICAgdXJsOiBwYXJhbXMudXJsLFxyXG4gICAgICAgIG1ldGhvZDogcGFyYW1zLm1ldGhvZCxcclxuICAgICAgICBkYXRhOiBwYXJhbXMuZGF0YVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKVxyXG4gICAgICAgIC8qIEBkZXNjOiDlj6/ot5/lhbfkvZPkuI3lkIzkuJrliqHmjqXlj6PmlbDmja7vvIzov5Tlm57kvaDmiYDpnIDopoHnmoTpg6jliIbvvIzkvb/lvpfkvb/nlKjlsL3lj6/og73kvr/mjbcgKi9cclxuICAgICAgICBjb250ZW50LnN1Y2Nlc3MgPyByZXNvbHZlKGNvbnRlbnQudmFsdWUpIDogcmVzb2x2ZShjb250ZW50Lm1lc3NhZ2UpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IsIGNvZGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhg8J+QmyByZXF1ZXN0IGZhaWwsIGNvZGUgPSAke2NvZGV9YClcclxuICAgICAgICByZWplY3QoZXJyb3IpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhg4pyU77iPIHJlcXVlc3QgQCR7cGFyYW1zLnVybH0gaGFzIGJlZW4gY29tcGxldGVkLmApXHJcbiAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWkhOeQhue9kee7nOivt+axgu+8jHRpbWVvdXQg5piv572R57uc6K+35rGC6LaF5pe25LmL5ZCO6L+U5Zue77yM6buY6K6kIDIwcyDlj6/oh6rooYzkv67mlLlcclxuICogQHBhcmFtIHBhcmFtc1xyXG4gKi9cclxuZnVuY3Rpb24gcmVxdWVzdEhhbmRsZShwYXJhbXMsIHRpbWVvdXQgPSBUSU1FT1VUKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBQcm9taXNlLnJhY2UoW1xyXG4gICAgICBmZXRjaFByb21pc2UocGFyYW1zKSxcclxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcign572R57uc54q25Ya15LiN5aSq5aW977yM5YaN5Yi35paw5LiA5qyh77yfJykpXHJcbiAgICAgICAgfSwgdGltZW91dClcclxuICAgICAgfSlcclxuICAgIF0pXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHBvc3Q6IGZ1bmN0aW9uKHVybCwgcGFyYW1zKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZSh7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgZGF0YTogcGFyYW1zXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ2V0OiBmdW5jdGlvbih1cmwsIHBhcmFtcykge1xyXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGUoe1xyXG4gICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICB1cmw6ICR1dGlscy5xdWVyeVN0cmluZyh1cmwsIHBhcmFtcylcclxuICAgIH0pXHJcbiAgfSxcclxuICBwdXQ6IGZ1bmN0aW9uKHVybCwgcGFyYW1zKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZSh7XHJcbiAgICAgIG1ldGhvZDogJ3B1dCcsXHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBkYXRhOiBwYXJhbXNcclxuICAgIH0pXHJcbiAgfVxyXG4gIC8vIOWmguaenO+8jG1ldGhvZCDmgqjpnIDopoHmm7TlpJrnsbvlnovvvIzlj6/oh6rooYzmt7vliqDmm7TlpJrmlrnms5XvvJtcclxufVxyXG4iLCJpbXBvcnQgJGFqYXggZnJvbSAnLi4vYWpheCdcclxuXHJcbi8qKlxyXG4gKiBAZGVzYyDlnKjlrp7pmYXlvIDlj5HkuK3vvIzmgqjlj6/ku6XlsIYgYmFzZVVybCDmm7/mjaLkuLrmgqjnmoTor7fmsYLlnLDlnYDliY3nvIDvvJtcclxuICpcclxuICog5bey5bCGICRhcGlzIOaMgui9veWcqCBnbG9iYWzvvIzmgqjlj6/ku6XpgJrov4flpoLkuIvmlrnlvI/vvIzov5vooYzosIPnlKjvvJpcclxuICogJGFwaXMuZXhhbXBsZS5nZXRBcGkoKS50aGVuKCkuY2F0Y2goKS5maW5hbGx5KClcclxuICpcclxuICog5aSH5rOo77ya5aaC5p6c5oKo5LiN6ZyA6KaB5Y+R6LW36K+35rGC77yM5Yig6ZmkIGFwaXMg55uu5b2V77yM5Lul5Y+KIGFwcC51eCDkuK3lvJXnlKjljbPlj6/vvJtcclxuICovXHJcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9hcGkuZXhhbXBlbC5jb20vJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldEFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gJGFqYXguZ2V0KGAke2Jhc2VVcmx9eW91ci1wcm9qZWN0LWFwaWAsIGRhdGEpXHJcbiAgfSxcclxuICBwb3N0T3RoZXJBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuICRhamF4LnBvc3QoYCR7YmFzZVVybH15b3VyLXByb2plY3QtYXBpYCwgZGF0YSlcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIOWvvOWHuiBhcGlzIOS4i+ebruW9leeahOaJgOacieaOpeWPo1xyXG4gKi9cclxuY29uc3QgZmlsZXMgPSByZXF1aXJlLmNvbnRleHQoJy4nLCB0cnVlLCAvXFwuanMvKVxyXG5jb25zdCBtb2R1bGVzID0ge31cclxuXHJcbmZpbGVzLmtleXMoKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgaWYgKGtleSA9PT0gJy4vaW5kZXguanMnKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgbW9kdWxlc1trZXkucmVwbGFjZSgvKF5cXC5cXC98XFwuanMkKS9nLCAnJyldID0gZmlsZXMoa2V5KS5kZWZhdWx0XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb2R1bGVzXHJcbiIsIi8qKlxyXG4gKiDmgqjlj6/ku6XlsIbluLjnlKjnmoTmlrnms5XjgIHmiJbns7vnu58gQVBJ77yM57uf5LiA5bCB6KOF77yM5pq06Zyy5YWo5bGA77yM5Lul5L6/5ZCE6aG16Z2i44CB57uE5Lu26LCD55So77yM6ICM5peg6ZyAIHJlcXVpcmUgLyBpbXBvcnQuXHJcbiAqL1xyXG5jb25zdCBwcm9tcHQgPSByZXF1aXJlKCdAc3lzdGVtLnByb21wdCcpXHJcblxyXG4vKipcclxuICog5ou85o6lIHVybCDlkozlj4LmlbBcclxuICovXHJcbmZ1bmN0aW9uIHF1ZXJ5U3RyaW5nKHVybCwgcXVlcnkpIHtcclxuICBsZXQgc3RyID0gW11cclxuICBmb3IgKGxldCBrZXkgaW4gcXVlcnkpIHtcclxuICAgIHN0ci5wdXNoKGtleSArICc9JyArIHF1ZXJ5W2tleV0pXHJcbiAgfVxyXG4gIGxldCBwYXJhbVN0ciA9IHN0ci5qb2luKCcmJylcclxuICByZXR1cm4gcGFyYW1TdHIgPyBgJHt1cmx9PyR7cGFyYW1TdHJ9YCA6IHVybFxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93VG9hc3QobWVzc2FnZSA9ICcnLCBkdXJhdGlvbiA9IDApIHtcclxuICBpZiAoIW1lc3NhZ2UpIHJldHVyblxyXG4gIHByb21wdC5zaG93VG9hc3Qoe1xyXG4gICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgIGR1cmF0aW9uXHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWwhuenkuaVsOi9rOaNouS4uuWIhjrnp5LmoLzlvI9cclxuICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgLSDmgLvnp5LmlbBcclxuICogQHJldHVybnMge3N0cmluZ30g5qC85byP5YyW55qE5pe26Ze05a2X56ym5Liy77yM5aaCIFwiMDU6MzBcIlxyXG4gKi9cclxuZnVuY3Rpb24gZm9ybWF0VGltZShzZWNvbmRzKSB7XHJcbiAgY29uc3QgbWlucyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKVxyXG4gIGNvbnN0IHNlY3MgPSBzZWNvbmRzICUgNjBcclxuICByZXR1cm4gYCR7U3RyaW5nKG1pbnMpLnBhZFN0YXJ0KDIsICcwJyl9OiR7U3RyaW5nKHNlY3MpLnBhZFN0YXJ0KDIsICcwJyl9YFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgc2hvd1RvYXN0LFxyXG4gIHF1ZXJ5U3RyaW5nLFxyXG4gIGZvcm1hdFRpbWVcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiXG52YXIgJGFwcF9zdHlsZSQgPSB7fVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHNjcmlwdC1sb2FkZXIuanMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxwYWNrYWdlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxtb2R1bGUtbG9hZGVyLmpzIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxccGFja2FnZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcbWFuaWZlc3QtbG9hZGVyLmpzP3BhdGg9YjpcXFxccXVpY2tBcHBcXFxceW9nYVxcXFxzcmMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/Y3dkPWI6XFxcXHF1aWNrQXBwXFxcXHlvZ2EmY2FjaGVEaXJlY3RvcnkmY29tbWVudHM9ZmFsc2UmY29uZmlnRmlsZT1jOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXHBhY2thZ2VyXFxcXGJhYmVsLmNvbmZpZy5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHQhLi9hcHAudXg/dXhUeXBlPWFwcFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtYXBwbGljYXRpb24vYXBwJywgW10sIGZ1bmN0aW9uICgkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpIHtcbiAgXG4gICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgfVxuICAkYXBwX21vZHVsZSQuZXhwb3J0cy5tYW5pZmVzdCA9IHJlcXVpcmUoXCIuL21hbmlmZXN0Lmpzb25cIilcbiAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSB7IGxpc3Q6IFsgJGFwcF9zdHlsZSQgXSB9XG4gIFxufSlcbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1hcHBsaWNhdGlvbi9hcHAnLCB7IHBhY2thZ2VyVmVyc2lvbjogUVVJQ0tBUFBfVE9PTEtJVF9WRVJTSU9OIH0pXG4iXSwibmFtZXMiOlsiJHV0aWxzIiwicmVxdWlyZSIsImRlZmF1bHQiLCIkYXBpcyIsImhvb2syZ2xvYmFsIiwiZ2xvYmFsIiwiX19wcm90b19fIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwib25DcmVhdGUiLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl91dGlscyIsImUiLCJfX2VzTW9kdWxlIiwiVElNRU9VVCIsIlByb21pc2UiLCJwcm90b3R5cGUiLCJmaW5hbGx5IiwiY2FsbGJhY2siLCJQIiwiY29uc3RydWN0b3IiLCJ0aGVuIiwidmFsdWUiLCJyZXNvbHZlIiwicmVhc29uIiwiZmV0Y2hQcm9taXNlIiwicGFyYW1zIiwicmVqZWN0IiwiJGZldGNoIiwiZmV0Y2giLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJjb250ZW50IiwiSlNPTiIsInBhcnNlIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJjYXRjaCIsImVycm9yIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0SGFuZGxlIiwidGltZW91dCIsInJhY2UiLCJzZXRUaW1lb3V0IiwiRXJyb3IiLCJwb3N0IiwiZ2V0IiwicXVlcnlTdHJpbmciLCJwdXQiLCJfYWpheCIsImJhc2VVcmwiLCJnZXRBcGkiLCIkYWpheCIsInBvc3RPdGhlckFwaSIsImZpbGVzIiwiY29udGV4dCIsIm1vZHVsZXMiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInJlcGxhY2UiLCJwcm9tcHQiLCJxdWVyeSIsInN0ciIsInB1c2giLCJwYXJhbVN0ciIsImpvaW4iLCJzaG93VG9hc3QiLCJkdXJhdGlvbiIsImZvcm1hdFRpbWUiLCJzZWNvbmRzIiwibWlucyIsIk1hdGgiLCJmbG9vciIsInNlY3MiLCJTdHJpbmciLCJwYWRTdGFydCJdLCJzb3VyY2VSb290IjoiIn0=