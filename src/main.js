import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

import Firebase from "./firebase";
Firebase.init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
