<!--
 * @Descripttion: 购物车组件
 * @Author: TaoWang
 * @Date: 2022-09-01 14:55:21
-->
<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left" @click="toggleShow">
        <div class="logo-wrapper">
          <van-badge :content="totalCount" />
          <!--  -->
          <div class="logo" :class="{ highlight: totalCount }">
            <!-- highlight -->
            <i
              class="iconfont icon-shopping_cart"
              :class="{ highlight: totalCount }"
            ></i>
          </div>
        </div>
        <div class="price">￥{{ totalPrice }}</div>
        <div class="desc">另需配送费￥{{ info.deliveryPrice }}元</div>
      </div>
      <div class="content-right">
        <!-- enough -->
        <div class="pay" :class="{ enough: totalPrice >= info.minPrice }">
          {{ payText }}
        </div>
      </div>
    </div>
    <transition name="move">
      <div class="shopcart-list" v-show="listShow && totalCount > 0">
        <div class="list-header">
          <h1 class="title">购物车</h1>
          <span class="empty" @click="showDialog = true">清空</span>
        </div>
        <div class="list-content">
          <ul>
            <li class="food" v-for="(food, index) in cartFoods" :key="index">
              <span class="name">{{ food.name }}</span>
              <div class="price">
                <span>￥{{ food.price }}</span>
              </div>
              <div class="cartcontrol-wrapper">
                <CartControl :food="food" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <div
      class="list-mask"
      v-show="listShow && totalCount > 0"
      @click="toggleShow"
    ></div>
    <van-dialog
      v-model="showDialog"
      title="确定要清空购物车吗？"
      show-cancel-button
      @confirm="dialogClose"
    ></van-dialog>
  </div>
</template>

<script>
  import CartControl from "@/components/CartControl/CartControl.vue"
  import BetterScroll from "better-scroll"
  import { mapState, mapGetters } from "vuex"
  export default {
    data() {
      return {
        listShow: false,
        showDialog: false,
      }
    },
    computed: {
      ...mapState(["cartFoods", "info"]),
      ...mapGetters(["totalCount", "totalPrice"]),
      // payClass() {
      //   const { info, totalPrice } = this
      //   if (totalPrice > info.minPrice) {
      //     return "enough"
      //   }
      // },
      payText() {
        const { info, totalPrice } = this
        if (totalPrice === 0) {
          return `￥${info.minPrice}元起送`
        } else if (totalPrice < info.minPrice) {
          return `还差￥${info.minPrice - totalPrice}元起送`
        } else {
          return "结算"
        }
      },
    },
    components: {
      CartControl,
    },
    methods: {
      toggleShow() {
        // 只有totalCount > 0才切换
        if (this.totalCount) {
          this.listShow = !this.listShow
        }
      },
      dialogClose() {
        console.log("关闭")
        this.$store.dispatch("clearCart")
      },
    },
    // updated() {
    //   if (this.listShow) {
    //     this.$nextTick(() => {
    //       /*
    //       每次打开购物车都会产生一个BetterScroll所以存在点击一次出现多次 点击的情况，所以需要实现BetterScroll的实例是一个单例
    //     */
    //       if (!this.scroll) {
    //         // 实现BetterScroll的实例是一个单例
    //         this.scroll = new BetterScroll(".list-content", {
    //           click: true,
    //         })
    //       }
    //     })
    //   }
    // },
    watch: {
      totalCount(val) {
        // 当totalCount等于0时将弹框设置为关闭
        if (!val) {
          this.listShow = false
        }
      },
      listShow(val) {
        if (val) {
          this.$nextTick(() => {
            /*
          每次打开购物车都会产生一个BetterScroll所以存在点击一次出现多次 点击的情况，所以需要实现BetterScroll的实例是一个单例
            */
            if (!this.scroll) {
              // 实现BetterScroll的实例是一个单例
              this.scroll = new BetterScroll(".list-content", {
                click: true,
              })
            }
          })
        } else {
          // 解决重复使用一个this.scroll的bug
          this.scroll = null
        }
      },
    },
  }
</script>

<style lang="less" scoped>
  .shopcart {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 0.96rem;
    z-index: 990;
    .content {
      display: flex;
      width: 100%;
      height: 0.96rem;
      line-height: 00.96rem;
      background-color: #141d27;
      color: rgba(255, 255, 255, 0.4);
      .content-left {
        width: 70%;
        .logo-wrapper {
          position: relative;
          display: inline-block;
          width: 1.12rem;
          height: 1.12rem;
          background-color: #141d27;
          padding: 0.08rem;
          box-sizing: border-box;
          margin: 0 0.24rem;
          position: relative;
          top: -0.2rem;
          border-radius: 50%;
          .van-badge {
            position: absolute;
            right: 0;
            top: -0.1rem;
          }
          .logo {
            text-align: center;
            background: #2b343c;
            color: #fff;
            border-radius: 50%;
            i {
              font-size: 0.48rem;
              line-height: 0.88rem;
              color: #80858a;
            }
          }
          .highlight {
            color: #fff !important;
            background-color: #409eff;
          }
        }
        .price {
          font-size: 0.4rem;
          font-weight: 700;
          color: #fff;
          display: inline-block;
          vertical-align: top;
          padding-right: 0.24rem;
          line-height: 0.48rem;
          width: 0.4rem;
          height: 0.4rem;
        }
        .desc {
          display: inline-block;
          vertical-align: bottom;
          font-size: 0.26rem;
          margin-left: -0.6rem;
          margin-top: 0.16rem;
        }
      }
      .content-right {
        width: 30%;
        background-color: #2b333b;
        .pay {
          text-align: center;
          color: #fff;
          font-weight: 700;
          font-size: 0.24rem;
        }
        .enough {
          background-color: #409eff;
        }
      }
    }
    .shopcart-list {
      position: absolute;

      left: 0;
      top: 0;
      z-index: -1;
      width: 100%;
      transform: translateY(-100%);
      .list-header {
        height: 40px;
        line-height: 40px;
        padding: 0 18px;
        background: #f3f5f7;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        .title {
          float: left;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .empty {
          float: right;
          font-size: 12px;
          color: rgb(0, 160, 220);
        }
      }
      .list-content {
        padding: 0 18px;
        max-height: 4.34rem;
        overflow: hidden;
        background: #fff;
        ul {
          .food {
            position: relative;
            padding: 12px 0;
            box-sizing: border-box;
            .name {
              line-height: 24px;
              font-size: 14px;
              color: rgb(7, 17, 27);
            }
            .price {
              position: absolute;
              right: 90px;
              bottom: 12px;
              line-height: 24px;
              font-size: 14px;
              font-weight: 700;
              color: rgb(240, 20, 20);
            }
            .cartcontrol-wrapper {
              position: absolute;
              right: 0;
              bottom: 6px;
            }
          }
        }
      }
    }
    .move-enter-active,
    .move-leave-active {
      transition: transform 0.3s;
    }
    .move-enter,
    .move-leave-to {
      transform: translateY(0);
    }

    .list-mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -8;
      backdrop-filter: blur(10px);
      opacity: 1;
      background: rgba(7, 17, 27, 0.6);
    }
  }
</style>
