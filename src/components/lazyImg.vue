<template>
  <img class="lazy-img" ref="img"/>
</template>

<script lang="ts">
  import Vue from 'vue'
  import baseImg from '../assets/images/img_default.png'

  let timer: ReturnType<typeof setTimeout>
  // new监听
  let observer = new IntersectionObserver((entries)=>{
    console.log(entries)
    entries.forEach((entry: any) =>{
      if( entry.isIntersecting || entry.intersectionRatio > 0){
        !entry.target.isLoaded && showImage(entry.target, entry.target.data_src)
      }
    })
  })
  // 处理图片显示
  function showImage(el: any, imgSrc: string){
    el.onload = ()=>{
      el.isLoaded = true
    }
    el.src = imgSrc
  }

  export default Vue.extend({
    data() {
      return {
        target: null as any
      }
    },
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
        el.src = baseImg
        el.data_src = this.url
        // console.log(el)
        observer.observe(el)
        this.target = el
      }
    },
    mounted() {
      this.bind()
    },
    // destroy前取消监听
    beforeDestroy() {
      observer.unobserve(this.target)
    }
  })
</script>

<style lang="less" scoped>
  .lazy-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
</style>