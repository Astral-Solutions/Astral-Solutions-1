import React from 'react';

const ContactSection = () => (
  <section id="contact" className="section section-light fade-in">
    <div className="shell two-col contact-layout">
      <div>
        <p className="eyebrow">Contact Us</p>
        <h2>Contact Astral Solutions</h2>
        <p>
          Tell us about your organisation and we will prepare a practical digital implementation plan.
        </p>

        <div className="contact-info-card">
          <h3>Let’s build your digital roadmap</h3>
          <p>Websites, CRM systems, training, and implementation support.</p>
        </div>
      </div>

      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" required />

        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" placeholder="+27..." required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" placeholder="Tell us what you need help with..." required />

        <button type="submit" className="btn btn-dark">Send Enquiry</button>
      </form>
    </div>
  </section>
);

export default ContactSection;