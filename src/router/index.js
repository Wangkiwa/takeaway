/*
 * @Descripttion:
 * @Author: TaoWang
 * @Date: 2022-08-26 16:12:36
 */
import Vue from "vue"
import VueRouter from "vue-router"

import Miste from "../views/MSite/MSite.vue"
import Search from "../views/Search/Search.vue"
import Order from "../views/Order/Order.vue"
import Profile from "../views/Profile/Profile.vue"
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/msite",
    },
    {
      path: "/msite",
      component: Miste,
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/search",
      component: Search,
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/order",
      component: Order,
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/profile",
      component: Profile,
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/login",
      component: () => import("../views/Login/Login.vue"),
    },
    {
      path: "/shop",
      component: () => import("../views/Shop/Shop.vue"),
      redirect: "/shop/goods",
      children: [
        {
          path: "/shop/goods",
          component: () => import("../views/Shop/ShopGoods/ShopGoods.vue"),
        },
        {
          path: "/shop/ratings",
          component: () => import("../views/Shop/ShopRatings/ShopRatings.vue"),
        },
        {
          path: "/shop/info",
          component: () => import("../views/Shop/ShopInfo/ShopInfo.vue"),
        },
      ],
    },
  ],
})
