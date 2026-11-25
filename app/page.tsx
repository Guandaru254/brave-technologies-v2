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

  const pillars = [
    {
      num: "01",
      label: "Search & Local Visibility",
      title: "Show Up When Buyers Are Ready to Act",
      summary:
        "We fix technical bottlenecks, speed up mobile load times on Kenyan networks, and align pages with local and commercial search intent so high-intent visitors find you first.",
      points: [
        "Clean technical structure, fast Next.js rendering, and local search alignment",
        "Landing pages built around real buyer and guest queries across Kenya"
      ]
    },
    {
      num: "02",
      label: "Generative Engine Optimization (GEO)",
      title: "Get Recommended Inside AI Search",
      summary:
        "People increasingly ask ChatGPT, Gemini, and Perplexity who to book or hire. We structure clear brand facts, schema, and proof so AI tools understand your business and cite you accurately.",
      points: [
        "Clear entity definitions, structured data, and consistent brand signals",
        "Concise, factual service and capability pages AI models can trust and surface"
      ]
    },
    {
      num: "03",
      label: "Discovery to Revenue",
      title: "Turn Visibility Into Direct Bookings & Inquiries",
      summary:
        "Traffic and AI mentions only matter if they convert. We pair search visibility with frictionless booking flows, lead capture, and M-Pesa checkout so you keep more margin.",
      points: [
        "Direct booking and inquiry journeys that reduce reliance on high-commission middlemen",
        "Measurable conversion paths tied to real inquiries, orders, and bookings"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      {/* Hero Section */}
      <section className="py-24 px-8 text-center max-w-5xl mx-auto">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-semibold tracking-wider uppercase">
          Institutional Digital Infrastructure in Kenya &amp; East Africa
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
          Digital Solutions for{' '}
          <span className="underline decoration-zinc-300">
            Small &amp; Medium Businesses in Kenya &amp; East Africa
          </span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 mb-12 max-w-3xl mx-auto font-normal leading-relaxed">
          Strategic digital marketing solutions designed to help your business attract customers, generate qualified leads, and grow revenue online across East Africa.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/services"
            className="bg-black text-white font-medium px-8 py-4 rounded-full hover:bg-zinc-800 transition-all text-sm tracking-wide shadow-lg"
          >
            View Service Tiers →
          </Link>
          <Link
            href="/contact"
            className="border border-zinc-300 text-zinc-900 font-medium px-8 py-4 rounded-full hover:border-black transition-all text-sm tracking-wide"
          >
            Request Free Audit
          </Link>
        </div>
      </section>

      {/* Productized Solutions Section */}
      <section className="py-20 px-8 max-w-7xl mx-auto border-t border-zinc-100">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Productized Service Packages</h2>
          <p className="text-zinc-600">
            Transparent, performance-driven pricing tailored for scale and immediate ROI.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 flex flex-col justify-between hover:border-black transition-all shadow-sm"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-zinc-200/60 text-zinc-800 text-xs font-semibold mb-4">
                  {pkg.tag}
                </span>
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-black mb-4">{pkg.price}</p>
                <p className="text-zinc-600 text-sm mb-8 leading-relaxed">{pkg.desc}</p>
              </div>
              <Link
                href={pkg.link}
                className="w-full bg-black text-white font-medium py-3.5 rounded-full hover:bg-zinc-800 transition-colors text-center text-sm"
              >
                Request a Quote →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Three Explained Sections: SEO, GEO & Revenue Conversion */}
      <section className="py-20 px-8 max-w-7xl mx-auto border-t border-zinc-100">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
            Search, AI &amp; Conversion Architecture
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            How We Build Visibility That Converts
          </h2>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Three connected layers—traditional search, generative AI discovery, and direct conversion—engineered to turn attention into paying customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-8 flex flex-col justify-between hover:border-zinc-950 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold tracking-wider text-zinc-900">
                    {pillar.num}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {pillar.label}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  {pillar.summary}
                </p>
                <ul className="space-y-2.5 border-t border-zinc-200 pt-5 text-xs text-zinc-700 leading-relaxed">
                  {pillar.points.map((pt, i) => (
                    <li key={i}>• {pt}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-zinc-200">
                <Link
                  href="/contact"
                  className="text-xs font-semibold uppercase tracking-wider text-zinc-950 hover:text-blue-600 transition-colors"
                >
                  Request a Free Audit →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Authority Bar */}
    </main>
  );
}