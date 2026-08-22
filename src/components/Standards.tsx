import React from 'react';

export default function Standards() {
  return (
    <section className="section standards">
      <div className="container">
        <div className="standards-header">
          <h2 className="section-title">Real results, real confidence</h2>
        </div>

        <div className="bento-grid">
          {/* Large Before/After Card */}
          <div className="bento-item bento-large glass-panel">
            <div className="bento-content">
              <h3>Before & After</h3>
              <p>See the transformation achieved with our signature acne treatment protocol over 12 weeks.</p>
            </div>
            <div className="ba-slider">
               <div className="ba-image-container">
                  <div className="ba-image before" style={{backgroundImage: "url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800')"}}>
                    <span className="ba-label">Before</span>
                  </div>
                  <div className="ba-image after" style={{backgroundImage: "url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800')", width: '50%'}}>
                    <span className="ba-label">After</span>
                  </div>
                  <div className="ba-handle"></div>
               </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bento-item bento-stat glass-panel">
             <div className="stat-number">10k+</div>
             <div className="stat-label">Happy Patients</div>
          </div>

          {/* Testimonial Snippet Card */}
          <div className="bento-item bento-testimonial glass-panel">
             <div className="quote-icon">"</div>
             <p className="testimonial-text">"The team completely transformed my skin. I've never felt more confident."</p>
             <p className="testimonial-author">- Emma T.</p>
          </div>
          
          {/* Feature Card */}
          <div className="bento-item bento-feature glass-panel" style={{backgroundImage: "url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800')"}}>
             <div className="feature-overlay">
                <h3>Award-winning Care</h3>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
