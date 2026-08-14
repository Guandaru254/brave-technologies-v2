'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Brave Technologies Ltd and what services do you provide?",
      answer: "Brave Technologies Ltd is a premier software engineering and technology consulting firm based in Nairobi, Kenya. We specialize in custom full-stack web applications, decentralized financial engines, digital event-ticketing platforms (such as ZOZAPRIME), and data-driven digital marketing solutions."
    },
    {
      question: "What is ZOZAPRIME and how does it relate to Brave Technologies?",
      answer: "ZOZAPRIME is our flagship decentralized event-ticketing and transaction platform engineered specifically for the African creative industry. Developed and maintained under our technology ecosystem, it ensures complete data sovereignty, secure M-Pesa payouts, and seamless event management. You can explore it at zozaprime.com."
    },
    {
      question: "What software development technologies do you use?",
      answer: "Our engineering stack leverages modern, high-performance frameworks including Next.js, React, TypeScript, Python, and Django, coupled with robust relational databases and secure cloud infrastructure to ensure scalability and speed."
    },
    {
      question: "Do you build custom web applications for startups and enterprises?",
      answer: "Yes. We architect, design, and deploy custom full-stack web portals, mobile-responsive applications, and automated backend ledger engines tailored precisely to the operational needs of startups, corporate clients, and creative enterprises."
    },
    {
      question: "What digital marketing services do you offer for businesses and hospitality venues?",
      answer: "We design comprehensive digital marketing strategies, custom website frameworks, and brand promotional rollouts for restaurants, lounges, and corporate entities to maximize online visibility, engagement, and customer conversion."
    },
    {
      question: "How does the LegalBeat IP Engine work?",
      answer: "LegalBeat is our advanced intellectual property affidavit engine designed to generate immutable cryptographic certificates and verifiable timestamps for song assets, beats, and digital intellectual property."
    },
    {
      question: "What are automated royalty split-sheets and who are they for?",
      answer: "Our automated royalty split-sheets are smart financial routing engines built for the creative industry. They automate multi-party calculations and direct disbursements among producers, songwriters, and publishers upon every transaction or stream."
    },
    {
      question: "How can businesses request a software consultation or project quote?",
      answer: "You can initiate a project consultation by navigating to our contact page and filling out the inquiry form, or by emailing our team directly at info@bravetechnologies.co.ke with your project scope."
    },
    {
      question: "Where is Brave Technologies located and do you serve international clients?",
      answer: "Our core operations are headquartered on Tom Mboya Street in Nairobi, Kenya. While we actively power domestic digital infrastructure, our digital-first workflows enable us to collaborate with regional and international clients."
    },
    {
      question: "What is your standard turnaround time for software development projects?",
      answer: "Turnaround times vary based on project complexity. A standard web application or custom portal typically ranges from 2 to 6 weeks from the initial architecture and scoping phase to final deployment."
    },
    {
      question: "Do you provide ongoing maintenance and technical support after launch?",
      answer: "Yes. We offer comprehensive post-launch support, uptime monitoring, security updates, and feature enhancements to ensure your digital products remain secure, fast, and fully operational."
    },
    {
      question: "How do you ensure data security and privacy in your software products?",
      answer: "We implement rigorous security protocols, including encrypted database architectures, secure authentication workflows, regular system audits, and adherence to industry-standard data protection guidelines."
    },
    {
      question: "Can Brave Technologies integrate payment gateways like M-Pesa into custom web apps?",
      answer: "Absolutely. We specialize in integrating local and international payment rails—including M-Pesa APIs and card processing gateways—into custom e-commerce platforms and ticketing portals."
    },
    {
      question: "What makes Brave Technologies different from other technology consulting firms?",
      answer: "Our unique edge lies in combining rigorous software engineering expertise with deep roots in the African creative and digital economy. We build proprietary, production-ready engines that solve real-world operational challenges."
    },
    {
      question: "What are your standard operating hours for client communications?",
      answer: "Our team is available Monday through Saturday, from 9:00 AM to 5:00 PM EAT, ready to handle inquiries, technical consultations, and support requests."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white text-zinc-950 py-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-semibold tracking-wider uppercase">
            Knowledge Base & FAQs
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            Frequently Asked Questions.
          </h1>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
            Everything you need to know about Brave Technologies Ltd, our software engineering services, ZOZAPRIME platform, and enterprise partnerships.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-20">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="font-semibold text-base md:text-lg text-zinc-900">{faq.question}</span>
                  <span className={`w-8 h-8 rounded-full bg-zinc-200/70 flex items-center justify-center text-sm font-bold transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-45 bg-black text-white' : 'text-zinc-700'}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-zinc-600 text-sm leading-relaxed border-t border-zinc-200/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-bold mb-3">Have Additional Questions?</h3>
          <p className="text-zinc-600 text-sm max-w-md mx-auto mb-8">
            If your question wasn't answered above, our engineering and consulting team is ready to assist you directly.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-black text-white font-medium px-8 py-3.5 rounded-full hover:bg-zinc-800 transition-colors text-xs tracking-wide uppercase shadow-sm"
          >
            Contact Our Team →
          </Link>
        </div>
      </div>
    </main>
  );
}