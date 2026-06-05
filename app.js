/* ============================================================
   本草岁时记 · 二十四节气与中药  —  H5主逻辑
   ============================================================ */

;(function () {
  "use strict";

  /* ---------- 24 节气 + 中药数据 ---------- */
  var TERMS = [
    // ===== 春 =====
    { name:"立春", pinyin:"Li Chun", season:"春", dateRange:"2月3日—5日",
      summary:"春季的开始，万物复苏，天地渐暖。",
      keywords:["春回","萌芽","东风"],
      nature:"东风解冻，蛰虫始振，鱼陟负冰。",
      farming:"农事开始筹备，规划春耕、整理田地。",
      customs:"迎春、咬春、吃春饼、贴春联。",
      poem:"律回岁晚冰霜少，春到人间草木知。",
      effect:"petals",
      image:"assets/solar-terms/lichun.png",
      herb:"苦苣", herbTag:"败酱类野菜",
      herbDesc:"苦苣，即苦菜，中药材败酱类野菜，可入药。性味苦寒，清热解毒，凉血止痢。春食苦苣，顺应生发之气。",
      herbIcon:"🌿",
      herbImage:"assets/herbs/lichun-herb.png" },

    { name:"雨水", pinyin:"Yu Shui", season:"春", dateRange:"2月18日—20日",
      summary:"降雨开始，雨量渐增，润泽万物。",
      keywords:["春雨","润泽","生长"],
      nature:"冰雪融化，降水增多，草木萌发。",
      farming:"冬小麦返青，油菜抽薹，追肥灌溉。",
      customs:"女婿探望岳父岳母，送节礼；爆米花。",
      poem:"好雨知时节，当春乃发生。",
      effect:"rain",
      image:"assets/solar-terms/yushui.png",
      herb:"桃", herbTag:"桃仁入药",
      herbDesc:"桃仁为常用中药，性味苦甘平，活血祛瘀，润肠通便。桃花亦可入药，利水消肿。雨水时节桃花始开。",
      herbIcon:"🌸",
      herbImage:"assets/herbs/yushui-herb.png" },

    { name:"惊蛰", pinyin:"Jing Zhe", season:"春", dateRange:"3月5日—7日",
      summary:"春雷乍动，惊醒蛰伏的万物。",
      keywords:["春雷","惊醒","虫动"],
      nature:"春雷响，蛰虫出，桃花开，黄鹂鸣。",
      farming:"开始春播，种瓜点豆，小麦返青。",
      customs:"吃梨寓意离别害虫；祭白虎化解是非。",
      poem:"微雨众卉新，一雷惊蛰始。",
      effect:"thunder",
      image:"assets/solar-terms/jingzhe.png",
      herb:"竹笋", herbTag:"竹茹入药",
      herbDesc:"竹茹为竹茎的中间层，性味甘微寒，清热化痰、除烦止呕。竹笋亦可食用，清热消痰。惊蛰竹笋破土而出。",
      herbIcon:"🎋",
      herbImage:"assets/herbs/jingzhe-herb.png" },

    { name:"春分", pinyin:"Chun Fen", season:"春", dateRange:"3月20日—22日",
      summary:"昼夜等长，春色过半，万物蓬勃。",
      keywords:["昼夜平分","花期","燕归"],
      nature:"玄鸟至，雷乃发声，始电。百花齐放。",
      farming:"早稻育秧，春玉米播种，果树嫁接。",
      customs:"竖蛋游戏；吃春菜、喝春汤；放风筝。",
      poem:"雪入春分省见稀，半开桃李不胜威。",
      effect:"petals",
      image:"assets/solar-terms/chunfen.png",
      herb:"蒲公英", herbTag:"清热解毒中药",
      herbDesc:"蒲公英，经典清热解毒中药。性味苦甘寒，清热解毒、消肿散结、利尿通淋。春分时节蒲公英遍地开花。",
      herbIcon:"🌼",
      herbImage:"assets/herbs/chunfen-herb.png" },

    { name:"清明", pinyin:"Qing Ming", season:"春", dateRange:"4月4日—6日",
      summary:"天清地明，春和景明，宜祭扫踏青。",
      keywords:["祭扫","踏青","柳绿"],
      nature:"桐始华，田鼠化为鴽，虹始见。",
      farming:"播种棉花、花生，水稻浸种催芽。",
      customs:"扫墓祭祖、踏青郊游、插柳戴柳、吃青团。",
      poem:"清明时节雨纷纷，路上行人欲断魂。",
      effect:"mist",
      image:"assets/solar-terms/qingming.png",
      herb:"青梅", herbTag:"乌梅原料",
      herbDesc:"青梅为乌梅原料，经熏制后入药。乌梅性味酸涩平，敛肺止咳、涩肠止泻、安蛔止痛。清明青梅初结。",
      herbIcon:"🟢",
      herbImage:"assets/herbs/qingming-herb.png" },

    { name:"谷雨", pinyin:"Gu Yu", season:"春", dateRange:"4月19日—21日",
      summary:"雨量充沛，谷物得雨而生长。",
      keywords:["雨生百谷","牡丹","浮萍"],
      nature:"萍始生，鸣鸠拂其羽，戴胜降于桑。",
      farming:"水稻插秧，棉花播种，春茶采摘。",
      customs:"赏牡丹、走谷雨、喝谷雨茶、祭海。",
      poem:"正好清明连谷雨，一杯香茗坐其间。",
      effect:"rain",
      image:"assets/solar-terms/guyu.png",
      herb:"红苋菜", herbTag:"苋菜全草入药",
      herbDesc:"苋实、苋菜全草均可入药。性味甘凉，清热利湿、凉血止血。谷雨时节苋菜鲜嫩，正是食用佳期。",
      herbIcon:"🥬",
      herbImage:"assets/herbs/guyu-herb.png" },

    // ===== 夏 =====
    { name:"立夏", pinyin:"Li Xia", season:"夏", dateRange:"5月5日—7日",
      summary:"夏季开始，万物繁茂，气温升高。",
      keywords:["入夏","蛙鸣","蚕熟"],
      nature:"蝼蝈鸣，蚯蚓出，王瓜生。槐花盛开。",
      farming:"早稻插秧完毕，冬小麦灌浆成熟。",
      customs:"吃立夏蛋、称人、尝三新、喝立夏茶。",
      poem:"绿阴铺野换新光，薰风初昼长。",
      effect:"firefly",
      image:"assets/solar-terms/lixia.png",
      herb:"桑叶", herbTag:"疏风散热中药",
      herbDesc:"桑叶性味苦甘寒，疏风散热、清肺润燥、清肝明目。桑树全身是宝，桑葚、桑枝、桑白皮均可入药。",
      herbIcon:"🍃",
      herbImage:"assets/herbs/lixia-herb.png" },

    { name:"小满", pinyin:"Xiao Man", season:"夏", dateRange:"5月20日—22日",
      summary:"麦类等夏熟作物籽粒渐饱满，但未成熟。",
      keywords:["麦穗","将满","蚕结茧"],
      nature:"苦菜秀，靡草死，麦秋至。蚕结新茧。",
      farming:"冬小麦乳熟期，水稻栽插，蚕茧收获。",
      customs:"祭车神、吃苦菜、抢水灌田。",
      poem:"梅子金黄杏子肥，麦花雪白菜花稀。",
      effect:"petals",
      image:"assets/solar-terms/xiaoman.png",
      herb:"珍珠", herbTag:"名贵中药材",
      herbDesc:"珍珠粉为名贵中药材，性味甘咸寒，安神定惊、明目消翳、解毒生肌。小满时节河蚌育珠正当时。",
      herbIcon:"💎",
      herbImage:"assets/herbs/xiaoman-herb.png" },

    { name:"芒种", pinyin:"Mang Zhong", season:"夏", dateRange:"6月5日—7日",
      summary:"有芒的作物应收，有芒的作物当种。",
      keywords:["忙种","梅雨","螳螂生"],
      nature:"螳螂生，鵙始鸣，反舌无声。梅雨来临。",
      farming:"抢收小麦，抢种水稻，忙于夏播。",
      customs:"送花神、煮青梅、打泥巴仗。",
      poem:"时雨及芒种，四野皆插秧。",
      effect:"rain",
      image:"assets/solar-terms/mangzhong.png",
      herb:"玫瑰花", herbTag:"理气活血中药",
      herbDesc:"玫瑰花性味甘微苦温，理气解郁、活血散瘀、调经止痛。芒种时节玫瑰盛开，正是采收好时节。",
      herbIcon:"🌹",
      herbImage:"assets/herbs/mangzhong-herb.png" },

    { name:"夏至", pinyin:"Xia Zhi", season:"夏", dateRange:"6月21日—22日",
      summary:"白昼最长，阳气最盛，万物极盛。",
      keywords:["最长日","蝉鸣","荷开"],
      nature:"鹿角解，蝉始鸣，半夏生。荷花盛开。",
      farming:"水稻分蘖，棉花现蕾，果园夏季管理。",
      customs:"吃夏至面、称重、消夏避伏。",
      poem:"昼晷已云极，宵漏自此长。",
      effect:"firefly",
      image:"assets/solar-terms/xiazhi.png",
      herb:"枇杷", herbTag:"枇杷叶入药",
      herbDesc:"枇杷叶性味苦微寒，清肺止咳、降逆止呕。枇杷果润肺止咳。夏至枇杷金黄，正是成熟季节。",
      herbIcon:"🍊",
      herbImage:"assets/herbs/xiazhi-herb.png" },

    { name:"小暑", pinyin:"Xiao Shu", season:"夏", dateRange:"7月6日—8日",
      summary:"天气开始炎热，但还未到最热。",
      keywords:["温风至","蟋蟀","鹰始鸷"],
      nature:"温风至，蟋蟀居壁，鹰始鸷。茉莉飘香。",
      farming:"早稻抽穗扬花，棉花开花结铃。",
      customs:"晒伏晒书、吃藕、喝绿豆汤。",
      poem:"倏忽温风至，因循小暑来。",
      effect:"rain",
      image:"assets/solar-terms/xiaoshu.png",
      herb:"龙眼", herbTag:"补益类中药",
      herbDesc:"桂圆肉即龙眼肉，性味甘温，补益心脾、养血安神。小暑时节龙眼成熟，鲜食甘甜，干制入药。",
      herbIcon:"🟤",
      herbImage:"assets/herbs/xiaoshu-herb.png" },

    { name:"大暑", pinyin:"Da Shu", season:"夏", dateRange:"7月22日—24日",
      summary:"一年中最热的时节，万物蒸煮。",
      keywords:["极热","腐草为萤","土润"],
      nature:"腐草为萤，土润溽暑，大雨时行。",
      farming:"水稻孕穗，秋菜播种，畜牧防暑降温。",
      customs:"喝伏茶、晒伏姜、烧伏香、吃仙草。",
      poem:"赤日几时过，清风无处寻。",
      effect:"firefly",
      image:"assets/solar-terms/dashu.png",
      herb:"藿香", herbTag:"解暑化湿核心中药",
      herbDesc:"藿香性味辛微温，芳香化浊、和中止呕、发表解暑。大暑酷热，藿香正气水正是解暑良药。",
      herbIcon:"🌿",
      herbImage:"assets/herbs/dashu-herb.png" },

    // ===== 秋 =====
    { name:"立秋", pinyin:"Li Qiu", season:"秋", dateRange:"8月7日—9日",
      summary:"秋季开始，暑去凉来，万物收成。",
      keywords:["凉风至","白露降","寒蝉鸣"],
      nature:"凉风至，白露降，寒蝉鸣。梧桐叶落。",
      farming:"水稻灌浆，棉花吐絮，秋收作物后期管理。",
      customs:"贴秋膘、咬秋、晒秋。",
      poem:"乳鸦啼散玉屏空，一枕新凉一扇风。",
      effect:"leaf",
      image:"assets/solar-terms/liqiu.png",
      herb:"槐角", herbTag:"槐树果实入药",
      herbDesc:"槐角为槐树果实，性味苦寒，凉血止血、清肝明目。槐花亦入药，清热凉血。立秋槐实渐熟。",
      herbIcon:"🌳",
      herbImage:"assets/herbs/liqiu-herb.png" },

    { name:"处暑", pinyin:"Chu Shu", season:"秋", dateRange:"8月22日—24日",
      summary:"暑气渐消，秋意渐浓。",
      keywords:["暑退","鹰祭鸟","天地肃"],
      nature:"鹰乃祭鸟，天地始肃，禾乃登。天高云淡。",
      farming:"水稻成熟收获，秋播备耕，果园秋季管理。",
      customs:"放河灯、开渔节、吃鸭子。",
      poem:"处暑无三日，新凉直万金。",
      effect:"leaf",
      image:"assets/solar-terms/chushu.png",
      herb:"荸荠", herbTag:"地下球茎入药",
      herbDesc:"荸荠性味甘寒，清热生津、化痰消积。地下球茎入药，亦可生食。处暑时节荸荠开始上市。",
      herbIcon:"🟫",
      herbImage:"assets/herbs/chushu-herb.png" },

    { name:"白露", pinyin:"Bai Lu", season:"秋", dateRange:"9月7日—9日",
      summary:"天气转凉，露凝而白，秋意深沉。",
      keywords:["露珠","鸿雁来","玄鸟归"],
      nature:"鸿雁来，玄鸟归，群鸟养羞。桂花飘香。",
      farming:"秋收大忙，水稻收割，冬小麦备播。",
      customs:"收清露、喝白露茶、吃龙眼、酿白露酒。",
      poem:"蒹葭苍苍，白露为霜。",
      effect:"mist",
      image:"assets/solar-terms/bailu.png",
      herb:"龙眼", herbTag:"桂圆肉入药",
      herbDesc:"桂圆肉性味甘温，补益心脾、养血安神。白露时节龙眼正当时令，民间有白露食龙眼习俗。",
      herbIcon:"🟤",
      herbImage:"assets/herbs/bailu-herb.png" },

    { name:"秋分", pinyin:"Qiu Fen", season:"秋", dateRange:"9月22日—24日",
      summary:"昼夜再次等长，秋色已半。",
      keywords:["昼夜等长","雷始收声","蛰虫坯户"],
      nature:"雷始收声，蛰虫坯户，水始涸。丹桂飘香。",
      farming:"秋收秋种并行，冬小麦播种，果园采收。",
      customs:"竖蛋、吃秋菜、送秋牛。",
      poem:"金气秋分，风清露冷秋期半。",
      effect:"leaf",
      image:"assets/solar-terms/qiufen.png",
      herb:"无花果", herbTag:"果实入药",
      herbDesc:"无花果性味甘平，健脾开胃、解毒消肿、润肠通便。秋分时节无花果成熟，鲜食药用皆宜。",
      herbIcon:"🟣",
      herbImage:"assets/herbs/qiufen-herb.png" },

    { name:"寒露", pinyin:"Han Lu", season:"秋", dateRange:"10月8日—9日",
      summary:"露水更凉，秋意更深，万物萧瑟。",
      keywords:["鸿雁来宾","菊有黄华","雀入水"],
      nature:"鸿雁来宾，雀入大水为蛤，菊有黄华。",
      farming:"秋收扫尾，冬小麦出苗，油菜移栽。",
      customs:"登高赏菊、饮菊花酒、吃花糕。",
      poem:"袅袅凉风动，凄凄寒露零。",
      effect:"mist",
      image:"assets/solar-terms/hanlu.png",
      herb:"枸杞", herbTag:"滋补肝肾中药",
      herbDesc:"枸杞子性味甘平，滋补肝肾、益精明目。寒露时节枸杞红透，正是采收佳期。宁夏枸杞最为道地。",
      herbIcon:"🔴",
      herbImage:"assets/herbs/hanlu-herb.png" },

    { name:"霜降", pinyin:"Shuang Jiang", season:"秋", dateRange:"10月23日—24日",
      summary:"天气渐冷，初霜出现，秋将尽。",
      keywords:["霜始降","草木黄落","蛰虫咸俯"],
      nature:"豺乃祭兽，草木黄落，蛰虫咸俯。柿子红透。",
      farming:"红薯收获，冬小麦分蘖，果园清园。",
      customs:"吃柿子、赏红叶、进补、扫墓祭祖。",
      poem:"霜降碧天静，秋事促西风。",
      effect:"frost",
      image:"assets/solar-terms/shuangjiang.png",
      herb:"柿子·核桃", herbTag:"药食同源",
      herbDesc:"柿蒂降逆止呕，柿霜清热润燥。核桃仁补肾温肺、润肠通便。霜降柿红核桃熟，皆为药食佳品。",
      herbIcon:"🟠",
      herbImage:"assets/herbs/shuangjiang-herb.png" },

    // ===== 冬 =====
    { name:"立冬", pinyin:"Li Dong", season:"冬", dateRange:"11月7日—8日",
      summary:"冬季开始，万物收藏，天地闭塞。",
      keywords:["水始冰","地始冻","雉入大水"],
      nature:"水始冰，地始冻，雉入大水为蜃。",
      farming:"秋收完毕，农田水利建设，果树冬季修剪。",
      customs:"补冬、吃饺子、酿黄酒。",
      poem:"冻笔新诗懒写，寒炉美酒时温。",
      effect:"snow",
      image:"assets/solar-terms/lidong.png",
      herb:"桃花", herbTag:"活血化瘀中药",
      herbDesc:"桃花性味苦平，活血化瘀、润肠通便、利水消肿。立冬虽寒，桃花入药可温通血脉，冬藏养生。",
      herbIcon:"🌸",
      herbImage:"assets/herbs/lidong-herb.png" },

    { name:"小雪", pinyin:"Xiao Xue", season:"冬", dateRange:"11月22日—23日",
      summary:"气温下降，开始降雪，但雪量不大。",
      keywords:["虹藏不见","天气上升","闭塞成冬"],
      nature:"虹藏不见，天气上升地气下降，闭塞而成冬。",
      farming:"冬小麦镇压保墒，果树防寒，储藏蔬菜。",
      customs:"腌咸菜、吃糍粑、晒鱼干、吃刨汤。",
      poem:"花雪随风不厌看，更多还肯失林峦。",
      effect:"snow",
      image:"assets/solar-terms/xiaoxue.png",
      herb:"蓝莓(乌饭果)", herbTag:"滋阴明目",
      herbDesc:"乌饭果即南烛子，性味酸甘平，益肾固精、强筋骨。蓝莓富含花青素，明目抗氧化。小雪时节可食。",
      herbIcon:"🫐",
      herbImage:"assets/herbs/xiaoxue-herb.png" },

    { name:"大雪", pinyin:"Da Xue", season:"冬", dateRange:"12月6日—8日",
      summary:"雪量增大，天气更冷，大地银装素裹。",
      keywords:["鹖鴠不鸣","虎始交","荔挺出"],
      nature:"鹖鴠不鸣，虎始交，荔挺出。梅花初绽。",
      farming:"农田冬灌，牲畜防寒保暖，温室蔬菜管理。",
      customs:"进补、腌肉、赏雪、吃红薯。",
      poem:"大雪江南见未曾，今年方始是严凝。",
      effect:"snow",
      image:"assets/solar-terms/daxue.png",
      herb:"人参", herbTag:"大补元气中药",
      herbDesc:"人参性味甘微苦微温，大补元气、复脉固脱、补脾益肺。大雪进补正当时，人参为冬令滋补上品。",
      herbIcon:"🌱",
      herbImage:"assets/herbs/daxue-herb.png" },

    { name:"冬至", pinyin:"Dong Zhi", season:"冬", dateRange:"12月21日—23日",
      summary:"白昼最短，黑夜最长，阴极阳生。",
      keywords:["最长夜","蚯蚓结","麋角解"],
      nature:"蚯蚓结，麋角解，水泉动。数九寒天开始。",
      farming:"农闲时节，兴修水利，积肥备耕。",
      customs:"吃饺子、吃汤圆、祭天祭祖、数九。",
      poem:"天时人事日相催，冬至阳生春又来。",
      effect:"snow",
      image:"assets/solar-terms/dongzhi.png",
      herb:"山药", herbTag:"药食两用佳品",
      herbDesc:"山药性味甘平，补脾养胃、生津益肺、补肾涩精。冬至进补山药为佳，药食两用，老少皆宜。",
      herbIcon:"🟤",
      herbImage:"assets/herbs/dongzhi-herb.png" },

    { name:"小寒", pinyin:"Xiao Han", season:"冬", dateRange:"1月5日—7日",
      summary:"天气寒冷，但未到极点。",
      keywords:["雁北乡","鹊始巢","雉始鸲"],
      nature:"雁北乡，鹊始巢，雉始鸲。梅花盛开。",
      farming:"果树冬季修剪，积肥造肥，大棚蔬菜管理。",
      customs:"喝腊八粥、吃糯米饭、探梅。",
      poem:"小寒连大吕，欢鹊垒新巢。",
      effect:"snow",
      image:"assets/solar-terms/xiaohan.png",
      herb:"当归", herbTag:"补血活血中药",
      herbDesc:"当归性味甘辛温，补血活血、调经止痛、润肠通便。小寒严寒，当归炖汤温补气血，为冬令进补良药。",
      herbIcon:"🌿",
      herbImage:"assets/herbs/xiaohan-herb.png" },

    { name:"大寒", pinyin:"Da Han", season:"冬", dateRange:"1月20日—21日",
      summary:"一年中最冷的时节，寒极将春。",
      keywords:["鸡乳","征鸟厉疾","水泽腹坚"],
      nature:"鸡乳，征鸟厉疾，水泽腹坚。坚冰深处春水生。",
      farming:"积肥备耕，兴修水利，检修农具准备春耕。",
      customs:"尾牙祭、扫尘、贴年红、准备年货。",
      poem:"大寒须遣酒争频，莫厌杯柈到手巡。",
      effect:"frost",
      image:"assets/solar-terms/dahan.png",
      herb:"淡竹·大枣", herbTag:"清热与补血",
      herbDesc:"淡竹叶清热除烦、利尿通淋。大枣补中益气、养血安神。大寒煮红枣粥，温补脾胃，迎接新春。",
      herbIcon:"🎋",
      herbImage:"assets/herbs/dahan-herb.png" }
  ];

  /* ---------- 季节配置 ---------- */
  var SEASONS = {
    "春": { char:"春", subtitle:"万物生发", color:"#6bb86b", bg:"spring" },
    "夏": { char:"夏", subtitle:"繁茂极盛", color:"#e8b84b", bg:"summer" },
    "秋": { char:"秋", subtitle:"收获收藏", color:"#c88040", bg:"autumn" },
    "冬": { char:"冬", subtitle:"闭塞成冬", color:"#6080a0", bg:"winter" }
  };

  var SEASON_ORDER = ["春","夏","秋","冬"];

  /* ---------- DOM References ---------- */
  var $loading      = document.getElementById("loading");
  var $loadingBar   = document.getElementById("loadingBar");
  var $loadingTip   = document.getElementById("loadingTip");
  var $app          = document.getElementById("app");
  var $swiperWrapper= document.getElementById("swiperWrapper");
  var $currentPage  = document.getElementById("currentPage");
  var $seasonBadge  = document.getElementById("seasonBadge");
  var $particles    = document.getElementById("particles");
  var $swipeHint    = document.getElementById("swipeHint");
  var $musicBtn     = document.getElementById("musicBtn");

  /* ---------- State ---------- */
  var swiper = null;
  var particleTimer = null;
  var currentEffect = null;

  /* ---------- Loading ---------- */
  var tips = ["采集中...","识本草...","循四时...","观物候...","集药方..."];
  var progress = 0;
  var loadedCount = 0;
  var totalImages = TERMS.length; // 24 term images

  function updateLoading(pct, tip) {
    $loadingBar.style.width = pct + "%";
    if (tip) $loadingTip.textContent = tip;
  }

  // Preload images (节气图 + 中药图)
  function preloadImages() {
    var loaded = 0;
    var total = TERMS.length * 2; // 24 term + 24 herb

    TERMS.forEach(function(t, i) {
      // 预加载节气图
      var img = new Image();
      img.onload = img.onerror = function() {
        loaded++;
        var pct = Math.round((loaded / total) * 100);
        var tipIdx = Math.floor((loaded / total) * tips.length);
        updateLoading(pct, tips[Math.min(tipIdx, tips.length - 1)]);

        if (loaded >= total) {
          setTimeout(startApp, 500);
        }
      };
      img.src = t.image;

      // 预加载中药图
      var herbImg = new Image();
      herbImg.onload = herbImg.onerror = function() {
        loaded++;
        var pct = Math.round((loaded / total) * 100);
        var tipIdx = Math.floor((loaded / total) * tips.length);
        updateLoading(pct, tips[Math.min(tipIdx, tips.length - 1)]);
        if (loaded >= total) {
          setTimeout(startApp, 500);
        }
      };
      herbImg.src = t.herbImage;
    });

    // Fallback: if images fail to load, start after 3s
    setTimeout(function() {
      if (loaded < total) startApp();
    }, 3000);
  }

  function startApp() {
    updateLoading(100, "准备就绪");
    setTimeout(function() {
      $loading.classList.add("is-hidden");
      $app.style.display = "block";
      buildSwiper();
      startParticles(TERMS[0].effect);
    }, 400);
  }

  /* ---------- Build Swiper Slides ---------- */
  function buildSwiper() {
    var frag = document.createDocumentFragment();
    var lastSeason = "";

    TERMS.forEach(function(t, i) {
      // Season divider page
      if (t.season !== lastSeason) {
        lastSeason = t.season;
        var seasonTerms = TERMS.filter(function(s) { return s.season === t.season; });
        var divSlide = createSeasonDivider(t.season, seasonTerms);
        frag.appendChild(divSlide);
      }

      // Term page
      var slide = createTermPage(t, i);
      frag.appendChild(slide);
    });

    $swiperWrapper.appendChild(frag);

    // Init Swiper
    swiper = new Swiper('#mainSwiper', {
      direction: 'vertical',
      speed: 800,
      mousewheel: true,
      keyboard: { enabled: true },
      on: {
        slideChange: onSlideChange,
        slideChangeTransitionEnd: onSlideChangeEnd
      }
    });
  }

  /* ---------- Create Season Divider ---------- */
  function createSeasonDivider(season, terms) {
    var conf = SEASONS[season];
    var slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.setAttribute("data-type", "season");
    slide.setAttribute("data-season", season);

    var termNames = terms.map(function(t) { return t.name; }).join(" · ");

    slide.innerHTML =
      '<div class="season-divider">' +
        '<div class="season-divider__bg" style="background-image:url(' + terms[0].image + ')"></div>' +
        '<div class="season-divider__overlay"></div>' +
        '<div class="season-divider__content">' +
          '<div class="season-divider__char">' + conf.char + '册</div>' +
          '<div class="season-divider__line"></div>' +
          '<div class="season-divider__subtitle">' + conf.subtitle + '</div>' +
          '<div class="season-divider__terms">' + termNames + '</div>' +
        '</div>' +
      '</div>';

    return slide;
  }

  /* ---------- Create Term Page ---------- */
  function createTermPage(t, idx) {
    var slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.setAttribute("data-type", "term");
    slide.setAttribute("data-index", idx);
    slide.setAttribute("data-season", t.season);
    slide.setAttribute("data-effect", t.effect);

    var indexStr = (idx + 1 < 10 ? "0" : "") + (idx + 1);

    var sectionsHtml =
      '<div class="detail-section">' +
        '<div class="detail-section__title">🌿 自然物候</div>' +
        '<div class="detail-section__text">' + t.nature + '</div>' +
      '</div>' +
      '<div class="detail-section">' +
        '<div class="detail-section__title">🌾 农事意义</div>' +
        '<div class="detail-section__text">' + t.farming + '</div>' +
      '</div>' +
      '<div class="detail-section">' +
        '<div class="detail-section__title">🏮 民俗饮食</div>' +
        '<div class="detail-section__text">' + t.customs + '</div>' +
      '</div>';

    var keywordsHtml = t.keywords.map(function(kw) {
      return '<span class="term-detail__kw">' + kw + '</span>';
    }).join("");

    slide.innerHTML =
      '<div class="term-page">' +
        '<div class="term-page__bg" style="background-image:url(' + t.image + ')"></div>' +
        '<div class="term-page__overlay"></div>' +
        '<div class="term-page__content">' +
          // Header
          '<div class="term-header">' +
            '<div class="term-header__index">' + t.season + ' · ' + indexStr + '</div>' +
            '<div class="term-header__name">' + t.name + '</div>' +
            '<div class="term-header__pinyin">' + t.pinyin + '</div>' +
            '<div class="term-header__date">' + t.dateRange + '</div>' +
          '</div>' +
          // Image cards
          '<div class="image-cards">' +
            '<div class="image-card image-card--term">' +
              '<img class="image-card__img" src="' + t.image + '" alt="' + t.name + '">' +
              '<div class="image-card__label">' + t.name + '</div>' +
            '</div>' +
            '<div class="image-card image-card--herb">' +
              '<img class="image-card__img" src="' + t.herbImage + '" alt="' + t.herb + '">' +
              '<div class="image-card__label">' + t.herbIcon + ' ' + t.herb + '</div>' +
            '</div>' +
          '</div>' +
          // Herb info
          '<div class="herb-info">' +
            '<div class="herb-info__header">' +
              '<span class="herb-info__icon">' + t.herbIcon + '</span>' +
              '<span class="herb-info__name">' + t.herb + '</span>' +
              '<span class="herb-info__tag">' + t.herbTag + '</span>' +
            '</div>' +
            '<div class="herb-info__desc">' + t.herbDesc + '</div>' +
          '</div>' +
          // Term detail
          '<div class="term-detail">' +
            '<div class="term-detail__summary">' + t.summary + '</div>' +
            '<div class="term-detail__keywords">' + keywordsHtml + '</div>' +
            '<div class="term-detail__sections">' + sectionsHtml + '</div>' +
          '</div>' +
          // Poem
          '<div class="term-poem">' +
            '<div class="term-poem__deco"></div>' +
            '<div class="term-poem__line">「' + t.poem + '」</div>' +
            '<div class="term-poem__deco"></div>' +
          '</div>' +
        '</div>' +
      '</div>';

    return slide;
  }

  /* ---------- Slide Change Handler ---------- */
  function onSlideChange() {
    var activeSlide = swiper.slides[swiper.activeIndex];
    var type = activeSlide.getAttribute("data-type");
    var season = activeSlide.getAttribute("data-season");

    // Update season badge
    $seasonBadge.textContent = season || "";

    // Update page indicator
    if (type === "term") {
      var idx = parseInt(activeSlide.getAttribute("data-index"), 10);
      $currentPage.textContent = (idx + 1 < 10 ? "0" : "") + (idx + 1);

      // Switch particles
      var effect = activeSlide.getAttribute("data-effect");
      if (effect !== currentEffect) {
        currentEffect = effect;
        startParticles(effect);
      }
    } else {
      // Season divider
      $currentPage.textContent = "·";
    }

    // Hide swipe hint after first swipe
    $swipeHint.classList.add("is-hidden");
  }

  function onSlideChangeEnd() {
    // Additional cleanup if needed
  }

  /* ---------- Particle System ---------- */
  function startParticles(effect) {
    if (particleTimer) clearInterval(particleTimer);
    $particles.innerHTML = "";

    var count, cls;
    switch (effect) {
      case "petals":  count = 15; cls = "particle--petal";   break;
      case "rain":    count = 25; cls = "particle--rain";    break;
      case "snow":    count = 20; cls = "particle--snow";    break;
      case "leaf":    count = 12; cls = "particle--leaf";    break;
      case "mist":    count = 5;  cls = "particle--mist";    break;
      case "frost":   count = 8;  cls = "particle--snow";    break;
      case "thunder": count = 12; cls = "particle--rain";    break;
      case "firefly": count = 10; cls = "particle--firefly"; break;
      default:        count = 8;  cls = "particle--petal";
    }

    for (var i = 0; i < count; i++) {
      spawnParticle(cls);
    }

    particleTimer = setInterval(function() {
      if ($particles.children.length < count) {
        spawnParticle(cls);
      }
    }, 1500);
  }

  function spawnParticle(cls) {
    var el = document.createElement("div");
    el.className = "particle " + cls;

    var dur = 4 + Math.random() * 8;
    var delay = Math.random() * dur;
    var left = Math.random() * 100;
    var driftX = -30 + Math.random() * 60;
    var driftR = Math.random() * 360;

    el.style.left = left + "%";
    el.style.setProperty("--dur", dur + "s");
    el.style.setProperty("--delay", delay + "s");
    el.style.setProperty("--drift-x", driftX + "px");
    el.style.setProperty("--drift-r", driftR + "deg");

    $particles.appendChild(el);

    setTimeout(function() {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, (dur + delay) * 1000 + 500);
  }

  /* ---------- Music Toggle (UI only) ---------- */
  var musicPlaying = false;
  $musicBtn.addEventListener("click", function() {
    musicPlaying = !musicPlaying;
    $musicBtn.classList.toggle("is-playing", musicPlaying);
  });

  /* ---------- Start ---------- */
  preloadImages();

})();
