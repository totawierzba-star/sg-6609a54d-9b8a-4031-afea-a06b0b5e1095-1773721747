import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Briefcase, ArrowLeft, Calendar, Clock, Users, Plane, Heart, Shield, TrendingUp, FileText, AlertCircle, CheckCircle2, XCircle, DollarSign, Building2, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function BleisurePolitykaPodrozySluzowych() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Bleisure 2.0: Jak nowoczesne firmy łączą pracę z wypoczynkiem? [2026]",
        "description": "Kompleksowy przewodnik po Bleisure Travel dla HR i Travel Managerów. Travel Policy, aspekty podatkowe, ubezpieczeniowe i Employer Branding. Gotowe szablony i case studies.",
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
        "mainEntityOfPage": "https://bizneslot.info/artykuly/bleisure-polityka-podrozy-sluzbowych",
        "image": "https://bizneslot.info/og-image.png",
        "keywords": "bleisure, polityka podróży służbowych, travel policy, employer branding, benefit pracowniczy, delegacja plus urlop, business leisure"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Czym jest Bleisure Travel i jak działa w praktyce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bleisure (Business + Leisure) to połączenie podróży służbowej z urlopem. Pracownik pozostaje 2-5 dni dłużej w miejscu delegacji na koszt własny, wykorzystując firmowy bilet lotniczy. Pracodawca pokrywa koszty części służbowej, pracownik sam płaci za dodatkowe dni (hotel, wyżywienie). W Polsce około 38% firm technologicznych oferuje taki benefit."
            }
          },
          {
            "@type": "Question",
            "name": "Jakie są korzyści Bleisure dla pracodawcy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kluczowe korzyści to: zwiększona satysfakcja pracowników (78% chętniej przyjmuje delegacje z opcją bleisure), niższy współczynnik wypalenia zawodowego (redukcja o 34%), lepszy Employer Branding, wyższa retencja talentów (o 23%), oraz możliwość optymalizacji kosztów biletów (wykorzystanie biletu powrotnego z późniejszą datą jest często tańsze niż zmiana rezerwacji)."
            }
          },
          {
            "@type": "Question",
            "name": "Jak rozliczyć podatkowo podróż Bleisure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Część służbowa delegacji (dni robocze + zwykły koszt powrotu) = koszty uzyskania przychodu dla firmy. Dodatkowe dni urlopowe = koszt osobisty pracownika (hotel, wyżywienie nie podlegają zwrotowi). Bilet lotniczy: jeśli różnica między biletem z wcześniejszym a późniejszym powrotem jest minimalna lub ujemna, można ją wliczyć w koszty delegacji. Kluczowe: jasne rozdzielenie kosztów w dokumentacji."
            }
          },
          {
            "@type": "Question",
            "name": "Czy ubezpieczenie służbowe obejmuje dni prywatne w Bleisure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standardowe ubezpieczenie delegacyjne NIE obejmuje dni prywatnych. Pracownik musi wykupić własne ubezpieczenie turystyczne na dodatkowe dni lub firma może oferować rozszerzony pakiet jako benefit (z jasnym zapisem, że to świadczenie dodatkowe podlegające opodatkowaniu)."
            }
          },
          {
            "@type": "Question",
            "name": "Jak stworzyć Travel Policy uwzględniającą Bleisure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Skuteczna Travel Policy Bleisure powinna zawierać: definicję bleisure, warunki kwalifikacji (np. minimum 3 dni delegacji), proces zatwierdzania (przełożony + HR), zasady rozliczania kosztów, kwestie ubezpieczeniowe, odpowiedzialność pracownika, oraz procedurę zmiany rezerwacji lotniczej. Kluczowe jest zachowanie transparentności i zgodności z prawem podatkowym."
            }
          },
          {
            "@type": "Question",
            "name": "Jakie są najczęstsze błędy firm wdrażających Bleisure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Najczęstsze błędy to: brak pisemnej polityki (ryzyko nierównego traktowania), nieprecyzyjne rozliczenie kosztów (problemy z ZUS/US), brak komunikacji o ubezpieczeniu (ryzyko prawne dla firmy), niedoprecyzowanie odpowiedzialności za bagaż firmowy podczas dni prywatnych, oraz brak procedury awaryjnej (co jeśli pracownik zachoruje podczas urlopu po delegacji)."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "name": "Jak wdrożyć Bleisure Travel w firmie – przewodnik krok po kroku",
        "description": "Praktyczny przewodnik dla HR Managerów: jak bezpiecznie wdrożyć politykę Bleisure Travel w organizacji",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Przeprowadź badanie wśród pracowników",
            "text": "Sprawdź zainteresowanie bleisure wśród zespołów często podróżujących służbowo. Ankieta online (15 pytań) pozwoli ocenić potencjalny popyt."
          },
          {
            "@type": "HowToStep",
            "name": "Skonsultuj z działem prawnym i podatkowym",
            "text": "Upewnij się, że proponowana polityka jest zgodna z prawem pracy, przepisami ZUS i regulacjami podatkowymi. Skonsultuj z doradcą podatkowym szczególnie kwestię rozliczenia kosztów biletu."
          },
          {
            "@type": "HowToStep",
            "name": "Stwórz pisemną Travel Policy z sekcją Bleisure",
            "text": "Dokument powinien zawierać jasne kryteria kwalifikacji, procedurę zatwierdzania, zasady rozliczeń, kwestie ubezpieczeniowe i odpowiedzialność stron."
          },
          {
            "@type": "HowToStep",
            "name": "Przeprowadź pilotaż z 5-10 pracownikami",
            "text": "Testuj politykę na małej grupie, zbierz feedback, zidentyfikuj problemy operacyjne przed pełnym wdrożeniem."
          },
          {
            "@type": "HowToStep",
            "name": "Komunikuj benefit i edukuj zespół",
            "text": "Organizuj webinary, stwórz FAQ, promuj bleisure jako element Employer Value Proposition. Jasno komunikuj zasady i ograniczenia."
          },
          {
            "@type": "HowToStep",
            "name": "Monitoruj wykorzystanie i satysfakcję",
            "text": "Śledź KPIs: liczba wniosków, wskaźnik akceptacji, feedback pracowników, wpływ na retencję. Dostosowuj politykę na podstawie danych."
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
            "name": "Bleisure 2.0: Travel Policy",
            "item": "https://bizneslot.info/artykuly/bleisure-polityka-podrozy-sluzbowych"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Bleisure 2.0: Jak nowoczesne firmy łączą pracę z wypoczynkiem? [2026]"
        description="Kompleksowy przewodnik po Bleisure Travel dla HR i Travel Managerów. Travel Policy, aspekty podatkowe, ubezpieczeniowe i Employer Branding. Gotowe szablony i case studies."
        url="https://bizneslot.info/artykuly/bleisure-polityka-podrozy-sluzbowych"
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
              <span className="text-slate-900 font-medium">Bleisure 2.0: Travel Policy</span>
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
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                    Travel Management
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <time dateTime="2026-01-29">29 stycznia 2026</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>12 min czytania</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Bleisure 2.0: Jak nowoczesne firmy łączą pracę z wypoczynkiem?
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed">
                  Kompleksowy przewodnik po Bleisure Travel dla HR i Travel Managerów: jak stworzyć Travel Policy, uniknąć problemów podatkowych i wykorzystać bleisure jako narzędzie Employer Branding.
                </p>
              </header>

              {/* TL;DR Box */}
              <Alert className="mb-12 border-purple-200 bg-purple-50">
                <TrendingUp className="h-5 w-5 text-purple-700" />
                <AlertTitle className="text-lg font-bold text-purple-900">
                  TL;DR – Kluczowe wnioski
                </AlertTitle>
                <AlertDescription className="text-purple-900 mt-3 space-y-2">
                  <p>✅ <strong>Bleisure</strong> to połączenie delegacji z urlopem – pracownik zostaje 2-5 dni dłużej na własny koszt</p>
                  <p>✅ <strong>78% pracowników</strong> chętniej przyjmuje delegacje z opcją bleisure</p>
                  <p>✅ <strong>Retencja talentów</strong> wzrasta o 23% w firmach oferujących ten benefit</p>
                  <p>✅ <strong>Kluczowe:</strong> pisemna Travel Policy + jasne rozliczenie podatkowe + ubezpieczenie</p>
                  <p>✅ <strong>ROI:</strong> koszt wdrożenia polityki ~5000 PLN, potencjalna oszczędność na rekrutacji ~50000 PLN</p>
                </AlertDescription>
              </Alert>

              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                
                {/* Section 1 */}
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                  <Heart className="h-8 w-8 text-purple-600" />
                  Czym jest Bleisure Travel?
                </h2>

                <p className="text-lg leading-relaxed text-slate-700">
                  <strong>Bleisure</strong> (Business + Leisure) to model podróży służbowej, w którym pracownik przedłuża swój pobyt w miejscu delegacji o kilka dni urlopu – na własny koszt, ale wykorzystując firmowy bilet lotniczy.
                </p>

                <div className="bg-slate-50 rounded-xl p-6 my-8 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Przykład w praktyce:</h3>
                  <p className="text-slate-700 mb-4">
                    Anna, Senior Project Manager, leci na 3-dniową konferencję do Barcelony (pon-śr). Zamiast wracać w czwartek, zostaje do niedzieli – zwiedzając miasto, odpoczywając i pracując zdalnie 1-2h dziennie.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <p className="font-semibold text-slate-900 mb-2">🏢 Co płaci firma:</p>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Bilet lotniczy (tam i z powrotem w niedzielę)</li>
                        <li>• Hotel (poniedziałek-środa)</li>
                        <li>• Diety (3 dni robocze)</li>
                        <li>• Ubezpieczenie (poniedziałek-środa)</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <p className="font-semibold text-slate-900 mb-2">👤 Co płaci Anna:</p>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Hotel (czwartek-sobota)</li>
                        <li>• Wyżywienie (4 dni prywatne)</li>
                        <li>• Atrakcje turystyczne</li>
                        <li>• Ubezpieczenie turystyczne (czwartek-niedziela)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  Dlaczego Bleisure zyskuje na popularności?
                </h2>

                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  Według badania <strong>Global Business Travel Association (2023)</strong>:
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <Card className="border-purple-200">
                    <CardHeader>
                      <CardTitle className="text-3xl font-bold text-purple-600">38%</CardTitle>
                      <CardDescription className="text-slate-700">
                        firm technologicznych w Polsce oferuje bleisure jako benefit
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-purple-200">
                    <CardHeader>
                      <CardTitle className="text-3xl font-bold text-purple-600">78%</CardTitle>
                      <CardDescription className="text-slate-700">
                        pracowników chętniej przyjmuje delegacje z opcją bleisure
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-purple-200">
                    <CardHeader>
                      <CardTitle className="text-3xl font-bold text-purple-600">34%</CardTitle>
                      <CardDescription className="text-slate-700">
                        redukcja wypalenia zawodowego wśród frequent travellers
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>

                {/* Benefits for employer */}
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                  <Building2 className="h-8 w-8 text-slate-700" />
                  Korzyści dla pracodawcy
                </h2>

                <div className="space-y-4 mb-8">
                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        Employer Branding i retencja talentów
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700">
                        Badanie LinkedIn Talent Solutions (2024) wykazało, że <strong>23% wyższa retencja</strong> występuje w firmach oferujących bleisure. Koszt zastąpienia specjalisty IT to 150-200% jego rocznego wynagrodzenia – bleisure to tania polisa ubezpieczeniowa.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        Wyższa efektywność podczas delegacji
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700">
                        Pracownicy z opcją bleisure są <strong>bardziej zmotywowani</strong> podczas części służbowej podróży. Wiedza, że po konferencji czekają ich 2 dni relaksu w Lizbonie sprawia, że konferencja nie jest "karą", ale częścią większej przygody.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        Potencjalna optymalizacja kosztów biletów
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700">
                        W wielu przypadkach bilety z sobotnim powrotem (po weekendzie bleisure) są <strong>tańsze o 20-40%</strong> niż bilety z powrotem w piątek wieczorem. Firma oszczędza na bilecie, pracownik zyskuje weekend w Barcelonie.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        Redukcja wypalenia zawodowego
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700">
                        Badanie Harvard Business Review (2023): pracownicy podróżujący służbowo 10+ razy rocznie mają <strong>2,5x wyższe ryzyko wypalenia</strong>. Bleisure zmniejsza to ryzyko o 34%, transformując stresującą delegację w pozytywne doświadczenie.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Tax & Legal */}
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                  <Scale className="h-8 w-8 text-slate-700" />
                  Aspekty podatkowe i prawne Bleisure
                </h2>

                <Alert className="mb-8 border-amber-200 bg-amber-50">
                  <AlertCircle className="h-5 w-5 text-amber-700" />
                  <AlertTitle className="text-lg font-bold text-amber-900">
                    Uwaga: Kluczowe dla compliance
                  </AlertTitle>
                  <AlertDescription className="text-amber-900 mt-2">
                    Nieprawidłowe rozliczenie bleisure może prowadzić do problemów z ZUS, Urzędem Skarbowym i audytem wewnętrznym. Poniższe wytyczne są zgodne z polskim prawem podatkowym (stan na styczeń 2026).
                  </AlertDescription>
                </Alert>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                  Jak prawidłowo rozliczyć koszty?
                </h3>

                <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 mb-8 border border-slate-200">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Zasada ogólna:</h4>
                  <p className="text-slate-700 mb-4">
                    <strong>Koszty delegacji służbowej</strong> (dni robocze + standardowy koszt powrotu) = <span className="text-green-700 font-semibold">koszty uzyskania przychodu dla firmy</span>
                  </p>
                  <p className="text-slate-700">
                    <strong>Koszty urlopu</strong> (dodatkowe dni + atrakcje) = <span className="text-slate-700 font-semibold">koszt osobisty pracownika</span> (nie podlegają zwrotowi)
                  </p>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mt-8 mb-4">
                  Szczegółowe rozliczenie pozycji:
                </h4>

                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-900">Pozycja</th>
                        <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-900">Płaci firma</th>
                        <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-900">Płaci pracownik</th>
                        <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-900">Uwagi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-300 px-4 py-3 text-slate-700">Bilet lotniczy</td>
                        <td className="border border-slate-300 px-4 py-3 text-green-700 font-semibold">
                          <CheckCircle2 className="inline h-4 w-4 mr-1" />
                          Tak
                        </td>
                        <td className="border border-slate-300 px-4 py-3 text-slate-500">—</td>
                        <td className="border border-slate-300 px-4 py-3 text-sm text-slate-600">
                          Jeśli zmiana daty powrotu nie generuje dodatkowych kosztów lub je redukuje
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 px-4 py-3 text-slate-700">Hotel (dni służbowe)</td>
                        <td className="border border-slate-300 px-4 py-3 text-green-700 font-semibold">
                          <CheckCircle2 className="inline h-4 w-4 mr-1" />
                          Tak
                        </td>
                        <td className="border border-slate-300 px-4 py-3 text-slate-500">—</td>
                        <td className="border border-slate-300 px-4 py-3 text-sm text-slate-600">
                          Zgodnie z limitem w Travel Policy
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 px-4 py-3 text-slate-700">Hotel (dni prywatne)</td>
                        <td className="border border-slate-300 px-4 py-3 text-slate-500">—</td>
                        <td className="border border-slate-300 px-4 py-3 text-red-700 font-semibold">
                          <XCircle className="inline h-4 w-4 mr-1" />
                          Tak
                        </td>
                        <td className="border border-slate-300 px-4 py-3 text-sm text-slate-600">
                          Pracownik rezerwuje i płaci sam
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 px-4 py-3 text-slate-700">Diety (dni służbowe)</td>
                        <td className="border border-slate-300 px-4 py-3 text-green-700 font-semibold">
                          <CheckCircle2 className="inline h-4 w-4 mr-1" />
                          Tak
                        </td>
                        <td className="border border-slate-300 px-4 py-3 text-slate-500">—</td>
                        <td className="border border-slate-300 px-4 py-3 text-sm text-slate-600">
                          Zgodnie z rozporządzeniem o delegacjach
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 px-4 py-3 text-slate-700">Wyżywienie (dni prywatne)</td>
                        <td className="border border-slate-300 px-4 py-3 text-slate-500">—</td>
                        <td className="border border-slate-300 px-4 py-3 text-red-700 font-semibold">
                          <XCircle className="inline h-4 w-4 mr-1" />
                          Tak
                        </td>
                        <td className="border border-slate-300 px-4 py-3 text-sm text-slate-600">
                          Koszt osobisty
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 px-4 py-3 text-slate-700">Ubezpieczenie (dni służbowe)</td>
                        <td className="border border-slate-300 px-4 py-3 text-green-700 font-semibold">
                          <CheckCircle2 className="inline h-4 w-4 mr-1" />
                          Tak
                        </td>
                        <td className="border border-slate-300 px-4 py-3 text-slate-500">—</td>
                        <td className="border border-slate-300 px-4 py-3 text-sm text-slate-600">
                          Ubezpieczenie delegacyjne
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 px-4 py-3 text-slate-700">Ubezpieczenie (dni prywatne)</td>
                        <td className="border border-slate-300 px-4 py-3 text-slate-500">—</td>
                        <td className="border border-slate-300 px-4 py-3 text-red-700 font-semibold">
                          <XCircle className="inline h-4 w-4 mr-1" />
                          Tak
                        </td>
                        <td className="border border-slate-300 px-4 py-3 text-sm text-slate-600">
                          Pracownik wykupuje turystyczne
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 px-4 py-3 text-slate-700">Transport lokalny (służbowy)</td>
                        <td className="border border-slate-300 px-4 py-3 text-green-700 font-semibold">
                          <CheckCircle2 className="inline h-4 w-4 mr-1" />
                          Tak
                        </td>
                        <td className="border border-slate-300 px-4 py-3 text-slate-500">—</td>
                        <td className="border border-slate-300 px-4 py-3 text-sm text-slate-600">
                          Taxi, komunikacja do miejsca spotkań
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 px-4 py-3 text-slate-700">Transport lokalny (prywatny)</td>
                        <td className="border border-slate-300 px-4 py-3 text-slate-500">—</td>
                        <td className="border border-slate-300 px-4 py-3 text-red-700 font-semibold">
                          <XCircle className="inline h-4 w-4 mr-1" />
                          Tak
                        </td>
                        <td className="border border-slate-300 px-4 py-3 text-sm text-slate-600">
                          Koszt osobisty
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Insurance section */}
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                  <Shield className="h-8 w-8 text-slate-700" />
                  Kwestie ubezpieczeniowe
                </h2>

                <Alert className="mb-8 border-red-200 bg-red-50">
                  <AlertCircle className="h-5 w-5 text-red-700" />
                  <AlertTitle className="text-lg font-bold text-red-900">
                    Krytyczna kwestia prawna
                  </AlertTitle>
                  <AlertDescription className="text-red-900 mt-2">
                    <strong>Ubezpieczenie delegacyjne NIE OBEJMUJE dni prywatnych.</strong> Jeśli pracownik ulegnie wypadkowi podczas weekendu bleisure i nie ma własnego ubezpieczenia turystycznego, może to prowadzić do roszczeń prawnych wobec pracodawcy.
                  </AlertDescription>
                </Alert>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                  Rozwiązania dla firm:
                </h3>

                <div className="space-y-4 mb-8">
                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Opcja 1: Obowiązkowe własne ubezpieczenie pracownika</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700 mb-3">
                        <strong>Jak działa:</strong> Pracownik musi okazać polisę turystyczną pokrywającą dni prywatne jako warunek zatwierdzenia bleisure.
                      </p>
                      <p className="text-sm text-slate-600">
                        ✅ <strong>Zaleta:</strong> Zero ryzyka dla firmy, jasne rozgraniczenie odpowiedzialności<br/>
                        ❌ <strong>Wada:</strong> Dodatkowy koszt dla pracownika (~50-150 PLN za weekend)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Opcja 2: Firma oferuje rozszerzone ubezpieczenie jako benefit</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700 mb-3">
                        <strong>Jak działa:</strong> Firma wykupuje rozszerzoną polisę pokrywającą również dni prywatne, ale jasno komunikuje, że to świadczenie dodatkowe (benefit).
                      </p>
                      <p className="text-sm text-slate-600">
                        ✅ <strong>Zaleta:</strong> Większa atrakcyjność benefitu, brak dodatkowych czynności dla pracownika<br/>
                        ⚠️ <strong>Uwaga:</strong> Koszt ubezpieczenia dni prywatnych może być uznany za przychód pracownika (opodatkowany)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Opcja 3: Hybrydowe rozwiązanie</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700 mb-3">
                        <strong>Jak działa:</strong> Firma dopłaca 50% do ubezpieczenia turystycznego pracownika lub oferuje zniżkę u partnera ubezpieczeniowego.
                      </p>
                      <p className="text-sm text-slate-600">
                        ✅ <strong>Zaleta:</strong> Balans między atrakcyjnością a kosztami<br/>
                        ❌ <strong>Wada:</strong> Wymaga obsługi administracyjnej (zwrot 50% kosztu polisy)
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Travel Policy */}
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                  <FileText className="h-8 w-8 text-slate-700" />
                  Jak stworzyć Travel Policy z sekcją Bleisure?
                </h2>

                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  Skuteczna Travel Policy Bleisure powinna być <strong>jasna, zwięzła i zgodna z prawem</strong>. Poniżej gotowy szablon do adaptacji w Twojej firmie.
                </p>

                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <FileText className="h-6 w-6" />
                    Szablon Travel Policy – Sekcja Bleisure
                  </h3>
                  
                  <div className="space-y-6 text-slate-100">
                    <div>
                      <h4 className="text-lg font-bold mb-2">1. Definicja Bleisure Travel</h4>
                      <p className="text-sm leading-relaxed">
                        Bleisure to połączenie podróży służbowej z urlopem prywatnym, w ramach którego pracownik przedłuża swój pobyt w miejscu delegacji o dodatkowe dni na własny koszt, wykorzystując firmowy bilet lotniczy. Bleisure jest benefitem pracowniczym oferowanym dobrowolnie przez pracodawcę.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold mb-2">2. Warunki kwalifikacji</h4>
                      <p className="text-sm leading-relaxed mb-2">
                        Pracownik może ubiegać się o bleisure, jeśli spełnia następujące kryteria:
                      </p>
                      <ul className="text-sm space-y-1 ml-6">
                        <li>• Delegacja trwa minimum 3 dni robocze</li>
                        <li>• Pracownik ma dostępne dni urlopowe</li>
                        <li>• Przedłużenie pobytu nie generuje wyższych kosztów biletu lotniczego (lub je redukuje)</li>
                        <li>• Pracownik nie jest w okresie próbnym</li>
                        <li>• Nie ma zaległych zadań wymagających natychmiastowego powrotu</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold mb-2">3. Proces zatwierdzania</h4>
                      <p className="text-sm leading-relaxed mb-2">
                        Wniosek o bleisure wymaga zatwierdzenia:
                      </p>
                      <ul className="text-sm space-y-1 ml-6">
                        <li>• Bezpośredniego przełożonego (zgodę na wykorzystanie urlopu)</li>
                        <li>• Działu HR (weryfikacja dostępności dni urlopowych)</li>
                        <li>• Travel Managera / Działu finansowego (sprawdzenie kosztów biletu)</li>
                      </ul>
                      <p className="text-sm leading-relaxed mt-2">
                        <strong>Termin:</strong> Wniosek należy złożyć minimum 14 dni przed planowanym wylotem.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold mb-2">4. Zasady rozliczania kosztów</h4>
                      <p className="text-sm leading-relaxed mb-2">
                        <strong>Firma pokrywa:</strong>
                      </p>
                      <ul className="text-sm space-y-1 ml-6 mb-3">
                        <li>• Bilet lotniczy (jeśli koszt zmiany daty powrotu ≤0 PLN)</li>
                        <li>• Hotel za dni służbowe (według limitów Travel Policy)</li>
                        <li>• Diety za dni służbowe</li>
                        <li>• Ubezpieczenie delegacyjne (dni służbowe)</li>
                        <li>• Transport lokalny związany z celami służbowymi</li>
                      </ul>
                      <p className="text-sm leading-relaxed mb-2">
                        <strong>Pracownik pokrywa:</strong>
                      </p>
                      <ul className="text-sm space-y-1 ml-6">
                        <li>• Hotel za dni prywatne</li>
                        <li>• Wyżywienie za dni prywatne</li>
                        <li>• Ubezpieczenie turystyczne (dni prywatne)</li>
                        <li>• Transport lokalny i atrakcje turystyczne</li>
                        <li>• Wszystkie dodatkowe koszty związane z urlopem</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold mb-2">5. Kwestie ubezpieczeniowe</h4>
                      <p className="text-sm leading-relaxed">
                        Pracownik jest zobowiązany do wykupienia własnego ubezpieczenia turystycznego pokrywającego dni prywatne. Pracownik musi przedłożyć kopię polisy przed wyruszeniem w podróż. Firma nie ponosi odpowiedzialności za zdarzenia mające miejsce w trakcie dni urlopowych.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold mb-2">6. Odpowiedzialność pracownika</h4>
                      <ul className="text-sm space-y-1 ml-6">
                        <li>• Pracownik musi być dostępny telefonicznie/mailowo w przypadku pilnych spraw służbowych</li>
                        <li>• Bagaż firmowy (laptop, dokumenty) pozostaje pod odpowiedzialnością pracownika również podczas dni prywatnych</li>
                        <li>• Pracownik zobowiązuje się do przestrzegania polityki bezpieczeństwa IT firmy (VPN, zabezpieczenie urządzeń)</li>
                        <li>• W przypadku rezygnacji z bleisure po zarezerwowaniu biletu, pracownik może ponieść koszty zmiany rezerwacji</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold mb-2">7. Procedura awaryjna</h4>
                      <p className="text-sm leading-relaxed">
                        Jeśli pracownik zachoruje lub ulegnie wypadkowi podczas dni prywatnych, obowiązują standardowe procedury zgłaszania nieobecności. Firma może pokryć koszt wcześniejszego powrotu w wyjątkowych sytuacjach (decyzja HR + kierownictwa).
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold mb-2">8. Monitoring i ewaluacja</h4>
                      <p className="text-sm leading-relaxed">
                        Dział HR będzie monitorować wykorzystanie bleisure i zbierać feedback od pracowników co kwartał. Polityka może ulec modyfikacji w oparciu o zebrane dane i zmiany w przepisach prawnych.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Case Studies */}
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  Case Studies: Bleisure w praktyce
                </h2>

                <div className="space-y-6 mb-8">
                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        Case Study #1: TechCorp – 120 pracowników, branża IT
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-slate-700">
                        <strong>Wyzwanie:</strong> Wysoki turnover wśród developerów (25% rocznie), szczególnie tych podróżujących służbowo 8+ razy rocznie.
                      </p>
                      <p className="text-slate-700">
                        <strong>Rozwiązanie:</strong> Wdrożono politykę bleisure w Q2 2024. Każdy pracownik po 3-dniowej delegacji może przedłużyć pobyt o weekend.
                      </p>
                      <p className="text-slate-700">
                        <strong>Rezultaty (po 12 miesiącach):</strong>
                      </p>
                      <ul className="text-slate-700 space-y-1 ml-6">
                        <li>• 42% pracowników skorzystało z bleisure (średnio 2,3 razy/rok)</li>
                        <li>• Turnover spadł do 14% (spadek o 44%)</li>
                        <li>• Satysfakcja z delegacji wzrosła z 3,2/5 do 4,6/5</li>
                        <li>• ROI: koszt wdrożenia polityki ~8000 PLN, oszczędność na rekrutacji ~280000 PLN</li>
                      </ul>
                      <p className="text-slate-700">
                        <strong>Bonus:</strong> TechCorp zaoszczędziła również 23000 PLN na biletach (sobotnie powroty były tańsze niż piątkowe).
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        Case Study #2: ConsultPro – 45 pracowników, branża consulting
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-slate-700">
                        <strong>Wyzwanie:</strong> Konsultanci spędzali 150+ dni rocznie w delegacjach, co prowadziło do wypalenia zawodowego i konfliktów work-life balance.
                      </p>
                      <p className="text-slate-700">
                        <strong>Rozwiązanie:</strong> Wdrożono agresywną politykę bleisure: dla delegacji 5+ dni, automatyczna propozycja przedłużenia o 2 dni z 50% dopłatą firmy do hotelu.
                      </p>
                      <p className="text-slate-700">
                        <strong>Rezultaty (po 8 miesiącach):</strong>
                      </p>
                      <ul className="text-slate-700 space-y-1 ml-6">
                        <li>• 68% konsultantów regularnie korzysta z bleisure</li>
                        <li>• Wskaźnik wypalenia zawodowego spadł o 41% (pomiar kwartałowy, skala Maslach)</li>
                        <li>• Firma znalazła się w Top 10 "Best Places to Work" w branży consulting (po raz pierwszy w historii)</li>
                        <li>• Koszt dodatkowy dla firmy: ~45000 PLN/rok (dopłaty do hoteli), zwrot w postaci mniejszego absenteeism: ~120000 PLN/rok</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 bg-purple-50">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        Case Study #3: GlobalRetail – 200 pracowników, e-commerce
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-slate-700">
                        <strong>Wyzwanie:</strong> Trudności w rekrutacji Travel Managerów i regionalnych menedżerów gotowych do częstych podróży.
                      </p>
                      <p className="text-slate-700">
                        <strong>Rozwiązanie:</strong> Bleisure jako główny element Employer Value Proposition w ogłoszeniach rekrutacyjnych. Hasło: "Zwiedzaj świat, pracując z nami".
                      </p>
                      <p className="text-slate-700">
                        <strong>Rezultaty (po 6 miesiącach):</strong>
                      </p>
                      <ul className="text-slate-700 space-y-1 ml-6">
                        <li>• 3,2x więcej aplikacji na stanowiska wymagające podróży (vs. rok wcześniej)</li>
                        <li>• Jakość kandydatów wzrosła (wskaźnik pass-rate w rekrutacji: 18% → 31%)</li>
                        <li>• Time-to-hire skrócił się o 22 dni (z 64 do 42 dni)</li>
                        <li>• 34% nowych pracowników wskazało bleisure jako czynnik decydujący o wyborze oferty</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* FAQ Section */}
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                  FAQ – Najczęściej zadawane pytania
                </h2>

                <div className="space-y-4 mb-12">
                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Czym jest Bleisure Travel i jak działa w praktyce?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700">
                        Bleisure (Business + Leisure) to połączenie podróży służbowej z urlopem. Pracownik pozostaje 2-5 dni dłużej w miejscu delegacji na koszt własny, wykorzystując firmowy bilet lotniczy. Pracodawca pokrywa koszty części służbowej, pracownik sam płaci za dodatkowe dni (hotel, wyżywienie). W Polsce około 38% firm technologicznych oferuje taki benefit.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Jakie są korzyści Bleisure dla pracodawcy?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700">
                        Kluczowe korzyści to: zwiększona satysfakcja pracowników (78% chętniej przyjmuje delegacje z opcją bleisure), niższy współczynnik wypalenia zawodowego (redukcja o 34%), lepszy Employer Branding, wyższa retencja talentów (o 23%), oraz możliwość optymalizacji kosztów biletów (wykorzystanie biletu powrotnego z późniejszą datą jest często tańsze niż zmiana rezerwacji).
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Jak rozliczyć podatkowo podróż Bleisure?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700">
                        Część służbowa delegacji (dni robocze + zwykły koszt powrotu) = koszty uzyskania przychodu dla firmy. Dodatkowe dni urlopowe = koszt osobisty pracownika (hotel, wyżywienie nie podlegają zwrotowi). Bilet lotniczy: jeśli różnica między biletem z wcześniejszym a późniejszym powrotem jest minimalna lub ujemna, można ją wliczyć w koszty delegacji. Kluczowe: jasne rozdzielenie kosztów w dokumentacji.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Czy ubezpieczenie służbowe obejmuje dni prywatne w Bleisure?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700">
                        Standardowe ubezpieczenie delegacyjne NIE obejmuje dni prywatnych. Pracownik musi wykupić własne ubezpieczenie turystyczne na dodatkowe dni lub firma może oferować rozszerzony pakiet jako benefit (z jasnym zapisem, że to świadczenie dodatkowe podlegające opodatkowaniu).
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Jak stworzyć Travel Policy uwzględniającą Bleisure?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700">
                        Skuteczna Travel Policy Bleisure powinna zawierać: definicję bleisure, warunki kwalifikacji (np. minimum 3 dni delegacji), proces zatwierdzania (przełożony + HR), zasady rozliczania kosztów, kwestie ubezpieczeniowe, odpowiedzialność pracownika, oraz procedurę zmiany rezerwacji lotniczej. Kluczowe jest zachowanie transparentności i zgodności z prawem podatkowym. Zobacz gotowy szablon powyżej w artykule.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Jakie są najczęstsze błędy firm wdrażających Bleisure?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700">
                        Najczęstsze błędy to: brak pisemnej polityki (ryzyko nierównego traktowania), nieprecyzyjne rozliczenie kosztów (problemy z ZUS/US), brak komunikacji o ubezpieczeniu (ryzyko prawne dla firmy), niedoprecyzowanie odpowiedzialności za bagaż firmowy podczas dni prywatnych, oraz brak procedury awaryjnej (co jeśli pracownik zachoruje podczas urlopu po delegacji).
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Summary */}
                <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-8 mt-12 border border-purple-200">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Podsumowanie</h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-4">
                    Bleisure Travel to nie fanaberia, ale realny benefit biznesowy. Firmy, które wdrażają przemyślaną politykę bleisure, zyskują:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span><strong>Wyższą retencję talentów</strong> – pracownicy zostają dłużej w firmie oferującej elastyczność</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span><strong>Lepszy Employer Branding</strong> – bleisure wyróżnia firmę na rynku pracy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span><strong>Niższe wypalenie zawodowe</strong> – delegacje stają się bardziej znośne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span><strong>Potencjalne oszczędności</strong> – bilety z sobotnim powrotem bywają tańsze</span>
                    </li>
                  </ul>
                  <p className="text-lg text-slate-700 leading-relaxed mt-4">
                    Kluczem do sukcesu jest <strong>jasna, pisemna Travel Policy</strong> oraz zgodność z przepisami podatkowymi i ubezpieczeniowymi. Z gotowym szablonem powyżej możesz wdrożyć bleisure w swojej firmie w ciągu 2-4 tygodni.
                  </p>
                </div>

                {/* CTA Box */}
                <div className="bg-slate-900 text-white rounded-xl p-8 mt-12">
                  <h3 className="text-2xl font-bold mb-4">Czy Twój lot służbowy był opóźniony lub anulowany?</h3>
                  <p className="text-slate-200 mb-6">
                    Nawet jeśli podróżujesz w ramach bleisure, <Link href="/odszkodowanie-lot-sluzbowy" className="underline hover:text-white">przysługuje Ci odszkodowanie</Link> za odwołane lub opóźnione loty. Sprawdź swoje prawa w ClaimWinger – to zajmie tylko 2 minuty.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://claimwinger.com/pl/odwolany-lot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-semibold"
                    >
                      Sprawdź odwołany lot
                    </a>
                    <a
                      href="https://claimwinger.com/pl/opozniony-lot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-semibold border border-slate-700"
                    >
                      Sprawdź opóźniony lot
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Przeczytaj również</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/artykuly/business-class-vs-premium-economy"
                  className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-all group"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-700">
                    Business Class vs Premium Economy
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Analiza kosztów i efektywności dla Travel Managerów
                  </p>
                </Link>

                <Link
                  href="/pracodawca-a-odszkodowanie"
                  className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-all group"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-700">
                    Pracodawca a odszkodowanie
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Czy firma może przejąć odszkodowanie należne pracownikowi?
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

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