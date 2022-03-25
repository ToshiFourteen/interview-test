<template>
  <div class="box">
      详情
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    data() {
      return {
      }
    },
    methods: {
    },
    mounted() {
      if (!window.localStorage.getItem('token')) {
        this.$router.push('/login')
      }
    }
  })
</script>

<style lang="less">
</style>