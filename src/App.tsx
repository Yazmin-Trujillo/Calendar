import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import Calendar from './Calendar';
// import { currentYear, dataService, monthNumber } from './DataService';
import { currentYear, dataService, currentMonthNumber } from './DataService';


function App() {
  // const [year, setYear] = useState(currentYear);
  // const [month, setMonth] = useState(monthNumber);
  // const [day, setday]= useState(dataService.dayMonth)

  // function setYearMont(data) {
  //   setYear(data.year)
  //   setMonth(data.month)
  // }

  return (
    <div className="App">
      <NavigationBar />
      {/* <NavigationBar onChange="setMontAndYEar()" /> */}
      <Calendar year={currentYear} month={currentMonthNumber} />
    </div>
  );
}

export default App;
