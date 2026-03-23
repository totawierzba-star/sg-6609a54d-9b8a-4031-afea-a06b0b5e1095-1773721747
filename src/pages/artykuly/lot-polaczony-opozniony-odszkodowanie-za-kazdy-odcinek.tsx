import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, XCircle, AlertTriangle, ArrowRight, Scale, Clock, Plane, RefreshCw } from "lucide-react";

export default function LotPolaczonyOpozniony() {
  return (
    <>
      <SEO
        title="Lot połączony opóźniony — odszkodowanie za każdy odcinek? EC 261/2004"
        description="Przy locie połączonym liczy się opóźnienie w końcowym celu podróży, nie na przesiadce. Sprawdź kiedy należy się odszkodowanie do 600 EUR i jak udokumentować roszczenie."
        canonicalUrl="https://bizneslot.info/artykuly/lot-polaczony-opozniony-odszkodowanie-za-kazdy-odcinek"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Lot połączony opóźniony — czy należy się odszkodowanie za każdy odcinek?",
            description:
              "Przy locie połączonym odszkodowanie EC 261/2004 liczy się od opóźnienia w końcowym celu podróży, nie na każdym odcinku z osobna.",
            author: { "@type": "Organization", name: "BizneLot.info" },
            publisher: { "@type": "Organization", name: "BizneLot.info" },
            datePublished: "2025-03-21",
            dateModified: "2025-03-21",
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
                name: "Czy za opóźnienie na każdym odcinku lotu połączonego należy się osobne odszkodowanie?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nie. EC 261/2004 liczy jedno odszkodowanie od opóźnienia w końcowym celu podróży, nie za każdy odcinek z osobna. Nawet jeśli spóźniłeś się na przesiadkę z winy linii — liczy się łączne opóźnienie do miejsca docelowego.",
                },
              },
              {
                "@type": "Question",
                name: "Co się dzieje gdy spóźnię się na przesiadkę przez opóźnienie pierwszego lotu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Linia jest zobowiązana zapewnić Ci lot zastępczy na własny koszt. Jeśli łączne opóźnienie w celu podróży wyniesie ≥3h, przysługuje odszkodowanie do 600 EUR.",
                },
              },
              {
                "@type": "Question",
                name: "Czy odszkodowanie za lot połączony zależy od tego, ile odcinków ma podróż?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nie. Liczba odcinków nie ma znaczenia — istotny jest dystans z lotniska wylotu do końcowego celu podróży oraz łączne opóźnienie po dotarciu do miejsca docelowego.",
                },
              },
              {
                "@type": "Question",
                name: "Kiedy odszkodowanie za lot połączony wynosi 600 EUR?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "600 EUR przysługuje gdy dystans podróży przekracza 3500 km i lot łączy lotnisko UE z lotniskiem poza UE, lub gdy dystans między lotniskiem UE a celem przekracza 3500 km. Przy lotach wewnątrz UE powyżej 1500 km — 400 EUR.",
                },
              },
              {
                "@type": "Question",
                name: "Czy rezerwacja odcinków u różnych linii lotniczych wpływa na prawo do odszkodowania?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak, istotnie. Jeśli odcinki były kupione w ramach jednej rezerwacji (jeden PNR), obowiązują zasady lotu połączonego. Jeśli kupiłeś osobne bilety — każdy lot traktowany jest niezależnie i odpowiedzialność jest dzielona.",
                },
              },
              {
                "@type": "Question",
                name: "Jak udowodnić opóźnienie w końcowym celu podróży?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Zachowaj karty pokładowe wszystkich odcinków, numer PNR z rezerwacji i dokumentuj rzeczywistą godzinę lądowania w celu podróży (np. powiadomieniami SMS/e-mail z linii lub rejestrem z aplikacji FlightRadar24).",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
            <Link href="/artykuly" className="hover:text-white transition-colors">
              Artykuły
            </Link>
            <span>/</span>
            <span>Prawo i Finanse</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-500/30 text-blue-100 px-3 py-1 rounded-full text-sm font-medium">
              EC 261/2004
            </span>
            <span className="text-blue-200 text-sm flex items-center gap-1">
              <Clock className="w-4 h-4" /> 9 min czytania
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Lot połączony opóźniony — czy należy się odszkodowanie za każdy odcinek?
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Jedno odszkodowanie, jedno roszczenie. Dowiedz się jak EC 261/2004 traktuje loty z przesiadkami i kiedy spóźniona przesiadka daje Ci prawo do nawet 600 EUR.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl p-6 mb-10">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-bold text-green-900 text-lg mb-1">Szybka odpowiedź</p>
              <p className="text-green-800">
                Nie — odszkodowanie za lot połączony przyznawane jest <strong>raz</strong>, od łącznego opóźnienia
                w <strong>końcowym celu podróży</strong>, nie za każdy odcinek osobno. Kwota (250/400/600 EUR) zależy
                od całkowitego dystansu trasy, nie liczby przesiadek. Wystarczy ≥3 godziny opóźnienia na miejscu
                docelowym.
              </p>
            </div>
          </div>
        </div>

        {/* Zasada ogólna */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Jak EC 261/2004 traktuje loty z przesiadkami?</h2>
          <p className="text-slate-700 mb-4">
            Rozporządzenie EC 261/2004 w art. 2(h) definiuje <em>„końcowy cel podróży"</em> jako lotnisko docelowe widniejące
            na bilecie lub — przy locie połączonym — ostatni punkt docelowy podróży, do którego pasażer dociera po
            odbyciu wszystkich odcinków. To kluczowa zasada: <strong>liczy się całość, nie poszczególne etapy</strong>.
          </p>
          <p className="text-slate-700 mb-4">
            Europejski Trybunał Sprawiedliwości potwierdził tę zasadę w sprawie <strong>Folkerts v. Air France (C-11/11, 2013)</strong>:
            pasażer lotu połączonego, który przyleciał do celu z 3-godzinnym opóźnieniem z powodu spóźnionego połączenia,
            zachowuje prawo do odszkodowania — niezależnie od tego, czy poszczególne odcinki były punktualne.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-600" />
              Wyrok ETS C-11/11 Folkerts v. Air France
            </p>
            <p className="text-slate-600 text-sm">
              „Artykuł 7 rozporządzenia nr 261/2004 należy interpretować w ten sposób, że pasażer lotu z przesiadką,
              który dociera do końcowego miejsca przeznaczenia z opóźnieniem co najmniej trzech godzin, ma prawo do
              odszkodowania, jeżeli opóźnienie to jest spowodowane naruszeniem przez przewoźnika jego zobowiązań."
            </p>
          </div>
        </section>

        {/* Tabela kwot */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Kwoty odszkodowania — lot połączony</h2>
          <p className="text-slate-700 mb-5">
            Kwota zależy od <strong>dystansu całej trasy</strong> (od pierwszego lotniska wylotu do końcowego celu podróży),
            nie od liczby odcinków. Obowiązuje identyczna tabela jak dla lotów bezpośrednich:
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="text-left p-4 font-semibold">Dystans całej trasy</th>
                  <th className="text-left p-4 font-semibold">Typ lotu</th>
                  <th className="text-center p-4 font-semibold">Odszkodowanie</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 text-slate-700">Do 1500 km</td>
                  <td className="p-4 text-slate-700">Dowolny</td>
                  <td className="p-4 text-center font-bold text-blue-700">250 EUR</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50 hover:bg-slate-100">
                  <td className="p-4 text-slate-700">1500–3500 km</td>
                  <td className="p-4 text-slate-700">Wewnątrz UE lub lot spoza UE</td>
                  <td className="p-4 text-center font-bold text-blue-700">400 EUR</td>
                </tr>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 text-slate-700">Powyżej 3500 km</td>
                  <td className="p-4 text-slate-700">Wewnątrz UE</td>
                  <td className="p-4 text-center font-bold text-blue-700">400 EUR</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50 hover:bg-slate-100">
                  <td className="p-4 text-slate-700">Powyżej 3500 km</td>
                  <td className="p-4 text-slate-700">UE ↔ poza UE</td>
                  <td className="p-4 text-center font-bold text-blue-700">600 EUR</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            * Redukcja o 50% możliwa gdy linia zaoferowała alternatywny lot docierający w ciągu 2/3/4 godzin od pierwotnego planu.
          </p>
        </section>

        {/* Scenariusze */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Kiedy dostaniesz odszkodowanie, a kiedy nie?</h2>

          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900 mb-1">TAK — odszkodowanie przysługuje</p>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Spóźniłeś się na przesiadkę przez opóźnienie pierwszego lotu i dotarłeś do celu ≥3h później</li>
                    <li>• Lot zastępczy po przegranej przesiadce dowiózł Cię ≥3h po czasie</li>
                    <li>• Jeden z odcinków został odwołany i spowodował ≥3h opóźnienie w celu podróży</li>
                    <li>• Linia przebookingowała Cię na inny lot, który dotarł ≥3h po czasie</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-900 mb-1">NIE — odszkodowanie nie przysługuje</p>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Spóźniłeś się na przesiadkę, ale lot zastępczy dowiózł Cię do celu z &lt;3h opóźnieniem</li>
                    <li>• Opóźnienie wynikło z nadzwyczajnych okoliczności (burza, strajk ATC, pandemia)</li>
                    <li>• Kupiłeś odcinki jako osobne bilety — linia 1 nie odpowiada za lot 2</li>
                    <li>• Opóźniony był tylko pośredni odcinek, ale do celu dotarłeś punktualnie</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jeden PNR vs dwa bilety */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Jeden PNR czy dwa bilety — kluczowa różnica</h2>
          <p className="text-slate-700 mb-5">
            Najczęstszy błąd pasażerów: rezerwacja tanich lotów osobno (np. Ryanair WAW→FCO + Alitalia FCO→NYC)
            zamiast w jednej rezerwacji. Konsekwencje są poważne:
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <Plane className="w-5 h-5" />
                Jedna rezerwacja (jeden PNR)
              </p>
              <ul className="text-blue-800 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Linia odpowiada za całą podróż od A do C
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Spóźniona przesiadka → linia musi zapewnić lot zastępczy
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Odszkodowanie liczone od dystansu A→C
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Wystarczy jedno roszczenie do jednego przewoźnika
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Dwa osobne bilety
              </p>
              <ul className="text-orange-800 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  Każda linia odpowiada tylko za swój odcinek
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  Spóźnienie na lot 2 to Twój problem — nie linia 1
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  Odszkodowanie tylko za odcinek opóźniony ≥3h
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  Ryzyko utraty całego drugiego biletu bez zwrotu
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-5 bg-amber-50 border border-amber-300 rounded-xl p-4">
            <p className="text-amber-900 text-sm font-medium">
              <strong>Wskazówka dla podróży służbowych:</strong> Zawsze rezerwuj loty z przesiadką w jednej transakcji
              przez ten sam serwis lub bezpośrednio u przewoźnika. Upewnij się, że wszystkie odcinki mają ten sam numer PNR
              lub są powiązane w jednym potwierdzeniu rezerwacji.
            </p>
          </div>
        </section>

        {/* Przykład */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Przykład z życia: WAW → FRA → NYC</h2>

          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
            <div className="grid md:grid-cols-3 gap-4 mb-5">
              <div className="bg-white rounded-lg border border-slate-200 p-4 text-center">
                <Plane className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-bold text-slate-800">Odcinek 1</p>
                <p className="text-slate-600 text-sm">WAW → FRA</p>
                <p className="text-slate-500 text-xs mt-1">Opóźnienie: +2h</p>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4 text-center">
                <RefreshCw className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="font-bold text-slate-800">Przesiadka FRA</p>
                <p className="text-slate-600 text-sm">Spóźnił się na lot</p>
                <p className="text-slate-500 text-xs mt-1">Nowy lot +4h później</p>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4 text-center">
                <Plane className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-bold text-slate-800">Odcinek 2</p>
                <p className="text-slate-600 text-sm">FRA → NYC</p>
                <p className="text-slate-500 text-xs mt-1">Łączne opóźnienie: +4h</p>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <p className="text-slate-700 text-sm mb-2">
                <strong>Marcin</strong>, menedżer z Warszawy, leciał na spotkanie do Nowego Jorku przez Frankfurt. Lot WAW→FRA
                opóźnił się o 2 godziny z powodu technicznego usterki samolotu. Marcin spóźnił się na połączenie FRA→NYC.
                Lufthansa przebookowała go na następny lot — dotarł do NYC 4 godziny po planowanym terminie.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-green-800 text-sm">
                  <strong>Wynik:</strong> Marcin złożył jedno roszczenie do Lufthansa (operator lotu WAW→FRA).
                  Dystans WAW→NYC to ok. 7800 km → trasa UE↔poza UE &gt;3500 km → <strong>600 EUR odszkodowania</strong>.
                  Usterkę techniczną Trybunał Sprawiedliwości nie uznaje za nadzwyczajną okoliczność.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kontekstowe CTA */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-blue-900 text-lg">Spóźniłeś się na przesiadkę przez linię lotniczą?</p>
              <p className="text-blue-700 text-sm mt-1">
                Sprawdź swoje roszczenie za opóźniony lot połączony — ClaimWinger oceni je bezpłatnie w 2 minuty.
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl/opozniony-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=lot-polaczony-odszkodowanie"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Sprawdź roszczenie <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Jak złożyć roszczenie */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Jak złożyć roszczenie za lot połączony — krok po kroku</h2>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Zachowaj wszystkie karty pokładowe",
                desc: "Boarding pasy wszystkich odcinków oraz dowód opóźnienia w celu podróży (powiadomienie e-mail, SMS, zrzut ekranu z aplikacji). Zapisz numer PNR — udowadnia, że to była jedna rezerwacja.",
                color: "bg-blue-100 text-blue-700",
              },
              {
                step: "2",
                title: "Ustal operatora odpowiedzialnego",
                desc: "Przy jednej rezerwacji wieloetapowej — roszczenie kierujesz do przewoźnika operującego lot, który spowodował opóźnienie na przesiadce. Zazwyczaj jest to operator pierwszego opóźnionego odcinka.",
                color: "bg-purple-100 text-purple-700",
              },
              {
                step: "3",
                title: "Złóż reklamację pisemnie",
                desc: "Wyślij do linii lotniczej pisemne roszczenie z numerem lotu, datą, PNR, informacją o opóźnieniu w celu podróży i żądaną kwotą. Daj 30 dni na odpowiedź.",
                color: "bg-teal-100 text-teal-700",
              },
              {
                step: "4",
                title: "Eskaluj przy braku odpowiedzi",
                desc: "Brak reakcji → ULC (Urząd Lotnictwa Cywilnego) lub e-Sąd. Alternatywnie: specjalistyczna firma roszczeniowa przejęła sprawę bez opłat z góry (sukces = prowizja).",
                color: "bg-orange-100 text-orange-700",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${item.color}`}>
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dark CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 mb-12 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Lot połączony opóźniony? Sprawdź ile Ci się należy.</h3>
              <p className="text-slate-300 text-sm">
                ClaimWinger specjalizuje się w roszczeniach za loty z przesiadkami. Bezpłatna weryfikacja, wynagrodzenie tylko przy sukcesie.
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl?utm_source=bizneslot&utm_medium=article&utm_campaign=lot-polaczony-odszkodowanie-cta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-7 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Złóż roszczenie <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>
          <div className="space-y-4">
            {[
              {
                q: "Czy za opóźnienie na każdym odcinku lotu połączonego należy się osobne odszkodowanie?",
                a: "Nie. EC 261/2004 liczy jedno odszkodowanie od opóźnienia w końcowym celu podróży, nie za każdy odcinek z osobna. Nawet jeśli spóźniłeś się na przesiadkę z winy linii — liczy się łączne opóźnienie do miejsca docelowego.",
              },
              {
                q: "Co się dzieje gdy spóźnię się na przesiadkę przez opóźnienie pierwszego lotu?",
                a: "Linia jest zobowiązana zapewnić Ci lot zastępczy na własny koszt. Jeśli łączne opóźnienie w celu podróży wyniesie ≥3h, przysługuje odszkodowanie do 600 EUR.",
              },
              {
                q: "Czy odszkodowanie za lot połączony zależy od tego, ile odcinków ma podróż?",
                a: "Nie. Liczba odcinków nie ma znaczenia — istotny jest dystans z lotniska wylotu do końcowego celu podróży oraz łączne opóźnienie po dotarciu do miejsca docelowego.",
              },
              {
                q: "Kiedy odszkodowanie za lot połączony wynosi 600 EUR?",
                a: "600 EUR przysługuje gdy dystans podróży przekracza 3500 km i lot łączy lotnisko UE z lotniskiem poza UE, lub gdy dystans między lotniskiem UE a celem przekracza 3500 km. Przy lotach wewnątrz UE powyżej 1500 km — 400 EUR.",
              },
              {
                q: "Czy rezerwacja odcinków u różnych linii lotniczych wpływa na prawo do odszkodowania?",
                a: "Tak, istotnie. Jeśli odcinki były kupione w ramach jednej rezerwacji (jeden PNR), obowiązują zasady lotu połączonego. Jeśli kupiłeś osobne bilety — każdy lot traktowany jest niezależnie i odpowiedzialność jest dzielona.",
              },
              {
                q: "Jak udowodnić opóźnienie w końcowym celu podróży?",
                a: "Zachowaj karty pokładowe wszystkich odcinków, numer PNR z rezerwacji i dokumentuj rzeczywistą godzinę lądowania w celu podróży (np. powiadomieniami SMS/e-mail z linii lub rejestrem z aplikacji FlightRadar24).",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
                itemScope
                itemProp="mainEntity" itemType="https://schema.org/Question"
              >
                <p className="font-semibold text-slate-900 mb-2" itemProp="name">
                  {item.q}
                </p>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-600 text-sm" itemProp="text">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Powiązane artykuły</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/artykuly/ile-wynosi-odszkodowanie-opozniony-lot-sluzbowy"
              className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-900 text-sm mb-1">
                Ile wynosi odszkodowanie za opóźniony lot służbowy?
              </p>
              <p className="text-slate-500 text-xs">Pełna tabela 250/400/600 EUR i warunki przyznania</p>
            </Link>
            <Link
              href="/artykuly/kiedy-lot-jest-uznawany-za-odwolany-prawo-ue"
              className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-900 text-sm mb-1">
                Kiedy lot jest uznawany za odwołany według prawa UE?
              </p>
              <p className="text-slate-500 text-xs">Definicja, przypadki i progi powiadomienia</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
