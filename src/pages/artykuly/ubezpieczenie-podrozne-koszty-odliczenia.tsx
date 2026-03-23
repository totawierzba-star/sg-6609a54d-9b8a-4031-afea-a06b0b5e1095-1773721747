import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Shield, Clock, CheckCircle, AlertTriangle, ArrowRight, FileText, DollarSign } from "lucide-react";

export default function UbezpieczeniePodrozneKosztyOdliczenia() {
  return (
    <>
      <SEO
        title="Ubezpieczenie podróżne w delegacji — koszty podatkowe i odliczenia | bizneslot.info"
        description="Czy ubezpieczenie podróżne pracownika jest kosztem firmy? Polisa grupowa vs indywidualna, PIT pracownika od ubezpieczenia opłaconego przez pracodawcę, KUP i VAT od polis podróżnych."
        canonicalUrl="https://bizneslot.info/artykuly/ubezpieczenie-podrozne-koszty-odliczenia"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <Shield className="w-4 h-4" />
            <span>Finanse delegacji</span>
            <span className="mx-2">·</span>
            <Clock className="w-4 h-4" />
            <span>7 min czytania</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Ubezpieczenie podróżne w delegacji — koszty podatkowe i odliczenia
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Firma płaci za polisę podróżną pracownika. Czy to koszt uzyskania przychodu?
            Czy pracownik zapłaci PIT od takiego świadczenia?
            Jak strukturyzować ubezpieczenia podróżne, żeby było korzystnie podatkowo.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Direct Answer Box */}
        <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg mb-10">
          <h2 className="text-lg font-bold text-green-900 mb-2">Krótka odpowiedź</h2>
          <p className="text-green-800">
            Składki na ubezpieczenie podróżne opłacane przez pracodawcę dla pracowników
            delegowanych są <strong>kosztem uzyskania przychodu firmy</strong>.
            Po stronie pracownika — <strong>zwolnienie z PIT</strong> (art. 21 ust. 1 pkt 11b ustawy
            o PIT) jeśli polisa dotyczy podróży służbowych. Polisa grupowa zakupiona
            dla wszystkich pracowników delegowanych jest korzystniejsza podatkowo
            niż indywidualna per pracownik. VAT od składek ubezpieczeniowych
            nie podlega odliczeniu — usługi ubezpieczeniowe są zwolnione z VAT.
          </p>
        </div>

        {/* Trzy modele ubezpieczenia */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Trzy modele ubezpieczenia podróżnego w firmie</h2>
          <p className="text-slate-700 mb-5">
            Firmy stosują różne podejścia do ubezpieczania podróży służbowych.
            Każde ma inne konsekwencje podatkowe dla firmy i pracownika.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Model</th>
                  <th className="p-3 text-left">Kto płaci</th>
                  <th className="p-3 text-left">KUP firmy</th>
                  <th className="p-3 text-left">PIT pracownika</th>
                  <th className="p-3 text-left">Ocena</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3 font-semibold">Polisa grupowa firmowa (annual multi-trip)</td>
                  <td className="p-3">Firma (zbiorczo za wszystkich)</td>
                  <td className="p-3 text-green-700 font-medium">Tak</td>
                  <td className="p-3 text-green-700 font-medium">Brak (zwolnienie PIT)</td>
                  <td className="p-3 text-green-700 font-bold">Najkorzystniejszy</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-semibold">Polisa indywidualna per delegacja (firma płaci)</td>
                  <td className="p-3">Firma (za każdą delegację osobno)</td>
                  <td className="p-3 text-green-700 font-medium">Tak</td>
                  <td className="p-3 text-green-700 font-medium">Brak (zwolnienie PIT)</td>
                  <td className="p-3 text-orange-700">OK, wyższy koszt admin.</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3 font-semibold">Zwrot kosztów polisy zakupionej przez pracownika</td>
                  <td className="p-3">Pracownik (zwrot przez rozliczenie delegacji)</td>
                  <td className="p-3 text-green-700 font-medium">Tak (jako koszt delegacji)</td>
                  <td className="p-3 text-green-700 font-medium">Brak (zwrot wydatku)</td>
                  <td className="p-3 text-orange-700">OK, wymaga dokumentacji</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-semibold">Brak polisy firmowej — pracownik sam kupuje</td>
                  <td className="p-3">Pracownik (bez zwrotu)</td>
                  <td className="p-3 text-red-700">Brak</td>
                  <td className="p-3 text-slate-500">N/D</td>
                  <td className="p-3 text-red-700">Ryzyko dla obu stron</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* KUP firmy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <DollarSign className="inline w-6 h-6 mr-2 text-blue-600" />
            Ubezpieczenie podróżne jako KUP firmy
          </h2>
          <p className="text-slate-700 mb-4">
            Składki na ubezpieczenie podróżne pracowników delegowanych spełniają
            definicję KUP z art. 15 ust. 1 CIT — są ponoszone w związku
            z działalnością gospodarczą (zabezpieczenie kadry podczas delegacji)
            i nie figurują w katalogu wyłączeń z art. 16 ust. 1 CIT.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-900 mb-3">Co jest KUP bez wątpliwości</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Polisa grupowa obejmująca pracowników delegowanych — KUP w całości składki rocznej</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Składka za polisę indywidualną na konkretną delegację zagraniczną</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Koszty assistance (pomoc w nagłych przypadkach) w ramach polisy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>NNW dla pracownika na czas delegacji (wypadkowe)</span>
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
              <h3 className="font-bold text-orange-900 mb-3">Obszary ryzyka podatkowego</h3>
              <ul className="space-y-2 text-sm text-orange-800">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Polisa obejmująca także prywatne podróże pracownika — może być zakwestionowana jako KUP w całości</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Ubezpieczenie sportów ekstremalnych przy delegacjach "incentive" (wyjazdy motywacyjne z elementem turystycznym)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Polisa dla członka rodziny pracownika towarzyszącego w delegacji — nie jest KUP</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PIT pracownika */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">PIT pracownika — kiedy składka to przychód?</h2>
          <p className="text-slate-700 mb-4">
            Gdy pracodawca płaci za ubezpieczenie pracownika, co do zasady
            jest to świadczenie niepieniężne, które może stanowić przychód
            pracownika ze stosunku pracy. Ale przy ubezpieczeniu podróżnym
            obowiązuje ważne zwolnienie.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-5">
            <h3 className="font-bold text-blue-900 mb-2">Zwolnienie z PIT — art. 21 ust. 1 pkt 11b ustawy o PIT</h3>
            <p className="text-sm text-blue-800 mb-3">
              Zwolnione z podatku dochodowego są świadczenia rzeczowe i ekwiwalenty
              za te świadczenia, ponoszone przez pracodawcę na rzecz pracownika
              z tytułu podróży służbowej — w tym składki na ubezpieczenie podróżne.
            </p>
            <p className="text-sm text-blue-800">
              <strong>Warunek:</strong> ubezpieczenie musi dotyczyć podróży służbowej
              (nie prywatnej), a pracownik musi odbywać delegację w rozumieniu
              przepisów prawa pracy.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Sytuacja</th>
                  <th className="p-3 text-left">PIT pracownika</th>
                  <th className="p-3 text-left">ZUS</th>
                  <th className="p-3 text-left">Podstawa</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="p-3">Polisa podróżna wyłącznie na delegacje służbowe</td>
                  <td className="p-3 text-green-700 font-medium">Zwolniona</td>
                  <td className="p-3 text-green-700 font-medium">Wyłączona z podstawy</td>
                  <td className="p-3">Art. 21 ust. 1 pkt 11b PIT</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3">Polisa roczna obejmująca delegacje + urlopy prywatne</td>
                  <td className="p-3 text-orange-700 font-medium">Częściowo opodatkowana</td>
                  <td className="p-3 text-orange-700">Częściowo</td>
                  <td className="p-3">Proporcja: dni służbowe / łączne dni objęcia</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="p-3">Polisa czysto prywatna opłacona przez pracodawcę</td>
                  <td className="p-3 text-red-700 font-medium">Opodatkowana w całości</td>
                  <td className="p-3 text-red-700">W podstawie ZUS</td>
                  <td className="p-3">Przychód ze stosunku pracy</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3">NNW w czasie delegacji (wypadkowe)</td>
                  <td className="p-3 text-green-700 font-medium">Zwolnione</td>
                  <td className="p-3 text-green-700 font-medium">Wyłączone z podstawy</td>
                  <td className="p-3">Art. 21 ust. 1 pkt 11b + stanowisko MF</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Polisa grupowa vs indywidualna */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Polisa grupowa vs indywidualna — co wybrać dla firmy?</h2>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3">Polisa grupowa (annual multi-trip)</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Jedna składka roczna za wszystkich pracowników — prosta administracja</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Niższy koszt jednostkowy przy wielu podróżujących pracownikach</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Obejmuje automatycznie każdą delegację bez konieczności osobnej aktywacji</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Jedno miejsce w kosztach — łatwe do rozliczenia przez dział finansowy</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Uwaga: jeśli polisa obejmuje też prywatne wyjazdy — wymaga podziału KUP / nie-KUP</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3">Polisa indywidualna per delegacja</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Lepsza przy nieregularnych delegacjach — płacisz tylko gdy pracownik jedzie</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Łatwa alokacja kosztu do konkretnej delegacji i projektu</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Wyższy koszt administracyjny — osobna polisa na każdy wyjazd</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Ryzyko: pracownik jedzie bez polisy jeśli nie zamówiono na czas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-800 mb-2">Kiedy która opcja się opłaca?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
              <div>
                <p className="font-semibold mb-1">Polisa grupowa — dla firm gdzie:</p>
                <ul className="space-y-1 text-xs">
                  <li>• &gt;5 pracowników regularnie delegowanych</li>
                  <li>• &gt;20 delegacji zagranicznych rocznie</li>
                  <li>• Travel manager zarządza polisami centralnie</li>
                  <li>• Firma chce mieć jedno rozwiązanie "bez myślenia"</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-1">Polisa indywidualna — dla firm gdzie:</p>
                <ul className="space-y-1 text-xs">
                  <li>• &lt;5 delegowanych pracowników</li>
                  <li>• Rzadkie, nieregularne wyjazdy zagraniczne</li>
                  <li>• Startupy i JDG delegujące sporadycznie</li>
                  <li>• Koszty muszą być przypisane do konkretnych projektów</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* VAT */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">VAT od składek ubezpieczeniowych</h2>
          <p className="text-slate-700 mb-4">
            Usługi ubezpieczeniowe są zwolnione z VAT na podstawie art. 43 ust. 1 pkt 37
            ustawy o VAT — zarówno w Polsce, jak i w całej UE (dyrektywa 2006/112/WE).
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-800">
                <strong>Konsekwencja:</strong> Faktura za polisę ubezpieczeniową nie zawiera VAT
                do odliczenia — usługa jest zwolniona, nie opodatkowana stawką 0%.
                To oznacza, że cała kwota składki wchodzi w koszty firmy jako KUP,
                ale nie ma VAT do "odzyskania". Wyjątek: prowizja brokera ubezpieczeniowego
                może być opodatkowana VAT 23% — wtedy jest odliczalna (jeśli zakup
                w związku z działalnością opodatkowaną VAT).
              </p>
            </div>
          </div>
        </section>

        {/* Jak strukturyzować */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <FileText className="inline w-6 h-6 mr-2 text-blue-600" />
            Jak strukturyzować ubezpieczenie podróżne — rekomendacje
          </h2>

          <div className="space-y-3">
            {[
              {
                step: 1,
                title: "Kup polisę grupową wyłącznie na podróże służbowe",
                desc: "Polisa obejmująca wyłącznie delegacje służbowe jest w całości KUP i nie generuje przychodu po stronie pracownika. Unikaj pakietów łączących delegacje z prywatnymi wyjazdami — komplikuje to rozliczenie podatkowe."
              },
              {
                step: 2,
                title: "Zapisz zakres polisy w travel policy",
                desc: "Travel policy powinna wymieniać ubezpieczyciela, numer polisy, numer infolinii assistance i zakres geograficzny. To jednocześnie dokumentacja biznesowego uzasadnienia kosztu i instrukcja dla pracownika."
              },
              {
                step: 3,
                title: "Zbieraj faktury ubezpieczyciela — nie samą polisę",
                desc: "Do KUP potrzebna jest faktura (lub nota obciążeniowa) wystawiona przez towarzystwo ubezpieczeniowe lub brokera na firmę. Sama polisa / certyfikat ubezpieczenia to nie dokument księgowy."
              },
              {
                step: 4,
                title: "Poinformuj pracowników o numerze assistance przed każdą delegacją",
                desc: "Ubezpieczenie, o którym pracownik nie wie, jest bezużyteczne. Każde polecenie wyjazdu powinno zawierać numer infolinii ubezpieczyciela lub link do karty informacyjnej polisy."
              },
              {
                step: 5,
                title: "Rozdziel polisę podróżną od polisy NNW komunikacyjnej",
                desc: "Jeśli pracownicy korzystają z samochodów służbowych, NNW komunikacyjne i podróżne to odrębne produkty z odrębnym traktowaniem podatkowym. Mieszanie zakresów w jednej polisie komplikuje KUP."
              }
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">{step}</div>
                <div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="text-sm text-slate-600 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Najczęstsze pytania</h2>

          <div className="space-y-5">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy ubezpieczenie zdrowotne pracownika zakupione przez firmę jest KUP?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Tak — składki na ubezpieczenie zdrowotne pracownika (w tym grupowe
                  ubezpieczenie zdrowotne i podróżne) są KUP dla pracodawcy.
                  Jednocześnie wartość składki stanowi przychód pracownika ze stosunku pracy,
                  chyba że obowiązuje jedno ze zwolnień z art. 21 ustawy o PIT.
                  Dla ubezpieczenia stricte podróżnego (delegacje) zwolnienie z PIT
                  pracownika obowiązuje — co czyni ten model atrakcyjnym podatkowo.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Czy pracownik może sam kupić polisę i otrzymać zwrot od firmy?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Tak. Jeśli pracownik samodzielnie kupuje polisę podróżną na delegację
                  i żąda zwrotu w rozliczeniu delegacji — zwrot jest zwolniony z PIT
                  (jako wydatek z tytułu podróży służbowej) i stanowi KUP firmy.
                  Warunki: polisa dotyczy konkretnej delegacji, pracownik ma fakturę
                  lub potwierdzenie zakupu, cel podróży jest służbowy.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-bold text-slate-900 mb-2" itemProp="name">
                Co z ubezpieczeniem dla zleceniobiorcy lub B2B na delegacji?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-slate-700 text-sm" itemProp="text">
                  Dla osób współpracujących na umowie B2B (JDG) lub zleceniu
                  sytuacja jest inna. Zleceniobiorcy nie podlegają przepisom
                  o podróżach służbowych z Kodeksu pracy — warunki zwrotu kosztów
                  ubezpieczenia wynikają z umowy. Koszt polisy podróżnej jest KUP
                  dla JDG (samozatrudniony kupuje polisę na własną działalność).
                  Przy zleceniu — zwrot kosztów ubezpieczenia może być przychodem
                  zleceniobiorcy, chyba że umowa wyraźnie reguluje to inaczej.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Ubezpieczenie pokrywa hospitalizację — EC 261 pokrywa opóźnienie
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Polisa podróżna chroni przy zdarzeniach losowych. Odszkodowanie EC 261
            przysługuje przy opóźnieniu lub odwołaniu lotu z przyczyn
            leżących po stronie linii — niezależnie od posiadanego ubezpieczenia.
          </p>
          <a
            href={"https://claimwinger.pl?utm_source=bizneslot&utm_medium=article&utm_campaign=ubezpieczenie-podrozne-koszty-odliczenia"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Sprawdź odszkodowanie za opóźniony lot
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
