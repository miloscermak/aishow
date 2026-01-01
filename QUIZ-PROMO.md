# AI Kvíz - Dočasná promo funkce

## Shrnutí

Na web byla přidána dočasná promo funkce **AI Kvíz 2025**, která slouží k přilákání návštěvníků. Kvíz je integrován jako plovoucí tlačítko v pravém dolním rohu stránky, které po kliknutí otevře modální okno s kvízem.

## Platnost

- **Přidáno:** 1. ledna 2026
- **Automatická expirace:** 11. ledna 2026 (23:59:59)

Po datu expirace se komponenta automaticky přestane zobrazovat (bez nutnosti zásahu). Pro úplné odstranění kódu je však potřeba ruční cleanup.

## Technická implementace

### Přidané/upravené soubory:

| Soubor | Popis |
|--------|-------|
| `components/QuizPromo.tsx` | React komponenta s plovoucím tlačítkem a modalem |
| `public/kviz.html` | Standalone HTML kvíz (načítá se v iframe) |
| `App.tsx` | Přidán import a použití `<QuizPromo />` |

### Jak to funguje:

1. Komponenta `QuizPromo` kontroluje při renderování aktuální datum
2. Pokud je datum po 11. 1. 2026, komponenta vrací `null` (nic se nezobrazí)
3. Uživatel může tlačítko skrýt kliknutím na X (platí do refreshe stránky)
4. Kvíz běží v iframe, je kompletně samostatný (vlastní CSS, JS)

---

## Návod: Odstranění kvízu

Po skončení promo období (nebo kdykoliv) proveďte tyto kroky:

### Krok 1: Odstraňte import a použití z App.tsx

Otevřete `App.tsx` a:

**Smažte tento import (řádek 6):**
```tsx
import { QuizPromo } from './components/QuizPromo';
```

**Smažte tento kód (před uzavíracím `</div>`):**
```tsx
{/* Temporary Quiz Promo - expires 2026-01-11 */}
<QuizPromo />
```

### Krok 2: Smažte soubor komponenty

```bash
rm components/QuizPromo.tsx
```

### Krok 3: Smažte kvíz ze složky public

```bash
rm public/kviz.html
```

### Krok 4: (Volitelné) Smažte tento dokument

```bash
rm QUIZ-PROMO.md
```

---

## Rychlý cleanup (jeden příkaz)

```bash
# Smaže všechny soubory související s kvízem
rm components/QuizPromo.tsx public/kviz.html QUIZ-PROMO.md
```

Poté ručně upravte `App.tsx` podle kroku 1.

---

## Kontakt

V případě dotazů kontaktujte autora integrace.
