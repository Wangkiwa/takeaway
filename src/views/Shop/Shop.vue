<!--
 * @Descripttion: 商家组件
 * @Author: TaoWang
 * @Date: 2022-08-30 13:04:22
-->
<template>
  <div>
    <ShopHeader></ShopHeader>
    <div class="tab">
      <div class="tab-item">
        <router-link exact-active-class="router_active" to="/shop/goods">
          点餐
        </router-link>
      </div>
      <div class="tab-item">
        <router-link exact-active-class="router_active" to="/shop/ratings">
          评价
        </router-link>
      </div>
      <div class="tab-item">
        <router-link exact-active-class="router_active" to="/shop/info">
          商家
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import ShopHeader from "../Shop/ShopHeader/ShopHeader.vue"
  export default {
    components: {
      ShopHeader,
    },
  }
</script>

<style lang="less">
  .tab {
    height: 0.8rem;
    line-height: 0.8rem;
    background: #fff;
    position: relative;
    border: none;
    .tab-item {
      float: left;
      width: 33.33%;
      text-align: center;
      font-size: 0.28rem;
      color: #4d555d;
      a {
        display: block;
        color: #7e8c8d;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        box-sizing: border-box;
        font-weight: 900;
      }
      .router_active {
        color: #409eff;
        // animation: borderMove 5s infinite;
      }
      // @keyframes borderMove {
      //   0% {
      //     border-bottom-width: 0.24rem;
      //     border-bottom: 1px solid #02a774;
      //   }
      //   25% {
      //     border-bottom-width: 0.48rem;
      //     border-bottom: 1px solid #02a774;
      //   }
      //   50% {
      //     border-bottom-width: 0.6rem;
      //   }
      //   75% {
      //     border-bottom-width: 0.8rem;
      //   }
      //   100% {
      //     border-bottom-width: 1rem;
      //   }
      // }
    }
  }
</style>
