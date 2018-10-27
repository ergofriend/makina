import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import Buefy from 'buefy';
import 'buefy/dist/buefy.min.css';
Vue.use(Buefy);

Vue.config.productionTip = false;

import Firebase from './firebase';
Firebase.init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
