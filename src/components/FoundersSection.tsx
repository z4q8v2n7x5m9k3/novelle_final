import React from 'react';

export default function FoundersSection() {
  return (
    <section style={{ background: '#FAF6F0', padding: '120px 24px' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: '#FFFFFF',
            padding: '8px 16px',
            borderRadius: '100px',
            fontSize: '11px',
            letterSpacing: '2px',
            fontWeight: 600,
            color: '#633b2c',
            textTransform: 'uppercase',
            fontFamily: '"General Sans", sans-serif',
            marginBottom: '24px',
            border: '1px solid rgba(197, 160, 89, 0.3)',
            boxShadow: '0 4px 12px rgba(99, 59, 44, 0.04)'
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
            MEET OUR FOUNDERS
          </span>
          <h2 style={{
            fontFamily: '"Hedvig Letters Serif", Georgia, serif',
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            color: '#633b2c',
            fontWeight: 400,
            lineHeight: 1.2,
            margin: '0 0 16px 0',
            letterSpacing: '-0.02em'
          }}>
            Expertise Behind Novelle
          </h2>
          <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '18px', color: '#633b2c', fontWeight: 500, margin: '0 0 12px 0' }}>
            A Vision for Better Aesthetic Education
          </p>
          <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15px', color: '#8c776e', lineHeight: 1.7, maxWidth: '760px', margin: '0 auto 8px auto', fontWeight: 500 }}>
            Al Novelle Advanced Aesthetic Training LLC was founded by Dr. Seeta Yadav and Dr. Azaiba Kara, two experienced professionals and educators united by a shared vision: to raise the standard of practical education in aesthetics, beauty, and laser technologies.
          </p>
          <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15px', color: '#8c776e', lineHeight: 1.7, maxWidth: '760px', margin: '0 auto 8px auto', fontWeight: 500 }}>
            Having worked closely with healthcare professionals, aesthetic practitioners, and leading technologies in the UAE, they recognised the need for training that goes beyond theory — training that builds real skills, confidence, safety awareness, and professional competence.
          </p>
          <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15px', color: '#8c776e', lineHeight: 1.7, maxWidth: '760px', margin: '0 auto', fontWeight: 500 }}>
            At Novelle, their philosophy is simple: education should prepare you for real practice.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '64px' }}>
          <div style={{ background: '#FFFFFF', borderRadius: '32px', padding: '48px 40px', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: '0 8px 30px rgba(74, 55, 40, 0.03)' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #845e35, #c5a059)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: '#FFFFFF', fontSize: '28px', fontWeight: 400, fontFamily: '"Hedvig Letters Serif", Georgia, serif', letterSpacing: '-0.01em' }}>
              SY
            </div>
            <h3 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: '24px', color: '#633b2c', fontWeight: 400, margin: '0 0 4px 0', letterSpacing: '-0.01em' }}>
              Dr. Seeta Yadav
            </h3>
            <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '13px', color: '#c5a059', fontWeight: 600, margin: '0 0 24px 0', letterSpacing: '0.5px' }}>
              Founder &amp; Academic Director
            </p>
            <div style={{ height: '1px', background: 'rgba(197, 160, 89, 0.2)', marginBottom: '24px' }} />
            <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15px', color: '#8c776e', lineHeight: 1.7, margin: '0 0 16px 0', fontWeight: 500 }}>
              Dr. Seeta Yadav is an experienced aesthetics and laser educator with a strong background in clinical practice, aesthetic technologies, and professional training.
            </p>
            <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15px', color: '#8c776e', lineHeight: 1.7, margin: '0 0 16px 0', fontWeight: 500 }}>
              As Academic Director of Novelle, she leads the development of training programmes with a focus on structured learning, evidence-informed practice, patient safety, and hands-on skill development.
            </p>
            <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15px', color: '#8c776e', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
              Her passion is helping healthcare and aesthetic professionals transform knowledge into confidence and practical capability.
            </p>
          </div>
          <div style={{ background: '#FFFFFF', borderRadius: '32px', padding: '48px 40px', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: '0 8px 30px rgba(74, 55, 40, 0.03)' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #4A3728, #845e35)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: '#FFFFFF', fontSize: '28px', fontWeight: 400, fontFamily: '"Hedvig Letters Serif", Georgia, serif', letterSpacing: '-0.01em' }}>
              AK
            </div>
            <h3 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: '24px', color: '#633b2c', fontWeight: 400, margin: '0 0 4px 0', letterSpacing: '-0.01em' }}>
              Dr. Azaiba Kara
            </h3>
            <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '13px', color: '#c5a059', fontWeight: 600, margin: '0 0 24px 0', letterSpacing: '0.5px' }}>
              Founder &amp; Managing Director
            </p>
            <div style={{ height: '1px', background: 'rgba(197, 160, 89, 0.2)', marginBottom: '24px' }} />
            <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15px', color: '#8c776e', lineHeight: 1.7, margin: '0 0 16px 0', fontWeight: 500 }}>
              Dr. Azaiba Kara is an experienced aesthetics and laser professional with more than a decade of experience in the UAE. She has extensive experience in aesthetic and laser technologies and has trained professionals in the safe and effective application of advanced aesthetic devices.
            </p>
            <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15px', color: '#8c776e', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
              As Managing Director, she combines her clinical and training experience with Novelle's vision of creating a professional, practical, and learner-focused training environment.
            </p>
          </div>
        </div>
        <div style={{ background: '#1E140F', borderRadius: '32px', padding: '56px 48px', textAlign: 'center' }}>
          <p style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#FFFFFF', fontWeight: 400, lineHeight: 1.5, margin: '0 0 24px 0', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            &ldquo;To make Novelle a trusted destination for advanced aesthetic education — where knowledge meets hands-on experience, safety meets innovation, and professionals gain the confidence to grow in their careers.&rdquo;
          </p>
          <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14px', color: '#c5a059', fontWeight: 600, letterSpacing: '1px', margin: 0 }}>
            Elevating Skills. Empowering Futures.
          </p>
        </div>
      </div>
    </section>
  );
}
