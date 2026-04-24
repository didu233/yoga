(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\babel-loader\\lib\\index.js?cwd=b:\\quickApp\\yoga&cacheDirectory&plugins[]=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/Mine/index.ux?uxType=page":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\babel-loader\lib\index.js?cwd=b:\quickApp\yoga&cacheDirectory&plugins[]=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/pages/Mine/index.ux?uxType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _system = _interopRequireDefault($app_require$("@app-module/system.router"));
var _system2 = _interopRequireDefault($app_require$("@app-module/system.storage"));
var _system3 = _interopRequireDefault($app_require$("@app-module/system.prompt"));
var _system4 = _interopRequireDefault($app_require$("@app-module/system.webview"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const USER_NAME_KEY = 'yoga_user_name';
const USER_AVATAR_KEY = 'yoga_user_avatar';
const DEFAULT_AVATAR = '/assets/images/logo.png';
const CONTACT_EMAIL = 'service@yoga.example.com';
const CONTACT_PHONE = '400-555-9263';
var _default = exports.default = {
  private: {
    userName: '',
    avatar: DEFAULT_AVATAR
  },
  onInit() {
    this.$page.setTitleBar({
      text: '我的'
    });
  },
  onShow() {
    this.initUserInfo();
  },
  initUserInfo() {
    const that = this;
    _system2.default.get({
      key: USER_AVATAR_KEY,
      success(data) {
        if (data) {
          that.avatar = data;
        } else {
          that.avatar = DEFAULT_AVATAR;
          _system2.default.set({
            key: USER_AVATAR_KEY,
            value: DEFAULT_AVATAR
          });
        }
      },
      fail() {
        that.avatar = DEFAULT_AVATAR;
        _system2.default.set({
          key: USER_AVATAR_KEY,
          value: DEFAULT_AVATAR
        });
      }
    });
    _system2.default.get({
      key: USER_NAME_KEY,
      success(data) {
        if (data) {
          that.userName = data;
        } else {
          const name = that.generateRandomName();
          that.userName = name;
          _system2.default.set({
            key: USER_NAME_KEY,
            value: name
          });
        }
      },
      fail() {
        const name = that.generateRandomName();
        that.userName = name;
        _system2.default.set({
          key: USER_NAME_KEY,
          value: name
        });
      }
    });
  },
  generateRandomName() {
    const adjectives = ['温柔', '自在', '宁静', '轻盈', '元气', '治愈', '暖暖', '清晨', '晚风'];
    const nouns = ['瑜伽者', '练习者', '呼吸者', '小行星', '小森林', '云朵', '海浪', '晨光'];
    const a = adjectives[Math.floor(Math.random() * adjectives.length)];
    const n = nouns[Math.floor(Math.random() * nouns.length)];
    return a + n;
  },
  openAgreement() {
    _system4.default.loadUrl({
      url: 'http://www.kyy887788.com/licensing.html'
    });
  },
  openPrivacy() {
    _system4.default.loadUrl({
      url: 'http://www.kyy887788.com/privacy.html'
    });
  },
  openFeedback() {
    _system.default.push({
      uri: 'pages/Feedback'
    });
  },
  contactService() {
    _system3.default.showDialog({
      title: '联系客服',
      message: '客服邮箱：' + CONTACT_EMAIL + '\n\n客服热线：' + CONTACT_PHONE + '\n工作时间：09:00-18:00',
      buttons: [{
        text: '确定',
        color: '#E6A87C'
      }],
      success: function () {}
    });
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

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/Mine/index.ux?uxType=page":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\less-loader\dist\cjs.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/pages/Mine/index.ux?uxType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "paddingBottom": "120px",
    "paddingLeft": "20px"
  },
  ".profile-card": {
    "flexDirection": "row",
    "alignItems": "center",
    "width": "100%",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "20px",
    "paddingTop": "28px",
    "paddingRight": "24px",
    "paddingBottom": "28px",
    "paddingLeft": "24px",
    "marginBottom": "24px"
  },
  ".avatar": {
    "width": "120px",
    "height": "120px",
    "borderRadius": "60px",
    "backgroundColor": "#F0E2D8",
    "marginRight": "24px"
  },
  ".profile-text": {
    "flexDirection": "column",
    "alignItems": "flex-start",
    "flex": 1
  },
  ".name": {
    "fontSize": "34px",
    "fontWeight": "bold",
    "color": "#3A2E28",
    "marginBottom": "8px"
  },
  ".desc": {
    "fontSize": "26px",
    "color": "#8A6F63"
  },
  ".section": {
    "flexDirection": "column",
    "alignItems": "stretch",
    "width": "100%",
    "marginBottom": "16px",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "16px",
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
  ".cell": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "width": "100%",
    "paddingTop": "24px",
    "paddingRight": "24px",
    "paddingBottom": "24px",
    "paddingLeft": "24px",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#F0E2D8"
  },
  ".cell-title": {
    "fontSize": "30px",
    "color": "#3A2E28"
  },
  ".cell-arrow": {
    "fontSize": "30px",
    "color": "#8A6F63",
    "marginLeft": "12px"
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

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/Mine/index.ux?uxType=page&importNames[]=tab-bar-custom":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/pages/Mine/index.ux?uxType=page&importNames[]=tab-bar-custom ***!
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
            "profile-card"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.avatar}
              },
              "classList": [
                "avatar"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "profile-text"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.userName}
                  },
                  "classList": [
                    "name"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "芯瑜伽 · 每天一点点进步"
                  },
                  "classList": [
                    "desc"
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
            "section"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "cell"
              ],
              "events": {
                "click": "openAgreement"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "用户协议"
                  },
                  "classList": [
                    "cell-title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "›"
                  },
                  "classList": [
                    "cell-arrow"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "cell"
              ],
              "events": {
                "click": "openPrivacy"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "隐私政策"
                  },
                  "classList": [
                    "cell-title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "›"
                  },
                  "classList": [
                    "cell-arrow"
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
            "section"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "cell",
                "cell-menu"
              ],
              "events": {
                "click": "openFeedback"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "投诉与建议"
                  },
                  "classList": [
                    "cell-title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "›"
                  },
                  "classList": [
                    "cell-arrow"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "cell",
                "cell-menu"
              ],
              "events": {
                "click": "contactService"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "联系客服"
                  },
                  "classList": [
                    "cell-title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "›"
                  },
                  "classList": [
                    "cell-arrow"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "tab-bar-custom",
      "attr": {
        "current": function () {return 2}
      }
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
  !*** ./src/pages/Mine/index.ux?uxType=page ***!
  \*********************************************/
__webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=b:\quickApp\yoga&type=import!../../components/TabBar/index.ux?uxType=comp&name=tab-bar-custom */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=b:\\quickApp\\yoga&type=import!./src/components/TabBar/index.ux?uxType=comp&name=tab-bar-custom")
var $app_script$ = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\babel-loader\lib\index.js?cwd=b:\quickApp\yoga&cacheDirectory&plugins[]=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\babel-loader\\lib\\index.js?cwd=b:\\quickApp\\yoga&cacheDirectory&plugins[]=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/Mine/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=tab-bar-custom */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/Mine/index.ux?uxType=page&importNames[]=tab-bar-custom")
    $app_module$.exports.style = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\less-loader\dist\cjs.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/Mine/index.ux?uxType=page")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8veW9nYS1saWdodC9DOlxcVXNlcnNcXGRpZGl1MjMzXFxBcHBEYXRhXFxMb2NhbFxcUHJvZ3JhbXNcXFF1aWNrIEFwcCBJREVcXGI6XFxxdWlja0FwcFxceW9nYVxcc3JjXFxwYWdlc1xcTWluZVxcaW5kZXgudXg/MjdlNCIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0L0M6XFxVc2Vyc1xcZGlkaXUyMzNcXEFwcERhdGFcXExvY2FsXFxQcm9ncmFtc1xcUXVpY2sgQXBwIElERVxcYjpcXHF1aWNrQXBwXFx5b2dhXFxzcmNcXGNvbXBvbmVudHNcXFRhYkJhclxcaW5kZXgudXg/YzlmYSIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL2NvbXBvbmVudHMvVGFiQmFyL2luZGV4LnV4PzY2MjEiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9wYWdlcy9NaW5lL2luZGV4LnV4P2MxNzUiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9jb21wb25lbnRzL1RhYkJhci9pbmRleC51eD84YmIxIiwid2VicGFjazovL3lvZ2EtbGlnaHQvLi9zcmMvcGFnZXMvTWluZS9pbmRleC51eD82ZThlIiwid2VicGFjazovL3lvZ2EtbGlnaHQvLi9zcmMvY29tcG9uZW50cy9UYWJCYXIvaW5kZXgudXg/OGNhMSIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0L3dlYnBhY2svYm9vdHN0cmFwPzdmODAiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9wYWdlcy9NaW5lL2luZGV4LnV4P2U0Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiPGltcG9ydCBuYW1lPVwidGFiLWJhci1jdXN0b21cIiBzcmM9XCIuLi8uLi9jb21wb25lbnRzL1RhYkJhci9pbmRleC51eFwiPjwvaW1wb3J0PlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LW1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9maWxlLWNhcmRcIj5cbiAgICAgICAgPGltYWdlIGNsYXNzPVwiYXZhdGFyXCIgc3JjPVwie3thdmF0YXJ9fVwiPjwvaW1hZ2U+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9maWxlLXRleHRcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cIm5hbWVcIj57eyB1c2VyTmFtZSB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImRlc2NcIj7oiq/nkZzkvL0gwrcg5q+P5aSp5LiA54K554K56L+b5q2lPC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiIG9uY2xpY2s9XCJvcGVuQWdyZWVtZW50XCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJjZWxsLXRpdGxlXCI+55So5oi35Y2P6K6uPC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2VsbC1hcnJvd1wiPuKAujwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsXCIgb25jbGljaz1cIm9wZW5Qcml2YWN5XCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJjZWxsLXRpdGxlXCI+6ZqQ56eB5pS/562WPC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2VsbC1hcnJvd1wiPuKAujwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbGwgY2VsbC1tZW51XCIgb25jbGljaz1cIm9wZW5GZWVkYmFja1wiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2VsbC10aXRsZVwiPuaKleivieS4juW7uuiurjwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNlbGwtYXJyb3dcIj7igLo8L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBjZWxsLW1lbnVcIiBvbmNsaWNrPVwiY29udGFjdFNlcnZpY2VcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNlbGwtdGl0bGVcIj7ogZTns7vlrqLmnI08L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJjZWxsLWFycm93XCI+4oC6PC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDx0YWItYmFyLWN1c3RvbSBjdXJyZW50PVwie3syfX1cIj48L3RhYi1iYXItY3VzdG9tPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgcm91dGVyIGZyb20gJ0BzeXN0ZW0ucm91dGVyJ1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnQHN5c3RlbS5zdG9yYWdlJ1xuaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCdcbmltcG9ydCB3ZWJ2aWV3IGZyb20gJ0BzeXN0ZW0ud2VidmlldydcblxuY29uc3QgVVNFUl9OQU1FX0tFWSA9ICd5b2dhX3VzZXJfbmFtZSdcbmNvbnN0IFVTRVJfQVZBVEFSX0tFWSA9ICd5b2dhX3VzZXJfYXZhdGFyJ1xuY29uc3QgREVGQVVMVF9BVkFUQVIgPSAnL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnXG5jb25zdCBDT05UQUNUX0VNQUlMID0gJ3NlcnZpY2VAeW9nYS5leGFtcGxlLmNvbSdcbmNvbnN0IENPTlRBQ1RfUEhPTkUgPSAnNDAwLTU1NS05MjYzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByaXZhdGU6IHtcbiAgICB1c2VyTmFtZTogJycsXG4gICAgYXZhdGFyOiBERUZBVUxUX0FWQVRBUlxuICB9LFxuICBvbkluaXQoKSB7XG4gICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7IHRleHQ6ICfmiJHnmoQnIH0pXG4gIH0sXG4gIG9uU2hvdygpIHtcbiAgICB0aGlzLmluaXRVc2VySW5mbygpXG4gIH0sXG4gIGluaXRVc2VySW5mbygpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgIC8vIOivu+WPluWktOWDj1xuICAgIHN0b3JhZ2UuZ2V0KHtcbiAgICAgIGtleTogVVNFUl9BVkFUQVJfS0VZLFxuICAgICAgc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgdGhhdC5hdmF0YXIgPSBkYXRhXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhhdC5hdmF0YXIgPSBERUZBVUxUX0FWQVRBUlxuICAgICAgICAgIHN0b3JhZ2Uuc2V0KHsga2V5OiBVU0VSX0FWQVRBUl9LRVksIHZhbHVlOiBERUZBVUxUX0FWQVRBUiB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbCgpIHtcbiAgICAgICAgdGhhdC5hdmF0YXIgPSBERUZBVUxUX0FWQVRBUlxuICAgICAgICBzdG9yYWdlLnNldCh7IGtleTogVVNFUl9BVkFUQVJfS0VZLCB2YWx1ZTogREVGQVVMVF9BVkFUQVIgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g6K+75Y+W5pi156ewXG4gICAgc3RvcmFnZS5nZXQoe1xuICAgICAga2V5OiBVU0VSX05BTUVfS0VZLFxuICAgICAgc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgdGhhdC51c2VyTmFtZSA9IGRhdGFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gdGhhdC5nZW5lcmF0ZVJhbmRvbU5hbWUoKVxuICAgICAgICAgIHRoYXQudXNlck5hbWUgPSBuYW1lXG4gICAgICAgICAgc3RvcmFnZS5zZXQoeyBrZXk6IFVTRVJfTkFNRV9LRVksIHZhbHVlOiBuYW1lIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsKCkge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhhdC5nZW5lcmF0ZVJhbmRvbU5hbWUoKVxuICAgICAgICB0aGF0LnVzZXJOYW1lID0gbmFtZVxuICAgICAgICBzdG9yYWdlLnNldCh7IGtleTogVVNFUl9OQU1FX0tFWSwgdmFsdWU6IG5hbWUgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBnZW5lcmF0ZVJhbmRvbU5hbWUoKSB7XG4gICAgY29uc3QgYWRqZWN0aXZlcyA9IFsn5rip5p+UJywgJ+iHquWcqCcsICflroHpnZknLCAn6L2755uIJywgJ+WFg+awlCcsICfmsrvmhIgnLCAn5pqW5pqWJywgJ+a4heaZqCcsICfmmZrpo44nXVxuICAgIGNvbnN0IG5vdW5zID0gWyfnkZzkvL3ogIUnLCAn57uD5Lmg6ICFJywgJ+WRvOWQuOiAhScsICflsI/ooYzmmJ8nLCAn5bCP5qOu5p6XJywgJ+S6keactScsICfmtbfmtaonLCAn5pmo5YWJJ11cbiAgICBjb25zdCBhID0gYWRqZWN0aXZlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhZGplY3RpdmVzLmxlbmd0aCldXG4gICAgY29uc3QgbiA9IG5vdW5zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5vdW5zLmxlbmd0aCldXG4gICAgcmV0dXJuIGEgKyBuXG4gIH0sXG4gIG9wZW5BZ3JlZW1lbnQoKSB7XG4gICAgd2Vidmlldy5sb2FkVXJsKHtcbiAgICAgIHVybDogJ2h0dHA6Ly93d3cua3l5ODg3Nzg4LmNvbS9saWNlbnNpbmcuaHRtbCcsXG4gICAgfSlcbiAgICAvLyByb3V0ZXIucHVzaCh7XG4gICAgLy8gICB1cmk6ICdwYWdlcy9Qcml2YWN5UG9saWN5JyxcbiAgICAvLyAgIHBhcmFtczogeyB0YWI6ICdhZ3JlZW1lbnQnIH1cbiAgICAvLyB9KVxuICB9LFxuICBvcGVuUHJpdmFjeSgpIHtcbiAgICB3ZWJ2aWV3LmxvYWRVcmwoe1xuICAgICAgdXJsOiAnaHR0cDovL3d3dy5reXk4ODc3ODguY29tL3ByaXZhY3kuaHRtbCcsXG4gICAgfSlcbiAgICAvLyByb3V0ZXIucHVzaCh7XG4gICAgLy8gICB1cmk6ICdwYWdlcy9Qcml2YWN5UG9saWN5JyxcbiAgICAvLyAgIHBhcmFtczogeyB0YWI6ICdwcml2YWN5JyB9XG4gICAgLy8gfSlcbiAgfSxcbiAgb3BlbkZlZWRiYWNrKCkge1xuICAgIHJvdXRlci5wdXNoKHsgdXJpOiAncGFnZXMvRmVlZGJhY2snIH0pXG4gIH0sXG4gIGNvbnRhY3RTZXJ2aWNlKCkge1xuICAgIHByb21wdC5zaG93RGlhbG9nKHtcbiAgICAgIHRpdGxlOiAn6IGU57O75a6i5pyNJyxcbiAgICAgIG1lc3NhZ2U6ICflrqLmnI3pgq7nrrHvvJonICsgQ09OVEFDVF9FTUFJTCArICdcXG5cXG7lrqLmnI3ng63nur/vvJonICsgQ09OVEFDVF9QSE9ORSArICdcXG7lt6XkvZzml7bpl7TvvJowOTowMC0xODowMCcsXG4gICAgICBidXR0b25zOiBbeyB0ZXh0OiAn56Gu5a6aJywgY29sb3I6ICcjRTZBODdDJyB9XSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHsgfVxuICAgIH0pXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgJy4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZS5sZXNzJztcblxuLndyYXBwZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IEBiZy1tYWluO1xufVxuXG4uY29udGVudC1tYWluIHtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyNCAqIEBzaXplLWZhY3RvciAyMCAqIEBzaXplLWZhY3RvciAxNiAqIEBzaXplLWZhY3RvcjtcbiAgcGFkZGluZy1ib3R0b206IDEyMHB4O1xufVxuXG4ucHJvZmlsZS1jYXJkIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IEB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjAgKiBAc2l6ZS1mYWN0b3I7XG4gIHBhZGRpbmc6IDI4ICogQHNpemUtZmFjdG9yIDI0ICogQHNpemUtZmFjdG9yO1xuICBtYXJnaW4tYm90dG9tOiAyNCAqIEBzaXplLWZhY3Rvcjtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiAxMjAgKiBAc2l6ZS1mYWN0b3I7XG4gIGhlaWdodDogMTIwICogQHNpemUtZmFjdG9yO1xuICBib3JkZXItcmFkaXVzOiA2MCAqIEBzaXplLWZhY3RvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJvcmRlci1jb2xvcjtcbiAgbWFyZ2luLXJpZ2h0OiAyNCAqIEBzaXplLWZhY3Rvcjtcbn1cblxuLnByb2ZpbGUtdGV4dCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4OiAxO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBAYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDggKiBAc2l6ZS1mYWN0b3I7XG59XG5cbi5kZXNjIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogQGdyZXk7XG59XG5cbi5zZWN0aW9uIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNiAqIEBzaXplLWZhY3RvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogQHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNiAqIEBzaXplLWZhY3RvcjtcbiAgYm9yZGVyOiAxcHggc29saWQgQGJvcmRlci1jb2xvcjtcbn1cblxuLmNlbGwge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyNCAqIEBzaXplLWZhY3RvcjtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiBAYm9yZGVyLWNvbG9yO1xufVxuXG4uY2VsbDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuLmNlbGwtdGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiBAYmxhY2s7XG59XG5cbi5jZWxsLWFycm93IHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogQGdyZXk7XG4gIG1hcmdpbi1sZWZ0OiAxMiAqIEBzaXplLWZhY3Rvcjtcbn1cbjwvc3R5bGU+XG5cbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwidGFiYmFyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGFiLWl0ZW1cIiBmb3I9XCJ7eyhpbmRleCwgaXRlbSkgaW4gdGFic319XCIgb25jbGljaz1cIm9uVGFiQ2xpY2soaW5kZXgpXCI+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwidGFiLWljb25cIj57e2l0ZW0uaWNvbn19PC90ZXh0PlxyXG4gICAgICA8dGV4dCBjbGFzcz1cInRhYi10ZXh0IHt7Y3VycmVudCA9PT0gaW5kZXggPyAnYWN0aXZlJyA6ICcnfX1cIj57e2l0ZW0udGl0bGV9fTwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgY3VycmVudDoge1xyXG4gICAgICBkZWZhdWx0OiAwXHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhOiB7XHJcbiAgICB0YWJzOiBbXHJcbiAgICAgIHsgdGl0bGU6ICfpppbpobUnLCBpY29uOiAn8J+PoCcgfSxcclxuICAgICAgeyB0aXRsZTogJ+W3peWFtycsIGljb246ICfwn6ewJyB9LFxyXG4gICAgICB7IHRpdGxlOiAn5oiR55qEJywgaWNvbjogJ/CfkaQnIH1cclxuICAgIF1cclxuICB9LFxyXG4gIG9uVGFiQ2xpY2soaW5kZXgpIHtcclxuICAgIGlmIChpbmRleCA9PT0gdGhpcy5jdXJyZW50KSByZXR1cm5cclxuICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICByb3V0ZXIuY2xlYXIoKVxyXG4gICAgICByb3V0ZXIucmVwbGFjZSh7IHVyaTogJy9wYWdlcy9Ib21lJyB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IHVyaXMgPSBbJy9wYWdlcy9Ib21lJywgJy9wYWdlcy9Ub29scycsICcvcGFnZXMvTWluZSddXHJcbiAgICByb3V0ZXIucHVzaCh7IHVyaTogdXJpc1tpbmRleF0gfSlcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cImxlc3NcIj5cclxuQGltcG9ydCAnLi8uLi8uLi9hc3NldHMvc3R5bGVzL3N0eWxlLmxlc3MnO1xyXG5cclxuLnRhYmJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IEB3aGl0ZTtcclxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogQGJvcmRlci1jb2xvcjtcclxuICBwYWRkaW5nLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xyXG59XHJcblxyXG4udGFiLWl0ZW0ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4udGFiLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi50YWItdGV4dCB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiBAZ3JleTtcclxufVxyXG5cclxuLnRhYi10ZXh0LmFjdGl2ZSB7XHJcbiAgY29sb3I6IEBicmFuZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIudGFiYmFyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImxlZnRcIjogXCIwcHhcIixcbiAgICBcInJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJib3R0b21cIjogXCIwcHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI0YwRTJEOFwiXG4gIH0sXG4gIFwiLnRhYi1pdGVtXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCIudGFiLWljb25cIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0MHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0cHhcIlxuICB9LFxuICBcIi50YWItdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhBNkY2M1wiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIud3JhcHBlclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwic3RyZXRjaFwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGN0YxXCJcbiAgfSxcbiAgXCIuY29udGVudC1tYWluXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJzdHJldGNoXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyNHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBweFwiXG4gIH0sXG4gIFwiLnByb2ZpbGUtY2FyZFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyOHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjhweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyNHB4XCJcbiAgfSxcbiAgXCIuYXZhdGFyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTIwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEyMHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI2MHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjI0cHhcIlxuICB9LFxuICBcIi5wcm9maWxlLXRleHRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcIi5uYW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzRweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIixcbiAgICBcImNvbG9yXCI6IFwiIzNBMkUyOFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiOHB4XCJcbiAgfSxcbiAgXCIuZGVzY1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI2cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhBNkY2M1wiXG4gIH0sXG4gIFwiLnNlY3Rpb25cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcInN0cmV0Y2hcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTZweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTZweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI0YwRTJEOFwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNGMEUyRDhcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI0YwRTJEOFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI0YwRTJEOFwiXG4gIH0sXG4gIFwiLmNlbGxcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyNHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjRweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNHB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjRjBFMkQ4XCJcbiAgfSxcbiAgXCIuY2VsbC10aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzNBMkUyOFwiXG4gIH0sXG4gIFwiLmNlbGwtYXJyb3dcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4QTZGNjNcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMnB4XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ0YWJiYXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0YWItaXRlbVwiXG4gICAgICBdLFxuICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICBcImV4cFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGFic30sXG4gICAgICAgIFwia2V5XCI6IFwiaW5kZXhcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW1cIlxuICAgICAgfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiB0aGlzLm9uVGFiQ2xpY2sodGhpcy5pbmRleCxldnQpfVxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtLmljb259XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRhYi1pY29uXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0udGl0bGV9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsndGFiLXRleHQnLCB0aGlzLmN1cnJlbnQ9PT10aGlzLmluZGV4PydhY3RpdmUnOicnXX1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ3cmFwcGVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY29udGVudC1tYWluXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInByb2ZpbGUtY2FyZFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYXZhdGFyfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJhdmF0YXJcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJwcm9maWxlLXRleHRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy51c2VyTmFtZX1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6Iqv55Gc5Ly9IMK3IOavj+WkqeS4gOeCueeCuei/m+atpVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImRlc2NcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInNlY3Rpb25cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImNlbGxcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcIm9wZW5BZ3JlZW1lbnRcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi55So5oi35Y2P6K6uXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsbC10aXRsZVwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi4oC6XCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsbC1hcnJvd1wiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjZWxsXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJvcGVuUHJpdmFjeVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLpmpDnp4HmlL/nrZZcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjZWxsLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLigLpcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjZWxsLWFycm93XCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzZWN0aW9uXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjZWxsXCIsXG4gICAgICAgICAgICAgICAgXCJjZWxsLW1lbnVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcIm9wZW5GZWVkYmFja1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmipXor4nkuI7lu7rorq5cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjZWxsLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLigLpcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjZWxsLWFycm93XCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImNlbGxcIixcbiAgICAgICAgICAgICAgICBcImNlbGwtbWVudVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwiY29udGFjdFNlcnZpY2VcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6IGU57O75a6i5pyNXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsbC10aXRsZVwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi4oC6XCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiY2VsbC1hcnJvd1wiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0YWItYmFyLWN1c3RvbVwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJjdXJyZW50XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gMn1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn0iLCJcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzY3JpcHQtbG9hZGVyLmpzIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxccGFja2FnZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcbW9kdWxlLWxvYWRlci5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz9jd2Q9YjpcXFxccXVpY2tBcHBcXFxceW9nYSZjYWNoZURpcmVjdG9yeSZwbHVnaW5zW109YzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGJhYmVsLXBsdWdpbi1qc3guanMmY29tbWVudHM9ZmFsc2UmY29uZmlnRmlsZT1jOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXHBhY2thZ2VyXFxcXGJhYmVsLmNvbmZpZy5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHQhLi9pbmRleC51eD91eFR5cGU9Y29tcFwiKVxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC90YWItYmFyLWN1c3RvbScsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpIHtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSByZXF1aXJlKFwiIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZS1sb2FkZXIuanMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGUhLi9pbmRleC51eD91eFR5cGU9Y29tcCZcIilcbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9IHJlcXVpcmUoXCIhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGxlc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxmcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIS4vaW5kZXgudXg/dXhUeXBlPWNvbXBcIilcbn0pO1xuOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJyZXF1aXJlKFwiIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFx1eC1sb2FkZXIuanM/Y3dkPWI6XFxcXHF1aWNrQXBwXFxcXHlvZ2EmdHlwZT1pbXBvcnQhLi4vLi4vY29tcG9uZW50cy9UYWJCYXIvaW5kZXgudXg/dXhUeXBlPWNvbXAmbmFtZT10YWItYmFyLWN1c3RvbVwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHNjcmlwdC1sb2FkZXIuanMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxwYWNrYWdlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxtb2R1bGUtbG9hZGVyLmpzIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzP2N3ZD1iOlxcXFxxdWlja0FwcFxcXFx5b2dhJmNhY2hlRGlyZWN0b3J5JnBsdWdpbnNbXT1jOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcYmFiZWwtcGx1Z2luLWpzeC5qcyZjb21tZW50cz1mYWxzZSZjb25maWdGaWxlPWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxccGFja2FnZXJcXFxcYmFiZWwuY29uZmlnLmpzIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxhY2Nlc3MtbG9hZGVyLmpzIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxmcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL2luZGV4LnV4P3V4VHlwZT1wYWdlXCIpXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2luZGV4JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCkge1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9IHJlcXVpcmUoXCIhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlLWxvYWRlci5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZSEuL2luZGV4LnV4P3V4VHlwZT1wYWdlJmltcG9ydE5hbWVzW109dGFiLWJhci1jdXN0b21cIilcbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9IHJlcXVpcmUoXCIhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGxlc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxmcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIS4vaW5kZXgudXg/dXhUeXBlPXBhZ2VcIilcbn0pO1xuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcseyBwYWNrYWdlclZlcnNpb246IFFVSUNLQVBQX1RPT0xLSVRfVkVSU0lPTiB9KTsiXSwibmFtZXMiOlsiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3N5c3RlbTIiLCJfc3lzdGVtMyIsIl9zeXN0ZW00IiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiVVNFUl9OQU1FX0tFWSIsIlVTRVJfQVZBVEFSX0tFWSIsIkRFRkFVTFRfQVZBVEFSIiwiQ09OVEFDVF9FTUFJTCIsIkNPTlRBQ1RfUEhPTkUiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJwcml2YXRlIiwidXNlck5hbWUiLCJhdmF0YXIiLCJvbkluaXQiLCIkcGFnZSIsInNldFRpdGxlQmFyIiwidGV4dCIsIm9uU2hvdyIsImluaXRVc2VySW5mbyIsInRoYXQiLCJzdG9yYWdlIiwiZ2V0Iiwia2V5Iiwic3VjY2VzcyIsImRhdGEiLCJzZXQiLCJ2YWx1ZSIsImZhaWwiLCJuYW1lIiwiZ2VuZXJhdGVSYW5kb21OYW1lIiwiYWRqZWN0aXZlcyIsIm5vdW5zIiwiYSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIm4iLCJvcGVuQWdyZWVtZW50Iiwid2VidmlldyIsImxvYWRVcmwiLCJ1cmwiLCJvcGVuUHJpdmFjeSIsIm9wZW5GZWVkYmFjayIsInJvdXRlciIsInB1c2giLCJ1cmkiLCJjb250YWN0U2VydmljZSIsInByb21wdCIsInNob3dEaWFsb2ciLCJ0aXRsZSIsIm1lc3NhZ2UiLCJidXR0b25zIiwiY29sb3IiLCJwcm9wcyIsImN1cnJlbnQiLCJ0YWJzIiwiaWNvbiIsIm9uVGFiQ2xpY2siLCJpbmRleCIsImNsZWFyIiwicmVwbGFjZSIsInVyaXMiXSwic291cmNlUm9vdCI6IiJ9