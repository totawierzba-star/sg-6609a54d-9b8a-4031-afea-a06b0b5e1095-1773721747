import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Clock, CheckCircle, AlertTriangle, ArrowRight, Moon, Sun, Brain } from "lucide-react";

export default function JetLagPodrozeSluzbowe() {
  return (
    <>
      <SEO
        title="Jet lag w podróży służbowej — jak minimalizować skutki i być gotowym na spotkanie? | bizneslot.info"
        description="Praktyczny przewodnik po jet lagu dla podróżnika służbowego: protokół przed lotem, strategie w samolocie, regeneracja w hotelu i kiedy warto przylecieć dzień wcześniej."
        canonicalUrl="https://bizneslot.info/artykuly/jet-lag-podroze-sluzbowe"
        ogType="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Jet lag w podróży służbowej — jak minimalizować skutki i być gotowym na spotkanie?",
          description: "Jak radzić sobie z jet lagiem w podróżach służbowych? Protokół przed lotem, strategie w samolocie i regeneracja przy piętnastu godzinach różnicy czasu.",
          datePublished: "2026-03-22",
          author: { "@type": "Organization", name: "bizneslot.info" },
          publisher: { "@type": "Organization", name: "bizneslot.info" }
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <Brain className="w-4 h-4" />
            <span>Zdrowie w podróży</span>
            <span className="mx-2">·</span>
            <Clock className="w-4 h-4" />
            <span>8 min czytania</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Jet lag w podróży służbowej — jak minimalizować skutki i być gotowym na spotkanie?
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Lądowanie w Tokio o 7 rano, spotkanie o 9. Lub powrót z Nowego Jorku
            i konferencja następnego dnia. Jak zaplanować podróż i zachować
            pełną wydajność mimo zmiany stref czasowych?
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg mb-10">
          <h2 className="text-lg font-bold text-green-900 mb-2">Krótka odpowiedź</h2>
          <p className="text-green-800">
            Przy różnicy do 3 stref czasowych organizm adaptuje się w ciągu 1–2 dni bez
            specjalnych działań. Przy różnicy 5+ stref (np. trasy do Azji, USA Wschodnie)
            kluczowe są: <strong>przesunięcie rytmu dobowego na 2–3 dni przed lotem</strong>,
            ekspozycja na światło po przylocie w odpowiednim oknie czasowym
            i ewentualnie melatonina (0,5–3 mg). Przy krótkich delegacjach (1–2 doby)
            lepiej <strong>pozostać w strefie czasowej kraju wylotu</strong> i planować spotkania
            odpowiednio.
          </p>
        </div>

        {/* Dlaczego jet lag szkodzi delegacji */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Dlaczego jet lag to problem biznesowy, nie tylko medyczny</h2>
          <p className="text-slate-700 mb-5">
            Jet lag to nie kwestia komfortu — to realne ryzyko dla jakości decyzji
            podejmowanych w podróży służbowej. Badania kognitywistyczne wskazują,
            że niedobór snu i desynchornizacja rytmu dobowego obniżają:
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-red-700 mb-1">–40%</div>
              <div className="text-sm text-red-800">zdolność do zapamiętywania nowych informacji (Harvard Medical School)</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-orange-700 mb-1">–30%</div>
              <div className="text-sm text-orange-800">szybkość przetwarzania informacji i czas reakcji</div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-amber-700 mb-1">2×</div>
              <div className="text-sm text-amber-800">większe ryzyko błędnych decyzji w negocjacjach pod presją czasu</div>
            </div>
          </div>

          <p className="text-slate-700">
            To oznacza, że pracownik lecący na ważne negocjacje handlowe do Singapuru
            i lądujący o świcie z 6-godzinną różnicą czasu — bez przygotowania —
            jest w gorszej kondycji decyzyjnej niż wypoczęty lokalny rozmówca.
            Travel policy powinna to uwzględniać, ustalając minimalny czas
            przed pierwszym spotkaniem po locie długodystansowym.
          </p>
        </section>

        {/* Kierunki i nasilenie */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Kierunek lotu a nasilenie jet lagu</h2>
          <p className="text-slate-700 mb-5">
            Jet lag jest asymetryczny — loty na wschód są trudniejsze niż na zachód,
            bo skracają dobę (trudniej przyspieszyć zegar niż go opóźnić).
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Trasa (z WAW)</th>
                  <th className="p-3 text-left">Różnica czasu</th>
                  <th className="p-3 text-left">Kierunek</th>
                  <th className="p-3 text-left">Dni adaptacji</th>
                  <th className="p-3 text-left">Rekomendacja</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3 font-medium">Londyn, Paryż</td>
                  <td className="p-3">1–2h</td>
                  <td className="p-3 text-blue-700">Zachód</td>
                  <td className="p-3 text-green-700">0–1</td>
                  <td className="p-3">Bez specjalnych działań</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-medium">Dubai, Abu Dhabi</td>
                  <td className="p-3">+3h</td>
                  <td className="p-3 text-orange-700">Wschód</td>
                  <td className="p-3 text-green-700">1–2</td>
                  <td className="p-3">Lekkie dostosowanie snu przed lotem</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3 font-medium">Nowy Jork, Boston</td>
                  <td className="p-3">–6h</td>
                  <td className="p-3 text-blue-700">Zachód</td>
                  <td className="p-3 text-orange-700">2–3</td>
                  <td className="p-3">Melatonina przy powrocie (na wschód)</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-medium">Los Angeles, San Francisco</td>
                  <td className="p-3">–9h</td>
                  <td className="p-3 text-blue-700">Zachód</td>
                  <td className="p-3 text-red-700">3–5</td>
                  <td className="p-3">Protokół 3-dniowy, przylot dzień wcześniej</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3 font-medium">Singapur, Bangkok</td>
                  <td className="p-3">+6/+7h</td>
                  <td className="p-3 text-orange-700">Wschód</td>
                  <td className="p-3 text-red-700">3–5</td>
                  <td className="p-3">Protokół 3-dniowy, ekspozycja na światło rano</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-medium">Tokio, Seoul</td>
                  <td className="p-3">+8/+9h</td>
                  <td className="p-3 text-orange-700">Wschód</td>
                  <td className="p-3 text-red-700">4–6</td>
                  <td className="p-3">Protokół 3-dniowy + melatonina, przylot 2 dni wcześniej</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-medium">Sydney, Melbourne</td>
                  <td className="p-3">+9/+10h</td>
                  <td className="p-3 text-orange-700">Wschód</td>
                  <td className="p-3 text-red-700">5–7</td>
                  <td className="p-3">Najtrudniejszy kierunek — min. 2 dni bufor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Protokół przed lotem */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <Moon className="inline w-6 h-6 mr-2 text-blue-600" />
            Protokół przed lotem (różnica 5+ stref)
          </h2>

          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">3 dni przed lotem — na wschód (np. Tokio)</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Dzień 1:</strong> Idź spać 1h wcześniej niż zwykle, wstań 1h wcześniej</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Dzień 2:</strong> Idź spać 2h wcześniej, wstań 2h wcześniej — unikaj sztucznego światła wieczorem</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Dzień 3 (dzień lotu):</strong> Idź spać 3h wcześniej — w samolocie staraj się spać zgodnie z nocą docelową</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">3 dni przed lotem — na zachód (np. Los Angeles)</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Dzień 1:</strong> Idź spać 1h później, zostań aktywny wieczorem, unikaj drzemek</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Dzień 2:</strong> Idź spać 2h później — ekspozycja na jasne światło w godzinach wieczornych</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Dzień 3 (dzień lotu):</strong> W samolocie nie śpij do momentu odpowiadającego nocy w LA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-800">
                <strong>Realistyczna ocena:</strong> Przesunięcie rytmu dobowego w pracowitych tygodniach
                przed wyjazdem jest trudne. Jeśli nie masz czasu na protokół 3-dniowy,
                skup się na jednym działaniu: dostosowaniu godzin snu na 1–2 dni przed lotem
                i odpowiednim planowaniu snu w samolocie.
              </p>
            </div>
          </div>
        </section>

        {/* Strategie w samolocie */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <Plane className="inline w-6 h-6 mr-2 text-blue-600" />
            Strategie w samolocie
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <h3 className="font-bold text-slate-800 mb-3">Rób</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Przestaw zegarek na strefę docelową od razu po wejściu na pokład</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Śpij zgodnie z nocą w strefie docelowej, nie według biologicznej potrzeby</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Nawadniaj się systematycznie — wilgotność w kabinie wynosi 10–15% (jak pustynia)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Melatonina 0,5–3 mg przy próbie zaśnięcia w "niebiologicznej" nocy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Maseczka na oczy + zatyczki do uszu — klasa biznes daje je zazwyczaj w amenity kit</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-3">Unikaj</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Alkoholu — przyspiesza odwodnienie i pogarsza jakość snu, nawet w leżącym fotelu</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Kawy i herbaty po 2h przed planowanym snem w samolocie</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Ciężkich posiłków — trawienie zaburza jakość snu w samolocie</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Leków nasennych (np. benzodiazepiny) bez konsultacji z lekarzem — zwiększają ryzyko zakrzepicy</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Ekranów bez trybu nocnego 1h przed snem w samolocie</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Po przylocie */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <Sun className="inline w-6 h-6 mr-2 text-yellow-500" />
            Protokół po przylocie — pierwsze 24h
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-slate-900">Ekspozycja na światło słoneczne — to najsilniejszy reset zegara</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Na wschód: wyjdź na zewnątrz rano (7:00–10:00 czasu lokalnego) — silne
                  poranne światło przyspiesza przestawienie zegara. Unikaj jasnego światła
                  wieczorem. Na zachód: zostań na zewnątrz popołudniami i wieczorami.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-slate-900">Nie kładź się spać przed lokalną 22:00 pierwszego dnia</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Pokusa drzemki po przylocie jest silna, ale długi sen w środku
                  lokalnego dnia zatrzymuje adaptację. Krótka drzemka (20–30 min) jest
                  akceptowalna — powyżej 45 minut ryzykujesz sen głęboki i jeszcze
                  większy rozstrój rytmu.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-slate-900">Melatonina wieczorem przez pierwsze 2–3 doby</h3>
                <p className="text-sm text-slate-600 mt-1">
                  0,5–3 mg melatoniny 30–60 minut przed planowanym snem w strefie docelowej.
                  Mniejsza dawka (0,5 mg) działa równie skutecznie jak większa —
                  i powoduje mniej efektów ubocznych. Dostępna bez recepty w Polsce.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-semibold text-slate-900">Lekka aktywność fizyczna — nie intensywna</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Spacer lub lekki trening w hotelu rano pomaga w adaptacji — podnosi
                  temperaturę ciała i wspiera resynchronizację. Intensywny trening
                  wieczorem opóźni zasypianie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategia "pozostań w strefie kraju" */}
        <section className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-3">
              Krótka delegacja (1–2 doby): lepiej nie przestawiać zegara
            </h2>
            <p className="text-blue-800 mb-4">
              Przy jednodniowych wyjazdach na konferencje za ocean niektórzy podróżnicy
              służbowi stosują strategię odwrotną: <strong>nie przestawiają rytmu dobowego</strong>
              na strefę docelową, lecz planują spotkania na godziny pokrywające
              się z aktywnym oknem swojej strefy domowej.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-blue-900 text-sm mb-2">Przykład: wylot z WAW do NYC, 1 dzień</h3>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• Lądowanie JFK o 14:00 (20:00 czasu PL)</li>
                  <li>• Spotkanie 15:00–18:00 NYC = 21:00–00:00 PL — trudne biologicznie</li>
                  <li>• <strong>Lepsza opcja:</strong> negocjuj spotkanie na 10:00–13:00 NYC = 16:00–19:00 PL — szczyt aktywności poznawczej</li>
                  <li>• Nocuj w NYC, następnego dnia wylot — bez straty doby na adaptację</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 text-sm mb-2">Kiedy to działa, kiedy nie</h3>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>✓ Delegacja 1–2 doby z możliwością wyboru godzin spotkań</li>
                  <li>✓ Różnica do 8–9h (USA Wschodnie, USA Zachodnie)</li>
                  <li>✗ Konferencje z narzuconymi godzinami od organizatora</li>
                  <li>✗ Delegacje &gt;3 doby — i tak musisz się przestawić</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Travel policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Jet lag a travel policy — co warto uregulować</h2>
          <p className="text-slate-700 mb-4">
            Dobrze napisana travel policy powinna określać minimalny czas między lądowaniem
            a pierwszym spotkaniem przy lotach długodystansowych. Bez takiego zapisu
            pracownicy są wysyłani na negocjacje bezpośrednio z samolotu.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Różnica stref</th>
                  <th className="p-3 text-left">Zalecany bufor przed pierwszym spotkaniem</th>
                  <th className="p-3 text-left">Uzasadnienie dla travel policy</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3">1–3h</td>
                  <td className="p-3">Brak — od razu po przylocie</td>
                  <td className="p-3">Minimalne zaburzenie rytmu dobowego</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3">4–6h</td>
                  <td className="p-3">Min. 4–6h po lądowaniu</td>
                  <td className="p-3">Czas na prysznic, posiłek, krótki sen w hotelu</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3">7–9h</td>
                  <td className="p-3">Przylot dzień wcześniej (min. 12h)</td>
                  <td className="p-3">Wydajność decyzyjna spada o 30–40% bez noclegu</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3">10h+</td>
                  <td className="p-3">Przylot 2 dni wcześniej</td>
                  <td className="p-3">Adaptacja zajmuje min. 2 doby przy różnicy 10h+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>

          <div className="space-y-5">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy melatonina jest dozwolona w Polsce bez recepty?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Tak — melatonina do 1 mg jest dostępna jako suplement diety bez recepty
                  w aptekach i drogeriach. Preparaty powyżej 1 mg (np. Melatonina 3 mg, 5 mg)
                  również dostępne bez recepty jako leki OTC lub suplementy.
                  Przed lotem warto skonsultować się z lekarzem, szczególnie przy
                  przyjmowaniu innych leków lub chorobach autoimmunologicznych.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy klasa biznes naprawdę pomaga z jet lagiem?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Tak — i to jest jedno z racjonalnych uzasadnień klasy biznes w podróżach
                  służbowych długodystansowych, poza argumentem statusowym. Leżące siedzenie
                  pozwala na sen REM w locie 10–15h, co skraca czas adaptacji po lądowaniu.
                  Badania linii lotniczych pokazują, że pasażerowie Business osiągają
                  subiektywnie lepszą wydajność przez pierwsze 24h po długim locie
                  w porównaniu do pasażerów Economy.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy można wpisać koszty melatoniny i suplementów do rozliczenia delegacji?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Zależy od travel policy firmy. Suplementy diety co do zasady nie są
                  kosztem uzyskania przychodu w delegacji. Jednak niektóre firmy
                  pokrywają "wellness expenses" w ramach korporacyjnego pakietu zdrowotnego.
                  Warto sprawdzić regulamin firmy lub uzgodnić z travel managerem
                  przed zakupem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Lot długodystansowy opóźniony lub odwołany?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Opóźniony lot transatlantycki to nie tylko stracony czas —
            to naruszony plan adaptacji i zmarnowany nocleg w hotelu.
            Jeśli dotarłeś z ponad 3-godzinnym opóźnieniem, możesz
            dochodzić odszkodowania EC 261 do 600 EUR.
          </p>
          <a
            href={"https://claimwinger.pl?utm_source=bizneslot&utm_medium=article&utm_campaign=jet-lag-podroze-sluzbowe"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Sprawdź swoje roszczenie
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
