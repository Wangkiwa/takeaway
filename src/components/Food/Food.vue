<!--
 * @Descripttion: food组件
 * @Author: TaoWang
 * @Date: 2022-09-01 09:13:09
-->
<template>
  <div class="food">
    <!-- 弹出层 -->
    <van-popup class="shop_content" v-model="shopInfoPopup" round closeable>
      <div class="img-header">
        <img v-lazy="food.image" alt="" />
        <p class="foodpanel-desc">{{ food.info }}</p>
      </div>
      <div class="content">
        <h1 class="title">{{ food.name }}</h1>
        <div class="detail">
          <span class="sell-count">月{{ food.sellCount }}份</span>
          <span class="rating">好评率{{ food.rating }}%</span>
        </div>
        <div class="price">
          <span class="now">￥{{ food.price }}</span>
          <span class="old" v-show="food.oldPrice">￥{{ food.oldPrice }}</span>
        </div>
        <div class="cartcontrol-wrapper">
          <CartControl :food="food"></CartControl>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import CartControl from "@/components/CartControl/CartControl.vue"
  export default {
    data() {
      return {
        shopInfoPopup: false,
      }
    },
    props: {
      food: Object,
    },
    methods: {
      toggleShowFood() {
        this.shopInfoPopup = !this.shopInfoPopup
      },
    },
    components: {
      CartControl,
    },
  }
</script>

<style lang="less" scoped>
  .van-popup {
    width: 80%;
    height: 68%;
    padding: 0;
    .img-header {
      width: 100%;
      height: 5.6rem;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .foodpanel-desc {
        font-size: 0.2rem;
        color: #ddd;
        padding: 0 0.2rem 0.2rem;
        position: absolute;
        bottom: 0;
      }
    }
    .content {
      position: relative;
      padding: 18px;
      .title {
        line-height: 14px;
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 700;
        color: rgb(7, 17, 27);
      }
      .detail {
        margin-bottom: 18px;
        line-height: 10px;
        height: 10px;
        font-size: 0;
        .sell-count,
        .rating {
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
        .sell-count {
          margin-right: 12px;
        }
      }
      .price {
        font-weight: 700;
        line-height: 24px;
        .now {
          margin-right: 8px;
          font-size: 14px;
          color: rgb(240, 20, 20);
        }
        .old {
          text-decoration: line-through;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
      }
      .cartcontrol-wrapper {
        position: absolute;
        right: 12px;
        bottom: 12px;
        .buy {
          position: absolute;
          right: 18px;
          bottom: 18px;
          z-index: 10;
          height: 24px;
          line-height: 24px;
          padding: 0 12px;
          box-sizing: border-box;
          border-radius: 12px;
          font-size: 10px;
          color: #fff;
          background: rgb(0, 160, 220);
        }
      }
    }
  }
</style>
