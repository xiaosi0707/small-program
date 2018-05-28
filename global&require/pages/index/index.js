//index.js
//获取应用实例
const app = getApp()

Page({
  increment: function() {
    app.globalData++
  },
  goLook: function() {
    wx.navigateTo({
      url: '/pages/cart/cart',
    })
  }
})
