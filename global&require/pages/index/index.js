//index.js
//获取应用实例
const app = getApp()
const common = require('../common/common.js');

Page({
  increment: function() {
    app.globalData++;
    common.sayHello('smallFour')
  },
  goLook: function() {
    wx.navigateTo({
      url: '/pages/cart/cart',
    })
  }
})
