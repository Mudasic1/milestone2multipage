"use client";

import Link from 'next/link';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="/logo.png" alt="Logo" className="footer-logo-img" />
          <span className="footer-brand-name">Postivus</span>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <Link href="/about" className="footer-link">About Us</Link>
          <Link href="/services" className="footer-link">Services</Link>
          <Link href="/usecases" className="footer-link">Use Cases</Link>
          <Link href="/pricing" className="footer-link">Pricing</Link>
          <Link href="/blog" className="footer-link">Blog</Link>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">
          © {new Date().getFullYear()} Postivus. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
