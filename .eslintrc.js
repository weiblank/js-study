module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  // 使用 prettier 规则和插件
  // extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  // 现代化的解析器配置
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 12,
    sourceType: 'module'
  }
}
