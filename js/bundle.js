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

/***/ "./src/scss/admin.scss":
/*!*****************************!*\
  !*** ./src/scss/admin.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tanya_zaricka/./src/scss/admin.scss?");

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

/***/ "./src/js/modules/admin.js":
/*!*********************************!*\
  !*** ./src/js/modules/admin.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ admin)\n/* harmony export */ });\nfunction admin() {\n\n    if (document.querySelector('#fieldImage')) {\n        const image = document.querySelector('#fieldImage');\n        const preview = document.querySelector('.field__preview');\n        console.log(image);\n\n\n        image.addEventListener('change', () => {\n            console.log(image)\n            updateFile(image.files[0])\n        })\n\n        function updateFile(file) {\n            // if(!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {\n            //     image.value = ''\n            //     return\n            // }\n\n            // if(file.size > 2 * 1024 * 1024) {\n            //     return\n            // }\n\n            let reader = new FileReader()\n            reader.onload = function (event) {\n                preview.innerHTML = `<img src='${event.target.result}' alt='Photo'>`\n            }\n            reader.onerror = function (event) { }\n            reader.readAsDataURL(file)\n        }\n\n\n        const tabs = document.querySelectorAll('.item'),\n            pages = document.querySelectorAll('.content__page');\n\n        pages.forEach(item => {\n            item.style.display = 'none';\n        })\n        pages[0].style.display = 'block'\n\n        tabsChange(tabs, pages, 'item')\n\n\n\n        function tabsChange(tabElements, bodyElements, activeClass) {\n            for (let i = 0; i < tabElements.length; i++) {\n                if (tabElements[i].classList.contains('_disabled')) {\n                } else {\n\n                    tabElements[i].addEventListener('click', (event) => {\n                        if (event.currentTarget.classList.contains(activeClass)) {\n                            tabElements.forEach(item => {\n                                removeActiveClass(item);\n                                bodyElements.forEach(item => {\n                                    item.style.display = 'none'\n                                })\n                            })\n                            addActiveClass(event.currentTarget);\n                            bodyElements[i].style.display = 'block';\n                        }\n                    })\n                }\n            }\n        }\n\n        function addActiveClass(element) {\n            element.classList.add('_active')\n        }\n\n        function removeActiveClass(element) {\n            element.classList.remove('_active')\n        }\n\n        const adminMenuBtn = document.querySelector('.panel__intro-button');\n        const adminPanel = document.querySelector('.panel');\n\n        adminMenuBtn.addEventListener('click', (event) => {\n            if (adminPanel.classList.contains('_active')) {\n                removeActiveClass(adminPanel);\n            } else {\n                addActiveClass(adminPanel);\n            }\n\n        })\n    }\n\n}\n\n//# sourceURL=webpack://tanya_zaricka/./src/js/modules/admin.js?");

/***/ }),

/***/ "./src/js/modules/burger_btn.js":
/*!**************************************!*\
  !*** ./src/js/modules/burger_btn.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ burgerBtn)\n/* harmony export */ });\nfunction burgerBtn() {\n\n    if (document.querySelector('.burger-btn')) {\n        const burgerBtn = document.querySelector('.burger-btn'),\n            menuList = document.querySelector('.nav');\n\n\n        burgerBtn.addEventListener('click', (e) => {\n            menuList.classList.toggle('_active');\n            document.body.classList.toggle('_lock');\n            burgerBtn.classList.toggle('_active');\n        })\n    }\n}\n\n//# sourceURL=webpack://tanya_zaricka/./src/js/modules/burger_btn.js?");

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ form)\n/* harmony export */ });\nfunction form() {\n\n  if(document.querySelector('.form')) {\n\n    const form = document.querySelector('.form')\n    const requiredFields = form.querySelectorAll('._require')   \n\n    form.addEventListener('submit', sendForm)\n\n    requiredFields.forEach(field => {\n        field.addEventListener('input', () => {\n            validateForm(field)\n        })\n    })\n\n    function sendForm(event) {\n        event.preventDefault()\n\n        requiredFields.forEach(field => {\n            validateForm(field)\n        })\n\n        const error = [...requiredFields].some(field => field.classList.contains('_error'))\n\n        if(!error) {\n\n            const formData = new FormData(form)\n            const json = Object.fromEntries(formData.entries())\n\n            const TOKEN = \"5565595935:AAFd9xVdnBHYxoQ3xS8XGOKAW_ECw2e036U\"\n            const CHAT_ID = \"-627104078\"\n            const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`\n\n            let message = `<b> Заявка с сайта! </b>\\n`\n            for(let key in json) {\n                if(json[key].trim()) {\n                    message += `<b> ${key}: ${json[key]}</b>\\n`\n                }\n            } \n\n            \n              axios.post(URL_API, {\n                chat_id: CHAT_ID,\n                parse_mode: 'html',\n                text: message\n            })\n            .finally(() => form.reset())\n        }\n    }\n\n    function validateForm(field) {\n        if(field.value.trim() === '') {\n            setError(field, 'It is field not by empty')\n        } else if(field.name === 'email') {\n            validateEmail(field, 'Incorected email!')\n        } else if(field.name === 'phone') {\n            validatePhone(field, 'Only numbers')\n        } else if(field.value.length <= 3) {\n            setError(field, 'his word must be greater than 3')\n        } else if(field.value.length >= 15) {\n            setError(field, 'This word must be less than 15')\n        } else {\n            setSuccess(field)\n        }\n    }\n\n    function setError(field, message) {\n        field.classList.add('_error')\n        field.nextElementSibling.textContent = message\n    }\n\n    function setSuccess(field) {\n        field.classList.remove('_error')\n        field.nextElementSibling.textContent = ''\n    }\n\n    function validateEmail(field, message) {\n        const regular = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/\n        !regular.test(field.value) ? setError(field, message) : setSuccess(field)\n    }\n\n    function validatePhone(field, message) {\n        field.value = field.value.replace(/\\D/g, '')\n        !field.value ? setError(field, message) : setSuccess(field)\n    }\n  }\n\n}\n    \n\n\n\n\n//# sourceURL=webpack://tanya_zaricka/./src/js/modules/form.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/reset.scss */ \"./src/scss/reset.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_portfolio_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/portfolio.scss */ \"./src/scss/portfolio.scss\");\n/* harmony import */ var _scss_variables_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/variables.scss */ \"./src/scss/variables.scss\");\n/* harmony import */ var _scss_about_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/about.scss */ \"./src/scss/about.scss\");\n/* harmony import */ var _scss_animations_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scss/animations.scss */ \"./src/scss/animations.scss\");\n/* harmony import */ var _scss_contacts_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/contacts.scss */ \"./src/scss/contacts.scss\");\n/* harmony import */ var _scss_mixins_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/mixins.scss */ \"./src/scss/mixins.scss\");\n/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scss/global.scss */ \"./src/scss/global.scss\");\n/* harmony import */ var _scss_admin_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scss/admin.scss */ \"./src/scss/admin.scss\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_burger_btn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/burger_btn */ \"./src/js/modules/burger_btn.js\");\n/* harmony import */ var _modules_admin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/admin */ \"./src/js/modules/admin.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/form */ \"./src/js/modules/form.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    'use strict'\n\n    ;(0,_modules_admin__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\n    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n    (0,_modules_burger_btn__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\n    (0,_modules_form__WEBPACK_IMPORTED_MODULE_13__[\"default\"])();\n})\n\n//# sourceURL=webpack://tanya_zaricka/./src/js/script.js?");

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