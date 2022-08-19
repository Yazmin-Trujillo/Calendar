import React, { useState } from 'react';
import { months } from './lib/DataService';
import './NavigationBar.scss';

type Props = {
    yearChange: (year: number) => void,
    monthChange: (month: number) => void
}

function NavigationBar({ yearChange, monthChange }: Props) {

    const [date] = useState(new Date())
    const [year, setYear] = useState(date.getFullYear())
    const [month, setMonth] = useState(date.getMonth())

    const next = () => {
        date.setMonth(date.getMonth() + 1)
        setYear(date.getFullYear())
        setMonth(date.getMonth())
        yearChange(date.getFullYear())
        monthChange(date.getMonth())
    }

    function back() {
        date.setMonth(date.getMonth() - 1)
        setYear(date.getFullYear())
        setMonth(date.getMonth())
        yearChange(date.getFullYear())
        monthChange(date.getMonth())
    }

    return (
        <div className='navigationBar'>
            <div className='buttons'>
                <button onClick={() => back()}>Back</button>
                <button onClick={() => next()}>Next</button>
            </div>
            <div className='calendarHeader'>
                <p>{year} {months[month]}</p>
            </div>
        </div>
    )
}
export default NavigationBar