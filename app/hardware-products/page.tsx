import Link from 'next/link';

export const metadata = {
  title: 'Hardware Products - Brave Technologies',
  description: 'Explore enterprise hardware, custom IoT devices, and computing infrastructure engineered and supplied by Brave Technologies.',
};

const hardwareProducts = [
  {
    title: 'Enterprise Server Racks',
    description: 'High-density, secure server infrastructure solutions engineered for data centers and growing corporate networks.',
    badge: 'Infrastructure',
  },
  {
    title: 'IoT Sensor Gateways',
    description: 'Custom micro-controller units and telemetry gateways designed for automated agricultural and industrial monitoring.',
    badge: 'IoT Solutions',
  },
  {
    title: 'POS Terminal Systems',
    description: 'Ruggedized, touch-enabled point-of-sale hardware integrated seamlessly with local payment gateways like M-Pesa.',
    badge: 'Retail Tech',
  },
  {
    title: 'Biometric Access Control',
    description: 'Advanced fingerprint and facial recognition security terminals for commercial offices and educational facilities.',
    badge: 'Security',
  },
  {
    title: 'Network Switching Gear',
    description: 'Enterprise-grade managed switches and wireless access points ensuring robust, high-speed office connectivity.',
    badge: 'Networking',
  },
  {
    title: 'Solar Power Backup Kits',
    description: 'Reliable inverter and lithium battery storage packages configured to keep mission-critical business systems online.',
    badge: 'Power Systems',
  },
];

export default function HardwareProductsPage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      {/* Breadcrumb Header */}
      <div className="bg-zinc-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Hardware Products</h1>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-6">
            Robust physical computing systems, IoT hardware, and digital infrastructure engineered for businesses across East Africa.
          </p>
          <div className="flex justify-center items-center gap-2 text-sm text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-zinc-200">Hardware Products</span>
          </div>
        </div>
      </div>

      {/* Hardware Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hardwareProducts.map((product, index) => (
            <div 
              key={index} 
              className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-blue-50 text-[#1E88E5] text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
                    {product.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center w-full bg-[#1E88E5] hover:bg-[#1976D2] text-white text-sm font-medium py-2.5 rounded-xl transition-colors shadow-sm"
              >
                Request Quote / Inquiry
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}