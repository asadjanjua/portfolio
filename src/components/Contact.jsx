import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="tel" placeholder="Your Phone" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;