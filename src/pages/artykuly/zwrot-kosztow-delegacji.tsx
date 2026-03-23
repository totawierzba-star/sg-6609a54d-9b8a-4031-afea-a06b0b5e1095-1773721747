import { SEO } from "@/components/SEO";
import Link from "next/link";
import { FileText, Clock, CheckCircle, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function ZwrotKosztowDelegacji() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Zwrot kosztów delegacji — procedura krok po kroku",
        description:
          "Jak złożyć rozliczenie kosztów podróży służbowej: termin, dokumenty, druk delegacji, diety, nadpłata i niedopłata. Wzór polecenia wyjazdu służbowego i checklist do wypełnienia.",
        author: { "@type": "Organization", name: "BiznesLot.info" },
        publisher: { "@type": "Organization", name: "BiznesLot.info" },
        datePublished: "2026-03-23",
        inLanguage: "pl",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Ile czasu ma pracownik na rozliczenie delegacji?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Rozporządzenie o delegacjach krajowych i zagranicznych nie określa wprost terminu, ale pracodawca może ustalić go w regulaminie — zazwyczaj 7–14 dni od powrotu. Przepisy Kodeksu pracy nakazują pracodawcy zwrot kosztów niezwłocznie, co w praktyce oznacza do końca następnego okresu wypłaty.",
            },
          },
          {
            "@type": "Question",
            name: "Jakie dokumenty są wymagane do rozliczenia delegacji zagranicznej?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Wymagane dokumenty to: polecenie wyjazdu służbowego (lub zatwierdzony wniosek w systemie), bilety lub rezerwacje (lot, kolej, hotel), faktury na firmę za zakwaterowanie, faktury/rachunki za taksówki i transport, wyciąg z karty firmowej (jeśli używana), oraz opcjonalnie boarding pass jako dowód odbytego lotu.",
            },
          },
          {
            "@type": "Question",
            name: "Co jeśli pracownik nie rozliczy delegacji w terminie?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pracodawca może potrącić zaliczkę nierozliczoną w terminie z wynagrodzenia pracownika — za jego pisemną zgodą. Bez zgody pracownika potrącenie nie jest możliwe. Brak rozliczenia może też być podstawą odpowiedzialności porządkowej (upomnienie, nagana).",
            },
          },
          {
            "@type": "Question",
            name: "Czy pracodawca może odrzucić część kosztów delegacji?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tak. Pracodawca może odmówić zwrotu kosztów, które nie były uzasadnione, przekroczyły limity z travel policy, lub nie zostały udokumentowane wymaganymi fakturami/rachunkami. Koszty gastronomiczne bez faktury są zwykle nierealizowane, chyba że regulamin dopuszcza ryczałt.",
            },
          },
          {
            "@type": "Question",
            name: "Czy dieta przysługuje gdy pracodawca opłacił wszystkie posiłki?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nie w pełnej wysokości. Jeśli pracodawca zapewnił śniadanie, odlicza się 25% diety; obiad — 50%; kolację — 25%. Przy wszystkich trzech posiłkach pokrytych przez pracodawcę dieta zostaje wyzerowana. Dotyczy to też sytuacji gdy posiłki wliczone są w cenę hotelu lub konferencji.",
            },
          },
          {
            "@type": "Question",
            name: "Jak rozliczyć koszty delegacji gdy lot był opóźniony lub odwołany?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Koszty zakwaterowania i wyżywienia wynikające z opóźnienia/odwołania lotu ponosi linia lotnicza (EC 261/2004, art. 9). Pracownik nie powinien wliczać tych kosztów do rozliczenia delegacji — jeśli jednak poniósł je z własnej kieszeni, może się ubiegać o ich refundację bezpośrednio od linii lotniczej.",
            },
          },
        ],
      },
    ],
  };

  const steps = [
    {
      num: 1,
      title: "Zbierz wszystkie dokumenty przed wyjazdem",
      desc: "Polecenie wyjazdu służbowego (PW) lub zatwierdzony wniosek w systemie. Upewnij się, że masz dane do fakturowania dla hotelu i innych dostawców.",
      tip: "Zrób zdjęcie dokumentów w podróży — paragon za taksówkę łatwo zgubić.",
    },
    {
      num: 2,
      title: "Podczas delegacji: gromadź dowody",
      desc: "Faktury za hotel na dane firmy, paragony za transport, boarding passy. Korzystaj z aplikacji do skanowania (Rydoo, SAP Concur lub aparat telefonu).",
      tip: "Faktura hotelowa musi zawierać NIP pracodawcy — proś o nią przy zameldowaniu, nie przy wymeldowaniu.",
    },
    {
      num: 3,
      title: "Po powrocie: oblicz diety",
      desc: "Ustal czas delegacji (od wyjazdu do powrotu). Odlicz posiłki zapewnione przez pracodawcę/konferencję. Zastosuj właściwą stawkę (krajowa: 45 zł/dobę; zagraniczna: wg tabeli rozporządzenia).",
      tip: "Czas delegacji lotniczej liczy się od wyjazdu do lotniska, nie od godziny startu samolotu.",
    },
    {
      num: 4,
      title: "Wypełnij druk rozliczenia kosztów podróży",
      desc: "Wpisz każdą pozycję kosztową z datą, kwotą i numerem dokumentu. Dołącz faktury i paragony. W systemach elektronicznych (Concur, Rydoo) — zeskanuj i przypisz do odpowiednich kategorii.",
      tip: "Oddziel koszty opłacone kartą firmową od kosztów z własnej kieszeni.",
    },
    {
      num: 5,
      title: "Złóż rozliczenie do akceptacji",
      desc: "Prześlij do przełożonego lub działu finansowego w terminie określonym w regulaminie (zazwyczaj 7–14 dni od powrotu). Dołącz wszystkie oryginały lub ich skany o wymaganej jakości.",
      tip: "Zachowaj potwierdzenie złożenia (email, wydruk z systemu) na wypadek sporu.",
    },
    {
      num: 6,
      title: "Rozlicz zaliczkę (nadpłata / niedopłata)",
      desc: "Jeśli pobierałeś zaliczkę: nadpłatę zwróć do kasy lub przelewem na konto pracodawcy. Niedopłatę — pracodawca zobowiązany jest zwrócić do końca najbliższego wypłaty.",
      tip: "Zwrot nadpłaty bez zbędnej zwłoki — przetrzymywanie zaliczki może być kwalifikowane jako szkoda.",
    },
  ];

  const docTable = [
    { doc: "Polecenie wyjazdu służbowego", obowiazek: "Zawsze", uwaga: "Lub zatwierdzony wniosek w systemie" },
    { doc: "Bilet lotniczy / kolejowy", obowiazek: "Zawsze", uwaga: "E-bilet + boarding pass jako potwierdzenie" },
    { doc: "Faktura za hotel", obowiazek: "Zawsze (nocleg)", uwaga: "Na NIP pracodawcy — niezbędna do odliczenia VAT" },
    { doc: "Faktura za wynajem auta", obowiazek: "Jeśli dotyczy", uwaga: "Na NIP pracodawcy, polisa OC/AC do wglądu" },
    { doc: "Rachunki za taxi / transport", obowiazek: "Zalecane", uwaga: "Paragon bez NIP do 450 zł może być KUP" },
    { doc: "Faktury za inne wydatki", obowiazek: "Zawsze (jeśli zwrot)", uwaga: "Opłaty za WiFi, bagaż, parking lotniskowy" },
    { doc: "Wyciąg z karty firmowej", obowiazek: "Jeśli używana", uwaga: "Do uzgodnienia z dokumentami źródłowymi" },
    { doc: "Dokumentacja EC 261", obowiazek: "Opcjonalnie", uwaga: "Boarding pass + pismo linii — do osobnego roszczenia" },
  ];

  const limityKrajowe = [
    { kategoria: "Dieta krajowa (pełna, powyżej 8h)", kwota: "45,00 zł/dobę", podstawa: "§ 7 Rozp. krajowego" },
    { kategoria: "Dieta krajowa (podróż 8–12h)", kwota: "½ diety = 22,50 zł", podstawa: "§ 7 ust. 2 pkt 1" },
    { kategoria: "Dieta krajowa (do 8h z noclegiem)", kwota: "½ diety = 22,50 zł", podstawa: "§ 7 ust. 2 pkt 1" },
    { kategoria: "Ryczałt za nocleg krajowy", kwota: "45,00 zł (gdy brak faktury)", podstawa: "§ 8 ust. 3" },
    { kategoria: "Ryczałt na dojazdy (krajowe)", kwota: "20% diety = 9,00 zł/dobę", podstawa: "§ 9 ust. 1" },
    { kategoria: "Dieta zagraniczna (przykład: DE)", kwota: "49 EUR/dobę", podstawa: "Tabela do Rozp. zagranicznego" },
    { kategoria: "Limit hotelu zagranicznego (DE)", kwota: "150 EUR/noc", podstawa: "Tabela do Rozp. zagranicznego" },
  ];

  return (
    <>
      <SEO
        title="Zwrot kosztów delegacji — procedura krok po kroku | BiznesLot.info"
        description="Jak rozliczyć koszty podróży służbowej: termin, wymagane dokumenty, obliczanie diet, nadpłata i niedopłata zaliczki. Checklist i wzór druku delegacji."
        canonicalUrl="https://bizneslot.info/artykuly/zwrot-kosztow-delegacji"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
              <Link href="/artykuly" className="hover:text-white transition-colors">
                Artykuły
              </Link>
              <span>/</span>
              <span className="text-slate-300">Finanse delegacji</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Zwrot kosztów delegacji — procedura krok po kroku
            </h1>
            <p className="text-slate-300 text-lg mb-6">
              Jak złożyć rozliczenie podróży służbowej, jakie dokumenty zebrać, jak obliczyć dietę i co zrobić z nadpłatą lub niedopłatą zaliczki.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min czytania</span>
              <span className="flex items-center gap-1"><FileText className="w-4 h-4" /> Finanse delegacji</span>
              <span>Aktualizacja: marzec 2026</span>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Direct Answer Box */}
          <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl p-5 mb-10">
            <p className="font-semibold text-slate-900 mb-1">Procedura w skrócie</p>
            <p className="text-slate-700 text-sm">
              Pracownik ma obowiązek rozliczyć koszty delegacji w terminie określonym przez pracodawcę (zazwyczaj 7–14 dni od powrotu). Wymagane dokumenty to: polecenie wyjazdu służbowego, bilety, faktury za hotel na NIP firmy i rachunki za inne wydatki. Pracodawca zwraca koszty do końca najbliższego okresu rozliczeniowego — a pracownik zwraca nadpłaconą zaliczkę niezwłocznie.
            </p>
          </div>

          {/* 6 kroków */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">6 kroków rozliczenia delegacji</h2>
            <div className="space-y-5">
              {steps.map((step) => (
                <div key={step.num} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.num}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">{step.title}</p>
                    <p className="text-slate-600 text-sm mb-2">{step.desc}</p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-800 flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                      {step.tip}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Wymagane dokumenty */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Wymagane dokumenty</h2>
            <p className="text-slate-600 mb-5 text-sm">
              Brak dokumentu = brak zwrotu danego kosztu. Faktura hotelowa musi być wystawiona na pracodawcę (NIP firmy) — faktura na nazwisko pracownika nie uprawnia do odliczenia VAT przez spółkę.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Dokument</th>
                    <th className="text-left px-4 py-3 font-semibold">Obowiązek</th>
                    <th className="text-left px-4 py-3 font-semibold">Uwaga</th>
                  </tr>
                </thead>
                <tbody>
                  {docTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 font-medium text-slate-900">{row.doc}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          row.obowiazek === "Zawsze" ? "bg-red-100 text-red-700" :
                          row.obowiazek === "Zalecane" ? "bg-amber-100 text-amber-700" :
                          "bg-slate-100 text-slate-600"
                        }`}>{row.obowiazek}</span>
                      </td>
                      <td className="px-4 py-3 text-slate-600 text-xs">{row.uwaga}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Stawki i limity */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Stawki diet i limity 2025/2026</h2>
            <p className="text-slate-600 mb-5 text-sm">
              Poniższe stawki to minimalne kwoty wynikające z rozporządzeń Ministra Pracy. Pracodawca może ustalić wyższe — ale nie niższe. Przekroczenie stawki rozporządzenia w stosunku do pracownika budżetowego jest niedopuszczalne.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Kategoria</th>
                    <th className="text-left px-4 py-3 font-semibold">Kwota</th>
                    <th className="text-left px-4 py-3 font-semibold">Podstawa prawna</th>
                  </tr>
                </thead>
                <tbody>
                  {limityKrajowe.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 font-medium text-slate-900">{row.kategoria}</td>
                      <td className="px-4 py-3 text-slate-800 font-semibold">{row.kwota}</td>
                      <td className="px-4 py-3 text-slate-500 text-xs">{row.podstawa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500">
              * Stawki zagraniczne — tabela do Rozporządzenia Ministra Pracy i Polityki Społecznej z 29.01.2013 (z późn. zm.). Pełna lista krajów dostępna na stronie MRPiPS.
            </p>
          </section>

          {/* Nadpłata i niedopłata */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Zaliczka: nadpłata i niedopłata</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <p className="font-semibold text-red-800 mb-2">Nadpłata (wydałeś mniej niż zaliczka)</p>
                <p className="text-red-700 text-sm mb-3">
                  Różnicę należy zwrócić pracodawcy niezwłocznie — zwykle w terminie 3–5 dni roboczych od akceptacji rozliczenia lub zgodnie z regulaminem. Brak zwrotu może być traktowany jak defraudacja.
                </p>
                <ul className="text-xs text-red-700 space-y-1">
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" /> Przelew na konto pracodawcy lub zwrot do kasy</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" /> Zachowaj potwierdzenie przelewu</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" /> Bez pisemnej zgody pracodawca nie może sam potrącić z wynagrodzenia</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <p className="font-semibold text-green-800 mb-2">Niedopłata (wydałeś więcej niż zaliczka)</p>
                <p className="text-green-700 text-sm mb-3">
                  Pracodawca zobowiązany jest zwrócić różnicę do końca najbliższego okresu wypłaty wynagrodzenia (art. 77⁵ § 3 KP). Opóźnienie uprawnia pracownika do odsetek ustawowych.
                </p>
                <ul className="text-xs text-green-700 space-y-1">
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" /> Zwrot do końca okresu rozliczeniowego</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" /> Przelew lub gotówka w kasie</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" /> Opóźnienie = odsetki ustawowe dla pracownika</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Delegacja a EC 261 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Delegacja + opóźniony lot: co z kosztami?</h2>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <p className="text-slate-700 text-sm mb-4">
                Gdy lot służbowy był opóźniony lub odwołany, koszty wyżywienia i noclegu wynikające bezpośrednio z zakłócenia ponosi linia lotnicza (EC 261/2004, art. 9 — prawo do opieki). Pracownik <strong>nie wlicza tych kosztów do rozliczenia delegacji</strong>.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Do rozliczenia delegacji (pracodawca):</p>
                  <ul className="space-y-1 text-slate-600">
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5" /> Dieta za czas delegacji (wg stawek)</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5" /> Hotel dla celu biznesowego</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5" /> Transport do/z lotniska</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5" /> Bilet lotniczy (koszt firmy)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Do roszczenia od linii (EC 261):</p>
                  <ul className="space-y-1 text-slate-600">
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5" /> Odszkodowanie 250–600 EUR</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5" /> Posiłki i napoje podczas oczekiwania</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5" /> Nocleg przy odwołaniu</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5" /> Transport hotel ↔ lotnisko (opóźnienie)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
                <p className="font-semibold text-blue-900 mb-1">Kto składa roszczenie EC 261?</p>
                <p className="text-blue-800 text-xs">
                  Jeśli bilet kupiła firma, prawo do odszkodowania przysługuje pracownikowi jako pasażerowi. Pracodawca może wymagać przekazania odszkodowania — zależy od umowy o pracę lub travel policy. Więcej: <Link href="/artykuly/czy-pracodawca-moze-zatrzymac-odszkodowanie-za-lot" className="underline">czy pracodawca może zatrzymać odszkodowanie za lot</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Checklist */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Checklist — rozliczenie delegacji</h2>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                {[
                  "Polecenie wyjazdu podpisane przez przełożonego",
                  "Bilety lotnicze i boarding passy",
                  "Faktury hotelowe na NIP pracodawcy",
                  "Faktury za wynajem auta (jeśli dotyczy)",
                  "Rachunki za taxi / transport lokalny",
                  "Faktury za inne wydatki (WiFi, parking, bagaż)",
                  "Obliczona dieta (krajowa lub zagraniczna)",
                  "Odliczenia za posiłki zapewnione przez pracodawcę",
                  "Wyciąg z karty firmowej (jeśli używana)",
                  "Termin złożenia rozliczenia — dotrzymany",
                  "Nadpłata zaliczki zwrócona lub niedopłata wyliczona",
                  "Kopia rozliczenia zachowana u pracownika",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>
            <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: "Ile czasu ma pracownik na rozliczenie delegacji?",
                  a: "Rozporządzenie o delegacjach krajowych i zagranicznych nie określa wprost terminu, ale pracodawca może ustalić go w regulaminie — zazwyczaj 7–14 dni od powrotu. Przepisy Kodeksu pracy nakazują pracodawcy zwrot kosztów niezwłocznie, co w praktyce oznacza do końca następnego okresu wypłaty.",
                },
                {
                  q: "Jakie dokumenty są wymagane do rozliczenia delegacji zagranicznej?",
                  a: "Wymagane dokumenty to: polecenie wyjazdu służbowego (lub zatwierdzony wniosek w systemie), bilety lub rezerwacje (lot, kolej, hotel), faktury na firmę za zakwaterowanie, faktury/rachunki za taksówki i transport, wyciąg z karty firmowej (jeśli używana), oraz opcjonalnie boarding pass jako dowód odbytego lotu.",
                },
                {
                  q: "Co jeśli pracownik nie rozliczy delegacji w terminie?",
                  a: "Pracodawca może potrącić zaliczkę nierozliczoną w terminie z wynagrodzenia pracownika — za jego pisemną zgodą. Bez zgody pracownika potrącenie nie jest możliwe. Brak rozliczenia może też być podstawą odpowiedzialności porządkowej (upomnienie, nagana).",
                },
                {
                  q: "Czy pracodawca może odrzucić część kosztów delegacji?",
                  a: "Tak. Pracodawca może odmówić zwrotu kosztów, które nie były uzasadnione, przekroczyły limity z travel policy, lub nie zostały udokumentowane wymaganymi fakturami/rachunkami. Koszty gastronomiczne bez faktury są zwykle nierealizowane, chyba że regulamin dopuszcza ryczałt.",
                },
                {
                  q: "Czy dieta przysługuje gdy pracodawca opłacił wszystkie posiłki?",
                  a: "Nie w pełnej wysokości. Jeśli pracodawca zapewnił śniadanie, odlicza się 25% diety; obiad — 50%; kolację — 25%. Przy wszystkich trzech posiłkach pokrytych przez pracodawcę dieta zostaje wyzerowana. Dotyczy to też sytuacji gdy posiłki wliczone są w cenę hotelu lub konferencji.",
                },
                {
                  q: "Jak rozliczyć koszty delegacji gdy lot był opóźniony lub odwołany?",
                  a: "Koszty zakwaterowania i wyżywienia wynikające z opóźnienia/odwołania lotu ponosi linia lotnicza (EC 261/2004, art. 9). Pracownik nie powinien wliczać tych kosztów do rozliczenia delegacji — jeśli jednak poniósł je z własnej kieszeni, może się ubiegać o ich refundację bezpośrednio od linii lotniczej.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden"
                  itemProp="mainEntity"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                  >
                    <p className="font-semibold text-slate-900 text-sm" itemProp="name">{item.q}</p>
                    {openFaq === idx ? <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />}
                  </button>
                  {openFaq === idx && (
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer" className="px-5 pb-4">
                      <p className="text-slate-600 text-sm" itemProp="text">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-slate-800 text-white rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-3">Lot służbowy był opóźniony lub odwołany?</h3>
            <p className="text-slate-300 mb-6 text-sm max-w-xl mx-auto">
              Koszty opóźnienia pokrywa linia lotnicza — nie wliczaj ich do rozliczenia delegacji. Sprawdź, czy przysługuje Ci odszkodowanie EC 261 do 600 EUR.
            </p>
            <a
              href={`https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=zwrot-kosztow-delegacji`}
              className="inline-block bg-white text-slate-900 font-semibold px-8 py-3 rounded-xl hover:bg-slate-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sprawdź roszczenie za lot
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
