import Vue from 'vue';
import router from './router';
import store from './store';
import mint from './plugins/mint';
// import 'mint-ui/lib/style.css';
import App from './app.vue';

Vue.use(mint);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  // 使用vuex
  store: store,
  render: h => h(App)
});