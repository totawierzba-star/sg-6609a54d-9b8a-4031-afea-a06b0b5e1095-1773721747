import { SEO } from "@/components/SEO";
import Link from "next/link";
import { BookOpen, Calendar, ArrowRight, Briefcase, Scale, FileText, Users, BarChart3 } from "lucide-react";

export default function Artykuly() {
  const articles = [
    {
      slug: "business-class-vs-premium-economy",
      title: "Business Class vs Premium Economy – Gdzie kończy się luksus, a zaczyna efektywność?",
      excerpt: "Kompleksowe porównanie dla Travel Managerów: analiza kosztów, komfortu i ROI. Kiedy dopłata do Business Class ma sens biznesowy?",
      date: "2026-01-29",
      category: "Travel Management",
      icon: BarChart3,
      readTime: "12 min"
    },
    {
      slug: "dlaczego-stworzylem-claimwinger",
      title: "Dlaczego stworzyłem ClaimWinger? – kilka słów od założyciela",
      excerpt: "Historia powstania ClaimWinger i misja ułatwienia pasażerom dochodzenia ich praw w podróżach lotniczych.",
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
        <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 group">
                <Briefcase className="w-8 h-8 text-slate-700 group-hover:text-slate-900 transition-colors" />
                <div>
                  <h1 className="text-xl font-bold text-slate-900">BizneLot.info</h1>
                  <p className="text-xs text-slate-600">Prawa pasażerów w podróżach służbowych</p>
                </div>
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
        <footer className="bg-slate-900 text-slate-300 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold mb-4">BizneLot.info</h3>
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