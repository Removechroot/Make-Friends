(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/topic-detail/topic-detail"],{5132:function(t,e,o){"use strict";(function(t){o("d0df");n(o("66fd"));var e=n(o("b301"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},"6fee":function(t,e,o){"use strict";(function(t){function n(t){return i(t)||u(t)||r(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"===typeof t)return c(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?c(t,e):void 0}}function u(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function i(t){if(Array.isArray(t))return c(t)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=[{username:"测试账号",userpic:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mf-ser1/bab00190-e3a6-4624-b380-a95a6436961a.jpg",newstime:1603279506555,isFollow:!1,title:"微信小程序版本可通过以下二维码扫码查看",titlepic:[{imgUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mf-ser1/31477a10-144c-11eb-899d-733ae62bed2f.jpg"},{imgUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mf-ser1/31477a10-144c-11eb-899d-733ae62bed2f.jpg"},{imgUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mf-ser1/31477a10-144c-11eb-899d-733ae62bed2f.jpg"}],support:{type:"",support_count:99,unsupport_count:2},comment_count:2,share_name:2}],l=function(){o.e("components/topic-detail/topic-detail").then(function(){return resolve(o("bf83"))}.bind(null,o)).catch(o.oe)},p=function(){Promise.all([o.e("common/vendor"),o.e("components/common/common-list")]).then(function(){return resolve(o("94ee"))}.bind(null,o)).catch(o.oe)},d=function(){o.e("components/common/nothing").then(function(){return resolve(o("a6dd"))}.bind(null,o)).catch(o.oe)},f=function(){o.e("components/common/load-more").then(function(){return resolve(o("8ffa"))}.bind(null,o)).catch(o.oe)},m={components:{topicDetail:l,commonList:p,nothing:d,loadMore:f},computed:{listdata:function(){return 0===this.tabindex?this.defauledata:this.hotData},loadtext:function(){return 0===this.tabindex?this.loadtext1:this.loadtext2}},onReachBottom:function(){this.loadmore()},data:function(){return{info:[],hostList:[{title:"[新人必读]这是我也不知道为了凑数撑开写的字然后还得为了测试长度溢出问题"},{title:"[新人必读2]这是我也不知道为了凑数撑开写的字然后还得为了测试长度溢出问题"}],defauledata:[],hotData:[],tabindex:0,loadtext1:"上拉加载更多",loadtext2:"上拉加载更多"}},onLoad:function(t){if(t){var e=JSON.parse(t.detail);this.info=e,this.defauledata=s}},methods:{OnclickEvent:function(t){this.tabindex=t},Follow:function(e){this.list[e].isFollow=!0,t.showToast({title:"关注成功"})},type:function(e){console.log(e);var o=this.newsList[0].list[e.index],n="support"===e.type?"顶成功":"踩成功";if(""===o.support.type)return console.log(1),o.support.type=e.type,void o.support[e.type+"_count"]++;"support"===o.support.type&&"unsupport"===e.type&&(console.log(2),o.support.support_count--,o.support.unsupport_count++),"unsupport"===o.support.type&&"support"===e.type&&(console.log(3),o.support.support_count++,o.support.unsupport_count--),o.support.type=e.type,t.showToast({title:n})},loadmore:function(){var t=this,e=this.tabindex;console.log(e),"上拉加载更多"===this.loadtext&&(console.log("1"),0===e?(console.log("2"),this.loadtext1="加载中...",setTimeout((function(){t.defauledata=[].concat(n(t.defauledata),n(t.defauledata)),t.loadtext1="上拉加载更多"}),2e3)):(console.log("3"),this.loadtext2="加载中...",setTimeout((function(){t.hotData=[].concat(n(t.hotData),n(t.hotData)),t.loadtext2="上拉加载更多"}),2e3)))}}};e.default=m}).call(this,o("543d")["default"])},"78ec":function(t,e,o){"use strict";o.r(e);var n=o("6fee"),a=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},b301:function(t,e,o){"use strict";o.r(e);var n=o("ebbb"),a=o("78ec");for(var r in a)"default"!==r&&function(t){o.d(e,t,(function(){return a[t]}))}(r);var u,i=o("f0c5"),c=Object(i["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);e["default"]=c.exports},ebbb:function(t,e,o){"use strict";o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return n}));var n={topicDetail:function(){return o.e("components/topic-detail/topic-detail").then(o.bind(null,"bf83"))}},a=function(){var t=this,e=t.$createElement;t._self._c},r=[]}},[["5132","common/runtime","common/vendor"]]]);