/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Restaurant_otf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Restaurant.otf */ \"./src/Restaurant.otf\");\n/* harmony import */ var _background_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background.png */ \"./src/background.png\");\n/* harmony import */ var _Contact_Banner_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Contact_Banner.jpg */ \"./src/Contact_Banner.jpg\");\n// Imports\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Restaurant_otf__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_background_png__WEBPACK_IMPORTED_MODULE_3__);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Contact_Banner_jpg__WEBPACK_IMPORTED_MODULE_4__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'Restaurant';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\nbody {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: 250px;\\n  background-attachment: fixed;\\n}\\n\\n.mt-container {\\n  margin-top: 42px;\\n}\\n\\n.bg-navbar {\\n  background-color: rgb(196, 135, 23);\\n}\\n\\n.banner {\\n  height: 100%;\\n}\\n\\n.bg-title {\\n  background-color: rgba(0, 0, 0, 0.548);\\n}\\n\\n.d-inherit {\\n  display: inherit;\\n}\\n\\n.tf-restaurant {\\n  font-family: 'Restaurant';\\n}\\n\\n.bg-menu {\\n  background-color: rgb(196, 135, 23);\\n}\\n\\n.fs-8 {\\n  font-size: 35px;\\n}\\n\\n.border-menu {\\n  border: 1px solid rgb(196, 135, 23);\\n}\\n\\n.text-menu {\\n  color: rgb(196, 135, 23);\\n}\\n\\n.text-vertical {\\n  writing-mode: vertical-lr;\\n  text-orientation: sideways-right;\\n}\\n\\n.contacttitleimage {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  height: 400px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/Contact_Banner.jpg":
/*!********************************!*\
  !*** ./src/Contact_Banner.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e04ea074b7bdce22c091.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Contact_Banner.jpg?");

/***/ }),

/***/ "./src/Restaurant.otf":
/*!****************************!*\
  !*** ./src/Restaurant.otf ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"199f8081722487c0837a.otf\";\n\n//# sourceURL=webpack://restaurant-page/./src/Restaurant.otf?");

/***/ }),

/***/ "./src/background.png":
/*!****************************!*\
  !*** ./src/background.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f64d75226af447975f89.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/background.png?");

/***/ }),

/***/ "./src/banner.jpg":
/*!************************!*\
  !*** ./src/banner.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bcf42109e8aec092ff95.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/banner.jpg?");

/***/ }),

/***/ "./src/facebook.png":
/*!**************************!*\
  !*** ./src/facebook.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c010e06a09380d50007c.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/facebook.png?");

/***/ }),

/***/ "./src/facebookbig.png":
/*!*****************************!*\
  !*** ./src/facebookbig.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"863a86515769a741deda.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/facebookbig.png?");

/***/ }),

/***/ "./src/gmail.png":
/*!***********************!*\
  !*** ./src/gmail.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7930e8200cb8011858e7.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/gmail.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-elements */ \"./src/page-elements.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nfunction homeClick() {\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.Home.classList.add('active','text-dark');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.Home.classList.remove('text-white');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.Menu.classList.remove('active', 'text-dark');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.Menu.classList.add('text-white');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.Contact.classList.remove('active', 'text-dark');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.Contact.classList.add('text-white');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.homeContent.classList.remove('d-none');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.menuContent.classList.add('d-none');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.contactContent.classList.add('d-none');\n};\n\nfunction menuClick () {\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.Menu.classList.add('active','text-dark');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.Menu.classList.remove('text-white');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.Home.classList.remove('active','text-dark');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.Home.classList.add('text-white');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.Contact.classList.remove('active','text-dark');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.Contact.classList.add('text-white');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.menuContent.classList.remove('d-none');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.homeContent.classList.add('d-none');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.contactContent.classList.add('d-none');\n};\n\nfunction ContactClick() {\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.Contact.classList.add('active','text-dark');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.Contact.classList.remove('text-white');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.Home.classList.remove('active','text-dark');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.Home.classList.add('text-white');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.Menu.classList.remove('active','text-dark');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.Menu.classList.add('text-white');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.contactContent.classList.remove('d-none');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.menuContent.classList.add('d-none');\n    _page_elements__WEBPACK_IMPORTED_MODULE_0__.homeContent.classList.add('d-none');\n};\n\n_page_elements__WEBPACK_IMPORTED_MODULE_0__.Home.addEventListener('click',homeClick);\n\n_page_elements__WEBPACK_IMPORTED_MODULE_0__.Menu.addEventListener('click',menuClick);\n\n_page_elements__WEBPACK_IMPORTED_MODULE_0__.Contact.addEventListener('click',ContactClick);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/instagram.png":
/*!***************************!*\
  !*** ./src/instagram.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ff7e8a19a06b16918e3c.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/instagram.png?");

/***/ }),

/***/ "./src/instagrambig.png":
/*!******************************!*\
  !*** ./src/instagrambig.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"661a8d22097791cf8c6d.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/instagrambig.png?");

/***/ }),

/***/ "./src/page-elements.js":
/*!******************************!*\
  !*** ./src/page-elements.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Content\": () => (/* binding */ Content),\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"navBar\": () => (/* binding */ navBar),\n/* harmony export */   \"ulNavb\": () => (/* binding */ ulNavb),\n/* harmony export */   \"navItem1\": () => (/* binding */ navItem1),\n/* harmony export */   \"Home\": () => (/* binding */ Home),\n/* harmony export */   \"navItem2\": () => (/* binding */ navItem2),\n/* harmony export */   \"Menu\": () => (/* binding */ Menu),\n/* harmony export */   \"navItem3\": () => (/* binding */ navItem3),\n/* harmony export */   \"Contact\": () => (/* binding */ Contact),\n/* harmony export */   \"homeContent\": () => (/* binding */ homeContent),\n/* harmony export */   \"menuContent\": () => (/* binding */ menuContent),\n/* harmony export */   \"contactContent\": () => (/* binding */ contactContent)\n/* harmony export */ });\n/* harmony import */ var _banner_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner.jpg */ \"./src/banner.jpg\");\n/* harmony import */ var _facebook_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facebook.png */ \"./src/facebook.png\");\n/* harmony import */ var _twitter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./twitter.png */ \"./src/twitter.png\");\n/* harmony import */ var _instagram_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instagram.png */ \"./src/instagram.png\");\n/* harmony import */ var _gmail_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gmail.png */ \"./src/gmail.png\");\n/* harmony import */ var _facebookbig_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facebookbig.png */ \"./src/facebookbig.png\");\n/* harmony import */ var _twitterbig_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./twitterbig.png */ \"./src/twitterbig.png\");\n/* harmony import */ var _instagrambig_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instagrambig.png */ \"./src/instagrambig.png\");\n/* harmony import */ var _telephone_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./telephone.png */ \"./src/telephone.png\");\n\n\n\n\n\n\n\n\n\n\nconst Content = document.getElementById('content');\nContent.classList.add('p-0', 'mt-container');\n\nconst Container = document.createElement('div');\nContainer.classList.add('container', 'p-0');\nContent.appendChild(Container);\n    \nconst navBar = document.createElement('nav');\nContent.appendChild(navBar);\n\nconst ulNavb = document.createElement('ul');\nulNavb.classList.add('nav', 'nav-tabs', 'justify-content-center', 'fixed-top', 'container','rounded-top', 'bg-navbar');\nnavBar.appendChild(ulNavb);\n\nconst navItem1 = document.createElement('li');\nnavItem1.classList.add('nav-item');\nulNavb.appendChild(navItem1);\n\nconst Home = document.createElement('a');\nHome.classList.add('nav-link', 'active', 'text-dark');\nHome.href = '#';\nHome.textContent = 'Home';\nnavItem1.appendChild(Home);\n\nconst navItem2 = document.createElement('li');\nnavItem2.classList.add('nav-item');\nulNavb.appendChild(navItem2);\n\nconst Menu = document.createElement('a');\nMenu.classList.add('nav-link', 'text-white');\nMenu.href = '#';\nMenu.textContent = 'Menu';\nnavItem2.appendChild(Menu);\n\nconst navItem3 = document.createElement('li');\nnavItem3.classList.add('nav-item');\nulNavb.appendChild(navItem3);\n\nconst Contact = document.createElement('a');\nContact.classList.add( 'nav-link', 'text-white');\nContact.href = '#';\nContact.textContent = 'Contact';\nnavItem3.appendChild(Contact);\n\nconst homeContent = document.createElement('div');\nhomeContent.classList.add('w-100', 'bg-white', 'p-0');\nContainer.appendChild(homeContent);\n\nconst menuContent = document.createElement('div');\nmenuContent.classList.add('w-100', 'd-none', 'p-5','bg-dark');\nContainer.appendChild(menuContent);\n\nconst contactContent = document.createElement('div');\ncontactContent.classList.add('w-100', 'bg-white', 'd-none', 'row', 'm-0');\n\nContainer.appendChild(contactContent);\n\nconst bannerContainer = document.createElement('div');\nbannerContainer.classList.add('position-relative');\nhomeContent.appendChild(bannerContainer);\n\nconst Banner = new Image();\nBanner.src = _banner_jpg__WEBPACK_IMPORTED_MODULE_0__;\nBanner.classList.add('w-100', 'm-0', 'banner');\nbannerContainer.appendChild(Banner);\n\nconst titleContainer = document.createElement('div');\ntitleContainer.classList.add('position-absolute','top-50', 'start-50', 'translate-middle', 'bg-title', 'rounded-3', 'shadow', 'p-4', 'border');\nbannerContainer.appendChild(titleContainer);\n\nconst Title = document.createElement('h1');\nTitle.classList.add('text-white','tf-restaurant', 'text-center');\nTitle.textContent = \"Welcome to JAAR's\";\ntitleContainer.appendChild(Title);\n\nconst subTitle = document.createElement('h1');\nsubTitle.classList.add('text-white', 'text-center','tf-restaurant');\nsubTitle.textContent = \"Restaurant\";\ntitleContainer.appendChild(subTitle);\n\ntitleContainer.innerHTML += `<p class=\"w-100 p-5 text-white fs-5 text-center\">\"Everything we do is a celebration of food – from\nhow we source our food and shellfish to serving\nup new ways for you to enjoy it. Since 1968,\nwe’ve been committed to bringing you a\nfood experience you won’t find anywhere else. That's how we serve food Differently®\"</p>`;\n\nhomeContent.innerHTML += `<div class=\"w-100 row p-0 m-0 rounded-bottom bg-dark\">\n    <div class=\"col-6 p-5\">\n        <div class=\"p-5\">\n            <p class=\"fs-1 text-white\">Working Hours</p>\n            <p class=\"text-muted fs-3\">DINNER</p>\n            <p class=\"text-muted fs-5\">MON-THU 5:00PM – 10:00PM</p>\n            <p class=\"text-muted fs-5\">FRI – SAT   5:00PM – 10:30PM</p>\n            <p class=\"text-muted fs-5\">SUN             5:00PM – 10:00PM</p>\n        </div>\n    </div>\n    <div class=\"col-6 p-5\">\n        <div class=\"p-5\">\n            <p class=\"text-white fs-1\">Location</p>\n            <p class=\"text-muted fs-3\">1938 West 4th Avenue\n            Vancouver, BC V6J 1M5</p>\n        </div>\n    </div>\n</div>`;\n\nconst bottomnav = document.createElement('nav');\nbottomnav.classList.add('bg-dark', 'w-100', 'mt-2', 'mb-0', 'p-4');\nbottomnav.style.height = '100px';\nContent.appendChild(bottomnav);\n\nconst bottomcontainer = document.createElement('div');\nbottomcontainer.classList.add('container', 'd-flex','justify-content-center');\nbottomnav.appendChild(bottomcontainer);\n\nconst face = new Image();\nface.src = _facebook_png__WEBPACK_IMPORTED_MODULE_1__;\nface.classList.add('m-2');\nbottomcontainer.appendChild(face);\n\nconst twitter = new Image();\ntwitter.src = _twitter_png__WEBPACK_IMPORTED_MODULE_2__;\ntwitter.classList.add('m-2');\nbottomcontainer.appendChild(twitter);\n\nconst instagram = new Image();\ninstagram.src = _instagram_png__WEBPACK_IMPORTED_MODULE_3__;\ninstagram.classList.add('m-2');\nbottomcontainer.appendChild(instagram);\n\n\nbottomnav.innerHTML += `<p class=\"m-1 text-center bg-dark text-white\" >©2020 JAAR. All rights reserved. Powered by Twenty Twenty Advertising Inc.</p>`;\n\nmenuContent.innerHTML += `<div class=\"bg-dark w-100 row\">\n    <p class=\"text-white text-center tf-restaurant fs-1 col-12\">--------------------THE--------------------</p>\n    <p class=\"text-white text-center tf-restaurant fs-1 col-12 border-bottom pb-3\">MENU</p>\n    <div class=\"col-4 p-2 m-0\">\n        <div class=\"border-menu rounded-3 m-1\">\n            <p class=\"text-dark text-center m-0 p-1 bg-menu fs-3 tf-restaurant\">APPETIZER</p>\n            <div class=\"row\">\n                <p class=\"text-menu px-4 py-2 col-9 tf-restaurant\">GARLIC BREAD</p>\n                <p class=\"text-menu px-4 py-2 col-2 tf-restaurant\">5</p>\n                <p class=\"text-menu px-4 py-2 col-9 tf-restaurant\">CARPACCIO</p>\n                <p class=\"text-menu px-4 py-2 col-2 tf-restaurant\">7</p>\n                <p class=\"text-menu px-4 py-2 col-9 tf-restaurant\">OLIVES/CHIPS</p>\n                <p class=\"text-menu px-4 py-2 col-2 tf-restaurant\">5</p>\n            </div>\n        </div>\n\n        <div class=\"border-menu m-1 rounded-3\">\n            <p class=\"text-dark text-center m-0 p-1 bg-menu fs-3 tf-restaurant\">pasta</p>\n            <div class=\"row\">\n                <p class=\"text-menu px-4 py-2 col-9 tf-restaurant\">PASTA BOLOGNESE</p>\n                <p class=\"text-menu px-4 py-2 col-2 tf-restaurant\">15</p>\n                <p class=\"text-menu px-4 py-2 col-9 tf-restaurant\">ITALIAN RAVIOLI</p>\n                <p class=\"text-menu px-4 py-2 col-2 tf-restaurant\">15</p>\n                <p class=\"text-menu px-4 py-2 col-9 tf-restaurant\">PASTA CARBONARA</p>\n                <p class=\"text-menu px-4 py-2 col-2 tf-restaurant\">15</p>\n                <p class=\"text-menu px-4 py-2 col-9 tf-restaurant\">LASGANA</p>\n                <p class=\"text-menu px-4 py-2 col-2 tf-restaurant\">20</p>\n            </div>\n        </div>\n\n        <div class=\"bg-menu border-menu rounded-3 m-1\">\n            <p class=\"text-DARK tf-restaurant fs-8 text-center w-100 fw-bold\">open hour</p>\n            <p class=\"text-DARK tf-restaurant fs-8 text-center w-100 fw-bold\">5 to 10</p>\n            <p class=\"text-DARK tf-restaurant fs-8 text-center w-100 fw-bold\">pm</p>\n        </div>\n    </div>\n    <div class=\"col-8 p-2 row\">\n        \n        <div class=\"col-12 row m-0 p-0\">\n            <div class=\"border-menu p-0 m-1 rounded-3\">\n                <p class=\"text-menu text-center m-0 p-0 fs-3 tf-restaurant border-menu rounded-top\">OUR FAVORITE MENU/$22</p>\n                <p class=\"text-menu text-center m-2 p-0 fs-5 tf-restaurant\">steak minute</p>\n                <p class=\"text-menu text-center m-2 p-0 fs-5 tf-restaurant\">crispy chicken</p>\n                <p class=\"text-menu text-center m-2 p-0 fs-5 tf-restaurant\">whole grilled sea bass</p>\n            </div>\n        </div>\n\n        <div class=\"col-12 row m-0 p-0\">\n            <div class=\"col-6 p-1 m-0\">\n                <div class=\"border-menu p-0 m-0 rounded-3\">\n                    <p class=\"text-dark text-center m-0 p-3 bg-menu fs-3 tf-restaurant\">pizza</p>\n                    <div class=\"row\">\n                        <p class=\"text-menu px-4 py-2 col-9 tf-restaurant\">marguerita</p>\n                        <p class=\"text-menu px-4 py-2 col-2 tf-restaurant\">15</p>\n                        <p class=\"text-menu px-4 py-2 col-9 tf-restaurant\">porsciuto e funghi</p>\n                        <p class=\"text-menu px-4 py-2 col-2 tf-restaurant\">15</p>\n                        <p class=\"text-menu px-4 py-2 col-9 tf-restaurant\">bresaola</p>\n                        <p class=\"text-menu px-4 py-2 col-2 tf-restaurant\">15</p>\n                        <p class=\"text-menu px-4 py-2 col-9 tf-restaurant\">salsiccia e cipolla</p>\n                        <p class=\"text-menu px-4 py-2 col-2 tf-restaurant\">12</p>\n                        <p class=\"text-menu px-4 py-2 col-9 tf-restaurant\">vegetariana</p>\n                        <p class=\"text-menu px-4 py-2 col-2 tf-restaurant\">12</p>\n                    </div>\n                </div>\n\n                <div class=\"border-menu p-0 my-1 mx-0 rounded-3 row\">\n                    <p class=\"text-menu text-center m-0 p-2 fs-3 tf-restaurant border-menu rounded-top col-12\">burger</p>\n                    <p class=\"text-menu m-0 p-2 fs-5 tf-restaurant col-9\">cheese burger</p>\n                    <p class=\"text-menu px-4 py-2 col-2 tf-restaurant col-2\">10</p>\n                    <p class=\"text-menu m-0 p-2 fs-5 tf-restaurant col-9\">halloumi burger</p>\n                    <p class=\"text-menu px-4 py-2 col-2 tf-restaurant col-2\">10</p>\n                </div>\n            </div>\n\n            <div class=\"col-6 p-1 m-0\">\n                <div class=\"bg-menu border-menu rounded-3\">\n                    <p class=\"text-DARK p-1 m-0 col-9 tf-restaurant fs-8 text-center w-100 fw-bold\">BEST</p>\n                    <p class=\"text-DARK p-1 m-0 col-9 tf-restaurant fs-8 text-center w-100 fw-bold\">TASTE</p>\n                </div>\n\n                <div class=\"border-menu p-0 mx-0 my-1 rounded-3 row\">\n                    <p class=\"text-menu text-center text-vertical fs-3 m-0 p-1 tf-restaurant border-menu rounded-start col-2\">ice cream</p>\n                    <div class=\"col-10 row\">\n                        <p class=\"text-menu m-0 p-2 fs-6 tf-restaurant col-9\">bourbon vanilla</p>\n                        <p class=\"text-menu px-4 py-1 col-2 m-0 tf-restaurant col-2\">5</p>\n                        <p class=\"text-menu m-0 p-2 fs-6 tf-restaurant col-9\">chocolate cookie</p>\n                        <p class=\"text-menu px-4 py-1 col-2 m-0 tf-restaurant col-2\">5</p>\n                        <p class=\"text-menu m-0 p-2 fs-6 tf-restaurant col-9\">mango sorbet</p>\n                        <p class=\"text-menu px-4 py-1 col-2 m-0 tf-restaurant col-2\">5</p>\n                    </div>\n                </div>\n\n                <div class=\"border-menu p-0 mx-0 my-1 rounded-3 row\">\n                    <p class=\"text-menu text-center text-vertical fs-3 m-0 p-1 tf-restaurant border-menu rounded-start col-2\">fresh drink</p>\n                    <div class=\"col-10 row\">\n                        <p class=\"text-menu m-0 p-2 fs-6 tf-restaurant col-9\">very berry</p>\n                        <p class=\"text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2\">3</p>\n                        <p class=\"text-menu m-0 p-2 fs-6 tf-restaurant col-9\">cirtus peach</p>\n                        <p class=\"text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2\">3</p>\n                        <p class=\"text-menu m-0 p-2 fs-6 tf-restaurant col-9\">passion juice</p>\n                        <p class=\"text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2\">3</p>\n                        <p class=\"text-menu m-0 p-2 fs-6 tf-restaurant col-9\">fresh and fruity</p>\n                        <p class=\"text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2\">3</p>\n                        <p class=\"text-menu m-0 p-2 fs-6 tf-restaurant col-9\">pineapple paradise</p>\n                        <p class=\"text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2\">3</p>\n                        <p class=\"text-menu m-0 p-2 fs-6 tf-restaurant col-9\">ginger fizz</p>\n                        <p class=\"text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2\">3</p>\n                        <p class=\"text-menu m-0 p-2 fs-6 tf-restaurant col-9\">coffe shake</p>\n                        <p class=\"text-menu px-4 py-1 m-0 col-2 tf-restaurant col-2\">3</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n</div>`;\n\nconst contactTitlecontainer = document.createElement('div');\n\ncontactTitlecontainer.classList.add('contacttitleimage', 'position-relative', 'm-0', 'p-0', 'col-12');\n\ncontactContent.appendChild(contactTitlecontainer);\n\n\ncontactTitlecontainer.innerHTML += `<div class=\"position-absolute start-50 top-50 translate-middle\">\n    <p class=\"text-center text-white fs-5 m-0 mt-5\">Got a Question?</p>\n    <p class=\"text-dark fs-1 text-center tf-restaurant m-0\">Contact Us</p>\n    <p class=\"text-center fs-6 m-0\">We are here to help and asnwer any question you might have. We look forward to hear from you.</p>\n</div>`;\n\nconst contactinfocontainer = document.createElement('div');\ncontactContent.appendChild(contactinfocontainer);\n\ncontactinfocontainer.innerHTML += `<p class=\"text-center m-3 fs-4\">Click on any of the following links</p>`;\n\nconst contactinfo = document.createElement('div');\ncontactinfo.classList.add('w-100', 'bg-light', 'd-flex', 'justify-content-center','rounded', 'my-2');\ncontactinfocontainer.appendChild(contactinfo);\n\nconst link = document.createElement('a');\nlink.href = '#';\n\nconst gmaili = new Image();\ngmaili.classList.add('m-3');\ngmaili.src = _gmail_png__WEBPACK_IMPORTED_MODULE_4__;\nlink.appendChild(gmaili);\n\ncontactinfo.appendChild(link);\n\nconst facebookicon = new Image();\nfacebookicon.classList.add('m-3');\nfacebookicon.src = _facebookbig_png__WEBPACK_IMPORTED_MODULE_5__;\nlink.appendChild(facebookicon);\n\ncontactinfo.appendChild(link);\n\nconst twittericon = new Image();\ntwittericon.classList.add('m-3');\ntwittericon.src = _twitterbig_png__WEBPACK_IMPORTED_MODULE_6__;\nlink.appendChild(twittericon);\n\ncontactinfo.appendChild(link);\n\nconst instragramicon = new Image();\ninstragramicon.classList.add('m-3');\ninstragramicon.src = _instagrambig_png__WEBPACK_IMPORTED_MODULE_7__;\nlink.appendChild(instragramicon);\n\ncontactinfo.appendChild(link);\n\ncontactinfocontainer.innerHTML += `<p class=\"text-center m-3 fs-4\">Or contact us to</p>`;\n\nconst phonecontainer = document.createElement('div');\nphonecontainer.classList.add('d-flex','justify-content-center');\ncontactinfocontainer.appendChild(phonecontainer);\n\nconst telephonicon = new Image();\ntelephonicon.classList.add('m-3');\ntelephonicon.src = _telephone_png__WEBPACK_IMPORTED_MODULE_8__;\n\nphonecontainer.appendChild(telephonicon);\n\nphonecontainer.innerHTML += `<div class=\"d-flex flex-column\">\n    <p>Call the main office on:</p>\n    <p>1938 West 4th Avenue Vancouver, BC V6J 1M5</p>\n    <p>To number:</p>\n    <a class=\"link-info text-decoration-none\" href=\"#\">Tel. 555-5555-5555</a>\n</div>`;\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/page-elements.js?");

/***/ }),

/***/ "./src/telephone.png":
/*!***************************!*\
  !*** ./src/telephone.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"56c68937f972d4599443.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/telephone.png?");

/***/ }),

/***/ "./src/twitter.png":
/*!*************************!*\
  !*** ./src/twitter.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c034f6ca439dad7217e.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/twitter.png?");

/***/ }),

/***/ "./src/twitterbig.png":
/*!****************************!*\
  !*** ./src/twitterbig.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2532fb37dd68ec41b35d.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/twitterbig.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;