<template>
  <header class="nav-header">
    <div class="connecter">
      <div class="logo" />
      <div class="login" v-if="!islogin">
        <span @click="onLogin">登录</span> / <span>注册</span>
      </div>
      <div class="personInfo" v-else>
        <div class="toux" @click.stop="onShowUser">
          <a-icon type="user" style="font-size: 24px"></a-icon>
        </div>
        <ul class="personlist" v-show="isUserShow">
          <li>个人主页</li>
          <li>设置</li>
          <li @click="loginOut">退出</li>
        </ul>
      </div>
      <a-menu v-model="menu" mode="horizontal">
        <a-menu-item key="home">首页</a-menu-item>
      </a-menu>
    </div>
    <Login :visible="visible" @onClose="onClose"></Login>
  </header>
</template>
<script>
import { Menu, Icon } from "ant-design-vue";
import Login from "@/components/Login.vue";
export default {
  name: "HeaderTop",
  components: {
    aMenu: Menu,
    aMenuItem: Menu.Item,
    Login,
    AIcon: Icon
  },
  computed: {
    islogin: function() {
      return this.$store.state.login;
    },
    userinfo: function() {
      return this.$store.state.userinfo;
    }
  },
  data() {
    return {
      menu: ["home"],
      visible: false,
      isUserShow: false
    };
  },
  methods: {
    onLogin() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    userHide() {
      this.isUserShow = false;
    },
    getUserInfo(params) {
      this.axios
        .get("/user/userinfo", { params })
        .then(res => {
          console.log(res);
          this.$store.commit("changeLogin", res.data.userinfo.islogin);
          this.$store.commit("setUserinfo", res.data.userinfo);
        })
        .catch(error => {
          console.log(error);
        });
    },
    onShowUser() {
      const isShow = this.isUserShow;
      this.isUserShow = !isShow;
    },
    loginOut(params) {
      this.axios
        .get("/task/loginout", params)
        .then(res => {
          console.log(res);
          if (res.data.code === 2000) {
            this.$store.commit("changeLogin", false);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getUserInfo();
    this.globalClick(this.userHide);
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
.personInfo {
  float: right;
  width: 45px;
  height: 45px;
  position: relative;
}
.toux {
  width: 36px;
  height: 36px;
  line-height: 36px;
  margin: 5px auto;
  border: 1px solid #efefef;
  cursor: pointer;
  text-align: center;

  i {
    margin-top: 5px;
  }
}
.personlist {
  position: absolute;
  left: -38px;
  top: 48px;
  width: 116px;
  height: 120px;
  border: 1px solid #efefef;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &::before {
    content: " ";
    width: 0;
    height: 0;
    border-bottom: 5px solid #efefef;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    position: absolute;
    top: -5px;
    left: 55px;
  }

  li {
    height: 40px;
    line-height: 40px;
    text-align: left;
    padding: 0 20px;
    &:hover {
      background: #efefef;
      cursor: pointer;
    }
  }
}
</style>
