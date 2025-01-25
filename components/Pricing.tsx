import React from "react";
import "./pricing.css";

const Priccing = () => {
  const faqs = [
    {
      question: "Are there any additional fees or charges that may apply?",
      answer: "Our pricing includes a wide range of digital marketing services, including website design and development, SEO, PPC management, and more. Additional charges may apply for services outside the scope of your selected plan. Contact us for the specific needs of your business.",
    },
    {
      question: "Can I change or cancel my plan at any time?",
      answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time with no additional charges.",
    },
    {
      question: "Do you offer a free trial or consultation?",
      answer: "Yes, we provide a free consultation to understand your business needs before starting the plan.",
    },
    {
      question: "How do you bill and invoice your clients?",
      answer: "Billing is done monthly, and detailed invoices are shared to ensure transparency.",
    },
    {
      question: "Are your services guaranteed to deliver results?",
      answer: "While we focus on providing the best strategies, results may vary depending on your industry and market conditions.",
    },
    {
      question: "Do you offer contract-based or monthly retainer-based pricing?",
      answer: "Both options are available, and we can customize a plan that suits your business requirements.",
    },
  ];

  return (
    <div className="pricing-container">
      {/* Header */}
      <div className="pricing-header">
        <h1>Pricing</h1>
        <p>
          Elevate Your Online Presence: Competitive Pricing for Exceptional
          Results
        </p>
      </div>

      {/* Pricing Plans */}
      <div className="pricing-plans">
        {[
          {
            title: "Basic Plan",
            price: "$500",
            features: [
              "Website optimization",
              "Reports sent via email",
              "Meeting support (2/month)",
              "Basic competitor analysis",
              "Email and phone support",
              "Initial SEO audit",
            ],
            button: "Get Started",
            buttonSecondary: "Request a quote",
          },
          {
            title: "Pro Plan",
            price: "$1000",
            features: [
              "Includes all from Basic Plan",
              "PPC management",
              "Dedicated project manager",
              "Email and phone support",
              "On-page SEO improvements",
              "Monthly updates",
            ],
            button: "Get Started",
            buttonSecondary: "Request a quote",
            popular: true,
          },
          {
            title: "Elite Plan",
            price: "$2000",
            features: [
              "Includes all from Pro Plan",
              "Comprehensive SEO strategy",
              "Custom content creation",
              "Detailed backlink building",
              "On-site optimization",
              "In-depth analytics reporting",
            ],
            button: "Request a quote",
          },
        ].map((plan, index) => (
          <div
            key={index}
            className={`plan-card ${plan.popular ? "popular-plan" : ""}`}
          >
            <h3>{plan.title}</h3>
            <h4>
              {plan.price} <span>/month</span>
            </h4>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>✔ {feature}</li>
              ))}
            </ul>
            <button className="primary-btn">{plan.button}</button>
            <button className="secondary-btn">{plan.buttonSecondary}</button>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <details key={index} className="faq-item">
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Priccing;
