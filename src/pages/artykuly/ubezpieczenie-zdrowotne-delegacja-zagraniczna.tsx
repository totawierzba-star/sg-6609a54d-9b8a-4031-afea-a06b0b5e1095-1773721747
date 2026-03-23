import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Shield, Clock, CheckCircle, AlertTriangle, ArrowRight, FileText, Globe, CreditCard } from "lucide-react";

export default function UbezpieczenieZdrowotneDelegacjaZagraniczna() {
  return (
    <>
      <SEO
        title="Ubezpieczenie zdrowotne w delegacji zagranicznej — co musi zapewnić pracodawca? | bizneslot.info"
        description="EKUZ, ubezpieczenie firmowe, karta kredytowa z ubezpieczeniem — co faktycznie pokrywa leczenie za granicą podczas podróży służbowej? Obowiązki pracodawcy i luki w ochronie, które trzeba znać."
        canonicalUrl="https://bizneslot.info/artykuly/ubezpieczenie-zdrowotne-delegacja-zagraniczna"
        ogType="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Ubezpieczenie zdrowotne w delegacji zagranicznej — co musi zapewnić pracodawca?",
          description: "Przewodnik po ubezpieczeniu zdrowotnym w delegacji: EKUZ, polisa firmowa, ubezpieczenie na karcie kredytowej — zakresy, luki i obowiązki pracodawcy.",
          datePublished: "2026-03-22",
          author: { "@type": "Organization", name: "bizneslot.info" },
          publisher: { "@type": "Organization", name: "bizneslot.info" }
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <Shield className="w-4 h-4" />
            <span>Zdrowie w podróży</span>
            <span className="mx-2">·</span>
            <Clock className="w-4 h-4" />
            <span>8 min czytania</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Ubezpieczenie zdrowotne w delegacji zagranicznej — co musi zapewnić pracodawca?
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Hospitalizacja w Nowym Jorku: 50 000 USD za tydzień. Wypadek w Tokio:
            transport medyczny do Polski 80 000 EUR. Kto płaci — i co naprawdę
            pokrywa EKUZ, polisa firmowa i karta kredytowa?
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg mb-10">
          <h2 className="text-lg font-bold text-green-900 mb-2">Krótka odpowiedź</h2>
          <p className="text-green-800">
            Pracodawca ma <strong>obowiązek zapewnić pracownikowi ubezpieczenie zdrowotne</strong>
            na czas delegacji zagranicznej — EKUZ jest niewystarczające (nie działa poza UE,
            nie pokrywa transportu medycznego, ma wyłączenia). Minimalne wymagania
            dla polisy firmowej to: <strong>koszty leczenia min. 100 000 EUR</strong>,
            transport medyczny (repatriacja) i assistance 24/7.
            Ubezpieczenie z karty kredytowej może stanowić uzupełnienie —
            ale warunki aktywacji są restrykcyjne i pełne wykluczeń.
          </p>
        </div>

        {/* Porównanie opcji */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Trzy źródła ochrony ubezpieczeniowej — porównanie</h2>
          <p className="text-slate-700 mb-5">
            Pracownik w delegacji może być objęty ochroną z kilku źródeł jednocześnie.
            Problem polega na tym, że każde ma poważne luki — i trzeba je znać, zanim zajdzie potrzeba.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Źródło ochrony</th>
                  <th className="p-3 text-left">Zakres geograficzny</th>
                  <th className="p-3 text-left">Koszty leczenia</th>
                  <th className="p-3 text-left">Transport medyczny</th>
                  <th className="p-3 text-left">Assistance 24/7</th>
                  <th className="p-3 text-left">Ocena dla B2B</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3 font-semibold">EKUZ (NFZ)</td>
                  <td className="p-3 text-orange-700">Tylko UE/EOG + Szwajcaria</td>
                  <td className="p-3 text-orange-700">Publiczna opieka zdrowotna kraju</td>
                  <td className="p-3 text-red-700 font-medium">Nie pokrywa</td>
                  <td className="p-3 text-red-700">Brak</td>
                  <td className="p-3 text-red-700 font-medium">Niewystarczające</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-semibold">Polisa firmowa (grupowa)</td>
                  <td className="p-3 text-green-700">Zwykle cały świat</td>
                  <td className="p-3 text-green-700">Zależna od sumy — min. 100 000 EUR</td>
                  <td className="p-3 text-green-700">Tak (jeśli w zakresie)</td>
                  <td className="p-3 text-green-700">Tak</td>
                  <td className="p-3 text-green-700 font-medium">Właściwe narzędzie</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3 font-semibold">Ubezpieczenie na karcie kredytowej</td>
                  <td className="p-3 text-orange-700">Zależy od karty</td>
                  <td className="p-3 text-orange-700">Często ograniczona suma (20–50 000 EUR)</td>
                  <td className="p-3 text-orange-700">Często ograniczony zakres</td>
                  <td className="p-3 text-orange-700">Często tak</td>
                  <td className="p-3 text-orange-700 font-medium">Tylko jako uzupełnienie</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-semibold">Polisa indywidualna podróżna</td>
                  <td className="p-3 text-green-700">Cały świat (zależna od zakresu)</td>
                  <td className="p-3 text-green-700">Elastyczna suma</td>
                  <td className="p-3 text-green-700">Tak</td>
                  <td className="p-3 text-green-700">Tak</td>
                  <td className="p-3 text-green-700 font-medium">Dobra gdy brak firmowej</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* EKUZ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">EKUZ — co pokrywa, czego nie</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-900 mb-3">EKUZ pokrywa</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Leczenie w publicznych placówkach ochrony zdrowia w UE/EOG i Szwajcarii</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Nagłe zachorowania i wypadki wymagające natychmiastowej pomocy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Na tych samych zasadach co obywatel danego kraju (różne w każdym państwie)</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-900 mb-3">EKUZ NIE pokrywa</h3>
              <ul className="space-y-2 text-sm text-red-800">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Transport medyczny / repatriacja</strong> do Polski — to największa luka</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Leczenie poza UE/EOG — USA, Azja, Bliski Wschód, Ameryka Łacińska</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Leczenie w prywatnych klinikach (powszechne w wielu krajach UE)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Leczenie planowane lub choroby przewlekłe wymagające kontynuacji</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Assistance, organizacja pomocy, tłumaczenie, pomoc prawna</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-800">
                <strong>Praktyczna pułapka EKUZ w Niemczech i Francji:</strong> Lekarze rodzinni
                i specjaliści w tych krajach często pracują tylko w prywatnym systemie —
                EKUZ ich nie obejmuje. Pracownik musi zapłacić z własnej kieszeni
                i ubiegać się o zwrot, który może być częściowy lub odmówiony.
                Bez polisy uzupełniającej — ryzyko finansowe leży po stronie pracownika.
              </p>
            </div>
          </div>
        </section>

        {/* Polisa firmowa */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <Shield className="inline w-6 h-6 mr-2 text-blue-600" />
            Polisa firmowa — co sprawdzić przed delegacją
          </h2>

          <div className="space-y-4 mb-6">
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Suma ubezpieczenia kosztów leczenia</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Minimum dla USA/Kanady/Australii: 500 000 EUR lub bez limitu.
                  Dla Europy zachodniej: min. 100 000 EUR. Polisy z limitem 20 000–50 000 EUR
                  są niewystarczające dla krajów z drogą opieką zdrowotną — jeden dzień
                  na OIOM w Nowym Jorku to 5 000–20 000 USD.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <Globe className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Zakres geograficzny</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Sprawdź, czy polisa obejmuje wszystkie kraje, do których jeździsz.
                  Kraje z restrykcjami (strefy konfliktów, epidemie) mogą być wyłączone.
                  Wiele polis korporacyjnych ma osobny zakres dla USA/Kanady — weryfikuj
                  przed każdą trasą transatlantycką.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Transport medyczny i repatriacja</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Obowiązkowy element dla delegacji poza UE. Repatriacja karetką lotniczą
                  z Azji lub Ameryki to koszt 60 000–150 000 EUR — bez ubezpieczenia
                  pokrywa to pracownik lub jego rodzina. Polisa powinna obejmować
                  transport do Polski bez limitu sumy.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white border border-slate-200 rounded-lg p-4">
              <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Assistance 24/7 — numer telefonu</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Numer infolinii ubezpieczyciela powinien być zapisany w telefonie pracownika
                  przed każdą delegacją. Przy hospitalizacji za granicą ubezpieczyciel
                  zazwyczaj przejmuje organizację leczenia i komunikację ze szpitalem —
                  ale tylko jeśli zadzwonisz do nich w pierwszej kolejności.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Element polisy</th>
                  <th className="p-3 text-left">Minimum dla Europy</th>
                  <th className="p-3 text-left">Minimum dla USA/Azji</th>
                  <th className="p-3 text-left">Uwagi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3">Koszty leczenia</td>
                  <td className="p-3">100 000 EUR</td>
                  <td className="p-3 font-medium text-red-700">500 000 EUR / bez limitu</td>
                  <td className="p-3">USA bez limitu to standard w dobrej polisie korporacyjnej</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3">Transport medyczny</td>
                  <td className="p-3">Tak, bez limitu</td>
                  <td className="p-3">Tak, bez limitu</td>
                  <td className="p-3">Repatriacja karetką lotniczą to 60–150k EUR</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3">NNW (wypadek)</td>
                  <td className="p-3">100 000 PLN</td>
                  <td className="p-3">100 000 PLN</td>
                  <td className="p-3">Odszkodowanie dla rodziny przy śmierci / trwałym uszczerbku</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3">Bagaż</td>
                  <td className="p-3">5 000 PLN</td>
                  <td className="p-3">5 000 PLN</td>
                  <td className="p-3">Sprzęt elektroniczny często wyłączony z zakresu</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3">OC w życiu prywatnym</td>
                  <td className="p-3">200 000 PLN</td>
                  <td className="p-3">200 000 PLN</td>
                  <td className="p-3">Szkody wyrządzone osobom trzecim podczas delegacji</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Ubezpieczenie na karcie */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <CreditCard className="inline w-6 h-6 mr-2 text-blue-600" />
            Ubezpieczenie na karcie kredytowej — warunki aktywacji
          </h2>
          <p className="text-slate-700 mb-4">
            Wiele kart kredytowych premium (Visa Infinite, Mastercard World Elite)
            zawiera ubezpieczenie podróżne. Jednak jest ono obwarowane warunkami,
            które przy delegacjach firmowych mogą nie być spełnione.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-5">
            <h3 className="font-bold text-amber-900 mb-3">Typowe warunki aktywacji ubezpieczenia z karty</h3>
            <ul className="space-y-2 text-sm text-amber-800">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span><strong>Bilet opłacony kartą:</strong> większość polis wymaga, by lot lub hotel były opłacone daną kartą — przy rezerwacji przez TMC na kartę firmową pracownik może nie być objęty ubezpieczeniem swojej karty osobistej</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span><strong>Podróż służbowa vs prywatna:</strong> część polis kart wyłącza delegacje służbowe lub ogranicza zakres — sprawdź OWU (Ogólne Warunki Ubezpieczenia) swojej karty</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span><strong>Limity sum:</strong> karty premium oferują 50 000–150 000 EUR kosztów leczenia — wystarczające dla Europy, niewystarczające dla USA</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span><strong>Długość podróży:</strong> część polis kart ogranicza ochronę do 30–60 dni ciągłej podróży — przy długich delegacjach do Azji może wygasnąć</span>
              </li>
            </ul>
          </div>

          <p className="text-slate-700 text-sm">
            <strong>Wniosek:</strong> Ubezpieczenie z karty kredytowej to przydatny
            drugi poziom ochrony, ale nie zastępuje polisy firmowej. Przed delegacją
            warto sprawdzić OWU swojej karty — ale liczyć na nią jako podstawowe
            zabezpieczenie to błąd.
          </p>
        </section>

        {/* Obowiązki pracodawcy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Obowiązki pracodawcy — podstawa prawna</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-5">
            <h3 className="font-bold text-blue-900 mb-3">Kodeks pracy i delegacje zagraniczne</h3>
            <p className="text-sm text-blue-800 mb-3">
              Pracodawca wysyłający pracownika za granicę ma obowiązek:
            </p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Zapewnić bezpieczne i higieniczne warunki pracy — co obejmuje zabezpieczenie zdrowotne (art. 94 KP)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Pokryć koszty leczenia pracownika za granicą jeśli nie zapewnił ubezpieczenia (orzecznictwo SN)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Poinformować pracownika o warunkach i zakresie ubezpieczenia przed delegacją</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>W przypadku wypadku przy pracy za granicą — wypłacić świadczenia ZUS niezależnie od polis prywatnych</span>
              </li>
            </ul>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Sytuacja</th>
                  <th className="p-3 text-left">Odpowiedzialność</th>
                  <th className="p-3 text-left">Podstawa prawna</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3">Wypadek przy pracy za granicą</td>
                  <td className="p-3">ZUS (świadczenia) + ubezpieczyciel (polisa firmowa)</td>
                  <td className="p-3">Ustawa wypadkowa + KP</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3">Nagłe zachorowanie za granicą</td>
                  <td className="p-3">Ubezpieczyciel firmowy (lub EKUZ w UE)</td>
                  <td className="p-3">Umowa ubezpieczeniowa + obowiązek BHP pracodawcy</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3">Brak polisy firmowej, koszty leczenia</td>
                  <td className="p-3">Pracodawca (refundacja na podstawie KP)</td>
                  <td className="p-3">Art. 94 KP + orzecznictwo SN</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3">Śmierć pracownika za granicą</td>
                  <td className="p-3">ZUS (renta rodzinna) + polisa NNW + pracodawca (transport zwłok)</td>
                  <td className="p-3">Ustawa wypadkowa + regulaminy delegacji</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Co zrobić przed delegacją */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Checklist ubezpieczeniowy przed delegacją zagraniczną</h2>

          <div className="space-y-3">
            {[
              { step: 1, text: "Sprawdź, czy firma ma aktywną polisę korporacyjną obejmującą kraj delegacji — zapytaj HR lub dział administracji" },
              { step: 2, text: "Pobierz numer assistance ubezpieczyciela i zapisz w telefonie — nie w e-mailu, który możesz nie mieć dostępu w razie awarii" },
              { step: 3, text: "Wyrobij EKUZ w NFZ (wniosek online, ważna 6 miesięcy lub rok) — jako dodatkowe zabezpieczenie dla tras europejskich" },
              { step: 4, text: "Sprawdź OWU polisy firmowej pod kątem: sumy KL, zakresu geograficznego, wyłączeń (sporty ekstremalne, choroby przewlekłe), definicji wypadku przy pracy" },
              { step: 5, text: "Przy podróży do USA/Kanady/Australii — upewnij się, że polisa nie ma limitu KL lub ma min. 500 000 EUR/USD" },
              { step: 6, text: "Skopiuj dokumenty podróży (paszport, polisę, numer rezerwacji hotelu) do chmury i wyślij je zaufanej osobie w kraju" },
            ].map(({ step, text }) => (
              <div key={step} className="flex gap-4 items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">{step}</div>
                <p className="text-sm text-slate-700 pt-1">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>

          <div className="space-y-5">
            <div itemScope itemProp="mainEntity" itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy pracodawca musi zapewnić ubezpieczenie zdrowotne na delegację?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Tak — pracodawca ma obowiązek zapewnienia bezpiecznych warunków pracy,
                  co orzecznictwo Sądu Najwyższego rozciąga na obowiązek zabezpieczenia
                  zdrowotnego w podróży służbowej. Brak polisy i konieczność poniesienia
                  kosztów leczenia przez pracownika za granicą to naruszenie obowiązków
                  pracodawcy z art. 94 Kodeksu pracy. Pracownik może dochodzić zwrotu
                  kosztów leczenia od pracodawcy, jeśli polisa nie była zapewniona.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Co to jest EKUZ i jak go wyrobić?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  EKUZ (Europejska Karta Ubezpieczenia Zdrowotnego) to dokument
                  potwierdzający prawo do korzystania z publicznej opieki zdrowotnej
                  w krajach UE/EOG i Szwajcarii. Można go wyrobić online na stronie NFZ
                  (nfz.gov.pl) — wniosek jest prosty, karta wysyłana pocztą lub
                  dostępna jako wersja papierowa do wydruku (PZU EKUZ).
                  Ważna 6 miesięcy lub rok — wyrabiaj z wyprzedzeniem przed pierwszą
                  delegacją europejską.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Co zrobić, gdy zachoruję za granicą podczas delegacji?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Priorytet: zadzwoń na numer assistance ubezpieczyciela firmowego —
                  zanim pojedziesz do szpitala samodzielnie. Ubezpieczyciel organizuje
                  pomoc, wskazuje właściwą placówkę (w sieci ubezpieczyciela — brak
                  konieczności płatności z góry) i koordynuje leczenie.
                  Jeśli masz EKUZ — poinformuj szpital przy przyjęciu.
                  Zachowuj wszystkie rachunki i dokumentację medyczną do rozliczenia
                  z pracodawcą i ubezpieczycielem.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy koszty leczenia za granicą można wliczyć w koszty delegacji?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Tak — koszty leczenia poniesione przez pracownika podczas delegacji
                  zagranicznej podlegają zwrotowi przez pracodawcę, jeśli nie były
                  pokryte przez ubezpieczenie. Pracodawca zalicza je jako koszty
                  uzyskania przychodu. Warunek: dokumentacja (rachunki, faktury,
                  zaświadczenie lekarskie) i wykazanie związku z podróżą służbową.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Lot opóźniony lub odwołany podczas delegacji?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Ubezpieczenie chroni Cię przy problemach zdrowotnych — odszkodowanie EC 261
            przy problemach z lotem. Jeśli Twój lot był opóźniony o ponad 3 godziny
            lub odwołany, możesz dochodzić do 600 EUR odszkodowania.
          </p>
          <a
            href={"https://claimwinger.pl?utm_source=bizneslot&utm_medium=article&utm_campaign=ubezpieczenie-zdrowotne-delegacja-zagraniczna"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Sprawdź swoje roszczenie EC 261
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-blue-300 mt-4">
            ClaimWinger — dochodzenie odszkodowań EC 261 dla podróżnych służbowych
          </p>
        </section>

        {/* Nav */}
        <div className="mt-10 pt-6 border-t border-slate-200">
          <Link href="/artykuly" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            ← Wszystkie artykuły
          </Link>
        </div>

      </main>
    </>
  );
}
