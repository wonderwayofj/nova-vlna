# nová~vlna

Static website for the **Nová vlna** political manifesto — Czech Republic, 2026.

Built with plain HTML, CSS and JavaScript. No frameworks, no build step.

---

## Pages

| File | URL | Description |
|------|-----|-------------|
| `gate.html` | `/gate.html` | Password gate — shown to all visitors first |
| `index.html` | `/` | Main page — hero, principles, philosophy, petition |
| `manifest.html` | `/manifest.html` | Manifesto of Personal Responsibility |
| `podpis.html` | `/podpis.html` | Signature / petition form |

---

## Editing content

**All text lives in one file: `content.js`**

Open it and edit the values in the `CONTENT` object. Do not touch the HTML files.

```
CONTENT
├── gate.password        ← access password
├── cs                   ← Czech texts
│   ├── nav
│   ├── hero
│   ├── quote
│   ├── zasady (+ items array)
│   ├── values_ticker
│   ├── philosophy
│   ├── join
│   ├── petition
│   ├── manifest_page (+ chapters array)
│   ├── petition_page
│   └── footer
└── en                   ← English texts (same structure)
```

### Changing the password

In `content.js`, find the `gate` block:

```js
gate: {
  password: 'novavlna2026',  // ← change this
},
```

### Changing the default language

At the bottom of `content.js`:

```js
window.NV_LANG = localStorage.getItem('nv_lang') || 'cs';
//                                                    ↑ change to 'en' for English default
```

---

## Language switcher

An **EN / CS** toggle button appears in the navigation on every page.
The chosen language is stored in `localStorage` and persists across page loads.

To edit translations, update the `cs` or `en` blocks in `content.js`.

---

## Font

Uses **Roca** (weight 700) from Adobe Fonts via Typekit kit `wjn4gzj`.
Requires an active Adobe Fonts subscription tied to the domain.

---

## Colours

| Variable | Hex | Usage |
|----------|-----|-------|
| `--cream` | `#F2EFEA` | Page background |
| `--sand` | `#E8E2D4` | Subtle accents, borders |
| `--navy` | `#1E2438` | Text, dark elements |
| `--accent` | `#C94B1A` | Orange-red — tilde, CTAs |

---

## Petition form & Google Sheets

The `podpis.html` form posts to a **Google Apps Script** web app.

**Setup:**
1. Copy `gas/Code.gs` into a new Google Apps Script project at [script.google.com](https://script.google.com).
2. Set the constants at the top (`SHEET_ID`, `FROM_EMAIL`, `SITE_URL`, etc.).
3. **Deploy → New deployment → Web App** — access: **Anyone**.
4. Copy the deployment URL into `podpis.html`:
   ```js
   const GAS_URL = 'YOUR_GAS_URL_HERE';  // ← paste here
   ```

The script saves each submission to Google Sheets and sends a branded HTML confirmation email with the full manifesto text.

---

## Deployment

### Netlify (recommended — free, works with private GitHub repos)

1. [netlify.com](https://netlify.com) → **Add new site → Import from GitHub**
2. Select `nova-vlna`, leave build settings empty (pure static site)
3. Click **Deploy** — done in ~30 seconds

Set a custom domain in: **Netlify dashboard → Domain management**.

### GitHub Pages (requires public repository)

**Settings → Pages → Source: Deploy from branch → `main` → `/ (root)`**

URL will be: `https://wonderwayofj.github.io/nova-vlna`

---

## File structure

```
nova-vlna/
├── index.html       Main page
├── manifest.html    Manifesto subpage
├── podpis.html      Petition / signature form
├── gate.html        Password gate
├── content.js       ← ALL editable text lives here
├── gas/
│   └── Code.gs      Google Apps Script backend template
└── README.md
```
