Component({
  data: {
    selected: 1,
    list: [{
      pagePath:"/pages/luggage/luggage",
      iconPath: "/assets/luggage.png",
      selectedIconPath: "/assets/luggage-a.png"
    }, {
      pagePath: "/pages/index/index",
      iconPath: "/assets/car.png",
      selectedIconPath: "/assets/car-a.png"
    }, {
      pagePath:"/pages/map/map",
      iconPath: "/assets/map.png",
      selectedIconPath: "/assets/map-a.png"
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