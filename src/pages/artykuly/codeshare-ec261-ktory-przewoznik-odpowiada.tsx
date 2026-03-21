import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, XCircle, AlertTriangle, ArrowRight, Scale, Plane, Building2 } from "lucide-react";

export default function CodeshareEc261() {
  return (
    <>
      <SEO
        title="Codeshare a EC 261/2004 — który przewoźnik odpowiada za odszkodowanie?"
        description="Przy locie codeshare odszkodowanie EC 261/2004 wypłaca przewoźnik operujący (wykonujący) lot — nie marketingowy. Sprawdź jak to ustalić i do kogo kierować roszczenie."
        canonicalUrl="https://bizneslot.info/artykuly/codeshare-ec261-ktory-przewoznik-odpowiada"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Codeshare a EC 261/2004 — który przewoźnik odpowiada za odszkodowanie?",
            description:
              "Przy locie codeshare za odszkodowanie EC 261/2004 odpowiada przewoźnik operujący (faktycznie wykonujący lot), nie przewoźnik marketingowy, pod którego kodem kupiłeś bilet.",
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
                name: "Kto odpowiada za odszkodowanie EC 261 na locie codeshare?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Odpowiada przewoźnik operujący (operating carrier) — ten, który faktycznie wykonuje lot i obsługuje samolot. Nie ma znaczenia, pod czyim kodem kupiłeś bilet.",
                },
              },
              {
                "@type": "Question",
                name: "Jak sprawdzić kto jest przewoźnikiem operującym lot codeshare?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Na karcie pokładowej lub potwierdzeniu rezerwacji znajdziesz dwie informacje: numer lotu (np. LO 234) to kod marketingowy, a 'operated by' lub 'wykonywany przez' wskazuje faktycznego operatora. Możesz też sprawdzić na FlightRadar24 wpisując numer lotu.",
                },
              },
              {
                "@type": "Question",
                name: "Czy mogę złożyć roszczenie do linii, u której kupiłem bilet codeshare?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Formalnie roszczenie EC 261 kierujesz do operatora lotu. Jednak art. 3 ust. 5 EC 261/2004 zobowiązuje przewoźnika marketingowego do poinformowania pasażera o danych operatora. Część linii przekieruje Twoje roszczenie samodzielnie.",
                },
              },
              {
                "@type": "Question",
                name: "Czy loty codeshare są objęte EC 261/2004?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak. Rozporządzenie stosuje się niezależnie od struktury umowy codeshare. Kluczowe jest czy lot był wykonywany z lotniska UE lub przez przewoźnika UE do UE (dla lotów spoza UE).",
                },
              },
              {
                "@type": "Question",
                name: "Co jeśli przewoźnik operujący nie jest z UE a przewoźnik marketingowy jest z UE?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "EC 261/2004 stosuje się gdy lot wylatuje z lotniska UE (niezależnie od narodowości operatora) LUB gdy lot leci do UE i jest operowany przez przewoźnika UE. Jeśli lot wylatuje spoza UE a operator jest spoza UE — rozporządzenie nie obowiązuje, nawet jeśli bilet kupiłeś u linii unijnej.",
                },
              },
              {
                "@type": "Question",
                name: "Jak wygląda sytuacja gdy spóźnię się na przesiadkę na locie codeshare?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Jeśli oba odcinki były w jednej rezerwacji (jeden PNR), zasady są identyczne jak dla każdego lotu połączonego — liczy się opóźnienie w końcowym celu podróży. Roszczenie kierujesz do operatora lotu, który spowodował opóźnienie.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-indigo-200 text-sm mb-4">
            <Link href="/artykuly" className="hover:text-white transition-colors">
              Artykuły
            </Link>
            <span>/</span>
            <span>Prawo i Finanse</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-indigo-500/30 text-indigo-100 px-3 py-1 rounded-full text-sm font-medium">
              EC 261/2004
            </span>
            <span className="text-indigo-200 text-sm">8 min czytania</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Codeshare a EC 261/2004 — który przewoźnik odpowiada za odszkodowanie?
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            Kupiłeś bilet LOT-em, ale leciałeś samolotem United Airlines? Sprawdź do kogo złożyć roszczenie i dlaczego nazwa na bilecie nie zawsze znaczy odpowiedzialność.
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
                Za odszkodowanie EC 261/2004 odpowiada <strong>przewoźnik operujący</strong> — ten, który faktycznie
                wykonuje lot i obsługuje samolot. Nie ma znaczenia, pod czyim kodem (numerem lotu) kupiłeś bilet.
                Jeśli leciałeś samolotem United Airlines na trasie sprzedanej przez LOT — roszczenie kierujesz
                do United Airlines (o ile lot wylatywał z UE).
              </p>
            </div>
          </div>
        </div>

        {/* Czym jest codeshare */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Czym jest lot codeshare?</h2>
          <p className="text-slate-700 mb-4">
            Codeshare to umowa między liniami lotniczymi, w której jedna linia (<strong>marketingowa</strong>) sprzedaje
            miejsca na locie faktycznie operowanym przez inną linię (<strong>operującą</strong>). Z perspektywy pasażera
            wygląda to tak: kupujesz bilet LOT-u z numerem lotu LO 5345, ale na lotnisku okazuje się, że samolot
            należy do Swiss, a na karcie pokładowej widnieje &ldquo;operated by Swiss&rdquo;.
          </p>
          <p className="text-slate-700 mb-4">
            Codeshare jest powszechną praktyką w sojuszach lotniczych (Star Alliance, oneworld, SkyTeam) i pozwala
            liniom oferować siatki połączeń znacznie wykraczające poza własne floty. W podróżach służbowych
            zdarza się to regularnie — szczególnie na trasach dalekodystansowych.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="font-semibold text-slate-800 mb-3">Przykład codeshare w praktyce:</p>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                <Building2 className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-slate-700">Kupujesz bilet u</p>
                <p className="text-blue-700 font-bold">LOT Polish Airlines</p>
                <p className="text-slate-500 text-xs mt-1">numer lotu: LO 5345</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                <Plane className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <p className="font-semibold text-slate-700">Faktycznie leci</p>
                <p className="text-purple-700 font-bold">Swiss International</p>
                <p className="text-slate-500 text-xs mt-1">operated by: LX 1234</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                <Scale className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="font-semibold text-slate-700">Roszczenie EC 261 do</p>
                <p className="text-green-700 font-bold">Swiss International</p>
                <p className="text-slate-500 text-xs mt-1">jako operator lotu</p>
              </div>
            </div>
          </div>
        </section>

        {/* Co mówi EC 261 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Co mówi EC 261/2004 o codeshare?</h2>
          <p className="text-slate-700 mb-4">
            Rozporządzenie EC 261/2004 w <strong>art. 2(b)</strong> definiuje „przewoźnika lotniczego wykonującego przewóz"
            jako przewoźnika, który wykonuje lub zamierza wykonać lot w ramach umowy zawartej z pasażerem, albo
            w imieniu innej osoby prawnej lub fizycznej posiadającej umowę z tym pasażerem.
          </p>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mb-5">
            <p className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              Art. 3 ust. 5 EC 261/2004
            </p>
            <p className="text-indigo-800 text-sm">
              „Rozporządzenie niniejsze stosuje się do przewoźnika lotniczego wykonującego przewóz, który nie posiada
              umowy z pasażerem, ale wykonuje zobowiązania wynikające z tej umowy. W takim przypadku przewoźnik
              lotniczy, który zawarł umowę z pasażerem, informuje go o tożsamości przewoźnika wykonującego przewóz."
            </p>
          </div>

          <p className="text-slate-700">
            Innymi słowy: <strong>obowiązki wobec pasażera (odszkodowanie, opieka, zwrot kosztów) spoczywają
            na operatorze lotu</strong>. Przewoźnik marketingowy ma obowiązek poinformować Cię, kto faktycznie
            wykonuje lot — ale sam nie ponosi odpowiedzialności za opóźnienie czy odwołanie.
          </p>
        </section>

        {/* Tabela zakresów */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Kiedy EC 261 obowiązuje przy codeshare?</h2>
          <p className="text-slate-700 mb-5">
            Zakres rozporządzenia zależy od miejsca wylotu i narodowości operatora — nie przewoźnika marketingowego:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="text-left p-4 font-semibold">Lot wylatuje z</th>
                  <th className="text-left p-4 font-semibold">Operator</th>
                  <th className="text-center p-4 font-semibold">EC 261 obowiązuje?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 text-slate-700">Lotnisko UE (np. WAW, FRA)</td>
                  <td className="p-4 text-slate-700">Dowolny</td>
                  <td className="p-4 text-center font-bold text-green-700">TAK</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50 hover:bg-slate-100">
                  <td className="p-4 text-slate-700">Lotnisko spoza UE (np. JFK, DXB)</td>
                  <td className="p-4 text-slate-700">Linia UE (np. LOT, Lufthansa)</td>
                  <td className="p-4 text-center font-bold text-green-700">TAK</td>
                </tr>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 text-slate-700">Lotnisko spoza UE (np. JFK, DXB)</td>
                  <td className="p-4 text-slate-700">Linia spoza UE (np. United, Emirates)</td>
                  <td className="p-4 text-center font-bold text-red-700">NIE</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50 hover:bg-slate-100">
                  <td className="p-4 text-slate-700">Lotnisko spoza UE</td>
                  <td className="p-4 text-slate-700">Linia UE (bilet u linii spoza UE)</td>
                  <td className="p-4 text-center font-bold text-green-700">TAK*</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">* Decyduje faktyczny operator, nie kod marketingowy na bilecie.</p>

          <div className="mt-4 bg-amber-50 border border-amber-300 rounded-xl p-4">
            <p className="text-amber-900 text-sm">
              <strong>Pułapka codeshare spoza UE:</strong> Kupiłeś bilet u LOT-u na trasę NYC→WAW, ale lot
              faktycznie operuje United Airlines. W tym przypadku EC 261 <strong>nie obowiązuje</strong> —
              bo lot wylatuje spoza UE, a operator (United) to linia nie-unijna. Mają zastosowanie przepisy
              amerykańskie (DOT regulations).
            </p>
          </div>
        </section>

        {/* Jak ustalić operatora */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Jak sprawdzić kto jest przewoźnikiem operującym?</h2>

          <div className="space-y-4">
            {[
              {
                title: "Karta pokładowa (boarding pass)",
                desc: "Szukaj adnotacji \"operated by\" lub \"wykonywany przez\" — zwykle pod numerem lotu. Na e-karcie pokładowej w aplikacji linii ta informacja jest często dostępna w szczegółach lotu.",
                icon: "🎫",
              },
              {
                title: "Potwierdzenie rezerwacji (e-bilet)",
                desc: "W sekcji szczegółów każdego lotu powinien być zapis operatora. Wydrukuj lub zapisz potwierdzenie — jest dowodem w roszczeniu.",
                icon: "📧",
              },
              {
                title: "FlightRadar24 lub FlightAware",
                desc: "Wpisz numer lotu i datę — aplikacja pokazuje który samolot (i której linii) faktycznie obsługiwał ten lot. Przydatne gdy straciłeś dokumenty.",
                icon: "🛰️",
              },
              {
                title: "Strona linii marketingowej",
                desc: "W zakładce zarządzania rezerwacją lub FAQ powinna być informacja o operatorze. Możesz też zadzwonić na infolinię — są zobowiązani poinformować Cię o operatorze (art. 3 ust. 5 EC 261).",
                icon: "💻",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scenariusze */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Typowe scenariusze codeshare w podróżach służbowych</h2>

          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900 mb-1">
                    Scenariusz A: lot z WAW, bilet LOT, operator Lufthansa
                  </p>
                  <p className="text-green-800 text-sm">
                    Lot WAW→FRA opóźniony 3,5h. Kupiłeś bilet LOT (LO 3456), ale leciałeś Lufthansą (LH 1234).
                    <br />
                    <strong>Działanie:</strong> Składasz roszczenie do Lufthansa — lot wylatywał z UE, operator to linia UE.
                    Kwota: 250 EUR (trasa &lt;1500 km).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900 mb-1">
                    Scenariusz B: lot z WAW, bilet LOT, operator United Airlines
                  </p>
                  <p className="text-green-800 text-sm">
                    Lot WAW→NYC opóźniony 4h. Bilet LOT (LO 7), faktycznie operuje United (UA 23).
                    <br />
                    <strong>Działanie:</strong> Składasz roszczenie do United Airlines — lot wylatywał z UE (WAW),
                    więc EC 261 obowiązuje niezależnie od narodowości operatora. Kwota: 600 EUR.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-900 mb-1">
                    Scenariusz C: lot z NYC, bilet LOT, operator United Airlines
                  </p>
                  <p className="text-red-800 text-sm">
                    Lot NYC→WAW opóźniony 4h. Bilet LOT (LO 7), faktycznie operuje United (UA 23).
                    <br />
                    <strong>Działanie:</strong> EC 261 NIE obowiązuje — lot wylatywał spoza UE, operator spoza UE.
                    Stosujesz przepisy DOT (USA). Możesz ubiegać się o zwrot kosztów wg polityki United.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900 mb-1">
                    Scenariusz D: lot z NYC, bilet United, operator LOT
                  </p>
                  <p className="text-blue-800 text-sm">
                    Lot NYC→WAW opóźniony 4h. Bilet United, ale faktycznie operuje LOT (LO 3).
                    <br />
                    <strong>Działanie:</strong> EC 261 OBOWIĄZUJE — mimo lotu spoza UE, operator (LOT) to linia UE.
                    Składasz roszczenie do LOT. Kwota: 600 EUR.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kontekstowe CTA */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-indigo-900 text-lg">Lot codeshare opóźniony lub odwołany?</p>
              <p className="text-indigo-700 text-sm mt-1">
                Nie marnuj czasu na ustalanie kto odpowiada — ClaimWinger identyfikuje operatora i kieruje roszczenie
                do właściwej linii automatycznie.
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl/opozniony-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=codeshare-ec261"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Sprawdź roszczenie <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Jak złożyć roszczenie */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Jak złożyć roszczenie przy locie codeshare?</h2>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Ustal kto operował lot",
                desc: "Sprawdź boarding pass lub potwierdzenie rezerwacji pod kątem adnotacji \"operated by\". Zapisz pełną nazwę linii operującej i jej numer lotu (różny od kodu marketingowego).",
                color: "bg-indigo-100 text-indigo-700",
              },
              {
                step: "2",
                title: "Potwierdź zakres EC 261",
                desc: "Jeśli lot wylatywał z UE — EC 261 obowiązuje zawsze. Jeśli spoza UE — EC 261 obowiązuje tylko gdy operator to linia UE. W pozostałych przypadkach stosują się lokalne przepisy.",
                color: "bg-purple-100 text-purple-700",
              },
              {
                step: "3",
                title: "Wyślij roszczenie do operatora",
                desc: "Pismo kierujesz bezpośrednio do przewoźnika operującego. Zawrzyj: numer lotu marketingowego I operacyjnego, datę, PNR, opis opóźnienia/odwołania, żądaną kwotę. Daj 30 dni na odpowiedź.",
                color: "bg-teal-100 text-teal-700",
              },
              {
                step: "4",
                title: "Eskaluj przy odmowie lub milczeniu",
                desc: "ULC (Urząd Lotnictwa Cywilnego) lub e-Sąd w Polsce. Alternatywa: specjalistyczna firma roszczeniowa — przejmuje sprawę bez kosztów z góry, wynagrodzenie tylko przy sukcesie.",
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
              <h3 className="text-2xl font-bold mb-2">Nie wiesz do kogo złożyć roszczenie?</h3>
              <p className="text-slate-300 text-sm">
                ClaimWinger analizuje strukturę lotu codeshare i kieruje roszczenie do właściwego operatora.
                Bezpłatna weryfikacja, wynagrodzenie tylko przy sukcesie.
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl?utm_source=bizneslot&utm_medium=article&utm_campaign=codeshare-ec261-cta"
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
                q: "Kto odpowiada za odszkodowanie EC 261 na locie codeshare?",
                a: "Odpowiada przewoźnik operujący (operating carrier) — ten, który faktycznie wykonuje lot i obsługuje samolot. Nie ma znaczenia, pod czyim kodem kupiłeś bilet.",
              },
              {
                q: "Jak sprawdzić kto jest przewoźnikiem operującym lot codeshare?",
                a: "Na karcie pokładowej lub potwierdzeniu rezerwacji znajdziesz dwie informacje: numer lotu (np. LO 234) to kod marketingowy, a 'operated by' lub 'wykonywany przez' wskazuje faktycznego operatora. Możesz też sprawdzić na FlightRadar24 wpisując numer lotu.",
              },
              {
                q: "Czy mogę złożyć roszczenie do linii, u której kupiłem bilet codeshare?",
                a: "Formalnie roszczenie EC 261 kierujesz do operatora lotu. Jednak art. 3 ust. 5 EC 261/2004 zobowiązuje przewoźnika marketingowego do poinformowania pasażera o danych operatora. Część linii przekieruje Twoje roszczenie samodzielnie.",
              },
              {
                q: "Czy loty codeshare są objęte EC 261/2004?",
                a: "Tak. Rozporządzenie stosuje się niezależnie od struktury umowy codeshare. Kluczowe jest czy lot był wykonywany z lotniska UE lub przez przewoźnika UE do UE (dla lotów spoza UE).",
              },
              {
                q: "Co jeśli przewoźnik operujący nie jest z UE a przewoźnik marketingowy jest z UE?",
                a: "EC 261/2004 stosuje się gdy lot wylatuje z lotniska UE (niezależnie od narodowości operatora) LUB gdy lot leci do UE i jest operowany przez przewoźnika UE. Jeśli lot wylatuje spoza UE a operator jest spoza UE — rozporządzenie nie obowiązuje, nawet jeśli bilet kupiłeś u linii unijnej.",
              },
              {
                q: "Jak wygląda sytuacja gdy spóźnię się na przesiadkę na locie codeshare?",
                a: "Jeśli oba odcinki były w jednej rezerwacji (jeden PNR), zasady są identyczne jak dla każdego lotu połączonego — liczy się opóźnienie w końcowym celu podróży. Roszczenie kierujesz do operatora lotu, który spowodował opóźnienie.",
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
              className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-400 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-900 text-sm mb-1">
                Lot połączony opóźniony — odszkodowanie za każdy odcinek?
              </p>
              <p className="text-slate-500 text-xs">Liczy się opóźnienie w celu końcowym, nie na przesiadce</p>
            </Link>
            <Link
              href="/artykuly/co-to-jest-ec-261-2004-rozporzadzenie-ue"
              className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-400 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-900 text-sm mb-1">
                Co to jest EC 261/2004? Rozporządzenie UE o prawach pasażerów
              </p>
              <p className="text-slate-500 text-xs">Zakres, prawa pasażerów i wyjątki od odszkodowania</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
