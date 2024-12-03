// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TicketPage from './components/TicketPage';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for ticket page with dynamic ticket_number */}
        <Route path="/" element={<Home />} />
        <Route path="/ticket/:ticket_number" element={<TicketPage />} />
      </Routes>
    </Router>
  );
}

export default App;
