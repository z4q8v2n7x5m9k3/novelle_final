import React from 'react';

export default function Services() {
  const treatments = [
    {
      id: 1,
      title: "Acne & skin health",
      description: "Comprehensive treatments targeting the root causes of acne for lasting clear skin.",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Botox & fillers",
      description: "Subtle enhancements to restore volume and smooth fine lines.",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Laser treatments",
      description: "Advanced laser therapy for pigmentation, scarring, and skin resurfacing.",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Anti-aging",
      description: "Preventative and restorative treatments to maintain youthful vitality.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="section services" id="treatments">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Our treatments</h2>
          <p className="section-text">
            Discover our range of specialized dermatological and aesthetic services designed to bring out your best skin.
          </p>
        </div>

        <div className="accordion-container">
          {treatments.map((item, index) => (
            <div className="accordion-item" key={item.id}>
              <div className="accordion-content">
                <div className="accordion-number">0{index + 1}</div>
                <h3 className="accordion-title">{item.title}</h3>
                <p className="accordion-desc">{item.description}</p>
                <a href="#book" className="accordion-link">Book treatment →</a>
              </div>
              <div className="accordion-image" style={{backgroundImage: `url('${item.image}')`}}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
