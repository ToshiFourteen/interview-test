<template>
  <div class="box">
    <nav-bar></nav-bar>
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
          <input type="password" id="password" v-model="password" >
        </div>
        <div class="show-password">
          <input type="checkbox" v-model="showPassword" id="showPassword">
          <label for="showPassword">パスワードを表示</label>
        </div>
        <button class="btn-submit" @click="login">ログインする</button>
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
  import navBar from '../../components/navBar.vue'
  export default Vue.extend({
    components: {
      navBar
    },
    data() {
      return {
        role: 1,
        studentNumber: '',
        password: '',
        showPassword: false
      }
    },
    watch: {
      showPassword(val: boolean) {
        if (val) {
          (this.$refs.password as any).type = 'text'
        } else {
          (this.$refs.password as any).type = 'password'
        }
      }
    },
    methods: {
      login() {
        window.localStorage.setItem('token', 'mock')
        this.$router.back()
      }
    }
  })
</script>

<style lang="less" >
  .box{
    padding-bottom: 100px;
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