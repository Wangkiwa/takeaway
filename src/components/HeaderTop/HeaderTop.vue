<!--
 * @Descripttion: 头部组件
 * @Author: TaoWang
 * @Date: 2022-08-27 10:37:08
-->
<template>
  <!-- 首页头部 -->
  <div class="header_fixed">
    <header class="header">
      <slot name="left"></slot>
      <a href="#" class="header_location">
        {{ title }}
      </a>
      <slot name="right"></slot>
    </header>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
      },
    },
  }
</script>

<style lang="less">
  .header_fixed {
    width: 100%;
    height: 0.9rem;
    .header {
      width: 100%;
      height: 0.9rem;
      position: fixed;
      left: 0;
      right: 0;
      background-color: #409eff;
      z-index: 3333;
      display: flex;
      justify-content: space-between;
      a {
        color: #fff;
        float: left;
        line-height: 0.9rem;
        margin-right: 0.12rem;
        i {
          font-size: 0.6rem;
          margin-left: 0.3rem;
        }
      }
      .header_search {
        width: 20%;
        height: 0.9rem;
        i {
          font-size: 0.44rem;
        }
      }
      .header_location {
        width: 60%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        font-size: 0.38rem;
      }
    }
  }
</style>
