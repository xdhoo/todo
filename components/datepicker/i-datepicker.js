const dayjs = require("dayjs");
const util = require("../../utils/util");

// components/datepicker/i-datepicker.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    toView: '',
    dateList: util.generatorDateList('2024-11-01', new Date()),
    dayMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    chooseDay: dayjs(new Date()).format('YYYY-M-D')
  },
  pageLifetimes: {
    show(){
      console.log('show')
      this.setData({toView: `id_${this.data.dateList.length - 1}`})
    }
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    handleChoose(event) {
      const date = event.currentTarget.dataset.day
      this.setData({chooseDay: `${date.$y}-${date.$M}-${date.$D}`});
    },

    isSameDay(day) {
      return dayjs(day).isSame(chooseDay, 'day')
    },

    handleScroll() {
      this.setData({toView: 'end_tag'})
    }
  },
})