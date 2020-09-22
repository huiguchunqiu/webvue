<template>
  <div class="login">
    <a-modal v-model="visibleComputed" title="登录" :width="320" :footer="null">
      <a-form
        :form="form"
        :label-col="{ span: 0 }"
        :wrapper-col="{ span: 24 }"
        @submit="handleSubmit"
      >
        <a-form-item :label="null">
          <a-input
            placeholder="用户名"
            v-decorator="[
              'userName',
              { rules: [{ required: true, message: '请输入用户名！' }] }
            ]"
          ></a-input>
        </a-form-item>
        <a-form-item :label="null">
          <a-input
            placeholder="密码"
            v-decorator="[
              'password',
              { rules: [{ required: true, message: '请输入密码！' }] }
            ]"
          ></a-input>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 24 }">
          <a-button type="primary" block html-type="submit">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import { Modal, Input, Form, Button } from "ant-design-vue";
export default {
  name: "Login",
  components: {
    AModal: Modal,
    AInput: Input,
    AForm: Form,
    AFormItem: Form.Item,
    AButton: Button
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    visibleComputed: {
      get() {
        return this.visible;
      },
      set(v) {
        this.$emit("onClose");
        return v;
      }
    }
  },
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" })
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("rsss", values);
          const { userName, password } = values;
          const params = {
            username: userName,
            password: password
          };
          this.goLogin(params);
        }
      });
    },
    goLogin(params) {
      this.axios
        .post("/task/login", params)
        .then(res => {
          if (res.data.code === 2000) {
            this.$store.commit("changeLogin", true);
            this.$store.commit("setUserinfo", res.data.userinfo);
            this.$emit("onClose");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  text-align: left;
}
</style>
