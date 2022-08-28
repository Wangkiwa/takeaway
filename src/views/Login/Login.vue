<!--
 * @Descripttion: 登录组件
 * @Author: TaoWang
 * @Date: 2022-08-27 11:07:49
-->
<template>
  <div class="login-wrapper">
    <div class="loginInner">
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
          <div :class="{ on: isShowOn }">
            <section class="login_message">
              <input type="text" maxlength="11" placeholder="手机号" />
              <button class="get_verification" disabled="disabled">
                获取验证码
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" />
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{ on: !isShowOn }">
            <section class="login_message">
              <input
                type="text"
                maxlength="11"
                placeholder="手机/邮箱/用户名"
              />
            </section>
            <section class="login_verification">
              <input type="password" maxlength="8" placeholder="密码" />
            </section>
            <section class="login_hint">
              <input type="text" maxlength="11" placeholder="验证码" />
              <img src="./images/captcha.svg" alt="" />
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a class="go_back" @click.prevent="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShowOn: false,
      }
    },
    methods: {},
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
              color: #999;
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
