# 个人学习使用
## 项目开发工具
visual studio code

## 项目插件
node snippets

## 运行js文件
- node xxx.js

## nodejs 热部署工具 supervisor
- npm install -g supervisor
- 使用supervisor命令替换node命令
    - supervisor xxx.js

## npm init --yes 生成package.json
- npm init --yes

## npm常用操作
- npm install module_name
- npm uninstall module_name
- npm list (查看当前目录已经安装的npm package)
- npm info module_name (查看已安装包的信息)
- npm install moduel_name@version (安装具体的版本)

## 标识符
```
  "dependencies": {
    "jquery": "^3.4.1",
    "md5": "^2.2.1",
    "silly-datetime": "^0.1.2"
  }
```
- ^表示第一位版本号不变，后面两位取最新
- ~前两位不变，最后一位取最新
- *全部取最新
- 没有表示确定的某个版本

## ejs
- npm install ejs --save