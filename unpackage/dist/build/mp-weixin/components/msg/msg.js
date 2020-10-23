(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/msg/msg"],{"061d":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(e("7782"));function a(n){return n&&n.__esModule?n:{default:n}}var r=function(){e.e("components/uni-badge/uni-badge").then(function(){return resolve(e("357b"))}.bind(null,e)).catch(e.oe)},o={components:{uniBadge:r},props:{item:Object,index:Number},data:function(){return{}},filters:{formatTime:function(n){return u.default.gettime(n)}},methods:{open:function(){n.navigateTo({url:"../../pages/user-chat/user-chat"})}}};t.default=o}).call(this,e("543d")["default"])},1378:function(n,t,e){"use strict";e.r(t);var u=e("061d"),a=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,(function(){return u[n]}))}(r);t["default"]=a.a},"5b2d":function(n,t,e){"use strict";e.r(t);var u=e("e189"),a=e("1378");for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);var o,i=e("f0c5"),c=Object(i["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);t["default"]=c.exports},e189:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return u}));var u={uniBadge:function(){return e.e("components/uni-badge/uni-badge").then(e.bind(null,"357b"))}},a=function(){var n=this,t=n.$createElement,e=(n._self._c,n._f("formatTime")(n.item.updata_time));n.$mp.data=Object.assign({},{$root:{f0:e}})},r=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/msg/msg-create-component',
    {
        'components/msg/msg-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5b2d"))
        })
    },
    [['components/msg/msg-create-component']]
]);
