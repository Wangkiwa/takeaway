<!--
 * @Descripttion: 商家组件
 * @Author: TaoWang
 * @Date: 2022-08-27 11:01:05
-->
<template>
  <!-- 附近商家 -->
  <div class="shop_container">
    <ul class="shop_list" v-if="shops.length">
      <li
        @click="$router.push('/shop')"
        class="shop_li"
        v-for="(shop, index) in shops"
        :key="index"
      >
        <a href="javascript:;">
          <div class="shop_left">
            <img :src="baseImgUrl + shop.image_path" alt="" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title">{{ shop.name }}</h4>
              <ul class="shop_detail_ul">
                <li
                  class="supports"
                  v-for="(support, index) in shop.supports"
                  :key="index"
                >
                  {{ support.icon_name }}
                </li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <!-- start -->
                <Star :score="shop.rating" :size="24"></Star>
                <div class="rating_section">{{ shop.rating }}</div>
                <div class="order_section">
                  月售{{ shop.recent_order_num }}单
                </div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">
                  {{ shop.delivery_mode.text }}
                </span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>￥{{ shop.float_minimum_order_amount }}起送</span>
                <span class="segmentation">/</span>
                <span>{{ shop.piecewise_agent_fee.tips }}</span>
              </p>
            </section>
          </div>
        </a>
      </li>
    </ul>
    <ul v-else>
      <li v-for="(item, index) in 6" :key="index">
        <img src="./images/shop_back.svg" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  import Star from "../Star/Star.vue"
  export default {
    data() {
      return {
        baseImgUrl: "http://cangdu.org:8001/img/",
      }
    },
    computed: {
      ...mapState(["shops"]),
    },
    components: {
      Star,
    },
  }
</script>

<style lang="less">
  .shop_container {
    .shop_list {
      .shop_li {
        border-bottom: 1px solid #f1f1f1;
        box-sizing: border-box;
        a {
          display: block;
          width: 100%;
          height: 2.1rem;
          padding: 0.3rem 0.16rem;
          box-sizing: border-box;
          display: flex;
          .shop_left {
            width: 23%;
            margin-right: 0.12rem;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .shop_right {
            width: 77%;
            .shop_detail_header {
              display: flex;
              justify-content: space-between;
              .shop_title {
                font-weight: 800;
                color: #333;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .shop_title::before {
                content: "\54C1\724C";
                display: inline-block;
                font-size: 0.22rem;
                line-height: 0.22rem;
                color: #333;
                background-color: #ffd930;
                padding: 0.04rem 0.04rem;
                box-sizing: border-box;
                border-radius: 0.04rem;
                margin-right: 0.1rem;
                font-weight: 900;
              }
              .shop_detail_ul {
                li {
                  float: left;
                  font-size: 0.2rem;
                  color: #999;
                  border: 1px solid #f1f1f1;
                  padding: 0 2px;
                  box-sizing: border-box;
                  border-radius: 2px;
                }
              }
            }
            .shop_rating_order {
              display: flex;
              justify-content: space-between;
              width: 100%;
              margin-top: 0.36rem;
              margin-bottom: 8px;
              .shop_rating_order_left {
                display: flex;
                font-size: 0.2rem;
                .star {
                  float: left;
                }

                .rating_section {
                  color: #ff6000;
                  margin-left: 4px;
                }
                .order_section {
                  color: #666;
                  transform: scale(0.8);
                }
              }
              .shop_rating_order_right {
                .delivery_style {
                  transform: scale(0.7);
                  display: inline-block;
                  font-size: 0.24rem;
                  padding: 0.02rem;
                  box-sizing: border-box;
                  border-radius: 2px;
                }
                .delivery_right {
                  color: #409eff;
                  border: 1px solid #409eff;
                }
              }
            }
            .shop_distance {
              font-size: 0.24rem;
              .shop_delivery_msg {
                float: left;
                font-size: 0.2rem;
                color: #666;
                .segmentation {
                  color: #ccc;
                  margin: 0 0.08rem;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
