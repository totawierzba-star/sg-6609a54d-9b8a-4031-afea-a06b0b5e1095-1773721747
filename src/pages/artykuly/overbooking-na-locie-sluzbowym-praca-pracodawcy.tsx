import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Shield, CheckCircle2, AlertCircle, AlertTriangle, Users, ArrowRight } from "lucide-react";

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

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/artykuly" className="text-blue-200 hover:text-white text-sm transition-colors">← Wszystkie artykuły</Link>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-6 w-6 text-blue-200" />
              <span className="text-blue-200 font-medium text-sm">Prawa pasażera w podróży służbowej • 8 min czytania</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Overbooking na locie służbowym — prawa pracownika i pracodawcy
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Overbooking lotu służbowego uprawnia pracownika do odszkodowania do 600 EUR. Prawo przysługuje pasażerowi niezależnie od tego, kto kupił bilet i czy pracodawca wyrazi na to zgodę.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {["Do 600 EUR odszkodowania", "Prawo należy do pracownika", "No win, no fee"].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <p className="text-lg leading-relaxed text-gray-700 mb-10">
            Overbooking lotu służbowego to sytuacja, gdy linia lotnicza sprzedaje więcej biletów niż dostępnych miejsc. Pracownik, którego nie przyjęto na pokład, ma prawo do odszkodowania do 600 EUR niezależnie od tego, kto kupił bilet.
          </p>

          {/* Key Takeaway */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6 mb-12 flex gap-4">
            <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-900 mb-2">Najważniejsze informacje</p>
              <ul className="space-y-1">
                {[
                  "Overbooking lotu służbowego podlega rozporządzeniu WE 261/2004",
                  "Odszkodowanie przysługuje pracownikowi, nie firmie",
                  "Wysokość odszkodowania zależy od dystansu trasy",
                  "Termin składania wniosków: 3 lata w Polsce",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-blue-800 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Podstawa prawna */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-blue-600" />
              Podstawa prawna overbookingu w podróży służbowej
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Overbooking lotu służbowego jest regulowany przez rozporządzenie Parlamentu Europejskiego i Rady WE 261/2004. Rozporządzenie stosuje się do wszystkich pasażerów podróżujących lotami z wylotem z lotniska UE, niezależnie od celu podróży.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Kluczowe zasady</h3>
              <ul className="space-y-3">
                {[
                  "Rozporządzenie ma pierwszeństwo przed prawem krajowym",
                  "Nie rozróżnia podróży prywatnych i służbowych",
                  "Prawo przysługuje pasażerowi, nie kupującemu bilet",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Komu przysługuje */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-blue-600" />
              Komu przysługuje odszkodowanie?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Odszkodowanie za overbooking lotu służbowego przysługuje pracownikowi — pasażerowi, a nie pracodawcy, który kupił bilet. To fundamentalna zasada wynikająca z rozporządzenia WE 261/2004.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6 flex gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 mb-1">Uwaga</p>
                <p className="text-amber-800">Pracodawca nie może legalnie zabronić pracownikowi dochodzenia roszczeń ani żądać przekazania odszkodowania firmie. Takie postanowienia w umowie o pracę są niezgodne z prawem UE i nieważne.</p>
              </div>
            </div>
          </section>

          {/* Wysokość odszkodowania */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Shield className="h-8 w-8 text-blue-600" />
              Wysokość odszkodowania za overbooking
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { dist: "Do 1500 km", amount: "250 EUR", example: "Warszawa–Berlin, Kraków–Paryż", color: "blue" },
                { dist: "1500–3500 km", amount: "400 EUR", example: "Warszawa–Madryt, Wrocław–Rzym", color: "purple" },
                { dist: "Powyżej 3500 km", amount: "600 EUR", example: "Warszawa–Nowy Jork, Kraków–Dubaj", color: "green" },
              ].map(({ dist, amount, example, color }) => (
                <div key={dist} className={`text-center p-6 bg-gradient-to-br from-${color}-50 to-${color}-100 border border-${color}-200 rounded-xl`}>
                  <p className={`text-sm font-medium text-${color}-900 mb-2`}>{dist}</p>
                  <p className={`text-4xl font-bold text-${color}-600 mb-2`}>{amount}</p>
                  <p className={`text-xs text-${color}-700`}>{example}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Procedura */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Shield className="h-8 w-8 text-blue-600" />
              Procedura odzyskiwania odszkodowania
            </h2>

            <div className="space-y-4">
              {[
                { num: 1, title: "Zdobądź dokumentację na lotnisku", desc: "Poproś o oficjalny dokument potwierdzający odmowę przyjęcia na pokład, kartę pokładową z adnotacją \"denied boarding\" oraz informację o przyczynie." },
                { num: 2, title: "Zachowaj wszystkie dowody podróży", desc: "Zbierz kopię biletu służbowego, karty pokładowej, dokumentu odmowy oraz rachunków za wydatki poniesione w wyniku opóźnienia." },
                { num: 3, title: "Złóż reklamację do linii lotniczej", desc: "W ciągu 14 dni złóż oficjalną reklamację z kopią dokumentacji, numerem rezerwacji i danymi lotu." },
                { num: 4, title: "Skorzystaj z pomocy prawnej", desc: "Jeśli linia odmawia wypłaty, możesz skorzystać z usług firm działających na zasadzie no win, no fee." },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">{num}</div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Twój lot służbowy był opóźniony lub odwołany?</h3>
                <p className="text-blue-100">Sprawdź bezpłatnie, czy należy Ci się odszkodowanie do 600 EUR. ClaimWinger działa na zasadzie no win, no fee.</p>
              </div>
              <Link
                href="https://claimwinger.com/pl/opozniony-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=overbooking"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap flex-shrink-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sprawdź odszkodowanie <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Najczęstsze pytania</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Czy pracodawca może odmówić wypłaty odszkodowania za overbooking?",
                  a: "Nie, pracodawca nie może odmówić wypłaty odszkodowania. Prawo do odszkodowania z tytułu overbookingu przysługuje pracownikowi niezależnie od tego, kto kupił bilet.",
                },
                {
                  q: "Ile wynosi odszkodowanie za overbooking lotu służbowego?",
                  a: "Odszkodowanie wynosi do 600 EUR w zależności od dystansu: 250 EUR (do 1500 km), 400 EUR (1500–3500 km), 600 EUR (powyżej 3500 km).",
                },
                {
                  q: "Kto składa wniosek o odszkodowanie za overbooking?",
                  a: "Wniosek składa pracownik na swoje dane. Odszkodowanie przysługuje pasażerowi, niezależnie od tego, kto finansował bilet.",
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="font-semibold text-gray-900 mb-3" itemProp="name">{q}</h3>
                  <div itemScope itemType="https://schema.org/Answer">
                    <p className="text-gray-600 leading-relaxed" itemProp="text">{a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Powiązane artykuły */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Powiązane artykuły</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: "/artykuly/ec-261-2004-a-loty-sluzbowe-co-obejmuje-rozporzadzenie", title: "EC 261/2004 a loty służbowe — co obejmuje rozporządzenie" },
                { href: "/artykuly/lot-sluzbowy-opozniony-ponad-3-godziny-krok-po-kroku", title: "Lot opóźniony o ponad 3 godziny — krok po kroku" },
              ].map(({ href, title }) => (
                <Link key={href} href={href} className="flex items-center gap-3 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors group">
                  <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  <span className="text-gray-800 font-medium text-sm">{title}</span>
                </Link>
              ))}
            </div>
          </div>

        </article>
      </div>
    </>
  );
}
