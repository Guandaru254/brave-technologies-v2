import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <h2 className="text-white text-xl font-bold mb-4">Brave Technologies</h2>
          <p className="text-sm leading-relaxed">
            Engineering digital infrastructure, software products, and scalable tech solutions for the African creative and business landscape.
          </p>
        </div>

        {/* Navigation Column */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/company/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link href="/company/portfolio" className="hover:text-blue-400">Portfolio</Link></li>
            <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
          </ul>
        </div>

        {/* Packages & SEO Column */}
        <div>
          <h3 className="text-white font-semibold mb-4">Packages & SEO</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/packages" className="hover:text-blue-400">All Packages</Link></li>
            <li><Link href="/packages" className="hover:text-blue-400">Startup Ignite Bundle</Link></li>
            <li><Link href="/packages" className="hover:text-blue-400">Business Booster</Link></li>
            <li><Link href="/packages" className="hover:text-blue-400">Enterprise Infrastructure</Link></li>
            <li><Link href="/packages" className="hover:text-blue-400">SEO & GEO Optimization</Link></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
          <p className="text-sm mb-2">info@bravetechnologies.co.ke</p>
          <p className="text-sm mb-4">(+254) 0793 595 290</p>
          <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-800 text-center text-xs">
        <p>© {new Date().getFullYear()} Brave Technologies Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}