import { SEO } from "@/components/SEO";
import { AlertCircle, AlertTriangle, CheckCircle2, XCircle, FileText, Car, PhoneCall, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CancelledFlightEmergencyArticle() {
  return (
    <>
      <SEO
        title="Lot służbowy odwołany w ostatniej chwili — co zrobić"
        description="Lot służbowy odwołany w ostatniej chwili? Sprawdź jakie masz prawa, jak odzyskać odszkodowanie do 600 EUR i jak szybko znaleźć alternatywny transport na spotkanie biznesowe."
        url="https://bizneslot.info/artykuly/lot-sluzbowy-odwolany-ostatniej-chwili-co-zrobic"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Lot służbowy odwołany w ostatniej chwili — co zrobić",
          "description": "Lot służbowy odwołany w ostatniej chwili? Sprawdź jakie masz prawa, jak odzyskać odszkodowanie do 600 EUR i jak szybko znaleźć alternatywny transport na spotkanie biznesowe.",
          "author": {"@type": "Organization", "name": "bizneslot.info"},
          "publisher": {"@type": "Organization", "name": "bizneslot.info"},
          "datePublished": "2025-01-20",
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
              "name": "Co zrobić gdy lot służbowy zostanie odwołany w ostatniej chwili?",
              "acceptedAnswer": {"@type": "Answer", "text": "Gdy lot służbowy zostanie odwołany w ostatniej chwili, należy natychmiast skontaktować się z linią lotniczą, żądać alternatywnego transportu, dokumentować sytuację i złożyć roszczenie o odszkodowanie do 600 EUR."}
            },
            {
              "@type": "Question",
              "name": "Jakie odszkodowanie przysługuje za odwołany lot służbowy?",
              "acceptedAnswer": {"@type": "Answer", "text": "Za odwołany lot służbowy przysługuje odszkodowanie do 600 EUR zgodnie z rozporządzeniem WE 261/2004. Dodatkowo można żądać zwrotu kosztów alternatywnego transportu i niezbędnych wydatków."}
            },
            {
              "@type": "Question",
              "name": "Jak szybko znaleźć alternatywny transport na spotkanie biznesowe?",
              "acceptedAnswer": {"@type": "Answer", "text": "Aby szybko znaleźć alternatywny transport na spotkanie biznesowe, sprawdź połączenia kolejowe, autobusowe, wynajem samochodu lub loty innych linii. Porównaj czas podróży i koszty, aby wybrać najlepszą opcję."}
            },
            {
              "@type": "Question",
              "name": "Czy pracodawca musi pokryć koszty alternatywnego transportu?",
              "acceptedAnswer": {"@type": "Answer", "text": "Tak, pracodawca musi pokryć koszty alternatywnego transportu, jeśli lot służbowy został odwołany. Koszty te mogą być częściowo odzyskane od linii lotniczej jako niezbędne wydatki."}
            },
            {
              "@type": "Question",
              "name": "Jak poinformować klientów o odwołaniu lotu służbowego?",
              "acceptedAnswer": {"@type": "Answer", "text": "Poinformuj klientów o odwołaniu lotu służbowego natychmiast przez email lub telefon. Prześlij aktualny plan dotarcia na miejsce spotkania i proponowane alternatywy (spotkanie online, przełożenie terminu)."}
            }
          ]
        })
      }} />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-red-600 to-rose-700 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/artykuly" className="text-red-200 hover:text-white text-sm transition-colors">← Wszystkie artykuły</Link>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="h-6 w-6 text-red-200" />
              <span className="text-red-200 font-medium text-sm">Prawa pasażera w podróży służbowej • 13 min czytania</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Lot służbowy odwołany w ostatniej chwili — co zrobić
            </h1>
            <p className="text-xl text-red-100 leading-relaxed">
              Odwołany lot służbowy daje Ci prawo do odszkodowania do 600 EUR oraz zwrotu kosztów alternatywnego transportu. Poznaj plan działania krok po kroku i chroń swoje interesy.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {["Odszkodowanie do 600 EUR", "Zwrot kosztów transportu", "Szybka reakcja = mniejsze straty"].map((item) => (
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
            Lot służbowy odwołany w ostatniej chwili to scenariusz, który każdego pracownika podróżującego może przyprawić o ból głowy. Nagła zmiana planów, zagrożone spotkania biznesowe i presja czasu to tylko część problemów. Na szczęście rozporządzenie WE 261/2004 zapewnia kompleksową ochronę pasażerom, gwarantując nie tylko odszkodowanie finansowe, ale także obowiązek zapewnienia alternatywnego transportu do miejsca docelowego.
          </p>

          {/* Statystyka */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6 mb-12 flex gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-900 mb-1">Ważna statystyka</p>
              <p className="text-amber-800">Tylko 23% pracowników podejmuje właściwe działania w pierwszych 30 minutach po odwołaniu lotu. Szybka reakcja zwiększa szanse na minimalizację strat o 60%.</p>
            </div>
          </div>

          {/* Plan działania */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-red-600" />
              Natychmiastowe działania przy odwołaniu lotu
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Gdy dowiesz się o odwołaniu lotu służbowego, kluczowe jest szybkie i zorganizowane działanie. Każda minuta opóźnienia w reakcji może zwiększyć straty biznesowe i zmniejszyć szanse na znalezienie korzystnej alternatywy.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  phase: "Faza 1",
                  time: "Pierwsze 15 minut",
                  color: "red",
                  items: [
                    "Skontaktuj się z biurem obsługi linii",
                    "Poproś o pisemne potwierdzenie",
                    "Zapytaj o alternatywne połączenia",
                    "Zrób zdjęcia tablicy odlotów",
                  ],
                },
                {
                  phase: "Faza 2",
                  time: "15–60 minut",
                  color: "orange",
                  items: [
                    "Poinformuj pracodawcę",
                    "Skontaktuj się z klientami",
                    "Sprawdź alternatywny transport",
                    "Rozważ spotkanie online",
                  ],
                },
                {
                  phase: "Faza 3",
                  time: "Pierwsza godzina",
                  color: "blue",
                  items: [
                    "Zbierz wszystkie dokumenty",
                    "Sporządź listę wydatków",
                    "Przygotuj raport dla HR",
                    "Zapisz numer referencyjny",
                  ],
                },
              ].map(({ phase, time, color, items }) => (
                <div key={phase} className={`bg-${color}-50 border border-${color}-200 rounded-xl p-5`}>
                  <p className={`text-${color}-700 font-bold text-sm mb-1`}>{phase}</p>
                  <p className={`text-${color}-900 font-semibold mb-3`}>{time}</p>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className={`h-4 w-4 text-${color}-600 flex-shrink-0 mt-0.5`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Prawa pasażera */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="h-8 w-8 text-red-600" />
              Prawa pasażera przy odwołaniu lotu służbowego
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Odwołany lot służbowy daje pasażerowi szeroki zakres praw wynikających z rozporządzenia WE 261/2004. Prawa te są takie same dla wszystkich pasażerów, niezależnie od celu podróży.
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
              <table className="w-full text-sm">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Prawo pasażera</th>
                    <th className="px-4 py-3 text-left font-semibold">Zakres</th>
                    <th className="px-4 py-3 text-left font-semibold">Warunki</th>
                    <th className="px-4 py-3 text-left font-semibold">Termin realizacji</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Zwrot kosztów biletu", "100% ceny biletu", "Zawsze", "Natychmiast"],
                    ["Odszkodowanie finansowe", "do 600 EUR", "Zawsze", "Do 7 dni"],
                    ["Alternatywny transport", "Do miejsca docelowego", "Dostępne opcje", "Najwcześniej możliwie"],
                    ["Opieka na lotnisku", "Posiłki, napoje, hotel", "Czekanie > 2 godziny", "Podczas oczekiwania"],
                    ["Komunikacja", "Informacje o prawach", "Zawsze", "Natychmiast"],
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

            <div className="bg-red-600 text-white rounded-xl p-6 text-center mb-6">
              <p className="text-5xl font-bold mb-2">600 EUR</p>
              <p className="text-red-200 text-lg">Maksymalne odszkodowanie za odwołany lot</p>
              <p className="text-red-300 text-sm mt-1">Źródło: Rozporządzenie WE 261/2004</p>
            </div>
          </section>

          {/* Odszkodowanie */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-red-600" />
              Odszkodowanie i zwrot kosztów
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { dist: "do 1500 km", amount: "250 EUR", example: "np. Warszawa–Berlin" },
                { dist: "1500–3500 km", amount: "400 EUR", example: "np. Warszawa–Madryt" },
                { dist: "powyżej 3500 km", amount: "600 EUR", example: "np. Warszawa–Nowy Jork" },
              ].map(({ dist, amount, example }) => (
                <div key={dist} className="bg-gradient-to-br from-red-50 to-rose-100 border border-red-200 rounded-xl p-5 text-center">
                  <p className="text-sm text-red-700 font-medium mb-1">{dist}</p>
                  <p className="text-3xl font-bold text-red-900 mb-1">{amount}</p>
                  <p className="text-xs text-red-600">{example}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-blue-900 mb-4">Koszty podlegające zwrotowi</h3>
              <ul className="space-y-2">
                {[
                  "Pełna cena biletu odwołanego lotu",
                  "Koszty alternatywnego transportu (pociąg, autobus, taksówka, wynajem samochodu)",
                  "Koszty zakwaterowania i posiłków podczas oczekiwania",
                  "Koszty komunikacji (telefony, internet) związane z reorganizacją",
                  "Koszty przełożonych spotkań (opłaty konferencyjne, rezerwacje hotelowe)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6 flex gap-4">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-900 mb-1">Ważne</p>
                <p className="text-blue-800">Wszystkie koszty muszą być rozsądne i udokumentowane. Zachowaj paragony i faktury — będą niezbędne do odzyskania pieniędzy od linii lotniczej.</p>
              </div>
            </div>
          </section>

          {/* Alternatywny transport */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Car className="h-8 w-8 text-red-600" />
              Alternatywne środki transportu w podróży służbowej
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Gdy lot służbowy zostaje odwołany, znalezienie szybkiej alternatywy jest kluczowe dla ratowania planów biznesowych. Opcje transportowe różnią się czasem podróży, kosztem i dostępnością.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { num: 1, title: "Sprawdź połączenia kolejowe", desc: "Pociągi dużych prędkości (ICE, TGV, Pendolino) są często najlepszą alternatywą na trasach europejskich. Czas podróży jest porównywalny z lotem, a koszty mogą być niższe." },
                { num: 2, title: "Analizuj połączenia lotnicze innych linii", desc: "Sprawdź czy inne linie lotnicze oferują loty na tej samej trasie. Czasami warto rozważyć loty z przesiadkami, jeśli są dostępne szybciej." },
                { num: 3, title: "Rozważ wynajem samochodu", desc: "Wynajem samochodu daje elastyczność i niezależność. Idealny na trasy 200–800 km, gdzie czas podróży jest podobny, a koszty rozsądne." },
                { num: 4, title: "Sprawdź autobusy dalekobieżne", desc: "Autobusy ekspresowe mogą być dobrą opcją na niektórych trasach, choć czas podróży jest zazwyczaj dłuższy." },
                { num: 5, title: "Porównaj taksówki i transport prywatny", desc: "Dla krótkich dystansów (do 200 km) taksówka lub transport prywatny może być najszybszą, choć najdroższą opcją." },
                { num: 6, title: "Konsultuj z pracodawcą wybór transportu", desc: "Dyskutuj opcje z działem HR lub bezpośrednim przełożonym. Firma może mieć preferencje lub umowy z przewoźnikami." },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">{num}</div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Środek transportu</th>
                    <th className="px-4 py-3 text-left font-semibold">Zasięg</th>
                    <th className="px-4 py-3 text-left font-semibold">Czas podróży</th>
                    <th className="px-4 py-3 text-left font-semibold">Koszt orientacyjny</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Pociąg dużych prędkości", "100–1500 km", "2–8 godzin", "50–300 EUR"],
                    ["Wynajem samochodu", "50–800 km", "1–10 godzin", "40–150 EUR/dzień"],
                    ["Lot innej linii", "200–3000 km", "1–6 godzin", "100–800 EUR"],
                    ["Taksówka/transport prywatny", "20–300 km", "0,5–4 godziny", "1–5 EUR/km"],
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

          {/* Komunikacja */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <PhoneCall className="h-8 w-8 text-red-600" />
              Komunikacja z firmą i klientami
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Skuteczna komunikacja jest kluczowa przy odwołaniu lotu służbowego. Transparentna i szybka komunikacja może minimalizować negatywne konsekwencje biznesowe.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6 mb-6 flex gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 mb-1">Uwaga</p>
                <p className="text-amber-800">Badania pokazują, że 67% klientów akceptuje przełożenie spotkania, jeśli zostanie o tym poinformowane co najmniej 2 godziny przed planowanym terminem.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Komunikacja z pracodawcą</h3>
                <ul className="space-y-2">
                  {[
                    "Natychmiastowa informacja o odwołaniu",
                    "Plan alternatywnego transportu",
                    "Szacunkowe koszty reorganizacji",
                    "Wpływ na planowane spotkania",
                    "Prośba o zatwierdzenie dodatkowych wydatków",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Komunikacja z klientami</h3>
                <ul className="space-y-2">
                  {[
                    "Przeprosiny za niedogodności",
                    "Wyjaśnienie przyczyny opóźnienia",
                    "Nowy plan dotarcia na miejsce",
                    "Propozycje alternatyw (online, zmiana terminu)",
                    "Potwierdzenie dalszych kroków",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Twój lot służbowy został odwołany?</h3>
                <p className="text-red-100">Sprawdź bezpłatnie, czy należy Ci się odszkodowanie do 600 EUR. ClaimWinger pomoże Ci odzyskać pieniądze i koszty alternatywnego transportu.</p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <a
                  href="https://claimwinger.com/pl/odwolany-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=K1-prawa-pasazera&utm_content=lot-odwolany-ostatniej-chwili"
                  className="inline-flex items-center gap-2 bg-white text-red-700 font-semibold px-6 py-3 rounded-lg hover:bg-red-50 transition-colors whitespace-nowrap"
                  onClick={() => { if (typeof window !== 'undefined' && window.dataLayer) { window.dataLayer.push({ event: 'claimwinger_cta_click', claimwinger: { type: 'cta_button', cluster: 'K1', article_title: 'Lot służbowy odwołany w ostatniej chwili — co zrobić', destination: 'odwolany_lot' } }); } }}
                >
                  Sprawdź odszkodowanie za odwołany lot <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://claimwinger.com/pl/opozniony-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=K1-prawa-pasazera&utm_content=lot-odwolany-ostatniej-chwili"
                  className="inline-flex items-center gap-2 bg-red-800/50 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-800 transition-colors whitespace-nowrap"
                  onClick={() => { if (typeof window !== 'undefined' && window.dataLayer) { window.dataLayer.push({ event: 'claimwinger_cta_click', claimwinger: { type: 'cta_button', cluster: 'K1', article_title: 'Lot służbowy odwołany w ostatniej chwili — co zrobić', destination: 'opozniony_lot' } }); } }}
                >
                  Sprawdź odszkodowanie za opóźniony lot <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Najczęstsze pytania</h2>
            <div className="space-y-4">
              {[
                { q: "Co zrobić gdy lot służbowy zostanie odwołany w ostatniej chwili?", a: "Gdy lot służbowy zostanie odwołany w ostatniej chwili, należy natychmiast skontaktować się z linią lotniczą, żądać alternatywnego transportu, dokumentować sytuację i złożyć roszczenie o odszkodowanie do 600 EUR." },
                { q: "Jakie odszkodowanie przysługuje za odwołany lot służbowy?", a: "Za odwołany lot służbowy przysługuje odszkodowanie do 600 EUR zgodnie z rozporządzeniem WE 261/2004. Dodatkowo można żądać zwrotu kosztów alternatywnego transportu i niezbędnych wydatków." },
                { q: "Jak szybko znaleźć alternatywny transport na spotkanie biznesowe?", a: "Aby szybko znaleźć alternatywny transport na spotkanie biznesowe, sprawdź połączenia kolejowe, autobusowe, wynajem samochodu lub loty innych linii. Porównaj czas podróży i koszty, aby wybrać najlepszą opcję." },
                { q: "Czy pracodawca musi pokryć koszty alternatywnego transportu?", a: "Tak, pracodawca musi pokryć koszty alternatywnego transportu, jeśli lot służbowy został odwołany. Koszty te mogą być częściowo odzyskane od linii lotniczej jako niezbędne wydatki." },
                { q: "Jak poinformować klientów o odwołaniu lotu służbowego?", a: "Poinformuj klientów o odwołaniu lotu służbowego natychmiast przez email lub telefon. Prześlij aktualny plan dotarcia na miejsce spotkania i proponowane alternatywy (spotkanie online, przełożenie terminu)." },
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
                { href: "/artykuly/opoznienie-lotu-spotkanie-biznesowe-koszty-konsekwencji", title: "Opóźnienie lotu a spotkanie biznesowe — koszty" },
              ].map(({ href, title }) => (
                <Link key={href} href={href} className="flex items-center gap-3 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors group">
                  <ArrowRight className="h-5 w-5 text-red-600 group-hover:translate-x-1 transition-transform" />
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
