import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, XCircle, AlertTriangle, ArrowRight, Plane } from "lucide-react";

export default function FastTrackLotnisko() {
  return (
    <>
      <SEO
        title="Fast track na lotnisku — jak zaoszczędzić czas na odprawie bezpieczeństwa?"
        description="Fast track to priorytetowa kontrola bezpieczeństwa — kilka minut zamiast 30-45 min kolejki. Kto ma do niego dostęp, na których lotniskach działa i jak go uzyskać bez klasy biznes."
        canonicalUrl="https://bizneslot.info/artykuly/fast-track-lotnisko-odprawa"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Fast track na lotnisku — jak zaoszczędzić czas na odprawie bezpieczeństwa?",
            description:
              "Fast track to priorytetowa kontrola bezpieczeństwa dostepna dla pasazerow klasy biznes, posiadaczy statusu FFP i niektorych kart kredytowych. Sprawdz gdzie dziala i jak go uzyskac.",
            author: { "@type": "Organization", name: "BizneLot.info" },
            publisher: { "@type": "Organization", name: "BizneLot.info" },
            datePublished: "2026-03-22",
            dateModified: "2026-03-22",
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
                name: "Kto ma dostep do fast track na lotnisku?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Do fast track uprawniaja: bilet w klasie biznes lub pierwszej, status FFP (zazwyczaj Gold i wyzej), czlonkostwo w programach jak Global Entry (USA) lub Registered Traveller, niektore karty kredytowe premium. Na wybranych lotniskach mozliwy jest takze zakup jednorazowego dostepu.",
                },
              },
              {
                "@type": "Question",
                name: "Ile czasu oszczedza fast track na lotnisku?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "W godzinach szczytu (rano 6-9, popoludnie 16-19) kolejka do standardowej kontroli bezpieczenstwa na duzych lotniskach wynosi 20-45 minut. Fast track skraca ten czas do 3-8 minut. Na Okęciu w szczycie oszczednosc wynosi zwykle 15-30 minut.",
                },
              },
              {
                "@type": "Question",
                name: "Czy fast track jest dostepny na Lotnisku Chopina w Warszawie?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak. Na WAW dziala fast track dla pasazerow klasy biznes i posiadaczy odpowiednich statusow FFP. Bramka fast track jest oznaczona przy wejsciu do strefy kontroli bezpieczenstwa w Terminalu A.",
                },
              },
            ],
          }),
        }}
      />

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl px-8 py-10 mb-8">
          <div className="flex items-center gap-2 text-blue-300 text-sm font-medium mb-3">
            <Plane className="w-4 h-4" />
            <span>Lotniska i obsługa naziemna</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">
            Fast track na lotnisku — jak zaoszczędzić czas na odprawie bezpieczeństwa?
          </h1>
          <p className="text-blue-100 text-lg">
            W godzinach szczytu kontrola bezpieczeństwa na dużych lotniskach to 30–45 minut
            w kolejce. Fast track skraca to do kilku minut. Sprawdź kto ma do niego prawo
            i jak go uzyskać bez biletu w biznesie.
          </p>
        </div>

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl px-6 py-5 mb-8">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-1">
            Krótka odpowiedź
          </p>
          <p className="text-gray-800 font-medium">
            Fast track uprawnia bilet w <strong>klasie biznes lub pierwszej</strong>, status
            FFP <strong>Gold lub wyższy</strong> w programie linii lotniczej oraz wybrane
            karty kredytowe premium. Na wielu lotniskach można też kupić jednorazowy dostęp
            online z wyprzedzeniem (zwykle 10–20 EUR).
          </p>
        </div>

        {/* Co to jest fast track */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Czym dokładnie jest fast track?</h2>
          <p className="text-gray-700 mb-3">
            Fast track (zwany też priority lane lub priority security) to dedykowany pas
            kontroli bezpieczeństwa dla uprawnionych pasażerów — oddzielny od kolejki ogólnej.
            Ta sama kontrola, ten sam sprzęt rentgenowski, te same zasady — ale znacznie krótsza
            kolejka lub jej brak.
          </p>
          <p className="text-gray-700">
            Fast track <strong>nie omija kontroli bezpieczeństwa</strong> — przyspiesza jedynie
            dostęp do niej. Nie należy go mylić z priorytetowym boardingiem (wejście na pokład)
            ani z priorytetową odprawą bagażową (check-in).
          </p>
        </section>

        {/* Kto ma dostęp */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Kto ma dostęp do fast track?</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Uprawnienie</th>
                  <th className="px-4 py-3 text-center">Dostęp</th>
                  <th className="px-4 py-3 text-left">Uwagi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { uprawnienie: "Bilet Business / First Class", dostep: true, uwagi: "Większość lotnisk, automatycznie na boarding passie" },
                  { uprawnienie: "Status Gold / Platinum FFP", dostep: true, uwagi: "Zależy od linii i lotniska — sprawdź regulamin" },
                  { uprawnienie: "Star Alliance Gold", dostep: true, uwagi: "Na lotniskach lotnisk linii Star Alliance" },
                  { uprawnienie: "Oneworld Emerald / Sapphire", dostep: true, uwagi: "Na lotniskach linii Oneworld" },
                  { uprawnienie: "Priority Pass", dostep: false, uwagi: "PP uprawnia do lounge, nie do fast track" },
                  { uprawnienie: "Zakup jednorazowy online", dostep: true, uwagi: "Dostępny na WAW, FRA, AMS, LHR i innych (10–25 EUR)" },
                  { uprawnienie: "Bilet Economy bez statusu", dostep: false, uwagi: "Standardowa kolejka" },
                ].map((row) => (
                  <tr key={row.uprawnienie} className="even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{row.uprawnienie}</td>
                    <td className="px-4 py-3 text-center">
                      {row.dostep
                        ? <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                        : <XCircle className="w-4 h-4 text-red-400 mx-auto" />
                      }
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{row.uwagi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Fast track na polskich lotniskach */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Fast track na polskich i europejskich lotniskach
          </h2>
          <div className="space-y-3">
            {[
              {
                lotnisko: "Warszawa Chopina (WAW)",
                dostepnosc: "Tak",
                szczegoly: "Terminal A — oznaczona bramka fast track przy wejściu do strefy kontroli. Dostępny dla pasażerów biznes i statusów FFP. Brak sprzedaży jednorazowej na bramce.",
                color: "green",
              },
              {
                lotnisko: "Frankfurt (FRA)",
                dostepnosc: "Tak",
                szczegoly: "Priority Lane dostępny szeroko w obu terminalach. Możliwy zakup przez Lufthansa.com lub aplikację LH. Jeden z najsprawniej działających fast tracków w Europie.",
                color: "green",
              },
              {
                lotnisko: "Amsterdam Schiphol (AMS)",
                dostepnosc: "Tak",
                szczegoly: "Priority Security — zakup online przez schiphol.nl lub w cenie biletu biznes. Szczególnie wartościowy w szczycie porannym (6–9).",
                color: "green",
              },
              {
                lotnisko: "Londyn Heathrow (LHR)",
                dostepnosc: "Tak",
                szczegoly: "Fast Track w każdym terminalu. Terminal 5 (BA) — najsprawniejszy. Zakup jednorazowy możliwy online.",
                color: "green",
              },
              {
                lotnisko: "Kraków Balice (KRK)",
                dostepnosc: "Ograniczony",
                szczegoly: "Fast track dostępny w sezonie szczytowym dla wybranych klas i statusów. Kolejka ogólna zwykle krótsza niż na WAW.",
                color: "amber",
              },
            ].map((item) => (
              <div key={item.lotnisko} className="rounded-xl border border-gray-200 p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${item.color === "green" ? "bg-green-500" : "bg-amber-500"}`} />
                  <p className="font-semibold text-gray-900 text-sm">{item.lotnisko}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.color === "green" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                    {item.dostepnosc}
                  </span>
                </div>
                <p className="text-gray-600 text-sm ml-4">{item.szczegoly}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Jak kupić bez statusu */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Jak uzyskać fast track bez klasy biznes i bez statusu FFP?
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-900 text-white text-xs font-bold shrink-0">1</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Zakup online przed podróżą</p>
                <p className="text-gray-600 text-sm">
                  Na wielu lotniskach (FRA, AMS, LHR, CDG) można kupić fast track bezpośrednio
                  na stronie lotniska lub przez aplikację linii. Cena: 8–25 EUR/os. Kupon
                  wydrukowany lub w aplikacji okazujesz przy bramce fast track.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-900 text-white text-xs font-bold shrink-0">2</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Karta kredytowa premium z fast track</p>
                <p className="text-gray-600 text-sm">
                  Niektóre karty kredytowe (np. Amex Platinum) oferują fast track jako oddzielny
                  benefit — niezależnie od Priority Pass. Sprawdź regulamin swojej karty.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-900 text-white text-xs font-bold shrink-0">3</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Upgrade do klasy biznes (last minute)</p>
                <p className="text-gray-600 text-sm">
                  Na wielu lotniskach linie oferują upgrade na bramce odprawy za dodatkową opłatę.
                  Przy tłumie w kolejce i krótkim czasie do odlotu może to być opłacalne.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Praktyczne wskazówki */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Praktyczne wskazówki dla podróżnika służbowego
          </h2>
          <div className="space-y-2">
            {[
              "Nawet z fast trackiem przyjedź na lotnisko 90 minut przed lotem europejskim — zdarzają się awarie skanerów lub dodatkowe kontrole.",
              "Fast track nie gwarantuje szybkiego przejścia — w szczycie może być kolejka, choć krótsza niż ogólna.",
              "Zapamiętaj: Fast Track ≠ Priority Boarding ≠ Priority Baggage. To trzy różne przywileje.",
              "Na długich trasach intercontinentalnych fast track jest ważniejszy — standardowe kolejki na LHR T3 lub CDG mogą trwać 40–50 min.",
              "Przy locie codeshare sprawdź uprawnienie fast track u operatora (executing carrier), nie marketingowej linii.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Ostrzeżenia */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Kiedy fast track nie pomoże</h2>
          <div className="space-y-2">
            {[
              "Lot odwołany lub opóźniony — fast track nie zmienia statusu lotu. Przy opóźnieniu 3h+ przysługuje odszkodowanie EC 261.",
              "Brak dokumentów lub problem z biletem — kontrola bezpieczeństwa jest szybka, ale prawa jazdy przy wejściu do strefy Schengen nie zastąpi paszportu.",
              "System biometryczny e-gate nieczynny — czasem trzeba poczekać na agenta, fast track pasu nie pomoże.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 rounded-xl border border-gray-200 p-4">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Powiązane */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Powiązane artykuły</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/artykuly/lounge-biznesowy-okecie-jak-wejsc",
                label: "Lounge na Okęciu — co oferuje i jak wejść?",
              },
              {
                href: "/artykuly/priority-pass-vs-karty-kredytowe-lounge",
                label: "Priority Pass vs karty kredytowe — porównanie",
              },
              {
                href: "/artykuly/lot-sluzbowy-odwolany-ostatniej-chwili-co-zrobic",
                label: "Lot odwołany w ostatniej chwili — co zrobić?",
              },
              {
                href: "/artykuly/missed-connection-lot-przesiadka-kto-odpowiada",
                label: "Missed connection — kto odpowiada?",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-xl border border-gray-200 p-4 hover:border-blue-400 hover:bg-blue-50 transition text-sm text-gray-700"
              >
                <ArrowRight className="w-4 h-4 text-blue-500 shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Najczęstsze pytania</h2>
          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">

            <div
              itemScope
              itemProp="mainEntity"
              itemProp="mainEntity" itemType="https://schema.org/Question"
              className="border border-gray-200 rounded-xl p-5"
            >
              <h3 itemProp="name" className="font-semibold text-gray-900 mb-2">
                Czy LOT oferuje fast track na Lotnisku Chopina?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Tak. Pasażerowie LOT w klasie biznes oraz posiadacze Złotej Karty LOT (i Star
                  Alliance Gold) mają dostęp do fast track na WAW. Bramka jest oznaczona przy
                  wejściu do kontroli bezpieczeństwa w Terminalu A.
                </p>
              </div>
            </div>

            <div
              itemScope
              itemProp="mainEntity"
              itemProp="mainEntity" itemType="https://schema.org/Question"
              className="border border-gray-200 rounded-xl p-5"
            >
              <h3 itemProp="name" className="font-semibold text-gray-900 mb-2">
                Czy fast track obejmuje też kontrolę paszportową?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Nie zawsze — to dwa różne punkty. Fast track dotyczy kontroli bezpieczeństwa
                  (röntgen, metal detector). Kontrola paszportowa (granica Schengen) ma osobne
                  priorytety — zwykle osobna linia dla klas biznes lub status FFP, ale zasady
                  różnią się między lotniskami. Na WAW kontrola paszportowa przy non-Schengen
                  zwykle nie ma odrębnej linii priorytetowej.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-2xl px-8 py-8 text-center">
          <h2 className="text-xl font-bold mb-2">Przeszedłeś fast track — a lot i tak był opóźniony?</h2>
          <p className="text-blue-200 mb-5 text-sm">
            Szybka odprawa nie chroni przed opóźnieniem. Jeśli dotarłeś do celu 3h+ później,
            przysługuje Ci odszkodowanie do 600 EUR. ClaimWinger sprawdzi Twój lot.
          </p>
          <Link
            href="https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=fast-track-lotnisko-odprawa"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Sprawdź swoje roszczenie
          </Link>
        </div>
      </main>
    </>
  );
}
