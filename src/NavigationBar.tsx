import React from 'react';
import './NavigationBar.scss';


type Props = {
    year: number,
    month: string
}

function NavigationBar({ year, month }: Props) {

    return (
        <div className='navigationBar'>
            <div className='buttons'>
                <button>Back</button>
                <button>Next</button>
            </div>
            <div className='calendarHeader'>
                <p>{year} {month}</p>
            </div>
        </div>
    )
}
export default NavigationBar