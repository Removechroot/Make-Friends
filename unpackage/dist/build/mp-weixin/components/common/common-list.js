(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/common-list"],{"04ed":function(t,n,e){},"0610":function(t,n,e){"use strict";e.r(n);var i=e("11c7"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"11c7":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},props:{item:Object,index:{type:Number,default:-1},isdetail:!1},methods:{openspace:function(){console.log(1)},follow:function(){this.$emit("Follow",this.index)},openDtail:function(){this.isdetail||t.navigateTo({url:"../../pages/detail/detail?detail="+JSON.stringify(this.item)})},dosupport:function(t){this.$emit("type",{index:this.index,type:t})},doComment:function(){if(!this.isdetail)return this.openDtail();this.$emit("doComment")},doShare:function(){if(!this.isdetail)return this.openDtail();this.$emit("doShare")}}};n.default=e}).call(this,e("543d")["default"])},"21f6":function(t,n,e){"use strict";e.r(n);var i=e("85df"),o=e("0610");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("a23a");var u,r=e("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);n["default"]=c.exports},"85df":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement;t._self._c},a=[]},a23a:function(t,n,e){"use strict";var i=e("04ed"),o=e.n(i);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/common-list-create-component',
    {
        'components/common/common-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("21f6"))
        })
    },
    [['components/common/common-list-create-component']]
]);
