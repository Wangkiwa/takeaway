<!--
 * @Descripttion: 商品头部信息
 * @Author: TaoWang
 * @Date: 2022-08-30 13:06:05
-->
<template>
  <div class="shop_header">
    <!-- 店铺顶部 -->
    <nav class="shop_nav" :style="{ backgroundImage: `url(${info.bgImg})` }">
      <router-link to="/msite">
        <i class="iconfont icon-arrow_left"></i>
      </router-link>
    </nav>
    <!-- 店铺具体信息 -->
    <div class="shop_content">
      <img :src="info.avatar" alt="" />
      <div class="header_content">
        <h2 class="content_title" @click="shopInfoPopup = true">
          <span class="mini_tag">品牌</span>
          <span class="content-name">{{ info.name }}</span>
          <i class="content-icon"></i>
        </h2>
        <div class="shop_message">
          <span class="shop_message_detail">{{ info.score }}</span>
          <span class="shop_message_detail">月售{{ info.sellCount }}单</span>
          <span class="shop_message_detail">
            {{ info.description }}
            <span>约{{ info.deliveryTime }}分钟</span>
          </span>
          <span class="shop_message_detail">距离{{ info.distance }}</span>
        </div>
      </div>
    </div>
    <!-- 活动部分 -->
    <div
      class="shop-header-discounts"
      v-if="info.supports"
      @click="actionshow = true"
    >
      <div class="discounts-left">
        <div class="activity" :class="supportClasses[info.supports[0].type]">
          <span class="content-tag-wrapper">
            <span class="content-tag">{{ info.supports[0].name }}</span>
          </span>
          <span class="activity-content">
            {{ info.supports[0].content }}
          </span>
        </div>
      </div>
      <div class="discounts-right">
        <span>{{ info.supports.length }}个优惠</span>
      </div>
    </div>
    <!-- 弹出层 -->
    <van-popup class="shop_content" v-model="shopInfoPopup" round closeable>
      <div class="shopInfoPopupClass">
        <h2 class="content_title" @click="shopInfoPopup = true">
          <span class="mini_tag">品牌</span>
          <span class="content-name">{{ info.name }}</span>
          <i class="content-icon"></i>
        </h2>
        <ul class="shop_message brief-modal-msg">
          <li>
            <span class="shop_message_detail">
              {{ info.score }}
            </span>
            <p>评分</p>
          </li>
          <li>
            <span class="shop_message_detail">{{ info.sellCount }}单</span>
            <p>月售</p>
          </li>
          <li>
            <span class="shop_message_detail">
              <span>约{{ info.deliveryTime }}分钟</span>
            </span>
            <p>{{ info.description }}</p>
          </li>
          <li>
            <span class="shop_message_detail">
              <span>{{ info.minPrice }}</span>
            </span>
            <p>配送费</p>
          </li>
          <li>
            <span class="shop_message_detail">{{ info.distance }}</span>
            <p>距离</p>
          </li>
        </ul>
        <h3 class="brief-modal-title">
          <span>公告</span>
        </h3>
        <div class="brief-modal-notice">
          {{ info.bulletin }}
        </div>
      </div>
    </van-popup>
    <!-- 动作面板 -->
    <van-action-sheet v-model="actionshow" :round="false" title="优惠活动">
      <div class="content">
        <ul class="list">
          <li
            v-for="(support, index) in info.supports"
            :key="index"
            :class="supportClasses[support.type]"
          >
            <span class="content-tag-wrapper">
              <span class="content-tag">{{ support.name }}</span>
            </span>
            <span class="activity-content">
              {{ support.content }}
            </span>
          </li>
        </ul>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    data() {
      return {
        // 存放三种不同标签的类
        supportClasses: ["activity-green", "activity-red", "activity-orange"],
        shopInfoPopup: false,
        actionshow: false,
      }
    },
    computed: {
      ...mapState(["info"]),
    },
  }
</script>

<style lang="less">
  .shop_header {
    .shop_nav {
      padding: 5px 10px;

      height: 0.8rem;
      background-size: cover;
      a {
        display: inline-block;
        color: #fff;
        line-height: 0.8rem;
        width: 0.8rem;
        i {
          margin-left: 0.2rem;
        }
      }
    }
    .shop_content {
      overflow: hidden;
      padding: 30px 20px 5px 20px;
      box-sizing: border-box;
      background: #fff;
      img {
        width: 1.32rem;
        height: 1.32rem;
        position: absolute;
        top: 0.96rem;
        left: 50%;
        margin-top: -0.8rem;
        border-radius: 0.04rem;
        transform: translate(-50%);
        box-shadow: 0 0 0.4vw 0 rgb(0 0 0 / 20%);
      }
      .header_content,
      .shopInfoPopupClass {
        text-align: center;
        .content_title {
          position: relative;
          .mini_tag {
            background-image: linear-gradient(90deg, #fff100, #ffe339);
            font-weight: 700;
            width: 0.72rem;
            height: 0.36rem;
            padding: 0px 6px;
            font-size: 0.28rem;
          }
          .content-name {
            font-weight: 800;
            font-size: 0.4rem;
            margin-left: 0.24rem;
          }
          .content-icon {
            width: 0.4rem;
            height: 0.32rem;
          }
          .content-icon::after {
            content: "";
            border-style: solid;
            border-width: 0.12rem 0 0.12rem 0.14rem;
            border-color: transparent transparent transparent
              rgba(0, 0, 0, 0.67);
            position: absolute;
            top: 52%;
            transform: translate(0, -50%);
          }
        }
        .shop_message {
          height: 0.24rem;
          margin-top: 0.16rem;
          font-size: 0.22rem;
          color: #333;
          .shop_message_detail {
            margin-right: 0.1rem;
          }
        }
      }
    }
    .shop-header-discounts {
      background-color: #fff;
      border: 1px solid #eee;
      border-radius: 1px;
      font-size: 0.22rem;
      padding: 0.1rem 0.1rem;
      margin: 0 0.6rem;
      display: flex;
      color: #666;
      justify-content: space-between;
      .discounts-left {
        overflow: hidden;
        width: 80%;
        .activity {
          .content-tag-wrapper {
            width: 0.5rem;
            height: 0.26rem;
            display: inline-block;
            vertical-align: baseline;
            background-color: #409eff;
            padding: 0px 0.04rem;
            margin-right: 0.1rem;
            .content-tag {
              font-weight: 700;
              text-align: center;
              color: #fff;
              position: absolute;
              transform: scale(0.8);
            }
          }
          .activity-content {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            position: absolute;
            display: inline-block;
            width: 58%;
            height: 0.26rem;
          }
        }
        .activity-green {
          .content-tag-wrapper {
            background-color: #409eff;
          }
        }
        .activity-red {
          .content-tag-wrapper {
            background-color: rgb(240, 115, 115);
          }
        }
        .activity-orange {
          .content-tag-wrapper {
            background-color: rgb(241, 136, 79);
          }
        }
      }
      .discounts-right {
        position: relative;

        margin-right: 0.12rem;
      }
      .discounts-right::after {
        content: "";
        display: block;
        border-style: solid;
        border-width: 0.08rem 0.08rem 0;
        border-color: rgba(0, 0, 0, 0.57) transparent transparent;
        position: absolute;
        top: 50%;
        right: -0.2rem;
      }
    }
  }
  .van-popup {
    width: 90%;
    height: 5.6rem;
    padding: 10px;
    .shopInfoPopupClass {
      padding-top: 20px;
      .brief-modal-msg {
        display: flex;
        li {
          width: 20%;
          .shop_message_detail {
            font-size: 0.32rem;
            font-weight: 600;
            color: #333;
            display: inline-block;
            margin-bottom: 8px;
            margin-right: 0 !important;
          }
          span {
            font-size: 0.32rem;
            font-weight: 600;
            color: #333;
          }
        }
      }
      .brief-modal-msg li:first-child {
        width: 15%;
      }
      .brief-modal-msg li:nth-child(2) {
        width: 15%;
      }
      .brief-modal-msg li:nth-child(3) {
        width: 30%;
      }
      .brief-modal-title {
        position: relative;
        margin: 0.7rem auto 0.5rem;
        text-align: center;
        width: 1.7rem;
        background-image: linear-gradient(90deg, #fff, #333 50%, #fff);
        background-size: 100% 1px;
        background-position: 50%;
        background-repeat: no-repeat;
        span {
          font-size: 0.24rem;
          padding: 0 0.12rem;
          color: #999;
          background: #fff;
        }
      }
      .brief-modal-notice {
        font-size: 0.26rem;
        line-height: 1.54;
        color: #333;
        overflow-y: auto;
      }
    }
  }
  .van-action-sheet {
    width: 100%;
    .van-action-sheet__header {
      color: #333;
      font-size: 0.44rem;
      font-weight: 700;
    }
    .van-action-sheet__close {
      right: 0.5rem;
    }
    .content {
      padding: 20px 30px;
      .list {
        font-size: 0.32rem;
        height: 160px;
        overflow-y: auto;
        padding-top: 0.1rem;
        li {
          font-size: 0.26rem;
          margin-bottom: 0.24rem;
          .content-tag {
            padding: 0.12rem;
            color: #fff;
          }
          .content-tag-wrapper {
            padding: 0.04rem 0;
          }
        }
        .activity-green {
          .content-tag-wrapper {
            background-color: #409eff;
          }
        }
        .activity-red {
          .content-tag-wrapper {
            background-color: rgb(240, 115, 115);
          }
        }
        .activity-orange {
          .content-tag-wrapper {
            background-color: rgb(241, 136, 79);
          }
        }
      }
    }
  }
</style>
