<template>
  <div :class="['notice', noticeStatus ? 'active' : '', type]">{{message}}</div>
</template>

<script lang="ts">
  import Vue from 'vue'
  let timer: ReturnType<typeof setTimeout>

  export default Vue.extend({
    data() {
      return {
        message: '',
        noticeStatus: false,
        type: 'success'
      }
    },
    methods: {
      notify(type: string, message: string) {
        clearTimeout(timer)
        this.type = type
        this.message = message
        this.noticeStatus = true
        timer = setTimeout(() => {
          this.noticeStatus = false
        }, 1500)
      }
    },
    mounted() {
    }
  })
</script>

<style lang="less" scoped>
  .notice{
    width: 400px;
    height: 40px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    position: fixed;
    left: calc(50% - 200px);
    top: -80px;
    transition: top 0.3s;
    z-index: 9999;
  }
  .active{
    top: 20px;
  }
  .success{
    background-color: #389e0d;
    color: #fff;
  }
  .danger{
    background-color: #a8071a;
    color: #fff;
  }

  @media screen and (max-width: 800px) {
    .notice{
      width: 100%;
      height: 40px;
      font-size: 14px;
      left: 0;
      top: -60px;
    }
    .active{
      top: 0;
    }
  }
</style>