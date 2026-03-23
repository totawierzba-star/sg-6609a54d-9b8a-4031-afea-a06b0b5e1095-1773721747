import { SEO } from "@/components/SEO";
import Link from "next/link";
import { BarChart3, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export default function RaportowaniePodrozySluzbowych() {
  return (
    <>
      <SEO
        title="Raportowanie podróży służbowych — jakie dane mierzyć i jak to robić?"
        description="Jakie KPI mierzyć w podróżach służbowych? Koszt na podróż, compliance rate, średni czas rezerwacji i wskaźnik zakłóceń — kompletny przewodnik po raportowaniu travel spend."
        canonicalUrl="https://bizneslot.info/artykuly/raportowanie-podrozy-sluzbowych"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Raportowanie podróży służbowych — jakie dane mierzyć i jak to robić?",
            description:
              "Kompletny przewodnik po KPI podrozy sluzbowych: koszt per podróz, compliance rate, advance booking, wskaznik zaklócen i emisja CO2. Jak zbierac dane bez TMC.",
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
                name: "Jakie KPI mierzyc w raportowaniu podrozy sluzbowych?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kluczowe KPI: koszt podrozy na pracownika, compliance rate (odsetek rezerwacji zgodnych z polityka), sredni czas wyprzedzenia rezerwacji, odsetek lotow z zakloceniami, koszt per km trasy i emisja CO2 na delegacje. Minimum to pierwsze trzy — daja natychmiastowy wglad w optymalizacje.",
                },
              },
              {
                "@type": "Question",
                name: "Jak zbierac dane o podrozach sluzbowych bez platformy TMC?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bez TMC dane mozna zbierac z: wyciagów kart firmowych (koszt, data, dostawca), systemu zatwierdzania wydatkow (Pleo, Spendesk), faktur od linii lotniczych i agencji. Arkusz Excel z predefiniowanymi polami per wyjazd wystarczy na start — kluczowe jest konsekwentne zbieranie tych samych danych przy kazdej delegacji.",
                },
              },
              {
                "@type": "Question",
                name: "Co to jest compliance rate w podrozach sluzbowych?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Compliance rate to odsetek rezerwacji wykonanych zgodnie z obowiazujaca polityka podrozy — przez zatwierdzony kanal, z wymaganym wyprzedzeniem i w dozwolonej klasie. Firma z compliance rate ponizej 60% ma wiele niezatwierdzonych rezerwacji, ktore uniemozliwiaja kontrole kosztow.",
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
            <BarChart3 className="w-4 h-4" />
            <span>Zarządzanie podróżami służbowymi</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">
            Raportowanie podróży służbowych — jakie dane mierzyć i jak to robić?
          </h1>
          <p className="text-blue-100 text-lg">
            Firma, która nie mierzy kosztów delegacji, zarządza nimi na wyczucie. Sprawdź, które
            KPI dają realny wgląd w optymalizację — i jak zbudować raportowanie nawet bez
            zaawansowanego narzędzia TMC.
          </p>
        </div>

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl px-6 py-5 mb-8">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-1">
            Krótka odpowiedź
          </p>
          <p className="text-gray-800 font-medium">
            Minimum do skutecznego raportowania to pięć wskaźników: <strong>koszt na podróż</strong>,{" "}
            <strong>compliance rate</strong>, <strong>średni advance booking</strong>,{" "}
            <strong>wskaźnik zakłóceń</strong> i <strong>emisja CO₂</strong>. Bez pierwszych trzech
            niemożliwa jest żadna optymalizacja budżetu.
          </p>
        </div>

        {/* KPI */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Kluczowe KPI podróży służbowych — co mierzyć i dlaczego
          </h2>
          <div className="space-y-4">

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-xs font-bold shrink-0">K1</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Całkowity koszt podróży (Total Trip Cost)</p>
                  <p className="text-gray-600 text-sm mb-1">
                    Suma wszystkich wydatków na jedną delegację: bilet, hotel, transfer, posiłki,
                    inne. Mierzony per pracownik, per departament i per trasa.
                  </p>
                  <p className="text-xs text-blue-700 font-medium">
                    Dlaczego ważne: ujawnia, które departamenty lub trasy generują nieproporcjonalne
                    wydatki.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-xs font-bold shrink-0">K2</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Compliance rate (wskaźnik zgodności z polityką)</p>
                  <p className="text-gray-600 text-sm mb-1">
                    Odsetek rezerwacji wykonanych przez zatwierdzony kanał, z wymaganym
                    wyprzedzeniem i w dozwolonej klasie. Cel: minimum 80%.
                  </p>
                  <p className="text-xs text-blue-700 font-medium">
                    Dlaczego ważne: compliance rate poniżej 60% oznacza, że polityka istnieje
                    na papierze, ale nie jest egzekwowana.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-xs font-bold shrink-0">K3</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Średni advance booking (dni przed wylotem)</p>
                  <p className="text-gray-600 text-sm mb-1">
                    Średnia liczba dni między datą rezerwacji a datą lotu. Cel: powyżej 14 dni
                    dla 70%+ lotów. Wskaźnik poniżej 7 dni sygnalizuje problem procesowy
                    (późne zatwierdzenia, brak planowania).
                  </p>
                  <p className="text-xs text-blue-700 font-medium">
                    Dlaczego ważne: bezpośrednio przekłada się na cenę biletu — najłatwiejsza
                    dźwignia kosztowa.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-xs font-bold shrink-0">K4</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Wskaźnik zakłóceń i odzysk odszkodowań</p>
                  <p className="text-gray-600 text-sm mb-1">
                    Odsetek lotów z opóźnieniem 3h+, odwołaniami lub overbookingiem — oraz ile
                    z tych przypadków zaowocowało złożonym roszczeniem EC 261. Większość firm
                    ma ten wskaźnik odzysku bliski zeru.
                  </p>
                  <p className="text-xs text-blue-700 font-medium">
                    Dlaczego ważne: niezrealizowane roszczenia EC 261 to realne pieniądze
                    (250–600 EUR za zdarzenie), które można odzyskać bez kosztów po stronie firmy.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-xs font-bold shrink-0">K5</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Emisja CO₂ (scope 3)</p>
                  <p className="text-gray-600 text-sm mb-1">
                    Łączna emisja CO₂ z lotów służbowych, mierzona w tonach ekwiwalentu CO₂ per
                    pracownik i per km. Wymagana w raportowaniu ESG (ESRS E1) dla firm powyżej
                    progu UE.
                  </p>
                  <p className="text-xs text-blue-700 font-medium">
                    Dlaczego ważne: coraz częściej wymagane przez regulacje i inwestorów;
                    identyfikuje trasy o wysokiej emisji jako kandydatów do zastąpienia koleją
                    lub wideokonferencją.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-xs font-bold shrink-0">K6</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Koszt per km trasy (cost per km)</p>
                  <p className="text-gray-600 text-sm mb-1">
                    Pozwala porównywać wydajność kosztową różnych tras i linii. Lot WAW–FRA za
                    1 200 PLN (1 380 km) kosztuje 0,87 PLN/km. Ten sam dystans za 400 PLN to
                    0,29 PLN/km — trzykrotna różnica przy identycznym celu podróży.
                  </p>
                  <p className="text-xs text-blue-700 font-medium">
                    Dlaczego ważne: pomaga negocjować z liniami i identyfikować trasy
                    do optymalizacji.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Jak zbierać dane */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Jak zbierać dane — od arkusza do TMC
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Poziom dojrzałości</th>
                  <th className="px-4 py-3 text-left">Narzędzia</th>
                  <th className="px-4 py-3 text-left">Dostępne KPI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">Podstawowy<br /><span className="text-xs text-gray-500 font-normal">Firmy do 50 osób</span></td>
                  <td className="px-4 py-3 text-gray-700">Arkusz Excel, wyciągi kart, faktury</td>
                  <td className="px-4 py-3 text-gray-700">Koszt, trasa, data — ręcznie</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Średnio zaawansowany<br /><span className="text-xs text-gray-500 font-normal">50–200 osób</span></td>
                  <td className="px-4 py-3 text-gray-700">Pleo/Spendesk + import do Power BI</td>
                  <td className="px-4 py-3 text-gray-700">Koszt, compliance częściowo, trendy</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Zaawansowany<br /><span className="text-xs text-gray-500 font-normal">200+ osób</span></td>
                  <td className="px-4 py-3 text-gray-700">TMC (TravelPerk, Concur) + dashboard</td>
                  <td className="px-4 py-3 text-gray-700">Wszystkie KPI automatycznie, CO₂</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Raport miesięczny */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Jak powinien wyglądać miesięczny raport dla zarządu?
          </h2>
          <p className="text-gray-700 mb-4">
            Dobry raport miesięczny podróży służbowych mieści się na jednej stronie i odpowiada
            na trzy pytania: <em>ile wydaliśmy, czy zgodnie z polityką i gdzie są anomalie?</em>
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <p className="font-semibold text-gray-800 mb-3 text-sm">Struktura raportu (przykład):</p>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <span><strong>1. Wydatki ogółem</strong> — całkowity koszt podróży w miesiącu vs. budget vs. analogiczny miesiąc rok wcześniej</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <span><strong>2. Top 5 tras</strong> — najdroższe trasy i departamenty generujące największy spend</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <span><strong>3. Compliance rate</strong> — % rezerwacji zgodnych z polityką, trendy m/m</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <span><strong>4. Zakłócenia i roszczenia</strong> — ile opóźnień, ile roszczeń EC 261 złożono</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <span><strong>5. Rekomendacje</strong> — maksymalnie 2–3 działania na następny miesiąc</span>
              </div>
            </div>
          </div>
        </section>

        {/* Błędy */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Najczęstsze błędy w raportowaniu</h2>
          <div className="space-y-3">
            {[
              {
                blad: "Mierzenie tylko kosztów biletu, bez hotelu i transferu",
                skutek: "Obraz niepełny — bilet to zwykle 40–60% kosztu delegacji. Bez pozostałych pozycji compliance i benchmarking są niemożliwe.",
              },
              {
                blad: "Raportowanie raz na kwartał",
                skutek: "Anomalie wychodzą za późno — po 3 miesiącach trudno wyegzekwować zmianę zachowania. Raport miesięczny to minimum.",
              },
              {
                blad: "Brak danych o zakłóceniach i roszczeniach EC 261",
                skutek: "Firma nie wie, ile tracą pracownicy na niezrealizowanych roszczeniach — i nie może wdrożyć prostego rozwiązania.",
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
                href: "/artykuly/jak-obnizyc-koszty-podrozy-sluzbowych",
                label: "Jak obniżyć koszty podróży służbowych o 30%?",
              },
              {
                href: "/artykuly/polityka-podrozy-sluzbowych-jak-napisac",
                label: "Travel Policy — jak napisać od zera?",
              },
              {
                href: "/artykuly/travel-manager-obowiazki-narzedzia",
                label: "Travel manager — obowiązki i narzędzia",
              },
              {
                href: "/artykuly/narzedzia-zarzadzania-podrozami-concur-travelperk",
                label: "SAP Concur vs TravelPerk vs GetAbroad",
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
                Czy raportowanie podróży służbowych jest wymagane prawem?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Samo raportowanie wewnętrzne nie jest narzucone przez przepisy ogólne. Jednak
                  od 2024 roku dyrektywa CSRD zobowiązuje duże firmy i spółki giełdowe do
                  raportowania emisji scope 3 (w tym lotów służbowych) w ramach ESG. Dla
                  pozostałych firm raportowanie podróży to kwestia zarządzania, nie compliance.
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
                Jak wyliczyć emisję CO₂ z lotów firmowych?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Najprostsze metody to kalkulator ICAO Carbon Emissions Calculator (bezpłatny,
                  dostępny online) lub współczynniki DEFRA (stosowane w raportowaniu UK, często
                  używane globalnie). Platformy TMC (TravelPerk GreenPerk, Concur TripLink)
                  automatycznie kalkulują emisję przy każdej rezerwacji.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-2xl px-8 py-8 text-center">
          <div className="flex justify-center mb-3">
            <BarChart3 className="w-8 h-8 text-blue-300" />
          </div>
          <h2 className="text-xl font-bold mb-2">Dodaj zakłócenia lotów do swojego raportu travel</h2>
          <p className="text-blue-200 mb-5 text-sm">
            Wskaźnik odzysku odszkodowań EC 261 to KPI, którego większość firm nie mierzy —
            i przez to zostawia tysiące euro na stole. ClaimWinger może przejąć tę część
            bez angażowania działu HR.
          </p>
          <Link
            href="https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=raportowanie-podrozy-sluzbowych"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Sprawdź ClaimWinger
          </Link>
        </div>
      </main>
    </>
  );
}
