<!--
 * @Descripttion: 
 * @Author: TaoWang
 * @Date: 2022-08-31 20:54:14
-->
<template>
  <div class="cartcontrol">
    <transition name="moveDecreament">
      <div
        class="iconfont icon-remove_circle_outline"
        v-show="food.count"
        @click.stop="updateFoodCount(false)"
      ></div>
    </transition>
    <div class="cart-count" v-show="food.count">
      <span>
        {{ food.count }}
      </span>
    </div>
    <div
      class="iconfont icon-add_circle"
      @click.stop="updateFoodCount(true)"
    ></div>
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
      display: block;
      height: 100%;
      width: 100%;
      line-height: 2;
    }
    .iconfont {
      font-size: 0.44rem;
      padding: 6px;
    }
    .icon-add_circle {
      color: #3190e8;
    }
    .icon-remove_circle_outline {
      color: #3190e8;
    }
    .moveDecreament-enter-active,
    .moveDecreament-leave-active {
      transition: all 0.3s;
    }
    .moveDecreament-enter,
    .moveDecreament-leave-to {
      opacity: 0;
      transform: translateX(15px) rotate(180deg);
    }
  }
</style>
