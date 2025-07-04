const dayjs = require("dayjs");
const util = require("../../utils/util");

// components/datepicker/i-datepicker.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    chooseDate: {
      type: String,
      default: () => dayjs(new Date()).format('YYYY-M-D')
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    toView: '',
    dateList: util.generatorDateList('2024-11-01', new Date()),
    dayMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
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
      const date = event.currentTarget.dataset.day;
      const dateStr = `${date.$y}-${date.$M + 1}-${date.$D}`
      this.triggerEvent('choose', dateStr);
    },

    isSameDay(day) {
      return dayjs(day).isSame(chooseDate, 'day')
    },

    handleScroll() {
      this.setData({toView: 'end_tag'})
    }
  },
})