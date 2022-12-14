/*
 * @Descripttion: axios请求拦截封装
 * @Author: TaoWang
 * @Date: 2022-08-27 20:56:07
 */
import axios from "axios"
const INFORMATION_ERROR = "获取信息失败"
const NEXTWORK_ERROR = "网络异常，请稍后重试！"
const instance = axios.create({
  // 与mock数据冲突的baseURL
  // baseURL: "http://localhost:8080",
  timeout: 8000,
})
/* 
  暂时不需请求拦截
*/
// instance.interceptors.request.use((req) => {
// })
/* 
  响应拦截
*/
instance.interceptors.response.use(res => {
  const { code, data, msg } = res.data
  if (code === 1) {
    return { code, msg }
  } else if (code === 0) {
    return { data, code }
  } else {
    return res.data ? res.data : Promise.reject(msg || NEXTWORK_ERROR)
  }
})
/* 
 二次封装axios
*/
function http(options) {
  options.method = options.method || "get"
  if (options.method.toLowerCase() === "get") {
    // 自动将data 转为params
    options.params = options.data
  }
  return instance(options)
}
export default http
