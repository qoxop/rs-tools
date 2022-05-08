---
sidebar_position: 1
title: 介绍
---

React-Ducky 是一个专门为 React 应用编写的状态和缓存管理工具库。它对 Redux 进行了封装，通过切片的方式简化了 Redux 状态的管理和使用，同时还提供了与浏览器路由栈行为一致的页面缓存控制。

## 动机

React-Ducky 核心目的在于通过提供便捷的状态和缓存管理方法，让使用者能够有更多的精力去关注业务逻辑本身，从而提升效率，同时让代码更加简洁。


## 特性
- 切片式的 Redux 状态管理方案，方便业务模块[数据模型](./model.md)的建立。
- 提供通用的异步请求控制逻辑
  - 移除对同一个数据的多次请求，保证永远只响应最后一个
  - 非分页请求状态的自动更新(请求成功、失败、请求中)
  - 分页请求的通用控制模型
- [页面级缓存的自动管理](./page-cache.md)
- 🐳  纯 TS 编写，提供完善的类型提醒 
- 🥱  单元测试已覆盖核心场景，仍在继续完善中 
