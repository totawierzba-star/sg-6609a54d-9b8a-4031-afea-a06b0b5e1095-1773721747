import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { Navigation } from "@/components/Navigation";
import { useRouter } from "next/router";
import { Locale } from "@/lib/i18n";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // Default to 'pl' if locale is undefined, cast to Locale type
  const currentLocale = (router.locale || 'pl') as Locale;

  return (
    <LocaleProvider locale={currentLocale}>
      <Navigation />
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
      <Toaster />
    </LocaleProvider>
  );
}
