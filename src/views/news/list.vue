<template>
  <div class="box">
    <notice ref="notice"></notice>
    <div class="search-box">
      <auto-complete :entryList="entryList" @selectedEntryListChange="handleSelectedEntryListChange"></auto-complete>
      <img class="icon-search" src="../../assets/images/icon_search.png" @click="handleSearch" alt="搜索">
    </div>
    <div class="container">
      <div class="news-list">
        <div class="news" v-for="(item) in newsList[page - 1]" :key="item.id" @click="handleNavigate(`/news/detail?id=${item.id}`)">
          <div class="left">
            <div class="title">{{item.title}}</div>
            <div class="content">{{item.description}}</div>
            <div class="date">{{item.date}}</div>
          </div>
          <div class="right">
            <lazy-img :url="item.cover"></lazy-img>
          </div>
        </div>
      </div>
      <div class="topic-list">
        <div class="title">热门</div>
        <div class="topic">假的热门a</div>
        <div class="topic">假的热门b</div>
        <div class="topic">假的热门c</div>
      </div>
    </div>
    <div class="pagination-box">
      <div class="pagination" v-if="newsList.length > 1 && page > 1" @click="handlePrevPage">上一页</div>
      <div class="pagination" v-if="newsList.length > 1 && page < newsList.length" @click="handleNextPage">下一页</div>
    </div>
    <back-top></back-top>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import autoComplete from '../../components/autoComplete.vue'
  import lazyImg from '../../components/lazyImg.vue'
  import notice from '../../components/notice.vue'
  import backTop from '../../components/backTop.vue'
  import { newList as newListOri, entryList } from '../../utils/mockData'
  
  interface News {
    id: number,
    title: string,
    content: string,
    date: string,
    cover: string,
    description: string
  }

  export default Vue.extend({
    components: {
      autoComplete,
      lazyImg,
      notice,
      backTop
    },
    data() {
      return {
        entryList: entryList,
        newsList: [[]] as News[][],
        selectedEntryList: [] as string[],
        page: 1
      }
    },
    methods: {
      handleNavigate(url: string) {
        this.$router.push(url)
      },
      handleSelectedEntryListChange(list: string[]) {
        this.selectedEntryList = list
      },
      handleSearch() {
        if (this.selectedEntryList.length === 0) {
          (this.$refs.notice as any).notify('danger', '您还未选择任何搜索匹配项')
          return
        }
        // 通过文章title筛选
        let result = [] as Array<News>
        newListOri.forEach((item: News) => {
          this.selectedEntryList.forEach((entry: string) => {
            if (item.title.indexOf(entry) >= 0) {
              result.push(item)
            }
          })
        })
        this.page = 1
        this.newsList = this.paginationConvert(result)
      },
      handlePrevPage() {
        if (this.page > 1) {
          this.page--
        }
      },
      handleNextPage() {
        if (this.page < this.newsList.length) {
          this.page++
        }
      },
      paginationConvert(list: any[]) {
        let times = Math.floor(list.length / 10)
        if (times === 0) return [list]
        let _list = []
        for (let i = 0; i <= times; i++) {
          if (i === times) {
            _list.push(list.slice(i * 10, i * 10 + list.length % 10))
          } else {
            _list.push(list.slice(i * 10, i * 10 + 10))
          }
        }
        return _list
      }
    },
    mounted() {
      this.newsList = this.paginationConvert(newListOri)
    }
  })
</script>

<style lang="less" scoped>
  .box{
    width: 100%;
    height: 100vh;
  }
  .search-box{
    width: 80%;
    display: flex;
    margin: 20px auto auto auto;
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

  .container{
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    overflow: hidden;
    .news-list{
      width: 70%;
      .news{
        width: 70%;
        height: 160px;
        padding: 0 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto auto 20px auto;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        cursor: pointer;
        .left{
          width: calc(100% - 160px);
          height: 100%;
          position: relative;
          .title{
            width: 100%;
            color: #493b32;
            font-size: 18px;
            margin-top: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
            &:hover{
              text-decoration: underline;
            }
          }
          .content{
            color: #16bfb7;
            font-weight: 14px;
            font-size: 16px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            line-height: 1.2;
            margin-top: 6px;
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
    .topic-list{
      width: 30%;
      .title{
        color: #f5222d;
        font-size: 20px;
        font-weight: 700;
      }
      .topic{
        width: 60%;
        text-align: center;
        padding: 10px 20px;
        border-radius: 4px;
        background-color: #fddc3e;
        color: #493b32;
        margin-top: 20px;
        box-sizing: border-box;
        font-weight: 700;
        cursor: pointer;
        &:hover{
          color: #fff;
        }
      }
    }
  }
  .pagination-box{
    width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    padding-bottom: 100px;
    .pagination{
      font-size: 18px;
      color: #fff;
      margin: 0 20px;
      cursor: pointer;
      padding: 10px 20px;
      box-sizing: border-box;
      background-color: #16bfb7;
      border-radius: 4px;
    }
  }
  @media screen and (max-width: 1166px){
    .container{
      .news-list{
        width: 100%;
      }
      .topic-list{
        display: none;
      }
    }
    .pagination-box{
      justify-content: center;
    }
  }


</style>