import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle2, XCircle, AlertTriangle, ArrowRight, Scale, Users } from "lucide-react";

export default function StrajkLiniiLotniczej() {
  return (
    <>
      <SEO
        title="Strajk linii lotniczej — nadzwyczajna okoliczność czy prawo do odszkodowania EC 261?"
        description="Strajk własnych pracowników linii lotniczej NIE jest nadzwyczajną okolicznością — należy Ci się odszkodowanie do 600 EUR. Strajk zewnętrzny (ATC, obsługa naziemna) może zwolnić linię z obowiązku zapłaty."
        canonicalUrl="https://bizneslot.info/artykuly/strajk-linii-lotniczej-nadzwyczajna-okolicznosc"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Strajk linii lotniczej — czy to nadzwyczajna okoliczność zwalniająca z odszkodowania?",
            description:
              "Strajk własnych pracowników linii lotniczej (pilotów, personelu kabinowego) nie jest nadzwyczajną okolicznością — pasażerom przysługuje odszkodowanie EC 261/2004. Strajk zewnętrzny (ATC) może zwolnić linię z odpowiedzialności.",
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
                name: "Czy strajk linii lotniczej zwalnia z obowiązku wypłaty odszkodowania EC 261?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Zależy od rodzaju strajku. Strajk własnych pracowników linii (pilotów, stewardów) NIE jest nadzwyczajną okolicznością — odszkodowanie przysługuje. Strajk zewnętrzny (kontrolerów lotów, obsługi naziemnej lotniska) może być uznany za nadzwyczajną okoliczność zwalniającą linię z wypłaty.",
                },
              },
              {
                "@type": "Question",
                name: "Jaki wyrok ETS potwierdza prawo do odszkodowania przy strajku własnych pracowników?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Wyrok Trybunału Sprawiedliwości UE w sprawie C-195/17 Helga Krüsemann (2018): strajk pracowników ogłoszony przez związki zawodowe własnej linii lotniczej nie stanowi nadzwyczajnej okoliczności. Lot odwołany z powodu strajku pilotów — odszkodowanie się należy.",
                },
              },
              {
                "@type": "Question",
                name: "Czy strajk kontrolerów lotów (ATC) to nadzwyczajna okoliczność?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tak. Strajk kontrolerów ruchu lotniczego (ATC) lub pracowników lotniska jest uznawany za nadzwyczajną okoliczność zewnętrzną, na którą linia nie ma wpływu. W takim przypadku odszkodowanie EC 261 nie przysługuje, choć linia nadal musi zapewnić opiekę (jedzenie, napoje, noclegi przy długich opóźnieniach).",
                },
              },
              {
                "@type": "Question",
                name: "Jak linia lotnicza powinna udowodnić nadzwyczajną okoliczność?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To linia musi udowodnić, że zakłócenie wynikło z nadzwyczajnej okoliczności i że podjęła wszelkie rozsądne środki, by uniknąć opóźnienia. Samo powołanie się na 'strajk' bez wskazania jego rodzaju i dowodów jest niewystarczające. Możesz żądać pisemnych wyjaśnień.",
                },
              },
              {
                "@type": "Question",
                name: "Co mi przysługuje gdy lot jest odwołany z powodu strajku?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Niezależnie od przyczyny odwołania linia musi zaoferować: zwrot kosztów biletu lub lot zastępczy, posiłki i napoje przy oczekiwaniu, nocleg jeśli wymagany. Odszkodowanie (250–600 EUR) przysługuje gdy strajk dotyczył własnych pracowników linii.",
                },
              },
              {
                "@type": "Question",
                name: "Linia odmówiła odszkodowania powołując się na strajk — co zrobić?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Zażądaj pisemnego uzasadnienia z podaniem rodzaju strajku (wewnętrzny/zewnętrzny) i dat. Jeśli linia powołuje się na strajk własnych pracowników jako nadzwyczajną okoliczność — ma błędną interpretację prawa UE. Eskaluj do ULC lub skorzystaj z wyspecjalizowanej firmy roszczeniowej.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-rose-700 to-red-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-rose-200 text-sm mb-4">
            <Link href="/artykuly" className="hover:text-white transition-colors">
              Artykuły
            </Link>
            <span>/</span>
            <span>Prawo i Finanse</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-rose-500/30 text-rose-100 px-3 py-1 rounded-full text-sm font-medium">
              EC 261/2004
            </span>
            <span className="text-rose-200 text-sm">8 min czytania</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Strajk linii lotniczej — czy to nadzwyczajna okoliczność zwalniająca z odszkodowania?
          </h1>
          <p className="text-xl text-rose-100 max-w-2xl">
            Linia odwołała lot przez strajk pilotów i twierdzi, że nie należy Ci się odszkodowanie? Sprawdź co mówi Trybunał Sprawiedliwości UE — odpowiedź może Cię zaskoczyć.
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
                <strong>Strajk własnych pracowników linii lotniczej (pilotów, personelu kabinowego) NIE jest
                nadzwyczajną okolicznością</strong> — odszkodowanie EC 261/2004 do 600 EUR przysługuje.
                Strajk zewnętrzny (kontrolerów lotów ATC, obsługi naziemnej lotniska) <strong>może</strong> zwalniać
                linię z wypłaty, ale linia nadal musi zapewnić opiekę i alternatywny transport.
              </p>
            </div>
          </div>
        </div>

        {/* Podstawa prawna */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Co mówi Trybunał Sprawiedliwości UE?</h2>
          <p className="text-slate-700 mb-5">
            Przez lata linie lotnicze powszechnie odmawiały odszkodowań przy każdym strajku, traktując go automatycznie
            jako nadzwyczajną okoliczność. Trybunał Sprawiedliwości UE przeciął tę praktykę jednym wyrokiem.
          </p>

          <div className="bg-rose-50 border border-rose-200 rounded-xl p-5 mb-5">
            <p className="font-semibold text-rose-900 mb-2 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              Wyrok ETS C-195/17 Helga Krüsemann i in. v. TUIfly (2018)
            </p>
            <p className="text-rose-800 text-sm mb-3">
              TUIfly odwołała loty w październiku 2016 r. z powodu spontanicznego strajku pracowników (sick-out)
              po ogłoszeniu restrukturyzacji firmy. Linia twierdziła, że to nadzwyczajna okoliczność.
            </p>
            <p className="text-rose-900 text-sm font-medium border-t border-rose-200 pt-3">
              Wyrok: Spontaniczne nieobecności pracowników stanowiące reakcję na decyzje zarządu wpisują się w normalną
              działalność przedsiębiorstwa lotniczego. <strong>Nie stanowią nadzwyczajnej okoliczności</strong> zwalniającej
              z odszkodowania EC 261/2004.
            </p>
          </div>

          <p className="text-slate-700">
            Zasada jest prosta: <strong>nadzwyczajna okoliczność musi być zewnętrzna i niezależna od linii lotniczej</strong>.
            Stosunki pracownicze, negocjacje płacowe, warunki zatrudnienia — to wszystko leży w sferze zarządzania linią.
            Strajk własnych pracowników jest konsekwencją tych decyzji, nie zdarzeniem losowym z zewnątrz.
          </p>
        </section>

        {/* Tabela strajk własny vs zewnętrzny */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Strajk wewnętrzny vs zewnętrzny — tabela porównawcza</h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="text-left p-4 font-semibold">Rodzaj strajku</th>
                  <th className="text-left p-4 font-semibold">Przykłady</th>
                  <th className="text-center p-4 font-semibold">Nadzwyczajna okoliczność?</th>
                  <th className="text-center p-4 font-semibold">Odszkodowanie EC 261?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-800">Strajk własnych pracowników</td>
                  <td className="p-4 text-slate-600">Piloci, stewardzi, personel naziemny linii</td>
                  <td className="p-4 text-center font-bold text-red-700">NIE</td>
                  <td className="p-4 text-center font-bold text-green-700">TAK</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50 hover:bg-slate-100">
                  <td className="p-4 font-medium text-slate-800">Strajk kontrolerów ATC</td>
                  <td className="p-4 text-slate-600">Kontrolerzy ruchu lotniczego Eurocontrol / krajowych służb</td>
                  <td className="p-4 text-center font-bold text-green-700">TAK</td>
                  <td className="p-4 text-center font-bold text-red-700">NIE*</td>
                </tr>
                <tr className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-800">Strajk obsługi lotniska</td>
                  <td className="p-4 text-slate-600">Pracownicy lotniska, obsługa bagażu zatrudniona przez port</td>
                  <td className="p-4 text-center font-bold text-amber-600">Zazwyczaj TAK</td>
                  <td className="p-4 text-center font-bold text-red-700">NIE*</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50 hover:bg-slate-100">
                  <td className="p-4 font-medium text-slate-800">Strajk handlingu (outsourcing)</td>
                  <td className="p-4 text-slate-600">Outsourcowana obsługa naziemna zatrudniona przez linię</td>
                  <td className="p-4 text-center font-bold text-red-700">NIE</td>
                  <td className="p-4 text-center font-bold text-green-700">TAK</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            * Linia musi nadal zapewnić opiekę (posiłki, noclegi) i alternatywny transport niezależnie od przyczyny.
          </p>

          <div className="mt-4 bg-amber-50 border border-amber-300 rounded-xl p-4">
            <p className="text-amber-900 text-sm">
              <strong>Uwaga na outsourcing:</strong> Niektóre linie zlecają obsługę naziemną zewnętrznym firmom.
              Jeśli ta firma strajkuje, a linia ją zatrudnia — ETS uznaje to za wewnętrzną odpowiedzialność linii.
              Strajk outsourcowanego handlingu nie jest nadzwyczajną okolicznością.
            </p>
          </div>
        </section>

        {/* Co przysługuje */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Co Ci przysługuje przy odwołanym locie — strajk czy nie?</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Zawsze (każdy strajk)
              </p>
              <ul className="text-green-800 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Zwrot kosztu biletu (pełny) lub lot zastępczy
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Posiłki i napoje przy oczekiwaniu ≥2h
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  Nocleg i transport do hotelu gdy konieczny
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  2 bezpłatne rozmowy/wiadomości (telefon, e-mail)
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Tylko strajk własnych pracowników
              </p>
              <ul className="text-blue-800 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  250 EUR — trasy do 1500 km
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  400 EUR — trasy 1500–3500 km
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  600 EUR — trasy &gt;3500 km (UE↔poza UE)
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  Redukcja o 50% możliwa przy locie zastępczym w podobnym czasie
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Jak linia próbuje uniknąć */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Jak linie unikają wypłaty — i jak reagować</h2>

          <div className="space-y-4">
            {[
              {
                tactic: "„Strajk to nadzwyczajna okoliczność”",
                response: "Zapytaj pisemnie o rodzaj strajku. Jeśli to strajk własnych pracowników — powołaj się na wyrok ETS C-195/17. Linia musi udowodnić, że to strajk zewnętrzny.",
                icon: <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />,
              },
              {
                tactic: "„To był spontaniczny sick-out, nie formalny strajk”",
                response: "Wyrok C-195/17 dotyczy właśnie spontanicznych zwolnień chorobowych. Trybunał celowo nie rozróżnia formy — liczy się że to pracownicy linii, nie zewnętrzne zdarzenie.",
                icon: <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />,
              },
              {
                tactic: "„Podjęliśmy wszelkie rozsądne środki”",
                response: "Zażądaj wyjaśnienia jakie konkretnie środki zostały podjęte. Samo twierdzenie bez dowodów jest niewystarczające — ciężar dowodu spoczywa na linii.",
                icon: <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />,
              },
              {
                tactic: "Brak odpowiedzi lub odpowiedź szablonowa",
                response: "Eskaluj do ULC (Urząd Lotnictwa Cywilnego) — organ może nałożyć karę na linię. Możesz też skierować sprawę do e-Sądu lub wyspecjalizowanej firmy.",
                icon: <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />,
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  {item.icon}
                  <div>
                    <p className="font-semibold text-slate-900 mb-1 text-sm">{item.tactic}</p>
                    <p className="text-slate-600 text-sm">{item.response}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Przykład */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Przykład: strajk Ryanair — lot służbowy WAW→DUB</h2>

          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
            <p className="text-slate-700 text-sm mb-4">
              <strong>Piotr</strong>, dyrektor sprzedaży z Warszawy, miał lot Ryanair WAW→DUB na spotkanie z klientem.
              Dzień przed wylotem Ryanair odwołał rejs z powodu strajku pilotów — pracownicy protestowali przeciwko
              warunkom pracy. Linia w e-mailu napisała: <em>„Lot odwołany z powodu strajku — nadzwyczajna okoliczność,
              odszkodowanie nie przysługuje."</em>
            </p>

            <div className="border-t border-slate-200 pt-4 space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-green-800 text-sm">
                  <strong>Co Piotrowi przysługuje:</strong> Zwrot biletu w pełnej wysokości + odszkodowanie
                  250 EUR (trasa WAW→DUB &lt;1500 km). Strajk pilotów Ryanair = strajk własnych pracowników = brak
                  nadzwyczajnej okoliczności (wyrok ETS C-195/17).
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-blue-800 text-sm">
                  <strong>Działanie:</strong> Piotr wysłał pisemne roszczenie powołując się na C-195/17.
                  Ryanair po 45 dniach odmówił ponownie. Piotr skierował sprawę do ClaimWinger — wypłata nastąpiła
                  po 3 miesiącach w trybie ADR (Alternative Dispute Resolution).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kontekstowe CTA */}
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-rose-900 text-lg">Lot odwołany przez strajk? Sprawdź swoje prawa.</p>
              <p className="text-rose-700 text-sm mt-1">
                ClaimWinger bezpłatnie oceni czy strajk był wewnętrzny czy zewnętrzny i czy odszkodowanie się należy.
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl/odwolany-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=strajk-nadzwyczajna-okolicznosc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-800 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Sprawdź roszczenie <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Jak złożyć roszczenie */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Jak złożyć roszczenie przy strajku — krok po kroku</h2>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Zbierz dowody",
                desc: "Zachowaj e-mail o odwołaniu lotu (ze wskazaniem przyczyny), karty pokładowe, numer PNR. Zapisz screenshoty wiadomości o strajku z mediów lub aplikacji linii — potwierdzają charakter zakłócenia.",
                color: "bg-rose-100 text-rose-700",
              },
              {
                step: "2",
                title: "Ustal rodzaj strajku",
                desc: "Piloci / stewardzi / personel linii → strajk wewnętrzny → odszkodowanie przysługuje. Kontrolerzy ATC / pracownicy lotniska → strajk zewnętrzny → brak odszkodowania, ale opieka obowiązkowa.",
                color: "bg-purple-100 text-purple-700",
              },
              {
                step: "3",
                title: "Złóż pisemne roszczenie",
                desc: "Skieruj pismo do linii z odwołaniem do EC 261/2004 art. 7 i wyroku C-195/17 (przy strajku wewnętrznym). Określ żądaną kwotę i wyznacz 30-dniowy termin odpowiedzi.",
                color: "bg-teal-100 text-teal-700",
              },
              {
                step: "4",
                title: "Eskaluj przy odmowie",
                desc: "ULC (Urząd Lotnictwa Cywilnego) przyjmuje skargi na linie odmawiające odszkodowań. Alternatywa: e-Sąd lub wyspecjalizowana firma — przejmą sprawę bez kosztów z góry.",
                color: "bg-orange-100 text-orange-700",
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
              <h3 className="text-2xl font-bold mb-2">Linia odwołała lot z powodu strajku i odmawia wypłaty?</h3>
              <p className="text-slate-300 text-sm">
                ClaimWinger zna wyroki ETS i wie jak walczyć o odszkodowanie przy strajku własnych pracowników linii.
                Bezpłatna ocena roszczenia, wynagrodzenie tylko przy sukcesie.
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl?utm_source=bizneslot&utm_medium=article&utm_campaign=strajk-nadzwyczajna-okolicznosc-cta"
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
                q: "Czy strajk linii lotniczej zwalnia z obowiązku wypłaty odszkodowania EC 261?",
                a: "Zależy od rodzaju strajku. Strajk własnych pracowników linii (pilotów, stewardów) NIE jest nadzwyczajną okolicznością — odszkodowanie przysługuje. Strajk zewnętrzny (kontrolerów lotów, obsługi naziemnej lotniska) może być uznany za nadzwyczajną okoliczność zwalniającą linię z wypłaty.",
              },
              {
                q: "Jaki wyrok ETS potwierdza prawo do odszkodowania przy strajku własnych pracowników?",
                a: "Wyrok Trybunału Sprawiedliwości UE w sprawie C-195/17 Helga Krüsemann (2018): strajk pracowników ogłoszony przez związki zawodowe własnej linii lotniczej nie stanowi nadzwyczajnej okoliczności. Lot odwołany z powodu strajku pilotów — odszkodowanie się należy.",
              },
              {
                q: "Czy strajk kontrolerów lotów (ATC) to nadzwyczajna okoliczność?",
                a: "Tak. Strajk kontrolerów ruchu lotniczego (ATC) lub pracowników lotniska jest uznawany za nadzwyczajną okoliczność zewnętrzną, na którą linia nie ma wpływu. W takim przypadku odszkodowanie EC 261 nie przysługuje, choć linia nadal musi zapewnić opiekę.",
              },
              {
                q: "Jak linia lotnicza powinna udowodnić nadzwyczajną okoliczność?",
                a: "To linia musi udowodnić, że zakłócenie wynikło z nadzwyczajnej okoliczności i że podjęła wszelkie rozsądne środki, by uniknąć opóźnienia. Samo powołanie się na 'strajk' bez wskazania jego rodzaju i dowodów jest niewystarczające.",
              },
              {
                q: "Co mi przysługuje gdy lot jest odwołany z powodu strajku?",
                a: "Niezależnie od przyczyny odwołania linia musi zaoferować: zwrot kosztów biletu lub lot zastępczy, posiłki i napoje przy oczekiwaniu, nocleg jeśli wymagany. Odszkodowanie (250–600 EUR) przysługuje gdy strajk dotyczył własnych pracowników linii.",
              },
              {
                q: "Linia odmówiła odszkodowania powołując się na strajk — co zrobić?",
                a: "Zażądaj pisemnego uzasadnienia z podaniem rodzaju strajku (wewnętrzny/zewnętrzny). Jeśli linia powołuje się na strajk własnych pracowników — ma błędną interpretację prawa UE. Eskaluj do ULC lub skorzystaj z wyspecjalizowanej firmy roszczeniowej.",
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
              className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-rose-400 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-900 text-sm mb-1">
                Kiedy lot jest uznawany za odwołany według prawa UE?
              </p>
              <p className="text-slate-500 text-xs">Definicja, 5 przypadków i progi powiadomień</p>
            </Link>
            <Link
              href="/artykuly/ile-wynosi-odszkodowanie-opozniony-lot-sluzbowy"
              className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-rose-400 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-900 text-sm mb-1">
                Ile wynosi odszkodowanie za opóźniony lot służbowy?
              </p>
              <p className="text-slate-500 text-xs">Pełna tabela 250/400/600 EUR i warunki przyznania</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
