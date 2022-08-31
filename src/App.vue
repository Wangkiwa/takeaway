<!--
 * @Descripttion: 根组件
 * @Author: TaoWang
 * @Date: 2022-08-26 14:42:03
-->
<template>
  <div id="app">
    <router-view />
    <FooterGuide v-if="$route.meta.showFooter" />
  </div>
</template>

<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
  export default {
    components: {
      FooterGuide,
    },
    created() {
      this.$store.dispatch("getAddress")
      this.$store.dispatch("getUserInfo")
    },
    mounted() {
      this.$store.dispatch("getShopInfo")
      this.$store.dispatch("getShopRatings")
    },
  }
</script>

<style lang="less">
  #app {
    min-width: 320px;
    max-width: 750px;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
