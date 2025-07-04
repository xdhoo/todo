const dayjs = require("dayjs")

// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseDate: dayjs(new Date()).format('YYYY-M-D'),
    chooseDateDisp: dayjs(new Date()).format('DD MMM'),
    types:['swim', 'tennis'],
    type: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
      selected: 0
    })
  }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  handleDateChoose(e) {
    this.setData({chooseDate: e.detail, chooseDateDisp: dayjs(e.detail).format('DD MMM')})
  },
  
  pickChangeHandle(e) {
    this.setData({type: e.detail.value})
  },

  recordHandle() {
    
  }
})