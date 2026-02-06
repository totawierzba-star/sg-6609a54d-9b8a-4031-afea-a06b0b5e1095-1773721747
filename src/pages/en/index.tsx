import { SEO } from "@/components/SEO";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, ArrowRight, Plane, Shield, FileText, Heart } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getTranslations } from "@/lib/translations";

const t = getTranslations("en");

export default function HomeEN() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SEO
        title="BusinessFlight.info - Your Rights in Business Travel"
        description="Comprehensive guide to airline passenger rights in business trips. Learn about compensation, employer responsibilities, and corporate ticket rights."
        url="https://bizneslot.info/en"
      />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Header */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-slate-900/95 backdrop-blur-md shadow-xl py-3"
              : "bg-slate-900 py-4"
          }`}
        >
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between">
              <Link
                href="/en"
                className="flex items-center space-x-3 group transition-all duration-300"
              >
                <img
                  src="/bizneslotlogotyp.png"
                  alt="BusinessFlight.info"
                  className={`transition-all duration-300 ${
                    isScrolled ? "h-7" : "h-8"
                  } w-auto`}
                />
                <span
                  className={`font-bold text-white transition-all duration-300 ${
                    isScrolled ? "text-xl" : "text-2xl"
                  }`}
                >
                  BusinessFlight.info
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                <Link href="/en">
                  <Button variant="ghost" className="text-white hover:bg-slate-800">
                    {t.nav.home}
                  </Button>
                </Link>
                <Link href="/en/pracodawca-a-odszkodowanie">
                  <Button variant="ghost" className="text-white hover:bg-slate-800">
                    {t.nav.employerCompensation}
                  </Button>
                </Link>
                <Link href="/en/anulowany-lot-delegacja">
                  <Button variant="ghost" className="text-white hover:bg-slate-800">
                    {t.nav.canceledFlight}
                  </Button>
                </Link>
                <Link href="/en/opozniony-lot-delegacja">
                  <Button variant="ghost" className="text-white hover:bg-slate-800">
                    {t.nav.delayedFlight}
                  </Button>
                </Link>
                <Link href="/en/bilet-firmowy-prawa">
                  <Button variant="ghost" className="text-white hover:bg-slate-800">
                    {t.nav.ticketRights}
                  </Button>
                </Link>
                <Link href="/en/artykuly">
                  <Button variant="ghost" className="text-white hover:bg-slate-800">
                    {t.nav.articles}
                  </Button>
                </Link>
                <Link href="/en/o-autorze">
                  <Button variant="ghost" className="text-white hover:bg-slate-800">
                    {t.nav.about}
                  </Button>
                </Link>
                <LanguageSwitcher />
              </div>

              {/* Mobile Menu Button */}
              <div className="flex md:hidden items-center gap-2">
                <LanguageSwitcher />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(true)}
                  className="text-white hover:bg-slate-800"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
            </nav>
          </div>
        </header>

        {/* Spacer for fixed header */}
        <div className="h-16"></div>

        <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} locale="en" />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-white opacity-50"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight animate-fade-in">
                {t.home.hero.title}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
                {t.home.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
                <Link href="/en/pracodawca-a-odszkodowanie">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
                  >
                    {t.home.hero.cta1}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/en/anulowany-lot-delegacja">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
                  >
                    {t.home.hero.cta2}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {t.home.intro.title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.home.intro.description}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              {t.home.features.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Link
                href="/en/pracodawca-a-odszkodowanie"
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {t.home.features.feature1.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.home.features.feature1.description}
                </p>
              </Link>

              <Link
                href="/en/anulowany-lot-delegacja"
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {t.home.features.feature2.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.home.features.feature2.description}
                </p>
              </Link>

              <Link
                href="/en/bilet-firmowy-prawa"
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {t.home.features.feature3.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.home.features.feature3.description}
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t.home.cta.title}
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                {t.home.cta.description}
              </p>
              <Link href="/en/pracodawca-a-odszkodowanie">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
                >
                  {t.home.cta.button}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-white">
                  <img src="/bizneslotlogotyp.png" alt="Logo" className="h-8 w-auto" />
                  BusinessFlight.info
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {t.footer.tagline}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white">{t.nav.yourRights}</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/en/pracodawca-a-odszkodowanie" className="hover:text-white transition-colors">
                      {t.nav.employerCompensation}
                    </Link>
                  </li>
                  <li>
                    <Link href="/en/anulowany-lot-delegacja" className="hover:text-white transition-colors">
                      {t.nav.canceledFlight}
                    </Link>
                  </li>
                  <li>
                    <Link href="/en/opozniony-lot-delegacja" className="hover:text-white transition-colors">
                      {t.nav.delayedFlight}
                    </Link>
                  </li>
                  <li>
                    <Link href="/en/bilet-firmowy-prawa" className="hover:text-white transition-colors">
                      {t.nav.ticketRights}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white">{t.common.articles}</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/en/artykuly" className="hover:text-white transition-colors">
                      {t.nav.articles}
                    </Link>
                  </li>
                  <li>
                    <Link href="/en/o-autorze" className="hover:text-white transition-colors">
                      {t.nav.about}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
              <p>
                © {new Date().getFullYear()} BusinessFlight.info. {t.footer.rights}
              </p>
              <p className="mt-2 flex items-center justify-center gap-1">
                {t.footer.madeWith} <Heart className="h-4 w-4 text-red-500 fill-red-500" /> {t.footer.madeWith}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}