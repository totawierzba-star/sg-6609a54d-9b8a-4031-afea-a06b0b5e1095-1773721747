import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight, Scale, Plane, AlertTriangle } from "lucide-react";

export default function MissedConnection() {
  return (
    <>
      <SEO
        title="Missed connection — spóźniona przesiadka. Kto odpowiada i co Ci przysługuje?"
        description="Spóźniłeś się na przesiadkę? Jeśli loty były w jednej rezerwacji, linia musi zapewnić lot zastępczy i może być zobowiązana do wypłaty odszkodowania do 600 EUR. Sprawdź szczegóły."
        canonicalUrl="https://bizneslot.info/artykuly/missed-connection-lot-przesiadka-kto-odpowiada"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Missed connection — spóźniona przesiadka. Kto odpowiada i co Ci przysługuje?",
            description:
              "Przy locie z przesiadką w jednej rezerwacji linia odpowiada za missed connection spowodowaną opóźnieniem pierwszego lotu. Pasażerowi przysługuje lot zastępczy i ewentualnie odszkodowanie EC 261/2004.",
            author: { "@type": "Organization", name: "BizneLot.info" },
            publisher: { "@type": "Organization", name: "BizneLot.info" },
            datePublished: "2025-03-22",
            dateModified: "2025-03-22",
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
                name: "Kto odpowiada za missed connection przy lotach w jednej rezerwacji?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Linia operująca lot, który spowodował opóźnienie i w efekcie utratę przesiadki. Przy jednej rezerwacji (jeden PNR) linia jest zobowiązana zapewnić lot zastępczy do celu podróży na własny koszt.",
                },
              },
              {
                "@type": "Question",
                name: "Czy przy missed connection przysługuje odszkodowanie EC 261?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak, jeśli łączne opóźnienie w końcowym celu podróży wynosi co najmniej 3 godziny. Kwota zależy od dystansu całej trasy: 250 EUR (do 1500 km), 400 EUR (1500-3500 km), 600 EUR (powyżej 3500 km, UE poza UE).",
                },
              },
              {
                "@type": "Question",
                name: "Co zrobić gdy spóźnię się na przesiadkę z winy linii?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Natychmiast zgłoś się do obsługi linii lub biurka transfer desk lotniska. Zażądaj lotu zastępczego do celu podróży. Zachowaj wszystkie boarding pasy i dokumenty. Masz prawo do posiłków i noclegu w czasie oczekiwania.",
                },
              },
              {
                "@type": "Question",
                name: "Co jeśli kupiłem odcinki jako osobne bilety i spóźniłem się na drugi lot?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Jeśli bilety były kupowane osobno (różne PNR), każda linia odpowiada tylko za swój odcinek. Opóźnienie pierwszego lotu nie obciąża drugiej linii — drugi bilet przepada na Twój koszt. To podstawowa różnica między jedną rezerwacją a osobnymi biletami.",
                },
              },
              {
                "@type": "Question",
                name: "Jak długo linia może kazać czekać na kolejny lot po missed connection?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Linia musi zaoferować lot zastępczy jak najszybciej. Nie ma ustawowego maksimum oczekiwania, ale przy długim czekaniu (powyżej 2h) masz prawo do posiłków i napojów, a jeśli konieczny nocleg — do zakwaterowania i transportu do hotelu.",
                },
              },
              {
                "@type": "Question",
                name: "Czy minimalne MCT (Minimum Connection Time) ma znaczenie dla roszczenia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "MCT to minimalny czas przesiadki wyznaczony przez lotnisko. Jeśli linia sprzedała Ci połączenie z przesiadką krótszą niż MCT, ponosiła ryzyko utraty przesiadki. Wyrok ETS C-402/07 Sturgeon potwierdza prawo do odszkodowania przy dotarciu do celu z 3h+ opóźnieniem.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-cyan-700 to-teal-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-cyan-200 text-sm mb-4">
            <Link href="/artykuly" className="hover:text-white transition-colors">
              Artykuły
            </Link>
            <span>/</span>
            <span>Prawo i Finanse</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-cyan-500/30 text-cyan-100 px-3 py-1 rounded-full text-sm font-medium">
              EC 261/2004
            </span>
            <span className="text-cyan-200 text-sm">9 min czytania</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Missed connection — spóźniona przesiadka. Kto odpowiada i co Ci przysługuje?
          </h1>
          <p className="text-xl text-cyan-100 max-w-2xl">
            Opóźniony pierwszy lot, utracona przesiadka, kilka godzin czekania na następny. Sprawdź kto ponosi odpowiedzialność i kiedy przysługuje Ci odszkodowanie do 600 EUR.
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
                Przy lotach w <strong>jednej rezerwacji</strong> (jeden PNR) linia odpowiada za missed connection
                spowodowaną opóźnieniem pierwszego odcinka — musi zapewnić <strong>lot zastępczy do celu</strong>
                na własny koszt. Jeśli w efekcie dotarłeś do celu z <strong>co najmniej 3h opóźnieniem</strong>,
                przysługuje odszkodowanie do 600 EUR. Przy osobnych biletach — ryzyko i koszt po Twojej stronie.
              </p>
            </div>
          </div>
        </div>

        {/* Kluczowe rozróżnienie */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Jeden PNR czy osobne bilety — to rozstrzyga wszystko</h2>
          <p className="text-slate-700 mb-5">
            Jedyna rzecz, która ma kluczowe znaczenie przy missed connection to czy loty były zarezerwowane
            razem czy osobno. Prawo traktuje te dwa przypadki całkowicie inaczej:
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Jedna rezerwacja (jeden PNR)
              </p>
              <ul className="text-green-800 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Linia odpowiada za całą podróż od A do C
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Obowiązkowy lot zastępczy na koszt linii
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Opieka: posiłki, nocleg, transport
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Odszkodowanie przy 3h+ opóźnieniu w celu
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="font-bold text-red-900 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Osobne bilety (dwa PNR)
              </p>
              <ul className="text-red-800 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  Każda linia odpowiada tylko za swój odcinek
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  Drugi bilet przepada — Twój koszt
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  Linia 1 nie odpowiada za spóźnienie na lot 2
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  Odszkodowanie tylko jeśli lot 1 opóźniony 3h+ sam w sobie
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-300 rounded-xl p-4">
            <p className="text-amber-900 text-sm">
              <strong>Jak sprawdzić czy masz jeden PNR?</strong> Na potwierdzeniu rezerwacji lub e-bilecie szukaj
              jednego numeru rezerwacji (kodu PNR) dla wszystkich odcinków. Jeśli masz dwa osobne e-maile
              z potwierdzeniami od różnych platform — to osobne bilety.
            </p>
          </div>
        </section>

        {/* Podstawa prawna */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Podstawa prawna — wyrok ETS Sturgeon</h2>
          <p className="text-slate-700 mb-5">
            Prawo do odszkodowania przy missed connection (gdy dotarcie do celu jest opóźnione o 3h+)
            zostało potwierdzone przez Europejski Trybunał Sprawiedliwości:
          </p>

          <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5 mb-4">
            <p className="font-semibold text-cyan-900 mb-2 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              Wyrok ETS C-402/07 i C-432/07 Sturgeon v. Condor (2009)
            </p>
            <p className="text-cyan-800 text-sm">
              Pasażerowie opóźnionych lotów mogą być traktowani na równi z pasażerami lotów odwołanych dla
              celów stosowania prawa do odszkodowania, jeżeli z powodu opóźnienia ponoszą stratę czasu
              wynoszącą co najmniej trzy godziny po przylocie do miejsca docelowego.
            </p>
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5">
            <p className="font-semibold text-cyan-900 mb-2 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              Wyrok ETS C-11/11 Folkerts v. Air France (2013)
            </p>
            <p className="text-cyan-800 text-sm">
              Pasażer lotu z przesiadką ma prawo do odszkodowania gdy dociera do końcowego miejsca
              przeznaczenia z opóźnieniem co najmniej trzech godzin — nawet jeśli indywidualne odcinki
              były punktualne lub nieznacznie opóźnione.
            </p>
          </div>
        </section>

        {/* Tabela odszkodowań */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Kwoty odszkodowania przy missed connection</h2>
          <p className="text-slate-700 mb-4">
            Kwota zależy od <strong>dystansu całej trasy</strong> (od lotniska wylotu do końcowego celu
            podróży), nie od liczby odcinków:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="text-left p-4 font-semibold">Dystans całej trasy</th>
                  <th className="text-left p-4 font-semibold">Typ lotu</th>
                  <th className="text-center p-4 font-semibold">Odszkodowanie</th>
                  <th className="text-left p-4 font-semibold">Warunek</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 text-slate-700">Do 1500 km</td>
                  <td className="p-4 text-slate-700">Dowolny</td>
                  <td className="p-4 text-center font-bold text-cyan-700">250 EUR</td>
                  <td className="p-4 text-slate-600 text-xs">Opóźnienie w celu 3h+</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50">
                  <td className="p-4 text-slate-700">1500–3500 km</td>
                  <td className="p-4 text-slate-700">Dowolny</td>
                  <td className="p-4 text-center font-bold text-cyan-700">400 EUR</td>
                  <td className="p-4 text-slate-600 text-xs">Opóźnienie w celu 3h+</td>
                </tr>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 text-slate-700">Powyżej 1500 km</td>
                  <td className="p-4 text-slate-700">Wewnątrz UE</td>
                  <td className="p-4 text-center font-bold text-cyan-700">400 EUR</td>
                  <td className="p-4 text-slate-600 text-xs">Opóźnienie w celu 3h+</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50">
                  <td className="p-4 text-slate-700">Powyżej 3500 km</td>
                  <td className="p-4 text-slate-700">UE poza UE</td>
                  <td className="p-4 text-center font-bold text-cyan-700">600 EUR</td>
                  <td className="p-4 text-slate-600 text-xs">Opóźnienie w celu 3h+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Co Ci przysługuje natychmiast */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Co Ci przysługuje natychmiast na lotnisku?</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="font-bold text-blue-900 mb-3">Zawsze (jedna rezerwacja)</p>
              <ul className="text-blue-800 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Lot zastępczy do celu podróży (jak najszybszy)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Posiłki i napoje przy oczekiwaniu powyżej 2h
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Nocleg i transport do hotelu gdy konieczny
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  2 bezpłatne rozmowy telefoniczne lub wiadomości
                </li>
              </ul>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
              <p className="font-bold text-teal-900 mb-3">Dodatkowo (opóźnienie 3h+ w celu)</p>
              <ul className="text-teal-800 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Odszkodowanie 250–600 EUR (EC 261 art. 7)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Możliwy zwrot kosztów poniesionych z powodu opóźnienia
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  Redukcja o 50% gdy linia zapewniła lot zastępczy w rozsądnym czasie
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Przykład */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Przykład: missed connection WAW–FRA–SIN</h2>

          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-4">
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                <Plane className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                <p className="font-semibold text-slate-800 text-sm">WAW — FRA</p>
                <p className="text-slate-500 text-xs">Opóźnienie +2h 15min</p>
                <p className="text-slate-500 text-xs">Linia: LOT</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                <XCircle className="w-6 h-6 text-red-500 mx-auto mb-1" />
                <p className="font-semibold text-red-800 text-sm">Przesiadka FRA</p>
                <p className="text-red-600 text-xs">Utracona</p>
                <p className="text-red-500 text-xs">MCT: 45 min, zostało 10 min</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                <Plane className="w-6 h-6 text-green-600 mx-auto mb-1" />
                <p className="font-semibold text-slate-800 text-sm">FRA — SIN</p>
                <p className="text-slate-500 text-xs">Kolejny lot: +6h</p>
                <p className="text-slate-500 text-xs">Linia: Lufthansa</p>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4 space-y-2">
              <p className="text-slate-700 text-sm">
                <strong>Krzysztof</strong>, konsultant, leciał WAW–FRA–SIN w ramach jednej rezerwacji LOT/Lufthansa
                (Star Alliance, jeden PNR). Lot WAW–FRA opóźnił się o 2h 15min. Krzysztof dotarł do Singapuru
                6,5h po planowanym czasie.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-green-800 text-sm">
                  <strong>Wynik:</strong> Dystans WAW–SIN to ok. 9300 km (UE poza UE, ponad 3500 km).
                  Opóźnienie w celu: 6,5h. Krzysztof złożył roszczenie do LOT (operator opóźnionego
                  pierwszego odcinka). Przysługuje <strong>600 EUR odszkodowania</strong> + zwrot kosztów
                  posiłków na lotnisku FRA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kontekstowe CTA */}
        <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-cyan-900 text-lg">Spóźniłeś się na przesiadkę przez linię?</p>
              <p className="text-cyan-700 text-sm mt-1">
                ClaimWinger oceni roszczenie za missed connection i poprowadzi je do właściwego przewoźnika.
                Bezpłatna ocena, wynagrodzenie tylko przy sukcesie.
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl/opozniony-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=missed-connection-przesiadka"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-800 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Sprawdź roszczenie <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Krok po kroku */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Co zrobić gdy spóźnisz się na przesiadkę?</h2>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Natychmiast zglos sie do transfer desk",
                desc: "Nie wychodz z strefy tranzytowej. Znajdz biurko transferowe linii lub lotniska i zglos utrate przesiadki. Linia musi Ci natychmiast zaproponowac lot zastepczy — masz do tego prawo.",
                color: "bg-cyan-100 text-cyan-700",
              },
              {
                step: "2",
                title: "Zachowaj wszystkie boarding pasy i dokumenty",
                desc: "Karty pokladowe wszystkich odcinkow, potwierdzenie rezerwacji z numerem PNR, dowody wydatkow na lotnisku (paragony za jedzenie, napoje, nocleg). Bedziesz ich potrzebowac do roszczenia.",
                color: "bg-blue-100 text-blue-700",
              },
              {
                step: "3",
                title: "Udokumentuj opoznienie pierwszego lotu",
                desc: "Zapisz rzeczywista godzine ladowania lub przylotu na FRA/hub. Mozesz uzyc FlightRadar24 lub FlightAware po fakcie. Opoznienie musi byc potwierdzone — to podstawa roszczenia.",
                color: "bg-purple-100 text-purple-700",
              },
              {
                step: "4",
                title: "Zglос roszczenie pisemnie do operatora winnego odcinka",
                desc: "Po powrocie wyslij pismo do linii odpowiedzialnej za opozniony odcinek. Powolaj sie na EC 261/2004 art. 7 i wyroki Sturgeon (C-402/07) i Folkerts (C-11/11). Daj 30 dni na odpowiedz.",
                color: "bg-teal-100 text-teal-700",
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
              <h3 className="text-2xl font-bold mb-2">Utracona przesiadka i wielogodzinne opóźnienie w celu?</h3>
              <p className="text-slate-300 text-sm">
                ClaimWinger przeprowadzi Cię przez roszczenie za missed connection.
                Bez opłat z góry, wynagrodzenie tylko przy sukcesie.
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl?utm_source=bizneslot&utm_medium=article&utm_campaign=missed-connection-przesiadka-cta"
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
          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {[
              {
                q: "Kto odpowiada za missed connection przy lotach w jednej rezerwacji?",
                a: "Linia operująca lot, który spowodował opóźnienie i w efekcie utratę przesiadki. Przy jednej rezerwacji (jeden PNR) linia jest zobowiązana zapewnić lot zastępczy do celu podróży na własny koszt.",
              },
              {
                q: "Czy przy missed connection przysługuje odszkodowanie EC 261?",
                a: "Tak, jeśli łączne opóźnienie w końcowym celu podróży wynosi co najmniej 3 godziny. Kwota zależy od dystansu całej trasy: 250 EUR (do 1500 km), 400 EUR (1500-3500 km), 600 EUR (powyżej 3500 km, UE poza UE).",
              },
              {
                q: "Co zrobić gdy spóźnię się na przesiadkę z winy linii?",
                a: "Natychmiast zgłoś się do obsługi linii lub biurka transfer desk lotniska. Zażądaj lotu zastępczego do celu podróży. Zachowaj wszystkie boarding pasy i dokumenty. Masz prawo do posiłków i noclegu w czasie oczekiwania.",
              },
              {
                q: "Co jeśli kupiłem odcinki jako osobne bilety i spóźniłem się na drugi lot?",
                a: "Jeśli bilety były kupowane osobno (różne PNR), każda linia odpowiada tylko za swój odcinek. Opóźnienie pierwszego lotu nie obciąża drugiej linii — drugi bilet przepada na Twój koszt.",
              },
              {
                q: "Jak długo linia może kazać czekać na kolejny lot po missed connection?",
                a: "Linia musi zaoferować lot zastępczy jak najszybciej. Przy długim czekaniu (powyżej 2h) masz prawo do posiłków i napojów, a jeśli konieczny nocleg — do zakwaterowania i transportu do hotelu.",
              },
              {
                q: "Czy minimalne MCT (Minimum Connection Time) ma znaczenie dla roszczenia?",
                a: "MCT to minimalny czas przesiadki wyznaczony przez lotnisko. Jeśli linia sprzedała Ci połączenie z przesiadką krótszą niż MCT i doszło do missed connection — linia ponosiła to ryzyko od początku, co wzmacnia Twoje roszczenie.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
                itemScope
                itemType="https://schema.org/Question"
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
              href="/artykuly/lot-polaczony-opozniony-odszkodowanie-za-kazdy-odcinek"
              className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-cyan-400 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-900 text-sm mb-1">
                Lot połączony opóźniony — odszkodowanie za każdy odcinek?
              </p>
              <p className="text-slate-500 text-xs">Jedno odszkodowanie od opóźnienia w celu końcowym</p>
            </Link>
            <Link
              href="/artykuly/codeshare-ec261-ktory-przewoznik-odpowiada"
              className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-cyan-400 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-900 text-sm mb-1">
                Codeshare a EC 261 — który przewoźnik odpowiada?
              </p>
              <p className="text-slate-500 text-xs">Jak ustalić operatora odpowiedzialnego za roszczenie</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
