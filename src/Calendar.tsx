import React, { useEffect, useState } from 'react';
import './Calendar.scss';
import { weekdays } from './lib/DataService';
import { Cell } from './Cell';
import { CalendarDay } from './lib/Models';
import { calendarService } from './lib/CalendarServices';

type Props = {
    year: number,
    month: number,
}

function Calendar({ year, month }: Props) {
    const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([])
    
    useEffect(() => {
        setCalendarDays(calendarService.getCalendarDays(year, month))
    }, [year, month])

    return (
        <div className='calendarWrapper'>
            <div className='calendar'>
                <div className='weekdays'>
                    {weekdays.map((day) => {
                        return <div key={day} className='nameDays'>{day}</div>
                    })}
                </div>
                <div className='daysContainer'>
                    {calendarDays.map((cell) => {
                        if (cell === undefined) return undefined
                        return <Cell cell={cell} key={`${cell.year}${cell.month}${cell.day}`} />
                    })}
                </div>
            </div>
        </div >
    )
}
export default Calendar
