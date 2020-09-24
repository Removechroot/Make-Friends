import Vue from 'vue'
import App from './App'
// 全局分割线
import divider from './components/common/divider.vue';
import nothing from './components/common/nothing.vue'
// 引用全局分割线
Vue.component("divider",divider)
Vue.component('nothing',nothing)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
