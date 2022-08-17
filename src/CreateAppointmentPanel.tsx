import React, { useState } from 'react';
import './CreateAppointmentPanel.scss';


type Props = {
    onClose: () => void
}

export function CreateAppointmentPanel({ onClose: propsOnClick }: Props) {
    const [appointment, setAppointment] = useState<string>('');

    function closeAppointmentPanel() {
        if (appointment !== '') {
            console.log('se guardará la nota')
        } 
        // setAppointment('');
        propsOnClick()
    }
    return (
        <div className='backdrop'>
            <div className='contents'>
                <div className='appointment'>
                    <p>evento nuevo hoy, evento nuevo mañana, evento nuevo proximo xxx, evento nuevo el 22 de marzo</p>
                    <input
                     placeholder='aqui va lo que quieres guardar' 
                     onChange={event => setAppointment(event.target.value)}/>
                </div>
                <div>
                    <button onClick={() => closeAppointmentPanel()}>CERRAR</button>
                </div>
            </div>
        </div>
    )
}