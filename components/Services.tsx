"use client";

import './services.css';

export default function SServices() {
  return (
    <section className="services-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Expert Digital Marketing Services</h1>
          <p>
            Transform your business with our tailored digital marketing strategies. 
            From SEO to branding, we help you achieve unparalleled success.
          </p>
        </div>
       
      </div>

      {/* Highlight Section */}
      <div className="highlight-section">
        <div className="highlight-box">
          <h3>Looking to Boost Your Online Presence?</h3>
          <p>Discover how our expert services can make a difference in your business growth.</p>
          <button>Read Our SEO Strategy</button>
        </div>
      </div>

      {/* SEO Process Section */}
      <div className="seo-process">
        <h2>How We Work: SEO Process</h2>
        <div className="process-steps">
          {[
            { step: '01', title: 'Website Audit & Analysis', description: 'Thoroughly examine your website for areas of improvement and optimization.' },
            { step: '02', title: 'Keyword Research & Strategy', description: 'Develop a strategy based on competitive keywords tailored for your goals.' },
            { step: '03', title: 'On-Page Optimization', description: 'Ensure content and technical aspects align with SEO best practices.' },
            { step: '04', title: 'Content Creation & Optimization', description: 'Create high-quality content designed to engage and rank well.' },
            { step: '05', title: 'Link Building', description: 'Generate authoritative backlinks to boost your online credibility.' },
            { step: '06', title: 'Monitoring & Reporting', description: 'Track progress and provide comprehensive reports on SEO performance.' },
          ].map((item, index) => (
            <div className="step" key={index}>
              <div className="step-number">{item.step}</div>
              <div className="step-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="use-cases">
        <h2>Use Cases</h2>
        <div className="cases">
          {[
            { title: 'E-Commerce', description: 'Boost sales with SEO-driven strategies that attract your target audience.' },
            { title: 'Local Businesses', description: 'Dominate your local market with proven local SEO techniques.' },
            { title: 'Brand/Personal Promotion', description: 'Create a strong digital presence to grow your influence and reach.' },
          ].map((caseItem, index) => (
            <div className="case" key={index}>
              <h3>{caseItem.title}</h3>
              <p>{caseItem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
