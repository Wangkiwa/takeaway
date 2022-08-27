/*
 * @Descripttion:
 * @Author: TaoWang
 * @Date: 2022-08-26 14:42:15
 */
import Vue from "vue"
import App from "./App.vue"
import router from "./router/index"
import "/static/css/reset.css"
import flexible from "flexible.js"
flexible()
import { Button, Swipe, SwipeItem } from "vant"
Vue.use(Button)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.config.productionTip = false
new Vue({
  el: "#app",
  render: h => h(App),
  router,
})
