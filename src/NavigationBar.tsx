import React from 'react';
import './NavigationBar.scss';

function NavigationBar() {

    return (
        <div className='navigationBar'>
            <div className='buttons'>
                <button>Back</button>
                <button>Next</button>
            </div>
            <div className='calendarHeader'>
                <p>2022 agosto</p>
            </div>
        </div>
    )
}
export default NavigationBar