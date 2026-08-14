import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Brave Technologies Ltd | Institutional Digital Infrastructure",
  description: "Engineering digital solutions and software products for Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Brave Technologies Ltd',
    image: 'https://www.bravetechnologies.co.ke/favicon.ico',
    '@id': 'https://www.bravetechnologies.co.ke',
    url: 'https://www.bravetechnologies.co.ke',
    telephone: '+254793595290',
    email: 'info@bravetechnologies.co.ke',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tom Mboya Street',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.286389,
      longitude: 36.817223,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '17:00',
    },
    sameAs: [
      'https://www.instagram.com/bravetechnologies.co.ke',
      'https://www.facebook.com',
      'https://www.linkedin.com',
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}