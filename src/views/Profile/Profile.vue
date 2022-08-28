<!--
 * @Descripttion: 个人中心
 * @Author: TaoWang
 * @Date: 2022-08-26 15:53:09
-->
<template>
  <div class="profile-wrapper">
    <HeaderTop title="我的"></HeaderTop>
    <section class="profile-number">
      <router-link to="/login">
        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user_info">
          <p class="user_info_top">登录/注册</p>
          <p class="icon-mobile-number">
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </router-link>
    </section>
    <section class="profile_info_data">
      <ul class="info_data_list">
        <li>
          <a href="javascript:;">
            <span class="info_data_top">
              <span>0.00</span>
              元
            </span>
            <span class="info_data_bottom">我的余额</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span class="info_data_top">
              <span>0</span>
              个
            </span>
            <span class="info_data_bottom">我的优惠</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span class="info_data_top">
              <span>0</span>
              分
            </span>
            <span class="info_data_bottom">我的积分</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="profile_my_order">
      <a href="javascript:;">
        <span class="left-span">
          <i class="iconfont icon-order-s"></i>
        </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <a href="javascript:;">
        <span class="left-span">
          <i class="iconfont icon-jifen"></i>
        </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <a href="javascript:;">
        <span class="left-span">
          <i class="iconfont icon-vip"></i>
        </span>
        <div class="my_order_div">
          <span>硅谷外卖会员卡</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <a href="javascript:;">
        <span class="left-span">
          <i class="iconfont icon-fuwu"></i>
        </span>
        <div class="my_order_div">
          <span>政务服务</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
  </div>
</template>

<script>
  import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"
  export default {
    components: {
      HeaderTop,
    },
  }
</script>

<style lang="less">
  .profile-wrapper {
    .profile-number {
      width: 100%;
      a {
        display: block;
        width: 100%;
        height: 2rem;
        box-sizing: border-box;
        background: #409eff;
        color: #7e8c8d;
        border-top: 1px solid #eee;
        padding: 20px 10px;
        .profile_image {
          float: left;
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 50%;
          overflow: hidden;
          i {
            font-size: 1.24rem;
            background: #e4e4e4;
          }
        }
        .user_info {
          color: #fff;
          float: left;
          margin-top: 0.16rem;
          margin-left: 0.3rem;
          .user_info_top {
            font-size: 0.36rem;
            color: #fff;
            font-weight: 700;
            padding-bottom: 0.16rem;
          }
          .icon-mobile-number {
            font-size: 0.26rem;
            .user-icon {
              width: 0.4rem;
              height: 0.4rem;
              display: inline-block;
              margin-left: -0.3rem;
              margin-right: 0.1rem;
              i {
                font-size: 0.6rem;
                vertical-align: middle;
              }
            }
            .mobile-number {
              margin-left: 0.1rem;
            }
          }
        }
        .arrow {
          float: right;
          line-height: 1.3rem;
          color: #fff;
          i {
            font-size: 0.14rem;
          }
        }
      }
    }
    .profile_info_data {
      width: 100%;
      height: 1.6rem;
      background-color: #fff;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      .info_data_list {
        display: flex;
        height: 100%;
        li {
          width: 33.33%;
          height: 100%;
          box-sizing: border-box;
          border-right: 0.02rem solid #f1f1f1;
          a {
            display: block;
            text-align: center;
            .info_data_top {
              width: 100%;
              font-size: 0.28rem;
              color: #333;
              display: block;
              padding: 15px 5px 10px;
              box-sizing: border-box;
              span {
                color: #f90;
                font-size: 0.6rem;
                display: inline-block;
                font-weight: 700;
              }
            }
            .info_data_bottom {
              font-size: 0.28rem;
              color: #666;
              font-weight: 400;
              padding-bottom: 0.2rem;
            }
          }
        }
      }
    }
    .profile_my_order {
      width: 100%;
      a {
        display: block;
        width: 100%;
        height: 1.06rem;
        line-height: 1.06rem;
        display: flex;
        .left-span {
          width: 10%;
          height: 0.4rem;
          margin-left: 0.16rem;
          i {
            color: #409eff;
            font-size: 0.6rem;
          }
          .icon-vip {
            color: #f90;
          }
          .icon-jifen {
            color: #ff5f3e;
          }
        }
        .my_order_div {
          width: 90%;
          display: flex;
          border-bottom: 1px solid #f1f1f1;
          font-size: 0.32rem;
          color: #333;
          justify-content: space-between;
          .my_order_icon {
            margin-right: 0.2rem;
            i {
              font-size: 0.18rem;
            }
          }
        }
      }
    }
  }
  .profile-wrapper
    .profile_info_data
    .info_data_list
    li:nth-of-type(2)
    a
    .info_data_top
    span {
    color: #ff5f3e;
  }
  .profile-wrapper
    .profile_info_data
    .info_data_list
    li:nth-of-type(3)
    a
    .info_data_top
    span {
    color: #6ac20b;
  }
</style>
