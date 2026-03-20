import { SEO } from "@/components/SEO";
import { AlertCircle, AlertTriangle, CheckCircle2, Clock, FileText, Scale, ArrowRight } from "lucide-react";
import Link from "next/link";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function DelayedFlightArticle() {
  return (
    <>
      <SEO
        title="Lot służbowy opóźniony o ponad 3 godziny — krok po kroku"
        description="Lot służbowy opóźniony o ponad 3 godziny uprawnia do odszkodowania do 600 EUR. Sprawdź krok po kroku jak odzyskać pieniądze i jakie dokumenty potrzebujesz."
        url="https://bizneslot.info/artykuly/lot-sluzbowy-opozniony-ponad-3-godziny-krok-po-kroku"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Lot służbowy opóźniony o ponad 3 godziny — krok po kroku",
          "description": "Lot służbowy opóźniony o ponad 3 godziny uprawnia do odszkodowania do 600 EUR. Sprawdź krok po kroku jak odzyskać pieniądze i jakie dokumenty potrzebujesz.",
          "author": {"@type": "Organization", "name": "bizneslot.info"},
          "publisher": {"@type": "Organization", "name": "bizneslot.info"},
          "datePublished": "2025-01-17",
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
              "name": "Czy opóźnienie lotu służbowego o 3 godziny uprawnia do odszkodowania?",
              "acceptedAnswer": {"@type": "Answer", "text": "Tak, opóźnienie lotu służbowego o 3 godziny uprawnia do odszkodowania. Zgodnie z rozporządzeniem WE 261/2004, pasażer ma prawo do odszkodowania finansowego gdy lot jest opóźniony o co najmniej 3 godziny."}
            },
            {
              "@type": "Question",
              "name": "Jakie dokumenty potrzebne są do odzyskania odszkodowania za opóźniony lot służbowy?",
              "acceptedAnswer": {"@type": "Answer", "text": "Do odzyskania odszkodowania za opóźniony lot służbowy potrzebujesz karty pokładowej, biletu, dokumentu potwierdzającego opóźnienie oraz ewentualnych rachunków za dodatkowe wydatki poniesione w wyniku opóźnienia."}
            },
            {
              "@type": "Question",
              "name": "Ile wynosi odszkodowanie za opóźnienie lotu służbowego o 4 godziny?",
              "acceptedAnswer": {"@type": "Answer", "text": "Odszkodowanie za opóźnienie lotu służbowego o 4 godziny wynosi do 600 EUR dla tras powyżej 3500 km, 400 EUR dla tras 1500-3500 km i 250 EUR dla tras do 1500 km, niezależnie od ceny biletu służbowego."}
            },
            {
              "@type": "Question",
              "name": "Czy pracodawca może odmówić mi prawa do odszkodowania za opóźniony lot służbowy?",
              "acceptedAnswer": {"@type": "Answer", "text": "Nie, pracodawca nie może odmówić prawa do odszkodowania za opóźniony lot służbowy. Prawo do odszkodowania przysługuje pracownikowi-pasażerowi, a nie firmie, i jest chronione przez prawo UE."}
            },
            {
              "@type": "Question",
              "name": "Jak długo mogę składać wniosek o odszkodowanie za opóźniony lot służbowy?",
              "acceptedAnswer": {"@type": "Answer", "text": "Wniosek o odszkodowanie za opóźniony lot służbowy możesz składać przez 3 lata od daty lotu. W Polsce termin przedawnienia roszczeń wynosi 3 lata od dnia, w którym roszczenie stało się wymagalne."}
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
              <Clock className="h-6 w-6 text-blue-200" />
              <span className="text-blue-200 font-medium text-sm">Prawa pasażera w podróży służbowej • 10 min czytania</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Lot służbowy opóźniony o ponad 3 godziny — krok po kroku
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Opóźnienie lotu o 3+ godziny automatycznie uprawnia do odszkodowania do 600 EUR. Prawo to przysługuje pracownikowi osobiście, niezależnie od tego, kto kupił bilet.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {["Odszkodowanie do 600 EUR", "Prawo należy do pracownika", "Termin: 3 lata w Polsce"].map((item) => (
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
            Lot służbowy opóźniony o ponad 3 godziny to sytuacja, która zgodnie z rozporządzeniem WE 261/2004 uprawnia pasażera do odszkodowania finansowego. Pracownik podróżujący w delegacji ma takie same prawa jak pasażer prywatny — prawo to jest osobiste i nieprzenoszalne. Odszkodowanie przysługuje niezależnie od tego, czy bilet służbowy został kupiony przez firmę, czy pracownika.
          </p>

          {/* Kluczowa informacja */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6 mb-12 flex gap-4">
            <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-900 mb-1">Ważne</p>
              <p className="text-blue-800">Rozporządzenie WE 261/2004 stosuje się do wszystkich lotów z wylotem z UE oraz lotów do UE wykonywanych przez linie UE. Obejmuje to większość lotów służbowych pracowników polskich firm.</p>
            </div>
          </div>

          {/* Podstawa prawna */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Scale className="h-8 w-8 text-blue-600" />
              Podstawa prawna odszkodowania za opóźnione loty służbowe
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Podstawą prawną jest rozporządzenie Parlamentu Europejskiego i Rady WE 261/2004 z dnia 11 lutego 2004 r. Ma ono bezpośrednie zastosowanie we wszystkich państwach UE i ma pierwszeństwo przed prawem krajowym. Kluczowe jest to, że rozporządzenie nie rozróżnia celu podróży — ochroną objęci są zarówno pasażerowie prywatni, jak i pracownicy podróżujący służbowo.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Zgodnie z art. 7 rozporządzenia, pasażer ma prawo do odszkodowania finansowego gdy lot jest opóźniony o co najmniej 3 godziny. Próg 3 godzin jest bezwzględny — nawet opóźnienie o 2 godziny 59 minut nie uprawnia do odszkodowania.
            </p>
          </section>

          {/* Kiedy przysługuje */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="h-8 w-8 text-blue-600" />
              Kiedy przysługuje odszkodowanie za opóźniony lot służbowy?
            </h2>

            <div className="bg-blue-600 text-white rounded-xl p-6 text-center mb-8">
              <p className="text-5xl font-bold mb-2">3 godziny</p>
              <p className="text-blue-200 text-lg">Minimalne opóźnienie uprawniające do odszkodowania</p>
              <p className="text-blue-300 text-sm mt-1">Źródło: Rozporządzenie WE 261/2004</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { dist: "do 1500 km", amount: "250 EUR", example: "Warszawa–Berlin, Kraków–Paryż" },
                { dist: "1500–3500 km", amount: "400 EUR", example: "Warszawa–Madryt, Wrocław–Rzym" },
                { dist: "powyżej 3500 km", amount: "600 EUR", example: "Warszawa–Nowy Jork, Kraków–Dubaj" },
              ].map(({ dist, amount, example }) => (
                <div key={dist} className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-xl p-5 text-center">
                  <p className="text-sm text-blue-700 font-medium mb-1">{dist}</p>
                  <p className="text-3xl font-bold text-blue-900 mb-2">{amount}</p>
                  <p className="text-xs text-blue-600">{example}</p>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
              <table className="w-full text-sm">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Dystans trasy</th>
                    <th className="px-4 py-3 text-left font-semibold">Próg opóźnienia</th>
                    <th className="px-4 py-3 text-left font-semibold">Kwota odszkodowania</th>
                    <th className="px-4 py-3 text-left font-semibold">Przykładowe trasy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Do 1500 km", "3 godziny", "250 EUR", "Warszawa–Berlin, Kraków–Paryż"],
                    ["1500–3500 km", "3 godziny", "400 EUR", "Warszawa–Madryt, Wrocław–Rzym"],
                    ["Powyżej 3500 km", "3 godziny", "600 EUR", "Warszawa–Nowy Jork, Kraków–Dubaj"],
                  ].map(([col1, col2, col3, col4], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 text-gray-900 font-medium">{col1}</td>
                      <td className="px-4 py-3 text-gray-700">{col2}</td>
                      <td className="px-4 py-3 font-semibold text-blue-700">{col3}</td>
                      <td className="px-4 py-3 text-gray-700">{col4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Należy pamiętać, że odszkodowanie nie przysługuje w przypadku nadzwyczajnych okoliczności, takich jak ekstremalne warunki pogodowe, niestabilność polityczna w kraju docelowym czy ryzyko bezpieczeństwa. Linia lotnicza musi jednak udowodnić istnienie takich okoliczności.
            </p>
          </section>

          {/* Procedura krok po kroku */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-blue-600" />
              Procedura odzyskiwania odszkodowania krok po kroku
            </h2>

            <div className="space-y-4">
              {[
                { num: 1, title: "Zbierz dokumentację na lotnisku", desc: "Gdy dowiesz się o opóźnieniu, natychmiast poproś personel linii lotniczej o oficjalne potwierdzenie opóźnienia. Zrób zdjęcie tablicy odlotów z informacją o opóźnieniu oraz zachowaj kartę pokładową." },
                { num: 2, title: "Zgromadź wszystkie dowody podróży", desc: "Zbierz kopię biletu służbowego, karty pokładowej, rezerwacji oraz wszelką korespondencję z linią lotniczą dotyczącą opóźnienia. Im więcej dokumentów, tym silniejsza Twoja pozycja." },
                { num: 3, title: "Wypełnij formularz reklamacji", desc: "Pobierz formularz reklamacji ze strony linii lotniczej i wypełnij go dokładnie. Podaj numer rezerwacji, dane lotu, przyczynę opóźnienia oraz żądaną kwotę odszkodowania." },
                { num: 4, title: "Złóż reklamację do linii lotniczej", desc: "Wyślij reklamację listem poleconym z potwierdzeniem odbioru lub przez formularz online na stronie linii. Dołącz kopie wszystkich dokumentów potwierdzających opóźnienie." },
                { num: 5, title: "Czekaj na odpowiedź linii", desc: "Linia lotnicza ma 30 dni na odpowiedź na reklamację. Jeśli odpowiedź jest odmowna lub brak odpowiedzi, możesz zwrócić się o pomoc do specjalistycznej firmy." },
                { num: 6, title: "Skorzystaj z pomocy prawnej", desc: "Jeśli linia odmawia wypłaty, możesz skorzystać z usług firm działających na zasadzie no win, no fee. Takie firmy pomogą Ci odzyskać odszkodowanie bez opłat z góry." },
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
          </section>

          {/* Dokumentacja */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-blue-600" />
              Niezbędna dokumentacja do odzyskania odszkodowania
            </h2>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6 mb-8 flex gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 mb-1">Uwaga</p>
                <p className="text-amber-800">Zawsze rób zdjęcia tablicy odlotów z informacją o opóźnieniu. To najważniejszy dowód, który trudno zakwestionować.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Podstawowa dokumentacja</h3>
                <ul className="space-y-2">
                  {[
                    "Karta pokładowa z adnotacją o opóźnieniu",
                    "Kopia biletu lub potwierdzenia rezerwacji",
                    "Zdjęcie tablicy odlotów z info o opóźnieniu",
                    "Oficjalne pismo od linii potwierdzające opóźnienie",
                    "Dowód poniesionych wydatków (jeśli ubiegasz się o zwrot)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Dodatkowa dokumentacja</h3>
                <ul className="space-y-2">
                  {[
                    "Korespondencja mailowa z linią lotniczą",
                    "Rachunki za posiłki/napoje/hotel w oczekiwaniu",
                    "Dowody komunikacji z pracodawcą",
                    "Wyciągi bankowe potwierdzające koszty podróży",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Terminy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="h-8 w-8 text-blue-600" />
              Terminy składania wniosków i przedawnienia
            </h2>

            <div className="bg-blue-600 text-white rounded-xl p-6 text-center mb-8">
              <p className="text-5xl font-bold mb-2">3 lata</p>
              <p className="text-blue-200 text-lg">Termin przedawnienia w Polsce</p>
              <p className="text-blue-300 text-sm mt-1">Źródło: Kodeks cywilny RP</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
              <table className="w-full text-sm">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Kraj</th>
                    <th className="px-4 py-3 text-left font-semibold">Termin przedawnienia</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Polska", "3 lata"],
                    ["Wielka Brytania", "6 lat"],
                    ["Niemcy", "3 lata"],
                    ["Francja", "5 lat"],
                    ["Hiszpania", "5 lat"],
                    ["Włochy", "5 lat"],
                  ].map(([kraj, termin], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 text-gray-900 font-medium">{kraj}</td>
                      <td className="px-4 py-3 text-gray-700">{termin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6 flex gap-4">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-900 mb-1">Ważne</p>
                <p className="text-blue-800">Nie czekaj z wnioskiem do ostatniej chwili. Im wcześniej złożysz reklamację, tym większa szansa na szybkie rozstrzygnięcie sprawy.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Twój lot służbowy był opóźniony o ponad 3 godziny?</h3>
                <p className="text-blue-100">Sprawdź bezpłatnie, czy należy Ci się odszkodowanie do 600 EUR. ClaimWinger działa na zasadzie no win, no fee — płacisz tylko gdy wygrasz.</p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <a
                  href="https://claimwinger.com/pl/opozniony-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=K1-prawa-pasazera&utm_content=lot-opozniony-3-godziny"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
                  onClick={() => { if (typeof window !== 'undefined' && window.dataLayer) { window.dataLayer.push({ event: 'claimwinger_cta_click', claimwinger: { type: 'cta_button', cluster: 'K1', article_title: 'Lot służbowy opóźniony o ponad 3 godziny — krok po kroku', destination: 'opozniony_lot' } }); } }}
                >
                  Sprawdź odszkodowanie za opóźniony lot <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://claimwinger.com/pl/odwolany-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=K1-prawa-pasazera&utm_content=lot-opozniony-3-godziny"
                  className="inline-flex items-center gap-2 bg-blue-800/50 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors whitespace-nowrap"
                  onClick={() => { if (typeof window !== 'undefined' && window.dataLayer) { window.dataLayer.push({ event: 'claimwinger_cta_click', claimwinger: { type: 'cta_button', cluster: 'K1', article_title: 'Lot służbowy opóźniony o ponad 3 godziny — krok po kroku', destination: 'odwolany_lot' } }); } }}
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
                { q: "Czy opóźnienie lotu służbowego o 3 godziny uprawnia do odszkodowania?", a: "Tak, opóźnienie lotu służbowego o 3 godziny uprawnia do odszkodowania. Zgodnie z rozporządzeniem WE 261/2004, pasażer ma prawo do odszkodowania finansowego gdy lot jest opóźniony o co najmniej 3 godziny." },
                { q: "Jakie dokumenty potrzebne są do odzyskania odszkodowania za opóźniony lot służbowy?", a: "Do odzyskania odszkodowania za opóźniony lot służbowy potrzebujesz karty pokładowej, biletu, dokumentu potwierdzającego opóźnienie oraz ewentualnych rachunków za dodatkowe wydatki poniesione w wyniku opóźnienia." },
                { q: "Ile wynosi odszkodowanie za opóźnienie lotu służbowego o 4 godziny?", a: "Odszkodowanie za opóźnienie lotu służbowego o 4 godziny wynosi do 600 EUR dla tras powyżej 3500 km, 400 EUR dla tras 1500–3500 km i 250 EUR dla tras do 1500 km, niezależnie od ceny biletu służbowego." },
                { q: "Czy pracodawca może odmówić mi prawa do odszkodowania za opóźniony lot służbowy?", a: "Nie, pracodawca nie może odmówić prawa do odszkodowania za opóźniony lot służbowy. Prawo do odszkodowania przysługuje pracownikowi-pasażerowi, a nie firmie, i jest chronione przez prawo UE." },
                { q: "Jak długo mogę składać wniosek o odszkodowanie za opóźniony lot służbowy?", a: "Wniosek o odszkodowanie za opóźniony lot służbowy możesz składać przez 3 lata od daty lotu. W Polsce termin przedawnienia roszczeń wynosi 3 lata od dnia, w którym roszczenie stało się wymagalne." },
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
                { href: "/artykuly/lot-sluzbowy-odwolany-ostatniej-chwili-co-zrobic", title: "Lot odwołany w ostatniej chwili — co zrobić" },
                { href: "/artykuly/opoznienie-lotu-spotkanie-biznesowe-koszty-konsekwencji", title: "Opóźnienie lotu a spotkanie biznesowe — koszty" },
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
