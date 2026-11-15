import { blocksLinesPerPoint, blocksTitle, mountBlocks } from './break.js';

const stations = [
  [
    "富陽啟航",
    "圖文判讀與單選｜讀懂作者與首段",
    "風煙俱淨，天山共色，從流飄蕩，任意東西。自富陽至桐廬，一百許里，奇山異水，天下獨絕。",
    [
      [
        "如果要設計「風煙俱淨，天山共色」的情境圖，下列何者最符合原文？",
        [
          "江面無風，霧氣沿著山腰緩緩升起。",
          "江風掠過水面，吹散半山的雲霧。",
          "江上無風無霧，遠山與天空色調相近。",
          "江上晴朗無雲，遠山與天空明暗分明。"
        ],
        2,
        "「風煙俱淨」是無風無霧，「天山共色」是遠山與天空色調相近。兩個條件都符合的只有 C。"
      ],
      [
        "如果把「從流飄蕩，任意東西」改成「順江前進，直赴桐廬」，最可惜的是少了什麼？",
        [
          "從富陽通往桐廬的路程交代。",
          "不急著抵達、隨水悠閒遊賞的興致。",
          "作者對沿途山水奇特的讚嘆。",
          "難以表現作者的無所適從的迷惘"
        ],
        1,
        "「飄蕩」與「任意」寫小舟隨水漂行、不拘方向。「直赴桐廬」讓行程有了明確目的地，少了自在遊賞的興致。"
      ],
      [
        "關於本段，下列敘述何者正確？",
        [
          "天氣：江上無風，山間仍有霧氣。",
          "路程：整個交通距離，恰好一百里。",
          "地點：從桐廬出發，沿江前往富陽。",
          "風光：沿途山水奇異，景色天下無雙。"
        ],
        3,
        "「奇山異水，天下獨絕」總評沿途山水。「風煙俱淨」指無風無霧。「一百許里」是約一百里，路線則是從富陽到桐廬。"
      ],
      [
        "吳均字「叔庠」。關於他的名與字，下列說明何者正確？",
        [
          "「叔」表示排行第二，而「均」與「庠」都指古代的學校。",
          "「叔」表示排行第三，而「均」與「庠」是意義相反的字。",
          "「叔」表示排行第三，而「均」與「庠」都可指古代的學校。",
          "「叔」表示排行第二，而「均」與「庠」是意義相反的字。"
        ],
        2,
        "按伯、仲、叔、季的順序，「叔」表示排行第三。「成均」和「上庠」都可指古代學校，所以吳均的名與字相呼應。"
      ]
    ]
  ],
  [
    "觀水之異",
    "閱讀理解｜江水的動靜與寫法",
    "水皆縹碧，千丈見底，游魚細石，直視無礙。急湍甚箭，猛浪若奔。",
    [
      [
        "下列文句，何者最能呈現強烈的動態感？",
        [
          "水皆縹碧",
          "千丈見底",
          "游魚細石，直視無礙",
          "急湍甚箭，猛浪若奔"
        ],
        3,
        "「急湍甚箭，猛浪若奔」寫水流的速度與浪濤的力量。「游魚細石，直視無礙」雖提到游魚，重點是魚和細石都看得清楚，用來襯托水質清澈。"
      ],
      [
        "關於對水的描寫，下列敘述何者正確？",
        [
          "水色：以「縹碧」描寫江水深綠近黑。",
          "水深：以「千丈」記錄實際測得的深度。",
          "水質：以魚與細石清晰可見，凸顯水的清澈。",
          "水勢：以飛箭與奔馬描寫水流逐漸轉緩。"
        ],
        2,
        "「游魚細石，直視無礙」用看得清楚的景物表現水質。「縹碧」是淡青色，「千丈」有誇飾意味，飛箭和奔馬則突顯水勢迅猛。"
      ],
      [
        "作者在「猛浪若奔」中把浪濤比作奔馬，兩者的相似之處是什麼？",
        [
          "向前奔衝，速度快而有力量。",
          "前後相隨，排列整齊而有節奏。",
          "起伏不定，時而停下又重新前進。",
          "經過轉彎時減速，遇到開闊處才加快。"
        ],
        0,
        "「奔」指奔跑的馬。浪濤像奔馬向前衝去，讓讀者感受到浪勢的速度和力量。"
      ],
      [
        "作者為什麼先寫清澈見底的江水，又寫急流和猛浪？",
        [
          "交代船從上游移到下游的先後順序。",
          "說明河水越深，就越容易出現猛浪。",
          "指出富春江的水色會隨船行方向改變。",
          "分別從靜態與動態角度，具體描寫出水的奇異。"
        ],
        3,
        "作者先描寫水色與水的清澈，再轉向湍流和猛浪。靜景與動景相互映襯，具體呈現首段所說的「異水」。"
      ]
    ]
  ],
  [
    "賞山之奇",
    "閱讀理解｜山勢、林木與寫法",
    "夾岸高山，皆生寒樹，負勢競上，互相軒邈；爭高直指，千百成峰。",
    [
      [
        "關於對山的描寫，下列敘述何者正確？",
        [
          "山勢：高山集中在江的一岸，另一岸地勢低平。",
          "山貌：「千百成峰」呈現沿途山峰的連綿不斷。",
          "樹木數量：寒樹只在少數山峰生長，分布稀疏。",
          "樹木姿態：寒樹沿著山勢向兩側伸展，彷彿互相競比。"
        ],
        1,
        "「千百成峰」用虛數寫出山峰眾多、連綿不斷。「夾岸」表示兩岸都有高山，「皆生」表示山上都長著寒樹，「負勢競上」寫樹木沿山勢競相向上生長。"
      ],
      [
        "「負勢競上，互相軒邈，爭高直指」把樹木寫成什麼樣子？用了什麼修辭？",
        [
          "把樹木寫成競相比高比遠的人，運用轉化。",
          "把樹木比作並排挺立的山峰，運用譬喻。",
          "故意把樹木寫成高得超出視線，運用誇飾。",
          "用聲音模仿枝葉相互碰撞，運用摹寫。"
        ],
        0,
        "「競」「互相」「爭」把人的競爭行為用在樹木身上，讓原本靜止的山林有了向上生長的動感。"
      ],
      [
        "作者怎麼安排山與樹的描寫，來表現「奇山」？",
        [
          "先寫寒樹競相向上，再寫兩岸高山，用靜景襯托林木的動勢。",
          "先寫兩岸高山，再寫寒樹競相向上，重點轉為說明寒樹能耐寒。",
          "先寫寒樹茂密，再寫群峰的數量，用林木的多寡交代航行里程。",
          "先寫高山與寒樹的靜景，再寫寒樹競相向上，用樹的動勢烘托山勢高遠。"
        ],
        3,
        "「夾岸高山，皆生寒樹」先交代靜景，「負勢競上」以下寫出樹木的動勢。樹沿山勢向上伸展，讓群山顯得高遠連綿。"
      ],
      [
        "「千百成峰」中的「千」、「百」為虛數，不代表實際數量，以下選項「　」中的數字，何者也是虛數用法？",
        [
          "他從小熟讀「四」書五經，文學造詣很高",
          "弟弟把我的作業本畫得亂七八糟，氣得我「七」竅生煙",
          "姐姐參加了飢餓「三十」，體驗飢餓的感受，也學習珍惜食物",
          "表妹小時候活潑調皮，如今真是女大「十八」變，變得亭亭玉立。"
        ],
        3,
        "「女大十八變」的「十八」用來形容變化很多，不是實際次數。「四書」指四部典籍，「七竅」指頭部的七個孔竅，「飢餓三十」的「三十」指三十小時。"
      ]
    ]
  ],
  [
    "山林聽聲",
    "聽辨｜泉、鳥、蟬、猿",
    "泉水激石，泠泠作響。好鳥相鳴，嚶嚶成韻。蟬則千轉不窮，猿則百叫無絕。",
    [
      [
        "這段文字與〈與宋元思書〉第四段，在描寫聲音時有什麼共同點？",
        [
          "都先交代聲音所在的方位，再比較遠近的差異。",
          "都以溪水聲為主，其他聲音只用來指出水勢。",
          "都先寫聲音逐漸停息，再寫山林恢復安靜。",
          "都寫多種聲音相互交織，讓山林景色有生機。"
        ],
        3,
        "兩篇都把水聲和禽鳥、蟬、猿等自然聲響寫進同一幅山林景象，讓讀者彷彿置身其中。",
        "吳均在〈與顧章書〉中寫道：「蟬吟鶴唳，水響猿啼。英英相雜，綿綿成韻。」"
      ],
      [
        "「泠泠」與「嚶嚶」的主要作用是什麼？",
        [
          "說明泉水和鳥鳴的方向",
          "用兩組數字區分聲音的長短",
          "暗示泉水與鳥鳴逐漸消失",
          "以狀聲詞讓人想像泉響與鳥鳴"
        ],
        3,
        "「泠泠」摹寫清亮水聲，「嚶嚶」摹寫鳥兒鳴唱，讓讀者如聞其聲。"
      ],
      [
        "「不窮」和「無絕」都用在聲音上。作者藉這兩個詞凸顯什麼？",
        [
          "蟬與猿的聲音同樣低沉",
          "蟬與猿都只在黃昏鳴叫",
          "蟬鳴和猿啼接連不斷",
          "蟬聲比猿聲更清亮"
        ],
        2,
        "「不窮」和「無絕」都表示沒有停歇。作者用這兩個詞寫出蟬鳴與猿啼的延續。"
      ],
      [
        "作者寫了四種聲音，為什麼反而讓讀者感到山谷幽靜？",
        [
          "聲音一出現，就表示四周有很多遊人",
          "聲音越響亮，山谷就顯得越空曠明亮",
          "可聽清自然聲響，襯出少有人聲的幽深環境",
          "用四種聲音代替山景，是因看不清兩岸地形"
        ],
        2,
        "作者寫的都是自然之聲，以聲襯靜，讓讀者感到山谷遠離人聲喧鬧。"
      ]
    ]
  ],
  [
    "林間見日",
    "回看舟上｜枝葉與明暗",
    "橫柯上蔽，在晝猶昏；疏條交映，有時見日。",
    [
      [
        "陽光仍在，船進了樹蔭卻像到了黃昏。哪句交代變暗的原因？",
        [
          "有時見日",
          "天山共色",
          "千丈見底",
          "橫柯上蔽"
        ],
        3,
        "「橫柯」是橫斜的枝幹。「上蔽」指出枝幹在上方遮住光線。"
      ],
      [
        "第三段和全文末段都寫到樹。兩段各借樹寫出了什麼？",
        [
          "第三段以山路襯出山高，末段用西斜的日光寫出林中景色。",
          "第三段以山樹動勢襯出山高，末段用枝條疏密寫出明暗。",
          "第三段以林木色澤描寫季節，末段用枝葉明暗交代時辰。",
          "第三段以山樹寫出河谷深淺，末段用樹影寫出江水流向。"
        ],
        1,
        "第三段用「負勢競上」寫樹木依地勢往上伸展，襯出山高。末段寫橫枝遮光、疏枝透光，表現林間的明暗。"
      ],
      [
        "「在晝猶昏」和「有時見日」相連，寫出了什麼？",
        [
          "時間從清晨一路推移到黃昏",
          "在濃枝與疏枝之間，明暗隨遮蔽程度變化",
          "天氣原本晴朗，後來突然轉成降雨",
          "天空始終明亮，變化只出現在水色"
        ],
        1,
        "兩句以昏暗和偶見陽光對照，寫出同一片樹林因枝條疏密而明暗交替。"
      ],
      [
        "課文在抒懷後補寫這兩句。它最能呼應哪一處描寫？",
        [
          "「自富陽至桐廬」的行程",
          "「游魚細石」的水底景色",
          "「皆生寒樹」的夾岸山林",
          "「好鳥相鳴」的聽覺描寫"
        ],
        2,
        "末段補寫濃蔭與透光，呼應「皆生寒樹」，進一步寫出山林的茂密。"
      ]
    ]
  ],
  [
    "桐廬靠岸",
    "明信片｜從景物讀出心情",
    "鳶飛戾天者，望峰息心；經綸世務者，窺谷忘返。",
    [
      [
        "「鳶飛戾天者，望峰息心；經綸世務者，窺谷忘返。」這段文字呈現作者何種人生態度？",
        [
          "汲汲營營，沽名釣譽",
          "超然物外，逍遙自在",
          "悲觀消極，槁木死灰",
          "人生苦短，及時行樂。"
        ],
        1,
        "「望峰息心」寫放下求取功名的念頭，「窺谷忘返」寫賞景時暫忘世務。兩句呈現超脫名利牽掛、自在欣賞山水的人生態度。"
      ],
      [
        "〈與宋元思書〉為吳均寫給宋元思的一封信。根據書信的寫作用語，下列何者正確？",
        [
          "信封上可寫「宋元思先生敬啟」",
          "直式信封上，右邊寫吳均住址，左邊寫宋元思住址",
          "信中可稱宋元思為「閣下」，自己自稱「在下」",
          "信文起首「元思吾友膝下」，文末「弟叔庠敬啟」"
        ],
        2,
        "「閣下」是對人的敬稱，「在下」是自稱的謙詞。平輩的信封可用「臺啟」，「敬啟」用於寄信人署名後。直式信封右側寫收件人宋元思的地址，左下側寫寄件人吳均的地址。「膝下」用於寫信給父母或祖父母。",
        "依傳統書信用語與臺灣國內直式信封格式判斷。"
      ],
      [
        "班上要替吳均寫一句旅程旁白，哪一句既能表現山水對人的影響，又沒有超出課文所寫？",
        [
          "一遊富春江，所有旅人從此都不再過問世事。",
          "望著高峰與幽谷，平日縈繞心頭的名利和政事，也能暫且放下。",
          "只有原本就淡泊名利的人，才能看懂山水的美。",
          "我已辭去官職，決定從此留在山谷，不再返回。"
        ],
        1,
        "「望峰息心，窺谷忘返」寫山水使人放下名利與世務的牽掛。課文並未寫吳均辭官，也未說遊人從此不問世事。"
      ],
      [
        "「鳶飛戾天者，望峰息心；經綸世務者，窺谷忘返」屬於哪一類對偶？",
        [
          "單句對，一句和一句相對",
          "隔句對，前兩句和後兩句相對",
          "句中對，同一句內前後詞語相對",
          "排比，三組以上的同式句子接連排列"
        ],
        1,
        "「鳶飛戾天者」對「經綸世務者」，「望峰息心」對「窺谷忘返」。第一句對第三句，第二句對第四句，所以是隔句對。"
      ]
    ]
  ]
];
const extraQuestions = [["作者第一段先提到奇山異水，再分段詳細描寫山之奇跟水之異，這屬於什麼寫作結構？",["分—總結構","總—分結構","順敘結構","比較結構"],1,"第一段先以「奇山異水，天下獨絕」總說沿途景致，接著分段描寫江水之異與山林之奇，形成總—分結構。"],["作者觀看江水時，採用哪一種視角？",["俯視（向下看）","仰視（向上看）","平視（向前看）","沒有固定方向"],0,"「千丈見底，游魚細石，直視無礙」寫作者從船上向下看水面和水底，才能看清游魚與細石。"],["作者觀看兩岸高山時，採用哪一種視角？",["俯視（向下看）","仰視（向上看）","平視（向前看）","沒有固定方向"],1,"吳均在江面上的船裡，抬頭看夾岸高山及向上伸展的寒樹，因此是仰視。"],["前文已寫江水清澈、兩岸山高，這一段加入自然聲響，有什麼作用？",["用聲音交代小舟離岸與靠岸的時間","讓讀者從看見山水進一步感受到山谷的聲音","以鳥獸鳴叫解釋山林為什麼長滿寒樹","暗示船靠岸後才開始看見兩旁的高山"],1,"前文寫山水所見，這一段補入山谷所聞，讓讀者像在現場一樣，既看見山水也聽見自然的聲音。"],["作者寫過「望峰息心，窺谷忘返」後，又在末段補寫樹蔭與透光。這段補敘有什麼作用？",["回頭補寫從富陽到桐廬的航程","說明旅人為何在黃昏時才看見江水","補足林木濃密造成的光影變化，讓奇山的描寫更完整","靠樹蔭的深淺推算山峰距離"],2,"「橫柯上蔽」與「疏條交映」補寫林木的濃密與枝間透光，呼應前文的「皆生寒樹」。"],["關於〈與宋元思書〉的寫作手法，下列何者正確？",["全文每句都是四字或六字，沒有其他字數的句子","開頭先說感受，最後才第一次交代富陽和桐廬","先用聽覺寫山谷，再轉用視覺寫江水的清澈","文中多用整齊的短句和對偶，並從山水聲色轉入抒懷"],3,"本文常以整齊的短句和對偶形成駢文的節奏，「鳶飛戾天者」則是五字句。全文由視覺、聽覺寫景，再以「望峰息心，窺谷忘返」抒懷。"]];
stations.forEach((station,index)=>station[3].push(extraQuestions[index]));
// Keep the original question indexes as saved-answer IDs.
const questionOrders = {0:[3,0,1,2,4], 3:[1,2,3,4,0], 5:[0,2,3,4,1]};
for (const [station,order] of Object.entries(questionOrders)){
  const questions = stations[station][3];
  stations[station][3] = order.map(index=>questions[index]);
}
const stationTranslations = [
  "沒有風，也沒有雲霧，天和山同一顏色，我坐在船裡，隨流水四處漂行。從富陽到桐廬，約一百里左右，沿途奇異的山光水色，可以說是天下獨一無二的景觀。",
  "江水都是青綠色的，千丈深的水底也可以看得很清楚，水中游動的魚和細小的石子，也可以毫無阻礙的直接看到。水流得很急，比飛箭還快，洶湧的波浪，就像奔騰的駿馬。",
  "兩岸的高山，都長著耐寒常綠的樹木。彼此依恃著地勢，競相向上，互爭高遠，一直朝上伸展，形成了千百座的山峰。",
  "泉水沖擊著岩石，發出清脆的流水聲；可愛的鳥兒此起彼落的鳴叫著，形成一片和諧的音韻。蟬兒一直鳴唱著，猿猴也叫個不停。",
  "橫斜的樹枝遮蔽了天空，雖是白天也好像黃昏一般；只有在稀疏枝條交互掩映的空隙，偶爾可以看到陽光。",
  "一心追求飛黃騰達的人，看到這奇特的山峰，定會停止追求名利的欲望；平日忙於處理政事的人，看到這幽美的山谷，也會流連忘返。"
];
const root = document.querySelector('main');
const nav = document.querySelector('nav');
const route = nav.closest('.route');
const progress = document.querySelector('#progress');
const key = 'fuchun-reading-v19';
const swapLastStations = list => [list[0],list[1],list[2],list[3],list[5],list[4]];
function pendingQuestions(checkpoint){
  return checkpoint?.pendingQuestionIds ?? (checkpoint?.pendingQuestionId ? [checkpoint.pendingQuestionId] : []);
}
let saved = {};
try {
  const currentSave = localStorage.getItem(key);
  const updated = currentSave || localStorage.getItem('fuchun-reading-v18');
  const v17 = localStorage.getItem('fuchun-reading-v17');
  const v16 = localStorage.getItem('fuchun-reading-v16');
  const v15 = localStorage.getItem('fuchun-reading-v15');
  const v14 = localStorage.getItem('fuchun-reading-v14');
  const v13 = localStorage.getItem('fuchun-reading-v13');
  const v12 = localStorage.getItem('fuchun-reading-v12');
  const v11 = localStorage.getItem('fuchun-reading-v11');
  const v10 = localStorage.getItem('fuchun-reading-v10');
  const v9 = localStorage.getItem('fuchun-reading-v9');
  const v8 = localStorage.getItem('fuchun-reading-v8');
  const v7 = localStorage.getItem('fuchun-reading-v7');
  const v6 = localStorage.getItem('fuchun-reading-v6');
  const older = localStorage.getItem('fuchun-reading-v5') || localStorage.getItem('fuchun-reading-v4');
  const previous = v17 || v16 || v15 || v14 || v13 || v12 || v11 || v10 || v9 || v8 || v7 || v6 || older;
  const legacy = !updated && previous && !v17 && !v16;
  saved = JSON.parse(updated || previous || '{}');
  if (legacy && !v15 && !v14 && !v13 && !v12){
    // Keep unchanged answers, but don't score selections from replaced prompts.
    const revisedLaterQuestions = new Set(['3-0','3-2','3-4','4-4','5-3','5-4']);
    let replaced = v11 ? /a^/ : /^(0-4$|2-)/;
    if (!v11 && !v10) {
      if (v9) replaced = /^(0-4$|1-4$|2-)/;
      else if (v8) replaced = /^(0-4$|[12]-)/;
      else if (v7) replaced = /^(0-4$|[12]-)/;
      else replaced = /^[012]-/;
    }
    saved.answers = Object.fromEntries(Object.entries(saved.answers ?? {}).filter(([id])=>!revisedLaterQuestions.has(id) && !replaced.test(id)));
    saved.secondLegStarted = saved.secondLegStarted || saved.submitted;
    saved.submitted = false;
    if (saved.current===stations.length) saved.current=v11 ? 3 : 0;
  }
  if (legacy && !v15 && !v14 && !v13) {
    for (const id of ['0-0', '0-1', '5-2']) delete saved.answers?.[id];
  }
  if (legacy && !v15 && !v14) {
    for (const id of ['0-2', '0-3']) delete saved.answers?.[id];
    if (saved.answers?.['0-1'] === 3) delete saved.answers['0-1'];
    saved.secondLegStarted = saved.secondLegStarted || saved.submitted;
    saved.submitted = false;
    if (saved.current === stations.length) saved.current = 0;
  }
  if (legacy && !v15) {
    for (const id of ['3-0','4-1','5-3']) delete saved.answers?.[id];
    saved.secondLegStarted = saved.secondLegStarted || saved.submitted;
    saved.submitted = false;
    if (saved.current === stations.length) saved.current = 4;
  }
  if (legacy) {
    const revisedQuestions = ['2-3','5-0'];
    for (const id of revisedQuestions) delete saved.answers?.[id];
    if (v15 && Array.isArray(saved.checkpoints)){
      // Reopen only the revised question when a group was already checked.
      saved.checkpoints = revisedQuestions.map((id,index)=>{
        const checkpoint = saved.checkpoints[index];
        if (!checkpoint) return null;
        const missed = checkpoint.closed ? [] : checkpoint.missed.filter(missedId=>missedId!==id);
        const drafts = {...checkpoint.drafts};
        delete drafts[id];
        return {missed,closed:false,drafts,pendingQuestionId:id};
      });
    }
    saved.secondLegStarted ||= saved.submitted;
    saved.submitted = false;
    if (saved.current===stations.length) saved.current=2;
  }
  const replacedQuestions = v17 ? [['5-1',1]] : [['2-0',0],['5-1',1]];
  for (const [id,index] of replacedQuestions){
    if (updated || !Object.hasOwn(saved.answers ?? {},id)) continue;
    delete saved.answers[id];
    const checkpoint = saved.checkpoints?.[index];
    if (checkpoint) {
      checkpoint.pendingQuestionIds = [...new Set([...pendingQuestions(checkpoint),id])];
      delete checkpoint.pendingQuestionId;
      const unchanged = questionId => questionId!==id;
      const missed = checkpoint.missed.filter(unchanged);
      const reviewed = (checkpoint.reviewedMisses ?? []).filter(unchanged);
      checkpoint.reviewedMisses = [...new Set([...reviewed,...(checkpoint.closed ? missed : [])])];
      checkpoint.missed = checkpoint.closed ? [] : missed;
      checkpoint.closed = false;
      delete checkpoint.drafts?.[id];
      delete checkpoint.firstAnswers?.[id];
    }
    saved.secondLegStarted ||= saved.submitted;
    saved.submitted = false;
    if (saved.current===stations.length) saved.current=(index+1)*3-1;
  }
  if (!currentSave) {
    // Moving the mountain answer from D to B must preserve previously chosen text.
    const mountainQuestion = '2-0';
    const newOptionIndices = [0, 2, 3, 1];
    const checkpoint = saved.checkpoints?.[0];
    for (const selections of [saved.answers, checkpoint?.firstAnswers, checkpoint?.drafts]) {
      const oldIndex = selections?.[mountainQuestion];
      if (Number.isInteger(oldIndex) && oldIndex >= 0 && oldIndex < newOptionIndices.length) {
        selections[mountainQuestion] = newOptionIndices[oldIndex];
      }
    }
  }
} catch {}
let current = saved.current ?? -1;
let answers = saved.answers ?? {};
let submitted = saved.submitted === true;
let checkpoints = [saved.checkpoints?.[0] ?? null, saved.checkpoints?.[1] ?? null];
const questionPoints = 3;
const gamePoints = 5;
const groupPoints = 50;
const bonusNames = [blocksTitle,'忘卻處理世俗政事｜水管全相連'];
const bonusStops = ['中繼遊戲站','終點遊戲站'];
const bonusImages = ['opening-river.jpg','opening-scroll.jpg'];
const bonusStages = [7,8];
const routeOrder = [0,1,2,7,3,4,5,8];
let secondLegStarted = saved.secondLegStarted === true || submitted || saved.blocksCleared === true;
let blocksLines = Number.isInteger(saved.blocksLines)
  ? Math.max(0, Math.min(saved.blocksLines, gamePoints * blocksLinesPerPoint))
  : saved.blocksCleared === true ? gamePoints * blocksLinesPerPoint : 0;
let unmountBlocks;
let pipeTurns = Array.isArray(saved.pipeTurns) && saved.pipeTurns.length===9 ? saved.pipeTurns : [1,1,0,2,1,0,0,2,2];
const total = stations.reduce((n, station) => n + station[3].length, 0);
const photos = swapLastStations(['animation/fuyang/1.jpg','animation/water/3.jpg','animation/hills/start.jpg','animation/sound/1.jpg','animation/tonglu/4.jpg','animation/canopy/4.jpg']);
const alt = swapLastStations(['無風霧的富陽渡口，吳均準備登舟','舟旁清水中的魚石和遠處的急流','吳均坐在木舟內，仰望富春江兩岸高山','吳均在舟上聆聽溪谷中的水聲和鳴叫','吳均的船停靠桐廬，望著山谷','吳均乘舟穿過濃密樹蔭，前方有陽光透過枝葉']);

const sceneActions = swapLastStations([
  {
    folder: 'fuyang',
    videoFile: 'scene-boarding.mp4',
    captions: ["風煙俱淨，天山共色，", "從流飄蕩，任意東西。", "自富陽至桐廬，一百許里，", "奇山異水，天下獨絕。"],
    beats: [2100,4500,3450,3880],
    description: '江面清朗無風霧，遠山與天空近乎同色。吳均登上木船，讓船順水漂流。'
  },
  {
    folder: 'water',
    captions: ["水皆縹碧，", "千丈見底，", "游魚細石，直視無礙。", "急湍甚箭，猛浪若奔。"],
    beats: [900,850,1450,1530],
    description: '吳均俯身觀察碧水。光影掠過水底的細石，魚群游過，遠處的急流翻起白浪。'
  },
  {
    folder: 'hills',
    captions: ["夾岸高山，皆生寒樹，", "負勢競上，互相軒邈；", "爭高直指，千百成峰。"],
    beats: [1550,1750,1870],
    description: '木舟穿過兩岸高山之間，吳均坐在船內，仰望群山和茂密樹林。'
  },
  {
    folder: 'sound',
    captions: ["泉水激石，泠泠作響。", "好鳥相鳴，嚶嚶成韻。", "蟬則千轉不窮，", "猿則百叫無絕。"],
    beats: [2100,2500,2400,3330],
    description: '吳均聆聽泉水撞石、鳥兒應和和蟬鳴，岩上的猿猴抬頭張口長嘯。'
  },
  {
    folder: 'tonglu',
    captions: ["鳶飛戾天者，望峰息心；", "經綸世務者，窺谷忘返。"],
    beats: [4300,4330],
    description: '小舟靠上桐廬渡口，吳均望峰息心，窺谷忘返。'
  },
  {
    folder: 'canopy',
    captions: ["橫柯上蔽，在晝猶昏；", "疏條交映，有時見日。"],
    beats: [2850,3820],
    description: '船從交錯橫枝下的深蔭漂出，偶爾見到陽光從稀疏枝葉間灑落。'
  }
]);

const soundFiles = ['spring','bird','cicada','gibbon'];
const soundLabels = ['泉水撞石','鳥鳴','蟬鳴','猿啼'];
const soundPlayer = new Audio();
soundPlayer.volume = .4;
for (const event of ['play','pause','ended']) soundPlayer.addEventListener(event,()=>syncMusic());
function stopForestSound(){
  soundPlayer.pause();
}

async function playForestSound(index){
  try {
    soundPlayer.src = 'sounds/' + soundFiles[index] + '.ogg';
    const playback = soundPlayer.play();
    syncMusic();
    await playback;
  } catch (error){
    const status = root.querySelector('[data-sound-status]');
    syncMusic();
    if (status && error.name !== 'AbortError') status.textContent = '音效無法播放，請再試一次。';
  }
}
function soundControls(){
  return `<div class="scene-controls forest-sounds">${soundLabels.map((name,index)=>`<button type="button" data-forest-sound="${index}">${name}</button>`).join('')}<button type="button" data-silence>停止音效</button></div>
    <p data-sound-status role="status" class="sr-only"></p>
    <details class="sound-credits"><summary>錄音來源</summary><ul>
      <li>泉水撞石情境音：<a href="https://commons.wikimedia.org/wiki/File:Hemlock_stream.ogg">Hemlock stream</a>，Dirtslayer，公眾領域</li>
      <li>鳥鳴：<a href="https://commons.wikimedia.org/wiki/File:Birds_forest.ogg">Birds forest</a>，公眾領域</li>
      <li>蟬鳴：<a href="https://commons.wikimedia.org/wiki/File:%E8%9D%89%E9%B8%A3.ogg">蟬鳴</a>，<a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0</a></li>
      <li>猿啼：<a href="https://commons.wikimedia.org/wiki/File:Lar_Gibbon_hoots.ogg">Lar Gibbon hoots</a>，FunkMonk，<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>。影片使用裁剪與淡出的錄音，這段改作音軌採相同授權。</li>
    </ul></details>`;
}

let scenePlayback;

const music = document.querySelector('#background-music');
const musicToggle = document.querySelector('#music-toggle');
let musicEnabled = true;
try { musicEnabled = localStorage.getItem('fuchun-music') !== 'off'; } catch {}
music.volume = .4;
function updateMusicButton(){
  musicToggle.textContent = musicEnabled ? '關閉配樂' : '開啟配樂';
  musicToggle.setAttribute('aria-pressed',String(musicEnabled));
}
function syncMusic(){
  const sceneHasSound = scenePlayback && !scenePlayback.video.muted;
  if (!musicEnabled || sceneHasSound || !soundPlayer.paused){
    music.pause();
    updateMusicButton();
    return;
  }
  if (music.paused) void music.play().catch(updateMusicButton);
}
music.addEventListener('play',updateMusicButton);
music.addEventListener('pause',updateMusicButton);
musicToggle.addEventListener('click',()=>{
  musicEnabled = !musicEnabled;
  try { localStorage.setItem('fuchun-music',musicEnabled?'on':'off'); } catch {}
  updateMusicButton();
  syncMusic();
});
document.addEventListener('click',event=>{
  if (!event.target.closest('#music-toggle, #start-opening') && musicEnabled && music.paused) syncMusic();
},{capture:true});



function sceneFigure(station){
  const {description,folder} = sceneActions[station];
  return `<figure class="scene-frame" data-scene="${station}" aria-label="${description}">
    <img src="animation/${folder}/start.jpg" alt="${alt[station]}">
    <div class="scene-animation" aria-hidden="true"></div>
    <figcaption class="scene-caption" aria-hidden="true" hidden></figcaption>
  </figure>
  <div class="scene-controls"><button type="button" data-play-scene>${station===3 ? '播放有聲動畫' : '播放情境動畫'}</button></div>${station===3 ? soundControls() : ''}`;
}


function stopScene(){
  stopForestSound();
  if (!scenePlayback) {
    syncMusic();
    return;
  }
  const {figure,button,video,frameRequest} = scenePlayback;
  scenePlayback = undefined;
  syncMusic();
  if (frameRequest !== undefined) video.cancelVideoFrameCallback?.(frameRequest);
  video.pause();
  if (!video.classList.contains("scene-visible")) video.remove();
  figure.classList.remove("is-playing");
  button.textContent = Number(figure.dataset.scene) === 3 ? "重播有聲動畫" : "重播情境動畫";
}

async function playScene(station, withSound = false){
  stopScene();
  const figure = root.querySelector("[data-scene]");
  const button = root.querySelector("[data-play-scene]");
  if (!figure || Number(figure.dataset.scene) !== station) return;
  const {folder,videoFile = 'scene.mp4',captions,beats = [1100,1250,1300,1500]} = sceneActions[station];
  const screen = figure.querySelector(".scene-animation");
  const caption = figure.querySelector(".scene-caption");
  const video = document.createElement("video");
  video.playsInline = true;
  video.muted = !withSound || station !== 3;
  video.volume = .65;
  const play = {figure,button,video};
  scenePlayback = play;
  syncMusic();
  button.textContent = "停止動畫";
  const ends = beats.map((_,i)=>beats.slice(0,i+1).reduce((sum,beat)=>sum+beat,0));
  const syncCaption = ()=>{
    if (scenePlayback !== play || !video.classList.contains("scene-visible")) return;
    const index = ends.findIndex(end=>end>video.currentTime*1000);
    caption.textContent = captions[index < 0 ? captions.length-1 : index];
  };
  // Keep the poster or paused frame visible until this video has a frame to show.
  const reveal = ()=>{
    if (scenePlayback !== play) return;
    video.classList.add("scene-visible");
    for (const previous of screen.querySelectorAll("video")) if (previous!==video) previous.remove();
    figure.classList.add("is-playing");
    syncCaption();
    caption.hidden = false;
  };
  video.addEventListener("timeupdate",syncCaption);
  video.addEventListener("ended",()=>{if(scenePlayback===play) stopScene();});
  video.src = `animation/${folder}/${videoFile}`;
  screen.append(video);
  if (typeof video.requestVideoFrameCallback === "function"){
    play.frameRequest=video.requestVideoFrameCallback(reveal);
  } else {
    video.addEventListener("playing",reveal,{once:true});
  }
  try {
    await video.play();
  } catch (error) {
    if (scenePlayback !== play) return;
    if (error.name === "NotAllowedError" && !video.muted) {
      // Browser autoplay policies may require muted playback until a click.
      void playScene(station);
      return;
    }
    stopScene();
    button.textContent = "重新播放動畫";
  }
}

const idFor = (s,q) => s + '-' + (questionOrders[s]?.[q] ?? q);
const save = () => { try { localStorage.setItem(key, JSON.stringify({current, answers, submitted, checkpoints, secondLegStarted, blocksLines, pipeTurns})); } catch {} };
const has = (s,q) => Object.hasOwn(answers, idFor(s,q));
const count = () => stations.reduce((n,station,s) => n + station[3].filter((_,q) => has(s,q)).length, 0);

const journeyGroups = [
  {stages:'第 1～3 關', start:0, end:3},
  {stages:'第 4～6 關', start:3, end:6}
];
const isCorrect = (s,q) => answers[idFor(s,q)] === stations[s][3][q][2];
function journeyStatus(){
  const groups = journeyGroups.map(group=>{
    const index = journeyGroups.indexOf(group);
    let correct = 0;
    for (let s=group.start;s<group.end;s++){
      correct += stations[s][3].filter((_,q)=>isCorrect(s,q)).length;
    }
    let bonus = 0;
    if (groupAnswered(index)) {
      if (index===0) bonus = Math.floor(blocksLines / blocksLinesPerPoint);
      else if (pipeNetwork().solved) bonus = gamePoints;
    }
    const reading = correct*questionPoints;
    return {...group,correct,reading,bonus,value:groupPoints-reading-bonus};
  });
  const correct = groups.reduce((sum,group)=>sum+group.correct,0);
  return {groups,correct,value:groups.reduce((sum,group)=>sum+group.value,0)};
}
const displayPoints = value => Number(value.toFixed(2));
const purificationLimit = 40;
const milestones = [
  [85, '若第一關全對'],
  [70, '若第二關全對'],
  [55, '若第三關全對'],
  [50, '完成消除名利之心小遊戲'],
  [35, '若第四關全對'],
  [20, '若第五關全對'],
  [5, '若第六關全對'],
  [0, '完成忘卻世俗瑣事小遊戲']
];
const rulerTicks = [...milestones.map(([points])=>points).reverse(),100];
const meter = document.querySelector('#journey');
meter.innerHTML = `<div class="journey-main"><strong>俗事纏心值</strong><span class="journey-remaining">還有 <b data-journey-total>100</b> 點</span></div>
  <div class="journey-scale" style="--journey-limit:${purificationLimit}%">
    <div class="journey-endpoints"><span>身心淨化</span><span>俗事纏心</span></div>
    <div class="journey-ruler" aria-hidden="true">
      <div class="journey-track">
        ${rulerTicks.map(points=>`<span class="journey-tick" data-points="${points}" style="--tick:${points}%"><b>${points}</b></span>`).join('')}
        <span class="journey-cutoff"><b>${purificationLimit} 點｜通過門檻</b></span>
        <span class="journey-marker"></span>
      </div>
    </div>
    <p class="journey-pass-note">圓點移到 ${purificationLimit} 點或更左邊就通過。</p>
    <ol class="journey-milestones" aria-label="各關全對及小遊戲通關時的剩餘點數">${milestones.map(([points,label])=>`<li><b>${points}</b><span>${label}</span></li>`).join('')}</ol>
  </div>`;
function updateJourney({groups}){
  const value = 100 - groups.reduce((sum,group,index)=>
    sum + group.bonus + (readingRevealed(index) ? group.reading : 0), 0);
  const tone = Math.round(255*(100-value)/100);
  meter.style.setProperty('--tone',tone);
  meter.style.setProperty('--meter-ink',tone >= 150 ? '#172520' : '#fff');
  meter.style.setProperty('--journey-position',value+'%');
  meter.querySelector('[data-journey-total]').textContent=displayPoints(value);
}

const checkpointIndex = station => station===2 ? 0 : station===5 ? 1 : -1;
const readingRevealed = index => submitted || Boolean(checkpoints[index] && !pendingQuestions(checkpoints[index]).length);
function answerLocked(station, question){
  const checkpoint = checkpoints[Math.floor(station/3)];
  return submitted || Boolean(checkpoint && !pendingQuestions(checkpoint).includes(idFor(station,question)));
}
const isFuyangPicture = (s,q) => s===0 && questionOrders[0][q]===0;
const answerLetter = i => 'ABCD'[i];
const fuyangOptionImage = i => `<img src="questions/fuyang-${answerLetter(i).toLowerCase()}.jpg" alt="" width="768" height="512">`;

function checkpointQuestions(index){
  const {start,end} = journeyGroups[index];
  return stations.slice(start,end).flatMap(([name,,,questions],offset)=>{
    const s = start+offset;
    return questions.map((question,q)=>({s,q,name,id:idFor(s,q),question}));
  });
}

function updateCheckpoint({groups}){
  const panel = root.querySelector('[data-checkpoint]');
  if (!panel) return;
  const index = checkpointIndex(current);
  const checkpoint = checkpoints[index];
  if (!readingRevealed(index)){
    const message = pendingQuestions(checkpoint).length ? '這一段有更新的題目。作答後可重新檢核。' : groupAnswered(index) ? `已答完${journeyGroups[index].stages}。按下按鈕查看淨化值，並處理錯題後，即可前往${bonusStops[index]}。` : `答完${journeyGroups[index].stages}後即可檢核。檢核會鎖定原答案，錯題可重答一次。`;
    panel.innerHTML = `<p>${message}</p>
      <button type="button" class="primary" data-check-answers>題目總淨化值</button>`;
    return;
  }
  const {correct,reading,stages} = groups[index];
  panel.innerHTML = `<h3 tabindex="-1" data-checkpoint-title>題目總淨化值：${reading} 點</h3>
    <p>${stages}答對 ${correct} / ${checkpointQuestions(index).length} 題。</p>`;
  if (!checkpoint || submitted || checkpoint.closed){
    if (checkpoint?.closed) panel.insertAdjacentHTML('beforeend',`<p>${checkpoint.retried ? '已完成錯題重答。' : correct===checkpointQuestions(index).length ? '全部答對。' : '此段檢核已完成。'}</p>`);
    return;
  }
  const wrong = checkpointQuestions(index).filter(item=>checkpoint.missed.includes(item.id));
  panel.insertAdjacentHTML('beforeend', `<form data-checkpoint-retry>
    <h3>錯題重答</h3><p>每題可重答一次。選好再一起送出。</p>
    ${wrong.map(({s,q,name,id,question:[prompt,options,,,context]})=>{
      const pictures = isFuyangPicture(s,q);
      return `<fieldset><legend>${name} · 第 ${q+1} 題｜${prompt}</legend>
        ${context ? `<p class="question-passage">${context}</p>` : ''}
        <p>原先選擇：${answerLetter(answers[id])}. ${options[answers[id]]}</p>
        <div class="${pictures?'picture-options':'retry-options'}">${options.map((option,i)=>`<label class="${pictures?'picture-option':''}">
          ${pictures?fuyangOptionImage(i):''}
          <span class="retry-choice">
            <input type="radio" name="retry-${id}" data-retry-answer="${id}" value="${i}" ${checkpoint.drafts?.[id]===i?'checked':''} required>
            <span><strong>${answerLetter(i)}.</strong> ${option}</span>
          </span>
        </label>`).join('')}</div>
      </fieldset>`;
    }).join('')}
    <div class="checkpoint-actions"><button class="primary" type="submit">送出錯題重答</button><button type="button" data-skip-retry>略過重答</button></div>
  </form>`);
}

function checkReading(){
  const index = checkpointIndex(current);
  if (index<0 || readingRevealed(index)) return;
  const {start,end} = journeyGroups[index];
  if (missingQuestion(start,end)) return;
  const previousCheck = checkpoints[index];
  const pending = pendingQuestions(previousCheck);
  const missed = checkpointQuestions(index).filter(({s,q,id})=>
    !isCorrect(s,q) && (!previousCheck || pending.includes(id) || previousCheck.missed.includes(id))
  ).map(({id})=>id);
  const firstAnswers = {...previousCheck?.firstAnswers,...Object.fromEntries(missed.map(id=>[id,answers[id]]))};
  checkpoints[index] = {missed,firstAnswers,reviewedMisses:previousCheck?.reviewedMisses ?? [],closed:missed.length===0,drafts:previousCheck?.drafts ?? {}};
  root.querySelectorAll('[data-answer]').forEach(input=>{input.disabled=true;});
  save();
  updateProgress();
  root.querySelector('[data-checkpoint-title]').focus();
}

function finishRetry(retry){
  const index = checkpointIndex(current);
  const checkpoint = checkpoints[index];
  if (!checkpoint || pendingQuestions(checkpoint).length || checkpoint.closed || submitted) return;
  if (retry){
    if (!checkpoint.missed.every(id=>Number.isInteger(checkpoint.drafts?.[id]))) return;
    for(const id of checkpoint.missed) answers[id] = checkpoint.drafts[id];
  }
  checkpoint.closed = true;
  checkpoint.retried = retry;
  delete checkpoint.drafts;
  save();
  updateProgress();
  root.querySelector('[data-checkpoint-title]').focus();
}



const groupAnswered = index => stations.slice(index*3,index*3+3).every((stage,s)=>stage[3].every((_,q)=>has(index*3+s,q)));

// Each mask represents the openings in the order north, east, south, west.
const pipeShapes = [2,14,8,6,11,12,1,2,9];
const directions = ['上','右','下','左'];
function pipeNetwork(){
  const masks=pipeShapes.map((mask,i)=>{
    const turns=pipeTurns[i];
    return ((mask<<turns)|(mask>>(4-turns))) & 15;
  });
  const source=4;
  const flowing=new Set([source]);
  let leak=false;
  for (const i of flowing){
    for(let dir=0;dir<4;dir++){
      if(!(masks[i] & (1<<dir))) continue;
      const row=Math.floor(i/3)+[-1,0,1,0][dir];
      const col=i%3+[0,1,0,-1][dir];
      const adjacent=row*3+col;
      if(row<0||row>2||col<0||col>2||!(masks[adjacent] & (1<<((dir+2)%4)))){
        leak=true;
      }else{
        flowing.add(adjacent);
      }
    }
  }
  return {masks,flowing,solved:!leak && flowing.size===masks.length};
}

function pipesBoard(){
  const {masks,flowing,solved}=pipeNetwork();
  const sourceName = '淨心源頭';
  return `<p>點管件或按 Enter 順時針轉 90 度。滑鼠右鍵可逆時針轉。中央圓點是「${sourceName}」。接到源頭的格子會亮起。</p>
    <p>把所有水管接通，讓清泉淨化你，讓你不再受世俗政事的干擾。</p>
    <p class="bonus-status" aria-live="polite">已通水 ${flowing.size} / 9 格。</p>
    <div class="pipe-grid">${masks.map((mask,i)=>{
      const exits=directions.filter((_,d)=>mask & (1<<d));
      const arms=exits.map(dir=>`<span class="pipe-arm pipe-arm-${directions.indexOf(dir)}"></span>`).join('');
      const label = i===4 ? sourceName : '';
      return `<button type="button" data-pipe="${i}" class="${flowing.has(i)?'flowing ':''}${i===4?'pipe-source':i===8?'pipe-outlet':''}" aria-label="第 ${Math.floor(i/3)+1} 列第 ${i%3+1} 格${label?'，'+label:''}，接頭朝${exits.join('、')}" ${solved?'disabled':''}><span class="pipe-drawing" aria-hidden="true">${arms}<span class="pipe-hub">${i===4?'●':i===8?'◇':''}</span>${label?`<span class="pipe-source-label">${label}</span>`:''}</span></button>`;
    }).join('')}</div>
    ${solved ? `<div class="pipe-finish" role="status" tabindex="-1"><strong>窺谷忘返・身心淨化</strong><p>水路已接通，你已放下世俗的牽掛，身心也得到了淨化。</p></div>` : ''}`;
}

function rotatePipe(index,direction=1){
  if (current!==bonusStages[1] || !canOpenBonus(1) || pipeNetwork().solved) return;
  pipeTurns[index]=(pipeTurns[index]+4+direction)%4;
  refreshBonus(`[data-pipe="${index}"]`);
}

function updateBonus(){
  const target=root.querySelector('.bonus-slot');
  if(!target) return;
  const index=bonusStages.indexOf(current);
  if(index<0) return;
  const unlocked = canOpenBonus(index);
  if (index===0 && target.querySelector('[data-blocks]')) return;
  target.innerHTML=`<section class="bonus-game ${index===0?'bonus-wood':'bonus-celadon'}" aria-labelledby="bonus-title">
    <h2 id="bonus-title" tabindex="-1">${bonusStops[index]}</h2>
    <div class="bonus-heading">
      <h3>${bonusNames[index]} <small>${gamePoints} 分</small></h3>
      ${index===0 ? '<p>每消除5行可以得到1分，最多拿5分</p>' : ''}
    </div>
    ${unlocked
      ? (index===0?'<div class="arcade-game blocks-inline" data-blocks></div>':pipesBoard())
      : `<p>先作答第 ${index===0?'1～3':'4～6'} 關共 15 題閱讀題，即可開啟遊戲。</p>`}
  </section>`;
  if (index===0 && unlocked){
    unmountBlocks = mountBlocks(target.querySelector('[data-blocks]'), {
      initialLines:blocksLines,
      points:gamePoints,
      onProgress(lines){
        blocksLines=lines;
        save();
        updateProgress();
      }
    });
  }
}

function refreshBonus(selector){
  save();
  updateProgress();
  (root.querySelector(selector+':not(:disabled)') ?? root.querySelector('.pipe-finish') ?? root.querySelector('#bonus-title'))?.focus();
}


function updateProgress(){
  updateBonus();
  const status = journeyStatus();
  updateJourney(status);
  updateCheckpoint(status);
  progress.textContent = '已作答 ' + count() + ' / ' + total + ' 題';
  const answeredAll = count() === total;
  document.querySelector('#completion').textContent = answeredAll
    ? checkpoints.every(checkpoint=>checkpoint?.closed) || submitted
      ? `六關閱讀題已答完，請前往${bonusStops[1]}。`
      : `六關閱讀題已答完。請在第 3、6 關完成檢核，再到${bonusStops[1]}交卷。`
    : '還有 ' + (total-count()) + ' 題待作答。';
  for (const button of nav.querySelectorAll('button')){
    const step = Number(button.dataset.station);
    const index = bonusStages.indexOf(step);
    const label = button.querySelector('small');
    if (index>=0){
      const unlocked = canOpenBonus(index);
      const bonus = status.groups[index].bonus;
      button.disabled = !unlocked;
      label.textContent = !unlocked ? '答完後開放' : !submitted && !checkpoints[index]?.closed ? '待檢核' : bonus===gamePoints ? '已通關' : bonus ? bonus+' / '+gamePoints+' 分' : '可挑戰';
      continue;
    }
    button.disabled = step>=3 && !secondLegStarted;
    const questions = stations[step][3];
    const answered = questions.filter((_,q)=>has(step,q)).length;
    label.textContent = button.disabled ? '待啟程' : `已作答 ${answered} / ${questions.length}`;
  }
}
function canOpenBonus(index){
  return groupAnswered(index) && (index===0 || (secondLegStarted && groupAnswered(0)));
}
function openBonus(step){
  const index = bonusStages.indexOf(step);
  if (index===1 && missingQuestion(0,3)) return;
  const {start,end} = journeyGroups[index];
  if (missingQuestion(start,end) || !canOpenBonus(index)) return;
  if (!submitted && !checkpoints[index]?.closed){
    if (current!==end-1) go(end-1);
    root.querySelector('[data-check-answers], [data-checkpoint-title]').focus();
    return;
  }
  go(step);
}
function go(s){
  if (s>=3 && s<stations.length && !secondLegStarted) s=2;
  if (bonusStages.includes(s) && !canOpenBonus(bonusStages.indexOf(s))) return;
  current = s;
  save();
  if (current<0){
    window.scrollTo(0,0);
    void launchJourney();
    openingPrologue.querySelector('h2').focus();
    return;
  }
  render();
  window.scrollTo(0,0);
  root.querySelector('h1, h2')?.focus();
}
function alignRiverToCards(){
  const map = nav.parentElement;
  const bounds = map.getBoundingClientRect();
  const centers = [...nav.querySelectorAll('.route-card img')].map(img=>{
    const rect = img.getBoundingClientRect();
    return {x:rect.left+rect.width/2-bounds.left,y:rect.top+rect.height/2-bounds.top,halfWidth:rect.width/2};
  });
  if (centers.length!==routeOrder.length || !bounds.width) return;
  const columns = getComputedStyle(nav).gridTemplateColumns.split(' ').length;
  const [first,...remaining] = centers;
  const path = [`M -32 ${first.y} L ${first.x} ${first.y}`];
  let prev=first;
  for (const [index,point] of remaining.entries()){
    if ((index+1)%columns!==0){
      const direction = Math.sign(point.x-prev.x);
      const exit = prev.x + direction*prev.halfWidth;
      const entry = point.x - direction*point.halfWidth;
      const middle = (exit+entry)/2;
      const ripple = (index%2===0 ? 1 : -1)*Math.min(5,Math.abs(entry-exit)*.13);
      path.push(
        `L ${exit} ${prev.y}`,
        `Q ${(exit+middle)/2} ${prev.y} ${middle} ${(prev.y+point.y)/2+ripple}`,
        `Q ${(middle+entry)/2} ${point.y+ripple*2} ${entry} ${point.y}`,
        `L ${point.x} ${point.y}`
      );
    } else {
      const right = prev.x>bounds.width/2;
      const rail = right ? bounds.width-12 : 12;
      const mid = (prev.y+point.y)/2;
      const control = (point.y-prev.y)*.28;
      path.push(`C ${rail} ${prev.y} ${rail} ${mid-control} ${rail} ${mid} C ${rail} ${mid+control} ${rail} ${point.y} ${point.x} ${point.y}`);
    }
    prev=point;
  }
  const river = map.querySelector('.route-river');
  river.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
  river.querySelector('#river-course').setAttribute('d',path.join(' '));
}

function renderQuestions(station, questions){
  const disabled = q => answerLocked(station,q) ? 'disabled' : '';
  const radio = ([prompt,options,,,context],q)=>`<fieldset id="question-${q}" tabindex="-1"><legend>${q+1}．${prompt}</legend>${context ? `<p class="question-passage">${context}</p>` : ''}${options.map((option,i)=>`<label><input type="radio" name="q-${q}" data-answer="${q}" value="${i}" ${answers[idFor(station,q)]===i?'checked':''} ${disabled(q)}>${station===0||context?`<span><strong>${answerLetter(i)}.</strong> ${option}</span>`:option}</label>`).join('')}</fieldset>`;
  const illustrated = ([prompt, options],q) => `<fieldset id="question-${q}" tabindex="-1" class="picture-question">
    <legend>${q+1}．${prompt}</legend>
    <div class="picture-options">
      ${options.map((option,i)=>{
        const letter = answerLetter(i);
        return `<label class="picture-option">
          ${fuyangOptionImage(i)}
          <span class="picture-option-caption">
            <input type="radio" name="q-${q}" data-answer="${q}" value="${i}" ${answers[idFor(station,q)]===i?'checked':''} ${disabled(q)}>
            <span><strong>${letter}.</strong> ${option}</span>
          </span>
        </label>`;
      }).join('')}
    </div>
  </fieldset>`;
  return questions.map((question,q)=>isFuyangPicture(station,q) ? illustrated(question,q) : radio(question,q)).join('');
}

function answerReview({s,q,id,question:[,options,correct,why,context]}){
  const selected = answers[id];
  const first = checkpoints[Math.floor(s/3)]?.firstAnswers?.[id];
  const changed = Number.isInteger(first) && first!==selected;
  return `${context?`<p class="question-passage">${context}</p>`:''}
    ${changed?`<p><strong>初次答案</strong>　${options[first]}</p>`:''}
    <p><strong>${changed?'訂正答案':'你的答案'}</strong>　${options[selected] ?? '未作答'}</p>
    <p><strong>正解</strong>　${options[correct]}</p>
    <p><strong>解析</strong>　${why}</p>`;
}

function renderAnswerReview(){
  const firstMisses = new Set(checkpoints.flatMap(checkpoint=>[...(checkpoint?.missed ?? []),...(checkpoint?.reviewedMisses ?? [])]));
  const questions = journeyGroups.flatMap((_,index)=>checkpointQuestions(index));
  const wrong = questions.filter(({s,q,id})=>!isCorrect(s,q) || firstMisses.has(id));
  return `<section class="wrong-review" aria-labelledby="wrong-review-title">
      <h3 id="wrong-review-title">錯題詳解</h3>
      ${wrong.length?wrong.map(item=>`<article><p class="wrong-review-meta">${item.name} · 第 ${item.q+1} 題 <strong class="${isCorrect(item.s,item.q)?'review-corrected':'review-incorrect'}">${isCorrect(item.s,item.q)?'已訂正':'答錯'}</strong></p>
        <h4>${item.question[0]}</h4>${answerReview(item)}</article>`).join(''):'<p>全部答對，沒有錯題。</p>'}
    </section>
    <details class="all-answer-review"><summary>查看全部題目與解析</summary>
      ${questions.map(item=>`<details><summary>${item.name} · 第 ${item.q+1} 題 · ${item.question[0]}</summary>${answerReview(item)}</details>`).join('')}
    </details>`;
}

const openingPrologue = document.querySelector('#opening-prologue');
async function playPrologue(prologue){
  const artwork = prologue.querySelector('.prologue-art');
  try { await artwork.decode(); } catch {}
  prologue.classList.replace('is-waiting','is-playing');
  if (getComputedStyle(artwork).animationName==='none') return;
  // The camera movement is the last animation in the opening.
  await new Promise(resolve=>{
    artwork.addEventListener('animationend',resolve,{once:true});
    artwork.addEventListener('animationcancel',resolve,{once:true});
  });
}

async function launchJourney(){
  document.body.classList.add('is-opening');
  openingPrologue.hidden = false;
  openingPrologue.classList.remove('is-playing');
  openingPrologue.classList.add('is-waiting');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches){
    syncMusic();
    const continueButton = document.querySelector('#continue-opening');
    continueButton.hidden = false;
    await new Promise(resolve=>continueButton.addEventListener('click',resolve,{once:true}));
    continueButton.hidden = true;
  } else {
    if (musicEnabled) {
      try { await music.play(); } catch (error) {
        if (error.name==='NotAllowedError') {
          const startButton = document.querySelector('#start-opening');
          startButton.hidden = false;
          await new Promise(resolve=>startButton.addEventListener('click',()=>{
            const playback = music.play().catch(updateMusicButton);
            startButton.hidden = true;
            resolve(playback);
          },{once:true}));
        }
      }
    }
    await playPrologue(openingPrologue);
  }
  document.body.classList.remove('is-opening');
  render();
}

function render(){
  unmountBlocks?.();
  unmountBlocks=undefined;
  stopScene();
  openingPrologue.hidden = current>=0;
  if (current < 0) root.after(route);
  else root.before(route);
  nav.innerHTML = routeOrder.map(step=>{
    const index = bonusStages.indexOf(step);
    const name = index<0 ? stations[step][0] : bonusStops[index];
    const photo = index<0 ? photos[step] : bonusImages[index];
    const badge = index<0 ? step+1 : index===0 ? '中繼' : '終點';
    return `<button type="button" class="route-stop ${index<0?'':'route-bonus'}" data-station="${step}" ${current===step?'aria-current="step"':''}><span class="route-card"><span class="route-dot" aria-hidden="true">${badge}</span><img src="${photo}" alt="" width="832" height="466"><span class="route-label"><span>${name}</span><small></small></span></span></button>`;
  }).join('');
  if (current < 0){
    root.innerHTML = `<section class="lesson-cover" aria-labelledby="lesson-title">
      <div class="lesson-cover-content">
        <p class="lesson-cover-author">吳均寫給宋元思的一封信</p>
        <h1 id="lesson-title" tabindex="-1">與宋元思書</h1>
        <p class="lesson-cover-mission">你一心求取功名，案上的公文卻怎麼也批不完。從富陽登舟，一路讀課文、看山水，每答對一題，俗事纏心值就降 ${questionPoints} 點。</p>
        <dl class="lesson-cover-metrics">
          <div><dt>俗事纏心值</dt><dd>100 <small>點起算</small></dd></div>
          <div><dt>通過門檻</dt><dd>${purificationLimit} <small>點或更低</small></dd></div>
        </dl>
        <p class="lesson-cover-instructions"><strong>一節課內完成六關閱讀、兩個小遊戲，滿分 100 分。</strong><br>交卷後截圖上傳成績，也可以查看錯題詳解。</p>
        <button class="primary lesson-cover-start" type="button" data-go="0">登舟，從富陽啟航 <span aria-hidden="true">→</span></button>
      </div>
      <figure class="lesson-cover-landscape">
        <img src="opening-scroll.jpg" alt="清朗的富春江上，一葉小舟駛過青山與碧水">
        <figcaption><blockquote>
          <span>風煙俱淨，天山共色。</span>
          <span>從流飄蕩，任意東西。</span>
          <span>自富陽至桐廬，一百許里。</span>
          <span>奇山異水，天下獨絕。</span>
        </blockquote></figcaption>
      </figure>
    </section>
    <section class="grading" aria-labelledby="grading-title">
      <h2 id="grading-title">配分說明</h2>
      <p><strong>第 1～3 關 → ${bonusStops[0]}</strong><br>15 題 × 3 分＝45 分 ＋ ${bonusNames[0]} 5 分＝50 分</p>
      <p><strong>第 4～6 關 → ${bonusStops[1]}</strong><br>15 題 × 3 分＝45 分 ＋ ${bonusNames[1]} 5 分＝50 分</p>
      <p>每關 5 題。閱讀題答對一題，俗事纏心值減 3 點。第 3、6 關各有一次檢核，可查看該段得分並重答錯題。方塊每消除 5 行減 1 點，最多減 5 點。水管通關減 5 點。全程滿分 100 分。</p>
      <p><strong>通過條件</strong>　交卷時，俗事纏心值須降到 ${purificationLimit} 點或以下。</p>
    </section>`;
  } else if (current === stations.length){
    const {groups,correct,value} = journeyStatus();
    const passed = value<=purificationLimit;
    const journeyOutcome = `<div class="journey-outcome${passed?'':' is-unsuccessful'}">
      <strong>${passed?'淨化成功，通過':'淨化失敗，未通過'}</strong>
      <p>俗事纏心值還有 ${displayPoints(value)} 點。通過門檻為 ${purificationLimit} 點或以下。</p>
      ${value===0?'<p>望峰息心，窺谷忘返。</p>':''}
    </div>`;
    root.innerHTML = `<section class="results"><h2 tabindex="-1">遊江成績</h2>${journeyOutcome}<p class="score">${100-value}<small> / 100</small></p><p>答對 ${correct} / ${total} 題</p>${groups.map((group,i)=>`<p>${group.stages}｜閱讀 ${group.reading} / 45 分 · ${bonusNames[i]} ${group.bonus} / 5 分 ${group.bonus===gamePoints?'':`<button data-bonus-jump="${bonusStages[i]}">繼續遊戲</button>`}</p>`).join('')}${renderAnswerReview()}<button class="primary" data-reset>重新啟航</button></section>`;
  } else if (bonusStages.includes(current)) {
    const index = bonusStages.indexOf(current);
    const onward = submitted
      ? `<button class="primary" data-go="${stations.length}">回到成績</button>`
      : index===0
        ? '<button class="primary" data-next-leg>前往第 4 關「山林聽聲」</button>'
        : '<button class="primary" data-submit>交卷</button>';
    root.innerHTML = `<div class="bonus-slot"></div><footer><button data-go="${index===0?2:5}">回第 ${index===0?3:6} 關</button>${onward}</footer>`;
  } else {
    const [name,type,passage,questions] = stations[current];
    root.innerHTML = `<section class="station"><header><p class="eyebrow">第 ${current+1} 站 / 共 ${stations.length} 站</p><h2 tabindex="-1">${name}</h2><p>${type} · ${questions.length} 題，每答對一題，俗事纏心值會降低${questionPoints}點</p></header><div class="columns"><div class="scene">${sceneFigure(current)}<div class="scene-reading"><h3>原文</h3><p class="scene-passage">${passage}</p><h3>翻譯</h3><p class="scene-translation">${stationTranslations[current]}</p></div></div><div class="questions">${renderQuestions(current,questions)}</div></div>${checkpointIndex(current)>=0 ? '<section class="reading-checkpoint" data-checkpoint aria-label="題目總淨化值"></section>' : ''}<footer>${current>0?`<button data-go="${current-1}">前往${stations[current-1][0]}</button>`:''}${current===2?`<button class="primary" data-bonus-jump="${bonusStages[0]}">前往${bonusStops[0]}</button>`:current===5?`<button class="primary" data-bonus-jump="${bonusStages[1]}">前往${bonusStops[1]}</button>`:`<button class="primary" data-go="${current+1}">前往${stations[current+1][0]}</button>`}</footer></section>`;
  }
  syncMusic();
  updateProgress();
  alignRiverToCards();
  if (current >= 0 && current < stations.length){
    void playScene(current, current === 3);
  }
}
function missingQuestion(start=0,end=stations.length){
  for (let s=start;s<end;s++){
    const q=stations[s][3].findIndex((_,i)=>!has(s,i));
    if(q<0) continue;
    if(current!==s) go(s);
    document.querySelector('#question-'+q).focus();
    return true;
  }
  return false;
}
nav.addEventListener('click', event=>{
  const button=event.target.closest('[data-station]');
  if (!button) return;
  const step = Number(button.dataset.station);
  if (bonusStages.includes(step)) openBonus(step);
  else go(step);
});
const openingDialog = document.querySelector('#opening-dialog');
document.querySelector('#replay-opening').addEventListener('click',()=>{
  stopScene();
  openingDialog.classList.remove('is-playing');
  openingDialog.classList.add('is-waiting');
  openingDialog.innerHTML = `<h2 class="prologue-title" id="opening-dialog-title">俗事纏心</h2>
    ${openingPrologue.querySelector('.prologue-scene').outerHTML}
    <div class="prologue-invitation">${openingPrologue.querySelector('.prologue-invitation p').outerHTML}</div>
    <form method="dialog" class="prologue-dismiss"><button autofocus>關閉動畫</button></form>`;
  openingDialog.showModal();
  void playPrologue(openingDialog);
});
root.addEventListener('change', event=>{
  const input=event.target;
  if (input.matches('[data-retry-answer]')){
    const checkpoint = checkpoints[checkpointIndex(current)];
    const id = input.dataset.retryAnswer;
    if (!submitted && checkpoint && !pendingQuestions(checkpoint).length && !checkpoint.closed && checkpoint.missed.includes(id)){
      checkpoint.drafts[id] = Number(input.value);
      save();
    }
    return;
  }
  if(!input.matches('[data-answer]')) return;
  const question = Number(input.dataset.answer);
  if (answerLocked(current,question)) return;
  answers[idFor(current,question)] = Number(input.value);
  save();
  updateProgress();
});
root.addEventListener('submit',event=>{
  if (!event.target.matches('[data-checkpoint-retry]')) return;
  event.preventDefault();
  finishRetry(true);
});
root.addEventListener('click',event=>{
  const button=event.target.closest('button');
  if(!button) return;
  if(button.hasAttribute('data-go')) go(Number(button.dataset.go));
  if(button.hasAttribute('data-pipe')) rotatePipe(Number(button.dataset.pipe));
  if (button.hasAttribute('data-bonus-jump')) openBonus(Number(button.dataset.bonusJump));
  if (button.hasAttribute('data-next-leg') && current===bonusStages[0] && groupAnswered(0)){
    secondLegStarted=true;
    go(3);
  }
  if(button.hasAttribute('data-play-scene')){
    if(scenePlayback) stopScene();
    else void playScene(current,true);
  }
  if(button.hasAttribute('data-forest-sound')){
    stopScene();
    const index = Number(button.dataset.forestSound);
    root.querySelector('[data-sound-status]').textContent = '播放'+soundLabels[index];
    void playForestSound(index);
  }
  if(button.hasAttribute('data-silence')) stopScene();
  if(button.hasAttribute('data-missing')) missingQuestion();
  if(button.hasAttribute('data-check-answers')) checkReading();
  if(button.hasAttribute('data-skip-retry')) finishRetry(false);
  if(button.hasAttribute('data-submit') && current===bonusStages[1] && !missingQuestion()){
    const pending = checkpoints.findIndex(checkpoint=>!checkpoint?.closed);
    if (pending>=0){
      go(journeyGroups[pending].end-1);
      root.querySelector('[data-checkpoint] button, [data-checkpoint-title]').focus();
      return;
    }
    submitted=true;
    go(stations.length);
  }
  if(button.hasAttribute('data-reset') && confirm('要清除這一趟的作答紀錄並重新開始嗎？')){
    answers={};
    blocksLines=0;
    secondLegStarted=false;
    pipeTurns=[1,1,0,2,1,0,0,2,2];
    submitted=false;
    checkpoints=[null,null];
    go(-1);
  }
});
root.addEventListener('contextmenu',event=>{
  const target=event.target.closest('[data-pipe]');
  if(!target) return;
  event.preventDefault();
  rotatePipe(Number(target.dataset.pipe),-1);
});
if (!secondLegStarted && current>=3 && current<stations.length) current=2;
if (bonusStages.includes(current)){
  const index = bonusStages.indexOf(current);
  if (!canOpenBonus(index) || (!submitted && !checkpoints[index]?.closed)) current=secondLegStarted?journeyGroups[index].end-1:2;
}
void launchJourney();
const routeObserver = new ResizeObserver(alignRiverToCards);
routeObserver.observe(nav);
