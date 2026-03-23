import { SEO } from "@/components/SEO";
import Link from "next/link";
import { DollarSign, Clock, CheckCircle, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function PodatekSwiadczeniaPodrozne() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Podatek od świadczeń podróżnych — diety, noclegi, ryczałty a PIT | BiznesLot.info"
        description="Które świadczenia delegacyjne są wolne od PIT? Limity zwolnienia dla diet, ryczałtów i noclegów, kiedy nadwyżka staje się przychodem pracownika i jak rozliczyć świadczenia w CIT."
        canonicalUrl="https://bizneslot.info/artykuly/podatek-swiadczenia-podrozne"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "Podatek od świadczeń podróżnych — diety, noclegi, ryczałty a PIT",
                description:
                  "Które świadczenia delegacyjne są wolne od PIT? Limity zwolnienia dla diet, ryczałtów i noclegów, kiedy nadwyżka staje się przychodem pracownika i jak rozliczyć świadczenia w CIT.",
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
                    name: "Do jakiego limitu dieta jest wolna od podatku?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Dieta jest wolna od PIT do wysokości określonej w rozporządzeniu Ministra Pracy. Dla delegacji krajowych limit wynosi 45 zł/dobę (od 01.01.2023), dla zagranicznych — zgodnie z tabelą dla danego kraju. Nadwyżka ponad te limity stanowi przychód pracownika i podlega opodatkowaniu.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Czy bilet lotniczy kupiony przez firmę jest przychodem pracownika?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Nie. Bilet lotniczy zakupiony przez pracodawcę na potrzeby podróży służbowej nie generuje przychodu po stronie pracownika — jest to świadczenie niezbędne do wykonania obowiązków służbowych, zwolnione z PIT na podstawie art. 21 ust. 1 pkt 16 lit. b ustawy o PIT.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Czy hotel opłacony przez pracodawcę jest przychodem pracownika?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Nie, jeśli koszt noclegu nie przekracza limitu z rozporządzenia (lub pracodawca opłaca hotel bezpośrednio). Dla delegacji zagranicznych limit noclegowy wynosi np. 150 EUR/noc dla Niemiec — kwota powyżej limitu jest przychodem pracownika. Przy delegacjach krajowych: ryczałt 45 zł/noc lub faktyczny koszt do 20-krotności diety.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Jak opodatkowane jest odszkodowanie EC 261 wypłacone pracownikowi?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Odszkodowanie EC 261/2004 (250–600 EUR) jest przychodem ze stosunku pracy, jeśli pracownik dostał bilet służbowy, ale formalnie to on jest pasażerem. Kwestia opodatkowania jest sporna — część interpretacji DKIS uznaje je za przychód zwolniony (odszkodowanie o charakterze odszkodowawczym), część za podlegający PIT. Bezpieczniej zgłosić do działu kadr.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Czy ryczałt za użycie prywatnego samochodu w delegacji jest opodatkowany?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Ryczałt za jazdy prywatnym autem w delegacji jest wolny od PIT do limitu z rozporządzenia (tzw. 'kilometrówka'): 0,89 zł/km dla aut powyżej 900 cm³ i 0,69 zł/km poniżej. Kwota powyżej tych stawek lub suma przekraczająca limit roczny (ustalony przez pracodawcę) jest przychodem.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
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
              Podatek od świadczeń podróżnych — diety, noclegi, ryczałty a PIT
            </h1>
            <p className="text-slate-300 text-lg mb-6">
              Które świadczenia z tytułu delegacji służbowej są zwolnione z PIT, a kiedy nadwyżka staje się przychodem pracownika — i kto musi zapłacić podatek.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min czytania</span>
              <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> Finanse delegacji</span>
              <span>Aktualizacja: marzec 2026</span>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Direct Answer Box */}
          <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl p-5 mb-10">
            <p className="font-semibold text-slate-900 mb-1">Odpowiedź wprost</p>
            <p className="text-slate-700 text-sm">
              Świadczenia podróżne (diety, noclegi, ryczałty komunikacyjne) są wolne od PIT do limitów określonych w rozporządzeniu Ministra Pracy — na podstawie art. 21 ust. 1 pkt 16 ustawy o PIT. Nadwyżka ponad limity oraz świadczenia wypłacone ponad normę rozporządzenia stanowią przychód ze stosunku pracy i podlegają opodatkowaniu oraz składkom ZUS.
            </p>
          </div>

          {/* Podstawa prawna */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Podstawa prawna zwolnienia z PIT</h2>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <p className="text-slate-700 text-sm mb-4">
                Artykuł 21 ust. 1 pkt 16 ustawy o podatku dochodowym od osób fizycznych zwalnia z PIT:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="font-semibold text-blue-900 mb-1 text-sm">lit. a — pracownicy</p>
                  <p className="text-blue-800 text-xs">
                    Diety i inne należności za czas podróży służbowej pracownika — do wysokości określonej w odrębnych przepisach (rozporządzenia Ministra Pracy).
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="font-semibold text-purple-900 mb-1 text-sm">lit. b — osoby niebędące pracownikami</p>
                  <p className="text-purple-800 text-xs">
                    Diety i inne należności za czas podróży osób niebędących pracownikami (zleceniobiorcy, prokurenci) — do wysokości diet pracowniczych.
                  </p>
                </div>
              </div>
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800">
                <strong>Ważne:</strong> Zwolnienie dotyczy wyłącznie podróży służbowej — wyjazdu na polecenie pracodawcy poza stałe miejsce pracy. Wyjazdy w ramach „zadaniowego czasu pracy" bez polecenia wyjazdu mogą być zakwestionowane przez US.
              </div>
            </div>
          </section>

          {/* Tabela limitów */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Limity zwolnienia z PIT — 2025/2026</h2>
            <p className="text-slate-600 mb-5 text-sm">
              Poniżej zestawienie świadczeń podróżnych i ich statusu podatkowego. Kwoty wynikające z rozporządzeń Ministra Pracy z 29.01.2013 (zagranica) i 25.10.2022 (kraj, stawki od 01.01.2023).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Świadczenie</th>
                    <th className="text-left px-4 py-3 font-semibold">Limit zwolnienia PIT</th>
                    <th className="text-left px-4 py-3 font-semibold">Nadwyżka</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      s: "Dieta krajowa",
                      limit: "45 zł/dobę",
                      nad: "Przychód pracownika + ZUS",
                    },
                    {
                      s: "Dieta zagraniczna (np. DE)",
                      limit: "49 EUR/dobę",
                      nad: "Przychód pracownika + ZUS",
                    },
                    {
                      s: "Nocleg krajowy — ryczałt",
                      limit: "45 zł/noc (gdy brak faktury)",
                      nad: "Przychód, jeśli wypłacono więcej",
                    },
                    {
                      s: "Nocleg krajowy — faktura",
                      limit: "Do 20-krotności diety = 900 zł/noc",
                      nad: "Powyżej 900 zł — przychód",
                    },
                    {
                      s: "Nocleg zagraniczny — faktura",
                      limit: "Wg tabeli dla kraju (np. DE: 150 EUR)",
                      nad: "Powyżej limitu — przychód",
                    },
                    {
                      s: "Ryczałt na dojazdy krajowe",
                      limit: "20% diety = 9 zł/dobę",
                      nad: "Przychód pracownika",
                    },
                    {
                      s: "Bilet lotniczy (opłacony przez firmę)",
                      limit: "Całość — brak limitu kwotowego",
                      nad: "Brak przychodu (świadczenie służbowe)",
                    },
                    {
                      s: "Hotel (faktura na firmę, opłacony przez firmę)",
                      limit: "Do limitu rozporządzenia",
                      nad: "Powyżej limitu — przychód pracownika",
                    },
                    {
                      s: "Kilometrówka (auto prywatne)",
                      limit: "0,89 zł/km (>900 cm³), 0,69 zł/km (<900 cm³)",
                      nad: "Powyżej stawki — przychód",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 font-medium text-slate-900">{row.s}</td>
                      <td className="px-4 py-3 text-slate-700 text-xs">{row.limit}</td>
                      <td className="px-4 py-3 text-xs">
                        <span className={`px-2 py-0.5 rounded-full font-medium ${
                          row.nad.startsWith("Brak") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}>{row.nad}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Kiedy powstaje przychód */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Kiedy świadczenie podróżne staje się przychodem?</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Dieta ponad limit rozporządzenia",
                  body: "Jeśli travel policy firmy ustala dietę wyższą niż rozporządzenie (np. 80 zł/dobę krajowa zamiast 45 zł), nadwyżka 35 zł/dobę jest przychodem pracownika. Pracodawca zobowiązany jest naliczyć zaliczkę na PIT i składki ZUS od tej różnicy.",
                  type: "error",
                },
                {
                  title: "Ryczałt noclegowy ponad 45 zł (krajowy)",
                  body: "Ryczałt noclegowy dla delegacji krajowych jest zwolniony do 45 zł/noc — ale tylko gdy pracownik nie przedłożył faktury. Jeśli firma wypłaca ryczałt 100 zł bez faktury, nadwyżka 55 zł jest przychodem.",
                  type: "error",
                },
                {
                  title: "Hotel powyżej limitu zagranicznego",
                  body: "Przy delegacji do Niemiec limit noclegu to 150 EUR/noc. Hotel za 200 EUR/noc → 50 EUR to przychód pracownika. Pracodawca powinien albo wybrać hotel w limicie, albo odprowadzić zaliczkę PIT od nadwyżki.",
                  type: "error",
                },
                {
                  title: "Bilet i hotel opłacony bezpośrednio przez pracodawcę",
                  body: "Gdy pracodawca kupuje bilet lub rezerwuje hotel na dane firmy i sam opłaca fakturę — pracownik nie otrzymuje żadnego świadczenia w gotówce. W myśl wyroku TK (K 7/13) świadczenie nieodpłatne bez realnej korzyści po stronie pracownika nie jest przychodem.",
                  type: "ok",
                },
                {
                  title: "Odszkodowanie EC 261 otrzymane przez pracownika",
                  body: "Linia wypłaca odszkodowanie pasażerowi (pracownikowi), nie pracodawcy. Status podatkowy jest sporny — część interpretacji DKIS traktuje je jako odszkodowanie korzystające ze zwolnienia z art. 21 ust. 1 pkt 3b; część jako przychód ze stosunku pracy. Zalecane konsultacje z doradcą podatkowym.",
                  type: "warn",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`border rounded-xl p-5 ${
                    item.type === "error" ? "border-red-200 bg-red-50" :
                    item.type === "ok" ? "border-green-200 bg-green-50" :
                    "border-amber-200 bg-amber-50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {item.type === "error" && <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />}
                    {item.type === "ok" && <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />}
                    {item.type === "warn" && <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />}
                    <div>
                      <p className={`font-semibold mb-1 text-sm ${
                        item.type === "error" ? "text-red-900" :
                        item.type === "ok" ? "text-green-900" : "text-amber-900"
                      }`}>{item.title}</p>
                      <p className={`text-sm ${
                        item.type === "error" ? "text-red-800" :
                        item.type === "ok" ? "text-green-800" : "text-amber-800"
                      }`}>{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ZUS */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Składki ZUS a świadczenia delegacyjne</h2>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <p className="text-slate-700 text-sm mb-4">
                Podstawa wymiaru składek ZUS jest taka sama jak podstawa PIT. Dieta i inne świadczenia podróżne do limitu rozporządzeniowego są wyłączone z podstawy ZUS (§ 2 ust. 1 pkt 15 rozporządzenia składkowego). Nadwyżka — zarówno PIT jak i ZUS.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-2 font-semibold text-slate-700">Świadczenie</th>
                      <th className="text-center py-2 font-semibold text-slate-700">PIT</th>
                      <th className="text-center py-2 font-semibold text-slate-700">ZUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { s: "Dieta do limitu", pit: "zwolniona", zus: "brak podstawy" },
                      { s: "Dieta ponad limit", pit: "przychód", zus: "wlicza się" },
                      { s: "Bilet służbowy (firma płaci)", pit: "brak przychodu", zus: "brak podstawy" },
                      { s: "Hotel do limitu (faktura)", pit: "zwolniony", zus: "brak podstawy" },
                      { s: "Hotel ponad limit", pit: "przychód", zus: "wlicza się" },
                      { s: "Ryczałt noclegowy krajowy (≤45 zł)", pit: "zwolniony", zus: "brak podstawy" },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "" : "bg-slate-50"}`}>
                        <td className="py-2.5 text-slate-900">{row.s}</td>
                        <td className="py-2.5 text-center">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            row.pit === "przychód" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                          }`}>{row.pit}</span>
                        </td>
                        <td className="py-2.5 text-center">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            row.zus === "wlicza się" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                          }`}>{row.zus}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* CIT */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">CIT — świadczenia podróżne jako koszt firmy</h2>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <p className="text-slate-700 text-sm mb-4">
                Po stronie pracodawcy wszystkie prawidłowo udokumentowane koszty delegacji służbowej są kosztem uzyskania przychodu (KUP) — zarówno w limicie rozporządzenia, jak i ponad limit (jeśli pracodawca zdecyduje się wypłacać wyższe diety). Warunek: związek z działalnością i właściwa dokumentacja.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-slate-900 mb-2 text-sm">KUP firmy (zawsze, jeśli służbowe):</p>
                  <ul className="space-y-1.5 text-slate-600 text-xs">
                    {[
                      "Bilety lotnicze i kolejowe",
                      "Faktury hotelowe",
                      "Diety — do limitu i ponad (KUP bez ograniczeń)",
                      "Wynajem aut, taksówki, parkingi",
                      "Ubezpieczenie podróżne",
                      "Opłaty wizowe i konsularne",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2 text-sm">Wymagana dokumentacja:</p>
                  <ul className="space-y-1.5 text-slate-600 text-xs">
                    {[
                      "Polecenie wyjazdu służbowego",
                      "Faktury na NIP pracodawcy",
                      "Bilety i boarding passy",
                      "Rozliczenie kosztów podróży",
                      "Potwierdzenie celu biznesowego",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-700">
                <strong>Uwaga na gastronomię:</strong> Koszty reprezentacji (kolacje z klientami w restauracjach) nie są KUP zgodnie z art. 16 ust. 1 pkt 28 CIT. Ale posiłek w czasie podróży służbowej bez udziału klienta — jest KUP, o ile udokumentowany fakturą.
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: "Do jakiego limitu dieta jest wolna od podatku?",
                  a: "Dieta jest wolna od PIT do wysokości określonej w rozporządzeniu Ministra Pracy. Dla delegacji krajowych limit wynosi 45 zł/dobę (od 01.01.2023), dla zagranicznych — zgodnie z tabelą dla danego kraju. Nadwyżka ponad te limity stanowi przychód pracownika i podlega opodatkowaniu.",
                },
                {
                  q: "Czy bilet lotniczy kupiony przez firmę jest przychodem pracownika?",
                  a: "Nie. Bilet lotniczy zakupiony przez pracodawcę na potrzeby podróży służbowej nie generuje przychodu po stronie pracownika — jest to świadczenie niezbędne do wykonania obowiązków służbowych, zwolnione z PIT na podstawie art. 21 ust. 1 pkt 16 lit. b ustawy o PIT.",
                },
                {
                  q: "Czy hotel opłacony przez pracodawcę jest przychodem pracownika?",
                  a: "Nie, jeśli koszt noclegu nie przekracza limitu z rozporządzenia (lub pracodawca opłaca hotel bezpośrednio). Dla delegacji zagranicznych limit noclegowy wynosi np. 150 EUR/noc dla Niemiec — kwota powyżej limitu jest przychodem pracownika.",
                },
                {
                  q: "Jak opodatkowane jest odszkodowanie EC 261 wypłacone pracownikowi?",
                  a: "Odszkodowanie EC 261/2004 (250–600 EUR) jest przychodem ze stosunku pracy, jeśli pracownik dostał bilet służbowy, ale formalnie to on jest pasażerem. Kwestia opodatkowania jest sporna — część interpretacji DKIS uznaje je za przychód zwolniony, część za podlegający PIT. Bezpieczniej zgłosić do działu kadr.",
                },
                {
                  q: "Czy ryczałt za użycie prywatnego samochodu w delegacji jest opodatkowany?",
                  a: "Ryczałt za jazdy prywatnym autem w delegacji jest wolny od PIT do limitu z rozporządzenia (tzw. 'kilometrówka'): 0,89 zł/km dla aut powyżej 900 cm³ i 0,69 zł/km poniżej. Kwota powyżej tych stawek jest przychodem pracownika.",
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
                    {openFaq === idx
                      ? <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />}
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

          {/* Powiązane artykuły */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Powiązane artykuły</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { title: "Dieta za lot służbowy — ile wynosi i jak rozliczyć?", slug: "dieta-za-lot-delegacja-rozliczenie" },
                { title: "Bilet lotniczy jako koszt uzyskania przychodu", slug: "bilet-lotniczy-koszt-uzyskania-przychodu" },
                { title: "Ubezpieczenie podróżne — koszty i odliczenia", slug: "ubezpieczenie-podrozne-koszty-odliczenia" },
                { title: "Zwrot kosztów delegacji — procedura krok po kroku", slug: "zwrot-kosztow-delegacji" },
              ].map((art) => (
                <Link
                  key={art.slug}
                  href={`/artykuly/${art.slug}`}
                  className="bg-white border border-slate-200 rounded-xl p-4 hover:border-slate-400 transition-colors text-sm font-medium text-slate-800"
                >
                  {art.title} →
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-slate-800 text-white rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-3">Lot służbowy był opóźniony lub odwołany?</h3>
            <p className="text-slate-300 mb-6 text-sm max-w-xl mx-auto">
              Odszkodowanie EC 261 do 600 EUR przysługuje pasażerowi — niezależnie od tego, kto kupił bilet. Sprawdź swoje roszczenie.
            </p>
            <a
              href="https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=podatek-swiadczenia-podrozne"
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
