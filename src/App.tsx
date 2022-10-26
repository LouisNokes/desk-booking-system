import { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

// Pages + Components
import { BookingDesk } from './components/deskBooking';
import { BookedDesk } from './components/bookedDesk';
import { Navbar } from './components/Navbar';


function App() {
  const [loc, setLoc] = useState('');
  const [dates, setDates] = useState('');
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <header className="App-header">
          <BookingDesk loc={loc} setLoc={setLoc} setDates={setDates} dates={dates}></BookingDesk>
          <BookedDesk loc={loc} dates={dates}></BookedDesk>
        </header>
      </BrowserRouter>

    </div >
  );
}

export default App;
