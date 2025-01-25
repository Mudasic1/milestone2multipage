"use client";

import './about.css';

export default function Abbout() {
  return (
    <section className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Together for Success</h1>
          <p>
            At Postivus, we help businesses grow by combining expertise, insights, and data-driven strategies. Together, we build a future of shared success.
          </p>
        </div>
        <div className="hero-image">
          
        </div>
      </div>

      {/* Impact Section */}
      <div className="impact-section">
        <h2>Our Impact in Numbers</h2>
        <div className="impact-stats">
          <div className="stat">
            <h3>8+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Experts</p>
          </div>
          <div className="stat">
            <h3>100+</h3>
            <p>Successful Campaigns</p>
          </div>
          <div className="stat">
            <h3>20+</h3>
            <p>Industry Awards</p>
          </div>
          <div className="stat">
            <h3>500%</h3>
            <p>ROI for our clients</p>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="journey-section">
        <h2>Our Journey</h2>
        <p>
          From humble beginnings to industry leaders, discover how Postivus has evolved to drive success for businesses worldwide.
        </p>
        <div className="timeline">
          {/* Timeline Items */}
          <div className="timeline-item">
            <h3>2019</h3>
            <div className="timeline-box">
              <h4>The Beginning</h4>
              <p>Postivus was founded to help businesses achieve their goals through data-driven solutions.</p>
            </div>
          </div>
          <div className="timeline-item">
            <h3>2021</h3>
            <div className="timeline-box">
              <h4>Industry Recognition</h4>
              <p>Postivus was praised among top firms for innovation and excellence in marketing strategies.</p>
            </div>
          </div>
          <div className="timeline-item">
            <h3>2023</h3>
            <div className="timeline-box">
              <h4>Innovation and Growth</h4>
              <p>With over 50 experts, we expanded into new industries, achieving exceptional results for clients worldwide.</p>
            </div>
          </div>
          <div className="timeline-item">
            <h3>2024</h3>
            <div className="timeline-box">
              <h4>Leading the Future</h4>
              <p>Postivus is shaping the future of AI-powered solutions to empower businesses across industries.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
