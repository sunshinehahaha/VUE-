// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// import { Loadmore } from 'mint-ui';



import router from './router'
import search from './components/search'
import list from './components/list'
import lun from './components/lun'
import nav from './components/nav'
import Home from './components/Home'
import New from './components/New'
import Trailer from './components/Trailer'
import Detail from './components/Detail'
import Footer from './components/footer'
import my from './components/my'
import cart from './components/cart'
import store from './vuex/index'
// import login from './components/login'
// import register from './components/register'
Vue.config.productionTip = false;

//注册组件
// Vue.component(Loadmore.name, Loadmore);
Vue.component(search.name, search);
Vue.component(list.name, list);
Vue.component(lun.name, lun);
Vue.component(nav.name, nav);
Vue.component(New.name, New);
Vue.component(Detail.name, Detail);
Vue.component(Home.name, Home);
Vue.component(Footer.name, Footer);
Vue.component(Trailer.name, Trailer);
Vue.component(my.name, my);
Vue.component(cart.name, cart);
// Vue.component(login.name, login);
// Vue.component(register.name, register);
/* eslint-disable no-new */

Vue.use(MintUI);

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
