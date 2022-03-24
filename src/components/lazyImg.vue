<template>
  <div class="lazy-img" ref="img"></div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import baseImg from '../assets/images/img_default.png'

  let timer: any = null
  // new监听
  let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry: any) =>{
        if(entry.isIntersecting || entry.intersectionRatio>0){
        !entry.target.isLoaded && showImage(entry.target, entry.target.data_src)
        }
    })
  })
  // 处理图片显示
  function showImage(el: any, imgSrc: string){
    const img = new Image()
    img.src = imgSrc
    img.onload = ()=>{
      el.style = `background-image: url(${imgSrc})`
      el.isLoaded = true
    }
  }

  export default Vue.extend({
    props: {
      url: {
        default: '',
        type: String
      }
    },
    methods: {
      // 将img标签与监听绑定
      bind() {
        let el : any = this.$refs['img']
        el.style = `background-image: url(${baseImg})`
        el.data_src = this.url
        observer.observe(el)
      }
    },
    mounted() {
      this.bind()
    },
    // destroy前取消监听
    beforeDestroy() {
      clearTimeout(timer)
      timer = setTimeout(() => {
        observer.disconnect()
      }, 20)
    }
  })
</script>

<style lang="less">
  .lazy-img{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
</style>