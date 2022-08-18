import React, { useState } from 'react';
import './Calendar.scss';
import { dataService, weekdays, currentMonthNumber, currentYear } from './DataService';
import { Cell } from './Cell';
import { CreateAppointmentPanel } from './CreateAppointmentPanel';
import { CalendarDay } from './Models';
import { Repository } from './Repository';

type Props = {
    year: number,
    month: number,
    // day: number
}

function Calendar({ year, month }: Props) {
    const calendarGrid: CalendarDay[] = new Array(35);
    for (let i = 0; i < calendarGrid.length; i++) {
        calendarGrid[i] = {
            otherMonth: true,
            day: '',
            currentDay: false,
            appointment: {
                id: '',
                time: '',
                name: ''
            }
        }
    }

    const daysInTheMonth = dataService.daysOfTheMonth
    const firstDay = dataService.dayOne

    for (let i = 0; i < daysInTheMonth; i++) {
        // if()
        calendarGrid[i + firstDay] = {
            day: (dataService.dayOne + i).toLocaleString(undefined, { minimumIntegerDigits: 2 }),
            currentDay: currentYear === year && currentMonthNumber === month && (dataService.dayMonth === dataService.dayOne + i),
            otherMonth: false,
            appointment:{
                id:'',
                time:'',
                name:'aqui va la cita'
            }
        }
    }

    const appointments = Repository.readItem()
    console.log('quehay al leer',appointments)

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
                        return <Cell cell={cell} key={index} openCell={onAddAppointmentOpen} />
                    })}
                </div>
            </div>
            {showAddAppointment ? <CreateAppointmentPanel onClose={onAddAppointmentClose} /> : ''}
        </div >
    )
}
export default Calendar