(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-chat/user-chat"],{1408:function(t,e,n){"use strict";n.r(e);var o=n("87b8"),a=n("c876");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var u,c=n("f0c5"),i=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=i.exports},"50b2":function(t,e,n){"use strict";(function(t){n("ee3d");o(n("66fd"));var e=o(n("1408"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"5fd9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){Promise.all([n.e("common/vendor"),n.e("components/user-chat/user-chat")]).then(function(){return resolve(n("f809"))}.bind(null,n)).catch(n.oe)},a={components:{userChat:o},data:function(){return{scrollInto:"",content:"",list:[{user_id:2,avatar:"/static/mb.jpg",username:"昵称",msg:"你好啊",type:"text",create_time:(new Date).getTime()},{user_id:2,avatar:"/static/mb.jpg",username:"昵称",msg:"靓仔!!",type:"text",create_time:(new Date).getTime()}]}},onReady:function(){this.pagetoBottom()},methods:{submit:function(){var e={user_id:1,avatar:"/static/mb.jpg",username:"昵称",msg:this.content,type:"text",create_time:(new Date).getTime()};if(""===this.content)return t.showToast({title:"消息不能为空"});this.list.push(e),this.content="",this.pagetoBottom()},pagetoBottom:function(){var t=this.list.length-1;console.log(t),this.scrollInto="chat"+t}}};e.default=a}).call(this,n("543d")["default"])},"87b8":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var o={userChat:function(){return Promise.all([n.e("common/vendor"),n.e("components/user-chat/user-chat")]).then(n.bind(null,"f809"))}},a=function(){var t=this,e=t.$createElement;t._self._c},r=[]},c876:function(t,e,n){"use strict";n.r(e);var o=n("5fd9"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a}},[["50b2","common/runtime","common/vendor"]]]);