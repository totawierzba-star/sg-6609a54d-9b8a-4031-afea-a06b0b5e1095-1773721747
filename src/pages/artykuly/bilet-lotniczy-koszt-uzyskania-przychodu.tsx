import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Receipt, Clock, CheckCircle, AlertTriangle, ArrowRight, FileText, Scale } from "lucide-react";

export default function BiletLotniczyKosztUzyskaniaPrzychodu() {
  return (
    <>
      <SEO
        title="Bilet lotniczy jako koszt uzyskania przychodu — kiedy można odliczyć? | bizneslot.info"
        description="Czy bilet lotniczy to koszt podatkowy firmy? Warunki zaliczenia biletu do KUP, faktura na firmę, klasa biznes a fiskus, VAT od biletów lotniczych i co z biletem kupionym przez pracownika."
        canonicalUrl="https://bizneslot.info/artykuly/bilet-lotniczy-koszt-uzyskania-przychodu"
        ogType="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Bilet lotniczy jako koszt uzyskania przychodu — kiedy można odliczyć?",
          description: "Warunki zaliczenia biletu lotniczego do kosztów podatkowych firmy: faktura na firmę, związek z przychodem, klasa biznes, VAT i zwrot pracownikowi.",
          datePublished: "2026-03-22",
          author: { "@type": "Organization", name: "bizneslot.info" },
          publisher: { "@type": "Organization", name: "bizneslot.info" }
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <Receipt className="w-4 h-4" />
            <span>Finanse delegacji</span>
            <span className="mx-2">·</span>
            <Clock className="w-4 h-4" />
            <span>7 min czytania</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Bilet lotniczy jako koszt uzyskania przychodu — kiedy można odliczyć?
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Bilet do Frankfurtu na spotkanie z klientem — oczywisty koszt.
            Bilet do Dubaju po spotkaniu połączony z weekendem — już niekoniecznie.
            Gdzie jest granica i jak dokumentować, żeby US nie kwestionowało?
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg mb-10">
          <h2 className="text-lg font-bold text-green-900 mb-2">Krótka odpowiedź</h2>
          <p className="text-green-800">
            Bilet lotniczy jest kosztem uzyskania przychodu, gdy spełnia trzy warunki:
            <strong> ma związek z działalnością gospodarczą i przychodem</strong>,
            jest <strong>właściwie udokumentowany</strong> (faktura na firmę lub bilet imienny
            z potwierdzeniem celu podróży) i <strong>nie jest wydatkiem osobistym</strong>
            lub wyłączonym z KUP. Klasa biznes jest dopuszczalna jako KUP — fiskus
            nie narzuca klasy kabiny, pod warunkiem że podróż ma uzasadnienie biznesowe.
            VAT z biletów lotniczych (poza wyjątkami) <strong>nie podlega odliczeniu</strong>.
          </p>
        </div>

        {/* Podstawa prawna */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Podstawa prawna — art. 15 ustawy o CIT</h2>
          <p className="text-slate-700 mb-4">
            Zgodnie z art. 15 ust. 1 ustawy o podatku dochodowym od osób prawnych (CIT),
            kosztami uzyskania przychodów są koszty poniesione w celu osiągnięcia przychodów
            lub zachowania albo zabezpieczenia źródła przychodów, z wyjątkiem kosztów
            wymienionych w art. 16 ust. 1.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4">
            <h3 className="font-bold text-slate-800 mb-3">Trzy warunki KUP dla biletu lotniczego</h3>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">1</div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Związek z przychodem lub jego zabezpieczeniem</p>
                  <p className="text-xs text-slate-600 mt-0.5">Podróż musi służyć prowadzonej działalności: spotkanie z klientem, konferencja branżowa, negocjacje, otwarcie oddziału, szkolenie zawodowe. Im bezpośredniejszy związek — tym silniejsza pozycja przy kontroli.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">2</div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Właściwa dokumentacja</p>
                  <p className="text-xs text-slate-600 mt-0.5">Faktura na firmę (lub bilet imienny z opisem celu). Polecenie wyjazdu służbowego i/lub notatka z wizyty jako dowód towarzyszący. Samo zaksięgowanie biletu bez dokumentacji celu podróży to ryzyko zakwestionowania.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">3</div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Brak w katalogu wyłączeń z art. 16 ust. 1 CIT</p>
                  <p className="text-xs text-slate-600 mt-0.5">Bilet lotniczy nie figuruje w katalogu wyłączeń — pod warunkiem że nie jest wydatkiem reprezentacyjnym (np. zapewnienie przelotu kontrahentowi w celach czysto PR-owych).</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            Analogicznie dla PIT (jednoosobowa działalność gospodarcza): art. 22 ust. 1 ustawy o PIT.
            Zasady są identyczne — związek z przychodem + dokumentacja.
          </p>
        </section>

        {/* Dokumentacja */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <FileText className="inline w-6 h-6 mr-2 text-blue-600" />
            Jak dokumentować bilet lotniczy jako KUP?
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-900 mb-3">Dokumentacja wystarczająca</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Faktura VAT na firmę</strong> wystawiona przez linię lotniczą lub agencję TMC — najsilniejszy dokument</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>E-bilet imienny</strong> + potwierdzenie e-mail + polecenie wyjazdu służbowego</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Notatka służbowa</strong> opisująca cel podróży, uczestników spotkania, wynik wizyty</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Korespondencja e-mail z kontrahentem potwierdzająca spotkanie (jako dowód towarzyszący)</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-900 mb-3">Dokumentacja niewystarczająca / problematyczna</h3>
              <ul className="space-y-2 text-sm text-red-800">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Sam paragon lub wyciąg z karty bez faktury</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Faktura na osobę fizyczną (nie na firmę) przy zakupie do działalności</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Brak jakiegokolwiek opisu celu podróży — samo zaksięgowanie "bilet lotniczy"</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Bilet na trasie, która nie ma oczywistego związku z miejscem prowadzenia działalności lub siedzibą klientów</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Praktyczna wskazówka:</strong> Przy zakupie biletu online (bezpośrednio od linii
              lub przez portal) zawsze podaj NIP firmy w formularzu. Większość linii
              (LOT, Lufthansa, Emirates) generuje fakturę na żądanie do 7–14 dni od podróży.
              Po tym terminie odzyskanie faktury jest bardzo trudne lub niemożliwe.
              Przy zakupie przez TMC faktura trafia automatycznie do systemu finansowego firmy.
            </p>
          </div>
        </section>

        {/* Klasa biznes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <Scale className="inline w-6 h-6 mr-2 text-blue-600" />
            Klasa biznes a koszty podatkowe — co mówi fiskus?
          </h2>
          <p className="text-slate-700 mb-4">
            To jedno z najczęstszych pytań przy kontrolach podatkowych.
            Odpowiedź jest jednoznaczna: <strong>przepisy podatkowe nie narzucają klasy kabiny</strong>.
            Ustawa o CIT nie zawiera ograniczenia do klasy ekonomicznej.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-5">
            <h3 className="font-bold text-slate-800 mb-3">Stanowisko organów podatkowych</h3>
            <p className="text-sm text-slate-700 mb-3">
              Interpretacje indywidualne Dyrektora KIS konsekwentnie potwierdzają,
              że bilet w klasie biznes lub pierwszej jest kosztem uzyskania przychodu,
              o ile spełnione są ogólne warunki KUP. Przykładowe interpretacje:
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>DKIS, interpretacja 0114-KDIP2-2.4010.166.2023 — klasa biznes jako KUP przy delegacjach zarządu</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>DKIS, 0111-KDIB1-1.4010.537.2022 — wydatek na klasę biznes uzasadniony koniecznością pracy podczas lotu i wydajnością po przylocie</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-3">
              Interpretacje nie są wiążące dla innych podatników — traktuj je jako wskaźnik linii orzeczniczej.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-800">
                <strong>Ryzyko przy klasie biznes:</strong> Fiskus może zakwestionować klasę biznes
                jako "zbędnie luksusową" jeśli brak uzasadnienia — szczególnie przy małych firmach
                lub gdy podróż ma wątpliwy związek z przychodem. Uzasadnienie: "konieczność pracy
                w samolocie", "kondycja fizyczna po 12h locie a jakość negocjacji",
                "wymóg kontrahenta" — to argumenty akceptowane przez sądy administracyjne.
              </p>
            </div>
          </div>
        </section>

        {/* VAT */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">VAT od biletu lotniczego — kiedy można odliczyć?</h2>
          <p className="text-slate-700 mb-4">
            Większość biletów lotniczych (szczególnie zagranicznych) to usługi opodatkowane
            stawką 0% VAT lub zwolnione z VAT. Odliczenie VAT jest więc
            w praktyce rzadkie — ale są wyjątki.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Rodzaj lotu</th>
                  <th className="p-3 text-left">Stawka VAT</th>
                  <th className="p-3 text-left">Odliczenie VAT</th>
                  <th className="p-3 text-left">Uwagi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3">Loty międzynarodowe (do/z Polski)</td>
                  <td className="p-3">0%</td>
                  <td className="p-3 text-slate-500">Brak VAT do odliczenia</td>
                  <td className="p-3">Standardowa stawka dla lotów zagranicznych</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3">Loty krajowe (w Polsce)</td>
                  <td className="p-3">8%</td>
                  <td className="p-3 text-green-700 font-medium">Tak, jeśli faktura VAT</td>
                  <td className="p-3">Np. WAW–KRK–GDN; faktura z NIP wymagana</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3">Usługi lotniskowe (parking, fast track)</td>
                  <td className="p-3">23%</td>
                  <td className="p-3 text-green-700 font-medium">Tak, jeśli faktura VAT</td>
                  <td className="p-3">Oddzielne faktury od lotniska / dostawcy</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3">Bilet kupiony zagranicą (np. od Air France we Francji)</td>
                  <td className="p-3">VAT kraju zakupu</td>
                  <td className="p-3 text-orange-700">Możliwe odliczenie VAT-EU (VAT-REF)</td>
                  <td className="p-3">Procedura zwrotu VAT z UE — przez US</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-600 mt-3">
            Bilet lotniczy zagraniczny (stawka 0%) wchodzi do KUP w kwocie brutto —
            nie ma VAT do odliczenia, ale cała kwota jest kosztem podatkowym.
          </p>
        </section>

        {/* Bleisure i prywatny cel */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Bleisure — co z biletem, gdy podróż łączy cel służbowy i prywatny?</h2>
          <p className="text-slate-700 mb-4">
            Coraz popularniejszy "bleisure" (business + leisure) rodzi pytanie:
            czy bilet na lot, po którym zostanę na weekend, jest w całości KUP?
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-5">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2 text-sm">Bilet w całości KUP</h3>
              <p className="text-xs text-green-800">
                Głównym celem podróży jest służbowy, a prywatny pobyt jest marginalny.
                Przykład: lot do Londynu na 3-dniową konferencję + 1 dzień prywatnie.
                Bez dodatkowego kosztu biletu powrotnego — bilet jest w całości KUP.
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="font-semibold text-orange-900 mb-2 text-sm">KUP częściowo</h3>
              <p className="text-xs text-orange-800">
                Podróż trwa np. 10 dni, z czego 3 służbowe i 7 prywatnych.
                Fiskus może uznać, że KUP jest tylko część biletu proporcjonalna
                do czasu służbowego. Ryzyko przy kontroli.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 mb-2 text-sm">Nie KUP</h3>
              <p className="text-xs text-red-800">
                Cel prywatny jest główny, a spotkanie "przy okazji" jednorazowe.
                Przykład: lot na wakacje + jedno spotkanie biznesowe przez 2h.
                Organy podatkowe coraz częściej kwestionują takie rozliczenia.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Bezpieczna zasada przy bleisure:</strong> Jeśli zostaniesz dłużej prywatnie,
              a bilet powrotny jest na inny (późniejszy) termin niż wynikałby z potrzeby służbowej —
              jako KUP rozlicz tylko równowartość najtańszego biletu na trasę w terminie
              służbowym. Różnicę (dopłata za zmianę daty / wyższy bilet) sfinansuj prywatnie.
              To podejście akceptowane przez organy podatkowe.
            </p>
          </div>
        </section>

        {/* Bilet kupiony przez pracownika */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Bilet kupiony przez pracownika — jak prawidłowo rozliczyć?</h2>
          <p className="text-slate-700 mb-4">
            Pracownik często kupuje bilet z własnej karty i żąda zwrotu. Jak poprawnie
            ująć to w kosztach firmy?
          </p>

          <div className="space-y-3">
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Faktura na firmę — wariant optymalny</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Nawet jeśli pracownik płaci kartą osobistą, faktura powinna być wystawiona
                  na NIP firmy. Kupując bilet online — w formularzu podaj dane firmy.
                  Firma zwraca pracownikowi kwotę i księguje fakturę jako swój koszt.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Bilet imienny bez faktury na firmę</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Jeśli faktura na firmę nie jest możliwa (niektóre tanie linie nie wystawiają
                  faktur z NIP), bilet imienny z imieniem pracownika + polecenie wyjazdu
                  + opis celu podróży stanowią wystarczającą dokumentację KUP.
                  NSA potwierdził, że bilet imienny spełnia wymogi dowodowe.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Faktura na pracownika (nie na firmę)</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Jeśli pracownik kupił bilet z danymi osobistymi zamiast firmowych —
                  zwrot przez rozliczenie delegacji jest nadal możliwy jako KUP,
                  ale wymaga staranniejszej dokumentacji (polecenie wyjazdu, opis celu,
                  oświadczenie pracownika o braku możliwości uzyskania faktury na firmę).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>

          <div className="space-y-5">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy bilet lotniczy można wliczyć w koszty przy jednoosobowej działalności?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Tak — zasady są analogiczne jak dla spółek (art. 22 ust. 1 ustawy o PIT).
                  Bilet musi mieć związek z działalnością, być właściwie udokumentowany
                  i nie figurować w katalogu wyłączeń. Przy JDG warto prowadzić
                  notatki ze spotkań i zapisywać kontakt z klientem/kontrahentem
                  jako dowód celu podróży przy ewentualnej kontroli.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy bilet anulowany (nieodbyty lot) jest kosztem podatkowym?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Tak, jeśli anulacja nastąpiła z uzasadnionych przyczyn biznesowych
                  (choroba pracownika, odwołanie spotkania przez klienta, siła wyższa).
                  Koszt biletu bezzwrotnego mimo anulacji delegacji jest KUP
                  pod warunkiem udokumentowania przyczyny (np. e-mail od kontrahenta
                  odwołujący spotkanie, zwolnienie lekarskie pracownika).
                  Organy podatkowe akceptują takie wydatki jako związane z "zabezpieczeniem
                  źródła przychodów".
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Jak długo przechowywać dokumentację biletów lotniczych?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Dokumentacja podatkowa (faktury, bilety, polecenia wyjazdu) musi być
                  przechowywana przez 5 lat od końca roku podatkowego, w którym upłynął
                  termin płatności podatku. Przykład: bilet z 2024 r. — dokumentacja
                  do końca 2030 r. Przy nieruchomościach i środkach trwałych termin jest dłuższy,
                  ale przy bieżących kosztach delegacji — 5 lat.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy bilet dla klienta (gdy firma zaprasza kontrahenta) jest kosztem?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Jeśli firma kupuje bilet lotniczy dla kontrahenta (np. zapraszając go
                  na prezentację produktu lub do siedziby), może to zostać zakwalifikowane
                  jako reprezentacja — i wyłączone z KUP (art. 16 ust. 1 pkt 28 CIT).
                  Granica między "kosztem marketingowym" a "reprezentacją" jest cienka.
                  Bezpieczniej jeśli wizyta ma konkretny cel biznesowy, nie czysto PR-owy.
                  Warto zasięgnąć opinii doradcy podatkowego przy regularnej praktyce.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Lot odwołany — bilet stracony, odszkodowanie do odzyskania
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Jeśli lot służbowy został odwołany lub opóźniony o ponad 3 godziny,
            masz prawo do odszkodowania EC 261 do 600 EUR — niezależnie od tego,
            czy bilet był kosztem firmy czy pracownika.
          </p>
          <a
            href={"https://claimwinger.pl?utm_source=bizneslot&utm_medium=article&utm_campaign=bilet-lotniczy-koszt-uzyskania-przychodu"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Sprawdź odszkodowanie za lot
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
