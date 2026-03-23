import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, XCircle, Briefcase, ArrowRight } from "lucide-react";

export default function NarzedziaZarzadzaniaPodrozami() {
  return (
    <>
      <SEO
        title="SAP Concur vs TravelPerk vs GetAbroad — porównanie narzędzi TMC 2025"
        description="Które narzędzie do zarządzania podróżami służbowymi wybrać? Porównanie SAP Concur, TravelPerk i GetAbroad pod kątem funkcji, ceny i dopasowania do polskich firm."
        canonicalUrl="https://bizneslot.info/artykuly/narzedzia-zarzadzania-podrozami-concur-travelperk"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "SAP Concur vs TravelPerk vs GetAbroad — porównanie narzędzi TMC 2025",
            description:
              "Szczegolowe porownanie platform do zarzadzania podrozami sluzbowymi: SAP Concur, TravelPerk i GetAbroad. Funkcje, ceny, integracje i dopasowanie do roznych wielkosci firm.",
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
                name: "Ktore narzedzie TMC jest najlepsze dla polskiej firmy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dla MŚP (do 200 pracownikow) najlepiej sprawdza sie TravelPerk lub GetAbroad — prostsze wdrozenie, nizsza cena, dobra obsluga europejskich tras. SAP Concur to wybor dla korporacji z rozbudowanymi integracjami ERP i globalnym zasiagiem.",
                },
              },
              {
                "@type": "Question",
                name: "Ile kosztuje SAP Concur dla firm?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SAP Concur dziala w modelu SaaS — cena zalezny od liczby uzytkownikow i modulow. Typowe koszty to 20–60 USD per user/miesiac plus oplaty transakcyjne. Dla malych firm jest to czesto nieproporcjonalnie drogie — lepszym wyborem jest TravelPerk lub GetAbroad.",
                },
              },
              {
                "@type": "Question",
                name: "Czy TravelPerk dziala w Polsce?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak. TravelPerk dziala w Polsce i obsluguje rezerwacje lotow z polskich lotnisk, hoteli i transportu. Platforma jest dostepna po angielsku i wspiera rozliczenia w PLN. Miedzy innymi obsługuje linie LOT i Ryanair.",
                },
              },
              {
                "@type": "Question",
                name: "Co to jest GetAbroad i czym rozni sie od TravelPerk?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GetAbroad to polska platforma TMC skierowana do MŚP. W odroznieniu od TravelPerk oferuje wsparcie po polsku, integracje z polskimi systemami ksiegowymi i lepsza znajomosc lokalnego rynku. TravelPerk ma szerszy zasiag miedzynarodowy i bardziej rozbudowane API.",
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
            SAP Concur vs TravelPerk vs GetAbroad — porównanie narzędzi TMC 2025
          </h1>
          <p className="text-blue-100 text-lg">
            Trzy najpopularniejsze platformy do zarządzania podróżami służbowymi pod lupą. Która
            pasuje do Twojej firmy — i czego żadna z nich nie zrobi za Ciebie przy opóźnionym locie?
          </p>
        </div>

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl px-6 py-5 mb-8">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-1">
            Krótka odpowiedź
          </p>
          <p className="text-gray-800 font-medium">
            <strong>SAP Concur</strong> — korporacje z ERP i globalnym zespołem. <strong>TravelPerk</strong> — firmy
            europejskie od 20 do kilkuset pracowników, szybkie wdrożenie. <strong>GetAbroad</strong> — polskie
            MŚP szukające wsparcia po polsku i integracji z krajowymi systemami księgowymi.
          </p>
        </div>

        {/* Tabela porównawcza */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Porównanie głównych funkcji</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Funkcja</th>
                  <th className="px-4 py-3 text-center">SAP Concur</th>
                  <th className="px-4 py-3 text-center">TravelPerk</th>
                  <th className="px-4 py-3 text-center">GetAbroad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-center">
                {[
                  { func: "Rezerwacja lotów", c: true, t: true, g: true },
                  { func: "Rezerwacja hoteli", c: true, t: true, g: true },
                  { func: "Wynajem samochodów", c: true, t: true, g: false },
                  { func: "Approval flow", c: true, t: true, g: true },
                  { func: "Expense management", c: true, t: true, g: false },
                  { func: "Integracja z SAP/Oracle ERP", c: true, t: false, g: false },
                  { func: "Integracja z polskim FK", c: false, t: false, g: true },
                  { func: "Wsparcie po polsku", c: false, t: false, g: true },
                  { func: "Ślad węglowy (CO₂)", c: true, t: true, g: false },
                  { func: "Duty of Care / tracking", c: true, t: true, g: false },
                  { func: "API / własne integracje", c: true, t: true, g: "częściowo" },
                  { func: "Mobile app", c: true, t: true, g: true },
                ].map((row) => (
                  <tr key={row.func} className="even:bg-gray-50">
                    <td className="px-4 py-3 text-left font-medium text-gray-800">{row.func}</td>
                    {[row.c, row.t, row.g].map((val, i) => (
                      <td key={i} className="px-4 py-3">
                        {val === true ? (
                          <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                        ) : val === false ? (
                          <XCircle className="w-4 h-4 text-gray-300 mx-auto" />
                        ) : (
                          <span className="text-xs text-gray-500">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Opisy platform */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Charakterystyka platform</h2>
          <div className="space-y-5">

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-bold text-gray-900 text-lg mb-1">SAP Concur</p>
              <p className="text-xs text-gray-500 mb-3">Lider rynku globalnego — dla dużych organizacji</p>
              <p className="text-gray-700 text-sm mb-3">
                Najbardziej rozbudowana platforma na rynku. Concur Travel obsługuje rezerwacje,
                Concur Expense — rozliczenia, Concur Invoice — faktury. Silna integracja z SAP ERP
                sprawia, że jest domyślnym wyborem dla dużych korporacji wdrożonych na SAP.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Plusy</p>
                  <ul className="text-gray-600 space-y-1 list-disc list-inside ml-1 text-xs">
                    <li>Pełna integracja z SAP/Oracle</li>
                    <li>Globalny zasięg i wsparcie 24/7</li>
                    <li>Najbardziej rozbudowane raportowanie</li>
                    <li>Sprawdzony w regulowanych branżach</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Minusy</p>
                  <ul className="text-gray-600 space-y-1 list-disc list-inside ml-1 text-xs">
                    <li>Wysokie koszty wdrożenia</li>
                    <li>Skomplikowany interfejs</li>
                    <li>Wolne aktualizacje produktu</li>
                    <li>Nieproporcjonalny dla MŚP</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-bold text-gray-900 text-lg">TravelPerk</p>
                <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full font-medium">Popularne w Polsce</span>
              </div>
              <p className="text-xs text-gray-500 mb-3">Nowoczesny SBT dla firm europejskich</p>
              <p className="text-gray-700 text-sm mb-3">
                Założony w Barcelonie w 2015 roku, TravelPerk zdobył szeroką popularność wśród
                europejskich firm technologicznych i usługowych. Intuicyjny interfejs, szybkie
                wdrożenie (tygodnie, nie miesiące) i solidna obsługa klienta w języku angielskim.
                FlexiPerk — opcja anulowania rezerwacji bez uzasadnienia za 10% dopłaty — jest
                unikalnym wyróżnikiem na rynku.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Plusy</p>
                  <ul className="text-gray-600 space-y-1 list-disc list-inside ml-1 text-xs">
                    <li>Szybkie wdrożenie</li>
                    <li>FlexiPerk — elastyczne anulowanie</li>
                    <li>Czytelny interfejs</li>
                    <li>GreenPerk — raportowanie CO₂</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Minusy</p>
                  <ul className="text-gray-600 space-y-1 list-disc list-inside ml-1 text-xs">
                    <li>Brak wsparcia po polsku</li>
                    <li>Brak integracji z polskim FK</li>
                    <li>Ograniczone opcje poza Europą</li>
                    <li>Expense management w osobnym module</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-bold text-gray-900 text-lg mb-1">GetAbroad</p>
              <p className="text-xs text-gray-500 mb-3">Polska platforma dla MŚP</p>
              <p className="text-gray-700 text-sm mb-3">
                Polska platforma TMC skierowana do małych i średnich firm. Wyróżnia się obsługą
                w języku polskim, znajomością lokalnego rynku i integracją z polskimi systemami
                finansowo-księgowymi. Dobry wybór dla firm, które nie potrzebują globalnego
                zasięgu, ale chcą mieć wsparcie po polsku i sprawną obsługę tras LOT/Wizz Air.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Plusy</p>
                  <ul className="text-gray-600 space-y-1 list-disc list-inside ml-1 text-xs">
                    <li>Wsparcie w języku polskim</li>
                    <li>Integracja z polskim FK</li>
                    <li>Znajomość rynku krajowego</li>
                    <li>Koszty dopasowane do MŚP</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Minusy</p>
                  <ul className="text-gray-600 space-y-1 list-disc list-inside ml-1 text-xs">
                    <li>Ograniczony zasięg poza Polską</li>
                    <li>Mniej funkcji niż globalne TMC</li>
                    <li>Mniejsza społeczność użytkowników</li>
                    <li>Brak modułu expense</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Cennik */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Modele cenowe</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Platforma</th>
                  <th className="px-4 py-3 text-left">Model</th>
                  <th className="px-4 py-3 text-left">Szacunkowy koszt</th>
                  <th className="px-4 py-3 text-left">Uwagi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">SAP Concur</td>
                  <td className="px-4 py-3">SaaS + transakcyjny</td>
                  <td className="px-4 py-3">20–60 USD/user/mies.</td>
                  <td className="px-4 py-3 text-gray-500">+ opłaty za wdrożenie</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">TravelPerk</td>
                  <td className="px-4 py-3">Bezpłatny + opł. transakcyjna</td>
                  <td className="px-4 py-3">0 PLN/mies. + ~5% od rezerwacji</td>
                  <td className="px-4 py-3 text-gray-500">Plan Premium od ok. 99 EUR/mies.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">GetAbroad</td>
                  <td className="px-4 py-3">Abonament / per transakcja</td>
                  <td className="px-4 py-3">Wycena indywidualna</td>
                  <td className="px-4 py-3 text-gray-500">Dostosowany do firmy</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Ceny orientacyjne na 2025 rok. Szczegółowe wyceny zależą od wolumenu rezerwacji i funkcji.
          </p>
        </section>

        {/* Czego TMC nie zrobi */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Czego żadne narzędzie TMC nie zrobi za pracownika
          </h2>
          <p className="text-gray-700 mb-4">
            Platformy TMC ułatwiają rezerwację i kontrolę kosztów, ale przy zakłóceniu lotu ich
            rola się kończy. Żaden z trzech systemów nie złoży za pracownika roszczenia EC 261,
            nie wyegzekwuje zwrotu 600 EUR od linii ani nie poprowadzi sprawy do ULC lub sądu.
          </p>
          <p className="text-gray-700">
            To obszar, w którym travel manager powinien wskazać pracownikom oddzielne narzędzie —
            np. zewnętrzny podmiot specjalizujący się w dochodzeniu odszkodowań lotniczych.
          </p>
        </section>

        {/* Powiązane */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Powiązane artykuły</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/artykuly/travel-manager-obowiazki-narzedzia",
                label: "Travel manager — zakres obowiązków i narzędzia",
              },
              {
                href: "/artykuly/polityka-podrozy-sluzbowych-jak-napisac",
                label: "Travel Policy — jak napisać od zera?",
              },
              {
                href: "/artykuly/odszkodowanie-lot-sluzbowy-pracownik-czy-pracodawca",
                label: "Odszkodowanie za lot — pracownik czy pracodawca?",
              },
              {
                href: "/artykuly/przedawnienie-roszczenia-ec261-pracownik",
                label: "Przedawnienie roszczenia EC 261",
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
                Czy warto wdrażać TMC przy mniej niż 50 pracownikach?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Przy mniejszych firmach zwrot z wdrożenia TMC bywa marginalny. TravelPerk ma plan
                  bezpłatny (płacisz tylko prowizję od rezerwacji), więc dla 10–50 pracowników
                  może się opłacać już od pierwszych lotów — daje widoczność kosztów i approval
                  flow bez stałej opłaty abonamentowej.
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
                Czy TMC pomaga odzyskać odszkodowanie za opóźniony lot?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Platformy TMC dokumentują rezerwacje i mogą eksportować dane lotu (pomocne przy
                  reklamacji), ale żadna z nich nie prowadzi procesu dochodzenia odszkodowania
                  EC 261. Do tego potrzebny jest odrębny podmiot wyspecjalizowany w roszczeniach
                  lotniczych.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-2xl px-8 py-8 text-center">
          <h2 className="text-xl font-bold mb-2">TMC zarezerwuje lot — kto odzyska odszkodowanie?</h2>
          <p className="text-blue-200 mb-5 text-sm">
            Żadna platforma TMC nie złoży wniosku EC 261 za Twojego pracownika. ClaimWinger
            wypełnia tę lukę — pracownik zgłasza lot, reszta dzieje się bez angażowania firmy.
          </p>
          <Link
            href="https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=narzedzia-zarzadzania-podrozami-concur-travelperk"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Sprawdź ClaimWinger
          </Link>
        </div>
      </main>
    </>
  );
}
