import React, { useState } from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import Calendar from './Calendar';
import { currentYear, dataService, monthNumber } from './DataService';


function App() {
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(monthNumber);
  const [day, setday]= useState(dataService.dayMonth)

  // function setYearMont(data) {
  //   setYear(data.year)
  //   setMonth(data.month)
  // }

  return (
    <div className="App">
      <NavigationBar />
      {/* <NavigationBar onChange="setMontAndYEar()" /> */}
      <Calendar year={year} month={month} day={day}/>
    </div>
  );
}

export default App;
