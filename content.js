/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║   nová~vlna  —  OBSAH WEBU                               ║
 * ║   Editujte texty zde. HTML soubory neměňte.              ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const CONTENT = {

  // ─── PŘÍSTUPOVÉ HESLO ─────────────────────────────────────
  gate: {
    password: 'novavlna2026',   // ← změňte heslo zde
  },

  // ─── LOGO & NAVIGACE ──────────────────────────────────────
  nav: {
    zasady:   'Zásady',
    o_nas:    'O nás',
    proc:     'Proč to děláme?',
    podepsat: 'Podepsat',
  },


  // ─── HLAVNÍ STRANA ────────────────────────────────────────

  hero: {
    eyebrow:  'Politický manifest · Česká republika · 2026',
    subtitle: 'Věříme, že Česká republika může být sebevědomá, silná a respektovaná.<br>Změna společnosti začíná u každého z nás.',
    btn_primary:   'Přidej se',
    btn_secondary: 'Náš program',
  },

  quote: {
    text:   '„Nová vlna vychází z přesvědčení, že změna společnosti začíná u každého z&nbsp;nás."',
    source: 'Nová vlna · Manifest osobní odpovědnosti',
  },

  zasady: {
    label:    'Co hájíme',
    title:    'Zásady<br>manifestu.',
    subtitle: 'Žádné slogany. Žádné prázdné sliby.<br>Jen principy, za které se zodpovídáme.',
    items: [
      {
        num:   '01',
        title: 'Odpovědnost jako základ',
        text:  'Silný stát nezačíná institucemi. Začíná u lidí. Pravidla platí pro všechny stejně. Svoboda jednoho končí tam, kde začíná svoboda druhého.',
      },
      {
        num:   '02',
        title: 'Stát, který funguje',
        text:  'Efektivní, digitální, transparentní. Audit a modernizace státní správy. Stát, který slouží lidem — ne naopak.',
      },
      {
        num:   '03',
        title: 'Odbornost místo populismu',
        text:  'Rozhodování na datech. Klíčové role pro odborníky. Politika je odpovědnost, ne marketing.',
      },
      {
        num:   '04',
        title: 'Ekonomika, která tvoří hodnotu',
        text:  'Podnikání, inovace, flexibilní prostředí, rozvoj českého know-how. Chceme ekonomiku, která roste.',
      },
      {
        num:   '05',
        title: 'Vzdělání jako základ budoucnosti',
        text:  'Kritické myšlení, příprava na budoucnost. Vzdělávací systém, který vede k odpovědnosti a iniciativě.',
      },
      {
        num:   '06',
        title: 'Bezpečnost a obrana',
        text:  'Dostatečné investice do obrany, moderní armáda, kybernetická bezpečnost. Aktivní role v Evropě a NATO.',
      },
      {
        num:   '07',
        title: 'Energetika bez hazardu',
        text:  'Obnovitelné zdroje, jaderná energie, vlastní infrastruktura. Modernizujeme bez hazardu s bezpečností.',
      },
      {
        num:   '08',
        title: 'Silná Evropa, silná ČR',
        text:  'Aktivní a vlivný hráč v EU. Sjednocování systémů v rámci Evropy a NATO. Svět je multipolární — my chceme být u toho.',
      },
    ],
  },

  // Pohyblivý pás hodnot
  values_ticker: [
    'Odpovědnost', 'Odbornost', 'Efektivní stát',
    'Svoboda', 'Vzdělání', 'Odvaha', 'Spolupráce',
    'Inovace', 'Bezpečnost', 'Dlouhodobá vize',
  ],

  philosophy: {
    label:  'Proč to děláme',
    title:  'Víc než<br>politika.',
    text_1: 'Nová vlna nestojí na prázdných slibech. Stojí na přesvědčení, že změna začíná u každého z nás.',
    text_2: 'Nevěříme na jednoduchá řešení. Věříme v odpovědnost, práci a dlouhodobou vizi. Tvoříme se závazkem k hodnotám, které definoval Václav Havel.',
    link:   'Číst Manifest osobní odpovědnosti',
    values: [
      'Myšlenky a činy mají sílu měnit realitu',
      'Odvaha je důležitější než jistota',
      'Spolupráce je silnější než izolace',
      'Technologie mají sloužit lidem',
      'Svoboda bez zodpovědnosti je prázdná',
      'Tvoříme místo stěžování',
      'Jednáme místo čekání',
    ],
  },

  join: {
    label:    'Přidej se',
    title:    'Přidej se<br>k vlně.',
    subtitle: 'Budoucnost vzniká rozhodnutími, která děláme dnes. Nová vlna je rozhodnutí.',
    btn_contact:  'Kontaktuj nás',
    btn_manifest: 'Číst manifesty',
  },

  petition: {
    label:       'Podepište manifest',
    title:       'Souhlasíte?<br>Podepište.',
    text:        'Pokud sdílíte přesvědčení, že změna společnosti začíná u každého z nás — podepište tento manifest. Váš podpis není závazkem k politické straně. Je prohlášením osobní odpovědnosti.',
    btn:         'Podepsat manifest',
    note:        'Po podpisu obdržíte e-mail s potvrzením a plným textem obou manifestů. Data zpracováváme v souladu s GDPR.',
    counter_label: 'podpisů',
  },


  // ─── MANIFEST STRANA ──────────────────────────────────────

  manifest_page: {
    eyebrow:  'Naše filozofie',
    title:    'Manifest osobní odpovědnosti',
    subtitle: 'Hlubší pohled na to, proč Nová vlna existuje.<br>Pro těch 5 % — kteří chtějí pochopit víc.',

    intro_1: 'Člověk není pouze pozorovatelem světa.',
    intro_2: 'Člověk je jeho tvůrcem.',

    chapters: [
      {
        title: 'Každá generace rozhoduje.',
        paragraphs: [
          'Každá generace přebírá svět takový, jaký je. A každá generace má možnost ho proměnit.',
          'Svět, ve kterém žijeme, je výsledkem rozhodnutí lidí před námi. Svět, ve kterém budou žít další generace, bude výsledkem rozhodnutí nás.',
          'Proto přijímáme osobní zodpovědnost. Zodpovědnost za svůj život. Za své činy. Za své projekty. Za dopad, který máme na ostatní.',
        ],
      },
      {
        title: 'Tvoření je svoboda.',
        paragraphs: [
          'Tvoření je přirozenou součástí lidské svobody. Když tvoříme, přebíráme odpovědnost za budoucnost.',
          'Tvořit neznamená pouze něco vytvořit. Tvořit znamená také být součástí. Podílet se na celku — na společnosti, komunitě a světě kolem nás.',
          'Celek existuje jen díky jednotlivcům, kteří se rozhodnou být jeho součástí. Bez jejich účasti by žádný celek nevznikl.',
          'Proto tvoření není jen o vytváření věcí. Je také o účasti. O aktivním bytí. O ochotě vstoupit do světa a nést svůj díl odpovědnosti.',
        ],
      },
      {
        title: 'Co věříme.',
        intro: 'Tvoříme se závazkem k občanské společnosti a k hodnotám, které definoval Václav Havel.',
        values: [
          'Myšlenky a činy mají sílu měnit realitu',
          'Odvaha je důležitější než jistota',
          'Spolupráce je silnější než izolace',
          'Technologie mají sloužit lidem',
          'Práce může být aktem smyslu, ne jen nutnosti',
        ],
        outro: 'Tvoření není výsadou vyvolených. Je to rozhodnutí.',
      },
      {
        title: 'Přestat čekat.',
        paragraphs: [
          'Rozhodnutí přestat čekat. Rozhodnutí začít jednat. Rozhodnutí nést důsledky.',
          'Nečekáme, až problémy vyřeší někdo jiný. Pokud něco nefunguje, snažíme se to zlepšit. Pokud něco chybí, snažíme se to vytvořit. Pokud uděláme chybu, přijímáme její důsledky a učíme se.',
          'Věříme, že svoboda a zodpovědnost patří k sobě. Bez zodpovědnosti je svoboda prázdná. Bez svobody ztrácí zodpovědnost smysl.',
        ],
        actions: [
          'Tvoříme místo stěžování',
          'Jednáme místo čekání',
          'Spolupracujeme místo obviňování',
          'Hledáme řešení místo výmluv',
        ],
        closing: 'Svoboda začíná tam, kde přijímáme zodpovědnost.',
      },
    ],

    sidebar_label:  'Odkud vychází nová vlna',
    sidebar_text:   'Tento manifest stojí v základech hnutí. Než jsme formulovali program, formulovali jsme hodnoty.',
    sidebar_link:   'Zpět na hlavní stránku',
    sidebar_quote:  '„Nová vlna vychází z přesvědčení, že změna společnosti začíná u každého z nás."',

    cta_title: 'Jsi jedním z nás.<br>Přidej se k vlně.',
    cta_btn:   'Přidej se',
  },


  // ─── PODPISOVÁ STRANA ─────────────────────────────────────

  petition_page: {
    title:    'Politický manifest<br>nová~vlna',
    intro:    'Svým podpisem vyjadřujete souhlas s hodnotami a principy, které jsou základem tohoto manifestu. Není to závazek k politické straně. Je to prohlášení osobní odpovědnosti.',

    excerpt_label: 'Klíčové body manifestu',
    excerpt_items: [
      { bold: 'Odpovědnost jako základ.', text: 'Silný stát nezačíná institucemi. Začíná u lidí. Pravidla platí pro všechny stejně.' },
      { bold: 'Odbornost místo populismu.', text: 'Rozhodování na datech. Politika je odpovědnost, ne marketing.' },
      { bold: 'Stát, který funguje.', text: 'Efektivní, digitální, transparentní. Slouží lidem — ne naopak.' },
      { bold: 'Svoboda a zodpovědnost patří k sobě.', text: 'Tvoříme místo stěžování. Jednáme místo čekání.' },
    ],

    link_manifest: 'Manifest osobní odpovědnosti →',
    link_zasady:   'Zásady manifestu →',

    form_title:    'Podepsat manifest',
    form_subtitle: 'Vyplňte jméno a e-mail. Po odeslání dostanete potvrzení s plným textem obou manifestů.',
    label_name:    'Jméno a příjmení',
    label_email:   'E-mailová adresa',
    btn_submit:    'Podepsat manifest',
    counter_label: 'lidí již podepsalo',

    success_title: 'podpis přijat.',
    success_text:  'Děkujeme. Na váš e-mail jsme odeslali potvrzení s plným textem obou manifestů.<br><br>Jste součástí vlny.',
  },


  // ─── FOOTER ───────────────────────────────────────────────
  footer: {
    copyright: '© 2026 Nová vlna',
    links: [
      { label: 'Zásady',   href: 'index.html#zasady'  },
      { label: 'Manifest', href: 'manifest.html'       },
      { label: 'O nás',    href: 'index.html#o-nas'    },
      { label: 'Kontakt',  href: 'index.html#pridat-se'},
    ],
  },

};


// ─────────────────────────────────────────────────────────────
// LOADER — nepotřebujete měnit nic níže
// ─────────────────────────────────────────────────────────────
(function populateContent() {
  function set(selector, html, all = false) {
    const els = all
      ? document.querySelectorAll(selector)
      : [document.querySelector(selector)];
    els.forEach(el => { if (el) el.innerHTML = html; });
  }
  function text(selector, str, all = false) {
    const els = all
      ? document.querySelectorAll(selector)
      : [document.querySelector(selector)];
    els.forEach(el => { if (el) el.textContent = str; });
  }
  function attr(selector, attribute, value) {
    const el = document.querySelector(selector);
    if (el) el[attribute] = value;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;

    // ── Společné ──────────────────────────────────────────
    set('[data-c="footer-copyright"]', CONTENT.footer.copyright);
    const footerLinks = document.querySelector('[data-c="footer-links"]');
    if (footerLinks) {
      footerLinks.innerHTML = CONTENT.footer.links
        .map(l => `<li><a href="${l.href}">${l.label}</a></li>`)
        .join('');
    }

    // ── Hlavní strana ─────────────────────────────────────
    if (page === 'home') {
      const C = CONTENT;

      set('[data-c="hero-eyebrow"]',  C.hero.eyebrow);
      set('[data-c="hero-sub"]',      C.hero.subtitle);
      attr('[data-c="btn-primary"]',  'innerHTML', C.hero.btn_primary);
      attr('[data-c="btn-secondary"]','innerHTML', C.hero.btn_secondary);

      set('[data-c="quote-text"]',    C.quote.text);
      set('[data-c="quote-source"]',  C.quote.source);

      set('[data-c="zasady-label"]',  C.zasady.label);
      set('[data-c="zasady-title"]',  C.zasady.title);
      set('[data-c="zasady-subtitle"]',C.zasady.subtitle);

      // Program items
      const grid = document.querySelector('[data-c="zasady-grid"]');
      if (grid) {
        grid.innerHTML = C.zasady.items.map(item => `
          <div class="program-item reveal">
            <p class="pi-num">${item.num}</p>
            <h3 class="pi-title">${item.title}</h3>
            <p class="pi-text">${item.text}</p>
          </div>`).join('');
      }

      set('[data-c="phil-label"]',  C.philosophy.label);
      set('[data-c="phil-title"]',  C.philosophy.title);
      set('[data-c="phil-text-1"]', C.philosophy.text_1);
      set('[data-c="phil-text-2"]', C.philosophy.text_2);
      set('[data-c="phil-link"]',   C.philosophy.link);
      const philValues = document.querySelector('[data-c="phil-values"]');
      if (philValues) {
        philValues.innerHTML = C.philosophy.values
          .map(v => `<div class="phil-value"><span class="phil-value-num">—</span>${v}</div>`)
          .join('');
      }

      set('[data-c="join-label"]',    C.join.label);
      set('[data-c="join-title"]',    C.join.title);
      set('[data-c="join-subtitle"]', C.join.subtitle);
      set('[data-c="join-btn-contact"]',  C.join.btn_contact);
      set('[data-c="join-btn-manifest"]', C.join.btn_manifest);

      set('[data-c="pet-label"]',   C.petition.label);
      set('[data-c="pet-title"]',   C.petition.title);
      set('[data-c="pet-text"]',    C.petition.text);
      set('[data-c="pet-btn"]',     C.petition.btn);
      set('[data-c="pet-note"]',    C.petition.note);
      set('[data-c="pet-counter-label"]', C.petition.counter_label);
    }

    // ── Manifest strana ───────────────────────────────────
    if (page === 'manifest') {
      const M = CONTENT.manifest_page;

      set('[data-c="m-eyebrow"]',  M.eyebrow);
      set('[data-c="m-title"]',    M.title);
      set('[data-c="m-subtitle"]', M.subtitle);
      set('[data-c="m-intro-1"]',  M.intro_1);
      set('[data-c="m-intro-2"]',  M.intro_2);

      const body = document.querySelector('[data-c="m-body"]');
      if (body) {
        body.innerHTML = M.chapters.map((ch, i, arr) => {
          const paras = (ch.paragraphs || []).map(p => `<p class="reveal">${p}</p>`).join('');
          const vals  = ch.values
            ? `<ul class="reveal">${ch.values.map(v=>`<li>${v}</li>`).join('')}</ul>` : '';
          const actions = ch.actions
            ? `<div class="action-box reveal"><ul>${ch.actions.map(a=>`<li>${a}</li>`).join('')}</ul></div>` : '';
          const closing = ch.closing
            ? `<div class="closing reveal"><p>${ch.closing}</p></div>` : '';
          const intro = ch.intro ? `<p class="reveal">${ch.intro}</p>` : '';
          const outro = ch.outro ? `<p class="reveal">${ch.outro}</p>` : '';
          const rule  = i < arr.length - 1 ? `<div class="accent-rule reveal"></div>` : '';
          return `
            <h2 class="chapter-title reveal">${ch.title}</h2>
            ${paras}${intro}${vals}${outro}
            ${rule}
            ${actions}${closing}`;
        }).join('');

        // re-observe reveals
        if (window._revealObs) {
          body.querySelectorAll('.reveal').forEach(el => window._revealObs.observe(el));
        }
      }

      set('[data-c="m-sidebar-label"]', M.sidebar_label);
      set('[data-c="m-sidebar-text"]',  M.sidebar_text);
      set('[data-c="m-sidebar-link"]',  M.sidebar_link);
      set('[data-c="m-sidebar-quote"]', M.sidebar_quote);
      set('[data-c="m-cta-title"]',     M.cta_title);
      set('[data-c="m-cta-btn"]',       M.cta_btn);
    }

    // ── Podpisová strana ──────────────────────────────────
    if (page === 'petition') {
      const P = CONTENT.petition_page;

      set('[data-c="p-title"]',    P.title);
      set('[data-c="p-intro"]',    P.intro);
      set('[data-c="p-excerpt-label"]', P.excerpt_label);

      const excerptList = document.querySelector('[data-c="p-excerpt-items"]');
      if (excerptList) {
        excerptList.innerHTML = P.excerpt_items
          .map(i => `<p><strong>${i.bold}</strong> ${i.text}</p>`).join('');
      }

      set('[data-c="p-form-title"]',    P.form_title);
      set('[data-c="p-form-subtitle"]', P.form_subtitle);
      set('[data-c="p-label-name"]',    P.label_name);
      set('[data-c="p-label-email"]',   P.label_email);
      set('[data-c="p-btn-submit"]',    P.btn_submit);
      set('[data-c="p-counter-label"]', P.counter_label);
      set('[data-c="p-success-title"]', P.success_title);
      set('[data-c="p-success-text"]',  P.success_text);
    }
  });
})();
