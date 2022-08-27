<!--
 * @Descripttion: 商家组件
 * @Author: TaoWang
 * @Date: 2022-08-27 11:01:05
-->
<template>
  <!-- 附近商家 -->
  <div class="shop_container">
    <ul class="shop_list">
      <li class="shop_li">
        <a href="javascript:;">
          <div class="shop_left">
            <img src="../../../static/nav/10.jpg" alt="" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title">嘉禾一品（温都水城）</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                </div>
                <div class="rating_section">4.7</div>
                <div class="order_section">月售106单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">硅谷专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>￥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约￥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <!--  -->
      <li class="shop_li">
        <a href="javascript:;">
          <div class="shop_left">
            <img src="../../../static/nav/10.jpg" alt="" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title">嘉禾一品（温都水城）</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_section">4.7</div>
                <div class="order_section">月售106单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">硅谷专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>￥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约￥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <!--  -->
      <li class="shop_li">
        <a href="javascript:;">
          <div class="shop_left">
            <img src="../../../static/nav/10.jpg" alt="" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title">嘉禾一品（温都水城）</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                </div>
                <div class="rating_section">4.7</div>
                <div class="order_section">月售106单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">硅谷专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>￥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约￥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less">
  .shop_container {
    .shop_list {
      .shop_li {
        a {
          display: block;
          width: 100%;
          height: 2.1rem;
          background-color: #02a774;
          padding: 0.3rem 0.16rem;
          box-sizing: border-box;
          display: flex;
          .shop_left {
            width: 23%;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .shop_right {
            width: 77%;
            background-color: antiquewhite;
            .shop_detail_header {
              display: flex;
              justify-content: space-between;
              .shop_title {
                font-weight: 800;
                color: #333;
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
                .star-36 {
                  .star-item {
                    width: 0.3rem;
                    height: 0.3rem;
                    display: inline-block;
                    margin-right: 0.06rem;
                    background-size: 0.3rem 0.3rem;
                  }
                  .on {
                    background-image: url("./images/stars/star24_on@2x.png");
                  }
                  .half {
                    background-image: url("./images/stars/star24_half@2x.png");
                  }
                  .off {
                    background-image: url("./images/stars/star24_off@2x.png");
                  }
                }
                .star-24 {
                  .star-item {
                    width: 0.2rem;
                    height: 0.2rem;
                    display: inline-block;
                    margin-right: 0.06rem;
                    background-size: 0.2rem 0.2rem;
                  }
                  .on {
                    background-image: url("./images/stars/star36_on@2x.png");
                  }
                  .half {
                    background-image: url("./images/stars/star36_half@2x.png");
                  }
                  .off {
                    background-image: url("./images/stars/star36_off@2x.png");
                  }
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
                  color: #02a774;
                  border: 1px solid #02a774;
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
