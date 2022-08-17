export interface Appointment {
    // "time":"2021-05-14T18:45:00+00:00",
    // "name":"Coffee Break"
    id: string
    time: string
    name: string
}

export interface CalendarDay{
    num: string
    currentDay: boolean
    otherMonth: boolean
}

// export interface Week {
//     sun: string
//     mon: string
//     tue: string
//     wed: string
//     thu: string
//     fri: string
//     sat: string
// }


// export interface Month{
//     January: string
//     February: string
//     March: string
//     April: string
//     May: string
//     June: string
//     July: string
//     August: string
//     September: string
//     October: string
//     November: string
//     December: string
// }

// export enum Week {
//     Sun,
//     Mon,
//     Tue,
//     wed,
//     Thu,
//     Fri,
//     Sat
// }

// export enum Month {
//     January,
//     February,
//     March,
//     April,
//     May,
//     June,
//     July,
//     August,
//     September,
//     October,
//     November,
//     December
// }

