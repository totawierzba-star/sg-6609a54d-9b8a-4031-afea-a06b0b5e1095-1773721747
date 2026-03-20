import { SEO } from "@/components/SEO";
import { AlertCircle, AlertTriangle, CheckCircle2, Briefcase, Scale, FileText, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CorporateTicketComplaintArticle() {
  return (
    <>
      <SEO
        title="Bilet służbowy kupiony przez firmę — kto składa reklamację"
        description="Kompleksowy wyjaśnienie kto składa reklamację za bilet służbowy kupiony przez firmę. Sprawdź czy pracownik czy pracodawca ma prawo do odszkodowania i jak przebiega procedura roszczeniowa w podróżach biznesowych."
        url="https://bizneslot.info/artykuly/bilet-sluzbowy-kupiony-przez-firme-kto-sklada-reklamacje"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Bilet służbowy kupiony przez firmę — kto składa reklamację",
          "description": "Kompleksowy wyjaśnienie kto składa reklamację za bilet służbowy kupiony przez firmę. Sprawdź czy pracownik czy pracodawca ma prawo do odszkodowania i jak przebiega procedura roszczeniowa w podróżach biznesowych.",
          "author": {"@type": "Organization", "name": "bizneslot.info"},
          "publisher": {"@type": "Organization", "name": "bizneslot.info"},
          "datePublished": "2025-01-21",
          "inLanguage": "pl-PL"
        })
      }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Kto składa reklamację za bilet służbowy kupiony przez firmę?",
              "acceptedAnswer": {"@type": "Answer", "text": "Reklamację za bilet służbowy kupiony przez firmę składa pracownik-pasażer, ponieważ prawa pasażera przysługują osobie podróżującej, a nie podmiotowi, który sfinansował podróż. Pracodawca może wspierać procedurę, ale formalnie roszczenie należy do pracownika."}
            },
            {
              "@type": "Question",
              "name": "Czy pracodawca może odzyskać odszkodowanie za bilet służbowy?",
              "acceptedAnswer": {"@type": "Answer", "text": "Tak, pracodawca może odzyskać odszkodowanie za bilet służbowy jako zwrot wydatków podróży służbowej. Odszkodowanie pracownika może być przeznaczone na pokrycie kosztów biletu lub zaliczone do kosztów uzyskania przychodu firmy."}
            },
            {
              "@type": "Question",
              "name": "Jakie dokumenty potrzebne są do reklamacji biletu służbowego?",
              "acceptedAnswer": {"@type": "Answer", "text": "Do reklamacji biletu służbowego potrzebujesz karty pokładowej, biletu lotniczego, potwierdzenia odwołania/opóźnienia, dowodu opłacenia biletu przez firmę oraz dokumentacji poniesionych wydatków (paragony, rachunki)."}
            },
            {
              "@type": "Question",
              "name": "Czy odszkodowanie za bilet służbowy jest opodatkowane?",
              "acceptedAnswer": {"@type": "Answer", "text": "Odszkodowanie za bilet służbowy do 600 EUR jest zwolnione z podatku PIT, jeśli pochodzi z roszczeń pasażera. Jeśli jest traktowane jako zwrot kosztów firmowych, podlega innym zasadom podatkowym."}
            },
            {
              "@type": "Question",
              "name": "Jak przebiega procedura reklamacyjna dla biletów służbowych?",
              "acceptedAnswer": {"@type": "Answer", "text": "Procedura reklamacyjna dla biletów służbowych obejmuje złożenie wniosku do linii lotniczej przez pracownika, dołączenie dokumentacji, oczekiwanie na decyzję, a następnie rozliczenie odszkodowania między pracownikiem a pracodawcą."}
            }
          ]
        })
      }} />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/artykuly" className="text-blue-200 hover:text-white text-sm transition-colors">← Wszystkie artykuły</Link>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-6 w-6 text-blue-200" />
              <span className="text-blue-200 font-medium text-sm">Prawa pasażera w podróży służbowej • 14 min czytania</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Bilet służbowy kupiony przez firmę — kto składa reklamację
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Choć firma finansuje podróż, prawa pasażera przysługują pracownikowi. Wyjaśniamy kompleksowo procedurę reklamacyjną, aspekty prawno-podatkowe i sposób rozliczenia z pracodawcą.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {["Reklamację składa pracownik", "Odszkodowanie do 600 EUR", "Firma odzyskuje koszty biletu"].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <p className="text-lg leading-relaxed text-gray-700 mb-10">
            Bilet służbowy kupiony przez firmę to standardowa sytuacja w polskich przedsiębiorstwach, ale rodzi istotne pytania prawne i proceduralne. Kto ma prawo składać reklamację w razie opóźnienia lub odwołania lotu? Kto otrzymuje odszkodowanie i jak je rozliczyć? Rozporządzenie WE 261/2004 jasno określa, że prawa pasażera przysługują osobie podróżującej, niezależnie od tego, kto sfinansował bilet.
          </p>

          {/* Kluczowa zasada */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6 mb-12 flex gap-4">
            <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-900 mb-1">Ważne</p>
              <p className="text-blue-800">Rozporządzenie WE 261/2004 nie rozróżnia pasażerów pod względem źródła finansowania podróży. Prawa są identyczne dla pasażerów podróżujących na koszt własny, firmowy czy ubezpieczony.</p>
            </div>
          </div>

          {/* Pracownik vs pracodawca */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-blue-600" />
              Prawo pasażera vs prawo pracodawcy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Podstawowa zasada prawa lotniczego jest jednoznaczna: prawa pasażera przysługują osobie fizycznej, która odbywa podróż, a nie podmiotowi, który sfinansował bilet. Oznacza to, że nawet jeśli firma kupiła bilet służbowy, to pracownik-pasażer jest uprawniony do składania reklamacji i otrzymywania odszkodowania.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="h-5 w-5 text-blue-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Prawa pracownika-pasażera</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Prawo do złożenia reklamacji o odszkodowanie do 600 EUR",
                    "Prawo do zwrotu kosztów biletu przy odwołaniu lotu",
                    "Prawo do opieki nad pasażerem (posiłki, hotel, transport)",
                    "Prawo do informacji o przysługujących świadczeniach",
                    "Prawo do wyboru formy rozliczenia z pracodawcą",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border-2 border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Briefcase className="h-5 w-5 text-slate-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Uprawnienia pracodawcy</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Prawo do żądania zwrotu kosztów biletu od pracownika",
                    "Prawo do zaliczenia wydatków do kosztów uzyskania przychodu",
                    "Prawo do zawarcia umowy o przeniesieniu praw do odszkodowania",
                    "Prawo do wsparcia pracownika w procedurze reklamacyjnej",
                    "Prawo do uzyskania dokumentacji roszczeniowej",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Aspekt</th>
                    <th className="px-4 py-3 text-left font-semibold">Pracownik-pasażer</th>
                    <th className="px-4 py-3 text-left font-semibold">Pracodawca</th>
                    <th className="px-4 py-3 text-left font-semibold">Rozwiązanie</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Prawo do reklamacji", "Tak (główne)", "Nie", "Pracownik składa, firma wspiera"],
                    ["Otrzymanie odszkodowania", "Tak", "Nie (bezpośrednio)", "Umowa lub zwrot kosztów"],
                    ["Zwrot kosztów biletu", "Tak", "Tak (jako zwrot)", "Pracownik zwraca firmie"],
                    ["Dokumentacja", "Oryginały", "Kopie", "Pracownik udostępnia"],
                    ["Aspekty podatkowe", "PIT zwolnione", "Koszty uzyskania przychodu", "Rozliczenie w firmie"],
                  ].map(([col1, col2, col3, col4], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 text-gray-900 font-medium">{col1}</td>
                      <td className="px-4 py-3 text-gray-700">{col2}</td>
                      <td className="px-4 py-3 text-gray-700">{col3}</td>
                      <td className="px-4 py-3 text-gray-700">{col4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Kto składa reklamację */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-blue-600" />
              Kto formalnie składa reklamację
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Formalnie reklamację za bilet służbowy składa pracownik-pasażer, ponieważ to on jest stroną umowy przewozu z linią lotniczą. Pracodawca, nawet jeśli sfinansował bilet, nie jest stroną tej umowy i nie może bezpośrednio składać roszczeń do linii lotniczej.
            </p>

            <div className="bg-blue-600 text-white rounded-xl p-6 text-center mb-8">
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-blue-200 text-lg">praw pasażera przysługuje pracownikowi</p>
              <p className="text-blue-300 text-sm mt-1">Źródło: Rozporządzenie WE 261/2004</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Procedura pracownika</h3>
                <div className="space-y-3">
                  {[
                    "Zbiera dokumentację podróży",
                    "Wypełnia formularz reklamacji",
                    "Dołącza dokumentację wydatków",
                    "Składa reklamację (osobiście lub przez pełnomocnika)",
                    "Otrzymuje odszkodowanie na swoje konto",
                    "Rozlicza odszkodowanie z pracodawcą",
                  ].map((item, i) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">{i + 1}</div>
                      <span className="text-sm text-gray-700 mt-0.5">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Rola pracodawcy</h3>
                <ul className="space-y-2">
                  {[
                    "Dostarcza dokumentacji finansowej biletu",
                    "Wspiera w przygotowaniu dokumentacji",
                    "Może udzielić pełnomocnictwa",
                    "Może zorganizować pomoc prawną",
                    "Odbiera kopie dokumentacji do celów księgowych",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6 flex gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 mb-1">Uwaga</p>
                <p className="text-amber-800">Pracodawca nie może złożyć reklamacji w imieniu pracownika bez pełnomocnictwa. Warto przygotować upoważnienie, aby uniknąć problemów z linią lotniczą.</p>
              </div>
            </div>
          </section>

          {/* Aspekty podatkowe */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Scale className="h-8 w-8 text-blue-600" />
              Aspekty podatkowe odszkodowania
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Odszkodowanie za bilet służbowy ma specyficzny status podatkowy, który zależy od tego, czy jest traktowane jako roszczenie pasażera, czy jako zwrot kosztów firmowych. Prawidłowa klasyfikacja podatkowa jest kluczowa dla uniknięcia problemów z urzędem skarbowym.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-4">Odszkodowanie pracownika</h3>
                <ul className="space-y-2">
                  {[
                    "Do 600 EUR za opóźnienie/odwołanie — zwolnione z PIT",
                    "Odszkodowanie za bagaż — zwolnione z PIT",
                    "Podstawa: art. 21 ust. 1 pkt 3b ustawy o PIT",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Zwrot kosztów firmowych</h3>
                <ul className="space-y-2">
                  {[
                    "Pracownik zwraca koszty firmie — neutralny podatkowo",
                    "Pracownik zachowuje odszkodowanie — może być przychodem",
                    "Firma zalicza wydatki do kosztów uzyskania przychodu",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Rodzaj świadczenia</th>
                    <th className="px-4 py-3 text-left font-semibold">Odbiorca</th>
                    <th className="px-4 py-3 text-left font-semibold">Podatek PIT</th>
                    <th className="px-4 py-3 text-left font-semibold">KUP firmy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Odszkodowanie 600 EUR", "Pracownik", "Zwolnione", "Nie"],
                    ["Zwrot kosztów biletu", "Firma", "Nie dotyczy", "Tak"],
                    ["Koszty hotelu/posiłków", "Firma", "Nie dotyczy", "Tak"],
                    ["Odszkodowanie przeniesione", "Firma", "Przychód", "Nie"],
                  ].map(([col1, col2, col3, col4], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 text-gray-900 font-medium">{col1}</td>
                      <td className="px-4 py-3 text-gray-700">{col2}</td>
                      <td className="px-4 py-3 text-gray-700">{col3}</td>
                      <td className="px-4 py-3 text-gray-700">{col4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Procedura rozliczenia */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Briefcase className="h-8 w-8 text-blue-600" />
              Procedura rozliczenia z pracodawcą
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Po otrzymaniu odszkodowania od linii lotniczej pracownik musi rozliczyć się z pracodawcą. Najczęściej odszkodowanie jest przeznaczone na pokrycie kosztów biletu służbowego, ale procedura rozliczenia zależy od polityki firmy.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { num: 1, title: "Otrzymanie odszkodowania", desc: "Pracownik otrzymuje odszkodowanie na swoje konto bankowe od linii lotniczej lub firmy specjalistycznej. Kwota zazwyczaj zawiera odszkodowanie podstawowe oraz ewentualne zwroty kosztów." },
                { num: 2, title: "Dokumentacja otrzymanej kwoty", desc: "Pracownik przygotowuje potwierdzenie otrzymania odszkodowania (wyciąg bankowy, potwierdzenie przelewu) oraz dokumentację z linii lotniczej potwierdzającą kwotę i podstawę roszczenia." },
                { num: 3, title: "Obliczenie zwrotu dla firmy", desc: "Pracownik oblicza kwotę do zwrotu firmie, która zazwyczaj równa jest cenie biletu służbowego. Różnica między odszkodowaniem a kosztem biletu może pozostać u pracownika." },
                { num: 4, title: "Przelew zwrotu do firmy", desc: "Pracownik przelewa obliczoną kwotę na konto firmowe z odpowiednim tytułem przelewu (np. \"zwrot kosztów biletu służbowego — lot [numer] z [data]\")." },
                { num: 5, title: "Dokumentacja księgowa", desc: "Dział księgowości zaksięguje zwrot kosztów jako zmniejszenie wydatków podróży służbowej i aktualizuje dokumentację rozliczenia delegacji." },
                { num: 6, title: "Zamknięcie sprawy", desc: "Pracownik i pracodawca potwierdzają rozliczenie i archiwizują dokumentację na potrzeby ewentualnych kontroli podatkowych." },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">{num}</div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6 flex gap-4">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-900 mb-1">Dobra praktyka</p>
                <p className="text-blue-800">Warto zawrzeć z pracodawcą pisemne ustalenia dotyczące procedury rozliczenia odszkodowania, aby uniknąć nieporozumień i problemów prawnych.</p>
              </div>
            </div>
          </section>

          {/* Dokumentacja */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-blue-600" />
              Dokumentacja wymagana w procesie reklamacyjnym
            </h2>

            <div className="bg-blue-600 text-white rounded-xl p-6 text-center mb-8">
              <p className="text-5xl font-bold mb-2">15</p>
              <p className="text-blue-200 text-lg">dokumentów typowo wymaganych</p>
              <p className="text-blue-300 text-sm mt-1">Źródło: Praktyka reklamacyjna</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Dokumentacja podróży",
                  items: ["Karta pokładowa i bilet lotniczy", "Potwierdzenie odwołania/opóźnienia", "Dokumenty tożsamości pracownika", "Korespondencja z linią lotniczą"],
                },
                {
                  title: "Dokumentacja finansowa",
                  items: ["Faktura VAT za bilet na firmę", "Potwierdzenie zapłaty z konta firmowego", "Polecenie wyjazdu służbowego", "Rozliczenie delegacji"],
                },
                {
                  title: "Dokumentacja firmowa",
                  items: ["Pełnomocnictwo (jeśli wymagane)", "Potwierdzenie zatrudnienia", "Polityka podróży służbowych", "Decyzje zarządu o procedurach"],
                },
              ].map(({ title, items }) => (
                <div key={title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Twój bilet służbowy został opóźniony lub odwołany?</h3>
                <p className="text-blue-100">Sprawdź bezpłatnie, czy należy Ci się odszkodowanie do 600 EUR. ClaimWinger pomoże Ci w całej procedurze reklamacyjnej i doradzi jak prawidłowo rozliczyć odszkodowanie z firmą.</p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <a
                  href="https://claimwinger.com/pl/opozniony-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=K1-prawa-pasazera&utm_content=bilet-sluzbowy-kto-sklada-reklamacje"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
                  onClick={() => { if (typeof window !== 'undefined' && window.dataLayer) { window.dataLayer.push({ event: 'claimwinger_cta_click', claimwinger: { type: 'cta_button', cluster: 'K1', article_title: 'Bilet służbowy kupiony przez firmę — kto składa reklamację', destination: 'opozniony_lot' } }); } }}
                >
                  Sprawdź odszkodowanie za opóźniony lot <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://claimwinger.com/pl/odwolany-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=K1-prawa-pasazera&utm_content=bilet-sluzbowy-kto-sklada-reklamacje"
                  className="inline-flex items-center gap-2 bg-blue-800/50 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors whitespace-nowrap"
                  onClick={() => { if (typeof window !== 'undefined' && window.dataLayer) { window.dataLayer.push({ event: 'claimwinger_cta_click', claimwinger: { type: 'cta_button', cluster: 'K1', article_title: 'Bilet służbowy kupiony przez firmę — kto składa reklamację', destination: 'odwolany_lot' } }); } }}
                >
                  Sprawdź odszkodowanie za odwołany lot <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Najczęstsze pytania</h2>
            <div className="space-y-4">
              {[
                { q: "Kto składa reklamację za bilet służbowy kupiony przez firmę?", a: "Reklamację za bilet służbowy kupiony przez firmę składa pracownik-pasażer, ponieważ prawa pasażera przysługują osobie podróżującej, a nie podmiotowi, który sfinansował podróż. Pracodawca może wspierać procedurę, ale formalnie roszczenie należy do pracownika." },
                { q: "Czy pracodawca może odzyskać odszkodowanie za bilet służbowy?", a: "Tak, pracodawca może odzyskać odszkodowanie za bilet służbowy jako zwrot wydatków podróży służbowej. Odszkodowanie pracownika może być przeznaczone na pokrycie kosztów biletu lub zaliczone do kosztów uzyskania przychodu firmy." },
                { q: "Jakie dokumenty potrzebne są do reklamacji biletu służbowego?", a: "Do reklamacji biletu służbowego potrzebujesz karty pokładowej, biletu lotniczego, potwierdzenia odwołania/opóźnienia, dowodu opłacenia biletu przez firmę oraz dokumentacji poniesionych wydatków (paragony, rachunki)." },
                { q: "Czy odszkodowanie za bilet służbowy jest opodatkowane?", a: "Odszkodowanie za bilet służbowy do 600 EUR jest zwolnione z podatku PIT, jeśli pochodzi z roszczeń pasażera. Jeśli jest traktowane jako zwrot kosztów firmowych, podlega innym zasadom podatkowym." },
                { q: "Jak przebiega procedura reklamacyjna dla biletów służbowych?", a: "Procedura reklamacyjna dla biletów służbowych obejmuje złożenie wniosku do linii lotniczej przez pracownika, dołączenie dokumentacji, oczekiwanie na decyzję, a następnie rozliczenie odszkodowania między pracownikiem a pracodawcą." },
              ].map(({ q, a }, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm" itemScope itemType="https://schema.org/Question">
                  <h3 className="font-semibold text-gray-900 mb-3" itemProp="name">{q}</h3>
                  <div itemScope itemType="https://schema.org/Answer">
                    <p className="text-gray-600 leading-relaxed" itemProp="text">{a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Powiązane artykuły */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Powiązane artykuły</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: "/artykuly/odszkodowanie-lot-sluzbowy-pracownik-czy-pracodawca", title: "Odszkodowanie — pracownik czy pracodawca?" },
                { href: "/artykuly/lot-sluzbowy-opozniony-ponad-3-godziny-krok-po-kroku", title: "Lot opóźniony o ponad 3 godziny — krok po kroku" },
              ].map(({ href, title }) => (
                <Link key={href} href={href} className="flex items-center gap-3 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors group">
                  <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  <span className="text-gray-800 font-medium text-sm">{title}</span>
                </Link>
              ))}
            </div>
          </div>

        </article>
      </div>
    </>
  );
}
