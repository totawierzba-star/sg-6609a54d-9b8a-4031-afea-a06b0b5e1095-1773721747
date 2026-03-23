import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Activity, Clock, CheckCircle, AlertTriangle, ArrowRight, Brain, Shield, Calendar } from "lucide-react";

export default function StresPodrozeSluzbowe() {
  return (
    <>
      <SEO
        title="Stres w podróży służbowej — jak go ograniczać i nie wypalić się na delegacjach? | bizneslot.info"
        description="Jak radzić sobie ze stresem podczas częstych podróży służbowych? Źródła stresu podróżniczego, techniki redukcji napięcia przed spotkaniami i obowiązki pracodawcy wobec pracownika podróżującego."
        canonicalUrl="https://bizneslot.info/artykuly/stres-podroze-sluzbowe"
        ogType="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Stres w podróży służbowej — jak go ograniczać i nie wypalić się na delegacjach?",
          description: "Źródła stresu podróżniczego, techniki redukcji napięcia przed spotkaniami i sygnały ostrzegawcze wypalenia zawodowego przy intensywnym kalendarzu delegacji.",
          datePublished: "2026-03-22",
          author: { "@type": "Organization", name: "bizneslot.info" },
          publisher: { "@type": "Organization", name: "bizneslot.info" }
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <Activity className="w-4 h-4" />
            <span>Zdrowie w podróży</span>
            <span className="mx-2">·</span>
            <Clock className="w-4 h-4" />
            <span>7 min czytania</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Stres w podróży służbowej — jak go ograniczać i nie wypalić się na delegacjach?
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Opóźniony lot, utracona przesiadka, spotkanie za 2 godziny i bagaż
            w innym mieście. Jak nie dopuścić, żeby logistyka delegacji
            niszczyła Cię bardziej niż sama praca?
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg mb-10">
          <h2 className="text-lg font-bold text-green-900 mb-2">Krótka odpowiedź</h2>
          <p className="text-green-800">
            Większość stresu podróżniczego pochodzi z <strong>braku kontroli nad nieprzewidywalnymi zdarzeniami</strong>
            (opóźnienia, zmiany planów) i <strong>kumulacji zmęczenia</strong> przy braku regeneracji między
            delegacjami. Strategie, które realnie działają: planowanie buforów czasowych
            (przyjeżdżasz wcześniej, nie w ostatniej chwili), procedury na wypadek problemów
            (wiesz co robić, gdy lot odpada) i twarda granica "off" po powrocie —
            co najmniej jedna doba bez planowanych obowiązków służbowych.
          </p>
        </div>

        {/* Źródła stresu */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Główne źródła stresu w podróży służbowej</h2>
          <p className="text-slate-700 mb-5">
            Stres podróżniczy różni się od stresu biurowego — jest bardziej
            nieprzewidywalny i trudniejszy do kontrolowania. Zrozumienie jego źródeł
            to pierwszy krok do zarządzania nim.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-3">
              <h3 className="font-bold text-slate-800">Stres logistyczny (zewnętrzny)</h3>
              <div className="space-y-2">
                {[
                  { label: "Opóźnienia i odwołania lotów", level: "Wysoki", color: "red" },
                  { label: "Zagubiony lub opóźniony bagaż", level: "Wysoki", color: "red" },
                  { label: "Utracone przesiadki", level: "Wysoki", color: "red" },
                  { label: "Problemy z rezerwacją hotelu", level: "Średni", color: "orange" },
                  { label: "Słabe WiFi / brak internetu", level: "Średni", color: "orange" },
                  { label: "Poruszanie się po nieznanym mieście", level: "Niski", color: "green" },
                ].map(({ label, level, color }) => (
                  <div key={label} className="flex items-center justify-between bg-slate-50 rounded p-2 text-sm">
                    <span className="text-slate-700">{label}</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      color === "red" ? "bg-red-100 text-red-700" :
                      color === "orange" ? "bg-orange-100 text-orange-700" :
                      "bg-green-100 text-green-700"
                    }`}>{level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-slate-800">Stres merytoryczny i osobisty</h3>
              <div className="space-y-2">
                {[
                  { label: "Presja wyników spotkania / negocjacji", level: "Wysoki", color: "red" },
                  { label: "Kumulacja zmęczenia przy wielu delegacjach", level: "Wysoki", color: "red" },
                  { label: "Rozłąka z rodziną przy długich wyjazdach", level: "Wysoki", color: "red" },
                  { label: "Brak prywatności i rutyny", level: "Średni", color: "orange" },
                  { label: "Nieznana kuchnia / dieta poza domem", level: "Niski", color: "green" },
                  { label: "Bariera językowa", level: "Niski", color: "green" },
                ].map(({ label, level, color }) => (
                  <div key={label} className="flex items-center justify-between bg-slate-50 rounded p-2 text-sm">
                    <span className="text-slate-700">{label}</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      color === "red" ? "bg-red-100 text-red-700" :
                      color === "orange" ? "bg-orange-100 text-orange-700" :
                      "bg-green-100 text-green-700"
                    }`}>{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Planowanie jako antystres */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <Calendar className="inline w-6 h-6 mr-2 text-blue-600" />
            Planowanie jako najskuteczniejsza strategia antystresowa
          </h2>
          <p className="text-slate-700 mb-5">
            Większość stresu podróżniczego wynika z poczucia braku kontroli.
            Dobry plan przed delegacją eliminuje całą klasę problemów, zanim się pojawią.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-900 mb-3">Checklist przed delegacją</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Numery rezerwacji (lot, hotel, wynajem) zapisane offline — nie tylko w e-mailu</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Plan B przy opóźnieniu: następny lot, alternatywna trasa, numer TMC 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Bufory czasowe: na lotnisko 30 min wcześniej niż "wymagane", przylot dzień wcześniej przy kluczowych spotkaniach</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Wszystkie dokumenty podróży zeskanowane w chmurze (paszport, ubezpieczenie, hotel)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Materiały na spotkanie pobrane offline — niezależne od internetu w trasie</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-900 mb-3">Procedury na wypadek problemów</h3>
              <p className="text-xs text-blue-700 mb-3">Wiedząc co robić w danej sytuacji, reagujesz szybciej i spokojniej:</p>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">Opóźnienie:</span>
                  <span>Dokumentuj na FlightAware, poproś o voucher na posiłek, powiadom TMC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">Odwołanie:</span>
                  <span>Zadzwoń do TMC lub linii, pytaj o następny dostępny lot i hotel jeśli nocleg konieczny</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">Zagubiony bagaż:</span>
                  <span>PIR na lotnisku, zdjęcie valizki przed lotem, numer karty kredytowej do pilnych zakupów odzieży</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">Choroba:</span>
                  <span>Numer ubezpieczyciela podróżnego zapisany w telefonie — nie szukasz w pośpiechu</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-amber-800">
              <strong>Zasada buforu:</strong> Podróżnik, który zawsze przyjeżdża na lotnisko
              "w ostatniej chwili", statystycznie doświadcza kilka razy więcej epizodów
              silnego stresu rocznie niż ten, który daje sobie 30–45 minut zapasu.
              Czas w saloniku lub przy bramce jest znacznie mniej stresujący niż
              bieg przez terminal z bagażem.
            </p>
          </div>
        </section>

        {/* Techniki redukcji stresu */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <Brain className="inline w-6 h-6 mr-2 text-blue-600" />
            Techniki redukcji stresu — co działa w praktyce
          </h2>
          <p className="text-slate-700 mb-5">
            Przy silnym stresie (opóźnienie, chaos na lotnisku, presja spotkania)
            potrzeba narzędzi, które działają w 2–10 minut — nie wielomiesięcznych
            programów mindfulness.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Oddech 4-7-8</h3>
              <p className="text-sm text-slate-700 mb-2">
                Wdech 4 sekundy → zatrzymaj 7 sekund → wydech 8 sekund.
                3–4 cykle aktywują układ przywspółczulny, obniżając tętno i kortyzon
                w ciągu 2–3 minut.
              </p>
              <p className="text-xs text-slate-500">Kiedy: przed ważnym spotkaniem, po chaotycznym przesiadce</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Zimna woda na twarz</h3>
              <p className="text-sm text-slate-700 mb-2">
                Zimna woda na twarz i nadgarstki aktywuje odruch nurkowania —
                natychmiastowe obniżenie tętna. W łazience lotniskowej lub hotelowej
                zajmuje 60 sekund.
              </p>
              <p className="text-xs text-slate-500">Kiedy: bezpośrednio po stresującym zdarzeniu</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Lista "co kontroluję"</h3>
              <p className="text-sm text-slate-700 mb-2">
                Na kartce lub w telefonie: co w tej sytuacji mogę kontrolować?
                Pisemne rozróżnienie "pod kontrolą / poza kontrolą" redukuje
                poczucie bezsilności i pozwala skupić się na działaniu.
              </p>
              <p className="text-xs text-slate-500">Kiedy: przy dłuższych zakłóceniach — opóźnienie 3h+</p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-800 mb-3">Rutyna jako kotwica stabilności</h3>
            <p className="text-sm text-slate-700 mb-3">
              Przy intensywnych delegacjach stabilność psychiczną buduje zachowanie
              przynajmniej jednego stałego elementu dnia — niezależnie od miasta i strefy czasowej.
            </p>
            <div className="grid md:grid-cols-3 gap-3 text-xs">
              <div className="bg-white border border-slate-200 rounded p-3">
                <p className="font-semibold text-slate-800 mb-1">Poranna rutyna</p>
                <p className="text-slate-600">Ten sam rytuał co w domu: kawa, 10 minut czytania, krótki spacer. Sygnalizuje mózgowi "normalny dzień".</p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-3">
                <p className="font-semibold text-slate-800 mb-1">Kontakt z rodziną</p>
                <p className="text-slate-600">Stała godzina rozmowy z rodziną (np. 21:00 czasu polskiego) — działa jako psychologiczna kotwica niezależnie od strefy.</p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-3">
                <p className="font-semibold text-slate-800 mb-1">Lekki ruch</p>
                <p className="text-slate-600">10–20 minut spaceru lub rozciągania w hotelu — obniża kortyzon, poprawia jakość snu tej nocy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Wypalenie podróżnicze */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Wypalenie podróżnicze — sygnały ostrzegawcze</h2>
          <p className="text-slate-700 mb-4">
            "Travel burnout" to realne zjawisko kliniczne, różne od zwykłego zmęczenia.
            Pojawia się przy intensywnym harmonogramie delegacji utrzymywanym
            przez wiele miesięcy bez odpowiedniej regeneracji.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
              <h3 className="font-bold text-orange-900 mb-3">Wczesne sygnały (reaguj)</h3>
              <ul className="space-y-2 text-sm text-orange-800">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Niechęć do pakowania walizki i planowania kolejnej delegacji</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Drażliwość przy drobnych problemach logistycznych</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Trudności z koncentracją mimo wystarczającego snu</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Utrata przyjemności z podróży, która kiedyś była satysfakcjonująca</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-900 mb-3">Zaawansowane sygnały (pilna rozmowa z pracodawcą)</h3>
              <ul className="space-y-2 text-sm text-red-800">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Chroniczne problemy ze snem niezależnie od lokalizacji</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Dolegliwości somatyczne (bóle głowy, żołądka, napięcie mięśniowe)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Poważne pogorszenie relacji rodzinnych spowodowane częstą nieobecnością</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Poczucie beznadziejności lub "nie mam wyjścia" wobec kalendarza delegacji</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Obowiązki pracodawcy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <Shield className="inline w-6 h-6 mr-2 text-blue-600" />
            Obowiązki pracodawcy — co firma powinna zapewnić
          </h2>

          <div className="space-y-3">
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Rozsądny harmonogram delegacji</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Kodeks pracy i przepisy o czasie pracy obowiązują również w delegacji.
                  Pracodawca nie może planować delegacji w sposób uniemożliwiający
                  odpoczynek dobowy (min. 11h nieprzerwanego odpoczynku).
                  Lot nocny + spotkanie rano tego samego dnia bez noclegu narusza tę zasadę.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Wsparcie TMC i linia alarmowa 24/7</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Pracownik w terenie przy problemach z lotem o 2 w nocy nie powinien
                  sam rozwiązywać kryzysu. TMC z infolinią 24/7 to standard w dobrze
                  zorganizowanej firmie — pracownik dzwoni, TMC rebookuje.
                  To bezpośrednio redukuje stres przy zakłóceniach podróży.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Czas wolny po powrocie z długich tras</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Dobra praktyka (i zapis w niektórych travel policy): przy powrocie
                  z delegacji powyżej 5 dni lub z lotu powyżej 8h — następny dzień
                  jako dzień regeneracji lub praca zdalna bez spotkań.
                  Inwestycja, która zwraca się obniżonym absencją i lepszą jakością pracy.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Limit delegacji miesięcznie lub dni w roku</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Niektóre firmy wpisują do travel policy lub umów maksymalną liczbę
                  nocy poza domem w roku (np. 90 nocy). Powyżej tego progu — negocjacja
                  warunków lub zmiana zakresu obowiązków. Chroni zarówno pracownika,
                  jak i firmę przed kosztownymi rotacjami wynikającymi z wypalenia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>

          <div className="space-y-5">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy mogę odmówić delegacji ze względu na nadmierny stres?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  W polskim prawie pracy pracownik może odmówić delegacji tylko w ściśle
                  określonych przypadkach (m.in. kobiety w ciąży, opiekun dziecka do 4 lat
                  bez zgody pracownika, pracownicy z orzeczonymi przeciwwskazaniami).
                  W pozostałych przypadkach odmowa może być podstawą dyscyplinarną.
                  Jednak jeśli stres jest na tyle poważny, że zagraża zdrowiu — lekarz
                  medycyny pracy może wydać zaświadczenie o przeciwwskazaniach do
                  określonego trybu pracy, które pracodawca musi respektować.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Jak rozmawiać z przełożonym o zbyt intensywnym kalendarzu delegacji?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Najskuteczniej działa rozmowa oparta na danych i kosztach, nie na
                  subiektywnym "jestem zmęczony". Przykład: "W ostatnich 3 miesiącach
                  spędziłem 45 nocy poza domem. Badania pokazują, że powyżej X nocy
                  rocznie spada wydajność i rośnie rotacja. Proponuję zmniejszenie
                  do Y nocy przez ograniczenie delegacji do klientów ABC i zastąpienie
                  części wizyt wideokonferencjami." Konkretna propozycja alternatywy
                  jest kluczowa — sama skarga nie wystarczy.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy stres z podróży służbowej może być wypadkiem przy pracy?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Jeśli zdarzenie stresowe podczas delegacji (np. napad, wypadek komunikacyjny,
                  ekstremalne warunki) spowodowało uszczerbek na zdrowiu — może być
                  zakwalifikowane jako wypadek przy pracy lub w drodze do/z pracy.
                  Przewlekły stres z podróży jako taki nie jest wypadkiem, ale może
                  być podstawą do stwierdzenia choroby zawodowej lub naruszenia
                  przepisów BHP, jeśli pracodawca nie podejmował działań zaradczych
                  mimo sygnałów od pracownika.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Jeden problem z lotem mniej to już mniej stresu
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Opóźniony lub odwołany lot to jeden z największych źródeł stresu
            w podróży służbowej. Zamiast samodzielnie walczyć z linią o odszkodowanie —
            przekaż to specjalistom i odzyskaj spokój.
          </p>
          <a
            href={"https://claimwinger.pl?utm_source=bizneslot&utm_medium=article&utm_campaign=stres-podroze-sluzbowe"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Zgłoś opóźniony lub odwołany lot
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
