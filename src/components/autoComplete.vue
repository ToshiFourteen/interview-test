<template>
  <div class="auto-complete" @click="handleInputFocus">
    <!-- 匹配的条目 -->
    <div class="entries">
      <div class="entry" v-for="(item, index) in selectedEntryList" :key="index">
        <span class="value">{{item}}</span>
        <div class="icon-close-box" @click.stop="handleRemoveEntry(index)">
          <img class="icon-close" src="../assets/images/icon_close.png"  alt="点击删除"/>
        </div>
      </div>
    </div>
    <!-- 输入框 -->
    <div class="input-box">
      <input class="input" v-model="inputValue" ref="input" @input="checkEntries" type="text" placeholder="请输入搜索项"/>
      <div class="suggestion-box" v-show="suggestionList.length > 0">
        <div 
          class="suggestion" 
          v-for="(item, index) in suggestionList" 
          :key="index"
          @click="handleSelectSuggestion(item)"
        >{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { PropType } from "vue"
  let timer: ReturnType<typeof setTimeout>

  export default Vue.extend({
    // 类型推断已启用
    data() {
      return {
        inputValue: '',
        selectedEntryList: [] as string[],
        suggestionList: [] as string[]
      }
    },
    props: {
      entryList: {
        default: () => [],
        type: Array as PropType<string[]>
      }
    },
    methods: {
      // 校验匹配词条 生成建议词条
      checkEntries() {
        clearTimeout(timer)
        timer = setTimeout(() => {
          if (this.inputValue === '') {
            this.suggestionList = []
          } else {
            let length = 0
            let suggestionList = []
            // 只筛选最近的5个
            for (let item of this.entryList) {
              if (item.indexOf(this.inputValue) >= 0) {
                suggestionList.push(item)
                length++
                if (length === 5) break
              }
            }
            // let suggestionList = this.entryList.filter((item: string) => {
            //   return item.indexOf(this.inputValue) >= 0
            // }) as string[]
            // if (suggestionList.length > 5) suggestionList.length = 5
            this.suggestionList = suggestionList
          }
        }, 100)
      },
      // 选择建议词条
      handleSelectSuggestion(suggestion: string) {
        this.selectedEntryList.push(suggestion)
        this.inputValue = ''
        this.suggestionList = []
        this.$emit('selectedEntryListChange', this.selectedEntryList)
      },
      // 移除已选择词条
      handleRemoveEntry(index: number) {
        this.selectedEntryList.splice(index, 1)
        this.$emit('selectedEntryListChange', this.selectedEntryList)
        this.handleInputFocus()
      },
      // 点击组件自动聚焦
      handleInputFocus() {
        (this.$refs.input as HTMLElement).focus()
      }
    },
    mounted() {
    }
  })
</script>

<style lang="less" scoped>
  .auto-complete{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &::-webkit-scrollbar{
      display: none;
    }
    .entries{
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      .entry{
        height: 28px;
        padding-left: 10px;
        border-radius: 2px;
        color: #666;
        font-size: 14px;
        background-color: #eee;
        flex-grow: 0;
        flex-shrink: 0;
        margin-right: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .icon-close-box{
          width: 32px;
          height: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          .icon-close{
            width: 10px;
            height: 10px;
          }
        }
      }
    }
    .input-box{
      height: 100%;
      position: relative;
      .input{
        height: 100%;
        border: none;
        outline: none;
      }
      .suggestion-box{
        width: 200px;
        position: absolute;
        left: 0;
        top: 40px;
        background-color: #fff;
        z-index: 1000;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        .suggestion{
          padding: 10px 20px;
          cursor: pointer;
          &:hover{
            background-color: #eaeaea;
          }
        }
      }
    }
  }
</style>