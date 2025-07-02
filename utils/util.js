const dayjs= require('dayjs');
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const generatorDayList = (start, end) => {
  let min = dayjs(start).set('date', 1)
  const max = dayjs(end)
  const dayList = []
  let chunk = []
  let yearTag
  while (min.isBefore(max)) {
    if (min.month() === 0 && min.date() === 1) yearTag = min
    chunk.push(min)
    if (chunk.length === 14) {
      dayList.push({ yearTag, chunk })
      chunk = []
      yearTag = undefined
    }
    min = min.add(1, 'day')
  }
  if (chunk.length) {
    dayList.push({ yearTag, chunk })
  }
  console.log('daylist', dayList)
  return dayList
}

const transActiveMapping = (list) => {
  const activeMapping = {}
  list.forEach((item) => {
    const _dayjs = dayjs(item.date)
    const year = _dayjs.year()
    const month = _dayjs.month()
    const day = _dayjs.date()
    if (Object.prototype.hasOwnProperty.call(activeMapping, year)) {
      if (Object.prototype.hasOwnProperty.call(activeMapping[year], month)) {
        activeMapping[year][month][day] = item.type
      } else {
        activeMapping[year][month] = { [day]: item.type }
      }
    } else {
      activeMapping[year] = { [month]: { [day]: item.type } }
    }
  })
  return activeMapping
}

const generatorDateList = (start, end) => {
  const dateList = []
  let min = dayjs(start)
  const max = dayjs(end)
  while (min.isBefore(max)) {
    dateList.push(min)
    min = min.add(1, 'day')
  }
  return dateList
}

module.exports = {
  formatTime: formatTime,
  generatorDayList,
  transActiveMapping,
  generatorDateList
}
