<template>
  <div class="back-top" @click="handleScrollTop">
    <img class="icon-back-top" src="../assets/images/icon_back_top.png" alt="">
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    props: {
      url: {
        default: '',
        type: String
      }
    },
    methods: {
      handleScrollTop () {
        if (!window.requestAnimationFrame) {
          window.requestAnimationFrame = (cb) => {
            return setTimeout(cb, 17)
          }
        }
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let step = function () {
          let distance = 0 - scrollTop
          scrollTop = scrollTop + distance / 5
          if (Math.abs(distance) < 1) {
            window.scrollTo(0, 0)
          } else {
            window.scrollTo(0, scrollTop)
            requestAnimationFrame(step)
          }
        }
        step()
      }
    }
  })
</script>

<style lang="less" scoped>
  .back-top{
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 6px;
    position: fixed;
    right: 50px;
    bottom: 100px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .icon-back-top{
      width: 34px;
      height: 34px;
    }
  }
</style>