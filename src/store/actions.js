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
}
