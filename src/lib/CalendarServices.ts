import { CalendarDay } from "./Models";

export const calendarService = {

    getCalendarDays: (year: number, month: number) => {
        const dayOneIndex = new Date(year, month, 1).getDay()

        const calendarDays: CalendarDay[] = [];
        addPreviousMonth(year, month, dayOneIndex, calendarDays);
        addCurrentMonth(year, month, calendarDays, dayOneIndex);

        return calendarDays;
    }
}

function addCurrentMonth(year: number, month: number, calendarGrid: CalendarDay[], dayOneIndex: number) {
    const daysInTheMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    for (let i = 0; i < daysInTheMonth; i++) {
        // if()
        calendarGrid.push({
            year: year,
            month: month,
            day: (i + 1),
            currentDay: today.getFullYear() === year && today.getMonth() === month && today.getDate() === dayOneIndex + i,
            otherMonth: false,
        });
    }
}

function addPreviousMonth(year: number, month: number, dayOneIndex: number, calendarGrid: CalendarDay[]) {
    const previousMonth = new Date(year, month, 0);
    console.log('previousMonth', previousMonth);
    console.log('previousMonthDays', new Date(year, month, -1));

    const startOfPreviousCells = new Date(year, month, -dayOneIndex).getDate();
    console.log('starOfPreviouscell', startOfPreviousCells);

    const daysInPreviosuMonth = previousMonth.getDate();

    console.log('mesAnterior', previousMonth.getFullYear());

    for (let i = startOfPreviousCells; i < daysInPreviosuMonth; i++) {
        calendarGrid.push({
            year: previousMonth.getFullYear(),
            month: previousMonth.getMonth(),
            day: i + 1,
            otherMonth: true,
            currentDay: false,
        });
    }
}

