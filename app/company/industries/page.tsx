import Link from 'next/link';

export default function IndustriesPage() {
  const verticals = [
    {
      title: "Creatives, Music Labels & Artists",
      tag: "Entertainment & IP",
      desc: "Specialized decentralized fintech engines, automated split-sheet systems, digital copyright affidavits (LegalBeat), and ticketing platforms (ZOZAPRIME) designed to empower the African creative industry.",
      features: [
        "Automated Royalty Split-Sheet Calculators",
        "Cryptographic Song Asset Certificates",
        "Event Ticketing & Fan Engagement Portals",
        "Custom Artist Branding & Web Presence"
      ]
    },
    {
      title: "NGOs, Foundations & Institutions",
      tag: "Impact & Governance",
      desc: "Secure, highly reliable digital infrastructure, custom web portals, transparent reporting systems, and institutional software tailored for foundations and non-profit organizations.",
      features: [
        "Secure Custom Web Portals & CMS",
        "Institutional Data Management Systems",
        "Impact Tracking & Public Reporting Tools",
        "Strict Security & Compliance Standards"
      ]
    },
    {
      title: "E-Commerce Enterprises (e.g., Furniture & Retail)",
      tag: "High-Conversion Retail",
      desc: "High-performance online storefronts built on Next.js and WordPress, integrated with seamless M-Pesa checkout flows, inventory management, and automated digital marketing.",
      features: [
        "Lightning-Fast E-Commerce Architecture",
        "Secure M-Pesa & Card Payment Gateways",
        "Advanced Product Catalog & Filtering",
        "Google Ads & SEO Conversion Optimization"
      ]
    },
    {
      title: "Schools & Educational Institutions",
      tag: "Education & EdTech",
      desc: "Digital portals, student management systems, admissions workflows, and high-impact digital marketing strategies designed to boost enrollment and institutional prestige.",
      features: [
        "Student Portal & Fee Payment Integration",
        "Admissions & Enrollment Lead Funnels",
        "Institutional Website Redesigns",
        "Targeted Local SEO & Parent Outreach"
      ]
    },
    {
      title: "Restaurants & Hospitality",
      tag: "Food & Leisure",
      desc: "Immersive brand experiences, digital reservation portals, online menu ordering systems, and localized digital marketing campaigns for lounges, hotels, and dining establishments.",
      features: [
        "Online Table Booking & Reservation Systems",
        "Digital Menu Platforms & QR Integration",
        "Local SEO & Google Maps Dominance",
        "Social Media Growth & Creator Collaborations"
      ]
    },
    {
      title: "Logistics, Transport & Supply Chain",
      tag: "Operations & Fleet",
      desc: "Robust dispatch workflows, custom tracking systems, and high-conversion web platforms engineered for transport, freight, and logistics enterprises across East Africa.",
      features: [
        "Custom Tracking & Booking Interfaces",
        "Automated Inbound Lead Generation",
        "Fleet & Enterprise Software Solutions",
        "Performance-Driven Google Ads Campaigns"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-950 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-semibold tracking-wider uppercase">
            Industry Segmentations
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            Specialized Digital Engineering by Sector.
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed">
            We deliver tailored software architectures and growth strategies built specifically for the unique commercial demands of diverse industries across East Africa.
          </p>
        </div>

        {/* Verticals Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {verticals.map((vert, idx) => (
            <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between hover:border-black transition-all shadow-sm">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-zinc-200/60 text-zinc-800 text-xs font-semibold mb-4">
                  {vert.tag}
                </span>
                <h3 className="text-xl font-bold mb-3">{vert.title}</h3>
                <p className="text-zinc-600 text-sm mb-6 leading-relaxed">{vert.desc}</p>
                <div className="border-t border-zinc-200 pt-5 mb-6">
                  <p className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-3">Core Capabilities:</p>
                  <ul className="space-y-2.5">
                    {vert.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-xs text-zinc-700 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-black mt-1 shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link href="/contact" className="w-full bg-black text-white font-medium py-3 rounded-full hover:bg-zinc-800 transition-colors text-center text-xs tracking-wide uppercase">
                Consult Our Team →
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <section className="bg-black text-white rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Operating in a Different Industry?</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-sm">
            Our software engineering and digital marketing expertise adapts to any commercial landscape. Let's discuss your custom sector requirements.
          </p>
          <Link href="/contact" className="inline-block bg-white text-black font-medium px-8 py-4 rounded-full hover:bg-zinc-200 transition-all text-sm tracking-wide">
            Request Custom Consultation →
          </Link>
        </section>
      </div>
    </main>
  );
}