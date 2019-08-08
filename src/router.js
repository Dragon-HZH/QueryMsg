import Vue from 'vue'
import Router from 'vue-router'
import Index from "./views/Index.vue"
import Pinpai from "./views/PinPai.vue"
import Lianxi from "./views/Lianxi.vue"
import Jianjie from "./views/Jianjie.vue"
import Fuwu from "./views/Fuwu.vue"
import Nianqian from "./views/Nianqian.vue"
import News from "./views/News.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/pinpai',
      name: "pinpai",
      component: Pinpai
    },{
      path:'/jianjie',
      name:'jianjie',
      component:Jianjie
    },{
      path:'/lianxi',
      name:'lianxi',
      component:Lianxi
    },{
      path:'/fuwu',
      name:'fuwu',
      component:Fuwu
    },{
      path:"/nianqian",
      name:'nianqian',
      component:Nianqian
    },{
      path:"/news",
      name:'news',
      component:News
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
