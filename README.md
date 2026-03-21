# nová~vlna

Statický web pro politický manifest **nová~vlna** — postavený v čistém HTML/CSS/JS bez frameworků.

---

## Struktura projektu

```
nova-vlna/
├── index.html        # Hlavní strana
├── manifest.html     # Manifest osobní odpovědnosti (celý text)
├── podpis.html       # Formulář pro podpis petice
├── gate.html         # Přihlašovací brána (heslo)
├── content.js        # ← TADY SE EDITUJÍ VEŠKERÉ TEXTY
└── gas/
    └── Code.gs       # Google Apps Script backend (petice + emaily)
```

---

## Jak editovat texty

**Otevřete `content.js`** — je to jediný soubor, který potřebujete upravovat. HTML soubory neměňte.

Soubor obsahuje objekt `CONTENT` rozdělený do sekcí:

| Sekce | Co obsahuje |
|---|---|
| `gate` | Přístupové heslo |
| `nav` | Položky navigace |
| `hero` | Úvodní text a tlačítka hlavní strany |
| `quote` | Citát pod hero sekcí |
| `zasady` | 8 zásad manifestu (číslo, nadpis, text) |
| `values_ticker` | Hodnoty v animovaném tickeru |
| `philosophy` | Sekce „Kdo jsme" |
| `join` | Sekce „Přidejte se" |
| `petition` | Sekce s výzvou k podpisu |
| `manifest_page` | Celý text manifestu (kapitoly, odstavce) |
| `petition_page` | Texty na stránce s formulářem |
| `footer` | Patička (odkazy, copyright) |

### Příklad — změna hesla

```js
gate: {
  password: 'noveheslo123',   // ← sem napište nové heslo
},
```

### Příklad — změna titulku na hlavní straně

```js
hero: {
  eyebrow:  'Politický manifest · Česká republika · 2026',
  subtitle: 'Váš nový text zde...',
  ...
},
```

### Příklad — přidání/úprava zásady

```js
zasady: {
  items: [
    {
      num:   '01',
      title: 'Název zásady',
      text:  'Popis zásady.',
    },
    // ... dalších 7 zásad
  ],
},
```

---

## Přístupová brána (heslo)

Web je chráněn heslem. Při návštěvě jakékoliv stránky se uživatel přesměruje na `gate.html`, kde zadá heslo.

- **Heslo se mění** v `content.js` → sekce `gate.password`
- Po správném zadání se token uloží do `sessionStorage` — heslo se neptá znovu do zavření záložky
- Ochrana funguje na klientovi (JS) — vhodná pro preview / omezení náhodných návštěvníků, ne pro citlivá data

---

## Petice & Google Sheets

Formulář na `podpis.html` posílá data do **Google Apps Scriptu**, který:
1. Uloží jméno + email do Google Tabulky
2. Odešle potvrzovací email s textem manifestu

### Nastavení backendu

1. Otevřete [Google Sheets](https://sheets.google.com) → vytvořte novou tabulku
2. Zkopírujte **ID tabulky** z URL: `https://docs.google.com/spreadsheets/d/`**`TOTO_JE_ID`**`/edit`
3. Jděte na **Rozšíření → Apps Script**
4. Nahraďte obsah souborem `gas/Code.gs`
5. Nastavte konstanty na začátku souboru:

```js
const SHEET_ID   = 'vase-spreadsheet-id';
const FROM_EMAIL = 'vas@gmail.com';
const SITE_URL   = 'https://vas-web.cz';
```

6. Klikněte **Nasadit → Nové nasazení**
   - Typ: **Webová aplikace**
   - Přistupovat jako: **Já**
   - Přístup: **Kdokoli**
7. Zkopírujte URL webové aplikace
8. Vložte ji do `podpis.html` na řádek s `GAS_URL`:

```js
const GAS_URL = 'https://script.google.com/macros/s/XXXX/exec';
```

---

## Design

### Barvy

| Proměnná | Hex | Použití |
|---|---|---|
| `--cream` | `#F2EFEA` | Hlavní pozadí |
| `--sand` | `#E8E2D4` | Sekundární pozadí, karty |
| `--navy` | `#1E2438` | Texty, tmavé prvky |
| `--accent` | `#C94B1A` | Oranžovo-červená, vlnková pomlčka, akcenty |

### Písmo

Web používá **Roca** (Adobe Typekit, kit `wjn4gzj`) — tučný řez (700).
Fallback: Georgia, serif.

### Klíčové vizuální prvky

- **Vlnová animace loga** — každé písmeno v `nová~vlna` reaguje na pohyb myši s lerp zpožděním
- **SVG mřížka** — pozadí hero sekce tvoří jemně zvlněné čáry (SVG pattern)
- **Pill tlačítka** — `border-radius: 999px`
- **Scroll reveal** — sekce se plynule objevují při scrollování (IntersectionObserver)
- **Ticker hodnot** — animovaný horizontální běžec v sekci filosofie

---

## Spuštění lokálně

```bash
# Pomocí Node.js
npx serve .

# Nebo Python
python3 -m http.server 8000
```

Otevřete `http://localhost:3000` (nebo příslušný port).

> ⚠️ Soubory nelze otevřít přímo z disku (`file://`) kvůli CORS omezením prohlížeče.

---

## Deployment

Web jsou čisté statické soubory — nasadíte je na jakýkoliv hosting:

- **GitHub Pages** — zdarma, přímo z tohoto repozitáře
- **Netlify / Vercel** — drag & drop nebo napojení na GitHub
- **Vlastní server** — nahrajte soubory do rootu

### GitHub Pages

1. Jděte na **Settings → Pages**
2. Source: **Deploy from a branch → main → / (root)**
3. Web bude na `https://wonderwayofj.github.io/nova-vlna`

---

## Soubory nezahrnuté v repozitáři

Následující soubory jsou v `.gitignore` a nenahrají se na GitHub:

- `*.pdf` — zdrojové dokumenty
- `*.ai` — Adobe Illustrator soubory
- `*.pages` — Apple Pages dokumenty
- `.DS_Store` — systémové soubory macOS
