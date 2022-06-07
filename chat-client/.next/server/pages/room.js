"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/room";
exports.ids = ["pages/room"];
exports.modules = {

/***/ "./pages/room/index.js":
/*!*****************************!*\
  !*** ./pages/room/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ room)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_commons_httpRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/commons/httpRequest */ \"./src/commons/httpRequest.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_hooks_useGuard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/hooks/useGuard */ \"./src/hooks/useGuard.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/sumin/Desktop/chatting/chat-client/pages/room/index.js\";\n\n\n\n\n\n\nfunction room() {\n  const route = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  const {\n    user\n  } = (0,_src_hooks_useGuard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  const {\n    0: rooms,\n    1: setRooms\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const {\n    0: roomName,\n    1: setRoomName\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    (0,_src_commons_httpRequest__WEBPACK_IMPORTED_MODULE_1__.httpRequest)(\"GET\", `/rooms`).then(res => {\n      setRooms(res.data);\n    });\n  }, []);\n  const handleLogout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {\n    await (0,_src_commons_httpRequest__WEBPACK_IMPORTED_MODULE_1__.httpRequest)(\"POST\", `/login/logout`);\n    route.replace(\"/\");\n  }, []); //버튼 누르면 해당 채팅방 정보가 info에 담기고 해당 채팅방으로 넘어간다\n\n  const handleRoom = data => {\n    route.replace(`/room/${data.room_no}`);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"helloNick\",\n        children: `반갑습니다 ${user === null || user === void 0 ? void 0 : user.nick}님.`\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n        onClick: handleLogout,\n        children: \"Logout\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"buttonWrap\",\n      children: rooms.map(room => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n            className: \"roomButton\",\n            onClick: () => handleRoom(room),\n            children: room.room_title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 15\n          }, this)\n        }, room.room_no, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yb29tL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRWUsU0FBU00sSUFBVCxHQUFnQjtBQUM3QixRQUFNQyxLQUFLLEdBQUdILHNEQUFTLEVBQXZCO0FBQ0EsUUFBTTtBQUFFSSxJQUFBQTtBQUFGLE1BQVdILCtEQUFRLEVBQXpCO0FBQ0EsUUFBTTtBQUFBLE9BQUNJLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1UsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJYLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUVBRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZEcsSUFBQUEscUVBQVcsQ0FBQyxLQUFELEVBQVMsUUFBVCxDQUFYLENBQTZCVSxJQUE3QixDQUFtQ0MsR0FBRCxJQUFTO0FBQ3pDSixNQUFBQSxRQUFRLENBQUNJLEdBQUcsQ0FBQ0MsSUFBTCxDQUFSO0FBQ0QsS0FGRDtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxRQUFNQyxZQUFZLEdBQUdkLGtEQUFXLENBQUMsWUFBWTtBQUMzQyxVQUFNQyxxRUFBVyxDQUFDLE1BQUQsRUFBVSxlQUFWLENBQWpCO0FBQ0FJLElBQUFBLEtBQUssQ0FBQ1UsT0FBTixDQUFjLEdBQWQ7QUFDRCxHQUgrQixFQUc3QixFQUg2QixDQUFoQyxDQVo2QixDQWlCN0I7O0FBQ0EsUUFBTUMsVUFBVSxHQUFJSCxJQUFELElBQVU7QUFDM0JSLElBQUFBLEtBQUssQ0FBQ1UsT0FBTixDQUFlLFNBQVFGLElBQUksQ0FBQ0ksT0FBUSxFQUFwQztBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxrQkFBNkIsU0FBUVgsSUFBVCxhQUFTQSxJQUFULHVCQUFTQSxJQUFJLENBQUVZLElBQUs7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBUSxlQUFPLEVBQUVKLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsZ0JBQ0dQLEtBQUssQ0FBQ1ksR0FBTixDQUFXZixJQUFELElBQVU7QUFDbkIsNEJBQ0U7QUFBQSxpQ0FDRTtBQUFRLHFCQUFTLEVBQUMsWUFBbEI7QUFBK0IsbUJBQU8sRUFBRSxNQUFNWSxVQUFVLENBQUNaLElBQUQsQ0FBeEQ7QUFBQSxzQkFDR0EsSUFBSSxDQUFDZ0I7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBVWhCLElBQUksQ0FBQ2EsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBT0QsT0FSQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBLGtCQURGO0FBbUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1jbGllbnQvLi9wYWdlcy9yb29tL2luZGV4LmpzPzE0ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGh0dHBSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL3NyYy9jb21tb25zL2h0dHBSZXF1ZXN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHVzZUd1YXJkIGZyb20gXCIuLi8uLi9zcmMvaG9va3MvdXNlR3VhcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm9vbSgpIHtcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VHdWFyZCgpO1xuICBjb25zdCBbcm9vbXMsIHNldFJvb21zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Jvb21OYW1lLCBzZXRSb29tTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGh0dHBSZXF1ZXN0KFwiR0VUXCIsIGAvcm9vbXNgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHNldFJvb21zKHJlcy5kYXRhKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBodHRwUmVxdWVzdChcIlBPU1RcIiwgYC9sb2dpbi9sb2dvdXRgKTtcbiAgICByb3V0ZS5yZXBsYWNlKFwiL1wiKTtcbiAgfSwgW10pO1xuXG4gIC8v67KE7Yq8IOuIhOultOuptCDtlbTri7kg7LGE7YyF67CpIOygleuztOqwgCBpbmZv7JeQIOuLtOq4sOqzoCDtlbTri7kg7LGE7YyF67Cp7Jy866GcIOuEmOyWtOqwhOuLpFxuICBjb25zdCBoYW5kbGVSb29tID0gKGRhdGEpID0+IHtcbiAgICByb3V0ZS5yZXBsYWNlKGAvcm9vbS8ke2RhdGEucm9vbV9ub31gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbGxvTmlja1wiPntg67CY6rCR7Iq164uI64ukICR7dXNlcj8ubmlja33ri5guYH08L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbldyYXBcIj5cbiAgICAgICAge3Jvb21zLm1hcCgocm9vbSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cm9vbS5yb29tX25vfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyb29tQnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlUm9vbShyb29tKX0+XG4gICAgICAgICAgICAgICAge3Jvb20ucm9vbV90aXRsZX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJodHRwUmVxdWVzdCIsInVzZVJvdXRlciIsInVzZUd1YXJkIiwicm9vbSIsInJvdXRlIiwidXNlciIsInJvb21zIiwic2V0Um9vbXMiLCJyb29tTmFtZSIsInNldFJvb21OYW1lIiwidGhlbiIsInJlcyIsImRhdGEiLCJoYW5kbGVMb2dvdXQiLCJyZXBsYWNlIiwiaGFuZGxlUm9vbSIsInJvb21fbm8iLCJuaWNrIiwibWFwIiwicm9vbV90aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/room/index.js\n");

/***/ }),

/***/ "./src/commons/convertResult.js":
/*!**************************************!*\
  !*** ./src/commons/convertResult.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ convertResult)\n/* harmony export */ });\nfunction convertResult(type, result) {\n  if (type === \"response\") {\n    const status = result.status;\n    const data = result.data;\n\n    let _response;\n\n    switch (status) {\n      case 200:\n        // 데이터 리턴\n        _response = {\n          success: true,\n          data: data.data,\n          total: data.total,\n          page_num: data.page_num\n        };\n        break;\n\n      case 201:\n        // insert_id 리턴\n        _response = {\n          success: true,\n          data: data.insert_id\n        };\n        break;\n\n      case 204:\n        _response = {\n          success: true,\n          data: data\n        };\n        break;\n\n      default:\n        break;\n    }\n\n    return _response;\n  } else if (type === \"error\") {\n    if (result.response === undefined) {\n      return {\n        success: false,\n        data: result\n      };\n    }\n\n    const status = result.response.status;\n    const data = result.response.data;\n\n    switch (status) {\n      case 401:\n        alert(\"로그인이 필요해요\");\n        window.location.replace(\"/\");\n        break;\n\n      case 403:\n        alert(\"권한이 없어요\");\n        window.location.replace(\"/\");\n        break;\n\n      case 404:\n        if (data.message === \"NFA\") {\n          // 요청이 잘못 됨\n          alert(\"잘못된 요청이에요\");\n        } else if (data.message === \"NFD\") {// 요청한 데이터가 없음\n        }\n\n        break;\n\n      case 500:\n        if (data === \"요청이 너무 많습니다.\") {}\n\n        break;\n\n      default:\n        break;\n    }\n\n    return {\n      success: false,\n      data: data\n    };\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9ucy9jb252ZXJ0UmVzdWx0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxhQUFULENBQXVCQyxJQUF2QixFQUE2QkMsTUFBN0IsRUFBcUM7QUFDbEQsTUFBSUQsSUFBSSxLQUFLLFVBQWIsRUFBeUI7QUFDdkIsVUFBTUUsTUFBTSxHQUFHRCxNQUFNLENBQUNDLE1BQXRCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHRixNQUFNLENBQUNFLElBQXBCOztBQUVBLFFBQUlDLFNBQUo7O0FBQ0EsWUFBUUYsTUFBUjtBQUNFLFdBQUssR0FBTDtBQUFVO0FBQ1JFLFFBQUFBLFNBQVMsR0FBRztBQUNWQyxVQUFBQSxPQUFPLEVBQUUsSUFEQztBQUVWRixVQUFBQSxJQUFJLEVBQUVBLElBQUksQ0FBQ0EsSUFGRDtBQUdWRyxVQUFBQSxLQUFLLEVBQUVILElBQUksQ0FBQ0csS0FIRjtBQUlWQyxVQUFBQSxRQUFRLEVBQUVKLElBQUksQ0FBQ0k7QUFKTCxTQUFaO0FBTUE7O0FBQ0YsV0FBSyxHQUFMO0FBQVU7QUFDUkgsUUFBQUEsU0FBUyxHQUFHO0FBQUVDLFVBQUFBLE9BQU8sRUFBRSxJQUFYO0FBQWlCRixVQUFBQSxJQUFJLEVBQUVBLElBQUksQ0FBQ0s7QUFBNUIsU0FBWjtBQUNBOztBQUNGLFdBQUssR0FBTDtBQUNFSixRQUFBQSxTQUFTLEdBQUc7QUFBRUMsVUFBQUEsT0FBTyxFQUFFLElBQVg7QUFBaUJGLFVBQUFBLElBQUksRUFBRUE7QUFBdkIsU0FBWjtBQUNBOztBQUNGO0FBQ0U7QUFoQko7O0FBbUJBLFdBQU9DLFNBQVA7QUFDRCxHQXpCRCxNQXlCTyxJQUFJSixJQUFJLEtBQUssT0FBYixFQUFzQjtBQUMzQixRQUFJQyxNQUFNLENBQUNRLFFBQVAsS0FBb0JDLFNBQXhCLEVBQW1DO0FBQ2pDLGFBQU87QUFBRUwsUUFBQUEsT0FBTyxFQUFFLEtBQVg7QUFBa0JGLFFBQUFBLElBQUksRUFBRUY7QUFBeEIsT0FBUDtBQUNEOztBQUVELFVBQU1DLE1BQU0sR0FBR0QsTUFBTSxDQUFDUSxRQUFQLENBQWdCUCxNQUEvQjtBQUNBLFVBQU1DLElBQUksR0FBR0YsTUFBTSxDQUFDUSxRQUFQLENBQWdCTixJQUE3Qjs7QUFFQSxZQUFRRCxNQUFSO0FBQ0UsV0FBSyxHQUFMO0FBQ0VTLFFBQUFBLEtBQUssQ0FBQyxXQUFELENBQUw7QUFDQUMsUUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QixHQUF4QjtBQUNBOztBQUNGLFdBQUssR0FBTDtBQUNFSCxRQUFBQSxLQUFLLENBQUMsU0FBRCxDQUFMO0FBQ0FDLFFBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsR0FBeEI7QUFDQTs7QUFDRixXQUFLLEdBQUw7QUFDRSxZQUFJWCxJQUFJLENBQUNZLE9BQUwsS0FBaUIsS0FBckIsRUFBNEI7QUFDMUI7QUFDQUosVUFBQUEsS0FBSyxDQUFDLFdBQUQsQ0FBTDtBQUNELFNBSEQsTUFHTyxJQUFJUixJQUFJLENBQUNZLE9BQUwsS0FBaUIsS0FBckIsRUFBNEIsQ0FDakM7QUFDRDs7QUFDRDs7QUFDRixXQUFLLEdBQUw7QUFDRSxZQUFJWixJQUFJLEtBQUssY0FBYixFQUE2QixDQUM1Qjs7QUFDRDs7QUFDRjtBQUNFO0FBdEJKOztBQXlCQSxXQUFPO0FBQUVFLE1BQUFBLE9BQU8sRUFBRSxLQUFYO0FBQWtCRixNQUFBQSxJQUFJLEVBQUVBO0FBQXhCLEtBQVA7QUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1jbGllbnQvLi9zcmMvY29tbW9ucy9jb252ZXJ0UmVzdWx0LmpzPzBmYzkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udmVydFJlc3VsdCh0eXBlLCByZXN1bHQpIHtcbiAgaWYgKHR5cGUgPT09IFwicmVzcG9uc2VcIikge1xuICAgIGNvbnN0IHN0YXR1cyA9IHJlc3VsdC5zdGF0dXM7XG4gICAgY29uc3QgZGF0YSA9IHJlc3VsdC5kYXRhO1xuXG4gICAgbGV0IF9yZXNwb25zZTtcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSAyMDA6IC8vIOuNsOydtO2EsCDrpqzthLRcbiAgICAgICAgX3Jlc3BvbnNlID0ge1xuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgZGF0YTogZGF0YS5kYXRhLFxuICAgICAgICAgIHRvdGFsOiBkYXRhLnRvdGFsLFxuICAgICAgICAgIHBhZ2VfbnVtOiBkYXRhLnBhZ2VfbnVtLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjAxOiAvLyBpbnNlcnRfaWQg66as7YS0XG4gICAgICAgIF9yZXNwb25zZSA9IHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZGF0YS5pbnNlcnRfaWQgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDIwNDpcbiAgICAgICAgX3Jlc3BvbnNlID0geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXNwb25zZTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImVycm9yXCIpIHtcbiAgICBpZiAocmVzdWx0LnJlc3BvbnNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiByZXN1bHQgfTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0dXMgPSByZXN1bHQucmVzcG9uc2Uuc3RhdHVzO1xuICAgIGNvbnN0IGRhdGEgPSByZXN1bHQucmVzcG9uc2UuZGF0YTtcblxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICBjYXNlIDQwMTpcbiAgICAgICAgYWxlcnQoXCLroZzqt7jsnbjsnbQg7ZWE7JqU7ZW07JqUXCIpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi9cIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0MDM6XG4gICAgICAgIGFsZXJ0KFwi6raM7ZWc7J20IOyXhuyWtOyalFwiKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDA0OlxuICAgICAgICBpZiAoZGF0YS5tZXNzYWdlID09PSBcIk5GQVwiKSB7XG4gICAgICAgICAgLy8g7JqU7LKt7J20IOyemOuquyDrkKhcbiAgICAgICAgICBhbGVydChcIuyemOuqu+uQnCDsmpTssq3snbTsl5DsmpRcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5tZXNzYWdlID09PSBcIk5GRFwiKSB7XG4gICAgICAgICAgLy8g7JqU7LKt7ZWcIOuNsOydtO2EsOqwgCDsl4bsnYxcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTAwOlxuICAgICAgICBpZiAoZGF0YSA9PT0gXCLsmpTssq3snbQg64SI66y0IOunjuyKteuLiOuLpC5cIikge1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IGRhdGEgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNvbnZlcnRSZXN1bHQiLCJ0eXBlIiwicmVzdWx0Iiwic3RhdHVzIiwiZGF0YSIsIl9yZXNwb25zZSIsInN1Y2Nlc3MiLCJ0b3RhbCIsInBhZ2VfbnVtIiwiaW5zZXJ0X2lkIiwicmVzcG9uc2UiLCJ1bmRlZmluZWQiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/commons/convertResult.js\n");

/***/ }),

/***/ "./src/commons/httpRequest.js":
/*!************************************!*\
  !*** ./src/commons/httpRequest.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"httpRequest\": () => (/* binding */ httpRequest)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _convertResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convertResult */ \"./src/commons/convertResult.js\");\n\n\nasync function httpRequest(_method, _url, _data, _config) {\n  let result; // 전역 설정\n\n  (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = \"http://localhost:8000\";\n  (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = true;\n  (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.crossDomain) = true;\n\n  switch (_method) {\n    case \"GET\":\n      result = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(_url, _config).then(response => {\n        return (0,_convertResult__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"response\", response);\n      }).catch(error => {\n        return (0,_convertResult__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"error\", error);\n      });\n      break;\n\n    case \"POST\":\n      result = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_url, _data, _config).then(response => {\n        return (0,_convertResult__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"response\", response);\n      }).catch(error => {\n        return (0,_convertResult__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"error\", error);\n      });\n      break;\n\n    case \"PUT\":\n      result = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(_url, _data, _config).then(response => {\n        return (0,_convertResult__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"response\", response);\n      }).catch(error => {\n        return (0,_convertResult__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"error\", error);\n      });\n      break;\n\n    case \"DELETE\":\n      result = await axios__WEBPACK_IMPORTED_MODULE_0___default()[\"delete\"](_url, _config).then(response => {\n        return (0,_convertResult__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"response\", response);\n      }).catch(error => {\n        return (0,_convertResult__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"error\", error);\n      });\n      break;\n\n    default:\n      result = {\n        success: false,\n        data: \"Request Method Error\"\n      };\n      break;\n  }\n\n  return result;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9ucy9odHRwUmVxdWVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVPLGVBQWVFLFdBQWYsQ0FBMkJDLE9BQTNCLEVBQW9DQyxJQUFwQyxFQUEwQ0MsS0FBMUMsRUFBaURDLE9BQWpELEVBQTBEO0FBQy9ELE1BQUlDLE1BQUosQ0FEK0QsQ0FHL0Q7O0FBQ0FQLEVBQUFBLCtEQUFBLEdBQXlCLHVCQUF6QjtBQUNBQSxFQUFBQSx1RUFBQSxHQUFpQyxJQUFqQztBQUNBQSxFQUFBQSxtRUFBQSxHQUE2QixJQUE3Qjs7QUFFQSxVQUFRRyxPQUFSO0FBQ0UsU0FBSyxLQUFMO0FBQ0VJLE1BQUFBLE1BQU0sR0FBRyxNQUFNUCxnREFBQSxDQUNSSSxJQURRLEVBQ0ZFLE9BREUsRUFFWk8sSUFGWSxDQUVOQyxRQUFELElBQWM7QUFDbEIsZUFBT2IsMERBQWEsQ0FBQyxVQUFELEVBQWFhLFFBQWIsQ0FBcEI7QUFDRCxPQUpZLEVBS1pDLEtBTFksQ0FLTEMsS0FBRCxJQUFXO0FBQ2hCLGVBQU9mLDBEQUFhLENBQUMsT0FBRCxFQUFVZSxLQUFWLENBQXBCO0FBQ0QsT0FQWSxDQUFmO0FBU0E7O0FBQ0YsU0FBSyxNQUFMO0FBQ0VULE1BQUFBLE1BQU0sR0FBRyxNQUFNUCxpREFBQSxDQUNQSSxJQURPLEVBQ0RDLEtBREMsRUFDTUMsT0FETixFQUVaTyxJQUZZLENBRU5DLFFBQUQsSUFBYztBQUNsQixlQUFPYiwwREFBYSxDQUFDLFVBQUQsRUFBYWEsUUFBYixDQUFwQjtBQUNELE9BSlksRUFLWkMsS0FMWSxDQUtMQyxLQUFELElBQVc7QUFDaEIsZUFBT2YsMERBQWEsQ0FBQyxPQUFELEVBQVVlLEtBQVYsQ0FBcEI7QUFDRCxPQVBZLENBQWY7QUFRQTs7QUFDRixTQUFLLEtBQUw7QUFDRVQsTUFBQUEsTUFBTSxHQUFHLE1BQU1QLGdEQUFBLENBQ1JJLElBRFEsRUFDRkMsS0FERSxFQUNLQyxPQURMLEVBRVpPLElBRlksQ0FFTkMsUUFBRCxJQUFjO0FBQ2xCLGVBQU9iLDBEQUFhLENBQUMsVUFBRCxFQUFhYSxRQUFiLENBQXBCO0FBQ0QsT0FKWSxFQUtaQyxLQUxZLENBS0xDLEtBQUQsSUFBVztBQUNoQixlQUFPZiwwREFBYSxDQUFDLE9BQUQsRUFBVWUsS0FBVixDQUFwQjtBQUNELE9BUFksQ0FBZjtBQVFBOztBQUNGLFNBQUssUUFBTDtBQUNFVCxNQUFBQSxNQUFNLEdBQUcsTUFBTVAsc0RBQUEsQ0FDTEksSUFESyxFQUNDRSxPQURELEVBRVpPLElBRlksQ0FFTkMsUUFBRCxJQUFjO0FBQ2xCLGVBQU9iLDBEQUFhLENBQUMsVUFBRCxFQUFhYSxRQUFiLENBQXBCO0FBQ0QsT0FKWSxFQUtaQyxLQUxZLENBS0xDLEtBQUQsSUFBVztBQUNoQixlQUFPZiwwREFBYSxDQUFDLE9BQUQsRUFBVWUsS0FBVixDQUFwQjtBQUNELE9BUFksQ0FBZjtBQVFBOztBQUNGO0FBQ0VULE1BQUFBLE1BQU0sR0FBRztBQUFFYSxRQUFBQSxPQUFPLEVBQUUsS0FBWDtBQUFrQkMsUUFBQUEsSUFBSSxFQUFFO0FBQXhCLE9BQVQ7QUFDQTtBQTVDSjs7QUErQ0EsU0FBT2QsTUFBUDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1jbGllbnQvLi9zcmMvY29tbW9ucy9odHRwUmVxdWVzdC5qcz9jZTE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBjb252ZXJ0UmVzdWx0IGZyb20gXCIuL2NvbnZlcnRSZXN1bHRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGh0dHBSZXF1ZXN0KF9tZXRob2QsIF91cmwsIF9kYXRhLCBfY29uZmlnKSB7XG4gIGxldCByZXN1bHQ7XG5cbiAgLy8g7KCE7JetIOyEpOyglVxuICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIjtcbiAgYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgYXhpb3MuZGVmYXVsdHMuY3Jvc3NEb21haW4gPSB0cnVlO1xuXG4gIHN3aXRjaCAoX21ldGhvZCkge1xuICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGF4aW9zXG4gICAgICAgIC5nZXQoX3VybCwgX2NvbmZpZylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbnZlcnRSZXN1bHQoXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZXR1cm4gY29udmVydFJlc3VsdChcImVycm9yXCIsIGVycm9yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICByZXN1bHQgPSBhd2FpdCBheGlvc1xuICAgICAgICAucG9zdChfdXJsLCBfZGF0YSwgX2NvbmZpZylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbnZlcnRSZXN1bHQoXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZXR1cm4gY29udmVydFJlc3VsdChcImVycm9yXCIsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFVUXCI6XG4gICAgICByZXN1bHQgPSBhd2FpdCBheGlvc1xuICAgICAgICAucHV0KF91cmwsIF9kYXRhLCBfY29uZmlnKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gY29udmVydFJlc3VsdChcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJldHVybiBjb252ZXJ0UmVzdWx0KFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJERUxFVEVcIjpcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGF4aW9zXG4gICAgICAgIC5kZWxldGUoX3VybCwgX2NvbmZpZylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbnZlcnRSZXN1bHQoXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZXR1cm4gY29udmVydFJlc3VsdChcImVycm9yXCIsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzdWx0ID0geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogXCJSZXF1ZXN0IE1ldGhvZCBFcnJvclwiIH07XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJjb252ZXJ0UmVzdWx0IiwiaHR0cFJlcXVlc3QiLCJfbWV0aG9kIiwiX3VybCIsIl9kYXRhIiwiX2NvbmZpZyIsInJlc3VsdCIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsImNyb3NzRG9tYWluIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsInBvc3QiLCJwdXQiLCJkZWxldGUiLCJzdWNjZXNzIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/commons/httpRequest.js\n");

/***/ }),

/***/ "./src/hooks/useGuard.js":
/*!*******************************!*\
  !*** ./src/hooks/useGuard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useGuard)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _commons_httpRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commons/httpRequest */ \"./src/commons/httpRequest.js\");\n\n\n //쿠키를 서버에 보내서 토큰이 있는지 검사하는 로직\n\nfunction useGuard() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}); //로그인 정보를 가져와서 정보가 없으면 로그인 화면으로 전환(토큰도 함께 검사)\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    (0,_commons_httpRequest__WEBPACK_IMPORTED_MODULE_2__.httpRequest)(\"GET\", \"/login/info\").then(res => {\n      setUser(res.data[0]);\n    }).catch(e => {\n      alert(\"로그인 하세요.\");\n      router.push(\"/\");\n    });\n  }, []);\n  return {\n    user\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlR3VhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNlLFNBQVNLLFFBQVQsR0FBb0I7QUFDakMsUUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUF4QjtBQUNBLFFBQU07QUFBQSxPQUFDTyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQk4sK0NBQVEsQ0FBQyxFQUFELENBQWhDLENBRmlDLENBSWpDOztBQUNBQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZEMsSUFBQUEsaUVBQVcsQ0FBQyxLQUFELEVBQVEsYUFBUixDQUFYLENBQ0dLLElBREgsQ0FDU0MsR0FBRCxJQUFTO0FBQ2JGLE1BQUFBLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDQyxJQUFKLENBQVMsQ0FBVCxDQUFELENBQVA7QUFDRCxLQUhILEVBSUdDLEtBSkgsQ0FJVUMsQ0FBRCxJQUFPO0FBQ1pDLE1BQUFBLEtBQUssQ0FBQyxVQUFELENBQUw7QUFDQVIsTUFBQUEsTUFBTSxDQUFDUyxJQUFQLENBQVksR0FBWjtBQUNELEtBUEg7QUFRRCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBV0EsU0FBTztBQUNMUixJQUFBQTtBQURLLEdBQVA7QUFHRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtY2xpZW50Ly4vc3JjL2hvb2tzL3VzZUd1YXJkLmpzPzgwYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaHR0cFJlcXVlc3QgfSBmcm9tIFwiLi4vY29tbW9ucy9odHRwUmVxdWVzdFwiO1xuXG4vL+y/oO2CpOulvCDshJzrsoTsl5Ag67O064K07IScIO2GoO2BsOydtCDsnojripTsp4Ag6rKA7IKs7ZWY64qUIOuhnOyngVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlR3VhcmQoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgLy/roZzqt7jsnbgg7KCV67O066W8IOqwgOyguOyZgOyEnCDsoJXrs7TqsIAg7JeG7Jy866m0IOuhnOq3uOyduCDtmZTrqbTsnLzroZwg7KCE7ZmYKO2GoO2BsOuPhCDtlajqu5gg6rKA7IKsKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGh0dHBSZXF1ZXN0KFwiR0VUXCIsIFwiL2xvZ2luL2luZm9cIilcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0VXNlcihyZXMuZGF0YVswXSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwi66Gc6re47J24IO2VmOyEuOyalC5cIik7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHtcbiAgICB1c2VyLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJodHRwUmVxdWVzdCIsInVzZUd1YXJkIiwicm91dGVyIiwidXNlciIsInNldFVzZXIiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZSIsImFsZXJ0IiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useGuard.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/room/index.js"));
module.exports = __webpack_exports__;

})();