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
      o_nas:    'O&nbsp;nás',
      proc:     'Proč to děláme?',
      podepsat: 'Podepsat',
    },

    // ─── HERO ───────────────────────────────────────────────────
    hero: {
      eyebrow:      'Politický manifest · Česká republika · 2026',
      subtitle:     'Věříme, že Česká republika může být sebevědomá, silná a&nbsp;respektovaná.<span class="sub-2">Změna společnosti začíná u&nbsp;každého z&nbsp;nás.</span>',
      btn_primary:  'Přidej se',
      btn_secondary:'Zásady',
    },

    // ─── CITÁT ──────────────────────────────────────────────────
    quote: {
      text:   '„Nová vlna vychází z&nbsp;přesvědčení, že změna společnosti začíná u&nbsp;každého z&nbsp;nás."',
      source: 'Nová vlna · Manifest osobní odpovědnosti',
      btn:    'Číst',
    },

    // ─── ZÁSADY ─────────────────────────────────────────────────
    zasady: {
      label:    'Co hájíme',
      title:    'Zásady<br>manifestu.',
      items: [
        { num: '01', title: 'Odpovědnost jako základ', text: 'Silný stát nezačíná institucemi. Začíná u&nbsp;lidí. Věříme ve společnost, kde lidé přebírají odpovědnost za svůj život, pravidla platí pro všechny stejně a&nbsp;svoboda jednoho končí tam, kde začíná svoboda druhého.' },
        { num: '02', title: 'Odbornost místo populismu', text: 'Budoucnost nelze řídit dojmy. Rozhodování musí stát na datech a&nbsp;klíčové role mají zastávat odborníci. Politika je odpovědnost, ne marketing.' },
        { num: '03', title: 'Stát, který funguje', text: 'Chceme stát, který je efektivní, digitální a&nbsp;transparentní. Prosazujeme audit a&nbsp;modernizaci státní správy tak, aby sloužila lidem — ne naopak.' },
        { num: '04', title: 'Technologie jako nástroj pokroku', text: 'Digitalizace je klíčová pro fungující stát. Snižuje byrokracii, zvyšuje efektivitu — a&nbsp;musí být bezpečná.' },
        { num: '05', title: 'Vzdělání jako základ budoucnosti', text: 'Chceme vzdělávací systém, který rozvíjí kritické myšlení, připravuje na budoucnost a&nbsp;vede k&nbsp;odpovědnosti a&nbsp;iniciativě.' },
        { num: '06', title: 'Zdravá a&nbsp;silná společnost', text: 'Investice do zdraví je investice do budoucnosti. Dostupné zdravotnictví, důraz na prevenci a&nbsp;dlouhodobá udržitelnost systému.' },
        { num: '07', title: 'Energetika bez hazardu', text: 'Energetická bezpečnost je klíčová. Podporujeme obnovitelné zdroje, jadernou energii a&nbsp;vlastní infrastrukturu. Dokud nemáme jistotu plné stability, zůstáváme i&nbsp;u&nbsp;tradičních zdrojů a&nbsp;zajišťujeme plynulý přechod. Modernizujeme bez hazardu.' },
        { num: '08', title: 'Rozumný přístup ke klimatu', text: 'Chceme chránit životní prostředí bez oslabení ekonomiky. Pragmatická řešení, podpora inovací a&nbsp;rovnováha mezi ekologií a&nbsp;růstem.' },
        { num: '09', title: 'Bezpečnost a&nbsp;obrana', text: 'Bezpečnost je základ stability. Dostatečné investice do obrany, moderní armáda, kybernetická bezpečnost a&nbsp;aktivní role v&nbsp;Evropě a&nbsp;NATO.' },
        { num: '10', title: 'Strategická nezávislost', text: 'Nezávislost znamená připravenost. Vlastní zdroje, záložní řešení, odolnost proti výpadkům. Když přijde krize, stát funguje.' },
        { num: '11', title: 'Ekonomika, která tvoří hodnotu', text: 'Podporujeme podnikání a&nbsp;inovace, flexibilní pracovní prostředí a&nbsp;rozvoj českého know-how. Chceme ekonomiku, která roste a&nbsp;tvoří hodnotu.' },
        { num: '12', title: 'Silná Evropa, silná ČR', text: 'Chceme být aktivní a&nbsp;vlivný hráč v&nbsp;EU, sjednocovat systémy v&nbsp;rámci Evropy a&nbsp;NATO a&nbsp;posilovat evropskou ekonomiku. Svět je multipolární — my chceme být u&nbsp;toho.' },
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
      label:  'Proč to děláme?',
      title:  'Společnost = politika',
      text_1: 'Nová vlna není politická strana. Je to společenský posun. Zde najdeme soubor hodnot a&nbsp;principů, na kterých se jako společnost můžeme shodnout a&nbsp;kterým se může řídit kdokoli, včetně politických stran.',
      text_2: 'Jak chápeme pragmatismus? Jsou to hodnoty popisující důvěryhodnou společnost; konzistence a&nbsp;čitelnost vytvářejí prostředí pro partnery. Chceme být odpovědný partner, který nemlží a&nbsp;nepodvádí. Stavíme na občanské společnosti.',
      text_3: 'Jde o&nbsp;zdraví společnosti. Bereme odpovědnost do vlastních rukou, rosteme krůček po krůčku — pět procent ročně je udržitelnější než rychlá změna, která vyvolá protitlak. Vymezujeme se proti populismu. Je pro nás důležitý dlouhodobý pokrok, ne krátkodobý zisk.',
      link:   'Číst Manifest osobní odpovědnosti',
      values: [
        'Myšlenky a&nbsp;činy mají sílu měnit realitu',
        'Odvaha je důležitější než jistota',
        'Spolupráce je silnější než izolace',
        'Technologie mají sloužit lidem',
        'Svoboda bez odpovědnosti je prázdná',
        'Tvoříme místo stěžování',
        'Jednáme místo čekání',
      ],
    },

    // ─── PŘIDEJ SE ──────────────────────────────────────────────
    join: {
      label:        'Přidej se',
      title:        'Přidej se<br>k&nbsp;vlně.',
      subtitle:     'Budoucnost vzniká rozhodnutími, která děláme dnes. Nová vlna je rozhodnutí.',
      btn_contact:  'Kontaktuj nás',
      btn_manifest: 'Číst manifesty',
    },

    // ─── PETICE (SEKCE NA HLAVNÍ STRÁNCE) ───────────────────────
    petition: {
      label:         'Podepište manifest',
      title:         'Souhlasíte?<br>Podepište.',
      text:          'Pokud sdílíte přesvědčení, že změna společnosti začíná u&nbsp;každého z&nbsp;nás — podepište tento manifest. Váš podpis není závazkem k&nbsp;politické straně. Je prohlášením osobní odpovědnosti.',
      btn:           'Podepsat manifest',
      note:          'Po podpisu obdržíte e-mail s&nbsp;potvrzením a&nbsp;plným textem obou manifestů. Data zpracováváme v&nbsp;souladu s&nbsp;GDPR.',
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
            'Každá generace přebírá svět takový, jaký je. A&nbsp;každá generace má možnost ho proměnit.',
            'Svět, ve kterém žijeme, je výsledkem rozhodnutí lidí před námi. Svět, ve kterém budou žít další generace, bude výsledkem rozhodnutí nás.',
            'Proto přijímáme osobní odpovědnost. Odpovědnost za svůj život. Za své činy. Za své projekty. Za dopad, který máme na ostatní.',
          ],
        },
        {
          title: 'Tvoření znamená i&nbsp;být součástí.',
          paragraphs: [
            'Tvoření je přirozenou součástí lidské svobody. Když tvoříme, přebíráme odpovědnost za budoucnost.',
            'Tvořit neznamená pouze něco vytvořit. Tvořit znamená také být součástí. Všichni tvoříme společnost a&nbsp;podílíme se na celku, ať už máme jakékoli povolání nebo místo ve společnosti.',
            'Společnost existuje jen díky lidem, kteří se rozhodnou být její součástí. Proto tvoření není jen o&nbsp;vytváření věcí — je o&nbsp;účasti, o&nbsp;ochotě vstoupit do světa a&nbsp;nést svůj díl odpovědnosti.',
          ],
        },
        {
          title: 'Co věříme.',
          intro: 'Navazujeme na havlovskou tradici odpovědnosti a&nbsp;občanské společnosti. K&nbsp;ní přidáváme vlastní přesvědčení:',
          values: [
            'Myšlenky a&nbsp;činy mají sílu měnit realitu',
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
            'Nečekáme, až problémy vyřeší někdo jiný. Pokud něco nefunguje, snažíme se to zlepšit. Pokud něco chybí, snažíme se to vytvořit. Pokud uděláme chybu, přijímáme její důsledky a&nbsp;učíme se.',
            'Věříme, že svoboda a&nbsp;odpovědnost patří k&nbsp;sobě. Bez odpovědnosti je svoboda prázdná. Bez svobody ztrácí odpovědnost smysl.',
          ],
          actions: [
            'Tvoříme místo stěžování',
            'Jednáme místo čekání',
            'Spolupracujeme místo obviňování',
            'Hledáme řešení místo výmluv',
          ],
          epilogue: [
            'Nejsme pasivní pozorovatelé světa. Jsme lidé, kteří se rozhodli tvořit. Tvořit věci. Tvořit komunity. Tvořit společnost. A&nbsp;nést za ni odpovědnost.',
          ],
          closing: 'Svoboda začíná tam, kde přijímáme odpovědnost.',
        },
      ],
      sidebar_label: 'Odkud vychází nová vlna',
      sidebar_text:  'Tento manifest stojí v&nbsp;základech hnutí. Než jsme formulovali program, formulovali jsme hodnoty.',
      sidebar_link:  'Zpět na hlavní stránku',
      sidebar_quote: '„Nová vlna vychází z&nbsp;přesvědčení, že změna společnosti začíná u&nbsp;každého z&nbsp;nás."',
      cta_title:     'Jsi jedním z&nbsp;nás.<br>Přidej se k&nbsp;vlně.',
      cta_btn:       'Přidej se',
    },

    // ─── STRÁNKA PODPISU ────────────────────────────────────────
    petition_page: {
      title:         'Politický manifest<br>nová~vlna',
      intro:         'Svým podpisem vyjadřujete souhlas s&nbsp;hodnotami a&nbsp;principy, které jsou základem tohoto manifestu. Není to závazek k&nbsp;politické straně. Je to prohlášení osobní odpovědnosti.',
      excerpt_label: 'Klíčové body manifestu',
      excerpt_items: [
        { bold: 'Odpovědnost jako základ.',            text: 'Silný stát nezačíná institucemi. Začíná u&nbsp;lidí. Pravidla platí pro všechny stejně.' },
        { bold: 'Odbornost místo populismu.',          text: 'Rozhodování na datech. Politika je odpovědnost, ne marketing.' },
        { bold: 'Stát, který funguje.',                text: 'Efektivní, digitální, transparentní. Slouží lidem — ne naopak.' },
        { bold: 'Svoboda a&nbsp;odpovědnost patří k&nbsp;sobě.',text: 'Tvoříme místo stěžování. Jednáme místo čekání.' },
      ],
      link_manifest: 'Manifest osobní odpovědnosti →',
      link_zasady:   'Zásady manifestu →',
      form_title:    'Podepsat manifest',
      form_subtitle: 'Vyplňte jméno a&nbsp;e-mail. Po odeslání dostanete potvrzení s&nbsp;plným textem obou manifestů.',
      label_name:    'Jméno a&nbsp;příjmení',
      label_email:   'E-mailová adresa',
      btn_submit:    'Podepsat manifest',
      counter_label: 'lidí již podepsalo',
      success_title: 'podpis přijat.',
      success_text:  'Děkujeme. Na váš e-mail jsme odeslali potvrzení s&nbsp;plným textem obou manifestů.<br><br>Jste součástí vlny.',
    },

    // ─── FOOTER ─────────────────────────────────────────────────
    footer: {
      copyright: '© 2026 Nová vlna',
      links: [
        { label: 'Zásady',   href: 'index.html#zasady'   },
        { label: 'Manifest', href: 'manifest.html'        },
        { label: 'O&nbsp;nás',    href: 'index.html#o-nas'     },
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
      subtitle:     'We believe the Czech Republic can be confident, strong, and respected.<span class="sub-2">Social change begins with each of us.</span>',
      btn_primary:  'Join us',
      btn_secondary:'Principles',
    },

    // ─── QUOTE ──────────────────────────────────────────────────
    quote: {
      text:   '"Nová vlna stems from the belief that social change begins with each of&nbsp;us."',
      source: 'Nová vlna · Manifesto of Personal Responsibility',
      btn:    'Read',
    },

    // ─── PRINCIPLES ─────────────────────────────────────────────
    zasady: {
      label:    'What we stand for',
      title:    'Manifesto<br>principles.',
      items: [
        { num: '01', title: 'Responsibility as foundation', text: 'A strong state does not begin with institutions. It begins with people. We believe in a society where people take responsibility for their lives, rules apply equally to everyone, and one person\'s freedom ends where another\'s begins.' },
        { num: '02', title: 'Expertise over populism', text: 'The future cannot be governed by impressions. Decisions must be based on data and key roles must be held by experts. Politics is responsibility, not marketing.' },
        { num: '03', title: 'A state that works', text: 'We want a state that is efficient, digital, and transparent. We push for an audit and modernisation of public administration so that it serves people — not the other way around.' },
        { num: '04', title: 'Technology as a tool of progress', text: 'Digitalisation is essential for a functioning state. It reduces bureaucracy, increases efficiency — and it must be secure.' },
        { num: '05', title: 'Education as the foundation of tomorrow', text: 'We want an education system that develops critical thinking, prepares people for the future, and fosters responsibility and initiative.' },
        { num: '06', title: 'A healthy and strong society', text: 'Investing in health is investing in the future. Accessible healthcare, an emphasis on prevention, and long-term sustainability of the system.' },
        { num: '07', title: 'Energy without gambling', text: 'Energy security is essential. We support renewable sources, nuclear energy, and our own infrastructure. Until full stability is guaranteed, we also keep traditional sources and ensure a smooth transition. We modernise without gambling.' },
        { num: '08', title: 'A sensible approach to climate', text: 'We want to protect the environment without weakening the economy. Pragmatic solutions, support for innovation, and a balance between ecology and growth.' },
        { num: '09', title: 'Security and defence', text: 'Security is the foundation of stability. Adequate defence spending, a modern military, cybersecurity, and an active role in Europe and NATO.' },
        { num: '10', title: 'Strategic independence', text: 'Independence means preparedness. Our own resources, backup solutions, resilience against outages. When a crisis comes, the state keeps working.' },
        { num: '11', title: 'An economy that creates value', text: 'We support entrepreneurship and innovation, a flexible working environment, and the development of Czech know-how. We want an economy that grows and creates value.' },
        { num: '12', title: 'Strong Europe, strong Czech Republic', text: 'We want to be an active and influential player in the EU, harmonise systems within Europe and NATO, and strengthen the European economy. The world is multipolar — we want to be part of it.' },
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
      label:  'Why we do it?',
      title:  'Society = politics',
      text_1: 'Nová vlna is not a political party. It is a social shift. Here you will find a set of values and principles we can agree on as a society — ones that anyone can follow, including political parties.',
      text_2: 'How do we understand pragmatism? Values that describe a trustworthy society; consistency and readability create an environment for partners. We want to be a responsible partner who does not bluff and does not cheat. We build on civil society.',
      text_3: 'It is about the health of society. We take responsibility into our own hands and grow step by step — five percent a year is more sustainable than rapid change that provokes a backlash. We stand against populism. What matters to us is long-term progress, not short-term gain.',
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
          title: 'Creating also means being part of something.',
          paragraphs: [
            'Creating is a natural part of human freedom. When we create, we take responsibility for the future.',
            'To create does not mean merely to make something. To create also means to be part of something. We all create society and contribute to the whole, whatever our profession or place in society.',
            "Society exists only because of people who choose to be part of it. That is why creating is not just about making things — it is about participation, about the willingness to enter the world and bear one's share of responsibility.",
          ],
        },
        {
          title: 'What we believe.',
          intro: "We build on Václav Havel's tradition of responsibility and civil society. To it we add our own convictions:",
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
          epilogue: [
            'We are not passive observers of the world. We are people who have decided to create. To create things. To create communities. To create society. And to bear responsibility for it.',
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
    _set('[data-c="quote-btn"]',       T.quote.btn);

    _set('[data-c="zasady-label"]',    T.zasady.label);
    _set('[data-c="zasady-title"]',    T.zasady.title);

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
    _set('[data-c="phil-text-3"]', T.philosophy.text_3);
    _set('[data-c="phil-link"]',   T.philosophy.link);

    const philValues = document.querySelector('[data-c="phil-values"]');
    if (philValues) {
      philValues.innerHTML = T.philosophy.values
        .map(v => `<div class="phil-value"><span class="phil-value-num">~</span>${v}</div>`)
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
        const epilogue = (ch.epilogue || []).map(p => `<p class="reveal">${p}</p>`).join('');
        const closing = ch.closing ? `<div class="closing reveal"><p>${ch.closing}</p></div>` : '';
        const intro   = ch.intro   ? `<p class="reveal">${ch.intro}</p>` : '';
        const outro   = ch.outro   ? `<p class="reveal">${ch.outro}</p>` : '';
        const rule    = i < arr.length - 1 ? `<div class="accent-rule reveal"></div>` : '';
        return `
          <h2 class="chapter-title reveal">${ch.title}</h2>
          ${paras}${intro}${vals}${outro}
          ${rule}${actions}${epilogue}${closing}`;
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
