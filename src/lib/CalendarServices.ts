import { CalendarDay } from "./Models";

export const calendarService = {

    getCalendarDays: (year: number, month: number) => {
        const today = new Date()
        const dayOne = new Date(year, month, 1).getDay()
        const daysInTheMonth = new Date(year, month+1, 0).getDate()
        const calendarGrid: CalendarDay[] = new Array(35);

        for (let i = 0; i < calendarGrid.length; i++) {
            calendarGrid[i] = {
                year: 0,
                month: 0,
                day: 0,
                otherMonth: true,
                currentDay: false,
            };
        }

        for (let i = 0; i < daysInTheMonth; i++) {
            // if()
            calendarGrid[i + dayOne] = {
                year: year,
                month: month,
                day: (i + 1),
                currentDay: today.getFullYear() === year && today.getMonth() === month && today.getDate() === dayOne + i,
                otherMonth: false,
            };
        }
        return calendarGrid;
    }

}
