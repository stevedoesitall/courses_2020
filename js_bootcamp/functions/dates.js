const ONE_MINUTE = 60
const ONE_HOUR = ONE_MINUTE * 60
const ONE_DAY = ONE_HOUR * 24
const ONE_WEEK = ONE_DAY * 7
const ONE_MONTH = ONE_DAY * 30

const now = new Date()

const currentTimetamp = now.getTime()
const yesterday = currentTimetamp - 10
const difference = currentTimetamp - yesterday

if (difference < ONE_MINUTE) {
    console.log('This happened less than a minute ago')
} else if (difference >= ONE_MINUTE && difference <= ONE_HOUR) {
    console.log('This happened in the last hour')
} else if (difference > ONE_HOUR && difference <= ONE_DAY) {
    console.log('This happened in the last day')
} else if (difference > ONE_DAY && difference <= ONE_WEEK) {
    console.log('This happened in the last few days')
}