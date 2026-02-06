import { SEO } from "@/components/SEO";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { Briefcase, Plane, DollarSign, Clock, Users, Calendar, ArrowRight, CheckCircle2, TrendingUp, ArrowLeft, Calculator, MapPin, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function PrivateJetVsBusinessClass() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Private Jet vs. Business Class: Kiedy czarter samolotu staje się realną alternatywą? [2026]",
        "description": "Analiza kosztów Private Jet dla grup 6-10 managerów. Porównanie z Business Class, oszczędność czasu, ukryte koszty i ROI. Kiedy czarter się opłaca?",
        "author": {
          "@type": "Organization",
          "name": "BizneLot.info"
        },
        "publisher": {
          "@type": "Organization",
          "name": "BizneLot.info",
          "url": "https://bizneslot.info"
        },
        "datePublished": "2026-01-29",
        "dateModified": "2026-01-29",
        "mainEntityOfPage": "https://bizneslot.info/artykuly/private-jet-vs-business-class",
        "image": "https://bizneslot.info/og-image.png"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Ile kosztuje wynajem prywatnego odrzutowca (Private Jet)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Koszt czarteru lekkiego odrzutowca (Light Jet, 6-7 miejsc) to około 2500-3500 EUR za godzinę lotu. Dla lotu Warszawa-Londyn (2h) koszt całkowity to ok. 12 000 - 15 000 EUR w dwie strony. Przy pełnym obłożeniu (6 osób), koszt na osobę wynosi ok. 2000-2500 EUR, co jest porównywalne z Business Class last-minute."
            }
          },
          {
            "@type": "Question",
            "name": "Kiedy Private Jet jest tańszy od Business Class?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Private Jet staje się konkurencyjny cenowo, gdy podróżuje grupa 6-10 managerów, szczególnie na trasach ze słabym połączeniem rejsowym (wymagającym przesiadek). Oszczędność czasu (brak check-in, lądowanie bliżej celu) i brak konieczności noclegów często przeważa szalę na korzyść czarteru w całkowitym rachunku (TCO)."
            }
          },
          {
            "@type": "Question",
            "name": "Ile czasu oszczędza się latając prywatnym samolotem?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Średnia oszczędność to 3-5 godzin na jeden odcinek podróży. Odprawa zajmuje 15 minut (vs 2h na lotnisku), start jest dostosowany do spotkania, a lądowanie możliwe na mniejszych lotniskach bliżej celu (np. Londyn City lub Biggin Hill zamiast Heathrow). Dla grupy 8 osób to łącznie 40 godzin roboczych oszczędności."
            }
          },
          {
            "@type": "Question",
            "name": "Jakie są ukryte koszty Business Class dla firm?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ukryte koszty to: czas stracony na lotniskach i przesiadkach, konieczność dodatkowych noclegów (gdy rozkład lotów nie pasuje do spotkania), diety, taksówki z odległych lotnisk, oraz zmęczenie pracowników wpływające na jakość negocjacji. Przy grupie managerów te koszty mogą przewyższyć cenę czarteru."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Strona główna",
            "item": "https://bizneslot.info"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Artykuły",
            "item": "https://bizneslot.info/artykuly"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Private Jet vs Business Class",
            "item": "https://bizneslot.info/artykuly/private-jet-vs-business-class"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Private Jet vs. Business Class: Kiedy czarter się opłaca? [2026]"
        description="Analiza kosztów dla Travel Managerów: kiedy wynajem prywatnego odrzutowca jest tańszy niż Business Class? Kalkulacja dla grup 6-10 osób, oszczędność czasu i ROI."
        url="https://bizneslot.info/artykuly/private-jet-vs-business-class"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 group">
                <Briefcase className="w-8 h-8 text-slate-700 group-hover:text-slate-900 transition-colors" />
                <div>
                  <h1 className="text-xl font-bold text-slate-900">BizneLot.info</h1>
                  <p className="text-xs text-slate-600">Prawa pasażerów w podróżach służbowych</p>
                </div>
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
              <MobileNav currentPath="/artykuly/private-jet-vs-business-class" />
            </div>
          </div>
        </header>

        {/* Breadcrumbs */}
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-slate-600 hover:text-slate-900">
                Strona główna
              </Link>
              <span className="text-slate-400">/</span>
              <Link href="/artykuly" className="text-slate-600 hover:text-slate-900">
                Artykuły
              </Link>
              <span className="text-slate-400">/</span>
              <span className="text-slate-900 font-medium">Private Jet vs Business Class</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Link */}
              <Link
                href="/artykuly"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Powrót do artykułów
              </Link>

              {/* Article Header */}
              <header className="mb-12">
                <div className="flex items-center gap-3 mb-4 text-sm text-slate-600">
                  <span className="px-3 py-1 bg-slate-900 text-white rounded-full text-xs font-medium">
                    Logistyka Biznesowa
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <time dateTime="2026-01-29">29 stycznia 2026</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>10 min czytania</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Private Jet vs. Business Class: Kiedy czarter samolotu staje się realną alternatywą?
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed">
                  Mit o prywatnych odrzutowcach wyłącznie dla milionerów upada, gdy spojrzymy w Excela. Analiza kosztów dla grup managerskich pokazuje, że czasami "luksus" jest najtańszą opcją logistyczną.
                </p>
              </header>

              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                
                <Alert className="mb-12 border-slate-700 bg-slate-50">
                  <Calculator className="h-5 w-5 text-slate-700" />
                  <AlertTitle className="text-lg font-bold text-slate-900">
                    Kluczowa kalkulacja
                  </AlertTitle>
                  <AlertDescription className="text-slate-700 mt-2">
                    Dla grupy 8 managerów, lot Private Jetem na trasie wymagającej przesiadki (np. Poznań – fabryka w Lyonie) jest często <strong>tańszy o 15-20%</strong> niż Business Class, gdy doliczymy koszty hoteli, diet i straconych roboczogodzin.
                  </AlertDescription>
                </Alert>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  Mit: Private Jet to tylko szampan i kawior
                </h2>

                <p className="text-lg leading-relaxed text-slate-700">
                  W świadomości publicznej prywatny odrzutowiec to symbol statusu celebrytów. W biznesie to jednak przede wszystkim <strong>maszyna do zakrzywiania czasu</strong>.
                </p>

                <p className="text-lg leading-relaxed text-slate-700 mt-4">
                  Dla firm produkcyjnych, konsultingowych czy inwestycyjnych, czarter małego samolotu (Light Jet lub Turboprop) to narzędzie pracy, które pozwala:
                </p>
                <ul className="space-y-2 mt-4 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Odwiedzić 3 miasta w jeden dzień (niemożliwe rejsowo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Wylądować na małym lotnisku 15 min od fabryki (zamiast 2h jazdy z hubu)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Odbyć poufną naradę zarządu w trakcie lotu</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  Case Study: 8 managerów leci do fabryki
                </h2>

                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  Porównajmy realny scenariusz. Firma z Wrocławia wysyła 8-osobową delegację (zarząd + inżynierowie) do partnerskiej fabryki w okolicach Stuttgartu.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Plane className="h-5 w-5 text-slate-500" />
                        Opcja A: Loty Rejsowe (Lufthansa)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-sm text-slate-600 space-y-2">
                        <p><strong>Trasa:</strong> WRO → FRA (przesiadka 2h) → STR</p>
                        <p><strong>Czas podróży:</strong> 6h w jedną stronę (door-to-door)</p>
                        <p><strong>Harmonogram:</strong> Wylot 06:00, na miejscu 12:00. Spotkanie 4h. Brak powrotu tego samego dnia (konieczny nocleg).</p>
                      </div>
                      <div className="pt-4 border-t border-slate-100">
                        <p className="font-bold text-slate-900">Koszty (8 osób):</p>
                        <ul className="text-sm text-slate-700 mt-2 space-y-1">
                          <li>Bilety Business: 8 × 2500 PLN = 20 000 PLN</li>
                          <li>Hotel (8 pokoi): 8 × 800 PLN = 6 400 PLN</li>
                          <li>Diety + kolacja: 3 000 PLN</li>
                          <li>Roboczogodziny (12h w podróży): 24 000 PLN*</li>
                        </ul>
                        <p className="font-bold text-xl text-slate-900 mt-3">Suma: ~53 400 PLN</p>
                        <p className="text-xs text-slate-500 mt-1">*przyjęto śr. koszt managera 250 PLN/h</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Plane className="h-5 w-5 text-blue-600" />
                        Opcja B: Private Jet (Cessna Citation)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-sm text-slate-600 space-y-2">
                        <p><strong>Trasa:</strong> WRO → STR (bezpośrednio)</p>
                        <p><strong>Czas podróży:</strong> 1h 15min (door-to-door: 1h 45min)</p>
                        <p><strong>Harmonogram:</strong> Wylot 08:00, na miejscu 09:30. Spotkanie 6h. Powrót o 17:00. Kolacja w domu we Wrocławiu.</p>
                      </div>
                      <div className="pt-4 border-t border-blue-100">
                        <p className="font-bold text-slate-900">Koszty (8 osób):</p>
                        <ul className="text-sm text-slate-700 mt-2 space-y-1">
                          <li>Czarter (Round trip): 9 500 EUR (~41 000 PLN)</li>
                          <li>Hotel: 0 PLN</li>
                          <li>Diety: 0 PLN</li>
                          <li>Roboczogodziny (3.5h w podróży): 7 000 PLN</li>
                        </ul>
                        <p className="font-bold text-xl text-blue-700 mt-3">Suma: ~48 000 PLN</p>
                        <p className="text-xs text-blue-600 mt-1 font-semibold">Oszczędność: 5 400 PLN + 1 dzień pracy</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  Ukryte koszty Business Class
                </h2>

                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  Patrząc tylko na cenę biletu, samolot rejsowy zawsze wygrywa. Ale Travel Manager musi patrzeć na <strong>Total Cost of Mission (TCM)</strong>.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Clock className="h-5 w-5 text-slate-600" />
                        Czas na lotnisku
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-700">
                        <strong>Rejsowy:</strong> 90-120 min przed odlotem. Security check, boarding, kołowanie.<br/>
                        <strong>Prywatny:</strong> 15 min przed odlotem. Wjazd autem pod samolot (w niektórych terminalach).
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-slate-600" />
                        Dojazd do celu
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-700">
                        <strong>Rejsowy:</strong> Ląduje w hubach (Frankfurt, Monachium, Heathrow). Często 1-2h taxi do fabryki.<br/>
                        <strong>Prywatny:</strong> Ląduje na małych lotniskach (tysiące w Europie), często 15-20 min od celu.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Users className="h-5 w-5 text-slate-600" />
                        Produktywność
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-700">
                        <strong>Rejsowy:</strong> Trudno o poufną rozmowę. Hałas, inni pasażerowie.<br/>
                        <strong>Prywatny:</strong> Kabina to latająca sala konferencyjna. Strategia omawiana w locie.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  Kiedy czarter się NIE opłaca?
                </h2>

                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  Żeby być uczciwym: w wielu przypadkach Private Jet jest ekonomicznym nonsensem.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-100">
                    <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-red-900">Podróż w 1-2 osoby</h4>
                      <p className="text-red-800 text-sm">Koszt czarteru jest stały za samolot. Przy 1-2 pasażerach cena na osobę jest 3-4x wyższa niż First Class.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-100">
                    <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-red-900">Trasy Hub-to-Hub</h4>
                      <p className="text-red-800 text-sm">Np. Warszawa-Londyn Heathrow. Połączenia rejsowe są częste (co 2h), a sloty dla prywatnych samolotów na Heathrow drogie i limitowane.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-100">
                    <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-red-900">Loty transatlantyckie</h4>
                      <p className="text-red-800 text-sm">Heavy Jet do USA to koszt 80-120 tys. USD. Business Class dla 4 osób to 20 tys. USD. Różnica jest zbyt duża, by uzasadnić ją oszczędnością czasu.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  FAQ – Pytania Travel Managerów
                </h2>

                <div className="space-y-4 mb-12">
                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Ile kosztuje wynajem prywatnego odrzutowca (Private Jet)?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700">
                        Koszt czarteru lekkiego odrzutowca (Light Jet, 6-7 miejsc) to około 2500-3500 EUR za godzinę lotu. Dla lotu Warszawa-Londyn (2h) koszt całkowity to ok. 12 000 - 15 000 EUR w dwie strony. Przy pełnym obłożeniu (6 osób), koszt na osobę wynosi ok. 2000-2500 EUR, co jest porównywalne z Business Class last-minute.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Kiedy Private Jet jest tańszy od Business Class?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700">
                        Private Jet staje się konkurencyjny cenowo, gdy podróżuje grupa 6-10 managerów, szczególnie na trasach ze słabym połączeniem rejsowym (wymagającym przesiadek). Oszczędność czasu (brak check-in, lądowanie bliżej celu) i brak konieczności noclegów często przeważa szalę na korzyść czarteru w całkowitym rachunku (TCO).
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Ile czasu oszczędza się latając prywatnym samolotem?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700">
                        Średnia oszczędność to 3-5 godzin na jeden odcinek podróży. Odprawa zajmuje 15 minut (vs 2h na lotnisku), start jest dostosowany do spotkania, a lądowanie możliwe na mniejszych lotniskach bliżej celu (np. Londyn City lub Biggin Hill zamiast Heathrow). Dla grupy 8 osób to łącznie 40 godzin roboczych oszczędności.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Summary */}
                <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl p-8 mt-12 border border-slate-200">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Podsumowanie dla CFO</h2>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Nie traktuj Private Jet jako luksusu, ale jako narzędzie logistyczne. Jeśli masz do przewiezienia 6+ kluczowych osób do miejsca oddalonego od głównych hubów lotniczych, czarter jest prawdopodobnie tańszą, szybszą i bezpieczniejszą opcją niż linie rejsowe.
                  </p>
                </div>

                {/* CTA Box */}
                <div className="bg-slate-900 text-white rounded-xl p-8 mt-12">
                  <h3 className="text-2xl font-bold mb-4">Problemy z lotem rejsowym?</h3>
                  <p className="text-slate-200 mb-6">
                    Jeśli wybrałeś jednak lot rejsowy i został on odwołany lub opóźniony, pamiętaj o swoich prawach. Odszkodowanie należy się pasażerowi, nie firmie.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/odszkodowanie-lot-sluzbowy"
                      className="px-6 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-semibold"
                    >
                      Dowiedz się więcej
                    </Link>
                    <a
                      href="https://claimwinger.com/pl/odwolany-lot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-semibold border border-slate-700"
                    >
                      Zgłoś lot w ClaimWinger
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold mb-4">BizneLot.info</h3>
                <p className="text-sm">
                  Portal ekspercki o prawach pasażerów w podróżach służbowych i delegacjach.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Główne tematy</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/odszkodowanie-lot-sluzbowy" className="hover:text-white transition-colors">
                      Odszkodowanie za lot służbowy
                    </Link>
                  </li>
                  <li>
                    <Link href="/anulowany-lot-delegacja" className="hover:text-white transition-colors">
                      Anulowany lot w delegacji
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
                <h4 className="text-white font-semibold mb-4">Sprawdź odszkodowanie</h4>
                <p className="text-sm mb-4">
                  Skorzystaj z usług ClaimWinger, aby łatwo i szybko odzyskać należne odszkodowanie:
                </p>
                <div className="space-y-2">
                  <a
                    href="https://claimwinger.com/pl/odwolany-lot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-white transition-colors"
                  >
                    → Odwołany lot
                  </a>
                  <a
                    href="https://claimwinger.com/pl/opozniony-lot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-white transition-colors"
                  >
                    → Opóźniony lot
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-sm text-center">
              <p>© 2026 BizneLot.info – Portal edukacyjny o prawach pasażerów w podróżach służbowych</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}