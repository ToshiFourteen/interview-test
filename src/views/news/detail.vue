<template>
  <div class="box">
    <nav-bar></nav-bar>
    <div class="container">
      <div class="main-news">
        <div class="news">
          <h1 class="title">这是一个非常好的新闻</h1>
          <div class="sub-info">
            <div class="author">作者: 哈哈哈哈</div>
            <div class="date">发布时间: 2022.3.28 10:21:10</div>
          </div>
          <div class="main">
            <p>3月25日，美团发布了2021年第四季度和全年财报。由此，泛电商领域，头部玩家们的成绩拼图补上了最后一块，这也给外界看电商的总体面貌提供了更全的视野。</p>
            <p>其中，电商的利润浮在表面，但水下诸多变化正在发生：长期投入、助力实体经济、激发产业活力甚至带动共同富裕，行业的内涵之丰富，显示着这个行业的底层逻辑，发生了一些深层次的变化</p>
            <img class="img" src="https://img0.baidu.com/it/u=2064213898,2801034448&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" />
            <h2>电商集体换打法</h2>
            <p>从最基础的总成绩出发，由于平台GMV和营收口径的不一致，我们从赚钱能力，也就是利润这一项出发，可以去看头部电商平台的底色。</p>
            <p>截至目前，根据阿里、京东、拼多多、美团各自最近一季度的财报披露，它们的净利润分别为446.24亿元、36亿元、66.2亿元、-39.4亿元。数据背后的经营利润率上，阿里为3%、京东为1.4%、拼多多为25%，美团则处于亏损状态。总体来看，阿里依旧是整体最赚钱的电商——为什么美团的营收规模看起来如此之大，却仍然不赚钱？因为它和拼多多一样，是当前电商集体换打法，从营销转向长期投入的一个样本。</p>
            <p><strong>翻开电商玩家的账本，这种用现在投资未来的战略已经成为常态。</strong>拼多多CEO陈磊在财报中直言公司进行了更多的长期投资，拼多多对农业的热衷，一度让投资者戏称其信息披露成为“农业大讲堂”。</p>
          </div>
        </div>
      </div>
      <div class="other-news">
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
    <back-top></back-top>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import navBar from '../../components/navBar.vue'
  import lazyImg from '../../components/lazyImg.vue'
  import backTop from '../../components/backTop.vue'
  export default Vue.extend({
    components: {
      navBar,
      lazyImg,
      backTop
    },
    data() {
      return {
        newsList: [
          {id: 6, title: '嗨6', content: '内容xxx1313', date: '三天前', cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-08-20%2F5f3e45af82a4d.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650388589&t=bfe3da0325b07f909c04de18a2c7c8f0'},
          {id: 7, title: '嗨7', content: '内容xxx1313', date: '三天前', cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F911%2F050916125K7%2F160509125K7-11.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650388589&t=417c6a4518ad619c6594d8b12a947c00'},
          {id: 8, title: '嗨8', content: '内容xxx1313', date: '三天前', cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2010-3-12%2Fenterdesk.com-36242C8529388B803FF0349DEEB18C9D.JPG&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650388589&t=8b2c1b40c0ca147bf3a929bad30bcc84'},
          {id: 9, title: '嗨9', content: '内容xx13131x', date: '三天前', cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2008-6-13%2F200806131108306030.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650388589&t=7bf1e7afa8d621308e303dacfc45140d'},
          {id: 10, title: '嗨10', content: '内容xx1313131x', date: '三天前', cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F911%2F0QQ6113951%2F160QQ13951-1.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650388589&t=f61fde59f6713cf350280503c61553d1'},
        ],
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
        border-radius: 4px;
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
        border-radius: 4px;
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
</style>