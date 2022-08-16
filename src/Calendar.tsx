import React from 'react';
import './Calendar.scss';
import { dataService, weekdays } from './DataService';

function Calendar() {

    const calendarGrid = new Array(35);
    for (let i = 0; i < calendarGrid.length; i++) {
        calendarGrid[i] = ''
    }

    const daysInTheMonth = dataService.daysOfTheMonth
    const firstDay = dataService.dayOne

    for (let i = 0; i < daysInTheMonth; i++) {
        // if()
        calendarGrid[i + firstDay] = (i + 1).toLocaleString(undefined, { minimumIntegerDigits: 2 })
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
                        return <div key={index} className='numberDays'>{cell}</div>
                    })}
                </div>
            </div>
        </div>
    )
}
export default Calendar