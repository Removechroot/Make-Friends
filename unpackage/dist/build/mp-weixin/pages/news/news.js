(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/news"],{"59a5":function(t,n,e){"use strict";var o=e("83cd"),u=e.n(o);u.a},"63a9":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return o}));var u=function(){var t=this,n=t.$createElement;t._self._c},r=[]},"83cd":function(t,n,e){},b62e:function(t,n,e){"use strict";(function(t){function o(t){return c(t)||i(t)||r(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if(t){if("string"===typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,n):void 0}}function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return a(t)}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=[{username:"罗三岁小可爱",userpic:"../../static/xk.jpg",newstime:"2020-20-20 下午4:32",isFollow:!0,title:"震惊...我居然舔了两口猫屁股",titlepic:"../../static/mpg.jpg",support:{type:"",support_count:"999+",unsupport_count:2},comment_count:2,share_name:2},{username:"虾老板",userpic:"../../static/xia.jpg",newstime:"2020-20-20 下午4:32",isFollow:!0,title:"我喜欢了一个30岁的女人...居然让我....",titlepic:"",support:{type:"unsupport",support_count:0,unsupport_count:"999+"},comment_count:2,share_name:2},{username:"虾老板",userpic:"../../static/xia.jpg",newstime:"2020-20-20 下午4:32",isFollow:!0,title:"我喜欢了一个30岁的女人...居然让我....",titlepic:"",support:{type:"unsupport",support_count:0,unsupport_count:"999+"},comment_count:2,share_name:2},{username:"虾老板",userpic:"../../static/xia.jpg",newstime:"2020-20-20 下午4:32",isFollow:!0,title:"我喜欢了一个30岁的女人...居然让我....",titlepic:"",support:{type:"unsupport",support_count:0,unsupport_count:"999+"},comment_count:2,share_name:2}],p=function(){e.e("components/uni-ui/uni-nav-bar/uni-nav-bar").then(function(){return resolve(e("0895"))}.bind(null,e)).catch(e.oe)},l=function(){e.e("components/common/common-list").then(function(){return resolve(e("21f6"))}.bind(null,e)).catch(e.oe)},d=function(){e.e("components/common/load-more").then(function(){return resolve(e("1d4f"))}.bind(null,e)).catch(e.oe)},m=function(){e.e("components/news/hotCart").then(function(){return resolve(e("745d"))}.bind(null,e)).catch(e.oe)},f=function(){e.e("components/news/topic-list").then(function(){return resolve(e("cdb9"))}.bind(null,e)).catch(e.oe)},h={components:{uniNavBar:p,CommonList:l,loadMore:d,hotCart:m,topicList:f},data:function(){return{tabIndex:0,tabBars:[{name:"关注"},{name:"话题"}],windowHeight:500,list:[],loadmore:"上拉加载更多",hotlist:[{name:"关注"},{name:"话题"},{name:"热门"},{name:"鬼畜"},{name:"快落"},{name:"肥宅"}],topicList:[{cover:"../../static/demo1ima.jpg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"../../static/demo2ima.jpg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"../../static/demo1ima.jpg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"../../static/demo2ima.jpg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10}]}},onLoad:function(){var n=t.getSystemInfoSync();this.windowHeight=n.windowHeight-n.statusBarHeight-44,this.list=s},methods:{openAddinput:function(){console.log("123"),t.navigateTo({url:"../add-input/add-input"})},onchange:function(t){this.tabIndex=t.detail.current},changeTab:function(t){this.tabIndex=t},type:function(n){console.log(n);var e=this.list[n.index],o="support"===n.type?"顶成功":"踩成功";if(""===e.support.type)return e.support.type=n.type,void e.support[n.type+"_count"]++;"support"===e.support.type&&"unsupport"===n.type&&(e.support.support_count--,e.support.unsupport_count++),"unsupport"===e.support.type&&"support"===n.type&&(e.support.support_count++,e.support.unsupport_count--),e.support.type=n.type,t.showToast({title:o})},loadmoreEvent:function(t){var n=this;"上拉加载更多"===this.loadmore&&(this.loadmore="加载中...",setTimeout((function(){n.list=[].concat(o(n.list),o(n.list)),n.loadmore="上拉加载更多"}),2e3))},more:function(){t.navigateTo({url:"../topic-cate/topic-cate"})},OpenSeach:function(){t.navigateTo({url:"../search/search?type=topic"})}}};n.default=h}).call(this,e("543d")["default"])},d699:function(t,n,e){"use strict";(function(t){e("ee3d");o(e("66fd"));var n=o(e("f661"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},e3a2:function(t,n,e){"use strict";e.r(n);var o=e("b62e"),u=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);n["default"]=u.a},f661:function(t,n,e){"use strict";e.r(n);var o=e("63a9"),u=e("e3a2");for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);e("59a5");var i,c=e("f0c5"),a=Object(c["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);n["default"]=a.exports}},[["d699","common/runtime","common/vendor"]]]);