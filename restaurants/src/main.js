import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'


import HelloWorld from './components/HelloWorld.vue'
import Restaurant from './components/Restaurant.vue'
import Propos from './components/Propos.vue'

//import { component } from 'vue/types/umd'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter);

const router = new VueRouter({

  routes: [{
    path: '/',
    component: HelloWorld
  },
  {
  path: '/restaurant/:id',
  component: Restaurant
},
{
  path:'/propos/',
  component: Propos
}
  ],
  mode:'history'
}) ;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

