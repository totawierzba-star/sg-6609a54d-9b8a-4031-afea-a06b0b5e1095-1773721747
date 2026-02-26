import { useRouter } from "next/router";
import { useLocale } from "@/contexts/LocaleContext";
import { Button } from "./ui/button";

// Map Polish paths to English paths and vice versa
const pathMap: Record<string, string> = {
  // PL → EN
  "/pracodawca-a-odszkodowanie": "/en/employer-compensation",
  "/anulowany-lot-delegacja": "/en/cancelled-business-trip",
  "/opozniony-lot-delegacja": "/en/delayed-business-trip",
  "/bilet-firmowy-prawa": "/en/corporate-ticket-rights",
  "/odszkodowanie-lot-sluzbowy": "/en/business-flight-compensation",
  "/o-autorze": "/en/about",
  "/artykuly": "/en/articles",
  
  // EN → PL
  "/en/employer-compensation": "/pracodawca-a-odszkodowanie",
  "/en/cancelled-business-trip": "/anulowany-lot-delegacja",
  "/en/delayed-business-trip": "/opozniony-lot-delegacja",
  "/en/corporate-ticket-rights": "/bilet-firmowy-prawa",
  "/en/business-flight-compensation": "/odszkodowanie-lot-sluzbowy",
  "/en/about": "/o-autorze",
  "/en/articles": "/artykuly",
  "/en": "/"
};

export function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = useLocale();

  const toggleLanguage = () => {
    const currentPath = router.asPath;
    
    // Try to find mapped path
    const mappedPath = pathMap[currentPath];
    
    if (mappedPath) {
      router.push(mappedPath);
    } else {
      // Fallback: toggle /en prefix
      const newLocale = locale === "pl" ? "en" : "pl";
      const pathWithoutLocale = currentPath.replace(/^\/en/, "");
      const newPath = newLocale === "en" 
        ? `/en${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`
        : pathWithoutLocale || "/";
      
      router.push(newPath);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={toggleLanguage}
      className="border-2 border-white/70 text-white hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35] transition-all duration-300 dark:border-white/50 dark:text-white"
      aria-label={locale === "pl" ? "Switch to English" : "Przełącz na polski"}
    >
      {locale === "pl" ? "EN" : "PL"}
    </Button>
  );
}