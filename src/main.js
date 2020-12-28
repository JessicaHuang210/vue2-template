import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import element from "@/plugin/element-ui";
import "@/scss/element-variables.scss";
import "@/scss/main.scss";

Vue.use(element);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
