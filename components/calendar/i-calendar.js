// components/i-calendar.js
const util = require('../../utils/util.js')
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    activeDateMapping: {
      type: Object,
      default: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    dayList: util.generatorDayList('2024-01-01','2025-12-31')
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },
})