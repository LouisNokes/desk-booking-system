import React from 'react';
import './App.css';
import { BookingDesk } from './components/deskBooking';
import { BookedDesk } from './components/bookedDesk';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookingDesk></BookingDesk>
        <BookedDesk></BookedDesk>
      </header>
    </div>
  );
}

export default App;
