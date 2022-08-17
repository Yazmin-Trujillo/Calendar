import React, { useState } from 'react';
import './Calendar.scss';
import { nanoid } from 'nanoid'
import { dataService, weekdays, monthNumber, currentYear } from './DataService';
import { Cell } from './Cell';
import { CreateAppointmentPanel } from './CreateAppointmentPanel';

type Props = {
    year: number,
    month: number,
    // day?: number
}

function Calendar({ year, month }: Props) {

    const calendarGrid = new Array(35);
    for (let i = 0; i < calendarGrid.length; i++) {
        calendarGrid[i] = { otherMonth: true }
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

    //${showAddAppointment ? 'invisible' : ''}
    const [showAddAppointment, setShowAddAppointment] = useState<boolean>(false);

    function onAddAppointmentClose() {
        setShowAddAppointment(false)
    }

    function onAddAppointmentOpen() {
        setShowAddAppointment(true)
    }

    return (
        <div className='calendarWrapper'>
            <div className={`calendar ${showAddAppointment ? "invisible" : ""}`}>
                <div className='weekdays'>
                    {weekdays.map((day) => {
                        return <div key={day} className='nameDays'>{day}</div>
                    })}
                </div>
                <div className='daysContainer'>
                    {calendarGrid.map((cell, index) => {
                        if (cell === undefined) return undefined
                        return <Cell cell={cell} key={index} onClick={onAddAppointmentOpen}/>
                    })}
                </div>
            </div>
            {showAddAppointment ? <CreateAppointmentPanel onClose={onAddAppointmentClose} /> : ''}
        </div >
    )
}
export default Calendar