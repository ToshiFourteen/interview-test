<template>
  <div class="auto-complete">
    <!-- 匹配的条目 -->
    <div class="entries">
      <div class="entry" v-for="(item, index) in selectedEntryList" :key="index">
        <span class="value">{{item}}</span>
        <img src="../assets/images/icon_close.png" @click="removeEntry(index)" alt="点击删除"/>
      </div>
    </div>
    <!-- 输入框 -->
    <div class="input-box">
      <input class="input" v-model="inputValue" @input="checkEntries" type="text"/>
      <div class="suggestion-box" v-show="suggestionList.length > 0">
        <div 
          class="suggestion" 
          v-for="(item, index) in suggestionList" 
          :key="index"
          @click="selectSuggestion(item)"
        >{{item}}</div>
      </div>
    </div>
    <button @click="handleSearch">搜索</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
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
        type: Array
      }
    },
    methods: {
      // 校验匹配词条 生成建议词条
      checkEntries() {
        if (this.inputValue === '') {
          this.suggestionList = []
        } else {
          this.suggestionList = this.entryList.filter((item: any) => {
            return item.indexOf(this.inputValue) >= 0
          }) as string[]
        }
      },
      // 选择建议词条
      selectSuggestion(suggestion: string) {
        this.selectedEntryList.push(suggestion)
        this.inputValue = ''
      },
      // 移除已选择词条
      removeEntry(index: number) {
        this.selectedEntryList.splice(index, 1)
      },
      handleSearch() {
        if (this.selectedEntryList.length === 0) return
        this.$emit('search', this.selectedEntryList)
      }
    },
    mounted() {
    }
  })
</script>

<style lang="less">
  .suggestion{
    &:hover{
      background-color: #eaeaea;
    }
  }
</style>