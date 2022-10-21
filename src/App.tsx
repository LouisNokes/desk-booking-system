import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages + Components
import { BookingDesk } from './components/deskBooking';
import { BookedDesk } from './components/bookedDesk';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <header className="App-header">
          <BookingDesk></BookingDesk>
          <BookedDesk></BookedDesk>
        </header>
      </BrowserRouter>

    </div>
  );
}

export default App;
