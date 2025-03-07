(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"神农百草堂","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var messages = {};

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this2 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this2.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 11:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 155:
/*!************************************************!*\
  !*** D:/桌面/神农百草堂/神农百草堂/common/disease.data.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = [{
  id: '01',
  name: '常见病症',
  list: [{
    id: '01',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/f148fbc7-915a-4eaf-9b3f-fb2ebf0a40cd.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/fdb72cea-27b3-4ffc-a5b8-a96a4fa7c80e.png',
    name: '新型冠状病毒肺炎',
    symptom: '新型冠状病毒肺炎是一种急性感染性肺炎，人感染了冠状病毒后常见体征有呼吸道症状、发热、乏力、干咳、逐渐出现呼吸困难等。目前对于新型冠状病毒所致疾病没有特异治疗方法。新型冠状病毒肺炎在中医上属“寒湿(瘟)疫”,是感受寒湿疫毒而发病,所以中医治疗及预防本病应该以驱寒化湿为主。中国针灸学会印发的《新型冠状病毒肺炎针灸干预的指导意见(第一版）》中表示，艾灸通过温热的穴位刺激，具有温阳散寒、通经活络、升阳固脱以及泻热拔毒等作用，艾灸可以改善肺炎症状，并提高免疫力。',
    tip: '每天午后或晚餐前灸一次。',
    know: '注意事项:新型冠状病毒肺炎具备人传人的能力，需要正确佩戴口罩加强防护。注意监测体温，若有发热、乏力的症状要及时就医，并注意隔离。积极防护，戴口罩，勤洗手。' },

  {
    id: '02',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/8003f2a4-b1f0-4a4b-90b2-567336b5da72.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/5a4e4621-8c5e-402f-99be-0f683d48a080.png',
    name: '新冠病毒防治',
    symptom: '新型冠状病毒肺炎患者早期有外感症状,同时常见胃肠功能受到损伤，表现为胃口差、肚子胀、肚子响，大便稀烂或者大便不通。推荐对—些穴位进行自我保健按摩艾灸，以下穴位，每次选用一组，改善胃肠功能和外感症状。',
    tip: '',
    know: '暂无' },

  {
    id: '03',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/9f1e17dd-00e4-4af4-94e7-74c5cbdeab62.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/4803d0a8-c794-4556-80d2-151215c2d578.png',
    name: '哮喘虚证',
    symptom: "过敏性哮喘缓解期的主要证候为虚证，分肺虚、脾虚和肾虚三型，这里主要描述的是过敏性哮喘急性发作期前后的平素表现。1.肺虚型:肺虚为慢性过敏性哮喘的主要征候，多数慢性过敏性哮喘患者有肺虚表现，以肺气虚更为常见。肺虚多由外感病后气阴二伤所致。由于肺为气之主，因此平素的主要表现为咳嗽气短、痰多清稀、面色神疲、语低懒言、或畏寒自汗，稍感风寒容易诱发急性过敏性哮喘发作，发病前喷嚏频频、流清涕不止、鼻眼奇痒、咽痒鼻堵、舌淡苔薄白，脉濡缓无力的属肺气虚。肺气虚所致的慢性过敏性哮喘与现代医学中伴变应性鼻炎的变应性过敏性哮喘患者相似。2.脾虚型:多因外邪入侵，如多食生冷辛辣食物或进食“发物”或过咸过甜食物而致脾不健运，痰浊内生上行于肺而致。平素表现为咳嗽痰多，面黄少华，倦怠乏力，食欲不振，腹胀便溏，或见浮肿。舌淡苔白润，脉缓或细无力。脾虚所致过敏性哮喘与现代医学的食物过敏性过敏性哮喘有相似之处。3.肾虚型:肾虚型患者多属过敏性哮喘史较长，且经常反复发作，久病及肾，故致肾气亏乏，摄纳失常。慢性过敏性哮喘主要表现为肾气虚，是久病伤肾、肾元亏损、肾气失纳而致。平素表现为气短息促，呼多吸少，活动尤甚，吐泡沬痰，腰酸腿软。肾阳虚和肾阴虚在过敏性哮喘较为少见，肾阳虚的平素表现为久病体虚，畏寒，动则息促，腰酸耳鸣，自汗，手足不温，面色苍白，小便清长或夜尿多汗，手足不温，面色苍白，小便清长或夜尿多，舌淡嫩苔白润，脉沉细无力;肾阴虚表现为头晕耳鸣，五心烦热，痰少粘稠，口干咽燥，尿黄大便干，消瘦，盗汗，舌质红,脉细数，肾阴虚所致的肺病与现代医学的肺结核相似。",
    tip: '注: (1)每天按照第一天的调理方案循环灸治至痊愈为止; (2)每7天为1个疗程。',
    know: '暂无' },

  {
    id: '04',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/99f6726c-573a-4244-bc39-53d8e1e81aa6.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/e07fac09-b661-43b6-8833-522ad369d356.png',
    name: '呃逆（胃火上逆)',
    symptom: '呃逆是指以喉间频发短促呃呃声响、不能自制为主要表现的病证。西医学的单纯性膈肌痉挛，其他如胃炎、胃肠神经官能症、胃扩张，以及胸腹手术后等引起的膈肌痉挛出现呃逆。胃火上逆临床表现:呃声洪亮有力，冲逆而出，口臭烦渴，多喜冷饮，肮腹满闷，大便秘结，小便短黄;舌红苔黄或燥，脉滑数。',
    tip: '注:(1)每天按照第一天的调理方案循环灸治至痊愈为止。',
    know: '止嗝的方法有很多，没有哪─种特别管用，但是总有—款适合你:1.喝几口温开水，慢慢咽下，同时做弯腰90度的动作，注意别被呛到。2.往外扯舌头。会感到腹部有气体上升，打嗝自然消除。3.先深吸—口气，然后憋住，尽量憋长—些时间，然后呼出，反复进行几次。4.吞咽面包或者馒头块，大小量力而行，注意别噎着。5.被惊吓，高血压、心脏病人慎用。6.用一个小纸或塑料袋，罩住口鼻，进行3～5次深呼吸。' },

  {
    id: '05',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/d63a35b0-f87d-4477-a28f-1853a6920fcb.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/b581fa9f-02a8-43c2-ae15-7ea57c700c02.png',
    name: '膈肌痉挛(呃逆)',
    symptom: '打嗝又称“呃逆”，古称“啰”，即“膈肌痉挛”，是指气逆上冲，喉间呃呃连声，声短而频，不能自制的一种病症。呃逆是因进食生冷、辛辣，或情志郁怒等因素刺激下;膈间之气不利，引动胃气上冲喉间。',
    tip: '注:(1每天按照第一天的调理方案循环灸治至痊愈为止。',
    know: '止嗝的方法有很多，没有哪—种特别管用，但是总有—款适合你:1.喝几口温开水，慢慢咽下，同时做弯腰90度的动作，注意别被呛到。2.往外扯舌头。会感到腹部有气体上升，打嗝自然消除。3.先深吸一口气，然后憋住，尽量憋长一些时间，然后呼出，反复进行几次。4.吞咽面包或者馒头块，大小量力而行，注意别噎着。5.被惊吓，高血压、心脏病人慎用。6.用一个小纸或塑料袋，罩住口鼻，进行3～5次深呼吸。' }] },



{
  id: '02',
  name: '体质调理',
  list: [{
    id: '01',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/f201c6a8-bc35-4fa4-b57f-6a8e37f7baec.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/4a5925ec-9829-423f-92f4-10307127e801.png',
    name: '热入营血',
    symptom: '中医把温热病分成卫分、气分、营分、血分四个浅深轻重不同的阶段。热入营血是指温病进入营分、血分阶段，属于温热病发展过程中的深重阶段。常见症状:身热，夜晚加重，心烦失眠，严重的甚至昏迷,胡言乱语，皮肤出现紫黑色斑疹，吐血、尿血、便血，舌质深红或紫，脉细数。治疗宜清营凉血。',
    tip: '注:(1热象明显者，灸量宜小;(2)每天按照第一天的调理方案循环灸治至痊愈为止。',
    know: '暂无' },

  {
    id: '02',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/afe06387-4827-4eba-bc6d-b2d5321c7b2d.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/2404dbba-99d5-401b-bcbe-ba174e3c5cb5.png',
    name: '痰热症',
    symptom: '痰热证由痰热互结，阻于气道，肺道失利，痰火伤及血络所致。常见症状:痰黄而稠，或痰白而胶结难出，身热面红，心烦口渴，尿黄便秘。咳嗽气喘;或气粗息促，喉中有哮鸣声;或惊悸失眠;或渴欲饮水而得水则呕，按之心下痛;或神志狂乱;或喉痹，音哑。舌质红，苔黄腻，脉滑数或弦滑。治疗宜清热化痰。',
    tip: '注:(⑴热象明显者，灸量宜小;(2)每天按照第一天的调理方案循环灸治至痊愈为止。',
    know: '暂无' },

  {
    id: '03',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/c8d83b72-bc31-4923-8ce3-19f810738491.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/cd3dd4b5-febf-4039-84fe-c37c8b624ecc.png',
    name: '寒湿困脾',
    symptom: '寒湿困脾证是指寒湿内盛，中焦的阳气被寒湿困住所表现的证候。本证常因寒湿之邪外侵，或过食生冷瓜果油腻肥甘之物，寒湿内停;或脾气虚，脾阳不振，水湿不运，寒湿内生，以致寒湿因脾，脾失健运，水湿停聚为患。病因:饮食不节，嗜食生冷，或淋雨涉水，居处潮湿以致。症状:腹胀闷疼痛，泛吐清水,消化不良，食欲不振，口淡不渴，大便稀，头身困重，面色暗黄，或眼睛皮肤发黄，色晦暗如烟熏或肢体浮肿，小便短少。妇女白带增多，舌质淡体胖，苔白腻或白滑，脉濡或缓。',
    tip: '注:(1)每天按照第一天的调理方案循环灸治至痊愈为止。',
    know: '1.平胃散加味:制苍术15克、厚朴12克、陈皮10克、茯苓12克、泽泻12克、炒白术10克、甘草6克。本方正于湿阻脾胃而引起肮腹胀闷诸证。2.藿香正气散:藿香10克、紫苏叶10克、大腹皮10克、炒白术10克、厚朴10克、半夏曲10克、白芷10克、桔梗8克、甘草8克、茯苓12克。本方适于寒湿外侵而引起吐泄诸证。3.实脾饮:白术12克、厚朴6克、木瓜6克、木香3克、草果3克、大腹子(即槟榔)6克、茯苓15克、干姜6克、制附子6克、炙甘草3克、生姜3片、大枣3枚。本方适于寒湿困脾的腹满、黄疸诸证。' },

  {
    id: '04',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/a5d95eb4-5916-4bb5-b959-8c41ed13eedb.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/755ca876-1f5f-47ad-b2dd-88c4936ad9e5.png',
    name: '外伤风寒',
    symptom: '风寒感冒，其起因通常是劳累，没休息好，再加上吹风或受凉，通常在秋冬发生比较多。风寒感冒是风寒之邪外袭、肺气失宣所致。常见症状:恶寒重、发热轻、无汗、头痛身痛、鼻塞流清涕、咳嗽吐稀白痰、口不渴或渴喜热饮、苔薄白。治法应以辛温解表为主。',
    tip: '注:(1)每天按照第一天的调理方案循环灸治至痊愈为止。',
    know: '暂无' },

  {
    id: '05',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/9b3dfa43-43b0-4929-9b08-f051bcf62272.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/b41ac887-9267-4cac-a09a-e7d25ffbec3b.png',
    name: '酒毒内积',
    symptom: '酒毒是由于饮酒过度，以致蕴湿酿热，酒毒积聚，表现为面目红赤，烦热躁动，心中懊，呃逆恶心，时时欲吐，胡言乱语，或哭笑无常，醉酒神昏等，甚则可因酒精中毒致死。治宜清肝解毒。',
    tip: '注:(1热象明显者，灸量宜小;(2)每天按照第一天的调理方案循环灸治至痊愈为止。',
    know: '暂无' }] },



{
  id: '03',
  name: '养生保健',
  list: [{
    id: '01',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/54f8798c-7067-49c2-b7e8-e83beeabddf6.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/b48e7563-1265-4677-b688-96ddd51669e1.png',
    name: '养肝护肝',
    symptom: '肝就像一个中央银行，负责管理身体三大货币(气、血、水）流通。情绪、睡眠、饮食甚至药物等，均会影响肝的疏泄功能。保肝，顾名思义就是保护肝脏的意思。但保护肝脏并不是把肝脏包起来不让病毒来侵犯，这里的保肝至少含有三种意思:即减轻肝脏负担，增加肝脏营养和改善肝脏供血。',
    tip: '注:(1)每日按照第—天的调理方案循环灸治。',
    know: '1、以酸入肝。酸入肝是指食用酸味食物或药物可以养肝。在日常饮食中，可以适当食一些酸味食品，如山楂、橘子、葡萄等;酸味食物并不是一年四季都适宜吃，比如春季肝气旺盛时，就不可以吃太多酸味食品，否则会造成肝气过盛，影响人体健康。2、养肝护肝的食物以清淡平和、营养丰富为宜，同时要避免多吃油腻、油炸、辛辣食物，否则会导致肝脏功能的失调。此外，青色食品是保肝、养肝的最佳选择，可以促进肝气循环，舒缓肝郁、保护视力。因此，应多食用一些青色食物，如黄瓜、芹菜、菠菜、花椰菜、海带等。3、情绪要平稳。中医提到“怒则伤肝”，情绪起伏过大，很容易影响到肝。通常自我要求高、急躁的人，较容易产生焦虑、不安，这在中医里是属于较易产生肝火的体质。肝属木，木喜调达。可以把肝想象成一棵大树，树木喜欢自由、无拘无束，因此，养肝首重情绪调节、心情愉快。4、睡眠要足够。肝主藏血，黄帝内经素问篇提到:“人卧则血归于肝。”足够的睡眠，肝脏才可以得到完全的修复。以中医观点而言，晚上11点至凌晨3点，血液流经肝、胆，此时应让身体得到完全的休息，否则肝的修复功能受到影响，体力无法恢复，连带思考能力也会变得迟缓。睡眠品质不佳，也会造成肝火上升。因此专家建议，晚上不适宜从事太过耗损脑力的工作，容易影响睡眠品质。适当休息则有助于强化肝脏，平时累了就要休息。对肝最好的方式，就是每天找时间休息。我们的身体很敏感，只要忙了、累了，就随时调节、抓空档休息，比如中午睡午觉，通常疲倦的感觉都可以清除。' },

  {
    id: '02',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/6dd10337-d3db-4d31-8930-5c702c72e6cb.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/a9541b47-e28c-4120-bde1-594b4801f4b7.png',
    name: '预防感冒',
    symptom: '感冒是一种常见病症，但并非不可预防，只要在生活中加以防范，提高自身免疫力，增强肺功能，即所谓“正气存内，邪不可干”。在感冒多发的季节，每日或隔日灸一次相关穴位，通过温热刺激和艾叶的药理作用，可以起到预防感冒、防病保健的作用。',
    tip: '注:(1每天按照第一天的调理方案循环灸治;(2)每7天为1个疗程。',
    know: '增强自身免疫力是预防感冒的基本原则。饮食上，要少吃辛辣刺激性食物，多吃新鲜水果和蔬菜，补充维生素E、维生素c。维生素E、维生素C都翰有效提高机体免疫力。每日大量补充水分，可以增进代谢，尽快排出病毒。每晚睡前热水泡脚15分钟以上。保证充足的睡眠。每天坚持进行30~40分钟的有氧运动，可以增强抵御感冒的能力。当自觉要感冒时，可使用一些辅助方法把感冒拒之门外。洗鼻法:每天早晚用盐水清洗鼻腔可将鼻腔内的毒物排出，防止病毒在鼻腔内大量繁殖，引发感冒。饮用姜糖茶:取红糖、生姜、红茶各适量共煮饮用，每日1~2次，可祛除寒邪，预防感冒。冲服蜂蜜:每日早晚各饮一次，可有效增强身体免疫力，达到防病保健的目的。' },

  {
    id: '03',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/85268bc0-fc16-4bd6-80e7-4e8e5d017a58.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/0b01fc20-c374-4750-9796-9fb1c7dd7d7b.png',
    name: '健脾和胃',
    symptom: '在中医理论中，脾为五脏之一，是后天之主，脾主运化水谷精微，输布全身，供应各方面的需要，维持人体的正常的功能活动;胃为六腑之一，为五脏六腑之海，功能是主受纳、腐熟水谷，精微物质通过脾的运化，输布于五脏六腑，营养全身各个组织器官。艾灸身体相关穴位可祛除寒湿，提高脾胃运化功能，促进消化吸收及新陈代谢，能够起到养生保健的作用。适用于消化不良、食欲不佳、胃胀腹泻或胃寒怕冷、胃肠功能弱者。',
    tip: '注: (1)每天按照第一天的调理方案循环灸治;(2)每7天为1个疗程。',
    know: '脾胃不和的人—定要注意调节饮食，少吃油炸食品、腌制食品及生冷刺激性食物，应以低脂、清淡食物为主。吃饭要定时定量，不要暴饮暴食。饭菜温度不要过热或过冷，以免刺激肠胃，Z攻的麦和时1变。-做到不吸烟，不喝酒，劳逸结合。适当锻炼身体，提高脏腑功能，增强身体免疫力。饮食推荐:1.绿豆粥原料:绿豆100g，粳米150g，日糖1>g。以i教粳米用水淘洗干净，入锅中，加水适量，小火慢慢熬煮成粥，粥成时加入白糖，母日早说FI食服展。L用于脾胃不和，食欲不振，消化较弱者。.2.香采掐片汤原料:鲜香菜100g，鲜猪肝250g，生姜、盐各适量。做法:将香菜洗净，猪肝洗争切片，生委切伴,炒锅烧热加水500ml，烧开后入猪肝、生阿静。者肝将熟时入香菜、盐即可。此汤具有补肝和胃，促进食欲的功效，适用于脾胃不和所致的嗳气反酸，不欲饮食、眩晕等病症。3.胡椒猪肚汤原料:新鲜猪肚1个，胡椒、线、香菜适量制作:(1)将猪肚洗净备用,行明椒洗净并捣碎;将捣碎的胡椒放入猪肚内，用线扎紧猪肚切口，放入砂锅内，放入适量水;(2)将砂锅置于火上，武火煮沸后，文火煮至烂软，汤中放入少许香菜调味;(3)将猪肚捞起，弃肚内胡椒，食肚肉饮汤。功效:猪肚补虚损，健脾胃;胡椒温中下气治胃寒。两者相配，可以温中健脾、和胃止痛，适用于胃寒患者，如经常因为吃凉的食物而腹泻的患者。' },

  {
    id: '04',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/7fca9784-b965-4aee-af4b-49e99be713fa.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/01d65afe-52d4-4ed0-918a-b47bf0474981.png',
    name: '增强免疫力',
    symptom: '免疫力是人体自身防御机制，是人体识别和排除“异己”的胜利反应。免疫力强，则人不容易患病，身体健康，反之会增加患病的概率，病毒和细菌更容易侵入人体。免疫力与多方面因素有关，营养不良、长时间患病、疲劳过度、情绪不佳等都会引起免疫力下降。在相关穴位施灸能够改善脏腑功能，提高人体免疫力。',
    tip: '注:(1)每天按照第一天的调理方案循环灸治;(2)每7天为1个疗程。',
    know: '要提高人体免疫力，主要应从饮食和运动两方面着手。要多吃富含蛋白质、维生素、矿物质的食物，如黄瓜、西红柿、海带、蘑菇、酸奶、萝卜等。少吃含脂肪高以及过甜的食物，不吸烟，少喝酒。经常锻炼身体，每天进行30~40分钟的锻炼，如跑步、游泳、打太极拳等，可有效增强身体抵抗力。培养多种兴趣，保持精力旺盛，学会减压，保持心情愉快。' },

  {
    id: '05',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/c379f28e-56d0-4879-9c74-63f5d2cc3a05.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/31f5e86b-d64c-47a7-95b7-b5af154d35dd.png',
    name: '补肾强身',
    symptom: '肾为先天之本，为五脏之一，位于腰部，脊柱两旁，左右各一。与膀互相为表里。其主要生理功能是藏精(包括生殖之精和五脏六腑之精)、主生长发育和生殖、主水和主纳气，并与骨、髓、耳密切相关。肾精足则精力充沛、思维敏捷、记忆力强、筋骨强健、行动轻捷。反之则会出现头晕、心慌气短、体虚乏力、腰膝酸软等症状。在相关穴位施灸可以起到补肾强身的作用。',
    tip: '注:(1)每天按照第一天的调理方案循环灸治;(2)每7天为1个疗程。',
    know: '从饮食上来说，鸡蛋、牡蛎、虾、泥、鹤鹑、驴肉等都是养肾的上品。冬天要注意保暖，不要使身体受寒。适量饮水，不要憋尿。适度运动，加速代谢，达到养肾强身的目的。出来用艾灸疗法补肾强身以外，按摩也是一种好方法，但任何好方法都不会迅速见效，都需要长期坚持。按摩腰眼、气海、会阴、涌泉、肾俞、关元、命门可益精补肾、强肾滋阴、畅达气血、强身健体。' }] },



{
  id: '04',
  name: '外科病症',
  list: [{
    id: '01',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/eca92973-0ec1-4e05-8ec9-c1d2ee5384b5.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/7366c39a-5d52-420c-9cba-67cc8d2de296.png',
    name: '疝气',
    symptom: '疝气，即人体内某个脏器或组织离开其正常解剖位置，通过先天或后天形成的薄弱点、缺损或孔隙进入另一部位。常见的疝有脐疝，腹股沟直疝、斜疝，切口疝、手术复发疝、白线疝、股疝等。腹壁疝多由于咳嗽、喷嚏、用力过度、腹部肥胖、用力排便、妊娠、小儿过度啼哭、老年腹壁强度退行性变等原因引起腹内压增高，迫使腹腔内的游离脏器如:小肠、盲肠、大网膜、膀胱、卵巢、输卵管等脏器通过人体正常的或不正常的薄弱点或缺损、孔隙进入另一部位。狐疝证见:阴囊一侧肿大，时上时下，如有物状，卧则入腹，立则入囊，胀痛俱作，治当疏肝通络。',
    tip: '注:(1)每天按照第1天的调理方案循环灸治至痊愈为止; (2)每5~7天为一个疗程。',
    know: '1、注意保温，不宜过劳，保持情绪稳定，节制性交，忌食生冷及辛辣食物。2、为使肿物不脱出疝环而影响日常生活可使用疝带。' },

  {
    id: '02',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/24c24bc7-2ecb-46c9-be77-ab58e6299068.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/81745a7a-8566-4230-8c37-065391789b2a.png',
    name: '颅脑血肿',
    symptom: '头部内伤见于头皮损伤、颅骨骨折、脑损伤、脑震荡、脑挫裂伤、颅内血肿和脑干损伤等，是由于外伤所致。受伤后出现头痛、恶心呕吐、躁动不安、意识障碍、昏迷不醒等为主要表现的头部损伤性疾病。属于中医学“外伤头痛”的范畴。',
    tip: '注:(1)每天按照第一天的调理方案循环灸治至痊愈为止。',
    know: '暂无' },

  {
    id: '03',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/d08bb49f-03d2-4dbe-8c22-57747ad36716.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/5caee5f5-d05d-4597-bd6f-acca14339893.png',
    name: '不安腿综合征',
    symptom: '不安腿综合征是发生于下肢的一种自发的、难以忍受的痛苦症状。多发生在夜间睡眠时，安静状态下严重，活动后反而减轻。因夜间加重所以患者多有失眠症状，长期影响工作、学习和生活。临床主要表现以下肢腓肠肌最常见，有撕裂感、蚁走感、刺痛、烧灼感、疼痛等腿麻的不适感，多见于成年人。不安腿综合征属于中医“痹症”的范畴。外感风寒湿邪，伤及阳气，或气血不足，气虚不运血，血不得运而成气虚血瘀，最后形成气滞血瘀，肌肉筋脉失养而发为本病。中医临床分型:1.湿邪痹阻型:素体虚弱，外感寒湿邪气，或久居湿地，以腿部冷痛为主症。2.瘀血阻络型:跌打损伤，以腿部刺痛为主症，舌暗红，脉涩。',
    tip: '注:(1)每天按照第一天的调理方案循环灸治至痊愈为止。辨证加灸:1.湿邪痹阻型配阴陵泉穴、公孙穴。2.瘀血阻络型配血海穴。',
    know: '1.睡前用温水洗脚，或按摩下肢肌肉，保持心情舒畅，抑郁和焦虑情绪会加重症状;2.注意腿部保暖，天气变凉和潮湿环境也会加重症状;3.外洗方:川牛膝、白芍、郁金、独活、桑枝、伸筋草、透骨草、桂枝、防风各15克，水煎外洗足部，每日1次，3日1剂，连洗30日。' },

  {
    id: '04',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/baca8b6e-d52c-4e1f-a6f7-9722d7c6bc61.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/e4da7623-9e4e-4c3a-a6c0-145519779300.png',
    name: '筋膜炎',
    symptom: '筋膜炎又称纤维织炎，是一个综合的概念，为发生于肌筋膜的一种非特异性炎症。可发生于全身各个部位，多见于腰部、骼骨后峭及肩胛区域。中医认为筋膜炎从病理而言，属于慢性伤筋范围，以运行局部经络阻滞、气血运行不畅为主。常见症状:肌肉酸痛，僵硬板滞，或有重压感。本病属于中医学“痹证”范围，中医学认为久卧湿地，贪凉或感冒后复感寒邪，风寒湿邪侵入人体，寒凝血滞，使经络运行不畅或劳作过度，筋脉受损，气血阻滞筋脉;或素体虚弱，气血不足，筋膜失养等所导致本病发生。',
    tip: '注:(1)重点艾灸“阿是穴"”(即患处);(2)颈肌筋膜炎艾灸颈胸段夹脊穴，背肌筋膜炎艾灸背腰段夹脊穴;(⑶按每天调理方案循环灸治至痊愈为止。',
    know: '暂无' },

  {
    id: '05',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/33afc291-78d4-42a0-8da1-ef8e5953a9dd.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/e56d863f-47a6-4a1b-8ce5-156b3a80ff71.png',
    name: '骨质增生症',
    symptom: '骨质增生症多发于中年以上。—般认为由于中年以后体质虚弱及退行性变;长期站立或行走及长时间的持于某种姿势，由于肌肉的牵拉或撕脱、出血，血肿机化，形成刺状或唇样的骨质增生;骨刺对软组织产生机械性的刺激和外伤后软组织损伤、出血、肿胀而致。中医将本病纳入“骨痹”的范畴。认为本病发生多由于气血不足，肝肾亏虚，风寒湿邪侵入骨络或跌仆闪挫，伤损骨络，以致气血瘀滞，运行失畅，不通则痛。',
    tip: '注:(1)每天按照第一天的调理方案循环灸治至痊愈为止。',
    know: '暂无' }] },



{
  id: '05',
  name: '内科病症',
  list: [{
    id: '01',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/fab99c4c-316c-4dba-a419-fafbc68d6f4a.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/b3370363-a97f-4480-94ce-2ff35ea5bdbc.png',
    name: '颤证',
    symptom: '颤证，中医病名。是指以头部或肢体摇动颤抖，不能自制为主要临床表现的一种病证。轻者表现为头摇动或手足微颤，重者可见头部振摇，肢体颤动不止，甚则肢节拘急，失去生活自理能力。本病又称振掉、颤振、震颤。多因年老体虚、情志过极、饮食不节、劳逸失当所致。基本病机为肝风内动，筋脉失养。治疗当辨清标本虚实。根据本病的临床表现，西医学中震颤麻痹、肝豆状核变性、小脑病变的姿位性震颤、特发性震颤、甲状腺功能亢进等，凡具有颤证临床特征的锥体外系疾病和某些代谢性疾病，均可参照本节辨证论治。',
    tip: '肝肾不足加肾俞、肝俞、太溪;气血亏虚加气海、血海、太白;痰热动风加丰隆、脾俞、中脘。注:(1)每天按照第一天的调理方案循环灸治至痊愈为止。',
    know: '1、预防颤证应注意生活调摄，保持情绪稳定，心情舒畅，避免忧思郁怒等不良精神刺激，饮食宜清淡而富有营养，忌暴饮暴食及嗜食肥甘厚味，戒除烟酒等不良嗜好。此外，避免中毒、中风、颅脑损伤对预防颤证发生有重要意义。2、颤证病人生活要有规律，保持心情愉快和情绪稳定。平时注意加强肢体功能锻炼，适当参加力所能及的体育活动，如太极拳、八段锦、内养功等。病室应保持安静，通风好，温湿度宜人。对卧床不起的患者，注意帮助患者翻身，经常进行肢体按摩，以防发生褥疮，—旦发生褥疮，要及时处理，按时换药，保持创口干燥，使褥疮早日愈合。' },

  {
    id: '02',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/b9841e57-b7b8-49bd-b014-6414a57d1976.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/a3b06e07-caa6-44b9-8f35-769ec540733a.png',
    name: '咳血（燥热伤肺)',
    symptom: '血由肺及气管外溢，经口咳出，表现为痰中带血，或痰血相兼，或纯血鲜红，兼夹泡沫均称为咳血，亦称为嗽血或咯血。燥热伤肺临床表现:喉痒咳嗽，痰中带血，口干鼻燥，或有身热;舌质红，苔薄黄少津，脉数。',
    tip: '注: (1)每天按照第一天的调理方案循环灸治至痊愈为止; (2)每7天为1个疗程。',
    know: '暂无' },

  {
    id: '03',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/f34a7df0-b34b-4db1-9524-fbbf7f42155b.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/49d14523-3d25-4e60-8c36-31d1ce9c4830.png',
    name: '噎膈（津亏热结)',
    symptom: '噎膈是由于食管干涩或食管狭窄导致吞咽食物哽噎不顺，饮食难下，或食而复出的疾患。噎即噎塞，指吞咽之时哽噎不顺;膈为格拒，指饮食不下。津亏热结临床表现:吞咽梗涩而痛，食入即复出，甚则水饮难进，心烦口干，胃肮灼热，五心烦热，形体消瘦，皮肤干燥，小便短赤，大便干结如羊粪;舌质光红，干燥少津，脉细数。',
    tip: '注: (⑴)每天按照第一天的调理方案循环灸治至痊愈为止。',
    know: '暂无' },

  {
    id: '04',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/69e4aa4f-a530-4c1e-b3b0-e01f3cc0b1d0.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/6502d3ce-7a42-413b-a7e7-c6a481eb9cc1.png',
    name: '白血病',
    symptom: '白血病是一类造血干细胞恶性克隆性疾病。克隆性白血病细胞因为增殖失控、分化障碍、凋亡受阻等机制在骨髓和其他造血组织中大量增殖累积，并浸润其他非造血组织和器官，同时抑制正常造血功能。临床可见不同程度的贫血、出血、感染发热以及肝、脾、淋巴结肿大和骨骼疼痛。中医学认为白血病的发病多在内在虚损、阴阳失和、脏腑虚弱的基础上温热毒邪等乘虚而人所致。属于中医学“虚劳”、“温病”等范畴。',
    tip: '注:(1)每天按照第一天的调理方案循环灸治至痊愈为止。辨证加灸:食欲差配中脘、足三里;贫血配心俞、血海、悬钟;出血配腰阳关、八醪、天枢、三阴交。',
    know: '暂无' },

  {
    id: '05',
    tup: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/a737a2ff-37b9-40d9-bf8b-b8277e9ca335.png',
    tup2: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/6372a80e-a074-4a02-a3b6-ff90b537b6f1.png',
    name: '疟疾(寒疟)',
    symptom: '疟疾是经按蚊叮咬或输入带疟原虫者的血液而感染疟原虫所引起的虫媒传染病。寄生于人体的疟原虫共有四种，即间日疟原虫，三日疟原虫，恶性疟原虫和卵形疟原虫。在我国主要是间日疟原虫和恶性疟原虫;其他二种少见，近年偶见国外输入的一些病例。不同的疟原虫分别引起间日疟、三日疟、恶性疟及卵圆疟。本病主要表现为周期性规律发作，全身发冷、发热、多汗，长期多次发作后，可引起贫血和脾肿大。2017年10月27日，世界卫生组织国际癌症研究机构公布的致癌物清单初步整理参考，疟疾（高度流行地区恶性疟原虫感染引起的)在2A类致癌物清单中。寒疟临床表现:热少寒多，口不渴，神疲体倦，胸胱痞闷;苔白腻，脉弦。',
    tip: '注: (1)每天按照第一天的调理方案循环灸治至痊愈为止; (2)于发作前1~2小时施灸。',
    know: '暂无' }] }];exports.default = _default;

/***/ }),

/***/ 2:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 26:
/*!*************************************************!*\
  !*** D:/桌面/神农百草堂/神农百草堂/common/classify.data.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _ref;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default = [{
  "id": 1,
  "name": "清热",
  "foods": [{
    "id": 1,
    "name": "银柴胡",
    "key": "银柴胡",
    "price": 13.5,
    "brief": "银柴胡 500g 中药材 北柴胡 山菜根 银胡 山根子 野菜根 野生北柴胡根",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/82ef5a5a-0189-419a-88f6-fe0743f37ab6.jpg",
    "cat": 10,
    "alias": "【中药名】\n银柴胡yinchaihu\n【别名】\n银胡、银夏柴胡、牛肚根、沙参儿、白根子。\n【英文名】\nStellariae Radix",
    "explain": "【来源】石竹科植物银柴胡Stellaria dichotoma L.var.lanceolata Bge.的干燥根。\n【中药名】青蒿 qinghao\n【别名】草蒿、臭蒿、臭青蒿、香丝草、酒饼草。\n【英文名】Artemisiae Annuae Herba。\n【药用部位】菊科植物黄花蒿Artemisia annuaL.的地上部分。\n【植物形态】一年生草本。茎直立，具纵纹，多分枝，光滑无毛。叶互生，无毛，常为3回羽状分裂。裂片短而细，先端尖，表面深绿色，有极小的粉末状短柔毛，背面淡绿色，具细小的毛或粉末状腺状斑点；叶轴两侧具狭翅；叶柄基部稍扩大抱茎；茎上部的叶向上逐渐细小呈线形，无柄，基生叶在开花时凋谢。头状花序细小球形，具细软短梗，排列成圆锥状；总苞的苞片2～3层，无毛，外层卵形，绿色；内层椭圆形，边缘膜质，背面中央为绿色。花托长椭圆形，无毛；花皆为管状花，黄色；雌花较少，围于外层，雌蕊1枚，柱头2裂，呈长叉状开展；内为两性花，花冠先端分裂；雄蕊5枚，聚药，药先端呈三角形，基部两侧下延呈一短尖。瘦果椭圆形。花期8～10月，果期10～11月。\n【产地分布】生于山坡草地、荒地、河岸、路旁、村边。分布于广东等地。\n【采收加工】夏、秋季花盛开或结果时采收。割取地上部分，除去老茎，阴干或晒干。\n【药材性状】茎圆柱形，上部多分枝；表面黄绿色或棕黄色，具纵棱线；质略硬，易折断，断面中部有髓。叶互生，暗绿色或棕绿色，卷缩易碎，完整者展平后为3回羽状深裂，裂片及小裂片矩圆形或长椭圆形，两面被短毛。气香特异，味微苦。\n【性味归经】性寒，味苦、辛。归胆经、肝经。\n【功效与作用】清热解毒、除骨蒸、截疟。属清热药下分类的清虚热药。\n【临床应用】用量6～12克，煎服，入煎剂宜后下。用治温病、暑热、骨蒸劳热、暑邪发热、疟疾、痢疾、阴虚发热、疮痒、湿热黄疸等。\n【药理研究】有抗菌、抗病毒、抗寄生虫、抗肿瘤、解热作用；调节机体免疫功能；可减慢心率，抑制心肌收缩力，降低冠脉流量，降低血压，且有一定抗心律失常作用；尚能保护肝脏，防护辐射，缩短戊巴比妥睡眠时间等。\n【化学成分】主含多种倍半萜内酯、黄酮类、香豆素类、挥发油等。另含青蒿素、青蒿醇、青蒿酸、青蒿酸甲酯、槲皮素、小茴香酮、蒿属香豆精等成分。\n【使用禁忌】产后血虚，内寒作泻，及饮食停滞泄泻者，勿用。\n【配伍药方】\n①治中暑：青蒿嫩叶捣烂，手捻成丸，黄豆大。新汲水吞下，数丸立愈。(《本草汇言》)\n②治暑毒热痢：青蒿叶30克，甘草3克。水煎服。(《圣济总录》)\n③治温疟痰甚，但热不寒：青蒿60克(童子小便浸，焙)，黄丹15克为末。每服6克，白汤调下。(《仁存堂经验方》)\n④治鼻中衄血：青蒿捣汁服之，并塞鼻中。(《卫生易简方》)\n⑤治聤耳脓血出不止：青蒿捣末，绵裹纳耳中。(《圣惠方》)\n⑥治牙齿肿痛：青蒿一握，煎水漱之。(《济急仙方》)\n⑦治瘊子：新汲水按青蒿汁，调蛤粉敷之。(《百一选方》)\n⑧治蜂螫人：嚼青蒿敷之。(《肘后方》)" },

  {
    "id": 2,
    "name": "浮小麦",
    "key": "浮小麦",
    "price": 14.5,
    "brief": "浮小麦中药材 500克 止汗茶浮水小麦茶新货甘瘪小麦 可搭甘草红枣",
    "alias": "【中药名】\n浮小麦 fuxiaomai\n【别名】\n浮麦、浮水小麦、小麦粉、浮水麦、瘪小麦。\n【英文名】\nFructus Tritici Levis",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/4bd07a42-87e5-43de-930c-fe6cf381014a.jpg",
    "cat": 10,
    "explain": "【药用部位】为禾本科植物小麦Triticum aestivum L.干瘪轻浮的干燥颖果。\n【植物形态】一年生或越年生草本，高60～100厘米。秆直立，通常6～9节。叶鞘光滑，常较节间为短；叶舌膜质，短小；叶片扁平，长披针形，长15～40厘米，宽8～14毫米，先端渐尖，基部方圆形。穗状花序直立；长3～10厘米；小穗两侧扁平，长约12毫米，在穗轴上平行排列或近于平行，每小穗具3～9花，仅下部的花结实；颖短，第1颖较第2颖为宽，两者背面均具有锐利的脊，有时延伸成芒；外稃膜质，微裂成3齿状，中央的齿常延伸成芒，内稃与外稃等长或略短，脊上具鳞毛状的窄翼；雄蕊3；子房卵形。颖果长圆形或近卵形，长约6毫米，浅褐色。花期4～5月，果期5～6月。\n【产地分布】全国各地大量栽培。\n【采收加工】夏至前后，成熟果实采收后，取瘪瘦轻浮与未脱净皮的麦粒，筛去灰屑，用水漂洗，晒干。\n【药材性状】干瘪颖果呈长圆形，两端略尖，长约7毫米，直径约2.6毫米。表面黄白色，皱缩。有时尚带有未脱净的外稃与内稃。腹面有一深陷的纵沟，顶端钝形，带有浅黄棕色柔毛，另一端成斜尖形，有脐。质硬而脆，易断，断面白色，粉性差。无臭，味淡。\n【功效与作用】除虚热、止汗。属清热药下属分类的清虚热药，或属收涩药下属分类的固表止汗药。\n【临床应用】内服：煎汤，用量15～30克，或研末；止汗，宜微炒用。主治阴虚发热、盗汗、自汗。\n【化学成分】主要含淀粉、蛋白质、糖类等成分。\n【使用禁忌】无汗而烦躁或虚脱汗出者忌用。\n【配伍药方】①治盗汗及虚汗不止：浮小麦不以多少。文武火炒令焦，为细末，每服6克，米饮汤调下，频服为佳。(《卫生宝鉴》独圣散)\n【性味归经】性凉，味甘。归心经。\n②治盗汗：用浮小麦一抄。煎汤。调防风末6克服。(《卫生易简方》)\n③治男子血淋不止：浮小麦加童便炒为末，砂糖煎水调服。(《奇方类编》)\n④治脏躁症：浮小麦30克，甘草15克，大枣10枚。水煎服。(《青岛中草药手册》)" },

  {
    "id": 3,
    "name": "青蒿",
    "key": "青蒿",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/083e5b88-7182-4596-9052-36c37f5d7d5d.jpg",
    "cat": 10,
    "price": 18.5,
    "brief": "青蒿 青蒿草中药材新鲜500g包邮青蒿粉桐臭蒿 苦蒿草蒿黄蒿中草药",
    "alias": "【中药名】\n青蒿 qinghao\n【别名】\n草蒿、臭蒿、臭青蒿、香丝草、酒饼草。\n【英文名】\nArtemisiae Annuae Herba。",
    "explain": "【药用部位】菊科植物黄花蒿Artemisia annuaL.的地上部分。\n【植物形态】一年生草本。茎直立，具纵纹，多分枝，光滑无毛。叶互生，无毛，常为3回羽状分裂。裂片短而细，先端尖，表面深绿色，有极小的粉末状短柔毛，背面淡绿色，具细小的毛或粉末状腺状斑点；叶轴两侧具狭翅；叶柄基部稍扩大抱茎；茎上部的叶向上逐渐细小呈线形，无柄，基生叶在开花时凋谢。头状花序细小球形，具细软短梗，排列成圆锥状；总苞的苞片2～3层，无毛，外层卵形，绿色；内层椭圆形，边缘膜质，背面中央为绿色。花托长椭圆形，无毛；花皆为管状花，黄色；雌花较少，围于外层，雌蕊1枚，柱头2裂，呈长叉状开展；内为两性花，花冠先端分裂；雄蕊5枚，聚药，药先端呈三角形，基部两侧下延呈一短尖。瘦果椭圆形。花期8～10月，果期10～11月。\n【产地分布】生于山坡草地、荒地、河岸、路旁、村边。分布于广东等地。\n【采收加工】夏、秋季花盛开或结果时采收。割取地上部分，除去老茎，阴干或晒干。\n【药材性状】茎圆柱形，上部多分枝；表面黄绿色或棕黄色，具纵棱线；质略硬，易折断，断面中部有髓。叶互生，暗绿色或棕绿色，卷缩易碎，完整者展平后为3回羽状深裂，裂片及小裂片矩圆形或长椭圆形，两面被短毛。气香特异，味微苦。\n【性味归经】性寒，味苦、辛。归胆经、肝经。\n【功效与作用】清热解毒、除骨蒸、截疟。属清热药下分类的清虚热药。\n【临床应用】用量6～12克，煎服，入煎剂宜后下。用治温病、暑热、骨蒸劳热、暑邪发热、疟疾、痢疾、阴虚发热、疮痒、湿热黄疸等。\n【药理研究】有抗菌、抗病毒、抗寄生虫、抗肿瘤、解热作用；调节机体免疫功能；可减慢心率，抑制心肌收缩力，降低冠脉流量，降低血压，且有一定抗心律失常作用；尚能保护肝脏，防护辐射，缩短戊巴比妥睡眠时间等。\n【化学成分】主含多种倍半萜内酯、黄酮类、香豆素类、挥发油等。另含青蒿素、青蒿醇、青蒿酸、青蒿酸甲酯、槲皮素、小茴香酮、蒿属香豆精等成分。\n【使用禁忌】产后血虚，内寒作泻，及饮食停滞泄泻者，勿用。\n【配伍药方】①治中暑：青蒿嫩叶捣烂，手捻成丸，黄豆大。新汲水吞下，数丸立愈。(《本草汇言》)\n②治暑毒热痢：青蒿叶30克，甘草3克。水煎服。(《圣济总录》)\n③治温疟痰甚，但热不寒：青蒿60克(童子小便浸，焙)，黄丹15克为末。每服6克，白汤调下。(《仁存堂经验方》)\n④治鼻中衄血：青蒿捣汁服之，并塞鼻中。(《卫生易简方》)\n⑤治聤耳脓血出不止：青蒿捣末，绵裹纳耳中。(《圣惠方》)\n⑥治牙齿肿痛：青蒿一握，煎水漱之。(《济急仙方》)\n⑦治瘊子：新汲水按青蒿汁，调蛤粉敷之。(《百一选\n\n⑧治蜂螫人：嚼青蒿敷之。(《肘后方》)" }, (_ref = {


    "id": 4,
    "name": "胡黄连",
    "key": "胡黄连",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/addc937b-5c4b-4237-9eb1-b3f1b078f6ca.jpg",
    "cat": 10,
    "price": 57,
    "brief": "胡黄连50g包邮 胡连 胡黄连 中药材店铺大全 裕草" }, _defineProperty(_ref, "price",
  65.5), _defineProperty(_ref,
  "alias", "【中药名】\n胡黄连 huhuanglian\n【别名】\n胡连、割孤露、泽割孤、西藏胡黄连。\n【英文名】\nPicrorhizae Rhizoma。"), _defineProperty(_ref,
  "explain", "【来源】玄参科植物胡黄连Picrorhiza scrophulariiflora Pennell的干燥根茎。\n【植物形态】多年生草本，高4～12厘米。根茎粗达1厘米，根自节上生出。叶柄短，叶匙形或卵形，长3～6厘米，干燥后变黑色，基部下延，边缘有锯齿或重锯齿。花葶有棕色腺毛，穗状花序长1～2厘米，花梗长2～3毫米，花萼长4～6毫米，果时达1厘米，萼裂片披针形或倒卵状长圆形，花冠暗紫色，长8～10毫米，外表面被毛，花冠下唇片约为上唇片的1/2，3裂，侧裂片顶端2或3小齿，上唇片钩状，顶端下凹。花丝无毛，前对花丝长约7毫米，后对花丝长约4毫米。子房长1～1.2毫米。花柱长为子房的5～6倍。蒴果狭卵圆形，长8～10毫米。花期7～8月，果期8～9月。\n【产地分布】生于海拔3600～4400米的高寒地区的岩石上及石堆或草地。分布于四川西部、云南西北部及西藏东南部。\n【采收加工】秋季采挖，除去须根和泥沙，晒干。\n【药材性状】呈圆柱形，略弯曲，偶有分枝，长3～12厘米，直径0.3～1厘米。表面灰棕色至暗棕色，粗糙；有较密的环状节，具稍隆起的芽痕或根痕，上端密被暗棕色鳞片状的叶柄残基。体轻，质硬而脆，易折断，断面略平坦，淡棕色至暗棕色，木部有4～10个类白色点状维管束排列成环。气微，味极苦。\n【性味归经】性寒，味苦。归肝经、胃经、大肠经。\n【功效与作用】退虚热，除疳热，清湿热。属清热药下属分类的清虚热药。\n【临床应用】用量3～10克，水煎服，或入丸、散，外用适量，研末调敷，或浸汁点眼。用治骨蒸潮热，小儿疳热，湿热泻痢，黄疸尿赤，痔疮肿痛。\n【药理研究】具有保肝利胆、抗真菌作用；抗糖尿病活性；降血脂；抑制盐酸-乙醇诱导的大鼠胃溃疡；抗肿瘤；对心脏有保护作用。\n【化学成分】胡黄连根茎中含有环烯醚萜糖甙，另含胡黄连苷Ⅰ、胡黄连苷Ⅱ、桃叶珊瑚苷、岩白菜素、11- 0-(4’-甲氧基没食子酰基)-岩白菜素、云杉苷等。\n【使用禁忌】脾胃虚弱者慎服。\n【配伍药方】①治骨蒸劳气烦热，四肢无力，夜卧虚汗，唇口干焦，面无血色，日渐赢瘦：胡黄连60克，柴胡(去苗)60克，鳖甲(生用)60克。上件药，捣细罗为散，每服，用生姜酒调3克。每日早晨、日午、临卧各一服。(《圣惠方》三圣散)\n②治痈肿疮肿，已溃未溃者皆可用之：胡黄连、穿山甲(烧存性)等分为末。以茶或鸡子清调涂。(《易简方》)\n③治旋耳疮：胡黄连研细末，麻油调搽。(《外科证治全书》)\n④治口糜：胡黄连1.5克，细辛、胡黄连各9克，藿香3克。上四味为末，每用1.5克，干掺口内，漱千漱吐之。(《卫生宝鉴》胡黄连散)\n⑤治血痢：胡黄连、乌梅肉、灶下土，上等分为末，腊茶清调下，空心温服。(《普济方》黄连丸)"), _ref),

  {
    "id": 5,
    "name": "罗汉果",
    "key": "罗汉果",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/cc2d847b-a906-4ba9-ab64-62c41cbab2a5.jpg",
    "cat": 10,
    "price": 17.5,
    "brief": "野生罗汉果大果广西桂林永福散装凉茶润喉茶新鲜干果可搭配胖大海",
    "alias": "【中药名】\n罗汉果 luohanguo\n【别名】\n拉汗果、假苦瓜、光果木鳖、金不换。\n【英文名】\nSiraitiae Fructus。",
    "explain": "【药用部位】葫芦科植物罗汉果Momordica grosvenori Swingle.的成熟果实。\n【植物形态】多年生攀援草质藤本。长达5米。茎暗紫色，具纵棱，被白色或黄色柔毛及红色腺点；卷须2裂，几达中部。叶互生，叶片心状卵形，膜质，叶柄稍扭曲，被短柔毛。花单性，雌雄异株；雄花为腋生总状花序，被白色柔毛及红色腺毛，花萼漏斗状，5裂，被灰黄色柔毛，裂片先端呈线状长尾，花冠橙黄色，5全裂，先端渐尖，外被黑柔毛，雄蕊3枚，被白色腺毛，花药分离。雌花单生或3～5朵簇生于叶腋或呈短总状花序，子房下位，长卵形，被柔毛，花柱3，柱头2叉，具3个黄色或黑色退化雄蕊。果实圆球形或长圆球形或倒卵形，灰棕色，被柔毛，具10条纵线。种子扁长圆形，淡黄色，边缘具不规则齿状缺刻，中央稍凹入，边缘有放射状沟槽。花期6～8月，果期8～10月。\n【产地分布】生于海拔300～500米的山区。分布于广西、江西、广东等地。\n【采收加工】秋季果实由嫩绿色变深绿色时采收，晾数天后，低温干燥。\n【药材性状】罗汉果呈卵形、椭圆形或球形，长4.5～8.5厘米，直径3.5～6厘米。表面褐色、黄褐色或绿褐色，有深色斑块及黄色柔毛，有的有6~11条纵纹。顶端有花柱残痕，基部有果梗痕。体轻，质脆，果皮薄，易破。果瓤(中、内果皮)海绵状，浅棕色。种子扁圆形，多数，长约1.5厘米，宽约1.2厘米；浅红色至棕红色，两面中间微凹陷，四周有放射状沟纹，边缘有槽。气微，味甜。\n【性味归经】性凉，味甘。归肺经、大肠经。\n【功效与作用】清热润肺、滑肠通便。属清热药下属分类的清热解毒药。\n【临床应用】用量9～15克，内服煎汤。用治伤风感冒咳嗽、咽痛失音、暑热口渴、肠燥便秘。\n【药理研究】罗汉果可增强机体的细胞免疫功能；大剂量的罗汉果可能提高脾特异性玫瑰花环形成细胞的比率。\n【化学成分】含罗汉果苷Ⅳ、罗汉果苷V、罗汉果苷Ⅶ，该苷甜度为蔗糖的300倍，苷元是葫芦素类化合物。尚含十多种氨基酸、黄酮、罗汉果苷元-3，24-二-氧-β-葡萄糖苷、D-甘露醇、罗汉果二醇苯甲酸酯、山柰酚和大量果糖。种仁含有油，其脂肪酸有癸酸、月桂酸、肉豆蔻酸、棕榈酸、硬脂酸、油酸及亚油酸等。\n【使用禁忌】肺寒及脾胃虚寒者忌服。\n【配伍药方】①治喉痛失音：罗汉果1个，切片，水煎，待冷后，频频饮服。(《食物中药与便方》)\n②治肺燥咳嗽痰多，咽干口燥：罗汉果半个，陈皮6克，瘦猪肉100克。先将陈皮浸，刮去白，然后与罗汉果、瘦肉共煮汤，熟后去罗汉果、陈皮，饮汤食肉。(《新中医》1982，(11)：45)\n③治急、慢性支气管炎，扁桃体炎，咽喉炎，便秘：罗汉果15～30克，开水泡，当茶饮。(《全国中草药汇编》)" },

  {
    "id": 6,
    "name": "大飞扬草",
    "key": "大飞扬草",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/1a277942-7f2f-4b3f-b38a-6fac4046a385.jpg",
    "cat": 10,
    "price": 17.5,
    "brief": "山间谷草 飞扬草 500g大飞扬草 大乳汁草 节节花 非野生中药材",
    "alias": "【中药名】\n大飞扬草 dafeiyangcao\n【别名】\n飞扬草、天泡草、大乳汁草、催乳草、大奶浆草。\n【英文名】\nEuphorbiae Hirtae Herba",
    "explain": "【药用部位】大戟科植物飞扬草Euphorbia hirta L.的全草或带根全草。\n【植物形态】一年生草本，被粗毛，含白色乳汁，通常由茎基部分枝。枝常淡红色或淡紫色，匍匐状或扩展，长15～40厘米。叶对生，卵形至矩圆形，长1～4厘米，基部略狭而偏斜，边缘有小锯齿，中部通常有紫斑；托叶小，线形。杯状花序多数密集成腋生头状花序；总苞宽钟形，外被柔毛，顶端4裂；腺体4，漏斗状，有短柄及花瓣状附属物；花单性，无花被；雌雄花同生于总苞内；雄花多数，雄蕊1枚；雌花单1，生于花序中央，子房3室，花柱3。蒴果阔卵形，长约1.6毫米，被毛，三角形。花期全年。\n【产地分布】生于旷地、路旁、园边。分布于广东、广西、福建等地。\n【采收加工】夏、秋季采收，晒干。\n【药材性状】干燥带根全草。根细长弯曲；茎圆柱形，粗1.3毫米，稍屈曲，红棕色，有不规则的浅纵皱及小疣点，节明显，被黄绿色粗毛；质坚脆易断，断面木质白色，中空；叶多卷缩，纸质易碎；叶腋有花序，花细小，极多，干缩，或带蒴果。气弱而特异。\n【性味归经】味辛、酸，性寒。归肺经、肝经。\n【功效与作用】清热、解毒、通乳、渗湿、止痒。属清热药下属分类的清热解毒药。\n【临床应用】用量6～9克，煎服；鲜品1～2两，外用：煎水洗或捣敷。用治急性肠炎、菌痢、淋病、尿血、肺痈、乳痈、疔疮、肿毒、湿疹、脚癣、皮肤瘙痒。\n【药理研究】大飞扬草具有中枢性镇痛及解热的功效与作用；具有抗菌、抗炎作用，能兴奋子宫。尚具有止泻作用，对变形阿米巴有细胞毒作用。雌性豚鼠在性成熟期前给予大飞扬草，可使乳腺加快发育及泌乳。\n【化学成分】含黄酮苷、酚类、三萜类。茎含卅烷醇、蒲公英赛醇、无羁萜、β-香树脂醇、β-谷甾醇、蒲公英赛酮、杨梅苷及卅一烷。花含没食子酸。\n【使用禁忌】孕妇、脾胃虚寒者慎用。\n【配伍药方】①治肺痈：鲜大飞扬全草一握，捣烂。绞汁半盏，开水冲服。(《福建民间草药》)\n②治乳痈：大飞扬全草60克和豆腐120克炖服；另取鲜草一握，加食盐少许，捣烂加热水外敷。(《福建民间草药》)\n③治赤白痢疾：大飞扬草15～24克，赤痢加白糖、白痢加红糖，用开水炖服。(《福建民间草药》)\n④治小便不通，淋血：鲜大飞扬30～60克。酌加水煎服，日服2次。(《福建民间草药》)\n⑤治血尿：鲜飞扬草、鲜金丝草各30克，鲜乌韭、红糖各15克。水煎服。(《福建药物志》)\n⑥治带状疱疹：鲜飞扬全草捣烂取汁，加雄黄末1.5克。调匀，涂抹患处。(《福建中草药》)\n⑦治麦粒肿：鲜飞扬草折断，取乳汁涂患处。(《福建中草药》)" },

  {
    "id": 7,
    "name": "一点红",
    "key": "一点红",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/83b8dff0-694d-4acc-a9ca-2cbecb12407c.jpg",
    "cat": 10,
    "brief": "正宗 一点红 500g新鲜晒干叶下红中药材羊蹄草红叶草红背叶中草药",
    "price": 17.5,
    "alias": "【中药名】\n一点红 yidianhong\n【别名】\n红背叶、叶下红、羊蹄草、红背中、土公英。\n【英文名】\nEiliae Herba",
    "explain": "【药用部位】本品为菊科植物一点红Eilia sonchifolia (L.) DC.的全草。\n【植物形态】一年生或多年生草本，高10～50厘米。茎直立，无毛或被疏毛，时有分枝。叶稍带肉质，茎下部叶片卵形，琴状分裂或具钝齿，长4～9厘米，上部叶较小，常抱茎，叶面绿色，叶背常紫红色。头状花序，长12～15毫米，具长柄，花枝通常二歧分枝，总苞绿色，圆柱状，基部稍膨大，苞片1列，约与花冠等长；花紫色，全为管状花，花冠顶端5齿裂。瘦果圆柱形，长约4毫米，有棱，冠毛白色，柔软。花期冬末至春初。\n【产地分布】常生于山野、村边、路旁、田洼或旷野草地上。主产于广东、广西、福建、贵州、云南、湖南、江西等地。\n【采收加工】夏、秋季采收，去除杂质，洗净，晒干。\n【药材性状】本品长10～70厘米。根呈现圆锥状，多弯曲。茎呈圆柱形，黄绿色至棕褐色，直径可达0.5厘米，有分枝。体轻质脆，易折断，断面较平坦，髓部占较大部分，类白色。单叶互生，灰绿色至灰褐色，皱缩。茎下部叶卵形，琴状分裂或具钝齿，长4～10厘米，上部叶较小，无柄，常抱茎。头状花序，总苞圆柱状，基部稍膨大，瘦果圆柱形，长3～5毫米。气微，味淡。\n【性味归经】性凉，味苦。归肺经、胃经、大肠经。\n【功效与作用】清热解毒，消炎，利尿。属清热药下分类的清热解毒药。\n【临床应用】15～30克；外用适量，鲜品捣烂敷患处。用于肠炎、痢疾、尿路感染、上呼吸道感染、结膜炎、口腔溃疡、疮痈。\n【药理研究】1.抑菌作用：一点红醇提和水提物对大肠杆菌、绿脓杆菌，福氏痢疾杆菌、伤寒杆菌、肠炎杆菌、金黄色葡萄球菌、乙型溶血性链球菌、肺炎双球菌等均具有抑菌作用。\n2.抗炎镇痛作用：一点红水提物及醇提物灌胃给药，均能抑制小鼠腹腔毛细血管通透性，减少乙酸所致小鼠扭体次数；水提物能减轻巴豆油致小鼠耳郭肿胀。\n3.保肝作用：一点红水提物及醇提物灌胃给药，对CCL₄所致急件肝损伤小鼠血清巾ALT、AST活性升高有抑制作用。\n4.免疫增强作用：一点红水提物和醇提物灌胃给药，能增加免疫功能低下小鼠腹腔巨噬细胞吞噬百分率和乔噬指数。\n5.益智作用：一点红水提物和醇提物灌胃给药，对小鼠记忆获得障碍有改善作用。\n6.清除自由基作用：一点红提取物总黄酮对羟自由基有清除作用。\n【化学成分】叶、茎、根中含微量氢氰酸，全草含黄酮化合物山柰酚-3-β-D-半乳糖苷、槲皮苷、芦丁、槲皮素以及熊果酸等。地上部分含千里光碱、β-谷甾醇、棕榈酸和蜂蜜酸等。\n【使用禁忌】过量使用易导致氢氰酸中毒。\n【配伍药方】1.疖、蜂窝组织炎、脓肿、乳腺炎、甲沟炎：一点红、穿心莲、白花蛇舌草、鸡骨香、两面针各50克，共研末。高压消毒后，加凡士林至1000克，即成25%的药膏。敷患处，每日1次。\n2.大叶性肺炎：一点红、岗梅各30克，十大功劳15～30克。水煎，分2次服，每日1剂。\n3.泌尿系感染、睾丸炎：一点红、狗肝菜各500克，车前草250克。加水1500毫升，煎成500毫升。每服2毫升，每口3次。\n4.麦粒肿：一点红、千里光、野菊花各15克。水煎，分2次服，每日1剂。\n5.小儿上呼吸道感染、急性扁桃体炎：一点红、古羊藤各等量，每斤煎取浓液500毫升。3个月～3岁，每次20～40毫升；3岁以上酌增。" },

  {
    "id": 8,
    "name": "胆木",
    "key": "胆木",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/d6e2b1a3-22af-4851-92fe-6a20a5964b04.jpg",
    "cat": 10,
    "price": 17.5,
    "brief": "熊胆木 熊胆树 苦胆木 野生中药材 苦木 苦树皮 干品500克新晒干",
    "alias": "【中药名】\n胆木\n【别名】\n山熊胆、熊胆树、细叶黄棵木、黄羊木、树黄柏。\n【外语名】\n英文名：Medicinal Fatheadtree",
    "explain": "【药用部位】为茜草科植物胆木Nauclea officinalis Pierre. ex Pitard的枝、树皮。\n【植物形态】乔木，高4～12米，小枝纤细而光滑。叶纸质，对生，椭圆形，稀倒圆形，长7～11厘米，宽3.5～5厘米。顶端渐尖而略钝，基部楔形，侧脉每边5～7对，纤细，向上斜伸，近边缘处连结，在叶片两边略凸起；叶柄长10～15厘米，稍粗壮；托叶早落，倒卵形，长6～10厘米，顶端钝圆。头状花序顶生，单生；总花梗长1～3厘米，中部以下有早落的苞片。小坚果合成一球状体，成熟时黄褐色，直径9～15厘米，表面粗糙。种子椭圆形，长1厘米，腹面平坦，背面拱起，种皮黑色有光泽并有微小窝孔。果期夏季。\n【产地分布】生于半山腰荫蔽潮湿地带的杂木林中。主产于广东、广西、海南、湖南等地。\n【采收加工】全年均可采，切片，晒干。\n【药材性状】多劈成不规则的片、块，浅黄色或棕黄色，有的残留皮部，外皮灰绿色或者棕绿色，粗糙，具多数点状皮孔，较疏松，易剥离。横切面皮部棕褐色，木部黄色或棕黄色。质坚硬，气微，味苦。\n【性味归经】性寒，味苦。归肺经、大肠经。\n【功效与作用】清热解毒，消肿止痛。属清热药下分类的清热解毒药。\n【临床应用】煎汤内服，用量15～30克。外用适量，煎水洗。用治乳蛾，痢疾，热淋，下肢溃疡，疖肿脓疡，湿疹。\n【药理研究】从胆木茎中分离得到的乌檀醛碱经抑菌试验表明有抑菌作用，乌檀醛碱在100μg/ml以上对金黄色葡萄球菌、蜡样芽胞杆菌有明显抑制作用。胆木浸膏片对冰醋酸所致的小鼠腹部毛，细血管通透性增加和二甲苯所致的小鼠耳肿胀具有非常显著的抑制作用，并显著抑制大鼠蛋清性足跖肿胀形成和棉球性慢性肉芽组织增生，对伤寒V₁多糖菌苗所致的家兔双高峰体温升高有解热功效与作用。\n【化学成分】胆木茎中主要含生物碱类和生物碱苷类，其中生物碱有：乌檀费新碱，乌檀费丁碱，乌檀福林碱，1-乙酰基咔啉，乌檀费林碱和乌檀醛碱。生物碱苷有胆木碱庚，胆木碱辛和长春花苷内酰胺。另外含有奎诺酸，β-谷甾醇，香草酸。\n【使用禁忌】尚不明确。\n【药方】1.治钩端螺旋体病：①胆木注射液(每1毫升含胆木的乙醇提取物3克)，每8小时肌内注射1次，每次2～3毫升，用至体温正常后2～3天。有出血倾向者加紫珠草30克，水煎，每日分3次服。②胆木、大青叶、地胆草、紫珠草各60～90克(小儿酌减)，加水3碗，煎成1碗，分3次口服。在口服合剂的同时可加用胆木注射液。(《全国中草药汇编》)\n2.上呼吸道感染：胆木注射液，每1毫升相当于生药1克，每次肌注2毫升，每日1次。(《全国中草药汇编》)" },

  {
    "id": 9,
    "name": "布渣叶",
    "key": "布渣叶",
    "price": 17.5,
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/5b832da4-d922-49e0-a60b-51f66b693e14.jpg",
    "cat": 10,
    "brief": "布渣叶250g包邮布渣叶草破布叶麻布叶烂布渣 薢宝叶广东凉茶原材",
    "alias": "【中药名】\n布渣叶 buzhaye\n【别名】\n崩补叶、山茶叶、蓑衣子、破布叶、麻布叶。\n【英文名】\nMicroctis Folium",
    "explain": "【药用部位】椴树科植物破布叶Microcos paniculata Linn.的叶。\n【植物形态】灌木或小乔木。树皮灰黑色。单叶互生，纸质，卵形或卵状长圆形，顶端渐尖，基部浑圆，幼叶两面均被星状柔毛，后无毛或近无毛，边缘有小锯齿，基出脉3条，网脉很明显，叶柄粗壮长；托叶线状披针形，长约为叶柄之半。圆锥花序顶生或生于上部叶腋内，花序和花梗均密被灰黄色星状柔毛；萼片5枚，长圆形，被星状柔毛；花瓣5片，长圆形，两面均被毛；雄蕊多数，离生；子房近球形，无毛。核果近球形或倒卵状圆球形，黑褐色，无毛。\n【产地分布】布渣叶生于山谷、丘陵、平地或村边、路旁的灌木丛中。分布于广东、海南、云南、广西等地。\n【采收加工】夏、秋季采收。摘取叶片，阴干或晒干(不宜在烈日下曝晒，否则色黄质次)。\n【药材性状】布渣叶的叶片多皱缩或破碎。完整者展平后呈卵状长圆形或倒卵状矩圆形，黄绿色、绿褐色或黄棕色，有短柄。先端渐尖，基部圆钝，稍偏斜，边缘具细齿。基出脉3条，侧脉羽状，小脉网状。叶脉及叶柄被柔毛。纸质，易破碎。气微，味淡，微酸涩。\n【性味归经】味甘、淡，性微寒。归脾经、胃经。\n【功效与作用】清热消滞、利湿退黄。属清热药下属中的清热泻火药。\n【临床应用】用量15～30克，煎服；亦可配作凉茶用。用治感冒、食滞、湿热食滞之脘腹胀痛、食少泄泻、湿热黄疸，也有用治急性黄疸型肝炎，单纯性消化不良。\n【药理研究】布渣叶水提物对离体豚鼠心脏有增加冠脉血流量的功效与作用，并能提高小鼠耐缺氧能力，对垂体后叶素所致的大鼠急性心肌缺血有保护作用，增加麻醉兔的脑血流量，降低血压与脑血管阻力。\n【化学成分】布渣叶含黄酮类成分，有异鼠李黄素、山柰黄素、槲皮黄素、5，6，4'-三羟基-3'-甲氧基黄酮-7-0-鼠李糖基葡萄糖苷、5，6，8，4'-四羟基黄酮-7-0-鼠李糖苷等。\n【使用禁忌】孕妇慎服，\n【配伍药方】1.治消化不良；腹泻：布渣叶、番石榴叶、辣蓼各18克。水煎服，每日两剂。重症适当配合补液及抗菌素治疗。\n2.治小儿食欲不振、食滞腹痛：布渣叶、岗梅根、山楂、麦芽各9克，水煎服。" },

  {
    "id": 10,
    "price": 17.5,
    "name": "方解石",
    "key": "方解石",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/3e2d2b7e-6bae-448a-b10a-f0570c8f2bd1.jpg",
    "cat": 10,
    "brief": "方解石 中药材方解石 寒水石 凝水石 水石 中药材新品 正品包邮 500g",
    "alias": "【中药名】\n方解石 fangjieshi\n【别名】\n黄石、方解石、寒水石、凝水石、水石。\n【英文名】\nCalcite。",
    "explain": "【药用部位】为碳酸盐类方解石族矿物方解石Calcite矿石。\n【矿物形态】晶体结构属三方晶系。晶体为菱面体，也有呈柱状及板状者。常以钟乳状或致密粒状集合体产出。多为无色或乳白色，如有混入物，则成灰、黄、玫瑰、红、褐等各种色彩。具玻璃光泽，透明至不透明，有完全的解理，晶体可沿三个不同的方向劈开。断口贝壳状，硬度3，性脆，相对密度2.6～2.8。是内生热液矿脉及沉积的碳酸盐类岩石的重要组成部分。\n【产地分布】产于沉积岩和变质岩中，金属矿脉中也多有存在，而且晶体较好。分布广泛，河北、江苏、浙江、安徽、江西、河南、湖北、湖南、广东、广西、四川、贵州、西藏、甘肃、青海、新疆等地均有产出。\n【采收加工】采挖出后除去表面附着泥土、水苔等杂质。\n【药材性状】方解石主为菱面体集合体，呈斜方扁块状、斜方柱状。白色，有的稍带浅黄或浅红色调。表面光滑，有棱。透明至半透明；玻璃光泽，用小刀可刻划成痕。体较重，质硬而脆，易砸碎，碎片多呈斜方形或斜长方形。无臭，无味。本品以色白、透明、有光泽、击碎后呈方形、具棱角者为佳。\n【性味归经】性寒，味苦、辛。\n【功效与作用】清热泻火解毒。属清热药下分类的清热泻火药。\n【临床应用】内服：煎汤，10～30克；或入散剂。主治胸中烦热，吐酸口渴，黄疸。\n【药理研究】研究证明，方解石有减低毛细血管通透性，抑制体液外渗及水肿，抑制神经应激机能的功效与作用。\n【化学成分】方解石主含碳酸钙，其中氧化钙56%，二氧化碳44%。尚含少量镁、铁、锰，以及微量的锌、锶、铅等。\n【使用禁忌】非实热者慎用。" },

  {
    "id": 11,
    "price": 17.5,
    "name": "鱼胆草",
    "key": "鱼胆草",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/b4258ce0-bec9-4381-9726-84bd09505338.jpg",
    "cat": 10,
    "brief": "野生水灵芝 水黄连 鱼胆草 青鱼胆草 四黄草中药材中草药100g包邮",
    "alias": "【中药名】\n鱼胆草\n【别名】\n金盆、青鱼胆草、水灵芝、水黄连。\n【外语名】\n拉丁文名：Herba Swertiae Davidi",
    "explain": "【药用部位】为龙胆科獐牙菜属川东獐牙菜Swertia davidi Franch.的全草。\n【植物形态】多年生草本，高15～50厘米。根纤细，呈明显黄色。茎直立，四棱形，棱上具狭翅，基部多分枝。单叶对生，基生叶及下部叶具柄，上部叶近于无柄；叶片条形、条状披针形至条状椭圆形，长1～5厘米，宽1～5毫米，先端渐尖或稍钝，边缘全缘略反卷，两面均为绿色。圆锥状复伞形花序，长达36厘米，稀为聚伞花序，花梗纤细；花萼4片，线状披针形；花蓝色或淡紫色，具蓝紫色脉纹；花瓣4裂，裂片卵形或卵状披针形，先端渐尖，花瓣内侧基部有2个腺体，腺体沟状，具长毛状流苏；雄蕊4，着生于花冠基部；子房狭椭圆形，无柄，花柱短，不明显，柱头2裂口蒴果椭圆形。花、果期9～11月\n【产地分布】生于海拔900～1200米的混交林下、河边、潮湿地。分布于浙江、安徽、湖北、湖南、四川、云南等地。\n【采收加工】6～9月采收，晒干或鲜用。\n【药材性状】全草呈黄绿色。根纤细少分枝，根茎略呈圆柱形。茎纤细圆形略呈四棱形，多分枝，尤以基部为多，光滑无毛。单叶对生，近无柄；多皱缩。完整叶片线形或线状披针形，长1～4厘米，宽1～3毫米，先端尖，全缘，略反卷。有时可见残留花序或花。气微，味苦。\n【性味归经】性凉，味苦。归肺经、肝经、胆经。\n【功效与作用】清热泻火，解毒利湿。属清热药下分类的清热泻火药。\n【临床应用】煎汤内服，用量3～9克，或研末冲服。外用适量，捣敷。主治急性结膜炎，急性咽喉炎，扁桃体炎，胆囊炎，胃肠炎，细菌性痢疾，泌尿道感染、湿热黄疸，肺热咳嗽，带状疱疹，疥癣疮毒。\n【药理研究】鱼胆草煎剂对白色葡萄球菌、鲍氏痢疾杆菌、福氏痢疾杆菌、志贺痢疾杆菌、伤寒及副伤寒杆菌、不凝集弧菌等有抑制作用，临床治疗菌痢有明显疗效。鱼胆草用95%乙醇提取物给小鼠灌服，对四氯化碳(CCI₄)所致小鼠肝损伤有明显保护作用，可使丙氨酸氨基转移酶( ALT)明显降低，从中分得之熊果酸能明显降低CCl₄所致小鼠ALT升高，表明其是保肝有效成分之一。\n【化学成分】鱼胆草主含黄酮类，环烯醚萜类、三萜类化合物等，以獐牙菜苦苷、龙胆苦苷、熊果酸、齐墩果酸为其代表成分。\n【使用禁忌】尚不明确。" },

  {
    "id": 12,
    "price": 17.5,
    "name": "水翁花",
    "key": "水翁花",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/3719c506-d7e2-4be2-aea1-a732bff95b12.jpg",
    "cat": 10,
    "brief": "水翁花中药材水雍花250克 广西野生水瓮花 水翁籽 酒瓮 酒翁 包邮",
    "alias": "【正名】\n水翁花\n【别名】\n水翁仔、水雍花、水榕花、大蛇药。\n【英文名】\nFlos Cleistocalycis。",
    "explain": "【药材来源】桃金娘科植物水翁Cleistocalyx opercutatus (Roxb.) Meer.et Perry.的幼嫩花蕾。\n【植物形态】常绿大乔木；小枝近圆柱形或四棱形。叶对生，近革质，阔卵状长圆形、长椭圆形或阔披针形，顶端钝而急尖或渐尖而有钝头，基部钝或渐狭，全缘；侧脉纤细，仅在下面较明显。聚伞状圆锥花序侧生和顶生，花小，青白色，近无梗；萼筒钟状，顶端近截平，萼裂片合生成帽状，顶端尖，有腺点，花开时整个脱落，花瓣4片，早落，雄蕊多数；子房下位。浆果近球形，成熟时紫黑色而有斑点。\n【产地分布】生于河道两岸水边和山谷溪旁，分布于广东、海南、广西、福建等地，野生或栽培。\n【采收加工】端午节前后采收。摘取水翁花带幼嫩花蕾的花序，晒至三成千时堆闷，发汗1～2天，然后日晒夜闷至足干，筛去枝梗、杂质。\n【药材性状】水翁花药材花蕾呈卵形或类球形，两端稍尖，皱缩。下半部有残存萼筒，呈倒钟形或环形，棕色，上半部呈帽状，由5枚合生的花瓣组成，浅棕黄色；除去帽状花冠，可见重叠的雄蕊；花丝棕黑色，中央有一锥形花柱。质硬。气微香，味苦。\n【性味归经】性寒，味苦。归肺经、脾经、胃经。\n【功效与作用】清热解暑、生津止渴、去湿消滞。属清热药下属分类的清热泻火药。\n【临床应用】用量15～30克，煎服；或泡水代茶饮；或煮粥。用治夏天感暑食滞所致的发热、咽干、口渴脘胀或呕吐泄泻。\n【药理研究】水翁花对常见化脓性球菌和肠道致病菌均有较强的抑制作用，另有强心作用。\n【化学成分】水翁花含黄酮苷类成分，有5,7-二羟基-6,8.二甲氧基黄烷酮等；没食子酸、没食子酸乙酯、熊果酸及多种氨基酸、糖类、β-谷甾醇。花蕾含挥发油0.18%，其主要成分为：α-蒎烯、β-蒎烯、月桂烯-Z、β-罗勒烯-Z、3 -罗勒烯-E、2,7-二甲基Ⅰ，6-辛二烯、芳樟醇、3,4-二甲基-2,4,6-辛三烯、小茴香烯、水杨酸甲酯、乙酸香叶酯、乙酸松油酯、香叶醇、蛇麻烯、8-愈创木烯、8-杜松烯、橙花叔醇等。\n【使用禁忌】尚不明确。\n【配伍药方】1.治感冒发热，细菌性痢疾，急性胃肠炎，消化不良：水翁花15～30克。水煎服。(广州空军《常用中草药手册》)\n2.治癍痧发热：干水翁花15克，狗肝菜15克。煎服。(《惠州地区中草药》)\n3.治食滞腹泻：干水翁花15克，或加布渣叶15克。水煎服。(《惠阳地区中草药》)" },

  {
    "id": 13,
    "price": 17.5,
    "name": "玄参",
    "key": "玄参",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/050c94e4-4dbe-46ff-8942-88275d84d303.jpg",
    "cat": 10,
    "brief": "玄参500g克玄参片元参片另有麦冬黑玄参粉正品非特级非野生中药材",
    "alias": "【中药名】\n玄参 xuanshen\n【别名】\n元参、北玄参、黑参、山当归、重台、逐马。\n【英文名】\nScrophulariae Radix。",
    "explain": "【药用部位】玄参科植物玄参ScrophuLaria ningpoensisH emsl.或北玄参Scrophularia buergeriana Miq. (S. oldhami Oliv.)的干燥根。\n【植物形态】多年生草本，高60～120厘米。根肥大，圆柱形，下部常分枝，外皮灰褐色。茎直立，四棱形，有沟纹。下部的叶对生，上部的叶有时互生，均具柄，叶片卵形至长卵形，长5～12厘米，宽3.5～12厘米，先端尖，基部圆形或近截形，边缘具细锯齿。聚伞花序总花序紧缩成穗状，花序轴及花梗均被腺毛，花萼长2～3毫米，5裂几达基部，裂片近圆形，边缘膜质，花冠黄绿色，管部斜壶状，能育雄蕊4枚，退化雄蕊1枚，近圆形，贴生在花冠管上，子房上位，2室。蒴果卵形，长约6毫米。\n【产地分布】喜生于湿润土壤中。分布于黑龙江、吉林、辽宁、河北、内蒙古等地。\n【采收加工】于10～11月挖取根部，除去茎叶及泥土，剥脱子芽供留种栽培用，根部晒至半干且内部色变黑时，剪去芦头及须根，堆放3～4天(发汗)后，晒干或烘干。\n【药材性状】圆柱形，中部略粗或上粗下细，有的微弯似羊角，长6～20厘米，宽1～3厘米。表面灰褐色，有纵皱纹，有细根及细根痕。质坚实，难折断，断面略平坦，色黑，微有光泽。有焦糖气，味甘、微苦，以水浸泡，水呈黑色。以条粗壮、质坚实、断面色黑者为佳。\n【性味归经】性微寒，味甘、苦、咸。归肺经、胃经、肾经。\n【功效与作用】凉血滋阴、泻火解毒。属清热药下分类的清热凉血药。\n【临床应用】用量9～15克，内服煎汤，或入丸散，治疗热病伤阴、舌降烦渴、温毒发斑、津伤便秘、骨蒸劳嗽、目赤、咽痛、瘰疬、白喉、痈肿疮毒、高血压。外用捣敷或研末调敷。治咽喉连舌肿痛：玄参、射干、黄药各15克，水煎服。\n【药理研究】玄参水浸、醇浸液灌服或注射给正常(猫、犬、兔)及肾型高血压犬均有降压作用，醇浸膏还能抗缺氧、抗心肌缺血、增加心肌营血量；水浸液对离体豚鼠支气管有明显的舒张作用，并能加强肾上腺素的作用。毒性：小鼠腹腔注射水煎剂的LD50为15.99～19.91克/千克。另具有解热、抗菌、保护心肌缺血、解痉、降血压、降血糖等作用。\n【化学成分】根中含哈巴苷(70%～80%)、8-邻甲基对香豆酰、哈巴苷，均系变黑的物质。另含哈巴俄苷、玄参三酯苷、玄参种苷、桃叶珊瑚苷、玄参环醚、京尼平苷、赛斯坦苷F、去咖啡酰毛蕊花糖苷、毛蕊花苷等。\n【使用禁忌】脾虚便溏或脾胃有湿者禁服。不宜与藜芦同用。\n【配伍药方】①治口舌生疮，久不愈：玄参、天门冬(去心、焙)、麦门冬(去心、焙)各30克。捣罗为末，炼蜜和丸，如弹子大。每以绵裹一丸，含化咽津。(《圣济总录》玄参丸)\n②治鼻中生疮：用玄参，水渍软，塞鼻中，或为末涤之。(《卫生易简方》)\n③治夜卧口渴喉干：玄参二片含口中，即生津液。(《吉人集验方》)\n④治气虚血壅，小便赤浊，似血非血，似溺非溺，溺管疼痛：玄参、车前子各30克，水煎服。(《辨证录》玄车丹)\n⑤治因阴阳偏，火有余而水不足，遇事或多言则心烦，常感胸中扰壤，纷纭而嘈杂：玄参、麦冬各60克，水煎服。(《辨证录》玄冬汤)" },

  {
    "id": 14,
    "price": 17.5,
    "name": "问荆",
    "key": "问荆",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/addbf2db-2939-428e-b083-8a8ba987c4b2.jpg",
    "cat": 10,
    "brief": "中药材问荆 正品问荆 接续草 公母草 搂接草 空心草 500克包邮",
    "alias": "【中药名】\n玄参 xuanshen\n【别名】\n元参、北玄参、黑参、山当归、重台、玄台、逐马。\n【英文名】\nScrophulariae Radix。",
    "explain": "【药用部位】玄参科植物玄参ScrophuLaria ningpoensisH emsl.或北玄参Scrophularia buergeriana Miq. (S. oldhami Oliv.)的干燥根。\n【植物形态】多年生草本，高60～120厘米。根肥大，圆柱形，下部常分枝，外皮灰褐色。茎直立，四棱形，有沟纹。下部的叶对生，上部的叶有时互生，均具柄，叶片卵形至长卵形，长5～12厘米，宽3.5～12厘米，先端尖，基部圆形或近截形，边缘具细锯齿。聚伞花序总花序紧缩成穗状，花序轴及花梗均被腺毛，花萼长2～3毫米，5裂几达基部，裂片近圆形，边缘膜质，花冠黄绿色，管部斜壶状，能育雄蕊4枚，退化雄蕊1枚，近圆形，贴生在花冠管上，子房上位，2室。蒴果卵形，长约6毫米。\n【产地分布】喜生于湿润土壤中。分布于黑龙江、吉林、辽宁、河北、内蒙古等地。\n【采收加工】于10～11月挖取根部，除去茎叶及泥土，剥脱子芽供留种栽培用，根部晒至半干且内部色变黑时，剪去芦头及须根，堆放3～4天(发汗)后，晒干或烘干。\n【药材性状】圆柱形，中部略粗或上粗下细，有的微弯似羊角，长6～20厘米，宽1～3厘米。表面灰褐色，有纵皱纹，有细根及细根痕。质坚实，难折断，断面略平坦，色黑，微有光泽。有焦糖气，味甘、微苦，以水浸泡，水呈黑色。以条粗壮、质坚实、断面色黑者为佳。\n【性味归经】性微寒，味甘、苦、咸。归肺经、胃经、肾经。\n【功效与作用】凉血滋阴、泻火解毒。属清热药下分类的清热凉血药。\n【临床应用】用量9～15克，内服煎汤，或入丸散，治疗热病伤阴、舌降烦渴、温毒发斑、津伤便秘、骨蒸劳嗽、目赤、咽痛、瘰疬、白喉、痈肿疮毒、高血压。外用捣敷或研末调敷。治咽喉连舌肿痛：玄参、射干、黄药各15克，水煎服。\n【药理研究】玄参水浸、醇浸液灌服或注射给正常(猫、犬、兔)及肾型高血压犬均有降压作用，醇浸膏还能抗缺氧、抗心肌缺血、增加心肌营血量；水浸液对离体豚鼠支气管有明显的舒张作用，并能加强肾上腺素的作用。毒性：小鼠腹腔注射水煎剂的LD50为15.99～19.91克/千克。另具有解热、抗菌、保护心肌缺血、解痉、降血压、降血糖等作用。\n【化学成分】根中含哈巴苷(70%～80%)、8-邻甲基对香豆酰、哈巴苷，均系变黑的物质。另含哈巴俄苷、玄参三酯苷、玄参种苷、桃叶珊瑚苷、玄参环醚、京尼平苷、赛斯坦苷F、去咖啡酰毛蕊花糖苷、毛蕊花苷等。\n【使用禁忌】脾虚便溏或脾胃有湿者禁服。不宜与藜芦同用。\n【配伍药方】①治口舌生疮，久不愈：玄参、天门冬(去心、焙)、麦门冬(去心、焙)各30克。捣罗为末，炼蜜和丸，如弹子大。每以绵裹一丸，含化咽津。(《圣济总录》玄参丸)\n②治鼻中生疮：用玄参，水渍软，塞鼻中，或为末涤之。(《卫生易简方》)\n③治夜卧口渴喉干：玄参二片含口中，即生津液。(《吉人集验方》)\n④治气虚血壅，小便赤浊，似血非血，似溺非溺，溺管疼痛：玄参、车前子各30克，水煎服。(《辨证录》玄车\n⑤治因阴阳偏，火有余而水不足，遇事或多言则心烦，常感胸中扰壤，纷纭而嘈杂：玄参、麦冬各60克，水煎服。(《辨证录》玄冬汤)" },

  {
    "id": 15,
    "price": 17.5,
    "name": "玉叶金花",
    "key": "玉叶金花",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/54e832ec-addf-400d-a1e6-502a9ef75479.jpg",
    "cat": 10,
    "brief": "玉叶金花 源中药材500克 玉叶金花藤叶 白纸扇 蝴蝶藤 凉藤 冷背",
    "alias": "【中药名】\n玉叶金花 Yuyejinhua\n【别名】\n凉口茶、蝴蝶藤、蜻蜓翅、生肌藤、大凉藤、白叶子。\n【英文名】\nCaulis Et Radix Mussaendae Pubescentis。",
    "explain": "【药用部位】为茜草科植物玉叶金花Mussaenda pubescens Ait. f.的根、枝、叶或全株。\n【植物形态】攀援灌木。小枝被平伏的短柔毛。叶对生，有时近轮生，膜质或薄纸质，卵状披针形.长4～8厘米，宽1，5～2.5厘米，顶端渐尖。基部楔形，上面近无毛或被疏毛，下面密被短柔毛。叶柄长2～8毫米，被粗柔毛。托叶三角形。花序顶生，稠密，聚伞花序，总花梗长8～11毫米，有时极短。苞片条形，被长柔毛。花梗极度短，萼管陀螺形，长3～4毫米，外面被柔毛，萼檐裂片线形，比萼管长2倍以上。基部被毛稍密，渐向上稀疏，花瓣状裂片广椭圆形，顶端钝或急尖，基部收狭，具柄，两面被柔毛，有纵脉5～7条；雄蕊5，长于花冠管喉部，花丝短，子房下位，2室。浆果近球形，肉质，长8～10毫米，宽6～7.5毫米，被疏柔毛，聚集成团，干后黑色。花期春夏季，果期秋冬季。\n【产地分布】玉叶金花生于较阴的山坡、灌木丛、河谷、林旁或路边。长江以南各省区有分布。\n【采收加工】全年均可采收，除去泥上、杂质，鲜用或晒干备用。\n【药材性状】茎圆柱形，直径3～7毫米，表面棕色，具细纵纹、点状皮孔及叶痕。质坚硬，断面黄白色或淡黄绿色，髓部明显，白色，气微，味淡。\n【性味归经】性凉，味甘、微苦。归肝经、脾经。\n【功效与作用】清热疏风，凉血解毒。属清热药下分类的清热解毒药。\n【临床应用】内服：煎汤，15～30克。外用适量。主治感冒，支气管炎，扁桃体炎，肾炎。\n【药理研究】1.玉叶金花的枝叶，福建民间有用其煎剂作为避孕药或堕胎药。抗早孕实验证明，本品中所含咖啡酸、阿魏酸对小白鼠有不同程度的抗甲孕作用，并发现五叶金花的水煎液和81%乙醇沉淀物为抗早孕活性部分。2.降血脂作用用小鸡实验，豆甾醇具有明显的降血清胆固醇作用，对心脏和肝脏无明显影响。\n【化学成分】玉叶金花茎中含海恩西阿苷元，玉叶金花苷A、B、C、M。还含β-谷甾醇、豆甾醇，咖啡酸，阿魏酸，山栀苷甲酯以及阿江榄仁酸。叶中古酚类，氨基酸，有机酸，糖类，豆甾醇，高级脂肪酸，以及玉叶金花苷酸甲酯和山栀苷甲酯等。\n【使用禁忌】尚不明确，谨慎用药。\n【配伍药方】①感冒发热：玉叶金花30克，马兰30克，水煎服。(《贵州民间草药》)\n②支气管炎、扁桃体炎 玉叶金花30克，八爪金龙10克，矮地茶30克，水煎服。(《贵州民间草药》)" },

  {
    "id": 16,
    "price": 17.5,
    "name": "白头翁",
    "key": "白头翁",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/930eab62-d905-43e6-8e41-d5f9c4f919a6.jpg",
    "cat": 10,
    "brief": "白头翁中药材无硫白头草奈何草白头翁野生野丈人正品500克包邮",
    "alias": "【中药名】\n白头翁 baitouweng\n【别名】\n老翁须、白头公、白头翁草、野丈人、胡王使者。\n【英文名】\nPulsatillae Radix。",
    "explain": "【药用部位】毛茛科植物白头翁Pulsatilla chinensis (Bge.) Regel的根。\n【植物形态】多年生草本，高达50厘米，全株密被白色长柔毛。主根粗壮，圆锥形，有时扭曲，外皮黄褐色。叶基生，3全裂，顶生小裂片具短柄，侧生小叶片无柄，上面疏被伏毛，下面密被伏毛。花茎1～2，花后伸长，密被长柔毛，花单一，萼片6，花瓣状，紫色，外面密被长绵毛，雄蕊多数，雌蕊有多数离生心皮，花柱丝状，果时延长，密被白色羽状毛。瘦果密集成头状，顶端有细长的羽毛状宿存花柱。\n【产地分布】生于山野、山坡及田野间，喜生于向阳处。分布于黑龙江、吉林、辽宁、内蒙古、河北等地。\n【采收加工】春季(4～6月)或秋季(8～9月)挖根，除去叶及残留的花茎和须根，保留根头白色茸毛，去净泥土，晒干。\n【药材性状】长圆柱形或圆锥形，稍弯曲，有时扭曲而稍扁，长5～20厘米，直径0.5～2厘米。表面黄棕色或棕褐色，有不规则的纵皱纹或纵沟，中部有时分出2～3支根，皮部易脱落而露出黄色木质部，且常朽蚀成凹洞，可见纵向突起的网状花纹，根头部稍膨大，有时分叉，顶端残留数层鞘状叶柄基及幼叶，密生白色长茸毛。质硬脆.折断面稍平坦，黄白色，皮部与木质部间有时出现空隙。气微，味微苦涩。以条粗长、质坚实者为佳。\n【性味归经】性寒，味苦。归胃经、大肠经。\n【功效与作用】清热解毒、凉血止痢。属清热药下分类的清热凉血药。\n【临床应用】用量10～15克，内服煎汤，或入丸散，治疗细菌性痢疾、阿米巴痢疾、鼻血、痔疮出血等。外用适量，捣敷，此外，还有抗滴虫、镇静、镇痛等作用。治疗原虫性痢疾：白头翁根茎15～30克，水煎分3次服，7天为一疗程；治疗细菌性痢疾：白头翁15克，黄柏9克，秦皮5克，木香、陈皮、甘草各2.5克，水煎服。\n【药理研究】煎剂及其皂苷体内外均有明显的抗阿米巴原虫作用，毒性很低；水提醇沉注射液能明显抑制体内移植瘤和荷瘤小鼠存活时间，还能提高机体免疫力，降低脾指数，升高胸腺指数；乙醇提取液对试管内的多种细菌和真菌有不同程度的抑制作用，抗菌有效成分是原白头翁素和白头翁素。具有抗菌、抗阿米巴原虫、抗病原体、镇静、镇痛等作用。\n【化学成分】全草含原白头翁素，根含三萜皂苷，水解后得苷元及葡萄糖和鼠李糖。另含白头翁皂苷B4、白桦脂酸、白头翁素、白头翁灵、莽草酸等。\n【使用禁忌】虚寒泻痢者慎服。\n【配伍药方】①治热痢下重：白头翁60克，黄连、黄柏、秦皮各90克。上四味，以水七升，煮取二升，去滓。温服一升，不愈更服。(《金匮要略》白头翁汤)\n②治温疟发作、昏迷如死：白头翁30克，柴胡、半夏、黄芩、槟榔各6g，甘草2.1克，水煎服。(《本草汇言》)\n③治外痔：白头翁，以根捣细贴之，逐血止痛。(《卫生易简方》)\n④治男子疝气，或偏坠：白头翁、荔枝核各60克，俱酒浸，炒为末，每早服9克。白汤调下。(《本草汇言》)⑤治气喘：白头翁6克，水煎服。(《文堂集验方》)" }] },



{
  "id": 2,
  "name": "祛风湿",
  "foods": [{
    "id": 1,
    "price": 17.5,
    "name": "丁公藤",
    "key": "丁公藤",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/6e2db217-b1e4-4427-b13c-3f7fc778af98.jpg",
    "cat": 6,
    "brief": "丁公藤中药材纯野生正品包公藤 500g",
    "alias": "【中药名】\n丁公藤 dinggongteng\n【别名】\n丁公藤、麻辣子藤、包公藤、斑鱼烈。\n【英文名】\nErycibes Caulis",
    "explain": "【药用部位】旋花科植物丁公藤Erycibe obtusfolia Benth.的藤茎。\n【植物形态】高大木质藤本。小枝黄绿色，有明显的棱，无毛。叶互生，淡红色，革质，椭圆形或倒长卵形，顶端钝或钝圆，基部渐狭成楔形，两面有毛，侧脉4～7对，在叶背面微突起，至边缘以内网结上举。聚伞花序，集成圆锥花序，腋生或顶生，花序轴、花序梗被淡褐色柔毛；花萼球形，萼片近圆形，外被淡褐色柔毛，有缘毛，毛不分叉；花冠白色，每一裂片具一近于三角形的外被毛的瓣中带；雄蕊5枚，不等长，花药与花丝近等长，花丝之间有鳞片；子房圆柱形，柱头圆锥状，贴着子房，两者近等长。浆果卵状椭圆形。\n【产地分布】生于山谷湿润密林中或路旁灌丛。分布于广东、海南、云南等地。\n【采收加工】全年均可采收，切成段或片，晒干。\n【药材性状】斜切段或片。外皮灰黄色、灰褐色或浅棕褐色，稍粗糙，有浅沟槽及不规则纵裂纹或龟裂纹。皮孔点状或疣状，黄白色。老的栓皮呈薄片剥落。质坚硬，纤维较多，不易折断。切面椭圆形，黄褐色或浅黄棕色，异型维管束呈花朵状或块状，木质部导管呈点状。气微，味淡。\n【性味归经】性温，味辛。归胃经、脾经、肝经。\n【功效与作用】祛风除湿、消肿止痛。属祛风湿药下属分类的祛风湿散寒药。\n【临床应用】用量3～6克，配制酒剂，内服或外搽。用治风湿痹痛、半身不遂、跌扑肿痛、慢性风湿性关节炎、青光眼、各种疼痛。\n【药理研究】丁公藤具有抗炎、缩瞳、镇痛、降低眼内压的功效与作用，并能解痉；对细胞免疫和体液免疫均有促进作用；有改善心功能作用。\n【化学成分】丁公藤含包公藤甲素、包公藤丙素、凹脉丁公藤碱、东莨菪素、东莨菪苷等及酚酯类和有机胺等。另含包公藤乙素、东莨菪内酯及微量的咖啡酸及绿原酸等化学成分。丁公藤碱Ⅱ可作为丁公藤的鉴别。\n【使用禁忌】有小毒。本品有强烈的发汗作用，虚弱者慎用，孕妇忌服。\n【配伍药方】①风湿痹痛，手足麻木：丁公藤、桂枝、枳壳、麻黄等，浸酒服。\n②跌打肿痛：单味浸酒，外搽患处。" },

  {
    "id": 2,
    "price": 17.5,
    "name": "大风艾",
    "key": "大风艾",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/b6a28340-1329-4995-8a30-0eb85affdbf2.jpg",
    "cat": 6,
    "brief": "新货艾纳香正品别名大风艾冰片艾牛耳艾大黄草500克包邮送量勺",
    "alias": "【中药名】\n大风艾 dafengai\n【别名】\n大风艾、艾纳香、冰片艾、牛耳艾。\n【英文名】\nBlumeae Balsamiferae Folium Et Cacumen。",
    "explain": "【药用部位】菊科植物艾纳香Blumea balsamifera DC.的全草。\n【植物形态】一年生或多年生大草本或灌木。全株密被黄白色茸毛，高达3米，具香气。茎直立，木质化，多分枝，青白色。单叶互生，短柄或无柄。叶片椭圆形或椭圆状披针形，边缘具不整齐锯齿，上面绿色有短柔毛，下面密被银白色茸毛。头状花序较小，排列成伞房状。瘦果有10棱，被茸毛，顶端有淡白色冠毛l轮。花期3～5月，果期9～10月。\n【产地分布】生于园边、路边林缘或山坡灌木丛中。分布于广东、广西、海南、云南、贵州、福建、台湾等地。\n【采收加工】夏、秋季采收，阴干。\n【药材性状】茎呈圆柱形，大小不等。表面灰褐色或棕褐色，有纵棱，分枝，密生黄褐色柔毛。断面木质部松软，黄白色，中央有白色髓。叶略皱缩或破碎，边缘具细锯齿，上面灰绿色，略粗糙，被短毛，下面密被白色长绢毛，嫩叶两面均密被银色长绢毛，叶脉带黄色，下面突出较明显；叶柄半圆形，密被短毛。叶质脆，易碎。气清香，味辛凉。\n【性味归经】性温，味辛、苦。归肝经、胃经、肺经。\n【功效与作用】温中活血，调经，祛风除湿，杀虫。属祛风湿药下属分类的祛风湿散寒药。\n【临床应用】用量10～20克，煎服；外用适量，鲜品捣烂敷患处，或煎水洗，或研末调敷患处。用治外感风寒、泻痢、腹痛肠鸣、肿胀、月经不调、痛经、筋骨疼痛、跌打损伤、湿疹、皮炎、癣疮。\n【药理研究】1.大风艾提取液有扩张血管、降低血压的功效与作用，临床上可用于失眠和高血压病。2.1%大风艾浸剂的利尿作用，与咖啡因及茶叶浸剂相似，但较后者为弱。另外，艾纳香素还具有保肝作用。\n【化学成分】大风艾含挥发油，主为左旋龙脑，以及少量1，8-桉叶素、柠檬烯、左旋樟脑、倍半萜烯醇、乙酰间苯三酚二甲醚等。并含有黄酮苷、香豆精、三萜等化合物。鲜叶及嫩枝是提取冰片的原料。\n【使用禁忌】阴虚血热者慎用。\n【配伍药方】1.治头风痛：大风艾鲜叶30克，鸡蛋2个。加酒、盐同煎服。（《广西本草选编》）\n2.治脓疱疮：大风艾、苦参、地胆草、荆芥各15克，白鲜皮、银花叶各30克，青蒟叶9克，栀子12克。煎水候温外洗患处，每日1剂。" },

  {
    "id": 3,
    "price": 17.5,
    "name": "半枫荷",
    "key": "半枫荷",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/8bbe6d73-e5e7-4e3b-a72c-1905cffef3eb.jpg",
    "cat": 6,
    "brief": "中药材 半枫荷根 俗称半风荷鸭脚木枫荷梨翻白叶根500克包邮",
    "alias": "【中药名】\n半枫荷 banfenghe\n【别名】\n半边枫树、翻白叶树根、半梧桐、番张麻、大叶半枫荷。\n【英文名】\nRadix Pterospermi Heterophylli",
    "explain": "【药用部位】梧桐科植物翻白叶树Pterospermum heterophyllum Hance.的根。\n【植物形态】常绿乔木，高可达20米。树皮灰色或灰褐色，小枝被红色或黄色短柔毛。叶异型，革质，幼树或萌蘖枝上的叶为盾形，掌状3～5深裂；成年树的叶为长圆形至卵状长圆形；顶端钝或渐尖，基部钝形、截形或斜心形，下面密被黄褐色茸毛。托叶线状长圆形。花单生或2～4朵组成腋生的聚伞花序；小苞片鳞片状，与萼紧靠；萼片线形，两面均被毛；花瓣5，青白色，倒披针形，与萼等长；雄蕊15枚，退化雄蕊5枚，线状；子房5室，被毛。蒴果木质，长圆状卵形，密被黄褐色茸毛。种子具膜质长翅。\n【产地分布】生于山坡、平原、丘陵地疏林或密林中。分布于广东、海南、福建、广西、台湾等地。\n【采收加工】全年均可采收。挖取根部，抖去泥土，洗净，斩成片块，晒干。\n【药材性状】半枫荷呈不规则片块状。栓皮表面灰褐色或红褐色，有纵皱纹及疣状皮孔。质坚硬。断面皮部棕褐色，具细密纹理。纵断面有纵向纹理及不规则的纵裂隙，纤维性。气微，味淡微涩。\n【性味归经】味甘、微涩，性温。归肾经、肝经。\n【功效与作用】祛风除湿、活血消肿。属祛风湿药下属中的祛风湿散寒药。\n【临床应用】半枫荷用量15～30克，煎服或浸酒。用治风寒湿痹、风湿痿软、腰肌劳损、手足麻痹、产后风瘫、关节屈伸不利、跌打损伤肿痛。\n【药理研究】半枫荷乙醇提取物有明显的祛除炎症功效与作用，并且具有轻度的镇痛效果。\n【化学成分】从半枫荷根中分离得到11个化合物,分别鉴定为：3-乙酰氧基-齐墩果酸甲酯(1)、β-谷甾醇(2)、3-乙酰氧基-齐墩果酸(3)、2α,3β-二羟基-20(29)-烯-羽扇豆-28-酸(4)、(24R)-5α-豆甾-3,6-二酮(5)、桦木酮酸(6)、硬脂酸(7)、棕榈酸(8)、3-酮基-齐墩果酸(9)、阿江榄仁酸(10)、胡萝卜苷(11)。\n【使用禁忌】尚不明确。\n【配伍药方】治风湿关节痛、腰腿痛：①半枫荷根、枫荷梨根各30克。炖猪骨或猪瘦肉同服。②半枫荷茎500克。切片浸酒2500毫升，10天后用。每日服3次，每次5-30毫升，并搽患部至皮肤发红为度。(《全国中草药汇编》)" },

  {
    "id": 4,
    "price": 17.5,
    "name": "四块瓦",
    "key": "四块瓦",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/95f2daaf-f243-45a5-93b6-6d6c416156cf.jpg",
    "cat": 6,
    "brief": "新货四块瓦四叶对四叶细辛银线草正品药材250克包邮可打粉送量勺",
    "alias": "【正名】\n四块瓦\n【别名】\n大四块瓦、红四块瓦、大叶及己、四片瓦、四叶黄。\n【英文名】\nRhizoma Et Radix Chloranthi。",
    "explain": "【药材来源】金粟兰科植物宽叶金粟兰Chloranthus henryi Hemsel.的根及根茎。\n【植物形态】多年生草本，高可达50厘米。主根粗短，须根发达，多而粗，长10～14厘米，直径约3毫米，近先端分枝。茎直立，光滑无毛，具4～5个节。单叶轮生于茎端，通常4枚，叶片倒广卵形或长卵圆形，长10～17厘米，宽约8厘米，先端渐尖，钝头，边缘具圆齿，齿端芒尖，基部渐狭，呈阔楔形，两面光滑，背面叶脉被有白色柔毛；无柄或近无柄。穗状花序通常2枝，直出枝顶，长12厘米，花两性及单性，小型，白色，花径2～3毫米；雄花无花被，雄蕊3，倒卵圆形，合生成一片状体，3裂。核果卵球形或球形，先端具尖状突起，外果皮肉质，果长约3.5毫米，宽约2毫米。花期4月。\n【产地分布】生于山中林下阴湿处。分布于湖南、湖北、四川、浙江等地。\n【采收加工】夏、秋季采收全草和根，分别晒干。\n【药材性状】四块瓦的根茎呈不规则结节状，有的具分枝，长3.5～10厘米，直径0.2～0.6厘米；表面浅棕色或灰褐色，上端有茎痕或残留茎基，周围着生多数根。四块瓦的根呈细长圆柱形，弯曲，长10～20厘米，直径0.1～0.3厘米；表面暗棕色至棕褐色，具细纵皱纹；质脆，易折断，断面皮部浅黄色，木部细小，黄色，习称“木心”，易从根中抽出。气微，味苦、略麻舌。\n【性味归经】性温，味辛、苦。有毒。归肺经、肝经。\n【功效与作用】祛风除湿、散瘀止痛、解毒消肿。属祛风湿药下属分类的祛风湿散寒药。\n【临床应用】用量5～10克，泡酒或入丸散。外用：适量，捣烂敷或煎水熏洗。四块瓦用治风湿痹痛、肢体麻木、风寒咳嗽，跌打损伤、血瘀肿痛、无名肿痛、毒蛇虫咬伤等。\n【药理研究】对于宫平滑肌的作用：从四块瓦中提取的重排总素(为混合物)，对家兔、豚鼠、大鼠和小鼠的离体子宫，家兔在位子宫和子宫瘘子宫均有兴奋作用，其作用机制可能与兴奋子宫H1受体和α受体有关。\n【化学成分】四块瓦中含有重楼排草甙，甙元为仙客来甙元D。\n【使用禁忌】内服宜慎，孕妇禁服。\n【配伍药方】1.治小儿胎毒：四块瓦30克，茜草15克。煎水洗。(《湖南药物志》)\n2.治跌打损伤：红四块瓦12克，白酒0.5升，浸泡1天，每日早、晚各服1次，每次5～10毫升。(《湖南中草药志》)" },

  {
    "id": 5,
    "price": 17.5,
    "name": "防己",
    "key": "防己",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/0a6d3b6c-1738-4422-9935-c4f061b66bfb.jpg",
    "cat": 6,
    "brief": "防己中药材 500g防已 粉防己汉防己 野生正品精选 包邮",
    "alias": "【中药名】\n防己 fangji\n【别名】\n汉防己、石蟾蜍、白木香、山乌龟。\n【英文名】\nRadix Stephaniae Tetrandrae(拉)。",
    "explain": "【来源】防己科植物粉防己Stephania tetrandraS.Moore的块根。\n【植物形态】多年生缠绕藤本。根圆柱状，有时呈块状，外皮淡棕色或棕褐色。茎柔韧，圆柱形，有时稍扭曲，具细条纹，枝光滑无毛，基部稍带红色。叶互生，质薄较柔，叶柄盾状着生，长与叶片相等；叶片外形近圆形，先端锐尖，基部截形或稍心形，全缘，两面均被短柔毛，上面绿色，下面灰绿色。花小，雌雄异株，为头状的聚伞花序；雄花花萼4，肉质，三角状，基部楔形，外面被毛，花瓣4，略呈半圆形，边缘微向内弯，具爪，雄蕊4花药近圆形；雌花的花萼、花瓣与雄花同数，无退化雄蕊，心皮1，花柱3枚。核果球形。花期5～6月，果期7～9月。\n【产地分布】生于山坡、丘陵地带的草丛及灌木林的边缘。分布于江苏、安徽南部、浙江等地。\n【采收加工】秋季采挖，洗净或刮去栓皮，切成长段，粗根纵剖为2～4瓣，晒干。\n【药材性状】不规则圆柱形、半圆柱形块状或块片状，常弯曲如结节状，长3～10厘米，直径1～6厘米。去栓皮的药材表面淡灰黄色，可见残留的黑褐色栓皮，弯曲处有深陷的横沟。体重，质坚实，断面平坦，灰白色至黄白色，富粉性，有排列稀疏的放射状纹理，纵剖面浅灰白色，维管束浅棕色，呈弯曲筋脉状纹理。气微、味苦。\n【性味归经】性寒，味苦。归膀胱经、肺经。\n【功效与作用】利水消肿、祛风止痛。属祛风湿药下分类的祛风湿清热药。\n【临床应用】用量4.5～9克，煎汤内服，或入丸、散。用治水肿、小便不利、风湿痹痛、下肢湿热、疥癣疮肿等。\n【药理研究】有镇痛、抗炎、抗过敏、松弛横纹肌等药理作用，对心血管系统有降压、抗心肌正性肌力、抗心律失常、抗心肌缺血、抗心室肥厚等作用。\n【化学成分】含多种生物碱，其中主要为粉防己碱、去甲基粉防己碱、较环藤酚碱、氧化防己碱、防己诺林碱等。可应用比色法及薄层色谱法进行总生物碱及粉防己碱、去甲基粉防己碱的含量测定。\n【使用禁忌】脾胃虚弱及阴虚无湿热者禁服。\n【配伍药方】①治遗尿，小便涩：防己、葵子、防风各30克。上三味。以水五升，煮取二升半，分三股，散服亦佳。(《千金要方》)\n②治膀胱水蓄胀满，几成水肿：防己6克，车前子、韭菜子、泽泻各9克。水煎服。(《本草切要》)\n③治脚气肿痛：防己、木瓜、牛膝各9克，桂枝1.5克，枳壳3克。水煎服。(《本草切要》)\n④治水膨胀：防己30克、生姜15克。同炒，随入水煎服。半饥时饮之。(《本草汇言》)\n⑤治鼻衄：防己(生用)90克，捣罗为细散。每服6克，新汲水调下。老人小儿酒调3克服。更用热汤调少许、鼻中喘气，佳。(《圣济总录》)" },

  {
    "id": 6,
    "price": 17.5,
    "name": "白英",
    "key": "白英",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/8cec77e9-514a-4c70-b961-9b0218a5e376.jpg",
    "cat": 6,
    "brief": "大别山野生白英500克g中草药蜀羊泉正品毛排风藤白毛藤中药材",
    "alias": "【中药名】\n白英 baiying\n【别名】\n白毛藤、金钱绿毛龟、望冬红、毛葫芦。\n【英文名】\nHerba Solani Lyrati。",
    "explain": "【药用部位】茄科植物白英Solanum lyratum Thunb.的全草。\n【植物形态】多年生蔓性半灌木。茎长达5米，基部木质化，上部草质，具细毛。叶互生，上部叶多作戟状3裂或羽状多裂；下部叶长方形或卵状长方形，基部心脏形，先端尖，全缘，上面鲜绿色，下面较淡，两面均有细毛散生，沿叶脉较密；叶柄被细毛。聚伞花序生于枝顶或侧生与叶对生；枝梗、花柄及花均密被长柔毛，花柄细长；花萼漏斗状，萼片5，自基部向下反折，卵形或长方状披针形，顶端尖；雄蕊5枚，着生于花冠筒口，花丝短而扁，基部合生；雌蕊1，子房卵形，花柱细长，柱头半球形。浆果卵形或球形，初绿色，熟时红色至黑色。种子白色，扁圆。花期9～10月，果期11月。\n【产地分布】野生于路边或灌木丛中草。国内均有分布。\n【采收加工】夏、秋两季采收，洗净，晒干。\n【药材性状】茎类圆柱形，直径2～7毫米，表面黄绿色至暗棕色，密被灰白色茸毛，在较粗的茎上茸毛极少或无，具纵皱纹，且有光泽；质硬而脆，断面淡绿色，纤维性，中央空洞状。叶皱缩卷曲，密被茸毛。有的带淡黄色至暗红色果实。气微，味微苦。\n【性味归经】性寒，味甘、苦。归肝经、胆经、肾经。\n【功效与作用】清热、利湿、祛风、解毒。属祛风湿药下属分类的祛风湿清热药。\n【临床应用】用量15～30克，煎服；外用适量，煎水洗、捣敷或捣汁涂。用治疟疾、黄疸、水肿、淋病、风湿关节痛、丹毒、疔疮。\n【药理研究】有抗肿瘤及抗真菌作用。体外试验表明，龙葵碱对葡萄球菌和绿脓杆菌有抑制作用。\n【化学成分】含龙葵碱、花色苷及其苷元等成分。\n【使用禁忌】体虚无湿热者忌用。\n【配伍药方】①治肺癌：白英、垂盆草各30克。水煎服，每日1剂。(《全国中草药汇编>)\n②治风火赤眼：白英鲜叶捣烂，调人乳外敷眼睑。(《福建中草药》)\n⑧治中耳化脓：白英绞汁，滴耳中。(《湖南药物志》)\n④治疥疮：白英全草30～40克(干品24～36克)，和肥猪肉180克，酌加水煎，分两次吃下。(《福建民间草药》)\n⑤治咽喉肿痛，痈肿疮毒，淋巴结结核：白英、萝藦各30克。水煎服。(《陕甘宁青中草药选》)\n⑥治皮肤瘙痒症：白英、苦楝树叶，各适量，水煎汤洗患处。(《青岛中草药手册》)\n⑦治风湿关节痛：白英30克，忍冬30克，五加皮30克，好酒500克泡服。(《贵阳民间药\n" },

  {
    "id": 7,
    "price": 17.5,
    "name": "穿破石",
    "key": "穿破石",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/79c778c3-2b25-4fef-b5c0-ea6cee53758b.jpg",
    "cat": 6,
    "brief": "穿破石广西野生中药材500g克川破石根部地棉根九层皮石柘根可磨粉",
    "alias": "【中药名】\n穿破石 chuanposhi\n【别名】\n地棉根、铁篱根、九层皮、柘根、山黄箕。\n【英文名】\nRadix Maclurae",
    "explain": "【药用部位】桑科植物构棘Machura cochinchinensis (Lour) Corner或柘树M. tricuspidata Carr.的干燥根。\n【植物形态】常绿灌木，高2～4米。直立或攀援状，根皮橙黄色，枝灰褐色，光滑，皮孔散生，具直立或略弯的棘刺，粗壮。单叶互生，叶片革质，倒卵状椭圆形、椭圆形或长椭圆形，先端钝或渐尖，或有微凹缺，基部楔形，全缘，两面无毛；基出脉3条，侧脉6～9对。花单性，雌雄异株，球状花序单个或成对腋生，具短柄，被柔毛，雄花具花被片3～5，楔形，不相等，被毛；雌花具花被片4，先端厚有绒毛。聚花果球形，肉质，熟时橙红色，被毛，瘦果包裹在肉质的花被和苞片中。花期4～5月，果期9～10月。\n【产地分布】生于山坡、溪边灌丛中或山谷、林缘等处。分布于安徽、浙江、江西、福建、湖北、湖南、广东、海南、广西、四川、贵州、云南等地。\n【采收加工】全年均可采，挖出根部，除去泥土、须根，晒干，或洗净，趁鲜切片，晒干。亦可鲜用。\n【药材性状】根圆柱形，长短不一，直径1.5～2.5厘米；或已切成圆形厚片。外皮黄色或橙红色，具显著的纵皱纹及少数须根痕。栓皮薄而易脱落。质地坚硬，不易折断，断面皮部薄，灰黄色，具韧性纤维，木部占绝大部分。黄色，柴性，导管孔明显，有的中央部位有小髓。气微，味淡。\n【性味归经】性凉，味淡、微苦。归心经、肝经。\n【功效与作用】祛风通络，清热除湿，解毒消肿。属祛风湿药下属分类的祛风湿清热药。\n【临床应用】内服：煎汤，用量9～30克，鲜者可用至120克；或浸酒。外用：适量，捣敷。主治风湿痹痛，跌打损伤，黄疸，腮腺炎，肺结核。胃和十二指肠溃疡，淋浊，蛊胀，闭经，劳伤咯血，疔疮痈肿。\n【药理研究】具有抗结核杆菌作用。柘树根水提液经树脂处理获得的两组黄酮组分1、组分2，分别加入人胃癌细胞NKM进行体外培养同位素标记实验，结果表明，组分1、组分2对NKM细胞DNA、蛋白质合成有明显的抑制作用；在一定的浓度范围内，随剂量的增加，抑制率也相应的增加。组分1对RNA的合成抑制显著，而组分2对RNA的合成抑制不显著；组分l剂量300μg/ml时，从细胞形态看出在几小时内细胞死亡、解体。\n【化学成分】穿破石含柘树异黄酮A、3'-O-甲基香豌豆苷元、去氢木香内酯、亚油酸甲酯等。\n【使用禁忌】孕妇慎服。\n【配伍药方】①治闭经：穿破石根15～30克。水煎服。(《广西本草选编》)\n②治肺热咯血：穿破石30克，去粗皮，炒焦，水煎，冲糖服，每日3次。(《浙江药用植物志》)\n③治疮痈肿：穿破石鲜根皮或鲜叶，捣烂外敷。(广西本草选编》)\n④治外痔出血：鲜穿破石120克，水煎服。另用红马蹄草捣烂外敷患处。连续3次。(《浙江民间常用草药》)\n⑤治胃、十二指肠溃疡疼痛：鲜穿破石60克。水煎，3次分服。(《全国中草药汇编》)\n⑥治骨折：穿破石、三加皮、胡颓子各等量，均用根皮焙干研末，以适量凡士林加热调成膏状，复位后，外敷药膏，夹板固定。隔日换药一次。(《全国中草药汇编》)" },

  {
    "id": 8,
    "price": 17.5,
    "name": "秦艽",
    "key": "秦艽",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/4c1f2f3d-d9cb-43a9-a0e5-96e532a7eb98.jpg",
    "cat": 6,
    "brief": "墨源秦艽500克 秦玖片秦九秦胶秦纠散装非野生中药材道地干货",
    "alias": "【中药名】\n秦艽 qinjiao\n【别名】\n大叶龙胆、大叶秦艽、西秦艽、秦胶、秦纠。\n【英文名】\nGentianae Macrophyllae Radix。",
    "explain": "【来源】龙胆科植物秦艽Gentiana macrophylla Pall.的根。\n【植物形态】多年生草本，高20～60厘米。主根粗长，扭曲不直，近圆锥形，根茎部有许多纤维状残存叶基。茎直立或斜生。叶披针形或长圆状披针形，基生叶多数丛生，全缘，主脉5条，茎生叶3～4对，较小，对生。花多集成顶生及茎上部腋生的轮伞花序，花萼管一侧开裂，略呈佛焰苞状，萼齿浅，花冠管状，深蓝紫色，长约2厘米，先端5裂，裂片间有5片短小褶片，雄蕊5枚，子房长圆形，无柄。蒴果长圆形或椭圆形。\n【产地分布】生于山区草地、溪旁两侧、路边坡地、灌丛中。分布于黑龙江、吉林、辽宁、内蒙古等地。\n【采收加工】春、秋季均可采挖，但以秋季质量最好。挖出后去掉茎叶，晒至柔软时，堆成堆，使其自然发热，到根内部变成肉红色时，晒干。也可在挖根后，直接晒干。\n【药材性状】略圆锥形，上粗下细，长7～30厘米，直径1～3厘米。表面灰黄色或棕黄色，有纵向或扭曲的纵沟。根头部常膨大，多由数个根茎合着。残存的茎基上有纤维状叶基维管束。质坚脆，易折断，断面皮部黄色或棕黄色，木部黄色。气特殊，味苦而涩。\n【性味归经】性平，味苦、辛。归胃经、肝经、胆经。\n【功效与作用】祛风湿、退虚热、舒筋止疼。属祛风湿药下分类的祛风湿清热药。\n【临床应用】用量5～10克，内服治疗风湿关节痛、筋脉拘挛、结核病潮热、小儿疳积发热、黄疸、小便不利等症。治疗关节痛、头痛、牙痛等：秦艽注射液，肌肉注射每次2毫升。\n【药理研究】给大鼠腹腔注射秦艽碱甲、醇提物(含总苦苷)和氨化秦艽醇提物(含总生物碱)具有明显抗炎作用；秦艽碱甲具有抗过敏作用，能明显减轻组胺喷雾引起的豚鼠哮喘，对兔蛋清过敏性休克有明显的保护作用，小用量时对大鼠、小鼠有镇静作用，较大用量时出现兴奋、惊厥、导致麻痹而死；龙胆苦苷和当药苷有明显延长戊巴比妥钠引起的小鼠睡眠时间，水提物和醇提物对醋酸诱发小鼠扭体反应有明显镇痛作用，且能直接抑制心脏引起血压下降及心率减慢，对大鼠、小鼠均有升高血糖作用。毒性：秦艽碱甲小鼠灌胃及腹腔给药的LDso分别为486毫克/千克和300毫克/千克。\n【化学成分】含龙胆碱(秦艽碱甲)、龙胆次碱(秦艽碱乙)、龙胆醛碱(秦艽碱丙)、龙胆苦苷、α-香树脂醇、秦艽碱甲、秦艽碱乙等成分。\n【使用禁忌】久病虚寒，尿多，便溏者禁服。\n【配伍药方】①治头风痛：秦艽、白芷、川芎各6克，藁本9克。水煎服。(《沙漠地区药用植物》)\n②治小便艰难，胀满闷：秦艽(去苗)30克。以水一大盏，煎取七分，去滓，食前分作二服。(《圣惠方》)\n③治一切疮口不合：秦艽细末，掺之。(《直指方》秦艽掺方)\n④治久痈疽：秦艽15克，捣罗为末。涂敷疮上，以帛裹缚之，日三次。(《圣济总录》秦艽涂敷方)" },

  {
    "id": 9,
    "price": 17.5,
    "name": "楤木",
    "key": "楤木",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/15e6ca21-5a2f-4a39-a1c4-0e3080f9a0ae.jpg",
    "cat": 6,
    "brief": "鸟不宿中药材 野生 鹰不泊 楤木根 葱木 鸟不落 新货500g克包邮",
    "alias": "【中药名】\n楤木 songmu\n【别名】\n鸟不宿、刺老包、楤木白皮、百鸟不栖、千枚针。\n【英文名】\nAdix et Cortex Araliae Chinensis",
    "explain": "【药用部位】五加科植物楤木Aralia chinensis Linn.的根、根皮及树皮。\n【植物形态】落叶灌木或小乔木，高3～8米。茎枝疏生皮刺，幼枝被黄棕色茸毛；叶为2回或3回单数羽状复叶，有小叶5～11，基部另有小叶1对，小叶卵形、宽卵形或长卵形。边缘有细锯齿，上面疏生粗伏毛，下面有黄色或灰色短柔毛，沿脉尤密；伞形花序集成顶生大圆锥花序，被黄棕色或灰棕色短柔毛；果圆球形，有5棱，熟时黑色。\n【产地分布】多野生于较阴的低山坡、林下、山谷沟边、林缘、郊野路边或旷地灌丛中。主要分布于我国黄河以南至长江流域各地。\n【采收加工】栽种2～3年的植株，秋冬即可挖根，树皮亦可同时采集。野生的楤木，全年可采。将挖取的根部洗净，剥取根皮及树皮，切段晒干。\n【药材性状】楤木根皮筒状或片状。栓皮薄，灰褐色粗糙呈多片状翘裂，有时有横向皮孔，栓皮易剥脱，剥脱后皮呈淡黄白色，内面白色，光滑。质脆易折断，断面不平坦。气微，味苦。树皮剥落状，粗糙不平，有纵皱纹及横纹，并散生坚硬的刺。外面灰白色至灰褐色，内面黄白色而光滑。断面呈纤维性。气微香，嚼之带黏液性。\n【性味归经】味甘、微苦，性平。归脾经、肝经、肾经。\n【功效与作用】祛风湿、利小便、散瘀血、消肿毒。属祛风湿药下属中的祛风湿强筋骨药。\n【临床应用】用量15～30克，煎服或浸酒服；外用适量鲜品捣敷患处。用治风湿痹痛、腰肌劳损、腹水、胃病、骨髓炎、急性或慢性肝炎等。\n【药理研究】体外抑菌试验表明，楤木对金黄色葡萄球菌高度敏感，对醋酸及角叉菜所致的实验性关节炎有明显的抗炎的功效与作用。\n【化学成分】楤木含三萜类皂苷，有楤木皂苷A、楤木皂苷B等；另含原儿茶酸、鞣质、胆碱及挥发油等。能提高人体的免疫功能，有类似人参样作用，国外早已作为人参的代用品，并制成各种保健品问世。\n【使用禁忌】孕妇慎用。\n【配伍药方】1.治大漆皮炎：偬木茎切碎，取250～500克，加水3000～4000毫升，煮沸30分钟去渣，趁热倒入脸盆，先熏患处，待水温和后，再洗患处。每日1～2次。[《中医杂志》1988，(4)：55]\n2.治疟疾：惚木、常山、地骨皮各15克，白老酒适量。先取鲜常山头用火烤出涎后，合入他药用。炖老酒服。(《闽东本草》)\n3.治风湿关节痛：楤木皮（刮去表面粗皮）30克。用猪瘦肉120克煎汤，以汤煎药服。（《战备草药手册》）\n4.治急性胆道感染：楤木、白英各30克。水煎服。（《福建药物志》）" },

  {
    "price": 17.5,
    "id": 10,
    "name": "路路通",
    "key": "路路通",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/a11249b7-f204-46c7-8520-50f574b153bf.jpg",
    "cat": 6,
    "brief": "野生路路通中药材500g 枫球子路路通中药 枫树球 枫树果子草药",
    "alias": "【中药名】\n路路通\n【别名】\n枫实、枫木上球、枫香果、枫果、枫树球。\n【英文名】\nLiquidambaris Fructus",
    "explain": "【药用部位】金缕梅科植物枫香Liquidambar formosana Hance.的成熟果序。\n【植物形态】乔木，高达40米。树皮灰褐色，粗糙，有皮孔。单叶互生，叶片宽卵形，常3裂，幼枝及萌发枝的叶多为掌状5裂，上面深绿色，下面淡绿色；叶柄长3～7厘米；托叶线形，早落。花单性，雌雄同株；雄花为柔荑花序，无花被，雄蕊多数，花丝不等长；雌花为球形的头状花序，直径1.5厘米，有花23～43朵，花序梗长，萼齿5，钻形，无花瓣，子房半下位，2室，胚乳多数，花柱2，柱头弯曲。蒴果多数集生成头状球形果序，直径2.5～4.5厘米，表面有由宿存花柱及子房周围的苞片变成的刺状物，蒴果长椭圆形，下部藏于花序轴内，成熟时顶孔开裂。种子有发育不完全和发育完全两型，前者占多数，多角形，细小，黄棕色，后者长圆形而扁，具翅，褐色。花期3～4月，果期9～10月。\n【产地分布】生于平原及丘陵地带。分布于我国华东、华南、西南等地。\n【采收加工】冬季果实成熟后采收，除去杂质，干燥。\n【药材性状】聚花果，由多数小蒴果集合而成，球形，直径2～3厘米。基部有总果梗。表面灰棕色或棕褐色，有多数尖刺及喙状小钝刺，长0.5~1厘米，常折断，小蒴果顶部开裂，呈蜂窝状小孔。体轻，质硬，不易破开。气微，味淡。\n【性味归经】性平，味苦。归肝经、肾经。\n【功效与作用】祛风活络，利水通经。属祛风湿药下属分类的祛风湿强筋骨药。\n【临床应用】用量5～9克，煎服。用治关节痹痛、麻木拘挛、水肿胀满、乳少经闭。\n【药理研究】抗炎；保肝。药理实验表明，路路通有明显促进大鼠“甲醛化”关节炎肿胀消退和治疗蛋清性关节炎的功效与作用。\n【化学成分】路路通含挥发油、黄酮类、酚类、有机酸及糖类。此外，尚含齐墩果酮酸甲酯、3-表齐墩果酸甲酯、3-表齐墩果酸甲酯，挥发油中含有β-松油烯、β-蒎烯、柠檬烯、α-松油烯等成分。另含熊果酸、28-去甲齐墩果酮酸、苏合香素、齐墩果酸、氧化丁香烯、a-榄香烯、环氧苏合香素、路路通内酯等成分。\n【使用禁忌】阴虚、月经过多及孕妇禁服。\n【配伍药方】①治癣：路路通10个(烧存性)，白砒0.15克。共末，香油搽。(《纲目拾遗》引《德胜堂方》)\n②治荨麻疹：路路通500克，煎浓汁。每日3次，每次18克。空心服。(《湖南药物志》)\n③治耳内流黄水：路路通15克。煎服。(《浙江民间草药》)\n④治过敏性鼻炎：路路通12克，苍耳子、防风各9克，辛夷、白芷各6克。水煎服。(《中药临床应用》)" },

  {
    "id": 11,
    "price": 17.5,
    "name": "走马箭",
    "key": "走马箭",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/48f33bcd-5d82-49c8-9542-4171cca4f0b0.jpg",
    "cat": 6,
    "brief": "走马箭根广西野生中药材陆英根八棱麻八里麻接骨草纯根部切段250g",
    "alias": "【中药名】\n走马箭 zoumajian\n【别名】\n走马风、蒴藿根、排风藤、七叶根、掌落根。\n【英文名】\nRadix Sambuci",
    "explain": "【药用部位】忍冬科植物蒴藿Sambucus chinensisLindl.的根茎。\n【植物形态】灌木状草本。主根垂直，支根不多。茎具棱，平滑无毛。叶对生，单数羽状复叶，小叶5～9，长椭圆状披针形，先端渐尖，基部偏斜稍圆或阔楔形，边缘具密而尖锐的锯齿，两面均平滑无毛，或叶脉上有短柔毛；无托叶，小叶柄短或近于无柄。复伞形花序顶生，有短柔毛；小总苞片细小，卵状披针形；萼5裂，下部愈合成钟状；花冠白色，5裂，裂片卵形；雄蕊5枚，与花冠裂片互生，花丝短，药室向外开裂；子房卵圆形，柱头头状；花间杂有黄色杯状腺体。浆果球形，红色。花期8月，果期10月。\n【产地分布】生于中海拔山地的路旁村边、荒地或沟谷向阳处。分布于广东、广西、江西等地。\n【采收加工】全年可采，挖取根部，除去须根及泥沙，洗净，晒干。\n【药材性状】走马箭呈长条形，稍扁，基弯曲，有分枝，长15～50厘米，直径0.3～0.8厘米。表面灰黄色，具突起而色较深的横长皮孔，有略扭曲的细纵皱纹及纤细毛须。质硬韧，难折断，断面皮部与木部撕裂状分离，皮部土灰黄色，木部纤维性，黄白色。气微，味淡。\n【性味归经】性温，味甘、酸。\n【功效与作用】祛风除湿、活血散瘀。属祛风湿药下属分类的祛风湿强筋骨药。\n【临床应用】用量6～12克，鲜品30～60克，煎服；或捣敷外用；或煎水洗。用治风湿疼痛、肾炎水肿、脚气浮肿、痢疾、黄疸、慢性气管炎、风疹瘙痒、丹毒、疮肿、跌打损伤、骨折。\n【药理研究】动物试验表明，走马箭有加速骨折愈合作用和消肿的功效与作用。其注射液临床用治急性痢疾、急性化脓性扁桃体炎和肺炎均有较好疗效。\n【化学成分】走马箭含黄酮类、酚性成分、鞣质、糖类、氯原酸。\n【使用禁忌】尚不明确。\n【配伍药方】1.治水肿，坐卧不得，头面身体悉肿：蒴藿根刮去皮，捣汁一合，和酒一合，暖空心服，当微吐利。(《梅师集验方》)\n2.治头风：捣蒴藿根一升，酒二升渍服。汗出止。(《下金方》)\n3.治肾炎、全身浮肿：陆英根60克，金丝草、兖州卷柏各30克。水煎服。(《福建药物志》)\n4.治暴得癥：走马箭一小束。净洗沥去水，细切，以醇酒浸之，取淹根二宿，服五合，至一升，日三。若欲速得，可与热灰中温令药味出，服之。(《外台》引《古今录验方》)\n5.治打伤或扭筋肿痛：(蒴藿)鲜根切碎，同连须葱白、酒糟捣烂敷患处，每日换1次。(《江西民间草药》)" },

  {
    "id": 12,
    "price": 17.5,
    "name": "牛大力",
    "key": "牛大力",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/a17bda22-bc8f-4212-9017-f736c9858bec.jpg",
    "cat": 6,
    "brief": "牛大力野生新鲜中药材500g广西牛大力根片干货煲汤搭巴戟天杜仲",
    "alias": "【中药名】\n牛大力 niudali\n【别名】\n甜牛大力、大力薯、大力牛，大口唇倒吊金钟。\n【英文名】\nRadix Millettiae Speciosae",
    "explain": "【药用部位】豆科植物美丽崖豆藤Millettia speciosa Champ.的根。\n【植物形态】藤状灌木。根肥壮，肠状或不规则念珠状，近肉质而多纤维。嫩枝被褐色茸毛，老枝无毛。叶为奇数羽状复叶，叶柄及叶轴均被茸毛；小叶7～17片，薄革质，长圆形或长圆状披针形；顶生小叶通常最大，顶端短尖或短渐尖，钝头，基部钝或圆，边常背卷，上面光亮无毛，下面干时为暗褐色，被茸毛或无毛；托叶钻状。花白色，为腋生的总状花序，有时数个总状花序结成顶生大型圆锥花序，花序轴、花梗和花萼均被茸毛；萼钟状；花冠蝶形，旗瓣圆形，基部有2个胼胝状附属物；雌蕊被子绒毛。荚果线状长圆形或近线形。\n【产地分布】生于山谷、路旁、疏林及灌木丛中。分布于广东、广西、海南等地。\n【采收加工】全年均可采收。挖取根部，除去芦头及细根，洗净，大个的趁鲜纵向切厚片或斩为短段，晒干。\n【药材性状】牛大力药材为纺锤形或圆柱形，有的2～3个呈串珠状连在一起。表皮土黄色，稍粗糙，有环状横纹。质坚实，不易折断。切成短段或片块的横切面皮部类白色，向内有一圈不甚明显的环纹，嫩根中间白色至黄白色，具粉性；老根及直根多为圆柱形，近木质化，质坚硬。气微，味微甜。\n【性味归经】性平，味甘。归肺经、脾经、肾经。\n【功效与作用】补脾润肺、舒筋活络。属祛风湿药下分类的祛风湿强筋骨药。\n【临床应用】用量15～30克，煎服；或浸酒。用治病后体弱、阴虚咳嗽、腰肌劳损、风湿痹痛及肺结核咳嗽。\n【药理研究】牛大力根煎剂或乙醇提取物灌服，对由于氨水喷雾引咳的小鼠有明显的止咳作用。\n【化学成分】含生物碱类。\n【使用禁忌】尚不明确。\n【配伍药方】1.治慢性肝炎：牛大力藤根30克，十大功劳9克，甘草3克。水煎服。(《福建药物志》)\n2.治体虚白带：牛大力、杜仲藤各12克，千斤拔、五指毛桃各9克，大血藤15克。水煎服、或将上药炖猪脚，去药渣，吃肉喝汤。(《全国中草药汇编》)" }] },



{
  "id": 3,
  "name": "补虚",
  "foods": [
  {
    "id": 1,
    "price": 17.5,
    "name": "党参",
    "key": "党参",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/afebaec7-e59d-4e21-8b62-ebbbf687e32d.jpg",
    "cat": 6,
    "brief": "党参干货500g克包邮特级党叁整条甘肃中药材当参野生当归北黄芪片",
    "alias": "【中药名】\n党参 dangshen\n【别名】\n单枝党、板桥党、狮头参、中灵草、黄参。\n【英文名】\nCodonopsis Radix。",
    "explain": "【药用部位】桔梗科植物党参Codonopsis pilosula(Franch.)Nannf.、素花党参Codonopsis pilosula Nannf.var.modesta(Nannf.)L.T.Shen或川党参Codonopsis tangshen Oliv.的干燥根。\n【植物形态】草质藤本。除叶片两面密被柔毛外，全体几近无毛。根常肥大肉质，呈纺锤状或纺锤状圆柱形，少分枝或中部以下略有分枝，表面灰黄色。茎缠绕多分枝。叶在主茎及侧枝上的互生，在小枝上的近于对生；叶片卵形、窄卵形或披针形，顶端钝或急尖，基部楔形或较圆钝，稀心形，上面绿色，下面灰绿色，边缘浅钝锯齿。花单生于枝端，与叶柄互生或近于对生；有花梗，花萼5深裂，仅基部与子房合生，长圆状披针形，先端急尖，微波状或近于全缘；花冠钟状，淡黄绿色内有紫斑，5浅裂，裂片近于正三角形；花丝基部微扩大；子房下位。种子多数，椭圆形，细小，棕黄色。花、果期7～10月。\n【产地分布】生长于海拔900～2300米的林边灌木丛中，现有大量栽培。分布于湖北、湖南、四川、贵州等地。\n【采收加工】秋季采挖3年生以上的根，洗净，晒干。\n【药材性状】圆柱形，末端较细，有的分枝，长10～45厘米， 径0.5～2厘米。表面灰黄色至黄棕色，根头部有多数疣状突起的茎痕和芽，习称“狮子盘头”，根头下部有环状横纹，全体有明显不规则的纵沟及散在横长皮孔；支根断落处有黑褐色胶状物，习称“豆豉尾”。质较软而结实，断面稍有裂隙，皮部黄白色，木部淡黄色。气香特异，味甜。\n【性味归经】性平，味甘。归脾经、肺经。\n【功效与作用】补中益气、健脾益肺。属补虚药下属分类的补气药。\n【临床应用】用量9～30克，煎服；或熬膏、入丸、散。生津、养血宜生用；补脾益肺宜炙用。用治脾肺虚弱、气短心悸、食少便溏、虚喘咳嗽、内热消渴。\n【药理研究】增强机体应激能力、免疫功能，延缓衰老，抗溃疡，能使离体豚鼠和兔肠紧张性升高，收缩加强，并能拮抗5-羟色胺引起的肠挛缩，但对乙酰胆碱引起的无明显作用；能显著减少小鼠自发活动，延长戊巴比妥钠或环己巴比妥的睡眠时间；能增进或改善小鼠记忆的获得、记忆巩固和樟柳碱引起的记忆获得障碍；可使家兔红细胞数及血红蛋白量增加，白细胞总数减少。还有抗肿瘤、升高血糖和抑菌作用等。党参水煎液灌胃，使小鼠对钴-γ射线有一定保护作用。多糖对实验动物应激性溃疡等多种溃疡均有明显的对抗作用。党参注射液有抗心肌缺血、缺氧的功效与作用。\n【化学成分】党参含挥发油、黄芩素葡萄糖苷、微量生物碱、氨基酸、多糖及皂苷，并含有丁香苷、正己基-β-D-吡喃葡萄糖苷、蒲公英赛醇、无羁萜等成分。\n【使用禁忌】实证、热证禁服；正虚邪实证，不宜单独应用，不宜与黎芦同用。\n【配伍药方】①清肺气，补元气，开声音，助筋力：党参(软甜者，切片)一斤，沙参(切片)半斤，桂圆肉四两。水煎浓汁，滴水成珠，用瓷器盛贮。每用一酒杯，空心滚水冲服，冲入煎药亦可。(《得配本草》上党参膏)\n②治小儿自汗症：每日用党参30克，黄芪20克。水煎成50毫升，分3次服，1岁以内减半。[《江苏中医》1988，(9)：25]\n③治服寒凉峻剂，以致损伤脾胃，口舌生疮：党参(焙)、黄芪(炙)各6克，茯苓3克，甘草(生)1.5克，白芍2.1克。白水煎，温服。(《喉科紫珍集》参芪安胃散)\n④治小儿口疮：党参30克，黄柏15克。共为细末，吹撒患处。(《青海省中医验方汇编》)\n⑤治脱肛：党参30克，升麻9克，甘草6克。水煎2次，早晚各1次。(《全国中草药汇编》)" },

  {
    "id": 2,
    "price": 17.5,
    "name": "甘草",
    "key": "甘草",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/fb67f19a-0582-4f75-b0c8-ea30495aeee6.jpg",
    "cat": 6,
    "brief": "甘肃甘草片泡水500克包邮炙甘干草片特级中药材生甘草茶叶粉正品",
    "alias": "【中药名】\n甘草\n【别名】\n蜜甘、甜甘草、国老、甜根子、棒草。\n【英文名】\nRadix Rhizoma Glycyrrhizae。",
    "explain": "【药用部位】豆科植物甘草Glycyrrhiza uralensis Fisch.、胀果甘草Glycyrrhiza inflata Bat. 或光果甘草Glycyrrhiza glabra L. 的干燥根及根茎。\n【植物形态】多年生草本。根茎圆柱状，多横走；主根甚长，粗大，外皮红棕色。茎直立，稍带木质，被白色短毛及腺鳞或腺状毛。奇数羽状复叶。总状花序腋生，花密集，花萼钟状，花冠淡紫堇色，旗瓣大，雄蕊10枚，9枚基部连合。荚果扁平。\n【产地分布】生于向阳干燥的棕钙土及含盐分较少、土层深厚、排水良好的钙质草原。甘草野生原植物分布于黑龙江、吉林、辽宁、内蒙古、甘肃、新疆等地。\n【采收加工】秋季采挖，趁湿切去茎基、串条、枝杈、须根等，放干燥处风干。亦有将外面栓皮削去者，称为粉甘草。\n【药材性状】甘草药材呈长圆柱形，表面红棕色、暗棕色或灰褐色，有明显的皱纹、沟纹及横长皮孔。质坚实而重，断面黄白色，有粉性，横切面形成层呈棕色环状，常有裂隙，木质部浅黄色，有时呈偏心性。根茎表面有芽痕，横切面中心有髓。气微，味甚甜而特殊。\n【性味归经】性平，味甘。归心经、胃经、脾经、肺经。\n【功效与作用】补脾益气、止咳祛痰、缓急定痛、调和药性。属补虚药下分类的补气药。\n【临床应用】内服：煎汤，用量2～6克，调和诸药用量宜小，作为主药用量宜稍大，可用10克左右；用于中毒抢救，可用30～60克。凡入补益药中宜炙用，入清泻药中宜生用。外用：适量，煎水洗、渍；或研末敷。治疗脾胃虚弱、中气不足、咳嗽气喘、痈疽疮毒、腹中挛急作痛、缓和药物烈性、解药毒。清热应生用，补中宜炙用。实证中满腹胀者忌服。\n【药理研究】甘草有肾上腺皮质激素作用，抗炎、抗溃疡、抗过敏反应，抗癌，抗菌，抗病毒，促进胰液分泌，对离体肠有抑制，调节免疫功能，镇咳祛痰，抗突变，解毒，抗氧化，保护耳前庭功能、利尿，保肝、防止动脉硬化，抗脑缺血，预防糖尿病并发症等作用。\n【化学成分】本品主要含甘草苷、甘草酸、甘草甜素、子丁香烯氧化物、甘草萜醇、18α-羟基甘草次酸、异甘草次酸、甘草香豆精、刺芒柄花素、新甘草查耳酮D、光果甘草苷元、异甘草黄酮醇、三萜皂苷、香豆素等成分。\n【使用禁忌】湿浊中阻而脘腹胀满、呕吐及水肿者禁服。不宜与海藻、京大戟、红大戟、甘遂、芫花同用。\n【配伍药方】 ①治伤寒脉结代，心动悸：甘草(炙)12克，生姜(切)9克，人参6克，生地黄48克，桂枝(去皮)9克，阿胶6克，麦门冬(去心)24克、麻仁半升。大枣(擘)三十枚。上九味，以清酒七升，水八升，先煮八味，取三升，去滓。内胶烊消尽，温服一升，日三服。(《伤寒论》炙甘草汤)\n②治肺热喉痛，有痰热者：甘草(炒)6克，桔梗3克(米泔浸一夜)。每服15克，水一钟半，入阿胶半片煎服。(《小儿药证直诀》)\n③治腿脚挛急，或腹中疼痛：白芍药、炙甘草各12克。水煎去渣，分两次服。(《伤寒论》芍药甘草汤)\n④治妇人脏躁，喜悲伤欲哭，数欠伸：甘草9克，小麦一升，大枣十枚。上三味，以水六升，煮取三升，温分三服。亦补脾气。(《金匮要略》甘草小麦大枣汤)\n⑤治百药毒方：生甘草6克，生锉。以水三盏，煎至一盏半，去滓，停冷。每服半盏，细细饮之，未效更服。(《圣济总录》)" },

  {
    "id": 3,
    "price": 17.5,
    "name": "黄芪",
    "key": "黄芪",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/977e043d-92e2-4911-bb82-1f652e72b99c.jpg",
    "cat": 6,
    "brief": "野生黄芪大片500g克特级甘肃中药材正品官方旗舰店配当归党参泡水",
    "alias": "【中药名】\n黄芪 huangqi\n【别名】\n独椹、芰草、蜀脂、百本、百药绵、独根。\n【英文名】\nAstmgali Radix。",
    "explain": "【来源】豆科植物蒙古黄芪Astragalus membranaceus Bge. var.mongholicus(Bge.) Hsiao和膜荚黄芪A.membranaceus (Fisch.) Bge.的根。\n【植物形态】蒙古黄芪：多年生草本。主根长而粗壮，条较顺直。奇数羽状复叶，小叶12～18对，小叶片下面被柔毛。总状花序腋生，花冠黄色至淡黄色，雄蕊10枚，二体。荚果膨胀，无毛。膜荚黄芪：形态上和上种极相似，主要区别为小叶6～13对，小叶片卵状披针形或椭圆形，长7～30毫米，宽4～10毫米；花冠淡黄色，长不及2厘米，子房被疏柔毛。荚果卵状长圆形，长2～2.5厘米，先端有喙，被黑色短毛。\n【产地分布】蒙古黄芪生于向阳草地及山坡；膜荚黄芪生于林缘、灌丛、林间草地及疏林下。分布于黑龙江、吉林、辽宁、河北、内蒙古等地。\n【采收加工】野生黄芪春秋两季均可采挖，除净泥土及须根，切去根头，晒至七八成干，按粗细、长短不同分级。栽培黄芪应3年以后采收。\n【药材性状】蒙古黄芪：表面灰黄色，栓皮不易脱落。质硬而韧，断面纤维性并显粉性。皮部黄白色，木部淡黄色。气微，味微甜，有豆腥味。膜荚黄芪：表面灰黄色、黄棕色，质硬，较难折断。\n【性味归经】性微温，味甘。归脾经、肺经。\n【功效与作用】 补气升阳，固表止汗，利水消肿，生津养血，行滞通痹，托毒排脓，敛疮生肌。属补虚药下属分类的补气药。\n【临床应用】用量9～30克，煎汤内服；或入丸、散、膏剂。治疗气短心悸、乏力、虚脱、自汗、盗汗、体虚浮肿、慢性肾炎、久泻、脱肛、子宫脱垂、痈疽难溃、疮口久不愈合、小儿支气管哮喘、慢性乙型肝炎、慢性肾炎和病毒性心肌炎。补气宜炙用，止汗、利尿、托毒排脓生肌宜生用。\n【药理研究】黄芪对核酸代谢有促进的功效与作用；增强造血功能；改善心肌功能，对抗心肌梗死；具有抗氧化、抗病毒、抗癌、改善肾功能和肾组织病理改变等。水煎剂具调节免疫、抗衰老和抗应激作用。毒性：煎剂LDso为(40±5)克/千克。\n【化学成分】黄芪主要含黄芪甲苷、黄芪苷、毛蕊异黄酮葡萄糖苷、毛蕊异黄酮、异黄芪苷Ⅰ、异黄芪苷Ⅱ、三萜皂苷、黄酮及多糖等成分。\n【使用禁忌】表实邪盛、湿阻气滞、肠胃积滞、阴虚阳亢、痈疽初起或溃后热毒尚盛者，均禁服。\n【配伍药方】①治表虚自汗：防风30克，黄芪(蜜炙)、白术各60克。每服9克，水一钟半，加大枣一枚，煎至七分，去滓，食后热服：(《医方类聚》引《究原方》玉屏风散)\n②治气虚阳弱，虚汗不止，肢体倦怠：黄芪(去芦，蜜炙)、附子(炮，去皮、脐)各等分。每服12克，水二盏，生姜片、煎至八分，去滓，食前温服，不拘时候。(《严氏济生方》芪附汤)\n③治吐血不止：黄芪7.5克，紫背浮萍15克。为末。每服3克，姜蜜水下。(《圣济总录》)\n④治肠风泻血：黄芪、黄连等分。为末、面糊丸如绿豆大。每服三十丸，米饮下。(《传家秘宝》)\n⑤治尿血、砂淋，痛不可忍：黄芪、人参等分。为末，以大萝卜一个，切一指厚大四五片，蜜60克，淹炙令尽，不令焦，点末。食无时，以盐汤下。(《永类钤方》)" },

  {
    "id": 4,
    "price": 17.5,
    "name": "人参",
    "key": "人参",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/cd760af4-ca28-48fc-8d54-552a424b7adf.jpg",
    "cat": 6,
    "brief": "长白山干人参片非500g切片泡水正宗白参片散装生晒参小片1斤包邮",
    "alias": "【中药名】\n人参 renshen\n【别名】\n神草、吉林参、土精、黄参、孩儿参。\n【英文名】\nGinseng Radix Et Rhizoma",
    "explain": "【药用部位】五加科植物人参Panax ginseng C.A.Mey.的根。\n【植物形态】多年生草本。根茎短，直立，每年增生一节，通称“芦头”，有时其上生一至数条不定根(芋)。主根粗壮，肉质，圆柱形或纺锤形。掌状复叶轮生茎端，复叶有长柄，小叶片多为5枚，边缘有细锯齿，上面沿脉有稀疏刚毛。伞形花序顶生。核果。种子2粒。\n【产地分布】人参生于山地的针、阔叶混交林或杂木林下。分布于长白山脉和小兴安岭东南部的山林地带，辽宁、吉林、黑龙江等地有大量栽培。\n【采收加工】多于秋季采挖，洗净。园参经晒干或烘干，称生晒参，山参经晒干，称生晒山参。\n【药材性状】生晒参：主根呈纺锤形或圆柱形。表面灰黄色，上部或全体有疏浅断续的粗横纹及明显的纵皱，须根上常有不明显的细小疣状突起。根茎(芦头)具不定根(芋)和稀疏的凹窝状茎痕(芦碗)。质较硬，断面淡黄白色。香气特异，味微苦、甘。生晒山参：主根粗短，多具2个支根而呈人字形。表面灰黄色，上部有明显的细密螺旋纹，根茎具细密碗状茎痕，靠近主根的一段根茎较光滑无茎痕，称圆芦。支根上生有稀疏细长的须状根。上有明显疣状突起。\n【性味归经】性温，味甘、微苦。归心经、肺经、脾经、肾经。\n【功效与作用】大补元气、复脉固脱、补脾益肺、生津安神。属补虚药下分类的补气药。\n【临床应用】用量每天3～9克，另煎对入汤剂服；野山参若研粉吞服，一次2克，一天2次。治疗体虚欲脱、气短喘促、自汗肢冷、精神倦怠、食少吐泻、气虚作喘或久咳、津亏口渴、消渴、失眠多梦、惊悸健忘、阳痿、尿频、一切气血津液不足之症。\n【药理研究】人参对中枢神经系统有双向调节、促智、镇痛、解热、抗惊和肌力减弱等功效与作用。对心血管系统有强心、抗缺血、扩张血管、降压等作用；对血液系统有保护和刺激造血功能，并抗凝血和抗血栓；对内分泌系统有促皮质激素样、促性激素样作用。提高机体免疫功能，强心、抗休克，保护和刺激骨髓的造血功能，增加肾上腺皮质激素分泌，调整血糖水平，显著抑制胆固醇的吸收，抗肿瘤，延缓衰老，加强机体的适应性，其提取物能明显促进大鼠器官核酸和蛋白质的合成。\n【化学成分】含人参皂苷，其中达玛烷系三萜皂苷活性最显著，为评定人参质量的主要指标，其中主要有人参皂苷Rb₁、人参皂苷Re、人参皂苷Rf及人参皂苷Rg₁等。\n【使用禁忌】实热证、湿热证及正气不虚者禁服。不宜与茶同服。不宜与藜芦、五灵脂同用。\n【配伍药方】①大补气血，治一切虚烦：人参末、人乳粉等分。蜜丸，或化或吞俱可。(《冯氏锦囊》参乳丸)\n②治脾胃肾气虚弱，呕吐不下食：人参、丁香各等分。捣罗为散，每服6克。空心热米饮调下。(《普济方》参散)\n③治营卫气血不足：人参9～30克，黄芪(蜜酒炙)9～18克，炙甘草3克。水煎，空心服。(《张氏医通》保元汤)\n④治虚劳白汗不止：人参45克，白术60克，桂心21克。每服15克，水煎服。阳虚甚者加附子。(《赤水玄珠》参术散)\n⑤治小儿惊热盗汗：人参3克，黄芪6克，当归4.5克。加猪心一片。水煎服。(《婴童类萃》团参饮子)" },

  {
    "id": 5,
    "price": 17.5,
    "name": "海马",
    "key": "海马",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/685d4b1d-b969-4126-8925-7e26ef8f1507.jpg",
    "cat": 6,
    "brief": "海马干货中药材泡酒材料一对新鲜三斑大海马公母煲汤中药饮片",
    "alias": "【中药名】\n海马 haima\n【别名】\n龙落子、水马、马头鱼、对海马。\n",
    "explain": "【药用部位】来源于海龙科动物线纹海马Hippocampus kelloggi Jordan et Sanyder、刺海马H histrix Kaup、大海马Hkuda Bleeker、三斑海马Htrim,acutatus Leach.和小海马H japonicus Kaup的全体。\n【动物形态】线纹海马：体长30～33厘米。体侧扁，腹部凸出。躯干部七棱形；尾部四棱形，卷曲。头冠短小，尖端有5个短小的棘，略向后弯曲，前方有板状隆起物。吻细长管状。眼较大，侧位而高，有明显眼棘。口小，端位，无牙。鳃盖突出，无放射状纹。肛门位于躯干第11节下方。体无鳞，为骨环所包。无腹鳍及尾鳍。全体淡黄白色，体侧有白色线状斑点。其余4种与线纹海马近似。\n【产地分布】5种海马均生活于近海海藻茂盛的水域中。线纹海马、刺海马和三斑海马分布于东海及南海，大海马分布于南海，小海马在我国各海域均有分布。\n【采收加工】全年可捕捉。捕得后，将尾盘卷，晒干。\n【药材性状】呈马头、蛇尾、瓦楞身。吻长，两眼深陷，躯干七棱形，尾部四棱形而多弯曲，布满骨质环节，背面有棘突。体轻，骨质，坚硬。气微腥，味微咸。线纹海马：表面黄白色，体上节纹间有许多白色短线纹。刺海马：体背部棘刺明显；大海马体粗长，表面黑褐色。三斑海马：体背的第1、4、7节有黑色圆点。小海马体短小，表面黑褐色。\n【性味归经】性温，味甘、咸。归肝经、肾经。\n【功效与作用】温肾壮阳、散结消肿。属补虚药下属分类的补阳药。\n【临床应用】用量3～9克，煎服、或入丸、散；外用适量，研末敷患处。用治阳痿、遗尿、肾虚作喘、癥瘕积聚、跌扑损伤；外治痈肿疔疮。\n【药理研究】海马的乙醇提取物具有性激素样作用，可诱生及延长雌鼠和小鼠动情期，对去势小鼠可出现动情期。此外，海马水、醇提取物还具有延缓衰老、促进免疫功能和抗血栓、抗疲劳、抗肿瘤的功效与作用。\n【化学成分】海马含甾体化合物如胆固醇等；富含蛋白质，含量高达70%以上，以三斑海马最高；另含苏氨酸、缬氨酸、蛋氨酸等17种氨基酸及13种脂肪酸。\n【使用禁忌】孕妇及阴虚阳亢者禁服。\n【配伍药方】①治气喘：海马3克，当归6克。炖鸡食或单用海马焙黄研末，水冲服。（《青岛中草药手册》）\n②治男子阳痿，妇女宫冷不孕：海马1对。炙燥研细粉，每服1克，每日3次，温酒送服。（《现代实用中药》）\n③治肾阳虚弱，夜尿频繁，或妇女因体虚而白带多：海马12克，杞子12克，鱼膘胶12克(溶化)，红枣30克。水煎服。（《中药临床应用》海马汤）" },

  {
    "id": 6,
    "price": 17.5,
    "name": "萝摩",
    "key": "萝摩",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/760375de-3e47-45a5-874e-182f0288b6e0.jpg",
    "cat": 6,
    "brief": "天浆壳 中药材 天然纯萝摩荚 哈喇 瓢赖瓜天降壳  哈喇瓢500g包邮",
    "alias": "【中药名】\n萝藦 luomo\n【别名】\n芄兰、婆婆针线包、奶桨藤、野隔山消。\n【英文名】\nHerba Acalyphae",
    "explain": "【药用部位】萝藦科植物萝藦Metaplexis japonica (Thunb.) Makino的干燥全草或根。\n【植物形态】多年生草质藤本，长达8米。全株具乳汁；茎下部木质化，上部较柔韧，有纵条纹，幼叶密被短柔毛，老时毛渐脱落。叶对生，膜质；柄长3～6厘米，先端具丛生腺体；叶片卵状心形，长5～12厘米，宽4～7厘米，先端短渐尖，基部心形，叶耳圆，长1～2厘米，上面绿色，下面粉绿色，两面无毛；侧脉10～12对，在叶背略明显。总状式聚伞花序腋生或腋外生；总花梗长6～12厘米，被短柔毛；花梗长约8毫米，被短柔毛；小苞片膜质，披针形，先端渐尖；花萼裂片披针形，外面被微毛；花冠白色，有淡紫红色斑纹，近辐状；花冠裂片张开，先端反折，基部向左覆盖；副花冠环状，着生于合蕊冠上，短5裂，裂片兜状；雄蕊连生成圆锥状，并包围雌蕊在其中；花粉块下垂；子房由2枚离生心皮组成，无毛，柱头延伸成一长喙，先端2裂。蓇葖果叉生，纺锤形，平滑无毛，长8～9厘米，先端渐尖，基部膨大。种子扁平，褐色，有膜质边，先端具白色绢质种毛。花期7～8月，果期9～12月。\n【产地分布】生于林边荒地、河边、路旁灌木丛中。分布于东北、华北、华东及陕西、甘肃、河南、湖北、湖南、贵州等地。\n【采收加工】7～8月采收全草，鲜用或晒干。块根夏、秋季采挖，洗净，晒干。\n【药材性状】常单一或数股绞扭呈束状，长短不一。茎为长圆柱形，老茎略偏，稍扭曲，具分枝。直径达1.5厘米；表面灰白色或浅黄绿色，有纵纹及节；质柔韧或稍脆，折断面皮部强纤维性老茎木质部明显，常呈新月形至半月形，可见众多管孔，髓部中空。叶对生，多皱缩，展平后叶片呈卵状心形至长卵形，长4～10厘米，宽3～8厘米；顶端渐尖，基部心形，全缘或微波状，上面枯黄色或浅黄绿色，背面色较浅或呈粉黄色，具长柄。总状花序被灰白色短柔毛。蓇葖果长卵形或卵状披针形。种子顶端具一簇白色长绢毛。气微，味淡。\n【性味归经】性平，味甘、辛。归脾经、肺经、肾经(《吉林省中药材标准第一册（2019年版）》)。\n【功效与作用】补精益气，通乳，解毒。属补虚药下属分类的补阳药。\n【临床应用】内服：煎汤，15～60克。外用：鲜品适量，捣敷。主治虚损劳伤，阳痿，遗精白带，乳汁不足，丹毒，瘰疬，疔疮，蛇虫咬伤。\n【药理研究】具有抗肿瘤、降血糖、降血脂、抗生育作用。\n【化学成分】本品含酯型苷、苯甲酰热马酮、萝藦苷元、异热马酮、肉珊瑚苷元、萝藦米宁、二苯甲酰萝藦醇、去酰萝藦苷元、去酰牛皮消苷元、夜来香素、去羟基肉珊瑚苷元等。\n【使用禁忌】老弱气虚者慎服，孕妇禁服。\n【配伍药方】①治阳痿：箩藦根、淫羊藿根、仙茅根各9克。水煎服，每日1剂。（《江西草药》）\n②治痨伤：萝藦根，炖鸡服。（《四川中药志》1960年版）\n③下乳：萝藦9～15克，水煎服；炖肉服可用30～60克。（《民间常用草药汇编》）\n④治瘰疬：萝藦根30克。水煎服，每日1剂。（《江西草药》）\n⑤治疣瘊，刺瘊，扁平疣：于患处周围用针挑破见血。点萝藦茎藤白汁，待自干，一次即愈。（《吉林中草药》）" },

  {
    "id": 7,
    "price": 17.5,
    "name": "沙菀子",
    "key": "沙菀子",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/96b6c45e-5370-4357-89cc-2ad9c9d84275.jpg",
    "cat": 6,
    "brief": "沙苑子中药材店铺沙苑子茶500g正品沙菀子沙宛子粉中草药",
    "alias": "【中药名】\n沙苑子 shayuanzi\n【别名】\n潼蒺藜、蔓黄芪、夏黄草、沙苑蒺藜。\n【英文名】\nAstragali Complanati Semen。",
    "explain": "【药用部位】豆科植物扁茎黄芪Astragalus complanatus R.Br.的成熟种子。\n【植物形态】多年生草本，高30～100厘米，通体疏被柔毛。根长而粗壮。茎略扁，较细弱，基部常倾卧，有分枝。单数羽状复叶互生，托叶小，披针形；小叶9～21片，矩状椭圆形，先端浑圆或微凹，有小细尖，小叶柄不明显。夏季开黄色蝶形小花，总状花序腋生，总梗细长，上部疏生3～9朵花，旗瓣近圆形，先端凹入，基部有爪；2强雄蕊较雌蕊短，柱头有髯毛。荚果膨胀，纺锤形，长约3厘米，先端有尖喙，表面被黑色硬毛，里面具假隔膜。种子20～30粒，圆肾形，长约2毫米，宽约1.5毫米，厚不足1毫米。表面灰棕色至深棕色，光滑。两面微凹陷，在凹入一侧有明显的种脐。\n【产地分布】生于山坡草丛、田边、路旁。分布于山西、内蒙古、陕西等地。\n【采收加工】秋末冬初果实成熟尚未开裂时采割植株，晒干，打下种子，除去杂质，晒干。\n【药材性状】肾形而稍扁，长2～2.5毫米，宽1.5～2毫米，厚约1毫米。表面光滑，褐绿色或灰褐色，边缘一侧微凹处具圆形种脐。质坚硬，不易破碎。子叶2，淡黄色，胚根弯曲，长约l毫米。无臭，味淡，嚼玄有豆腥味。\n【性味归经】性温，味甘。归肝经、肾经。\n【功效与作用】温补肝肾、固精、缩尿、明目。属补虚药下属分类的补阳药。\n【临床应用】用量9～15克，水煎服。用治肾虚腰痛、遗精早泄、白浊带下、小便余沥、眩晕目昏。\n【药理研究】具有适应原样、收缩子宫和缩尿、降压、抗炎、保肝、改善血液流变性和抑制血小板聚集、增加脑血流量、调血脂等作用。\n【化学成分】主要含三萜糖苷、黄酮及多种糖苷、异黄酮苷、氨基酸和多种脂肪酸类化合物及大量微量元素。\n【使用禁忌】相火炽盛，阳强易举者忌服。\n【配伍药方】①治肾虚精关不固，遗精滑泄，腰酸耳鸣，四肢乏力，舌淡苔白，脉细弱：沙苑蒺藜（炒）、芡实（蒸）、莲须各二两，龙骨（酥炙）、牡蛎（盐水煮一日一夜，煅粉）各一两。共为末，莲子粉糊为丸，盐汤下。（《医方集解》金锁固精丸）\n②治翳障（如早期老年性白内障）：沙苑子、石菖蒲、女贞子、生地黄、菟丝子、夜明砂各30克。共研细末，每次服12克，水煎服（《中药临床应用》补肾明目散）\n③治男子精薄无嗣，久患梦遗，妇人滑胎不孕等：黄鱼鳔胶（白净者一斤，切碎，用蛤粉炒成珠，以无声为度），沙苑蒺藜八两（马乳浸两宿，隔汤煮一炷香久取起，焙干）。上为末，炼蜜丸如梧桐子大。每服八十丸，空心温酒、白汤任下。忌食鱼及牛肉。(《证治准绳》聚精丸)" },

  {
    "id": 8,
    "price": 17.5,
    "name": "淫羊藿",
    "key": "淫羊藿",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/e84d48b5-a244-4043-ac9e-96b5dd508932.jpg",
    "cat": 6,
    "brief": "精选野生淫羊藿叶500克中药材仙灵脾 羊合叶洋火叶淫阳藿泡茶泡水",
    "alias": "【中药名】\n淫羊藿 yinyanghuo\n【别名】\n仙灵脾、刚前、三枝九叶草、乏力草、三角莲。\n【英文名】\nEpimedii Folium。",
    "explain": "【药用部位】小檗科植物淫羊藿Epimedium Brevicornu Max-Im.、箭叶淫羊藿Epimedium sagittatum (Sieb.et Zucc.)Maxim.、柔毛淫羊藿Epimedium pubescens Maxim.或朝鲜淫羊藿Epimedium koreanum Nakai的叶。(本文以箭叶淫羊藿为例，右图亦为箭叶淫羊藿)\n【植物形态】多年生草本。根茎匍匐，呈结节状，质硬，有多数纤细须根。基生叶1～3，3出复叶，有长柄；小叶片卵形、狭卵形至卵状披针形，先端急尖或渐尖，边缘有细刺毛，基部深心形，侧生小叶基部显著不对称，外侧形斜而较长，呈尖耳状，内侧较短，近圆形，叶片革质，上面灰绿色，无毛，下面色较浅，被紧贴的刺毛或细毛。茎生叶常2，生于茎顶，形与基生叶相似。花多数，聚成总状花序或下部分枝而成圆锥花序；花序轴和花梗无毛或被少数腺毛；花较小；萼片8，外轮4片，卵形，较小，外有紫色斑点，易脱落，内轮4片，较大，白色，花瓣状；花瓣4，囊状，有短于内轮萼片的距，或近于无距。瞢荚果卵圆形，先端具宿存花柱，呈短嘴状；种子数粒，肾形，黑色，有脉纹。花期2～3月，果期4～5月。\n【产地分布】生于山野竹林下或山路旁的岩石缝中。分布于陕西、云南、贵州、四川等地。\n【采收加工】夏、秋季茎叶茂盛时采割，除去粗梗及杂质，晒干或阴干。\n【药材性状】1回3出复叶，小叶片长卵形至卵状披针形，长4～12厘米，宽2.5～5厘米；先端渐尖，两侧小叶基部明显偏斜，外侧呈箭形，边缘具黄色刺毛状细锯齿。下表面疏被粗短伏毛或近无毛。叶片革质。无臭，味微苦。\n【性味归经】性温，味辛、甘。归肝经、肾经。\n【功效与作用】补肾阳、强筋骨、祛风湿。属补虚药下属分类的补阳药。\n【临床应用】用量3～9克，煎汤服。用治阳痿遗精、筋骨痿软、风湿痹痛、麻木拘挛；更年期高血压。\n【药理研究】对下丘脑-垂体-性腺轴功能具有调节作用；调节机体免疫功能；对阳虚动物模型具有“助阳”的作用，可增加冠脉血流量，降低血压等；延缓衰老，有较强的抗HSVⅡ作用。动物实验表明，有广泛的激素样作用，有促进性腺功能；水提液可抗衰老与促进物质代谢；淫羊藿多糖和总黄酮有免疫调节功能；煎剂有强心、降压和增加冠脉流量的作用。\n【化学成分】含淫羊藿苷、淫羊藿次苷Ⅰ、箭藿苷A、箭藿苷B、箭藿苷C等。\n【使用禁忌】阴虚而相火易动者木禁服。\n【配伍药方】①治阳痿：淫羊藿9克，土丁桂24克，鲜黄花远志30克，鲜金樱子60克。水煎服。(《福建药物志》)\n②治风走注疼痛，来往不定：淫羊藿、威灵仙、川芎、桂心、苍耳子各30克。上药捣细，罗为散。每服不计时候，以温酒调下3克。(《圣惠方》仙灵脾散)\n③治三焦咳嗽，腹满不饮食，气不顺：淫羊藿、覆盆子、五味子(炒)各30克。为末，炼蜜丸，梧桐子大。每姜茶下二十丸。(《圣济总录》)\n④治目昏生翳：淫羊藿、生王瓜(即小瓜蒌红色者)等分。为末，每服3克，茶下，日二服。(《圣济总录》)\n⑤治疮疹入眼：淫羊藿、威灵仙(去芦)等分。上为细末，每服1.5克，食后米汤调下。(《小儿卫生总微论方》仙灵脾散)\n⑥治牙疼：淫羊藿，不拘多少。为粗末，煎汤漱牙齿。(《卫生家宝》固本散)\n⑦治妇女更年期综合征，眩晕，高血压以及其他慢性疾病，见有冲任不调证候者：仙茅6～15克，淫羊藿9～15克，当归、巴戟天各9克，黄柏、知母各6～9克。水煎服。(上海中医学院《方剂学》)" },

  {
    "id": 9,
    "price": 17.5,
    "name": "阿胶",
    "key": "阿胶",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/166919fb-73a5-494b-bdba-811c4db245e2.jpg",
    "cat": 6,
    "brief": "【买2送1】山东胶片500g正品熬阿胶固元糕正宗黄明胶牛皮阿胶块粉",
    "alias": "【正名】\n阿胶 ejiao\n【别名】\n固元糕、盆覆胶、驴皮胶、傅致胶。\n【英文名】\nAsini Corii Colla",
    "explain": "【药用来源】马科动物驴Equus asinus L.的皮，经煎煮、浓缩制成的固体胶。\n【动物形态】我国北方地区主要役用家畜之一。体型比马小，体重一般200千克左右。头形较长，眼圆，其上生有l对显眼的长耳。颈部长而宽厚，颈背鬃毛短而稀少。躯体匀称，四肢短粗，蹄质坚硬，尾尖端处生有长毛。毛色主要有黑色、栗色、灰色3种。颈背有一条短的深色横沟，嘴部有白色嘴圈，腹部和四肢的内侧白色。\n【产地分布】性情温顺，以麦秸、谷草为食。我国北方地区均有饲养。\n【采收加工】将驴皮漂泡，去毛，切成小块，再漂泡洗净，分次水煎，滤过，合并滤液，用文火浓缩(或加适量黄酒、冰糖、豆油)至稠膏状，冷凝，切块，阴干。延伸阅读：阿胶炮制方法与标准\n【药材性状】阿胶呈长方形或丁块状，长约8厘米，宽约4厘米，厚约0.7厘米。表面黑色或黑褐色，光滑，有油润光泽，对光照视呈半透明的棕红色。质坚脆，易碎。断面棕褐色，具玻璃样光泽。气微，味微甘。\n【性味归经】性平，味甘。归肺经、肝经、肾经。\n【功效与作用】补血滋阴、润燥、止血。属补虚药下属分类的补血药。\n【临床应用】用量3～9克，烊化兑服。阿胶用于血虚萎黄、眩晕心悸、肌痿无力、心烦不眠、虚风内动、肺燥咳嗽、劳嗽咯血、吐血尿血、便血崩漏、妊娠胎漏。延伸阅读：阿胶养生保健作用与方法\n【药理研究】实验表明，阿胶具有促进造血、增强免疫、抗辐射损伤和抗休克功能；能提高耐缺氧、耐寒冷、抗疲劳能力；促进凝血，增加钙的摄入量，对肌肉萎缩有预防和改善作用；有增加智力、加速生长发育、延缓衰老等作用。\n【化学成分】阿胶主含胶原蛋白，系多肽类物质，经水解后产生分子量不等的蛋白质，最终水解产物为氨基酸。尚含纤维粘连蛋白及糖胺多糖。\n【使用禁忌】脾胃虚弱、消化不良者慎服。\n【配伍药方】①治大人小儿吐血：阿胶(炒)、蛤粉各30克，辰砂少许。上为末，藕节捣汁，和蜜调下，食后服。(《赤水玄珠》辰砂散)\n②治衄血：阿胶30克(杵碎，炒令黄燥)，贝母15克(煨令微黄)。上件药，捣筛为散。每服不计时候。以温水调下3克。(《圣惠方》)\n③治伤寒热病七日以上，发汗不解及吐下后，诸热不除，遂至发斑：阿胶(炒令燥)30克。大青60克，甘草(炙)30克。上三味，粗捣筛。每服15克，水一盏半，豉百粒，煎至一盏。去滓温服。(《圣济总录》阿胶汤)\n④治妊娠尿血：阿胶60克(捣碎。炒令黄燥)，熟干地黄60克。上件药，捣细罗为散。不计时候，以葱汤调下6克。(《圣惠方》)\n⑤治产后虚赢，大便秘涩：阿胶(碎，炒)、枳壳(浸，去瓤，麸炒)各60克，滑石(研飞，为衣)15克。上为末，炼蜜丸如梧桐子大。每服二十丸，温水下，半日来未通再服。(《局方》阿胶枳壳丸)\n⑥治老人虚人大便秘涩：阿胶(炒)6克，连根葱白三片，蜜二匙。新水煎，去葱。入阿胶、蜜溶开，食前温服。(《直指方》胶蜜汤)" },

  {
    "id": 10,
    "price": 17.5,
    "name": "白首乌",
    "key": "白首乌",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/0be24cbf-77f7-45d8-9c83-f141e639229b.jpg",
    "cat": 6,
    "brief": "白首乌药材正宗滨海白首乌片隔山消牛皮冻白何首乌隔山撬500g包邮",
    "alias": "【中药名】\n白首乌 baishouwu\n【别名】\n隔山消、白何首乌、隔山撬、白何乌。\n【英文名】\nRadix Cynanchi Bungei",
    "explain": "【药用部位】萝藦科植物牛皮消Cynanchum auriculatumRoyle ex Wight的干燥块根。\n【植物形态】蔓性半灌木。具乳汁。根肥厚，类圆柱形，表面黑褐色，断面白色。茎被微柔毛。叶对生；叶柄长3～9厘米；叶片心形至卵状心形，长4～12厘米，宽3～10厘米，先端短渐尖，基部深心形，两侧呈耳状内弯，全缘，上面深绿色，下面灰绿色，被微毛。聚伞花序伞房状，腋生；总花梗圆柱形，长10～15厘米，着花约30朵；花萼近5全裂，裂片卵状长圆形，反折；花冠辐状，5深裂，裂片反折，白色，内具疏柔毛；副花冠浅杯状。裂片椭圆形，长于合蕊柱，在每裂片内面的中部有一个三角形的舌状鳞片；雄蕊5，着生于花冠基部，花丝连成筒状，花药2室，附着于柱头周围，每室有黄色花粉块1个，长圆形，下垂；雌蕊由2枚离生心皮组成，柱头圆锥状，先端2裂。蓇葖果双生，基部较狭，中部圆柱形，上部渐尖，长约8厘米，直径约1厘米。种子卵状椭圆形至倒楔形。边缘具狭翅，先端有一束白亮的长绒毛。花期6～9月，果期7～11月。\n【产地分布】生于海拔3500米以下的山坡岩石缝中、灌丛中或路旁、墙边、河流及水沟边潮湿地。分布于华东、中南及河北、陕西、甘肃、台湾、四川、贵州、云南等地。山东、江苏有栽培。\n【采收加工】春初或秋季采挖块根，洗净泥土，除去残茎和须根，晒干，或趁鲜切片晒干。鲜品随采随用。\n【药材性状】根长圆柱形、长纺锤形或结节状圆柱形，稍弯曲，长7～15厘米，直径1～4厘米。表面浅棕色，有明显的纵皱纹及横长皮孔，栓皮脱落处土黄色或浅黄棕色，具网状纹理。质坚硬，断面类白色，粉性，具鲜黄色放射状纹理。气微，味微甘后苦。\n【性味归经】性平，味甘、微苦。归肝经、肾经、脾经、胃经。\n【功效与作用】补肝肾，强筋骨，益精血，健脾消食，解毒疗疮。属补虚药下分类的补血药。\n【临床应用】内服：煎汤，用量6～15克，鲜品加倍；研末，每次1～3克；或浸酒。外用：适量，鲜品捣敷。主治腰膝酸痛，阳痿遗精，头晕耳鸣，心悸失眠，食欲不振，小儿疳积，产后乳汁稀少，疮痈肿痛，毒蛇咬伤。\n【药理研究】白首乌具有抗氧化、抗肿瘤作用，调节免疫功能，影响心脏功能，降血脂；具有改善溶血性贫血及促进毛发生长等作用。\n【化学成分】含隔山消苷C₃N、隔山消苷C₁N、隔山消苷C₁G，隔山消苷K₁N、牛皮消苷A、牛皮消苷B、牛皮消苷C、萝藦胺、牛皮消素、萝藦苷元、12-O-桂皮酰基去酰萝藦苷元、戟叶牛皮消苷、白首乌二苯酮、多种氨基酸、维生素、无机元素。\n【使用禁忌】内服不宜过量。\n【配伍药方】①治腰腿疼痛，关节不利：白首乌15克，牛膝6克，菟丝子9克，补骨脂6克，枸杞子9克。水煎服。(《山西中草药》)\n②治阳痿：白首乌、淫羊藿、山药、党参各9～12克。水煎服。(《陕甘宁青中草药选》)\n③治神经衰弱，阳痿，遗精：白首乌15克，酸枣仁9克，太子参9克，枸杞子12克。水煎服。(《山西中草药》)\n④治胃痛，痢疾腹痛：白首乌、蒲公英各9克。水煎服。(《安徽中草药》)\n⑤治脚气水肿：白首乌、车前子各6克。水煎去渣，每日分2次服。(《食物中药与便方》)\n⑥治小儿脾胃虚弱，消化不良，食积，腹泻：白首乌、糯米草、鸡屎藤各等分，研末备用。每次9克，加米粉18克，蒸熟食。(《四川中药志》1982年)\n⑦治乳汁不足：牛皮消根(去皮)30克，母鸡1只(去内脏)。将药放入鸡腹内，炖熟，去药渣，汤肉同服，不放盐。(《湖北中草药志》)" },

  {
    "id": 11,
    "price": 17.5,
    "name": "当归",
    "key": "当归",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/d35c545d-3bab-459a-bb67-509d8f070c8d.jpg",
    "cat": 6,
    "brief": "当归头片250g克甘肃岷县非野生特级正品中药材党参黄芪组合非500g",
    "alias": "【中药名】\n当归 danggui\n【别名】\n秦归、云归、西当归、马尾归、岷当归。\n【英文名】\nAngelicae Sinensis Radix",
    "explain": "【来源】伞形科植物当归Angelica sinensis (Oliv.) Diels.的根。\n【植物形态】多年生草本。茎直立，带紫色，有明显的纵直槽纹，无毛。叶为2～3回奇数羽状复叶，叶鞘膨大；叶片卵形，小叶3对，近顶端的一对无柄，呈1～2回分裂，裂片边缘有缺刻。复伞形花序，顶生，伞梗10～14，长短不等，基部有2个线形总苞片或缺；小总苞片2～4，线形；每一小伞形花序有花12～36朵，小伞梗密被细柔毛；萼齿5，细卵形；花瓣5，白色，长卵形，先端狭尖略向内折；雄蕊5枚，花丝内弯；子房下位，花柱基部圆锥形。双悬果椭圆形，分果有果棱5条，背棱线形隆起，侧棱发展成宽而薄的翅，翅边缘淡紫色，背部扁平。花期7月，果期8～9月。\n【产地分布】生于海拔1800～2500米高寒阴湿地方。栽培于四川、云南、陕西、贵州，青海、宁夏也有。在甘肃深山老林中曾发现有野生的。\n【采收加工】秋末采挖，除去须根及泥沙，待水分稍蒸发后捆成小把，上棚，用烟火慢慢熏干。\n【药材性状】略圆柱形，下部有支根3～5条或更多，长15～25厘米。表面黄棕色至棕褐色，具纵皱纹及横长皮孔。根头(归头)直径1.5～4厘米，具环纹，上端圆钝，有紫色或黄绿色的茎及叶鞘的残基；主根(归身)表面凹凸不平；支根(归尾)直径0.3～1厘米，上粗下细，多扭曲，有少数须根痕。质柔韧，断面黄白色或淡黄棕色，皮部厚，有裂隙及多数棕色点状分泌腔，木部色较淡，形成层环黄棕色。有浓郁的香气，味甘、辛、微苦。\n【性味归经】性温，味甘、辛。归肝经、心经、脾经。\n【功效与作用】补血活血、调经止痛、润肠通便。属补虚药下属分类的补血药。\n【临床应用】用量6～12克，煎服。用治血虚萎黄、眩晕心悸、月经不调、经闭痛经、虚寒腹痛、肠燥便秘、风湿痹痛、跌扑损伤、痈疽疮疡。\n【药理研究】当归有降低血小板聚集及抗血栓的功效与作用；促进造血系统功能；降血脂及抗动脉硬化；抗氧化和清除自由基；增强免疫系统功能；抑制I、Ⅱ、Ⅲ、Ⅳ型变态反应；对子宫具有兴奋及抑制的双向性作用；抑制前列腺增生；抗促性腺激素；抗辐射损伤；抗肿瘤；抗炎镇痛、抗损伤；保肝，利胆，促进消化，抑制胃肠的推动运动；具有抑制神经系统、松弛气管平滑肌、利尿、抑菌等作用。可抑制离体动物的子宫而兴奋整体动物的子宫。藁本内酯对实验动物有平喘作用，对其中枢神经系统有抑制作用。抗贫血作用可能与所含的维生素B12和铁、锌等微量元素有关。\n【化学成分】当归挥发油中主要成分为藁本内酯、正丁烯基嗼内酯和当归酮等，尚含维生素B12和铁、锌等多种微量元素。另含阿魏酸、苯乙酮、菖蒲二烯、香荆芥酚、愈创木酚、茴香酸、当归内酯、藁本内酯二聚体等。\n【使用禁忌】热盛出血患者禁服，湿盛中满及大便溏泄者慎服。\n【配伍药方】1.治月经壅滞，脐腹疼痛：当归、玄胡索各等分。上为粗末。每服9克，加生姜三片，水煎稍热服。(《济阴纲目》玄归散)\n2.治妇人血崩：当归、白芍、干姜、棕榈，各烧存性，醋汤调，食前服。(《百一选方》)\n3.治大便不通：当归、白芷等分为末，每服6克，米汤下。(《圣济总录》)\n4.治产后自汗、盗汗：当归、黄芪各30克，麻黄根15克。上为末，每服9克，水煎服。(《济阴纲目》当归二黄汤)\n5.治脱骨疽：元参、金银花各90克，当归60克，甘草30克，水煎服。连服10剂。(《验方新编》四妙勇专汤)" },

  {
    "id": 12,
    "price": 17.5,
    "name": "海参",
    "key": "海参",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/9ace8541-e6a6-4e72-aa22-570c3e437a76.jpg",
    "cat": 6,
    "brief": "小刺参小海参刺王参小黑刺参 海参干货 非即食礼盒250克",
    "alias": "【中药名】\n海参 hai shen\n【别名】\n海鼠、海瓜皮、海瓜、刺粪、辽参，海男子。\n【英文名】\nStichopus Seu Holothuria。",
    "explain": "【药用部位】刺参科刺参属动物刺参Aposticopus japoniciLs Selenka、绿刺参Stichopus chloronotus Brandt、花刺参S. variegatus Sermper(去内脏)的全体。\n【动物形态】刺参：体呈圆柱状，一般长20～40厘米，宽3～6厘米，背面隆起，具4～6行圆锥形大小不等的肉刺，腹面管足较密，排成不规则的纵带。口在前端，后端为肛门。口偏于腹面，周围具蝰状触手20个。口背有一乳突，生殖孔即位于孔突处。皮内的骨片主要为桌形体，幼小个体的桌形体塔部细而高，底盘较大，周缘平滑，老年个体的桌形体塔部变低或消失，只剩下小形的穿孔盘。产卵季节在5月底至7月初。生活时体色通常为栗褐色，亦有绿色、黄褐色、灰白色等，随生境不同而异。\n绿刺参：体呈四方柱形，一般长达30厘米以上，沿身体的边棱，各有两行交互排列的圆锥形肉刺。腹面管足较多，排列成3纵带，中央带较宽。口稍偏于腹面，具触手20个。浅层皮内的骨片，主要是略成方形的桌形体，上方稍向外扩张，顶上有小齿8～12个，最多可达16个；下方底盘小，有穿孔4～8个。深层皮内的骨片为小形的C形体。生活时体色为深绿色或墨绿色，肉刺顶端为橙黄色或橙红色，触手基部为灰白色，管足为黑灰色。\n花刺参：体稍呈四方柱形，一般长30～40厘米，最长可达95厘米。背面散生多数圆锥形和排列不规则的肉刺。腹面管足排列成3纵带，中央带较宽。触手20个。皮的骨片：第一种为桌形体，塔部顶端具12个向外扩张的小齿，它的底盘小，略带方形，中央常有4个大孔，周围有4个或4个以上的小孔；底盘较大的桌形体，其周围小孔也较多。第二种骨片是大小不等的C形体。第三种似为数个C形体连接组成的花纹样体。生活时体色变异很大，多为橄榄绿灰色，并间有灰黄、浅褐及浓绿等色的斑点或斑纹，肉刺末端有的带红色。产卵季节在6月下旬。\n【产地分布】刺参：多栖息于水深3～15米的浅海中，喜波流静稳、海藻繁茂的岩礁底或细沙泥底。我国分布于辽宁、河北、山东沿岸浅海。现已人工繁殖进行放养。绿刺参：栖息于长有海藻的珊瑚砂上或珊瑚礁里边；或在被海水所冲刷的潟湖内。我国分布于海南南部及西沙群岛。花刺参：多栖息于潮间带珊瑚礁旁或岩石下，大形个体多在海水较深处。我国分布于海南及雷州半岛、西沙群岛等沿岸浅海。\n【采收加工】潜水员下水捕捞多在春、秋季，也可以拖网捕捞，但对资源破坏大，多禁用。捕后除去内脏，洗净腔内泥沙、血污，在盐水中煮约1小时，捞起放冷。经曝晒或烘焙至八九成千时，再加入蓬叶汁中略煮，至颜色转黑时取出晒干。有咸腥味。\n【药材性状】药材呈圆柱形、四方柱形，两端稍细。体分背腹两面。背面隆起，有4～6行圆锥状的肉刺。腹面较平坦，密集有小突起，末端有吸盘，口周围有20个触手。有的缺少，皱缩。肛门位于体后且稍偏于背面。体黑色、紫黑色、灰黑色、灰褐色、浅黄色或黄褐色。\n【性味归经】性平，味甘、咸。归肾经、肺经。\n【功效与作用】补肾益精，养血润燥，止血。属补虚药下分类的补血药。\n【临床应用】内服：煎汤，煮食，用量15～30克；入丸、散，用量9～15克。外用：研末敷。主治精血亏损，虚弱劳怯，阳痿，梦遗，小便频数，肠燥便秘，肺虚咳嗽咯血，肠风便血，外伤出血。\n【药理研究】1.刺参提取液对体外培养人胃癌MGC-B01、人肝癌BEL-7402、肺腺癌SPC-A均有抑制作用，但对正常细胞无明显影响。2.刺参提取液和刺参多糖均可明显延长凝血酶原时间，具有抗凝血作用。3.刺参提取液1毫升的镇痛作用约相当吗啡1毫克的镇痛效果。4.海参素对兔大动脉呈现依赖于浓度的持续性收缩作用。5.花刺参醇提取物体外对鼻咽癌(NPC)患者T调节细胞亚群的T4和T8细胞均有明显的诱导和激活作用。6.抗真菌作用：海参毒素对星状发癣菌、白念珠菌等真菌均有明显的抑制作用。7.抗放射性损伤：刺参酸性黏多糖有防治急性放射性损伤作用，并可明显促进实验动物造血功能的恢复。\n【化学成分】刺参含有蛋白质、脂肪、碳水化合物，钙、磷、铁、镁、硒以及维生素B₁、B₂等。绿刺参含有18种氨基酸、牛璜酸、硫酸软骨素等成分。花刺参含有海参素、海参皂苷、酸性黏多糖、甾醇、本萜醇、β-胡萝卜素、海胆酮、虾青素、玉米黄质等成分。\n【使用禁忌】脾虚不运、外邪未尽者禁服。\n【配伍药方】①治体虚软，小便多：(海参)干品30克，水浸软，和猪瘦肉或鸡一起炖或煲汤服。(《广西药用动物》)\n②治糖尿病：海参3个，鸡蛋1个，猪胰1个，地肤子与向日葵杆芯各6克。把前三味蒸熟，再加后二味的水煎液共煮内服。(《中国药用海洋生物》)\n③治虚火燥结：海参、木耳(切烂)。入猪大肠煮食。(《食物考》)\n④治高血压病，血管硬化：海参30克，冰糖适量。煮烂，每日空腹服。(《食物中药与便方》)" },

  {
    "id": 13,
    "price": 17.5,
    "name": "龟甲",
    "key": "龟甲",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/7a65074f-23cd-4321-981b-7fadc90ca79b.jpg",
    "cat": 6,
    "brief": "正品制鳖甲250g中药材醋鳖甲上甲炙鳖甲甲鱼壳可磨粉售制龟板生甲",
    "alias": "【中药名】\n龟甲 guijia\n【别名】\n龟板、乌龟甲、神屋、龟壳、败龟甲、龟筒。\n【英文名】\nTestudinis Carapacis Et Plastri",
    "explain": "【药用部位】来源于龟科动物乌龟Chinemys reevesii (Gray)的背、腹甲。\n【动物形态】头部光滑，在头后端具小鳞，鼓膜明显。颈角板后端宽；椎角板为5块，第1块前宽后狭，其后3块宽大于长；肋角板每侧4块；缘角板每侧11块；臀角板1对，近长方形。背脊中央及两侧有3条明显的纵棱；雄性的成体不显。副角板及鼠蹊角板均较显著。腹甲与背甲等长。颐角板为三角形；肱角板两外缘较宽；胸角板及腹角板较大；股角板外缘较中线略宽；肛角板后缘凹陷。头侧及喉侧有黑边的黄绿纵线；背面棕色或黑色；腹面色较浅，略带黄色，而每块角板的外侧下方色较深。四肢较扁平，有爪；指、趾间全蹼。尾短而细。\n【产地分布】半水栖性。常栖湖边、江河或池塘中。分布于河北、河南、山东、安徽、陕西、湖北、广东、广西、四川、云南、台湾等地。\n【采收加工】全年可采收，多在8月份后捕捉，捕后处死，剔除筋肉，取其甲，洗净晒干，称“血板”；煮后取甲称“烫板”。\n【药材性状】背甲长椭圆形拱状。外表面棕褐色或黑褐色，背棱3条，颈盾1块，前窄后宽，椎盾5块，肋盾两侧对称，各4块，缘盾每侧11块，臀盾2块。腹甲板片状，近长方状椭圆形，由12块角板对称嵌合而成。外表黄棕色或棕色，具紫褐色放射状斑纹。内表面黄白色至灰白色，有的略带血迹或残肉。质坚硬。气微腥，味微咸。\n【性味归经】性微寒，味咸、甘。归肝经、肾经、心经。\n【功效与作用】滋阴潜阳、益肾强骨、养血补心。属补虚药下属分类的补阴药。\n【临床应用】用量9～24克，内服，先煎；或熬膏；或入丸散；外用：烧灰存性，研末掺或调油敷。用于阴虚潮热、骨蒸盗汗、头晕目眩、虚风内动、筋骨痿软、心虚健忘。\n【药理研究】龟甲煎剂可降低甲亢型大鼠的甲状腺和肾上腺皮质功能；可提高细胞免疫和血液免疫功能；高浓度对小鼠离体子宫有收缩作用；有延缓衰老作用；能增加骨密度和骨钙、镁含量；此外，尚有抗结核杆菌的作用。\n【化学成分】含胆甾醇、骨胶原，水解物含多种氨基酸、脂肪、蛋白质和钙盐等。\n【使用禁忌】脾胃虚寒、内有寒湿及孕妇禁服。\n【配伍药方】①治痿厥，筋骨软，气血俱虚甚者：黄柏(炒)、龟版(酒炙)各一两半，干姜二钱，牛膝一两，陈皮半两。上为末，姜汁和丸，或酒糊丸。每服七十丸，白汤下。(《丹溪心法》补肾丸)\n②治小儿解颅：龟版五钱，地黄一钱。水煎，分早中晚三服。(《温氏经验良方》解颅煎)\n③治虚损精极者，梦泄遗精，瘦削少气，目视不明等证：龟版一斤，鹿角三斤，枸杞子六两，人参三两。上将鹿角截碎，龟版打碎，长流水浸三日，刮去垢，用砂锅河水慢火鱼眼汤，柴煮三昼夜，不可断火，当添热水，不可添冷水，三日取出晒干，碾为末，另用河水将末并枸杞、人参又煮一昼夜，滤去渣，再慢火熬成膏。初服一钱五分，渐加至三钱，空心，酒服。(《摄生秘剖》龟鹿二仙膏)\n④治妇女白带，腹时痛：龟版(酒炙)二两，黄柏(炒)一两，干姜(炒)一钱，栀子二钱半。共为末，酒糊丸，桐子大。每服七十丸，日服二次。(《直指方》)\n⑤治心失志善忘：龟甲(炙)、木通(锉)、远志(去心)、菖蒲各半两。捣为细散。空心酒服方寸匕，渐加至二钱匕。(《圣济总录》龟甲散)\n⑥治崩中漏下，赤白不止，气虚竭：龟甲、牡蛎各三两。上二味治下筛，酒服方寸匕，日三。(《千金方》)\n⑦治五痔，结硬焮痛不止：龟甲二两(涂醋炙令黄)，蛇蜕皮一两(烧灰)，露蜂房半两(微炒)，麝香一分(研入)，猪后悬蹄甲一两(炙令微黄)。上药捣细，罗为散，每于食前，以温粥饮调F-钱。(《圣惠方》龟甲散)" },

  {
    "id": 14,
    "price": 17.5,
    "name": "黄精",
    "key": "黄精",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/e85fc729-e4ca-4c6e-86b5-c602f8a234e7.jpg",
    "cat": 6,
    "brief": "正品制鳖甲250g中药材醋鳖甲上甲炙鳖甲甲鱼壳可磨粉售制龟板生甲",
    "alias": "【中药名】\n黄精 huangjing\n【别名】\n姜形黄精、白及黄精、玉竹黄精、龙衔老虎姜。\n【英文名】\nPolygonati Rhizoma",
    "explain": "【药用部位】为百合科植物黄精Polygonatum sibiricum Red.、滇黄精Polygonatum kingianum Coll.etHemsl.、多花黄精Polygonatum cyrtonema Hua.的根茎。按形状不同，习称“鸡头黄精”、“大黄精”、“姜形黄精”。\n【植物形态】黄精：多年生草本，高50～90厘米。根茎横走，圆柱状，结节膨大。叶轮生，无柄，每轮4～6片；叶片条状披针形，长8～15厘米，宽0.4～1.6厘米，先端卷曲。花腋生，2～4朵成伞形花丛，总花梗长1～2厘米；花被筒状，白色至淡黄色，全长0.9～1.3厘米，裂片6，披针形；雄蕊6枚，花丝短为子房长1.5～2倍。浆果球形，成熟时紫黑色。花期5～6月，果期7～9月。\n滇黄精：茎高1～3厘米，顶端常作缠绕状。叶轮生，每轮4～8枚，叶线形至线状披针形，长6～20厘米，宽0.3～3厘米，先端渐尖并拳卷。花梗2～3朵，不成伞形，花被粉红色，长1.8～2.5厘米。浆果成熟时红色。\n多花黄精：多年生草本。根茎肥厚，常结节成块；地上茎圆柱形，中空，不分枝。叶互生，椭圆形、卵状披针形至长圆状披针形，有叶脉5～7条，两面光滑无毛，无叶柄。花腋生，2～7朵排成伞形花序或单生；总花梗下垂；花被黄绿色，管状，裂片6；雄蕊6枚；花丝稍扁，具小乳突或细柔毛，上端稍膨大至囊状突起；子房上位，3室。浆果球形，成熟时蓝黑色。花期5～6月。\n【产地分布】黄精：生于山地林下、灌丛或山坡的半阴处。分布于东北、华北及陕西、宁夏、浙江等地。\n滇黄精：多生于阴湿的山坡林下或灌木丛中。分布云南等地。\n多花黄精：生于山坡林下、草地和灌木林中。分布于广东、江西、湖北、湖南、贵州等地。\n【采收加工】春、秋季采挖，除去须根，洗净，置沸水中略烫或蒸至透心，捞出晒干或烘干。\n【药材性状】鸡头黄精：呈结节状弯柱形，长3～10厘米，直径0.5～1.5厘米。结节长2～4厘米，略呈圆锥形，常有分枝；表面黄白色或灰黄色，半透明，有纵皱纹，茎痕圆形，直径5～8毫米。\n大黄精：根茎呈肥厚肉质的结节块状，结节长可达10厘米以上，宽3～6厘米，厚2～3厘米。表面淡黄色至黄棕色，具环节，有皱纹及须根痕，结节上侧茎痕呈圆盘状，周周凹入，中部突出。质硬而韧，不易折断，断面角质，淡黄色至黄棕色。气微，味甜，嚼之有黏性。\n姜形黄精：长条结节块状，长短不等，常数个块状结节相连。表面灰黄色或黄褐色，粗糙，结节上侧有突出的圆盘状茎痕，直径0.8～1.5厘米。味苦者不可药用。\n【性味归经】性平，味甘。归肺经、脾经、肾经。\n【功效与作用】补气养阴、健脾、润肺、益肾。属补虚药下分类的补阴药。\n【临床应用】用量9～15克，煎服，鲜品30～60克；或入丸、散，熬膏。外用：适量，煎汤洗；熬膏涂；或浸酒搽。用治脾胃虚弱、体倦乏力、口干食少、肺虚燥咳、精血不足、内热消渴。\n【药理研究】黄精能增加冠脉流量、调血脂、降血糖、抗衰老和增强免疫。黄精粗多糖具免疫调节的功效与作用，对化学性肝损伤具保护作用，另具抗炎和抗病毒作用。此外，还具抑菌、抗病原微生物、降压、止血等作用。现代临床用治冠心病、高脂血症、糖尿病、白细胞减少症、肺结核、慢性肝炎、脑力及睡眠不足、头痛、阳痿及癣菌病等。\n【化学成分】黄精含甾体皂苷类成分，如薯蓣皂苷元、毛地黄糖苷、菝葜皂苷元等；黄酮类成分有芹菜黄素等。总糖含量为26.78%～46.40%，总蒽醌含量为0.0726%～0.128%。另含吖丁啶羧酸、天门冬氨酸、高丝氨酸牡荆素木糖苷、异甘草素玻、丁香脂素、14α-羟基西伯利亚蓼苷A、滇黄精苷A等。\n【使用禁忌】中寒泄泻，痰湿痞满气滞者忌服。\n【配伍药方】1.治足癣、体癣：黄精30克，丁香10克，百部10克。煎水外洗。(《新编常用中草药手册》)\n2.治神经性皮炎：黄精适量，切片，九蒸九晒。早晚嚼服，每次15～30克。(《湖北中草药志》)\n3.治病后体虚，面黄肌瘦，疲乏无力：黄精12克，党参、当归、枸杞子各9克。水煎服。(《宁夏中草药手册》)\n4.治神经衰弱，失眠：黄精15克，野蔷薇果9克，生甘草6克。水煎服。(《新疆中草药》)\n5.治阴血不足，大便秘结：黄精、火麻仁、玄参各15克，当归、肉苁蓉各9克，熟地黄12克。水煎服。(《湖北中草药志》)" },

  {
    "id": 15,
    "price": 17.5,
    "name": "蓝布正",
    "key": "蓝布正",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/12905066-f0a5-4da8-949b-3d2e1d22dd69.jpg",
    "cat": 6,
    "brief": "蓝布正 中药材 天然野生纯新货 蓝布正 蓝不正 追风七 包邮 500克",
    "alias": "【中药名】\n蓝布正 lanbuzheng\n【别名】\n路边黄、香鸡归、南布正、老蛇骚。\n【英文名】\nGei Herba。",
    "explain": "【药用部位】来源于蔷薇科植物路边青Geum aleppicumJacq.或柔毛路边青Geum japnicum Thunb. var. chinense Bolle的干燥全草。\n【植物形态】路边青：多年生草本，高40～90厘米，全体被长刚毛。主根短缩，有多数须根，棕色。茎直立，圆柱形。基生叶丛生，有长柄，羽状全裂或近羽状复叶，顶裂片最大，菱状卵形至宽卵圆形，长5～10厘米，宽3～10厘米，3裂或具缺刻，先端急尖，基部楔形或近心形，边缘有大锯齿，两面疏生长刚毛，侧生裂片小，1～2对，卵形或倒卵形，边缘均有不规则粗齿，茎生叶互生，卵形3浅裂或羽状分裂，基部有卵形或倒卵形托叶1对。花单生茎顶，花萼5裂，裂片先端尖，副萼片披针形，花冠黄色，直径10～15毫米，花瓣5，宽卵形至近圆形，先端圆，雄蕊及心皮均为多数。聚合瘦果近球形，宿存花柱先端有长钩刺。花期夏季。柔毛路边青：多年生草本。茎直立，高达60厘米，被黄色短柔毛及粗硬毛。基生叶为大头羽状复叶，有1～2对小叶，侧生小叶呈附片状，顶生小叶卵形或宽卵形，长3～8厘米，先端钝圆，基部宽心形或宽楔形，浅裂或不裂，有粗齿，两面绿色，疏被糙伏毛，上部茎生叶为单叶。花序疏散。花径1.5～1.8厘米，花梗密生粗硬毛及短柔毛，萼片三角状卵形，花瓣黄色，近圆形，花柱顶生，在上部1/4处扭曲，后自扭曲片脱落。聚合果圆卵形或椭球形，瘦果被长硬毛，果托被长硬毛，毛长2～3毫米。花果期5～10月。\n【产地分布】路边青：生于林缘、水边及山坡草丛中。分布于东北、华北、西北、中南及西南各地区。柔毛路边青：生于海拔200～2300米山坡草地、田边、河边、灌丛或疏林下。主产于山东、河南、安徽、江苏、浙江、福建、江西、湖北、湖南、广东、广西、贵州、云南、西藏、四川、陕西、甘肃及新疆。\n【采收加工】春季花开时采收，除去泥沙，晒干。\n【药材性状】长20～100厘米。主根短，有多数细根，褐棕色。茎圆柱形，被毛或近无毛。基生叶有长柄，羽状全裂或近羽状复叶，顶裂片较大，卵形或宽卵形，边缘有大锯齿，两面被毛或几无毛；侧生裂片小，边缘有不规则的粗齿；茎生叶互生，卵形，3浅裂或羽状分裂。花顶生，常脱落。聚合瘦果近球形。气微，味辛、微苦。\n【性味归经】性凉，味甘、微苦。归肝经、脾经、肺经。\n【功效与作用】益气健脾，补血养阴，润肺化痰。属补虚药下分类的补阴药。\n【临床应用】用量9～30克。治疗气血不足，虚痨咳嗽，脾虚带下。\n【药理研究】研究显示，蓝布正具有抗凝血、抗高血压、抗炎、抗肿瘤和治疗缺血性疾病等多种药理作用。\n【化学成分】叶和茎中含胡萝卜素、鞣质(20%以上)。根中含芳香苦味质、挥发油(0.4%)，油中主要成分为丁香油酚。根中含水杨梅甙0.15%，与稀酸共热，则分解为丁香油酚，葡萄糖及L-阿拉伯糖。花序内含黄酮类1.94%，种子内含脂肪油23.05%，系干性油。\n【使用禁忌】尚不明确，谨慎用药。\n【配伍药方】①治疗体虚头晕：蓝布正15克，仙桃草10克与猪脚1只同炖内服。(《苗族医药学》)\n②治虚劳、虚弱：蓝布正、牛蒡子根各15克，竹根七9克，砂仁6克，虚弱炖肉吃，劳伤泡酒喝。(《草药彩色图集》)\n③治疔疮：蓝布正鲜品适量，捣烂外敷。(《贵州草药》)" },


  {
    "id": 16,
    "price": 17.5,
    "name": "燕窝",
    "key": "燕窝",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/43a45b13-4d4e-47c1-9bf6-4969c70a00ca.jpg",
    "cat": 3,
    "brief": "正品人参燕窝即食老人中老年孕妇节日滋补营养品新鲜",
    "alias": "【中药名】\n燕窝 yanwo\n【别名】\n燕蔬菜、单色金丝燕、南海金丝燕、燕菜。\n【英文名】\nNidus Collocaliae。",
    "explain": "【药用部位】来源于雨燕科动物金丝燕Collocalia esculentaL.及同属多种燕类用唾液或唾液与绒羽等混合黏结所筑成的巢窝。\n【动物形态】体长约9厘米。嘴暗褐色，形短，稍带弯曲，基部宽阔。背褐黑色，略有光泽；腰部较淡；腹部灰白色或赤褐色。翅长而尖，合翅时，翼端远超过尾端；尾短，尾羽略呈方形。脚极细弱，4趾均向前。\n【产地分布】多见于热带沿海地区，在岛屿险峻的岩洞深暗处筑巢聚居。分布于东南亚一带及太平洋各岛屿上。\n【采收加工】2月、4月、8月间采集。金丝燕在每年4月间产卵，产卵前必营筑新巢，此时其喉部黏液腺非常发达，所筑之巢，纯为黏液凝固而成，色白洁净，称为“白燕”；这时如被采去，金丝燕立即第二次筑巢，往往带有一些绒羽，颜色较暗，称为”毛燕”；有时亦可见有血迹，称为“血燕”。\n【药材性状】完整者呈不整齐的半月形，长6.5～10厘米，宽3～5厘米，凹陷呈兜状。附着于岩石的一面较平，外面微隆起，附着面黏液凝成层排列较整齐，较隆起而细致，呈波状，窝的内部粗糙，呈丝瓜络样。质硬而脆，断面微似角质。散燕窝呈碎渣样或散颗粒状，类白色或黄白色。入水则柔软而膨大。白燕色洁白，偶带少数绒羽；毛燕灰色，内有较多的灰黑色羽毛；血燕则含有赤褐色的血丝。气微，味微咸。\n【性味归经】性平，味甘。归肺经、胃经、肾经。\n【功效与作用】养阴润燥、益气补中。属补虚药下属分类的补阴药。\n【临床应用】用量3～9克，绢包煎，或蒸服，或入膏剂。用治虚损、肺痨咳嗽、痰喘、咯血、吐血、久痢、久疟、噎隔反胃。\n【药理研究】实验表明，燕窝提取物具有抗病毒、降压和滋补强壮作用。但目前尚未发现燕窝蛋白有特殊营养价值。\n【化学成分】含蛋白质数种，其氮的分布为：酰胺含氮10.08%、腐黑物含氮6.68%、精氨酸含氮19.35%、胱氨酸含氮3.39%、组氨酸含氮6.22%、赖氨酸含氮2.46%、单氨含氮50.19%、非氨含氮7.22%。另含氨基己糖及类似粘蛋白的物质。灰分中以钙、磷、钾、硫为多。\n【使用禁忌】尚不明确，谨慎用药。\n【配伍药方】①治体虚自汗：黄芪20克，燕窝5克。煎服，日服2次。（《中国动物药》）\n②治体虚乏力：土燕窝炖鸡肉吃。（《彝医动物药》）\n③治虚劳咳嗽：沙参二钱，燕窝二钱，百合五钱。共炖烂食。（《不知医必要》）\n④治肺结核咯血：土燕窝10克，百合20克，冰糖适量。蒸熟，一次食之，日服2次。（《中国动物药》）\n⑤治老年痰喘：秋白梨一个，去心，入燕窝一钱，先用滚水泡，再入冰糖一钱蒸熟，每日早晨服下，勿间断。（《文堂集验方》）\n⑥治噤口痢：白燕窝二钱，人参四分，水七分。隔汤炖熟，徐徐食之。（《救生苦海》）\n⑦治老年疟疾及久疟，小儿虚疟，胎热：燕窝三钱，冰糖半钱。顿食数次。（《内经类编试效方》）\n⑧治小便频数：土燕窝10克，益智仁5克，桑螵蛸5克。后两味研末同燕窝同蒸熟食。（《中国动物药》）" }] },



{
  "id": 4,
  "name": "活血化瘀",
  "foods": [
  {
    "id": 1,
    "price": 17.5,
    "name": "丹参",
    "key": "丹参",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/2649415d-0544-4800-97a2-bbbadade3e5b.jpg",
    "cat": 10,
    "brief": "丹参中药材500g正品紫丹参片泡茶水丹参粉茶非野生特级",
    "alias": "【中药名】\n丹参 danshen\n【别名】\n赤参、血生根、大红袍、木羊乳、山参。\n【英文名】\nSalviae Miltiorrhizae、Radix Et Rhizoma。",
    "explain": "【来源】唇形科植物丹参Salvia miltiorrhiza Bge.的根及根茎。\n【植物形态】多年生草本，全株密被柔毛。根圆柱形，砖红色。茎直立，多分枝。奇数羽状复叶，小叶3～7，顶端小叶较大，卵形或椭圆状卵形，先端钝，基部宽楔形或斜圆形，边缘具圆锯齿，两面被柔毛。轮伞花序有花6朵至多朵，组成顶生或腋生的总状花序，密被腺毛和长柔毛；小苞片披针形，被腺毛；花萼钟状，先端二唇形，萼筒喉部密被白色柔毛；花冠蓝紫色，二唇形，上唇直立，略呈镰刀状，先端微裂，下唇较上唇短，先端3裂，中央裂片较两侧裂片长大，又作浅2裂；发育雄蕊2枚，伸出花冠管外盖于上唇之下，花丝比药隔短，2下臂的药室不育，顶端联合；花柱较雄蕊长，柱头2裂。小坚果长圆形，熟时暗棕色或黑色，包于宿萼。花期5～8月，果期8～9月。\n【产地分布】生于山坡草地、林下、溪旁。分布于甘肃、四川、贵州等地。\n【采收加工】秋季挖取根部，除去茎、叶、须根，去净泥土，晒干。\n【药材性状】根茎短粗，顶端有时残留茎基。根数条，长圆柱形，略弯曲，有的分枝并具须状细根，长10～20厘米，直径0.3～1厘米。表面棕红色或暗棕红色，粗糙，具纵皱纹。老根外皮疏松，多显紫棕色，常呈鳞片状剥落。质硬而脆，断面疏松，有裂隙或略平整而致密，皮部棕红色，木部灰黄色或紫褐色，导管束黄白色，呈放射状排列。气微，味微苦涩。 栽培品较粗壮，直径0.5～1.5厘米。表面红棕色，具纵皱，外皮紧贴不易剥落。质坚实，断面较平整，略呈角质样。\n【性味归经】性微寒，味苦。归心经、肝经。\n【功效与作用】祛瘀止痛、活血痛经、清心除烦。属活血化瘀药下分类的活血调经药。\n【临床应用】用量9～15克，煎服，大剂量可用至30克。用治月经不调、经闭痛经、癥瘕积聚、胸腹刺痛、热痹疼痛、疮疡肿毒、心烦不眠；肝脾肿大、心绞痛。\n【药理研究】制剂能使实验动物心冠状动脉扩张，使心功能获得明显改善。注射液有抗凝血作用。提取物体外有抑菌作用。隐丹参酮是抗菌的有效成分。保护心脑系统；降血脂；抗动脉粥样硬化；活血化瘀；增强耐缺氧能力；增强免疫功能；抗炎及抗过敏；护肝；抗胃溃疡；抗肿瘤；镇静镇痛；对呼吸系统有保护作用；改善肾功能；抗氧化;抗菌；促进皮肤伤口、骨折愈合；有性激素样作用。\n【化学成分】含丹参酮Ⅰ、丹参酮ⅡА、丹参酮Ⅱв、隐丹参酮、紫草酸B、丹参隐螺内酯、二氢丹参酮、丹参酸乙、二氢异丹参酮Ⅰ、丹参醇、丹参内酯、替告皂苷元、β-谷固醇、豆固醇、柳杉酚等。\n【使用禁忌】月经过多而无瘀血者禁服，孕妇慎用。不宜与藜芦同用。\n【配伍药方】①治经血涩少，产后瘀血腹痛，闭经腹痛：丹参、益母草、香附各9克，水煎服。(《陕甘宁青中草药选》)\n②治落胎身下有血：丹参360克。以酒五升，煮取三升，温服一升，日三服。(《千金要方》)\n③治心腹诸痛属半虚半实者：丹参30克，檀香、砂仁各4.5克。水煎服。(《时方歌括》丹参饮)\n④治急、慢性肝炎，两胁作痛：茵陈15克，郁金、丹参、板蓝根各9克。水煎服。(《陕甘宁青中草药选》)\n⑤治痛经：丹参15克，郁金6克。水煎，每日1剂，分2次服。(《全国中草药汇编》)" },

  {
    "id": 2,
    "price": 17.5,
    "name": "鼠尾草",
    "key": "鼠尾草",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/1dc4aeef-547f-429c-97e8-56d846c119b0.jpg",
    "cat": 10,
    "brief": "鼠尾草中药材500克华鼠尾草石见川 实体中药材店铺中药材大全",
    "alias": "【中药名】\n鼠尾草\n【别名】\n普通鼠尾草、庭院鼠尾草、紫花丹、坑苏。\n【英文名】\nsalvia officinalis。",
    "explain": "【药用部位】为唇形科植物鼠尾草Salvia japonica Thunb.的全草。\n【植物形态】鼠尾草为一年生草本，高40～60厘米。茎直立，四角柱状，且有毛，下部略木质化，呈亚低木状。茎下部叶为二回羽状复叶；叶柄长7～9厘米；叶片长6～10厘米，宽5～9厘米，广椭圆形，具短绒毛。茎上部为一回羽状复叶；此短柄；顶生小叶披针形或菱形，长可达10厘米，宽3.5厘米，先端渐尖或尾尖，基部长楔形，边缘具钝锯齿，侧生小叶卵圆状披针形，近无柄。轮伞花序，每轮2～6花，组成伸长的总状花序或总状圆锥花序；苞片及小苞片披针形；花梗短，被柔毛；花萼筒形，二唇形；花冠淡红、淡紫、淡蓝至淡白色，冠筒筒状；发育雄蕊2，外个，花丝短；花柱外伸，先端呈不相等2裂。小坚果椭圆形，褐色，光滑。花期6～9月。\n【产地分布】生于山间坡地、路旁、草丛、水边及林荫下。主产于江苏、江西、安徽、浙江、湖北、福建、广东、广西、台湾等地。\n【采收加工】7～9月采收，洗净晒干。\n【药材性状】茎枝稍弯曲，多切成小段。叶多皱缩，展平后长5～9厘米，宽3～8厘米。轮伞花序，每轮2～6花，花多脱落，苞片及小苞片披针形，花梗短，被柔毛。有香气、稍具刺激性，略有涩味。\n【性味归经】性平，味辛、苦。归心经、肺经、肝经、大肠经、膀胱经。\n【功效与作用】清热利湿，活血调经。属活血化瘀药下分类的活血调经药。\n【临床应用】内服：煎汤，15～30克。主治黄疸、赤白下痢、湿热带下、月经不调、痛经、疮疡疖肿、跌打损伤。\n【药理研究】鼠尾草煎剂具有抗炎功效，扩张微血管，改善微循环，镇静安神，缓解由植物神经功能紊乱造成血管舒缩功能障碍，还具有抗老、增强记忆力、安定神经、明目，缓和头痛及神经痛作用。\n【化学成分】鼠尾草全草含β-谷甾醇，β-谷甾醇葡萄糖甙，熊果酸，齐墩果酸，2α-羟基熊果酸，委陵菜酸，咖啡酸，马斯里酸，乙基-β-D-吡喃半乳糖甙。\n【使用禁忌】孕妇，哺乳母亲和癫痫患者不能使用鼠尾草。此外，有一些报告声称经常服用这种草药容易引起惊厥、混乱和心跳加速等副作用。\n【配伍药方】调经：每日鼠尾草全草30～60克，或加龙芽草、益母草各30克。水煎，冲黄酒服。(《浙南本草新编》)" },

  {
    "id": 3,
    "price": 17.5,
    "name": "血风藤",
    "key": "血风藤",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/1b71e0c5-6db5-4540-8b35-0d053538f274.jpg",
    "cat": 10,
    "brief": "大血藤药材500克 野生大血藤片 红藤中药材 粗红血腾根刺藤血腾片",
    "alias": "【中药名】\n血风藤 xuefengteng\n【别名】\n铁牛入石、青筋藤、血风根、扁果藤、老人根。\n【英文名】\nRadux et Caulis Ventilaginis Leiocarpae",
    "explain": "【药用部位】为鼠李科植物翼核果Ventilago leiocarpa Benth.的干燥根或茎。\n【植物形态】木质藤本。高2～3米。根粗壮，外皮暗紫红色。茎多分枝，有细纵纹，幼枝绿色。单叶互生，革质，具柄；卵形或长圆形，长4～8厘米，宽2～3.5厘米，顶端渐尖，基部阔楔形或近圆形，两面绿色无毛，下面侧脉极明显。腋生聚伞花序或有时成顶生圆锥花序；花小，绿白色；花萼5裂，裂片三角形；花瓣5，匙形；雄蕊5；子房2室，藏于五角形的花盘内。坚果球形，熟时红褐色，顶部有一鸭舌形膜质的薄翅，翅长3～5厘米。花期夏季。\n【产地分布】生于山涧沟边的疏林下或灌木丛中。主产于福建、台湾、广西、广东等地。\n【采收加工】春秋季采收茎，切段，晒干。冬季挖根，切片，晒干。\n【药材性状】血风藤为椭圆形、长圆形或不规则的斜切片，厚0.3-1厘米。栓皮灰棕色，栓皮脱落处现红棕色。切面木部黄色，导管孔单个或多个放射状排列，有的中央有细小的髓；质坚硬。气微，味微苦。\n【性味归经】性温，味甘、苦。归肝经、肾经。\n【功效与作用】补气养血，祛风通络，强筋健骨。属活血化瘀药下分类的活血调经药。\n【临床应用】内服：煎汤，15～30克；或浸酒。用于气血虚弱，风湿痹痛，腰膝酸软，筋骨痿弱，四肢麻木，跌打损伤，月经不调，血虚经闭。\n【药理研究】血风藤具有保肝、抗炎的功效与作用，还能抑制肿瘤细胞株的生长。\n【化学成分】茎的成分未见报道。根含蒽醌化合物：大黄素，大黄素甲醚，大黄素-6，8-二甲醚，1-羟基-6，7，8-三甲氧基-3-甲基蒽醌，1，2，4，8-四羟基-3-甲基蒽醌，翼核果醌，萘醌化合物：翼核果醌-Ⅰ，翼核果素。还含羽扇豆醇。\n【使用禁忌】尚不明确。\n【配伍药方】1.治腰肌劳损：血风藤15克，杜仲18克，炖猪脊骨食用。\n2.治跌打损伤：血风藤15克，当归12克，川芎10克，水煎服。" },

  {
    "id": 4,
    "price": 17.5,
    "name": "大驳骨",
    "key": "大驳骨",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/80a4179c-fc3b-449f-bcb4-e68d2c33d9e0.jpg",
    "cat": 10,
    "brief": "包邮正品中药材野生大驳骨 还魂草 接骨木 大骨风 另有小驳骨",
    "alias": "【中药名】\n大驳骨 dabogu\n【别名】\n大接骨草、黑叶爵床、大接骨、救命王、大还魂。\n【英文名】\nMalalanut Tweig and Leaf。",
    "explain": "【药用部位】爵床科植物大驳骨Adhatoda ven-tricosa(Wall.)Nees的茎叶。\n【植物形态】常绿灌木。茎直立，圆柱形;新枝绿色，老枝灰黄色，节间显著膨大呈膝状，叶对生;叶片近革质;椭圆形，长10～15cm，宽4.5～6cm，先端钝，基部尖窄，全缘。穗状花序顶生，有多数宽卵形的苞片，内有3～4花;小苞片极小;萼片5;花冠二唇形，花白色而有红色斑点， 上唇2裂，下唇较大，3浅裂，中裂较宽;雄蕊2，着生于花冠喉部，花柱线形，2浅裂，蒴果卵形或椭圆形，有毛。\n【产地分布】多生于山地、水边、坡地、路旁灌木丛或林下湿润地，常为栽培绿篱。分布于广东、广西等华南各省区。\n【采收加工】全年可采。洗净，切段，晒干。\n【药材性状】茎枝圆柱形，多切成段，表面光滑，微具纵棱，灰绿色，或棕黄色，节部膨大，略带紫色，断面中空有髓。叶对生，具短柄;叶片椭圆形，革质，长10～15cm，宽3～6cm，先端钝，基部楔形，全缘，叶面青绿色，叶青黄绿色，微显光亮，无毛。气微，味微辛。以茎枝细、叶多、色青绿者为佳。\n【性味归经】性平，味辛、苦。归肝经、脾经。\n【功效与作用】活血止痛，化瘀接骨，祛风除湿，消肿解毒。属活血化瘀药下属分类的活血疗伤药。\n【临床应用】内服：煎汤，9～15g；或泡酒。外用：适量，捣敷;或研末撒。主治跌打伤肿，骨折，劳伤腰痛，风湿痹痛，胃气痛，无名肿毒，外伤红肿。\n【药理研究】大驳骨叶中所含的鸭嘴花碱有显著兴奋子宫、兴奋呼吸、收缩支气管、减弱心肌收缩力、减少冠脉流量等作用，并对金黄色葡萄球菌、宋内痢疾杆菌、志贺痢疾杆菌、变形杆菌、伤寒杆菌等有中等程度的抗菌作用;脱氢鸭嘴花碱有显著的局部麻醉作用。从叶、花及根部提取的油脂部分有抗结核杆菌作用。鸭嘴花油有驱蛔作用。\n【化学成分】大驳骨叶含鸭嘴花酮碱(vasicinone)、鸭嘴花醇碱(vasicol)、去氧鸭嘴花酮碱(de-oxyvasicinone)、鸭嘴花碱(vasicine)、去氧鸭嘴花碱(deoxypeganine)等生物碱(deoxyvasi-cine)等。地上部分含生物碱：鸭嘴花考林碱(vasicoline)、鸭嘴花考林酮碱(vasicolinone)、安尼索碱(anisotine)、鸭嘴花定碱(adhatodine)和大驳骨酮碱(adhavasinone)等。\n【使用禁忌】孕妇慎服。\n【配伍药方】① 消肿止痛，接骨，并治风湿痹痛：大驳骨二两，泽兰一两，透骨消一两，双飞蝴蝶五钱，小驳骨二两，肉郎伞三两，鸡骨香五钱。共捣烂，酒炒热外敷。(《广西中药志》)\n② 治跌打创伤红肿：大驳骨适量。捶烂用酒炒热，敷伤处。(《广西民间常用草药》)" },

  {
    "id": 5,
    "price": 17.5,
    "name": "马钱子",
    "key": "马钱子",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/aa0c9a6f-d96d-4b3d-83eb-211dff1697ad.jpg",
    "cat": 10,
    "brief": "制马钱子（100克） 中药抓药中药材抓配门店药材抓方正品地道好药材",
    "alias": "【中药名】\n马钱子 maqianzi\n【别名】\n印度马钱、番木鳖、番木鳖、苦实、马前子。\n【英文名】\nStrychni Semen",
    "explain": "【来源】马钱科植物马钱Strychnos nux-vomicaL.的成熟种子。\n【植物形态】乔木。树干直立，粗壮。叶对生，叶片革质，椭圆形、卵形至广卵形，先端急尖，基部圆形至广楔形，全缘，上面深绿色，下面色较淡，主脉5，在下面隆起。聚伞花序顶生，被柔毛；花较小，灰白色；花萼5裂，裂片卵圆形，密被短柔毛；花冠筒状，先端5裂，花冠筒内侧近基部被长柔毛；雄蕊5枚，着生于花冠筒喉部，几无花丝；子房上位。浆果球形。种子2～5粒，圆盘形，表面灰黄色，密被银色茸毛。\n【产地分布】生于山地林中或栽培。分布于福建、台湾、广东、广西等地。\n【采收加工】果实成熟时摘取果实，取出种子，洗净附着的果肉，晒干，即为生马钱子。砂烫至鼓起并显棕褐色或深绿色，即为制马钱子。\n【药材性状】钮扣状圆板形，常一面隆起，一面稍凹下，表面密被灰棕色或灰绿色绢状茸毛，自中间向四周呈辐射状排列，有丝样光泽。边缘稍隆起，较厚，有突起的珠孔，底面中心有突起的圆点状种脐。质坚硬，平行剖面可见淡黄白色胚乳，角质状，子叶心形。无臭，味极苦。\n【性味归经】性温，味苦，有毒。归脾经、肝经。\n【功效与作用】清肺利咽、止血。属活血化瘀药下分类的活血疗伤药。\n【临床应用】内服：炮制后入丸、散，每次0.2～0.6克，大剂量0.9克。外用：适量，研末撒，浸水、醣磨、煎油涂敷或熬膏摊贴。内服，如按其成分番木鳖碱(士的宁)计算，一次量控制在6毫克为宜。内服一般从小剂量开始，逐渐加量，加至患者感觉肌肉有一过性轻微颤动为最佳有效量，此反应也表明不可再加量。主要用治风热郁肺咽痛、咳嗽、音哑，外治鼻衄、创伤出血。\n【药理研究】兴奋中枢；镇痛；镇咳祛痰；健胃；抑菌。提取物能缩短小鼠巴比妥睡眠时间和明显降低最大电惊厥阈值，提高中枢神经系统的兴奋性；士的宁使再障患者骨髓增生活跃，促进骨髓造血。\n【化学成分】主含多种毒性生物碱：士的宁、马钱子碱、马钱子碱Ⅳ-氧化物、异马钱子碱、番木鳖次碱、伪士的宁、伪马钱子碱、Ⅳ-甲基-断-伪马钱子碱等。\n【使用禁忌】体质虚弱者及孕妇禁用，不宜多服久服及生用，运动员慎用，有毒成分能经皮肤吸收，外用不宜大面积涂敷。高血压、心脏病及肝、肾功能不全者，亦应禁服或慎服。据报道，麝香、延胡索可增强马钱子的毒性，故不宜同用。本品有大毒，过量易致中毒，初期表现为头痛头昏，烦躁不安，继则颈项强硬，全身发紧，甚至角弓反张，两手握拳，牙关紧闭，面呈痉笑；严重者昏迷，呼吸急促，瞳孔散大，心律不齐，可因循环衰竭而死亡。\n【配伍药方】①治喉痹作痛：马钱子、青木香、山豆根等分。为末吹。(《医方摘要》)\n②治热牙痛不可忍：马钱子半个，井花水磨一小盏，含漱，热即吐去，水完则痛止。(《握灵本草》)\n③治半身不遂：番木鳖(马钱子)，用香油炸，待浮起，取出乘热去皮为末，每服0.9克，黄酒下，汗出即愈。(《良朋汇集》三里抽筋散)\n④治慢性中耳炎：马钱子1粒，打碎。放入碗中，加入茶油两许，放在文火上炖数十沸即成。用时将耳中浓液揩拭干净，然后用药棉蘸马钱子油塞入耳中，早、晚各换药1次。[《浙江中医杂志》，1987，(11)：499]" },

  {
    "id": 6,
    "price": 17.5,
    "name": "土鳖虫",
    "key": "土鳖虫",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/e0c18156-2bf2-44f3-b0e9-d01ce875327c.jpg",
    "cat": 10,
    "brief": "土元中药材500g中药正品土鳖虫土元虫土元干地鳖虫中草药土鳖虫粉",
    "alias": "【中药名】\n土鳖虫 tubiechong\n【别名】\n地鳖虫、土元、地乌龟、蟅虫。\n【英文名】\nEupolyphaga、Steleophaga。",
    "explain": "【药用部位】鳖蠊科昆虫地鳖Eupolyphaga sinensis Walker或冀地鳖Steleophagphancyi (Boleny)的雌虫全体。\n【动物形态】地鳖：雌雄异形。雌虫无翅，长约3厘米，体上下扁平，黑色带光泽。头小，向腹面弯曲。口器咀嚼式，大颚坚硬。复眼发达，肾形；单眼2个。触角丝状，长而多节。前胸背板盾状，前狭后阔，盖于头上。雄虫前胸呈波状纹，有缺刻，具翅2对。 冀地鳖：雌虫体宽卵圆形，较地鳖宽。虫体表面暗黑色无光泽。前胸背板前缘及身体周围具红褐色或黄褐色边缘。体背面有密集的小颗粒状突起，无翅。雄虫有翅，体灰黑色，除前胸背板前缘处有明显的淡色宽边外，身体其他部分无细碎斑纹。\n【产地分布】地鳖生活于地下或沙土间，多见于粮仓底下或油坊阴湿处。全国大部分地区均有分布。冀地鳖多生活于厨房、灶脚及阴湿处。分布于河北、河南、陕西、甘肃、青海及湖南等地。\n【采收加工】5～8月采收。捕捉后，置沸水中烫死，晒干或烘干。\n【药材性状】地鳖：扁平卵形，长1.3～3厘米，宽1.2～2.4厘米。前端较窄，后端宽，背部紫褐色，具光泽，无翅。前胸背板较发达，盖住头部。腹背板9节，呈覆瓦状排列。腹面红棕色，头较小，有1对丝状触角，常脱落；胸部有3对足。腹部有横环节。气腥，味微咸。冀地鳖：长椭圆形。背部黑棕色，边缘具淡黄褐色斑块及黑色小点。\n【性味归经】性寒，味咸，有小毒。归肝经。\n【功效与作用】破瘀血，续筋骨。属活血化瘀药下属分类的活血疗伤药。\n【临床应用】常用量3～9克，煎服，用治筋骨折伤、瘀血经闭、癥瘕痞块。\n【药理研究】改善心脑血管功能，具有显著的调脂和对白血病细胞有抑制等作用。动物实验表明，本品水提物有抗凝血作用。还有抗缺氧、抗突变、降低总胆固醇和提高高密度脂蛋白/胆固醇比值的作用。\n【化学成分】含蛋白质、挥发油、脂肪酸、氨基酸、甾醇及多种微量元素。另含各种脂肪醛和芳香醛及二氯苯和二甲基二硫醚等其他中药少见的成分。\n【使用禁忌】年老体弱及月经经期者慎服，孕妇禁用。\n【配伍药方】①治血鼓，腹皮上有青筋：桃仁24克，大黄1.5克，鳖虫三个，甘遂1.5克(为末冲服)。水煎服。与膈下逐瘀汤轮流服之。(《医林改错》下瘀血汤)\n②治折伤，接骨：土鳖焙存性，为末，每服6～9克。(《医方摘要》)\n③治小儿脐赤肿或脓血清水出者：干鳖火煅为灰，研末，敷之。(《小儿卫生总微论方》)\n④治瘘疮肿：干地鳖末、麝香各研少许。上二味，研匀。干掺或贴，随干湿治之。(《圣济总录》)" },

  {
    "id": 7,
    "price": 17.5,
    "name": "雪上一枝蒿",
    "key": "雪上一枝蒿",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/f05c81e5-4b28-4ea3-80a7-0baa338d7bb7.jpg",
    "cat": 10,
    "brief": "中药材 云南一枝蒿 500克 一只蒿 一支蒿",
    "alias": "【中药名】\n雪上一枝蒿 xue shang yi zhi hao\n【别名】\n三转半、一支蒿、铁棒锤、铁牛七。\n【英文名】\nRadix Aconiti Brachypodi",
    "explain": "【药用部位】来源于毛茛科植物短柄乌头 Aconitum brachypodum Diels、铁棒锤A.pendulum Busch、展毛短柄鸟头 A. brachypodum Diels var. laxiflorum Fletcher et Lauener、宣威乌头 A.nagarum Stapf var. lasiandrym W.T.Wang、曲毛短柄乌头 A. brachypodum Diels var. crispulum W.T.Wang及伏毛铁棒锤A. flavum Hand.-mazz的块根。\n【植物形态】铁棒锤：多年生草本，块根长圆柱形或长圆锥形。茎直立，下部无毛，上部密被短柔毛。叶互生，茎下部叶果期枯落，茎生叶密生于中部以上，有短柄或近无柄，叶片3深裂，裂片再2～3回羽状深裂，小裂片线形至披针状线形，两面均无毛。总状花序顶生；花序轴密生伸展的黄色短柔毛；花蓝紫色，盔瓣船状镰形，淡黄绿色，稀紫色或带紫色。侧瓣宽倒卵形，下片斜长圆形，外面被短柔毛；蜜叶2，无毛，有长爪，距短小；花丝下部被疏柔毛；心皮5，密被开展的长柔毛。花期8～9月，果期9～10月。\n【产地分布】生于高山山坡草丛或林边。主要产于陕西、四川、云南等地。\n【采收加工】秋末冬初采挖，除去须根及泥沙，晒干。\n【药材性状】呈圆锥形至纺锤状圆柱形，顶端有茎残基或根痕，长2.5厘米，直径0.5～1.5厘米。表面暗棕色或黑棕色，多数平滑或稍有纵皱纹及侧根痕。质硬，断面白色，有粉性，少数为角质样，黄色。气微，味麻舌。\n【性味归经】性温，味苦、辛。有大毒。归肝经、肾经。\n【功效与作用】祛风除湿、活血镇痛。属活血化瘀药下属分类的活血疗伤药。\n【临床应用】用量25～50毫克，极量一次70毫克，煎服或入丸散，日服1次。用治风湿疼痛、跌扑损伤，肢体疼痛，牙痛，疮痈肿毒，癌性疼痛。\n【药理研究】1.镇痛及抗炎作用：从短柄乌头中提得的总生物碱有镇痛与抗炎作用；本品的水煮品、甘草制品、油制品镇痛效果较好，而毒性亦大大降低。宣威乌头的作用及毒性均集中于所含生物碱部分，将本品甲苯提取物的生物碱分为pH5提取部分、pH6.5提取部分（含新乌宁碱及14-乙酰新乌宁碱）及pH8提取部分（含较多准噶尔乌头碱），实验表明此三部分于小鼠扭体法及热板法均有显著的镇痛作用；对于醋酸所致小鼠腹腔蛋白渗出，三部分生物碱灌服均有抑制作用。pH6.5部分生物碱还能明显抑制牛血清清蛋白所致小鼠迟发性超敏反应。2.抗肿瘤作用：宣威乌头生药粉及甲苯提取物中的非生物碱部分，对于小鼠肉瘤S₁₈₀及Lewis肺癌有弱的抑制作用。另外，动物实验表明，注射液具有镇痛作用，临床上用注射液局部或穴位注射治疗腰肌劳损、坐骨神经痛等有一定疗效，泡酒外擦对跌扑损伤或风湿关节疼痛有效。\n【化学成分】雪上一枝蒿含雪乌碱甲、雪乌碱乙、雪乌碱丙、雪乌碱丁等生物碱。\n【使用禁忌】本品剧毒，多外用，应在医生指导下服用。孕妇、心脏病、溃疡病患者及小儿禁服。\n【配伍药方】①治内伤出血，跌打损伤：每次用雪上一枝蒿米粒大，开水或酒送服。(《云南中草药》)\n②用于麻醉止痛：雪上一枝蒿配草乌、生南星各适量。共捣绒，用75%乙醇浸泡1小时后外搽患处，作局麻用。忌内服。(《云南中药志》)\n③治风湿关节痛，神经性皮炎，无名肿毒，骨折，跌打扭伤：每次用雪上一枝蒿9克，配伍泡酒。外擦患处。(《云南中草药》)\n④治外伤出血：雪上一枝蒿1.5克，雪头开花（岩白菜）30克。共研末外敷。(《云南中药志》)" },

  {
    "id": 8,
    "price": 17.5,
    "name": "八角枫",
    "key": "八角枫",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/fef80993-51fe-4c16-b3d3-cfca0cd40cd6.jpg",
    "cat": 10,
    "brief": "中药材 八角枫根 白龙须 白金条 白筋条 500g克 包邮",
    "alias": "【中药名】\n八角枫 bajiaofeng\n【别名】\n白金条、白龙须、八角梧桐、华瓜木、白筋条。\n【英文名】\nRadix Alangii",
    "explain": "【药用部位】八角枫科植物八角枫Alangium chinense (Lour.)Harms。的侧根或细须根。\n【植物形态】落叶灌木或乔木；树皮淡灰色，平滑；枝条水平状展开。单叶互生，圆形、卵形或椭圆形，顶端渐尖，基部两侧不对称，阔楔形、截形、稀近心形，全缘或有2～3裂，裂片大小不一，背面脉分叉处常有丛毛，主脉4～6，叶柄红色。二歧聚伞花序腋生，具小花8～30朵，花白色，后变乳黄色，花丝基部及花柱疏生粗短毛。核果卵圆形，熟时黑色。花期6～7月，果期9～10月。\n【产地分布】生于较阴湿的山谷、山坡的杂木林中。分布于长江流域及其以南各地。\n【采收加工】夏秋两季采挖，除去泥沙，晒干。\n【药材性状】侧根：圆柱形，略波状弯曲，长短不一，有分枝，可见须根痕；表面灰黄色至棕黄色，栓皮显纵裂纹或剥落；质坚脆，断面不平坦，纤维性，黄白色。须根：着生于侧根中下部，纤长，略弯曲，有分枝，表面黄棕色，具细纵纹，有的外皮纵裂，质硬而脆，断面黄白色，粉性。气微，味淡。\n【性味归经】味辛、苦，性温，有毒。归心经、肝经。\n【功效与作用】祛风除湿、舒筋活络、散瘀止痛。属活血化瘀药下属中的活血止痛药。\n【临床应用】用量须根1.5～3克，侧根3～6克，煎服或泡酒服(一般宜饭后股)，用量由小逐渐加大，切勿过量；外用适量，煎水洗风湿痛处。用治四肢麻木、跌扑损伤。须根(白龙须)毒性较大，中毒轻者头昏、无力，重者可因呼吸抑制而致死。在抢救中首先考虑人工呼吸，其他对症治疗亦需及时。作肌肉松弛剂使用时，更应在有抢救条件的医院进行。\n【药理研究】八角枫根煎剂或生物总碱，无论是静脉注射还是腹腔注射，均有明显的肌松作用，但不影响动物的清醒状态；一般引起肌松作用的剂量能增强离体家兔肠管的节律性收缩，并呈量效关系。小剂量对离体蛙心和兔心灌注时，可使收缩加强；加大剂量收缩减弱，甚至导致房室传递阻滞，但可自行恢复，还具抗菌作用，对心血管系统有抑制作用，增强肠、子宫平滑肌收缩，增强催眠药作用，抗早孕与抗着床，抗炎等，有肾毒性。\n【化学成分】含喜树次碱、消旋毒黎碱、β-香树脂醇己酸酯、三十烷醇、β-谷固醇，根、根皮中含八角枫碱，以须根中含量最多，达0.73%，分得的单体生物碱主要是消旋毒藜碱；还分离出吐根碱、N-甲基吐根酚碱，此外还有强心苷、酚类、氨基酸、有机酸、树脂等。\n【使用禁忌】有毒，使用时需严格掌握剂量，一般宜从小量开始，至病人出现软弱无力、疲倦时即不应再增用量。孕妇忌服，小儿和年老体弱者慎用，肝、肾、肺功能欠佳、心律不齐者忌用。\n【配伍药方】①治虚弱，喘咳：八角枫根3克，炖肉吃。(《贵州草药》)\n②治筋骨疼痛：白龙须1.2克，白牛膝9克。炖猪脚吃。(《曲靖专区中草药》)\n③治小儿惊风：八角枫根1.5克，煎水服。(《贵州草药》)\n④治鼻出血：八角枫6克，水煎服。(《贵州民间方药集》)\n⑤治过敏性皮炎：八角枫根(适量)，煎水外洗。(《云南中草药》)" },

  {
    "id": 9,
    "price": 17.5,
    "name": "独一味",
    "key": "独一味",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/4e5b5195-6ec1-4bf4-b936-f9d15ff45064.jpg",
    "cat": 10,
    "brief": "独一味叶 500克 独一味叶子 干货 中药材独一味叶粉",
    "alias": "【中药名】\n独一味\n【别名】\n野秦艽、巴拉努努(藏)、大巴(藏)、打布巴(藏)。\n【英文名】\nLamiophlomis Herba。",
    "explain": "【药材来源】唇形科植物独一味Lamiophlomis rotata (Benth)Kudo的干燥地上部分。系藏族习用药材。\n【植物形态】独一味为多年生矮小草本，高2.5～10厘米。根及根茎直立，较粗，有皱纹。无茎。单叶基生，4(～6)枚，菱状圆形或肾形，质厚，边缘具圆齿，上表面皱，密被白色绒毛，下表面脉上有稀疏柔毛，基部浅心形，或宽楔形下沿，边缘圆锯齿，顶端钝圆或急尖，近基出侧脉3对。花序长3.5～7厘米，花序轴密被毛，苞片披针形，倒披针形或线形，长1~4厘米，上部苞片渐小，基部下沿，边缘全缘，顶端渐尖，具睫毛，小苞片长约8毫米，花萼干后紫棕色，脉上有毛，萼齿宽三角形，顶端具长约2毫米刺尖。花冠紫色，红紫色或约棕色。花期6～7月，果期8～9月。\n【产地分布】独一味生于海拔2700～4900米的高同强度风化的碎石滩中或高山草地。主产于甘肃、青海、四川、西藏、云南。\n【采收加工】秋季花果期采割，洗净，晒干。\n【药材性状】独一味药材的叶莲座状交互对生，卷缩，展平后呈扇形或三角状卵形，长4～12厘米，宽5～15厘米；先端钝或圆形，基部浅心形或下延成宽楔形，边缘具圆齿；上表面绿褐色，下表面灰绿色；脉扇形，小脉网状，突起；叶柄扁平而宽。果序略呈塔形或短圆锥状，长3～6厘米；宿萼棕色，管状钟形，具5棱线，萼齿5，先端具长刺尖。小坚果倒卵状三棱形。气微，味微涩、苦。\n【性味归经】性平，味甘、苦。归肝经。\n【功效与作用】活血止血，祛风止痛。属活血化瘀药下属分类的活血止痛药。\n【临床应用】用量2～3克，煎服；或浸酒；或作散剂。用治跌打损伤，外伤出血，风湿痹痛，黄水病。\n【药理研究】1.独一味皂甙500毫克/(千克·天)、独一味醇提物以300毫克/(千克·天)或150毫克/千克给荷瘤小鼠腹腔注射，连续10天，对移植性肿瘤EC有显着抑制作用，皂甙对Hep实体瘤析也有显着抑制作用。2.独一味浸膏10%以0.28毫升/10克、0.14毫升/10克给小鼠灌胃，有明显的镇痛作用，持续时间约2小时。3.小鼠尾静脉止血实验中，10%、5%浸膏各0.14毫升/10克给小鼠薄胃，有显着止血作用。4.独一味浸膏在滤纸片法中对乙型溶血性链球菌和产气杆菌有抑菌作用。\n【化学成分】叶含木犀草素，木犀草素-7-O-葡萄糖甙，槲皮素，槲皮素-3-O-阿拉伯糖甙，槲皮素，槲皮素-3-O-阿拉伯糖甙，芹菜素-7-O-新陈皮甙。地上部分含山栀甙甲酯，8-O-乙酰基山栀甙甲酯，胡麻属甙。\n【使用禁忌】无瘀滞及孕妇勿服。" },

  {
    "id": 10,
    "price": 17.5,
    "name": "九龙藤",
    "key": "九龙藤",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/d21b6962-5f55-4950-b5b5-2861b68a19b0.jpg",
    "cat": 10,
    "brief": "中药材 野生九龙藤 过岗龙 龙须藤 九龙根 入骨丹 过江龙500g包邮",
    "alias": "【中药名】\n九龙藤 jiulongteng\n【别名】\n过岗龙、龙须藤、九龙根、燕子尾、黄开口。\n【英文名】\nRadix seu Caulis Bauhiniae Championii；Champion Bauhinia Stem。",
    "explain": "【药用部位】为豆科植物龙须藤Bauhinia championii (Benth.) Benth.的干燥根或茎。\n【植物形态】木质藤本。有卷须，嫩枝和花序被紧贴的小柔毛。叶互生，叶片纸质，长3～10厘米，宽2.5～6.5厘米，先端锐渐尖，微凹或2裂以至不裂，基部截形，微凹或心形，上面无毛，下面被紧贴的短柔毛，渐变无毛或近无毛；基出脉5～7条。花两性，总状花序狭长，腋生，有时与叶对生或数个聚生于枝顶而成复总状花序；苞片与小苞片小，早落；花梗纤细；花托漏斗形；萼杯状，裂片5，披针形；花瓣5，白色，具瓣柄，瓣片匙形，外面中部疏被丝毛；能育雄蕊3，退化雄蕊2；子房具短柄，仅沿两缝线被毛。荚果倒卵状长圆形，扁平。种子2～5颗，圆形，扁平。\n【产地分布】生于沟边、山谷、河边、疏林下或灌木林中。分布广东、广西、福建、台湾、浙江、湖北、湖南、江西、贵州等地。\n【采收加工】全年均可采，砍取茎干或挖出根部，除去杂质、泥土，切片，鲜用或晒干。\n【药材性状】本品呈圆柱形，稍扭曲。表面粗糙，灰棕色或灰褐色，具不规则皱沟纹。质坚实，难折断，切断面皮部棕红色，木部浅棕色，有2-4圈深棕红色环纹，习称“鸡眼圈纹”，针孔状导管细而密。气无，味微涩。以藤茎粗、断面“鸡眼圈纹”明显者为佳。\n【性味归经】性温，味甘、微苦。归肝经、大肠经。\n【功效与作用】祛风除湿，行气活血。属活血化瘀药下属分类的活血止痛药。\n【临床应用】内服：煎汤，用量9～15克，鲜品用量加倍；或浸酒。主治风湿痹痛，跌打损伤，偏瘫，胃脘痛，疳积，痢疾。\n【药理研究】九龙藤对金黄色葡萄球菌、痢疾杆菌、伤寒杆菌均有抑制作用，还有促凝作用。\n【化学成分】九龙藤根含龙藤苷(bauhinin)、没食子酸(gallic acid)等。\n【使用禁忌】用量不可超过30克，过量服用有恶心反应。\n【配伍药方】①治胃、十二指肠溃疡：九龙藤一至二两，两面针二至三钱。水煎，每日一剂，分二到三次服。(《中草药新医疗法处方集》)\n②风湿性关节痛、腰腿痛：龙须藤鲜根60～90克，酒500毫升浸，每次服1杯，每日两次；或干根30克水煎服。(福建晋江《中草药手册》)\n③治跌打损伤：龙须藤干根、茎15～30克，水煎调酒服。（《福建中草药》）\n④治偏瘫：(龙须藤)根30克，黄酒、猪肉共煮熟，吃猪肉和汤。（《浙江民间常用草药》）" },

  {
    "id": 11,
    "price": 17.5,
    "name": "苦石莲",
    "key": "苦石莲",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/5a4daff4-a9f6-449c-aa70-9ffa4c569dc0.jpg",
    "cat": 10,
    "brief": "苦石莲 中药材 正宗石连子 苦石莲子 双肾子 石莲子 500g克包邮",
    "alias": "【中药名】\n苦石莲 kushilian\n【别名】\n石莲子、土石莲子、青蛇子、老鸦枕头、猫儿核。\n【英文名】\nSemen Caesalpiniae Minacis。",
    "explain": "【药用部位】来源于豆科植物喙荚云实Caesalpinia minax Hance.的种子。\n【植物形态】有刺藤本。全株被短柔毛。2回双数羽状复叶，羽片5～8对，托叶锥状；小叶12～24，近无柄，矩形或倒卵形。圆锥花序顶生，花序轴有刺，被柔毛；苞片大，椭圆形、倒披针形，两面有茸毛，花萼管阔倒卵形。花瓣5，红紫色，倒卵形，上面1枚花瓣较短；雄蕊10枚，不等长，花丝分离，下部密被柔毛，花药“丁”字形着生；子房密生细刺，花柱比雄蕊稍长，无毛。荚果椭圆状矩形，长8～14厘米，宽4.5～5厘米；密被棕色针状刺，先端圆形而有尖喙，内有种子7粒。花期3～4月，果期5～9月。\n【产地分布】生于山沟中空旷的溪旁、路边或灌木丛中。分布于云南、广西、四川等地。\n【采收加工】8～9月采成熟果实，取出种子，晒干。\n【药材性状】椭圆形或长圆形，两端钝圆，长1.2～2.2厘米，直径0.7～1.2厘米，外面黑褐色或暗棕色，光滑，有的具细密的环状横纹或横裂纹，基部有珠柄残基，旁有小圆形的合点。质坚硬，不易破开。种皮厚约1毫米，内表面灰黄色，平滑而有光泽；除去种皮，可见2片棕色肥厚的子叶，富油质，子叶中间有浅棕色的胚芽及胚根。气微，味极苦。\n【性味归经】性苦，味寒。归心经、脾经、肾经。\n【功效与作用】散瘀、止痛、清热、去湿。属活血化瘀药下属分类的活血止痛药。\n【临床应用】用量6～9克，内服煎汤；外用适量，煎水洗或捣敷。用于治疗哕逆、痢疾、淋浊、尿血、跌打损伤。\n【药理研究】抗病毒作用：苦石莲中的caesalmin C等体外有抗Para3病毒活性。\n【化学成分】种子含呋喃二萜型内酯：caesalmic A、B。\n【使用禁忌】虚寒无火者忌用。\n【配伍药方】①治疮肿，毒蛇咬伤：苦石莲子适量研末，醋调敷患处。（《四川中药志》1979年版）\n②治水肿实证：苦石莲子3克（研碎），玉米须30克，苡仁30克，接骨木花6克。水煎服。（《四川中药志》1979年版）" },

  {
    "id": 12,
    "price": 17.5,
    "name": "斑蝥",
    "key": "斑蝥",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/c882aeec-765e-4ec1-a452-54eecc4a98e4.jpg",
    "cat": 10,
    "brief": "斑蝥  100g",
    "alias": "【中药名】\n斑蝥 banmao【别名】\n羊米虫、花斑毛、放屁虫、花壳虫、花罗虫。\n【英文名】\nMylabris。",
    "explain": "【药用部位】芫青科昆虫南方大斑蝥Mylabris phalerata Pallas或黄黑小斑蝥M.cichorii Linnaeus的全体。\n【动物形态】南方大斑蝥：体长1.5～3.0厘米，黑色，被黑绒毛。头部具粗密刻点，复眼大，略呈肾形。触角l对。前胸长略大于宽。鞘翅端部阔于基部，黑色，翅基部有2个大黄斑；翅中央前后各有一黄色波纹状横带。足有黑色长绒毛，前足、中足跗节均为5节，后足跗节为4节。腹面亦具黑色长绒毛。黄黑小斑蝥：与南方大斑蝥相似，体较小。\n【产地分布】多群集栖息和取食，多危害大豆花生、茄子及棉花的芽、叶、花等。我国大部分地区均有分布。\n【采收加工】7～8月于清晨露水未干时捕捉，捕捉时宜戴口罩及手套。捕得后，置布袋中，用沸水烫死，取出晒干。\n【药材性状】南方大斑蝥：呈长椭圆形，长1.5～2.5厘米。头部及口器向下垂，有较大的复眼及触角各1对，触角多脱落。背部鞘翅1对，黑色，有3条黄色或棕黄色横纹；鞘翅下有棕褐色薄膜状内翅2片。胸腹部乌黑色，胸部有足3对。有特殊臭气。黄黑小斑蝥：与南方大斑蝥相似，体较小，长1～1.5厘米。\n【性味归经】性热，味辛，有大毒。归肝经、胃经、肾经。\n【功效与作用】破血消癥、攻毒蚀疮、引赤发泡。属活血化瘀药下属分类的破血消癥药。\n【临床应用】用量0.03～0.06克，炮制后多人丸、散用。外用适量，研末或浸酒、醋涂患处。用治癥瘕肿块、积年顽癣、瘰疬、赘疣、痈疽不溃。\n【药理研究】具有抗肿瘤作用;由于刺激骨髓细胞DNA合成，能升高白细胞，还有增强机体免疫功能;具有明显的抗炎作用;有抗病毒、抗菌的作用;有促雌激素样作用，尚具有一定的雌激素样作用;还有局部刺激等作用。\n【化学成分】斑蝥主要含斑蝥素、脂肪及树脂。\n【使用禁忌】本品有大毒，内服慎用;凡体质虚弱者，心、肾功能不全者，消化道溃疡者，以及孕妇均禁服。\n【配伍药方】①治瘰疬结核：斑蝥1枚，黑豆7枚(生芽者)。同研为丸，如绿豆大。每服五丸，茶清下。小儿一丸。(《圣济总录》大效丸)\n②治疣痣黑子：斑蝥3个，以糯米15克炒黄，去米。入蒜1个，捣烂点之。(《纲目》)\n③治急心痛：斑蝥7个，胡椒49粒。同炒至斑蝥焦碎，去斑蝥不用，取净胡椒为末。作一服，热酒调下，不拘时候。(《卫生易简方》)\n④治面神经麻痹：斑蝥一个。研细。水调贴颊部，向左歪贴右侧，向右歪贴左侧，起泡后即取去药。(《山东中草药手册》)\n⑤治疟疾：斑蝥七个，麻黄、雄精各3.6克，朱砂1.5克。共研细末。每日用0.3～0.9克，调放膏药上，贴颈部第2骨节处。[《浙江中医杂志》1959，(7)：39]\n⑥治腰腿痛：斑蝥烘干，研粉。取火柴头大，压体表最痛点上，以胶布固定，5～6小时后起泡如蚕豆大，24小时后去药，挑破出水，涂以龙胆紫，不愈再敷。(《全国中草药汇编》)\n⑦治偏正头风：斑蝥1个，去头、翅、足，隔纸研细为末，筛去衣壳。将少许贴在膏药上，头左痛，贴右太阳穴;头右痛，贴左太阳穴，足半日取下。(《良方集腋》)" },

  {
    "id": 13,
    "price": 17.5,
    "name": "干漆",
    "key": "干漆",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/dbd78403-8bba-4d12-9ec5-9ffba66c9d3a.jpg",
    "cat": 10,
    "brief": "干漆50g-1000克漆渣 漆底 漆脚 非炒干漆中药材",
    "alias": "【中药名】\n干漆 ganqi\n【别名】\n干漆、山漆、漆渣、黑漆。\n【英文名】\nDried Lacquer",
    "explain": "【药用部位】漆树科植物漆树Toxicodendron verniciflnum (Stokes)F.A.Barkl.的树脂经加工后的干燥品。\n【植物形态】落叶乔木。嫩枝和冬芽具棕黄色毛。单数羽状复叶，互生；小叶7～13，卵形或卵状椭圆形，全缘，上面疏生柔毛或近光滑，下面有黄柔毛，侧脉18～25对显著；叶柄短，有毛。圆锥花序侧生；花细小，黄色；雌雄异株，或单性花与两性花共存；萼5裂；花瓣5；雄蕊5，在雌花中不完全；子房无柄，上位，1室，花柱 3。核果偏斜而扁，宽大于高，淡棕黄色，光滑。花期5～6月，果熟期9～10月。\n【产地分布】生于海拔800～2800(～3800)米的向阳山坡林内，亦有栽培。产于华东、华南等地。\n【采收加工】割伤漆树树皮，收集自行流出的树脂为生漆，干固后凝成的团块为干漆。另外一般收集盛漆器具底留下的漆渣，干燥。\n【药材性状】不规则块状，黑褐色或棕褐色，表面粗糙，有蜂窝状细小孔洞或呈颗粒状。质坚硬，不易折断，断面不平坦。具特殊臭气。\n【性味归经】性温，味辛。归肝经、脾经。\n【功效与作用】破瘀血、消积、杀虫。属活血化瘀药下分类的活血调经药。\n【临床应用】用量2.5～4.5克，入丸、散，2～4.5克。外用：烧烟熏。内服宜炒或煅后用。用治妇女闭经、瘀血癥瘕、虫积腹痛等。\n【药理研究】有解痉作用，对心血管有影响，有促凝血作用。\n【化学成分】干漆是生漆中的漆酚在虫漆酶(Laccase)的作用下在空气中氧化生成的黑色树脂物质。\n【使用禁忌】本品破血通经之力较强，故孕妇及体虚、无淤者均忌用。畏蟹。内服过量可导致呕心呕吐，口腔发炎、溃疡，腹泻，严重者可发生中毒性肾病。也有出现肛门、会阴部皮肤发生丘疹，瘙痒剧烈者。\n【配伍药方】①治产后恶露不下尽，腹内痛：干漆(捣碎，炒令烟尽)30克，没药30克。上件药捣细罗为散，每服食前以热酒调下3克。(《圣惠方》)\n②治九种心痛，及腹胁积聚滞气：干漆(炒烟出)60克。上一味。捣罗为末，醋面糊丸，如梧桐子大。每服五丸至七丸，热酒下，醋汤亦得下，不拘时候。(《圣济总录》干漆丸)\n③治喉痹欲绝不可针药者：干漆烧烟，以筒吸之。(《圣济总录》)" },

  {
    "id": 14,
    "price": 17.5,
    "name": "虻虫",
    "key": "虻虫",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/b52b480b-6fa6-4c3e-90bf-23f78f710ec8.jpg",
    "cat": 10,
    "brief": "健康药业虻虫中药材牛苍蝇牛虻牛牤虫 牛氓虫 免费打牛虻虫粉50克",
    "alias": "【中药名】\n虻虫 mengchong\n【别名】\n蜚虻、牛虻、绿头猛钻、牛苍蝇、瞎眼蠓。\n【英文名】\nArylotus Seu Tabanus。",
    "explain": "【药用部位】为虻科虻属动物华虻Tabanux manda-rinus Schiner及其同届多种昆虫和黄虻属双斑黄虻(复带虻)Atylotus bivittateinus Takahasi的雌性全体。\n【植物形态】1.华虻：雌虫体长16～18毫米，灰黑色。前额黄灰色，基胛近卵圆形，黄棕色。触角第1环节基部棕红色，有明显锐角突起。翅透明，翅脉棕色。胸部背板灰色.有5条明显黑灰纵带。腹部圆钝形，有明显的白斑。雄虫与雌虫相似，较雌虫稍大，仅腹部呈圆锥形。2.双斑黄虻：雌虫体长13～17毫米，黄绿色。眼大型，中部有一条细窄的黑色横带。前额黄色或略带淡灰色。触角橙黄色，第3节有明显钝角突。翅透明，翅脉黄色。腹部暗黄灰色，多金黄色毛及少数黑毛。背板两侧具大块黄色斑，腹板灰色。雄虫与雌虫相似，但体较小。\n【产地分布】1.华虻：雌虫吸食牛、马等动物血液，雄虫不吸血，吸食植物计液。常居于草丛及树林中，性喜阳光，多在白昼活动。全国各地均有分布。2.双斑黄虻：成虫白日活动，喜强烈阳光。雌虫吸食牲畜的血液。广泛分布于东北、华北及华东各地。\n【采收加工】夏、秋季捕捉，捕后用沸水烫死，洗净，晒干。\n【药材性状】华虻干燥的虫体呈长椭圆形，长1.3～1.7厘米.宽5～10毫米。头部呈黑褐色.复眼大多已经脱落；胸部黑褐色，背面呈壳状而光亮，翅长超过尾部，胸部下面突出，灰色，有5条明显黑灰纵带，具足3对，多碎断。腹部棕黄色，有明显的白斑，有6个体节。质松而脆，气臭，味苦、咸。双斑黄虻呈黄绿色，眼大型，中央有1条细横的黑色带；翅透明，翅脉黄色；腹部暗灰黄色，有较多的金黄色毛茸及少数黑色毛茸。\n【性味归经】性凉，味苦。归肝经。\n【功效与作用】逐瘀消癥，破血通经。属活血化瘀药下分类的破血消癥药。\n【临床应用】内服：煎汤，1.5～3克；研末：0.3～0.6克；或入丸剂。外用：适量，研末敷或调茶抹。主治血瘀经闭，产后恶露不尽，干血痨，少腹蓄血，癥瘕积块，跌打伤痛，痈肿，喉痹。\n【药理研究】1.抗凝作用，虻虫在体外有较弱的抗凝血酶作用，体外和体内均有活化纤溶系统的作用。2.对小肠功能的影响，虻虫水煎剂对小鼠离体回肠运动有明显抑制作用。3.抗炎作用。4.镇痛作用。5.其他作用，虻虫对家兔离体子宫有兴奋作用，对内毒素所致肝出血性坏死病灶的形成有显着的抑制作用，虻虫醇提取物有明显溶血作用。\n【化学成分】含蛋白质、氨基酸、胆固醇及钙、镁、磷、铁、钴、铜、锰、锶、锌铝等24种无机元素。\n【使用禁忌】气血虚者、孕妇及月经期均禁服。\n【配伍药方】①治月经不行，或产后恶露脐腹作痛：熟地黄四两，虻虫(去头、翅，炒)、水蛭(糯米同炒黄，去糯米)、桃仁(去皮、尖)各五十枚。上为末，蜜丸桐子大。每服五、七丸：空心、温酒下。(《妇人良方》地黄通经丸)\n②治太阳病，身黄，脉沉结，少腹鞕，小便自利，其人如狂者：水蛭(熬)、虻虫(去翅、足)各三十个，桃仁二十个(去皮、尖)，大黄三两(酒洗)。上四味，以水五升，煮取三升，去滓。温服一升，不下，更服。(《伤寒论》抵当汤)" },

  {
    "id": 15,
    "price": 17.5,
    "name": "三棱",
    "key": "三棱",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/1dc3fc54-0e1c-4e8d-9d47-23ea419316da.jpg",
    "cat": 10,
    "brief": "健康药业虻虫中药材牛苍蝇牛虻牛牤虫 牛氓虫 免费打牛虻虫粉50克",
    "alias": "【中药名】\n三棱 sanleng\n【别名】\n黑三棱、荆三棱、红蒲根、光三棱。\n【英文名】\nSparganii Rhizoma。",
    "explain": "【药用部位】黑三棱科植物黑三棱Sparganium stoloniferum Buch. -Ham.的块茎。\n【植物形态】多年生草本，根茎横走，下生粗而短的圆锥形块茎。茎单一，直立，圆柱形，光滑。叶丛生，排成2列，质地松软稍呈海绵质，长条形，先端渐尖，背面具纵棱，基部抱茎。花茎通常单一，上端分枝；花单性，雌雄同株，花序头状，总苞片叶状。雄花序生于花枝上部，雄花具花被片3～4，倒披针形，顶端截平，雄蕊3枚，花丝白色丝状，花药黄色。雌花序位于花枝下部，雌花花被3～4，雌蕊1枚，子房纺锤形，花柱长，柱头狭披针形，被密毛，有光泽。聚花果，核果无柄，有棱角。\n【产地分布】生于水湿低洼处、水沟及沼泽等地。分布于黑龙江、吉林、辽宁等地。\n【采收加工】春、秋季采挖，割去枯残茎叶，挖取块茎，洗净，削去外皮或晒至八成干时，放入竹笼里，除去须根和粗皮，晒或烘至全干。醋三棱：取三棱片，加醋拌匀，稍闷，置锅内炒至黄色，取出，晒干。每100千克药材用醋20～30千克。\n【药材性状】商品分光三棱和毛三棱，前者已用刀削去皮须。块茎呈圆锥形或倒卵圆形，略扁，上圆下尖，下端稍弯曲，长2～6厘米，直径2～4厘米。表面黄白色或灰黄色，有刀削痕，顶端有茎痕，须根痕小点状密集，略呈横向环状排列。体重，质坚实。无臭，味淡，嚼之有麻辣感。毛三棱已用火烧去长须。多呈圆锥形，黑棕色，下端略呈鹰嘴状，有残存的不定根，点状不定根痕散在，两侧的根痕较粗，纵列成翼状。节和缩短的节间明显，其余与光三棱相同。\n【性味归经】性平，味辛、苦。归肝经、脾经。\n【功效与作用】破血行气、消积止痛。属活血化瘀药下分类的破血消癥药。\n【临床应用】用量4.5～9克，煎汤内服；或入丸散。治疗癥瘕痞块、瘀血经闭、食积胀痛、心腹痛、痛经、跌打伤痛。\n【药理研究】三棱水提物可使凝血酶对纤维蛋白的凝聚时间显著延长；有抗体外血栓形成的作用；水煎剂对离体兔子宫平滑肌呈兴奋作用；抗肿瘤；对心脏有降低心肌细胞耗氧量、减少冠脉阻力、增加冠脉流量、改善心肌缺氧耐受力等作用。有一定毒性。\n【化学成分】三棱块茎含挥发油，主要成分为苯乙醇、对苯二酚、十六酸，还有去氢木香内酯、琥珀酸、三棱酸、刺芒柄花素、豆固醇、&beta；-谷固醇、胡萝卜苷。\n【使用禁忌】气虚体弱、血枯经闭、月经过多及孕妇禁服。\n【配伍药方】①治肝脾肿大：三棱9克，红花9克，莪术6克，赤芍12克，香附12克。水煎服。(《全国中草药汇编》)\n②治慢性肝炎或迁延性肝炎：三棱、莪术、当归各7克，赤芍12克，丹参24克，白茅根30克，青皮9克。水煎服。(《新疆中草药手册》)\n③治癥瘕痃癖，积聚不散，坚满痞膈，食不下，腹胀：三棱60克，白术30克，蓬莪术15克，当归15克(焙)，槟榔、木香各9克。上为末。每服9克，食后沸汤点服，每日三次。(《宣明论方》三棱汤)\n④治痃癖气不消：三棱30克(微煨，锉)，川大黄30克(锉)。上述药，捣罗为末。用醋熬为膏，每日空心以生姜橘皮汤调下二茶匙。(《圣惠方》)\n⑤治小儿阴疝核肿：京三棱面裹煨焦，去面，为末。三岁1.5克，空心盐汤下。人小加减。(《普济方》引自《全婴方》三棱散)" }] },



{
  "id": 5,
  "name": "止血",
  "foods": [
  {
    "id": 1,
    "price": 17.5,
    "name": "莲房",
    "key": "莲房",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/a87f933d-7d4a-4f8a-8745-b1581b64e6e6.jpg",
    "cat": 10,
    "brief": "天然纯新货 莲房 干莲房 中药材 莲蓬壳 莲子壳 连房 莲蓬 500克",
    "alias": "【中药名】\n莲房 lianfang\n【别名】\n莲房、莲蓬壳、莲壳、莲蓬。\n【英文名】\nNelumbinis Receptaculum",
    "explain": "【药用部位】睡莲科植物莲Nelumbo nucifera Gaertn的干燥花托。\n【植物形态】多年生水生草本。根茎横生，肥厚，节间膨大，内有多数纵行通气孔洞，外生须状不定根。节上生叶，露出水面；叶柄着生于叶背中央，粗壮，圆柱形，多刺；叶片圆形，直径25～90厘米，全缘或稍呈波状，上面粉绿色，下面叶脉从中央射出，有1～2次叉状分枝。花单生于花梗顶端，花梗与叶柄等长或稍长，也散生小刺，花直径10～20厘米，芳香，红色、粉红色或白色；花瓣椭圆形或倒卵形，长5～10厘米，宽3～5厘米，雄蕊多数，花药条形，花丝细长，着生于托之一，心皮多数埋藏于膨大的花托内，子房椭圆形，花柱极短。花后结“莲蓬”，倒锥形，直径5～10厘米，有小孔20～30个，每孔内含果实1枚，坚果椭圆形或卵形，长1.5～2.5厘米，果皮革质，坚硬，熟时黑褐色。种子卵形，或椭圆形，长1.2～1.7厘米，种皮红色或白色。花期6～8月，果期8～10月。\n【产地分布】广布于南北各地。\n【采收加工】秋季果实成熟时采收，除去果实，晒干。\n【药材性状】呈倒圆锥状或漏斗状，多撕裂，直径5～8厘米，高4.5～6厘米。表面灰棕色至紫棕色，具细纵纹和皱纹，顶面有多数圆形孔穴，基部有花梗残基。质疏松，破碎面海绵样，棕色。气微，味微涩。\n【性味归经】性温，味苦、涩。归肝经。\n【功效与作用】化瘀止血。属止血药下分类的化瘀止血药。\n【临床应用】 内服：煎汤，用量5～10克。外用：适量，研末掺患处或煎汤熏洗。用于崩漏，尿血，痔疮出血，产后瘀阻，恶露不尽。\n【药理研究】对莲房中的原花青素及其生物、药理活性进行研究：初步证实了莲房原花青素抗氧化、抗肝氧化损伤、抗心肌缺血和降脂等多种功效，发现原花青素是莲房的主要活性成分之一，为莲房原花青素进一步的深入研究和莲资源的综合利用提供了实验基础和理论根据。\n【化学成分】主要含金丝桃甙，槲皮素二葡萄糖甙及小量莲子碱等。此外尚含碱水含碳水化合物，脂肪，蛋白质，胡萝卜素，烟酸，维生素B1、B2、和C，槲皮素。\n【使用禁忌】尚不明确，谨慎用药。\n【配伍药方】①血崩：棕皮(烧灰)、莲壳(烧存性)各半两，香附子三两(炒)。上为末。米饮调下三、四钱，食前。(《儒门事亲》莲壳散)\n②治痔疮：干莲房、荆芥各一两，枳壳、薄荷、朴硝各五钱。为粗末。水三碗，煎二碗，半热熏洗。(《疡科选粹》莲房枳壳汤)\n③治天泡湿疮：莲蓬壳，烧存性，研末，并泥调涂。(《海上方》)\n④治黄水疮：莲房烧成炭，研细末，香油调匀，敷患处，一日二次。(徐州《单方验方新医疗法选编》)\n⑤治漏胎下血：莲房，烧，研，面糊丸，梧子大。每服百丸，汤、酒任下，日二。(《朱氏集验医方》)" },

  {
    "id": 2,
    "price": 17.5,
    "name": "三七",
    "key": "三七",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/ba76b0a8-1cd1-417e-84c0-94da8f00d3d5.jpg",
    "cat": 10,
    "brief": "三七片云南文山20/30/40头特级田七三七粉500g正品三七花泡水礼盒",
    "alias": "【中药名】\n三七 sanqi\n【别名】\n田七、参三七、盘龙七、金不换、山漆。\n【英文名】\nNotoginseng Radix Et Rhizoma",
    "explain": "【药用部位】五加科植物三七Panax notoginseng (Burk.)F.H.Chen.的根及根茎。\n【植物形态】多年生草本。根茎短，斜生；主根粗壮，肉质，倒圆锥形或圆柱形，常有疣状突起的分枝。茎直立，不分枝。掌状复叶，3～4片轮生于茎顶，小叶通常5～7，膜质，长椭圆倒卵形或长圆披针形，基部1对较小，先端长渐尖，基部近圆形，多不对称，叶缘有细密锯齿，齿端具小刚毛。伞形花序单独顶生，花小，多数两性，少杂性。花萼5齿裂；花瓣5，黄绿色，先端尖；雄蕊5枚，花丝线形；花柱上部分离为2。核果浆果状，近肾形，成熟时红色。花期6～8月，果期8～10月。\n【产地分布】野生于山坡丛林下。现多栽培于海拔800～1000米的山脚斜坡或土丘缓坡上，以土壤疏松、富含腐殖质的酸性土壤为宜。分布于广西、四川、云南等地。\n【采收加工】一般种4年收获，秋季花开前采挖者称“春七”，饱满，质佳；11月种子成熟后采挖者称“冬七”，较松泡，质较次。采挖后，除去地上茎及泥沙，剪去芦头、侧根、须根，洗净，晒干。\n【药材性状】类圆锥形或圆柱形。表面灰褐色或灰黄色，有断续的纵皱纹及支根痕。顶端有茎痕，周围有瘤状突起。体重，质坚实，击破后皮部与木部常分离，断面灰绿色、黄绿色或灰白色，皮部有细小棕色斑点，木部微呈放射状纹理。气微，味苦而后微甜。\n【性味归经】性温，味甘、微苦。归肝经、胃经。\n【功效与作用】散瘀止血、消肿定痛。属止血药下属分类的化瘀止血药。\n【临床应用】用量5～10克，煎汤服；外用磨汁涂、研末撒或调敷患处。用治咯血、吐血、衄血、便血、崩漏、外伤出血、胸腹刺痛、跌扑肿痛。\n【药理研究】动物试验表明，人参皂苷Rg类对中枢神经有兴奋作用，而Rb类则有抑制作用，三七总皂苷可抑制血小板凝集，三七提取物有强心、降压、保肝、抗炎、降低血中胆固醇、免疫调节和抗病毒作用。总面言之，对血液及造血系统具有止血、抗血小板聚集及溶栓、溶血、造血等作用；对心血管系统具有抗心律失常、抗动脉粥样硬化、耐缺氧及抗休克、改善脑缺血等作用；对神经系统具有中枢神经抑制、镇痛等作用；可增强免疫功能，保护肝功能，抗肿瘤，延缓衰老，降血糖，抗炎，调节物质代谢，促进生长；毒性较低，长期用药基本无副反应。\n【化学成分】主要含人参皂苷Rg₁、槲皮素、乙酸、丁香烯、人参皂苷Re、亮氨酸、β-谷固醇-D-葡萄糖苷、人参炔三醇、三七皂苷等12种单体皂苷及止血成分田七氨酸。另含挥发油及多种微量元素。\n【使用禁忌】孕妇慎用。\n【配伍药方】①治跌打内伤：三七末15克，与活螃蟹共捣烂，冲热酒温服。(《广西民族药简编》)\n②治慢性前列腺炎：三七粉3克，隔日1次，白开水送下。[《河南中医》1985，(3)：27]\n③治血虚头晕：三七3克，研细末；鸽子一只，去内脏，药粉装肚，蒸吃。(《曲靖专区中草药手册》)\n④治气血虚弱：三七3克，土人参6克。研细末，蒸肉饼吃。(《曲靖专区中草药手册》)\n⑤治痛经：三七末2～3克，经前或经行痛时，温开水送服。[《上海中医药杂志》1984，(3)：21 ]" },

  {
    "id": 3,
    "price": 17.5,
    "name": "一点血",
    "key": "一点血",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/88320243-b999-41d7-94c9-f87b45a227f9.jpg",
    "cat": 10,
    "brief": "正宗通城虎草中草药材 定心草 五虎通城 一点血 血蒌 500克包邮",
    "alias": "【中药名】\n一点血 yidianxue\n【别名】\n红砖草、石鼓子、威氏秋海棠。\n【英文名】\n无。",
    "explain": "【药用部位】本品为秋海棠科秋海棠属植物一点血秋海棠(网脉秋海棠)Begonia uilsonii Cagnep.的根茎。\n【植物形态】多年生草本，高20～30cm。无茎。根茎短而肥厚，横生，稍呈节节状，断面红色，具须根。根出叶1～2片；叶柄长6～11cm，具棕色绒毛；叶片纸质，近菱形或斜卵圆形，长10～15 cm，宽10～12cm，先端尖，基部斜心彤，两侧不对称，上部3～7浅裂，裂片三角形，边缘有突尖细锯齿，上面绿色，其极稀疏之短刺毛，下面略带紫色；掌状脉6～7条，红色。花6～7朵，粉红色，伞房状排列，花序根出，长10～20cm，花单性，雌雄同株，雄花花被4片，内外各2，外花被卵圆形，内花被长椭圆形；雄蕊10～15，离生；雌花被片3，内1外2，外花被片为宽卵形，内花被片卵圆形或长椭圆形。子房呈纺锤形，3棱，花柱3枚，离生。蒴果，无翅。花期7月，果期8月。\n【产地分布】生于溪边或阴湿石岩上。在四川有野生分布。\n【采收加工】洗净、切片、晒干备用。\n【药材性状】根茎粗壮横走，呈不规则长块状，长约2.7厘米，直径约2.1厘米。表面黑褐色或棕褐色，密生须根，残留茎的基部有棕黄色长绒毛。质地柔软，易折断，断面呈红色，气微，味甘苦。\n【性味归经】性微寒，味甘，苦。归肾经、肝经。\n【功效与作用】补气养血，散瘀止血。属止血药下分类的化瘀止血药。\n【临床应用】内服：煎汤，15～30克；绞汁、炖肉或浸酒。外用：适量，鲜品捣敷。主治病后虚弱、吐血、咯血、衄血、崩漏、血虚经闭、带下、跌手打损伤。\n【药理研究】①强心苷具有正性肌力作用即加强心肌收缩性。②黄酮类物质可以改善血液循环、降低胆固醇。③抑制炎性生物酶的渗出、促进伤口愈合和止痛。④槲皮苷由于具有强抗组织胺性，可以用于各类过敏症。\n【化学成分】含强心苷、黄酮类、鞣质、甾醇、槲皮苷、皂苷等。\n【使用禁忌】心脏病患者慎用。\n【配伍药方】①功能性子宫出血：一点血鲜品120～150克，或干品60～70克。炖鸡服。\n②红崩白带、女子干病方：一点血15～30克，炖肉或炖鸡服。\n③外伤出血方：鲜一点血30克，洗净捣烂，取汁兑童便服。药渣外敷患处，用布包扎。" },

  {
    "id": 4,
    "price": 17.5,
    "name": "珠子参",
    "key": "珠子参",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/813098d8-c47f-4f4e-9f85-11d20c0b4df8.jpg",
    "cat": 10,
    "brief": "野生珠儿参 扣子七 珠子参钮子七 雪三七中药材50克干品",
    "alias": "【中药名】\n珠子参 zhuzishen\n【别名】\n珠参、扣子七、珠儿参、钮子七、竹鞭三七、疙瘩七。\n【英文名】\nPanacis Majoris Rhizoma。",
    "explain": "【药用部位】来源于五加科植物珠子参Panax japonicus C.A.Mey.var.major (Burk)C.Y.Wu et K.M.Feng.或羽叶三七Panax japonicus C.A.Mey.var.bipinnatifidus(Seem.)C.Y.Wu et K.M.Feng的干燥根茎。的根茎。\n【植物形态】多年生草本。根茎细长，弯曲横卧，节膨大成珠状或纺锤状，形似纽扣，节间通常细长如绳或极短。有时部分结节密生呈竹鞭状，其上生有须根。茎直立无毛。掌状复叶3～5轮生茎顶，叶柄长约9厘米；小叶通常6，两侧的较小，小叶柄长5～15毫米，中央小叶片椭圆形或椭圆状卵形，先端长渐尖，基部近圆形或楔形，边缘有细密锯齿或呈重锯齿状，边缘及两面散生刺毛。伞形花序单一，有时其下生1至多个小伞形花序；花萼5齿，先端尖；花瓣5，卵状三角形，先端状；雄蕊5枚；子房下位，花柱通常2，分离。核果浆果状，圆球形，熟时鲜红色，花期7～8月，果期8～9月。\n【产地分布】生于山坡竹林或杂木林中阴湿处。主产于云南、甘肃、陕西、四川、湖北等地。\n【采收加工】秋季采挖，除去粗皮及须根，晒干或蒸(煮)透后，晒干。\n【药材性状】根茎节膨大部分呈类球形、扁球形或不规则菱角形，直径1～2.5厘米，有的一侧或两侧残存细的节间。表面黄棕色或棕褐色，粗糙，有明显的纵皱纹，中部有略呈环状的疣状突起及细根痕，有的可见略凹陷的茎痕。质坚硬，不易折断，断面黄白色，粉性，有黄色分泌道斑点。蒸煮品淡红棕色，半透明，角质。气微，味苦微甜。\n【性味归经】性寒，味苦、甘。归肝经、肺经、胃经。\n【功效与作用】清肺、养阴、散瘀止血。属止血药下属分类化瘀止血药。\n【临床应用】用量3～9克，水煎服，研末入丸散或泡酒。用于治疗肺热咳嗽、烦渴、咽痛、咳血、吐血、衄血、便血、崩漏、外伤出血、跌打损伤、痈疖肿毒。\n【药理研究】对珠子参单体皂甙药理研究较少，根据云南产珠子参根茎总甙对小鼠的作用表明：珠子参总甙有与人参皂甙类型的免疫作用，能提高小鼠血中碳廓清率和激活腹腔巨噬细胞的吞噬活性，具有扶正固本的作用，并且毒性低，刺激性及溶血作用均很弱。动物实验表明，珠子参有提高机体免疫功能的作用，此外还有镇痛、镇静、抗脂质过氧化、抗溃疡等作用。\n【主要成分】含多种皂苷，如以竹节人参皂苷等为代表的齐墩果烷型的皂苷；以人参皂苷等为代表的达玛烷型皂苷以珠子参苷为代表的奥寇梯木型皂苷等。又含琥珀酸，糖蛋白ZP-2，系由葡萄糖，甘露糖，岩藻糖，木糖，半乳糖，鼠李糖和糖醛酸所组成。\n【使用禁忌】孕妇禁服。胃虚者不宜多服。\n【配伍药方】①治吐血，鼻出血，便血，子宫出血：大叶三七研末，每服1.5克，每日2次。（《宁夏常用中草药》）\n②治劳伤腰痛：扣子七15克，土鳖虫15克。泡酒服。（《恩施中草药手册》）\n③治咳血：扣子七、枇杷叶各9克，白茅根、仙鹤草各1.5克，贝母6克。水煎服。（《湖北中草药志》）\n④治跌打损伤，腰腿痛：珠子参15克，泡酒500克内服，每次服10毫升，每日3次。（《云南巾草药选》）\n⑤治小儿惊风：钮子七9克，研粉，每次0.3克，每日3次，温开水冲服。（《陕西中草药》）\n⑥治痈肿疮疡，跌打瘀痛：大叶三七适量，用陈醋磨浓汁外涂；亦可同时取大叶三七9克，水酒各半煎服。（《宁夏中草药于册》）\n⑦治齿痛：珠儿参切片含之。（《本草推陈》）" },

  {
    "id": 5,
    "price": 17.5,
    "name": "白石花",
    "key": "白石花",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/06d56103-2a50-46be-936b-ab57f247e1cf.jpg",
    "cat": 10,
    "brief": "中药材海浮石花 石花 海石花 浮水石 新货500g包邮 店另有海浮石",
    "alias": "【中药名】\n白石花 baishihua\n【别名】\n石花、石衣、蛤蟆皮。\n【英文名】\nLichen Parmeliae Tinctori。",
    "explain": "【药用部位】为地衣类梅花衣科梅花衣属植物白石花Parmelia tinctorum Despr.的叶状体。\n【植物形态】呈大型叶状，平铺着生，由中央向周围扩散呈放射状分瓣，裂片宽大，末端呈钝圆形。上表面灰绿色或石青色。表面有时密布小瘤状至短棒状粉芽堆。边缘光滑，近全缘。下表面黑色，中央具黑色假根，边缘褐色而裸露。\n【产地分布】生于树干上和岩石表面。分布于华东及河北、河南、广西、贵州、云南、西藏、陕西、台湾等地。\n【采收加工】四季可采，晒干。\n【药材性状】叶状体多皱，呈近圆形或不规则形，直径14～30厘米，裂片宽0.5～3厘米，边缘近圆形，全缘或稍具缺刻，波状起伏，彼此相接和重叠。上表面灰绿色、灰白色，中部密生灰褐色、短棒状裂芽；下表面黑色，周边淡栗色，有稀疏的黑色假根。子器少，杯状，径约1厘米，孢子椭圆形。以叶状体齐整、质干、无碎片或少碎片者为佳。\n【性味归经】性凉，味甘。归肝经\n【功效与作用】明目，凉血，解毒。属止血药下分类的凉血止血药。\n【临床应用】内服：煎汤，3～9克。外用：水煎液涂搽；或晒干研末撒敷或调敷。主治目暗不明，崩漏，外伤出血，疮毒，顽癣。\n【药理研究】1.杀精子、抗菌作用：梅衣水煎液中分得的主要成分苔黑酚及一系列半合成苔色酯，可抑制精子活动。苔罴酚抑精子最低浓度为4mg/ml，低于国际计划生育联合会规定的最低浓度。苔黑酚(即3，5-二羟基甲苯)在试管内对红色毛癣菌、絮状表皮癣菌、白色念珠菌、孢子丝菌等真菌有较好的抑菌作用。2.抗辐射和清除自由基作用：小鼠用Coγ射线一次全身照射前腹腔注射石花粗多糖水溶液150mg/kg，能提高小鼠存活率22.5%～55%，是一种兼有速效和缓效特点的长效辐射防护剂，其抗辐射作用较苔黑酚强。苔黑酚体外试验有明显清除羟自由基效应，其效应分别是天然抗氧化剂维生素C和羟自由基清除剂甘露醇的4.9和22.5倍。\n【化学成分】含有黑茶渍素，红粉苔酸，异红粉苔酸，苔黑酚(即3,5-二羟基甲苯)及多糖。\n【使用禁忌】尚不明确，谨慎用药。" },

  {
    "id": 6,
    "price": 17.5,
    "name": "地榆",
    "key": "地榆",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/df5f3ee9-85bd-4540-bb22-fdb26a4e5ae5.jpg",
    "cat": 10,
    "brief": "地榆中药材500克 生地榆片 赤地榆根片 地榆粉新货正品 另售槐角",
    "alias": "【中药名】\n地榆【别名】\n马胡枣、绵地榆、黄瓜香、白地榆、西地榆。\n【英文名】\nSanguisorbae Radix。",
    "explain": "【药用部位】蔷薇科植物地榆SanguisorbajicinalisL.的根。\n【植物形态】多年生草本，高30～120厘米。根粗壮，多呈纺锤形，稀圆柱形，表面棕褐色或紫褐色，横切面黄白色或紫红色。茎直立，有棱，无毛或基部有稀疏腺毛。基生叶羽状复叶，小叶4～8对，卵形或长圆状卵形，长1～7厘米，宽0.5～3厘米，先端圆钝稀急尖，基部心形至微心形，边缘有粗大圆钝稀急尖的锯齿；茎生叶较小，近无柄；基生叶托叶膜质，茎生叶托叶大，草质，半卵形，外侧边缘有锐锯齿。穗状花序椭圆形、圆柱形或卵球形，长1～3厘米；苞片2；萼片4，紫红色；雄蕊4枚，与萼片近等长或稍短；柱头顶端扩大，盘形，边缘有流苏状乳头。瘦果包被在宿萼内，外面有4棱。花果期7～10月。\n【产地分布】生于草原、草甸、山坡草地、灌丛中、疏林下。分布于全国各地。主产于西北及东北等地。\n【采收加工】春季将发芽时或秋季植株枯萎后采挖，除去须根，洗净，干燥或趁鲜切片，干燥。\n【药材性状】不规则纺锤形或圆柱形，稍弯曲或扭曲，长5～25厘米，直径0.5～2厘米。表面灰褐色、棕褐色或暗紫色，粗糙，有纵皱纹，横裂纹及支根痕。质硬，断面较平坦，粉红色或淡黄色，木部灰褐色或淡黄色，略呈放射状排列。切片不规则圆形或椭圆形，厚0.2～0.5厘米；切面紫红色或棕褐色。无臭，味微苦涩。\n【性味归经】性微寒，味苦、酸、涩。归肝经、大肠经。\n【功效与作用】凉血止血、解毒敛疮。属止血药下属分类的凉血止血药。\n【临床应用】用量9～15克，水煎服，外用适量，研末涂敷患处。用治便血、痔血、血痢、崩漏、水火烫伤、痈肿疮毒。\n【药理研究】药理研究，有止血作用，可使创面渗出液减少，抗感染，有利于烫伤创面愈合。此外，尚有降压、止吐、治疗急性肝损伤和对抗氧化氢诱发的溶血等作用。\n【化学成分】含地榆苷Ⅰ、没食子酸、地榆素、1,2,6-三没食子酰-β-D-葡萄糖、地榆苷Ⅱ，苷元19-α-羟基熊果酸。另含地榆糖苷、槲皮素-3-半乳糖-7-葡萄糖苷、山柰酚、槲皮素、地榆皂苷A、地榆皂苷B、地榆皂苷E、苷元熊果酸，以及儿茶素等成分。\n【使用禁忌】伤胃，误服多致口噤不食。脾胃虚寒，中气下陷，冷痢泄泻，崩漏带下，血虚有瘀者均应慎服。\n【配伍药方】治烫火伤：急用地榆磨油如面，麻油调敷，其痛立止;如已起疱，则将疱挑破放出毒水，然后敷之，再加干末撒上，破损者亦然。(《外科证治全书》)\n②治胃溃疡出血：生地榆9克，乌贼骨15克，木香6克。水煎服。(《宁夏中草药》)\n③治原发性血小板减少性紫癜：生地榆、太子参各30克，或加怀牛膝30克，水煎服，连服2月。(《全国中草药新疗法资料展览会选编》)\n④治外伤出血：地榆炭研细末，外敷患处。或配茜草、白及、黄芩，研末外用。(《陕甘宁青中草药选》)\n⑤治赤白带下：地榆60克，米醋一升，煮十余沸去滓，食前热服一合。(《卫生易简方》)" },

  {
    "id": 7,
    "price": 17.5,
    "name": "木耳",
    "key": "木耳",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/5804d4c6-2af4-4711-9735-681a3f9c347e.jpg",
    "cat": 10,
    "brief": "中药材 黑木耳 50g 可打粉 无硫熏满包邮",
    "alias": "【中药名】\n木耳 muer\n【别名】\n黑木耳、木菌、耳子、木茸。\n【英文名】\nFructificatio Auriculariae",
    "explain": "【药用部位】木耳科真菌木耳Auricularia auricula(L.ex Hook.)Unlderw.的干燥子实体。\n【植物形态】子实体丛生，常覆瓦状叠生。耳状、叶状或近杯状，边缘波状，薄，宽2～6厘米，最大者可达12厘米，厚2毫米左右，以侧生的短柄或狭细的基部固着于基质上。初期为柔软的胶质，黏而富弹性，以后稍带软骨质。\n【产地分布】生于栎、榆、杨、槐等阔叶树腐木上。分布于全国各地，各地还有人工栽培。\n【采收加工】夏、秋季采收。采摘后放到烘房中烘干，温度由35℃逐渐升高到60℃，烘干备用。\n【药材性状】子实体呈不规则块片，多皱缩，大小不等，不孕面黑褐色或紫褐色，疏生极短绒毛，子实层面色较淡。气微香，味淡。\n【性味归经】性平，味甘。归肺经、脾经、大肠经、肝经。\n【功效与作用】补气养血，润肺止咳，止血，降压，抗癌。属止血药下分类的凉血止血药。\n【临床应用】内服：煎汤，用量3～10克，或炖汤，或烧炭存性研末。主治气虚血亏，肺虚久咳，咯血，衄血，血痢，痔疮出血，妇女崩漏，高血压，眼底出血，子宫颈癌，阴道癌，跌打伤痛。\n【药理研究】抗凝血和抗血小板凝聚和抗血栓形成，有升白细胞作用；对免疫功能有促进作用；促进核酸及蛋白生物合成，降低血脂及抗动脉粥样硬化；还能延缓衰老，具有一定的抗辐射及抗炎作用；具有显著的抗溃疡及降血糖作用；有抗生育作用，抗着床和抗早孕效果最明显；有抗癌、抗突变作用，还有抗真菌等作用。\n【化学成分】本品主要含黑色素、木耳多糖、单糖、麦角固醇、氨基酸、维生素等成分。\n【使用禁忌】虚寒溏泻者慎服。\n【配伍药方】①治反胃多痰：大木耳7～8个，煎汤服用，日服2次。(《中国药用真菌》)\n②治误食毒蕈中毒：木耳30克，加白糖30克，煮食。(《中国药用真菌》)\n③治大便干燥，痔疮出血：木耳5克，柿饼30克，同煮烂，随意吃。(《长白山植物药志》)\n④治崩中漏下：木耳炒见烟，为末。每服6.3克，头发灰0.9克，共7.2克，好酒调服出汗。(《孙天仁集效方》)\n⑤治高血压病，眼底出血：木耳3～6克，冰糖5克，加清水适量，慢火炖汤，于睡前1次顿服。每日1剂，10天为1疗程。(《药用寄生》)\n⑥治高血压：木耳15克，皮蛋1只，水炖，代茶频服。(《福建药物志》)\n⑦治眼流冷泪：木耳(烧存性)30克，木贼30克。为末。每服9克，以清米泔煎服。(《惠济方》)\n⑧治一切牙痛：木耳、荆芥各等分。煎汤漱之，痛止为度。(《海上方》)" },

  {
    "id": 8,
    "price": 17.5,
    "name": "铁苋",
    "key": "铁苋",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/267b27ef-1505-4f57-99b4-49d6ac0a3fac.jpg",
    "cat": 10,
    "brief": "中药材铁苋铁苋菜人苋中草药铁苋菜血见愁500g包邮",
    "alias": "【中药名】\n铁苋 tiexian\n【别名】\n铁苋菜、六合草、血见愁、喷水草、人苋。\n【英文名】\nHerba Acalyphae",
    "explain": "【药用部位】大戟科植物铁苋菜Acalypha australis L.及短穗铁苋菜A. brachystachya Hormen的干燥全草。【植物形态】一年生草本，高30～50厘米。茎直立，分枝，被微柔毛。叶互生；叶柄长2～5厘米；叶片卵状菱形或卵状椭圆形，长2～7.5厘米，宽1.5～3.5厘米，先端渐尖，基部楔形或圆形，基出脉3条，边缘有钝齿，两面均粗糙无毛。穗状花序腋生；花单性，雌雄同株；通常雄花序极短，长2～10毫米，生于极小苞片内；雌花序生于叶状苞片内；苞片展开时肾形，长1～2厘米，合时如蚌，边缘有钝锯齿，基部心形；花萼四裂；无花瓣；雄蕊7～8枚；雌花3～5朵；子房被疏柔毛，3～4室；花柱羽状分裂至基部。蒴果小，三角状半圆形，被粗毛；种子卵形，长约2毫米，灰褐色。花期5～7月，果期7～10月。【产地分布】生于旷野、丘陵、路边较湿润的地方。分布于长江、黄河中下游各地及东北、华北、华南、西南各地及台湾。【采收加工】5～7月间采收，除去泥土，晒干或鲜用。【药材性状】本品长20～40厘米，全体被灰白色细柔毛，粗茎近无毛。根多分枝，淡黄棕色，茎类圆柱形，有分枝，表面黄棕色或黄绿色，有纵条纹；质硬，易折断，断面黄白色，有髓或中空。叶片多皱缩，破碎，完整者展平后呈卵形卵状菱形，长2.5～5.5厘米，宽1.2～3厘米，黄绿色，边缘有钝齿，两面略粗糙。花序腋生，苞片三角状肾形，合时如蚌。蒴果小，三角状扁圆形，气微，味淡。【性味归经】性凉，味苦、涩。归心经、肺经、大肠经、小肠经。【功效与作用】清热利湿，凉血解毒，消积。属止血药下属分类的凉血止血药。【临床应用】内服：煎汤，10～15克；鲜品30～60克。外用：适量，水煎洗或捣敷。主治痢疾，泄泻，吐血，衄血，尿血，便血，崩漏，小儿疳积，痈疖疮疡，皮肤湿疹。【药理研究】铁苋具有抗菌、平喘的功效与作用。【化学成分】铁苋菜全草含没食子酸、铁苋碱，另含铁苋菜素、大黄素、p-谷固醇、毛地黄内酯、原儿茶酸、乙酸龙脑酯、柏木烷酮、香草酸等成分。【使用禁忌】老弱气虚者慎服，孕妇禁服。【配伍药方】①治吐血：铁苋菜60克，淡竹叶15克。水煎服。（《江西草药》）②治吐血，便血，尿血：铁苋菜全草30克，煎服；或配地榆、甘草。疗效更确切。（南药《中草药学》）③治疳积：铁苋菜鲜全草30～60克，同猪肝煎煮服食。或用铁苋菜鲜品15克，姜、葱各30克，捣烂，加入鸭蛋清拌匀，外敷脚心1夜，隔3天1次，连敷5～7次。重病例内服、外敷并同。（《浙南本草新编》）④治毒蛇咬伤：铁苋菜、半边莲、大青叶各30克。水煎服。（《江西草药》）⑤治湿疹：铁苋菜捣绒，取汁外擦。（《贵州草药》）⑥治哮喘咯血：铁苋菜60克。煎水服。（《贵州草药》）" },

  {
    "id": 9,
    "price": 17.5,
    "name": "地稔根",
    "key": "地稔根",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/d6b48869-656d-4be3-a983-28a45e9f3ca1.jpg",
    "cat": 10,
    "brief": "地菍草中草药材500克 埔梨地念草地稔根地捻草铺地锦紫茄子地脚茶",
    "alias": "【中药名】\n地稔根 direngen\n【别名】\n地菍根、山地菍根、山地稔根、铺地锦根。\n【英文名】\nTwelve stamen Melastoma Herb",
    "explain": "【药用部位】野牡丹科植物地菍Melastoma dodecandrum Lour.的根。\n【植物形态】披散的匍匐状亚灌木。茎多分枝，近地面匍匐生长，长10～30厘米。叶对生，卵形、倒卵形或椭圆形，长1～3厘米，宽8～20毫米，顶端短尖，基部浑圆，有3～5条主脉，只在叶面边缘和叶背脉上有稀疏的粗毛；叶柄长2～4毫米。夏、秋季开花；花两性，1～3朵生于枝端，直径约2.5厘米；萼管长约5毫米，被短粗毛，萼片披针形，比萼管短；花瓣5片，倒卵形，紫红色，长1～1.4厘米；雄蕊10枚，花药顶孑L开裂，有延长且2裂的药隔，子房下位，5室。浆果圆球形，直径约7毫米，成熟时紫黑色，被粗毛。\n【产地分布】生于山野草坡、林缘及灌木丛中的酸性土上。分布于广东及长江流域以南等地。\n【采收加工】全年可采收。挖取根部，洗净，切短段，晒干。\n【药材性状】地菍根呈不规则圆柱形短段，常弯曲，有分枝，长3～6厘米，直径4～12毫米，表面灰白色或黄白色，光滑或有细皱纹，栓皮剥落后呈淡红色。质坚硬，不易折断，断面淡红棕色，略显放射状纹理，中心有红棕色小髓。气微，味淡微涩。\n【性味归经】性平，味微甘、苦。归肺经、脾经、肝经。\n【功效与作用】活血通络、收敛止血。属止血药分类下的收敛止血药。\n【临床应用】用量5～30克，煎服；或捣汁。外用：煎汤洗或捣敷。用治风湿痹痛、腰腿痛、产后腹痛、崩漏带下、外伤出血。\n【药理研究】地稔根煎剂在体外对伤寒、痢疾杆菌及金黄色葡萄球菌有抑制的功效与作用。\n【化学成分】含酚类、鞣质、氨基酸及糖类。\n【使用禁忌】孕妇慎用。\n【配伍药方】1.治久嗽不止：地菍根、百合、桑根各30克，猪肺1只煎服。(《闽东本草》)\n2.治黄疸：鲜地茄根90克，白茅根30克，白糖30克，甜酒30克。先将地茄、白茅根煎水，加白糖冲甜酒服。(《湖南药物志》)\n3.治疝气：地菍根60克，加桂圆肉15克(或橘核15克)，炖服。(《福建民间草药》)\n4.治久疟不愈：地菍根30克，凤尾草全草60克，鹅不食草全草15克。白糖为引，水煎2次分服。每日1剂\n5.治滞产：地菍根60克～120克，切碎，加水3-4碗，文火煎至八分碗，去渣顿服。(《福鼎本草》)" },

  {
    "id": 10,
    "price": 17.5,
    "name": "红药子",
    "key": "红药子",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/10a0eaad-21ea-43e6-b25f-9df3ad1b6647.jpg",
    "cat": 10,
    "brief": "红药中药材 红药子中草药500g克包邮别名朱砂七 另售接骨木老鹤草",
    "alias": "【中药名】\n红药子\n【别名】\n红孩儿、朱砂莲、山猪薯。\n【英文名】\nRhizoma Dioscoreae Cirrhosae。",
    "explain": "【药用部位】薯蓣科植物薯莨Dioscorea cirrhosa Lour.的块茎。\n【植物形态】多年生缠绕草本。块茎粗壮，不规则形，表面棕褐色，有疣状突起，鲜时内面血红色，断面有网状花纹。茎圆柱形，木质，近基部有短刺。叶革质，上部叶对生，长圆状披针形或线状披针形，长12～20厘米，宽6～7厘米，上面绿色，光亮，下面淡绿色，有白粉，叶脉5～9条，网脉明显；基部叶互生，较大，宽心形。花小，单性，穗状花序腋生；花被片6；雄花有雄蕊6，与花被等长。蒴果不反曲，顶端钝，有3翅。种子扁平，着生于果室中央，有翅。花期4～6月，果期7月至次年1月。\n【产地分布】生于向阳山坡疏林中。主产于江西、广东、广西、湖南、四川等地。\n【采收加工】全年可采，以5～8月采挖质量较好。采收后洗净，切片，晒干或烘干。\n【药材性状】完整药材呈长圆形、卵圆形、球形或结节块状，长10～15厘米，直径5～10厘米。表面深褐色，粗糙，有瘤状突起和凹纹，有时具须根或点状须根痕。市售药材多为纵切或斜切的块片，外皮皱缩，切面暗红色或红黄色。质坚硬，断面硬粒状，可见红黄色相间的花纹。气微，味涩、苦。\n【性味归经】性凉，味微苦、涩。归胃经、脾经、膀胱经、大肠经。\n【功效与作用】止血，活血，养血，止痢，收敛止痛。属止血药下属分类的收敛止血药。\n【临床应用】用量3～9克，水煎内服；外用研末或磨汁涂患处，适量。临床常用于治疗吐血、咯血、崩漏、产后出血、尿血、外伤出血、贫血、痢疾、腹泻、关节酸痛、毒蛇咬伤。\n【药理研究】药理实验表明：红药子的40%乙醇提取液和水煎液有抗菌作用。能显著缩短兔的凝血时间及出血时间。\n【化学成分】块茎含缩合鞣质，尚含酚类、皂苷、蛋白质、糖类、粘液质等。\n【使用禁忌】孕妇慎用。" },

  {
    "id": 11,
    "price": 17.5,
    "name": "檵木叶",
    "key": "檵木叶",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/b3a74ca2-6f01-4a89-85e6-77c489dde63a.jpg",
    "cat": 10,
    "brief": "檵木叶  100g",
    "alias": "【中药名】\n檵木叶 jimuye\n【别名】\n檵花叶。\n【英文名】\nFolium Loropetali Chinense。",
    "explain": "【药用部位】来源于金缕梅科植物檵木Loropetalum chinense (R.Br.) Oliv.的叶。\n【植物形态】常绿、多分枝灌木，高1～5米，小枝被星状毛。叶互生，卵形或椭圆形，长2～5厘米，顶端锐尖，基部钝，全缘；侧脉每边5条，明显；叶柄长达5毫米，被星状毛；托叶三角状披针形。花春季开放，3～8朵簇生于枝顶，具短梗；萼杯状，4裂，裂齿卵形；花瓣4，白色或黄白色，带状，长1～2厘米；发育雄蕊4，花丝极短，花药4室，瓣裂，药隔伸出呈刺状，退化雄蕊与发育雄蕊互生；子房半下位或下位，2室，花柱2；胚珠每室1。蒴果木质，卵球形，长7～8毫米，被棕色星状茸毛，上半部2裂，下半部被宿存萼筒包裹；种子卵形，黑色。花期5月，果期10月。\n【产地分布】生于向阳山坡。分布于我国长江流域至南岭山地。\n【采收加工】夏、秋季枝叶茂盛时采收，晒干。\n【药材性状】多少皱卷，展开后完整叶片椭圆形或卵形，长1.5～3厘米或过之，宽1～2.5厘米，顶端锐尖，基部钝，稍偏斜，通常全缘，上面灰绿色或浅棕褐色，下面色较浅，两面被星状毛；叶柄被棕色星状茸毛。气微，味涩、微苦。以色绿者为佳。\n【性味归经】性凉，味苦、涩。归肝经、胃经、大肠经。\n【功效与作用】清热解毒、收敛、止血。属止血药下属分类的收敛止血药。\n【临床应用】用量15～30克；外用鲜品适量，捣烂敷患处。用治烧伤或烫伤、外伤出血、吐血、崩漏、腹泻。\n【药理研究】有抗菌和宫缩作用，对心血管有影响。本品的鞣酸及其衍生物对蛋白质或血清有凝集沉淀作用，能收缩毛细血管及促进血液凝固。\n【化学成分】叶含鞣质、没食子酸及黄酮类成分；又据报道，从叶的黄酮类成分中分离出槲皮素。此外，叶尚含还原糖、苷类和酚性物质。\n【使用禁忌】尚不明确，谨慎用药。\n【配伍药方】①治暑泻，痢疾：檵木茎叶21克。水煎服。红痢加白糖，白痢加红糖15克，调服。(《江西民间草药》)\n②治闪筋：鲜檵花叶一握，加烧酒捣烂，绞汁1杯。每日服1～2次。(《福建民间草药》)\n③治外伤出血：鲜檵花叶一握，捣烂外敷。(《福建民间草药》)\n④治紫斑病：檵木鲜叶30克。捣烂，酌加开水擂取汁服。(江西《草药手册》)\n⑤治消化道出血：檵木叶、藕节、侧柏叶、花蕊,、血余炭各等量。研为细末。每服6克，每日3次，冷开水吞服。(《湖北中草药志》)" },

  {
    "id": 12,
    "price": 17.5,
    "name": "血余炭",
    "key": "血余炭",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/c5a696c1-ef52-498d-82ef-139b96a395fb.jpg",
    "cat": 10,
    "brief": "正品血余炭 超细中药材血余炭粉500克包邮",
    "alias": "【中药名】\n血余炭 xueyutan\n【别名】\n乱发、发灰、头发、人发灰。\n【英文名】\nCrinis Carbonisatus",
    "explain": "【药用部位】人的头发制成的炭化物。\n【产地分布】全国各地均可收集。\n【采收加工】取头发，除去杂质，碱水洗去油垢，清水漂净，晒干，炯煅成炭，放凉。\n【药材性状】本品呈不规则块状，大小不一。乌黑光亮，表面有多数细孔，如海绵状。质轻，质脆易断，断面蜂窝状。用火烧之有焦发气，味苦。以色黑、发亮、质轻、无杂质者为佳。\n【性味归经】性平，味苦。归肝经、胃经。\n【功效与作用】收敛止血，化瘀，利尿。属止血药下属分类的收敛止血药。\n【临床应用】内服：煎汤，用量5～10克；研末，每次用量1.5～3克。外用：适量，研末掺或油调、熬膏涂敷。用于吐血，咯血，衄血，血淋，尿血，便血，崩漏，外伤出血，小便不利。\n【药理】有止血、抗炎、抗病原微生物的作用。\n【化学成分】主要成分为一种优质蛋白。\n【使用禁忌】无。\n【相关药方】①治咯血，兼治吐衄，二便下血：花蕊石(煅存性)9克，三七6克，血余炭(煅存性)3克。共研细，分两次，开水送服。(《衷中参西录》化血丹)\n②治小便尿血：头发不拘多少，烧灰存性，研为细末，另用新采侧柏叶捣汁，调糯米粉打糊为丸，如梧桐子大。每服五十丸，空心白滚汤下，或煎四物汤送下。(《松崖医经》秘传发灰丸)\n③治小便不利：滑石0.6克，乱发0.6克，白鱼0.6克。上三味，杵为散。饮服1.5克，日三服。(《金匮要略》滑石白鱼散)\n④治黄疸：烧乱发，水调服3克，日三服。(《肘后方》)\n⑤治恶露不尽，腹胀痛：乱发如鸡子大，灰汁洗净，烧末，酒服。(《外台》救急方)\n⑥治手足裂：头发一大握，桐油一碗。于瓦器内熬。候油沸，头发熔烂，出火摊冷，以瓦器收贮，勿令灰入。每用百沸汤泡洗皲裂令轻，拭干敷上。(《卫生易简方》)" },

  {
    "id": 13,
    "price": 17.5,
    "name": "艾叶",
    "key": "艾叶",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/e64809f6-4191-4a4c-bbe7-97eca618fca1.jpg",
    "cat": 10,
    "brief": "野生艾叶干艾草泡脚去湿气月子产后泡澡药包家用艾叶艾条艾绒 2斤",
    "alias": "【中药名】\n艾叶 aiye\n【别名】\n蕲艾、祁艾、大艾叶、艾蒿、五月艾。\n【英文名】\nArtemisiae Argyi Folium。",
    "explain": "【药用部位】菊科植物艾Artemisia argyi Levl. et Vant.的叶。\n【植物形态】多年生草本，高0.5～1.2米。茎直立，密被茸毛，上部分枝。茎中部叶卵状三角形或椭圆形，有柄，羽状分裂，裂片椭圆形至椭圆状披针形，边缘具不规则的锯齿，上面深绿色，有腺点和蛛丝状毛，下面被灰白色茸毛；茎顶部叶全缘或3裂。头状花序长约3毫米，直径2～3毫米，排成复总状；总苞卵形，总苞片4～5层，密被白色丝状毛；小花筒状，带红色，雌花长约1毫米，两性花长约2毫米，瘦果椭圆形，长约0.8毫米，无毛。花期7～10月。\n【产地分布】艾生于荒地、林缘；有栽培。分布于华北、华东、西南及陕西、甘肃等地。\n【采收加工】夏季花未开时采摘，除去杂质，晒干。\n【药材性状】多皱缩、破碎，有短柄。完整叶片展开后呈卵状椭圆形，羽状深裂，裂片椭圆状披针形，边缘有不规则的粗锯齿；上表面灰绿色或深黄绿色，有稀疏的柔毛及腺点；下表面密生灰白色茸毛。质柔软。气清香，味苦。\n【性味归经】性温，味苦、辛。归肝经、脾经、肾经。\n【功效与作用】散寒止痛、温经止血。属止血药下属分类的温经止血药。\n【临床应用】用量3～9克，水煎服；外用适量，供炙治或熏洗用。主要用治少腹冷痛、经寒不调、宫冷不孕、吐血、衄血、崩漏经多、妊娠下血；外治皮肤瘙痒。醋艾炭温经止血。用于虚寒性出血。近年对其药理作用有不少研究，如水浸剂对致病金黄色葡萄球菌及某些皮肤真菌有抑制作用。此外，尚有增进食欲等作用。艾叶油有镇咳、祛痰、平喘、抑菌、镇静、抗休克等作用。\n【药理研究】具有抗菌作用；能显著增强网状内皮细胞的吞噬功能；平喘、镇咳、祛痰；抗过敏性休克；抑制心肌收缩，抗血凝和高强度抑制血小板聚集；能明显延长戊巴比妥钠睡眠时间。尚具有利胆、兴奋子宫作用。\n【化学成分】含挥发油0.2%～0.33%，尚含β-谷甾醇、豆甾醇、α-香树脂、β-香树脂、无羁萜、柑橘素、槲皮素与4个桉烷衍生物。另含2-甲基丁醇、艾醇、龙脑、顺式香苇醇、优葛缕酮、α-侧柏烯、甲基丁香油酚、魁蒿内酯等成分。\n【使用禁忌】阴虚血热者及宿有失血病者慎用。\n【配伍药方】①治产后泻血不止：干艾叶15克(炙熟)，老生姜15克；浓煎汤。一服便止。(《食疗本草》)\n②治妊娠卒胎动不安，或腰痛，或胎转抢心，或下血不止：艾叶一鸡子大，以酒四升，煮取二升，分为二服。(《肘后方》)\n③治妊娠心气痛：艾叶、茴香、川楝子(俱炒)等分。醋煎服。(《卫生易简方》)\n④治转筋吐泻：艾叶、木瓜各15克，盐6克。水盅半，煎一盅，待冷饮。(《卫生易简方》)\n⑤治癣：醋煎艾叶涂之。(《千金要方》)" },

  {
    "id": 14,
    "price": 17.5,
    "name": "叶象花",
    "key": "叶象花",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/5c5b3807-22db-48f0-bbab-70b963a11c23.jpg",
    "cat": 10,
    "brief": "中药材 叶上花 500克 叶象花 叶上珠 统",
    "alias": "【中药名】\n叶象花 yexianghua\n【别名】\n细叶叶上花、一品红、叶上花。\n【英文名】\nHerb of Paited Euphorbia",
    "explain": "【药用部位】大戟科植物猩猩草Euphorbia heterophylla L．的干燥全草。\n【植物形态】一年生草本，高约1米。茎单生。有斜升开展的粗壮分枝，被稀疏的短柔毛或无毛。茎下部及中部的叶互生，花序下部的叶对生；叶柄长2～3厘米；托叶腺点状；叶形多变化，卵形，椭圆形，披针形或线形，长4～10厘米；宽2.5～5厘米，呈琴状分裂或不裂，边缘有波状浅齿或尖齿或全缘，两面被稀疏的短柔毛；花序下部的叶通常基部或全部红色。杯状聚伞花序多数在茎及分枝顶端排成密集的伞房状；总苞钟状，绿色，宽3～4毫米，先端5裂；腺体1～2，杯状，无花瓣状附属物。雄花20或更多，苞片膜质，先端撕裂；子房卵形，3室；花柱3，离生，先端2浅裂。蒴果卵圆状三棱形，直径约5毫米，无毛；种子卵形，灰褐色，表面有疣状突起，无种阜。花果期8月。\n【产地分布】我国各地及各大植物园都有栽培，在贵州兼有逸为野生者。\n【采收加工】四季均可采收。洗净，鲜用或晒干。\n【药材性状】全草长达80厘米。叶互生；叶形多变化，卵形、椭圆形、披针形或条形，中部及下部的叶长4～10厘米，宽2.5～5厘米，提琴状分裂或不分裂；叶柄长2～3厘米；花序下部的叶基部或全部紫红色。杯状花序多数在茎及分枝顶端排列成密集的伞房状；总苞钟形，宽3～4毫米，顶端5裂；腺体l～2，杯状，无花瓣状附属物。蒴果近球形，直径5毫米，无毛；种子卵形，有疣状突起。\n【性味归经】性寒，味苦、涩。归肝经。\n【功效与作用】凉血调经，散瘀消肿。属止血药下属分类的温经止血药。\n【临床应用】内服：煎汤，3～9克，外用：适量，鲜品捣敷。主治月经过多，外伤肿痛，出血，骨折。\n【药理研究】无杀灭血吸虫的作用，但对血吸虫病有腹水者，利尿效果显著；其导泻作用强。\n【化学成分】本品含Ⅳ-乙酰氨基半乳糖。\n【使用禁忌】尚不明确。\n【配伍药方】①治月经过多，跌打损伤：叶象花6～9克。水煎服，日服2次。（《文山中草药》）\n②治外伤出血，骨折：叶象花鲜叶适量，捣烂敷患处，2～3天换药1次。（《文山中草药》）" }] },



{
  "id": 6,
  "name": "化痰止咳平喘",
  "foods": [
  {
    "id": 1,
    "price": 17.5,
    "name": "华山参",
    "key": "华山参",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/d3072972-2405-44a6-ab84-3860973b7c6d.jpg",
    "cat": 10,
    "brief": "野生中药材 华山参 秦参 二月旺 白毛参 热参 500克包邮 免费打粉",
    "alias": "【中药名】\n华山参 huashanshen\n【别名】\n热参、白毛参、秦参。\n【英文名】\nPhysochlainae Radix。",
    "explain": "【来源】茄科植物漏斗泡囊草Physochlaina infundibularis Kuang的根。\n【植物形态】多年生草本，高20～60厘米。根圆锥状，肉质。茎单一或分枝，被白色腺质柔毛。叶互生，叶片宽卵形或三角状宽卵形，长3～9厘米，宽4～9厘米，先端钝或急尖，基部楔形下延，有时近截形，全缘或微波状。伞房状聚伞花序，顶生或腋生，绿黄色。花萼筒状钟形，5中裂，花后增大成漏斗状；花冠漏斗状钟形，长约1厘米，5浅裂；雄蕊5枚，稍不等长，着生于花冠筒中部；花盘垫座状；子房近球形，2室，花柱丝状，与花冠近等长，柱头2浅裂。蒴果近球形，有宿萼；种子多数，扁肾形。花期3～4月，果期4～6月。\n【产地分布】生于海拔400～1600米的山谷、山坡草地或林下。分布于河南、山西、陕西等地。\n【采收加工】春季采挖，除去须根，洗净，晒干。\n【药材性状】长圆锥形或圆柱形，略弯曲，有的有分枝，长10～20厘米，直径1～2.5厘米。表面棕褐色，有黄白色横长皮孔样突起，上部有环纹。顶端常有1至数个根茎，其上有茎痕及疣状突起。质硬，断面类白色或黄白色，皮部狭窄，木部宽广，可见细密的放射状纹理。具烟草气.味微苦，稍麻舌。\n【性味归经】性热，味甘、微苦。归肺经、心经。\n【功效与作用】平喘止咳、安神镇惊。属化痰止咳平喘药下属分类的温化寒痰药。\n【临床应用】用量0.1～0.2克，水煎服。临床用治寒痰喘咳、心悸失眠易惊。\n【药理研究】药理研究表明：1.对中枢神经系统的作用：大鼠口服煎剂2g/kg，其防御性条件反射潜伏期延长，腹腔注射1g/kg，除上述作用外，大部分动物阳性条件反射破坏，并有部分动物分化抑制解除；腹腔注射1～4g/kg显著降低大、小鼠和家兔的自由活动，但不降低小鼠被动活动；犬口服2～5g/kg亦有明显镇静作用。腹腔注射4g/kg，能协同硫喷妥钠及水合氯醛对小鼠的催眠、麻醉作用，对抗苯丙胺、咖啡因对小鼠的兴奋活动。2.对副交感神经系统的作用：华山参具有与东莨菪碱相似的扩大家兔瞳孔的作用；解除因毛果芸香碱所致大鼠及家兔肠平滑肌痉挛和犬涎液分泌过多症，并对抗电刺激迷走神经或注射氯化乙酰胆碱、毛果芸香碱所引起的降压作用等阿托品类生物碱相似的副交感神经末梢效应器的阻断作用，但对各器官作用强度与东莨菪碱不完全一致。\n【化学成分】含有托品类生物碱，总量0.24%～0.86%，其中莨菪碱0.07%～0.15%，山莨菪碱0.16%～0.68%，东莨菪碱0.01%～0.07%，另含微量的红古豆碱等。水溶性生物碱有5种，以胆碱为主。另含莨菪苷、甾体化合物、有机酸等。\n【使用禁忌】不宜多服，以免中毒。青光眼患者禁用，孕妇及前列腺重度肥大者慎用。\n【配伍药方】①治虚寒腹泻，失眠：华山参0.9克，桂圆肉15克，冰糖适量。水煎服。（《陕西中草药》）\n②治体虚寒咳、痰喘：华山参0.9克，麦冬9克，甘草3克，冰糖3克。水煎服。（《陕西中草药》）" },

  {
    "id": 2,
    "price": 17.5,
    "name": "猫爪草",
    "key": "猫爪草",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/c60c023d-f196-44b9-b4c9-f6a29c7941d3.jpg",
    "cat": 10,
    "brief": "弘强猫爪草中药500g正品非野生猫抓草猫瓜草中药材搭夏枯球夏枯草",
    "alias": "【中药名】\n猫爪草 maozhaocao\n【别名】\n三散草、黄花草、猫爪儿草。\n【英文名】\nRadix Rnunculi Ternati。",
    "explain": "【药用部位】毛茛科植物小毛茛Ranunculus ternatus Thunb.的干燥块根。\n【植物形态】多年生草本。块根数个，近纺锤形，顶端质硬，形似猫爪。茎细弱，高5～17厘米，疏生短柔毛，后渐无毛。基生叶丛生，有长柄，三出复叶或3深裂，小叶片卵圆形或阔倒卵形，长0.5～1.5厘米，宽0.5～1厘米，先端3浅裂或齿裂，基部楔形，中央1片小叶较大；茎生叶互生，通常无柄，3裂，裂片线形。花单生于枝端，直径约1.5厘米；花梗长0.5～2厘米，有短柔毛；萼片5，长圆形或倒卵形，绿色，外面疏生柔毛；花瓣5，也有6～8，阔倒卵形，黄色，无毛，基部有袋状蜜腺；雄蕊多数，花丝扁平，花药长圆形；雌蕊多数，丛集于膨大的花托上，柱头短。聚合果球形，瘦果卵形，表面淡棕色，平滑，有短而稍弯的果喙。花期4～5月，果期5～6月。\n【产地分布】生于田边、路旁、洼地及山坡草丛中。主产于河南，江苏、浙江、湖北等地亦产。\n【采收加工】春、秋季采挖，除去须根及泥沙，晒干。\n【药材性状】小纺锤形，常5～6个簇生，形如猫爪状，长3～7毫米，直径2～3毫米。顶端有黄棕色圆形茎基。表面黄褐色或灰黄色，久贮色变深，微有纵皱纹，有的具残留须根。质坚实，断面类白色，粉性。无臭，味甘。\n【性味归经】性温，味甘、辛。归肝经、肺经。\n【功效与作用】散结、解毒、消肿。属化痰止咳平喘药下属分类的温化寒痰药。\n【临床应用】用量10～30克，水煎服，外用捣敷或研末撒。用治瘰疬结核、肺结核、疔疮疖肿、龋齿疼痛。外敷内关穴，可止疟疾。临床上用猫爪草5克，配以麦冬10克，用开水浸泡当茶饮，每日l剂，10天为1疗程，治疗急慢性咽炎效果较好。另可用治颈淋巴结结核(瘰疬)。其方法是单用猫爪草120克(儿童减半)，加水煎沸后，再用文火煮0.5小时，过滤，取滤液200～250毫升，加黄酒50～100毫升，红糖适量，1次服用，服后卧床盖被，令出汗淋漓透彻，次日将药渣再煎1次，不必再加黄酒和捂汗。2日1剂，6日为1疗程。\n【药理研究】1.抗肿瘤作用：猫爪草乙醇提取物体外在L929细胞结合肉瘤S180细胞的筛选模型中有诱生肿瘤坏死 因子的作用，其有效成分为软脂酸。2.抗结核作用  猫爪草中的小毛茛内酯减少耐药结核患者周围血淋巴细胞内结核休眠菌小热休克蛋白基因的表达，激活休眠菌的同时增加周围血淋巴细胞内颗粒裂解肽mRNA的表达，增强机体细胞毒性淋巴细胞杀菌能力，达到抗耐药的作用。\n【化学成分】含肉豆蔻酸十八醇酯、二十烷酸、豆甾醇、β-谷甾醇等成分。\n【使用禁忌】有小毒，谨慎用药。\n【配伍药方】①治肺结核：猫爪草60克。水煎，分2次服。(《河南中草药手册》)\n②治疔疮疖肿：猫爪草45克，煎水头汁分次内服，药渣捣绒，加小金片8片，明矾0.5克，研细拌匀，分2次外敷患处。[《浙江中医杂志》1989,24(6)：275]\n③治偏头痛：小毛茛鲜根适量，食盐少许，同捣烂，敷于患侧太阳穴。敷法：将铜钱1个，或用硬壳纸剪成铜钱形亦可，隔住好肉，将药放钱孔上，外用布条扎护，敷至微感灼痛(1～2小时)即取下，敷药处可起小泡，不必挑破，待其自消。(江西《草药手册》)\n④治男子乳房发育：猫爪草、生麦芽各50克。煎水代茶饮，每日1剂。[《浙江中医杂志》1989,24(6)：275]\n⑤治恶性淋巴瘤、甲状腺肿瘤和乳腺肿瘤：猫爪草、蛇莓、牡蛎各30克，夏枯草9克。水煎服，日1剂。（《抗癌本草》）" },

  {
    "id": 3,
    "price": 17.5,
    "name": "石吊兰",
    "key": "石吊兰",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/05b57b3c-41aa-46bc-9be2-4d0cc5766543.jpg",
    "cat": 10,
    "brief": "敬轩堂中药材店铺实体店正品品质批中草药大全专卖大麦茶茯苓泡酒",
    "alias": "【中药名】\n石吊兰 shidiaolan\n【别名】\n黑乌骨、石豇豆、石泽兰、小泽兰、岩豇豆。\n【英文名】\nLysionoti Herba。",
    "explain": "【药用部位】苦苣苔科植物吊石苣苔Lysionotus pauciflorus Maxim.的干燥地上部分。\n【植物形态】常绿附生半灌木。匍匐茎灰褐色，老枝黄棕色，长7～40厘米，不分枝或少分枝，幼枝常有短毛，皮微有皱纹。叶对生或三至数片轮生，革质，有短柄或近无柄，紫红绿色。叶片大小、形状变化较大。楔形、楔状条形，狭矩圆形，挟卵形，或倒卵形，长1.5～5.5厘米，宽3～16毫米，先端钝或短尖。基部楔形或钝圆，边缘在中部以上有牙齿，下部全缘或微波状，上面深绿色，有光泽，下面淡绿色，无毛。花序腋生，有花1～4朵，花序梗长1.5～3.5厘米，苞片小，早落，花萼5深裂至基部，裂片三角状条形。花冠白色至淡红色，常带紫色，管状，长3.5～4.5厘米，中部以上膨大，近二唇形，上唇2裂，下唇3裂，无毛，雄蕊4，能育雄蕊2，花药连着。花盘杯状，4裂，雌蕊单一，无毛。蒴果1～2个，条形，长7.5～10厘米，两端有毛。种子细小，顶端有长毛。花期5～7月，果期8～10月。\n【产地分布】生于阴湿岩石壁或树干上，分布于云南、四川、贵州、广西、广东、福建、台湾、浙江、江西、湖南、湖北、陕西、安徽等省区。\n【采收加工】夏、秋二季叶茂盛时采割，除去杂质，晒干。\n【药材性状】茎呈圆柱形，长25～60厘米，直径0.2～0.5厘米。表面淡棕色或灰褐色，有纵皱纹，节膨大，常有不定根；质脆，易折断，断面黄绿色或黄棕色，中心有空隙。叶轮生或对生，有短柄；叶多脱落，脱落后叶柄痕明显；叶片披针形至狭卵形，长1.5～6厘米，宽0.5～1.5厘米，边缘反卷，边缘上部有齿，两面灰绿色至灰棕色。气微，味苦。\n【性味归经】性温，味苦。归肺经。\n【功效与作用】化痰止咳，软坚散结。属化痰止咳平喘药下属分类的温化寒痰药。\n【临床应用】内服：煎汤，9～15克，或浸酒服。外用：适量，捣敷，或煎水外洗。用治咳嗽痰多，瘰疬痰核。\n【药理研究】有抗结核杆菌、抗炎、抗肝毒、止咳祛痰、平喘镇静、降血压、降血脂及抗动脉粥样硬化作用。\n【化学成分】全草含石吊兰素，即内华达素(nevade-nsin)。还有黄酮类及挥发油类\n【使用禁忌】孕妇忌服。\n【配伍药方】①治腰、四肢痛：石吊兰、杜仲各三钱。水煎服。（《湖南药物志》）\n②治热咳：岩豇豆、青鱼胆草、岩白菜各五钱。水煎服。（《贵阳民间药草》）" },

  {
    "id": 4,
    "price": 17.5,
    "name": "天南星",
    "key": "天南星",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/6e82e096-6615-49dc-af12-162b575ef427.jpg",
    "cat": 10,
    "brief": "文择轩中药材店铺白茯苓实体店品质批正品中草药大全专卖打粉药店",
    "alias": "【中药名】\n 天南星 tiannanxing\n【别名】\n山苞米、独脚莲、蛇包谷。\n【英文名】\nArisaematis Rhizoma。",
    "explain": "【药用部位】天南星科植物天南星Arisaema erubescens (Wall.) Schott的块茎。\n【植物形态】多年生草本。块茎扁球形。叶1片，稀2片，叶柄长达70厘米，绿色，叶片放射分裂，裂片7～20，无柄，披针形、长圆形至椭圆形，先端长渐尖，成线形长尾，尾长7厘米，基部狭窄，上面深绿色，下面粉绿色。花单性，雌雄异株，无花被，肉穗花序由叶柄鞘部抽出，具褐色斑纹；佛焰苞绿色，展开部分外卷，然后扩大成檐部，先端渐窄呈线形尾状；雄花序长2～2.5厘米，花密，雄蕊2～4；雌花序长约2厘米，下部常具钻形中性花。浆果红色。花期5～7月，果期8～9月。\n【产地分布】生于林下、灌丛中阴湿地。分布于东北及山东等地。\n【采收加工】秋、冬季茎叶枯萎时采挖，除去须根及外皮，干燥。\n【药材性状】扁球形，表面类白色或淡棕色，较光滑，顶端有凹陷的茎痕，周围有麻点状根痕，有的块茎周边有小扁球状侧芽。质坚硬，不易破碎，断面不平坦，白色，粉性。气微辛，味麻辣。\n【性味归经】性温，味苦、辛。归肺经、肝经、脾经。\n【功效与作用】燥湿化痰、祛风止痉、散结消肿。属化痰止咳平喘药下属分类的温化寒痰药。\n【临床应用】一般炮制后用，用量3～9克；用治顽痰咳嗽、风痰眩晕、中风痰壅、口眼歪斜、半身不遂、癫痫、惊风、破伤风。生用外治痈肿、蛇虫咬伤。\n【药理研究】果实含类似毒蕈碱样物质。有抗肿瘤作用，疗效较肯定，可望成为抗癌新药物，也可成为抗癫痫的辅助药。另有祛痰，镇静，抗惊厥，抗心律失常，抗氧化等作用。\n【主要成分】天南星的块茎含三萜皂苷、安息香酸、黏液质、氨茎酸、甘露醇、生物碱、L-脯氨酰-L-缬氨酸酐、L-缬氨酰-L-缬氨酸酐、芹菜素、掌叶半夏碱、芹菜素-6-C-阿拉伯糖-8-C-半乳糖苷、赖氨酸、胡萝卜苷、没食子酸、夏佛托苷、β-谷固醇等。\n【使用禁忌】孕妇慎用，有毒，生品内服宜慎，阴虚燥咳、热极、血虚动风者禁服。\n【配伍药方】①治头痛，偏正头风，痛攻眼目额角：天南星、川乌各等分，共研极细末，同莲须葱白捣烂作饼。贴太阳穴。(《全国中药成药处方集》止痛膏)\n②治痈疽疮肿：天南星60克，赤小豆90克，白及120克。上三味，各为细末，和匀，冷水调，摊上四面肿处，用绢压之。(《刘绢子鬼遗方》收脓散)\n③治乳赤肿、欲作痈者：天南星为细末，生姜自然汁调涂，自散。才作便用之。(《百一选方》)\n④治瘰疬：天南星、半夏等分为末，米醋或鸡子清调敷。(《潜斋简效方》)\n⑤治瘿瘤：生南星末，醋调敷之。(《外科证治全书》)" },

  {
    "id": 5,
    "price": 17.5,
    "name": "暴马丁香",
    "key": "暴马丁香",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/f51d60ee-a87d-4cf8-9dc1-67f7a568e03f.jpg",
    "cat": 10,
    "brief": "买2赠杯 帕拉蒂托马黛茶阿根廷正品原装进口马黛茶专用杯500g包邮",
    "alias": "【中药名】\n暴马丁香 baomadingxiang\n【别名】\n暴马子皮、白丁香、棒棒木、荷花丁香。\n【英文名】\nSyringae Cortex",
    "explain": "　【药用部位】木犀科植物暴马丁香Syringa reticulate (Blume.)Hara var.mandshurica (Maxim.)Hara的树皮。\n【植物形态】灌木或小乔木。高3～8米。树皮暗灰褐色，有横纹，小枝灰褐色，皮孔明显，椭圆形，外凸。单叶对生，叶柄长约l厘米；叶片卵形或广卵形，长5～12厘米，宽3～9厘米，先端渐尖，或呈尾状，或钝，基部通常广楔形或近圆形，全缘；上面淡绿色，有光泽，下面灰绿色，叶脉明显突起。夏季开白色花，多花形成疏大顶生圆锥花序，长15～25厘米；小花梗长1～2毫米；萼钟状，4裂；花冠4裂，管部较萼略长；雄蕊2，花丝较花冠裂片约长2倍，伸出花冠外。蒴果长圆形，长约2.3厘米，常有小瘤突，熟时2裂；种子每室2粒，周围具纸质翅。\n【产地分布】生于河岸、林缘及针阔叶混交林内。分布于我国东北、华北和西北各地。朝鲜、日本、俄罗斯也有。\n【采收加工】春秋两季剥取树皮，晒干。\n【药材性状】暴马丁香药材呈槽状或卷筒状，长短不一，厚2～4毫米，外表面暗灰褐色，嫩皮平滑，有光泽，表皮粗糙，有横纹，皮孔椭圆形，暗黄色；内表面淡黄褐色。质脆，易折断，断面不整齐。气微香，味苦。以皮厚、味苦者为佳。\n【性味归经】性微寒，味苦。归肺经。\n【功效与作用】清肺祛痰、止咳、平喘、利水。属化痰止咳平喘药下分类的清化热痰药。\n【临床应用】用量25～50克，煎服；或入丸、散。治疗痰喘咳嗽、慢性支气管炎、水肿。\n【药理研究】暴马丁香具有镇咳、祛痰、平喘作用；能减少三级以下支气管上皮细胞的肥大增生。经动物试验有镇咳、化痰、平喘作用。本品全皮和内皮水煎剂对肺炎双球菌、流感杆菌均有较强的抑制作用。动物实验表明本品无明显毒性。\n【化学成分】含挥发油、鞣质及甾体类物质、含紫丁香苷、蒿属香豆精、3，4-二羟基-β-羟乙基苯、暴马子醛酸甲酯等成分。\n【使用禁忌】尚不明确。\n【配伍药方】①治支气管炎、哮喘：暴马丁香60克，水煎至茶色，加入白糖15克，连煎3次，每晚服1次；或暴马丁香1500克，甘草90克，共切碎，加水500毫升，煎至300毫升，每次10毫升，每日3次。(《陕甘宁青中草药选》)\n②治慢性气管炎：暴马子、小檗各15克，松萝6克。水煎服。(《全国中草药汇编》)\n③治心脏性浮肿：暴马子30克。切碎，水煎，日服2次。(《吉林中草药》)" },

  {
    "id": 6,
    "price": 17.5,
    "name": "瓜葵",
    "key": "瓜葵",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/0b7020d2-3598-402c-86f9-2477fc1c54b0.jpg",
    "cat": 10,
    "brief": "纽恩堂 野西瓜500克g 中药材 新疆 小秋葵香铃草山西瓜秧野芝麻",
    "alias": "【中药名】\n瓜蒌 gualou\n【别名】\n栝楼、药瓜、肚瓜、大肚瓜、鸭屎瓜。\n【英文名】\nTrichosanthis Fructus。",
    "explain": "【药用部位】葫芦科植物栝楼Trichosanthes klrllowll Maxim.的成熟果实。\n【植物形态】多年生草质藤本。叶互生，具粗壮长柄；卷须腋生；叶形多变，通常近心形，不裂或掌状浅裂至中裂。雌雄异株，雄花数朵生于总梗先端，雌花单生；雄花有雄蕊3枚，花药聚药，成熟时分开，雌花子房下位。瓠果近球形，橙黄色。种子卵形。花期7～8月，果期9～10月。\n【产地分布】生于山坡林缘水边。分布于山东、河北、河南等地。\n【采收加工】待秋季果实成熟时，连果梗剪下，置通风处阴干。\n【药材性状】瓜蒌为类球形或宽椭圆形。表面橙黄色至橙红色，皱缩或较平滑，顶端有圆形的花柱残基。质脆，易破开，内表面黄白色，有红黄色丝络，果瓤橙黄色，粘稠，与多数种子粘结成团。气如焦糖；味微酸、甜。\n【性味归经】性寒，味甘、微苦。归肺经、大肠经、胃经。\n【功效与作用】清热涤痰、宽胸散结、润燥滑肠。属化痰止咳平喘药下属分类的清化热痰药。\n【临床应用】用量9～15克，煎汤内服；或入丸、散；外用：适量，捣敷。用治肺热咳嗽、痰浊黄稠、胸痹心痛、结胸痞满、乳痈、肺痈、肠痈肿痛、大便秘结。具有抗缺氧、抗心肌缺血、抗心律失常、抗血小板聚集的功能。\n【药理研究】扩张动脉冠；抗心肌缺血；改善微循环；抑制血小板凝集；耐缺氧；抗心律失常；抗溃疡；抗菌；抗癌；抗衰老。\n【化学成分】果实含丝氨酸蛋白酶、多种氨基酸及含挥发油。种子含三萜皂苷等多种成分。另含苜素、栝楼仁二醇、异栝楼仁二醇、香草酸、亚麻酸乙酯等成分。\n【使用禁忌】脾胃虚寒，大便不实，有寒痰、湿痰者不宜，不宜与川乌、制川乌、草乌、制草乌、附子同用。\n【相关药方】①治干咳无痰：熟瓜蒌捣烂绞汁，入蜜等分，加白矾3克，熬膏，频含咽汁。(《纲目》引《简便单方》)\n②治消渴小便多：瓜蒌薄切，炙，取150克，水五升，煮取四升，随意饮之。(《肘后方》)\n③治乳痈：栝楼30克，乳香3克。上为细末，每服3克，温酒调下。(《卫济宝书》栝楼散)\n④治胸痹不得卧，心痛彻背者：瓜蒌实一枚(捣)，薤白90克，半夏240克，白酒一升。上药同煮取四升，温服一升，日二服。(《金匮要略》瓜蒌薤白半夏汤)" },

  {
    "id": 7,
    "price": 17.5,
    "name": "海浮石",
    "key": "海浮石",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/b95f333e-e747-41f9-821b-bbd7bd449d02.jpg",
    "cat": 10,
    "brief": "海浮石中药材500克 海浮石精选 可磨海浮石粉 水花石正品新货",
    "alias": "【中药名】\n海浮石 fushen\n【别名】\n石花、海石、浮海石、浮石，小海石。\n【英文名】\nOs Costaziae。",
    "explain": "【药用部位】本品为胞孔科动物脊突苔虫Costazia aculeata Canu et Bassler的干燥骨骼，习称“石花”、或火山喷出的岩浆凝固形成的多孔状石块浮石Pumex，主含二氧化硅(SiO₂)，皆称“浮石”。\n【动物形态】脊突苔虫：固着生活的水生群体动物。雌雄同体。群体常呈树枝状。个体很小，为囊状。体外分泌石灰质及胶状物质，形成群体之骨骼。体前端有口，口缘有马蹄状的突起，其上生多数触手。消化管屈曲成“U”形，肛门亦在体之前端。\n【产地分布】常附着于海滨岩礁上。浮石产广东、福建、山东、辽宁等地。石花产浙江、广东、福建等地。\n【采收加工】浮石全年可采，以夏季为多。自海中捞出，晒干。脊突苔虫的骨骼6～10月间自海中捞出，用水洗去盐质及泥砂，晒干。\n【药材性状】石花：呈珊瑚样的不规则块状，大小不等。灰白色或灰黄色，表面多突起呈叉状分枝，中部交织如网状。体轻，入水不沉。质硬而脆，表面与断面均有多数细小孔道。气微腥，味微咸。\n【性味归经】性寒，味咸。归肺经、肾经。\n【功效与作用】清肺化痰，软坚散结。属化痰止咳平喘药下分类的清化热痰药。\n【临床应用】用量9～15克，海浮石未研成细粉者应先煎。用于肺热咳嗽痰稠，瘿瘤结核，小便淋沥，疮肿，目翳。\n【药理研究】有镇咳作用，其有效成分是碳酸钙，效果与蛇胆川贝末相似。\n【化学成分】海浮石主要含氧化硅，其实为氧化铝、氧化钾等。海石花主含碳酸钙。\n【使用禁忌】虚寒咳嗽忌服，脾胃虚弱者、孕妇、儿童慎用。\n【配伍药方】①治慢性支气管炎：海浮石30%。煅海蛤壳粉35%，海蚬壳粉30%，猪胆粉5%。混合均匀，制成0.8克片剂。每次4片，每日3次，开水送服。" },

  {
    "id": 8,
    "price": 17.5,
    "name": "海蛤壳",
    "key": "海蛤壳",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/ae7be15b-74ae-4c09-9818-57c9527aec1c.jpg",
    "cat": 10,
    "brief": "文择轩中药材店铺白茯苓实体店品质批正品中草药大全专卖打粉药店",
    "alias": "【中药名】\n海蛤壳 haigeke\n【别名】\n蛤壳、黄蛤、白利壳。\n【英文名】\nConcha Meretricis Seu Cyclinae。",
    "explain": "【药用部位】帘蛤科动物文蛤Meretrix meretrixL.的贝壳。\n【动物形态】贝壳呈扇形或类圆形，背缘略呈三角形，腹缘呈圆弧形，壳顶突出，位于背面，稍靠前方。壳外面光滑，被有一层黄褐色光亮如漆皮的壳，同心生长纹清晰，通常在背部有锯齿状或波纹状褐色花纹，壳内面白色，边缘无齿纹，前后缘有时略带紫色，铰合部较宽，右壳有主齿3个及前侧齿2个，左壳有主齿3个及前侧齿2个。\n【产地分布】生于浅海泥沙中。辽宁至海南岛沿海均有分布。\n【采收加工】春、秋季捕捞，去肉取壳，洗净晒干。\n【药材性状】扇形或类圆形，背缘略呈三角形，腹缘呈圆弧形，长3~10厘米，宽2~8厘米。壳顶突出，稍靠前方。外表面光滑，黄褐色，同心状生长纹清晰，背部常有锯齿状或波状褐色花纹。内面乳白色，边缘无齿纹。质坚硬，断面有层纹。气无，味淡。\n【性味归经】性微寒，味咸。归肺经、肝经、胃经\n【功效与作用】清肺、化痰、软坚、利水、制酸、敛疮。属化痰止咳平喘药下属分类的清化热痰药。\n【临床应用】用量10~15克，煎服或人丸、散；外用适量，研末撒或填敷。用治痰热咳嗽、瘿瘤、痰核、胁痛、湿热水肿、淋浊带下、胃痛泛酸、臁疮湿疹。\n【药理研究】海蛤壳有抗肿瘤作用;对免疫功能有双向调节作用。龀外还有抗炎、降血脂、抗血小板凝集作用。\n【化学成分】海蛤壳含碳酸钙、壳角质、甲壳素等。经测试含钙、钠、铝、钡、钴、铬、铜、铁、镁、锰、磷、锶、锌等元素。\n【使用禁忌】气虚有寒者不得用。\n【配伍药方】 ①治痰火咳嗽，面鼻发红者：青黛(水飞净)、蛤粉(新瓦煅)各9克。蜜丸指头大。临卧，噙化三丸。(《卫生鸿宝》青蛤丸)\n②治火郁肺胀，气急息重：海蛤粉、青黛、瓜蒌仁、诃子皮、香附、半夏各30克。姜汁糊丸。姜汤下30丸。(《杂病源流犀烛》海青丸)\n③治痰饮心痛：海蛤(烧为灰，研极细，过数日，火毒散，用之)，瓜蒌仁(蒂穗同研)。上以海蛤入瓜蒌内，干湿得所为丸。每服五十丸。(《医学纲目》)\n④治下疳疮并脓疮：蛤粉、腊茶、苦参、密陀僧。为末。河水洗净，腊猪油调敷。(《外科理例》)\n⑤治阴汗：蛤粉、牡蛎粉等分。为细末。绢袋盛扑。(《古今医统》珍珠散)\n⑥治妇人伤寒血结胸膈，揉而痛，不可抚近：海蛤、滑石、甘草(炙)各30克，芒硝15克。上捣罗为散。每服6克，鸡子清调下。(《类证活人书》海蛤散)\n⑦治血痢内热：海蛤末蜜水调服9克，日二。(刘禹锡《传信方》)\n⑧治痰积泻：海蛤粉30克，青黛9克，黄芩6克，神曲30克，留半煮丸梧桐子大。每二三十丸，白汤下。(《医学入门》海青丸)" },

  {
    "id": 9,
    "price": 17.5,
    "name": "白兰花",
    "key": "白兰花",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/dfd23357-b402-4395-8d92-f05e1934b523.jpg",
    "cat": 10,
    "brief": "白兰花盆栽花卉植物室内花四季黄角兰白玉兰花树苗老桩带花苞开花",
    "alias": "【中药名】\n白兰花 bailanhua\n【别名】\n白兰、白玉兰、白缅花。\n【英文名】\nMicheliae Albae Flos。",
    "explain": "【药用部位】来源于木兰科植物白兰Michetia alba DC.的花。\n【植物形态】常绿乔木。高达10～20米(江、浙等地天气较寒，常呈灌木状，高仅1～2米)，树皮灰色，幼枝和芽被白色柔毛。叶薄革质，互生，卵状椭圆形或长圆形，长10～25厘米，宽4～9厘米，两端均渐狭，两面无毛或于下面被疏毛，小脉网状；叶柄长1.5～2厘米，上有短的托叶痕迹，约为柄全长的1/3或1/4。花白色，单花腋生，极香，长3～4厘米；萼片长圆形，花瓣线状，长3,2厘米；雄蕊多数，多列，花丝扁平；心皮多数，胚珠在每心皮内多于2，螺旋状排列于延长有柄的花托上，子房被毛，柱头头状。果近球形，由多数开裂的心皮组成，多不结实。花期7月。\n【产地分布】生于路旁或庭院中。分布于福建、广东、广西、云南、四川、江苏、浙江、安徽、江西等地。\n【采收加工】夏末秋初花开时采收，鲜用或晒干。\n【药材性状】干燥花呈狭钟形，长2～3厘米，红棕色至棕褐色。花被片多为12片，外轮狭披针形，内轮较小；雄蕊多数，花药条形，淡黄棕色，花丝短，易脱落；心皮多数，分离，柱头褐色，外弯，花柱密被灰黄色细绒毛。花梗长2～6毫米，密被灰黄色细绒毛。质脆，易破碎。气芳香，味淡。\n【性味归经】性温，味苦、辛。归肺经、胃经。\n【功效与作用】止咳、化浊。属化痰止咳平喘药下属分类的止咳平喘药。\n【临床应用】用量10～15克。用治胸闷腹胀、中暑、咳嗽、慢性支气管炎、前列腺炎、妇女白带。\n【药理研究】用白玉兰花蒸馏液(1：4)做动物实验，镇咳(氨水引咳法)、祛痰(酚红法)、平喘(组织胺致喘)作用都不强。加入了哥王及地龙等制成复方，则可提高疗效。白兰花挥发油对4种细菌大肠杆菌、金黄色葡萄球菌、枯草芽孢杆菌、水稻黄单胞菌均有抑制作用,对枯草芽孢杆菌和水稻黄单胞菌抑制效果较好\n【化学成分】花含挥发油，主成分为d,1-α-甲基丁酸甲酯，另含芳樟醇，α-甲基丁酸乙酯，乙醛，乙酸甲酯，丙酸甲酯，异丁酸甲酯，丙酸乙酯，丁酸甲酯，己酸甲酯，戊酸丁酯，α-水芹烯，β-蒎烯，月桂烯，柠檬烯，苯甲酸甲酯，沉香醇，罗勒烯，别罗勒烯，3-甲基丁酸乙酯，顺式氧化芳樟醇，甲基丁香油酚，甲基异丁香。叶含生物碱、挥发油、酚类。鲜叶含油0.7%，油主要成分为芳樟醇、甲基丁香油酚和苯乙醇。根和茎皮含黄心树宁碱、氧化黄心树宁碱、柳叶木兰碱和白兰花碱。\n【使用禁忌】尚不明确，谨慎用药。\n【配伍药方】①治湿阻中焦，气滞腹胀：白兰花5克，厚朴10克，陈皮5克。水煎服。（《四川中药志》1979年版）\n②治中暑头晕胸闷：白兰花5～7朵，茶叶少许。开水泡服。（《福建药物志》）\n③治脾虚湿盛的白带：白兰花10克，苡仁30克，白扁豆30克，车前子5克。煎服。（《四川中药志》1979年版）\n④治咳嗽：玉兰花5～7朵。水煎调蜂蜜适量服，每日1剂。（《福建药物志》）" },

  {
    "id": 10,
    "price": 17.5,
    "name": "白屈菜",
    "key": "白屈菜",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/36f56e30-77f5-4a82-8f18-c7d957cda859.jpg",
    "cat": 10,
    "brief": "白兰花盆栽花卉植物室内花四季黄角兰白玉兰花树苗老桩带花苞开花",
    "alias": "【正名】\n白屈菜\n【别名】\n地黄连、牛金花、断肠草、八步紧、雄黄草。\n【英文名】\nChelidonii Herba。",
    "explain": "　【药材来源】罂栗科植物白屈菜Chelidonium majus L.的带花全草。\n【植物形态】多年生草本。主根圆锥状，土黄色。茎直立，高30～100厘米，多分枝，有白粉，疏生白色细长柔毛，断之有黄色乳汁。叶互生，1～2回单数羽状全裂；全裂片5～8对，不规则深裂，上面近无毛，下面疏生短柔毛，有白粉；茎生叶与基生叶形相同。花数朵，近伞状排列，苞片小，卵形，花柄丝状，有短柔毛；萼片2，早落，椭圆形，外面疏生柔毛；花瓣4，黄色，卵圆形，雄蕊多数，花丝黄色；雌蕊1，无毛，花柱短。蒴果条状圆柱形，长达3.5厘米。种子多数，卵形，细小，黑褐色，有光泽及网纹。花期5～7月，果期6～8月。\n【产地分布】生于山坡或山谷林边草地。分布于我国东北、江苏、山东等地。\n【采收加工】5～7月开花时采收地上部分，置通风处干燥，切段。\n【药材性状】白屈菜药材的根圆柱形，多有分枝，密生须根。茎干瘪中空，表面黄绿色，有白粉。叶互生，多皱缩，破碎，完整者展平后为1～2回羽状分裂，裂片近对生，先端钝，边缘具不整齐的缺刻，上表面黄绿色，下表面灰绿色，具白色柔毛，脉上尤多。花瓣4，卵圆形，黄色；雄蕊多数，雌蕊1枚。蒴果细圆柱形。种子多数，卵状，细小，表面黑色。气微，味微苦。\n【性味归经】性温，味苦。归肺经、胃经。\n【功效与作用】破瘀止血、解痉止痛，止咳平喘。属化痰止咳平喘药下属分类的止咳平喘药。\n【临床应用】用量9～18克，煎服；外用适量，捣敷患处。用治胃脘挛痛，咳嗽气喘，百日咳、水肿。\n【药理研究】白屈菜和白屈菜碱均具有类似吗啡的镇痛作用；白屈菜总提取物有利胆作用；白屈菜注射液对平滑肌有解痉作用；白屈菜总生物碱有镇咳、平喘作用；白屈菜成分血根碱和白屈菜红碱均具抗炎作用；白屈菜粗制剂在体外可抑制甲型链球菌、肺炎链球菌、流感嗜血杆菌和其他革兰阳性细菌，在体内有抑制结核杆菌的作用；白屈菜的甲醇提取物对小鼠艾氏癌和肉瘤S180有明显的抑瘤作用。\n【化学成分】含白屈菜碱、白屈菜红碱、血根碱、氧化白屈菜碱、原阿片碱、β-别隐品碱、DL-四氢黄连碱、小檗碱、白屈菜酸、苹果酸、柠檬酸、琥珀酸。另含皂苷、强心苷及黄酮醇、白屈菜醇等。\n【使用禁忌】生药有毒，使用请注意。\n【配伍药方】1.治慢性胃炎，胃肠道痉挛性疼痛。白屈菜、橙皮。上药按2：1比例，用50%乙醇浸泡，制成酊剂(每1毫升含生药200毫克)，每次5毫升，每日3次。(《全国中草药汇编》)\n2.治胃癌：白屈菜八分，蒲公英、刀豆壳各三钱。水煎服。(《文堂集验方》)\n3.治肠炎，痢疾：白屈菜12克，叶下珠30克。水煎服。(《四川中药志》1982年版)" },

  {
    "id": 11,
    "price": 17.5,
    "name": "千日红",
    "key": "千日红",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/f7b95737-f512-47ec-8121-c754e7e0ad0b.jpg",
    "cat": 10,
    "brief": "千日红500g千日红干花散装正品另售红巧梅另售特级花茶花草茶叶",
    "alias": "【中药名】\n千日红 qianrihong\n【别名】\n千年红、吕宋菊、球形鸡冠花、百日红、千金红。\n【英文名】\nFlos Gomphrenae。",
    "explain": "【药用部位】苋科植物千日红Gomphrena globosaL.的头状花序。\n【植物形态】一年生草本，高30～80厘米，全株有白色长毛。茎近四棱形，节部膨大，带紫红色。叶对生，具短柄；叶片长椭圆形至椭圆状披针形，长5～10厘米，宽2～5厘米，两面均有较长的白柔毛，边缘有纤毛。花序球形或长圆形，通常单生于枝顶，总苞2枚，叶状，每花基部有干膜质卵形苞片1枚，三角状披针形小苞片2枚，紫红色或白色；花被片5，外被白柔毛；雄蕊5，花丝合生呈管状；子房卵圆形，柱头2裂。胞果近圆形，种子黑色。花期7～10月。\n【产地分布】我国各地均有栽培。\n【采收加工】花期较长，8～11月初采摘，以9月采摘为宜，晒干。全草7～9月采收，晒干。\n【药材性状】头状花序类球形或长圆球形，长2～2.5厘米，宽1.5～2厘米，由多数稠密覆瓦状排列的花集合而成；花序基部具2枚叶状圆三角形的总苞片，绿色，总苞片的背面密被细长的白柔毛，腹面的毛短而稀。每花有膜质苞片3枚，外片短小卵形，内轮2片，淡紫色或紫红色，长于花被，花被5片，贮久色淡。胞果类球形。气微弱，味淡。\n【性味归经】性平，味甘。归肺经、肝经。\n【功效与作用】化痰止咳平喘、清肝明目经止惊。属化痰止咳平喘药下属分类的止咳平喘药。\n【临床应用】用量3～10克，煎汤内服；或煎水洗；或捣敷外用。用治急慢性支气管炎、支气管哮喘、百日咳等；头痛、目赤、肝火头痛眩晕；小儿惊风、夜啼；赤白痢疾。\n【药理研究】小鼠酚红排泌法，表明本品的提出物总黄酮、皂苷和挥发油均具有祛痰作用；组胺引喘法证明，水煎液和总氨基酸部分对豚鼠有一定平喘作用。\n【化学成分】含千日红苷I、千日红苷Ⅱ、千日红苷Ⅲ、千日红苷V、千日红苷Ⅵ，苋菜红苷、异苋菜红苷、甜菜苷。\n【使用禁忌】尚不明确、谨慎用药。\n【配伍药方】①治慢性支气管炎，支气管哮喘：千日红花(白色)20朵，枇杷叶5片，杜衡根0.9克。水煎，加冰糖适量冲服。(《浙江药用植物志》)\n②治风热头痛，目赤肿痛：千日红、钩藤各15克，僵蚕6克，菊花10克。水煎服。(《四川中药志》1979年版)\n③治咯血：千日红花10朵，仙鹤草9克。煎水，加冰糖适量服。(《安徽中草药》)\n④治小儿腹胀：千日红5克，莱菔子6克。煎服。(《安徽中草药》)\n⑤治小儿夜啼：千日红鲜花序5朵，蝉衣3个，菊花2克。水煎服。(《福建中草药》)" },

  {
    "id": 12,
    "price": 17.5,
    "name": "猪胆粉",
    "key": "猪胆粉",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/5c4f7a1d-7211-40cb-adb7-1e52050827cb.jpg",
    "cat": 10,
    "brief": "野生龙胆草粉500g克正品中药材龙胆粉胆草粉苦胆草粉中草药泡茶",
    "alias": "【中药名】\n猪胆粉\n【别名】\n猪胆汁\n【英文名】\nSuis Fellis Pulvis。",
    "explain": "【药材来源】猪科动物猪Sus scrofa domestica Brisson胆汁的干燥品。\n【动物形态】猪躯体肥胖，头大。鼻与口吻皆长，略向上屈。眼小。耳壳有的大而下垂，有的较小而前挺。四肢短小，4趾，前2趾有悬蹄。颈粗，项背疏生鬃毛。尾短小，末端有毛丛。毛有纯黑色、纯白色，或黑白色混杂等。\n【产地分布】我国大部分地区有饲养。\n【采收加工】宰杀后，剖取胆囊，取胆汁，滤过，干燥、粉碎即得。\n【药材性状】猪胆粉呈黄色、灰黄色粉末。气微腥，味苦，易吸潮。\n【性味归经】性寒，味苦。归肝经、胆经、肺经、大肠经。\n【功效与作用】清热、润燥、解毒、止咳平喘。属化痰止咳平喘药下属分类的止咳平喘药。\n【临床应用】用量0.3～0.6克，冲服或入丸散；外用适量，研末或水调涂敷患处。猪胆粉用治热病燥渴、目赤、喉痹、黄疸、百日咳、哮喘、泄泻、痢疾、便秘、痈疮肿毒。\n【药理研究】猪胆汁、猪胆粉、猪胆汁酸及其盐类对多种细菌有抗菌作用；猪胆粉对热水烫伤所致炎症有抑制作用；猪胆汁提取物对小鼠迟发性超敏反应DTH有抑制作用；5%猪胆汁提取物对体外培养的人阴道毛滴虫有显著裂解作用；猪胆汁及其提取物能杀灭精子；小鼠灌服猪胆粉有明显镇静作用；猪胆酸及其盐类有明显抗惊厥作用；猪胆酸及其盐类和胆红素均有一定解热作用。此外，猪胆粉及其提取物还具有调血脂、抗氧化、利胆溶石、抗癌和止咳化痰、平喘作用。\n【化学成分】猪胆粉含胆汁酸(如鹅去氧胆酸)、胆色素(如胆红素)、卵磷脂、脂肪酸、蛋白质、胆碱、胆固醇、还原糖，另含氯、钠、镁、钾、钙、铁等无机成分。\n【使用禁忌】尚不明确。\n【配伍药方】1.治小儿百日咳，感冒咳嗽：猪胆粉12克，淀粉35克，糖粉12克。以上三味，混匀，用50%乙醇作润湿剂，制粒，干燥，整粒，加入适量硬脂酸镁，混匀，压片，每片含猪胆粉12毫克，包糖衣。口服，6个月以内，每次1片，6个月～1岁，每次1片半，1～4岁，每次2片，4～7岁，每次2～3片，每日两次。(《贵州药品标准》1983版·小儿百咳灵片)\n2.治头癣：猪胆1个取汁，雄黄9克。雄黄为末，又猪胆汁调成糊状，涂患处。(《内蒙古药用动物》)\n3.治痔疮：猪胆七枚(取汁)，以建盏盛炭火熬成膏，用单纸摊敷。须先用槐根取白皮煎汤温洗，然后敷药。(《直指方》猪胆膏)\n4.治胆囊炎：经煎干的猪胆汗(猪胆粉)30克，姜黄30克，郁金30克，共研末。每日3次，每次服9克，用茵陈30克，煎水冲服。(《广西药用动物 》)" }] },



{
  "id": 7,
  "name": "泻下",
  "foods": [{
    "id": 1,
    "price": 17.5,
    "name": "大黄",
    "key": "大黄",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/3e21cd04-c3bd-4949-8a78-cbc5e6f8cd20.jpg",
    "cat": 10,
    "brief": "野生川大黄500g中药材酒制大黄川军唐古特熟大黄可磨粉药用大黄",
    "alias": "【中药名】\n大黄 dahuang\n【别名】\n将军、南大黄、牛舌大黄。\n【英文名】\nRhei Radix Et Rhizoma。",
    "explain": "【药用部位】蓼科植物掌叶大黄Rheum palmatum, L.、唐古特大黄Rheum tanguticum Maxim. ex Balf.或药用大黄Rheumoj-flcinale Baill.的干燥根和根茎。\n【植物形态】多年生高大草本。根状茎及根部肥厚，黄褐色。茎上疏被短柔毛，节处较密，中空。基生叶有肉质粗壮的长柄，约与叶片等长，叶片圆形或卵圆形，掌状浅裂，裂片呈大齿形或宽三角形，基部略呈心形，上面近叶脉处具小乳突，下面被柔毛；茎生叶较小，互生，具短柄；托叶鞘状，膜质，密生短柔毛。圆锥花序顶生；花小，花被黄白色；花梗纤细，中下部有关节；花被片6，2轮，内轮稍大，椭圆形；雄蕊9枚；花柱3，柱头头状。瘦果有3棱，沿棱生翅，顶端微凹，基部略呈心形，红色。花期6～7月，果期7～8月。\n【产地分布】生于山地林缘或草坡，野生或栽培。分布于四川、云南、贵州、湖北等地。\n【采收加工】秋末茎叶枯萎或次春发芽前采挖，除去细根，刮去外皮，切瓣或段，绳穿成串干燥或直接干燥。\n【药材性状】类圆柱形、圆锥形、卵圆形或不规则块状，长3～17厘米，直径3～10厘米。除净外皮者表面黄棕色至红棕色，有的可见类白色网状纹理,残留的外皮棕褐色，多具绳孔及粗皱纹。质坚实，有的中心稍松软，断面淡红棕色或黄棕色，显颗粒性；根茎髓部宽广.有星点环列或散在；根木部发达，具放射状纹理，形成层明显，无星点。气清香，味苦而微涩，嚼之粘牙，有沙粒感。\n【性味归经】性寒，味苦。归脾经、胃经、大肠经、肝经、心包经。\n【功效与作用】泻热通便、凉血解毒、逐瘀通经。属泻下药下属分类的攻下药。\n【临床应用】用量3～30克，煎服。用治实热便秘、积滞腹痛、泻痢不爽、湿热黄疸、血热吐衄、目赤、咽肿、肠痈疔疮、瘀血经闭、跌打损伤。外用适量，治水火烫伤、上消化道出血。\n【药理研究】泻下成分为结合性蒽醌苷类，抑菌成分为游离性蒽醌。大黄不含土大黄苷，可作为鉴别正、伪品的依据之一。动物实验表明，提取物有泻下、抑菌、止血、促进胆汁分泌、降脂、降压和抗肿瘤作用，对消化系统有导泻、利胆、保肝、抗胃和十二指肠溃疡、兴奋肠管平滑肌的作用。\n【化学成分】本品主要含芦荟大黄素、大黄 酚、大黄素甲醚、大黄酸、大黄素等成分。\n【使用禁忌】凡表证未罢，血虚气弱，脾胃虚寒，无实热、积滞、瘀结，以及胎前、产后，都要慎服，生大黄内服可能发生恶心、呕吐、腹痛等副反应，一般停药后即可缓解。\n【相关药方】①治水肿，利小便：大黄、白术、防己各等分。为末，蜜丸如梧桐子大。米饮下十丸。小便利为度，不知增之。(《普济方》大黄丸)\n②治热痈肿毒：大黄45克，白及30克，朴硝60克。上为末，井水调搽，干则润之。(《景岳全书》大黄捣毒散)\n③治大便不通：大黄(锉，炒)150克、大麻仁(研)60克。上为末。炼蜜丸梧桐子大。每服十丸，食后熟水下。(《济方》大黄丸)\n④治伤寒七八日，身黄如橘子色，小便不利，腹微满：茵陈蒿180克，栀子(擘)十四枚，大黄(去皮)90克。上三味，以水一斗二升，先煮茵陈，减六升，内二味，煮取三升，去滓。分三服，小便当利，尿如皂荚汁状，色正赤。一宿腹减。黄从小便去也。(《伤寒论》茵陈蒿汤)" },

  {
    "id": 2,
    "name": "芦荟",
    "key": "芦荟",
    "price": 17.5,
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/7323f885-3487-4813-a2c3-76910d450909.jpg",
    "cat": 10,
    "brief": "库拉索芦荟叶片美容院灌肤专用可敷脸植物新鲜可食用美容芦荟盆栽",
    "alias": "【中药名】\n芦荟 luhui\n【别名】\n奴荟、透明芦荟、象胆、奴会、劳伟。\n【英文名】\nAloe",
    "explain": "【药用部位】百合科植物库拉索芦荟Aloe barbadensis Miller.的叶汁浓缩干燥物。\n【植物形态】多年生肉质草本。茎极短。叶簇生于茎顶，近于直立，肥厚多汁；叶片呈狭披针形，先端长渐尖，基部宽阔，粉绿色，边缘有刺状小齿。花茎单生或稍分枝；总状花序疏散，位于花序下部的花下垂，黄色或有赤色斑点；花被管状，先端6裂，裂片稍外弯；雄蕊6枚，花药“丁”字形着生；雌蕊1枚，3室，每室有多数胚珠。蒴果，三角形，室背开裂。\n【产地分布】原产于非洲北部，目前，在南美洲及西印度群岛广泛栽培；美国大量种植。我国南部部分地区有引种栽培。\n【采收加工】全年均可采。自基部割取叶片，收集流出的液汁于容器中，蒸发浓缩至适当的浓度，任其逐渐冷却凝固，即得。\n【药材性状】不规则块状，常破碎为多角形，大小不一。表面呈暗红褐色或深褐色，无光泽。体轻，质硬，不易破碎，断面粗糙或显麻纹。富吸湿性。有特殊臭气，味极苦。\n【性味归经】性寒，味苦。归大肠经、胃经、肝经。\n【功效与作用】清肝热、通便、杀虫疗疳。属泻下药下属分类的攻下药。\n【临床应用】用量2～5克，煎服；外用适量，研末敷患处。用治便秘、小儿疳积、惊风；外治湿癣。\n【药理研究】具有致泻、抗菌、抗肿瘤作用，能延长肉瘤小鼠生存期；具有保肝功能和抗胃损伤作用，使用后肠腔水分增加导致腹泻；具有治疗组织损伤作用，对皮肤有防护作用；可刺激成纤维细胞的生长；影响免疫系统的功能等；能促进伤口愈合、抗炎并能增强免疫。\n【化学成分】主要含芦荟大黄素苷、异芦荟大黄素苷、芦荟苦素、月桂酸、芦荟宁等成分。\n【使用禁忌】孕妇忌服。凡几脾胃虚寒作泻及不思食者禁用。\n【配伍药方】①治癣疮：芦荟、大黄为末敷之。(《丹溪治法心要》)\n②治大便不通：芦荟(研细)21克，朱砂(研如飞面)15克，滴好酒和丸，每服9克，酒吞。(《本草经疏》)\n③治慢性肝炎活动期、肝原性低热：芦荟、胡黄连各1.5克，黄柏3克。水泛为丸，每次吞服3克，每日2次。(《浙江药用植物志》)\n④治脑壅头痛：芦荟(研)、龙脑(研)、瓜蒂(捣)、滑石(研)。上四味，等分为末。每用一豆许，吹之神验。(《圣济总录》吹鼻散)\n⑤治小儿疳，杀虫：芦荟、芜荑、木香、鹤虱各15克。上为末。水浸炊饼，丸如黄米大。每服十丸，米饮下。(《普济方》芦荟丸)" },

  {
    "id": 3,
    "price": 17.5,
    "name": "芒硝",
    "key": "芒硝",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/002ad429-f3a4-4300-b4b0-a8091fa8c6ff.jpg",
    "cat": 10,
    "brief": "芒硝中药500g克外敷纯度高芒硝粉医用皮硝送回奶外敷袋另有大黄粉",
    "alias": "【中药名】\n芒硝 mangxiao\n【别名】\n朴硝、皮硝、风化硝、马牙消、盆消。\n【英文名】\nNatrii Sulfas",
    "explain": "【来源】硫酸盐类矿物芒硝族芒硝Mirabilite，经加工精制而成的结晶体。\n【产地分布】分布于河北、天津、河南、山西、陕西、山东、内蒙古、江苏、安徽、福建、湖北、四川、云南、贵州、青海、新疆等地。以河北、天津、山东、河南、江苏、安徽、山西等地产量较大。\n【采收加工】全年可采制，以秋、冬季为好。取天然产的不纯芒硝，加水溶解，放置，使杂质沉淀，再过滤，滤液加热浓缩，放冷析出结晶，取出晾干。上层结晶为芒硝，下层结晶为朴硝。如结晶不纯，可重复处理，直至获得洁净的芒硝结晶。\n【药材性状】棱柱状、长方形或不规则结晶，两端不整齐，大小不一。无色透明，表面有直棱，暴露空气中则表面渐风化而覆盖一层白色粉末。具玻璃样光泽。质脆，易碎，条痕白色。断口不整齐。无臭，味苦、咸。\n【性味归经】性寒，味咸、苦。归胃经、大肠经。\n【功效与作用】泻热通便、润燥软坚、清火消肿。属泻下药下属分类的攻下药。\n【临床应用】用量6～12克，一般不入煎剂，待汤剂煎得后，溶入汤剂中服用；外用适量。用治实热便秘、大便燥结、积滞腹痛、肠痈肿痛、乳痈、痔疮肿痛。\n【药理研究】芒硝为渗透性泻下药，口服后在肠中形成高渗盐溶液状态，促使肠道蠕动而致泻。以芒硝为主的方剂有显著的抗炎、抗菌及溶解胆结石作用。\n【化学成分】芒硝主含含水硫酸钠，并常夹杂微量氯化钠、硫酸钙和硫酸镁等杂质。\n【使用禁忌】不宜与三棱同用，孕妇禁用。\n【配伍药方】 ①治眼有翳：芒硝30克。置铜器中，急火上炼之，放冷后，以生绢细罗，点眼角，每夜欲卧时一度点。(《孙真人食忌》)\n②治乳蛾：芒硝4.5克，胆矾2.4克，雄黄2.4克，明矾2.4克。俱研细，和匀，吹入喉中。(《医学广笔记》)\n③治皮下瘀血肿，静脉炎，乳腺炎及回乳：取芒硝适量，用凉水搅拌均匀，敷于患处(以能敷满患处，厚度约0.25厘米为宜)，外用白布裹之，药干燥时可掸之以凉水，务使经常保持湿润，每日换药1次。[《中医杂志》1983，(7)：39]\n④治火丹毒：水调芒硝涂之。(《梅师集验方》)\n⑤治痔疮肿痛：芒硝30克(或加马齿苋60克)。水煎熏洗。(《全国中草药汇编》)\n⑥治漆性皮炎：取芒硝20～100克放入容器内，\n以适量开水冲搅溶化，用干净毛巾浸湿熏洗患部，每日3～4次。[《河南中医》1987，(3)：48]\n⑦治小儿鹅口：细研芒硝于舌上掺之，日三五度。(《简要济众方》)\n⑧治小便不通：芒硝3克研细，以龙眼肉包之，细嚼咽下，立愈。(《香祖笔记》)" },

  {
    "id": 4,
    "price": 17.5,
    "name": "玄明粉",
    "key": "玄明粉",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/43f77c21-1144-45fe-a22b-88e0dbc36f24.jpg",
    "cat": 10,
    "brief": "中药材店铺 玄明粉 正品元明粉 外敷 散装新货500g克包邮",
    "alias": "【中药名】\n玄明粉 xuanmingfen\n【别名】\n白龙粉、风化消、元明粉。\n【英文名】\nNatrii Sulfas Exsiccatus。",
    "explain": "【药用部位】为硫酸盐类芒硝族矿物无水芒硝Thenardite或芒硝Mirabilite经风化的干燥品。\n【矿物形态】晶体结构属斜方晶系。晶体呈双锥状、柱状、板状或粒状，集合体为散粒状、粉末状或块状。无色透明，或呈灰白、黄、黄褐等色，透明度亦降低。玻璃状或油脂状光泽。解理多组，完全、中等、不完全。硬度2.5～3。相对密度2.66～2.68。易溶于水，在潮湿空气中易水化，逐渐变成粉末状的芒硝。味微咸。\n【产地分布】天然无水芒硝产于含硫酸钠卤水的盐湖中，与芒硝、泻利盐、白钠镁矾、钙芒硝、石膏、泡碱、石盐等共生。主产于河北、天津、山东、河南、江苏、安徽、山西等海边地或盐场附近。\n【制作加工】于冬季干冷天气，取提净的芒硝放在竹匾内或用纸包裹，露置通风干燥处，令其风化，使水分消失，成为白色粉末即得。风化时气温不宜高于32℃，否则会溶于本身结晶水中，使芒硝液化而得不到玄明粉。此法所得玄明粉，常因风化不完全而残留一部分水分。又法：将芒硝放入瓷盆(忌用铁锅)内，再将盆放在水锅上加热，使结晶熔化，然后水分逐渐散失，而留存白色粉末。水分消失较上法彻底。\n【药材性状】本品为白色细粉末。无光泽，不透明。质疏松。无臭，味咸。有引湿性。\n【性味归经】性寒，味辛、咸。归胃经、大肠经。\n【功效与作用】泻热通便，润燥软坚，消肿散结。属泻下药下分类的攻下药。\n【临床应用】内服：溶入汤剂，用量10～15克；或入丸、散。外用：化水涂洗；或研细吹喉。主治实热积滞，大便秘结或热结旁流，脘腹胀痛，目赤肿痛，口疮咽肿，痈疽肿毒。\n【药理研究】抗促癌作用：用0.75%玄明粉掺人大鼠饲料，观察对0.3%胆盐食谱同时接受二甲肼(DMH)皮下注射之大鼠诱发肠癌的影响，实验结果证明，玄明粉具有明显抑制胆盐促癌作用，其机制可能为酸化肠内环境，抑制肠道细菌7旷脱羧酶活性，减少脱氧胆酸(DCA)及游离型DNA含量，降低肠上皮细胞DNA合成，减少S期细胞，降低对DMH敏感性。\n【化学成分】主含无水硫酸钠(Na₂SO₄)。由于产地及提炼方法不同，所含杂质及含量亦不同，常见的有硫酸钙(CaSO₄)，硫酸铁(Fe₂SO₄)，硫酸钾(K₂SO₄)。\n【使用禁忌】脾胃虚寒及孕妇禁服。忌食苦参\n【配伍药方】①治血热便秘等症：玄明粉三钱，当归尾五钱。煎汤调服。(《易简方论》玄明粉散)\n②治牙疼：风化牙硝或单芒硝研末，随左右鼻内吹之。(《普济方》)\n③治眼暴赤疼痛：玄明粉(生用风化朴飞便是)、炉甘石(烧通赤为度)各等分。上同研极细。每用药一粟米粒大，用新水一匙调药，点无时。(《御药院方》神应散)\n④治伤寒发狂：玄明粉二钱，朱砂一钱。末之，冷水服。(《伤寒蕴要》)" },

  {
    "id": 5,
    "price": 17.5,
    "name": "白苏子",
    "key": "白苏子",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/6acc694b-ca3b-450b-aff0-8d9c045e6b87.jpg",
    "cat": 10,
    "brief": "白苏子500克 白苏籽中药材香料食用可磨白苏籽粉苏子粉烧烤撒蘸料",
    "alias": "【中药名】\n白苏子 baisuzi\n【别名】\n荏子、玉苏子、玉竹子。\n【英文名】\nFruit of Common Perilla",
    "explain": "【药用部位】唇形科植物白苏Perilla frutescens (L.) Britt.的成熟果实。\n【植物形态】一年生直立草本。有香气，高0.5～1.5米。茎绿色，圆角四棱形，多分枝，除基部外，密生细长白毛。叶对生；叶片卵形或圆形，长3～9.5厘米，宽2～8厘米，先端急尖或渐尖，基部圆形或宽楔形，边缘有粗锯齿，两面均绿色而具毛，下面稍苍淡且有腺点；叶柄长10～45毫米，密被白毛。总状花序腋生及顶生；苞片卵形，先端急尖或尾状；萼钟状，具5齿和10条脉纹，分二唇，外面有毛及腺点，内面喉部有长柔毛1圈；花冠白色，管状，二唇形，外面有毛，内面中部有毛1圈，上唇2浅裂，裂片较宽，先端略凹，下唇3裂，两侧的裂片半圆形，中裂片横椭圆形，向下折屈；雄蕊4，2强，稍伸出，花丝无毛，花粉囊2室；子房4裂，花柱无毛，稍伸出，柱头2裂。小坚果褐色或灰白色，倒卵形，长约2毫米，径约1.7毫米。花期8～9月，果期9～10月。\n【产地分布】生于山脚路旁。分布于我国华东、中南及西南等地。\n【采收加工】8～10月果实成熟时割取地上部分，曝晒，脱粒，晒干。\n【药材性状】种子卵圆形或类球形，直径1.5～2.5毫米。表面灰色或淡灰色，有明显隆起的网状花纹，基部稍尖，有淡棕色果柄痕。果皮薄而脆，易压碎。种皮膜质，子叶富油质。气微香，味有油腻感。\n【性味归经】性温，味辛。归肺经、大肠经。\n【功效与作用】下气消痰、润肠通便。属泻下药分类下的润下药。\n【临床应用】用量5～10克。用治咳逆、痰喘、肠燥便秘。\n【药理研究】①调血脂作用：白苏子脂肪油给予高脂血症小鼠灌胃，可使其血清总胆固醇(TC)下降，显著降低血清TC和LDL-C(低密度脂蛋白胆固醇)含量，提高高密度脂蛋白胆固醇(HDL-C)/TC和HDL-C/LDL-C比值；降低血清三酰甘油(TG)作用较弱。②抗氧化作用：以白苏子脂肪油给小鼠灌胃，可增强小鼠肝脏内SOD活性，降低LPO含量以及抑制心、脑组织中脂褐素的生成。③抗肿瘤作用：含12%苏子油的食物给以N-甲基-N-亚硝基脲诱癌的大鼠喂饲，在35星期时观察到结肠癌发生率显著下降。④其他作用：白苏子油对过敏反应及炎症有抑制效果。白苏子油喂养的大鼠视网膜反射能力增强，对亮度辨别学习试验的正确反应率明显增高。含5%白苏子油的食物给易发脑中风的自发性高血压大鼠(SHR-SP)喂饲，白苏子油组大鼠收缩压比正常食物组和红花油组均显著降低，血小板聚集也下降。\n【化学成分】种子含脂肪油，主要是甘油三亚油酸酯和甘油三棕榈酸酯，挥发油主要是左旋紫苏醛、白苏烯酮、松茸醇和左旋芳樟醇。\n【使用禁忌】久虚，脾虚便滑者不宜。\n【配伍药方】治痰饮咳嗽：白苏子9～15克，橘皮9～15克。水煎服。（《福建药物志》）" },

  {
    "id": 6,
    "price": 17.5,
    "name": "蓖麻子",
    "key": "蓖麻子",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/b7e493a3-ecf8-45fb-9bb6-b7c33d702301.jpg",
    "cat": 10,
    "brief": "新货野生蓖麻子蓖麻籽500克包邮红大麻子中药材蓖麻仁蓖麻种子",
    "alias": "【中药名】\n蓖麻子 bimazi\n【别名】\n蓖麻仁、大麻子、红大麻子。\n【英文名】\nRicini Semen。",
    "explain": "【药用部位】大戟科植物蓖麻Ricinus communis L.的干燥成熟种子。\n【植物形态】一年生草本。株高1.5～2米。茎直立，分枝，中空。叶盾形，直径20～60厘米，掌状5～11裂，裂片卵形或窄卵形，缘具齿，无毛，叶柄长，托叶合生，早落，花单性，雌雄同株，无花瓣，聚伞圆锥花序，长约20厘米，顶生或与叶对生。雄花的萼3～5裂，直径约1厘米。雌花萼5裂，裂片不等大。蒴果，长圆形或近球形，长1.5～2.5厘米，直径1～1.4厘米。花期7～8月，果期9～10月。\n【产地分布】全国各地均有栽培。\n【采收加工】秋季采摘成熟果实，晒干，除去果壳，收集种子。\n【药材性状】呈椭圆形或卵形，稍扁，长0.9～1.8厘米，宽0.5～1厘米。表面光滑，有灰白色与黑褐色或黄棕色与红棕色相间的花斑纹。一面较平，一面较隆起，较平的一面有1条隆起的种脊；一端有灰白色或浅棕色突起的种阜。种皮薄而脆。胚乳肥厚，白色，富油性，子叶2，菲薄。气微，味微苦辛。\n【性味归经】性平，味甘、辛。归大肠经、肺经。\n【功效与作用】消肿拔毒，泻下通滞。属泻下药下属分类的润下药。\n【临床应用】内服：煎汤，用量2～5克，外用适量。用治大便燥结，痈疽肿毒，喉痹，瘰疬。\n【药理研究】泻下；抗肿瘤；抗艾滋病毒；抑制吞噬细胞功能；抑制细胞免疫；降血压与呼吸抑制；有退热作用。\n【化学成分】种子含蛋白质18%～26%，脂肪油64%～71%，碳水化合物2%，酚性物质2.50%，蓖麻毒蛋白及蓖麻碱0.087%～0.15%。种子还含凝集素和脂肪酶。种皮含30-去甲羽扇豆-3β-醇-20-酮。还含三酰甘油、亚油酸、磷脂酰胆碱、碱性蓖麻毒蛋白等成分。\n【使用禁忌】孕妇及便滑者忌服。\n【配伍药方】①治面上雀子斑：蓖麻子、密陀僧、硫黄各6克。上用羊髓和匀，临睡敷上、次早洗去。(《体仁汇编》)\n②治犬咬伤：蓖麻子五十粒。去壳。以井水研膏，先以盐水洗咬处，次以蓖麻膏贴。(《袖珍方》)\n③治风气头痛不可忍：乳香、蓖麻子等分。捣饼，随左右贴太阳穴。(《纲目》)\n④治耳聋：蓖麻一百颗(去皮)，大枣五枚(去皮、核)。上二味熟捣膏如杏大。纳耳中。(《千金要方》)\n⑤治子宫脱下：蓖麻子、枯矾等分。为末，安纸上托入.仍以蓖麻仁十四枚，研膏涂顶心。(《摘元方》)" },

  {
    "id": 7,
    "price": 17.5,
    "name": "番泻叶",
    "key": "番泻叶",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/5d3e5844-9503-4c76-a1fc-3d5bb806c757.jpg",
    "cat": 10,
    "brief": "番泻叶茶包片散装蕃泻叶潘粉颗粒天然排泄叶强力通秘茶宿便非500g",
    "alias": "【中药名】\n番泻叶 fanxieye\n【别名】\n旃那叶、泻叶、泡竹叶、翼泻叶。\n【英文名】\nSennae Folium。",
    "explain": "【药用部位】豆科植物狭叶番泻Cassia angustifolia Vahl或尖叶番泻Cassia acutifolia Delile的干燥小叶。\n【植物形态】狭叶番泻：小灌木，高达1米。叶为羽状复叶，具5～8对小叶，小叶具短柄。小叶片披针形，长23～46毫米，宽3.5～9毫米，先端渐尖，基部稍不对称，两面疏被毛近无毛，托叶卵状披针形，长2～4毫米。总状花序腋生，生花6～14朵，萼片5，长卵形，不等大，花瓣5，黄色，倒卵形，下面2瓣较大，雄蕊10，上部3枚不育且小形，中部4枚等长，下部3枚身下弯曲，花药略呈四方形，基部箭形，雌蕊弯曲呈镰刀状，子房具柄，疏被毛。荚果呈扁平长方形，长4～6厘米，宽1～1.7厘米，幼时疏被白毛，后渐脱落。种子4～7，略呈长方形而扁。花期9～12月，果期翌年3月。尖叶番泻：形态与狭叶番泻相似，主要不同点：小叶4～8对，小叶片长卵圆形，长1.3～1.7厘米，宽0.7～1.4厘米，先端急尖或月棘尖，叶基不对称，全缘，两面均有细短毛茸。夹果较宽，宽2～2.5厘米，先端尖突微小，不显，含种子6～7粒。\n【产地分布】原产于东非。在印度及巴基斯坦有大量栽培。我国云南也有小量引种栽培。\n【采收加工】春季花开时采收，除去泥沙，晒干。\n【药材性状】狭叶番泻：呈长卵形或卵状披针形，长1.5～5厘米，宽0.4～2厘米，叶端急尖，叶基稍不对称，全缘。上表面黄绿色，下表面浅黄绿色，无毛或近无毛，叶脉稍隆起。革质。气微弱而特异，味微苦，稍有黏性。尖叶番泻：呈披针形或长卵形，略卷曲，叶端短尖或微突，叶基不对称，两面均有细短毛茸。\n【性味归经】性寒，味甘、苦。归大肠经。\n【功效与作用】泻热行滞，通便，利水。属泻下药下属分类的润下药。\n【临床应用】用量2～6克，后下，或开水泡服。治疗热结积滞，便秘腹痛，水肿胀满。\n【药理研究】具有显著的泻下作用；止血；对多种细菌以及白色念珠菌和某些致病性皮肤真菌有抑制作用。可使降低的肠黏膜组胺含量恢复至正常水平，能阻断神经一肌肉接头冲动的传递，阻止乙酰胆碱与M受体的结合而使肌肉松弛。\n【化学成分】狭叶番泻叶含番泻甙A、B C、D，大黄酚，大黄素，大黄素甲醚，3-甲基-8-申氧基-2-乙酰基-1，6-萘二酚-6-O-β-D-葡萄糖甙，小叶中含山奈酚。尖叶番泻叶含番泻甙A、B、C、D，大黄素，大黄素甲醚，大黄酚。嫩叶中含山奈酚。此外，同属植物耳叶番泻叶含花白甙，树皮含多酚氧化酶。\n【使用禁忌】体虚及孕妇、经期及哺乳期禁服。用量过大，易致腹痛、恶心、呕吐。\n【配伍药方】①治胃弱消化不良，便秘腹胀、胸闷：番泻叶3克，生大黄2克，橘皮3克，黄连1.5克，丁香2克，生姜3克。沸开水100毫升，温浸2小时，去渣滤过，每日3次分服。(《现代实用中药》)" },

  {
    "id": 8,
    "price": 17.5,
    "name": "何首乌",
    "key": "何首乌",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/72302c5b-dfd0-4660-ad1c-ee1e3b93cecc.jpg",
    "cat": 10,
    "brief": "买3送1何首乌药材野生正品制何首乌中药材泡茶泡水喝黑发茶250g",
    "alias": "【中药名】\n何首乌 heshouwu\n【别名】\n首乌、赤首乌、夜交藤根、生何首乌、何相公。\n【英文名】\nPolygoni Multiflori Radix。",
    "explain": "【药用部位】蓼科植物何首乌Polygonum multiflorum Thunb.的块根。\n【植物形态】多年生缠绕草本。块根肥大，外表红褐色至暗褐色。茎多分枝，下部稍木质化，上部较细，有时呈淡红色，具纵条纹，中空。叶互生，具长柄，卵状心形，先端渐尖，基部心形或近心形，全缘，两面较粗糙，无毛。托叶鞘状，膜质，无缘毛，常早落。花序圆锥状，顶生或腋生，开展；苞片卵形，中部绿色，边缘膜质透明，无毛；苞片内生白色小花2～4朵，花被片5，不等大，结果时外轮3片增大、肥厚，背部生宽翅，翅下延至花梗节处；雄蕊8枚，短于花被片；花柱3枚，柱头头状。瘦果三棱形，黑色，具光泽。花期10月，果期11月。\n【产地分布】生于山脚阳处、溪边、路旁及灌木丛中。分布于广东、贵州、广西、河南、江苏等地。\n【采收加工】秋、冬季叶枯萎时采挖，削去两端，洗净，个大的切成块，干燥。\n【药材性状】何首乌呈团块状或不规则纺锤形。表面红棕色或红褐色，皱缩不平，有浅沟，并有横长皮孔及细根痕。体重，质坚实，不易折断，断面浅黄棕色或浅红棕色，显粉性，皮部有4～11个类圆形异型维管束环列，形成云锦状花纹，中央木部较大，有的呈木心。气微，味微苦而甘涩。\n【性味归经】性温，味苦、甘、涩。归肝经、肾经、心经。\n【功效与作用】解毒、消痈、润肠通便。属泻下药下分类的润下药。\n【临床应用】用量6～12克，煎服。用治瘰疬疮痈、风疹瘙痒、肠燥便秘、高血脂。\n【药理研究】何首乌具抗衰老、增强免疫、促进肾上腺皮质的功效与作用。能促进血细胞新生和发育、调节血脂和抗动脉粥样硬化，并具保肝作用。抗动脉粥样硬化；延缓衰老；可增加离体兔心的冠脉血流量，可拮抗脑垂体后叶素引起的心率减慢，但对脑垂体后叶素引起的心律失常无拮抗作用；抗菌。\n【化学成分】何首乌含蒽醌类化合物，其中大黄素-8-0-B-D-葡萄糖苷是何首乌中促智的活性成分之一；醌类成分二苯乙烯苷2，3，5，4-四羟基二苯乙烯一2-0-B-D-葡萄糖苷具有广泛的心血管活性、免疫调节、保肝作用等，酰胺化合物有穆坪马兜酰胺、N-反式阿魏酰基-3-甲基多巴胺等；色原酮类有7一羟基.2，5.二甲基色原酮等；以二苯乙烯苷，为抗衰老、降血脂的活性成分。另含的2，3，5，4-四羟基二苯乙烯-2-0-(6”-O-a-D-吡喃葡萄糖)-B-D-葡萄糖苷具抑制血管平滑肌细胞增殖活性作用。另含芦荟大黄素、大黄酚、大黄酚葸酮、大黄素、大黄素甲醚、大黄酸、云杉新苷等。\n【使用禁忌】大便清泄及有湿痰者不宜，忌铁器。\n【配伍药方】1.治疟疾：何首乌20克，甘草2克，小儿酌减。每日1剂，浓煎2小时，分3次食前服用，连用2天。[《广东医学·祖国医学版》1964，(4)：31]\n2.治遍身疮肿痒痛：防风、苦参、何首乌、薄荷各等分。上为粗末，每用药15克，水、酒各一半，共用一斗六升，煎十沸，热洗，于避风处睡一觉。(《外科精要》何首乌散)\n3.治大肠风毒，泻血不止：何首乌60克，捣细罗为散。每于食前，以温粥饮调下3克。(《圣惠方》)\n4.治自汗不止：何首乌末，津调，封脐中。(《濒湖集简方》)\n5.治破伤血出：何首乌末敷之即止。(《卫生杂志》)" },

  {
    "id": 9,
    "price": 17.5,
    "name": "巴豆",
    "key": "巴豆",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/62361e45-6ec4-40fa-b9da-ed64a38b3925.jpg",
    "cat": 10,
    "brief": "中药材苦豆子 芦巴豆 芦巴子 季豆 香豆子 香苜蓿 500克包邮",
    "alias": "【中药名】\n巴豆 badou\n【别名】\n毒鱼子、巴仁、老阳子、芒子、药子仁。\n【英文名】\nCrotonis Fructus。",
    "explain": "【药用部位】大戟科植物巴豆Croton tiglium L.的成熟果实。\n【植物形态】常绿小乔木。树皮深灰色，平滑，幼枝绿色，被稀疏星状柔毛；老枝具不明显黄色细纵裂纹。叶互生，托叶早落；叶片卵形，顶端渐长尖，基部圆形或阔楔形，叶缘有疏浅细锯齿，两面均具稀疏星状毛，掌状3出脉，近叶柄两侧各有一无柄腺体。花小，单性，雌雄同株，顶生总状花序，花绿色，雄上雌下，花梗有星状毛；雄花萼片5深裂，花瓣5，反卷，内面密生绵状毛，雄蕊15～20枚，着生于花盘边缘；花盘腺体与萼片对生；雌花花萼5裂，花瓣5，有的无花瓣，花柱3，柱头深2裂。蒴果长圆形至倒卵形，有3～4钝棱，密生星状毛。种子长卵形，淡褐色。花期3～6月，果期6～9月。\n【产地分布】生于山谷、林缘、溪旁或密林中。多为栽培。分布于广西、云南、贵州、四川等地。此外、浙江、江苏等地亦有栽培。\n【采收加工】秋季果实成熟时采收，堆置2～3天，摊开，干燥。\n【药材性状】卵圆形，一般具三棱，长1.8～2.2厘米，直径1.4～2厘米。表面灰黄色或稍深，粗糙，有纵线6条，顶端平截，基部有果梗痕。破开果壳，可见3室，每室含种子1粒。种子呈略扁的椭圆形，长1.2～1.5厘米，直径0.7～0.9厘米，表面棕色或灰棕色，一端有小点状的种脐及种阜的疤痕，另端有微凹的合点，其间有隆起的种脊；外种皮薄而脆，内种皮呈白色薄膜；种仁黄白色，油质。无臭，味辛辣。\n【性味归经】性热，味辛。有大毒。归胃经、大肠经。\n【功效与作用】外用蚀疮。属泻下药下属分类的峻下逐水药。\n【临床应用】内服：巴豆霜入丸、散，用量0.1～0.3克；外用：适量，研末涂患处，或捣烂以纱布包擦患处。用于恶疮疥癣、疣痣。\n【药理研究】刺激消化道，产生剧烈腹痛；催吐；兴奋肠肌；增加胆汁和胰腺分泌；抗病原微生物；抗肿瘤；促肿瘤发生；抗炎；致突变；可使血小板凝集。口服巴豆油1滴可致激烈腹泻。煎剂对金黄色葡萄球菌、流感杆菌等在体外均有一定抑制作用，对小鼠艾氏腹水癌等有明显抑制作用。\n【化学成分】本品含巴豆苷、巴豆酸、棕榈酸、花生酸、巴豆毒素Ⅰ、巴豆毒素Ⅱ、亚麻酸、巴豆醇等成分。尚含巴豆醇的双酯化合物及疏水性三酯化合物，具刺激性和致癌活性。\n【使用禁忌】无寒实积滞、体虚者及孕妇禁用，不宜与牵牛子同用。服巴豆后，不宜食热粥，饮开水等热物，以免加剧泻下。巴豆内服中毒能产生口腔、咽部及胃部的灼热感，刺痛，流涎，恶心，呕吐，上腹剧痛，剧烈腹泻，大便呈米泔样，尿中可出现蛋白、红细胞、白细胞，管型，并可起急性肾功能衰竭而致少尿尿闭。中毒重者出现谵语、发绀，脉细弱，体温和血压下降，呼吸困难，终致呼吸、循环衰竭而死亡。外用可使皮肤黏膜发赤起疱，形成炎症，乃至局部组织坏死，服巴豆后若泻下不止，可以黄连、黄柏或绿豆煎汤冷服，或食冷粥，饮大豆汁以缓解。\n【配伍药方】①治肝硬化腹水：巴豆霜3克，轻粉1.5克，放于四、五层纱布上，贴在肚脐上，表面再盖二层纱布，经1～2小时后感到刺痒时即可取下，待水泻，若不泻则再敷。(内蒙古《中草药新医疗法资料选编》)\n②治喉痹：白矾(捣碎)60克，巴豆(略捶破)15克。同于铫器内炒，候矾枯，去巴豆不用，碾矾为细末，遇病以水调灌，或干吹入咽喉中。(《百一选方》)\n③治咽喉闭塞，不通甚者：巴豆(去大皮)一枚。上钻中心，绵裹，令有出气处。内于鼻中，随时左右，时时吸气令入喉中，立效。(《圣惠方》)\n④治小儿痰喘：巴豆一粒，杵烂，绵裹塞鼻，痰即自下。(《古今医鉴》)\n⑤治一切疮毒及腐化瘀肉：巴豆去壳，炒焦，研膏，点肿处则解毒，涂瘀肉则自腐化。(《痈疽神秘验方》乌金膏)" },

  {
    "id": 10,
    "price": 17.5,
    "name": "千金子",
    "key": "千金子",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/62c3c40c-79b0-449c-9f14-e5585684e4f1.jpg",
    "cat": 10,
    "brief": "中药材 佩兰 千金草 兰草   500克",
    "alias": "【中药名】\n千金子 qianjinzi\n【别名】\n千两金、菩萨豆、续随子。\n【英文名】\nEuphorbiae Semen。",
    "explain": "【来源】大戟科植物续随子Euphorbia lathyrisL.的成熟种子。\n【植物形态】二年生草本。全株无毛，微被白粉，含白色乳汁。茎直立粗壮，基部稍木质化。单叶，对生，茎下部叶较密，线状披针形，无柄，茎上部叶具短柄，叶片广披针形，顶端锐尖，基部近心形，全缘，上面绿色，下面灰绿色。总花序顶生，伞状，基部有2～4叶状苞片，花序总苞杯状，花单性，无花被，雄花多数，每花有雄蕊1枚，雌花1朵。蒴果近球形。种子短圆形。\n【产地分布】生于向阳山坡；多栽培。分布于黑龙江、吉林、辽宁等地。\n【采收加工】夏、秋季果实成熟时采收，割取植株，打下种子，除去杂质，干燥。\n【药材性状】椭圆形或倒卵形，长约5毫米，直径约4毫米。表面灰棕色或灰褐色，具不规则网状皱纹，网孔凹陷处灰黑色，形成细斑点。一侧有纵沟状种脊，上端有突起的合点，下端有一灰白色线形种脐，长约1毫米，基部有类白色突起的种阜，常已脱落，留有圆形疤痕。种皮薄脆，种仁白色或黄白色，胚乳丰富，油质，胚直，细小。气微，味辛。\n【性味归经】性温，味辛。归肝经、肾经、大肠经。\n【功效与作用】逐水消肿、破血消癥。属泻下药下分类的峻下逐水药。\n【临床应用】用量1.5～3克；去壳，去油用，内服多入丸散服，治疗水肿、痰饮、积滞胀满、二便不通、血瘀经闭；外用适量，捣烂敷患处，治顽癣、疣赘。\n【药理研究】对胃肠道黏膜有强烈的刺激作用。有毒。\n【化学成分】含脂肪油约48%，其中含油酸等的甘油酯及多种二萜醇酯等。此外，含有游离的二萜醇、甾类、香豆精类、黄酮类、千金子固醇、巨大戟二萜醇、a-檀香萜醇、千金子固醇、β-谷固醇、七叶树内酯、马栗树皮苷、瑞香素等成分。\n【使用禁忌】体弱便溏者及孕妇忌服。千金子对胃肠黏膜有刺激作用，对中枢神经系统也有毒性作用。大量口服可产生头晕头痛、恶心流涎、剧烈呕吐、精神不振、腹痛腹泻、心悸、发热、冷汗自出、面色苍白、尿少而浑浊、心率加快，甚至血压下降、大汗淋漓、四肢厥冷、气息微弱、呼吸浅促、舌光无苔、脉细欲绝。\n【配伍药方】①治血瘀经闭：千金子3克，丹参、制香附各9克，煎服。(《安徽中草药》)\n②治黑子，去疣赘：千金子熟时坏破之，以涂其上，便落。(《普济方》)\n③治蛇咬肿毒闷欲死：重台1.8克，千金子(去皮)七颗。二物捣筛为散，酒服方寸匕，兼唾和少许，敷咬处。(《海上集验方》)\n④治阳水肿胀：千金子(炒，去油)60克，大黄30克。为末，酒、水丸绿豆大，每服以白汤送下五十丸。(《摘玄方》)\n附 千金子霜\n【加工方法】取拣净的千金子，搓去壳，碾碎，置蒸器内蒸透，用吸油纸包裹，压榨至油尽，碾细，过筛。\n【药材性状】均匀、疏松的淡黄色粉末，微显油性。味辛辣。\n【性味功能】味辛，性温。通水消肿、破血消癥。\n【临床应用】用量0.5～1克，多入丸散服。外用适量。" },

  {
    "id": 11,
    "price": 17.5,
    "name": "商陆",
    "key": "商陆",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/0dd3517b-e3cc-42e2-84c6-b0a4ae133085.jpg",
    "cat": 10,
    "brief": "中药材商陆500克包邮土人参 野生见肿消 章柳根 牛大黄 山萝卜",
    "alias": "【中药名】\n商陆 shanglu\n【别名】\n花商陆、见肿消、下山虎、土母鸡。\n【英文名】\nPhytolaccae Radix",
    "explain": "【来源】商陆科植物商陆Phytolacca acinosa Roxb.的根。\n【植物形态】多年生草本。无毛。根肥大，肉质，圆锥形。茎直立，圆柱形，具纵沟，高0.8～1米，绿色或带紫红色，叶互生，纸质；叶片椭圆形至长椭圆形，顶端锐尖或渐尖，基部楔形，全缘。总状花序顶生或与叶对生，直立；苞片线形，膜质；花两性，小型，花被片5，白色、淡黄绿色或带粉红色，椭圆形至长圆形；雄蕊8～10枚，罕见10枚以上；心皮5～8(～10)，分离但紧贴，花柱短，顶端下弯。浆果扁球形，由5～8(～10)个分果组成，熟时紫黑色。种子肾形，黑褐色。花期4～7月，果期7～10月。\n【产地分布】生于山沟边或林下，以及林缘路边湿润的土壤中，常栽培或半野生。分布于我国大部分地区。\n【采收加工】秋季至次年春季采挖，除去须根及泥沙，切成块或片，晒干或阴干。\n【药材性状】横切或纵切的不规则块片，厚薄不等。外皮灰黄色或灰棕色。横切片弯曲不平，边缘皱缩，直径2～8厘米；切面浅黄棕色或黄白色，木部隆起，形成数个突起的同心性环轮。纵切片弯曲或卷曲，长5～8厘米，宽1～2厘米，木部呈平等条状突起。质硬。气微，味微甜，久嚼麻舌。\n【性味归经】性寒，味苦。有毒。归肺经、脾经、肾经、大肠经。\n【功效与作用】逐水消肿、通利二便、解毒散结。属泻下药下属分类的峻下逐水药。\n【临床应用】用量3～9克，煎汤内服。用治水肿胀满、二便不通；外用适量，鲜品捣烂或干品研末涂敷患处，用治痈肿疮毒。\n【药理研究】动物试验表明，提取物有利尿作用。水煎剂有明显的祛痰作用，还有增强免疫功能、抗炎、抗菌、抗病毒、抗肿瘤、镇咳、平喘、利尿、抗胃溃疡作用，促进DNA、RNA的合成，抑制中枢神经系统和心脏等。\n【化学成分】含商陆皂苷E、商陆毒素、生物碱、△’-豆甾醇、α-菠菜甾醇、商陆种苷A、商陆种苷B，商陆种苷C、商陆种苷D、商陆皂苷甲、商陆种酸、商陆种苷元、2-羟基商陆种酸、美商陆毒素、美商陆苷E、商陆皂苷等成分。\n【使用禁忌】脾虚水肿及孕妇忌服。宜从小量开始。本品对胃肠道有刺激作用，故宜饭后服。过量中毒，可出现恶心呕吐，腹痛腹泻，心动过速，呼吸频数，继则言语不清，躁动，抽搐，严重者血压下降，昏迷，瞳孔散大，心跳或呼吸停止而死亡。\n【配伍药方】①治跌打：商陆研末，调热酒擂跌打青黑之处，再贴膏药更好。(《滇南本草》)\n②治消化性溃疡：商陆粉10克，血余炭10克，鲜鸡蛋1个。先将鸡蛋去壳，用蛋清、蛋黄与药物搅拌均匀，在锅内放入少许茶油，待油烧熟后，将上药液倒入锅内煎熟即可。分2次日服，上、下午各1次，2星期为1疗程：(《湖南中医杂志》 1985，(4)：13)\n③治功能性子宫出血：商陆鲜根60～120克，猪肉250克，同煨，吃肉喝汤。(《神农架中草药》)\n④治肿满，小便不利：商陆根捣烂，入麝香0.9克，贴于脐心，以帛束之，得小便利即肿消。(《纲目》)" },

  {
    "id": 12,
    "price": 17.5,
    "name": "芫花",
    "key": "芫花",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/eddc92f1-42d8-4405-b11b-4b86c0132aa8.jpg",
    "cat": 10,
    "brief": "芫花中药材店铺 芜花 赤芫 芫条花 野丁香花500克包邮中草药大全",
    "alias": "【中药名】\n芫花 yuanhua\n【别名】\n芫、赤芫、芫条花、败花、野丁香花。\n【英文名】\nGenkwa Flos。",
    "explain": "【药用部位】瑞香科植物芫花Daphne genkwa Sieb.et Zucc.的干燥花蕾。\n【植物形态】 落叶灌木，高达0.3～1米。枝条稍带黄绿或紫褐色，幼时有绢状柔毛。叶对生、近对生或偶互生，叶柄短，长约2毫米，有灰色短柔毛。叶卵圆形、椭圆形、长椭轴流或卵状披针形，长3～4(～6)厘米，宽(0.5～)1～2厘米，纸顷，下面有绢状柔毛，基部宽楔形或圆形，先端尖，侧脉5～7对。花先叶开放，以侧生为多，常具3～7(～15)花，花序梗短，花无味，花梗短，被灰黄色柔毛。花萼淡紫色，筒状，先端4裂，裂片卵形或长圆形，雄蕊8，生于花被筒内面，上下2轮，下面一轮生于萼筒中部，上面一轮生于萼筒喉部，花丝短，子房倒卵形，外密生黄色柔毛，花柱极短或无花柱，柱头头状。核果白色。花期3～5月。果期6～7月。\n【产地分布】生于海拔300~1000米的山坡灌木丛中、路旁或疏林下，也有栽培于庭园中。分布于华北、华东、华南及贵州、四川等地区。\n【采收加工】春季花未开放时采收，除去杂质，干燥。\n【药材性状】常3～7朵簇生于短花轴上，基部有苞片1～2片，多脱落为单朵。单朵呈棒槌状，多弯曲，长1～1.7厘米，直径约1.5毫米，花被筒表面淡紫色或灰绿色，密被短柔毛，先端4裂，裂片淡紫色或黄棕色，质软。气微，味甘、微辛。\n【性味归经】性温，味苦、辛。归肺经、脾经、肾经。\n【功效与作用】泻水逐饮，外用杀虫疗疮。属泻下药下属分类的峻下逐水药。\n【临床应用】用量1.5～3克。醋芫花研末吞服，一次0.6～0.9克，一日1次。外用适量。用治水肿胀满、胸腹积水、痰饮积聚、气逆咳喘、二便不利，外治疥癣秃疮，痈肿，冻疮。\n【药理研究】具有终止妊娠、收缩子宫张力、抗肿瘤、利尿、增加肠蠕动、镇咳、祛痰、扩张乳腺血管、抗菌等作用。\n【化学成分】花与花蕾含二萜原酸酯类化合物、黄酮类化合物，挥发油中含大量脂肪酸，棕榈酸、油酸和亚油酸含量较高，约占总油量的60%。另含芫花酯、芫花醇、芫花素、瑞香素、落叶松脂素等成分。\n【使用禁忌】体质虚弱，或有严重心脏病、溃疡病、消化道出血及孕妇禁服；用量宜轻，逐渐增加，中病即止，不可久服。不宜与甘草同用。\n【配伍药方】①治卒得咳嗽：芫花一升，水三升，煮取一升，去滓，以枣十四枚，煎令汁尽。一日一食之，三日讫。(《肘后方》)\n②治咳嗽有痰：芫花60克。煮汁去滓，和饴糖熬膏。每服枣许。(《华佗神医秘传》)\n③治实喘：芫花(不以多少，米醋浸一宿，去醋，炒令焦黑，为细末)、大麦曲二味等分。和令极匀，以浓煎柳枝酒调下立定。(《百一选方》)\n④治妇人血气冲心欲死：芫花9克，吴茱萸150克。上为末，炒姜酒下。(《普济方》)\n⑤治产后恶血：芫花30克(醋拌炒令黑)，灶突墨30克。上件药同研令细，以醋煮曲末和丸，如绿豆大。不计时候以温酒下五丸。(《圣惠方》)\n⑥治痈：芫花为末，胶和如粥敷之。(《千金要方》)\n⑦治小儿秃头疮：芫花、腊月猪脂和如泥，洗去痂敷之，日一度。(《千金要方》)" },

  {
    "id": 13,
    "price": 17.5,
    "name": "白石英",
    "key": "白石英",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/b2c03d2e-3677-4d81-a482-18702b877d9f.jpg",
    "cat": 10,
    "brief": "包邮 白石英500克 白英石 非呒中药材",
    "alias": "【中药名】\n白石英 baishiying\n【别名】\n石英。\n【英文名】\nQuartz Album。",
    "explain": "【药用部位】来源于氧化物类石英族矿物石英Quartz。\n【植物形态】属三方晶系晶体结构。单晶体呈六方柱状，一端或两端出现多个三角形晶面，晶面上常有水平条纹。但多数呈晶簇状、粒状等集合体产出。无色透明，或为白色、灰白色。晶面呈玻璃光泽，断口及块状体呈油脂光泽，光泽强度不一。透明至半透明，也有不透明者。无解理，断口呈贝壳状或不平坦。硬度7，相对密度2.65。性脆。具焦热电性及压电性。\n【产地分布】完整的晶体产于岩石晶洞中，块状的常产于热液矿脉中；也是花岗岩、片麻岩、砂岩等各种岩石的重要组成部分。主产于江苏、广东、湖北、福建、陕西等地。\n【采收加工】采得后，挑选纯白的石英，除去杂质，洗净，干燥，研碎。\n【药材性状】本品为六方柱状或粗粒状集合体，呈不规则块状，多具棱角而锋利。白色或淡灰白色；条痕白色。表面不平坦，半透明至不透明；具脂肪样光泽。体重，质坚硬，可刻划玻璃成划痕；砸碎后，断面不平坦。气微，味淡。\n【性味归经】性微温，味甘、辛。归肺经、肾经、心经。\n【功效与作用】温肺肾，安心神，利小便。属安神药下属分类的重镇安神药。\n【临床应用】内服：煎汤，10～15克；或入丸、散。虚寒咳喘，肾虚阳痿宜煅用。主治虚寒咳喘，阳痿，消渴，心神不安，惊悸善忘，小便不利，水肿。\n【药理研究】具有镇静、安神、镇咳、平喘等作用。\n【化学成分】主含二氧化硅，其中硅约占53.3%，氧约占46.7%，尚含微量铝、铁、钠、钾等\n【使用禁忌】其性燥烈，不可多服、久服。\n【配伍药方】①治虚损劳瘦，皮燥阴痿，脚弱烦疼：白石英五两，捣碎密绢盛，以牛乳三升，酒三升，同煎至四升，去石，以瓶收之。每食前暖服三合。(《千金方》石煮牛乳法)\n②治心脏不安，惊悸善忘，上膈风热化痰：白石英一两，朱砂一两。同研为散。每服半钱，食后夜卧，金、银汤调下。(《简要济众方》)\n③治妇人年未五十，天癸久绝不行：白石英四两，当归身二两。煮酒饮。(《本草汇言》)\n④治肾脏阳气衰微，津源不能上济于华池，频作渴者：白石英四两。煎汤饮。或加枸杞子二两同煎。(《本草汇言》引《青囊秘方》)\n⑤治风虚冷痹，诸阳不足，及肾虚耳聋，益精保神：磁石(火煅醋淬五次)、白石英各五两。绢袋盛，浸一升酒中五六日。温服，将尽更添酒。(《千金方》)" },

  {
    "id": 14,
    "price": 17.5,
    "name": "磁石",
    "key": "磁石",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/b39de03a-0804-49ac-92d2-e2813bbc047f.jpg",
    "cat": 10,
    "brief": "煅磁石中药材可自磨磁石粉500g包邮中药材店铺",
    "alias": "【中药名】\n磁石 cishi\n【别名】\n吸铁石、吸针石、戏铁石、玄石、摄石。\n【英文名】\nMagnetitum。",
    "explain": "【药用部位】氧化物类尖晶石族磁铁矿Magnetie的矿石。\n【分布】产于辽宁、河北、河南、山东、江苏、安徽、福建、四川、云南、广东、广西等地。\n【采收加工】全年可采挖。挖出后除去杂石和泥土。\n【药材性状】不规则的块状或略带方形，多具棱角，大小不一。表面灰黑色或棕褐色，有金属样光泽，有的附有铁屑状棕色粉末。体重，质坚硬，断面不整齐，灰黑色或棕褐色。具磁性，日久磁性渐弱。有土腥气，无味。\n【性味归经】性寒，味咸。归肝经、心经、肾经。\n【功效与作用】平肝潜阳、聪耳明目、镇惊安神、纳气平喘。属安神药下属分类的重镇安神药。\n【临床应用】用量9～30克，先煎。用治头晕目眩、视物昏花、耳鸣耳聋、惊悸失眠、肾虚气喘。\n【药理研究】磁石主含超分散磁石微粒，可使实验大鼠血液中血红蛋白、红细胞和白细胞数增加，血液凝固时间延长，血 浆纤维蛋白分解活性增加，同时中性粒细胞吞噬反应增加。混悬液有镇静、镇痛、抗惊厥、消炎和止血作用。\n【化学成分】磁石主含四氧化三铁，其中氧化铁占31%，三氧化二铁占69%。此外尚含有铝、硅、磷、钙、镁等27种元素。\n【使用禁忌】脾胃虚弱者慎服，不宜多服、久服。\n【配伍药方】①治疔肿：磁石捣为粉，碱、醋和封之，拨根出。(《古今录验方》)\n②治诸般肿毒：磁石9克，金银藤120克，黄丹240克，香油1斤。如常熬膏贴之。(《乾坤秘韫》)\n⑧治金疮，止痛、断血：磁石末敷之。(《千金要方》)\n④治阳不起：磁石五斤(研)。清酒三斗，渍二七日。一服三合，日夜一。(《千金要方》)\n⑤明目，益眼力：神曲120克，磁石60克，光明砂30克。上三味，末之，炼蜜为丸，如梧桐子大。饮服三十丸。日三，不禁。(《千金要方》神曲丸)\n⑥治耳聋耳鸣，常如风水声：磁石(捣碎，棉裹)15克，木通、菖蒲(米泔浸一二日，切，焙)各半斤，以绢囊盛，用酒一斗浸。寒七日，暑三日，每饮三合，日再。(《圣济总录》磁石酒)" },

  {
    "id": 15,
    "price": 17.5,
    "name": "青礞石",
    "key": "青礞石",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/4e019caf-b855-463f-8a72-265481227fd9.jpg",
    "cat": 10,
    "brief": "中药材 青礞石青蒙石蒙石500克",
    "alias": "【中药名】\n青礞石 qingmengshi\n【别名】\n礞石。\n【英文名】\nChloriti Lapis。",
    "explain": "【药用部位】变质岩类矿物黑云母片岩Biotite Schist及绿泥石化云母碳酸盐片岩Mica Carbonate Schist by Chloritization的复矿岩。\n【产地分布】产于河南、江苏、浙江、湖北、湖南、四川等地。黑云母片岩主产于河南省新乡地区，绿泥石化云母碳酸盐片岩主产于浙江省醇安地区。\n【采收加工】矿物采挖后，拣净杂石，除去泥土。\n【药材性状】黑云母片岩：为鳞片状或片状集合体。呈不规则扁斜块状或长斜块状，无明显棱角。褐黑色或绿褐色，具玻璃样光泽。质软，易碎，断面呈较明显的层片状。碎粉主为褐黑色鳞片，有似星点样闪光。气微，味淡。\n【性味功能】性平，味甘、咸。归肺经、心经、肝经。\n【功效与作用】坠痰下气、平肝镇惊。属安神药下属分类的重镇安神药。\n【临床应用】用量3～6克，多入丸、散。用治顽痰胶结、咳嗽喘急、癫痫发狂、烦躁胸闷、惊风抽搐。\n【药理研究】本品能促进阳离子交换，产生吸附作用，故有攻痰利水作用。临床可用于治疗食管贲门癌梗阻和癫痫等症。\n【化学成分】含二氧化硅、三氧化二铁、氧化铁、二氧化锑、五氧化二磷、氧化锰、氧化钙、氧化镁、氧化钾、氧化钠等。尚含铅、锌、铜、镍、铬、钴、钒等多种无机元素。\n【使用禁忌】脾胃虚弱、阴虚燥痰者及孕妇忌服。\n【配伍药方】①治中痰并一切痰症：礞石(煅，乳淬)60克，大黄(九蒸)60克，沉香30克，半夏(姜、矾制)60克，陈皮60克，黄芩(酒制)60克。为末，陈米糊为丸。绿豆大。每服9克。(《惠直堂经验方》礞石化痰丸)\n②治大人小儿食积成痰，胃实多眩晕者：礞石21克，火硝21克(同研炒，以火硝过性为度)，枳实、木香、白术各60克。共为末，红曲60克为末，打糊丸梧桐子大。每早服9克，白汤下。(《方脉正宗》)\n③治百日咳：青礞石27克，白矾9克，芒硝18克。共为细末，分30份，每次1份，每日3次。(《河南省秘验单方集锦》)\n④治妇人食癥，块久不消，攻刺心腹疼痛：青礞石(末)0.6克，木香(末)0.3克，硇砂(不夹石者，细研)15克，朱砂(细研)0.3克，粉霜(研)0.6克，巴豆(去皮、心，研，纸裹压去油)0.9克。上药都研令匀，以糯米饭和丸，如绿豆大。每服空心以温酒下二丸，取下恶物为效。(《圣惠方》礞石丸)\n⑤治一切积，不问虚实冷热酒食，远年日久：青礞石(研)60克，滑石(研)30克，青黛15克，轻粉9克。上同研匀。每服3克，面汤调下，急以水漱口。未服药前一日，先吃淡粥，至晚服药;候次日晚未动，再服1.5克，取下恶物，更以汤粥将息二三日，如是无积，药随大便下，并无所损忌，次日将息。(《普济方》礞石散)" },

  {
    "id": 16,
    "price": 17.5,
    "name": "紫石英",
    "key": "紫石英",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/752e4e5c-9b37-489f-b450-db6463630586.jpg",
    "cat": 10,
    "brief": "紫石英 500g包邮中药材  紫英石 紫萤石 紫石英粉 磨粉请留言",
    "alias": "【中药名】\n紫石英 zishiying\n【别名】\n赤石英、氟石、荧石。\n【英文名】\nFluoritum。",
    "explain": "　【药用部位】来源于氟化物类矿物荧石族荧石Fluorite的矿石。\n【矿物形态】等轴晶系。晶体呈立方体、八面体，少有菱形十二面体的单形及其聚形。在立方体晶面上有时出现镶嵌式花纹，尚可见由两个立方体相互穿插而成的双晶。集合体呈致密粒状或块状。色杂，以绿色、紫色为多，也有黄、浅蓝、红灰、黑白色等。当加热时其色可褪，受X线照射后又恢复原色。半透明至透明，有玻璃光泽，硬度4，性脆，相对密度3.18，在阴极射线下发荧光。溶于硫酸放出氟化氢，与硝酸及盐酸作用极弱。加热易崩解，并发出美丽的天蓝色、浅紫色。。\n【产地分布】紫石英多形成于热液矿床中，或伟晶气液作用形成的矿脉中。有时也大量出现于铅锌硫化物矿床中。产于浙江、江苏、广东、辽宁、黑龙江、甘肃、湖北、湖南等地。\n【采收加工】全年均采挖。挖取后，除净杂石，拣选紫色的矿石入药。\n【药材性状】不规则的多角形块状，大小不一。表面紫色、淡紫色或浅绿色。色泽深浅不匀，常有裂纹，具玻璃样光泽，半透明。质坚硬而脆，易砸碎，多从棱角处裂破，断面棱角锋利。气微，味淡。\n【性味归经】性温，味甘。归肾经、心经、肺经。\n【功效与作用】镇静安神、温肺、暖官。属安神药下属分类的重镇安神药。\n【临床应用】用量9～15克，打碎，先煎。用治失眠多梦、心悸易惊、肺虚咳嗽、宫寒不孕。\n【药理研究】紫石英有兴奋中枢神经和卵巢分泌功能的作用。人体摄入氟过多时，会对牙齿、骨骼、神经系统、肾脏、心血管及甲状腺有损害作用。\n【化学成分】主含氟化钙，纯品中钙约占51.2%、氟占48.8%，但常夹杂有微量的氧化铁，并夹有镉、铬、铜、锰、镍、铅、锌、钇、铈等微量元素。\n【使用禁忌】不宜久服，妇女绝孕由于阴虚火旺不能摄受精气者忌用。\n【配伍药方】①治虚劳，止惊悸，令能食：紫石英五两，打碎如米豆大，水淘一遍。上以水一斗，煮取二升，去渣澄清。细细温服，或煮粥羹食亦得，服尽更煎之。（《圣惠方》紫石英汤）\n②治肺寒咳逆上气：紫石英，火煅醋淬七次，研细末，水飞过。每早用五分，花椒十粒，泡汤下。(《本草汇言》引《青囊秘传》)\n③治妇人胎胞虚冷，久不受孕，或受孕多小产者：紫石英二两(火煅醋淬七次，研细末，水飞过)，香附(醋炒)、当归、川芎(俱酒炒)、白术(土拌炒)各三两，枸杞子(酒洗，炒)、熟地(酒煮，捣膏)各适量。炼蜜丸梧子大。每早晚各服三钱，好酒送下。(《本草汇言》引《青囊秘传》)\n④治痈肿毒气：紫石英醋淬，捣为末。生姜、米醋煎敷之，摩亦得。(《日华子》)\n⑤治烂喉症：紫石英四钱(解煤蛊)，六神曲三钱(消麦积)，蒲公英四钱(解喉毒)，杏仁泥五钱(消痰火)。水煎服(婴孩减半)。(《平易方》)" }] },



{
  "id": 8,
  "name": "利水渗湿",
  "foods": [{
    "id": 1,
    "price": 17.5,
    "name": "白芥子",
    "key": "白芥子",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/600b4034-fd9e-45ab-9acd-0e88a5aa80d8.jpg",
    "cat": 10,
    "brief": "正品白芥子500g克白介子辣菜子芥菜子非野生中药材白芥籽茶可磨粉",
    "alias": "【中药名】\n白芥子 baijiezi\n【别名】\n辣菜子。\n【英文名】\nSemen Sinapis Albae。",
    "explain": "　【药用部位】为十字花科欧白芥属植物白芥Sinapis alba L.的种子。\n【植物形态】一年或二年生草本，高40～120厘米。茎直立，二纵棱，上部多分枝，被散生白色硬毛。叶互生，质薄，有柄；茎基部叶片大头羽状裂或近全裂，宽椭圆形或卵圆形，长6～12厘米，宽2～3厘米，顶裂片大，有侧裂片1～3对，边缘具疏齿；茎生叶较小，有短柄，向上裂片九渐少。总状花序顶生或腋生；萼片4，绿色，直立，披针形或长圆形，基部具爪；雄蕊6，4长2短；雌蕊2心皮，子房长柱形，密被白色长刺毛。长角果圆柱形，果瓣在种子间缢缩成念珠状，果先端具扁平剑形的喙。种子近球形，淡黄色。花期4～6月。果期5～7月。\n【产地分布】原产于欧洲。我国山西、辽宁、山东、四川、云南、新疆多有栽培。\n【采收加工】春播于7～8月采收，秋播于5月中、下旬采收，待果实大部分出现黄色时割下全株，后熟数日，选晴天晒干，脱出子粒，簸除杂质即可入药。\n【药材性状】种子呈球形，直径1.5～2.5毫米。表面灰白色至淡黄色，具细微的网纹，有明显的点状种脐。种皮薄而脆，破开后内有白色折叠的子叶，有油性。无臭，味辛辣，粉碎湿润后，有特殊的辛烈臭气。\n【性味归经】性温，味辛。归肺经、胃经。\n【功效与作用】利气燥痰，散结消肿。属利水渗湿药下属分类的利水消肿药。\n【临床应用】内服：煎汤，用量3～10克；或入丸、散。外用：研末调敷；穴位敷贴。主治咳喘痰多，胸满胁痛，肢体麻木，关节肿痛，湿痰流注，阴疽肿毒。\n【药理研究】①镇咳作用：炒白芥子醇提取物灌胃在浓氨水致咳实验中使小鼠的咳嗽次数明显减少，咳嗽的潜伏期明显的延长，镇咳效果明显。②祛痰作用：毛细玻管法中，白芥子水提取物、炒白芥子水提取物都有明显的祛痰作用，尤以白芥子水提取物大剂最组祛痰效果明显。③平喘作用：喷雾致喘法中，炒白芥子醚提取物对4%氯化乙酰胆碱诱发豚鼠哮喘有明显预防作用。④抗雄激素作用：以60%乙醇提取制得的白芥子总提取物和分段提取物Ⅰ、Ⅱ以及分离得到的白芥子苷给由丙酸睾酮诱发的去势小鼠灌胃，均能显著抑制去势小鼠的前列腺增生，降低小鼠血清酸性磷酸酶活性。⑤抗炎作用：白芥子苷能明显降低滤纸片埋藏引起的大鼠肉芽肿增生。\n【化学成分】种子含芥子油苷，内有白芥子苷。还含脂肪油，芥子酶，芥子碱和赖氨酸、精氨酸、组氨酸等氨基酸。又含4-羟基苯甲酰胆碱，4-羟基苯甲胺。\n【使用禁忌】肺虚久咳，阴虚火旺者禁服。内服过量会引起呕吐、腹泻。白芥子油对皮肤黏膜有刺激作用，能引起充血，灼痛，甚至发泡，皮肤过敏或溃破者忌外用。\n【配伍药方】①治痘疹入目，风眼疫眼，及焮热之眼目：白芥子(如食料者)一两，大蒜(杵烂)一钱，醋一钱。上三味，如麦饼，如钱大，贴足心。(《眼科锦囊》)\n②治伤寒后，肺中风冷，失音不语：白芥子五合(研碎)，用酒煮令半熟，带热包裹熨项颈周延，冷则易之。(《普济方》芥子酒熨方)\n③治脚气肿痛：白芥子、白芷等分，为末，姜汁和，涂之。(《本草述钩元》)\n④治淋巴结核：白芥子、葱头各3克，捣烂，敷患处，隔日1次，每次4～5小时。[《中级医刊》1959,(8)：566]\n⑤治风湿涎痰，结成痞块：外用白芥子为末，醋调敷患上。内用白芥子为末，神曲打糊丸梧子大。每服三钱，清晨参枣汤下。(《方脉正宗》)\n⑥治胸胁痰饮：白芥子五钱，白术一两。为末，枣肉和捣为丸，梧子大，每清晨白汤下百丸。(《本草汇言》引《摘玄方》)\n⑦治痰涎伏在心鬲上下，忽患胸背、手脚、颈项、腰胯隐痛不可忍，连筋骨，牵引钓痛，坐卧不宁，时时走易不定，或令人头痛不可举，或神意昏倦多睡，或饮食无味，痰唾稠黏，夜间喉中如锯声，多流睡涎，手脚重，腿冷痹，气脉不通等：甘遂(去心)，紫大戟(去皮)、白芥子(真者)各等分。上为末，煮糊丸如梧子大，晒干，食后，临卧，淡姜汤或热水下五七丸至十丸。如痰猛气实，加数丸不妨，其效如神。(《三因方》控涎丹)\n⑧治老人痰气喘咳，胸满懒食：白芥子、紫苏子、萝卜子各洗净，微炒，击碎。看何证多，则以所主者为首，余次之，每剂不过三钱，用生绢小袋盛之，煮作汤饮。(《韩氏医通》三子养亲汤)" },

  {
    "id": 2,
    "price": 17.5,
    "name": "赤小豆",
    "key": "赤小豆",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/cb9c0908-fdf2-4355-8214-644616fca0cb.jpg",
    "cat": 10,
    "brief": "尚贡 赤小豆 新货农家长粒赤豆红小豆 五谷杂粮共500g包邮",
    "alias": "【中药名】\n赤小豆 chixiaodou\n【别名】\n赤豆、朱赤豆、金红小豆、茅柴赤、米赤豆。\n【英文名】\nRice Bean",
    "explain": "【药用部位】豆科植物赤小豆Phaseolus calcaratus Roxb.的成熟种子。\n【植物形态】一年生直立草本，或上部缠绕状。嫩时被倒生细毛，老时无毛。3出复叶；托叶披针形或卵状披针形；小叶纸质，披针形、长圆状披针形或卵圆形至宽卵圆形，有时稍呈菱形，先端渐尖或急尖，基部阔三角形、近圆形或近截形，有时侧生小叶偏斜，全缘，两面无毛或仅叶脉上有疏毛，基出脉3条。总状花序腋生，有花数朵至多数；小苞片2，具毛；花萼淡绿色，短钟形，萼齿5；花冠蝶形，黄色，旗瓣圆肾形，先端微凹，基部心形，翼瓣斜卵形，基部具渐狭的爪，龙骨瓣狭长，先端延长成喙状，螺旋状卷曲；子房上位，密被短硬毛。狭果细瘦，线状扁柱形，通常弯曲镰形，先端具喙。种子长椭圆形，狭窄，暗红色，少有褐色、黑色或草黄色，种脐凹陷。花期5～8月，果期8～9月。\n【产地分布】栽培，也有野生。分布于广东、广西等地，我国南部各省普遍栽种。\n【采收加工】秋季荚果成熟而未开裂时拔取全株，晒干，打下种子，除去杂质，再晒干。\n【药材性状】赤小豆呈长圆形而稍扁。表面紫红色，无光泽或微有光泽，一侧有线形突起的种脐，偏向一端，白色，中间凹陷成纵沟。另～侧有一条不明显的棱脊。质硬，不易破碎。子叶乳白色。无臭，味微甘。\n【性味归经】味甘、酸，性平。归心经、小肠经。\n【功效与作用】利水消肿、解毒排脓。属利水渗湿药下属中的利水消肿药。\n【临床应用】用量9～30克，煎服；外用适量，研末调敷。赤小豆主治水肿胀满、脚气肢肿、黄疸尿赤、风湿热痹、痈肿疮毒、肠痈腹痛。\n【药理研究】抑制胰蛋白酶。20%赤小豆煎剂对金黄色葡萄球菌、福氏痢疾杆菌等有抑制的功效与作用，还具有增强细胞免疫、避孕等作用。\n【化学成分】赤小豆含有糖类、三萜皂苷。还含3-呋喃甲醇-p-D-吡喃葡萄糖苷、赤豆皂苷Ⅰ-Ⅵ、原矢车菊素Bi、原矢车菊素B3、D-儿茶精、D-表儿茶精、烟酸、核黄素等成分。\n【使用禁忌】阴虚津伤者慎服，过剂可渗利伤津。\n【配伍药方】1.治疽初作：赤小豆末醋敷之，亦消。(《小品方》)\n2.治痄腮及痈疽发背，疮疖：赤小豆为细末，以新汲水调敷疮上及四边，赤肿处干则再敷之。(《证治准绳》)\n3.治腮颊热肿：赤小豆末，和蜜涂之，一夜即消;或加芙蓉叶末尤妙。(《纲目》)\n4.治小儿重舌：赤小豆末，醋和涂舌上。(《千金要方》)\n5.治乳汁不下：煮赤小豆，取汁饮即下。(《王岳产书》)" },

  {
    "id": 3,
    "price": 17.5,
    "name": "贯叶金丝桃",
    "key": "贯叶金丝桃",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/2d1b9532-47e2-49b1-9f43-ff0761389966.jpg",
    "cat": 10,
    "brief": "山间谷草 贯叶连翘500g 千层楼 小对月草 小过路黄 贯叶金丝桃",
    "alias": "【中药名】\n贯叶金丝桃 guanyejinsitao\n【别名】\n贯叶连翘、大对叶草、小刘寄奴、小叶金丝桃。\n【英文名】\nHyperici Perforati Herba。",
    "explain": "【药用部位】来源于藤黄科植物贯叶金丝桃Hypericum perforatum L.的干燥地上部分。\n【植物形态】一年生草本，全株各部带有黑色腺点。茎直立，常多分枝，圆柱形，具2条细纵棱，具节。单叶对生，椭圆形至线形，长1～2厘米，宽3～9毫米，先端钝，全缘，基部抱茎，散布透明腺点，叶缘有黑色腺点。花着生于枝端，或顶和排在聚伞花序，花大整齐，黄色，萼片5，萼长圆形或披针形，花瓣5，较萼片长，雄蕊多数，花药有黑色腺点，基部连成3束，子房上位，花柱3，分离，顶端5裂。蒴果具背生的腺条及侧和的囊状腺体，顶端开裂，种子多数，圆筒形。花期6～7月。果期10月。\n【产地分布】生于山野，平原，路旁及树木草丛中。分布于河北、河南、山东、江苏、江西、湖北、湖南、四川、贵州、陕西、甘肃、新疆等省区。。\n【采收加工】夏、秋二季开花时采割，阴干或低温烘干。\n【药材性状】茎呈圆柱形，长10～100厘米，多分枝，茎和分枝两侧各具一条纵棱，小枝细瘦，对生于叶腋。单叶对生，无柄抱茎，叶片披针形或长椭圆形，长1～2厘米，宽0.3～0.7厘米，散布透明或黑色的腺点，黑色腺点大多分布于叶片边缘或近顶端。聚伞花序顶生，花黄色，花萼、花瓣各5片，长圆形或披针形，边缘有黑色腺点；雄蕊多数，合生为3束，花柱3。气微，味微苦涩。\n【性味归经】性寒，味辛。归肝经。\n【功效与作用】疏肝解郁，清热利湿，消肿通乳。属利水渗湿药下属分类的利尿通淋药。\n【临床应用】用量2～3克，水煎服。用治肝气郁结，情志不畅，心胸郁闷，关节肿痛，乳痈，乳少。\n【药理研究】1.抗微生物与抗寄生虫作用：本品叶、花和果提取物对化脓、肾盂炎及膀胱炎的感染菌有杀菌作用，对杆菌无效，醇提取物杀菌作用强于水提取物，槲皮素是有效成分之一。本植物所含儿茶素与黄酮类的提取物在体外对金黄色葡萄球菌和枯草杆菌，高浓度时对大肠杆菌和白念珠菌有抗菌作用，并对流感病毒及烟草花叶病毒有抑制作用；对流感病毒A2感染鸡胚也有抗病毒作用。全草浸剂或提取物对复孔绦虫、膜壳绦虫、蛲虫和犬蛔虫有驱肠虫作用。2．镇痛作用：本植物地上部分总黄酮25～100mg/kg腹腔注射，小鼠热板法有剂量相关性镇痛作用，使痛阈升高11%～111%，ED₅₀为21.0mg/kg，主要有效成分为槲皮素及其苷。3.对心血管的作用：全草用稀NaOH溶液水解后所得的衣马宁(imamn)和水溶性衣马宁使离体兔耳血管收缩，1:1×10ˉ⁵使离体蛙心收缩期停跳，50mg/kg静脉注射使兔血压下降，呼吸频率和深度增加。4.对中枢神经系统的影响：本品的提取物(含金丝桃素等)对动物的精神活动有一定影响，能增强小鼠的探索行为。\n【化学成分】全草含鞣质10%，酸解产生花白素；挥发油主成分为蒎烯、倍半萜烯。另含维生素C、胡萝卜素、芸香甙(叶含2%，花0.095%)、金丝桃甙、槲皮甙、槲皮素、咖啡酸、绿原酸、少量皂甙、&beta；-谷甾醇。根、茎并含癸醛、月桂酸、甘露醇。\n【使用禁忌】尚不明确，谨慎用药。\n【配伍药方】①治吐血，崩漏下血：千层楼15克，旱莲草12克，蒲黄炭10克。水煎服。（《四川中药志》1979年版）\n②治乳少：小对叶草全草30克，炖肉吃，能催乳。(《贵州民间药物》)\n③治黄疸肝炎：小对叶草60克，煎水服。(《贵州草药》)\n④治乳疖：小对叶草嫩叶尖数片，揉塞鼻孔(左痛塞右，右痛塞左)，干时换药；并敷痛处；叉用此药30～60克煎水当茶喝，已溃者不能用。(《贵州民间药物》)\n⑤治无名肿毒，烫火伤：鲜贯叶连翘捣烂敷；干粉用麻油或蛋清调敷。(南药《中草药学》)" },

  {
    "id": 4,
    "price": 17.5,
    "name": "金丝草",
    "key": "金丝草",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/ed853625-78d3-4a8e-a9be-54fe1205ec1c.jpg",
    "cat": 10,
    "brief": "包邮 马尾莲 500克 马尾连 金丝黄连 草黄连 非野生中药材",
    "alias": "【中药名】\n金丝草 jinsicao\n【别名】\n落苏、猫毛草、笔仔草、猫仔草、牛毛草。\n【英文名】\nHerb Of Rough Melic。",
    "explain": "【药用部位】来源于禾本科植物金丝草Pogonatherum crinitum (Thunb.) Kunth的全草。\n【植物形态】多年生草本。高30～70厘米，根细弱，较稠密，基部常密生分蘖。秆直立，丛生，或基部膝曲。叶鞘光滑或微粗糙，上部者短于节间，下部者长于节间；叶舌透明膜质，长1～3毫米，顶端撕裂而两侧下延，叶片质较薄，长6～15厘米，宽2～7毫米，干时常卷折，无毛或上面疏生柔毛。圆锥花序窄长，直立，长8～15厘米，宽约l厘米，具较密的小穗，长约5毫米，通常具2枚孕性小花，淡绿色或乳脂色，顶部由数个不育外稃集成小球形；颖几等长，膜质。小穗柄短，细弱，常弯曲，颖果褐色，光亮，纺锤形。花期5～6月，果期7～8月。\n【产地分布】生于地下水位较高的沙地上、山野或荒芜田野。分布于内蒙古、陕西、宁夏、甘肃、青海、新疆等地。\n【采收加工】夏季采收，割取地上部分，捆成小把，晒干或鲜用。\n【药材性状】根、茎、叶、花序的混合段状。根黄白色须状。茎细圆形光滑，节明显膨大。切段面类白色，口空。叶多破碎。总状花序，密生金黄色的柔软长芒，形似猫尾。气微，味微苦。\n【性味归经】性凉，味甘。归经无。\n【功效与作用】清热、解暑、利尿。属利水渗湿药下属分类的利水消肿药。\n【临床应用】用量30～60克。用治感冒高热、中暑、尿路感染、肾炎水肿、黄疸型肝炎、糖尿病、小儿久热不退等。\n【药理研究】1.挥发油中所含黄樟醚对中枢有抑制作用，并可使动物的呼吸中枢麻痹。2.金耳环全草制成酊剂用于拔牙，证明有麻醉镇痛作用。\n【化学成分】全草挥发油中主要含2,3-二甲基-5-甲氧基苯酚、黄樟醚、细辛醚、龙脑、甲基丁香酚、橙花叔醇，2,3,4,5-四甲氧基苯丙烯、茴香酸丙酯、邻苯二甲酸，二丁酯。\n【使用禁忌】尚不明确，谨慎用药。\n【配伍药方】①治黄疸型肝炎：金丝草30克，龙胆草，栀予各15克。水煎服。（《福建药物志》)\n②治糖尿病：金丝草60克，白果12枚。酌加水煎服。（《福建民间草药》）\n③治尿路感染：金丝草、海金沙各15克。水煎服。(《福建药物志》)\n④治白带：金丝草30克，银杏14枚。水酌量煎服。（《闽东本草》）\n⑤治痈疽疗肿，一切恶疮：金丝草灰二两，醋拌晒干，贝母五两，去心，白芷二两，为末，以凉水调贴疮上，香油亦可。或加龙骨少许。（《纲目》铁箍散）" },

  {
    "id": 5,
    "price": 17.5,
    "name": "冬葵子",
    "key": "冬葵子",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/af6daf78-67dd-42cb-ade4-965839837344.jpg",
    "cat": 10,
    "brief": "静萱冬葵子500g克中药材野生冬葵实籽东葵子可磨冬葵子粉",
    "alias": "【中药名】\n冬葵子 dongkuizi\n【别名】\n葵子、葵菜子。\n【英文名】\nFructus Malvae Verticillatae。",
    "explain": "【药用部位】为锦葵科植物野葵Malva verticillate L. [M.pulchella bERNB.]的果实种子。\n【植物形态】二年生草本，高60～90厘米。茎被星状长柔毛。叶互生；叶柄长2～8厘米，仅上面槽内被绒毛；托叶卵状披针形，被星状柔毛；叶片肾形至圆形，直径5～11厘米，常为掌状5-7裂，裂片短，三角形，具钝尖头，边缘有钝齿，两面被极疏糙状毛或几无毛。花3至数朵簇生于叶腋间，几无柄至有极短柄；总苞的小苞片3枚，线状披针形，被纤毛；萼杯状，5裂，广三角形，被疏星状长硬毛：花冠淡白色至淡红色，花瓣5，长6～8毫米，先端凹入，具爪；雄蕊柱长4毫米，被毛；花柱分枝10～11。果扁圆形，直径5～7毫米，分果爿10～11，背面甲滑，两侧其同纹。种子肾形，直径约1.5毫米，紫褐色，秃净。花期3～11月。\n【产地分布】生于平原、山野等处。我国各地均有分布。\n【采收加工】夏秋季种子成熟时采收，干燥后除去杂质及皮壳，洗净，用时捣碎。\n【药材性状】冬葵子呈肾形，表面黄白色或黄棕色，长3.5～6毫米，宽2.5～4.5毫米，厚1.5～2毫米，较薄的一边中央凹下，种皮棕褐色。质坚硬。气微，味涩。药材以颗粒饱满，坚老者为佳。\n【性味归经】性寒，味甘。归大肠经、小肠经、膀胱经。\n【功效与作用】利水通淋，滑肠，通乳。属利水渗湿药下分类的利尿通淋药。\n【临床应用】内服：煎汤，6～15克；或入散剂。用于水肿，尿闭，热淋涩痛，乳汁不行，乳房胀痛。\n【药理研究】从冬葵子中提取的中性多糖MVS-Ⅰ通过碳廓清试验，显示能明显增强网状肉皮系统的吞噬活性。\n【化学成分】种子含中性多糖：MVS-Ⅰ，MVS-ⅡA，MVS-ⅡG；酸性多糖：MVS-ⅢA，MVS-ⅣA，MVS-Ⅵ及肽聚糖：MVS-V。\n【使用禁忌】孕妇慎服。\n【配伍药方】①治小儿小便不通：冬葵子一升，以水二升，煮取一升，分服，入滑石末六铢。(《千金方》)\n②治血痢、产痢：冬葵子为末，每服二钱，入腊茶一钱，沸汤调服，日三。(《圣惠方》)\n③治卒关格，大小便不通，支满欲死：葵子二升，水四升，煮取一升，顿服。内猪脂如鸡子一丸则弥佳。(《肘后方》)\n④治面皯疱令光白：冬葵子炒研，柏子仁别研，白茯苓去黑皮，各三两。上三味，捣研为散。每服二钱匕，温酒调下，食后临卧。(《圣济总录》冬葵子散)" },

  {
    "id": 6,
    "price": 17.5,
    "name": "粉萆薢",
    "key": "粉萆薢",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/8b1c647e-dbb0-4093-bcf1-dff5b3c7b563.jpg",
    "cat": 10,
    "brief": "包邮 绵萆薢500克 绵萆薤 粉萆薢 萆薢 川萆薢 非呒野生中药材",
    "alias": "【中药名】\n粉萆薢 fenbixie\n【别名】\n川萆薢、黄萆薢、土黄连、黄姜、竹木。\n【英文名】\nDioscoreae Hypoglaucae Rhizoma。",
    "explain": "【药用部位】来源于薯蓣科植物粉背薯蓣Dioscorea hypoglauca Palibin的根茎。\n【植物形态】多年生缠绕草质藤本。根状茎横走，粗厚，多细长须根。茎纤细，左旋。单叶互生，纸质，叶片三角状心形或卵状披针形，顶端渐尖，边缘波状，叶干后近黑色，下面灰白色。花黄绿色，单性，雌雄异株，雄花为腋生向上的穗状花序，花单生或2～3朵簇生，花被6裂，雄蕊3，退化雄蕊3，互生，雌花为下垂的穗状花序，花单生，花被6，柱头3裂。蒴果近圆形，微被白粉，有3翅，成熟后向上反转。花期5～8月，果期6～10月。\n【产地分布】生于海拔200～1300米的山腰陡坡、山谷缓坡或水沟边、阴坡的混交林缘或疏林下。分布于安徽、浙江、福建、江西等地。\n【采收加工】春、秋均可采挖，挖出后洗净除去须根，切片晒干。\n【药材性状】根茎竹节状，类圆柱形，有分枝，表面皱缩，常残留有茎枯萎疤痕及未除尽的细长须根。商品多为不规则的薄片，大小不一，厚约0.5毫米，边缘不整齐，有的有棕黑色或灰棕色的外皮。切面黄白色或淡灰棕色，平坦，细腻，有粉性及不规则的黄色筋脉花纹维管束，对光照视，极为显著。质松，易折断。气微，味辛、微苦。\n【性味归经】性平，味苦。归肾经、胃经。\n【功效与作用】利湿去浊、祛风除痹。属利水渗湿药下属分类的利尿通淋药。\n【临床应用】用量9～15克，煎汤内服；或入丸、散。用治风湿顽痹、腰膝疼痛、筋脉屈伸不利；膏淋、热淋、石淋、小便不利；脾胃湿热下注之尿浊症；湿热下注所致带下、遗精等。\n【药理研究】药理研究表明，粉萆薢对动脉粥样硬化斑块的形成有抑制作用，可使外周血T细胞百分率增加，具有一定的免疫药理活性。薯蓣皂能抑制肿瘤细胞白血病L₁₂₁₀，IC₅₀为0.17μg/ml。还有抗真菌作用，对细菌无效。\n【化学成分】含薯蓣皂苷元、粉背皂苷A、纤细薯蓣皂苷、原纤细薯蓣皂苷等。薯蓣皂苷元的含量测定方法有：库仑滴定法、TLC扫描测定法。\n【使用禁忌】肾虚阴亏者慎服。\n【配伍药方】①治阴痿失溺：萆薢6克，附子4.5克。合煎汤内服。（《泉州本草》）\n②治真元不足，下焦虚寒，小便白浊，频数无度，漩面如油，光彩不定，漩脚澄下，旋如膏糊；或小便频数，虽不白浊，亦能治疗：益智仁、粉萆薢、石菖蒲、乌药各等分。为细末，每服三钱，水一盏半，入盐一捻，同煎至七分，温服，食前。（《杨氏家藏方》萆薜分清饮）\n③治白带日久，体力衰弱：怀山药30克，萆薢24克，莲子9克，水煎，食前温服。（《陕西中医验方选编》）\n④治杨梅疮，不问新旧溃烂，或筋骨作痛：川萆薢，每次用一两，以水三盅，煎二盅，去渣，不拘时，徐徐温服。(《外科发挥》萆薢汤)\n⑤治肠风、痔漏：萆薢(细锉)、贯众(逐叶擘下了去土)等分。捣罗为末，每服二钱，温酒调下，空心，食前服。（《孙尚药方》如圣散）\n⑥治风湿腰痛，久湿痹不散：萆薢、杜仲(去粗皮，炙)各三两，枸杞根皮(洗)五两。上三味，细锉，用好酒五升，于净瓶内浸密封，重汤煮两时许，取出候冷，旋暖不拘时饮之，常令微醉。（《圣济总录》萆薢酒）" },

  {
    "id": 7,
    "price": 17.5,
    "name": "海金沙",
    "key": "海金沙",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/0e6dae1a-b4b7-4813-9515-72427d749d48.jpg",
    "cat": 10,
    "brief": "海金沙中药材50g-500克溶石铁线藤海金沙粉海金砂",
    "alias": "【中药名】\n海金沙 haijinsha\n【别名】\n海金砂、左转藤灰。\n【英文名】\nLygodii Spora",
    "explain": "【药用部位】海金沙科植物海金沙Lygodium japonicum (Thunb.) Sw.的成熟孢子。\n【植物形态】多年生攀援植物。茎草质，细弱。地下茎细而匍匐，被细柔毛。叶为1～2回羽状复叶，纸质，两面均被细柔毛；能育羽片卵状三角形，小叶卵状披针形，边缘有锯齿或不规则分裂，上部小叶无柄，羽状或戟形，下部的小叶有柄。不育羽片尖三角形，小叶阔线形或基部分裂呈不规则的小片。孢子囊生于能育羽片的背面，在2回小叶的齿及裂片顶端呈穗状排列，孢子囊群盖鳞片状，卵形，每盖下生一横卵形的孢子囊，环带侧生，聚集一处。\n【产地分布】野生于山坡丛中，攀援他物而生长。分布于长江以南各地及陕西、甘肃。\n【采收加工】8～9月孢子成熟时，选择晴天清晨潮露未干时割取植株，置衬有纸或布的筐内，于避风处曝晒，至干时用手搓揉，抖动，使叶背之孢子脱落，再用细筛筛去残叶，晒干即可。\n【药材性状】海金沙呈粉末状，棕黄色或浅棕黄色。体轻，手捻有光滑感，置手中易由指缝滑落。气微，味淡。\n【性味归经】味甘，性寒。归膀胱经、小肠经。\n【功效与作用】清利湿热、通淋止痛。属利水渗湿药下属的利尿通淋药。\n【临床应用】内服；煎汤，用量6～15克，包煎；或研末，每次2～3克。主治热淋、砂淋、石淋、血淋、膏淋、尿道涩痛，临床用治尿路结石、肝胆(黄疸)疾患、尿路感染等。\n【药理研究】海金沙榨出液体外对金黄色葡萄球菌、绿脓杆菌、福氏痢疾杆菌、伤寒杆菌均有抑制作用。此外，海金沙还具有利胆、利尿排石的功效与作用，另能增加输尿管蠕动。\n【化学成分】含水溶性成分海金沙素及棕榈酸、硬脂酸、油酸、亚油酸、反式-对香豆酸、肉豆蔻酸等有机酸类。还含赤霉素A73的甲酯。\n【使用禁忌】肾阴亏虚者慎用。\n【配伍药方】①治血淋痛涩：海金沙末，新汲水或砂糖水服3克。(《普济方》)\n②治尿路结石：海金沙、金钱草、车前草各30克，煎服。(《北海民间常用中草药手册》)\n③治膀胱炎：海金沙、车前草、积雪草、一点红、白茅根各30克，煎水服。(《江西草药手册》)\n④治肾炎水肿：海金沙、马蹄金、白茅根各30克，玉米须12克。水煎服。(《福建药物志》)\n⑤治痢疾：海金沙9克，薏苡根9克。水煎兑白糖服。(《江西草药》)\n⑥治肝炎：海金沙15克，阴行草30克，车前18克。水煎服，每日1剂。(《江西草药》)\n⑦治吐血，衄血：海金沙为细末。新汲水调下。《直指方》" },

  {
    "id": 8,
    "price": 17.5,
    "name": "黑种草子",
    "key": "黑种草子",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/c92745d8-c342-46cd-a76d-cde8bd6f933d.jpg",
    "cat": 10,
    "brief": "包邮 黑种草子500克 黑种草籽 非呒野生中药材",
    "alias": "【中药名】\n黑种草子 heizhongcaozi\n【别名】\n斯亚旦(维吾尔族名)\n【英文名】\nNigellae Semen。",
    "explain": "【药用部位】来源于毛茛科植物腺毛黑种草Nigella glandulifera Freyn的干燥成熟种子(维吾尔族常用药)。\n【植物形态】一年生草本。茎高35~50厘米，直立，上部分枝，被短腺毛和短柔毛。叶为二回羽状复叶，茎中部叶有短柄，上部无柄，叶片卵形，长约5厘米，宽约3厘米，羽片约4对，近对生，末回裂片线形或线状披针形，表面无毛，背面疏被短腺毛。花单生枝端，直径为2厘米，萼片5，白色或带蓝色，卵形，长约1.2厘米，宽约6毫米，基部有短爪，无毛，花瓣约8，长约5毫米，有短爪，上唇小，比下唇稍短，下唇二裂超过中部，基部有蜜槽，雄蕊多数，花药椭圆形，心皮通常5，基部合生为复子房。蓇葖果膨胀，长约1厘米，宿存花柱与果实近等长，种子三棱形，黑色。\n【产地分布】生于温暖和阳光充足的环境，土壤以肥沃、疏松的砂质土为宜。栽培于新疆、云南、西藏。\n【采收加工】夏、秋二季果实成熟时采割植株，晒干，打下种子，除去杂质，晒干。\n【药材性状】呈三棱状卵形，长2.5～3毫米，宽约1.5毫米。表面黑色，粗糙，顶端较狭而尖，下端稍钝，有不规则的突起。质坚硬，断面灰白色，有油性。气微香，味辛。\n【性味归经】性温，味甘、辛。归经无。\n【功效与作用】补肾健脑，通经，通乳，利尿。属利水渗湿药下属分类的利尿通淋药。\n【临床应用】用量2～6克，煎汤内服；捣敷外用；或研末撒。治疗耳鸣健忘，经闭乳少，热淋，石淋。\n【药理研究】1.抗肿瘤作用：黑种草子提取物100mg/kg局部给药，可延迟二甲基苯并蒽(DMBA)所致的小鼠皮肤乳头状癌的发生并使癌肿发生数减少。其水提物能抑制20-甲基胆葸(MCA)所致的小鼠软组织瘤的发生口皮下注射MCA后，腹腔注射该药，给药组肿瘤的发生率仅为对照组的33.3%。2.对肝酶浓度的影响：黑种草子水提取物给SD雄性大鼠口服14天，可使血浆中丙氨酸氨基转移酶等浓度增高。3.抑制血小板聚集和体外血栓形成：黑种草子油0.25g/kg、0.5g/kg能明显地抑制(ADP)、胶原诱导的大鼠血小板聚集，0.5g/kg、1g/kg能抑制大鼠体外血栓长度，1g/kg能减轻大鼠体外血栓重量。4．其他作用：本品能降低三酰甘油。黑种草子油具有抗病原微生物和驱肠虫作用。此外，其提取物有防止cisplatin引起的小鼠血红蛋白水平下降和白细胞数减少。\n【化学成分】含黑种草素，挥发油，油主要含百里醒，黑种草酮；植物体含酮类，主要为山柰酚，槲皮素，皂苷等；种子经预试验含有脂肪油，蛋白质。\n【使用禁忌】孕妇及热性病患者禁用。\n【配伍药方】①治月经不调，闭经：黑种草子15克，小茴香6克，赤芍9克。水煎服。（《新疆中草药》）\n②治瘫痪患者，舌部麻木：黑种草子、硇砂、姜、黑胡椒、荜茇、芥子、硼砂、牛至、墨盐各等量。粉碎成细粉，过罗，混匀。适量撒于舌部，每日2～3次。（《维吾尔药志》）" },

  {
    "id": 9,
    "price": 17.5,
    "name": "垂盆草",
    "key": "垂盆草",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/d1a6bab3-a473-4716-92f9-d874e8c48f2b.jpg",
    "cat": 10,
    "brief": "醉山垂盆草500g克大别山正宗野生新货干货非花茶可泡搭配中草药材",
    "alias": "【中药名】\n垂盆草 chuipencao\n【别名】\n鼠牙半支、瓜子草、狗牙瓣、地蜈蚣草。\n【英文名】\nSedi Herba。",
    "explain": "【药用部位】景天科植物垂盆草Sedum sarmentosum Bunge的全草。\n【植物形态】多年生草本植物，全体无毛。不育枝匍匐状。叶3片轮生，倒披针形或椭圆状长圆形，长1.5～2.5厘米，宽3～8毫米，顶端近急尖，基部渐狭，有距，边全缘。聚伞花序顶生；花无梗；苞片披针形，具距；萼片5，不等长，宽披针形或长圆形，长3.5～5毫米，顶端稍钝；花瓣5，淡黄色，宽披针形或长圆形，顶端渐尖而有长尖头；雄蕊10枚，2轮，内轮着生于花瓣基部约1毫米处。种子卵圆形，长约0.8毫米，具细乳头状突起。花期4～5月，果期6～7月。\n【产地分布】生于山坡、岩石石隙、沟边、路旁湿润处。分布于吉林、辽宁、河北、山东、山西、河南、陕西、四川、湖北及华东等地。\n【采收加工】7月采收，洗净，鲜用，或开水焯过，晒干。除去泥沙杂质，干品切段。\n【药材性状】茎纤细，长可达20厘米以上，部分节上可见纤细的不定根。3叶轮生，叶片倒披针形至矩圆形，绿色，肉质，长1.5～2.8厘米，宽0.3～0.7厘米，先端近急尖，基部急狭，有距。气微，味微苦。\n【性味归经】性凉，味甘、淡。归肝经、胆经、小肠经。\n【功效与作用】清利湿热、解毒。属利水渗湿药下分类的利湿退黄药。\n【临床应用】用于湿热黄疸、小便不利、痈肿疮疡及急、慢性肝炎。内服：煎汤，用量干品15～30克，鲜品30～120克；或捣汁服。外用：捣敷或制成软膏外敷。\n【药理研究】药理研究表明垂盆草苷对四氯化碳性肝损伤有明显保护作用。可使肝细胞内糖原和葡萄糖-6-磷酸酶、乳酸脱氢酶含量增加，琥珀酸脱氢酶和ATP酶活性增强。垂盆草苷对小鼠的细胞免疫有显著抑制作用，能抑制T细胞介导的移植物抗宿主反应；并能抑制T细胞依赖抗原-SRBC的抗体形成细胞数；增加外周血中白细胞数。垂盆草注射液在体外对金黄色葡萄球菌、甲型与乙型链球菌、绿脓杆菌、伤寒杆菌等有一定抑制作用。\n【化学成分】含甲基异石榴皮碱、N-甲基异石榴皮碱、二氢-N-甲基异石榴皮碱等生物碱以及景天庚糖、葡萄糖、蔗糖、果糖。并含垂盆草苷及多种氨基酸、槲皮素、山柰素、异鼠李素、消旋甲基异石榴皮碱、二氧异石榴皮碱等成分。\n【使用禁忌】脾虚腹泻者慎服。\n【配伍药方】①治肝炎：a.急性黄疸型肝炎：垂盆草30克，茵陈蒿30克，板蓝根15克。水煎服。(《安徽中草药》)；b.急性黄疸型或无黄疸型肝炎：鲜垂盆草62～125克，鲜旱莲草125克。煎煮成200～300毫升，每次口服100～150毫升， 每日2次，一疗程15～30天。(《福建药物志》)；c.慢性迁延型肝炎：鲜垂盆草30克，紫金牛9克。水煎去渣，加食糖适量，分2次服。(《浙江药用植物志》)；d.慢性肝炎：垂盆草30克，当归9克，红枣1 0枚。水煎服，每日1剂。(《四川中药志》1982年)\n②治肠炎，痢疾：垂盆草30克，马齿苋30克。水煎服，每日1剂。(《四川中药志》1982年)\n③治无名肿毒，创伤感染：鲜垂盆草配等量鲜大黄、鲜青蒿，共捣烂敷患处。(《陕甘宁青中草药选》)\n④治咽喉肿痛：垂盆草15克，山豆根9克。水煎服。(《青岛中草药手册》)\n⑤治烫伤、烧伤：鲜垂盆草适量，捣汁涂患处或用垂盆草12克，瓦松9克，共研细末，菜油调敷。(《陕甘宁青中草药选》)" },

  {
    "id": 10,
    "price": 17.5,
    "name": "蔊菜",
    "key": "蔊菜",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/49054e70-a836-4984-ace8-9aefc6e11af1.jpg",
    "cat": 10,
    "brief": "蔊菜500g别名野菜子 铁菜子 野油菜 干油菜 山芥菜 地豇豆 中药材",
    "alias": "【中药名】\n蔊菜 hancai\n【别名】\n野油菜、野芥草、独根菜。\n【英文名】\nHerba Rorippae",
    "explain": "【药用部位】十字花科植物蔊菜Rorippa indica (L.) Hiern的干燥全草。\n【植物形态】一年生或二年生草本。植株较粗壮，高20～50厘米，无毛或具疏毛。茎单一或分枝，直立或斜升。叶形多变化，基生叶和茎下部叶具长柄；叶片通常大头羽状分裂，长4～10厘米，宽1.5～2厘米，顶裂片大，边缘具不规则牙齿，侧裂片1～3对，上部叶片宽披针形或匙形，具短柄或耳状抱茎，边缘具疏齿。总状花序顶生或侧生，开花时花序轴逐渐向上延伸，花小，多数；萼片4，直立，浅黄色而微带黄绿色，光滑无毛，宽披针形或卵状长圆形，长2～4毫米，先端内凹；花瓣4，鲜黄色，宽匙形或长倒卵形，长2.5～4毫米，全缘，基部具有短而细的爪；雄蕊6，4长2短；雌蕊1，子房圆柱形，花柱短粗，柱头略膨大，顶部扁平。长角果线状圆柱形，较短而粗壮，长1～2厘米，直立或稍弯曲，成熟时果瓣隆起。种子每室2行，多数，淡褐色，宽椭圆形，近三角形或不规则多角形，长0.5～0.7毫米，表面有凹陷的大网纹。花期4～5月（8～9月偶有开花），花后果实渐次成熟。\n【产地分布】生于路旁、田边、园圃、沟河边、林缘、屋边墙脚下及山坡路旁潮湿处。分布于陕西、甘肃、山东、江苏、浙江、江西、福建、台湾、河南、湖南、广东、四川、云南等地。\n【采收加工】5～7月采收全草。鲜用或晒干。\n【药材性状】本品为不规则的段，根、茎、叶、花、果混合，根细长，表面淡黄色，有不规则纵纹；质脆，易折断；断面皮部类白色，木部黄色。茎纤细，具纵皱纹，表面淡绿色或带紫色。叶多卷缩，破碎，完整者展平后呈长椭圆形至卵形，叶片通常大头状羽裂，长5～7厘米，宽1～2.5厘米，顶端裂片较大，边缘具不规则锯齿，黄绿色。花序总状，花小，黄色。角果细圆形，红褐色，种子多数。气微，味淡。\n【性味归经】性微温，味辛、苦。归肺经、肝经。\n【功效与作用】祛痰止咳，解表散寒，活血解毒，利湿退黄。属解表药下属分类的辛温解表药。\n【临床应用】内服：煎汤，10～30克，鲜品加倍；或捣绞汁服。外用：适量，捣敷。主治咳嗽痰喘，感冒发热，麻疹透发不畅，风湿痹痛，咽喉肿痛，疔疮痛肿，漆疮，经闭，跌打损伤，黄疸，水肿。\n【药理研究】具有止咳、祛痰、抗菌等作用。\n【化学成分】本品主要含蔊菜素、有机酸、黄酮类化合物及微量生物碱等成分。\n【使用禁忌】过量服用可出现轻微的口干、胃部不适等现象，但不影响继续治疗。\n【配伍药方】①治感冒发热：蔊菜15克，桑叶9克，菊花15克，水煎服。(《青岛中草药手册》)\n②治风湿关节炎：萍菜30克，与猪脚煲服。(《广西民族药简编》)\n③治小便不利：蔊菜15克，茶叶6克，水冲代茶饮。(《青岛中草药手册》)\n④治鼻窦炎：鲜蔊菜适量，和雄黄少许捣烂，塞鼻腔内。(《福建中草药》)\n⑤治蛇头疔：鲜蔊菜捣烂，调鸭蛋清外敷。(《福建中草药》)" },

  {
    "id": 11,
    "price": 17.5,
    "name": "鸡骨草",
    "key": "鸡骨草",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/973a6066-bfa8-457f-b72f-12dab41b3141.jpg",
    "cat": 10,
    "brief": "新货广西鸡骨草正品500g新大黄草全草旗舰店非野生广东煲汤料",
    "alias": "【中药名】\n鸡骨草 jigucao\n【别名】\n黄头草、大黄草、猪腰草、假牛甘子、黄食草。\n【英文名】\nAbri Herba",
    "explain": "【药用部位】豆科植物广州相思子Abrus cantoniensis Hance.的带根全草。\n【植物形态】多年生披散小灌木。根粗壮，细长，分枝；茎细，深红紫色，幼嫩部分密被黄褐色短粗毛。偶数羽状复叶，小叶8～12对，小叶片长圆形或倒卵状矩圆形，膜质，先端截形而有小锐尖，基部浅心形，上面被疏毛，背面被紧贴的粗毛，几无柄；托叶成对着生，线状披针形，小托叶极小，刺毛状。总状花序腋生；花萼钟状，黄绿色；花冠浅紫红色，旗瓣宽椭圆形，翼瓣狭，龙骨瓣弓形；雄蕊9枚；合生成管状，与旗瓣贴连，上部分离；子房近无柄，花柱短。荚果矩圆形，扁平，先端有喙，被黄色短疏毛。种子4～6粒，矩圆形，扁平，褐黑色，光滑。花期8月，果期10月。\n【产地分布】生于山地或旷野灌木林边。分布于广东、广西等地。\n【采收加工】全年均可采，取全株，除去荚果(荚果有毒)及杂质，晒干。\n【药材性状】根多呈圆锥形，上粗下细，有分枝，长短不一；表面灰棕色，粗糙，有细纵纹，支根极细，有的断落或留有残基。茎丛生，灰棕色至紫褐色，小枝纤细，疏被短柔毛。小叶矩圆形，先端平截，有小突尖，下表面被伏毛。气微香，味微苦。\n【性味归经】性凉，味甘、微苦。归胃经、肝经。\n【功效与作用】利湿退黄，清热解毒，疏肝止痛。属利水渗湿药下属分类的利湿退黄药。\n【临床应用】用量15～30克，煎服。用治黄疸、胁肋不舒、胃脘胀痛、急性肝炎、慢性肝炎、乳腺炎。\n【药理研究】主要具有保肝作用：鸡骨草粗皂苷部分对四氯化碳引起的肝损害有抑制作用；另外，还有抗炎及免疫作用，可影响肠平滑肌功能，增强小鼠游泳耐力。\n【化学成分】含生物碱：相思子碱、胆碱；蒽醌类：大黄醌、大黄素甲醚；皂苷类：鸡骨草三醇等。另含相思子皂醇、大豆皂醇、葛根皂醇、槐花二醇、广东相思子三醇、甘草次酸、光果甘草内酯。根中含大黄酚和大黄素甲醚。\n【使用禁忌】凡虚寒体弱者慎用。\n【配伍药方】①治黄疸：鸡骨草60克，红枣七八枚。水煎服。(《岭南草药志》)\n②治外感风热：鸡骨草60克。水煎，日分2次服。(《广西民间常用中草药手册》)\n③治蛇咬伤：鸡骨草(去骨)30克。煎水饮。(《岭南草药志》)" },

  {
    "id": 12,
    "price": 17.5,
    "name": "茵陈",
    "key": "茵陈",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/d933357d-3dd8-4025-bd69-b410c1f00c03.jpg",
    "cat": 10,
    "brief": "茵陈中药材500g无野生棉茵陈整颗茵陈红枣茶茵陈蒿孕妇白蒿新鲜",
    "alias": "【中药名】\n茵陈 yinchen\n【别名】\n茵陈蒿、白蒿、绒蒿、臭蒿。\n【英文名】\nHerba Artemisiae Scopariae。",
    "explain": "【药用部位】菊科植物茵陈蒿Artemisia capillaris Thunb.的地上部分。\n【植物形态】半灌木。茎直立，基部木质化，有纵条纹，紫色，多分枝，幼嫩枝被有灰白色细柔毛，老则脱落。基生叶披散地上，有柄，较宽，2～3回羽状全裂，或掌状裂，小裂片线形或卵形，两面密被绢毛；下部叶花时凋落；茎生叶无柄，裂片细线形或毛管状，基部抱茎，叶脉宽，被淡褐色毛，枝端叶渐短小，常无毛。头状花序球形，多数集成圆锥状；花淡绿色，外层雌花能育，柱头2裂叉状；中部两性花不育，柱头头状不分裂。瘦果长圆形，无毛。花期8～9月，果期9～10月。\n【产地分布】生于山坡、河岸、沙砾地较多。我国大部分地区有分布。\n【采收加工】春季幼苗高6～10厘米时采收或秋季花蕾长成时采割，除去杂质及老茎，晒干。春季采收的习称“绵茵陈”，秋季采割的习称“茵陈蒿”。\n【药材性状】绵茵陈：多卷曲成团状，灰白色或灰绿色，全体密被白色茸毛，绵软如绒。茎细小，除去表面白色茸毛后可见明显纵纹；质脆，易折断。叶具柄，展平后叶片呈1～3回羽状分裂，小裂片卵形或呈倒披针形、条形，先端锐尖。气清香，味微苦。茵陈蒿：圆柱形，多分枝，表面淡紫色或紫色，有纵条纹，被短柔毛；体轻，质脆，断面类白色。叶密集，或多脱落。下部叶2～3回羽状深裂，裂片条形或细条形，两面密被白色柔毛；茎生叶1～2回羽状全裂，基部抱茎，裂片细丝状。头状花序卵形，多数集成圆锥状，有短梗；瘦果长圆形，黄棕色。气芳香，味微苦。\n【性味归经】性微寒，味苦、辛。归脾经、胃经、膀胱经。\n【功效与作用】清湿热、退黄疸。属利水渗湿药下属分类的利湿退黄药。\n【临床应用】用量6～15克，水煎服，外用适量，煎水熏洗。用治黄疸尿少、湿疮瘙痒、传染性黄疸性肝炎。\n【药理研究】具有利胆、解热、保肝、降脂、降血压、平喘、抑菌、抗病毒、利尿、抗癌、镇痛、防龋、消炎等作用，对肝炎病毒有抑制作用。\n【化学成分】含叶酸、挥发油；花及果中含有6,7-二甲氧基香豆精、氯化钾和绿原酸。另含绿原酸、桉叶素、茵陈色原酮、4-甲基茵陈色原酮、滨蒿内酯、茵陈蒿酸等成分。\n【使用禁忌】脾虚血亏而致的虚黄、萎黄，一般不宜使用。\n【配伍药方】①治阳明病，但头汗出，身无汗，小便不利，瘀热在里，身发黄者：茵陈蒿180克，栀子(擘)十四枚，大黄(去皮)60克。以水一斗二升，先煮茵陈，减六升，内二味，煮取三升，去滓分三服。小便当利，尿如皂角汁状。(《伤寒论》茵陈蒿汤)\n②治黄疸，遍身悉黄，小便如浓栀子汁：茵陈蒿120克，黄芩90克，枳实(炙)60克，大黄90克。四味捣筛蜜丸如梧桐子大。空腹，以米饮服二十丸，日一服，渐加至二十五丸，微利为度。忌热面、蒜、荞麦、黏食，陈臭物。(《外台》引自《广济方》茵陈丸)\n③治大便自利而灰：茵陈蒿9克，栀子、黄连各6克。水二盏，煎至八分。去滓服。(《伤寒活人指掌图》茵陈栀子黄连汤)\n④治发黄，脉沉细迟，肢体逆冷，腰以上自汗：茵陈蒿60克，附子一个，干姜(炮)45克，甘草(炙)30克。上为粗末。分作四帖，水煎服。(《玉机微义》茵陈四逆汤)\n⑤治疮疡：茵陈蒿两握，以水一斗五升，煮取七升，先以皂荚汤洗疡上令伤，然后以汤洗之，汤冷更温洗。可作三四度洗，隔日作佳，不然恐痛难忍。(《外台》引《崔氏方》)\n⑥治风瘙瘾疹，偏身皆痒，搔之成疮：茵陈蒿150克(生用)，苦参150克。上细锉。用水一斗，煮取二升，温热得所，蘸绵拭之，日五七度。(《圣惠方》)" },

  {
    "id": 13,
    "price": 17.5,
    "name": "龙骨",
    "key": "龙骨",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/6e5e6bb3-0bb1-43e5-9957-459de1b4a99c.jpg",
    "cat": 10,
    "brief": "包邮 龙骨500克 生龙骨 五花龙骨 青花龙骨 非煅龙骨中药材",
    "alias": "【中药名】\n龙骨 longgu\n【别名】\n五花龙骨。\n【英文名】\nOs Draconis。",
    "explain": "【药用部位】古代哺乳动物象类、犀类、三趾马、牛类、鹿类等的骨骼化石或象类门齿的化石。\n【矿物形态】由磷灰石、方解石及少量黏土矿物组成。磷灰石为六方晶系隐晶质，依古代生物骨骼产出。疏松集合体中或有呈现晶体形小棒状的磷灰石 ，灰白色。略带油脂状，土状光泽或瓷状光泽。硬度大于指甲，小于小刀。方解石的晶体结构属三方晶系。晶体为菱面体，也有呈现柱状及板状者。常以钟乳状或致密粒状集体产出。断口贝壳状，硬度3，性脆。\n【产地分布】多产于山西、内蒙古、河北、河南、湖北、四川、陕西、甘肃等地。\n【采收加工】挖出后，除去泥土及杂质。五花龙骨质酥脆，出土后，露置空气中极易破碎，常用毛边纸粘贴。\n【药材性状】1.龙骨：又称白龙骨。呈骨骼状或不规则块状。表面白色、灰白色或黄白色至淡棕色，多较平滑，有的具纵纹裂隙或具棕色条纹与斑点。质硬，砸碎后，断面不平坦，色白或黄白，有的中空。关节处膨大，断面有蜂窝状小孔。吸湿力强，舔之吸舌。无臭，无味。以质硬、色白、吸湿力强者为佳。" },

  {
    "id": 14,
    "price": 17.5,
    "name": "牡蛎",
    "key": "牡蛎",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/5e4f382f-e99c-4596-ae2c-8038102c0ba4.jpg",
    "cat": 10,
    "brief": "牡蛎中药材 生牡蛎片男性生蚝壳 牡蛎粉另售玛卡龙骨覆盆子煅牡蛎",
    "alias": "【中药名】\n牡蛎 muli\n【别名】\n左壳、蚝壳、海蛎子壳、蛎蛤、海砺子皮。\n【英文名】\nOstreae Concha。",
    "explain": "【药用部位】牡蛎科动物长牡蛎Ostrea gigas Thunberg、大连湾牡蛎Otalianwhanensis Crosse或近江牡蛎D.rivularis Gould的贝壳。\n【动物形态】贝壳左右2片，极不规则，厚而坚硬。左壳较大而凹，固着于海底岩石上；右壳较小而平坦，呈钙化质状。贝壳外表面有多层起伏的鳞片，灰白色、淡黄色、黄褐色至淡紫色，边缘极粗糙。内表面瓷白色，可见深色闭壳肌痕。肉质部可见鳃、心室、心耳及外套膜触手等。\n【产地分布】生活于低潮线附近或浅海泥沙质海底及岩礁上，近江牡蛎及长牡蛎分布于全国沿海各地，大连湾牡蛎分布于辽宁、河北、山东沿海。\n【采收加工】全年可采，拾取后，取肉供食用，贝壳洗净，晒干。\n【药材性状】牡蛎药材的外形不一，分左右两壳，一般左壳较大而厚。壳外面粗糙不平，内表面光滑、瓷白色。质硬脆，断面层状。味微咸。长牡蛎：呈长片状，背腹缘几乎平行。右壳较小，坚厚鳞片层状或层纹状排列，壳表面较平坦，淡紫色、灰白色或黄褐色。 大连湾牡蛎：呈类三角形，背腹缘呈“八”字形，左壳面鳞片坚厚，右壳面鳞片呈波状的同心性排列。近江牡蛎：多呈类圆形或三角状类圆形，右壳同心性排列的鳞片层层重叠，边缘有时带紫色。\n【性味归经】性微寒，味咸。归肝经、胆经、肾经。\n【功效与作用】重镇安神，潜阳补阴，软坚散结，煅牡蛎收敛固涩。属平肝息风药下属分类的平抑肝阳药。\n【临床应用】9～30克，先煎，外用适量，研末撒或调敷。用治惊悸失眠，眩晕耳鸣、瘰蛎痰核、癥瘕痞块。煅牡蛎用治自汗盗汗、遗精崩带、胃痛泛酸。\n【药理研究】牡蛎具有镇静、局部麻醉的功效与作用，并能抑制神经肌肉兴奋，抗实验性胃溃疡损伤，及增强免疫功能。\n【化学成分】牡蛎主含碳酸钙80%～95%、磷酸钙及硫酸钙。此外尚含镁、铁、铝、硅等多种无机元素及多种氨基酸，无机元素的种类和含量因品种与产地不同而异。\n【使用禁忌】不宜多服久服，以免引起便秘和消化不良。\n【配伍药方】 ①治风虚汗出，少气：牡蛎(烧为粉)30克，白术30克，防风(去芦头)30克。上件药，捣细罗散，每服不计时候，以温水调下6克。恶风倍防风，少气配白术，汗多出、面肿倍牡蛎。(《圣惠方》牡蛎散)\n②治白带：牡蛎粉、艾叶、茴香各30克，糯米半合(炒熟)。上为末，滴水为丸，如梧桐子大。温米饮下，空心，每服五十丸。(《澹寮方》)\n③治温病下后，大便溏甚，脉仍数者：生牡蛎60克。研细，水八杯，煎服三杯，分温三服。(《温病条辨》一甲煎)\n④治大病瘥后，鼻衄：牡蛎3克，石膏1.5克。捣末，酒服方寸匕，日三四。亦可蜜丸如梧桐子大，服之。(《肘后方》)\n⑤治心痛气实者：用单味牡蛎煅为粉，酒调6克服之。(《丹溪心法》)\n⑥治胃酸过多：牡蛎、海螵蛸各15克，浙贝母12克。共研细粉，每服9克，每日3次。(《山东中草药手册》)\n⑦治紫癜风：牡蛎、胆矾各15克。上二味生用为散。用醋调摩患处。(《圣济总录》牡蛎散)" },

  {
    "id": 15,
    "price": 17.5,
    "name": "赭石",
    "key": "赭石",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/784c5be2-c3f3-402a-9230-447b760d6b10.jpg",
    "cat": 10,
    "brief": "一斤包邮仟草御颜 赭石500克 代赭石生赭石非野生中药材煅赭石",
    "alias": "【中药名】\n赭石 zheshi\n【别名】\n代赭石、铁朱、钉头赭石、赤赭石\n【英文名】\nHaematitum",
    "explain": "【药用部位】氧化物类矿物刚玉族赤铁矿Haematite。\n【产地分布】主产于河北、山西，山东、河南、湖南、广东、四川等地亦产。\n【采收加工】采挖后，除去杂石。\n【药材性状】为豆状、肾状集合体，多呈不规则的扁平块状。暗棕红色或灰黑色，条痕樱红色或红棕色，有的有金属光泽。一面多有圆形的突起，习称“钉头”；另一面与突起相对应处有同样大小的凹窝。体重，质硬，砸碎后断面显层叠状。气微，味淡。\n【性味归经】性寒，味苦。归肝经、心经、肺经、胃经。\n【功效与作用】平肝潜阳，重镇降逆，凉血止血。属平肝息风药下属分类的平抑肝阳药。\n【临床应用】内服：煎汤，用量15～30克，打碎，先煎；研末，每次3g；或入丸、散。外用：适量，研末撒或调敷。一般生用，止血煅用。用于眩晕耳鸣、呕吐、噫气、呃逆、喘息、吐血、衄血、崩漏下血。\n【药理】赭石可升高白细胞数，对肺及肝脏有损害作用。可引起肺线粒体蛋白质含量和细胞色素C氧化酶活性增加，线粒体呈肿胀状态。\n【化学成分】主要成分为三氧化二铁。\n【使用禁忌】虚寒证及孕妇慎用。有毒性，不可久服。\n【相关药方】①治五痫：代赭石30克，明矾60克。为末，糊丸如梧桐子大。每服三十丸，水下。(《古今医统》)\n②治赤眼肿闭：赭石0.6克，石膏0.3克。为末，新汲水调，敷眼头尾及太阳穴。(《直指方》)\n③治喉痹肿痛：赭石煮汁饮。(《普济方》)\n④治牙宣：赭石、荆芥。同为细末，揩齿上，以荆芥汤漱。(《百一选方》)\n⑤治胃火牙龈作痛：生赭石30克(轧细)，怀牛膝30克，滑石18克，甘草3克。煎汤服。(《衷中参西录》)\n⑥治肝郁多怒，胃郁气逆，致吐血、衄血及吐衄之证屡服他药不效者：川大黄细末3克，油肉桂细末3克，生赭石细末18克。上药三味，将大黄、肉桂末和匀，用赭石末煎汤送下。(《衷中参西录》秘红丹)" },

  {
    "id": 16,
    "price": 17.5,
    "name": "紫贝齿",
    "key": "紫贝齿",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/4bf7d31d-c5cd-40fe-9d10-e2830bfbd60e.jpg",
    "cat": 10,
    "brief": "紫贝齿500克 紫贝 文贝 紫贝子 南蛇牙齿 狗支螺 非呒野生中药材",
    "alias": "【中药名】\n紫贝齿 zibeichi\n【别名】\n紫贝、紫贝子、贝齿、文贝。\n【英文名】\nConcha Mauritiae。",
    "explain": "【药用部位】宝贝科动物阿文绶贝Mauritia arabica (Linnaeus)、虎斑宝贝等的贝壳。\n【动物形态】贝壳长卵圆形，壳质坚固。壳塔螺旋部几乎全被珐琅质遮盖。背部膨圆，两侧下部略向内收缩，边缘稍厚。壳表面光滑细腻，褐色或灰褐色，布满纵横交错、不甚规则的棕褐色断续条纹和若干星状圆斑，背部隐约可见褐色或灰蓝色彩带，两侧缘灰褐色，上面具有紫褐色斑点，斑点一直延伸至基部。背线明显，不具斑纹。壳口狭长，前端稍宽，前、后端水管沟陷入很深，内外两唇的齿各为32枚，红褐色。\n【产地分布】生活在潮间带低潮线附近有珊瑚礁或岩石的海底。分布于福建、台湾、海南及西沙和南沙群岛。\n【采收加工】5～7月捕取，去肉，洗净，晒干。\n【药材性状】紫贝齿呈卵圆形，长3～7厘米，宽2～4厘米，高1.5～2厘米。背部隆起，腹部扁平，中间有沟，沟缘向内卷，并有多数细齿，两端均凹入呈圆口状，前端较宽。壳面平滑，紫色、棕色或褐色，具多数暗紫棕色与白色交错的斑纹或圆点，光泽美丽。内面蓝白色。质坚硬。气无，味淡。\n【性味归经】性平，味咸。归肝经。\n【功效与作用】镇惊安神、平肝明目。属平肝息风药下属分类的平抑肝阳药。\n【临床应用】用量10～15克，煎服，先煎外用适量，水飞点眼。用治小儿高热抽搐、头晕目眩、惊悸心烦、失眠多梦、目赤肿痛、热毒目翳。\n【药理研究】有镇静及降低血压的作用。\n【化学成分】紫贝主含碳酸钙90%以上，另含镁、铁、硅酸盐、磷酸盐和氯化物及有机质。\n【使用禁忌】脾胃虚寒者慎服。\n【配伍药方】①治痈疽：以紫贝壳烧煅为灰，敷之。(《普济方》)\n②治结核性脑膜炎：紫贝齿9克，旋覆花9克，代赭石9克，珠贝壳9克，水煎服(《青岛中草药手册》)\n③治斑疮丁子入眼：紫贝一个。生为末，用羊子肝批开，掺末一钱。线缠。米泔煮香熟，入小中瓶器盛，乘热熏。候冷，于星月露一宿，来早空心吃。(《续易简方论》紫贝散)" }] },



{
  "id": 9,
  "name": "收涩",
  "foods": [{
    "id": 1,
    "price": 17.5,
    "name": "浮小麦",
    "key": "浮小麦",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/728dc949-5dbe-47e3-92ed-039369d580ec.jpg",
    "cat": 10,
    "brief": "500克浮小麦中药茶中药材瘪小麦止汗正品正宗干货另红枣甘草",
    "alias": "【中药名】\n浮小麦 fuxiaomai\n【别名】\n浮麦。\n【英文名】\nFructus Tritici Levis",
    "explain": "【药用部位】为禾本科植物小麦Triticum aestivum L.干瘪轻浮的干燥颖果。\n【植物形态】一年生或越年生草本，高60～100厘米。秆直立，通常6～9节。叶鞘光滑，常较节间为短；叶舌膜质，短小；叶片扁平，长披针形，长15～40厘米，宽8～14毫米，先端渐尖，基部方圆形。穗状花序直立；长3～10厘米；小穗两侧扁平，长约12毫米，在穗轴上平行排列或近于平行，每小穗具3～9花，仅下部的花结实；颖短，第1颖较第2颖为宽，两者背面均具有锐利的脊，有时延伸成芒；外稃膜质，微裂成3齿状，中央的齿常延伸成芒，内稃与外稃等长或略短，脊上具鳞毛状的窄翼；雄蕊3；子房卵形。颖果长圆形或近卵形，长约6毫米，浅褐色。花期4～5月，果期5～6月。\n【产地分布】全国各地大量栽培。\n【采收加工】夏至前后，成熟果实采收后，取瘪瘦轻浮与未脱净皮的麦粒，筛去灰屑，用水漂洗，晒干。\n【药材性状】干瘪颖果呈长圆形，两端略尖，长约7毫米，直径约2.6毫米。表面黄白色，皱缩。有时尚带有未脱净的外稃与内稃。腹面有一深陷的纵沟，顶端钝形，带有浅黄棕色柔毛，另一端成斜尖形，有脐。质硬而脆，易断，断面白色，粉性差。无臭，味淡。\n【性味归经】性凉，味甘。归心经。\n【功效与作用】除虚热、止汗。属清热药下属分类的清虚热药，或属收涩药下属分类的固表止汗药。\n【临床应用】内服：煎汤，用量15～30克，或研末；止汗，宜微炒用。主治阴虚发热、盗汗、自汗。\n【化学成分】主要含淀粉、蛋白质、糖类等成分。\n【使用禁忌】无汗而烦躁或虚脱汗出者忌用。\n【配伍药方】①治盗汗及虚汗不止：浮小麦不以多少。文武火炒令焦，为细末，每服6克，米饮汤调下，频服为佳。(《卫生宝鉴》独圣散)\n②治盗汗：用浮小麦一抄。煎汤。调防风末6克服。(《卫生易简方》)\n③治男子血淋不止：浮小麦加童便炒为末，砂糖煎水调服。(《奇方类编》)\n④治脏躁症：浮小麦30克，甘草15克，大枣10枚。水煎服。(《青岛中草药手册》)" },

  {
    "id": 2,
    "price": 17.5,
    "name": "红芪",
    "key": "红芪",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/62de770f-10f3-4e16-869a-4abdb29bfc40.jpg",
    "cat": 10,
    "brief": "野生红芪片500g无硫熏中药材甘肃岷县包邮非特级黄芪正品泡水喝",
    "alias": "【中药名】\n红芪 hongqi\n【别名】\n晋芪、独根、黑芪、真盘子。\n【英文名】\nHedysari Radix。",
    "explain": "【来源】豆科植物多序岩黄芪Hedysarum polybotrys Hand.-Mazz.的根。\n【植物形态】多年生草本。主根粗大，外皮红棕色。奇数羽状复叶。总状花序腋生，具花20～25朵；苞片钻形；花萼斜钟形，最下面的1枚萼齿较其余4枚长1倍；花冠淡黄色，旗瓣窄倒卵形，翼瓣与旗瓣等长，耳与爪也近等长，龙骨瓣比旗瓣与翼瓣长。荚果有3～5荚节，荚节近圆形，边缘有窄翅，表面被贴伏短柔毛。花期6～8月，果期7～9月。\n【产地分布】生于山地阳坡草地灌丛中。分布于宁夏、甘肃南部。\n【采收加工】春、秋季采挖，除去须根及根头，晒干。\n【药材性状】圆柱形，少有分枝，上端略粗。表面灰红棕色，有纵皱纹、横长皮孔及少数支根痕，外皮易脱落，脱落处淡黄色。质硬而韧，不易折断，断面纤维性，并显粉性，皮部黄白色，木部淡黄棕色，射线放射状，形成层环浅棕色。气微，味微甜，嚼之有豆腥味。\n【性味归经】性温，味甘。归肺经、脾经。\n【功效与作用】补气固表、利尿托毒、排脓、敛疮生肌。属收涩药下属分类的固表止汗药。\n【临床应用】用量9～30克，水煎服。用治气虚乏力、食少便溏、中气下陷、久泻脱肛、便血崩漏、表虚自汗、气虚水肿、痈疽难溃、血虚萎黄、内热消渴；慢性肾炎蛋白尿、糖尿病。\n【药理研究】具有显著的免疫促进、延缓衰老作用;改善实验性呼吸窘迫综合征;增强耐缺氧能力;镇静、镇痛、抗炎，抗病原微生物等。\n【化学成分】红芪含红芪多糖、刺芒柄花素、多种氨基酸、刺芒柄花素、阿魏酸烷(基)酯等，另含21种无机元素成分。\n【使用禁忌】痈疽初起者和孕妇慎用。" },

  {
    "id": 3,
    "price": 17.5,
    "name": "麻黄根",
    "key": "麻黄根",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/7740a06b-8077-4cb1-a66a-16bc1667b2bb.jpg",
    "cat": 10,
    "brief": "中药麻黄根材500克包邮 天然纯 无硫 野生 苦椿菜 新货中草药店铺",
    "alias": "【中药名】\n麻黄根 mahuanggen\n【别名】\n苦椿菜。\n【英文名】\nEphedrae Radix Et Rhizoma。",
    "explain": "【来源】麻黄科植物草麻黄Ephedra sinica Stapf或中麻黄Ephedra intermedia Schrenk et C.A.Mey.的干燥根茎。\n【植物形态】草本状灌木。株高20～40厘米。木质茎短或呈匍匐状。小枝直伸或微曲，对生或轮生，直径约2毫米，中部节间长2.5～5厘米。叶2裂，裂片锐三角形，先端急尖，占叶鞘的1/3～2/3.雄球花常成复穗状花序，具4对苞片，雄蕊7～8，花丝结合或顶端微分离。雌球花单生枝顶或老枝叶腋，有4对苞片，最上1对合生部分占1/2以上，雌花2。雌球花熟时肉质红色，长圆状卵球形或球形，长约8毫米，种子2粒，种子三角状卵球形，长5～6毫米。花期5～6月，8～9月种子成熟。\n【产地分布】生于砂质干燥地。分布于吉林、辽宁、河北、河南、山西、陕西、内蒙古、宁夏、甘肃、新疆等。\n【采收加工】秋末采挖，除去残茎、须根和泥沙，干燥。\n【药材性状】呈圆柱形，略弯曲，长8～25厘米，直径0.5～1.5厘米。表面红棕色或灰棕色，有纵皱纹和支根痕。外皮粗糙，易成片状剥落。根茎具节，节间长0.7～2厘米，表面有横长突起的皮孔。体轻，质硬而脆，断面皮部黄白色，木部淡黄色或黄色，射线放射状，中心有髓。气微，味微苦。\n【性味归经】性平，味甘、涩。归肺经、心经。\n【功效与作用】固表止汗。属收涩药下属分类的固表止汗药。\n【临床应用】用量3～9克。水煎服，外用适量，研粉撒扑。用治自汗，盗汗。\n【药理研究】具有降压、止汗的作用。\n【化学成分】含麻黄碱A、B、C、D，阿魏酰组胺，麻黄根素A，麻黄双酮A、B、C、D，酪氨酸甜菜碱等。\n【使用禁忌】有表邪者忌服。\n【配伍药方】①治虚汗无度：麻黄根、黄芪等分。为末，飞面糊，做丸梧桐子大。每用浮麦汤下百丸，以止为度。(《谈野翁试验方》)\n②治虚劳盗汗不止：麻黄根(锉)、牡蛎(煅)、黄芪(锉)等分。上三味，粗捣筛。每服9克，水一盏，葱白三寸，同煎至半盏，去滓温服。(《圣济总录》麻黄根汤)\n③治盗汗：麻黄根0.9克，故败扇(烧屑)0.3克，凡二物，治筛，以乳服0.9克，大人方寸匕，日三。(《医心方》引《范汪方》麻黄散)\n④治产后虚汗不止：当归(锉，微炒)30克，麻黄根60克，黄芪(锉)30克。上药捣粗，罗为散。每服12克，以水一中盏，煎至六分，去滓，不计时候温服。(《圣惠方》麻黄根散)\n⑤治脚汗：麻黄根30%，牡蛎30%，乌洛托品15%，滑石粉25%。上药共研末，用适量撒在脚上即可。一般能保持10～15天脚不出汗。(《全国中草药汇编》)" },

  {
    "id": 4,
    "price": 17.5,
    "name": "糯稻根",
    "key": "糯稻根",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/c24af390-7c34-43ad-8c7d-9e31b610f33d.jpg",
    "cat": 10,
    "brief": "糯稻根 糯稻根中药500g克/包邮中药材糯谷根糯稻草根须",
    "alias": "【中药名】\n糯稻根 nuodaogen\n【别名】\n糯稻根须、稻根须、糯谷根、糯稻草根。\n【英文名】\nRadix oryzae glutinosae",
    "explain": "　【来源】禾本科植物糯稻Oryza sativea L.var.glutinosa Matsum.的干燥根及根茎。\n【植物形态】一年生草本，高1米左右。秆直立，圆柱状。叶鞘与节问等长，下部者长过节间，叶舌膜质而较硬，狭长披针形，基部两侧下延与叶鞘边缘相结合，叶片扁平披针形，长25～60厘米，宽5～15毫米，幼时具明显叶耳。圆锥花序疏松，颖片常粗糙，小穗长圆形，通常带褐紫色，退化外稃锥刺状，能育外稃具5脉，被细毛，有芒或无芒，内稃3脉，被细毛；鳞被2，卵圆形，雄蕊6，花柱2，柱头帚刷状，自小花两侧伸出。颖果平滑。粒饱满，稍圆，色较白。花、果期7～8月。\n【产地分布】我国南部和中部各地均有栽培。\n【采收加工】夏、秋两季，糯稻收割后，挖取根茎及须根，除去残茎，洗净，晒干。\n【药材性状】本品全体集结成疏松的团状，上端有分离的残茎，圆柱形，中空，长2.5～6.5厘米，外包数层灰白色或黄白色的叶鞘，下端簇生多数须根。须根细长而弯曲，直径1毫米。表面黄白色至黄棕色，表皮脱落后显白色，略具纵皱纹。体轻，质软，气微，味淡。\n【性味归经】性平，味甘。归肺经、肾经。\n【功效与作用】养阴除热，止汗。属收涩药下分类的固表止汗药。\n【临床应用】内服：煎汤，15～30克，大剂量可用60～120克。主治阴虚发热、自汗盗汗、口渴咽干、肝炎、丝虫病。\n【化学成分】本品主要含胱氨酸、组氨酸等多种氨基酸及葡萄糖、果糖、山柰素成分。\n【使用禁忌】尚无。\n【配伍药方】①治阴虚盗汗：糯稻根、乌枣各60克，红糖30克，水煎服。(《福建药物志》)\n②治肝炎：糯稻根、紫参各62克。加糖适量煎服。(南药《中草药学》)\n③治丝虫病(乳糜尿)：糯稻根250～500克，可酌加红枣。水煎服。(南药《中草药学》)\n④治鼻衄：糯稻根30克，水车前15克。水煎服。(《福建药物志》)" },

  {
    "id": 5,
    "price": 17.5,
    "name": "番石榴叶",
    "key": "番石榴叶",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/d4ce2388-8847-4d20-ad04-1e2b03eb940b.jpg",
    "cat": 10,
    "brief": "静萱番石榴叶500g克中药材鸡矢茶番桃叶可磨番石榴叶粉",
    "alias": "【中药名】\n番石榴叶 fanshiliuye\n【别名】\n鸡屎果叶、番稔叶。\n【英文名】\nFolium Psidii Guajavae",
    "explain": "【药用部位】桃金娘科植物番石榴Psidium guajava Linnaeus的嫩叶。\n【植物形态】小乔木或大灌木。树皮片状脱落，褐色或略带红色；小枝方柱状，被柔毛。叶对生，有短柄，革质，椭圆形或长圆形，顶端短尖，基部圆或钝，两面被微柔毛或上面无毛；侧脉每边12～15条，上面凹陷。花白色，1～3朵腋生于总梗上，萼被微柔毛，花瓣长圆形或倒卵形；雄蕊多数，花丝纤细；柱头盘状。浆果球状或梨状，淡绿色，种子极多。\n【产地分布】生于旷野和村庄附近。广东、海南、广西等地有栽培。\n【采收加工】全年均可采收。摘取嫩叶，晒干。\n【药材性状】叶革质，长椭圆形或长圆形；先端钝或短尖，基部钝圆，多带1厘米长的短叶柄。叶面黄青色，叶背色稍浅，粗糙而被细柔毛；中脉和侧脉甚明显。气微，味涩。\n【性味归经】味甘、涩，性平。归大肠经。\n【功效与作用】燥湿健脾、清热解毒、涩肠止泻、收敛止血。属清热药下属中的清热燥湿药。\n【临床应用】用量9～15克，煎服。用治水泻或伤食泄泻不止。外用治外伤出血、跌打扭伤，对泻痢腹痛、食积腹胀、齿龈肿痛、风湿痹痛、湿疹臁疮、疔疮肿毒有一定作用。\n【药理研究】番石榴叶提取黄酮苷对实验性四氧嘧啶性糖尿病大白鼠及正常大白鼠具降糖作用；甲醇提取物具抗炎、镇痛、解热作用，番石榴叶对小鼠中枢神经系统有一定的抑制作用，并具局部止血的功效与作用；体外还具抗轮状病毒作用。此外，精油及其主要成分具抗伤害作用。临床用治糖尿病及小儿轮状病毒肠炎，具一定的疗效。\n【化学成分】番石榴叶含桉油醇、槲皮素、番石榴苷、生长苷、番石榴酸、马斯里酸、番桃酸、熊果酸、齐墩果酸、山楂酸及黄酮类、三萜类等成分。番石榴叶的挥发油含量约为0.3%。\n【使用禁忌】大便秘结、泻痢积滞未清者忌服。\n【配伍药方】①治肠炎，痢疾: 番石榴鲜叶一至二两，煎服。(《云南中草药选》)\n②治跌打损伤， 刀伤出血: 番石榴鲜叶捣烂外敷患处。(广州空军《常用中草药手册》)" },

  {
    "id": 6,
    "price": 17.5,
    "name": "榼藤子",
    "key": "榼藤子",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/2fab704b-9ff1-4687-8ba1-e6ed0a367e85.jpg",
    "cat": 10,
    "brief": "木腰子500g西藏阴阳子过江龙子榼藤子菩提子中藥材中药材",
    "alias": "【中药名】\n榼藤子 ketengzi\n【别名】\n象豆、合子、眼镜豆、榼子、牛眼睛。\n【英文名】\nSemen Entadae Phaseolodium",
    "explain": "【药用部位】豆科植物榼藤Entada phaseoloides (L.) Merr.的成熟种子。\n【植物形态】木质大藤本。叶为2回偶数羽复叶；有羽片3对，顶生1对变态为卷须，下部2对各有2~4对；小叶对生，有短柄，近革质，长圆形或长圆状披针形，顶端钝或圆，通常微凹头，基部歪斜，楔尖或稍钝。春、夏季开黄色花；芳香，排成腋生、密花且柔弱的穗状花序；萼阔钟状，5浅裂；花瓣5片，长椭圆形，顶端近短尖，无毛；雄蕊10枚，离生；子房有短柄，花柱丝状。荚果大，木质，扁平，弯曲，有10~ 30节，成熟时逐节脱落，每节都含1粒种子。种子扁平，圆形；种皮厚，木质，暗褐色或黑褐色，有光泽。\n【产地分布】常生于林中，攀援于大树上。分布于广东、云南、广西、海南、福建、台湾等地方，越南亦有分布。\n【采收加工】秋季采收，摘取成熟荚果，剥除果壳，晒干。\n【药材性状】榼藤子呈卵圆形或椭圆形。表面灰黄色或黄棕色，微具纵棱，一端钝圆，有一椭圆形疤痕种脐，色较淡，在其两侧各有一个小突起；另一端稍尖。种皮质硬脆，破开后内面红棕色，有麻纹。种仁1枚卵圆形，皱而坚实，表面有灰棕色皱缩的薄膜状外胚乳，内胚乳黄白色，坚实，有油性。气微香，味微甜。炒熟后具香气。\n【性味归经】性平，味微甘、涩。归胃经、肝经、大肠经。\n【功效与作用】行气止痛，利湿消肿。属收涩药下属的敛肺涩肠药。\n【临床应用】用量3～9克，烧存性研末，煎服。用治便血、血痢、痔疮；黄疸、脚气、水肿；胃痛、疝气痛、喉痹肿痛等。\n【药理研究】从榼藤子的种仁中分离出有抗肿瘤作用的皂苷元，酸解产生槛藤子酸、阿拉伯糖、木糖。并具有抗病原体的功效与作用；种子核仁所含毒性皂苷对哺乳动物主要引起溶血作用。\n【化学成分】含脂肪油、甾醇、黄酮类、酚性成分、氨基酸、有机酸等。\n【使用禁忌】有毒，内服不可过量。\n【配伍药方】①治五痔：用榼子烧成黑炭，微存性，米饮调服。(《本草衍义》)\n②治胃痛、疝气痛：用榼藤子1.5～3克。研粉冲开水服。(《广西本草选编》)\n③治急性肠炎、胃炎：榼藤种子炒熟研粉。冲开水服，每次3～9克，每日2～3次。(《中国民族药志》)" },

  {
    "id": 7,
    "price": 17.5,
    "name": "肉豆蔻",
    "key": "肉豆蔻",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/e508dc90-3386-4d33-bd27-9bce6bf04e1f.jpg",
    "cat": 10,
    "brief": "中药材肉豆蔻250g包邮香料肉寇肉扣豆蔻粉非500克 另售草果高良姜",
    "alias": "【中药名】\n肉豆蔻 roudoukou\n【别名】\n肉豆叩、肉果、玉果、顶头肉、迦拘勒。\n【英文名】\nMyristicae Semen。",
    "explain": "【药用部位】肉豆蔻科植物肉豆蔻Myristica fragrans Houtt.的成熟种仁。\n【植物形态】常绿乔木。单叶互生，革质；叶片椭圆状披针形或长圆状披针形，先端渐尖，基部急尖，全缘，上面暗绿色，下面色较淡，并有红棕色的叶脉。总状花序腋生，花单生，异株，小苞片鳞片状，花被钟形，3裂，黄白色；雄蕊8~12枚，花丝联合成圆柱状，花药合生；子房1室，柱头无柄。果实梨形或近圆球形，淡黄色或橙红色，肉质，露出红色肉质的假种皮，内含种子1粒，种皮红褐色，木质坚硬。\n【产地分布】热带地区广为栽培。分布于马来西亚、印度尼西亚、巴西等国家。我国云南、海南、广东有栽培。\n【采收加工】每年4～6月及11～12月各采收1次。成熟果实剖开果皮，剥下假种皮，击破壳状种皮。直接烘干，或将种仁放入石灰乳中浸1天，然后低温烘干。\n【药材性状】卵圆形或椭圆形。表面灰棕色或灰黄色，有时外被白粉(石灰粉末)。全体有浅色纵行沟纹及不规则网状沟纹。种脐位于宽端，呈浅色圆形突起，合点呈暗凹陷。种脊呈纵沟状，连接两端。质坚，断面显棕黄色相杂的大理石花纹，宽端可见干燥皱缩的胚，富油性。气香浓烈，味辛。\n【性味归经】性温，味辛。归大肠经、胃经、脾经。\n【功效与作用】温中行气、涩肠止泻。属收涩药下分类的敛肺涩肠药。\n【临床应用】用量3～9克，煎服。用治脾胃虚寒、久泻不止、脘腹胀痛、食少呕吐。肉豆蔻(去壳，为末)l两，生姜汁二合，白面2两。上三味，将姜汁和面做饼，裹肉豆蔻末煨令黄熟，研为细散。每服二钱七，空心米饮调下，日午再服。治水泻无度、肠鸣腹痛(《圣济总录》肉豆蔻散)。\n【药理研究】肉豆蔻主要有止泻抗炎、抗血小板凝聚、抗癌、中枢镇静、抗菌等功效与作用。\n【化学成分】肉豆蔻主含挥发油，主要活性成分肉豆蔻醚、黄樟醚。另含脂肪油、淀粉、没食子油酸等其他成分。\n【使用禁忌】有小毒。凡使，勿令犯铜不能用金属物品存放，不宜用生品。\n【配伍药方】1.治脾胃虚弱，大便不实，饮食不思：破故纸(炒)四两，肉豆蔻(生用)二两，五味子二两，吴茱萸四两。上药为末。生姜四两切碎，红枣四十九枚，用水一碗煮姜、枣，去姜，水干，取枣肉和药丸，桐子大。每服五七十丸，空心盐汤下。(《内科摘要》四神丸)\n2.治小儿霍乱不止：肉豆蔻一分(去壳)，藿香半两。上件药捣粗罗为散。每服一钱，以水一小盏，煎至五分，去滓，不计时候温服。(《圣惠方》)" },

  {
    "id": 8,
    "price": 17.5,
    "name": "五味子",
    "key": "五味子",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/b11c5cf1-d3ac-4c90-802a-8f5bd1b2809c.jpg",
    "cat": 10,
    "brief": "野生五味子500g长白山北五味子新货油籽正品特级泡茶泡酒中药1斤",
    "alias": "【中药名】\n五味子\n【别名】\n北五味子、玄及、会及、五梅子、山花椒。\n【英文名】\nSchisandrae Chinensis Fructus",
    "explain": "【药用部位】为木兰科植物五味子Schisandra chinensis(Turcz.)Baill.的干燥成熟果实。\n【植物形态】落叶木质藤本。小枝褐色，有棱角，全株近无毛。单叶，互生，叶柄长2～4.5厘米，叶倒卵形、宽卵形或椭圆形，长5～10厘米，宽3～5厘米，先端急尖或渐尖，基部楔形，边缘有腺状细齿，上面光滑无毛，下面叶脉上嫩时有短柔毛。花单性，雌雄异株，花单生或簇生于叶腋，花梗细长而柔弱，花被6～9片，乳白色或粉红色，雄花有雄蕊5枚，雌花的雌蕊群椭圆形，有17～40个离生的心皮，覆瓦状排列在花托上。开花后期，花托逐渐延长，果熟时成穗状聚合果。浆果，肉质，直径约5毫米，紫红色。种子肾形，淡橙色，有光泽。花期5～6月，果期8～9月。\n【产地分布】生于山坡杂木林下，常缠绕在其他植物上。分布于黑龙江、吉林、辽宁、河北、山西、内蒙古、陕西，主产于黑龙江、吉林、辽宁。\n【采收加工】秋季果实成熟时采摘，晒干或蒸后晒干，除去果梗和杂质。\n【药材性状】五味子呈不规则的球形或扁球形，直径5～8毫米。表面红色、紫红色或暗红色，皱缩，显油润；有的表面呈黑红色或出现“白霜”。果肉柔软，种子1～2，肾形，表面棕黄色，有光泽，种皮薄而脆。果肉气微，味酸，种子破碎后，有香气，味辛、微苦。\n【性味归经】性温，味酸、甘。归肺经、心经、肾经。\n【功效与作用】收敛固涩、益气生津、补肾宁心。属收涩药分类下的敛肺涩肠药。\n【临床应用】用量2～6克，煎汤内服；研末，每次1～3克；熬膏；或入丸、散。外用：适量，研末掺；或煎水洗。用治久嗽虚喘，梦遗滑精，遗尿尿频，久泻不止，自汗盗汗，津伤口渴，内热消渴，心悸失眠。\n【药理研究】五味子有促进机体免疫功能与作用；抗氧化及抗衰老；护肝、诱导肝脏药物代谢酶；镇咳祛痰，抗肿瘤；降血糖；强心；增强机体适应能力；抗溃疡；抗肾病变；抗菌等作用。据报导，五味子煎剂静脉注射，对正常兔子都有呼吸兴奋作用，使吸收加深、加快，并能对抗吗啡的呼吸抑制作用，酊剂亦有同样效果。\n【化学成分】五味子果实含多种木脂素，还含挥发油，对中枢兴奋药戊四唑和士的宁半数致死量的影响。种仁含五味子素A、B、C，五味子醇A及五味子醇B[17]。另含五味子醇甲、戈米辛A、戈米辛D、戈米辛E、戈米辛N、戈米辛O、去当归酰戈米辛B、异五味子素、表戈米辛O、华中五味子酯A、a-水芹烯、橙花叔醇、巴豆酰戈米辛等成分。\n【使用禁忌】外有表邪，内有实热，或咳嗽初起、痧疹初发者忌服。\n【配伍药方】①治阳痿不起：五味子、菟丝子、蛇床子各等分。上三味末之，蜜丸如梧桐子。饮服三丸，日三。(《千金要方》)\n②治滑泄：陈米、肉豆蔻(面裹煨)、五味子、赤石脂(研)各30克。上为末。每服6克，粟米汤饮调下，日进三服。(《世医得效方》豆蔻饮)\n③治睡中盗汗：五味子30克，研末，以唾调作饼。敷脐上，以布扎定后睡，候天明取下，一二晚汗即上。(《医方一盘珠》)\n④治肺经感寒，咳嗽不已：白茯苓120克，甘草90克，干姜90克，细辛90克，五味子75克。上为细末。每服6克，水一盏，煎至七分，去滓，温服，不以时。(《鸡峰普济方》五味细辛汤)\n⑤治小儿暴嗽：五味子、桂(去粗皮)、干姜(炮)等分。上三味，粗捣筛。每服3克，水七分，煎至四分，去滓，量大小加减温服。(《圣济总录》五味子汤)" },

  {
    "id": 9,
    "price": 17.5,
    "name": "鸡内金",
    "key": "鸡内金",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/d70182d8-6a21-4b97-b4fd-74ba5e208267.jpg",
    "cat": 10,
    "brief": "江中山楂鸡内金软糖搭六物膏开胃脾胃咀嚼片儿童积食调理",
    "alias": "【中药名】\n鸡内金 jineijin\n【别名】\n鸡肫皮、鸡合子、鸡中金、化石胆、化骨胆。\n【英文名】\nGalli Gigerii Endothelium Corneum",
    "explain": "【药用部位】来源于雉科动物家鸡Gallus gallus domesticus Brisson的干燥沙囊内壁。\n【动物形态】家禽。嘴短而坚，略呈圆锥状，上嘴稍弯曲。鼻孔裂状，被有鳞状瓣。眼有瞬膜。头上有肉冠，喉部两侧有肉垂，通常褐红色；肉冠以雄者高大，雌性低小；肉垂亦以雄性为大。翼短；羽色雌、雄不同，雄性羽色较美，有长而鲜丽的尾羽；雌性尾羽甚短。足健壮，跗、跖及趾均被鳞板；趾4，前3后1，后趾短小，位略高。雄性跗跖部后方有距。家鸡因饲养杂交关系，品种繁多，形体大小及毛色不一。\n【产地分布】善走，喜以足搔地觅食，食物常为植物的种子、果实及昆虫等。雄鸡善啼。全国各地均有饲养。\n【采收加工】杀鸡后，取出鸡肫，剖开，立即取下鸡肫内壁，洗净，干燥。\n【药材性状】不规则的卷片，厚约2毫米。表面黄色、黄绿色或黄褐色，半透明，具明显的条状皱纹。质脆，易碎，断面角质样，有光泽。气微腥，味微苦。\n【性味归经】性平，味甘。归脾经、胃经、小肠经、膀胱经。\n【功效与作用】健胃消食、涩精止遗。属消食药。\n【临床应用】用量3～9克，煎服或研末服，或入丸散。用治食积不消、呕吐泻痢、小儿疳积、遗尿、遗精。\n【药理研究】口服鸡内金粉后，胃液分泌量、酸度、消化力三者均增加，胃的运动期延长，蠕动波增加。此外，鸡内金水煎液对加速排放放射性锶有一定作用。\n【化学成分】鸡内金含胃液素(胃激素)，角蛋白，微量胃蛋白酶，淀粉酶，多种维生素。出生4～8星期的小鸡砂囊内膜还含有胆汁三烯和胆绿素的黄色衍生物，并含赖氨酸，组氨酸，精氨酸，谷氨酸，天冬氨酸，亮氨酸，苏氨酸，丝氨酸，甘氨酸，丙氨酸，半胱氨酸，缬氨酸，甲硫氨酸，异亮氨酸，酪氨酸，苯丙氨酸，脯氨酸，色氨酸等18种氨基酸及铝、钙、铬、钴、铜、铁、镁、锰、钼、铅、锌等微量元素。\n【使用禁忌】脾虚无积滞者慎服。\n【配伍药方】①治食积腹满：鸡内金研末，乳服。（《本草求原》）\n②治反胃，食即吐出，上气：鸡肶胵烧灰，酒服。（《千金方》）\n③治小儿疳病：鸡肫皮二十个（勿落水，瓦焙干，研末），车前子四两（炒，研末）。二物和匀，以米汤溶化，拌入与食。忌油腻、面食、煎炒。（《寿世新编》）\n④消导酒积：鸡内金、干葛（为末）等分。面糊丸，梧子大。每服五十丸，酒下。（《袖珍办》）\n⑤治夜梦遗精：公鸡肫皮七个。焙干为末，每服一钱，空心酒下。（《沈氏经验方》）\n⑥治痟肾，小便滑数白浊，令人赢瘦：鸡肶胵一两（微炙），黄耆半两，五味子半两。上药，粗捣，以水三大盏，煎至一盏半，去滓，食前分温三服。（《圣惠方》）\n⑦治喉闭乳蛾：鸡肫黄皮勿洗，阴干烧末，用竹管吹之。（《青囊杂纂》）\n⑧治一切口疮：鸡内金烧灰，敷之。（《活幼新书》）\n⑨治走马牙疳：鸡肫黄皮（不落水者）五枚，枯矾五钱。研搽。（《经验方》）" },

  {
    "id": 10,
    "price": 17.5,
    "name": "龙骨",
    "key": "龙骨",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/dce047ed-c691-498b-836a-ee4e67815c57.jpg",
    "cat": 10,
    "brief": "包邮 龙骨500克 生龙骨 五花龙骨 青花龙骨 非煅龙骨中药材",
    "alias": "【中药名】\n龙骨 longgu\n【别名】\n五花龙骨。\n【英文名】\nOs Draconis。",
    "explain": "【药用部位】古代哺乳动物象类、犀类、三趾马、牛类、鹿类等的骨骼化石或象类门齿的化石。\n【矿物形态】由磷灰石、方解石及少量黏土矿物组成。磷灰石为六方晶系隐晶质，依古代生物骨骼产出。疏松集合体中或有呈现晶体形小棒状的磷灰石 ，灰白色。略带油脂状，土状光泽或瓷状光泽。硬度大于指甲，小于小刀。方解石的晶体结构属三方晶系。晶体为菱面体，也有呈现柱状及板状者。常以钟乳状或致密粒状集体产出。断口贝壳状，硬度3，性脆。\n【产地分布】多产于山西、内蒙古、河北、河南、湖北、四川、陕西、甘肃等地。\n【采收加工】挖出后，除去泥土及杂质。五花龙骨质酥脆，出土后，露置空气中极易破碎，常用毛边纸粘贴。\n【药材性状】1.龙骨：又称白龙骨。呈骨骼状或不规则块状。表面白色、灰白色或黄白色至淡棕色，多较平滑，有的具纵纹裂隙或具棕色条纹与斑点。质硬，砸碎后，断面不平坦，色白或黄白，有的中空。关节处膨大，断面有蜂窝状小孔。吸湿力强，舔之吸舌。无臭，无味。以质硬、色白、吸湿力强者为佳。\n【性味归经】性平，味涩、甘。归心经、肝经、肾经、大肠经。\n【功效与作用】镇心安神，平肝潜阳，固涩，收敛。属平肝息风药下分类的平抑肝阳药。\n【临床应用】内服：煎汤，10～15克，打碎先煎；或入丸、散。外用：适量，研末撒；或调敷。安神、平肝宜生用，收涩、敛疮宜煅用。主治心悸怔忡，失眠健忘，惊痫癫狂，头晕目眩，自汗盗汗，遗精遗尿，崩漏带下，久泻久痢，溃疡久不收口及湿疮。\n【药理研究】有一定的镇静作用，增加戊巴比妥钠催眠率；还可缩短小鼠的凝血时间。\n【化学成分】主要成分为碳酸钙、磷酸钙等物质。\n【使用禁忌】湿热积滞者慎服。\n【配伍药方】①治好忘：龙骨、虎骨、远志各等分。上三味治下筛。食后服2g，日二。久服聪明益智。(《千金要方》)\n②治虚劳梦泄：龙骨60克，韭子(微炒)60克。上件药捣罗为散，更研令细。每服6g，空心及晚食前以温酒调下。(《圣惠方》)\n③治遗溺淋沥：龙骨、桑螵蛸等分为末，每盐汤服6克。(《纲目》引《梅师经验方》)\n④治金疮出血：龙骨30克，诃子30克，白石脂15克，苎麻叶15克。上为细末，水调服之。(《普济方》神仙止血方)" },

  {
    "id": 11,
    "price": 17.5,
    "name": "沙苑子",
    "key": "沙苑子",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/0aa6a107-8268-4d9a-ac36-4a84d26af22b.jpg",
    "cat": 10,
    "brief": "中药材沙苑子500g野生沙苑子茶 沙苑子粉沙菀子男性正品沙苑",
    "alias": "【中药名】\n沙苑子 shayuanzi\n【别名】\n潼蒺藜、蔓黄芪、夏黄草、沙苑蒺藜。\n【英文名】\nAstragali Complanati Semen。",
    "explain": "【药用部位】豆科植物扁茎黄芪Astragalus complanatus R.Br.的成熟种子。\n【植物形态】多年生草本，高30～100厘米，通体疏被柔毛。根长而粗壮。茎略扁，较细弱，基部常倾卧，有分枝。单数羽状复叶互生，托叶小，披针形；小叶9～21片，矩状椭圆形，先端浑圆或微凹，有小细尖，小叶柄不明显。夏季开黄色蝶形小花，总状花序腋生，总梗细长，上部疏生3～9朵花，旗瓣近圆形，先端凹入，基部有爪；2强雄蕊较雌蕊短，柱头有髯毛。荚果膨胀，纺锤形，长约3厘米，先端有尖喙，表面被黑色硬毛，里面具假隔膜。种子20～30粒，圆肾形，长约2毫米，宽约1.5毫米，厚不足1毫米。表面灰棕色至深棕色，光滑。两面微凹陷，在凹入一侧有明显的种脐。\n【产地分布】生于山坡草丛、田边、路旁。分布于山西、内蒙古、陕西等地。\n【采收加工】秋末冬初果实成熟尚未开裂时采割植株，晒干，打下种子，除去杂质，晒干。\n【药材性状】肾形而稍扁，长2～2.5毫米，宽1.5～2毫米，厚约1毫米。表面光滑，褐绿色或灰褐色，边缘一侧微凹处具圆形种脐。质坚硬，不易破碎。子叶2，淡黄色，胚根弯曲，长约l毫米。无臭，味淡，嚼玄有豆腥味。\n【性味归经】性温，味甘。归肝经、肾经。\n【功效与作用】温补肝肾、固精、缩尿、明目。属补虚药下属分类的补阳药。\n【临床应用】用量9～15克，水煎服。用治肾虚腰痛、遗精早泄、白浊带下、小便余沥、眩晕目昏。\n【药理研究】具有适应原样、收缩子宫和缩尿、降压、抗炎、保肝、改善血液流变性和抑制血小板聚集、增加脑血流量、调血脂等作用。\n【化学成分】主要含三萜糖苷、黄酮及多种糖苷、异黄酮苷、氨基酸和多种脂肪酸类化合物及大量微量元素。\n【使用禁忌】相火炽盛，阳强易举者忌服。\n【配伍药方】①治肾虚精关不固，遗精滑泄，腰酸耳鸣，四肢乏力，舌淡苔白，脉细弱：沙苑蒺藜（炒）、芡实（蒸）、莲须各二两，龙骨（酥炙）、牡蛎（盐水煮一日一夜，煅粉）各一两。共为末，莲子粉糊为丸，盐汤下。（《医方集解》金锁固精丸）\n②治翳障（如早期老年性白内障）：沙苑子、石菖蒲、女贞子、生地黄、菟丝子、夜明砂各30克。共研细末，每次服12克，水煎服（《中药临床应用》补肾明目散）\n③治男子精薄无嗣，久患梦遗，妇人滑胎不孕等：黄鱼鳔胶（白净者一斤，切碎，用蛤粉炒成珠，以无声为度），沙苑蒺藜八两（马乳浸两宿，隔汤煮一炷香久取起，焙干）。上为末，炼蜜丸如梧桐子大。每服八十丸，空心温酒、白汤任下。忌食鱼及牛肉。(《证治准绳》聚精丸)" },

  {
    "id": 12,
    "price": 17.5,
    "name": "山萸肉",
    "key": "山萸肉",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/b2bb2a66-c047-4faa-bd96-d431b87d81f2.jpg",
    "cat": 10,
    "brief": "山茱萸500g克野生山茱萸肉正品山萸肉山茱萸粉中药材特级山茱萸干",
    "alias": "【中药名】\n山萸肉 shanyurou\n【别名】\n山茱萸、萸肉、药枣。\n【英文名】\nCorni Fructus。",
    "explain": "【药用部位】山茱萸科植物山茱萸Cornus officinalis Sieb.et Zucc.的成熟果肉。\n【植物形态】落叶灌木或小乔木，高约4米。树皮淡褐色，成薄片剥裂。枝皮灰棕色，小枝无毛。单叶对生，具短柄；叶片椭圆形或长椭圆形，先端渐尖，基部圆或楔形，全缘，上面疏生平贴毛，下面粉绿色，毛较密，侧脉6～8对，脉腋有黄褐色毛丛。夏季先叶开黄色花，伞形花序顶生或腋生，基部具4个小型苞片，花萼裂片4，不明显；花瓣4，长约3毫米；雄蕊4枚，与瓣互生；子房下位，2室，花柱1。核果长椭圆形，光滑，熟时红色，果梗细长，果皮干后呈网纹状。种子长椭圆形，两端钝圆。花期3～4月，果期9～10月。\n【产地分布】生于阴湿沟畔、溪旁或向阳山坡灌丛中；有栽培。分布于山西、陕西、山东等地。\n【采收加工】秋末冬初果皮变红时采收果实，用文火烘或置沸水中略烫后，及时除去果核，干燥。\n【药材性状】果肉呈不规则的片状或囊状，长1～1.5厘米，宽0.5～1.5厘米，厚约1毫米。表面紫红色至紫黑色，皱缩，有光泽。内表面不平滑，有少数纵向脉纹。顶端有的有圆形宿萼痕，基部有果柄痕。质柔润。气微，味酸、涩、微苦。\n【性味归经】性微温，味酸、涩。归肝经、肾经。\n【功效与作用】补益肝肾、涩精固脱。属收涩药下属分类的固精缩尿止带药。\n【临床应用】用量6～12克。用治眩晕耳鸣、腰膝酸疼、阳痿遗精、遗尿尿频、崩漏带下、大汗虚脱、内热消渴。\n【药理研究】药理研究表明，山萸肉有增强机体免疫功能、抗炎、抗衰老、抑菌等功效与作用。此外，还证实有抑制血小板聚集及抗血栓形成的作用以及降血糖、血脂、强心、抗失血性休克等作用。\n【化学成分】山萸肉含有单萜类、脂肪醛、脂肪烃，酸、酯等芳香族化合物，另含有苷类成分，如山茱萸苷、莫罗忍冬苷、7-O-甲基莫罗忍冬苷、獐牙菜苷、番木鳖苷以及鞣质类成分和苹果酸、酒石酸、没食子酸、维生素A。\n【使用禁忌】命门火炽，肝阳上亢，及素有湿热，小便不利者禁服。\n【配伍药方】1.肾虚腰痛、阳痿遗精：山萸肉、补骨脂、菟丝子、金樱子各12克，当归9克，水煎服。\n2.自汗：山萸肉、白术各15克，生龙骨、生牡蛎各30克(先煎)，水煎服。\n3.老人尿频失禁：山萸肉9克，五味子4.5克，益智仁6克，水煎服" }] },



{
  "id": 10,
  "name": "温里",
  "foods": [{
    "id": 1,
    "price": 17.5,
    "name": "澄茄子",
    "key": "澄茄子",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/cf319b5e-d461-4fef-80c0-34fa6dddcb69.jpg",
    "cat": 10,
    "brief": "藏曦堂荜澄茄 又名澄茄 毗陵茄子 毕澄茄 中药材 荜澄茄250克*2罐",
    "alias": "【中药名】\n澄茄子 chengqiezi\n【别名】\n山胡椒、味辣子、山苍子、野胡椒、臭樟子。\n【英文名】\nFructus Litseae Cubebae",
    "explain": "【药用部位】为樟科木姜子属植物山鸡椒Litsea cubeba (Lour.) Pers.的果实。\n【植物形态】落叶灌木或小乔木，高可达10米。叶和果实有芳香气。根圆锥形，灰白色；幼树树皮黄绿色，光滑，老树树皮灰褐色。叶芽无鳞片；幼枝细长，被绢毛。叶膜质，互生；叶柄细弱，长1～2厘米；叶片披针形或长椭圆形，长4～11厘米，宽1.2～2.5厘米，先端渐尖，基部楔形，全缘，上面深绿色，下面苍白绿色，两面均无毛，中脉、侧脉在两面均突起。花先叶开放，雌雄异株；伞形花序单生或簇生，总花梗纤细，长5～10胁，总苞片4，上有4～6朵小花，淡黄色；花被裂片6，倒卵圆形；能育雄蕊9，排成3轮，第3轮基部的腺体具短柄；雌花中退化雄蕊多数，子房卵形，花柱短，柱头头状。浆果状核果近球形，直径4～5毫米，无毛，幼时绿色，成熟时黑色。花期2～4月，果期6～8月。\n【产地分布】生于向阳山坡、丘陵、林缘灌丛或疏林中。主产于广西、浙江、四川、福建等地。\n【采收加工】采收季节性很强。7月中下旬至8月中旬，当果实青色布有白色斑点，用手捻碎有强烈生姜味，为采收适时。如果实尚未完全成熟时采摘，水分多，含柠檬醛少，为过早；若至果实成熟后期，果皮转变为褐色，柠檬醛自然挥发而消失，为过迟。连果枝摘取，除去枝叶，晒干。\n【药材性状】澄茄子果实圆球形，直径4～6毫米。表面棕褐色至棕黑色，有网状皱纹，基部常有果柄痕。中果皮易剥去；内果皮暗棕红色，果皮坚脆，种子1粒，内有肥厚子叶2枚，富含油质。具特异强烈窜透性香气，味辛、凉。以个大饱满，气味深厚、有油质者为佳。\n【性味归经】性温，味辛、微苦。归胃经、脾经、肾经。\n【功效与作用】温中止痛，行气活血，平喘，利尿。属温里药。\n【临床应用】内服：煎汤，用量3～10克；研末，用量1～2克。外用：研末撒或调敷。主治脘腹冷痛，食积气胀，反胃呕吐，中暑吐泻，泄泻痢疾，寒疝腹痛，哮喘，寒湿水臌，小便不利，小便浑浊，疮疡肿毒，牙痛，寒湿痹痛，跌打损伤。\n【药理研究】1.抗血小板聚集作用；2.抗心肌缺血和心肌梗死作用；3.平喘和抗过敏作用；4.抗菌作用。\n【化学成分】澄茄子鲜果含挥发油1.6%～3%，其中主成分为柠檬醛，其次为柠檬烯。种子含油36.4%～52.2%，其中脂肪酸主要有：月桂酸56.4%-61.5%、癸酸14.2%～19.8%、油酸4.1%～6.5%。还含有生物碱。\n【使用禁忌】实热及阴虚火旺者忌用。\n【配伍药方】1.治胃寒痛，疝气：山鸡椒果实1.5-3克，开水泡服；或研粉，每次服1～1.5克。(《恩施中草药手册》)\n2.治胃寒腹痛，呕吐：木姜子9克，干姜9克，良姜9克。水煎服。(《四川中药志》1982年)\n3.治单纯性消化不良：山苍子6克，茶叶3克，鸡矢藤9克。水煎服，每日1剂，分3～4次服。(《全国中草药汇编》)\n4.治支气管哮喘：澄茄子、胡颓叶、地黄根(野生地)各15克。水煎服，忌食酸辣。(《浙江民间常用草药》)" },

  {
    "id": 2,
    "price": 17.5,
    "name": "丁香",
    "key": "丁香",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/4565de44-18d7-44ca-b1d4-2bae872d989c.jpg",
    "cat": 10,
    "brief": "同仁堂猴头菇沙棘丁香养胃茶非去除口臭调理肠胃暖胃养生三清茶包",
    "alias": "【中药名】\n丁香 dingxiang\n【别名】\n丁子香、公丁香、雄丁香、如宇香、百里馨。\n【英文名】\nFlos Caryophylli",
    "explain": "【药用部位】桃金娘科植物丁香Eugenia caryophyllata Thunb.的花蕾。\n【植物形态】多年生常绿乔木，高12米。树皮灰白色而光滑。单叶对生，革质，卵状长椭圆形至披针形，先端尖，基部狭呈楔形，全缘，侧脉多，平行状，具多数透明小油点，叶柄明显。花顶生，3朵一组，集成聚伞形圆锥花序；花萼筒状，顶端4裂，裂片呈三角形，肉质肥厚，有油腺；花冠圆头状，花瓣4，白色而现微紫色；雄蕊多数，子房下位，柱头细小。浆果红色或深紫色，卵圆形，内有种子1粒，呈椭圆形。\n【产地分布】丁香原产于马来西亚、印度尼西亚及东非沿岸国家，现我国有栽培。\n【采收加工】当花蕾由绿色转红时采摘，晒干。\n【药材性状】略研棒状。花冠圆球形，花瓣4，覆瓦状抱合，棕褐色至黄褐色，花瓣内为雄蕊和花柱，搓碎后可见众多黄色细粒状的花药。萼筒圆柱状，略扁，有的稍弯曲，红棕色或棕褐色，上部有4枚三角状的萼片，“十”字形分开。质坚实，富油性。气芳香浓烈，味辛辣，有麻舌感。\n【性味归经】味辛，性温。归胃经、脾经、肾经。\n【功效与作用】温中降逆、补肾助阳。属温里药。\n【临床应用】用量1～3克，煎服。用治脾胃虚寒、呃逆呕吐、食少吐泻、心腹冷痛、肾虚阳痿。\n【药理研究】丁香有抗胃溃疡，止泻，利胆，镇痛，抗缺氧，抗凝血，抗突变，抑菌杀虫的功效与作用。丁香还具健胃的功效与作用，浸出液具有明显的刺激胃液分泌作用，并能缓解腹胀、恶心、呕吐等。另外，丁香对多种致病性真菌、球菌、链球菌及肺炎、痢疾、大肠、伤寒等杆菌以及流感病毒有抑制作用。\n【化学成分】含挥发油15%～20%，油中主成分为丁香油酚、β-丁香烯、乙酰基丁香油酚等。另含丁香酚、乙酰丁香酚、异槲皮素、山柰酚、槲皮素、石竹烯氧化物、齐墩果酸、α-衣兰油烯等成分。\n【使用禁忌】热病及阴虚内热者忌服。\n【配伍药方】①治朝食暮吐：丁香十五个。研末。甘蔗汁、姜汁和丸莲子大。噙咽之。(《摘玄方》)\n②治久心痛不止：丁香15克，桂心30克。捣细，罗为散，每于食前，以热酒调下3克。(《圣惠方》)\n③治冷心疼，面青唇黑，手足厥冷：丁香、良姜、官桂各4.5克。水一碗煎七分，用胡椒二十粒炒黄色为末，调入汤药内热服。(《心医集》)\n④治妇人崩中，昼夜不止：丁香60克，酒二升，煎一升，分服。(《梅师方》)\n⑤治乳头裂破：捣丁香末敷之。(《梅师方》)" },

  {
    "id": 3,
    "price": 17.5,
    "name": "山胡椒",
    "key": "山胡椒",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/461b1608-91d5-456c-8ff3-ae98b76d1b64.jpg",
    "cat": 10,
    "brief": "真空保鲜山胡椒四川特产山苍子粒木江子新鲜木姜子包邮",
    "alias": "【中药名】\n山胡椒 shanhujiao\n【别名】\n山花椒、山龙苍、雷公尖、野胡椒、香叶子、楂子红、臭樟子。\n【英文名】\nLinderae Glaucae Fructus。",
    "explain": "【药用部位】为樟科植物山胡椒Lindera glauca(Sieb. et Zucc.) Bl.的干燥成熟果实。\n【植物形态】落叶灌木或小乔木，高达8米。根粗壮坚硬，外皮灰白或暗褐色，断面肉质，晒干后有鱼腥气。树皮光滑，灰色或灰白色；冬芽(混合芽)外部鳞片红色；嫩枝初被褐色短毛，后渐脱落。叶互生或近对牛；叶柄长约2毫米，有细毛；叶片宽椭圆形至狭倒卵形，长4～9厘米，宽2～4厘米，先端短尖，基部阔楔形，全缘，上面暗绿色，仅脉间有细毛，下面粉绿色，密被灰色柔毛，叶脉羽状；每侧5～6条。花单性，雌雄异株；伞形花序，3～8朵小花簇生于头年生枝的叶腋；花被6片，黄色，雄花有雄蕊9，排成3轮，花药2室，内向瓣裂；雌花退化雄蕊细小，子房椭圆形，柱头盘状。核果球形，直径约7毫米，有香气。花期3～4月，果熟期7～9月。\n【产地分布】生于山地、丘陵的灌丛中和疏林缘。分布于浙江、安徽、福建、江西、山东、河南、湖南、广东、广西、四川、云南、台湾等地。\n【采收加工】9～11月果熟时采收，晒干。\n【药材性状】山胡椒呈球形，黑褐色，具网状皱纹，先端钝圆，基部有自果轴脱落的疤痕。质硬，外果皮可剥离，除去果皮，可见硬脆的果核。质坚脆，有光泽，外有一隆起纵横纹。破开后，内含种子1粒，胚具子叶2片、富油性。气香，味辛辣，微苦而麻。\n【性味归经】性温，味辛。归肺经、胃经。\n【功效与作用】温中散寒，行气止痛，平喘。属温里药。\n【临床应用】用量3～15克，煎服。用治脘腹冷痛，胸满痞闷，哮喘。\n【药理研究】1.抗病原微生物作用：体外试验山胡椒挥发油对常见的14种革兰阳性和阴性细菌均有不同程度的抗菌作用，其中对卡他奈球菌、乙型链球菌、肺炎链球菌等的抗菌作用最强(抗菌效价在1：1000以上)。此外，该挥发油对新型隐球菌和白色念珠菌两种真菌也表现明显的抑菌作用。2.耐缺氧作用：1.5克/10克水提液腹腔注射，可延长小鼠耐缺氧时间。\n【化学成分】果实含挥发油，主要成分为罗勒烯约占77.99%，此外还含α-及β蒎烯，樟烯，壬醛，癸醛，1,8-桉叶素，柠檬醛，对聚伞花素，黄樟醚，龙脑，乙酸龙脑酯，γ-广蕾香烯等成分。种子中含脂肪酸，其中癸酸55.27%，月桂酸占32.21%，还含硬脂酸，棕榈酸，肉豆蔻酸，辛酸。\n【使用禁忌】孕妇慎服。\n【配伍药方】①治气喘：山胡椒果实60克，猪肺1副。加黄酒，淡味或略加糖炖服。一二次吃完。(江西《草药手册》)\n②治中风不语：山胡椒干果、黄荆子各3克。共捣碎，开水泡服。(《陕西中草药》)" },

  {
    "id": 4,
    "price": 17.5,
    "name": "山姜",
    "key": "山姜",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/6ad283e1-3937-4c3e-b27e-17014499f2d6.jpg",
    "cat": 10,
    "brief": "阳荷茗荷洋荷姜种子阳藿山姜莲花姜种洋河姜苗阳菏姜种苗1斤包邮",
    "alias": "【中药名】\n山姜 shanjiang\n【别名】\n和山姜、九姜连、高良姜、鸡爪莲。\n【英文名】\nRhizoma Alpiniae Japonicae",
    "explain": "【药用部位】为姜科植物山姜Alpinia japonica( Thunb.) Miq.的干燥根茎。\n【植物形态】多年生草本，高35～70厘米。根茎横生，分枝。叶片通常2～5片；近无柄至具长达2厘米的叶柄；叶舌2裂，长约2毫米，被短柔毛；叶片披针形，倒披针形或狭长椭圆形，长25～40厘米，宽4～7厘米，两端渐尖，先端具小尖头，两面被短柔毛。总状花序顶生，长15～30厘米，花序轴密生绒毛；花通常2朵聚生，小花梗长约2毫米；萼棒状，长1～1.2厘米，被短柔毛，先端3齿裂；花冠管长约1厘米，被疏柔毛，花冠裂片长圆形，长约1厘米，外被绒毛，后方的一枚兜状；侧生退化雄蕊线形，长约5毫米；唇瓣卵形，宽约6毫米，白色而具红色脉纹，先端2裂，边缘具不整齐缺刻；雄蕊长1. 2～1. 4厘米；子房密被绒毛。果球形或椭圆形，熟时橙红色，先端具宿存的萼筒；种子多角形，有樟脑味。花期4～8月，果期7～12月。\n【产地分布】生于林下阴湿处。主产于我国浙江、福建、江西、湖北、湖南、广东、广西、四川、贵州、台湾等地。\n【采收加工】栽种2-3年后春季采挖，除去泥沙及杂质，洗净，晒干。\n【药材性状】本品呈圆柱形，有分枝，长5～20厘米，直径0.3～1.2厘米。表面棕色或红棕色，有细密的纵皱纹及灰棕色的细密环节，被有鳞皮状叶鞘，节上有细长须根及圆形的根痕。分枝顶端有茎痕或芽痕。质柔韧，不易折断。断面黄白色或灰白色，纤维性较强，有明显的粉性，圆形内皮层环纹明显，可见细小的孔隙及筋脉点。气香，味辛辣。\n【性味归经】性温，味辛。归肺经、胃经。\n【功效与作用】温中，散寒，祛风，活血。属温里药。\n【临床应用】内服：煎汤，用量5～10克。外用适量，捣敷或煎水洗。用于脘腹冷痛，风湿筋骨疼痛，劳伤吐血，跌损瘀滞，月经不调。\n【药理研究】山姜小剂量对豚鼠小肠无影响，大剂量呈抑制作用，和山姜对乙酰胆碱和氯化钡引起的大鼠肠管紧张性、强直性收缩均有部分拮抗作用。山姜水煎剂灌胃对幽门结扎型、应激型及利血平型大鼠实验性胃溃疡均有不同程度的抑制作用，但对吲哚美辛(消炎痛)型胃溃疡作用不明显。体外试验，山姜煎剂对结肠炎耶尔森菌和摩根变形杆菌的最低抑菌浓度(MIC)是1/160(抑菌力达中度)，最低杀菌浓度(MBC)是1/80(杀菌力为低度)，对福氏痢疾杆菌的抑、杀菌作用分别是1/40和1/10，属低度有效，对肠毒素型大肠杆菌均不表现抑、杀菌作用。\n【化学成分】根茎挥发油：9(10)-佛术烯-11-醇，9-羟基山姜内酯二氢沉香呋喃，10-表γ-桉叶醇，3β，4β-环氧沉香呋喃，山姜烯酮，山姜萜醇，广藿香奥醇，汉山姜过氧萜酮，异汉山姜过氧萜酮，山姜内酯过氧化物，6-羟基山姜内酯，汉山姜环氧萜醇，山姜内酯，呋喃天竺葵酮A和B，α-沉香呋喃，4α-羟基二氢沉香呋喃，3α，4α-环氧沉香呋喃，β-桉叶醇，汉山姜过氧萜醇，6，9-愈创木二烯，10-表-5β-氢过氧基-β-桉叶醇，10-表-5α-氢过氧基-β-桉叶醇，4，10-表-5β-羟基二氢桉叶醇。\n【使用禁忌】尚不明确。\n【药方】1.治风湿筋骨痛：和山姜根500克，花椒子30克，五加皮150克。煎水洗。(《湖南药物志》)\n2.治胃痛：山姜根3～6克，乌药3～6克。研末。温开水送服。(《江西草药》)\n3.治外感咳嗽：和山姜根9克，桑白皮9克，茅草根9克，紫苏叶6克。水煎服。(《湖南药物志》)\n4.治跌打损伤：山姜根15克，大血藤根30克，茜草根15克，牛膝根9克，泽兰9克。白酒500克，浸3-7克。每服15～30克。(《江西草药》)\n5.治虚弱咳嗽：①九姜连9克，大鹅儿肠9克。炖肉吃。②九姜连粉末30克，核桃仁30克。加蜂糖60克，混匀蒸熟，制成龙眼大的丸子。含化吞服。(《贵阳民间药草》)" },

  {
    "id": 5,
    "price": 17.5,
    "name": "桉叶油",
    "key": "桉叶油",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/d0f8b0d4-40e2-4d7f-94a4-0df8174ed46b.jpg",
    "cat": 10,
    "brief": "纯尤加利桉叶精油100ml单方桉树驱蚊虫缓解酸痛按摩香薰提神醒脑",
    "alias": "【中药名】\n桉油 anyeyou\n【别名】\n桉油、蓝桉叶油、尤加利油。\n【英文名】\noil of eucalyptus",
    "explain": "【药材来源】桃金娘科植物蓝桉Eucalyptus globulus Labill.或同属其他植物的叶经水蒸气蒸馏得到的挥发油。\n【植物形态】大乔木，高达十余米。树皮常片状剥落而呈淡蓝灰色；枝略四棱形，有腺点，棱上具窄翼。叶二型：老树着生正常叶，叶片镰状披针形，先端长渐尖，基部宽楔形且略偏斜；幼株及新枝着生异常叶，单叶对生，叶片椭圆状卵形，无柄抱茎，先端短尖，基部浅心形；两种叶下面均密披白粉而呈绿灰色，两面有明显腺点。花通常单生叶腋或2～3朵聚生，无梗或有极短而扁平的梗；萼筒有棱及小瘤体，具蓝白色蜡被；花瓣与萼片合生成一帽状体，淡黄白色，雄蕊多数，数列分离；花柱较粗大。蒴果杯状，有4棱及不明显瘤体或沟纹。\n【产地分布】多为栽培。分布于福建、广东、广西、云南等地。\n【采收加工】秋季采叶，用水蒸气蒸馏，所得挥发油用乙醚萃取，用无水硫酸钠脱水后回收乙醚，即得桉叶油。\n【药材性状】桉叶油为无色或微黄色澄清液体；有特异芳香气，微似樟脑，味辛、凉；贮存日久，色稍变深。本品在70%乙醇中易溶。\n【性味归经】性平，味辛、苦。归经无。\n【功效与作用】疏风解热、祛湿解毒。属解表药下属分类的辛凉解表药。\n【临床应用】用量9～15克；外用适量。用治感冒、流感、肠炎、腹泻、皮肤瘙痒、神经痛，并可治烧伤、除蚊虫。\n【药理研究】叶水煎剂体外对金黄色葡萄球菌、肺炎球菌、绿脓杆菌、大肠杆菌、痢疾杆菌等均有较强抑菌作用，其抗菌作用与所含的没食子酸等有关。蓝桉醛对致癌性启动基因Eb病毒活化具有较强抑制活性。蓝桉中所分得的Ea-Ej等10种成分具抗炎活性，叶水煎剂浸泡兔耳Ⅱ度烫伤面，可使烫伤邻伤组织炎症减轻，局部坏死减轻。桉叶油10%～20%混悬液具局部麻醉作用。此外，还具抗氧化作用。\n【化学成分】含挥发油，桉叶油中主成分为：β-桉叶素、α，β，Y-松油醇、δ，β-蒎烯、醋酸松油脂、香橙烯。此外，尚含枯茗醛等多种成分。又含芦丁、槲皮素、槲皮苷、桉树素、鞣质、树脂及苦味质等。\n【使用禁忌】桉叶油对消化道粘膜有刺激性，消化道炎症、溃疡患者慎用。" },

  {
    "id": 6,
    "price": 17.5,
    "name": "柴胡",
    "key": "柴胡",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/2f4ac616-77fa-49cb-8a12-1998a1438e55.jpg",
    "cat": 10,
    "brief": "白云山小柴胡颗粒10g*10袋/盒解表散热疏肝和胃心烦喜吐",
    "alias": "【中药名】\n柴胡 chaihu\n【别名】\n红柴胡、南柴胡、山菜、茹草、柴草。\n【英文名】\nRadix Bupleuri。",
    "explain": "【药用部位】伞形科植物狭叶柴胡Bupleurum scorzonerifolium Willd.的根(习称“南柴胡”)，或柴胡Bupleurum chinense DC.的根(“习称北柴胡”)。(本文以南柴胡为例)\n【植物形态】多年生草本。主根深长，少分枝。茎上部多分枝，略呈“之”字弯曲。叶互生，线形或狭线形，长7～17厘米，宽2～6厘米，先端渐尖，具短芒，基部渐狭，有5～7条纵脉，具白色骨质边缘。复伞形花序多数，集成疏松圆锥花序；总苞片1～3，条形；伞幅3～8，弧曲；小总苞片5，狭披针形，紧贴小伞；花梗6～15；花黄色。双悬果宽椭圆形，长约2.5毫米，宽约2毫米，棱粗钝凸出。花期7～9月，果期8～10月。\n【产地分布】生于沙质草原、沙丘草甸及阳坡疏林下。主产于湖北、四川、安徽等地。\n【采收加工】春、秋季采挖，除去茎叶及泥沙，干燥。\n【药材性状】根较细，圆锥形，顶端有多数细毛状枯叶纤维，下部多不分枝或稍分枝。表面红棕色或黑棕色，靠近根头处多具细密环纹。质稍软，易折断，断面略平坦，不显纤维性。具败油气。\n【性味归经】性微寒，味苦。归肝经、胆经、肺经。\n【功效与作用】和解表里、疏肝、升阳。属解表药下属分类的辛凉解表药。\n【临床应用】用量3～9克，水煎服；或入丸、散。外用：适量，煎水洗；或研末调敷。用治感冒发热、寒热往来、胸胁胀痛、月经不调、子宫脱垂、脱肛。\n【药理研究】药理试验证明，柴胡具有抗炎、解热、镇静、镇痛、镇咳及抗惊厥作用；可减轻肝损伤和促进胆汁分泌；具有降血压、降低血清胆固醇以及溶血作用；具有抗溃疡、抗菌、抗病毒、抗肿瘤、升高血糖、降低血中脂肪含量、抗辐射损伤等作用。有毒性。\n【化学成分】本品主要含戊酸、亚麻酸、棕榈酸、硬脂酸、山柰酚、山柰苷、槲皮素、芸香苷、香橙烯、龙脑、大叶柴胡皂苷Ⅱ、桃金娘醇、α-菠菜固醇、去葡萄糖基柴胡皂苷α、柴胡皂苷等成分。另含春福寿醇等成分。\n【使用禁忌】真阴亏损，肝阳上亢及肝风内动之证禁服。\n【配伍药方】①治外感风寒，发热恶寒，头痛身痛：柴胡3~9克，防风3克，陈皮4.5克，芍药6克，甘草3克，生姜三五片。水一钟半，煎七八分。热服。(《景岳全书》正柴胡饮)\n②治疟疾，寒多热少，腹胀：柴胡、半夏、厚朴、陈皮各6克。水二碗、煎八分。不拘时候服。(《本草汇言》)\n③治胁肋疼痛，寒热往来：柴胡6克。川芎、枳壳(麸炒)、芍药各4.5克，甘草(炙)1.5克，香附4.5克。水一钟半，煎八分，食前服。(《景岳全书》柴胡疏肝散)\n④治黄疸：柴胡(去苗)30克，甘草0.3克。上都细锉作一剂，以水一碗，白茅根一握，同煎至七分，绞去滓。任意时时服，一日尽。(《孙尚药方》)\n⑤治积热下痢不止：柴胡、黄芩各12克。水煎服。(《圣惠方》)" },

  {
    "id": 7,
    "price": 17.5,
    "name": "粉葛",
    "key": "粉葛",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/33c8ea6d-dd73-403d-8545-a700882b0090.jpg",
    "cat": 10,
    "brief": "挖葛夫妻葛根粉野生纯正张家界特产天然葛粉橘酿柴葛粉正品旗舰店",
    "alias": "【中药名】\n粉葛 fenge\n【别名】\n葛根、甘葛、葛条。\n【英文名】\nPuerariae Thomsonii Radix.",
    "explain": "【药用部位】豆科植物甘葛藤Pueraria thomsonii Benth的根。\n【植物形态】缠绕藤本，被褐色短柔毛和倒生硬毛，有肥厚的块根。叶互生，为三出复叶，托叶以中部着生，披针状长圆形，有多条直出平行脉，被贴伏长硬毛；小叶阔卵形或卵状菱形，顶端短渐尖，基部阔而圆，两面被糙伏毛；小托叶线形。腋生总状花序，总轴被黄色茸毛；苞片钻形，早落；花冠蝶形，紫色，基部有内折的耳及硬痂状附属体，翼瓣倒卵状长圆形，基部二侧具小耳，龙骨瓣镰状长圆形，基部近截平；雄蕊10枚；子房线形，花柱弯曲。荚果长椭圆形，扁平，密被褐色长硬毛。种子肾形或圆形。花期夏末秋初。\n【产地分布】栽培或野生于山野灌丛和疏林中。分布于广东、广西、四川、贵州、云南等地。\n【采收加工】冬季采收。挖取根部，洗净，刮去栓皮，切除头茎及细尾，截成15厘米左右长段，大条的对半纵切为两半，用硫黄熏2～3天，至体软时取出，晒至六成干时，改为日晒、夜用硫黄熏，再晒至足干为“粉葛条”；再洗净后刮去栓皮，纵切成方块，用硫黄熏至体软，晒干，为“粉葛片”。\n【药材性状】圆柱形、类纺锤形或半圆柱形；有的为纵切或斜切的厚片，大小不一。表面黄白色或淡棕色，未去栓皮的呈灰棕色。横切面可见纤维形成的浅棕色同心性环纹，纵切面可见由纤维形成的数条纵纹。体重，质硬，富粉性。\n【性味归经】性凉，味甘、辛。归胃经、脾经。\n【功效与作用】解肌退热、生津、透疹、升阳止泻。属解表药下属的辛凉解表药。\n【临床应用】用量9～15克，煎服。用治外感发热头痛、项背强痛、口渴、消渴、麻疹不透、热痢、泄泻、高血压颈项强痛。\n【药理研究】粉葛浸膏及其有效成分葛根素具β受体阻断剂作用，是其心血管作用的基础。粉葛中总黄酮及葛根素具调节心功能及代谢作用，并能扩张冠状血管和脑血管的作 用。葛根素具抗心肌缺血、抗脑缺血、抗心律失常、降低血压作用。各种制剂均有明显解热作用。此外，葛根素还具有降低血糖、调节血脂和解毒的作用。\n【化学成分】含收缩和舒张平滑肌的成分。主要有效成分为黄豆苷元、黄豆苷、葛根素。\n【使用禁忌】其性凉，易于动呕，胃寒者所当慎用。夏日表虚汗多尤忌。\n【配伍药方】①治蜘蛛等诸般虫咬：粉葛，生姜汁调敷。(《医学纲目))\n②治金疮中风痉：生粉葛一斤(锉)。以水五升，煮取二升，去滓。每热服一小盏，日三四服。(《圣惠方》)" },

  {
    "id": 8,
    "price": 17.5,
    "name": "牛至",
    "key": "牛至",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/aabc4497-5f6d-46f1-929b-25e2cc1aab9c.jpg",
    "cat": 10,
    "brief": "味好美披萨草叶141g皮萨草叶阿里根奴西餐牛排意面香草料牛至叶碎",
    "alias": "【中药名】\n牛至 niuzhi\n【别名】\n香薷、滇香薷、五香草、黑拉骨丹、小甜草。\n【英文名】\nHerba Origani。",
    "explain": "【来源】唇形科植物牛至Origanum vulgareL.的全草。\n【植物形态】多年生草本。高25～60厘米，茎基部木质，上部有分枝，四棱形，多少带紫色，被柔毛。叶对生，叶片卵圆形，先端钝，基部宽楔形至圆形，全缘，两面具柔毛及腺点。伞房状圆锥花序，苞片长圆状倒披针形。萼钟状，内部喉部有毛环；花冠紫红色或白色，花柱顶端2裂。小坚果，卵圆形，棕褐色，光滑。花、果期7～11月。\n【产地分布】生于向阳山坡草地、路边及林缘。分布于江苏、浙江、广东、贵州、四川、云南、新疆、甘肃等地。\n【采收加工】夏末秋初开花时采收，将全草齐根头割起，或将全草连根拔起，抖净泥土，晒干后扎成小把。\n【药材性状】根圆柱形，表面灰棕色。茎四方形，表面浅棕紫色或浅棕色，密被倒向卷曲的微柔毛。叶对生，稍皱缩，易脱落、破碎。完整叶片呈卵形或长圆状卵形，顶端钝，基部宽楔形、近圆形或浅心形，边全缘或有疏的小锯齿，黄绿或灰绿色，两面均被柔毛和凹陷的腺点。伞房状花序顶生或腋生，苞片倒卵形，花萼钟状，顶端具5齿，外面被小硬毛或近无毛。小坚果卵圆形，近无毛。质脆，易折断。气芳香，味微苦。\n【性味归经】性凉，味辛、微苦。归肺经、胃经、肝经。\n【功效与作用】解表、理气、清暑、利湿。属解表药下属分类的辛凉解表药。\n【临床应用】用量3～9克，大剂量用至15～30克或泡茶，煎服；外用适量，煎水洗，或鲜品捣敷。用治感冒发热、中暑、胸膈胀满、腹痛吐泻、痢疾、黄疸、水肿、带下、小儿疳积、麻疹、皮肤瘙痒、疮疡肿痛、跌打损伤。\n【药理研究】牛至挥发油具有明显的镇痛、抗微生物、镇静和抑菌作用。\n【化学成分】全草含有挥发油，黄酮类，酚酸类，此外还含有齐墩果酸、日本椴苷、胡萝卜苷、β-谷甾醇、豆甾醇、箭叶苷A、对异丙醛基甲苯。\n【使用禁忌】表虚多汗者禁服。\n【配伍药方】①治伤风发热、呕吐：满坡香9克，紫苏、枇杷叶各6克，灯心草3克。煎水服，每日3次。(《贵州民间药物》)\n②治多发性脓肿牛至、南蛇藤各30克。水酒各半，炖豆腐服。(《福建药物志》)\n③治中暑发热头疼，烦渴出汗，腹痛水泻，小便短少，身体作困：香薷二钱，扁豆二钱(炒)，神曲二钱，栀子二钱(炒)，赤茯苓三钱，荆芥穗一钱五分。引用灯心草煎服。(《滇南本草》香薷饮)" },

  {
    "id": 9,
    "price": 17.5,
    "name": "东风橘",
    "key": "东风橘",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/93a759b3-3254-40c1-b8f2-8fa77cc3114b.jpg",
    "cat": 10,
    "brief": "中药材 东风桔根 别名:东风橘根 金橘根 山金桔根 500克 统",
    "alias": "【中药名】\n东风橘 dongfengju\n【别名】\n狗骨簕、东风桔、假花椒、猪钓簕公。\n【英文名】\nAtalantiae Buxifoliae Radix Et Caulis",
    "explain": "【药用部位】芸香科植物酒饼簕Atalantia buxifolia（Poir.）Oliv.的根。\n【植物形态】多分枝、有刺灌木或矮乔木，秃净或幼枝被小柔毛，常有腋生强硬的刺。叶互生，腋间有锐刺，叶片厚革质，有油点，狭椭圆形、倒卵状椭圆形、卵形至近圆形，先端圆而凹入，基部窄而呈一屈柄，有多数纤弱的脉，揉之有柑橘香气。花两性，单生，或2~3朵聚生于叶腋内，无柄或近无柄；萼齿阔卵状三角形；花瓣6，白色；花萼近球形。浆果近球形，熟时蓝黑色。花期夏季。\n【产地分布】生于旷野、村边、路旁灌木丛中。分布于广东、海南、广西等地。\n【采收加工】全年采收。挖取根部，除净细根，洗净，趁鲜切成片段，晒干。\n【药材性状】根呈圆柱形，多分枝，呈不规则弯曲状，长30～50厘米，直径为0.4～1.0厘米。多已切成不规则片块或短段。片块厚0.5～1厘米，短段长3～5厘米。表面棕黄色，外层栓皮易呈纸片状脱落，具支根痕及散在皮孔。质地硬、韧，断面纤维性，皮部棕黄色，木质部较大，黄白色。气微香，味微辛而苦。\n【性味归经】性微温，味辛、苦。归肺经、胃经、脾经。\n【功效与作用】祛风解表、化痰止咳、理气止痛。属解表药下属分类的辛温解表药。\n【临床应用】用量15～30克，煎服。用治感冒、头痛、咳嗽、支气管炎、疟疾、胃痛、风湿性关节炎、腰腿痛。\n【药理研究】东风橘可改善慢性支气管炎大鼠的倦怠无力，进食减少和体重不增等症状，使大鼠支气管腔内分泌物减少和抑制支气管黏膜上皮细胞增生。东风桔叶所含的挥发油对细菌和某些致病真菌具有较强的抑制功效与作用，对金黄色葡萄球菌的生长活性有抑制作用。东风橘可治疟疾，治法是取本品30～60克，水煎，疟疾发作前4小时顿服，连服3～5天。\n【化学成分】东风橘根皮含燕风橘碱、N-甲基东风橘碱、酒饼簕碱、N-甲基酒饼簕碱、5-羟基-N-甲基东风橘碱、黄酮苷、氨基酸、β-谷甾醇、葡萄内酯、柠檬苦素等化合物。\n【使用禁忌】尚不明确。\n【配伍药方】1.治流感，感冒，咳嗽，疟疾：东风橘干根或叶9～15克。水煎服。(《全国中草药汇编》)\n2.治风寒咳嗽、胃溃疡，风湿痹痛：东风橘根15～30克。水煎服。(《广西本草选编》)\n3.治气滞骨脘痛、腹痛：东风橘根30克，陈皮6克，香附、豆豉姜各9克。水煎服。(《香港中草药》)" },

  {
    "id": 10,
    "price": 17.5,
    "name": "防风草",
    "key": "防风草",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/3d2cbab7-49da-46c9-bf5d-3a8b76c88ae2.jpg",
    "cat": 10,
    "brief": "防风500g克内蒙古北防风 防风片中草药材店铺",
    "alias": "【中药名】\n防风草 fangfengcao\n【别名】\n豨莶草、四方茎、鸭儿蔑、大篾草、大羊古骚。\n【英文名】\nEpimeredi Indian Herb",
    "explain": "【药用部位】唇形科植物广防风Epimeredi indica (L.) Rothm的地上部分。\n【植物形态】一至二年生直立草本，高1～2米。茎方形，多分枝，密被白色茸毛。叶对生，草质，阔卵形至卵形，先端渐尖或短尖，边缘有不规则的齿，基部近圆形，两面均有茸毛，具细小腺点。花轮生，下部为腋生，上部可排到顶端而成长总状花序；萼管状，5裂，裂片三角状披针形，内外均有短毛；花冠管状，粉红色，2唇，5裂齿，上唇直立，全缘，下唇阔，扩展，内面有短毛；雄蕊4，突出，花药连贴；雌蕊1，柱头2裂。小坚果圆形，黑褐色，平滑。花期9～10月，果期12月至翌年1月。\n【产地分布】野生于路旁、荒地、村边草丛中。分布于广东、广西、云南、贵州等地。\n【采收加工】夏、秋季采收。割取地上部分，晒干。\n【药材性状】全草长60～180厘米，全体被白色短粗毛。茎四棱形，具明显纵沟，有分枝，表面灰绿色或棕灰色，质稍脆，断面纤维性，中央有近方形的白色髓。叶对生，皱缩卷曲，完整叶片展平后呈阔卵形或卵形；叶上表面灰棕色，叶下表面灰绿色，边缘具疏锯齿，质脆，易碎；有时可见叶腋残留钟形灰绿色花萼。气香浊，味微辛苦。\n【性味归经】性温，味辛、苦。归膀胱经、肝经、肾经。\n【功效与作用】祛风、除湿、解毒、止痛。属解表药下属分类的辛温解表药。\n【临床应用】用量9～15克，煎服；外用适量，煎洗或捣敷。用治感冒身热、呕吐、腹痛、筋骨疼痛、疮疡、湿疹。\n【药理研究】防风草所含的大环三萜类物质体外试验具有抑制KB细胞增长的功效与作用。3种防风草内酯ovatodiolide、4，5-epoxy-ovatodiolide和anisomelic acid对麻醉狗的降压作用、对血管紧张素酶(ACE)的抑制作用、对离体蛙心脏作用以及对牛蛙心房单细胞钙离子流作用的试验表明：后两种物质在剂量为60μm和600μm时对ACE有微弱抑制作用，但对血压没有影响；静脉注射前一种物质具降压作用，并可抑制离体蛙心收缩。3种化合物均可抑制钙离子流动。\n【化学成分】防风草含卵防风二内酯、4，5-环氧卵防风二内酯、防风酸、4，7-氧环防风酸、4-亚甲基-5-羟基卵防风二内酯。\n【使用禁忌】尚不明确。\n【配伍药方】治痈肿：鲜防风草二两，捣烂绞汁调黄酒炖服，渣外敷；或用鲜防风草、两，鲜马鞭草三钱，水煎调酒服。(《福建中草药》)" },

  {
    "id": 11,
    "price": 17.5,
    "name": "生姜",
    "key": "生姜",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/3554c779-03d3-4577-8c97-bfbf158352dd.jpg",
    "cat": 10,
    "brief": "嫩仔姜新鲜子姜芽四川指头姜生姜5斤非云南小黄姜泡老醋鲜姜3蔬菜",
    "alias": "【正名】\n生姜 shengjiang \n【别名】\n母姜、鲜生姜。\n【英文名】\nZingiberis Rhizoma Recens",
    "explain": "【药用来源】姜科植物姜Zingiber offcinale Rosc.的新鲜根茎。\n【植物形态】多年生草本，高50～80厘米。根茎肥厚，断面黄白色，有浓厚的辛辣气味。叶互生，排成2列，无柄，几抱茎；叶舌长2～4毫米；叶片披针形至线状披针形， 长1 5～30厘米，宽1.5～2.2厘米，先端渐尖，基部狭，叶基鞘状抱茎，无毛。花葶自根茎中抽出，长15～25厘米；穗状花序椭圆形，长4～5厘米；苞片 卵形，长约2.5厘米，淡绿色，边缘淡黄色，先端有小尖头；花萼管长约1厘米，具3短尖齿；花冠黄绿色，管长2～2.5厘米，裂片3，披针形，长不及 2厘米，唇瓣的中间裂片长圆状倒卵形，较花冠裂片短，有紫色条纹和淡黄色斑点，两侧裂片卵形，黄绿色，具紫色边缘；雄蕊1，暗紫色，花药长约9厘米，药隔 附属体包裹住花柱；子房3室，无毛，花柱1，柱头近球形。蒴果。种子多数，黑色。花期8月。\n【产地分布】我国中部、东南部至西南部各省广为栽培。\n【采收加工】秋、冬二季采挖，除去须根和泥沙。\n【药材性状】生姜根茎呈不规则块状，略扁，具指状分枝，长4～18厘米，厚1～3厘米。表面黄褐色或灰棕色，有环节，分枝顶端有茎痕或芽。质脆，易折断，断面浅黄色，内皮层环纹明显，维管束散在。气香，特异，味辛辣。延伸阅读：生姜的鉴别方法\n【性味归经】性微温，味辛。归肺经、脾经、胃经。\n【功效与作用】散寒解表，降逆止呕，化痰止咳，解鱼蟹毒。属解表药下属分类的辛温解表药。\n【临床应用】内服：煎汤，用量3～10克，或捣汁冲服；外用：适量，捣敷，或炒热熨，或绞汁调搽。生姜用于风寒感冒，胃寒呕吐，寒痰咳嗽，鱼蟹中毒。\n【药理研究】生姜有镇静及抗惊厥作用；有解热、镇痛和抗炎作用；松弛胃肠道平滑肌；止吐和抗运动病；兴奋心脏，增强心房收缩力，保护胃黏膜；保肝利胆；抗血小板聚集；抗 5-羟色胺，抗氧化，抗微生物，中枢兴奋，促进体内活性物质释放，促进吸收，止咳，降血脂，抗过敏，诱变和抗诱变，抑制亚硝胺合成。生姜无明显毒性。\n【化学成分】生姜含姜醇、α-姜烯、β-水芹烯、柠檬醛、芳香醇、甲基庚烯酮、壬醛、α-龙脑等，尚含辣味成分姜辣素。\n【使用禁忌】阴虚内热及实热证禁服。\n【配伍药方】①治感冒风寒：生姜5片，紫苏叶30克。水煎服。(《本草汇言》)\n②治干呕哕，手足厥冷：橘皮120克，生姜240克。上二味，以水七升，煮取三升，分三服，不止，更合服之。(《千金要方》橘皮汤)\n③治反胃，朝食暮吐，暮食朝吐，旋旋吐者：甘蔗汁7升，生姜汁1升。二味相合，分为三服。(《梅师集验方》)\n④治霍乱欲吐不吐，欲泻不泻：盐30克，生姜15克，捣碎，同炒令色变。以水一碗，煎服，甚者加童便一盏。(《赤水玄珠》姜盐饮)\n⑤治腰痛：生姜1斤，捣汁120克，水胶30克，同煎成膏。厚纸摊贴腰眼敷甚效。(《串雅内编》贴腰膏)" },

  {
    "id": 12,
    "price": 17.5,
    "name": "紫苏叶",
    "key": "紫苏叶",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/70b901c5-27b1-47f2-b63e-04fd1f90be7b.jpg",
    "cat": 10,
    "brief": "正宗野生紫苏叶干新鲜天然苏子叶干货泡茶烧鱼虾蟹去腥食用中药材",
    "alias": "【中药名】\n紫苏叶 zisuye\n【别名】\n苏叶、紫菜、苏。\n【英文名】\nPerillae Folium",
    "explain": "【药用部位】唇形科植物紫苏Perilla frutescens(L.)Britt.的干燥叶(或带嫩枝)。\n【植物形态】一年生草本，高30～200厘米。具有特殊芳香。茎直立，多分枝，紫色、绿紫色或绿色，钝四棱形，密被长柔毛。叶对生；叶柄长3～5厘米，紫红色或绿色，被长节毛；叶片阔卵形、卵状圆形或卵状三角形，长4～13厘米，宽2.5～10厘米，先端渐尖或突尖，有时呈短尾状，基部圆形或阔楔形，边缘具粗锯齿，有时锯齿较深或浅裂，两面紫色或仅下面紫色，上下两面均疏生柔毛，沿叶脉处较密，叶下面有细油腺点；侧脉7～8对，位于下部者稍靠近，斜上升。轮伞花序，由2花组成偏向一侧成假总状花序，顶生和腋生，花序密被长柔毛；苞片卵形、卵状三角形或披针形，全缘，具缘毛，外面有腺点，边缘膜质；花梗长1～1.5毫米，密被柔毛；花萼钟状，长约3毫米，10脉，外面下部密被长柔毛和有黄色腺点，顶端5齿，2唇，上唇宽大，有3齿，下唇有2齿，结果时增大，基部呈囊状；花冠唇形，长3～4毫米，白色或紫红色，花冠筒内有毛环，外面被柔毛，上唇微凹，下唇3裂，裂片近圆形，中裂片较大；雄蕊4，二强，着生于花冠筒内中部，几不伸出花冠外，花药2室；花盘在前边膨大；雌蕊1，子房4裂，花柱基底着生，柱头2裂；花盘在前边膨大；雌蕊1，子房4裂，花柱基底着生，柱头2裂。小坚果近球形，灰棕色或褐色，直径1～1.3毫米，有网纹，果萼长约10毫米。花期6～8月，果期7～9月。\n【产地分布】全国各地广泛栽培。\n【采收加工】夏季枝叶茂盛时采收，除去杂质，晒干。\n【药材性状】紫苏叶多皱缩卷曲，破碎，完整叶片展平后呈卵圆形，长6～14厘米，宽3～11厘米。先端长尖或急尖，基部宽楔形，边缘具圆锯齿；两面均为暗绿色，被疏柔毛；叶柄长2.5～8厘米，密被白色毛茸。质脆，气清香，味微辛。\n【性味归经】性温，味辛。归肺经、脾经。\n【功效与作用】解表散寒，行气和胃。属解表药下属分类的辛温解表药。\n【临床应用】内服：煎汤，5～10克。外用：适量，捣敷、研末掺或煎汤洗。用于风寒感冒，咳嗽呕恶，妊娠呕吐，鱼蟹中毒。\n【药理研究】紫苏叶具有镇静及较弱的解热作用；可使兴奋性膜产生抑制作用；能促进消化液分泌，增强胃肠蠕动；对呼吸系统，可产生止咳祛痰平喘的功效与作用，对血液系统，具有止血和抗凝血双重作用；升高血糖；调节机体免疫功能，具有抗诱变能力；抗微生物，具有广谱的抗菌作用。对腺苷酸环化酶有轻度抑制作用，有很强的黄嘌呤氧化酶抑制作用；有显著抗氧化作用；尚有抗炎作用。\n【化学成分】紫苏叶含紫苏醛、紫苏酮，白苏酮、薄荷醇、高山黄芩苷、新西兰牡荆苷Ⅱ、鹭樱苷等成分。\n【使用禁忌】阴虚、气虚及温病者慎服。\n【配伍药方】①治伤风发热：紫苏叶、防风、川芎各4.5克，陈皮3克，甘草1.8克。加生姜二片煎服。(《不知医必要》苏叶汤)\n②治伤寒不止：紫苏一把，水三升，煮取二升，稍稍饮。(《肘后方》)\n③治乳痈肿痛：紫苏煎汤频服，并捣封之。(《海上名方》)\n④治恶疮，疥癣：以大苏叶研细，外敷。(《普济方》)\n⑤治跌扑伤损：紫苏捣敷之。疮口自合。(《谈野翁试验方》)\n⑥治蛇虺伤人：紫苏捣汁饮之。(《千金要方》)" }] },



{
  "id": 11,
  "name": "其他",
  "foods": [{
    "id": 1,
    "price": 17.5,
    "name": "沉香",
    "key": "沉香",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/8572b676-37b3-40c0-9987-da8ebe3d7348.jpg",
    "cat": 10,
    "brief": "沉香线香檀香熏香家用室内天然艾草驱蚊盘香藏香佛香卧香安神香薰",
    "alias": "【中药名】\n沉香 chenxiang\n【别名】\n白木香、土沉香、女儿香、奇南香、伽南香。\n【英文名】\nLignum Aquilariae Resinatum",
    "explain": "【药用部位】瑞香科植物白木香Aquilaria sinensis (Lour.) Gilg.含有树脂的木材。\n【植物形态】常绿大乔木，高达15米，有香气。树皮灰褐色，幼枝被柔毛。叶互生；叶片革质，长卵形、倒长卵形或椭圆形，先端渐尖，有光泽，基部楔形，全缘，下面及叶柄被伏贴茸毛，后渐无毛。伞形花序顶生和腋生，总花梗、小花梗均被灰白色茸毛；花黄绿色，被茸毛；花被钟形，花被管先端5裂，裂片长圆形，花被管喉部有鳞片10片，密被白色茸毛；雄蕊10枚，着生于花被管喉部，花丝极短或无；子房上位，卵形。蒴果木质，扁倒卵形，下垂，密被灰色毛，花被宿存。种子1粒，基部有角状附属体。花期3～5月，果期5～6月。\n【生境分布】生于平地、丘陵土岭的疏林酸性黄壤土或荒山中，有栽培。分布于广东、海南、广西、台湾等地。\n【采收加工】全年均可采收，割取含树脂的木材，除去不含树脂的部分，阴干。\n【药材性状】沉香药材呈不规则块、片状或盔帽状，有的为小碎块。表面凹凸不平，有刀痕，偶有孔洞，可见黑褐色树脂与黄白色木部相间的斑纹，孔洞及凹窝表面多呈朽木状。质较坚实，断面刺状。气芳香，味苦。\n【性味归经】味辛、苦，性微温。归肾经、脾经、胃经。\n【功效与作用】行气止痛、温中止呕、纳气平喘。属理气药。\n【临床应用】研末冲服，用量1.5～4.5克。亦可用原药磨汁服。入煎剂宜后下。用治胸腹胀闷疼痛、胃寒呕吐呃逆、肾虚气逆喘急。\n【药理研究】沉香可解除肠平滑肌痉挛，抑制中枢神经系统等。沉香水煎液对离体豚鼠回肠的自主收缩有抑制的功效与作用，并能对抗组胺、乙酰胆碱引起的痉挛性收缩。醇提物能促进离体豚鼠气管抗组胺作用，从而发挥止喘效果。此外，具解痉、镇静、镇痛、降压、抗菌的作用。\n【化学成分】沉香含挥发油及树脂。挥发油中主要成分为沉香螺醇、白木香酸、白木香醛、白木香醇、去氢白木香醇、白木香呋喃醛、白木香呋喃醇、α-沉香呋喃、β-沉香呋喃、茴香酸等成分；受曲霉菌感染的沉香挥发油中含沉香螺萜醇、沉香螺萜醛等。\n【使用禁忌】阴虚火旺或气虚下陷者慎用。\n【配伍药方】1.治腹胀气喘，坐卧不安：沉香、枳壳各15克，萝卜子炒30克，每服15克，姜三片，水煎服。(《赤水玄珠》沉香饮)\n2.治冷痰虚热，诸劳寒热：沉香、附子(炮)。上口咀，煎露一宿，空心服。(《澹寮集验方》冷香汤)\n3.治一切哮症：沉香60克，莱菔子(淘净，蒸熟，晒干)150克，上为细末，生姜汁为细丸。每服八分，白滚汤送下。(《丹台玉案》二仙丹)\n4.治胃冷久呃：沉香、紫苏、白豆蔻各3克。为末。每服1.5～2.1克，柿蒂汤下。(《活人心统》)\n5.治心神不定，恍惚不乐，火不下降，时有振跳，消阴养火，全心气：茯神(去皮)60克，沉香15克。并为细末，炼蜜丸如小豆大。每服三十丸，食后人参汤下，甚妙。(《百一选方》朱雀丸)\n6.治胞转不通，或过忍小便所致，当治其气则愈，非利药可通也：沉香、木香各6克为末。白汤空腹服之，以通为度。(《医垒元戎》)" },

  {
    "id": 2,
    "price": 17.5,
    "name": "鸡骨香",
    "key": "鸡骨香",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/c7870399-feec-4a3c-8a17-26b7fa2e95f2.jpg",
    "cat": 10,
    "brief": "包邮降香250克降真香花梨母紫藤香鸡骨香紫降香降香丝中药材",
    "alias": "【中药名】\n鸡骨香 jiguxiang\n【别名】\n黄牛香、过山香、透地龙、木沉香。\n【英文名】\nCrotonis Crassifolii Radix",
    "explain": "【药用部位】大戟科植物鸡骨香Croton crassifolius Geisel.的干燥根。\n【植物形态】矮小灌木，高约30厘米。根粗壮，外皮黄褐色，易剥离。枝叶和花序均被星状茸毛。叶互生；叶片卵形或矩圆形，先端尖或钝，基部浑圆而稍带心脏形，全缘或有锯齿，侧脉3～4对，最下面l对由基部射出，与中脉呈3出状；叶柄密被星状茸毛。圆锥花序；花单性，浅绿色，雌雄同株；苞片分裂，裂片线状，顶端有腺体；雄花小，簇生于花序上部，花瓣矩圆形，雄蕊约20枚；雌花通常数朵生于花序基部，萼长约4毫米，花瓣缺，花柱4裂。蒴果外被锈色柔毛。花期4月，果期5～6月。\n【产地分布】生于山坡、丘陵等于旱地带。分布于广西、广东、福建等地。\n【采收加工】全年均可采挖，挖取根部，除净地上部分及须根，洗净，晒干。\n【药材性状】细圆柱形，多弯曲不直。商品多斩成2.5～4厘米短段，直径0.3～0.8厘米。表面灰黄色至灰棕色，具厚而浮离状的粗糙栓皮、纵向皱纹及突起的须根痕，栓皮极易脱落成碎片粉末状。质脆易断，断面黄色，不平坦，纤维性。气微芳香，味苦、涩。以根条粗壮、色黄、气香者为佳。\n【性味归经】性温，味辛、苦。归胃经、大肠经、肝经。\n【功效与作用】理气止痛、祛风除湿、舒筋活络。属理气药。\n【临床应用】用量6～15克，煎服或浸酒服；外用适量，研末调敷。用治胃痛、胃肠气胀、风湿痹痛、跌打损伤。\n【药理研究】具有木香等的理气止痛作用，又有防己等的治疗风湿痹痛作用，单用有效，多入复方中用。\n【化学成分】含氨基酸、有机酸。显皂苷、香豆精、生物碱及黄酮反应。\n【使用禁忌】有小毒，中毒症状似巴豆，内服不可过量或久服。孕妇慎用。" },

  {
    "id": 3,
    "price": 17.5,
    "name": "降香",
    "key": "降香",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/fbfa34c1-67cc-4473-abb2-33046d8ff98c.jpg",
    "cat": 10,
    "brief": "雪麦康双七茶官方旗舰店 降香青酸柠玉竹兰葛茶同厂生产袋泡茶包",
    "alias": "【中药名】\n降香 jiangxiang\n【别名】\n降真香、紫藤香、花梨母、降真。\n【英文名】\nAlbergiae Odoriferae Lignum",
    "explain": "【药用部位】豆科植物降香檀Dalbergia odorifera T.Chen.树干和根的心材。\n【植物形态】乔木，高达15米。树皮褐色，粗糙，皮孔小而密集。奇数羽状复叶，小叶互生，通常9～13片，近革质，卵形或椭圆形，先端急尖，有钝头，基部圆形或阔楔形，全缘，两面均无毛。花序腋生，由多数聚伞花序组成圆锥花序；苞片阔卵形，花梗短；花萼钟状，5裂，下部l裂齿较长，披针形，其余萼齿阔卵形，急尖；花冠淡黄色或乳白色，5瓣近等长，均有爪；雄蕊9枚，1组；花柱短，柱头小，子房狭椭圆形。荚果舌状长椭圆形，薄而扁平，不裂，先端钝或急尖，基部狭，微被毛。种子通常1粒。\n【产地分布】生于山坡疏林中、林缘或村边旷地处。海南、云南有栽培。\n【采收加工】全年均可采收，除去边材，阴干。\n【药材性状】类圆柱形或不规则块状。表面紫红色或红褐色，切面有致密的纹理。质硬，有油性。气微香，味微苦。\n【性味归经】味辛，性温。归肝经、脾经、心经。\n【功效与作用】行气活血、止痛、止血。属理气药。\n【临床应用】用量9～15克，煎服，入煎剂宜后下；外用适量，研细末敷患处。用治脘腹疼痛、肝郁胁痛、胸痹刺痛、跌扑损伤、外伤出血。\n【药理研究】临床用复方丹参注射液(含降香)及冠心Ⅱ号方治疗心脑血管缺血性疾病有良好效果。降香挥发油灌胃能提高兔血小板cAMP水平，对兔血浆纤溶酶活性具显著促进作用，对实验性血栓亦有明显的抑制作用。降香醇提物灌胃显示良好的中枢镇静功效与作用。此外，还能解汞中毒和抗炎作用。\n【化学成分】降香主含挥发油及黄酮类成分。挥发油中主含橙花叔醇、苦橙油醇、 β-欧白芷内酯、4-甲基-4羟基环己酮、1，2，4-三甲基环己烷等。黄酮类化合物为芒柄花素、3‘-甲氧基黄豆苷元、2’-甲氧基异苷草素、降香异黄烯素等。\n【使用禁忌】阴虚火旺、血热妄行者禁服。\n【配伍药方】①治金刃或打扑伤损，血出不止：降真香末、五倍子末、铜末（是削下镜面上铜，于乳钵内研细）等分或随意加减用之。上拌匀散。（《百一选方》）\n②治外伤性吐血：紫降香3克，花蕊石3克，没药1.5克，乳香1.5克。共研极细末。每服0.3克，黄酒1杯送服。（《现代实用中药》）" },

  {
    "id": 4,
    "price": 17.5,
    "name": "紫苏梗",
    "key": "紫苏梗",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/dca8807e-ad69-407c-9821-d3d67091d124.jpg",
    "cat": 10,
    "brief": "静萱紫苏梗500g克中药材野生紫苏茎紫苏草杆可磨紫苏梗粉",
    "alias": "【中药名】\n紫苏梗 zisugeng\n【别名】\n紫苏茎、苏梗、紫苏杆、紫苏草、紫苏枝茎。\n【英文名】\nPerillae Caulis。",
    "explain": "【药用部位】来源于唇形科植物紫苏Perilla frutescens(L.)Britt.的茎。\n【植物形态】一年生草本。高0.3～1.5米。茎直立，绿色或紫色，密被长柔毛。单叶对生；叶片卵形至宽卵形；叶柄长3～7厘米。轮伞花序，具2花，排成偏于一侧的总状花序，密被长柔毛；苞片宽卵形或近圆形，外被红褐色腺点；花萼钟状，长约3毫米，结果时增长至12毫米，萼齿5，上唇3齿，下唇2齿；花冠白色至紫红色，喉部斜钟形，冠檐二唇形，上唇先端微凹，下唇3裂；雄蕊4枚，2强，药室2，花丝扁平；子房全4裂，花柱基底着生，先端2浅裂，花盘前方膨大呈指状。小坚果近球形，直径1.5～2毫米，表面灰褐色，有微隆起的暗棕色网状花纹。花期6～8月，果期8～10月。\n【产地分布】紫苏为栽培品，我国广泛种植。\n【采收加工】秋季果实成熟后采割，除去杂质，晒干，或趁鲜切片，晒干。\n【药材性状】方柱形，四棱钝圆，长短不一，直径0.5～1.5厘米。表面紫棕色或暗紫色，四面有纵沟及细纵纹，节部稍膨大，有对生的枝痕和叶痕。体轻，质硬，断面裂片状。切片厚2～5毫米，常呈斜长方形，木质部黄白色，射线细密，呈放射状，髓部白色，疏松或脱落。气微香，味淡。\n【性味归经】性温，味辛。归肺经、脾经。\n【功效与作用】理气宽中、止痛、安胎。属理气药。\n【临床应用】用量5～9克，煎汤内服。用治胸膈痞闷、胃脘疼痛、暖气呕吐、胎动不安。\n【药理研究】药理实验表明，具孕激素样作用，与孕酮一样能促进子宫内膜腺体的增长。\n【化学成分】含挥发油，油中主要含紫苏醛、1-柠檬烯、α-蒎烯及β-蒎烯、β-丁香烯、α-香柑油烯及芳樟醇等。还含紫苏酮、异白苏烯酮、白苏烯酮、紫苏烯、精氨酸、枯酸、紫苏苷及亚麻酸等。\n【使用禁忌】尚不明确，谨慎用药。\n【配伍药方】①治伤寒及温病瘥后，起早及饮食多，致劳复：紫苏茎叶(锉)一两，生姜(切)半两，豉一二合。上三味，用水二盏半，煎至一大盏，去滓。食前温服，日二服。(《普济方》紫苏饮)\n②治上气暴咳：紫苏茎叶二升，大豆一升。上二味，以水四升煮大豆，次下紫苏，煮取一升五合。分为三服，昼二夜一。(《外台》)\n③治孕妇胎气不和，胸闷恶心：苏梗、半夏各9克，生姜3片，陈皮5克。水煎服。[《中医中药与临床研究》1986，(3)：47]\n④治脚气，上气不止：紫苏茎叶三分(两)，白前一两，桑根白皮二两(锉)。上件药，捣粗罗为散。每服四钱，以水一中盏，人生姜半分，煎至六分，去滓，不计时候，温服。(《圣惠方》)\n⑤治吐血，衄血：白茅三钱，紫苏茎叶二钱。上散。新汲水一碗，煎七分，乘热调生蒲黄二钱，旋服。仍以大蒜两颗煨熟，捶扁，贴敷两脚心，少倾，自觉胸中有蒜气，其血立止。若下部出血，可以煨蒜敷两掌心。(《直指方》茅苏汤)" },

  {
    "id": 5,
    "price": 17.5,
    "name": "槟榔",
    "key": "槟榔",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/d37e97ef-cc85-4c90-8f34-768ac2a10677.jpg",
    "cat": 10,
    "brief": "口味王和成天下槟榔50元一箱批发装正品海南青果槟郎散装合成冰榔",
    "alias": "【中药名】\n槟榔 binglang\n【别名】\n槟榔子、大腹子、宾门、大腹槟榔、槟榔玉。\n【英文名】\nArecae Semen",
    "explain": "【药用部位】棕榈科植物槟榔Areca catechu L.的成熟种子。\n【植物形态】常绿乔木。茎干直立，不分枝，叶丛生于茎顶端；羽状复叶，叶轴三菱形，具长叶鞘。花单性同株，肉穗花序生于最下部叶的叶鞘束下，多分枝，成圆锥状，苞片大，佛焰苞状，雄花小而多，无柄，生于分枝的上部，萼片3，极小，花瓣3；雄蕊6枚，退化雄蕊3枚；雌花较大而少，无柄，生于分枝的下部，萼片及花瓣各3，退化雄蕊6枚，子房上位，1室。坚果。\n【产地分布】槟榔均为栽培。分布于广东、海南、福建、台湾、广西等地。\n【采收加工】冬、春季果实成熟时采收，剥去果皮，取出种子晒干。\n【药材性状】扁球形或圆锥形。表面淡黄棕色或淡红棕色，具稍凹的网状沟纹，底部中心有圆形凹陷的珠孔，其旁有一明显疤痕状种脐。质坚硬，断面可见棕色种皮与白色胚乳相间的大理石花纹。气微，味涩、微苦。\n【性味归经】味苦、辛，性温。归胃经、大肠经。\n【功效与作用】驱虫、消积、下气、行水。属驱虫药。\n【临床应用】槟榔用量3～9克，煎服。用治绦虫、蛔虫、姜片虫病；虫积腹痛、积滞泻痢、里急后重、水肿脚气、疟疾。驱绦虫、姜片虫：30～60克。\n【药理研究】槟榔有驱虫、兴奋胆碱受体、抗病原微生物、抗高血压、抗癌的功效与作用。\n【化学成分】槟榔种子含总生物碱0.3%～0.6%，主要为槟榔碱，及少量的槟榔次碱，去甲基槟榔碱，去甲基槟榔次碱，异去甲基槟榔次碱，槟榔副碱，高槟榔碱、硬脂酸、肉豆蔻酸、左旋表儿茶精、鞣质、原矢车菊素A-1等成分，大多与鞣酸结合形式存在。还含鞣质约15%，内有右旋儿茶精，左旋表儿茶精，原矢车菊素A-1，B-1和B-2以及称为槟榔鞣质A、B的两个系列化合物，这两个系列均系原矢车菊素的二聚体、三聚体、四聚体、五聚体。\n【使用禁忌】气虚下陷者禁服。\n【配伍药方】1.治诸虫在脏，久不瘥者：槟榔(炮)15克为末。每服6克，以葱、蜜煎汤调服3克。(《圣惠方》)\n2.治蛔虫攻痛：槟榔60克。酒二盏，煎一盏，匀二次服。(《食物本草》)\n3.治食积满闷成痰涎呕吐：槟榔、半夏、砂仁、萝卜子、麦芽、干姜、白术各6克。水煎服。(《方脉正宗》)\n4.治心脾疼：高良姜、槟榔等分(各炒)。上为细末，米饮调下。(《百一选方》)\n5.治聤耳出脓：槟榔研末吹之。(《鲍氏小儿方》)" },

  {
    "id": 6,
    "price": 17.5,
    "name": "绵马贯众",
    "key": "绵马贯众",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/57240d16-d76a-442e-8736-a1858006817f.jpg",
    "cat": 10,
    "brief": "绵马贯众中药材500g克包邮正品新货 绵马贯众别名贯节",
    "alias": "【中药名】\n绵马贯众 mianmaguanzhong\n【别名】\n贯节、贯中、管仲、凤尾草、百头。\n【英文名】\nDryopteridis Crassirhizomatis。",
    "explain": "【药用部位】来源于鳞毛蕨科植物粗茎鳞毛蕨Dryopteris crassirhizoma Nakai的根茎。\n【植物形态】多年生草本，高50～100厘米。根茎粗大，块状，斜生，有许多坚硬的叶柄残基及黑色细根，密被锈色或深褐色大鳞片。叶簇生于根茎顶端，具长柄，叶片宽倒披针形，2回羽状全裂或深裂，中轴及叶脉上多少被褐色鳞片，羽片对生或近对生，无柄，披针形，羽片再深裂，小裂片密接，长圆形近全缘或先端有钝锯齿。孢子叶与营养叶同形，孢子囊群生于叶中部以上的羽片上，生于叶背小脉中部以下，囊群盖肾形或圆肾形。\n【产地分布】生于林下沼泽地、湿地。分布于黑龙汀、吉林、辽宁、内蒙古等地。\n【采收加工】夏、秋季采挖，削去叶柄、须根，除去泥土，整个或割成两半，晒干。\n【药材性状】全体呈长倒卵形，略弯，上端钝圆或截形，下端较尖；有的纵切为两半，长10～20厘米，直径5～8厘米。表面黄棕色至黑棕色，密生排列紧密的叶柄基及鳞片，并有弯曲的须根。叶柄基呈扁圆柱形，略弯曲，质硬，折断面棕色，有5～13个黄白色小点，环状排列。剥去叶柄基，可见根茎。质坚硬，切断面深绿色至棕色，有黄白色长圆形小点5～13个。气特异，味初淡而微涩，后渐苦辛。\n【性味归经】性微寒，味苦。归肝经、胃经。\n【功效与作用】驱虫、止血、清热解毒。属驱虫药。\n【临床应用】用量4.5～9克，煎汤内服，或入丸、散；外用：研末调涂。治疗虫积腹痛、热毒疮疡、痄腮肿痛、崩漏及防治流感等。驱虫、清热解毒生用；止血炒炭用。\n【药理研究】绵马素(间苯三酚类)是绵马贯众驱虫的有效成分，对无脊椎动物平滑肌有毒，能使绦虫或钩虫虫体肌肉麻痹变硬而脱离寄生主的肠壁；贯众水煎剂对流感病毒、腺病毒和单纯疱疹病毒均有抑制作用，给小鼠滴鼻用药也有效；兔、小鼠灌服水煎剂，能缩短凝血酶原时间，促进血液凝固作用；贯众提取物及间苯三酚类有明显抗癌活性，对小鼠官颈癌、小鼠肉瘤、小鼠肉瘤和小鼠网织细胞瘤腹水型疗效非常显著。毒性：小鼠灌服水煎剂LD₅₀为104克/千克。\n【化学成分】根茎含绵马酸类、黄绵马酸类、白綿马素、东北贯众素等成分。叶中含东北贯众醇、东北贯众醇乙酯等成分。\n【使用禁忌】有小毒。脾胃虚寒，阴虚内热及孕妇慎服。\n【配伍药方】①治鼻衄：贯众根为末，水调服一钱匕。（《本草图经》）\n②治蛲虫病：绵马贯众9～12克。水煎服。另用绵马贯众30克，煎水，晚上睡前洗肛门。(《陕西中草药》)" },

  {
    "id": 7,
    "price": 17.5,
    "name": "使君子",
    "key": "使君子",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/5d60a92b-31d4-4180-b7f9-f64751885630.jpg",
    "cat": 10,
    "brief": "使君子500克 四川使君子果史君子索子非野生中药材仁道地品质",
    "alias": "【中药名】\n使君子 shijunzi\n【别名】\n史君子、留求子、五棱子、山羊屎。\n【英文名】\nQuisqualis Fructus",
    "explain": "【药用部位】使君子科植物使君子Quisqualis indicaL.的成熟果实。\n【植物形态】攀援状灌木。高2～8米。幼株被黄褐色短柔毛。单叶对生，叶片长椭圆状披针形或卵状椭圆形，叶柄长5～15毫米，下部有关节，叶落后关节以下部分成为棘刺状。穗状花序顶生，直立或下垂，每花具1苞片，披针形或线形，早落；萼筒细管状，花瓣5，长圆形或倒卵形，基部宽楔形，与萼齿互生，初为白色，后渐转为紫红色；雄蕊10枚，2轮，上轮5枚露于花冠之外；雌蕊1枚，子房下位，圆柱状纺锤形，有5纵棱，1室，具柔毛及腺毛，花柱丝状，细长，外露，下部与萼筒合生，柱头短。果实橄榄状，长2.5～4厘米，直径1.5～1.8厘米，黑紫褐色或深棕色，有5纵棱，种子1。花期5～9月，果期6～10月。\n【产地分布】生于平原灌木丛或路旁。亦有栽培。分布于四川、广东、广西等地。\n【采收加工】于秋季果皮变紫黑色时采收，除去杂质，晒干或烘干。\n【药材性状】椭圆形或卵圆形，具5条纵棱，偶有4～9棱，长2.5～4厘米，直径约2厘米。表面黑褐色至紫黑色，平滑，微具光泽。顶端狭尖，基部钝圆，有明显圆形的果梗痕。质坚硬，横切面多呈五角星形，棱角处壳较厚，中间呈类圆形空腔。种子椭圆形或纺锤形，长约2厘米，直径约1厘米；表面棕褐色或黑褐色，有多数纵皱纹；种皮薄，易剥离；子叶2，黄白色，有油性，断面有裂纹。气微香，味微甜。\n【性味归经】性温，味甘。归脾经、胃经。\n【功效与作用】杀虫消积。属驱虫药。\n【临床应用】用量9～12克，捣碎入煎剂；使君子仁6～9克，多入丸散用或单用，作1～2次分服。用治蛔虫病、蛲虫病、虫积腹痛、小儿疳积。服药时忌饮浓茶。\n【药理研究】有小毒，可引起呃逆和呕吐或致泻。药理实验表明，水浸剂或乙醇浸剂在体外对猪蛔虫有麻痹作用。水浸剂对某些皮肤真菌有抑制作用。\n【化学成分】种子含使君子酸钾、使君子氨酸、胡芦巴碱、1-脯氨酸、1-天冬素、有机酸、脂肪油、白桦脂酸、硬脂酸、油酸、甘露醇、没食子酸等。\n【使用禁忌】服药时忌饮热茶，大量服用能引起呃逆、眩晕、呕吐等反应。\n【配伍药方】①治大人小儿腹内有虫：使君子(去壳)3克，槟榔3克，雄黄1.5克。上为末。大人每服3克，苦楝根煎汤下。下虫散)\n②治小儿痞块，腹大，肌瘦面黄，渐成疳疾：使君子仁9克，木鳖子仁15克，为末，水丸，龙眼大。每以一丸，用鸡子一个破顶，入药在内、饭上蒸熟，空心食之。(《简便单方》)\n③治小儿虚肿，头面、阴囊俱浮：使君子(去壳)30克为末。每食后米汤服3克。(《简便方》)\n④治头疮久不瘥：使君子烧令焦，上锡罗为末，以生油调涂之。(《圣惠方》)\n⑤治虫牙疼痛：使君子煎汤，频漱。(《濒湖集简方》)" },

  {
    "id": 8,
    "price": 17.5,
    "name": "醉鱼草",
    "key": "醉鱼草",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/14dfdc5d-dfdb-4878-bd28-6c955d0ae497.jpg",
    "cat": 10,
    "brief": "中药材 醉鱼草 别名:痒见消 鱼尾草 闭鱼花 500克",
    "alias": "【中药名】\n醉鱼草 zuiyucao\n【别名】\n鱼尾草、醉鱼儿草、樚木、闹鱼花、毒鱼草。\n",
    "explain": "　【药用部位】马钱科植物醉鱼草Buddleja lindleyana Fort.的茎叶。\n【植物形态】落叶灌木，高1～3米，树皮茶褐色。小枝具四棱而略带翼状，幼时密被黄色星状毛及鳞片。叶对生，椭圆形或卵状披针形，长3～10厘米，宽1.5～3厘米，纸质，先端尖，基部楔形或钝圆，全缘或有疏锯齿，幼时背面密被黄绿色星状毛及鳞片。花序穗状，直立，长7～20厘米;花萼、花冠4裂，均有鳞片;花冠紫色，稍弯曲，冠筒内面白紫色，具细柔毛;雄蕊4，花丝极短，着生于花冠筒下部;子房上位，2室。蒴果矩圆形，被鳞片。种子无翅。花期4～8月，果期10～11月。\n【产地分布】生于山坡、溪边的灌丛中，亦有栽培以供观赏。分布于长江以南大部分地区。\n【采收加工】全年可采全株或叶，晒干。\n【药材性状】小枝呈四棱柱形，表面茶褐色。幼枝具密被黄色星状毛及鳞片。叶对生，椭圆形或卵状披针形，表面浅黄棕色，先端尖，基部楔形或钝圆，全缘或有疏锯齿，质脆易碎。花序穗状，长7～20厘米，花冠4裂，呈暗棕色。气微，味微苦。\n【性味归经】性温，味苦、辛。有小毒。\n【功效与作用】止咳定喘，活血祛瘀，驱虫。属驱虫药。\n【临床应用】用量10～30克，水煎服。鲜草量可酌情加大。临床上可用于治疗感冒、咳嗽、哮喘以及跌打损伤，外伤出血。还可治疗钩虫病。\n【药理研究】醉鱼草有某些杀昆虫和抑菌的功效与作用。\n【化学成分】醉鱼草全株含醉鱼草苷、醉鱼草糖苷及多种黄酮类成分。\n【使用禁忌】本种花叶有毒，如服用过量会引起头晕、呕吐、呼吸困难、四肢麻木和震颤。\n【配伍药方】①治痄腮：醉鱼草15克，枫球7枚，荠菜9克。煮鸡蛋食。(《湖南药物志》)\n②治瘰疬：醉鱼草全草30克。水煎服。(《湖南药物志》)\n③治阴疽：鲜醉鱼草叶。酒或醋捣烂，敷患处。(《福建中草药》)\n④治风寒牙痛：醉鱼草鲜叶和食盐少许，捣烂取汁漱口。(《福建中草药》)" },

  {
    "id": 9,
    "price": 17.5,
    "name": "独脚金",
    "key": "独脚金",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/a13a9f68-24b0-4a22-9fe1-02df2b02224d.jpg",
    "cat": 10,
    "brief": "野采独脚金疳积草小孩儿开胃消积独角金新货新鲜晒干疳积草旗舰店",
    "alias": "【中药名】\n独脚金 dujiaojin\n【别名】\n疳积草、独脚柑、细独脚马骝、独脚疳。\n【英文名】\nHerba Strigae。",
    "explain": "【药材来源】玄参科植物独脚金Striga asiatica (L.) Kuntze的全草。\n【植物形态】一年生小草本，半寄生，全株粗糙，且被硬毛。茎多少呈四方形，有2条纵沟，不分枝或在基部有分枝。叶生于下部的对生，上部的互生，无柄，叶片线形或狭卵形，最下部的叶常退化呈鳞片状。花单生于上部的叶腋;小苞片2枚，线形或披针形；萼筒状，膜质，萼齿线状披针形；花冠黄色或有时带粉红色，花冠管狭窄，被短腺毛，上部突然向下弯；冠檐二唇形，上唇较短，顶端微缺或2裂，下唇3裂，上唇长约为下唇之半；雄蕊4枚，内藏，花药1室；花柱顶端棒状。蒴果长卵形。种子细小，黄色。\n【产地分布】独脚金生于山地、丘陵地的草坡上，寄生在禾本科植物如蜈蚣草、纤毛鸭咀草等的根上。分布于广东、海南、福建、广西等地。\n【采收加工】夏、秋季采收。拔取全株，洗净，扎成小束，晒干。\n【药材性状】独脚金药材的茎单一，纤细，通常不分枝，或间有在上部分枝，灰黑色，被粗糙短毛，下有稀疏细根；质柔稍韧；叶小，互生，线形或披针形，灰褐色或绿褐色，常疏贴于茎上；叶腋有黄色或紫色小花，呈疏穗状，苞片明显，长于萼，萼筒有10条棱线。气无，味微甘。以植株完整、柔嫩、带绿色，无泥沙杂质者为佳\n【性味归经】性平，味甘、淡。归肾经、脾经、肝经。\n【功效与作用】平肝消疳、健脾消食、清热利尿。属消食药。\n【临床应用】用量9～15克，煎服。用治小儿疳积、小儿伤食纳差腹泻、黄肿、夜盲。\n【药理研究】独脚金煎剂在试管内对金黄色葡萄球菌、炭痈杆菌和白喉有显着抑制作用，对乙型链球菌、伤寒杆菌、绿脓杆菌和痢杆菌也有定程度的抑制作用。\n【化学成分】独脚金含独脚金醇、木犀草素-3,4-二甲醚、木犀草素-7,3',4'-三甲醚、金合欢素-7-甲醚、金圣草黄素、芹菜苷元。还含酚酸类、氨基酸、有机酸、酚类。\n【使用禁忌】尚不明确。\n【配伍药方】治小儿疳积：独脚金、地耳草、瓜子金、山扁豆、山 花生各等量，共研细粉，每日用6～9克与猪瘦肉或肝类同蒸，分3次服；或煎水过滤后服。" },

  {
    "id": 10,
    "price": 17.5,
    "name": "凤眼果",
    "key": "凤眼果",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/608f1992-8b2e-4cc5-a2c1-c58370f8b22c.jpg",
    "cat": 10,
    "brief": "凤眼果纯果肉萍婆果苹婆果九层皮富贵子新鲜500g纯果广东包邮顺丰",
    "alias": "【中药名】\n凤眼果 fengyanguo\n【别名】\n九层皮、罗晃子、苹婆果、安果。\n【英文名】\nNobilis Sterculia Seed。",
    "explain": "【药用部位】来源于梧桐科植物苹婆Sterculia nobilis Smith的种子\n【植物形态】乔木。树皮黑褐色，小枝幼时略被星状毛。叶互生，叶片薄革质，长圆形或椭圆形，长8～25厘米，宽5～15厘米，先端急尖或钝，基部圆或钝。圆锥花序顶生或腋生，披散，有短柔毛；花单性，无花冠，花萼淡红色，钟状，外面被短毛柔毛，5列，裂片条状披针形，先端渐尖且向内曲，在先端互相黏合，与钟状萼筒等长，雄花较多，雌雄蕊柄弯曲，雌花较少，略大，子房圆球形，有5条沟纹，密被毛，柱头5浅裂。蓇葖果鲜红色，厚革质，长圆状卵形，先端有喙，种子1～4颗。种子椭圆形或长圆形，黑褐色。\n【产地分布】野生山坡林内或灌丛中，亦有栽培。产广东、广西的南部、福建东南部、云南南部和台湾。\n【采收加工】果实成熟时采收，剥取种子晒干备用。\n【药材性状】种子椭圆球形，黑褐色或暗栗色，直径约1.5厘米。气微，味淡。以种子个大，色均匀者为佳。\n【性味归经】性平，味甘。归胃经、大肠经、小肠经。\n【功效与作用】和胃消食，解毒杀虫。属消食药。\n【临床应用】煎汤，6～8枚；或研末为散。外用：适量，煅存性研末调搽。主治反胃吐食，虫积腹痛，疝痛，小儿烂头疮。\n【药理研究】有增强肠道功能。\n【化学成分】富含维生素A。\n【使用禁忌】脾虚便泄者禁服。\n【配伍药方】①治疝痛：罗晃子七个。酒煎服。(姚可成《食物本草》)\n②治翻胃吐食，食下即出；或朝食暮吐，暮食朝吐：凤眼果七枚。煅存性，每日酒调下方寸匕，服完为度。(姚可成《食物本草》)\n③治腹中蛔虫上攻，心下大痛欲死，面有白斑：罗晃子、牵牛子各七枚。水煎服。(姚可成《食物本草》)" },

  {
    "id": 11,
    "price": 17.5,
    "name": "红曲",
    "key": "红曲",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/04da7042-9ce4-4fa0-bbd8-5c148ba02232.jpg",
    "cat": 10,
    "brief": "天然果蔬粉纯紫薯南瓜草莓红曲菠菜竹炭烘焙蒸馒头家用食用色素粉",
    "alias": "【中药名】\n红曲 hongqu\n【别名】\n赤曲、红米、福曲、红大米、红槽。\n【英文名】\nUltivarietas Oryzaei 。",
    "explain": "【药用来源】红曲科真菌紫红曲 Monascus purpureus Went接种于禾本科植物粳稻蒸熟的种仁上经发酵形成菌丝而制成。\n【菌体形态】菌丝体大量分枝，初期无色，渐变为红色，老后紫红色；菌丝有横隔，多核，含橙红色颗粒。成熟时在分枝的顶端产生单个或成串的分生孢子。分生孢子褐色，(6～9)微米×(7～10)微米。在另外菌丝顶端还产生橙红色单个的球形子囊壳(闭囊壳)；闭囊壳橙红色，近球形，直径25～75微米，内含多个子囊。子囊球形，含8个子囊孢子，成熟后子囊壁消失。子囊孢子卵形或近球形，光滑，透明，无色或淡红色，(5.5～6)微米×(3.5～5)微米。\n【产地分布】此菌在自然界多存在于乳制品中，亦可用粳米作培养基进行人工培养，使之成红曲米。分布于河北、浙江、福建、江西、广东、台湾等地。\n【采收加工】取洁净大米100克，加入沸水110毫升，装入大三角瓶中或其他发酵器皿内，以718.2Pa压力经30分钟高压灭菌后，在无菌条件下接入红曲菌种于固体培养基表面。大30℃恒温上培养，约3天后全部米料变成紫红色时即可。\n【药材性状】红曲药材呈长卵形、类圆柱形或不规则形，略扁。表面紫红色或棕红色，凹凸不平，有的具浅纵、横纹理。质脆，易沿横纹理断开，断面平齐，边缘红色至暗红色，中部略凹，白色至浅红色。气特异，味淡、微甘。\n【性味归经】性温，味甘。归肝经、脾经、大肠经。\n【功效与作用】活血化瘀，健脾消食。属消食药。\n【临床应用】内服：煎汤，用量6～15克；或入丸、散。外用：适量，捣敷。主治产后恶露不尽，瘀滞腹痛，跌打损伤，食积饱胀，赤白下痢，纳呆食少。也可用于高脂血症及动脉粥样硬化引起的辅助治疗。\n【药理研究】①降压、降脂作用：红曲对低肾素高血压病患者有较好的降血压作用。②抑菌作用：红曲能产生抗菌活性物质，对芽胞杆菌属、链球菌属、假单胞菌属等有抑菌活性，其抗菌活性是由梦那玉红、潘红胺两种色素产生的。③其他作用：红曲发酵后可分离到辅酶Q10，辅酶Q10又名癸烯醌，是细胞代谢及细胞呼吸的激活剂，能改善线粒体呼吸功能，促进氧化磷酸化反应。它本身又是细胞自身产生的天然氧化剂，能抑制线粒体的过氧化，有保护生物膜结构完整性的功能。对免疫有非特异的增强作用，能提高吞噬细胞的吞噬率，增加抗体的产生，改善T细胞功能。\n【化学成分】酶类：有糖化酶、麦芽糖酶、果胶酶等，糊精化酶、旷淀粉酶、淀粉1-4葡萄糖苷酶、蛋白酶、羧肽酶等，其中的红曲酶葡萄糖淀粉酶有五种类型。色素：潘红、梦那玉红等2种红色色素，梦那玉、安卡黄素等2种黄色色素，潘红胺、梦那天红胺等2种紫色色素。红曲色素：红曲玉红素，红斑红曲素，红曲玉红胺，红斑红曲胺，安卡红曲黄素，红曲素。红曲多糖：半乳糖、葡萄糖、甘露糖。红曲霉素的发酵产物中尚含有：麦角甾醇、硬脂酸、枸橼酸、琥珀酸、乳酸、草酸、醋酸核苷酵素及微量的乙醛、蚁酸、杂醇油、丙酮、3-羟基丁酮等。\n【使用禁忌】脾阴不足、内无瘀血者、孕妇慎服。\n【配伍药方】①治饮食停滞，胸膈满闷，消化不良：红曲9克，麦芽6克，山楂9克 水煎服，每日2次。(出自刘波《中国药用真菌》)\n②治心腹作痛：赤曲、香附、乳香等分。为末，酒服。(《摘玄方》)\n③治小儿吐逆频频，不进乳食，手足心热：红曲(年久者)三钱半，白术(麸炒)一钱半，甘草(炙)一钱。为末。每服半钱，煎枣子米汤下。(《纲目》引《经济(验)方》)" },

  {
    "id": 12,
    "price": 17.5,
    "name": "鸡内金",
    "key": "鸡内金",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/ffc9bead-3e6d-483b-a812-6d90ffc1da9a.jpg",
    "cat": 10,
    "brief": "江中山楂鸡内金软糖搭六物膏开胃脾胃咀嚼片儿童积食调理",
    "alias": "【中药名】\n鸡内金 jineijin\n【别名】\n鸡肫皮、鸡肶胵、鸡中金、化石胆、化骨胆。\n【英文名】\nGalli Gigerii Endothelium Corneum",
    "explain": "【药用部位】来源于雉科动物家鸡Gallus gallus domesticus Brisson的干燥沙囊内壁。\n【动物形态】家禽。嘴短而坚，略呈圆锥状，上嘴稍弯曲。鼻孔裂状，被有鳞状瓣。眼有瞬膜。头上有肉冠，喉部两侧有肉垂，通常褐红色；肉冠以雄者高大，雌性低小；肉垂亦以雄性为大。翼短；羽色雌、雄不同，雄性羽色较美，有长而鲜丽的尾羽；雌性尾羽甚短。足健壮，跗、跖及趾均被鳞板；趾4，前3后1，后趾短小，位略高。雄性跗跖部后方有距。家鸡因饲养杂交关系，品种繁多，形体大小及毛色不一。\n【产地分布】善走，喜以足搔地觅食，食物常为植物的种子、果实及昆虫等。雄鸡善啼。全国各地均有饲养。\n【采收加工】杀鸡后，取出鸡肫，剖开，立即取下鸡肫内壁，洗净，干燥。\n【药材性状】不规则的卷片，厚约2毫米。表面黄色、黄绿色或黄褐色，半透明，具明显的条状皱纹。质脆，易碎，断面角质样，有光泽。气微腥，味微苦。\n【性味归经】性平，味甘。归脾经、胃经、小肠经、膀胱经。\n【功效与作用】健胃消食、涩精止遗。属消食药。\n【临床应用】用量3～9克，煎服或研末服，或入丸散。用治食积不消、呕吐泻痢、小儿疳积、遗尿、遗精。\n【药理研究】口服鸡内金粉后，胃液分泌量、酸度、消化力三者均增加，胃的运动期延长，蠕动波增加。此外，鸡内金水煎液对加速排放放射性锶有一定作用。\n【化学成分】鸡内金含胃液素(胃激素)，角蛋白，微量胃蛋白酶，淀粉酶，多种维生素。出生4～8星期的小鸡砂囊内膜还含有胆汁三烯和胆绿素的黄色衍生物，并含赖氨酸，组氨酸，精氨酸，谷氨酸，天冬氨酸，亮氨酸，苏氨酸，丝氨酸，甘氨酸，丙氨酸，半胱氨酸，缬氨酸，甲硫氨酸，异亮氨酸，酪氨酸，苯丙氨酸，脯氨酸，色氨酸等18种氨基酸及铝、钙、铬、钴、铜、铁、镁、锰、钼、铅、锌等微量元素。\n【使用禁忌】脾虚无积滞者慎服。\n【配伍药方】①治食积腹满：鸡内金研末，乳服。（《本草求原》）\n②治反胃，食即吐出，上气：鸡肶胵烧灰，酒服。（《千金方》）\n③治小儿疳病：鸡肫皮二十个（勿落水，瓦焙干，研末），车前子四两（炒，研末）。二物和匀，以米汤溶化，拌入与食。忌油腻、面食、煎炒。（《寿世新编》）\n④消导酒积：鸡内金、干葛（为末）等分。面糊丸，梧子大。每服五十丸，酒下。（《袖珍办》）\n⑤治夜梦遗精：公鸡肫皮七个。焙干为末，每服一钱，空心酒下。（《沈氏经验方》）\n⑥治痟肾，小便滑数白浊，令人赢瘦：鸡肶胵一两（微炙），黄耆半两，五味子半两。上药，粗捣，以水三大盏，煎至一盏半，去滓，食前分温三服。（《圣惠方》）\n⑦治喉闭乳蛾：鸡肫黄皮勿洗，阴干烧末，用竹管吹之。（《青囊杂纂》）\n⑧治一切口疮：鸡内金烧灰，敷之。（《活幼新书》）\n⑨治走马牙疳：鸡肫黄皮（不落水者）五枚，枯矾五钱。研搽。（《经验方》）" },

  {
    "id": 13,
    "price": 17.5,
    "name": "常山",
    "key": "常山",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/35dbd770-cfb7-4a23-ac54-4bb3935c9705.jpg",
    "cat": 10,
    "brief": "包邮 蜀漆 500克g 鸡屎草 鸭屎草 常山苗 非野生中药材",
    "alias": "【中药名】\n常山 changshan\n【别名】\n鸡骨常山、黄常山、大金刀、摆子药。\n【英文名】\nDichroae Radix",
    "explain": "【来源】虎耳草科植物常山Dichroa febrifuga Lour.的根。\n【植物形态】落叶灌木。主根圆柱形，常弯曲。茎有明显的节。叶对生，叶片椭圆形、阔披针形或长圆倒卵形。圆锥聚伞花序伞房状，着生于枝顶或上部的叶腋，花淡蓝色，花萼管状，淡蓝色，花瓣5～6，蓝色，长圆披针形或卵形；雄蕊10～12枚，着生于花瓣基部，花药蓝色，长椭圆形，2室纵列，子房蓝色，半下位，长圆形，1室，胚珠多数，花柱4，柱头椭圆形。浆果圆形，蓝色，有宿存萼和花柱。花期6～7月，果期8～9月。\n【产地分布】分布于四川、贵州、云南和西藏等地。四川有栽培。\n【采收加工】秋季采挖，除去须根，洗净，晒干。\n【药材性状】圆柱形，常弯曲扭转，或有分枝。表面棕黄色，具细纵纹，外皮易剥落，剥落处露出淡黄色木部。质坚硬，不易折断，折断时有粉尘飞扬。横切面黄白色，射线类白色，呈放射状。无臭，味苦。\n【性味归经】性寒，味苦、辛。有毒。归肺经、肝经、心经。\n【功效与作用】截疟、涌吐劫痰。属涌吐药。\n【临床应用】用量5～9克，煎服。用治痰饮停聚，胸膈痞塞，疟疾。\n【药理研究】具有解热、降压、催吐等作用。总提取物对人工培养的恶性疟原虫和动物实验性疟原虫均有较好疗效。常山碱乙抗阿米巴原虫效力比依米丁大1倍。动物试验表明，常山碱甲、常山碱乙、常山碱丙能降低血压。\n【化学成分】含常山碱甲、常山碱乙、常山碱丙、常山次碱、喹唑酮、伞形花内酯、黄常山定碱、黄常山碱甲、黄常山碱乙、常山素A、常山素B、八仙花酚、4-羟基八仙花酚等成分。\n【使用禁忌】内服剂量不宜过大。脾胃虚弱及肝肾功能不全者慎服。\n【配伍药方】①治疟疾寒热：常山3克，厚朴、青皮、陈皮、炙甘草、槟榔、草果仁各1.5克。上细切，作一服，酒水各半盏，寒多加酒，热多加水，煎八分，露星月一宿，空心冷服。忌热茶汤一日，至午食温粥。(《医学正传》引自《局方》截疟七宝饮)\n②治疟疾：常山、槟榔、鳖甲各30克，乌梅、红枣各9个，甘草、生姜各9片，制成浓缩流浸膏10克。日服1～2次，每次5克。一般用12～18克即愈。服后无呕吐及其他副作用。(《中华医学杂志》1955.(6)：526)\n③治胸中多痰，头痛不欲食及饮酒：常山120克，甘草15克。水七升，煮取三升，内半升蜜，服一升，不吐更服。无蜜亦可。(《肘后方》)\n④治痰厥头痛，往来寒热：常山30克，云母粉60克。上件药捣细罗为散，每服不计时候以盐汤下3克，得吐为效；若吐不尽，即更一服。(《圣惠方》)\n⑤治鹅掌风：常山1斤。以油核桃擦手、足患处，炉内焚常山1斤，用青布盖好熏之。七日不下水。(《何氏济生论》)" },

  {
    "id": 14,
    "price": 17.5,
    "name": "胆矾",
    "key": "胆矾",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/de99513c-7ebb-4b9a-b44e-1abd0c42e1be.jpg",
    "cat": 10,
    "brief": "胆矾 500克 包邮 蓝矾 铜矾 硫酸铜 中药材店铺 品类齐全 非食用",
    "alias": "【中药名】\n胆矾 danfan\n【别名】\n石胆、蓝矾、毕石、君石、石液。\n【英文名】\nChalcanthitum。",
    "explain": "【药用部位】硫酸盐类胆矾族矿物胆矾Chalcanthite的晶体，或为硫酸作用于铜而制成的含水硫酸铜结晶。\n【矿物形态】单晶体呈厚板状或短柱状，但不常见。集合体呈不规则块状、肾状或粒状。多具棱角，表面不平坦，深蓝色或附有风化物——白色粉霜，半透明，硬度2.5，性极脆，易打碎，断口贝壳状。相对密度2.1～2.3。极易溶于水，使水呈均匀的天蓝色。胆矾是由含铜硫化物氧化分解形成的次生矿物，可与蓝铜矿（扁青）、孔雀石（绿青）等矿物共生。\n【分布】天然胆矾主要产于气候干燥地区铜矿床的氧化带中。分布于云南、四川、贵州、山西、陕西、湖南、江西、广东等地。主产于云南、山西。\n【采收加工】全年可采。开采后选取蓝色、有玻璃样光泽者。人工合成者，可用硫酸作用于铜片或氧化铜而制得。\n【药材性状】不规则的块片状或斜方形棱柱状结晶体，淡黄色或深蓝色，半透明，具玻璃样光泽，置空气中逐渐风化，表面变为黄绿色；加热去结晶水变为白色，遇水又变蓝色。质硬而脆，易破碎，碎断面颜色与表面相同。气无，味涩。\n【性味归经】性寒，味酸、辛。归肝经、胆经。\n【功效与作用】涌吐、解毒、去腐。属涌吐药。\n【临床应用】用量0.3～0.6克，温汤化服；外用适量，研末撒或调敷，或吹喉，或以水溶化外洗患处。用治中风、癫痫、喉痹、喉风、痰涎壅塞、牙疳、口疮、烂弦风眼、痔疮、肿毒。\n【药理研究】动物实验表明，本品具有利胆作用，可明显促进胆汁分泌。并有催吐作用，内服后可刺激胃壁神经，反射引起口区吐。此外其浓溶液对局部黏膜具有腐蚀作用，故可退翳。\n【化学成分】主含含水硫酸铜，通常是带5分子结晶水的蓝色结晶（CuSO₄·5H₂O）。\n【使用禁忌】体虚者忌服。\n【配伍药方】①治酒面热盛，咽喉肿结闭塞：鸭嘴胆矾半钱，全蝎二个。上为末。以鸡羽蘸药人喉中，须臾，破开声出，次用生青荷研细，井水调下。喉吐出毒涎即愈，未吐再服。（《直指方》胆矾散）\n②治喉内结核不消：石胆、硇砂研细。每用竹筒吹之，或以箸头蘸之。（《普济方》保安散）\n③治眼生肤翳，目赤痛，痒涩：石胆半两，石盐一两，朱砂1两，盐绿半两，龙脑一分，腻粉一钱。上为细末。每以铜箸头取如小豆大．点同中，一日三四次。（《圣惠方》）石胆散）\n④治大人、小儿牙齿动摇，龈腭宣露，骨槽风毒，宣蚀溃烂，不能入食者：胆矾二钱，雄黄二钱，麝香一钱（别研），龙骨一钱。七件同研令极细。每用一字，以鹅毛蘸药扫患处，日用一二次。若小儿走马疳，唇龈蚀烂者，先泡青盐汤洗净，后用新绵拭干掺药。 《杨氏家藏方》麝香矾雄散)\n⑤治口舌生疮：胆矾一分，干蟾一分（炙）。共研为末。每取小豆大，掺在疮上，良久，用新汲水五升漱口，水尽为度。（《圣惠方》）\n⑥治口疮，喉闭，乳蛾：胆矾一钱，熊胆一钱，广木香三分。通为细末，以木鳖子一个，去壳，磨井水，以鹅翎蘸药敷。（《摄生众妙方》）" },

  {
    "id": 15,
    "price": 17.5,
    "name": "藜芦",
    "key": "藜芦",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/bbae9aea-f9c6-471d-a71f-52fa09d6eb90.jpg",
    "cat": 10,
    "brief": "新疆正品新货中药材 黎芦 藜芦 黑藜芦 梨芦 山葱 500克包邮",
    "alias": "【中药名】\n藜芦 lilu\n【别名】\n葱苒、葱葵、梨卢、山葱、七厘丹。\n【英文名】\nRadix Et Rhizoma Veratri Nigri。",
    "explain": "【来源】百合科植物黑藜芦Veratum nigrum L.的根及根茎。\n【植物形态】多年生草本，高60～100厘米。根茎短圆柱形，具多数细长的根，肉质，外皮黄白色。茎直立，基部有黑褐色棕毛状的叶柄残基。叶互生，近无柄，叶片阔椭圆形、阔卵形至卵状披针形，先端渐尖，基部渐狭下延成鞘状包茎，上面青绿色，下面灰绿色，有强脉而具折。圆锥花序顶生，花序轴密被灰白色绵毛，花小，杂性，雄花通常生于花序轴下部，两性花常在中部心上，花被片6，黑紫色，开展或稍下反，雄蕊6枚，与花被片对生，花药肾形，背着，子房近方形，花柱3，3室，胚珠多数。蒴果长1.5厘米，2深裂，种子具翅。\n【产地分布】生于山谷、山地阴坡或灌木林下。分布于黑龙江、吉林、辽宁、内蒙古等地。\n【采收加工】一般于5月至6月末抽花茎前采挖根部或连同少部分根茎，除去地上部分的茎叶，洗净，晒干，或挖取全草，除去泥土，晒干药用。\n【药材性状】根茎圆柱形，长2～4厘米，直径0.7～1.5厘米，表面棕黄色或土黄色，上端残留叶基及毛鳞状物，四周生有众多细根。根细长，略弯曲，长10～20厘米，直径1～4厘米，表面黄白色或灰褐色，有较密的横皱纹，下端多纵皱纹，质脆，断面类白色，中心有淡黄色的中柱，易于皮部分离。气微，味极苦，粉末有强烈的催嚏性。\n【性味归经】性寒，味辛、苦。归肝经、肺经、胃经。\n【功效与作用】涌吐风痰、杀虫疗疮。属涌吐药。\n【临床应用】用量0.3～0.9克，宜入丸散，内服治疗中风痰壅、喉痹不通、癫痫等症。油调外涂，治疥癣、秃疮，外用适量。注意：本品毒性猛烈，用时宜慎。\n【药理研究】具有催吐、降血压、抗微生物及灭虫作用。藜芦粗提物对麻醉犬或猫有明显而持久的降压作用，无快速耐受现象，在降压的同时伴有心跳减慢，呼吸抑制甚至暂停，对肾性高血压犬亦有降压作用。藜芦生物碱降压原理被认为是由于颈动脉窦及心肺感受区窦神经及迷走神经传人纤维反射性地抑制血管运动中枢，引起血压下降。毒性：藜芦浸出液小鼠皮下注射LD50为( 11.78±0.38)克/千克。\n【化学成分】含多种甾体生物碱，如介芬碱、伪介芬碱、藜芦碱胺等。全草中分离出15种生物碱，包括藜芦辛、芥芬碱、新计巴丁碱。另含乙酰基原藜芦碱A、原藜芦碱A、计米定碱、双去乙酰基原藜芦碱A、藜芦嗪、藜芦酰棋盘花碱、藜芦米宁等成分。\n【使用禁忌】孕妇及体弱者忌服。反细辛、芍药、人参、沙参、丹参、玄参、苦参。服之吐不止，可饮葱汤解。\n【配伍药方】①治头痛不可忍：藜芦一茎，暴干，捣罗为散，入麝香麻子许，研匀吹鼻中。(《圣济总录》吹鼻麝香散)\n②治头痛鼻塞脑闷：藜芦(研)15克，黄连(去须)0.9克。上二味，捣研为散，每用少许，吸入鼻中。(《圣济总录》通顶散)\n③治牙痛：纳黎芦末于牙孔中，勿咽汁。(《干金翼方》)\n④治疥癣：藜芦细捣为末，以生油调敷之。(《斗门方》)\n⑤治癣立有神效：藜芦根15克，轻粉0.75克。上为细末，凉水调，搽癣上。(《普济方》)" },

  {
    "id": 16,
    "price": 17.5,
    "name": "甜瓜蒂",
    "key": "甜瓜蒂",
    "icon": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cbce6465-a8e8-4255-846c-46383aa22aa0/2df97640-e5cf-413b-9ae9-d38f3cf3e76b.jpg",
    "cat": 10,
    "brief": "包邮甜瓜蒂苦丁香甜瓜把香瓜蒂甜瓜蒂粉可搭配辛夷花备注可打细粉",
    "alias": "【中药名】\n甜瓜蒂 tianguadi\n【别名】\n瓜蒂、瓜丁、苦丁香、甜瓜把。\n【英文名】\nPedicellus melo",
    "explain": "【药用部位】葫芦科植物甜瓜Cucumis melo L.的干燥果柄。\n【植物形态】一年生匍匐或攀援草本。茎、枝有黄褐色或白色的糙毛和疣状突起。卷须单一，被微柔毛。叶互生，叶柄长8～12厘米，具槽沟及短刚柔毛，叶片厚纸质，近圆形或肾形，上面被白色糙硬毛，下面沿脉密被糙硬毛，边缘不分裂或3～7浅裂，裂片先端圆钝，有锯齿。花单性，雌雄同株，雄花数朵，簇生于叶腋，花梗纤细，长0.5～2厘米，被柔毛，花萼筒狭钟形，密被白色长柔毛，裂片近钻形，花冠黄色，长约2厘米，裂片卵状长圆形，急尖，雄蕊3，花丝极短，药室折曲，雌花单生，花梗被柔毛，子房长椭圆形，密被长柔毛和硬毛，花柱长1～2毫米，柱头靠合。果实形状、颜色变异较大，一般为球形或长椭圆形，果皮平滑，有纵沟或斑纹，果肉白色、黄色或绿色。种子污白色或黄白色，卵形或长圆形。花、果期夏季。\n【产地分布】全国各地广泛栽培。\n【采收加工】夏季采收成熟果实，在食用时将切下的果柄收集，阴干或晒干。\n【药材性状】本品呈细圆柱形，常扭曲，长3～6厘米，直径0.2～0.4厘米，连接瓜的一端略膨大，直径约8毫米，有纵沟纹，外表面灰黄色，有稀疏短毛茸。带果皮的果柄较短，长0.3～2.6厘米，略弯曲或扭曲，有纵沟纹，果皮部分近圆盘形，直径约2厘米，外表面暗黄色至棕黄色，皱缩，边缘薄而内卷，内表面黄白色至棕色。果柄质较而韧，不易折断，断面纤维性，中空。气微，味苦\n【性味归经】性寒，味苦。归脾经、胃经、肝经。\n【功效与作用】涌吐痰食、除湿退黄。属涌吐药。\n【临床应用】内服：煎汤，3～6克，或入丸、散，0.3～1.5克。外用：适量，研末吹鼻。主治中风、癫痫、喉痹、痰涎壅盛、呼吸不利、宿食不化、胸脘胀痛、湿热黄疸。\n【药理研究】保肝；抗癌；增强细胞免疫功能；抗炎和避孕；致吐。\n【化学成分】本品主要含氨基酸，葫芦苦素B、葫芦苦素D、葫芦苦素E，异葫芦苦素β、α-菠菜固醇等成分。\n【使用禁忌】体虚、失血及上部无实邪者禁服。本品有毒，不宜大量服用，过量则易出现头晕眼花，脘腹不适，呕吐，腹泻，严重者可因脱水，造成电解质紊乱终致循环衰竭及呼吸中枢麻痹而死亡。\n【配伍药方】①治牙齿痛：甜瓜蒂七枚。炒黄研散，以麝香相和，新绵裹，病牙处咬之。(《圣济总录》瓜蒂散)\n②治耳重：甜瓜蒂、麝香(研)、地龙、地丁各15克。上四味，捣罗为散。每以少许，掺耳内。(《圣济总录》抵圣散)\n③治疟：甜瓜蒂二七枚。捣，水渍一宿服之。(《千金要方》)\n④治诸痔：甜瓜蒂(末)9克，密陀僧6克(另研)，朱砂1.5克，冰片少许。上为末，干以唾调敷。(《古今医统大全》)" }] }];exports.default = _default;

/***/ }),

/***/ 3:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//百度、快手 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' &&
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE 此处将 != 修改为 !==。涉及地方太多恐怕测试不到，如果出现数据对比问题，将其修改回来。
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"神农百草堂","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"神农百草堂","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"神农百草堂","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"神农百草堂","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }

  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent'])
        .call(this.$scope, event, {
          __args__: toArray(arguments, 1)
        })
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 319:
/*!***************************************************************************!*\
  !*** D:/桌面/神农百草堂/神农百草堂/components/mpvue-citypicker/city-data/province.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var provinceData = [{
  "label": "北京市",
  "value": "11" },

{
  "label": "天津市",
  "value": "12" },

{
  "label": "河北省",
  "value": "13" },

{
  "label": "山西省",
  "value": "14" },

{
  "label": "内蒙古自治区",
  "value": "15" },

{
  "label": "辽宁省",
  "value": "21" },

{
  "label": "吉林省",
  "value": "22" },

{
  "label": "黑龙江省",
  "value": "23" },

{
  "label": "上海市",
  "value": "31" },

{
  "label": "江苏省",
  "value": "32" },

{
  "label": "浙江省",
  "value": "33" },

{
  "label": "安徽省",
  "value": "34" },

{
  "label": "福建省",
  "value": "35" },

{
  "label": "江西省",
  "value": "36" },

{
  "label": "山东省",
  "value": "37" },

{
  "label": "河南省",
  "value": "41" },

{
  "label": "湖北省",
  "value": "42" },

{
  "label": "湖南省",
  "value": "43" },

{
  "label": "广东省",
  "value": "44" },

{
  "label": "广西壮族自治区",
  "value": "45" },

{
  "label": "海南省",
  "value": "46" },

{
  "label": "重庆市",
  "value": "50" },

{
  "label": "四川省",
  "value": "51" },

{
  "label": "贵州省",
  "value": "52" },

{
  "label": "云南省",
  "value": "53" },

{
  "label": "西藏自治区",
  "value": "54" },

{
  "label": "陕西省",
  "value": "61" },

{
  "label": "甘肃省",
  "value": "62" },

{
  "label": "青海省",
  "value": "63" },

{
  "label": "宁夏回族自治区",
  "value": "64" },

{
  "label": "新疆维吾尔自治区",
  "value": "65" },

{
  "label": "台湾",
  "value": "66" },

{
  "label": "香港",
  "value": "67" },

{
  "label": "澳门",
  "value": "68" }];var _default =


provinceData;exports.default = _default;

/***/ }),

/***/ 320:
/*!***********************************************************************!*\
  !*** D:/桌面/神农百草堂/神农百草堂/components/mpvue-citypicker/city-data/city.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var cityData = [
[{
  "label": "市辖区",
  "value": "1101" }],

[{
  "label": "市辖区",
  "value": "1201" }],

[{
  "label": "石家庄市",
  "value": "1301" },

{
  "label": "唐山市",
  "value": "1302" },

{
  "label": "秦皇岛市",
  "value": "1303" },

{
  "label": "邯郸市",
  "value": "1304" },

{
  "label": "邢台市",
  "value": "1305" },

{
  "label": "保定市",
  "value": "1306" },

{
  "label": "张家口市",
  "value": "1307" },

{
  "label": "承德市",
  "value": "1308" },

{
  "label": "沧州市",
  "value": "1309" },

{
  "label": "廊坊市",
  "value": "1310" },

{
  "label": "衡水市",
  "value": "1311" }],


[{
  "label": "太原市",
  "value": "1401" },

{
  "label": "大同市",
  "value": "1402" },

{
  "label": "阳泉市",
  "value": "1403" },

{
  "label": "长治市",
  "value": "1404" },

{
  "label": "晋城市",
  "value": "1405" },

{
  "label": "朔州市",
  "value": "1406" },

{
  "label": "晋中市",
  "value": "1407" },

{
  "label": "运城市",
  "value": "1408" },

{
  "label": "忻州市",
  "value": "1409" },

{
  "label": "临汾市",
  "value": "1410" },

{
  "label": "吕梁市",
  "value": "1411" }],


[{
  "label": "呼和浩特市",
  "value": "1501" },

{
  "label": "包头市",
  "value": "1502" },

{
  "label": "乌海市",
  "value": "1503" },

{
  "label": "赤峰市",
  "value": "1504" },

{
  "label": "通辽市",
  "value": "1505" },

{
  "label": "鄂尔多斯市",
  "value": "1506" },

{
  "label": "呼伦贝尔市",
  "value": "1507" },

{
  "label": "巴彦淖尔市",
  "value": "1508" },

{
  "label": "乌兰察布市",
  "value": "1509" },

{
  "label": "兴安盟",
  "value": "1522" },

{
  "label": "锡林郭勒盟",
  "value": "1525" },

{
  "label": "阿拉善盟",
  "value": "1529" }],


[{
  "label": "沈阳市",
  "value": "2101" },

{
  "label": "大连市",
  "value": "2102" },

{
  "label": "鞍山市",
  "value": "2103" },

{
  "label": "抚顺市",
  "value": "2104" },

{
  "label": "本溪市",
  "value": "2105" },

{
  "label": "丹东市",
  "value": "2106" },

{
  "label": "锦州市",
  "value": "2107" },

{
  "label": "营口市",
  "value": "2108" },

{
  "label": "阜新市",
  "value": "2109" },

{
  "label": "辽阳市",
  "value": "2110" },

{
  "label": "盘锦市",
  "value": "2111" },

{
  "label": "铁岭市",
  "value": "2112" },

{
  "label": "朝阳市",
  "value": "2113" },

{
  "label": "葫芦岛市",
  "value": "2114" }],


[{
  "label": "长春市",
  "value": "2201" },

{
  "label": "吉林市",
  "value": "2202" },

{
  "label": "四平市",
  "value": "2203" },

{
  "label": "辽源市",
  "value": "2204" },

{
  "label": "通化市",
  "value": "2205" },

{
  "label": "白山市",
  "value": "2206" },

{
  "label": "松原市",
  "value": "2207" },

{
  "label": "白城市",
  "value": "2208" },

{
  "label": "延边朝鲜族自治州",
  "value": "2224" }],


[{
  "label": "哈尔滨市",
  "value": "2301" },

{
  "label": "齐齐哈尔市",
  "value": "2302" },

{
  "label": "鸡西市",
  "value": "2303" },

{
  "label": "鹤岗市",
  "value": "2304" },

{
  "label": "双鸭山市",
  "value": "2305" },

{
  "label": "大庆市",
  "value": "2306" },

{
  "label": "伊春市",
  "value": "2307" },

{
  "label": "佳木斯市",
  "value": "2308" },

{
  "label": "七台河市",
  "value": "2309" },

{
  "label": "牡丹江市",
  "value": "2310" },

{
  "label": "黑河市",
  "value": "2311" },

{
  "label": "绥化市",
  "value": "2312" },

{
  "label": "大兴安岭地区",
  "value": "2327" }],


[{
  "label": "市辖区",
  "value": "3101" }],

[{
  "label": "南京市",
  "value": "3201" },

{
  "label": "无锡市",
  "value": "3202" },

{
  "label": "徐州市",
  "value": "3203" },

{
  "label": "常州市",
  "value": "3204" },

{
  "label": "苏州市",
  "value": "3205" },

{
  "label": "南通市",
  "value": "3206" },

{
  "label": "连云港市",
  "value": "3207" },

{
  "label": "淮安市",
  "value": "3208" },

{
  "label": "盐城市",
  "value": "3209" },

{
  "label": "扬州市",
  "value": "3210" },

{
  "label": "镇江市",
  "value": "3211" },

{
  "label": "泰州市",
  "value": "3212" },

{
  "label": "宿迁市",
  "value": "3213" }],


[{
  "label": "杭州市",
  "value": "3301" },

{
  "label": "宁波市",
  "value": "3302" },

{
  "label": "温州市",
  "value": "3303" },

{
  "label": "嘉兴市",
  "value": "3304" },

{
  "label": "湖州市",
  "value": "3305" },

{
  "label": "绍兴市",
  "value": "3306" },

{
  "label": "金华市",
  "value": "3307" },

{
  "label": "衢州市",
  "value": "3308" },

{
  "label": "舟山市",
  "value": "3309" },

{
  "label": "台州市",
  "value": "3310" },

{
  "label": "丽水市",
  "value": "3311" }],


[{
  "label": "合肥市",
  "value": "3401" },

{
  "label": "芜湖市",
  "value": "3402" },

{
  "label": "蚌埠市",
  "value": "3403" },

{
  "label": "淮南市",
  "value": "3404" },

{
  "label": "马鞍山市",
  "value": "3405" },

{
  "label": "淮北市",
  "value": "3406" },

{
  "label": "铜陵市",
  "value": "3407" },

{
  "label": "安庆市",
  "value": "3408" },

{
  "label": "黄山市",
  "value": "3410" },

{
  "label": "滁州市",
  "value": "3411" },

{
  "label": "阜阳市",
  "value": "3412" },

{
  "label": "宿州市",
  "value": "3413" },

{
  "label": "六安市",
  "value": "3415" },

{
  "label": "亳州市",
  "value": "3416" },

{
  "label": "池州市",
  "value": "3417" },

{
  "label": "宣城市",
  "value": "3418" }],


[{
  "label": "福州市",
  "value": "3501" },

{
  "label": "厦门市",
  "value": "3502" },

{
  "label": "莆田市",
  "value": "3503" },

{
  "label": "三明市",
  "value": "3504" },

{
  "label": "泉州市",
  "value": "3505" },

{
  "label": "漳州市",
  "value": "3506" },

{
  "label": "南平市",
  "value": "3507" },

{
  "label": "龙岩市",
  "value": "3508" },

{
  "label": "宁德市",
  "value": "3509" }],


[{
  "label": "南昌市",
  "value": "3601" },

{
  "label": "景德镇市",
  "value": "3602" },

{
  "label": "萍乡市",
  "value": "3603" },

{
  "label": "九江市",
  "value": "3604" },

{
  "label": "新余市",
  "value": "3605" },

{
  "label": "鹰潭市",
  "value": "3606" },

{
  "label": "赣州市",
  "value": "3607" },

{
  "label": "吉安市",
  "value": "3608" },

{
  "label": "宜春市",
  "value": "3609" },

{
  "label": "抚州市",
  "value": "3610" },

{
  "label": "上饶市",
  "value": "3611" }],


[{
  "label": "济南市",
  "value": "3701" },

{
  "label": "青岛市",
  "value": "3702" },

{
  "label": "淄博市",
  "value": "3703" },

{
  "label": "枣庄市",
  "value": "3704" },

{
  "label": "东营市",
  "value": "3705" },

{
  "label": "烟台市",
  "value": "3706" },

{
  "label": "潍坊市",
  "value": "3707" },

{
  "label": "济宁市",
  "value": "3708" },

{
  "label": "泰安市",
  "value": "3709" },

{
  "label": "威海市",
  "value": "3710" },

{
  "label": "日照市",
  "value": "3711" },

{
  "label": "莱芜市",
  "value": "3712" },

{
  "label": "临沂市",
  "value": "3713" },

{
  "label": "德州市",
  "value": "3714" },

{
  "label": "聊城市",
  "value": "3715" },

{
  "label": "滨州市",
  "value": "3716" },

{
  "label": "菏泽市",
  "value": "3717" }],


[{
  "label": "郑州市",
  "value": "4101" },

{
  "label": "开封市",
  "value": "4102" },

{
  "label": "洛阳市",
  "value": "4103" },

{
  "label": "平顶山市",
  "value": "4104" },

{
  "label": "安阳市",
  "value": "4105" },

{
  "label": "鹤壁市",
  "value": "4106" },

{
  "label": "新乡市",
  "value": "4107" },

{
  "label": "焦作市",
  "value": "4108" },

{
  "label": "濮阳市",
  "value": "4109" },

{
  "label": "许昌市",
  "value": "4110" },

{
  "label": "漯河市",
  "value": "4111" },

{
  "label": "三门峡市",
  "value": "4112" },

{
  "label": "南阳市",
  "value": "4113" },

{
  "label": "商丘市",
  "value": "4114" },

{
  "label": "信阳市",
  "value": "4115" },

{
  "label": "周口市",
  "value": "4116" },

{
  "label": "驻马店市",
  "value": "4117" },

{
  "label": "省直辖县级行政区划",
  "value": "4190" }],


[{
  "label": "武汉市",
  "value": "4201" },

{
  "label": "黄石市",
  "value": "4202" },

{
  "label": "十堰市",
  "value": "4203" },

{
  "label": "宜昌市",
  "value": "4205" },

{
  "label": "襄阳市",
  "value": "4206" },

{
  "label": "鄂州市",
  "value": "4207" },

{
  "label": "荆门市",
  "value": "4208" },

{
  "label": "孝感市",
  "value": "4209" },

{
  "label": "荆州市",
  "value": "4210" },

{
  "label": "黄冈市",
  "value": "4211" },

{
  "label": "咸宁市",
  "value": "4212" },

{
  "label": "随州市",
  "value": "4213" },

{
  "label": "恩施土家族苗族自治州",
  "value": "4228" },

{
  "label": "省直辖县级行政区划",
  "value": "4290" }],


[{
  "label": "长沙市",
  "value": "4301" },

{
  "label": "株洲市",
  "value": "4302" },

{
  "label": "湘潭市",
  "value": "4303" },

{
  "label": "衡阳市",
  "value": "4304" },

{
  "label": "邵阳市",
  "value": "4305" },

{
  "label": "岳阳市",
  "value": "4306" },

{
  "label": "常德市",
  "value": "4307" },

{
  "label": "张家界市",
  "value": "4308" },

{
  "label": "益阳市",
  "value": "4309" },

{
  "label": "郴州市",
  "value": "4310" },

{
  "label": "永州市",
  "value": "4311" },

{
  "label": "怀化市",
  "value": "4312" },

{
  "label": "娄底市",
  "value": "4313" },

{
  "label": "湘西土家族苗族自治州",
  "value": "4331" }],


[{
  "label": "广州市",
  "value": "4401" },

{
  "label": "韶关市",
  "value": "4402" },

{
  "label": "深圳市",
  "value": "4403" },

{
  "label": "珠海市",
  "value": "4404" },

{
  "label": "汕头市",
  "value": "4405" },

{
  "label": "佛山市",
  "value": "4406" },

{
  "label": "江门市",
  "value": "4407" },

{
  "label": "湛江市",
  "value": "4408" },

{
  "label": "茂名市",
  "value": "4409" },

{
  "label": "肇庆市",
  "value": "4412" },

{
  "label": "惠州市",
  "value": "4413" },

{
  "label": "梅州市",
  "value": "4414" },

{
  "label": "汕尾市",
  "value": "4415" },

{
  "label": "河源市",
  "value": "4416" },

{
  "label": "阳江市",
  "value": "4417" },

{
  "label": "清远市",
  "value": "4418" },

{
  "label": "东莞市",
  "value": "4419" },

{
  "label": "中山市",
  "value": "4420" },

{
  "label": "潮州市",
  "value": "4451" },

{
  "label": "揭阳市",
  "value": "4452" },

{
  "label": "云浮市",
  "value": "4453" }],


[{
  "label": "南宁市",
  "value": "4501" },

{
  "label": "柳州市",
  "value": "4502" },

{
  "label": "桂林市",
  "value": "4503" },

{
  "label": "梧州市",
  "value": "4504" },

{
  "label": "北海市",
  "value": "4505" },

{
  "label": "防城港市",
  "value": "4506" },

{
  "label": "钦州市",
  "value": "4507" },

{
  "label": "贵港市",
  "value": "4508" },

{
  "label": "玉林市",
  "value": "4509" },

{
  "label": "百色市",
  "value": "4510" },

{
  "label": "贺州市",
  "value": "4511" },

{
  "label": "河池市",
  "value": "4512" },

{
  "label": "来宾市",
  "value": "4513" },

{
  "label": "崇左市",
  "value": "4514" }],


[{
  "label": "海口市",
  "value": "4601" },

{
  "label": "三亚市",
  "value": "4602" },

{
  "label": "三沙市",
  "value": "4603" },

{
  "label": "儋州市",
  "value": "4604" },

{
  "label": "省直辖县级行政区划",
  "value": "4690" }],


[{
  "label": "市辖区",
  "value": "5001" },

{
  "label": "县",
  "value": "5002" }],


[{
  "label": "成都市",
  "value": "5101" },

{
  "label": "自贡市",
  "value": "5103" },

{
  "label": "攀枝花市",
  "value": "5104" },

{
  "label": "泸州市",
  "value": "5105" },

{
  "label": "德阳市",
  "value": "5106" },

{
  "label": "绵阳市",
  "value": "5107" },

{
  "label": "广元市",
  "value": "5108" },

{
  "label": "遂宁市",
  "value": "5109" },

{
  "label": "内江市",
  "value": "5110" },

{
  "label": "乐山市",
  "value": "5111" },

{
  "label": "南充市",
  "value": "5113" },

{
  "label": "眉山市",
  "value": "5114" },

{
  "label": "宜宾市",
  "value": "5115" },

{
  "label": "广安市",
  "value": "5116" },

{
  "label": "达州市",
  "value": "5117" },

{
  "label": "雅安市",
  "value": "5118" },

{
  "label": "巴中市",
  "value": "5119" },

{
  "label": "资阳市",
  "value": "5120" },

{
  "label": "阿坝藏族羌族自治州",
  "value": "5132" },

{
  "label": "甘孜藏族自治州",
  "value": "5133" },

{
  "label": "凉山彝族自治州",
  "value": "5134" }],


[{
  "label": "贵阳市",
  "value": "5201" },

{
  "label": "六盘水市",
  "value": "5202" },

{
  "label": "遵义市",
  "value": "5203" },

{
  "label": "安顺市",
  "value": "5204" },

{
  "label": "毕节市",
  "value": "5205" },

{
  "label": "铜仁市",
  "value": "5206" },

{
  "label": "黔西南布依族苗族自治州",
  "value": "5223" },

{
  "label": "黔东南苗族侗族自治州",
  "value": "5226" },

{
  "label": "黔南布依族苗族自治州",
  "value": "5227" }],


[{
  "label": "昆明市",
  "value": "5301" },

{
  "label": "曲靖市",
  "value": "5303" },

{
  "label": "玉溪市",
  "value": "5304" },

{
  "label": "保山市",
  "value": "5305" },

{
  "label": "昭通市",
  "value": "5306" },

{
  "label": "丽江市",
  "value": "5307" },

{
  "label": "普洱市",
  "value": "5308" },

{
  "label": "临沧市",
  "value": "5309" },

{
  "label": "楚雄彝族自治州",
  "value": "5323" },

{
  "label": "红河哈尼族彝族自治州",
  "value": "5325" },

{
  "label": "文山壮族苗族自治州",
  "value": "5326" },

{
  "label": "西双版纳傣族自治州",
  "value": "5328" },

{
  "label": "大理白族自治州",
  "value": "5329" },

{
  "label": "德宏傣族景颇族自治州",
  "value": "5331" },

{
  "label": "怒江傈僳族自治州",
  "value": "5333" },

{
  "label": "迪庆藏族自治州",
  "value": "5334" }],


[{
  "label": "拉萨市",
  "value": "5401" },

{
  "label": "日喀则市",
  "value": "5402" },

{
  "label": "昌都市",
  "value": "5403" },

{
  "label": "林芝市",
  "value": "5404" },

{
  "label": "山南市",
  "value": "5405" },

{
  "label": "那曲地区",
  "value": "5424" },

{
  "label": "阿里地区",
  "value": "5425" }],


[{
  "label": "西安市",
  "value": "6101" },

{
  "label": "铜川市",
  "value": "6102" },

{
  "label": "宝鸡市",
  "value": "6103" },

{
  "label": "咸阳市",
  "value": "6104" },

{
  "label": "渭南市",
  "value": "6105" },

{
  "label": "延安市",
  "value": "6106" },

{
  "label": "汉中市",
  "value": "6107" },

{
  "label": "榆林市",
  "value": "6108" },

{
  "label": "安康市",
  "value": "6109" },

{
  "label": "商洛市",
  "value": "6110" }],


[{
  "label": "兰州市",
  "value": "6201" },

{
  "label": "嘉峪关市",
  "value": "6202" },

{
  "label": "金昌市",
  "value": "6203" },

{
  "label": "白银市",
  "value": "6204" },

{
  "label": "天水市",
  "value": "6205" },

{
  "label": "武威市",
  "value": "6206" },

{
  "label": "张掖市",
  "value": "6207" },

{
  "label": "平凉市",
  "value": "6208" },

{
  "label": "酒泉市",
  "value": "6209" },

{
  "label": "庆阳市",
  "value": "6210" },

{
  "label": "定西市",
  "value": "6211" },

{
  "label": "陇南市",
  "value": "6212" },

{
  "label": "临夏回族自治州",
  "value": "6229" },

{
  "label": "甘南藏族自治州",
  "value": "6230" }],


[{
  "label": "西宁市",
  "value": "6301" },

{
  "label": "海东市",
  "value": "6302" },

{
  "label": "海北藏族自治州",
  "value": "6322" },

{
  "label": "黄南藏族自治州",
  "value": "6323" },

{
  "label": "海南藏族自治州",
  "value": "6325" },

{
  "label": "果洛藏族自治州",
  "value": "6326" },

{
  "label": "玉树藏族自治州",
  "value": "6327" },

{
  "label": "海西蒙古族藏族自治州",
  "value": "6328" }],


[{
  "label": "银川市",
  "value": "6401" },

{
  "label": "石嘴山市",
  "value": "6402" },

{
  "label": "吴忠市",
  "value": "6403" },

{
  "label": "固原市",
  "value": "6404" },

{
  "label": "中卫市",
  "value": "6405" }],


[{
  "label": "乌鲁木齐市",
  "value": "6501" },

{
  "label": "克拉玛依市",
  "value": "6502" },

{
  "label": "吐鲁番市",
  "value": "6504" },

{
  "label": "哈密市",
  "value": "6505" },

{
  "label": "昌吉回族自治州",
  "value": "6523" },

{
  "label": "博尔塔拉蒙古自治州",
  "value": "6527" },

{
  "label": "巴音郭楞蒙古自治州",
  "value": "6528" },

{
  "label": "阿克苏地区",
  "value": "6529" },

{
  "label": "克孜勒苏柯尔克孜自治州",
  "value": "6530" },

{
  "label": "喀什地区",
  "value": "6531" },

{
  "label": "和田地区",
  "value": "6532" },

{
  "label": "伊犁哈萨克自治州",
  "value": "6540" },

{
  "label": "塔城地区",
  "value": "6542" },

{
  "label": "阿勒泰地区",
  "value": "6543" },

{
  "label": "自治区直辖县级行政区划",
  "value": "6590" }],


[{
  "label": "台北",
  "value": "6601" },

{
  "label": "高雄",
  "value": "6602" },

{
  "label": "基隆",
  "value": "6603" },

{
  "label": "台中",
  "value": "6604" },

{
  "label": "台南",
  "value": "6605" },

{
  "label": "新竹",
  "value": "6606" },

{
  "label": "嘉义",
  "value": "6607" },

{
  "label": "宜兰",
  "value": "6608" },

{
  "label": "桃园",
  "value": "6609" },

{
  "label": "苗栗",
  "value": "6610" },

{
  "label": "彰化",
  "value": "6611" },

{
  "label": "南投",
  "value": "6612" },

{
  "label": "云林",
  "value": "6613" },

{
  "label": "屏东",
  "value": "6614" },

{
  "label": "台东",
  "value": "6615" },

{
  "label": "花莲",
  "value": "6616" },

{
  "label": "澎湖",
  "value": "6617" }],


[{
  "label": "香港岛",
  "value": "6701" },

{
  "label": "九龙",
  "value": "6702" },

{
  "label": "新界",
  "value": "6703" }],


[{
  "label": "澳门半岛",
  "value": "6801" },

{
  "label": "氹仔岛",
  "value": "6802" },

{
  "label": "路环岛",
  "value": "6803" },

{
  "label": "路氹城",
  "value": "6804" }]];var _default =



cityData;exports.default = _default;

/***/ }),

/***/ 321:
/*!***********************************************************************!*\
  !*** D:/桌面/神农百草堂/神农百草堂/components/mpvue-citypicker/city-data/area.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var areaData = [
[
[{
  "label": "东城区",
  "value": "110101" },

{
  "label": "西城区",
  "value": "110102" },

{
  "label": "朝阳区",
  "value": "110105" },

{
  "label": "丰台区",
  "value": "110106" },

{
  "label": "石景山区",
  "value": "110107" },

{
  "label": "海淀区",
  "value": "110108" },

{
  "label": "门头沟区",
  "value": "110109" },

{
  "label": "房山区",
  "value": "110111" },

{
  "label": "通州区",
  "value": "110112" },

{
  "label": "顺义区",
  "value": "110113" },

{
  "label": "昌平区",
  "value": "110114" },

{
  "label": "大兴区",
  "value": "110115" },

{
  "label": "怀柔区",
  "value": "110116" },

{
  "label": "平谷区",
  "value": "110117" },

{
  "label": "密云区",
  "value": "110118" },

{
  "label": "延庆区",
  "value": "110119" }]],



[
[{
  "label": "和平区",
  "value": "120101" },

{
  "label": "河东区",
  "value": "120102" },

{
  "label": "河西区",
  "value": "120103" },

{
  "label": "南开区",
  "value": "120104" },

{
  "label": "河北区",
  "value": "120105" },

{
  "label": "红桥区",
  "value": "120106" },

{
  "label": "东丽区",
  "value": "120110" },

{
  "label": "西青区",
  "value": "120111" },

{
  "label": "津南区",
  "value": "120112" },

{
  "label": "北辰区",
  "value": "120113" },

{
  "label": "武清区",
  "value": "120114" },

{
  "label": "宝坻区",
  "value": "120115" },

{
  "label": "滨海新区",
  "value": "120116" },

{
  "label": "宁河区",
  "value": "120117" },

{
  "label": "静海区",
  "value": "120118" },

{
  "label": "蓟州区",
  "value": "120119" }]],



[
[{
  "label": "长安区",
  "value": "130102" },

{
  "label": "桥西区",
  "value": "130104" },

{
  "label": "新华区",
  "value": "130105" },

{
  "label": "井陉矿区",
  "value": "130107" },

{
  "label": "裕华区",
  "value": "130108" },

{
  "label": "藁城区",
  "value": "130109" },

{
  "label": "鹿泉区",
  "value": "130110" },

{
  "label": "栾城区",
  "value": "130111" },

{
  "label": "井陉县",
  "value": "130121" },

{
  "label": "正定县",
  "value": "130123" },

{
  "label": "行唐县",
  "value": "130125" },

{
  "label": "灵寿县",
  "value": "130126" },

{
  "label": "高邑县",
  "value": "130127" },

{
  "label": "深泽县",
  "value": "130128" },

{
  "label": "赞皇县",
  "value": "130129" },

{
  "label": "无极县",
  "value": "130130" },

{
  "label": "平山县",
  "value": "130131" },

{
  "label": "元氏县",
  "value": "130132" },

{
  "label": "赵县",
  "value": "130133" },

{
  "label": "石家庄高新技术产业开发区",
  "value": "130171" },

{
  "label": "石家庄循环化工园区",
  "value": "130172" },

{
  "label": "辛集市",
  "value": "130181" },

{
  "label": "晋州市",
  "value": "130183" },

{
  "label": "新乐市",
  "value": "130184" }],


[{
  "label": "路南区",
  "value": "130202" },

{
  "label": "路北区",
  "value": "130203" },

{
  "label": "古冶区",
  "value": "130204" },

{
  "label": "开平区",
  "value": "130205" },

{
  "label": "丰南区",
  "value": "130207" },

{
  "label": "丰润区",
  "value": "130208" },

{
  "label": "曹妃甸区",
  "value": "130209" },

{
  "label": "滦县",
  "value": "130223" },

{
  "label": "滦南县",
  "value": "130224" },

{
  "label": "乐亭县",
  "value": "130225" },

{
  "label": "迁西县",
  "value": "130227" },

{
  "label": "玉田县",
  "value": "130229" },

{
  "label": "唐山市芦台经济技术开发区",
  "value": "130271" },

{
  "label": "唐山市汉沽管理区",
  "value": "130272" },

{
  "label": "唐山高新技术产业开发区",
  "value": "130273" },

{
  "label": "河北唐山海港经济开发区",
  "value": "130274" },

{
  "label": "遵化市",
  "value": "130281" },

{
  "label": "迁安市",
  "value": "130283" }],


[{
  "label": "海港区",
  "value": "130302" },

{
  "label": "山海关区",
  "value": "130303" },

{
  "label": "北戴河区",
  "value": "130304" },

{
  "label": "抚宁区",
  "value": "130306" },

{
  "label": "青龙满族自治县",
  "value": "130321" },

{
  "label": "昌黎县",
  "value": "130322" },

{
  "label": "卢龙县",
  "value": "130324" },

{
  "label": "秦皇岛市经济技术开发区",
  "value": "130371" },

{
  "label": "北戴河新区",
  "value": "130372" }],


[{
  "label": "邯山区",
  "value": "130402" },

{
  "label": "丛台区",
  "value": "130403" },

{
  "label": "复兴区",
  "value": "130404" },

{
  "label": "峰峰矿区",
  "value": "130406" },

{
  "label": "肥乡区",
  "value": "130407" },

{
  "label": "永年区",
  "value": "130408" },

{
  "label": "临漳县",
  "value": "130423" },

{
  "label": "成安县",
  "value": "130424" },

{
  "label": "大名县",
  "value": "130425" },

{
  "label": "涉县",
  "value": "130426" },

{
  "label": "磁县",
  "value": "130427" },

{
  "label": "邱县",
  "value": "130430" },

{
  "label": "鸡泽县",
  "value": "130431" },

{
  "label": "广平县",
  "value": "130432" },

{
  "label": "馆陶县",
  "value": "130433" },

{
  "label": "魏县",
  "value": "130434" },

{
  "label": "曲周县",
  "value": "130435" },

{
  "label": "邯郸经济技术开发区",
  "value": "130471" },

{
  "label": "邯郸冀南新区",
  "value": "130473" },

{
  "label": "武安市",
  "value": "130481" }],


[{
  "label": "桥东区",
  "value": "130502" },

{
  "label": "桥西区",
  "value": "130503" },

{
  "label": "邢台县",
  "value": "130521" },

{
  "label": "临城县",
  "value": "130522" },

{
  "label": "内丘县",
  "value": "130523" },

{
  "label": "柏乡县",
  "value": "130524" },

{
  "label": "隆尧县",
  "value": "130525" },

{
  "label": "任县",
  "value": "130526" },

{
  "label": "南和县",
  "value": "130527" },

{
  "label": "宁晋县",
  "value": "130528" },

{
  "label": "巨鹿县",
  "value": "130529" },

{
  "label": "新河县",
  "value": "130530" },

{
  "label": "广宗县",
  "value": "130531" },

{
  "label": "平乡县",
  "value": "130532" },

{
  "label": "威县",
  "value": "130533" },

{
  "label": "清河县",
  "value": "130534" },

{
  "label": "临西县",
  "value": "130535" },

{
  "label": "河北邢台经济开发区",
  "value": "130571" },

{
  "label": "南宫市",
  "value": "130581" },

{
  "label": "沙河市",
  "value": "130582" }],


[{
  "label": "竞秀区",
  "value": "130602" },

{
  "label": "莲池区",
  "value": "130606" },

{
  "label": "满城区",
  "value": "130607" },

{
  "label": "清苑区",
  "value": "130608" },

{
  "label": "徐水区",
  "value": "130609" },

{
  "label": "涞水县",
  "value": "130623" },

{
  "label": "阜平县",
  "value": "130624" },

{
  "label": "定兴县",
  "value": "130626" },

{
  "label": "唐县",
  "value": "130627" },

{
  "label": "高阳县",
  "value": "130628" },

{
  "label": "容城县",
  "value": "130629" },

{
  "label": "涞源县",
  "value": "130630" },

{
  "label": "望都县",
  "value": "130631" },

{
  "label": "安新县",
  "value": "130632" },

{
  "label": "易县",
  "value": "130633" },

{
  "label": "曲阳县",
  "value": "130634" },

{
  "label": "蠡县",
  "value": "130635" },

{
  "label": "顺平县",
  "value": "130636" },

{
  "label": "博野县",
  "value": "130637" },

{
  "label": "雄县",
  "value": "130638" },

{
  "label": "保定高新技术产业开发区",
  "value": "130671" },

{
  "label": "保定白沟新城",
  "value": "130672" },

{
  "label": "涿州市",
  "value": "130681" },

{
  "label": "定州市",
  "value": "130682" },

{
  "label": "安国市",
  "value": "130683" },

{
  "label": "高碑店市",
  "value": "130684" }],


[{
  "label": "桥东区",
  "value": "130702" },

{
  "label": "桥西区",
  "value": "130703" },

{
  "label": "宣化区",
  "value": "130705" },

{
  "label": "下花园区",
  "value": "130706" },

{
  "label": "万全区",
  "value": "130708" },

{
  "label": "崇礼区",
  "value": "130709" },

{
  "label": "张北县",
  "value": "130722" },

{
  "label": "康保县",
  "value": "130723" },

{
  "label": "沽源县",
  "value": "130724" },

{
  "label": "尚义县",
  "value": "130725" },

{
  "label": "蔚县",
  "value": "130726" },

{
  "label": "阳原县",
  "value": "130727" },

{
  "label": "怀安县",
  "value": "130728" },

{
  "label": "怀来县",
  "value": "130730" },

{
  "label": "涿鹿县",
  "value": "130731" },

{
  "label": "赤城县",
  "value": "130732" },

{
  "label": "张家口市高新技术产业开发区",
  "value": "130771" },

{
  "label": "张家口市察北管理区",
  "value": "130772" },

{
  "label": "张家口市塞北管理区",
  "value": "130773" }],


[{
  "label": "双桥区",
  "value": "130802" },

{
  "label": "双滦区",
  "value": "130803" },

{
  "label": "鹰手营子矿区",
  "value": "130804" },

{
  "label": "承德县",
  "value": "130821" },

{
  "label": "兴隆县",
  "value": "130822" },

{
  "label": "滦平县",
  "value": "130824" },

{
  "label": "隆化县",
  "value": "130825" },

{
  "label": "丰宁满族自治县",
  "value": "130826" },

{
  "label": "宽城满族自治县",
  "value": "130827" },

{
  "label": "围场满族蒙古族自治县",
  "value": "130828" },

{
  "label": "承德高新技术产业开发区",
  "value": "130871" },

{
  "label": "平泉市",
  "value": "130881" }],


[{
  "label": "新华区",
  "value": "130902" },

{
  "label": "运河区",
  "value": "130903" },

{
  "label": "沧县",
  "value": "130921" },

{
  "label": "青县",
  "value": "130922" },

{
  "label": "东光县",
  "value": "130923" },

{
  "label": "海兴县",
  "value": "130924" },

{
  "label": "盐山县",
  "value": "130925" },

{
  "label": "肃宁县",
  "value": "130926" },

{
  "label": "南皮县",
  "value": "130927" },

{
  "label": "吴桥县",
  "value": "130928" },

{
  "label": "献县",
  "value": "130929" },

{
  "label": "孟村回族自治县",
  "value": "130930" },

{
  "label": "河北沧州经济开发区",
  "value": "130971" },

{
  "label": "沧州高新技术产业开发区",
  "value": "130972" },

{
  "label": "沧州渤海新区",
  "value": "130973" },

{
  "label": "泊头市",
  "value": "130981" },

{
  "label": "任丘市",
  "value": "130982" },

{
  "label": "黄骅市",
  "value": "130983" },

{
  "label": "河间市",
  "value": "130984" }],


[{
  "label": "安次区",
  "value": "131002" },

{
  "label": "广阳区",
  "value": "131003" },

{
  "label": "固安县",
  "value": "131022" },

{
  "label": "永清县",
  "value": "131023" },

{
  "label": "香河县",
  "value": "131024" },

{
  "label": "大城县",
  "value": "131025" },

{
  "label": "文安县",
  "value": "131026" },

{
  "label": "大厂回族自治县",
  "value": "131028" },

{
  "label": "廊坊经济技术开发区",
  "value": "131071" },

{
  "label": "霸州市",
  "value": "131081" },

{
  "label": "三河市",
  "value": "131082" }],


[{
  "label": "桃城区",
  "value": "131102" },

{
  "label": "冀州区",
  "value": "131103" },

{
  "label": "枣强县",
  "value": "131121" },

{
  "label": "武邑县",
  "value": "131122" },

{
  "label": "武强县",
  "value": "131123" },

{
  "label": "饶阳县",
  "value": "131124" },

{
  "label": "安平县",
  "value": "131125" },

{
  "label": "故城县",
  "value": "131126" },

{
  "label": "景县",
  "value": "131127" },

{
  "label": "阜城县",
  "value": "131128" },

{
  "label": "河北衡水经济开发区",
  "value": "131171" },

{
  "label": "衡水滨湖新区",
  "value": "131172" },

{
  "label": "深州市",
  "value": "131182" }]],



[
[{
  "label": "小店区",
  "value": "140105" },

{
  "label": "迎泽区",
  "value": "140106" },

{
  "label": "杏花岭区",
  "value": "140107" },

{
  "label": "尖草坪区",
  "value": "140108" },

{
  "label": "万柏林区",
  "value": "140109" },

{
  "label": "晋源区",
  "value": "140110" },

{
  "label": "清徐县",
  "value": "140121" },

{
  "label": "阳曲县",
  "value": "140122" },

{
  "label": "娄烦县",
  "value": "140123" },

{
  "label": "山西转型综合改革示范区",
  "value": "140171" },

{
  "label": "古交市",
  "value": "140181" }],


[{
  "label": "城区",
  "value": "140202" },

{
  "label": "矿区",
  "value": "140203" },

{
  "label": "南郊区",
  "value": "140211" },

{
  "label": "新荣区",
  "value": "140212" },

{
  "label": "阳高县",
  "value": "140221" },

{
  "label": "天镇县",
  "value": "140222" },

{
  "label": "广灵县",
  "value": "140223" },

{
  "label": "灵丘县",
  "value": "140224" },

{
  "label": "浑源县",
  "value": "140225" },

{
  "label": "左云县",
  "value": "140226" },

{
  "label": "大同县",
  "value": "140227" },

{
  "label": "山西大同经济开发区",
  "value": "140271" }],


[{
  "label": "城区",
  "value": "140302" },

{
  "label": "矿区",
  "value": "140303" },

{
  "label": "郊区",
  "value": "140311" },

{
  "label": "平定县",
  "value": "140321" },

{
  "label": "盂县",
  "value": "140322" },

{
  "label": "山西阳泉经济开发区",
  "value": "140371" }],


[{
  "label": "城区",
  "value": "140402" },

{
  "label": "郊区",
  "value": "140411" },

{
  "label": "长治县",
  "value": "140421" },

{
  "label": "襄垣县",
  "value": "140423" },

{
  "label": "屯留县",
  "value": "140424" },

{
  "label": "平顺县",
  "value": "140425" },

{
  "label": "黎城县",
  "value": "140426" },

{
  "label": "壶关县",
  "value": "140427" },

{
  "label": "长子县",
  "value": "140428" },

{
  "label": "武乡县",
  "value": "140429" },

{
  "label": "沁县",
  "value": "140430" },

{
  "label": "沁源县",
  "value": "140431" },

{
  "label": "山西长治高新技术产业园区",
  "value": "140471" },

{
  "label": "潞城市",
  "value": "140481" }],


[{
  "label": "城区",
  "value": "140502" },

{
  "label": "沁水县",
  "value": "140521" },

{
  "label": "阳城县",
  "value": "140522" },

{
  "label": "陵川县",
  "value": "140524" },

{
  "label": "泽州县",
  "value": "140525" },

{
  "label": "高平市",
  "value": "140581" }],


[{
  "label": "朔城区",
  "value": "140602" },

{
  "label": "平鲁区",
  "value": "140603" },

{
  "label": "山阴县",
  "value": "140621" },

{
  "label": "应县",
  "value": "140622" },

{
  "label": "右玉县",
  "value": "140623" },

{
  "label": "怀仁县",
  "value": "140624" },

{
  "label": "山西朔州经济开发区",
  "value": "140671" }],


[{
  "label": "榆次区",
  "value": "140702" },

{
  "label": "榆社县",
  "value": "140721" },

{
  "label": "左权县",
  "value": "140722" },

{
  "label": "和顺县",
  "value": "140723" },

{
  "label": "昔阳县",
  "value": "140724" },

{
  "label": "寿阳县",
  "value": "140725" },

{
  "label": "太谷县",
  "value": "140726" },

{
  "label": "祁县",
  "value": "140727" },

{
  "label": "平遥县",
  "value": "140728" },

{
  "label": "灵石县",
  "value": "140729" },

{
  "label": "介休市",
  "value": "140781" }],


[{
  "label": "盐湖区",
  "value": "140802" },

{
  "label": "临猗县",
  "value": "140821" },

{
  "label": "万荣县",
  "value": "140822" },

{
  "label": "闻喜县",
  "value": "140823" },

{
  "label": "稷山县",
  "value": "140824" },

{
  "label": "新绛县",
  "value": "140825" },

{
  "label": "绛县",
  "value": "140826" },

{
  "label": "垣曲县",
  "value": "140827" },

{
  "label": "夏县",
  "value": "140828" },

{
  "label": "平陆县",
  "value": "140829" },

{
  "label": "芮城县",
  "value": "140830" },

{
  "label": "永济市",
  "value": "140881" },

{
  "label": "河津市",
  "value": "140882" }],


[{
  "label": "忻府区",
  "value": "140902" },

{
  "label": "定襄县",
  "value": "140921" },

{
  "label": "五台县",
  "value": "140922" },

{
  "label": "代县",
  "value": "140923" },

{
  "label": "繁峙县",
  "value": "140924" },

{
  "label": "宁武县",
  "value": "140925" },

{
  "label": "静乐县",
  "value": "140926" },

{
  "label": "神池县",
  "value": "140927" },

{
  "label": "五寨县",
  "value": "140928" },

{
  "label": "岢岚县",
  "value": "140929" },

{
  "label": "河曲县",
  "value": "140930" },

{
  "label": "保德县",
  "value": "140931" },

{
  "label": "偏关县",
  "value": "140932" },

{
  "label": "五台山风景名胜区",
  "value": "140971" },

{
  "label": "原平市",
  "value": "140981" }],


[{
  "label": "尧都区",
  "value": "141002" },

{
  "label": "曲沃县",
  "value": "141021" },

{
  "label": "翼城县",
  "value": "141022" },

{
  "label": "襄汾县",
  "value": "141023" },

{
  "label": "洪洞县",
  "value": "141024" },

{
  "label": "古县",
  "value": "141025" },

{
  "label": "安泽县",
  "value": "141026" },

{
  "label": "浮山县",
  "value": "141027" },

{
  "label": "吉县",
  "value": "141028" },

{
  "label": "乡宁县",
  "value": "141029" },

{
  "label": "大宁县",
  "value": "141030" },

{
  "label": "隰县",
  "value": "141031" },

{
  "label": "永和县",
  "value": "141032" },

{
  "label": "蒲县",
  "value": "141033" },

{
  "label": "汾西县",
  "value": "141034" },

{
  "label": "侯马市",
  "value": "141081" },

{
  "label": "霍州市",
  "value": "141082" }],


[{
  "label": "离石区",
  "value": "141102" },

{
  "label": "文水县",
  "value": "141121" },

{
  "label": "交城县",
  "value": "141122" },

{
  "label": "兴县",
  "value": "141123" },

{
  "label": "临县",
  "value": "141124" },

{
  "label": "柳林县",
  "value": "141125" },

{
  "label": "石楼县",
  "value": "141126" },

{
  "label": "岚县",
  "value": "141127" },

{
  "label": "方山县",
  "value": "141128" },

{
  "label": "中阳县",
  "value": "141129" },

{
  "label": "交口县",
  "value": "141130" },

{
  "label": "孝义市",
  "value": "141181" },

{
  "label": "汾阳市",
  "value": "141182" }]],



[
[{
  "label": "新城区",
  "value": "150102" },

{
  "label": "回民区",
  "value": "150103" },

{
  "label": "玉泉区",
  "value": "150104" },

{
  "label": "赛罕区",
  "value": "150105" },

{
  "label": "土默特左旗",
  "value": "150121" },

{
  "label": "托克托县",
  "value": "150122" },

{
  "label": "和林格尔县",
  "value": "150123" },

{
  "label": "清水河县",
  "value": "150124" },

{
  "label": "武川县",
  "value": "150125" },

{
  "label": "呼和浩特金海工业园区",
  "value": "150171" },

{
  "label": "呼和浩特经济技术开发区",
  "value": "150172" }],


[{
  "label": "东河区",
  "value": "150202" },

{
  "label": "昆都仑区",
  "value": "150203" },

{
  "label": "青山区",
  "value": "150204" },

{
  "label": "石拐区",
  "value": "150205" },

{
  "label": "白云鄂博矿区",
  "value": "150206" },

{
  "label": "九原区",
  "value": "150207" },

{
  "label": "土默特右旗",
  "value": "150221" },

{
  "label": "固阳县",
  "value": "150222" },

{
  "label": "达尔罕茂明安联合旗",
  "value": "150223" },

{
  "label": "包头稀土高新技术产业开发区",
  "value": "150271" }],


[{
  "label": "海勃湾区",
  "value": "150302" },

{
  "label": "海南区",
  "value": "150303" },

{
  "label": "乌达区",
  "value": "150304" }],


[{
  "label": "红山区",
  "value": "150402" },

{
  "label": "元宝山区",
  "value": "150403" },

{
  "label": "松山区",
  "value": "150404" },

{
  "label": "阿鲁科尔沁旗",
  "value": "150421" },

{
  "label": "巴林左旗",
  "value": "150422" },

{
  "label": "巴林右旗",
  "value": "150423" },

{
  "label": "林西县",
  "value": "150424" },

{
  "label": "克什克腾旗",
  "value": "150425" },

{
  "label": "翁牛特旗",
  "value": "150426" },

{
  "label": "喀喇沁旗",
  "value": "150428" },

{
  "label": "宁城县",
  "value": "150429" },

{
  "label": "敖汉旗",
  "value": "150430" }],


[{
  "label": "科尔沁区",
  "value": "150502" },

{
  "label": "科尔沁左翼中旗",
  "value": "150521" },

{
  "label": "科尔沁左翼后旗",
  "value": "150522" },

{
  "label": "开鲁县",
  "value": "150523" },

{
  "label": "库伦旗",
  "value": "150524" },

{
  "label": "奈曼旗",
  "value": "150525" },

{
  "label": "扎鲁特旗",
  "value": "150526" },

{
  "label": "通辽经济技术开发区",
  "value": "150571" },

{
  "label": "霍林郭勒市",
  "value": "150581" }],


[{
  "label": "东胜区",
  "value": "150602" },

{
  "label": "康巴什区",
  "value": "150603" },

{
  "label": "达拉特旗",
  "value": "150621" },

{
  "label": "准格尔旗",
  "value": "150622" },

{
  "label": "鄂托克前旗",
  "value": "150623" },

{
  "label": "鄂托克旗",
  "value": "150624" },

{
  "label": "杭锦旗",
  "value": "150625" },

{
  "label": "乌审旗",
  "value": "150626" },

{
  "label": "伊金霍洛旗",
  "value": "150627" }],


[{
  "label": "海拉尔区",
  "value": "150702" },

{
  "label": "扎赉诺尔区",
  "value": "150703" },

{
  "label": "阿荣旗",
  "value": "150721" },

{
  "label": "莫力达瓦达斡尔族自治旗",
  "value": "150722" },

{
  "label": "鄂伦春自治旗",
  "value": "150723" },

{
  "label": "鄂温克族自治旗",
  "value": "150724" },

{
  "label": "陈巴尔虎旗",
  "value": "150725" },

{
  "label": "新巴尔虎左旗",
  "value": "150726" },

{
  "label": "新巴尔虎右旗",
  "value": "150727" },

{
  "label": "满洲里市",
  "value": "150781" },

{
  "label": "牙克石市",
  "value": "150782" },

{
  "label": "扎兰屯市",
  "value": "150783" },

{
  "label": "额尔古纳市",
  "value": "150784" },

{
  "label": "根河市",
  "value": "150785" }],


[{
  "label": "临河区",
  "value": "150802" },

{
  "label": "五原县",
  "value": "150821" },

{
  "label": "磴口县",
  "value": "150822" },

{
  "label": "乌拉特前旗",
  "value": "150823" },

{
  "label": "乌拉特中旗",
  "value": "150824" },

{
  "label": "乌拉特后旗",
  "value": "150825" },

{
  "label": "杭锦后旗",
  "value": "150826" }],


[{
  "label": "集宁区",
  "value": "150902" },

{
  "label": "卓资县",
  "value": "150921" },

{
  "label": "化德县",
  "value": "150922" },

{
  "label": "商都县",
  "value": "150923" },

{
  "label": "兴和县",
  "value": "150924" },

{
  "label": "凉城县",
  "value": "150925" },

{
  "label": "察哈尔右翼前旗",
  "value": "150926" },

{
  "label": "察哈尔右翼中旗",
  "value": "150927" },

{
  "label": "察哈尔右翼后旗",
  "value": "150928" },

{
  "label": "四子王旗",
  "value": "150929" },

{
  "label": "丰镇市",
  "value": "150981" }],


[{
  "label": "乌兰浩特市",
  "value": "152201" },

{
  "label": "阿尔山市",
  "value": "152202" },

{
  "label": "科尔沁右翼前旗",
  "value": "152221" },

{
  "label": "科尔沁右翼中旗",
  "value": "152222" },

{
  "label": "扎赉特旗",
  "value": "152223" },

{
  "label": "突泉县",
  "value": "152224" }],


[{
  "label": "二连浩特市",
  "value": "152501" },

{
  "label": "锡林浩特市",
  "value": "152502" },

{
  "label": "阿巴嘎旗",
  "value": "152522" },

{
  "label": "苏尼特左旗",
  "value": "152523" },

{
  "label": "苏尼特右旗",
  "value": "152524" },

{
  "label": "东乌珠穆沁旗",
  "value": "152525" },

{
  "label": "西乌珠穆沁旗",
  "value": "152526" },

{
  "label": "太仆寺旗",
  "value": "152527" },

{
  "label": "镶黄旗",
  "value": "152528" },

{
  "label": "正镶白旗",
  "value": "152529" },

{
  "label": "正蓝旗",
  "value": "152530" },

{
  "label": "多伦县",
  "value": "152531" },

{
  "label": "乌拉盖管委会",
  "value": "152571" }],


[{
  "label": "阿拉善左旗",
  "value": "152921" },

{
  "label": "阿拉善右旗",
  "value": "152922" },

{
  "label": "额济纳旗",
  "value": "152923" },

{
  "label": "内蒙古阿拉善经济开发区",
  "value": "152971" }]],



[
[{
  "label": "和平区",
  "value": "210102" },

{
  "label": "沈河区",
  "value": "210103" },

{
  "label": "大东区",
  "value": "210104" },

{
  "label": "皇姑区",
  "value": "210105" },

{
  "label": "铁西区",
  "value": "210106" },

{
  "label": "苏家屯区",
  "value": "210111" },

{
  "label": "浑南区",
  "value": "210112" },

{
  "label": "沈北新区",
  "value": "210113" },

{
  "label": "于洪区",
  "value": "210114" },

{
  "label": "辽中区",
  "value": "210115" },

{
  "label": "康平县",
  "value": "210123" },

{
  "label": "法库县",
  "value": "210124" },

{
  "label": "新民市",
  "value": "210181" }],


[{
  "label": "中山区",
  "value": "210202" },

{
  "label": "西岗区",
  "value": "210203" },

{
  "label": "沙河口区",
  "value": "210204" },

{
  "label": "甘井子区",
  "value": "210211" },

{
  "label": "旅顺口区",
  "value": "210212" },

{
  "label": "金州区",
  "value": "210213" },

{
  "label": "普兰店区",
  "value": "210214" },

{
  "label": "长海县",
  "value": "210224" },

{
  "label": "瓦房店市",
  "value": "210281" },

{
  "label": "庄河市",
  "value": "210283" }],


[{
  "label": "铁东区",
  "value": "210302" },

{
  "label": "铁西区",
  "value": "210303" },

{
  "label": "立山区",
  "value": "210304" },

{
  "label": "千山区",
  "value": "210311" },

{
  "label": "台安县",
  "value": "210321" },

{
  "label": "岫岩满族自治县",
  "value": "210323" },

{
  "label": "海城市",
  "value": "210381" }],


[{
  "label": "新抚区",
  "value": "210402" },

{
  "label": "东洲区",
  "value": "210403" },

{
  "label": "望花区",
  "value": "210404" },

{
  "label": "顺城区",
  "value": "210411" },

{
  "label": "抚顺县",
  "value": "210421" },

{
  "label": "新宾满族自治县",
  "value": "210422" },

{
  "label": "清原满族自治县",
  "value": "210423" }],


[{
  "label": "平山区",
  "value": "210502" },

{
  "label": "溪湖区",
  "value": "210503" },

{
  "label": "明山区",
  "value": "210504" },

{
  "label": "南芬区",
  "value": "210505" },

{
  "label": "本溪满族自治县",
  "value": "210521" },

{
  "label": "桓仁满族自治县",
  "value": "210522" }],


[{
  "label": "元宝区",
  "value": "210602" },

{
  "label": "振兴区",
  "value": "210603" },

{
  "label": "振安区",
  "value": "210604" },

{
  "label": "宽甸满族自治县",
  "value": "210624" },

{
  "label": "东港市",
  "value": "210681" },

{
  "label": "凤城市",
  "value": "210682" }],


[{
  "label": "古塔区",
  "value": "210702" },

{
  "label": "凌河区",
  "value": "210703" },

{
  "label": "太和区",
  "value": "210711" },

{
  "label": "黑山县",
  "value": "210726" },

{
  "label": "义县",
  "value": "210727" },

{
  "label": "凌海市",
  "value": "210781" },

{
  "label": "北镇市",
  "value": "210782" }],


[{
  "label": "站前区",
  "value": "210802" },

{
  "label": "西市区",
  "value": "210803" },

{
  "label": "鲅鱼圈区",
  "value": "210804" },

{
  "label": "老边区",
  "value": "210811" },

{
  "label": "盖州市",
  "value": "210881" },

{
  "label": "大石桥市",
  "value": "210882" }],


[{
  "label": "海州区",
  "value": "210902" },

{
  "label": "新邱区",
  "value": "210903" },

{
  "label": "太平区",
  "value": "210904" },

{
  "label": "清河门区",
  "value": "210905" },

{
  "label": "细河区",
  "value": "210911" },

{
  "label": "阜新蒙古族自治县",
  "value": "210921" },

{
  "label": "彰武县",
  "value": "210922" }],


[{
  "label": "白塔区",
  "value": "211002" },

{
  "label": "文圣区",
  "value": "211003" },

{
  "label": "宏伟区",
  "value": "211004" },

{
  "label": "弓长岭区",
  "value": "211005" },

{
  "label": "太子河区",
  "value": "211011" },

{
  "label": "辽阳县",
  "value": "211021" },

{
  "label": "灯塔市",
  "value": "211081" }],


[{
  "label": "双台子区",
  "value": "211102" },

{
  "label": "兴隆台区",
  "value": "211103" },

{
  "label": "大洼区",
  "value": "211104" },

{
  "label": "盘山县",
  "value": "211122" }],


[{
  "label": "银州区",
  "value": "211202" },

{
  "label": "清河区",
  "value": "211204" },

{
  "label": "铁岭县",
  "value": "211221" },

{
  "label": "西丰县",
  "value": "211223" },

{
  "label": "昌图县",
  "value": "211224" },

{
  "label": "调兵山市",
  "value": "211281" },

{
  "label": "开原市",
  "value": "211282" }],


[{
  "label": "双塔区",
  "value": "211302" },

{
  "label": "龙城区",
  "value": "211303" },

{
  "label": "朝阳县",
  "value": "211321" },

{
  "label": "建平县",
  "value": "211322" },

{
  "label": "喀喇沁左翼蒙古族自治县",
  "value": "211324" },

{
  "label": "北票市",
  "value": "211381" },

{
  "label": "凌源市",
  "value": "211382" }],


[{
  "label": "连山区",
  "value": "211402" },

{
  "label": "龙港区",
  "value": "211403" },

{
  "label": "南票区",
  "value": "211404" },

{
  "label": "绥中县",
  "value": "211421" },

{
  "label": "建昌县",
  "value": "211422" },

{
  "label": "兴城市",
  "value": "211481" }]],



[
[{
  "label": "南关区",
  "value": "220102" },

{
  "label": "宽城区",
  "value": "220103" },

{
  "label": "朝阳区",
  "value": "220104" },

{
  "label": "二道区",
  "value": "220105" },

{
  "label": "绿园区",
  "value": "220106" },

{
  "label": "双阳区",
  "value": "220112" },

{
  "label": "九台区",
  "value": "220113" },

{
  "label": "农安县",
  "value": "220122" },

{
  "label": "长春经济技术开发区",
  "value": "220171" },

{
  "label": "长春净月高新技术产业开发区",
  "value": "220172" },

{
  "label": "长春高新技术产业开发区",
  "value": "220173" },

{
  "label": "长春汽车经济技术开发区",
  "value": "220174" },

{
  "label": "榆树市",
  "value": "220182" },

{
  "label": "德惠市",
  "value": "220183" }],


[{
  "label": "昌邑区",
  "value": "220202" },

{
  "label": "龙潭区",
  "value": "220203" },

{
  "label": "船营区",
  "value": "220204" },

{
  "label": "丰满区",
  "value": "220211" },

{
  "label": "永吉县",
  "value": "220221" },

{
  "label": "吉林经济开发区",
  "value": "220271" },

{
  "label": "吉林高新技术产业开发区",
  "value": "220272" },

{
  "label": "吉林中国新加坡食品区",
  "value": "220273" },

{
  "label": "蛟河市",
  "value": "220281" },

{
  "label": "桦甸市",
  "value": "220282" },

{
  "label": "舒兰市",
  "value": "220283" },

{
  "label": "磐石市",
  "value": "220284" }],


[{
  "label": "铁西区",
  "value": "220302" },

{
  "label": "铁东区",
  "value": "220303" },

{
  "label": "梨树县",
  "value": "220322" },

{
  "label": "伊通满族自治县",
  "value": "220323" },

{
  "label": "公主岭市",
  "value": "220381" },

{
  "label": "双辽市",
  "value": "220382" }],


[{
  "label": "龙山区",
  "value": "220402" },

{
  "label": "西安区",
  "value": "220403" },

{
  "label": "东丰县",
  "value": "220421" },

{
  "label": "东辽县",
  "value": "220422" }],


[{
  "label": "东昌区",
  "value": "220502" },

{
  "label": "二道江区",
  "value": "220503" },

{
  "label": "通化县",
  "value": "220521" },

{
  "label": "辉南县",
  "value": "220523" },

{
  "label": "柳河县",
  "value": "220524" },

{
  "label": "梅河口市",
  "value": "220581" },

{
  "label": "集安市",
  "value": "220582" }],


[{
  "label": "浑江区",
  "value": "220602" },

{
  "label": "江源区",
  "value": "220605" },

{
  "label": "抚松县",
  "value": "220621" },

{
  "label": "靖宇县",
  "value": "220622" },

{
  "label": "长白朝鲜族自治县",
  "value": "220623" },

{
  "label": "临江市",
  "value": "220681" }],


[{
  "label": "宁江区",
  "value": "220702" },

{
  "label": "前郭尔罗斯蒙古族自治县",
  "value": "220721" },

{
  "label": "长岭县",
  "value": "220722" },

{
  "label": "乾安县",
  "value": "220723" },

{
  "label": "吉林松原经济开发区",
  "value": "220771" },

{
  "label": "扶余市",
  "value": "220781" }],


[{
  "label": "洮北区",
  "value": "220802" },

{
  "label": "镇赉县",
  "value": "220821" },

{
  "label": "通榆县",
  "value": "220822" },

{
  "label": "吉林白城经济开发区",
  "value": "220871" },

{
  "label": "洮南市",
  "value": "220881" },

{
  "label": "大安市",
  "value": "220882" }],


[{
  "label": "延吉市",
  "value": "222401" },

{
  "label": "图们市",
  "value": "222402" },

{
  "label": "敦化市",
  "value": "222403" },

{
  "label": "珲春市",
  "value": "222404" },

{
  "label": "龙井市",
  "value": "222405" },

{
  "label": "和龙市",
  "value": "222406" },

{
  "label": "汪清县",
  "value": "222424" },

{
  "label": "安图县",
  "value": "222426" }]],



[
[{
  "label": "道里区",
  "value": "230102" },

{
  "label": "南岗区",
  "value": "230103" },

{
  "label": "道外区",
  "value": "230104" },

{
  "label": "平房区",
  "value": "230108" },

{
  "label": "松北区",
  "value": "230109" },

{
  "label": "香坊区",
  "value": "230110" },

{
  "label": "呼兰区",
  "value": "230111" },

{
  "label": "阿城区",
  "value": "230112" },

{
  "label": "双城区",
  "value": "230113" },

{
  "label": "依兰县",
  "value": "230123" },

{
  "label": "方正县",
  "value": "230124" },

{
  "label": "宾县",
  "value": "230125" },

{
  "label": "巴彦县",
  "value": "230126" },

{
  "label": "木兰县",
  "value": "230127" },

{
  "label": "通河县",
  "value": "230128" },

{
  "label": "延寿县",
  "value": "230129" },

{
  "label": "尚志市",
  "value": "230183" },

{
  "label": "五常市",
  "value": "230184" }],


[{
  "label": "龙沙区",
  "value": "230202" },

{
  "label": "建华区",
  "value": "230203" },

{
  "label": "铁锋区",
  "value": "230204" },

{
  "label": "昂昂溪区",
  "value": "230205" },

{
  "label": "富拉尔基区",
  "value": "230206" },

{
  "label": "碾子山区",
  "value": "230207" },

{
  "label": "梅里斯达斡尔族区",
  "value": "230208" },

{
  "label": "龙江县",
  "value": "230221" },

{
  "label": "依安县",
  "value": "230223" },

{
  "label": "泰来县",
  "value": "230224" },

{
  "label": "甘南县",
  "value": "230225" },

{
  "label": "富裕县",
  "value": "230227" },

{
  "label": "克山县",
  "value": "230229" },

{
  "label": "克东县",
  "value": "230230" },

{
  "label": "拜泉县",
  "value": "230231" },

{
  "label": "讷河市",
  "value": "230281" }],


[{
  "label": "鸡冠区",
  "value": "230302" },

{
  "label": "恒山区",
  "value": "230303" },

{
  "label": "滴道区",
  "value": "230304" },

{
  "label": "梨树区",
  "value": "230305" },

{
  "label": "城子河区",
  "value": "230306" },

{
  "label": "麻山区",
  "value": "230307" },

{
  "label": "鸡东县",
  "value": "230321" },

{
  "label": "虎林市",
  "value": "230381" },

{
  "label": "密山市",
  "value": "230382" }],


[{
  "label": "向阳区",
  "value": "230402" },

{
  "label": "工农区",
  "value": "230403" },

{
  "label": "南山区",
  "value": "230404" },

{
  "label": "兴安区",
  "value": "230405" },

{
  "label": "东山区",
  "value": "230406" },

{
  "label": "兴山区",
  "value": "230407" },

{
  "label": "萝北县",
  "value": "230421" },

{
  "label": "绥滨县",
  "value": "230422" }],


[{
  "label": "尖山区",
  "value": "230502" },

{
  "label": "岭东区",
  "value": "230503" },

{
  "label": "四方台区",
  "value": "230505" },

{
  "label": "宝山区",
  "value": "230506" },

{
  "label": "集贤县",
  "value": "230521" },

{
  "label": "友谊县",
  "value": "230522" },

{
  "label": "宝清县",
  "value": "230523" },

{
  "label": "饶河县",
  "value": "230524" }],


[{
  "label": "萨尔图区",
  "value": "230602" },

{
  "label": "龙凤区",
  "value": "230603" },

{
  "label": "让胡路区",
  "value": "230604" },

{
  "label": "红岗区",
  "value": "230605" },

{
  "label": "大同区",
  "value": "230606" },

{
  "label": "肇州县",
  "value": "230621" },

{
  "label": "肇源县",
  "value": "230622" },

{
  "label": "林甸县",
  "value": "230623" },

{
  "label": "杜尔伯特蒙古族自治县",
  "value": "230624" },

{
  "label": "大庆高新技术产业开发区",
  "value": "230671" }],


[{
  "label": "伊春区",
  "value": "230702" },

{
  "label": "南岔区",
  "value": "230703" },

{
  "label": "友好区",
  "value": "230704" },

{
  "label": "西林区",
  "value": "230705" },

{
  "label": "翠峦区",
  "value": "230706" },

{
  "label": "新青区",
  "value": "230707" },

{
  "label": "美溪区",
  "value": "230708" },

{
  "label": "金山屯区",
  "value": "230709" },

{
  "label": "五营区",
  "value": "230710" },

{
  "label": "乌马河区",
  "value": "230711" },

{
  "label": "汤旺河区",
  "value": "230712" },

{
  "label": "带岭区",
  "value": "230713" },

{
  "label": "乌伊岭区",
  "value": "230714" },

{
  "label": "红星区",
  "value": "230715" },

{
  "label": "上甘岭区",
  "value": "230716" },

{
  "label": "嘉荫县",
  "value": "230722" },

{
  "label": "铁力市",
  "value": "230781" }],


[{
  "label": "向阳区",
  "value": "230803" },

{
  "label": "前进区",
  "value": "230804" },

{
  "label": "东风区",
  "value": "230805" },

{
  "label": "郊区",
  "value": "230811" },

{
  "label": "桦南县",
  "value": "230822" },

{
  "label": "桦川县",
  "value": "230826" },

{
  "label": "汤原县",
  "value": "230828" },

{
  "label": "同江市",
  "value": "230881" },

{
  "label": "富锦市",
  "value": "230882" },

{
  "label": "抚远市",
  "value": "230883" }],


[{
  "label": "新兴区",
  "value": "230902" },

{
  "label": "桃山区",
  "value": "230903" },

{
  "label": "茄子河区",
  "value": "230904" },

{
  "label": "勃利县",
  "value": "230921" }],


[{
  "label": "东安区",
  "value": "231002" },

{
  "label": "阳明区",
  "value": "231003" },

{
  "label": "爱民区",
  "value": "231004" },

{
  "label": "西安区",
  "value": "231005" },

{
  "label": "林口县",
  "value": "231025" },

{
  "label": "牡丹江经济技术开发区",
  "value": "231071" },

{
  "label": "绥芬河市",
  "value": "231081" },

{
  "label": "海林市",
  "value": "231083" },

{
  "label": "宁安市",
  "value": "231084" },

{
  "label": "穆棱市",
  "value": "231085" },

{
  "label": "东宁市",
  "value": "231086" }],


[{
  "label": "爱辉区",
  "value": "231102" },

{
  "label": "嫩江县",
  "value": "231121" },

{
  "label": "逊克县",
  "value": "231123" },

{
  "label": "孙吴县",
  "value": "231124" },

{
  "label": "北安市",
  "value": "231181" },

{
  "label": "五大连池市",
  "value": "231182" }],


[{
  "label": "北林区",
  "value": "231202" },

{
  "label": "望奎县",
  "value": "231221" },

{
  "label": "兰西县",
  "value": "231222" },

{
  "label": "青冈县",
  "value": "231223" },

{
  "label": "庆安县",
  "value": "231224" },

{
  "label": "明水县",
  "value": "231225" },

{
  "label": "绥棱县",
  "value": "231226" },

{
  "label": "安达市",
  "value": "231281" },

{
  "label": "肇东市",
  "value": "231282" },

{
  "label": "海伦市",
  "value": "231283" }],


[{
  "label": "加格达奇区",
  "value": "232701" },

{
  "label": "松岭区",
  "value": "232702" },

{
  "label": "新林区",
  "value": "232703" },

{
  "label": "呼中区",
  "value": "232704" },

{
  "label": "呼玛县",
  "value": "232721" },

{
  "label": "塔河县",
  "value": "232722" },

{
  "label": "漠河县",
  "value": "232723" }]],



[
[{
  "label": "黄浦区",
  "value": "310101" },

{
  "label": "徐汇区",
  "value": "310104" },

{
  "label": "长宁区",
  "value": "310105" },

{
  "label": "静安区",
  "value": "310106" },

{
  "label": "普陀区",
  "value": "310107" },

{
  "label": "虹口区",
  "value": "310109" },

{
  "label": "杨浦区",
  "value": "310110" },

{
  "label": "闵行区",
  "value": "310112" },

{
  "label": "宝山区",
  "value": "310113" },

{
  "label": "嘉定区",
  "value": "310114" },

{
  "label": "浦东新区",
  "value": "310115" },

{
  "label": "金山区",
  "value": "310116" },

{
  "label": "松江区",
  "value": "310117" },

{
  "label": "青浦区",
  "value": "310118" },

{
  "label": "奉贤区",
  "value": "310120" },

{
  "label": "崇明区",
  "value": "310151" }]],



[
[{
  "label": "玄武区",
  "value": "320102" },

{
  "label": "秦淮区",
  "value": "320104" },

{
  "label": "建邺区",
  "value": "320105" },

{
  "label": "鼓楼区",
  "value": "320106" },

{
  "label": "浦口区",
  "value": "320111" },

{
  "label": "栖霞区",
  "value": "320113" },

{
  "label": "雨花台区",
  "value": "320114" },

{
  "label": "江宁区",
  "value": "320115" },

{
  "label": "六合区",
  "value": "320116" },

{
  "label": "溧水区",
  "value": "320117" },

{
  "label": "高淳区",
  "value": "320118" }],


[{
  "label": "锡山区",
  "value": "320205" },

{
  "label": "惠山区",
  "value": "320206" },

{
  "label": "滨湖区",
  "value": "320211" },

{
  "label": "梁溪区",
  "value": "320213" },

{
  "label": "新吴区",
  "value": "320214" },

{
  "label": "江阴市",
  "value": "320281" },

{
  "label": "宜兴市",
  "value": "320282" }],


[{
  "label": "鼓楼区",
  "value": "320302" },

{
  "label": "云龙区",
  "value": "320303" },

{
  "label": "贾汪区",
  "value": "320305" },

{
  "label": "泉山区",
  "value": "320311" },

{
  "label": "铜山区",
  "value": "320312" },

{
  "label": "丰县",
  "value": "320321" },

{
  "label": "沛县",
  "value": "320322" },

{
  "label": "睢宁县",
  "value": "320324" },

{
  "label": "徐州经济技术开发区",
  "value": "320371" },

{
  "label": "新沂市",
  "value": "320381" },

{
  "label": "邳州市",
  "value": "320382" }],


[{
  "label": "天宁区",
  "value": "320402" },

{
  "label": "钟楼区",
  "value": "320404" },

{
  "label": "新北区",
  "value": "320411" },

{
  "label": "武进区",
  "value": "320412" },

{
  "label": "金坛区",
  "value": "320413" },

{
  "label": "溧阳市",
  "value": "320481" }],


[{
  "label": "虎丘区",
  "value": "320505" },

{
  "label": "吴中区",
  "value": "320506" },

{
  "label": "相城区",
  "value": "320507" },

{
  "label": "姑苏区",
  "value": "320508" },

{
  "label": "吴江区",
  "value": "320509" },

{
  "label": "苏州工业园区",
  "value": "320571" },

{
  "label": "常熟市",
  "value": "320581" },

{
  "label": "张家港市",
  "value": "320582" },

{
  "label": "昆山市",
  "value": "320583" },

{
  "label": "太仓市",
  "value": "320585" }],


[{
  "label": "崇川区",
  "value": "320602" },

{
  "label": "港闸区",
  "value": "320611" },

{
  "label": "通州区",
  "value": "320612" },

{
  "label": "海安县",
  "value": "320621" },

{
  "label": "如东县",
  "value": "320623" },

{
  "label": "南通经济技术开发区",
  "value": "320671" },

{
  "label": "启东市",
  "value": "320681" },

{
  "label": "如皋市",
  "value": "320682" },

{
  "label": "海门市",
  "value": "320684" }],


[{
  "label": "连云区",
  "value": "320703" },

{
  "label": "海州区",
  "value": "320706" },

{
  "label": "赣榆区",
  "value": "320707" },

{
  "label": "东海县",
  "value": "320722" },

{
  "label": "灌云县",
  "value": "320723" },

{
  "label": "灌南县",
  "value": "320724" },

{
  "label": "连云港经济技术开发区",
  "value": "320771" },

{
  "label": "连云港高新技术产业开发区",
  "value": "320772" }],


[{
  "label": "淮安区",
  "value": "320803" },

{
  "label": "淮阴区",
  "value": "320804" },

{
  "label": "清江浦区",
  "value": "320812" },

{
  "label": "洪泽区",
  "value": "320813" },

{
  "label": "涟水县",
  "value": "320826" },

{
  "label": "盱眙县",
  "value": "320830" },

{
  "label": "金湖县",
  "value": "320831" },

{
  "label": "淮安经济技术开发区",
  "value": "320871" }],


[{
  "label": "亭湖区",
  "value": "320902" },

{
  "label": "盐都区",
  "value": "320903" },

{
  "label": "大丰区",
  "value": "320904" },

{
  "label": "响水县",
  "value": "320921" },

{
  "label": "滨海县",
  "value": "320922" },

{
  "label": "阜宁县",
  "value": "320923" },

{
  "label": "射阳县",
  "value": "320924" },

{
  "label": "建湖县",
  "value": "320925" },

{
  "label": "盐城经济技术开发区",
  "value": "320971" },

{
  "label": "东台市",
  "value": "320981" }],


[{
  "label": "广陵区",
  "value": "321002" },

{
  "label": "邗江区",
  "value": "321003" },

{
  "label": "江都区",
  "value": "321012" },

{
  "label": "宝应县",
  "value": "321023" },

{
  "label": "扬州经济技术开发区",
  "value": "321071" },

{
  "label": "仪征市",
  "value": "321081" },

{
  "label": "高邮市",
  "value": "321084" }],


[{
  "label": "京口区",
  "value": "321102" },

{
  "label": "润州区",
  "value": "321111" },

{
  "label": "丹徒区",
  "value": "321112" },

{
  "label": "镇江新区",
  "value": "321171" },

{
  "label": "丹阳市",
  "value": "321181" },

{
  "label": "扬中市",
  "value": "321182" },

{
  "label": "句容市",
  "value": "321183" }],


[{
  "label": "海陵区",
  "value": "321202" },

{
  "label": "高港区",
  "value": "321203" },

{
  "label": "姜堰区",
  "value": "321204" },

{
  "label": "泰州医药高新技术产业开发区",
  "value": "321271" },

{
  "label": "兴化市",
  "value": "321281" },

{
  "label": "靖江市",
  "value": "321282" },

{
  "label": "泰兴市",
  "value": "321283" }],


[{
  "label": "宿城区",
  "value": "321302" },

{
  "label": "宿豫区",
  "value": "321311" },

{
  "label": "沭阳县",
  "value": "321322" },

{
  "label": "泗阳县",
  "value": "321323" },

{
  "label": "泗洪县",
  "value": "321324" },

{
  "label": "宿迁经济技术开发区",
  "value": "321371" }]],



[
[{
  "label": "上城区",
  "value": "330102" },

{
  "label": "下城区",
  "value": "330103" },

{
  "label": "江干区",
  "value": "330104" },

{
  "label": "拱墅区",
  "value": "330105" },

{
  "label": "西湖区",
  "value": "330106" },

{
  "label": "滨江区",
  "value": "330108" },

{
  "label": "萧山区",
  "value": "330109" },

{
  "label": "余杭区",
  "value": "330110" },

{
  "label": "富阳区",
  "value": "330111" },

{
  "label": "临安区",
  "value": "330112" },

{
  "label": "桐庐县",
  "value": "330122" },

{
  "label": "淳安县",
  "value": "330127" },

{
  "label": "建德市",
  "value": "330182" }],


[{
  "label": "海曙区",
  "value": "330203" },

{
  "label": "江北区",
  "value": "330205" },

{
  "label": "北仑区",
  "value": "330206" },

{
  "label": "镇海区",
  "value": "330211" },

{
  "label": "鄞州区",
  "value": "330212" },

{
  "label": "奉化区",
  "value": "330213" },

{
  "label": "象山县",
  "value": "330225" },

{
  "label": "宁海县",
  "value": "330226" },

{
  "label": "余姚市",
  "value": "330281" },

{
  "label": "慈溪市",
  "value": "330282" }],


[{
  "label": "鹿城区",
  "value": "330302" },

{
  "label": "龙湾区",
  "value": "330303" },

{
  "label": "瓯海区",
  "value": "330304" },

{
  "label": "洞头区",
  "value": "330305" },

{
  "label": "永嘉县",
  "value": "330324" },

{
  "label": "平阳县",
  "value": "330326" },

{
  "label": "苍南县",
  "value": "330327" },

{
  "label": "文成县",
  "value": "330328" },

{
  "label": "泰顺县",
  "value": "330329" },

{
  "label": "温州经济技术开发区",
  "value": "330371" },

{
  "label": "瑞安市",
  "value": "330381" },

{
  "label": "乐清市",
  "value": "330382" }],


[{
  "label": "南湖区",
  "value": "330402" },

{
  "label": "秀洲区",
  "value": "330411" },

{
  "label": "嘉善县",
  "value": "330421" },

{
  "label": "海盐县",
  "value": "330424" },

{
  "label": "海宁市",
  "value": "330481" },

{
  "label": "平湖市",
  "value": "330482" },

{
  "label": "桐乡市",
  "value": "330483" }],


[{
  "label": "吴兴区",
  "value": "330502" },

{
  "label": "南浔区",
  "value": "330503" },

{
  "label": "德清县",
  "value": "330521" },

{
  "label": "长兴县",
  "value": "330522" },

{
  "label": "安吉县",
  "value": "330523" }],


[{
  "label": "越城区",
  "value": "330602" },

{
  "label": "柯桥区",
  "value": "330603" },

{
  "label": "上虞区",
  "value": "330604" },

{
  "label": "新昌县",
  "value": "330624" },

{
  "label": "诸暨市",
  "value": "330681" },

{
  "label": "嵊州市",
  "value": "330683" }],


[{
  "label": "婺城区",
  "value": "330702" },

{
  "label": "金东区",
  "value": "330703" },

{
  "label": "武义县",
  "value": "330723" },

{
  "label": "浦江县",
  "value": "330726" },

{
  "label": "磐安县",
  "value": "330727" },

{
  "label": "兰溪市",
  "value": "330781" },

{
  "label": "义乌市",
  "value": "330782" },

{
  "label": "东阳市",
  "value": "330783" },

{
  "label": "永康市",
  "value": "330784" }],


[{
  "label": "柯城区",
  "value": "330802" },

{
  "label": "衢江区",
  "value": "330803" },

{
  "label": "常山县",
  "value": "330822" },

{
  "label": "开化县",
  "value": "330824" },

{
  "label": "龙游县",
  "value": "330825" },

{
  "label": "江山市",
  "value": "330881" }],


[{
  "label": "定海区",
  "value": "330902" },

{
  "label": "普陀区",
  "value": "330903" },

{
  "label": "岱山县",
  "value": "330921" },

{
  "label": "嵊泗县",
  "value": "330922" }],


[{
  "label": "椒江区",
  "value": "331002" },

{
  "label": "黄岩区",
  "value": "331003" },

{
  "label": "路桥区",
  "value": "331004" },

{
  "label": "三门县",
  "value": "331022" },

{
  "label": "天台县",
  "value": "331023" },

{
  "label": "仙居县",
  "value": "331024" },

{
  "label": "温岭市",
  "value": "331081" },

{
  "label": "临海市",
  "value": "331082" },

{
  "label": "玉环市",
  "value": "331083" }],


[{
  "label": "莲都区",
  "value": "331102" },

{
  "label": "青田县",
  "value": "331121" },

{
  "label": "缙云县",
  "value": "331122" },

{
  "label": "遂昌县",
  "value": "331123" },

{
  "label": "松阳县",
  "value": "331124" },

{
  "label": "云和县",
  "value": "331125" },

{
  "label": "庆元县",
  "value": "331126" },

{
  "label": "景宁畲族自治县",
  "value": "331127" },

{
  "label": "龙泉市",
  "value": "331181" }]],



[
[{
  "label": "瑶海区",
  "value": "340102" },

{
  "label": "庐阳区",
  "value": "340103" },

{
  "label": "蜀山区",
  "value": "340104" },

{
  "label": "包河区",
  "value": "340111" },

{
  "label": "长丰县",
  "value": "340121" },

{
  "label": "肥东县",
  "value": "340122" },

{
  "label": "肥西县",
  "value": "340123" },

{
  "label": "庐江县",
  "value": "340124" },

{
  "label": "合肥高新技术产业开发区",
  "value": "340171" },

{
  "label": "合肥经济技术开发区",
  "value": "340172" },

{
  "label": "合肥新站高新技术产业开发区",
  "value": "340173" },

{
  "label": "巢湖市",
  "value": "340181" }],


[{
  "label": "镜湖区",
  "value": "340202" },

{
  "label": "弋江区",
  "value": "340203" },

{
  "label": "鸠江区",
  "value": "340207" },

{
  "label": "三山区",
  "value": "340208" },

{
  "label": "芜湖县",
  "value": "340221" },

{
  "label": "繁昌县",
  "value": "340222" },

{
  "label": "南陵县",
  "value": "340223" },

{
  "label": "无为县",
  "value": "340225" },

{
  "label": "芜湖经济技术开发区",
  "value": "340271" },

{
  "label": "安徽芜湖长江大桥经济开发区",
  "value": "340272" }],


[{
  "label": "龙子湖区",
  "value": "340302" },

{
  "label": "蚌山区",
  "value": "340303" },

{
  "label": "禹会区",
  "value": "340304" },

{
  "label": "淮上区",
  "value": "340311" },

{
  "label": "怀远县",
  "value": "340321" },

{
  "label": "五河县",
  "value": "340322" },

{
  "label": "固镇县",
  "value": "340323" },

{
  "label": "蚌埠市高新技术开发区",
  "value": "340371" },

{
  "label": "蚌埠市经济开发区",
  "value": "340372" }],


[{
  "label": "大通区",
  "value": "340402" },

{
  "label": "田家庵区",
  "value": "340403" },

{
  "label": "谢家集区",
  "value": "340404" },

{
  "label": "八公山区",
  "value": "340405" },

{
  "label": "潘集区",
  "value": "340406" },

{
  "label": "凤台县",
  "value": "340421" },

{
  "label": "寿县",
  "value": "340422" }],


[{
  "label": "花山区",
  "value": "340503" },

{
  "label": "雨山区",
  "value": "340504" },

{
  "label": "博望区",
  "value": "340506" },

{
  "label": "当涂县",
  "value": "340521" },

{
  "label": "含山县",
  "value": "340522" },

{
  "label": "和县",
  "value": "340523" }],


[{
  "label": "杜集区",
  "value": "340602" },

{
  "label": "相山区",
  "value": "340603" },

{
  "label": "烈山区",
  "value": "340604" },

{
  "label": "濉溪县",
  "value": "340621" }],


[{
  "label": "铜官区",
  "value": "340705" },

{
  "label": "义安区",
  "value": "340706" },

{
  "label": "郊区",
  "value": "340711" },

{
  "label": "枞阳县",
  "value": "340722" }],


[{
  "label": "迎江区",
  "value": "340802" },

{
  "label": "大观区",
  "value": "340803" },

{
  "label": "宜秀区",
  "value": "340811" },

{
  "label": "怀宁县",
  "value": "340822" },

{
  "label": "潜山县",
  "value": "340824" },

{
  "label": "太湖县",
  "value": "340825" },

{
  "label": "宿松县",
  "value": "340826" },

{
  "label": "望江县",
  "value": "340827" },

{
  "label": "岳西县",
  "value": "340828" },

{
  "label": "安徽安庆经济开发区",
  "value": "340871" },

{
  "label": "桐城市",
  "value": "340881" }],


[{
  "label": "屯溪区",
  "value": "341002" },

{
  "label": "黄山区",
  "value": "341003" },

{
  "label": "徽州区",
  "value": "341004" },

{
  "label": "歙县",
  "value": "341021" },

{
  "label": "休宁县",
  "value": "341022" },

{
  "label": "黟县",
  "value": "341023" },

{
  "label": "祁门县",
  "value": "341024" }],


[{
  "label": "琅琊区",
  "value": "341102" },

{
  "label": "南谯区",
  "value": "341103" },

{
  "label": "来安县",
  "value": "341122" },

{
  "label": "全椒县",
  "value": "341124" },

{
  "label": "定远县",
  "value": "341125" },

{
  "label": "凤阳县",
  "value": "341126" },

{
  "label": "苏滁现代产业园",
  "value": "341171" },

{
  "label": "滁州经济技术开发区",
  "value": "341172" },

{
  "label": "天长市",
  "value": "341181" },

{
  "label": "明光市",
  "value": "341182" }],


[{
  "label": "颍州区",
  "value": "341202" },

{
  "label": "颍东区",
  "value": "341203" },

{
  "label": "颍泉区",
  "value": "341204" },

{
  "label": "临泉县",
  "value": "341221" },

{
  "label": "太和县",
  "value": "341222" },

{
  "label": "阜南县",
  "value": "341225" },

{
  "label": "颍上县",
  "value": "341226" },

{
  "label": "阜阳合肥现代产业园区",
  "value": "341271" },

{
  "label": "阜阳经济技术开发区",
  "value": "341272" },

{
  "label": "界首市",
  "value": "341282" }],


[{
  "label": "埇桥区",
  "value": "341302" },

{
  "label": "砀山县",
  "value": "341321" },

{
  "label": "萧县",
  "value": "341322" },

{
  "label": "灵璧县",
  "value": "341323" },

{
  "label": "泗县",
  "value": "341324" },

{
  "label": "宿州马鞍山现代产业园区",
  "value": "341371" },

{
  "label": "宿州经济技术开发区",
  "value": "341372" }],


[{
  "label": "金安区",
  "value": "341502" },

{
  "label": "裕安区",
  "value": "341503" },

{
  "label": "叶集区",
  "value": "341504" },

{
  "label": "霍邱县",
  "value": "341522" },

{
  "label": "舒城县",
  "value": "341523" },

{
  "label": "金寨县",
  "value": "341524" },

{
  "label": "霍山县",
  "value": "341525" }],


[{
  "label": "谯城区",
  "value": "341602" },

{
  "label": "涡阳县",
  "value": "341621" },

{
  "label": "蒙城县",
  "value": "341622" },

{
  "label": "利辛县",
  "value": "341623" }],


[{
  "label": "贵池区",
  "value": "341702" },

{
  "label": "东至县",
  "value": "341721" },

{
  "label": "石台县",
  "value": "341722" },

{
  "label": "青阳县",
  "value": "341723" }],


[{
  "label": "宣州区",
  "value": "341802" },

{
  "label": "郎溪县",
  "value": "341821" },

{
  "label": "广德县",
  "value": "341822" },

{
  "label": "泾县",
  "value": "341823" },

{
  "label": "绩溪县",
  "value": "341824" },

{
  "label": "旌德县",
  "value": "341825" },

{
  "label": "宣城市经济开发区",
  "value": "341871" },

{
  "label": "宁国市",
  "value": "341881" }]],



[
[{
  "label": "鼓楼区",
  "value": "350102" },

{
  "label": "台江区",
  "value": "350103" },

{
  "label": "仓山区",
  "value": "350104" },

{
  "label": "马尾区",
  "value": "350105" },

{
  "label": "晋安区",
  "value": "350111" },

{
  "label": "闽侯县",
  "value": "350121" },

{
  "label": "连江县",
  "value": "350122" },

{
  "label": "罗源县",
  "value": "350123" },

{
  "label": "闽清县",
  "value": "350124" },

{
  "label": "永泰县",
  "value": "350125" },

{
  "label": "平潭县",
  "value": "350128" },

{
  "label": "福清市",
  "value": "350181" },

{
  "label": "长乐市",
  "value": "350182" }],


[{
  "label": "思明区",
  "value": "350203" },

{
  "label": "海沧区",
  "value": "350205" },

{
  "label": "湖里区",
  "value": "350206" },

{
  "label": "集美区",
  "value": "350211" },

{
  "label": "同安区",
  "value": "350212" },

{
  "label": "翔安区",
  "value": "350213" }],


[{
  "label": "城厢区",
  "value": "350302" },

{
  "label": "涵江区",
  "value": "350303" },

{
  "label": "荔城区",
  "value": "350304" },

{
  "label": "秀屿区",
  "value": "350305" },

{
  "label": "仙游县",
  "value": "350322" }],


[{
  "label": "梅列区",
  "value": "350402" },

{
  "label": "三元区",
  "value": "350403" },

{
  "label": "明溪县",
  "value": "350421" },

{
  "label": "清流县",
  "value": "350423" },

{
  "label": "宁化县",
  "value": "350424" },

{
  "label": "大田县",
  "value": "350425" },

{
  "label": "尤溪县",
  "value": "350426" },

{
  "label": "沙县",
  "value": "350427" },

{
  "label": "将乐县",
  "value": "350428" },

{
  "label": "泰宁县",
  "value": "350429" },

{
  "label": "建宁县",
  "value": "350430" },

{
  "label": "永安市",
  "value": "350481" }],


[{
  "label": "鲤城区",
  "value": "350502" },

{
  "label": "丰泽区",
  "value": "350503" },

{
  "label": "洛江区",
  "value": "350504" },

{
  "label": "泉港区",
  "value": "350505" },

{
  "label": "惠安县",
  "value": "350521" },

{
  "label": "安溪县",
  "value": "350524" },

{
  "label": "永春县",
  "value": "350525" },

{
  "label": "德化县",
  "value": "350526" },

{
  "label": "金门县",
  "value": "350527" },

{
  "label": "石狮市",
  "value": "350581" },

{
  "label": "晋江市",
  "value": "350582" },

{
  "label": "南安市",
  "value": "350583" }],


[{
  "label": "芗城区",
  "value": "350602" },

{
  "label": "龙文区",
  "value": "350603" },

{
  "label": "云霄县",
  "value": "350622" },

{
  "label": "漳浦县",
  "value": "350623" },

{
  "label": "诏安县",
  "value": "350624" },

{
  "label": "长泰县",
  "value": "350625" },

{
  "label": "东山县",
  "value": "350626" },

{
  "label": "南靖县",
  "value": "350627" },

{
  "label": "平和县",
  "value": "350628" },

{
  "label": "华安县",
  "value": "350629" },

{
  "label": "龙海市",
  "value": "350681" }],


[{
  "label": "延平区",
  "value": "350702" },

{
  "label": "建阳区",
  "value": "350703" },

{
  "label": "顺昌县",
  "value": "350721" },

{
  "label": "浦城县",
  "value": "350722" },

{
  "label": "光泽县",
  "value": "350723" },

{
  "label": "松溪县",
  "value": "350724" },

{
  "label": "政和县",
  "value": "350725" },

{
  "label": "邵武市",
  "value": "350781" },

{
  "label": "武夷山市",
  "value": "350782" },

{
  "label": "建瓯市",
  "value": "350783" }],


[{
  "label": "新罗区",
  "value": "350802" },

{
  "label": "永定区",
  "value": "350803" },

{
  "label": "长汀县",
  "value": "350821" },

{
  "label": "上杭县",
  "value": "350823" },

{
  "label": "武平县",
  "value": "350824" },

{
  "label": "连城县",
  "value": "350825" },

{
  "label": "漳平市",
  "value": "350881" }],


[{
  "label": "蕉城区",
  "value": "350902" },

{
  "label": "霞浦县",
  "value": "350921" },

{
  "label": "古田县",
  "value": "350922" },

{
  "label": "屏南县",
  "value": "350923" },

{
  "label": "寿宁县",
  "value": "350924" },

{
  "label": "周宁县",
  "value": "350925" },

{
  "label": "柘荣县",
  "value": "350926" },

{
  "label": "福安市",
  "value": "350981" },

{
  "label": "福鼎市",
  "value": "350982" }]],



[
[{
  "label": "东湖区",
  "value": "360102" },

{
  "label": "西湖区",
  "value": "360103" },

{
  "label": "青云谱区",
  "value": "360104" },

{
  "label": "湾里区",
  "value": "360105" },

{
  "label": "青山湖区",
  "value": "360111" },

{
  "label": "新建区",
  "value": "360112" },

{
  "label": "南昌县",
  "value": "360121" },

{
  "label": "安义县",
  "value": "360123" },

{
  "label": "进贤县",
  "value": "360124" }],


[{
  "label": "昌江区",
  "value": "360202" },

{
  "label": "珠山区",
  "value": "360203" },

{
  "label": "浮梁县",
  "value": "360222" },

{
  "label": "乐平市",
  "value": "360281" }],


[{
  "label": "安源区",
  "value": "360302" },

{
  "label": "湘东区",
  "value": "360313" },

{
  "label": "莲花县",
  "value": "360321" },

{
  "label": "上栗县",
  "value": "360322" },

{
  "label": "芦溪县",
  "value": "360323" }],


[{
  "label": "濂溪区",
  "value": "360402" },

{
  "label": "浔阳区",
  "value": "360403" },

{
  "label": "柴桑区",
  "value": "360404" },

{
  "label": "武宁县",
  "value": "360423" },

{
  "label": "修水县",
  "value": "360424" },

{
  "label": "永修县",
  "value": "360425" },

{
  "label": "德安县",
  "value": "360426" },

{
  "label": "都昌县",
  "value": "360428" },

{
  "label": "湖口县",
  "value": "360429" },

{
  "label": "彭泽县",
  "value": "360430" },

{
  "label": "瑞昌市",
  "value": "360481" },

{
  "label": "共青城市",
  "value": "360482" },

{
  "label": "庐山市",
  "value": "360483" }],


[{
  "label": "渝水区",
  "value": "360502" },

{
  "label": "分宜县",
  "value": "360521" }],


[{
  "label": "月湖区",
  "value": "360602" },

{
  "label": "余江县",
  "value": "360622" },

{
  "label": "贵溪市",
  "value": "360681" }],


[{
  "label": "章贡区",
  "value": "360702" },

{
  "label": "南康区",
  "value": "360703" },

{
  "label": "赣县区",
  "value": "360704" },

{
  "label": "信丰县",
  "value": "360722" },

{
  "label": "大余县",
  "value": "360723" },

{
  "label": "上犹县",
  "value": "360724" },

{
  "label": "崇义县",
  "value": "360725" },

{
  "label": "安远县",
  "value": "360726" },

{
  "label": "龙南县",
  "value": "360727" },

{
  "label": "定南县",
  "value": "360728" },

{
  "label": "全南县",
  "value": "360729" },

{
  "label": "宁都县",
  "value": "360730" },

{
  "label": "于都县",
  "value": "360731" },

{
  "label": "兴国县",
  "value": "360732" },

{
  "label": "会昌县",
  "value": "360733" },

{
  "label": "寻乌县",
  "value": "360734" },

{
  "label": "石城县",
  "value": "360735" },

{
  "label": "瑞金市",
  "value": "360781" }],


[{
  "label": "吉州区",
  "value": "360802" },

{
  "label": "青原区",
  "value": "360803" },

{
  "label": "吉安县",
  "value": "360821" },

{
  "label": "吉水县",
  "value": "360822" },

{
  "label": "峡江县",
  "value": "360823" },

{
  "label": "新干县",
  "value": "360824" },

{
  "label": "永丰县",
  "value": "360825" },

{
  "label": "泰和县",
  "value": "360826" },

{
  "label": "遂川县",
  "value": "360827" },

{
  "label": "万安县",
  "value": "360828" },

{
  "label": "安福县",
  "value": "360829" },

{
  "label": "永新县",
  "value": "360830" },

{
  "label": "井冈山市",
  "value": "360881" }],


[{
  "label": "袁州区",
  "value": "360902" },

{
  "label": "奉新县",
  "value": "360921" },

{
  "label": "万载县",
  "value": "360922" },

{
  "label": "上高县",
  "value": "360923" },

{
  "label": "宜丰县",
  "value": "360924" },

{
  "label": "靖安县",
  "value": "360925" },

{
  "label": "铜鼓县",
  "value": "360926" },

{
  "label": "丰城市",
  "value": "360981" },

{
  "label": "樟树市",
  "value": "360982" },

{
  "label": "高安市",
  "value": "360983" }],


[{
  "label": "临川区",
  "value": "361002" },

{
  "label": "东乡区",
  "value": "361003" },

{
  "label": "南城县",
  "value": "361021" },

{
  "label": "黎川县",
  "value": "361022" },

{
  "label": "南丰县",
  "value": "361023" },

{
  "label": "崇仁县",
  "value": "361024" },

{
  "label": "乐安县",
  "value": "361025" },

{
  "label": "宜黄县",
  "value": "361026" },

{
  "label": "金溪县",
  "value": "361027" },

{
  "label": "资溪县",
  "value": "361028" },

{
  "label": "广昌县",
  "value": "361030" }],


[{
  "label": "信州区",
  "value": "361102" },

{
  "label": "广丰区",
  "value": "361103" },

{
  "label": "上饶县",
  "value": "361121" },

{
  "label": "玉山县",
  "value": "361123" },

{
  "label": "铅山县",
  "value": "361124" },

{
  "label": "横峰县",
  "value": "361125" },

{
  "label": "弋阳县",
  "value": "361126" },

{
  "label": "余干县",
  "value": "361127" },

{
  "label": "鄱阳县",
  "value": "361128" },

{
  "label": "万年县",
  "value": "361129" },

{
  "label": "婺源县",
  "value": "361130" },

{
  "label": "德兴市",
  "value": "361181" }]],



[
[{
  "label": "历下区",
  "value": "370102" },

{
  "label": "市中区",
  "value": "370103" },

{
  "label": "槐荫区",
  "value": "370104" },

{
  "label": "天桥区",
  "value": "370105" },

{
  "label": "历城区",
  "value": "370112" },

{
  "label": "长清区",
  "value": "370113" },

{
  "label": "章丘区",
  "value": "370114" },

{
  "label": "平阴县",
  "value": "370124" },

{
  "label": "济阳县",
  "value": "370125" },

{
  "label": "商河县",
  "value": "370126" },

{
  "label": "济南高新技术产业开发区",
  "value": "370171" }],


[{
  "label": "市南区",
  "value": "370202" },

{
  "label": "市北区",
  "value": "370203" },

{
  "label": "黄岛区",
  "value": "370211" },

{
  "label": "崂山区",
  "value": "370212" },

{
  "label": "李沧区",
  "value": "370213" },

{
  "label": "城阳区",
  "value": "370214" },

{
  "label": "即墨区",
  "value": "370215" },

{
  "label": "青岛高新技术产业开发区",
  "value": "370271" },

{
  "label": "胶州市",
  "value": "370281" },

{
  "label": "平度市",
  "value": "370283" },

{
  "label": "莱西市",
  "value": "370285" }],


[{
  "label": "淄川区",
  "value": "370302" },

{
  "label": "张店区",
  "value": "370303" },

{
  "label": "博山区",
  "value": "370304" },

{
  "label": "临淄区",
  "value": "370305" },

{
  "label": "周村区",
  "value": "370306" },

{
  "label": "桓台县",
  "value": "370321" },

{
  "label": "高青县",
  "value": "370322" },

{
  "label": "沂源县",
  "value": "370323" }],


[{
  "label": "市中区",
  "value": "370402" },

{
  "label": "薛城区",
  "value": "370403" },

{
  "label": "峄城区",
  "value": "370404" },

{
  "label": "台儿庄区",
  "value": "370405" },

{
  "label": "山亭区",
  "value": "370406" },

{
  "label": "滕州市",
  "value": "370481" }],


[{
  "label": "东营区",
  "value": "370502" },

{
  "label": "河口区",
  "value": "370503" },

{
  "label": "垦利区",
  "value": "370505" },

{
  "label": "利津县",
  "value": "370522" },

{
  "label": "广饶县",
  "value": "370523" },

{
  "label": "东营经济技术开发区",
  "value": "370571" },

{
  "label": "东营港经济开发区",
  "value": "370572" }],


[{
  "label": "芝罘区",
  "value": "370602" },

{
  "label": "福山区",
  "value": "370611" },

{
  "label": "牟平区",
  "value": "370612" },

{
  "label": "莱山区",
  "value": "370613" },

{
  "label": "长岛县",
  "value": "370634" },

{
  "label": "烟台高新技术产业开发区",
  "value": "370671" },

{
  "label": "烟台经济技术开发区",
  "value": "370672" },

{
  "label": "龙口市",
  "value": "370681" },

{
  "label": "莱阳市",
  "value": "370682" },

{
  "label": "莱州市",
  "value": "370683" },

{
  "label": "蓬莱市",
  "value": "370684" },

{
  "label": "招远市",
  "value": "370685" },

{
  "label": "栖霞市",
  "value": "370686" },

{
  "label": "海阳市",
  "value": "370687" }],


[{
  "label": "潍城区",
  "value": "370702" },

{
  "label": "寒亭区",
  "value": "370703" },

{
  "label": "坊子区",
  "value": "370704" },

{
  "label": "奎文区",
  "value": "370705" },

{
  "label": "临朐县",
  "value": "370724" },

{
  "label": "昌乐县",
  "value": "370725" },

{
  "label": "潍坊滨海经济技术开发区",
  "value": "370772" },

{
  "label": "青州市",
  "value": "370781" },

{
  "label": "诸城市",
  "value": "370782" },

{
  "label": "寿光市",
  "value": "370783" },

{
  "label": "安丘市",
  "value": "370784" },

{
  "label": "高密市",
  "value": "370785" },

{
  "label": "昌邑市",
  "value": "370786" }],


[{
  "label": "任城区",
  "value": "370811" },

{
  "label": "兖州区",
  "value": "370812" },

{
  "label": "微山县",
  "value": "370826" },

{
  "label": "鱼台县",
  "value": "370827" },

{
  "label": "金乡县",
  "value": "370828" },

{
  "label": "嘉祥县",
  "value": "370829" },

{
  "label": "汶上县",
  "value": "370830" },

{
  "label": "泗水县",
  "value": "370831" },

{
  "label": "梁山县",
  "value": "370832" },

{
  "label": "济宁高新技术产业开发区",
  "value": "370871" },

{
  "label": "曲阜市",
  "value": "370881" },

{
  "label": "邹城市",
  "value": "370883" }],


[{
  "label": "泰山区",
  "value": "370902" },

{
  "label": "岱岳区",
  "value": "370911" },

{
  "label": "宁阳县",
  "value": "370921" },

{
  "label": "东平县",
  "value": "370923" },

{
  "label": "新泰市",
  "value": "370982" },

{
  "label": "肥城市",
  "value": "370983" }],


[{
  "label": "环翠区",
  "value": "371002" },

{
  "label": "文登区",
  "value": "371003" },

{
  "label": "威海火炬高技术产业开发区",
  "value": "371071" },

{
  "label": "威海经济技术开发区",
  "value": "371072" },

{
  "label": "威海临港经济技术开发区",
  "value": "371073" },

{
  "label": "荣成市",
  "value": "371082" },

{
  "label": "乳山市",
  "value": "371083" }],


[{
  "label": "东港区",
  "value": "371102" },

{
  "label": "岚山区",
  "value": "371103" },

{
  "label": "五莲县",
  "value": "371121" },

{
  "label": "莒县",
  "value": "371122" },

{
  "label": "日照经济技术开发区",
  "value": "371171" },

{
  "label": "日照国际海洋城",
  "value": "371172" }],


[{
  "label": "莱城区",
  "value": "371202" },

{
  "label": "钢城区",
  "value": "371203" }],


[{
  "label": "兰山区",
  "value": "371302" },

{
  "label": "罗庄区",
  "value": "371311" },

{
  "label": "河东区",
  "value": "371312" },

{
  "label": "沂南县",
  "value": "371321" },

{
  "label": "郯城县",
  "value": "371322" },

{
  "label": "沂水县",
  "value": "371323" },

{
  "label": "兰陵县",
  "value": "371324" },

{
  "label": "费县",
  "value": "371325" },

{
  "label": "平邑县",
  "value": "371326" },

{
  "label": "莒南县",
  "value": "371327" },

{
  "label": "蒙阴县",
  "value": "371328" },

{
  "label": "临沭县",
  "value": "371329" },

{
  "label": "临沂高新技术产业开发区",
  "value": "371371" },

{
  "label": "临沂经济技术开发区",
  "value": "371372" },

{
  "label": "临沂临港经济开发区",
  "value": "371373" }],


[{
  "label": "德城区",
  "value": "371402" },

{
  "label": "陵城区",
  "value": "371403" },

{
  "label": "宁津县",
  "value": "371422" },

{
  "label": "庆云县",
  "value": "371423" },

{
  "label": "临邑县",
  "value": "371424" },

{
  "label": "齐河县",
  "value": "371425" },

{
  "label": "平原县",
  "value": "371426" },

{
  "label": "夏津县",
  "value": "371427" },

{
  "label": "武城县",
  "value": "371428" },

{
  "label": "德州经济技术开发区",
  "value": "371471" },

{
  "label": "德州运河经济开发区",
  "value": "371472" },

{
  "label": "乐陵市",
  "value": "371481" },

{
  "label": "禹城市",
  "value": "371482" }],


[{
  "label": "东昌府区",
  "value": "371502" },

{
  "label": "阳谷县",
  "value": "371521" },

{
  "label": "莘县",
  "value": "371522" },

{
  "label": "茌平县",
  "value": "371523" },

{
  "label": "东阿县",
  "value": "371524" },

{
  "label": "冠县",
  "value": "371525" },

{
  "label": "高唐县",
  "value": "371526" },

{
  "label": "临清市",
  "value": "371581" }],


[{
  "label": "滨城区",
  "value": "371602" },

{
  "label": "沾化区",
  "value": "371603" },

{
  "label": "惠民县",
  "value": "371621" },

{
  "label": "阳信县",
  "value": "371622" },

{
  "label": "无棣县",
  "value": "371623" },

{
  "label": "博兴县",
  "value": "371625" },

{
  "label": "邹平县",
  "value": "371626" }],


[{
  "label": "牡丹区",
  "value": "371702" },

{
  "label": "定陶区",
  "value": "371703" },

{
  "label": "曹县",
  "value": "371721" },

{
  "label": "单县",
  "value": "371722" },

{
  "label": "成武县",
  "value": "371723" },

{
  "label": "巨野县",
  "value": "371724" },

{
  "label": "郓城县",
  "value": "371725" },

{
  "label": "鄄城县",
  "value": "371726" },

{
  "label": "东明县",
  "value": "371728" },

{
  "label": "菏泽经济技术开发区",
  "value": "371771" },

{
  "label": "菏泽高新技术开发区",
  "value": "371772" }]],



[
[{
  "label": "中原区",
  "value": "410102" },

{
  "label": "二七区",
  "value": "410103" },

{
  "label": "管城回族区",
  "value": "410104" },

{
  "label": "金水区",
  "value": "410105" },

{
  "label": "上街区",
  "value": "410106" },

{
  "label": "惠济区",
  "value": "410108" },

{
  "label": "中牟县",
  "value": "410122" },

{
  "label": "郑州经济技术开发区",
  "value": "410171" },

{
  "label": "郑州高新技术产业开发区",
  "value": "410172" },

{
  "label": "郑州航空港经济综合实验区",
  "value": "410173" },

{
  "label": "巩义市",
  "value": "410181" },

{
  "label": "荥阳市",
  "value": "410182" },

{
  "label": "新密市",
  "value": "410183" },

{
  "label": "新郑市",
  "value": "410184" },

{
  "label": "登封市",
  "value": "410185" }],


[{
  "label": "龙亭区",
  "value": "410202" },

{
  "label": "顺河回族区",
  "value": "410203" },

{
  "label": "鼓楼区",
  "value": "410204" },

{
  "label": "禹王台区",
  "value": "410205" },

{
  "label": "祥符区",
  "value": "410212" },

{
  "label": "杞县",
  "value": "410221" },

{
  "label": "通许县",
  "value": "410222" },

{
  "label": "尉氏县",
  "value": "410223" },

{
  "label": "兰考县",
  "value": "410225" }],


[{
  "label": "老城区",
  "value": "410302" },

{
  "label": "西工区",
  "value": "410303" },

{
  "label": "瀍河回族区",
  "value": "410304" },

{
  "label": "涧西区",
  "value": "410305" },

{
  "label": "吉利区",
  "value": "410306" },

{
  "label": "洛龙区",
  "value": "410311" },

{
  "label": "孟津县",
  "value": "410322" },

{
  "label": "新安县",
  "value": "410323" },

{
  "label": "栾川县",
  "value": "410324" },

{
  "label": "嵩县",
  "value": "410325" },

{
  "label": "汝阳县",
  "value": "410326" },

{
  "label": "宜阳县",
  "value": "410327" },

{
  "label": "洛宁县",
  "value": "410328" },

{
  "label": "伊川县",
  "value": "410329" },

{
  "label": "洛阳高新技术产业开发区",
  "value": "410371" },

{
  "label": "偃师市",
  "value": "410381" }],


[{
  "label": "新华区",
  "value": "410402" },

{
  "label": "卫东区",
  "value": "410403" },

{
  "label": "石龙区",
  "value": "410404" },

{
  "label": "湛河区",
  "value": "410411" },

{
  "label": "宝丰县",
  "value": "410421" },

{
  "label": "叶县",
  "value": "410422" },

{
  "label": "鲁山县",
  "value": "410423" },

{
  "label": "郏县",
  "value": "410425" },

{
  "label": "平顶山高新技术产业开发区",
  "value": "410471" },

{
  "label": "平顶山市新城区",
  "value": "410472" },

{
  "label": "舞钢市",
  "value": "410481" },

{
  "label": "汝州市",
  "value": "410482" }],


[{
  "label": "文峰区",
  "value": "410502" },

{
  "label": "北关区",
  "value": "410503" },

{
  "label": "殷都区",
  "value": "410505" },

{
  "label": "龙安区",
  "value": "410506" },

{
  "label": "安阳县",
  "value": "410522" },

{
  "label": "汤阴县",
  "value": "410523" },

{
  "label": "滑县",
  "value": "410526" },

{
  "label": "内黄县",
  "value": "410527" },

{
  "label": "安阳高新技术产业开发区",
  "value": "410571" },

{
  "label": "林州市",
  "value": "410581" }],


[{
  "label": "鹤山区",
  "value": "410602" },

{
  "label": "山城区",
  "value": "410603" },

{
  "label": "淇滨区",
  "value": "410611" },

{
  "label": "浚县",
  "value": "410621" },

{
  "label": "淇县",
  "value": "410622" },

{
  "label": "鹤壁经济技术开发区",
  "value": "410671" }],


[{
  "label": "红旗区",
  "value": "410702" },

{
  "label": "卫滨区",
  "value": "410703" },

{
  "label": "凤泉区",
  "value": "410704" },

{
  "label": "牧野区",
  "value": "410711" },

{
  "label": "新乡县",
  "value": "410721" },

{
  "label": "获嘉县",
  "value": "410724" },

{
  "label": "原阳县",
  "value": "410725" },

{
  "label": "延津县",
  "value": "410726" },

{
  "label": "封丘县",
  "value": "410727" },

{
  "label": "长垣县",
  "value": "410728" },

{
  "label": "新乡高新技术产业开发区",
  "value": "410771" },

{
  "label": "新乡经济技术开发区",
  "value": "410772" },

{
  "label": "新乡市平原城乡一体化示范区",
  "value": "410773" },

{
  "label": "卫辉市",
  "value": "410781" },

{
  "label": "辉县市",
  "value": "410782" }],


[{
  "label": "解放区",
  "value": "410802" },

{
  "label": "中站区",
  "value": "410803" },

{
  "label": "马村区",
  "value": "410804" },

{
  "label": "山阳区",
  "value": "410811" },

{
  "label": "修武县",
  "value": "410821" },

{
  "label": "博爱县",
  "value": "410822" },

{
  "label": "武陟县",
  "value": "410823" },

{
  "label": "温县",
  "value": "410825" },

{
  "label": "焦作城乡一体化示范区",
  "value": "410871" },

{
  "label": "沁阳市",
  "value": "410882" },

{
  "label": "孟州市",
  "value": "410883" }],


[{
  "label": "华龙区",
  "value": "410902" },

{
  "label": "清丰县",
  "value": "410922" },

{
  "label": "南乐县",
  "value": "410923" },

{
  "label": "范县",
  "value": "410926" },

{
  "label": "台前县",
  "value": "410927" },

{
  "label": "濮阳县",
  "value": "410928" },

{
  "label": "河南濮阳工业园区",
  "value": "410971" },

{
  "label": "濮阳经济技术开发区",
  "value": "410972" }],


[{
  "label": "魏都区",
  "value": "411002" },

{
  "label": "建安区",
  "value": "411003" },

{
  "label": "鄢陵县",
  "value": "411024" },

{
  "label": "襄城县",
  "value": "411025" },

{
  "label": "许昌经济技术开发区",
  "value": "411071" },

{
  "label": "禹州市",
  "value": "411081" },

{
  "label": "长葛市",
  "value": "411082" }],


[{
  "label": "源汇区",
  "value": "411102" },

{
  "label": "郾城区",
  "value": "411103" },

{
  "label": "召陵区",
  "value": "411104" },

{
  "label": "舞阳县",
  "value": "411121" },

{
  "label": "临颍县",
  "value": "411122" },

{
  "label": "漯河经济技术开发区",
  "value": "411171" }],


[{
  "label": "湖滨区",
  "value": "411202" },

{
  "label": "陕州区",
  "value": "411203" },

{
  "label": "渑池县",
  "value": "411221" },

{
  "label": "卢氏县",
  "value": "411224" },

{
  "label": "河南三门峡经济开发区",
  "value": "411271" },

{
  "label": "义马市",
  "value": "411281" },

{
  "label": "灵宝市",
  "value": "411282" }],


[{
  "label": "宛城区",
  "value": "411302" },

{
  "label": "卧龙区",
  "value": "411303" },

{
  "label": "南召县",
  "value": "411321" },

{
  "label": "方城县",
  "value": "411322" },

{
  "label": "西峡县",
  "value": "411323" },

{
  "label": "镇平县",
  "value": "411324" },

{
  "label": "内乡县",
  "value": "411325" },

{
  "label": "淅川县",
  "value": "411326" },

{
  "label": "社旗县",
  "value": "411327" },

{
  "label": "唐河县",
  "value": "411328" },

{
  "label": "新野县",
  "value": "411329" },

{
  "label": "桐柏县",
  "value": "411330" },

{
  "label": "南阳高新技术产业开发区",
  "value": "411371" },

{
  "label": "南阳市城乡一体化示范区",
  "value": "411372" },

{
  "label": "邓州市",
  "value": "411381" }],


[{
  "label": "梁园区",
  "value": "411402" },

{
  "label": "睢阳区",
  "value": "411403" },

{
  "label": "民权县",
  "value": "411421" },

{
  "label": "睢县",
  "value": "411422" },

{
  "label": "宁陵县",
  "value": "411423" },

{
  "label": "柘城县",
  "value": "411424" },

{
  "label": "虞城县",
  "value": "411425" },

{
  "label": "夏邑县",
  "value": "411426" },

{
  "label": "豫东综合物流产业聚集区",
  "value": "411471" },

{
  "label": "河南商丘经济开发区",
  "value": "411472" },

{
  "label": "永城市",
  "value": "411481" }],


[{
  "label": "浉河区",
  "value": "411502" },

{
  "label": "平桥区",
  "value": "411503" },

{
  "label": "罗山县",
  "value": "411521" },

{
  "label": "光山县",
  "value": "411522" },

{
  "label": "新县",
  "value": "411523" },

{
  "label": "商城县",
  "value": "411524" },

{
  "label": "固始县",
  "value": "411525" },

{
  "label": "潢川县",
  "value": "411526" },

{
  "label": "淮滨县",
  "value": "411527" },

{
  "label": "息县",
  "value": "411528" },

{
  "label": "信阳高新技术产业开发区",
  "value": "411571" }],


[{
  "label": "川汇区",
  "value": "411602" },

{
  "label": "扶沟县",
  "value": "411621" },

{
  "label": "西华县",
  "value": "411622" },

{
  "label": "商水县",
  "value": "411623" },

{
  "label": "沈丘县",
  "value": "411624" },

{
  "label": "郸城县",
  "value": "411625" },

{
  "label": "淮阳县",
  "value": "411626" },

{
  "label": "太康县",
  "value": "411627" },

{
  "label": "鹿邑县",
  "value": "411628" },

{
  "label": "河南周口经济开发区",
  "value": "411671" },

{
  "label": "项城市",
  "value": "411681" }],


[{
  "label": "驿城区",
  "value": "411702" },

{
  "label": "西平县",
  "value": "411721" },

{
  "label": "上蔡县",
  "value": "411722" },

{
  "label": "平舆县",
  "value": "411723" },

{
  "label": "正阳县",
  "value": "411724" },

{
  "label": "确山县",
  "value": "411725" },

{
  "label": "泌阳县",
  "value": "411726" },

{
  "label": "汝南县",
  "value": "411727" },

{
  "label": "遂平县",
  "value": "411728" },

{
  "label": "新蔡县",
  "value": "411729" },

{
  "label": "河南驻马店经济开发区",
  "value": "411771" }],


[{
  "label": "济源市",
  "value": "419001" }]],


[
[{
  "label": "江岸区",
  "value": "420102" },

{
  "label": "江汉区",
  "value": "420103" },

{
  "label": "硚口区",
  "value": "420104" },

{
  "label": "汉阳区",
  "value": "420105" },

{
  "label": "武昌区",
  "value": "420106" },

{
  "label": "青山区",
  "value": "420107" },

{
  "label": "洪山区",
  "value": "420111" },

{
  "label": "东西湖区",
  "value": "420112" },

{
  "label": "汉南区",
  "value": "420113" },

{
  "label": "蔡甸区",
  "value": "420114" },

{
  "label": "江夏区",
  "value": "420115" },

{
  "label": "黄陂区",
  "value": "420116" },

{
  "label": "新洲区",
  "value": "420117" }],


[{
  "label": "黄石港区",
  "value": "420202" },

{
  "label": "西塞山区",
  "value": "420203" },

{
  "label": "下陆区",
  "value": "420204" },

{
  "label": "铁山区",
  "value": "420205" },

{
  "label": "阳新县",
  "value": "420222" },

{
  "label": "大冶市",
  "value": "420281" }],


[{
  "label": "茅箭区",
  "value": "420302" },

{
  "label": "张湾区",
  "value": "420303" },

{
  "label": "郧阳区",
  "value": "420304" },

{
  "label": "郧西县",
  "value": "420322" },

{
  "label": "竹山县",
  "value": "420323" },

{
  "label": "竹溪县",
  "value": "420324" },

{
  "label": "房县",
  "value": "420325" },

{
  "label": "丹江口市",
  "value": "420381" }],


[{
  "label": "西陵区",
  "value": "420502" },

{
  "label": "伍家岗区",
  "value": "420503" },

{
  "label": "点军区",
  "value": "420504" },

{
  "label": "猇亭区",
  "value": "420505" },

{
  "label": "夷陵区",
  "value": "420506" },

{
  "label": "远安县",
  "value": "420525" },

{
  "label": "兴山县",
  "value": "420526" },

{
  "label": "秭归县",
  "value": "420527" },

{
  "label": "长阳土家族自治县",
  "value": "420528" },

{
  "label": "五峰土家族自治县",
  "value": "420529" },

{
  "label": "宜都市",
  "value": "420581" },

{
  "label": "当阳市",
  "value": "420582" },

{
  "label": "枝江市",
  "value": "420583" }],


[{
  "label": "襄城区",
  "value": "420602" },

{
  "label": "樊城区",
  "value": "420606" },

{
  "label": "襄州区",
  "value": "420607" },

{
  "label": "南漳县",
  "value": "420624" },

{
  "label": "谷城县",
  "value": "420625" },

{
  "label": "保康县",
  "value": "420626" },

{
  "label": "老河口市",
  "value": "420682" },

{
  "label": "枣阳市",
  "value": "420683" },

{
  "label": "宜城市",
  "value": "420684" }],


[{
  "label": "梁子湖区",
  "value": "420702" },

{
  "label": "华容区",
  "value": "420703" },

{
  "label": "鄂城区",
  "value": "420704" }],


[{
  "label": "东宝区",
  "value": "420802" },

{
  "label": "掇刀区",
  "value": "420804" },

{
  "label": "京山县",
  "value": "420821" },

{
  "label": "沙洋县",
  "value": "420822" },

{
  "label": "钟祥市",
  "value": "420881" }],


[{
  "label": "孝南区",
  "value": "420902" },

{
  "label": "孝昌县",
  "value": "420921" },

{
  "label": "大悟县",
  "value": "420922" },

{
  "label": "云梦县",
  "value": "420923" },

{
  "label": "应城市",
  "value": "420981" },

{
  "label": "安陆市",
  "value": "420982" },

{
  "label": "汉川市",
  "value": "420984" }],


[{
  "label": "沙市区",
  "value": "421002" },

{
  "label": "荆州区",
  "value": "421003" },

{
  "label": "公安县",
  "value": "421022" },

{
  "label": "监利县",
  "value": "421023" },

{
  "label": "江陵县",
  "value": "421024" },

{
  "label": "荆州经济技术开发区",
  "value": "421071" },

{
  "label": "石首市",
  "value": "421081" },

{
  "label": "洪湖市",
  "value": "421083" },

{
  "label": "松滋市",
  "value": "421087" }],


[{
  "label": "黄州区",
  "value": "421102" },

{
  "label": "团风县",
  "value": "421121" },

{
  "label": "红安县",
  "value": "421122" },

{
  "label": "罗田县",
  "value": "421123" },

{
  "label": "英山县",
  "value": "421124" },

{
  "label": "浠水县",
  "value": "421125" },

{
  "label": "蕲春县",
  "value": "421126" },

{
  "label": "黄梅县",
  "value": "421127" },

{
  "label": "龙感湖管理区",
  "value": "421171" },

{
  "label": "麻城市",
  "value": "421181" },

{
  "label": "武穴市",
  "value": "421182" }],


[{
  "label": "咸安区",
  "value": "421202" },

{
  "label": "嘉鱼县",
  "value": "421221" },

{
  "label": "通城县",
  "value": "421222" },

{
  "label": "崇阳县",
  "value": "421223" },

{
  "label": "通山县",
  "value": "421224" },

{
  "label": "赤壁市",
  "value": "421281" }],


[{
  "label": "曾都区",
  "value": "421303" },

{
  "label": "随县",
  "value": "421321" },

{
  "label": "广水市",
  "value": "421381" }],


[{
  "label": "恩施市",
  "value": "422801" },

{
  "label": "利川市",
  "value": "422802" },

{
  "label": "建始县",
  "value": "422822" },

{
  "label": "巴东县",
  "value": "422823" },

{
  "label": "宣恩县",
  "value": "422825" },

{
  "label": "咸丰县",
  "value": "422826" },

{
  "label": "来凤县",
  "value": "422827" },

{
  "label": "鹤峰县",
  "value": "422828" }],


[{
  "label": "仙桃市",
  "value": "429004" },

{
  "label": "潜江市",
  "value": "429005" },

{
  "label": "天门市",
  "value": "429006" },

{
  "label": "神农架林区",
  "value": "429021" }]],



[
[{
  "label": "芙蓉区",
  "value": "430102" },

{
  "label": "天心区",
  "value": "430103" },

{
  "label": "岳麓区",
  "value": "430104" },

{
  "label": "开福区",
  "value": "430105" },

{
  "label": "雨花区",
  "value": "430111" },

{
  "label": "望城区",
  "value": "430112" },

{
  "label": "长沙县",
  "value": "430121" },

{
  "label": "浏阳市",
  "value": "430181" },

{
  "label": "宁乡市",
  "value": "430182" }],


[{
  "label": "荷塘区",
  "value": "430202" },

{
  "label": "芦淞区",
  "value": "430203" },

{
  "label": "石峰区",
  "value": "430204" },

{
  "label": "天元区",
  "value": "430211" },

{
  "label": "株洲县",
  "value": "430221" },

{
  "label": "攸县",
  "value": "430223" },

{
  "label": "茶陵县",
  "value": "430224" },

{
  "label": "炎陵县",
  "value": "430225" },

{
  "label": "云龙示范区",
  "value": "430271" },

{
  "label": "醴陵市",
  "value": "430281" }],


[{
  "label": "雨湖区",
  "value": "430302" },

{
  "label": "岳塘区",
  "value": "430304" },

{
  "label": "湘潭县",
  "value": "430321" },

{
  "label": "湖南湘潭高新技术产业园区",
  "value": "430371" },

{
  "label": "湘潭昭山示范区",
  "value": "430372" },

{
  "label": "湘潭九华示范区",
  "value": "430373" },

{
  "label": "湘乡市",
  "value": "430381" },

{
  "label": "韶山市",
  "value": "430382" }],


[{
  "label": "珠晖区",
  "value": "430405" },

{
  "label": "雁峰区",
  "value": "430406" },

{
  "label": "石鼓区",
  "value": "430407" },

{
  "label": "蒸湘区",
  "value": "430408" },

{
  "label": "南岳区",
  "value": "430412" },

{
  "label": "衡阳县",
  "value": "430421" },

{
  "label": "衡南县",
  "value": "430422" },

{
  "label": "衡山县",
  "value": "430423" },

{
  "label": "衡东县",
  "value": "430424" },

{
  "label": "祁东县",
  "value": "430426" },

{
  "label": "衡阳综合保税区",
  "value": "430471" },

{
  "label": "湖南衡阳高新技术产业园区",
  "value": "430472" },

{
  "label": "湖南衡阳松木经济开发区",
  "value": "430473" },

{
  "label": "耒阳市",
  "value": "430481" },

{
  "label": "常宁市",
  "value": "430482" }],


[{
  "label": "双清区",
  "value": "430502" },

{
  "label": "大祥区",
  "value": "430503" },

{
  "label": "北塔区",
  "value": "430511" },

{
  "label": "邵东县",
  "value": "430521" },

{
  "label": "新邵县",
  "value": "430522" },

{
  "label": "邵阳县",
  "value": "430523" },

{
  "label": "隆回县",
  "value": "430524" },

{
  "label": "洞口县",
  "value": "430525" },

{
  "label": "绥宁县",
  "value": "430527" },

{
  "label": "新宁县",
  "value": "430528" },

{
  "label": "城步苗族自治县",
  "value": "430529" },

{
  "label": "武冈市",
  "value": "430581" }],


[{
  "label": "岳阳楼区",
  "value": "430602" },

{
  "label": "云溪区",
  "value": "430603" },

{
  "label": "君山区",
  "value": "430611" },

{
  "label": "岳阳县",
  "value": "430621" },

{
  "label": "华容县",
  "value": "430623" },

{
  "label": "湘阴县",
  "value": "430624" },

{
  "label": "平江县",
  "value": "430626" },

{
  "label": "岳阳市屈原管理区",
  "value": "430671" },

{
  "label": "汨罗市",
  "value": "430681" },

{
  "label": "临湘市",
  "value": "430682" }],


[{
  "label": "武陵区",
  "value": "430702" },

{
  "label": "鼎城区",
  "value": "430703" },

{
  "label": "安乡县",
  "value": "430721" },

{
  "label": "汉寿县",
  "value": "430722" },

{
  "label": "澧县",
  "value": "430723" },

{
  "label": "临澧县",
  "value": "430724" },

{
  "label": "桃源县",
  "value": "430725" },

{
  "label": "石门县",
  "value": "430726" },

{
  "label": "常德市西洞庭管理区",
  "value": "430771" },

{
  "label": "津市市",
  "value": "430781" }],


[{
  "label": "永定区",
  "value": "430802" },

{
  "label": "武陵源区",
  "value": "430811" },

{
  "label": "慈利县",
  "value": "430821" },

{
  "label": "桑植县",
  "value": "430822" }],


[{
  "label": "资阳区",
  "value": "430902" },

{
  "label": "赫山区",
  "value": "430903" },

{
  "label": "南县",
  "value": "430921" },

{
  "label": "桃江县",
  "value": "430922" },

{
  "label": "安化县",
  "value": "430923" },

{
  "label": "益阳市大通湖管理区",
  "value": "430971" },

{
  "label": "湖南益阳高新技术产业园区",
  "value": "430972" },

{
  "label": "沅江市",
  "value": "430981" }],


[{
  "label": "北湖区",
  "value": "431002" },

{
  "label": "苏仙区",
  "value": "431003" },

{
  "label": "桂阳县",
  "value": "431021" },

{
  "label": "宜章县",
  "value": "431022" },

{
  "label": "永兴县",
  "value": "431023" },

{
  "label": "嘉禾县",
  "value": "431024" },

{
  "label": "临武县",
  "value": "431025" },

{
  "label": "汝城县",
  "value": "431026" },

{
  "label": "桂东县",
  "value": "431027" },

{
  "label": "安仁县",
  "value": "431028" },

{
  "label": "资兴市",
  "value": "431081" }],


[{
  "label": "零陵区",
  "value": "431102" },

{
  "label": "冷水滩区",
  "value": "431103" },

{
  "label": "祁阳县",
  "value": "431121" },

{
  "label": "东安县",
  "value": "431122" },

{
  "label": "双牌县",
  "value": "431123" },

{
  "label": "道县",
  "value": "431124" },

{
  "label": "江永县",
  "value": "431125" },

{
  "label": "宁远县",
  "value": "431126" },

{
  "label": "蓝山县",
  "value": "431127" },

{
  "label": "新田县",
  "value": "431128" },

{
  "label": "江华瑶族自治县",
  "value": "431129" },

{
  "label": "永州经济技术开发区",
  "value": "431171" },

{
  "label": "永州市金洞管理区",
  "value": "431172" },

{
  "label": "永州市回龙圩管理区",
  "value": "431173" }],


[{
  "label": "鹤城区",
  "value": "431202" },

{
  "label": "中方县",
  "value": "431221" },

{
  "label": "沅陵县",
  "value": "431222" },

{
  "label": "辰溪县",
  "value": "431223" },

{
  "label": "溆浦县",
  "value": "431224" },

{
  "label": "会同县",
  "value": "431225" },

{
  "label": "麻阳苗族自治县",
  "value": "431226" },

{
  "label": "新晃侗族自治县",
  "value": "431227" },

{
  "label": "芷江侗族自治县",
  "value": "431228" },

{
  "label": "靖州苗族侗族自治县",
  "value": "431229" },

{
  "label": "通道侗族自治县",
  "value": "431230" },

{
  "label": "怀化市洪江管理区",
  "value": "431271" },

{
  "label": "洪江市",
  "value": "431281" }],


[{
  "label": "娄星区",
  "value": "431302" },

{
  "label": "双峰县",
  "value": "431321" },

{
  "label": "新化县",
  "value": "431322" },

{
  "label": "冷水江市",
  "value": "431381" },

{
  "label": "涟源市",
  "value": "431382" }],


[{
  "label": "吉首市",
  "value": "433101" },

{
  "label": "泸溪县",
  "value": "433122" },

{
  "label": "凤凰县",
  "value": "433123" },

{
  "label": "花垣县",
  "value": "433124" },

{
  "label": "保靖县",
  "value": "433125" },

{
  "label": "古丈县",
  "value": "433126" },

{
  "label": "永顺县",
  "value": "433127" },

{
  "label": "龙山县",
  "value": "433130" },

{
  "label": "湖南吉首经济开发区",
  "value": "433172" },

{
  "label": "湖南永顺经济开发区",
  "value": "433173" }]],



[
[{
  "label": "荔湾区",
  "value": "440103" },

{
  "label": "越秀区",
  "value": "440104" },

{
  "label": "海珠区",
  "value": "440105" },

{
  "label": "天河区",
  "value": "440106" },

{
  "label": "白云区",
  "value": "440111" },

{
  "label": "黄埔区",
  "value": "440112" },

{
  "label": "番禺区",
  "value": "440113" },

{
  "label": "花都区",
  "value": "440114" },

{
  "label": "南沙区",
  "value": "440115" },

{
  "label": "从化区",
  "value": "440117" },

{
  "label": "增城区",
  "value": "440118" }],


[{
  "label": "武江区",
  "value": "440203" },

{
  "label": "浈江区",
  "value": "440204" },

{
  "label": "曲江区",
  "value": "440205" },

{
  "label": "始兴县",
  "value": "440222" },

{
  "label": "仁化县",
  "value": "440224" },

{
  "label": "翁源县",
  "value": "440229" },

{
  "label": "乳源瑶族自治县",
  "value": "440232" },

{
  "label": "新丰县",
  "value": "440233" },

{
  "label": "乐昌市",
  "value": "440281" },

{
  "label": "南雄市",
  "value": "440282" }],


[{
  "label": "罗湖区",
  "value": "440303" },

{
  "label": "福田区",
  "value": "440304" },

{
  "label": "南山区",
  "value": "440305" },

{
  "label": "宝安区",
  "value": "440306" },

{
  "label": "龙岗区",
  "value": "440307" },

{
  "label": "盐田区",
  "value": "440308" },

{
  "label": "龙华区",
  "value": "440309" },

{
  "label": "坪山区",
  "value": "440310" }],


[{
  "label": "香洲区",
  "value": "440402" },

{
  "label": "斗门区",
  "value": "440403" },

{
  "label": "金湾区",
  "value": "440404" }],


[{
  "label": "龙湖区",
  "value": "440507" },

{
  "label": "金平区",
  "value": "440511" },

{
  "label": "濠江区",
  "value": "440512" },

{
  "label": "潮阳区",
  "value": "440513" },

{
  "label": "潮南区",
  "value": "440514" },

{
  "label": "澄海区",
  "value": "440515" },

{
  "label": "南澳县",
  "value": "440523" }],


[{
  "label": "禅城区",
  "value": "440604" },

{
  "label": "南海区",
  "value": "440605" },

{
  "label": "顺德区",
  "value": "440606" },

{
  "label": "三水区",
  "value": "440607" },

{
  "label": "高明区",
  "value": "440608" }],


[{
  "label": "蓬江区",
  "value": "440703" },

{
  "label": "江海区",
  "value": "440704" },

{
  "label": "新会区",
  "value": "440705" },

{
  "label": "台山市",
  "value": "440781" },

{
  "label": "开平市",
  "value": "440783" },

{
  "label": "鹤山市",
  "value": "440784" },

{
  "label": "恩平市",
  "value": "440785" }],


[{
  "label": "赤坎区",
  "value": "440802" },

{
  "label": "霞山区",
  "value": "440803" },

{
  "label": "坡头区",
  "value": "440804" },

{
  "label": "麻章区",
  "value": "440811" },

{
  "label": "遂溪县",
  "value": "440823" },

{
  "label": "徐闻县",
  "value": "440825" },

{
  "label": "廉江市",
  "value": "440881" },

{
  "label": "雷州市",
  "value": "440882" },

{
  "label": "吴川市",
  "value": "440883" }],


[{
  "label": "茂南区",
  "value": "440902" },

{
  "label": "电白区",
  "value": "440904" },

{
  "label": "高州市",
  "value": "440981" },

{
  "label": "化州市",
  "value": "440982" },

{
  "label": "信宜市",
  "value": "440983" }],


[{
  "label": "端州区",
  "value": "441202" },

{
  "label": "鼎湖区",
  "value": "441203" },

{
  "label": "高要区",
  "value": "441204" },

{
  "label": "广宁县",
  "value": "441223" },

{
  "label": "怀集县",
  "value": "441224" },

{
  "label": "封开县",
  "value": "441225" },

{
  "label": "德庆县",
  "value": "441226" },

{
  "label": "四会市",
  "value": "441284" }],


[{
  "label": "惠城区",
  "value": "441302" },

{
  "label": "惠阳区",
  "value": "441303" },

{
  "label": "博罗县",
  "value": "441322" },

{
  "label": "惠东县",
  "value": "441323" },

{
  "label": "龙门县",
  "value": "441324" }],


[{
  "label": "梅江区",
  "value": "441402" },

{
  "label": "梅县区",
  "value": "441403" },

{
  "label": "大埔县",
  "value": "441422" },

{
  "label": "丰顺县",
  "value": "441423" },

{
  "label": "五华县",
  "value": "441424" },

{
  "label": "平远县",
  "value": "441426" },

{
  "label": "蕉岭县",
  "value": "441427" },

{
  "label": "兴宁市",
  "value": "441481" }],


[{
  "label": "城区",
  "value": "441502" },

{
  "label": "海丰县",
  "value": "441521" },

{
  "label": "陆河县",
  "value": "441523" },

{
  "label": "陆丰市",
  "value": "441581" }],


[{
  "label": "源城区",
  "value": "441602" },

{
  "label": "紫金县",
  "value": "441621" },

{
  "label": "龙川县",
  "value": "441622" },

{
  "label": "连平县",
  "value": "441623" },

{
  "label": "和平县",
  "value": "441624" },

{
  "label": "东源县",
  "value": "441625" }],


[{
  "label": "江城区",
  "value": "441702" },

{
  "label": "阳东区",
  "value": "441704" },

{
  "label": "阳西县",
  "value": "441721" },

{
  "label": "阳春市",
  "value": "441781" }],


[{
  "label": "清城区",
  "value": "441802" },

{
  "label": "清新区",
  "value": "441803" },

{
  "label": "佛冈县",
  "value": "441821" },

{
  "label": "阳山县",
  "value": "441823" },

{
  "label": "连山壮族瑶族自治县",
  "value": "441825" },

{
  "label": "连南瑶族自治县",
  "value": "441826" },

{
  "label": "英德市",
  "value": "441881" },

{
  "label": "连州市",
  "value": "441882" }],


[{
  "label": "东莞市",
  "value": "441900" }],

[{
  "label": "中山市",
  "value": "442000" }],

[{
  "label": "湘桥区",
  "value": "445102" },

{
  "label": "潮安区",
  "value": "445103" },

{
  "label": "饶平县",
  "value": "445122" }],


[{
  "label": "榕城区",
  "value": "445202" },

{
  "label": "揭东区",
  "value": "445203" },

{
  "label": "揭西县",
  "value": "445222" },

{
  "label": "惠来县",
  "value": "445224" },

{
  "label": "普宁市",
  "value": "445281" }],


[{
  "label": "云城区",
  "value": "445302" },

{
  "label": "云安区",
  "value": "445303" },

{
  "label": "新兴县",
  "value": "445321" },

{
  "label": "郁南县",
  "value": "445322" },

{
  "label": "罗定市",
  "value": "445381" }]],



[
[{
  "label": "兴宁区",
  "value": "450102" },

{
  "label": "青秀区",
  "value": "450103" },

{
  "label": "江南区",
  "value": "450105" },

{
  "label": "西乡塘区",
  "value": "450107" },

{
  "label": "良庆区",
  "value": "450108" },

{
  "label": "邕宁区",
  "value": "450109" },

{
  "label": "武鸣区",
  "value": "450110" },

{
  "label": "隆安县",
  "value": "450123" },

{
  "label": "马山县",
  "value": "450124" },

{
  "label": "上林县",
  "value": "450125" },

{
  "label": "宾阳县",
  "value": "450126" },

{
  "label": "横县",
  "value": "450127" }],


[{
  "label": "城中区",
  "value": "450202" },

{
  "label": "鱼峰区",
  "value": "450203" },

{
  "label": "柳南区",
  "value": "450204" },

{
  "label": "柳北区",
  "value": "450205" },

{
  "label": "柳江区",
  "value": "450206" },

{
  "label": "柳城县",
  "value": "450222" },

{
  "label": "鹿寨县",
  "value": "450223" },

{
  "label": "融安县",
  "value": "450224" },

{
  "label": "融水苗族自治县",
  "value": "450225" },

{
  "label": "三江侗族自治县",
  "value": "450226" }],


[{
  "label": "秀峰区",
  "value": "450302" },

{
  "label": "叠彩区",
  "value": "450303" },

{
  "label": "象山区",
  "value": "450304" },

{
  "label": "七星区",
  "value": "450305" },

{
  "label": "雁山区",
  "value": "450311" },

{
  "label": "临桂区",
  "value": "450312" },

{
  "label": "阳朔县",
  "value": "450321" },

{
  "label": "灵川县",
  "value": "450323" },

{
  "label": "全州县",
  "value": "450324" },

{
  "label": "兴安县",
  "value": "450325" },

{
  "label": "永福县",
  "value": "450326" },

{
  "label": "灌阳县",
  "value": "450327" },

{
  "label": "龙胜各族自治县",
  "value": "450328" },

{
  "label": "资源县",
  "value": "450329" },

{
  "label": "平乐县",
  "value": "450330" },

{
  "label": "荔浦县",
  "value": "450331" },

{
  "label": "恭城瑶族自治县",
  "value": "450332" }],


[{
  "label": "万秀区",
  "value": "450403" },

{
  "label": "长洲区",
  "value": "450405" },

{
  "label": "龙圩区",
  "value": "450406" },

{
  "label": "苍梧县",
  "value": "450421" },

{
  "label": "藤县",
  "value": "450422" },

{
  "label": "蒙山县",
  "value": "450423" },

{
  "label": "岑溪市",
  "value": "450481" }],


[{
  "label": "海城区",
  "value": "450502" },

{
  "label": "银海区",
  "value": "450503" },

{
  "label": "铁山港区",
  "value": "450512" },

{
  "label": "合浦县",
  "value": "450521" }],


[{
  "label": "港口区",
  "value": "450602" },

{
  "label": "防城区",
  "value": "450603" },

{
  "label": "上思县",
  "value": "450621" },

{
  "label": "东兴市",
  "value": "450681" }],


[{
  "label": "钦南区",
  "value": "450702" },

{
  "label": "钦北区",
  "value": "450703" },

{
  "label": "灵山县",
  "value": "450721" },

{
  "label": "浦北县",
  "value": "450722" }],


[{
  "label": "港北区",
  "value": "450802" },

{
  "label": "港南区",
  "value": "450803" },

{
  "label": "覃塘区",
  "value": "450804" },

{
  "label": "平南县",
  "value": "450821" },

{
  "label": "桂平市",
  "value": "450881" }],


[{
  "label": "玉州区",
  "value": "450902" },

{
  "label": "福绵区",
  "value": "450903" },

{
  "label": "容县",
  "value": "450921" },

{
  "label": "陆川县",
  "value": "450922" },

{
  "label": "博白县",
  "value": "450923" },

{
  "label": "兴业县",
  "value": "450924" },

{
  "label": "北流市",
  "value": "450981" }],


[{
  "label": "右江区",
  "value": "451002" },

{
  "label": "田阳县",
  "value": "451021" },

{
  "label": "田东县",
  "value": "451022" },

{
  "label": "平果县",
  "value": "451023" },

{
  "label": "德保县",
  "value": "451024" },

{
  "label": "那坡县",
  "value": "451026" },

{
  "label": "凌云县",
  "value": "451027" },

{
  "label": "乐业县",
  "value": "451028" },

{
  "label": "田林县",
  "value": "451029" },

{
  "label": "西林县",
  "value": "451030" },

{
  "label": "隆林各族自治县",
  "value": "451031" },

{
  "label": "靖西市",
  "value": "451081" }],


[{
  "label": "八步区",
  "value": "451102" },

{
  "label": "平桂区",
  "value": "451103" },

{
  "label": "昭平县",
  "value": "451121" },

{
  "label": "钟山县",
  "value": "451122" },

{
  "label": "富川瑶族自治县",
  "value": "451123" }],


[{
  "label": "金城江区",
  "value": "451202" },

{
  "label": "宜州区",
  "value": "451203" },

{
  "label": "南丹县",
  "value": "451221" },

{
  "label": "天峨县",
  "value": "451222" },

{
  "label": "凤山县",
  "value": "451223" },

{
  "label": "东兰县",
  "value": "451224" },

{
  "label": "罗城仫佬族自治县",
  "value": "451225" },

{
  "label": "环江毛南族自治县",
  "value": "451226" },

{
  "label": "巴马瑶族自治县",
  "value": "451227" },

{
  "label": "都安瑶族自治县",
  "value": "451228" },

{
  "label": "大化瑶族自治县",
  "value": "451229" }],


[{
  "label": "兴宾区",
  "value": "451302" },

{
  "label": "忻城县",
  "value": "451321" },

{
  "label": "象州县",
  "value": "451322" },

{
  "label": "武宣县",
  "value": "451323" },

{
  "label": "金秀瑶族自治县",
  "value": "451324" },

{
  "label": "合山市",
  "value": "451381" }],


[{
  "label": "江州区",
  "value": "451402" },

{
  "label": "扶绥县",
  "value": "451421" },

{
  "label": "宁明县",
  "value": "451422" },

{
  "label": "龙州县",
  "value": "451423" },

{
  "label": "大新县",
  "value": "451424" },

{
  "label": "天等县",
  "value": "451425" },

{
  "label": "凭祥市",
  "value": "451481" }]],



[
[{
  "label": "秀英区",
  "value": "460105" },

{
  "label": "龙华区",
  "value": "460106" },

{
  "label": "琼山区",
  "value": "460107" },

{
  "label": "美兰区",
  "value": "460108" }],


[{
  "label": "海棠区",
  "value": "460202" },

{
  "label": "吉阳区",
  "value": "460203" },

{
  "label": "天涯区",
  "value": "460204" },

{
  "label": "崖州区",
  "value": "460205" }],


[{
  "label": "西沙群岛",
  "value": "460321" },

{
  "label": "南沙群岛",
  "value": "460322" },

{
  "label": "中沙群岛的岛礁及其海域",
  "value": "460323" }],


[{
  "label": "儋州市",
  "value": "460400" }],

[{
  "label": "五指山市",
  "value": "469001" },

{
  "label": "琼海市",
  "value": "469002" },

{
  "label": "文昌市",
  "value": "469005" },

{
  "label": "万宁市",
  "value": "469006" },

{
  "label": "东方市",
  "value": "469007" },

{
  "label": "定安县",
  "value": "469021" },

{
  "label": "屯昌县",
  "value": "469022" },

{
  "label": "澄迈县",
  "value": "469023" },

{
  "label": "临高县",
  "value": "469024" },

{
  "label": "白沙黎族自治县",
  "value": "469025" },

{
  "label": "昌江黎族自治县",
  "value": "469026" },

{
  "label": "乐东黎族自治县",
  "value": "469027" },

{
  "label": "陵水黎族自治县",
  "value": "469028" },

{
  "label": "保亭黎族苗族自治县",
  "value": "469029" },

{
  "label": "琼中黎族苗族自治县",
  "value": "469030" }]],



[
[{
  "label": "万州区",
  "value": "500101" },

{
  "label": "涪陵区",
  "value": "500102" },

{
  "label": "渝中区",
  "value": "500103" },

{
  "label": "大渡口区",
  "value": "500104" },

{
  "label": "江北区",
  "value": "500105" },

{
  "label": "沙坪坝区",
  "value": "500106" },

{
  "label": "九龙坡区",
  "value": "500107" },

{
  "label": "南岸区",
  "value": "500108" },

{
  "label": "北碚区",
  "value": "500109" },

{
  "label": "綦江区",
  "value": "500110" },

{
  "label": "大足区",
  "value": "500111" },

{
  "label": "渝北区",
  "value": "500112" },

{
  "label": "巴南区",
  "value": "500113" },

{
  "label": "黔江区",
  "value": "500114" },

{
  "label": "长寿区",
  "value": "500115" },

{
  "label": "江津区",
  "value": "500116" },

{
  "label": "合川区",
  "value": "500117" },

{
  "label": "永川区",
  "value": "500118" },

{
  "label": "南川区",
  "value": "500119" },

{
  "label": "璧山区",
  "value": "500120" },

{
  "label": "铜梁区",
  "value": "500151" },

{
  "label": "潼南区",
  "value": "500152" },

{
  "label": "荣昌区",
  "value": "500153" },

{
  "label": "开州区",
  "value": "500154" },

{
  "label": "梁平区",
  "value": "500155" },

{
  "label": "武隆区",
  "value": "500156" }],


[{
  "label": "城口县",
  "value": "500229" },

{
  "label": "丰都县",
  "value": "500230" },

{
  "label": "垫江县",
  "value": "500231" },

{
  "label": "忠县",
  "value": "500233" },

{
  "label": "云阳县",
  "value": "500235" },

{
  "label": "奉节县",
  "value": "500236" },

{
  "label": "巫山县",
  "value": "500237" },

{
  "label": "巫溪县",
  "value": "500238" },

{
  "label": "石柱土家族自治县",
  "value": "500240" },

{
  "label": "秀山土家族苗族自治县",
  "value": "500241" },

{
  "label": "酉阳土家族苗族自治县",
  "value": "500242" },

{
  "label": "彭水苗族土家族自治县",
  "value": "500243" }]],



[
[{
  "label": "锦江区",
  "value": "510104" },

{
  "label": "青羊区",
  "value": "510105" },

{
  "label": "金牛区",
  "value": "510106" },

{
  "label": "武侯区",
  "value": "510107" },

{
  "label": "成华区",
  "value": "510108" },

{
  "label": "龙泉驿区",
  "value": "510112" },

{
  "label": "青白江区",
  "value": "510113" },

{
  "label": "新都区",
  "value": "510114" },

{
  "label": "温江区",
  "value": "510115" },

{
  "label": "双流区",
  "value": "510116" },

{
  "label": "郫都区",
  "value": "510117" },

{
  "label": "金堂县",
  "value": "510121" },

{
  "label": "大邑县",
  "value": "510129" },

{
  "label": "蒲江县",
  "value": "510131" },

{
  "label": "新津县",
  "value": "510132" },

{
  "label": "都江堰市",
  "value": "510181" },

{
  "label": "彭州市",
  "value": "510182" },

{
  "label": "邛崃市",
  "value": "510183" },

{
  "label": "崇州市",
  "value": "510184" },

{
  "label": "简阳市",
  "value": "510185" }],


[{
  "label": "自流井区",
  "value": "510302" },

{
  "label": "贡井区",
  "value": "510303" },

{
  "label": "大安区",
  "value": "510304" },

{
  "label": "沿滩区",
  "value": "510311" },

{
  "label": "荣县",
  "value": "510321" },

{
  "label": "富顺县",
  "value": "510322" }],


[{
  "label": "东区",
  "value": "510402" },

{
  "label": "西区",
  "value": "510403" },

{
  "label": "仁和区",
  "value": "510411" },

{
  "label": "米易县",
  "value": "510421" },

{
  "label": "盐边县",
  "value": "510422" }],


[{
  "label": "江阳区",
  "value": "510502" },

{
  "label": "纳溪区",
  "value": "510503" },

{
  "label": "龙马潭区",
  "value": "510504" },

{
  "label": "泸县",
  "value": "510521" },

{
  "label": "合江县",
  "value": "510522" },

{
  "label": "叙永县",
  "value": "510524" },

{
  "label": "古蔺县",
  "value": "510525" }],


[{
  "label": "旌阳区",
  "value": "510603" },

{
  "label": "罗江区",
  "value": "510604" },

{
  "label": "中江县",
  "value": "510623" },

{
  "label": "广汉市",
  "value": "510681" },

{
  "label": "什邡市",
  "value": "510682" },

{
  "label": "绵竹市",
  "value": "510683" }],


[{
  "label": "涪城区",
  "value": "510703" },

{
  "label": "游仙区",
  "value": "510704" },

{
  "label": "安州区",
  "value": "510705" },

{
  "label": "三台县",
  "value": "510722" },

{
  "label": "盐亭县",
  "value": "510723" },

{
  "label": "梓潼县",
  "value": "510725" },

{
  "label": "北川羌族自治县",
  "value": "510726" },

{
  "label": "平武县",
  "value": "510727" },

{
  "label": "江油市",
  "value": "510781" }],


[{
  "label": "利州区",
  "value": "510802" },

{
  "label": "昭化区",
  "value": "510811" },

{
  "label": "朝天区",
  "value": "510812" },

{
  "label": "旺苍县",
  "value": "510821" },

{
  "label": "青川县",
  "value": "510822" },

{
  "label": "剑阁县",
  "value": "510823" },

{
  "label": "苍溪县",
  "value": "510824" }],


[{
  "label": "船山区",
  "value": "510903" },

{
  "label": "安居区",
  "value": "510904" },

{
  "label": "蓬溪县",
  "value": "510921" },

{
  "label": "射洪县",
  "value": "510922" },

{
  "label": "大英县",
  "value": "510923" }],


[{
  "label": "市中区",
  "value": "511002" },

{
  "label": "东兴区",
  "value": "511011" },

{
  "label": "威远县",
  "value": "511024" },

{
  "label": "资中县",
  "value": "511025" },

{
  "label": "内江经济开发区",
  "value": "511071" },

{
  "label": "隆昌市",
  "value": "511083" }],


[{
  "label": "市中区",
  "value": "511102" },

{
  "label": "沙湾区",
  "value": "511111" },

{
  "label": "五通桥区",
  "value": "511112" },

{
  "label": "金口河区",
  "value": "511113" },

{
  "label": "犍为县",
  "value": "511123" },

{
  "label": "井研县",
  "value": "511124" },

{
  "label": "夹江县",
  "value": "511126" },

{
  "label": "沐川县",
  "value": "511129" },

{
  "label": "峨边彝族自治县",
  "value": "511132" },

{
  "label": "马边彝族自治县",
  "value": "511133" },

{
  "label": "峨眉山市",
  "value": "511181" }],


[{
  "label": "顺庆区",
  "value": "511302" },

{
  "label": "高坪区",
  "value": "511303" },

{
  "label": "嘉陵区",
  "value": "511304" },

{
  "label": "南部县",
  "value": "511321" },

{
  "label": "营山县",
  "value": "511322" },

{
  "label": "蓬安县",
  "value": "511323" },

{
  "label": "仪陇县",
  "value": "511324" },

{
  "label": "西充县",
  "value": "511325" },

{
  "label": "阆中市",
  "value": "511381" }],


[{
  "label": "东坡区",
  "value": "511402" },

{
  "label": "彭山区",
  "value": "511403" },

{
  "label": "仁寿县",
  "value": "511421" },

{
  "label": "洪雅县",
  "value": "511423" },

{
  "label": "丹棱县",
  "value": "511424" },

{
  "label": "青神县",
  "value": "511425" }],


[{
  "label": "翠屏区",
  "value": "511502" },

{
  "label": "南溪区",
  "value": "511503" },

{
  "label": "宜宾县",
  "value": "511521" },

{
  "label": "江安县",
  "value": "511523" },

{
  "label": "长宁县",
  "value": "511524" },

{
  "label": "高县",
  "value": "511525" },

{
  "label": "珙县",
  "value": "511526" },

{
  "label": "筠连县",
  "value": "511527" },

{
  "label": "兴文县",
  "value": "511528" },

{
  "label": "屏山县",
  "value": "511529" }],


[{
  "label": "广安区",
  "value": "511602" },

{
  "label": "前锋区",
  "value": "511603" },

{
  "label": "岳池县",
  "value": "511621" },

{
  "label": "武胜县",
  "value": "511622" },

{
  "label": "邻水县",
  "value": "511623" },

{
  "label": "华蓥市",
  "value": "511681" }],


[{
  "label": "通川区",
  "value": "511702" },

{
  "label": "达川区",
  "value": "511703" },

{
  "label": "宣汉县",
  "value": "511722" },

{
  "label": "开江县",
  "value": "511723" },

{
  "label": "大竹县",
  "value": "511724" },

{
  "label": "渠县",
  "value": "511725" },

{
  "label": "达州经济开发区",
  "value": "511771" },

{
  "label": "万源市",
  "value": "511781" }],


[{
  "label": "雨城区",
  "value": "511802" },

{
  "label": "名山区",
  "value": "511803" },

{
  "label": "荥经县",
  "value": "511822" },

{
  "label": "汉源县",
  "value": "511823" },

{
  "label": "石棉县",
  "value": "511824" },

{
  "label": "天全县",
  "value": "511825" },

{
  "label": "芦山县",
  "value": "511826" },

{
  "label": "宝兴县",
  "value": "511827" }],


[{
  "label": "巴州区",
  "value": "511902" },

{
  "label": "恩阳区",
  "value": "511903" },

{
  "label": "通江县",
  "value": "511921" },

{
  "label": "南江县",
  "value": "511922" },

{
  "label": "平昌县",
  "value": "511923" },

{
  "label": "巴中经济开发区",
  "value": "511971" }],


[{
  "label": "雁江区",
  "value": "512002" },

{
  "label": "安岳县",
  "value": "512021" },

{
  "label": "乐至县",
  "value": "512022" }],


[{
  "label": "马尔康市",
  "value": "513201" },

{
  "label": "汶川县",
  "value": "513221" },

{
  "label": "理县",
  "value": "513222" },

{
  "label": "茂县",
  "value": "513223" },

{
  "label": "松潘县",
  "value": "513224" },

{
  "label": "九寨沟县",
  "value": "513225" },

{
  "label": "金川县",
  "value": "513226" },

{
  "label": "小金县",
  "value": "513227" },

{
  "label": "黑水县",
  "value": "513228" },

{
  "label": "壤塘县",
  "value": "513230" },

{
  "label": "阿坝县",
  "value": "513231" },

{
  "label": "若尔盖县",
  "value": "513232" },

{
  "label": "红原县",
  "value": "513233" }],


[{
  "label": "康定市",
  "value": "513301" },

{
  "label": "泸定县",
  "value": "513322" },

{
  "label": "丹巴县",
  "value": "513323" },

{
  "label": "九龙县",
  "value": "513324" },

{
  "label": "雅江县",
  "value": "513325" },

{
  "label": "道孚县",
  "value": "513326" },

{
  "label": "炉霍县",
  "value": "513327" },

{
  "label": "甘孜县",
  "value": "513328" },

{
  "label": "新龙县",
  "value": "513329" },

{
  "label": "德格县",
  "value": "513330" },

{
  "label": "白玉县",
  "value": "513331" },

{
  "label": "石渠县",
  "value": "513332" },

{
  "label": "色达县",
  "value": "513333" },

{
  "label": "理塘县",
  "value": "513334" },

{
  "label": "巴塘县",
  "value": "513335" },

{
  "label": "乡城县",
  "value": "513336" },

{
  "label": "稻城县",
  "value": "513337" },

{
  "label": "得荣县",
  "value": "513338" }],


[{
  "label": "西昌市",
  "value": "513401" },

{
  "label": "木里藏族自治县",
  "value": "513422" },

{
  "label": "盐源县",
  "value": "513423" },

{
  "label": "德昌县",
  "value": "513424" },

{
  "label": "会理县",
  "value": "513425" },

{
  "label": "会东县",
  "value": "513426" },

{
  "label": "宁南县",
  "value": "513427" },

{
  "label": "普格县",
  "value": "513428" },

{
  "label": "布拖县",
  "value": "513429" },

{
  "label": "金阳县",
  "value": "513430" },

{
  "label": "昭觉县",
  "value": "513431" },

{
  "label": "喜德县",
  "value": "513432" },

{
  "label": "冕宁县",
  "value": "513433" },

{
  "label": "越西县",
  "value": "513434" },

{
  "label": "甘洛县",
  "value": "513435" },

{
  "label": "美姑县",
  "value": "513436" },

{
  "label": "雷波县",
  "value": "513437" }]],



[
[{
  "label": "南明区",
  "value": "520102" },

{
  "label": "云岩区",
  "value": "520103" },

{
  "label": "花溪区",
  "value": "520111" },

{
  "label": "乌当区",
  "value": "520112" },

{
  "label": "白云区",
  "value": "520113" },

{
  "label": "观山湖区",
  "value": "520115" },

{
  "label": "开阳县",
  "value": "520121" },

{
  "label": "息烽县",
  "value": "520122" },

{
  "label": "修文县",
  "value": "520123" },

{
  "label": "清镇市",
  "value": "520181" }],


[{
  "label": "钟山区",
  "value": "520201" },

{
  "label": "六枝特区",
  "value": "520203" },

{
  "label": "水城县",
  "value": "520221" },

{
  "label": "盘州市",
  "value": "520281" }],


[{
  "label": "红花岗区",
  "value": "520302" },

{
  "label": "汇川区",
  "value": "520303" },

{
  "label": "播州区",
  "value": "520304" },

{
  "label": "桐梓县",
  "value": "520322" },

{
  "label": "绥阳县",
  "value": "520323" },

{
  "label": "正安县",
  "value": "520324" },

{
  "label": "道真仡佬族苗族自治县",
  "value": "520325" },

{
  "label": "务川仡佬族苗族自治县",
  "value": "520326" },

{
  "label": "凤冈县",
  "value": "520327" },

{
  "label": "湄潭县",
  "value": "520328" },

{
  "label": "余庆县",
  "value": "520329" },

{
  "label": "习水县",
  "value": "520330" },

{
  "label": "赤水市",
  "value": "520381" },

{
  "label": "仁怀市",
  "value": "520382" }],


[{
  "label": "西秀区",
  "value": "520402" },

{
  "label": "平坝区",
  "value": "520403" },

{
  "label": "普定县",
  "value": "520422" },

{
  "label": "镇宁布依族苗族自治县",
  "value": "520423" },

{
  "label": "关岭布依族苗族自治县",
  "value": "520424" },

{
  "label": "紫云苗族布依族自治县",
  "value": "520425" }],


[{
  "label": "七星关区",
  "value": "520502" },

{
  "label": "大方县",
  "value": "520521" },

{
  "label": "黔西县",
  "value": "520522" },

{
  "label": "金沙县",
  "value": "520523" },

{
  "label": "织金县",
  "value": "520524" },

{
  "label": "纳雍县",
  "value": "520525" },

{
  "label": "威宁彝族回族苗族自治县",
  "value": "520526" },

{
  "label": "赫章县",
  "value": "520527" }],


[{
  "label": "碧江区",
  "value": "520602" },

{
  "label": "万山区",
  "value": "520603" },

{
  "label": "江口县",
  "value": "520621" },

{
  "label": "玉屏侗族自治县",
  "value": "520622" },

{
  "label": "石阡县",
  "value": "520623" },

{
  "label": "思南县",
  "value": "520624" },

{
  "label": "印江土家族苗族自治县",
  "value": "520625" },

{
  "label": "德江县",
  "value": "520626" },

{
  "label": "沿河土家族自治县",
  "value": "520627" },

{
  "label": "松桃苗族自治县",
  "value": "520628" }],


[{
  "label": "兴义市",
  "value": "522301" },

{
  "label": "兴仁县",
  "value": "522322" },

{
  "label": "普安县",
  "value": "522323" },

{
  "label": "晴隆县",
  "value": "522324" },

{
  "label": "贞丰县",
  "value": "522325" },

{
  "label": "望谟县",
  "value": "522326" },

{
  "label": "册亨县",
  "value": "522327" },

{
  "label": "安龙县",
  "value": "522328" }],


[{
  "label": "凯里市",
  "value": "522601" },

{
  "label": "黄平县",
  "value": "522622" },

{
  "label": "施秉县",
  "value": "522623" },

{
  "label": "三穗县",
  "value": "522624" },

{
  "label": "镇远县",
  "value": "522625" },

{
  "label": "岑巩县",
  "value": "522626" },

{
  "label": "天柱县",
  "value": "522627" },

{
  "label": "锦屏县",
  "value": "522628" },

{
  "label": "剑河县",
  "value": "522629" },

{
  "label": "台江县",
  "value": "522630" },

{
  "label": "黎平县",
  "value": "522631" },

{
  "label": "榕江县",
  "value": "522632" },

{
  "label": "从江县",
  "value": "522633" },

{
  "label": "雷山县",
  "value": "522634" },

{
  "label": "麻江县",
  "value": "522635" },

{
  "label": "丹寨县",
  "value": "522636" }],


[{
  "label": "都匀市",
  "value": "522701" },

{
  "label": "福泉市",
  "value": "522702" },

{
  "label": "荔波县",
  "value": "522722" },

{
  "label": "贵定县",
  "value": "522723" },

{
  "label": "瓮安县",
  "value": "522725" },

{
  "label": "独山县",
  "value": "522726" },

{
  "label": "平塘县",
  "value": "522727" },

{
  "label": "罗甸县",
  "value": "522728" },

{
  "label": "长顺县",
  "value": "522729" },

{
  "label": "龙里县",
  "value": "522730" },

{
  "label": "惠水县",
  "value": "522731" },

{
  "label": "三都水族自治县",
  "value": "522732" }]],



[
[{
  "label": "五华区",
  "value": "530102" },

{
  "label": "盘龙区",
  "value": "530103" },

{
  "label": "官渡区",
  "value": "530111" },

{
  "label": "西山区",
  "value": "530112" },

{
  "label": "东川区",
  "value": "530113" },

{
  "label": "呈贡区",
  "value": "530114" },

{
  "label": "晋宁区",
  "value": "530115" },

{
  "label": "富民县",
  "value": "530124" },

{
  "label": "宜良县",
  "value": "530125" },

{
  "label": "石林彝族自治县",
  "value": "530126" },

{
  "label": "嵩明县",
  "value": "530127" },

{
  "label": "禄劝彝族苗族自治县",
  "value": "530128" },

{
  "label": "寻甸回族彝族自治县",
  "value": "530129" },

{
  "label": "安宁市",
  "value": "530181" }],


[{
  "label": "麒麟区",
  "value": "530302" },

{
  "label": "沾益区",
  "value": "530303" },

{
  "label": "马龙县",
  "value": "530321" },

{
  "label": "陆良县",
  "value": "530322" },

{
  "label": "师宗县",
  "value": "530323" },

{
  "label": "罗平县",
  "value": "530324" },

{
  "label": "富源县",
  "value": "530325" },

{
  "label": "会泽县",
  "value": "530326" },

{
  "label": "宣威市",
  "value": "530381" }],


[{
  "label": "红塔区",
  "value": "530402" },

{
  "label": "江川区",
  "value": "530403" },

{
  "label": "澄江县",
  "value": "530422" },

{
  "label": "通海县",
  "value": "530423" },

{
  "label": "华宁县",
  "value": "530424" },

{
  "label": "易门县",
  "value": "530425" },

{
  "label": "峨山彝族自治县",
  "value": "530426" },

{
  "label": "新平彝族傣族自治县",
  "value": "530427" },

{
  "label": "元江哈尼族彝族傣族自治县",
  "value": "530428" }],


[{
  "label": "隆阳区",
  "value": "530502" },

{
  "label": "施甸县",
  "value": "530521" },

{
  "label": "龙陵县",
  "value": "530523" },

{
  "label": "昌宁县",
  "value": "530524" },

{
  "label": "腾冲市",
  "value": "530581" }],


[{
  "label": "昭阳区",
  "value": "530602" },

{
  "label": "鲁甸县",
  "value": "530621" },

{
  "label": "巧家县",
  "value": "530622" },

{
  "label": "盐津县",
  "value": "530623" },

{
  "label": "大关县",
  "value": "530624" },

{
  "label": "永善县",
  "value": "530625" },

{
  "label": "绥江县",
  "value": "530626" },

{
  "label": "镇雄县",
  "value": "530627" },

{
  "label": "彝良县",
  "value": "530628" },

{
  "label": "威信县",
  "value": "530629" },

{
  "label": "水富县",
  "value": "530630" }],


[{
  "label": "古城区",
  "value": "530702" },

{
  "label": "玉龙纳西族自治县",
  "value": "530721" },

{
  "label": "永胜县",
  "value": "530722" },

{
  "label": "华坪县",
  "value": "530723" },

{
  "label": "宁蒗彝族自治县",
  "value": "530724" }],


[{
  "label": "思茅区",
  "value": "530802" },

{
  "label": "宁洱哈尼族彝族自治县",
  "value": "530821" },

{
  "label": "墨江哈尼族自治县",
  "value": "530822" },

{
  "label": "景东彝族自治县",
  "value": "530823" },

{
  "label": "景谷傣族彝族自治县",
  "value": "530824" },

{
  "label": "镇沅彝族哈尼族拉祜族自治县",
  "value": "530825" },

{
  "label": "江城哈尼族彝族自治县",
  "value": "530826" },

{
  "label": "孟连傣族拉祜族佤族自治县",
  "value": "530827" },

{
  "label": "澜沧拉祜族自治县",
  "value": "530828" },

{
  "label": "西盟佤族自治县",
  "value": "530829" }],


[{
  "label": "临翔区",
  "value": "530902" },

{
  "label": "凤庆县",
  "value": "530921" },

{
  "label": "云县",
  "value": "530922" },

{
  "label": "永德县",
  "value": "530923" },

{
  "label": "镇康县",
  "value": "530924" },

{
  "label": "双江拉祜族佤族布朗族傣族自治县",
  "value": "530925" },

{
  "label": "耿马傣族佤族自治县",
  "value": "530926" },

{
  "label": "沧源佤族自治县",
  "value": "530927" }],


[{
  "label": "楚雄市",
  "value": "532301" },

{
  "label": "双柏县",
  "value": "532322" },

{
  "label": "牟定县",
  "value": "532323" },

{
  "label": "南华县",
  "value": "532324" },

{
  "label": "姚安县",
  "value": "532325" },

{
  "label": "大姚县",
  "value": "532326" },

{
  "label": "永仁县",
  "value": "532327" },

{
  "label": "元谋县",
  "value": "532328" },

{
  "label": "武定县",
  "value": "532329" },

{
  "label": "禄丰县",
  "value": "532331" }],


[{
  "label": "个旧市",
  "value": "532501" },

{
  "label": "开远市",
  "value": "532502" },

{
  "label": "蒙自市",
  "value": "532503" },

{
  "label": "弥勒市",
  "value": "532504" },

{
  "label": "屏边苗族自治县",
  "value": "532523" },

{
  "label": "建水县",
  "value": "532524" },

{
  "label": "石屏县",
  "value": "532525" },

{
  "label": "泸西县",
  "value": "532527" },

{
  "label": "元阳县",
  "value": "532528" },

{
  "label": "红河县",
  "value": "532529" },

{
  "label": "金平苗族瑶族傣族自治县",
  "value": "532530" },

{
  "label": "绿春县",
  "value": "532531" },

{
  "label": "河口瑶族自治县",
  "value": "532532" }],


[{
  "label": "文山市",
  "value": "532601" },

{
  "label": "砚山县",
  "value": "532622" },

{
  "label": "西畴县",
  "value": "532623" },

{
  "label": "麻栗坡县",
  "value": "532624" },

{
  "label": "马关县",
  "value": "532625" },

{
  "label": "丘北县",
  "value": "532626" },

{
  "label": "广南县",
  "value": "532627" },

{
  "label": "富宁县",
  "value": "532628" }],


[{
  "label": "景洪市",
  "value": "532801" },

{
  "label": "勐海县",
  "value": "532822" },

{
  "label": "勐腊县",
  "value": "532823" }],


[{
  "label": "大理市",
  "value": "532901" },

{
  "label": "漾濞彝族自治县",
  "value": "532922" },

{
  "label": "祥云县",
  "value": "532923" },

{
  "label": "宾川县",
  "value": "532924" },

{
  "label": "弥渡县",
  "value": "532925" },

{
  "label": "南涧彝族自治县",
  "value": "532926" },

{
  "label": "巍山彝族回族自治县",
  "value": "532927" },

{
  "label": "永平县",
  "value": "532928" },

{
  "label": "云龙县",
  "value": "532929" },

{
  "label": "洱源县",
  "value": "532930" },

{
  "label": "剑川县",
  "value": "532931" },

{
  "label": "鹤庆县",
  "value": "532932" }],


[{
  "label": "瑞丽市",
  "value": "533102" },

{
  "label": "芒市",
  "value": "533103" },

{
  "label": "梁河县",
  "value": "533122" },

{
  "label": "盈江县",
  "value": "533123" },

{
  "label": "陇川县",
  "value": "533124" }],


[{
  "label": "泸水市",
  "value": "533301" },

{
  "label": "福贡县",
  "value": "533323" },

{
  "label": "贡山独龙族怒族自治县",
  "value": "533324" },

{
  "label": "兰坪白族普米族自治县",
  "value": "533325" }],


[{
  "label": "香格里拉市",
  "value": "533401" },

{
  "label": "德钦县",
  "value": "533422" },

{
  "label": "维西傈僳族自治县",
  "value": "533423" }]],



[
[{
  "label": "城关区",
  "value": "540102" },

{
  "label": "堆龙德庆区",
  "value": "540103" },

{
  "label": "林周县",
  "value": "540121" },

{
  "label": "当雄县",
  "value": "540122" },

{
  "label": "尼木县",
  "value": "540123" },

{
  "label": "曲水县",
  "value": "540124" },

{
  "label": "达孜县",
  "value": "540126" },

{
  "label": "墨竹工卡县",
  "value": "540127" },

{
  "label": "格尔木藏青工业园区",
  "value": "540171" },

{
  "label": "拉萨经济技术开发区",
  "value": "540172" },

{
  "label": "西藏文化旅游创意园区",
  "value": "540173" },

{
  "label": "达孜工业园区",
  "value": "540174" }],


[{
  "label": "桑珠孜区",
  "value": "540202" },

{
  "label": "南木林县",
  "value": "540221" },

{
  "label": "江孜县",
  "value": "540222" },

{
  "label": "定日县",
  "value": "540223" },

{
  "label": "萨迦县",
  "value": "540224" },

{
  "label": "拉孜县",
  "value": "540225" },

{
  "label": "昂仁县",
  "value": "540226" },

{
  "label": "谢通门县",
  "value": "540227" },

{
  "label": "白朗县",
  "value": "540228" },

{
  "label": "仁布县",
  "value": "540229" },

{
  "label": "康马县",
  "value": "540230" },

{
  "label": "定结县",
  "value": "540231" },

{
  "label": "仲巴县",
  "value": "540232" },

{
  "label": "亚东县",
  "value": "540233" },

{
  "label": "吉隆县",
  "value": "540234" },

{
  "label": "聂拉木县",
  "value": "540235" },

{
  "label": "萨嘎县",
  "value": "540236" },

{
  "label": "岗巴县",
  "value": "540237" }],


[{
  "label": "卡若区",
  "value": "540302" },

{
  "label": "江达县",
  "value": "540321" },

{
  "label": "贡觉县",
  "value": "540322" },

{
  "label": "类乌齐县",
  "value": "540323" },

{
  "label": "丁青县",
  "value": "540324" },

{
  "label": "察雅县",
  "value": "540325" },

{
  "label": "八宿县",
  "value": "540326" },

{
  "label": "左贡县",
  "value": "540327" },

{
  "label": "芒康县",
  "value": "540328" },

{
  "label": "洛隆县",
  "value": "540329" },

{
  "label": "边坝县",
  "value": "540330" }],


[{
  "label": "巴宜区",
  "value": "540402" },

{
  "label": "工布江达县",
  "value": "540421" },

{
  "label": "米林县",
  "value": "540422" },

{
  "label": "墨脱县",
  "value": "540423" },

{
  "label": "波密县",
  "value": "540424" },

{
  "label": "察隅县",
  "value": "540425" },

{
  "label": "朗县",
  "value": "540426" }],


[{
  "label": "乃东区",
  "value": "540502" },

{
  "label": "扎囊县",
  "value": "540521" },

{
  "label": "贡嘎县",
  "value": "540522" },

{
  "label": "桑日县",
  "value": "540523" },

{
  "label": "琼结县",
  "value": "540524" },

{
  "label": "曲松县",
  "value": "540525" },

{
  "label": "措美县",
  "value": "540526" },

{
  "label": "洛扎县",
  "value": "540527" },

{
  "label": "加查县",
  "value": "540528" },

{
  "label": "隆子县",
  "value": "540529" },

{
  "label": "错那县",
  "value": "540530" },

{
  "label": "浪卡子县",
  "value": "540531" }],


[{
  "label": "那曲县",
  "value": "542421" },

{
  "label": "嘉黎县",
  "value": "542422" },

{
  "label": "比如县",
  "value": "542423" },

{
  "label": "聂荣县",
  "value": "542424" },

{
  "label": "安多县",
  "value": "542425" },

{
  "label": "申扎县",
  "value": "542426" },

{
  "label": "索县",
  "value": "542427" },

{
  "label": "班戈县",
  "value": "542428" },

{
  "label": "巴青县",
  "value": "542429" },

{
  "label": "尼玛县",
  "value": "542430" },

{
  "label": "双湖县",
  "value": "542431" }],


[{
  "label": "普兰县",
  "value": "542521" },

{
  "label": "札达县",
  "value": "542522" },

{
  "label": "噶尔县",
  "value": "542523" },

{
  "label": "日土县",
  "value": "542524" },

{
  "label": "革吉县",
  "value": "542525" },

{
  "label": "改则县",
  "value": "542526" },

{
  "label": "措勤县",
  "value": "542527" }]],



[
[{
  "label": "新城区",
  "value": "610102" },

{
  "label": "碑林区",
  "value": "610103" },

{
  "label": "莲湖区",
  "value": "610104" },

{
  "label": "灞桥区",
  "value": "610111" },

{
  "label": "未央区",
  "value": "610112" },

{
  "label": "雁塔区",
  "value": "610113" },

{
  "label": "阎良区",
  "value": "610114" },

{
  "label": "临潼区",
  "value": "610115" },

{
  "label": "长安区",
  "value": "610116" },

{
  "label": "高陵区",
  "value": "610117" },

{
  "label": "鄠邑区",
  "value": "610118" },

{
  "label": "蓝田县",
  "value": "610122" },

{
  "label": "周至县",
  "value": "610124" }],


[{
  "label": "王益区",
  "value": "610202" },

{
  "label": "印台区",
  "value": "610203" },

{
  "label": "耀州区",
  "value": "610204" },

{
  "label": "宜君县",
  "value": "610222" }],


[{
  "label": "渭滨区",
  "value": "610302" },

{
  "label": "金台区",
  "value": "610303" },

{
  "label": "陈仓区",
  "value": "610304" },

{
  "label": "凤翔县",
  "value": "610322" },

{
  "label": "岐山县",
  "value": "610323" },

{
  "label": "扶风县",
  "value": "610324" },

{
  "label": "眉县",
  "value": "610326" },

{
  "label": "陇县",
  "value": "610327" },

{
  "label": "千阳县",
  "value": "610328" },

{
  "label": "麟游县",
  "value": "610329" },

{
  "label": "凤县",
  "value": "610330" },

{
  "label": "太白县",
  "value": "610331" }],


[{
  "label": "秦都区",
  "value": "610402" },

{
  "label": "杨陵区",
  "value": "610403" },

{
  "label": "渭城区",
  "value": "610404" },

{
  "label": "三原县",
  "value": "610422" },

{
  "label": "泾阳县",
  "value": "610423" },

{
  "label": "乾县",
  "value": "610424" },

{
  "label": "礼泉县",
  "value": "610425" },

{
  "label": "永寿县",
  "value": "610426" },

{
  "label": "彬县",
  "value": "610427" },

{
  "label": "长武县",
  "value": "610428" },

{
  "label": "旬邑县",
  "value": "610429" },

{
  "label": "淳化县",
  "value": "610430" },

{
  "label": "武功县",
  "value": "610431" },

{
  "label": "兴平市",
  "value": "610481" }],


[{
  "label": "临渭区",
  "value": "610502" },

{
  "label": "华州区",
  "value": "610503" },

{
  "label": "潼关县",
  "value": "610522" },

{
  "label": "大荔县",
  "value": "610523" },

{
  "label": "合阳县",
  "value": "610524" },

{
  "label": "澄城县",
  "value": "610525" },

{
  "label": "蒲城县",
  "value": "610526" },

{
  "label": "白水县",
  "value": "610527" },

{
  "label": "富平县",
  "value": "610528" },

{
  "label": "韩城市",
  "value": "610581" },

{
  "label": "华阴市",
  "value": "610582" }],


[{
  "label": "宝塔区",
  "value": "610602" },

{
  "label": "安塞区",
  "value": "610603" },

{
  "label": "延长县",
  "value": "610621" },

{
  "label": "延川县",
  "value": "610622" },

{
  "label": "子长县",
  "value": "610623" },

{
  "label": "志丹县",
  "value": "610625" },

{
  "label": "吴起县",
  "value": "610626" },

{
  "label": "甘泉县",
  "value": "610627" },

{
  "label": "富县",
  "value": "610628" },

{
  "label": "洛川县",
  "value": "610629" },

{
  "label": "宜川县",
  "value": "610630" },

{
  "label": "黄龙县",
  "value": "610631" },

{
  "label": "黄陵县",
  "value": "610632" }],


[{
  "label": "汉台区",
  "value": "610702" },

{
  "label": "南郑区",
  "value": "610703" },

{
  "label": "城固县",
  "value": "610722" },

{
  "label": "洋县",
  "value": "610723" },

{
  "label": "西乡县",
  "value": "610724" },

{
  "label": "勉县",
  "value": "610725" },

{
  "label": "宁强县",
  "value": "610726" },

{
  "label": "略阳县",
  "value": "610727" },

{
  "label": "镇巴县",
  "value": "610728" },

{
  "label": "留坝县",
  "value": "610729" },

{
  "label": "佛坪县",
  "value": "610730" }],


[{
  "label": "榆阳区",
  "value": "610802" },

{
  "label": "横山区",
  "value": "610803" },

{
  "label": "府谷县",
  "value": "610822" },

{
  "label": "靖边县",
  "value": "610824" },

{
  "label": "定边县",
  "value": "610825" },

{
  "label": "绥德县",
  "value": "610826" },

{
  "label": "米脂县",
  "value": "610827" },

{
  "label": "佳县",
  "value": "610828" },

{
  "label": "吴堡县",
  "value": "610829" },

{
  "label": "清涧县",
  "value": "610830" },

{
  "label": "子洲县",
  "value": "610831" },

{
  "label": "神木市",
  "value": "610881" }],


[{
  "label": "汉滨区",
  "value": "610902" },

{
  "label": "汉阴县",
  "value": "610921" },

{
  "label": "石泉县",
  "value": "610922" },

{
  "label": "宁陕县",
  "value": "610923" },

{
  "label": "紫阳县",
  "value": "610924" },

{
  "label": "岚皋县",
  "value": "610925" },

{
  "label": "平利县",
  "value": "610926" },

{
  "label": "镇坪县",
  "value": "610927" },

{
  "label": "旬阳县",
  "value": "610928" },

{
  "label": "白河县",
  "value": "610929" }],


[{
  "label": "商州区",
  "value": "611002" },

{
  "label": "洛南县",
  "value": "611021" },

{
  "label": "丹凤县",
  "value": "611022" },

{
  "label": "商南县",
  "value": "611023" },

{
  "label": "山阳县",
  "value": "611024" },

{
  "label": "镇安县",
  "value": "611025" },

{
  "label": "柞水县",
  "value": "611026" }]],



[
[{
  "label": "城关区",
  "value": "620102" },

{
  "label": "七里河区",
  "value": "620103" },

{
  "label": "西固区",
  "value": "620104" },

{
  "label": "安宁区",
  "value": "620105" },

{
  "label": "红古区",
  "value": "620111" },

{
  "label": "永登县",
  "value": "620121" },

{
  "label": "皋兰县",
  "value": "620122" },

{
  "label": "榆中县",
  "value": "620123" },

{
  "label": "兰州新区",
  "value": "620171" }],


[{
  "label": "嘉峪关市",
  "value": "620201" }],

[{
  "label": "金川区",
  "value": "620302" },

{
  "label": "永昌县",
  "value": "620321" }],


[{
  "label": "白银区",
  "value": "620402" },

{
  "label": "平川区",
  "value": "620403" },

{
  "label": "靖远县",
  "value": "620421" },

{
  "label": "会宁县",
  "value": "620422" },

{
  "label": "景泰县",
  "value": "620423" }],


[{
  "label": "秦州区",
  "value": "620502" },

{
  "label": "麦积区",
  "value": "620503" },

{
  "label": "清水县",
  "value": "620521" },

{
  "label": "秦安县",
  "value": "620522" },

{
  "label": "甘谷县",
  "value": "620523" },

{
  "label": "武山县",
  "value": "620524" },

{
  "label": "张家川回族自治县",
  "value": "620525" }],


[{
  "label": "凉州区",
  "value": "620602" },

{
  "label": "民勤县",
  "value": "620621" },

{
  "label": "古浪县",
  "value": "620622" },

{
  "label": "天祝藏族自治县",
  "value": "620623" }],


[{
  "label": "甘州区",
  "value": "620702" },

{
  "label": "肃南裕固族自治县",
  "value": "620721" },

{
  "label": "民乐县",
  "value": "620722" },

{
  "label": "临泽县",
  "value": "620723" },

{
  "label": "高台县",
  "value": "620724" },

{
  "label": "山丹县",
  "value": "620725" }],


[{
  "label": "崆峒区",
  "value": "620802" },

{
  "label": "泾川县",
  "value": "620821" },

{
  "label": "灵台县",
  "value": "620822" },

{
  "label": "崇信县",
  "value": "620823" },

{
  "label": "华亭县",
  "value": "620824" },

{
  "label": "庄浪县",
  "value": "620825" },

{
  "label": "静宁县",
  "value": "620826" },

{
  "label": "平凉工业园区",
  "value": "620871" }],


[{
  "label": "肃州区",
  "value": "620902" },

{
  "label": "金塔县",
  "value": "620921" },

{
  "label": "瓜州县",
  "value": "620922" },

{
  "label": "肃北蒙古族自治县",
  "value": "620923" },

{
  "label": "阿克塞哈萨克族自治县",
  "value": "620924" },

{
  "label": "玉门市",
  "value": "620981" },

{
  "label": "敦煌市",
  "value": "620982" }],


[{
  "label": "西峰区",
  "value": "621002" },

{
  "label": "庆城县",
  "value": "621021" },

{
  "label": "环县",
  "value": "621022" },

{
  "label": "华池县",
  "value": "621023" },

{
  "label": "合水县",
  "value": "621024" },

{
  "label": "正宁县",
  "value": "621025" },

{
  "label": "宁县",
  "value": "621026" },

{
  "label": "镇原县",
  "value": "621027" }],


[{
  "label": "安定区",
  "value": "621102" },

{
  "label": "通渭县",
  "value": "621121" },

{
  "label": "陇西县",
  "value": "621122" },

{
  "label": "渭源县",
  "value": "621123" },

{
  "label": "临洮县",
  "value": "621124" },

{
  "label": "漳县",
  "value": "621125" },

{
  "label": "岷县",
  "value": "621126" }],


[{
  "label": "武都区",
  "value": "621202" },

{
  "label": "成县",
  "value": "621221" },

{
  "label": "文县",
  "value": "621222" },

{
  "label": "宕昌县",
  "value": "621223" },

{
  "label": "康县",
  "value": "621224" },

{
  "label": "西和县",
  "value": "621225" },

{
  "label": "礼县",
  "value": "621226" },

{
  "label": "徽县",
  "value": "621227" },

{
  "label": "两当县",
  "value": "621228" }],


[{
  "label": "临夏市",
  "value": "622901" },

{
  "label": "临夏县",
  "value": "622921" },

{
  "label": "康乐县",
  "value": "622922" },

{
  "label": "永靖县",
  "value": "622923" },

{
  "label": "广河县",
  "value": "622924" },

{
  "label": "和政县",
  "value": "622925" },

{
  "label": "东乡族自治县",
  "value": "622926" },

{
  "label": "积石山保安族东乡族撒拉族自治县",
  "value": "622927" }],


[{
  "label": "合作市",
  "value": "623001" },

{
  "label": "临潭县",
  "value": "623021" },

{
  "label": "卓尼县",
  "value": "623022" },

{
  "label": "舟曲县",
  "value": "623023" },

{
  "label": "迭部县",
  "value": "623024" },

{
  "label": "玛曲县",
  "value": "623025" },

{
  "label": "碌曲县",
  "value": "623026" },

{
  "label": "夏河县",
  "value": "623027" }]],



[
[{
  "label": "城东区",
  "value": "630102" },

{
  "label": "城中区",
  "value": "630103" },

{
  "label": "城西区",
  "value": "630104" },

{
  "label": "城北区",
  "value": "630105" },

{
  "label": "大通回族土族自治县",
  "value": "630121" },

{
  "label": "湟中县",
  "value": "630122" },

{
  "label": "湟源县",
  "value": "630123" }],


[{
  "label": "乐都区",
  "value": "630202" },

{
  "label": "平安区",
  "value": "630203" },

{
  "label": "民和回族土族自治县",
  "value": "630222" },

{
  "label": "互助土族自治县",
  "value": "630223" },

{
  "label": "化隆回族自治县",
  "value": "630224" },

{
  "label": "循化撒拉族自治县",
  "value": "630225" }],


[{
  "label": "门源回族自治县",
  "value": "632221" },

{
  "label": "祁连县",
  "value": "632222" },

{
  "label": "海晏县",
  "value": "632223" },

{
  "label": "刚察县",
  "value": "632224" }],


[{
  "label": "同仁县",
  "value": "632321" },

{
  "label": "尖扎县",
  "value": "632322" },

{
  "label": "泽库县",
  "value": "632323" },

{
  "label": "河南蒙古族自治县",
  "value": "632324" }],


[{
  "label": "共和县",
  "value": "632521" },

{
  "label": "同德县",
  "value": "632522" },

{
  "label": "贵德县",
  "value": "632523" },

{
  "label": "兴海县",
  "value": "632524" },

{
  "label": "贵南县",
  "value": "632525" }],


[{
  "label": "玛沁县",
  "value": "632621" },

{
  "label": "班玛县",
  "value": "632622" },

{
  "label": "甘德县",
  "value": "632623" },

{
  "label": "达日县",
  "value": "632624" },

{
  "label": "久治县",
  "value": "632625" },

{
  "label": "玛多县",
  "value": "632626" }],


[{
  "label": "玉树市",
  "value": "632701" },

{
  "label": "杂多县",
  "value": "632722" },

{
  "label": "称多县",
  "value": "632723" },

{
  "label": "治多县",
  "value": "632724" },

{
  "label": "囊谦县",
  "value": "632725" },

{
  "label": "曲麻莱县",
  "value": "632726" }],


[{
  "label": "格尔木市",
  "value": "632801" },

{
  "label": "德令哈市",
  "value": "632802" },

{
  "label": "乌兰县",
  "value": "632821" },

{
  "label": "都兰县",
  "value": "632822" },

{
  "label": "天峻县",
  "value": "632823" },

{
  "label": "大柴旦行政委员会",
  "value": "632857" },

{
  "label": "冷湖行政委员会",
  "value": "632858" },

{
  "label": "茫崖行政委员会",
  "value": "632859" }]],



[
[{
  "label": "兴庆区",
  "value": "640104" },

{
  "label": "西夏区",
  "value": "640105" },

{
  "label": "金凤区",
  "value": "640106" },

{
  "label": "永宁县",
  "value": "640121" },

{
  "label": "贺兰县",
  "value": "640122" },

{
  "label": "灵武市",
  "value": "640181" }],


[{
  "label": "大武口区",
  "value": "640202" },

{
  "label": "惠农区",
  "value": "640205" },

{
  "label": "平罗县",
  "value": "640221" }],


[{
  "label": "利通区",
  "value": "640302" },

{
  "label": "红寺堡区",
  "value": "640303" },

{
  "label": "盐池县",
  "value": "640323" },

{
  "label": "同心县",
  "value": "640324" },

{
  "label": "青铜峡市",
  "value": "640381" }],


[{
  "label": "原州区",
  "value": "640402" },

{
  "label": "西吉县",
  "value": "640422" },

{
  "label": "隆德县",
  "value": "640423" },

{
  "label": "泾源县",
  "value": "640424" },

{
  "label": "彭阳县",
  "value": "640425" }],


[{
  "label": "沙坡头区",
  "value": "640502" },

{
  "label": "中宁县",
  "value": "640521" },

{
  "label": "海原县",
  "value": "640522" }]],



[
[{
  "label": "天山区",
  "value": "650102" },

{
  "label": "沙依巴克区",
  "value": "650103" },

{
  "label": "新市区",
  "value": "650104" },

{
  "label": "水磨沟区",
  "value": "650105" },

{
  "label": "头屯河区",
  "value": "650106" },

{
  "label": "达坂城区",
  "value": "650107" },

{
  "label": "米东区",
  "value": "650109" },

{
  "label": "乌鲁木齐县",
  "value": "650121" },

{
  "label": "乌鲁木齐经济技术开发区",
  "value": "650171" },

{
  "label": "乌鲁木齐高新技术产业开发区",
  "value": "650172" }],


[{
  "label": "独山子区",
  "value": "650202" },

{
  "label": "克拉玛依区",
  "value": "650203" },

{
  "label": "白碱滩区",
  "value": "650204" },

{
  "label": "乌尔禾区",
  "value": "650205" }],


[{
  "label": "高昌区",
  "value": "650402" },

{
  "label": "鄯善县",
  "value": "650421" },

{
  "label": "托克逊县",
  "value": "650422" }],


[{
  "label": "伊州区",
  "value": "650502" },

{
  "label": "巴里坤哈萨克自治县",
  "value": "650521" },

{
  "label": "伊吾县",
  "value": "650522" }],


[{
  "label": "昌吉市",
  "value": "652301" },

{
  "label": "阜康市",
  "value": "652302" },

{
  "label": "呼图壁县",
  "value": "652323" },

{
  "label": "玛纳斯县",
  "value": "652324" },

{
  "label": "奇台县",
  "value": "652325" },

{
  "label": "吉木萨尔县",
  "value": "652327" },

{
  "label": "木垒哈萨克自治县",
  "value": "652328" }],


[{
  "label": "博乐市",
  "value": "652701" },

{
  "label": "阿拉山口市",
  "value": "652702" },

{
  "label": "精河县",
  "value": "652722" },

{
  "label": "温泉县",
  "value": "652723" }],


[{
  "label": "库尔勒市",
  "value": "652801" },

{
  "label": "轮台县",
  "value": "652822" },

{
  "label": "尉犁县",
  "value": "652823" },

{
  "label": "若羌县",
  "value": "652824" },

{
  "label": "且末县",
  "value": "652825" },

{
  "label": "焉耆回族自治县",
  "value": "652826" },

{
  "label": "和静县",
  "value": "652827" },

{
  "label": "和硕县",
  "value": "652828" },

{
  "label": "博湖县",
  "value": "652829" },

{
  "label": "库尔勒经济技术开发区",
  "value": "652871" }],


[{
  "label": "阿克苏市",
  "value": "652901" },

{
  "label": "温宿县",
  "value": "652922" },

{
  "label": "库车县",
  "value": "652923" },

{
  "label": "沙雅县",
  "value": "652924" },

{
  "label": "新和县",
  "value": "652925" },

{
  "label": "拜城县",
  "value": "652926" },

{
  "label": "乌什县",
  "value": "652927" },

{
  "label": "阿瓦提县",
  "value": "652928" },

{
  "label": "柯坪县",
  "value": "652929" }],


[{
  "label": "阿图什市",
  "value": "653001" },

{
  "label": "阿克陶县",
  "value": "653022" },

{
  "label": "阿合奇县",
  "value": "653023" },

{
  "label": "乌恰县",
  "value": "653024" }],


[{
  "label": "喀什市",
  "value": "653101" },

{
  "label": "疏附县",
  "value": "653121" },

{
  "label": "疏勒县",
  "value": "653122" },

{
  "label": "英吉沙县",
  "value": "653123" },

{
  "label": "泽普县",
  "value": "653124" },

{
  "label": "莎车县",
  "value": "653125" },

{
  "label": "叶城县",
  "value": "653126" },

{
  "label": "麦盖提县",
  "value": "653127" },

{
  "label": "岳普湖县",
  "value": "653128" },

{
  "label": "伽师县",
  "value": "653129" },

{
  "label": "巴楚县",
  "value": "653130" },

{
  "label": "塔什库尔干塔吉克自治县",
  "value": "653131" }],


[{
  "label": "和田市",
  "value": "653201" },

{
  "label": "和田县",
  "value": "653221" },

{
  "label": "墨玉县",
  "value": "653222" },

{
  "label": "皮山县",
  "value": "653223" },

{
  "label": "洛浦县",
  "value": "653224" },

{
  "label": "策勒县",
  "value": "653225" },

{
  "label": "于田县",
  "value": "653226" },

{
  "label": "民丰县",
  "value": "653227" }],


[{
  "label": "伊宁市",
  "value": "654002" },

{
  "label": "奎屯市",
  "value": "654003" },

{
  "label": "霍尔果斯市",
  "value": "654004" },

{
  "label": "伊宁县",
  "value": "654021" },

{
  "label": "察布查尔锡伯自治县",
  "value": "654022" },

{
  "label": "霍城县",
  "value": "654023" },

{
  "label": "巩留县",
  "value": "654024" },

{
  "label": "新源县",
  "value": "654025" },

{
  "label": "昭苏县",
  "value": "654026" },

{
  "label": "特克斯县",
  "value": "654027" },

{
  "label": "尼勒克县",
  "value": "654028" }],


[{
  "label": "塔城市",
  "value": "654201" },

{
  "label": "乌苏市",
  "value": "654202" },

{
  "label": "额敏县",
  "value": "654221" },

{
  "label": "沙湾县",
  "value": "654223" },

{
  "label": "托里县",
  "value": "654224" },

{
  "label": "裕民县",
  "value": "654225" },

{
  "label": "和布克赛尔蒙古自治县",
  "value": "654226" }],


[{
  "label": "阿勒泰市",
  "value": "654301" },

{
  "label": "布尔津县",
  "value": "654321" },

{
  "label": "富蕴县",
  "value": "654322" },

{
  "label": "福海县",
  "value": "654323" },

{
  "label": "哈巴河县",
  "value": "654324" },

{
  "label": "青河县",
  "value": "654325" },

{
  "label": "吉木乃县",
  "value": "654326" }],


[{
  "label": "石河子市",
  "value": "659001" },

{
  "label": "阿拉尔市",
  "value": "659002" },

{
  "label": "图木舒克市",
  "value": "659003" },

{
  "label": "五家渠市",
  "value": "659004" },

{
  "label": "铁门关市",
  "value": "659006" }]],



[
[{
  "label": "台北",
  "value": "660101" }],

[{
  "label": "高雄",
  "value": "660201" }],

[{
  "label": "基隆",
  "value": "660301" }],

[{
  "label": "台中",
  "value": "660401" }],

[{
  "label": "台南",
  "value": "660501" }],

[{
  "label": "新竹",
  "value": "660601" }],

[{
  "label": "嘉义",
  "value": "660701" }],

[{
  "label": "宜兰",
  "value": "660801" }],

[{
  "label": "桃园",
  "value": "660901" }],

[{
  "label": "苗栗",
  "value": "661001" }],

[{
  "label": "彰化",
  "value": "661101" }],

[{
  "label": "南投",
  "value": "661201" }],

[{
  "label": "云林",
  "value": "661301" }],

[{
  "label": "屏东",
  "value": "661401" }],

[{
  "label": "台东",
  "value": "661501" }],

[{
  "label": "花莲",
  "value": "661601" }],

[{
  "label": "澎湖",
  "value": "661701" }]],


[
[{
  "label": "香港岛",
  "value": "670101" }],

[{
  "label": "九龙",
  "value": "670201" }],

[{
  "label": "新界",
  "value": "670301" }]],


[
[{
  "label": "澳门半岛",
  "value": "680101" }],

[{
  "label": "氹仔岛",
  "value": "680201" }],

[{
  "label": "路环岛",
  "value": "680301" }],

[{
  "label": "路氹城",
  "value": "680401" }]]];var _default =



areaData;exports.default = _default;

/***/ }),

/***/ 329:
/*!******************************************************************************************!*\
  !*** D:/桌面/神农百草堂/神农百草堂/uni_modules/uni-goods-nav/components/uni-goods-nav/i18n/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 330));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 331));
var _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 332));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  en: _en.default,
  'zh-Hans': _zhHans.default,
  'zh-Hant': _zhHant.default };exports.default = _default;

/***/ }),

/***/ 330:
/*!*****************************************************************************************!*\
  !*** D:/桌面/神农百草堂/神农百草堂/uni_modules/uni-goods-nav/components/uni-goods-nav/i18n/en.json ***!
  \*****************************************************************************************/
/*! exports provided: uni-goods-nav.options.shop, uni-goods-nav.options.cart, uni-goods-nav.buttonGroup.addToCart, uni-goods-nav.buttonGroup.buyNow, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-goods-nav.options.shop\":\"shop\",\"uni-goods-nav.options.cart\":\"cart\",\"uni-goods-nav.buttonGroup.addToCart\":\"add to cart\",\"uni-goods-nav.buttonGroup.buyNow\":\"buy now\"}");

/***/ }),

/***/ 331:
/*!**********************************************************************************************!*\
  !*** D:/桌面/神农百草堂/神农百草堂/uni_modules/uni-goods-nav/components/uni-goods-nav/i18n/zh-Hans.json ***!
  \**********************************************************************************************/
/*! exports provided: uni-goods-nav.options.shop, uni-goods-nav.options.cart, uni-goods-nav.buttonGroup.addToCart, uni-goods-nav.buttonGroup.buyNow, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-goods-nav.options.shop\":\"店铺\",\"uni-goods-nav.options.cart\":\"购物车\",\"uni-goods-nav.buttonGroup.addToCart\":\"加入购物车\",\"uni-goods-nav.buttonGroup.buyNow\":\"立即购买\"}");

/***/ }),

/***/ 332:
/*!**********************************************************************************************!*\
  !*** D:/桌面/神农百草堂/神农百草堂/uni_modules/uni-goods-nav/components/uni-goods-nav/i18n/zh-Hant.json ***!
  \**********************************************************************************************/
/*! exports provided: uni-goods-nav.options.shop, uni-goods-nav.options.cart, uni-goods-nav.buttonGroup.addToCart, uni-goods-nav.buttonGroup.buyNow, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-goods-nav.options.shop\":\"店鋪\",\"uni-goods-nav.options.cart\":\"購物車\",\"uni-goods-nav.buttonGroup.addToCart\":\"加入購物車\",\"uni-goods-nav.buttonGroup.buyNow\":\"立即購買\"}");

/***/ }),

/***/ 340:
/*!*****************************************************************************!*\
  !*** D:/桌面/神农百草堂/神农百草堂/uni_modules/uni-icons/components/uni-icons/icons.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  "id": "2852637",
  "name": "uniui图标库",
  "font_family": "uniicons",
  "css_prefix_text": "uniui-",
  "description": "",
  "glyphs": [
  {
    "icon_id": "25027049",
    "name": "yanse",
    "font_class": "color",
    "unicode": "e6cf",
    "unicode_decimal": 59087 },

  {
    "icon_id": "25027048",
    "name": "wallet",
    "font_class": "wallet",
    "unicode": "e6b1",
    "unicode_decimal": 59057 },

  {
    "icon_id": "25015720",
    "name": "settings-filled",
    "font_class": "settings-filled",
    "unicode": "e6ce",
    "unicode_decimal": 59086 },

  {
    "icon_id": "25015434",
    "name": "shimingrenzheng-filled",
    "font_class": "auth-filled",
    "unicode": "e6cc",
    "unicode_decimal": 59084 },

  {
    "icon_id": "24934246",
    "name": "shop-filled",
    "font_class": "shop-filled",
    "unicode": "e6cd",
    "unicode_decimal": 59085 },

  {
    "icon_id": "24934159",
    "name": "staff-filled-01",
    "font_class": "staff-filled",
    "unicode": "e6cb",
    "unicode_decimal": 59083 },

  {
    "icon_id": "24932461",
    "name": "VIP-filled",
    "font_class": "vip-filled",
    "unicode": "e6c6",
    "unicode_decimal": 59078 },

  {
    "icon_id": "24932462",
    "name": "plus_circle_fill",
    "font_class": "plus-filled",
    "unicode": "e6c7",
    "unicode_decimal": 59079 },

  {
    "icon_id": "24932463",
    "name": "folder_add-filled",
    "font_class": "folder-add-filled",
    "unicode": "e6c8",
    "unicode_decimal": 59080 },

  {
    "icon_id": "24932464",
    "name": "yanse-filled",
    "font_class": "color-filled",
    "unicode": "e6c9",
    "unicode_decimal": 59081 },

  {
    "icon_id": "24932465",
    "name": "tune-filled",
    "font_class": "tune-filled",
    "unicode": "e6ca",
    "unicode_decimal": 59082 },

  {
    "icon_id": "24932455",
    "name": "a-rilidaka-filled",
    "font_class": "calendar-filled",
    "unicode": "e6c0",
    "unicode_decimal": 59072 },

  {
    "icon_id": "24932456",
    "name": "notification-filled",
    "font_class": "notification-filled",
    "unicode": "e6c1",
    "unicode_decimal": 59073 },

  {
    "icon_id": "24932457",
    "name": "wallet-filled",
    "font_class": "wallet-filled",
    "unicode": "e6c2",
    "unicode_decimal": 59074 },

  {
    "icon_id": "24932458",
    "name": "paihangbang-filled",
    "font_class": "medal-filled",
    "unicode": "e6c3",
    "unicode_decimal": 59075 },

  {
    "icon_id": "24932459",
    "name": "gift-filled",
    "font_class": "gift-filled",
    "unicode": "e6c4",
    "unicode_decimal": 59076 },

  {
    "icon_id": "24932460",
    "name": "fire-filled",
    "font_class": "fire-filled",
    "unicode": "e6c5",
    "unicode_decimal": 59077 },

  {
    "icon_id": "24928001",
    "name": "refreshempty",
    "font_class": "refreshempty",
    "unicode": "e6bf",
    "unicode_decimal": 59071 },

  {
    "icon_id": "24926853",
    "name": "location-ellipse",
    "font_class": "location-filled",
    "unicode": "e6af",
    "unicode_decimal": 59055 },

  {
    "icon_id": "24926735",
    "name": "person-filled",
    "font_class": "person-filled",
    "unicode": "e69d",
    "unicode_decimal": 59037 },

  {
    "icon_id": "24926703",
    "name": "personadd-filled",
    "font_class": "personadd-filled",
    "unicode": "e698",
    "unicode_decimal": 59032 },

  {
    "icon_id": "24923351",
    "name": "back",
    "font_class": "back",
    "unicode": "e6b9",
    "unicode_decimal": 59065 },

  {
    "icon_id": "24923352",
    "name": "forward",
    "font_class": "forward",
    "unicode": "e6ba",
    "unicode_decimal": 59066 },

  {
    "icon_id": "24923353",
    "name": "arrowthinright",
    "font_class": "arrow-right",
    "unicode": "e6bb",
    "unicode_decimal": 59067 },

  {
    "icon_id": "24923353",
    "name": "arrowthinright",
    "font_class": "arrowthinright",
    "unicode": "e6bb",
    "unicode_decimal": 59067 },

  {
    "icon_id": "24923354",
    "name": "arrowthinleft",
    "font_class": "arrow-left",
    "unicode": "e6bc",
    "unicode_decimal": 59068 },

  {
    "icon_id": "24923354",
    "name": "arrowthinleft",
    "font_class": "arrowthinleft",
    "unicode": "e6bc",
    "unicode_decimal": 59068 },

  {
    "icon_id": "24923355",
    "name": "arrowthinup",
    "font_class": "arrow-up",
    "unicode": "e6bd",
    "unicode_decimal": 59069 },

  {
    "icon_id": "24923355",
    "name": "arrowthinup",
    "font_class": "arrowthinup",
    "unicode": "e6bd",
    "unicode_decimal": 59069 },

  {
    "icon_id": "24923356",
    "name": "arrowthindown",
    "font_class": "arrow-down",
    "unicode": "e6be",
    "unicode_decimal": 59070 },
  {
    "icon_id": "24923356",
    "name": "arrowthindown",
    "font_class": "arrowthindown",
    "unicode": "e6be",
    "unicode_decimal": 59070 },

  {
    "icon_id": "24923349",
    "name": "arrowdown",
    "font_class": "bottom",
    "unicode": "e6b8",
    "unicode_decimal": 59064 },
  {
    "icon_id": "24923349",
    "name": "arrowdown",
    "font_class": "arrowdown",
    "unicode": "e6b8",
    "unicode_decimal": 59064 },

  {
    "icon_id": "24923346",
    "name": "arrowright",
    "font_class": "right",
    "unicode": "e6b5",
    "unicode_decimal": 59061 },

  {
    "icon_id": "24923346",
    "name": "arrowright",
    "font_class": "arrowright",
    "unicode": "e6b5",
    "unicode_decimal": 59061 },

  {
    "icon_id": "24923347",
    "name": "arrowup",
    "font_class": "top",
    "unicode": "e6b6",
    "unicode_decimal": 59062 },

  {
    "icon_id": "24923347",
    "name": "arrowup",
    "font_class": "arrowup",
    "unicode": "e6b6",
    "unicode_decimal": 59062 },

  {
    "icon_id": "24923348",
    "name": "arrowleft",
    "font_class": "left",
    "unicode": "e6b7",
    "unicode_decimal": 59063 },

  {
    "icon_id": "24923348",
    "name": "arrowleft",
    "font_class": "arrowleft",
    "unicode": "e6b7",
    "unicode_decimal": 59063 },

  {
    "icon_id": "24923334",
    "name": "eye",
    "font_class": "eye",
    "unicode": "e651",
    "unicode_decimal": 58961 },

  {
    "icon_id": "24923335",
    "name": "eye-filled",
    "font_class": "eye-filled",
    "unicode": "e66a",
    "unicode_decimal": 58986 },

  {
    "icon_id": "24923336",
    "name": "eye-slash",
    "font_class": "eye-slash",
    "unicode": "e6b3",
    "unicode_decimal": 59059 },

  {
    "icon_id": "24923337",
    "name": "eye-slash-filled",
    "font_class": "eye-slash-filled",
    "unicode": "e6b4",
    "unicode_decimal": 59060 },

  {
    "icon_id": "24923305",
    "name": "info-filled",
    "font_class": "info-filled",
    "unicode": "e649",
    "unicode_decimal": 58953 },

  {
    "icon_id": "24923299",
    "name": "reload-01",
    "font_class": "reload",
    "unicode": "e6b2",
    "unicode_decimal": 59058 },

  {
    "icon_id": "24923195",
    "name": "mic_slash_fill",
    "font_class": "micoff-filled",
    "unicode": "e6b0",
    "unicode_decimal": 59056 },

  {
    "icon_id": "24923165",
    "name": "map-pin-ellipse",
    "font_class": "map-pin-ellipse",
    "unicode": "e6ac",
    "unicode_decimal": 59052 },

  {
    "icon_id": "24923166",
    "name": "map-pin",
    "font_class": "map-pin",
    "unicode": "e6ad",
    "unicode_decimal": 59053 },

  {
    "icon_id": "24923167",
    "name": "location",
    "font_class": "location",
    "unicode": "e6ae",
    "unicode_decimal": 59054 },

  {
    "icon_id": "24923064",
    "name": "starhalf",
    "font_class": "starhalf",
    "unicode": "e683",
    "unicode_decimal": 59011 },

  {
    "icon_id": "24923065",
    "name": "star",
    "font_class": "star",
    "unicode": "e688",
    "unicode_decimal": 59016 },

  {
    "icon_id": "24923066",
    "name": "star-filled",
    "font_class": "star-filled",
    "unicode": "e68f",
    "unicode_decimal": 59023 },

  {
    "icon_id": "24899646",
    "name": "a-rilidaka",
    "font_class": "calendar",
    "unicode": "e6a0",
    "unicode_decimal": 59040 },

  {
    "icon_id": "24899647",
    "name": "fire",
    "font_class": "fire",
    "unicode": "e6a1",
    "unicode_decimal": 59041 },

  {
    "icon_id": "24899648",
    "name": "paihangbang",
    "font_class": "medal",
    "unicode": "e6a2",
    "unicode_decimal": 59042 },

  {
    "icon_id": "24899649",
    "name": "font",
    "font_class": "font",
    "unicode": "e6a3",
    "unicode_decimal": 59043 },

  {
    "icon_id": "24899650",
    "name": "gift",
    "font_class": "gift",
    "unicode": "e6a4",
    "unicode_decimal": 59044 },

  {
    "icon_id": "24899651",
    "name": "link",
    "font_class": "link",
    "unicode": "e6a5",
    "unicode_decimal": 59045 },

  {
    "icon_id": "24899652",
    "name": "notification",
    "font_class": "notification",
    "unicode": "e6a6",
    "unicode_decimal": 59046 },

  {
    "icon_id": "24899653",
    "name": "staff",
    "font_class": "staff",
    "unicode": "e6a7",
    "unicode_decimal": 59047 },

  {
    "icon_id": "24899654",
    "name": "VIP",
    "font_class": "vip",
    "unicode": "e6a8",
    "unicode_decimal": 59048 },

  {
    "icon_id": "24899655",
    "name": "folder_add",
    "font_class": "folder-add",
    "unicode": "e6a9",
    "unicode_decimal": 59049 },

  {
    "icon_id": "24899656",
    "name": "tune",
    "font_class": "tune",
    "unicode": "e6aa",
    "unicode_decimal": 59050 },

  {
    "icon_id": "24899657",
    "name": "shimingrenzheng",
    "font_class": "auth",
    "unicode": "e6ab",
    "unicode_decimal": 59051 },

  {
    "icon_id": "24899565",
    "name": "person",
    "font_class": "person",
    "unicode": "e699",
    "unicode_decimal": 59033 },

  {
    "icon_id": "24899566",
    "name": "email-filled",
    "font_class": "email-filled",
    "unicode": "e69a",
    "unicode_decimal": 59034 },

  {
    "icon_id": "24899567",
    "name": "phone-filled",
    "font_class": "phone-filled",
    "unicode": "e69b",
    "unicode_decimal": 59035 },

  {
    "icon_id": "24899568",
    "name": "phone",
    "font_class": "phone",
    "unicode": "e69c",
    "unicode_decimal": 59036 },

  {
    "icon_id": "24899570",
    "name": "email",
    "font_class": "email",
    "unicode": "e69e",
    "unicode_decimal": 59038 },

  {
    "icon_id": "24899571",
    "name": "personadd",
    "font_class": "personadd",
    "unicode": "e69f",
    "unicode_decimal": 59039 },

  {
    "icon_id": "24899558",
    "name": "chatboxes-filled",
    "font_class": "chatboxes-filled",
    "unicode": "e692",
    "unicode_decimal": 59026 },

  {
    "icon_id": "24899559",
    "name": "contact",
    "font_class": "contact",
    "unicode": "e693",
    "unicode_decimal": 59027 },

  {
    "icon_id": "24899560",
    "name": "chatbubble-filled",
    "font_class": "chatbubble-filled",
    "unicode": "e694",
    "unicode_decimal": 59028 },

  {
    "icon_id": "24899561",
    "name": "contact-filled",
    "font_class": "contact-filled",
    "unicode": "e695",
    "unicode_decimal": 59029 },

  {
    "icon_id": "24899562",
    "name": "chatboxes",
    "font_class": "chatboxes",
    "unicode": "e696",
    "unicode_decimal": 59030 },

  {
    "icon_id": "24899563",
    "name": "chatbubble",
    "font_class": "chatbubble",
    "unicode": "e697",
    "unicode_decimal": 59031 },

  {
    "icon_id": "24881290",
    "name": "upload-filled",
    "font_class": "upload-filled",
    "unicode": "e68e",
    "unicode_decimal": 59022 },

  {
    "icon_id": "24881292",
    "name": "upload",
    "font_class": "upload",
    "unicode": "e690",
    "unicode_decimal": 59024 },

  {
    "icon_id": "24881293",
    "name": "weixin",
    "font_class": "weixin",
    "unicode": "e691",
    "unicode_decimal": 59025 },

  {
    "icon_id": "24881274",
    "name": "compose",
    "font_class": "compose",
    "unicode": "e67f",
    "unicode_decimal": 59007 },

  {
    "icon_id": "24881275",
    "name": "qq",
    "font_class": "qq",
    "unicode": "e680",
    "unicode_decimal": 59008 },

  {
    "icon_id": "24881276",
    "name": "download-filled",
    "font_class": "download-filled",
    "unicode": "e681",
    "unicode_decimal": 59009 },

  {
    "icon_id": "24881277",
    "name": "pengyouquan",
    "font_class": "pyq",
    "unicode": "e682",
    "unicode_decimal": 59010 },

  {
    "icon_id": "24881279",
    "name": "sound",
    "font_class": "sound",
    "unicode": "e684",
    "unicode_decimal": 59012 },

  {
    "icon_id": "24881280",
    "name": "trash-filled",
    "font_class": "trash-filled",
    "unicode": "e685",
    "unicode_decimal": 59013 },

  {
    "icon_id": "24881281",
    "name": "sound-filled",
    "font_class": "sound-filled",
    "unicode": "e686",
    "unicode_decimal": 59014 },

  {
    "icon_id": "24881282",
    "name": "trash",
    "font_class": "trash",
    "unicode": "e687",
    "unicode_decimal": 59015 },

  {
    "icon_id": "24881284",
    "name": "videocam-filled",
    "font_class": "videocam-filled",
    "unicode": "e689",
    "unicode_decimal": 59017 },

  {
    "icon_id": "24881285",
    "name": "spinner-cycle",
    "font_class": "spinner-cycle",
    "unicode": "e68a",
    "unicode_decimal": 59018 },

  {
    "icon_id": "24881286",
    "name": "weibo",
    "font_class": "weibo",
    "unicode": "e68b",
    "unicode_decimal": 59019 },

  {
    "icon_id": "24881288",
    "name": "videocam",
    "font_class": "videocam",
    "unicode": "e68c",
    "unicode_decimal": 59020 },

  {
    "icon_id": "24881289",
    "name": "download",
    "font_class": "download",
    "unicode": "e68d",
    "unicode_decimal": 59021 },

  {
    "icon_id": "24879601",
    "name": "help",
    "font_class": "help",
    "unicode": "e679",
    "unicode_decimal": 59001 },

  {
    "icon_id": "24879602",
    "name": "navigate-filled",
    "font_class": "navigate-filled",
    "unicode": "e67a",
    "unicode_decimal": 59002 },

  {
    "icon_id": "24879603",
    "name": "plusempty",
    "font_class": "plusempty",
    "unicode": "e67b",
    "unicode_decimal": 59003 },

  {
    "icon_id": "24879604",
    "name": "smallcircle",
    "font_class": "smallcircle",
    "unicode": "e67c",
    "unicode_decimal": 59004 },

  {
    "icon_id": "24879605",
    "name": "minus-filled",
    "font_class": "minus-filled",
    "unicode": "e67d",
    "unicode_decimal": 59005 },

  {
    "icon_id": "24879606",
    "name": "micoff",
    "font_class": "micoff",
    "unicode": "e67e",
    "unicode_decimal": 59006 },

  {
    "icon_id": "24879588",
    "name": "closeempty",
    "font_class": "closeempty",
    "unicode": "e66c",
    "unicode_decimal": 58988 },

  {
    "icon_id": "24879589",
    "name": "clear",
    "font_class": "clear",
    "unicode": "e66d",
    "unicode_decimal": 58989 },

  {
    "icon_id": "24879590",
    "name": "navigate",
    "font_class": "navigate",
    "unicode": "e66e",
    "unicode_decimal": 58990 },

  {
    "icon_id": "24879591",
    "name": "minus",
    "font_class": "minus",
    "unicode": "e66f",
    "unicode_decimal": 58991 },

  {
    "icon_id": "24879592",
    "name": "image",
    "font_class": "image",
    "unicode": "e670",
    "unicode_decimal": 58992 },

  {
    "icon_id": "24879593",
    "name": "mic",
    "font_class": "mic",
    "unicode": "e671",
    "unicode_decimal": 58993 },

  {
    "icon_id": "24879594",
    "name": "paperplane",
    "font_class": "paperplane",
    "unicode": "e672",
    "unicode_decimal": 58994 },

  {
    "icon_id": "24879595",
    "name": "close",
    "font_class": "close",
    "unicode": "e673",
    "unicode_decimal": 58995 },

  {
    "icon_id": "24879596",
    "name": "help-filled",
    "font_class": "help-filled",
    "unicode": "e674",
    "unicode_decimal": 58996 },

  {
    "icon_id": "24879597",
    "name": "plus-filled",
    "font_class": "paperplane-filled",
    "unicode": "e675",
    "unicode_decimal": 58997 },

  {
    "icon_id": "24879598",
    "name": "plus",
    "font_class": "plus",
    "unicode": "e676",
    "unicode_decimal": 58998 },

  {
    "icon_id": "24879599",
    "name": "mic-filled",
    "font_class": "mic-filled",
    "unicode": "e677",
    "unicode_decimal": 58999 },

  {
    "icon_id": "24879600",
    "name": "image-filled",
    "font_class": "image-filled",
    "unicode": "e678",
    "unicode_decimal": 59000 },

  {
    "icon_id": "24855900",
    "name": "locked-filled",
    "font_class": "locked-filled",
    "unicode": "e668",
    "unicode_decimal": 58984 },

  {
    "icon_id": "24855901",
    "name": "info",
    "font_class": "info",
    "unicode": "e669",
    "unicode_decimal": 58985 },

  {
    "icon_id": "24855903",
    "name": "locked",
    "font_class": "locked",
    "unicode": "e66b",
    "unicode_decimal": 58987 },

  {
    "icon_id": "24855884",
    "name": "camera-filled",
    "font_class": "camera-filled",
    "unicode": "e658",
    "unicode_decimal": 58968 },

  {
    "icon_id": "24855885",
    "name": "chat-filled",
    "font_class": "chat-filled",
    "unicode": "e659",
    "unicode_decimal": 58969 },

  {
    "icon_id": "24855886",
    "name": "camera",
    "font_class": "camera",
    "unicode": "e65a",
    "unicode_decimal": 58970 },

  {
    "icon_id": "24855887",
    "name": "circle",
    "font_class": "circle",
    "unicode": "e65b",
    "unicode_decimal": 58971 },

  {
    "icon_id": "24855888",
    "name": "checkmarkempty",
    "font_class": "checkmarkempty",
    "unicode": "e65c",
    "unicode_decimal": 58972 },

  {
    "icon_id": "24855889",
    "name": "chat",
    "font_class": "chat",
    "unicode": "e65d",
    "unicode_decimal": 58973 },

  {
    "icon_id": "24855890",
    "name": "circle-filled",
    "font_class": "circle-filled",
    "unicode": "e65e",
    "unicode_decimal": 58974 },

  {
    "icon_id": "24855891",
    "name": "flag",
    "font_class": "flag",
    "unicode": "e65f",
    "unicode_decimal": 58975 },

  {
    "icon_id": "24855892",
    "name": "flag-filled",
    "font_class": "flag-filled",
    "unicode": "e660",
    "unicode_decimal": 58976 },

  {
    "icon_id": "24855893",
    "name": "gear-filled",
    "font_class": "gear-filled",
    "unicode": "e661",
    "unicode_decimal": 58977 },

  {
    "icon_id": "24855894",
    "name": "home",
    "font_class": "home",
    "unicode": "e662",
    "unicode_decimal": 58978 },

  {
    "icon_id": "24855895",
    "name": "home-filled",
    "font_class": "home-filled",
    "unicode": "e663",
    "unicode_decimal": 58979 },

  {
    "icon_id": "24855896",
    "name": "gear",
    "font_class": "gear",
    "unicode": "e664",
    "unicode_decimal": 58980 },

  {
    "icon_id": "24855897",
    "name": "smallcircle-filled",
    "font_class": "smallcircle-filled",
    "unicode": "e665",
    "unicode_decimal": 58981 },

  {
    "icon_id": "24855898",
    "name": "map-filled",
    "font_class": "map-filled",
    "unicode": "e666",
    "unicode_decimal": 58982 },

  {
    "icon_id": "24855899",
    "name": "map",
    "font_class": "map",
    "unicode": "e667",
    "unicode_decimal": 58983 },

  {
    "icon_id": "24855825",
    "name": "refresh-filled",
    "font_class": "refresh-filled",
    "unicode": "e656",
    "unicode_decimal": 58966 },

  {
    "icon_id": "24855826",
    "name": "refresh",
    "font_class": "refresh",
    "unicode": "e657",
    "unicode_decimal": 58967 },

  {
    "icon_id": "24855808",
    "name": "cloud-upload",
    "font_class": "cloud-upload",
    "unicode": "e645",
    "unicode_decimal": 58949 },

  {
    "icon_id": "24855809",
    "name": "cloud-download-filled",
    "font_class": "cloud-download-filled",
    "unicode": "e646",
    "unicode_decimal": 58950 },

  {
    "icon_id": "24855810",
    "name": "cloud-download",
    "font_class": "cloud-download",
    "unicode": "e647",
    "unicode_decimal": 58951 },

  {
    "icon_id": "24855811",
    "name": "cloud-upload-filled",
    "font_class": "cloud-upload-filled",
    "unicode": "e648",
    "unicode_decimal": 58952 },

  {
    "icon_id": "24855813",
    "name": "redo",
    "font_class": "redo",
    "unicode": "e64a",
    "unicode_decimal": 58954 },

  {
    "icon_id": "24855814",
    "name": "images-filled",
    "font_class": "images-filled",
    "unicode": "e64b",
    "unicode_decimal": 58955 },

  {
    "icon_id": "24855815",
    "name": "undo-filled",
    "font_class": "undo-filled",
    "unicode": "e64c",
    "unicode_decimal": 58956 },

  {
    "icon_id": "24855816",
    "name": "more",
    "font_class": "more",
    "unicode": "e64d",
    "unicode_decimal": 58957 },

  {
    "icon_id": "24855817",
    "name": "more-filled",
    "font_class": "more-filled",
    "unicode": "e64e",
    "unicode_decimal": 58958 },

  {
    "icon_id": "24855818",
    "name": "undo",
    "font_class": "undo",
    "unicode": "e64f",
    "unicode_decimal": 58959 },

  {
    "icon_id": "24855819",
    "name": "images",
    "font_class": "images",
    "unicode": "e650",
    "unicode_decimal": 58960 },

  {
    "icon_id": "24855821",
    "name": "paperclip",
    "font_class": "paperclip",
    "unicode": "e652",
    "unicode_decimal": 58962 },

  {
    "icon_id": "24855822",
    "name": "settings",
    "font_class": "settings",
    "unicode": "e653",
    "unicode_decimal": 58963 },

  {
    "icon_id": "24855823",
    "name": "search",
    "font_class": "search",
    "unicode": "e654",
    "unicode_decimal": 58964 },

  {
    "icon_id": "24855824",
    "name": "redo-filled",
    "font_class": "redo-filled",
    "unicode": "e655",
    "unicode_decimal": 58965 },

  {
    "icon_id": "24841702",
    "name": "list",
    "font_class": "list",
    "unicode": "e644",
    "unicode_decimal": 58948 },

  {
    "icon_id": "24841489",
    "name": "mail-open-filled",
    "font_class": "mail-open-filled",
    "unicode": "e63a",
    "unicode_decimal": 58938 },

  {
    "icon_id": "24841491",
    "name": "hand-thumbsdown-filled",
    "font_class": "hand-down-filled",
    "unicode": "e63c",
    "unicode_decimal": 58940 },

  {
    "icon_id": "24841492",
    "name": "hand-thumbsdown",
    "font_class": "hand-down",
    "unicode": "e63d",
    "unicode_decimal": 58941 },

  {
    "icon_id": "24841493",
    "name": "hand-thumbsup-filled",
    "font_class": "hand-up-filled",
    "unicode": "e63e",
    "unicode_decimal": 58942 },

  {
    "icon_id": "24841494",
    "name": "hand-thumbsup",
    "font_class": "hand-up",
    "unicode": "e63f",
    "unicode_decimal": 58943 },

  {
    "icon_id": "24841496",
    "name": "heart-filled",
    "font_class": "heart-filled",
    "unicode": "e641",
    "unicode_decimal": 58945 },

  {
    "icon_id": "24841498",
    "name": "mail-open",
    "font_class": "mail-open",
    "unicode": "e643",
    "unicode_decimal": 58947 },

  {
    "icon_id": "24841488",
    "name": "heart",
    "font_class": "heart",
    "unicode": "e639",
    "unicode_decimal": 58937 },

  {
    "icon_id": "24839963",
    "name": "loop",
    "font_class": "loop",
    "unicode": "e633",
    "unicode_decimal": 58931 },

  {
    "icon_id": "24839866",
    "name": "pulldown",
    "font_class": "pulldown",
    "unicode": "e632",
    "unicode_decimal": 58930 },

  {
    "icon_id": "24813798",
    "name": "scan",
    "font_class": "scan",
    "unicode": "e62a",
    "unicode_decimal": 58922 },

  {
    "icon_id": "24813786",
    "name": "bars",
    "font_class": "bars",
    "unicode": "e627",
    "unicode_decimal": 58919 },

  {
    "icon_id": "24813788",
    "name": "cart-filled",
    "font_class": "cart-filled",
    "unicode": "e629",
    "unicode_decimal": 58921 },

  {
    "icon_id": "24813790",
    "name": "checkbox",
    "font_class": "checkbox",
    "unicode": "e62b",
    "unicode_decimal": 58923 },

  {
    "icon_id": "24813791",
    "name": "checkbox-filled",
    "font_class": "checkbox-filled",
    "unicode": "e62c",
    "unicode_decimal": 58924 },

  {
    "icon_id": "24813794",
    "name": "shop",
    "font_class": "shop",
    "unicode": "e62f",
    "unicode_decimal": 58927 },

  {
    "icon_id": "24813795",
    "name": "headphones",
    "font_class": "headphones",
    "unicode": "e630",
    "unicode_decimal": 58928 },

  {
    "icon_id": "24813796",
    "name": "cart",
    "font_class": "cart",
    "unicode": "e631",
    "unicode_decimal": 58929 }] };exports.default = _default;

/***/ }),

/***/ 4:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** D:/桌面/神农百草堂/神农百草堂/pages.json ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map