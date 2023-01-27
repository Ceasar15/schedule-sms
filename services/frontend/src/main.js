
import Vue from "vue";
import axios from 'axios';
import { createPinia, PiniaVuePlugin, setActivePinia} from 'pinia'
const pinia = createPinia();
setActivePinia(pinia);

import store from './store';

import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App";

import router from "./router/index";

import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n"
import './registerServiceWorker'


axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.SERVER_URL || 'http://localhost:5000/'; 

axios.interceptors.response.use(undefined, function (error) {
    if (error) {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        // store.dispatch('logOut');
        console.log("start again")
        // return router.push('/signIn')
      }
    }
  });





Vue.use(PiniaVuePlugin);
Vue.use(VueRouter);
Vue.use(BlackDashboard);
Vue.use(RouterPrefetch);

/* eslint-disable no-new */
new Vue({
  pinia,
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");
