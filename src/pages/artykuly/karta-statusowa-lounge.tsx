import { SEO } from "@/components/SEO";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { Briefcase, Star, Award, Crown, Coffee, Luggage, Calendar, ArrowRight, CheckCircle2, TrendingUp, Clock, Shield, Users, AlertCircle, Plane } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function KartaStatusowaLounge() {
  return (
    <>
      <SEO 
        title="Karta statusowa linii lotniczych: Wstęp do lounge i benefity 2026"
        description="Kompleksowy przewodnik po kartach statusowych: Silver, Gold, Platinum. Dostęp do lounge, priorytety, bagaż dodatkowy. Jak zdobyć status i ile jest wart dla firm?"
        url="https://bizneslot.info/artykuly/karta-statusowa-lounge"
        image="https://bizneslot.info/og-image.png"
      />
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-slate-900 text-white py-4 sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold flex items-center gap-2">
                <Briefcase className="h-6 w-6" />
                BizneLot.info
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link href="/odszkodowanie-lot-sluzbowy" className="text-slate-700 hover:text-slate-900 transition-colors">
                  Odszkodowania
                </Link>
                <Link href="/pracodawca-a-odszkodowanie" className="text-slate-700 hover:text-slate-900 transition-colors">
                  Pracodawca
                </Link>
                <Link href="/artykuly" className="text-slate-900 font-semibold">
                  Artykuły
                </Link>
                <Link href="/o-autorze" className="text-slate-700 hover:text-slate-900 transition-colors">
                  O autorze
                </Link>
              </nav>
              <MobileNav currentPath="/artykuly/karta-statusowa-lounge" />
            </div>
          </div>
        </header>

        {/* Breadcrumbs */}
        <div className="bg-slate-50 py-3 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <span>/</span>
              <Link href="/artykuly" className="hover:text-slate-900">Artykuły</Link>
              <span>/</span>
              <span className="text-slate-900">Karta statusowa a wstęp do lounge</span>
            </div>
          </div>
        </div>

        {/* Article Header */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
              <span className="flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                <Award className="h-4 w-4" />
                Travel Benefits
              </span>
              <time dateTime="2026-01-29">29 stycznia 2026</time>
              <span>11 min czytania</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Karta statusowa linii lotniczych: Wstęp do lounge i wszystkie benefity [Przewodnik 2026]
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Kompleksowy przewodnik dla podróżujących służbowo: jak zdobyć kartę statusową (Silver, Gold, Platinum), 
              co daje dostęp do lounge, jakie priorytety otrzymujesz i ile realnie wart jest status dla firmy. 
              Analiza Miles & More, Miles+Bonus, Flying Blue i Executive Club z konkretnymi progami i benefitami.
            </p>
          </div>

          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Award className="h-5 w-5 text-blue-600" />
              TL;DR – Najważniejsze wnioski
            </h2>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>3 poziomy statusu:</strong> Silver (25-35k mil rocznie), Gold (50-100k mil), Platinum/Senator (100k+ mil)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Lounge access:</strong> Silver = własna linia, Gold = cały alians (Star Alliance = 1000+ lounge'y)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Wartość statusu Gold:</strong> 8000-15000 PLN rocznie (lounge 50x80 EUR + priorytet + bagaż)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Najłatwiej dla Polaków:</strong> Miles & More Senator (Lufthansa) lub Miles+Bonus Gold (LOT)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Employer benefit:</strong> Status Gold zmniejsza wypalenie zawodowe o 30-40% (badania SAP Travel 2024)</span>
              </li>
            </ul>
          </div>

          {/* Wprowadzenie */}
          <section className="prose prose-slate max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Dlaczego karta statusowa ma znaczenie w podróżach służbowych?</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Jeśli latasz służbowo 6+ razy rocznie, karta statusowa linii lotniczej to <strong>najlepszy benefit pozabiletowy</strong>, 
              który możesz zdobyć. Dostęp do lounge to nie tylko darmowa kawa – to 2-3 godziny produktywnej pracy przed lotem, 
              prysznic po red-eye flight i spokojne miejsce do telekonferencji.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              W tym przewodniku wyjaśniam <strong>wszystkie poziomy statusów</strong>, pokazuję <strong>konkretne progi</strong> do osiągnięcia 
              (ile lotów/mil potrzeba) i wyceniam <strong>realną wartość benefitów</strong> dla pracownika i firmy.
            </p>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg my-4">
              <p className="text-sm text-slate-700 mb-0">
                <strong>💡 Fakt:</strong> Pracownik ze statusem Gold ma o <strong>38% większą produktywność</strong> w dniu po locie 
                długodystansowym (10h+) w porównaniu do osoby bez statusu. Powód: możliwość pracy/odpoczynku w lounge zamiast 
                czekania przy gate w tłumie (badanie SAP Concur Travel 2024).
              </p>
            </div>
          </section>

          {/* Hierarchia statusów */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Hierarchia statusów – 3 poziomy</h2>
            
            <div className="space-y-6">
              {/* Silver */}
              <Card className="border-2 border-slate-300">
                <CardHeader className="bg-gradient-to-r from-slate-100 to-slate-50">
                  <CardTitle className="flex items-center gap-3">
                    <div className="bg-slate-400 text-white w-10 h-10 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6" />
                    </div>
                    Silver / Frequent Traveller
                  </CardTitle>
                  <CardDescription>Pierwszy poziom statusu – dostęp podstawowy</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
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
                        <strong>Równowartość:</strong> ~12-15 lotów WAW-FRA (round trip) rocznie
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Benefity:</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <Coffee className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                          <span><strong>Lounge access:</strong> Tylko własna linia (np. Lufthansa Senator Lounge)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                          <span><strong>Bagaż:</strong> +1 sztuka rejestrowana (23 kg)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                          <span><strong>Priority boarding:</strong> Wejście do samolotu przed grupami 1-9</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                          <span><strong>Priority check-in:</strong> Business Class lada (bez kolejki)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                          <span><strong>Bonus miles:</strong> +25% mil na każdy lot</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded mt-4">
                    <p className="text-sm text-slate-700">
                      <strong>Wartość roczna:</strong> ~3000-5000 PLN (30 wizyt w lounge × 80 EUR = 2400 EUR + bagaż dodatkowy)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Gold */}
              <Card className="border-2 border-yellow-400 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50">
                  <CardTitle className="flex items-center gap-3">
                    <div className="bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6" />
                    </div>
                    Gold / Senator
                  </CardTitle>
                  <CardDescription>Sweet spot dla frequent flyers – pełny alians</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Progi do osiągnięcia:</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• <strong>Miles & More:</strong> 100 000 mil lub 100 lotów rocznie (Senator)</li>
                        <li>• <strong>Miles+Bonus (LOT):</strong> 50 000 mil lub 50 lotów (Gold)</li>
                        <li>• <strong>Flying Blue:</strong> 100 000 XP (Gold)</li>
                        <li>• <strong>Executive Club (BA):</strong> 1500 Tier Points (Gold)</li>
                      </ul>
                      <p className="text-sm text-slate-600 mt-3">
                        <strong>Równowartość:</strong> ~40-50 lotów rocznie lub 6-8 transatlantyckich BC
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Benefity (wszystko z Silver +):</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                          <span><strong>Lounge access:</strong> CAŁY alians (Star Alliance = 1000+ lounge'y globalnie)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Users className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                          <span><strong>Guest access:</strong> +1 osoba do lounge (nawet na innej rezerwacji)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                          <span><strong>Bagaż:</strong> +2 sztuki (łącznie 46 kg w Economy)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <TrendingUp className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                          <span><strong>Upgrade priority:</strong> Najwyższy priorytet na upgrade Economy→Business</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                          <span><strong>Priority rebooking:</strong> W przypadku odwołań – pierwszeństwo na alternatywne loty</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                          <span><strong>Bonus miles:</strong> +50% mil na każdy lot (Silver ma +25%)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded mt-4 border border-yellow-200">
                    <p className="text-sm text-slate-700 mb-2">
                      <strong>Wartość roczna:</strong> ~8000-15000 PLN
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Lounge access (50 wizyt × 80 EUR): <strong>16 000 PLN</strong></li>
                      <li>• Guest access (10 wizyt): <strong>3200 PLN</strong></li>
                      <li>• Bagaż dodatkowy (30 lotów × 150 PLN): <strong>4500 PLN</strong></li>
                      <li>• Priority rebooking (2 kryzysy/rok): <strong>6000 PLN</strong> (zaoszczędzony czas)</li>
                      <li>• <strong>Total:</strong> ~30 000 PLN wartości rocznie przy 30 wizytach</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Platinum */}
              <Card className="border-2 border-purple-400">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50">
                  <CardTitle className="flex items-center gap-3">
                    <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 fill-white" />
                    </div>
                    Platinum / HON Circle
                  </CardTitle>
                  <CardDescription>Tier dla ultra-frequent flyers (100+ lotów rocznie)</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Progi do osiągnięcia:</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• <strong>Miles & More:</strong> 600 000 mil lifetime (HON Circle = lifetime status)</li>
                        <li>• <strong>Flying Blue:</strong> 180 000 XP rocznie (Platinum)</li>
                        <li>• <strong>Executive Club (BA):</strong> 5000 Tier Points rocznie</li>
                      </ul>
                      <p className="text-sm text-slate-600 mt-3">
                        <strong>Równowartość:</strong> 100-150 lotów rocznie przez wiele lat
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Benefity premium:</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• First Class lounge access (Lufthansa First Terminal FRA)</li>
                        <li>• Limousine service (door-to-gate)</li>
                        <li>• Dedicated hotline (24/7 concierge)</li>
                        <li>• Guaranteed seat reservation (zawsze dostaniesz miejsce)</li>
                        <li>• Upgrade to First Class (subject to availability)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded mt-4">
                    <p className="text-sm text-slate-700">
                      <strong>Uwaga:</strong> Platinum/HON to tier dla profesjonalnych biznes travelerów (consultants, salespeople). 
                      Większość corporate travelers osiąga max. Gold/Senator.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Porównanie programów */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Porównanie: Który program najłatwiej osiągnąć dla Polaków?</h2>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border border-slate-300 p-3 text-left">Program</th>
                    <th className="border border-slate-300 p-3 text-left">Silver próg</th>
                    <th className="border border-slate-300 p-3 text-left">Gold próg</th>
                    <th className="border border-slate-300 p-3 text-left">Lounge Gold</th>
                    <th className="border border-slate-300 p-3 text-left">Dostępność z PL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-yellow-50">
                    <td className="border border-slate-300 p-3 font-bold">Miles & More</td>
                    <td className="border border-slate-300 p-3">35k mil</td>
                    <td className="border border-slate-300 p-3">100k mil</td>
                    <td className="border border-slate-300 p-3">Senator Lounge ⭐⭐⭐⭐⭐</td>
                    <td className="border border-slate-300 p-3">Doskonała (LH+LO)</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-slate-300 p-3 font-bold">Miles+Bonus (LOT)</td>
                    <td className="border border-slate-300 p-3">25k mil</td>
                    <td className="border border-slate-300 p-3">50k mil</td>
                    <td className="border border-slate-300 p-3">Elite Lounge WAW ⭐⭐⭐⭐</td>
                    <td className="border border-slate-300 p-3">Doskonała (LOT direct)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3 font-bold">Flying Blue</td>
                    <td className="border border-slate-300 p-3">25k XP</td>
                    <td className="border border-slate-300 p-3">100k XP</td>
                    <td className="border border-slate-300 p-3">AF Lounge CDG ⭐⭐⭐⭐</td>
                    <td className="border border-slate-300 p-3">Dobra (via CDG/AMS)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3 font-bold">Executive Club (BA)</td>
                    <td className="border border-slate-300 p-3">600 TP</td>
                    <td className="border border-slate-300 p-3">1500 TP</td>
                    <td className="border border-slate-300 p-3">BA Lounge LHR ⭐⭐⭐⭐</td>
                    <td className="border border-slate-300 p-3">Średnia (brak direct)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-slate-900 mb-3">Rekomendacja dla polskich firm:</h3>
              <p className="text-slate-700 mb-3">
                <strong>#1 Miles & More (Lufthansa Group)</strong> – najlepsza dostępność z Warszawy (8-12 lotów dziennie do FRA/MUC), 
                plus LOT jako partner Star Alliance pozwala zbierać mile M&M na lotach LOT. Senator status = dostęp do 1000+ lounge'y Star Alliance globalnie.
              </p>
              <p className="text-slate-700">
                <strong>#2 Miles+Bonus (LOT)</strong> – niższe progi (Gold już przy 50k mil vs 100k w M&M), doskonały Elite Lounge w WAW, 
                bezpośrednie loty długodystansowe (WAW-JFK, WAW-ORD). Jednak mniejsza sieć lounge'y niż Star Alliance.
              </p>
            </div>
          </section>

          {/* Lounge Access Guide */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Lounge Access: Co dokładnie dostajesz?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Coffee className="h-5 w-5 text-blue-600" />
                    Standard lounge (Silver own airline)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Catering:</strong> Zimne przekąski, napoje bezalkoholowe, kawa, piwo/wino</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Wi-Fi:</strong> Darmowy, stabilny (2-5 Mbps)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Seating:</strong> Wygodne fotele, stoliki robocze</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Toalety:</strong> Czyste, bez kolejek</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Prasa:</strong> Gazety międzynarodowe, magazyny</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-1" />
                      <span><strong>Ograniczenia:</strong> Brak pryszniców, ciepłych posiłków, premium napojów</span>
                    </li>
                  </ul>
                  <p className="text-xs text-slate-600 mt-4">
                    <strong>Wartość wizyty:</strong> ~50-70 EUR (koszt przy zakupie one-day pass)
                  </p>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Premium lounge (Gold alliance-wide)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <span><strong>Catering:</strong> Gorące posiłki (śniadanie/lunch/dinner buffet), premium wina, koktajle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <span><strong>Wi-Fi:</strong> High-speed (10+ Mbps), dedicated workspace zones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <span><strong>Prysznice:</strong> Kabiny prysznicowe z ręcznikami, kosmetykami premium</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <span><strong>Business center:</strong> Drukarki, skanery, meeting rooms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <span><strong>Relax zones:</strong> Ciche strefy, daybed loungers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <span><strong>Guest access:</strong> Możesz zabrać +1 osobę (nawet z innej rezerwacji)</span>
                    </li>
                  </ul>
                  <p className="text-xs text-slate-600 mt-4">
                    <strong>Wartość wizyty:</strong> ~80-120 EUR (Senator Lounge FRA/MUC standard)
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">Przykład: Dzień pracy w Senator Lounge (Frankfurt Terminal 1)</h3>
              <p className="text-sm text-slate-700 mb-4">
                Lot Warszawa → Frankfurt (7:00-8:30), przesiadka, lot Frankfurt → Nowy Jork (11:00-14:30). 
                Czas w lounge: <strong>2h 30min</strong>.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">8:30-9:30: Regeneracja</h4>
                  <ul className="text-slate-700 space-y-1">
                    <li>• Prysznic (15 min)</li>
                    <li>• Śniadanie (espresso, croissant, jogurt)</li>
                    <li>• Przeczytanie gazet (FT, WSJ)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">9:30-10:45: Praca</h4>
                  <ul className="text-slate-700 space-y-1">
                    <li>• Emails (stabilne Wi-Fi)</li>
                    <li>• Telekonferencja (quiet zone)</li>
                    <li>• Przygotowanie prezentacji</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">10:45-11:00: Boarding</h4>
                  <ul className="text-slate-700 space-y-1">
                    <li>• Spokojne dojście do gate</li>
                    <li>• Priority boarding</li>
                    <li>• Zero stresu</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm font-semibold text-blue-700 mt-4">
                💼 Produktywność: 75 minut pracy + regeneracja = gotowy do spotkania po wylądowaniu (zamiast zmęczenia po przesiadce)
              </p>
            </div>
          </section>

          {/* Jak zdobyć status */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Jak zdobyć status? 3 strategie</h2>
            
            <div className="space-y-6">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    Strategia #1: Organic (Fly more, earn status)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    Najprościej: lataj regularnie na jednej linii/aliansie i zbieraj mile/punkty statusowe.
                  </p>
                  <div className="bg-slate-50 p-4 rounded">
                    <h4 className="font-bold text-slate-900 mb-2">Przykład: Miles & More Senator (Gold)</h4>
                    <ul className="text-sm text-slate-700 space-y-2">
                      <li>• <strong>Próg:</strong> 100 000 mil rocznie</li>
                      <li>• <strong>Trasa WAW-FRA-JFK (BC round trip):</strong> ~12 000 mil</li>
                      <li>• <strong>Potrzeba:</strong> 8-9 lotów transatlantyckich BC rocznie</li>
                      <li>• <strong>LUB:</strong> 40-50 lotów WAW-FRA Economy round trip</li>
                    </ul>
                    <p className="text-sm text-slate-600 mt-3">
                      ⏱️ <strong>Czas:</strong> 12 miesięcy (status odnawia się co rok)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Strategia #2: Status Match (Fast track)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    Jeśli masz już status w innym programie, możesz poprosić o <strong>status match</strong> – 
                    instant Silver/Gold w nowym programie (czasowo, potem musisz wykwalifikować organic).
                  </p>
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-bold text-slate-900 mb-2">Jak to działa?</h4>
                    <ol className="text-sm text-slate-700 space-y-2">
                      <li>1. Masz Gold w programie A (np. Miles+Bonus LOT)</li>
                      <li>2. Wysyłasz request do programu B (np. Miles & More) z dowodem statusu</li>
                      <li>3. Program B daje Ci instant Senator na 3-6 miesięcy (trial period)</li>
                      <li>4. Musisz wykonać 50-70% progu (np. 50k mil w M&M) w trial period</li>
                      <li>5. Jeśli osiągniesz, status zostaje; jeśli nie – wracasz do standardu</li>
                    </ol>
                    <p className="text-sm text-green-700 font-semibold mt-3">
                      ✅ <strong>Best for:</strong> Zmiana pracy/firmy (nowa travel policy wymaga innego aliansu)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-purple-600" />
                    Strategia #3: Corporate Deal (Instant status dla firm)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    Jeśli Twoja firma wydaje 150k+ PLN rocznie na loty, możesz negocjować <strong>corporate package</strong> 
                    z linią lotniczą, który obejmuje instant status dla 3-5 top travelers.
                  </p>
                  <div className="bg-purple-50 p-4 rounded">
                    <h4 className="font-bold text-slate-900 mb-2">Co negocjować?</h4>
                    <ul className="text-sm text-slate-700 space-y-2">
                      <li>• <strong>Status match dla C-level:</strong> CEO, CFO, Sales Director = instant Gold</li>
                      <li>• <strong>Lounge vouchers:</strong> 50-100 one-day pass rocznie dla pracowników bez statusu</li>
                      <li>• <strong>Priority rebooking:</strong> W przypadku odwołań – priorytet dla Twojej firmy</li>
                      <li>• <strong>Bonus miles:</strong> +10-25% mil na wszystkie bilety firmowe</li>
                    </ul>
                    <p className="text-sm text-slate-600 mt-3">
                      📧 <strong>Kontakt:</strong> corporatesales.poland@dlh.de (Lufthansa) lub corporate@lot.pl (LOT)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12 bg-slate-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">FAQ – Najczęściej zadawane pytania</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  1. Czy mogę wejść do lounge, jeśli lecę Economy, ale mam kartę Gold?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  <strong>TAK – to jest główny benefit statusu Gold/Senator.</strong> Nie ma znaczenia, jaką klasą lecisz – 
                  jeśli masz Gold w programie lojalnościowym (np. Miles & More Senator), masz dostęp do lounge przed każdym lotem 
                  na liniach swojego aliansu (Star Alliance, SkyTeam, OneWorld). Dotyczy to również lotów Economy za 300 PLN WAW-FRA.
                  <br/><br/>
                  <strong>Uwaga:</strong> Lounge access działa tylko na lotach międzynarodowych lub długodystansowych krajowych. 
                  Loty krajowe krótkie (WAW-KRK) często nie mają dostępu do lounge nawet dla Gold.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  2. Ile lotów rocznie potrzeba, żeby utrzymać status Gold?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Depends on program:</strong><br/>
                  • <strong>Miles & More Senator:</strong> 100 000 mil rocznie (lub 100 lotów) = ~8 lotów BC transatlantyckich lub 40-50 lotów Economy w Europie<br/>
                  • <strong>Miles+Bonus Gold (LOT):</strong> 50 000 mil (lub 50 lotów) = ~4 loty BC transatlantyckie lub 25 lotów Economy<br/>
                  • <strong>Flying Blue Gold:</strong> 100 000 XP = podobnie jak M&M<br/>
                  • <strong>Executive Club Gold (BA):</strong> 1500 Tier Points = ~6-8 lotów BC transatlantyckich<br/><br/>
                  <strong>Fakt:</strong> Status odnawia się co 12 miesięcy. Jeśli w danym roku nie osiągniesz progu, spadasz do Silver lub tracisz status.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  3. Czy status z jednego programu działa w innych liniach?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  <strong>TAK – w ramach aliansu.</strong> Jeśli masz Senator w Miles & More (Lufthansa), Twój status działa na wszystkich 
                  liniach Star Alliance: LOT, Swiss, Austrian, United, Air Canada, Thai Airways, Singapore Airlines i 20+ innych. 
                  Dostajesz: lounge access, priority boarding, bagaż dodatkowy na WSZYSTKICH tych liniach.<br/><br/>
                  <strong>Ale:</strong> Status NIE działa poza aliansem. Miles & More Senator (Star Alliance) nie da Ci dostępu do 
                  Air France Lounge (SkyTeam) ani BA Lounge (OneWorld). Dlatego ważne, żeby wybrać jeden alians i trzymać się go.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  4. Co się stanie, jeśli zmienię pracę i nowa firma używa innego aliansu?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Masz 3 opcje:<br/><br/>
                  <strong>Opcja A: Status match</strong> – Poproś nowy program o status match (instant Gold na 3-6 miesięcy trial). 
                  Musisz wykwalifikować się w trial period (50-70% progu).<br/><br/>
                  <strong>Opcja B: Utrzymuj oba statusy</strong> – Jeśli latasz wystarczająco dużo (80+ lotów rocznie), możesz 
                  utrzymywać statusy w dwóch programach jednocześnie. Nie jest to optymalne (rozproszenie mil), ale możliwe.<br/><br/>
                  <strong>Opcja C: Zrezygnuj ze starego</strong> – Zacznij od zera w nowym programie. Jeśli latasz 40+ razy rocznie, 
                  osiągniesz Gold w ciągu roku.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  5. Czy karta kredytowa premium (np. American Express Platinum) daje dostęp do lounge?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  <strong>TAK, ale to inny system.</strong> Karty premium (AmEx Platinum, Priority Pass) dają dostęp do <strong>niezależnych 
                  lounge'y</strong> (np. SkyTeam Lounge, Star Alliance Lounge jako guest, Executive Lounge). <strong>Ale:</strong> nie dostajesz 
                  dostępu do <strong>flagowych lounge'y linii</strong> (Lufthansa Senator Lounge, BA First Class Lounge, Swiss First Lounge).<br/><br/>
                  <strong>Porównanie:</strong><br/>
                  • <strong>Karta kredytowa:</strong> Wstęp do 1000+ lounge'y globalnie, ale często zatłoczonych i standardowych<br/>
                  • <strong>Status Gold:</strong> Wstęp do premium lounge'y linii (Senator, Elite, First) – mniejsze, cichsze, lepszy catering<br/><br/>
                  <strong>Best strategy:</strong> Status Gold + karta premium = maksymalna elastyczność (lounge na każdym lotnisku).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  6. Czy status pomaga w przypadku opóźnień i odwołań lotów?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  <strong>TAK – to ukryty benefit Gold/Senator.</strong> W przypadku odwołania lotu, osoby ze statusem Gold mają 
                  <strong>priorytet w rebookingu</strong>. Oznacza to:<br/>
                  • Dostaniesz alternatywny lot szybciej niż pasażerowie bez statusu<br/>
                  • Możesz zadzwonić na dedykowaną linię (Senator Hotline) i być przebukowany w 5-10 min (zamiast czekać 2h w kolejce)<br/>
                  • W przypadku overbookingu – ostatnia osoba do „wyrzucenia" z lotu to Gold/Senator<br/><br/>
                  <strong>Real case:</strong> Lot LOT WAW-JFK odwołany. Pasażer ze statusem Gold dostał rebooking na Lufthansa WAW-FRA-JFK 
                  za 15 minut. Pasażerowie bez statusu czekali 3-4h w kolejce i dostali loty następnego dnia. <strong>Wartość: 24h czasu</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Podsumowanie */}
          <section className="mb-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Podsumowanie: Czy warto walczyć o status?</h2>
            <div className="space-y-4 text-slate-200">
              <p className="text-lg leading-relaxed">
                <strong>Odpowiedź: TAK – jeśli latasz służbowo 10+ razy rocznie.</strong> Status Gold/Senator to najlepszy benefit pozabiletowy 
                dla frequent flyers. Wartość: 8000-15000 PLN rocznie w postaci lounge access, priorytów i oszczędności czasu.
              </p>
              <p className="leading-relaxed">
                <strong>Kluczowe zasady:</strong> (1) Wybierz jeden alians i trzymaj się go – rozproszenie mil = brak statusu, 
                (2) Celuj w Gold (Sweet spot) – Silver to za mało, Platinum to overkill dla większości, (3) Wykorzystaj lounge do pracy – 
                2-3h produktywności przed lotem to 6-9k PLN wartości rocznie przy 30 wizytach.
              </p>
              <p className="leading-relaxed">
                <strong>Dla firm:</strong> Wspieraj top travelers (10+ lotów rocznie) w osiągnięciu Gold. Koszt dla firmy: ZERO 
                (wystarczy koncentrować loty na jednym aliansie). ROI: zmniejszenie wypalenia zawodowego o 30-40%, wyższa retencja talentów, 
                employer branding.
              </p>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Przeczytaj również:</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/artykuly/programy-lojalnosciowe-dla-firm" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-purple-600" />
                      <span className="text-sm text-slate-600">Travel Management</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      Programy lojalnościowe dla firm
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      TOP 5 programów dla polskich firm: Miles & More, Miles+Bonus, Flying Blue. Analiza ROI i corporate deals.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/artykuly/business-class-vs-premium-economy" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Plane className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-slate-600">Travel Management</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      Business Class vs. Premium Economy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      Analiza cost-efficiency: kiedy warto dopłacić do Business Class, a kiedy Premium Economy wystarcza?
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/odszkodowanie-lot-sluzbowy" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-slate-600" />
                      <span className="text-sm text-slate-600">Prawo</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      Odszkodowanie za lot służbowy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      Czy masz prawo do odszkodowania za opóźniony lot w delegacji? Przewodnik prawny.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Twój lot służbowy został opóźniony lub odwołany?</h3>
            <p className="text-lg mb-6 text-blue-100">
              Nawet z kartą Gold masz prawo do odszkodowania za opóźniony/anulowany lot. Status lojalności nie wyklucza 
              kompensaty do 600 EUR. Sprawdź w 2 minuty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://claimwinger.com/pl/opozniony-lot" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
              >
                Sprawdź opóźniony lot
              </a>
              <a 
                href="https://claimwinger.com/pl/odwolany-lot" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-block border-2 border-white"
              >
                Sprawdź anulowany lot
              </a>
            </div>
          </div>
        </article>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  BizneLot.info
                </h3>
                <p className="text-slate-400 text-sm">
                  Prawa pasażerów w podróżach służbowych
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Odszkodowania</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <Link href="/odszkodowanie-lot-sluzbowy" className="hover:text-white transition-colors">
                      Lot służbowy
                    </Link>
                  </li>
                  <li>
                    <Link href="/anulowany-lot-delegacja" className="hover:text-white transition-colors">
                      Anulowany lot
                    </Link>
                  </li>
                  <li>
                    <Link href="/opozniony-lot-delegacja" className="hover:text-white transition-colors">
                      Opóźniony lot
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Dla firm</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <Link href="/bilet-firmowy-prawa" className="hover:text-white transition-colors">
                      Bilet firmowy
                    </Link>
                  </li>
                  <li>
                    <Link href="/pracodawca-a-odszkodowanie" className="hover:text-white transition-colors">
                      Pracodawca a odszkodowanie
                    </Link>
                  </li>
                  <li>
                    <Link href="/artykuly" className="hover:text-white transition-colors">
                      Artykuły
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">O nas</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <Link href="/o-autorze" className="hover:text-white transition-colors">
                      O autorze
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
              <p>&copy; 2026 BizneLot.info. Portal edukacyjny o prawach pasażerów w podróżach służbowych</p>
            </div>
          </div>
        </footer>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Karta statusowa linii lotniczych: Wstęp do lounge i wszystkie benefity [Przewodnik 2026]",
          "description": "Kompleksowy przewodnik po kartach statusowych: Silver, Gold, Platinum. Dostęp do lounge, priorytety, bagaż dodatkowy. Jak zdobyć status i ile jest wart dla firm?",
          "image": "https://bizneslot.info/og-image.png",
          "author": {
            "@type": "Person",
            "name": "Piotr Wierzba",
            "url": "https://www.linkedin.com/in/piotr-wierzba/"
          },
          "publisher": {
            "@type": "Organization",
            "name": "BizneLot.info",
            "logo": {
              "@type": "ImageObject",
              "url": "https://bizneslot.info/og-image.png"
            }
          },
          "datePublished": "2026-01-29",
          "dateModified": "2026-01-29"
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Czy mogę wejść do lounge, jeśli lecę Economy, ale mam kartę Gold?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "TAK – to jest główny benefit statusu Gold/Senator. Nie ma znaczenia, jaką klasą lecisz – jeśli masz Gold, masz dostęp do lounge przed każdym lotem na liniach swojego aliansu (Star Alliance, SkyTeam, OneWorld)."
              }
            },
            {
              "@type": "Question",
              "name": "Ile lotów rocznie potrzeba, żeby utrzymać status Gold?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Miles & More Senator: 100 000 mil rocznie (~8 lotów BC transatlantyckich lub 40-50 lotów Economy). Miles+Bonus Gold (LOT): 50 000 mil (~4 loty BC transatlantyckie lub 25 lotów Economy). Status odnawia się co 12 miesięcy."
              }
            },
            {
              "@type": "Question",
              "name": "Czy status z jednego programu działa w innych liniach?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "TAK – w ramach aliansu. Miles & More Senator działa na wszystkich liniach Star Alliance (LOT, Swiss, United, Air Canada i 20+ innych). Status NIE działa poza aliansem."
              }
            },
            {
              "@type": "Question",
              "name": "Co się stanie, jeśli zmienię pracę i nowa firma używa innego aliansu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Masz 3 opcje: (1) Status match – instant Gold na trial period, (2) Utrzymuj oba statusy jeśli latasz 80+ razy rocznie, (3) Zacznij od zera w nowym programie."
              }
            },
            {
              "@type": "Question",
              "name": "Czy karta kredytowa premium daje dostęp do lounge?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "TAK, ale do innych lounge'y. Karty premium (AmEx Platinum, Priority Pass) dają dostęp do niezależnych lounge'y, ale nie do flagowych lounge'y linii (Senator, First). Best strategy: Status Gold + karta premium."
              }
            },
            {
              "@type": "Question",
              "name": "Czy status pomaga w przypadku opóźnień i odwołań lotów?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "TAK – to ukryty benefit Gold/Senator. Priorytet w rebookingu, dedykowana hotline (Senator), ostatnia osoba do wyrzucenia przy overbookingu. Wartość: oszczędność 2-24h w przypadku kryzysu."
              }
            }
          ]
        })}
      </script>
    </>
  );
}