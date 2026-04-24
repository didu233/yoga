(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\babel-loader\\lib\\index.js?cwd=b:\\quickApp\\yoga&cacheDirectory&plugins[]=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/KnowledgeList/KnowledgeDetail/index.ux?uxType=page":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\babel-loader\lib\index.js?cwd=b:\quickApp\yoga&cacheDirectory&plugins[]=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/pages/KnowledgeList/KnowledgeDetail/index.ux?uxType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _knowledge = _interopRequireDefault(__webpack_require__(/*! ../../../data/knowledge.js */ "./src/data/knowledge.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  data: {
    id: '',
    title: '',
    summary: '',
    content: '',
    publishDate: '',
    contentLines: []
  },
  onInit(options) {
    this.$page.setTitleBar({
      text: '知识详情'
    });
    if (options && options.id) this.id = options.id;
    this.loadArticleData();
  },
  onShow(options) {
    if (options && options.id) {
      this.id = options.id;
      this.loadArticleData();
    }
  },
  loadArticleData() {
    const id = this.id;
    if (!id) return;
    try {
      const articleId = parseInt(id);
      if (isNaN(articleId)) return;
      const article = _knowledge.default.find(item => item.id === articleId);
      if (article) {
        this.id = String(articleId);
        this.title = article.title;
        this.summary = article.summary;
        this.content = article.content;
        this.publishDate = article.publishDate;
        this.contentLines = (article.content || '').split('\n');
        this.$page.setTitleBar({
          text: article.title
        });
      }
    } catch (error) {
      console.error('加载文章详情失败:', error);
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

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/KnowledgeList/KnowledgeDetail/index.ux?uxType=page":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\less-loader\dist\cjs.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/pages/KnowledgeList/KnowledgeDetail/index.ux?uxType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".wrapper": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "width": "100%",
    "backgroundColor": "#FFF7F1",
    "paddingBottom": "40px"
  },
  ".content-wrap": {
    "width": "100%",
    "flexDirection": "column",
    "flexShrink": 0
  },
  ".content": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "width": "100%",
    "paddingTop": "40px",
    "paddingRight": "40px",
    "paddingBottom": "40px",
    "paddingLeft": "40px",
    "backgroundColor": "#FFFFFF",
    "marginTop": "20px",
    "marginRight": "20px",
    "marginBottom": "20px",
    "marginLeft": "20px",
    "borderRadius": "16px",
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
  ".title": {
    "fontSize": "40px",
    "fontWeight": "bold",
    "color": "#3A2E28",
    "textAlign": "center",
    "width": "100%",
    "marginBottom": "20px"
  },
  ".update-date": {
    "fontSize": "24px",
    "color": "#8A6F63",
    "textAlign": "right",
    "width": "100%",
    "marginBottom": "30px"
  },
  ".content-text": {
    "fontSize": "28px",
    "color": "#3A2E28",
    "width": "100%",
    "marginBottom": "8px"
  }
}

/***/ }),

/***/ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/KnowledgeList/KnowledgeDetail/index.ux?uxType=page&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/pages/KnowledgeList/KnowledgeDetail/index.ux?uxType=page& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        "content-wrap"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "content"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.title}
              },
              "classList": [
                "title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.publishDate}
              },
              "classList": [
                "update-date"
              ]
            },
            {
              "type": "block",
              "attr": {},
              "repeat": {
                "exp": function () {return this.contentLines},
                "key": "idx",
                "value": "line"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.line||' '}
                  },
                  "classList": [
                    "content-text"
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
/*!**********************************************************************!*\
  !*** ./src/pages/KnowledgeList/KnowledgeDetail/index.ux?uxType=page ***!
  \**********************************************************************/

var $app_script$ = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\lib\loaders\module-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\babel-loader\lib\index.js?cwd=b:\quickApp\yoga&cacheDirectory&plugins[]=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\packager\babel.config.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\lib\\loaders\\module-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\babel-loader\\lib\\index.js?cwd=b:\\quickApp\\yoga&cacheDirectory&plugins[]=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/KnowledgeList/KnowledgeDetail/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/KnowledgeList/KnowledgeDetail/index.ux?uxType=page&")
    $app_module$.exports.style = __webpack_require__(/*! !c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\less-loader\dist\cjs.js!c:\Users\didiu233\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\less-loader\\dist\\cjs.js!c:\\Users\\didiu233\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/KnowledgeList/KnowledgeDetail/index.ux?uxType=page")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXEtub3dsZWRnZUxpc3RcXEtub3dsZWRnZURldGFpbFxcaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLElBQUFBLFVBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsbUJBQUE7QUFBQSxTQUFBRCx1QkFBQUUsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLEtBQUFFLE9BQUEsRUFBQUYsQ0FBQTtBQUFBLElBQUFHLFFBQUEsR0FBQUMsT0FBQSxDQUFBRixPQUFBLEdBRUE7RUFDQUcsSUFBQTtJQUNBQyxFQUFBO0lBQ0FDLEtBQUE7SUFDQUMsT0FBQTtJQUNBQyxPQUFBO0lBQ0FDLFdBQUE7SUFDQUMsWUFBQTtFQUNBO0VBQ0FDLE9BQUFDLE9BQUE7SUFDQSxLQUFBQyxLQUFBLENBQUFDLFdBQUE7TUFBQUMsSUFBQTtJQUFBO0lBQ0EsSUFBQUgsT0FBQSxJQUFBQSxPQUFBLENBQUFQLEVBQUEsT0FBQUEsRUFBQSxHQUFBTyxPQUFBLENBQUFQLEVBQUE7SUFDQSxLQUFBVyxlQUFBO0VBQ0E7RUFDQUMsT0FBQUwsT0FBQTtJQUNBLElBQUFBLE9BQUEsSUFBQUEsT0FBQSxDQUFBUCxFQUFBO01BQ0EsS0FBQUEsRUFBQSxHQUFBTyxPQUFBLENBQUFQLEVBQUE7TUFDQSxLQUFBVyxlQUFBO0lBQ0E7RUFDQTtFQUNBQSxnQkFBQTtJQUNBLE1BQUFYLEVBQUEsUUFBQUEsRUFBQTtJQUNBLEtBQUFBLEVBQUE7SUFDQTtNQUNBLE1BQUFhLFNBQUEsR0FBQUMsUUFBQSxDQUFBZCxFQUFBO01BQ0EsSUFBQWUsS0FBQSxDQUFBRixTQUFBO01BQ0EsTUFBQUcsT0FBQSxHQUFBQyxrQkFBQSxDQUFBQyxJQUFBLENBQUFDLElBQUEsSUFBQUEsSUFBQSxDQUFBbkIsRUFBQSxLQUFBYSxTQUFBO01BQ0EsSUFBQUcsT0FBQTtRQUNBLEtBQUFoQixFQUFBLEdBQUFvQixNQUFBLENBQUFQLFNBQUE7UUFDQSxLQUFB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LEVBQ0wsb0NBQW9DO0VBQ3RDQyxPQUFPLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0VBQy9DQyxXQUFXLEVBQUU7QUFDZixDQUFDLENBQ0YsQzs7Ozs7O1VDclFEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUNyQkEsbUJBQW1CLG1CQUFPLENBQUMsaTlFQUF5d0M7QUFDcHlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQyxxeUJBQTRZO0FBQ3hiLGlDQUFpQyxtQkFBTyxDQUFDLCtrQ0FBd2lCO0FBQ2psQixDQUFDO0FBQ0QseUNBQXlDLGlCQUFpQixPQUF3QixFQUFFLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b2dhLWxpZ2h0L0M6XFxVc2Vyc1xcZGlkaXUyMzNcXEFwcERhdGFcXExvY2FsXFxQcm9ncmFtc1xcUXVpY2sgQXBwIElERVxcYjpcXHF1aWNrQXBwXFx5b2dhXFxzcmNcXHBhZ2VzXFxLbm93bGVkZ2VMaXN0XFxLbm93bGVkZ2VEZXRhaWxcXGluZGV4LnV4P2NiN2QiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC8uL3NyYy9wYWdlcy9Lbm93bGVkZ2VMaXN0L0tub3dsZWRnZURldGFpbC9pbmRleC51eD9mMmZkIiwid2VicGFjazovL3lvZ2EtbGlnaHQvLi9zcmMvcGFnZXMvS25vd2xlZGdlTGlzdC9Lbm93bGVkZ2VEZXRhaWwvaW5kZXgudXg/MjA4YiIsIndlYnBhY2s6Ly95b2dhLWxpZ2h0Ly4vc3JjL2RhdGEva25vd2xlZGdlLmpzPzBjNDkiLCJ3ZWJwYWNrOi8veW9nYS1saWdodC93ZWJwYWNrL2Jvb3RzdHJhcD83ZjgwIiwid2VicGFjazovL3lvZ2EtbGlnaHQvLi9zcmMvcGFnZXMvS25vd2xlZGdlTGlzdC9Lbm93bGVkZ2VEZXRhaWwvaW5kZXgudXg/ZTNkNSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPCEtLSDkuI4gUHJpdmFjeVBvbGljeSDkv53mjIHkuIDoh7TnmoTnu5PmnoTkuI7moLflvI/vvIzkv53or4Hplb/mlofmraPluLjlsZXlvIAgLS0+XHJcbiAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInRpdGxlXCI+e3t0aXRsZX19PC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidXBkYXRlLWRhdGVcIj57e3B1Ymxpc2hEYXRlfX08L3RleHQ+XHJcbiAgICAgICAgPGJsb2NrIGZvcj1cInt7KGlkeCwgbGluZSkgaW4gY29udGVudExpbmVzfX1cIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY29udGVudC10ZXh0XCI+e3tsaW5lIHx8ICcgJ319PC90ZXh0PlxyXG4gICAgICAgICAgPCEtLSA8dGV4dCBjbGFzcz1cIlwiPnt7bGluZSB8fCAnICd9fTwvdGV4dD4gLS0+XHJcbiAgICAgICAgPC9ibG9jaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBrbm93bGVkZ2VEYXRhIGZyb20gJy4uLy4uLy4uL2RhdGEva25vd2xlZGdlLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGE6IHtcclxuICAgIGlkOiAnJyxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIHN1bW1hcnk6ICcnLFxyXG4gICAgY29udGVudDogJycsXHJcbiAgICBwdWJsaXNoRGF0ZTogJycsXHJcbiAgICBjb250ZW50TGluZXM6IFtdXHJcbiAgfSxcclxuICBvbkluaXQob3B0aW9ucykge1xyXG4gICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7IHRleHQ6ICfnn6Xor4bor6bmg4UnIH0pXHJcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmlkKSB0aGlzLmlkID0gb3B0aW9ucy5pZFxyXG4gICAgdGhpcy5sb2FkQXJ0aWNsZURhdGEoKVxyXG4gIH0sXHJcbiAgb25TaG93KG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaWQpIHtcclxuICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWRcclxuICAgICAgdGhpcy5sb2FkQXJ0aWNsZURhdGEoKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbG9hZEFydGljbGVEYXRhKCkge1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLmlkXHJcbiAgICBpZiAoIWlkKSByZXR1cm5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGFydGljbGVJZCA9IHBhcnNlSW50KGlkKVxyXG4gICAgICBpZiAoaXNOYU4oYXJ0aWNsZUlkKSkgcmV0dXJuXHJcbiAgICAgIGNvbnN0IGFydGljbGUgPSBrbm93bGVkZ2VEYXRhLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhcnRpY2xlSWQpXHJcbiAgICAgIGlmIChhcnRpY2xlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IFN0cmluZyhhcnRpY2xlSWQpXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IGFydGljbGUudGl0bGVcclxuICAgICAgICB0aGlzLnN1bW1hcnkgPSBhcnRpY2xlLnN1bW1hcnlcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBhcnRpY2xlLmNvbnRlbnRcclxuICAgICAgICB0aGlzLnB1Ymxpc2hEYXRlID0gYXJ0aWNsZS5wdWJsaXNoRGF0ZVxyXG4gICAgICAgIHRoaXMuY29udGVudExpbmVzID0gKGFydGljbGUuY29udGVudCB8fCAnJykuc3BsaXQoJ1xcbicpXHJcbiAgICAgICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7IHRleHQ6IGFydGljbGUudGl0bGUgfSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign5Yqg6L295paH56ug6K+m5oOF5aSx6LSlOicsIGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwibGVzc1wiPlxyXG5AaW1wb3J0ICcuLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc3R5bGUubGVzcyc7XHJcblxyXG4vKiDkuI3orr4gbWluLWhlaWdodC9oZWlnaHTvvIznlLHlhoXlrrnmkpHlvIDmlbTpobXvvIzpgb/lhY3lhoXpg6jlh7rnjrDlm7rlrprpq5jluqYr5rua5Yqo5p2hICovXHJcbi53cmFwcGVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmctbWFpbjtcclxuICBwYWRkaW5nLWJvdHRvbTogNDAgKiBAc2l6ZS1mYWN0b3I7XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA0MCAqIEBzaXplLWZhY3RvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2hpdGU7XHJcbiAgbWFyZ2luOiAyMCAqIEBzaXplLWZhY3RvcjtcclxuICBib3JkZXItcmFkaXVzOiAxNiAqIEBzaXplLWZhY3RvcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyLWNvbG9yO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogQGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyMCAqIEBzaXplLWZhY3RvcjtcclxufVxyXG5cclxuLnVwZGF0ZS1kYXRlIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6IEBncmV5O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwICogQHNpemUtZmFjdG9yO1xyXG59XHJcblxyXG4uY29udGVudC10ZXh0IHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgY29sb3I6IEBibGFjaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA4ICogQHNpemUtZmFjdG9yO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi53cmFwcGVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRjdGMVwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwcHhcIlxuICB9LFxuICBcIi5jb250ZW50LXdyYXBcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJmbGV4U2hyaW5rXCI6IDBcbiAgfSxcbiAgXCIuY29udGVudFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNDBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxNnB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI0YwRTJEOFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjRjBFMkQ4XCIsXG4gICAgXCJmbGV4U2hyaW5rXCI6IDBcbiAgfSxcbiAgXCIudGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0MHB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiY29sb3JcIjogXCIjM0EyRTI4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBweFwiXG4gIH0sXG4gIFwiLnVwZGF0ZS1kYXRlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOEE2RjYzXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHB4XCJcbiAgfSxcbiAgXCIuY29udGVudC10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjhweFwiLFxuICAgIFwiY29sb3JcIjogXCIjM0EyRTI4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjhweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwid3JhcHBlclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNvbnRlbnQtd3JhcFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJjb250ZW50XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnB1Ymxpc2hEYXRlfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ1cGRhdGUtZGF0ZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICAgICAgICAgIFwiZXhwXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5jb250ZW50TGluZXN9LFxuICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiaWR4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcImxpbmVcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5saW5lfHwnICd9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnQtdGV4dFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwiLyoqXHJcbiAqIOeRnOS8veWwj+efpeivhuaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICfnkZzkvL3nmoTotbfmupDkuI7lj5HlsZUnLFxyXG4gICAgc3VtbWFyeTpcclxuICAgICAgJ+eRnOS8vei1t+a6kOS6juWPpOWNsOW6pu+8jOW3suaciTUwMDDlpJrlubTnmoTljoblj7LjgILlroPkuI3ku4XmmK/ouqvkvZPnu4PkuaDvvIzmm7TmmK/kuIDnp43nlJ/mtLvmlrnlvI/lkozlk7LlrabkvZPns7vjgIInLFxyXG4gICAgY29udGVudDogYOeRnOS8ve+8iFlvZ2HvvInkuIDor43mnaXoh6rmorXor63vvIzmhI/kuLpcIue7k+WQiFwi5oiWXCLnu5/kuIBcIu+8jOaMh+eahOaYr+i6q+S9k+OAgeW/g+eBteWSjOeyvuelnueahOe7n+S4gOOAglxyXG5cclxu55Gc5Ly96LW35rqQ5LqO5Y+k5Y2w5bqm77yM5bey5pyJNTAwMOWkmuW5tOeahOWOhuWPsuOAguacgOaXqeeahOeRnOS8veaWh+eMruWPr+S7pei/vea6r+WIsOOAiuWQoOmZgOe7j+OAi+WSjOOAiuWlpeS5ieS5puOAi+OAgueRnOS8veacgOWIneaYr+S9nOS4uuS4gOenjeeyvuelnuS/ruihjOaWueazleWHuueOsOeahO+8jOaXqOWcqOW4ruWKqeS/ruihjOiAhei+vuWIsOabtOmrmOeahOaEj+ivhueKtuaAgeOAglxyXG5cclxu6ZqP552A5pe26Ze055qE5o6o56e777yM55Gc5Ly96YCQ5riQ5Y+R5bGV5oiQ5Li65LiA5aWX5a6M5pW055qE5L2T57O777yM5YyF5ous77yaXHJcbi0g5L2T5byP57uD5Lmg77yIQXNhbmHvvIlcclxuLSDlkbzlkLjmjqfliLbvvIhQcmFuYXlhbWHvvIlcclxuLSDlhqXmg7PvvIhNZWRpdGF0aW9u77yJXHJcbi0g6YGT5b635YeG5YiZ77yIWWFtYeWSjE5peWFtYe+8iVxyXG5cclxu546w5Luj55Gc5Ly95ZyoMjDkuJbnuqrkvKDlhaXopb/mlrnlkI7vvIzpgJDmuJDmvJTlj5jmiJDku6XouqvkvZPnu4PkuaDkuLrkuLvnmoTlgaXouqvmlrnlvI/vvIzkvYbkvKDnu5/nmoTnkZzkvL3lk7Llrablkoznsr7npZ7lsYLpnaLku43nhLbooqvorrjlpJrnu4PkuaDogIXmiYDph43op4bjgIJcclxuXHJcbuaXoOiuuuS9oOe7g+S5oOeRnOS8veeahOebrueahOaYr+S7gOS5iOKAlOKAlOaUueWWhOi6q+S9k+WBpeW6t+OAgeWHj+i9u+WOi+WKm+OAgeaPkOmrmOeBtea0u+aAp++8jOi/mOaYr+Wvu+axgueyvuelnuaIkOmVv+KAlOKAlOeRnOS8vemDveiDveS4uuS9oOaPkOS+m+S4gOadoemAmuW+gOi6q+W/g+W5s+ihoeeahOmBk+i3r+OAgmAsXHJcbiAgICBwdWJsaXNoRGF0ZTogJzIwMjUtMDEtMTUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiAn55Gc5Ly957uD5Lmg55qE5pyA5L2z5pe26Ze0JyxcclxuICAgIHN1bW1hcnk6XHJcbiAgICAgICfkuobop6PkvZXml7bnu4PkuaDnkZzkvL3og73lpJ/ojrflvpfmnIDkvbPmlYjmnpzvvIzku6Xlj4rlpoLkvZXmoLnmja7oh6rlt7HnmoTnlJ/mtLvoioLlpY/lronmjpLnu4PkuaDml7bpl7TjgIInLFxyXG4gICAgY29udGVudDogYOW+iOWkmuS6uumXru+8muS7gOS5iOaXtuWAmee7g+S5oOeRnOS8veacgOWlve+8n+WFtuWunu+8jOetlOahiOWboOS6uuiAjOW8gu+8jOS9huacieS4gOS6m+mAmueUqOeahOW7uuiuruWPr+S7peW4ruWKqeS9oOaJvuWIsOacgOmAguWQiOiHquW3seeahOe7g+S5oOaXtumXtOOAglxyXG5cclxuKirml6nmmajnu4PkuaDvvIg2OjAwLTk6MDDvvIkqKlxyXG7ml6nmmajmmK/nu4PkuaDnkZzkvL3nmoTpu4Tph5Hml7bpl7TjgILmraTml7bouqvkvZPnu4/ov4fkuIDlpJznmoTkvJHmga/vvIzmr5TovoPlg7XnoazvvIzpgILlkIjov5vooYzmuKnlkoznmoTmi4nkvLjlkozmv4DmtLvnu4PkuaDjgILml6nmmajnu4PkuaDlj6/ku6XluK7liqnvvJpcclxuLSDllKTphpLouqvkvZPlkozlv4PngbVcclxuLSDmj5Dpq5jkuIDlpKnnmoTkuJPms6jliptcclxuLSDlu7rnq4vop4TlvovnmoTnu4PkuaDkuaDmg69cclxuXHJcbioq5Lit5Y2I57uD5Lmg77yIMTI6MDAtMTQ6MDDvvIkqKlxyXG7kuK3ljYjnu4PkuaDpgILlkIjpgqPkupvlt6XkvZznuYHlv5nnmoTkurrjgILnn63mmoLnmoTljYjpl7Tnu4PkuaDlj6/ku6XvvJpcclxuLSDnvJPop6Plt6XkvZzljovliptcclxuLSDmgaLlpI3nsr7liptcclxuLSDmlLnlloTkuIvljYjnmoTlt6XkvZznirbmgIFcclxuXHJcbioq5YKN5pma57uD5Lmg77yIMTc6MDAtMjA6MDDvvIkqKlxyXG7lgo3mmZrmmK/ouqvkvZPmnIDngbXmtLvnmoTml7blgJnvvIzpgILlkIjov5vooYzmm7TlhbfmjJHmiJjmgKfnmoTnu4PkuaDjgILmraTml7bnu4PkuaDlj6/ku6XvvJpcclxuLSDph4rmlL7kuIDlpKnnmoTljovliptcclxuLSDnvJPop6PogozogonntKflvKBcclxuLSDkuLrmmZrkuIrnmoTkvJHmga/lgZrlh4blpIdcclxuXHJcbioq6YeN6KaB5o+Q56S677yaKipcclxuLSDpgb/lhY3lnKjppbHppJDlkI7nq4vljbPnu4PkuaDvvIzoh7PlsJHnrYnlvoUyLTPlsI/ml7ZcclxuLSDnqbrohbnnu4PkuaDmlYjmnpzmm7Tlpb3vvIzkvYbkuI3opoHov4fluqbppaXppb9cclxuLSDmib7liLDpgILlkIjoh6rlt7HnmoTml7bpl7TvvIzlubblnZrmjIHkuIvljrvvvIzmr5Tov73msYJcIuacgOS9s+aXtumXtFwi5pu06YeN6KaBXHJcblxyXG7orrDkvY/vvIzmnIDlpb3nmoTnu4PkuaDml7bpl7TmmK/kvaDog73lpJ/lnZrmjIHnmoTml7bpl7TvvIFgLFxyXG4gICAgcHVibGlzaERhdGU6ICcyMDI1LTAxLTIwJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogJ+eRnOS8veWRvOWQuOazle+8muiFueW8j+WRvOWQuCcsXHJcbiAgICBzdW1tYXJ5OlxyXG4gICAgICAn5a2m5Lmg5q2j56Gu55qE6IW55byP5ZG85ZC45pa55rOV77yM6L+Z5piv5omA5pyJ55Gc5Ly957uD5Lmg55qE5Z+656GA77yM6IO95aSf5biu5Yqp5L2g5pu05aW95Zyw5pS+5p2+5ZKM6ZuG5Lit5rOo5oSP5Yqb44CCJyxcclxuICAgIGNvbnRlbnQ6IGDlkbzlkLjmmK/nkZzkvL3nu4PkuaDnmoTmoLjlv4PjgILmraPnoa7nmoTlkbzlkLjkuI3ku4Xog73lpJ/kuLrouqvkvZPmj5DkvpvmsKfmsJTvvIzov5jog73luK7liqnosIPoioLnpZ7nu4/ns7vnu5/vvIzluKbmnaXlubPpnZnlkozkuJPms6jjgIJcclxuXHJcbioq5LuA5LmI5piv6IW55byP5ZG85ZC477yfKipcclxuXHJcbuiFueW8j+WRvOWQuO+8iOS5n+ensOS4uuaoquiGiOiGnOWRvOWQuO+8ieaYr+S4gOenjea3seWxgueahOWRvOWQuOaWueW8j++8jOmAmui/h+aJqeW8oOWSjOaUtue8qeiFuemDqOadpei/m+ihjOWRvOWQuO+8jOiAjOS4jeaYr+S7heS7heS9v+eUqOiDuOmDqOOAglxyXG5cclxuKirlpoLkvZXnu4PkuaDohbnlvI/lkbzlkLjvvJoqKlxyXG5cclxuMS4gKirlh4blpIflp7/lir8qKlxyXG4gICAtIOW5s+i6uuaIluiIkumAguWcsOWdkOedgFxyXG4gICAtIOS4gOWPquaJi+aUvuWcqOiDuOmDqO+8jOWPpuS4gOWPquaJi+aUvuWcqOiFuemDqFxyXG5cclxuMi4gKirlkLjmsJQqKlxyXG4gICAtIOmAmui/h+m8u+WtkOe8k+aFouWQuOawlFxyXG4gICAtIOaEn+WPl+iFuemDqOWQkeS4iumahui1t1xyXG4gICAtIOiDuOmDqOS/neaMgeebuOWvuemdmeatolxyXG5cclxuMy4gKirlkbzmsJQqKlxyXG4gICAtIOmAmui/h+m8u+WtkOaIluWYtOW3tOe8k+aFouWRvOawlFxyXG4gICAtIOaEn+WPl+iFuemDqOWQkeWGheaUtue8qVxyXG4gICAtIOWwvemHj+WwhuawlOWujOWFqOWRvOWHulxyXG5cclxuNC4gKiroioLlpY8qKlxyXG4gICAtIOWQuOawlDTnp5LvvIzlkbzmsJQ056eSXHJcbiAgIC0g6YCQ5riQ5bu26ZW/5Yiw5ZC45rCUNuenku+8jOWRvOawlDbnp5JcclxuICAgLSDkv53mjIHlkbzlkLjlubPnqLPjgIHlnYfljIBcclxuXHJcbioq6IW55byP5ZG85ZC455qE5aW95aSE77yaKipcclxuXHJcbi0g6ZmN5L2O5Y6L5Yqb5ZKM54Sm6JmRXHJcbi0g5pS55ZaE552h55yg6LSo6YePXHJcbi0g5aKe5by66IK65rS76YePXHJcbi0g5r+A5rS75Ymv5Lqk5oSf56We57uP57O757uf77yI5pS+5p2+5Y+N5bqU77yJXHJcbi0g5o+Q6auY5LiT5rOo5YqbXHJcblxyXG4qKue7g+S5oOW7uuiuru+8mioqXHJcblxyXG7mr4/lpKnnu4PkuaA1LTEw5YiG6ZKf77yM5Y+v5Lul5Zyo5pep5pmo6LW35bqK5ZCO5oiW5pma5LiK552h6KeJ5YmN6L+b6KGM44CC6ZqP552A57uD5Lmg55qE5rex5YWl77yM5L2g5Lya5Y+R546w6Ieq5bex6IO95aSf5pu06Ieq54S25Zyw5L2/55So6IW55byP5ZG85ZC477yM55Sa6Iez5Zyo5pel5bi455Sf5rS75Lit5Lmf6IO95L+d5oyB6L+Z56eN5ZG85ZC45pa55byP44CCXHJcblxyXG7orrDkvY/vvIzlkbzlkLjmmK/ov57mjqXouqvkvZPlkozlv4PngbXnmoTmoaXmooHvvIzpgJrov4fmnInmhI/or4bnmoTlkbzlkLjvvIzmiJHku6zlj6/ku6Xmm7Tlpb3lnLDmjozmjqfoh6rlt7HnmoTouqvlv4PnirbmgIHjgIJgLFxyXG4gICAgcHVibGlzaERhdGU6ICcyMDI1LTAyLTAxJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogJ+eRnOS8vee7g+S5oOeahOW4uOingeivr+WMuicsXHJcbiAgICBzdW1tYXJ5OlxyXG4gICAgICAn5LqG6Kej55Gc5Ly957uD5Lmg5Lit5bi46KeB55qE6ZSZ6K+v6KeC5b+177yM5biu5Yqp5L2g5pu05a6J5YWo44CB5pu05pyJ5pWI5Zyw57uD5Lmg55Gc5Ly944CCJyxcclxuICAgIGNvbnRlbnQ6IGDlnKjnkZzkvL3nu4PkuaDkuK3vvIzmnInkuIDkupvluLjop4HnmoTor6/ljLrlj6/og73kvJrpmLvnoo3kvaDnmoTov5vmraXvvIznlJroh7Plr7zoh7Tlj5fkvKTjgILkuobop6Pov5nkupvor6/ljLrvvIzlj6/ku6XluK7liqnkvaDmm7TlronlhajjgIHmm7TmnInmlYjlnLDnu4PkuaDjgIJcclxuXHJcbioq6K+v5Yy65LiA77ya5b+F6aG75YGa5Yiw5a6M576O5L2T5byPKipcclxuXHJcbuW+iOWkmuS6uuiupOS4uu+8jOWPquacieWBmuWIsOWDj+iAgeW4iOaIluWbvueJh+S4remCo+agt+WujOe+jueahOS9k+W8j+aJjeeul+aIkOWKn+OAguWunumZheS4iu+8mlxyXG4tIOavj+S4quS6uueahOi6q+S9k+adoeS7tuS4jeWQjO+8jOS9k+W8j+eahOWkluinguS5n+S8muS4jeWQjFxyXG4tIOmHjeimgeeahOaYr+aEn+WPl+S9k+W8j+W4puadpeeahOaViOaenO+8jOiAjOS4jeaYr+WkluinglxyXG4tIOWwiumHjeiHquW3seeahOi6q+S9k+mZkOWItu+8jOS4jeimgeW8uui/q1xyXG5cclxuKiror6/ljLrkuozvvJrotornl5votorlpb0qKlxyXG5cclxuXCLmsqHmnInnl5voi6blsLHmsqHmnInmlLbojrdcIueahOinguW/teWcqOeRnOS8veS4reW5tuS4jemAgueUqO+8mlxyXG4tIOi9u+W+rueahOaLieS8uOaEn+aYr+ato+W4uOeahFxyXG4tIOWwlumUkOeahOeWvOeXm+aYr+itpuWRiuS/oeWPt++8jOW6lOivpeeri+WNs+WBnOatolxyXG4tIOeRnOS8veW6lOivpeaYr+iIkumAguWSjOeos+WumueahFxyXG5cclxuKiror6/ljLrkuInvvJrlv4Xpobvmr4/lpKnnu4PkuaDlvojplb/ml7bpl7QqKlxyXG5cclxu57uD5Lmg55qE6LSo6YeP5q+U5pWw6YeP5pu06YeN6KaB77yaXHJcbi0g5q+P5aSpMTUtMzDliIbpkp/nmoTop4Tlvovnu4PkuaDvvIzmr5TlgbblsJTkuIDmrKEy5bCP5pe255qE57uD5Lmg5pu05pyJ5pWIXHJcbi0g5LyR5oGv5Lmf5piv57uD5Lmg55qE5LiA6YOo5YiGXHJcbi0g5om+5Yiw6YCC5ZCI6Ieq5bex55qE57uD5Lmg6aKR546HXHJcblxyXG4qKuivr+WMuuWbm++8muWPquWFs+azqOS9k+W8j++8jOW/veeVpeWRvOWQuCoqXHJcblxyXG7lkbzlkLjmmK/nkZzkvL3nmoTngbXprYLvvJpcclxuLSDkvZPlvI/lupTor6XphY3lkIjlkbzlkLjov5vooYxcclxuLSDlpoLmnpzlkbzlkLjmgKXkv4PmiJbml6Dms5XlkbzlkLjvvIzor7TmmI7kvZPlvI/lvLrluqbov4flpKdcclxuLSDmnInmhI/or4bnmoTlkbzlkLjog73lpJ/lop7lvLrnu4PkuaDmlYjmnpxcclxuXHJcbioq6K+v5Yy65LqU77ya5q+U6L6D5ZKM56ue5LqJKipcclxuXHJcbueRnOS8veS4jeaYr+ernuaKgOi/kOWKqO+8mlxyXG4tIOS4jeimgeS4juS7luS6uuavlOi+g1xyXG4tIOS4k+azqOS6juiHquW3seeahOi/m+atpVxyXG4tIOavj+S4quS6uueahOeRnOS8veS5i+aXhemDveaYr+eLrOeJueeahFxyXG5cclxuKiror6/ljLrlha3vvJrlv73op4bng63ouqvlkozmlL7mnb4qKlxyXG5cclxu54Ot6Lqr5ZKM5pS+5p2+5ZCM5qC36YeN6KaB77yaXHJcbi0g5YWF5YiG55qE54Ot6Lqr5Y+v5Lul6aKE6Ziy5Y+X5LykXHJcbi0g5pyA5ZCO55qE5pS+5p2+5L2T5byP77yI5aaC5pGK5bC45byP77yJ5biu5Yqp6Lqr5L2T5oGi5aSNXHJcbi0g5LiN6KaB6Lez6L+H6L+Z5Lqb6YeN6KaB546v6IqCXHJcblxyXG7orrDkvY/vvIznkZzkvL3mmK/kuIDkuKrml4XnqIvvvIzkuI3mmK/nm67nmoTlnLDjgILkv53mjIHogJDlv4PvvIzlsIrph43oh6rlt7HnmoTouqvkvZPvvIzkuqvlj5fnu4PkuaDnmoTov4fnqIvjgIJgLFxyXG4gICAgcHVibGlzaERhdGU6ICcyMDI1LTAyLTEwJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICB0aXRsZTogJ+eRnOS8veS4juW/g+eQhuWBpeW6tycsXHJcbiAgICBzdW1tYXJ5OlxyXG4gICAgICAn5o6i57Si55Gc5Ly95aaC5L2V5pS55ZaE5b+D55CG5YGl5bq377yM5YeP6L275Y6L5Yqb44CB54Sm6JmR5ZKM5oqR6YOB77yM5o+Q5Y2H5pW05L2T5bm456aP5oSf44CCJyxcclxuICAgIGNvbnRlbnQ6IGDnkZzkvL3kuI3ku4Xog73lpJ/mlLnlloTouqvkvZPlgaXlurfvvIzlr7nlv4PnkIblgaXlurfkuZ/mnInnnYDmt7Hov5znmoTlvbHlk43jgILotormnaXotorlpJrnmoTnp5HlrabnoJTnqbbor4Hlrp7vvIznkZzkvL3nu4PkuaDog73lpJ/mnInmlYjmlLnlloTlkITnp43lv4PnkIbpl67popjjgIJcclxuXHJcbioq55Gc5Ly95aaC5L2V5b2x5ZON5b+D55CG5YGl5bq377yfKipcclxuXHJcbjEuICoq6ZmN5L2O5Y6L5Yqb5rC05bmzKipcclxuICAgLSDnkZzkvL3nu4PkuaDog73lpJ/mv4DmtLvlia/kuqTmhJ/npZ7nu4/ns7vnu59cclxuICAgLSDpmY3kvY7ljovlipvmv4DntKDvvIjlpoLnmq7otKjphofvvInnmoTmsLTlubNcclxuICAgLSDkv4Pov5vouqvkvZPnmoTmlL7mnb7lj43lupRcclxuXHJcbjIuICoq57yT6Kej54Sm6JmRKipcclxuICAgLSDpgJrov4flkbzlkLjnu4PkuaDlkozlhqXmg7PvvIzluK7liqnlubPpnZnlv4PngbVcclxuICAgLSDmj5Dpq5jlr7nnhKbomZHmg4Xnu6rnmoTop4nlr5/lkoznrqHnkIbog73liptcclxuICAgLSDmlLnlloTnnaHnnKDotKjph4/vvIzlh4/lsJHnhKbomZHlvqrnjq9cclxuXHJcbjMuICoq5pS55ZaE5oOF57uqKipcclxuICAgLSDnkZzkvL3nu4PkuaDog73lpJ/kv4Pov5vlhoXllaHogr3nmoTph4rmlL7vvIhcIuW/q+S5kOa/gOe0oFwi77yJXHJcbiAgIC0g5o+Q6auY6KGA5riF57Sg5rC05bmz77yM5pS55ZaE5oOF57uqXHJcbiAgIC0g5aKe5by66Ieq5oiR5oSP6K+G5ZKM6Ieq5oiR5o6l57qzXHJcblxyXG40LiAqKuaPkOmrmOS4k+azqOWKmyoqXHJcbiAgIC0g5Yal5oOz5ZKM5LiT5rOo57uD5Lmg6K6t57uD5aSn6ISR55qE5rOo5oSP5YqbXHJcbiAgIC0g5pS55ZaE5bel5L2c6K6w5b+G5ZKM5omn6KGM5Yqf6IO9XHJcbiAgIC0g5YeP5bCR5oCd57u05pWj5LmxXHJcblxyXG4qKumAguWQiOW/g+eQhuWBpeW6t+eahOeRnOS8vee7g+S5oO+8mioqXHJcblxyXG4tICoq5rip5ZKM55qE5L2T5byPKirvvJrlpoLlhL/nq6XlvI/jgIHmkYrlsLjlvI/jgIHnroDljZXnmoTmia3ovaxcclxuLSAqKuWRvOWQuOe7g+S5oCoq77ya6IW55byP5ZG85ZC444CB5Lqk5pu/6by75a2U5ZG85ZC4XHJcbi0gKirlhqXmg7MqKu+8muato+W/teWGpeaDs+OAgei6q+S9k+aJq+aPj1xyXG4tICoq5oGi5aSN5oCn55Gc5Ly9KirvvJrkvb/nlKjovoXliqnlt6XlhbfvvIzplb/ml7bpl7Tkv53mjIHmlL7mnb7kvZPlvI9cclxuXHJcbioq56eR5a2m56CU56m25pSv5oyB77yaKipcclxuXHJcbuWkmumhueeglOeptuaYvuekuu+8jOWumuacn+e7g+S5oOeRnOS8veeahOS6uu+8mlxyXG4tIOeEpuiZkeWSjOaKkemDgeeXh+eKtuaYvuiRl+WHj+WwkVxyXG4tIOWOi+WKm+W6lOWvueiDveWKm+aPkOmrmFxyXG4tIOaVtOS9k+eUn+a0u+a7oeaEj+W6puaPkOWNh1xyXG4tIOedoeecoOi0qOmHj+aUueWWhFxyXG5cclxuKirlpoLkvZXlvIDlp4vvvJoqKlxyXG5cclxu5aaC5p6c5L2g5biM5pyb6YCa6L+H55Gc5Ly95pS55ZaE5b+D55CG5YGl5bq377yaXHJcbjEuIOS7jua4qeWSjOeahOe7g+S5oOW8gOWni++8jOS4jeimgei/h+W6puaMkeaImFxyXG4yLiDnu5PlkIjlkbzlkLjnu4PkuaDlkozlhqXmg7NcclxuMy4g5L+d5oyB6KeE5b6L55qE57uD5Lmg5Lmg5oOvXHJcbjQuIOWmguaenOaDheWGteS4pemHje+8jOW7uuiurue7k+WQiOS4k+S4muW/g+eQhuayu+eWl1xyXG5cclxu6K6w5L2P77yM55Gc5Ly95piv5LiA5Liq5bel5YW377yM5biu5Yqp5L2g5pu05aW95Zyw5LqG6Kej5ZKM566h55CG6Ieq5bex55qE5b+D55CG54q25oCB44CC57uZ6Ieq5bex5pe26Ze05ZKM6ICQ5b+D77yM6K6p55Gc5Ly95oiQ5Li65L2g5b+D55CG5YGl5bq35LmL5peF55qE5LiA6YOo5YiG44CCYCxcclxuICAgIHB1Ymxpc2hEYXRlOiAnMjAyNS0wMi0yMCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgdGl0bGU6ICfnkZzkvL3oo4XlpIfpgInmi6nmjIfljZcnLFxyXG4gICAgc3VtbWFyeTpcclxuICAgICAgJ+S6huino+WmguS9lemAieaLqeWQiOmAgueahOeRnOS8veWeq+OAgeacjeijheWSjOWFtuS7luijheWkh++8jOiuqeS9oOeahOe7g+S5oOabtOWKoOiIkumAguWSjOWuieWFqOOAgicsXHJcbiAgICBjb250ZW50OiBg6YCJ5oup5ZCI6YCC55qE55Gc5Ly96KOF5aSH5Y+v5Lul6K6p5L2g55qE57uD5Lmg5pu05Yqg6IiS6YCC44CB5a6J5YWo5ZKM5pyJ5pWI44CC6Jm954S255Gc5Ly95LiN6ZyA6KaB5aSq5aSa6KOF5aSH77yM5L2G5Yeg5Lu25Z+65pys54mp5ZOB6L+Y5piv5b6I5pyJ5b+F6KaB55qE44CCXHJcblxyXG4qKueRnOS8veWeq++8iOacgOmHjeimge+8iSoqXHJcblxyXG7nkZzkvL3lnqvmmK/nkZzkvL3nu4PkuaDkuK3mnIDln7rmnKznmoToo4XlpIfvvJpcclxuXHJcbi0gKirljprluqYqKu+8muWIneWtpuiAheW7uuiurumAieaLqTYtOG1t55qE5Y6a5bqm77yM5o+Q5L6b5pu05aW955qE57yT5Yay77yb5pyJ57uP6aqM55qE57uD5Lmg6ICF5Y+v5Lul6YCJ5oupMy01bW1cclxuLSAqKuadkOi0qCoq77yaXHJcbiAgLSBUUEXmnZDotKjvvJrnjq/kv53jgIHpmLLmu5HjgIHovbvkvr9cclxuICAtIFBWQ+adkOi0qO+8muS7t+agvOS+v+WunO+8jOS9huWPr+iDveS4jeWkn+eOr+S/nVxyXG4gIC0g5aSp54S25qmh6IO277ya6Ziy5ruR5oCn5aW977yM5L2G6L6D6YeNXHJcbi0gKirpmLLmu5HmgKcqKu+8mumAieaLqeihqOmdouaciee6ueeQhueahOWeq+WtkO+8jOmYsuatoue7g+S5oOaXtua7keWKqFxyXG4tICoq5bC65a+4KirvvJrmoIflh4blsLrlr7jnuqbkuLoxODBjbSB4IDYwY23vvIznoa7kv53otrPlpJ/nqbrpl7RcclxuXHJcbioq55Gc5Ly95pyN6KOFKipcclxuXHJcbumAieaLqeiIkumAguOAgemAj+awlOeahOacjeijhe+8mlxyXG5cclxuLSAqKuS4iuihoyoq77ya6YCJ5oup6LS06Lqr5L2G5LiN57Sn57u355qE5qy+5byP77yM6YG/5YWN5Zyo5YCS56uL5L2T5byP5Lit5ruR6JC9XHJcbi0gKiroo6TlrZAqKu+8muW8ueaAp+WlveOAgeS4jemZkOWItuWKqOS9nOeahOeRnOS8veijpOaIlui/kOWKqOijpFxyXG4tICoq5p2Q6LSoKirvvJrpgInmi6nlkLjmsZfjgIHlv6vlubLnmoTpnaLmlplcclxuLSAqKuminOiJsioq77ya6YCJ5oup6K6p5L2g5oSf6KeJ6IiS6YCC55qE6aKc6ImyXHJcblxyXG4qKuWFtuS7lui+heWKqeijheWkh++8iOWPr+mAie+8iSoqXHJcblxyXG4tICoq55Gc5Ly956CWKirvvJrluK7liqnosIPmlbTkvZPlvI/vvIzpgILlkIjliJ3lrabogIXlkozouqvkvZPmn5Tpn6fmgKfkuI3lpJ/nmoTkurpcclxuLSAqKueRnOS8veW4pioq77ya5biu5Yqp5ouJ5Ly477yM5Yqg5rex5L2T5byP55qE5oSf5Y+XXHJcbi0gKirnkZzkvL3mr68qKu+8mueUqOS6juaUr+aSkeWSjOS/neaalu+8jOWcqOaBouWkjeaAp+eRnOS8veS4reW+iOacieeUqFxyXG4tICoq55Gc5Ly955CDKirvvJrlop7liqDnu4PkuaDnmoTotqPlkbPmgKflkozmjJHmiJjmgKdcclxuXHJcbioq6YCJ5oup5bu66K6u77yaKipcclxuXHJcbjEuICoq5Yid5a2m6ICFKirvvJrkuIDlvKDlpb3nmoTnkZzkvL3lnqvlsLHotrPlpJ/kuobvvIzlhbbku5boo4XlpIflj6/ku6Xpmo/nnYDnu4PkuaDmt7HlhaXlho3mt7vnva5cclxuMi4gKirpooTnrpfmnInpmZAqKu+8muS8mOWFiOaKlei1hOS4gOW8oOi0qOmHj+WlveeahOeRnOS8veWeq1xyXG4zLiAqKuWcqOWutue7g+S5oCoq77ya56Gu5L+d5pyJ6Laz5aSf55qE56m66Ze077yM5Zyw6Z2i5bmz5pW0XHJcbjQuICoq5riF5rSB5L+d5YW7KirvvJrlrprmnJ/muIXmtIHnkZzkvL3lnqvvvIzkv53mjIHljavnlJ9cclxuXHJcbioq6LSt5Lmw5rig6YGT77yaKipcclxuXHJcbi0g5a6e5L2T5bqX77ya5Y+v5Lul5Lqy6Ieq5L2T6aqM77yM5oSf5Y+X5p2Q6LSo5ZKM5Y6a5bqmXHJcbi0g5Zyo57q/6LSt5Lmw77ya6YCJ5oup55+l5ZCN5ZOB54mM77yM5p+l55yL55So5oi36K+E5Lu3XHJcblxyXG7orrDkvY/vvIzmnIDlpb3nmoToo4XlpIfmmK/pgqPkupvog73lpJ/mlK/mjIHkvaDmjIHnu63nu4PkuaDnmoToo4XlpIfjgILkuI3opoHooqvmmILotLXnmoToo4XlpIfmiYDov7fmg5HvvIzph43opoHnmoTmmK/lvIDlp4vnu4PkuaDlubblnZrmjIHkuIvljrvjgIJgLFxyXG4gICAgcHVibGlzaERhdGU6ICcyMDI1LTAzLTAxJ1xyXG4gIH1cclxuXVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcc2NyaXB0LWxvYWRlci5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXHBhY2thZ2VyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXG1vZHVsZS1sb2FkZXIuanMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/Y3dkPWI6XFxcXHF1aWNrQXBwXFxcXHlvZ2EmY2FjaGVEaXJlY3RvcnkmcGx1Z2luc1tdPWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxiYWJlbC1wbHVnaW4tanN4LmpzJmNvbW1lbnRzPWZhbHNlJmNvbmZpZ0ZpbGU9YzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxwYWNrYWdlclxcXFxiYWJlbC5jb25maWcuanMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGFjY2Vzcy1sb2FkZXIuanMhYzpcXFxcVXNlcnNcXFxcZGlkaXUyMzNcXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxQcm9ncmFtc1xcXFxRdWljayBBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxoYXAtZGVidWdnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vaW5kZXgudXg/dXhUeXBlPXBhZ2VcIilcbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKSB7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gcmVxdWlyZShcIiFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGUtbG9hZGVyLmpzIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxmcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlIS4vaW5kZXgudXg/dXhUeXBlPXBhZ2UmXCIpXG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSByZXF1aXJlKFwiIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIWM6XFxcXFVzZXJzXFxcXGRpZGl1MjMzXFxcXEFwcERhdGFcXFxcTG9jYWxcXFxcUHJvZ3JhbXNcXFxcUXVpY2sgQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcaGFwLWRlYnVnZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFxsZXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcyFjOlxcXFxVc2Vyc1xcXFxkaWRpdTIzM1xcXFxBcHBEYXRhXFxcXExvY2FsXFxcXFByb2dyYW1zXFxcXFF1aWNrIEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuL2luZGV4LnV4P3V4VHlwZT1wYWdlXCIpXG59KTtcbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJWZXJzaW9uOiBRVUlDS0FQUF9UT09MS0lUX1ZFUlNJT04gfSk7Il0sIm5hbWVzIjpbIl9rbm93bGVkZ2UiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsImRhdGEiLCJpZCIsInRpdGxlIiwic3VtbWFyeSIsImNvbnRlbnQiLCJwdWJsaXNoRGF0ZSIsImNvbnRlbnRMaW5lcyIsIm9uSW5pdCIsIm9wdGlvbnMiLCIkcGFnZSIsInNldFRpdGxlQmFyIiwidGV4dCIsImxvYWRBcnRpY2xlRGF0YSIsIm9uU2hvdyIsImFydGljbGVJZCIsInBhcnNlSW50IiwiaXNOYU4iLCJhcnRpY2xlIiwia25vd2xlZGdlRGF0YSIsImZpbmQiLCJpdGVtIiwiU3RyaW5nIiwic3BsaXQiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9