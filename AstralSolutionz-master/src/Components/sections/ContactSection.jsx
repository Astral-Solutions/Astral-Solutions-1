import React from 'react';

const ContactSection = () => (
  <section id="contact" className="bg-white py-24 text-black">
    <div className="mx-auto grid w-[92vw] max-w-6xl gap-8 md:grid-cols-2 md:items-start">
      <div>
        <h2 className="text-3xl font-bold md:text-4xl">Contact Astral Solutions</h2>
        <p className="mt-3 leading-7">Tell us about your organisation and we will prepare a practical digital implementation plan.</p>
      </div>
      <form className="grid gap-3 rounded-2xl border border-black p-6" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input id="name" name="name" type="text" required className="rounded-md border border-black px-3 py-2" />

        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input id="email" name="email" type="email" required className="rounded-md border border-black px-3 py-2" />

        <label htmlFor="phone" className="text-sm font-medium">Phone</label>
        <input id="phone" name="phone" type="tel" required className="rounded-md border border-black px-3 py-2" />

        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea id="message" name="message" rows="4" required className="rounded-md border border-black px-3 py-2" />

        <button type="submit" className="mt-2 rounded-full border border-black bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black">Send Enquiry</button>
      </form>
    </div>
  </section>
);

export default ContactSection;
