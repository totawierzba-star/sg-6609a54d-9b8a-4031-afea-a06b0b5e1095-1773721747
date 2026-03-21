import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, AlertCircle, XCircle, ArrowRight, Scale, Clock, Info, HelpCircle } from "lucide-react";

export default function KiedyLotJestUznawanyZaOdwolany() {
  return (
    <>
      <SEO
        title="Kiedy lot jest uznawany za odwołany według prawa UE? [EC 261/2004]"
        description="Lot jest odwołany gdy nie zostaje wykonany zgodnie z planem i pasażer nie został wcześniej poinformowany. Sprawdź granicę między odwołaniem a opóźnieniem i kiedy należy się 600 EUR."
        url="https://bizneslot.info/artykuly/kiedy-lot-jest-uznawany-za-odwolany-prawo-ue"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Kiedy lot jest uznawany za odwołany według prawa UE?",
        "description": "Lot jest odwołany gdy nie zostaje wykonany zgodnie z pierwotnym planem. Sprawdź definicję EC 261/2004, granicę między odwołaniem a opóźnieniem i kiedy linia musi wypłacić do 600 EUR.",
        "author": { "@type": "Organization", "name": "bizneslot.info" },
        "publisher": { "@type": "Organization", "name": "bizneslot.info" },
        "datePublished": "2025-03-21",
        "dateModified": "2025-03-21",
        "inLanguage": "pl-PL",
        "about": { "@type": "Thing", "name": "odwołany lot definicja EC 261/2004 prawa pasażera" }
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Kiedy lot jest uznawany za odwołany według prawa UE?",
            "acceptedAnswer": { "@type": "Answer", "text": "Lot jest odwołany (anulowany) według rozporządzenia EC 261/2004, gdy nie zostaje wykonany zgodnie z pierwotnym planem lotu, a pasażerowie zostali przeniesieni na inny lot. Odwołanie następuje niezależnie od przyczyny, chyba że linia powiadomiła pasażera z odpowiednim wyprzedzeniem: co najmniej 14 dni przed odlotem (wtedy brak odszkodowania), 7–14 dni przed (odszkodowanie 50% jeśli lot zastępczy nie spełnia warunków) lub mniej niż 7 dni przed odlotem (pełne odszkodowanie)." }
          },
          {
            "@type": "Question",
            "name": "Jaka jest różnica między odwołaniem lotu a opóźnieniem?",
            "acceptedAnswer": { "@type": "Answer", "text": "Odwołanie oznacza, że lot w ogóle nie zostaje wykonany — samolot nie wyleci na tej trasie w tym dniu. Opóźnienie oznacza, że lot wyleci, ale z opóźnieniem względem planowanego czasu odlotu. Graniczna sytuacja: jeśli lot odleci o ponad 5 godzin później i pasażer rezygnuje — traktuje się to jak odwołanie. Zmiana trasy (re-routing) lub zmiany czasowe kwalifikują się jako odwołanie, jeśli różnica wynosi ponad 1 godzinę przy przylotach lub odlotach." }
          },
          {
            "@type": "Question",
            "name": "Ile odszkodowania za odwołany lot?",
            "acceptedAnswer": { "@type": "Answer", "text": "Odszkodowanie za odwołany lot wynosi: 250 EUR dla tras do 1500 km, 400 EUR dla tras 1500–3500 km, 600 EUR dla tras powyżej 3500 km. Odszkodowanie może być zmniejszone o 50%, jeśli linia zaoferuje lot zastępczy z minimalnym opóźnieniem. Pasażer ma też prawo do wyboru: zwrot pełnej ceny biletu LUB lot zastępczy do celu podróży." }
          },
          {
            "@type": "Question",
            "name": "Czy zmiana terminu lotu to odwołanie?",
            "acceptedAnswer": { "@type": "Answer", "text": "Tak — znaczna zmiana terminu lotu jest traktowana jak odwołanie. Zgodnie z orzecznictwem Trybunału Sprawiedliwości UE, przesunięcie godziny wylotu o ponad 3 godziny lub zmiana daty lotu oznacza, że pasażer może dochodzić praw jak przy odwołaniu, jeśli nie zaakceptował nowych warunków." }
          },
          {
            "@type": "Question",
            "name": "Kiedy odwołanie lotu nie daje prawa do odszkodowania?",
            "acceptedAnswer": { "@type": "Answer", "text": "Odwołanie lotu nie daje prawa do odszkodowania gdy: (1) linia powiadomiła pasażera co najmniej 14 dni przed odlotem, (2) linia powiadomiła 7–14 dni przed odlotem i zaoferowała lot zastępczy w podobnych godzinach, (3) przyczyną były nadzwyczajne okoliczności (ekstremalna pogoda, strajk kontrolerów ruchu, zamknięcie przestrzeni powietrznej), których linia nie mogła uniknąć mimo podjęcia wszelkich środków." }
          },
          {
            "@type": "Question",
            "name": "Co mi przysługuje gdy lot zostanie odwołany?",
            "acceptedAnswer": { "@type": "Answer", "text": "Gdy lot zostaje odwołany przysługuje Ci: (1) wybór między zwrotem pełnej ceny biletu a lotem zastępczym do celu podróży, (2) opieka na lotnisku — posiłki, napoje, nocleg jeśli konieczny, (3) odszkodowanie finansowe 250–600 EUR (chyba że linia powiadomiła z wyprzedzeniem lub zachodzą nadzwyczajne okoliczności). Wszystkie te prawa przysługują niezależnie — możesz żądać zarówno lotu zastępczego, jak i odszkodowania." }
          }
        ]
      })}} />

      {/* Gradient Hero */}
      <section className="bg-gradient-to-r from-rose-700 to-red-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/artykuly" className="text-rose-200 hover:text-white text-sm mb-6 inline-block">
            ← Wszystkie artykuły
          </Link>
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Scale className="w-4 h-4" />
            Prawa pasażera
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Kiedy lot jest uznawany za odwołany według prawa UE?
          </h1>
          <p className="text-xl text-rose-100 mb-8 max-w-3xl">
            Definicja, granica między odwołaniem a opóźnieniem, zasady powiadomienia
            i kiedy należy się odszkodowanie do 600 EUR — wszystko na podstawie rozporządzenia EC 261/2004.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
              <XCircle className="w-5 h-5 text-red-200" />
              <span className="font-semibold">Odwołanie ≠ opóźnienie</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-rose-200" />
              <span className="font-semibold">Liczy się termin powiadomienia</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
              <CheckCircle2 className="w-5 h-5 text-green-300" />
              <span className="font-semibold">Do 600 EUR odszkodowania</span>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Direct Answer Box */}
          <div className="my-8 p-6 bg-green-50 border-2 border-green-400 rounded-2xl">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-green-900 text-lg mb-2">Bezpośrednia odpowiedź:</p>
                <p className="text-slate-800 text-lg leading-relaxed">
                  Lot jest uznawany za <strong>odwołany (anulowany)</strong> według rozporządzenia WE 261/2004, gdy
                  <strong> nie zostaje wykonany zgodnie z pierwotnym planem lotu</strong> i pasażer zostaje przeniesiony
                  na inny lot lub musi zrezygnować z podróży.
                </p>
                <ul className="mt-3 space-y-1 text-slate-700 text-sm">
                  <li>• Lot nie wyleci w tym dniu na tej trasie w ogóle</li>
                  <li>• Lot odleci ponad 5 godzin później i pasażer rezygnuje z podróży</li>
                  <li>• Linia znacząco zmienia trasę lub godzinę (bez akceptacji pasażera)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Definicja prawna */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Definicja odwołania lotu w EC 261/2004</h2>

          <p className="text-lg text-slate-700 mb-4">
            Rozporządzenie WE 261/2004 w art. 2 lit. l definiuje odwołanie jako:
          </p>

          <div className="my-6 p-6 bg-slate-800 text-white rounded-xl">
            <p className="text-lg italic leading-relaxed">
              „<strong>Odwołanie</strong> oznacza niewykonanie lotu, który był uprzednio zaplanowany i na który zostało zarezerwowane
              przynajmniej jedno miejsce."
            </p>
            <p className="text-sm text-slate-400 mt-3">Art. 2 lit. l rozporządzenia WE 261/2004</p>
          </div>

          <p className="text-lg text-slate-700 mb-6">
            W praktyce Trybunał Sprawiedliwości UE oraz organy regulacyjne doprecyzowały tę definicję poprzez szereg orzeczeń.
            Poniżej wszystkie przypadki, które prawo UE traktuje jako odwołanie.
          </p>

          {/* Przypadki odwołania */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Co prawo UE uznaje za odwołanie lotu?</h2>

          <div className="space-y-4 my-8">
            <div className="bg-white rounded-xl border-l-4 border-red-500 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Lot w ogóle nie wyleci</h3>
                  <p className="text-slate-600 text-sm">Najbardziej oczywisty przypadek — linia anuluje rejs i nie ma żadnego samolotu na tej trasie w tym dniu. Dotyczy to zarówno odwołań ogłoszonych kilka tygodni wcześniej, jak i w dniu lotu.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border-l-4 border-red-500 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Opóźnienie powyżej 5 godzin + rezygnacja pasażera</h3>
                  <p className="text-slate-600 text-sm">
                    Jeśli lot opóźni się o co najmniej 5 godzin i <strong>pasażer zdecyduje się nie lecieć</strong>,
                    ma prawo do pełnego zwrotu ceny biletu — identycznie jak przy odwołaniu (art. 6 ust. 1 lit. c pkt iii).
                    Odszkodowanie 250–600 EUR przysługuje od 3h opóźnienia, niezależnie od rezygnacji.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border-l-4 border-red-500 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Znaczna zmiana godziny odlotu lub przylotu</h3>
                  <p className="text-slate-600 text-sm">
                    Zgodnie z orzecznictwem TSUE (C-402/07, Sturgeon v Condor), zmiana godziny o ponad 3 godziny przy przylocie
                    lub znaczna zmiana daty może być traktowana jako odwołanie, jeśli pasażer nie zaakceptował nowych warunków.
                    Praktyczna granica stosowana przez krajowe organy regulacyjne: zmiana &gt;1h = podstawa do roszczeń.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border-l-4 border-red-500 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Zmiana trasy (re-routing) bez zgody pasażera</h3>
                  <p className="text-slate-600 text-sm">
                    Jeśli linia zmienia trasę — np. z lotu bezpośredniego na lot z przesiadką, lub zmienia lotnisko docelowe
                    w tym samym mieście — i pasażer nie wyraził zgody, jest to traktowane jako odwołanie oryginalnego lotu.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border-l-4 border-red-500 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Zawrócenie samolotu po starcie</h3>
                  <p className="text-slate-600 text-sm">
                    Jeśli samolot wystartuje, ale zostanie zmuszony do powrotu na lotnisko odlotu i lot nie zostanie ukończony,
                    jest to traktowane jako odwołanie — nie jako opóźnienie. Pasażerom przysługują pełne prawa jak przy anulowaniu.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Odwołanie vs Opóźnienie — kluczowa różnica */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Odwołanie a opóźnienie — kluczowe różnice</h2>

          <div className="overflow-x-auto my-8 rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-5 py-4 text-left font-semibold">Cecha</th>
                  <th className="px-5 py-4 text-left font-semibold text-red-300">Odwołanie</th>
                  <th className="px-5 py-4 text-left font-semibold text-amber-300">Opóźnienie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-medium text-slate-900">Definicja</td>
                  <td className="px-5 py-4 text-slate-700">Lot w ogóle nie wyleci na tej trasie</td>
                  <td className="px-5 py-4 text-slate-700">Lot wyleci, ale z opóźnieniem</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-medium text-slate-900">Odszkodowanie</td>
                  <td className="px-5 py-4 text-slate-700">250/400/600 EUR (+ zależy od czasu powiadomienia)</td>
                  <td className="px-5 py-4 text-slate-700">250/400/600 EUR od 3h opóźnienia przy przylocie</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-medium text-slate-900">Zwrot biletu</td>
                  <td className="px-5 py-4 font-semibold text-green-700">TAK — zawsze</td>
                  <td className="px-5 py-4 text-slate-700">Tylko przy opóźnieniu &gt;5h i rezygnacji</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-medium text-slate-900">Opieka na lotnisku</td>
                  <td className="px-5 py-4 font-semibold text-green-700">TAK — natychmiast</td>
                  <td className="px-5 py-4 text-slate-700">Od 2h opóźnienia</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-medium text-slate-900">Lot alternatywny</td>
                  <td className="px-5 py-4 font-semibold text-green-700">TAK — do wyboru przez pasażera</td>
                  <td className="px-5 py-4 text-slate-700">Linia może zaproponować</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Kiedy powiadomienie znosi odszkodowanie */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Kiedy wcześniejsze powiadomienie znosi prawo do odszkodowania?</h2>

          <p className="text-lg text-slate-700 mb-6">
            Samo odwołanie lotu <strong>nie zawsze</strong> oznacza prawo do odszkodowania finansowego.
            Kluczowa jest data, w której linia powiadomiła pasażera. Rozporządzenie EC 261/2004 art. 5 ust. 1 lit. c ustanawia trzy progi:
          </p>

          <div className="space-y-4 my-8">
            <div className="bg-red-50 rounded-xl border border-red-200 p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">✗</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Powiadomienie ≥ 14 dni przed odlotem → brak odszkodowania</h3>
                  <p className="text-slate-600 text-sm">
                    Jeśli linia powiadomiła Cię o odwołaniu co najmniej 14 dni przed planowanym odlotem, odszkodowanie finansowe
                    nie przysługuje. Masz jednak prawo do <strong>zwrotu biletu lub lotu zastępczego</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl border border-amber-200 p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">~</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Powiadomienie 7–14 dni przed odlotem → odszkodowanie częściowe lub brak</h3>
                  <p className="text-slate-600 text-sm">
                    Odszkodowanie nie przysługuje, jeśli linia zaoferuje lot zastępczy wylatujący nie wcześniej niż 2 godziny przed
                    planowanym odlotem i docierający do celu nie później niż 4 godziny po planowanym przylocie. W pozostałych przypadkach
                    odszkodowanie przysługuje w pełnej wysokości.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl border border-green-200 p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">✓</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Powiadomienie &lt; 7 dni przed odlotem → pełne odszkodowanie</h3>
                  <p className="text-slate-600 text-sm">
                    Jeśli linia powiadomiła o odwołaniu mniej niż 7 dni przed planowanym odlotem, przysługuje pełne odszkodowanie
                    250/400/600 EUR — chyba że przyczyną były nadzwyczajne okoliczności. Dotyczy to też sytuacji, gdy dowiedziałeś
                    się o odwołaniu dopiero na lotnisku.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contextual CTA */}
          <div className="my-10 p-6 bg-red-700 rounded-2xl text-white">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <p className="font-bold text-lg mb-1">Twój lot służbowy został odwołany?</p>
                <p className="text-red-100 text-sm">
                  Sprawdź w 2 minuty, czy należy Ci się odszkodowanie do 600 EUR. ClaimWinger weryfikuje każde roszczenie bezpłatnie
                  — płacisz prowizję tylko jeśli odzyskamy pieniądze.
                </p>
              </div>
              <Link
                href="https://claimwinger.com/pl/odwolany-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=kiedy-lot-odwolany"
                className="inline-flex items-center gap-2 bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors whitespace-nowrap flex-shrink-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sprawdź odszkodowanie za odwołany lot <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Nadzwyczajne okoliczności */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Nadzwyczajne okoliczności — kiedy odszkodowanie nie przysługuje mimo odwołania</h2>

          <p className="text-lg text-slate-700 mb-6">
            Nawet jeśli linia powiadomiła Cię późno (mniej niż 7 dni) lub wcale, odszkodowanie nie przysługuje,
            gdy odwołanie wynikło z <strong>nadzwyczajnych okoliczności</strong>, których linia nie mogła uniknąć
            mimo podjęcia wszelkich środków zapobiegawczych.
          </p>

          <div className="grid md:grid-cols-2 gap-5 my-6">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Odszkodowanie NIE przysługuje
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span>Ekstremalne warunki pogodowe (huragan, śnieżyca uniemożliwiająca lot)</span></li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span>Strajk kontrolerów ruchu lotniczego (ATC)</span></li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span>Zamknięcie przestrzeni powietrznej (decyzja władz)</span></li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span>Chmura pyłu wulkanicznego</span></li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span>Zagrożenie terrorystyczne potwierdzone przez władze</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Odszkodowanie PRZYSŁUGUJE
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Awaria techniczna samolotu (usterka sprzętu)</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Strajk własnego personelu linii (pilotów, kabinowej)</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Problemy operacyjne linii (brak załogi, planowanie)</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Zbyt mała sprzedaż biletów (odwołanie z powodów komercyjnych)</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Opóźnienie poprzedniego lotu tego samego samolotu</span></li>
              </ul>
            </div>
          </div>

          <div className="my-6 p-5 bg-blue-50 border-l-4 border-blue-400 rounded-r-xl">
            <div className="flex items-start gap-2">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-900">
                <strong>Ważne:</strong> Linia musi <em>udowodnić</em>, że zachodziły nadzwyczajne okoliczności. Sam argument
                „złe warunki pogodowe" bez dokumentacji (np. komunikatów lotniska, NOTAM) nie wystarczy.
                Wiele linii niesłusznie powołuje się na tę klauzulę — specjaliści od odszkodowań
                regularnie ją obalają przed sądami i ULC.
              </p>
            </div>
          </div>

          {/* Co mi przysługuje */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Co przysługuje pasażerowi gdy lot zostaje odwołany?</h2>

          <p className="text-lg text-slate-700 mb-6">
            Prawa przy odwołanym locie są <strong>niezależne od siebie</strong> — możesz żądać wszystkich jednocześnie:
          </p>

          <div className="grid md:grid-cols-3 gap-5 my-8">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Scale className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Odszkodowanie finansowe</h3>
              <p className="text-2xl font-black text-blue-700 mb-1">250–600 EUR</p>
              <p className="text-xs text-slate-600">W zależności od trasy i czasu powiadomienia</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Zwrot biletu lub lot zastępczy</h3>
              <p className="text-sm text-slate-600 mt-1">Pełny zwrot ceny biletu <strong>lub</strong> przelot do celu podróży w jak najkrótszym czasie — wybór należy do Ciebie</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <HelpCircle className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Opieka na lotnisku</h3>
              <p className="text-sm text-slate-600 mt-1">Posiłki i napoje, nocleg jeśli konieczny, transport do hotelu i z powrotem, 2 rozmowy telefoniczne lub e-maile</p>
            </div>
          </div>

          {/* Dark CTA Banner */}
          <div className="my-12 p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl text-white">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold mb-3">Odwołali Ci lot? Odzyskaj do 600 EUR</h3>
              <p className="text-slate-300 mb-2">
                Linie lotnicze odmawiają wypłaty w ok. 30% zasadnych przypadków. ClaimWinger weryfikuje
                każde roszczenie i — jeśli zasadne — dochodzi odszkodowania aż do skutku.
              </p>
              <p className="text-slate-400 text-sm mb-6">Bez opłat z góry. Prowizja tylko od odzyskanej kwoty.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://claimwinger.com/pl/odwolany-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=kiedy-lot-odwolany-cta"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sprawdź odszkodowanie za odwołany lot
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="https://claimwinger.com/pl/opozniony-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=kiedy-lot-odwolany-cta"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-xl transition-colors border border-white/30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lot opóźniony? Sprawdź tutaj
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <section className="my-16" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Najczęstsze pytania</h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Kiedy lot jest uznawany za odwołany według prawa UE?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    Lot jest odwołany gdy nie zostaje wykonany zgodnie z pierwotnym planem — samolot nie wyleci na tej trasie w tym dniu,
                    linia znacząco zmienia godzinę lub trasę bez zgody pasażera, albo lot zawraca po starcie. Pasażer przeniesiony na inny
                    lot bez akceptacji również może dochodzić praw jak przy odwołaniu.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Jaka jest różnica między odwołaniem lotu a opóźnieniem?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    Odwołanie oznacza, że lot w ogóle nie zostaje wykonany. Opóźnienie oznacza, że lot wyleci, ale z opóźnieniem.
                    Graniczna sytuacja: jeśli lot opóźni się o ponad 5 godzin i pasażer rezygnuje z podróży — traktuje się to jak odwołanie
                    i przysługuje pełny zwrot biletu. Odszkodowanie 250–600 EUR przysługuje przy opóźnieniu od 3h.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Ile odszkodowania za odwołany lot?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    Odszkodowanie za odwołany lot wynosi: 250 EUR dla tras do 1500 km, 400 EUR dla tras 1500–3500 km, 600 EUR dla tras
                    powyżej 3500 km. Kwota może być zmniejszona o 50% jeśli linia zaproponowała lot zastępczy z podobnym czasem przylotu.
                    Dodatkowy zwrot biletu przysługuje zawsze, niezależnie od odszkodowania.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Czy zmiana terminu lotu to odwołanie?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    Tak — znaczna zmiana terminu lotu jest traktowana jak odwołanie. Przesunięcie godziny przylotu o ponad 3 godziny
                    lub zmiana daty oznacza, że pasażer może dochodzić praw jak przy odwołaniu, jeśli nie zaakceptował nowych warunków.
                    Zmiana lotniska docelowego w tym samym mieście (np. Heathrow → Luton) bez zgody pasażera to również odwołanie.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Kiedy odwołanie lotu nie daje prawa do odszkodowania?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    Odszkodowanie nie przysługuje gdy: linia powiadomiła co najmniej 14 dni przed odlotem; linia powiadomiła 7–14 dni
                    wcześniej i zaoferowała lot zastępczy w podobnych godzinach; przyczyną były nadzwyczajne okoliczności (ekstremalna pogoda,
                    strajk ATC, zamknięcie przestrzeni powietrznej), których linia nie mogła uniknąć.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Co mi przysługuje gdy lot zostanie odwołany?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    Gdy lot zostaje odwołany przysługuje Ci: (1) wybór między zwrotem pełnej ceny biletu a lotem zastępczym do celu podróży,
                    (2) opieka na lotnisku — posiłki, napoje, nocleg jeśli konieczny, (3) odszkodowanie finansowe 250–600 EUR jeśli nie
                    powiadomiono z odpowiednim wyprzedzeniem lub brak nadzwyczajnych okoliczności. Wszystkie prawa przysługują niezależnie od siebie.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="my-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Powiązane artykuły</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/artykuly/lot-sluzbowy-odwolany-ostatniej-chwili-co-zrobic" className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 mb-2">Lot służbowy odwołany w ostatniej chwili — co zrobić</h3>
                <p className="text-sm text-slate-600">Plan działania na pierwsze 60 minut po odwołaniu. Jak znaleźć alternatywny transport na spotkanie biznesowe.</p>
              </Link>
              <Link href="/artykuly/ile-wynosi-odszkodowanie-opozniony-lot-sluzbowy" className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 mb-2">Ile wynosi odszkodowanie za opóźniony lot?</h3>
                <p className="text-sm text-slate-600">Pełna tabela: 250, 400 lub 600 EUR. Różnice między odwołaniem a opóźnieniem w kontekście odszkodowania.</p>
              </Link>
              <Link href="/artykuly/ec-261-2004-a-loty-sluzbowe-co-obejmuje-rozporzadzenie" className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 mb-2">EC 261/2004 — co obejmuje rozporządzenie</h3>
                <p className="text-sm text-slate-600">Pełna podstawa prawna: zakres terytorialny, prawa pasażera, granice ochrony.</p>
              </Link>
              <Link href="/artykuly/czy-pracodawca-moze-zatrzymac-odszkodowanie-za-lot" className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 mb-2">Czy pracodawca może zatrzymać odszkodowanie?</h3>
                <p className="text-sm text-slate-600">Nie — odszkodowanie z EC 261/2004 zawsze należy do pracownika, nie do firmy.</p>
              </Link>
            </div>
          </section>

        </article>
      </div>
    </>
  );
}
