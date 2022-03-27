<template>
  <div class="box news-detail-page">
    <nav-bar></nav-bar>
    <div class="container">
      <div class="main-news">
        <div class="news">
          <h1 class="title">{{news.title}}</h1>
          <div class="sub-info">
            <div class="date">发布时间: {{news.date}}</div>
          </div>
          <!-- <div > -->
            <div class="main" v-html="news.content"></div>
          <!-- </div> -->
        </div>
      </div>
      <div class="other-news">
        <div class="news" v-for="(item) in newsList" :key="item.id" @click="handleNavigate(`/news/detail?id=${item.id}`)">
          <div class="left">
            <div class="title">{{item.title}}</div>
            <div class="content">{{item.description}}</div>
            <div class="date">{{item.date}}</div>
          </div>
          <div class="right">
            <div class="img" :style="`background-image: url(${item.cover})`"></div>
          </div>
        </div>
      </div>
    </div>
    <back-top></back-top>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import navBar from '../../components/navBar.vue'
  import lazyImg from '../../components/lazyImg.vue'
  import backTop from '../../components/backTop.vue'
  import { getNewsDetail } from '../../utils/mockData'

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
      navBar,
      lazyImg,
      backTop
    },
    data() {
      return {
        news: {} as News,
        newsList: [
          {id: 1, title: '文章a', date: '2022/02/02 12:12:12', cover: 'https://img0.baidu.com/it/u=2064213898,2801034448&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500', description: '描述文字模拟', content: '<p>3月25日，美团发布了2021年第四季度和全年财报。由此，泛电商领域，头部玩家们的成绩拼图补上了最后一块，这也给外界看电商的总体面貌提供了更全的视野。</p><p>其中，电商的利润浮在表面，但水下诸多变化正在发生：长期投入、助力实体经济、激发产业活力甚至带动共同富裕，行业的内涵之丰富，显示着这个行业的底层逻辑，发生了一些深层次的变化</p><img class="img" src="https://img0.baidu.com/it/u=2064213898,2801034448&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" /><h2>电商集体换打法</h2><p>从最基础的总成绩出发，由于平台GMV和营收口径的不一致，我们从赚钱能力，也就是利润这一项出发，可以去看头部电商平台的底色。</p><p>截至目前，根据阿里、京东、拼多多、美团各自最近一季度的财报披露，它们的净利润分别为446.24亿元、36亿元、66.2亿元、-39.4亿元。数据背后的经营利润率上，阿里为3%、京东为1.4%、拼多多为25%，美团则处于亏损状态。总体来看，阿里依旧是整体最赚钱的电商——为什么美团的营收规模看起来如此之大，却仍然不赚钱？因为它和拼多多一样，是当前电商集体换打法，从营销转向长期投入的一个样本。</p><p><strong>翻开电商玩家的账本，这种用现在投资未来的战略已经成为常态。</strong>拼多多CEO陈磊在财报中直言公司进行了更多的长期投资，拼多多对农业的热衷，一度让投资者戏称其信息披露成为“农业大讲堂”。</p>'},
          {id: 2, title: '文章aa', date: '2022/02/02 12:12:12', cover: 'https://img0.baidu.com/it/u=2064213898,2801034448&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500', description: '描述文字模拟', content: '<p>3月25日，美团发布了2021年第四季度和全年财报。由此，泛电商领域，头部玩家们的成绩拼图补上了最后一块，这也给外界看电商的总体面貌提供了更全的视野。</p><p>其中，电商的利润浮在表面，但水下诸多变化正在发生：长期投入、助力实体经济、激发产业活力甚至带动共同富裕，行业的内涵之丰富，显示着这个行业的底层逻辑，发生了一些深层次的变化</p><img class="img" src="https://img0.baidu.com/it/u=2064213898,2801034448&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" /><h2>电商集体换打法</h2><p>从最基础的总成绩出发，由于平台GMV和营收口径的不一致，我们从赚钱能力，也就是利润这一项出发，可以去看头部电商平台的底色。</p><p>截至目前，根据阿里、京东、拼多多、美团各自最近一季度的财报披露，它们的净利润分别为446.24亿元、36亿元、66.2亿元、-39.4亿元。数据背后的经营利润率上，阿里为3%、京东为1.4%、拼多多为25%，美团则处于亏损状态。总体来看，阿里依旧是整体最赚钱的电商——为什么美团的营收规模看起来如此之大，却仍然不赚钱？因为它和拼多多一样，是当前电商集体换打法，从营销转向长期投入的一个样本。</p><p><strong>翻开电商玩家的账本，这种用现在投资未来的战略已经成为常态。</strong>拼多多CEO陈磊在财报中直言公司进行了更多的长期投资，拼多多对农业的热衷，一度让投资者戏称其信息披露成为“农业大讲堂”。</p>'},
          {id: 3, title: '文章aaa', date: '2022/02/02 12:12:12', cover: 'https://img0.baidu.com/it/u=2064213898,2801034448&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500', description: '描述文字模拟', content: '<p>3月25日，美团发布了2021年第四季度和全年财报。由此，泛电商领域，头部玩家们的成绩拼图补上了最后一块，这也给外界看电商的总体面貌提供了更全的视野。</p><p>其中，电商的利润浮在表面，但水下诸多变化正在发生：长期投入、助力实体经济、激发产业活力甚至带动共同富裕，行业的内涵之丰富，显示着这个行业的底层逻辑，发生了一些深层次的变化</p><img class="img" src="https://img0.baidu.com/it/u=2064213898,2801034448&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" /><h2>电商集体换打法</h2><p>从最基础的总成绩出发，由于平台GMV和营收口径的不一致，我们从赚钱能力，也就是利润这一项出发，可以去看头部电商平台的底色。</p><p>截至目前，根据阿里、京东、拼多多、美团各自最近一季度的财报披露，它们的净利润分别为446.24亿元、36亿元、66.2亿元、-39.4亿元。数据背后的经营利润率上，阿里为3%、京东为1.4%、拼多多为25%，美团则处于亏损状态。总体来看，阿里依旧是整体最赚钱的电商——为什么美团的营收规模看起来如此之大，却仍然不赚钱？因为它和拼多多一样，是当前电商集体换打法，从营销转向长期投入的一个样本。</p><p><strong>翻开电商玩家的账本，这种用现在投资未来的战略已经成为常态。</strong>拼多多CEO陈磊在财报中直言公司进行了更多的长期投资，拼多多对农业的热衷，一度让投资者戏称其信息披露成为“农业大讲堂”。</p>'},
          {id: 4, title: '文章aaaa', date: '2022/02/02 12:12:12', cover: 'https://img0.baidu.com/it/u=2064213898,2801034448&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500', description: '描述文字模拟', content: '<p>3月25日，美团发布了2021年第四季度和全年财报。由此，泛电商领域，头部玩家们的成绩拼图补上了最后一块，这也给外界看电商的总体面貌提供了更全的视野。</p><p>其中，电商的利润浮在表面，但水下诸多变化正在发生：长期投入、助力实体经济、激发产业活力甚至带动共同富裕，行业的内涵之丰富，显示着这个行业的底层逻辑，发生了一些深层次的变化</p><img class="img" src="https://img0.baidu.com/it/u=2064213898,2801034448&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" /><h2>电商集体换打法</h2><p>从最基础的总成绩出发，由于平台GMV和营收口径的不一致，我们从赚钱能力，也就是利润这一项出发，可以去看头部电商平台的底色。</p><p>截至目前，根据阿里、京东、拼多多、美团各自最近一季度的财报披露，它们的净利润分别为446.24亿元、36亿元、66.2亿元、-39.4亿元。数据背后的经营利润率上，阿里为3%、京东为1.4%、拼多多为25%，美团则处于亏损状态。总体来看，阿里依旧是整体最赚钱的电商——为什么美团的营收规模看起来如此之大，却仍然不赚钱？因为它和拼多多一样，是当前电商集体换打法，从营销转向长期投入的一个样本。</p><p><strong>翻开电商玩家的账本，这种用现在投资未来的战略已经成为常态。</strong>拼多多CEO陈磊在财报中直言公司进行了更多的长期投资，拼多多对农业的热衷，一度让投资者戏称其信息披露成为“农业大讲堂”。</p>'},
          {id: 5, title: '文章ab', date: '2022/02/02 12:12:12', cover: 'https://img0.baidu.com/it/u=2064213898,2801034448&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500', description: '描述文字模拟', content: '<p>3月25日，美团发布了2021年第四季度和全年财报。由此，泛电商领域，头部玩家们的成绩拼图补上了最后一块，这也给外界看电商的总体面貌提供了更全的视野。</p><p>其中，电商的利润浮在表面，但水下诸多变化正在发生：长期投入、助力实体经济、激发产业活力甚至带动共同富裕，行业的内涵之丰富，显示着这个行业的底层逻辑，发生了一些深层次的变化</p><img class="img" src="https://img0.baidu.com/it/u=2064213898,2801034448&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" /><h2>电商集体换打法</h2><p>从最基础的总成绩出发，由于平台GMV和营收口径的不一致，我们从赚钱能力，也就是利润这一项出发，可以去看头部电商平台的底色。</p><p>截至目前，根据阿里、京东、拼多多、美团各自最近一季度的财报披露，它们的净利润分别为446.24亿元、36亿元、66.2亿元、-39.4亿元。数据背后的经营利润率上，阿里为3%、京东为1.4%、拼多多为25%，美团则处于亏损状态。总体来看，阿里依旧是整体最赚钱的电商——为什么美团的营收规模看起来如此之大，却仍然不赚钱？因为它和拼多多一样，是当前电商集体换打法，从营销转向长期投入的一个样本。</p><p><strong>翻开电商玩家的账本，这种用现在投资未来的战略已经成为常态。</strong>拼多多CEO陈磊在财报中直言公司进行了更多的长期投资，拼多多对农业的热衷，一度让投资者戏称其信息披露成为“农业大讲堂”。</p>'},
        ]
      }
    },
    watch: {
      '$route': {
        immediate: true,
        handler: function(to, from) {
          this.getNews(to.query.id)
        }
      }
    },
    methods: {
      handleNavigate(url: string) {
        this.$router.push(url)
      },
      getNews(id: string | (string | null)[]) {
        let news = getNewsDetail(Number(id))
        if (news) {
          this.news = news
        }
      }
    },
    mounted() {
      if (!window.localStorage.getItem('token')) {
        this.$router.push('/login')
      } else if (this.$route.query.id) {
        this.getNews(this.$route.query.id)
      }
    }
  })
</script>

<style lang="less">
  .news-detail-page{
    .container{
      width: 100%;
      margin-top: 80px;
      padding-top: 40px;
      padding-bottom: 100px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      overflow: hidden;
      .main-news{
        width: 70%;
        color: #493b32;
        .news{
          width: 80%;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
          margin: 0 auto;
          padding: 40px 40px;
          box-sizing: border-box;
          border-radius: 6px;
          .title{
            font-size: 34px;
            font-weight: 700;
          }
          .sub-info{
            font-size: 14px;
            color: #999;
            display: flex;
            justify-self: flex-start;
            align-items: center;
            margin-top: 10px;
            font-weight: 100;
            .date{
              margin-left: 20px;
            }
          }
          .main{
            padding-top: 20px;
            h2{
              font-size: 16px;
              margin-top: 20px;
              font-weight: 700;
            }
            p{
              font-size: 16px;
              margin-top: 20px;
            }
            .img{
              width: 100%;
              // height: 500px;
              margin-top: 20px;
            }
          }
        }
      }
      .other-news{
        width: 30%;
        .news{
          width: 300px;
          height: 160px;
          padding: 0 20px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          box-shadow: 0px 0px 10px 0 rgba(0,0,0,0.1);
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
            .img{
              width: 100%;
              height: 100%;
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center center;
            }
          }
        }
      }
    }
  
    @media screen and (max-width: 1166px){
      .container{
        .main-news{
          width: 100%;
        }
        .other-news{
          display: none;
        }
      }
    }
  }
</style>