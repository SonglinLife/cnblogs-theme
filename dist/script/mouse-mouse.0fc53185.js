"use strict";(self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[]).push([["mouse-mouse"],{"./src/style/mouse.css":
/*!*****************************!*\
  !*** ./src/style/mouse.css ***!
  \*****************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cnblogs-theme/./src/style/mouse.css?")},"./src/components/mouse/mouse.js":
/*!***************************************!*\
  !*** ./src/components/mouse/mouse.js ***!
  \***************************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ main; }\n/* harmony export */ });\n/* harmony import */ var _style_mouse_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/mouse.css */ \"./src/style/mouse.css\");\n/* harmony import */ var gsap_dist_gsap_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/dist/gsap.min */ \"./node_modules/gsap/dist/gsap.min.js\");\n/* harmony import */ var gsap_dist_gsap_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap_min__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * UPDATES AND DOCS AT: https://github.com/wangyang0210\n * https://www.cnblogs.com/wangyang0210/\n * @author: WangYang, wangyang.0210@foxmail.com\n * @Date 2022-08-25 15:23\n * ----------------------------------------------\n * @describe: 鼠标移动/点击效果\n */\n\n\n\nfunction main(options) {\n    const cursor = document.createElement('div');\n    cursor.className = 'cursor';\n\n    const cursorF = document.createElement('div');\n    cursorF.className = 'cursor-f';\n\n    let cursorX = 0;\n    let cursorY = 0;\n    let pageX = 0;\n    let pageY = 0;\n    let size = options.size;\n    let sizeF = options.sizeF;\n    let followSpeed = .16;\n\n    document.body.appendChild(cursor);\n    document.body.appendChild(cursorF);\n\n    if ('ontouchstart' in window) {\n        cursor.style.display = 'none';\n        cursorF.style.display = 'none';\n    }\n\n    cursor.style.setProperty('--size', size + 'px');\n    cursorF.style.setProperty('--size', sizeF + 'px');\n\n    window.addEventListener('mousemove', function (e) {\n        pageX = e.pageX;\n        pageY = e.pageY;\n        cursor.style.top = pageY - size / 2 + 'px';\n        let cursorLeft  = pageX - size / 2;\n        let offsetWidth = document.body.offsetWidth;\n        cursorLeft = cursorLeft < 0 ? 0 : (\n            offsetWidth - size < cursorLeft ? offsetWidth - size : cursorLeft\n        );\n        cursor.style.left = cursorLeft + 'px';\n    });\n\n    function lerp(start, end, amount) {\n        return (1 - amount) * start + amount * end;\n    }\n\n    function loop() {\n        cursorX = lerp(cursorX, pageX, followSpeed);\n        cursorY = lerp(cursorY, pageY, followSpeed);\n        cursorF.style.top = cursorY - sizeF / 2 + 'px';\n        let cursorFLeft = cursorX - sizeF / 2;\n        let offsetWidth = document.body.offsetWidth;\n        cursorFLeft = cursorFLeft < 0 ? 0 : (\n            offsetWidth - sizeF < cursorFLeft ? offsetWidth - sizeF : cursorFLeft\n        );\n        cursorF.style.left = cursorFLeft + 'px';\n\n        requestAnimationFrame(loop);\n    }\n\n    loop();\n\n    let startY;\n    let endY;\n    let clicked = false;\n\n    function mousedown(e) {\n        gsap_dist_gsap_min__WEBPACK_IMPORTED_MODULE_1__.gsap.to(cursor, {scale: 4.5});\n        gsap_dist_gsap_min__WEBPACK_IMPORTED_MODULE_1__.gsap.to(cursorF, {scale: .4});\n\n        clicked = true;\n        startY = e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY;\n    }\n\n    function mouseup(e) {\n        gsap_dist_gsap_min__WEBPACK_IMPORTED_MODULE_1__.gsap.to(cursor, {scale: 1});\n        gsap_dist_gsap_min__WEBPACK_IMPORTED_MODULE_1__.gsap.to(cursorF, {scale: 1});\n\n        endY = e.clientY || endY;\n        if (clicked && startY && Math.abs(startY - endY) >= 40) {\n            clicked = false;\n            startY = null;\n            endY = null;\n        }\n    }\n\n    window.addEventListener('mousedown', mousedown, false);\n    window.addEventListener('touchstart', mousedown, false);\n    window.addEventListener('touchmove', function (e) {\n        if (clicked) endY = e.touches[0].clientY || e.targetTouches[0].clientY;\n    }, false);\n    window.addEventListener('touchend', mouseup, false);\n    window.addEventListener('mouseup', mouseup, false);\n}\n\n\n//# sourceURL=webpack://cnblogs-theme/./src/components/mouse/mouse.js?")}}]);