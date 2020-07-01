import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/normalize.less";

Vue.config.productionTip = false;
console.log(process.env.NODE_ENV,process.env.VUE_APP_URL,process.env.VUE_APP_API);
new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
