
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/index","pages/news/news","pages/msg/msg","pages/my/my","pages/search/search","pages/add-input/add-input","pages/topic-cate/topic-cate","pages/topic-detail/topic-detail"],"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"white","navigationBarTitleText":"首页"},"tabBar":{"color":"#333333","selectedColor":"#fc5c82","backgroundColor":"#FFFFFF","borderStyle":"black","list":[{"pagePath":"pages/home/index","iconPath":"./static/Tabimg/Dt-1.png","selectedIconPath":"static/Tabimg/Dt-0.png","text":"首页"},{"pagePath":"pages/news/news","iconPath":"./static/Tabimg/Fx-1.png","selectedIconPath":"static/Tabimg/Fx-0.png","text":"动态"},{"pagePath":"pages/msg/msg","iconPath":"./static/Tabimg/XX-1.png","selectedIconPath":"static/Tabimg/XX-0.png","text":"消息"},{"pagePath":"pages/my/my","iconPath":"./static/Tabimg/my-1.png","selectedIconPath":"static/Tabimg/my-0.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"MakeFriends","compilerVersion":"2.8.11","entryPagePath":"pages/home/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/index","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true,"titleNView":{"searchInput":{"align":"center","backgroundColor":"#f5f4f2","borderRadius":"4px","disabled":true,"placeholder":"搜搜帖子","placeholderColor":"#6D6c67"},"buttons":[{"color":"#333","colorPressed":"#FD597c","float":"right","fontSize":"25px","fontSrc":"/static/iconfont.ttf","text":""}]}}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/msg/msg","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"消息列表","enablePullDownRefresh":true,"titleNView":{"buttons":[{"color":"#333","colorPressed":"#FD597c","float":"left","fontSize":"25px","fontSrc":"/static/iconfont.ttf","text":""},{"color":"#333","colorPressed":"#FD597c","float":"right","fontSize":"25px","fontSrc":"/static/iconfont.ttf","text":""}]}}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/search/search","meta":{},"window":{"titleNView":{"backButton":{"color":"#333"},"searchInput":{"align":"center","backgroundColor":"#f5f4f2","borderRadius":"4px","placeholder":"搜搜帖子","placeholderColor":"#6D6c67"},"buttons":[{"color":"#333","colorPressed":"#FD597c","float":"right","fontSize":"14px","text":"搜索"}]}}},{"path":"/pages/add-input/add-input","meta":{},"window":{"titleNView":false}},{"path":"/pages/topic-cate/topic-cate","meta":{},"window":{"navigationBarTitleText":"话题分类"}},{"path":"/pages/topic-detail/topic-detail","meta":{},"window":{"titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
