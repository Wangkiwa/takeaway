/*
 * @Descripttion: 控制mutation
 * @Author: TaoWang
 * @Date: 2022-08-28 17:28:10
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
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
  getShops({ commit, state }) {
    const { latitude, longitude } = state
    const params = { latitude, longitude }
    const result = $api.shopList(params)
    // 提交mutation
    commit(RECEIVE_SHOPS, { shops: result.data })
  },
}
