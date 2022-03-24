<template>
  <div class="box">
    <div class="search-box">
      <auto-complete :entryList="entryList" @selectedEntryListChange="handleSelectedEntryListChange"></auto-complete>
      <img class="icon-search" src="../../assets/images/icon_search.png" @click="handleSearch" alt="搜索">
    </div>
    <div class="news-list">
      <div class="news" v-for="(item, index) in newsList" :key="item.id" @click="navigate('/news/detail')">
        <div class="left">
          <div class="title">{{item.title}}</div>
          <div class="content">{{item.content}}</div>
          <div class="date">{{item.date}}</div>
        </div>
        <div class="right">
          <lazy-img :url="item.cover"></lazy-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import autoComplete from '../../components/autoComplete.vue'
  import lazyImg from '../../components/lazyImg.vue'
  export default Vue.extend({
    components: {
      autoComplete,
      lazyImg
    },
    data() {
      return {
        entryList: [
          'abc',
          'abcd',
          'bcd',
          'xxxx',
          'hhhh'
        ],
        newsList: [
          {id: 1, title: '嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨', content: '内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx内容xxx', date: '三天前', cover: 'https://img0.baidu.com/it/u=2064213898,2801034448&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'},
          {id: 2, title: '嗨2', content: '内容xxx123', date: '三天前', cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2008-10-31%2F200810280903016543.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650388589&t=a4792a7a30e1cd9610a8d7b39450b245'},
          {id: 3, title: '嗨3', content: '内容xxx131', date: '三天前', cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F1111%2F0Q91Q50307%2F1PQ9150307-8.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650388589&t=e7e7f1a5854ce01d508faf221c9f56de'},
          {id: 4, title: '嗨4', content: '内容xxx12313123', date: '三天前', cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F911%2F111G5133543%2F15111G33543-1.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650388589&t=7c07366da4a204c60ff7e78c6edea0cf'},
          {id: 5, title: '嗨5', content: '内容xxx13131', date: '三天前', cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F911%2F0R415123342%2F150R4123342-6-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650388589&t=0f10b9a6e17956f79e893895b0ed4e70'},
          {id: 6, title: '嗨6', content: '内容xxx1313', date: '三天前', cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-08-20%2F5f3e45af82a4d.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650388589&t=bfe3da0325b07f909c04de18a2c7c8f0'},
          {id: 7, title: '嗨7', content: '内容xxx1313', date: '三天前', cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F911%2F050916125K7%2F160509125K7-11.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650388589&t=417c6a4518ad619c6594d8b12a947c00'},
          {id: 8, title: '嗨8', content: '内容xxx1313', date: '三天前', cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2010-3-12%2Fenterdesk.com-36242C8529388B803FF0349DEEB18C9D.JPG&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650388589&t=8b2c1b40c0ca147bf3a929bad30bcc84'},
          {id: 9, title: '嗨9', content: '内容xx13131x', date: '三天前', cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2008-6-13%2F200806131108306030.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650388589&t=7bf1e7afa8d621308e303dacfc45140d'},
          {id: 10, title: '嗨10', content: '内容xx1313131x', date: '三天前', cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F911%2F0QQ6113951%2F160QQ13951-1.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650388589&t=f61fde59f6713cf350280503c61553d1'},
        ],
        selectedEntryList: [] as string[]
      }
    },
    methods: {
      navigate(url: string) {
        this.$router.push(url)
      },
      handleSelectedEntryListChange(list: string[]) {
        this.selectedEntryList = list
      },
      handleSearch() {
        console.log(this.selectedEntryList)
      }
    },
    mounted() {
    }
  })
</script>

<style lang="less" scoped>
  .box{
    width: 100%;
    max-width: 600px;
    height: 100vh;
  }
  .search-box{
    width: 100%;
    display: flex;
    margin-left: 20px;
    margin-top: 20px;
    justify-content: flex-start;
    align-items: center;
    border: 1px #eaeaea solid;
    padding: 0 20px;
    border-radius: 4px;
    box-sizing: border-box;
    .icon-search{
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }

  .news-list{
    width: 100%;
    .news{
      width: 100%;
      height: 160px;
      padding: 0 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      margin-left: 20px;
      box-shadow: 2px 2px 10px 0 rgba(0,0,0,0.08);
      border-radius: 10px;
      .left{
        width: calc(100% - 160px);
        height: 100%;
        position: relative;
        .title{
          width: 100%;
          color: rgb(26, 13, 171);
          font-size: 18px;
          margin-top: 20px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          cursor: pointer;
          &:hover{
            text-decoration: underline;
          }
        }
        .content{
          color: #666;
          font-size: 16px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
        .date{
          color: #999;
          font-size: 14px;
          position: absolute;
          left: 0px;
          bottom: 20px;
        }
      }
      .right{
        flex-shrink: 0;
        flex-grow: 0;
        width: 120px;
        height: 120px;
      }
    }
  }
</style>