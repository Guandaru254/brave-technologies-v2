'use client';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-semibold tracking-wider uppercase">
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            Let's Build Something Extraordinary Together.
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Reach out to our engineering and digital marketing team for custom software solutions, digital strategy, or project consultations.
          </p>
        </div>

        {/* Grid Layout: Contact Info & Form */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Details Column */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 md:p-12 flex flex-col justify-between shadow-sm">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-zinc-600 text-sm mb-8 leading-relaxed">
                Your trusted partner for innovative technology solutions. We deliver excellence and drive your business forward.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Our Location</p>
                  <p className="text-zinc-900 font-medium text-sm">Tom Mboya Street, Nairobi, Kenya</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Our Email Address</p>
                  <p className="text-zinc-900 font-medium text-sm">info@bravetechnologies.co.ke</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Contact Phone Number</p>
                  <p className="text-zinc-900 font-medium text-sm">0793 595 290</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Operating Hours</p>
                  <p className="text-zinc-900 font-medium text-sm">Mon – Sat: 9 AM – 5 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-zinc-200">
              <p className="text-xs text-zinc-500">© 2026 Brave Technologies Ltd. All Rights Reserved.</p>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe" 
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com" 
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="0793 595 290" 
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">Your Message</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Tell us about your project or inquiry..." 
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-black text-white font-medium py-4 rounded-full hover:bg-zinc-800 transition-colors text-xs tracking-wide uppercase shadow-md"
              >
                Send Now →
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}