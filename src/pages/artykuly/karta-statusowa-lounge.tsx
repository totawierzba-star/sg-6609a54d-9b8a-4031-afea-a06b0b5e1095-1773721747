import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Briefcase, Star, Award, Crown, Coffee, Calendar, ArrowRight, CheckCircle2, TrendingUp, Clock, Shield, Users, AlertCircle, Plane, Info } from "lucide-react";

export default function KartaStatusowaLounge() {
  return (
    <>
      <SEO
        title="Karta statusowa Gold/Silver 2026: Ile warta? Jak zdobyć? Kompletny przewodnik"
        description="Wszystko o kartach statusowych linii lotniczych: benefity (lounge, bagaż, priority), progi do osiągnięcia, ROI dla firm i strategie status match. Dowiedz się ile naprawdę warte są karty Gold/Silver."
        url="https://bizneslot.info/artykuly/karta-statusowa-lounge"
        image="https://bizneslot.info/og-image.png"
      />

      {/* Gradient Hero */}
      <section className="bg-gradient-to-r from-slate-800 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/artykuly" className="text-slate-300 hover:text-white text-sm mb-6 inline-block">
            ← Wszystkie artykuły
          </Link>
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Travel Benefits
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Karta statusowa linii lotniczych: Wstęp do lounge i wszystkie benefity [Przewodnik 2026]
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl">
            Kompleksowy przewodnik dla podróżujących służbowo: jak zdobyć kartę statusową (Silver, Gold, Platinum),
            co daje dostęp do lounge, jakie priorytety otrzymujesz i ile realnie wart jest status dla firmy.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
              <Star className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">Do 15 000 PLN wartości rocznie</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
              <Coffee className="w-5 h-5 text-amber-200" />
              <span className="font-semibold">1000+ lounge globalnie</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-blue-200" />
              <span className="font-semibold">11 min czytania</span>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* TL;DR */}
          <div className="my-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-blue-900 mb-3">TL;DR – Najważniejsze wnioski</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>3 poziomy statusu:</strong> Silver (25–35k mil rocznie), Gold (50–100k mil), Platinum/Senator (100k+ mil)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Lounge access:</strong> Silver = własna linia, Gold = cały alians (Star Alliance = 1000+ lounge'y)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Wartość statusu Gold:</strong> 8000–15 000 PLN rocznie (lounge 50× + priorytet + bagaż)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Najłatwiej dla Polaków:</strong> Miles & More Senator (Lufthansa) lub Miles+Bonus Gold (LOT)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Employer benefit:</strong> Status Gold zmniejsza wypalenie zawodowe o 30–40% (SAP Travel 2024)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Intro */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Dlaczego karta statusowa ma znaczenie w podróżach służbowych?</h2>
          <p className="text-lg text-slate-700 mb-4">
            Jeśli latasz służbowo 6+ razy rocznie, karta statusowa linii lotniczej to <strong>najlepszy benefit pozabiletowy</strong>,
            który możesz zdobyć. Dostęp do lounge to nie tylko darmowa kawa – to 2–3 godziny produktywnej pracy przed lotem,
            prysznic po red-eye flight i spokojne miejsce do telekonferencji.
          </p>
          <p className="text-lg text-slate-700 mb-6">
            W tym przewodniku wyjaśniam <strong>wszystkie poziomy statusów</strong>, pokazuję <strong>konkretne progi</strong> do osiągnięcia
            i wyceniam <strong>realną wartość benefitów</strong> dla pracownika i firmy.
          </p>
          <div className="bg-indigo-50 border border-indigo-200 p-5 rounded-xl mb-8">
            <p className="text-sm text-slate-700">
              <strong>Fakt:</strong> Pracownik ze statusem Gold ma o <strong>38% większą produktywność</strong> w dniu po locie
              długodystansowym (10h+) w porównaniu do osoby bez statusu. Powód: możliwość pracy/odpoczynku w lounge zamiast
              czekania przy gate (badanie SAP Concur Travel 2024).
            </p>
          </div>

          {/* Hierarchia statusów */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Hierarchia statusów – 3 poziomy</h2>

          <div className="space-y-6">
            {/* Silver */}
            <div className="bg-white rounded-xl border-2 border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-slate-100 to-slate-50 px-6 py-4 flex items-center gap-3">
                <div className="bg-slate-400 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Silver / Frequent Traveller</h3>
                  <p className="text-sm text-slate-600">Pierwszy poziom statusu – dostęp podstawowy</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Progi do osiągnięcia:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Miles & More:</strong> 35 000 mil lub 30 lotów rocznie</li>
                      <li>• <strong>Miles+Bonus (LOT):</strong> 25 000 mil lub 25 lotów</li>
                      <li>• <strong>Flying Blue:</strong> 25 000 XP</li>
                      <li>• <strong>Executive Club (BA):</strong> 600 Tier Points</li>
                    </ul>
                    <p className="text-sm text-slate-600 mt-3">
                      <strong>Równowartość:</strong> ~12–15 lotów WAW-FRA (round trip) rocznie
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Benefity:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2"><Coffee className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" /><span><strong>Lounge access:</strong> Tylko własna linia</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Bagaż:</strong> +1 sztuka rejestrowana (23 kg)</span></li>
                      <li className="flex items-start gap-2"><Clock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" /><span><strong>Priority boarding:</strong> Przed grupami 1–9</span></li>
                      <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" /><span><strong>Priority check-in:</strong> Business Class lada</span></li>
                      <li className="flex items-start gap-2"><Award className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" /><span><strong>Bonus miles:</strong> +25% mil na każdy lot</span></li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg mt-4">
                  <p className="text-sm text-slate-700"><strong>Wartość roczna:</strong> ~3000–5000 PLN (30 wizyt w lounge × 80 EUR = 2400 EUR + bagaż)</p>
                </div>
              </div>
            </div>

            {/* Gold */}
            <div className="bg-white rounded-xl border-2 border-yellow-400 shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 px-6 py-4 flex items-center gap-3">
                <div className="bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Gold / Senator</h3>
                  <p className="text-sm text-slate-600">Sweet spot dla frequent flyers – pełny alians</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Progi do osiągnięcia:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Miles & More:</strong> 100 000 mil lub 100 lotów (Senator)</li>
                      <li>• <strong>Miles+Bonus (LOT):</strong> 50 000 mil lub 50 lotów (Gold)</li>
                      <li>• <strong>Flying Blue:</strong> 100 000 XP (Gold)</li>
                      <li>• <strong>Executive Club (BA):</strong> 1500 Tier Points (Gold)</li>
                    </ul>
                    <p className="text-sm text-slate-600 mt-3">
                      <strong>Równowartość:</strong> ~40–50 lotów rocznie lub 6–8 transatlantyckich BC
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Benefity (wszystko z Silver +):</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2"><Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" /><span><strong>Lounge access:</strong> CAŁY alians (Star Alliance = 1000+ lounge'y)</span></li>
                      <li className="flex items-start gap-2"><Users className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" /><span><strong>Guest access:</strong> +1 osoba do lounge</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Bagaż:</strong> +2 sztuki (łącznie 46 kg w Economy)</span></li>
                      <li className="flex items-start gap-2"><TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Upgrade priority:</strong> Economy→Business</span></li>
                      <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" /><span><strong>Priority rebooking:</strong> Pierwszeństwo na alternatywne loty</span></li>
                      <li className="flex items-start gap-2"><Award className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" /><span><strong>Bonus miles:</strong> +50% mil na każdy lot</span></li>
                    </ul>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-200">
                  <p className="text-sm text-slate-700 mb-2"><strong>Wartość roczna:</strong> ~8000–15 000 PLN</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Lounge access (50 wizyt × 80 EUR): <strong>16 000 PLN</strong></li>
                    <li>• Guest access (10 wizyt): <strong>3200 PLN</strong></li>
                    <li>• Bagaż dodatkowy (30 lotów × 150 PLN): <strong>4500 PLN</strong></li>
                    <li>• Priority rebooking (2 kryzysy/rok): <strong>6000 PLN</strong> (zaoszczędzony czas)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Platinum */}
            <div className="bg-white rounded-xl border-2 border-purple-300 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 px-6 py-4 flex items-center gap-3">
                <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Crown className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Platinum / HON Circle</h3>
                  <p className="text-sm text-slate-600">Tier dla ultra-frequent flyers (100+ lotów rocznie)</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Progi do osiągnięcia:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Miles & More:</strong> 600 000 mil lifetime (HON Circle)</li>
                      <li>• <strong>Flying Blue:</strong> 180 000 XP rocznie (Platinum)</li>
                      <li>• <strong>Executive Club (BA):</strong> 5000 Tier Points rocznie</li>
                    </ul>
                    <p className="text-sm text-slate-600 mt-3"><strong>Równowartość:</strong> 100–150 lotów rocznie przez wiele lat</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Benefity premium:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2"><Star className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" /><span>First Class lounge access (Lufthansa First Terminal FRA)</span></li>
                      <li className="flex items-start gap-2"><Star className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" /><span>Limousine service (door-to-gate)</span></li>
                      <li className="flex items-start gap-2"><Star className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" /><span>Dedicated hotline (24/7 concierge)</span></li>
                      <li className="flex items-start gap-2"><Star className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" /><span>Guaranteed seat reservation</span></li>
                    </ul>
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg mt-4">
                  <p className="text-sm text-slate-700"><strong>Uwaga:</strong> Platinum/HON to tier dla profesjonalnych biznes travelerów. Większość corporate travelers osiąga max. Gold/Senator.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Porównanie programów */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Porównanie: Który program najłatwiej osiągnąć dla Polaków?</h2>

          <div className="overflow-x-auto my-8 rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-5 py-4 text-left font-semibold">Program</th>
                  <th className="px-5 py-4 text-left font-semibold">Silver próg</th>
                  <th className="px-5 py-4 text-left font-semibold">Gold próg</th>
                  <th className="px-5 py-4 text-left font-semibold">Lounge Gold</th>
                  <th className="px-5 py-4 text-left font-semibold">Dostępność z PL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-yellow-50 hover:bg-yellow-100 transition-colors">
                  <td className="px-5 py-4 font-bold text-slate-900">Miles & More</td>
                  <td className="px-5 py-4 text-slate-700">35k mil</td>
                  <td className="px-5 py-4 text-slate-700">100k mil</td>
                  <td className="px-5 py-4 text-slate-700">Senator Lounge ⭐⭐⭐⭐⭐</td>
                  <td className="px-5 py-4 text-slate-700">Doskonała (LH+LO)</td>
                </tr>
                <tr className="bg-red-50 hover:bg-red-100 transition-colors">
                  <td className="px-5 py-4 font-bold text-slate-900">Miles+Bonus (LOT)</td>
                  <td className="px-5 py-4 text-slate-700">25k mil</td>
                  <td className="px-5 py-4 text-slate-700">50k mil</td>
                  <td className="px-5 py-4 text-slate-700">Elite Lounge WAW ⭐⭐⭐⭐</td>
                  <td className="px-5 py-4 text-slate-700">Doskonała (LOT direct)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-bold text-slate-900">Flying Blue</td>
                  <td className="px-5 py-4 text-slate-700">25k XP</td>
                  <td className="px-5 py-4 text-slate-700">100k XP</td>
                  <td className="px-5 py-4 text-slate-700">AF Lounge CDG ⭐⭐⭐⭐</td>
                  <td className="px-5 py-4 text-slate-700">Dobra (via CDG/AMS)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-bold text-slate-900">Executive Club (BA)</td>
                  <td className="px-5 py-4 text-slate-700">600 TP</td>
                  <td className="px-5 py-4 text-slate-700">1500 TP</td>
                  <td className="px-5 py-4 text-slate-700">BA Lounge LHR ⭐⭐⭐⭐</td>
                  <td className="px-5 py-4 text-slate-700">Średnia (brak direct)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-8">
            <h3 className="font-bold text-slate-900 mb-3">Rekomendacja dla polskich firm:</h3>
            <p className="text-slate-700 mb-3">
              <strong>#1 Miles & More (Lufthansa Group)</strong> – najlepsza dostępność z Warszawy (8–12 lotów dziennie do FRA/MUC),
              plus LOT jako partner Star Alliance. Senator status = dostęp do 1000+ lounge'y Star Alliance globalnie.
            </p>
            <p className="text-slate-700">
              <strong>#2 Miles+Bonus (LOT)</strong> – niższe progi (Gold już przy 50k mil vs 100k w M&M), doskonały Elite Lounge w WAW,
              bezpośrednie loty długodystansowe (WAW-JFK, WAW-ORD). Jednak mniejsza sieć lounge'y.
            </p>
          </div>

          {/* Lounge Access Guide */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Lounge Access: Co dokładnie dostajesz?</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm overflow-hidden">
              <div className="bg-blue-50 px-5 py-4 flex items-center gap-2">
                <Coffee className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-slate-900">Standard lounge (Silver – własna linia)</h3>
              </div>
              <div className="p-5">
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Catering:</strong> Zimne przekąski, napoje, kawa, piwo/wino</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Wi-Fi:</strong> Darmowy, stabilny (2–5 Mbps)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Seating:</strong> Wygodne fotele, stoliki robocze</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span><strong>Toalety:</strong> Czyste, bez kolejek</span></li>
                  <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>Brak:</strong> Pryszniców, ciepłych posiłków, premium napojów</span></li>
                </ul>
                <p className="text-xs text-slate-600 mt-4"><strong>Wartość wizyty:</strong> ~50–70 EUR</p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl border border-yellow-200 shadow-sm overflow-hidden">
              <div className="bg-yellow-100 px-5 py-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <h3 className="font-semibold text-slate-900">Premium lounge (Gold – cały alians)</h3>
              </div>
              <div className="p-5">
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" /><span><strong>Catering:</strong> Gorące posiłki buffet, premium wina, koktajle</span></li>
                  <li className="flex items-start gap-2"><Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" /><span><strong>Wi-Fi:</strong> High-speed (10+ Mbps), dedicated workspace</span></li>
                  <li className="flex items-start gap-2"><Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" /><span><strong>Prysznice:</strong> Kabiny z ręcznikami, kosmetyki premium</span></li>
                  <li className="flex items-start gap-2"><Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" /><span><strong>Business center:</strong> Drukarki, skanery, meeting rooms</span></li>
                  <li className="flex items-start gap-2"><Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" /><span><strong>Guest access:</strong> Możesz zabrać +1 osobę</span></li>
                </ul>
                <p className="text-xs text-slate-600 mt-4"><strong>Wartość wizyty:</strong> ~80–120 EUR</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-8">
            <h3 className="font-bold text-slate-900 mb-3">Przykład: Dzień pracy w Senator Lounge (Frankfurt Terminal 1)</h3>
            <p className="text-sm text-slate-700 mb-4">
              Lot WAW→FRA (7:00–8:30), przesiadka, lot FRA→JFK (11:00). Czas w lounge: <strong>2h 30min</strong>.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">8:30–9:30: Regeneracja</h4>
                <ul className="text-slate-700 space-y-1">
                  <li>• Prysznic (15 min)</li>
                  <li>• Śniadanie (espresso, croissant)</li>
                  <li>• Gazety (FT, WSJ)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">9:30–10:45: Praca</h4>
                <ul className="text-slate-700 space-y-1">
                  <li>• Emails (stabilne Wi-Fi)</li>
                  <li>• Telekonferencja (quiet zone)</li>
                  <li>• Przygotowanie prezentacji</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">10:45–11:00: Boarding</h4>
                <ul className="text-slate-700 space-y-1">
                  <li>• Spokojne dojście do gate</li>
                  <li>• Priority boarding</li>
                  <li>• Zero stresu</li>
                </ul>
              </div>
            </div>
            <p className="text-sm font-semibold text-blue-700 mt-4">
              75 minut pracy + regeneracja = gotowy do spotkania po wylądowaniu
            </p>
          </div>

          {/* Jak zdobyć status */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Jak zdobyć status? 3 strategie</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-xl border border-green-200 shadow-sm overflow-hidden">
              <div className="bg-green-50 px-5 py-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-slate-900">Strategia #1: Organic (Fly more, earn status)</h3>
              </div>
              <div className="p-5">
                <p className="text-slate-700 mb-4">Najprościej: lataj regularnie na jednej linii/aliansie i zbieraj mile/punkty statusowe.</p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Przykład: Miles & More Senator (Gold)</h4>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• <strong>Próg:</strong> 100 000 mil rocznie</li>
                    <li>• <strong>Trasa WAW-FRA-JFK (BC round trip):</strong> ~12 000 mil</li>
                    <li>• <strong>Potrzeba:</strong> 8–9 lotów transatlantyckich BC rocznie</li>
                    <li>• <strong>LUB:</strong> 40–50 lotów WAW-FRA Economy round trip</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-blue-200 shadow-sm overflow-hidden">
              <div className="bg-blue-50 px-5 py-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-slate-900">Strategia #2: Status Match (Fast track)</h3>
              </div>
              <div className="p-5">
                <p className="text-slate-700 mb-4">Jeśli masz już status w innym programie, możesz poprosić o <strong>status match</strong> – instant Silver/Gold w nowym programie.</p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Jak to działa?</h4>
                  <ol className="text-sm text-slate-700 space-y-2">
                    <li>1. Masz Gold w programie A (np. Miles+Bonus LOT)</li>
                    <li>2. Wysyłasz request do programu B (np. Miles & More) z dowodem statusu</li>
                    <li>3. Program B daje Ci instant Senator na 3–6 miesięcy (trial period)</li>
                    <li>4. Musisz wykonać 50–70% progu w trial period</li>
                    <li>5. Jeśli osiągniesz – status zostaje; jeśli nie – wracasz do standardu</li>
                  </ol>
                  <p className="text-sm text-green-700 font-semibold mt-3">
                    <strong>Best for:</strong> Zmiana pracy/firmy (nowa travel policy wymaga innego aliansu)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-purple-200 shadow-sm overflow-hidden">
              <div className="bg-purple-50 px-5 py-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-slate-900">Strategia #3: Corporate Deal (Instant status dla firm)</h3>
              </div>
              <div className="p-5">
                <p className="text-slate-700 mb-4">Jeśli Twoja firma wydaje 150k+ PLN rocznie na loty, możesz negocjować <strong>corporate package</strong> z linią lotniczą.</p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Co negocjować?</h4>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• <strong>Status match dla C-level:</strong> CEO, CFO, Sales Director = instant Gold</li>
                    <li>• <strong>Lounge vouchers:</strong> 50–100 one-day pass rocznie dla pozostałych</li>
                    <li>• <strong>Priority rebooking:</strong> Priorytet dla Twojej firmy przy odwołaniach</li>
                    <li>• <strong>Bonus miles:</strong> +10–25% mil na wszystkie bilety firmowe</li>
                  </ul>
                  <p className="text-sm text-slate-600 mt-3">
                    Kontakt: corporatesales.poland@dlh.de (Lufthansa) lub corporate@lot.pl (LOT)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dark CTA */}
          <div className="my-12 p-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl text-white">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold mb-3">Twój lot służbowy był opóźniony lub odwołany?</h3>
              <p className="text-slate-300 mb-6">
                Nawet z kartą Gold masz prawo do odszkodowania do 600 EUR za opóźniony/anulowany lot. Status lojalności nie wyklucza kompensaty. Sprawdź w 2 minuty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://claimwinger.com/pl/opozniony-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=karta-statusowa"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sprawdź opóźniony lot <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://claimwinger.com/pl/odwolany-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=karta-statusowa"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors border border-white/30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sprawdź anulowany lot <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <section className="my-16" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ – Najczęściej zadawane pytania</h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Ile trzeba latać, żeby dostać kartę Gold (Senator)?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    <strong>Miles & More (Lufthansa):</strong> 100 000 mil lub 130 segmentów rocznie. W praktyce: ~50–60 lotów rocznie lub 15–20 long-haul round-trips (np. WAW-JFK).
                    Alternatywa: corporate status match – jeśli firma wydaje 300k+ PLN rocznie, Lufthansa może dać instant Gold dla 3–5 top travelers.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Czy wstęp do lounge jest naprawdę wart swojej wartości?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    Zależy od częstotliwości lotów. Jeśli latasz 20+ razy rocznie: TAK – wartość 20 wizyt × 80 EUR = 6400 PLN rocznie.
                    Jeśli 5–10 razy: rozważ Priority Pass (300 EUR/rok = unlimited visits).
                    Jeśli 1–4 razy: płać per-visit (30–50 EUR), nie ma sensu gonić za statusem.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Co to jest "status match" i jak to działa?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    Status match to przeniesienie statusu z jednego programu do drugiego. Przykład: Masz Gold w Miles & More, chcesz latać Emirates.
                    Emirates może dać Ci instant Gold w Skywards bez zbierania mil od zera. Napisz do customer service z dowodem statusu –
                    linia daje 3–12 miesięcy trial Gold. Które linie robią status match: Emirates, Turkish Airlines, Qatar Airways, Virgin Atlantic.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Czy mogę używać karty statusowej na lotach innych linii?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    Tak – w ramach tego samego aliansu. Jeśli masz Miles & More Gold (Star Alliance), status działa na: Lufthansa, LOT, Swiss, Austrian, United, ANA, Singapore Airlines i 20+ innych liniach.
                    Gold = lounge access wszędzie w aliansie, Silver = tylko własna linia + selected partners.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Co się dzieje ze statusem, jeśli zmienię pracę?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    Status jest Twój (osobisty), nie firmowy. Jeśli zdobyłeś Gold latając służbowo, status pozostaje przy Tobie po zmianie pracy.
                    Większość programów wymaga re-qualify co roku. Wyjątek – HON Circle (Miles & More): 600k mil lifetime = status na zawsze.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Czy firma może kupić mi kartę statusową?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    Nie bezpośrednio – statusu nie da się kupić, trzeba go zdobyć latając.
                    Ale firma może pomóc: (1) Corporate status match przy dużym budżecie, (2) Priority Pass (300–400 EUR/rok) = unlimited lounge visits bez statusu,
                    (3) Status challenge – np. Qatar Airways: 4 long-haul loty w 90 dni = instant Gold na rok.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="font-semibold text-lg text-slate-900 mb-3" itemProp="name">
                  Jakie są najlepsze lounge na świecie warte wizyty?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-700" itemProp="text">
                    TOP 5: (1) Al Mourjan Business Lounge (Doha) – 10 000 m², spa, fine dining, najlepszy lounge świata.
                    (2) Lufthansa First Class Terminal (Frankfurt) – prywatny terminal, Michelin-star restaurant.
                    (3) Qantas First Lounge (Sydney) – Neil Perry restaurant, spa.
                    (4) Turkish Airlines CIP Lounge (Istanbul) – 2000 m², live cooking, Turkish bath.
                    (5) Cathay Pacific The Pier (Hong Kong) – noodle bar, harbor views.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="my-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Przeczytaj również</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/artykuly/programy-lojalnosciowe-dla-firm" className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-purple-600" />
                  <span className="text-xs text-slate-500">Travel Management</span>
                </div>
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 mb-2">Programy lojalnościowe dla firm</h3>
                <p className="text-sm text-slate-600">TOP 5 programów dla polskich firm: Miles & More, Miles+Bonus, Flying Blue. Analiza ROI.</p>
              </Link>
              <Link href="/artykuly/business-class-vs-premium-economy" className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Plane className="w-4 h-4 text-blue-600" />
                  <span className="text-xs text-slate-500">Travel Management</span>
                </div>
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 mb-2">Business Class vs. Premium Economy</h3>
                <p className="text-sm text-slate-600">Kiedy warto dopłacić do Business Class, a kiedy Premium Economy wystarcza?</p>
              </Link>
              <Link href="/odszkodowanie-lot-sluzbowy" className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-slate-600" />
                  <span className="text-xs text-slate-500">Prawo</span>
                </div>
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 mb-2">Odszkodowanie za lot służbowy</h3>
                <p className="text-sm text-slate-600">Czy masz prawo do odszkodowania za opóźniony lot w delegacji?</p>
              </Link>
            </div>
          </section>

        </article>
      </div>
    </>
  );
}
