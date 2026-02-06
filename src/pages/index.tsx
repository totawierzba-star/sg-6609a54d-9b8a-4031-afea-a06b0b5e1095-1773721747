import { SEO } from "@/components/SEO";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { Briefcase, Scale, FileText, Users, CheckCircle2, ArrowRight, Star, Plane, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bizneslot.info/#organization",
        "name": "bizneslot.info",
        "url": "https://bizneslot.info",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bizneslot.info/og-image.png"
        },
        "description": "Portal edukacyjny o prawach pasażerów w podróżach służbowych",
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://bizneslot.info/#website",
        "url": "https://bizneslot.info",
        "name": "bizneslot.info",
        "description": "Prawa pasażerów w podróżach służbowych",
        "publisher": {
          "@id": "https://bizneslot.info/#organization"
        },
        "inLanguage": "pl-PL"
      },
      {
        "@type": "WebPage",
        "@id": "https://bizneslot.info/#webpage",
        "url": "https://bizneslot.info",
        "name": "bizneslot.info – Prawa pasażerów w podróżach służbowych",
        "isPartOf": {
          "@id": "https://bizneslot.info/#website"
        },
        "about": {
          "@id": "https://bizneslot.info/#organization"
        },
        "description": "Kompleksowy portal edukacyjny o prawach pracowników w delegacjach lotniczych. Dowiedz się, co Ci przysługuje, gdy lot służbowy zostanie opóźniony lub anulowany.",
        "inLanguage": "pl-PL"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="bizneslot.info – Prawa pasażerów w podróżach służbowych"
        description="Kompleksowy portal edukacyjny o prawach pracowników w delegacjach lotniczych. Dowiedz się, co Ci przysługuje, gdy lot służbowy zostanie opóźniony lub anulowany."
        url="https://bizneslot.info"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Header */}
        <header 
          className={`
            fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300
            ${scrolled 
              ? 'bg-slate-900/95 backdrop-blur-md shadow-xl py-3' 
              : 'bg-slate-900 py-4'
            }
          `}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link href="/" className={`
                text-2xl font-bold flex items-center gap-2 transition-all duration-300
                ${scrolled ? 'scale-95' : 'scale-100'}
              `}>
                <img 
                  src="/bizneslotlogotyp.png" 
                  alt="BiznesLot.info" 
                  className={`
                    w-auto transition-all duration-300
                    ${scrolled ? 'h-7' : 'h-8'}
                  `}
                />
                <span className={`transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
                  BiznesLot.info
                </span>
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link href="/odszkodowanie-lot-sluzbowy" className="hover:text-slate-300 transition-colors">
                  Odszkodowania
                </Link>
                <Link href="/bilet-firmowy-prawa" className="hover:text-slate-300 transition-colors">
                  Bilety firmowe
                </Link>
                <Link href="/artykuly" className="hover:text-slate-300 transition-colors">
                  Artykuły
                </Link>
                <Link href="/o-autorze" className="hover:text-slate-300 transition-colors">
                  O autorze
                </Link>
              </nav>
              <MobileNav currentPath="/" />
            </div>
          </div>
        </header>

        {/* Spacer to prevent content from hiding under fixed header */}
        <div className="h-16"></div>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm text-slate-700 mb-6 animate-fade-in">
                <Shield className="h-4 w-4" />
                Portal ekspercki dla podróżujących służbowo
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight animate-fade-in-up">
                Twoje prawa w podróżach służbowych
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
                Kompleksowy przewodnik po prawach pasażera w delegacjach. Dowiedz się, co Ci przysługuje, 
                gdy lot służbowy zostanie opóźniony lub anulowany – i kto ma prawo do odszkodowania.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
                <Button asChild size="lg" className="text-lg">
                  <Link href="/odszkodowanie-lot-sluzbowy">
                    Poznaj swoje prawa
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg">
                  <Link href="/anulowany-lot-delegacja">
                    Anulowany lot w delegacji
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-slate-200 hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-slate-700 mb-4" />
                  <CardTitle className="text-xl">Odszkodowanie należy do Ciebie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Nawet jeśli firma kupuje bilet, odszkodowanie przysługuje pasażerowi – czyli Tobie. 
                    To Twoje prawo zapisane w rozporządzeniu UE 261/2004.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <Scale className="h-10 w-10 text-slate-700 mb-4" />
                  <CardTitle className="text-xl">Jasne zasady prawne</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Wyjaśniamy, co mówi prawo europejskie o odszkodowaniach w przypadku opóźnień 
                    i anulacji lotów w delegacjach służbowych.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <FileText className="h-10 w-10 text-slate-700 mb-4" />
                  <CardTitle className="text-xl">Praktyczne porady</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Jak postępować w delegacji, jak dokumentować zdarzenie i jak rozliczyć 
                    nieplanowane koszty z działem HR lub księgowością.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Topics */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Najważniejsze tematy
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Kompleksowe informacje o prawach pasażera w kontekście podróży służbowych
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/odszkodowanie-lot-sluzbowy" className="group">
                <Card className="border-slate-200 hover:border-slate-400 transition-all hover:shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-slate-700 transition-colors flex items-start justify-between">
                      Odszkodowanie za lot służbowy
                      <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all" />
                    </CardTitle>
                    <CardDescription className="text-base">
                      Czy pracownik ma prawo do odszkodowania za lot? Komu przysługują pieniądze, 
                      jeśli bilet kupuje firma? Wszystko, co musisz wiedzieć o odszkodowaniach w delegacjach.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/anulowany-lot-delegacja" className="group">
                <Card className="border-slate-200 hover:border-slate-400 transition-all hover:shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-slate-700 transition-colors flex items-start justify-between">
                      Anulowany lot w delegacji
                      <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all" />
                    </CardTitle>
                    <CardDescription className="text-base">
                      Co robić, gdy lot służbowy zostanie odwołany? Jakie masz prawa, jak dokumentować 
                      sytuację i jak odzyskać dodatkowe koszty poniesione w delegacji?
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/opozniony-lot-delegacja" className="group">
                <Card className="border-slate-200 hover:border-slate-400 transition-all hover:shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-slate-700 transition-colors flex items-start justify-between">
                      Opóźniony lot w delegacji
                      <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all" />
                    </CardTitle>
                    <CardDescription className="text-base">
                      Kiedy opóźnienie daje prawo do odszkodowania? Jak rozliczyć przedłużoną delegację 
                      z pracodawcą i co zrobić z niewykorzystanym noclegiem?
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/bilet-firmowy-prawa" className="group">
                <Card className="border-slate-200 hover:border-slate-400 transition-all hover:shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-slate-700 transition-colors flex items-start justify-between">
                      Bilet firmowy a Twoje prawa
                      <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all" />
                    </CardTitle>
                    <CardDescription className="text-base">
                      Czy fakt, że bilet opłaca firma, zmienia Twoje prawa? Kto jest pasażerem w świetle 
                      prawa i co to oznacza dla odszkodowania za lot służbowy?
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/pracodawca-a-odszkodowanie" className="group">
                <Card className="border-slate-200 hover:border-slate-400 transition-all hover:shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-slate-700 transition-colors flex items-start justify-between">
                      Pracodawca a odszkodowanie lotnicze
                      <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all" />
                    </CardTitle>
                    <CardDescription className="text-base">
                      Czy musisz oddać odszkodowanie firmie? Co mówią przepisy, a co polityka wewnętrzna? 
                      Relacje między pracownikiem a pracodawcą w kontekście rekompensaty lotniczej.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-900 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Miałeś problem z lotem w delegacji?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Jeśli Twój lot służbowy był opóźniony o ponad 3 godziny lub został odwołany, 
              możesz być uprawniony do odszkodowania. Sprawdź swoje prawa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <a href="https://claimwinger.com/pl/odwolany-lot" target="_blank" rel="noopener noreferrer">
                  Sprawdź swoją rekompensatę
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Najnowsze artykuły */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Najnowsze artykuły</h2>
            <p className="text-slate-600 mb-8">Praktyczne porady dla profesjonalistów podróżujących służbowo</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/artykuly/ranking-linii-lotniczych-business-class" className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                      <Award className="h-4 w-4" />
                      <span>Travel Management</span>
                      <span className="ml-auto">12 min</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      Ranking linii lotniczych Business Class 2026
                    </h3>
                    <p className="text-slate-600 text-sm">
                      TOP 10 najlepszych linii lotniczych w klasie biznes. Porównanie produktów, lie-flat seats, catering. Które wybierać dla podróży służbowych?
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/artykuly/programy-lojalnosciowe-dla-firm" className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                      <Award className="h-4 w-4" />
                      <span>Travel Management</span>
                      <span className="ml-auto">14 min</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      TOP 5 programów lojalnościowych dla firm
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Miles & More vs Flying Blue vs Executive Club. Który program wybrać? Analiza ROI i corporate deals dla Travel Managerów.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/artykuly/karta-statusowa-lounge" className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                      <Star className="h-4 w-4" />
                      <span>Travel Benefits</span>
                      <span className="ml-auto">11 min</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      Karta statusowa a wstęp do lounge
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Wszystko o statusach Silver, Gold, Platinum. Dostęp do lounge, bagaż, priority boarding. Ile warte? Jak zdobyć?
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <img src="/bizneslotlogotyp.png" alt="BiznesLot.info" className="h-8 w-auto" />
                  BiznesLot.info
                </h3>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-300 mb-4">Tematy</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/odszkodowanie-lot-sluzbowy" className="text-sm text-slate-400 hover:text-white transition-colors">
                      Odszkodowanie za lot służbowy
                    </Link>
                  </li>
                  <li>
                    <Link href="/anulowany-lot-delegacja" className="text-sm text-slate-400 hover:text-white transition-colors">
                      Anulowany lot
                    </Link>
                  </li>
                  <li>
                    <Link href="/opozniony-lot-delegacja" className="text-sm text-slate-400 hover:text-white transition-colors">
                      Opóźniony lot
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-300 mb-4">Więcej</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/bilet-firmowy-prawa" className="text-sm text-slate-400 hover:text-white transition-colors">
                      Bilet firmowy
                    </Link>
                  </li>
                  <li>
                    <Link href="/pracodawca-a-odszkodowanie" className="text-sm text-slate-400 hover:text-white transition-colors">
                      Pracodawca a odszkodowanie
                    </Link>
                  </li>
                  <li>
                    <Link href="/o-autorze" className="text-sm text-slate-400 hover:text-white transition-colors">
                      O autorze
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-300 mb-4">Sprawdź odszkodowanie</h3>
                <p className="text-sm text-slate-400 mb-3">
                  Korzystamy z usług ClaimWinger do weryfikacji uprawnień.
                </p>
                <Button asChild variant="outline" size="sm">
                  <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer">
                    ClaimWinger.com
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
              <p>© 2026 bizneslot.info. Portal edukacyjny o prawach pasażerów w podróżach służbowych.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}