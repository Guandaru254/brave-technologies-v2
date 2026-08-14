import Link from 'next/link';

export const metadata = {
  title: 'Blog & Insights - Brave Technologies',
  description: 'Read the latest insights on software engineering, web development trends, digital transformation, SEO, and POS systems in Kenya and East Africa.',
};

const blogPosts = [
  {
    title: 'The Future of App Development in Kenya: Trends to Watch in 2025',
    date: '12 Aug, 2024',
    author: 'Guandaru Kimathi',
    excerpt: 'Explore the emerging software trends, localized technologies, and mobile frameworks shaping the Kenyan app ecosystem.',
    badge: 'App Development',
  },
  {
    title: 'Case Studies: Successful Kenyan Apps and What We Can Learn from Them',
    date: '9 Aug, 2024',
    author: 'Guandaru Kimathi',
    excerpt: 'A deep dive into real-world local mobile applications that scaled successfully across East African markets.',
    badge: 'Case Studies',
  },
  {
    title: 'The Growing Demand for Apps in Kenya and How Businesses Can Capitalize',
    date: '6 Aug, 2024',
    author: 'Guandaru Kimathi',
    excerpt: 'Why local enterprises are shifting toward dedicated digital applications to capture mobile-first consumers.',
    badge: 'Business Growth',
  },
  {
    title: 'How Web Development Impacts Your Business’ Online Presence in Kenya',
    date: '3 Aug, 2024',
    author: 'Guandaru Kimathi',
    excerpt: 'Understand how professional web architecture builds instant consumer trust and converts local web traffic.',
    badge: 'Web Development',
  },
  {
    title: 'Web Development Trends in Kenya: What’s Shaping the Future of Websites in 2024',
    date: '31 July, 2024',
    author: 'Guandaru Kimathi',
    excerpt: 'The core design frameworks, speed optimizations, and UI/UX patterns dominating the Kenyan web space.',
    badge: 'Trends',
  },
  {
    title: 'How to Attract Local Customers Through Web Development in Kenya',
    date: '28 July, 2024',
    author: 'Guandaru Kimathi',
    excerpt: 'Actionable design and technical strategies to capture high-intent local search queries and foot traffic.',
    badge: 'Local SEO',
  },
  {
    title: 'Why SEO Should Be Part of Your Kenyan Business\'s Long-Term Strategy',
    date: '25 July, 2024',
    author: 'Guandaru Kimathi',
    excerpt: 'Break down why organic search visibility offers sustainable, compounding returns over paid ads.',
    badge: 'SEO Strategy',
  },
  {
    title: 'How SEO Drives Traffic and Growth for Kenyan Businesses',
    date: '22 July, 2024',
    author: 'Guandaru Kimathi',
    excerpt: 'Real metrics and frameworks showing how search engine optimization scales regional brand authority.',
    badge: 'Growth',
  },
  {
    title: 'The Role of Custom Software in Digital Transformation for Kenyan Businesses',
    date: '19 July, 2024',
    author: 'Guandaru Kimathi',
    excerpt: 'How proprietary workflows and automated tools give growing local enterprises a distinct competitive edge.',
    badge: 'Custom Software',
  },
  {
    title: 'Top Challenges Facing Kenyan Businesses and How Custom Software Solves Them',
    date: '16 July, 2024',
    author: 'Guandaru Kimathi',
    excerpt: 'Overcoming operational bottlenecks, manual reporting, and integration gaps with tailored software solutions.',
    badge: 'Engineering',
  },
  {
    title: 'Why Cloud-Based POS Systems Are a Game-Changer for Small Businesses',
    date: '13 July, 2024',
    author: 'Guandaru Kimathi',
    excerpt: 'The benefits of real-time inventory tracking, remote management, and integrated digital payments.',
    badge: 'Retail Tech',
  },
  {
    title: '5 Key Features to Look for When Choosing a POS System for Your Business',
    date: '10 July, 2024',
    author: 'Guandaru Kimathi',
    excerpt: 'What to evaluate before investing in point-of-sale hardware and software for your retail enterprise.',
    badge: 'POS Systems',
  },
  {
    title: 'How the Right POS System Can Improve Your Business’s Customer Experience',
    date: '7 July, 2024',
    author: 'Guandaru Kimathi',
    excerpt: 'Speeding up checkout queues, reducing pricing errors, and offering seamless M-Pesa transaction flows.',
    badge: 'Customer Experience',
  },
  {
    title: 'How POS Systems Can Help You Manage and Grow Your Business',
    date: '4 July, 2024',
    author: 'Guandaru Kimathi',
    excerpt: 'Leveraging automated sales analytics and stock alerts to make data-driven business decisions.',
    badge: 'Operations',
  },
  {
    title: 'Top POS Trends for 2024: What You Need to Know',
    date: '1 July, 2024',
    author: 'Guandaru Kimathi',
    excerpt: 'The shift toward cloud syncing, mobile terminals, and hardware durability in modern retail tech.',
    badge: 'Tech Trends',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      {/* Breadcrumb Header */}
      <div className="bg-zinc-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Tech Insights & Blog</h1>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-6">
            Expert perspectives on software engineering, digital infrastructure, SEO strategies, and tech trends across East Africa.
          </p>
          <div className="flex justify-center items-center gap-2 text-sm text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-zinc-200">Blog</span>
          </div>
        </div>
      </div>

      {/* Blog Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-blue-50 text-[#1E88E5] text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
                    {post.badge}
                  </span>
                  <span className="text-xs text-zinc-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div>
                <div className="text-xs text-zinc-500 mb-4 font-medium">
                  By {post.author}
                </div>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center w-full bg-[#1E88E5] hover:bg-[#1976D2] text-white text-sm font-medium py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}