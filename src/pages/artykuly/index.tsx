import { SEO } from "@/components/SEO";
import Link from "next/link";
import { BookOpen, Calendar, ArrowRight, Briefcase, Scale, Plane, Award, Building2, CreditCard, DollarSign } from "lucide-react";

export default function Artykuly() {
  const articles = [
    {
      title: "Ubezpieczenie podróżne w delegacji — koszty podatkowe i odliczenia",
      slug: "ubezpieczenie-podrozne-koszty-odliczenia",
      excerpt: "Polisa grupowa vs indywidualna, zwolnienie z PIT dla pracownika (art. 21 ust. 1 pkt 11b), KUP firmy, VAT od składek ubezpieczeniowych i jak strukturyzować ubezpieczenie żeby było korzystne podatkowo.",
      date: "2026-03-22",
      readTime: "7 min",
      category: "Finanse delegacji",
      icon: DollarSign
    },
    {
      title: "Bilet lotniczy jako koszt uzyskania przychodu — kiedy można odliczyć?",
      slug: "bilet-lotniczy-koszt-uzyskania-przychodu",
      excerpt: "Trzy warunki KUP dla biletu lotniczego, klasa biznes a fiskus (interpretacje DKIS), VAT od biletów, bleisure a rozliczenie podatkowe i jak udokumentować bilet kupiony przez pracownika.",
      date: "2026-03-22",
      readTime: "7 min",
      category: "Finanse delegacji",
      icon: DollarSign
    },
    {
      title: "Dieta za lot służbowy — ile wynosi i jak rozliczyć?",
      slug: "dieta-za-lot-delegacja-rozliczenie",
      excerpt: "Stawki diet krajowych (45 zł) i zagranicznych 2025, zasady obliczania czasu delegacji lotniczej, kiedy posiłek w samolocie obniża dietę i krok po kroku jak wypełnić rozliczenie kosztów podróży.",
      date: "2026-03-22",
      readTime: "8 min",
      category: "Finanse delegacji",
      icon: DollarSign
    },
    {
      title: "Ubezpieczenie zdrowotne w delegacji zagranicznej — co musi zapewnić pracodawca?",
      slug: "ubezpieczenie-zdrowotne-delegacja-zagraniczna",
      excerpt: "EKUZ, polisa firmowa, ubezpieczenie na karcie kredytowej — co faktycznie pokrywa leczenie za granicą? Sumy minimalne, luki w ochronie, obowiązki pracodawcy i checklist przed każdą delegacją.",
      date: "2026-03-22",
      readTime: "8 min",
      category: "Zdrowie w podróży",
      icon: Plane
    },
    {
      title: "Stres w podróży służbowej — jak go ograniczać i nie wypalić się na delegacjach?",
      slug: "stres-podroze-sluzbowe",
      excerpt: "Źródła stresu logistycznego i osobistego w delegacji, techniki redukcji napięcia (oddech 4-7-8, zimna woda, lista kontroli), wypalenie podróżnicze — sygnały i jak rozmawiać z pracodawcą.",
      date: "2026-03-22",
      readTime: "7 min",
      category: "Zdrowie w podróży",
      icon: Plane
    },
    {
      title: "Sen w podróży służbowej — jak regenerować się między delegacjami?",
      slug: "sen-podroze-sluzbowe",
      excerpt: "Protokół snu w pokoju hotelowym, drzemki strategiczne (nap energetyczny, coffee nap, pełny cykl 90 min) i jak wybrać pokój hotelowy z myślą o śnie. Dług senny po intensywnym cyklu delegacji.",
      date: "2026-03-22",
      readTime: "7 min",
      category: "Zdrowie w podróży",
      icon: Plane
    },
    {
      title: "Dieta w podróży służbowej — jak jeść zdrowo w trasie i nie stracić energii?",
      slug: "dieta-podroze-sluzbowe",
      excerpt: "Co jeść przed negocjacjami, żeby uniknąć energy crashu. Specjalne posiłki w samolocie (kody SPML, VGML), nawodnienie w kabinie, kolacja z klientem bez rujnowania następnego dnia.",
      date: "2026-03-22",
      readTime: "7 min",
      category: "Zdrowie w podróży",
      icon: Plane
    },
    {
      title: "Zakrzepica (DVT) w podróży służbowej — profilaktyka i obowiązki pracodawcy",
      slug: "zakrzepica-dvt-podroze-sluzbowe",
      excerpt: "Jak zapobiegać DVT przy długich lotach? Czynniki ryzyka, ćwiczenia w fotelu, pończochy uciskowe i co travel policy powinna mówić o BHP pracownika delegowanego. Objawy wymagające natychmiastowej pomocy.",
      date: "2026-03-22",
      readTime: "7 min",
      category: "Zdrowie w podróży",
      icon: Plane
    },
    {
      title: "Praca w samolocie — jak być produktywnym i chronić dane firmowe?",
      slug: "praca-w-samolocie-produktywnosc",
      excerpt: "WiFi pokładowe — co działa, co nie. Bezpieczeństwo danych w kabinie: filtr prywatności, VPN, szyfrowanie dysku. Jak zaplanować 10h lotu, żeby być gotowym na spotkanie po wylądowaniu.",
      date: "2026-03-22",
      readTime: "8 min",
      category: "Zdrowie w podróży",
      icon: Plane
    },
    {
      title: "Jet lag w podróży służbowej — jak minimalizować skutki i być gotowym na spotkanie?",
      slug: "jet-lag-podroze-sluzbowe",
      excerpt: "Protokół 3-dniowy przed lotem do Azji, strategie w samolocie i reset zegara po przylocie. Kiedy melatonina pomaga, czego unikać i co travel policy powinna mówić o buforze przed pierwszym spotkaniem.",
      date: "2026-03-22",
      readTime: "8 min",
      category: "Zdrowie w podróży",
      icon: Plane
    },
    {
      title: "Odprawa online dla klas biznesowych — wszystko co musisz wiedzieć",
      slug: "odprawa-online-klasa-biznes",
      excerpt: "Kiedy i jak zrobić odprawę online w klasie biznes? Okna check-in dla LOT, Lufthansa, Emirates, wybór miejsca, boarding pass w Wallet i 5 powodów, dla których system może odmówić.",
      date: "2026-03-22",
      readTime: "7 min",
      category: "Lotniska",
      icon: Plane
    },
    {
      title: "Aplikacje lotniskowe — które naprawdę pomagają w podróży biznesowej?",
      slug: "aplikacje-lotniskowe-podroze-sluzbowe",
      excerpt: "FlightAware, TripIt, LoungeBuddy, VPN — 5 aplikacji obowiązkowych dla podróżnika służbowego. Jak używać FlightAware do dokumentacji EC 261 i dlaczego VPN na lotnisku to nie opcja.",
      date: "2026-03-22",
      readTime: "8 min",
      category: "Lotniska",
      icon: Plane
    },
    {
      title: "Lotniskowy hotel na przesiadkę — kiedy warto rezerwować?",
      slug: "lotniskowy-hotel-przesiadka",
      excerpt: "Kiedy przesiadka wymaga noclegu w hotelu lotniskowym? Matryca decyzyjna, porównanie opcji airside vs landside vs capsule hotel, kalkulacja progu opłacalności i rozliczenie w delegacji.",
      date: "2026-03-22",
      readTime: "7 min",
      category: "Lotniska",
      icon: Plane
    },
    {
      title: "Opóźnienie lotu na lotnisku — jak pracować i złożyć roszczenie EC 261?",
      slug: "opoznienie-na-lotnisku-jak-pracowac",
      excerpt: "Protokół działania w pierwszych 15 minutach opóźnienia: dokumentacja, voucher, gdzie pracować, jak zabezpieczyć WiFi i jak złożyć roszczenie EC 261 jeszcze przed wejściem na pokład.",
      date: "2026-03-22",
      readTime: "7 min",
      category: "Lotniska",
      icon: Plane
    },
    {
      title: "Czy warto przylecieć dzień wcześniej przed ważnym spotkaniem?",
      slug: "przylot-dzien-wczesniej-przed-lotem-sluzbowym",
      excerpt: "Matryca decyzyjna: kiedy nocleg dzień wcześniej chroni delegację, a kiedy to zbędny koszt. Kalkulacja ryzyka, jet lag przy trasach intercontinentalnych i zapis w travel policy.",
      date: "2026-03-22",
      readTime: "7 min",
      category: "Lotniska",
      icon: Plane
    },
    {
      title: "Fast track na lotnisku — jak zaoszczędzić czas na odprawie?",
      slug: "fast-track-lotnisko-odprawa",
      excerpt: "Kto ma prawo do fast track, ile czasu oszczędza w szczycie i jak kupić dostęp bez klasy biznes i statusu FFP. Tabela lotnisk i praktyczne wskazówki dla podróżnika służbowego.",
      date: "2026-03-22",
      readTime: "7 min",
      category: "Lotniska",
      icon: Plane
    },
    {
      title: "Priority Pass vs karty kredytowe z dostępem do lounge — porównanie 2025",
      slug: "priority-pass-vs-karty-kredytowe-lounge",
      excerpt: "Priority Pass direct czy karta kredytowa premium? Porównanie planów, kosztów przy 5 i 20 wejściach rocznie, dostępnych kart w Polsce i alternatyw: Dragonpass, LoungeKey.",
      date: "2026-03-22",
      readTime: "7 min",
      category: "Lotniska",
      icon: Plane
    },
    {
      title: "Lounge biznesowy na Okęciu (WAW) — co oferuje i jak wejść?",
      slug: "lounge-biznesowy-okecie-jak-wejsc",
      excerpt: "Polonez Lounge LOT, Priority Pass, Star Alliance Gold — 5 sposobów wejścia do saloniku na Lotnisku Chopina. Co oferuje lounge i kiedy nawet najlepszy salonik nie pomaga.",
      date: "2026-03-22",
      readTime: "7 min",
      category: "Lotniska",
      icon: Plane
    },
    {
      title: "Budżetowanie lotów służbowych na rok — metody i szablony",
      slug: "budzetowanie-lotow-sluzbowych",
      excerpt: "Bottom-up, top-down i zero-based budgeting dla travel managera. Szablon podziału budżetu na departamenty, pełna lista pozycji i trzy progi monitorowania realizacji w ciągu roku.",
      date: "2026-03-22",
      readTime: "8 min",
      category: "Zarządzanie podróżami",
      icon: Briefcase
    },
    {
      title: "Zatwierdzanie podróży służbowych — systemy approval i przepływy pracy",
      slug: "zatwierdzanie-podrozy-sluzbowych-approval",
      excerpt: "Wolny approval to ukryta przyczyna drogich biletów. Sprawdź modele procesu, progi kwotowe, krok po kroku przepływ pracy i 4 błędy, które podnoszą koszty delegacji.",
      date: "2026-03-22",
      readTime: "8 min",
      category: "Zarządzanie podróżami",
      icon: Briefcase
    },
    {
      title: "Podróże służbowe a ESG — jak liczyć ślad węglowy lotów firmowych?",
      slug: "podroze-sluzbowe-esg-slad-weglowy-lotow",
      excerpt: "Loty służbowe to scope 3 emisji GHG. Sprawdź metodę DEFRA i ICAO do kalkulacji CO₂, co wymaga CSRD/ESRS E1 i jak redukować emisje bez blokowania delegacji.",
      date: "2026-03-22",
      readTime: "9 min",
      category: "Zarządzanie podróżami",
      icon: Briefcase
    },
    {
      title: "Raportowanie podróży służbowych — jakie dane mierzyć i jak?",
      slug: "raportowanie-podrozy-sluzbowych",
      excerpt: "6 KPI, które każdy travel manager powinien śledzić: koszt na podróż, compliance rate, advance booking, zakłócenia, emisja CO₂ i odzysk odszkodowań EC 261. Jak zbierać dane bez TMC.",
      date: "2026-03-22",
      readTime: "8 min",
      category: "Zarządzanie podróżami",
      icon: Briefcase
    },
    {
      title: "Jak obniżyć koszty podróży służbowych o 30%? Praktyczny przewodnik",
      slug: "jak-obnizyc-koszty-podrozy-sluzbowych",
      excerpt: "7 sprawdzonych metod redukcji wydatków na loty: rezerwacje z wyprzedzeniem, polityka klas, corporate fares, TMC i odzyskiwanie odszkodowań EC 261. Plan wdrożenia na 90 dni.",
      date: "2026-03-22",
      readTime: "9 min",
      category: "Zarządzanie podróżami",
      icon: Briefcase
    },
    {
      title: "SAP Concur vs TravelPerk vs GetAbroad — porównanie narzędzi TMC 2025",
      slug: "narzedzia-zarzadzania-podrozami-concur-travelperk",
      excerpt: "Które narzędzie TMC wybrać dla polskiej firmy? SAP Concur, TravelPerk i GetAbroad — porównanie funkcji, cen i dopasowania. Plus: czego żadne TMC nie zrobi przy opóźnionym locie.",
      date: "2026-03-22",
      readTime: "8 min",
      category: "Zarządzanie podróżami",
      icon: Briefcase
    },
    {
      title: "Travel manager w firmie — zakres obowiązków i narzędzia 2025",
      slug: "travel-manager-obowiazki-narzedzia",
      excerpt: "Travel manager zarządza budżetem lotów, negocjuje z liniami i pilnuje compliance. Pełny zakres obowiązków, tabela narzędzi TMC i jak rola wygląda w małej vs dużej firmie.",
      date: "2026-03-22",
      readTime: "8 min",
      category: "Zarządzanie podróżami",
      icon: Briefcase
    },
    {
      title: "Polityka podróży służbowych (Travel Policy) — jak napisać od zera?",
      slug: "polityka-podrozy-sluzbowych-jak-napisac",
      excerpt: "6 elementów, które musi zawierać skuteczna travel policy: klasy lotu, limity, procedura przy zakłóceniach i zapis o EC 261. Najczęstsze błędy i gotowy fragment dokumentu.",
      date: "2026-03-22",
      readTime: "9 min",
      category: "Zarządzanie podróżami",
      icon: Briefcase
    },
    {
      title: "Przedawnienie roszczenia EC 261 — ile czasu ma pracownik?",
      slug: "przedawnienie-roszczenia-ec261-pracownik",
      excerpt: "Roszczenie EC 261/2004 przedawnia się w Polsce po 3 latach od daty lotu. Sprawdź od kiedy biegnie termin, jak złożona reklamacja go przerywa i czy delegacja zmienia zasady.",
      date: "2026-03-22",
      readTime: "7 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "EC 261 a loty spoza UE — kiedy rozporządzenie obowiązuje linie non-EU?",
      slug: "ec261-loty-spoza-ue-kiedy-obowiazuje",
      excerpt: "Czy Emirates, Turkish, United muszą zapłacić odszkodowanie EC 261? Tak — jeśli lot wylatywał z lotniska UE. Przy lotach do UE z krajów trzecich liczy się siedziba linii. Sprawdź tabelę i scenariusze.",
      date: "2026-03-22",
      readTime: "8 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Missed connection — spóźniona przesiadka. Kto odpowiada?",
      slug: "missed-connection-lot-przesiadka-kto-odpowiada",
      excerpt: "Przy jednej rezerwacji linia odpowiada za missed connection i musi zapewnić lot zastępczy. Jeśli dotarłeś do celu 3h+ później — przysługuje odszkodowanie do 600 EUR. Osobne bilety — ryzyko po Twojej stronie.",
      date: "2025-03-22",
      readTime: "9 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Downgrade klasy lotu — z biznes do economy. Jakie odszkodowanie?",
      slug: "downgrade-klasy-biznes-do-economy-odszkodowanie",
      excerpt: "EC 261/2004 art. 10 gwarantuje zwrot 30–75% ceny biletu przy przymusowym przesadzeniu z biznes do economy — niezależnie od przyczyny. Zwrot musi nastąpić w ciągu 7 dni, nie voucher.",
      date: "2025-03-22",
      readTime: "8 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Zmiana rozkładu lotu 14 dni przed wylotem — czy to odwołanie?",
      slug: "zmiana-rozkladu-lotu-14-dni-odwolanie",
      excerpt: "Zmiana z ponad 14-dniowym wyprzedzeniem zwalnia linię z odszkodowania, ale daje prawo do zwrotu biletu. Zmiana w ciągu 14 dni bez właściwej alternatywy — odszkodowanie do 600 EUR może przysługiwać.",
      date: "2025-03-21",
      readTime: "8 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Siła wyższa a lot — co naprawdę zwalnia linię z odszkodowania?",
      slug: "sila-wyzsza-lot-kiedy-linia-nie-placi-odszkodowania",
      excerpt: "Usterka techniczna, strajk własnych pracowników i opóźnienie rotacji to NIE siła wyższa. Sprawdź pełną tabelę nadzwyczajnych okoliczności, wyroki ETS i jak zakwestionować odmowę linii.",
      date: "2025-03-21",
      readTime: "9 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Strajk linii lotniczej — nadzwyczajna okoliczność czy odszkodowanie EC 261?",
      slug: "strajk-linii-lotniczej-nadzwyczajna-okolicznosc",
      excerpt: "Strajk własnych pracowników linii (pilotów, stewardów) NIE jest nadzwyczajną okolicznością — należy Ci się odszkodowanie do 600 EUR. Wyrok ETS C-195/17. Strajk ATC może zwolnić linię z wypłaty.",
      date: "2025-03-21",
      readTime: "8 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Codeshare a EC 261/2004 — który przewoźnik odpowiada za odszkodowanie?",
      slug: "codeshare-ec261-ktory-przewoznik-odpowiada",
      excerpt: "Przy locie codeshare odszkodowanie EC 261/2004 wypłaca przewoźnik operujący (wykonujący lot), nie marketingowy. Sprawdź jak go zidentyfikować, kiedy EC 261 obowiązuje spoza UE i jak złożyć roszczenie.",
      date: "2025-03-21",
      readTime: "8 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Lot połączony opóźniony — odszkodowanie za każdy odcinek?",
      slug: "lot-polaczony-opozniony-odszkodowanie-za-kazdy-odcinek",
      excerpt: "Przy locie połączonym liczy się opóźnienie w końcowym celu podróży — jedno odszkodowanie do 600 EUR, nie za każdy odcinek. Sprawdź wyrok ETS C-11/11 i jak udokumentować roszczenie.",
      date: "2025-03-21",
      readTime: "9 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Czy pracodawca może zatrzymać odszkodowanie za lot pracownika?",
      slug: "czy-pracodawca-moze-zatrzymac-odszkodowanie-za-lot",
      excerpt: "Nie — pracodawca nie może zatrzymać ani żądać zwrotu odszkodowania EC 261/2004. Odszkodowanie należy do pracownika jako pasażera. Klauzula w umowie o pracę nakazująca zwrot jest nieważna z mocy prawa UE.",
      date: "2025-03-21",
      readTime: "7 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Ile wynosi odszkodowanie za opóźniony lot służbowy?",
      slug: "ile-wynosi-odszkodowanie-opozniony-lot-sluzbowy",
      excerpt: "250, 400 lub 600 EUR — w zależności od dystansu trasy. Sprawdź dokładną tabelę odszkodowań EC 261/2004, warunki przyznania i jak złożyć skuteczny wniosek.",
      date: "2025-03-21",
      readTime: "8 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Bilet służbowy kupiony przez firmę — kto składa reklamację",
      slug: "bilet-sluzbowy-kupiony-przez-firme-kto-sklada-reklamacje",
      excerpt: "Kompleksowy wyjaśnienie kto składa reklamację za bilet służbowy kupiony przez firmę. Sprawdź czy pracownik czy pracodawca ma prawo do odszkodowania i jak przebiega procedura roszczeniowa w podróżach biznesowych.",
      date: "2025-01-21",
      readTime: "14 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Lot służbowy odwołany w ostatniej chwili — co zrobić",
      slug: "lot-sluzbowy-odwolany-ostatniej-chwili-co-zrobic",
      excerpt: "Kompleksowy plan działania gdy lot służbowy zostaje odwołany. Sprawdź jakie masz prawa, jak odzyskać odszkodowanie do 600 EUR i jak szybko znaleźć alternatywny transport na spotkanie biznesowe.",
      date: "2025-01-20",
      readTime: "13 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Opóźnienie lotu a spotkanie biznesowe — koszty konsekwencji",
      slug: "opoznienie-lotu-spotkanie-biznesowe-koszty-konsekwencji",
      excerpt: "Kompleksowa analiza kosztów opóźnienia lotu a spotkanie biznesowe. Sprawdź jak minimalizować straty, jakie są koszty bezpośrednie i pośrednie oraz jak odzyskać odszkodowanie do 600 EUR.",
      date: "2025-01-19",
      readTime: "12 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Zgubiony bagaż w podróży służbowej — odszkodowanie i procedura",
      slug: "zgubiony-bagaz-podroz-sluzbowa-odszkodowanie-procedura",
      excerpt: "Kompleksowy przewodnik po procedurze odzyskiwania odszkodowania do 1300 EUR za zagubiony bagaż w podróży służbowej. Sprawdź krok po kroku jak zgłosić zaginięcie i jakie dokumenty potrzebujesz.",
      date: "2025-01-18",
      readTime: "11 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Lot służbowy opóźniony o ponad 3 godziny — krok po kroku",
      slug: "lot-sluzbowy-opozniony-ponad-3-godziny-krok-po-kroku",
      excerpt: "Szczegółowy przewodnik krok po kroku jak odzyskać odszkodowanie do 600 EUR za opóźniony lot służbowy. Sprawdź jakie dokumenty potrzebujesz i jak przebiega procedura.",
      date: "2025-01-17",
      readTime: "10 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "EC 261/2004 a loty służbowe — co obejmuje rozporządzenie",
      slug: "ec-261-2004-a-loty-sluzbowe-co-obejmuje-rozporzadzenie",
      excerpt: "Kompleksowy przewodnik po rozporządzeniu WE 261/2004 w kontekście podróży służbowych. Sprawdź, jakie prawa przysługują pracownikom i kiedy należy się odszkodowanie do 600 EUR.",
      date: "2025-01-16",
      readTime: "9 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Overbooking na locie służbowym — prawa pracownika i pracodawcy",
      slug: "overbooking-na-locie-sluzbowym-praca-pracodawcy",
      excerpt: "Kompleksowy poradnik o overbookingu w podróżach służbowych. Kto ma prawo do odszkodowania do 600 EUR, jak krok po kroku odzyskać pieniądze i jakie obowiązki ma pracodawca.",
      date: "2025-01-15",
      readTime: "8 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Odszkodowanie za opóźniony lot służbowy — komu przysługuje: pracownik czy pracodawca?",
      slug: "odszkodowanie-lot-sluzbowy-pracownik-czy-pracodawca",
      excerpt: "Kompleksowy przewodnik wyjaśniający, kto ma prawo do odszkodowania za opóźniony lot służbowy. Aspekty prawne, podatkowe i praktyczne rozwiązania dla firm i pracowników.",
      date: "2025-02-23",
      readTime: "14 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Prawa pasażera w podróży służbowej przy odwołaniu lub opóźnieniu lotu",
      slug: "prawa-pasazera-podroz-sluzbowa",
      excerpt: "Jakie prawa ma pasażer lotu służbowego? Sprawdź, jakie odszkodowania i świadczenia przysługują przy opóźnieniach i odwołaniach lotów biznesowych.",
      date: "2025-02-23",
      readTime: "15 min",
      category: "Prawo i Finanse",
      icon: Scale
    },
    {
      title: "Programy Lojalnościowe dla Firm",
      slug: "programy-lojalnosciowe-dla-firm",
      excerpt: "Kompleksowy przewodnik po korporacyjnych programach lojalnościowych linii lotniczych. Dowiedz się, jak maksymalizować korzyści z lotów służbowych.",
      date: "2025-01-15",
      readTime: "12 min",
      category: "Biznes i Finanse",
      icon: Building2
    },
    {
      title: "Miles & More dla Firm",
      slug: "miles-and-more-dla-firm",
      excerpt: "Wszystko o programie Miles & More w kontekście podróży służbowych. Jak zbierać mile, jakie poziomy statusowe, i jak maksymalizować korzyści dla firmy.",
      date: "2025-01-12",
      readTime: "14 min",
      category: "Biznes i Finanse",
      icon: Building2
    },
    {
      title: "Business Class vs Premium Economy",
      slug: "business-class-vs-premium-economy",
      excerpt: "Szczegółowe porównanie klasy biznes i premium economy. Która opcja jest lepsza dla Twojej firmy? Analiza kosztów, komfortu i produktywności.",
      date: "2025-01-10",
      readTime: "13 min",
      category: "Biznes i Finanse",
      icon: Plane
    },
    {
      title: "Private Jet vs Business Class",
      slug: "private-jet-vs-business-class",
      excerpt: "Czy prywatny odrzutowiec to luksus, czy efektywne rozwiązanie biznesowe? Porównanie kosztów, komfortu i praktyczności dla firm i kadry zarządzającej.",
      date: "2025-01-08",
      readTime: "10 min",
      category: "Biznes i Finanse",
      icon: Plane
    },
    {
      title: "Bleisure — Polityka Podróży Służbowych",
      slug: "bleisure-polityka-podrozy-sluzbowych",
      excerpt: "Bleisure to trend łączący podróże służbowe z prywatnymi. Dowiedz się, jak wdrożyć elastyczną politykę travel w firmie i zadowolić pracowników.",
      date: "2025-01-05",
      readTime: "12 min",
      category: "Biznes i Finanse",
      icon: Briefcase
    },
    {
      title: "Karta Statusowa i Dostęp do Lounge",
      slug: "karta-statusowa-lounge",
      excerpt: "Kompleksowy przewodnik po kartach statusowych linii lotniczych i programach dostępu do saloników lotniskowych. Które wybrać dla częstych podróżników biznesowych?",
      date: "2025-01-03",
      readTime: "11 min",
      category: "Biznes i Finanse",
      icon: CreditCard
    },
    {
      title: "Ranking Linii Lotniczych — Klasa Biznes 2025",
      slug: "ranking-linii-lotniczych-business-class",
      excerpt: "Najlepsze linie lotnicze dla podróży służbowych w klasie biznes. Ranking 2025 z uwzględnieniem komfortu, serwisu, punktualności i sieci połączeń.",
      date: "2025-01-01",
      readTime: "15 min",
      category: "Biznes i Finanse",
      icon: Award
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Artykuły o prawach pasażerów w podróżach służbowych",
    "description": "Baza wiedzy o prawach pasażerów lotniczych w kontekście podróży służbowych, delegacji i biletów firmowych",
    "url": "https://bizneslot.info/artykuly",
    "publisher": {
      "@type": "Organization",
      "name": "BizneLot.info",
      "url": "https://bizneslot.info"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": articles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://bizneslot.info/artykuly/${article.slug}`
      }))
    }
  };

  return (
    <>
      <SEO
        title="Artykuły – BizneLot.info"
        description="Baza wiedzy o prawach pasażerów lotniczych w podróżach służbowych. Praktyczne porady, analizy prawne i historie z rynku odszkodowań lotniczych."
        url="https://bizneslot.info/artykuly"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-8 h-8" />
                <span className="text-slate-300 font-semibold">Baza wiedzy</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Artykuły eksperckie
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                Praktyczna wiedza o prawach pasażerów w podróżach służbowych, analizy rynku odszkodowań lotniczych i historie z branży.
              </p>
            </div>
          </div>
        </section>

        {/* Articles List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Wszystkie artykuły</h2>
                <p className="text-slate-600">
                  {articles.length} {articles.length === 1 ? 'artykuł' : 'artykuły'}
                </p>
              </div>

              <div className="space-y-6">
                {articles.map((article) => {
                  const Icon = article.icon;
                  return (
                    <article
                      key={article.slug}
                      className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors">
                          <Icon className="w-6 h-6 text-slate-700" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 text-sm text-slate-600">
                            <span className="px-2 py-1 bg-slate-100 rounded text-xs font-medium">
                              {article.category}
                            </span>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <time dateTime={article.date}>
                                {new Date(article.date).toLocaleDateString('pl-PL', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </time>
                            </div>
                            <span>• {article.readTime}</span>
                          </div>

                          <Link href={`/artykuly/${article.slug}`}>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                              {article.title}
                            </h3>
                          </Link>

                          <p className="text-slate-600 mb-4 leading-relaxed">
                            {article.excerpt}
                          </p>

                          <Link
                            href={`/artykuly/${article.slug}`}
                            className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-900 transition-colors group"
                          >
                            Czytaj więcej
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Poznaj swoje prawa jako pasażer służbowy
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Sprawdź nasze kompleksowe przewodniki po prawach pasażerów w podróżach firmowych
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/odszkodowanie-lot-sluzbowy"
                  className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors font-semibold"
                >
                  Odszkodowania w delegacjach
                </Link>
                <Link
                  href="/pracodawca-a-odszkodowanie"
                  className="px-6 py-3 bg-white text-slate-800 rounded-lg hover:bg-slate-50 transition-colors font-semibold border border-slate-300"
                >
                  Pracodawca a odszkodowanie
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <img src="/bizneslotlogotyp.png" alt="BizneLot.info" className="h-6 w-auto" />
                  BizneLot.info
                </h3>
                <p className="text-sm">
                  Portal ekspercki o prawach pasażerów w podróżach służbowych i delegacjach.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Główne tematy</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/odszkodowanie-lot-sluzbowy" className="hover:text-white transition-colors">
                      Odszkodowanie za lot służbowy
                    </Link>
                  </li>
                  <li>
                    <Link href="/anulowany-lot-delegacja" className="hover:text-white transition-colors">
                      Anulowany lot w delegacji
                    </Link>
                  </li>
                  <li>
                    <Link href="/pracodawca-a-odszkodowanie" className="hover:text-white transition-colors">
                      Pracodawca a odszkodowanie
                    </Link>
                  </li>
                  <li>
                    <Link href="/o-autorze" className="hover:text-white transition-colors">
                      O autorze
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Sprawdź odszkodowanie</h4>
                <p className="text-sm mb-4">
                  Skorzystaj z usług ClaimWinger, aby łatwo i szybko odzyskać należne odszkodowanie:
                </p>
                <div className="space-y-2">
                  <a
                    href="https://claimwinger.com/pl/odwolany-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=artykuly-index"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-white transition-colors"
                  >
                    → Odwołany lot
                  </a>
                  <a
                    href="https://claimwinger.com/pl/opozniony-lot?utm_source=bizneslot&utm_medium=article&utm_campaign=artykuly-index"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-white transition-colors"
                  >
                    → Opóźniony lot
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-sm text-center">
              <p>© 2026 BizneLot.info – Portal edukacyjny o prawach pasażerów w podróżach służbowych</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}