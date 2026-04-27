import React from 'react';

const ContactSection = () => (
  <section id="contact" className="section section-light fade-in">
    <div className="shell two-col">
      <div>
        <h2>Contact Astral Solutions</h2>
        <p>Tell us about your organisation and we will prepare a practical digital implementation plan.</p>
      </div>
      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required />

        <button type="submit" className="btn btn-dark">Send Enquiry</button>
      </form>
    </div>
  </section>
);

export default ContactSection;
