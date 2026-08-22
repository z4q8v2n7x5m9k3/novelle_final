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
          <div className="uae-kicker"><span /> BORN IN ABU DHABI</div>
          <h2>Born in Abu Dhabi.<br /><em>Built for Excellence.</em></h2>
          <p>
            Novelle is rooted in the UAE&apos;s culture of ambition, innovation, and quality. From Abu Dhabi,
            we aim to develop confident professionals through structured aesthetic education, practical
            learning, and a commitment to higher standards.
          </p>
          <div className="uae-signature">
            <span>ABU DHABI</span><span className="uae-signature-line" /><span>UNITED ARAB EMIRATES</span>
          </div>
        </div>

        <div className="uae-principles scroll-reveal reveal-from-right reveal-delay-1">
          <div className="uae-watermark" aria-hidden="true">AD</div>
          {principles.map(([number, label]) => (
            <div className="uae-principle" key={number}>
              <span>{number}</span><h3>{label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
