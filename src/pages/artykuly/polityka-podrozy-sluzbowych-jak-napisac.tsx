import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, Briefcase, FileText, ArrowRight } from "lucide-react";

export default function PolitykaPodrozySluzbowych() {
  return (
    <>
      <SEO
        title="Polityka podróży służbowych (Travel Policy) — jak napisać od zera?"
        description="Travel policy to fundament kontroli kosztów lotów służbowych. Sprawdź co musi zawierać, jak ustalić limity klasowe i co zrobić z opóźnieniami i odszkodowaniami EC 261."
        canonicalUrl="https://bizneslot.info/artykuly/polityka-podrozy-sluzbowych-jak-napisac"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Polityka podróży służbowych (Travel Policy) — jak napisać od zera?",
            description:
              "Kompletny przewodnik tworzenia polityki podróży służbowych: klasy lotu, limity kosztów, procedury reklamacyjne EC 261, bleisure i compliance.",
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
                name: "Co powinna zawierac polityka podrozy sluzbowych?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Polityka powinna obejmowac: zasady rezerwacji (kto, jak, z jakim wyprzedzeniem), limity klas lotniczych wedlug dystansu i stanowiska, procedure reklamacyjna przy opoznieniach i odwolaniach, zasady bleisure, raportowanie i zatwierdzanie wydatkow.",
                },
              },
              {
                "@type": "Question",
                name: "Kiedy pracownicy moga leciec klasa biznes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Najczesciej stosowany standard: klasa biznes przy lotach powyzej 6 godzin lub dla kadry C-level. Loty europejskie (do 3h) — economy lub premium economy. Warto ustalic progi dystansowe, a nie stanowiskowe, by uniknac nieporozumien.",
                },
              },
              {
                "@type": "Question",
                name: "Czy polityka podrozy powinna regulowac odszkodowania EC 261?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak, ale uwaga: odszkodowanie EC 261 nalezy do pracownika jako pasazera, nie do firmy. Polityka moze okreslac procedure zglaszania opoznien i zachecac do skladania roszczen, ale nie moze nakazywac oddania odszkodowania pracodawcy — taki zapis jest niezgodny z prawem UE.",
                },
              },
              {
                "@type": "Question",
                name: "Jak czesto aktualizowac polityk podrozy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Minimum raz w roku oraz po kazdej istotnej zmianie: nowe przepisy lotnicze, zmiana dostawcy TMC, istotna zmiana cen biletow lub nowe cele podrozy. Daty ostatniej aktualizacji powinny byc widoczne w dokumencie.",
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
            <Briefcase className="w-4 h-4" />
            <span>Zarządzanie podróżami służbowymi</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">
            Polityka podróży służbowych (Travel Policy) — jak napisać od zera?
          </h1>
          <p className="text-blue-100 text-lg">
            Firma bez travel policy traci na kosztach i ryzykuje spory z pracownikami przy każdym
            opóźnieniu. Sprawdź co musi zawierać dobry dokument i jak uniknąć typowych luk.
          </p>
        </div>

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl px-6 py-5 mb-8">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-1">
            Krótka odpowiedź
          </p>
          <p className="text-gray-800 font-medium">
            Skuteczna polityka podróży służbowych musi obejmować <strong>6 obszarów</strong>: zasady
            rezerwacji, limity klasowe, procedury przy zakłóceniach lotu, rozliczanie kosztów, bleisure
            oraz postanowienia dotyczące odszkodowań EC 261. Bez ostatniego punktu firma naraża się
            na konflikty z pracownikami.
          </p>
        </div>

        {/* Dlaczego warto */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Dlaczego travel policy się opłaca?</h2>
          <p className="text-gray-700 mb-4">
            Firmy z udokumentowaną polityką podróży wydają średnio o 20–30% mniej na loty służbowe
            niż te bez formalnych zasad. Efekt wynika z trzech mechanizmów:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
            <li>
              <strong>Konsolidacja rezerwacji</strong> — jeden dostawca lub TMC umożliwia negocjowanie
              stawek korporacyjnych i widoczność całego spend&apos;u.
            </li>
            <li>
              <strong>Wyprzedzenie rezerwacji</strong> — reguła np. &quot;lot powyżej 7 dni przed wylotem&quot;
              obniża średnią cenę biletu o 15–40%.
            </li>
            <li>
              <strong>Klasy lotu według dystansu</strong> — eliminuje sytuacje, gdy pracownik rezerwuje
              biznes na 1,5-godzinny lot do Berlina.
            </li>
          </ul>
        </section>

        {/* 6 elementów */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            6 elementów, które musi zawierać travel policy
          </h2>
          <div className="space-y-4">

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-sm font-bold shrink-0">1</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Zasady rezerwacji</p>
                  <p className="text-gray-600 text-sm">
                    Kto może rezerwować (pracownik, asystent, TMC), przez jakie kanały (platforma
                    korporacyjna, e-mail do biura podróży), z jakim wyprzedzeniem (zalecane minimum
                    7–14 dni), kto zatwierdza wydatek powyżej progu.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-sm font-bold shrink-0">2</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Klasy lotu — limity według dystansu</p>
                  <p className="text-gray-600 text-sm">
                    Najczęściej stosowany model:
                  </p>
                  <div className="mt-2 overflow-x-auto rounded-lg border border-gray-100">
                    <table className="w-full text-xs">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-3 py-2 text-left">Dystans lotu</th>
                          <th className="px-3 py-2 text-left">Standardowo</th>
                          <th className="px-3 py-2 text-left">C-level / wyjątki</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="px-3 py-2">Do 3h (Europa)</td>
                          <td className="px-3 py-2">Economy</td>
                          <td className="px-3 py-2">Economy / Flex</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-3 py-2">3–6h (śr. dystans)</td>
                          <td className="px-3 py-2">Economy / Premium Eco</td>
                          <td className="px-3 py-2">Business</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2">Powyżej 6h</td>
                          <td className="px-3 py-2">Premium Economy</td>
                          <td className="px-3 py-2">Business</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-sm font-bold shrink-0">3</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Procedura przy zakłóceniach lotu</p>
                  <p className="text-gray-600 text-sm">
                    Co pracownik robi przy opóźnieniu 2h+, odwołaniu, overbookingu lub missed
                    connection: kogo informuje (manager, travel desk), jak dokumentuje zdarzenie
                    (boarding pasy, potwierdzenia), czy firma pokrywa dodatkowe koszty (hotel,
                    jedzenie) powyżej świadczeń linii.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-sm font-bold shrink-0">4</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Rozliczanie kosztów podróży</p>
                  <p className="text-gray-600 text-sm">
                    Termin na złożenie rozliczenia (np. 14 dni po powrocie), wymagane dokumenty
                    (faktury, boarding pasy, receipty), limity diet, kurs walutowy (kurs NBP z dnia
                    podróży vs stały), karty firmowe vs. zwrot własnych kosztów.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-sm font-bold shrink-0">5</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Bleisure — prywatne przedłużenie delegacji</p>
                  <p className="text-gray-600 text-sm">
                    Jasne zasady: czy firma zgadza się na przedłużenie wyjazdu służbowego o część
                    prywatną, jak rozliczany jest bilet (pracownik dopłaca różnicę lub firma pokrywa
                    tańszy wariant), kto odpowiada za ubezpieczenie w dniach prywatnych.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5 border-amber-200 bg-amber-50">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-600 text-white text-sm font-bold shrink-0">6</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Odszkodowania EC 261 — najczęściej pomijany punkt</p>
                  <p className="text-gray-600 text-sm">
                    Polityka powinna informować pracownika o prawie do odszkodowania i określać
                    procedurę jego dochodzenia. Czego <strong>nie wolno</strong> zapisać: nakazu
                    przekazania odszkodowania pracodawcy — jest to sprzeczne z prawem UE i nieważne
                    z mocy prawa.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Najczęstsze błędy */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Najczęstsze błędy w travel policy</h2>
          <div className="space-y-3">
            {[
              {
                blad: "Brak definicji klas lotu dla lotów hybrydowych",
                skutek: "Spory przy rezerwacji — pracownik kupuje biznes na 4-godzinny lot, bo polityka mówi tylko o lotach powyżej 8h.",
              },
              {
                blad: "Brak procedury zakłóceń lotu",
                skutek: "Pracownik nie wie, co robić przy odwołaniu — rezerwuje hotel na własną rękę za 800 EUR, firma odmawia zwrotu.",
              },
              {
                blad: "Klauzula o zwrocie odszkodowania EC 261 pracodawcy",
                skutek: "Zapis nieważny z mocy prawa UE — pracownik nie ma obowiązku stosowania się do niego.",
              },
              {
                blad: "Brak daty ostatniej aktualizacji",
                skutek: "Pracownicy i zarząd operują na nieaktualnych zasadach po zmianie dostawcy lub przepisów.",
              },
              {
                blad: "Polityka tylko po polsku w firmie z pracownikami zagranicznymi",
                skutek: "Nieegzekwowalne zasady wobec pracowników nieznających polskiego.",
              },
            ].map((item) => (
              <div key={item.blad} className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.blad}</p>
                  <p className="text-gray-600 text-sm">{item.skutek}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Punkt o EC 261 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Jak zapisać w polityce kwestię odszkodowań EC 261?
          </h2>
          <p className="text-gray-700 mb-4">
            Rekomendowany zapis w travel policy (przykładowy fragment):
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 font-mono text-sm text-gray-700 whitespace-pre-wrap">
{`§ X. Zakłócenia lotu i odszkodowania

1. Przy opóźnieniu lotu o 3 godziny lub więcej, odwołaniu
   lub overbookingu pracownikowi przysługują prawa
   wynikające z Rozporządzenia EC 261/2004.

2. Pracownik jest uprawniony do samodzielnego dochodzenia
   odszkodowania EC 261 — stanowi ono jego osobisty
   przychód i nie podlega przekazaniu pracodawcy.

3. Pracownik zobowiązany jest zachować boarding pasy
   i dokumenty podróży przez 36 miesięcy od daty lotu.

4. W przypadku zakłócenia lotu pracownik niezwłocznie
   informuje bezpośredniego przełożonego i dział HR
   o opóźnieniu przekraczającym 3 godziny.`}
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Zapis punkt 2 jest kluczowy — chroni pracownika i jednocześnie eliminuje ryzyko
            nieważnych postanowień w umowie o pracę lub regulaminie.
          </p>
        </section>

        {/* Powiązania */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Powiązane tematy</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/artykuly/czy-pracodawca-moze-zatrzymac-odszkodowanie-za-lot",
                label: "Czy pracodawca może zatrzymać odszkodowanie EC 261?",
              },
              {
                href: "/artykuly/odszkodowanie-lot-sluzbowy-pracownik-czy-pracodawca",
                label: "Odszkodowanie za lot — pracownik czy pracodawca?",
              },
              {
                href: "/artykuly/bilet-sluzbowy-kupiony-przez-firme-kto-sklada-reklamacje",
                label: "Bilet kupiony przez firmę — kto składa reklamację?",
              },
              {
                href: "/artykuly/przedawnienie-roszczenia-ec261-pracownik",
                label: "Przedawnienie roszczenia EC 261 — ile czasu ma pracownik?",
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
                Czy travel policy musi być osobnym dokumentem, czy może być częścią regulaminu pracy?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Może być częścią regulaminu wynagradzania lub podróży służbowych (wymagany przy
                  firmach powyżej 50 pracowników). W mniejszych firmach wystarczy oddzielny
                  dokument zaakceptowany przez pracownika. Forma nie jest narzucona przez prawo —
                  ważna jest treść i udokumentowane zaznajomienie pracownika z zasadami.
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
                Ile firm w Polsce ma formalną politykę podróży?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Według badań branżowych formalny dokument travel policy posiada około 60–70%
                  dużych korporacji (powyżej 250 pracowników) i tylko 20–30% firm z sektora MŚP.
                  Tymczasem to właśnie MŚP, ze względu na brak dedykowanego travel managera,
                  najbardziej potrzebuje czytelnych zasad.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-2xl px-8 py-8 text-center">
          <div className="flex justify-center mb-3">
            <FileText className="w-8 h-8 text-blue-300" />
          </div>
          <h2 className="text-xl font-bold mb-2">Pracownicy tracą odszkodowania, bo nie wiedzą o EC 261?</h2>
          <p className="text-blue-200 mb-5 text-sm">
            Wpisz do travel policy punkt o prawach pasażera i wskaż ClaimWinger jako narzędzie
            do dochodzenia roszczeń. Pracownik działa, firma nie musi się angażować.
          </p>
          <Link
            href="https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=polityka-podrozy-sluzbowych-jak-napisac"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Sprawdź ClaimWinger dla firm
          </Link>
        </div>
      </main>
    </>
  );
}
