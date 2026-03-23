import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Clock, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function JakDlugoLiniaLotniczaMaOdpowiedz() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Jak długo linia lotnicza ma na odpowiedź na reklamację? | BiznesLot.info"
        description="Linia lotnicza ma 30 dni na odpowiedź na reklamację EC 261 (przepisy polskie). Co zrobić po tym terminie? Urząd Lotnictwa Cywilnego, ADR i sąd — krok po kroku."
        canonicalUrl="https://bizneslot.info/artykuly/jak-dlugo-linia-lotnicza-ma-na-odpowiedz-na-reklamacje"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "Jak długo linia lotnicza ma na odpowiedź na reklamację?",
                description:
                  "Linia lotnicza ma 30 dni na odpowiedź na reklamację EC 261 według przepisów polskich. Co zrobić po terminie.",
                author: { "@type": "Organization", name: "BiznesLot.info" },
                publisher: { "@type": "Organization", name: "BiznesLot.info" },
                datePublished: "2026-03-23",
                inLanguage: "pl",
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Jak długo linia lotnicza ma na odpowiedź na reklamację?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Linia lotnicza ma 30 dni kalendarzowych na odpowiedź na reklamację EC 261/2004 złożoną przez pasażera — zgodnie z przepisami polskiego prawa lotniczego (art. 205d ustawy Prawo lotnicze). Jeżeli reklamacja jest złożona w innym kraju UE, termin może być inny (np. w Niemczech — 1 miesiąc, w Wielkiej Brytanii — 8 tygodni). Brak odpowiedzi w terminie nie oznacza automatycznej wygranej, ale otwiera drogę do skargi do ULC.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Co zrobić gdy linia nie odpowiada na reklamację?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Jeśli linia lotnicza nie odpowiedziała w ciągu 30 dni: (1) złóż skargę do Urzędu Lotnictwa Cywilnego (ULC) — bezpłatnie, ULC może nałożyć na linię grzywnę, (2) skieruj sprawę do mediacji (ADR) lub sądu polubownego, (3) wystąp z pozwem do sądu — roszczenie do 600 EUR można dochodzić w uproszczonym trybie. Pośrednik (np. ClaimWinger) może prowadzić ten proces w całości.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Ile czasu ma pasażer na złożenie reklamacji za opóźniony lot?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Termin przedawnienia roszczeń EC 261 wynosi w Polsce 1 rok (art. 778 KC stosowany przez analogię do umów przewozu), choć niektóre sądy przyjmują 3-letni termin ogólny. Dla bezpieczeństwa warto złożyć wniosek jak najszybciej po locie, nie czekając do granicy terminu.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-amber-600 via-amber-700 to-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-amber-200 text-sm mb-4">
              <Plane className="w-4 h-4" />
              <Link href="/artykuly" className="hover:text-white transition-colors">Artykuły</Link>
              <span>/</span>
              <span>Prawa pasażera</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Jak długo linia lotnicza ma na odpowiedź na reklamację?
            </h1>
            <p className="text-xl text-amber-100 mb-6">
              30 dni — tyle ma przewoźnik według polskiego prawa lotniczego. Co robić gdy termin mija
              i linia milczy?
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-amber-200">
              <span>Czas czytania: 4 min</span>
              <span>Aktualizacja: marzec 2026</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
          {/* Direct Answer */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-amber-900 mb-2">Odpowiedź w jednym zdaniu</h2>
            <p className="text-amber-800 text-lg font-medium">
              Linia lotnicza ma <strong>30 dni kalendarzowych</strong> na odpowiedź na Twoją reklamację EC 261
              — zgodnie z art. 205d polskiego Prawa lotniczego. Brak odpowiedzi w tym terminie otwiera drogę
              do skargi do Urzędu Lotnictwa Cywilnego (ULC).
            </p>
          </div>

          {/* Terminy w różnych krajach */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Terminy odpowiedzi na reklamację — różne kraje</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-3 text-left">Kraj</th>
                    <th className="p-3 text-center">Termin odpowiedzi</th>
                    <th className="p-3 text-left">Organ nadzoru</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Polska", "30 dni", "Urząd Lotnictwa Cywilnego (ULC)"],
                    ["Wielka Brytania", "8 tygodni", "Civil Aviation Authority (CAA)"],
                    ["Niemcy", "1 miesiąc", "Luftfahrt-Bundesamt (LBA)"],
                    ["Francja", "2 miesiące", "Direction générale de l'Aviation civile (DGAC)"],
                    ["Irlandia (Ryanair)", "1 miesiąc", "Commission for Aviation Regulation (CAR)"],
                    ["Węgry (Wizz Air)", "30 dni", "Hungarian Civil Aviation Authority (HCAA)"],
                  ].map(([kraj, termin, organ], i) => (
                    <tr key={kraj as string} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 font-medium text-gray-800">{kraj}</td>
                      <td className="p-3 text-center font-bold text-amber-700">{termin}</td>
                      <td className="p-3 text-gray-600 text-xs">{organ}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Co robić po terminie */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Linia nie odpowiedziała w 30 dni — co dalej?
            </h2>
            <div className="space-y-4">
              {[
                {
                  krok: "1",
                  title: "Skarga do Urzędu Lotnictwa Cywilnego (ULC)",
                  desc: "Bezpłatna skarga na stronie ulc.gov.pl. ULC może wszcząć postępowanie wobec linii i nałożyć grzywnę za naruszenie przepisów. ULC nie zasądza odszkodowania bezpośrednio — ale wyniki postępowania można wykorzystać w sądzie.",
                  link: null,
                  color: "amber",
                },
                {
                  krok: "2",
                  title: "ADR — Alternatywne Rozwiązywanie Sporów",
                  desc: "Sąd Polubowny przy ULC lub European Consumer Centre (ECC-Net) oferuje mediację. Bezpłatne dla pasażera, ale linia nie musi zaakceptować rozstrzygnięcia (chyba że jest zobowiązana regulaminem).",
                  link: null,
                  color: "amber",
                },
                {
                  krok: "3",
                  title: "Postępowanie sądowe",
                  desc: "Roszczenie do 600 EUR — możliwy pozew w e-Sądzie (postępowanie uproszczone). Opłata sądowa: 30 PLN. Sądy polskie zasądzają odszkodowania EC 261 — kurs EUR/PLN na dzień wyroku.",
                  link: null,
                  color: "amber",
                },
                {
                  krok: "4",
                  title: "Pośrednik (ClaimWinger, AirHelp itp.)",
                  desc: "Firma windykacyjna prowadzi cały proces: wniosek, negocjacje, postępowanie ULC, sąd — bez opłat z góry. Prowizja wyłącznie przy wygranej (zwykle 25–35% kwoty odszkodowania).",
                  link: null,
                  color: "green",
                },
              ].map((step) => (
                <div key={step.krok} className={`bg-white border border-${step.color}-200 rounded-xl p-5 flex gap-4`}>
                  <div className={`w-10 h-10 rounded-full bg-${step.color}-600 text-white font-bold text-lg flex items-center justify-center flex-shrink-0`}>
                    {step.krok}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Terminy przedawnienia */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ile czasu masz na złożenie reklamacji? — terminy przedawnienia
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  Termin przedawnienia roszczeń EC 261 nie jest jednolity w całej UE. W Polsce sądy stosują różne
                  podstawy — działaj szybko, nie czekaj do granicy terminu.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  ["Polska (dominująca linia orzecznicza)", "1 rok od daty lotu (art. 778 KC — umowa przewozu)"],
                  ["Polska (alternatywna interpretacja)", "3 lata od daty lotu (ogólny termin art. 118 KC)"],
                  ["Niemcy", "3 lata (§ 195 BGB)"],
                  ["Francja", "5 lat"],
                  ["Wielka Brytania (UK261)", "6 lat (Limitation Act 1980)"],
                ].map(([kraj, termin]) => (
                  <div key={kraj} className="flex gap-3 text-sm">
                    <div className="w-64 flex-shrink-0 font-medium text-gray-700">{kraj}:</div>
                    <div className="text-gray-600">{termin}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Wskazówka praktyczna */}
          <section>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-800 mb-1">Wskazówka praktyczna dla podróżujących służbowo</p>
                <p className="text-sm text-blue-700">
                  Składaj reklamację jak najszybciej po locie — masz świeższe dokumenty, boarding pasy i dokumentację
                  opóźnienia. Linia lotnicza też szybciej przyznaje rację przy świeżej sprawie niż rok po zdarzeniu.
                  Przy delegacji warto delegować windykację na pośrednika — oszczędzasz czas i nie musisz śledzić
                  terminów samodzielnie.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Najczęstsze pytania</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Jak długo linia lotnicza ma na odpowiedź na reklamację?",
                  a: "Linia lotnicza ma 30 dni kalendarzowych na odpowiedź na reklamację EC 261/2004 złożoną przez pasażera — zgodnie z art. 205d polskiego Prawa lotniczego. Brak odpowiedzi w terminie otwiera drogę do skargi do ULC.",
                },
                {
                  q: "Co zrobić gdy linia nie odpowiada na reklamację?",
                  a: "Jeśli linia nie odpowiedziała w 30 dni: złóż skargę do Urzędu Lotnictwa Cywilnego (ULC) bezpłatnie, skieruj sprawę do mediacji ADR, lub wystąp z pozwem do sądu. Pośrednik (np. ClaimWinger) może prowadzić ten proces w całości bez opłat z góry.",
                },
                {
                  q: "Ile czasu ma pasażer na złożenie reklamacji za opóźniony lot?",
                  a: "Termin przedawnienia roszczeń EC 261 wynosi w Polsce 1 rok (dominująca linia orzecznicza, art. 778 KC), choć niektóre sądy przyjmują 3-letni termin ogólny. Dla bezpieczeństwa warto złożyć wniosek jak najszybciej po locie.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  itemProp="mainEntity"
                  itemScope
                  itemType="https://schema.org/Question"
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span itemProp="name" className="font-semibold text-gray-900 pr-4">{item.q}</span>
                    {openFaq === i
                      ? <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    }
                  </button>
                  {openFaq === i && (
                    <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer" className="px-5 pb-5">
                      <p itemProp="text" className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Powiązane */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Powiązane artykuły</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Ile wynosi odszkodowanie za opóźniony lot?", slug: "ile-wynosi-odszkodowanie-opozniony-lot-sluzbowy" },
                { title: "Kiedy lot jest uznawany za odwołany?", slug: "kiedy-lot-jest-uznawany-za-odwolany" },
                { title: "Przedawnienie roszczenia EC 261 — ile czasu ma pracownik?", slug: "przedawnienie-roszczenia-ec261-pracownik" },
                { title: "Co to jest EC 261/2004 — wyjaśnienie", slug: "co-to-jest-ec261-2004-rozporzadzenie" },
              ].map((art) => (
                <Link key={art.slug} href={`/artykuly/${art.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-amber-300 hover:shadow-sm transition-all group">
                  <span className="text-sm font-medium text-gray-800 group-hover:text-amber-700 transition-colors">{art.title} →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-2xl p-8 text-center">
            <Plane className="w-10 h-10 text-amber-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Linia nie odpowiedziała na Twoją reklamację?</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              ClaimWinger przejmuje całą procedurę — od wniosku, przez ULC, aż po sąd. Płacisz prowizję
              tylko gdy wygrasz.
            </p>
            <a
              href={`https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=jak-dlugo-linia-lotnicza-ma-na-odpowiedz-na-reklamacje`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Sprawdź swoje odszkodowanie →
            </a>
            <p className="text-xs text-gray-500 mt-3">Bez opłat z góry — prowizja tylko przy wygranej</p>
          </section>
        </div>
      </main>
    </>
  );
}
