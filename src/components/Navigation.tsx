import Link from "next/link";
import { useRouter } from "next/router";
import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MobileNav } from "@/components/MobileNav";
import { useLocale } from "@/contexts/LocaleContext";
import { translations } from "@/lib/translations";

export function Navigation() {
  const router = useRouter();
  const { locale } = useLocale();
  const t = translations[locale];

  const isActive = (path: string) => router.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
            <Plane className="w-6 h-6" />
            <span className="font-bold text-xl">BiznesLot</span>
          </Link>

          <nav className="hidden md:flex gap-4">
            <Link
              href="/odszkodowanie-lot-sluzbowy"
              className={isActive("/odszkodowanie-lot-sluzbowy") 
                ? "text-white font-medium text-sm" 
                : "text-slate-300 hover:text-white transition-colors text-sm"}
            >
              {t.nav.businessCompensation}
            </Link>
            <Link
              href="/anulowany-lot-delegacja"
              className={isActive("/anulowany-lot-delegacja") 
                ? "text-white font-medium text-sm" 
                : "text-slate-300 hover:text-white transition-colors text-sm"}
            >
              {t.nav.cancelledFlight}
            </Link>
            <Link
              href="/opozniony-lot-delegacja"
              className={isActive("/opozniony-lot-delegacja") 
                ? "text-white font-medium text-sm" 
                : "text-slate-300 hover:text-white transition-colors text-sm"}
            >
              {t.nav.delayedFlight}
            </Link>
            <Link
              href="/bilet-firmowy-prawa"
              className={isActive("/bilet-firmowy-prawa") 
                ? "text-white font-medium text-sm" 
                : "text-slate-300 hover:text-white transition-colors text-sm"}
            >
              {t.nav.ticketRights}
            </Link>
            <Link
              href="/pracodawca-a-odszkodowanie"
              className={isActive("/pracodawca-a-odszkodowanie") 
                ? "text-white font-medium text-sm" 
                : "text-slate-300 hover:text-white transition-colors text-sm"}
            >
              {t.nav.employerCompensation}
            </Link>
            <Link
              href="/artykuly"
              className={isActive("/artykuly") 
                ? "text-white font-medium text-sm" 
                : "text-slate-300 hover:text-white transition-colors text-sm"}
            >
              {t.nav.articles}
            </Link>
            <Link
              href="/o-autorze"
              className={isActive("/o-autorze") 
                ? "text-white font-medium text-sm" 
                : "text-slate-300 hover:text-white transition-colors text-sm"}
            >
              {t.nav.about}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm" className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700">
                {t.cta.checkCompensation}
              </Button>
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}