import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, CheckCircle, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function KiedyLotJestUznawanyZaOdwolany() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Kiedy lot jest uznawany za odwołany według prawa UE? | BiznesLot.info"
        description="Lot jest odwołany gdy linia anuluje rejs i nie oferuje alternatywnego lotu tego samego dnia. Sprawdź definicję prawną, granicę z opóźnieniem i kiedy przysługuje odszkodowanie EC 261."
        canonicalUrl="https://bizneslot.info/artykuly/kiedy-lot-jest-uznawany-za-odwolany"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "Kiedy lot jest uznawany za odwołany według prawa UE?",
                description:
                  "Lot jest odwołany gdy linia anuluje rejs bez oferowania alternatywnego lotu tego samego dnia. Definicja prawna i różnica względem opóźnienia.",
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
                    name: "Kiedy lot jest uznawany za odwołany?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Lot jest uznawany za odwołany (cancelled) w rozumieniu EC 261/2004, gdy linia lotnicza anuluje zaplanowany rejs i nie oferuje pasażerom innego lotu na to samo lub zbliżone miejsce docelowe w dniu pierwotnego wylotu. Odwołanie może nastąpić w każdym momencie — przed lotem lub tego samego dnia. Kluczowe: odwołanie to brak wykonania lotu, a nie opóźnienie jego startu.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Jaka jest różnica między odwołaniem a opóźnieniem lotu?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Opóźnienie oznacza, że lot odbywa się, ale z przesunięciem czasu wylotu lub przylotu. Odwołanie oznacza, że lot w ogóle nie dochodzi do skutku. Granica jest istotna prawnie: przy opóźnieniu powyżej 3 h przysługuje odszkodowanie 250–600 EUR; przy odwołaniu — odszkodowanie i dodatkowo zwrot ceny biletu lub zmiana trasy. Trybunał Sprawiedliwości UE (wyrok Sturgeon) orzekł, że bardzo długie opóźnienie (5+ h) może być traktowane jak odwołanie.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Ile wcześniej linia może odwołać lot bez płacenia odszkodowania?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Linia lotnicza nie musi płacić odszkodowania EC 261, jeśli poinformowała o odwołaniu co najmniej 14 dni przed planowanym odlotem. Jeśli powiadomiła w terminie 7–14 dni i zaoferowała alternatywny lot z opóźnieniem do 4 h — odszkodowanie nie przysługuje. Przy powiadomieniu poniżej 7 dni odszkodowanie przysługuje, chyba że zachodzą nadzwyczajne okoliczności.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Czy zmiana godziny lotu o kilka godzin to odwołanie?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Nie automatycznie. Zmiana rozkładu (schedule change) różni się od odwołania. Jeśli linia przesuwa lot i oferuje pasażerowi alternatywne połączenie w innym czasie, to jest zmiana, nie odwołanie. Jednak jeśli zmiana jest znaczna (np. 5+ godzin lub inny dzień), pasażer może żądać zwrotu kosztów biletu i traktować sytuację jak odwołanie — na podstawie orzecznictwa TSUE.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-rose-700 via-rose-800 to-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-rose-200 text-sm mb-4">
              <Plane className="w-4 h-4" />
              <Link href="/artykuly" className="hover:text-white transition-colors">Artykuły</Link>
              <span>/</span>
              <span>Prawa pasażera</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Kiedy lot jest uznawany za odwołany według prawa UE?
            </h1>
            <p className="text-xl text-rose-100 mb-6">
              Definicja odwołania lotu w rozumieniu EC 261/2004, różnica między odwołaniem a opóźnieniem
              i kiedy linia może uniknąć wypłaty odszkodowania.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-rose-200">
              <span>Czas czytania: 4 min</span>
              <span>Aktualizacja: marzec 2026</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
          {/* Direct Answer */}
          <div className="bg-rose-50 border-l-4 border-rose-500 rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-rose-900 mb-2">Odpowiedź w jednym zdaniu</h2>
            <p className="text-rose-800 text-lg font-medium">
              Lot jest odwołany, gdy linia lotnicza <strong>anuluje zaplanowany rejs</strong> i nie wykonuje go —
              niezależnie od przyczyny. Odwołanie różni się od opóźnienia tym, że lot nie dochodzi do skutku
              w ogóle lub pasażer zostaje przekierowany na inny rejs.
            </p>
          </div>

          {/* Definicja */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Definicja prawna odwołania lotu (EC 261/2004)</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-600 border-l-4 border-rose-300 mb-4">
                Art. 2 lit. l EC 261/2004: &ldquo;&apos;odwołanie&apos; oznacza niewykonanie uprzednio zaplanowanego
                lotu, na który zostało zarezerwowane co najmniej jedno miejsce.&rdquo;
              </div>
              <p className="text-gray-700">
                Kluczowe elementy definicji: lot był zaplanowany (figurował w rozkładzie), były na niego rezerwacje,
                i lot nie doszedł do skutku. Przyczyna odwołania nie decyduje o tym czy jest to odwołanie —
                ale wpływa na to, czy linia musi płacić odszkodowanie.
              </p>
            </div>
          </section>

          {/* Odwołanie vs opóźnienie */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Odwołanie vs opóźnienie — kluczowe różnice</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-3 text-left">Kryterium</th>
                    <th className="p-3 text-center">Odwołanie (Cancellation)</th>
                    <th className="p-3 text-center">Opóźnienie (Delay)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Co się dzieje z lotem?", "Lot nie odbywa się", "Lot odbywa się, ale z przesunięciem"],
                    ["Próg odszkodowania", "Każde odwołanie (< 14 dni)", "Opóźnienie > 3 h na lotnisku docelowym"],
                    ["Kwota odszkodowania", "250–600 EUR", "250–600 EUR"],
                    ["Prawo do zwrotu biletu?", "Tak — pełny zwrot lub zmiana trasy", "Tylko przy opóźnieniu > 5 h i rezygnacji"],
                    ["Prawo do opieki (hotel, posiłek)?", "Tak — przy zmianie trasy na następny dzień", "Tak — od 2–4 h zależnie od dystansu"],
                    ["Wyjątek 14 dni?", "Tak — brak odszkodowania jeśli > 14 dni", "Nie dotyczy — liczy się czas opóźnienia"],
                  ].map(([kryterium, odwolanie, opoznienie], i) => (
                    <tr key={kryterium as string} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 font-medium text-gray-800">{kryterium}</td>
                      <td className="p-3 text-center text-rose-700">{odwolanie}</td>
                      <td className="p-3 text-center text-blue-700">{opoznienie}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Reguła 14 dni */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Reguła 14/7 dni — kiedy linia unika odszkodowania</h2>
            <div className="space-y-3">
              {[
                {
                  termin: "Powiadomienie ≥ 14 dni przed lotem",
                  wynik: "Brak odszkodowania",
                  opis: "Linia poinformowała o odwołaniu z min. 2-tygodniowym wyprzedzeniem — odszkodowanie EC 261 nie przysługuje. Pasażer ma jednak prawo do zwrotu biletu lub zmiany trasy.",
                  color: "gray",
                },
                {
                  termin: "Powiadomienie 7–14 dni + alternatywa z opóźnieniem ≤ 4 h",
                  wynik: "Brak odszkodowania",
                  opis: "Jeśli linia zaoferowała inny lot z przesunięciem do 4 h i wylot max. 2 h wcześniej niż planowany — odszkodowanie nie przysługuje.",
                  color: "yellow",
                },
                {
                  termin: "Powiadomienie < 7 dni",
                  wynik: "Odszkodowanie należne",
                  opis: "Krótkie ostrzeżenie — pełne odszkodowanie 250–600 EUR, chyba że zachodzą nadzwyczajne okoliczności (np. ekstremalna pogoda, zamknięcie lotniska).",
                  color: "red",
                },
                {
                  termin: "Odwołanie na lotnisku (last minute)",
                  wynik: "Pełne odszkodowanie",
                  opis: "Odwołanie w dniu wylotu lub po przybyciu na lotnisko — zawsze przysługuje odszkodowanie (+ opieka: posiłek, nocleg przy konieczności).",
                  color: "red",
                },
              ].map((row) => (
                <div key={row.termin} className={`bg-white border border-${row.color}-200 rounded-xl p-4`}>
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{row.termin}</p>
                      <p className="text-sm text-gray-600 mt-1">{row.opis}</p>
                    </div>
                    <div className={`flex-shrink-0 font-bold text-sm px-3 py-1 rounded-full ${row.color === "red" ? "bg-red-100 text-red-700" : row.color === "yellow" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-600"}`}>
                      {row.wynik}
                    </div>
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
                  q: "Kiedy lot jest uznawany za odwołany?",
                  a: "Lot jest uznawany za odwołany (cancelled) w rozumieniu EC 261/2004, gdy linia lotnicza anuluje zaplanowany rejs i nie wykonuje go. Odwołanie różni się od opóźnienia tym, że lot nie dochodzi do skutku. Kluczowe: odwołanie to brak wykonania lotu, a nie opóźnienie jego startu.",
                },
                {
                  q: "Jaka jest różnica między odwołaniem a opóźnieniem lotu?",
                  a: "Opóźnienie oznacza, że lot odbywa się, ale z przesunięciem czasu. Odwołanie oznacza, że lot nie dochodzi do skutku. Przy opóźnieniu powyżej 3 h przysługuje odszkodowanie 250–600 EUR; przy odwołaniu — odszkodowanie i zwrot ceny biletu lub zmiana trasy. TSUE orzekł, że opóźnienie 5+ h może być traktowane jak odwołanie.",
                },
                {
                  q: "Ile wcześniej linia może odwołać lot bez płacenia odszkodowania?",
                  a: "Linia nie musi płacić odszkodowania EC 261, jeśli poinformowała o odwołaniu co najmniej 14 dni przed planowanym odlotem. Przy powiadomieniu 7–14 dni i ofercie alternatywnego lotu z opóźnieniem do 4 h — odszkodowanie też nie przysługuje. Poniżej 7 dni — odszkodowanie należne.",
                },
                {
                  q: "Czy zmiana godziny lotu o kilka godzin to odwołanie?",
                  a: "Nie automatycznie. Zmiana rozkładu różni się od odwołania. Jeśli linia przesuwa lot i oferuje alternatywne połączenie, to jest zmiana, nie odwołanie. Jednak przy znacznej zmianie (5+ godzin lub inny dzień) pasażer może żądać zwrotu kosztów biletu i traktować sytuację jak odwołanie — na podstawie orzecznictwa TSUE.",
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
                { title: "Co to jest EC 261/2004 — wyjaśnienie", slug: "ec-261-2004-a-loty-sluzbowe-co-obejmuje-rozporzadzenie" },
                { title: "Lot służbowy odwołany w ostatniej chwili — co zrobić", slug: "lot-sluzbowy-odwolany-ostatniej-chwili-co-zrobic" },
                { title: "Jak długo linia ma na odpowiedź na reklamację?", slug: "jak-dlugo-linia-lotnicza-ma-na-odpowiedz-na-reklamacje" },
              ].map((art) => (
                <Link key={art.slug} href={`/artykuly/${art.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-rose-300 hover:shadow-sm transition-all group">
                  <span className="text-sm font-medium text-gray-800 group-hover:text-rose-700 transition-colors">{art.title} →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-rose-50 to-rose-100 border border-rose-200 rounded-2xl p-8 text-center">
            <Plane className="w-10 h-10 text-rose-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Lot odwołany? Sprawdź odszkodowanie.</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Przy odwołaniu lotu przysługuje Ci 250–600 EUR oraz zwrot biletu lub zmiana trasy. ClaimWinger
              weryfikuje roszczenie bezpłatnie.
            </p>
            <a
              href={`https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=kiedy-lot-jest-uznawany-za-odwolany`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
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
