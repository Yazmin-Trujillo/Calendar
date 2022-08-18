import React, { useState } from 'react';
import './CreateAppointmentPanel.scss';
import { nanoid } from 'nanoid'
import { Appointment } from './lib/Models';
import { Repository } from './lib/Repository';
import { date } from './lib/DataService';


type Props = {
    year: number,
    month: number,
    day: number,
    onClose: () => void
}

export function CreateAppointmentPanel({ year, month, day, onClose }: Props) {
    const [appointmentName, setAppointmentName] = useState<string>('');
    const [titleDate, setTitleDate] = useState<string>('');

    const appointments: Appointment[] = []

    function closeAppointmentPanel() {

        if (appointmentName !== '') {
            // let date = new Date(1995, 11, 17)
            const appointment: Appointment = {
                id: nanoid(),
                time: new Date(year, month, day).toUTCString(),
                name: appointmentName
            }
            appointments.push(appointment)
            Repository.addItem(appointment)
            console.log('se guardará la nota')
        }
        onClose()
    }
    return (
        <div className='backdrop'>
            <div className='contents'>
                <div className='appointment'>
                    <p>evento nuevo {titleDate}</p>
                    {/* <p>evento nuevo hoy, evento nuevo mañana, evento nuevo proximo xxx, evento nuevo el 22 de marzo</p> */}
                    <input
                        placeholder='aqui va lo que quieres guardar'
                        onChange={event => setAppointmentName(event.target.value)} />
                </div>
                <div>
                    <button onClick={() => closeAppointmentPanel()}>CERRAR</button>
                </div>
            </div>
        </div>
    )
}