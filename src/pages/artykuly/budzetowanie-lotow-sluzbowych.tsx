import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, ArrowRight, Briefcase } from "lucide-react";

export default function BudzetowanieLotowSluzbowych() {
  return (
    <>
      <SEO
        title="Budżetowanie lotów służbowych na rok — metody i szablony"
        description="Jak zaplanować roczny budżet podróży lotniczych? Metoda bottom-up, top-down i zero-based budgeting dla travel managera. Szablon podziału budżetu na departamenty."
        canonicalUrl="https://bizneslot.info/artykuly/budzetowanie-lotow-sluzbowych"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Budżetowanie lotów służbowych na rok — metody i szablony",
            description:
              "Trzy metody budzetowania podrozy sluzbowych: bottom-up, top-down i zero-based. Szablon podzialu budzetu, rezerwa awaryjna i jak monitorowac realizacje w ciagu roku.",
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
                name: "Jak zaplanowac budzet na loty sluzbowe na rok?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Najskuteczniejsza metoda dla firm z historią wydatków: bottom-up — zbierz od departamentow planowane podroze (destynacje, czestotliwosc, klasa), przemnoz przez srednie ceny biletow z poprzedniego roku z korektą o inflację i zmiany planow biznesowych. Dodaj rezerwę awaryjną 10–15% na nieprzewidziane wyjazdy.",
                },
              },
              {
                "@type": "Question",
                name: "Ile procent budżetu firmy powinny stanowić podróże służbowe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Brak jednej normy — zależy od branży i modelu biznesowego. Firmy konsultingowe i sprzedażowe z dużą mobilnością: 3–8% przychodów. Firmy produkcyjne: 0,5–2%. Dla pojedynczej firmy lepszym benchmarkiem jest koszt podróży per pracownik lub per projekt.",
                },
              },
              {
                "@type": "Question",
                name: "Co to jest zero-based budgeting w kontekscie podrozy sluzbowych?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Zero-based budgeting (ZBB) oznacza, ze kazdy wyjazd musi byc uzasadniony od zera — bez automatycznego przedluzenia budzetu z poprzedniego roku. Departament musi wykazac, ze planowane podroze sa niezbedne i nie mozna ich zastapic wideokonferencja. ZBB jest kosztowny procesowo, ale skuteczny przy redukcji kosztow.",
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
            <Briefcase className="w-4 h-4" />
            <span>Zarządzanie podróżami służbowymi</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">
            Budżetowanie lotów służbowych na rok — metody i szablony
          </h1>
          <p className="text-blue-100 text-lg">
            Roczny budżet podróży to nie tylko liczba w Excelu — to kontrakt między travel
            managerem a zarządem. Sprawdź trzy metody budżetowania i jak zaplanować podział
            między departamenty.
          </p>
        </div>

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl px-6 py-5 mb-8">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-1">
            Krótka odpowiedź
          </p>
          <p className="text-gray-800 font-medium">
            Dla firm z historią wydatków najlepsza jest metoda <strong>bottom-up</strong>:
            zebranie planów od departamentów + dane historyczne + korekta o inflację i zmiany
            biznesowe. Dodaj <strong>10–15% rezerwy awaryjnej</strong>. Monitoruj realizację
            miesięcznie i reaguj przy odchyleniu powyżej 15%.
          </p>
        </div>

        {/* Trzy metody */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Trzy metody budżetowania podróży służbowych
          </h2>
          <div className="space-y-4">

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <div className="flex items-center gap-2 mb-2">
                <p className="font-semibold text-gray-900 text-lg">Bottom-up</p>
                <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full font-medium">Rekomendowana</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Każdy departament zgłasza planowane podróże na kolejny rok: destynacje,
                częstotliwość, liczba pracowników, szacunkowa klasa. Travel manager agreguje
                dane i szacuje koszty na podstawie aktualnych cen biletów.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Zalety</p>
                  <ul className="text-gray-600 space-y-1 list-disc list-inside ml-1">
                    <li>Realistyczny — oparty na planach</li>
                    <li>Zaangażowanie departamentów</li>
                    <li>Łatwy do obrony przed CFO</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Wady</p>
                  <ul className="text-gray-600 space-y-1 list-disc list-inside ml-1">
                    <li>Czasochłonny w dużych firmach</li>
                    <li>Departamenty zawyżają potrzeby</li>
                    <li>Wymaga dyscypliny danych</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-semibold text-gray-900 text-lg mb-2">Top-down</p>
              <p className="text-gray-700 text-sm mb-3">
                Zarząd lub CFO ustala całkowity limit budżetu podróży (np. jako % przychodów
                lub na podstawie poprzedniego roku ± korekta). Travel manager dzieli kwotę
                między departamenty proporcjonalnie do wielkości lub historycznego spend&apos;u.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Zalety</p>
                  <ul className="text-gray-600 space-y-1 list-disc list-inside ml-1">
                    <li>Szybki w przygotowaniu</li>
                    <li>Pełna kontrola kosztów</li>
                    <li>Prosty do monitorowania</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Wady</p>
                  <ul className="text-gray-600 space-y-1 list-disc list-inside ml-1">
                    <li>Oderwany od realnych potrzeb</li>
                    <li>Konflikty między departamentami</li>
                    <li>Ryzyko niedoboru przy growth</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="font-semibold text-gray-900 text-lg mb-2">Zero-based budgeting (ZBB)</p>
              <p className="text-gray-700 text-sm mb-3">
                Każda planowana podróż musi być uzasadniona od zera — bez automatycznego
                przedłużenia poprzedniego roku. Departament wykazuje, że podróż jest niezbędna
                i nie ma tańszej alternatywy (wideokonferencja, kolej).
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Zalety</p>
                  <ul className="text-gray-600 space-y-1 list-disc list-inside ml-1">
                    <li>Eliminuje rutynowe, zbędne loty</li>
                    <li>Wymusza myślenie o alternatywach</li>
                    <li>Najsilniejsza redukcja kosztów</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Wady</p>
                  <ul className="text-gray-600 space-y-1 list-disc list-inside ml-1">
                    <li>Bardzo pracochłonny</li>
                    <li>Opór ze strony departamentów</li>
                    <li>Trudny do wdrożenia w każdym roku</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Szablon podziału */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Szablon podziału budżetu na departamenty
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Departament</th>
                  <th className="px-4 py-3 text-right">% budżetu</th>
                  <th className="px-4 py-3 text-left">Główne destynacje</th>
                  <th className="px-4 py-3 text-left">Typowa klasa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { dept: "Sprzedaż / BD", proc: "35%", dest: "Klienci krajowi i EU", klasa: "Economy / Flex" },
                  { dept: "Zarząd / C-level", proc: "25%", dest: "Globalne", klasa: "Business" },
                  { dept: "Technologia / IT", proc: "15%", dest: "Konferencje EU", klasa: "Economy" },
                  { dept: "Finanse / Prawo", proc: "10%", dest: "EU (regulatorzy)", klasa: "Economy" },
                  { dept: "HR / Rekrutacja", proc: "5%", dest: "Targi pracy EU", klasa: "Economy" },
                  { dept: "Rezerwa awaryjna", proc: "10%", dest: "—", klasa: "—" },
                ].map((row) => (
                  <tr key={row.dept} className="even:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{row.dept}</td>
                    <td className="px-4 py-3 text-right font-medium text-blue-700">{row.proc}</td>
                    <td className="px-4 py-3 text-gray-600">{row.dest}</td>
                    <td className="px-4 py-3 text-gray-600">{row.klasa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Przykładowy podział dla firmy usługowej. Dostosuj do struktury organizacyjnej
            i danych historycznych.
          </p>
        </section>

        {/* Elementy budżetu */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Co uwzględnić w budżecie — pełna lista pozycji
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { poz: "Bilety lotnicze", uwaga: "Główna pozycja — 40–60% total travel" },
              { poz: "Hotel / zakwaterowanie", uwaga: "20–30% total travel" },
              { poz: "Transfer lotniskowy", uwaga: "Taxi, Uber, wynajem auta" },
              { poz: "Diety i posiłki", uwaga: "Ryczałt lub rzeczywiste koszty" },
              { poz: "Ubezpieczenie podróżne", uwaga: "Polisa firmowa lub per trip" },
              { poz: "Opłaty wizowe / paszportowe", uwaga: "Przy trasach spoza Schengen" },
              { poz: "Koszty zakłóceń lotu", uwaga: "Hotel last minute, taxi zastępcze" },
              { poz: "Rezerwa awaryjna (10–15%)", uwaga: "Nieprzewidziane wyjazdy, droższe bilety" },
            ].map((item) => (
              <div key={item.poz} className="flex items-start gap-2 rounded-xl border border-gray-200 p-3">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.poz}</p>
                  <p className="text-gray-500 text-xs">{item.uwaga}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Monitorowanie */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Jak monitorować realizację budżetu w ciągu roku?
          </h2>
          <p className="text-gray-700 mb-4">
            Sam budżet bez monitorowania nie przynosi efektów. Trzy progi działania:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Odchylenie do 10% — monitoruj</p>
                <p className="text-gray-600 text-sm">Normalne wahania sezonowe. Raportuj w comiesięcznym dashboardzie, brak działań korygujących.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Odchylenie 10–25% — analizuj i reaguj</p>
                <p className="text-gray-600 text-sm">Zidentyfikuj departamenty przekraczające limity, sprawdź przyczynę, wdróż korektę (tymczasowy freeze, zmiana progów klas).</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
              <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Odchylenie powyżej 25% — eskaluj do CFO</p>
                <p className="text-gray-600 text-sm">Wymagana rewizja budżetu lub decyzja zarządu o przesunięciach. Bez eskalacji — wydatki wymkną się spod kontroli do końca roku.</p>
              </div>
            </div>
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
                href: "/artykuly/jak-obnizyc-koszty-podrozy-sluzbowych",
                label: "Jak obniżyć koszty podróży służbowych o 30%?",
              },
              {
                href: "/artykuly/zatwierdzanie-podrozy-sluzbowych-approval",
                label: "Zatwierdzanie podróży — systemy approval",
              },
              {
                href: "/artykuly/polityka-podrozy-sluzbowych-jak-napisac",
                label: "Travel Policy — jak napisać od zera?",
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
              itemType="https://schema.org/Question"
              className="border border-gray-200 rounded-xl p-5"
            >
              <h3 itemProp="name" className="font-semibold text-gray-900 mb-2">
                Kiedy zacząć planować budżet podróży na kolejny rok?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Najlepiej zacząć zbieranie danych od departamentów we wrześniu–październiku,
                  by mieć gotowy projekt budżetu na przełom października i listopada — przed
                  procesem budżetowania ogólnofirmowego. Dane historyczne z TMC za bieżący rok
                  (styczeń–wrzesień) plus plany na Q4 dają solidną bazę do projekcji.
                </p>
              </div>
            </div>

            <div
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="border border-gray-200 rounded-xl p-5"
            >
              <h3 itemProp="name" className="font-semibold text-gray-900 mb-2">
                Jak uwzględnić w budżecie zakłócenia lotów i odszkodowania EC 261?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Koszty zakłóceń (nieplanowany hotel, zmiana biletu) powinny być częścią
                  rezerwy awaryjnej. Odszkodowań EC 261 nie budżetujesz po stronie kosztów —
                  one należą do pracownika i nie obciążają firmowego budżetu. Warto natomiast
                  wpisać do budżetu ewentualny koszt narzędzia do zarządzania roszczeniami,
                  jeśli firma zdecyduje się na systemowe rozwiązanie.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-2xl px-8 py-8 text-center">
          <h2 className="text-xl font-bold mb-2">Zbudowałeś budżet — zadbaj też o roszczenia pracowników</h2>
          <p className="text-blue-200 mb-5 text-sm">
            Koszty zakłóceń lotów wchodzą do rezerwy. Odszkodowania EC 261 należą do pracownika
            — ClaimWinger pomaga je odzyskać bez angażowania działu finansów.
          </p>
          <Link
            href="https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=budzetowanie-lotow-sluzbowych"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Sprawdź ClaimWinger
          </Link>
        </div>
      </main>
    </>
  );
}
