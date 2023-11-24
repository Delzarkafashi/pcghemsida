// Booking.js
import React from 'react';

const Booking = () => {
  const calendlyUrl = 'https://calendly.com/delzarkafashi/how-can-we-help-you';

  const openCalendly = () => {
    window.open(calendlyUrl, '_blank', 'noopener noreferrer');
  };

  return (
    <div>
      <p>Klicka på länken nedan för att boka:</p>
      <button onClick={openCalendly}>
        Boka här
      </button>
    </div>
  );
};

export default Booking;
