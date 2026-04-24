(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\babel-loader\\lib\\index.js?cwd=b:\\quickApp\\yoga&cacheDirectory&plugins[]=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/Home/index.ux?uxType=page":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\babel-loader\lib\index.js?cwd=b:\quickApp\yoga&cacheDirectory&plugins[]=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/pages/Home/index.ux?uxType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _system = _interopRequireDefault($app_require$("@app-module/system.router"));
var _system2 = _interopRequireDefault($app_require$("@app-module/system.storage"));
var _system3 = _interopRequireDefault($app_require$("@app-module/system.webview"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SUGGESTIONS = [{
  dir: '呼吸与放松',
  hint: '适合做 5～10 分钟呼吸练习或短时冥想。'
}, {
  dir: '柔韧与拉伸',
  hint: '可多做肩颈、背部拉伸，缓解久坐疲劳。'
}, {
  dir: '平衡与稳定',
  hint: '适合练习树式、战士一等站立体式。'
}, {
  dir: '力量与核心',
  hint: '可加入平板、船式等核心体式。'
}, {
  dir: '综合练习',
  hint: '安排 15～20 分钟串联，兼顾呼吸与体式。'
}, {
  dir: '休息与修复',
  hint: '以婴儿式、仰卧放松为主，少做强度练习。'
}, {
  dir: '综合练习',
  hint: '周末可适当延长练习时间，巩固本周内容。'
}];
var _default = exports.default = {
  private: {
    isShowPrivacyPopup: false,
    statusTitle: '新的一天',
    statusDesc: '从一段简短练习开始吧',
    statusImage: '',
    todaySuggestion: '',
    todayHint: ''
  },
  onInit() {
    this.$page.setTitleBar({
      text: '芯瑜伽'
    });
    this.setTodayStatus();
    this.setTodaySuggestion();
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
      fail: function () {
        setTimeout(() => {
          that.isShowPrivacyPopup = true;
        }, 500);
      }
    });
  },
  setTodayStatus() {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.statusTitle = '早安';
      this.statusDesc = '晨间适合呼吸与轻度拉伸';
      this.statusImage = '/assets/images/Chakras-cuate.png';
    } else if (hour < 18) {
      this.statusTitle = '午后';
      this.statusDesc = '可做短时放松或肩颈拉伸';
      this.statusImage = '/assets/images/Yoga-practice-bro.png';
    } else {
      this.statusTitle = '晚间';
      this.statusDesc = '适合舒缓练习或冥想';
      this.statusImage = '/assets/images/Mindfulness-amico.png';
    }
  },
  setTodaySuggestion() {
    const index = Math.floor(Math.random() * SUGGESTIONS.length);
    const item = SUGGESTIONS[index];
    this.todaySuggestion = item.dir;
    this.todayHint = item.hint;
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
    if (type === 'agreement') {
      _system3.default.loadUrl({
        url: 'http://www.kyy887788.com/licensing.html'
      });
    } else {
      _system3.default.loadUrl({
        url: 'http://www.kyy887788.com/privacy.html'
      });
    }
  },
  disagree() {
    this.$app.exit();
  },
  agree() {
    const that = this;
    _system2.default.set({
      key: 'isAgreePrivacyPolicy',
      value: 'true',
      success: function () {},
      fail: function () {}
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

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\babel-loader\\lib\\index.js?cwd=b:\\quickApp\\yoga&cacheDirectory&plugins[]=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/TabBar/index.ux?uxType=comp":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\babel-loader\lib\index.js?cwd=b:\quickApp\yoga&cacheDirectory&plugins[]=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/components/TabBar/index.ux?uxType=comp ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _system = _interopRequireDefault($app_require$("@app-module/system.router"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  props: {
    current: {
      default: 0
    }
  },
  data: {
    tabs: [{
      title: '首页',
      icon: '🏠'
    }, {
      title: '工具',
      icon: '🧰'
    }, {
      title: '我的',
      icon: '👤'
    }]
  },
  onTabClick(index) {
    if (index === this.current) return;
    if (index === 0) {
      _system.default.clear();
      _system.default.replace({
        uri: '/pages/Home'
      });
      return;
    }
    const uris = ['/pages/Home', '/pages/Tools', '/pages/Mine'];
    _system.default.push({
      uri: uris[index]
    });
  }
};}

/***/ }),

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/TabBar/index.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\less-loader\dist\cjs.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/components/TabBar/index.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".tabbar": {
    "position": "fixed",
    "left": "0px",
    "right": "0px",
    "bottom": "0px",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center",
    "height": "100px",
    "backgroundColor": "#FFFFFF",
    "borderTopWidth": "1px",
    "borderTopColor": "#F0E2D8"
  },
  ".tab-item": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "flex": 1
  },
  ".tab-icon": {
    "fontSize": "40px",
    "marginBottom": "4px"
  },
  ".tab-text": {
    "fontSize": "22px",
    "color": "#8A6F63"
  }
}

/***/ }),

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/Home/index.ux?uxType=page":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\less-loader\dist\cjs.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/pages/Home/index.ux?uxType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".wrapper": {
    "flexDirection": "column",
    "alignItems": "stretch",
    "flex": 1,
    "width": "100%",
    "backgroundColor": "#FFF7F1",
    "position": "relative"
  },
  ".content-main": {
    "flex": 1,
    "flexDirection": "column",
    "alignItems": "stretch",
    "width": "100%",
    "paddingTop": "24px",
    "paddingRight": "20px",
    "paddingBottom": "120px",
    "paddingLeft": "20px"
  },
  ".section": {
    "flexDirection": "column",
    "alignItems": "stretch",
    "width": "100%",
    "marginBottom": "24px"
  },
  ".section-label": {
    "fontSize": "24px",
    "color": "#8A6F63",
    "marginBottom": "12px",
    "paddingLeft": "4px"
  },
  ".status-card .status-inner": {
    "flexDirection": "column",
    "alignItems": "stretch",
    "width": "100%",
    "minHeight": "520px",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "24px",
    "paddingTop": "0px",
    "paddingRight": "0px",
    "paddingBottom": "0px",
    "paddingLeft": "0px",
    "borderLeftWidth": "6px",
    "borderLeftColor": "#E6A87C",
    "overflow": "hidden",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "status-card"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "status-inner"
        }
      ]
    }
  },
  ".status-image": {
    "width": "100%",
    "height": "520px",
    "objectFit": "contain",
    "objectPosition": "center",
    "backgroundColor": "#fdf5ef"
  },
  ".status-text-wrap": {
    "flexDirection": "column",
    "alignItems": "flex-start",
    "width": "100%",
    "paddingTop": "28px",
    "paddingRight": "28px",
    "paddingBottom": "32px",
    "paddingLeft": "28px"
  },
  ".status-title": {
    "fontSize": "42px",
    "fontWeight": "bold",
    "color": "#3A2E28",
    "marginBottom": "12px",
    "width": "100%"
  },
  ".status-desc": {
    "fontSize": "28px",
    "color": "#8A6F63",
    "width": "100%"
  },
  ".suggest-card .suggest-inner": {
    "flexDirection": "column",
    "alignItems": "flex-start",
    "width": "100%",
    "backgroundColor": "#fdf5ef",
    "borderRadius": "16px",
    "paddingTop": "24px",
    "paddingRight": "24px",
    "paddingBottom": "24px",
    "paddingLeft": "24px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#F0E2D8",
    "borderRightColor": "#F0E2D8",
    "borderBottomColor": "#F0E2D8",
    "borderLeftColor": "#F0E2D8",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "suggest-card"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "suggest-inner"
        }
      ]
    }
  },
  ".suggest-dir": {
    "fontSize": "30px",
    "fontWeight": "bold",
    "color": "#E6A87C",
    "marginBottom": "8px",
    "width": "100%"
  },
  ".suggest-hint": {
    "fontSize": "26px",
    "color": "#8A6F63",
    "width": "100%"
  },
  ".tools-section": {
    "flexDirection": "column",
    "alignItems": "stretch"
  },
  ".tool-card": {
    "flexDirection": "column",
    "alignItems": "flex-start",
    "width": "100%",
    "flexShrink": 0,
    "backgroundColor": "#FFFFFF",
    "borderRadius": "16px",
    "paddingTop": "24px",
    "paddingRight": "28px",
    "paddingBottom": "24px",
    "paddingLeft": "28px",
    "marginBottom": "16px",
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
  ".tool-icon": {
    "fontSize": "44px",
    "marginBottom": "12px"
  },
  ".tool-title": {
    "fontSize": "32px",
    "fontWeight": "bold",
    "color": "#3A2E28",
    "marginBottom": "6px",
    "width": "100%"
  },
  ".tool-desc": {
    "fontSize": "26px",
    "color": "#8A6F63",
    "width": "100%"
  },
  ".footer-note": {
    "flexDirection": "column",
    "alignItems": "center",
    "width": "100%",
    "paddingTop": "20px",
    "paddingRight": "0px",
    "paddingBottom": "24px",
    "paddingLeft": "0px"
  },
  ".footer-note-text": {
    "fontSize": "24px",
    "color": "#8A6F63",
    "marginBottom": "16px",
    "width": "100%",
    "textAlign": "center"
  },
  ".footer-legal": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".footer-legal-link": {
    "fontSize": "24px",
    "color": "#E6A87C",
    "textDecoration": "underline"
  },
  ".footer-legal-divider": {
    "fontSize": "24px",
    "color": "#8A6F63",
    "marginTop": "0px",
    "marginRight": "12px",
    "marginBottom": "0px",
    "marginLeft": "12px"
  },
  ".privacy-popup-bg": {
    "width": "100%",
    "height": "100%",
    "backgroundColor": "rgba(0,0,0,0.5)",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "position": "absolute",
    "top": "0px",
    "left": "0px",
    "right": "0px",
    "bottom": "0px",
    "paddingTop": "200px"
  },
  ".privacy-popup-box": {
    "width": "600px",
    "minHeight": "400px",
    "flexDirection": "column",
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

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/TabBar/index.ux?uxType=comp&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/components/TabBar/index.ux?uxType=comp& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "tabbar"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "tab-item"
      ],
      "repeat": {
        "exp": function () {return this.tabs},
        "key": "index",
        "value": "item"
      },
      "events": {
        "click": function (evt) { return this.onTabClick(this.index,evt)}
      },
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.item.icon}
          },
          "classList": [
            "tab-icon"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.item.title}
          },
          "classList": function () {return ['tab-text', this.current===this.index?'active':'']}
        }
      ]
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/Home/index.ux?uxType=page&importNames[]=tab-bar-custom":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/pages/Home/index.ux?uxType=page&importNames[]=tab-bar-custom ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
            "section",
            "status-card"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "今日状态"
              },
              "classList": [
                "section-label"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "status-inner"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.statusImage}
                  },
                  "classList": [
                    "status-image"
                  ],
                  "shown": function () {return this.statusImage}
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "status-text-wrap"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.statusTitle}
                      },
                      "classList": [
                        "status-title"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.statusDesc}
                      },
                      "classList": [
                        "status-desc"
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
            "section",
            "suggest-card"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "今日建议"
              },
              "classList": [
                "section-label"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "suggest-inner"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.todaySuggestion}
                  },
                  "classList": [
                    "suggest-dir"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.todayHint}
                  },
                  "classList": [
                    "suggest-hint"
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
            "section",
            "tools-section"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "快捷工具"
              },
              "classList": [
                "section-label"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tool-card"
              ],
              "events": {
                "click": "goToMeditation"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "🧘"
                  },
                  "classList": [
                    "tool-icon"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "练习计时"
                  },
                  "classList": [
                    "tool-title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "专注当下，静心冥想"
                  },
                  "classList": [
                    "tool-desc"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tool-card"
              ],
              "events": {
                "click": "goToPractice"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "🧘‍♀️"
                  },
                  "classList": [
                    "tool-icon"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "瑜伽动作"
                  },
                  "classList": [
                    "tool-title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "学习标准体式与步骤"
                  },
                  "classList": [
                    "tool-desc"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tool-card"
              ],
              "events": {
                "click": "goToKnowledge"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "📚"
                  },
                  "classList": [
                    "tool-icon"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "瑜伽小知识"
                  },
                  "classList": [
                    "tool-title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "了解更多瑜伽知识"
                  },
                  "classList": [
                    "tool-desc"
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
            "footer-note"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "芯瑜伽 · 专注工具，助你每日一点练习"
              },
              "classList": [
                "footer-note-text"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "tab-bar-custom",
      "attr": {
        "current": function () {return 0}
      }
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
              "attr": {
                "value": " 欢迎使用本应用！本应用非常重视您的隐私和个人信息保护。在您使用本应用前，请认真阅读"
              },
              "classList": [
                "privacy-popup-content"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "children": [
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
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": " 您同意并接受全部条款后方可开始使用本应用。"
              }
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

/***/ }),

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=b:\\quickApp\\yoga&type=import!./src/components/TabBar/index.ux?uxType=comp&name=tab-bar-custom":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=b:\quickApp\yoga&type=import!./src/components/TabBar/index.ux?uxType=comp&name=tab-bar-custom ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_script$ = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\babel-loader\lib\index.js?cwd=b:\quickApp\yoga&cacheDirectory&plugins[]=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\babel-loader\\lib\\index.js?cwd=b:\\quickApp\\yoga&cacheDirectory&plugins[]=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/TabBar/index.ux?uxType=comp")
$app_define$('@app-component/tab-bar-custom', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/TabBar/index.ux?uxType=comp&")
    $app_module$.exports.style = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\less-loader\dist\cjs.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/TabBar/index.ux?uxType=comp")
});
;

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
__webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=b:\quickApp\yoga&type=import!../../components/TabBar/index.ux?uxType=comp&name=tab-bar-custom */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=b:\\quickApp\\yoga&type=import!./src/components/TabBar/index.ux?uxType=comp&name=tab-bar-custom")
var $app_script$ = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\babel-loader\lib\index.js?cwd=b:\quickApp\yoga&cacheDirectory&plugins[]=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\babel-loader\\lib\\index.js?cwd=b:\\quickApp\\yoga&cacheDirectory&plugins[]=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/Home/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=tab-bar-custom */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/Home/index.ux?uxType=page&importNames[]=tab-bar-custom")
    $app_module$.exports.style = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\less-loader\dist\cjs.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/Home/index.ux?uxType=page")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7O0FDalRBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ3pZQSxtQkFBbUIsbUJBQU8sQ0FBQyx1bkVBQTZsQztBQUN4bkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLG14QkFBNFk7QUFDeGIsaUNBQWlDLG1CQUFPLENBQUMsNmpDQUF3aUI7QUFDamxCLENBQUM7QUFDRCxDOzs7Ozs7VUNWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7QUN0QkEsbUJBQU8sQ0FBQywrZ0JBQThRO0FBQ3RSLG1CQUFtQixtQkFBTyxDQUFDLHc3RUFBeXdDO0FBQ3B5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsbzBCQUF3YTtBQUNwZCxpQ0FBaUMsbUJBQU8sQ0FBQyxzakNBQXdpQjtBQUNqbEIsQ0FBQztBQUNELHlDQUF5QyxpQkFBaUIsT0FBd0IsRUFBRSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veW9nYS1saWdodC9DOlxcVXNlcnNcXGRpZGl1MjMzXFxBcHBEYXRhXFxMb2NhbFxcUHJvZ3JhbXNcXFF1aWNrIEFwcCBJREVcXGI6XFxxdWlja0FwcFxceW9nYVxcc3JjXFxwYWdlc1xcSG9tZVxcaW5kZXgudXg/YjEwOSIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0L0M6XFxVc2Vyc1xcZGlkaXUyMzNcXEFwcERhdGFcXExvY2FsXFxQcm9ncmFtc1xcUXVpY2sgQXBwIElERVxcYjpcXHF1aWNrQXBwXFx5b2dhXFxzcmNcXGNvbXBvbmVudHNcXFRhYkJhclxcaW5kZXgudXg/YzlmYSIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL2NvbXBvbmVudHMvVGFiQmFyL2luZGV4LnV4PzY2MjEiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9wYWdlcy9Ib21lL2luZGV4LnV4PzRiNmEiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9jb21wb25lbnRzL1RhYkJhci9pbmRleC51eD84YmIxIiwid2VicGFjazovL3lvZ2EtbGlnaHQvLi9zcmMvcGFnZXMvSG9tZS9pbmRleC51eD80Y2MzIiwid2VicGFjazovL3lvZ2EtbGlnaHQvLi9zcmMvY29tcG9uZW50cy9UYWJCYXIvaW5kZXgudXg/OGNhMSIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0L3dlYnBhY2svYm9vdHN0cmFwPzdmODAiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9wYWdlcy9Ib21lL2luZGV4LnV4P2ExNzYiXSwic291cmNlc0NvbnRlbnQiOlsiPGltcG9ydCBuYW1lPVwidGFiLWJhci1jdXN0b21cIiBzcmM9XCIuLi8uLi9jb21wb25lbnRzL1RhYkJhci9pbmRleC51eFwiPjwvaW1wb3J0PlxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LW1haW5cIj5cclxuICAgICAgPCEtLSDku4rml6XnirbmgIEgLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uIHN0YXR1cy1jYXJkXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJzZWN0aW9uLWxhYmVsXCI+5LuK5pel54q25oCBPC90ZXh0PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXMtaW5uZXJcIj5cclxuICAgICAgICAgIDxpbWFnZVxyXG4gICAgICAgICAgICBjbGFzcz1cInN0YXR1cy1pbWFnZVwiXHJcbiAgICAgICAgICAgIGlmPVwie3tzdGF0dXNJbWFnZX19XCJcclxuICAgICAgICAgICAgc3JjPVwie3tzdGF0dXNJbWFnZX19XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzLXRleHQtd3JhcFwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInN0YXR1cy10aXRsZVwiPnt7IHN0YXR1c1RpdGxlIH19PC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInN0YXR1cy1kZXNjXCI+e3sgc3RhdHVzRGVzYyB9fTwvdGV4dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPCEtLSDku4rml6Xlu7rorq4gLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uIHN1Z2dlc3QtY2FyZFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwic2VjdGlvbi1sYWJlbFwiPuS7iuaXpeW7uuiurjwvdGV4dD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VnZ2VzdC1pbm5lclwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJzdWdnZXN0LWRpclwiPnt7IHRvZGF5U3VnZ2VzdGlvbiB9fTwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic3VnZ2VzdC1oaW50XCI+e3sgdG9kYXlIaW50IH19PC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPCEtLSDlv6vmjbflt6XlhbflhaXlj6MgLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uIHRvb2xzLXNlY3Rpb25cIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInNlY3Rpb24tbGFiZWxcIj7lv6vmjbflt6Xlhbc8L3RleHQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvb2wtY2FyZFwiIG9uY2xpY2s9XCJnb1RvTWVkaXRhdGlvblwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ0b29sLWljb25cIj7wn6eYPC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ0b29sLXRpdGxlXCI+57uD5Lmg6K6h5pe2PC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ0b29sLWRlc2NcIj7kuJPms6jlvZPkuIvvvIzpnZnlv4PlhqXmg7M8L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvb2wtY2FyZFwiIG9uY2xpY2s9XCJnb1RvUHJhY3RpY2VcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidG9vbC1pY29uXCI+8J+nmOKAjeKZgO+4jzwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidG9vbC10aXRsZVwiPueRnOS8veWKqOS9nDwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidG9vbC1kZXNjXCI+5a2m5Lmg5qCH5YeG5L2T5byP5LiO5q2l6aqkPC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sLWNhcmRcIiBvbmNsaWNrPVwiZ29Ub0tub3dsZWRnZVwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ0b29sLWljb25cIj7wn5OaPC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ0b29sLXRpdGxlXCI+55Gc5Ly95bCP55+l6K+GPC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ0b29sLWRlc2NcIj7kuobop6Pmm7TlpJrnkZzkvL3nn6Xor4Y8L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8IS0tIOW6lemDqOivtOaYjiAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci1ub3RlXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJmb290ZXItbm90ZS10ZXh0XCJcclxuICAgICAgICAgID7oiq/nkZzkvL0gwrcg5LiT5rOo5bel5YW377yM5Yqp5L2g5q+P5pel5LiA54K557uD5LmgPC90ZXh0XHJcbiAgICAgICAgPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSDlupXpg6ggVGFiQmFyIC0tPlxyXG4gICAgPHRhYi1iYXItY3VzdG9tIGN1cnJlbnQ9XCJ7ezB9fVwiPjwvdGFiLWJhci1jdXN0b20+XHJcbiAgICA8IS0tIOmakOengeaUv+etluW8ueeqlyAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJwcml2YWN5LXBvcHVwLWJnXCIgaWY9XCJ7e2lzU2hvd1ByaXZhY3lQb3B1cH19XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcml2YWN5LXBvcHVwLWJveFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicHJpdmFjeS1wb3B1cC10aXRsZVwiPua4qemmqOaPkOekujwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInByaXZhY3ktcG9wdXAtY29udGVudFwiPlxyXG4gICAgICAgICAg5qyi6L+O5L2/55So5pys5bqU55So77yB5pys5bqU55So6Z2e5bi46YeN6KeG5oKo55qE6ZqQ56eB5ZKM5Liq5Lq65L+h5oGv5L+d5oqk44CC5Zyo5oKo5L2/55So5pys5bqU55So5YmN77yM6K+36K6k55yf6ZiF6K+7PC90ZXh0XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicHJpdmFjeS1saW5rXCIgb25jbGljaz1cImdvVG9Qcml2YWN5UG9saWN5KCdhZ3JlZW1lbnQnKVwiXHJcbiAgICAgICAgICAgICAgPuOAiueUqOaIt+WNj+iuruOAizwvdGV4dFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicHJpdmFjeS1saW5rXCIgb25jbGljaz1cImdvVG9Qcml2YWN5UG9saWN5KCdwcml2YWN5JylcIlxyXG4gICAgICAgICAgICAgID7jgIrpmpDnp4HmlL/nrZbjgIs8L3RleHRcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dGV4dCA+XHJcbiAgICAgICAgICDmgqjlkIzmhI/lubbmjqXlj5flhajpg6jmnaHmrL7lkI7mlrnlj6/lvIDlp4vkvb/nlKjmnKzlupTnlKjjgII8L3RleHRcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgIDwvdGV4dD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJpdmFjeS1wb3B1cC1idG4tYm94XCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInByaXZhY3ktcG9wdXAtYnRuLWRpc2FncmVlXCIgb25jbGljaz1cImRpc2FncmVlXCJcclxuICAgICAgICAgICAgPuS4jeWQjOaEjzwvdGV4dFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwcml2YWN5LXBvcHVwLWJ0bi1hZ3JlZVwiIG9uY2xpY2s9XCJhZ3JlZVwiXHJcbiAgICAgICAgICAgID7lkIzmhI/lubbnu6fnu608L3RleHRcclxuICAgICAgICAgID5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ0BzeXN0ZW0uc3RvcmFnZSdcclxuaW1wb3J0IHdlYnZpZXcgZnJvbSAnQHN5c3RlbS53ZWJ2aWV3J1xyXG5cclxuY29uc3QgU1VHR0VTVElPTlMgPSBbXHJcbiAgeyBkaXI6ICflkbzlkLjkuI7mlL7mnb4nLCBoaW50OiAn6YCC5ZCI5YGaIDXvvZ4xMCDliIbpkp/lkbzlkLjnu4PkuaDmiJbnn63ml7blhqXmg7PjgIInIH0sXHJcbiAgeyBkaXI6ICfmn5Tpn6fkuI7mi4nkvLgnLCBoaW50OiAn5Y+v5aSa5YGa6IKp6aKI44CB6IOM6YOo5ouJ5Ly477yM57yT6Kej5LmF5Z2Q55ay5Yqz44CCJyB9LFxyXG4gIHsgZGlyOiAn5bmz6KGh5LiO56iz5a6aJywgaGludDogJ+mAguWQiOe7g+S5oOagkeW8j+OAgeaImOWjq+S4gOetieermeeri+S9k+W8j+OAgicgfSxcclxuICB7IGRpcjogJ+WKm+mHj+S4juaguOW/gycsIGhpbnQ6ICflj6/liqDlhaXlubPmnb/jgIHoiLnlvI/nrYnmoLjlv4PkvZPlvI/jgIInIH0sXHJcbiAgeyBkaXI6ICfnu7zlkIjnu4PkuaAnLCBoaW50OiAn5a6J5o6SIDE1772eMjAg5YiG6ZKf5Liy6IGU77yM5YW86aG+5ZG85ZC45LiO5L2T5byP44CCJyB9LFxyXG4gIHsgZGlyOiAn5LyR5oGv5LiO5L+u5aSNJywgaGludDogJ+S7peWptOWEv+W8j+OAgeS7sOWNp+aUvuadvuS4uuS4u++8jOWwkeWBmuW8uuW6pue7g+S5oOOAgicgfSxcclxuICB7IGRpcjogJ+e7vOWQiOe7g+S5oCcsIGhpbnQ6ICflkajmnKvlj6/pgILlvZPlu7bplb/nu4PkuaDml7bpl7TvvIzlt6nlm7rmnKzlkajlhoXlrrnjgIInIH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByaXZhdGU6IHtcclxuICAgIGlzU2hvd1ByaXZhY3lQb3B1cDogZmFsc2UsXHJcbiAgICBzdGF0dXNUaXRsZTogJ+aWsOeahOS4gOWkqScsXHJcbiAgICBzdGF0dXNEZXNjOiAn5LuO5LiA5q61566A55+t57uD5Lmg5byA5aeL5ZCnJyxcclxuICAgIHN0YXR1c0ltYWdlOiAnJyxcclxuICAgIHRvZGF5U3VnZ2VzdGlvbjogJycsXHJcbiAgICB0b2RheUhpbnQ6ICcnXHJcbiAgfSxcclxuICBvbkluaXQoKSB7XHJcbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHsgdGV4dDogJ+iKr+eRnOS8vScgfSlcclxuICAgIHRoaXMuc2V0VG9kYXlTdGF0dXMoKVxyXG4gICAgdGhpcy5zZXRUb2RheVN1Z2dlc3Rpb24oKVxyXG4gIH0sXHJcbiAgb25TaG93KCkge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgIHN0b3JhZ2UuZ2V0KHtcclxuICAgICAga2V5OiAnaXNBZ3JlZVByaXZhY3lQb2xpY3knLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgIHRoYXQuaXNTaG93UHJpdmFjeVBvcHVwID0gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoYXQuaXNTaG93UHJpdmFjeVBvcHVwID0gdHJ1ZVxyXG4gICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhhdC5pc1Nob3dQcml2YWN5UG9wdXAgPSB0cnVlXHJcbiAgICAgICAgfSwgNTAwKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgc2V0VG9kYXlTdGF0dXMoKSB7XHJcbiAgICBjb25zdCBob3VyID0gbmV3IERhdGUoKS5nZXRIb3VycygpXHJcbiAgICBpZiAoaG91ciA8IDEyKSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzVGl0bGUgPSAn5pep5a6JJ1xyXG4gICAgICB0aGlzLnN0YXR1c0Rlc2MgPSAn5pmo6Ze06YCC5ZCI5ZG85ZC45LiO6L275bqm5ouJ5Ly4J1xyXG4gICAgICB0aGlzLnN0YXR1c0ltYWdlID0gJy9hc3NldHMvaW1hZ2VzL0NoYWtyYXMtY3VhdGUucG5nJ1xyXG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTgpIHtcclxuICAgICAgdGhpcy5zdGF0dXNUaXRsZSA9ICfljYjlkI4nXHJcbiAgICAgIHRoaXMuc3RhdHVzRGVzYyA9ICflj6/lgZrnn63ml7bmlL7mnb7miJbogqnpoojmi4nkvLgnXHJcbiAgICAgIHRoaXMuc3RhdHVzSW1hZ2UgPSAnL2Fzc2V0cy9pbWFnZXMvWW9nYS1wcmFjdGljZS1icm8ucG5nJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0dXNUaXRsZSA9ICfmmZrpl7QnXHJcbiAgICAgIHRoaXMuc3RhdHVzRGVzYyA9ICfpgILlkIjoiJLnvJPnu4PkuaDmiJblhqXmg7MnXHJcbiAgICAgIHRoaXMuc3RhdHVzSW1hZ2UgPSAnL2Fzc2V0cy9pbWFnZXMvTWluZGZ1bG5lc3MtYW1pY28ucG5nJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2V0VG9kYXlTdWdnZXN0aW9uKCkge1xyXG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBTVUdHRVNUSU9OUy5sZW5ndGgpXHJcbiAgICBjb25zdCBpdGVtID0gU1VHR0VTVElPTlNbaW5kZXhdXHJcbiAgICB0aGlzLnRvZGF5U3VnZ2VzdGlvbiA9IGl0ZW0uZGlyXHJcbiAgICB0aGlzLnRvZGF5SGludCA9IGl0ZW0uaGludFxyXG4gIH0sXHJcbiAgZ29Ub01lZGl0YXRpb24oKSB7XHJcbiAgICByb3V0ZXIucHVzaCh7IHVyaTogJy9wYWdlcy9NZWRpdGF0aW9uJyB9KVxyXG4gIH0sXHJcbiAgZ29Ub1ByYWN0aWNlKCkge1xyXG4gICAgcm91dGVyLnB1c2goeyB1cmk6ICdwYWdlcy9QcmFjdGljZUxpc3QnIH0pXHJcbiAgfSxcclxuICBnb1RvS25vd2xlZGdlKCkge1xyXG4gICAgcm91dGVyLnB1c2goeyB1cmk6ICdwYWdlcy9Lbm93bGVkZ2VMaXN0JyB9KVxyXG4gIH0sXHJcbiAgZ29Ub1ByaXZhY3lQb2xpY3kodHlwZSkge1xyXG4gICAgaWYgKHR5cGUgPT09ICdhZ3JlZW1lbnQnKSB7XHJcbiAgICAgIHdlYnZpZXcubG9hZFVybCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5reXk4ODc3ODguY29tL2xpY2Vuc2luZy5odG1sJyxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdlYnZpZXcubG9hZFVybCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5reXk4ODc3ODguY29tL3ByaXZhY3kuaHRtbCcsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcm91dGVyLnB1c2goe1xyXG4gICAgLy8gICB1cmk6ICdwYWdlcy9Qcml2YWN5UG9saWN5JyxcclxuICAgIC8vICAgcGFyYW1zOiB7IHRhYjogdHlwZSA9PT0gJ2FncmVlbWVudCcgPyAnYWdyZWVtZW50JyA6ICdwcml2YWN5JyB9XHJcbiAgICAvLyB9KVxyXG4gIH0sXHJcbiAgZGlzYWdyZWUoKSB7XHJcbiAgICB0aGlzLiRhcHAuZXhpdCgpXHJcbiAgfSxcclxuICBhZ3JlZSgpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICBzdG9yYWdlLnNldCh7XHJcbiAgICAgIGtleTogJ2lzQWdyZWVQcml2YWN5UG9saWN5JyxcclxuICAgICAgdmFsdWU6ICd0cnVlJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7IH1cclxuICAgIH0pXHJcbiAgICB0aGlzLmlzU2hvd1ByaXZhY3lQb3B1cCA9IGZhbHNlXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XHJcbkBpbXBvcnQgJy4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZS5sZXNzJztcclxuXHJcbi53cmFwcGVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGZsZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJnLW1haW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29udGVudC1tYWluIHtcclxuICBmbGV4OiAxO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjQgKiBAc2l6ZS1mYWN0b3IgMjAgKiBAc2l6ZS1mYWN0b3IgMTYgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgcGFkZGluZy1ib3R0b206IDEyMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyNCAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLnNlY3Rpb24tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogQGdyZXk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTIgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgcGFkZGluZy1sZWZ0OiA0ICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4vKiDku4rml6XnirbmgIHljaHniYcgLSDkuIDlsY/lpKfljaHniYcgKyDlm77niYcgKi9cclxuLnN0YXR1cy1jYXJkIC5zdGF0dXMtaW5uZXIge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNTIwICogQHNpemUtZmFjdG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IEB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyNCAqIEBzaXplLWZhY3RvcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA2ICogQHNpemUtZmFjdG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiBAYnJhbmQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnN0YXR1cy1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MjAgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmNWVmO1xyXG59XHJcblxyXG4uc3RhdHVzLXRleHQtd3JhcCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyOCAqIEBzaXplLWZhY3RvciAyOCAqIEBzaXplLWZhY3RvciAzMiAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLnN0YXR1cy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiA0MnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBAYmxhY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTIgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdGF0dXMtZGVzYyB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiBAZ3JleTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyog5LuK5pel5bu66K6uICovXHJcbi5zdWdnZXN0LWNhcmQgLnN1Z2dlc3QtaW5uZXIge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjVlZjtcclxuICBib3JkZXItcmFkaXVzOiAxNiAqIEBzaXplLWZhY3RvcjtcclxuICBwYWRkaW5nOiAyNCAqIEBzaXplLWZhY3RvcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyLWNvbG9yO1xyXG59XHJcblxyXG4uc3VnZ2VzdC1kaXIge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogQGJyYW5kO1xyXG4gIG1hcmdpbi1ib3R0b206IDggKiBAc2l6ZS1mYWN0b3I7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdWdnZXN0LWhpbnQge1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBjb2xvcjogQGdyZXk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIOW/q+aNt+W3peWFtyAqL1xyXG4udG9vbHMtc2VjdGlvbiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuLnRvb2wtY2FyZCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LXNocmluazogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTYgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgcGFkZGluZzogMjQgKiBAc2l6ZS1mYWN0b3IgMjggKiBAc2l6ZS1mYWN0b3I7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTYgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgQGJvcmRlci1jb2xvcjtcclxufVxyXG5cclxuLnRvb2wtaWNvbiB7XHJcbiAgZm9udC1zaXplOiA0NHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEyICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4udG9vbC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBAYmxhY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogNiAqIEBzaXplLWZhY3RvcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRvb2wtZGVzYyB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGNvbG9yOiBAZ3JleTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyog5bqV6YOo6K+05piOICovXHJcbi5mb290ZXItbm90ZSB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwICogQHNpemUtZmFjdG9yIDAgMjQgKiBAc2l6ZS1mYWN0b3I7XHJcbn1cclxuXHJcbi5mb290ZXItbm90ZS10ZXh0IHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6IEBncmV5O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2ICogQHNpemUtZmFjdG9yO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvb3Rlci1sZWdhbCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm9vdGVyLWxlZ2FsLWxpbmsge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogQGJyYW5kO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uZm9vdGVyLWxlZ2FsLWRpdmlkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogQGdyZXk7XHJcbiAgbWFyZ2luOiAwIDEyICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4vKiDpmpDnp4HlvLnnqpcgKi9cclxuLnByaXZhY3ktcG9wdXAtYmcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAyMDBweDtcclxufVxyXG5cclxuLnByaXZhY3ktcG9wdXAtYm94IHtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IEB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMCAqIEBzaXplLWZhY3RvcjtcclxuICBwYWRkaW5nOiA0MCAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLnByaXZhY3ktcG9wdXAtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBjb2xvcjogQGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwICogQHNpemUtZmFjdG9yO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByaXZhY3ktcG9wdXAtY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiBAZ3JleTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA0MCAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLnByaXZhY3ktbGluayB7XHJcbiAgY29sb3I6IEBicmFuZDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnByaXZhY3ktcG9wdXAtYnRuLWJveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMCAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLnByaXZhY3ktcG9wdXAtYnRuLWRpc2FncmVlIHtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5Nzk3OTc7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEyICogQHNpemUtZmFjdG9yO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuXHJcbi5wcml2YWN5LXBvcHVwLWJ0bi1hZ3JlZSB7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBjb2xvcjogQHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IEBicmFuZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTIgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInRhYmJhclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRhYi1pdGVtXCIgZm9yPVwie3soaW5kZXgsIGl0ZW0pIGluIHRhYnN9fVwiIG9uY2xpY2s9XCJvblRhYkNsaWNrKGluZGV4KVwiPlxyXG4gICAgICA8dGV4dCBjbGFzcz1cInRhYi1pY29uXCI+e3tpdGVtLmljb259fTwvdGV4dD5cclxuICAgICAgPHRleHQgY2xhc3M9XCJ0YWItdGV4dCB7e2N1cnJlbnQgPT09IGluZGV4ID8gJ2FjdGl2ZScgOiAnJ319XCI+e3tpdGVtLnRpdGxlfX08L3RleHQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnQHN5c3RlbS5yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIGN1cnJlbnQ6IHtcclxuICAgICAgZGVmYXVsdDogMFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgdGFiczogW1xyXG4gICAgICB7IHRpdGxlOiAn6aaW6aG1JywgaWNvbjogJ/Cfj6AnIH0sXHJcbiAgICAgIHsgdGl0bGU6ICflt6XlhbcnLCBpY29uOiAn8J+nsCcgfSxcclxuICAgICAgeyB0aXRsZTogJ+aIkeeahCcsIGljb246ICfwn5GkJyB9XHJcbiAgICBdXHJcbiAgfSxcclxuICBvblRhYkNsaWNrKGluZGV4KSB7XHJcbiAgICBpZiAoaW5kZXggPT09IHRoaXMuY3VycmVudCkgcmV0dXJuXHJcbiAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgcm91dGVyLmNsZWFyKClcclxuICAgICAgcm91dGVyLnJlcGxhY2UoeyB1cmk6ICcvcGFnZXMvSG9tZScgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCB1cmlzID0gWycvcGFnZXMvSG9tZScsICcvcGFnZXMvVG9vbHMnLCAnL3BhZ2VzL01pbmUnXVxyXG4gICAgcm91dGVyLnB1c2goeyB1cmk6IHVyaXNbaW5kZXhdIH0pXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XHJcbkBpbXBvcnQgJy4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZS5sZXNzJztcclxuXHJcbi50YWJiYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2hpdGU7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IEBib3JkZXItY29sb3I7XHJcbiAgcGFkZGluZy1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcclxufVxyXG5cclxuLnRhYi1pdGVtIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnRhYi1pY29uIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4udGFiLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjogQGdyZXk7XHJcbn1cclxuXHJcbi50YWItdGV4dC5hY3RpdmUge1xyXG4gIGNvbG9yOiBAYnJhbmQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnRhYmJhclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJsZWZ0XCI6IFwiMHB4XCIsXG4gICAgXCJyaWdodFwiOiBcIjBweFwiLFxuICAgIFwiYm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWFyb3VuZFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNGMEUyRDhcIlxuICB9LFxuICBcIi50YWItaXRlbVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwiLnRhYi1pY29uXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNDBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNHB4XCJcbiAgfSxcbiAgXCIudGFiLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyMnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4QTZGNjNcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLndyYXBwZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcInN0cmV0Y2hcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRjdGMVwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwiLmNvbnRlbnQtbWFpblwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwic3RyZXRjaFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEyMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi5zZWN0aW9uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJzdHJldGNoXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI0cHhcIlxuICB9LFxuICBcIi5zZWN0aW9uLWxhYmVsXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOEE2RjYzXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjRweFwiXG4gIH0sXG4gIFwiLnN0YXR1cy1jYXJkIC5zdGF0dXMtaW5uZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcInN0cmV0Y2hcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWluSGVpZ2h0XCI6IFwiNTIwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjI0cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIwcHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjZweFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI0U2QTg3Q1wiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIixcbiAgICBcIl9tZXRhXCI6IHtcbiAgICAgIFwicnVsZURlZlwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJhXCIsXG4gICAgICAgICAgXCJuXCI6IFwiY2xhc3NcIixcbiAgICAgICAgICBcImlcIjogZmFsc2UsXG4gICAgICAgICAgXCJhXCI6IFwiZWxlbWVudFwiLFxuICAgICAgICAgIFwidlwiOiBcInN0YXR1cy1jYXJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJzdGF0dXMtaW5uZXJcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcIi5zdGF0dXMtaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCI1MjBweFwiLFxuICAgIFwib2JqZWN0Rml0XCI6IFwiY29udGFpblwiLFxuICAgIFwib2JqZWN0UG9zaXRpb25cIjogXCJjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZGY1ZWZcIlxuICB9LFxuICBcIi5zdGF0dXMtdGV4dC13cmFwXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyOHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyOHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyOHB4XCJcbiAgfSxcbiAgXCIuc3RhdHVzLXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNDJweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIixcbiAgICBcImNvbG9yXCI6IFwiIzNBMkUyOFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTJweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgfSxcbiAgXCIuc3RhdHVzLWRlc2NcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4QTZGNjNcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLnN1Z2dlc3QtY2FyZCAuc3VnZ2VzdC1pbm5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmRmNWVmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxNnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjRweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjRweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI0YwRTJEOFwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNGMEUyRDhcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI0YwRTJEOFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI0YwRTJEOFwiLFxuICAgIFwiX21ldGFcIjoge1xuICAgICAgXCJydWxlRGVmXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwic3VnZ2VzdC1jYXJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJzdWdnZXN0LWlubmVyXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCIuc3VnZ2VzdC1kaXJcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMHB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiY29sb3JcIjogXCIjRTZBODdDXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI4cHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLnN1Z2dlc3QtaGludFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI2cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhBNkY2M1wiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgfSxcbiAgXCIudG9vbHMtc2VjdGlvblwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwic3RyZXRjaFwiXG4gIH0sXG4gIFwiLnRvb2wtY2FyZFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJmbGV4U2hyaW5rXCI6IDAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxNnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjRweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjhweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjhweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTZweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI0YwRTJEOFwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNGMEUyRDhcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI0YwRTJEOFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI0YwRTJEOFwiXG4gIH0sXG4gIFwiLnRvb2wtaWNvblwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjQ0cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycHhcIlxuICB9LFxuICBcIi50b29sLXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzJweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIixcbiAgICBcImNvbG9yXCI6IFwiIzNBMkUyOFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICB9LFxuICBcIi50b29sLWRlc2NcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4QTZGNjNcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLmZvb3Rlci1ub3RlXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjI0cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMHB4XCJcbiAgfSxcbiAgXCIuZm9vdGVyLW5vdGUtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhBNkY2M1wiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTZweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5mb290ZXItbGVnYWxcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5mb290ZXItbGVnYWwtbGlua1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cHhcIixcbiAgICBcImNvbG9yXCI6IFwiI0U2QTg3Q1wiLFxuICAgIFwidGV4dERlY29yYXRpb25cIjogXCJ1bmRlcmxpbmVcIlxuICB9LFxuICBcIi5mb290ZXItbGVnYWwtZGl2aWRlclwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhBNkY2M1wiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEycHhcIlxuICB9LFxuICBcIi5wcml2YWN5LXBvcHVwLWJnXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjUpXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiBcIjBweFwiLFxuICAgIFwibGVmdFwiOiBcIjBweFwiLFxuICAgIFwicmlnaHRcIjogXCIwcHhcIixcbiAgICBcImJvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwMHB4XCJcbiAgfSxcbiAgXCIucHJpdmFjeS1wb3B1cC1ib3hcIjoge1xuICAgIFwid2lkdGhcIjogXCI2MDBweFwiLFxuICAgIFwibWluSGVpZ2h0XCI6IFwiNDAwcHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNDBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHB4XCJcbiAgfSxcbiAgXCIucHJpdmFjeS1wb3B1cC10aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM2cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzNBMkUyOFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnByaXZhY3ktcG9wdXAtY29udGVudFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhBNkY2M1wiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MHB4XCJcbiAgfSxcbiAgXCIucHJpdmFjeS1saW5rXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0U2QTg3Q1wiLFxuICAgIFwidGV4dERlY29yYXRpb25cIjogXCJ1bmRlcmxpbmVcIlxuICB9LFxuICBcIi5wcml2YWN5LXBvcHVwLWJ0bi1ib3hcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi5wcml2YWN5LXBvcHVwLWJ0bi1kaXNhZ3JlZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjIyMHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MHB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjOTc5Nzk3XCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiIzk3OTc5N1wiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjOTc5Nzk3XCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjOTc5Nzk3XCIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTJweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhweFwiXG4gIH0sXG4gIFwiLnByaXZhY3ktcG9wdXAtYnRuLWFncmVlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjIwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcHhcIixcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0U2QTg3Q1wiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMnB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOHB4XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ0YWJiYXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0YWItaXRlbVwiXG4gICAgICBdLFxuICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICBcImV4cFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGFic30sXG4gICAgICAgIFwia2V5XCI6IFwiaW5kZXhcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW1cIlxuICAgICAgfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiB0aGlzLm9uVGFiQ2xpY2sodGhpcy5pbmRleCxldnQpfVxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtLmljb259XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRhYi1pY29uXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0udGl0bGV9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsndGFiLXRleHQnLCB0aGlzLmN1cnJlbnQ9PT10aGlzLmluZGV4PydhY3RpdmUnOicnXX1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ3cmFwcGVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY29udGVudC1tYWluXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInNlY3Rpb25cIixcbiAgICAgICAgICAgIFwic3RhdHVzLWNhcmRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5LuK5pel54q25oCBXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2VjdGlvbi1sYWJlbFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN0YXR1cy1pbm5lclwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc3RhdHVzSW1hZ2V9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInN0YXR1cy1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc3RhdHVzSW1hZ2V9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzdGF0dXMtdGV4dC13cmFwXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc3RhdHVzVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0YXR1cy10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zdGF0dXNEZXNjfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0dXMtZGVzY1wiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2VjdGlvblwiLFxuICAgICAgICAgICAgXCJzdWdnZXN0LWNhcmRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5LuK5pel5bu66K6uXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2VjdGlvbi1sYWJlbFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN1Z2dlc3QtaW5uZXJcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50b2RheVN1Z2dlc3Rpb259XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInN1Z2dlc3QtZGlyXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRvZGF5SGludH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwic3VnZ2VzdC1oaW50XCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICAgICAgICBcInRvb2xzLXNlY3Rpb25cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5b+r5o235bel5YW3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2VjdGlvbi1sYWJlbFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRvb2wtY2FyZFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwiZ29Ub01lZGl0YXRpb25cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi8J+nmFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInRvb2wtaWNvblwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi57uD5Lmg6K6h5pe2XCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidG9vbC10aXRsZVwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5LiT5rOo5b2T5LiL77yM6Z2Z5b+D5Yal5oOzXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidG9vbC1kZXNjXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRvb2wtY2FyZFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwiZ29Ub1ByYWN0aWNlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIvCfp5jigI3imYDvuI9cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJ0b29sLWljb25cIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIueRnOS8veWKqOS9nFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInRvb2wtdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWtpuS5oOagh+WHhuS9k+W8j+S4juatpemqpFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInRvb2wtZGVzY1wiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0b29sLWNhcmRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImdvVG9Lbm93bGVkZ2VcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi8J+TmlwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInRvb2wtaWNvblwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi55Gc5Ly95bCP55+l6K+GXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidG9vbC10aXRsZVwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5LqG6Kej5pu05aSa55Gc5Ly955+l6K+GXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidG9vbC1kZXNjXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJmb290ZXItbm90ZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLoiq/nkZzkvL0gwrcg5LiT5rOo5bel5YW377yM5Yqp5L2g5q+P5pel5LiA54K557uD5LmgXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZm9vdGVyLW5vdGUtdGV4dFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRhYi1iYXItY3VzdG9tXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImN1cnJlbnRcIjogZnVuY3Rpb24gKCkge3JldHVybiAwfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicHJpdmFjeS1wb3B1cC1iZ1wiXG4gICAgICBdLFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXNTaG93UHJpdmFjeVBvcHVwfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicHJpdmFjeS1wb3B1cC1ib3hcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5rip6aao5o+Q56S6XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicHJpdmFjeS1wb3B1cC10aXRsZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiIOasoui/juS9v+eUqOacrOW6lOeUqO+8geacrOW6lOeUqOmdnuW4uOmHjeinhuaCqOeahOmakOengeWSjOS4quS6uuS/oeaBr+S/neaKpOOAguWcqOaCqOS9v+eUqOacrOW6lOeUqOWJje+8jOivt+iupOecn+mYheivu1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInByaXZhY3ktcG9wdXAtY29udGVudFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLjgIrnlKjmiLfljY/orq7jgItcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJwcml2YWN5LWxpbmtcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiB0aGlzLmdvVG9Qcml2YWN5UG9saWN5KCdhZ3JlZW1lbnQnLGV2dCl9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi44CK6ZqQ56eB5pS/562W44CLXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicHJpdmFjeS1saW5rXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gdGhpcy5nb1RvUHJpdmFjeVBvbGljeSgncHJpdmFjeScsZXZ0KX1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiIOaCqOWQjOaEj+W5tuaOpeWPl+WFqOmDqOadoeasvuWQjuaWueWPr+W8gOWni+S9v+eUqOacrOW6lOeUqOOAglwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInByaXZhY3ktcG9wdXAtYnRuLWJveFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLkuI3lkIzmhI9cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJwcml2YWN5LXBvcHVwLWJ0bi1kaXNhZ3JlZVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwiZGlzYWdyZWVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWQjOaEj+W5tue7p+e7rVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInByaXZhY3ktcG9wdXAtYnRuLWFncmVlXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJhZ3JlZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwiXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcc2NyaXB0LWxvYWRlci5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXHBhY2thZ2VyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXG1vZHVsZS1sb2FkZXIuanMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/Y3dkPWI6XFxcXHF1aWNrQXBwXFxcXHlvZ2EmY2FjaGVEaXJlY3RvcnkmcGx1Z2luc1tdPWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxiYWJlbC1wbHVnaW4tanN4LmpzJmNvbW1lbnRzPWZhbHNlJmNvbmZpZ0ZpbGU9YzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxwYWNrYWdlclxcXFxiYWJlbC5jb25maWcuanMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vaW5kZXgudXg/dXhUeXBlPWNvbXBcIilcbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvdGFiLWJhci1jdXN0b20nLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKSB7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gcmVxdWlyZShcIiFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGUtbG9hZGVyLmpzIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxmcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlIS4vaW5kZXgudXg/dXhUeXBlPWNvbXAmXCIpXG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSByZXF1aXJlKFwiIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxsZXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuL2luZGV4LnV4P3V4VHlwZT1jb21wXCIpXG59KTtcbjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwicmVxdWlyZShcIiFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcdXgtbG9hZGVyLmpzP2N3ZD1iOlxcXFxxdWlja0FwcFxcXFx5b2dhJnR5cGU9aW1wb3J0IS4uLy4uL2NvbXBvbmVudHMvVGFiQmFyL2luZGV4LnV4P3V4VHlwZT1jb21wJm5hbWU9dGFiLWJhci1jdXN0b21cIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzY3JpcHQtbG9hZGVyLmpzIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxccGFja2FnZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcbW9kdWxlLWxvYWRlci5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz9jd2Q9YjpcXFxccXVpY2tBcHBcXFxceW9nYSZjYWNoZURpcmVjdG9yeSZwbHVnaW5zW109YzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGJhYmVsLXBsdWdpbi1qc3guanMmY29tbWVudHM9ZmFsc2UmY29uZmlnRmlsZT1jOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXHBhY2thZ2VyXFxcXGJhYmVsLmNvbmZpZy5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcYWNjZXNzLWxvYWRlci5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHQhLi9pbmRleC51eD91eFR5cGU9cGFnZVwiKVxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpIHtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSByZXF1aXJlKFwiIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZS1sb2FkZXIuanMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGUhLi9pbmRleC51eD91eFR5cGU9cGFnZSZpbXBvcnROYW1lc1tdPXRhYi1iYXItY3VzdG9tXCIpXG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSByZXF1aXJlKFwiIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxsZXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuL2luZGV4LnV4P3V4VHlwZT1wYWdlXCIpXG59KTtcbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJWZXJzaW9uOiBRVUlDS0FQUF9UT09MS0lUX1ZFUlNJT04gfSk7Il0sIm5hbWVzIjpbIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9zeXN0ZW0yIiwiX3N5c3RlbTMiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJTVUdHRVNUSU9OUyIsImRpciIsImhpbnQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJwcml2YXRlIiwiaXNTaG93UHJpdmFjeVBvcHVwIiwic3RhdHVzVGl0bGUiLCJzdGF0dXNEZXNjIiwic3RhdHVzSW1hZ2UiLCJ0b2RheVN1Z2dlc3Rpb24iLCJ0b2RheUhpbnQiLCJvbkluaXQiLCIkcGFnZSIsInNldFRpdGxlQmFyIiwidGV4dCIsInNldFRvZGF5U3RhdHVzIiwic2V0VG9kYXlTdWdnZXN0aW9uIiwib25TaG93IiwidGhhdCIsInN0b3JhZ2UiLCJnZXQiLCJrZXkiLCJzdWNjZXNzIiwiZGF0YSIsInNldFRpbWVvdXQiLCJmYWlsIiwiaG91ciIsIkRhdGUiLCJnZXRIb3VycyIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiaXRlbSIsImdvVG9NZWRpdGF0aW9uIiwicm91dGVyIiwicHVzaCIsInVyaSIsImdvVG9QcmFjdGljZSIsImdvVG9Lbm93bGVkZ2UiLCJnb1RvUHJpdmFjeVBvbGljeSIsInR5cGUiLCJ3ZWJ2aWV3IiwibG9hZFVybCIsInVybCIsImRpc2FncmVlIiwiJGFwcCIsImV4aXQiLCJhZ3JlZSIsInNldCIsInZhbHVlIiwicHJvcHMiLCJjdXJyZW50IiwidGFicyIsInRpdGxlIiwiaWNvbiIsIm9uVGFiQ2xpY2siLCJjbGVhciIsInJlcGxhY2UiLCJ1cmlzIl0sInNvdXJjZVJvb3QiOiIifQ==