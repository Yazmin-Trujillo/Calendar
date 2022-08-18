export const date = new Date()
console.log('date', date.toISOString())
export const currentYear = date.getFullYear()
export const currentMonthNumber = date.getMonth()
export const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
export const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December']

export const dataService = {

    daysOfTheMonth: new Date(currentYear, currentMonthNumber, 0).getDate(),
    dayOne: new Date(currentYear, currentMonthNumber, 1).getDay(),
    dayMonth: date.getDate(),
    // nextMonthNumber : date.getMonth() + 1,
    indexOfDaysOfTheWeek: date.getDay(),
}

// console.log(date.toDateString())  //fecha con formato
// console.log(date.toLocaleDateString()) //fecha sensible a la localización(idioma y formato)
