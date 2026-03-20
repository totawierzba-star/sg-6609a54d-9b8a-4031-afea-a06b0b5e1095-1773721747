import { SEO } from "@/components/SEO";
import { AlertCircle, AlertTriangle, CheckCircle2, TrendingDown, Clock, PhoneCall, FileText, DollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FlightDelayBusinessMeetingArticle() {
  return (
    <>
      <SEO
        title="Opóźnienie lotu a spotkanie biznesowe — koszty konsekwencji"
        description="Opóźnienie lotu a spotkanie biznesowe to poważny problem. Sprawdź jak minimalizować straty, jakie są koszty bezpośrednie i pośrednie oraz jak odzyskać odszkodowanie do 600 EUR."
        url="https://bizneslot.info/artykuly/opoznienie-lotu-spotkanie-biznesowe-koszty-konsekwencji"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Opóźnienie lotu a spotkanie biznesowe — koszty konsekwencji",
          "description": "Opóźnienie lotu a spotkanie biznesowe to poważny problem. Sprawdź jak minimalizować straty, jakie są koszty bezpośrednie i pośrednie oraz jak odzyskać odszkodowanie do 600 EUR.",
          "author": {"@type": "Organization", "name": "bizneslot.info"},
          "publisher": {"@type": "Organization", "name": "bizneslot.info"},
          "datePublished": "2025-01-19",
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
              "name": "Jak opóźnienie lotu wpływa na spotkania biznesowe?",
              "acceptedAnswer": {"@type": "Answer", "text": "Opóźnienie lotu wpływa na spotkania biznesowe poprzez utratę czasu, konieczność przełożenia terminów, straty finansowe oraz negatywny wpływ na relacje z klientami i wizerunek firmy."}
            },
            {
              "@type": "Question",
              "name": "Jakie koszty generuje opóźniony lot w podróży służbowej?",
              "acceptedAnswer": {"@type": "Answer", "text": "Opóźniony lot w podróży służbowej generuje koszty bezpośrednie (hotele, transport, posiłki) oraz pośrednie (utracone kontrakty, kary umowne, utrata reputacji). Całkowite straty mogą przekroczyć kilka tysięcy złotych."}
            },
            {
              "@type": "Question",
              "name": "Jak minimalizować straty przy opóźnionym locie służbowym?",
              "acceptedAnswer": {"@type": "Answer", "text": "Aby minimalizować straty przy opóźnionym locie służbowym, należy natychmiast poinformować klientów, przełożyć spotkania online, znaleźć alternatywny transport i dokumentować wszystkie wydatki do celów rekompensaty."}
            },
            {
              "@type": "Question",
              "name": "Czy odszkodowanie pokryje wszystkie koszty opóźnienia lotu?",
              "acceptedAnswer": {"@type": "Answer", "text": "Odszkodowanie 600 EUR nie pokryje wszystkich kosztów opóźnienia lotu, ale stanowi częściową rekompensatę. Dodatkowo można odzyskać koszty opieki nad pasażerem oraz straty firmowe jako koszty uzyskania przychodu."}
            },
            {
              "@type": "Question",
              "name": "Jak poinformować klienta o opóźnieniu lotu służbowego?",
              "acceptedAnswer": {"@type": "Answer", "text": "Klienta o opóźnieniu lotu służbowego należy poinformować natychmiast przez telefon lub email, przeprosić za niedogodności, przedstawić plan działania i zaproponować alternatywne rozwiązania (spotkanie online, zmiana terminu)."}
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
              <TrendingDown className="h-6 w-6 text-blue-200" />
              <span className="text-blue-200 font-medium text-sm">Prawa pasażera w podróży służbowej • 12 min czytania</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Opóźnienie lotu a spotkanie biznesowe — koszty konsekwencji
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Opóźnienie lotu może generować znaczne straty finansowe i reputacyjne dla firmy. Utracone kontrakty, kary umowne, koszty alternatywnego transportu — analizujemy pełen koszt opóźnienia w kontekście biznesowym.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {["Odszkodowanie do 600 EUR", "Szybka reakcja = mniejsze straty", "Dokumentacja = odzyskanie pieniędzy"].map((item) => (
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
            Opóźnienie lotu a spotkanie biznesowe to scenariusz, z którym mierzy się wielu pracowników podróżujących służbowo. Co roku polskie firmy tracą miliony złotych z powodu zakłóceń lotniczych, które wpływają na realizację kontraktów, negocjacje i relacje z klientami. Zrozumienie pełnego spektrum kosztów i skuteczne strategie minimalizacji strat są kluczowe dla ochrony interesów firmy.
          </p>

          {/* Kluczowa informacja */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6 mb-12 flex gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-900 mb-1">Statystyka</p>
              <p className="text-amber-800">Badania pokazują, że 67% spotkań biznesowych przełożonych z powodu opóźnienia lotu kończy się utratą części lub całości wartości kontraktu.</p>
            </div>
          </div>

          {/* Wpływ na spotkania */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="h-8 w-8 text-blue-600" />
              Wpływ opóźnienia lotu na spotkania biznesowe
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Opóźnienie lotu ma bezpośredni wpływ na planowane spotkania biznesowe, zakłócając harmonogram podróży i generując kaskadę problemów logistycznych. W zależności od długości opóźnienia i charakteru spotkań, konsekwencje mogą sięgać od niewielkich niedogodności po katastrofalne straty finansowe.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-blue-900 mb-4">Bezpośrednie konsekwencje dla spotkań biznesowych</h3>
              <ul className="space-y-2">
                {[
                  "Opóźnienie lub przełożenie kluczowych negocjacji",
                  "Utrata szansy na podpisanie kontraktu",
                  "Negatywny wizerunek firmy i brak profesjonalizmu",
                  "Konieczność organizacji spotkań zastępczych online",
                  "Strata zaufania klientów i partnerów biznesowych",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
              <table className="w-full text-sm">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Długość opóźnienia</th>
                    <th className="px-4 py-3 text-left font-semibold">Wpływ na spotkania</th>
                    <th className="px-4 py-3 text-left font-semibold">Ryzyko utraty kontraktu</th>
                    <th className="px-4 py-3 text-left font-semibold">Rekomendowane działania</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1–2 godziny", "Opóźnienie spotkania", "Niskie (5–10%)", "Poinformuj klienta, przejdź na online"],
                    ["3–6 godzin", "Przełożenie spotkania", "Średnie (15–25%)", "Znajdź alternatywny transport"],
                    ["6–12 godzin", "Anulowanie spotkania", "Wysokie (30–50%)", "Zorganizuj zastępstwo"],
                    ["Powyżej 12 godzin", "Strata całej delegacji", "Bardzo wysokie (60–80%)", "Wyślij delegata zastępczego"],
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

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Długoterminowe skutki dla relacji biznesowych</h3>
              <ul className="space-y-2">
                {[
                  "Utrata pozycji konkurencyjnej na rynku",
                  "Obniżenie ratingu wiarygodności firmy",
                  "Trwałe uszkodzenie relacji z kluczowymi klientami",
                  "Konieczność odbudowy zaufania przez kolejne miesiące",
                  "Potencjalne straty przyszłych kontraktów",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-slate-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Koszty bezpośrednie */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-blue-600" />
              Koszty bezpośrednie opóźnienia lotu służbowego
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Koszty bezpośrednie to wydatki, które firma ponosi natychmiast w wyniku opóźnienia lotu. Te koszty są łatwo mierzalne i mogą być częściowo odzyskane od linii lotniczej lub zaliczone do kosztów uzyskania przychodu.
            </p>

            <div className="bg-blue-600 text-white rounded-xl p-6 mb-8 text-center">
              <p className="text-5xl font-bold mb-2">2 500 PLN</p>
              <p className="text-blue-200 text-lg">Średni koszt bezpośredni opóźnienia</p>
              <p className="text-blue-300 text-sm mt-1">Źródło: Badania polskiego rynku travel</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Transport alternatywny",
                  items: ["Pociąg dużych prędkości: 150–800 PLN", "Taksówka długodystansowa: 2–5 PLN/km", "Wynajem samochodu: 150–400 PLN/dzień", "Lot innej linii: 300–2000 PLN"],
                },
                {
                  title: "Zakwaterowanie i wyżywienie",
                  items: ["Hotel 3★: 200–500 PLN/noc", "Hotel 4★: 400–800 PLN/noc", "Posiłki w restauracji: 80–200 PLN/dzień", "Serwis pokojowy: 50–150 PLN"],
                },
                {
                  title: "Komunikacja i reorganizacja",
                  items: ["Rozmowy telefoniczne: 20–100 PLN", "Internet mobilny: 30–80 PLN/dzień", "Sala konferencyjna: 300–1500 PLN/h", "Usługi tłumaczeniowe: 200–800 PLN/h"],
                },
              ].map(({ title, items }) => (
                <div key={title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3 text-base">{title}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Koszty pośrednie */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingDown className="h-8 w-8 text-blue-600" />
              Koszty pośrednie i utracone korzyści
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Koszty pośrednie to najtrudniejsza do oszacowania kategoria strat, która obejmuje utracone korzyści biznesowe, kary umowne i długoterminowe konsekwencje dla firmy. Te koszty często wielokrotnie przewyższają straty bezpośrednie.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6 mb-8 flex gap-4">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-900 mb-1">Ważne</p>
                <p className="text-blue-800">Koszty pośrednie nie są bezpośrednio rekompensowane przez linie lotnicze, ale mogą być zaliczone do kosztów uzyskania przychodu firmy jako niezbędne wydatki biznesowe.</p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
              <table className="w-full text-sm">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Rodzaj straty</th>
                    <th className="px-4 py-3 text-left font-semibold">Przykładowa wartość</th>
                    <th className="px-4 py-3 text-left font-semibold">Częstotliwość</th>
                    <th className="px-4 py-3 text-left font-semibold">Możliwość odzyskania</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Utracony kontrakt", "10 000–500 000 PLN", "Rzadko", "Jako koszt KUP"],
                    ["Kara umowna", "1 000–50 000 PLN", "Czasami", "Jako koszt KUP"],
                    ["Utrata klienta", "5 000–100 000 PLN/rok", "Rzadko", "Nie"],
                    ["Strata reputacji", "Nieosiągalna", "Często", "Nie"],
                    ["Koszty marketingowe", "2 000–20 000 PLN", "Czasami", "Jako koszt KUP"],
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

          {/* Strategie minimalizacji */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-blue-600" />
              Strategie minimalizacji strat przy opóźnieniu lotu
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Skuteczne minimalizowanie strat przy opóźnieniu lotu wymaga szybkiego działania i dobrze przygotowanego planu kryzysowego. Im szybciej zareagujesz, tym mniejsze będą straty finansowe i reputacyjne firmy.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { num: 1, title: "Natychmiastowa ocena sytuacji", desc: "Sprawdź rzeczywisty czas opóźnienia, alternatywne połączenia i wpływ na planowane spotkania. Oceń krytyczność każdego spotkania i priorytetyzuj działania." },
                { num: 2, title: "Komunikacja z klientami i partnerami", desc: "Poinformuj wszystkich zaangażowanych o opóźnieniu, przepraszaj za niedogodności i przedstaw plan działania. Zaproponuj alternatywne rozwiązania." },
                { num: 3, title: "Znalezienie alternatywnego transportu", desc: "Sprawdź dostępność pociągów, autobusów, wynajmu samochodów lub lotów innych linii. Porównaj czas i koszty różnych opcji." },
                { num: 4, title: "Reorganizacja spotkań", desc: "Przenieś spotkania do formy online, przełóż terminy lub wyznacz zastępców. Upewnij się, że wszystkie techniczne aspekty są przygotowane." },
                { num: 5, title: "Dokumentacja wydatków", desc: "Zbieraj wszystkie paragony i rachunki. Przygotuj szczegółowy raport z poniesionych wydatków do celów rozliczeniowych i reklamacyjnych." },
                { num: 6, title: "Reklamacja i odszkodowanie", desc: "Złóż reklamację o odszkodowanie 600 EUR oraz zwrot kosztów opieki. Skorzystaj z usług specjalistycznej firmy, jeśli to konieczne." },
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

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6 flex gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 mb-1">Wskazówka</p>
                <p className="text-amber-800">Przygotuj plan kryzysowy przed podróżą. W razie opóźnienia będziesz miał gotowe szablony komunikacji, listę kontaktów i procedury firmy.</p>
              </div>
            </div>
          </section>

          {/* Komunikacja z klientami */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <PhoneCall className="h-8 w-8 text-blue-600" />
              Komunikacja z klientami przy opóźnieniu lotu
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Profesjonalna komunikacja z klientami jest kluczowa dla ochrony relacji biznesowych przy opóźnieniu lotu. Sposób, w jaki poinformujesz o problemie i zaproponujesz rozwiązania, może zadecydować o utrzymaniu lub utracie kontraktu.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-blue-900 mb-4">Zasady efektywnej komunikacji</h3>
              <ul className="space-y-3">
                {[
                  "Poinformuj natychmiast, nie czekaj na ostatnią chwilę",
                  "Bądź szczery co do przyczyn i przewidywanego czasu opóźnienia",
                  "Przedstaw konkretne rozwiązania i alternatywy",
                  "Przeproś za niedogodności i pokaż zrozumienie",
                  "Zaoferuj rekompensatę lub dodatkowe korzyści",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6 text-center">
              <p className="text-5xl font-bold text-green-700 mb-2">85%</p>
              <p className="text-green-800 text-lg font-medium">Klientów akceptuje przełożenie</p>
              <p className="text-green-600 text-sm mt-1">pod warunkiem szybkiego poinformowania — Źródło: Badania relacji B2B</p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Twój lot służbowy był opóźniony?</h3>
                <p className="text-blue-100">Sprawdź bezpłatnie, czy należy Ci się odszkodowanie do 600 EUR. ClaimWinger pomoże Ci odzyskać pieniądze.</p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <a
                  href="https://claimwinger.com/pl/opozniony-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=K1-prawa-pasazera&utm_content=opoznienie-lotu-spotkanie-biznesowe"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
                  onClick={() => { if (typeof window !== 'undefined' && window.dataLayer) { window.dataLayer.push({ event: 'claimwinger_cta_click', claimwinger: { type: 'cta_button', cluster: 'K1', article_title: 'Opóźnienie lotu a spotkanie biznesowe — koszty konsekwencji', destination: 'opozniony_lot' } }); } }}
                >
                  Sprawdź odszkodowanie za opóźniony lot <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://claimwinger.com/pl/odwolany-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=K1-prawa-pasazera&utm_content=opoznienie-lotu-spotkanie-biznesowe"
                  className="inline-flex items-center gap-2 bg-blue-800/50 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors whitespace-nowrap"
                  onClick={() => { if (typeof window !== 'undefined' && window.dataLayer) { window.dataLayer.push({ event: 'claimwinger_cta_click', claimwinger: { type: 'cta_button', cluster: 'K1', article_title: 'Opóźnienie lotu a spotkanie biznesowe — koszty konsekwencji', destination: 'odwolany_lot' } }); } }}
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
                {
                  q: "Jak opóźnienie lotu wpływa na spotkania biznesowe?",
                  a: "Opóźnienie lotu wpływa na spotkania biznesowe poprzez utratę czasu, konieczność przełożenia terminów, straty finansowe oraz negatywny wpływ na relacje z klientami i wizerunek firmy.",
                },
                {
                  q: "Jakie koszty generuje opóźniony lot w podróży służbowej?",
                  a: "Opóźniony lot w podróży służbowej generuje koszty bezpośrednie (hotele, transport, posiłki) oraz pośrednie (utracone kontrakty, kary umowne, utrata reputacji). Całkowite straty mogą przekroczyć kilka tysięcy złotych.",
                },
                {
                  q: "Jak minimalizować straty przy opóźnionym locie służbowym?",
                  a: "Aby minimalizować straty przy opóźnionym locie służbowym, należy natychmiast poinformować klientów, przełożyć spotkania online, znaleźć alternatywny transport i dokumentować wszystkie wydatki do celów rekompensaty.",
                },
                {
                  q: "Czy odszkodowanie pokryje wszystkie koszty opóźnienia lotu?",
                  a: "Odszkodowanie 600 EUR nie pokryje wszystkich kosztów opóźnienia lotu, ale stanowi częściową rekompensatę. Dodatkowo można odzyskać koszty opieki nad pasażerem oraz straty firmowe jako koszty uzyskania przychodu.",
                },
                {
                  q: "Jak poinformować klienta o opóźnieniu lotu służbowego?",
                  a: "Klienta o opóźnieniu lotu służbowego należy poinformować natychmiast przez telefon lub email, przeprosić za niedogodności, przedstawić plan działania i zaproponować alternatywne rozwiązania (spotkanie online, zmiana terminu).",
                },
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
                { href: "/artykuly/lot-sluzbowy-opozniony-ponad-3-godziny-krok-po-kroku", title: "Lot opóźniony o ponad 3 godziny — krok po kroku" },
                { href: "/artykuly/lot-sluzbowy-odwolany-ostatniej-chwili-co-zrobic", title: "Lot odwołany w ostatniej chwili — co zrobić" },
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
