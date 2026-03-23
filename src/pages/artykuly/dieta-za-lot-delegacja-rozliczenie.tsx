import { SEO } from "@/components/SEO";
import Link from "next/link";
import { DollarSign, Clock, CheckCircle, AlertTriangle, ArrowRight, FileText, Calculator } from "lucide-react";

export default function DietaZaLotDelegacjaRozliczenie() {
  return (
    <>
      <SEO
        title="Dieta za lot służbowy — ile wynosi i jak rozliczyć? Krajowa i zagraniczna | bizneslot.info"
        description="Ile wynosi dieta za podróż służbową samolotem? Stawki diet krajowych i zagranicznych 2024/2025, zasady obliczania czasu delegacji, odliczenia za posiłki i jak poprawnie rozliczyć dietę."
        canonicalUrl="https://bizneslot.info/artykuly/dieta-za-lot-delegacja-rozliczenie"
        ogType="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Dieta za lot służbowy — ile wynosi i jak rozliczyć?",
          description: "Stawki diet krajowych i zagranicznych, zasady obliczania czasu delegacji lotniczej, odliczenia za posiłki w samolocie i wzór rozliczenia delegacji.",
          datePublished: "2026-03-22",
          author: { "@type": "Organization", name: "bizneslot.info" },
          publisher: { "@type": "Organization", name: "bizneslot.info" }
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <DollarSign className="w-4 h-4" />
            <span>Finanse delegacji</span>
            <span className="mx-2">·</span>
            <Clock className="w-4 h-4" />
            <span>8 min czytania</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dieta za lot służbowy — ile wynosi i jak rozliczyć?
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Dieta to ryczałt na pokrycie zwiększonych kosztów wyżywienia podczas delegacji.
            Jak obliczyć jej wysokość dla lotu krajowego i zagranicznego,
            kiedy posiłek w samolocie zmniejsza dietę i jak poprawnie wypełnić rozliczenie?
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg mb-10">
          <h2 className="text-lg font-bold text-green-900 mb-2">Krótka odpowiedź</h2>
          <p className="text-green-800">
            Dieta krajowa w 2025 r. wynosi <strong>45 zł za dobę</strong>.
            Dieta zagraniczna zależy od kraju docelowego — np. Niemcy 49 EUR,
            USA 59 USD, Wielka Brytania 45 GBP. Czas delegacji liczy się od chwili
            wyjazdu z miejsca stałej pracy (lub miejsca zamieszkania) do chwili powrotu.
            Posiłek serwowany w samolocie (klasa biznes lub lot z catering) zmniejsza
            dietę o <strong>25% za śniadanie, 50% za obiad, 25% za kolację</strong>.
            Rozliczenie składa się z polecenia wyjazdu, rachunków i druku rozliczenia delegacji.
          </p>
        </div>

        {/* Podstawa prawna */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Podstawa prawna — rozporządzenia o dietach</h2>
          <p className="text-slate-700 mb-4">
            Diety i inne należności z tytułu podróży służbowej regulują dwa rozporządzenia
            Ministra Pracy i Polityki Społecznej:
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Delegacje krajowe</h3>
              <p className="text-xs text-slate-600 mb-2 font-mono">
                Rozporządzenie MPiPS z 29 stycznia 2013 r. (Dz.U. 2013 poz. 167)
              </p>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Dieta: <strong>45 zł / dobę</strong> (od 1 stycznia 2023 r.)</li>
                <li>• Ryczałt na dojazdy: 20% diety</li>
                <li>• Ryczałt noclegowy: 150% diety (67,50 zł)</li>
                <li>• Przy podróży &lt; 8h: brak diety</li>
                <li>• 8–12h: 50% diety (22,50 zł)</li>
                <li>• Powyżej 12h: pełna dieta (45 zł)</li>
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Delegacje zagraniczne</h3>
              <p className="text-xs text-slate-600 mb-2 font-mono">
                Rozporządzenie MPiPS z 29 stycznia 2013 r. (Dz.U. 2013 poz. 167)
              </p>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Stawki wg załącznika nr 2 rozporządzenia (różne dla każdego kraju)</li>
                <li>• Czas oblicza się od przekroczenia granicy PL</li>
                <li>• Do 8h pobytu za granicą: 1/3 diety</li>
                <li>• 8–12h: 50% diety</li>
                <li>• Powyżej 12h: pełna dieta zagraniczna</li>
                <li>• Za każdą dobę: pełna dieta</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-amber-800">
              <strong>Uwaga:</strong> Rozporządzenie wyznacza <em>minimalne</em> stawki dla sfery
              budżetowej. Prywatni pracodawcy mogą ustalić wyższe stawki w regulaminie
              wynagradzania lub travel policy — i najczęściej tak robią. Kwoty powyżej
              ustawowego minimum podlegają opodatkowaniu PIT i oskładkowaniu ZUS.
            </p>
          </div>
        </section>

        {/* Stawki zagraniczne */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <Calculator className="inline w-6 h-6 mr-2 text-blue-600" />
            Stawki diet zagranicznych — najczęstsze kierunki
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Kraj</th>
                  <th className="p-3 text-left">Dieta dobowa</th>
                  <th className="p-3 text-left">Waluta</th>
                  <th className="p-3 text-left">Limit noclegu</th>
                  <th className="p-3 text-left">Uwagi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3 font-medium">Niemcy</td>
                  <td className="p-3 font-bold">49</td>
                  <td className="p-3">EUR</td>
                  <td className="p-3">150 EUR</td>
                  <td className="p-3">Najczęstszy kierunek z PL</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-medium">Francja</td>
                  <td className="p-3 font-bold">50</td>
                  <td className="p-3">EUR</td>
                  <td className="p-3">180 EUR</td>
                  <td className="p-3">Paryż — koszty znacznie wyższe niż limit</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3 font-medium">Wielka Brytania</td>
                  <td className="p-3 font-bold">45</td>
                  <td className="p-3">GBP</td>
                  <td className="p-3">160 GBP</td>
                  <td className="p-3">Londyn — limit często niewystarczający</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-medium">USA</td>
                  <td className="p-3 font-bold">59</td>
                  <td className="p-3">USD</td>
                  <td className="p-3">Bez limitu (rachunek)</td>
                  <td className="p-3">Nowy Jork / LA — wyższe koszty wyżywienia</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3 font-medium">Chiny</td>
                  <td className="p-3 font-bold">50</td>
                  <td className="p-3">USD</td>
                  <td className="p-3">Bez limitu (rachunek)</td>
                  <td className="p-3">Pekin / Szanghaj</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-medium">Japonia</td>
                  <td className="p-3 font-bold">50</td>
                  <td className="p-3">USD</td>
                  <td className="p-3">Bez limitu (rachunek)</td>
                  <td className="p-3">Tokio — drogi nocleg</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3 font-medium">ZAE (Dubai)</td>
                  <td className="p-3 font-bold">42</td>
                  <td className="p-3">USD</td>
                  <td className="p-3">Bez limitu (rachunek)</td>
                  <td className="p-3">Hub przesiadkowy — często 1 noc</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-medium">Szwajcaria</td>
                  <td className="p-3 font-bold">88</td>
                  <td className="p-3">CHF</td>
                  <td className="p-3">Bez limitu (rachunek)</td>
                  <td className="p-3">Najwyższa dieta w Europie</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Pełna tabela stawek: Załącznik nr 2 do rozporządzenia MPiPS z 29.01.2013 r.
            Stawki aktualne — sprawdź przed rozliczeniem delegacji.
          </p>
        </section>

        {/* Jak liczyć czas delegacji lotniczej */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Jak liczyć czas delegacji przy podróży samolotem?</h2>
          <p className="text-slate-700 mb-5">
            Czas podróży służbowej liczy się od chwili wyjazdu z miejsca pracy
            (lub miejsca zamieszkania, jeśli tak określono w poleceniu wyjazdu)
            do chwili powrotu. Dla lotu — to cały łańcuch transportu, nie tylko czas w samolocie.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-5">
            <h3 className="font-bold text-slate-800 mb-3">Przykład — lot z Warszawy do Berlina i powrót (1 dzień)</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-600">Wyjazd z biura (Warszawa) do lotniska</span>
                <span className="font-medium">07:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-600">Odlot LOT z WAW</span>
                <span className="font-medium">09:30</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-600">Przylot Berlin TXL/BER</span>
                <span className="font-medium">10:45</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-600">Spotkania</span>
                <span className="font-medium">12:00–17:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-600">Powrotny lot Berlin → Warszawa</span>
                <span className="font-medium">19:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-600">Przylot WAW, dotarcie do domu</span>
                <span className="font-medium">21:30</span>
              </div>
              <div className="flex justify-between py-1 font-bold text-slate-900">
                <span>Łączny czas delegacji</span>
                <span>14h 30 min</span>
              </div>
            </div>
            <div className="mt-3 p-3 bg-green-50 rounded border border-green-200">
              <p className="text-sm text-green-800">
                <strong>Dieta krajowa:</strong> 14h 30 min &gt; 12h → pełna dieta: <strong>45 zł</strong><br/>
                <strong>Dieta zagraniczna (Niemcy):</strong> Pobyt w Niemczech ok. 10h → 50% diety: <strong>24,50 EUR</strong>
              </p>
              <p className="text-xs text-green-700 mt-1">
                Uwaga: w podróży krajowo-zagranicznej za czas w Polsce liczy się dieta krajowa,
                za czas za granicą — zagraniczna.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-800 mb-3">Przykład — lot do Nowego Jorku, 3 doby</h3>
            <div className="space-y-2 text-sm text-slate-700">
              <p><strong>Dzień 1:</strong> Wyjazd z biura 14:00 (PL) → lot 18:00 WAW–JFK (10h)</p>
              <p><strong>Dzień 2:</strong> Lądowanie JFK 21:00 czasu NY (03:00 PL) → spotkania</p>
              <p><strong>Dzień 3:</strong> Spotkania</p>
              <p><strong>Dzień 4:</strong> Lot powrotny JFK 18:00 → lądowanie WAW dzień 5, 08:00</p>
            </div>
            <div className="mt-3 p-3 bg-green-50 rounded border border-green-200 text-sm">
              <p className="text-green-800 font-bold mb-1">Obliczenie diety zagranicznej (USA: 59 USD/dobę):</p>
              <ul className="text-green-800 space-y-1 text-xs">
                <li>• Dzień 1 (po przekroczeniu granicy): liczymy od momentu wylotu WAW — pełna doba zagraniczna przy locie nocnym</li>
                <li>• Dzień 2 i 3: po pełnej dobie każda → 2 × 59 USD = 118 USD</li>
                <li>• Dzień 4 (powrót): od wylotu JFK do lądowania WAW — kolejna pełna doba</li>
                <li>• Łącznie: <strong>4 × 59 USD = 236 USD</strong> (orientacyjnie — dokładny czas granicy decyduje)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Posiłki w samolocie a dieta */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Posiłki w samolocie a obniżenie diety</h2>
          <p className="text-slate-700 mb-4">
            Jeśli w czasie delegacji pracownik otrzymał bezpłatny posiłek
            (np. catering w klasie biznes, voucher od linii przy opóźnieniu,
            posiłek na konferencji), dieta ulega zmniejszeniu.
          </p>

          <div className="overflow-x-auto mb-5">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Posiłek</th>
                  <th className="p-3 text-left">Odliczenie od diety krajowej (45 zł)</th>
                  <th className="p-3 text-left">Odliczenie od diety zagranicznej</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3">Śniadanie</td>
                  <td className="p-3">25% = 11,25 zł</td>
                  <td className="p-3">25% stawki kraju</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3">Obiad</td>
                  <td className="p-3">50% = 22,50 zł</td>
                  <td className="p-3">50% stawki kraju</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3">Kolacja</td>
                  <td className="p-3">25% = 11,25 zł</td>
                  <td className="p-3">25% stawki kraju</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3">Śniadanie + obiad + kolacja</td>
                  <td className="p-3 text-red-700 font-medium">Dieta = 0 zł</td>
                  <td className="p-3 text-red-700 font-medium">Dieta = 0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-900 mb-2 text-sm">Kiedy posiłek w samolocie obniża dietę?</h3>
              <ul className="text-xs text-blue-800 space-y-1">
                <li>• Klasa biznes z pełnym cateringiem (śniadanie, obiad LUB kolacja)</li>
                <li>• Loty z serwisem posiłkowym (zwykle trasy &gt; 3–4h w każdej klasie)</li>
                <li>• Voucher na posiłek od linii przy opóźnieniu</li>
                <li>• Catering na konferencji wliczony w cenę uczestnictwa</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-bold text-amber-900 mb-2 text-sm">Praktyczna zasada</h3>
              <p className="text-xs text-amber-800">
                Formalnie pracownik powinien wykazać, jakie posiłki otrzymał bezpłatnie.
                W praktyce przy lotach krótkich (bez serwisu) i długich trasach
                w ekonomicznej (przekąska nie = posiłek) pracodawcy rzadko odliczają.
                Przy klasie biznes na długich trasach — odliczenie jest uzasadnione
                i coraz częściej weryfikowane przez działy finansowe.
              </p>
            </div>
          </div>
        </section>

        {/* Jak rozliczyć */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <FileText className="inline w-6 h-6 mr-2 text-blue-600" />
            Jak poprawnie rozliczyć dietę — krok po kroku
          </h2>

          <div className="space-y-3">
            {[
              {
                step: 1,
                title: "Polecenie wyjazdu służbowego",
                desc: "Dokument wystawiany przez pracodawcę przed delegacją. Zawiera: cel, miejsce, czas trwania, środek transportu. Podstawa do rozliczenia — bez niego dieta technicznie nie przysługuje."
              },
              {
                step: 2,
                title: "Zbierz dokumenty w trakcie podróży",
                desc: "Bilety lotnicze (e-ticket), karty pokładowe (lub zrzut ekranu z aplikacji), faktury za hotel (na firmę), paragony za taksówki i inne wydatki. Zdjęcia telefonem + folder w chmurze to wystarczająca dokumentacja wstępna."
              },
              {
                step: 3,
                title: "Wypełnij druk rozliczenia kosztów podróży",
                desc: "Standardowy formularz firmy lub formularz z rozporządzenia. Wykazujesz: czas wyjazdu i powrotu, środki transportu, diety (obliczone jak wyżej), noclegi, inne koszty z rachunkami."
              },
              {
                step: 4,
                title: "Oblicz dietę zgodnie z przepisami",
                desc: "Czas krajowy liczy się od wyjazdu z miejsca pracy do przekroczenia granicy (lub powrotu). Czas zagraniczny — od granicy do granicy. Zastosuj stawki z rozporządzenia lub wyższe stawki firmowe jeśli przewidziane."
              },
              {
                step: 5,
                title: "Zaznacz bezpłatne posiłki",
                desc: "Jeśli otrzymałeś catering w samolocie lub posiłki na konferencji, wykaż je w formularzu i odejmij odpowiedni % diety. Niewykazanie posiłków przy weryfikacji może skutkować korektą rozliczenia."
              },
              {
                step: 6,
                title: "Złóż rozliczenie w terminie",
                desc: "Rozporządzenie wymaga rozliczenia w ciągu 14 dni od zakończenia podróży. Wewnętrzny regulamin firmy może określić krótszy termin (5–7 dni). Przy TMC zintegrowanym z systemem finansowym wiele danych uzupełnia się automatycznie."
              }
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">{step}</div>
                <div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="text-sm text-slate-600 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dieta a podatek */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Dieta a podatek PIT i ZUS</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-900 mb-3">Zwolnienie z PIT i ZUS</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Diety do wysokości ustawowej stawki z rozporządzenia są zwolnione z PIT (art. 21 ust. 1 pkt 16 ustawy o PIT)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Diety do wysokości ustawowej stawki są zwolnione z podstawy wymiaru składek ZUS</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Zwrot udokumentowanych kosztów noclegu (do limitu z rozporządzenia lub na podstawie rachunku) — zwolniony z PIT</span>
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
              <h3 className="font-bold text-orange-900 mb-3">Co podlega opodatkowaniu</h3>
              <ul className="space-y-2 text-sm text-orange-800">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Nadwyżka ponad stawkę ustawową (jeśli firma stosuje wyższe stawki niż rozporządzenie) podlega PIT</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Ryczałty na noclegi wypłacane bez faktury ponad limit ustawowy — PIT</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Świadczenia niepieniężne (np. firmowa karta na posiłki bez limitu) — mogą być uznane za przychód</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>

          <div className="space-y-5">
            <div itemScope itemProp="mainEntity" itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy dieta przysługuje przy locie trwającym mniej niż 8 godzin?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Dla delegacji krajowych: jeśli łączny czas podróży (od wyjazdu do powrotu)
                  wynosi mniej niż 8 godzin — dieta nie przysługuje.
                  Przy 8–12h przysługuje 50% diety, powyżej 12h — pełna dieta.
                  Czas liczy się od wyjazdu z miejsca pracy, nie od startu samolotu —
                  dojazd na lotnisko i z lotniska wchodzi w czas delegacji.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                W jakiej walucie wypłaca się dietę zagraniczną?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Pracodawca może wypłacić dietę zagraniczną w walucie kraju delegacji,
                  w EUR lub w PLN przeliczonych po kursie NBP z dnia wypłaty (lub innym
                  ustalonym w regulaminie). Rozliczenie w PLN jest popularne przy krótkich
                  delegacjach — pracownik dostaje np. równowartość 49 EUR w złotówkach
                  po kursie dnia wypłaty.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy delegacja w jednym dniu (tam i z powrotem) daje prawo do diety?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Tak, jeśli łączny czas podróży przekroczy 8 godzin. Przykład:
                  wylot o 6:00, powrót o 22:00 = 16h podróży = pełna dieta krajowa (45 zł).
                  Przy podróży zagranicznej liczy się też czas spędzony za granicą —
                  jeśli to powyżej 8h, przysługuje 50% diety zagranicznej.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Co jeśli pracodawca nie chce wypłacić diety?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Dieta z tytułu podróży służbowej jest świadczeniem wynikającym z przepisów
                  prawa pracy — pracodawca jest do niej zobowiązany. Odmowa wypłaty
                  lub wypłata poniżej ustawowego minimum (przy braku wyższych stawek
                  w regulaminie) jest naruszeniem prawa pracy. Pracownik może dochodzić
                  diety przed sądem pracy lub zgłosić sprawę do Państwowej Inspekcji Pracy.
                  Roszczenia z tytułu diet przedawniają się po 3 latach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Lot opóźniony — kolejne odszkodowanie niezależne od diety
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Dieta pokrywa zwiększone koszty wyżywienia. Odszkodowanie EC 261
            to osobne świadczenie — do 600 EUR za opóźnienie lub odwołanie lotu,
            niezależnie od rozliczenia delegacji.
          </p>
          <a
            href={"https://claimwinger.pl?utm_source=bizneslot&utm_medium=article&utm_campaign=dieta-za-lot-delegacja-rozliczenie"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Sprawdź odszkodowanie za opóźniony lot
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
