import { useRouter } from "next/router";
import { useLocale } from "@/contexts/LocaleContext";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";

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
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 hover:bg-slate-100 transition-colors"
      aria-label={locale === "pl" ? "Switch to English" : "Przełącz na polski"}
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{locale === "pl" ? "EN" : "PL"}</span>
    </Button>
  );
}