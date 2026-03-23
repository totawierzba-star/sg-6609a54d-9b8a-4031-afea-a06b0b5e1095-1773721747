import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, XCircle, AlertTriangle, ArrowRight, Plane } from "lucide-react";

export default function PrzylotDzienWczesniej() {
  return (
    <>
      <SEO
        title="Czy warto przylecieć dzień wcześniej przed ważnym spotkaniem służbowym?"
        description="Kiedy przybycie dzień wcześniej chroni delegację przed ryzykiem, a kiedy to zbędny koszt? Analiza dla podróży krajowych, europejskich i intercontinentalnych."
        canonicalUrl="https://bizneslot.info/artykuly/przylot-dzien-wczesniej-przed-lotem-sluzbowym"
        />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Czy warto przylecieć dzień wcześniej przed ważnym spotkaniem służbowym?",
            description:
              "Analiza kiedy warto przyleciec dzien wczesniej: ryzyko opoznienia lotu, jet lag, warunki pogodowe i koszt hotelu vs koszt nieudanej delegacji.",
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
                name: "Kiedy warto przyleciec dzien wczesniej przed spotkaniem biznesowym?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Zdecydowanie warto przy: lotach intercontinentalnych (jet lag), spotkaniach o wysokiej stawce (podpisanie umowy, prezentacja dla zarządu), trasach z wymagającą przesiadką, sezonie zimowym z ryzykiem pogodowym oraz gdy jedyne dostępne połączenia mają rano odlot i wieczorem przylot z małym buforem.",
                },
              },
              {
                "@type": "Question",
                name: "Czy firma powinna pokrywac koszty hotelu przy przyjezdzie dzien wczesniej?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak, jeśli przybycie dzień wcześniej jest uzasadnione biznesowo (ryzyko opóźnienia, jet lag, wczesna godzina spotkania). Koszt jednej nocy hotelowej (300-600 PLN) jest nieporównywalnie niższy niż koszt nieudanej delegacji lub konieczności powtórzenia podróży. Dobra travel policy powinna to wprost regulować.",
                },
              },
              {
                "@type": "Question",
                name: "Jak jet lag wplywa na efektywnosc na spotkaniu biznesowym?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Lot ze strefy czasowej o 5+ godzin różnicy powoduje jet lag trwający 1-3 dni. Objawy: rozproszenie, problemy z koncentracją, zmęczenie w nieodpowiednich godzinach. Przybycie dzień wcześniej daje jeden cykl snu w nowej strefie czasowej — znacząco poprawia funkcjonowanie na spotkaniu.",
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
            Czy warto przylecieć dzień wcześniej przed ważnym spotkaniem służbowym?
          </h1>
          <p className="text-blue-100 text-lg">
            Lot z Warszawy do Tokio, spotkanie o 9:00 rano. Lecisz dzień wcześniej czy
            ryzykujesz nocny lot z przylądkiem o 6:00? Analiza kiedy bufor czasowy się
            opłaca — i kiedy to zbędny koszt.
          </p>
        </div>

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl px-6 py-5 mb-8">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-1">
            Krótka odpowiedź
          </p>
          <p className="text-gray-800 font-medium">
            Przy lotach intercontinentalnych i spotkaniach o wysokiej stawce — <strong>zawsze warto</strong>.
            Przy krótkich trasach europejskich z wygodnym rozkładem — <strong>zazwyczaj nie</strong>.
            Kluczowe pytanie: ile kosztowałoby nieudane spotkanie w porównaniu z jedną nocą hotelu?
          </p>
        </div>

        {/* Kiedy TAK */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Kiedy przybycie dzień wcześniej jest uzasadnione
          </h2>
          <div className="space-y-3">
            {[
              {
                sytuacja: "Lot intercontinentalny (różnica stref 5h+)",
                uzasadnienie: "Jet lag po 10–14h locie jest realnym problemem. Jeden nocleg w nowej strefie czasowej daje organizmowi cykl snu przed spotkaniem — różnica w koncentracji i prezentacji jest wyraźna.",
              },
              {
                sytuacja: "Spotkanie o wysokiej stawce (podpisanie umowy, prezentacja dla zarządu)",
                uzasadnienie: "Koszt nieudanej delegacji (utracona umowa, konieczność ponownej podróży) jest nieporównywalnie wyższy niż noc w hotelu. Im wyższa stawka spotkania, tym bardziej uzasadniony bufor.",
              },
              {
                sytuacja: "Trasa z wymaganą przesiadką i krótkim MCT",
                uzasadnienie: "Przy przesiadce 45–60 min jedno opóźnienie pierwszego odcinka = missed connection = nieudana delegacja. Przybycie dzień wcześniej eliminuje to ryzyko całkowicie.",
              },
              {
                sytuacja: "Sezon zimowy, trasy narażone na pogodę",
                uzasadnienie: "Grudzień–marzec na trasach do Skandynawii, Europy Wschodniej i Ameryki Północnej — warunki pogodowe powodują 20–30% więcej opóźnień. Bufor czasowy jest ubezpieczeniem.",
              },
              {
                sytuacja: "Spotkanie o 8:00–9:00 rano przy locie z przylądkiem o 6:00",
                uzasadnienie: "Nawet przy punktualnym locie: przylot o 6:00, transfer do hotelu, prysznic, dojazd na spotkanie — to ryzykowny harmonogram. Jedno opóźnienie na odprawie i jesteś spóźniony.",
              },
              {
                sytuacja: "Brak alternatywnych połączeń danego dnia",
                uzasadnienie: "Jeśli LOT lata WAW–TXL raz dziennie i lot jest o 7:00 rano — brak alternatywy w razie odwołania. Wcześniejszy przyjazd daje opcję lotu dzień wcześniej.",
              },
            ].map((item) => (
              <div key={item.sytuacja} className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.sytuacja}</p>
                  <p className="text-gray-600 text-sm">{item.uzasadnienie}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Kiedy NIE */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Kiedy przybycie dzień wcześniej jest zbędne
          </h2>
          <div className="space-y-3">
            {[
              {
                sytuacja: "Krótka trasa europejska z dobrym rozkładem (WAW–FRA 2h, lot o 10:00, spotkanie o 14:00)",
                uwaga: "2h bufor przy 2h locie — standardowa rezerwa. Nawet przy opóźnieniu 1h wciąż zdążysz.",
              },
              {
                sytuacja: "Spotkanie robocze bez wysokiej stawki (status call, szkolenie)",
                uwaga: "Jeśli spotkanie można odbyć zdalnie lub łatwo przełożyć — nocleg dzień wcześniej to zbędny koszt.",
              },
              {
                sytuacja: "Trasa z wieloma połączeniami dziennie (WAW–BER, WAW–LON)",
                uwaga: "Przy 5–8 lotach dziennie na trasie, odwołanie jednego lotu oznacza przesadzenie na następny — zwykle bez utraty delegacji.",
              },
            ].map((item) => (
              <div key={item.sytuacja} className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
                <XCircle className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.sytuacja}</p>
                  <p className="text-gray-600 text-sm">{item.uwaga}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Matryca decyzyjna */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Matryca decyzyjna — kiedy lecieć dzień wcześniej?
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Dystans / Trasa</th>
                  <th className="px-4 py-3 text-left">Stawka spotkania</th>
                  <th className="px-4 py-3 text-left">Rekomendacja</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { dystans: "Krajowa (do 1h lotu)", stawka: "Dowolna", rek: "Nie — wyjedź wcześniej rano", color: "red" },
                  { dystans: "Europejska (2–3h)", stawka: "Niska / rutynowa", rek: "Nie — wystarczy bufor 2–3h", color: "red" },
                  { dystans: "Europejska (2–3h)", stawka: "Wysoka (kontrakt)", rek: "Rozważ — szczególnie zimą", color: "amber" },
                  { dystans: "Intercontinentalna (8h+)", stawka: "Dowolna", rek: "Tak — jet lag i ryzyko opóźnienia", color: "green" },
                  { dystans: "Dowolna z wymaganą przesiadką", stawka: "Wysoka", rek: "Tak — eliminuje ryzyko missed connection", color: "green" },
                ].map((row) => (
                  <tr key={row.dystans + row.stawka} className="even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{row.dystans}</td>
                    <td className="px-4 py-3 text-gray-600">{row.stawka}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        row.color === "green" ? "bg-green-100 text-green-700" :
                        row.color === "amber" ? "bg-amber-100 text-amber-700" :
                        "bg-red-100 text-red-600"
                      }`}>{row.rek}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Koszt vs ryzyko */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Kalkulacja: koszt hotelu vs koszt nieudanej delegacji
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <p className="text-gray-700 text-sm mb-3">
              <strong>Przykład:</strong> Delegacja do Nowego Jorku na podpisanie kontraktu wartego
              500 000 PLN. Lot WAW–JFK z przylądkiem o 6:00, spotkanie o 10:00.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <p className="font-semibold text-gray-800 mb-2">Opcja A: Lot rano, ryzyko opóźnienia</p>
                <ul className="text-gray-600 space-y-1 text-xs list-disc list-inside ml-1">
                  <li>Oszczędność: ~400 PLN (brak noclegu)</li>
                  <li>Ryzyko opóźnienia lotu: ~15%</li>
                  <li>Przy opóźnieniu: nieudane spotkanie, ponowna podróż, utracony kontrakt</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg border border-green-200 p-3">
                <p className="font-semibold text-gray-800 mb-2">Opcja B: Przylot dzień wcześniej</p>
                <ul className="text-gray-600 space-y-1 text-xs list-disc list-inside ml-1">
                  <li>Koszt dodatkowy: ~400 PLN (hotel JFK area)</li>
                  <li>Ryzyko nieudanego spotkania: ~0%</li>
                  <li>Pracownik wypoczęty po adaptacji do strefy</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 text-sm mt-3 font-medium">
              Wniosek: 400 PLN za nocleg to 0,08% wartości kontraktu. Rachunek jest prosty.
            </p>
          </div>
        </section>

        {/* Travel policy */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Jak ująć to w travel policy?
          </h2>
          <p className="text-gray-700 mb-3">
            Dobra travel policy powinna wprost regulować, kiedy przybycie dzień wcześniej
            jest autoryzowane bez konieczności oddzielnego zatwierdzenia:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 font-mono text-sm text-gray-700">
{`§ X. Przybycie na miejsce delegacji

1. Przy lotach z różnicą stref czasowych powyżej 5 godzin
   pracownik jest upoważniony do rezerwacji noclegu w dniu
   poprzedzającym spotkanie bez dodatkowego zatwierdzenia.

2. Przy spotkaniach kategorii A (kontrakt, zarząd klienta,
   M&A) manager może autoryzować przylot dzień wcześniej
   niezależnie od dystansu.

3. Koszt jednego dodatkowego noclegu przy locie
   intercontinentalnym traktowany jest jako koszt
   standardowej delegacji.`}
          </div>
        </section>

        {/* Co jeśli lot opóźniony */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Co zrobić gdy mimo wszystko lot jest opóźniony?
          </h2>
          <div className="space-y-2">
            {[
              "Przy opóźnieniu powyżej 2h: poinformuj kontrahenta o sytuacji — większość rozumie siłę wyższą, warto to zrobić wcześnie.",
              "Jeśli lot jest odwołany: zażądaj lotu zastępczego na najbliższy możliwy termin i zachowaj wszystkie dokumenty.",
              "Przy opóźnieniu 3h+ w celu podróży: przysługuje Ci odszkodowanie EC 261 do 600 EUR — zbieraj boarding pasy i potwierdzenia.",
              "Nawet przy przybyciu dzień wcześniej może dojść do sytuacji ekstremalnej — udokumentuj każde zakłócenie.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
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
                href: "/artykuly/missed-connection-lot-przesiadka-kto-odpowiada",
                label: "Missed connection — kto odpowiada?",
              },
              {
                href: "/artykuly/lot-sluzbowy-odwolany-ostatniej-chwili-co-zrobic",
                label: "Lot odwołany w ostatniej chwili — co zrobić?",
              },
              {
                href: "/artykuly/polityka-podrozy-sluzbowych-jak-napisac",
                label: "Travel Policy — jak napisać od zera?",
              },
              {
                href: "/artykuly/opoznienie-lotu-spotkanie-biznesowe-koszty-konsekwencji",
                label: "Opóźnienie lotu a spotkanie biznesowe",
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
                Czy dodatkowy nocleg przy przybyciu dzień wcześniej jest kosztem podróży służbowej?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Tak, pod warunkiem że jest biznesowo uzasadniony i autoryzowany zgodnie
                  z travel policy. Koszt hotelu wynikający z wcześniejszego przybycia jest
                  kosztem uzyskania przychodu dla firmy i nie stanowi przychodu pracownika,
                  jeśli jest ściśle powiązany z delegacją służbową.
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
                Jak szybko mija jet lag i kiedy można efektywnie pracować po locie do Azji?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Ogólna zasada: jeden dzień adaptacji na każde 1,5–2h różnicy czasu.
                  Lot do Tokio (różnica 8h zimą) — pełna adaptacja po 4–5 dniach. Jeden
                  nocleg w nowej strefie daje częściową adaptację — wystarczy na spotkanie,
                  nie wyeliminuje jet lagu całkowicie. Podróż na wschód (Polska → Azja)
                  jest zwykle trudniejsza niż na zachód.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-2xl px-8 py-8 text-center">
          <h2 className="text-xl font-bold mb-2">Lot opóźniony mimo buforu czasowego?</h2>
          <p className="text-blue-200 mb-5 text-sm">
            Jeśli dotarłeś do celu 3h+ później niż planowano, przysługuje Ci odszkodowanie
            EC 261 — niezależnie od tego, czy leciałeś dzień wcześniej. ClaimWinger sprawdzi
            Twoje roszczenie.
          </p>
          <Link
            href="https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=przylot-dzien-wczesniej-przed-lotem-sluzbowym"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Sprawdź swoje roszczenie
          </Link>
        </div>
      </main>
    </>
  );
}
