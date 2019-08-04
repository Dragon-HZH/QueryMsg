import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 引入字体图标
import "./font/iconfont.css"
// 导入全局组件
import Header from "./components/Header"
import Footer from "./components/Footer"

Vue.component('my-header',Header)
Vue.component('my-footer',Footer)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
