<template>
  <div class="home" id="components-layout-demo-basic">
    <header-top></header-top>
    <section
      class="connecter sectionbody display_flex justify-content_flex-justify"
    >
      <main></main>
      <aside-right></aside-right>
    </section>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop.vue";
import AsideRight from "@/components/AsideRight.vue";
export default {
  name: "Home",
  components: {
    HeaderTop,
    AsideRight
  },
  data() {
    return {
      menu: ["home"]
    };
  }
};
</script>
<style lang="less" scoped>
.sectionbody {
  padding-top: 61px;
}
main {
  width: 700px;
  height: 700px;
  background: #fff;
}
</style>
