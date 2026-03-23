import { SEO } from "@/components/SEO";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, Clock, Scale } from "lucide-react";

export default function PrzedawnienieRoszczeniaEC261() {
  return (
    <>
      <SEO
        title="Przedawnienie roszczenia EC 261 — ile czasu ma pracownik na złożenie wniosku?"
        description="Roszczenie EC 261/2004 za opóźniony lub odwołany lot przedawnia się w Polsce po 3 latach. Sprawdź od kiedy biegnie termin, jak go przerwać i czy delegacja zmienia zasady."
        canonicalUrl="https://bizneslot.info/artykuly/przedawnienie-roszczenia-ec261-pracownik"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Przedawnienie roszczenia EC 261 — ile czasu ma pracownik na złożenie wniosku?",
            description:
              "EC 261/2004 nie określa terminu przedawnienia. W Polsce stosuje sie 3-letni termin z Kodeksu Cywilnego, liczony od daty lotu. Reklamacja do linii przerywa bieg przedawnienia.",
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
                name: "Po ilu latach przedawnia sie roszczenie EC 261 w Polsce?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "W Polsce roszczenie EC 261/2004 przedawnia sie po 3 latach od daty lotu (art. 118 Kodeksu Cywilnego). EC 261 nie zawiera wlasnego terminu przedawnienia, wiec stosuje sie przepisy krajowe.",
                },
              },
              {
                "@type": "Question",
                name: "Od kiedy liczy sie termin przedawnienia roszczenia za lot?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Termin biegnie od dnia, w ktorym lot mial sie odbyc (przy odwolaniu) lub od dnia przylotu (przy opoznieniu). Przy missed connection liczy sie od momentu dotarcia do celu ostatecznego lub od pierwotnej godziny przylotu.",
                },
              },
              {
                "@type": "Question",
                name: "Czy reklamacja do linii lotniczej przerywa przedawnienie?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak. Pisemna reklamacja zlozona do linii przerwa bieg przedawnienia w rozumieniu art. 123 par. 1 pkt 2 KC (uznanie roszczenia przez dluznika lub czynnosc przed wlasciwym organem). Nie oznacza to jednak zatrzymania terminu na czas odpowiedzi linii — po odpowiedzi odmownej biegnie nowy termin.",
                },
              },
              {
                "@type": "Question",
                name: "Pracownik byl na delegacji — kto moze zlozyc reklamacje i w jakim terminie?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Prawo do odszkodowania EC 261 przysluguje pracownikowi jako pasazerowi, nie pracodawcy. Termin 3-letni biegnie tak samo. Pracownik moze samodzielnie zlozyc wniosek do linii lub do wyspecjalizowanego podmiotu w ciagu 3 lat od daty lotu.",
                },
              },
              {
                "@type": "Question",
                name: "Czy termin przedawnienia rozni sie w zaleznosci od kraju?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak. EC 261 stosuje przepisy przedawnienia kraju, w ktorym toczy sie postepowanie. Niemcy: 3 lata (par. 195 BGB). Francja: 5 lat. Holandia: 5 lat. Belgia: 1 rok (specyficzna interpretacja lotnicza). Przy lotach z polskich lotnisk najbezpieczniej stosowac termin 3-letni.",
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
            <Clock className="w-4 h-4" />
            <span>Prawa pasażera EC 261/2004</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">
            Przedawnienie roszczenia EC 261 — ile czasu ma pracownik na złożenie wniosku?
          </h1>
          <p className="text-blue-100 text-lg">
            Lot opóźniony rok temu, a pracownik dopiero teraz zorientował się, że przysługuje mu
            odszkodowanie. Czy jeszcze nie za późno? W Polsce masz 3 lata — ale liczy się każdy
            miesiąc.
          </p>
        </div>

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl px-6 py-5 mb-8">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-1">
            Krótka odpowiedź
          </p>
          <p className="text-gray-800 font-medium">
            Roszczenie EC 261/2004 w Polsce <strong>przedawnia się po 3 latach</strong> od daty lotu
            (art. 118 Kodeksu Cywilnego). Pisemna reklamacja złożona do linii lotniczej przerywa bieg
            tego terminu.
          </p>
        </div>

        {/* Dlaczego EC 261 nie ma własnego terminu */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            EC 261 nie określa własnego terminu przedawnienia
          </h2>
          <p className="text-gray-700 mb-3">
            Rozporządzenie EC 261/2004 reguluje zasady odpowiedzialności linii lotniczej, ale{" "}
            <strong>nie zawiera przepisu o przedawnieniu roszczeń</strong>. Luka ta jest celowa —
            ustawodawca UE pozostawił tę kwestię prawu krajowemu każdego państwa członkowskiego.
          </p>
          <p className="text-gray-700">
            W Polsce oznacza to zastosowanie art. 118 Kodeksu Cywilnego: dla roszczeń majątkowych
            termin wynosi <strong>3 lata</strong>. Termin liczy się od dnia, w którym roszczenie stało
            się wymagalne, czyli od daty planowanego lub faktycznego przylotu.
          </p>
        </section>

        {/* Tabela terminów w UE */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Terminy przedawnienia EC 261 w wybranych krajach UE
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Kraj</th>
                  <th className="px-4 py-3 text-left">Termin</th>
                  <th className="px-4 py-3 text-left">Podstawa prawna</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { kraj: "Polska", termin: "3 lata", podstawa: "art. 118 KC" },
                  { kraj: "Niemcy", termin: "3 lata", podstawa: "§ 195 BGB" },
                  { kraj: "Francja", termin: "5 lat", podstawa: "art. 2224 Code Civil" },
                  { kraj: "Holandia", termin: "5 lat", podstawa: "art. 3:307 BW" },
                  { kraj: "Belgia", termin: "1 rok*", podstawa: "prawo lotnicze (sporne)" },
                  { kraj: "Szwecja", termin: "10 lat", podstawa: "Preskriptionslag" },
                  { kraj: "Hiszpania", termin: "5 lat", podstawa: "art. 1964 CC" },
                  { kraj: "Włochy", termin: "2 lata", podstawa: "Codice della Navigazione" },
                ].map((row) => (
                  <tr key={row.kraj} className="even:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{row.kraj}</td>
                    <td className="px-4 py-3">{row.termin}</td>
                    <td className="px-4 py-3 text-gray-500">{row.podstawa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            * Belgijskie sądy stosują różne interpretacje. Dla lotów z Polski najbezpieczniej
            przyjmować termin 3-letni.
          </p>
        </section>

        {/* Od kiedy biegnie termin */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Od kiedy dokładnie biegnie termin?</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Odwołanie lotu</p>
                <p className="text-gray-600 text-sm">
                  Od dnia, w którym lot miał się odbyć zgodnie z pierwotnym rozkładem.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Opóźnienie lotu</p>
                <p className="text-gray-600 text-sm">
                  Od dnia faktycznego przylotu do miejsca docelowego (nie od planowanego przylotu).
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Missed connection (przesiadka)</p>
                <p className="text-gray-600 text-sm">
                  Od dnia faktycznego dotarcia do końcowego celu podróży lub — jeśli pasażer w ogóle
                  nie dotarł — od daty planowanego przylotu.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Downgrade klasy</p>
                <p className="text-gray-600 text-sm">
                  Od dnia wykonania lotu, w którym nastąpiło przesadzenie do niższej klasy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Przerywanie biegu przedawnienia */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Jak przerwać bieg przedawnienia?
          </h2>
          <p className="text-gray-700 mb-4">
            Zgodnie z art. 123 § 1 Kodeksu Cywilnego bieg przedawnienia przerywa się m.in. przez:
          </p>
          <div className="space-y-3">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="font-semibold text-blue-900 mb-1">1. Złożenie reklamacji do linii lotniczej</p>
              <p className="text-gray-700 text-sm">
                Pisemna reklamacja kierowana bezpośrednio do przewoźnika może być uznana za
                czynność przerywającą przedawnienie. Po udzieleniu odpowiedzi odmownej lub upływie
                terminu na odpowiedź biegnie <strong>nowy termin</strong> 3-letni.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="font-semibold text-blue-900 mb-1">2. Złożenie wniosku do ULC</p>
              <p className="text-gray-700 text-sm">
                Wniosek do Prezesa Urzędu Lotnictwa Cywilnego (ULC) o wszczęcie postępowania
                wyjaśniającego przerywa bieg przedawnienia na czas trwania postępowania.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="font-semibold text-blue-900 mb-1">3. Wniesienie pozwu do sądu</p>
              <p className="text-gray-700 text-sm">
                Wniesienie pozwu do sądu powszechnego definitywnie przerywa bieg przedawnienia
                i zawiesza go na czas postępowania sądowego.
              </p>
            </div>
          </div>
        </section>

        {/* Aspekt delegacji / B2B */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Delegacja służbowa — kto i w jakim terminie może złożyć wniosek?
          </h2>
          <p className="text-gray-700 mb-4">
            W kontekście podróży służbowych pojawia się dodatkowe pytanie: czy pracodawca może
            złożyć wniosek zamiast pracownika? Odpowiedź jest jednoznaczna.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-amber-800 mb-2">Odszkodowanie należy do pracownika</p>
                <p className="text-gray-700 text-sm">
                  EC 261/2004 przyznaje prawa <strong>pasażerowi</strong>, nie podmiotowi, który opłacił
                  bilet. Pracodawca kupując bilet dla pracownika nie nabywa prawa do odszkodowania —
                  ono pozostaje przy pracowniku jako osobie fizycznej będącej pasażerem. Dotyczy to
                  sytuacji, gdy pracodawca opłacił bilet, a pracownik był na pokładzie.
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mb-3">
            W praktyce oznacza to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
            <li>
              Pracownik ma <strong>3 lata od daty lotu</strong> na złożenie wniosku — niezależnie od
              tego, kiedy pracodawca go o tym poinformuje.
            </li>
            <li>
              Pracodawca <strong>nie może zobowiązać</strong> pracownika do oddania odszkodowania
              ani zawrzeć w regulaminie podróży przepisu, który je przejmuje — taki zapis jest
              nieważny z mocy prawa UE.
            </li>
            <li>
              Pracownik może upoważnić pracodawcę lub inny podmiot (np. ClaimWinger) do działania
              w jego imieniu — termin biegniem jednak tak samo.
            </li>
          </ul>
          <p className="text-gray-700 mt-3 text-sm">
            Więcej o relacji pracownik–pracodawca w kontekście odszkodowania: artykuł{" "}
            <Link
              href="/artykuly/czy-pracodawca-moze-zatrzymac-odszkodowanie-za-lot"
              className="text-blue-700 underline"
            >
              Czy pracodawca może zatrzymać odszkodowanie za lot pracownika?
            </Link>
          </p>
        </section>

        {/* Praktyczny przykład */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Przykład z życia — kiedy jeszcze nie jest za późno</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <p className="text-gray-700 text-sm mb-3">
              <strong>Sytuacja:</strong> Marta wróciła z delegacji z Londynu w marcu 2024. Lot był
              opóźniony o 4,5 godziny. Pracodawca nie poinformował jej o prawie do odszkodowania.
              W marcu 2026 Marta przypadkowo dowiaduje się o EC 261.
            </p>
            <p className="text-gray-700 text-sm mb-3">
              <strong>Czy jest za późno?</strong> Nie — termin 3-letni upływa dopiero w marcu 2027.
              Marta ma czas na złożenie reklamacji lub skorzystanie z zewnętrznej pomocy.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Co powinna zrobić?</strong> Znaleźć boarding pass lub potwierdzenie rezerwacji,
              sprawdzić dane lotu i złożyć reklamację do linii lub przekazać sprawę podmiotowi
              specjalizującemu się w dochodzeniu takich roszczeń.
            </p>
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
                Czy muszę mieć boarding pass, żeby złożyć wniosek po 2 latach?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Boarding pass jest pomocny, ale nie niezbędny. Wystarczy potwierdzenie rezerwacji
                  (e-mail od linii lub agencji), wyciąg z karty firmowej lub korporacyjny raport
                  podróży. Dane lotu (numer, data, lotniska) można też zweryfikować w historii
                  opóźnień dostępnej w bazach danych linii.
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
                Linia odrzuciła reklamację rok temu. Czy wciąż mogę dochodzić roszczenia?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Tak, odmowa reklamacji nie zamyka drogi do dochodzenia roszczenia. Możesz złożyć
                  skargę do ULC, skierować sprawę do sądu lub skorzystać z pomocy zewnętrznego
                  podmiotu. Po złożeniu reklamacji i odmowie biegnie nowy termin przedawnienia —
                  masz kolejne 3 lata od daty odmowy.
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
                Firma zaksięgowała bilet — czy to wpływa na termin przedawnienia?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Nie. Sposób płatności za bilet (karta firmowa, przelew pracodawcy, faktura VAT)
                  nie wpływa na bieg przedawnienia roszczenia EC 261. Termin liczy się od daty
                  lotu, niezależnie od księgowości pracodawcy.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-2xl px-8 py-8 text-center">
          <div className="flex justify-center mb-3">
            <Scale className="w-8 h-8 text-blue-300" />
          </div>
          <h2 className="text-xl font-bold mb-2">Termin jeszcze nie minął? Działaj teraz.</h2>
          <p className="text-blue-200 mb-5 text-sm">
            Masz lot z ostatnich 3 lat, który był opóźniony lub odwołany? ClaimWinger sprawdzi,
            czy roszczenie jest zasadne i przeprowadzi cały proces reklamacji.
          </p>
          <Link
            href="https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=przedawnienie-roszczenia-ec261-pracownik"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Sprawdź swoje roszczenie
          </Link>
        </div>
      </main>
    </>
  );
}
