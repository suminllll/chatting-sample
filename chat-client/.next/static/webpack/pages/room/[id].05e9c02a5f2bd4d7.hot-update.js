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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/sumin/Desktop/chatting/chat-client/src/component/Customer.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Customer = function Customer(_ref) {\n  _s();\n\n  var messages = _ref.messages,\n      time = _ref.time,\n      NoticeMessage = _ref.NoticeMessage;\n  var bottomRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); //채팅 입력하면 focus가 맨 아래로 맞춰짐\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    bottomRef.current.scrollIntoView({\n      scroll: \"smooth\"\n    });\n  }, [messages.length]);\n\n  var Chat = function Chat(_ref2) {\n    var key = _ref2.key,\n        className = _ref2.className,\n        nick = _ref2.nick,\n        time = _ref2.time,\n        chat = _ref2.chat;\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: className ? \"talk_myChatWrap\" : \"otherMsg\",\n      children: [!className && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"imgBox\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n          alt: \"profileImg\",\n          src: \"/img/profile.jpeg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: className ? \"talk_myChatWrap\" : \"talk_chatWrap\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n          children: [!className && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n            className: \"profileName\",\n            children: nick\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 28\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n            className: \"talk_chatList\",\n            children: chat\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n            className: \"time\",\n            children: time\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this)]\n    }, key, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, _this);\n  };\n\n  console.log(\"messages\", messages.isMyMessage);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [messages && messages.map(function (message, index) {\n      return message.type === \"SYSTEM_USER_IN\" || message.type === \"SYSTEM_USER_OUT\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NoticeMessage, {\n        contents: message.content\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 13\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Chat, {\n        className: message.isMyMessage,\n        nick: message.nick,\n        chat: message.chat,\n        time: time\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 13\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      ref: bottomRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Customer, \"eaUWg0io6wE0buoFSqU1QLjVsUo=\");\n\n_c = Customer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Customer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Customer\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNSjs7S0FBQUE7QUFnRE4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9DdXN0b21lci5qcz9jNmJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEN1c3RvbWVyID0gKHsgbWVzc2FnZXMsIHRpbWUsIE5vdGljZU1lc3NhZ2UgfSkgPT4ge1xuICBjb25zdCBib3R0b21SZWYgPSB1c2VSZWYoKTtcblxuICAvL+yxhO2MhSDsnoXroKXtlZjrqbQgZm9jdXPqsIAg66eoIOyVhOuemOuhnCDrp57strDsp5BcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBib3R0b21SZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IHNjcm9sbDogXCJzbW9vdGhcIiB9KTtcbiAgfSwgW21lc3NhZ2VzLmxlbmd0aF0pO1xuXG4gIGNvbnN0IENoYXQgPSAoeyBrZXksIGNsYXNzTmFtZSwgbmljaywgdGltZSwgY2hhdCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lID8gXCJ0YWxrX215Q2hhdFdyYXBcIiA6IFwib3RoZXJNc2dcIn0+XG4gICAgICAgIHshY2xhc3NOYW1lICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ0JveFwiPlxuICAgICAgICAgICAgPGltZyBhbHQ9XCJwcm9maWxlSW1nXCIgc3JjPVwiL2ltZy9wcm9maWxlLmpwZWdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lID8gXCJ0YWxrX215Q2hhdFdyYXBcIiA6IFwidGFsa19jaGF0V3JhcFwifT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7IWNsYXNzTmFtZSAmJiA8bGkgY2xhc3NOYW1lPVwicHJvZmlsZU5hbWVcIj57bmlja308L2xpPn1cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWxrX2NoYXRMaXN0XCI+e2NoYXR9PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0aW1lXCI+e3RpbWV9PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIGNvbnNvbGUubG9nKFwibWVzc2FnZXNcIiwgbWVzc2FnZXMuaXNNeU1lc3NhZ2UpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bWVzc2FnZXMgJiZcbiAgICAgICAgbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT5cbiAgICAgICAgICBtZXNzYWdlLnR5cGUgPT09IFwiU1lTVEVNX1VTRVJfSU5cIiB8fFxuICAgICAgICAgIG1lc3NhZ2UudHlwZSA9PT0gXCJTWVNURU1fVVNFUl9PVVRcIiA/IChcbiAgICAgICAgICAgIDxOb3RpY2VNZXNzYWdlIGtleT17aW5kZXh9IGNvbnRlbnRzPXttZXNzYWdlLmNvbnRlbnR9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxDaGF0XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17bWVzc2FnZS5pc015TWVzc2FnZX1cbiAgICAgICAgICAgICAgbmljaz17bWVzc2FnZS5uaWNrfVxuICAgICAgICAgICAgICBjaGF0PXttZXNzYWdlLmNoYXR9XG4gICAgICAgICAgICAgIHRpbWU9e3RpbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDxkaXYgcmVmPXtib3R0b21SZWZ9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXI7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiQ3VzdG9tZXIiLCJtZXNzYWdlcyIsInRpbWUiLCJOb3RpY2VNZXNzYWdlIiwiYm90dG9tUmVmIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3Iiwic2Nyb2xsIiwibGVuZ3RoIiwiQ2hhdCIsImtleSIsImNsYXNzTmFtZSIsIm5pY2siLCJjaGF0IiwiY29uc29sZSIsImxvZyIsImlzTXlNZXNzYWdlIiwibWFwIiwibWVzc2FnZSIsImluZGV4IiwidHlwZSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/component/Customer.js\n");

/***/ })

});