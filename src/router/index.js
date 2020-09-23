import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Editor from "../views/editor/Editor.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/editor",
    name: "Editor",
    component: Editor
  }
];

const router = new VueRouter({
  routes
});

export default router;
