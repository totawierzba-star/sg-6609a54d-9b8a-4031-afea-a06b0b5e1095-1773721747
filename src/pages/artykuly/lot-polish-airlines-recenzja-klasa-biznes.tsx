import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Clock, CheckCircle, AlertTriangle, ChevronDown, ChevronUp, Star } from "lucide-react";
import { useState } from "react";

export default function LotPolishAirlinesRecenzja() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="LOT Polish Airlines klasa biznes — recenzja dla podróżujących służbowo | BiznesLot.info"
        description="Recenzja klasy biznes LOT na trasach długodystansowych (B787) i europejskich (E195). Lounge Chopina, programy korporacyjne, Miles & More i kiedy LOT to dobry wybór na delegację."
        canonicalUrl="https://bizneslot.info/artykuly/lot-polish-airlines-recenzja-klasa-biznes"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "LOT Polish Airlines klasa biznes — recenzja dla podróżujących służbowo",
                description:
                  "Recenzja klasy biznes LOT na trasach długodystansowych (B787) i europejskich (E195). Lounge Chopina, programy korporacyjne, Miles & More i kiedy LOT to dobry wybór na delegację.",
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
                    name: "Czy LOT oferuje w pełni rozkładane fotele w klasie biznes?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Tak, ale tylko na trasach długodystansowych obsługiwanych Dreamlinerem B787. Fotele LOT Business Class na B787 rozkładają się do pełnej pozycji leżącej (fully flat, 180°). Na trasach europejskich (E170/E195/B737 MAX) biznes to wydzielona strefa economy z pustym środkowym miejscem — brak flat bed.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Z jakiego lounge może korzystać pasażer klasy biznes LOT na Lotnisku Chopina?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Pasażerowie LOT Business Class na WAW mają dostęp do LOT Business Lounge w Terminalu A (strefa Schengen) i Non-Schengen. Lounge oferuje buforowe śniadania/lunche/kolacje, bar, kabiny prysznicowe, strefy pracy i WiFi. Dostęp mają też posiadacze kart Gold i Platinum w Miles & More.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Jakie programy korporacyjne oferuje LOT dla firm?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "LOT oferuje program LOT for Business skierowany do małych i średnich firm — uproszczona umowa korporacyjna, zniżki na bilety, możliwość zbierania mil dla pracowników. Duże korporacje mogą negocjować umowy IATA korporacyjne (Corporate Agreement) z dedykowanym opiekunem i rabatem 5–20% od taryf publicznych.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Czy LOT należy do sojuszu lotniczego?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Tak. LOT jest pełnoprawnym członkiem Star Alliance od 2003 roku. Pasażerowie klasy biznes LOT mogą korzystać z loungy Star Alliance na lotniskach, gdzie LOT nie ma własnego salonu. Mile zbierane są w programie Miles & More (Lufthansa Group).",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Kiedy LOT jest lepszym wyborem niż Lufthansa na trasie Polska–Europa?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "LOT jest zazwyczaj lepszym wyborem gdy: lecisz z Warszawy (WAW) bez konieczności przesiadki przez Frankfurt lub Monachium, zależy Ci na polskim serwisie i polskojęzycznej załodze, lub masz umowę korporacyjną z LOT. Lufthansa może być lepsza przy połączeniach z mniejszych polskich miast przez FRA/MUC lub gdy potrzebujesz szerszej siatki połączeń w Europie Zachodniej.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-slate-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
              <Link href="/artykuly" className="hover:text-white transition-colors">
                Artykuły
              </Link>
              <span>/</span>
              <span className="text-slate-300">Recenzje linii lotniczych</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              LOT Polish Airlines klasa biznes — recenzja dla podróżujących służbowo
            </h1>
            <p className="text-slate-300 text-lg mb-6">
              Co oferuje LOT w klasie biznes na B787 Dreamliner i trasach europejskich, jak wygląda lounge na Chopinie i czy umowa korporacyjna z LOT ma sens dla Twojej firmy.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 9 min czytania</span>
              <span className="flex items-center gap-1"><Plane className="w-4 h-4" /> Recenzje linii</span>
              <span>Aktualizacja: marzec 2026</span>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Ocena ogólna */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-10">
            <p className="text-sm text-slate-500 mb-3 font-medium">Ocena ogólna — LOT Business Class (delegacje)</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Długodystansowa (B787)", score: 4.0, max: 5 },
                { label: "Europejska (E195)", score: 2.5, max: 5 },
                { label: "Lounge WAW", score: 3.5, max: 5 },
                { label: "Stosunek ceny do jakości", score: 4.2, max: 5 },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-3xl font-bold text-slate-900 mb-1">{item.score.toFixed(1)}</p>
                  <div className="flex justify-center gap-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-3 h-3 ${s <= Math.round(item.score) ? "text-amber-400 fill-amber-400" : "text-slate-200 fill-slate-200"}`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Answer Box */}
          <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl p-5 mb-10">
            <p className="font-semibold text-slate-900 mb-1">W skrócie</p>
            <p className="text-slate-700 text-sm">
              LOT na długodystansowych (B787 Dreamliner) oferuje konkurencyjną klasę biznes z fotelem fully flat, dobrym cateringiem i dostępem do lounge. Na trasach europejskich biznes LOT to de facto economy z pustym miejscem obok — nie warto przepłacać. Dla firm latających głównie z Warszawy program LOT for Business lub umowa korporacyjna daje realną oszczędność.
            </p>
          </div>

          {/* Flota i trasy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Flota LOT — co lata na których trasach</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Samolot</th>
                    <th className="text-left px-4 py-3 font-semibold">Typowe trasy</th>
                    <th className="text-left px-4 py-3 font-semibold">Biznes — fotel</th>
                    <th className="text-left px-4 py-3 font-semibold">Ocena dla delegacji</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { plane: "B787-8 / -9 Dreamliner", routes: "WAW–NYC, WAW–ORD, WAW–YYZ, WAW–NRT, WAW–BKK", seat: "Fully flat (180°), układ 1-2-1", score: "★★★★☆" },
                    { plane: "B737 MAX 8", routes: "Średnie trasy europejskie (WAW–LHR, WAW–CDG, WAW–BCN)", seat: "Wydzielona strefa economy (3-3, brak flat)", score: "★★★☆☆" },
                    { plane: "Embraer E195", routes: "Krótkie i średnie trasy europejskie (WAW–BRU, WAW–VIE)", seat: "2-2, brak flat, więcej miejsca na nogi", score: "★★★☆☆" },
                    { plane: "Embraer E170 / E175", routes: "Regionalne (KRK, GDN, WRO → zachodnia Europa)", seat: "2-2, identyczny fotel jak economy", score: "★★☆☆☆" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 font-medium text-slate-900 text-xs">{row.plane}</td>
                      <td className="px-4 py-3 text-slate-600 text-xs">{row.routes}</td>
                      <td className="px-4 py-3 text-slate-600 text-xs">{row.seat}</td>
                      <td className="px-4 py-3 text-slate-800 text-xs font-medium">{row.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* B787 Business Class — szczegóły */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">LOT Business Class na B787 — co dostaniesz</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-slate-900 mb-3">Fotel i przestrzeń</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Układ 1-2-1 (każdy fotel ma dostęp do przejścia)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Fotel rozkłada się do 180° (fully flat bed)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Szerokość siedziska: ok. 21 cali</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Poduszka i kołdra, amenity kit</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /> Fotel starszej generacji — bez drzwiczek jak u Emirates/Qatar</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-slate-900 mb-3">Serwis i catering</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Serwis à la carte z kartą dań (długie trasy)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Polskie dania główne (żurek, bigos, pierogi — sezonowo)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Wina dobrane przez sommeliera</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Zamawianie specjalnych posiłków (VGML, SPML itd.)</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /> Wybór dań bywa ograniczony na lotach do Azji</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-slate-900 mb-3">IFE i łączność</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Ekran dotykowy 15,4 cala (B787-9)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Bluetooth do słuchawek</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> WiFi pokładowe (płatne, ~30 USD/lot)</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /> Prędkość WiFi umiarkowana — nie do wideokonferencji</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-slate-900 mb-3">Check-in i bagaż</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> 2 bagaże rejestrowane po 32 kg</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Dedykowane stanowisko check-in biznes w WAW</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Szybka ścieżka security (Fast Track) na WAW</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Priorytetowe odbieranie bagażu</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lounge WAW */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">LOT Business Lounge — Lotnisko Chopina (WAW)</h2>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-slate-900 mb-3 text-sm">Lokalizacja i dostęp</p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5" /> Terminal A — Schengen, poziom +1 przy bramce B11</li>
                    <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5" /> Terminal A — Non-Schengen (osobny lounge)</li>
                    <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5" /> Dostęp: bilet LOT Business Class</li>
                    <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5" /> Dostęp: Miles &amp; More Gold/HON Circle</li>
                    <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5" /> Dostęp: karty Star Alliance Gold</li>
                    <li className="flex items-start gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-amber-400 mt-0.5" /> Brak dostępu dla Priority Pass</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-3 text-sm">Co znajdziesz w środku</p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5" /> Bufet: ciepłe dania, sałatki, desery (zgodnie z porą dnia)</li>
                    <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5" /> Bar: wina, piwa, kawa espresso, soki</li>
                    <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5" /> Prysznice (rezerwacja u obsługi)</li>
                    <li className="flex items-start gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5" /> Stanowiska pracy, WiFi 100+ Mbps</li>
                    <li className="flex items-start gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-amber-400 mt-0.5" /> Brak sal cichej pracy / kabin telefonicznych</li>
                    <li className="flex items-start gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-amber-400 mt-0.5" /> W godzinach szczytu (6–9 i 15–18) tłoczno</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Miles & More i programy korporacyjne */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Miles &amp; More i programy korporacyjne</h2>
            <div className="space-y-4">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-slate-900 mb-2">Miles &amp; More — indywidualne nagrody</p>
                <p className="text-slate-600 text-sm mb-3">
                  LOT nalicza mile w programie Miles &amp; More (sojusz Lufthansa Group). Klasa biznes na trasach długodystansowych przynosi 150–200% base miles. Status Gold (35 000 status miles rocznie) daje dostęp do loungy i upgrade.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="text-left px-3 py-2 font-semibold text-slate-700">Trasa (przykład)</th>
                        <th className="text-left px-3 py-2 font-semibold text-slate-700">Klasa</th>
                        <th className="text-left px-3 py-2 font-semibold text-slate-700">% naliczenia</th>
                        <th className="text-left px-3 py-2 font-semibold text-slate-700">Przybliżone mile</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { route: "WAW–LHR (1 438 km)", cls: "Economy (V/K)", pct: "50%", miles: "~720" },
                        { route: "WAW–LHR (1 438 km)", cls: "Business (C/J)", pct: "150%", miles: "~2 160" },
                        { route: "WAW–JFK (7 270 km)", cls: "Economy (M)", pct: "100%", miles: "~7 270" },
                        { route: "WAW–JFK (7 270 km)", cls: "Business (C/J)", pct: "200%", miles: "~14 540" },
                      ].map((row, i) => (
                        <tr key={i} className={`border-b border-slate-100 ${i % 2 ? "bg-slate-50" : ""}`}>
                          <td className="px-3 py-2 text-slate-700">{row.route}</td>
                          <td className="px-3 py-2 text-slate-600">{row.cls}</td>
                          <td className="px-3 py-2 font-medium text-slate-800">{row.pct}</td>
                          <td className="px-3 py-2 font-medium text-slate-800">{row.miles}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-slate-900 mb-2">LOT for Business — umowa korporacyjna</p>
                <p className="text-slate-600 text-sm mb-3">
                  Program dedykowany firmom bez konieczności negocjowania pełnej umowy IATA. Rejestracja online, automatyczny rabat na bilety, osobne konto dla pracowników do zbierania mil.
                </p>
                <div className="grid md:grid-cols-3 gap-3 text-xs">
                  {[
                    { label: "Minimalna umowa", val: "Brak minimum — dostępna dla każdej firmy" },
                    { label: "Zniżka", val: "3–8% na wybrane taryfy biznes i economy" },
                    { label: "Raportowanie", val: "Podstawowy panel z historią rezerwacji" },
                  ].map((item) => (
                    <div key={item.label} className="bg-slate-50 rounded-lg p-3">
                      <p className="font-semibold text-slate-700 mb-0.5">{item.label}</p>
                      <p className="text-slate-600">{item.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* LOT vs konkurencja */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Kiedy wybrać LOT, a kiedy nie?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <p className="font-semibold text-green-900 mb-3">LOT — dobry wybór gdy:</p>
                <ul className="space-y-2 text-xs text-green-800">
                  {[
                    "Lecisz z Warszawy (WAW) — unikasz przesiadki",
                    "Trasa do USA (NYC, ORD, YYZ) — bezpośredni rejs",
                    "Zależy Ci na polskojęzycznej załodze i polskim cateringu",
                    "Firma ma umowę korporacyjną z LOT",
                    "Zbierasz mile w Miles & More (Lufthansa Group)",
                    "Lot nocny — fully flat na B787 wystarczy",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <p className="font-semibold text-red-900 mb-3">Rozważ inne linie gdy:</p>
                <ul className="space-y-2 text-xs text-red-800">
                  {[
                    "Lecisz z Krakowa, Wrocławia, Gdańska (brak bezpośrednich długodystansowych z LOT)",
                    "Potrzebujesz drzwiczek / prywatności w biznesie (Qatar, Emirates, Singapore)",
                    "Trasy do Azji Południowo-Wschodniej — LOT ma ograniczoną siatkę",
                    "Szybkie WiFi do pracy — LOT nie gwarantuje przepustowości",
                    "Europejski lot ≤ 3h — klasa biznes LOT = przepłacona economy",
                    "Zbierasz punkty w BA Executive Club lub Flying Blue",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Prawa pasażera LOT */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Opóźnienia i odwołania — EC 261 a LOT</h2>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <p className="text-slate-700 text-sm mb-4">
                LOT jako przewoźnik z siedzibą w UE podlega rozporządzeniu EC 261/2004 na wszystkich lotach. Pasażerowie klasy biznes mają te same prawa do odszkodowania co economy — kwota odszkodowania nie zależy od klasy.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-3 py-2 font-semibold text-slate-700">Zdarzenie</th>
                      <th className="text-left px-3 py-2 font-semibold text-slate-700">Odszkodowanie</th>
                      <th className="text-left px-3 py-2 font-semibold text-slate-700">Warunek</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { event: "Opóźnienie ≥ 3h (trasy ≤ 1500 km)", comp: "250 EUR", cond: "Wina linii" },
                      { event: "Opóźnienie ≥ 3h (trasy 1500–3500 km)", comp: "400 EUR", cond: "Wina linii" },
                      { event: "Opóźnienie ≥ 3h (trasy > 3500 km, np. do USA)", comp: "600 EUR", cond: "Wina linii" },
                      { event: "Odwołanie lotu z <14 dni uprzedzenia", comp: "250–600 EUR", cond: "Wg dystansu" },
                      { event: "Odmowa wejścia na pokład (overbooking)", comp: "250–600 EUR", cond: "Bez dobrowolnej rezygnacji" },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-slate-100 ${i % 2 ? "bg-slate-50" : ""}`}>
                        <td className="px-3 py-2 text-slate-700">{row.event}</td>
                        <td className="px-3 py-2 font-bold text-slate-900">{row.comp}</td>
                        <td className="px-3 py-2 text-slate-600">{row.cond}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                LOT w praktyce rozpatruje reklamacje w terminie 30 dni. Odmowy częste przy powołaniu się na strajk lub warunki atmosferyczne — warto zweryfikować zasadność przed rezygnacją z roszczenia.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: "Czy LOT oferuje w pełni rozkładane fotele w klasie biznes?",
                  a: "Tak, ale tylko na trasach długodystansowych obsługiwanych Dreamlinerem B787. Fotele LOT Business Class na B787 rozkładają się do pełnej pozycji leżącej (fully flat, 180°). Na trasach europejskich (E170/E195/B737 MAX) biznes to wydzielona strefa economy z pustym środkowym miejscem — brak flat bed.",
                },
                {
                  q: "Z jakiego lounge może korzystać pasażer klasy biznes LOT na Lotnisku Chopina?",
                  a: "Pasażerowie LOT Business Class na WAW mają dostęp do LOT Business Lounge w Terminalu A (strefa Schengen) i Non-Schengen. Lounge oferuje bufetowe śniadania/lunche/kolacje, bar, kabiny prysznicowe, strefy pracy i WiFi. Dostęp mają też posiadacze kart Gold i Platinum w Miles & More.",
                },
                {
                  q: "Jakie programy korporacyjne oferuje LOT dla firm?",
                  a: "LOT oferuje program LOT for Business skierowany do małych i średnich firm — uproszczona umowa korporacyjna, zniżki na bilety, możliwość zbierania mil dla pracowników. Duże korporacje mogą negocjować umowy IATA korporacyjne z dedykowanym opiekunem i rabatem 5–20% od taryf publicznych.",
                },
                {
                  q: "Czy LOT należy do sojuszu lotniczego?",
                  a: "Tak. LOT jest pełnoprawnym członkiem Star Alliance od 2003 roku. Pasażerowie klasy biznes LOT mogą korzystać z loungy Star Alliance na lotniskach, gdzie LOT nie ma własnego salonu. Mile zbierane są w programie Miles & More (Lufthansa Group).",
                },
                {
                  q: "Kiedy LOT jest lepszym wyborem niż Lufthansa na trasie Polska–Europa?",
                  a: "LOT jest zazwyczaj lepszym wyborem gdy: lecisz z Warszawy (WAW) bez konieczności przesiadki przez Frankfurt lub Monachium, zależy Ci na polskim serwisie i polskojęzycznej załodze, lub masz umowę korporacyjną z LOT. Lufthansa może być lepsza przy połączeniach z mniejszych polskich miast przez FRA/MUC lub gdy potrzebujesz szerszej siatki połączeń.",
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

          {/* CTA */}
          <div className="bg-slate-800 text-white rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-3">Lot LOT był opóźniony lub odwołany?</h3>
            <p className="text-slate-300 mb-6 text-sm max-w-xl mx-auto">
              LOT podlega EC 261/2004. Sprawdź, czy przysługuje Ci odszkodowanie do 600 EUR — niezależnie od klasy biletu.
            </p>
            <a
              href="https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=lot-polish-airlines-recenzja-klasa-biznes"
              className="inline-block bg-white text-slate-900 font-semibold px-8 py-3 rounded-xl hover:bg-slate-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sprawdź roszczenie za lot LOT
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
