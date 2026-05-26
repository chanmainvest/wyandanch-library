import type { TranslationDict } from '../types';

const zhHK: TranslationDict = {
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
  'home.cta.browse':  '按路線瀏覽',
  'home.track.title': '選擇您的學習路線',
  'home.track.desc':  '四條通往課程的路徑',
  'home.topic.title': '按主題瀏覽',
  'home.topic.desc':  '按學科領域探索',

  // ── Curriculum page ───────────────────────────────────────────────────────
  'curriculum.title':    '課程',
  'curriculum.subtitle': '8個循序漸進的教育層級，從經濟學基礎到高級量化方法。',
  'curriculum.item':     '項',
  'curriculum.items':    '項',

  // ── Track page ────────────────────────────────────────────────────────────
  'track.allTracks':    '所有路線',

  // ── Track names ──────────────────────────────────────────────────────────
  'track.fundamental.title':    '基本面投資者',
  'track.fundamental.subtitle': '價值、質量與業務分析',
  'track.fundamental.desc':     '通過定義基本股票分析的經濟學基礎、投資哲學和估值框架的路徑。從史密斯、孟格爾和斯蒂格勒開始，汲取巴菲特、費雪和馬克斯的智慧，然後應用達摩達蘭的估值工具。',
  'track.quantitative.title':   '量化投資者',
  'track.quantitative.subtitle':'模型、因子與系統化策略',
  'track.quantitative.desc':    '從計量經濟學基礎到因子模型和系統化指數構建，再到高級隨機波動率和機器學習。建立嚴格、數據驅動投資的數學工具包。',
  'track.practitioner.title':   '市場從業者',
  'track.practitioner.subtitle':'執行、工具與市場微觀結構',
  'track.practitioner.desc':    '了解市場如何真正運作：商品、衍生工具、投資組合管理以及交易的微觀結構。理論與實踐在價格發現和執行機制中相遇。',
  'track.macro.title':          '宏觀思考者',
  'track.macro.subtitle':       '經濟學、貨幣理論與週期',
  'track.macro.desc':           '凱恩斯對比哈耶克、弗里德曼的貨幣主義、商業週期，以及塑造每個資產類別的經濟學基礎。在交易之前，先了解驅動市場的宏觀力量。',

  // ── Topic names ───────────────────────────────────────────────────────────
  'topic.the-canon.title':            '經典必讀',
  'topic.the-canon.desc':             '每位投資者必讀的基礎文本',
  'topic.quantitative-methods.title': '量化方法',
  'topic.quantitative-methods.desc':  '計量經濟學、統計與計算方法',
  'topic.factor-models.title':        '因子模型與投資組合構建',
  'topic.factor-models.desc':         'Alpha 研究、因子評估與系統化策略',
  'topic.markets-and-execution.title':'市場與執行',
  'topic.markets-and-execution.desc': '微觀結構、交易、衍生工具與商品',
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
  'level.6.desc':  '從 alpha 研究到系統化投資組合構建',
  'level.7.title': '市場與金融工具',
  'level.7.desc':  '商品、衍生工具與生產級系統',
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
  'queue.0.author': '班傑明·格雷厄姆與大衛·多德',
  'queue.1.title': '聰明的投資者',
  'queue.1.author': '班傑明·格雷厄姆',
  'queue.2.title': '安全邊際',
  'queue.2.author': '塞斯·卡拉曼',
  'queue.3.title': '你也可以成為股市天才',
  'queue.3.author': '喬爾·格林布拉特',
  'queue.4.title': '金融煉金術',
  'queue.4.author': '喬治·索羅斯',
  'queue.5.title': '隨機漫步的傻瓜',
  'queue.5.author': '納西姆·尼古拉斯·塔勒布',
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

  // ── Item descriptions ─────────────────────────────────────────────────────
  'item.menger-principles-of-economics.desc':
    '孟格爾《經濟學原理》（1871年）是奧地利學派的奠基之作。主觀價值理論取代了勞動價值論，邊際效用解釋了個人如何在稀缺中選擇，高階商品理論奠定了資本理論基礎，貨幣起源於市場交換而非政府命令。',
  'item.menger-principles-of-economics.concepts':
    '主觀價值|邊際效用|高階商品|價值歸算理論|貨幣自然起源|奧地利學派',
  'item.stigler-theory-of-price.desc':
    '斯蒂格勒的《價格理論》是理解市場如何真正運作的必讀之作。涵蓋供求彈性、競爭性均衡、資訊不對稱，以及「俘獲理論」——監管機構往往為被監管者服務，而非消費者。',
  'item.stigler-theory-of-price.concepts':
    '供求彈性|競爭均衡|資訊不對稱|俘獲理論|監管經濟學|生產者剩餘',
  'item.smith-wealth-of-nations.desc':
    '現代經濟學的奠基文本。史密斯論勞動分工如何創造財富、無形之手協調市場、自由貿易的優越性，以及競爭性市場如何自我調節。每一個投資者都應理解資本積累的根本邏輯。',
  'item.smith-wealth-of-nations.concepts':
    '勞動分工|無形之手|自由貿易|自然價格與市場價格|資本積累|重商主義批判',
  'item.business-history-of-finance.desc':
    '金融機構如何演化以服務——有時也剝削——實體經濟。從荷蘭東印度公司到現代股票市場，企業治理、代理問題與資本市場的進化史，是理解現代市場不可或缺的歷史背景。',
  'item.business-history-of-finance.concepts':
    '金融史|公司治理|資本市場演化|代理問題|金融中介機構|荷蘭東印度公司',
  'item.buffett-shareholder-letters.desc':
    '巴菲特數十年來在資本配置、業務質量和長期思維上積累的智慧。理解護城河、業主盈餘、能力圈，以及為何「合理價格買入優秀企業」優於「超低價格買入普通企業」。',
  'item.buffett-shareholder-letters.concepts':
    '資本配置|經濟護城河|業主盈餘|能力圈|市場先生|長期持有',
  'item.fisher-common-stocks.desc':
    '費雪的「品葡萄酒」法——通過深入訪談管理層、競爭對手和供應商來評估企業——以及評估成長型公司的15個標準。這是影響巴菲特知識體系的另一半，強調管理質量和長期成長潛力。',
  'item.fisher-common-stocks.concepts':
    '品葡萄酒法|評估成長股的15個標準|成長型投資|管理質量|研發投入|忠誠客戶基礎',
  'item.marks-oaktree-memos.desc':
    '霍華德·馬克斯論風險、週期和第二層思維。「第一層思維說這是一家好公司，買入；第二層思維問大家都知道是好公司，是否已反映在價格中？」理解市場心理學和逆向投資的必讀之作。',
  'item.marks-oaktree-memos.concepts':
    '第二層思維|風險評估|市場週期|逆向投資|鐘擺效應|投資機會集',
  'item.livermore-reminiscences.desc':
    '傑西·利弗莫爾的半傳記，由埃德溫·勒菲弗撰寫。涵蓋投機心理學、讀盤藝術、倉位管理，以及「市場總是對的」的哲學。即使在一個世紀後，關於群眾行為和交易紀律的教訓依然深刻。',
  'item.livermore-reminiscences.concepts':
    '投機心理|讀盤藝術|倉位管理|市場時機|群眾行為|止損紀律',
  'item.druckenmiller-principles.desc':
    '德魯肯米勒——他那一代最偉大的宏觀交易員——從未寫過書。本文從三十年的訪談和施瓦格的《新市場奇才》中提煉：集中持倉而非分散、以流動性為主要驅動力、等待「肥厚機會」，以及隨時調整觀點的極度靈活性。',
  'item.druckenmiller-principles.concepts':
    '集中持倉|流動性驅動|肥厚機會倉位|自上而下宏觀框架|認知靈活性|貨幣政策敏感度',
  'item.graham-value-investing.desc':
    '價值投資之父。格雷厄姆的安全邊際框架——以大幅低於內在價值的價格買入——以及「市場先生」比喻，教導投資者如何利用市場情緒而非被其左右。投資與投機的根本區別。',
  'item.graham-value-investing.concepts':
    '安全邊際|內在價值|市場先生|投資與投機|淨淨投資|防禦型與進攻型投資者',
  'item.engines-that-move-markets.desc':
    '技術驅動投資繁榮與蕭條的反復規律：鐵路、無線電、汽車、電子和互聯網。每一次技術革命都遵循相似的資本錯配和財富毀滅模式，為識別下一次技術泡沫提供了歷史框架。',
  'item.engines-that-move-markets.concepts':
    '技術採用S曲線|創新繁榮蕭條週期|資本錯配|變革性與漸進性創新|技術革命中的投資心理',
  'item.lynch-one-up-on-wall-street.desc':
    '彼得·林奇——最偉大的共同基金經理——解釋GARP（合理價格成長）、股票六分類法（快速成長股、緩慢成長股、鐵板釘釘股、困境反彈股、週期股、資產股）、十倍股識別，以及業餘投資者為何能勝過機構。',
  'item.lynch-one-up-on-wall-street.concepts':
    '合理價格成長|十倍股|股票六分類|投資你所了解的|業餘優勢|市盈率增長比率',
  'item.tudor-jones-principles.desc':
    '宏觀交易史上最偉大的風險管理者保羅·都鐸·瓊斯的交易哲學：先防守後進攻、200日移動平均線作為市場健康指標、尋找不對稱的風險回報機會，以及1987年崩盤交易如何預示其整個交易生涯。',
  'item.tudor-jones-principles.concepts':
    '防守優先|200日移動平均線|不對稱風險回報|讀盤|1987年崩盤交易|虧損者繼續補倉是大忌',
  'item.schwager-market-wizards.desc':
    '施瓦格對20世紀最偉大交易者的訪談合集。主觀與系統化、基本面與技術面——所有成功者的共同線索：嚴格的風險管理、清晰定義的交易優勢、倉位紀律，以及將情緒與決策分離的能力。',
  'item.schwager-market-wizards.concepts':
    '風險管理紀律|交易心理|優勢識別|倉位管理|果斷止損|讓利潤奔跑|過程重於結果',
  'item.taleb-incerto.desc':
    '塔勒布應對不確定性、胖尾和預測極限的哲學與數學框架。黑天鵝事件為何被嚴重低估，反脆弱性優於穩健性，以及「切身利益」為何是誠信的終極保證。大多數風險模型在真正需要它們時都會失效。',
  'item.taleb-incerto.concepts':
    '胖尾分佈|黑天鵝|反脆弱性|敘事謬誤|切身利益|盧迪謬誤',
  'item.keynes-general-theory.desc':
    '改變了現代宏觀經濟學的書。凱恩斯論總需求不足導致非自願失業、流動性偏好解釋利率、投資乘數效應，以及市場為何不能自動回到充分就業均衡。現代財政政策的理論基礎。',
  'item.keynes-general-theory.concepts':
    '總需求|流動性偏好|乘數效應|動物精神|節儉悖論|有效需求',
  'item.hayek-prices-and-production.desc':
    '哈耶克對凱恩斯主義的根本反駁：信貸擴張扭曲資本結構，人為壓低利率誘發錯誤投資，繁榮期的誤置資本必然在蕭條期清算。奧地利商業週期理論是理解信貸週期和金融危機的重要框架。',
  'item.hayek-prices-and-production.concepts':
    '奧地利商業週期理論|生產結構|信貸擴張|錯誤投資|自然利率|資本清算',
  'item.soros-reflexivity.desc':
    '索羅斯的反身性理論：市場參與者的認知偏差不僅影響市場價格，還反過來影響基本面本身，形成加速的正反饋迴路，創造繁榮與蕭條週期。這是量子基金套索英格蘭銀行等偉大交易背後的哲學基礎。',
  'item.soros-reflexivity.concepts':
    '反身性|繁榮蕭條週期|認知謬誤|雙向反饋|實時實驗|可謬性',
  'item.behavioral-finance.desc':
    '卡尼曼、特沃斯基和塞勒奠定了行為金融學的心理學基礎。前景理論解釋損失厭惡、錨定效應導致估值偏差、過度自信驅動過度交易，這些系統性認知偏差是市場定價錯誤的持續來源。',
  'item.behavioral-finance.concepts':
    '前景理論|損失厭惡|錨定效應|過度自信|處置效應|羊群行為',
  'item.friedman-monetary-theory.desc':
    '弗里德曼的貨幣主義反革命重新解釋了大蕭條——不是市場失靈，而是美聯儲緊縮貨幣供應導致的。自然失業率概念、永久收入假說和「k%規則」是現代央行政策框架的重要組成部分。',
  'item.friedman-monetary-theory.concepts':
    '貨幣數量理論|自然失業率|永久收入假說|k%規則|通貨膨脹預期|貨幣緊縮與大蕭條',
  'item.damodaran-little-book-valuation.desc':
    '達摩達蘭將估值精煉為核心：內在價值（現金流折現）、相對價值（可比公司），以及將數字敘事聯繫起來的故事。如何評估任何資產——從成長型科技公司到成熟的消費品企業。',
  'item.damodaran-little-book-valuation.concepts':
    '內在估值|相對估值|現金流折現|資本成本|敘事與數字|估值框架',
  'item.growth-investing-principles.desc':
    '成長投資框架的綜合：總可尋址市場分析、單位經濟（LTV/CAC比率）、技術採用S曲線、克里斯坦森的顛覆理論、PEG比率、軟件業的40法則，以及在市場定價之前識別複利增長股的藝術。',
  'item.growth-investing-principles.concepts':
    '總可尋址市場|單位經濟|S曲線|顛覆理論|市盈率增長比率|40法則|識別複利股',
  'item.technical-analysis.desc':
    '完整的技術分析工具包：道氏理論建立趨勢框架，蠟燭圖識別反轉信號，移動平均線確認趨勢，RSI和MACD衡量動量，布林帶衡量波動率，蔡金資金流量追蹤資金流向，以及關於技術分析何時有效的誠實討論。',
  'item.technical-analysis.concepts':
    '道氏理論|圖形形態|蠟燭圖分析|移動平均線|相對強弱指標|MACD|蔡金資金流量|成交量確認|支撐與阻力',
  'item.quant-foundations.desc':
    '量化金融的數學和統計基礎：向量空間與矩陣運算、概率論與隨機過程、凸優化，以及這些工具在現代投資組合理論中的核心應用。這是所有量化策略的數學起點。',
  'item.quant-foundations.concepts':
    '線性代數在金融中的應用|概率論|最優化|投資組合理論基礎',
  'item.econometrics-and-fx.desc':
    '應用計量經濟學，重點關注外匯市場。普通最小二乘回歸、時間序列分析、協整、利率平價理論，以及外匯套利交易的實證研究方法。宏觀金融研究的核心工具。',
  'item.econometrics-and-fx.concepts':
    '時間序列分析|回歸方法|外匯市場動態|利率平價|套利交易',
  'item.garch-101.desc':
    'GARCH模型入門——波動率估計和預測的標準工具。波動率聚集性（大波動之後往往跟著大波動）是金融時間序列最顯著的特徵，ARCH/GARCH框架是風險管理的基礎統計工具。',
  'item.garch-101.concepts':
    '波動率聚集|ARCH/GARCH模型|條件方差|波動率預測',
  'item.portfolio-construction.desc':
    '從馬科維茨有效邊界，到Black-Litterman模型融合觀點與先驗，到風險平價以風險而非資金平衡配置，到Kelly準則最優化倉位規模。如何將信號、信念和約束條件轉化為實際可執行的投資組合配置。',
  'item.portfolio-construction.concepts':
    '有效邊界|均值方差優化|Black-Litterman|風險平價|倉位規模|再平衡',
  'item.theory-to-application.desc':
    '彌合學術金融理論與實際投資組合構建之間的鴻溝。如何估計交易成本的影響、設計嚴格的回測框架、進行樣本外驗證，以及避免過度優化和數據挖掘謬誤。',
  'item.theory-to-application.concepts':
    '策略實施|交易成本|回測框架|樣本外測試',
  'item.systematic-indices.desc':
    '系統化、基於規則的指數的設計與構建：因子傾斜（價值、動量、品質、低波動率）、定期再平衡的市場衝擊、智能貝塔的興起，以及指數設計決策如何影響長期業績。',
  'item.systematic-indices.concepts':
    '指數構建|因子傾斜|再平衡規則|智能貝塔|基準設計',
  'item.gappy-lecture-1-alpha-research.desc':
    'Gappy系統化投資三部曲第一講：如何從量化研究中生成Alpha信號，使用信息係數衡量信號預測力，分析信號衰減（信號在多長時間後失效），以及避免數據挖掘和過度擬合的統計嚴謹性。',
  'item.gappy-lecture-1-alpha-research.concepts':
    'Alpha信號生成|信號測試|信息係數|信號衰減',
  'item.gappy-lecture-2-factor-models.desc':
    'Gappy三部曲第二講：因子模型用於解釋和預測橫截面收益。從Fama-French三因子（市場、規模、價值）到現代多因子框架，理解因子暴露如何驅動投資組合回報和風險分解。',
  'item.gappy-lecture-2-factor-models.concepts':
    'Fama-French因子|因子構建|因子暴露|風險分解',
  'item.gappy-lecture-3-factor-evaluation.desc':
    'Gappy三部曲第三講：如何評估一個因子是否真實、穩健且可投資。統計顯著性測試防止偽發現、經濟理由確保持久性、因子擁擠程度影響容量，以及實施考量決定可行性。',
  'item.gappy-lecture-3-factor-evaluation.concepts':
    '因子穩健性|統計顯著性|經濟理由|因子擁擠',
  'item.physical-financial-commodities.desc':
    '實物商品市場與金融衍生品的交匯點：供應鏈和存儲成本如何決定期貨曲線的正價差與反向市場，商品市場金融化如何改變歷史定價關係，以及如何分析能源、金屬和農產品市場。',
  'item.physical-financial-commodities.concepts':
    '商品市場|期限結構|正價差與反向市場|存儲成本|商品金融化',
  'item.model-implementation.desc':
    '將量化模型從研究原型推進到生產環境：數值穩定性和精度問題、向量化與速度優化、模型驗證框架，以及金融系統的軟件工程最佳實踐。理論模型與生產系統之間的差距往往是最大的風險來源。',
  'item.model-implementation.concepts':
    '生產系統|數值方法|金融軟件工程|模型驗證',
  'item.derivative-portfolio-management.desc':
    '管理衍生工具投資組合的完整框架：Delta對沖消除方向性風險、Gamma頭寸管理波動率敞口、Vol Surface校準、整個投資組合層面的希臘字母管理，以及期權做市商如何管理複雜的對沖賬簿。',
  'item.derivative-portfolio-management.concepts':
    '希臘字母管理|Delta對沖|Gamma交易|波動率曲面|投資組合希臘字母',
  'item.fixed-income-fundamentals.desc':
    '債券、收益率曲線、久期和凸度——世界上最大資產類別的完整框架。久期衡量利率敏感度，凸度捕捉非線性，收益率曲線的形狀反映市場對增長和通脹的預期，信用利差反映違約風險溢價。',
  'item.fixed-income-fundamentals.concepts':
    '收益率曲線|久期與凸度|利率期限結構|利率交易|信用利差|曲線構建',
  'item.market-microstructure-trading.desc':
    '訂單如何成為交易：訂單簿動態揭示供求、信息不對稱解釋買賣價差、做市商提供流動性並管理逆向選擇風險，以及高頻交易如何改變了現代市場微觀結構和交易成本。',
  'item.market-microstructure-trading.concepts':
    '訂單簿動態|信息不對稱|做市|價格發現|交易成本',
  'item.stochastic-volatility-models.desc':
    '超越Black-Scholes——波動率本身是隨機過程的模型：Heston模型的均值回復隨機波動率、SABR模型的遠期利率應用、隱含波動率曲面的校準挑戰，以及波動率微笑和偏斜的定價含義。',
  'item.stochastic-volatility-models.concepts':
    'Heston模型|SABR模型|波動率的波動率|校準|隱含與已實現波動率',
  'item.differential-machine-learning.desc':
    '結合自動微分和神經網絡對衍生品定價和對沖的現代方法：微分神經網絡利用價格路徑的希臘字母信息加速學習，微分正則化改善樣本效率，使機器學習方法在衍生品定價中具有實際可行性。',
  'item.differential-machine-learning.concepts':
    '自動微分|神經網絡定價|微分正則化|機器學習對沖',
  'item.quasi-random-number-generation.desc':
    '用於蒙特卡洛模擬的低差異序列：Sobol序列和Halton序列比偽隨機數提供更均勻的高維空間覆蓋，顯著加快金融衍生品定價中高維積分的收斂速度，是現代蒙特卡洛定價引擎的標準組件。',
  'item.quasi-random-number-generation.concepts':
    'Sobol序列|Halton序列|低差異|蒙特卡洛收斂|擬蒙特卡洛',
};

export default zhHK;
