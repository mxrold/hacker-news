export const resetDate = (created_at) => {
  const now = new Date()
  const postDate = new Date(created_at)
  const difference = Math.abs(now - postDate)
  const milToMinute = 60000
  const postMinutes = Math.round(difference / milToMinute).toFixed(0)

  const calculateData = (divider = 1, time = '') => {
    const result = Math.round(postMinutes / divider).toFixed(0)
    return `${result} ${time} ago `
  }

  const minutes = {
    hour: 60,
    day: 1440,
    month: 43800,
    year: 525600
  }

  if (postMinutes < minutes.hour) {
    return `${postMinutes} min ago`
  } else if (postMinutes >= minutes.hour && postMinutes < minutes.day) {
    return calculateData(minutes.hour, 'hour/s')
  } else if (postMinutes >= minutes.day && postMinutes < minutes.month) {
    return calculateData(minutes.day, 'day/s')
  } else if (postMinutes >= minutes.month && postMinutes < minutes.year) {
    return calculateData(minutes.month, 'month/s')
  } else {
    return calculateData(minutes.year, 'year/s')
  }
}