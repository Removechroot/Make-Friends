<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{1361:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLaunch:function(){console.log("App Launch"),this.$U.onNetWork()},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=o},2179:function(e,n,t){"use strict";t.r(n);var o=t("1361"),r=t.n(o);for(var c in o)"default"!==c&&function(e){t.d(n,e,(function(){return o[e]}))}(c);n["default"]=r.a},"395f":function(e,n,t){},"55c4":function(e,n,t){"use strict";(function(e){t("ee3d");var n=u(t("66fd")),o=u(t("7161")),r=u(t("2a6a")),c=u(t("bab4"));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var l=function(){t.e("components/common/divider").then(function(){return resolve(t("7bb2"))}.bind(null,t)).catch(t.oe)},p=function(){t.e("components/common/nothing").then(function(){return resolve(t("baec"))}.bind(null,t)).catch(t.oe)};n.default.prototype.$config=r.default,n.default.prototype.$U=c.default,n.default.component("divider",l),n.default.component("nothing",p),n.default.config.productionTip=!1,o.default.mpType="app";var d=new n.default(f({},o.default));e(d).$mount()}).call(this,t("543d")["createApp"])},7161:function(e,n,t){"use strict";t.r(n);var o=t("2179");for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);t("7f1a");var c,u,i,f,a=t("f0c5"),l=Object(a["a"])(o["default"],c,u,!1,null,null,null,!1,i,f);n["default"]=l.exports},"7f1a":function(e,n,t){"use strict";var o=t("395f"),r=t.n(o);r.a}},[["55c4","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{1361:function(e,n,t){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLaunch:function(){var n=e.getStorageSync("uni_id_token");t.callFunction({name:"user-center",data:{action:"checkToken",params:{token:n}}}).then((function(e){e.result.code})),console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=o}).call(this,t("543d")["default"],t("a9ff")["default"])},2179:function(e,n,t){"use strict";t.r(n);var o=t("1361"),r=t.n(o);for(var c in o)"default"!==c&&function(e){t.d(n,e,(function(){return o[e]}))}(c);n["default"]=r.a},"395f":function(e,n,t){},"55c4":function(e,n,t){"use strict";(function(e){t("ee3d");var n=r(t("66fd")),o=r(t("7161"));r(t("4ef4"));function r(e){return e&&e.__esModule?e:{default:e}}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var a=function(){t.e("components/common/divider").then(function(){return resolve(t("7bb2"))}.bind(null,t)).catch(t.oe)},f=function(){t.e("components/common/nothing").then(function(){return resolve(t("baec"))}.bind(null,t)).catch(t.oe)};n.default.component("divider",a),n.default.component("nothing",f),n.default.config.productionTip=!1,o.default.mpType="app";var l=new n.default(u({},o.default));e(l).$mount()}).call(this,t("543d")["createApp"])},7161:function(e,n,t){"use strict";t.r(n);var o=t("2179");for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);t("7f1a");var c,u,i,a,f=t("f0c5"),l=Object(f["a"])(o["default"],c,u,!1,null,null,null,!1,i,a);n["default"]=l.exports},"7f1a":function(e,n,t){"use strict";var o=t("395f"),r=t.n(o);r.a}},[["55c4","common/runtime","common/vendor"]]]);
>>>>>>> origin/Cloud
