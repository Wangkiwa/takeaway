<!--
 * @Descripttion: star组件
 * @Author: TaoWang
 * @Date: 2022-08-29 11:03:14
-->
<template>
  <div class="star" :class="`star-` + size">
    <span
      v-for="(star, index) in starClasses"
      :key="index"
      class="star-item"
      :class="star"
    ></span>
  </div>
</template>

<script>
  export default {
    props: {
      score: Number,
      size: Number,
    },
    computed: {
      // 将类名使用数组保存
      starClasses() {
        // 存放类名的数组
        const scs = []
        const { score } = this
        // star类名出现的情况on,half,off
        /* 
          3.2 on on on off off
          3.6 on on on half off
          on出现的情况
        */
        const scoreInteger = Math.floor(score) // 整数部分
        const scoreDecimals = score * 10 - scoreInteger * 10 // 小数部分(避免出现小数计算问题)
        // 添加on
        for (let i = 0; i < scoreInteger; i++) {
          scs.push("on")
        }
        // 添加half
        if (scoreDecimals >= 5) {
          scs.push("half")
        }
        // 添加off
        while (scs.length < 5) {
          scs.push("off")
        }
        return scs
      },
    },
  }
</script>

<style lang="less">
  .star-36 {
    .star-item {
      width: 0.3rem;
      height: 0.3rem;
      display: inline-block;
      margin-right: 0.06rem;
      background-size: 0.3rem 0.3rem;
    }
    .on {
      background-image: url("./images/stars/star24_on@2x.png");
    }
    .half {
      background-image: url("./images/stars/star24_half@2x.png");
    }
    .off {
      background-image: url("./images/stars/star24_off@2x.png");
    }
  }
  .star-24 {
    .star-item {
      width: 0.2rem;
      height: 0.2rem;
      display: inline-block;
      margin-right: 0.06rem;
      background-size: 0.2rem 0.2rem;
    }
    .on {
      background-image: url("./images/stars/star36_on@2x.png");
    }
    .half {
      background-image: url("./images/stars/star36_half@2x.png");
    }
    .off {
      background-image: url("./images/stars/star36_off@2x.png");
    }
  }
</style>
