(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"1e91":function(t,n,o){"use strict";var e;o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return u})),o.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement;t._self._c},u=[]},"3eab":function(t,n,o){"use strict";o.r(n);var e=o("1e91"),i=o("b2f3");for(var u in i)"default"!==u&&function(t){o.d(n,t,(function(){return i[t]}))}(u);var s,r=o("f0c5"),c=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],s);n["default"]=c.exports},a7f2:function(t,n,o){"use strict";(function(t){o("ee3d");e(o("66fd"));var n=e(o("3eab"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("543d")["createPage"])},b2f3:function(t,n,o){"use strict";o.r(n);var e=o("f5cd"),i=o.n(e);for(var u in e)"default"!==u&&function(t){o.d(n,t,(function(){return e[t]}))}(u);n["default"]=i.a},f5cd:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=function(){o.e("components/common/common-list").then(function(){return resolve(o("21f6"))}.bind(null,o)).catch(o.oe)},i=function(){o.e("components/common/botton-btn").then(function(){return resolve(o("f15e"))}.bind(null,o)).catch(o.oe)},u=function(){Promise.all([o.e("common/vendor"),o.e("components/common/more-share")]).then(function(){return resolve(o("336f"))}.bind(null,o)).catch(o.oe)},s={components:{commonList:e,bottonBtn:i,moreShare:u},onNavigationBarButtonTap:function(){this.$refs.share.open()},onBackPress:function(){this.$refs.share.close()},data:function(){return{info:{username:"罗三岁小可爱",userpic:"../../static/xk.jpg",newstime:"2020-20-20 下午4:32",isFollow:!1,title:"震惊...我居然舔了两口猫屁股",titlepic:"../../static/mpg.jpg",support:{type:"",support_count:"2",unsupport_count:2},comment_count:2,share_name:2,images:[{url:"/static/lxg-1.jpg"},{url:"/static/xia.jpg"}],content:"asasddsasd"}}},onLoad:function(t){t.detail&&this.__init(JSON.parse(t.detail))},computed:{imageslist:function(){return this.info.images.map((function(t){return t.url}))}},methods:{__init:function(n){t.setNavigationBarTitle({title:n.title})},doComment:function(){},doShare:function(){},follow:function(n){this.info.isFollow=!0,t.showToast({title:"关注成功"})},dosupport:function(n){var o="support"===n.type?"顶":"踩";if(this.info.support.type===n.type)return t.showToast({title:"你已操作"});""===this.info.support.type?this.info.support[n.type+"_count"]++:"support"===this.info.support.type&&"unsupport"===n.type?(this.info.support.support_count--,this.info.support.unsupport_count++):"unsupport"===this.info.support.type&&"support"===n.type&&(this.info.support.support_count++,this.info.support.unsupport_count--),this.info.support.type=n.type,t.showToast({title:o})},preview:function(n){t.previewImage({urls:this.imageslist,count:n})},submit:function(t){var n={user_id:1,avatar:"/static/mb.jpg",username:"昵称",msg:t,type:"text",create_time:(new Date).getTime()};this.list.push(n)}}};n.default=s}).call(this,o("543d")["default"])}},[["a7f2","common/runtime","common/vendor"]]]);