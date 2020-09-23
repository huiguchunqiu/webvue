import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import { Modal } from "ant-design-vue";

// Vue.componnet(Button.name, Button);

//全局点击事件
Vue.prototype.globalClick = function(callback) {
  document.getElementById("app").onclick = function() {
    callback && callback();
  };
};

Vue.config.productionTip = false;
Vue.use(Modal);
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
