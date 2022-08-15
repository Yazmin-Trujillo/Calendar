import React from 'react';
import './Calendar.scss';


type Props = {
    weekdays: string[],
    months: string[]
}

function Calendar({ weekdays, months }: Props) {
    return (
        <div className='calendarWrapper'>
            <div className='calendar'>  
                <div className='weekdays'>
                    {weekdays.map((day) => {
                        return <span key={day} className='days'>{day}</span>
                    })}
                </div>
                <div className='daysContainer'>
                    {Array.from(Array(35).keys()).map(number => {
                        return <div className='cell' key={number}>{number}</div>
                    })}
                </div>
            </div>
        </div>



        // <div className='calendar'>
        //     <div className='cells'>
        //     {weekdays.map((day) => {
        //             return <span key={day} className='title'>{day}</span>
        //         })}
        //         {Array.from(Array(35).keys()).map(number => {
        //             return <div className='day' key={number}>{number}</div>
        //         })}
        //     </div>


        /* <div className='weekdays'>
            {weekdays.map((day) => {
                return <span key={day} className='days'>{day}</span>
            })}
        </div>
        <div className='days-container'>
            {Array.from(Array(35).keys()).map(number => {
                return <div className='cell' key={number}>{number}</div>
            })}
        </div> */
        // </div>
    )
}
export default Calendar