<!--
 * @Descripttion: 点餐组件 
 * @Author: TaoWang
 * @Date: 2022-08-30 13:04:44
-->
<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <!-- current -->
          <!--  :class="{ current: index == currentIndex }" -->
          <li
            class="menu-item"
            :class="{
              current: index == currentIndex,
              activity_menu: index == currentIndex,
            }"
            v-for="(good, index) in goods"
            :key="index"
            @click="clickMenuItem(index)"
          >
            <span class="text">
              <img class="icon" v-if="good.icon" :src="good.icon" />
              {{ good.name }}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul ref="foodUl">
          <li
            class="food-list-hook"
            v-for="(good, index) in goods"
            :key="index"
          >
            <h1 class="title">{{ good.name }}</h1>
            <ul>
              <li
                class="food-item"
                v-for="(food, index) in good.foods"
                :key="index"
                @click="isShow(food)"
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
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"></CartControl>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ShopCart></ShopCart>
    </div>
    <Food ref="food" :food="food"></Food>
  </div>
</template>

<script>
  import BetterScroll from "better-scroll"
  import Food from "../../../components/Food/Food.vue"
  import CartControl from "../../../components/CartControl/CartControl.vue"
  import ShopCart from "../../../components/ShopCart/ShopCart.vue"
  import { mapState } from "vuex"
  export default {
    data() {
      return {
        scrollY: 0, //右侧 Y 轴滑动的坐标
        tops: [], // 包含右侧所有分类小列表的 top 值
        food: {},
      }
    },
    components: {
      CartControl,
      Food,
      ShopCart,
    },
    created() {
      this.$store.dispatch("getShopGoods")
    },
    computed: {
      ...mapState(["goods"]),
      // 计算得到当前分类的下标
      currentIndex() {
        const { scrollY, tops } = this
        // 根据scrollY的范围找到tops的索引
        const i = tops.findIndex((top, index) => {
          // tops [0,723,1027,1476,1594,1805,2032,2336,2825,3487]
          // 比如 0-693的区间 scrollY大于当前索引项 小于下一项
          if (scrollY >= top && scrollY < tops[index + 1]) {
            return true
          }
        })
        return i
      },
    },
    mounted() {
      // 由于数据是异步获取，所以此时未拿到数据，所以无法更新
      // console.log("1")
      // 必须在列表数据显示后创建
      // new BetterScroll(".menu-wrapper")
    },
    updated() {
      /* 
        update存在页面卡死问题/(ㄒoㄒ)/~~
      */
      // this._initScroll()
      //  this._initTops()
    },
    methods: {
      _initScroll() {
        /*
          收集scrollY
        */
        new BetterScroll(".menu-wrapper", {
          click: true, //默认为false，会阻止click事件的发生
        })
        this.foodsScroll = new BetterScroll(".foods-wrapper", {
          probeType: 2, // 手指滑动(惯性滑动和编码滑动不监视)
          click: true, //默认为false，会阻止click事件的发生
        })
        this.foodsScroll.on("scroll", ({ x, y }) => {
          // 收集右侧滚动的Y值
          this.scrollY = Math.abs(y)
          console.log(this.scrollY)
        })
        this.foodsScroll.on("scrollEnd", ({ x, y }) => {
          // 收集右侧滚动的Y值
          this.scrollY = Math.abs(y)
          console.log("scrollEnd", Math.abs(y))
        })
      },
      _initTops() {
        /*
        收集top值
      */
        let lis = this.$refs.foodUl.getElementsByClassName("food-list-hook")
        let top = 0
        this.tops.push(top)
        Array.from(lis).forEach(item => {
          top += item.clientHeight
          this.tops.push(top)
        })
      },
      clickMenuItem(index) {
        console.log(this.tops[index])
        const scrollY = this.tops[index]
        this.scrollY = scrollY
        this.foodsScroll.scrollTo(0, -scrollY, 300)
      },
      isShow(food) {
        this.food = food
        this.$refs.food.toggleShowFood()
      },
    },
    watch: {
      goods(val) {
        console.log("2", val)
        // vue是先更新数据，再异步更新界面，数据虽然更新了，但是页面可能没有更新，所以需要nextTick
        this.$nextTick(() => {
          this._initScroll()
          this._initTops()
        })
      },
    },
  }
</script>

<style lang="less">
  .goods {
    width: 100%;
    display: flex;
    position: absolute;
    top: 3.9rem;
    bottom: 0.92rem;
    overflow: hidden;
    .menu-wrapper {
      width: 20%;
      box-sizing: border-box;
      background: #f3f5f7;
      ul {
        border-top: 1px solid rgba(7, 17, 27, 0.1);
        .menu-item {
          padding: 0 0.24rem 0 0.12rem;
          font-weight: 700;
          text-align: center;
          box-sizing: border-box;
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
        .activity_menu {
          border-left: 0.06rem solid #3190e8;
        }
        .current {
          background-color: #fff;
          color: #409eff;
        }
      }
    }
    .foods-wrapper {
      width: 80%;
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
              border-bottom: 1px solid rgba(7, 17, 27, 0.1);
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
                  line-height: 0.24rem;
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
