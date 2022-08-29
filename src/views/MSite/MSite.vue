<!--
 * @Descripttion: 首页组件
 * @Author: TaoWang
 * @Date: 2022-08-26 15:49:38
-->
<template>
  <div class="msite">
    <!-- 首页头部 -->
    <HeaderTop :title="address.name">
      <router-link to="/search" class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link :to="userInfo._id ? 'userinfo' : '/login'" slot="right">
        <span v-if="!userInfo._id">登录|注册</span>
        <span v-else>
          <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </HeaderTop>
    <!-- 首页导航 -->
    <nav class="msite_nav">
      <div v-if="categorys.length">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#409EFF">
          <van-swipe-item
            v-for="(categorys, index) in categorysArr"
            :key="index"
          >
            <div class="swiper-slide">
              <a
                href="javascript:;"
                v-for="(category, index) in categorys"
                :key="index"
                class="link_to_food"
              >
                <div class="food_container">
                  <img :src="imgBaseUrl + category.image_url" alt="" />
                </div>
                <span>{{ category.title }}</span>
              </a>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <img v-else src="./images/msite_back.svg" alt="" />
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
  import { mapState } from "vuex"
  export default {
    data() {
      return {
        imgBaseUrl: "https://fuss10.elemecdn.com",
      }
    },
    components: {
      HeaderTop,
      ShopList,
    },
    created() {
      this.$store.dispatch("getCategorys")
      this.$store.dispatch("getShops")
    },
    computed: {
      ...mapState(["address", "categorys", "userInfo"]),
      getSwiperNum() {
        return Math.ceil(this.categorys.length / 8)
      },
      // 根据categorys一维数组生成一个二维数组
      categorysArr() {
        const { categorys } = this
        const max = 8
        const arr = []
        let smallArr = []
        categorys.forEach((item, index) => {
          if (smallArr.length === 0) {
            arr.push(smallArr)
          }
          smallArr.push(item)
          if (smallArr.length === max) {
            smallArr = []
          }
        })
        return arr
      },
    },
  }
</script>

<style lang="less">
  .msite_nav {
    width: 100%;
    height: 4.28rem;
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
            font-size: 0.24rem;
            display: block;
            width: 100%;
            color: #666;
          }
        }
      }
    }
    img {
      width: 100%;
      height: 100%;
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
    height: 4rem;
  }
</style>
