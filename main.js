import Vue from 'vue'
import App from './App'
// 全局分割线
import divider from './components/common/divider.vue';
import nothing from './components/common/nothing.vue'

//引入全局配置文件
import $config from './common/config.js';
Vue.prototype.$config = $config
// 挂载全局工具库
import util from './util/util.js';
Vue.prototype.$U = util
import WEIXIN from 'util/WEIXIN.js';
// 引用全局分割线
Vue.component("divider",divider)
// 全局没内容页
Vue.component('nothing',nothing)

// Vue.prototype.uniID = WEIXIN;


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
