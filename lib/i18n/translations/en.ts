import type { TranslationDict } from '../types';

const en: TranslationDict = {
  // ── Site chrome ──────────────────────────────────────────────────────────
  'site.name':        'Wyandanch Library',
  'site.tagline':     'Open Source Education',

  // ── NavBar ───────────────────────────────────────────────────────────────
  'nav.curriculum':   'Curriculum',
  'nav.tracks':       'Tracks',
  'nav.readingQueue': 'Reading Queue',
  'nav.langToggle':   'Language',

  // ── Home page ────────────────────────────────────────────────────────────
  'home.subtitle':    'Open Source Finance Education',
  'home.tagline':     'From Menger to machine learning.',
  'home.desc':        'A free, structured curriculum for learning investing and quantitative finance from first principles.',
  'home.readingCount':'readings across',
  'home.levelCount':  'progressive levels.',
  'home.cta.start':   'Start the Curriculum',
  'home.cta.browse':  'Browse by Track',
  'home.track.title': 'Choose Your Track',
  'home.track.desc':  'Four paths through the curriculum',
  'home.topic.title': 'Browse by Topic',
  'home.topic.desc':  'Explore by subject area',

  // ── Curriculum page ───────────────────────────────────────────────────────
  'curriculum.title':    'Curriculum',
  'curriculum.subtitle': '8 levels of progressive education, from economic foundations to advanced quantitative methods.',
  'curriculum.item':     'item',
  'curriculum.items':    'items',

  // ── Track page ────────────────────────────────────────────────────────────
  'track.allTracks':    'All Tracks',

  // ── Track names ──────────────────────────────────────────────────────────
  'track.fundamental.title':    'The Fundamental Investor',
  'track.fundamental.subtitle': 'Value, quality, and business analysis',
  'track.fundamental.desc':     "A path through the economic foundations, investing philosophy, and valuation frameworks that define fundamental equity analysis. Start with Smith, Menger, and Stigler, absorb the wisdom of Buffett, Fisher, and Marks, then apply Damodaran's valuation toolkit.",
  'track.quantitative.title':   'The Quantitative Investor',
  'track.quantitative.subtitle':'Models, factors, and systematic strategies',
  'track.quantitative.desc':    'From econometric foundations through factor models and systematic index construction to advanced stochastic volatility and machine learning. Build the mathematical toolkit for rigorous, data-driven investing.',
  'track.practitioner.title':   'The Market Practitioner',
  'track.practitioner.subtitle':'Execution, instruments, and microstructure',
  'track.practitioner.desc':    'Learn how markets actually work: commodities, derivatives, portfolio management, and the microstructure of trading. Theory meets practice in the mechanics of price discovery and execution.',
  'track.macro.title':          'The Macro Thinker',
  'track.macro.subtitle':       'Economics, monetary theory, and cycles',
  'track.macro.desc':           "Keynes vs. Hayek, Friedman's monetarism, business cycles, and the economic foundations that shape every asset class. Understand the macro forces that move markets before you trade them.",

  // ── Topic names ───────────────────────────────────────────────────────────
  'topic.the-canon.title':            'The Canon',
  'topic.the-canon.desc':             'Essential texts every investor should read',
  'topic.quantitative-methods.title': 'Quantitative Methods',
  'topic.quantitative-methods.desc':  'Econometrics, statistics, and computational techniques',
  'topic.factor-models.title':        'Factor Models & Portfolio Construction',
  'topic.factor-models.desc':         'Alpha research, factor evaluation, and systematic strategies',
  'topic.markets-and-execution.title':'Markets & Execution',
  'topic.markets-and-execution.desc': 'Microstructure, trading, derivatives, and commodities',
  'topic.economics-and-macro.title':  'Economics & Macro',
  'topic.economics-and-macro.desc':   'Economic theory, monetary policy, and business cycles',

  // ── Topic card ────────────────────────────────────────────────────────────
  'topic.text':  'text',
  'topic.texts': 'texts',

  // ── Level titles (match lib/curriculum.ts) ───────────────────────────────
  'level.1.title': 'Economic Foundations',
  'level.1.desc':  'First principles: Smith, Menger, Stigler, and the history of finance',
  'level.2.title': 'Investing Philosophy',
  'level.2.desc':  'The wisdom of Buffett, Fisher, Marks, Livermore, and Druckenmiller',
  'level.3.title': 'Macro & Monetary Theory',
  'level.3.desc':  'Keynes, Hayek, Friedman, Soros, and the psychology of markets',
  'level.4.title': 'Valuation',
  'level.4.desc':  'Intrinsic value, relative value, and Damodaran\'s toolkit',
  'level.5.title': 'Quantitative Foundations',
  'level.5.desc':  'Math, statistics, and econometrics for finance',
  'level.6.title': 'Strategy & Implementation',
  'level.6.desc':  'From alpha research to systematic portfolio construction',
  'level.7.title': 'Markets & Instruments',
  'level.7.desc':  'Commodities, derivatives, and production-grade systems',
  'level.8.title': 'Advanced Topics',
  'level.8.desc':  'Microstructure, stochastic vol, and machine learning',

  // ── Article layout ────────────────────────────────────────────────────────
  'article.level':       'Level',
  'article.keyConcepts': 'Key Concepts',
  'article.prev':        'Previous',
  'article.next':        'Next',
  'article.comingSoon':  'Content coming soon. This reading is part of the Wyandanch Library curriculum.',

  // ── Breadcrumb ────────────────────────────────────────────────────────────
  'breadcrumb.home':       'Home',
  'breadcrumb.curriculum': 'Curriculum',

  // ── Reading Queue ─────────────────────────────────────────────────────────
  'queue.title':       'Reading Queue',
  'queue.subtitle':    'On deck: books and papers we plan to add to the curriculum.',
  'queue.panel.title': 'Coming Soon',
  'queue.panel.desc':  'Future additions to the library',
  'queue.badge':       'Coming Soon',
  'queue.0.title': 'Security Analysis',
  'queue.0.author': 'Benjamin Graham & David Dodd',
  'queue.1.title': 'The Intelligent Investor',
  'queue.1.author': 'Benjamin Graham',
  'queue.2.title': 'Margin of Safety',
  'queue.2.author': 'Seth Klarman',
  'queue.3.title': 'You Can Be a Stock Market Genius',
  'queue.3.author': 'Joel Greenblatt',
  'queue.4.title': 'The Alchemy of Finance',
  'queue.4.author': 'George Soros',
  'queue.5.title': 'Fooled by Randomness',
  'queue.5.author': 'Nassim Nicholas Taleb',
  'queue.6.title': 'When Genius Failed',
  'queue.6.author': 'Roger Lowenstein',
  'queue.7.title': 'The Man Who Solved the Market',
  'queue.7.author': 'Gregory Zuckerman',

  // ── Article track links ───────────────────────────────────────────────────
  'article.track.fundamental':   'Fundamental',
  'article.track.quantitative':  'Quantitative',
  'article.track.practitioner':  'Practitioner',
  'article.track.macro':         'Macro',

  // ── Footer ────────────────────────────────────────────────────────────────
  'footer.text': 'Open Source Education',

  // ── Theme toggle ──────────────────────────────────────────────────────────
  'theme.toDark':  'Switch to dark mode',
  'theme.toLight': 'Switch to light mode',
};

export default en;
