import React from 'react';

const principles = [
  ['01', 'UAE-Based Academy'],
  ['02', 'Practical Aesthetic Education'],
  ['03', 'Safety-Led Learning'],
  ['04', 'Professional Excellence'],
];

export default function UAEIdentity() {
  return (
    <section className="uae-editorial-section">
      <div className="container uae-editorial-shell">
        <div className="uae-editorial-copy scroll-reveal reveal-from-left">
          <span className="section-eyebrow">BORN IN ABU DHABI</span>
          <h2>Born in Abu Dhabi.<br />Built for Excellence.</h2>
          <p>
            Novelle is rooted in the UAE&apos;s culture of ambition, innovation, and quality. From Abu Dhabi,
            we aim to develop confident professionals through structured aesthetic education, practical
            learning, and a commitment to higher standards.
          </p>
        </div>

        <div className="uae-brand-card scroll-reveal reveal-from-right reveal-delay-1">
          <div className="uae-brand-lockup">
            <img src="/brand/the-emirates-nation-brand.jpeg" alt="The Emirates nation brand" />
            <div>
              <span>OUR HOME</span>
              <strong>Abu Dhabi, UAE</strong>
            </div>
          </div>
          <div className="uae-principles">
            {principles.map(([number, label]) => (
              <div className="uae-principle" key={number}>
                <span>{number}</span><h3>{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
