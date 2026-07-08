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
      zasady:   'Společnost a stát',
      o_nas:    'Proč to děláme',
      proc:     'Manifest',
      podepsat: 'Podepsat',
    },

    // ─── HERO ───────────────────────────────────────────────────
    hero: {
      eyebrow:      'Občanský manifest · Česká republika · 2026',
      subtitle:     'Nová vlna je občansko-politické hnutí postavené na odpovědnosti, funkčním státu a&nbsp;sebevědomé České republice v&nbsp;Evropě.<span class="sub-2">Změna společnosti začíná u&nbsp;každého z&nbsp;nás.</span>',
      btn_primary:  'Připojte se',
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
      label:    'Jak vidíme stát',
      title:    'My tvoříme společnost,<br>společnost definuje stát.',
      items: [
        { num: '01', title: 'Odpovědnost jako základ', text: 'Silný stát nezačíná institucemi. Začíná u&nbsp;lidí. Věříme ve společnost, kde lidé přebírají odpovědnost za svůj život, pravidla platí pro všechny stejně a&nbsp;svoboda jednotlivce končí tam, kde začíná omezovat svobodu druhého — jak rozvíjí <a href="manifest.html" class="pi-link">Manifest osobní odpovědnosti</a>.' },
        { num: '02', title: 'Věcnost místo dojmů', text: 'Budoucnost nelze řídit emocemi, dojmy ani krátkodobým marketingem. Chceme rozhodování založené na datech, odbornosti a&nbsp;odpovědnosti — se schopností vidět důsledky vlastních rozhodnutí. Politika má být služba veřejnosti, ne soutěž o&nbsp;nejhlasitější slogan.' },
        { num: '03', title: 'Stát, který funguje', text: 'Chceme stát, který je efektivní, digitální a&nbsp;transparentní. Prosazujeme audit a&nbsp;modernizaci státní správy tak, aby sloužila lidem — ne naopak.' },
        { num: '04', title: 'Technologie, které slouží lidem', text: 'Chceme kvalitní digitalizaci. Digitalizace je klíčová pro fungující stát. Snižuje byrokracii, zvyšuje efektivitu — a&nbsp;musí být bezpečná. AI a&nbsp;sociální sítě musí sloužit společnosti, ne ji rozdělovat. Chceme technologie, které posilují svobodnou debatu, chrání soukromí a&nbsp;pomáhají lidem i&nbsp;institucím rozhodovat se lépe.' },
        { num: '05', title: 'Vzdělání jako základ budoucnosti', text: 'Chceme vzdělávací systém, který rozvíjí kritické myšlení, připravuje na budoucnost a&nbsp;vede k&nbsp;odpovědnosti a&nbsp;iniciativě.' },
        { num: '06', title: 'Zdravá a&nbsp;silná společnost', text: 'Investice do zdraví je investice do budoucnosti. Dostupné zdravotnictví, důraz na prevenci a&nbsp;dlouhodobá udržitelnost systému.' },
        { num: '07', title: 'Energetika bez hazardu', text: 'Energetická bezpečnost je klíčová. Podporujeme obnovitelné zdroje, jadernou energii a&nbsp;vlastní infrastrukturu. Dokud nemáme jistotu plné stability, zůstáváme i&nbsp;u&nbsp;tradičních zdrojů a&nbsp;zajišťujeme plynulý přechod. Modernizujeme bez hazardu.' },
        { num: '08', title: 'Rozumný přístup ke klimatu', text: 'Chceme chránit životní prostředí bez oslabení ekonomiky. Pragmatická řešení, podpora inovací a&nbsp;rovnováha mezi ekologií a&nbsp;růstem.' },
        { num: '09', title: 'Bezpečnost a&nbsp;obrana', text: 'Bezpečnost je základ stability. Dostatečné investice do obrany, moderní armáda, kybernetická bezpečnost a&nbsp;aktivní role v&nbsp;Evropě a&nbsp;NATO.' },
        { num: '10', title: 'Strategická nezávislost', text: 'Nezávislost znamená připravenost. Vlastní zdroje, záložní řešení, odolnost proti výpadkům. Klíčovou roli hraje energetika — snížení závislosti na dovozu fosilních paliv z&nbsp;nás dělá společnost méně závislou na ostatních mocnostech a&nbsp;méně vydíratelnou. Když přijde krize, stát funguje.' },
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
      title:  'Je to o&nbsp;nás.',
      text_1: 'Nová vlna není politická strana. Je to společenský posun. Je to soubor hodnot a&nbsp;principů, na kterých se jako společnost můžeme shodnout a&nbsp;kterými se může řídit kdokoli, včetně politických stran.',
      text_2: 'Jak chápeme pragmatismus? Jsou to hodnoty popisující důvěryhodnou společnost; konzistence a&nbsp;čitelnost vytvářejí prostředí pro partnery. Chceme být odpovědný partner, který nemlží a&nbsp;nepodvádí. Stavíme na občanské společnosti.',
      text_3: 'Jde o&nbsp;zdraví společnosti. Bereme odpovědnost do vlastních rukou. Změna musí být postupná, měřitelná a&nbsp;společensky zvládnutelná — nechceme revoluci přes noc, ale každoroční viditelný posun, který lidé dokážou přijmout a&nbsp;stát dokáže realizovat. Je pro nás důležitý dlouhodobý pokrok, ne krátkodobý zisk.',
      text_4: 'Nehledáme shodu všech. Hledáme shodu těch, kteří věří v&nbsp;odpovědnost, právní stát, bezpečnost a&nbsp;schopnost České republiky obstát v&nbsp;měnícím se světě. Konsenzus pro nás neznamená prázdný střed — znamená odvahu pojmenovat témata, na kterých se odpovědní lidé napříč společností mohou shodnout.',
      link:   'Číst Manifest osobní odpovědnosti',
      values: [
        'Myšlenky a&nbsp;činy mají sílu měnit realitu',
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
      label:        'Připojte se',
      title:        'Připojte se<br>k&nbsp;Nové vlně.',
      subtitle:     'Budoucnost nevzniká sama. Vzniká rozhodnutími, která děláme dnes. Pokud věříte, že Česká republika může být odpovědnější, funkčnější, bezpečnější a&nbsp;sebevědomější země, připojte se k&nbsp;Manifestu Nové vlny.<br><br>Nejde o&nbsp;vstup do politické strany — jde o&nbsp;přihlášení se k&nbsp;hodnotám, na kterých může stát silnější společnost.',
      btn_contact:  'Kontaktujte nás',
      btn_sign:     'Podepsat',
      btn_manifest: 'Manifest',
    },

    // ─── PETICE (SEKCE NA HLAVNÍ STRÁNCE) ───────────────────────
    petition: {
      label:         'Podepište manifest',
      title:         'Souhlasíte?<br>Podepište.',
      text:          'Pokud sdílíte přesvědčení, že změna společnosti začíná u&nbsp;každého z&nbsp;nás — podepište tento manifest. Váš podpis není závazkem k&nbsp;politické straně. Je prohlášením osobní odpovědnosti.',
      btn:           'Podepsat',
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
          paragraphs: [
            'Nová vlna vychází z&nbsp;přesvědčení, že změna společnosti nezačíná u&nbsp;institucí, ale u&nbsp;každého z&nbsp;nás.',
            'Stát je odrazem společnosti. A&nbsp;společnost je tvořena jednotlivci. Pokud chceme silnější stát, musíme začít u&nbsp;odpovědnějšího člověka.',
            'Tento manifest je filozofickým základem Nové vlny.',
          ],
        },
        {
          title: '1. Člověk jako tvůrce světa',
          paragraphs: [
            'Každý člověk svými rozhodnutími spoluvytváří svět kolem sebe.',
            'Není jen pasivním pozorovatelem politiky, ekonomiky nebo společnosti. Je jejich součástí. Každý postoj, každé rozhodnutí i&nbsp;každá nečinnost mají důsledky.',
            'Odpovědnost začíná ve chvíli, kdy si člověk přestane říkat, že se ho věci netýkají.',
          ],
        },
        {
          title: '2. Svoboda a odpovědnost',
          paragraphs: [
            'Svoboda není samozřejmost. A&nbsp;není to jen právo dělat si, co chceme.',
            'Skutečná svoboda vyžaduje odpovědnost. Vůči sobě, vůči druhým lidem i&nbsp;vůči společnosti, ve které žijeme.',
            'Svoboda bez odpovědnosti se mění v&nbsp;chaos. Odpovědnost bez svobody se mění v&nbsp;poslušnost.',
            'Věříme ve společnost, kde člověk může žít svobodně, ale zároveň chápe, že jeho svoboda se dotýká druhých. Svoboda jednotlivce končí tam, kde začíná omezovat svobodu druhého.',
          ],
        },
        {
          title: '3. Tvoření znamená být součástí',
          paragraphs: [
            'Tvoření je přirozenou součástí lidské svobody. Když tvoříme, přebíráme odpovědnost za budoucnost.',
            'Tvořit neznamená pouze něco vytvořit. Tvořit znamená také být součástí. Všichni tvoříme společnost a&nbsp;podílíme se na celku, ať už máme jakékoli povolání nebo místo ve společnosti.',
            'Společnost existuje jen díky lidem, kteří se rozhodnou být její součástí. Proto tvoření není jen o&nbsp;vytváření věcí — je o&nbsp;účasti, o&nbsp;ochotě vstoupit do světa a&nbsp;nést svůj díl odpovědnosti.',
          ],
          epilogue: [
            'Tvořit věci. Tvořit komunity. Tvořit společnost.',
            'Tvoření není výsadou vyvolených. Je to rozhodnutí.',
          ],
        },
        {
          title: '4. Pravda, důvěra a občanská společnost',
          paragraphs: [
            'Silná společnost stojí na důvěře. Důvěra ale nevzniká z&nbsp;marketingu, sloganů ani prázdných slibů. Vzniká z&nbsp;pravdivosti, transparentnosti a&nbsp;schopnosti nést odpovědnost za vlastní jednání.',
            'Občanská společnost není jen soubor organizací. Je to postoj. Ochota zajímat se o&nbsp;svět kolem sebe, vstupovat do veřejného prostoru a&nbsp;podílet se na prostředí, ve kterém chceme žít.',
            'Demokracie není jednou za několik let odevzdaný hlas. Je to každodenní způsob, jakým se chováme ke svobodě, přírodě, pravidlům a&nbsp;druhým lidem.',
          ],
        },
        {
          title: '5. Od pasivity k činu',
          paragraphs: [
            'Pasivita je pohodlná. Ale společnost, která si zvykne čekat, že všechno vyřeší někdo jiný, postupně ztrácí schopnost rozhodovat o&nbsp;své budoucnosti.',
            'Nová vlna vzniká jako výzva k&nbsp;aktivitě.',
          ],
          actions: [
            'Nečekat.',
            'Tvořit.',
            'Převzít odpovědnost — za sebe, za své okolí, za stát.',
          ],
          epilogue: [
            'Ne každý musí vstoupit do politiky. Ale každý může přestat být lhostejný.',
          ],
        },
        {
          title: '6. Silný stát začíná u zodpovědného člověka',
          paragraphs: [
            'Nechceme stát, který nahrazuje občana. Chceme stát, který vytváří férové a&nbsp;funkční prostředí pro zodpovědné lidi.',
            'Silný stát není ten, který rozhoduje za člověka. Silný stát je ten, který lidem umožňuje růst, tvořit, nést odpovědnost a&nbsp;podílet se na budoucnosti země.',
            'Proto Nová vlna nezačíná pouze politickým programem. Začíná jednoduchým přesvědčením:',
          ],
          closing: 'Silný stát začíná zodpovědným člověkem.',
        },
        {
          title: 'Čemu věříme',
          values: [
            'Zodpovědnost není slabost. Je to základ dospělé svobody.',
            'Občanská společnost není překážkou státu. Je jeho nejdůležitějším základem.',
            'Změna nezačíná tím, že čekáme na nové politiky. Začíná tím, že sami přestaneme žít pasivně.',
            'Budoucnost nevzniká sama. Vzniká rozhodnutími, která děláme dnes.',
          ],
        },
        {
          title: 'Osobní odpovědnost jako začátek Nové vlny',
          paragraphs: [
            'Nová vlna je občansko-politické hnutí, které převádí tuto filozofii do veřejného prostoru. Manifest osobní odpovědnosti je její vnitřní základ. Manifest Nové vlny je jeho společenské a&nbsp;politické pokračování.',
          ],
          epilogue: [
            'Nejdřív člověk.',
            'Potom společnost.',
            'Potom stát.',
            'Tak vzniká skutečná změna.',
          ],
        },
      ],
      sidebar_label: 'Odkud vychází nová vlna',
      sidebar_text:  'Tento manifest je základem Nové vlny. Začínáme sami u&nbsp;sebe, všímáme si svého okolí a&nbsp;našeho vlivu na něj.',
      sidebar_link:  'Zpět na hlavní stránku',
      sidebar_quote: '„Nová vlna vychází z&nbsp;přesvědčení, že změna společnosti začíná u&nbsp;každého z&nbsp;nás."',
      cta_title:     'Svoboda znamená přijmout odpovědnost.',
      cta_btn:       'Podepsat manifest',
    },

    // ─── STRÁNKA PODPISU ────────────────────────────────────────
    petition_page: {
      title:         'Podepište Manifest<br>Nové vlny',
      intro:         'Podpisem nevstupujete do politické strany ani nepřebíráte právní závazek. Vyjadřujete souhlas s&nbsp;hodnotami Nové vlny a&nbsp;s&nbsp;myšlenkou, že silný stát začíná zodpovědným člověkem.<br><br>Tento podpis je symbolickým přihlášením se k&nbsp;odpovědnosti, právnímu státu, funkční veřejné správě, bezpečnosti a&nbsp;sebevědomé České republice v&nbsp;Evropě.',
      excerpt_label: 'Klíčové body manifestu',
      excerpt_items: [
        { bold: 'Odpovědnost jako základ.',            text: 'Silný stát nezačíná institucemi. Začíná u&nbsp;lidí. Pravidla platí pro všechny stejně.' },
        { bold: 'Věcnost místo dojmů.',                 text: 'Rozhodování na datech. Politika je služba veřejnosti, ne marketing.' },
        { bold: 'Stát, který funguje.',                text: 'Efektivní, digitální, transparentní. Slouží lidem — ne naopak.' },
        { bold: 'Svoboda a&nbsp;zodpovědnost patří k&nbsp;sobě.',text: 'Tvoříme místo stěžování. Jednáme místo čekání.' },
      ],
      link_manifest: 'Manifest osobní odpovědnosti →',
      link_zasady:   'Jak vidíme stát →',
      form_title:    'Podepsat manifest',
      form_subtitle: 'Vyplňte jméno, e-mail a&nbsp;státní příslušnost. Po odeslání dostanete potvrzení s&nbsp;plným textem obou manifestů.',
      label_name:    'Jméno a příjmení',
      label_nationality: 'Státní příslušnost',
      label_profession: 'Povolání',
      label_email:   'E-mailová adresa',
      news_text:     'Souhlasím se zasíláním informativních e-mailů o&nbsp;Nové vlně. Souhlas mohu kdykoli odvolat.',
      btn_submit:    'Podepsat manifest',
      counter_label: 'lidí již podepsalo',
      success_title: 'podpis přijat.',
      success_text:  'Děkujeme. Na váš e-mail jsme odeslali potvrzení s&nbsp;plným textem obou manifestů.<br><br>Jste součástí vlny.',
    },

    // ─── PRVNÍ SIGNATÁŘI ────────────────────────────────────────
    signatories: {
      label: 'První signatáři',
      title: 'Lidé, které spojuje<br>odpovědnost.',
      text:  'Nová vlna vzniká jako otevřený občansko-politický koncept. První signatáři budou postupně doplňováni. Cílem je propojit lidi z&nbsp;různých oblastí — odborníky, podnikatele, občansky aktivní lidi, tvůrce, pedagogy, lékaře i&nbsp;technologické experty — které spojuje odpovědnost vůči budoucnosti České republiky.',
      items: [
        // { name: 'Jana Nováková', role: 'lékařka, Praha', quote: 'Podepisuji, protože…', photo: '' },
      ],
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
      zasady:   'Society and the state',
      o_nas:    'Why we do it',
      proc:     'Manifesto',
      podepsat: 'Sign',
    },

    // ─── HERO ───────────────────────────────────────────────────
    hero: {
      eyebrow:      'Civic Manifesto · Czech Republic · 2026',
      subtitle:     'Nová vlna is a civic-political movement built on responsibility, a functioning state, and a confident Czech Republic in Europe.<span class="sub-2">Social change begins with each of us.</span>',
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
      label:    'How we see the state',
      title:    'We create society,<br>society defines the state.',
      items: [
        { num: '01', title: 'Responsibility as foundation', text: 'A strong state does not begin with institutions. It begins with people. We believe in a society where people take responsibility for their lives, rules apply equally to everyone, and an individual\'s freedom ends where it begins to limit the freedom of another — as developed in <a href="manifest.html" class="pi-link">the Manifesto of Personal Responsibility</a>.' },
        { num: '02', title: 'Substance over impressions', text: 'The future cannot be governed by emotions, impressions, or short-term marketing. We want decision-making based on data, expertise, and responsibility — with the ability to see the consequences of one\'s own decisions. Politics should be a public service, not a contest for the loudest slogan.' },
        { num: '03', title: 'A state that works', text: 'We want a state that is efficient, digital, and transparent. We push for an audit and modernisation of public administration so that it serves people — not the other way around.' },
        { num: '04', title: 'Technology that serves people', text: 'We want high-quality digitalisation. Digitalisation is essential for a functioning state. It reduces bureaucracy, increases efficiency — and it must be secure. AI and social media must serve society, not divide it. We want technologies that strengthen free debate, protect privacy, and help people and institutions make better decisions.' },
        { num: '05', title: 'Education as the foundation of tomorrow', text: 'We want an education system that develops critical thinking, prepares people for the future, and fosters responsibility and initiative.' },
        { num: '06', title: 'A healthy and strong society', text: 'Investing in health is investing in the future. Accessible healthcare, an emphasis on prevention, and long-term sustainability of the system.' },
        { num: '07', title: 'Energy without gambling', text: 'Energy security is essential. We support renewable sources, nuclear energy, and our own infrastructure. Until full stability is guaranteed, we also keep traditional sources and ensure a smooth transition. We modernise without gambling.' },
        { num: '08', title: 'A sensible approach to climate', text: 'We want to protect the environment without weakening the economy. Pragmatic solutions, support for innovation, and a balance between ecology and growth.' },
        { num: '09', title: 'Security and defence', text: 'Security is the foundation of stability. Adequate defence spending, a modern military, cybersecurity, and an active role in Europe and NATO.' },
        { num: '10', title: 'Strategic independence', text: 'Independence means preparedness. Our own resources, backup solutions, resilience against outages. Energy plays a key role — reducing our dependence on imported fossil fuels makes us less dependent on other powers and less open to blackmail. When a crisis comes, the state keeps working.' },
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
      title:  'It\'s about us.',
      text_1: 'Nová vlna is not a political party. It is a social shift. It is a set of values and principles we can agree on as a society — ones that anyone can follow, including political parties.',
      text_2: 'How do we understand pragmatism? Values that describe a trustworthy society; consistency and readability create an environment for partners. We want to be a responsible partner who does not bluff and does not cheat. We build on civil society.',
      text_3: 'It is about the health of society. We take responsibility into our own hands. Change must be gradual, measurable, and socially manageable — we do not want an overnight revolution, but a visible step forward every year that people can accept and the state can deliver. What matters to us is long-term progress, not short-term gain.',
      text_4: 'We are not looking for everyone to agree. We seek agreement among those who believe in responsibility, the rule of law, security, and the Czech Republic\'s ability to stand its ground in a changing world. For us, consensus does not mean an empty centre — it means the courage to name the issues that responsible people across society can agree on.',
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
      title:        'Join<br>Nová vlna.',
      subtitle:     'The future does not happen by itself. It is shaped by the decisions we make today. If you believe the Czech Republic can be a more responsible, functional, secure, and confident country, join the Nová vlna Manifesto.<br><br>This is not about joining a political party — it is about committing to values a stronger society can stand on.',
      btn_contact:  'Contact us',
      btn_sign:     'Sign',
      btn_manifest: 'Manifest',
    },

    // ─── PETITION (HOMEPAGE SECTION) ────────────────────────────
    petition: {
      label:         'Sign the manifesto',
      title:         'Do you agree?<br>Sign.',
      text:          'If you share the belief that social change begins with each of us — sign this manifesto. Your signature is not a commitment to a political party. It is a declaration of personal responsibility.',
      btn:           'Sign',
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
          paragraphs: [
            'Nová vlna stems from the belief that social change does not begin with institutions, but with each of us.',
            'The state is a reflection of society. And society is made of individuals. If we want a stronger state, we must start with a more responsible person.',
            'This manifesto is the philosophical foundation of Nová vlna.',
          ],
        },
        {
          title: '1. The human being as creator of the world',
          paragraphs: [
            'Every person co-creates the world around them through their decisions.',
            'We are not passive observers of politics, the economy, or society. We are part of them. Every attitude, every decision, and every inaction has consequences.',
            'Responsibility begins the moment a person stops telling themselves that things do not concern them.',
          ],
        },
        {
          title: '2. Freedom and responsibility',
          paragraphs: [
            'Freedom is not a given. And it is not merely the right to do whatever we want.',
            'True freedom requires responsibility. Towards ourselves, towards others, and towards the society we live in.',
            'Freedom without responsibility turns into chaos. Responsibility without freedom turns into obedience.',
            'We believe in a society where people can live freely while understanding that their freedom touches others. An individual\'s freedom ends where it begins to limit the freedom of another.',
          ],
        },
        {
          title: '3. Creating means being part of something',
          paragraphs: [
            'Creating is a natural part of human freedom. When we create, we take responsibility for the future.',
            'To create does not mean merely to make something. To create also means to be part of something. We all create society and contribute to the whole, whatever our profession or place in society.',
            'Society exists only because of people who choose to be part of it. That is why creating is not just about making things — it is about participation, about the willingness to enter the world and bear one\'s share of responsibility.',
          ],
          epilogue: [
            'To create things. To create communities. To create society.',
            'Creating is not the privilege of the few. It is a decision.',
          ],
        },
        {
          title: '4. Truth, trust, and civil society',
          paragraphs: [
            'A strong society is built on trust. Trust does not come from marketing, slogans, or empty promises. It comes from truthfulness, transparency, and the ability to take responsibility for one\'s own actions.',
            'Civil society is not just a set of organisations. It is an attitude. A willingness to care about the world around us, to enter the public space, and to help shape the environment we want to live in.',
            'Democracy is not a vote cast once every few years. It is the everyday way we treat freedom, nature, rules, and other people.',
          ],
        },
        {
          title: '5. From passivity to action',
          paragraphs: [
            'Passivity is comfortable. But a society that gets used to waiting for someone else to solve everything gradually loses the ability to decide its own future.',
            'Nová vlna emerges as a call to action.',
          ],
          actions: [
            'Do not wait.',
            'Create.',
            'Take responsibility — for yourself, for your surroundings, for the state.',
          ],
          epilogue: [
            'Not everyone has to enter politics. But everyone can stop being indifferent.',
          ],
        },
        {
          title: '6. A strong state begins with a responsible person',
          paragraphs: [
            'We do not want a state that replaces the citizen. We want a state that creates a fair and functional environment for responsible people.',
            'A strong state is not one that decides for people. A strong state is one that allows people to grow, create, take responsibility, and share in the future of the country.',
            'That is why Nová vlna does not begin merely with a political programme. It begins with a simple conviction:',
          ],
          closing: 'A strong state begins with a responsible person.',
        },
        {
          title: 'What we believe',
          values: [
            'Responsibility is not weakness. It is the foundation of mature freedom.',
            'Civil society is not an obstacle to the state. It is its most important foundation.',
            'Change does not begin with waiting for new politicians. It begins when we ourselves stop living passively.',
            'The future does not happen by itself. It is shaped by the decisions we make today.',
          ],
        },
        {
          title: 'Personal responsibility as the beginning of Nová vlna',
          paragraphs: [
            'Nová vlna is a civic-political movement that brings this philosophy into the public space. The Manifesto of Personal Responsibility is its inner foundation. The Nová vlna Manifesto is its social and political continuation.',
          ],
          epilogue: [
            'First the person.',
            'Then society.',
            'Then the state.',
            'That is how real change happens.',
          ],
        },
      ],
      sidebar_label: 'Where Nová vlna comes from',
      sidebar_text:  'This manifesto is the foundation of Nová vlna. We start with ourselves, paying attention to our surroundings and the impact we have on them.',
      sidebar_link:  'Back to main page',
      sidebar_quote: '"Nová vlna stems from the belief that social change begins with each of us."',
      cta_title:     'Freedom means accepting responsibility.',
      cta_btn:       'Sign the manifesto',
    },

    // ─── PETITION PAGE ──────────────────────────────────────────
    petition_page: {
      title:         'Sign the Nová vlna<br>Manifesto',
      intro:         'By signing you are not joining a political party, nor taking on any legal obligation. You express agreement with the values of Nová vlna and with the idea that a strong state begins with a responsible person.<br><br>This signature is a symbolic commitment to responsibility, the rule of law, a functioning public administration, security, and a confident Czech Republic in Europe.',
      excerpt_label: 'Key points of the manifesto',
      excerpt_items: [
        { bold: 'Responsibility as foundation.',           text: 'A strong state does not begin with institutions. It begins with people. Rules apply equally to all.' },
        { bold: 'Substance over impressions.',             text: 'Data-driven decision making. Politics is a public service, not marketing.' },
        { bold: 'A state that works.',                     text: 'Efficient, digital, transparent. It serves people — not the other way around.' },
        { bold: 'Freedom and responsibility belong together.', text: 'We create instead of complaining. We act instead of waiting.' },
      ],
      link_manifest: 'Manifesto of Personal Responsibility →',
      link_zasady:   'How we see the state →',
      form_title:    'Sign the manifesto',
      form_subtitle: 'Enter your name, email, and nationality. After submitting you will receive a confirmation with the full text of both manifestos.',
      label_name:    'Full name',
      label_nationality: 'Nationality',
      label_profession: 'Occupation',
      label_email:   'Email address',
      news_text:     'I agree to receive informational emails about Nová vlna. I can withdraw this consent at any time.',
      btn_submit:    'Sign the manifesto',
      counter_label: 'people have already signed',
      success_title: 'signature received.',
      success_text:  'Thank you. We have sent a confirmation to your email with the full text of both manifestos.<br><br>You are part of the wave.',
    },

    // ─── FIRST SIGNATORIES ──────────────────────────────────────
    signatories: {
      label: 'First signatories',
      title: 'People united<br>by responsibility.',
      text:  'Nová vlna is emerging as an open civic-political concept. The first signatories will be added gradually. The aim is to connect people from different fields — experts, entrepreneurs, civically active people, creators, teachers, doctors, and technology professionals — united by responsibility for the future of the Czech Republic.',
      items: [],
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
    _set('[data-c="phil-text-4"]', T.philosophy.text_4);
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
    _set('[data-c="join-btn-sign"]',     T.join.btn_sign);
    _set('[data-c="join-btn-manifest"]', T.join.btn_manifest);

    _set('[data-c="sig-label"]', T.signatories.label);
    _set('[data-c="sig-title"]', T.signatories.title);
    _set('[data-c="sig-text"]',  T.signatories.text);
    const sigGrid = document.querySelector('[data-c="sig-items"]');
    if (sigGrid) {
      const items = T.signatories.items || [];
      sigGrid.innerHTML = items.map(p => `
        <div class="sig-card">
          ${p.photo ? `<img class="sig-photo" src="${p.photo}" alt="${p.name}">` : ''}
          <p class="sig-name">${p.name}</p>
          <p class="sig-role">${p.role}</p>
          ${p.quote ? `<p class="sig-quote">„${p.quote}"</p>` : ''}
        </div>`).join('');
      sigGrid.style.display = items.length ? '' : 'none';
    }

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
          ? `<ul class="reveal">${ch.actions.map(a => `<li>${a}</li>`).join('')}</ul>` : '';
        const epilogue = (ch.epilogue || []).map(p => `<p class="reveal epilogue">${p}</p>`).join('');
        const closing = ch.closing ? `<div class="closing reveal"><p>${ch.closing}</p></div>` : '';
        const intro   = ch.intro   ? `<p class="reveal">${ch.intro}</p>` : '';
        const outro   = ch.outro   ? `<p class="reveal">${ch.outro}</p>` : '';
        const rule    = i < arr.length - 1 ? `<div class="accent-rule reveal"></div>` : '';
        const titleH  = ch.title ? `<h2 class="chapter-title reveal">${ch.title}</h2>` : '';
        return `
          ${titleH}
          ${paras}${intro}${vals}${outro}
          ${actions}${epilogue}${closing}${rule}`;
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
    _txt('[data-c="p-label-nationality"]', P.label_nationality);
    _txt('[data-c="p-label-profession"]', P.label_profession);
    _set('[data-c="p-news-text"]',     P.news_text);
    _set('[data-c="p-link-manifest"]', P.link_manifest);
    _set('[data-c="p-link-zasady"]',   P.link_zasady);
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
