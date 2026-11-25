'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const companyLinks = [
  { label: 'About us', href: '/company/about' },
  { label: 'Industries', href: '/company/industries' },
  { label: 'Our Portfolio', href: '/company/portfolio' },
  { label: 'FAQs', href: '/company/faqs' },
];

const primaryLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Packages', href: '/packages' },
  { label: 'Software Products', href: '/software-products' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const closeAllMenus = () => {
    setCompanyOpen(false);
    setMobileOpen(false);
    setMobileCompanyOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" onClick={closeAllMenus} className="flex shrink-0 items-center">
          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg sm:h-16 sm:w-16">
            <Image
              src="/logo.jpg"
              alt="Brave Technologies Logo"
              fill
              sizes="(max-width: 640px) 48px, 64px"
              className="object-cover"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 lg:flex xl:gap-8">
          <Link href="/" className="whitespace-nowrap transition-colors hover:text-black">
            Home
          </Link>

          {/* Desktop Company Dropdown */}
          <div
            className="relative py-4"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              type="button"
              onClick={() => setCompanyOpen((prev) => !prev)}
              aria-expanded={companyOpen}
              className="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-black"
            >
              Company
              <span
                className={`text-xs transition-transform duration-200 ${
                  companyOpen ? 'rotate-180' : ''
                }`}
              >
                ▾
              </span>
            </button>

            {companyOpen && (
              <div className="animate-in fade-in slide-in-from-top-2 absolute top-full left-0 flex w-56 flex-col gap-1 rounded-2xl border border-zinc-200/80 bg-white p-2 shadow-2xl duration-150">
                {companyLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setCompanyOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-black"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-zinc-400">→</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/services" className="whitespace-nowrap transition-colors hover:text-black">
            Services
          </Link>
          <Link href="/packages" className="whitespace-nowrap transition-colors hover:text-black">
            Packages
          </Link>
          <Link
            href="/software-products"
            className="whitespace-nowrap transition-colors hover:text-black"
          >
            Software Products
          </Link>
          <Link href="/contact" className="whitespace-nowrap transition-colors hover:text-black">
            Contact
          </Link>
        </nav>

        {/* Right Actions: Desktop CTA + Mobile Hamburger Button */}
        <div className="flex shrink-0 items-center gap-2.5">
          <Link
            href="/services"
            className="hidden whitespace-nowrap rounded-full bg-black px-5 py-2.5 text-xs font-medium uppercase tracking-wide text-white shadow-sm transition-all hover:bg-zinc-800 lg:inline-flex"
          >
            Get Started
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-900 transition-colors hover:bg-zinc-100 lg:hidden"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 shadow-lg lg:hidden sm:px-6">
          <nav className="flex flex-col space-y-1 text-base font-medium text-zinc-800">
            <Link
              href="/"
              onClick={closeAllMenus}
              className="rounded-xl px-3 py-2.5 transition-colors hover:bg-zinc-100"
            >
              Home
            </Link>

            {/* Mobile Company Accordion */}
            <div className="rounded-xl border border-zinc-100 bg-zinc-50/60">
              <button
                type="button"
                onClick={() => setMobileCompanyOpen((prev) => !prev)}
                aria-expanded={mobileCompanyOpen}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left font-medium text-zinc-800 transition-colors hover:bg-zinc-100"
              >
                <span>Company</span>
                <span
                  className={`text-xs transition-transform duration-200 ${
                    mobileCompanyOpen ? 'rotate-180' : ''
                  }`}
                >
                  ▾
                </span>
              </button>

              {mobileCompanyOpen && (
                <div className="flex flex-col gap-1 px-3 pb-3 pt-1">
                  {companyLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeAllMenus}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-200/60 hover:text-black"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-zinc-400">→</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {primaryLinks.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeAllMenus}
                className="rounded-xl px-3 py-2.5 transition-colors hover:bg-zinc-100"
              >
                {item.label}
              </Link>
            ))}

            {/* Full-Width Mobile CTA Button */}
            <div className="pt-3">
              <Link
                href="/services"
                onClick={closeAllMenus}
                className="flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition-all hover:bg-zinc-800"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}