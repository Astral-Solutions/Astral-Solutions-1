import React from 'react';

const trainingAreas = [
  { title: 'Microsoft Office for Business', detail: 'Word, Excel, PowerPoint, Email' },
  { title: 'Google Workspace & Tools', detail: 'Docs, Sheets, Drive, Google Ads, Business Profile' },
  { title: 'Website & Digital Management', detail: 'Updating content, managing enquiries' },
  { title: 'CRM Training', detail: 'Lead tracking, customer management' },
  { title: 'Digital Marketing', detail: 'Social media, content, engagement' },
  { title: 'Virtual Meetings & Communication', detail: 'Zoom, Google Meet, Teams, professionalism' },
];

const TrainingSection = () => (
  <section id="training" className="bg-black py-24 text-white">
    <div className="mx-auto w-[92vw] max-w-6xl">
      <h2 className="text-3xl font-bold md:text-4xl">Business Digital Skills Training</h2>
      <p className="mt-3 max-w-3xl text-white/85">Practical training programmes designed to improve adoption and daily execution.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {trainingAreas.map((area) => (
          <article key={area.title} className="rounded-2xl border border-white bg-black p-6 transition duration-200 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(255,255,255,0.08)]">
            <h3 className="text-xl font-semibold">{area.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/85">{area.detail}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TrainingSection;
