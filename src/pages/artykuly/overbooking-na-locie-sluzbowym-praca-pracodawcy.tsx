import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Shield, CheckCircle2, AlertCircle, FileText, Info, Users } from "lucide-react";

export default function OverbookingArticle() {
  return (
    <>
      <SEO
        title="Overbooking lot służbowy — prawa pracownika i pracodawcy | BiznesLot"
        description="Overbooking lot służbowy uprawnia do odszkodowania do 600 EUR. Sprawdź, kto może składać wniosek i jak krok po kroku odzyskać pieniądze za odmowę przyjęcia na pokład."
        url="https://bizneslot.info/artykuly/overbooking-na-locie-sluzbowym-praca-pracodawcy"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Overbooking lot służbowy — prawa pracownika i pracodawcy",
        "description": "Overbooking lot służbowy uprawnia do odszkodowania do 600 EUR. Sprawdź, kto może składać wniosek i jak krok po kroku odzyskać pieniądze za odmowę przyjęcia na pokład.",
        "author": {"@type": "Organization", "name": "bizneslot.info"},
        "publisher": {"@type": "Organization", "name": "bizneslot.info"},
        "datePublished": "2025-01-15",
        "inLanguage": "pl-PL"
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Czy pracodawca może odmówić wypłaty odszkodowania za overbooking?",
            "acceptedAnswer": {"@type": "Answer", "text": "Nie, pracodawca nie może odmówić wypłaty odszkodowania za overbooking. Prawo do odszkodowania z tytułu overbookingu lotu służbowego przysługuje pracownikowi niezależnie od tego, kto kupił bilet."}
          },
          {
            "@type": "Question",
            "name": "Ile wynosi odszkodowanie za overbooking lotu służbowego?",
            "acceptedAnswer": {"@type": "Answer", "text": "Odszkodowanie za overbooking lotu służbowego wynosi do 600 EUR w zależności od dystansu trasy. Dla lotów do 1500 km przysługuje 250 EUR, 1500-3500 km - 400 EUR, powyżej 3500 km - 600 EUR."}
          },
          {
            "@type": "Question",
            "name": "Kto składa wniosek o odszkodowanie za overbooking?",
            "acceptedAnswer": {"@type": "Answer", "text": "Wniosek o odszkodowanie za overbooking składa pracownik na swoje dane. Odszkodowanie przysługuje pasażerowi, czyli pracownikowi podróżującemu w delegacji, niezależnie od tego, kto finansował bilet."}
          }
        ]
      })}} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
              <li><Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Strona główna</Link></li>
              <li>/</li>
              <li><Link href="/artykuly" className="hover:text-blue-600 dark:hover:text-blue-400">Artykuły</Link></li>
              <li>/</li>
              <li className="text-slate-900 dark:text-slate-100">Overbooking lot służbowy</li>
            </ol>
          </nav>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            
            {/* Hero Section */}
            <div className="mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Overbooking lot służbowy — prawa pracownika i pracodawcy
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Overbooking lotu służbowego to sytuacja, gdy linia lotnicza sprzedaje więcej biletów niż dostępnych miejsc. Pracownik, którego nie przyjęto na pokład, ma prawo do odszkodowania do 600 EUR niezależnie od tego, kto kupił bilet.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Do 600 EUR odszkodowania
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  Prawo przysługuje pracownikowi
                </span>
              </div>
            </div>

            {/* Key Takeaway */}
            <div className="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Najważniejsze informacje:</p>
                  <ul className="text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                    <li>Overbooking lotu służbowego podlega rozporządzeniu WE 261/2004</li>
                    <li>Odszkodowanie przysługuje pracownikowi, nie firmie</li>
                    <li>Wysokość odszkodowania zależy od dystansu trasy</li>
                    <li>Termin składania wniosków: 3 lata w Polsce</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-6">Podstawa prawna overbookingu w podróży służbowej</h2>
            
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              Overbooking lotu służbowego jest regulowany przez rozporządzenie Parlamentu Europejskiego i Rady WE 261/2004 z dnia 11 lutego 2004 r. Rozporządzenie stosuje się do wszystkich pasażerów podróżujących lotami z wylotem z lotniska UE, niezależnie od celu podróży.
            </p>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700 mb-8">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">Kluczowe zasady:</h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Rozporządzenie ma pierwszeństwo przed prawem krajowym</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Nie rozróżnia podróży prywatnych i służbowych</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Prawo przysługuje pasażerowi, nie kupującemu bilet</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-6">Komu przysługuje odszkodowanie?</h2>

            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              Odszkodowanie za overbooking lotu służbowego przysługuje pracownikowi - pasażerowi, a nie pracodawcy, który kupił bilet. To fundamentalna zasada wynikająca z rozporządzenia WE 261/2004.
            </p>

            <div className="my-8 p-6 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Uwaga:</p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Pracodawca nie może legalnie zabronić pracownikowi dochodzenia roszczeń ani żądać przekazania odszkodowania firmie. Takie postanowienia w umowie o pracę są niezgodne z prawem UE i nieważne.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-6">Wysokość odszkodowania za overbooking</h2>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">Do 1500 km</p>
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">250 EUR</p>
                <p className="text-xs text-blue-700 dark:text-blue-300">Warszawa-Berlin, Kraków-Paryż</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-2">1500-3500 km</p>
                <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">400 EUR</p>
                <p className="text-xs text-purple-700 dark:text-purple-300">Warszawa-Madryt, Wrocław-Rzym</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm font-medium text-green-900 dark:text-green-100 mb-2">Powyżej 3500 km</p>
                <p className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">600 EUR</p>
                <p className="text-xs text-green-700 dark:text-green-300">Warszawa-Nowy Jork, Kraków-Dubaj</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-6">Procedura odzyskiwania odszkodowania</h2>

            <div className="space-y-6 my-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Zdobądź dokumentację na lotnisku</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Poproś o oficjalny dokument potwierdzający odmowę przyjęcia na pokład, kartę pokładową z adnotacją "denied boarding" oraz informację o przyczynie.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Zachowaj wszystkie dowody podróży</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Zbierz kopię biletu służbowego, karty pokładowej, dokumentu odmowy oraz rachunków za wydatki poniesione w wyniku opóźnienia.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Złóż reklamację do linii lotniczej</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    W ciągu 14 dni złóż oficjalną reklamację z kopią dokumentacji, numerem rezerwacji i danymi lotu.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Skorzystaj z pomocy prawnej</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Jeśli linia odmawia wypłaty, możesz skorzystać z usług firm działających na zasadzie no win, no fee.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="my-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Twój lot służbowy był opóźniony lub odwołany?</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Sprawdź bezpłatnie, czy należy Ci się odszkodowanie do 600 EUR. ClaimWinger działa na zasadzie no win, no fee.
              </p>
              <Link 
                href="https://claimwinger.com/pl/opozniony-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=overbooking"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sprawdź odszkodowanie →
              </Link>
            </div>

            {/* FAQ */}
            <section className="my-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">Najczęstsze pytania</h2>
              
              <div className="space-y-6">
                <details className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                  <summary className="font-semibold text-lg text-slate-900 dark:text-slate-100 cursor-pointer">
                    Czy pracodawca może odmówić wypłaty odszkodowania za overbooking?
                  </summary>
                  <p className="mt-4 text-slate-700 dark:text-slate-300">
                    Nie, pracodawca nie może odmówić wypłaty odszkodowania. Prawo do odszkodowania z tytułu overbookingu przysługuje pracownikowi niezależnie od tego, kto kupił bilet.
                  </p>
                </details>

                <details className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                  <summary className="font-semibold text-lg text-slate-900 dark:text-slate-100 cursor-pointer">
                    Ile wynosi odszkodowanie za overbooking lotu służbowego?
                  </summary>
                  <p className="mt-4 text-slate-700 dark:text-slate-300">
                    Odszkodowanie wynosi do 600 EUR w zależności od dystansu: 250 EUR (do 1500 km), 400 EUR (1500-3500 km), 600 EUR (powyżej 3500 km).
                  </p>
                </details>

                <details className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                  <summary className="font-semibold text-lg text-slate-900 dark:text-slate-100 cursor-pointer">
                    Kto składa wniosek o odszkodowanie za overbooking?
                  </summary>
                  <p className="mt-4 text-slate-700 dark:text-slate-300">
                    Wniosek składa pracownik na swoje dane. Odszkodowanie przysługuje pasażerowi, niezależnie od tego, kto finansował bilet.
                  </p>
                </details>
              </div>
            </section>

            {/* Related Articles */}
            <section className="my-16">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Powiązane artykuły</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/artykuly/ec-261-2004-a-loty-sluzbowe-co-obejmuje-rozporzadzenie" className="group block p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                    EC 261/2004 a loty służbowe
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Co obejmuje rozporządzenie i jakie prawa przysługują pracownikom
                  </p>
                </Link>

                <Link href="/artykuly/lot-sluzbowy-opozniony-ponad-3-godziny-krok-po-kroku" className="group block p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                    Lot służbowy opóźniony o ponad 3 godziny
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Krok po kroku: jak odzyskać odszkodowanie za opóźniony lot
                  </p>
                </Link>
              </div>
            </section>

          </div>
        </article>
      </div>
    </>
  );
}