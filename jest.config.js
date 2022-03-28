module.exports = {
  moduleFileExtensions: [
      'js',
      'ts',
      'json',
      'vue'
  ],
  // 你的測試檔案路徑，用 regex 來統一抓取
  testRegex: [
      '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
      '/src/*/*.spec.(ts|js)$/'
  ],
  testURL: 'http://localhost/',
  // 給檔案配置適當的編譯器
  transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      '.*\\.(vue)$': 'vue-jest'
  }
}