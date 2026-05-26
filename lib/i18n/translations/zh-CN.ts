import type { TranslationDict } from '../types';

const zhCN: TranslationDict = {
  // ── Site chrome ──────────────────────────────────────────────────────────
  'site.name':        'Wyandanch 图书馆',
  'site.tagline':     '开源教育',

  // ── NavBar ───────────────────────────────────────────────────────────────
  'nav.curriculum':   '课程',
  'nav.tracks':       '学习路线',
  'nav.readingQueue': '阅读清单',
  'nav.langToggle':   '语言',

  // ── Home page ────────────────────────────────────────────────────────────
  'home.subtitle':    '开源金融教育',
  'home.tagline':     '从门格尔到机器学习。',
  'home.desc':        '一个免费的结构化课程，从第一原理出发学习投资与量化金融。',
  'home.readingCount':'篇阅读材料，共',
  'home.levelCount':  '个循序渐进的层级。',
  'home.cta.start':   '开始课程',
  'home.cta.browse':  '按路线浏览',
  'home.track.title': '选择您的学习路线',
  'home.track.desc':  '四条通往课程的路径',
  'home.topic.title': '按主题浏览',
  'home.topic.desc':  '按学科领域探索',

  // ── Curriculum page ───────────────────────────────────────────────────────
  'curriculum.title':    '课程',
  'curriculum.subtitle': '8个循序渐进的教育层级，从经济学基础到高级量化方法。',
  'curriculum.item':     '项',
  'curriculum.items':    '项',

  // ── Track page ────────────────────────────────────────────────────────────
  'track.allTracks':    '所有路线',

  // ── Track names ──────────────────────────────────────────────────────────
  'track.fundamental.title':    '基本面投资者',
  'track.fundamental.subtitle': '价值、质量与业务分析',
  'track.fundamental.desc':     '通过定义基本股票分析的经济学基础、投资哲学和估值框架的路径。从史密斯、门格尔和斯蒂格勒开始，汲取巴菲特、费雪和马克斯的智慧，然后应用达摩达兰的估值工具。',
  'track.quantitative.title':   '量化投资者',
  'track.quantitative.subtitle':'模型、因子与系统化策略',
  'track.quantitative.desc':    '从计量经济学基础到因子模型和系统化指数构建，再到高级随机波动率和机器学习。建立严格、数据驱动投资的数学工具包。',
  'track.practitioner.title':   '市场从业者',
  'track.practitioner.subtitle':'执行、工具与市场微观结构',
  'track.practitioner.desc':    '了解市场如何真正运作：商品、衍生品、投资组合管理以及交易的微观结构。理论与实践在价格发现和执行机制中相遇。',
  'track.macro.title':          '宏观思考者',
  'track.macro.subtitle':       '经济学、货币理论与周期',
  'track.macro.desc':           '凯恩斯对比哈耶克、弗里德曼的货币主义、商业周期，以及塑造每个资产类别的经济学基础。在交易之前，先了解驱动市场的宏观力量。',

  // ── Topic names ───────────────────────────────────────────────────────────
  'topic.the-canon.title':            '经典必读',
  'topic.the-canon.desc':             '每位投资者必读的基础文本',
  'topic.quantitative-methods.title': '量化方法',
  'topic.quantitative-methods.desc':  '计量经济学、统计与计算方法',
  'topic.factor-models.title':        '因子模型与投资组合构建',
  'topic.factor-models.desc':         'Alpha 研究、因子评估与系统化策略',
  'topic.markets-and-execution.title':'市场与执行',
  'topic.markets-and-execution.desc': '微观结构、交易、衍生品与商品',
  'topic.economics-and-macro.title':  '经济学与宏观',
  'topic.economics-and-macro.desc':   '经济理论、货币政策与商业周期',

  // ── Topic card ────────────────────────────────────────────────────────────
  'topic.text':  '篇',
  'topic.texts': '篇',

  // ── Level titles (match lib/curriculum.ts) ───────────────────────────────
  'level.1.title': '经济学基础',
  'level.1.desc':  '第一原理：史密斯、门格尔、斯蒂格勒与金融史',
  'level.2.title': '投资哲学',
  'level.2.desc':  '巴菲特、费雪、马克斯、利弗莫尔与德鲁肯米勒的智慧',
  'level.3.title': '宏观与货币理论',
  'level.3.desc':  '凯恩斯、哈耶克、弗里德曼、索罗斯与市场心理学',
  'level.4.title': '估值',
  'level.4.desc':  '内在价值、相对价值与达摩达兰工具箱',
  'level.5.title': '量化基础',
  'level.5.desc':  '金融所需的数学、统计与计量经济学',
  'level.6.title': '策略与实施',
  'level.6.desc':  '从 alpha 研究到系统化投资组合构建',
  'level.7.title': '市场与金融工具',
  'level.7.desc':  '商品、衍生品与生产级系统',
  'level.8.title': '高级专题',
  'level.8.desc':  '微观结构、随机波动率与机器学习',

  // ── Article layout ────────────────────────────────────────────────────────
  'article.level':       '层级',
  'article.keyConcepts': '核心概念',
  'article.prev':        '上一篇',
  'article.next':        '下一篇',
  'article.comingSoon':  '内容即将推出。此阅读材料是Wyandanch图书馆课程的一部分。',

  // ── Breadcrumb ────────────────────────────────────────────────────────────
  'breadcrumb.home':       '首页',
  'breadcrumb.curriculum': '课程',

  // ── Reading Queue ─────────────────────────────────────────────────────────
  'queue.title':       '阅读清单',
  'queue.subtitle':    '待办：我们计划加入课程的书籍和论文。',
  'queue.panel.title': '即将推出',
  'queue.panel.desc':  '图书馆的未来新增内容',
  'queue.badge':       '即将推出',
  'queue.0.title': '证券分析',
  'queue.0.author': '本杰明·格雷厄姆与大卫·多德',
  'queue.1.title': '聪明的投资者',
  'queue.1.author': '本杰明·格雷厄姆',
  'queue.2.title': '安全边际',
  'queue.2.author': '塞思·卡拉曼',
  'queue.3.title': '股市天才',
  'queue.3.author': '乔尔·格林布拉特',
  'queue.4.title': '金融炼金术',
  'queue.4.author': '乔治·索罗斯',
  'queue.5.title': '随机漫步的傻瓜',
  'queue.5.author': '纳西姆·尼古拉斯·塔勒布',
  'queue.6.title': '天才失败时',
  'queue.6.author': '罗杰·洛温斯坦',
  'queue.7.title': '征服市场的人',
  'queue.7.author': '格里高利·祖克曼',

  'article.track.fundamental':   '基本面',
  'article.track.quantitative':  '量化',
  'article.track.practitioner':  '实务',
  'article.track.macro':         '宏观',

  // ── Footer ────────────────────────────────────────────────────────────────
  'footer.text': '开源教育',

  // ── Theme toggle ──────────────────────────────────────────────────────────
  'theme.toDark':  '切换至深色模式',
  'theme.toLight': '切换至浅色模式',
};

export default zhCN;
