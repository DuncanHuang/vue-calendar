import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // calendar
    calendar: {
      show: false,
      x: 0,
      y: 0,
      picker: '',
      type: 'date',
      value: '',
      begin: '',
      end: '',
      sep: '/',
      weeks: [],
      months: [],
      range: false,
      items: {
        // 单选模式
        picker1: {
          type: 'date',
          begin: '2016-08-20',
          end: '2016-08-25',
          value: '2016-08-21',
          sep: '-',
        },
        // 2个日期模式
        picker2: {
          type: 'date',
          value: '',
          range: true,
          sep: '.',
        },
        // 日期时间模式
        picker3: {
          type: 'datetime',
          value: '',
          sep: '-',
        },
        // 日期时间模式
        picker4: {
          type: 'time',
          value: '',
        },
      },
    },
  },
})
