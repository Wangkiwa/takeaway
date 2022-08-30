<!--
 * @Descripttion: 登录组件
 * @Author: TaoWang
 * @Date: 2022-08-27 11:07:49
-->
<template>
  <div class="login-wrapper">
    <div class="loginInner">
      <img :src="captcha" alt="" style="width: 100px" />
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a
            href="javascript:;"
            :class="{ on: isShowOn }"
            @click="isShowOn = true"
          >
            短信登录
          </a>
          <a
            href="javascript:;"
            :class="{ on: !isShowOn }"
            @click="isShowOn = false"
          >
            密码登录
          </a>
        </div>
      </div>
      <!-- form表单区域 -->
      <div class="login_content">
        <form>
          <!-- 短信登录 -->
          <div :class="{ on: isShowOn }">
            <section class="login_message">
              <input
                type="text"
                maxlength="11"
                placeholder="手机号"
                v-model="phone"
                ref="phoneIpt"
              />
              <button
                class="get_verification"
                ref="getCodeBtn"
                :disabled="isdisabled"
                @click.prevent="sendCode"
              >
                获取验证码
              </button>
            </section>
            <section class="login_verification">
              <input
                type="tel"
                maxlength="8"
                placeholder="验证码"
                v-model="code"
              />
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <!-- 密码登录 -->
          <div :class="{ on: !isShowOn }">
            <section class="login_message">
              <input
                type="text"
                maxlength="11"
                placeholder="手机/邮箱/用户名"
                v-model="name"
              />
            </section>
            <section class="login_verification">
              <input
                type="password"
                maxlength="8"
                placeholder="密码"
                v-model="pwd"
              />
            </section>
            <section class="login_hint">
              <input
                type="text"
                maxlength="11"
                placeholder="验证码"
                v-model="captcha"
              />
              <img
                src="http://localhost:4000/captcha"
                alt=""
                ref="Captcha"
                @click="getCaptcha"
              />
            </section>
          </div>
          <button class="login_submit" @click.prevent="loginBtn">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a class="go_back" @click.prevent="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
    <van-dialog
      v-model="show"
      :title="DialogTitle"
      width="220px"
      confirmButtonColor="#409EFF"
      theme="round-button"
    ></van-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShowOn: false, // false密码登录。true短信登录
        phone: "", //手机号
        code: "", //短信验证码
        isdisabled: true, // 控制disabled
        name: "", // 用户名
        pwd: "", // 密码
        captcha: "", // 图形验证码
        show: false,
        DialogTitle: "",
        computeTime: 0,
      }
    },
    methods: {
      // 获取验证码
      async sendCode() {
        if (!this.computeTime) {
          this.computeTime = 30
          let timer = null
          timer = setInterval(() => {
            this.isdisabled = true
            this.$refs.getCodeBtn.style.color = "#cccccc"
            this.$refs.getCodeBtn.innerText = `已发送(${this.computeTime}s)`
            this.computeTime--
            if (this.computeTime === 0) {
              clearInterval(timer)
              timer = null
              this.$refs.getCodeBtn.innerText = `获取验证码`
              this.isdisabled = false
              this.$refs.getCodeBtn.style.color = "#000"
            }
          }, 1000)
          const res = await this.$api.sendCode({ phone: this.phone })
          if (res.code === 1) {
            // 发送失败
            this.show = true
            this.DialogTitle = res.msg + "！"
            clearInterval(timer)
            this.computeTime = 0
            timer = null
          } else if (res.code === 0) {
            this.show = true
            this.DialogTitle = "验证码已发送！"
          }
        }
      },
      // 获取图形验证码
      getCaptcha() {
        this.$refs.Captcha.src =
          "http://localhost:4000/captcha?time" + Date.now()
      },
      // 登录按钮
      async loginBtn() {
        if (this.isShowOn) {
          // 短信登录
          const { phone, code } = this
          const PhoneNumber =
            /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/.test(
              phone
            )
          if (!PhoneNumber) {
            this.DialogTitle = "手机号不正确！"
            this.show = true
            return
          } else if (!/^\d{6}$/.test(code)) {
            this.DialogTitle = "验证码必须是6位数字！"
            this.show = true
            return
          }
          // TODO：手机号短信登录
          const res = await this.$api.smsLogin({ phone, code })
          if (res.code === 0) {
            // 登录成功
            this.$toast.success("登陆成功！")
            // 存储用户信息vuex
            this.$store.dispatch("recordUser", { userInfo: res.data })
            // 跳转路由
            this.$router.replace("/profile")
            this.phone = ""
            this.code = ""
          } else {
            // 登录失败
            this.getCaptcha()
            this.$toast.fail(res.msg + "！")
          }
        } else {
          // 密码登录
          const { name, pwd, captcha } = this
          if (!name) {
            this.DialogTitle = "请输入手机号/邮箱/用户名！"
            this.show = true
            return
          } else if (!pwd) {
            this.DialogTitle = "请输入密码！"
            this.show = true
            return
          } else if (!captcha) {
            this.DialogTitle = "请输入验证码！"
            this.show = true
            return
          }
          // TODO：用户密码登录
          const res = await this.$api.PwdLogin({ name, pwd, captcha })
          if (res.code === 0) {
            // 登录成功
            this.$toast.success("登陆成功！")
            // 存储用户信息vuex
            this.$store.dispatch("recordUser", { userInfo: res.data })

            // 跳转路由
            this.$router.replace("/profile")
            this.name = ""
            this.pwd = ""
            this.captcha = ""
          } else {
            // 登录失败
            this.getCaptcha()
            this.$toast.fail(res.msg + "！")
          }
        }
      },
    },
    watch: {
      phone(val) {
        if (val.length >= 11) {
          this.isdisabled = false
          this.$refs.getCodeBtn.style.color = "#000"
        } else {
          this.isdisabled = true
          this.$refs.getCodeBtn.style.color = "#cccccc"
        }
      },
    },
  }
</script>

<style lang="less">
  .login-wrapper {
    width: 100%;
    height: 7.8rem;
    position: relative;
    .loginInner {
      width: 80%;
      height: 100%;
      padding-top: 60px;
      margin: 0 auto;
      .login_header {
        text-align: center;
        h2 {
          font-size: 0.8rem;
          color: #379ffc;
          font-weight: bold;
        }
        .login_header_title {
          padding-top: 0.8rem;
          a {
            color: #333;
            font-size: 0.28rem;
          }
          a:nth-of-type(1) {
            margin-right: 0.8rem;
          }
          .on {
            color: #409eff;
            font-weight: 700;
            border-bottom: 2px solid #409eff;
          }
        }
      }
      .login_content {
        form {
          div {
            display: none;
            section {
              display: block;
              height: 0.96rem;
              margin-top: 0.32rem;
              input {
                width: 100%;
                height: 100%;
                padding-left: 0.2rem;
                box-sizing: border-box;
                border: 1px solid #ddd;
                border-radius: 0.08rem;
                outline: none;
                font: 400 14px Arial;
              }
              input:focus {
                border: 1px solid #409eff;
              }
            }
            .login_message,
            .login_hint {
              position: relative;
              button,
              img {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(0%, -50%);
                border: 0;
                color: #ccc;
                font-size: 0.28rem;
                background: transparent;
              }
            }
            .login_hint {
              font-size: 0.26rem;
              line-height: 0.4rem;
              a {
                color: #409eff;
              }
            }
          }
          .login_submit {
            display: block;
            width: 100%;
            height: 0.84rem;
            margin-top: 0.6rem;
            border-radius: 0.08rem;
            background-color: #4da9fd;
            color: #fff;
            border: 0;
            font-size: 0.32rem;
          }
          .on {
            display: block;
          }
        }
        .about_us {
          display: block;
          width: 100%;
          text-align: center;
          margin-top: 0.2rem;
          color: #999;
          font-size: 0.2rem;
        }
      }
    }
    .go_back {
      position: absolute;
      left: 0.16rem;
      top: 0.16rem;
      i {
        font-size: 0.4rem;
        color: #999;
      }
    }
  }
</style>
