Page({
  data: {
    animationData:{},
    animationDataS:{},
    luggages: [
      {
        name: 'part-1',
        items: [
          {
            id: 1,
            name: '身份证',
            opacity: 1
          }, {
            id: 2,
            name: '毛巾',
            opacity: 1
          }, {
            id: 3,
            name: '牙刷',
            opacity: 1
          }, {
            id: 4,
            name: '拖鞋',
            opacity: 1
          }, {
            id: 10,
            name: '帽子',
            opacity: 1
          }, {
            id: 5,
            name: '防晒霜',
            opacity: 1
          }, {
            id: 6,
            name: '防蚊液',
            opacity: 1
          }, {
            id: 7,
            name: '晕车贴',
            opacity: 1
          }, {
            id: 8,
            name: '充电宝',
            opacity: 1
          }, {
            id: 9,
            name: '数据线',
            opacity: 1
          }]
      },{
        name: 'part-2',
        items: [{
          id: 1,
          name: '相机',
          opacity: 1
        }, {
          id: 2,
          name: '相机电池',
          opacity: 1
        }, {
          id: 3,
          name: '相机充电器',
          opacity: 1
        }, {
          id: 4,
          name: 'gopro',
          opacity: 1
        }, {
          id: 5,
          name: 'gopro电池(3)',
          opacity: 1
        }, {
          id: 6,
          name: 'gopro充电器',
          opacity: 1
        }, {
          id: 7,
          name: '平衡器',
          opacity: 1
        }, {
          id: 8,
          name: '平衡器充电器',
          opacity: 1
        }, {
          id: 10,
          name: '存储卡',
          opacity: 1
        }, {
          id: 9,
          name: '清洁布',
          opacity: 1
        }]
      }
    ]
  },
  onLoad: function () {
    
  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
    const animation = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
    })
    this.animation = animation
    this.animation.rotate(-720).scale(1, 1).step()
    this.setData({
      animationDataS: this.animation.export()
    })
  },
  remove(event) {
    let data = event.target.dataset;
    let {luggages} = this.data
    luggages[data.partidx].items[data.itemidx].opacity = 0;
    this.animation.scale(0, 0).rotate(720).step()
    this.setData({
      luggages,
      animationData: this.animation.export()
    })
  },
  reset() {
    let {luggages} = this.data
    luggages.forEach(part => {
      part.items.forEach(item => {
        item.opacity = 1
      })
    })
    this.animation.scale(1, 1).rotate(-720).step()
    this.setData({
      luggages,
      animationDataS: this.animation.export()
    })
  }
})