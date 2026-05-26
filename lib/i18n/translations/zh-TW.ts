import type { TranslationDict } from '../types';

// Taiwan Traditional Chinese — shares most content with zh-HK but uses
// Taiwan-specific finance vocabulary:
// 選擇權 (options) vs 期權, 報酬 (return) vs 回報, 股票 (same),
// 共同基金 vs 互惠基金, 交易所 (same), 匯率 (same), 槓桿 (same)

const zhTW: TranslationDict = {
  // ── Site chrome ──────────────────────────────────────────────────────────
  'site.name':        'Wyandanch 圖書館',
  'site.tagline':     '開源教育',

  // ── NavBar ───────────────────────────────────────────────────────────────
  'nav.curriculum':   '課程',
  'nav.tracks':       '學習路線',
  'nav.readingQueue': '閱讀清單',
  'nav.langToggle':   '語言',

  // ── Home page ────────────────────────────────────────────────────────────
  'home.subtitle':    '開源金融教育',
  'home.tagline':     '從孟格爾到機器學習。',
  'home.desc':        '一個免費的結構化課程，從第一原理出發學習投資與量化金融。',
  'home.readingCount':'篇閱讀材料，共',
  'home.levelCount':  '個循序漸進的層級。',
  'home.cta.start':   '開始課程',
  'home.cta.browse':  '依路線瀏覽',
  'home.track.title': '選擇您的學習路線',
  'home.track.desc':  '四條通往課程的路徑',
  'home.topic.title': '依主題瀏覽',
  'home.topic.desc':  '依學科領域探索',

  // ── Curriculum page ───────────────────────────────────────────────────────
  'curriculum.title':    '課程',
  'curriculum.subtitle': '8個循序漸進的教育層級，從經濟學基礎到高級量化方法。',
  'curriculum.item':     '項',
  'curriculum.items':    '項',

  // ── Track page ────────────────────────────────────────────────────────────
  'track.allTracks':    '所有路線',

  // ── Track names ──────────────────────────────────────────────────────────
  'track.fundamental.title':    '基本面投資者',
  'track.fundamental.subtitle': '價值、品質與業務分析',
  'track.fundamental.desc':     '通過定義基本股票分析的經濟學基礎、投資哲學和估值框架的路徑。從史密斯、孟格爾和斯蒂格勒開始，汲取巴菲特、費雪和馬克斯的智慧，然後應用達摩達蘭的估值工具。',
  'track.quantitative.title':   '量化投資者',
  'track.quantitative.subtitle':'模型、因子與系統化策略',
  'track.quantitative.desc':    '從計量經濟學基礎到因子模型和系統化指數建構，再到高級隨機波動率和機器學習。建立嚴謹、數據驅動投資的數學工具包。',
  'track.practitioner.title':   '市場從業者',
  'track.practitioner.subtitle':'執行、工具與市場微觀結構',
  'track.practitioner.desc':    '了解市場如何真正運作：商品、衍生性金融商品、投資組合管理以及交易的微觀結構。理論與實務在價格發現和執行機制中相遇。',
  'track.macro.title':          '宏觀思考者',
  'track.macro.subtitle':       '經濟學、貨幣理論與景氣循環',
  'track.macro.desc':           '凱恩斯對比海耶克、弗里德曼的貨幣主義、景氣循環，以及塑造每個資產類別的經濟學基礎。在交易之前，先了解驅動市場的宏觀力量。',

  // ── Topic names ───────────────────────────────────────────────────────────
  'topic.the-canon.title':            '經典必讀',
  'topic.the-canon.desc':             '每位投資者必讀的基礎文本',
  'topic.quantitative-methods.title': '量化方法',
  'topic.quantitative-methods.desc':  '計量經濟學、統計與計算方法',
  'topic.factor-models.title':        '因子模型與投資組合建構',
  'topic.factor-models.desc':         'Alpha 研究、因子評估與系統化策略',
  'topic.markets-and-execution.title':'市場與執行',
  'topic.markets-and-execution.desc': '微觀結構、交易、衍生性商品與商品',
  'topic.economics-and-macro.title':  '經濟學與宏觀',
  'topic.economics-and-macro.desc':   '經濟理論、貨幣政策與商業週期',

  // ── Topic card ────────────────────────────────────────────────────────────
  'topic.text':  '篇',
  'topic.texts': '篇',

  // ── Level titles (match lib/curriculum.ts) ───────────────────────────────
  'level.1.title': '經濟學基礎',
  'level.1.desc':  '第一原理：史密斯、孟格爾、斯蒂格勒與金融史',
  'level.2.title': '投資哲學',
  'level.2.desc':  '巴菲特、費雪、馬克斯、利弗莫爾與杜肯米勒的智慧',
  'level.3.title': '宏觀與貨幣理論',
  'level.3.desc':  '凱恩斯、海耶克、弗里德曼、索羅斯與市場心理學',
  'level.4.title': '估值',
  'level.4.desc':  '內在價值、相對價值與達摩達蘭工具箱',
  'level.5.title': '量化基礎',
  'level.5.desc':  '金融所需的數學、統計與計量經濟學',
  'level.6.title': '策略與實施',
  'level.6.desc':  '從 alpha 研究到系統化投資組合建構',
  'level.7.title': '市場與金融工具',
  'level.7.desc':  '商品、衍生性商品與生產級系統',
  'level.8.title': '高級專題',
  'level.8.desc':  '微觀結構、隨機波動率與機器學習',

  // ── Article layout ────────────────────────────────────────────────────────
  'article.level':       '層級',
  'article.keyConcepts': '核心概念',
  'article.prev':        '上一篇',
  'article.next':        '下一篇',
  'article.comingSoon':  '內容即將推出。此閱讀材料是Wyandanch圖書館課程的一部分。',

  // ── Breadcrumb ────────────────────────────────────────────────────────────
  'breadcrumb.home':       '首頁',
  'breadcrumb.curriculum': '課程',

  // ── Reading Queue ─────────────────────────────────────────────────────────
  'queue.title':       '閱讀清單',
  'queue.subtitle':    '待辦：我們計劃加入課程的書籍和論文。',
  'queue.panel.title': '即將推出',
  'queue.panel.desc':  '圖書館的未來新增內容',
  'queue.badge':       '即將推出',
  'queue.0.title': '證券分析',
  'queue.0.author': '班傑明·葛拉漢與大衛·多德',
  'queue.1.title': '智慧型投資人',
  'queue.1.author': '班傑明·葛拉漢',
  'queue.2.title': '安全邊際',
  'queue.2.author': '塞斯·卡拉曼',
  'queue.3.title': '你也可以成為股市天才',
  'queue.3.author': '喬爾·格林布拉特',
  'queue.4.title': '金融煉金術',
  'queue.4.author': '喬治·索羅斯',
  'queue.5.title': '隨機漫步的傻瓜',
  'queue.5.author': '納西姆·尼古拉斯·塔雷布',
  'queue.6.title': '當天才失敗時',
  'queue.6.author': '羅傑·洛溫斯坦',
  'queue.7.title': '征服市場的人',
  'queue.7.author': '格里高利·祖克曼',

  'article.track.fundamental':   '基本面',
  'article.track.quantitative':  '量化',
  'article.track.practitioner':  '實務',
  'article.track.macro':         '宏觀',

  // ── Footer ────────────────────────────────────────────────────────────────
  'footer.text': '開源教育',

  // ── Theme toggle ──────────────────────────────────────────────────────────
  'theme.toDark':  '切換至深色模式',
  'theme.toLight': '切換至淺色模式',
};

export default zhTW;
