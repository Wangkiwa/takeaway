/*
 * @Descripttion: 控制mutation
 * @Author: TaoWang
 * @Date: 2022-08-28 17:28:10
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
} from "./mutation-types"
import $api from "../api/index"
export default {
  // 异步获取地址
  async getAddress({ commit, state }) {
    const geohash = state.latitude + "," + state.longitude
    const result = await $api.location(geohash)
    console.log(result)
    // 提交mutation
    commit(RECEIVE_ADDRESS, { address: result.data })
  },
  // 异步获取分类列表
  async getCategorys({ commit }) {
    const result = await $api.categoriesList()
    // 提交mutation
    commit(RECEIVE_CATEGORYS, { categorys: result.data })
  },
  // 异步获取商家列表
  async getShops({ commit, state }) {
    const { latitude, longitude } = state
    const params = { latitude, longitude }
    const result = await $api.shopList(params)
    console.log("result==>", result)
    // 提交mutation
    commit(RECEIVE_SHOPS, { shops: result.data })
  },
  // 记录用户信息
  recordUser({ commit }, { userInfo }) {
    commit(RECEIVE_USER_INFO, { userInfo })
  },
  // 自动登录
  async getUserInfo({ commit }) {
    const res = await $api.userInfo()
    if (res.code === 0) {
      commit(RECEIVE_USER_INFO, { userInfo: res.data })
    }
  },
  // 商家信息
  async getShopInfo({ commit }) {
    const res = await $api.shopInfo()
    console.log("sjxx", res)
    if (res.code === 0) {
      commit(RECEIVE_INFO, { info: res.data })
    }
  },
  // 获取商家评价列表
  async getShopRatings({ commit }, cb) {
    const res = await $api.shopRatings()
    if (res.code === 0) {
      commit(RECEIVE_RATINGS, { ratings: res.data })
    }
    cb && cb()
  },
  // 获取商家商品列表
  async getShopGoods({ commit }) {
    const res = await $api.shopGoods()
    if (res.code === 0) {
      commit(RECEIVE_GOODS, { goods: res.data })
    }
  },
  updateFoodCount({ commit }, { food, isAdd }) {
    if (isAdd) {
      //增加
      commit(INCREMENT_FOOD_COUNT, { food })
    } else {
      //减少
      commit(DECREMENT_FOOD_COUNT, { food })
    }
  },
  // 清空购物车
  clearCart({ commit }) {
    commit(CLEAR_CART)
  },
}
