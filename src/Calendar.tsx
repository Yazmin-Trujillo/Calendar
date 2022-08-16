import React from 'react';
import './Calendar.scss';

type Props = {
    weekdays: string[],
    months: string[]
}

function Calendar({ weekdays, months }: Props) {

    const calendarGrid = new Array(35);
    for(let i=0;i<calendarGrid.length;i++){ 
        calendarGrid[i]=''
    }

      const date = new Date();
    const year = date.getFullYear();
    const monthNumber = date.getMonth() + 1;
    const daysOfTheMonth = new Date(year, monthNumber, 0).getDate()
    const dayOne = new Date(year, monthNumber, 1).getDay()
    console.log('dayOne', dayOne)
    const dayMonth = date.getDate();
    const indexOfDaysOfTheWeek = date.getDay()
    const monthName = months[monthNumber - 1];
    const dayName = weekdays[indexOfDaysOfTheWeek]
    // let counter = 1;
  
    for (let i = 0; i < daysOfTheMonth; i++) {
        // if()
        calendarGrid[i+dayOne] = (i+1).toLocaleString(undefined, { minimumIntegerDigits: 2 })
        // counter++
    }
    console.log('calendarGrid', calendarGrid)

    return (
        <div className='calendarWrapper'>
            <div className='calendar'>
                <div className='weekdays'>
                    {weekdays.map((day) => {
                        return <span key={day} className='days'>{day}</span>
                    })}
                </div>
                <div className='daysContainer'>
                    {/* {Array.from(Array(35).keys()).map(number => {
                        return <div className='cell' key={number}>{number}</div>
                    })} */}
                    {calendarGrid.map((cell,index) => {
                        return <span key={index }>{cell}</span>
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

    )
}
export default Calendar