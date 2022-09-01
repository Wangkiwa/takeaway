/*
 * @Descripttion:统一管理mutation
 * @Author: TaoWang
 * @Date: 2022-08-28 17:28:03
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
} from "./mutation-types"
import Vue from "vue"
export default {
  [RECEIVE_ADDRESS](state, { address }) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, { categorys }) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, { shops }) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state, { userInfo }) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state) {
    state.userInfo = {}
  },
  [RECEIVE_RATINGS](state, { ratings }) {
    state.ratings = ratings
  },
  [RECEIVE_GOODS](state, { goods }) {
    state.goods = goods
  },
  [RECEIVE_INFO](state, { info }) {
    state.info = info
  },
  [INCREMENT_FOOD_COUNT](state, { food }) {
    if (!food.count) {
      // food.count = 1
      Vue.set(food, "count", 1)
      // 当我第一次点加的时候，应该将该food存放到cartFoods中
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state, { food }) {
    if (food.count) {
      food.count--
      // 必须count不存在的时候移除
      if (food.count === 0) {
        //  当我第一次点减的时候，应该将该food移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART](state) {
    // 必须清除count
    state.cartFoods.forEach(item => {
      item.count = 0
    })
    // 移除购物车
    state.cartFoods = []
  },
}
