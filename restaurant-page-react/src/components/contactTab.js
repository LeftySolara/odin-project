import React from 'react';
import '../index.css';

function ContactTab() {
  const address = '12345 Example St., Seattle, WA';
  const email = 'julianne@example.com';
  const phone = '(123)456-7890';

  return (
    <div className="tabContent overlay">
      <p>For questions, concerns, and reservations:</p>
      <p />
      <p>{address}</p>
      <p>
        {email}
        <br />
        {phone}
      </p>
    </div>
  );
}

export default ContactTab;
