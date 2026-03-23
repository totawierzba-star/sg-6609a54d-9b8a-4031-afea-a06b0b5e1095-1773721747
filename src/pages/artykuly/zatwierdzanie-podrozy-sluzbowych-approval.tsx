import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, ArrowRight, Briefcase } from "lucide-react";

export default function ZatwierdzaniePodrozySluzbowych() {
  return (
    <>
      <SEO
        title="Zatwierdzanie podróży służbowych — systemy approval i przepływy pracy"
        description="Jak wdrożyć skuteczny proces zatwierdzania delegacji? Progi kwotowe, wielostopniowy approval, integracja z TMC i typowe błędy powodujące rezerwacje last minute."
        canonicalUrl="https://bizneslot.info/artykuly/zatwierdzanie-podrozy-sluzbowych-approval"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Zatwierdzanie podróży służbowych — systemy approval i przepływy pracy",
            description:
              "Kompletny przewodnik po procesach zatwierdzania delegacji: progi kwotowe, approval flow, integracja z TMC i bledy powodujace rezerwacje last minute.",
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
                name: "Jak powinien wyglądać process zatwierdzania podróży służbowych?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Skuteczny approval flow zawiera: wniosek pracownika z celem i szacunkowym kosztem, automatyczne sprawdzenie zgodności z travel policy (TMC), zatwierdzenie przez bezpośredniego przełożonego (opcjonalnie: drugi level przy kwocie powyżej progu). Czas zatwierdzenia nie powinien przekraczać 24–48 godzin — opóźnienie approval powoduje drogie rezerwacje last minute.",
                },
              },
              {
                "@type": "Question",
                name: "Czy każda podróż służbowa wymaga zatwierdzenia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Zależy od polityki firmy. Najpopularniejszy model: podróże krajowe do określonego progu kwotowego — bez formalnego zatwierdzenia (wystarczy rejestracja). Podróże zagraniczne i powyżej progu — zatwierdzenie managera. Podróże intercontinentalne lub powyżej wyższego progu — zatwierdzenie CFO lub zarządu.",
                },
              },
              {
                "@type": "Question",
                name: "Jak approval flow wpływa na koszty biletów?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Wolny approval bezpośrednio podnosi koszty. Pracownik składa wniosek 3 tygodnie przed wylotem, ale czeka 10 dni na zatwierdzenie — rezerwuje bilet z 10-dniowym wyprzedzeniem zamiast 21-dniowego. Różnica w cenie biletu WAW-FRA to często 300-600 PLN. Cel: maksymalny czas zatwierdzenia 48 godzin.",
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
            Zatwierdzanie podróży służbowych — systemy approval i przepływy pracy
          </h1>
          <p className="text-blue-100 text-lg">
            Wolny approval to jedna z najczęstszych ukrytych przyczyn wysokich kosztów biletów.
            Sprawdź jak zaprojektować proces, który kontroluje wydatki bez hamowania biznesu.
          </p>
        </div>

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl px-6 py-5 mb-8">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-1">
            Krótka odpowiedź
          </p>
          <p className="text-gray-800 font-medium">
            Skuteczny approval flow to: <strong>wniosek z celem i kosztem → auto-check zgodności
            z polityką → zatwierdzenie managera w max 48h</strong>. Progi kwotowe decydują o liczbie
            poziomów zatwierdzenia. Kluczowe: im wolniejszy approval, tym droższy bilet.
          </p>
        </div>

        {/* Modele approval */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Modele procesu zatwierdzania — od prostego do wielostopniowego
          </h2>
          <div className="space-y-4">

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-semibold text-gray-900 mb-2">Model 1: Rejestracja bez zatwierdzenia</p>
              <p className="text-gray-600 text-sm mb-2">
                Pracownik rezerwuje samodzielnie przez TMC lub SBT — system automatycznie sprawdza
                zgodność z polityką (klasa, kanał, wyprzedzenie). Brak człowieka w pętli.
              </p>
              <p className="text-xs text-blue-700 font-medium">
                Dla kogo: firmy z dojrzałą TMC i wysokim compliance rate, podróże krajowe
                lub o niskiej wartości.
              </p>
            </div>

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <div className="flex items-center gap-2 mb-2">
                <p className="font-semibold text-gray-900">Model 2: Jeden poziom zatwierdzenia</p>
                <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full font-medium">Najpopularniejszy</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Pracownik składa wniosek → bezpośredni przełożony zatwierdza (lub odrzuca)
                → rezerwacja. Zastosowanie dla większości podróży zagranicznych.
              </p>
              <p className="text-xs text-blue-700 font-medium">
                Dla kogo: większość firm 50–500 pracowników. Równoważy kontrolę i szybkość.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-semibold text-gray-900 mb-2">Model 3: Wielostopniowy approval</p>
              <p className="text-gray-600 text-sm mb-2">
                Wniosek → manager → CFO lub dyrektor (przy przekroczeniu progu kwotowego
                lub przy intercontinentalnych trasach). Opcjonalnie: pre-trip approval od
                compliance przy wrażliwych rynkach.
              </p>
              <p className="text-xs text-blue-700 font-medium">
                Dla kogo: korporacje, firmy regulowane, budżety powyżej 500 000 PLN rocznie.
              </p>
            </div>

          </div>
        </section>

        {/* Progi kwotowe */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Progi kwotowe — przykładowa macierz zatwierdzenia
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Koszt podróży</th>
                  <th className="px-4 py-3 text-left">Rodzaj</th>
                  <th className="px-4 py-3 text-left">Zatwierdza</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">Do 1 000 PLN</td>
                  <td className="px-4 py-3 text-gray-700">Krajowa</td>
                  <td className="px-4 py-3 text-gray-700">Auto (tylko rejestracja)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">1 000–5 000 PLN</td>
                  <td className="px-4 py-3 text-gray-700">Zagraniczna Europa</td>
                  <td className="px-4 py-3 text-gray-700">Bezpośredni manager</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">5 000–15 000 PLN</td>
                  <td className="px-4 py-3 text-gray-700">Intercontinentalna</td>
                  <td className="px-4 py-3 text-gray-700">Manager + dyrektor działu</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Powyżej 15 000 PLN</td>
                  <td className="px-4 py-3 text-gray-700">Dowolna</td>
                  <td className="px-4 py-3 text-gray-700">Manager + CFO</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Progi orientacyjne — dostosuj do struktury i budżetu firmy.
          </p>
        </section>

        {/* Przepływ pracy */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Krok po kroku — jak powinien wyglądać przepływ pracy?
          </h2>
          <div className="space-y-3">
            {[
              {
                krok: "1",
                tytul: "Wniosek pracownika",
                opis: "Pracownik wypełnia formularz: cel podróży, daty, destynacja, szacunkowy koszt, uzasadnienie biznesowe. Najlepiej zintegrowany z TMC — od razu widoczne dostępne opcje lotów.",
              },
              {
                krok: "2",
                tytul: "Auto-check zgodności z travel policy",
                opis: "System TMC lub SBT sprawdza automatycznie: czy klasa jest zgodna z polityką, czy rezerwacja jest z wymaganym wyprzedzeniem, czy wybrany kanał jest zatwierdzony. Niezgodności flagowane jako ostrzeżenia.",
              },
              {
                krok: "3",
                tytul: "Powiadomienie zatwierdzającego",
                opis: "Manager otrzymuje e-mail lub powiadomienie w TMC z linkiem do zatwierdzenia. Widzi: cel podróży, koszt, opcje lotu, uzasadnienie. Maks. 2 kliknięcia do zatwierdzenia.",
              },
              {
                krok: "4",
                tytul: "Zatwierdzenie lub odrzucenie z komentarzem",
                opis: "Manager zatwierdza lub odrzuca z obowiązkowym komentarzem przy odrzuceniu. Czas: cel to max 24–48h od złożenia wniosku. Po przekroczeniu — automatyczne przypomnienie.",
              },
              {
                krok: "5",
                tytul: "Rezerwacja",
                opis: "Po zatwierdzeniu pracownik finalizuje rezerwację w TMC (lub robi to automatycznie system). Booking confirmation trafia do pracownika, managera i travel managera.",
              },
            ].map((item) => (
              <div key={item.krok} className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-sm font-bold shrink-0">{item.krok}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.tytul}</p>
                  <p className="text-gray-600 text-sm">{item.opis}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Narzędzia */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Narzędzia do obsługi approval flow
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Narzędzie</th>
                  <th className="px-4 py-3 text-left">Approval wbudowany?</th>
                  <th className="px-4 py-3 text-left">Uwagi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { narz: "TravelPerk", approval: "Tak", uwagi: "Approval flow w standardzie, mobile-friendly" },
                  { narz: "SAP Concur", approval: "Tak", uwagi: "Wielostopniowy, integracja z SAP HR" },
                  { narz: "GetAbroad", approval: "Tak", uwagi: "Prosty flow, wsparcie PL" },
                  { narz: "Navan (TripActions)", approval: "Tak", uwagi: "AI-assisted, szybki UX" },
                  { narz: "E-mail + arkusz", approval: "Ręcznie", uwagi: "Brak automatyzacji, błędy, wolno" },
                ].map((row) => (
                  <tr key={row.narz} className="even:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{row.narz}</td>
                    <td className="px-4 py-3">
                      {row.approval === "Tak" ? (
                        <span className="flex items-center gap-1 text-green-700 text-xs font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Tak
                        </span>
                      ) : (
                        <span className="text-gray-500 text-xs">{row.approval}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{row.uwagi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Najczęstsze błędy */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Błędy, które podnoszą koszty</h2>
          <div className="space-y-3">
            {[
              {
                blad: "Brak terminu zatwierdzenia w polityce",
                skutek: "Manager czeka tydzień — pracownik rezerwuje last minute. Koszt biletu rośnie o 30–60%.",
              },
              {
                blad: "Zbyt wiele poziomów approval dla rutynowych podróży",
                skutek: "Pracownik rezygnuje ze złożenia wniosku i rezerwuje poza systemem — firma traci widoczność kosztów.",
              },
              {
                blad: "Approval oddzielony od rezerwacji (najpierw zatwierdź, potem rezerwuj w innym miejscu)",
                skutek: "Pracownik zapomina zarezerwować po zatwierdzeniu lub rezerwuje droższą opcję niż we wniosku.",
              },
              {
                blad: "Brak powiadomień mobilnych dla zatwierdzającego",
                skutek: "Manager nieobecny nie wie, że wniosek czeka — opóźnienie zatwierdzenia gwarantowane.",
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

        {/* Powiązane */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Powiązane artykuły</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/artykuly/polityka-podrozy-sluzbowych-jak-napisac",
                label: "Travel Policy — jak napisać od zera?",
              },
              {
                href: "/artykuly/jak-obnizyc-koszty-podrozy-sluzbowych",
                label: "Jak obniżyć koszty podróży służbowych o 30%?",
              },
              {
                href: "/artykuly/narzedzia-zarzadzania-podrozami-concur-travelperk",
                label: "SAP Concur vs TravelPerk vs GetAbroad",
              },
              {
                href: "/artykuly/travel-manager-obowiazki-narzedzia",
                label: "Travel manager — obowiązki i narzędzia",
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
              itemType="https://schema.org/Question"
              className="border border-gray-200 rounded-xl p-5"
            >
              <h3 itemProp="name" className="font-semibold text-gray-900 mb-2">
                Co jeśli pracownik musi zarezerwować lot w trybie pilnym — przed zatwierdzeniem?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Dobra travel policy przewiduje tryb awaryjny: pracownik rezerwuje samodzielnie
                  (najlepiej przez TMC mimo braku zatwierdzenia) i jednocześnie informuje
                  managera. Zatwierdzenie następuje post-factum w ciągu 24h. Takie przypadki
                  powinny być raportowane oddzielnie — powtarzalny wzorzec "pilnych" podróży
                  sygnalizuje problem z planowaniem w departamencie.
                </p>
              </div>
            </div>

            <div
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="border border-gray-200 rounded-xl p-5"
            >
              <h3 itemProp="name" className="font-semibold text-gray-900 mb-2">
                Czy approval jest wymagany przy powrocie na ten sam dzień (day trip)?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Zależy od polityki firmy. Wiele firm stosuje uproszczony tryb dla day tripów
                  krajowych — wystarczy rejestracja w systemie bez formalnego zatwierdzenia.
                  Dla podróży zagranicznych nawet jednodniowe wyjazdy zwykle wymagają
                  zatwierdzenia ze względu na wyższy koszt i aspekty bezpieczeństwa (Duty of Care).
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-2xl px-8 py-8 text-center">
          <h2 className="text-xl font-bold mb-2">Masz sprawny approval — a co z odszkodowaniami?</h2>
          <p className="text-blue-200 mb-5 text-sm">
            Dobrze zaprojektowany proces podróży kończy się na rezerwacji. Ale gdy lot jest
            opóźniony, zaczyna się drugi proces — roszczenia EC 261. ClaimWinger przejmuje
            go za Twoich pracowników.
          </p>
          <Link
            href="https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=zatwierdzanie-podrozy-sluzbowych-approval"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Sprawdź ClaimWinger
          </Link>
        </div>
      </main>
    </>
  );
}
