import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, XCircle, AlertTriangle, Globe, Plane } from "lucide-react";

export default function EC261LotySpozaUE() {
  return (
    <>
      <SEO
        title="EC 261 a loty spoza UE — kiedy rozporządzenie obowiązuje linie non-EU?"
        description="Czy linia spoza UE (Emirates, Turkish, United) musi wypłacić odszkodowanie EC 261? Zasada jest prosta: liczy się lotnisko wylotu. Sprawdź, kiedy masz prawa pasażera."
        canonicalUrl="https://bizneslot.info/artykuly/ec261-loty-spoza-ue-kiedy-obowiazuje"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "EC 261 a loty spoza UE — kiedy rozporządzenie obowiązuje linie non-EU?",
            description:
              "EC 261/2004 obowiązuje wszystkie linie przy lotach wylatujących z lotnisk UE/EOG. Loty przylatujące do UE operowane przez linie non-EU nie podlegają rozporządzeniu.",
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
                name: "Czy Emirates, Turkish Airlines lub United podlegają EC 261/2004?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak, ale tylko na lotach wylatujących z lotnisk UE lub EOG. Lot Emirates z Dubaju do Warszawy nie podlega EC 261. Lot Emirates z Warszawy do Dubaju juz tak — bo wylot jest z lotniska UE.",
                },
              },
              {
                "@type": "Question",
                name: "Jak sprawdzic czy moj lot z USA/Azji podlega EC 261?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sprawdz lotnisko WYLOTU. Jesli wylatujesz z lotniska w kraju UE, EOG (Norwegia, Islandia, Liechtenstein) lub Szwajcarii — masz prawa EC 261 niezaleznie od linii. Jesli wylatujesz spoza tego obszaru, EC 261 obowiazuje tylko linie z siedziba w UE/EOG.",
                },
              },
              {
                "@type": "Question",
                name: "Lot powrotny z USA do Polski — czy przysluguje odszkodowanie?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Jesli lecisz linia spoza UE (np. United, American, Delta) z USA do Polski — EC 261 nie obowiazuje. Jesli lecisz linia UE (np. LOT, Lufthansa, KLM) z USA do Polski — EC 261 obowiazuje, bo linia ma siedzibe w UE.",
                },
              },
              {
                "@type": "Question",
                name: "Czy lotniska szwajcarskie i norweskie sa objete EC 261?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak. Szwajcaria i kraje EOG (Norwegia, Islandia, Liechtenstein) stosuja EC 261/2004. Lot z Zurychu, Oslo lub Rejkiawiku podlega rozporządzeniu tak samo jak lot z Warszawy czy Frankfurtu.",
                },
              },
              {
                "@type": "Question",
                name: "Co jesli lot ma przesiadke poza UE — np. WAW-DXB-SIN?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Decyduje lotnisko wylotu pierwszego odcinka i operator. Lot WAW-DXB operowany przez LOT lub Lufthanse podlega EC 261 (wylot z UE). Dalszy odcinek DXB-SIN operowany przez Emirates nie podlega. Liczy sie kazdy odcinek osobno.",
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
            <Globe className="w-4 h-4" />
            <span>Prawa pasażera EC 261/2004</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">
            EC 261 a loty spoza UE — kiedy rozporządzenie obowiązuje linie non-EU?
          </h1>
          <p className="text-blue-100 text-lg">
            Kluczowe pytanie w podróży służbowej: czy linia spoza Europy (Emirates, Turkish, Qatar,
            United) musi wypłacić odszkodowanie? Odpowiedź zależy od jednego kryterium — lotniska wylotu.
          </p>
        </div>

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl px-6 py-5 mb-8">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-1">
            Krótka odpowiedź
          </p>
          <p className="text-gray-800 font-medium">
            EC 261/2004 obowiązuje <strong>każdą linię lotniczą</strong> przy lotach wylatujących z lotnisk
            UE, EOG i Szwajcarii. Przy lotach z krajów trzecich (spoza UE/EOG) rozporządzenie stosuje się
            tylko do linii z siedzibą w UE lub EOG.
          </p>
        </div>

        {/* Podstawa prawna */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Podstawa prawna — art. 3 EC 261/2004</h2>
          <p className="text-gray-700 mb-3">
            Zakres terytorialny EC 261/2004 określa art. 3 rozporządzenia. Wyróżnia dwa przypadki:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
            <li>
              <strong>Wylot z lotniska w UE/EOG</strong> — rozporządzenie stosuje się do wszystkich
              przewoźników, niezależnie od kraju rejestracji.
            </li>
            <li>
              <strong>Wylot z lotniska poza UE/EOG, lądowanie w UE/EOG</strong> — rozporządzenie stosuje
              się wyłącznie do przewoźników wspólnotowych (z siedzibą w UE lub EOG).
            </li>
          </ul>
          <p className="text-gray-700 mt-3">
            Szwajcaria formalnie nie należy do UE ani EOG, ale zawarła z UE umowę bilateralną wdrażającą
            EC 261. Loty z lotnisk szwajcarskich (Zurych, Genewa, Bazylea) podlegają rozporządzeniu.
          </p>
        </section>

        {/* Tabela */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Tabela: kiedy EC 261 obowiązuje?
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Kierunek lotu</th>
                  <th className="px-4 py-3 text-left">Linia UE/EOG</th>
                  <th className="px-4 py-3 text-left">Linia spoza UE/EOG</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Z lotniska UE/EOG/CH</td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-1 text-green-700 font-medium">
                      <CheckCircle2 className="w-4 h-4" /> TAK
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-1 text-green-700 font-medium">
                      <CheckCircle2 className="w-4 h-4" /> TAK
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Do lotniska UE/EOG, z kraju trzeciego</td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-1 text-green-700 font-medium">
                      <CheckCircle2 className="w-4 h-4" /> TAK
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-1 text-red-600 font-medium">
                      <XCircle className="w-4 h-4" /> NIE
                    </span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Między krajami poza UE</td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-1 text-red-600 font-medium">
                      <XCircle className="w-4 h-4" /> NIE
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-1 text-red-600 font-medium">
                      <XCircle className="w-4 h-4" /> NIE
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            UE/EOG = państwa UE + Norwegia, Islandia, Liechtenstein. CH = Szwajcaria (umowa bilateralna).
          </p>
        </section>

        {/* Scenariusze */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Praktyczne scenariusze</h2>
          <div className="space-y-4">

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900">WAW → DXB (Emirates, wylot z Warszawy)</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Wylot z lotniska UE — EC 261 obowiązuje Emirates. Opóźnienie lub odwołanie?
                    Przysługuje odszkodowanie 600 EUR (dystans powyżej 3500 km, lot z UE poza UE).
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-red-500">
                  <XCircle className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900">DXB → WAW (Emirates, wylot z Dubaju)</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Wylot spoza UE/EOG, linia non-EU — EC 261 nie obowiązuje. Pasażer może szukać
                    ochrony w lokalnym prawie UAE lub ogólnych warunkach przewozu Emirates.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900">JFK → WAW (LOT Polish Airlines, wylot z Nowego Jorku)</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Wylot spoza UE, ale LOT ma siedzibę w UE — EC 261 obowiązuje. Pasażer leci do UE
                    linią UE, więc ma pełną ochronę. Odszkodowanie: 600 EUR przy opóźnieniu 3h+.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-red-500">
                  <XCircle className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900">JFK → WAW (United Airlines, wylot z Nowego Jorku)</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Wylot spoza UE, linia non-EU (United ma siedzibę w USA) — EC 261 nie obowiązuje.
                    Pasażer może dochodzić praw na podstawie przepisów US DOT lub ogólnych warunków United.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900">ZRH → WAW (Swiss, wylot z Zurychu)</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Zurych (CH) jest objęty umową bilateralną UE-Szwajcaria. EC 261 obowiązuje Swiss
                    na tym locie, mimo że Szwajcaria nie jest w UE ani EOG.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Linie non-EU latające z UE */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Popularne linie non-EU objęte EC 261 przy wylotach z UE
          </h2>
          <p className="text-gray-700 mb-4">
            Te linie mają obowiązek stosować EC 261/2004 na wszystkich lotach z lotnisk
            europejskich — mimo że ich główne bazy operacyjne są poza UE:
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              "Emirates (DXB)",
              "Qatar Airways (DOH)",
              "Turkish Airlines (IST)",
              "Etihad (AUH)",
              "Air Arabia",
              "United Airlines",
              "American Airlines",
              "Delta Air Lines",
              "Singapore Airlines",
              "Cathay Pacific",
              "Air Canada",
              "Air China",
            ].map((airline) => (
              <div
                key={airline}
                className="flex items-center gap-2 rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-sm text-gray-700"
              >
                <Plane className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                {airline}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Zasada ta wynika z terytorialnego charakteru EC 261 — obowiązuje na terytorium UE,
            niezależnie od prawa krajowego przewoźnika.
          </p>
        </section>

        {/* Podróże służbowe — ważna uwaga */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Podróże służbowe a loty intercontinentalne
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-amber-800 mb-2">Szczególna uwaga przy podróżach powrotnych</p>
                <p className="text-gray-700 text-sm mb-3">
                  W podróży służbowej lot <strong>tam</strong> (z UE) jest objęty EC 261. Lot{" "}
                  <strong>powrotny</strong> (do UE) zależy od linii:
                </p>
                <ul className="text-sm text-gray-700 space-y-1.5 list-disc list-inside ml-2">
                  <li>
                    Lecisz z Tokio do Warszawy <strong>Lufthansą</strong> przez Frankfurt — EC 261
                    obowiązuje (linia UE).
                  </li>
                  <li>
                    Lecisz z Tokio do Warszawy <strong>Japan Airlines</strong> bezpośrednio — EC 261
                    nie obowiązuje (linia non-EU, wylot spoza UE).
                  </li>
                  <li>
                    Lecisz z Tokio do Frankfurtu <strong>ANA</strong>, przesiadka na LOT do
                    Warszawy — odcinek tokio-Frankfurt: brak EC 261; Frankfurt-Warszawa (LOT): EC
                    261 obowiązuje na tym odcinku.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Codeshare cross-reference */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Loty codeshare: który przewoźnik odpowiada?
          </h2>
          <p className="text-gray-700 mb-3">
            Przy lotach codeshare decyduje <strong>operator faktyczny</strong> (operating carrier) —
            ten, który fizycznie wykonuje lot. Jeśli kupiłeś bilet z kodem LH, ale lot wykonuje
            United, zakres EC 261 zależy od tego, czy United jest operatorem wylatującym z UE.
          </p>
          <p className="text-gray-700">
            Szczegółowo temat codeshare i odpowiedzialności przewoźnika omówiliśmy w artykule{" "}
            <Link
              href="/artykuly/codeshare-ec261-ktory-przewoznik-odpowiada"
              className="text-blue-700 underline"
            >
              Codeshare a EC 261 — który przewoźnik odpowiada?
            </Link>
          </p>
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
                Czy linia turecka (Turkish Airlines) podlega EC 261 na locie IST-WAW?
              </h3>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text" className="text-gray-700 text-sm">
                  Nie. Lot wylatujący z Istambułu (poza UE/EOG) operowany przez Turkish Airlines
                  (linia non-EU) nie podlega EC 261. Na odwrót — lot WAW-IST Turkish Airlines
                  podlega, bo wylot jest z lotniska UE.
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
                Zakupiłem bilet przez agencję — czy to ma znaczenie dla EC 261?
              </h3>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text" className="text-gray-700 text-sm">
                  Nie. Sposób zakupu biletu (bezpośrednio u linii, przez agencję, TMC, portal
                  korporacyjny) nie ma wpływu na zakres EC 261. Prawa pasażera wynikają z rozporządzenia,
                  a nie z umowy z pośrednikiem. Roszczenie kierujesz bezpośrednio do linii operującej.
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
                Linia odmawia odszkodowania powołując się na siedzibę poza UE. Co robić?
              </h3>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text" className="text-gray-700 text-sm">
                  Powołaj się na art. 3 ust. 1(a) EC 261/2004 — rozporządzenie stosuje się do
                  pasażerów wylatujących z lotnisk na terytorium UE bez względu na siedzibę przewoźnika.
                  Decyduje miejsce wylotu, nie narodowość linii. Jeśli linia nadal odmawia,
                  możesz zgłosić sprawę do Prezesa Urzędu Lotnictwa Cywilnego (ULC) lub złożyć
                  reklamację przez wyspecjalizowany podmiot.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-2xl px-8 py-8 text-center">
          <h2 className="text-xl font-bold mb-2">Linia odmówiła lub nie odpowiada na reklamację?</h2>
          <p className="text-blue-200 mb-5 text-sm">
            Niezależnie od tego, czy to Emirates, Turkish czy American — jeśli lot wylatywał z UE,
            masz prawa EC 261. ClaimWinger sprawdzi Twoje roszczenie i poprowadzi sprawę.
          </p>
          <Link
            href={`https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=ec261-loty-spoza-ue-kiedy-obowiazuje`}
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Sprawdź swoje roszczenie
          </Link>
        </div>
      </main>
    </>
  );
}
