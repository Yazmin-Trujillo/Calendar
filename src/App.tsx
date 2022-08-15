import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import Calendar from './Calendar';

function App() {

  const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December']

  // {months.map((month) => {
  //     return <text key={month} className='months'>{month}</text>
  // })}

  const date = new Date();
  const year = date.getFullYear();
  const monthNumber = date.getMonth() + 1;
  const daysOfTheMonth = new Date(year, monthNumber, 0).getDate()
  const dayMonth = date.getDate();
  const indexOfDaysOfTheWeek = date.getDay()

  const monthName = months[monthNumber - 1];
  const dayName = weekdays[indexOfDaysOfTheWeek]

  console.log(monthNumber, dayMonth, year)
  console.log(date.toDateString())  //fecha con formato
  console.log(date.toLocaleDateString()) //fecha sensible a la localización(idioma y formato)
  console.log(monthName)
  console.log('dias del mes', daysOfTheMonth)
  console.log('dia de la semana', indexOfDaysOfTheWeek)
  console.log('dia de la semana', dayName)

  return (
    <div className="App">
      <NavigationBar year={year} month={monthName} />
      <Calendar weekdays={weekdays} months={months} />
    </div>
  );
}

export default App;
