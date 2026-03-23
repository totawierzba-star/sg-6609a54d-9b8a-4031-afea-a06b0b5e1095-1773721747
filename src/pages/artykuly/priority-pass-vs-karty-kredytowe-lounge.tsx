import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight, Plane } from "lucide-react";

export default function PriorityPassVsKartyKredytowe() {
  return (
    <>
      <SEO
        title="Priority Pass vs karty kredytowe z dostępem do lounge — porównanie 2025"
        description="Priority Pass czy karta kredytowa premium? Porównanie kosztów, liczby saloników, warunków dla gości i opłacalności dla polskiego podróżnika służbowego w 2025 roku."
        canonicalUrl="https://bizneslot.info/artykuly/priority-pass-vs-karty-kredytowe-lounge"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Priority Pass vs karty kredytowe z dostępem do lounge — porównanie 2025",
            description:
              "Porownanie Priority Pass z kartami kredytowymi premium oferujacymi dostep do lounge: koszty, liczba salonikow, zasady dla gosci i oplacalnosc dla podroznika sluzbowego.",
            author: { "@type": "Organization", name: "BizneLot.info" },
            publisher: { "@type": "Organization", name: "BizneLot.info" },
            datePublished: "2026-03-22",
            dateModified: "2026-03-22",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Czy Priority Pass oplacal sie dla podroznika sluzbowego?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak, jesli latasz co najmniej 8-10 razy rocznie. Przy abonamencie Standard Plus (ok. 350 USD/rok, 10 wejsc) koszt wejscia wynosi ok. 35 USD. Przy nielimitowanym abonamencie (ok. 469 USD/rok) juz od 5 wejsc wychodzi taniej niz jednorazowe wejscia (35-50 USD za wejscie).",
                },
              },
              {
                "@type": "Question",
                name: "Ktora karta kredytowa daje najlepszy dostep do lounge w Polsce?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dla polskich podroznikow najlepiej oceniane sa: Citi Mastercard World Elite (nielimitowany Priority Pass), Amex Platinum (Priority Pass + Centurion Lounges). Karty Pekao i ING Platinum oferuja ograniczona liczbe wejsc. Warto porownac opłatę roczna z faktyczna liczba planowanych wejsc.",
                },
              },
              {
                "@type": "Question",
                name: "Ile loungów obejmuje Priority Pass na świecie?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Priority Pass obejmuje ponad 1 400 salonikow w ponad 600 miastach na calym swiecie. To jedna z najwiekszych sieci dostepu do lounge — znacznie wieksza niz pojedyncze programy lojalnosciowe linii lotniczych.",
                },
              },
            ],
          }),
        }}
      />

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl px-8 py-10 mb-8">
          <div className="flex items-center gap-2 text-blue-300 text-sm font-medium mb-3">
            <Plane className="w-4 h-4" />
            <span>Lotniska i obsługa naziemna</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">
            Priority Pass vs karty kredytowe z dostępem do lounge — porównanie 2025
          </h1>
          <p className="text-blue-100 text-lg">
            Płacić osobno za Priority Pass czy wybrać kartę kredytową, która go zawiera?
            Dla częstego podróżnika służbowego to realna różnica kilkuset złotych rocznie.
          </p>
        </div>

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl px-6 py-5 mb-8">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-1">
            Krótka odpowiedź
          </p>
          <p className="text-gray-800 font-medium">
            Karta kredytowa z wbudowanym Priority Pass opłaca się, jeśli i tak korzystasz
            z jej innych benefitów. Jeśli chcesz <em>tylko</em> dostępu do lounge — sprawdź
            czy opłata roczna karty jest niższa niż abonament Priority Pass direct
            (od ok. 1 500 PLN/rok za nielimitowany). Przy 15+ wejściach rocznie nielimitowany
            plan zawsze wygrywa.
          </p>
        </div>

        {/* Czym jest Priority Pass */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Czym jest Priority Pass?</h2>
          <p className="text-gray-700 mb-3">
            Priority Pass to niezależna sieć dostępu do ponad 1 400 saloników w ponad 600
            miastach na świecie — bez powiązania z konkretną linią lotniczą lub statusem FFP.
            Posiadacz karty Priority Pass wchodzi do partnerskiech lounge niezależnie od tego,
            czym leci i w jakiej klasie.
          </p>
          <p className="text-gray-700">
            Karta jest dostępna w trzech formach: jako samodzielny produkt kupowany bezpośrednio,
            jako benefit wbudowany w karty kredytowe premium lub w ramach programów lojalnościowych
            banków.
          </p>
        </section>

        {/* Plany Priority Pass */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Plany Priority Pass — koszty w 2025
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Plan</th>
                  <th className="px-4 py-3 text-right">Opłata roczna</th>
                  <th className="px-4 py-3 text-left">Wejścia w cenie</th>
                  <th className="px-4 py-3 text-right">Opłata za dodatkowe wejście</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { plan: "Standard", oplata: "99 USD", wejscia: "Brak (pay-per-use)", extra: "35 USD/wejście" },
                  { plan: "Standard Plus", oplata: "329 USD", wejscia: "10 wejść", extra: "35 USD/wejście" },
                  { plan: "Prestige (nielimitowany)", oplata: "469 USD", wejscia: "Nielimitowane", extra: "35 USD/gość" },
                ].map((row) => (
                  <tr key={row.plan} className="even:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{row.plan}</td>
                    <td className="px-4 py-3 text-right font-medium text-blue-700">{row.oplata}</td>
                    <td className="px-4 py-3">{row.wejscia}</td>
                    <td className="px-4 py-3 text-right text-gray-600">{row.extra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Ceny orientacyjne 2025 przy zakupie bezpośrednim. Kurs USD/PLN wpływa na ostateczny koszt.
          </p>
        </section>

        {/* Karty kredytowe z PP */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Karty kredytowe z Priority Pass dostępne w Polsce
          </h2>
          <div className="space-y-4">

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <p className="font-bold text-gray-900 mb-1">Citi Mastercard World Elite</p>
              <div className="grid grid-cols-2 gap-2 text-sm mt-2">
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-1">Lounge</p>
                  <p className="text-gray-700 text-xs">Priority Pass Prestige — nielimitowane wejścia posiadacza + 1 gość gratis</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-1">Opłata roczna</p>
                  <p className="text-gray-700 text-xs">Sprawdź aktualny cennik Citi</p>
                </div>
              </div>
              <p className="text-xs text-blue-700 mt-2 font-medium">Najlepsza opcja dla aktywnych podróżników — nielimitowane PP w cenie karty.</p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-bold text-gray-900 mb-1">American Express Platinum</p>
              <div className="grid grid-cols-2 gap-2 text-sm mt-2">
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-1">Lounge</p>
                  <p className="text-gray-700 text-xs">Priority Pass Prestige + dostęp do Centurion Lounges (USA) + Plaza Premium</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-1">Opłata roczna</p>
                  <p className="text-gray-700 text-xs">Wysoka — sprawdź aktualny cennik Amex</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2">Najszerszy dostęp do lounge globalnie, ale opłata roczna jest najwyższa na rynku.</p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-bold text-gray-900 mb-1">ING Platinum Mastercard</p>
              <div className="grid grid-cols-2 gap-2 text-sm mt-2">
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-1">Lounge</p>
                  <p className="text-gray-700 text-xs">Ograniczona liczba wejść Priority Pass rocznie (sprawdź regulamin)</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-1">Opłata roczna</p>
                  <p className="text-gray-700 text-xs">Niższa niż Citi/Amex</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2">Dobra opcja dla podróżników latających 6–10 razy rocznie.</p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-bold text-gray-900 mb-1">Pekao World Elite Mastercard</p>
              <div className="grid grid-cols-2 gap-2 text-sm mt-2">
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-1">Lounge</p>
                  <p className="text-gray-700 text-xs">Priority Pass — liczba wejść zależna od produktu (sprawdź regulamin)</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-1">Dostępność</p>
                  <p className="text-gray-700 text-xs">Wymagane spełnienie warunków kwalifikacyjnych</p>
                </div>
              </div>
            </div>

          </div>
          <p className="text-xs text-gray-500 mt-3">
            Warunki kart mogą się zmieniać. Przed wyborem karty zweryfikuj aktualny regulamin
            i sprawdź, ile wejść rocznie jest w cenie oraz jakie są zasady dla gości.
          </p>
        </section>

        {/* Porównanie */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Priority Pass direct vs karta kredytowa — kiedy co wybrać?
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Kryterium</th>
                  <th className="px-4 py-3 text-center">PP bezpośrednio</th>
                  <th className="px-4 py-3 text-center">PP przez kartę</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { kryterium: "Koszt przy 5 wejściach/rok", pp: "99 + 5×35 = 274 USD", karta: "Opłata karty (zwykle niżej)" },
                  { kryterium: "Koszt przy 20 wejściach/rok", pp: "469 USD (Prestige)", karta: "Opłata karty (zwykle wyżej)" },
                  { kryterium: "Dodatkowe benefity", pp: "Brak", karta: "Cashback, ubezpieczenia, concierge" },
                  { kryterium: "Zasady dla gości", pp: "35 USD/gość (Prestige)", karta: "Zależy od karty" },
                  { kryterium: "Elastyczność", pp: "Można anulować", karta: "Wiąże z bankiem" },
                  { kryterium: "Pokrycie saloników", pp: "1 400+", karta: "1 400+ (te same)" },
                ].map((row) => (
                  <tr key={row.kryterium} className="even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{row.kryterium}</td>
                    <td className="px-4 py-3 text-center text-gray-700 text-xs">{row.pp}</td>
                    <td className="px-4 py-3 text-center text-gray-700 text-xs">{row.karta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Alternatywy */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Alternatywy dla Priority Pass</h2>
          <div className="space-y-3">
            {[
              {
                nazwa: "Dragonpass",
                opis: "Sieć podobna do Priority Pass, dostępna przez niektóre karty bankowe i aplikację. Mniejsza sieć (ok. 1 300 lounge), ale często tańsza opcja pay-per-use (ok. 25–32 USD/wejście).",
                ok: true,
              },
              {
                nazwa: "LoungeKey",
                opis: "Program oferowany przez Mastercard i niektóre banki. Dostęp do ok. 1 000 saloników. Dostępny m.in. przez karty Mastercard World i World Elite.",
                ok: true,
              },
              {
                nazwa: "Status FFP linii lotniczej",
                opis: "Złoty lub Platynowy status w programie lojalnościowym (np. Miles & More Senator, LOT Złota Karta) daje bezpłatny dostęp do lounge linii i partnerów — ale wymaga dużej liczby lotów tą samą linią.",
                ok: true,
              },
              {
                nazwa: "Jednorazowy zakup przy bramce",
                opis: "Drogie (150–250 PLN za wejście) i nie zawsze dostępne przy przepełnieniu loungu. Ostatnia deska ratunku, nie planowana strategia.",
                ok: false,
              },
            ].map((item) => (
              <div key={item.nazwa} className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
                {item.ok
                  ? <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  : <XCircle className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                }
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.nazwa}</p>
                  <p className="text-gray-600 text-sm">{item.opis}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Powiązane */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Powiązane artykuły</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/artykuly/lounge-biznesowy-okecie-jak-wejsc",
                label: "Lounge na Okęciu — co oferuje i jak wejść?",
              },
              {
                href: "/artykuly/karta-statusowa-lounge",
                label: "Karta statusowa i dostęp do lounge",
              },
              {
                href: "/artykuly/programy-lojalnosciowe-dla-firm",
                label: "Programy lojalnościowe dla firm",
              },
              {
                href: "/artykuly/miles-and-more-dla-firm",
                label: "Miles & More dla firm",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-xl border border-gray-200 p-4 hover:border-blue-400 hover:bg-blue-50 transition text-sm text-gray-700"
              >
                <ArrowRight className="w-4 h-4 text-blue-500 shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Najczęstsze pytania</h2>
          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">

            <div
              itemScope
              itemProp="mainEntity"
              itemProp="mainEntity" itemType="https://schema.org/Question"
              className="border border-gray-200 rounded-xl p-5"
            >
              <h3 itemProp="name" className="font-semibold text-gray-900 mb-2">
                Czy Priority Pass działa we wszystkich lounge na świecie?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Nie. Priority Pass daje dostęp do saloników z sieci partnerskiej (ponad 1 400
                  lokalizacji). Nie obejmuje wszystkich lounge — w szczególności zazwyczaj nie
                  obejmuje saloników flagship linii lotniczych (np. Lufthansa Senator Lounge
                  we Frankfurcie czy British Airways Concorde Room w Londynie), które są
                  zarezerwowane dla pasażerów pierwszej klasy lub posiadaczy najwyższych statusów.
                </p>
              </div>
            </div>

            <div
              itemScope
              itemProp="mainEntity"
              itemProp="mainEntity" itemType="https://schema.org/Question"
              className="border border-gray-200 rounded-xl p-5"
            >
              <h3 itemProp="name" className="font-semibold text-gray-900 mb-2">
                Czy mogę wziąć gościa do loungu z Priority Pass?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Tak, ale za dopłatą. Przy planie Prestige gość kosztuje ok. 35 USD (płatne
                  przy wejściu lub przez kartę). Niektóre karty kredytowe z Priority Pass
                  oferują 1 gościa gratis. Sprawdź warunki swojego planu lub karty przed
                  podróżą z klientem lub współpracownikiem.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-2xl px-8 py-8 text-center">
          <h2 className="text-xl font-bold mb-2">Lounge nie chroni przed opóźnieniem lotu</h2>
          <p className="text-blue-200 mb-5 text-sm">
            Odpocząłeś w salonie, ale lot i tak dotarł 3h+ za późno? Przysługuje Ci
            odszkodowanie EC 261. ClaimWinger sprawdzi roszczenie bez angażowania Twojego czasu.
          </p>
          <Link
            href="https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=priority-pass-vs-karty-kredytowe-lounge"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Sprawdź swoje roszczenie
          </Link>
        </div>
      </main>
    </>
  );
}
