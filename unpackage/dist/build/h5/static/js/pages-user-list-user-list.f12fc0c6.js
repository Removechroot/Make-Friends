(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-list-user-list"],{"06c5":function(t,e,n){"use strict";n("a630"),n("fb6a"),n("d3b7"),n("25f0"),n("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var a=r(n("6b75"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(t){if("string"===typeof t)return(0,a.default)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,a.default)(t,e):void 0}}},"150a":function(t,e,n){"use strict";var a=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("2909")),i=a(n("8ffa")),o=a(n("a343")),u=[{avatar:"../../static/lxg.jpg",username:"用户1",age:21,sex:0,isFollow:!1},{avatar:"../../static/lxg.jpg",username:"用户2",age:21,sex:1,isFollow:!0}],c={components:{loadMore:i.default,userList:o.default},data:function(){return{windowHeight:600,tabIndex:0,list:[{name:"互关",num:0},{name:"关注",num:12},{name:"粉丝",num:13}],newsList:[]}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(e){t.windowHeight=e.windowHeight-uni.upx2px(100)}}),this.getData()},onNavigationBarSearchInputClicked:function(t){uni.navigateTo({url:"../search/search?type=user"})},onNavigationBarButtonTap:function(){uni.navigateBack()},methods:{OnclickEvent:function(t){this.tabIndex=t},onchange:function(t){console.log(t)},loadmore:function(t){var e=this.newsList[t];"上拉加载更多"===e.loadmore&&(e.loadmore="努力加载中...",setTimeout((function(){e.list=[].concat((0,r.default)(e.list),(0,r.default)(e.list)),e.loadmore="上拉加载更多"}),800))},getData:function(){for(var t=[],e=0;e<this.list.length;e++){var n={loadmore:"上拉加载更多",list:[]};e<2&&(n.list=u),t.push(n)}this.newsList=t}}};e.default=c},1668:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={userList:n("a343").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"flex align-center",staticStyle:{height:"100rpx"}},t._l(t.list,(function(e,a){return n("v-uni-view",{key:a,staticClass:"flex-1 font-md  flex align-center justify-center",class:t.tabIndex===a?"text-main font-lg font-weight-bold":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.OnclickEvent(a)}}},[t._v(t._s(e.name)),e.num?n("v-uni-text",{staticClass:"ml-2"},[t._v(t._s(e.num))]):t._e()],1)})),1),n("v-uni-swiper",{style:"height:"+t.windowHeight+"px",attrs:{duration:150,current:t.tabIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onchange.apply(void 0,arguments)}}},t._l(t.newsList,(function(e,a){return n("v-uni-swiper-item",{key:e.id},[n("v-uni-scroll-view",{style:"height:"+t.windowHeight+"px",attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadmore(a)}}},[e.list.length>0?[t._l(e.list,(function(t,e){return[n("user-list",{key:e+"_0",attrs:{item:t,index:e}})]})),e.list.length>10?n("load-more",{attrs:{loadmore:e.loadmore}}):t._e()]:[n("nothing")]],2)],1)})),1)],1)},i=[]},"1fab":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:["loadmore"],data:function(){return{}}};e.default=a},2909:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var a=u(n("6005")),r=u(n("db90")),i=u(n("06c5")),o=u(n("3427"));function u(t){return t&&t.__esModule?t:{default:t}}function c(t){return(0,a.default)(t)||(0,r.default)(t)||(0,i.default)(t)||(0,o.default)()}},"2bbe":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=a},"300a":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"flex align-center justify-center py-3 font"},[n("v-uni-text",{staticClass:"font text-light-muted"},[t._v(t._s(t.loadmore))])],1)},i=[]},3427:function(t,e,n){"use strict";function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},"357b":function(t,e,n){"use strict";n.r(e);var a=n("c1d2"),r=n("3947");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("74aa");var o,u=n("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"230e4acd",null,!1,a["a"],o);e["default"]=c.exports},3947:function(t,e,n){"use strict";n.r(e);var a=n("2bbe"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},4357:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("357b")),i={components:{uniBadge:r.default},props:["item","index"],data:function(){return{}},methods:{opendetail:function(t){}}};e.default=i},"470f":function(t,e,n){var a=n("b722");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("5109aebc",a,!0,{sourceMap:!1,shadowMode:!1})},6005:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var a=r(n("6b75"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t){if(Array.isArray(t))return(0,a.default)(t)}},"6b75":function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},"6c52":function(t,e,n){"use strict";n.r(e);var a=n("4357"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"74aa":function(t,e,n){"use strict";var a=n("470f"),r=n.n(a);r.a},"89c7":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uniBadge:n("357b").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:" flex p-2 align-center border-bottom border-light-secondary ",attrs:{"hover-class":"bg-light"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.opendetail(t.index)}}},[n("v-uni-image",{staticClass:"rounded-circle mr-2",staticStyle:{width:"100rpx",height:"100rpx"},attrs:{src:t.item.avatar}}),n("v-uni-view",{staticClass:"flex flex-column flex-1"},[n("v-uni-text",{staticClass:"font-md text-dark"},[t._v(t._s(t.item.username))]),n("uni-badge",{attrs:{text:t.item.age,type:t.item.sex?"primary":"error",size:"small"}},[n("v-uni-text",{staticClass:"iconfont  font-sm text-white",class:t.item.sex?"icon-nan":"icon-nv",staticStyle:{"margin-right":"5rpx"}})],1)],1),n("v-uni-view",{staticClass:"uni-icon uni-icon-checkbox-filled ",class:t.item.isFollow?"text-light-muted":"text-main"})],1)],1)},i=[]},"8ffa":function(t,e,n){"use strict";n.r(e);var a=n("300a"),r=n("c576");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o,u=n("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"954e438c",null,!1,a["a"],o);e["default"]=c.exports},a343:function(t,e,n){"use strict";n.r(e);var a=n("89c7"),r=n("6c52");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o,u=n("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"77c5f26f",null,!1,a["a"],o);e["default"]=c.exports},b722:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-badge[data-v-230e4acd]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:20px;line-height:20px;color:#333;border-radius:100px;background-color:#f1f1f1;background-color:initial;text-align:center;font-family:Helvetica Neue,Helvetica,sans-serif;font-size:12px;padding:0 6px}.uni-badge--inverted[data-v-230e4acd]{padding:0 5px 0 0;color:#f1f1f1}.uni-badge--default[data-v-230e4acd]{color:#333;background-color:#f1f1f1}.uni-badge--default-inverted[data-v-230e4acd]{color:#999;background-color:initial}.uni-badge--primary[data-v-230e4acd]{color:#fff;background-color:#007aff}.uni-badge--primary-inverted[data-v-230e4acd]{color:#007aff;background-color:initial}.uni-badge--success[data-v-230e4acd]{color:#fff;background-color:#4cd964}.uni-badge--success-inverted[data-v-230e4acd]{color:#4cd964;background-color:initial}.uni-badge--warning[data-v-230e4acd]{color:#fff;background-color:#f0ad4e}.uni-badge--warning-inverted[data-v-230e4acd]{color:#f0ad4e;background-color:initial}.uni-badge--error[data-v-230e4acd]{color:#fff;background-color:#dd524d}.uni-badge--error-inverted[data-v-230e4acd]{color:#dd524d;background-color:initial}.uni-badge--small[data-v-230e4acd]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}',""]),t.exports=e},c1d2:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.text?n("v-uni-text",{staticClass:"uni-badge",class:t.inverted?"uni-badge--"+t.type+" uni-badge--"+t.size+" uni-badge--"+t.type+"-inverted":"uni-badge--"+t.type+" uni-badge--"+t.size,style:t.badgeStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick()}}},[t._t("default"),t._v(t._s(t.text))],2):t._e()},i=[]},c576:function(t,e,n){"use strict";n.r(e);var a=n("1fab"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},cbb8:function(t,e,n){"use strict";n.r(e);var a=n("150a"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},db90:function(t,e,n){"use strict";function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},f5e0:function(t,e,n){"use strict";n.r(e);var a=n("1668"),r=n("cbb8");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o,u=n("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"c64496f0",null,!1,a["a"],o);e["default"]=c.exports}}]);