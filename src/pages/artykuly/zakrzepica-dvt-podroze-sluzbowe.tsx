import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Heart, Clock, CheckCircle, AlertTriangle, ArrowRight, Activity, Shield } from "lucide-react";

export default function ZakrzepicaDvtPodrozeSluzbowe() {
  return (
    <>
      <SEO
        title="Zakrzepica (DVT) w podróży służbowej — profilaktyka i obowiązki pracodawcy | bizneslot.info"
        description="Jak zapobiegać zakrzepicy żył głębokich (DVT) podczas długich lotów służbowych? Czynniki ryzyka, profilaktyka w samolocie, pończochy uciskowe i obowiązki pracodawcy wobec pracownika."
        canonicalUrl="https://bizneslot.info/artykuly/zakrzepica-dvt-podroze-sluzbowe"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <Heart className="w-4 h-4" />
            <span>Zdrowie w podróży</span>
            <span className="mx-2">·</span>
            <Clock className="w-4 h-4" />
            <span>7 min czytania</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Zakrzepica (DVT) w podróży służbowej — profilaktyka i obowiązki pracodawcy
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Zakrzepica żył głębokich (DVT) to realne ryzyko przy częstych
            lotach długodystansowych. Co każdy podróżnik służbowy powinien wiedzieć
            o zapobieganiu — i co powinna zapewniać firma.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Disclaimer medyczny */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-amber-800">
              <strong>Informacja:</strong> Ten artykuł ma charakter edukacyjny i nie zastępuje porady lekarskiej.
              Jeśli masz choroby przewlekłe, historię zakrzepicy lub inne czynniki ryzyka —
              skonsultuj się z lekarzem przed planowanym lotem długodystansowym.
            </p>
          </div>
        </div>

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg mb-10">
          <h2 className="text-lg font-bold text-green-900 mb-2">Krótka odpowiedź</h2>
          <p className="text-green-800">
            Przy lotach powyżej 4 godzin ryzyko DVT wzrasta. Podstawowa profilaktyka
            to <strong>wstawanie i chodzenie co 1–2 godziny</strong>, ćwiczenia kończyn
            dolnych w fotelu, odpowiednie nawodnienie i unikanie alkoholu.
            Przy podwyższonym ryzyku (wiek 60+, otyłość, przebyta zakrzepica, ciąża,
            terapia hormonalna) — <strong>pończochy uciskowe klasy I–II</strong>
            i konsultacja lekarza przed lotem. Pracodawca ma obowiązek informować
            pracownika o ryzyku i umożliwiać profilaktykę.
          </p>
        </div>

        {/* Czym jest DVT */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Czym jest zakrzepica żył głębokich (DVT) i dlaczego loty ją wywołują?</h2>
          <p className="text-slate-700 mb-4">
            DVT (Deep Vein Thrombosis) to tworzenie się skrzepu w żyłach głębokich,
            najczęściej w kończynach dolnych. Niebezpieczeństwo polega na tym,
            że skrzep może się oderwać i przemieścić do płuc, powodując zatorowość
            płucną — stan zagrażający życiu.
          </p>
          <p className="text-slate-700 mb-5">
            Podczas lotu kilka czynników sprzyja zakrzepicy jednocześnie:
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-5">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 mb-2 text-sm">Unieruchomienie</h3>
              <p className="text-xs text-red-800">
                Siedzenie w fotelu przez 8–12h znacznie spowalnia przepływ krwi
                w żyłach nóg. Mięśnie łydki — naturalna "pompa żylna" —
                przestają pracować.
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="font-semibold text-orange-900 mb-2 text-sm">Odwodnienie</h3>
              <p className="text-xs text-orange-800">
                Wilgotność w kabinie to 10–15%. Odwodnienie zagęszcza krew
                i sprzyja tworzeniu skrzepów. Alkohol i kawa nasilają odwodnienie.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-amber-900 mb-2 text-sm">Obniżone ciśnienie</h3>
              <p className="text-xs text-amber-800">
                Ciśnienie kabinowe odpowiada wysokości 2000–2400 m n.p.m.
                Niższe ciśnienie parcjalne tlenu może nieznacznie sprzyjać
                krzepnięciu u osób z predyspozycjami.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Skala ryzyka:</strong> WHO szacuje, że przy lotach powyżej 4h ryzyko DVT
              wzrasta dwukrotnie w porównaniu do nielatających. Przy lotach 8h+ i dodatkowych
              czynnikach ryzyka — kilkukrotnie. U większości zdrowych podróżników zakrzepica
              przebiega bezobjawowo i ustępuje samoistnie, jednak u osób z grupy ryzyka
              może być śmiertelna.
            </p>
          </div>
        </section>

        {/* Czynniki ryzyka */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Czynniki ryzyka — kto powinien szczególnie uważać?</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Czynnik ryzyka</th>
                  <th className="p-3 text-left">Poziom ryzyka</th>
                  <th className="p-3 text-left">Rekomendacja</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3">Wiek powyżej 60 lat</td>
                  <td className="p-3 text-orange-700 font-medium">Podwyższone</td>
                  <td className="p-3">Pończochy uciskowe, ruchy w fotelu co godzinę</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3">Przebyta zakrzepica lub zatorowość płucna</td>
                  <td className="p-3 text-red-700 font-medium">Wysokie</td>
                  <td className="p-3">Obowiązkowa konsultacja lekarza, możliwa profilaktyka farmakologiczna</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3">Otyłość (BMI &gt; 30)</td>
                  <td className="p-3 text-orange-700 font-medium">Podwyższone</td>
                  <td className="p-3">Pończochy uciskowe, intensywna profilaktyka ruchowa</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3">Ciąża i połóg (do 6 tygodni)</td>
                  <td className="p-3 text-red-700 font-medium">Wysokie</td>
                  <td className="p-3">Wymagana konsultacja lekarza przed lotem długodystansowym</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3">Terapia hormonalna / antykoncepcja</td>
                  <td className="p-3 text-orange-700 font-medium">Podwyższone</td>
                  <td className="p-3">Konsultacja lekarza, pończochy uciskowe</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3">Nowotwór aktywny lub w leczeniu</td>
                  <td className="p-3 text-red-700 font-medium">Wysokie</td>
                  <td className="p-3">Obowiązkowa konsultacja lekarza i onkologa</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3">Ostatnia operacja lub uraz (&lt; 3 miesiące)</td>
                  <td className="p-3 text-orange-700 font-medium">Podwyższone</td>
                  <td className="p-3">Konsultacja lekarza prowadzącego</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3">Zdrowa osoba dorosła, brak schorzeń</td>
                  <td className="p-3 text-green-700 font-medium">Niskie (standardowe)</td>
                  <td className="p-3">Podstawowa profilaktyka ruchowa i nawodnienie wystarczające</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Profilaktyka */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <Activity className="inline w-6 h-6 mr-2 text-blue-600" />
            Profilaktyka DVT w samolocie — krok po kroku
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <h3 className="font-bold text-slate-800">Ruch — najskuteczniejsza profilaktyka</h3>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">1</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Wstawaj co 1–2 godziny</p>
                    <p className="text-xs text-slate-600">Spacer do toalety i z powrotem to minimum. Kilka kroków po przejściu aktywuje pompę mięśniową łydki.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">2</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Ćwiczenia w fotelu (co 30 min)</p>
                    <p className="text-xs text-slate-600">Pompowanie stopami (unoszenie pięt, opuszczanie, naprzemiennie), rotacje kostek, napinanie mięśni łydek — po 10–15 powtórzeń każde.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">3</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Wybierz miejsce przy przejściu</p>
                    <p className="text-xs text-slate-600">Wstawanie z miejsca przy oknie przez śpiącego sąsiada jest kłopotliwe — efekt: siedzisz za długo. Miejsce przy przejściu eliminuje ten problem.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-slate-800">Nawodnienie i unikanie czynników ryzyka</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Pij 200–250 ml wody co godzinę (szklanka przy każdym ćwiczeniu)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Ogranicz alkohol — szczególnie przy lotach powyżej 6h</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Unikaj skrzyżowania nóg — uciska żyły podkolanowe</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Luźne ubranie — obcisłe spodnie ograniczają krążenie</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Zdejmij ciasne buty — stopy puchną podczas lotu o 1–2 rozmiary</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pończochy uciskowe */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-800 mb-3">Pończochy uciskowe — dla kogo i jakie?</h3>
            <p className="text-sm text-slate-700 mb-3">
              Pończochy uciskowe klasy I (15–21 mmHg) lub II (23–32 mmHg) redukują ryzyko
              DVT u osób z grupy ryzyka podczas długich lotów. Badania kliniczne
              (m.in. LONFLIT study) potwierdzają ich skuteczność.
            </p>
            <div className="grid md:grid-cols-3 gap-3 text-xs">
              <div className="bg-white border border-slate-200 rounded p-3">
                <p className="font-semibold text-slate-800 mb-1">Klasa I (15–21 mmHg)</p>
                <p className="text-slate-600">Profilaktyczne, dla zdrowych osób z czynnikami ryzyka (długi lot, wiek 50+). Dostępne bez recepty.</p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-3">
                <p className="font-semibold text-slate-800 mb-1">Klasa II (23–32 mmHg)</p>
                <p className="text-slate-600">Przy podwyższonym ryzyku (przebyta zakrzepica, żylaki). Zazwyczaj na receptę lub zalecenie lekarza.</p>
              </div>
              <div className="bg-white border border-slate-200 rounded p-3">
                <p className="font-semibold text-slate-800 mb-1">Jak zakładać</p>
                <p className="text-slate-600">Przed lotem, rano — zanim stopy zdążą spuchnąć. Zdejmować po dotarciu do miejsca noclegu.</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Koszt: 40–150 PLN za parę. Możliwe do wliczenia w koszty delegacji przy
              odpowiednim uzasadnieniu w travel policy lub na polecenie lekarza medycyny pracy.
            </p>
          </div>
        </section>

        {/* Objawy DVT */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Objawy DVT — kiedy natychmiast szukać pomocy?</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-orange-50 border border-orange-300 rounded-lg p-5">
              <h3 className="font-bold text-orange-900 mb-3">Objawy DVT (żył głębokich)</h3>
              <ul className="space-y-2 text-sm text-orange-800">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Ból lub tkliwość łydki, szczególnie przy chodzeniu lub uciskaniu</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Obrzęk jednej nogi (asymetryczny — charakterystyczny dla DVT)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Zaczerwienienie lub ciepło w okolicy łydki lub uda</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Widoczne, napięte żyły na powierzchni skóry</span>
                </li>
              </ul>
              <p className="text-xs text-orange-700 mt-3">
                Objawy DVT mogą wystąpić w trakcie lotu lub do 2 tygodni po nim.
                Przy podejrzeniu DVT — pilna konsultacja lekarska, nie odkładaj.
              </p>
            </div>
            <div className="bg-red-50 border border-red-400 rounded-lg p-5">
              <h3 className="font-bold text-red-900 mb-3">Objawy zatorowości płucnej — NAGŁE</h3>
              <ul className="space-y-2 text-sm text-red-800">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Nagłe duszności</strong> bez oczywistej przyczyny</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Ból w klatce piersiowej</strong>, nasilający się przy oddychaniu</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Kaszel, niekiedy z krwią</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Przyspieszony puls, zawroty głowy, omdlenie</span>
                </li>
              </ul>
              <p className="text-xs text-red-700 mt-3 font-bold">
                STAN ZAGROŻENIA ŻYCIA. W samolocie: natychmiast powiadom załogę.
                Po lądowaniu: wzywaj pogotowie (112) lub jedź na SOR.
              </p>
            </div>
          </div>
        </section>

        {/* Obowiązki pracodawcy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <Shield className="inline w-6 h-6 mr-2 text-blue-600" />
            Obowiązki pracodawcy wobec pracownika delegowanego
          </h2>
          <p className="text-slate-700 mb-5">
            Pracodawca wysyłający pracownika w podróż służbową ma obowiązek dbać
            o jego bezpieczeństwo i zdrowie. W kontekście DVT oznacza to konkretne działania:
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Informowanie o ryzyku</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Travel policy lub briefing przed długimi delegacjami powinien zawierać
                  informacje o ryzyku DVT i podstawowej profilaktyce. Szczególnie
                  istotne przy pracownikach latających 20+ razy rocznie.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Skierowanie na badania medycyny pracy</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Pracownicy wykonujący regularne loty długodystansowe powinni mieć
                  adnotację w skierowaniu na badania medycyny pracy o "częstych podróżach
                  lotniczych". Lekarz medycyny pracy może wtedy ocenić czynniki ryzyka DVT
                  i wydać zalecenia.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Zapewnienie klasy podróży adekwatnej do trasy</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Przy lotach powyżej 6–8h pracownik w klasie ekonomicznej ma ograniczoną
                  możliwość ruchu i większe ryzyko DVT. Travel policy powinna uwzględniać
                  klasę biznes dla długodystansowych tras — nie tylko ze względu na komfort,
                  ale na BHP.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Ubezpieczenie zdrowotne obejmujące leczenie za granicą</h3>
                <p className="text-xs text-slate-600 mt-1">
                  DVT i zatorowość płucna leczone za granicą to koszty rzędu dziesiątek
                  tysięcy euro. Ubezpieczenie podróżne firmowe powinno obejmować
                  hospitalizację z NNW i koszty leczenia — bez limitów, które są
                  niewystarczające przy poważnych incydentach.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-amber-800">
              <strong>Odpowiedzialność pracodawcy:</strong> Wypadek lub choroba pracownika
              powstała w związku z podróżą służbową może być traktowana jako wypadek przy pracy
              lub choroba zawodowa. Pracodawca, który nie zapewnił odpowiednich warunków
              i informacji, może ponosić odpowiedzialność odszkodowawczą.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>

          <div className="space-y-5">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Od jakiej długości lotu wzrasta ryzyko DVT?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  WHO wskazuje na loty powyżej 4 godzin jako próg, przy którym ryzyko
                  DVT zauważalnie wzrasta. Przy lotach 8–12h i dodatkowych czynnikach
                  ryzyka zagrożenie jest istotnie podwyższone. Dla zdrowych dorosłych
                  bez czynników ryzyka loty do 4h nie wymagają specjalnej profilaktyki —
                  wystarczy normalne nawodnienie i wstawanie przy okazji.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy aspiryna chroni przed DVT podczas lotu?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Aktualne wytyczne medyczne (m.in. ACCP) nie rekomendują aspiryny
                  jako profilaktyki DVT podczas lotów u ogółu populacji.
                  Aspiryna działa głównie na agregację płytek, a DVT to zakrzep żylny
                  (inny mechanizm). Przy wysokim ryzyku lekarz może rozważyć heparynę
                  drobnocząsteczkową — ale wyłącznie jako decyzję medyczną, nie "na własną rękę".
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy pończochy uciskowe można wliczyć w koszty delegacji?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Zależy od travel policy firmy i tego, czy zakup jest zalecony przez lekarza.
                  Pończochy uciskowe kupione na polecenie lekarza medycyny pracy lub lekarza
                  prowadzącego, w związku z odbywanymi podróżami służbowymi, mogą być
                  kosztem pracodawcy w ramach BHP lub opieki medycznej.
                  Bez zalecenia lekarskiego — trudniej je zakwalifikować jako koszt firmowy.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Jak często latać, żeby ryzyko DVT było istotne?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Ryzyko dotyczy każdego długiego lotu osobno — nie kumuluje się
                  w prosty sposób. Jednak osoby latające bardzo często (20+ razy rocznie
                  na dalekich trasach) mają statystycznie więcej ekspozycji na ryzyko.
                  Przy takiej częstotliwości wizyta u lekarza medycyny pracy
                  w celu oceny ryzyka i ewentualnych zaleceń jest uzasadniona.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Twoja firma regularnie wysyła Cię w długie trasy?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Zadbaj nie tylko o zdrowie — ale i o odszkodowanie, gdy coś pójdzie nie tak.
            Opóźnienia i odwołania lotów na trasach długodystansowych (6h+)
            mogą dawać prawo do 600 EUR odszkodowania z EC 261.
          </p>
          <a
            href={"https://claimwinger.pl?utm_source=bizneslot&utm_medium=article&utm_campaign=zakrzepica-dvt-podroze-sluzbowe"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Sprawdź swoje roszczenie EC 261
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
