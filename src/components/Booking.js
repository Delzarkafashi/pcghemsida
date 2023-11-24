// Booking.js
import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Booking = () => {
  const calendlyUrl = 'https://calendly.com/delzarkafashi/how-can-we-help-you';

  const openCalendly = () => {
    window.open(calendlyUrl, '_blank', 'noopener noreferrer');
  };

  return (
    <div className='book'>
      <p>Klicka på knappen nedan för att boka:</p>
      <button className='book-btn' onClick={openCalendly}>
        Boka här
      <CalendarMonthIcon/>
      </button>
    </div>
  );
};

export default Booking;
