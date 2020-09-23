<template>
  <div class="editor" id="editor">
    <div class="headerTop">
      <div class="personInfo">
        <div class="toux" @click.stop="onShowUser">
          <a-icon type="user" style="font-size: 24px"></a-icon>
        </div>
        <ul class="personlist" v-show="isUserShow">
          <li>个人主页</li>
          <li>设置</li>
        </ul>
      </div>
      <div class="fbbox">
        <span>发布</span>
        <div class="fblist">
          <h4>发布文章</h4>
          <p>分类</p>
          <ul>
            <li
              v-for="item in dataType"
              :key="item"
              @click="onTypeChecked(item)"
              :class="itemtype.indexOf(item) !== -1 ? 'checked' : ''"
            >
              {{ item }}
            </li>
          </ul>
          <p>添加标签</p>
          <a-input placeholder="搜索标签"></a-input>
          <a-button type="primary" class="submit">确定发布</a-button>
        </div>
      </div>
      <a-input type="text" class="input" placeholder="请输入标题..."> </a-input>
    </div>
    <textarea :value="input" @input="update" placeholder="开始写作"></textarea>
    <div class="views" v-html="compiledMarkdown"></div>
    <div class="footer"></div>
  </div>
</template>
<script>
import { Input, Icon, Button } from "ant-design-vue";
export default {
  name: "Editor",
  components: {
    AInput: Input,
    AIcon: Icon,
    AButton: Button
  },
  data() {
    return {
      input: "# hello",
      isUserShow: false,
      itemtype: "电影",
      dataType: ["电影", "小说", "前端", "后端", "人工智能"]
    };
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: true }); // eslint-disable-line
    }
  },
  methods: {
    update: _.debounce(function (e) {  // eslint-disable-line
      this.input = e.target.value;
    }, 300),
    onShowUser() {
      const isShow = this.isUserShow;
      this.isUserShow = !isShow;
    },
    userHide() {
      this.isUserShow = false;
    },
    onTypeChecked(item) {
      console.log(item);
      this.itemtype = item;
    }
  },
  mounted() {
    this.globalClick(this.userHide);
  }
};
</script>
<style scoped lang="less">
@import "./Editor.less";
</style>
