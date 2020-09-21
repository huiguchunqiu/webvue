<template>
  <header class="nav-header">
    <div class="connecter">
      <div class="logo" />
      <div class="login">
        <span @click="onLogin">登录</span> / <span>注册</span>
      </div>
      <a-menu v-model="menu" mode="horizontal">
        <a-menu-item key="home">首页</a-menu-item>
      </a-menu>
    </div>
    <Login :visible="visible" @onClose="onClose"></Login>
  </header>
</template>
<script>
import { Menu } from "ant-design-vue";
import Login from "@/components/Login.vue";
export default {
  name: "HeaderTop",
  components: {
    aMenu: Menu,
    aMenuItem: Menu.Item,
    Login
  },
  data() {
    return {
      menu: ["home"],
      visible: false
    };
  },
  methods: {
    onLogin() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    }
  }
};
</script>
<style lang="less" scoped>
.nav-header {
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
}
.ant-menu {
  text-align: left;
  border: none;
}
.login {
  float: right;
  line-height: 46px;
  color: #1890ff;
  cursor: pointer;
}
</style>
