/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bdist/js/reg_.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bdist/js/reg_.js":
/*!**************************!*\
  !*** ./bdist/js/reg_.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function(){\r\n$(\".btn-login\").click(function(){\r\n\t\r\n\t\r\n\tvar str = '';\r\n\tif($.trim($('#inputM').val()).length == 0) {\r\n\t  str += '手机号码没有输入\\n';\r\n\t  $('#inputM').focus();\r\n\t }else {\r\n\t\tif(isPhoneNo($.trim($('#inputM').val()))== false){\r\n\t\t\t   str += '手机号码不正确\\n';\r\n\t\t\t   $('#inputM').focus();\r\n\t\t}\r\n\t }\r\n\t if($.trim($('#inputP').val()).length == 0 ) {\r\n\t       str += '密码没有输入\\n';\t  \r\n\t  }\r\n\t  if(str != '') {\t    \r\n\t       swal({\r\n\t        title: \"\",\r\n\t        text: str,\r\n\t        type: \"\",\t       \r\n\t        confirmButtonColor: \"#FFCB4F\",\r\n\t        confirmButtonText: \"知道了\",\r\n\t        closeOnConfirm: false\r\n\t       }\r\n\t      );\r\n\t\t  return false;\r\n\t  }\r\n\t  else\r\n\t  {\r\n\t\t  \r\n\t\t   var parpam ={}\r\n\t\t   parpam.phone = $.trim($('#inputM').val());\r\n\t\t   parpam.password = $.trim($('#inputP').val());\t\r\n\t\t   \r\n\t\t   $.ajax({\r\n\t\t   \t\ttype: 'POST',\r\n\t\t   \t\turl: \"/loginForm\",\r\n\t\t   \t\tdata: parpam,\t\t   \t\t\r\n\t\t   \t\tdataType: \"json\",\r\n\t\t   \t\tsuccess: function(data){\t\r\n\t\t\t\t\tif(data.status==\"0000\")\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tif($(\".rep\").prop(\"checked\")==true)\r\n\t\t\t\t\t\t{\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t$.cookie('isrep', 1, { expires: 1 });\r\n\t\t\t\t\t\t\t$.cookie('phone', $.trim($('#inputM').val()), { expires: 1 });\t\r\n\t\t\t\t\t\t\t$.cookie('pwd',   $.trim($('#inputP').val()), { expires: 1 });\t\t\t\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\telse\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t$.cookie('phone', null);\t\r\n\t\t\t\t\t\t\t$.cookie('isrep', 0);\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t   \t$.session.set('uid', data.result.id);\r\n\t\t\t\t\t   \t$.session.set('phone', data.result.phone);\r\n\t\t\t\t\t   \t$.session.set('token', data.result.token);\t\r\n\t\t\t\t\t   \t$.session.set('pic', data.result.headPortrait);\t\t\r\n\t\t\t\t\t\t$(location).attr('href', 'set');\r\n\t\t\t\t\t}\t\r\n\t\t\t\t\telse\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tswal({\r\n\t\t\t\t\t\t\t  title: \"\",\r\n\t\t\t\t\t\t\t  text: data.message,\r\n\t\t\t\t\t\t\t  type: \"\",\t       \r\n\t\t\t\t\t\t\t  confirmButtonColor: \"#FFCB4F\",\r\n\t\t\t\t\t\t\t  confirmButtonText: \"知道了\",\r\n\t\t\t\t\t\t\t  closeOnConfirm: false\r\n\t\t\t\t\t\t\t }\r\n\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t}\t\t\t\t   \t\t\t\r\n\t\t   \t\t}\r\n\t\t   });\r\n\t   }\t\r\n\t\t\r\n  })\r\n  ///////////////////////////////////////////////////////////////////forget b\r\n  $(\".btn-forget\").click(function(){\r\n  \t var str = '';\r\n  \t if($.trim($('#inputM').val()).length == 0) {\r\n  \t \t  str += '手机号码没有输入\\n';\r\n  \t \t  $('#inputM').focus();\r\n  \t  }else {\r\n  \t \tif(isPhoneNo($.trim($('#inputM').val()))== false){\r\n  \t \t\t   str += '手机号码不正确\\n';\r\n  \t \t\t   $('#inputM').focus();\r\n  \t \t}\r\n  \t  }\r\n  \t  \r\n  \t   if($.trim($('#inputP').val()).length == 0 || $.trim($('#inputPs').val()).length == 0) {\r\n  \t       str += '密码没有输入\\n';\t  \r\n  \t   }\r\n  \t   if(str != '') {\r\n  \t \t  swal({\r\n  \t \t    title: \"\",\r\n  \t \t    text: str,\r\n  \t \t    type: \"\",\t       \r\n  \t \t    confirmButtonColor: \"#FFCB4F\",\r\n  \t \t    confirmButtonText: \"知道了\",\r\n  \t \t    closeOnConfirm: false\r\n  \t \t   }\r\n  \t \t  );\r\n  \t \t  return false;\r\n  \t   }\r\n  \t   else\r\n  \t   {\r\n  \t \t  var parpam ={}\r\n  \t \t  parpam.captcha=$.trim($('#inputC').val());\r\n  \t \t  parpam.phone = $.trim($('#inputM').val());\r\n  \t \t  parpam.newPassword = $.trim($('#inputPs').val());\t\t \r\n  \t \t  $.ajax({\r\n  \t \t  \t\t\ttype: 'POST',\r\n  \t \t  \t\t\turl: url+\"/ty/incrementHf/user/resetPassword\",\r\n  \t \t  \t\t\tdata: JSON.stringify(parpam),\t\r\n  \t \t  \t\t\tcontentType: \"application/json\",\t\r\n  \t \t  \t\t\t//dataType: \"json\",\r\n  \t \t  \t\t\tsuccess: function(data){\r\n  \t \t  \t\t\t\tif(data.status==\"0000\")\r\n  \t \t\t\t\t\t{\r\n  \t \t\t\t\t\t\t$(location).attr('href', '/');\r\n  \t \t\t\t\t\t}\r\n  \t \t\t\t\t\telse\r\n  \t \t\t\t\t\t{\r\n  \t \t\t\t\t\t\t swal(data.message);\r\n  \t \t\t\t\t\t}\r\n  \t \t  \t\t\t}\r\n  \t \t  });\r\n  \t   }\r\n  })\r\n  ///////////////////////////////////////////////////////////////////forget e\r\n  if($.cookie('isrep')==1)\r\n  {\r\n  \t\r\n  \t$('#inputM').val($.cookie('phone')).css({\"color\":\"#CCCCCC\"});\r\n  \t\r\n  \t$('#inputP').attr(\"type\",\"password\").val($.cookie('pwd')).css({\"color\":\"#CCCCCC\"});;\r\n  \t$('.rep').prop('checked',true);\r\n  \t\r\n  }\r\n  \r\n \r\n  \r\n  \r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./bdist/js/reg_.js?");

/***/ })

/******/ });