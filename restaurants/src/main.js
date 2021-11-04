import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'
import * as VueGoogleMaps from "vue2-google-maps" // Import package
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'

import HelloWorld from './components/HelloWorld.vue'
import Restaurant from './components/Restaurant.vue'
import Propos from './components/Propos.vue'
import Contact from './components/Contact.vue'

//import { component } from 'vue/types/umd'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDjvAJfkju0KjI3cWJ2iwfNYiS-wQxEEtU",
    libraries: "places"
  }
});

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
    path: '/propos/',
    component: Propos
  },
  {
    path: '/contact',
    component: Contact
  }
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

