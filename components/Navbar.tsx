'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200">
      {/* Top Contact Bar */}
      <div className="bg-white text-zinc-600 text-xs py-2 px-8 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact Numbers & Email */}
          <div className="flex flex-wrap items-center gap-6">
            <a href="tel:0793595290" className="flex items-center gap-2 hover:text-black transition-colors">
              <span className="text-zinc-400">📞</span>
              <span>(+254) 0793 595 290</span>
            </a>
            <a href="mailto:info@bravetechnologies.co.ke" className="flex items-center gap-2 hover:text-black transition-colors">
              <span className="text-zinc-400">✉️</span>
              <span>info@bravetechnologies.co.ke</span>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-5 text-zinc-500 font-medium">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
              Facebook
            </a>
            <span className="text-zinc-300">/</span>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
              Twitter
            </a>
            <span className="text-zinc-300">/</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
              LinkedIn
            </a>
            <span className="text-zinc-300">/</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center font-bold text-white text-lg">
            b
          </div>
          <span className="font-semibold text-sm tracking-widest text-zinc-900 uppercase">Brave Technologies</span>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          
          {/* Company Dropdown */}
          <div className="relative py-4" onMouseEnter={() => setCompanyOpen(true)} onMouseLeave={() => setCompanyOpen(false)}>
            <button className="flex items-center gap-1.5 hover:text-black transition-colors">
              Company <span className={`text-xs transition-transform duration-200 ${companyOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>
            {companyOpen && (
              <div className="absolute top-full left-0 w-56 bg-white border border-zinc-200/80 rounded-2xl shadow-2xl p-2 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                <Link href="/company/about" className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 text-zinc-700 hover:text-black text-sm font-medium transition-colors flex items-center justify-between">
                  About us <span className="text-xs text-zinc-400">→</span>
                </Link>
                <Link href="/company/industries" className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 text-zinc-700 hover:text-black text-sm font-medium transition-colors flex items-center justify-between">
                  Industries <span className="text-xs text-zinc-400">→</span>
                </Link>
                <Link href="/company/portfolio" className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 text-zinc-700 hover:text-black text-sm font-medium transition-colors flex items-center justify-between">
                  Our Portfolio <span className="text-xs text-zinc-400">→</span>
                </Link>
                <Link href="/company/faqs" className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 text-zinc-700 hover:text-black text-sm font-medium transition-colors flex items-center justify-between">
                  FAQs <span className="text-xs text-zinc-400">→</span>
                </Link>
              </div>
            )}
          </div>

          <Link href="/services" className="hover:text-black transition-colors">Services</Link>
          <Link href="/packages" className="hover:text-black transition-colors">Packages</Link>
          <Link href="/software-products" className="hover:text-black transition-colors">Software Products</Link>
          <Link href="/hardware-products" className="hover:text-black transition-colors">Hardware Products</Link>
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
        </nav>

        {/* CTA Button */}
        <div>
          <Link href="/services" className="bg-black text-white font-medium px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-all text-xs tracking-wide uppercase shadow-sm">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}