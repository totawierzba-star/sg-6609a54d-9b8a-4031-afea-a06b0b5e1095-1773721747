import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Clock, CheckCircle, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function LondynNaDelegacje() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Londyn na delegację — jak dolecieć z Polski? Lotniska, przewoźnicy, czas podróży | BiznesLot.info"
        description="LHR, LGW, LCY, STN czy LTN? Które lotnisko londyńskie wybrać na delegację służbową i jak dolecieć z Warszawy, Krakowa, Gdańska i Wrocławia. Porównanie czasu i kosztów."
        canonicalUrl="https://bizneslot.info/artykuly/londyn-na-delegacje-jak-doleciec-z-polski"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "Londyn na delegację — jak dolecieć z Polski? Lotniska, przewoźnicy, czas podróży",
                description:
                  "LHR, LGW, LCY, STN czy LTN? Które lotnisko londyńskie wybrać na delegację służbową i jak dolecieć z Warszawy, Krakowa, Gdańska i Wrocławia.",
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
                    name: "Które lotnisko londyńskie jest najlepsze na delegację służbową?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Zależy od lokalizacji spotkania. Na City of London i Canary Wharf — London City (LCY, 20 min DLR). Na West End i centralne dzielnice — Heathrow (LHR, 45–60 min Tube). Na Mayfair/Paddington — Heathrow Express 15 min. Gatwick (LGW) jest wygodny tylko przy spotkaniach na południu Londynu. Stansted (STN) i Luton (LTN) są daleko od centrum — dolicz 60–80 min i 50–70 GBP transferu.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Ile trwa lot z Warszawy do Londynu?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Lot WAW–LHR trwa ok. 2 h 30–45 min. WAW–LCY (London City) — ok. 2 h 25 min (LOT). WAW–STN (Stansted) — ok. 2 h 20 min (Ryanair). WAW–LGW — ok. 2 h 35 min. Do czasu lotu należy doliczyć dojazd na lotnisko docelowe do centrum: LCY 20 min, LHR 45 min, LGW 30 min, STN 55 min, LTN 60 min.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Czy po Brexicie potrzebna jest wiza do Londynu na delegację?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Obywatele polscy nie potrzebują wizy na krótkie wizyty służbowe do Wielkiej Brytanii (do 6 miesięcy). Potrzebny jest ważny paszport (dowód osobisty od 2021 r. nie jest akceptowany). Przy delegacjach obejmujących pracę wykonywaną fizycznie w UK (np. instalacje, montaż) może być wymagane zezwolenie na pracę — warto sprawdzić przed wyjazdem.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Jak dolecieć do Londynu z Krakowa lub Wrocławia na delegację?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Z Krakowa (KRK): Ryanair do STN, Wizz Air do LGW i LTN — loty bezpośrednie, ok. 2 h 30 min. Z Wrocławia (WRO): Ryanair do STN, Wizz Air do LGW. Z Gdańska (GDN): Ryanair do STN i LGW. Z Poznania (POZ): Ryanair do STN. Wszystkie to LCC — dolicz transfer do centrum (45–70 min) i ewentualne opłaty za bagaż.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Czy EC 261 obowiązuje na lotach Warszawa–Londyn po Brexicie?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "EC 261/2004 obowiązuje na wszystkich lotach wylatujących z lotnisk UE (np. WAW, KRK, WRO) bez względu na przewoźnika. Na lotach z UK do Polski (np. LHR→WAW) EC 261 stosuje się wyłącznie jeśli przewoźnik jest zarejestrowany w UE (np. LOT). British Airways leci z UK → PL: zastosowanie ma UK261 (odpowiednik EC 261 w prawie brytyjskim, analogiczne stawki).",
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
        <section className="bg-gradient-to-br from-red-700 via-red-800 to-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-red-200 text-sm mb-4">
              <Plane className="w-4 h-4" />
              <Link href="/artykuly" className="hover:text-white transition-colors">
                Artykuły
              </Link>
              <span>/</span>
              <span>Recenzje linii lotniczych</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Londyn na delegację — jak dolecieć z Polski?
            </h1>
            <p className="text-xl text-red-100 mb-6">
              Pięć londyńskich lotnisk, kilku przewoźników i kluczowe pytanie: które połączenie minimalizuje czas
              dojazdu do miejsca spotkania — a nie tylko czas lotu?
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-red-200">
              <span>Czas czytania: 8 min</span>
              <span>Aktualizacja: marzec 2026</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          {/* Direct Answer Box */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-red-900 mb-3">Krótka odpowiedź</h2>
            <p className="text-red-800">
              Na delegację do centrum Londynu (City, West End, Canary Wharf) najlepszy wybór to <strong>LHR
              (Heathrow)</strong> z LOT lub British Airways lub <strong>LCY (London City)</strong> z LOT. Stansted
              i Luton opłacają się tylko przy spotkaniach w okolicach City przy bardzo niskim budżecie. Po Brexicie
              potrzebny jest paszport — dowód osobisty nie jest akceptowany.
            </p>
          </div>

          {/* Londyńskie lotniska — porównanie */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              5 lotnisk Londynu — które wybrać na delegację?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-3 text-left">Lotnisko</th>
                    <th className="p-3 text-center">Kod</th>
                    <th className="p-3 text-left">Dojazd do centrum</th>
                    <th className="p-3 text-center">Czas</th>
                    <th className="p-3 text-center">Koszt (GBP)</th>
                    <th className="p-3 text-left">Rekomendacja</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Heathrow",
                      "LHR",
                      "Tube (Piccadilly Line) lub Heathrow Express",
                      "45–60 min / 15 min",
                      "£6–7 / £30",
                      "West End, Paddington, Kensington",
                    ],
                    [
                      "London City",
                      "LCY",
                      "DLR (Docklands Light Railway)",
                      "20–30 min",
                      "£4–5",
                      "City of London, Canary Wharf — najlepszy wybór",
                    ],
                    [
                      "Gatwick",
                      "LGW",
                      "Gatwick Express (pociąg)",
                      "30 min",
                      "£25",
                      "Victoria, Brixton — tylko południe Londynu",
                    ],
                    [
                      "Stansted",
                      "STN",
                      "Stansted Express (pociąg)",
                      "55 min",
                      "£24",
                      "Liverpool Street — tylko przy tanim bilecie LCC",
                    ],
                    [
                      "Luton",
                      "LTN",
                      "Bus + pociąg (Luton Airport Parkway)",
                      "60–75 min",
                      "£18–25",
                      "Unikaj na delegację — zbyt długi transfer",
                    ],
                  ].map(([lotnisko, kod, dojazd, czas, koszt, rec], i) => (
                    <tr key={lotnisko as string} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 font-bold text-gray-900">{lotnisko}</td>
                      <td className="p-3 text-center font-mono text-red-700 font-bold">{kod}</td>
                      <td className="p-3 text-gray-700 text-xs">{dojazd}</td>
                      <td className="p-3 text-center text-gray-600">{czas}</td>
                      <td className="p-3 text-center text-gray-600">{koszt}</td>
                      <td className="p-3 text-xs text-gray-600">{rec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Loty z polskich miast */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Loty do Londynu z polskich miast — przegląd połączeń
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-3 text-left">Z lotniska</th>
                    <th className="p-3 text-left">Do Londynu</th>
                    <th className="p-3 text-left">Przewoźnicy</th>
                    <th className="p-3 text-center">Czas lotu</th>
                    <th className="p-3 text-center">Klasa biznes?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["WAW (Warszawa)", "LHR", "LOT, British Airways", "2h 40min", "Tak (LOT, BA)"],
                    ["WAW (Warszawa)", "LCY", "LOT", "2h 25min", "Tak (LOT)"],
                    ["WAW (Warszawa)", "STN", "Ryanair", "2h 20min", "Nie"],
                    ["KRK (Kraków)", "STN", "Ryanair", "2h 30min", "Nie"],
                    ["KRK (Kraków)", "LGW", "Wizz Air", "2h 30min", "Nie"],
                    ["KRK (Kraków)", "LTN", "Wizz Air", "2h 25min", "Nie"],
                    ["WRO (Wrocław)", "STN", "Ryanair", "2h 20min", "Nie"],
                    ["WRO (Wrocław)", "LGW", "Wizz Air", "2h 20min", "Nie"],
                    ["GDN (Gdańsk)", "STN", "Ryanair", "2h 10min", "Nie"],
                    ["GDN (Gdańsk)", "LGW", "Wizz Air", "2h 10min", "Nie"],
                    ["POZ (Poznań)", "STN", "Ryanair", "2h 00min", "Nie"],
                    ["KTW (Katowice)", "STN", "Ryanair", "2h 20min", "Nie"],
                    ["KTW (Katowice)", "LGW", "Wizz Air", "2h 20min", "Nie"],
                  ].map(([z, do_, prev, czas, biznes], i) => (
                    <tr key={`${z}-${do_}`} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 font-medium text-gray-800">{z}</td>
                      <td className="p-3 font-mono text-red-700 font-bold">{do_}</td>
                      <td className="p-3 text-gray-600">{prev}</td>
                      <td className="p-3 text-center text-gray-600">{czas}</td>
                      <td className={`p-3 text-center text-xs font-semibold ${biznes === "Nie" ? "text-gray-400" : "text-green-600"}`}>
                        {biznes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Brexit — dokumenty i praca */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Brexit a delegacja do Londynu — dokumenty i przepisy
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Co jest potrzebne (standard)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Ważny paszport (min. 6 miesięcy ważności zalecane)",
                    "Bilet powrotny (może być wymagany na kontroli)",
                    "Dowód celu pobytu (zaproszenie, agenda spotkania)",
                    "Środki finansowe na pobyt (karta firmowa wystarczy)",
                    "Brak konieczności wizowej dla delegacji do 6 miesięcy",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                <h3 className="font-bold text-yellow-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  Uwaga: kiedy potrzebne dodatkowe zezwolenia
                </h3>
                <ul className="space-y-2 text-sm text-yellow-800">
                  {[
                    "Praca fizyczna / instalacje / montaż w UK — może wymagać zezwolenia na pracę",
                    "Delegacja trwająca powyżej 3 miesięcy — skonsultuj z HR",
                    "Doradztwo / usługi świadczone klientom w UK — sprawdź przepisy UKVI",
                    "Dowód osobisty (ID card) od 1 października 2021 — NIE akceptowany",
                    "EHIC / EKUZ — nie działa w UK; potrzebna polisa prywatna",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-0.5 flex-shrink-0">!</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* EC 261 po Brexicie */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Odszkodowanie za opóźnienie lotu WAW–LHR — EC 261 po Brexicie
            </h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-3 text-left">Trasa / przewoźnik</th>
                    <th className="p-3 text-center">Prawo</th>
                    <th className="p-3 text-center">Kwota (EUR/GBP)</th>
                    <th className="p-3 text-left">Uwagi</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "WAW → LHR (LOT, Ryanair, Wizz Air)",
                      "EC 261/2004 (UE)",
                      "400 EUR",
                      "Wylot z UE — EC 261 zawsze obowiązuje",
                    ],
                    [
                      "WAW → LHR (British Airways)",
                      "EC 261/2004 (UE)",
                      "400 EUR",
                      "BA zarejestrowana w UK, ale lot wylata z UE",
                    ],
                    [
                      "LHR → WAW (LOT)",
                      "EC 261/2004 (UE)",
                      "400 EUR",
                      "Przewoźnik UE — EC 261 obowiązuje nawet z UK",
                    ],
                    [
                      "LHR → WAW (British Airways)",
                      "UK261 (UK)",
                      "£350",
                      "Odpowiednik EC 261 w prawie brytyjskim — analogiczne stawki",
                    ],
                    [
                      "LHR → WAW (Ryanair)",
                      "EC 261/2004 (UE)",
                      "400 EUR",
                      "Ryanair zarejestrowany w Irlandii (UE) — EC 261 obowiązuje",
                    ],
                  ].map(([trasa, prawo, kwota, uwagi], i) => (
                    <tr key={trasa as string} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 text-gray-700 font-medium">{trasa}</td>
                      <td className="p-3 text-center text-xs font-semibold text-blue-700">{prawo}</td>
                      <td className="p-3 text-center font-bold text-green-700">{kwota}</td>
                      <td className="p-3 text-xs text-gray-600">{uwagi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
              <strong>Zasada ogólna:</strong> Jeśli lot <em>wylata</em> z lotniska w UE — EC 261/2004 obowiązuje
              niezależnie od przewoźnika. Jeśli lot wylata z UK — stosuje się UK261 (dla przewoźników UK) lub EC
              261 (dla przewoźników UE). Kwoty są praktycznie identyczne.
            </div>
          </section>

          {/* Wybór: LHR vs LCY */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              LHR vs LCY — kiedy który wybrać na delegację?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  lotnisko: "Heathrow (LHR)",
                  kiedy: [
                    "Spotkanie w West End (Mayfair, Soho, Oxford Street)",
                    "Klient w Kensington, Hammersmith, Richmond",
                    "Połączenia do dalszych miast UK (Manchester, Edinburgh — z LHR)",
                    "Klasa biznes z lounge (LOT Biznes, BA First / Business)",
                    "Heathrow Express do Paddington — 15 min, £30",
                  ],
                  color: "blue",
                },
                {
                  lotnisko: "London City (LCY)",
                  kiedy: [
                    "Spotkanie w City of London (banki, kancelarie)",
                    "Klient na Canary Wharf (HSBC, Barclays, JP Morgan)",
                    "DLR do Bank/Monument — 20 min, £5",
                    "LOT klasa biznes z Warszawy (LCY) — dostępna",
                    "Mniejsze lotnisko = szybsza odprawa i odbiór bagażu",
                  ],
                  color: "red",
                },
              ].map((col) => (
                <div key={col.lotnisko} className={`bg-white border border-${col.color}-200 rounded-xl p-5`}>
                  <h3 className={`font-bold text-${col.color}-700 mb-3`}>{col.lotnisko}</h3>
                  <ul className="space-y-2">
                    {col.kiedy.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className={`text-${col.color}-400 mt-0.5 flex-shrink-0`}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Czas podróży całkowity */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Całkowity czas drzwi–do–drzwi: Warszawa centrum → Londyn centrum
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Założenia: centrum Warszawy (Śródmieście), centrum Londynu (City of London / Bank)
            </p>
            <div className="space-y-3">
              {[
                {
                  opcja: "WAW → LCY (LOT klasa biznes)",
                  skladniki: ["20 min taxi do WAW", "2h 25min lot", "20 min DLR do City", "+ 30 min lounge/odprawa fast-track"],
                  total: "~3h 35min",
                  color: "green",
                  tag: "Najkrótszy",
                },
                {
                  opcja: "WAW → LHR (LOT / BA) + Heathrow Express",
                  skladniki: ["20 min taxi do WAW", "2h 40min lot", "15 min Heathrow Express", "+ 20 min Tube do City", "+ 30 min odprawa"],
                  total: "~4h 05min",
                  color: "blue",
                  tag: "Wygodny",
                },
                {
                  opcja: "WAW → LHR (LOT / BA) + Tube",
                  skladniki: ["20 min taxi do WAW", "2h 40min lot", "55 min Tube do centrum", "+ 30 min odprawa"],
                  total: "~4h 25min",
                  color: "sky",
                  tag: "Budżetowy",
                },
                {
                  opcja: "WAW → STN (Ryanair) + Stansted Express",
                  skladniki: ["40 min do lotniska (Chopin jest bliżej — Modlin +20)", "2h 20min lot", "55 min pociąg do Liverpool St", "+ 30 min + dojazd do City"],
                  total: "~4h 35min+",
                  color: "orange",
                  tag: "Tani ale wolny",
                },
              ].map((row) => (
                <div key={row.opcja} className={`bg-white border border-${row.color}-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-4`}>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`bg-${row.color}-100 text-${row.color}-700 text-xs font-semibold px-2 py-0.5 rounded-full`}>
                        {row.tag}
                      </span>
                      <span className="font-semibold text-gray-900">{row.opcja}</span>
                    </div>
                    <p className="text-xs text-gray-500">{row.skladniki.join(" + ")}</p>
                  </div>
                  <div className={`text-2xl font-bold text-${row.color}-700 flex-shrink-0`}>{row.total}</div>
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
                  q: "Które lotnisko londyńskie jest najlepsze na delegację służbową?",
                  a: "Zależy od lokalizacji spotkania. Na City of London i Canary Wharf — London City (LCY, 20 min DLR). Na West End i centralne dzielnice — Heathrow (LHR, 45–60 min Tube). Na Mayfair/Paddington — Heathrow Express 15 min. Gatwick (LGW) jest wygodny tylko przy spotkaniach na południu Londynu. Stansted (STN) i Luton (LTN) są daleko od centrum — dolicz 60–80 min i 50–70 GBP transferu.",
                },
                {
                  q: "Ile trwa lot z Warszawy do Londynu?",
                  a: "Lot WAW–LHR trwa ok. 2 h 30–45 min. WAW–LCY (London City) — ok. 2 h 25 min (LOT). WAW–STN (Stansted) — ok. 2 h 20 min (Ryanair). WAW–LGW — ok. 2 h 35 min. Do czasu lotu należy doliczyć dojazd na lotnisko docelowe do centrum: LCY 20 min, LHR 45 min, LGW 30 min, STN 55 min, LTN 60 min.",
                },
                {
                  q: "Czy po Brexicie potrzebna jest wiza do Londynu na delegację?",
                  a: "Obywatele polscy nie potrzebują wizy na krótkie wizyty służbowe do Wielkiej Brytanii (do 6 miesięcy). Potrzebny jest ważny paszport (dowód osobisty od 2021 r. nie jest akceptowany). Przy delegacjach obejmujących pracę wykonywaną fizycznie w UK może być wymagane zezwolenie na pracę.",
                },
                {
                  q: "Jak dolecieć do Londynu z Krakowa lub Wrocławia na delegację?",
                  a: "Z Krakowa (KRK): Ryanair do STN, Wizz Air do LGW i LTN — loty bezpośrednie, ok. 2 h 30 min. Z Wrocławia (WRO): Ryanair do STN, Wizz Air do LGW. Z Gdańska (GDN): Ryanair do STN i LGW. Wszystkie to LCC — dolicz transfer do centrum (45–70 min) i ewentualne opłaty za bagaż.",
                },
                {
                  q: "Czy EC 261 obowiązuje na lotach Warszawa–Londyn po Brexicie?",
                  a: "EC 261/2004 obowiązuje na wszystkich lotach wylatujących z lotnisk UE (np. WAW, KRK) bez względu na przewoźnika. Na lotach z UK do Polski z British Airways zastosowanie ma UK261 — analogiczne stawki odszkodowań. Loty Ryanair i LOT z UK podlegają EC 261 (przewoźnicy zarejestrowani w UE).",
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
                  title: "Trasy z Warszawy (WAW) — najważniejsze połączenia służbowe",
                  slug: "trasy-z-warszawy-waw-polaczenia-sluzbowe",
                },
                {
                  title: "Tanie linie na delegację — Ryanair i Wizz Air",
                  slug: "tanie-linie-delegacja-ryanair-wizzair",
                },
                {
                  title: "LOT Polish Airlines klasa biznes — recenzja",
                  slug: "lot-polish-airlines-recenzja-klasa-biznes",
                },
                {
                  title: "Opóźnienie lotu a spotkanie biznesowe — koszty konsekwencji",
                  slug: "opoznienie-lotu-spotkanie-biznesowe",
                },
              ].map((art) => (
                <Link
                  key={art.slug}
                  href={`/artykuly/${art.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-red-300 hover:shadow-sm transition-all group"
                >
                  <span className="text-sm font-medium text-gray-800 group-hover:text-red-700 transition-colors">
                    {art.title} →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA ClaimWinger */}
          <section className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-2xl p-8 text-center">
            <Plane className="w-10 h-10 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Lot do Londynu opóźniony lub odwołany?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Trasa WAW–LHR lub WAW–LCY z opóźnieniem powyżej 3 godzin? Przysługuje Ci 400 EUR odszkodowania.
              ClaimWinger sprawdza roszczenie bezpłatnie i prowadzi całą procedurę za Ciebie.
            </p>
            <a
              href={`https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=londyn-na-delegacje-jak-doleciec-z-polski`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
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
