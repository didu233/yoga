(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\babel-loader\\lib\\index.js?cwd=b:\\quickApp\\yoga&cacheDirectory&plugins[]=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/PracticeList/index.ux?uxType=page":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\babel-loader\lib\index.js?cwd=b:\quickApp\yoga&cacheDirectory&plugins[]=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/pages/PracticeList/index.ux?uxType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _practices = _interopRequireDefault(__webpack_require__(/*! ../../data/practices.js */ "./src/data/practices.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  private: {
    practices: [],
    currentIndex: 0,
    currentPractice: null
  },
  onInit() {
    this.$page.setTitleBar({
      text: '练习动作'
    });
    this.practices = _practices.default;
    this.updateCurrentPractice();
  },
  updateCurrentPractice() {
    if (this.practices && this.practices.length > 0) {
      this.currentPractice = this.practices[this.currentIndex];
    } else {
      this.currentPractice = null;
    }
  },
  goToPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCurrentPractice();
    }
  },
  goToNext() {
    if (this.currentIndex < this.practices.length - 1) {
      this.currentIndex++;
      this.updateCurrentPractice();
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

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/PracticeList/index.ux?uxType=page":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\less-loader\dist\cjs.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/pages/PracticeList/index.ux?uxType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "alignItems": "flex-start",
    "flex": 1,
    "backgroundColor": "#FFF7F1",
    "minHeight": "0px"
  },
  ".card-container": {
    "width": "100%",
    "flex": 1,
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "stretch",
    "minHeight": "0px"
  },
  ".tap-area": {
    "flex": 1,
    "minWidth": "0px",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "rgba(0,0,0,0)",
    "alignSelf": "stretch"
  },
  ".arrow-icon": {
    "fontSize": "60px",
    "color": "#8A6F63",
    "opacity": 0.6,
    "flexShrink": 0
  },
  ".card-wrapper": {
    "flex": 8,
    "minWidth": "0px",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "stretch"
  },
  ".practice-card": {
    "width": "100%",
    "height": "100%",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "backgroundColor": "#FFFFFF"
  },
  ".card-content": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "width": "100%",
    "flex": 1,
    "paddingTop": "40px",
    "paddingRight": "40px",
    "paddingBottom": "40px",
    "paddingLeft": "40px",
    "overflow": "visible"
  },
  ".practice-image": {
    "width": "100%",
    "height": "500px",
    "borderRadius": "20px",
    "backgroundColor": "#FFF7F1",
    "marginBottom": "30px"
  },
  ".practice-info": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "width": "100%",
    "flex": 1
  },
  ".practice-header": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "width": "100%",
    "marginBottom": "20px"
  },
  ".practice-name": {
    "fontSize": "44px",
    "fontWeight": "bold",
    "color": "#3A2E28",
    "flex": 1
  },
  ".practice-difficulty": {
    "fontSize": "26px",
    "paddingTop": "8px",
    "paddingRight": "20px",
    "paddingBottom": "8px",
    "paddingLeft": "20px",
    "borderRadius": "12px",
    "marginLeft": "20px"
  },
  ".difficulty-basic": {
    "backgroundColor": "#e8f5e9",
    "color": "#2e7d32"
  },
  ".difficulty-intermediate": {
    "backgroundColor": "#fff3e0",
    "color": "#e65100"
  },
  ".difficulty-advanced": {
    "backgroundColor": "#fce4ec",
    "color": "#c2185b"
  },
  ".practice-desc": {
    "fontSize": "30px",
    "color": "#3A2E28",
    "width": "100%",
    "marginBottom": "40px"
  },
  ".detail-section": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "width": "100%",
    "marginBottom": "40px",
    "paddingTop": "30px",
    "paddingRight": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "30px",
    "backgroundColor": "#FFF7F1",
    "borderRadius": "16px"
  },
  ".section-title": {
    "fontSize": "32px",
    "fontWeight": "bold",
    "color": "#3A2E28",
    "marginBottom": "20px",
    "width": "100%",
    "paddingBottom": "16px",
    "borderBottomWidth": "1px",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#F0E2D8"
  },
  ".section-content": {
    "fontSize": "28px",
    "color": "#3A2E28",
    "width": "100%"
  },
  ".steps-list": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "width": "100%"
  },
  ".step-item": {
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "width": "100%",
    "marginBottom": "20px",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "backgroundColor": "#FFF7F1",
    "borderRadius": "12px",
    "borderLeftWidth": "4px",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#E6A87C"
  },
  ".step-number-wrap": {
    "width": "48px",
    "height": "48px",
    "borderRadius": "24px",
    "backgroundColor": "#E6A87C",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "flexShrink": 0,
    "marginRight": "16px"
  },
  ".step-number": {
    "color": "#FFFFFF",
    "fontSize": "24px",
    "fontWeight": "bold",
    "textAlign": "center"
  },
  ".step-text": {
    "flex": 1,
    "fontSize": "28px",
    "color": "#3A2E28",
    "paddingTop": "8px"
  },
  ".tips-list": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "width": "100%"
  },
  ".tip-item": {
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "width": "100%",
    "marginBottom": "16px",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "backgroundColor": "#FFF7F1",
    "borderRadius": "12px",
    "borderLeftWidth": "4px",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#E6A87C"
  },
  ".tip-icon": {
    "fontSize": "28px",
    "marginRight": "12px",
    "flexShrink": 0
  },
  ".tip-text": {
    "flex": 1,
    "fontSize": "26px",
    "color": "#3A2E28",
    "paddingTop": "4px"
  },
  ".page-indicator": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "100%",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "backgroundColor": "#FFFFFF",
    "borderTopWidth": "1px",
    "borderTopStyle": "solid",
    "borderTopColor": "#F0E2D8"
  },
  ".page-text": {
    "fontSize": "28px",
    "color": "#8A6F63"
  }
}

/***/ }),

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/PracticeList/index.ux?uxType=page&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/pages/PracticeList/index.ux?uxType=page& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
            "card-container"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tap-area",
                "left-tap-area"
              ],
              "events": {
                "click": "goToPrevious"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "◀"
                  },
                  "classList": [
                    "arrow-icon"
                  ],
                  "shown": function () {return this.currentIndex>0}
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "card-wrapper"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "practice-card"
                  ],
                  "shown": function () {return this.currentPractice},
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "card-content"
                      ],
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.currentPractice.image}
                          },
                          "classList": [
                            "practice-image"
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "practice-info"
                          ],
                          "children": [
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "practice-header"
                              ],
                              "children": [
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.currentPractice.name}
                                  },
                                  "classList": [
                                    "practice-name"
                                  ]
                                },
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.currentPractice.difficulty}
                                  },
                                  "classList": function () {return ['practice-difficulty', '' + 'difficulty-' + (this.currentPractice.difficulty_val)]}
                                }
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.currentPractice.description}
                              },
                              "classList": [
                                "practice-desc"
                              ]
                            },
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "detail-section"
                              ],
                              "children": [
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": "练习步骤"
                                  },
                                  "classList": [
                                    "section-title"
                                  ]
                                },
                                {
                                  "type": "div",
                                  "attr": {},
                                  "classList": [
                                    "steps-list"
                                  ],
                                  "children": [
                                    {
                                      "type": "div",
                                      "attr": {},
                                      "classList": [
                                        "step-item"
                                      ],
                                      "repeat": {
                                        "exp": function () {return this.currentPractice.steps},
                                        "key": "stepIndex",
                                        "value": "step"
                                      },
                                      "children": [
                                        {
                                          "type": "div",
                                          "attr": {},
                                          "classList": [
                                            "step-number-wrap"
                                          ],
                                          "children": [
                                            {
                                              "type": "text",
                                              "attr": {
                                                "value": function () {return this.stepIndex+1}
                                              },
                                              "classList": [
                                                "step-number"
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "type": "text",
                                          "attr": {
                                            "value": function () {return this.step}
                                          },
                                          "classList": [
                                            "step-text"
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
                                "detail-section"
                              ],
                              "children": [
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": "注意事项"
                                  },
                                  "classList": [
                                    "section-title"
                                  ]
                                },
                                {
                                  "type": "div",
                                  "attr": {},
                                  "classList": [
                                    "tips-list"
                                  ],
                                  "children": [
                                    {
                                      "type": "div",
                                      "attr": {},
                                      "classList": [
                                        "tip-item"
                                      ],
                                      "repeat": {
                                        "exp": function () {return this.currentPractice.tips},
                                        "key": "tipIndex",
                                        "value": "tip"
                                      },
                                      "children": [
                                        {
                                          "type": "text",
                                          "attr": {
                                            "value": "💡"
                                          },
                                          "classList": [
                                            "tip-icon"
                                          ]
                                        },
                                        {
                                          "type": "text",
                                          "attr": {
                                            "value": function () {return this.tip}
                                          },
                                          "classList": [
                                            "tip-text"
                                          ]
                                        }
                                      ]
                                    }
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
                        "page-indicator"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return '' + (this.currentIndex+1) + ' / ' + (this.practices.length)}
                          },
                          "classList": [
                            "page-text"
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
                "tap-area",
                "right-tap-area"
              ],
              "events": {
                "click": "goToNext"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "▶"
                  },
                  "classList": [
                    "arrow-icon"
                  ],
                  "shown": function () {return this.currentIndex<this.practices.length-1}
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

/***/ "./src/data/practices.js":
/*!*******************************!*\
  !*** ./src/data/practices.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/**
 * 瑜伽动作数据
 */
var _default = exports["default"] = [{
  id: 1,
  name: '山式',
  image: '/assets/images/practices/mountain.png',
  difficulty: '初级',
  difficulty_val: 'basic',
  description: '山式是瑜伽中最基础的站立姿势，是所有站立体式的根基。它能够帮助改善体态，增强身体平衡感和稳定性。',
  steps: ['双脚并拢，脚趾向前，脚掌均匀着地', '膝盖微屈，不要锁死', '收腹，挺胸，肩膀放松下沉', '双手自然垂放身体两侧，掌心向内', '头部保持中正，目视前方', '保持呼吸自然，停留30秒到1分钟'],
  tips: ['保持身体重心在双脚之间', '避免过度挺胸或塌腰', '如果平衡困难，可以双脚稍微分开']
}, {
  id: 2,
  name: '树式',
  image: '/assets/images/practices/tree.png',
  difficulty: '初级',
  difficulty_val: 'basic',
  description: '树式是一个经典的平衡体式，能够增强腿部力量，提高专注力和平衡能力。',
  steps: ['从山式开始，将重心转移到左脚', '抬起右脚，将右脚掌放在左大腿内侧', '如果无法放在大腿内侧，可以放在小腿内侧或脚踝', '双手合十举过头顶，或放在胸前', '保持平衡，目视前方固定点', '保持30秒到1分钟，然后换另一侧'],
  tips: ['不要将脚放在膝盖侧面，避免对膝盖造成压力', '如果平衡困难，可以靠墙练习', '保持核心收紧，有助于平衡']
}, {
  id: 3,
  name: '战士一式',
  image: '/assets/images/practices/warrior1.png',
  difficulty: '中级',
  difficulty_val: 'intermediate',
  description: '战士一式能够增强腿部力量，打开髋部，拉伸大腿前侧和腹股沟，同时增强核心稳定性。',
  steps: ['从山式开始，向后迈一大步，形成弓步', '前脚脚尖向前，后脚向外转45度', '前腿弯曲，大腿与地面平行', '后腿伸直，脚跟用力下压', '双手举过头顶，掌心相对', '保持躯干直立，目视前方', '保持30秒到1分钟，然后换另一侧'],
  tips: ['前膝盖不要超过脚踝', '保持后腿伸直，不要弯曲', '如果肩膀紧张，可以双手分开与肩同宽']
}, {
  id: 4,
  name: '下犬式',
  image: '/assets/images/practices/downward-dog.png',
  difficulty: '中级',
  difficulty_val: 'intermediate',
  description: '下犬式是瑜伽中最常见的体式之一，能够拉伸整个身体后侧，增强手臂和腿部力量，同时具有放松和恢复的作用。',
  steps: ['从四足跪姿开始，双手与肩同宽，双膝与髋同宽', '双手手指张开，中指指向正前方', '呼气，抬起膝盖，伸直双腿', '将坐骨向上推，形成倒V字形', '保持头部放松，在双臂之间', '保持30秒到1分钟'],
  tips: ['如果腿后侧紧张，可以微屈膝盖', '保持双手用力推地，激活手臂力量', '保持呼吸自然，不要憋气']
}, {
  id: 5,
  name: '猫牛式',
  image: '/assets/images/practices/cat-cow.png',
  difficulty: '初级',
  difficulty_val: 'basic',
  description: '猫牛式是一个温和的脊柱活动体式，能够改善脊柱灵活性，缓解背部紧张，适合作为热身或放松练习。',
  steps: ['从四足跪姿开始，双手与肩同宽，双膝与髋同宽', '吸气，抬头，尾骨向上，形成牛式', '呼气，低头，尾骨向下，拱起背部，形成猫式', '配合呼吸，缓慢重复10-15次', '最后回到中立位置'],
  tips: ['动作要缓慢，配合呼吸', '感受脊柱的逐节活动', '如果手腕不适，可以用拳头支撑']
}, {
  id: 6,
  name: '儿童式',
  image: '/assets/images/practices/child.png',
  difficulty: '初级',
  difficulty_val: 'basic',
  description: '儿童式是一个放松和恢复的体式，能够拉伸背部、髋部和肩膀，同时具有镇静和减压的作用。',
  steps: ['从四足跪姿开始', '将双膝分开，与髋同宽或更宽', '将臀部向后坐向脚跟', '向前伸展手臂，额头贴地', '保持呼吸自然，放松全身', '保持1-3分钟'],
  tips: ['如果额头无法贴地，可以在额头下垫一个垫子', '如果膝盖不适，可以在膝盖下垫毯子', '这是一个放松体式，不要用力']
}];

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
/*!*****************************************************!*\
  !*** ./src/pages/PracticeList/index.ux?uxType=page ***!
  \*****************************************************/

var $app_script$ = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\babel-loader\lib\index.js?cwd=b:\quickApp\yoga&cacheDirectory&plugins[]=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\babel-loader\\lib\\index.js?cwd=b:\\quickApp\\yoga&cacheDirectory&plugins[]=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/PracticeList/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/PracticeList/index.ux?uxType=page&")
    $app_module$.exports.style = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\less-loader\dist\cjs.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/PracticeList/index.ux?uxType=page")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXFByYWN0aWNlTGlzdFxcaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQUFBLFVBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsbUJBQUE7QUFBQSxTQUFBRCx1QkFBQUUsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLEtBQUFFLE9BQUEsRUFBQUYsQ0FBQTtBQUFBLElBQUFHLFFBQUEsR0FBQUMsT0FBQSxDQUFBRixPQUFBLEdBRUE7RUFDQUcsT0FBQTtJQUNBQyxTQUFBO0lBQ0FDLFlBQUE7SUFDQUMsZUFBQTtFQUNBO0VBQ0FDLE9BQUE7SUFDQSxLQUFBQyxLQUFBLENBQUFDLFdBQUE7TUFBQUMsSUFBQTtJQUFBO0lBQ0EsS0FBQU4sU0FBQSxHQUFBTyxrQkFBQTtJQUNBLEtBQUFDLHFCQUFBO0VBQ0E7RUFDQUEsc0JBQUE7SUFDQSxTQUFBUixTQUFBLFNBQUFBLFNBQUEsQ0FBQVMsTUFBQTtNQUNBLEtBQUFQLGVBQUEsUUFBQUYsU0FBQSxNQUFBQyxZQUFBO0lBQ0E7TUFDQSxLQUFBQyxlQUFBO0lBQ0E7RUFDQTtFQUNBUSxhQUFBO0lBQ0EsU0FBQVQsWUFBQTtNQUNBLEtBQUFBLFlBQUE7TUFDQSxLQUFBTyxxQkFBQTtJQUNBO0VBQ0E7RUFDQUcsU0FBQTtJQUNBLFNBQUFWLFlBQUEsUUFBQUQsU0FBQSxDQUFBUyxNQUFBO01BQ0EsS0FBQVIsWUFBQTtNQUNBLEtBQUFPLHFCQUFBO0lBQ0E7RUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFD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RUFDN0NDLFVBQVUsRUFBRSxJQUFJO0VBQ2hCQyxjQUFjLEVBQUMsT0FBTztFQUN0QkMsV0FBVyxFQUNULCtDQUErQztFQUNqREMsS0FBSyxFQUFFLENBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixzQkFBc0IsRUFDdEIsaUJBQWlCLEVBQ2pCLFVBQVUsQ0FDWDtFQUNEQyxJQUFJLEVBQUUsQ0FDSixZQUFZLEVBQ1osV0FBVyxFQUNYLGdCQUFnQjtBQUVwQixDQUFDLEVBQ0Q7RUFDRVAsRUFBRSxFQUFFLENBQUM7RUFDTEMsSUFBSSxFQUFFLEtBQUs7RUFDWEMsS0FBSyxFQUFFLG9DQUFvQztFQUMzQ0MsVUFBVSxFQUFFLElBQUk7RUFDaEJDLGNBQWMsRUFBQyxPQUFPO0VBQ3RCQyxXQUFXLEVBQ1QsMkNBQTJDO0VBQzdDQyxLQUFLLEVBQUUsQ0FDTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFdBQVcsRUFDWCxhQUFhLEVBQ2IsYUFBYSxFQUNiLFNBQVMsQ0FDVjtFQUNEQyxJQUFJLEVBQUUsQ0FDSixzQkFBc0IsRUFDdEIsa0JBQWtCLEVBQ2xCLGVBQWU7QUFFbkIsQ0FBQyxDQUNGLEM7Ozs7OztVQ3hJRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDckJBLG1CQUFtQixtQkFBTyxDQUFDLGc4RUFBeXdDO0FBQ3B5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsb3hCQUE0WTtBQUN4YixpQ0FBaUMsbUJBQU8sQ0FBQyw4akNBQXdpQjtBQUNqbEIsQ0FBQztBQUNELHlDQUF5QyxpQkFBaUIsT0FBd0IsRUFBRSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veW9nYS1saWdodC9DOlxcVXNlcnNcXGRpZGl1MjMzXFxBcHBEYXRhXFxMb2NhbFxcUHJvZ3JhbXNcXFF1aWNrIEFwcCBJREVcXGI6XFxxdWlja0FwcFxceW9nYVxcc3JjXFxwYWdlc1xcUHJhY3RpY2VMaXN0XFxpbmRleC51eD8yNWE5Iiwid2VicGFjazovL3lvZ2EtbGlnaHQvLi9zcmMvcGFnZXMvUHJhY3RpY2VMaXN0L2luZGV4LnV4PzVlMjEiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9wYWdlcy9QcmFjdGljZUxpc3QvaW5kZXgudXg/YTU2MyIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL2RhdGEvcHJhY3RpY2VzLmpzPzU5NjMiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC93ZWJwYWNrL2Jvb3RzdHJhcD83ZjgwIiwid2VicGFjazovL3lvZ2EtbGlnaHQvLi9zcmMvcGFnZXMvUHJhY3RpY2VMaXN0L2luZGV4LnV4P2RlMGYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwYWdlLXdyYXBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRhcC1hcmVhIGxlZnQtdGFwLWFyZWFcIiBvbmNsaWNrPVwiZ29Ub1ByZXZpb3VzXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJhcnJvdy1pY29uXCIgaWY9XCJ7e2N1cnJlbnRJbmRleCA+IDB9fVwiPuKXgDwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJhY3RpY2UtY2FyZFwiIGlmPVwie3tjdXJyZW50UHJhY3RpY2V9fVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJwcmFjdGljZS1pbWFnZVwiIHNyYz1cInt7Y3VycmVudFByYWN0aWNlLmltYWdlfX1cIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJhY3RpY2UtaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmFjdGljZS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicHJhY3RpY2UtbmFtZVwiPnt7Y3VycmVudFByYWN0aWNlLm5hbWV9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicHJhY3RpY2UtZGlmZmljdWx0eSBkaWZmaWN1bHR5LXt7Y3VycmVudFByYWN0aWNlLmRpZmZpY3VsdHlfdmFsfX1cIlxyXG4gICAgICAgICAgICAgICAgICA+e3tjdXJyZW50UHJhY3RpY2UuZGlmZmljdWx0eX19PC90ZXh0XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJwcmFjdGljZS1kZXNjXCI+e3tjdXJyZW50UHJhY3RpY2UuZGVzY3JpcHRpb259fTwvdGV4dD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPue7g+S5oOatpemqpDwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwcy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwLWl0ZW1cIiBmb3I9XCJ7eyhzdGVwSW5kZXgsIHN0ZXApIGluIGN1cnJlbnRQcmFjdGljZS5zdGVwc319XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0ZXAtbnVtYmVyLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic3RlcC1udW1iZXJcIj57e3N0ZXBJbmRleCArIDF9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInN0ZXAtdGV4dFwiPnt7c3RlcH19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+5rOo5oSP5LqL6aG5PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpcHMtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGlwLWl0ZW1cIiBmb3I9XCJ7eyh0aXBJbmRleCwgdGlwKSBpbiBjdXJyZW50UHJhY3RpY2UudGlwc319XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ0aXAtaWNvblwiPvCfkqE8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ0aXAtdGV4dFwiPnt7dGlwfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1pbmRpY2F0b3JcIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJwYWdlLXRleHRcIj57e2N1cnJlbnRJbmRleCArIDF9fSAvIHt7cHJhY3RpY2VzLmxlbmd0aH19PC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGFwLWFyZWEgcmlnaHQtdGFwLWFyZWFcIiBvbmNsaWNrPVwiZ29Ub05leHRcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImFycm93LWljb25cIiBpZj1cInt7Y3VycmVudEluZGV4IDwgcHJhY3RpY2VzLmxlbmd0aCAtIDF9fVwiPuKWtjwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHByYWN0aWNlc0RhdGEgZnJvbSAnLi4vLi4vZGF0YS9wcmFjdGljZXMuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJpdmF0ZToge1xyXG4gICAgcHJhY3RpY2VzOiBbXSxcclxuICAgIGN1cnJlbnRJbmRleDogMCxcclxuICAgIGN1cnJlbnRQcmFjdGljZTogbnVsbFxyXG4gIH0sXHJcbiAgb25Jbml0KCkge1xyXG4gICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7IHRleHQ6ICfnu4PkuaDliqjkvZwnIH0pXHJcbiAgICB0aGlzLnByYWN0aWNlcyA9IHByYWN0aWNlc0RhdGFcclxuICAgIHRoaXMudXBkYXRlQ3VycmVudFByYWN0aWNlKClcclxuICB9LFxyXG4gIHVwZGF0ZUN1cnJlbnRQcmFjdGljZSgpIHtcclxuICAgIGlmICh0aGlzLnByYWN0aWNlcyAmJiB0aGlzLnByYWN0aWNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFByYWN0aWNlID0gdGhpcy5wcmFjdGljZXNbdGhpcy5jdXJyZW50SW5kZXhdXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQcmFjdGljZSA9IG51bGxcclxuICAgIH1cclxuICB9LFxyXG4gIGdvVG9QcmV2aW91cygpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA+IDApIHtcclxuICAgICAgdGhpcy5jdXJyZW50SW5kZXgtLVxyXG4gICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRQcmFjdGljZSgpXHJcbiAgICB9XHJcbiAgfSxcclxuICBnb1RvTmV4dCgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA8IHRoaXMucHJhY3RpY2VzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5jdXJyZW50SW5kZXgrK1xyXG4gICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRQcmFjdGljZSgpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XHJcbkBpbXBvcnQgJy4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZS5sZXNzJztcclxuXHJcbi5wYWdlLXdyYXAge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmctbWFpbjtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGZsZXg6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJnLW1haW47XHJcbiAgbWluLWhlaWdodDogMDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4OiAxO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIG1pbi1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi50YXAtYXJlYSB7XHJcbiAgZmxleDogMTtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5hcnJvdy1pY29uIHtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgY29sb3I6IEBncmV5O1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciB7XHJcbiAgZmxleDogODtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5wcmFjdGljZS1jYXJkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmc6IDQwICogQHNpemUtZmFjdG9yO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ucHJhY3RpY2UtaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAwICogQHNpemUtZmFjdG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwICogQHNpemUtZmFjdG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IEBiZy1tYWluO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4ucHJhY3RpY2UtaW5mbyB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnByYWN0aWNlLWhlYWRlciB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyMCAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLnByYWN0aWNlLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogNDRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogQGJsYWNrO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5wcmFjdGljZS1kaWZmaWN1bHR5IHtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgcGFkZGluZzogOCAqIEBzaXplLWZhY3RvciAyMCAqIEBzaXplLWZhY3RvcjtcclxuICBib3JkZXItcmFkaXVzOiAxMiAqIEBzaXplLWZhY3RvcjtcclxuICBtYXJnaW4tbGVmdDogMjAgKiBAc2l6ZS1mYWN0b3I7XHJcbn1cclxuXHJcbi5kaWZmaWN1bHR5LWJhc2ljIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmNWU5O1xyXG4gIGNvbG9yOiAjMmU3ZDMyO1xyXG59XHJcblxyXG4uZGlmZmljdWx0eS1pbnRlcm1lZGlhdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYzZTA7XHJcbiAgY29sb3I6ICNlNjUxMDA7XHJcbn1cclxuXHJcbi5kaWZmaWN1bHR5LWFkdmFuY2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNlNGVjO1xyXG4gIGNvbG9yOiAjYzIxODViO1xyXG59XHJcblxyXG4ucHJhY3RpY2UtZGVzYyB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiBAYmxhY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDAgKiBAc2l6ZS1mYWN0b3I7XHJcbn1cclxuXHJcbi5kZXRhaWwtc2VjdGlvbiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDAgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgcGFkZGluZzogMzAgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJnLW1haW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTYgKiBAc2l6ZS1mYWN0b3I7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IEBibGFjaztcclxuICBtYXJnaW4tYm90dG9tOiAyMCAqIEBzaXplLWZhY3RvcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTYgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIEBib3JkZXItY29sb3I7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBjb2xvcjogQGJsYWNrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3RlcHMtbGlzdCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdGVwLWl0ZW0ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwICogQHNpemUtZmFjdG9yO1xyXG4gIHBhZGRpbmc6IDIwICogQHNpemUtZmFjdG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IEBiZy1tYWluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEyICogQHNpemUtZmFjdG9yO1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgQGJyYW5kO1xyXG59XHJcblxyXG4uc3RlcC1udW1iZXItd3JhcCB7XHJcbiAgd2lkdGg6IDQ4ICogQHNpemUtZmFjdG9yO1xyXG4gIGhlaWdodDogNDggKiBAc2l6ZS1mYWN0b3I7XHJcbiAgYm9yZGVyLXJhZGl1czogMjQgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJyYW5kO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXNocmluazogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDE2ICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4uc3RlcC1udW1iZXIge1xyXG4gIGNvbG9yOiBAd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN0ZXAtdGV4dCB7XHJcbiAgZmxleDogMTtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgY29sb3I6IEBibGFjaztcclxuICBwYWRkaW5nLXRvcDogOCAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLnRpcHMtbGlzdCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aXAtaXRlbSB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTYgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgcGFkZGluZzogMjAgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJnLW1haW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTIgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBAYnJhbmQ7XHJcbn1cclxuXHJcbi50aXAtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTIgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi50aXAtdGV4dCB7XHJcbiAgZmxleDogMTtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgY29sb3I6IEBibGFjaztcclxuICBwYWRkaW5nLXRvcDogNCAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLnBhZ2UtaW5kaWNhdG9yIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjAgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQHdoaXRlO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBAYm9yZGVyLWNvbG9yO1xyXG59XHJcblxyXG4ucGFnZS10ZXh0IHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgY29sb3I6IEBncmV5O1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5wYWdlLXdyYXBcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRjdGMVwiXG4gIH0sXG4gIFwiLndyYXBwZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRjdGMVwiLFxuICAgIFwibWluSGVpZ2h0XCI6IFwiMHB4XCJcbiAgfSxcbiAgXCIuY2FyZC1jb250YWluZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJzdHJldGNoXCIsXG4gICAgXCJtaW5IZWlnaHRcIjogXCIwcHhcIlxuICB9LFxuICBcIi50YXAtYXJlYVwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJtaW5XaWR0aFwiOiBcIjBweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImFsaWduU2VsZlwiOiBcInN0cmV0Y2hcIlxuICB9LFxuICBcIi5hcnJvdy1pY29uXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNjBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOEE2RjYzXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuNixcbiAgICBcImZsZXhTaHJpbmtcIjogMFxuICB9LFxuICBcIi5jYXJkLXdyYXBwZXJcIjoge1xuICAgIFwiZmxleFwiOiA4LFxuICAgIFwibWluV2lkdGhcIjogXCIwcHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcInN0cmV0Y2hcIlxuICB9LFxuICBcIi5wcmFjdGljZS1jYXJkXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwiLmNhcmQtY29udGVudFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNDBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHB4XCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcInZpc2libGVcIlxuICB9LFxuICBcIi5wcmFjdGljZS1pbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjUwMHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGN0YxXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHB4XCJcbiAgfSxcbiAgXCIucHJhY3RpY2UtaW5mb1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcIi5wcmFjdGljZS1oZWFkZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi5wcmFjdGljZS1uYW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNDRweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIixcbiAgICBcImNvbG9yXCI6IFwiIzNBMkUyOFwiLFxuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwiLnByYWN0aWNlLWRpZmZpY3VsdHlcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiOHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiOHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHB4XCJcbiAgfSxcbiAgXCIuZGlmZmljdWx0eS1iYXNpY1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZThmNWU5XCIsXG4gICAgXCJjb2xvclwiOiBcIiMyZTdkMzJcIlxuICB9LFxuICBcIi5kaWZmaWN1bHR5LWludGVybWVkaWF0ZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmM2UwXCIsXG4gICAgXCJjb2xvclwiOiBcIiNlNjUxMDBcIlxuICB9LFxuICBcIi5kaWZmaWN1bHR5LWFkdmFuY2VkXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmY2U0ZWNcIixcbiAgICBcImNvbG9yXCI6IFwiI2MyMTg1YlwiXG4gIH0sXG4gIFwiLnByYWN0aWNlLWRlc2NcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzQTJFMjhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLmRldGFpbC1zZWN0aW9uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkY3RjFcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjE2cHhcIlxuICB9LFxuICBcIi5zZWN0aW9uLXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzJweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIixcbiAgICBcImNvbG9yXCI6IFwiIzNBMkUyOFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTZweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI0YwRTJEOFwiXG4gIH0sXG4gIFwiLnNlY3Rpb24tY29udGVudFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzNBMkUyOFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgfSxcbiAgXCIuc3RlcHMtbGlzdFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICB9LFxuICBcIi5zdGVwLWl0ZW1cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRjdGMVwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTJweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiNHB4XCIsXG4gICAgXCJib3JkZXJMZWZ0U3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI0U2QTg3Q1wiXG4gIH0sXG4gIFwiLnN0ZXAtbnVtYmVyLXdyYXBcIjoge1xuICAgIFwid2lkdGhcIjogXCI0OHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0OHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyNHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRTZBODdDXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZmxleFNocmlua1wiOiAwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxNnB4XCJcbiAgfSxcbiAgXCIuc3RlcC1udW1iZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5zdGVwLXRleHRcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZm9udFNpemVcIjogXCIyOHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzQTJFMjhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI4cHhcIlxuICB9LFxuICBcIi50aXBzLWxpc3RcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgfSxcbiAgXCIudGlwLWl0ZW1cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRjdGMVwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTJweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiNHB4XCIsXG4gICAgXCJib3JkZXJMZWZ0U3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI0U2QTg3Q1wiXG4gIH0sXG4gIFwiLnRpcC1pY29uXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjhweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMnB4XCIsXG4gICAgXCJmbGV4U2hyaW5rXCI6IDBcbiAgfSxcbiAgXCIudGlwLXRleHRcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZm9udFNpemVcIjogXCIyNnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzQTJFMjhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0cHhcIlxuICB9LFxuICBcIi5wYWdlLWluZGljYXRvclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclRvcFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI0YwRTJEOFwiXG4gIH0sXG4gIFwiLnBhZ2UtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhBNkY2M1wiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwicGFnZS13cmFwXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwid3JhcHBlclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJjYXJkLWNvbnRhaW5lclwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidGFwLWFyZWFcIixcbiAgICAgICAgICAgICAgICBcImxlZnQtdGFwLWFyZWFcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImdvVG9QcmV2aW91c1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLil4BcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJhcnJvdy1pY29uXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5jdXJyZW50SW5kZXg+MH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImNhcmQtd3JhcHBlclwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInByYWN0aWNlLWNhcmRcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmN1cnJlbnRQcmFjdGljZX0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhcmQtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuY3VycmVudFByYWN0aWNlLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmFjdGljZS1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByYWN0aWNlLWluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmFjdGljZS1oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5jdXJyZW50UHJhY3RpY2UubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJhY3RpY2UtbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5jdXJyZW50UHJhY3RpY2UuZGlmZmljdWx0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydwcmFjdGljZS1kaWZmaWN1bHR5JywgJycgKyAnZGlmZmljdWx0eS0nICsgKHRoaXMuY3VycmVudFByYWN0aWNlLmRpZmZpY3VsdHlfdmFsKV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmN1cnJlbnRQcmFjdGljZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJhY3RpY2UtZGVzY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXRhaWwtc2VjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnu4PkuaDmraXpqqRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWN0aW9uLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGVwcy1saXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGVwLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcGVhdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmN1cnJlbnRQcmFjdGljZS5zdGVwc30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZXlcIjogXCJzdGVwSW5kZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwic3RlcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0ZXAtbnVtYmVyLXdyYXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zdGVwSW5kZXgrMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RlcC1udW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc3RlcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RlcC10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRldGFpbC1zZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuazqOaEj+S6i+mhuVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlY3Rpb24tdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpcHMtbGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGlwLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcGVhdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmN1cnJlbnRQcmFjdGljZS50aXBzfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtleVwiOiBcInRpcEluZGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInRpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLwn5KhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGlwLWljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGlwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXAtdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFnZS1pbmRpY2F0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJycgKyAodGhpcy5jdXJyZW50SW5kZXgrMSkgKyAnIC8gJyArICh0aGlzLnByYWN0aWNlcy5sZW5ndGgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWdlLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0YXAtYXJlYVwiLFxuICAgICAgICAgICAgICAgIFwicmlnaHQtdGFwLWFyZWFcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImdvVG9OZXh0XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuKWtlwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImFycm93LWljb25cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmN1cnJlbnRJbmRleDx0aGlzLnByYWN0aWNlcy5sZW5ndGgtMX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCIvKipcclxuICog55Gc5Ly95Yqo5L2c5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuYW1lOiAn5bGx5byPJyxcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvcHJhY3RpY2VzL21vdW50YWluLnBuZycsXHJcbiAgICBkaWZmaWN1bHR5OiAn5Yid57qnJyxcclxuICAgIGRpZmZpY3VsdHlfdmFsOidiYXNpYycsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ+WxseW8j+aYr+eRnOS8veS4reacgOWfuuehgOeahOermeeri+Wnv+WKv++8jOaYr+aJgOacieermeeri+S9k+W8j+eahOagueWfuuOAguWug+iDveWkn+W4ruWKqeaUueWWhOS9k+aAge+8jOWinuW8uui6q+S9k+W5s+ihoeaEn+WSjOeos+WumuaAp+OAgicsXHJcbiAgICBzdGVwczogW1xyXG4gICAgICAn5Y+M6ISa5bm25oui77yM6ISa6La+5ZCR5YmN77yM6ISa5o6M5Z2H5YyA552A5ZywJyxcclxuICAgICAgJ+iGneebluW+ruWxiO+8jOS4jeimgemUgeatuycsXHJcbiAgICAgICfmlLbohbnvvIzmjLrog7jvvIzogqnohoDmlL7mnb7kuIvmsoknLFxyXG4gICAgICAn5Y+M5omL6Ieq54S25Z6C5pS+6Lqr5L2T5Lik5L6n77yM5o6M5b+D5ZCR5YaFJyxcclxuICAgICAgJ+WktOmDqOS/neaMgeS4reato++8jOebruinhuWJjeaWuScsXHJcbiAgICAgICfkv53mjIHlkbzlkLjoh6rnhLbvvIzlgZznlZkzMOenkuWIsDHliIbpkp8nXHJcbiAgICBdLFxyXG4gICAgdGlwczogW1xyXG4gICAgICAn5L+d5oyB6Lqr5L2T6YeN5b+D5Zyo5Y+M6ISa5LmL6Ze0JyxcclxuICAgICAgJ+mBv+WFjei/h+W6puaMuuiDuOaIluWhjOiFsCcsXHJcbiAgICAgICflpoLmnpzlubPooaHlm7Dpmr7vvIzlj6/ku6Xlj4zohJrnqI3lvq7liIblvIAnXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIG5hbWU6ICfmoJHlvI8nLFxyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9wcmFjdGljZXMvdHJlZS5wbmcnLFxyXG4gICAgZGlmZmljdWx0eTogJ+WInee6pycsXHJcbiAgICBkaWZmaWN1bHR5X3ZhbDonYmFzaWMnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICfmoJHlvI/mmK/kuIDkuKrnu4/lhbjnmoTlubPooaHkvZPlvI/vvIzog73lpJ/lop7lvLrohb/pg6jlipvph4/vvIzmj5Dpq5jkuJPms6jlipvlkozlubPooaHog73lipvjgIInLFxyXG4gICAgc3RlcHM6IFtcclxuICAgICAgJ+S7juWxseW8j+W8gOWni++8jOWwhumHjeW/g+i9rOenu+WIsOW3puiEmicsXHJcbiAgICAgICfmiqzotbflj7PohJrvvIzlsIblj7PohJrmjozmlL7lnKjlt6blpKfohb/lhoXkvqcnLFxyXG4gICAgICAn5aaC5p6c5peg5rOV5pS+5Zyo5aSn6IW/5YaF5L6n77yM5Y+v5Lul5pS+5Zyo5bCP6IW/5YaF5L6n5oiW6ISa6LidJyxcclxuICAgICAgJ+WPjOaJi+WQiOWNgeS4vui/h+WktOmhtu+8jOaIluaUvuWcqOiDuOWJjScsXHJcbiAgICAgICfkv53mjIHlubPooaHvvIznm67op4bliY3mlrnlm7rlrprngrknLFxyXG4gICAgICAn5L+d5oyBMzDnp5LliLAx5YiG6ZKf77yM54S25ZCO5o2i5Y+m5LiA5L6nJ1xyXG4gICAgXSxcclxuICAgIHRpcHM6IFtcclxuICAgICAgJ+S4jeimgeWwhuiEmuaUvuWcqOiGneebluS+p+mdou+8jOmBv+WFjeWvueiGneeblumAoOaIkOWOi+WKmycsXHJcbiAgICAgICflpoLmnpzlubPooaHlm7Dpmr7vvIzlj6/ku6XpnaDlopnnu4PkuaAnLFxyXG4gICAgICAn5L+d5oyB5qC45b+D5pS257Sn77yM5pyJ5Yqp5LqO5bmz6KGhJ1xyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBuYW1lOiAn5oiY5aOr5LiA5byPJyxcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvcHJhY3RpY2VzL3dhcnJpb3IxLnBuZycsXHJcbiAgICBkaWZmaWN1bHR5OiAn5Lit57qnJyxcclxuICAgIGRpZmZpY3VsdHlfdmFsOidpbnRlcm1lZGlhdGUnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICfmiJjlo6vkuIDlvI/og73lpJ/lop7lvLrohb/pg6jlipvph4/vvIzmiZPlvIDpq4vpg6jvvIzmi4nkvLjlpKfohb/liY3kvqflkozohbnogqHmsp/vvIzlkIzml7blop7lvLrmoLjlv4PnqLPlrprmgKfjgIInLFxyXG4gICAgc3RlcHM6IFtcclxuICAgICAgJ+S7juWxseW8j+W8gOWni++8jOWQkeWQjui/iOS4gOWkp+atpe+8jOW9ouaIkOW8k+atpScsXHJcbiAgICAgICfliY3ohJrohJrlsJblkJHliY3vvIzlkI7ohJrlkJHlpJbovaw0NeW6picsXHJcbiAgICAgICfliY3ohb/lvK/mm7LvvIzlpKfohb/kuI7lnLDpnaLlubPooYwnLFxyXG4gICAgICAn5ZCO6IW/5Ly455u077yM6ISa6Lef55So5Yqb5LiL5Y6LJyxcclxuICAgICAgJ+WPjOaJi+S4vui/h+WktOmhtu+8jOaOjOW/g+ebuOWvuScsXHJcbiAgICAgICfkv53mjIHouq/lubLnm7Tnq4vvvIznm67op4bliY3mlrknLFxyXG4gICAgICAn5L+d5oyBMzDnp5LliLAx5YiG6ZKf77yM54S25ZCO5o2i5Y+m5LiA5L6nJ1xyXG4gICAgXSxcclxuICAgIHRpcHM6IFtcclxuICAgICAgJ+WJjeiGneebluS4jeimgei2hei/h+iEmui4nScsXHJcbiAgICAgICfkv53mjIHlkI7ohb/kvLjnm7TvvIzkuI3opoHlvK/mm7InLFxyXG4gICAgICAn5aaC5p6c6IKp6IaA57Sn5byg77yM5Y+v5Lul5Y+M5omL5YiG5byA5LiO6IKp5ZCM5a69J1xyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBuYW1lOiAn5LiL54qs5byPJyxcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvcHJhY3RpY2VzL2Rvd253YXJkLWRvZy5wbmcnLFxyXG4gICAgZGlmZmljdWx0eTogJ+S4ree6pycsXHJcbiAgICBkaWZmaWN1bHR5X3ZhbDonaW50ZXJtZWRpYXRlJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAn5LiL54qs5byP5piv55Gc5Ly95Lit5pyA5bi46KeB55qE5L2T5byP5LmL5LiA77yM6IO95aSf5ouJ5Ly45pW05Liq6Lqr5L2T5ZCO5L6n77yM5aKe5by65omL6IeC5ZKM6IW/6YOo5Yqb6YeP77yM5ZCM5pe25YW35pyJ5pS+5p2+5ZKM5oGi5aSN55qE5L2c55So44CCJyxcclxuICAgIHN0ZXBzOiBbXHJcbiAgICAgICfku47lm5votrPot6rlp7/lvIDlp4vvvIzlj4zmiYvkuI7ogqnlkIzlrr3vvIzlj4zohp3kuI7pq4vlkIzlrr0nLFxyXG4gICAgICAn5Y+M5omL5omL5oyH5byg5byA77yM5Lit5oyH5oyH5ZCR5q2j5YmN5pa5JyxcclxuICAgICAgJ+WRvOawlO+8jOaKrOi1t+iGneeblu+8jOS8uOebtOWPjOiFvycsXHJcbiAgICAgICflsIblnZDpqqjlkJHkuIrmjqjvvIzlvaLmiJDlgJJW5a2X5b2iJyxcclxuICAgICAgJ+S/neaMgeWktOmDqOaUvuadvu+8jOWcqOWPjOiHguS5i+mXtCcsXHJcbiAgICAgICfkv53mjIEzMOenkuWIsDHliIbpkp8nXHJcbiAgICBdLFxyXG4gICAgdGlwczogW1xyXG4gICAgICAn5aaC5p6c6IW/5ZCO5L6n57Sn5byg77yM5Y+v5Lul5b6u5bGI6Iad55uWJyxcclxuICAgICAgJ+S/neaMgeWPjOaJi+eUqOWKm+aOqOWcsO+8jOa/gOa0u+aJi+iHguWKm+mHjycsXHJcbiAgICAgICfkv53mjIHlkbzlkLjoh6rnhLbvvIzkuI3opoHmhovmsJQnXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIG5hbWU6ICfnjKvniZvlvI8nLFxyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9wcmFjdGljZXMvY2F0LWNvdy5wbmcnLFxyXG4gICAgZGlmZmljdWx0eTogJ+WInee6pycsXHJcbiAgICBkaWZmaWN1bHR5X3ZhbDonYmFzaWMnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICfnjKvniZvlvI/mmK/kuIDkuKrmuKnlkoznmoTohIrmn7HmtLvliqjkvZPlvI/vvIzog73lpJ/mlLnlloTohIrmn7HngbXmtLvmgKfvvIznvJPop6Pog4zpg6jntKflvKDvvIzpgILlkIjkvZzkuLrng63ouqvmiJbmlL7mnb7nu4PkuaDjgIInLFxyXG4gICAgc3RlcHM6IFtcclxuICAgICAgJ+S7juWbm+i2s+i3quWnv+W8gOWni++8jOWPjOaJi+S4juiCqeWQjOWuve+8jOWPjOiGneS4jumri+WQjOWuvScsXHJcbiAgICAgICflkLjmsJTvvIzmiqzlpLTvvIzlsL7pqqjlkJHkuIrvvIzlvaLmiJDniZvlvI8nLFxyXG4gICAgICAn5ZG85rCU77yM5L2O5aS077yM5bC+6aqo5ZCR5LiL77yM5oux6LW36IOM6YOo77yM5b2i5oiQ54yr5byPJyxcclxuICAgICAgJ+mFjeWQiOWRvOWQuO+8jOe8k+aFoumHjeWkjTEwLTE15qyhJyxcclxuICAgICAgJ+acgOWQjuWbnuWIsOS4reeri+S9jee9ridcclxuICAgIF0sXHJcbiAgICB0aXBzOiBbXHJcbiAgICAgICfliqjkvZzopoHnvJPmhaLvvIzphY3lkIjlkbzlkLgnLFxyXG4gICAgICAn5oSf5Y+X6ISK5p+x55qE6YCQ6IqC5rS75YqoJyxcclxuICAgICAgJ+WmguaenOaJi+iFleS4jemAgu+8jOWPr+S7peeUqOaLs+WktOaUr+aSkSdcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgbmFtZTogJ+WEv+erpeW8jycsXHJcbiAgICBpbWFnZTogJy9hc3NldHMvaW1hZ2VzL3ByYWN0aWNlcy9jaGlsZC5wbmcnLFxyXG4gICAgZGlmZmljdWx0eTogJ+WInee6pycsXHJcbiAgICBkaWZmaWN1bHR5X3ZhbDonYmFzaWMnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICflhL/nq6XlvI/mmK/kuIDkuKrmlL7mnb7lkozmgaLlpI3nmoTkvZPlvI/vvIzog73lpJ/mi4nkvLjog4zpg6jjgIHpq4vpg6jlkozogqnohoDvvIzlkIzml7blhbfmnInplYfpnZnlkozlh4/ljovnmoTkvZznlKjjgIInLFxyXG4gICAgc3RlcHM6IFtcclxuICAgICAgJ+S7juWbm+i2s+i3quWnv+W8gOWniycsXHJcbiAgICAgICflsIblj4zohp3liIblvIDvvIzkuI7pq4vlkIzlrr3miJbmm7Tlrr0nLFxyXG4gICAgICAn5bCG6IeA6YOo5ZCR5ZCO5Z2Q5ZCR6ISa6LefJyxcclxuICAgICAgJ+WQkeWJjeS8uOWxleaJi+iHgu+8jOmineWktOi0tOWcsCcsXHJcbiAgICAgICfkv53mjIHlkbzlkLjoh6rnhLbvvIzmlL7mnb7lhajouqsnLFxyXG4gICAgICAn5L+d5oyBMS0z5YiG6ZKfJ1xyXG4gICAgXSxcclxuICAgIHRpcHM6IFtcclxuICAgICAgJ+WmguaenOmineWktOaXoOazlei0tOWcsO+8jOWPr+S7peWcqOmineWktOS4i+Weq+S4gOS4quWeq+WtkCcsXHJcbiAgICAgICflpoLmnpzohp3nm5bkuI3pgILvvIzlj6/ku6XlnKjohp3nm5bkuIvlnqvmr6/lrZAnLFxyXG4gICAgICAn6L+Z5piv5LiA5Liq5pS+5p2+5L2T5byP77yM5LiN6KaB55So5YqbJ1xyXG4gICAgXVxyXG4gIH1cclxuXVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcc2NyaXB0LWxvYWRlci5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXHBhY2thZ2VyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXG1vZHVsZS1sb2FkZXIuanMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/Y3dkPWI6XFxcXHF1aWNrQXBwXFxcXHlvZ2EmY2FjaGVEaXJlY3RvcnkmcGx1Z2luc1tdPWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxiYWJlbC1wbHVnaW4tanN4LmpzJmNvbW1lbnRzPWZhbHNlJmNvbmZpZ0ZpbGU9YzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxwYWNrYWdlclxcXFxiYWJlbC5jb25maWcuanMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGFjY2Vzcy1sb2FkZXIuanMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vaW5kZXgudXg/dXhUeXBlPXBhZ2VcIilcbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKSB7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gcmVxdWlyZShcIiFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGUtbG9hZGVyLmpzIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxmcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlIS4vaW5kZXgudXg/dXhUeXBlPXBhZ2UmXCIpXG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSByZXF1aXJlKFwiIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxsZXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuL2luZGV4LnV4P3V4VHlwZT1wYWdlXCIpXG59KTtcbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJWZXJzaW9uOiBRVUlDS0FQUF9UT09MS0lUX1ZFUlNJT04gfSk7Il0sIm5hbWVzIjpbIl9wcmFjdGljZXMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByaXZhdGUiLCJwcmFjdGljZXMiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50UHJhY3RpY2UiLCJvbkluaXQiLCIkcGFnZSIsInNldFRpdGxlQmFyIiwidGV4dCIsInByYWN0aWNlc0RhdGEiLCJ1cGRhdGVDdXJyZW50UHJhY3RpY2UiLCJsZW5ndGgiLCJnb1RvUHJldmlvdXMiLCJnb1RvTmV4dCIsImlkIiwibmFtZSIsImltYWdlIiwiZGlmZmljdWx0eSIsImRpZmZpY3VsdHlfdmFsIiwiZGVzY3JpcHRpb24iLCJzdGVwcyIsInRpcHMiXSwic291cmNlUm9vdCI6IiJ9