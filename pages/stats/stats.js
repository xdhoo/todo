const { baseUrl } = require("../../config/config");
const util = require("../../utils/util");

Page({
  data:{
    statsData:[],
    activeDateMapping: {},
    activeType: 'all'
  },
  onLoad() {
    this.getAllRecords()
  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },
  handleChange(event) {
    const type = event.currentTarget.dataset.type
    this.setData({activeType: type});
    this.getRecords(type);
  },

  getRecords(type) {
    if(type === 'all') {
      this.getAllRecords();
      return;
    }
    wx.request({
      url: `${baseUrl}/api/records`,
      method:'POST',
      data: {type},
      header: {'content-type': 'application/json'},
      success: (res) => {
        const mapping = util.transActiveMapping(res.data)
        this.setData({statsData: res.data, activeDateMapping: mapping});
      }
    })
  },

  getAllRecords() {
    wx.request({
      url: `${baseUrl}/api/all_records`,
      method:'POST',
      header: { 'content-type': 'application/json'},
      success: (res) => {
        const mapping = util.transActiveMapping(res.data)
        this.setData({statsData: res.data, activeDateMapping: mapping});
      }
    })
  }
})