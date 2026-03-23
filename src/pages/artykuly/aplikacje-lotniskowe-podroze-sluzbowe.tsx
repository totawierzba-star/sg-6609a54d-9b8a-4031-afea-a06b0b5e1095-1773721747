import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Smartphone, Clock, CheckCircle, Star, ArrowRight, Wifi, MapPin, AlertTriangle } from "lucide-react";

export default function AplikacjeLotniskowePodrozeSluzbowe() {
  return (
    <>
      <SEO
        title="Aplikacje lotniskowe — które naprawdę pomagają w podróży biznesowej? | bizneslot.info"
        description="Przegląd aplikacji lotniskowych przydatnych w podróży służbowej: FlightAware, LoungeBuddy, TripIt, airline apps i inne. Które zainstalować przed pierwszym lotem?"
        canonicalUrl="https://bizneslot.info/artykuly/aplikacje-lotniskowe-podroze-sluzbowe"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <Smartphone className="w-4 h-4" />
            <span>Lotniska</span>
            <span className="mx-2">·</span>
            <Clock className="w-4 h-4" />
            <span>8 min czytania</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Aplikacje lotniskowe — które naprawdę pomagają w podróży biznesowej?
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Dziesiątki aplikacji obiecuje ułatwić życie w podróży. Które
            faktycznie działają i mają sens dla podróżnika służbowego?
            Lista sprawdzonych narzędzi z oceną przydatności.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg mb-10">
          <h2 className="text-lg font-bold text-green-900 mb-2">Krótka odpowiedź</h2>
          <p className="text-green-800">
            Pięć aplikacji, które warto mieć na każdym służbowym smartfonie:
            <strong> aplikacja swojej linii lotniczej</strong> (boarding pass, status lotu),
            <strong> FlightAware lub Flightradar24</strong> (śledzenie opóźnień w czasie rzeczywistym),
            <strong> TripIt lub TripCase</strong> (centralne itinerarium),
            <strong> LoungeBuddy</strong> (znajdowanie saloników) i
            <strong> VPN</strong> (bezpieczne WiFi). Reszta to opcjonalne dodatki.
          </p>
        </div>

        {/* Kategorie */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Aplikacje według kategorii</h2>

          {/* Śledzenie lotów */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="bg-blue-100 p-1.5 rounded-full">
                <MapPin className="w-4 h-4 text-blue-600" />
              </div>
              Śledzenie lotów i alertów
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="p-3 text-left">Aplikacja</th>
                    <th className="p-3 text-left">System</th>
                    <th className="p-3 text-left">Co daje</th>
                    <th className="p-3 text-left">Koszt</th>
                    <th className="p-3 text-left">Ocena B2B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-white">
                    <td className="p-3 font-semibold">FlightAware</td>
                    <td className="p-3">iOS / Android</td>
                    <td className="p-3">Rzeczywisty status, przyczyna opóźnienia, historia lotu</td>
                    <td className="p-3">Bezpłatna (ads) / 9,99 USD/mies.</td>
                    <td className="p-3">
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="p-3 font-semibold">Flightradar24</td>
                    <td className="p-3">iOS / Android</td>
                    <td className="p-3">Radar lotów na żywo, AR (punkt kamerą w niebo), alerty</td>
                    <td className="p-3">Bezpłatna / Silver 1,99 USD/mies.</td>
                    <td className="p-3">
                      <div className="flex gap-0.5">
                        {[1,2,3,4].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-3 h-3 text-slate-300" />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b bg-white">
                    <td className="p-3 font-semibold">App linii lotniczej</td>
                    <td className="p-3">iOS / Android</td>
                    <td className="p-3">Boarding pass, zmiana siedzenia, gate, status FFP</td>
                    <td className="p-3">Bezpłatna</td>
                    <td className="p-3">
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold">Google Flights</td>
                    <td className="p-3">Web / iOS / Android</td>
                    <td className="p-3">Porównanie cen, alerty cenowe, śledzenie trasy</td>
                    <td className="p-3">Bezpłatna</td>
                    <td className="p-3">
                      <div className="flex gap-0.5">
                        {[1,2,3].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                        {[1,2].map(i => <Star key={i} className="w-3 h-3 text-slate-300" />)}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              FlightAware ma przewagę nad Flightradar24 przy lotach w USA i Kanadzie; Flightradar24 lepiej
              sprawdza się w Europie dzięki gęstszej sieci odbiorników ADS-B.
            </p>
          </div>

          {/* Zarządzanie itinerarium */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="bg-green-100 p-1.5 rounded-full">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              Zarządzanie itinerarium i dokumentami
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="p-3 text-left">Aplikacja</th>
                    <th className="p-3 text-left">System</th>
                    <th className="p-3 text-left">Co daje</th>
                    <th className="p-3 text-left">Koszt</th>
                    <th className="p-3 text-left">Ocena B2B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-white">
                    <td className="p-3 font-semibold">TripIt</td>
                    <td className="p-3">iOS / Android</td>
                    <td className="p-3">Automatyczne itinerarium z e-maili, udostępnianie podróży zespołowi</td>
                    <td className="p-3">Bezpłatna / Pro 49 USD/rok</td>
                    <td className="p-3">
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="p-3 font-semibold">TripCase</td>
                    <td className="p-3">iOS / Android</td>
                    <td className="p-3">Itinerarium, alerty, integracja z GDS (Sabre)</td>
                    <td className="p-3">Bezpłatna</td>
                    <td className="p-3">
                      <div className="flex gap-0.5">
                        {[1,2,3,4].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-3 h-3 text-slate-300" />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b bg-white">
                    <td className="p-3 font-semibold">App24 / TravelPerk</td>
                    <td className="p-3">iOS / Android</td>
                    <td className="p-3">Pełne zarządzanie rezerwacjami z OBT, wsparcie 24/7</td>
                    <td className="p-3">Zależna od konta firmowego</td>
                    <td className="p-3">
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold">Google Wallet / Apple Wallet</td>
                    <td className="p-3">iOS / Android</td>
                    <td className="p-3">Boarding passy, karty lojalnościowe offline</td>
                    <td className="p-3">Bezpłatna</td>
                    <td className="p-3">
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Lounge */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="bg-purple-100 p-1.5 rounded-full">
                <MapPin className="w-4 h-4 text-purple-600" />
              </div>
              Dostęp do lounge i usług lotniskowych
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="p-3 text-left">Aplikacja</th>
                    <th className="p-3 text-left">System</th>
                    <th className="p-3 text-left">Co daje</th>
                    <th className="p-3 text-left">Koszt</th>
                    <th className="p-3 text-left">Ocena B2B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-white">
                    <td className="p-3 font-semibold">LoungeBuddy</td>
                    <td className="p-3">iOS / Android</td>
                    <td className="p-3">Mapa saloników, warunki dostępu, godziny otwarcia, zakup wejść</td>
                    <td className="p-3">Bezpłatna (zakup wejść osobno)</td>
                    <td className="p-3">
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="p-3 font-semibold">Priority Pass</td>
                    <td className="p-3">iOS / Android</td>
                    <td className="p-3">Cyfrowa karta PP, lista saloników dla posiadaczy PP</td>
                    <td className="p-3">Bezpłatna (wymaga subskrypcji PP)</td>
                    <td className="p-3">
                      <div className="flex gap-0.5">
                        {[1,2,3,4].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-3 h-3 text-slate-300" />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold">Aira / Airportia</td>
                    <td className="p-3">iOS / Android</td>
                    <td className="p-3">Mapy terminali, sklepy, restauracje, bramy odlotów</td>
                    <td className="p-3">Bezpłatna</td>
                    <td className="p-3">
                      <div className="flex gap-0.5">
                        {[1,2,3].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                        {[1,2].map(i => <Star key={i} className="w-3 h-3 text-slate-300" />)}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Produktywność i bezpieczeństwo */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="bg-orange-100 p-1.5 rounded-full">
                <Wifi className="w-4 h-4 text-orange-600" />
              </div>
              Produktywność i bezpieczeństwo WiFi
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="p-3 text-left">Aplikacja</th>
                    <th className="p-3 text-left">System</th>
                    <th className="p-3 text-left">Co daje</th>
                    <th className="p-3 text-left">Koszt</th>
                    <th className="p-3 text-left">Ocena B2B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-white">
                    <td className="p-3 font-semibold">VPN firmowy</td>
                    <td className="p-3">iOS / Android</td>
                    <td className="p-3">Szyfrowanie połączenia na publicznym WiFi, dostęp do zasobów firmy</td>
                    <td className="p-3">Zapewnia firma (np. Cisco AnyConnect, GlobalProtect)</td>
                    <td className="p-3">
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="p-3 font-semibold">NordVPN / ExpressVPN</td>
                    <td className="p-3">iOS / Android</td>
                    <td className="p-3">VPN komercyjny, gdy firma nie dostarcza własnego</td>
                    <td className="p-3">~30–60 PLN/mies.</td>
                    <td className="p-3">
                      <div className="flex gap-0.5">
                        {[1,2,3,4].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-3 h-3 text-slate-300" />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b bg-white">
                    <td className="p-3 font-semibold">Boingo Wireless</td>
                    <td className="p-3">iOS / Android</td>
                    <td className="p-3">Subskrypcja WiFi na ponad 1 mln hotspotów (lotniska, hotele)</td>
                    <td className="p-3">~45 PLN/mies.</td>
                    <td className="p-3">
                      <div className="flex gap-0.5">
                        {[1,2,3].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                        {[1,2].map(i => <Star key={i} className="w-3 h-3 text-slate-300" />)}
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold">Microsoft 365 / Google Workspace</td>
                    <td className="p-3">iOS / Android</td>
                    <td className="p-3">Edycja dokumentów offline, poczta, Teams/Meet</td>
                    <td className="p-3">Dostarcza firma</td>
                    <td className="p-3">
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Które zainstalować */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Które aplikacje zainstalować przed pierwszym lotem?</h2>
          <p className="text-slate-700 mb-5">
            Nie ma sensu instalować wszystkiego. Oto minimalna lista startowa
            dla podróżnika służbowego latającego 5–20 razy w roku:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-900 mb-3">Obowiązkowe (zainstaluj teraz)</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>App Twojej linii lotniczej</strong> — boarding pass + statusy gate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>FlightAware</strong> — śledzenie opóźnień, dokumentacja EC 261</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>TripIt</strong> — automatyczne itinerarium z e-maili (wystarczy przekazać potwierdzenia)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>VPN</strong> (firmowy lub komercyjny) — WiFi w terminalu bez ryzyka</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Google Wallet / Apple Wallet</strong> — boarding passy offline</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-900 mb-3">Zalecane (przy &gt;10 lotach/rok)</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>LoungeBuddy</strong> — sprawdzanie saloników na obcych lotniskach</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Flightradar24</strong> — radar na żywo, przydatny przy wielozespołowych przesiadkach</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>App TMC</strong> (TravelPerk, Concur) — jeśli firma korzysta z OBT</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>App programu lojalnościowego linii</strong> — Miles &amp; More, Flying Blue, Miles</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Jak korzystać z FlightAware do EC 261 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Jak użyć FlightAware do dokumentacji EC 261?
          </h2>
          <p className="text-slate-700 mb-4">
            FlightAware i Flightradar24 pozwalają pobrać szczegółowe dane lotu —
            godziny blokowania, trasę, historię przylotów danego samolotu.
            To kluczowe przy składaniu roszczenia EC 261, gdy linia twierdzi,
            że opóźnienie było spowodowane "nadzwyczajnymi okolicznościami".
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-800 mb-3">Krok po kroku — pobierz dowód opóźnienia</h3>
            <ol className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">1</span>
                <span>Wejdź na <strong>flightaware.com</strong> lub otwórz aplikację FlightAware</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">2</span>
                <span>Wpisz numer lotu (np. LO285) i datę podróży</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">3</span>
                <span>Odczytaj <strong>Actual Departure Time</strong> i <strong>Actual Arrival Time</strong> (gate-to-gate)</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">4</span>
                <span>Zrób zrzut ekranu z datą i numerem lotu widocznymi na stronie</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">5</span>
                <span>Sprawdź <strong>historię poprzednich lotów tego samolotu</strong> (tail number) — jeśli samolot spóźnił się już na poprzednim rejsie, linia nie może powołać się na siłę wyższą</span>
              </li>
            </ol>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-800">
                <strong>Uwaga:</strong> EC 261 liczy opóźnienie na podstawie godziny <strong>lądowania</strong>
                (otwarcia drzwi), nie kołowania. FlightAware podaje czas "In" (bloki), który odpowiada
                przybiciu do bramki. To właśnie ten czas jest miarodajny dla roszczenia.
              </p>
            </div>
          </div>
        </section>

        {/* Bezpieczeństwo WiFi */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <Wifi className="inline w-6 h-6 mr-2 text-blue-600" />
            Bezpieczne WiFi na lotnisku — dlaczego VPN to nie opcja
          </h2>

          <p className="text-slate-700 mb-4">
            Publiczne WiFi lotniskowe jest podatne na ataki man-in-the-middle,
            evil twin (fałszywy hotspot) i przechwytywanie sesji.
            Dla pracownika korporacyjnego to nie jest akademickie zagrożenie —
            to realny wektor wycieku danych firmowych.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 mb-2 text-sm">Nie rób</h3>
              <ul className="text-xs text-red-800 space-y-1">
                <li>• Logowanie do systemów firmowych bez VPN</li>
                <li>• Otwieranie załączników przez publiczne WiFi</li>
                <li>• Korzystanie z sieci "Free Airport WiFi" bez weryfikacji</li>
                <li>• Pozostawianie Bluetooth włączonego w tłumie</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2 text-sm">Rób</h3>
              <ul className="text-xs text-green-800 space-y-1">
                <li>• Włącz VPN przed podłączeniem do lotniskowego WiFi</li>
                <li>• Weryfikuj nazwę sieci u personelu lub na ekranie lotniska</li>
                <li>• Korzystaj z hotspotu komórkowego przy wrażliwej pracy</li>
                <li>• Ustaw automatyczne połączenie z VPN przy obcych sieciach</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2 text-sm">Priorytet sieci</h3>
              <ol className="text-xs text-blue-800 space-y-1">
                <li>1. Hotspot komórkowy (najlepiej)</li>
                <li>2. Lounge WiFi + VPN</li>
                <li>3. Lotniskowe WiFi + VPN</li>
                <li>4. Lotniskowe WiFi bez VPN (tylko przeglądanie)</li>
              </ol>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>

          <div className="space-y-5">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy TripIt automatycznie pobiera moje rezerwacje?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Tak — TripIt może skanować Twoją skrzynkę e-mail (wymaga dostępu) lub
                  możesz ręcznie przesyłać potwierdzenia na adres trips@tripit.com.
                  Aplikacja automatycznie rozpoznaje rezerwacje lotów, hoteli, wypożyczalni i
                  układa je w chronologiczne itinerarium dostępne offline.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy aplikacja FlightAware działa w Polsce i Europie?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Tak, FlightAware obsługuje loty na całym świecie, w tym LOT, Lufthansę,
                  Ryanair i inne linie operujące w Europie. Dane historyczne lotów są dostępne
                  do pobrania bez płatnej subskrypcji (wystarczająca dla dokumentacji EC 261).
                  Płatna wersja daje alerty w czasie rzeczywistym i dane pogodowe.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy mogę wziąć dostęp do lounge przez aplikację, bez fizycznej karty?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Zależy od saloniku. Większość saloników akceptuje cyfrową kartę Priority Pass
                  w aplikacji PP lub QR kod z aplikacji karty kredytowej.
                  Boarding pass w cyfrowej formie jest standardowo akceptowany wszędzie.
                  Warto jednak mieć zapasowy dostęp przez kartę fizyczną lub zrzut ekranu,
                  bo nie wszystkie lotniska mają szybkie czytniki QR.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Jaki VPN wybrać, gdy firma nie dostarcza swojego?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Dla użytku służbowego najlepiej wybrać VPN z polityką no-logs, audytowaną
                  przez zewnętrzną firmę. NordVPN, ExpressVPN i Mullvad spełniają te kryteria.
                  Unikaj darmowych VPN — wiele z nich monetyzuje ruch użytkowników,
                  co jest gorsze niż niezaszyfrowane WiFi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Aplikacja rejestrowała opóźnienie, ale linia odmawia odszkodowania?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Dane z FlightAware czy Flightradar24 to solidny dowód w sporze z linią lotniczą.
            Jeśli masz dokumentację, ale linia odrzuca roszczenie EC 261 —
            przekaż sprawę specjalistom.
          </p>
          <a
            href={"https://claimwinger.pl?utm_source=bizneslot&utm_medium=article&utm_campaign=aplikacje-lotniskowe-podroze-sluzbowe"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Sprawdź swoje roszczenie
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
