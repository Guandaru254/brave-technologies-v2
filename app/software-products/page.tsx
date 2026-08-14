import Link from 'next/link';

export default function SoftwareProductsPage() {
  const softwareProducts = [
    {
      name: "ZOZAPRIME",
      tag: "Flagship Event & Ticketing Engine",
      url: "https://zozaprime.com",
      desc: "Our decentralized event-ticketing and transaction platform engineered specifically for the African creative industry, ensuring data sovereignty, seamless M-Pesa payouts, and secure fan engagement.",
      features: [
        "Decentralized Event-Ticketing & Management",
        "Secure M-Pesa & Card Gateway Integration",
        "Real-Time Analytics & Attendee Tracking",
        "Optimized for High-Traffic Cultural Events"
      ],
      external: true
    },
    {
      name: "LegalBeat IP Engine",
      tag: "Cryptographic Certificate System",
      desc: "An advanced intellectual property affidavit engine designed to generate immutable cryptographic certificates for song assets, beats, and digital creations.",
      features: [
        "Cryptographic Hash Generation for Audio/Media",
        "Automated Ownership & Timestamp Verification",
        "Downloadable Legal Affidavit Certificates",
        "Secure Django Backend & Database Architecture"
      ],
      external: false
    },
    {
      name: "Automated Royalty Split-Sheets",
      tag: "Fintech & Creator Economy",
      desc: "Smart financial routing engines that automate split-sheet calculations and direct payouts among producers, songwriters, and publishers upon every stream or transaction.",
      features: [
        "Transparent Multi-Party Royalty Splitting",
        "Automated Ledger & Disbursement Logs",
        "Reduced Friction for Collaborative Projects",
        "Custom API Integrations for Music Labels"
      ],
      external: false
    }
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-950 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-semibold tracking-wider uppercase">
            Software Products & Innovations
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            Proprietary Software Built for Scale & Data Sovereignty.
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Explore our suite of specialized digital engines, ticketing platforms, and cryptographic tools engineered to solve complex operational challenges across Africa.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {softwareProducts.map((prod, idx) => (
            <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between hover:border-black transition-all shadow-sm">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-zinc-200/60 text-zinc-800 text-xs font-semibold mb-4">
                  {prod.tag}
                </span>
                <h3 className="text-2xl font-bold mb-3">{prod.name}</h3>
                <p className="text-zinc-600 text-sm mb-6 leading-relaxed">{prod.desc}</p>
                <div className="border-t border-zinc-200 pt-5 mb-8">
                  <p className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-3">Key Capabilities:</p>
                  <ul className="space-y-2.5">
                    {prod.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-xs text-zinc-700 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-black mt-1 shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {prod.external ? (
                <a 
                  href={prod.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-black text-white font-medium py-3.5 rounded-full hover:bg-zinc-800 transition-colors text-center text-xs tracking-wide uppercase block"
                >
                  Visit ZOZAPRIME ↗
                </a>
              ) : (
                <Link 
                  href="/contact" 
                  className="w-full bg-black text-white font-medium py-3.5 rounded-full hover:bg-zinc-800 transition-colors text-center text-xs tracking-wide uppercase block"
                >
                  Request Integration →
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Enterprise Software CTA */}
        <section className="bg-black text-white rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Software Solution?</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-sm">
            We architect and deploy custom full-stack web applications, decentralized ledger engines, and institutional portals tailored to your specific operational roadmap.
          </p>
          <Link href="/contact" className="inline-block bg-white text-black font-medium px-8 py-4 rounded-full hover:bg-zinc-200 transition-all text-sm tracking-wide">
            Discuss Your Software Project →
          </Link>
        </section>
      </div>
    </main>
  );
}