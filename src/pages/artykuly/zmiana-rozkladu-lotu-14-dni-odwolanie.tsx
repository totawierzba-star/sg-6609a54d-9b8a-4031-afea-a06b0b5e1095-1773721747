import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, XCircle, AlertTriangle, ArrowRight, Scale, Clock } from "lucide-react";

export default function ZmianaRozkladuLotu() {
  return (
    <>
      <SEO
        title="Zmiana rozkładu lotu 14 dni przed wylotem — czy to odwołanie? EC 261/2004"
        description="Zmiana godziny o ponad 2h lub trasy lotu na 14 dni przed wylotem może być traktowana jako odwołanie — i dawać prawo do odszkodowania do 600 EUR. Sprawdź progi i jak postąpić."
        canonicalUrl="https://bizneslot.info/artykuly/zmiana-rozkladu-lotu-14-dni-odwolanie"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Zmiana rozkładu lotu 14 dni przed wylotem — czy to odwołanie lotu?",
            description:
              "Zmiana rozkładu lotu z wyprzedzeniem powyżej 14 dni zwalnia linię z odszkodowania. Zmiana w terminie krótszym niż 14 dni lub znacząca zmiana godziny może dawać prawo do odszkodowania EC 261/2004.",
            author: { "@type": "Organization", name: "BizneLot.info" },
            publisher: { "@type": "Organization", name: "BizneLot.info" },
            datePublished: "2025-03-21",
            dateModified: "2025-03-21",
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
                name: "Czy zmiana godziny lotu o 2 godziny to odwołanie lotu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nie automatycznie. EC 261/2004 nie definiuje wprost, kiedy zmiana rozkładu staje się odwołaniem. Jednak orzecznictwo i ULC wskazują, że znacząca zmiana (o ponad 2-3h) może być traktowana jak odwołanie — szczególnie gdy pasażer nie akceptuje nowego terminu i żąda zwrotu biletu.",
                },
              },
              {
                "@type": "Question",
                name: "Jakie prawa mam gdy linia zmieniła godzinę lotu na 14 lub więcej dni przed wylotem?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Przy zmianie rozkładu z ponad 14-dniowym wyprzedzeniem linia jest zwolniona z odszkodowania pieniężnego EC 261/2004. Masz jednak prawo do wyboru: akceptacja nowego terminu, lot zastępczy na zbliżony termin lub pełen zwrot kosztów biletu.",
                },
              },
              {
                "@type": "Question",
                name: "Kiedy zmiana rozkładu lotu daje prawo do odszkodowania EC 261?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Odszkodowanie przysługuje gdy: zmiana nastąpiła w terminie krótszym niż 14 dni przed wylotem (jak odwołanie) LUB linia zmieniła lot tak, że dotarłeś do celu ponad 2-3h po pierwotnym planie — i nie zaproponowała akceptowalnej alternatywy.",
                },
              },
              {
                "@type": "Question",
                name: "Czy linia musi powiadomić o zmianie rozkładu? W jakim terminie?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "EC 261/2004 nakłada obowiązek powiadomienia przy odwołaniu lotu. Przy zmianie rozkładu (schedule change) linia powinna poinformować jak najwcześniej, ale rozporządzenie nie określa minimalnego terminu dla zmian rozkładowych. Jeśli nie zostałeś powiadomiony — możesz powołać się na naruszenie obowiązku informacyjnego.",
                },
              },
              {
                "@type": "Question",
                name: "Co zrobić gdy nie akceptuję zmiany rozkładu lotu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Masz prawo żądać pełnego zwrotu kosztów biletu (nie vouchera). Możesz też zażądać lotu zastępczego na ten sam lub zbliżony termin, jeśli linia dysponuje taką opcją. Nie akceptuj automatycznie — pisemnie potwierdź odmowę nowego terminu i zażądaj opcji wyboru.",
                },
              },
              {
                "@type": "Question",
                name: "Czy zmiana trasy (lotniska wylotu lub przylotu) to odwołanie lotu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Zazwyczaj tak. Zmiana lotniska docelowego lub wylotu jest zmianą istotną — pasażer nie jest zobowiązany jej akceptować. Ma prawo do pełnego zwrotu biletu. Jeśli nowe lotnisko oddalone jest znacznie od pierwotnego, linia powinna pokryć koszty transportu do pierwotnego lotniska.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-amber-200 text-sm mb-4">
            <Link href="/artykuly" className="hover:text-white transition-colors">
              Artykuły
            </Link>
            <span>/</span>
            <span>Prawo i Finanse</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-amber-500/30 text-amber-100 px-3 py-1 rounded-full text-sm font-medium">
              EC 261/2004
            </span>
            <span className="text-amber-200 text-sm flex items-center gap-1">
              <Clock className="w-4 h-4" /> 8 min czytania
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Zmiana rozkładu lotu 14 dni przed wylotem — czy to odwołanie lotu?
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl">
            Linia przesunęła Twój lot o kilka godzin lub zmieniła trasę. Sprawdź kiedy to traktowane jak odwołanie, kiedy przysługuje odszkodowanie — i jakie masz opcje gdy nie akceptujesz zmiany.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl p-6 mb-10">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-bold text-green-900 text-lg mb-1">Szybka odpowiedź</p>
              <p className="text-green-800">
                Zmiana rozkładu z ponad 14-dniowym wyprzedzeniem <strong>zwalnia linię z odszkodowania</strong>,
                ale daje Ci prawo do zwrotu biletu lub lotu zastępczego. Zmiana w ciągu ostatnich 14 dni przed
                wylotem jest traktowana jak odwołanie — <strong>odszkodowanie do 600 EUR może przysługiwać</strong>.
                Znacząca zmiana godziny (nawet z wyprzedzeniem) może dawać te same prawa jeśli nie zgadzasz się
                na nowy termin.
              </p>
            </div>
          </div>
        </div>

        {/* EC 261 a zmiana rozkładu */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Co mówi EC 261/2004 o zmianie rozkładu?</h2>
          <p className="text-slate-700 mb-4">
            EC 261/2004 nie definiuje wprost pojęcia „zmiana rozkładu" (schedule change). Rozporządzenie
            reguluje <strong>odwołanie lotu</strong> (art. 5) i <strong>opóźnienie</strong> (art. 6) —
            ale milczy o sytuacji gdy lot formalnie nie jest odwołany, tylko przeniesiony na inną godzinę.
          </p>
          <p className="text-slate-700 mb-4">
            W praktyce kluczowe jest <strong>ile czasu przed wylotem</strong> nastąpiła zmiana. EC 261/2004
            art. 5 ust. 1(c) przewiduje trzy progi przy odwołaniu — te same zasady stosuje się interpretacyjnie
            do znaczących zmian rozkładu:
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5">
            <p className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              Art. 5 ust. 1(c) EC 261/2004 — progi czasowe przy odwołaniu lotu
            </p>
            <p className="text-amber-800 text-sm">
              Odszkodowanie nie przysługuje gdy linia poinformowała pasażera o odwołaniu co najmniej 14 dni
              przed planowanym odlotem. Przy krótszych terminach — odszkodowanie zależy od zaproponowanej
              alternatywy i opóźnienia w dotarciu do celu.
            </p>
          </div>
        </section>

        {/* Tabela progów */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Progi czasowe — zmiana rozkładu a odszkodowanie</h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="text-left p-4 font-semibold">Kiedy poinformowano</th>
                  <th className="text-left p-4 font-semibold">Zaproponowana alternatywa</th>
                  <th className="text-center p-4 font-semibold">Odszkodowanie EC 261?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-800">&gt; 14 dni przed wylotem</td>
                  <td className="p-4 text-slate-600">Dowolna</td>
                  <td className="p-4 text-center font-bold text-red-700">NIE</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50">
                  <td className="p-4 font-medium text-slate-800">7–14 dni przed wylotem</td>
                  <td className="p-4 text-slate-600">Nowy lot: nie wcześniej niż 2h przed i max 4h po pierwotnym</td>
                  <td className="p-4 text-center font-bold text-red-700">NIE</td>
                </tr>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-800">7–14 dni przed wylotem</td>
                  <td className="p-4 text-slate-600">Nowy lot poza tym oknem lub brak alternatywy</td>
                  <td className="p-4 text-center font-bold text-green-700">TAK</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50">
                  <td className="p-4 font-medium text-slate-800">&lt; 7 dni przed wylotem</td>
                  <td className="p-4 text-slate-600">Nowy lot: nie wcześniej niż 1h przed i max 2h po pierwotnym</td>
                  <td className="p-4 text-center font-bold text-red-700">NIE</td>
                </tr>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-800">&lt; 7 dni przed wylotem</td>
                  <td className="p-4 text-slate-600">Nowy lot poza tym oknem lub brak alternatywy</td>
                  <td className="p-4 text-center font-bold text-green-700">TAK</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            * Nawet gdy odszkodowanie nie przysługuje, zawsze masz prawo do zwrotu biletu lub lotu zastępczego.
          </p>
        </section>

        {/* Zmiana rozkładu vs odwołanie */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Kiedy „zmiana rozkładu" to w praktyce odwołanie lotu?</h2>
          <p className="text-slate-700 mb-5">
            Linie lotnicze chętnie kwalifikują znaczące przesunięcia jako „zmianę rozkładu" zamiast „odwołanie" —
            bo to pozwala uniknąć odszkodowania. Orzecznictwo wyznacza jednak granicę:
          </p>

          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-900 mb-1">Zmiana traktowana jak odwołanie</p>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Zmiana godziny o ponad kilka godzin bez akceptowalnej alternatywy</li>
                    <li>• Zmiana lotniska docelowego lub wylotu</li>
                    <li>• Zmiana trasy (np. lot bezpośredni zamieniony na z przesiadką)</li>
                    <li>• Każda zmiana ogłoszona w ciągu 14 dni bez spełnienia progów alternatywy</li>
                    <li>• Lot przesunięty na inny dzień</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900 mb-1">Zmiana nieistotna (nie daje prawa do odszkodowania)</p>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Przesunięcie o kilkanaście–kilkadziesiąt minut z ponad 14-dniowym wyprzedzeniem</li>
                    <li>• Zmiana numeracji lotu przy tej samej godzinie i trasie</li>
                    <li>• Zmiana sprzętu (inny typ samolotu) bez wpływu na rozkład</li>
                    <li>• Drobna zmiana godziny z ponad 14-dniowym wyprzedzeniem gdy akceptujesz nowy termin</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Twoje opcje */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Twoje opcje gdy nie akceptujesz zmiany rozkładu</h2>
          <p className="text-slate-700 mb-5">
            Niezależnie od terminu zmiany masz prawo do wyboru jednej z trzech opcji — linia musi je zaoferować:
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Pełny zwrot biletu",
                desc: "Zwrot całości kosztów biletu na kartę lub konto — nie voucher na przyszłe loty. Możesz zażądać gotówki lub przelewu. Linia nie może narzucić formy wypłaty.",
                color: "bg-blue-50 border-blue-200",
                titleColor: "text-blue-900",
              },
              {
                title: "Lot zastępczy (jak najszybciej)",
                desc: "Lot zastępczy do celu podróży na jak najwcześniejszy możliwy termin. Linia pokrywa koszty zmiany rezerwacji.",
                color: "bg-teal-50 border-teal-200",
                titleColor: "text-teal-900",
              },
              {
                title: "Lot zastępczy (wygodny termin)",
                desc: "Lot zastępczy do celu podróży w późniejszym terminie wygodnym dla Ciebie, z zastrzeżeniem dostępności miejsc.",
                color: "bg-purple-50 border-purple-200",
                titleColor: "text-purple-900",
              },
            ].map((opt, idx) => (
              <div key={idx} className={`rounded-xl border p-5 ${opt.color}`}>
                <p className={`font-bold mb-2 ${opt.titleColor}`}>{opt.title}</p>
                <p className="text-slate-600 text-sm">{opt.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-amber-50 border border-amber-300 rounded-xl p-4">
            <p className="text-amber-900 text-sm">
              <strong>Uwaga na vouchery:</strong> Linie lotnicze często proponują voucher zamiast gotówki — np.
              "500 zł na kolejny lot". Masz prawo odmówić i zażądać zwrotu w gotówce/przelewem. Voucher jest
              dopuszczalny tylko za Twoją dobrowolną zgodą.
            </p>
          </div>
        </section>

        {/* Przykład służbowy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Przykład: zmiana rozkładu LOT WAW→LHR w podróży służbowej</h2>

          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-4">
            <p className="text-slate-700 text-sm">
              <strong>Katarzyna</strong>, prawniczka z Warszawy, zarezerwowała lot LOT WAW→LHR na godz. 07:00.
              Na 10 dni przed wylotem LOT przesłał e-mail informujący o zmianie godziny na 13:30 — zmiana o 6,5h.
              Katarzyna miała zaplanowane spotkanie w Londynie o 14:00 — nowy lot uniemożliwiał jej dotarcie na czas.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <p className="font-semibold text-slate-800 text-sm mb-2">Sytuacja prawna</p>
                <p className="text-slate-600 text-xs">
                  Zmiana ogłoszona 10 dni przed wylotem (7–14 dni). Nowy lot odlatuje 6,5h później —
                  poza oknem -2h/+4h. Kwalifikuje się jak odwołanie lotu.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-semibold text-green-900 text-sm mb-2">Co Katarzynie przysługuje</p>
                <p className="text-green-800 text-xs">
                  Pełny zwrot biletu + odszkodowanie 250 EUR (WAW→LHR &lt;1500 km). Alternatywnie: lot
                  zastępczy inną linią na wcześniejszą godzinę na koszt LOT.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kontekstowe CTA */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-amber-900 text-lg">Linia zmieniła rozkład i nie chcesz nowego terminu?</p>
              <p className="text-amber-700 text-sm mt-1">
                ClaimWinger oceni czy zmiana rozkładu daje Ci prawo do odszkodowania i pomoże je uzyskać.
                Bezpłatna ocena, wynagrodzenie tylko przy sukcesie.
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl/odwolany-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=zmiana-rozkladu-14-dni"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Sprawdź roszczenie <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Jak działać krok po kroku */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Jak postąpić przy zmianie rozkładu — krok po kroku</h2>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Nie akceptuj automatycznie",
                desc: "Nie klikaj w link potwierdzający nowy termin bez zastanowienia. Akceptacja nowego rozkładu może być interpretowana jako zgoda na zmianę i utrata prawa do odszkodowania. Najpierw sprawdź swoje opcje.",
                color: "bg-amber-100 text-amber-700",
              },
              {
                step: "2",
                title: "Sprawdź datę i czas ogłoszenia zmiany",
                desc: "Zapisz kiedy dokładnie otrzymałeś powiadomienie o zmianie (data e-maila). Oblicz ile dni zostało do pierwotnego lotu — to determinuje Twoje prawa.",
                color: "bg-blue-100 text-blue-700",
              },
              {
                step: "3",
                title: "Zażądaj pisemnie wybranej opcji",
                desc: "Napisz do linii e-mail z odmową nowego terminu i żądaniem konkretnej opcji: zwrot biletu LUB lot zastępczy w określonym terminie. Daj 7 dni na realizację.",
                color: "bg-purple-100 text-purple-700",
              },
              {
                step: "4",
                title: "Złóż roszczenie o odszkodowanie (jeśli przysługuje)",
                desc: "Jeśli zmiana nastąpiła w ciągu 14 dni i nowa propozycja nie mieściła się w progach EC 261 — złóż pisemne roszczenie o odszkodowanie 250/400/600 EUR. Przy odmowie eskaluj do ULC.",
                color: "bg-teal-100 text-teal-700",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${item.color}`}>
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dark CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 mb-12 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Zmiana godziny lotu pokrzyżowała plany służbowe?</h3>
              <p className="text-slate-300 text-sm">
                ClaimWinger sprawdzi czy zmiana rozkładu kwalifikuje się jako odwołanie i poprowadzi roszczenie.
                Bez kosztów z góry.
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl?utm_source=bizneslot&utm_medium=article&utm_campaign=zmiana-rozkladu-14-dni-cta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-7 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Złóż roszczenie <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>
          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {[
              {
                q: "Czy zmiana godziny lotu o 2 godziny to odwołanie lotu?",
                a: "Nie automatycznie. EC 261/2004 nie definiuje wprost kiedy zmiana rozkładu staje się odwołaniem. Jednak orzecznictwo i ULC wskazują, że znacząca zmiana (o ponad 2-3h) może być traktowana jak odwołanie — szczególnie gdy pasażer nie akceptuje nowego terminu i żąda zwrotu biletu.",
              },
              {
                q: "Jakie prawa mam gdy linia zmieniła godzinę lotu na 14 lub więcej dni przed wylotem?",
                a: "Przy zmianie rozkładu z ponad 14-dniowym wyprzedzeniem linia jest zwolniona z odszkodowania pieniężnego EC 261/2004. Masz jednak prawo do wyboru: akceptacja nowego terminu, lot zastępczy na zbliżony termin lub pełen zwrot kosztów biletu.",
              },
              {
                q: "Kiedy zmiana rozkładu lotu daje prawo do odszkodowania EC 261?",
                a: "Odszkodowanie przysługuje gdy: zmiana nastąpiła w terminie krótszym niż 14 dni przed wylotem i nie zaproponowano akceptowalnej alternatywy zgodnej z progami EC 261 (art. 5 ust. 1c).",
              },
              {
                q: "Czy linia musi powiadomić o zmianie rozkładu? W jakim terminie?",
                a: "EC 261/2004 nakłada obowiązek powiadomienia przy odwołaniu lotu. Przy zmianie rozkładu linia powinna poinformować jak najwcześniej, ale rozporządzenie nie określa minimalnego terminu dla zmian rozkładowych.",
              },
              {
                q: "Co zrobić gdy nie akceptuję zmiany rozkładu lotu?",
                a: "Masz prawo żądać pełnego zwrotu kosztów biletu — nie vouchera. Możesz też zażądać lotu zastępczego na ten sam lub zbliżony termin. Pisemnie potwierdź odmowę nowego terminu i wyraź żądanie konkretnej opcji.",
              },
              {
                q: "Czy zmiana trasy (lotniska wylotu lub przylotu) to odwołanie lotu?",
                a: "Zazwyczaj tak. Zmiana lotniska docelowego lub wylotu jest zmianą istotną — pasażer nie jest zobowiązany jej akceptować. Ma prawo do pełnego zwrotu biletu. Jeśli nowe lotnisko jest oddalone od pierwotnego, linia powinna pokryć koszty transportu.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
                itemScope
                itemProp="mainEntity" itemType="https://schema.org/Question"
              >
                <p className="font-semibold text-slate-900 mb-2" itemProp="name">
                  {item.q}
                </p>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-slate-600 text-sm" itemProp="text">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Powiązane artykuły</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/artykuly/kiedy-lot-jest-uznawany-za-odwolany-prawo-ue"
              className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-900 text-sm mb-1">
                Kiedy lot jest uznawany za odwołany według prawa UE?
              </p>
              <p className="text-slate-500 text-xs">Definicja, 5 przypadków i progi powiadomień EC 261</p>
            </Link>
            <Link
              href="/artykuly/jak-dlugo-linia-lotnicza-ma-na-odpowiedz-na-reklamacje"
              className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-900 text-sm mb-1">
                Jak długo linia lotnicza ma na odpowiedź na reklamację?
              </p>
              <p className="text-slate-500 text-xs">Terminy, eskalacja i jak walczyć z milczeniem linii</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
