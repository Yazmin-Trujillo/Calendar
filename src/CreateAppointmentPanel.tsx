import React, { useState } from 'react';
import './CreateAppointmentPanel.scss';
import { nanoid } from 'nanoid'
import { Appointment } from './lib/Models';
import { Repository } from './lib/Repository';

type Props = {
    year: number,
    month: number,
    day: number,
    onClose: () => void
}

export function CreateAppointmentPanel({ year, month, day, onClose }: Props) {
    const [appointmentName, setAppointmentName] = useState<string>('');
    // const [titleDate, setTitleDate] = useState<string>('');

    function closeAppointmentPanel() {

        if (appointmentName !== '') {
            const appointment: Appointment = {
                id: nanoid(),
                time: new Date(year, month, day).toUTCString(),
                name: appointmentName
            }
            Repository.addItem(appointment)
        }
        onClose()
    }
    return (
        <div className='backdrop'>
            <div className='contents'>
                <div className='appointment'>
                    <p>New event</p>
                    {/* <p>evento nuevo hoy, evento nuevo mañana, evento nuevo proximo xxx, evento nuevo el 22 de marzo</p> */}
                    <input
                        placeholder='Appointment'
                        onChange={event => setAppointmentName(event.target.value)} />
                </div>
                <div>
                    <button className='saveAppointment' onClick={() => closeAppointmentPanel()}>CLOSE</button>
                </div>
            </div>
        </div>
    )
}