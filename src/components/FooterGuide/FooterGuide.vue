<!--
 * @Descripttion: 
 * @Author: TaoWang
 * @Date: 2022-08-26 15:48:39
-->
<template>
  <div class="footer-wrapper">
    <div class="footer_guider">
      <a
        href="javascript:;"
        class="guide_item"
        :class="{ on: '/msite' === $route.path }"
        @click="goto('/msite')"
      >
        <span class="item_icon"><i class="iconfont icon-waimai"></i></span>
        <span>外卖</span>
      </a>
      <a
        href="javascript:;"
        class="guide_item"
        :class="{ on: '/search' === $route.path }"
        @click="goto('/search')"
      >
        <span class="item_icon"><i class="iconfont icon-search"></i></span>
        <span>搜索</span>
      </a>
      <a
        href="javascript:;"
        class="guide_item"
        :class="{ on: '/order' === $route.path }"
        @click="goto('/order')"
      >
        <span class="item_icon"><i class="iconfont icon-dingdan"></i></span>
        <span>订单</span>
      </a>
      <a
        href="javascript:;"
        class="guide_item"
        :class="{ on: '/profile' === $route.path }"
        @click="goto('/profile')"
      >
        <span class="item_icon"><i class="iconfont icon-geren"></i></span>
        <span>我的</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      },
    },
  }
</script>

<style lang="less">
  @import url("../../../static/css/reset");
  .footer_guider::before {
    content: "";
    position: absolute;
    z-index: 200;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
  }
  .footer-wrapper {
    width: 100%;
    height: 1rem;
    .footer_guider {
      width: 100%;
      height: 1rem;
      background-color: #fff;
      position: fixed;
      z-index: 100;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      .guide_item {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #999999;
        .item_icon {
          margin-bottom: 0.06rem;
        }
      }
      .on {
        color: #02a774;
      }
    }
  }
</style>
