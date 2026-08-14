import Link from 'next/link';

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Website Design & Development",
      price: "From KES 85,000",
      desc: "High-performance Next.js & WordPress web applications, corporate portals, and custom e-commerce stores integrated with secure M-Pesa checkout systems.",
      features: ["Custom UI/UX Architecture", "M-Pesa & Card Payment Gateways", "Lightning Fast Core Web Vitals", "Mobile-Optimized Responsive Design"]
    },
    {
      title: "SEO & AI Search Optimization (GEO)",
      price: "KES 65,000 / mo",
      desc: "Dominate search engine results and AI recommendation platforms like ChatGPT, Gemini, and Perplexity with advanced technical and semantic optimization.",
      features: ["Advanced Keyword & Intent Targeting", "AI Search Engine Positioning (GEO)", "Technical Site Audits & Schema", "Monthly Performance & Ranking Reports"]
    },
    {
      title: "Google Ads & PPC Management",
      price: "KES 50,000 / mo",
      desc: "Immediate, targeted PPC campaigns engineered to capture high-intent buyers, drive qualified inbound leads, and deliver measurable return on ad spend (ROAS).",
      features: ["Keyword Research & Ad Copywriting", "Landing Page Conversion Tuning", "Conversion Tracking & Analytics", "Continuous Bid & Budget Optimization"]
    },
    {
      title: "Social Media & Brand Growth",
      price: "KES 45,000 / mo",
      desc: "Comprehensive social media management, content creation, and community engagement designed to elevate your brand presence across East Africa.",
      features: ["Content Calendar & Asset Production", "Community Management & Growth", "Paid Social Ad Campaigns", "Monthly Analytics & Insights"]
    }
  ];

  const bundles = [
    {
      name: "Startup Ignite Bundle",
      price: "KES 120,000",
      desc: "The essential digital launchpad for emerging businesses. Includes a professional business website, foundational local SEO, and initial social media setup.",
      tag: "Best for Startups"
    },
    {
      name: "Business Booster Bundle",
      price: "KES 210,000",
      desc: "Our flagship growth package combining custom web development, comprehensive SEO, Google Ads management, and high-impact digital marketing campaigns.",
      tag: "Most Popular"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-950 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-semibold tracking-wider uppercase">
            Services & Transparent Pricing
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            Engineered for Scale & Measurable ROI.
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Explore our productized digital marketing services and institutional software packages designed to accelerate business growth across East Africa.
          </p>
        </div>

        {/* Individual Services Grid */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Individual Service Tiers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((service, idx) => (
              <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between hover:border-black transition-all shadow-sm">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <span className="text-sm font-semibold bg-zinc-200/70 text-zinc-900 px-3 py-1 rounded-full">{service.price}</span>
                  </div>
                  <p className="text-zinc-600 text-sm mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-xs text-zinc-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className="w-full bg-black text-white font-medium py-3 rounded-full hover:bg-zinc-800 transition-colors text-center text-xs tracking-wide uppercase">
                  Request Service →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Bundles Section */}
        <section className="mb-24 border-t border-zinc-200 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Strategic Marketing Bundles</h2>
            <p className="text-zinc-600 text-sm">All-in-one packages built to maximize value and fast-track digital dominance.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bundles.map((bundle, idx) => (
              <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between hover:border-black transition-all shadow-sm">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-zinc-200/60 text-zinc-800 text-xs font-semibold mb-4">
                    {bundle.tag}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{bundle.name}</h3>
                  <p className="text-3xl font-bold text-black mb-4">{bundle.price}</p>
                  <p className="text-zinc-600 text-sm mb-8 leading-relaxed">{bundle.desc}</p>
                </div>
                <Link href="/contact" className="w-full bg-black text-white font-medium py-3.5 rounded-full hover:bg-zinc-800 transition-colors text-center text-sm">
                  Get Started with Bundle →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-black text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Enterprise Solution?</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-sm">
            We build custom software architectures, decentralized fintech tools, and tailored enterprise workflows. Let's discuss your project.
          </p>
          <Link href="/contact" className="inline-block bg-white text-black font-medium px-8 py-4 rounded-full hover:bg-zinc-200 transition-all text-sm tracking-wide">
            Schedule a Consultation →
          </Link>
        </section>
      </div>
    </main>
  );
}