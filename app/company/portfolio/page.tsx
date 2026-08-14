import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Our Portfolio - Brave Technologies',
  description: 'Explore the digital solutions, software products, and web applications engineered by Brave Technologies.',
};

const portfolioProjects = [
  {
    title: 'GHINES FOUNDATION',
    href: 'https://ghines-foundation.vercel.app/',
    imgSrc: '/assets/imgs/portfolio/ghines.svg',
    alt: 'Tech consulting services offered by Brave Technologies',
  },
  {
    title: 'KETEBUL MUSIC',
    href: 'https://ketebul-music-beta.vercel.app/',
    imgSrc: '/assets/imgs/portfolio/ketebul.webp',
    alt: 'Tech consulting services offered by Brave Technologies',
  },
  {
    title: 'URBAN SOFAS',
    href: 'https://urban-sofas.onrender.com/',
    imgSrc: '/assets/imgs/portfolio/urban.png',
    alt: 'Tech consulting services offered by Brave Technologies',
  },
  {
    title: 'NOTOS LIFE',
    href: 'https://notos-life-v2-7lml.vercel.app/',
    imgSrc: '/assets/imgs/portfolio/notos.png',
    alt: 'Tech consulting services offered by Brave Technologies',
  },
  {
    title: 'SAFARI LEATHER COLLECTIONS',
    href: 'https://safari-leather.vercel.app/',
    imgSrc: '/assets/imgs/portfolio/safari.png',
    alt: 'Tech consulting services offered by Brave Technologies',
  },
  {
    title: 'JASIRI',
    href: '/jasiri.html',
    imgSrc: '/assets/imgs/portfolio/jasiri3.png',
    alt: 'remote IT support services offered by Brave Technologies',
  },
  {
    title: 'LE FOURNIL',
    href: 'https://www.lefournil.co.ke/',
    imgSrc: '/assets/imgs/portfolio/fournil.png',
    alt: 'Tech consulting services offered by Brave Technologies',
  },
  {
    title: 'TAZAMO AFRICA',
    href: 'https://tazamoafrica.com',
    imgSrc: '/assets/imgs/portfolio/tazamo.jpg',
    alt: 'Tech consulting services offered by Brave Technologies',
  },
  {
    title: 'BRAVE TECHNOLOGIES LTD',
    href: 'https://bravetechnologies.co.ke/',
    imgSrc: '/assets/imgs/portfolio/brave2.jpg',
    alt: 'Web design and development services offered by Brave Technologies',
  },
  {
    title: 'OL MORAN HIGH SCHOOL',
    href: 'https://olmoranhighschool.sc.ke',
    imgSrc: '/assets/imgs/portfolio/olmoran.jpg',
    alt: 'IOT app development services offered by Brave Technologies',
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      {/* Breadcrumb Area */}
      <div className="bg-zinc-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Our Portfolio</h1>
          <div className="flex justify-center items-center gap-2 text-sm text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-zinc-200">Our Portfolio</span>
          </div>
        </div>
      </div>

      {/* Portfolio Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative w-full h-52 bg-zinc-100 overflow-hidden">
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                  <Image
                    src={project.imgSrc}
                    alt={project.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </a>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <h3 className="text-base font-semibold tracking-wide text-zinc-900">
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    {project.title}
                  </a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}