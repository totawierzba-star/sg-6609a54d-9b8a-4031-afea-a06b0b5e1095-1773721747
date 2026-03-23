import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CreditCard, Clock, CheckCircle, AlertTriangle, ArrowRight, Shield, DollarSign, FileText } from "lucide-react";

export default function FirmowaKartaKredytowaPodrozeSluzbowe() {
  return (
    <>
      <SEO
        title="Firmowa karta kredytowa w podróży służbowej — jak działa i jak kontrolować wydatki? | bizneslot.info"
        description="Karta firmowa w delegacji: rodzaje kart (charge, credit, prepaid), limity, kontrola wydatków, rozliczenie z działem finansowym, VAT i konsekwencje użycia prywatnego przez pracownika."
        canonicalUrl="https://bizneslot.info/artykuly/firmowa-karta-kredytowa-podroze-sluzbowe"
        ogType="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Firmowa karta kredytowa w podróży służbowej — jak działa i jak kontrolować wydatki?",
          description: "Przewodnik po kartach firmowych w delegacjach: typy kart, limity, kontrola wydatków, rozliczenie i konsekwencje nadużyć.",
          datePublished: "2026-03-22",
          author: { "@type": "Organization", name: "bizneslot.info" },
          publisher: { "@type": "Organization", name: "bizneslot.info" }
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <CreditCard className="w-4 h-4" />
            <span>Finanse delegacji</span>
            <span className="mx-2">·</span>
            <Clock className="w-4 h-4" />
            <span>8 min czytania</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Firmowa karta kredytowa w podróży służbowej — jak działa i jak kontrolować wydatki?
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Karta firmowa upraszcza delegacje — pracownik nie wykłada własnych pieniędzy,
            firma ma bieżący wgląd w wydatki. Ale wymaga jasnych zasad,
            limitów i procedury rozliczenia. Jak to zorganizować sprawnie?
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg mb-10">
          <h2 className="text-lg font-bold text-green-900 mb-2">Krótka odpowiedź</h2>
          <p className="text-green-800">
            Firmowa karta w delegacji eliminuje problem wykładania gotówki przez pracownika
            i przyspiesza rozliczenie. Kluczowe zasady: <strong>karta charge</strong>
            (spłata całości co miesiąc) jest bezpieczniejsza niż kredytowa (odsetki przy
            niespłaceniu), <strong>limity per kategoria</strong> (hotel, transport, restauracje)
            ograniczają nadużycia, a <strong>integracja z TMC</strong> automatyzuje raportowanie.
            Każdy wydatek firmowy musi mieć fakturę lub paragon — samo wyciągnięcie
            z wyciągu karty nie wystarcza do KUP.
          </p>
        </div>

        {/* Rodzaje kart */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Rodzaje kart firmowych — czym się różnią?</h2>

          <div className="overflow-x-auto mb-5">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Typ karty</th>
                  <th className="p-3 text-left">Jak działa</th>
                  <th className="p-3 text-left">Kto spłaca</th>
                  <th className="p-3 text-left">Ryzyko</th>
                  <th className="p-3 text-left">Dla kogo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3 font-semibold">Charge card (obciążeniowa)</td>
                  <td className="p-3">Wydatki spłacane w całości co miesiąc</td>
                  <td className="p-3">Firma (rachunek bieżący)</td>
                  <td className="p-3 text-green-700">Niskie — brak długu obrotowego</td>
                  <td className="p-3">Standard korporacyjny</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-semibold">Credit card firmowa</td>
                  <td className="p-3">Limit kredytowy, spłata min. lub całość</td>
                  <td className="p-3">Firma lub pracownik (zależy od umowy)</td>
                  <td className="p-3 text-orange-700">Odsetki przy niespłaceniu, dług</td>
                  <td className="p-3">Firmy z potrzebą płynności</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3 font-semibold">Prepaid/wirtualna</td>
                  <td className="p-3">Zasilana konkretną kwotą przed delegacją</td>
                  <td className="p-3">Firma (zasilenie z góry)</td>
                  <td className="p-3 text-green-700">Niskie — limit = zasilona kwota</td>
                  <td className="p-3">Kontrola budżetu per delegacja</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-semibold">Karta centralna (lodge card)</td>
                  <td className="p-3">Karta bez plastiku — bilety/hotele przez TMC</td>
                  <td className="p-3">Firma (rozliczenie z TMC)</td>
                  <td className="p-3 text-green-700">Bardzo niskie — tylko pre-approved wydatki</td>
                  <td className="p-3">Duże firmy z TMC</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Rekomendacja dla firm &gt;20 pracowników podróżujących:</strong> Karta charge
              (np. American Express Corporate, Visa Business) z centralnym rozliczeniem
              + lodge card do biletów i hoteli przez TMC. To eliminuje zwroty gotówkowe
              i daje pełny wgląd w wydatki podróżne w czasie rzeczywistym.
            </p>
          </div>
        </section>

        {/* Limity i kategorie */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <Shield className="inline w-6 h-6 mr-2 text-blue-600" />
            Limity wydatków — jak ustawić żeby były skuteczne
          </h2>
          <p className="text-slate-700 mb-5">
            Sama karta bez limitów to prosta droga do niekontrolowanych wydatków.
            Skuteczna polityka kart firmowych łączy limit globalny z limitami
            per kategoria wydatków.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3">Przykładowe limity dla menedżera średniego szczebla</h3>
              <div className="space-y-2 text-sm">
                {[
                  { cat: "Hotel (na noc)", limit: "350 PLN / noc (Europa)", note: "Zgodnie z travel policy" },
                  { cat: "Restauracje", limit: "150 PLN / dzień", note: "Przy delegacji bez kolacji kontr." },
                  { cat: "Transport lokalny", limit: "100 PLN / dzień", note: "Taxi, metro, wynajem" },
                  { cat: "Lounge / fast track", limit: "200 PLN / wejście", note: "Przy lotach &gt;3h" },
                  { cat: "Limit dzienny łączny", limit: "800 PLN", note: "Suma wszystkich kategorii" },
                ].map(({ cat, limit, note }) => (
                  <div key={cat} className="flex justify-between items-start border-b border-slate-100 pb-2">
                    <div>
                      <span className="font-medium text-slate-800">{cat}</span>
                      <p className="text-xs text-slate-500">{note}</p>
                    </div>
                    <span className="font-bold text-blue-700 text-xs whitespace-nowrap ml-2">{limit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3">Kategorie wydatków do zablokowania</h3>
              <p className="text-xs text-slate-600 mb-3">Karty firmowe umożliwiają blokowanie kategorii MCC (Merchant Category Code):</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Kasyna i hazard</strong> (MCC 7995) — standardowe wyłączenie</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Sklepy z alkoholem</strong> (MCC 5921) — zakupy do domu</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Sklepy odzieżowe</strong> (MCC 5600–5699) — chyba że np. odzież robocza</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Elektronika</strong> (MCC 5734) — wymaga osobnej autoryzacji</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Blokady konfiguruje bank wydający kartę — poproś o listę dostępnych MCC</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rozliczenie */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <FileText className="inline w-6 h-6 mr-2 text-blue-600" />
            Rozliczenie karty firmowej po delegacji
          </h2>

          <div className="space-y-3 mb-6">
            {[
              {
                step: 1,
                title: "Zbierz dokumenty do każdej transakcji",
                desc: "Każda transakcja na karcie firmowej musi być potwierdzona dokumentem: faktura (z NIP firmy), paragon fiskalny lub inny dowód wydatku. Sam wyciąg bankowy to zestawienie transakcji — nie zastępuje dokumentu źródłowego do KUP."
              },
              {
                step: 2,
                title: "Opisz każdy wydatek",
                desc: "Do każdego dokumentu dodaj adnotację: cel delegacji, klient/konferencja/projekt, imię pracownika. Systemy expense management (Expensify, SAP Concur, Rydoo) robią to przy zdjęciu paragonu — OCR wyciąga dane, pracownik dodaje opis."
              },
              {
                step: 3,
                title: "Złóż raport wydatków w terminie",
                desc: "Termin rozliczenia karty firmowej to zazwyczaj 7–14 dni po zakończeniu delegacji lub zamknięciu cyklu rozliczeniowego karty. Nieterminowe rozliczenia utrudniają zamknięcie miesiąca przez dział finansowy."
              },
              {
                step: 4,
                title: "Zaznacz wydatki służbowe vs prywatne",
                desc: "Jeśli pracownik użył karty służbowej do wydatku prywatnego (omyłkowo lub świadomie), musi go wyraźnie oznaczyć i zwrócić kwotę firmie. Systemy expense management mają pole 'personal expense' — kwota jest odliczana od zwrotu lub doliczana do wynagrodzenia."
              },
              {
                step: 5,
                title: "Zatwierdź raport u przełożonego",
                desc: "Standard korporacyjny: raport wydatków zatwierdza bezpośredni przełożony pracownika (lub travel manager przy wydatkach powyżej określonego progu). Dopiero po zatwierdzeniu dział finansowy przetwarza płatność."
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

        {/* Systemy expense management */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Systemy do zarządzania wydatkami podróżnymi</h2>
          <p className="text-slate-700 mb-5">
            Ręczne rozliczanie kart firmowych przez Excela i skany faktur
            to standard małych firm. Przy 10+ pracownikach podróżujących
            warto rozważyć dedykowane narzędzie.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Narzędzie</th>
                  <th className="p-3 text-left">Dla kogo</th>
                  <th className="p-3 text-left">Integracja z kartą</th>
                  <th className="p-3 text-left">Cena orientacyjna</th>
                  <th className="p-3 text-left">Wyróżnik</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3 font-semibold">SAP Concur Expense</td>
                  <td className="p-3">Duże firmy, korporacje</td>
                  <td className="p-3 text-green-700">Tak (Amex, Visa, MC)</td>
                  <td className="p-3">od ~15 USD/user/mies.</td>
                  <td className="p-3">Integracja z SAP ERP, TMC</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-semibold">Rydoo</td>
                  <td className="p-3">SMB i enterprise</td>
                  <td className="p-3 text-green-700">Tak</td>
                  <td className="p-3">od ~9 EUR/user/mies.</td>
                  <td className="p-3">Prosty UI, OCR, integracja z ERP</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3 font-semibold">Expensify</td>
                  <td className="p-3">Startupy, SMB</td>
                  <td className="p-3 text-green-700">Tak (własna karta)</td>
                  <td className="p-3">od ~5 USD/user/mies.</td>
                  <td className="p-3">SmartScan OCR, własna karta Expensify</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-semibold">Soldo</td>
                  <td className="p-3">SMB Europa</td>
                  <td className="p-3 text-green-700">Tak (własne karty prepaid)</td>
                  <td className="p-3">od ~6 EUR/user/mies.</td>
                  <td className="p-3">Karty wirtualne per pracownik, limity w czasie rzeczywistym</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-semibold">Excel + skan faktur</td>
                  <td className="p-3">&lt;5 pracowników podróżujących</td>
                  <td className="p-3 text-slate-500">Ręcznie</td>
                  <td className="p-3">Bezpłatnie</td>
                  <td className="p-3">Działa, ale skaluje się źle</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Prywatne użycie karty firmowej */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Prywatne użycie karty firmowej — konsekwencje</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
              <h3 className="font-bold text-orange-900 mb-3">Konsekwencje podatkowe</h3>
              <ul className="space-y-2 text-sm text-orange-800">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Prywatny wydatek na karcie firmowej = przychód pracownika ze stosunku pracy (art. 12 uPIT)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Pracodawca powinien doliczyć wartość do wynagrodzenia i odprowadzić PIT + ZUS</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Jeśli pracownik zwróci kwotę — brak przychodu po jego stronie</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Wydatek prywatny zaksięgowany jako KUP firmy — ryzyko podatkowe przy kontroli US</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-900 mb-3">Konsekwencje pracownicze</h3>
              <ul className="space-y-2 text-sm text-red-800">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Celowe i powtarzające się użycie karty do celów prywatnych = ciężkie naruszenie obowiązków pracowniczych (art. 52 KP — zwolnienie dyscyplinarne)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Duże kwoty prywatnego użycia mogą być kwalifikowane jako przywłaszczenie mienia firmy</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Pracodawca może dochodzić odszkodowania w trybie cywilnym</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-blue-800">
              <strong>Zapobieganie:</strong> Jasny regulamin karty firmowej podpisany przez pracownika,
              blokady kategorii MCC, miesięczne przeglądy wyciągów przez kontrolera finansowego
              i powiadomienia SMS/push o każdej transakcji powyżej progu (np. 200 PLN)
              skutecznie eliminują większość nieautoryzowanych użyć.
            </p>
          </div>
        </section>

        {/* VAT */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <DollarSign className="inline w-6 h-6 mr-2 text-blue-600" />
            VAT od wydatków na karcie — co podlega odliczeniu?
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Wydatek</th>
                  <th className="p-3 text-left">Stawka VAT</th>
                  <th className="p-3 text-left">Odliczenie VAT</th>
                  <th className="p-3 text-left">Warunek</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3">Hotel (nocleg służbowy)</td>
                  <td className="p-3">8%</td>
                  <td className="p-3 text-red-700 font-medium">Nie</td>
                  <td className="p-3">Art. 88 ust. 1 pkt 4a uVAT — wyłączenie dla noclegów</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3">Restauracja / gastronomia</td>
                  <td className="p-3">8%</td>
                  <td className="p-3 text-red-700 font-medium">Nie</td>
                  <td className="p-3">Art. 88 ust. 1 pkt 4b uVAT — wyłączenie dla gastronomii</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3">Bilet lotniczy krajowy</td>
                  <td className="p-3">8%</td>
                  <td className="p-3 text-green-700 font-medium">Tak</td>
                  <td className="p-3">Faktura z NIP, związek z działalnością opodatkowaną</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3">Wynajem samochodu</td>
                  <td className="p-3">23%</td>
                  <td className="p-3 text-orange-700 font-medium">50% (samochód osobowy)</td>
                  <td className="p-3">Art. 86a uVAT — 50% przy samochodach osobowych</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3">Parking lotniskowy</td>
                  <td className="p-3">23%</td>
                  <td className="p-3 text-green-700 font-medium">Tak (100%)</td>
                  <td className="p-3">Faktura z NIP, parking przy lotnisku — usługa, nie auto</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3">Taxi / Uber (transport)</td>
                  <td className="p-3">8% / 23%</td>
                  <td className="p-3 text-green-700 font-medium">Tak (przy fakturze)</td>
                  <td className="p-3">Faktura z NIP na firmę — paragon nie wystarczy</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Uwaga: wyłączenia z odliczenia VAT (hotel, gastronomia) nie dotyczą KUP —
            te wydatki nadal są kosztem podatkowym w pełnej kwocie brutto.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-10" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>

          <div className="space-y-5">
            <div itemScope itemProp="mainEntity" itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy paragon z karty firmowej wystarczy do rozliczenia?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Paragon fiskalny jest dowodem wydatku — ale wyciąg z karty to nie paragon.
                  Do KUP potrzebny jest paragon lub faktura do każdej transakcji.
                  W praktyce: paragon z restauracji + opis "kolacja robocza z klientem X"
                  jest wystarczający do KUP poniżej 450 PLN. Powyżej 450 PLN lub przy zakupach
                  z podatkiem VAT — konieczna faktura z NIP.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy odszkodowanie EC 261 wypłacone na kartę firmową należy do pracownika czy firmy?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Odszkodowanie EC 261 przysługuje pasażerowi — czyli pracownikowi,
                  który był na pokładzie. Jeśli bilet opłaciła firma, odszkodowanie
                  nadal należy do pracownika (pasażera) — nie do pracodawcy,
                  chyba że umowa o pracę lub regulamin firmowy stanowi inaczej.
                  W praktyce wiele firm pozwala pracownikowi zatrzymać odszkodowanie EC 261
                  jako rekompensatę za czas i niedogodności — warto to unormować w travel policy.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy można mieć dwie karty firmowe — jedną do biletów, drugą do wydatków bieżących?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Tak — i jest to dobre rozwiązanie dla większych firm. Karta centralna
                  (lodge card) tylko do zakupów przez TMC (bilety, hotele) przy centralnym
                  rozliczeniu, plus karta indywidualna dla pracownika na wydatki bieżące
                  (transport lokalny, posiłki). Taki podział ułatwia kontrolę i raportowanie —
                  lodging i transport lotniczy automatycznie trafiają do jednego strumienia,
                  bieżące wydatki do drugiego.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Co zrobić gdy karta firmowa zostanie zgubiona lub skradziona za granicą?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Numer zastrzeżenia karty powinien być zapisany w telefonie pracownika
                  przed każdą delegacją. Większość sieci kart (Visa, Mastercard, Amex)
                  oferuje emergency cash i kartę zastępczą dostarczaną do hotelu
                  w ciągu 24–48h. Równocześnie powiadom dział finansowy firmy.
                  Wirtualna karta w telefonie (Apple Pay / Google Pay) może służyć
                  jako backup do czasu otrzymania karty zastępczej.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Bilet kupiony kartą firmową — odszkodowanie też się należy
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Niezależnie od tego, kto zapłacił za bilet — pracownik ma prawo
            do odszkodowania EC 261 za opóźnienie lub odwołanie lotu.
            Nawet jeśli firma kupiła bilet przez TMC na kartę centralną.
          </p>
          <a
            href={"https://claimwinger.pl?utm_source=bizneslot&utm_medium=article&utm_campaign=firmowa-karta-kredytowa-podroze-sluzbowe"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Sprawdź odszkodowanie EC 261
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
