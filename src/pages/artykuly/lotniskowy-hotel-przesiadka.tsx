import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Hotel, Clock, CheckCircle, AlertTriangle, ArrowRight, Calculator, MapPin, Moon } from "lucide-react";

export default function LotniskowyHotelPrzesiadka() {
  return (
    <>
      <SEO
        title="Lotniskowy hotel na przesiadkę — kiedy warto rezerwować? | bizneslot.info"
        description="Kiedy przesiadka wymaga noclegu w hotelu lotniskowym? Kalkulacja progu opłacalności, porównanie opcji — hotel airside vs landside, capsule hotel — i jak rozliczyć koszt w delegacji."
        canonicalUrl="https://bizneslot.info/artykuly/lotniskowy-hotel-przesiadka"
        ogType="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Lotniskowy hotel na przesiadkę — kiedy warto rezerwować?",
          description: "Kiedy przesiadka wymaga noclegu w hotelu lotniskowym? Kalkulacja progu opłacalności, porównanie opcji i rozliczenie w delegacji.",
          datePublished: "2026-03-22",
          author: { "@type": "Organization", name: "bizneslot.info" },
          publisher: { "@type": "Organization", name: "bizneslot.info" }
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <Hotel className="w-4 h-4" />
            <span>Lotniska</span>
            <span className="mx-2">·</span>
            <Clock className="w-4 h-4" />
            <span>7 min czytania</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Lotniskowy hotel na przesiadkę — kiedy warto rezerwować?
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Długa przesiadka w obcym porcie: iść do hotelu czy zostać w saloniku?
            Kalkulacja progu opłacalności, rodzaje hoteli lotniskowych i jak
            ująć nocleg przesiadkowy w rozliczeniu delegacji.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg mb-10">
          <h2 className="text-lg font-bold text-green-900 mb-2">Krótka odpowiedź</h2>
          <p className="text-green-800">
            Hotel lotniskowy przy przesiadce jest uzasadniony, gdy przerwa między lotami wynosi
            co najmniej <strong>6–8 godzin w nocy</strong> lub <strong>ponad 10 godzin w ciągu dnia</strong>.
            Poniżej tego progu tańsza i bardziej praktyczna jest opcja lounge + fotel
            (lub capsule hotel, tam gdzie jest dostępny). Koszt hotelu lotniskowego
            jest kosztem podróży służbowej podlegającym zwrotowi.
          </p>
        </div>

        {/* Rodzaje hoteli */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Rodzaje hoteli przy lotniskach</h2>
          <p className="text-slate-700 mb-6">
            Zanim zdecydujesz, co rezerwować, zrozum różnicę — bo w strefie airside
            i landside rządzą inne zasady i ceny.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Typ hotelu</th>
                  <th className="p-3 text-left">Lokalizacja</th>
                  <th className="p-3 text-left">Przejście przez kontrolę</th>
                  <th className="p-3 text-left">Typowa cena (WAW)</th>
                  <th className="p-3 text-left">Dla kogo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3 font-semibold">Airside hotel</td>
                  <td className="p-3">Za strefą bezpieczeństwa</td>
                  <td className="p-3 text-green-700 font-medium">Nie trzeba</td>
                  <td className="p-3">250–500 PLN</td>
                  <td className="p-3">Krótkie przesiadki, wyloty 5–6 rano</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-semibold">Landside hotel (connected)</td>
                  <td className="p-3">Terminal / parking, łącznik</td>
                  <td className="p-3 text-orange-700 font-medium">Tak, przy wylocie</td>
                  <td className="p-3">180–350 PLN</td>
                  <td className="p-3">Nocleg &gt;6h, powrót do strefy rano</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3 font-semibold">Hotel przy lotnisku (shuttle)</td>
                  <td className="p-3">Okolica lotniska, transfer</td>
                  <td className="p-3 text-orange-700 font-medium">Tak + transfer ~15 min</td>
                  <td className="p-3">120–250 PLN</td>
                  <td className="p-3">Nocleg &gt;8h, wylot nie za wczesny</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-semibold">Capsule hotel / sleep pod</td>
                  <td className="p-3">W terminalu (wybrane lotniska)</td>
                  <td className="p-3 text-green-700 font-medium">Nie trzeba</td>
                  <td className="p-3">80–200 PLN / kilka h</td>
                  <td className="p-3">Drzemka 2–5h, brak potrzeby pełnego noclegu</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Na Lotnisku Chopina (WAW) nie ma hotelu airside. Najbliżej terminalu to Novotel Airport (łącznik) lub Courtyard by Marriott.
          </p>
        </section>

        {/* Kalkulacja progu */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <Calculator className="inline w-6 h-6 mr-2 text-blue-600" />
            Kalkulator progu opłacalności
          </h2>
          <p className="text-slate-700 mb-5">
            Pytanie nie brzmi "czy nocleg lotniskowy jest drogi", lecz "czy jest tańszy
            od alternatywy". Alternatywą jest spędzenie nocy w fotelu przy bramce lub w saloniku.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-900 mb-3">Scenariusz: przesiadka nocna 8h (np. Frankfurt 23:00–07:00)</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex justify-between"><span>Hotel landside (Sheraton FRA)</span><span className="font-medium">~280 PLN</span></li>
                <li className="flex justify-between"><span>Transfer lotnisko ↔ hotel (taxi)</span><span className="font-medium">~30 PLN</span></li>
                <li className="flex justify-between border-t pt-2 font-bold"><span>Łączny koszt</span><span>~310 PLN</span></li>
              </ul>
              <p className="text-xs text-blue-700 mt-3">
                Wyspany pracownik rano = pełna wydajność na spotkaniu o 10:00.
                Zmęczony pracownik = ryzyko błędnych decyzji. Trudno to wycenić, ale travel policy powinna to uwzględniać.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-900 mb-3">Scenariusz: przesiadka dzienna 5h (np. Amsterdam 12:00–17:00)</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex justify-between"><span>Dostęp do lounge (np. PP)</span><span className="font-medium">0–35 USD</span></li>
                <li className="flex justify-between"><span>Posiłek w terminalu</span><span className="font-medium">~60–90 PLN</span></li>
                <li className="flex justify-between border-t pt-2 font-bold"><span>Łączny koszt</span><span>~90–220 PLN</span></li>
              </ul>
              <p className="text-xs text-slate-600 mt-3">
                5h w ciągu dnia = możliwa praca z laptopa w saloniku.
                Hotel przy 5h przesiadce dziennej to nadmiar — transfer + formalności pochłoną 2h z 5.
              </p>
            </div>
          </div>

          {/* Matryca decyzyjna */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Czas przesiadki</th>
                  <th className="p-3 text-left">Pora</th>
                  <th className="p-3 text-left">Rekomendacja</th>
                  <th className="p-3 text-left">Uzasadnienie</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3">&lt; 3h</td>
                  <td className="p-3">Dowolna</td>
                  <td className="p-3 text-green-700 font-medium">Lounge / fotel przy bramce</td>
                  <td className="p-3">Za mało czasu na hotel — tracisz więcej na transferze</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3">3–6h</td>
                  <td className="p-3">Dzień</td>
                  <td className="p-3 text-green-700 font-medium">Lounge lub capsule hotel</td>
                  <td className="p-3">Praca w saloniku + ewentualnie drzemka w capsule</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3">3–6h</td>
                  <td className="p-3">Noc (22:00–06:00)</td>
                  <td className="p-3 text-orange-700 font-medium">Capsule hotel lub landside</td>
                  <td className="p-3">Sen w fotelu przy bramce nie jest snem — degradacja wydajności</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3">6–10h</td>
                  <td className="p-3">Dzień</td>
                  <td className="p-3 text-orange-700 font-medium">Hotel landside lub lounge + coworking</td>
                  <td className="p-3">Możliwa praca zdalna, decyzja zależy od spotkań</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3">6–10h</td>
                  <td className="p-3">Noc</td>
                  <td className="p-3 text-red-700 font-medium">Hotel — obowiązkowo</td>
                  <td className="p-3">Wyspany pracownik to obowiązek pracodawcy</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3">&gt; 10h</td>
                  <td className="p-3">Dowolna</td>
                  <td className="p-3 text-red-700 font-medium">Hotel — rozważ też zmianę trasy</td>
                  <td className="p-3">Przesiadka &gt;10h = często warto poszukać połączenia bezpośredniego lub innego przęsła</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Jak rezerwować */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Jak rezerwować hotel przesiadkowy?</h2>

          <div className="grid md:grid-cols-3 gap-5 mb-6">
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <MapPin className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900">TMC / OBT</h3>
              </div>
              <p className="text-sm text-slate-600">
                Najczęściej hotel przesiadkowy można zarezerwować razem z biletami
                w narzędziu TMC (Concur, TravelPerk). Łączy to transakcje w jednym
                raporcie i ułatwia rozliczenie.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Hotel className="w-4 h-4 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900">Bezpośrednio u hotelu</h3>
              </div>
              <p className="text-sm text-slate-600">
                Hotele takie jak Hilton, Marriott, Novotel przy dużych lotniskach
                oferują specjalne pakiety "day-use" (pobyt na kilka godzin bez noclegu)
                dostępne bezpośrednio — przydatne przy przesiadce 4–8h w ciągu dnia.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Moon className="w-4 h-4 text-orange-600" />
                </div>
                <h3 className="font-bold text-slate-900">Capsule i sleep pods</h3>
              </div>
              <p className="text-sm text-slate-600">
                Na lotniskach w Dubaju (DXB), Amsterdamie (AMS), Frankfurcie (FRA),
                Singapurze (SIN) dostępne są kabiny do wynajęcia na godziny.
                Na Okęciu (WAW) brak — alternatywą jest fotel w Polonez Lounge.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-amber-900 mb-1">Uwaga: day-use a polityka podróży</h3>
                <p className="text-sm text-amber-800">
                  Pakiety "day-use" (pobyt dzienny bez noclegu) nie zawsze są obsługiwane
                  przez narzędzia TMC. Sprawdź, czy Twoja travel policy obejmuje ten przypadek
                  i jak go rozliczyć — zwykle jako "wynajem sali/pokoju" w kosztach delegacji.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Największe lotniska przesiadkowe */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Hotele przy głównych lotniskach przesiadkowych</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Lotnisko</th>
                  <th className="p-3 text-left">Hotel w/przy terminalu</th>
                  <th className="p-3 text-left">Airside?</th>
                  <th className="p-3 text-left">Capsule?</th>
                  <th className="p-3 text-left">Cena noclegu</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3 font-medium">DXB Dubai</td>
                  <td className="p-3">Dubai International Hotel (T1, T3)</td>
                  <td className="p-3 text-green-700">Tak</td>
                  <td className="p-3 text-green-700">Tak (GoSleep)</td>
                  <td className="p-3">350–700 PLN</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-medium">FRA Frankfurt</td>
                  <td className="p-3">Sheraton Frankfurt, Hilton Garden Inn</td>
                  <td className="p-3 text-orange-700">Landside (łącznik)</td>
                  <td className="p-3 text-orange-700">Nie</td>
                  <td className="p-3">300–600 PLN</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3 font-medium">AMS Amsterdam</td>
                  <td className="p-3">CitizenM Airport, Hilton Amsterdam Airport</td>
                  <td className="p-3 text-orange-700">Landside</td>
                  <td className="p-3 text-green-700">Tak (YotelAir)</td>
                  <td className="p-3">250–500 PLN</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-medium">LHR Londyn Heathrow</td>
                  <td className="p-3">Sofitel London Heathrow (T5), Radisson Blu (T3)</td>
                  <td className="p-3 text-orange-700">Landside (łącznik)</td>
                  <td className="p-3 text-orange-700">Nie</td>
                  <td className="p-3">450–900 PLN</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3 font-medium">SIN Singapur</td>
                  <td className="p-3">Ambassador Transit Hotel</td>
                  <td className="p-3 text-green-700">Tak (airside T2/T3)</td>
                  <td className="p-3 text-orange-700">Nie (lounge nap rooms)</td>
                  <td className="p-3">200–400 PLN / 6h</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-medium">WAW Warszawa</td>
                  <td className="p-3">Novotel (łącznik), Courtyard Marriott</td>
                  <td className="p-3 text-red-700">Nie (wymagane przejście)</td>
                  <td className="p-3 text-red-700">Nie</td>
                  <td className="p-3">200–350 PLN</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Rozliczenie w delegacji */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Jak rozliczyć hotel przesiadkowy w delegacji?</h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-slate-900">Sprawdź limit noclegowy w travel policy</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Większość polityk podróży określa limit kosztu noclegu per miasto lub region
                  (np. "do 300 PLN w Europie Zachodniej"). Hotel przesiadkowy podlega temu samemu limitowi.
                  Jeśli go przekracza — wymagane może być dodatkowe zatwierdzenie.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-slate-900">Czas noclegu — tego samego czy następnego dnia?</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Nocleg w hotelu lotniskowym wlicza się w czas trwania delegacji.
                  Jeśli podróż trwa od poniedziałku do środy, a nocleg przesiadkowy jest
                  we wtorek w nocy — dieta dzienna za środę przysługuje normalnie.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-slate-900">Karta firmowa vs zwrot — co wygodniejsze?</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Hotel przesiadkowy zarezerwowany przez TMC trafia automatycznie na kartę
                  centralną lub firmową. Przy rezerwacji bezpośredniej zachowaj fakturę VAT
                  wystawioną na firmę — konieczna do odliczenia podatku.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-semibold text-slate-900">Hotel wymagany przez linie — inna procedura</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Gdy linia lotnicza zapewnia nocleg z powodu opóźnienia lub odwołania lotu,
                  koszt pokrywa przewoźnik. Nie wpływa na budżet delegacji. Masz prawo
                  do noclegu i transferu na mocy rozporządzenia EC 261/2004
                  (opóźnienie &gt;5h lub odwołanie).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EC 261 a hotel */}
        <section className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-3">
              Przesiadka a EC 261: kiedy linia musi zapewnić hotel?
            </h2>
            <p className="text-blue-800 mb-4">
              Jeśli przesiadka jest wymuszona przez linię — nie przez Ciebie — i tracisz
              połączenie w wyniku opóźnienia lub odwołania, linia jest zobowiązana do:
            </p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Zapewnienia noclegu, gdy oczekiwanie obejmuje noc</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Transferu lotnisko–hotel–lotnisko</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Posiłków i napojów stosownie do czasu oczekiwania</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Odszkodowania 250–600 EUR (zależnie od trasy) przy &gt;3h opóźnienia w dotarciu</span>
              </li>
            </ul>
            <p className="text-xs text-blue-700 mt-4">
              Jeśli linia nie wywiązała się z obowiązku zapewnienia noclegu, możesz
              samodzielnie opłacić hotel i żądać zwrotu kosztów. Zachowaj wszystkie rachunki.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>

          <div className="space-y-5">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy hotel przesiadkowy jest kosztem uzyskania przychodu?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Tak. Nocleg w hotelu lotniskowym jako element podróży służbowej jest kosztem
                  uzyskania przychodu, pod warunkiem że podróż ma uzasadnienie biznesowe.
                  Faktura musi być wystawiona na firmę, a koszt musi mieścić się
                  w limitach określonych w regulaminie lub travel policy (lub mieć odrębne zatwierdzenie).
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Co to jest day-use hotel i czy mogę go rozliczyć?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Day-use to wynajem pokoju na kilka godzin w ciągu dnia (bez noclegu), zwykle
                  za 40–60% stawki dobowej. Rozliczalne jako koszt podróży służbowej
                  pod pozycją "wynajem" lub "zakwaterowanie" — warto upewnić się,
                  że travel policy to dopuszcza i że faktura zawiera NIP firmy.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Jak długa musi być przesiadka, żeby uzasadniać hotel?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Minimalny próg to 6–8 godzin, z czego większość to godziny nocne
                  (22:00–06:00). Przesiadki dzienne poniżej 10h zwykle da się przeżyć
                  w saloniku biznesowym lub przy bramce z dostępem do WiFi.
                  Przy przesiadkach nocnych nawet 4–5h może uzasadniać capsule hotel —
                  sen w fotelu przy bramce odbija się na wydajności następnego dnia.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy mogę żądać zwrotu kosztów hotelu od linii lotniczej?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Tak, jeśli konieczność noclegu wynika z winy linii — opóźnienie,
                  odwołanie lotu, utracona przesiadka spowodowana przez przewoźnika.
                  W takim przypadku linia powinna zapewnić hotel lub zwrócić
                  rozsądny koszt hotelu wybranego samodzielnie. Zachowaj wszystkie
                  rachunki i pismo/wiadomość od linii potwierdzające przyczynę.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Opóźnienie lub odwołanie wymusiło nocleg?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Jeśli Twój lot był opóźniony lub odwołany i musiałeś samodzielnie pokryć
            koszty hotelu i transferu — możesz dochodzić zwrotu od linii lotniczej
            razem z odszkodowaniem EC 261 do 600 EUR.
          </p>
          <a
            href={"https://claimwinger.pl?utm_source=bizneslot&utm_medium=article&utm_campaign=lotniskowy-hotel-przesiadka"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Sprawdź, czy należy Ci się zwrot
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-blue-300 mt-4">
            ClaimWinger — dochodzenie odszkodowań EC 261 dla podróżnych służbowych
          </p>
        </section>

        {/* Nav */}
        <div className="mt-10 pt-6 border-t border-slate-200">
          <Link href="/artykuly" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            ← Wszystkie artykuły
          </Link>
        </div>

      </main>
    </>
  );
}
