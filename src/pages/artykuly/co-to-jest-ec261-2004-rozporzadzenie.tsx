import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function CoToJestEc2612004() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Co to jest EC 261/2004? Rozporządzenie o prawach pasażera — wyjaśnienie | BiznesLot.info"
        description="EC 261/2004 to rozporządzenie UE, które daje pasażerom prawo do odszkodowania 250–600 EUR za opóźniony lub odwołany lot. Wyjaśnienie w 5 zdaniach i pełny zakres stosowania."
        canonicalUrl="https://bizneslot.info/artykuly/co-to-jest-ec261-2004-rozporzadzenie"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "Co to jest EC 261/2004? Rozporządzenie o prawach pasażera — wyjaśnienie",
                description:
                  "EC 261/2004 to rozporządzenie UE dające pasażerom prawo do odszkodowania 250–600 EUR za opóźniony lub odwołany lot.",
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
                    name: "Co to jest EC 261/2004?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "EC 261/2004 to rozporządzenie Parlamentu Europejskiego i Rady z 11 lutego 2004 r. ustanawiające wspólne zasady odszkodowania i pomocy dla pasażerów w przypadku odmowy przyjęcia na pokład, odwołania lub dużego opóźnienia lotów. Rozporządzenie przyznaje pasażerom prawo do odszkodowania w wysokości 250, 400 lub 600 EUR — zależnie od długości trasy.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Kiedy obowiązuje EC 261/2004?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "EC 261/2004 obowiązuje: (1) na wszystkich lotach wylatujących z lotnisk na terytorium UE (niezależnie od przewoźnika), (2) na lotach przylatujących do UE z państw trzecich, jeśli przewoźnik jest zarejestrowany w UE. Rozporządzenie NIE obowiązuje na lotach wylatujących spoza UE z przewoźnikami non-EU (np. lot Dubaj–Warszawa z Emirates, lot Nowy Jork–Warszawa z American Airlines).",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Ile wynosi odszkodowanie z EC 261/2004?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Odszkodowanie EC 261/2004 wynosi: 250 EUR dla tras do 1 500 km, 400 EUR dla tras 1 500–3 500 km, 600 EUR dla tras powyżej 3 500 km. Kwoty dotyczą opóźnienia powyżej 3 godzin, odwołania lotu (powiadomienie < 14 dni) oraz overbookingu.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-violet-700 via-violet-800 to-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-violet-200 text-sm mb-4">
              <Plane className="w-4 h-4" />
              <Link href="/artykuly" className="hover:text-white transition-colors">Artykuły</Link>
              <span>/</span>
              <span>Prawa pasażera</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Co to jest EC 261/2004? Wyjaśnienie w 5 zdaniach
            </h1>
            <p className="text-xl text-violet-100 mb-6">
              Rozporządzenie, które daje pasażerom prawo do odszkodowania 250–600 EUR za opóźniony lub odwołany
              lot — i obowiązuje na wszystkich lotach z UE.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-violet-200">
              <span>Czas czytania: 4 min</span>
              <span>Aktualizacja: marzec 2026</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
          {/* Direct Answer — 5 zdań */}
          <div className="bg-violet-50 border-l-4 border-violet-500 rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-violet-900 mb-3">EC 261/2004 — wyjaśnienie w 5 zdaniach</h2>
            <ol className="space-y-2 text-violet-800">
              <li className="flex gap-3"><span className="font-bold text-violet-500 flex-shrink-0">1.</span> EC 261/2004 to rozporządzenie Unii Europejskiej z 2004 roku, które chroni pasażerów lotniczych na terenie UE.</li>
              <li className="flex gap-3"><span className="font-bold text-violet-500 flex-shrink-0">2.</span> Daje Ci prawo do odszkodowania 250, 400 lub 600 EUR jeśli lot był opóźniony o ponad 3 godziny, odwołany lub odmówiono Ci wejścia na pokład.</li>
              <li className="flex gap-3"><span className="font-bold text-violet-500 flex-shrink-0">3.</span> Obowiązuje na wszystkich lotach wylatujących z lotnisk w UE — niezależnie czy lecisz LOT-em, Ryanairem, czy Emirates.</li>
              <li className="flex gap-3"><span className="font-bold text-violet-500 flex-shrink-0">4.</span> Linia może odmówić wypłaty tylko w przypadku &ldquo;nadzwyczajnych okoliczności&rdquo; — jak ekstremalny sztorm, zamknięcie lotniska czy strajk kontrolerów.</li>
              <li className="flex gap-3"><span className="font-bold text-violet-500 flex-shrink-0">5.</span> Wniosek możesz złożyć samodzielnie lub przez pośrednika (bez opłat z góry) — masz na to 1–3 lata od daty lotu.</li>
            </ol>
          </div>

          {/* Pełna nazwa i podstawa */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pełna nazwa i podstawa prawna</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <dl className="space-y-3 text-sm">
                {[
                  ["Pełna nazwa", "Rozporządzenie (WE) nr 261/2004 Parlamentu Europejskiego i Rady z dnia 11 lutego 2004 r. ustanawiające wspólne zasady odszkodowania i pomocy dla pasażerów w przypadku odmowy przyjęcia na pokład albo odwołania lub dużego opóźnienia lotów"],
                  ["Skrótowa nazwa", "EC 261/2004 lub Rozporządzenie 261"],
                  ["Weszło w życie", "17 lutego 2005 r."],
                  ["Zastąpiło", "Rozporządzenie (EWG) nr 295/91"],
                  ["Stosowane w", "Wszystkich państwach UE + EOG (Norwegia, Islandia, Liechtenstein) + Szwajcaria"],
                  ["Odpowiednik w UK", "UK261 (analogiczne przepisy po Brexicie, te same kwoty w GBP)"],
                ].map(([label, val]) => (
                  <div key={label} className="flex gap-3">
                    <dt className="font-semibold text-gray-500 w-36 flex-shrink-0">{label}:</dt>
                    <dd className="text-gray-700">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* Zakres stosowania */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kiedy EC 261/2004 obowiązuje?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> Obowiązuje
                </h3>
                <ul className="space-y-2 text-sm text-green-800">
                  {[
                    "Wszystkie loty wylatujące z UE (niezależnie od przewoźnika)",
                    "Np. WAW→LHR z Ryanairem ✓",
                    "Np. WAW→DXB z Emirates ✓",
                    "Np. WAW→JFK z LOT ✓",
                    "Loty przylotowe do UE — tylko jeśli przewoźnik jest z UE",
                    "Np. LHR→WAW z LOT ✓",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-500 flex-shrink-0">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 flex items-center justify-center font-bold">✗</span> NIE obowiązuje
                </h3>
                <ul className="space-y-2 text-sm text-red-800">
                  {[
                    "Loty spoza UE z przewoźnikami non-EU",
                    "Np. DXB→WAW z Emirates ✗",
                    "Np. JFK→WAW z American Airlines ✗",
                    "Np. BKK→WAW z Thai Airways ✗",
                    "Loty w krajach trzecich (np. USA wewnętrzne)",
                    "Loty prywatne / czarterowe bez publicznej sprzedaży biletów",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-red-500 flex-shrink-0">✗</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Co obejmuje */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Co obejmuje EC 261/2004?</h2>
            <div className="space-y-3">
              {[
                {
                  sytuacja: "Opóźnienie powyżej 2 godzin",
                  prawo: "Opieka: posiłek, napoje, 2 bezpłatne połączenia",
                  odszkodowanie: "Brak (chyba że opóźnienie > 3 h na lotnisku docelowym)",
                },
                {
                  sytuacja: "Opóźnienie powyżej 3 godzin (cel podróży)",
                  prawo: "Opieka + odszkodowanie",
                  odszkodowanie: "250–600 EUR",
                },
                {
                  sytuacja: "Opóźnienie powyżej 5 godzin",
                  prawo: "Prawo do rezygnacji z lotu i zwrotu biletu",
                  odszkodowanie: "250–600 EUR + zwrot biletu",
                },
                {
                  sytuacja: "Odwołanie lotu (< 14 dni przed odlotem)",
                  prawo: "Zmiana trasy lub zwrot biletu + opieka",
                  odszkodowanie: "250–600 EUR",
                },
                {
                  sytuacja: "Overbooking (odmowa przyjęcia na pokład)",
                  prawo: "Zmiana trasy lub zwrot biletu + opieka",
                  odszkodowanie: "250–600 EUR",
                },
                {
                  sytuacja: "Downgrade (przymusowe obniżenie klasy)",
                  prawo: "Zwrot 30–75% ceny biletu (zależnie od trasy)",
                  odszkodowanie: "Zwrot proporcjonalny, brak dodatkowego EC 261",
                },
              ].map((row, i) => (
                <div key={row.sytuacja} className={`flex flex-col md:flex-row gap-3 p-4 rounded-xl border ${i % 2 === 0 ? "bg-white border-gray-200" : "bg-gray-50 border-gray-200"}`}>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{row.sytuacja}</p>
                    <p className="text-sm text-gray-600 mt-0.5">{row.prawo}</p>
                  </div>
                  <div className="flex-shrink-0 font-bold text-violet-700 text-sm md:text-right">{row.odszkodowanie}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Najczęstsze pytania</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Co to jest EC 261/2004?",
                  a: "EC 261/2004 to rozporządzenie Parlamentu Europejskiego i Rady z 2004 r. ustanawiające wspólne zasady odszkodowania dla pasażerów w przypadku odmowy przyjęcia na pokład, odwołania lub opóźnienia lotów. Przyznaje pasażerom prawo do odszkodowania w wysokości 250, 400 lub 600 EUR zależnie od długości trasy.",
                },
                {
                  q: "Kiedy obowiązuje EC 261/2004?",
                  a: "EC 261/2004 obowiązuje na wszystkich lotach wylatujących z lotnisk na terytorium UE (niezależnie od przewoźnika) oraz na lotach przylatujących do UE z państw trzecich, jeśli przewoźnik jest zarejestrowany w UE. NIE obowiązuje na lotach wylatujących spoza UE z przewoźnikami non-EU.",
                },
                {
                  q: "Ile wynosi odszkodowanie z EC 261/2004?",
                  a: "Odszkodowanie EC 261/2004 wynosi: 250 EUR dla tras do 1 500 km, 400 EUR dla tras 1 500–3 500 km, 600 EUR dla tras powyżej 3 500 km. Dotyczy opóźnienia > 3 h, odwołania (powiadomienie < 14 dni) oraz overbookingu.",
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
                { title: "EC 261 a loty spoza UE — kiedy obowiązuje?", slug: "ec261-loty-spoza-ue-kiedy-obowiazuje" },
                { title: "Jak długo linia ma na odpowiedź na reklamację?", slug: "jak-dlugo-linia-lotnicza-ma-na-odpowiedz-na-reklamacje" },
              ].map((art) => (
                <Link key={art.slug} href={`/artykuly/${art.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-violet-300 hover:shadow-sm transition-all group">
                  <span className="text-sm font-medium text-gray-800 group-hover:text-violet-700 transition-colors">{art.title} →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-violet-50 to-violet-100 border border-violet-200 rounded-2xl p-8 text-center">
            <Plane className="w-10 h-10 text-violet-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Masz prawo do odszkodowania — sprawdź teraz</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              EC 261/2004 daje Ci 250–600 EUR za opóźniony lub odwołany lot. ClaimWinger weryfikuje
              roszczenie bezpłatnie — płacisz prowizję tylko przy wygranej.
            </p>
            <a
              href={`https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=co-to-jest-ec261-2004-rozporzadzenie`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
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
