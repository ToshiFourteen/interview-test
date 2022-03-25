<template>
  <header class="header">
    <div class="logo-box">
      <img class="logo" src="../assets/images/logo.png" alt="">
      <div class="description">塾専用コミュニケーション &業務管理システム</div>
    </div>
    <div class="menu-box">
      <!-- menu 0 -->
      <div class="menu-item has-sub" @mouseenter="handleMenuEnter(0)" @mouseleave="handleMenuLeave">
        <div class="menu-name">
          <span class="text">サービス</span>
          <img :class="['icon-arrow', menuActiveIndex === 0 ? 'active' : '']" src="../assets/images/icon_arrow.png" alt="">
        </div>
        <div class="sub-menu-box">
          <div class="sub-menu" v-show="menuActiveIndex === 0">
            <div class="sub-menu-item">
              <div class="sub-menu-name">
                <span class="text">サービス一覧</span>
              </div>
            </div>
            <div class="sub-menu-item">
              <div class="sub-menu-name">
                <span class="text">ComiruBASIC</span>
              </div>
            </div>
            <div class="sub-menu-item">
              <div class="sub-menu-name">
                <span class="text">ComiruFREE</span>
              </div>
            </div>
            <div class="sub-menu-item">
              <div class="sub-menu-name">
                <span class="text">ComiruAir</span>
              </div>
            </div>
            <div class="sub-menu-item">
              <div class="sub-menu-name">
                <span class="text">ComiruHR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- menu 1 -->
      <div class="menu-item no-sub">
        <div class="menu-name">
          <span class="text">プラン一覧</span>
        </div>
      </div>
      <!-- menu 2 -->
      <div class="menu-item has-sub" @mouseenter="handleMenuEnter(2)" @mouseleave="handleMenuLeave">
        <div class="menu-name">
          <span class="text">基本機能</span>
          <img :class="['icon-arrow', menuActiveIndex === 2 ? 'active' : '']" src="../assets/images/icon_arrow.png" alt="">
        </div>
        <div class="sub-menu-box" v-show="menuActiveIndex === 2">
          <div class="sub-menu">
            <div class="sub-menu-item" @mouseenter="handleSubEnter(0)" @mouseleave="handleSubLeave">
              <div class="sub-menu-name">
                <span class="text">Comiru</span>
                <div class="icon-triangle"></div>
              </div>
              <div class="tri-menu-box" v-show="menuActiveIndex === 2 && subActiveIndex === 0">
                <div class="tri-menu">
                  <div class="tri-menu-item">専用アプリ＆LINE連携</div>
                  <div class="tri-menu-item">指導報告書</div>
                  <div class="tri-menu-item">お知らせ</div>
                  <div class="tri-menu-item">入退室管理</div>
                  <div class="tri-menu-item">請求書</div>
                  <div class="tri-menu-item">口座振替</div>
                  <div class="tri-menu-item">カード決済</div>
                  <div class="tri-menu-item">成績管理</div>
                  <div class="tri-menu-item">座席管理</div>
                  <div class="tri-menu-item">見込顧客獲得</div>
                  <div class="tri-menu-item">Web申込み</div>
                  <div class="tri-menu-item">口コミ収集＆掲載</div>
                </div>
              </div>
            </div>
            <div class="sub-menu-item" @mouseenter="handleSubEnter(1)" @mouseleave="handleSubLeave">
              <div class="sub-menu-name">
                <span class="text">ComiruAir</span>
                <div class="icon-triangle"></div>
              </div>
              <div class="tri-menu-box" v-show="menuActiveIndex === 2 && subActiveIndex === 1">
                <div class="tri-menu">
                  <div class="tri-menu-item">オンライン授業支援</div>
                </div>
              </div>
            </div>
            <div class="sub-menu-item" @mouseenter="handleSubEnter(2)" @mouseleave="handleSubLeave">
              <div class="sub-menu-name">
                <span class="text">ComiruHR</span>
                <div class="icon-triangle"></div>
              </div>
              <div class="tri-menu-box" v-show="menuActiveIndex === 2 && subActiveIndex === 2">
                <div class="tri-menu">
                  <div class="tri-menu-item">講師人事労務管理</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- menu 3 -->
      <div class="menu-item no-sub">
        <div class="menu-name">
          <span class="text">導入事例</span>
        </div>
      </div>
      <!-- menu 4 -->
      <div class="menu-item no-sub">
        <div class="menu-name">
          <span class="text">お役立ち資料</span>
        </div>
      </div>
      <!-- menu 5 -->
      <div class="menu-item no-sub">
        <div class="menu-name">
          <span class="text">セミナー一覧</span>
        </div>
      </div>
      <!-- menu 6 -->
      <div class="menu-item has-sub" @mouseenter="handleMenuEnter(6)" @mouseleave="handleMenuLeave">
        <div class="menu-name">
          <span class="text">ヘルプ</span>
          <img :class="['icon-arrow', menuActiveIndex === 6 ? 'active' : '']" src="../assets/images/icon_arrow.png" alt="">
        </div>
        <div :class="['sub-menu-box', needFix ? 'sub-menu-box-fix' : '']" v-show="menuActiveIndex === 6">
          <div class="sub-menu">
            <div class="sub-menu-item" @mouseenter="handleSubEnter(0, true)" @mouseleave="handleSubLeave">
              <div class="sub-menu-name">
                <span class="text">Comiru</span>
                <div class="icon-triangle"></div>
              </div>
              <div class="tri-menu-box" v-show="menuActiveIndex === 6 && subActiveIndex === 0">
                <div class="tri-menu">
                  <div class="tri-menu-item">導入までの流れ</div>
                  <div class="tri-menu-item">よくある質問</div>
                </div>
              </div>
            </div>
            <div class="sub-menu-item" @mouseenter="handleSubEnter(1, true)" @mouseleave="handleSubLeave">
              <div class="sub-menu-name">
                <span class="text">ComiruAir</span>
                <div class="icon-triangle"></div>
              </div>
              <div class="tri-menu-box" v-show="menuActiveIndex === 6 && subActiveIndex === 1">
                <div class="tri-menu">
                  <div class="tri-menu-item">よくある質問</div>
                </div>
              </div>
            </div>
            <div class="sub-menu-item">
              <div class="sub-menu-name">
                <span class="text">お問い合わせ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="teachers-login">塾講師ログイン</div>
    </div>
  </header>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    data() {
      return {
        menuActiveIndex: -1,
        subActiveIndex: -1,
        needFix: false
      }
    },
    methods: {
      handleMenuEnter(index: number) {
        this.menuActiveIndex = index
      },
      handleMenuLeave() {
        this.menuActiveIndex = -1
        this.needFix = false
      },
      handleSubEnter(index: number, needFix: boolean = false) {
        this.subActiveIndex = index
        this.needFix = needFix
      },
      handleSubLeave() {
        this.subActiveIndex = -1
      }
    }
  })
</script>

<style lang="less" >
  .header{
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 1px 2px rgb(0 0 0 / 20%);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    padding: 0 40px;
    box-sizing: border-box;
    .logo-box{
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-shrink: 0;
      flex-grow: 0;
      .logo{
        width: 172px;
        height: 40px;
      }
      .description{
        width: 170px;
        display: inline-block;
        font-weight: 700;
        margin-left: 16px;
        color: #493b32;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
  .menu-box{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .menu-item{
      position: relative;
      cursor: pointer;
      .menu-name{
        margin-right: 24px;
        cursor: pointer;
        padding: 5px 8px;
        border-radius: 4px;
        &:hover{
          background-color: #eee;
        }
        .text{
          color: #493b32;
          font-weight: 700;
        }
        .icon-arrow{
          transform: rotate(180deg);
          transition: .3s transform ease-in-out;
        }
        .active{
          transform: rotate(0deg);
        }
      }
      .sub-menu-box{
        position: absolute;
        left: 0;
        top: 0px;
        transition: 0.3s all;
      }
      .sub-menu-box-fix{
        left: -140px;
      }
      .sub-menu{
        margin-top: 40px;
        background-color: #fff;
        padding: 2px 0;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        z-index: 100;
        .sub-menu-item{
          width: 160px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          color: #493b32;
          &:hover{
            background-color: #16bfb7;
            color: #fff;
            .icon-triangle{
              border-color:transparent transparent transparent #ffffff;
            }
          }
          .icon-triangle{
            display: inline-block;
            width: 0;
            height: 0;
            border-style: solid;
            border-top-width: 5px;
            border-right-width: 6px;
            border-bottom-width: 5px;
            border-left-width: 6px;
            border-color:transparent transparent transparent #493b32;
            vertical-align: middle;
            margin-top: -2px;
            margin-left: 2px;
          }
        }
      }
      .tri-menu-box{
        position: absolute;
        left: 160px;
        top: 40px;
      }
      .tri-menu{
        margin-left: 4px;
        background-color: #fff;
        padding: 2px 0;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        z-index: 100;
        .tri-menu-item{
          width: 220px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          color: #493b32;
          &:hover{
            background-color: #16bfb7;
            color: #fff;
          }
        }
      }
    }
    .teachers-login{
      height: 32px;
      padding: 0 10px;
      border-radius: 16px;
      background-color: #fddc3e;
      text-align: center;
      line-height: 32px;
      font-weight: 700;
      color: #493b32;
    }
  }

  @media screen and (max-width: 1425px) and (min-width: 1312px) {
    .menu-box{
      .menu-item{
        .menu-name{
          margin-right: 8px;
        }
      }
    }
  }

  @media screen and (max-width: 1312px) and (min-width: 800px) {
    .no-sub{
      display: none;
    }  
  }
</style>