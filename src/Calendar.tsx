import React from 'react';
import './Calendar.scss';
import { dataService, weekdays, currentMonthNumber, currentYear } from './lib/DataService';
import { Cell } from './Cell';
import { CalendarDay } from './lib/Models';

type Props = {
    year: number,
    month: number,
}

function Calendar({ year, month }: Props) {
    const calendarGrid: CalendarDay[] = new Array(35);
    for (let i = 0; i < calendarGrid.length; i++) {
        calendarGrid[i] = {
            year: 0,
            month: 0,
            day: 0,
            otherMonth: true,
            currentDay: false,
        }
    }

    const daysInTheMonth = dataService.daysOfTheMonth
    const firstDay = dataService.dayOne

    for (let i = 0; i < daysInTheMonth; i++) {
        // if()
        calendarGrid[i + firstDay] = {
            year: year,
            month: month,
            day: (dataService.dayOne + i),
            currentDay: currentYear === year && currentMonthNumber === month && (dataService.dayMonth === dataService.dayOne + i),
            otherMonth: false,
        }
    }
   
    return (
        <div className='calendarWrapper'>
            <div className='calendar'>
                <div className='weekdays'>
                    {weekdays.map((day) => {
                        return <div key={day} className='nameDays'>{day}</div>
                    })}
                </div>
                <div className='daysContainer'>
                    {calendarGrid.map((cell, index) => {
                        if (cell === undefined) return undefined
                        return <Cell cell={cell} key={index} />
                    })}
                </div>
            </div>
        </div >
    )
}
export default Calendar