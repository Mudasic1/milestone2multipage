"use client";

import './useCases.css';

export default function UseCases() {
  return (
    <section className="use-cases-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Expert Digital Marketing Services</h1>
          <p>
            Elevate your business with our comprehensive digital marketing services. From SEO to paid 
            advertising, we ensure measurable success for our clients.
          </p>
          <button>Read Our SEO Strategy</button>
        </div>
        
      </div>

      {/* How We Work: SEO Process */}
      <div className="seo-process">
        <h2>How We Work: SEO Process</h2>
        <div className="process-steps">
          {[
            { id: 1, title: 'Website Audit & Analysis', description: 'We evaluate your website’s health and identify improvement areas.' },
            { id: 2, title: 'Keyword Research & Strategy', description: 'We develop a keyword plan aligned with your business goals.' },
            { id: 3, title: 'On-Page Optimization', description: 'We ensure your website content is optimized for maximum impact.' },
            { id: 4, title: 'Content Creation & Optimization', description: 'We craft engaging, SEO-friendly content tailored to your audience.' },
            { id: 5, title: 'Link Building', description: 'We build quality backlinks to enhance your domain authority.' },
            { id: 6, title: 'Monitoring & Reporting', description: 'We track progress and provide transparent reports for all activities.' },
          ].map((step) => (
            <div key={step.id} className="process-step">
              <div className="step-icon">{`0${step.id}`}</div>
              <div className="step-details">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div className="use-cases">
        <h2>Use Cases</h2>
        <div className="cases-grid">
          {[
            { title: 'E-commerce', description: 'Enhance visibility and drive conversions with targeted SEO and PPC campaigns.', link: '#' },
            { title: 'Local Restaurants', description: 'Improve local SEO and reviews to boost foot traffic and online orders.', link: '#' },
            { title: 'Healthcare Providers', description: 'Optimize content and local SEO to acquire more patients effectively.', link: '#' },
          ].map((caseItem, index) => (
            <div key={index} className="case-card">
              <h3>{caseItem.title}</h3>
              <p>{caseItem.description}</p>
              <a href={caseItem.link}>Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
