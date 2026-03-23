import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight, Scale, AlertTriangle } from "lucide-react";

export default function DowngradeKlasy() {
  return (
    <>
      <SEO
        title="Downgrade klasy lotu — z biznes do economy. Jakie odszkodowanie EC 261?"
        description="Linia przesadziła Cię z biznes do economy? EC 261/2004 art. 10 gwarantuje zwrot 30–75% ceny biletu w ciągu 7 dni. Sprawdź jak wyliczyć kwotę i jak złożyć roszczenie."
        canonicalUrl="https://bizneslot.info/artykuly/downgrade-klasy-biznes-do-economy-odszkodowanie"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Downgrade klasy lotu — z biznes do economy. Jakie odszkodowanie EC 261/2004?",
            description:
              "EC 261/2004 art. 10 zobowiązuje linie do zwrotu 30-75% ceny biletu przy przymusowym przesadzeniu pasażera do niższej klasy. Zwrot musi nastąpić w ciągu 7 dni.",
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
                name: "Ile zwrotu przysługuje przy downgrade z biznes do economy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "EC 261/2004 art. 10 przewiduje: 30% ceny biletu na lotach do 1500 km, 50% na lotach 1500-3500 km i lotach wewnątrz UE powyżej 1500 km, 75% na lotach powyżej 3500 km poza UE. Zwrot liczy się od ceny zapłaconej za bilet (lub ceny biletu w danej klasie jeśli płacił pracodawca).",
                },
              },
              {
                "@type": "Question",
                name: "W jakim terminie linia musi zwrócić pieniądze za downgrade?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "EC 261/2004 art. 7 ust. 3 w zw. z art. 10 ust. 2 nakłada obowiązek wypłaty w ciągu 7 dni. Zwrot powinien nastąpić gotówką, przelewem bankowym lub czekiem. Linia nie może narzucić vouchera bez Twojej zgody.",
                },
              },
              {
                "@type": "Question",
                name: "Czy pracodawca czy pracownik dostaje zwrot za downgrade?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Zwrot z tytułu downgrade EC 261/2004 przysługuje pasażerowi — czyli pracownikowi, który odbył lot. Nie ma znaczenia kto opłacił bilet. Jeśli pracodawca kupił bilet Business Class, to pracownik jest uprawniony do zwrotu proporcjonalnej części ceny.",
                },
              },
              {
                "@type": "Question",
                name: "Co zrobić gdy linia odmawia zwrotu za downgrade?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Złóż pisemne roszczenie powołując się na EC 261/2004 art. 10 ust. 2. Jeśli linia nie odpowie w 30 dni lub odmówi — złóż skargę do ULC (Urząd Lotnictwa Cywilnego) lub skieruj sprawę do e-Sądu. Możesz też skorzystać z usług firmy roszczeniowej.",
                },
              },
              {
                "@type": "Question",
                name: "Czy downgrade to to samo co overbooking?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nie. Overbooking (bumping) oznacza odmowę wejścia na pokład. Downgrade to sytuacja gdy wejdziesz na pokład, ale do niższej klasy niż zarezerwowana. Oba przypadki są regulowane przez EC 261/2004, ale na innych zasadach.",
                },
              },
              {
                "@type": "Question",
                name: "Czy przy downgrade przysługuje też odszkodowanie EC 261 do 600 EUR?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nie. EC 261/2004 art. 10 przewiduje wyłącznie zwrot procentowy ceny biletu — nie odszkodowanie ryczałtowe 250/400/600 EUR. To odrębne uprawnienie od odszkodowania za opóźnienie lub odwołanie lotu.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-violet-700 to-purple-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-violet-200 text-sm mb-4">
            <Link href="/artykuly" className="hover:text-white transition-colors">
              Artykuły
            </Link>
            <span>/</span>
            <span>Prawo i Finanse</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-violet-500/30 text-violet-100 px-3 py-1 rounded-full text-sm font-medium">
              EC 261/2004
            </span>
            <span className="text-violet-200 text-sm">8 min czytania</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Downgrade klasy lotu — z biznes do economy. Jakie odszkodowanie?
          </h1>
          <p className="text-xl text-violet-100 max-w-2xl">
            Zarezerwowałeś Business Class, a linia przesadziła Cię do economy bez ostrzeżenia. EC 261/2004 art. 10 gwarantuje Ci zwrot do 75% ceny biletu — niezależnie od powodu downgrade.
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
                EC 261/2004 art. 10 gwarantuje zwrot <strong>30%, 50% lub 75%</strong> ceny biletu przy przymusowym
                przesadzeniu do niższej klasy — zależnie od dystansu trasy. Zwrot musi nastąpić w ciągu
                <strong> 7 dni</strong>. Linia nie może odmówić ani zastąpić go voucherem bez Twojej zgody.
                To uprawnienie odrębne od odszkodowania 250–600 EUR za opóźnienie.
              </p>
            </div>
          </div>
        </div>

        {/* Podstawa prawna */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Co mówi EC 261/2004 o downgrade?</h2>
          <p className="text-slate-700 mb-5">
            Downgrade reguluje <strong>art. 10 EC 261/2004</strong> — jeden z rzadziej znanych przepisów
            rozporządzenia. Dotyczy sytuacji gdy przewoźnik przymusowo umieszcza pasażera w klasie niższej
            niż ta, na którą wykupił bilet.
          </p>

          <div className="bg-violet-50 border border-violet-200 rounded-xl p-5 mb-5">
            <p className="font-semibold text-violet-900 mb-2 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              Art. 10 ust. 2 EC 261/2004
            </p>
            <p className="text-violet-800 text-sm">
              "Jeżeli przewoźnik lotniczy wykonujący przewóz umieszcza pasażera w klasie niższej niż ta,
              na którą wykupił bilet, zwraca pasażerowi w ciągu siedmiu dni, w sposób określony w art. 7 ust. 3:
              30% ceny biletu na wszystkich lotach do 1500 km; 50% ceny biletu na wszystkich lotach
              wewnątrzwspólnotowych powyżej 1500 km i na wszystkich innych lotach od 1500 do 3500 km;
              75% ceny biletu na wszystkich innych lotach."
            </p>
          </div>

          <p className="text-slate-700">
            Kluczowe cechy tego przepisu: obowiązek zwrotu jest <strong>bezwarunkowy</strong> (linia nie może
            powołać się na nadzwyczajne okoliczności), termin to <strong>7 dni</strong> (nie 30), a zwrot
            musi być gotówkowy — nie voucher.
          </p>
        </section>

        {/* Tabela kwot */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Ile zwrotu przysługuje? Tabela</h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 mb-5">
            <table className="w-full text-sm">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="text-left p-4 font-semibold">Dystans lotu</th>
                  <th className="text-left p-4 font-semibold">Typ trasy</th>
                  <th className="text-center p-4 font-semibold">Zwrot ceny biletu</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 text-slate-700">Do 1500 km</td>
                  <td className="p-4 text-slate-700">Dowolna</td>
                  <td className="p-4 text-center font-bold text-violet-700 text-lg">30%</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50 hover:bg-slate-100">
                  <td className="p-4 text-slate-700">1500–3500 km</td>
                  <td className="p-4 text-slate-700">Dowolna</td>
                  <td className="p-4 text-center font-bold text-violet-700 text-lg">50%</td>
                </tr>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 text-slate-700">Powyżej 1500 km</td>
                  <td className="p-4 text-slate-700">Wewnątrz UE</td>
                  <td className="p-4 text-center font-bold text-violet-700 text-lg">50%</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50 hover:bg-slate-100">
                  <td className="p-4 text-slate-700">Powyżej 3500 km</td>
                  <td className="p-4 text-slate-700">UE poza UE</td>
                  <td className="p-4 text-center font-bold text-violet-700 text-lg">75%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-300 rounded-xl p-4">
            <p className="text-amber-900 text-sm">
              <strong>Podstawa obliczenia:</strong> Zwrot liczy się od <em>ceny biletu w klasie zarezerwowanej</em>.
              Jeśli pracodawca kupił bilet Business za 3000 PLN, a Ty zostałeś przesadzony na lot WAW–LHR
              (ok. 1800 km, wewnątrz UE) — przysługuje Ci 50% z 3000 PLN = <strong>1500 PLN</strong>.
            </p>
          </div>
        </section>

        {/* Przykład służbowy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Przykład: downgrade na locie służbowym WAW–DXB</h2>

          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-4">
            <p className="text-slate-700 text-sm">
              <strong>Tomasz</strong>, dyrektor finansowy, leciał LOT-em WAW–DXB w Business Class (bilet 8 200 PLN,
              opłacony przez firmę). Przy gate pracownik linii poinformował go, że z powodu przepełnienia samolotu
              zostaje przesadzony do Economy. Tomasz dotarł do Dubai, ale w Economy.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <p className="font-semibold text-slate-800 text-sm mb-2">Parametry roszczenia</p>
                <ul className="text-slate-600 text-xs space-y-1">
                  <li>Trasa: WAW–DXB (~4900 km)</li>
                  <li>Typ: UE poza UE, ponad 3500 km</li>
                  <li>Zwrot: 75% ceny biletu</li>
                  <li>Cena biletu: 8 200 PLN</li>
                </ul>
              </div>
              <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                <p className="font-semibold text-violet-900 text-sm mb-2">Należny zwrot</p>
                <p className="text-violet-800 text-2xl font-bold">6 150 PLN</p>
                <p className="text-violet-700 text-xs mt-1">75% z 8 200 PLN — w ciągu 7 dni</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-blue-800 text-xs">
                <strong>Uwaga:</strong> Choć bilet opłacił pracodawca, zwrot przysługuje Tomaszowi jako pasażerowi.
                Kwestia czy firma ma do niego roszczenie wewnętrznie — to sprawa między Tomaszem a pracodawcą,
                nie między linią a firmą.
              </p>
            </div>
          </div>
        </section>

        {/* Typowe sytuacje */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Kiedy dochodzi do downgrade?</h2>

          <div className="space-y-3">
            {[
              {
                title: "Overbooking klasy biznes",
                desc: "Linia sprzedała więcej miejsc Business Class niż dostępnych. Pasażerowie bez wyższego statusu FFP lub ci, którzy zameldowali się jako ostatni, są przesadzani do Economy.",
              },
              {
                title: "Zmiana typu samolotu",
                desc: "Mniejszy samolot zastępczy ma mniej miejsc w klasie biznes niż oryginał. Część pasażerów Business musi lecieć w Economy.",
              },
              {
                title: "Usterka fotela lub kabiny biznes",
                desc: "Fotel Business lub cały przedział jest niesprawny. Linia może zaproponować Economy zamiast opóźniać lot.",
              },
              {
                title: "Reorganizacja kabiny",
                desc: "Zmiana konfiguracji samolotu przez linię skutkuje mniejszą liczbą miejsc Business. Pasażerowie z wcześniejszymi rezerwacjami mogą zostać przeniesieni.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">{item.title}</p>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Czego linia nie może */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Czego linia nie może zrobić przy downgrade</h2>

          <div className="space-y-3">
            {[
              "Odmówić zwrotu powołując się na nadzwyczajne okoliczności — art. 10 nie przewiduje żadnych wyjątków",
              "Zaproponować voucher zamiast gotówki bez Twojej zgody — zwrot musi być w gotówce lub przelewem",
              "Zwlekać z wypłatą dłużej niż 7 dni od momentu downgrade",
              "Zaoferować upgrade przy innym locie zamiast zwrotu gotówkowego",
              "Uzależniać zwrotu od podpisania oświadczenia zrzekającego się dalszych roszczeń",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-red-800 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kontekstowe CTA */}
        <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-violet-900 text-lg">Przesadzono Cię do niższej klasy?</p>
              <p className="text-violet-700 text-sm mt-1">
                ClaimWinger pomoże wyliczyć należny zwrot i wyegzekwować go od linii w ustawowym terminie.
                Bezpłatna ocena, wynagrodzenie tylko przy sukcesie.
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl?utm_source=bizneslot&utm_medium=article&utm_campaign=downgrade-klasy-biznes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-800 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Sprawdź roszczenie <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Jak złożyć roszczenie */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Jak złożyć roszczenie o zwrot za downgrade?</h2>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Zbierz dokumenty na miejscu",
                desc: "Zachowaj boarding pass z Economy (dowód, że leciałeś niższą klasą), potwierdzenie rezerwacji Business Class i dowód zapłaty ceny biletu (potwierdzenie płatności firmowej lub własnej).",
                color: "bg-violet-100 text-violet-700",
              },
              {
                step: "2",
                title: "Wylicz należną kwotę",
                desc: "Ustal dystans trasy (np. w Google Flights lub GCmap.com), sprawdź tabelę procentową (30/50/75%), pomnóż przez cenę biletu Business Class. To Twoje minimalne roszczenie.",
                color: "bg-blue-100 text-blue-700",
              },
              {
                step: "3",
                title: "Wyslij pisemne roszczenie do linii",
                desc: "Pismo do linii z powołaniem się na EC 261/2004 art. 10 ust. 2. Podaj numer lotu, datę, klasę zarezerwowaną i faktyczną, cenę biletu i wyliczoną kwotę zwrotu. Wyznacz 7-dniowy termin.",
                color: "bg-teal-100 text-teal-700",
              },
              {
                step: "4",
                title: "Eskaluj przy braku reakcji",
                desc: "Brak zwrotu po 7 dniach lub odmowa bez podstawy prawnej — ULC, e-Sąd lub firma roszczeniowa. Art. 10 jest klarowny i sądy rzadko dają liniom pole do negocjacji.",
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
              <h3 className="text-2xl font-bold mb-2">Linia przesadziła Cię do economy i nie zwróciła różnicy?</h3>
              <p className="text-slate-300 text-sm">
                ClaimWinger zna art. 10 EC 261/2004 i wie jak wyegzekwować zwrot od linii.
                Bezpłatna ocena, bez kosztów z góry.
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl?utm_source=bizneslot&utm_medium=article&utm_campaign=downgrade-klasy-biznes-cta"
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
                q: "Ile zwrotu przysługuje przy downgrade z biznes do economy?",
                a: "EC 261/2004 art. 10 przewiduje: 30% ceny biletu na lotach do 1500 km, 50% na lotach 1500-3500 km i lotach wewnątrz UE powyżej 1500 km, 75% na lotach powyżej 3500 km poza UE.",
              },
              {
                q: "W jakim terminie linia musi zwrócic pieniądze za downgrade?",
                a: "EC 261/2004 nakłada obowiązek wypłaty w ciągu 7 dni. Zwrot powinien nastąpić gotówką, przelewem bankowym lub czekiem. Linia nie może narzucić vouchera bez Twojej zgody.",
              },
              {
                q: "Czy pracodawca czy pracownik dostaje zwrot za downgrade?",
                a: "Zwrot z tytułu downgrade EC 261/2004 przysługuje pasażerowi — czyli pracownikowi, który odbył lot. Nie ma znaczenia kto opłacił bilet.",
              },
              {
                q: "Co zrobić gdy linia odmawia zwrotu za downgrade?",
                a: "Złóż pisemne roszczenie powołując się na EC 261/2004 art. 10 ust. 2. Jeśli linia nie odpowie w 7 dni lub odmówi — złóż skargę do ULC lub skieruj sprawę do e-Sądu.",
              },
              {
                q: "Czy downgrade to to samo co overbooking?",
                a: "Nie. Overbooking (bumping) oznacza odmowę wejścia na pokład. Downgrade to sytuacja gdy wejdziesz na pokład, ale do niższej klasy niż zarezerwowana. Oba przypadki reguluje EC 261/2004, ale na innych zasadach.",
              },
              {
                q: "Czy przy downgrade przysługuje też odszkodowanie EC 261 do 600 EUR?",
                a: "Nie. EC 261/2004 art. 10 przewiduje wyłącznie zwrot procentowy ceny biletu — nie odszkodowanie ryczałtowe 250/400/600 EUR. To odrębne uprawnienie od odszkodowania za opóźnienie lub odwołanie.",
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
              className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-violet-400 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-900 text-sm mb-1">
                Ile wynosi odszkodowanie za opóźniony lot służbowy?
              </p>
              <p className="text-slate-500 text-xs">Pełna tabela 250/400/600 EUR — inne uprawnienie niż downgrade</p>
            </Link>
            <Link
              href="/artykuly/czy-pracodawca-moze-zatrzymac-odszkodowanie-za-lot"
              className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-violet-400 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-900 text-sm mb-1">
                Czy pracodawca może zatrzymać odszkodowanie za lot?
              </p>
              <p className="text-slate-500 text-xs">Kto jest uprawniony do odszkodowania — pracownik czy firma</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
