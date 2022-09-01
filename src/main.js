/*
 * @Descripttion:
 * @Author: TaoWang
 * @Date: 2022-08-26 14:42:15
 */
import Vue from "vue"
import App from "./App.vue"
import router from "./router/index"
import "/static/css/reset.css"
import "./mock/mockServer"
import flexible from "flexible.js"
import api from "./api/index"
import store from "./store/index"
flexible()
import {
  Button,
  Swipe,
  SwipeItem,
  Dialog,
  Toast,
  Popup,
  ActionSheet,
  Badge,
} from "vant"
Vue.use(Button)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(Popup)
Vue.use(ActionSheet)
Vue.use(Badge)
Vue.prototype.$api = api
Vue.config.productionTip = false
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store,
})
