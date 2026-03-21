import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Info, ArrowRight, Scale, Clock, XCircle, Calculator } from "lucide-react";

export default function IleWynosiOdszkodowanieOpoznionyLot() {
  return (
    <>
      <SEO
        title="Ile wynosi odszkodowanie za opóźniony lot? 250, 400 lub 600 EUR [2025]"
        description="Odszkodowanie za opóźniony lot wynosi 250 EUR (do 1500 km), 400 EUR (1500–3500 km) lub 600 EUR (powyżej 3500 km). Sprawdź dokładne warunki i jak złożyć wniosek."
        url="https://bizneslot.info/artykuly/ile-wynosi-odszkodowanie-opozniony-lot-sluzbowy"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Ile wynosi odszkodowanie za opóźniony lot służbowy?",
        "description": "Odszkodowanie za opóźniony lot wynosi 250, 400 lub 600 EUR w zależności od długości trasy. Dowiedz się, kiedy należy się kompensata i jak ją uzyskać.",
        "author": { "@type": "Organization", "name": "bizneslot.info" },
        "publisher": { "@type": "Organization", "name": "bizneslot.info" },
        "datePublished": "2025-03-21",
        "dateModified": "2025-03-21",
        "inLanguage": "pl-PL",
        "about": { "@type": "Thing", "name": "EC 261/2004 odszkodowanie za opóźniony lot" }
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Ile wynosi odszkodowanie za opóźniony lot?",
            "acceptedAnswer": { "@type": "Answer", "text": "Odszkodowanie za opóźniony lot wynosi: 250 EUR dla tras do 1500 km, 400 EUR dla tras od 1500 do 3500 km, 600 EUR dla tras powyżej 3500 km. Warunek: opóźnienie musi wynosić co najmniej 3 godziny przy przylocie do celu." }
          },
          {
            "@type": "Question",
            "name": "Od kiedy przysługuje odszkodowanie za opóźnienie lotu?",
            "acceptedAnswer": { "@type": "Answer", "text": "Odszkodowanie za opóźnienie lotu przysługuje, gdy pasażer dotarł do celu o co najmniej 3 godziny później niż planowany czas przylotu. Liczy się faktyczny czas otwarcia drzwi samolotu, nie czas lądowania." }
          },
          {
            "@type": "Question",
            "name": "Czy odszkodowanie za opóźniony lot dotyczy lotów służbowych?",
            "acceptedAnswer": { "@type": "Answer", "text": "Tak, odszkodowanie za opóźniony lot z rozporządzenia EC 261/2004 dotyczy w równej mierze lotów służbowych i prywatnych. Prawo do odszkodowania przysługuje pasażerowi niezależnie od celu podróży i tego, czy bilet opłaciła firma." }
          },
          {
            "@type": "Question",
            "name": "Kiedy linia lotnicza nie musi wypłacić odszkodowania za opóźnienie?",
            "acceptedAnswer": { "@type": "Answer", "text": "Linia lotnicza nie musi wypłacić odszkodowania, gdy opóźnienie wynikło z nadzwyczajnych okoliczności (extraordinary circumstances): ekstremalnych warunków pogodowych, strajków kontrolerów ruchu lotniczego, decyzji władz lotniska, aktów terroryzmu lub innych zdarzeń poza kontrolą linii. Awaria techniczna samolotu co do zasady NIE jest nadzwyczajną okolicznością." }
          },
          {
            "@type": "Question",
            "name": "Jak obliczyć dystans lotu do ustalenia wysokości odszkodowania?",
            "acceptedAnswer": { "@type": "Answer", "text": "Dystans lotu oblicza się metodą ortodromiczną (great-circle distance) między lotniskiem odlotu a ostatecznym celem podróży. Przy lotach z przesiadką liczy się odległość między pierwszym lotniskiem odlotu a ostatecznym celem, nie sumę odcinków. Narzędzie online: gcmap.com." }
          },
          {
            "@type": "Question",
            "name": "Ile czasu ma pasażer na złożenie wniosku o odszkodowanie za opóźniony lot?",
            "acceptedAnswer": { "@type": "Answer", "text": "Termin przedawnienia roszczenia za opóźniony lot wynosi co do zasady 1 rok w Polsce (art. 778 KC), choć linie lotnicze akceptują roszczenia do 3 lat. Zalecane jest złożenie wniosku jak najszybciej po locie, gdy dowody są łatwo dostępne." }
          }
        ]
      })}} />

      {/* Gradient Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/artykuly" className="text-blue-200 hover:text-white text-sm mb-6 inline-block">
            ← Wszystkie artykuły
          </Link>
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Scale className="w-4 h-4" />
            Prawa pasażera
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ile wynosi odszkodowanie za opóźniony lot służbowy?
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            Konkretna odpowiedź: <strong className="text-white">250, 400 lub 600 EUR</strong> — w zależności od dystansu trasy.
            Sprawdź dokładne progi, warunki i jak w kilka minut złożyć skuteczny wniosek.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
              <Calculator className="w-5 h-5 text-green-300" />
              <span className="font-semibold">Do 600 EUR za jeden lot</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-blue-200" />
              <span className="font-semibold">Od 3h opóźnienia</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
              <CheckCircle2 className="w-5 h-5 text-green-300" />
              <span className="font-semibold">Dotyczy też lotów służbowych</span>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Direct Answer Box — zoptymalizowany pod Featured Snippet i AI Overviews */}
          <div className="my-8 p-6 bg-green-50 border-2 border-green-400 rounded-2xl">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-green-900 text-lg mb-3">Bezpośrednia odpowiedź:</p>
                <p className="text-slate-800 text-lg leading-relaxed">
                  Odszkodowanie za opóźniony lot na podstawie rozporządzenia WE 261/2004 wynosi:
                </p>
                <ul className="mt-3 space-y-2 text-slate-800 font-medium">
                  <li className="flex items-center gap-2"><span className="text-2xl font-bold text-blue-700">250 EUR</span> — trasy do 1500 km (np. Warszawa–Berlin)</li>
                  <li className="flex items-center gap-2"><span className="text-2xl font-bold text-purple-700">400 EUR</span> — trasy 1500–3500 km (np. Warszawa–Lizbona)</li>
                  <li className="flex items-center gap-2"><span className="text-2xl font-bold text-green-700">600 EUR</span> — trasy powyżej 3500 km (np. Warszawa–Nowy Jork)</li>
                </ul>
                <p className="mt-3 text-slate-700 text-sm">
                  Warunek: opóźnienie przy przylocie do celu wynosi co najmniej <strong>3 godziny</strong>. Kwota jest stała — nie zależy od ceny biletu.
                </p>
              </div>
            </div>
          </div>

          {/* Compensation grid */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Tabela odszkodowań EC 261/2004</h2>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200">
              <p className="text-sm font-semibold text-blue-800 mb-1 uppercase tracking-wide">Trasy krótkie</p>
              <p className="text-sm text-blue-700 mb-3">do 1500 km</p>
              <p className="text-5xl font-black text-blue-700 mb-3">250 EUR</p>
              <p className="text-xs text-blue-600 font-medium">≈ 1100 PLN</p>
              <div className="mt-4 text-xs text-blue-700 space-y-1">
                <p>WAW → BER, PRG, VIE</p>
                <p>WAW → CPH, OSL, STK</p>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-300 shadow-md">
              <p className="text-sm font-semibold text-purple-800 mb-1 uppercase tracking-wide">Trasy średnie</p>
              <p className="text-sm text-purple-700 mb-3">1500–3500 km</p>
              <p className="text-5xl font-black text-purple-700 mb-3">400 EUR</p>
              <p className="text-xs text-purple-600 font-medium">≈ 1750 PLN</p>
              <div className="mt-4 text-xs text-purple-700 space-y-1">
                <p>WAW → MAD, LIS, ATH</p>
                <p>WAW → DXB, CAI, TLV</p>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-300">
              <p className="text-sm font-semibold text-green-800 mb-1 uppercase tracking-wide">Trasy długie</p>
              <p className="text-sm text-green-700 mb-3">powyżej 3500 km</p>
              <p className="text-5xl font-black text-green-700 mb-3">600 EUR</p>
              <p className="text-xs text-green-600 font-medium">≈ 2650 PLN</p>
              <div className="mt-4 text-xs text-green-700 space-y-1">
                <p>WAW → JFK, ORD, LAX</p>
                <p>WAW → SIN, HKG, NRT</p>
              </div>
            </div>
          </div>

          {/* Full table */}
          <div className="overflow-x-auto my-8 rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-5 py-4 text-left font-semibold">Dystans trasy</th>
                  <th className="px-5 py-4 text-left font-semibold">Odszkodowanie</th>
                  <th className="px-5 py-4 text-left font-semibold">Wyjątek (lot wewnątrzunijny)</th>
                  <th className="px-5 py-4 text-left font-semibold">Min. opóźnienie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-semibold text-slate-900">Do 1500 km</td>
                  <td className="px-5 py-4 font-bold text-blue-700">250 EUR</td>
                  <td className="px-5 py-4 text-slate-600">—</td>
                  <td className="px-5 py-4 text-slate-700">3 godziny</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-semibold text-slate-900">1500–3500 km</td>
                  <td className="px-5 py-4 font-bold text-purple-700">400 EUR</td>
                  <td className="px-5 py-4 text-slate-600">—</td>
                  <td className="px-5 py-4 text-slate-700">3 godziny</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-semibold text-slate-900">Powyżej 3500 km (lot wewnątrzunijny)</td>
                  <td className="px-5 py-4 font-bold text-orange-600">300 EUR</td>
                  <td className="px-5 py-4 text-slate-600">Opóźnienie 3–4h: 50% redukcja</td>
                  <td className="px-5 py-4 text-slate-700">3 godziny</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-semibold text-slate-900">Powyżej 3500 km (lot do/z UE)</td>
                  <td className="px-5 py-4 font-bold text-green-700">600 EUR</td>
                  <td className="px-5 py-4 text-slate-600">Opóźnienie 3–4h: 300 EUR</td>
                  <td className="px-5 py-4 text-slate-700">3 godziny</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl">
            <div className="flex items-start gap-2">
              <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900">
                <strong>Redukcja o 50%</strong> — linia może wypłacić połowę odszkodowania (np. 300 EUR zamiast 600 EUR), jeśli zaproponowała lot alternatywny,
                który dotarł do celu z opóźnieniem nieprzekraczającym 4 godzin w stosunku do pierwotnego planu.
              </p>
            </div>
          </div>

          {/* Warunki */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Kiedy przysługuje odszkodowanie za opóźnienie?</h2>

          <p className="text-lg text-slate-700 mb-6">
            Aby odszkodowanie za opóźniony lot było należne, muszą być spełnione <strong>łącznie cztery warunki</strong>:
          </p>

          <div className="grid md:grid-cols-2 gap-5 my-8">
            <div className="bg-white rounded-xl border border-green-200 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-green-700">1</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Opóźnienie ≥ 3 godziny przy przylocie</h3>
                  <p className="text-sm text-slate-600">Liczy się moment otwarcia drzwi samolotu na lotnisku docelowym, nie czas lądowania. Różnica może wynosić 15–30 minut.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-green-200 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-green-700">2</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Lot objęty rozporządzeniem UE</h3>
                  <p className="text-sm text-slate-600">Wylot z lotniska w UE (dowolna linia) LUB przylot do UE obsługiwany przez linię z siedzibą w UE.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-green-200 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-green-700">3</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Posiadasz ważną rezerwację i odprawiłeś się</h3>
                  <p className="text-sm text-slate-600">Musisz mieć potwierdzoną rezerwację i stawić się na odprawę w wymaganym czasie. Spóźnienie na boarding wyklucza roszczenie.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-green-200 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-green-700">4</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Brak nadzwyczajnych okoliczności</h3>
                  <p className="text-sm text-slate-600">Opóźnienie nie może wynikać z okoliczności, których linia nie mogła uniknąć mimo podjęcia wszelkich środków.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kiedy linia NIE płaci */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Kiedy linia lotnicza może odmówić wypłaty?</h2>

          <div className="my-6 p-6 bg-red-50 border-l-4 border-red-400 rounded-r-xl">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-900 mb-2">Nadzwyczajne okoliczności (extraordinary circumstances) — wyłączenie odpowiedzialności:</p>
                <ul className="text-slate-700 text-sm space-y-2">
                  <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span><strong>Ekstremalne warunki pogodowe</strong> — burze, mgła, śnieżyca uniemożliwiające bezpieczny lot</span></li>
                  <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span><strong>Strajk kontrolerów ruchu lotniczego</strong> — decyzje służb nawigacyjnych</span></li>
                  <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span><strong>Zamknięcie przestrzeni powietrznej</strong> — decyzje władz (np. chmura pyłu wulkanicznego)</span></li>
                  <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span><strong>Zagrożenie bezpieczeństwa</strong> — akty terroryzmu, zagrożenie bombowe</span></li>
                  <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /><span><strong>Ukryte wady fabryczne samolotu</strong> — tylko nieznane wcześniej, nie standardowe awarie</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-6 p-6 bg-blue-50 border-l-4 border-blue-400 rounded-r-xl">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-900 mb-2">Co NIE jest nadzwyczajną okolicznością — odszkodowanie należy się:</p>
                <ul className="text-slate-700 text-sm space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span><strong>Awaria techniczna samolotu</strong> — usterki sprzętu są ryzykiem wpisanym w działalność linii</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span><strong>Strajk własnego personelu linii</strong> (pilotów, obsługi naziemnej linii)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span><strong>Opóźnienie poprzedniego lotu</strong> tego samego samolotu</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span><strong>Brak dostępności załogi</strong> lub problemy z harmonogramem</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contextual CTA #1 */}
          <div className="my-10 p-6 bg-blue-600 rounded-2xl text-white">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <p className="font-bold text-lg mb-1">Twój lot był opóźniony o ponad 3 godziny?</p>
                <p className="text-blue-100 text-sm">Sprawdź w 2 minuty, czy należy Ci się odszkodowanie do 600 EUR. Bezpłatna weryfikacja roszczenia — płacisz tylko jeśli odzyskamy pieniądze.</p>
              </div>
              <Link
                href="https://claimwinger.com/pl/opozniony-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=ile-wynosi-odszkodowanie"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap flex-shrink-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sprawdź swoje odszkodowanie <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Jak obliczyć dystans */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Jak obliczyć dystans lotu?</h2>

          <p className="text-lg text-slate-700 mb-4">
            Wysokość odszkodowania zależy od <strong>odległości ortodromicznej</strong> (great-circle distance) — czyli najkrótszej trasy między lotniskami,
            niezależnie od rzeczywistej trasy przelotu. Kluczowe zasady:
          </p>

          <div className="space-y-4 my-6">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Lot bezpośredni</h3>
                  <p className="text-sm text-slate-600">Liczy się odległość między lotniskiem odlotu a lotniskiem przylotu. Np. WAW–LHR = 1453 km → 250 EUR.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Lot z przesiadką</h3>
                  <p className="text-sm text-slate-600">Liczy się dystans między <strong>pierwszym lotniskiem odlotu</strong> a <strong>ostatecznym celem podróży</strong> — nie suma odcinków. Np. WAW–FRA–JFK = dystans WAW→JFK = ok. 7000 km → 600 EUR.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Jak sprawdzić dystans?</h3>
                  <p className="text-sm text-slate-600">Użyj narzędzia gcmap.com (wpisz kody IATA lotnisk) lub skontaktuj się ze specjalistami, którzy obliczą dystans automatycznie.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Przykładowe trasy z Warszawy */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Popularne trasy z Warszawy — wysokość odszkodowania</h2>

          <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-5 py-4 text-left font-semibold text-slate-900">Trasa</th>
                  <th className="px-5 py-4 text-left font-semibold text-slate-900">Dystans</th>
                  <th className="px-5 py-4 text-left font-semibold text-slate-900">Odszkodowanie</th>
                  <th className="px-5 py-4 text-left font-semibold text-slate-900">Typowe linie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 text-slate-700">Warszawa → Berlin</td>
                  <td className="px-5 py-4 text-slate-600">520 km</td>
                  <td className="px-5 py-4 font-bold text-blue-700">250 EUR</td>
                  <td className="px-5 py-4 text-slate-600">LOT, Lufthansa, Ryanair</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 text-slate-700">Warszawa → Londyn</td>
                  <td className="px-5 py-4 text-slate-600">1453 km</td>
                  <td className="px-5 py-4 font-bold text-blue-700">250 EUR</td>
                  <td className="px-5 py-4 text-slate-600">LOT, British Airways, Ryanair</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 text-slate-700">Warszawa → Madryt</td>
                  <td className="px-5 py-4 text-slate-600">2583 km</td>
                  <td className="px-5 py-4 font-bold text-purple-700">400 EUR</td>
                  <td className="px-5 py-4 text-slate-600">LOT, Iberia, Ryanair</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 text-slate-700">Warszawa → Dubaj</td>
                  <td className="px-5 py-4 text-slate-600">4000 km</td>
                  <td className="px-5 py-4 font-bold text-green-700">600 EUR</td>
                  <td className="px-5 py-4 text-slate-600">Emirates, LOT via FRA</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 text-slate-700">Warszawa → Nowy Jork</td>
                  <td className="px-5 py-4 text-slate-600">7000 km</td>
                  <td className="px-5 py-4 font-bold text-green-700">600 EUR</td>
                  <td className="px-5 py-4 text-slate-600">LOT, United via FRA</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 text-slate-700">Warszawa → Singapur</td>
                  <td className="px-5 py-4 text-slate-600">9000 km</td>
                  <td className="px-5 py-4 font-bold text-green-700">600 EUR</td>
                  <td className="px-5 py-4 text-slate-600">Singapore Airlines, LOT via FRA</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Jak złożyć wniosek */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Jak złożyć wniosek o odszkodowanie — 3 kroki</h2>

          <div className="space-y-4 my-8">
            <div className="flex items-start gap-4 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Zbierz dokumenty</h3>
                <p className="text-slate-600 text-sm">Potrzebujesz: potwierdzenia rezerwacji (e-mail), karty pokładowej, dokumentu tożsamości. Zapisz czas faktycznego przylotu (screenshot ze strony lub z tablicy przylotów).</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Złóż wniosek — samodzielnie lub przez specjalistów</h3>
                <p className="text-slate-600 text-sm">
                  Możesz napisać bezpośrednio do linii (formularz reklamacyjny na stronie przewoźnika) lub skorzystać z serwisu takiego jak{" "}
                  <Link
                    href="https://claimwinger.com/pl/opozniony-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=ile-wynosi-odszkodowanie"
                    className="text-blue-600 hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ClaimWinger, który specjalizuje się w odzyskiwaniu odszkodowań za opóźnione loty
                  </Link>
                  {" "}— bez opłat z góry, prowizja tylko od wygranej.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Czekaj na wypłatę lub eskaluj</h3>
                <p className="text-slate-600 text-sm">Linia ma obowiązek odpowiedzieć w ciągu 30 dni. Jeśli odmówi lub nie odpowie — możesz skierować sprawę do Urzędu Lotnictwa Cywilnego (ULC) lub sądu. Skuteczność rośnie znacząco przy wsparciu specjalistów.</p>
              </div>
            </div>
          </div>

          {/* Dark CTA Banner */}
          <div className="my-12 p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl text-white">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold mb-3">Odzyskaj odszkodowanie za opóźniony lot</h3>
              <p className="text-slate-300 mb-2">
                Linie lotnicze odrzucają ok. 30% zasadnych wniosków licząc na to, że pasażer się podda. Specjaliści ClaimWinger walczą w Twoim imieniu aż do skutku.
              </p>
              <p className="text-slate-400 text-sm mb-6">Bez opłat z góry. Prowizja tylko od odzyskanej kwoty.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://claimwinger.com/pl/opozniony-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=ile-wynosi-odszkodowanie-cta"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Złóż wniosek o odszkodowanie za lot
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="https://claimwinger.com/pl?utm_source=bizneslot&utm_medium=article&utm_campaign=ile-wynosi-odszkodowanie-cta"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-xl transition-colors border border-white/30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bezpłatna weryfikacja roszczenia
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <section className="my-16" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Najczęstsze pytania</h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Ile wynosi odszkodowanie za opóźniony lot?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    Odszkodowanie za opóźniony lot wynosi: <strong>250 EUR</strong> dla tras do 1500 km, <strong>400 EUR</strong> dla tras 1500–3500 km,
                    <strong> 600 EUR</strong> dla tras powyżej 3500 km. Warunek: opóźnienie przy przylocie do celu wynosi co najmniej 3 godziny.
                    Kwota jest stała i nie zależy od ceny biletu.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Od kiedy przysługuje odszkodowanie za opóźnienie lotu?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    Odszkodowanie przysługuje, gdy pasażer dotarł do celu o co najmniej <strong>3 godziny później</strong> niż planowany czas przylotu.
                    Liczy się moment otwarcia drzwi samolotu na lotnisku docelowym — nie czas lądowania ani kołowania.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Czy odszkodowanie za opóźniony lot dotyczy lotów służbowych?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    Tak. Rozporządzenie EC 261/2004 dotyczy w równej mierze lotów służbowych i prywatnych. Prawo do odszkodowania przysługuje
                    <strong> pasażerowi</strong> (pracownikowi) niezależnie od celu podróży i tego, czy bilet opłaciła firma. Pracodawca nie może
                    przejąć ani zablokować tego roszczenia.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Kiedy linia lotnicza może odmówić wypłaty odszkodowania?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    Linia może odmówić tylko w przypadku nadzwyczajnych okoliczności (extraordinary circumstances): ekstremalnych warunków pogodowych,
                    strajku kontrolerów ruchu lotniczego, zamknięcia przestrzeni powietrznej lub zagrożenia bezpieczeństwa.
                    Awaria techniczna samolotu, strajk własnego personelu linii i opóźnienie poprzedniego lotu
                    <strong> nie są nadzwyczajnymi okolicznościami</strong> — odszkodowanie należy się.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Jak obliczyć dystans lotu do ustalenia odszkodowania?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    Dystans oblicza się metodą ortodromiczną (great-circle distance) między lotniskiem odlotu a ostatecznym celem.
                    Przy locie z przesiadką liczy się odległość między <strong>pierwszym lotniskiem odlotu</strong> a <strong>ostatecznym celem podróży</strong> —
                    nie sumę odcinków. Można sprawdzić na gcmap.com wpisując kody IATA lotnisk.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Ile czasu ma pasażer na złożenie wniosku o odszkodowanie?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    Termin przedawnienia roszczenia wynosi co do zasady <strong>1 rok</strong> według polskiego Kodeksu cywilnego (art. 778),
                    choć linie lotnicze i sądy często akceptują roszczenia do 3 lat. Zalecane jest złożenie wniosku jak najszybciej
                    po locie — dowody (rozkład jazdy, faktyczny czas przylotu) są wtedy łatwe do zebrania.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="my-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Powiązane artykuły</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/artykuly/lot-sluzbowy-opozniony-ponad-3-godziny-krok-po-kroku" className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 mb-2">Lot służbowy opóźniony o ponad 3 godziny — krok po kroku</h3>
                <p className="text-sm text-slate-600">Szczegółowa procedura: jakie dokumenty zebrać, jak napisać wniosek, co zrobić gdy linia odmawia.</p>
              </Link>
              <Link href="/artykuly/ec-261-2004-a-loty-sluzbowe-co-obejmuje-rozporzadzenie" className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 mb-2">EC 261/2004 a loty służbowe — co obejmuje rozporządzenie</h3>
                <p className="text-sm text-slate-600">Pełna podstawa prawna: zakres terytorialny, prawa pracownika, granice ochrony rozporządzenia.</p>
              </Link>
              <Link href="/artykuly/odszkodowanie-lot-sluzbowy-pracownik-czy-pracodawca" className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 mb-2">Odszkodowanie za lot służbowy — pracownik czy pracodawca?</h3>
                <p className="text-sm text-slate-600">Kto ma prawo do odszkodowania gdy bilet opłaciła firma? Odpowiedź jest jednoznaczna.</p>
              </Link>
              <Link href="/artykuly/lot-sluzbowy-odwolany-ostatniej-chwili-co-zrobic" className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 mb-2">Lot służbowy odwołany w ostatniej chwili — co zrobić</h3>
                <p className="text-sm text-slate-600">Plan działania na pierwsze 60 minut po odwołaniu lotu służbowego.</p>
              </Link>
            </div>
          </section>

        </article>
      </div>
    </>
  );
}
