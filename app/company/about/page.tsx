import Link from 'next/link';

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 py-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Tag */}
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-semibold tracking-wider uppercase">
          Company Overview
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
          Engineering Institutional Digital Infrastructure in Kenya & Beyond.
        </h1>

        <p className="text-lg md:text-xl text-zinc-600 mb-16 font-normal leading-relaxed">
          Founded in 2024, Brave Technologies Ltd was built with a singular mission: to bridge the gap between high-performance software engineering and scalable commercial growth for East African enterprises.
        </p>

        {/* Brand Story Section */}
        <section className="space-y-8 mb-20 border-t border-zinc-200 pt-16">
          <h2 className="text-3xl font-bold tracking-tight">Our Brand Story</h2>
          <p className="text-zinc-700 leading-relaxed text-base">
            Since our inception in 2024, Brave Technologies has been at the forefront of digital transformation. Operating out of Nairobi, Kenya, we combine technical rigor with data-driven strategy. Our work spans custom Next.js web applications, secure M-Pesa payment integrations, automated workflows, and high-impact digital solutions designed for modern enterprises.
          </p>
          <p className="text-zinc-700 leading-relaxed text-base">
            As a progressive technology consultancy, we believe in building long-term, trusted partnerships. Whether scaling e-commerce platforms for retailers or deploying institutional software engines, our focus remains absolute: measurable performance, pristine user experience, and absolute reliability.
          </p>
        </section>

        {/* Mission & Vision Grid */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-zinc-600 leading-relaxed text-sm">
              To empower businesses with highly effective, custom digital infrastructure and software solutions while building long-term, trusted partnerships that drive sustainable revenue growth.
            </p>
          </div>
          <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-zinc-600 leading-relaxed text-sm">
              To establish ourselves as East Africa’s leading institutional engineering and digital solutions provider, scaling innovation across the region and beyond.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20 border-t border-zinc-200 pt-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <h4 className="font-bold mb-2">Teamwork</h4>
              <p className="text-zinc-600 text-sm">Collaboration is at the heart of our technical execution and client synergy.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <h4 className="font-bold mb-2">Responsibility</h4>
              <p className="text-zinc-600 text-sm">Rigorous code quality, transparent timelines, and accountability to our partners.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <h4 className="font-bold mb-2">Stewardship</h4>
              <p className="text-zinc-600 text-sm">Long-term digital sustainability and ethical engineering practices in every build.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Box */}
        <section className="bg-black text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Something Extraordinary?</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-sm">
            Speak with our engineering team and get a tailored digital strategy for your business.
          </p>
          <Link href="/contact" className="inline-block bg-white text-black font-medium px-8 py-4 rounded-full hover:bg-zinc-200 transition-all text-sm tracking-wide">
            Request a Custom Quote →
          </Link>
        </section>
      </div>
    </main>
  );
}