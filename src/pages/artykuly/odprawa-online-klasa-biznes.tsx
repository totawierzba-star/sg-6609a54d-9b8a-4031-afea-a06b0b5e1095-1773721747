import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Clock, CheckCircle, AlertTriangle, ArrowRight, Smartphone, Calendar } from "lucide-react";

export default function OdprawaOnlineKlasaBiznes() {
  return (
    <>
      <SEO
        title="Odprawa online dla klas biznesowych — wszystko co musisz wiedzieć | bizneslot.info"
        description="Kiedy i jak zrobić odprawę online w klasie biznes? Okno check-in, wybór miejsca, boarding pass w telefonie, priorytety dla różnych linii lotniczych i co zrobić gdy system nie działa."
        canonicalUrl="https://bizneslot.info/artykuly/odprawa-online-klasa-biznes"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <Plane className="w-4 h-4" />
            <span>Lotniska</span>
            <span className="mx-2">·</span>
            <Clock className="w-4 h-4" />
            <span>7 min czytania</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Odprawa online dla klas biznesowych — wszystko co musisz wiedzieć
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Kiedy otworzyć odprawę, jak wybrać najlepsze miejsce w Business Class
            i co zrobić gdy system odmawia współpracy. Porównanie zasad
            dla LOT, Lufthansa, Emirates i innych linii.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg mb-10">
          <h2 className="text-lg font-bold text-green-900 mb-2">Krótka odpowiedź</h2>
          <p className="text-green-800">
            Odprawa online w klasie biznes działa tak samo jak w ekonomicznej, ale z kilkoma
            przywilejami: szersza pula dostępnych miejsc (często wszystkie z wyjątkiem
            zarezerwowanych przez upgrade), wcześniejsze okno check-in u niektórych linii
            (nawet 48h) i możliwość pominięcia kolejki przy odprawie bagażu dzięki
            dedykowanemu stanowisku Business. Boarding pass pobierasz do aplikacji
            linii lub do Apple/Google Wallet.
          </p>
        </div>

        {/* Okna check-in */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <Calendar className="inline w-6 h-6 mr-2 text-blue-600" />
            Okna odprawy online według linii
          </h2>
          <p className="text-slate-700 mb-5">
            Każda linia ma własne zasady dotyczące tego, kiedy można otworzyć odprawę.
            Klasa kabiny wpływa na dostępność miejsc, ale samo okno czasowe jest
            zazwyczaj takie samo dla wszystkich klas na danym locie.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Linia</th>
                  <th className="p-3 text-left">Otwarcie online check-in</th>
                  <th className="p-3 text-left">Zamknięcie</th>
                  <th className="p-3 text-left">Wcześniej dla statusu?</th>
                  <th className="p-3 text-left">Aplikacja</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3 font-semibold">LOT Polish Airlines</td>
                  <td className="p-3">24h przed odlotem</td>
                  <td className="p-3">45 min przed odlotem</td>
                  <td className="p-3 text-slate-500">Nie</td>
                  <td className="p-3">LOT Mobile</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-semibold">Lufthansa</td>
                  <td className="p-3">23h przed odlotem</td>
                  <td className="p-3">45 min (krótkie trasy) / 60 min</td>
                  <td className="p-3 text-green-700">Tak — HON Circle 36h</td>
                  <td className="p-3">Lufthansa</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3 font-semibold">Emirates</td>
                  <td className="p-3">48h przed odlotem</td>
                  <td className="p-3">60 min przed odlotem</td>
                  <td className="p-3 text-green-700">Tak — Skywards Gold+ 48h</td>
                  <td className="p-3">Emirates</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-semibold">British Airways</td>
                  <td className="p-3">24h przed odlotem</td>
                  <td className="p-3">30 min (Heathrow) / 45 min</td>
                  <td className="p-3 text-green-700">Tak — Gold/GGL 36h</td>
                  <td className="p-3">British Airways</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3 font-semibold">Air France / KLM</td>
                  <td className="p-3">30h przed odlotem</td>
                  <td className="p-3">60 min przed odlotem</td>
                  <td className="p-3 text-green-700">Tak — Platinum 48h</td>
                  <td className="p-3">Air France / KLM</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-semibold">Swiss</td>
                  <td className="p-3">23h przed odlotem</td>
                  <td className="p-3">40 min przed odlotem</td>
                  <td className="p-3 text-slate-500">Nie (razem z LH Group)</td>
                  <td className="p-3">Swiss</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-semibold">Ryanair / Wizz Air</td>
                  <td className="p-3">48h przed odlotem</td>
                  <td className="p-3">2h przed odlotem</td>
                  <td className="p-3 text-slate-500">Brak klas biznes</td>
                  <td className="p-3">Ryanair / Wizz Air</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Dane orientacyjne — linie mogą zmieniać zasady. Zawsze weryfikuj w oficjalnej aplikacji linii.
          </p>
        </section>

        {/* Wybór miejsca */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Wybór miejsca w klasie biznes przy check-in online</h2>
          <p className="text-slate-700 mb-5">
            W Business Class nie wszystkie miejsca są równe. Mapa kabiny zależy
            od konfiguracji samolotu i linii. Kilka zasad ogólnych:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3">Dla podróżujących solo</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Miejsca przy oknie (A lub K w 1-2-1) — prywatność, bezpośredni dostęp do przejścia</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Pierwszy rząd — brak ograniczeń z przedniego oparcia, łatwiejszy wysiadanie</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Unikaj miejsc przy toaletach lub galley (hałas, zapachy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>SeatGuru.com — weryfikacja konfiguracji kabiny przed wyborem</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3">Dla par / dwóch kolegów</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Środkowe siedzenia obok siebie (D/G w 1-2-1) — rozmowa bez wychylania się</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>W układzie herringbone (np. BA Club World) — wybierz ten sam "blok", nie naprzeciwko</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Niektóre siedzenia w herringbone są skierowane tyłem do kierunku lotu — sprawdź przed wyborem</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Tip:</strong> Miejsca oznaczone w SeatGuru jako żółte lub czerwone to nie mit —
              mogą oznaczać ograniczoną przestrzeń na nogi (blok galley), hałas silnikowy
              lub brak rozkładania fotela do pełnej pozycji leżącej. W klasie biznes różnica
              między "złym" a "dobrym" miejscem jest bardziej odczuwalna niż w ekonomicznej.
            </p>
          </div>
        </section>

        {/* Boarding pass */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <Smartphone className="inline w-6 h-6 mr-2 text-blue-600" />
            Boarding pass — cyfrowy czy wydrukowany?
          </h2>

          <p className="text-slate-700 mb-5">
            Większość linii i lotnisk obsługuje cyfrowy boarding pass. Dla podróżnika
            służbowego cyfrowy format ma kilka przewag — ale warto znać wyjątki.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-5">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2 text-sm">Zalety cyfrowego BP</h3>
              <ul className="text-xs text-green-800 space-y-1">
                <li>• Zawsze przy sobie w Apple/Google Wallet</li>
                <li>• Automatyczna aktualizacja przy zmianie gate</li>
                <li>• Brak ryzyka zniszczenia wydruku</li>
                <li>• Dostęp offline po zapisaniu do Wallet</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-amber-900 mb-2 text-sm">Kiedy wydrukować</h3>
              <ul className="text-xs text-amber-800 space-y-1">
                <li>• Loty do USA/Kanady — część lotnisk wymaga wydruku</li>
                <li>• Lotniska w krajach rozwijających się</li>
                <li>• Gdy bateria telefonu może nie wystarczyć</li>
                <li>• Przy problemach z aplikacją linii na miejscu</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 mb-2 text-sm">Nie akceptują cyfrowego BP</h3>
              <ul className="text-xs text-red-800 space-y-1">
                <li>• Niektóre lotniska regionalne w Azji i Afryce</li>
                <li>• Loty czarterowe — zależy od organizatora</li>
                <li>• Część stanowisk kontroli celnej przy wlocie do USA</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-800 mb-2 text-sm">Jak dodać boarding pass do Apple Wallet / Google Wallet?</h3>
            <ol className="text-sm text-slate-700 space-y-1">
              <li>1. Otwórz aplikację linii lotniczej po odprawie online</li>
              <li>2. Przejdź do sekcji "Moje loty" lub "Boarding pass"</li>
              <li>3. Kliknij "Dodaj do Wallet" (Apple) lub "Zapisz do Google Pay" (Android)</li>
              <li>4. Boarding pass pojawi się w Wallet — dostępny offline i aktualizowany przy zmianach gate</li>
            </ol>
          </div>
        </section>

        {/* Problemy z odprawą online */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Dlaczego odprawa online może nie działać?</h2>
          <p className="text-slate-700 mb-5">
            System odprawi Cię przy bramce — ale warto wiedzieć z wyprzedzeniem,
            dlaczego online check-in może być zablokowany.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Lot wymaga wizy lub dokumentu sprawdzanego przez agenta</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Loty do USA, Australii, Kanady i wielu krajów azjatyckich wymagają
                  weryfikacji dokumentów (ESTA, eTA, wiza) przez agenta naziemnego.
                  Odprawa online jest niemożliwa lub niepełna — i tak musisz pojawić się
                  przy stanowisku odprawy z dokumentami.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Bilet kupiony przez biuro podróży lub TMC z restrickcją</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Niektóre taryfy korporacyjne lub rezerwacje przez GDS (Amadeus, Sabre)
                  blokują online check-in do czasu synchronizacji danych. Spróbuj po
                  kilku godzinach od rezerwacji lub skontaktuj się z TMC.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Upgrade statusowy lub komercyjny pending</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Jeśli jesteś na liście oczekujących na upgrade do wyższej klasy,
                  online check-in może być zablokowany do przydzielenia lub odrzucenia
                  upgrade. Linia musi najpierw potwierdzić Twoje miejsce w kabinie.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Lot operowany przez innego przewoźnika (codeshare)</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Kupiłeś bilet LOT, ale lot obsługuje Lufthansa? Odprawiać musisz się
                  przez aplikację rzeczywistego operatora, nie marketingowego przewoźnika.
                  Sprawdź numer lotu — prefiks LH zamiast LO to sygnał, żeby odprawić
                  się przez stronę Lufthansy.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Bagaż ponadgabarytowy lub broń</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Przy rejestrowanym bagażu specjalnym (sprzęt sportowy, instrument muzyczny,
                  broń myśliwska) wymagana jest odprawa przy stanowisku — niezależnie od klasy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Procedura krok po kroku */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Odprawa online w klasie biznes — krok po kroku</h2>

          <div className="space-y-3">
            {[
              { step: 1, title: "Sprawdź okno check-in swojej linii", desc: "Najczęściej 24h przed odlotem. Ustaw przypomnienie — pierwsze minuty po otwarciu dają najlepszy wybór miejsc, szczególnie przy upgradach ostatniej chwili." },
              { step: 2, title: "Zaloguj się do programu lojalnościowego", desc: "Logowanie przez konto FFP (Miles & More, Miles, Flying Blue) daje pełny dostęp do mapy kabiny i umożliwia wybór ze wszystkich dostępnych miejsc w klasie biznes." },
              { step: 3, title: "Wybierz miejsce — użyj SeatGuru", desc: "Przed kliknięciem w mapę linii, otwórz SeatGuru.com i wpisz numer lotu. Sprawdź oceny miejsc pod kątem prywatności, kąta rozkładania i odległości od galley." },
              { step: 4, title: "Pobierz boarding pass do Wallet", desc: "Po potwierdzeniu miejsca, zapisz boarding pass do Apple Wallet lub Google Wallet. Upewnij się, że jest dostępny offline (ważne przy słabym zasięgu w terminalu)." },
              { step: 5, title: "Bagaż rejestrowany — stanowisko Business", desc: "Mimo odprawy online, bagaż musisz nadać w terminalu. Klasa biznes daje dostęp do dedykowanego stanowiska — skróci to czas oczekiwania do kilku minut." },
              { step: 6, title: "Zachowaj potwierdzenie odprawy", desc: "E-mail lub zrzut ekranu z numerem rezerwacji, numerem lotu i miejscem. Przydatny przy reklamacji, jeśli dojdzie do deny boarding lub zmiany miejsca przez linię." },
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

        {/* FAQ */}
        <section className="mb-10" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>

          <div className="space-y-5">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy w klasie biznes muszę robić odprawę online?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Nie jest to obowiązkowe — możesz odprawić się przy stanowisku w terminalu.
                  Jednak odprawa online daje wcześniejszy wybór miejsca, skraca czas
                  w terminalu i pozwala ominąć kolejkę przy odprawie (i tak nadasz bagaż
                  przy dedykowanym stanowisku Business, które jest krótsze).
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Co się dzieje z moim miejscem, jeśli nie zrobię odprawy online?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Zarezerwowane miejsce pozostaje za Tobą do momentu odprawy w terminalu.
                  Ryzyko pojawia się gdy lot jest przepełniony i linia szuka ochotników
                  do deny boarding — pasażerowie bez odprawy online mogą być brani
                  pod uwagę jako pierwsi, choć w klasie biznes jest to rzadkie.
                  Przy lotach dalekiego zasięgu brak online check-in nie stwarza
                  praktycznych problemów.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy mogę odprawić się online bez bagażu rejestrowanego?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Tak — jeśli lecisz z bagażem podręcznym (klasa biznes zazwyczaj daje
                  2 sztuki + bagaż osobisty), po odprawie online możesz przejść
                  bezpośrednio do kontroli bezpieczeństwa. To największa oszczędność
                  czasu przy krótkich podróżach.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy przy locie służbowym kupionym przez TMC mogę odprawić się online?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Zazwyczaj tak, ale zależy od taryfy i konfiguracji TMC. Potrzebujesz
                  numeru rezerwacji (PNR/record locator) lub numeru e-biletu widocznego
                  w potwierdzeniu od TMC. Przy problemach z online check-in skontaktuj
                  się z TMC lub z lnią bezpośrednio — problem najczęściej leży
                  w synchronizacji danych między systemem rezerwacji a systemem linii.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Lot opóźniony lub odwołany po odprawie online?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Odprawa online to dowód, że byłeś gotowy do podróży.
            Jeśli lot mimo to nie doszedł do skutku lub dotarłeś z opóźnieniem
            ponad 3 godziny — możesz mieć prawo do odszkodowania EC 261 do 600 EUR.
          </p>
          <a
            href={"https://claimwinger.pl?utm_source=bizneslot&utm_medium=article&utm_campaign=odprawa-online-klasa-biznes"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Sprawdź, czy należy Ci się odszkodowanie
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
