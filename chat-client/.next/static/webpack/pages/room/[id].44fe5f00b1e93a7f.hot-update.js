"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/room/[id]",{

/***/ "./src/component/Customer.js":
/*!***********************************!*\
  !*** ./src/component/Customer.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/sumin/Desktop/oa-chat/chat-client/src/component/Customer.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Customer = function Customer(_ref) {\n  _s();\n\n  var nowMessages = _ref.nowMessages,\n      comeMessage = _ref.comeMessage,\n      getMessages = _ref.getMessages,\n      userList = _ref.userList,\n      user = _ref.user;\n  var bottomRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); //console.log(\"messages\", messages);\n  //현재시간 구하기\n\n  var now = new Date();\n  var hours = now.getHours();\n  var minutes = now.getMinutes();\n  var ampm = hours >= 12 ? \"pm\" : \"am\";\n  var time = \"\".concat(hours, \":\").concat(minutes, \" \").concat(ampm); //채팅 입력하면 focus가 맨 아래로 맞춰짐\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    bottomRef.current.scrollIntoView({\n      scroll: \"smooth\"\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [getMessages.map(function (message, index) {\n          //받아온 시간 짜르기\n          var sended = message.sended;\n          var space = sended.split(\" \")[1];\n          var hours = space.split(\":\")[0];\n          var minutes = space.split(\":\")[1];\n          var time = \"\".concat(hours, \":\").concat(minutes, \" \").concat(ampm);\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              className: \"otherMsg\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"imgBox\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                  alt: \"profileImg\",\n                  src: \"/img/profile.jpeg\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 41,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"chatWrap\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                  className: \"profileName\",\n                  children: message.nick\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 44,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                  className: \"chatList\",\n                  children: message.chat\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 45,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                  className: \"time\",\n                  children: time\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 46,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 17\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 15\n          }, _this);\n        }), userList.map(function (user, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"users_notice\",\n            children: comeMessage === \"in\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              children: [user.nick, \"\\uB2D8\\uC774 \\uB4E4\\uC5B4\\uC624\\uC168\\uC2B5\\uB2C8\\uB2E4.\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 19\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 15\n          }, _this);\n        }), userList.map(function (user, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"users_notice\",\n            children: comeMessage === \"out\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              children: [user.nick, \"\\uB2D8\\uC774 \\uB098\\uAC00\\uC168\\uC2B5\\uB2C8\\uB2E4.\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 19\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 15\n          }, _this);\n        }), nowMessages.map(function (message, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              className: \"myMsg\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                  className: \"chatWrap\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                    className: \"chatList\",\n                    children: message.chat\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 79,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                    className: \"time\",\n                    children: time\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 80,\n                    columnNumber: 23\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 78,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 17\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 15\n          }, _this);\n        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          ref: bottomRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Customer, \"eaUWg0io6wE0buoFSqU1QLjVsUo=\");\n\n_c = Customer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Customer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Customer\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBREYsbUJBREY7QUFtRUQsQ0F6RkQ7O0dBQU1OOztLQUFBQTtBQTBGTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L0N1c3RvbWVyLmpzP2M2YmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ3VzdG9tZXIgPSAoe1xuICBub3dNZXNzYWdlcyxcbiAgY29tZU1lc3NhZ2UsXG4gIGdldE1lc3NhZ2VzLFxuICB1c2VyTGlzdCxcbiAgdXNlcixcbn0pID0+IHtcbiAgY29uc3QgYm90dG9tUmVmID0gdXNlUmVmKCk7XG5cbiAgLy9jb25zb2xlLmxvZyhcIm1lc3NhZ2VzXCIsIG1lc3NhZ2VzKTtcbiAgLy/tmITsnqzsi5zqsIQg6rWs7ZWY6riwXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpO1xuICBjb25zdCBhbXBtID0gaG91cnMgPj0gMTIgPyBcInBtXCIgOiBcImFtXCI7XG4gIGNvbnN0IHRpbWUgPSBgJHtob3Vyc306JHttaW51dGVzfSAke2FtcG19YDtcblxuICAvL+yxhO2MhSDsnoXroKXtlZjrqbQgZm9jdXPqsIAg66eoIOyVhOuemOuhnCDrp57strDsp5BcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBib3R0b21SZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IHNjcm9sbDogXCJzbW9vdGhcIiB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2dldE1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIC8v67Cb7JWE7JioIOyLnOqwhCDsp5zrpbTquLBcbiAgICAgICAgICAgIGNvbnN0IHNlbmRlZCA9IG1lc3NhZ2Uuc2VuZGVkO1xuICAgICAgICAgICAgY29uc3Qgc3BhY2UgPSBzZW5kZWQuc3BsaXQoXCIgXCIpWzFdO1xuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBzcGFjZS5zcGxpdChcIjpcIilbMF07XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gc3BhY2Uuc3BsaXQoXCI6XCIpWzFdO1xuICAgICAgICAgICAgY29uc3QgdGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9ICR7YW1wbX1gO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJNc2dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nQm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwicHJvZmlsZUltZ1wiIHNyYz1cIi9pbWcvcHJvZmlsZS5qcGVnXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNoYXRXcmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9maWxlTmFtZVwiPnttZXNzYWdlLm5pY2t9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNoYXRMaXN0XCI+e21lc3NhZ2UuY2hhdH08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGltZVwiPnt0aW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuXG4gICAgICAgICAge3VzZXJMaXN0Lm1hcCgodXNlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcnNfbm90aWNlXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAge2NvbWVNZXNzYWdlID09PSBcImluXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdj57dXNlci5uaWNrfeuLmOydtCDrk6TslrTsmKTshajsirXri4jri6QuPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIHt1c2VyTGlzdC5tYXAoKHVzZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzX25vdGljZVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIHtjb21lTWVzc2FnZSA9PT0gXCJvdXRcIiAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2Pnt1c2VyLm5pY2t964uY7J20IOuCmOqwgOyFqOyKteuLiOuLpC48L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG5cbiAgICAgICAgICB7bm93TWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15TXNnXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hhdFdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2hhdExpc3RcIj57bWVzc2FnZS5jaGF0fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRpbWVcIj57dGltZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8ZGl2IHJlZj17Ym90dG9tUmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIkN1c3RvbWVyIiwibm93TWVzc2FnZXMiLCJjb21lTWVzc2FnZSIsImdldE1lc3NhZ2VzIiwidXNlckxpc3QiLCJ1c2VyIiwiYm90dG9tUmVmIiwibm93IiwiRGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImFtcG0iLCJ0aW1lIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3Iiwic2Nyb2xsIiwibWFwIiwibWVzc2FnZSIsImluZGV4Iiwic2VuZGVkIiwic3BhY2UiLCJzcGxpdCIsIm5pY2siLCJjaGF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/component/Customer.js\n");

/***/ })

});