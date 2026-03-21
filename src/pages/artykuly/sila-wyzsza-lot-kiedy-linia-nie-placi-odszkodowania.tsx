import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, XCircle, AlertTriangle, ArrowRight, Scale, Cloud } from "lucide-react";

export default function SilaWyzszaLot() {
  return (
    <>
      <SEO
        title="Siła wyższa a lot — co naprawdę zwalnia linię lotniczą z odszkodowania EC 261?"
        description="Nie każde opóźnienie to nadzwyczajna okoliczność. Sprawdź dokładnie co EC 261/2004 i wyroki ETS uznają za siłę wyższą — i kiedy linia niesłusznie się na nią powołuje."
        canonicalUrl="https://bizneslot.info/artykuly/sila-wyzsza-lot-kiedy-linia-nie-placi-odszkodowania"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Siła wyższa a lot — co naprawdę zwalnia linię lotniczą z odszkodowania EC 261/2004?",
            description:
              "EC 261/2004 zwalnia linię z odszkodowania tylko gdy zakłócenie wynikło z nadzwyczajnej okoliczności zewnętrznej, której nie można było uniknąć pomimo wszelkich rozsądnych środków. Usterka techniczna, strajk własnych pracowników czy zła organizacja — to NIE jest siła wyższa.",
            author: { "@type": "Organization", name: "BizneLot.info" },
            publisher: { "@type": "Organization", name: "BizneLot.info" },
            datePublished: "2025-03-21",
            dateModified: "2025-03-21",
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
                name: "Co EC 261/2004 uznaje za nadzwyczajną okoliczność zwalniającą z odszkodowania?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "EC 261/2004 i orzecznictwo ETS uznają za nadzwyczajne okoliczności: ekstremalne warunki pogodowe (burze, zamieć śnieżna, erupcja wulkanu), strajk kontrolerów ruchu lotniczego (ATC), decyzje władz (zamknięcie przestrzeni powietrznej, zakazy lotów), akty terrorystyczne, konflikty zbrojne oraz zdarzenia polityczne niezależne od linii.",
                },
              },
              {
                "@type": "Question",
                name: "Czy usterka techniczna samolotu to nadzwyczajna okoliczność?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Zasadniczo NIE. Wyrok ETS C-549/07 Wallentin-Hermann: regularna konserwacja i typowe usterki techniczne wpisują się w normalną działalność przewoźnika. Wyjątek: ukryta wada fabryczna wykryta po raz pierwszy lub usterka spowodowana aktami sabotażu — ale linia musi to udowodnić.",
                },
              },
              {
                "@type": "Question",
                name: "Czy zła pogoda zawsze zwalnia linię z odszkodowania?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nie automatycznie. Deszcz, mgła lub lekki wiatr to typowe warunki w lotnictwie — nie są nadzwyczajną okolicznością. Nadzwyczajne są: burze z piorunami uniemożliwiające start, ekstremalna śnieżyca, huragan, erupcja wulkanu (jak Eyjafjallajökull 2010). Linia musi udowodnić, że pogoda faktycznie uniemożliwiała bezpieczny lot.",
                },
              },
              {
                "@type": "Question",
                name: "Jak linia musi udowodnić nadzwyczajną okoliczność?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Linia musi wykazać dwie rzeczy: (1) zdarzenie miało charakter nadzwyczajny i zewnętrzny, (2) podjęto wszelkie rozsądne środki, by uniknąć opóźnienia lub odwołania. Samo powołanie się na okoliczność bez dowodów jest niewystarczające — ciężar dowodu spoczywa na przewoźniku.",
                },
              },
              {
                "@type": "Question",
                name: "Czy pandemia COVID-19 to nadzwyczajna okoliczność?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak — zakazy lotów i zamknięcia przestrzeni powietrznej wprowadzone przez władze w związku z COVID-19 są uznawane za nadzwyczajną okoliczność. Natomiast sama epidemia jako taka — bez decyzji administracyjnej ograniczającej loty — może być kwestionowana. Zależy od konkretnej sytuacji i krajowego orzecznictwa.",
                },
              },
              {
                "@type": "Question",
                name: "Co mi przysługuje gdy lot opóźniony przez nadzwyczajną okoliczność?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nawet przy nadzwyczajnej okoliczności linia musi zapewnić: posiłki i napoje przy oczekiwaniu powyżej 2h, nocleg i transport do hotelu gdy konieczny, zwrot kosztów biletu lub lot zastępczy przy odwołaniu. Odszkodowanie pieniężne (250–600 EUR) w tym przypadku nie przysługuje.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-700 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-slate-300 text-sm mb-4">
            <Link href="/artykuly" className="hover:text-white transition-colors">
              Artykuły
            </Link>
            <span>/</span>
            <span>Prawo i Finanse</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-slate-500/30 text-slate-200 px-3 py-1 rounded-full text-sm font-medium">
              EC 261/2004
            </span>
            <span className="text-slate-300 text-sm">9 min czytania</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Siła wyższa a lot — co naprawdę zwalnia linię lotniczą z odszkodowania?
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            „Nadzwyczajne okoliczności" to ulubiony argument linii lotniczych. Sprawdź kiedy jest zasadny, kiedy nie — i jak go zakwestionować.
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
                Nadzwyczajna okoliczność zwalniająca linię z odszkodowania musi być <strong>zewnętrzna, niezależna
                od linii i nieunikniona</strong> pomimo wszelkich rozsądnych środków. Usterka techniczna, strajk
                własnych pracowników, zła organizacja i opóźnienie poprzedniego lotu <strong>nie są</strong> siłą
                wyższą. Ekstremalna pogoda, strajk ATC, zamknięcie przestrzeni powietrznej przez władze —
                <strong> mogą nią być</strong>, ale linia musi to udowodnić.
              </p>
            </div>
          </div>
        </div>

        {/* Definicja prawna */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Definicja nadzwyczajnej okoliczności w EC 261/2004</h2>
          <p className="text-slate-700 mb-4">
            Rozporządzenie EC 261/2004 w motywie 14 wskazuje przykłady: „Nadzwyczajne okoliczności mogą wystąpić
            w szczególności w przypadku niestabilności politycznej, warunków meteorologicznych uniemożliwiających
            dany lot, zagrożenia bezpieczeństwa, nieoczekiwanych wad mających wpływ na bezpieczeństwo lotu
            oraz strajków mających wpływ na działalność przewoźnika."
          </p>
          <p className="text-slate-700 mb-5">
            Jednak sam motyw preambuły nie jest przepisem wykonawczym — Trybunał Sprawiedliwości UE doprecyzował
            w kolejnych wyrokach, że <strong>nie wystarczy powołać się na kategorię zdarzenia</strong>. Linia musi
            udowodnić spełnienie dwóch kumulatywnych warunków:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-5">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-800 mb-2">Warunek 1: Charakter zdarzenia</p>
              <p className="text-slate-600 text-sm">
                Zdarzenie musi być zewnętrzne wobec normalnej działalności linii i nie wynikać z jej decyzji
                operacyjnych ani zarządczych. Nie może być częścią ryzyka biznesowego, które linia powinna
                uwzględniać w swojej działalności.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-800 mb-2">Warunek 2: Nieuniknioność</p>
              <p className="text-slate-600 text-sm">
                Linia musiała podjąć wszelkie rozsądne środki, by uniknąć opóźnienia lub odwołania.
                Samo zaistnienie zdarzenia zewnętrznego nie wystarczy — linia musi wykazać, że nie mogła
                nic więcej zrobić.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-600" />
              Wyrok ETS C-549/07 Wallentin-Hermann v. Alitalia (2008)
            </p>
            <p className="text-slate-600 text-sm">
              Fundamentalny wyrok definiujący nadzwyczajne okoliczności w lotnictwie. ETS stwierdził, że pojęcie
              nadzwyczajnej okoliczności należy interpretować wąsko — tylko zdarzenia, „które ze względu na swój
              charakter lub źródło nie wpisują się w normalną działalność danego przewoźnika i pozostają poza jego
              rzeczywistą kontrolą."
            </p>
          </div>
        </section>

        {/* Tabela TAK/NIE */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Co jest, a co nie jest nadzwyczajną okolicznością?</h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="text-left p-4 font-semibold">Zdarzenie</th>
                  <th className="text-center p-4 font-semibold">Nadzwyczajna okoliczność?</th>
                  <th className="text-left p-4 font-semibold">Podstawa prawna</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 text-slate-700">Usterka techniczna samolotu</td>
                  <td className="p-4 text-center font-bold text-red-700">NIE</td>
                  <td className="p-4 text-slate-500 text-xs">C-549/07 Wallentin-Hermann</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50">
                  <td className="p-4 text-slate-700">Strajk własnych pracowników linii</td>
                  <td className="p-4 text-center font-bold text-red-700">NIE</td>
                  <td className="p-4 text-slate-500 text-xs">C-195/17 Krüsemann v. TUIfly</td>
                </tr>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 text-slate-700">Opóźnienie poprzedniego lotu (rotacja)</td>
                  <td className="p-4 text-center font-bold text-red-700">NIE</td>
                  <td className="p-4 text-slate-500 text-xs">C-257/14 van der Lans</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50">
                  <td className="p-4 text-slate-700">Zła organizacja / błąd operacyjny linii</td>
                  <td className="p-4 text-center font-bold text-red-700">NIE</td>
                  <td className="p-4 text-slate-500 text-xs">EC 261 motyw 14</td>
                </tr>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 text-slate-700">Strajk kontrolerów ATC</td>
                  <td className="p-4 text-center font-bold text-green-700">TAK</td>
                  <td className="p-4 text-slate-500 text-xs">EC 261 motyw 14 + orzecznictwo</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50">
                  <td className="p-4 text-slate-700">Ekstremalne warunki pogodowe</td>
                  <td className="p-4 text-center font-bold text-green-700">TAK*</td>
                  <td className="p-4 text-slate-500 text-xs">EC 261 motyw 14</td>
                </tr>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 text-slate-700">Zamknięcie przestrzeni powietrznej przez władze</td>
                  <td className="p-4 text-center font-bold text-green-700">TAK</td>
                  <td className="p-4 text-slate-500 text-xs">EC 261 motyw 14</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50">
                  <td className="p-4 text-slate-700">Erupcja wulkanu (np. Eyjafjallajökull 2010)</td>
                  <td className="p-4 text-center font-bold text-green-700">TAK</td>
                  <td className="p-4 text-slate-500 text-xs">Decyzja EASA o zamknięciu przestrzeni</td>
                </tr>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 text-slate-700">Akt terrorystyczny lub zagrożenie bezpieczeństwa</td>
                  <td className="p-4 text-center font-bold text-green-700">TAK</td>
                  <td className="p-4 text-slate-500 text-xs">EC 261 motyw 14</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50">
                  <td className="p-4 text-slate-700">Ukryta wada fabryczna samolotu (pierwsza wykrycie)</td>
                  <td className="p-4 text-center font-bold text-amber-600">ZALEŻY</td>
                  <td className="p-4 text-slate-500 text-xs">C-549/07 — wyjątek od reguły</td>
                </tr>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 text-slate-700">Zderzenie z ptakiem (bird strike)</td>
                  <td className="p-4 text-center font-bold text-amber-600">ZALEŻY</td>
                  <td className="p-4 text-slate-500 text-xs">C-394/14 Sandy Siewert — nierozstrzygnięte jednoznacznie</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            * Nie każda zła pogoda — tylko ekstremalna, uniemożliwiająca bezpieczne wykonanie lotu.
          </p>
        </section>

        {/* Pogoda dokładniej */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Kiedy pogoda to nadzwyczajna okoliczność, a kiedy nie?</h2>
          <p className="text-slate-700 mb-5">
            Pogoda jest najczęściej nadużywanym argumentem przez linie lotnicze. Kluczowe jest rozróżnienie:
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <Cloud className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900 mb-2">Nadzwyczajna pogoda (zwalnia z odszkodowania)</p>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Burze z piorunami uniemożliwiające start/lądowanie</li>
                    <li>• Ekstremalna śnieżyca zamykająca lotnisko</li>
                    <li>• Huragan lub cyklon na trasie lotu</li>
                    <li>• Erupcja wulkanu i pył wulkaniczny</li>
                    <li>• Oblodzenie pasa (gdy lotnisko nie radzi sobie z odlodzeniem)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-900 mb-2">Zwykła pogoda (NIE zwalnia z odszkodowania)</p>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Deszcz lub lekkie opady śniegu</li>
                    <li>• Mgła — typowa i przewidywalna dla danego lotniska</li>
                    <li>• Wiatr w granicach norm operacyjnych</li>
                    <li>• Lód na samolocie (standardowe odlodzenie to obowiązek linii)</li>
                    <li>• Ogólne złe warunki pogodowe bez zamknięcia lotniska</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-amber-50 border border-amber-300 rounded-xl p-4">
            <p className="text-amber-900 text-sm">
              <strong>Jak sprawdzić:</strong> Poproś linię o pisemne wskazanie kodu METAR (raport meteorologiczny
              lotniska) z dnia lotu i komunikatu NOTAM (informacji lotniczej). Jeśli lotnisko działało normalnie
              dla innych przewoźników — pogoda nie była nadzwyczajna.
            </p>
          </div>
        </section>

        {/* Kontekstowe CTA */}
        <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-slate-900 text-lg">Linia powołała się na nadzwyczajną okoliczność?</p>
              <p className="text-slate-600 text-sm mt-1">
                ClaimWinger oceni czy odmowa jest zasadna i — jeśli nie — poprowadzi roszczenie.
                Wycena bezpłatna, wynagrodzenie tylko przy sukcesie.
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl?utm_source=bizneslot&utm_medium=article&utm_campaign=sila-wyzsza-lot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-900 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Sprawdź roszczenie <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Jak zakwestionować */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Jak zakwestionować powołanie się linii na siłę wyższą?</h2>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Zażądaj pisemnego uzasadnienia",
                desc: "Poproś linię o wskazanie dokładnej przyczyny opóźnienia/odwołania, rodzaju nadzwyczajnej okoliczności i dowodów (METAR, NOTAM, komunikat służb ATC, raport serwisowy). Samo słowo „nadzwyczajne okoliczności” to nie dowód.",
                color: "bg-blue-100 text-blue-700",
              },
              {
                step: "2",
                title: "Sprawdź inne loty tego dnia",
                desc: "Jeśli inne linie normalnie operowały z tego samego lotniska w tym samym czasie — warunki nie były nadzwyczajne. Dane z FlightAware lub FlightRadar24 są publicznie dostępne.",
                color: "bg-purple-100 text-purple-700",
              },
              {
                step: "3",
                title: "Sprawdź kategorię zdarzenia",
                desc: "Usterka techniczna, brak załogi, opóźnienie poprzedniego lotu — to wewnętrzne problemy linii, nie siła wyższa. Porównaj z tabelą powyżej i odwołaj się do stosownego wyroku ETS.",
                color: "bg-teal-100 text-teal-700",
              },
              {
                step: "4",
                title: "Eskaluj do ULC lub sądu",
                desc: "Jeśli linia podtrzymuje odmowę bez wystarczającego uzasadnienia — złóż skargę do Urzędu Lotnictwa Cywilnego lub skieruj sprawę do e-Sądu. Możesz też powierzyć sprawę firmie roszczeniowej.",
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

        {/* Co zawsze przysługuje */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Co przysługuje nawet przy prawdziwej sile wyższej?</h2>
          <p className="text-slate-700 mb-4">
            Nawet jeśli nadzwyczajna okoliczność jest zasadna i odszkodowanie pieniężne nie przysługuje,
            linia nie jest zwolniona z obowiązków opieki nad pasażerem:
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <ul className="space-y-3 text-blue-800 text-sm">
              {[
                "Posiłki i napoje stosownie do czasu oczekiwania (przy opóźnieniu ≥2h)",
                "Bezpłatny nocleg i transport do hotelu gdy konieczny (np. przełożenie na następny dzień)",
                "2 bezpłatne rozmowy telefoniczne lub wiadomości e-mail",
                "Pełen zwrot kosztu biletu (przy odwołaniu) lub lot zastępczy do celu podróży",
                "Prawo do zwrotu biletu i lotu powrotnego gdy podróż stała się bezcelowa",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 bg-amber-50 border border-amber-300 rounded-xl p-4">
            <p className="text-amber-900 text-sm">
              <strong>Ważne:</strong> Odmowa zapewnienia posiłków lub noclegu przez linię — nawet przy prawdziwej
              sile wyższej — jest naruszeniem EC 261/2004 art. 9. Możesz dochodzić zwrotu tych kosztów
              niezależnie od tego czy odszkodowanie Ci przysługuje.
            </p>
          </div>
        </section>

        {/* Dark CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 mb-12 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Linia odmówiła odszkodowania — masz wątpliwości czy słusznie?</h3>
              <p className="text-slate-300 text-sm">
                ClaimWinger analizuje czy powołanie się na nadzwyczajną okoliczność jest zasadne.
                Bezpłatna ocena, bez kosztów z góry.
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl?utm_source=bizneslot&utm_medium=article&utm_campaign=sila-wyzsza-lot-cta"
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
                q: "Co EC 261/2004 uznaje za nadzwyczajną okoliczność zwalniającą z odszkodowania?",
                a: "EC 261/2004 i orzecznictwo ETS uznają za nadzwyczajne okoliczności: ekstremalne warunki pogodowe (burze, zamieć śnieżna, erupcja wulkanu), strajk kontrolerów ruchu lotniczego (ATC), decyzje władz (zamknięcie przestrzeni powietrznej, zakazy lotów), akty terrorystyczne oraz zdarzenia polityczne niezależne od linii.",
              },
              {
                q: "Czy usterka techniczna samolotu to nadzwyczajna okoliczność?",
                a: "Zasadniczo NIE. Wyrok ETS C-549/07 Wallentin-Hermann: regularna konserwacja i typowe usterki techniczne wpisują się w normalną działalność przewoźnika. Wyjątek: ukryta wada fabryczna wykryta po raz pierwszy — ale linia musi to udowodnić.",
              },
              {
                q: "Czy zła pogoda zawsze zwalnia linię z odszkodowania?",
                a: "Nie automatycznie. Deszcz, mgła lub lekki wiatr to typowe warunki w lotnictwie — nie są nadzwyczajną okolicznością. Nadzwyczajne są: burze z piorunami uniemożliwiające start, ekstremalna śnieżyca, huragan, erupcja wulkanu. Linia musi udowodnić, że pogoda faktycznie uniemożliwiała bezpieczny lot.",
              },
              {
                q: "Jak linia musi udowodnić nadzwyczajną okoliczność?",
                a: "Linia musi wykazać dwie rzeczy: (1) zdarzenie miało charakter nadzwyczajny i zewnętrzny, (2) podjęto wszelkie rozsądne środki, by uniknąć opóźnienia lub odwołania. Samo powołanie się na okoliczność bez dowodów jest niewystarczające — ciężar dowodu spoczywa na przewoźniku.",
              },
              {
                q: "Czy pandemia COVID-19 to nadzwyczajna okoliczność?",
                a: "Tak — zakazy lotów i zamknięcia przestrzeni powietrznej wprowadzone przez władze w związku z COVID-19 są uznawane za nadzwyczajną okoliczność. Natomiast sama epidemia bez decyzji administracyjnej ograniczającej loty może być kwestionowana.",
              },
              {
                q: "Co mi przysługuje gdy lot opóźniony przez nadzwyczajną okoliczność?",
                a: "Nawet przy nadzwyczajnej okoliczności linia musi zapewnić: posiłki i napoje przy oczekiwaniu powyżej 2h, nocleg i transport do hotelu gdy konieczny, zwrot kosztów biletu lub lot zastępczy przy odwołaniu. Odszkodowanie pieniężne (250–600 EUR) w tym przypadku nie przysługuje.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
                itemScope
                itemType="https://schema.org/Question"
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
              href="/artykuly/strajk-linii-lotniczej-nadzwyczajna-okolicznosc"
              className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-slate-400 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-900 text-sm mb-1">
                Strajk linii lotniczej — nadzwyczajna okoliczność czy odszkodowanie?
              </p>
              <p className="text-slate-500 text-xs">Wyrok ETS C-195/17 i różnica między strajkiem wewnętrznym a ATC</p>
            </Link>
            <Link
              href="/artykuly/co-to-jest-ec-261-2004-rozporzadzenie-ue"
              className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-slate-400 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-900 text-sm mb-1">
                Co to jest EC 261/2004? Rozporządzenie UE o prawach pasażerów
              </p>
              <p className="text-slate-500 text-xs">Zakres, prawa pasażerów i kiedy rozporządzenie obowiązuje</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
