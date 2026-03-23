import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, ArrowRight, Plane } from "lucide-react";

export default function OpoznienieNaLotnisku() {
  return (
    <>
      <SEO
        title="Opóźnienie na lotnisku — jak efektywnie pracować w oczekiwaniu?"
        description="Lot opóźniony o 2–4 godziny? Sprawdź jak zamienić czas oczekiwania na produktywną pracę: WiFi, miejsca do pracy, bezpieczeństwo danych i co zrobić z roszczeniem EC 261."
        canonicalUrl="https://bizneslot.info/artykuly/opoznienie-na-lotnisku-jak-pracowac"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Opóźnienie na lotnisku — jak efektywnie pracować w oczekiwaniu?",
            description:
              "Praktyczny przewodnik produktywnosci podczas opoznienia lotu: lounge, WiFi, bezpieczenstwo danych, co zrobic rownoczesnie z roszczeniem EC 261.",
            author: { "@type": "Organization", name: "BizneLot.info" },
            publisher: { "@type": "Organization", name: "BizneLot.info" },
            datePublished: "2026-03-22",
            dateModified: "2026-03-22",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Czy publiczne WiFi na lotnisku jest bezpieczne do pracy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Publiczne WiFi na lotnisku jest nieszyfrowane i podatne na ataki man-in-the-middle. Do pracy ze służbowymi danymi zawsze używaj VPN firmowego. Alternatywnie: hotspot z telefonu służbowego (LTE) jest znacznie bezpieczniejszy niż publiczne WiFi.",
                },
              },
              {
                "@type": "Question",
                name: "Co zrobic z roszczeniem EC 261 podczas oczekiwania na opóźniony lot?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Czas oczekiwania to idealny moment na przygotowanie roszczenia: zapisz numer lotu, planową i aktualną godzinę odlotu, zrób zdjęcie tablicy odlotów z opóźnieniem, zachowaj boarding pass. Formularz roszczenia można wypełnić w aplikacji ClaimWinger lub na stronie linii już podczas oczekiwania.",
                },
              },
              {
                "@type": "Question",
                name: "Ile godzin opoznienia daje prawo do posilkow od linii?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "EC 261/2004 nakłada na linię obowiązek zapewnienia posilkow i napojów już przy opóźnieniu 2 godzin (trasy do 1500 km), 3 godzin (1500-3500 km) lub 4 godzin (powyżej 3500 km). Jeśli linia nie zaoferuje vouchera, zachowaj paragony za jedzenie — masz prawo do zwrotu rozsądnych kosztów.",
                },
              },
            ],
          }),
        }}
      />

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl px-8 py-10 mb-8">
          <div className="flex items-center gap-2 text-blue-300 text-sm font-medium mb-3">
            <Plane className="w-4 h-4" />
            <span>Lotniska i obsługa naziemna</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">
            Opóźnienie na lotnisku — jak efektywnie pracować w oczekiwaniu?
          </h1>
          <p className="text-blue-100 text-lg">
            Lot opóźniony o 3 godziny to stracony czas albo — jeśli dobrze to rozegrasz —
            najspokojniejsze 3 godziny pracy w tygodniu. I do tego możesz złożyć roszczenie EC 261.
          </p>
        </div>

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl px-6 py-5 mb-8">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-1">
            Krótka odpowiedź
          </p>
          <p className="text-gray-800 font-medium">
            Pierwsze 15 minut opóźnienia: <strong>udokumentuj zakłócenie</strong> (tablica, boarding
            pass, czas). Kolejne 2–3 godziny: <strong>pracuj przez VPN lub hotspot</strong>, najlepiej
            w lounge. Równolegle: <strong>złóż roszczenie EC 261</strong> — przy opóźnieniu 3h+
            przysługuje odszkodowanie do 600 EUR.
          </p>
        </div>

        {/* Pierwsze kroki */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Pierwsze 15 minut — co zrobić od razu
          </h2>
          <div className="space-y-3">
            {[
              {
                krok: "1",
                czynnosc: "Zrób zdjęcie tablicy odlotów",
                szczegol: "Tablica z aktualnym statusem lotu i widoczną godziną — to Twój dowód opóźnienia przy roszczeniu EC 261. Zdjęcie z metadanymi czasowymi jest wystarczającym dowodem.",
              },
              {
                krok: "2",
                czynnosc: "Zapytaj obsługę o przyczynę i szacowany czas odlotu",
                szczegol: "Poproś o pisemne potwierdzenie lub przynajmniej zapamiętaj co powiedziano. Przyczyna opóźnienia wpływa na to, czy linia może powołać się na nadzwyczajne okoliczności.",
              },
              {
                krok: "3",
                czynnosc: "Sprawdź prawo do vouchera na jedzenie",
                szczegol: "Przy opóźnieniu 2h+ (krótkie trasy) lub 3h+ (długie trasy) linia jest zobowiązana do zapewnienia posiłków. Jeśli nie zaproponuje — zapytaj przy stanowisku lub zadzwoń na infolinię.",
              },
              {
                krok: "4",
                czynnosc: "Poinformuj odpowiednie osoby",
                szczegol: "Kontrahent, manager, hotel (jeśli przylot zbyt późny) — krótki SMS/e-mail teraz oszczędza problemy później.",
              },
            ].map((item) => (
              <div key={item.krok} className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-sm font-bold shrink-0">{item.krok}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.czynnosc}</p>
                  <p className="text-gray-600 text-sm">{item.szczegol}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gdzie pracować */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Gdzie pracować na lotnisku — od najlepszego do najgorszego
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-700 text-white text-xs font-bold shrink-0">1</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Lounge biznesowy</p>
                <p className="text-gray-600 text-sm">
                  Najlepsza opcja: stabilne WiFi, ciche miejsca do pracy, gniazdka przy każdym
                  fotelu, brak hałasu gate. Dostępny przez Priority Pass, klasę biznes lub status FFP.
                  Przy długim opóźnieniu — wejście jednorazowe może być uzasadnione.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-700 text-white text-xs font-bold shrink-0">2</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Restauracja lub kawiarnia przy terminalu</p>
                <p className="text-gray-600 text-sm">
                  Zwykle spokojniejsza niż strefa gate, dostępne gniazdka. Przy voucherze od linii —
                  bez dodatkowego kosztu. Uwaga: głośniejsza niż lounge, mniej prywatności przy
                  rozmowach biznesowych.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-500 text-white text-xs font-bold shrink-0">3</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Strefa poczekalni przy gate</p>
                <p className="text-gray-600 text-sm">
                  Wygodna — nie musisz monitorować tablicy. Gniazdka dostępne nierównomiernie.
                  Głośna przy pełnym ruchu, rozmowy przez telefon bywają trudne.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-red-100 p-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-400 text-white text-xs font-bold shrink-0">4</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Wolne miejsce przy strefie ogólnej</p>
                <p className="text-gray-600 text-sm">
                  Ostateczność — hałas, brak prywatności, trudności z koncentracją. Dobre na
                  przeglądanie e-maili, złe na pracę wymagającą skupienia lub rozmowy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WiFi i bezpieczeństwo */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            WiFi na lotnisku — bezpieczeństwo przede wszystkim
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-amber-800 mb-1">Publiczne WiFi lotniskowe = ryzyko</p>
                <p className="text-gray-700 text-sm">
                  Sieci publiczne na lotniskach są nieszyfrowane i podatne na ataki.
                  Nigdy nie używaj ich do: logowania do systemów firmowych bez VPN,
                  przeglądania poufnych dokumentów, wideokonferencji z wrażliwymi danymi.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { opcja: "VPN firmowy + WiFi lotniskowe", ocena: "Bezpieczne", kolor: "green" },
              { opcja: "Hotspot z telefonu służbowego (LTE/5G)", ocena: "Najbezpieczniejsze", kolor: "green" },
              { opcja: "WiFi w lounge (często oddzielna sieć)", ocena: "Bezpieczniejsze niż publiczne, ale nadal VPN zalecany", kolor: "amber" },
              { opcja: "Publiczne WiFi bez VPN", ocena: "Niezalecane do danych służbowych", kolor: "red" },
            ].map((item) => (
              <div key={item.opcja} className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-sm">
                <span className="text-gray-800">{item.opcja}</span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  item.kolor === "green" ? "bg-green-100 text-green-700" :
                  item.kolor === "amber" ? "bg-amber-100 text-amber-700" :
                  "bg-red-100 text-red-600"
                }`}>{item.ocena}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Co robić podczas oczekiwania */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Jak podzielić czas przy opóźnieniu 2–4 godzin
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Czas</th>
                  <th className="px-4 py-3 text-left">Zadanie</th>
                  <th className="px-4 py-3 text-left">Dlaczego teraz</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { czas: "0–15 min", zadanie: "Dokumentacja, vouchery, powiadomienia", dlaczego: "Informacje świeże, lotnisko jeszcze nie zdążyło zmienić statusu" },
                  { czas: "15–30 min", zadanie: "Złóż roszczenie EC 261 (jeśli opóźnienie 3h+)", dlaczego: "Dane lotu pod ręką, formularze szybkie w wypełnieniu" },
                  { czas: "30 min – 2h", zadanie: "Praca wymagająca skupienia (raporty, analizy, maile)", dlaczego: "Spokój przed szczytem ruchowym lotniska" },
                  { czas: "2h+", zadanie: "Wideokonferencje, zadania o mniejszym priorytecie", dlaczego: "Energia spada — zadania lżejsze lepiej znoszą zmęczenie" },
                ].map((row) => (
                  <tr key={row.czas} className="even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-blue-700 whitespace-nowrap">{row.czas}</td>
                    <td className="px-4 py-3 text-gray-800">{row.zadanie}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{row.dlaczego}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Roszczenie EC 261 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Złóż roszczenie EC 261 podczas oczekiwania — to zajmuje 5 minut
          </h2>
          <p className="text-gray-700 mb-3">
            Czas oczekiwania na lotnisku to idealny moment na złożenie roszczenia — masz
            pod ręką wszystkie dane: numer lotu, numery boarding passów, potwierdzenie
            rezerwacji. Po przylocie do celu trudniej się zmotywować do formalności.
          </p>
          <div className="space-y-2">
            {[
              "Zapisz lub zrób zdjęcie tablicy odlotów z widocznym opóźnieniem i aktualną godziną.",
              "Zachowaj boarding pass — fizyczny lub w aplikacji linii.",
              "Zanotuj planową i rzeczywistą godzinę odlotu i przylotu.",
              "Wypełnij formularz roszczenia przez ClaimWinger lub bezpośrednio do linii.",
              "Przy opóźnieniu 3h+ w celu docelowym — odszkodowanie 250–600 EUR.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Powiązane */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Powiązane artykuły</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/artykuly/lounge-biznesowy-okecie-jak-wejsc",
                label: "Lounge na Okęciu — co oferuje i jak wejść?",
              },
              {
                href: "/artykuly/lot-sluzbowy-opozniony-ponad-3-godziny-krok-po-kroku",
                label: "Lot opóźniony o 3h — krok po kroku",
              },
              {
                href: "/artykuly/ile-wynosi-odszkodowanie-opozniony-lot-sluzbowy",
                label: "Ile wynosi odszkodowanie za opóźniony lot?",
              },
              {
                href: "/artykuly/sila-wyzsza-lot-kiedy-linia-nie-placi-odszkodowania",
                label: "Siła wyższa — kiedy linia nie płaci?",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-xl border border-gray-200 p-4 hover:border-blue-400 hover:bg-blue-50 transition text-sm text-gray-700"
              >
                <ArrowRight className="w-4 h-4 text-blue-500 shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Najczęstsze pytania</h2>
          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">

            <div
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="border border-gray-200 rounded-xl p-5"
            >
              <h3 itemProp="name" className="font-semibold text-gray-900 mb-2">
                Czy linia jest zobowiązana do zapewnienia miejsca do pracy podczas opóźnienia?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Nie wprost. EC 261/2004 wymaga zapewnienia posiłków, napojów i — przy
                  opóźnieniu nocnym — zakwaterowania. Dostęp do lounge lub stanowiska pracy
                  nie jest objęty przepisami. Przy długich opóźnieniach niektóre linie
                  premium (LOT, Lufthansa) oferują vouchery do lounge, ale to dobra wola,
                  nie obowiązek.
                </p>
              </div>
            </div>

            <div
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="border border-gray-200 rounded-xl p-5"
            >
              <h3 itemProp="name" className="font-semibold text-gray-900 mb-2">
                Czy mogę wyjść ze strefy airside podczas długiego opóźnienia?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Technicznie tak — możesz wyjść ze strefy, ale musisz przejść ponowną
                  kontrolę bezpieczeństwa przy powrocie. Przy krótkim opóźnieniu (do 2h)
                  nie warto. Przy dłuższym i braku lounge — city lounge lub hotel lotniskowy
                  może być lepszą opcją do pracy niż terminal.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-2xl px-8 py-8 text-center">
          <h2 className="text-xl font-bold mb-2">Czekasz na opóźniony lot? Złóż roszczenie już teraz.</h2>
          <p className="text-blue-200 mb-5 text-sm">
            Jeśli lot jest opóźniony o 3h lub więcej, przysługuje Ci odszkodowanie EC 261
            do 600 EUR. ClaimWinger przyjmuje zgłoszenia online — formularz zajmuje kilka minut.
          </p>
          <Link
            href="https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=opoznienie-na-lotnisku-jak-pracowac"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Zgłoś opóźnienie
          </Link>
        </div>
      </main>
    </>
  );
}
