(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{2563:function(n,e,t){"use strict";(function(n){t("ee3d");o(t("66fd"));var e=o(t("5b88"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"5b88":function(n,e,t){"use strict";t.r(e);var o=t("cfed"),u=t("87d5");for(var a in u)"default"!==a&&function(n){t.d(e,n,(function(){return u[n]}))}(a);var i,r=t("f0c5"),s=Object(r["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=s.exports},"87d5":function(n,e,t){"use strict";t.r(e);var o=t("ee2a"),u=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,(function(){return o[n]}))}(a);e["default"]=u.a},cfed:function(n,e,t){"use strict";var o;t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return o}));var u=function(){var n=this,e=n.$createElement;n._self._c},a=[]},ee2a:function(n,e,t){"use strict";(function(n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){t.e("components/uni-ui/list-item/list-item").then(function(){return resolve(t("5338"))}.bind(null,t)).catch(t.oe)},a={components:{listItem:u},data:function(){return{myData:[{name:"帖子",num:1},{name:"动态",num:2},{name:"评论",num:3},{name:"粉丝",num:6}],islogin:!1,userInfo:{avatarUrl:"https://picsum.photos/100?random=1",nickName:"请登录！"}}},onNavigationBarButtonTap:function(){n.navigateTo({url:"../user-set/user-set"})},onLoad:function(){var e=n.getStorageSync("uni_id_token"),t=this;o.callFunction({name:"user-center",data:{action:"checkToken",params:{token:e}},success:function(e){var o=e.result;o.code>0||(t.islogin=!0,n.setStorageSync("UserInfo",JSON.stringify({avatarUrl:o.userInfo.userInfo.avatarUrl,nickName:o.userInfo.userInfo.nickName,Uid:o.uid})),t.userInfo=o.userInfo.userInfo)},fail:function(){t.islogin=!1}})},methods:{loginByWeixin:function(){var e=this;this.islogin||(n.showLoading({title:"请稍后"}),n.login({provider:"weixin",success:function(n){e.GetopenID(n.code)}}))},getUserInfo:function(e){var t=this,u=this;n.getUserInfo({success:function(a){var i=a.userInfo;o.callFunction({name:"user-center",data:{action:"pushuserinfo",uid:e,userInfo:i},success:function(e){e.success&&(n.setStorageSync("UserInfo",JSON.stringify({avatarUrl:e.result.data[0].userInfo.avatarUrl,nickName:e.result.data[0].userInfo.nickName,Uid:e.result.data[0]._id})),u.userInfo=e.result.data[0].userInfo)}}),t.islogin=!0}})},GetopenID:function(e){var t=this;o.callFunction({name:"user-center",data:{action:"loginByWeixin",params:{code:e}},success:function(e){0===e.result.code&&(n.setStorageSync("uni_id_token",e.result.token),n.setStorageSync("Uid",e.result.uid),t.getUserInfo(e.result.uid))},fail:function(){n.uni.showToast({title:"用户取消登录"})},complete:function(){n.hideLoading()}})}}};e.default=a}).call(this,t("543d")["default"],t("a9ff")["default"])}},[["2563","common/runtime","common/vendor"]]]);