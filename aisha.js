const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', function() {
	
    console.log("Connected as " + client.user.tag)
	
	
	client.on("guildCreate", guild => {
    let channelID;
    let channels = guild.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }
	

    let channel = client.channels.get(guild.systemChannelID || channelID);
    channel.send(`唷，你聽說過雷根糖占卜嗎? 要不要來一顆?\n到底會出現甚麼呢? 讓我來告訴你的運程如何吧`,
		{embed:{
    title: '語句偵測：愛夏的雷根糖占卜',
    color: 0xe70000, 
    description: "句子中同時包括  愛夏+雷根糖+占卜  即可觸發，愛夏會出現為你占卜運程 (雷根糖 更換成 果凍豆 或 啫喱豆 皆可)",
    fields:[
        {
            name: '!占卜 或 !jellybeans',
            value: '再次獲取此提示信息，30秒後消失'
        }
    ]
		}});
		

});

	client.user.setActivity("摸摸猶大");

	
	client.on('message', msg => {
		
		var prefix = '!'
		
		
if (msg.author == client.user) {
			return
		}
		
			let r18 = ['孕', '抽插', '中出', '內射', '妊娠', '乳交', '肉棒', '做愛', '射精', '口爆', 
			'姦', '顏射', '口交', '性交', '性慾', '高潮', '絕頂', '精液', '叫床', '凌辱', '下體', 
			'雞雞', '調教', '生小孩', '生孩子', '生寶寶', '體內', '舔', '勃起', '發情', '潮吹', 
			'卵子', '精子', '交配', '受精', '淫', '射爆', '春袋', '子宮', '催情', '春藥', 
			'性愛', '屁眼', '瘋狂做', '亂交', '脹奶', '肉捧', '脫光', '插入', '造孩子', '造小孩',
			'足交', '奶頭', '性趣', 'SM', '2P', '3P', 'SEX', 'sex', '扑嘢', '扑野', '啪啪', '嘿咻', 
			'愛液', '洨', 'semen', '懷上', '陰道', '小GG', '%%', '小gg', '床戰', '脫衣', '龜頭', 
			'乳頭', '奶奶','串出','吃我','揉奶', 'jj', 'JJ', '大GG', '大gg', '搾奶', '白濁', 
			'肉根', '敦倫', '巨根', '上床', '床上', '甲甲', '下身', '雄起', '胯下', '跨下','操壞', 
			'危險期', '射在', '射進', '歐派', '胸部', '幹爆', '幹壞'];
			
			let t = false;
			for (var i in r18){
			if (msg.content.includes ('愛夏') && msg.content.includes(r18[i])) t = true;
			}
		if (t)	{
			number = 10;
    var r18a = Math.floor(Math.random() * (number - 1 + 1)) + 1;
	
		switch (r18a){
			case 1:
				msg.reply (`........................這是性騷擾嗎?`);
				break;
				
			case 2:
			msg.reply (`真是低級的趣味啊，我看錯你了`);
				break;
				
			case 3:
			msg.reply (`我拒絕你的無禮`);
				break;
				
			case 4:
			msg.reply (`你也想燒起來嗎?`);
				break;
			
			case 5:
			msg.reply (`抱歉，我對變態沒有興趣`);
				break;
				
			case 6:
			msg.reply (`...........................別接近我`);
				break;
				
			case 7:
			msg.reply (`要是還珍惜生命的話你還是最好住口了`);
				break;
				
			case 8:
			msg.reply (`思想骯髒的傢伙別靠過來`);
				break;
				
			case 9:
			msg.reply (`....................給我燃燒殆盡吧`);
				break;
				
			case 10:
			msg.reply (`..................抱歉，恕我失陪了`);
				break;
			
			
		}
	}	
	
else  if (msg.content.includes ('愛夏')
  && msg.content.includes ('占卜')
 && (msg.content.includes ('雷根糖') || msg.content.includes ('果凍豆') || msg.content.includes ('啫喱豆'))) {
	 	 if (Math.random() < 0.005) {
		 msg.reply (`你的占卜結果是 骨頭味`);
	 }
else{
	number = 26;
    var ans = Math.floor(Math.random() * (number - 1 + 1)) + 1;
		switch (ans){

		case 1:
			msg.reply (`你的占卜結果是 肉桂味 : 專心的暗示`, {embed:{
    title: '肉桂味',
    color: 0xc8a568, 
    description: "不管過去還是未來都只是虛幻。專注於現在吧。"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;
		
		case 2:
	msg.reply (`你的占卜結果是 巧克力味 : 戰鬥的暗示`, {embed:{
    title: '巧克力味',
    color: 0x531c0e, 
    description: "從戰鬥中感受出浪漫的話，未來定必會是美好的一年吧。"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;
		
		case 3:
	msg.reply (`你的占卜結果是 青檸檬味 : 嶄新之風的暗示`, {embed:{
    title: '青檸檬味',
    color: 0xddff20, 
    description: "是順風嗎，還是逆風嗎。這全取決於你的方向。"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;
		
		case 4:
			msg.reply (`你的占卜結果是 薔薇味 : 愛的暗示`, {embed:{
    title: '薔薇味',
    color: 0xbf0028, 
    description: "只要你渴望愛的話，未來將會是不錯的一年吧。"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;
		
		case 5:
			msg.reply (`你的占卜結果是 青蘋果味 : 相遇的暗示`, {embed:{
    title: '青蘋果味',
    color: 0x3eed35, 
    description: "你會迎來相遇。那將會是敵人嗎，友方嗎，還是你所愛之人嗎......"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;
		
		case 6:
			msg.reply (`你的占卜結果是 棉花糖味 : 撒謊的暗示`, {embed:{
    title: '棉花糖味',
    color: 0xfefffe, 
    description: "你在撒謊呢。我可是知道的。"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;
		
		case 7:
			msg.reply (`你的占卜結果是 鳳梨味 : 再起的暗示`, {embed:{
    title: '鳳梨味',
    color: 0xffc445, 
    description: "確實如此，現在不站起來的話，甚麼時候才會站得起來?"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;
		
		case 8:
			msg.reply (`你的占卜結果是 番茄味 : 熱情的暗示`, {embed:{
    title: '番茄味',
    color: 0xf21b1b, 
    description: "提升你的動機，比起一切都更重要。"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;

		case 9:
			msg.reply (`你的占卜結果是 櫻花味 : 秘密的思念的暗示`, {embed:{
    title: '櫻花味',
    color: 0xff7ad4, 
    description: "秘密的思念本質是富有詩意的，可是傳達給某人後對方會不會感到高興這又是另一回事了。"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;

		case 10:
			msg.reply (`你的占卜結果是 石榴味 : 約定的暗示`, {embed:{
    title: '石榴味',
    color: 0x930026, 
    description: "說起來你都看完合約了嗎?"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;

		case 11:
			msg.reply (`你的占卜結果是 卡布奇諾味 : 逆轉的暗示`, {embed:{
    title: '卡布奇諾味',
    color: 0xa77a49, 
    description: "逆轉是我的趣味之一。你又如何呢?"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;

		case 12:
			msg.reply (`你的占卜結果是 奶油蘇打味 : 協力的暗示`, {embed:{
    title: '奶油蘇打味',
    color: 0x72ffbe, 
    description: "一起齊心合力。又或者說讓我們一同互相扶持吧。"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;

		case 13:
			msg.reply (`你的占卜結果是 失敗的卡邦尼意大利麵味 :
有低機率會發生極度的隨便怎樣也沒所謂的小事的暗示`, {embed:{
    title: '失敗的卡邦尼意大利麵味',
    color: 0xe99f9d, 
    description: "到底應不應該加奶油好呢，這將會演變成奇怪的紛爭。"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;

		case 14:
			msg.reply (`你的占卜結果是 甘草味 : 試煉的暗示`, {embed:{
    title: '甘草味',
    color: 0x171717, 
    description: "如果把人生視為連續不斷的試煉的話，其實就跟平常沒兩樣。"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;

		case 15:
			msg.reply (`你的占卜結果是 草莓味 : 命運的暗示`, {embed:{
    title: '草莓味',
    color: 0xf1286a, 
    description: "命運？結果早就在過程決定好了。"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;

		case 16:
			msg.reply (`你的占卜結果是 香檳味 : 愉快的派對的開始的暗示`, {embed:{
    title: '香檳味',
    color: 0xfee8a0, 
    description: "宴會要開始了呢。你也會愛上當個Paripi的。"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;

		case 17:
			msg.reply (`你的占卜結果是 檸檬味 : 決斷的暗示`, {embed:{
    title: '檸檬味',
    color: 0xfefc2b, 
    description: "要好好行使決定權。它就在你手中。"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;

		case 18:
			msg.reply (`你的占卜結果是 薄荷味 : 靈敏的暗示`, {embed:{
    title: '薄荷味',
    color: 0x02b46a, 
    description: "腦細胞會變得十分活躍。靈感的閃現會如雨水一樣傾瀉下來。"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;

		case 19:
			msg.reply (`你的占卜結果是 蔓越莓味 : 繼承的暗示`, {embed:{
    title: '蔓越莓味',
    color: 0xbf1220, 
    description: "ねえたん......啊、不你聽錯了。"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;

		case 20:
			msg.reply (`你的占卜結果是 失敗的漁夫意大利麵味 : 鬥爭的暗示`, {embed:{
    title: '失敗的漁夫意大利麵味',
    color: 0xee9225, 
    description: "......怎樣，燃燒至最高點吧?"
		}}).then(d_msg => {d_msg.delete(60000);});
		break;

		case 21:
			msg.reply (`你的占卜結果是 豬油味
有時候也會出現惡夢般的口味呢，還請多加注意。`).then(d_msg => {d_msg.delete(60000);});
		break;

		case 22:
			msg.reply (`你的占卜結果是 狗糧味\n...............猶大，來讓我摸摸吧?`).then(d_msg => {d_msg.delete(30000);});
		break;

		case 23:
			msg.reply (`你的占卜結果是 橙味
嗯，橙味嗎，看來今天將會是和平的一天。`).then(d_msg => {d_msg.delete(60000);});
		break;

		case 24:
			msg.reply (`你的占卜結果是 泥土味
這是甚麼? 泥土味嗎? 真是少見的口味。`).then(d_msg => {d_msg.delete(60000);});
		break;

		case 25:
			msg.reply (`你的占卜結果是 爛蔬菜味
這是......嚐起來像爛蔬菜的口味?
那真是......深表遺憾了。`).then(d_msg => {d_msg.delete(60000);});
		break;
	
	}
	
 }}
	
	if (msg.author.id === '628946389921038365') {//
		if (msg.content === ('.................................')){
	setTimeout(function(){ 
    		msg.channel.send('猶大? 你想要?'); 
	}, 3000);
	}
	
	if (msg.content === ('..................................................')){
	setTimeout(function(){ 
    		msg.channel.send('來，給你吧'); 
	}, 3000);
	}
	
	if (msg.content.includes ('嘎嘎嘎嘎嘎嘎嘎...................')){
		if (msg.content.includes ('嘎嘎嘎嘎嘎嘎嘎嘎.........................')){
		return
		}
	setTimeout(function(){ 
    		msg.channel.send('猶大，怎麼了?\n抱歉，這傢伙是有點奇怪的'); 
	}, 3000);
	
	}
	
	if (msg.content.includes ('為甚麼我非要做這種事情不可............!!!!')){
	setTimeout(function(){ 
    		msg.channel.send('可是馬修也讚成這是個出色的偽裝呢，你說對不對?').then(d_msg => {d_msg.delete(60000);}); 
	}, 3000);
	
	}
	
	//if (msg.content === ('無聊........那本來就是隨便胡扯的東西而已吧')){
	//setTimeout(function(){ 
    		//msg.channel.send('我的占卜可是從來沒有失準過').then(d_msg => {d_msg.delete(60000);}); 
	//}, 2000);
	//}
	
	//if (msg.content === ('因為也從來沒有占卜過')){
	//setTimeout(function(){ 
    		//msg.channel.send('就不要在意這種細節了').then(d_msg => {d_msg.delete(60000);}); 
	//}, 2000);
	//}
	
	}
	
	if (msg.content.includes ('愛夏')
  && msg.content.includes ('占卜')
 && msg.content.includes ('變歐')){
if (msg.content.includes ('雷根糖') || msg.content.includes ('果凍豆') || msg.content.includes ('啫喱豆')){
	return
}
	msg.reply ('嗯......是幸運餅乾味呢，即是今天的你將會得到幸運女神眷顧的暗示，祝福你能將運氣掌握在手中吧').then(d_msg => {d_msg.delete(10000);});
	}
		
		
	if (msg.content.includes ('愛夏')) {
		if (msg.content.includes ('雷根糖') && msg.content.includes ('占卜')){
		return
		}
		for (var i in r18){
		if (msg.content.includes(r18[i])){
			return
		}}
		
		if (msg.content.includes ('摸摸')) {
			if (msg.content.includes ('摸摸猶大') ||  (msg.content.includes ('猶大') 
			&& (msg.content.includes ('給愛夏摸摸') || msg.content.includes ('讓愛夏摸摸')))) {
			const play = ['機會難得，我來替你梳毛吧，猶大?', '怎樣，舒服嗎?']
		msg.channel.send (play[Math.floor(Math.random() * play.length)]);
		
	}
		else {
			msg.reply ('呵呵......你想摸我嗎? 還是想讓我摸嗎?');
		}}
		
	
	
	else if (msg.content.includes ('吃') && (msg.content.includes ('什麼') || msg.content.includes ('甚麼'))){
	
	number = 8;
    var eat = Math.floor(Math.random() * (number - 1 + 1)) + 1;
	
		switch (eat){
			case 1:
				msg.reply ('我嗎? 對我來說雷根糖已經十分足夠了');
				break;
				
			case 2:
				msg.reply ('雷根糖唷，你要來一顆嗎?');
				break;
			
			case 3:
				msg.reply ('我只需一杯紅茶就夠了');
				break;
				
			case 4:
				msg.reply ('喝了一碗別人做的蔬菜湯，份量果然還是太多了........');
				break;
				
			case 5:
				msg.reply ('可惡........鹽分........還有脂肪........');
				break;
				
			case 6:
				msg.reply ('我不用進食的');
				break;
				
			case 7:
				msg.reply ('營養方面靠魔術和藥物補給，還有從雷根糖攝取就足夠了');
				break;
				
			case 8:
				msg.reply ('昨天做了的焦糖布丁，你要不要嚐嚐?');
				break;
			
		}
	}
	
	else if (msg.content.includes ('占卜') && msg.content.includes ('不準')){
		msg.reply ('我的占卜可是從來沒有失準過');
	}
		
	else if (msg.content.includes ('抱抱')){
		msg.reply ('其實我不太擅長應付這麼熱情的陌生人...............抱歉了');
	}
	
	else if (msg.content.includes ('嗚嗚')){
		msg.reply ('生活的不如意讓你感到疲倦了嗎? 看來你需要別人的安慰呢(摸摸');
	}
	
	else if (msg.content.includes ('吶吶') || msg.content.includes ('膩膩') || msg.content.includes ('捏捏')){
		msg.reply ('好乖好乖(摸頭');
	}
	
	else if (msg.content.includes ('貓耳') || msg.content.includes ('喵喵')){
		const meow = ['貓耳嗎，戴起來感覺還不錯，要是戴在猶大頭上會怎麼樣呢', '這樣...........好看嗎? https://upload.cc/i1/2019/11/07/7bzIC5.png', 
		'頭上戴了這種東西太引人注目了，感覺會有點不方便行動呢', '喵♪ https://imgur.com/hRPyQbc.png']
		msg.reply (meow[Math.floor(Math.random() * meow.length)]).then(d_msg => {d_msg.delete(60000);});
	}
	
	else if (msg.content.includes ('你好')){
	 msg.reply('名叫愛夏的物體。拿著研究者的名號，不知為何會被稱作占卜師');
		}
}
 
	if (msg.content === (prefix + '占卜') || msg.content === (prefix + 'jellybeans')){
		msg.channel.send (`唷，你聽說過雷根糖占卜嗎? 要不要來一顆?\n到底會出現甚麼呢? 讓我來告訴你的運程如何吧`,
		{embed:{
    title: '語句偵測：愛夏的雷根糖占卜',
    color: 0xe70000, 
    description: "句子中同時包括  愛夏+雷根糖+占卜  即可觸發，愛夏會出現為你占卜運程 (雷根糖 更換成 果凍豆 或 啫喱豆 皆可)",
    fields:[
        {
            name: '!占卜 或 !jellybeans',
            value: '再次獲取此提示信息，30秒後消失'
        }
    ]
		}}).then(d_msg => {d_msg.delete(30000);});
		
		
	}
	
	if (msg.author.id === '626274688888471552') {
	if (msg.content.includes ('愛夏') && msg.content.includes ('打個招呼')){
		msg.channel.send (`唷，你聽說過雷根糖占卜嗎? 要不要來一顆?\n到底會出現甚麼呢? 讓我來告訴你的運程如何吧`,
		{embed:{
    title: '語句偵測：愛夏的雷根糖占卜',
    color: 0xe70000, 
    description: "句子中同時包括  愛夏+雷根糖+占卜  即可觸發，愛夏會出現為你占卜運程 (雷根糖 更換成 果凍豆 或 啫喱豆 皆可)",
    fields:[
        {
            name: '!占卜 或 !jellybeans',
            value: '再次獲取此提示信息，30秒後消失'
        }
    ]
		}});
		
		
	}}
	
	})
	
	
	
	
})





bot_secret_token = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
//
client.login(process.env.BOT_TOKEN);
