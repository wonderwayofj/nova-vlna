/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║   nová~vlna  —  OBSAH WEBU / WEBSITE CONTENT                ║
 * ║                                                              ║
 * ║   Editujte texty zde. HTML soubory neměňte.                  ║
 * ║   Edit texts here. Do not modify the HTML files.             ║
 * ║                                                              ║
 * ║   Jazyk / Language:                                          ║
 * ║     cs → Czech (default)                                     ║
 * ║     en → English                                             ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const CONTENT = {

  // ─── PŘÍSTUPOVÉ HESLO / GATE PASSWORD ────────────────────────
  gate: {
    password: 'novavlna2026',   // ← změňte heslo zde / change password here
  },


  // ══════════════════════════════════════════════════════════════
  // ČEŠTINA
  // ══════════════════════════════════════════════════════════════
  cs: {

    // ─── NAVIGACE ───────────────────────────────────────────────
    nav: {
      zasady:   'Zásady',
      o_nas:    'O nás',
      proc:     'Proč to děláme?',
      podepsat: 'Podepsat',
    },

    // ─── HERO ───────────────────────────────────────────────────
    hero: {
      eyebrow:      'Politický manifest · Česká republika · 2026',
      subtitle:     'Věříme, že Česká republika může být sebevědomá, silná a respektovaná.<br>Změna společnosti začíná u každého z nás.',
      btn_primary:  'Přidej se',
      btn_secondary:'Náš program',
    },

    // ─── CITÁT ──────────────────────────────────────────────────
    quote: {
      text:   '„Nová vlna vychází z přesvědčení, že změna společnosti začíná u každého z&nbsp;nás."',
      source: 'Nová vlna · Manifest osobní odpovědnosti',
    },

    // ─── ZÁSADY ─────────────────────────────────────────────────
    zasady: {
      label:    'Co hájíme',
      title:    'Zásady<br>manifestu.',
      subtitle: 'Žádné slogany. Žádné prázdné sliby.<br>Jen principy, za které se zodpovídáme.',
      items: [
        { num: '01', title: 'Odpovědnost jako základ',         text: 'Silný stát nezačíná institucemi. Začíná u lidí. Pravidla platí pro všechny stejně. Svoboda jednoho končí tam, kde začíná svoboda druhého.' },
        { num: '02', title: 'Stát, který funguje',             text: 'Efektivní, digitální, transparentní. Audit a modernizace státní správy. Stát, který slouží lidem — ne naopak.' },
        { num: '03', title: 'Odbornost místo populismu',       text: 'Rozhodování na datech. Klíčové role pro odborníky. Politika je odpovědnost, ne marketing.' },
        { num: '04', title: 'Ekonomika, která tvoří hodnotu',  text: 'Podnikání, inovace, flexibilní prostředí, rozvoj českého know-how. Chceme ekonomiku, která roste.' },
        { num: '05', title: 'Vzdělání jako základ budoucnosti',text: 'Kritické myšlení, příprava na budoucnost. Vzdělávací systém, který vede k odpovědnosti a iniciativě.' },
        { num: '06', title: 'Bezpečnost a obrana',             text: 'Dostatečné investice do obrany, moderní armáda, kybernetická bezpečnost. Aktivní role v Evropě a NATO.' },
        { num: '07', title: 'Energetika bez hazardu',          text: 'Rozvoj obnovitelných zdrojů ze strategických důvodů a nezávislosti, jaderná energie, vlastní infrastruktura.' },
        { num: '08', title: 'Silná Evropa, silná ČR',          text: 'Aktivní a vlivný hráč v EU. Sjednocování systémů v rámci Evropy a NATO. Svět je multipolární — my chceme být u toho.' },
      ],
    },

    // ─── POHYBLIVÝ PÁS HODNOT ───────────────────────────────────
    values_ticker: [
      'Odpovědnost', 'Odbornost', 'Efektivní stát',
      'Svoboda', 'Vzdělání', 'Odvaha', 'Spolupráce',
      'Inovace', 'Bezpečnost', 'Dlouhodobá vize',
    ],

    // ─── FILOZOFIE ──────────────────────────────────────────────
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

    // ─── PŘIDEJ SE ──────────────────────────────────────────────
    join: {
      label:        'Přidej se',
      title:        'Přidej se<br>k vlně.',
      subtitle:     'Budoucnost vzniká rozhodnutími, která děláme dnes. Nová vlna je rozhodnutí.',
      btn_contact:  'Kontaktuj nás',
      btn_manifest: 'Číst manifesty',
    },

    // ─── PETICE (SEKCE NA HLAVNÍ STRÁNCE) ───────────────────────
    petition: {
      label:         'Podepište manifest',
      title:         'Souhlasíte?<br>Podepište.',
      text:          'Pokud sdílíte přesvědčení, že změna společnosti začíná u každého z nás — podepište tento manifest. Váš podpis není závazkem k politické straně. Je prohlášením osobní odpovědnosti.',
      btn:           'Podepsat manifest',
      note:          'Po podpisu obdržíte e-mail s potvrzením a plným textem obou manifestů. Data zpracováváme v souladu s GDPR.',
      counter_label: 'podpisů',
    },

    // ─── STRÁNKA MANIFESTU ──────────────────────────────────────
    manifest_page: {
      eyebrow:  'Naše filozofie',
      title:    'Manifest osobní odpovědnosti',
      subtitle: 'Hlubší pohled na to, proč Nová vlna existuje.',
      intro_1:  'Člověk není pouze pozorovatelem světa.',
      intro_2:  'Člověk je jeho tvůrcem.',
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
      sidebar_label: 'Odkud vychází nová vlna',
      sidebar_text:  'Tento manifest stojí v základech hnutí. Než jsme formulovali program, formulovali jsme hodnoty.',
      sidebar_link:  'Zpět na hlavní stránku',
      sidebar_quote: '„Nová vlna vychází z přesvědčení, že změna společnosti začíná u každého z nás."',
      cta_title:     'Jsi jedním z nás.<br>Přidej se k vlně.',
      cta_btn:       'Přidej se',
    },

    // ─── STRÁNKA PODPISU ────────────────────────────────────────
    petition_page: {
      title:         'Politický manifest<br>nová~vlna',
      intro:         'Svým podpisem vyjadřujete souhlas s hodnotami a principy, které jsou základem tohoto manifestu. Není to závazek k politické straně. Je to prohlášení osobní odpovědnosti.',
      excerpt_label: 'Klíčové body manifestu',
      excerpt_items: [
        { bold: 'Odpovědnost jako základ.',            text: 'Silný stát nezačíná institucemi. Začíná u lidí. Pravidla platí pro všechny stejně.' },
        { bold: 'Odbornost místo populismu.',          text: 'Rozhodování na datech. Politika je odpovědnost, ne marketing.' },
        { bold: 'Stát, který funguje.',                text: 'Efektivní, digitální, transparentní. Slouží lidem — ne naopak.' },
        { bold: 'Svoboda a zodpovědnost patří k sobě.',text: 'Tvoříme místo stěžování. Jednáme místo čekání.' },
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

    // ─── FOOTER ─────────────────────────────────────────────────
    footer: {
      copyright: '© 2026 Nová vlna',
      links: [
        { label: 'Zásady',   href: 'index.html#zasady'   },
        { label: 'Manifest', href: 'manifest.html'        },
        { label: 'O nás',    href: 'index.html#o-nas'     },
        { label: 'Kontakt',  href: 'index.html#pridat-se' },
      ],
    },

  }, // end cs


  // ══════════════════════════════════════════════════════════════
  // ENGLISH
  // ══════════════════════════════════════════════════════════════
  en: {

    // ─── NAVIGATION ─────────────────────────────────────────────
    nav: {
      zasady:   'Principles',
      o_nas:    'About',
      proc:     'Why we do it?',
      podepsat: 'Sign',
    },

    // ─── HERO ───────────────────────────────────────────────────
    hero: {
      eyebrow:      'Political Manifesto · Czech Republic · 2026',
      subtitle:     'We believe the Czech Republic can be confident, strong, and respected.<br>Social change begins with each of us.',
      btn_primary:  'Join us',
      btn_secondary:'Our principles',
    },

    // ─── QUOTE ──────────────────────────────────────────────────
    quote: {
      text:   '"Nová vlna stems from the belief that social change begins with each of&nbsp;us."',
      source: 'Nová vlna · Manifesto of Personal Responsibility',
    },

    // ─── PRINCIPLES ─────────────────────────────────────────────
    zasady: {
      label:    'What we stand for',
      title:    'Manifesto<br>principles.',
      subtitle: 'No slogans. No empty promises.<br>Only principles we are accountable to.',
      items: [
        { num: '01', title: 'Responsibility as foundation',           text: "A strong state does not begin with institutions. It begins with people. Rules apply equally to everyone. One person's freedom ends where another's begins." },
        { num: '02', title: 'A state that works',                     text: 'Efficient, digital, transparent. Audit and modernisation of public administration. A state that serves people — not the other way around.' },
        { num: '03', title: 'Expertise over populism',                text: 'Data-driven decision making. Key roles for specialists. Politics is responsibility, not marketing.' },
        { num: '04', title: 'An economy that creates value',          text: 'Entrepreneurship, innovation, a flexible environment, and development of Czech know-how. We want an economy that grows.' },
        { num: '05', title: 'Education as the foundation of tomorrow',text: 'Critical thinking, preparation for the future. An education system that fosters responsibility and initiative.' },
        { num: '06', title: 'Security and defence',                   text: 'Adequate defence spending, a modern military, cybersecurity. An active role in Europe and NATO.' },
        { num: '07', title: 'Energy without gambling',                text: 'Renewable sources, nuclear energy, own infrastructure. We modernise without gambling with security.' },
        { num: '08', title: 'Strong Europe, strong Czech Republic',   text: 'An active and influential player in the EU. Harmonising systems within Europe and NATO. The world is multipolar — we want to be part of it.' },
      ],
    },

    // ─── VALUES TICKER ──────────────────────────────────────────
    values_ticker: [
      'Responsibility', 'Expertise', 'Effective state',
      'Freedom', 'Education', 'Courage', 'Cooperation',
      'Innovation', 'Security', 'Long-term vision',
    ],

    // ─── PHILOSOPHY ─────────────────────────────────────────────
    philosophy: {
      label:  'Why we do it',
      title:  'More than<br>politics.',
      text_1: 'Nová vlna is not built on empty promises. It is built on the belief that change begins with each of us.',
      text_2: "We don't believe in simple solutions. We believe in responsibility, hard work, and a long-term vision. We create with a commitment to the values defined by Václav Havel.",
      link:   'Read the Manifesto of Personal Responsibility',
      values: [
        'Thoughts and actions have the power to change reality',
        'Courage matters more than certainty',
        'Cooperation is stronger than isolation',
        'Technology should serve people',
        'Freedom without responsibility is empty',
        'We create instead of complaining',
        'We act instead of waiting',
      ],
    },

    // ─── JOIN ───────────────────────────────────────────────────
    join: {
      label:        'Join us',
      title:        'Join<br>the wave.',
      subtitle:     'The future is shaped by decisions we make today. Nová vlna is a decision.',
      btn_contact:  'Contact us',
      btn_manifest: 'Read the manifestos',
    },

    // ─── PETITION (HOMEPAGE SECTION) ────────────────────────────
    petition: {
      label:         'Sign the manifesto',
      title:         'Do you agree?<br>Sign.',
      text:          'If you share the belief that social change begins with each of us — sign this manifesto. Your signature is not a commitment to a political party. It is a declaration of personal responsibility.',
      btn:           'Sign the manifesto',
      note:          'After signing, you will receive a confirmation email with the full text of both manifestos. Data processed in accordance with GDPR.',
      counter_label: 'signatures',
    },

    // ─── MANIFESTO PAGE ─────────────────────────────────────────
    manifest_page: {
      eyebrow:  'Our philosophy',
      title:    'Manifesto of Personal Responsibility',
      subtitle: 'A deeper look at why Nová vlna exists.',
      intro_1:  'A person is not merely an observer of the world.',
      intro_2:  'A person is its creator.',
      chapters: [
        {
          title: 'Every generation decides.',
          paragraphs: [
            'Every generation inherits the world as it is. And every generation has the power to transform it.',
            'The world we live in is the result of decisions made by those before us. The world future generations will inhabit will be the result of our decisions.',
            'That is why we accept personal responsibility. Responsibility for our lives. For our actions. For our projects. For the impact we have on others.',
          ],
        },
        {
          title: 'Creating is freedom.',
          paragraphs: [
            'Creating is a natural part of human freedom. When we create, we take responsibility for the future.',
            'To create does not mean merely to make something. To create also means to be part of something. To contribute to the whole — to society, community, and the world around us.',
            'The whole exists only because of individuals who choose to be part of it. Without their participation, no whole would exist.',
            "That is why creating is not just about making things. It is also about participation. About active being. About the willingness to enter the world and bear one's share of responsibility.",
          ],
        },
        {
          title: 'What we believe.',
          intro: 'We create with a commitment to civil society and to the values defined by Václav Havel.',
          values: [
            'Thoughts and actions have the power to change reality',
            'Courage matters more than certainty',
            'Cooperation is stronger than isolation',
            'Technology should serve people',
            'Work can be an act of meaning, not mere necessity',
          ],
          outro: 'Creating is not the privilege of the few. It is a decision.',
        },
        {
          title: 'Stop waiting.',
          paragraphs: [
            'The decision to stop waiting. The decision to start acting. The decision to bear the consequences.',
            'We do not wait for others to solve problems. If something does not work, we try to improve it. If something is missing, we try to create it. If we make a mistake, we accept its consequences and learn.',
            'We believe that freedom and responsibility belong together. Without responsibility, freedom is empty. Without freedom, responsibility loses meaning.',
          ],
          actions: [
            'We create instead of complaining',
            'We act instead of waiting',
            'We cooperate instead of blaming',
            'We seek solutions instead of excuses',
          ],
          closing: 'Freedom begins where we accept responsibility.',
        },
      ],
      sidebar_label: 'Where Nová vlna comes from',
      sidebar_text:  'This manifesto is the foundation of the movement. Before we formulated a programme, we formulated our values.',
      sidebar_link:  'Back to main page',
      sidebar_quote: '"Nová vlna stems from the belief that social change begins with each of us."',
      cta_title:     'You are one of us.<br>Join the wave.',
      cta_btn:       'Join us',
    },

    // ─── PETITION PAGE ──────────────────────────────────────────
    petition_page: {
      title:         'Political Manifesto<br>nová~vlna',
      intro:         'By signing, you express agreement with the values and principles that form the foundation of this manifesto. It is not a commitment to a political party. It is a declaration of personal responsibility.',
      excerpt_label: 'Key points of the manifesto',
      excerpt_items: [
        { bold: 'Responsibility as foundation.',           text: 'A strong state does not begin with institutions. It begins with people. Rules apply equally to all.' },
        { bold: 'Expertise over populism.',                text: 'Data-driven decision making. Politics is responsibility, not marketing.' },
        { bold: 'A state that works.',                     text: 'Efficient, digital, transparent. It serves people — not the other way around.' },
        { bold: 'Freedom and responsibility belong together.', text: 'We create instead of complaining. We act instead of waiting.' },
      ],
      link_manifest: 'Manifesto of Personal Responsibility →',
      link_zasady:   'Manifesto principles →',
      form_title:    'Sign the manifesto',
      form_subtitle: 'Enter your name and email. After submitting you will receive a confirmation with the full text of both manifestos.',
      label_name:    'Full name',
      label_email:   'Email address',
      btn_submit:    'Sign the manifesto',
      counter_label: 'people have already signed',
      success_title: 'signature received.',
      success_text:  'Thank you. We have sent a confirmation to your email with the full text of both manifestos.<br><br>You are part of the wave.',
    },

    // ─── FOOTER ─────────────────────────────────────────────────
    footer: {
      copyright: '© 2026 Nová vlna',
      links: [
        { label: 'Principles', href: 'index.html#zasady'   },
        { label: 'Manifesto',  href: 'manifest.html'        },
        { label: 'About',      href: 'index.html#o-nas'     },
        { label: 'Contact',    href: 'index.html#pridat-se' },
      ],
    },

  }, // end en

}; // end CONTENT


// ══════════════════════════════════════════════════════════════
//  JAZYKOVÝ PŘEPÍNAČ / LANGUAGE SWITCHER
//  Nepotřebujete měnit nic níže / No edits needed below
// ══════════════════════════════════════════════════════════════

window.NV_LANG = localStorage.getItem('nv_lang') || 'cs';

/** Přepne jazyk a překreslí celou stránku / Switch language and re-render */
window.NV_setLang = function (lang) {
  window.NV_LANG = lang;
  localStorage.setItem('nv_lang', lang);
  _render();
  _syncLangUI();
};

function _syncLangUI() {
  const btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = window.NV_LANG === 'cs' ? 'EN' : 'CS';
  document.documentElement.setAttribute('lang', window.NV_LANG === 'cs' ? 'cs' : 'en');
}

// ── DOM helpers ────────────────────────────────────────────────
function _set(sel, html) {
  const el = document.querySelector(sel);
  if (el) el.innerHTML = html;
}
function _txt(sel, str) {
  const el = document.querySelector(sel);
  if (el) el.textContent = str;
}

// ── Main render ────────────────────────────────────────────────
function _render() {
  if (!document.body) return;
  const page = document.body.dataset.page;
  const T    = CONTENT[window.NV_LANG];

  // ── Nav (shared) ─────────────────────────────────────────────
  _txt('[data-c="nav-zasady"]',   T.nav.zasady);
  _txt('[data-c="nav-o-nas"]',    T.nav.o_nas);
  _txt('[data-c="nav-proc"]',     T.nav.proc);
  _txt('[data-c="nav-podepsat"]', T.nav.podepsat);

  // ── Footer (shared) ──────────────────────────────────────────
  _set('[data-c="footer-copyright"]', T.footer.copyright);
  const footerLinks = document.querySelector('[data-c="footer-links"]');
  if (footerLinks) {
    footerLinks.innerHTML = T.footer.links
      .map(l => `<li><a href="${l.href}">${l.label}</a></li>`)
      .join('');
  }

  // ── Home page ────────────────────────────────────────────────
  if (page === 'home') {
    _set('[data-c="hero-eyebrow"]',    T.hero.eyebrow);
    _set('[data-c="hero-sub"]',        T.hero.subtitle);
    _set('[data-c="btn-primary"]',     T.hero.btn_primary);
    _set('[data-c="btn-secondary"]',   T.hero.btn_secondary);

    _set('[data-c="quote-text"]',      T.quote.text);
    _set('[data-c="quote-source"]',    T.quote.source);

    _set('[data-c="zasady-label"]',    T.zasady.label);
    _set('[data-c="zasady-title"]',    T.zasady.title);
    _set('[data-c="zasady-subtitle"]', T.zasady.subtitle);

    T.zasady.items.forEach((item, i) => {
      _set(`[data-c="zasady-${i}-title"]`, item.title);
      _set(`[data-c="zasady-${i}-text"]`,  item.text);
    });

    // Values ticker
    const ticker = document.getElementById('ticker');
    if (ticker) {
      ticker.innerHTML = '';
      const vals = T.values_ticker;
      [...vals, ...vals].forEach(v => {
        const item = document.createElement('div');
        item.className = 'vt-item';
        item.innerHTML = `${v}<span class="vt-dot"></span>`;
        ticker.appendChild(item);
      });
    }

    _set('[data-c="phil-label"]',  T.philosophy.label);
    _set('[data-c="phil-title"]',  T.philosophy.title);
    _set('[data-c="phil-text-1"]', T.philosophy.text_1);
    _set('[data-c="phil-text-2"]', T.philosophy.text_2);
    _set('[data-c="phil-link"]',   T.philosophy.link);

    const philValues = document.querySelector('[data-c="phil-values"]');
    if (philValues) {
      philValues.innerHTML = T.philosophy.values
        .map(v => `<div class="phil-value"><span class="phil-value-num">—</span>${v}</div>`)
        .join('');
    }

    _set('[data-c="join-label"]',        T.join.label);
    _set('[data-c="join-title"]',        T.join.title);
    _set('[data-c="join-subtitle"]',     T.join.subtitle);
    _set('[data-c="join-btn-contact"]',  T.join.btn_contact);
    _set('[data-c="join-btn-manifest"]', T.join.btn_manifest);

    _set('[data-c="pet-label"]',         T.petition.label);
    _set('[data-c="pet-title"]',         T.petition.title);
    _set('[data-c="pet-text"]',          T.petition.text);
    _set('[data-c="pet-btn"]',           T.petition.btn);
    _set('[data-c="pet-note"]',          T.petition.note);
    _set('[data-c="pet-counter-label"]', T.petition.counter_label);
  }

  // ── Manifest page ────────────────────────────────────────────
  if (page === 'manifest') {
    const M = T.manifest_page;

    _set('[data-c="m-eyebrow"]',  M.eyebrow);
    _set('[data-c="m-title"]',    M.title);
    _set('[data-c="m-subtitle"]', M.subtitle);
    _set('[data-c="m-intro-1"]',  M.intro_1);
    _set('[data-c="m-intro-2"]',  M.intro_2);

    const body = document.querySelector('[data-c="m-body"]');
    if (body) {
      body.innerHTML = M.chapters.map((ch, i, arr) => {
        const paras   = (ch.paragraphs || []).map(p => `<p class="reveal">${p}</p>`).join('');
        const vals    = ch.values
          ? `<ul class="reveal">${ch.values.map(v => `<li>${v}</li>`).join('')}</ul>` : '';
        const actions = ch.actions
          ? `<div class="action-box reveal"><ul>${ch.actions.map(a => `<li>${a}</li>`).join('')}</ul></div>` : '';
        const closing = ch.closing ? `<div class="closing reveal"><p>${ch.closing}</p></div>` : '';
        const intro   = ch.intro   ? `<p class="reveal">${ch.intro}</p>` : '';
        const outro   = ch.outro   ? `<p class="reveal">${ch.outro}</p>` : '';
        const rule    = i < arr.length - 1 ? `<div class="accent-rule reveal"></div>` : '';
        return `
          <h2 class="chapter-title reveal">${ch.title}</h2>
          ${paras}${intro}${vals}${outro}
          ${rule}${actions}${closing}`;
      }).join('');

      if (window._revealObs) {
        body.querySelectorAll('.reveal').forEach(el => window._revealObs.observe(el));
      }
    }

    _set('[data-c="m-sidebar-label"]', M.sidebar_label);
    _set('[data-c="m-sidebar-text"]',  M.sidebar_text);
    _set('[data-c="m-sidebar-link"]',  M.sidebar_link);
    _set('[data-c="m-sidebar-quote"]', M.sidebar_quote);
    _set('[data-c="m-cta-title"]',     M.cta_title);
    _set('[data-c="m-cta-btn"]',       M.cta_btn);
  }

  // ── Petition page ────────────────────────────────────────────
  if (page === 'petition') {
    const P = T.petition_page;

    _set('[data-c="p-title"]',         P.title);
    _set('[data-c="p-intro"]',         P.intro);
    _set('[data-c="p-excerpt-label"]', P.excerpt_label);

    const excerptList = document.querySelector('[data-c="p-excerpt-items"]');
    if (excerptList) {
      excerptList.innerHTML = P.excerpt_items
        .map(i => `<p><strong>${i.bold}</strong> ${i.text}</p>`).join('');
    }

    _set('[data-c="p-form-title"]',    P.form_title);
    _set('[data-c="p-form-subtitle"]', P.form_subtitle);
    _txt('[data-c="p-label-name"]',    P.label_name);
    _txt('[data-c="p-label-email"]',   P.label_email);
    _set('[data-c="p-btn-submit"]',    P.btn_submit);
    _set('[data-c="p-counter-label"]', P.counter_label);
    _set('[data-c="p-success-title"]', P.success_title);
    _set('[data-c="p-success-text"]',  P.success_text);
  }
}

// ── Boot ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  _render();
  _syncLangUI();
});
