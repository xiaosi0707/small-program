//index.js
//获取应用实例
const app = getApp()
const common = require('../common/common.js'); // 1、引入

Page({
  increment: function() {
    app.globalData++;
    common.sayHello('smallFour') // 2、使用
  },
  goLook: function() {
    wx.navigateTo({
      url: '/pages/cart/cart',
    })
  }
})
