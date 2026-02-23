import { useRouter } from "next/router";
import { useLocale } from "@/contexts/LocaleContext";
import { Button } from "./ui/button";

export function LanguageSwitcher() {
  const router = useRouter();
  const { locale, setLocale } = useLocale();

  const toggleLanguage = () => {
    const newLocale = locale === "pl" ? "en" : "pl";
    setLocale(newLocale);

    // Get current path without locale prefix
    const currentPath = router.asPath.replace(/^\/en/, "");
    
    // Build new path with or without /en prefix
    const newPath = newLocale === "en" 
      ? `/en${currentPath === "/" ? "" : currentPath}`
      : currentPath || "/";

    router.push(newPath);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-sm font-medium hover:text-[#FF6B35] transition-colors"
      aria-label={locale === "pl" ? "Switch to English" : "Przełącz na polski"}
    >
      {locale === "pl" ? "EN" : "PL"}
    </Button>
  );
}