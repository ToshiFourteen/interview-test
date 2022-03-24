<template>
  <div class="box">
    <header class="header">
      <div class="logo-box">
        <img class="logo" src="../../assets/images/logo.png" alt="">
        <div class="description">塾専用コミュニケーション &業務管理システム</div>
      </div>
      <div class="menu-box">
        <!-- menu 0 -->
        <div class="menu-item has-sub" @mouseover="handleMenuOver(0)" @mouseleave="handleMenuLeave">
          <div class="menu-name">
            <span class="text">サービス</span>
            <img :class="['icon-arrow', menuActiveIndex === 0 ? 'active' : '']" src="../../assets/images/icon_arrow.png" alt="">
          </div>
          <div class="sub-menu">
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
        <!-- menu 1 -->
        <div class="menu-item no-sub">
          <div class="menu-name">
            <span class="text">プラン一覧</span>
          </div>
        </div>
        <!-- menu 2 -->
        <div class="menu-item has-sub" @mouseover="handleMenuOver(2)" @mouseleave="handleMenuLeave">
          <div class="menu-name">
            <span class="text">基本機能</span>
            <img :class="['icon-arrow', menuActiveIndex === 2 ? 'active' : '']" src="../../assets/images/icon_arrow.png" alt="">
          </div>
          <div class="sub-menu">
            <div class="sub-menu-item">
              <div class="sub-menu-name">
                <span class="text">Comiru</span>
                <img class="icon-triangle" src="../../assets/images/icon_triangle.png" alt="">
              </div>
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
            <div class="sub-menu-item">
              <div class="sub-menu-name">
                <span class="text">ComiruAir</span>
                <img class="icon-triangle" src="../../assets/images/icon_triangle.png" alt="">
              </div>
              <div class="tri-menu">
                <div class="tri-menu-item">オンライン授業支援</div>
              </div>
            </div>
            <div class="sub-menu-item">
              <div class="sub-menu-name">
                <span class="text">ComiruHR</span>
                <img class="icon-triangle" src="../../assets/images/icon_triangle.png" alt="">
              </div>
              <div class="tri-menu">
                <div class="tri-menu-item">講師人事労務管理</div>
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
        <div class="menu-item has-sub" @mouseover="handleMenuOver(6)" @mouseleave="handleMenuLeave">
          <div class="menu-name">
            <span class="text">ヘルプ</span>
            <img :class="['icon-arrow', menuActiveIndex === 6 ? 'active' : '']" src="../../assets/images/icon_arrow.png" alt="">
          </div>
          <div class="sub-menu">
            <div class="sub-menu-item">
              <div class="sub-menu-name">
                <span class="text">Comiru</span>
                <img class="icon-triangle" src="../../assets/images/icon_triangle.png" alt="">
              </div>
              <div class="tri-menu">
                <div class="tri-menu-item">導入までの流れ</div>
                <div class="tri-menu-item">よくある質問</div>
              </div>
            </div>
            <div class="sub-menu-item">
              <div class="sub-menu-name">
                <span class="text">ComiruAir</span>
                <img class="icon-triangle" src="../../assets/images/icon_triangle.png" alt="">
              </div>
              <div class="tri-menu">
                <div class="tri-menu-item">よくある質問</div>
              </div>
            </div>
            <div class="sub-menu-item">
              <div class="sub-menu-name">
                <span class="text">お問い合わせ</span>
              </div>
            </div>
          </div>
        </div>
        <div class="teachers-login">塾講師ログイン</div>
      </div>
    </header>
    <div class="container">
      <div class="line-box">
        <h1 class="line-title">LINEでログイン</h1>
        <div class="line-ways">
          <div class="line-item">
            <div class="intro">Comiruをすでに友達に追加済みの方<br/>以下のアイコンをクリックしてログイン</div>
            <img class="btn-line-1" src="../../assets/images/btn_line_1.png" alt="">
          </div>
          <div class="line-line"></div>
          <div class="line-item">
            <div class="intro">ComiruをLINEではじめてお使いの方<br/>以下のアイコンをクリックして友だち追加</div>
            <img class="btn-line-2" src="../../assets/images/btn_line_2.png" alt="">
          </div>
        </div>
      </div>
      <div class="login-box">
        <h1 class="login-title">生徒・保護者ログイン<span class="sub">（スクールポパー）</span></h1>
        <div class="tips">生徒番号とパスワードを入力してログインしてください。<strong>生徒番号</strong>や<strong>パスワード</strong>がわからない場合は、教室にお問い合わせください。</div>
        <div class="radio-box">
          <input type="radio" id="1" v-model="role" :value="1">
          <label for="1">保護者</label>
          <input type="radio" id="2" v-model="role" :value="2">
          <label for="2">生徒</label>
        </div>
        <div class="input-box">
          <label for="studentNumber">生徒番号</label>
          <input type="text" id="studentNumber" v-model="studentNumber">
        </div>
        <div class="input-box">
          <label for="password">パスワード</label>
          <input type="text" id="password" v-model="password" >
        </div>
        <div class="show-password">
          <input type="checkbox" v-model="showPassword" id="showPassword">
          <label for="showPassword">パスワードを表示</label>
        </div>
        <button class="btn-submit">ログインする</button>
        <div class="forget-password">
          <div class="point"></div>
          <a href="">パスワードを忘れた方はこちら</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    data() {
      return {
        role: 1,
        studentNumber: '',
        password: '',
        showPassword: false,
        menuActiveIndex: -1
      }
    },
    methods: {
      handleMenuOver(index: number) {
        this.menuActiveIndex = index
      },
      handleMenuLeave() {
        console.log('xxx')
        this.menuActiveIndex = -1
      }
    },
    mounted() {
    }
  })
</script>

<style lang="less" >
  .box{
    padding-bottom: 100px;
  }
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
      .menu-name{
        margin-right: 24px;
        cursor: pointer;
        padding: 5px 8px;
        border-radius: 4px;
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

  .sub-menu{
    display: none;
  }

  .container{
    max-width: 1100px;
    width: 90%;
    margin: 90px auto 0 auto;
    .line-box{
      .line-title{
        font-size: 25px;
        border-bottom: 1px solid #eee;
        font-weight: 700;
        color: #493b32;
        padding-bottom: 10px;
      }
      .line-ways{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .line-line{
          width: 2px;
          height: 100px;
          background-color: #b4a094;
          flex-shrink: 0;
          flex-grow: 0;
          margin-top: 20px;
        }
        .line-item{
          width: 50%;
          text-align: center;
          .intro{
            color: #8a8a8f;
            margin-top: 20px;
            margin-bottom: 10px;
          }
          .btn-line-1{
            width: 36px;
            height: 36px;
          }
          .btn-line-2{
            width: 116px;
            height: 36px;
          }
        }
      }
    }
    .login-box{
      margin-top: 40px;
      .login-title{
        font-size: 25px;
        border-bottom: 1px solid #eee;
        font-weight: 700;
        color: #493b32;
        padding-bottom: 10px;
        .sub{
          font-size: 80%;
        }
      }
      .tips{
        color: #493b32;
        margin-top: 10px;
      }
      .radio-box{
        margin-top: 20px;
        input{
          color: #a9a9a9;
        }
      }
      .input-box{
        margin-top: 10px;
        label{
          color: #493b32;
          font-weight: 700;
          display: block;
        }
        input{
          width: 100%;
          max-width: 540px;
          font-size: 16px;
          border: 1px solid #d0d0d5;
          border-radius: 4px;
          background-color: #fff;
          padding: 10px 8px;
          margin-top: 4px;
          box-sizing: border-box;
          &:focus{
            border: #16bfb7 solid 1px;
            outline: none;
          }
        }
      }
      .show-password{
        margin-top: 10px;
        label{
          margin-left: 10px;
          color: #493b32;
          font-weight: 700;
        }
      }
      .btn-submit{
        height: 36px;
        box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
        padding: 0 28px;
        border: 1px solid transparent;
        border-radius: 16px;
        color: rgba(255, 255, 255, 0.9);
        font-size: 14px;
        background: #16bfb7;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 14px;
      }
      .forget-password{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 20px;
        .point{
          background-color: #000000;
          width: 4px;
          height: 4px;
          border-radius: 2px;
        }
        a{
          color: #16bfb7;
          margin-left: 16px;
        }
      }
    }
  }
</style>