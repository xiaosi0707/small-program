Component({
  relations: {
    '../li/li': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function(target) {
        // 每次有custom-li被插入时执行
        console.log('[custom-ul] a child is linked: ', target)
      },
      linkChanged: function (target) {
        // 每次有custom-li被移动后执行
      },
      unlinked: function (target) {
        // 每次有custom-li被移除时执行
      }
    }
  },
  data: {
    name: 'ul'
  },
  methods: {
    _getAllLi: function () {
      // 使用getRelationNodes可以获得nodes数组，包含所有已关联的custom-li，且是有序的
      var nodes = this.getRelationNodes('../li');
    }
  },
  ready: function() {
    this._getAllLi()
  }
})