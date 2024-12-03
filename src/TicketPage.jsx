// TicketPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const TicketPage = () => {
  // Extract ticket_number from the URL
  const { ticket_number } = useParams();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Ticket Information</h1>
      <p>Your Ticket Number: <strong>{ticket_number}</strong></p>
    </div>
  );
};

export default TicketPage;
