/*
 * @Descripttion: 过滤器
 * @Author: TaoWang
 * @Date: 2022-09-02 16:56:41
 */
import Vue from "vue"
import dayjs from "dayjs"
Vue.filter("dateFormat", function (value) {
  return dayjs(value).format("YYYY-MM-DD HH:mm:ss")
})
