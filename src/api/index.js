/*
 * @Descripttion: 统一管理接口
 * @Author: TaoWang
 * @Date: 2022-08-27 20:55:38
 */
import $http from "../utils/request"
export default {
  //根据经纬度获取位置详情
  location(params) {
    return $http({
      method: "get",
      url: `/position/${params}`,
    })
  },
  // 获取食品分类列表
  categoriesList(params) {
    return $http({
      method: "get",
      url: "/index_category",
      data: params,
    })
  },
  // 根据经纬度获取商铺列表
  shopList(params) {
    return $http({
      method: "get",
      url: "/shops",
      data: params,
    })
  },
  // 用户名密码登录
  PwdLogin(params) {
    return $http({
      method: "post",
      url: "/login_pwd",
      data: params,
    })
  },
  // 发送短信验证码
  sendCode(params) {
    return $http({
      method: "get",
      url: "/sendcode",
      data: params,
    })
  },
  // 手机号验证码登录
  smsLogin(params) {
    return $http({
      method: "post",
      url: "/login_sms",
      data: params,
    })
  },
  // 根据会话获取用户信息
  userInfo() {
    return $http({
      method: "get",
      url: "/userinfo",
    })
  },
  // 用户登出
  loginOut() {
    return $http({
      method: "get",
      url: "/logout",
    })
  },
}
