/*
 * @Descripttion:state的计算属性
 * @Author: TaoWang
 * @Date: 2022-08-28 17:28:22
 */
export default {
  // 总数量
  totalCount(state) {
    return state.cartFoods.reduce((preCount, food) => {
      return preCount + food.count
    }, 0)
  },
  // 总价格
  totalPrice(state) {
    return state.cartFoods.reduce((preCount, food) => {
      return preCount + food.count * food.price
    }, 0)
  },
}
