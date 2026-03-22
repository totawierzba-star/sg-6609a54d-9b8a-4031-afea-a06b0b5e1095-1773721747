import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Briefcase, CheckCircle2, ArrowRight, Users, BarChart3 } from "lucide-react";

export default function TravelManagerObowiazki() {
  return (
    <>
      <SEO
        title="Travel manager w firmie — zakres obowiązków i narzędzia 2025"
        description="Travel manager zarządza budżetem lotów, negocjuje z liniami i pilnuje compliance. Sprawdź pełny zakres obowiązków, narzędzia TMC i jak rola zmienia się w małej vs dużej firmie."
        canonicalUrl="https://bizneslot.info/artykuly/travel-manager-obowiazki-narzedzia"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Travel manager w firmie — zakres obowiązków i narzędzia 2025",
            description:
              "Zakres obowiązków travel managera: travel policy, budzetowanie lotów, negocjacje z liniami, zarzadzanie zakłóceniami, ESG i narzędzia TMC.",
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
                name: "Czym zajmuje sie travel manager w firmie?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Travel manager zarzadza calosciq podrózy sluzbowych: tworzy i egzekwuje polityk podrózy, negocjuje umowy z liniami i hotelami, kontroluje budzet, wybiera narzedzia rezerwacyjne, reaguje na zaklocenia i raportuje spend do zarzadu.",
                },
              },
              {
                "@type": "Question",
                name: "Od ilu pracownikow firma potrzebuje travel managera?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dedykowany travel manager jest uzasadniony przy co najmniej 50-100 pracownikach regularnie podrozujacych lub budzecie lotów powyzej 500 000 PLN rocznie. Mniejsze firmy czesto lacza te role z obowiazkami asystenta zarzadu lub HR.",
                },
              },
              {
                "@type": "Question",
                name: "Jakie narzedzia uzywa travel manager?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kluczowe narzedzia to: platforma TMC (SAP Concur, TravelPerk, GetAbroad), system rezerwacji GDS (Amadeus, Sabre), narzedzia do raportowania wydatkow, komunikator alarmowy dla podrozujacych oraz system zarzadzania roszczeniami przy zakloceniach lotow.",
                },
              },
              {
                "@type": "Question",
                name: "Czy travel manager zajmuje sie odszkodowaniami EC 261?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Powinnien — ale w roli koordynatora, nie beneficjenta. Travel manager informuje pracownikow o prawach EC 261, zbiera dokumentacje (boarding pasy, potwierdzenia opoźnień) i moze wskazac zewnetrzny podmiot do dochodzenia roszczen. Samo odszkodowanie nalezy do pracownika jako pasazera.",
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
            Travel manager w firmie — zakres obowiązków i narzędzia 2025
          </h1>
          <p className="text-blue-100 text-lg">
            Kto kontroluje budżet lotów, negocjuje z liniami i pilnuje, żeby pracownicy wrócili
            z delegacji bez dodatkowych kosztów? Travel manager — rola, która w polskich firmach
            wciąż bywa niedoceniana.
          </p>
        </div>

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl px-6 py-5 mb-8">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-1">
            Krótka odpowiedź
          </p>
          <p className="text-gray-800 font-medium">
            Travel manager odpowiada za <strong>całość procesu podróży służbowych</strong>: od
            tworzenia polityki i wyboru narzędzi rezerwacyjnych, przez kontrolę budżetu i negocjacje
            z dostawcami, po zarządzanie zakłóceniami lotów i raportowanie ESG.
          </p>
        </div>

        {/* Zakres obowiązków */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Pełny zakres obowiązków travel managera</h2>
          <div className="space-y-4">

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-semibold text-gray-900 mb-2">1. Travel policy — tworzenie i egzekwowanie</p>
              <p className="text-gray-600 text-sm">
                Opracowanie i aktualizacja dokumentu regulującego zasady rezerwacji, klasy lotu,
                limity kosztów i procedury przy zakłóceniach. Pilnowanie compliance — monitorowanie,
                czy pracownicy rezerwują zgodnie z polityką, i reagowanie na odchylenia.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-semibold text-gray-900 mb-2">2. Negocjacje z liniami i dostawcami</p>
              <p className="text-gray-600 text-sm">
                Wynegocjowanie stawek korporacyjnych z liniami lotniczymi (corporate fares),
                programów lojalnościowych dla firm (Miles &amp; More for Business, TK Corporate
                Club), umów z hotelami i usługami transferowymi. Przy wolumenie powyżej 1 mln PLN
                rocznie negocjacje bezpośrednie z liniami dają realne oszczędności.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-semibold text-gray-900 mb-2">3. Wybór i zarządzanie narzędziami TMC</p>
              <p className="text-gray-600 text-sm">
                Selekcja platformy rezerwacyjnej (TMC — Travel Management Company lub SBT — Self
                Booking Tool), integracja z systemem finansowo-księgowym firmy, onboarding
                pracowników i monitorowanie adopcji narzędzia.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-semibold text-gray-900 mb-2">4. Budżetowanie i raportowanie</p>
              <p className="text-gray-600 text-sm">
                Planowanie rocznego budżetu podróży, podział na departamenty i projekty, miesięczne
                raportowanie odchyleń do CFO lub zarządu. Analiza spend per traveler, per route,
                per carrier — identyfikacja potencjałów optymalizacji.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-semibold text-gray-900 mb-2">5. Zarządzanie zakłóceniami lotów</p>
              <p className="text-gray-600 text-sm">
                Procedura przy opóźnieniach, odwołaniach i overbookingu: system powiadomień dla
                pracowników, koordynacja lotu zastępczego, dokumentowanie zdarzeń pod kątem
                roszczeń EC 261 i zwrotów od linii.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-semibold text-gray-900 mb-2">6. ESG i ślad węglowy</p>
              <p className="text-gray-600 text-sm">
                Kalkulacja emisji CO₂ z lotów służbowych (DEFRA, ICAO Carbon Emissions Calculator),
                raportowanie w ramach ESG/scope 3, wdrażanie alternatyw (kolej zamiast lotu na
                krótkich trasach, wideokonferencje jako substytut).
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-semibold text-gray-900 mb-2">7. Duty of Care — bezpieczeństwo podróżujących</p>
              <p className="text-gray-600 text-sm">
                Monitorowanie lokalizacji pracowników podczas podróży, system alertów przy
                zagrożeniach (strajki, warunki pogodowe, niepokoje polityczne), ubezpieczenia
                podróżne i procedury ewakuacyjne.
              </p>
            </div>

          </div>
        </section>

        {/* Narzędzia */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Kluczowe narzędzia travel managera</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Kategoria</th>
                  <th className="px-4 py-3 text-left">Narzędzia</th>
                  <th className="px-4 py-3 text-left">Dla kogo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  {
                    kat: "Platforma TMC / SBT",
                    narz: "SAP Concur, TravelPerk, GetAbroad, Navan",
                    dla: "Firmy 50+ pracowników",
                  },
                  {
                    kat: "GDS (rezerwacje)",
                    narz: "Amadeus, Sabre, Travelport",
                    dla: "Agencje TMC (pośrednio)",
                  },
                  {
                    kat: "Expense management",
                    narz: "Pleo, Spendesk, Ramp, moduł Concur",
                    dla: "Rozliczenia pracowników",
                  },
                  {
                    kat: "Raportowanie spend",
                    narz: "Power BI, moduły TMC, TripActions Analytics",
                    dla: "CFO / zarząd",
                  },
                  {
                    kat: "Duty of Care / tracking",
                    narz: "International SOS, Crisis24, TravelTracker",
                    dla: "HR / compliance",
                  },
                  {
                    kat: "Roszczenia EC 261",
                    narz: "ClaimWinger, AirHelp, FlightRight",
                    dla: "Pracownicy / HR",
                  },
                ].map((row) => (
                  <tr key={row.kat} className="even:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{row.kat}</td>
                    <td className="px-4 py-3 text-gray-700">{row.narz}</td>
                    <td className="px-4 py-3 text-gray-500">{row.dla}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Mała vs duża firma */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Travel manager w małej vs dużej firmie
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-blue-600" />
                <p className="font-semibold text-gray-900">Firma do 100 pracowników</p>
              </div>
              <ul className="text-sm text-gray-600 space-y-1.5 list-disc list-inside ml-1">
                <li>Rola łączona z HR lub asystentem zarządu</li>
                <li>Brak dedykowanej platformy TMC — najczęściej e-mail + karta firmowa</li>
                <li>Travel policy jako 1–2 strony w regulaminie</li>
                <li>Brak negocjacji z liniami — stawki publiczne</li>
                <li>Zakłócenia obsługiwane ad hoc przez pracownika</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <p className="font-semibold text-gray-900">Firma 500+ pracowników</p>
              </div>
              <ul className="text-sm text-gray-600 space-y-1.5 list-disc list-inside ml-1">
                <li>Dedykowany travel manager (czasem cały zespół)</li>
                <li>Platforma TMC zintegrowana z ERP</li>
                <li>Rozbudowana travel policy z approval flow</li>
                <li>Corporate fares, programme lojalnościowe dla firm</li>
                <li>Systematyczne odzyskiwanie odszkodowań EC 261</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EC 261 i rola travel managera */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Travel manager a odszkodowania EC 261 — co powinien zrobić?
          </h2>
          <p className="text-gray-700 mb-4">
            Wiele firm traci setki tysięcy złotych rocznie na niezrealizowanych roszczeniach
            EC 261 — pracownicy nie wiedzą o prawie do odszkodowania lub nie chcą zajmować się
            biurokratyą. Travel manager może to zmienić bez angażowania zasobów wewnętrznych:
          </p>
          <div className="space-y-3">
            {[
              "Dodaj do travel policy punkt informujący pracowników o prawach EC 261.",
              "Wskaż zewnętrzny podmiot (np. ClaimWinger) jako narzędzie do dochodzenia roszczeń — pracownik działa samodzielnie, bez angażowania HR.",
              "Zbieraj dokumentację zakłóceń: numer lotu, datę, godziny rzeczywiste vs planowane — te dane są potrzebne do roszczenia.",
              "Pamiętaj: odszkodowanie należy do pracownika jako pasażera. Nie możesz go przejąć ani nakazać zwrotu firmie.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <p className="text-gray-700 text-sm">{item}</p>
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
                href: "/artykuly/czy-pracodawca-moze-zatrzymac-odszkodowanie-za-lot",
                label: "Czy pracodawca może zatrzymać odszkodowanie EC 261?",
              },
              {
                href: "/artykuly/odszkodowanie-lot-sluzbowy-pracownik-czy-pracodawca",
                label: "Odszkodowanie za lot — pracownik czy pracodawca?",
              },
              {
                href: "/artykuly/bilet-sluzbowy-kupiony-przez-firme-kto-sklada-reklamacje",
                label: "Bilet firmowy — kto składa reklamację?",
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
                Ile zarabia travel manager w Polsce?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Według danych rynkowych z 2024–2025 roku: junior travel manager 6 000–9 000 PLN
                  brutto, mid-level 9 000–14 000 PLN, senior / head of travel 14 000–22 000 PLN.
                  W korporacjach z dużym wolumenem podróży stawki sięgają 25 000+ PLN. Rola często
                  łączy się z zakupami lub facility management.
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
                Czy travel manager musi mieć certyfikat?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Nie ma ustawowego wymogu. W branży cenione są certyfikaty GTP (Global Travel
                  Professional) wydawane przez GBTA (Global Business Travel Association) oraz
                  szkolenia IATA dla agentów podróży. Praktyczna znajomość GDS, platform TMC
                  i prawa pasażerskiego (EC 261) jest ważniejsza niż formalne certyfikaty.
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
                Jaka jest różnica między travel managerem a agencją TMC?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Travel manager to pracownik firmy odpowiedzialny za strategię i politykę podróży.
                  TMC (Travel Management Company) to zewnętrzna agencja obsługująca rezerwacje
                  i logistykę. Oba podmioty często współpracują — travel manager zarządza umową
                  z TMC i nadzoruje jej realizację.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-2xl px-8 py-8 text-center">
          <h2 className="text-xl font-bold mb-2">Zarządzasz podróżami służbowymi w firmie?</h2>
          <p className="text-blue-200 mb-5 text-sm">
            ClaimWinger może przejąć obsługę roszczeń EC 261 za Twoich pracowników — bez
            angażowania HR i bez dokumentacji po Twojej stronie. Pracownik składa wniosek
            samodzielnie, Ty masz spokój.
          </p>
          <Link
            href="https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=travel-manager-obowiazki-narzedzia"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Dowiedz się więcej o ClaimWinger
          </Link>
        </div>
      </main>
    </>
  );
}
