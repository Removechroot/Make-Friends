(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-ui/uni-nav-bar/uni-nav-bar"],{"74b3":function(t,n,e){"use strict";e.r(n);var i=e("c70c"),u=e("86cb");for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("8b37");var r,a=e("f0c5"),c=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"a3df84ee",null,!1,i["a"],r);n["default"]=c.exports},"86cb":function(t,n,e){"use strict";e.r(n);var i=e("fc7f"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=u.a},"8b37":function(t,n,e){"use strict";var i=e("d718"),u=e.n(i);u.a},c70c:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var u=function(){var t=this,n=t.$createElement;t._self._c},o=[]},d718:function(t,n,e){},fc7f:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){e.e("components/uni-ui/uni-status-bar/uni-status-bar").then(function(){return resolve(e("dbf2"))}.bind(null,e)).catch(e.oe)},u=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/uni-icons/uni-icons")]).then(function(){return resolve(e("977d"))}.bind(null,e)).catch(e.oe)},o={name:"UniNavBar",components:{uniStatusBar:i,uniIcons:u},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[String,Boolean],default:!1},border:{type:[String,Boolean],default:!0}},mounted:function(){t.report&&""!==this.title&&t.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("goblack")},onClickRight:function(){this.$emit("clickRight")}}};n.default=o}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-ui/uni-nav-bar/uni-nav-bar-create-component',
    {
        'components/uni-ui/uni-nav-bar/uni-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("74b3"))
        })
    },
    [['components/uni-ui/uni-nav-bar/uni-nav-bar-create-component']]
]);
