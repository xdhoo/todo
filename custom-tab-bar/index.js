Component({
  data: {
    selected: 2,
    list: [{
      pagePath:"/pages/record/record",
      iconPath: "/assets/add.png",
      selectedIconPath: "/assets/add_a.png"
    }, {
      pagePath: "/pages/stats/stats",
      iconPath: "/assets/stats.png",
      selectedIconPath: "/assets/stats_a.png"
    }, {
      pagePath:"/pages/index/index",
      iconPath: "/assets/mine.png",
      selectedIconPath: "/assets/mine_a.png"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      console.log(e)
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})