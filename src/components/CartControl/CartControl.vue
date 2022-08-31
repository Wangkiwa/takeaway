<!--
 * @Descripttion: 
 * @Author: TaoWang
 * @Date: 2022-08-31 20:54:14
-->
<template>
  <div class="cartcontrol">
    <div
      class="iconfont icon-remove_circle_outline"
      v-show="food.count"
      @click="updateFoodCount(false)"
    ></div>
    <div class="cart-count" v-show="food.count">{{ food.count }}</div>
    <div class="iconfont icon-add_circle" @click="updateFoodCount(true)"></div>
  </div>
</template>

<script>
  export default {
    props: {
      food: Object,
    },
    methods: {
      updateFoodCount(isAdd) {
        this.$store.dispatch("updateFoodCount", { food: this.food, isAdd })
      },
    },
  }
</script>

<style lang="less">
  .cartcontrol {
    display: flex;
    line-height: 0.4rem;
    .cart-count {
      margin: 0 0.16rem;
    }
    .iconfont {
      font-size: 0.44rem;
    }
    .icon-add_circle {
      color: #3190e8;
    }
    .icon-remove_circle_outline {
      color: #3190e8;
    }
  }
</style>
