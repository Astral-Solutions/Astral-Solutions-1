import React from 'react';

const trainingAreas = [
  {
    title: 'Microsoft Office for Business',
    detail: 'Word, Excel, PowerPoint, Email',
  },
  {
    title: 'Google Workspace & Tools',
    detail: 'Docs, Sheets, Drive, Google Ads, Business Profile',
  },
  {
    title: 'Website & Digital Management',
    detail: 'Updating content, managing enquiries',
  },
  {
    title: 'CRM Training',
    detail: 'Lead tracking, customer management',
  },
  {
    title: 'Digital Marketing',
    detail: 'Social media, content, engagement',
  },
  {
    title: 'Virtual Meetings & Communication',
    detail: 'Zoom, Google Meet, Teams, professionalism',
  },
];

const TrainingSection = () => (
  <section id="training" className="section section-dark fade-in">
    <div className="shell">
      <h2>Business Digital Skills Training</h2>
      <p className="section-intro">Practical training programmes designed to improve adoption and daily execution.</p>
      <div className="card-grid three-up">
        {trainingAreas.map((area) => (
          <article key={area.title} className="card card-dark">
            <h3>{area.title}</h3>
            <p>{area.detail}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TrainingSection;
