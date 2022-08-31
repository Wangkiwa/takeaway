<!--
 * @Descripttion: 点餐组件 
 * @Author: TaoWang
 * @Date: 2022-08-30 13:04:44
-->
<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <!-- current -->
        <li class="menu-item" v-for="(good, index) in goods" :key="index">
          <span class="text">
            <img class="icon" v-if="good.icon" :src="good.icon" />
            {{ good.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
          <h1 class="title">{{ good.name }}</h1>
          <ul>
            <li
              class="food-item"
              v-for="(food, index) in good.foods"
              :key="index"
            >
              <div class="icon">
                <img :src="food.icon" alt="" />
              </div>
              <div class="content">
                <h2 class="name">{{ food.name }}</h2>
                <p class="desc">{{ food.description }}</p>
                <div class="extra">
                  <span class="count">月售{{ food.sellCount }}份</span>
                  <span>好评率{{ food.rating }}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{ food.price }}</span>
                  <span class="old" v-if="food.oldPrice">
                    ￥{{ food.oldPrice }}
                  </span>
                </div>
                <div class="cartcontrol-wrapper">CartControl</div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    created() {
      this.$store.dispatch("getShopGoods")
    },
    computed: {
      ...mapState(["goods"]),
    },
  }
</script>

<style lang="less">
  .goods {
    width: 100%;
    display: flex;
    .menu-wrapper {
      width: 20%;
      box-sizing: border-box;
      background: #f3f5f7;
      ul {
        .menu-item {
          height: 1.08rem;
          width: 1.12rem;
          padding: 0 0.24rem;
          font-weight: 700;
          text-align: center;
          .icon {
            width: 0.24rem;
            height: 0.24rem;
            vertical-align: text-top;
          }
          .text {
            width: 1.12rem;
            height: 100%;
            display: block;
            vertical-align: middle;
            font-size: 0.24rem;
            line-height: 1.12rem;
            border-bottom: 1px solid rgba(7, 17, 27, 0.1);
            box-sizing: border-box;
          }
        }
        .current {
          background-color: #fff;
          color: #02a774;
        }
      }
    }
    .foods-wrapper {
      width: 80%;
      height: 100%;
      ul {
        .food-list-hook {
          .title {
            padding-left: 0.28rem;
            height: 0.52rem;
            line-height: 0.52rem;
            border-left: 0.04rem solid #d9dde1;
            font-size: 0.24rem;
            color: #93999f;
            background: #f3f5f7;
          }
          ul {
            .food-item {
              display: flex;
              margin: 0.36rem;
              padding-bottom: 0.36rem;
              position: relative;
              border: none;
              .icon {
                flex: 0 0 57px;
                margin-right: 0.2rem;
                img {
                  width: 1.14rem;
                  height: 1.14rem;
                }
              }
              .content {
                .name {
                  margin: 0.04rem 0 0.16rem 0;
                  height: 0.28rem;
                  line-height: 0.28rem;
                  font-size: 0.28rem;
                  color: #07111b;
                }
                .desc {
                  line-height: 0.2rem;
                  font-size: 0.2rem;
                  color: #93999f;
                  margin-bottom: 0.16rem;
                }
                .extra {
                  line-height: 0.2rem;
                  font-size: 0.2rem;
                  color: #93999f;
                  .count {
                    margin-right: 0.24rem;
                  }
                }
                .price {
                  font-weight: 700;
                  line-height: 0.48rem;
                  .now {
                    margin-right: 0.16rem;
                    font-size: 0.28rem;
                    color: #f01414;
                  }
                  .old {
                    font-size: 0.2rem;
                    text-decoration: line-through;
                    font-size: 0.2rem;
                    color: #93999f;
                  }
                }
                .cartcontrol-wrapper {
                  position: absolute;
                  right: 0;
                  bottom: 0.24rem;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
