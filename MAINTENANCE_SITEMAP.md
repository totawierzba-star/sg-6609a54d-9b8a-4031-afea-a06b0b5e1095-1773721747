# Instrukcja Obsługi Mapy Strony (Sitemap & SEO)

## 🔄 Jak to działa?
W tym projekcie mapa strony (`sitemap.xml`) oraz plik `robots.txt` są generowane **automatycznie** podczas każdego budowania aplikacji (`npm run build`).

Nie musisz już ręcznie edytować plików w folderze `public/`.

## ⚙️ Konfiguracja

Główna konfiguracja znajduje się w pliku: `next-sitemap.config.js` w głównym katalogu projektu.

### Zmiana domeny
Domyślna domena to `https://bizneslot.pl`. Aby ją zmienić:
1. Otwórz `next-sitemap.config.js`
2. Zmień wartość `siteUrl` lub ustaw zmienną środowiskową `SITE_URL` w Vercel/env.

```javascript
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://twoja-nowa-domena.pl',
  // ...
}
```

### Wykluczanie stron
Jeśli chcesz ukryć stronę przed Google (np. stronę z podziękowaniem lub admina), dodaj jej ścieżkę do tablicy `exclude`:

```javascript
exclude: ['/404', '/thank-you', '/admin'],
```

## 🚀 Jak zaktualizować mapę?

### Podczas developmentu (lokalnie):
Mapa nie generuje się automatycznie w trybie `dev`. Aby ją przetestować, uruchom:
```bash
npm run build
```
Pliki pojawią się w folderze `public/`.

### Na produkcji (Vercel/Deploy):
Nie musisz robić nic. Skrypt `postbuild` uruchomi się automatycznie po zakończeniu budowania i zaktualizuje mapę strony o wszystkie nowe artykuły i podstrony, które dodałeś.

## 🔍 Weryfikacja w Google Search Console

Po wdrożeniu zmian na produkcję:
1. Wejdź do Google Search Console.
2. W sekcji "Mapy witryn" wpisz `sitemap.xml`.
3. Kliknij "Prześlij".
4. Upewnij się, że status to "Sukces", a liczba wykrytych adresów URL odpowiada liczbie podstron w serwisie.