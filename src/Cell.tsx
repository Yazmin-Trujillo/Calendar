import React, { useState } from 'react';
import { CalendarDay } from './Models';

type Props = {
    cell: CalendarDay
    openCell: () => void,
}

export function Cell({ cell, openCell }: Props) {
    // const handleClick = (event:Event) => {
    //     if (event.detail === 2) {
    //         propsOnClick()
    //     }
    // };


    return (
        <div className={`numberDays ${cell.currentDay ? 'today' : ''} ${cell.otherMonth ? 'otherMonth' : ''} `}
            onClick={() => openCell()}>
            <div>

                {cell.day}
            </div>
            <div>
                {cell.appointment.name}
            </div>
        </div >

    )
}