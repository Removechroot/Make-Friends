(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-topic-detail-topic-detail"],{"0610":function(t,e,n){"use strict";n.r(e);var i=n("6f20"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"06c5":function(t,e,n){"use strict";n("a630"),n("fb6a"),n("d3b7"),n("25f0"),n("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var i=a(n("6b75"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(t){if("string"===typeof t)return(0,i.default)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,i.default)(t,e):void 0}}},"089a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:["loadmore"],data:function(){return{}}};e.default=i},1412:function(t,e,n){"use strict";var i=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2909")),o=i(n("6c90")),s=i(n("21f6")),u=i(n("baec")),r=i(n("1d4f")),c=[{username:"罗三岁小可爱",userpic:"../../static/xk.jpg",newstime:"2020-20-20 下午4:32",isFollow:!1,title:"震惊...我居然舔了两口猫屁股",titlepic:"../../static/mpg.jpg",support:{type:"",support_count:"999+",unsupport_count:2},comment_count:2,share_name:2},{username:"虾老板",userpic:"../../static/xia.jpg",newstime:"2020-20-20 下午4:32",isFollow:!1,title:"我喜欢了一个30岁的女人...居然让我....",titlepic:"",support:{type:"unsupport",support_count:0,unsupport_count:"999+"},comment_count:2,share_name:2},{username:"虾老板",userpic:"../../static/xia.jpg",newstime:"2020-20-20 下午4:32",isFollow:!1,title:"我喜欢了一个30岁的女人...居然让我....",titlepic:"",support:{type:"unsupport",support_count:0,unsupport_count:"999+"},comment_count:2,share_name:2}],l={components:{topicDetail:o.default,commonList:s.default,nothing:u.default,loadMore:r.default},computed:{listdata:function(){return 0===this.tabindex?this.defauledata:this.hotData},loadtext:function(){return 0===this.tabindex?this.loadtext1:this.loadtext2}},onReachBottom:function(){this.loadmore()},data:function(){return{info:[],hostList:[{title:"[新人必读]这是我也不知道为了凑数撑开写的字然后还得为了测试长度溢出问题"},{title:"[新人必读2]这是我也不知道为了凑数撑开写的字然后还得为了测试长度溢出问题"}],defauledata:[],hotData:[],tabindex:0,loadtext1:"上拉加载更多",loadtext2:"上拉加载更多"}},onLoad:function(t){if(t){var e=JSON.parse(t.detail);this.info=e,this.defauledata=c}},methods:{OnclickEvent:function(t){this.tabindex=t},Follow:function(t){this.list[t].isFollow=!0,uni.showToast({title:"关注成功"})},type:function(t){console.log(t);var e=this.newsList[0].list[t.index],n="support"===t.type?"顶成功":"踩成功";if(""===e.support.type)return console.log(1),e.support.type=t.type,void e.support[t.type+"_count"]++;"support"===e.support.type&&"unsupport"===t.type&&(console.log(2),e.support.support_count--,e.support.unsupport_count++),"unsupport"===e.support.type&&"support"===t.type&&(console.log(3),e.support.support_count++,e.support.unsupport_count--),e.support.type=t.type,uni.showToast({title:n})},loadmore:function(){var t=this,e=this.tabindex;console.log(e),"上拉加载更多"===this.loadtext&&(console.log("1"),0===e?(console.log("2"),this.loadtext1="加载中...",setTimeout((function(){t.defauledata=[].concat((0,a.default)(t.defauledata),(0,a.default)(t.defauledata)),t.loadtext1="上拉加载更多"}),2e3)):(console.log("3"),this.loadtext2="加载中...",setTimeout((function(){t.hotData=[].concat((0,a.default)(t.hotData),(0,a.default)(t.hotData)),t.loadtext2="上拉加载更多"}),2e3)))}}};e.default=l},"1d4f":function(t,e,n){"use strict";n.r(e);var i=n("2d7f"),a=n("eb4a");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var s,u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"42ce74d8",null,!1,i["a"],s);e["default"]=r.exports},"1e59":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:["info"],data:function(){return{}},methods:{}};e.default=i},"21f6":function(t,e,n){"use strict";n.r(e);var i=n("35a3"),a=n("0610");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("f020");var s,u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"009ae26e",null,!1,i["a"],s);e["default"]=r.exports},2909:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var i=u(n("6005")),a=u(n("db90")),o=u(n("06c5")),s=u(n("3427"));function u(t){return t&&t.__esModule?t:{default:t}}function r(t){return(0,i.default)(t)||(0,a.default)(t)||(0,o.default)(t)||(0,s.default)()}},"2d7f":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"flex align-center justify-center py-3 font"},[n("v-uni-text",{staticClass:"font text-light-muted"},[t._v(t._s(t.loadmore))])],1)},o=[]},3427:function(t,e,n){"use strict";function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"35a3":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"p-2"},[n("v-uni-view",{staticClass:"flex align-center justify-between"},[n("v-uni-view",{staticClass:"flex justify-center align-center img"},[n("v-uni-image",{attrs:{src:t.item.userpic,"lazy-load":!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openspace.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"username ml-2"},[n("v-uni-view",{staticClass:"font",staticStyle:{"line-height":"1.5"}},[t._v(t._s(t.item.username))]),n("v-uni-view",{staticClass:"font-sm",staticStyle:{color:"#9d9589","line-height":"1.5"}},[t._v(t._s(t.item.newstime))])],1)],1),t.item.isFollow?n("v-uni-view",{staticClass:"nofocus font-sm flex justify-center align-center",attrs:{"hover-class":"animate__animated animate__jello animate__fast"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.follow(!1)}}},[t._v("已关注")]):n("v-uni-view",{staticClass:"focus bg-danger flex justify-center align-center",attrs:{"hover-class":"animate__animated animate__jello animate__fast"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.follow(!0)}}},[t._v("关注")])],1),n("v-uni-view",{staticStyle:{"min-height":"80rpx"}},[n("v-uni-view",{staticClass:"centencon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDtail.apply(void 0,arguments)}}},[t._v(t._s(t.item.title))]),t._t("default",[t.item.titlepic?[n("v-uni-image",{staticClass:"w-100",staticStyle:{height:"355rpx","border-radius":"5px"},attrs:{src:t.item.titlepic},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDtail.apply(void 0,arguments)}}})]:t._e()])],2),n("v-uni-view",{staticClass:"flex bottom"},[n("v-uni-view",{staticClass:"flex align-center justify-center flex-1 animate__animated animate__faster",class:"support"===t.item.support.type?"ac-select":"",attrs:{"hover-class":"animate__jello text-main"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dosupport("support")}}},[n("v-uni-text",{staticClass:"iconfont icon-dianzan2 mr-2",style:"support"===t.item.support.type?"color:#ff4a6a;":""}),n("v-uni-text",[t._v(t._s(t.item.support.support_count))])],1),n("v-uni-view",{staticClass:"flex align-center justify-center flex-1 animate__animated animate__faster",class:"unsupport"===t.item.support.type?"ac-select":"",attrs:{"hover-class":"animate__jello text-main"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dosupport("unsupport")}}},[n("v-uni-text",{staticClass:"iconfont icon-cai mr-2",style:"unsupport"===t.item.support.type?"color:#ff4a6a;":""}),n("v-uni-text",[t._v(t._s(t.item.support.unsupport_count))])],1),n("v-uni-view",{staticClass:"flex align-center justify-center flex-1 animate__animated animate__faster",attrs:{"hover-class":"animate__animated animate__jello animate__fast"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.doComment.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-pinglun mr-2"}),n("v-uni-text",[t._v(t._s(t.item.comment_count))])],1),n("v-uni-view",{staticClass:"flex align-center justify-center flex-1 animate__animated animate__faster",attrs:{"hover-class":"animate__animated animate__jello animate__fast"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.doShare.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-fenxiang_2 mr-2"}),n("v-uni-text",[t._v(t._s(t.item.share_name))])],1)],1)],1)},o=[]},"4aa4":function(t,e,n){"use strict";var i=n("d336"),a=n.n(i);a.a},"4b04":function(t,e,n){"use strict";n.r(e);var i=n("1e59"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"51be":function(t,e,n){"use strict";n.r(e);var i=n("bac7"),a=n("d541");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var s,u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"55a313e1",null,!1,i["a"],s);e["default"]=r.exports},6005:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var i=a(n("6b75"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t))return(0,i.default)(t)}},"6b75":function(t,e,n){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"6c90":function(t,e,n){"use strict";n.r(e);var i=n("8478"),a=n("4b04");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("4aa4");var s,u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"c8dc547c",null,!1,i["a"],s);e["default"]=r.exports},"6f20":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},props:{item:Object,index:{type:Number,default:-1},isdetail:!1,_id:""},methods:{openspace:function(){console.log(1)},follow:function(t){this.$emit("Follow",{id:this.item._id,type:t,index:this.index})},openDtail:function(){this.isdetail||uni.navigateTo({url:"../../pages/detail/detail?detail="+JSON.stringify(this.item)})},dosupport:function(t){this.$emit("type",{index:this.index,type:t})},doComment:function(){if(!this.isdetail)return this.openDtail();this.$emit("doComment")},doShare:function(){if(!this.isdetail)return this.openDtail();this.$emit("doShare")}}};e.default=i},8478:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"position-relative"},[n("v-uni-image",{staticClass:"w-100 filter",staticStyle:{height:"300rpx"},attrs:{src:t.info.cover,mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"position-relative bg-white px-2 pb-2",staticStyle:{"z-index":"10"}},[n("v-uni-view",{staticClass:"flex"},[n("v-uni-image",{staticClass:"rounded border",staticStyle:{height:"150rpx",width:"150rpx","margin-top":"-75rpx"},attrs:{src:t.info.cover,mode:""}}),n("v-uni-text",{staticClass:"font-md px-2"},[t._v("#"+t._s(t.info.title))])],1),n("v-uni-view",{staticClass:"flex align-center mt-2 font text-secondary"},[n("v-uni-text",{staticClass:"mr-2"},[t._v("动态："+t._s(t.info.news_count))]),n("v-uni-text",[t._v("今日："+t._s(t.info.today_count))])],1),n("v-uni-view",{staticClass:"font-md text-secondary"},[t._v(t._s(t.info.desc))])],1)],1)},o=[]},b826:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".filter[data-v-c8dc547c]{-webkit-filter:blur(10px);filter:blur(10px)}",""]),t.exports=e},bac7:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={topicDetail:n("6c90").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("topic-detail",{attrs:{info:t.info}}),n("divider"),t._l(t.hostList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"p-2 flex align-center border-bottom ",attrs:{"hover-class":"bg-light"}},[n("v-uni-text",{staticClass:"iconfont icon-xihuan1 text-main"}),n("v-uni-text",{staticClass:"font text-dark text-ellipsis"},[t._v(t._s(e.title))])],1)})),n("divider"),n("v-uni-view",{staticClass:"flex align-center py-2"},[n("v-uni-view",{staticClass:"flex-1 font-md  flex align-center justify-center",class:0===t.tabindex?"text-main font-lg font-weight-bold":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.OnclickEvent(0)}}},[t._v("默认")]),n("v-uni-view",{staticClass:"flex-1 font-md flex align-center justify-center",class:1===t.tabindex?"text-main font-lg font-weight-bold":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.OnclickEvent(1)}}},[t._v("最新")])],1),t.listdata.length>0?[t._l(t.listdata,(function(e,i){return t.listdata.length>0?[n("common-list",{attrs:{item:e,index:i}}),n("divider")]:t._e()}))]:[n("nothing")],n("load-more",{attrs:{loadmore:t.loadtext}})],2)},o=[]},c504:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".img uni-image[data-v-009ae26e]{width:%?85?%;height:%?85?%;border-radius:100%}.username[data-v-009ae26e]{padding-right:160}.focus[data-v-009ae26e]{width:%?90?%;height:%?50?%;background-color:#ff4a6ax;color:#fff;border-radius:5px}.nofocus[data-v-009ae26e]{width:%?90?%;height:%?50?%;background-color:silver;color:#fff;border-radius:5px}.centencon[data-v-009ae26e]{font-size:%?30?%;margin:%?10?% 0}.bottonfz[data-v-009ae26e]{font-size:%?35?%}.bottonfz uni-text[data-v-009ae26e]{padding-left:%?10?%}.ac-select[data-v-009ae26e]{color:#ff4a6a}",""]),t.exports=e},d336:function(t,e,n){var i=n("b826");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("b56bcb52",i,!0,{sourceMap:!1,shadowMode:!1})},d3a6:function(t,e,n){var i=n("c504");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("4debf532",i,!0,{sourceMap:!1,shadowMode:!1})},d541:function(t,e,n){"use strict";n.r(e);var i=n("1412"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},db90:function(t,e,n){"use strict";function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},eb4a:function(t,e,n){"use strict";n.r(e);var i=n("089a"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},f020:function(t,e,n){"use strict";var i=n("d3a6"),a=n.n(i);a.a}}]);