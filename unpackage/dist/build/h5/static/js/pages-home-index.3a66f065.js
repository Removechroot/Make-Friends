(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-index"],{"11ce":function(t,e,n){"use strict";(function(t){var r=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("2909"));n("96cf");var i=r(n("1da1")),a=r(n("94ee")),s=r(n("0623")),u=r(n("3614")),c={components:{commonList:a.default,uniLoadMore:s.default},data:function(){return{tabltlist:[],windowHeight:0,scrollInto:"",tabIndex:0,tabBars:[{name:"推荐",id:0},{name:"测试",id:1},{name:"热点",id:2},{name:"财经",id:3},{name:"娱乐",id:4},{name:"军事",id:5},{name:"历史",id:6},{name:"本地",id:7}],newsList:[],page:0,total:0,arr:[],status:"more"}},onNavigationBarButtonTap:function(t){uni.navigateTo({url:"../add-input/add-input"})},onNavigationBarSearchInputClicked:function(){uni.navigateTo({url:"../search/search?type=post"})},onPullDownRefresh:function(){var t=this;setTimeout((function(){t.getdata(),uni.stopPullDownRefresh()}),800)},onLoad:function(){var t=uni.getSystemInfoSync();this.windowHeight=t.windowHeight-uni.upx2px(102),this.tabBars.length&&this.GetData()},onTabItemTap:function(t){t.index},methods:{GetData:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.callFunction({name:"gettablelist",data:{page:e.page}});case 2:for(r=n.sent,o=0;o<e.tabBars.length;o++)e.arr.push({list:[]});e.newsList=e.arr,r.success&&(e.arr[e.tabIndex].list=r.result.context.data,e.newsList=e.arr,e.total=r.result.total);case 6:case"end":return n.stop()}}),n)})))()},Follow:function(e){var n=this,r=e.id,o=e.type,i=e.index;t.callFunction({name:"update",data:{type:"isFollow",id:r,isFollow:o}}).then((function(t){if(0===t.result.status){n.newsList[n.tabIndex].list[i].isFollow=o;var e=!0===o?"关注成功":"取消关注";uni.showToast({title:e})}}))},type:function(t){var e=this.newsList[this.tabIndex].list[t.index];u.default.Nice(t,e)},changetTab:function(t){this.tabIndex!==t&&(this.tabIndex=t,this.scrollInto="tab_"+t,this.getlist())},onchange:function(t){var e=t.detail;this.changetTab(e.current)},loadmore:function(e){var n=this;if("more"===this.status){if(this.total===this.newsList[this.tabIndex].list.length)return this.status="nomore";this.status="loading",this.page++,t.callFunction({name:"gettablelist",data:{page:this.page}}).then((function(t){if(t.success){var e=t.result.context.data;n.newsList[n.tabIndex].list=[].concat((0,o.default)(n.newsList[n.tabIndex].list),(0,o.default)(e)),n.status="more"}}))}}}};e.default=c}).call(this,n("a9ff")["default"])},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,u,"next",t)}function u(t){r(a,o,i,s,u,"throw",t)}s(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},5745:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={uniLoadMore:n("0623").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-scroll-view",{staticClass:"scroll-row border-bottom border-light-secondary",staticStyle:{height:"100rpx"},attrs:{"scroll-x":!0,"scroll-into-view":t.scrollInto,"scroll-with-animation":!0}},t._l(t.tabBars,(function(e){return n("v-uni-view",{key:e.id,staticClass:"scroll-row-item px-3 py-1 font-md",class:t.tabIndex==e.id?"text-main font-lg font-weight-bold":"",attrs:{id:"tab_"+e.id},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changetTab(e.id)}}},[t._v(t._s(e.name))])})),1),n("v-uni-swiper",{style:"height:"+t.windowHeight+"px",attrs:{duration:150,current:t.tabIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onchange.apply(void 0,arguments)}}},t._l(t.newsList,(function(e,r){return n("v-uni-swiper-item",{key:r},[n("v-uni-scroll-view",{style:"height:"+t.windowHeight+"px",attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadmore(r)}}},[e.list.length>0?[t._l(e.list,(function(e,r){return[n("common-list",{key:r+"_0",attrs:{item:e,index:r},on:{Follow:function(e){arguments[0]=e=t.$handleEvent(e),t.Follow.apply(void 0,arguments)},type:function(e){arguments[0]=e=t.$handleEvent(e),t.type.apply(void 0,arguments)}}}),n("divider")]})),e.list.length>2?[n("uni-load-more",{attrs:{status:t.status}})]:t._e()]:[n("nothing",[n("v-uni-view",{staticClass:"font-sm"},[t._v("该模块与推荐模块一致，请体验推荐模块！")])],1)]],2)],1)})),1)],1)},i=[]},"5a09":function(t,e,n){"use strict";n.r(e);var r=n("5745"),o=n("7bfe");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var a,s=n("f0c5"),u=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"7ec6c1f6",null,!1,r["a"],a);e["default"]=u.exports},"7bfe":function(t,e,n){"use strict";n.r(e);var r=n("11ce"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",c="object"===typeof t,l=e.regeneratorRuntime;if(l)c&&(t.exports=l);else{l=e.regeneratorRuntime=c?t.exports:{},l.wrap=b;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,w=g&&g(g(N([])));w&&w!==r&&o.call(w,a)&&(y=w);var m=E.prototype=L.prototype=Object.create(y);_.prototype=m.constructor=E,E.constructor=_,E[u]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(m),t},l.awrap=function(t){return{__await:t}},I(k.prototype),k.prototype[s]=function(){return this},l.AsyncIterator=k,l.async=function(t,e,n,r){var o=new k(b(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},I(m),m[u]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=N,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var o=e&&e.prototype instanceof L?e:L,i=Object.create(o.prototype),a=new P(r||[]);return i._invoke=j(t,n,a),i}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function L(){}function _(){}function E(){}function I(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function k(t){function e(n,r,i,a){var s=x(t[n],t,r);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"===typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(c).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(s.arg)}var n;function r(t,r){function o(){return new Promise((function(n,o){e(t,r,n,o)}))}return n=n?n.then(o,o):o()}this._invoke=r}function j(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return G()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=F(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=x(t,e,n);if("normal"===u.type){if(r=n.done?p:h,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}function F(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,F(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:G}}function G(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())}}]);