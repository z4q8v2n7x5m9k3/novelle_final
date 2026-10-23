import React from 'react';

const principles = [
  ['01', 'Abu Dhabi Campus'],
  ['02', 'Supervised Workstations'],
  ['03', 'Accredited Curriculums'],
  ['04', 'Evidence-Based Practice'],
];

export default function UAEIdentity() {
  return (
    <section className="uae-editorial-section">
      <div className="container uae-editorial-shell">
        <div className="uae-editorial-copy scroll-reveal reveal-from-left">
          <span className="section-eyebrow">BORN IN ABU DHABI</span>
          <h2>Born in Abu Dhabi.<br />Built for Real Practice.</h2>
          <p>
            Al Novelle is rooted in the UAE&apos;s ambition for quality, medical rigor, and higher educational standards. Based in Abu Dhabi, we develop knowledgeable practitioners prepared for responsible clinical and salon environments.
          </p>
        </div>

        <div className="uae-brand-card scroll-reveal reveal-from-right reveal-delay-1">
          <div className="uae-card-heading">
            <span>OUR ACADEMY</span>
            <strong>Abu Dhabi, UAE</strong>
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
