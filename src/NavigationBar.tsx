import React from 'react';
import { currentMonthNumber, months, currentYear } from './lib/DataService';
import './NavigationBar.scss';

function NavigationBar() {
    const monthName = months[currentMonthNumber];

    return (
        <div className='navigationBar'>
            <div className='buttons'>
                <button>Back</button>
                <button>Next</button>
            </div>
            <div className='calendarHeader'>
                <p>{currentYear} {monthName}</p>
            </div>
        </div>
    )
}
export default NavigationBar