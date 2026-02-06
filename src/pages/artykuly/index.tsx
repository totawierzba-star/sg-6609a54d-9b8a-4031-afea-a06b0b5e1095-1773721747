import { SEO } from "@/components/SEO";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { BookOpen, Calendar, ArrowRight, Briefcase, Scale, FileText, Users, BarChart3, Plane, Award, Star } from "lucide-react";

export default function Artykuly() {
  const articles = [
    {
      slug: "ranking-linii-lotniczych-business-class",
      title: "Ranking linii lotniczych Business Class 2026: TOP 10",
      excerpt: "Kompleksowy ranking najlepszych linii lotniczych w klasie biznes. Porównanie produktów, lie-flat seats, catering i obsługi. Które linie warto wybrać dla podróży służbowych?",
      date: "2026-01-29",
      category: "Travel Management",
      icon: Award,
      readTime: "12 min"
    },
    {
      slug: "programy-lojalnosciowe-dla-firm",
      title: "TOP 5 programów lojalnościowych dla firm [2026]",
      excerpt: "Porównanie Miles & More, Flying Blue, Executive Club, Miles+Bonus i Aegean Miles+Bonus. Który program wybrać dla Twojej firmy? Analiza ROI i corporate deals.",
      date: "2026-01-29",
      category: "Travel Management",
      icon: Award,
      readTime: "14 min"
    },
    {
      slug: "karta-statusowa-lounge",
      title: "Karta statusowa a wstęp do lounge: Przewodnik po benefitach",
      excerpt: "Wszystko o kartach statusowych Silver, Gold, Platinum. Dostęp do lounge, bagaż, priority boarding. Ile warte? Jak zdobyć? ROI dla firm.",
      date: "2026-01-29",
      category: "Travel Benefits",
      icon: Star,
      readTime: "11 min"
    },
    {
      slug: "miles-and-more-dla-firm",
      title: "Miles & More dla firm: Kompletny przewodnik [2026]",
      excerpt: "Wszystko o Miles & More dla podróży służbowych: zbieranie mil, statusy Senator i HON Circle, corporate deals z Lufthansa Group. Przewodnik dla Travel Managerów z konkretnymi przykładami.",
      date: "2026-01-29",
      category: "Programy Lojalnościowe",
      icon: Award,
      readTime: "15 min"
    },
    {
      slug: "business-class-vs-premium-economy",
      title: "Business Class vs. Premium Economy: Analiza kosztów [2026]",
      excerpt: "Kompleksowe porównanie dla Travel Managerów: Business Class vs Premium Economy. Twarde dane, tabele ROI, analiza kosztów. Kiedy warto dopłacić?",
      date: "2026-01-29",
      category: "Travel Management",
      icon: BarChart3,
      readTime: "10 min"
    },
    {
      slug: "bleisure-polityka-podrozy-sluzbowych",
      title: "Bleisure 2.0: Jak łączyć pracę z wypoczynkiem [2026]",
      excerpt: "Kompleksowy przewodnik po Bleisure Travel dla HR i Travel Managerów. Travel Policy, aspekty podatkowe, ubezpieczeniowe i Employer Branding.",
      date: "2026-01-29",
      category: "HR & Employer Branding",
      icon: Users,
      readTime: "12 min"
    },
    {
      slug: "private-jet-vs-business-class",
      title: "Private Jet vs. Business Class: Kiedy czarter się opłaca?",
      excerpt: "Analiza kosztów dla Travel Managerów: kiedy wynajem prywatnego odrzutowca jest tańszy niż Business Class? Kalkulacja dla grup 6-10 osób.",
      date: "2026-01-29",
      category: "Executive Travel",
      icon: Plane,
      readTime: "10 min"
    },
    {
      slug: "dlaczego-stworzylem-claimwinger",
      title: "Dlaczego stworzyłem ClaimWinger.com?",
      excerpt: "Historia powstania platformy do odzyskiwania odszkodowań lotniczych. Od frustracji pasażera do rozwiązania problemu tysięcy podróżujących.",
      date: "2026-01-29",
      category: "O nas",
      icon: Users,
      readTime: "5 min"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Artykuły o prawach pasażerów w podróżach służbowych",
    "description": "Baza wiedzy o prawach pasażerów lotniczych w kontekście podróży służbowych, delegacji i biletów firmowych",
    "url": "https://bizneslot.info/artykuly",
    "publisher": {
      "@type": "Organization",
      "name": "BizneLot.info",
      "url": "https://bizneslot.info"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": articles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://bizneslot.info/artykuly/${article.slug}`
      }))
    }
  };

  return (
    <>
      <SEO
        title="Artykuły – BizneLot.info"
        description="Baza wiedzy o prawach pasażerów lotniczych w podróżach służbowych. Praktyczne porady, analizy prawne i historie z rynku odszkodowań lotniczych."
        url="https://bizneslot.info/artykuly"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Header */}
        <header className="bg-slate-900 text-white py-4 sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold flex items-center gap-2">
                <img src="/bizneslotlogotyp.png" alt="BizneLot.info" className="h-8 w-auto" />
                BizneLot.info
              </Link>

              <nav className="hidden md:flex gap-6">
                <Link href="/odszkodowanie-lot-sluzbowy" className="text-slate-700 hover:text-slate-900 transition-colors">
                  Odszkodowania
                </Link>
                <Link href="/pracodawca-a-odszkodowanie" className="text-slate-700 hover:text-slate-900 transition-colors">
                  Pracodawca
                </Link>
                <Link href="/artykuly" className="text-slate-900 font-semibold border-b-2 border-slate-900">
                  Artykuły
                </Link>
                <Link href="/o-autorze" className="text-slate-700 hover:text-slate-900 transition-colors">
                  O autorze
                </Link>
              </nav>
              <MobileNav currentPath="/artykuly" />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-8 h-8" />
                <span className="text-slate-300 font-semibold">Baza wiedzy</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Artykuły eksperckie
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                Praktyczna wiedza o prawach pasażerów w podróżach służbowych, analizy rynku odszkodowań lotniczych i historie z branży.
              </p>
            </div>
          </div>
        </section>

        {/* Articles List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Wszystkie artykuły</h2>
                <p className="text-slate-600">
                  {articles.length} {articles.length === 1 ? 'artykuł' : 'artykuły'}
                </p>
              </div>

              <div className="space-y-6">
                {articles.map((article) => {
                  const Icon = article.icon;
                  return (
                    <article
                      key={article.slug}
                      className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors">
                          <Icon className="w-6 h-6 text-slate-700" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 text-sm text-slate-600">
                            <span className="px-2 py-1 bg-slate-100 rounded text-xs font-medium">
                              {article.category}
                            </span>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <time dateTime={article.date}>
                                {new Date(article.date).toLocaleDateString('pl-PL', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </time>
                            </div>
                            <span>• {article.readTime}</span>
                          </div>

                          <Link href={`/artykuly/${article.slug}`}>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                              {article.title}
                            </h3>
                          </Link>

                          <p className="text-slate-600 mb-4 leading-relaxed">
                            {article.excerpt}
                          </p>

                          <Link
                            href={`/artykuly/${article.slug}`}
                            className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-900 transition-colors group"
                          >
                            Czytaj więcej
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Poznaj swoje prawa jako pasażer służbowy
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Sprawdź nasze kompleksowe przewodniki po prawach pasażerów w podróżach firmowych
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/odszkodowanie-lot-sluzbowy"
                  className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors font-semibold"
                >
                  Odszkodowania w delegacjach
                </Link>
                <Link
                  href="/pracodawca-a-odszkodowanie"
                  className="px-6 py-3 bg-white text-slate-800 rounded-lg hover:bg-slate-50 transition-colors font-semibold border border-slate-300"
                >
                  Pracodawca a odszkodowanie
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <img src="/bizneslotlogotyp.png" alt="BizneLot.info" className="h-6 w-auto" />
                  BizneLot.info
                </h3>
                <p className="text-sm">
                  Portal ekspercki o prawach pasażerów w podróżach służbowych i delegacjach.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Główne tematy</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/odszkodowanie-lot-sluzbowy" className="hover:text-white transition-colors">
                      Odszkodowanie za lot służbowy
                    </Link>
                  </li>
                  <li>
                    <Link href="/anulowany-lot-delegacja" className="hover:text-white transition-colors">
                      Anulowany lot w delegacji
                    </Link>
                  </li>
                  <li>
                    <Link href="/pracodawca-a-odszkodowanie" className="hover:text-white transition-colors">
                      Pracodawca a odszkodowanie
                    </Link>
                  </li>
                  <li>
                    <Link href="/o-autorze" className="hover:text-white transition-colors">
                      O autorze
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Sprawdź odszkodowanie</h4>
                <p className="text-sm mb-4">
                  Skorzystaj z usług ClaimWinger, aby łatwo i szybko odzyskać należne odszkodowanie:
                </p>
                <div className="space-y-2">
                  <a
                    href="https://claimwinger.com/pl/odwolany-lot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-white transition-colors"
                  >
                    → Odwołany lot
                  </a>
                  <a
                    href="https://claimwinger.com/pl/opozniony-lot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-white transition-colors"
                  >
                    → Opóźniony lot
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-sm text-center">
              <p>© 2026 BizneLot.info – Portal edukacyjny o prawach pasażerów w podróżach służbowych</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}