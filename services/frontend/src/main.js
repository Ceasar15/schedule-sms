import 'bootstrap/dist/css/bootstrap.css';
import Vue from "vue";
import RouterPrefetch from 'vue-router-prefetch'

import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

import BlackDashboard from "./plugins/blackDashboard";
import './registerServiceWorker'
import VueRouter from 'vue-router';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5000/';

axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch('logOut');
      return router.push('/login')
    }
  }
});


Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
// app.use(BlackDashboard)
// app.use(RouterPrefetch)
// app.use(router);
// app.use(store);
// app.mount("#app");