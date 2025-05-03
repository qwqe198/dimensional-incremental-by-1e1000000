var newsArray;

const msg6844 = ["你必须死！！！","你必须死！！！","你必须死！！！","你必须死！！！","你必须死！！！","你必须死！！！","你必须死！！！","你必须死！！！","你必须死！！！","你必须死！！！","你必须死！！！","你必须死！！！","HR5171正在煮沸你","已死亡！！！(1971-2021)","操！！！"]
const msg6844_2 = ["安息","操你妈","笑死"]
const gabrielList = ["Gabrieldebastiani","Gabrieldebastiani","Gabrieldebastiani","gabrieldebastiani123","gabriel1","gabriel2","gabriel3","Gabriel1847"] // 总计: 8
const laporteList = ["0936","3903","4362","5356","5419","5490","5545","5854","6409","6927","8032","8046"]
const incrementalList = ["5038","9124","0298","6539","4002","2236","3898","2218","1821","4271"]
const ggghhhhggtList = ["Ggghhhhggt","Jakekekekejej","Davidsew","Davavvavavavavavavvevaaadivid","Smacg the best","Wong stop banning me","Orange boss"]
const smacg13toGhgtMSG = ["破坏行为","封禁","最后警告"]
const wth05toGhgtMSG = ["不","绝不","永远公平"]
const usertoEMRMSG = ["在Eliezer's marble race上的永久封禁","我在EMR委员会上的用户名变更"]
const md762MovedPages = ["Savage Speeders","O'rangers","Raspberry Racers","Hazers","Calculator","Calender","ITunes Store","Find My","Tiktok","_________"]
const wth05toEMRMSG = [
  "你只会让维基变得更糟",
  "你只会让维基更加糟糕",
  "你只会让维基差到要被关闭",
  "你只会伤害维基",

  "这毫无意义",
  "这毫无意义，你仍会因逃避封禁而被封",
  "这毫无意义，你仍会因逃避封禁而被封禁"
]
const wth05toSmacg13MSG = [ // 后续可能扩展
  "ML2020展示页上的过时信息",
  "破坏行为报告",
  "删除DNS页面？",
  "Algosonic两次在ML2022页面放入虚假/未确认信息",
  "Jakekekekejej破坏页面",
  "有新用户来了",
  "在多个页面发现错误信息",
  "发现未成年用户", // 真的吗？
  "又一个破坏者",
  "Algosonic第三次在Savage Speeders页面进行低质量编辑",
  "你能永久封禁EMR吗？",
  "删除下方页面",
  "看下面",
  "永久封禁Jakekekekejej因为未成年",
  "封禁Davidsew因为在讨论中刷屏/骚扰",
  "发现刷屏者",
  "封禁请求",
  "封禁Davidsew因为骚扰FlameMr317",
  "检查EMR的所有编辑",
  "封禁请求(?)",
  "请求",
  "封禁请求",
  "应该封禁Optical4937因为编辑战",
  "请求",
  "又是破坏行为",
  ".", // 嗯？
  "嗨", // 请求删除2个用户页面
  "删除这些消息",
  "2022年第一个请求",
  "解封这些用户",
  "删除这个",
  "嗨Smacg",
  "随机",
  "发现非官方设定编辑，现已撤销",
  "Legendaryboss15做了更多非官方设定编辑",
  "解封这8个用户",
  "垃圾标题",
]

const randomMessageBy6844 = [
    "@Patashu 他是什么1523-0901?!!",
    "@IdleSquadron  他是什么1523-0901?!!",
    "@DEMEMZEA  宇宙有多大",
    "@Yahtzee Master HD 140283恒星有多老?!!",
    "@DEMEMZEA  HD 140283是什么?",
    "@DEMEMZEA HE 1523-0901是什么?",
    "@DEMEMZEA HE 1523-0901在侮辱你!",
    "@DEMEMZEA SMSS J031300.36-670839.3是什么",
    "@DEMEMZEA SMSS J031300.36-670839.3在霸凌你",
    "@DEMEMZEA HE 1523-0901是COVID-19创造者:未成年:",
    "@TheMKeyHolder 不要封禁",
    "@IdleSquadron @DEMEMZEA HR 8799是什么",
    "@MEE6 攻击 @Despacit2.0",
    "@MEE6 侮辱 @IdleSquadron",
    "@MEE6 和 @DEMEMZEA 侮辱 @Hevipelle",
    "@IdleSquadron  在诽谤 @Hevipelle",
    "@IdleSquadron  你可以输入HD 122563",
    "@MEE6 HD 122563正在冻结你",
    "@Omsi HD 114762正在冻结你",
    "@Moderator",
    "@unpingabot HE 1327-2326正在煮沸你",
    "@unpingabot  尝试输入[Ordinal Markup链接]",
    "@Reinhardt 尝试输入[HD 172172维基页面]",
    "@Reinhardt 尝试输入[Max Planck维基页面]",
    "@unpingabot 尝试输入[HD 10180维基页面]",
    "@Reinhardt 尝试输入[HE 0107-5240维基页面]并附上文件",
    "He1523a.jpg @IdleSquadron HE 1523-0901",
]

function number2digits(num){
  if (num > 100) num = num % 100
  let output = num
  if (num < 10) output = "0" + output
  return output.toString()
}

function classifiedredactedcomingsoonquestionmarkrandomgenerate(){
  if (Math.random() < 0.01) return "本维基的里程碑"
  let random1 = Math.random()
  let random2 = Math.random()
  if (random1 > 0.5){
    if (random2 > 0.5){
      return "已编辑"
    } else return "即将到来"
  } else {
    if (random2 > 0.5){
      return "机密"
    } else return "？？？"
  }
}

function fakeupdatepagerandomgenerate(){
  if (Math.random() < 0.01) return "Switch上的更新扩展"
  let random = Math.random()
  if (random < 1/3) return "Switch上的更新"
  else return "更新扩展" // 这个出现频率是前者的2倍，因为它有2个版本
}

function numToOrd(num){
  let numMod100 = num % 100
  let ord = ""
  if (Math.floor(numMod100 / 10) == 1) ord = "th"
  else {
    switch(numMod100 % 10) {
    case 1:
      ord = "st"
      break;
    case 2:
      ord = "nd"
      break;
    case 3:
      ord = "rd"
      break;
    default:
      ord = "th"
    }
  }
  return num.toLocaleString() + ord
}

function getNumberBasedOnArrayLength(){
  let x = newsArray.length
  let r = Math.random()
  if (r < 1e-5){
    x = ExpantaNum.expansion(10,x)
  } else if (r < 1e-4){
    x = ExpantaNum.hyper(x)(10,10)
  } else if (r < 1e-3){
    x = ExpantaNum.pent(10,x)
  } else if (r < 1e-2){
    x = ExpantaNum.tetr(10,x)
  } else if (r < 1e-1){
    x = ExpantaNum.pow(10,x)
  } else {

  }
  return x
}

function random12abba(length=6){
  let list = ["1","2","a","b","A","B"]
  let string = ""
  for (let i=1;i<=length;i++){
    string = string+list[Math.floor(Math.random()*list.length)]
  }
  return string
}

function randomGgghhhhggt(length=8){
  let list = ["e","f","g","h"]
  let string = ""
  for (let i=1;i<=length;i++){
    string = string+list[Math.floor(Math.random()*list.length)]
  }
  return "G" + string + "t"
}

function familyGuyGenerate(x = player.points){
  x = new ExpantaNum(x).max(1)
  let count
  if (x.lte("10^^10")) count = new ExpantaNum(10).pow(x.slog(10).sub(1)).floor().min(1e9)
  else if (x.lte("10^^1e10")) count = x.slog(10).pow(9).min(1e90)
  else count = x.slog(10).log10().pow(90)
  let output = ""
  if (count.lte(7.5)){
    for (let i = new ExpantaNum(1); i.lte(count); i = i.add(1)){
      output = output + "<h" + i.toString() + ">恶搞之家</h" + i.toString() + ">"
    }
  } else{
    output = output + "<h1>恶搞之家</h1><h2>恶搞之家</h2><h3>恶搞之家</h3>..."
    if (count.lt(1e15)){
      for (let i = -2; i <= 0; i++){
        output = output + "<h" + count.add(i).toString() + ">恶搞之家</h" + count.add(i).toString() + ">"
      }
    } else output = output + "<h" + count.toString() + ">恶搞之家</h" + count.toString() + ">"
  }
  return output + "恶搞之家"
}

function layerNameGenerate(x = player.points){
  x = new ExpantaNum(x).max(10)
  let input = x
  let slogInf = new ExpantaNum(inf()).slog(10)
  let superLayer = x.slog(10).sub(slogInf).max(0).floor()
  if (x.gte(inf())){
    if (x.slog(10).gte(inf())){
      x = x.slog(10)
    } else {
      x = slogadd(x, superLayer.mul(-1))
    }
  }
  let layer = x.log10().logBase(inflog()).floor()
  let res = ExpantaNum.pow(10,x.log10().div(inflog().pow(layer))).div(10)
  if (input.slog(10).gte(inf())) return "你的点数足以进行元层级 " + formatWhole(layer.max(1)) + " 重置。重置后你将拥有 " + format(isNaN(res)?1:res) + " 层级点数。"
  else if (input.log10().gte(inf())) return "你的点数足以进行Mk" + formatWhole(superLayer.add(1)) + " 层级 " + formatWhole(layer.max(1)) + " 重置。重置后你将拥有 " + format(isNaN(res)?1:res) + " 层级点数。"
  else if (input.gte(inf())) return "你的点数足以进行层级 " + formatWhole(layer) + " 重置。重置后你将拥有 " + format(res) + " 层级点数。"
  else return "你的点数不足以进行层级 " + formatWhole(1) + " 重置，很抱歉。"
}

// 新闻跑马灯功能开始

function updateNewsArray() {
  newsArray = [
    // 2020年
    [() => (Math.random() < 0.5 ? "不要在" : "停止向") + (Math.random() < 0.01 ? "BOF页面" : "这个神圣页面") + "添加非JMR设定", true],
    // 1%几率生成BOF
    [() => "将队伍页面改为应用名称，" + (Math.random() < 0.01 ? "搞什么鬼" : "wtf"), true],
    // 1%几率生成"搞什么鬼"
    [() => "MarkDevlo762将页面" + md762MovedPages[Math.floor(Math.random()*md762MovedPages.length)] + "移动到" + md762MovedPages[Math.floor(Math.random()*md762MovedPages.length)], true],
    // 1%几率生成从______到______
    [() => "谁刚刚幽灵ping了我7次 - SuperSpruce; TheMKeyHolder: 我知道是谁，是@" + Math.floor(Math.random()*100), true],
    // 1%几率生成98
    [() => "谁刚刚幽灵ping了我7次 - SuperSpruce; TheMKeyHolder: 我知道是谁，是@这一刻他知道自己搞砸了。", Math.random()<=0.01],
    // 1%几率生成这条新闻
    [() => "bruh - red" + (Math.floor(Math.random()*100)).toString(11), true],
    // 1%几率生成reda
    [() => (Math.random() < 0.5 ? "Jamie!#0750" : "nonono#8241") + " 已被警告，原因：使用不良词语。(重复次数：" + Math.floor(Math.random()*100+1)*2 + ")", true],
    // 1%几率生成nonono且重复160次或Jamie!且重复20次
    [() => Math.random() < 0.01 ? "Postψ(Ω) post-ψ(Ω)是基于乘法和大写Omega(Ω)构建的，其中序数的部分副本不是相加而是相乘。这并不真正影响post-ψ(Ω)序数的工作方式，因为它们的工作方式与pre-ψ(Ω)序数基本相同。如果序数内部的副本数量等于基数的值，它们将融合并转变为指数加1的形式。例如，ψ(ΩΩ2+Ω+1ψ(ΩΩ2+Ω+1ψ(ΩΩ2+Ω+1)))将转变为ψ(ΩΩ2+Ω+2)。然而post-ψ(Ω)序数和pre-ψ(Ω)序数之间有一个关键区别。当post-ψ(Ω)序数中有一个数字等于基数的值时，它不会直接转变为最大化形式。而是将值等于基数的数字更改为序数中其他值的内容。例如，如果你有一个序数ψ(ΩΩ2+Ω2+2ψ(ΩΩ2+Ω2+2ψ(ΩΩ2+Ω2+2)))。这将转变为ψ(ΩΩ2+Ω2+ω)，它的2个副本看起来像ψ(ΩΩ2+Ω2+ψ(ΩΩ2+Ω2+ω))。" : "序数无用本页面很烂IP封我", true],
    // 1%几率生成超长文本
    [() => "你过去只能在获得双倍OP增益增量升级时达到c8x2，但四倍器在c8中实际上并未禁用 - NoHaxJust" + (Math.random() < 0.01 ? Math.PI : "Pi"), true],
    // 1%几率生成3.14159...
    [() => "Patcail删除了页面Post " + (Math.random() < 0.01 ? "Collapse" : "Factor Boost"), true],
    // 1%几率生成Collapse
    [() => "我们" + (Math.random() < 0.01 ? "" : "不") + "会添加退出增量宇宙的更新 - TheMKeyHolder", true],
    // 1%几率不生成"不"
    [() => "Minecraft, Factorio, 两者还是" + (Math.random() < 0.01 ? "都" : "都") + "不?", true],
    // 1%几率生成"都不"
    [() => "IdleSquadron删除了页面" + classifiedredactedcomingsoonquestionmarkrandomgenerate(), true],
    // 1%几率生成"本维基的里程碑"
    [() => "IdleSquadron删除了页面" + fakeupdatepagerandomgenerate(), true],
    // 1%几率生成"Switch上的更新扩展"
    [() => "移除了" + (Math.random() < 0.5 ? "Facebook " : "Messenger ") + (Math.random() < 0.01 ? "基数" : "序数") + "因为它永远不会在游戏中存在", true],
    // 1%几率生成"基数"
    [() => "建议：" + (Math.random() < 0.01 ? "踢出" : "封禁") + "这个人[消息下方的图片] - Crimson406" + (Math.random() < 0.5 ? "1" : ""), true],
    // 1%几率生成"踢出"
    [() => "它们是相关的- " + format(7) + " 是 " + format(14) + " 的一半。- " + (Math.random() < 0.01 ? "Dolphin0" : "McDolphinMarble57") , true],
    // 1%几率生成Dolphin0

    // 2021年
    [() => "怎么？！@" + (Math.random() < 0.01 ? "所有人" : "已验证") + "不是一个可ping的角色 - SuperSpruce", true],
    // 1%几率生成"所有人"
    // 参考：SuperSpruce意外ping了所有人的消息
    [() => (Math.random() < 0.01 ? "w" : "r") + "eee剧透", true],
    // 1%几率生成weeee
    // 参考：2020年底/2021年初，upvoid不断泄露OM测试链接，这是TheMKeyHolder离开的原因之一
    [() => "@" + (Math.random() < 0.01 ? format(1e308) : "WongTingHo05") + " 你必须死！！！ - " + format(6844), true],
    // 1%几率生成格式化的1e308(我的旧Discord用户名)
    // 参考：2021/2/6，6844输入"@WongTingHo05 你必须死！！！"，这个用户极其有毒...
    [() => (Math.random() < 0.01 ? msg6844_2[Math.floor(Math.random()*msg6844_2.length)] + "@WongTingHo05 " : "@WongTingHo05 " + msg6844[Math.floor(Math.random()*msg6844.length)]) + " - " + format(6844), true],
    // 1%几率生成任何带前缀的消息
    // 参考：同上
    [() => randomMessageBy6844[Math.floor(Math.random()*randomMessageBy6844.length)] + " - " + (Math.random() < 0.01 ?  "3^8+3^5+3^3+3^2+3^1+3^0" : "6844"), Math.random() < 0.2],
    // 1%几率生成3^8+3^5+3^3+3^2+3^1+3^0 (6844不ping我的消息)
    // 参考：同上，但稀有5倍
    [() => "你能" + (Math.random() < 0.01 ? "删除" : "取消置顶") + "这条消息吗，看起来超级烦人 - 我", true],
    // 1%几率生成"删除"
    // 参考：2021年2月初，我请求取消置顶2020年10月输入并置顶的supercesi消息
    [() => "你能取消置顶这条消息吗因为消息内容太操蛋了 " + (Math.random() < 0.01 ? "LowDeath675" : "ld675"), true],
    // 1%几率生成LowDeath675
    // 参考：2021年2月底，我请求取消置顶13天前输入并置顶的"操蛋LowDeath675"消息
    [() => (player.points.gte("e6000000003") ? "1.00 DNA = 1.00e6,000,000,003, 但1.00 DNA序数 = " + (Math.random() < 0.01 ? "NaN" : "0") : "DNA序数 = " + (Math.random() < 0.01 ? "NaN" : "0")), true],
    // 1%几率生成NaN
    // 参考：2021年大数社区
    [() => "嗨Emb" + (Math.random() < 0.01 ? "y" : "i"), true],
    // 1%几率生成Emby
    // 参考：2021年大数社区
    [() => "!ban @" + (Math.random() < 0.01 ? "XnoobSpeakable" : gabrielList[Math.floor(Math.random()*gabrielList.length)]) + " 未成年", true],
    // 1%几率生成XnoobSpeakable
    // 参考：2021年第二季度，VeproGame Discord服务器中许多用户因未成年被封
    [() => "@Vepro 封禁 @Duuh 和 @Duuh" + (Math.max(0,Math.random()*10-0.05)).toFixed(1) + " 因为未成年", true],
    // 1%几率生成2.0
    // 参考：这条消息留在2021年10月底，因为Duuh和Duuh2.0尽管未成年仍在VeproGame Discord服务器中
    [() => "E308.25封禁了JakeCampbell" + number2digits(Math.floor(Math.random()*100)) + "，封禁时间为无限期(昆虫虚假信息：创建虚假更新页面)", true],
    // 1%几率生成19
    // 参考：2021年1月底，JakeCampbell19通过创建"更新扩展"破坏时间层级维基
    [() => "Smacg" + number2digits(Math.floor(Math.random()*100)) + "封禁了Ggghhhhggt，封禁时间为无限期(恐吓行为/骚扰)", true],
    // 1%几率生成13
    // 参考：2021年10月底，Ggghhhhggt因骚扰Smacg13在Jelle's Marble Run维基被封
    [() => "因为泄露 - 我带着一会儿见" + (Math.random() < 0.01 ? "混蛋" : "") + "!图片", true],
    // 1%几率出现"混蛋"
    // 参考：这条消息留在2021年3月初，有人问为什么MEME被封，我发了"因为泄露"并附上"一会儿见混蛋！"图片
    [() => "骗子" + (Math.random() < 0.01 ? "，立即封禁他" : ""), true],
    // 1%几率出现"立即封禁他"
    // 参考：2021年Discord
    [() => (Math.random() < 0.01 ? "" : "@所有人") + " (诈骗消息) [诈骗链接]", true],
    // 1%几率不出现@所有人
    // 参考：2021年Discord
    [() => (Math.random() < 0.01 ? "Vorona#4626不会拼写" : "拼错" + (Math.random() < 0.5 ? "单词" : "")) + " 'corona virus'", true],
    // 1%几率生成Vorona#4626
    // 参考：2021年7月和8月The Modding Tree Discord服务器中的#vorona频道，Rhebucks Z的消息
    [() => (Math.random() < 0.01 ? "Laporte 124#6836" : "Laporte124#" + laporteList[Math.floor(Math.random()*laporteList.length)]) + " 离开", true],
    // 1%几率生成Laporte和124之间有空格
    // 参考：2021年3月，许多Laporte加入Ordinal Markup Discord服务器，然后除一人外全部离开
    [() => (Math.random() < 0.01 ? "Increm" + ("e").repeat(Math.floor(Math.random()*21)+2) + "ntal#" : "Incremental#") + incrementalList[Math.floor(Math.random()*incrementalList.length)] + " 离开", true],
    // 1%几率生成Incremental中m和n之间有超过1个e
    // 参考：2021年4月，许多Incremental加入Ordinal Markup Discord服务器，然后除一人外全部离开
    [() => "你怎么知道他们是未成年 - " + (Math.random() < 0.01 ? "Kris" : "Lexi"), true],
    // 1%几率生成Kris
    // 参考：这条消息是在XnoobSpeakable因未成年被封后输入的
    [() => "你怎么知道某人未成年??????? - Bullz " + number2digits(Math.floor(Math.random()*100)), true],
    // 1%几率生成04
    // 参考：这条消息是在我请求Vepro封禁Duuh和Duuh2.0因未成年后输入的
    [() => "嗨我叫jake我10岁是新来的 - Ja" + ("ke").repeat(Math.floor(Math.random()*100)+1) + "jej", true],
    // 1%几率生成Jakekekekejej(4个ke)
    // 参考：2021年11月初Jelle's Marble Run维基中的一条消息，揭示了Jakekekekejej未成年
    [() => "Smacg13封禁了Jakekekekejej，封禁时间为" + (Math.random() < 0.01 ? "无限期(违反使用条款：未成年)" : "1周(向页面注入无意义内容/胡言乱语)"), true],
    // 1%几率生成无限期封禁
    // 参考：2021年10月底，Jakekekekejej加入Jelle's Marble Run维基，破坏2个页面并骚扰2个用户(包括我)，然后11天后自称10岁即未成年
    [() => "对于" + ggghhhhggtList[Math.floor(Math.random()*ggghhhhggtList.length)] + "：" + (Math.random() < 0.01 ? "该用户目前在整个Fandom网络被封禁。" : "该账户已被用户选择或Fandom全局禁用。"), true],
    // 1%几率生成"该用户目前在整个Fandom网络被封禁"
    // 参考：账户被禁用的横幅
    [() => (Math.random() < 0.04 ? ("Pax de 2e封禁了" + ["MOMOSTRONG，封禁时间无限期(账户创建禁用)","Person01235，封禁时间无限期(账户创建禁用)","2917evkane，封禁时间无限期(账户创建禁用，无法编辑自己的讨论页)(向页面注入无意义内容/胡言乱语)","Smacg the best，封禁时间无限期(账户创建禁用，无法编辑自己的讨论页)(滥用多个账户)"][Math.floor(Math.random()*4)]) : (["Smacg13","Pax de 2e"][Math.floor(Math.random()*2)] + "封禁了" + ["Eliezer's marble race","EMR Committee"][Math.floor(Math.random()*2)] + "，封禁时间为" + ["1周", "2周", "无限期"][Math.floor(Math.random()*3)] + "(账户创建禁用" + (Math.random() < 0.5 ? "，无法编辑自己的讨论页" : "") + ")(" + ["大量低质量编辑、语言错误等","从页面移除内容","从页面移除内容：现已给予足够机会","逃避封禁"][Math.floor(Math.random()*4)] + ")")), true],
    // 1%几率生成以下之一：
    // Pax de 2e | Eliezer's marble race | 1周     | 无"无法编辑自己的讨论页"   | 大量低质量编辑、语言错误等
    // Smacg13   | Eliezer's marble race | 2周     | 无"无法编辑自己的讨论页"   | 从页面移除内容
    // Pax de 2e | Eliezer's marble race | 无限期 | 无"无法编辑自己的讨论页"   | 从页面移除内容：现已给予足够机会
    // Pax de 2e | EMR委员会         | 无限期 | 有"无法编辑自己的讨论页" | 逃避封禁
    // 参考：EMR所有封禁的组合
    [() => (Math.random() < 0.01 ? "TikTok" : "Gray (Algicosathlon)"), true],
    // 1%几率生成TikTok
    // 参考：2021年12月底Orange boss在Jelle's Marble Run维基创建的2个垃圾页面
    [() => "!ban @Maxim Ivushkin 未成年" + (Math.random() < 0.01 ? "；然后我反应+1" : ""), true],
    // 1%几率生成长文本
    // 参考：2021年10月底，Maxim Ivushkin进入"2009 gang"，确认年龄为12或11岁，即未成年
    [() => "快删除那条消息，否则你就死定了 - " + random12abba() + "；为什么？你不喜欢数字" + (Math.random() < 0.01 ? "2009" : new Date().getFullYear()-12) + "吗？- 未成年用户", true],
    // 1%几率生成静态2009
    // 用户名有1/46656几率生成12AbBa
    // 参考：未成年用户输入"2009 gang"后不久的消息
    [() => "不，这是成就270的bug修复；如果你有少于" + (Math.random() < 0.01 ? format("ee6") : "e1m") + "常数并想知道为什么你的七维体变少了：成就270有一个bug现已修复。你的七维体之前比应有的要高。- Gringomaniac", true],
    // 1%几率生成格式化的ee6
    // 参考：Synergism中成就270修复后的消息
    [() => ggghhhhggtList[Math.floor(Math.random()*ggghhhhggtList.length)] + "在" + (Math.random() < 0.01 ? "Pax de 2e的墙上留言：你这个pax白痴你封了smacg the best" : "FlameMr317的墙上留言：你") + "上留下了操蛋的话", true],
    // 1%几率生成给Pax de 2e的消息
    // 参考：导致Davidsew在Jelle's Marble Run维基被封的消息，略有修改
    [() => "FlameMr317回复了FlameMr317墙上操蛋的留言：" + (Math.random() < 0.01 ? (Math.random() < 0.5 ? "''我的感受''" : "<i>我的感受</i>") : "*我的感受*") + " :(", true],
    // 1%几率生成<i></i>(javascript斜体)或'' ''(fandom斜体)而不是* *(Discord斜体)
    // 参考：导致Davidsew在Jelle's Marble Run维基被封的消息的回复
    [() => "WongTingHo05回复了Ggghhhhggt墙上的消息" + (Math.random() < 0.01 ? "你能停止破坏页面吗？" : smacg13toGhgtMSG[Math.floor(Math.random()*smacg13toGhgtMSG.length)]) + "：" + wth05toGhgtMSG[Math.floor(Math.random()*wth05toGhgtMSG.length)], true],
    // 1%几率生成"你能停止破坏页面吗？"
    // 参考：2021/12/21在Jelle's Marble Run维基3+1条不同消息中的3条玩笑消息给Ggghhhhggt
    [() => "WongTingHo05回复了我很抱歉在WongTingHo05墙上的消息：抱歉，你必须" + (Math.random() < 0.01 ? "死" : "毁掉你的人生"), true],
    // 1%几率生成"死"
    // 参考：2021/11/07在Jelle's Marble Run维基给Ggghhhhggt的一条玩笑消息
    [() => "WongTingHo05回复了对刻薄行为感到抱歉在WongTingHo05墙上的消息：抱歉你毁了你的人生因为你举报了自己" + (Math.random() < 0.01 ? Math.floor(Math.random()*13) : "未成年"), true],
    // 1%几率生成数字(0到12)
    // 参考：2021/11/27在Jelle's Marble Run维基给Jakekekekejej的一条玩笑消息
    [() => "你还应该查看留言墙，他在你的留言墙上发了" + (Math.random() < 0.01 ? "粗鲁" : "无意义") + "的消息 - 我；我9分钟后：在我的墙上也发现了", true],
    // 1%几率生成"粗鲁"
    // 参考：Jakekekejej进入维基并因破坏和骚扰即将举报的消息
    [() => "另外，你应该检查留言墙，" + (Math.random() < 0.01 ? "Jakekekekejej做了和Ggghhhhggt一样的事" : randomGgghhhhggt() + "做了和Jakekekekejej一样的事"), true],
    // 1%几率Jakekekekejej先出现
    // 用户名有1/65536几率生成Ggghhhhggt
    // 参考：与Eliezer's marble race进入Jelle's Marble Run维基一起发送的消息
    [() => (Math.random() < 0.01 ? "ggghhhhggtggghhhhggtt" : "ggggggggggggggggggggg") + "; [[Gossipy Girlhhhhhhhhhhhhhhhhh|Gossipy Girl]]<ref>babrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</ref>{{BG/Rita}}", true],
    // 1%几率生成ggghhhhggtggghhhhggtt
    // 参考：Ggghhhhggt在The Loud House Encyclopedia维基添加的不必要文本
    [() => (Math.random() < 0.01 ? "[[Category:Lllllllll]] [[Category:Joy]] [[Category:Joys]]" : "[[Category:Humans]] [[Category:Houses]]"), true],
    // 1%几率生成"Category:"三次
    // 参考：Ggghhhhggt在The Loud House Encyclopedia维基添加的不必要分类
    [() => "abilities = " + (Math.random() < 0.01 ? "hes" : "shes") + " a bat; affiliations = loooooooooooooool", true],
    // 1%几率生成hes
    // 参考：Ggghhhhggt在Whell of Time维基添加的不必要文本
    [() => (Math.random() < 0.01 ? "05:23, 29 October 2021" : "19:49, 17 September 2021 ") + "Ggghhhhggt创建了页面Category:Marbula One Season 2 (look) (Tag: Visual edit)", true],
    // 1%几率生成05:23, 29 October 2021
    // 参考：Ggghhhhggt创建上述页面的时间
    [() => "08:58, 26 December 2021 TokihikoH11删除了页面Category:Marbula One Season 2 (" + (Math.random() < 0.01 ? "垃圾：清空前的内容是：'orangers'" : "破坏行为") + ")", true],
    // 1%几率生成垃圾
    // 参考：TokihikoH11删除上述页面的时间
    [() => "修复挑战乘数行总是" + (Math.random() < 0.01 ? "1.25" : "1.250") + "倍", true],
    // 1%几率生成不带0的数字
    // 参考：2021年2月修复显示bug的一个Pull Request
    [() => (Math.random() < 0.01 ? "重新添加" : "移除") + "'最讨厌的功能'", true],
    // 1%几率生成"重新添加"
    // 参考：2021年移除最讨厌功能的一个Pull Request
    [() => "修复成就" + (Math.random() < 0.01 ? "2^2^3" : "256") + "总是被应用", true],
    // 1%几率生成2^2^3
    // 参考：2021年修复效果总是被应用的一个Pull Request
    [() => "描述说-" + format(99) + "%，但实际是-" + format(99.5) + "% (x" + (Math.random() < 0.01 ? "5e-3" : "0.005") + ")", true],
    // 1%几率生成5e-3
    // 参考：2021年修复显示bug的一个Pull Request描述
    [() => "包括：成就" + formatWhole(270) + "奖励" + (Math.random() < 0.1 ? "从未" : "总是") + "被应用；成就" + formatWhole(270) + "奖励缩放比预期" + format(10) + "倍" + (Math.random() < 0.1 ? "慢" : "快"), true],
    // 1%几率同时生成"从未"和"慢"
    // 参考：2021年列出旧成就270bug的一个Pull Request描述
    [() => "生成" + format(slogadd(Math.floor(Math.random()*20001+80000)**2*16384, Math.random() < 0.01 ? Math.random()+0.011 : 0).floor()) + "个h0nde账户...", true],
    // 1%几率生成大于1e15的数字(范围：1.007e15 - e1.644e15)
    // 参考：2021年6月，一堆h0nde Discord账户加入Discord服务器，后来我计算大约有136万亿种可能组合
    [() => "@" + (Math.random() < 0.5 ? "Still Ryminio" : "rymino") + " bto wtf停止试图骗人 - pg" + (Math.random() < 0.01 ? "11*12" : "132"), true],
    // 1%几率生成11*12
    // 参考：rymino在The Modding Tree Discord服务器#general发布诈骗链接后发送的消息
    [() => "他还在我的服务器和CG的服务器每个频道发了诈骗 - the" + (Math.random() < 0.01 ? "slow" : "paper") + "pilot", true],
    // 1%几率生成theslowpilot
    // 参考：上条消息发送69(不错)分钟后
    [() => "他刚刚在" + (Math.random() < 0.01 ? "Spotky1004的" : "spotky的") + "服务器做了，现在他在IGJ服务器做了 - thepaperpilot", true],
    // 1%几率生成Spotky1004
    // 参考：上条消息发送后不久
    [() => (Math.random() < 0.01 ? "dancingblob" : "crackedblob"), true],
    // 1%几率生成dancingblob
    // 参考：2021年中water#4237在Synergism服务器#mod-log对大部分消息反应:crackedblob:
    [() => (Math.random() < 0.01 ? "Rickrolled" : "WongTingHo05") + "：完全没有离线进度，然后连锁开始：这是建议吗 - Acamaeda；不这是bug - upvoid；这是特性 - Latorin；这是历史 - Acamaeda；这是连锁 - jakub；我40小时后：仍然完全没有离线进度", true],
    // 1%几率生成Rickrolled
    // 参考：在模组创建后我报告TMT版本v2.6起没有离线进度时发送的消息
    [() => "let primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53," + (Math.random() < 0.01 ? "59" : "57") + ",61] pg订阅了Grothendieck的素数理论我看到 - ab", true],
    // 1%几率生成59(正确)而不是57(错误)
    // 参考：pg132的Tree of Life代码部分，由ab发布
    [() => "heyy su" + (Math.random() < 0.01 ? "n" : "s") + "dex - Flame", true],
    // 1%几率生成sundex
    // 参考：The Modding Tree Discord服务器的一条消息
    [() => "Crimson406回复TheMKeyHolder：停止" + (Math.random() < 0.01 ? "乘以" : "除以") + format(0), true],
    // 1%几率生成"乘以"
    // 参考：移动端收到的除以0梗通知
    [() => "Jelle's Marble Run维基被" + (Math.random() < 0.01 ? "Davavvavavavavavavvevaaadivid" : "Kira Yoshikage的小号") + "杀死", true],
    // 1%几率生成更长的名字
    // 参考：Minecraft死亡消息之一
    [() => (Math.random() < 0.01 ? "Smacg13" : "") + " → Jakekekekejej", true],
    // 1%几率生成Smacg13
    // 参考：Tetr.io KO消息，→左边为空表示玩家被自己KO
    // 参考(续)：Jakekekekejej因自曝未成年被自己KO，Smacg13因破坏行为封禁他
    [() => `最近我查看了[[Jelle's Marble Runs Wiki]]中Smacg13的留言墙，看到[[Jakekekekejej]]发的一条消息说："嗨我叫jake我'''` + Math.floor(Math.random()*5+8) + `'''岁是新来的"，但你需要`+ Math.floor(Math.random()*5+12) + `(或` + Math.floor(Math.random()*4+16) + `)岁才不违反使用条款。由Wongtingho05于2021年11月6日21:37 HKT创建，ID: #` + format(1099283), true],
    // 1%几率生成10, 13和16
    // 参考：Fandom上举报未成年的活动之一
    [() => "你怎么敢谁他妈加了'wong这个操蛋懦夫'甚至'" + (Math.random() < 0.01 ? "f-word" : "操蛋") + "你'到页面？", true],
    // 1%几率生成f-word
    // 参考：12月初，Davavvavavavavavavvevaaadivid在页面上骚扰
    [() => "Ggghhhhggt在Fandom创建了多少账户？是7个，它们是Ggghhhhggt，" + (Math.random() < 0.01 ? "Ggghhhhggt, Ggghhhhggt, Ggghhhhggt, Ggghhhhggt, Ggghhhhggt和Ggghhhhggt" : "Jakekekekejej, Davidsew, Davavvavavavavavavvevaaadivid, Smacg the best, Wong stop banning me和Orange boss"), true],
    // 1%几率生成四个Ggghhhhggt
    // 参考：11月，Ggghhhhggt开始创建小号
    [() => "Ggghhhhggt及其小号在所有维基上做了多少次编辑？是" + Math.floor(Math.random()*100) + "次。", true],
    // 1%几率生成22
    // Ggghhhhggt: JMR维基7次，TLH 2次，WoT 2次，Community Cental 1次
    // 参考：同上
    [() => "(移除了Marble League " + (Math.random() < 0.01 ? "2021)" : "2020)"), true],
    // 1%几率生成2021
    // 参考：12月底，Smacg13移除了Marble League 2020页面的保护因为不必要
    [() => "不，假装因" + (Math.random() < 0.01 ? "滥用多个账户；*逃避封禁" : "逃避封禁") + "被永久封禁 - WongTingHo05", true],
    // 1%几率生成"滥用多个账户；*逃避封禁"
    // 参考：12月初，EMR委员会进入JMR维基，不久因逃避封禁被封
    [() => "解封我拜托我很无聊 - Davidsew；我不会解封你，相反，封禁时间延长到无限 - " + (Math.random() < 0.01 ? "Pax de 2e" : "Pax") + "；我也不会解封你，我会全局封禁你 - 肥皂成员；好的，我会关闭你的账户因为你和JAKEKEKEKEJEJ是同一个人且因未成年账户被关闭 - 维基团队成员", true],
    // 1%几率生成Pax de 2e
    // 参考：12月初，Davidsew输入这条消息希望解封，但后来用户因与Davavvavavavavavavvevaaadivid是同一用户被本地永久封禁，然后肥皂成员全局封禁他
    [() => "总之，他破坏了多个维基，我不关心结果 - 我于" + (Math.random() < 0.01 ? "2021/12/04" : "2021年12月4日"), true],
    // 1%几率生成2021/12/04
    // 参考：我留下关于想全局封禁Ggghhhhggt的消息
    [() => "在页面上刷屏有什么问题？永远" + (Math.random() < 0.01 ? "正确" : "错误"), true],
    // 1%几率生成"正确"
    // 参考：Orange boss留下的消息+我可能的回复
    [() => "当肥皂忘记我想全局封禁Orange boss是因为他和Ggghhhhggt是同一个人而不是破坏行为时：!soap Ggghhhhggt的小号[Orange boss在Jelle's Marble Run维基的用户页面链接] - WongTingHo05；能问下你在举报什么吗？看起来你已经封禁了用户并回退了他们的贡献，我们要做什么？- Zacatero；看起来他们在举报一个" + (Math.random() < 0.01 ? "全局封禁" : "g-blocked") + "用户的小号，在已经回退并本地封禁小号后。然后当没人回应举报时他们ping了尽管小号没有进一步活动。- CwM；如果你举报某事，你必须告诉我们你在举报什么。默认情况下，我们假设你只是在举报破坏行为..但如果他们已经本地封禁且编辑已撤销..我们没什么可做的 - Zacatero；Ggghhhhggt的小号 - WongTingHo05回复Zacatero的消息能问下你在举报什么吗？；Ggghhhhggt现在被毒封(IP封禁，所有小号封禁，IP暂停账户创建)，我确认Orange Boss是同一个人 - Miss Toki；总之，为什么不全局封禁？- WongTingHo05；Miss Toki：已经做了", true],
    // 1%几率生成"全局封禁"
    // 参考：关于我想全局封禁Orange boss的消息

    // 2022年
    [() => "DEMEMZEA忘记他如何处理Gabrieldebastianis的时刻：嗨@DEMEMZEA，能封禁@Join Discord at Under 13吗？- WongTingHo05；我能吗？能，应该吗？不。人们可以在网上撒谎，如果@Join Discord at Under 13只是在撒谎呢？如果我把昵称设为'我12岁'不意味着我12岁。- DEMEMZEA；我认为你需要因为用户名未成年而做，你应该知道在Ordinal Markup服务器 - WongTingHo05；他们的用户名甚至没暗示他们未成年，它说'违反TOS' - DEMEMZEA；我看到他在OM服务器把昵称设为'一个12岁女孩用discord' - WongTingHo05然后附上图片；是的 - DEMEMZEA；现在" + (Math.random() < 0.01 ? "立刻" : "马上") + "封禁？- WongTingHo05；我不知道怎么处理，所以我就禁言他们1天等mod醒来他们可能会处理 - DEMEMZEA；Reda：已封禁", true],
    // 1%几率生成"立刻"
    // 参考：我想在MrRedShark77服务器封禁Join Discord at under 13的消息
    [() => "不必要的ping smh - Windows" + (Math.random() < 0.01 ? "3.1" : "3point1") + "；我没看到ping..? - Kozak", true],
    // 1%几率生成3.1
    // 参考：2022年1月中随机消息
    [() => "pg" + (Math.random() < 0.01 ? 132 : "") + "，这个缺失" + ("!").repeat(Math.floor(Math.random()*50)*2+1) + "在后续版本修复了吗？- Lordshinjo", true],
    // 1%几率生成132
    // 参考：2022年1月中随机消息
    [() => (Math.random() < 0.01 ? "踢出，不封禁" : "封禁，不踢出"), true],
    // 1%几率生成"踢出，不封禁"
    // 参考：2022年1月中，诈骗者发布诈骗链接后删除后我发的消息
    [() => "{{ |link =https://youtu.be/" + (Math.random() < 0.01 ? "dQw4w9WgXcQ" : "iazTQVi1CEE") + " |me", true],
    // 1%几率生成dQw4w9WgXcQ
    // 参考：2022年1月底，Kira Yoshikage's burner破坏页面
    [() => '(替换内容为"' + (Math.random() < 0.01 ? "" : "}}") + '操蛋你Max - Kira Yoshikage")', true],
    // 1%几率不生成}}
    // 参考：2022年1月底，Kira Yoshikage's burner在编辑中骚扰
    [() => '(替换内容为"Category:' + (Math.random() < 0.01 ? "Marblelympics" : "Marble League") + '")', true],
    // 1%几率生成Marblelympics
    // 参考：2022年1月底，Kira Yoshikage's burner破坏Marble League Teams页面
    [() => "WongTingHo05 " + (Math.random() < 0.01 ? "在Eliezer's marble race的墙上留言：B组不是死亡之组：A组是" : "回复了" + usertoEMRMSG[Math.floor(Math.random()*usertoEMRMSG.length)] + "墙上的消息：" + wth05toEMRMSG[Math.floor(Math.random()*wth05toEMRMSG.length)]), true],
    // 1%几率生成"A组是"
    // 参考：2022/1/3在Jelle's Marble Run维基2条不同消息中给EMR的几条玩笑消息，外加一条
    [() => "WongTingHo05在" + (Math.random() < 0.01 ? "Videodude13的" : "Smacg13的") + "墙上留言：" + wth05toSmacg13MSG[Math.floor(Math.random()*wth05toSmacg13MSG.length)], true],
    // 1%几率生成Videodude13
    // 参考：太多消息
    [() => (Math.random() < 0.01 ? "*敲门敲门敲门FBI开门！*" : "") + "TMT服务器上的诈骗者，立即封禁诈骗者，你还需要删除每个频道的诈骗链接 - thepaperpilot的DM中的某人", true],
    // 1%几率生成*敲门敲门敲门FBI开门！*
    // 参考：诈骗者出现在TMT服务器后的DM消息
    [() => "!soap 几乎完全移除内容，并骚扰" + (Math.random() < 0.01 ? "Smacg13" : "MaxTheBlob0112") + "[Kira Yoshikage's burner在Jelle's Marble Run维基编辑的链接]", true],
    // 1%几率生成Smacg13
    // 参考：我想让肥皂全局封禁上述用户的消息
    [() => "距离上次记录吃弹珠事件已经[0][" + Math.floor(Math.random()*10) + "][" + Math.floor(Math.random()*10) + "]天 - Mesp", true],
    // 1%几率生成[0][0][0]
    // 参考：包含吃弹珠事件消息的天数
    [() => "为什么第4次打击持续" + Math.floor(Math.random()*20+1) + " " + ["分钟","小时","天","周","月"][Math.floor(Math.random()*5)] +"但第5次打击只持续1天？", true],
    // 1%几率生成12天
    // 参考：3月初在NO!服务器发现的错误
    [() => "当一些" + (Math.random() < 0.01 ? "87" : "愚蠢") + "阻止我建造时，我在聊天室输入：停止阻止我建造", true],
    // 1%几率生成87
    // 参考：Roblox聊天室

    // Exe k LG粉丝笑话，每条后续消息稀有度增加1.778倍，除第一条外没有1%消息
    // 总计：17
    [() => "!ban @" + numToOrd(Math.floor(Math.random()*100)) + " Exe k LG粉丝逃避封禁", Math.random() <= 1/1.778**0],
    // 1%几率生成2
    // 范围：0 - 99
    // 参考：2022年1月，该用户因在LNGI游戏Discord服务器逃避封禁被封
    [() => "!ban @" + numToOrd(Math.floor(10**(Math.random()*8+2))) + " Exe k LG粉丝逃避封禁", Math.random() <= 1/1.778**1],
    // 范围：100 - 1e10
    [() => "!ban @" + formatWhole(slogadd(Math.random()*9+1,2)) + "th Exe k LG粉丝逃避封禁", Math.random() <= 1/1.778**2],
    // 范围：1e10 - e1e10
    [() => "!ban @" + formatWhole(tet10(Math.random()*7+3)) + "th Exe k LG粉丝逃避封禁", Math.random() <= 1/1.778**3],
    // 范围：e1e10 - 1F10
    [() => "!ban @" + formatWhole(tet10(slogadd(Math.random()*9+1,1))) + "th Exe k LG粉丝逃避封禁", Math.random() <= 1/1.778**4],
    // 范围：1F10 - F1e10
    [() => "!ban @" + formatWhole(tet10(slogadd(Math.random()*9+1,2))) + "th Exe k LG粉丝逃避封禁", Math.random() <= 1/1.778**5],
    // 范围：F1e10 - Fe1e10
    [() => "!ban @" + formatWhole(tet10(tet10(Math.random()*7+3))) + "th Exe k LG粉丝逃避封禁", Math.random() <= 1/1.778**6],
    // 范围：Fe1e10 - F1F10
    [() => "!ban @" + formatWhole(pent10(Math.random()*7+3)) + "th Exe k LG粉丝逃避封禁", Math.random() <= 1/1.778**7],
    // 范围：F1F10 - 1G10
    [() => "!ban @" + formatWhole(pent10(slogadd(Math.random()*9+1,1))) + "th Exe k LG粉丝逃避封禁", Math.random() <= 1/1.778**8],
    // 范围：1G10 - G1e10
    [() => "!ban @" + formatWhole(pent10(slogadd(Math.random()*9+1,2))) + "th Exe k LG粉丝逃避封禁", Math.random() <= 1/1.778**9],
    // 范围：G1e10 - Ge1e10
    [() => "!ban @" + formatWhole(pent10(tet10(Math.random()*7+3))) + "th Exe k LG粉丝逃避封禁", Math.random() <= 1/1.778**10],
    // 范围：Ge1e10 - G1F10
    [() => "!ban @" + formatWhole(pent10(tet10(slogadd(Math.random()*9+1,1)))) + "th Exe k LG粉丝逃避封禁", Math.random() <= 1/1.778**11],
    // 范围：G1F10 - GF1e10
    [() => "!ban @" + formatWhole(pent10(tet10(slogadd(Math.random()*9+1,2)))) + "th Exe k LG粉丝逃避封禁", Math.random() <= 1/1.778**12],
    // 范围：GF1e10 - GFe1e10
    [() => "!ban @" + formatWhole(pent10(tet10(tet10(Math.random()*7+3)))) + "th Exe k LG粉丝逃避封禁", Math.random() <= 1/1.778**13],
    // 范围：GFe1e10 - GF1F10
    [() => "!ban @" + formatWhole(pent10(pent10(Math.random()*7+3))) + "th Exe k LG粉丝逃避封禁", Math.random() <= 1/1.778**14],
    // 范围：GF1F10 - G1G10
    [() => "!ban @" + formatWhole(new ExpantaNum.hyper(6)(10,Math.random()*7+3)) + "th Exe k LG粉丝逃避封禁", Math.random() <= 1/1.778**15],
    // 范围：G1G10 - 1H10
    [() => "!ban @" + formatWhole(hyper(Math.random()*6+7)) + "th Exe k LG粉丝逃避封禁", Math.random() <= 1/1.778**16],
    // 范围：1H10 - 2J10

    // 其他
    [() => (Math.random() < 0.01 ? "玩家掉出水中" : "death.fell.accident.water"), true],
    // 1%几率生成"玩家掉出水中"
    [() => (Math.random() < 0.01 ? "可疑" : "among us"), true],
    // 1%几率生成"可疑"
    [() => "当前新闻跑马灯数组长度：" + formatWhole(getNumberBasedOnArrayLength()), true],
    // 1%几率生成10^^x或更高
    [() => "Smacg13在" + (Math.random() < 0.01 ? "Jakekekekejej的墙上留言：嗨尽管你没有编辑你因未成年被永久封禁。" : "Ggghhhhggt的墙上留言：嗨尽管你没有编辑你因向我发送粗鲁消息被永久封禁。"), true],
    // 1%几率生成给Jakekekekejej的内容，这些消息在JMR维基不存在，只是粉丝制作
    [() => "新闻稀有度：" + format(1/Math.random()), true],
    // 1%几率生成>=100的数字
    [() => "新闻出现次数：" + format(Math.random() < 0.01 ? hardy(0, 10, player.tickerTimes) : hardy(player.tickerTimes, 10, 0)), true],
    // 1%几率生成非常小的数字
    [() => "&" + (Math.random() < 0.04 ? number2digits(Math.floor(Math.random()*100)) : Math.floor(Math.random()*96+160).toString(16)), true],
    // 1%几率生成e0
    [() => (Math.random() < 0.01 ? ":rofl:" : ":joy:"), true],
    // 1%几率生成rofl
    [() => (Math.random() < 0.01 ? ":sob:" : ":cry:"), true],
    // 1%几率生成sob
    [() => (Math.random() < 0.01 ? "UNO反转卡" : "不你卡"), true],
    // 1%几率生成UNO反转卡
    [() => (Math.random() < 0.01 ? "飞翔" : "黑人") + "问号", true],
    // 1%几率生成"飞翔"
    [() => "超微硅火山尘埃沉着病", true],
    // 目前没有1%新闻
    [() => (Math.random() < 0.01 ? "BRAVO" : (player.points.gte("e3e12") ? "完美" : "全部") + "清除"), true],
    // 1%几率生成BRAVO
    [() => (Math.random() < 0.01 ? "距离JS最大时间：" + formatTime((8.64e15-Date.now())/1000,3) : "距离Y2038 bug：" + formatTime((2147483648000-Date.now())/1000,3)), true],
    // 1%几率生成"距离JS最大时间"
    [() => "all clear op - " + (Math.random() < 0.01 ? new ExpantaNum("10^^1e308").toString() : format("10^^1e308")), true],
    // 1%几率生成F1e308的字符串
    [() => "ok doremy by smolfeesh | death by doremy", true],
    // 没有1%消息，2个视频标题

    // Discord
    [() => "我喜欢鱼，我也拍摄弹珠比赛并观看，请" + (Math.random() < 0.01 ? "" : "不要") + "质疑 - Dolphin0", true],
    // 1%几率不生成"不要"
    [() => "抱歉，什么，Wheeee，Meh；别PING我！！- Windows" + (Math.random() < 0.01 ? 3.1 : "3Point1"), true],
    // 1%几率生成3.1
    [() => "S(ystem Shark)O(pharg)F(ence)T(heMKeyHolder)C(" + (Math.random() < 0.01 ? "oolDoge" : "rimson406") + ")A(camaeda)P(acbrad)P(artialbog)E(pyon)D(erpy the Savior)", true],
    // 1%几率生成C(oolDoge)

    // 基于游戏，没有1%
    [() => layerNameGenerate(), player.points.gte(ExpantaNum.pow(2,1024))],
    [() => familyGuyGenerate(), true],
    [() => "生成数字：" + format(player.points.add(1).pow(player.prestige[1].max(1).log10())) + " (基于点数和点)", true],
    // 点数，点
    [() => "生成数字：" + format(powExp(player.points.add(1),0.5).pow(player.prestige[2].max(1).tetrate(2))) + " (基于点数和线)", player.dimShift >= 1],
    // 点数，线
    [() => "生成数字：" + format(powExp(ExpantaNum.pow(10,player.prestige[1]), player.prestige[2].add(1).sqrt())) + " (基于点和线)", player.dimShift >= 1],
    // 点，线
    [() => "生成数字：" + format(ExpantaNum.pow(10,powExp(player.lineSegments,0.5).pow(player.points.max(10).slog(10)))) + " (基于点和线段)", player.milestone[2].includes(2)],
    // 点数，线段
    [() => "生成数字：" + format(player.lineSegments.add(1).pow(player.prestige[1])) + " (基于点和线段)", player.milestone[2].includes(2)],
    // 点，线段
    [() => "生成数字：" + format(powExp(player.lineSegments.add(1),player.prestige[2].pow(2))) + " (基于线和线段)", player.milestone[2].includes(2)],
    // 线，线段
    [() => "生成数字：" + format(player.points.add(1).pow(player.string.max(1))) + " (基于点和弦长度)", player.milestone[2].includes(5)],
    // 点数，弦
    [() => "生成数字：" + format(slogadd(player.prestige[1].max(1).pow(player.string.max(10).log10()),1)) + " (基于点和弦长度)", player.milestone[2].includes(5)],
    // 点，弦
    [() => "生成数字：" + format(powExp(slogadd(player.string,1).pow(player.prestige[2].tetrate(2)),player.string.max(10).log10())) + " (基于线和弦长度)", player.milestone[2].includes(5)],
    // 线，弦
    [() => "生成数字：" + format(powExp(slogadd(player.lineSegments,1),player.string.log10().div(10))) + " (基于线段和弦长度)", player.milestone[2].includes(5)],
    // 线段，弦

    [() => "生成数字：" + format(powExp(player.points, Math.random()+0.5)) + " (基于点数)", true],
    // 点数，随机数
    [() => "生成数字：" + format(player.prestige[1].max(1).tetrate(Math.random()+1.01)) + " (基于点)", true],
    // 点，随机数
    [() => "生成数字：" + format(slogadd(Math.random(),3).pow(player.prestige[2].tetrate(2))) + " (基于线)", player.dimShift >= 1],
    // 线，随机数
    [() => "生成数字：" + format(powExp(player.lineSegments,player.lineSegments.max(1).log10().pow(0.5).mul(Math.random()))) + " (基于线段)", player.milestone[2].includes(2)],
    // 线段，随机数
    [() => "生成数字：" + format(slogadd(player.string.pow(player.string.max(1).log10().pow(2).mul(Math.random())),1)) + " (基于弦)", player.milestone[2].includes(5)],
    // 弦，随机数

    [() => "你当前处于" + formatWhole(player.dimShift) + "维空间", true],
    [() => "你的点比软上限多" + format(player.prestige[1].div(LAYERS.gainSoftcap(1)),4) + "倍，点需求现在增长快" + format(player.prestige[1].div(LAYERS.gainSoftcap(1)).pow(LAYERS.softcapExp(1).sub(1)),4) + "倍", player.prestige[1].gte(LAYERS.gainSoftcap(1))],
    [() => "你的点是线需求的" + format(player.prestige[1].div(LAYERS.req(2)).mul(100),4) + "%", player.dimShift >= 1],
    [() => "当前标签页：" + player.tab + "，当前子标签页(标签1)：" + player.subtab[1] + "，当前子子标签页(标签1)：" + player.subsubtab[1], true],
    [() => "检测到NaN(illion)", player.points.gte("1e3000000003")],
    [() => "你的点数等于2^^" + format(player.points.slog(2), 4) + "或3^^" + format(player.points.slog(3), 4), true],
    [() => "你的点数等于" + format(player.points.max(1+1e-15).ssrt()) + "^" + format(player.points.max(1+1e-15).ssrt()) + "或10^" + format(player.points.max(10**(1+1e-15)).log10().ssrt(),4) + "^" + format(player.points.max(10**(1+1e-15)).log10().ssrt(),4), true],
    [() => "点数获取公式：" + format(getPointsGainMulti()) + "^" + format(getPointsGainExp()), true],

    // 总计100条消息！
    [() => "100条消息！", true],
  ]
}

// 7条消息与未成年相关

function getAllTickersLength(type = "array", row = 10){
  let output = []
  for (let i=0;i<=newsArray.length-1;i++){
    if (type == "array"){
      output.push(newsArray[i][0]().length)
    } else {
      output = output + (newsArray[i][0]().length).toString() + ", "
      if ((i+1)%row==0) output = output + `<br>`
    }
  }
  return output
}

// 新闻跑马灯功能开始

document.addEventListener("visibilitychange", function() {if (!document.hidden) {scrollNextMessage();}}, false);
var scrollTimeouts = [];
function scrollNextMessage() {
  updateNewsArray();
  var s = document.getElementById('news');
  
  var nextMsgIndex
  var nextMsgCond

  //随机选择一条消息

  try {
    nextMsgCond = false
    while (!nextMsgCond) {
      // 随机选择普通新闻或aarex新闻
      var array = newsArray
      nextMsgIndex = Math.min(Math.floor(Math.random() * array.length), array.length);
      var func = array[nextMsgIndex][1]
      nextMsgCond = typeof(func) == "function" ? func() : eval(func);
    }
  } catch(e) {
    console.log("新闻数组在索引 " + nextMsgIndex + " 处不工作")
  }

  scrollTimeouts.forEach(function(v) {clearTimeout(v);});
  scrollTimeouts = [];

  //设置文本
	var m = array[nextMsgIndex][0];
	if (typeof(m) == "function") m = m()
  if (AFactived && Math.random() < 0.41) m = Math.random() < 0.5 ? "愚人节 " + (new Date().getYear()+1900) : "哈哈愚人节恶作剧"
	s.textContent = m

  //获取父宽度以便消息可以从其外开始
  let parentWidth = s.parentElement.clientWidth;

  //将过渡设置为空白以便立即移动
  s.style.transition = '';
  //将div_text向右移动，超出div_container边缘
  s.style.transform = 'translateX('+parentWidth+'px)';

  //需要使用setTimeout以便浏览器有时间在开始滚动前移动div_text
  scrollTimeouts.push(setTimeout( function() {
    //移动距离是s.parentElement.clientWidth + s.clientWidth + 父填充
    //我们希望以每秒rate像素的速度移动，所以需要移动(距离/rate)秒
    let dist = s.parentElement.clientWidth + s.clientWidth + 20; //20是div_container填充
    let rate = AFactived ? 141 : 100; //更改此值可更改滚动速度
    let transformDuration = dist / rate;
    if (!AFactived){
      player.tickerTimes++
    }
    //设置过渡持续时间
    s.style.transition = 'transform '+transformDuration+'s linear';
    let textWidth = s.clientWidth;
    //需要将其移动到-(width+父填充)才不可见
    s.style.transform = 'translateX(-'+(textWidth+5)+'px)';
    //在此消息完成后自动开始下一条消息滚动
    //你可以增加此超时时间以便在消息之间留出时间
    scrollTimeouts.push(setTimeout(scrollNextMessage, Math.ceil(transformDuration * 1000)));
  }, 100));
}