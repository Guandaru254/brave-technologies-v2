import Link from 'next/link';

export default function PackagesPage() {
  const packagesList = [
    {
      name: "Startup Ignite Bundle",
      price: "KES 120,000",
      tag: "Best for Startups",
      desc: "The essential digital launchpad for emerging businesses. Designed to establish your online presence rapidly and professionally.",
      features: [
        "Professional Business Website (Next.js/WordPress)",
        "Foundational Local SEO & Google Business Setup",
        "Initial Social Media Branding & Asset Setup",
        "Secure M-Pesa / Card Payment Gateway Integration",
        "1 Month Support & Maintenance"
      ]
    },
    {
      name: "Business Booster Bundle",
      price: "KES 210,000",
      tag: "Most Popular",
      desc: "Our flagship growth package combining custom web architecture, comprehensive SEO, and targeted digital marketing campaigns to scale revenue.",
      features: [
        "Advanced Custom Web Application / E-Commerce Store",
        "Comprehensive SEO & AI Search Optimization (GEO)",
        "Google Ads & PPC Management (Initial Setup)",
        "Social Media Content Strategy & Management",
        "Priority 24/7 Technical Support & Analytics"
      ]
    },
    {
      name: "Enterprise Digital Infrastructure",
      price: "Custom Pricing",
      tag: "Institutional Scale",
      desc: "Tailored software engineering, automated split-sheet systems, custom API integrations, and dedicated digital marketing teams for large enterprises.",
      features: [
        "Full-Stack Custom Software Development",
        "Advanced Security & Database Architecture",
        "Dedicated Engineering & Growth Consultants",
        "Custom SLA & Enterprise Support",
        "Multi-region Hosting & DevOps Management"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-950 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-semibold tracking-wider uppercase">
            Productized Pricing & Bundles
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            Strategic Packages Built for Measurable Growth.
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Transparent, fixed-price digital marketing bundles and engineering packages designed to give your business an unfair advantage in East Africa.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {packagesList.map((pkg, idx) => (
            <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between hover:border-black transition-all shadow-sm">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-zinc-200/60 text-zinc-800 text-xs font-semibold mb-4">
                  {pkg.tag}
                </span>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-black mb-4">{pkg.price}</p>
                <p className="text-zinc-600 text-sm mb-8 leading-relaxed">{pkg.desc}</p>
                <div className="border-t border-zinc-200 pt-6 mb-8">
                  <p className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">What's Included:</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-xs text-zinc-700 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-black mt-1 shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link href="/contact" className="w-full bg-black text-white font-medium py-3.5 rounded-full hover:bg-zinc-800 transition-colors text-center text-xs tracking-wide uppercase">
                Select Package →
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ / Guarantee Section */}
        <section className="bg-zinc-50 border border-zinc-200 rounded-3xl p-12 text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Need a Custom Payment Structure?</h2>
          <p className="text-zinc-600 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            We work closely with growing businesses and institutional partners to structure flexible engagement terms tailored to project milestones and budgets.
          </p>
          <Link href="/contact" className="inline-block border border-black text-black font-medium px-8 py-3.5 rounded-full hover:bg-black hover:text-white transition-all text-xs tracking-wide uppercase">
            Talk to Our Team
          </Link>
        </section>
      </div>
    </main>
  );
}