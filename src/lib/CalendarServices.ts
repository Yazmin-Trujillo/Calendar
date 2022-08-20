import { CalendarDay } from "./Models";

export const calendarService = {

    getCalendarDays: (year: number, month: number) => {
        const dayOneIndex = new Date(year, month, 1).getDay()
        const calendarDays: CalendarDay[] = [];

        addPreviousMonth(year, month, dayOneIndex, calendarDays);
        addCurrentMonth(year, month, calendarDays, dayOneIndex);
        addNextMonth(year, month, calendarDays);

        return calendarDays;
    }
}

function addPreviousMonth(year: number, month: number, dayOneIndex: number, calendarDays: CalendarDay[]) {
    const previousMonth = new Date(year, month, 0);
    const startOfPreviousCells = new Date(year, month, -dayOneIndex).getDate();
    const daysInPreviousMonth = previousMonth.getDate();

    for (let i = startOfPreviousCells; i < daysInPreviousMonth; i++) {
        calendarDays.push({
            year: previousMonth.getFullYear(),
            month: previousMonth.getMonth(),
            day: i + 1,
            otherMonth: true,
            currentDay: false,
        });
    }
}

function addCurrentMonth(year: number, month: number, calendarDays: CalendarDay[], dayOneIndex: number) {
    const daysInTheMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    for (let i = 0; i < daysInTheMonth; i++) {
        calendarDays.push({
            year: year,
            month: month,
            day: (i + 1),
            otherMonth: false,
            currentDay: today.getFullYear() === year && today.getMonth() === month && today.getDate() === dayOneIndex + i,
        });
    }
}

function addNextMonth(year: number, month: number, calendarDays: CalendarDay[]) {
    const nextMonth = new Date(year, month + 2, 0);
    const lastDayIndex = new Date(year, month + 1, 0).getDay();
    const daysInNextMonth = 6 - lastDayIndex;

    for (let i = 0; i < daysInNextMonth; i++) {
        calendarDays.push({
            year: nextMonth.getFullYear(),
            month: nextMonth.getMonth(),
            day: i + 1,
            otherMonth: true,
            currentDay: false,
        });
    }
}
