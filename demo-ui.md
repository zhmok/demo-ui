## demo-ui

技术架构




### 技术

---

| 技术             | 说明               | 官方                                          |
| ---------------- | ------------------ | --------------------------------------------- |
| react            | 谷歌反应式前端框架 | https://react.docschina.org                   |
| react-router-dom | react 路由组件     | https://reacttraining.com/react-router/       |
| antd             | 阿里 ui 组件       | https://ant.design/index-cn/                  |
| nprogress        | 超薄进度条加载组件 | https://github.com/rstacruz/nprogress         |
| react-loadable   | react 加载组件     | https://github.com/jamiebuilds/react-loadable |



### 目录结构

```dir
|-- demo-ui
|---- config            # 运行、打包 配置
|---- public            # 页面模板
|---- scripts           # 运行脚本
|---- src               # 项目主要入口
|------ components      # 放各种组件
|------ config          # 项目的各种配置
|------ page            # 项目页面
|------ routes          # 路由配置
|------ tool            # 各种工具
```



>npm 安装失败，清除缓存
```
npm cache verify
npm cache clean --force
```


### 快速清空node_modules 文件

```shell
# 安装
npm install rimraf -g

rimraf node_modules
```

```shell
yarn
npm install
cnpm install
```

---

出现错误

>Operation not permitted mkdir ..\node_modules\@types
>
>原因是：编程软件可能会对文件系统对象进行锁定，阻止对其进行更新。关闭了VSCode，再进行安装就没问题了


>项目打包、运行内存溢出 解决

```shell
全局安装increase-memory-limit
npm install -g increase-memory-limit
进入工程目录，执行：
increase-memory-limit
```