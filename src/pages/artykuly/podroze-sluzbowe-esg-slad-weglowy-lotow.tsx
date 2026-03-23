import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, ArrowRight, Leaf } from "lucide-react";

export default function ESGSladWeglowy() {
  return (
    <>
      <SEO
        title="Podróże służbowe a ESG — jak liczyć ślad węglowy lotów firmowych?"
        description="Loty służbowe to scope 3 emisji GHG. Sprawdź jak kalkulować CO₂ z delegacji, jakie metody stosuje CSRD i jak redukować emisje bez całkowitego zakazu lotów w firmie."
        canonicalUrl="https://bizneslot.info/artykuly/podroze-sluzbowe-esg-slad-weglowy-lotow"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Podróże służbowe a ESG — jak liczyć ślad węglowy lotów firmowych?",
            description:
              "Loty sluzbowe sa czescia scope 3 emisji GHG wedlug GHG Protocol. CSRD wymaga raportowania od 2025. Sprawdz metody kalkulacji CO2, narzedzia i sposoby redukcji emisji.",
            author: { "@type": "Organization", name: "BizneLot.info" },
            publisher: { "@type": "Organization", name: "BizneLot.info" },
            datePublished: "2026-03-22",
            dateModified: "2026-03-22",
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
                name: "Gdzie w ESG sa loty sluzbowe — scope 1, 2 czy 3?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Loty sluzbowe sa czescia scope 3 (posrednie emisje w lancuchu wartosci), kategoria 6: Business Travel wedlug GHG Protocol. Scope 1 to emisje bezposrednie firmy (wlasna flota), scope 2 to zakupiona energia. Wiekszosc firm lotow sluzbowych nie posiada na wlasnosc, wiec zawsze jest to scope 3.",
                },
              },
              {
                "@type": "Question",
                name: "Czy CSRD wymaga raportowania emisji z lotow sluzbowych?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak. Europejski Standard Raportowania Zrownowazenia ESRS E1 (Climate Change) wymaga ujawnienia materialnych emisji scope 3, w tym podrozy sluzbowych. Obowiazek dotyczy firm objetych CSRD: od 2025 duze spolki, od 2026 notowane MŚP. Próg materialnosci ocenia firma we wlasnym zakresie.",
                },
              },
              {
                "@type": "Question",
                name: "Jak obliczyc emisje CO2 z lotow sluzbowych?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Najprostsza metoda: dystans lotu (km) x wspolczynnik emisji DEFRA lub ICAO. Wspolczynniki roznia sie w zaleznosci od klasy (biznes emituje 2-3x wiecej niz economy na pasazera ze wzgledu na wieksza zajmowosc miejsca) i zasegu lotu. Kalkulator ICAO jest dostepny bezplatnie online.",
                },
              },
              {
                "@type": "Question",
                name: "Jak redukować emisje z lotow sluzbowych bez calkowitego zakazu lotow?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Skuteczne metody: zamiana krotkich lotow na kolej (trasy do 3h), wideokonferencje zamiast wewnetrznych spotkan statusowych, konsolidacja wizyt (jeden wyjazd zamiast dwoch), wybor linii z nowszymi samolotami i bezposrednich polaczen (przesiadki zwiekszaja emisje), offsetting jako ostatnia linia obrony.",
                },
              },
            ],
          }),
        }}
      />

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl px-8 py-10 mb-8">
          <div className="flex items-center gap-2 text-blue-300 text-sm font-medium mb-3">
            <Leaf className="w-4 h-4" />
            <span>ESG i zarządzanie podróżami</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">
            Podróże służbowe a ESG — jak liczyć ślad węglowy lotów firmowych?
          </h1>
          <p className="text-blue-100 text-lg">
            Loty służbowe to najczęściej największa pozycja scope 3 emisji GHG w firmach
            usługowych. CSRD wymaga raportowania — sprawdź jak kalkulować, co raportować
            i jak redukować bez paraliżowania biznesu.
          </p>
        </div>

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl px-6 py-5 mb-8">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-1">
            Krótka odpowiedź
          </p>
          <p className="text-gray-800 font-medium">
            Loty służbowe to <strong>scope 3, kategoria 6</strong> (Business Travel) według GHG
            Protocol. Emisję oblicza się mnożąc dystans lotu przez współczynniki DEFRA lub ICAO,
            z uwzględnieniem klasy podróży. CSRD/ESRS E1 wymaga ujawnienia tych danych od
            firm objętych dyrektywą.
          </p>
        </div>

        {/* Gdzie w ESG */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Gdzie w strukturze GHG są loty służbowe?
          </h2>
          <p className="text-gray-700 mb-4">
            Standard GHG Protocol dzieli emisje na trzy zakresy (scope). Loty służbowe
            wpadają do scope 3 — pośrednich emisji w łańcuchu wartości:
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Scope</th>
                  <th className="px-4 py-3 text-left">Definicja</th>
                  <th className="px-4 py-3 text-left">Przykład</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">Scope 1</td>
                  <td className="px-4 py-3 text-gray-700">Bezpośrednie emisje firmy</td>
                  <td className="px-4 py-3 text-gray-500">Własna flota, kotłownie</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Scope 2</td>
                  <td className="px-4 py-3 text-gray-700">Zakupiona energia (elektryczność, ciepło)</td>
                  <td className="px-4 py-3 text-gray-500">Prąd w biurze</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-blue-700">Scope 3 kat. 6</td>
                  <td className="px-4 py-3 text-gray-700 font-medium">Podróże służbowe pracowników</td>
                  <td className="px-4 py-3 text-blue-700 font-medium">Loty służbowe</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Scope 3 kat. 7</td>
                  <td className="px-4 py-3 text-gray-700">Dojazdy pracowników do pracy</td>
                  <td className="px-4 py-3 text-gray-500">Commuting</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm">
            W firmach konsultingowych, prawniczych i finansowych — gdzie pracownicy dużo
            latają — scope 3 kat. 6 (loty) stanowi często <strong>60–80% całkowitego śladu
            węglowego</strong> firmy. To sprawia, że jest to obszar priorytetowy dla ESG.
          </p>
        </section>

        {/* CSRD */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Co wymaga CSRD i ESRS E1?
          </h2>
          <p className="text-gray-700 mb-4">
            Dyrektywa CSRD (Corporate Sustainability Reporting Directive) weszła w życie
            stopniowo:
          </p>
          <div className="space-y-3 mb-4">
            {[
              { rok: "2025 (dane za 2024)", kto: "Duże spółki objęte wcześniej NFRD (powyżej 500 pracowników)" },
              { rok: "2026 (dane za 2025)", kto: "Pozostałe duże spółki (powyżej 250 pracowników lub 40 mln EUR przychodu)" },
              { rok: "2027 (dane za 2026)", kto: "Notowane MŚP (z opcją opt-out do 2028)" },
            ].map((item) => (
              <div key={item.rok} className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.rok}</p>
                  <p className="text-gray-600 text-sm">{item.kto}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-sm">
            Standard ESRS E1 (Climate Change) wymaga ujawnienia emisji scope 3, jeśli są
            materialne. Ocena materialności należy do firmy — ale loty służbowe są zazwyczaj
            materialne w firmach usługowych z dużą mobilnością pracowników.
          </p>
        </section>

        {/* Jak liczyć */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Jak obliczyć emisję CO₂ z lotów służbowych?
          </h2>
          <p className="text-gray-700 mb-4">
            Dwie najczęściej stosowane metody:
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-semibold text-gray-900 mb-2">Metoda 1: Współczynniki DEFRA (UK)</p>
              <p className="text-gray-700 text-sm mb-3">
                Publikowane corocznie przez UK Department for Environment, Food and Rural Affairs.
                Szeroko stosowane globalnie. Podają emisję w kg CO₂e na pasażerokilometr,
                osobno dla każdej klasy i zasięgu lotu.
              </p>
              <div className="overflow-x-auto rounded-lg border border-gray-100">
                <table className="w-full text-xs">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-3 py-2 text-left">Zasięg / Klasa</th>
                      <th className="px-3 py-2 text-right">Economy</th>
                      <th className="px-3 py-2 text-right">Premium Eco</th>
                      <th className="px-3 py-2 text-right">Business</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-3 py-2 font-medium">Krajowy / krótki</td>
                      <td className="px-3 py-2 text-right">0,255 kg</td>
                      <td className="px-3 py-2 text-right">—</td>
                      <td className="px-3 py-2 text-right">—</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-2 font-medium">Europejski</td>
                      <td className="px-3 py-2 text-right">0,178 kg</td>
                      <td className="px-3 py-2 text-right">—</td>
                      <td className="px-3 py-2 text-right">—</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">Długodystansowy</td>
                      <td className="px-3 py-2 text-right">0,149 kg</td>
                      <td className="px-3 py-2 text-right">0,233 kg</td>
                      <td className="px-3 py-2 text-right">0,429 kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Wartości orientacyjne (DEFRA 2023) w kg CO₂e na pasażerokilometr, z RFI (radiative
                forcing index). Aktualne współczynniki: gov.uk/government/publications/greenhouse-gas-reporting
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-semibold text-gray-900 mb-2">Metoda 2: Kalkulator ICAO</p>
              <p className="text-gray-700 text-sm">
                Bezpłatny kalkulator online Międzynarodowej Organizacji Lotnictwa Cywilnego (ICAO).
                Wystarczy podać lotnisko wylotu i przylotu — kalkulator oblicza emisję na pasażera
                z podziałem na klasy. Adres: icao.int/environmental-protection/CarbonOffset
              </p>
            </div>
          </div>
        </section>

        {/* Klasa a emisja */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Klasa biznes emituje 2–3x więcej niż economy — dlaczego?
          </h2>
          <p className="text-gray-700 mb-3">
            Emisja na pasażera zależy od zajętości miejsca w samolocie. Miejsca w klasie biznes
            zajmują 2–4x więcej powierzchni kabiny niż economy — dlatego przy kalkulacji
            emisji "przypada" na nie odpowiednio więcej kg paliwa.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <p className="text-gray-700 text-sm">
                <strong>Implikacja dla ESG:</strong> jeśli polityka firmy pozwala na klasę biznes
                na długodystansowych trasach, ślad węglowy jest 2–3x wyższy niż przy economy.
                Przy raportowaniu ESG warto to uwzględnić przy ustalaniu progów klas — lub
                kompensować offsettingiem za loty w wyższych klasach.
              </p>
            </div>
          </div>
        </section>

        {/* Strategie redukcji */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Jak redukować emisje z lotów — hierarchia działań
          </h2>
          <div className="space-y-3">
            {[
              {
                prio: "1.",
                tytul: "Unikaj — zamień lot na kolej lub wideokonferencję",
                opis: "Trasy europejskie do 3h czasu lotu (WAW–BER, WAW–PRG, WAW–VIE) często mają korzystną alternatywę kolejową. Spotkania statusowe, szkolenia i brifeingi — wideokonferencja bez straty merytorycznej.",
                color: "green",
              },
              {
                prio: "2.",
                tytul: "Zmniejsz — konsoliduj wizyty, lataj bezpośrednio",
                opis: "Jeden wyjazd zamiast dwóch oznacza o połowę mniej emisji. Loty bezpośrednie emitują mniej niż z przesiadką (fazy startu i lądowania generują największe zużycie paliwa). Wybieraj nowoczesne samoloty (A320neo, B737 MAX) — do 20% niższe zużycie paliwa.",
                color: "blue",
              },
              {
                prio: "3.",
                tytul: "Kompensuj — offsetting jako ostatnia opcja",
                opis: "Offsetting (np. zakup kredytów węglowych z certyfikowanych projektów: Gold Standard, VCS) nie redukuje emisji, ale je kompensuje. Stosuj jako uzupełnienie, nigdy jako główną strategię. Koszt to zwykle 5–30 EUR za tonę CO₂.",
                color: "amber",
              },
            ].map((item) => (
              <div key={item.tytul} className="rounded-xl border border-gray-200 p-5">
                <div className="flex items-start gap-3">
                  <span className={`flex items-center justify-center w-7 h-7 rounded-full text-white text-sm font-bold shrink-0 ${
                    item.color === "green" ? "bg-green-600" :
                    item.color === "blue" ? "bg-blue-700" : "bg-amber-600"
                  }`}>{item.prio}</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{item.tytul}</p>
                    <p className="text-gray-600 text-sm">{item.opis}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Narzędzia */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Narzędzia do raportowania emisji z podróży służbowych
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { nazwa: "ICAO Carbon Calculator", opis: "Bezpłatny, online, standard branżowy" },
              { nazwa: "DEFRA Conversion Factors", opis: "Współczynniki do obliczeń własnych (Excel)" },
              { nazwa: "TravelPerk GreenPerk", opis: "Automatyczny raport CO₂ przy każdej rezerwacji" },
              { nazwa: "SAP Concur Sustainability", opis: "Moduł ESG zintegrowany z rezerwacjami" },
              { nazwa: "Watershed / Persefoni", opis: "Platformy ESG z modułem podróży" },
              { nazwa: "Plan A / Normative", opis: "Europejskie platformy do raportowania CSRD" },
            ].map((item) => (
              <div key={item.nazwa} className="rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-gray-900 text-sm">{item.nazwa}</p>
                <p className="text-gray-500 text-xs mt-0.5">{item.opis}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Powiązane */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Powiązane artykuły</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/artykuly/raportowanie-podrozy-sluzbowych",
                label: "Raportowanie podróży służbowych — KPI i dane",
              },
              {
                href: "/artykuly/polityka-podrozy-sluzbowych-jak-napisac",
                label: "Travel Policy — jak napisać od zera?",
              },
              {
                href: "/artykuly/jak-obnizyc-koszty-podrozy-sluzbowych",
                label: "Jak obniżyć koszty podróży służbowych o 30%?",
              },
              {
                href: "/artykuly/travel-manager-obowiazki-narzedzia",
                label: "Travel manager — obowiązki i narzędzia",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-xl border border-gray-200 p-4 hover:border-blue-400 hover:bg-blue-50 transition text-sm text-gray-700"
              >
                <ArrowRight className="w-4 h-4 text-blue-500 shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Najczęstsze pytania</h2>
          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">

            <div
              itemScope
              itemProp="mainEntity"
              itemProp="mainEntity" itemType="https://schema.org/Question"
              className="border border-gray-200 rounded-xl p-5"
            >
              <h3 itemProp="name" className="font-semibold text-gray-900 mb-2">
                Ile ton CO₂ emituje lot WAW–JFK w klasie biznes?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Według kalkulatora ICAO: lot WAW–JFK (ok. 7 400 km) w klasie biznes emituje
                  około 3,0–3,5 ton CO₂e na pasażera w jedną stronę, z RFI (radiative forcing
                  index). Ten sam lot w economy to ok. 1,0–1,3 tony CO₂e. Przy 10 pracownikach
                  latających do USA rocznie w biznesie — to 30–35 ton CO₂e do uwzględnienia
                  w scope 3.
                </p>
              </div>
            </div>

            <div
              itemScope
              itemProp="mainEntity"
              itemProp="mainEntity" itemType="https://schema.org/Question"
              className="border border-gray-200 rounded-xl p-5"
            >
              <h3 itemProp="name" className="font-semibold text-gray-900 mb-2">
                Czy powinienem uwzględniać RFI (radiative forcing index) w kalkulacji?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  RFI mnożnik (zwykle 1,9–2,7x) uwzględnia dodatkowy efekt cieplarniany
                  kondensacji i ozonów na dużych wysokościach. DEFRA rekomenduje jego stosowanie.
                  GHG Protocol dopuszcza raportowanie zarówno z, jak i bez RFI — ważne, by
                  wybrać jedną metodę i stosować ją konsekwentnie rok do roku dla porównywalności.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-2xl px-8 py-8 text-center">
          <div className="flex justify-center mb-3">
            <Leaf className="w-8 h-8 text-blue-300" />
          </div>
          <h2 className="text-xl font-bold mb-2">Mierzysz emisje z lotów — ale czy odzyskujesz odszkodowania?</h2>
          <p className="text-blue-200 mb-5 text-sm">
            Zakłócenia lotów to dodatkowy koszt delegacji. ClaimWinger dba o to, żeby
            pracownicy odzyskiwali należne im odszkodowania EC 261 — bez angażowania firmy.
          </p>
          <Link
            href="https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=podroze-sluzbowe-esg-slad-weglowy-lotow"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Sprawdź ClaimWinger
          </Link>
        </div>
      </main>
    </>
  );
}
