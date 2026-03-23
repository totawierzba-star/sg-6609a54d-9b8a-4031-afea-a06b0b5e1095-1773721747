import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Clock, CheckCircle, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function LufthansaVsLot() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Lufthansa vs LOT — którą linię wybrać na delegację służbową? | BiznesLot.info"
        description="Porównanie Lufthansa i LOT dla podróżujących służbowo: klasa biznes, lounge, punktualność, trasy z Polski, programy korporacyjne i ceny biletów. Kto wygrywa?"
        canonicalUrl="https://bizneslot.info/artykuly/lufthansa-vs-lot-delegacja"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "Lufthansa vs LOT — którą linię wybrać na delegację służbową?",
                description:
                  "Porównanie Lufthansa i LOT dla podróżujących służbowo: klasa biznes, lounge, punktualność, trasy z Polski, programy korporacyjne i ceny biletów.",
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
                    name: "Która linia ma lepszą klasę biznes na trasach intercontinental — LOT czy Lufthansa?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Na trasach transatlantyckich Lufthansa wyprzedza LOT dzięki nowszym fotelom Business Class (Allegris na A350/B787 — drzwiczki, szersze łóżko). LOT B787 oferuje przyzwoity fully flat, ale bez prywatności kabin. Na lotach do USA z Warszawy LOT jest lepszą opcją ze względu na brak przesiadki.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Czy LOT jest tańszy od Lufthansy w klasie biznes?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Zazwyczaj tak. Bilety LOT Business Class na trasach europejskich i transatlantyckich są średnio 10–25% tańsze od Lufthansy na porównywalnych trasach. Różnica jest największa na trasach WAW–USA, gdzie LOT oferuje bezpośredni lot bez marży za connection.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Który program lojalnościowy jest lepszy dla polskich firm — Miles & More czy?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Oba — LOT i Lufthansa — działają w tym samym programie Miles & More. Mile zbierane na lotach LOT i Lufthansa sumują się na jednym koncie i przeliczają na te same nagrody. Dla polskich firm jest to zaletą: można mieszać linie i nadal budować jeden status.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Jak wypada punktualność LOT vs Lufthansa?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Według danych OAG (2024) punktualność LOT (przylot w czasie) wynosi ok. 72–75%, Lufthansa ok. 68–73%. LOT ma mniejszą sieć i mniej przesiadek, co zmniejsza ryzyko efektu domina. Lufthansa przez FRA i MUC — największe huby Europy — jest bardziej narażona na opóźnienia łańcuchowe.",
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
        <div className="bg-gradient-to-br from-slate-800 to-blue-900 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
              <Link href="/artykuly" className="hover:text-white transition-colors">Artykuły</Link>
              <span>/</span>
              <span className="text-slate-300">Recenzje linii lotniczych</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Lufthansa vs LOT — którą linię wybrać na delegację służbową?
            </h1>
            <p className="text-slate-300 text-lg mb-6">
              Bezpośredni wybór z polskiej perspektywy: klasa biznes, lounge, punktualność, ceny i programy korporacyjne — co faktycznie liczy się w codziennych delegacjach.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min czytania</span>
              <span className="flex items-center gap-1"><Plane className="w-4 h-4" /> Recenzje linii</span>
              <span>Aktualizacja: marzec 2026</span>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Direct Answer Box */}
          <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl p-5 mb-10">
            <p className="font-semibold text-slate-900 mb-1">Odpowiedź wprost</p>
            <p className="text-slate-700 text-sm">
              <strong>Wybierz LOT</strong> gdy lecisz z Warszawy (brak przesiadki, niższa cena). <strong>Wybierz Lufthansę</strong> gdy lecisz z mniejszych polskich lotnisk, potrzebujesz gęstszej siatki połączeń w Europie Zachodniej lub zależy Ci na nowszym produkcie biznesowym na trasach long-haul. Oba programy lojalnościowe działają w Miles &amp; More — nie tracisz mil przechodząc między liniami.
            </p>
          </div>

          {/* Tabela porównawcza główna */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Porównanie kluczowych kryteriów</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Kryterium</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-300">LOT</th>
                    <th className="text-center px-4 py-3 font-semibold text-yellow-300">Lufthansa</th>
                    <th className="text-left px-4 py-3 font-semibold">Komentarz</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      c: "Klasa biznes long-haul (fotel)",
                      lot: "★★★★☆",
                      lh: "★★★★★",
                      note: "LH Allegris (A350) ma drzwiczki i szerszy flat; LOT B787 bez prywatności",
                    },
                    {
                      c: "Klasa biznes trasy europejskie",
                      lot: "★★☆☆☆",
                      lh: "★★★☆☆",
                      note: "LH Economy Plus z pustym miejscem; LOT podobnie — obaj bez flat",
                    },
                    {
                      c: "Lounge WAW",
                      lot: "★★★☆☆",
                      lh: "—",
                      note: "Lufthansa nie ma własnego lounge w WAW; pasażerowie LH korzystają z loungy Star Alliance",
                    },
                    {
                      c: "Lounge FRA / MUC",
                      lot: "★★★☆☆",
                      lh: "★★★★★",
                      note: "Lufthansa Senator / First Class Lounge FRA to jedne z najlepszych loungy w Europie",
                    },
                    {
                      c: "Siatka połączeń z Polski",
                      lot: "★★★★☆",
                      lh: "★★★★★",
                      note: "LH dociera szerzej przez FRA i MUC, ale wymaga przesiadki",
                    },
                    {
                      c: "Bezpośrednie loty z WAW",
                      lot: "★★★★★",
                      lh: "★★★☆☆",
                      note: "LOT ma bezpośrednie do USA, Azji; LH z WAW obsługuje głównie FRA/MUC",
                    },
                    {
                      c: "Punktualność (avg. 2024)",
                      lot: "★★★★☆",
                      lh: "★★★☆☆",
                      note: "LOT ~73% on-time; LH ~70% — mniejszy hub = mniej efektu domina",
                    },
                    {
                      c: "Cena biletu biznes",
                      lot: "★★★★☆",
                      lh: "★★★☆☆",
                      note: "LOT średnio 10–25% taniej na porównywalnych trasach",
                    },
                    {
                      c: "Catering biznes",
                      lot: "★★★★☆",
                      lh: "★★★★☆",
                      note: "Porównywalny poziom; LH regionalne dania, LOT polskie specjały",
                    },
                    {
                      c: "WiFi pokładowe",
                      lot: "★★★☆☆",
                      lh: "★★★★☆",
                      note: "LH FlyNet szybszy i bardziej niezawodny na long-haul",
                    },
                    {
                      c: "Program korporacyjny",
                      lot: "★★★☆☆",
                      lh: "★★★★☆",
                      note: "LH Corporate Programme bardziej zaawansowany, lepsze narzędzia raportowania",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 font-medium text-slate-900 text-xs">{row.c}</td>
                      <td className="px-4 py-3 text-center text-xs">{row.lot}</td>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Trasy z Polski — kto skąd lata</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🇵🇱</span>
                  <p className="font-semibold text-slate-900">LOT — hub Warszawa (WAW)</p>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {[
                    "WAW → NYC (JFK/EWR) — bezpośredni, ok. 9h",
                    "WAW → Chicago (ORD) — bezpośredni, ok. 10h",
                    "WAW → Toronto (YYZ) — bezpośredni, ok. 10h",
                    "WAW → Tokyo (NRT) — bezpośredni, ok. 11h 30m",
                    "WAW → Bangkok (BKK) — bezpośredni, ok. 10h",
                    "WAW → Tel Awiw (TLV), Dubai (DXB) — bezpośredni",
                    "KRK, GDN, WRO, KTW → Europa przez WAW (przesiadka)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🇩🇪</span>
                  <p className="font-semibold text-slate-900">Lufthansa — huby FRA i MUC</p>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {[
                    "WAW, KRK, GDN, WRO → FRA lub MUC (connection)",
                    "Stamtąd: cały świat bez wyjątku (600+ destynacji)",
                    "Lepsza opcja do Ameryki Łacińskiej, Afryki, Azji Wsch.",
                    "Częstsze odloty z KRK/GDN/WRO niż LOT",
                    "Lounge w FRA Senator (dla kart Gold) — klasa światowa",
                    "Nowy produkt Allegris na A350 (drzwiczki, sypialnia)",
                    "Minusem: zawsze przesiadka — minimum 1h 20m w FRA/MUC",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-yellow-500 mt-0.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Ceny */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ceny biletów biznes — przykłady (2026)</h2>
            <p className="text-slate-600 mb-4 text-sm">
              Ceny taryf publicznych (Flex) w klasie biznes. Taryfy korporacyjne i promocyjne mogą być niższe o 10–40%.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Trasa (return)</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-300">LOT</th>
                    <th className="text-center px-4 py-3 font-semibold text-yellow-300">Lufthansa</th>
                    <th className="text-left px-4 py-3 font-semibold">Uwaga</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { route: "WAW–LHR (Londyn)", lot: "~1 800 PLN", lh: "~2 200 PLN", note: "LH przez FRA; LOT bezpośredni" },
                    { route: "WAW–CDG (Paryż)", lot: "~1 700 PLN", lh: "~2 100 PLN", note: "LOT bezpośredni; LH przez FRA" },
                    { route: "WAW–NYC (Nowy Jork)", lot: "~9 500 PLN", lh: "~12 000 PLN", note: "LOT bezpośredni vs. LH przez FRA" },
                    { route: "KRK–FRA (Frankfurt)", lot: "~2 400 PLN*", lh: "~1 900 PLN", note: "*LOT przez WAW; LH bezpośredni" },
                    { route: "WAW–NRT (Tokio)", lot: "~14 000 PLN", lh: "~16 500 PLN", note: "LOT bezpośredni vs. LH przez MUC" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 font-medium text-slate-900 text-xs">{row.route}</td>
                      <td className="px-4 py-3 text-center font-semibold text-blue-700 text-xs">{row.lot}</td>
                      <td className="px-4 py-3 text-center font-semibold text-yellow-700 text-xs">{row.lh}</td>
                      <td className="px-4 py-3 text-slate-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-2">* Ceny orientacyjne, taryfy publiczne Flex/Semiflex. Sprawdź aktualne ceny bezpośrednio u przewoźnika.</p>
          </section>

          {/* Decyzyjna matryca */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Matryca decyzyjna — kto dla kogo</h2>
            <div className="space-y-3">
              {[
                {
                  case: "Delegacja z Warszawy do USA lub Azji",
                  winner: "LOT",
                  why: "Bezpośredni lot, niższa cena, brak ryzyka missed connection na przesiadce.",
                  lhok: false,
                },
                {
                  case: "Delegacja z Krakowa lub Wrocławia do Berlina/Amsterdamu",
                  winner: "Lufthansa",
                  why: "Częstsze połączenia z regionalnych lotnisk przez FRA/MUC, lub codeshare z LOT.",
                  lhok: true,
                },
                {
                  case: "Wymagany najwyższy produkt biznesowy (drzwiczki, prywatność)",
                  winner: "Lufthansa",
                  why: "Allegris na A350 i B787 (od 2024–2025) — drzwiczki, szersze łóżko, lepsza izolacja.",
                  lhok: true,
                },
                {
                  case: "Firma ma wiele lotów w Polsce i chce jedną umowę",
                  winner: "LOT",
                  why: "LOT for Business pokrywa wszystkie trasy; prostsza umowa niż korporacyjna LH dla SME.",
                  lhok: false,
                },
                {
                  case: "Praca na pokładzie wymaga szybkiego WiFi",
                  winner: "Lufthansa",
                  why: "FlyNet Lufthansa bardziej niezawodny i szybszy na long-haul (Viasat/GX Aviation).",
                  lhok: true,
                },
                {
                  case: "Budżet ograniczony, priorytet: dotrzeć do celu",
                  winner: "LOT",
                  why: "Niższa cena biletu i uniknięcie kosztów ewentualnej przesiadkowej doby hotelowej.",
                  lhok: false,
                },
              ].map((row, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex gap-4 items-start">
                  <span className={`flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-bold ${row.lhok ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"}`}>
                    {row.winner}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-0.5">{row.case}</p>
                    <p className="text-slate-600 text-xs">{row.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: "Która linia ma lepszą klasę biznes na trasach intercontinental — LOT czy Lufthansa?",
                  a: "Na trasach transatlantyckich Lufthansa wyprzedza LOT dzięki nowszym fotelom Business Class (Allegris na A350/B787 — drzwiczki, szersze łóżko). LOT B787 oferuje przyzwoity fully flat, ale bez prywatności kabin. Na lotach do USA z Warszawy LOT jest lepszą opcją ze względu na brak przesiadki.",
                },
                {
                  q: "Czy LOT jest tańszy od Lufthansy w klasie biznes?",
                  a: "Zazwyczaj tak. Bilety LOT Business Class na trasach europejskich i transatlantyckich są średnio 10–25% tańsze od Lufthansy na porównywalnych trasach. Różnica jest największa na trasach WAW–USA, gdzie LOT oferuje bezpośredni lot bez marży za connection.",
                },
                {
                  q: "Który program lojalnościowy jest lepszy dla polskich firm — Miles & More?",
                  a: "Oba — LOT i Lufthansa — działają w tym samym programie Miles & More. Mile zbierane na lotach LOT i Lufthansa sumują się na jednym koncie i przeliczają na te same nagrody. Dla polskich firm jest to zaletą: można mieszać linie i nadal budować jeden status.",
                },
                {
                  q: "Jak wypada punktualność LOT vs Lufthansa?",
                  a: "Według danych OAG (2024) punktualność LOT (przylot w czasie) wynosi ok. 72–75%, Lufthansa ok. 68–73%. LOT ma mniejszą sieć i mniej przesiadek, co zmniejsza ryzyko efektu domina. Lufthansa przez FRA i MUC — największe huby Europy — jest bardziej narażona na opóźnienia łańcuchowe.",
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
            <h3 className="text-xl font-bold mb-3">Lot LOT lub Lufthansa był opóźniony?</h3>
            <p className="text-slate-300 mb-6 text-sm max-w-xl mx-auto">
              Obaj przewoźnicy podlegają EC 261/2004. Opóźnienie ≥ 3h = odszkodowanie do 600 EUR. Sprawdź swoje roszczenie.
            </p>
            <a
              href="https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=lufthansa-vs-lot-delegacja"
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
