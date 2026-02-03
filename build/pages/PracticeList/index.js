(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\Administrator\\QuickAppProjects\\yoga-light&cacheDirectory&plugins[]=c:\\Users\\Administrator\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\Administrator\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/PracticeList/index.ux?uxType=page":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\Users\Administrator\QuickAppProjects\yoga-light&cacheDirectory&plugins[]=c:\Users\Administrator\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\Administrator\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/PracticeList/index.ux?uxType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/less-loader/dist/cjs.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/PracticeList/index.ux?uxType=page":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/less-loader/dist/cjs.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/PracticeList/index.ux?uxType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".wrapper": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "flex": 1,
    "backgroundColor": "#FFF7F1"
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
    "paddingLeft": "40px"
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
  ".practice-desc": {
    "fontSize": "30px",
    "color": "#3A2E28",
    "lineHeight": "1.8px",
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
    "lineHeight": "1.8px",
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
  ".step-number": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "48px",
    "height": "48px",
    "backgroundColor": "#E6A87C",
    "color": "#FFFFFF",
    "fontSize": "24px",
    "fontWeight": "bold",
    "borderRadius": "24px",
    "flexShrink": 0,
    "marginRight": "16px"
  },
  ".step-text": {
    "flex": 1,
    "fontSize": "28px",
    "color": "#3A2E28",
    "lineHeight": "1.7px",
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
    "lineHeight": "1.6px",
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

/***/ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/PracticeList/index.ux?uxType=page&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/PracticeList/index.ux?uxType=page& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
                              "classList": function () {return ['practice-difficulty', '' + 'difficulty-' + (this.currentPractice.difficulty)]}
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
                                      "type": "text",
                                      "attr": {
                                        "value": function () {return this.stepIndex+1}
                                      },
                                      "classList": [
                                        "step-number"
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
  description: '山式是瑜伽中最基础的站立姿势，是所有站立体式的根基。它能够帮助改善体态，增强身体平衡感和稳定性。',
  steps: ['双脚并拢，脚趾向前，脚掌均匀着地', '膝盖微屈，不要锁死', '收腹，挺胸，肩膀放松下沉', '双手自然垂放身体两侧，掌心向内', '头部保持中正，目视前方', '保持呼吸自然，停留30秒到1分钟'],
  tips: ['保持身体重心在双脚之间', '避免过度挺胸或塌腰', '如果平衡困难，可以双脚稍微分开']
}, {
  id: 2,
  name: '树式',
  image: '/assets/images/practices/tree.png',
  difficulty: '初级',
  description: '树式是一个经典的平衡体式，能够增强腿部力量，提高专注力和平衡能力。',
  steps: ['从山式开始，将重心转移到左脚', '抬起右脚，将右脚掌放在左大腿内侧', '如果无法放在大腿内侧，可以放在小腿内侧或脚踝', '双手合十举过头顶，或放在胸前', '保持平衡，目视前方固定点', '保持30秒到1分钟，然后换另一侧'],
  tips: ['不要将脚放在膝盖侧面，避免对膝盖造成压力', '如果平衡困难，可以靠墙练习', '保持核心收紧，有助于平衡']
}, {
  id: 3,
  name: '战士一式',
  image: '/assets/images/practices/warrior1.png',
  difficulty: '中级',
  description: '战士一式能够增强腿部力量，打开髋部，拉伸大腿前侧和腹股沟，同时增强核心稳定性。',
  steps: ['从山式开始，向后迈一大步，形成弓步', '前脚脚尖向前，后脚向外转45度', '前腿弯曲，大腿与地面平行', '后腿伸直，脚跟用力下压', '双手举过头顶，掌心相对', '保持躯干直立，目视前方', '保持30秒到1分钟，然后换另一侧'],
  tips: ['前膝盖不要超过脚踝', '保持后腿伸直，不要弯曲', '如果肩膀紧张，可以双手分开与肩同宽']
}, {
  id: 4,
  name: '下犬式',
  image: '/assets/images/practices/downward-dog.png',
  difficulty: '中级',
  description: '下犬式是瑜伽中最常见的体式之一，能够拉伸整个身体后侧，增强手臂和腿部力量，同时具有放松和恢复的作用。',
  steps: ['从四足跪姿开始，双手与肩同宽，双膝与髋同宽', '双手手指张开，中指指向正前方', '呼气，抬起膝盖，伸直双腿', '将坐骨向上推，形成倒V字形', '保持头部放松，在双臂之间', '保持30秒到1分钟'],
  tips: ['如果腿后侧紧张，可以微屈膝盖', '保持双手用力推地，激活手臂力量', '保持呼吸自然，不要憋气']
}, {
  id: 5,
  name: '猫牛式',
  image: '/assets/images/practices/cat-cow.png',
  difficulty: '初级',
  description: '猫牛式是一个温和的脊柱活动体式，能够改善脊柱灵活性，缓解背部紧张，适合作为热身或放松练习。',
  steps: ['从四足跪姿开始，双手与肩同宽，双膝与髋同宽', '吸气，抬头，尾骨向上，形成牛式', '呼气，低头，尾骨向下，拱起背部，形成猫式', '配合呼吸，缓慢重复10-15次', '最后回到中立位置'],
  tips: ['动作要缓慢，配合呼吸', '感受脊柱的逐节活动', '如果手腕不适，可以用拳头支撑']
}, {
  id: 6,
  name: '儿童式',
  image: '/assets/images/practices/child.png',
  difficulty: '初级',
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

var $app_script$ = __webpack_require__(/*! !../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\Users\Administrator\QuickAppProjects\yoga-light&cacheDirectory&plugins[]=c:\Users\Administrator\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\Administrator\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\Administrator\\QuickAppProjects\\yoga-light&cacheDirectory&plugins[]=c:\\Users\\Administrator\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\Administrator\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/PracticeList/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/PracticeList/index.ux?uxType=page&")
    $app_module$.exports.style = __webpack_require__(/*! !../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/less-loader/dist/cjs.js!../../../../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/less-loader/dist/cjs.js!../../AppData/Local/Programs/Quick App IDE/resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/PracticeList/index.ux?uxType=page")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXFByYWN0aWNlTGlzdFxcaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0RBLElBQUFBLFVBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsbUJBQUE7QUFBQSxTQUFBRCx1QkFBQUUsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLEtBQUFFLE9BQUEsRUFBQUYsQ0FBQTtBQUFBLElBQUFHLFFBQUEsR0FBQUMsT0FBQSxDQUFBRixPQUFBLEdBRUE7RUFDQUcsT0FBQTtJQUNBQyxTQUFBO0lBQ0FDLFlBQUE7SUFDQUMsZUFBQTtFQUNBO0VBQ0FDLE9BQUE7SUFDQSxLQUFBQyxLQUFBLENBQUFDLFdBQUE7TUFBQUMsSUFBQTtJQUFBO0lBQ0EsS0FBQU4sU0FBQSxHQUFBTyxrQkFBQTtJQUNBLEtBQUFDLHFCQUFBO0VBQ0E7RUFDQUEsc0JBQUE7SUFDQSxTQUFBUixTQUFBLFNBQUFBLFNBQUEsQ0FBQVMsTUFBQTtNQUNBLEtBQUFQLGVBQUEsUUFBQUYsU0FBQSxNQUFBQyxZQUFBO0lBQ0E7TUFDQSxLQUFBQyxlQUFBO0lBQ0E7RUFDQTtFQUNBUSxhQUFBO0lBQ0EsU0FBQVQsWUFBQTtNQUNBLEtBQUFBLFlBQUE7TUFDQSxLQUFBTyxxQkFBQTtJQUNBO0VBQ0E7RUFDQUcsU0FBQTtJQUNBLFNBQUFWLFlBQUEsUUFBQUQsU0FBQSxDQUFBUyxNQUFBO01BQ0EsS0FBQVIsWUFBQTtNQUNBLEtBQUFPLHFCQUFBO0lBQ0E7RUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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SyxFQUFFLENBQ0wsU0FBUyxFQUNULGVBQWUsRUFDZixXQUFXLEVBQ1gsYUFBYSxFQUNiLGFBQWEsRUFDYixTQUFTLENBQ1Y7RUFDREMsSUFBSSxFQUFFLENBQ0osc0JBQXNCLEVBQ3RCLGtCQUFrQixFQUNsQixlQUFlO0FBRW5CLENBQUMsQ0FDRixDOzs7Ozs7VUNsSUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3JCQSxtQkFBbUIsbUJBQU8sQ0FBQyxpNEVBQTB0QztBQUNydkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLHN0QkFBc1c7QUFDbFosaUNBQWlDLG1CQUFPLENBQUMsbStCQUFpZjtBQUMxaEIsQ0FBQztBQUNELHlDQUF5QyxpQkFBaUIsT0FBd0IsRUFBRSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9wYWdlcy9QcmFjdGljZUxpc3QvaW5kZXgudXg/MWI5NSIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL3BhZ2VzL1ByYWN0aWNlTGlzdC9pbmRleC51eD9mNWZkIiwid2VicGFjazovL3lvZ2EtbGlnaHQvLi9zcmMvcGFnZXMvUHJhY3RpY2VMaXN0L2luZGV4LnV4P2FiNTkiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9kYXRhL3ByYWN0aWNlcy5qcz81OTYzIiwid2VicGFjazovL3lvZ2EtbGlnaHQvd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL3BhZ2VzL1ByYWN0aWNlTGlzdC9pbmRleC51eD9lZWM1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXAtYXJlYSBsZWZ0LXRhcC1hcmVhXCIgb25jbGljaz1cImdvVG9QcmV2aW91c1wiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiYXJyb3ctaWNvblwiIGlmPVwie3tjdXJyZW50SW5kZXggPiAwfX1cIj7il4A8L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByYWN0aWNlLWNhcmRcIiBpZj1cInt7Y3VycmVudFByYWN0aWNlfX1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwicHJhY3RpY2UtaW1hZ2VcIiBzcmM9XCJ7e2N1cnJlbnRQcmFjdGljZS5pbWFnZX19XCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByYWN0aWNlLWluZm9cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJhY3RpY2UtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInByYWN0aWNlLW5hbWVcIj57e2N1cnJlbnRQcmFjdGljZS5uYW1lfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInByYWN0aWNlLWRpZmZpY3VsdHkgZGlmZmljdWx0eS17e2N1cnJlbnRQcmFjdGljZS5kaWZmaWN1bHR5fX1cIlxyXG4gICAgICAgICAgICAgICAgICA+e3tjdXJyZW50UHJhY3RpY2UuZGlmZmljdWx0eX19PC90ZXh0XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJwcmFjdGljZS1kZXNjXCI+e3tjdXJyZW50UHJhY3RpY2UuZGVzY3JpcHRpb259fTwvdGV4dD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPue7g+S5oOatpemqpDwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwcy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwLWl0ZW1cIiBmb3I9XCJ7eyhzdGVwSW5kZXgsIHN0ZXApIGluIGN1cnJlbnRQcmFjdGljZS5zdGVwc319XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJzdGVwLW51bWJlclwiPnt7c3RlcEluZGV4ICsgMX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic3RlcC10ZXh0XCI+e3tzdGVwfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj7ms6jmhI/kuovpobk8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGlwcy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXAtaXRlbVwiIGZvcj1cInt7KHRpcEluZGV4LCB0aXApIGluIGN1cnJlbnRQcmFjdGljZS50aXBzfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInRpcC1pY29uXCI+8J+SoTwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInRpcC10ZXh0XCI+e3t0aXB9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWluZGljYXRvclwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInBhZ2UtdGV4dFwiPnt7Y3VycmVudEluZGV4ICsgMX19IC8ge3twcmFjdGljZXMubGVuZ3RofX08L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXAtYXJlYSByaWdodC10YXAtYXJlYVwiIG9uY2xpY2s9XCJnb1RvTmV4dFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiYXJyb3ctaWNvblwiIGlmPVwie3tjdXJyZW50SW5kZXggPCBwcmFjdGljZXMubGVuZ3RoIC0gMX19XCI+4pa2PC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHByYWN0aWNlc0RhdGEgZnJvbSAnLi4vLi4vZGF0YS9wcmFjdGljZXMuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJpdmF0ZToge1xyXG4gICAgcHJhY3RpY2VzOiBbXSxcclxuICAgIGN1cnJlbnRJbmRleDogMCxcclxuICAgIGN1cnJlbnRQcmFjdGljZTogbnVsbFxyXG4gIH0sXHJcbiAgb25Jbml0KCkge1xyXG4gICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7IHRleHQ6ICfnu4PkuaDliqjkvZwnIH0pXHJcbiAgICB0aGlzLnByYWN0aWNlcyA9IHByYWN0aWNlc0RhdGFcclxuICAgIHRoaXMudXBkYXRlQ3VycmVudFByYWN0aWNlKClcclxuICB9LFxyXG4gIHVwZGF0ZUN1cnJlbnRQcmFjdGljZSgpIHtcclxuICAgIGlmICh0aGlzLnByYWN0aWNlcyAmJiB0aGlzLnByYWN0aWNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFByYWN0aWNlID0gdGhpcy5wcmFjdGljZXNbdGhpcy5jdXJyZW50SW5kZXhdXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQcmFjdGljZSA9IG51bGxcclxuICAgIH1cclxuICB9LFxyXG4gIGdvVG9QcmV2aW91cygpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA+IDApIHtcclxuICAgICAgdGhpcy5jdXJyZW50SW5kZXgtLVxyXG4gICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRQcmFjdGljZSgpXHJcbiAgICB9XHJcbiAgfSxcclxuICBnb1RvTmV4dCgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA8IHRoaXMucHJhY3RpY2VzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5jdXJyZW50SW5kZXgrK1xyXG4gICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRQcmFjdGljZSgpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XHJcbkBpbXBvcnQgJy4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZS5sZXNzJztcclxuXHJcbi53cmFwcGVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBmbGV4OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IEBiZy1tYWluO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXg6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgbWluLWhlaWdodDogMDtcclxufVxyXG5cclxuLnRhcC1hcmVhIHtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi13aWR0aDogMDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxufVxyXG5cclxuLmFycm93LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBjb2xvcjogQGdyZXk7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIHtcclxuICBmbGV4OiA4O1xyXG4gIG1pbi13aWR0aDogMDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuLnByYWN0aWNlLWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZzogNDAgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLnByYWN0aWNlLWltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwMCAqIEBzaXplLWZhY3RvcjtcclxuICBib3JkZXItcmFkaXVzOiAyMCAqIEBzaXplLWZhY3RvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmctbWFpbjtcclxuICBtYXJnaW4tYm90dG9tOiAzMCAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLnByYWN0aWNlLWluZm8ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5wcmFjdGljZS1oZWFkZXIge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjAgKiBAc2l6ZS1mYWN0b3I7XHJcbn1cclxuXHJcbi5wcmFjdGljZS1uYW1lIHtcclxuICBmb250LXNpemU6IDQ0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IEBibGFjaztcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4ucHJhY3RpY2UtZGlmZmljdWx0eSB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIHBhZGRpbmc6IDggKiBAc2l6ZS1mYWN0b3IgMjAgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgYm9yZGVyLXJhZGl1czogMTIgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4uZGlmZmljdWx0eS3liJ3nuqcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGY1ZTk7XHJcbiAgY29sb3I6ICMyZTdkMzI7XHJcbn1cclxuXHJcbi5kaWZmaWN1bHR5LeS4ree6pyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjNlMDtcclxuICBjb2xvcjogI2U2NTEwMDtcclxufVxyXG5cclxuLmRpZmZpY3VsdHkt6auY57qnIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNlNGVjO1xyXG4gIGNvbG9yOiAjYzIxODViO1xyXG59XHJcblxyXG4ucHJhY3RpY2UtZGVzYyB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiBAYmxhY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDEuODtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA0MCAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLmRldGFpbC1zZWN0aW9uIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA0MCAqIEBzaXplLWZhY3RvcjtcclxuICBwYWRkaW5nOiAzMCAqIEBzaXplLWZhY3RvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmctbWFpbjtcclxuICBib3JkZXItcmFkaXVzOiAxNiAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogQGJsYWNrO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwICogQHNpemUtZmFjdG9yO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNiAqIEBzaXplLWZhY3RvcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgQGJvcmRlci1jb2xvcjtcclxufVxyXG5cclxuLnNlY3Rpb24tY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiBAYmxhY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDEuODtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnN0ZXBzLWxpc3Qge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3RlcC1pdGVtIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyMCAqIEBzaXplLWZhY3RvcjtcclxuICBwYWRkaW5nOiAyMCAqIEBzaXplLWZhY3RvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmctbWFpbjtcclxuICBib3JkZXItcmFkaXVzOiAxMiAqIEBzaXplLWZhY3RvcjtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIEBicmFuZDtcclxufVxyXG5cclxuLnN0ZXAtbnVtYmVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQ4ICogQHNpemUtZmFjdG9yO1xyXG4gIGhlaWdodDogNDggKiBAc2l6ZS1mYWN0b3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJyYW5kO1xyXG4gIGNvbG9yOiBAd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0ICogQHNpemUtZmFjdG9yO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMTYgKiBAc2l6ZS1mYWN0b3I7XHJcbn1cclxuXHJcbi5zdGVwLXRleHQge1xyXG4gIGZsZXg6IDE7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiBAYmxhY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNztcclxuICBwYWRkaW5nLXRvcDogOCAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLnRpcHMtbGlzdCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aXAtaXRlbSB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTYgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgcGFkZGluZzogMjAgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJnLW1haW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTIgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBAYnJhbmQ7XHJcbn1cclxuXHJcbi50aXAtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTIgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi50aXAtdGV4dCB7XHJcbiAgZmxleDogMTtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgY29sb3I6IEBibGFjaztcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIHBhZGRpbmctdG9wOiA0ICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4ucGFnZS1pbmRpY2F0b3Ige1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMCAqIEBzaXplLWZhY3RvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2hpdGU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIEBib3JkZXItY29sb3I7XHJcbn1cclxuXHJcbi5wYWdlLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBjb2xvcjogQGdyZXk7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLndyYXBwZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRjdGMVwiXG4gIH0sXG4gIFwiLmNhcmQtY29udGFpbmVyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwic3RyZXRjaFwiLFxuICAgIFwibWluSGVpZ2h0XCI6IFwiMHB4XCJcbiAgfSxcbiAgXCIudGFwLWFyZWFcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwibWluV2lkdGhcIjogXCIwcHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgXCJhbGlnblNlbGZcIjogXCJzdHJldGNoXCJcbiAgfSxcbiAgXCIuYXJyb3ctaWNvblwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjYwcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhBNkY2M1wiLFxuICAgIFwib3BhY2l0eVwiOiAwLjYsXG4gICAgXCJmbGV4U2hyaW5rXCI6IDBcbiAgfSxcbiAgXCIuY2FyZC13cmFwcGVyXCI6IHtcbiAgICBcImZsZXhcIjogOCxcbiAgICBcIm1pbldpZHRoXCI6IFwiMHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJzdHJldGNoXCJcbiAgfSxcbiAgXCIucHJhY3RpY2UtY2FyZFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcIi5jYXJkLWNvbnRlbnRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLnByYWN0aWNlLWltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTAwcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkY3RjFcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcHhcIlxuICB9LFxuICBcIi5wcmFjdGljZS1pbmZvXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwiLnByYWN0aWNlLWhlYWRlclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBweFwiXG4gIH0sXG4gIFwiLnByYWN0aWNlLW5hbWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0NHB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiY29sb3JcIjogXCIjM0EyRTI4XCIsXG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCIucHJhY3RpY2UtZGlmZmljdWx0eVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI2cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI4cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI4cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi5wcmFjdGljZS1kZXNjXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjM0EyRTI4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMS44cHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLmRldGFpbC1zZWN0aW9uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkY3RjFcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjE2cHhcIlxuICB9LFxuICBcIi5zZWN0aW9uLXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzJweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIixcbiAgICBcImNvbG9yXCI6IFwiIzNBMkUyOFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTZweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI0YwRTJEOFwiXG4gIH0sXG4gIFwiLnNlY3Rpb24tY29udGVudFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzNBMkUyOFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjEuOHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICB9LFxuICBcIi5zdGVwcy1saXN0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLnN0ZXAtaXRlbVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGN0YxXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMnB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCI0cHhcIixcbiAgICBcImJvcmRlckxlZnRTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjRTZBODdDXCJcbiAgfSxcbiAgXCIuc3RlcC1udW1iZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiNDhweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDhweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0U2QTg3Q1wiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyNHB4XCIsXG4gICAgXCJmbGV4U2hyaW5rXCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjE2cHhcIlxuICB9LFxuICBcIi5zdGVwLXRleHRcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZm9udFNpemVcIjogXCIyOHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzQTJFMjhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIxLjdweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjhweFwiXG4gIH0sXG4gIFwiLnRpcHMtbGlzdFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICB9LFxuICBcIi50aXAtaXRlbVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGN0YxXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMnB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCI0cHhcIixcbiAgICBcImJvcmRlckxlZnRTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjRTZBODdDXCJcbiAgfSxcbiAgXCIudGlwLWljb25cIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEycHhcIixcbiAgICBcImZsZXhTaHJpbmtcIjogMFxuICB9LFxuICBcIi50aXAtdGV4dFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI2cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzNBMkUyOFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjEuNnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNHB4XCJcbiAgfSxcbiAgXCIucGFnZS1pbmRpY2F0b3JcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJUb3BTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNGMEUyRDhcIlxuICB9LFxuICBcIi5wYWdlLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4QTZGNjNcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIndyYXBwZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjYXJkLWNvbnRhaW5lclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0YXAtYXJlYVwiLFxuICAgICAgICAgICAgXCJsZWZ0LXRhcC1hcmVhXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJnb1RvUHJldmlvdXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi4peAXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYXJyb3ctaWNvblwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmN1cnJlbnRJbmRleD4wfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImNhcmQtd3JhcHBlclwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicHJhY3RpY2UtY2FyZFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmN1cnJlbnRQcmFjdGljZX0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImNhcmQtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuY3VycmVudFByYWN0aWNlLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmFjdGljZS1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJhY3RpY2UtaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJhY3RpY2UtaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuY3VycmVudFByYWN0aWNlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByYWN0aWNlLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuY3VycmVudFByYWN0aWNlLmRpZmZpY3VsdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ3ByYWN0aWNlLWRpZmZpY3VsdHknLCAnJyArICdkaWZmaWN1bHR5LScgKyAodGhpcy5jdXJyZW50UHJhY3RpY2UuZGlmZmljdWx0eSldfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmN1cnJlbnRQcmFjdGljZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJhY3RpY2UtZGVzY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRldGFpbC1zZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIue7g+S5oOatpemqpFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlY3Rpb24tdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RlcHMtbGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGVwLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmN1cnJlbnRQcmFjdGljZS5zdGVwc30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtleVwiOiBcInN0ZXBJbmRleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInN0ZXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zdGVwSW5kZXgrMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RlcC1udW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc3RlcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RlcC10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGV0YWlsLXNlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5rOo5oSP5LqL6aG5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VjdGlvbi10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXBzLWxpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGlwLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmN1cnJlbnRQcmFjdGljZS50aXBzfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwidGlwSW5kZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJ0aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi8J+SoVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpcC1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGlwLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJwYWdlLWluZGljYXRvclwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAnJyArICh0aGlzLmN1cnJlbnRJbmRleCsxKSArICcgLyAnICsgKHRoaXMucHJhY3RpY2VzLmxlbmd0aCl9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhZ2UtdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidGFwLWFyZWFcIixcbiAgICAgICAgICAgIFwicmlnaHQtdGFwLWFyZWFcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcImdvVG9OZXh0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuKWtlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImFycm93LWljb25cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5jdXJyZW50SW5kZXg8dGhpcy5wcmFjdGljZXMubGVuZ3RoLTF9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwiLyoqXHJcbiAqIOeRnOS8veWKqOS9nOaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogJ+WxseW8jycsXHJcbiAgICBpbWFnZTogJy9hc3NldHMvaW1hZ2VzL3ByYWN0aWNlcy9tb3VudGFpbi5wbmcnLFxyXG4gICAgZGlmZmljdWx0eTogJ+WInee6pycsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ+WxseW8j+aYr+eRnOS8veS4reacgOWfuuehgOeahOermeeri+Wnv+WKv++8jOaYr+aJgOacieermeeri+S9k+W8j+eahOagueWfuuOAguWug+iDveWkn+W4ruWKqeaUueWWhOS9k+aAge+8jOWinuW8uui6q+S9k+W5s+ihoeaEn+WSjOeos+WumuaAp+OAgicsXHJcbiAgICBzdGVwczogW1xyXG4gICAgICAn5Y+M6ISa5bm25oui77yM6ISa6La+5ZCR5YmN77yM6ISa5o6M5Z2H5YyA552A5ZywJyxcclxuICAgICAgJ+iGneebluW+ruWxiO+8jOS4jeimgemUgeatuycsXHJcbiAgICAgICfmlLbohbnvvIzmjLrog7jvvIzogqnohoDmlL7mnb7kuIvmsoknLFxyXG4gICAgICAn5Y+M5omL6Ieq54S25Z6C5pS+6Lqr5L2T5Lik5L6n77yM5o6M5b+D5ZCR5YaFJyxcclxuICAgICAgJ+WktOmDqOS/neaMgeS4reato++8jOebruinhuWJjeaWuScsXHJcbiAgICAgICfkv53mjIHlkbzlkLjoh6rnhLbvvIzlgZznlZkzMOenkuWIsDHliIbpkp8nXHJcbiAgICBdLFxyXG4gICAgdGlwczogW1xyXG4gICAgICAn5L+d5oyB6Lqr5L2T6YeN5b+D5Zyo5Y+M6ISa5LmL6Ze0JyxcclxuICAgICAgJ+mBv+WFjei/h+W6puaMuuiDuOaIluWhjOiFsCcsXHJcbiAgICAgICflpoLmnpzlubPooaHlm7Dpmr7vvIzlj6/ku6Xlj4zohJrnqI3lvq7liIblvIAnXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIG5hbWU6ICfmoJHlvI8nLFxyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9wcmFjdGljZXMvdHJlZS5wbmcnLFxyXG4gICAgZGlmZmljdWx0eTogJ+WInee6pycsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ+agkeW8j+aYr+S4gOS4que7j+WFuOeahOW5s+ihoeS9k+W8j++8jOiDveWkn+WinuW8uuiFv+mDqOWKm+mHj++8jOaPkOmrmOS4k+azqOWKm+WSjOW5s+ihoeiDveWKm+OAgicsXHJcbiAgICBzdGVwczogW1xyXG4gICAgICAn5LuO5bGx5byP5byA5aeL77yM5bCG6YeN5b+D6L2s56e75Yiw5bem6ISaJyxcclxuICAgICAgJ+aKrOi1t+WPs+iEmu+8jOWwhuWPs+iEmuaOjOaUvuWcqOW3puWkp+iFv+WGheS+pycsXHJcbiAgICAgICflpoLmnpzml6Dms5XmlL7lnKjlpKfohb/lhoXkvqfvvIzlj6/ku6XmlL7lnKjlsI/ohb/lhoXkvqfmiJbohJrouJ0nLFxyXG4gICAgICAn5Y+M5omL5ZCI5Y2B5Li+6L+H5aS06aG277yM5oiW5pS+5Zyo6IO45YmNJyxcclxuICAgICAgJ+S/neaMgeW5s+ihoe+8jOebruinhuWJjeaWueWbuuWumueCuScsXHJcbiAgICAgICfkv53mjIEzMOenkuWIsDHliIbpkp/vvIznhLblkI7mjaLlj6bkuIDkvqcnXHJcbiAgICBdLFxyXG4gICAgdGlwczogW1xyXG4gICAgICAn5LiN6KaB5bCG6ISa5pS+5Zyo6Iad55uW5L6n6Z2i77yM6YG/5YWN5a+56Iad55uW6YCg5oiQ5Y6L5YqbJyxcclxuICAgICAgJ+WmguaenOW5s+ihoeWbsOmavu+8jOWPr+S7pemdoOWimee7g+S5oCcsXHJcbiAgICAgICfkv53mjIHmoLjlv4PmlLbntKfvvIzmnInliqnkuo7lubPooaEnXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIG5hbWU6ICfmiJjlo6vkuIDlvI8nLFxyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9wcmFjdGljZXMvd2FycmlvcjEucG5nJyxcclxuICAgIGRpZmZpY3VsdHk6ICfkuK3nuqcnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICfmiJjlo6vkuIDlvI/og73lpJ/lop7lvLrohb/pg6jlipvph4/vvIzmiZPlvIDpq4vpg6jvvIzmi4nkvLjlpKfohb/liY3kvqflkozohbnogqHmsp/vvIzlkIzml7blop7lvLrmoLjlv4PnqLPlrprmgKfjgIInLFxyXG4gICAgc3RlcHM6IFtcclxuICAgICAgJ+S7juWxseW8j+W8gOWni++8jOWQkeWQjui/iOS4gOWkp+atpe+8jOW9ouaIkOW8k+atpScsXHJcbiAgICAgICfliY3ohJrohJrlsJblkJHliY3vvIzlkI7ohJrlkJHlpJbovaw0NeW6picsXHJcbiAgICAgICfliY3ohb/lvK/mm7LvvIzlpKfohb/kuI7lnLDpnaLlubPooYwnLFxyXG4gICAgICAn5ZCO6IW/5Ly455u077yM6ISa6Lef55So5Yqb5LiL5Y6LJyxcclxuICAgICAgJ+WPjOaJi+S4vui/h+WktOmhtu+8jOaOjOW/g+ebuOWvuScsXHJcbiAgICAgICfkv53mjIHouq/lubLnm7Tnq4vvvIznm67op4bliY3mlrknLFxyXG4gICAgICAn5L+d5oyBMzDnp5LliLAx5YiG6ZKf77yM54S25ZCO5o2i5Y+m5LiA5L6nJ1xyXG4gICAgXSxcclxuICAgIHRpcHM6IFtcclxuICAgICAgJ+WJjeiGneebluS4jeimgei2hei/h+iEmui4nScsXHJcbiAgICAgICfkv53mjIHlkI7ohb/kvLjnm7TvvIzkuI3opoHlvK/mm7InLFxyXG4gICAgICAn5aaC5p6c6IKp6IaA57Sn5byg77yM5Y+v5Lul5Y+M5omL5YiG5byA5LiO6IKp5ZCM5a69J1xyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBuYW1lOiAn5LiL54qs5byPJyxcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvcHJhY3RpY2VzL2Rvd253YXJkLWRvZy5wbmcnLFxyXG4gICAgZGlmZmljdWx0eTogJ+S4ree6pycsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ+S4i+eKrOW8j+aYr+eRnOS8veS4reacgOW4uOingeeahOS9k+W8j+S5i+S4gO+8jOiDveWkn+aLieS8uOaVtOS4qui6q+S9k+WQjuS+p++8jOWinuW8uuaJi+iHguWSjOiFv+mDqOWKm+mHj++8jOWQjOaXtuWFt+acieaUvuadvuWSjOaBouWkjeeahOS9nOeUqOOAgicsXHJcbiAgICBzdGVwczogW1xyXG4gICAgICAn5LuO5Zub6Laz6Leq5ae/5byA5aeL77yM5Y+M5omL5LiO6IKp5ZCM5a6977yM5Y+M6Iad5LiO6auL5ZCM5a69JyxcclxuICAgICAgJ+WPjOaJi+aJi+aMh+W8oOW8gO+8jOS4reaMh+aMh+WQkeato+WJjeaWuScsXHJcbiAgICAgICflkbzmsJTvvIzmiqzotbfohp3nm5bvvIzkvLjnm7Tlj4zohb8nLFxyXG4gICAgICAn5bCG5Z2Q6aqo5ZCR5LiK5o6o77yM5b2i5oiQ5YCSVuWtl+W9oicsXHJcbiAgICAgICfkv53mjIHlpLTpg6jmlL7mnb7vvIzlnKjlj4zoh4LkuYvpl7QnLFxyXG4gICAgICAn5L+d5oyBMzDnp5LliLAx5YiG6ZKfJ1xyXG4gICAgXSxcclxuICAgIHRpcHM6IFtcclxuICAgICAgJ+WmguaenOiFv+WQjuS+p+e0p+W8oO+8jOWPr+S7peW+ruWxiOiGneeblicsXHJcbiAgICAgICfkv53mjIHlj4zmiYvnlKjlipvmjqjlnLDvvIzmv4DmtLvmiYvoh4Llipvph48nLFxyXG4gICAgICAn5L+d5oyB5ZG85ZC46Ieq54S277yM5LiN6KaB5oaL5rCUJ1xyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBuYW1lOiAn54yr54mb5byPJyxcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvcHJhY3RpY2VzL2NhdC1jb3cucG5nJyxcclxuICAgIGRpZmZpY3VsdHk6ICfliJ3nuqcnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICfnjKvniZvlvI/mmK/kuIDkuKrmuKnlkoznmoTohIrmn7HmtLvliqjkvZPlvI/vvIzog73lpJ/mlLnlloTohIrmn7HngbXmtLvmgKfvvIznvJPop6Pog4zpg6jntKflvKDvvIzpgILlkIjkvZzkuLrng63ouqvmiJbmlL7mnb7nu4PkuaDjgIInLFxyXG4gICAgc3RlcHM6IFtcclxuICAgICAgJ+S7juWbm+i2s+i3quWnv+W8gOWni++8jOWPjOaJi+S4juiCqeWQjOWuve+8jOWPjOiGneS4jumri+WQjOWuvScsXHJcbiAgICAgICflkLjmsJTvvIzmiqzlpLTvvIzlsL7pqqjlkJHkuIrvvIzlvaLmiJDniZvlvI8nLFxyXG4gICAgICAn5ZG85rCU77yM5L2O5aS077yM5bC+6aqo5ZCR5LiL77yM5oux6LW36IOM6YOo77yM5b2i5oiQ54yr5byPJyxcclxuICAgICAgJ+mFjeWQiOWRvOWQuO+8jOe8k+aFoumHjeWkjTEwLTE15qyhJyxcclxuICAgICAgJ+acgOWQjuWbnuWIsOS4reeri+S9jee9ridcclxuICAgIF0sXHJcbiAgICB0aXBzOiBbXHJcbiAgICAgICfliqjkvZzopoHnvJPmhaLvvIzphY3lkIjlkbzlkLgnLFxyXG4gICAgICAn5oSf5Y+X6ISK5p+x55qE6YCQ6IqC5rS75YqoJyxcclxuICAgICAgJ+WmguaenOaJi+iFleS4jemAgu+8jOWPr+S7peeUqOaLs+WktOaUr+aSkSdcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgbmFtZTogJ+WEv+erpeW8jycsXHJcbiAgICBpbWFnZTogJy9hc3NldHMvaW1hZ2VzL3ByYWN0aWNlcy9jaGlsZC5wbmcnLFxyXG4gICAgZGlmZmljdWx0eTogJ+WInee6pycsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ+WEv+erpeW8j+aYr+S4gOS4quaUvuadvuWSjOaBouWkjeeahOS9k+W8j++8jOiDveWkn+aLieS8uOiDjOmDqOOAgemri+mDqOWSjOiCqeiGgO+8jOWQjOaXtuWFt+aciemVh+mdmeWSjOWHj+WOi+eahOS9nOeUqOOAgicsXHJcbiAgICBzdGVwczogW1xyXG4gICAgICAn5LuO5Zub6Laz6Leq5ae/5byA5aeLJyxcclxuICAgICAgJ+WwhuWPjOiGneWIhuW8gO+8jOS4jumri+WQjOWuveaIluabtOWuvScsXHJcbiAgICAgICflsIboh4Dpg6jlkJHlkI7lnZDlkJHohJrot58nLFxyXG4gICAgICAn5ZCR5YmN5Ly45bGV5omL6IeC77yM6aKd5aS06LS05ZywJyxcclxuICAgICAgJ+S/neaMgeWRvOWQuOiHqueEtu+8jOaUvuadvuWFqOi6qycsXHJcbiAgICAgICfkv53mjIExLTPliIbpkp8nXHJcbiAgICBdLFxyXG4gICAgdGlwczogW1xyXG4gICAgICAn5aaC5p6c6aKd5aS05peg5rOV6LS05Zyw77yM5Y+v5Lul5Zyo6aKd5aS05LiL5Z6r5LiA5Liq5Z6r5a2QJyxcclxuICAgICAgJ+WmguaenOiGneebluS4jemAgu+8jOWPr+S7peWcqOiGneebluS4i+Weq+avr+WtkCcsXHJcbiAgICAgICfov5nmmK/kuIDkuKrmlL7mnb7kvZPlvI/vvIzkuI3opoHnlKjlipsnXHJcbiAgICBdXHJcbiAgfVxyXG5dXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL0FwcERhdGEvTG9jYWwvUHJvZ3JhbXMvUXVpY2sgQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0FwcERhdGEvTG9jYWwvUHJvZ3JhbXMvUXVpY2sgQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvcGFja2FnZXIvbGliL2xvYWRlcnMvbW9kdWxlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9BcHBEYXRhL0xvY2FsL1Byb2dyYW1zL1F1aWNrIEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jd2Q9YzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxRdWlja0FwcFByb2plY3RzXFxcXHlvZ2EtbGlnaHQmY2FjaGVEaXJlY3RvcnkmcGx1Z2luc1tdPWM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGJhYmVsLXBsdWdpbi1qc3guanMmY29tbWVudHM9ZmFsc2UmY29uZmlnRmlsZT1jOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxccGFja2FnZXJcXFxcYmFiZWwuY29uZmlnLmpzIS4uLy4uLy4uLy4uLy4uL0FwcERhdGEvTG9jYWwvUHJvZ3JhbXMvUXVpY2sgQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0FwcERhdGEvTG9jYWwvUHJvZ3JhbXMvUXVpY2sgQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL2luZGV4LnV4P3V4VHlwZT1wYWdlXCIpXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2luZGV4JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCkge1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vQXBwRGF0YS9Mb2NhbC9Qcm9ncmFtcy9RdWljayBBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3RlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9BcHBEYXRhL0xvY2FsL1Byb2dyYW1zL1F1aWNrIEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZSEuL2luZGV4LnV4P3V4VHlwZT1wYWdlJlwiKVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9BcHBEYXRhL0xvY2FsL1Byb2dyYW1zL1F1aWNrIEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuLi8uLi8uLi8uLi8uLi9BcHBEYXRhL0xvY2FsL1Byb2dyYW1zL1F1aWNrIEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vQXBwRGF0YS9Mb2NhbC9Qcm9ncmFtcy9RdWljayBBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhLi9pbmRleC51eD91eFR5cGU9cGFnZVwiKVxufSk7XG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L2luZGV4Jyx7IHBhY2thZ2VyVmVyc2lvbjogUVVJQ0tBUFBfVE9PTEtJVF9WRVJTSU9OIH0pOyJdLCJuYW1lcyI6WyJfcHJhY3RpY2VzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJwcml2YXRlIiwicHJhY3RpY2VzIiwiY3VycmVudEluZGV4IiwiY3VycmVudFByYWN0aWNlIiwib25Jbml0IiwiJHBhZ2UiLCJzZXRUaXRsZUJhciIsInRleHQiLCJwcmFjdGljZXNEYXRhIiwidXBkYXRlQ3VycmVudFByYWN0aWNlIiwibGVuZ3RoIiwiZ29Ub1ByZXZpb3VzIiwiZ29Ub05leHQiLCJpZCIsIm5hbWUiLCJpbWFnZSIsImRpZmZpY3VsdHkiLCJkZXNjcmlwdGlvbiIsInN0ZXBzIiwidGlwcyJdLCJzb3VyY2VSb290IjoiIn0=