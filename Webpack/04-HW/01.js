/*
  1、Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。
      流程
      初始化项目
      配置文件webpack.config.js
      配置项目入口、输出路径、开发模式等
      配置不同资源处理的loader
      配置plugin
      执行打包命令
    通过webpack.config.js配置文件的entry入口配置开始查找项目依赖资源
    根据配置的loader解析不同的资源，输出打包后的资源。
    在webpack打包过程中不同阶段根据配置的plugin做一些额外的工作
*/