import React from 'react';
import Link from 'next/link';

export default function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "Laser Physics & Safety",
      description: "Understand laser principles, device safety, skin interaction and professional treatment protocols.",
      duration: "4 Weeks",
      level: "Foundation"
    },
    {
      id: 2,
      title: "Skin Anatomy & Aesthetic Science",
      description: "Build a strong foundation in skin structure, ageing, concerns and clinical assessment.",
      duration: "6 Weeks",
      level: "Core"
    },
    {
      id: 3,
      title: "Advanced Aesthetic Practice",
      description: "Learn treatment planning, consultation flow and refined aesthetic decision-making.",
      duration: "8 Weeks",
      level: "Advanced"
    }
  ];

  return (
    <section className="courses-section section-padding" id="courses">
      <div className="container">
        <div className="section-head">
          <span className="badge badge-gold">Elite Aesthetic Education</span>
          <h2 className="title-section">Featured Training Programs</h2>
          <p>
            Explore foundational and advanced programs built to help practitioners understand the science, safety and artistry behind aesthetic excellence.
          </p>
        </div>

        <div className="courses-grid">
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <div className="course-meta">
                <span className="badge">{course.duration}</span>
                <span className="badge badge-gold">{course.level}</span>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{course.description}</p>
              <Link href="#course-details" className="btn btn-outline" style={{ width: '100%' }}>View Curriculum</Link>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link href="#all-courses" className="btn btn-primary-gold">Explore All Programs</Link>
        </div>
      </div>
    </section>
  );
}
