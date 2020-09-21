import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Modal } from "ant-design-vue";

// Vue.componnet(Button.name, Button);

Vue.config.productionTip = false;
Vue.use(Modal);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
