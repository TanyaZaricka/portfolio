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

/***/ "./src/scss/about.scss":
/*!*****************************!*\
  !*** ./src/scss/about.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tanya_zaricka/./src/scss/about.scss?");

/***/ }),

/***/ "./src/scss/animations.scss":
/*!**********************************!*\
  !*** ./src/scss/animations.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tanya_zaricka/./src/scss/animations.scss?");

/***/ }),

/***/ "./src/scss/contacts.scss":
/*!********************************!*\
  !*** ./src/scss/contacts.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tanya_zaricka/./src/scss/contacts.scss?");

/***/ }),

/***/ "./src/scss/global.scss":
/*!******************************!*\
  !*** ./src/scss/global.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tanya_zaricka/./src/scss/global.scss?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tanya_zaricka/./src/scss/main.scss?");

/***/ }),

/***/ "./src/scss/mixins.scss":
/*!******************************!*\
  !*** ./src/scss/mixins.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tanya_zaricka/./src/scss/mixins.scss?");

/***/ }),

/***/ "./src/scss/portfolio.scss":
/*!*********************************!*\
  !*** ./src/scss/portfolio.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tanya_zaricka/./src/scss/portfolio.scss?");

/***/ }),

/***/ "./src/scss/reset.scss":
/*!*****************************!*\
  !*** ./src/scss/reset.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tanya_zaricka/./src/scss/reset.scss?");

/***/ }),

/***/ "./src/scss/variables.scss":
/*!*********************************!*\
  !*** ./src/scss/variables.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tanya_zaricka/./src/scss/variables.scss?");

/***/ }),

/***/ "./src/js/modules/burger_btn.js":
/*!**************************************!*\
  !*** ./src/js/modules/burger_btn.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ burgerBtn)\n/* harmony export */ });\nfunction burgerBtn() {\n\n    const burgerBtn = document.querySelector('.burger-btn'),\n          menuList = document.querySelector('.nav');\n\n\n    burgerBtn.addEventListener('click', (e) => {\n        menuList.classList.toggle('_active');\n        document.body.classList.toggle('_lock');\n        burgerBtn.classList.toggle('_active');\n    })\n}\n\n//# sourceURL=webpack://tanya_zaricka/./src/js/modules/burger_btn.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ slider)\n/* harmony export */ });\nfunction slider() {\n    if(document.querySelector('.slider')) {\n        let slideIndex = 0\n\n    const slider = document.querySelector('.slider'),\n         wrapper = slider.querySelector('.slider__wrapper'),\n         arrowLeft = wrapper.querySelectorAll('.slider__arrow')[0],\n         arrowRight = wrapper.querySelectorAll('.slider__arrow')[1],\n         slides = wrapper.querySelectorAll('.slider__photo')\n    \n\n   function showSlides(index) {\n\n        if(index > slides.length - 1) {\n            slideIndex = 0\n        }\n        if(index < 0) {\n            slideIndex = slides.length - 1\n        }\n\n        slides.forEach(slide => {\n            slide.classList.add('hide')\n            slide.classList.remove('show', 'fade')\n        })\n        slides[slideIndex].classList.remove('hide')\n        slides[slideIndex].classList.add('show', 'fade')\n   }\n\n   arrowLeft.addEventListener('click', () => showSlides(++slideIndex))\n   arrowRight.addEventListener('click', () => showSlides(--slideIndex))\n\n   showSlides(slideIndex)\n    }\n}   \n\n\n//# sourceURL=webpack://tanya_zaricka/./src/js/modules/slider.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/reset.scss */ \"./src/scss/reset.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_portfolio_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/portfolio.scss */ \"./src/scss/portfolio.scss\");\n/* harmony import */ var _scss_variables_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/variables.scss */ \"./src/scss/variables.scss\");\n/* harmony import */ var _scss_about_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/about.scss */ \"./src/scss/about.scss\");\n/* harmony import */ var _scss_animations_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scss/animations.scss */ \"./src/scss/animations.scss\");\n/* harmony import */ var _scss_contacts_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/contacts.scss */ \"./src/scss/contacts.scss\");\n/* harmony import */ var _scss_mixins_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/mixins.scss */ \"./src/scss/mixins.scss\");\n/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scss/global.scss */ \"./src/scss/global.scss\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_burger_btn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger_btn */ \"./src/js/modules/burger_btn.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    'use strict'\n\n    ;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n    (0,_modules_burger_btn__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n})\n\n//# sourceURL=webpack://tanya_zaricka/./src/js/script.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;