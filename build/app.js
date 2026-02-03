(function(){
    
    var $app_define_wrap$ = $app_define_wrap$ || function() {}
    var manifestJson = {"package":"com.yoga.light","name":"轻瑜伽","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1070,"icon":"/assets/images/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.fetch"}],"permissions":[{"origin":"*"}],"template/official":"demo-template","config":{"logLevel":"debug"},"router":{"entry":"pages/Home","pages":{"pages/Home":{"component":"index"},"pages/Meditation":{"component":"index"},"pages/PracticeList":{"component":"index"},"pages/KnowledgeList":{"component":"index"},"pages/KnowledgeList/KnowledgeDetail":{"component":"index"},"pages/PrivacyPolicy":{"component":"index"}},"widgets":{"CardDemo":{"name":"CardDemo","description":"快应用卡片展示","component":"index","path":"/CardDemo","minPlatformVersion":1032,"targetManufactorys":["vivo"],"features":[]}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","pages":{"pages/Home":{"titleBarText":"轻瑜伽"},"pages/Meditation":{"titleBarText":"计时冥想"},"pages/PracticeList":{"titleBarText":"练习动作"},"pages/KnowledgeList":{"titleBarText":"瑜伽小知识"},"pages/KnowledgeList/KnowledgeDetail":{"titleBarText":"知识详情"},"pages/PrivacyPolicy":{"titleBarText":"隐私政策"}}}}
    var createAppHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/manifest-loader.js?path=c:\\Users\\Administrator\\QuickAppProjects\\yoga-light\\src!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\Administrator\\QuickAppProjects\\yoga-light&cacheDirectory&comments=false&configFile=c:\\Users\\Administrator\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/manifest-loader.js?path=c:\Users\Administrator\QuickAppProjects\yoga-light\src!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\Users\Administrator\QuickAppProjects\yoga-light&cacheDirectory&comments=false&configFile=c:\Users\Administrator\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./src/manifest.json":
/*!***************************!*\
  !*** ./src/manifest.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"package":"com.yoga.light","name":"轻瑜伽","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1070,"icon":"/assets/images/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.fetch"}],"permissions":[{"origin":"*"}],"template/official":"demo-template","config":{"logLevel":"debug"},"router":{"entry":"pages/Home","pages":{"pages/Home":{"component":"index"},"pages/Meditation":{"component":"index"},"pages/PracticeList":{"component":"index"},"pages/KnowledgeList":{"component":"index"},"pages/KnowledgeList/KnowledgeDetail":{"component":"index"},"pages/PrivacyPolicy":{"component":"index"}},"widgets":{"CardDemo":{"name":"CardDemo","description":"快应用卡片展示","component":"index","path":"/CardDemo","minPlatformVersion":1032,"targetManufactorys":["vivo"],"features":[]}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","pages":{"pages/Home":{"titleBarText":"轻瑜伽"},"pages/Meditation":{"titleBarText":"计时冥想"},"pages/PracticeList":{"titleBarText":"练习动作"},"pages/KnowledgeList":{"titleBarText":"瑜伽小知识"},"pages/KnowledgeList/KnowledgeDetail":{"titleBarText":"知识详情"},"pages/PrivacyPolicy":{"titleBarText":"隐私政策"}}}}');

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
var $app_script$ = __webpack_require__(/*! !../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/manifest-loader.js?path=c:\Users\Administrator\QuickAppProjects\yoga-light\src!../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\Users\Administrator\QuickAppProjects\yoga-light&cacheDirectory&comments=false&configFile=c:\Users\Administrator\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/manifest-loader.js?path=c:\\Users\\Administrator\\QuickAppProjects\\yoga-light\\src!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\Administrator\\QuickAppProjects\\yoga-light&cacheDirectory&comments=false&configFile=c:\\Users\\Administrator\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app")

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7Ozs7Ozs7QUNDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLGltRUFBK2pDOztBQUUxbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsNENBQWlCO0FBQzNELGlDQUFpQztBQUNqQztBQUNBLENBQUM7QUFDRCwwQ0FBMEMsaUJBQWlCLE9BQXdCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL2FwcC51eD8yM2MzIiwid2VicGFjazovL3lvZ2EtbGlnaHQvLi9zcmMvaGVscGVyL2FqYXguanM/MTgxZCIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL2hlbHBlci9hcGlzL2V4YW1wbGUuanM/NmQyZSIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL2hlbHBlci9hcGlzL2luZGV4LmpzPzFlMmIiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9oZWxwZXIvdXRpbHMuanM/ODlkZiIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL2hlbHBlci9hcGlzLyBzeW5jIFxcLmpzPzlkNjkiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC93ZWJwYWNrL2Jvb3RzdHJhcD83ZjgwIiwid2VicGFjazovL3lvZ2EtbGlnaHQvd2VicGFjay9ydW50aW1lL2dsb2JhbD85OTM3Iiwid2VicGFjazovL3lvZ2EtbGlnaHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZD84YmM1Iiwid2VicGFjazovL3lvZ2EtbGlnaHQvLi9zcmMvYXBwLnV4P2QxZGYiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbi8qKlxuICog5bqU55So57qn5Yir55qE6YWN572u77yM5L6b5omA5pyJ6aG16Z2i5YWs55SoXG4gKi9cblxuY29uc3QgJHV0aWxzID0gcmVxdWlyZSgnLi9oZWxwZXIvdXRpbHMnKS5kZWZhdWx0XG5jb25zdCAkYXBpcyA9IHJlcXVpcmUoJy4vaGVscGVyL2FwaXMnKS5kZWZhdWx0XG5cbi8qIEBkZXNjOiDms6jlhaXmlrnms5Xoh7PlhajlsYAgZ2xvYmFsLOS7peS+v+mhtemdouiwg+eUqCAqL1xuY29uc3QgaG9vazJnbG9iYWwgPSBnbG9iYWwuX19wcm90b19fIHx8IGdsb2JhbFxuaG9vazJnbG9iYWwuJHV0aWxzID0gJHV0aWxzXG5ob29rMmdsb2JhbC4kYXBpcyA9ICRhcGlzXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb25DcmVhdGUoKSB7fVxufVxuPC9zY3JpcHQ+XG4iLCIvKipcbiAqIOWwgeijheS6huS4gOS6m+e9kee7nOivt+axguaWueazle+8jOaWueS+v+mAmui/hyBQcm9taXNlIOeahOW9ouW8j+ivt+axguaOpeWPo1xuICovXG5pbXBvcnQgJGZldGNoIGZyb20gJ0BzeXN0ZW0uZmV0Y2gnXG5pbXBvcnQgJHV0aWxzIGZyb20gJy4vdXRpbHMnXG5cbmNvbnN0IFRJTUVPVVQgPSAyMDAwMFxuXG5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgY29uc3QgUCA9IHRoaXMuY29uc3RydWN0b3JcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICB2YWx1ZSA9PiBQLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiB2YWx1ZSksXG4gICAgcmVhc29uID0+XG4gICAgICBQLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRocm93IHJlYXNvblxuICAgICAgfSlcbiAgKVxufVxuXG4vKipcbiAqIOiwg+eUqOW/q+W6lOeUqCBmZXRjaCDmjqXlj6PlgZrnvZHnu5zor7fmsYJcbiAqIEBwYXJhbSBwYXJhbXNcbiAqL1xuZnVuY3Rpb24gZmV0Y2hQcm9taXNlKHBhcmFtcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICRmZXRjaFxuICAgICAgLmZldGNoKHtcbiAgICAgICAgdXJsOiBwYXJhbXMudXJsLFxuICAgICAgICBtZXRob2Q6IHBhcmFtcy5tZXRob2QsXG4gICAgICAgIGRhdGE6IHBhcmFtcy5kYXRhXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5kYXRhXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKVxuICAgICAgICAvKiBAZGVzYzog5Y+v6Lef5YW35L2T5LiN5ZCM5Lia5Yqh5o6l5Y+j5pWw5o2u77yM6L+U5Zue5L2g5omA6ZyA6KaB55qE6YOo5YiG77yM5L2/5b6X5L2/55So5bC95Y+v6IO95L6/5o23ICovXG4gICAgICAgIGNvbnRlbnQuc3VjY2VzcyA/IHJlc29sdmUoY29udGVudC52YWx1ZSkgOiByZXNvbHZlKGNvbnRlbnQubWVzc2FnZSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yLCBjb2RlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDwn5CbIHJlcXVlc3QgZmFpbCwgY29kZSA9ICR7Y29kZX1gKVxuICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhg4pyU77iPIHJlcXVlc3QgQCR7cGFyYW1zLnVybH0gaGFzIGJlZW4gY29tcGxldGVkLmApXG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfSlcbiAgfSlcbn1cblxuLyoqXG4gKiDlpITnkIbnvZHnu5zor7fmsYLvvIx0aW1lb3V0IOaYr+e9kee7nOivt+axgui2heaXtuS5i+WQjui/lOWbnu+8jOm7mOiupCAyMHMg5Y+v6Ieq6KGM5L+u5pS5XG4gKiBAcGFyYW0gcGFyYW1zXG4gKi9cbmZ1bmN0aW9uIHJlcXVlc3RIYW5kbGUocGFyYW1zLCB0aW1lb3V0ID0gVElNRU9VVCkge1xuICB0cnkge1xuICAgIHJldHVybiBQcm9taXNlLnJhY2UoW1xuICAgICAgZmV0Y2hQcm9taXNlKHBhcmFtcyksXG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ+e9kee7nOeKtuWGteS4jeWkquWlve+8jOWGjeWIt+aWsOS4gOasoe+8nycpKVxuICAgICAgICB9LCB0aW1lb3V0KVxuICAgICAgfSlcbiAgICBdKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcG9zdDogZnVuY3Rpb24odXJsLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZSh7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogcGFyYW1zXG4gICAgfSlcbiAgfSxcbiAgZ2V0OiBmdW5jdGlvbih1cmwsIHBhcmFtcykge1xuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlKHtcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICB1cmw6ICR1dGlscy5xdWVyeVN0cmluZyh1cmwsIHBhcmFtcylcbiAgICB9KVxuICB9LFxuICBwdXQ6IGZ1bmN0aW9uKHVybCwgcGFyYW1zKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGUoe1xuICAgICAgbWV0aG9kOiAncHV0JyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogcGFyYW1zXG4gICAgfSlcbiAgfVxuICAvLyDlpoLmnpzvvIxtZXRob2Qg5oKo6ZyA6KaB5pu05aSa57G75Z6L77yM5Y+v6Ieq6KGM5re75Yqg5pu05aSa5pa55rOV77ybXG59XG4iLCJpbXBvcnQgJGFqYXggZnJvbSAnLi4vYWpheCdcblxuLyoqXG4gKiBAZGVzYyDlnKjlrp7pmYXlvIDlj5HkuK3vvIzmgqjlj6/ku6XlsIYgYmFzZVVybCDmm7/mjaLkuLrmgqjnmoTor7fmsYLlnLDlnYDliY3nvIDvvJtcbiAqXG4gKiDlt7LlsIYgJGFwaXMg5oyC6L295ZyoIGdsb2JhbO+8jOaCqOWPr+S7pemAmui/h+WmguS4i+aWueW8j++8jOi/m+ihjOiwg+eUqO+8mlxuICogJGFwaXMuZXhhbXBsZS5nZXRBcGkoKS50aGVuKCkuY2F0Y2goKS5maW5hbGx5KClcbiAqXG4gKiDlpIfms6jvvJrlpoLmnpzmgqjkuI3pnIDopoHlj5Hotbfor7fmsYLvvIzliKDpmaQgYXBpcyDnm67lvZXvvIzku6Xlj4ogYXBwLnV4IOS4reW8leeUqOWNs+WPr++8m1xuICovXG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vYXBpLmV4YW1wZWwuY29tLydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRBcGkoZGF0YSkge1xuICAgIHJldHVybiAkYWpheC5nZXQoYCR7YmFzZVVybH15b3VyLXByb2plY3QtYXBpYCwgZGF0YSlcbiAgfSxcbiAgcG9zdE90aGVyQXBpKGRhdGEpIHtcbiAgICByZXR1cm4gJGFqYXgucG9zdChgJHtiYXNlVXJsfXlvdXItcHJvamVjdC1hcGlgLCBkYXRhKVxuICB9XG59XG4iLCIvKipcbiAqIOWvvOWHuiBhcGlzIOS4i+ebruW9leeahOaJgOacieaOpeWPo1xuICovXG5jb25zdCBmaWxlcyA9IHJlcXVpcmUuY29udGV4dCgnLicsIHRydWUsIC9cXC5qcy8pXG5jb25zdCBtb2R1bGVzID0ge31cblxuZmlsZXMua2V5cygpLmZvckVhY2goa2V5ID0+IHtcbiAgaWYgKGtleSA9PT0gJy4vaW5kZXguanMnKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgbW9kdWxlc1trZXkucmVwbGFjZSgvKF5cXC5cXC98XFwuanMkKS9nLCAnJyldID0gZmlsZXMoa2V5KS5kZWZhdWx0XG59KVxuXG5leHBvcnQgZGVmYXVsdCBtb2R1bGVzXG4iLCIvKipcbiAqIOaCqOWPr+S7peWwhuW4uOeUqOeahOaWueazleOAgeaIluezu+e7nyBBUEnvvIznu5/kuIDlsIHoo4XvvIzmmrTpnLLlhajlsYDvvIzku6Xkvr/lkITpobXpnaLjgIHnu4Tku7bosIPnlKjvvIzogIzml6DpnIAgcmVxdWlyZSAvIGltcG9ydC5cbiAqL1xuY29uc3QgcHJvbXB0ID0gcmVxdWlyZSgnQHN5c3RlbS5wcm9tcHQnKVxuXG4vKipcbiAqIOaLvOaOpSB1cmwg5ZKM5Y+C5pWwXG4gKi9cbmZ1bmN0aW9uIHF1ZXJ5U3RyaW5nKHVybCwgcXVlcnkpIHtcbiAgbGV0IHN0ciA9IFtdXG4gIGZvciAobGV0IGtleSBpbiBxdWVyeSkge1xuICAgIHN0ci5wdXNoKGtleSArICc9JyArIHF1ZXJ5W2tleV0pXG4gIH1cbiAgbGV0IHBhcmFtU3RyID0gc3RyLmpvaW4oJyYnKVxuICByZXR1cm4gcGFyYW1TdHIgPyBgJHt1cmx9PyR7cGFyYW1TdHJ9YCA6IHVybFxufVxuXG5mdW5jdGlvbiBzaG93VG9hc3QobWVzc2FnZSA9ICcnLCBkdXJhdGlvbiA9IDApIHtcbiAgaWYgKCFtZXNzYWdlKSByZXR1cm5cbiAgcHJvbXB0LnNob3dUb2FzdCh7XG4gICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICBkdXJhdGlvblxuICB9KVxufVxuXG4vKipcbiAqIOWwhuenkuaVsOi9rOaNouS4uuWIhjrnp5LmoLzlvI9cbiAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIC0g5oC756eS5pWwXG4gKiBAcmV0dXJucyB7c3RyaW5nfSDmoLzlvI/ljJbnmoTml7bpl7TlrZfnrKbkuLLvvIzlpoIgXCIwNTozMFwiXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdFRpbWUoc2Vjb25kcykge1xuICBjb25zdCBtaW5zID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApXG4gIGNvbnN0IHNlY3MgPSBzZWNvbmRzICUgNjBcbiAgcmV0dXJuIGAke1N0cmluZyhtaW5zKS5wYWRTdGFydCgyLCAnMCcpfToke1N0cmluZyhzZWNzKS5wYWRTdGFydCgyLCAnMCcpfWBcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaG93VG9hc3QsXG4gIHF1ZXJ5U3RyaW5nLFxuICBmb3JtYXRUaW1lXG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZXhhbXBsZS5qc1wiOiBcIi4vc3JjL2hlbHBlci9hcGlzL2V4YW1wbGUuanNcIixcblx0XCIuL2luZGV4LmpzXCI6IFwiLi9zcmMvaGVscGVyL2FwaXMvaW5kZXguanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaGVscGVyL2FwaXMgc3luYyByZWN1cnNpdmUgXFxcXC5qc1wiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJcbnZhciAkYXBwX3N0eWxlJCA9IHt9XG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9BcHBEYXRhL0xvY2FsL1Byb2dyYW1zL1F1aWNrIEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi9BcHBEYXRhL0xvY2FsL1Byb2dyYW1zL1F1aWNrIEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L3BhY2thZ2VyL2xpYi9sb2FkZXJzL21vZHVsZS1sb2FkZXIuanMhLi4vLi4vLi4vQXBwRGF0YS9Mb2NhbC9Qcm9ncmFtcy9RdWljayBBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9wYWNrYWdlci9saWIvbG9hZGVycy9tYW5pZmVzdC1sb2FkZXIuanM/cGF0aD1jOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXFF1aWNrQXBwUHJvamVjdHNcXFxceW9nYS1saWdodFxcXFxzcmMhLi4vLi4vLi4vQXBwRGF0YS9Mb2NhbC9Qcm9ncmFtcy9RdWljayBBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y3dkPWM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcUXVpY2tBcHBQcm9qZWN0c1xcXFx5b2dhLWxpZ2h0JmNhY2hlRGlyZWN0b3J5JmNvbW1lbnRzPWZhbHNlJmNvbmZpZ0ZpbGU9YzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXHBhY2thZ2VyXFxcXGJhYmVsLmNvbmZpZy5qcyEuLi8uLi8uLi9BcHBEYXRhL0xvY2FsL1Byb2dyYW1zL1F1aWNrIEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHQhLi9hcHAudXg/dXhUeXBlPWFwcFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtYXBwbGljYXRpb24vYXBwJywgW10sIGZ1bmN0aW9uICgkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpIHtcbiAgXG4gICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgfVxuICAkYXBwX21vZHVsZSQuZXhwb3J0cy5tYW5pZmVzdCA9IHJlcXVpcmUoXCIuL21hbmlmZXN0Lmpzb25cIilcbiAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSB7IGxpc3Q6IFsgJGFwcF9zdHlsZSQgXSB9XG4gIFxufSlcbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1hcHBsaWNhdGlvbi9hcHAnLCB7IHBhY2thZ2VyVmVyc2lvbjogUVVJQ0tBUFBfVE9PTEtJVF9WRVJTSU9OIH0pXG4iXSwibmFtZXMiOlsiJHV0aWxzIiwicmVxdWlyZSIsImRlZmF1bHQiLCIkYXBpcyIsImhvb2syZ2xvYmFsIiwiZ2xvYmFsIiwiX19wcm90b19fIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwib25DcmVhdGUiLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl91dGlscyIsImUiLCJfX2VzTW9kdWxlIiwiVElNRU9VVCIsIlByb21pc2UiLCJwcm90b3R5cGUiLCJmaW5hbGx5IiwiY2FsbGJhY2siLCJQIiwiY29uc3RydWN0b3IiLCJ0aGVuIiwidmFsdWUiLCJyZXNvbHZlIiwicmVhc29uIiwiZmV0Y2hQcm9taXNlIiwicGFyYW1zIiwicmVqZWN0IiwiJGZldGNoIiwiZmV0Y2giLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJjb250ZW50IiwiSlNPTiIsInBhcnNlIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJjYXRjaCIsImVycm9yIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0SGFuZGxlIiwidGltZW91dCIsInJhY2UiLCJzZXRUaW1lb3V0IiwiRXJyb3IiLCJwb3N0IiwiZ2V0IiwicXVlcnlTdHJpbmciLCJwdXQiLCJfYWpheCIsImJhc2VVcmwiLCJnZXRBcGkiLCIkYWpheCIsInBvc3RPdGhlckFwaSIsImZpbGVzIiwiY29udGV4dCIsIm1vZHVsZXMiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInJlcGxhY2UiLCJwcm9tcHQiLCJxdWVyeSIsInN0ciIsInB1c2giLCJwYXJhbVN0ciIsImpvaW4iLCJzaG93VG9hc3QiLCJkdXJhdGlvbiIsImZvcm1hdFRpbWUiLCJzZWNvbmRzIiwibWlucyIsIk1hdGgiLCJmbG9vciIsInNlY3MiLCJTdHJpbmciLCJwYWRTdGFydCJdLCJzb3VyY2VSb290IjoiIn0=