import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Shield, CheckCircle2, AlertCircle, Scale, FileText, Info } from "lucide-react";

export default function EC2612004Article() {
  return (
    <>
      <SEO
        title="EC 261/2004 a loty służbowe — co obejmuje rozporządzenie | BiznesLot"
        description="Rozporządzenie WE 261/2004 chroni pasażerów w podróżach służbowych. Sprawdź, jakie prawa przysługują pracownikom i kiedy należy się odszkodowanie do 600 EUR."
        url="https://bizneslot.info/artykuly/ec-261-2004-a-loty-sluzbowe-co-obejmuje-rozporzadzenie"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "EC 261/2004 a loty służbowe — co obejmuje rozporządzenie",
        "description": "Rozporządzenie WE 261/2004 chroni pasażerów w podróżach służbowych. Sprawdź, jakie prawa przysługują pracownikom i kiedy należy się odszkodowanie do 600 EUR.",
        "author": {"@type": "Organization", "name": "bizneslot.info"},
        "publisher": {"@type": "Organization", "name": "bizneslot.info"},
        "datePublished": "2025-01-16",
        "inLanguage": "pl-PL"
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Czy EC 261/2004 dotyczy lotów służbowych?",
            "acceptedAnswer": {"@type": "Answer", "text": "Tak, rozporządzenie WE 261/2004 dotyczy lotów służbowych. Chroni wszystkich pasażerów podróżujących lotami z wylotem z UE lub do UE liniami UE, niezależnie od celu podróży - prywatnej czy służbowej."}
          },
          {
            "@type": "Question",
            "name": "Jakie loty służbowe obejmuje rozporządzenie 261/2004?",
            "acceptedAnswer": {"@type": "Answer", "text": "Rozporządzenie 261/2004 obejmuje loty służbowe z wylotem z lotniska UE liniami UE, loty do UE liniami UE oraz loty z wylotem z UE liniami z krajów trzecich. Nie dotyczy lotów z krajów trzecich do UE liniami z krajów trzecich."}
          },
          {
            "@type": "Question",
            "name": "Czy firma może odmówić wypłaty odszkodowania z EC 261/2004?",
            "acceptedAnswer": {"@type": "Answer", "text": "Nie, firma nie może odmówić wypłaty odszkodowania z EC 261/2004. Prawo do odszkodowania przysługuje pracownikowi-pasażerowi, a nie firmie. Pracodawca nie może zabronić pracownikowi dochodzenia roszczeń."}
          },
          {
            "@type": "Question",
            "name": "Ile wynosi odszkodowanie z EC 261/2004 dla lotów służbowych?",
            "acceptedAnswer": {"@type": "Answer", "text": "Odszkodowanie z EC 261/2004 dla lotów służbowych wynosi do 600 EUR. Dla tras do 1500 km - 250 EUR, 1500-3500 km - 400 EUR, powyżej 3500 km - 600 EUR, niezależnie od ceny biletu służbowego."}
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
              <li className="text-slate-900 dark:text-slate-100">EC 261/2004 a loty służbowe</li>
            </ol>
          </nav>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            
            {/* Hero Section */}
            <div className="mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
                <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                EC 261/2004 a loty służbowe — co obejmuje rozporządzenie
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Rozporządzenie WE 261/2004 to fundamentalny akt prawny chroniący pasażerów lotniczych w całej Unii Europejskiej. Dotyczy również podróży służbowych, gwarantując pracownikom takie same prawa jak pasażerom prywatnym.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Do 600 EUR odszkodowania
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  Ochrona w całej UE
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                  <Scale className="w-4 h-4" />
                  Prawa pracownika
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
                    <li>Rozporządzenie WE 261/2004 ma pierwszeństwo przed prawem krajowym</li>
                    <li>Obejmuje wszystkie loty służbowe z/do UE liniami UE</li>
                    <li>Prawa pasażera są niezależne od celu podróży</li>
                    <li>Odszkodowanie nie zależy od ceny biletu służbowego</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-6">Podstawa prawna i charakterystyka rozporządzenia</h2>
            
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              Rozporządzenie WE 261/2004 jest aktem prawnym Unii Europejskiej o bezpośrednim zastosowaniu we wszystkich państwach członkowskich. Oznacza to, że jego przepisy mają pierwszeństwo przed prawem krajowym, w tym przed polskim Kodeksem pracy czy ustawą o prawie lotniczym.
            </p>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700 mb-8">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">Cel rozporządzenia:</h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Zapewnienie wysokiego poziomu ochrony pasażerów lotniczych</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Ustanowienie wspólnych zasad odszkodowania i pomocy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Równe traktowanie pasażerów prywatnych i służbowych</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-6">Zakres terytorialny rozporządzenia</h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-slate-300 dark:border-slate-700">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Typ lotu służbowego</th>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Linia lotnicza</th>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Ochrona EC 261/2004</th>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Przykład</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Wylot z UE</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Dowolna</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-semibold text-green-600 dark:text-green-400">Tak</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Warszawa-Londyn (LOT, BA, Ryanair)</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Przylot do UE</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Linia UE</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-semibold text-green-600 dark:text-green-400">Tak</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Nowy Jork-Warszawa (LOT)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Przylot do UE</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Linia spoza UE</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-semibold text-red-600 dark:text-red-400">Nie</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Nowy Jork-Warszawa (United Airlines)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-6">Prawa pracownika w podróży służbowej</h2>

            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              Pracownik podróżujący służbowo ma takie same prawa jak każdy inny pasażer. Prawa te przysługują pracownikowi osobiście, a nie pracodawcy, który sfinansował bilet służbowy.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Odszkodowanie finansowe</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  Do 600 EUR za opóźnienia powyżej 3 godzin, odwołania lub overbooking
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <Shield className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Opieka i pomoc</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  Posiłki, napoje, zakwaterowanie i transport w oczekiwaniu na lot
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <Info className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Prawo do informacji</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  Informacje o prawach i dostępnych opcjach w przypadku zakłóceń
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-12 mb-6">Wysokość odszkodowania</h2>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">Do 1500 km</p>
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">250 EUR</p>
                <p className="text-xs text-blue-700 dark:text-blue-300">Warszawa-Berlin</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-2">1500-3500 km</p>
                <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">400 EUR</p>
                <p className="text-xs text-purple-700 dark:text-purple-300">Warszawa-Madryt</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm font-medium text-green-900 dark:text-green-100 mb-2">Powyżej 3500 km</p>
                <p className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">600 EUR</p>
                <p className="text-xs text-green-700 dark:text-green-300">Warszawa-Nowy Jork</p>
              </div>
            </div>

            {/* CTA */}
            <div className="my-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Sprawdź swoje uprawnienia</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Twój lot służbowy był opóźniony lub odwołany? Sprawdź bezpłatnie, czy należy Ci się odszkodowanie.
              </p>
              <Link 
                href="https://claimwinger.com/pl/opozniony-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=ec261"
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
                    Czy EC 261/2004 dotyczy lotów służbowych?
                  </summary>
                  <p className="mt-4 text-slate-700 dark:text-slate-300">
                    Tak, rozporządzenie WE 261/2004 dotyczy lotów służbowych. Chroni wszystkich pasażerów podróżujących lotami z wylotem z UE lub do UE liniami UE, niezależnie od celu podróży.
                  </p>
                </details>

                <details className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                  <summary className="font-semibold text-lg text-slate-900 dark:text-slate-100 cursor-pointer">
                    Czy firma może odmówić wypłaty odszkodowania?
                  </summary>
                  <p className="mt-4 text-slate-700 dark:text-slate-300">
                    Nie, firma nie może odmówić wypłaty odszkodowania. Prawo do odszkodowania przysługuje pracownikowi-pasażerowi, a nie firmie.
                  </p>
                </details>

                <details className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                  <summary className="font-semibold text-lg text-slate-900 dark:text-slate-100 cursor-pointer">
                    Ile wynosi odszkodowanie dla lotów służbowych?
                  </summary>
                  <p className="mt-4 text-slate-700 dark:text-slate-300">
                    Odszkodowanie wynosi: 250 EUR dla tras do 1500 km, 400 EUR dla 1500-3500 km, 600 EUR powyżej 3500 km - niezależnie od ceny biletu służbowego.
                  </p>
                </details>
              </div>
            </section>

            {/* Related Articles */}
            <section className="my-16">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Powiązane artykuły</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/artykuly/overbooking-na-locie-sluzbowym-praca-pracodawcy" className="group block p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                    Overbooking na locie służbowym
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Prawa pracownika i pracodawcy w przypadku odmowy przyjęcia na pokład
                  </p>
                </Link>

                <Link href="/artykuly/lot-sluzbowy-opozniony-ponad-3-godziny-krok-po-kroku" className="group block p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                    Lot służbowy opóźniony o ponad 3 godziny
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Krok po kroku: jak odzyskać odszkodowanie za opóźniony lot służbowy
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