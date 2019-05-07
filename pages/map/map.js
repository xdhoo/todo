Page({
  data: {
    polyline: [{
      points: [{
        longitude: 121.474791,
        latitude: 31.232471
      }, {
        longitude: 120.160318,
        latitude: 30.288515
      }, {
        longitude: 121.557282,
        latitude: 29.881066
      }, {
        longitude: 122.210386,
        latitude: 29.993236
      }, {
        longitude: 122.395142,
        latitude: 29.923108
      }, {
        longitude: 122.67794,
        latitude: 30.202726
      }, {
        longitude: 122.705253,
        latitude: 30.205333
      }, {
        longitude: 122.768233,
        latitude: 30.130698
      }],
      color: '#FF0000DD',
      width: 2
    }]
  },
  onLoad: function () {
    
  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  }
})