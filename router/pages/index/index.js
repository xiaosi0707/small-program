//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  goCart: function () {
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  }
})
