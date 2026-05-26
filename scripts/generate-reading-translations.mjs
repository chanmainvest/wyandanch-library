/**
 * Generates lib/i18n/translations/readings/zh-*.ts from curriculum metadata.
 * Run: node scripts/generate-reading-translations.mjs
 */
import fs from 'fs';
import path from 'path';

const curriculumPath = path.join('lib', 'curriculum.ts');
const src = fs.readFileSync(curriculumPath, 'utf8');

/** @type {{ slug: string, title: string, author: string, desc: string, concepts: string[] }[]} */
const items = [];
const itemBlocks = src.matchAll(
  /\{\s*slug: '([^']+)'[\s\S]*?title: '([^']+)'[\s\S]*?author: '([^']+)'[\s\S]*?description:\s*\n\s*'((?:[^'\\]|\\.)*)'[\s\S]*?keyConcepts: \[([\s\S]*?)\]/g
);
for (const m of itemBlocks) {
  const concepts = [...m[5].matchAll(/'((?:[^'\\]|\\.)*)'/g)].map((c) =>
    c[1].replace(/\\'/g, "'")
  );
  items.push({
    slug: m[1],
    title: m[2],
    author: m[3].replace(/\\'/g, "'"),
    desc: m[4].replace(/\\'/g, "'"),
    concepts,
  });
}

// Simplified Chinese (zh-CN)
const cn = {
  'menger-principles-of-economics': {
    title: '国民经济学原理',
    desc: '奥地利学派的奠基之作。门格尔从主观价值、边际效用和货币起源等第一原理构建经济理论。',
    concepts: ['主观价值理论', '边际效用', '货币起源', '高阶与低阶财货'],
  },
  'stigler-theory-of-price': {
    title: '价格理论',
    desc: '芝加哥学派大师对价格理论的严谨阐述：供给、需求、成本与市场结构。',
    concepts: ['价格理论', '供给与需求', '成本曲线', '市场结构', '完全竞争'],
  },
  'smith-wealth-of-nations': {
    title: '国富论',
    desc: '现代经济学奠基之作：分工、看不见的手、自由贸易、资本积累与竞争市场的自我调节。',
    concepts: ['分工', '看不见的手', '自由贸易', '自然价格与市场价格', '资本积累', '重商主义批判'],
  },
  'business-history-of-finance': {
    title: '金融商业史',
    desc: '金融机构如何演化以服务（有时也利用）实体经济，是理解现代市场的必要背景。',
    concepts: ['金融史', '公司治理', '资本市场演化', '代理问题'],
  },
  'buffett-shareholder-letters': {
    title: '伯克希尔股东信',
    desc: '现代最伟大投资者数十年关于资本配置、企业质量与长期思维的积累。',
    concepts: ['资本配置', '护城河', '所有者盈余', '能力圈', '市场先生'],
  },
  'fisher-common-stocks': {
    title: '怎样选择成长股',
    desc: '费雪的“小道消息”调研法与评估成长公司的十五要点，是巴菲特思想的重要另一半。',
    concepts: ['小道消息法', '十五要点', '成长投资', '管理层质量'],
  },
  'marks-oaktree-memos': {
    title: '橡树资本备忘录',
    desc: '霍华德·马克斯论风险、周期与第二层思维，是理解市场心理与逆向投资的必读材料。',
    concepts: ['第二层思维', '风险评估', '市场周期', '逆向投资', '钟摆效应'],
  },
  'livermore-reminiscences': {
    title: '股票作手回忆录',
    desc: '以小说笔法写就的利弗莫尔传记：投机、群众心理与看盘艺术的不朽教训。',
    concepts: ['投机心理', '看盘', '仓位管理', '择时', '群体行为'],
  },
  'druckenmiller-principles': {
    title: '德鲁肯米勒：实践中的原则',
    desc: '当代最伟大宏观交易者之一的思想综合：集中、流动性、好球区与高度灵活。',
    concepts: ['集中优于分散', '流动性是核心驱动', '好球区仓位', '自上而下宏观框架', '思想灵活性'],
  },
  'graham-value-investing': {
    title: '证券分析与聪明的投资者',
    desc: '价值投资之父：安全边际、内在价值、市场先生，以及投资与投机的区分。',
    concepts: ['安全边际', '内在价值', '市场先生', '投资与投机', '净-net投资'],
  },
  'engines-that-move-markets': {
    title: '推动市场的引擎',
    desc: '技术驱动投资潮起潮落的反复模式：铁路、无线电、汽车、电子与互联网。',
    concepts: ['技术采用S曲线', '创新繁荣-萧条周期', '资本错配', '变革性与渐进性创新', '技术革命中的投资者心理'],
  },
  'lynch-one-up-on-wall-street': {
    title: '彼得·林奇的成功投资',
    desc: '传奇基金经理谈合理价格成长、股票分类、十倍股，以及散户为何能战胜机构。',
    concepts: ['GARP', '十倍股', '股票分类', '投资你所了解的', '散户优势', 'PEG比率'],
  },
  'tudor-jones-principles': {
    title: '保罗·都铎·琼斯：宏观交易的艺术',
    desc: '宏观交易史上最伟大的风险管理者的思想：防守优先、200日均线、不对称回报与1987年崩盘交易。',
    concepts: ['防守优于进攻', '200日移动平均线', '不对称风险回报', '看盘', '1987崩盘交易', '亏损加仓'],
  },
  'schwager-market-wizards': {
    title: '金融怪杰',
    desc: '施瓦格采访20世纪最伟大交易者的共同主线：风险管理、纪律与优势。',
    concepts: ['风险管理纪律', '交易心理', '优势识别', '仓位管理', '止损', '让利润奔跑', '过程重于结果'],
  },
  'taleb-incerto': {
    title: '不确定系列：随机漫步的傻瓜、黑天鹅、反脆弱',
    desc: '塔勒布应对不确定性、肥尾与预测局限的哲学与数学框架。',
    concepts: ['肥尾', '黑天鹅', '反脆弱', '叙事谬误', '利益攸关', '游戏谬误'],
  },
  'keynes-general-theory': {
    title: '就业、利息和货币通论',
    desc: '重塑经济学的巨著：总需求、流动性偏好、乘数，以及市场为何不能总是自我校正。',
    concepts: ['总需求', '流动性偏好', '乘数', '动物精神', '节俭悖论'],
  },
  'hayek-prices-and-production': {
    title: '价格与生产',
    desc: '哈耶克对凯恩斯的回应：信贷扩张如何扭曲生产结构并必然导致萧条。',
    concepts: ['奥地利商业周期理论', '生产结构', '信贷扩张', '错误投资', '自然利率'],
  },
  'soros-reflexivity': {
    title: '金融炼金术与反身性',
    desc: '索罗斯的反身性理论：市场价格与基本面之间的反馈循环造就繁荣-萧条周期。',
    concepts: ['反身性', '反馈循环', '繁荣-萧条', '市场偏见', '量子基金哲学'],
  },
  'behavioral-finance': {
    title: '行为金融学：卡尼曼、特沃斯基及之后',
    desc: '市场行为的心理基础：前景理论、损失厌恶、锚定、过度自信等系统性偏差。',
    concepts: ['前景理论', '损失厌恶', '锚定', '过度自信', '行为偏差', '错误定价'],
  },
  'friedman-monetary-theory': {
    title: '货币主义：弗里德曼与施瓦茨',
    desc: '货币主义反革命：货币数量论、永久收入假说与对大萧条的重新解释。',
    concepts: ['货币数量论', '永久收入', '自然失业率', '货币规则', '大萧条再审视'],
  },
  'damodaran-little-book-valuation': {
    title: '估值小册',
    desc: '达摩达兰将估值提炼为内在价值、相对价值，以及连接数字与叙事的故事。',
    concepts: ['内在价值', '相对价值', 'DCF', '叙事估值', '增长与风险'],
  },
  'growth-investing-principles': {
    title: '成长投资：原则与框架',
    desc: '成长投资框架综合：TAM、单位经济、S曲线、颠覆理论、PEG、40法则与复利识别。',
    concepts: ['TAM分析', '单位经济', 'S曲线', '颠覆理论', 'PEG', '40法则', '复利企业'],
  },
  'technical-analysis': {
    title: '技术分析：价格行为、形态与指标',
    desc: '完整技术工具箱：道氏理论、图表形态、K线、均线、RSI、MACD、布林带、成交量等。',
    concepts: ['道氏理论', '图表形态', 'K线', '移动平均线', 'RSI', 'MACD', '成交量分析'],
  },
  'quant-foundations': {
    title: '量化基础',
    desc: '量化金融的数学与统计基础：线性代数、概率、优化及其在投资组合理论中的应用。',
    concepts: ['线性代数', '概率论', '优化', '马科维茨', '统计推断'],
  },
  'econometrics-and-fx': {
    title: '计量经济学与外汇',
    desc: '面向外汇市场的应用计量经济学：回归、时间序列与宏观金融研究工具。',
    concepts: ['回归分析', '时间序列', '外汇', '宏观金融', '实证方法'],
  },
  'garch-101': {
    title: 'GARCH 入门',
    desc: 'GARCH模型用于波动率估计与预测：波动率聚集及其对风险管理的重要性。',
    concepts: ['GARCH', '波动率聚集', '条件异方差', '波动率预测', '风险管理'],
  },
  'portfolio-construction': {
    title: '投资组合构建',
    desc: '从马科维茨均值-方差到风险平价与实施约束的现代组合构建。',
    concepts: ['均值-方差', '有效前沿', '风险平价', '再平衡', '实施约束'],
  },
  'theory-to-application': {
    title: '从理论到应用',
    desc: '连接学术金融理论与实务组合构建，将研究洞见转化为可执行策略。',
    concepts: ['理论-实践鸿沟', '策略实施', '回测', '交易成本', '研究流程'],
  },
  'systematic-indices': {
    title: '系统化指数',
    desc: '系统化、规则驱动指数的设计与构建：因子倾斜、再平衡机制与聪明贝塔兴起。',
    concepts: ['规则化指数', '因子倾斜', '再平衡', '聪明贝塔', '指数设计'],
  },
  'gappy-lecture-1-alpha-research': {
    title: 'Gappy 讲座 1：Alpha 研究',
    desc: '系统化投资三部曲之一：如何产生、检验与验证量化 alpha 信号。',
    concepts: ['Alpha信号', '回测', '过拟合', '信号验证', '研究流程'],
  },
  'gappy-lecture-2-factor-models': {
    title: 'Gappy 讲座 2：因子模型',
    desc: '解释与预测收益的因子模型：从 Fama-French 到现代多因子框架。',
    concepts: ['Fama-French', '多因子模型', '风险因子', '因子暴露', '横截面收益'],
  },
  'gappy-lecture-3-factor-evaluation': {
    title: 'Gappy 讲座 3：因子评估',
    desc: '如何评估因子是否真实、稳健且可投资：统计检验、经济逻辑与实施考量。',
    concepts: ['因子稳健性', '样本外检验', '经济逻辑', '实施成本', '因子拥挤'],
  },
  'physical-financial-commodities': {
    title: '实物与金融商品',
    desc: '实物商品市场与金融衍生品的交汇：供应链、仓储、期限结构与商品金融化。',
    concepts: ['商品供应链', '仓储', '期限结构', '商品衍生品', '金融化'],
  },
  'model-implementation': {
    title: '模型实现',
    desc: '将量化模型从原型推向生产：软件工程实践、数值方法与交易系统工程。',
    concepts: ['生产化', '数值方法', '代码质量', '回测基础设施', '交易系统'],
  },
  'derivative-portfolio-management': {
    title: '衍生品投资组合管理',
    desc: '管理衍生品组合：希腊字母、对冲策略与期权簿实务挑战。',
    concepts: ['Delta', 'Gamma', 'Vega', '对冲', '期权簿管理'],
  },
  'fixed-income-fundamentals': {
    title: '固定收益基础',
    desc: '债券、收益率曲线、久期、凸性与利率交易——全球最大资产类别。',
    concepts: ['债券定价', '收益率曲线', '久期', '凸性', '信用利差'],
  },
  'market-microstructure-trading': {
    title: '市场微观结构与交易',
    desc: '订单如何变成成交：微观结构、订单簿动态、信息不对称与做市经济学。',
    concepts: ['订单簿', '做市', '信息不对称', '市场冲击', '执行成本'],
  },
  'stochastic-volatility-models': {
    title: '随机波动率模型',
    desc: '超越Black-Scholes：波动率本身为随机过程。Heston、SABR与现代衍生品校准挑战。',
    concepts: ['Heston模型', 'SABR', '随机波动率', '隐含波动率曲面', '校准'],
  },
  'differential-machine-learning': {
    title: '微分机器学习',
    desc: '结合自动微分与神经网络为衍生品定价与对冲，融合机器学习与量化金融。',
    concepts: ['自动微分', '神经网络', '衍生品定价', '对冲', '深度学习'],
  },
  'quasi-random-number-generation': {
    title: '拟随机数生成',
    desc: '蒙特卡洛模拟的低差异序列：Sobol、Halton及高维积分中拟随机优于伪随机的原因。',
    concepts: ['Sobol序列', 'Halton序列', '低差异', '蒙特卡洛收敛', '拟蒙特卡洛'],
  },
};

// Traditional Chinese (zh-TW / zh-HK) — same content, traditional glyphs
const tw = Object.fromEntries(
  Object.entries(cn).map(([k, v]) => [
    k,
    {
      ...v,
      title: v.title
        .replace(/国/g, '國')
        .replace(/学/g, '學')
        .replace(/论/g, '論')
        .replace(/经/g, '經')
        .replace(/济/g, '濟')
        .replace(/门/g, '門')
        .replace(/尔/g, '爾')
        .replace(/现/g, '現')
        .replace(/础/g, '礎')
        .replace(/构/g, '構')
        .replace(/应/g, '應')
        .replace(/质/g, '質')
        .replace(/险/g, '險')
        .replace(/读/g, '讀')
        .replace(/术/g, '術')
        .replace(/历/g, '歷')
        .replace(/忆/g, '憶')
        .replace(/录/g, '錄')
        .replace(/选/g, '選')
        .replace(/长/g, '長')
        .replace(/价/g, '價')
        .replace(/动/g, '動')
        .replace(/机/g, '機')
        .replace(/汇/g, '匯')
        .replace(/总/g, '總')
        .replace(/产/g, '產')
        .replace(/业/g, '業')
        .replace(/为/g, '為')
        .replace(/与/g, '與')
        .replace(/书/g, '書')
        .replace(/灵/g, '靈')
        .replace(/见/g, '見')
        .replace(/贸/g, '貿')
        .replace(/积/g, '積')
        .replace(/竞/g, '競')
        .replace(/调/g, '調')
        .replace(/监/g, '監')
        .replace(/护/g, '護')
        .replace(/营/g, '營')
        .replace(/余/g, '餘')
        .replace(/围/g, '圍')
        .replace(/场/g, '場')
        .replace(/钟/g, '鐘')
        .replace(/摆/g, '擺')
        .replace(/众/g, '眾')
        .replace(/盘/g, '盤')
        .replace(/损/g, '損')
        .replace(/润/g, '潤')
        .replace(/让/g, '讓')
        .replace(/过/g, '過')
        .replace(/拟/g, '擬')
        .replace(/随/g, '隨')
        .replace(/鹅/g, '鵝')
        .replace(/炼/g, '煉')
        .replace(/术/g, '術')
        .replace(/就业/g, '就業')
        .replace(/货币/g, '貨幣')
        .replace(/通论/g, '通論')
        .replace(/动/g, '動')
        .replace(/俭/g, '儉')
        .replace(/胀/g, '脹')
        .replace(/炼/g, '煉')
        .replace(/循环/g, '循環')
        .replace(/偏见/g, '偏見')
        .replace(/量子/g, '量子')
        .replace(/行为/g, '行為')
        .replace(/损失/g, '損失')
        .replace(/锚定/g, '錨定')
        .replace(/定价/g, '定價')
        .replace(/错误/g, '錯誤')
        .replace(/货币主义/g, '貨幣主義')
        .replace(/萧条/g, '蕭條')
        .replace(/估值/g, '估值')
        .replace(/叙事/g, '敘事')
        .replace(/增长/g, '增長')
        .replace(/颠覆/g, '顛覆')
        .replace(/复利/g, '複利')
        .replace(/技术/g, '技術')
        .replace(/指标/g, '指標')
        .replace(/线/g, '線')
        .replace(/优化/g, '優化')
        .replace(/组合/g, '組合')
        .replace(/构建/g, '構建')
        .replace(/理论/g, '理論')
        .replace(/实践/g, '實踐')
        .replace(/指数/g, '指數')
        .replace(/聪明/g, '聰明')
        .replace(/贝塔/g, '貝塔')
        .replace(/检验/g, '檢驗')
        .replace(/拟合/g, '擬合')
        .replace(/暴露/g, '暴露')
        .replace(/横截面/g, '橫截面')
        .replace(/样本/g, '樣本')
        .replace(/逻辑/g, '邏輯')
        .replace(/实施/g, '實施')
        .replace(/拥挤/g, '擁擠')
        .replace(/仓储/g, '倉儲')
        .replace(/结构/g, '結構')
        .replace(/实现/g, '實現')
        .replace(/代码/g, '代碼')
        .replace(/回测/g, '回測')
        .replace(/希腊/g, '希臘')
        .replace(/对冲/g, '對沖')
        .replace(/期权/g, '期權')
        .replace(/债券/g, '債券')
        .replace(/收益率/g, '收益率')
        .replace(/久期/g, '久期')
        .replace(/凸性/g, '凸性')
        .replace(/信用/g, '信用')
        .replace(/微观/g, '微觀')
        .replace(/订单/g, '訂單')
        .replace(/冲击/g, '衝擊')
        .replace(/执行/g, '執行')
        .replace(/波动/g, '波動')
        .replace(/隐含/g, '隱含')
        .replace(/曲面/g, '曲面')
        .replace(/校准/g, '校準')
        .replace(/微分/g, '微分')
        .replace(/网络/g, '網絡')
        .replace(/学习/g, '學習')
        .replace(/深度/g, '深度')
        .replace(/拟随机/g, '擬隨機')
        .replace(/收敛/g, '收斂')
        .replace(/蒙特卡洛/g, '蒙特卡洛'),
      desc: v.desc
        .replace(/国/g, '國')
        .replace(/学/g, '學')
        .replace(/论/g, '論')
        .replace(/经/g, '經')
        .replace(/济/g, '濟')
        .replace(/门/g, '門')
        .replace(/尔/g, '爾')
        .replace(/现/g, '現')
        .replace(/础/g, '礎')
        .replace(/构/g, '構')
        .replace(/应/g, '應')
        .replace(/质/g, '質')
        .replace(/险/g, '險')
        .replace(/读/g, '讀')
        .replace(/术/g, '術')
        .replace(/历/g, '歷')
        .replace(/忆/g, '憶')
        .replace(/录/g, '錄')
        .replace(/选/g, '選')
        .replace(/长/g, '長')
        .replace(/价/g, '價')
        .replace(/动/g, '動')
        .replace(/机/g, '機')
        .replace(/汇/g, '匯')
        .replace(/总/g, '總')
        .replace(/产/g, '產')
        .replace(/业/g, '業')
        .replace(/为/g, '為')
        .replace(/与/g, '與')
        .replace(/书/g, '書')
        .replace(/灵/g, '靈')
        .replace(/见/g, '見')
        .replace(/贸/g, '貿')
        .replace(/积/g, '積')
        .replace(/竞/g, '競')
        .replace(/调/g, '調')
        .replace(/监/g, '監')
        .replace(/护/g, '護')
        .replace(/营/g, '營')
        .replace(/余/g, '餘')
        .replace(/围/g, '圍')
        .replace(/场/g, '場')
        .replace(/钟/g, '鐘')
        .replace(/摆/g, '擺')
        .replace(/众/g, '眾')
        .replace(/盘/g, '盤')
        .replace(/损/g, '損')
        .replace(/润/g, '潤')
        .replace(/让/g, '讓')
        .replace(/过/g, '過')
        .replace(/拟/g, '擬')
        .replace(/随/g, '隨')
        .replace(/鹅/g, '鵝')
        .replace(/炼/g, '煉')
        .replace(/行为/g, '行為')
        .replace(/货币/g, '貨幣')
        .replace(/萧条/g, '蕭條')
        .replace(/增长/g, '增長')
        .replace(/技术/g, '技術')
        .replace(/组合/g, '組合')
        .replace(/构建/g, '構建')
        .replace(/理论/g, '理論')
        .replace(/实践/g, '實踐')
        .replace(/指数/g, '指數')
        .replace(/检验/g, '檢驗')
        .replace(/逻辑/g, '邏輯')
        .replace(/实施/g, '實施')
        .replace(/结构/g, '結構')
        .replace(/实现/g, '實現')
        .replace(/对冲/g, '對沖')
        .replace(/期权/g, '期權')
        .replace(/债券/g, '債券')
        .replace(/微观/g, '微觀')
        .replace(/订单/g, '訂單')
        .replace(/波动/g, '波動')
        .replace(/隐含/g, '隱含')
        .replace(/网络/g, '網絡')
        .replace(/学习/g, '學習')
        .replace(/拟随机/g, '擬隨機'),
      concepts: v.concepts.map((c) =>
        c
          .replace(/国/g, '國')
          .replace(/学/g, '學')
          .replace(/论/g, '論')
          .replace(/经/g, '經')
          .replace(/济/g, '濟')
          .replace(/价/g, '價')
          .replace(/动/g, '動')
          .replace(/场/g, '場')
          .replace(/险/g, '險')
          .replace(/损/g, '損')
          .replace(/润/g, '潤')
          .replace(/过/g, '過')
          .replace(/拟/g, '擬')
          .replace(/随/g, '隨')
          .replace(/鹅/g, '鵝')
          .replace(/炼/g, '煉')
          .replace(/行为/g, '行為')
          .replace(/货币/g, '貨幣')
          .replace(/增长/g, '增長')
          .replace(/技术/g, '技術')
          .replace(/组合/g, '組合')
          .replace(/构建/g, '構建')
          .replace(/理论/g, '理論')
          .replace(/实践/g, '實踐')
          .replace(/检验/g, '檢驗')
          .replace(/逻辑/g, '邏輯')
          .replace(/实施/g, '實施')
          .replace(/结构/g, '結構')
          .replace(/实现/g, '實現')
          .replace(/对冲/g, '對沖')
          .replace(/期权/g, '期權')
          .replace(/债券/g, '債券')
          .replace(/微观/g, '微觀')
          .replace(/订单/g, '訂單')
          .replace(/波动/g, '波動')
          .replace(/隐含/g, '隱含')
          .replace(/网络/g, '網絡')
          .replace(/学习/g, '學習')
          .replace(/拟随机/g, '擬隨機')
      ),
    },
  ])
);

function buildDict(localeMap) {
  const dict = {};
  for (const item of items) {
    const tr = localeMap[item.slug];
    if (!tr) continue;
    dict[`reading.${item.slug}.title`] = tr.title;
    dict[`reading.${item.slug}.desc`] = tr.desc;
    tr.concepts.forEach((c, i) => {
      dict[`reading.${item.slug}.concept.${i}`] = c;
    });
  }
  return dict;
}

function emitFile(filename, varName, dict) {
  const lines = Object.entries(dict)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `  '${k}': ${JSON.stringify(v)},`);
  const content = `import type { TranslationDict } from '../../types';

/** Auto-generated by scripts/generate-reading-translations.mjs — do not edit by hand. */
const ${varName}: TranslationDict = {
${lines.join('\n')}
};

export default ${varName};
`;
  const out = path.join('lib', 'i18n', 'translations', 'readings', filename);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, content);
  console.log('Wrote', out, Object.keys(dict).length, 'keys');
}

emitFile('zh-CN.ts', 'readingsZhCN', buildDict(cn));
emitFile('zh-TW.ts', 'readingsZhTW', buildDict(tw));
emitFile('zh-HK.ts', 'readingsZhHK', buildDict(tw));
console.log('Parsed', items.length, 'curriculum items');
