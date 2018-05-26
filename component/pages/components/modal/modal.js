Component({
  options: {
    multipleSlots: true // 支持多个slot
  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    modalTitle: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '默认值', // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    modalContext: {
      type: String,
      value: '默认内容'
    },
    modalSure: {
      type: String,
      value: "确定"
    },
    modalCancel: {
      type: String,
      value: "取消"
    }
  },
  data: {
    // 这里是一些组件内部数据
    isShow: false
  },
  methods: {
    // 这里是一个自定义方法

    // 显示弹窗
    showModal () {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    // 隐藏弹窗
    hideModal () {
      this.setData({
        isShow: false
      })
    },
    // 触发成功回调
    _confirmEvent() {
      let componentData = {
        name: 'smallFour',
        age: '24'
      }
      this.triggerEvent("confirmEvent", componentData) // 组件传递数据到主页面
    },
    // 触发取消回调
    _cancelEvent() {
      this.triggerEvent('cancelEvent')
    }
  }
})