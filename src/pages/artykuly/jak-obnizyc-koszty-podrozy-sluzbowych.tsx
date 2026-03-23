import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, Briefcase, ArrowRight, TrendingDown } from "lucide-react";

export default function JakObnizycKosztPodrozySluzbowych() {
  return (
    <>
      <SEO
        title="Jak obniżyć koszty podróży służbowych o 30%? Praktyczny przewodnik"
        description="7 sprawdzonych metod redukcji kosztów lotów służbowych: wcześniejsze rezerwacje, corporate fares, kontrola klas, polityka zakupowa i odzyskiwanie odszkodowań EC 261."
        canonicalUrl="https://bizneslot.info/artykuly/jak-obnizyc-koszty-podrozy-sluzbowych"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Jak obniżyć koszty podróży służbowych o 30%? Praktyczny przewodnik",
            description:
              "Praktyczne metody redukcji wydatkow na loty sluzbowe: rezerwacje z wyprzedzeniem, corporate fares, polityka klas, konsolidacja dostawcy i odzyskiwanie odszkodowan EC 261.",
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
                name: "Jak szybko mozna obnizyc koszty lotow sluzbowych?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pierwsze oszczednosci mozna uzyskac juz w ciagu 30 dni: wdrozenie reguly rezerwacji z 14-dniowym wyprzedzeniem i limitow klas na krotkich trasach daje natychmiastowy efekt. Negocjacje corporate fares wymagaja kilku miesiecy, ale przynosz 10-20% rabatu na regularnych trasach.",
                },
              },
              {
                "@type": "Question",
                name: "Czy corporate fares sa dostepne dla malych firm?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Corporate fares negocjuje sie zazwyczaj przy wolumenie powyzej 200 000 PLN rocznie z jedna linia. Mniejsze firmy moga korzystac z programow small business (np. LOT Business Club, Lufthansa Business) ktore nie wymagaja minimalnego wolumenu, ale daja mniejsze rabaty.",
                },
              },
              {
                "@type": "Question",
                name: "Czy wideokonferencje faktycznie zastepuja loty sluzbowe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak, w okreslonych przypadkach. Wewnetrzne spotkania statusowe, brifeingi projektowe i szkolenia mozna z powodzeniem prowadzic zdalnie. Pierwsze spotkania z klientem, podpisywanie umow i negocjacje warto prowadzic osobiscie. Firmy z dojrzala polityka travel osiagaja 15-25% redukcji liczby lotow przez selektywne stosowanie wideokonferencji.",
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
            <TrendingDown className="w-4 h-4" />
            <span>Zarządzanie podróżami służbowymi</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">
            Jak obniżyć koszty podróży służbowych o 30%? Praktyczny przewodnik
          </h1>
          <p className="text-blue-100 text-lg">
            Redukcja o 30% brzmi ambitnie, ale firmy z dojrzałym procesem zarządzania podróżami
            osiągają to regularnie. Kluczem nie są cięcia — lecz kilka konkretnych zmian
            w sposobie rezerwacji i kontroli wydatków.
          </p>
        </div>

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl px-6 py-5 mb-8">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-1">
            Krótka odpowiedź
          </p>
          <p className="text-gray-800 font-medium">
            Największe oszczędności dają: <strong>rezerwacje z 14+ dniowym wyprzedzeniem</strong>{" "}
            (–15–40% ceny biletu), <strong>polityka klas lotniczych według dystansu</strong>{" "}
            (–10–20%), <strong>konsolidacja dostawcy i corporate fares</strong> (–10–20%) oraz
            systematyczne odzyskiwanie odszkodowań EC 261, które firma dziś zostawia na stole.
          </p>
        </div>

        {/* 7 metod */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">7 metod redukcji kosztów lotów służbowych</h2>
          <div className="space-y-4">

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-sm font-bold shrink-0">1</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Rezerwacje z wyprzedzeniem — najprostsza dźwignia
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    Średnia cena biletu economy na trasach europejskich jest o 15–40% niższa przy
                    rezerwacji 14–21 dni przed wylotem vs. 2–3 dni przed. Wprowadź w travel policy
                    obowiązek rezerwacji z minimum 7-dniowym wyprzedzeniem (z wyjątkami dla
                    pilnych wyjazdów wymagającymi zatwierdzenia managera).
                  </p>
                  <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600">
                    <strong>Przykład:</strong> Trasa WAW–FRA: bilet kupiony 2 dni przed wylotem
                    kosztuje średnio 1 200 PLN. Ten sam bilet kupiony 3 tygodnie wcześniej —
                    ok. 400–600 PLN. Przy 10 takich lotach miesięcznie oszczędność wynosi
                    6 000–8 000 PLN.
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-sm font-bold shrink-0">2</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Polityka klas — economy na Europę, biznes tylko na dalekie trasy
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    Bilet w klasie biznes na trasie WAW–FRA kosztuje 3–8x więcej niż economy —
                    przy locie trwającym 2,5h. Ustal próg dystansowy (np. powyżej 6h lub 5 000 km)
                    jako warunek kwalifikacji do klasy biznes. Pracownicy na krótkich trasach
                    mogą korzystać z premium economy jako kompromisu.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Potencjał oszczędności: 10–25% całkowitego budżetu lotowego w firmach,
                    gdzie klasa biznes jest używana na trasach europejskich.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-sm font-bold shrink-0">3</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Corporate fares i programy lojalnościowe dla firm
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    Przy wolumenie powyżej 200 000 PLN rocznie z jedną linią możesz negocjować
                    stawki korporacyjne (corporate fares) — zwykle 10–20% poniżej cen publicznych,
                    z dodatkowymi benefitami (elastyczne zmiany, pierwszeństwo upgradu, dodatkowy
                    bagaż). Mniejsze firmy mogą skorzystać z programów SME linii lotniczych.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Sprawdź: LOT Business Club, Lufthansa Business Fares, KLM/Air France BlueBiz.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-sm font-bold shrink-0">4</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Konsolidacja rezerwacji — jeden kanał zamiast wielu
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    Jeśli pracownicy rezerwują loty przez różne portale (booking.com, linia,
                    Kayak, biuro podróży), firma traci widoczność kosztów i możliwość negocjacji.
                    Jeden kanał (TMC lub SBT) daje pełny raport wydatków, approval flow i dane
                    do negocjacji z liniami.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Efekt uboczny: eliminacja duplikatów i nieautoryzowanych rezerwacji.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-sm font-bold shrink-0">5</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Selektywna zamiana lotów na kolej i wideokonferencje
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    Trasy poniżej 2,5h czasu lotu (Warszawa–Kraków, Warszawa–Wrocław,
                    Warszawa–Gdańsk) często mają korzystną alternatywę kolejową — po uwzględnieniu
                    dojazdu na lotnisko i odprawy. Połączenie Warszawa–Berlin (PKP InterCity) jest
                    często szybsze door-to-door niż lot.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Regularne spotkania statusowe i brifeingi — widekonferencja zamiast lotu
                    daje 100% oszczędność na danym wyjeździe bez straty wartości merytorycznej.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-sm font-bold shrink-0">6</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Raportowanie i analiza spend — znajdź ukryte marnotrawstwo
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    Bez danych nie ma optymalizacji. Miesięczny raport kosztów per pracownik,
                    per departament i per trasa ujawnia wzorce: który dział rezerwuje najpóźniej,
                    które trasy są nadreprezentowane, gdzie klasa biznes jest używana niezgodnie
                    z polityką.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Platformy TMC (Concur, TravelPerk) generują takie raporty automatycznie.
                    Przy braku TMC — arkusz Excel z danymi z kart firmowych wystarczy na start.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-600 text-white text-sm font-bold shrink-0">7</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Odszkodowania EC 261 — pieniądze, które firma dziś zostawia na stole
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    Przy średniej firmie wysyłającej 50 pracowników miesięcznie, wskaźnik
                    opóźnień 3h+ na poziomie 5–8% oznacza 2–4 potencjalne roszczenia EC 261 co
                    miesiąc — po 250–600 EUR każde. Rocznie to 6 000–28 000 EUR, które najczęściej
                    nikt nie odzyskuje, bo pracownicy nie wiedzą o prawie lub nie chcą się zajmować
                    formalnościami.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Rozwiązanie: dodaj do travel policy punkt wskazujący zewnętrzny podmiot
                    do dochodzenia roszczeń. Pracownik działa samodzielnie, firma nie ponosi
                    kosztów obsługi.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Plan wdrożenia */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Plan wdrożenia w 90 dni</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Etap</th>
                  <th className="px-4 py-3 text-left">Działania</th>
                  <th className="px-4 py-3 text-left">Spodziewana oszczędność</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">Dni 1–30</td>
                  <td className="px-4 py-3 text-gray-700">
                    Analiza obecnych wydatków, wdrożenie reguły 14 dni, limit klas na trasy europejskie
                  </td>
                  <td className="px-4 py-3 text-green-700 font-medium">10–20%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Dni 31–60</td>
                  <td className="px-4 py-3 text-gray-700">
                    Konsolidacja rezerwacji w jednym kanale, wdrożenie TMC lub SBT, approval flow
                  </td>
                  <td className="px-4 py-3 text-green-700 font-medium">+5–10%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Dni 61–90</td>
                  <td className="px-4 py-3 text-gray-700">
                    Negocjacje corporate fares, program lojalnościowy dla firm, punkt EC 261 w travel policy
                  </td>
                  <td className="px-4 py-3 text-green-700 font-medium">+5–10%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Ostrzeżenia */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Czego unikać przy cięciu kosztów</h2>
          <div className="space-y-3">
            {[
              {
                blad: "Cięcie klasy biznes na wszystkich trasach bez wyjątku",
                skutek: "Pracownicy wyczerpani po 12h w economy nie są produktywni na spotkaniu. Koszt straconej szansy biznesowej może przewyższyć oszczędność na bilecie.",
              },
              {
                blad: "Zakaz elastycznych biletów (tylko najtańsze taryfy)",
                skutek: "Jedna zmiana rezerwacji kosztuje więcej niż różnica między tanim a flex biletem. Przy dynamicznym kalendarzu biznesowym tania taryfa bywa droższa w praktyce.",
              },
              {
                blad: "Brak procedury przy zakłóceniach — pracownik radzi sobie sam",
                skutek: "Ad hoc hotel za 1 000 PLN, taksówka za 300 PLN i stracona doba pracy. Procedura zakłóceń zwraca się przy pierwszym większym opóźnieniu.",
              },
            ].map((item) => (
              <div key={item.blad} className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.blad}</p>
                  <p className="text-gray-600 text-sm">{item.skutek}</p>
                </div>
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
                href: "/artykuly/polityka-podrozy-sluzbowych-jak-napisac",
                label: "Travel Policy — jak napisać od zera?",
              },
              {
                href: "/artykuly/travel-manager-obowiazki-narzedzia",
                label: "Travel manager — obowiązki i narzędzia",
              },
              {
                href: "/artykuly/narzedzia-zarzadzania-podrozami-concur-travelperk",
                label: "SAP Concur vs TravelPerk vs GetAbroad",
              },
              {
                href: "/artykuly/czy-pracodawca-moze-zatrzymac-odszkodowanie-za-lot",
                label: "Odszkodowanie EC 261 — pracownik czy firma?",
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
                Ile firma może zaoszczędzić na lotach służbowych rocznie?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Zależy od punktu wyjścia. Firmy bez żadnej polityki podróży i bez TMC osiągają
                  20–35% redukcji po wdrożeniu podstawowych zasad. Firmy z częściowym procesem
                  — 10–20%. Przy budżecie 1 mln PLN rocznie oznacza to 100 000–350 000 PLN
                  potencjalnych oszczędności.
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
                Czy wdrożenie TMC faktycznie obniża koszty, czy tylko zwiększa widoczność?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 text-sm">
                  Obydwa efekty. Sam TMC nie obniża kosztów — obniża je widoczność i enforcement
                  polityki, które TMC umożliwia. Firmy, które wdrażają TMC bez egzekwowania
                  travel policy, nie osiągają oszczędności. Narzędzie jest tylko tak dobre,
                  jak zasady, które za nim stoją.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-2xl px-8 py-8 text-center">
          <div className="flex justify-center mb-3">
            <CheckCircle2 className="w-8 h-8 text-blue-300" />
          </div>
          <h2 className="text-xl font-bold mb-2">Pracownicy mają niezrealizowane roszczenia EC 261?</h2>
          <p className="text-blue-200 mb-5 text-sm">
            To jeden z łatwiejszych do zamknięcia punktów optymalizacji. ClaimWinger przejął
            sprawę — pracownik zgłasza lot, reszta bez angażowania firmy.
          </p>
          <Link
            href="https://app.claimwinger.com/?utm_source=bizneslot&utm_medium=article&utm_campaign=jak-obnizyc-koszty-podrozy-sluzbowych"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Sprawdź ClaimWinger
          </Link>
        </div>
      </main>
    </>
  );
}
