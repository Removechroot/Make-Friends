(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-set/user-set"],{9102:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t._f("format")(t.currentSize));t.$mp.data=Object.assign({},{$root:{f0:n}})},u=[]},aa4f:function(t,e,n){"use strict";n.r(e);var o=n("9102"),r=n("f4ed");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);var c,i=n("f0c5"),a=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=a.exports},c5f4:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){n.e("components/uni-ui/list-item/list-item").then(function(){return resolve(n("5338"))}.bind(null,n)).catch(n.oe)},r={components:{listItem:o},data:function(){return{currentSize:1e3}},filters:{format:function(t){return t>1024?(t/1024).toFixed(2)+"MB":t.toFixed(2)+"KB"}},onLoad:function(){this.getStoragInfo()},methods:{clear:function(){var e=this;t.showModal({title:"提示",content:"是否清楚所有缓存",cancelText:"取消",confirmText:"清除",success:function(n){n.confirm&&(t.clearStorageSync(),setTimeout((function(){t.showToast({title:"清除成功"}),e.getStoragInfo()}),800))}})},getStoragInfo:function(){var e=t.getStorageInfoSync();this.currentSize=e.currentSize}}};e.default=r}).call(this,n("543d")["default"])},e82e:function(t,e,n){"use strict";(function(t){n("ee3d");o(n("66fd"));var e=o(n("aa4f"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},f4ed:function(t,e,n){"use strict";n.r(e);var o=n("c5f4"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=r.a}},[["e82e","common/runtime","common/vendor"]]]);