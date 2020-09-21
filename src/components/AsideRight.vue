<template>
  <aside class="aside-right"></aside>
</template>
<script>
export default {
  name: "AsideRight",
  components: {},
  data() {
    return {
      menu: ["home"]
    };
  }
};
</script>
<style lang="less" scoped>
.aside-right {
  background: #fff;
  width: 240px;
  height: 500px;
}
</style>
