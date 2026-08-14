export default function PricingPackages() {
  const packages = [
    { name: "Starter E-Commerce / Furniture Tier", price: "KES 45,000", desc: "Ideal for growing retail and furniture brands launching online." },
    { name: "Professional Business Suite", price: "KES 80,000", desc: "Advanced Next.js web application with custom M-Pesa integration." },
    { name: "Institutional Enterprise Tier", price: "KES 120,000+", desc: "Full digital transformation, custom architecture, and automated workflows." }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Productized Service Packages</h2>
      <p className="text-slate-400 text-center mb-12">Institutional-grade engineering tailored for scale.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-cyan-500 transition-all shadow-xl">
            <div>
              <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
              <p className="text-3xl font-bold text-cyan-400 mb-4">{pkg.price}</p>
              <p className="text-slate-300 mb-6 text-sm">{pkg.desc}</p>
            </div>
            <button className="w-full bg-cyan-500 text-slate-950 font-semibold py-3 rounded-xl hover:bg-cyan-400 transition-colors">
              Deploy Package
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}