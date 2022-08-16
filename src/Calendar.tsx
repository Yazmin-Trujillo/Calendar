import React from 'react';
import './Calendar.scss';
import { dataService, weekdays, monthNumber, currentYear } from './DataService';

type Props = {
    year: number,
    month: number,
    day: number
}

function Calendar({ year, month, day }: Props) {

    const calendarGrid = new Array(35);
    for (let i = 0; i < calendarGrid.length; i++) {
        calendarGrid[i] = {otherMonth:true}
    }

    const daysInTheMonth = dataService.daysOfTheMonth
    const firstDay = dataService.dayOne

    for (let i = 0; i < daysInTheMonth; i++) {
        // if()
        calendarGrid[i + firstDay] = {
            num: (i + 1).toLocaleString(undefined, { minimumIntegerDigits: 2 }),
            currentDay: currentYear === year && monthNumber === month && (dataService.dayMonth === i + 1)
        }
    }
    console.log('calendargrid', calendarGrid)
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
                        return <div
                            key={index}
                            className={`numberDays ${cell.currentDay ? 'today' : ''} ${cell.otherMonth ? 'otherMonth' : ''}`}>
                            {cell.num}
                        </div>
                    })}
                </div>
            </div>
        </div >
    )
}
export default Calendar