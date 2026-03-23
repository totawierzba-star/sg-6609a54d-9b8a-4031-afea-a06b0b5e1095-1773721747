import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Clock, CheckCircle, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function EmiratesVsLufthansa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Emirates vs Lufthansa — klasa biznes na długich trasach służbowych | BiznesLot.info"
        description="Porównanie Emirates Business Class i Lufthansa Business Class na trasach long-haul. Fotele, lounge, WiFi, punktualność, ceny i programy korporacyjne — co wybrać na delegację?"
        canonicalUrl="https://bizneslot.info/artykuly/emirates-vs-lufthansa-klasa-biznes"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "Emirates vs Lufthansa — klasa biznes na długich trasach służbowych",
                description:
                  "Porównanie Emirates Business Class i Lufthansa Business Class na trasach long-haul. Fotele, lounge, WiFi, punktualność, ceny i programy korporacyjne.",
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
                    name: "Czy Emirates Business Class jest lepsza niż Lufthansa Business Class?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Na trasach długodystansowych Emirates Business Class (szczególnie na A380) oferuje szersze fotele z drzwiczkami, mini-bar, lepszy catering i lounge w Dubaju uznawany za jeden z najlepszych na świecie. Lufthansa Allegris (A350) dogania Emirates prywatnym miejscem, ale Emirates prowadzi pod względem przestrzeni i serwisu na pokładzie.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Jak latać Emirates z Polski?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Emirates operuje z Warszawy (WAW) i Krakowa (KRK) bezpośrednio do Dubaju (DXB), skąd połączenia do ponad 140 destynacji. Z Dubaju dostaniesz się do Azji Południowej (Mumbai, Delhi, Bangkok), Australii, Azji Wschodniej i Afryki. Alternatywnie Lufthansa oferuje połączenia przez FRA/MUC do tych samych destynacji, często w podobnym czasie.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Który lounge jest lepszy — Emirates w Dubaju czy Lufthansa w Frankfurcie?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Emirates Business Lounge w Dubaju (DXB, Terminal 3) to jeden z największych i najlepiej ocenianych loungy na świecie — spa, restauracje à la carte, prysznice, przestrzeń na setki pasażerów. Lufthansa Senator Lounge w Frankfurcie (FRA) oferuje świetny catering, spokój i komfort pracy, ale jest skromniejszy od Emirates. Emirates wygrywa pod każdym względem.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Czy Emirates podlega EC 261 przy lotach z Polski?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Tak, częściowo. Emirates jako linia spoza UE podlega EC 261/2004 tylko na lotach wylotowych z lotnisk UE (np. WAW→DXB). Loty wylotowe z Dubaju do Polski (DXB→WAW) nie są objęte EC 261 — Emirates może stosować własne standardy odszkodowań. Lufthansa jako przewoźnik unijny podlega EC 261 na wszystkich swoich lotach.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-slate-50">
        <div className="bg-gradient-to-br from-slate-900 to-red-900 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
              <Link href="/artykuly" className="hover:text-white transition-colors">Artykuły</Link>
              <span>/</span>
              <span className="text-slate-300">Recenzje linii lotniczych</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Emirates vs Lufthansa — klasa biznes na długich trasach służbowych
            </h1>
            <p className="text-slate-300 text-lg mb-6">
              Przegląd na chłodno: przestrzeń, serwis, lounge, WiFi, punktualność i ceny — dla menedżera który leci służbowo do Azji, Bliskiego Wschodu lub Australii.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min czytania</span>
              <span className="flex items-center gap-1"><Plane className="w-4 h-4" /> Recenzje linii</span>
              <span>Aktualizacja: marzec 2026</span>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-10">

          <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl p-5 mb-10">
            <p className="font-semibold text-slate-900 mb-1">Odpowiedź wprost</p>
            <p className="text-slate-700 text-sm">
              <strong>Emirates wygrywa produktem</strong> — lounge w Dubaju, fotel na A380 z drzwiczkami i mini-barem, serwis klasy premium. <strong>Lufthansa wygrywa siatką połączeń z Europy</strong> i pełną ochroną EC 261 na wszystkich trasach. Dla delegacji do Azji i Bliskiego Wschodu Emirates to wybór na komfort; do Europy Zachodniej i Ameryki — Lufthansa.
            </p>
          </div>

          {/* Porównanie foteli */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Fotel i przestrzeń — szczegółowe porównanie</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white border border-red-200 rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span>🇦🇪</span> Emirates Business Class
                </p>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" /> A380: układ 1-2-1, fotel z drzwiczkami (sliding door)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" /> B777: układ 2-3-2 lub 1-2-1 (zależy od konfiguracji)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" /> Szerokość fotela: 20–23 cale (A380 najszerszy)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" /> Fully flat 180°, materac memory foam</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" /> Mini-bar z szampanem i alkoholami</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" /> Ekran 23 cale (A380) — największy w branży</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" /> Starsze B777 mają mniej prywatności niż A380</li>
                </ul>
              </div>
              <div className="bg-white border border-yellow-200 rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span>🇩🇪</span> Lufthansa Business Class (Allegris)
                </p>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" /> A350 Allegris: układ 1-2-1, drzwiczki na miejscach okiennych</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" /> Opcja Suite: izolowana kabina z drzwiczkami po obu stronach</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" /> Fully flat 180°, lepsza poduszka niż stary produkt LH</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" /> Większa przestrzeń na nogi (lie-flat length 207 cm)</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" /> Allegris tylko na A350 (rollout 2024–2025) — stary produkt na B747/A340</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" /> Brak mini-bara przy fotelu</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tabela porównawcza */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Porównanie kryterium po kryterium</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Kryterium</th>
                    <th className="text-center px-4 py-3 font-semibold text-red-300">Emirates</th>
                    <th className="text-center px-4 py-3 font-semibold text-yellow-300">Lufthansa</th>
                    <th className="text-left px-4 py-3 font-semibold">Komentarz</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { c: "Fotel (prywatność)", em: "★★★★★", lh: "★★★★☆", note: "Emirates A380 z drzwiczkami vs LH Allegris Suite" },
                    { c: "Catering / serwis", em: "★★★★★", lh: "★★★★☆", note: "Emirates: à la carte, szampan Moët; LH: dobry, nieco skromniejszy" },
                    { c: "Lounge (hub)", em: "★★★★★", lh: "★★★★☆", note: "Emirates DXB T3 = poziom światowy; LH FRA Senator = bardzo dobry" },
                    { c: "WiFi pokładowy", em: "★★★★☆", lh: "★★★★☆", note: "Porównywalny — oba ok. 10–20 Mbps na long-haul" },
                    { c: "IFE (rozrywka)", em: "★★★★★", lh: "★★★★☆", note: "Emirates ICE: 6 000+ tytułów, ekran 23\"; LH nieco mniej" },
                    { c: "Punktualność", em: "★★★☆☆", lh: "★★★☆☆", note: "Oba ~70–73% on-time (IATA 2024) — porównywalnie" },
                    { c: "Siatka połączeń", em: "★★★★☆", lh: "★★★★★", note: "LH więcej destynacji w Europie; Emirates silniejszy w Azji/Oceanii" },
                    { c: "Ochrona EC 261", em: "★★☆☆☆", lh: "★★★★★", note: "Emirates: tylko loty z UE; LH: wszystkie loty" },
                    { c: "Cena biletu", em: "★★★☆☆", lh: "★★★☆☆", note: "Porównywalny poziom; Emirates czasem tańszy do Azji przez DXB" },
                    { c: "Program lojalnościowy", em: "★★★★☆", lh: "★★★★★", note: "LH Miles & More szerszy (Star Alliance); Emirates Skywards solo" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 font-medium text-slate-900 text-xs">{row.c}</td>
                      <td className="px-4 py-3 text-center text-xs">{row.em}</td>
                      <td className="px-4 py-3 text-center text-xs">{row.lh}</td>
                      <td className="px-4 py-3 text-slate-600 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Trasy z Polski */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Połączenia z Polski — Emirates i Lufthansa</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Destynacja</th>
                    <th className="text-left px-4 py-3 font-semibold text-red-300">Emirates (przez DXB)</th>
                    <th className="text-left px-4 py-3 font-semibold text-yellow-300">Lufthansa (przez FRA/MUC)</th>
                    <th className="text-left px-4 py-3 font-semibold">Rekomendacja</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dest: "Dubaj (DXB)", em: "Bezpośredni ~6h", lh: "Przez FRA ~7–9h", rec: "Emirates" },
                    { dest: "Bombaj / Delhi", em: "Przez DXB ~10–12h", lh: "Przez FRA/MUC ~10–13h", rec: "Porównywalne" },
                    { dest: "Bangkok / Singapur", em: "Przez DXB ~12–14h", lh: "Przez FRA/MUC ~13–15h", rec: "Emirates (krótszy)" },
                    { dest: "Sydney / Melbourne", em: "Przez DXB ~21–24h", lh: "Przez FRA/SIN ~23–26h", rec: "Emirates" },
                    { dest: "Nowy Jork (JFK)", em: "Przez DXB ~16–18h", lh: "Przez FRA ~10–12h", rec: "Lufthansa (krótsza)" },
                    { dest: "Londyn (LHR)", em: "Przez DXB ~9–11h", lh: "Przez FRA ~3–4h", rec: "Lufthansa (zdecydowanie)" },
                    { dest: "Tokio (NRT)", em: "Przez DXB ~14–16h", lh: "Przez MUC ~13–15h", rec: "Porównywalne" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 font-medium text-slate-900 text-xs">{row.dest}</td>
                      <td className="px-4 py-3 text-xs text-slate-600">{row.em}</td>
                      <td className="px-4 py-3 text-xs text-slate-600">{row.lh}</td>
                      <td className="px-4 py-3 text-xs">
                        <span className={`px-2 py-0.5 rounded-full font-semibold ${
                          row.rec === "Emirates" ? "bg-red-100 text-red-700" :
                          row.rec === "Lufthansa (krótsza)" || row.rec === "Lufthansa (zdecydowanie)" ? "bg-yellow-100 text-yellow-700" :
                          "bg-slate-100 text-slate-600"
                        }`}>{row.rec}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* EC 261 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">EC 261 — kluczowa różnica prawna</h2>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <p className="text-slate-700 text-sm mb-4">
                To jest czynnik, który w delegacjach służbowych może mieć realny wpływ na ryzyko finansowe podróży.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="font-semibold text-yellow-900 mb-2">Lufthansa — pełna ochrona EC 261</p>
                  <ul className="space-y-1.5 text-xs text-yellow-800">
                    <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5" /> Wszystkie loty LH podlegają EC 261</li>
                    <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5" /> Lot FRA→WAW: pełne odszkodowanie przy opóźnieniu</li>
                    <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5" /> Odwołanie &lt;14 dni: 250–600 EUR</li>
                    <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5" /> Prawo do re-routingu i opieki (posiłki, hotel)</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="font-semibold text-red-900 mb-2">Emirates — częściowa ochrona EC 261</p>
                  <ul className="space-y-1.5 text-xs text-red-800">
                    <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5" /> WAW→DXB: EC 261 obowiązuje (lot wylotowy z UE)</li>
                    <li className="flex items-start gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-red-500 mt-0.5" /> DXB→WAW: EC 261 NIE obowiązuje</li>
                    <li className="flex items-start gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-red-500 mt-0.5" /> Opóźnienie powrotne z Dubaju = tylko polityka Emirates</li>
                    <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5" /> Emirates ma własny program kompensaty — zwykle niższy</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-slate-50 rounded-lg p-3 text-xs text-slate-700">
                <strong>Wniosek dla travel managera:</strong> Przy długich delegacjach z powrotem przez Dubaj (Emirates) — ryzyko braku ochrony EC 261 na trasie powrotnej. Rozważ ubezpieczenie podróżne pokrywające opóźnienia lotu.
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: "Czy Emirates Business Class jest lepsza niż Lufthansa Business Class?",
                  a: "Na trasach długodystansowych Emirates Business Class (szczególnie na A380) oferuje szersze fotele z drzwiczkami, mini-bar, lepszy catering i lounge w Dubaju. Lufthansa Allegris (A350) dogania Emirates prywatnym miejscem, ale Emirates prowadzi pod względem przestrzeni i serwisu na pokładzie.",
                },
                {
                  q: "Jak latać Emirates z Polski?",
                  a: "Emirates operuje z Warszawy (WAW) i Krakowa (KRK) bezpośrednio do Dubaju (DXB), skąd połączenia do ponad 140 destynacji. Z Dubaju dostaniesz się do Azji Południowej, Australii, Azji Wschodniej i Afryki. Alternatywnie Lufthansa oferuje połączenia przez FRA/MUC do tych samych destynacji.",
                },
                {
                  q: "Który lounge jest lepszy — Emirates w Dubaju czy Lufthansa w Frankfurcie?",
                  a: "Emirates Business Lounge w Dubaju (DXB, Terminal 3) to jeden z największych i najlepiej ocenianych loungy na świecie — spa, restauracje à la carte, prysznice. Lufthansa Senator Lounge w Frankfurcie (FRA) jest bardzo dobry, ale skromniejszy od Emirates. Emirates wygrywa pod każdym względem.",
                },
                {
                  q: "Czy Emirates podlega EC 261 przy lotach z Polski?",
                  a: "Tak, częściowo. Emirates jako linia spoza UE podlega EC 261/2004 tylko na lotach wylotowych z lotnisk UE (np. WAW→DXB). Loty wylotowe z Dubaju do Polski (DXB→WAW) nie są objęte EC 261. Lufthansa jako przewoźnik unijny podlega EC 261 na wszystkich swoich lotach.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden"
                  itemProp="mainEntity"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                  >
                    <p className="font-semibold text-slate-900 text-sm" itemProp="name">{item.q}</p>
                    {openFaq === idx
                      ? <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />}
                  </button>
                  {openFaq === idx && (
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer" className="px-5 pb-4">
                      <p className="text-slate-600 text-sm" itemProp="text">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="bg-slate-800 text-white rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-3">Lot Emirates lub Lufthansa był opóźniony?</h3>
            <p className="text-slate-300 mb-6 text-sm max-w-xl mx-auto">
              Loty wylotowe z Polski podlegają EC 261 — sprawdź czy należy Ci się odszkodowanie do 600 EUR.
            </p>
            <a
              href="https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=emirates-vs-lufthansa-klasa-biznes"
              className="inline-block bg-white text-slate-900 font-semibold px-8 py-3 rounded-xl hover:bg-slate-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sprawdź roszczenie za lot
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
