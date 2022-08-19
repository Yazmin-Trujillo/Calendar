import React, { useEffect, useState } from 'react';
import { CreateAppointmentPanel } from './CreateAppointmentPanel';
import { Appointment, CalendarDay } from './lib/Models';
import { Repository } from './lib/Repository';

type Props = {
    cell: CalendarDay
}

export function Cell({ cell }: Props) {
    const [showAddAppointment, setShowAddAppointment] = useState<boolean>(false);
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    useEffect(() => {
        setAppointments(Repository.findByDay(cell.year, cell.month, cell.day))
    }, [])

    function onAddAppointmentClose() {
        setShowAddAppointment(false)
        setAppointments(Repository.findByDay(cell.year, cell.month, cell.day))
    }

    function onAddAppointmentOpen() {
        setShowAddAppointment(true)
    }

    return (
        <>
            <div className={`numberDays ${cell.currentDay ? 'today' : ''} ${cell.otherMonth ? 'otherMonth' : ''} `}
                onClick={() => onAddAppointmentOpen()}>
                <div>
                    {cell.day}
                </div>
                <div>
                    {appointments.map((appointment) => {
                        return <div key={appointment.id} >{appointment.name}</div>
                    })}
                </div>
            </div >
            {showAddAppointment ? <CreateAppointmentPanel year={cell.year} month={cell.month} day={cell.day} onClose={onAddAppointmentClose} /> : ''}
        </>
    )
}