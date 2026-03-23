import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Apple, Clock, CheckCircle, AlertTriangle, ArrowRight, Utensils, Droplets } from "lucide-react";

export default function DietaPodrozeSluzbowe() {
  return (
    <>
      <SEO
        title="Dieta w podróży służbowej — jak jeść zdrowo w trasie i nie stracić energii? | bizneslot.info"
        description="Jak utrzymać zdrową dietę podczas delegacji? Jedzenie w samolocie, na lotniskach i w hotelach, nawodnienie, unikanie energy crashu przed spotkaniami i specjalne posiłki w klasie biznes."
        canonicalUrl="https://bizneslot.info/artykuly/dieta-podroze-sluzbowe"
        ogType="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Dieta w podróży służbowej — jak jeść zdrowo w trasie i nie stracić energii?",
          description: "Praktyczny przewodnik po diecie podczas delegacji: co jeść w samolocie, jak unikać energy crashu przed spotkaniami i jak zamawiać specjalne posiłki w klasie biznes.",
          datePublished: "2026-03-22",
          author: { "@type": "Organization", name: "bizneslot.info" },
          publisher: { "@type": "Organization", name: "bizneslot.info" }
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <Apple className="w-4 h-4" />
            <span>Zdrowie w podróży</span>
            <span className="mx-2">·</span>
            <Clock className="w-4 h-4" />
            <span>7 min czytania</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dieta w podróży służbowej — jak jeść zdrowo w trasie i nie stracić energii?
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Restauracje klientów, kolacje networkingowe, jedzenie na lotnisku o 5 rano.
            Jak utrzymać poziom energii i wydajność podczas intensywnych delegacji —
            bez wyrzeczeń, ale z planem.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg mb-10">
          <h2 className="text-lg font-bold text-green-900 mb-2">Krótka odpowiedź</h2>
          <p className="text-green-800">
            Trzy zasady, które mają największy wpływ na poziom energii podczas delegacji:
            <strong> odpowiednie nawodnienie</strong> (200 ml wody na godzinę w samolocie,
            minimum 2l dziennie na miejscu), <strong>unikanie ciężkich posiłków
            przed spotkaniami</strong> (glukoza ze skrobi = senność po 40 min)
            i <strong>zamawianie specjalnego posiłku w samolocie</strong>
            (SPML, VGML) — podawany wcześniej, często świeższy niż standardowy.
          </p>
        </div>

        {/* Kontekst delegacji */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Dlaczego dieta w delegacji to kwestia wydajności, nie estetyki</h2>
          <p className="text-slate-700 mb-4">
            Podróżnik służbowy je inaczej niż w domu: nieregularnie, często w pośpiechu,
            w środowiskach społecznych (kolacje z klientem, networking), z zaburzonymi
            strefami czasowymi. Skutki złej diety w trasie to nie tylko kilogramy —
            to konkretna utrata wydajności kognitywnej w momentach, gdy liczy się
            pełna koncentracja.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 mb-2 text-sm">Ciężki lunch przed negocjacjami</h3>
              <p className="text-xs text-red-800">
                Duży posiłek wysokowęglowodanowy (pasta, ryż, pizza) wywołuje skok
                insuliny i "popołudniową ścianę" — senność i wolniejsze myślenie
                przez 1–2h po posiłku. Dokładnie kiedy zaczyna się najważniejsza
                część spotkania.
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="font-semibold text-orange-900 mb-2 text-sm">Odwodnienie w kabinie</h3>
              <p className="text-xs text-orange-800">
                Wilgotność 10–15% w samolocie powoduje szybkie odwodnienie.
                Już 1–2% odwodnienia organizmu obniża funkcje kognitywne o 10–15%.
                Alkohol na pokładzie nasilą efekt — skutek: zmęczenie i wolniejsze
                reakcje po lądowaniu.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-amber-900 mb-2 text-sm">Nieregularne godziny jedzenia</h3>
              <p className="text-xs text-amber-800">
                Zmiana stref czasowych zaburza rytm dobowy i apetyt. Jedzenie
                o "biologicznie złej" porze (np. kolacja o 3 w nocy czasu polskiego)
                obciąża trawienie i dalej zaburza adaptację do nowej strefy.
              </p>
            </div>
          </div>
        </section>

        {/* Jedzenie w samolocie */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <Utensils className="inline w-6 h-6 mr-2 text-blue-600" />
            Jedzenie w samolocie — specjalne posiłki i jak je zamawiać
          </h2>
          <p className="text-slate-700 mb-5">
            Większość linii lotniczych oferuje tzw. special meals (SPML) — posiłki
            specjalne zamawianie najpóźniej 24–48h przed lotem. To jedna
            z niedocenianych opcji, szczególnie w klasie biznes.
          </p>

          <div className="overflow-x-auto mb-5">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Kod IATA</th>
                  <th className="p-3 text-left">Nazwa</th>
                  <th className="p-3 text-left">Dla kogo</th>
                  <th className="p-3 text-left">Dlaczego warto</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3 font-mono font-bold">SPML</td>
                  <td className="p-3">Special Meal (ogólny)</td>
                  <td className="p-3">Każdy</td>
                  <td className="p-3">Podawany jako pierwszy, często świeższy</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-mono font-bold">VGML</td>
                  <td className="p-3">Vegan Meal</td>
                  <td className="p-3">Weganie, ale też jako lżejsza opcja</td>
                  <td className="p-3">Zazwyczaj mniej przetworzone, więcej warzyw</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3 font-mono font-bold">VLML</td>
                  <td className="p-3">Vegetarian Lacto-Ovo</td>
                  <td className="p-3">Wegetarianie</td>
                  <td className="p-3">Lżejsze niż standardowy posiłek mięsny</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-mono font-bold">LFML</td>
                  <td className="p-3">Low Fat Meal</td>
                  <td className="p-3">Osoby dbające o dietę</td>
                  <td className="p-3">Mniej tłuszczu = mniejszy efekt poposiłkowy</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3 font-mono font-bold">LSML</td>
                  <td className="p-3">Low Sodium Meal</td>
                  <td className="p-3">Osoby z nadciśnieniem</td>
                  <td className="p-3">Mniej soli = mniejszy obrzęk podczas lotu</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-mono font-bold">DBML</td>
                  <td className="p-3">Diabetic Meal</td>
                  <td className="p-3">Diabetycy i osoby kontrolujące glikemię</td>
                  <td className="p-3">Niski IG, stabilny poziom cukru = brak energy crash</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Jak zamówić:</strong> Przez stronę linii (zarządzanie rezerwacją),
              aplikację lub telefon do linii — najpóźniej 24h przed lotem (LOT: 24h,
              Lufthansa: 24h, Emirates: 24h). W klasie biznes obsługa często
              pyta przy zameldowaniu, czy masz specjalne wymagania dietetyczne —
              warto wspomnieć nawet jeśli nie zamawiałeś z wyprzedzeniem.
            </p>
          </div>
        </section>

        {/* Nawodnienie */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <Droplets className="inline w-6 h-6 mr-2 text-blue-600" />
            Nawodnienie — najłatwiej zaniedbywana zasada
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-900 mb-3">W samolocie</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>200–250 ml wody co godzinę (poproś stewarda o butelkę na początku lotu)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Zioła, woda z cytryną, herbaty niekofeikowe — dobre alternatywy</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Ogranicz kawę do 1 filiżanki — kawa + suche powietrze = szybkie odwodnienie</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Alkohol: max 1 kieliszek — każdy gram alkoholu wymaga ok. 3x więcej wody do metabolizmu</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-900 mb-3">Na miejscu (podczas delegacji)</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Min. 2–2,5l wody dziennie, więcej w gorącym klimacie</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Butelka wody przy sobie na każdym spotkaniu — proś o nią u klienta lub kup przed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Przy kolacjach networkingowych: naprzemiennie woda i alkohol (1:1)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Kawa z klimatyzowanej sali konferencyjnej + brak wody = klasyczna pułapka</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Jedzenie przed spotkaniami */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Co jeść przed ważnymi spotkaniami?</h2>
          <p className="text-slate-700 mb-5">
            Wybór posiłku na 1–2h przed negocjacjami lub prezentacją ma bezpośredni
            wpływ na poziom energii i koncentrację.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-900 mb-3">Dobre wybory przed spotkaniem</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Białko + tłuszcze + warzywa:</strong> jajka, awokado, kurczak z sałatką — stabilny poziom energii przez 3–4h</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Orzechy i migdały:</strong> dobra przekąska między spotkaniami — białko + zdrowe tłuszcze, brak skoku cukru</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Mały posiłek zamiast dużego:</strong> lepszy 400 kcal lunch niż 900 kcal przed prezentacją</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Kawa:</strong> OK na 30–60 min przed — nie na czczo, nie w nadmiarze</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-900 mb-3">Unikaj przed spotkaniem</h3>
              <ul className="space-y-2 text-sm text-red-800">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Duże porcje makaronu, ryżu, pizzy:</strong> skok insuliny = senność po 40 min</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Fast food w pośpiechu:</strong> tłuszcz trans + sól = uczucie ciężkości, utrudnione myślenie</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Energy drinki:</strong> krótki skok + głęboki spadek = gorsze niż bez kofeiny</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Alkohol przed spotkaniem:</strong> nawet 1 kieliszek spowalnia przetwarzanie informacji</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Kolacja networkingowa wieczorem, spotkanie rano:</strong> Jeśli wiesz, że kolacja
              będzie obfita, zjedz lekki lunch. Na kolacji możesz jeść bez ograniczeń społecznych —
              ale pamiętaj o wodzie. Spotkanie rano oznacza: śniadanie białkowe (jajka, jogurt, ser)
              zamiast rogalika z kawą — to różnica 2–3h wydajności.
            </p>
          </div>
        </section>

        {/* Lotnisko i hotel */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Jedzenie na lotnisku i w hotelu — praktyczne wskazówki</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-slate-800 mb-3">Na lotnisku</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Salonik biznesowy (lounge) — zazwyczaj świeższe i zdrowsze opcje niż terminale; unikaj ciastek i słodkich przekąsek przy barze</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Kup butelkę wody po przejściu kontroli — to minimum</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Przy wczesnych lotach: przygotuj posiłek w domu lub zjedz w hotelu przed wyjazdem — lotniskowe śniadanie to drogi rogalik lub nic</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Unikaj smażonego i fast food przy długich lotach — trawienie ciężkiego posiłku + unieruchomienie = dyskomfort</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-3">W hotelu</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Śniadanie hotelowe: postaw na jajka, wędliny, ser zamiast pieczywa z dżemem — wyższe białko = lepsza koncentracja przez ranek</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Minibar: woda tak, słodycze i chipsy — nie warto (cena + efekt energetyczny)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Room service późno w nocy: lekka zupa lub kanapka zamiast steku — trawienie ciężkiego posiłku zaburza sen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Miej przy sobie orzechy lub baton proteinowy — backup gdy spotkanie się przeciąga</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Kolacja z klientem */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Kolacja z klientem — jak nie zarwać nocy i następnego dnia</h2>
          <p className="text-slate-700 mb-4">
            Kolacje biznesowe rządzą się swoją logiką — nie zawsze możesz kontrolować
            co i ile jesz. Kilka zasad, które pomagają bez rujnowania relacji:
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-800 mb-2 text-sm">Alkohol z głową</h3>
              <p className="text-xs text-slate-700">
                Na każdy kieliszek wina wypij szklankę wody — to najprostsza zasada.
                Nikt nie zauważy, a Ty unikniesz kaca z ważnym spotkaniem rano.
                Jeśli nie chcesz pić: woda musująca w kieliszku do wina — wygląda
                identycznie, nikt nie pyta.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-800 mb-2 text-sm">Porcje przy menu degustacyjnym</h3>
              <p className="text-xs text-slate-700">
                Przy wielodaniowej kolacji małe porcje poszczególnych dań pozwalają
                zjeść wszystko bez przeciążenia. Nie musisz kończyć każdego talerza —
                kelner zabierze i nikt nie robi uwag.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-800 mb-2 text-sm">Godzina kolacji a jet lag</h3>
              <p className="text-xs text-slate-700">
                Przy różnicy 6h+ kolacja o 21:00 lokalnego czasu może być
                środkiem nocy biologicznie. Jedz lżej niż zwykle i unikaj
                ciężkiego mięsa z sosem — trawienie trwa dłużej i zaburza sen.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>

          <div className="space-y-5">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy posiłki w samolocie wliczają się w limit diety delegacyjnej?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Tak. Jeśli linia serwuje pełny posiłek na pokładzie (zazwyczaj w klasie biznes
                  lub na długich trasach), pracodawca może odliczyć odpowiedni procent diety dobowej
                  (25% za śniadanie, 50% za obiad, 25% za kolację — zależnie od przepisów).
                  Szczegółowe zasady określa rozporządzenie w sprawie podróży służbowych
                  oraz wewnętrzna travel policy firmy.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy mogę zabrać własne jedzenie na pokład?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Tak — własne jedzenie na pokład jest dozwolone (z wyjątkiem lotów
                  do niektórych krajów z restrykcjami fitosanitarnymi, np. Australia, Nowa Zelandia).
                  Dobre opcje: kanapki, orzechy, owoce, batony proteinowe — zakupione
                  po kontroli bezpieczeństwa. Płyny do 100 ml lub zakupione po kontroli.
                  Jedzenie z silnym zapachem (cebula, ryba) — unikaj w kabinie z szacunku
                  dla współpasażerów.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Jak poradzić sobie z różnymi kuchniami podczas długich delegacji?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Eksperymentowanie z lokalną kuchnią to ważna część podróży służbowej —
                  jednak pierwsze dni w nowym miejscu warto jeść ostrożniej,
                  szczególnie w krajach o innym standardzie higieny żywności.
                  Gotowane potrawy są bezpieczniejsze niż surowe sałatki i owoce
                  w krajach o niskim standardzie sanitarnym. Sprawdzona zasada
                  podróżnicza: "cook it, boil it, peel it or forget it".
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Lot opóźniony zanim zdążyłeś zjeść?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Przy opóźnieniu powyżej 2 godzin linia lotnicza ma obowiązek zapewnić
            posiłek i napoje. Jeśli tego nie zrobiła — możesz dochodzić zwrotu kosztów
            razem z odszkodowaniem EC 261 do 600 EUR.
          </p>
          <a
            href={"https://claimwinger.pl?utm_source=bizneslot&utm_medium=article&utm_campaign=dieta-podroze-sluzbowe"}
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
