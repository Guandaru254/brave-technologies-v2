import Link from 'next/link';

export default function Home() {
  const packages = [
    {
      name: "Website Design & Online Store",
      price: "KES 85,000",
      desc: "Custom WordPress & Next.js website with e-commerce functionality, M-Pesa integration, and SEO setup.",
      tag: "Most Popular",
      link: "/services"
    },
    {
      name: "SEO & AI Search Optimization",
      price: "KES 65,000 / mo",
      desc: "Improve visibility on Google, ChatGPT, Gemini, and Perplexity with advanced GEO and technical optimization.",
      tag: "High Growth",
      link: "/services"
    },
    {
      name: "Google Ads Management",
      price: "KES 50,000 / mo",
      desc: "Immediate, high-converting PPC campaigns designed to drive qualified leads and measurable ROI.",
      tag: "Performance",
      link: "/services"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      {/* Hero Section */}
      <section className="py-24 px-8 text-center max-w-5xl mx-auto">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-semibold tracking-wider uppercase">
          Institutional Digital Infrastructure & Engineering in Kenya
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
          Digital Solutions for <span className="underline decoration-zinc-300">Small & Medium Businesses in Kenya & East Africa</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 mb-12 max-w-3xl mx-auto font-normal leading-relaxed">
          Strategic digital marketing solutions designed to help your business attract customers, generate qualified leads, and grow revenue online across East Africa.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/services" className="bg-black text-white font-medium px-8 py-4 rounded-full hover:bg-zinc-800 transition-all text-sm tracking-wide shadow-lg">
            View Service Tiers →
          </Link>
          <Link href="/contact" className="border border-zinc-300 text-zinc-900 font-medium px-8 py-4 rounded-full hover:border-black transition-all text-sm tracking-wide">
            Request Free Audit
          </Link>
        </div>
      </section>

      {/* Productized Solutions Section */}
      <section className="py-20 px-8 max-w-7xl mx-auto border-t border-zinc-100">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Productized Service Packages</h2>
          <p className="text-zinc-600">Transparent, performance-driven pricing tailored for scale and immediate ROI.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div key={idx} className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 flex flex-col justify-between hover:border-black transition-all shadow-sm">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-zinc-200/60 text-zinc-800 text-xs font-semibold mb-4">
                  {pkg.tag}
                </span>
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-black mb-4">{pkg.price}</p>
                <p className="text-zinc-600 text-sm mb-8 leading-relaxed">{pkg.desc}</p>
              </div>
              <Link href={pkg.link} className="w-full bg-black text-white font-medium py-3.5 rounded-full hover:bg-zinc-800 transition-colors text-center text-sm">
                Request a Quote →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Authority Bar */}
      <section className="bg-zinc-50 border-y border-zinc-200 py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-2xl font-bold text-black">10+ Years</p>
            <p className="text-xs text-zinc-600 mt-1 uppercase tracking-wider">Digital Marketing Experience</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-black">WordPress & Next.js</p>
            <p className="text-xs text-zinc-600 mt-1 uppercase tracking-wider">Engineering Experts</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-black">GEO & SEO</p>
            <p className="text-xs text-zinc-600 mt-1 uppercase tracking-wider">AI Search Optimization</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-black">M-Pesa Ready</p>
            <p className="text-xs text-zinc-600 mt-1 uppercase tracking-wider">Local Market Integration</p>
          </div>
        </div>
      </section>
    </main>
  );
}