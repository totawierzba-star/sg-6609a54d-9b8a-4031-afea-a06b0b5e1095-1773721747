import { SEO } from "@/components/SEO";
import { AlertCircle, AlertTriangle, CheckCircle2, Luggage, FileText, DollarSign, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LostBaggageArticle() {
  return (
    <>
      <SEO
        title="Zgubiony bagaż w podróży służbowej — odszkodowanie i procedura"
        description="Zgubiony bagaż w podróży służbowej? Sprawdź jak odzyskać odszkodowanie do 1300 EUR, krok po kroku jak zgłosić zaginięcie i jakie dokumenty potrzebujesz do skutecznej reklamacji."
        url="https://bizneslot.info/artykuly/zgubiony-bagaz-podroz-sluzbowa-odszkodowanie-procedura"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Zgubiony bagaż w podróży służbowej — odszkodowanie i procedura",
          "description": "Zgubiony bagaż w podróży służbowej? Sprawdź jak odzyskać odszkodowanie do 1300 EUR, krok po kroku jak zgłosić zaginięcie i jakie dokumenty potrzebujesz do skutecznej reklamacji.",
          "author": {"@type": "Organization", "name": "bizneslot.info"},
          "publisher": {"@type": "Organization", "name": "bizneslot.info"},
          "datePublished": "2025-01-18",
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
              "name": "Jakie odszkodowanie przysługuje za zgubiony bagaż w podróży służbowej?",
              "acceptedAnswer": {"@type": "Answer", "text": "Za zgubiony bagaż w podróży służbowej przysługuje odszkodowanie do 1300 EUR zgodnie z Konwencją Montreal. Wysokość odszkodowania zależy od wagi bagażu i wartości utraconych rzeczy."}
            },
            {
              "@type": "Question",
              "name": "Jak zgłosić zagubiony bagaż na lotnisku?",
              "acceptedAnswer": {"@type": "Answer", "text": "Zagubiony bagaż należy zgłosić natychmiast po przylocie w biurze obsługi pasażera linii lotniczej. Należy wypełnić formularz PIR (Property Irregularity Report) i zachować jego kopię."}
            },
            {
              "@type": "Question",
              "name": "Czy firma może odzyskać odszkodowanie za bagaż pracownika?",
              "acceptedAnswer": {"@type": "Answer", "text": "Tak, firma może odzyskać odszkodowanie za bagaż pracownika jako niezbędne wydatki podróży służbowej. Odszkodowanie może być zaliczone do kosztów uzyskania przychodu firmy."}
            },
            {
              "@type": "Question",
              "name": "Jakie dokumenty potrzebne są do reklamacji zagubionego bagażu?",
              "acceptedAnswer": {"@type": "Answer", "text": "Do reklamacji zagubionego bagażu potrzebujesz formularza PIR, karty pokładowej, bagażowego pokwitowania, listy zawartości bagażu z wartościami oraz dowodów zakupu utraconych rzeczy."}
            },
            {
              "@type": "Question",
              "name": "Ile czasu mam na zgłoszenie zagubionego bagażu?",
              "acceptedAnswer": {"@type": "Answer", "text": "Zagubiony bagaż należy zgłosić niezwłocznie po przylocie, ale nie później niż 7 dni od daty lotu. Reklamację odszkodowania można złożyć w ciągu 21 dni od daty otrzymania bagażu lub ostatecznego potwierdzenia zaginięcia."}
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
              <Luggage className="h-6 w-6 text-blue-200" />
              <span className="text-blue-200 font-medium text-sm">Prawa pasażera w podróży służbowej • 11 min czytania</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Zgubiony bagaż w podróży służbowej — odszkodowanie i procedura
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Konwencja Montreal gwarantuje odszkodowanie do 1300 EUR za zagubiony bagaż. Dowiedz się jak krok po kroku odzyskać pieniądze i jakie dokumenty są niezbędne do skutecznej reklamacji.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {["Odszkodowanie do 1300 EUR", "Natychmiastowe zgłoszenie = sukces", "PIR to kluczowy dokument"].map((item) => (
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
            Zgubiony bagaż w podróży służbowej to sytuacja, która może znacznie utrudnić realizację celów biznesowych. Brak odpowiedniego stroju na spotkanie, utrata dokumentów firmowych czy sprzętu elektronicznego to tylko część problemów. Na szczęście prawo lotnicze chroni pasażerów, gwarantując odszkodowanie finansowe za zagubiony lub uszkodzony bagaż.
          </p>

          {/* Kluczowa informacja */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6 mb-12 flex gap-4">
            <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-900 mb-1">Podstawa prawna</p>
              <p className="text-blue-800">Konwencja Montreal z 1999 roku zastąpiła wcześniejszą Konwencję Warszawską, znacząco podnosząc limity odpowiedzialności przewoźników i upraszczając procedury reklamacyjne. Polska jest sygnatariuszem tej konwencji.</p>
            </div>
          </div>

          {/* Podstawa prawna */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-blue-600" />
              Podstawa prawna odszkodowania za bagaż
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Podstawą prawną odszkodowania za zagubiony bagaż jest Konwencja Montreal z 1999 roku. Zgodnie z nią przewoźnik lotniczy ponosi odpowiedzialność za zagubienie, uszkodzenie lub opóźnienie w dostarczeniu bagażu z limitem odpowiedzialności do 1300 EUR na pasażera.
            </p>

            <div className="bg-blue-600 text-white rounded-xl p-6 mb-8 text-center">
              <p className="text-5xl font-bold mb-2">1 300 EUR</p>
              <p className="text-blue-200 text-lg">Maksymalne odszkodowanie za bagaż</p>
              <p className="text-blue-300 text-sm mt-1">Źródło: Konwencja Montreal 1999</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Odpowiedzialność obejmuje</h3>
                <ul className="space-y-2">
                  {[
                    "Zagubiony bagaż rejestrowany",
                    "Uszkodzony bagaż rejestrowany",
                    "Opóźniony bagaż rejestrowany",
                    "Bagaż podręczny (w pewnych okolicznościach)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-semibold text-green-900 mb-3">Podatek od odszkodowania</h3>
                <p className="text-5xl font-bold text-green-700 mb-1">0%</p>
                <p className="text-green-800 text-sm">Odszkodowanie za bagaż służbowy jest zwolnione z podatku PIT</p>
                <p className="text-green-600 text-xs mt-1">Źródło: Ustawa o PIT</p>
              </div>
            </div>
          </section>

          {/* Procedura krok po kroku */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Luggage className="h-8 w-8 text-blue-600" />
              Procedura zgłoszenia zagubionego bagażu krok po kroku
            </h2>

            <div className="space-y-4">
              {[
                { num: 1, title: "Sprawdź status bagażu na taśmie", desc: "Poczekaj aż wszystkie bagaże z lotu pojawią się na taśmie. Jeśli Twój bagaż nie pojawi się w ciągu 30 minut, przejdź do następnego kroku." },
                { num: 2, title: "Udaj się do biura obsługi pasażera", desc: "Znajdź biuro obsługi pasażera (lost and found) linii lotniczej. Zazwyczaj znajduje się w hali przylotów lub przy karuzeli bagażowej." },
                { num: 3, title: "Wypełnij formularz PIR", desc: "Wypełnij Property Irregularity Report (PIR) — formularz zgłoszenia zagubienia bagażu. Podaj szczegółowe informacje o bagażu i jego zawartości." },
                { num: 4, title: "Otrzymaj numer referencyjny", desc: "Odbierz numer referencyjny sprawy i potwierdzenie zgłoszenia. Będzie on potrzebny do śledzenia statusu bagażu i składania reklamacji." },
                { num: 5, title: "Sprawdzaj status online", desc: "Regularnie sprawdzaj status bagażu na stronie linii lotniczej używając numeru referencyjnego. Większość linii oferuje śledzenie online." },
                { num: 6, title: "Skontaktuj się z firmą", desc: "Poinformuj pracodawcę o sytuacji i zapytaj o procedury firmowe dotyczące zagubionego bagażu w podróży służbowej." },
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

          {/* Wysokość odszkodowania */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-blue-600" />
              Wysokość odszkodowania i metody obliczania
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Wysokość odszkodowania za zagubiony bagaż zależy od kilku czynników, w tym wagi bagażu, wartości zawartości oraz dokumentacji potwierdzającej wartość utraconych rzeczy. Konwencja Montreal ustanawia limit 1300 EUR, ale w praktyce odszkodowanie może być niższe.
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
              <table className="w-full text-sm">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Metoda obliczania</th>
                    <th className="px-4 py-3 text-left font-semibold">Opis</th>
                    <th className="px-4 py-3 text-left font-semibold">Limit</th>
                    <th className="px-4 py-3 text-left font-semibold">Wymagania</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Standardowa", "20 EUR za kg wagi bagażu", "Do 1300 EUR", "Bagażowe pokwitowanie"],
                    ["Dokumentowana wartość", "Rzeczywista wartość rzeczy", "Do 1300 EUR", "Faktury, paragony"],
                    ["Deklaracja specjalna", "Wartość zadeklarowana przy odprawie", "Powyżej 1300 EUR", "Opłata dodatkowa"],
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

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { weight: "do 20 kg", amount: "do 400 EUR" },
                { weight: "20–23 kg", amount: "do 460 EUR" },
                { weight: "powyżej 23 kg", amount: "proporcjonalnie" },
              ].map(({ weight, amount }) => (
                <div key={weight} className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 text-center">
                  <p className="text-sm text-blue-700 font-medium mb-1">Bagaż {weight}</p>
                  <p className="text-xl font-bold text-blue-900">{amount}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6 flex gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 mb-1">Uwaga</p>
                <p className="text-amber-800">Warto przygotować listę zawartości bagażu z szacunkowymi wartościami przed podróżą. To znacznie ułatwi proces reklamacyjny i zwiększy szanse na pełne odszkodowanie.</p>
              </div>
            </div>
          </section>

          {/* Dokumentacja */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-blue-600" />
              Dokumentacja niezbędna do reklamacji
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Skuteczne odzyskanie odszkodowania za zagubiony bagaż wymaga kompleksowej dokumentacji. Im więcej dowodów zgromadzisz, tym większa szansa na pozytywne rozstrzygnięcie sprawy.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Podstawowa dokumentacja</h3>
                <ul className="space-y-2">
                  {[
                    "Formularz PIR (Property Irregularity Report)",
                    "Karta pokładowa i bilet lotniczy",
                    "Bagażowe pokwitowanie (baggage claim tag)",
                    "Numer referencyjny sprawy",
                    "Korespondencja z linią lotniczą",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Dokumentacja wartości</h3>
                <ul className="space-y-2">
                  {[
                    "Faktury za utracone rzeczy (sprzęt, ubrania)",
                    "Paragony i rachunki zakupowe",
                    "Zdjęcia utraconych przedmiotów",
                    "Lista zawartości bagażu z wartościami",
                    "Wyceny ekspertów (dla wartościowych przedmiotów)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6 flex gap-4">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-900 mb-1">Wskazówka</p>
                <p className="text-blue-800">Zrób zdjęcia bagażu przed odprawą. To pomoże udowodnić stan bagażu przed podróżą w przypadku uszkodzenia lub zagubienia.</p>
              </div>
            </div>
          </section>

          {/* Aspekty firmowe */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Building2 className="h-8 w-8 text-blue-600" />
              Aspekty firmowe i rozliczenie kosztów
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Zagubiony bagaż w podróży służbowej generuje nie tylko straty osobiste pracownika, ale także koszty dla firmy. Właściwe rozliczenie tych kosztów jest kluczowe dla prawidłowej księgowości i minimalizacji strat finansowych przedsiębiorstwa.
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
              <table className="w-full text-sm">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Kategoria kosztów</th>
                    <th className="px-4 py-3 text-left font-semibold">Kto ponosi</th>
                    <th className="px-4 py-3 text-left font-semibold">Metoda rozliczenia</th>
                    <th className="px-4 py-3 text-left font-semibold">Dokumentacja</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Odszkodowanie 1300 EUR", "Pracownik-pasażer", "Osobiste roszczenie", "PIR, dokumenty wartości"],
                    ["Koszty ubrań służbowych", "Firma", "Koszt uzyskania przychodu", "Faktury na firmę"],
                    ["Sprzęt elektroniczny", "Firma", "Koszt uzyskania przychodu", "Faktury, inwentaryzacja"],
                    ["Koszty reorganizacji", "Firma", "Koszt uzyskania przychodu", "Rachunki, faktury"],
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

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Twój bagaż służbowy został zagubiony?</h3>
                <p className="text-blue-100">Sprawdź bezpłatnie, czy możesz odzyskać odszkodowanie do 1300 EUR. ClaimWinger pomoże Ci w całej procedurze reklamacyjnej.</p>
              </div>
              <a
                href="https://claimwinger.com/pl/zgubiony-bagaz?utm_source=bizneslot&utm_medium=article&utm_campaign=K1-prawa-pasazera&utm_content=zgubiony-bagaz-podroz-sluzbowa"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap flex-shrink-0"
                onClick={() => { if (typeof window !== 'undefined' && window.dataLayer) { window.dataLayer.push({ event: 'claimwinger_cta_click', claimwinger: { type: 'cta_button', cluster: 'K1', article_title: 'Zgubiony bagaż w podróży służbowej — odszkodowanie i procedura', destination: 'zgubiony_bagaz' } }); } }}
              >
                Sprawdź odszkodowanie za zagubiony bagaż <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Najczęstsze pytania</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Jakie odszkodowanie przysługuje za zgubiony bagaż w podróży służbowej?",
                  a: "Za zgubiony bagaż w podróży służbowej przysługuje odszkodowanie do 1300 EUR zgodnie z Konwencją Montreal. Wysokość odszkodowania zależy od wagi bagażu i wartości utraconych rzeczy.",
                },
                {
                  q: "Jak zgłosić zagubiony bagaż na lotnisku?",
                  a: "Zagubiony bagaż należy zgłosić natychmiast po przylocie w biurze obsługi pasażera linii lotniczej. Należy wypełnić formularz PIR (Property Irregularity Report) i zachować jego kopię.",
                },
                {
                  q: "Czy firma może odzyskać odszkodowanie za bagaż pracownika?",
                  a: "Tak, firma może odzyskać odszkodowanie za bagaż pracownika jako niezbędne wydatki podróży służbowej. Odszkodowanie może być zaliczone do kosztów uzyskania przychodu firmy.",
                },
                {
                  q: "Jakie dokumenty potrzebne są do reklamacji zagubionego bagażu?",
                  a: "Do reklamacji zagubionego bagażu potrzebujesz formularza PIR, karty pokładowej, bagażowego pokwitowania, listy zawartości bagażu z wartościami oraz dowodów zakupu utraconych rzeczy.",
                },
                {
                  q: "Ile czasu mam na zgłoszenie zagubionego bagażu?",
                  a: "Zagubiony bagaż należy zgłosić niezwłocznie po przylocie, ale nie później niż 7 dni od daty lotu. Reklamację odszkodowania można złożyć w ciągu 21 dni od daty otrzymania bagażu lub ostatecznego potwierdzenia zaginięcia.",
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
                { href: "/artykuly/opoznienie-lotu-spotkanie-biznesowe-koszty-konsekwencji", title: "Opóźnienie lotu a spotkanie biznesowe" },
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
