<!--
 * @Descripttion: 首页组件
 * @Author: TaoWang
 * @Date: 2022-08-26 15:49:38
-->
<template>
  <div class="msite">
    <!-- 首页头部 -->
    <HeaderTop title="山东省烟台市蓬莱区海滨西路啊啊啊啊啊啊啊">
      <a href="#" class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </a>
      <a href="#" slot="right">
        <span>登录|注册</span>
      </a>
    </HeaderTop>

    <!-- 首页导航 -->
    <nav class="msite_nav">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="../../../static/nav/1.jpg" alt="" />
              </div>
              <span>甜品音频</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="../../../static/nav/1.jpg" alt="" />
              </div>
              <span>甜品音频</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="../../../static/nav/1.jpg" alt="" />
              </div>
              <span>甜品音频</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="../../../static/nav/1.jpg" alt="" />
              </div>
              <span>甜品音频</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="../../../static/nav/1.jpg" alt="" />
              </div>
              <span>甜品音频</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="../../../static/nav/1.jpg" alt="" />
              </div>
              <span>甜品音频</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="../../../static/nav/1.jpg" alt="" />
              </div>
              <span>甜品音频</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="../../../static/nav/1.jpg" alt="" />
              </div>
              <span>甜品音频</span>
            </a>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="../../../static/nav/1.jpg" alt="" />
              </div>
              <span>甜品音频</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="../../../static/nav/1.jpg" alt="" />
              </div>
              <span>甜品音频</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="../../../static/nav/1.jpg" alt="" />
              </div>
              <span>甜品音频</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="../../../static/nav/1.jpg" alt="" />
              </div>
              <span>甜品音频</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="../../../static/nav/1.jpg" alt="" />
              </div>
              <span>甜品音频</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="../../../static/nav/1.jpg" alt="" />
              </div>
              <span>甜品音频</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="../../../static/nav/1.jpg" alt="" />
              </div>
              <span>甜品音频</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="../../../static/nav/1.jpg" alt="" />
              </div>
              <span>甜品音频</span>
            </a>
          </div>
        </van-swipe-item>
      </van-swipe>
    </nav>
    <!-- 首页附近商家 -->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
    </div>
    <!-- 附近商家 -->
    <ShopList></ShopList>
  </div>
</template>

<script>
  import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"
  import ShopList from "../../components/ShopList/ShopList.vue"
  export default {
    components: {
      HeaderTop,
      ShopList,
    },
  }
</script>

<style lang="less">
  .msite_nav {
    width: 100%;
    .my-swipe {
      width: 100%;
      .swiper-slide {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        a {
          width: 25%;
          height: 1.52rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          .food_container {
            width: 100%;
            height: 1rem;
            img {
              width: 1rem;
              height: 1rem;
              text-align: center;
            }
          }
          span {
            font-size: 0.26rem;
            display: block;
            width: 100%;
          }
        }
      }
    }
  }
  .msite_shop_list {
    width: 100%;
    .shop_header {
      width: 100%;
      box-sizing: border-box;
      padding: 10px 10px 0;
      border-top: 1px solid #e4e4e4;
    }
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    text-align: center;
    background-color: pink;
    height: 4rem;
  }
</style>
