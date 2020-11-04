import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";
import element from "@/elementUI/index";
import VueCookie from "vue-cookies";
Vue.use(VueCookie);
Vue.use(element);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
