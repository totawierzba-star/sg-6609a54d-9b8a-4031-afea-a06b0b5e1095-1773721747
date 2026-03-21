import { SEO } from "@/components/SEO";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { BookOpen, Calendar, ArrowRight, Briefcase, Scale, FileText, Users, BarChart3, Plane, Award, Star, User, Building2, CreditCard } from "lucide-react";

export default function Artykuly() {
  const articles = [
    {
      title: "Zmiana rozkładu lotu 14 dni przed wylotem — czy to odwołanie?",
      slug: "zmiana-rozkladu-lotu-14-dni-odwolanie",
      excerpt: "Zmiana z ponad 14-dniowym wyprzedzeniem zwalnia linię z odszkodowania, ale daje prawo do zwrotu biletu. Zmiana w ciągu 14 dni bez właściwej alternatywy — odszkodowanie do 600 EUR może przysługiwać.",
      date: "2025-03-21",
      readTime: "8 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Siła wyższa a lot — co naprawdę zwalnia linię z odszkodowania?",
      slug: "sila-wyzsza-lot-kiedy-linia-nie-placi-odszkodowania",
      excerpt: "Usterka techniczna, strajk własnych pracowników i opóźnienie rotacji to NIE siła wyższa. Sprawdź pełną tabelę nadzwyczajnych okoliczności, wyroki ETS i jak zakwestionować odmowę linii.",
      date: "2025-03-21",
      readTime: "9 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Strajk linii lotniczej — nadzwyczajna okoliczność czy odszkodowanie EC 261?",
      slug: "strajk-linii-lotniczej-nadzwyczajna-okolicznosc",
      excerpt: "Strajk własnych pracowników linii (pilotów, stewardów) NIE jest nadzwyczajną okolicznością — należy Ci się odszkodowanie do 600 EUR. Wyrok ETS C-195/17. Strajk ATC może zwolnić linię z wypłaty.",
      date: "2025-03-21",
      readTime: "8 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Codeshare a EC 261/2004 — który przewoźnik odpowiada za odszkodowanie?",
      slug: "codeshare-ec261-ktory-przewoznik-odpowiada",
      excerpt: "Przy locie codeshare odszkodowanie EC 261/2004 wypłaca przewoźnik operujący (wykonujący lot), nie marketingowy. Sprawdź jak go zidentyfikować, kiedy EC 261 obowiązuje spoza UE i jak złożyć roszczenie.",
      date: "2025-03-21",
      readTime: "8 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Lot połączony opóźniony — odszkodowanie za każdy odcinek?",
      slug: "lot-polaczony-opozniony-odszkodowanie-za-kazdy-odcinek",
      excerpt: "Przy locie połączonym liczy się opóźnienie w końcowym celu podróży — jedno odszkodowanie do 600 EUR, nie za każdy odcinek. Sprawdź wyrok ETS C-11/11 i jak udokumentować roszczenie.",
      date: "2025-03-21",
      readTime: "9 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Jak długo linia lotnicza ma na odpowiedź na reklamację?",
      slug: "jak-dlugo-linia-lotnicza-ma-na-odpowiedz-na-reklamacje",
      excerpt: "Linia lotnicza powinna odpowiedzieć na reklamację w ciągu 30 dni — choć EC 261/2004 nie narzuca ustawowego terminu. Sprawdź jak eskalować milczenie przewoźnika i kiedy grozi przedawnienie roszczenia.",
      date: "2025-03-21",
      readTime: "8 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Co to jest EC 261/2004? Rozporządzenie UE o prawach pasażerów",
      slug: "co-to-jest-ec-261-2004-rozporzadzenie-ue",
      excerpt: "EC 261/2004 to rozporządzenie UE gwarantujące odszkodowanie do 600 EUR za opóźnienie, odwołanie lub overbooking. Kogo obejmuje, jakie prawa daje i jak z nich skorzystać w praktyce.",
      date: "2025-03-21",
      readTime: "9 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Kiedy lot jest uznawany za odwołany według prawa UE?",
      slug: "kiedy-lot-jest-uznawany-za-odwolany-prawo-ue",
      excerpt: "Lot jest odwołany gdy nie zostaje wykonany zgodnie z planem. Sprawdź definicję EC 261/2004, różnicę między odwołaniem a opóźnieniem, zasady powiadomienia i kiedy należy się odszkodowanie do 600 EUR.",
      date: "2025-03-21",
      readTime: "8 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Czy pracodawca może zatrzymać odszkodowanie za lot pracownika?",
      slug: "czy-pracodawca-moze-zatrzymac-odszkodowanie-za-lot",
      excerpt: "Nie — pracodawca nie może zatrzymać ani żądać zwrotu odszkodowania EC 261/2004. Odszkodowanie należy do pracownika jako pasażera. Klauzula w umowie o pracę nakazująca zwrot jest nieważna z mocy prawa UE.",
      date: "2025-03-21",
      readTime: "7 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Ile wynosi odszkodowanie za opóźniony lot służbowy?",
      slug: "ile-wynosi-odszkodowanie-opozniony-lot-sluzbowy",
      excerpt: "250, 400 lub 600 EUR — w zależności od dystansu trasy. Sprawdź dokładną tabelę odszkodowań EC 261/2004, warunki przyznania i jak złożyć skuteczny wniosek.",
      date: "2025-03-21",
      readTime: "8 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Bilet służbowy kupiony przez firmę — kto składa reklamację",
      slug: "bilet-sluzbowy-kupiony-przez-firme-kto-sklada-reklamacje",
      excerpt: "Kompleksowy wyjaśnienie kto składa reklamację za bilet służbowy kupiony przez firmę. Sprawdź czy pracownik czy pracodawca ma prawo do odszkodowania i jak przebiega procedura roszczeniowa w podróżach biznesowych.",
      date: "2025-01-21",
      readTime: "14 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Lot służbowy odwołany w ostatniej chwili — co zrobić",
      slug: "lot-sluzbowy-odwolany-ostatniej-chwili-co-zrobic",
      excerpt: "Kompleksowy plan działania gdy lot służbowy zostaje odwołany. Sprawdź jakie masz prawa, jak odzyskać odszkodowanie do 600 EUR i jak szybko znaleźć alternatywny transport na spotkanie biznesowe.",
      date: "2025-01-20",
      readTime: "13 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Opóźnienie lotu a spotkanie biznesowe — koszty konsekwencji",
      slug: "opoznienie-lotu-spotkanie-biznesowe-koszty-konsekwencji",
      excerpt: "Kompleksowa analiza kosztów opóźnienia lotu a spotkanie biznesowe. Sprawdź jak minimalizować straty, jakie są koszty bezpośrednie i pośrednie oraz jak odzyskać odszkodowanie do 600 EUR.",
      date: "2025-01-19",
      readTime: "12 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Zgubiony bagaż w podróży służbowej — odszkodowanie i procedura",
      slug: "zgubiony-bagaz-podroz-sluzbowa-odszkodowanie-procedura",
      excerpt: "Kompleksowy przewodnik po procedurze odzyskiwania odszkodowania do 1300 EUR za zagubiony bagaż w podróży służbowej. Sprawdź krok po kroku jak zgłosić zaginięcie i jakie dokumenty potrzebujesz.",
      date: "2025-01-18",
      readTime: "11 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Lot służbowy opóźniony o ponad 3 godziny — krok po kroku",
      slug: "lot-sluzbowy-opozniony-ponad-3-godziny-krok-po-kroku",
      excerpt: "Szczegółowy przewodnik krok po kroku jak odzyskać odszkodowanie do 600 EUR za opóźniony lot służbowy. Sprawdź jakie dokumenty potrzebujesz i jak przebiega procedura.",
      date: "2025-01-17",
      readTime: "10 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "EC 261/2004 a loty służbowe — co obejmuje rozporządzenie",
      slug: "ec-261-2004-a-loty-sluzbowe-co-obejmuje-rozporzadzenie",
      excerpt: "Kompleksowy przewodnik po rozporządzeniu WE 261/2004 w kontekście podróży służbowych. Sprawdź, jakie prawa przysługują pracownikom i kiedy należy się odszkodowanie do 600 EUR.",
      date: "2025-01-16",
      readTime: "9 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Overbooking na locie służbowym — prawa pracownika i pracodawcy",
      slug: "overbooking-na-locie-sluzbowym-praca-pracodawcy",
      excerpt: "Kompleksowy poradnik o overbookingu w podróżach służbowych. Kto ma prawo do odszkodowania do 600 EUR, jak krok po kroku odzyskać pieniądze i jakie obowiązki ma pracodawca.",
      date: "2025-01-15",
      readTime: "8 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Odszkodowanie za opóźniony lot służbowy — komu przysługuje: pracownik czy pracodawca?",
      slug: "odszkodowanie-lot-sluzbowy-pracownik-czy-pracodawca",
      excerpt: "Kompleksowy przewodnik wyjaśniający, kto ma prawo do odszkodowania za opóźniony lot służbowy. Aspekty prawne, podatkowe i praktyczne rozwiązania dla firm i pracowników.",
      date: "2025-02-23",
      readTime: "14 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Prawa pasażera w podróży służbowej przy odwołaniu lub opóźnieniu lotu",
      slug: "prawa-pasazera-podroz-sluzbowa",
      excerpt: "Jakie prawa ma pasażer lotu służbowego? Sprawdź, jakie odszkodowania i świadczenia przysługują przy opóźnieniach i odwołaniach lotów biznesowych.",
      date: "2025-02-23",
      readTime: "15 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Dlaczego Stworzyłem ClaimWinger",
      slug: "dlaczego-stworzylem-claimwinger",
      excerpt: "Historia powstania ClaimWinger — platformy, która pomaga tysiącom pasażerów odzyskać odszkodowania za opóźnione i odwołane loty. Poznaj moją osobistą motywację.",
      date: "2025-01-20",
      readTime: "8 min",
      category: "O Mnie",
      icon: User
    },
    {
      title: "Programy Lojalnościowe dla Firm",
      slug: "programy-lojalnosciowe-dla-firm",
      excerpt: "Kompleksowy przewodnik po korporacyjnych programach lojalnościowych linii lotniczych. Dowiedz się, jak maksymalizować korzyści z lotów służbowych.",
      date: "2025-01-15",
      readTime: "12 min",
      category: "Biznes i Finanse",
      icon: Building2
    },
    {
      title: "Miles & More dla Firm",
      slug: "miles-and-more-dla-firm",
      excerpt: "Wszystko o programie Miles & More w kontekście podróży służbowych. Jak zbierać mile, jakie poziomy statusowe, i jak maksymalizować korzyści dla firmy.",
      date: "2025-01-12",
      readTime: "14 min",
      category: "Biznes i Finanse",
      icon: Building2
    },
    {
      title: "Business Class vs Premium Economy",
      slug: "business-class-vs-premium-economy",
      excerpt: "Szczegółowe porównanie klasy biznes i premium economy. Która opcja jest lepsza dla Twojej firmy? Analiza kosztów, komfortu i produktywności.",
      date: "2025-01-10",
      readTime: "13 min",
      category: "Biznes i Finanse",
      icon: Plane
    },
    {
      title: "Private Jet vs Business Class",
      slug: "private-jet-vs-business-class",
      excerpt: "Czy prywatny odrzutowiec to luksus, czy efektywne rozwiązanie biznesowe? Porównanie kosztów, komfortu i praktyczności dla firm i kadry zarządzającej.",
      date: "2025-01-08",
      readTime: "10 min",
      category: "Biznes i Finanse",
      icon: Plane
    },
    {
      title: "Bleisure — Polityka Podróży Służbowych",
      slug: "bleisure-polityka-podrozy-sluzbowych",
      excerpt: "Bleisure to trend łączący podróże służbowe z prywatnymi. Dowiedz się, jak wdrożyć elastyczną politykę travel w firmie i zadowolić pracowników.",
      date: "2025-01-05",
      readTime: "12 min",
      category: "Biznes i Finanse",
      icon: Briefcase
    },
    {
      title: "Karta Statusowa i Dostęp do Lounge",
      slug: "karta-statusowa-lounge",
      excerpt: "Kompleksowy przewodnik po kartach statusowych linii lotniczych i programach dostępu do saloników lotniskowych. Które wybrać dla częstych podróżników biznesowych?",
      date: "2025-01-03",
      readTime: "11 min",
      category: "Biznes i Finanse",
      icon: CreditCard
    },
    {
      title: "Ranking Linii Lotniczych — Klasa Biznes 2025",
      slug: "ranking-linii-lotniczych-business-class",
      excerpt: "Najlepsze linie lotnicze dla podróży służbowych w klasie biznes. Ranking 2025 z uwzględnieniem komfortu, serwisu, punktualności i sieci połączeń.",
      date: "2025-01-01",
      readTime: "15 min",
      category: "Biznes i Finanse",
      icon: Award
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
                    href="https://claimwinger.com/pl/odwolany-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=artykuly-index"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-white transition-colors"
                  >
                    → Odwołany lot
                  </a>
                  <a
                    href="https://claimwinger.com/pl/opozniony-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=artykuly-index"
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