(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-news"],{"092a":function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("99af"),n("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2909")),o=i(n("74b3")),s=i(n("94ee")),r=i(n("0623")),u=i(n("f1e3")),c=i(n("0c40")),l=i(n("3614")),f={components:{uniNavBar:o.default,CommonList:s.default,uniLoadMore:r.default,hotCart:u.default,topicList:c.default},data:function(){return{tabIndex:0,tabBars:[{name:"关注"},{name:"话题"}],windowHeight:500,list:[],status:"more",hotlist:[{name:"关注"},{name:"话题"},{name:"热门"},{name:"鬼畜"},{name:"快落"},{name:"肥宅"}],topicList:[],swiperimglist:[],affectedDocs:0,page:0,isshow:!1,Uid:""}},onLoad:function(){var t=uni.getSystemInfoSync();this.windowHeight=t.windowHeight-t.statusBarHeight-44,this.getlist(),this.GetData()},onTabItemTap:function(t){"动态"===t.text&&(this.list.length>=0&&(this.isshow=!1),this.getlist())},methods:{GetData:function(){var e=this;t.callFunction({name:"GettopicList"}).then((function(t){var n=t.result.data;console.log(n),e.topicList=n})),t.callFunction({name:"Getswiperimglist"}).then((function(t){var n=t.result.data;e.swiperimglist=n}))},Follow:function(e){var n=this,i=e.id,a=e.type,o=e.index;t.callFunction({name:"update",data:{type:"isFollow",id:i,isFollow:a}}).then((function(t){if(0===t.result.status){n.list[o].isFollow=a,n.list.splice(o,1);var e=!0===a?"关注成功":"取消关注";uni.showToast({title:e}),0===n.list.length&&(n.isshow=!0)}}))},getlist:function(){var e=this;t.callFunction({name:"GetFollow"}).then((function(t){if(t.success){var n=t.result,i=n.context,a=n.affectedDocs;if(e.list=i,0===e.list.length)return e.isshow=!0;e.affectedDocs=a}}))},openAddinput:function(){uni.navigateTo({url:"../add-input/add-input"})},onchange:function(t){this.tabIndex=t.detail.current},changeTab:function(t){this.tabIndex=t},type:function(t){var e=this.list[t.index];l.default.Nice(t,e)},loadmoreEvent:function(){var e=this;if("more"===this.status){if(this.list.length===this.affectedDocs)return this.status="nomore";this.status="loading",this.page++,t.callFunction({name:"GetFollow",data:{page:this.page}}).then((function(t){var n=t.result.context;e.list=[].concat((0,a.default)(e.list),(0,a.default)(n)),e.status="more"}))}},more:function(){uni.navigateTo({url:"../topic-cate/topic-cate"})},OpenSeach:function(){uni.navigateTo({url:"../search/search?type=topic"})}}};e.default=f}).call(this,n("a9ff")["default"])},"09e5":function(t,e,n){var i=n("c315");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("db385836",i,!0,{sourceMap:!1,shadowMode:!1})},"0c40":function(t,e,n){"use strict";n.r(e);var i=n("d53d"),a=n("8acb");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var s,r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"1eabf830",null,!1,i["a"],s);e["default"]=u.exports},3610:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"flex align-center justify-between"},[n("v-uni-text",{staticClass:"font-md"},[t._v("热门分类")]),n("v-uni-view",{staticClass:"flex align-center font text-secondary animate__animated",attrs:{"hover-class":"animate__jello"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.OpenMore.apply(void 0,arguments)}}},[t._v("更多"),n("v-uni-text",{staticClass:"iconfont icon-jinru"})],1)],1),n("v-uni-view",{staticClass:"flex align-center py-3 border-bottom px-1"},t._l(t.hotCart,(function(e){return n("v-uni-view",{key:e.name,staticClass:"border rounded bg-light mx-1 px-2 animate__animated ",attrs:{"hover-class":"animate__jello"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.Opendetail(e,t.index)}}},[t._v(t._s(e.name))])})),1)],1)},o=[]},"8acb":function(t,e,n){"use strict";n.r(e);var i=n("d25d"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"8f1d":function(t,e,n){"use strict";var i=n("09e5"),a=n.n(i);a.a},aaf5:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniLoadMore:n("0623").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-nav-bar",{attrs:{border:!1,fixed:!0,statusBar:!0},on:{clickRight:function(e){arguments[0]=e=t.$handleEvent(e),t.openAddinput.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"flex align-center justify-center font-weight-bold w-100"},t._l(t.tabBars,(function(e,i){return n("v-uni-view",{key:i,staticClass:"font-md  mx-1 text-light-muted",class:t.tabIndex===i?"font-lg text-main":"font-sm text-light-muted",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab(i)}}},[t._v(t._s(e.name))])})),1),n("v-uni-text",{staticClass:"iconfont icon-fatie font-lg",attrs:{slot:"right"},slot:"right"})],1),n("v-uni-swiper",{style:"height:"+t.windowHeight+"px",attrs:{current:t.tabIndex,duration:150},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onchange.apply(void 0,arguments)}}},[n("v-uni-swiper-item",[n("v-uni-scroll-view",{style:"height:"+t.windowHeight+"px",attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadmoreEvent.apply(void 0,arguments)}}},[t._l(t.list,(function(e,i){return[n("common-list",{key:i+"_0",attrs:{item:e,index:i},on:{type:function(e){arguments[0]=e=t.$handleEvent(e),t.type.apply(void 0,arguments)},Follow:function(e){arguments[0]=e=t.$handleEvent(e),t.Follow.apply(void 0,arguments)}}}),n("divider")]})),t.isshow?[n("nothing",[n("v-uni-view",[t._v("点个关注吧太难了")])],1)]:t._e(),t.list.length>3?[n("uni-load-more",{attrs:{status:t.status}})]:t._e()],2)],1),n("v-uni-swiper-item",[n("v-uni-scroll-view",{style:"height:"+t.windowHeight+"px",attrs:{"scroll-y":!0}},[n("hot-cart",{attrs:{hotCart:t.hotlist},on:{more:function(e){arguments[0]=e=t.$handleEvent(e),t.more.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"p-2"},[n("v-uni-view",{staticClass:"flex rounded bg-light align-center justify-center py-2 text-secondary",staticStyle:{height:"30rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.OpenSeach.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-sousuo mr-2"}),n("v-uni-text",[t._v("搜索话题")])],1)],1),n("v-uni-swiper",{staticClass:"px-2 pb-2",attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3}},t._l(t.swiperimglist,(function(t,e){return n("v-uni-swiper-item",{key:e},[n("v-uni-image",{staticClass:"rounded w-100",staticStyle:{height:"300px"},attrs:{src:t.Url,mode:"widthFix"}})],1)})),1),n("v-uni-view",{staticClass:"p-2 font-md"},[t._v("最近更新")]),t._l(t.topicList,(function(t,e){return[n("topic-list",{key:e+"_0",attrs:{item:t,index:e}})]}))],2)],1)],1)],1)},o=[]},bcf2:function(t,e,n){"use strict";n.r(e);var i=n("fd3b"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},c315:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".text-main[data-v-2b0ffa25]{color:#ff4a6a}",""]),t.exports=e},d25d:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{item:Object,index:Number},methods:{open:function(){uni.navigateTo({url:"../../pages/topic-detail/topic-detail?detail="+JSON.stringify(this.item)})}}};e.default=i},d53d:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-uni-view",{staticClass:"flex align-center  p-2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"rounded mr-2",staticStyle:{width:"150rpx",height:"150rpx"},attrs:{src:t.item.cover,mode:""}}),n("v-uni-view",{staticClass:"flex flex-column flex-1"},[n("v-uni-text",{staticClass:"font-md text-dark"},[t._v("#"+t._s(t.item.title))]),n("v-uni-text",{staticClass:"font text-secondary"},[t._v(t._s(t.item.desc))]),n("v-uni-view",{staticClass:"flex align-center"},[n("v-uni-text",{staticClass:"mr-2"},[t._v("动态："+t._s(t.item.today_count))]),n("v-uni-text",{},[t._v("今日："+t._s(t.item.news_count))])],1)],1)],1)],1)},o=[]},e044:function(t,e,n){"use strict";n.r(e);var i=n("092a"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},ec9c:function(t,e,n){"use strict";n.r(e);var i=n("aaf5"),a=n("e044");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("8f1d");var s,r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"2b0ffa25",null,!1,i["a"],s);e["default"]=u.exports},f1e3:function(t,e,n){"use strict";n.r(e);var i=n("3610"),a=n("bcf2");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var s,r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"5103784a",null,!1,i["a"],s);e["default"]=u.exports},fd3b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:["hotCart"],data:function(){return{}},methods:{OpenMore:function(){console.log("Send More"),this.$emit("more")},Opendetail:function(){console.log("Send detail");for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.$emit("Opendetail",e)}}};e.default=i}}]);