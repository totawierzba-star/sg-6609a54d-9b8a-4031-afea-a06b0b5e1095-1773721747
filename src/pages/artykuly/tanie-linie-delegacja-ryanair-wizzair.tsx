import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, CheckCircle, AlertTriangle, ChevronDown, ChevronUp, DollarSign } from "lucide-react";
import { useState } from "react";

export default function TanieLinieeDelegacja() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Tanie linie lotnicze na delegację — Ryanair i Wizz Air w podróży służbowej | BiznesLot.info"
        description="Kiedy Ryanair lub Wizz Air opłacają się na delegację? Bagaż, punktualność, EC 261, rozliczenie VAT i polityka kosztowa firmy — przewodnik dla pracowników i działów HR."
        canonicalUrl="https://bizneslot.info/artykuly/tanie-linie-delegacja-ryanair-wizzair"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "Tanie linie lotnicze na delegację — Ryanair i Wizz Air w podróży służbowej",
                description:
                  "Kiedy Ryanair lub Wizz Air opłacają się na delegację? Bagaż, punktualność, EC 261, rozliczenie VAT i polityka kosztowa firmy.",
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
                    name: "Czy Ryanair honoruje EC 261/2004 przy opóźnieniach?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Tak — Ryanair jest przewoźnikiem UE (rejestracja w Irlandii) i musi stosować EC 261/2004 na wszystkich swoich lotach. Odszkodowanie za opóźnienie powyżej 3 godzin wynosi 250–600 EUR zależnie od dystansu. Ryanair znany jest jednak z odrzucania wniosków — warto korzystać z pośrednika.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Czy Wizz Air wypłaca odszkodowania za opóźnione loty?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Wizz Air jest zarejestrowany na Węgrzech (UE), więc EC 261/2004 obowiązuje. Odszkodowania: 250 EUR (do 1 500 km), 400 EUR (1 500–3 500 km), 600 EUR (ponad 3 500 km). Wizz Air ma wysoki odsetek odrzucanych wniosków bezpośrednich — skuteczność przez pośrednika jest znacznie wyższa.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Jak rozliczyć bilet Ryanair jako koszt delegacji?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Bilet Ryanair można zaliczyć do KUP firmy jak każdy bilet lotniczy — potrzebny jest potwierdzony itinerary z ceną i danymi pasażera. Ryanair wystawia faktury VAT (stawka 0% VAT dla lotów) przez swój portal, jednak faktura jest dostępna tylko w ciągu 5 dni od rezerwacji — warto pobrać ją od razu.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Czy firmowa polityka podróżna może zakazać latania tanimi liniami?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Tak — wiele firm wpisuje do travel policy wymóg lotów z bagażem rejestrowanym lub ogranicza listę akceptowanych przewoźników. Jeśli polityka milczy, pracownik może wybrać tańszy przewoźnik, ale ponosi ryzyko: opóźnienie może oznaczać utratę spotkania biznesowego, a firma nie zawsze zwraca wynikające stąd koszty.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Kiedy tanie linie rzeczywiście wychodzą taniej na delegację?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Na trasach do 2 godzin lotu, gdy: (1) bilet z bagażem kabinowym jest tańszy o co najmniej 30% od full-service, (2) lotnisko docelowe jest bliskie centrum (np. Kraków, Gdańsk, Wrocław), (3) delegacja nie wymaga krawata i prestiżowej klasy, (4) firma zwraca koszty per bilet, a nie ryczałtowo. Na trasach z przesiadką lub z bagażem — różnica się zaciera.",
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
        <section className="bg-gradient-to-br from-orange-600 via-orange-700 to-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-orange-200 text-sm mb-4">
              <Plane className="w-4 h-4" />
              <Link href="/artykuly" className="hover:text-white transition-colors">
                Artykuły
              </Link>
              <span>/</span>
              <span>Recenzje linii lotniczych</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Tanie linie lotnicze na delegację — Ryanair i Wizz Air w podróży służbowej
            </h1>
            <p className="text-xl text-orange-100 mb-6">
              Kiedy niska cena biletu przekłada się na realne oszczędności, a kiedy ukryte koszty i ryzyko opóźnienia
              czynią LCC złym wyborem dla pracownika w trasie?
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-orange-200">
              <span>Czas czytania: 8 min</span>
              <span>Aktualizacja: marzec 2026</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          {/* Direct Answer Box */}
          <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-orange-900 mb-3">Krótka odpowiedź</h2>
            <p className="text-orange-800">
              Ryanair i Wizz Air opłacają się na delegację na krótkich trasach (do 2 h) bez bagażu rejestrowanego, gdy
              firma nie ma travel policy ograniczającej przewoźników. Poza tymi warunkami różnica w cenie często znika
              po doliczeniu opłat za bagaż, dojazd do odległego lotniska i ryzyko kosztów wynikających z opóźnienia.
              Oba przewoźniki są objęte EC 261/2004 — odszkodowanie należy się tak samo jak od LOT czy Lufthansy.
            </p>
          </div>

          {/* Tanie linie vs full-service — kluczowe różnice */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              LCC vs full-service — czym różni się doświadczenie na delegacji
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  header: "Co oferuje full-service (LOT, Lufthansa, Austrian)",
                  color: "blue",
                  items: [
                    "Bagaż rejestrowany w cenie biletu (zwykle 23 kg)",
                    "Zmiana i zwrot biletu (Business Flex)",
                    "Lounge dostęp przy klasie biznes lub statusie",
                    "Posiłek / przekąska w cenie biletu",
                    "Zarządzanie rezerwacją przez TMC / GDS",
                    "Programy korporacyjne (Lufthansa Business Rewards, LOT for Business)",
                  ],
                },
                {
                  header: "Co oferuje LCC (Ryanair, Wizz Air)",
                  color: "orange",
                  items: [
                    "Niższa cena biletu bazowego (zwykle kilkadziesiąt PLN taniej)",
                    "Bagaż podręczny (40×20×25 cm) gratis — bagaż kabinowy (+opłata)",
                    "Zmiana biletu płatna, zwrot tylko w kwocie podatków",
                    "Brak loungu, brak posiłku w cenie",
                    "Ograniczona integracja z systemami rezerwacyjnymi TMC",
                    "Loty często z lotnisk satelitarnych (Modlin, Bergamo, Hahn)",
                  ],
                },
              ].map((col) => (
                <div
                  key={col.header}
                  className={`bg-white border border-${col.color}-200 rounded-xl p-5`}
                >
                  <h3 className={`font-bold text-${col.color}-700 mb-3`}>{col.header}</h3>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className={`text-${col.color}-500 mt-0.5 flex-shrink-0`}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Kalkulacja: ile naprawdę kosztuje lot LCC */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Ile naprawdę kosztuje lot LCC na delegację?
            </h2>
            <p className="text-gray-600 mb-6">
              Przykład: Warszawa Modlin (WMI) → Londyn Stansted (STN) vs Warszawa Chopin (WAW) → Londyn Heathrow (LHR)
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-3 text-left">Składnik kosztu</th>
                    <th className="p-3 text-center">Ryanair (WMI→STN)</th>
                    <th className="p-3 text-center">LOT (WAW→LHR)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Bilet (przykład, 1 os.)", "od 199 PLN", "od 699 PLN"],
                    ["Bagaż kabinowy (duży)", "+80 PLN", "w cenie"],
                    ["Dojazd do lotniska (taxi/pociąg)", "+80 PLN (Modlin)", "+30 PLN (Chopin)"],
                    ["Dojazd z lotniska do centrum Londynu", "+120 PLN (Stansted → City)", "+60 PLN (Heathrow → City)"],
                    ["Zmiana biletu (jeśli spotkanie przesunięte)", "+200–400 PLN", "+0–250 PLN (Flex)"],
                    ["Razem (bez zmiany)", "≈ 479 PLN", "≈ 789 PLN"],
                    ["Razem (z jedną zmianą)", "≈ 679–879 PLN", "≈ 789–1 039 PLN"],
                  ].map(([label, lcc, fs], i) => (
                    <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 text-gray-700 font-medium">{label}</td>
                      <td className="p-3 text-center text-orange-700">{lcc}</td>
                      <td className="p-3 text-center text-blue-700">{fs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              * Ceny poglądowe — różnią się w zależności od daty, dostępności i indywidualnej rezerwacji. Przy krótkich
              trasach krajowych (WAW→GDN, WAW→WRO) LCC ma mniejszą przewagę logistyczną, bo oba lotniska są
              podobnie odległe od centrum.
            </p>
          </section>

          {/* Punktualność i ryzyko opóźnienia */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Punktualność LCC — co mówią dane i co to znaczy dla delegacji
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  linia: "Ryanair",
                  otp: "~88%",
                  opis: "On-Time Performance (OTP) w 2024 r. wg FlightAware. Wysoki wynik jak na LCC — Ryanair aktywnie zarządza turnaround.",
                  color: "orange",
                },
                {
                  linia: "Wizz Air",
                  otp: "~74%",
                  opis: "Jeden z niższych OTP wśród europejskich LCC. Częste opóźnienia powyżej 3 h zwłaszcza na trasach wschodnioeuropejskich.",
                  color: "red",
                },
                {
                  linia: "LOT / Lufthansa",
                  otp: "~82–85%",
                  opis: "Porównywalny lub niższy OTP niż Ryanair w szczycie sezonu — przy połączeniach korporacyjnych licz się z opóźnieniami u każdego.",
                  color: "blue",
                },
              ].map((item) => (
                <div key={item.linia} className={`bg-white border border-${item.color}-200 rounded-xl p-5`}>
                  <div className={`text-3xl font-bold text-${item.color}-600 mb-1`}>{item.otp}</div>
                  <div className="font-bold text-gray-900 mb-2">{item.linia}</div>
                  <p className="text-sm text-gray-600">{item.opis}</p>
                </div>
              ))}
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-yellow-800 mb-1">Delegacja z napiętym harmonogramem</p>
                  <p className="text-sm text-yellow-700">
                    Jeśli opóźnienie lotu o 4 godziny oznacza utratę kluczowego spotkania lub dodatkową noc w hotelu —
                    licz koszt ryzyka. Poniżej orientacyjna kalkulacja: hotel w Londynie (1 noc) 600–900 PLN + utracony
                    czas pracy (8 h × stawka). Przy bilecie tańszym o 300 PLN ten risk cost anuluje oszczędność.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* EC 261 przy LCC */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              EC 261/2004 a tanie linie — co Ci się należy
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-3 text-left">Sytuacja</th>
                    <th className="p-3 text-center">Ryanair</th>
                    <th className="p-3 text-center">Wizz Air</th>
                    <th className="p-3 text-center">Kwota (EUR)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Opóźnienie 3+ h, trasa ≤ 1 500 km", "✓", "✓", "250"],
                    ["Opóźnienie 3+ h, trasa 1 500–3 500 km", "✓", "✓", "400"],
                    ["Opóźnienie 3+ h, trasa > 3 500 km (UE)", "✓", "✓", "600"],
                    ["Odwołanie lotu (< 14 dni wcześniej)", "✓", "✓", "250–600"],
                    ["Odmowa przyjęcia na pokład (overbooking)", "✓", "✓", "250–600"],
                    ["Opieka: posiłek, napój przy opóźnieniu 2+ h", "✓ (obowiązek)", "✓ (obowiązek)", "—"],
                    ["Loty pozaunijne (np. MAR, TUN)", "tylko loty z UE", "tylko loty z UE", "—"],
                  ].map(([sytuacja, ry, wz, kwota], i) => (
                    <tr key={sytuacja as string} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 text-gray-700">{sytuacja}</td>
                      <td className="p-3 text-center text-green-700 font-medium">{ry}</td>
                      <td className="p-3 text-center text-green-700 font-medium">{wz}</td>
                      <td className="p-3 text-center font-bold text-blue-700">{kwota}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="font-semibold text-blue-800 mb-1">Skuteczność windykacji</p>
              <p className="text-sm text-blue-700">
                Ryanair i Wizz Air odrzucają większość wniosków złożonych bezpośrednio — powołują się na
                &ldquo;nadzwyczajne okoliczności&rdquo; lub ignorują termin 14 dni. Dane branżowe wskazują, że
                skuteczność wniosków przez pośrednika (np. ClaimWinger) jest kilkukrotnie wyższa niż wniosków
                własnych, szczególnie przy Wizz Air.
              </p>
            </div>
          </section>

          {/* Bagaż i polityka korporacyjna */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bagaż i polityka kosztowa firmy — co sprawdzić przed rezerwacją
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-orange-500" />
                  Opłaty bagażowe Ryanair (2026)
                </h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-2 text-left text-gray-600">Bagaż</th>
                      <th className="p-2 text-right text-gray-600">Opłata</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Mały bagaż podręczny (40×20×25 cm)", "gratis"],
                      ["Duży bagaż kabinowy (55×40×20 cm)", "od 8–25 EUR"],
                      ["Bagaż rejestrowany 20 kg", "od 14–35 EUR"],
                      ["Bagaż rejestrowany 10 kg", "od 8–20 EUR"],
                    ].map(([typ, cena]) => (
                      <tr key={typ} className="border-t border-gray-100">
                        <td className="p-2 text-gray-700">{typ}</td>
                        <td className="p-2 text-right font-medium text-orange-700">{cena}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-purple-500" />
                  Opłaty bagażowe Wizz Air (2026)
                </h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-2 text-left text-gray-600">Bagaż</th>
                      <th className="p-2 text-right text-gray-600">Opłata</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Mały bagaż podręczny (40×30×20 cm)", "gratis"],
                      ["Duży bagaż kabinowy (55×40×23 cm)", "od 10–30 EUR"],
                      ["Bagaż rejestrowany 20 kg", "od 15–40 EUR"],
                      ["Bagaż rejestrowany 10 kg", "od 9–22 EUR"],
                    ].map(([typ, cena]) => (
                      <tr key={typ} className="border-t border-gray-100">
                        <td className="p-2 text-gray-700">{typ}</td>
                        <td className="p-2 text-right font-medium text-purple-700">{cena}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3">Travel policy — co może ograniczać wybór LCC</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: AlertTriangle,
                    color: "red",
                    title: "Typowe ograniczenia w firmowych travel policies",
                    items: [
                      "Obowiązek bagażu rejestrowanego (wyklucza tanie taryfy)",
                      "Lista zatwierdzonych przewoźników (whitelist)",
                      "Rezerwacja tylko przez TMC / korporacyjne OBT",
                      "Minimalny czas na przesiadkę (np. 2 h — LCC nie oferuje)",
                      "Wymagane ubezpieczenie lotu (LCC zwykle nie wlicza)",
                    ],
                  },
                  {
                    icon: CheckCircle,
                    color: "green",
                    title: "Kiedy travel policy dopuszcza LCC",
                    items: [
                      "Polityka oparta na maksymalnym koszcie biletu (np. ≤ 500 PLN)",
                      "Trasy krajowe lub bliskie zagraniczne (< 2 h)",
                      "Brak wymogu konkretnego portu lotniczego",
                      "Brak spotkania o ściśle określonej godzinie",
                      "Pracownik nie musi wracać tego samego dnia",
                    ],
                  },
                ].map((col) => (
                  <div key={col.title}>
                    <div className={`flex items-center gap-2 font-semibold text-${col.color}-700 mb-2`}>
                      <col.icon className="w-4 h-4" />
                      {col.title}
                    </div>
                    <ul className="space-y-1">
                      {col.items.map((item) => (
                        <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className={`text-${col.color}-500 mt-0.5`}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Faktura VAT i rozliczenie */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Faktura VAT i rozliczenie biletu LCC jako koszt delegacji
            </h2>
            <div className="space-y-4">
              {[
                {
                  linia: "Ryanair",
                  faktura: "Faktura VAT dostępna w portalu myRyanair — WAŻNE: pobrać w ciągu 5 dni od zakupu",
                  vat: "0% VAT na usługi transportu lotniczego (art. 83 ust. 1 pkt 13 ustawy o VAT)",
                  kup: "Zaliczenie do KUP: potrzebny wydruk potwierdzenia + boarding pass lub e-mail z itinerary",
                  color: "orange",
                },
                {
                  linia: "Wizz Air",
                  faktura: "Faktura VAT dostępna przez Wizz Account po locie (do 3 miesięcy)",
                  vat: "0% VAT na loty w UE — przy lotach do krajów non-UE sprawdź przepisy lokalne",
                  kup: "Zaliczenie do KUP: potwierdzenie rezerwacji z ceną, imię i nazwisko pasażera",
                  color: "purple",
                },
              ].map((item) => (
                <div key={item.linia} className={`bg-white border border-${item.color}-200 rounded-xl p-5`}>
                  <h3 className={`font-bold text-${item.color}-700 mb-3`}>{item.linia}</h3>
                  <dl className="space-y-2 text-sm">
                    {[
                      ["Faktura", item.faktura],
                      ["VAT", item.vat],
                      ["KUP", item.kup],
                    ].map(([label, val]) => (
                      <div key={label} className="flex gap-2">
                        <dt className="font-medium text-gray-500 w-16 flex-shrink-0">{label}:</dt>
                        <dd className="text-gray-700">{val}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </section>

          {/* Matryca decyzyjna */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Kiedy wybrać LCC, a kiedy full-service na delegację?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-3 text-left">Scenariusz delegacji</th>
                    <th className="p-3 text-center">LCC (Ryanair / Wizz)</th>
                    <th className="p-3 text-center">Full-service (LOT / LH)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Krótka trasa (≤ 2 h), 1 dzień, bagaż kabinowy",
                      "✓ Dobry wybór",
                      "Droższy, nadmiarowy",
                    ],
                    [
                      "Spotkanie o konkretnej godzinie, nie można spóźnić się",
                      "Ryzykowne",
                      "✓ Większa niezawodność",
                    ],
                    [
                      "Bilet Flex / możliwość zmiany w ostatniej chwili",
                      "Kosztowne / niemożliwe",
                      "✓ Dostępne taryfy Flex",
                    ],
                    [
                      "Bagaż rejestrowany (np. materiały, próbki)",
                      "Dopłata — różnica maleje",
                      "✓ W cenie biletu",
                    ],
                    [
                      "Trasa z przesiadką lub połączenie interliniowe",
                      "Brak — osobne bilety = ryzyko",
                      "✓ Ochrona przy przesiadce",
                    ],
                    [
                      "Delegacja reprezentacyjna (klient, konferencja)",
                      "Brak loungu, klasy biznes",
                      "✓ Pełny standard",
                    ],
                    [
                      "Cel: oszczędność kosztów, trasa niewymagająca",
                      "✓ Najniższy koszt bazowy",
                      "Wyższy koszt",
                    ],
                  ].map(([scenariusz, lcc, fs], i) => (
                    <tr key={scenariusz as string} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 text-gray-700 font-medium">{scenariusz}</td>
                      <td className="p-3 text-center text-sm">{lcc}</td>
                      <td className="p-3 text-center text-sm">{fs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Najczęstsze pytania</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Czy Ryanair honoruje EC 261/2004 przy opóźnieniach?",
                  a: "Tak — Ryanair jest przewoźnikiem UE (rejestracja w Irlandii) i musi stosować EC 261/2004 na wszystkich swoich lotach. Odszkodowanie za opóźnienie powyżej 3 godzin wynosi 250–600 EUR zależnie od dystansu. Ryanair znany jest jednak z odrzucania wniosków — warto korzystać z pośrednika.",
                },
                {
                  q: "Czy Wizz Air wypłaca odszkodowania za opóźnione loty?",
                  a: "Wizz Air jest zarejestrowany na Węgrzech (UE), więc EC 261/2004 obowiązuje. Odszkodowania: 250 EUR (do 1 500 km), 400 EUR (1 500–3 500 km), 600 EUR (ponad 3 500 km). Wizz Air ma wysoki odsetek odrzucanych wniosków bezpośrednich — skuteczność przez pośrednika jest znacznie wyższa.",
                },
                {
                  q: "Jak rozliczyć bilet Ryanair jako koszt delegacji?",
                  a: "Bilet Ryanair można zaliczyć do KUP firmy jak każdy bilet lotniczy — potrzebny jest potwierdzony itinerary z ceną i danymi pasażera. Ryanair wystawia faktury VAT przez swój portal, jednak faktura jest dostępna tylko w ciągu 5 dni od rezerwacji — warto pobrać ją od razu.",
                },
                {
                  q: "Czy firmowa polityka podróżna może zakazać latania tanimi liniami?",
                  a: "Tak — wiele firm wpisuje do travel policy wymóg lotów z bagażem rejestrowanym lub ogranicza listę akceptowanych przewoźników. Jeśli polityka milczy, pracownik może wybrać tańszy przewoźnik, ale ponosi ryzyko: opóźnienie może oznaczać utratę spotkania biznesowego, a firma nie zawsze zwraca wynikające stąd koszty.",
                },
                {
                  q: "Kiedy tanie linie rzeczywiście wychodzą taniej na delegację?",
                  a: "Na trasach do 2 godzin lotu, gdy: bilet z bagażem kabinowym jest tańszy o co najmniej 30% od full-service, lotnisko docelowe jest bliskie centrum, delegacja nie wymaga prestiżowej klasy, firma zwraca koszty per bilet, a nie ryczałtowo. Na trasach z przesiadką lub z bagażem — różnica się zaciera.",
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
                  title: "Lufthansa vs LOT — którą linię wybrać na delegację?",
                  slug: "lufthansa-vs-lot-delegacja",
                },
                {
                  title: "LOT Polish Airlines klasa biznes — recenzja",
                  slug: "lot-polish-airlines-recenzja-klasa-biznes",
                },
                {
                  title: "Opóźnienie lotu a spotkanie biznesowe — koszty konsekwencji",
                  slug: "opoznienie-lotu-spotkanie-biznesowe",
                },
                {
                  title: "Bilet lotniczy jako koszt uzyskania przychodu",
                  slug: "bilet-lotniczy-koszt-uzyskania-przychodu",
                },
              ].map((art) => (
                <Link
                  key={art.slug}
                  href={`/artykuly/${art.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-orange-300 hover:shadow-sm transition-all group"
                >
                  <span className="text-sm font-medium text-gray-800 group-hover:text-orange-700 transition-colors">
                    {art.title} →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA ClaimWinger */}
          <section className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-8 text-center">
            <Plane className="w-10 h-10 text-orange-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ryanair lub Wizz Air opóźnił albo odwołał Twój lot?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              EC 261/2004 obowiązuje obu przewoźników — masz prawo do 250–600 EUR odszkodowania. ClaimWinger
              weryfikuje roszczenie bezpłatnie i przejmuje cały proces, łącznie z ewentualnym sporem sądowym.
            </p>
            <a
              href={`https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=tanie-linie-delegacja-ryanair-wizzair`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
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
