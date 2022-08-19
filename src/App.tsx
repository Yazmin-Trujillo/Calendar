import React, { useState } from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import Calendar from './Calendar';
// import { currentYear, dataService, monthNumber } from './DataService';

function App() {
  const [date]=useState(new Date())
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());

  return (
    <div className="App">
      <NavigationBar yearChange={setYear} monthChange={setMonth}/>
      {/* <NavigationBar onChange="setMontAndYEar()" /> */}
      <Calendar year={year} month={month} />
    </div>
  );
}

export default App;
