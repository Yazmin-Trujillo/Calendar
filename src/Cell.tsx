import React, { useState } from 'react';
import { CalendarDay } from './Extra';

type Props = {
    cell: CalendarDay
    onClick: () => void,
}

export function Cell({ cell, onClick: propsOnClick }: Props) {
    // const handleClick = (event:Event) => {
    //     if (event.detail === 2) {
    //         propsOnClick()
    //     }
    // };

    return (

        <div
            className={`numberDays ${cell.currentDay ? 'today' : ''} ${cell.otherMonth ? 'otherMonth' : ''} `}
            onClick={() => propsOnClick()}
        >
            {cell.num}
        </div>
    )
}