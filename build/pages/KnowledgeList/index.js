(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\babel-loader\\lib\\index.js?cwd=b:\\quickApp\\yoga&cacheDirectory&plugins[]=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/KnowledgeList/index.ux?uxType=page":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\babel-loader\lib\index.js?cwd=b:\quickApp\yoga&cacheDirectory&plugins[]=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/pages/KnowledgeList/index.ux?uxType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _system = _interopRequireDefault($app_require$("@app-module/system.router"));
var _knowledge = _interopRequireDefault(__webpack_require__(/*! ../../data/knowledge.js */ "./src/data/knowledge.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  data: {
    knowledgeList: []
  },
  onInit() {},
  onShow() {
    this.knowledgeList = _knowledge.default;
  },
  goToDetail(id) {
    if (id) {
      _system.default.push({
        uri: '/pages/KnowledgeList/KnowledgeDetail',
        params: {
          id: String(id)
        }
      });
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

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/KnowledgeList/index.ux?uxType=page":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\less-loader\dist\cjs.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/pages/KnowledgeList/index.ux?uxType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  ".knowledge-list": {
    "width": "100%",
    "flex": 1
  },
  ".knowledge-item": {
    "width": "100%",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px"
  },
  ".knowledge-card": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "width": "100%",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "16px",
    "paddingTop": "30px",
    "paddingRight": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "30px",
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
  ".knowledge-header": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-start",
    "width": "100%",
    "marginBottom": "16px"
  },
  ".knowledge-title": {
    "fontSize": "32px",
    "fontWeight": "bold",
    "color": "#3A2E28",
    "flex": 1,
    "marginRight": "16px"
  },
  ".knowledge-date": {
    "fontSize": "22px",
    "color": "#8A6F63",
    "flexShrink": 0
  },
  ".knowledge-summary": {
    "fontSize": "26px",
    "color": "#8A6F63",
    "marginBottom": "20px",
    "lines": 3,
    "textOverflow": "ellipsis"
  },
  ".knowledge-footer": {
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "alignItems": "center",
    "width": "100%"
  },
  ".read-more": {
    "fontSize": "24px",
    "color": "#E6A87C"
  }
}

/***/ }),

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/KnowledgeList/index.ux?uxType=page&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/pages/KnowledgeList/index.ux?uxType=page& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
          "type": "list",
          "attr": {},
          "classList": [
            "knowledge-list"
          ],
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "knowledge"
              },
              "repeat": {
                "exp": function () {return this.knowledgeList},
                "key": "index",
                "value": "item"
              },
              "classList": [
                "knowledge-item"
              ],
              "events": {
                "click": function (evt) { return this.goToDetail(this.item.id,evt)}
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "knowledge-card"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "knowledge-header"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.item.title}
                          },
                          "classList": [
                            "knowledge-title"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.item.publishDate}
                          },
                          "classList": [
                            "knowledge-date"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.item.summary}
                      },
                      "classList": [
                        "knowledge-summary"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "knowledge-footer"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "阅读更多 →"
                          },
                          "classList": [
                            "read-more"
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
    }
  ]
}

/***/ }),

/***/ "./src/data/knowledge.js":
/*!*******************************!*\
  !*** ./src/data/knowledge.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/**
 * 瑜伽小知识数据
 */
var _default = exports["default"] = [{
  id: 1,
  title: '瑜伽的起源与发展',
  summary: '瑜伽起源于古印度，已有5000多年的历史。它不仅是身体练习，更是一种生活方式和哲学体系。',
  content: `瑜伽（Yoga）一词来自梵语，意为"结合"或"统一"，指的是身体、心灵和精神的统一。

瑜伽起源于古印度，已有5000多年的历史。最早的瑜伽文献可以追溯到《吠陀经》和《奥义书》。瑜伽最初是作为一种精神修行方法出现的，旨在帮助修行者达到更高的意识状态。

随着时间的推移，瑜伽逐渐发展成为一套完整的体系，包括：
- 体式练习（Asana）
- 呼吸控制（Pranayama）
- 冥想（Meditation）
- 道德准则（Yama和Niyama）

现代瑜伽在20世纪传入西方后，逐渐演变成以身体练习为主的健身方式，但传统的瑜伽哲学和精神层面仍然被许多练习者所重视。

无论你练习瑜伽的目的是什么——改善身体健康、减轻压力、提高灵活性，还是寻求精神成长——瑜伽都能为你提供一条通往身心平衡的道路。`,
  publishDate: '2025-01-15'
}, {
  id: 2,
  title: '瑜伽练习的最佳时间',
  summary: '了解何时练习瑜伽能够获得最佳效果，以及如何根据自己的生活节奏安排练习时间。',
  content: `很多人问：什么时候练习瑜伽最好？其实，答案因人而异，但有一些通用的建议可以帮助你找到最适合自己的练习时间。

**早晨练习（6:00-9:00）**
早晨是练习瑜伽的黄金时间。此时身体经过一夜的休息，比较僵硬，适合进行温和的拉伸和激活练习。早晨练习可以帮助：
- 唤醒身体和心灵
- 提高一天的专注力
- 建立规律的练习习惯

**中午练习（12:00-14:00）**
中午练习适合那些工作繁忙的人。短暂的午间练习可以：
- 缓解工作压力
- 恢复精力
- 改善下午的工作状态

**傍晚练习（17:00-20:00）**
傍晚是身体最灵活的时候，适合进行更具挑战性的练习。此时练习可以：
- 释放一天的压力
- 缓解肌肉紧张
- 为晚上的休息做准备

**重要提示：**
- 避免在饱餐后立即练习，至少等待2-3小时
- 空腹练习效果更好，但不要过度饥饿
- 找到适合自己的时间，并坚持下去，比追求"最佳时间"更重要

记住，最好的练习时间是你能够坚持的时间！`,
  publishDate: '2025-01-20'
}, {
  id: 3,
  title: '瑜伽呼吸法：腹式呼吸',
  summary: '学习正确的腹式呼吸方法，这是所有瑜伽练习的基础，能够帮助你更好地放松和集中注意力。',
  content: `呼吸是瑜伽练习的核心。正确的呼吸不仅能够为身体提供氧气，还能帮助调节神经系统，带来平静和专注。

**什么是腹式呼吸？**

腹式呼吸（也称为横膈膜呼吸）是一种深层的呼吸方式，通过扩张和收缩腹部来进行呼吸，而不是仅仅使用胸部。

**如何练习腹式呼吸：**

1. **准备姿势**
   - 平躺或舒适地坐着
   - 一只手放在胸部，另一只手放在腹部

2. **吸气**
   - 通过鼻子缓慢吸气
   - 感受腹部向上隆起
   - 胸部保持相对静止

3. **呼气**
   - 通过鼻子或嘴巴缓慢呼气
   - 感受腹部向内收缩
   - 尽量将气完全呼出

4. **节奏**
   - 吸气4秒，呼气4秒
   - 逐渐延长到吸气6秒，呼气6秒
   - 保持呼吸平稳、均匀

**腹式呼吸的好处：**

- 降低压力和焦虑
- 改善睡眠质量
- 增强肺活量
- 激活副交感神经系统（放松反应）
- 提高专注力

**练习建议：**

每天练习5-10分钟，可以在早晨起床后或晚上睡觉前进行。随着练习的深入，你会发现自己能够更自然地使用腹式呼吸，甚至在日常生活中也能保持这种呼吸方式。

记住，呼吸是连接身体和心灵的桥梁，通过有意识的呼吸，我们可以更好地掌控自己的身心状态。`,
  publishDate: '2025-02-01'
}, {
  id: 4,
  title: '瑜伽练习的常见误区',
  summary: '了解瑜伽练习中常见的错误观念，帮助你更安全、更有效地练习瑜伽。',
  content: `在瑜伽练习中，有一些常见的误区可能会阻碍你的进步，甚至导致受伤。了解这些误区，可以帮助你更安全、更有效地练习。

**误区一：必须做到完美体式**

很多人认为，只有做到像老师或图片中那样完美的体式才算成功。实际上：
- 每个人的身体条件不同，体式的外观也会不同
- 重要的是感受体式带来的效果，而不是外观
- 尊重自己的身体限制，不要强迫

**误区二：越痛越好**

"没有痛苦就没有收获"的观念在瑜伽中并不适用：
- 轻微的拉伸感是正常的
- 尖锐的疼痛是警告信号，应该立即停止
- 瑜伽应该是舒适和稳定的

**误区三：必须每天练习很长时间**

练习的质量比数量更重要：
- 每天15-30分钟的规律练习，比偶尔一次2小时的练习更有效
- 休息也是练习的一部分
- 找到适合自己的练习频率

**误区四：只关注体式，忽略呼吸**

呼吸是瑜伽的灵魂：
- 体式应该配合呼吸进行
- 如果呼吸急促或无法呼吸，说明体式强度过大
- 有意识的呼吸能够增强练习效果

**误区五：比较和竞争**

瑜伽不是竞技运动：
- 不要与他人比较
- 专注于自己的进步
- 每个人的瑜伽之旅都是独特的

**误区六：忽视热身和放松**

热身和放松同样重要：
- 充分的热身可以预防受伤
- 最后的放松体式（如摊尸式）帮助身体恢复
- 不要跳过这些重要环节

记住，瑜伽是一个旅程，不是目的地。保持耐心，尊重自己的身体，享受练习的过程。`,
  publishDate: '2025-02-10'
}, {
  id: 5,
  title: '瑜伽与心理健康',
  summary: '探索瑜伽如何改善心理健康，减轻压力、焦虑和抑郁，提升整体幸福感。',
  content: `瑜伽不仅能够改善身体健康，对心理健康也有着深远的影响。越来越多的科学研究证实，瑜伽练习能够有效改善各种心理问题。

**瑜伽如何影响心理健康？**

1. **降低压力水平**
   - 瑜伽练习能够激活副交感神经系统
   - 降低压力激素（如皮质醇）的水平
   - 促进身体的放松反应

2. **缓解焦虑**
   - 通过呼吸练习和冥想，帮助平静心灵
   - 提高对焦虑情绪的觉察和管理能力
   - 改善睡眠质量，减少焦虑循环

3. **改善情绪**
   - 瑜伽练习能够促进内啡肽的释放（"快乐激素"）
   - 提高血清素水平，改善情绪
   - 增强自我意识和自我接纳

4. **提高专注力**
   - 冥想和专注练习训练大脑的注意力
   - 改善工作记忆和执行功能
   - 减少思维散乱

**适合心理健康的瑜伽练习：**

- **温和的体式**：如儿童式、摊尸式、简单的扭转
- **呼吸练习**：腹式呼吸、交替鼻孔呼吸
- **冥想**：正念冥想、身体扫描
- **恢复性瑜伽**：使用辅助工具，长时间保持放松体式

**科学研究支持：**

多项研究显示，定期练习瑜伽的人：
- 焦虑和抑郁症状显著减少
- 压力应对能力提高
- 整体生活满意度提升
- 睡眠质量改善

**如何开始：**

如果你希望通过瑜伽改善心理健康：
1. 从温和的练习开始，不要过度挑战
2. 结合呼吸练习和冥想
3. 保持规律的练习习惯
4. 如果情况严重，建议结合专业心理治疗

记住，瑜伽是一个工具，帮助你更好地了解和管理自己的心理状态。给自己时间和耐心，让瑜伽成为你心理健康之旅的一部分。`,
  publishDate: '2025-02-20'
}, {
  id: 6,
  title: '瑜伽装备选择指南',
  summary: '了解如何选择合适的瑜伽垫、服装和其他装备，让你的练习更加舒适和安全。',
  content: `选择合适的瑜伽装备可以让你的练习更加舒适、安全和有效。虽然瑜伽不需要太多装备，但几件基本物品还是很有必要的。

**瑜伽垫（最重要）**

瑜伽垫是瑜伽练习中最基本的装备：

- **厚度**：初学者建议选择6-8mm的厚度，提供更好的缓冲；有经验的练习者可以选择3-5mm
- **材质**：
  - TPE材质：环保、防滑、轻便
  - PVC材质：价格便宜，但可能不够环保
  - 天然橡胶：防滑性好，但较重
- **防滑性**：选择表面有纹理的垫子，防止练习时滑动
- **尺寸**：标准尺寸约为180cm x 60cm，确保足够空间

**瑜伽服装**

选择舒适、透气的服装：

- **上衣**：选择贴身但不紧绷的款式，避免在倒立体式中滑落
- **裤子**：弹性好、不限制动作的瑜伽裤或运动裤
- **材质**：选择吸汗、快干的面料
- **颜色**：选择让你感觉舒适的颜色

**其他辅助装备（可选）**

- **瑜伽砖**：帮助调整体式，适合初学者和身体柔韧性不够的人
- **瑜伽带**：帮助拉伸，加深体式的感受
- **瑜伽毯**：用于支撑和保暖，在恢复性瑜伽中很有用
- **瑜伽球**：增加练习的趣味性和挑战性

**选择建议：**

1. **初学者**：一张好的瑜伽垫就足够了，其他装备可以随着练习深入再添置
2. **预算有限**：优先投资一张质量好的瑜伽垫
3. **在家练习**：确保有足够的空间，地面平整
4. **清洁保养**：定期清洁瑜伽垫，保持卫生

**购买渠道：**

- 实体店：可以亲自体验，感受材质和厚度
- 在线购买：选择知名品牌，查看用户评价

记住，最好的装备是那些能够支持你持续练习的装备。不要被昂贵的装备所迷惑，重要的是开始练习并坚持下去。`,
  publishDate: '2025-03-01'
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
/*!******************************************************!*\
  !*** ./src/pages/KnowledgeList/index.ux?uxType=page ***!
  \******************************************************/

var $app_script$ = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\babel-loader\lib\index.js?cwd=b:\quickApp\yoga&cacheDirectory&plugins[]=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\babel-loader\\lib\\index.js?cwd=b:\\quickApp\\yoga&cacheDirectory&plugins[]=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/KnowledgeList/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/KnowledgeList/index.ux?uxType=page&")
    $app_module$.exports.style = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\less-loader\dist\cjs.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/KnowledgeList/index.ux?uxType=page")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3JCQSxtQkFBbUIsbUJBQU8sQ0FBQyxpOEVBQXl3QztBQUNweUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLHF4QkFBNFk7QUFDeGIsaUNBQWlDLG1CQUFPLENBQUMsK2pDQUF3aUI7QUFDamxCLENBQUM7QUFDRCx5Q0FBeUMsaUJBQWlCLE9BQXdCLEVBQUUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3lvZ2EtbGlnaHQvQzpcXFVzZXJzXFxkaWRpdTIzM1xcQXBwRGF0YVxcTG9jYWxcXFByb2dyYW1zXFxRdWljayBBcHAgSURFXFxiOlxccXVpY2tBcHBcXHlvZ2FcXHNyY1xccGFnZXNcXEtub3dsZWRnZUxpc3RcXGluZGV4LnV4PzkxNTciLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9wYWdlcy9Lbm93bGVkZ2VMaXN0L2luZGV4LnV4P2E4YjgiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9wYWdlcy9Lbm93bGVkZ2VMaXN0L2luZGV4LnV4PzMzODIiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9kYXRhL2tub3dsZWRnZS5qcz8wYzQ5Iiwid2VicGFjazovL3lvZ2EtbGlnaHQvd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL3BhZ2VzL0tub3dsZWRnZUxpc3QvaW5kZXgudXg/NmFiZCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInBhZ2Utd3JhcFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgIDxsaXN0IGNsYXNzPVwia25vd2xlZGdlLWxpc3RcIj5cclxuICAgICAgPGxpc3QtaXRlbVxyXG4gICAgICAgIHR5cGU9XCJrbm93bGVkZ2VcIlxyXG4gICAgICAgIGZvcj1cInt7KGluZGV4LCBpdGVtKSBpbiBrbm93bGVkZ2VMaXN0fX1cIlxyXG4gICAgICAgIGNsYXNzPVwia25vd2xlZGdlLWl0ZW1cIlxyXG4gICAgICAgIG9uY2xpY2s9XCJnb1RvRGV0YWlsKGl0ZW0uaWQpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJrbm93bGVkZ2UtY2FyZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImtub3dsZWRnZS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJrbm93bGVkZ2UtdGl0bGVcIj57e2l0ZW0udGl0bGV9fTwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJrbm93bGVkZ2UtZGF0ZVwiPnt7aXRlbS5wdWJsaXNoRGF0ZX19PC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImtub3dsZWRnZS1zdW1tYXJ5XCI+e3tpdGVtLnN1bW1hcnl9fTwvdGV4dD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJrbm93bGVkZ2UtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicmVhZC1tb3JlXCI+6ZiF6K+75pu05aSaIOKGkjwvdGV4dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpc3QtaXRlbT5cclxuICAgIDwvbGlzdD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcidcclxuaW1wb3J0IGtub3dsZWRnZURhdGEgZnJvbSAnLi4vLi4vZGF0YS9rbm93bGVkZ2UuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YToge1xyXG4gICAga25vd2xlZGdlTGlzdDogW11cclxuICB9LFxyXG4gIG9uSW5pdCgpIHtcclxuICAgIC8vIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoeyB0ZXh0OiAn55Gc5Ly95bCP55+l6K+GJyB9KVxyXG4gIH0sXHJcbiAgb25TaG93KCl7XHJcbiAgICAgdGhpcy5rbm93bGVkZ2VMaXN0ID0ga25vd2xlZGdlRGF0YVxyXG4gIH0sXHJcbiAgZ29Ub0RldGFpbChpZCkge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICB1cmk6ICcvcGFnZXMvS25vd2xlZGdlTGlzdC9Lbm93bGVkZ2VEZXRhaWwnLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgaWQ6IFN0cmluZyhpZClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XHJcbkBpbXBvcnQgJy4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZS5sZXNzJztcclxuXHJcbi5wYWdlLXdyYXAge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmctbWFpbjtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGZsZXg6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJnLW1haW47XHJcbiAgbWluLWhlaWdodDogMDtcclxufVxyXG5cclxuLmtub3dsZWRnZS1saXN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4ua25vd2xlZGdlLWl0ZW0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4ua25vd2xlZGdlLWNhcmQge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IEB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNiAqIEBzaXplLWZhY3RvcjtcclxuICBwYWRkaW5nOiAzMCAqIEBzaXplLWZhY3RvcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyLWNvbG9yO1xyXG59XHJcblxyXG4ua25vd2xlZGdlLWhlYWRlciB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTYgKiBAc2l6ZS1mYWN0b3I7XHJcbn1cclxuXHJcbi5rbm93bGVkZ2UtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogQGJsYWNrO1xyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNiAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLmtub3dsZWRnZS1kYXRlIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6IEBncmV5O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4ua25vd2xlZGdlLXN1bW1hcnkge1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBjb2xvcjogQGdyZXk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjAgKiBAc2l6ZS1mYWN0b3I7XHJcbiAgbGluZXM6IDM7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5rbm93bGVkZ2UtZm9vdGVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlYWQtbW9yZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiBAYnJhbmQ7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnBhZ2Utd3JhcFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGN0YxXCJcbiAgfSxcbiAgXCIud3JhcHBlclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGN0YxXCIsXG4gICAgXCJtaW5IZWlnaHRcIjogXCIwcHhcIlxuICB9LFxuICBcIi5rbm93bGVkZ2UtbGlzdFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcIi5rbm93bGVkZ2UtaXRlbVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHB4XCJcbiAgfSxcbiAgXCIua25vd2xlZGdlLWNhcmRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxNnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI0YwRTJEOFwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNGMEUyRDhcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI0YwRTJEOFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI0YwRTJEOFwiXG4gIH0sXG4gIFwiLmtub3dsZWRnZS1oZWFkZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNnB4XCJcbiAgfSxcbiAgXCIua25vd2xlZGdlLXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzJweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIixcbiAgICBcImNvbG9yXCI6IFwiIzNBMkUyOFwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxNnB4XCJcbiAgfSxcbiAgXCIua25vd2xlZGdlLWRhdGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyMnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4QTZGNjNcIixcbiAgICBcImZsZXhTaHJpbmtcIjogMFxuICB9LFxuICBcIi5rbm93bGVkZ2Utc3VtbWFyeVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI2cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhBNkY2M1wiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBweFwiLFxuICAgIFwibGluZXNcIjogMyxcbiAgICBcInRleHRPdmVyZmxvd1wiOiBcImVsbGlwc2lzXCJcbiAgfSxcbiAgXCIua25vd2xlZGdlLWZvb3RlclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtZW5kXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICB9LFxuICBcIi5yZWFkLW1vcmVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNFNkE4N0NcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcInBhZ2Utd3JhcFwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIndyYXBwZXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImtub3dsZWRnZS1saXN0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaXN0LWl0ZW1cIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJrbm93bGVkZ2VcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInJlcGVhdFwiOiB7XG4gICAgICAgICAgICAgICAgXCJleHBcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmtub3dsZWRnZUxpc3R9LFxuICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImtub3dsZWRnZS1pdGVtXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gdGhpcy5nb1RvRGV0YWlsKHRoaXMuaXRlbS5pZCxldnQpfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJrbm93bGVkZ2UtY2FyZFwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJrbm93bGVkZ2UtaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia25vd2xlZGdlLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0ucHVibGlzaERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtub3dsZWRnZS1kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbS5zdW1tYXJ5fVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJrbm93bGVkZ2Utc3VtbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia25vd2xlZGdlLWZvb3RlclwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLpmIXor7vmm7TlpJog4oaSXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVhZC1tb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIi8qKlxyXG4gKiDnkZzkvL3lsI/nn6Xor4bmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiAn55Gc5Ly955qE6LW35rqQ5LiO5Y+R5bGVJyxcclxuICAgIHN1bW1hcnk6XHJcbiAgICAgICfnkZzkvL3otbfmupDkuo7lj6TljbDluqbvvIzlt7LmnIk1MDAw5aSa5bm055qE5Y6G5Y+y44CC5a6D5LiN5LuF5piv6Lqr5L2T57uD5Lmg77yM5pu05piv5LiA56eN55Sf5rS75pa55byP5ZKM5ZOy5a2m5L2T57O744CCJyxcclxuICAgIGNvbnRlbnQ6IGDnkZzkvL3vvIhZb2dh77yJ5LiA6K+N5p2l6Ieq5qK16K+t77yM5oSP5Li6XCLnu5PlkIhcIuaIllwi57uf5LiAXCLvvIzmjIfnmoTmmK/ouqvkvZPjgIHlv4PngbXlkoznsr7npZ7nmoTnu5/kuIDjgIJcclxuXHJcbueRnOS8vei1t+a6kOS6juWPpOWNsOW6pu+8jOW3suaciTUwMDDlpJrlubTnmoTljoblj7LjgILmnIDml6nnmoTnkZzkvL3mlofnjK7lj6/ku6Xov73muq/liLDjgIrlkKDpmYDnu4/jgIvlkozjgIrlpaXkuYnkuabjgIvjgILnkZzkvL3mnIDliJ3mmK/kvZzkuLrkuIDnp43nsr7npZ7kv67ooYzmlrnms5Xlh7rnjrDnmoTvvIzml6jlnKjluK7liqnkv67ooYzogIXovr7liLDmm7Tpq5jnmoTmhI/or4bnirbmgIHjgIJcclxuXHJcbumaj+edgOaXtumXtOeahOaOqOenu++8jOeRnOS8vemAkOa4kOWPkeWxleaIkOS4uuS4gOWll+WujOaVtOeahOS9k+ezu++8jOWMheaLrO+8mlxyXG4tIOS9k+W8j+e7g+S5oO+8iEFzYW5h77yJXHJcbi0g5ZG85ZC45o6n5Yi277yIUHJhbmF5YW1h77yJXHJcbi0g5Yal5oOz77yITWVkaXRhdGlvbu+8iVxyXG4tIOmBk+W+t+WHhuWIme+8iFlhbWHlkoxOaXlhbWHvvIlcclxuXHJcbueOsOS7o+eRnOS8veWcqDIw5LiW57qq5Lyg5YWl6KW/5pa55ZCO77yM6YCQ5riQ5ryU5Y+Y5oiQ5Lul6Lqr5L2T57uD5Lmg5Li65Li755qE5YGl6Lqr5pa55byP77yM5L2G5Lyg57uf55qE55Gc5Ly95ZOy5a2m5ZKM57K+56We5bGC6Z2i5LuN54S26KKr6K645aSa57uD5Lmg6ICF5omA6YeN6KeG44CCXHJcblxyXG7ml6DorrrkvaDnu4PkuaDnkZzkvL3nmoTnm67nmoTmmK/ku4DkuYjigJTigJTmlLnlloTouqvkvZPlgaXlurfjgIHlh4/ovbvljovlipvjgIHmj5Dpq5jngbXmtLvmgKfvvIzov5jmmK/lr7vmsYLnsr7npZ7miJDplb/igJTigJTnkZzkvL3pg73og73kuLrkvaDmj5DkvpvkuIDmnaHpgJrlvoDouqvlv4PlubPooaHnmoTpgZPot6/jgIJgLFxyXG4gICAgcHVibGlzaERhdGU6ICcyMDI1LTAxLTE1J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogJ+eRnOS8vee7g+S5oOeahOacgOS9s+aXtumXtCcsXHJcbiAgICBzdW1tYXJ5OlxyXG4gICAgICAn5LqG6Kej5L2V5pe257uD5Lmg55Gc5Ly96IO95aSf6I635b6X5pyA5L2z5pWI5p6c77yM5Lul5Y+K5aaC5L2V5qC55o2u6Ieq5bex55qE55Sf5rS76IqC5aWP5a6J5o6S57uD5Lmg5pe26Ze044CCJyxcclxuICAgIGNvbnRlbnQ6IGDlvojlpJrkurrpl67vvJrku4DkuYjml7blgJnnu4PkuaDnkZzkvL3mnIDlpb3vvJ/lhbblrp7vvIznrZTmoYjlm6DkurrogIzlvILvvIzkvYbmnInkuIDkupvpgJrnlKjnmoTlu7rorq7lj6/ku6XluK7liqnkvaDmib7liLDmnIDpgILlkIjoh6rlt7HnmoTnu4PkuaDml7bpl7TjgIJcclxuXHJcbioq5pep5pmo57uD5Lmg77yINjowMC05OjAw77yJKipcclxu5pep5pmo5piv57uD5Lmg55Gc5Ly955qE6buE6YeR5pe26Ze044CC5q2k5pe26Lqr5L2T57uP6L+H5LiA5aSc55qE5LyR5oGv77yM5q+U6L6D5YO156Gs77yM6YCC5ZCI6L+b6KGM5rip5ZKM55qE5ouJ5Ly45ZKM5r+A5rS757uD5Lmg44CC5pep5pmo57uD5Lmg5Y+v5Lul5biu5Yqp77yaXHJcbi0g5ZSk6YaS6Lqr5L2T5ZKM5b+D54G1XHJcbi0g5o+Q6auY5LiA5aSp55qE5LiT5rOo5YqbXHJcbi0g5bu656uL6KeE5b6L55qE57uD5Lmg5Lmg5oOvXHJcblxyXG4qKuS4reWNiOe7g+S5oO+8iDEyOjAwLTE0OjAw77yJKipcclxu5Lit5Y2I57uD5Lmg6YCC5ZCI6YKj5Lqb5bel5L2c57mB5b+Z55qE5Lq644CC55+t5pqC55qE5Y2I6Ze057uD5Lmg5Y+v5Lul77yaXHJcbi0g57yT6Kej5bel5L2c5Y6L5YqbXHJcbi0g5oGi5aSN57K+5YqbXHJcbi0g5pS55ZaE5LiL5Y2I55qE5bel5L2c54q25oCBXHJcblxyXG4qKuWCjeaZmue7g+S5oO+8iDE3OjAwLTIwOjAw77yJKipcclxu5YKN5pma5piv6Lqr5L2T5pyA54G15rS755qE5pe25YCZ77yM6YCC5ZCI6L+b6KGM5pu05YW35oyR5oiY5oCn55qE57uD5Lmg44CC5q2k5pe257uD5Lmg5Y+v5Lul77yaXHJcbi0g6YeK5pS+5LiA5aSp55qE5Y6L5YqbXHJcbi0g57yT6Kej6IKM6IKJ57Sn5bygXHJcbi0g5Li65pma5LiK55qE5LyR5oGv5YGa5YeG5aSHXHJcblxyXG4qKumHjeimgeaPkOekuu+8mioqXHJcbi0g6YG/5YWN5Zyo6aWx6aSQ5ZCO56uL5Y2z57uD5Lmg77yM6Iez5bCR562J5b6FMi0z5bCP5pe2XHJcbi0g56m66IW557uD5Lmg5pWI5p6c5pu05aW977yM5L2G5LiN6KaB6L+H5bqm6aWl6aW/XHJcbi0g5om+5Yiw6YCC5ZCI6Ieq5bex55qE5pe26Ze077yM5bm25Z2a5oyB5LiL5Y6777yM5q+U6L+95rGCXCLmnIDkvbPml7bpl7RcIuabtOmHjeimgVxyXG5cclxu6K6w5L2P77yM5pyA5aW955qE57uD5Lmg5pe26Ze05piv5L2g6IO95aSf5Z2a5oyB55qE5pe26Ze077yBYCxcclxuICAgIHB1Ymxpc2hEYXRlOiAnMjAyNS0wMS0yMCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6ICfnkZzkvL3lkbzlkLjms5XvvJrohbnlvI/lkbzlkLgnLFxyXG4gICAgc3VtbWFyeTpcclxuICAgICAgJ+WtpuS5oOato+ehrueahOiFueW8j+WRvOWQuOaWueazle+8jOi/meaYr+aJgOacieeRnOS8vee7g+S5oOeahOWfuuehgO+8jOiDveWkn+W4ruWKqeS9oOabtOWlveWcsOaUvuadvuWSjOmbhuS4reazqOaEj+WKm+OAgicsXHJcbiAgICBjb250ZW50OiBg5ZG85ZC45piv55Gc5Ly957uD5Lmg55qE5qC45b+D44CC5q2j56Gu55qE5ZG85ZC45LiN5LuF6IO95aSf5Li66Lqr5L2T5o+Q5L6b5rCn5rCU77yM6L+Y6IO95biu5Yqp6LCD6IqC56We57uP57O757uf77yM5bim5p2l5bmz6Z2Z5ZKM5LiT5rOo44CCXHJcblxyXG4qKuS7gOS5iOaYr+iFueW8j+WRvOWQuO+8nyoqXHJcblxyXG7ohbnlvI/lkbzlkLjvvIjkuZ/np7DkuLrmqKrohojohpzlkbzlkLjvvInmmK/kuIDnp43mt7HlsYLnmoTlkbzlkLjmlrnlvI/vvIzpgJrov4fmianlvKDlkozmlLbnvKnohbnpg6jmnaXov5vooYzlkbzlkLjvvIzogIzkuI3mmK/ku4Xku4Xkvb/nlKjog7jpg6jjgIJcclxuXHJcbioq5aaC5L2V57uD5Lmg6IW55byP5ZG85ZC477yaKipcclxuXHJcbjEuICoq5YeG5aSH5ae/5Yq/KipcclxuICAgLSDlubPourrmiJboiJLpgILlnLDlnZDnnYBcclxuICAgLSDkuIDlj6rmiYvmlL7lnKjog7jpg6jvvIzlj6bkuIDlj6rmiYvmlL7lnKjohbnpg6hcclxuXHJcbjIuICoq5ZC45rCUKipcclxuICAgLSDpgJrov4fpvLvlrZDnvJPmhaLlkLjmsJRcclxuICAgLSDmhJ/lj5fohbnpg6jlkJHkuIrpmobotbdcclxuICAgLSDog7jpg6jkv53mjIHnm7jlr7npnZnmraJcclxuXHJcbjMuICoq5ZG85rCUKipcclxuICAgLSDpgJrov4fpvLvlrZDmiJblmLTlt7TnvJPmhaLlkbzmsJRcclxuICAgLSDmhJ/lj5fohbnpg6jlkJHlhoXmlLbnvKlcclxuICAgLSDlsL3ph4/lsIbmsJTlrozlhajlkbzlh7pcclxuXHJcbjQuICoq6IqC5aWPKipcclxuICAgLSDlkLjmsJQ056eS77yM5ZG85rCUNOenklxyXG4gICAtIOmAkOa4kOW7tumVv+WIsOWQuOawlDbnp5LvvIzlkbzmsJQ256eSXHJcbiAgIC0g5L+d5oyB5ZG85ZC45bmz56iz44CB5Z2H5YyAXHJcblxyXG4qKuiFueW8j+WRvOWQuOeahOWlveWkhO+8mioqXHJcblxyXG4tIOmZjeS9juWOi+WKm+WSjOeEpuiZkVxyXG4tIOaUueWWhOedoeecoOi0qOmHj1xyXG4tIOWinuW8uuiCuua0u+mHj1xyXG4tIOa/gOa0u+WJr+S6pOaEn+elnue7j+ezu+e7n++8iOaUvuadvuWPjeW6lO+8iVxyXG4tIOaPkOmrmOS4k+azqOWKm1xyXG5cclxuKirnu4PkuaDlu7rorq7vvJoqKlxyXG5cclxu5q+P5aSp57uD5LmgNS0xMOWIhumSn++8jOWPr+S7peWcqOaXqeaZqOi1t+W6iuWQjuaIluaZmuS4iuedoeinieWJjei/m+ihjOOAgumaj+edgOe7g+S5oOeahOa3seWFpe+8jOS9oOS8muWPkeeOsOiHquW3seiDveWkn+abtOiHqueEtuWcsOS9v+eUqOiFueW8j+WRvOWQuO+8jOeUmuiHs+WcqOaXpeW4uOeUn+a0u+S4reS5n+iDveS/neaMgei/meenjeWRvOWQuOaWueW8j+OAglxyXG5cclxu6K6w5L2P77yM5ZG85ZC45piv6L+e5o6l6Lqr5L2T5ZKM5b+D54G155qE5qGl5qKB77yM6YCa6L+H5pyJ5oSP6K+G55qE5ZG85ZC477yM5oiR5Lus5Y+v5Lul5pu05aW95Zyw5o6M5o6n6Ieq5bex55qE6Lqr5b+D54q25oCB44CCYCxcclxuICAgIHB1Ymxpc2hEYXRlOiAnMjAyNS0wMi0wMSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgdGl0bGU6ICfnkZzkvL3nu4PkuaDnmoTluLjop4Hor6/ljLonLFxyXG4gICAgc3VtbWFyeTpcclxuICAgICAgJ+S6huino+eRnOS8vee7g+S5oOS4reW4uOingeeahOmUmeivr+inguW/te+8jOW4ruWKqeS9oOabtOWuieWFqOOAgeabtOacieaViOWcsOe7g+S5oOeRnOS8veOAgicsXHJcbiAgICBjb250ZW50OiBg5Zyo55Gc5Ly957uD5Lmg5Lit77yM5pyJ5LiA5Lqb5bi46KeB55qE6K+v5Yy65Y+v6IO95Lya6Zi756KN5L2g55qE6L+b5q2l77yM55Sa6Iez5a+86Ie05Y+X5Lyk44CC5LqG6Kej6L+Z5Lqb6K+v5Yy677yM5Y+v5Lul5biu5Yqp5L2g5pu05a6J5YWo44CB5pu05pyJ5pWI5Zyw57uD5Lmg44CCXHJcblxyXG4qKuivr+WMuuS4gO+8muW/hemhu+WBmuWIsOWujOe+juS9k+W8jyoqXHJcblxyXG7lvojlpJrkurrorqTkuLrvvIzlj6rmnInlgZrliLDlg4/ogIHluIjmiJblm77niYfkuK3pgqPmoLflroznvo7nmoTkvZPlvI/miY3nrpfmiJDlip/jgILlrp7pmYXkuIrvvJpcclxuLSDmr4/kuKrkurrnmoTouqvkvZPmnaHku7bkuI3lkIzvvIzkvZPlvI/nmoTlpJbop4LkuZ/kvJrkuI3lkIxcclxuLSDph43opoHnmoTmmK/mhJ/lj5fkvZPlvI/luKbmnaXnmoTmlYjmnpzvvIzogIzkuI3mmK/lpJbop4JcclxuLSDlsIrph43oh6rlt7HnmoTouqvkvZPpmZDliLbvvIzkuI3opoHlvLrov6tcclxuXHJcbioq6K+v5Yy65LqM77ya6LaK55eb6LaK5aW9KipcclxuXHJcblwi5rKh5pyJ55eb6Ium5bCx5rKh5pyJ5pS26I63XCLnmoTop4Llv7XlnKjnkZzkvL3kuK3lubbkuI3pgILnlKjvvJpcclxuLSDovbvlvq7nmoTmi4nkvLjmhJ/mmK/mraPluLjnmoRcclxuLSDlsJbplJDnmoTnlrznl5vmmK/orablkYrkv6Hlj7fvvIzlupTor6Xnq4vljbPlgZzmraJcclxuLSDnkZzkvL3lupTor6XmmK/oiJLpgILlkoznqLPlrprnmoRcclxuXHJcbioq6K+v5Yy65LiJ77ya5b+F6aG75q+P5aSp57uD5Lmg5b6I6ZW/5pe26Ze0KipcclxuXHJcbue7g+S5oOeahOi0qOmHj+avlOaVsOmHj+abtOmHjeimge+8mlxyXG4tIOavj+WkqTE1LTMw5YiG6ZKf55qE6KeE5b6L57uD5Lmg77yM5q+U5YG25bCU5LiA5qyhMuWwj+aXtueahOe7g+S5oOabtOacieaViFxyXG4tIOS8keaBr+S5n+aYr+e7g+S5oOeahOS4gOmDqOWIhlxyXG4tIOaJvuWIsOmAguWQiOiHquW3seeahOe7g+S5oOmikeeOh1xyXG5cclxuKiror6/ljLrlm5vvvJrlj6rlhbPms6jkvZPlvI/vvIzlv73nlaXlkbzlkLgqKlxyXG5cclxu5ZG85ZC45piv55Gc5Ly955qE54G16a2C77yaXHJcbi0g5L2T5byP5bqU6K+l6YWN5ZCI5ZG85ZC46L+b6KGMXHJcbi0g5aaC5p6c5ZG85ZC45oCl5L+D5oiW5peg5rOV5ZG85ZC477yM6K+05piO5L2T5byP5by65bqm6L+H5aSnXHJcbi0g5pyJ5oSP6K+G55qE5ZG85ZC46IO95aSf5aKe5by657uD5Lmg5pWI5p6cXHJcblxyXG4qKuivr+WMuuS6lO+8muavlOi+g+WSjOernuS6iSoqXHJcblxyXG7nkZzkvL3kuI3mmK/nq57mioDov5DliqjvvJpcclxuLSDkuI3opoHkuI7ku5bkurrmr5TovoNcclxuLSDkuJPms6jkuo7oh6rlt7HnmoTov5vmraVcclxuLSDmr4/kuKrkurrnmoTnkZzkvL3kuYvml4Xpg73mmK/ni6znibnnmoRcclxuXHJcbioq6K+v5Yy65YWt77ya5b+96KeG54Ot6Lqr5ZKM5pS+5p2+KipcclxuXHJcbueDrei6q+WSjOaUvuadvuWQjOagt+mHjeimge+8mlxyXG4tIOWFheWIhueahOeDrei6q+WPr+S7pemihOmYsuWPl+S8pFxyXG4tIOacgOWQjueahOaUvuadvuS9k+W8j++8iOWmguaRiuWwuOW8j++8ieW4ruWKqei6q+S9k+aBouWkjVxyXG4tIOS4jeimgei3s+i/h+i/meS6m+mHjeimgeeOr+iKglxyXG5cclxu6K6w5L2P77yM55Gc5Ly95piv5LiA5Liq5peF56iL77yM5LiN5piv55uu55qE5Zyw44CC5L+d5oyB6ICQ5b+D77yM5bCK6YeN6Ieq5bex55qE6Lqr5L2T77yM5Lqr5Y+X57uD5Lmg55qE6L+H56iL44CCYCxcclxuICAgIHB1Ymxpc2hEYXRlOiAnMjAyNS0wMi0xMCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgdGl0bGU6ICfnkZzkvL3kuI7lv4PnkIblgaXlurcnLFxyXG4gICAgc3VtbWFyeTpcclxuICAgICAgJ+aOoue0oueRnOS8veWmguS9leaUueWWhOW/g+eQhuWBpeW6t++8jOWHj+i9u+WOi+WKm+OAgeeEpuiZkeWSjOaKkemDge+8jOaPkOWNh+aVtOS9k+W5uOemj+aEn+OAgicsXHJcbiAgICBjb250ZW50OiBg55Gc5Ly95LiN5LuF6IO95aSf5pS55ZaE6Lqr5L2T5YGl5bq377yM5a+55b+D55CG5YGl5bq35Lmf5pyJ552A5rex6L+c55qE5b2x5ZON44CC6LaK5p2l6LaK5aSa55qE56eR5a2m56CU56m26K+B5a6e77yM55Gc5Ly957uD5Lmg6IO95aSf5pyJ5pWI5pS55ZaE5ZCE56eN5b+D55CG6Zeu6aKY44CCXHJcblxyXG4qKueRnOS8veWmguS9leW9seWTjeW/g+eQhuWBpeW6t++8nyoqXHJcblxyXG4xLiAqKumZjeS9juWOi+WKm+awtOW5syoqXHJcbiAgIC0g55Gc5Ly957uD5Lmg6IO95aSf5r+A5rS75Ymv5Lqk5oSf56We57uP57O757ufXHJcbiAgIC0g6ZmN5L2O5Y6L5Yqb5r+A57Sg77yI5aaC55qu6LSo6YaH77yJ55qE5rC05bmzXHJcbiAgIC0g5L+D6L+b6Lqr5L2T55qE5pS+5p2+5Y+N5bqUXHJcblxyXG4yLiAqKue8k+ino+eEpuiZkSoqXHJcbiAgIC0g6YCa6L+H5ZG85ZC457uD5Lmg5ZKM5Yal5oOz77yM5biu5Yqp5bmz6Z2Z5b+D54G1XHJcbiAgIC0g5o+Q6auY5a+554Sm6JmR5oOF57uq55qE6KeJ5a+f5ZKM566h55CG6IO95YqbXHJcbiAgIC0g5pS55ZaE552h55yg6LSo6YeP77yM5YeP5bCR54Sm6JmR5b6q546vXHJcblxyXG4zLiAqKuaUueWWhOaDhee7qioqXHJcbiAgIC0g55Gc5Ly957uD5Lmg6IO95aSf5L+D6L+b5YaF5ZWh6IK955qE6YeK5pS+77yIXCLlv6vkuZDmv4DntKBcIu+8iVxyXG4gICAtIOaPkOmrmOihgOa4hee0oOawtOW5s++8jOaUueWWhOaDhee7qlxyXG4gICAtIOWinuW8uuiHquaIkeaEj+ivhuWSjOiHquaIkeaOpee6s1xyXG5cclxuNC4gKirmj5Dpq5jkuJPms6jlipsqKlxyXG4gICAtIOWGpeaDs+WSjOS4k+azqOe7g+S5oOiuree7g+Wkp+iEkeeahOazqOaEj+WKm1xyXG4gICAtIOaUueWWhOW3peS9nOiusOW/huWSjOaJp+ihjOWKn+iDvVxyXG4gICAtIOWHj+WwkeaAnee7tOaVo+S5sVxyXG5cclxuKirpgILlkIjlv4PnkIblgaXlurfnmoTnkZzkvL3nu4PkuaDvvJoqKlxyXG5cclxuLSAqKua4qeWSjOeahOS9k+W8jyoq77ya5aaC5YS/56ul5byP44CB5pGK5bC45byP44CB566A5Y2V55qE5omt6L2sXHJcbi0gKirlkbzlkLjnu4PkuaAqKu+8muiFueW8j+WRvOWQuOOAgeS6pOabv+m8u+WtlOWRvOWQuFxyXG4tICoq5Yal5oOzKirvvJrmraPlv7XlhqXmg7PjgIHouqvkvZPmiavmj49cclxuLSAqKuaBouWkjeaAp+eRnOS8vSoq77ya5L2/55So6L6F5Yqp5bel5YW377yM6ZW/5pe26Ze05L+d5oyB5pS+5p2+5L2T5byPXHJcblxyXG4qKuenkeWtpueglOeptuaUr+aMge+8mioqXHJcblxyXG7lpJrpobnnoJTnqbbmmL7npLrvvIzlrprmnJ/nu4PkuaDnkZzkvL3nmoTkurrvvJpcclxuLSDnhKbomZHlkozmipHpg4Hnl4fnirbmmL7okZflh4/lsJFcclxuLSDljovlipvlupTlr7nog73lipvmj5Dpq5hcclxuLSDmlbTkvZPnlJ/mtLvmu6HmhI/luqbmj5DljYdcclxuLSDnnaHnnKDotKjph4/mlLnlloRcclxuXHJcbioq5aaC5L2V5byA5aeL77yaKipcclxuXHJcbuWmguaenOS9oOW4jOacm+mAmui/h+eRnOS8veaUueWWhOW/g+eQhuWBpeW6t++8mlxyXG4xLiDku47muKnlkoznmoTnu4PkuaDlvIDlp4vvvIzkuI3opoHov4fluqbmjJHmiJhcclxuMi4g57uT5ZCI5ZG85ZC457uD5Lmg5ZKM5Yal5oOzXHJcbjMuIOS/neaMgeinhOW+i+eahOe7g+S5oOS5oOaDr1xyXG40LiDlpoLmnpzmg4XlhrXkuKXph43vvIzlu7rorq7nu5PlkIjkuJPkuJrlv4PnkIbmsrvnlpdcclxuXHJcbuiusOS9j++8jOeRnOS8veaYr+S4gOS4quW3peWFt++8jOW4ruWKqeS9oOabtOWlveWcsOS6huino+WSjOeuoeeQhuiHquW3seeahOW/g+eQhueKtuaAgeOAgue7meiHquW3seaXtumXtOWSjOiAkOW/g++8jOiuqeeRnOS8veaIkOS4uuS9oOW/g+eQhuWBpeW6t+S5i+aXheeahOS4gOmDqOWIhuOAgmAsXHJcbiAgICBwdWJsaXNoRGF0ZTogJzIwMjUtMDItMjAnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIHRpdGxlOiAn55Gc5Ly96KOF5aSH6YCJ5oup5oyH5Y2XJyxcclxuICAgIHN1bW1hcnk6XHJcbiAgICAgICfkuobop6PlpoLkvZXpgInmi6nlkIjpgILnmoTnkZzkvL3lnqvjgIHmnI3oo4Xlkozlhbbku5boo4XlpIfvvIzorqnkvaDnmoTnu4PkuaDmm7TliqDoiJLpgILlkozlronlhajjgIInLFxyXG4gICAgY29udGVudDogYOmAieaLqeWQiOmAgueahOeRnOS8veijheWkh+WPr+S7peiuqeS9oOeahOe7g+S5oOabtOWKoOiIkumAguOAgeWuieWFqOWSjOacieaViOOAguiZveeEtueRnOS8veS4jemcgOimgeWkquWkmuijheWkh++8jOS9huWHoOS7tuWfuuacrOeJqeWTgei/mOaYr+W+iOacieW/heimgeeahOOAglxyXG5cclxuKirnkZzkvL3lnqvvvIjmnIDph43opoHvvIkqKlxyXG5cclxu55Gc5Ly95Z6r5piv55Gc5Ly957uD5Lmg5Lit5pyA5Z+65pys55qE6KOF5aSH77yaXHJcblxyXG4tICoq5Y6a5bqmKirvvJrliJ3lrabogIXlu7rorq7pgInmi6k2LThtbeeahOWOmuW6pu+8jOaPkOS+m+abtOWlveeahOe8k+WGsu+8m+aciee7j+mqjOeahOe7g+S5oOiAheWPr+S7pemAieaLqTMtNW1tXHJcbi0gKirmnZDotKgqKu+8mlxyXG4gIC0gVFBF5p2Q6LSo77ya546v5L+d44CB6Ziy5ruR44CB6L275L6/XHJcbiAgLSBQVkPmnZDotKjvvJrku7fmoLzkvr/lrpzvvIzkvYblj6/og73kuI3lpJ/njq/kv51cclxuICAtIOWkqeeEtuapoeiDtu+8mumYsua7keaAp+Wlve+8jOS9hui+g+mHjVxyXG4tICoq6Ziy5ruR5oCnKirvvJrpgInmi6nooajpnaLmnInnurnnkIbnmoTlnqvlrZDvvIzpmLLmraLnu4PkuaDml7bmu5HliqhcclxuLSAqKuWwuuWvuCoq77ya5qCH5YeG5bC65a+457qm5Li6MTgwY20geCA2MGNt77yM56Gu5L+d6Laz5aSf56m66Ze0XHJcblxyXG4qKueRnOS8veacjeijhSoqXHJcblxyXG7pgInmi6noiJLpgILjgIHpgI/msJTnmoTmnI3oo4XvvJpcclxuXHJcbi0gKirkuIrooaMqKu+8mumAieaLqei0tOi6q+S9huS4jee0p+e7t+eahOasvuW8j++8jOmBv+WFjeWcqOWAkueri+S9k+W8j+S4rea7keiQvVxyXG4tICoq6KOk5a2QKirvvJrlvLnmgKflpb3jgIHkuI3pmZDliLbliqjkvZznmoTnkZzkvL3oo6TmiJbov5Dliqjoo6RcclxuLSAqKuadkOi0qCoq77ya6YCJ5oup5ZC45rGX44CB5b+r5bmy55qE6Z2i5paZXHJcbi0gKirpopzoibIqKu+8mumAieaLqeiuqeS9oOaEn+inieiIkumAgueahOminOiJslxyXG5cclxuKirlhbbku5bovoXliqnoo4XlpIfvvIjlj6/pgInvvIkqKlxyXG5cclxuLSAqKueRnOS8veeglioq77ya5biu5Yqp6LCD5pW05L2T5byP77yM6YCC5ZCI5Yid5a2m6ICF5ZKM6Lqr5L2T5p+U6Z+n5oCn5LiN5aSf55qE5Lq6XHJcbi0gKirnkZzkvL3luKYqKu+8muW4ruWKqeaLieS8uO+8jOWKoOa3seS9k+W8j+eahOaEn+WPl1xyXG4tICoq55Gc5Ly95q+vKirvvJrnlKjkuo7mlK/mkpHlkozkv53mmpbvvIzlnKjmgaLlpI3mgKfnkZzkvL3kuK3lvojmnInnlKhcclxuLSAqKueRnOS8veeQgyoq77ya5aKe5Yqg57uD5Lmg55qE6Laj5ZGz5oCn5ZKM5oyR5oiY5oCnXHJcblxyXG4qKumAieaLqeW7uuiuru+8mioqXHJcblxyXG4xLiAqKuWIneWtpuiAhSoq77ya5LiA5byg5aW955qE55Gc5Ly95Z6r5bCx6Laz5aSf5LqG77yM5YW25LuW6KOF5aSH5Y+v5Lul6ZqP552A57uD5Lmg5rex5YWl5YaN5re7572uXHJcbjIuICoq6aKE566X5pyJ6ZmQKirvvJrkvJjlhYjmipXotYTkuIDlvKDotKjph4/lpb3nmoTnkZzkvL3lnqtcclxuMy4gKirlnKjlrrbnu4PkuaAqKu+8muehruS/neaciei2s+Wkn+eahOepuumXtO+8jOWcsOmdouW5s+aVtFxyXG40LiAqKua4hea0geS/neWFuyoq77ya5a6a5pyf5riF5rSB55Gc5Ly95Z6r77yM5L+d5oyB5Y2r55SfXHJcblxyXG4qKui0reS5sOa4oOmBk++8mioqXHJcblxyXG4tIOWunuS9k+W6l++8muWPr+S7peS6suiHquS9k+mqjO+8jOaEn+WPl+adkOi0qOWSjOWOmuW6plxyXG4tIOWcqOe6v+i0reS5sO+8mumAieaLqeefpeWQjeWTgeeJjO+8jOafpeeci+eUqOaIt+ivhOS7t1xyXG5cclxu6K6w5L2P77yM5pyA5aW955qE6KOF5aSH5piv6YKj5Lqb6IO95aSf5pSv5oyB5L2g5oyB57ut57uD5Lmg55qE6KOF5aSH44CC5LiN6KaB6KKr5piC6LS155qE6KOF5aSH5omA6L+35oOR77yM6YeN6KaB55qE5piv5byA5aeL57uD5Lmg5bm25Z2a5oyB5LiL5Y6744CCYCxcclxuICAgIHB1Ymxpc2hEYXRlOiAnMjAyNS0wMy0wMSdcclxuICB9XHJcbl1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHNjcmlwdC1sb2FkZXIuanMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxwYWNrYWdlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxtb2R1bGUtbG9hZGVyLmpzIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzP2N3ZD1iOlxcXFxxdWlja0FwcFxcXFx5b2dhJmNhY2hlRGlyZWN0b3J5JnBsdWdpbnNbXT1jOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcYmFiZWwtcGx1Z2luLWpzeC5qcyZjb21tZW50cz1mYWxzZSZjb25maWdGaWxlPWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxccGFja2FnZXJcXFxcYmFiZWwuY29uZmlnLmpzIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxhY2Nlc3MtbG9hZGVyLmpzIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxmcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL2luZGV4LnV4P3V4VHlwZT1wYWdlXCIpXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2luZGV4JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCkge1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9IHJlcXVpcmUoXCIhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlLWxvYWRlci5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZSEuL2luZGV4LnV4P3V4VHlwZT1wYWdlJlwiKVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gcmVxdWlyZShcIiFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcbGVzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhLi9pbmRleC51eD91eFR5cGU9cGFnZVwiKVxufSk7XG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L2luZGV4Jyx7IHBhY2thZ2VyVmVyc2lvbjogUVVJQ0tBUFBfVE9PTEtJVF9WRVJTSU9OIH0pOyJdLCJuYW1lcyI6WyJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfa25vd2xlZGdlIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiZGF0YSIsImtub3dsZWRnZUxpc3QiLCJvbkluaXQiLCJvblNob3ciLCJrbm93bGVkZ2VEYXRhIiwiZ29Ub0RldGFpbCIsImlkIiwicm91dGVyIiwicHVzaCIsInVyaSIsInBhcmFtcyIsIlN0cmluZyIsInRpdGxlIiwic3VtbWFyeSIsImNvbnRlbnQiLCJwdWJsaXNoRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=