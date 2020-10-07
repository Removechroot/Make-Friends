(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/user-chat/user-chat"],{"98ab":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("8581"));function u(t){return t&&t.__esModule?t:{default:t}}var i=1,a={props:{item:Object,index:Number,pretime:[Number,String]},data:function(){return{}},computed:{isSelf:function(){return i===this.item.user_id},shoreTime:function(){return r.default.getChatTime(this.item.create_time,this.pretime)}},methods:{}};e.default=a},b085:function(t,e,n){"use strict";n.r(e);var r=n("98ab"),u=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=u.a},c281:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var u=function(){var t=this,e=t.$createElement;t._self._c},i=[]},f809:function(t,e,n){"use strict";n.r(e);var r=n("c281"),u=n("b085");for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);var a,c=n("f0c5"),o=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=o.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/user-chat/user-chat-create-component',
    {
        'components/user-chat/user-chat-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f809"))
        })
    },
    [['components/user-chat/user-chat-create-component']]
]);
