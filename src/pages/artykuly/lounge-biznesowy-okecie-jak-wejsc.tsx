import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, XCircle, AlertTriangle, ArrowRight, Plane } from "lucide-react";

export default function LoungeBiznesowyOkecie() {
  return (
    <>
      <SEO
        title="Lounge biznesowy na Okęciu (WAW) — co oferuje i jak wejść?"
        description="Lounge na Lotnisku Chopina w Warszawie: Polonez Lounge LOT, Priority Pass, dostęp przez kartę kredytową lub klasę biznes. Sprawdź godziny, lokalizację i co jest za darmo."
        canonicalUrl="https://bizneslot.info/artykuly/lounge-biznesowy-okecie-jak-wejsc"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Lounge biznesowy na Okęciu (WAW) — co oferuje i jak wejść?",
            description:
              "Przewodnik po salonikach biznesowych na Lotnisku Chopina w Warszawie: Polonez Lounge, dostep przez Priority Pass, karty kredytowe, klase biznes i status FFP.",
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
                name: "Jakie lounges sa dostepne na Lotnisku Chopina w Warszawie?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Na WAW dziala kilka salonikow: Polonez Lounge LOT (Terminal A, po odprawie, przed strefa Schengen i non-Schengen), Lounge dostepny przez Priority Pass oraz saloniki linii partnerskich dla pasazerow Star Alliance. Dla lotow krajowych dostepnosc jest ograniczona.",
                },
              },
              {
                "@type": "Question",
                name: "Jak wejsc do loungu na Okęciu bez klasy biznes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mozliwosci: 1) Karta Priority Pass (dostepna np. z kartami Mastercard World Elite Citi, Amex Platinium, ING Platinium). 2) Status FFP — Srebrna lub Zlota Karta LOT lub Star Alliance Gold. 3) Jednorazowy wstep za oplata przy wejsciu (zwykle 150-200 PLN).",
                },
              },
              {
                "@type": "Question",
                name: "Co oferuje Polonez Lounge na WAW?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Polonez Lounge oferuje: bufet z cieplymi i zimnymi posilkami, bar z alkoholem i napojami, WiFi, stanowiska do pracy, prysznice (dla posiadaczy wyzszego statusu lub po wczesniejszej rezerwacji), prasa, ciche i glosne strefy.",
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
            Lounge biznesowy na Okęciu (WAW) — co oferuje i jak wejść?
          </h1>
          <p className="text-blue-100 text-lg">
            Przed długim lotem służbowym godzina w spokojnym saloniku z ciepłym jedzeniem
            i stabilnym WiFi jest warta więcej niż kanapka przy gate. Sprawdź jak dostać się
            do loungu na Lotnisku Chopina — nawet bez biletu w biznesie.
          </p>
        </div>

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl px-6 py-5 mb-8">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-1">
            Krótka odpowiedź
          </p>
          <p className="text-gray-800 font-medium">
            Na WAW głównym salonikiem dla pasażerów biznesowych jest <strong>Polonez Lounge LOT</strong>.
            Wejście bez biletu biznes: karta <strong>Priority Pass</strong>, status{" "}
            <strong>Star Alliance Gold / LOT Złota Karta</strong> lub opłata jednorazowa przy wejściu
            (ok. 150–200 PLN).
          </p>
        </div>

        {/* Saloniki na WAW */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Saloniki biznesowe na Lotnisku Chopina — przegląd
          </h2>
          <div className="space-y-4">

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <div className="flex items-center gap-2 mb-2">
                <p className="font-bold text-gray-900 text-lg">Polonez Lounge (LOT)</p>
                <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full font-medium">Główny</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Flagowy salonik LOT Polish Airlines zlokalizowany w Terminalu A po odprawie
                bezpieczeństwa. Dwa wejścia — strefa Schengen i strefa non-Schengen
                (przed kontrolą paszportową). Otwarty codziennie.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Oferuje</p>
                  <ul className="text-gray-700 space-y-1 text-xs list-disc list-inside ml-1">
                    <li>Bufet ciepłe i zimne dania</li>
                    <li>Bar — alkohole, kawa, soki</li>
                    <li>WiFi high-speed</li>
                    <li>Stanowiska do pracy z gniazdkami</li>
                    <li>Prasa polska i zagraniczna</li>
                    <li>Strefa cicha i otwarta</li>
                    <li>Prysznice (za dopłatą lub status)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Kto wchodzi</p>
                  <ul className="text-gray-700 space-y-1 text-xs list-disc list-inside ml-1">
                    <li>Pasażerowie biznes LOT</li>
                    <li>LOT Złota Karta + 1 gość</li>
                    <li>Star Alliance Gold</li>
                    <li>Priority Pass</li>
                    <li>Dragonpass</li>
                    <li>Opłata przy wejściu</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-bold text-gray-900 text-lg mb-1">Saloniki partnerskie Star Alliance</p>
              <p className="text-gray-700 text-sm mb-3">
                Pasażerowie linii Star Alliance latający w klasie biznes lub posiadający status
                Gold mają dostęp do Polonez Lounge na zasadzie wzajemności. Dotyczy m.in.
                pasażerów Lufthansa, Swiss, Austrian, Turkish Airlines (jako partner), United.
              </p>
              <p className="text-xs text-gray-500">
                Uwaga: Turkish Airlines nie jest członkiem Star Alliance — pasażerowie TK
                korzystają z odrębnych zasad dostępu.
              </p>
            </div>

          </div>
        </section>

        {/* Sposoby dostępu */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Jak wejść do loungu — 5 sposobów
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Sposób dostępu</th>
                  <th className="px-4 py-3 text-left">Koszt</th>
                  <th className="px-4 py-3 text-left">Gość</th>
                  <th className="px-4 py-3 text-left">Uwagi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  {
                    sposob: "Bilet Business Class LOT",
                    koszt: "W cenie biletu",
                    gosc: "Tak (zazwyczaj)",
                    uwagi: "Najszerszy dostęp, priorytetowe stanowisko",
                  },
                  {
                    sposob: "LOT Złota Karta",
                    koszt: "Program lojalnościowy",
                    gosc: "+1 bez dopłaty",
                    uwagi: "Status osiągany przy ok. 60 lotach/rok",
                  },
                  {
                    sposob: "Star Alliance Gold",
                    koszt: "Program FFP partnera",
                    gosc: "+1 bez dopłaty",
                    uwagi: "Miles & More Senator, LH HON Circle itp.",
                  },
                  {
                    sposob: "Priority Pass",
                    koszt: "Karta kredytowa lub abonament",
                    gosc: "Dopłata ~50 USD/gość",
                    uwagi: "Dostępny przez wiele kart premium",
                  },
                  {
                    sposob: "Opłata jednorazowa",
                    koszt: "150–200 PLN przy wejściu",
                    gosc: "Dodatkowa opłata",
                    uwagi: "Nie zawsze dostępne przy tłoku",
                  },
                ].map((row) => (
                  <tr key={row.sposob} className="even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{row.sposob}</td>
                    <td className="px-4 py-3 text-gray-700">{row.koszt}</td>
                    <td className="px-4 py-3 text-gray-700">{row.gosc}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{row.uwagi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Priority Pass na WAW */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Priority Pass na WAW — które karty kredytowe go dają?
          </h2>
          <p className="text-gray-700 mb-4">
            Priority Pass to najpopularniejszy sposób dostępu do loungu dla podróżników
            bez statusu FFP. Na polskim rynku kartę Priority Pass oferują m.in.:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { karta: "Citi Mastercard World Elite", uwaga: "Nielimitowane wejścia" },
              { karta: "Amex Platinum (American Express)", uwaga: "Priority Pass + Centurion Lounges" },
              { karta: "ING Platinum Mastercard", uwaga: "Określona liczba wejść/rok" },
              { karta: "Pekao Mastercard World Elite", uwaga: "Sprawdź aktualny regulamin" },
              { karta: "mBank World Elite", uwaga: "Sprawdź aktualny regulamin" },
              { karta: "Abonament Priority Pass (direct)", uwaga: "Od ok. 350 USD/rok" },
            ].map((item) => (
              <div key={item.karta} className="flex items-start gap-2 rounded-xl border border-gray-200 p-3">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.karta}</p>
                  <p className="text-gray-500 text-xs">{item.uwagi}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Warunki dostępu i liczba wejść w ramach karty mogą się zmieniać. Przed podróżą
            zweryfikuj aktualny regulamin karty.
          </p>
        </section>

        {/* Lounge dla pracodawcy */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Dostęp do loungu jako benefit pracowniczy — czy warto?
          </h2>
          <p className="text-gray-700 mb-3">
            Firmy z dużą liczbą podróżujących pracowników mogą negocjować korporacyjne umowy
            z lotniskiem lub zakupić karty Priority Pass w abonamencie korporacyjnym (niższy
            koszt per karta niż indywidualnie). Korzyści:
          </p>
          <div className="space-y-2">
            {[
              "Pracownik przybywa na spotkanie wypoczęty i nakarmiony — produktywność po locie wyższa.",
              "Lounge zapewnia bezpieczną sieć WiFi — bezpieczniejsza praca ze służbowymi danymi.",
              "Benefit ceniony przez pracowników, szczególnie tych latających 10+ razy rocznie.",
              "Koszt karty Priority Pass (350–500 USD/rok) zwraca się już przy kilku wejściach zamiast kupowania jedzenia i kawy na lotnisku.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Czego lounge nie zastąpi */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Kiedy lounge nie pomaga</h2>
          <div className="space-y-2">
            {[
              "Lot opóźniony o 4+ godziny — nawet najlepszy lounge nie zmieni faktu, że tracisz czas i możesz ubiegać się o odszkodowanie EC 261.",
              "Lot odwołany — wychodzisz z lounge i musisz zadbać o lot zastępczy i dokumentację do roszczenia.",
              "Overbooking — lounge nie przysługuje, jeśli nie dostałeś się na pokład.",
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
                href: "/artykuly/karta-statusowa-lounge",
                label: "Karta statusowa i dostęp do lounge — przewodnik",
              },
              {
                href: "/artykuly/lot-sluzbowy-odwolany-ostatniej-chwili-co-zrobic",
                label: "Lot odwołany w ostatniej chwili — co zrobić?",
              },
              {
                href: "/artykuly/odszkodowanie-lot-sluzbowy-pracownik-czy-pracodawca",
                label: "Odszkodowanie EC 261 — pracownik czy pracodawca?",
              },
              {
                href: "/artykuly/programy-lojalnosciowe-dla-firm",
                label: "Programy lojalnościowe dla firm",
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
              itemType="https://schema.org/Question"
              className="border border-gray-200 rounded-xl p-5"
            >
              <h3 itemProp="name" className="font-semibold text-gray-900 mb-2">
                Czy mogę wejść do loungu na Okęciu lecąc Ryanairem lub Wizz Air?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Tak — jeśli masz kartę Priority Pass lub Dragonpass. Bilet Ryanair czy Wizz Air
                  sam w sobie nie uprawnia do wejścia, ale posiadacze kart premium mogą wchodzić
                  do Polonez Lounge niezależnie od linii, którą latają. Sprawdź czy karta
                  obejmuje lotnisko WAW przed podróżą.
                </p>
              </div>
            </div>

            <div
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="border border-gray-200 rounded-xl p-5"
            >
              <h3 itemProp="name" className="font-semibold text-gray-900 mb-2">
                Ile czasu przed lotem można wejść do loungu?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Polonez Lounge otwiera się rano wraz z pierwszymi lotami i działa do
                  ostatniego odlotu. Standardowo można wejść od momentu odprawy (check-in)
                  do momentu wyjścia do gate — zwykle 3–4 godziny przed lotem. Przy opóźnieniu
                  lotu możesz pozostać w lounge do nowego planowanego wylotu.
                </p>
              </div>
            </div>

            <div
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="border border-gray-200 rounded-xl p-5"
            >
              <h3 itemProp="name" className="font-semibold text-gray-900 mb-2">
                Czy przy opóźnieniu lotu linia pokrywa wejście do loungu?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Nie automatycznie. EC 261/2004 przy opóźnieniu powyżej 2 godzin nakłada na
                  linię obowiązek zapewnienia posiłków i napojów — ale nie wejścia do loungu.
                  Linie premium (LOT, Lufthansa) niekiedy oferują vouchery do loungu przy
                  dłuższych opóźnieniach, ale nie jest to wymóg prawny.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-2xl px-8 py-8 text-center">
          <h2 className="text-xl font-bold mb-2">Lot był opóźniony mimo odpoczynku w lounge?</h2>
          <p className="text-blue-200 mb-5 text-sm">
            Opóźnienie 3h+ uprawnia do odszkodowania EC 261 niezależnie od komfortu oczekiwania.
            ClaimWinger sprawdzi czy Twój lot kwalifikuje się do wypłaty.
          </p>
          <Link
            href="https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=lounge-biznesowy-okecie-jak-wejsc"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Sprawdź swoje roszczenie
          </Link>
        </div>
      </main>
    </>
  );
}
