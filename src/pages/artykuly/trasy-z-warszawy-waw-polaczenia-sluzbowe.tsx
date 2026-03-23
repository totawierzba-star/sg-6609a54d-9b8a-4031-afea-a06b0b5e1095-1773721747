import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Clock, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function TrasynzWarszawy() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Trasy z Warszawy (WAW) — najważniejsze połączenia służbowe | BiznesLot.info"
        description="Które destynacje biznesowe są najlepiej skomunikowane z Warszawy Chopina? Bezpośrednie loty do Londynu, Frankfurtu, Paryża, Nowego Jorku, Dubaju i Azji — czas lotu, przewoźnicy, częstotliwość."
        canonicalUrl="https://bizneslot.info/artykuly/trasy-z-warszawy-waw-polaczenia-sluzbowe"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "Trasy z Warszawy (WAW) — najważniejsze połączenia służbowe",
                description:
                  "Które destynacje biznesowe są najlepiej skomunikowane z Warszawy Chopina? Bezpośrednie loty do Londynu, Frankfurtu, Paryża, Nowego Jorku, Dubaju i Azji.",
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
                    name: "Które linie latają bezpośrednio z Warszawy do Nowego Jorku?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Bezpośrednie loty WAW–JFK i WAW–EWR operuje LOT Polish Airlines (Boeing 787 Dreamliner, ok. 9–10 h). Inne połączenia transatlantyckie z WAW (np. do Chicago ORD, Toronto YYZ, Los Angeles LAX) również obsługuje LOT sezonowo lub całorocznie. American Airlines i Delta nie oferują bezpośrednich lotów WAW–USA.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Jak dolecieć z Warszawy do Tokio lub Seulu?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Brak bezpośrednich połączeń WAW–TYO lub WAW–ICN. Najwygodniejsze opcje z jedną przesiadką: LOT przez Frankfurt lub Amsterdam (codeshare z Lufthansa/KLM), Lufthansa przez FRA/MUC, Emirates przez DXB, Qatar Airways przez DOH. Czas podróży: 13–16 h. Najkrótsza opcja to zwykle Lufthansa FRA lub Turkish Airlines przez IST.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Ile trwa lot z Warszawy do Londynu?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Lot WAW–LHR (Heathrow) trwa ok. 2 h 30 min–2 h 50 min. LOT, British Airways i Ryanair (WAW–STN) operują tę trasę. WAW–LGW (Gatwick) operuje m.in. Wizz Air. Częstotliwość: 3–6 rejsów dziennie zależnie od przewoźnika i sezonu.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Czy z Warszawy można polecieć bezpośrednio do Dubaju?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Tak — Emirates operuje bezpośrednie loty WAW–DXB (ok. 5 h 30 min), zwykle 1 raz dziennie. Flydubai i LOT (codeshare) oferują alternatywy. Dubaj to też popularny hub do dalszych destynacji w Azji, Afryce i Oceanii.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Które lotnisko w Warszawie jest lepsze do delegacji — Chopin (WAW) czy Modlin (WMI)?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Na delegacje służbowe zdecydowanie WAW (Chopin). Lotnisko Chopina oferuje: klasę biznes i lounge (LOT, Lufthansa, British Airways), lepszą komunikację z centrum (20–30 min SKM lub taxi), więcej połączeń bezpośrednich i łatwą zmianę biletu. Modlin (WMI) obsługuje głównie Ryanair i przydaje się wyłącznie przy lotach bez bagażu i z bardzo wczesnym wylotem.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-sky-700 via-blue-800 to-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sky-200 text-sm mb-4">
              <Plane className="w-4 h-4" />
              <Link href="/artykuly" className="hover:text-white transition-colors">
                Artykuły
              </Link>
              <span>/</span>
              <span>Recenzje linii lotniczych</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Trasy z Warszawy (WAW) — najważniejsze połączenia służbowe
            </h1>
            <p className="text-xl text-sky-100 mb-6">
              Przegląd kluczowych destynacji biznesowych z Warszawy Chopina: bezpośrednie loty, czasy podróży,
              przewoźnicy i rekomendacje dla menedżerów często latających służbowo.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-sky-200">
              <span>Czas czytania: 7 min</span>
              <span>Aktualizacja: marzec 2026</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          {/* Direct Answer Box */}
          <div className="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-sky-900 mb-3">Krótka odpowiedź</h2>
            <p className="text-sky-800">
              Warszawa Chopin (WAW) oferuje bezpośrednie połączenia do ponad 100 destynacji. Najważniejsze dla
              delegacji: Londyn (LHR/LCY/STN), Frankfurt (FRA), Paryż (CDG), Amsterdam (AMS), Bruksela (BRU),
              Nowy Jork (JFK/EWR), Chicago (ORD), Dubaj (DXB) i Pekin (PEK). Na większość tras azjatyckich
              wymagana jest jedna przesiadka — najkrócej przez FRA, IST lub DXB.
            </p>
          </div>

          {/* Główne trasy — Europa */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Europa — kluczowe trasy biznesowe z WAW
            </h2>
            <p className="text-gray-500 text-sm mb-6">Połączenia bezpośrednie z Warszawy Chopina (WAW)</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-3 text-left">Destynacja</th>
                    <th className="p-3 text-center">Kod IATA</th>
                    <th className="p-3 text-center">Czas lotu</th>
                    <th className="p-3 text-left">Przewoźnicy (wybór)</th>
                    <th className="p-3 text-center">Częstotliwość</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Londyn Heathrow", "LHR", "2h 40min", "LOT, British Airways", "3–5 ×/dzień"],
                    ["Londyn City", "LCY", "2h 35min", "LOT", "1–2 ×/dzień"],
                    ["Frankfurt", "FRA", "1h 55min", "LOT, Lufthansa", "4–6 ×/dzień"],
                    ["Monachium", "MUC", "1h 50min", "LOT, Lufthansa", "3–5 ×/dzień"],
                    ["Paryż CDG", "CDG", "2h 20min", "LOT, Air France", "3–4 ×/dzień"],
                    ["Amsterdam", "AMS", "2h 00min", "LOT, KLM", "3–4 ×/dzień"],
                    ["Bruksela", "BRU", "2h 10min", "LOT, Brussels Airlines", "2–3 ×/dzień"],
                    ["Wiedeń", "VIE", "1h 30min", "LOT, Austrian", "3–4 ×/dzień"],
                    ["Zurych", "ZRH", "2h 00min", "LOT, SWISS", "2–3 ×/dzień"],
                    ["Sztokholm", "ARN", "1h 45min", "LOT, SAS", "2–3 ×/dzień"],
                    ["Kopenhaga", "CPH", "1h 30min", "LOT, SAS", "2–3 ×/dzień"],
                    ["Oslo", "OSL", "1h 50min", "LOT, Norwegian", "2–3 ×/dzień"],
                    ["Helsinki", "HEL", "1h 20min", "LOT, Finnair", "2–3 ×/dzień"],
                    ["Mediolan MXP", "MXP", "2h 15min", "LOT, Ryanair", "2–3 ×/dzień"],
                    ["Rzym FCO", "FCO", "2h 45min", "LOT, ITA Airways", "2–3 ×/dzień"],
                    ["Madryt", "MAD", "3h 10min", "LOT, Iberia", "1–2 ×/dzień"],
                    ["Praga", "PRG", "1h 00min", "LOT, Czech Airlines", "2–3 ×/dzień"],
                    ["Budapeszt", "BUD", "1h 10min", "LOT, Wizz Air", "2–3 ×/dzień"],
                  ].map(([dest, iata, czas, prev, czest], i) => (
                    <tr key={dest as string} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 font-medium text-gray-800">{dest}</td>
                      <td className="p-3 text-center font-mono text-sky-700 font-bold">{iata}</td>
                      <td className="p-3 text-center text-gray-600">{czas}</td>
                      <td className="p-3 text-gray-600">{prev}</td>
                      <td className="p-3 text-center text-gray-600">{czest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Trasy intercontinentalne */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Intercontinental — trasy bezpośrednie i z przesiadką
            </h2>
            <p className="text-gray-500 text-sm mb-6">Stan na marzec 2026 — rozkład może się zmieniać sezonowo</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-3 text-left">Destynacja</th>
                    <th className="p-3 text-center">Kod</th>
                    <th className="p-3 text-center">Połączenie</th>
                    <th className="p-3 text-center">Czas podróży</th>
                    <th className="p-3 text-left">Najlepsza opcja</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Nowy Jork JFK", "JFK", "Bezpośredni", "9h 30min", "LOT (B787)"],
                    ["Nowy Jork EWR", "EWR", "Bezpośredni", "9h 30min", "LOT (B787)"],
                    ["Chicago O'Hare", "ORD", "Bezpośredni", "10h 30min", "LOT (B787)"],
                    ["Los Angeles", "LAX", "Bezpośredni (sez.)", "12h 30min", "LOT (B787, sezonowo)"],
                    ["Toronto", "YYZ", "Bezpośredni", "9h 45min", "LOT (B787)"],
                    ["Dubaj", "DXB", "Bezpośredni", "5h 30min", "Emirates"],
                    ["Abu Dhabi", "AUH", "1 przesiadka", "7–9h", "Etihad przez AUH"],
                    ["Doha", "DOH", "1 przesiadka", "6–8h", "Qatar Airways przez DOH"],
                    ["Pekin", "PEK", "1 przesiadka", "11–13h", "LOT/LH przez FRA lub AY przez HEL"],
                    ["Szanghaj", "PVG", "1 przesiadka", "12–14h", "Lufthansa przez FRA"],
                    ["Tokio Narita", "NRT", "1 przesiadka", "13–16h", "LOT/LH przez FRA lub TK przez IST"],
                    ["Seul Incheon", "ICN", "1 przesiadka", "13–15h", "Lufthansa przez FRA"],
                    ["Singapur", "SIN", "1 przesiadka", "13–15h", "Emirates przez DXB"],
                    ["Bangkok", "BKK", "1 przesiadka", "12–14h", "Emirates przez DXB lub TK przez IST"],
                    ["Mumbai", "BOM", "1 przesiadka", "9–11h", "LOT przez LHR lub LH przez FRA"],
                    ["Tel Awiw", "TLV", "Bezpośredni", "3h 30min", "LOT, Arkia, El Al"],
                    ["Kair", "CAI", "Bezpośredni", "3h 45min", "LOT, EgyptAir"],
                  ].map(([dest, iata, conn, czas, opc], i) => (
                    <tr key={dest as string} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 font-medium text-gray-800">{dest}</td>
                      <td className="p-3 text-center font-mono text-sky-700 font-bold">{iata}</td>
                      <td className={`p-3 text-center text-xs font-semibold ${conn === "Bezpośredni" || conn === "Bezpośredni (sez.)" ? "text-green-600" : "text-amber-600"}`}>
                        {conn}
                      </td>
                      <td className="p-3 text-center text-gray-600">{czas}</td>
                      <td className="p-3 text-gray-600">{opc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Lotniska w Warszawie */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              WAW vs WMI — które lotnisko na delegację służbową?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-sky-400 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-sky-500" />
                  <h3 className="font-bold text-sky-800">Warszawa Chopin (WAW) — rekomendowane</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Klasa biznes, lounge i pełna oferta usług",
                    "Centrum Warszawy: 20–30 min (SKM, taxi, metro — Rondo Daszyńskiego)",
                    "Ponad 100 połączeń bezpośrednich",
                    "Priorytety dla pasażerów frequent flyer",
                    "Integracja z GDS / systemami TMC",
                    "Loty całodobowe (wyloty 05:00–23:30)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-sky-400 mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <h3 className="font-bold text-gray-700">Warszawa Modlin (WMI) — tylko w wyjątkach</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Tylko Ryanair (loty do ~30 destynacji)",
                    "40–60 min od centrum (bus, taxi — brak SKM)",
                    "Brak klasy biznes, brak loungu",
                    "Jedyny atut: niższe bilety Ryanair na wybrane trasy",
                    "Brak kiosku Check-in — tylko odprawy z bagażem kabinowym",
                    "Ryzyko: spóźnienie na bus = kosztowne taxi",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">–</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* LOT jako hub WAW */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              LOT i hub WAW — atut dla delegacji z Polski
            </h2>
            <p className="text-gray-600 mb-6">
              LOT Polish Airlines traktuje WAW jako swój główny hub — to największy atut dla pracowników podróżujących
              z Warszawy. Brak konieczności przesiadki do USA, bezpośrednie starty do ponad 20 europejskich stolic
              i rozwijana siatka połączeń korporacyjnych.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Transatlantyk bez przesiadki",
                  desc: "WAW→JFK, EWR, ORD, YYZ — bezpośrednio. Brak ryzyka utraty przesiadki w FRA czy LHR.",
                  color: "sky",
                },
                {
                  title: "LOT for Business",
                  desc: "Program korporacyjny: rabaty, zbiorcze faktury, dedykowany opiekun — dla firm z min. 10 lotami rocznie.",
                  color: "blue",
                },
                {
                  title: "Miles & More (Star Alliance)",
                  desc: "Naliczanie mil na lotach LOT i 40+ partnerów Star Alliance — HON Circle / Senator dostępny dla frequent flyerów.",
                  color: "indigo",
                },
              ].map((card) => (
                <div key={card.title} className={`bg-${card.color}-50 border border-${card.color}-200 rounded-xl p-5`}>
                  <h3 className={`font-bold text-${card.color}-800 mb-2`}>{card.title}</h3>
                  <p className={`text-sm text-${card.color}-700`}>{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Rekomendacje per destynacja */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Który przewoźnik z WAW — szybki przewodnik
            </h2>
            <div className="space-y-3">
              {[
                {
                  dest: "Londyn (LHR/LCY)",
                  rec: "LOT lub British Airways — LOT z LCY to najlepsza opcja do City of London (20 min taxi). Ryanair WAW→STN opłaca się tylko bez bagażu.",
                  tag: "Europa",
                },
                {
                  dest: "Frankfurt / Monachium",
                  rec: "LOT lub Lufthansa — na klasie biznes Lufthansa oferuje pełny Business Class z lounżem FRA/MUC. LOT tańszy przy Economy.",
                  tag: "Europa",
                },
                {
                  dest: "Nowy Jork / Chicago",
                  rec: "LOT — jedyny bezpośredni przewoźnik z WAW do USA. Klasa biznes na B787 fully flat. Brak sensownej alternatywy bez przesiadki.",
                  tag: "USA",
                },
                {
                  dest: "Dubaj / Bliski Wschód",
                  rec: "Emirates z WAW (WAW→DXB bezpośredni). Dla QAT — Qatar Airways z przesiadką DOH.",
                  tag: "Bliski Wschód",
                },
                {
                  dest: "Tokio / Seul / Szanghaj",
                  rec: "Lufthansa przez FRA (najkrótsza trasa) lub Turkish Airlines przez IST (tańsza). LOT codeshare z partnerami Star Alliance.",
                  tag: "Azja",
                },
                {
                  dest: "Singapur / Bangkok / Mumbai",
                  rec: "Emirates przez DXB lub Turkish Airlines przez IST — dobre połączenia z WAW, konkurencyjne ceny klasy biznes.",
                  tag: "Azja Płd.-Wsch.",
                },
              ].map((item) => (
                <div key={item.dest} className="bg-white border border-gray-200 rounded-xl p-4 flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-2 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{item.dest}</p>
                    <p className="text-sm text-gray-600">{item.rec}</p>
                  </div>
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
                  q: "Które linie latają bezpośrednio z Warszawy do Nowego Jorku?",
                  a: "Bezpośrednie loty WAW–JFK i WAW–EWR operuje LOT Polish Airlines (Boeing 787 Dreamliner, ok. 9–10 h). Inne połączenia transatlantyckie z WAW (np. do Chicago ORD, Toronto YYZ, Los Angeles LAX) również obsługuje LOT sezonowo lub całorocznie. American Airlines i Delta nie oferują bezpośrednich lotów WAW–USA.",
                },
                {
                  q: "Jak dolecieć z Warszawy do Tokio lub Seulu?",
                  a: "Brak bezpośrednich połączeń WAW–TYO lub WAW–ICN. Najwygodniejsze opcje z jedną przesiadką: LOT przez Frankfurt lub Amsterdam (codeshare z Lufthansa/KLM), Lufthansa przez FRA/MUC, Emirates przez DXB, Qatar Airways przez DOH. Czas podróży: 13–16 h. Najkrótsza opcja to zwykle Lufthansa FRA lub Turkish Airlines przez IST.",
                },
                {
                  q: "Ile trwa lot z Warszawy do Londynu?",
                  a: "Lot WAW–LHR (Heathrow) trwa ok. 2 h 30 min–2 h 50 min. LOT, British Airways i Ryanair (WAW–STN) operują tę trasę. WAW–LGW (Gatwick) operuje m.in. Wizz Air. Częstotliwość: 3–6 rejsów dziennie zależnie od przewoźnika i sezonu.",
                },
                {
                  q: "Czy z Warszawy można polecieć bezpośrednio do Dubaju?",
                  a: "Tak — Emirates operuje bezpośrednie loty WAW–DXB (ok. 5 h 30 min), zwykle 1 raz dziennie. Flydubai i LOT (codeshare) oferują alternatywy. Dubaj to też popularny hub do dalszych destynacji w Azji, Afryce i Oceanii.",
                },
                {
                  q: "Które lotnisko w Warszawie jest lepsze do delegacji — Chopin (WAW) czy Modlin (WMI)?",
                  a: "Na delegacje służbowe zdecydowanie WAW (Chopin). Lotnisko Chopina oferuje: klasę biznes i lounge (LOT, Lufthansa, British Airways), lepszą komunikację z centrum (20–30 min SKM lub taxi), więcej połączeń bezpośrednich i łatwą zmianę biletu. Modlin (WMI) obsługuje głównie Ryanair i przydaje się wyłącznie przy lotach bez bagażu i z bardzo wczesnym wylotem.",
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
                    <span itemProp="name" className="font-semibold text-gray-900 pr-4">
                      {item.q}
                    </span>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div
                      itemProp="acceptedAnswer"
                      itemScope
                      itemType="https://schema.org/Answer"
                      className="px-5 pb-5"
                    >
                      <p itemProp="text" className="text-gray-600 text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Powiązane artykuły */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Powiązane artykuły</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "LOT Polish Airlines klasa biznes — recenzja",
                  slug: "lot-polish-airlines-recenzja-klasa-biznes",
                },
                {
                  title: "Lufthansa vs LOT — którą linię wybrać na delegację?",
                  slug: "lufthansa-vs-lot-delegacja",
                },
                {
                  title: "Lounge biznesowy na Okęciu — jak wejść?",
                  slug: "lounge-biznesowy-okecie-jak-wejsc",
                },
                {
                  title: "Tanie linie na delegację — Ryanair i Wizz Air",
                  slug: "tanie-linie-delegacja-ryanair-wizzair",
                },
              ].map((art) => (
                <Link
                  key={art.slug}
                  href={`/artykuly/${art.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-sky-300 hover:shadow-sm transition-all group"
                >
                  <span className="text-sm font-medium text-gray-800 group-hover:text-sky-700 transition-colors">
                    {art.title} →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA ClaimWinger */}
          <section className="bg-gradient-to-br from-sky-50 to-blue-100 border border-sky-200 rounded-2xl p-8 text-center">
            <Plane className="w-10 h-10 text-sky-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Lot z Warszawy opóźniony lub odwołany?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Każdemu pasażerowi przysługuje do 600 EUR odszkodowania za opóźnienie powyżej 3 godzin lub odwołanie
              lotu. ClaimWinger sprawdza roszczenie bezpłatnie i prowadzi sprawę od początku do końca.
            </p>
            <a
              href={`https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=trasy-z-warszawy-waw-polaczenia-sluzbowe`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
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
