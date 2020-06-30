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
    channel.send('');
});

	client.user.setActivity("迪蘭丟的骨頭");

	
	client.on('message', msg => {
		
	if (msg.author == client.user) {
			return
		}
		
		var prefix = '!'
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
			if (msg.content.includes ('猶大') && msg.content.includes(r18[i])) t = true;
			}
		if (t)	{
			number = 10;
    var r18a = Math.floor(Math.random() * (number - 1 + 1)) + 1;
	
		switch (r18a){
			case 1:
				msg.reply (`....................封棺吧`);
				break;
				
			case 2:
			msg.reply (`遺言都講完了嗎`);
				break;
				
			case 3:
			msg.reply (`嘎嘎嘎嘎嘎嘎嘎嘎.........................`);
				break;
				
			case 4:
			msg.reply (`..................不知廉恥!`);
				break;
			
			case 5:
			msg.reply (`無禮之徒，快給我消失..............`);
				break;
				
			case 6:
			msg.reply (`...................你該感恩這一刻還有命開口說話`);
				break;
				
			case 7:
			msg.reply (`你也想要棺材...............?`);
				break;
				
			case 8:
			msg.reply (`.......................真是副好棺材吧\n這可是特製的，想知道是為誰而設的嗎?`);
				break;
				
			case 9:
			msg.reply (`你想說的就只有這些嗎，無聊至極`);
				break;
				
			case 10:
			msg.reply (`......................還在這裡聽你廢話簡直是浪費我的時間`);
				break;
			
			
		}
	}
		else { 
			if (msg.content.includes ('愛夏')
 && (msg.content.includes ('做我') || msg.content.includes ('當我')) && msg.content.includes ('婆')){
	 
			if (msg.content.includes ('猶大')){
			return
			}
			
			msg.reply ('嘎嘎嘎嘎嘎嘎嘎...................');
		}
		
		else if (msg.content.includes ('猶大')){
			
			let a1 = true;
			let a2 = true;
			
			if (msg.content.includes ('雷根糖') && msg.content.includes ('占卜')) a1 = false;
			if (msg.content.includes ('愛夏')) a2 = false;
			
			
			if (msg.author.id != '628188892767715329') {//
			if (a1){
		if (msg.content.includes ('汪汪')){
	 msg.reply('上一個這樣叫我的人已經試過被我掉進棺材了，你也想試試嗎?');
		}
		
		else if (msg.content.includes ('握手') || msg.content.includes ('手手') 
			|| msg.content.includes ('坐下') || msg.content.includes ('趴下')){
	 msg.reply('我是狼，不是狗!');
		}
		
		else if ((msg.content.includes ('給') || msg.content.includes ('吃'))
 && msg.content.includes ('狗糧')){
	 msg.reply('..............你這算是甚麼意思?');
		}
		
		else if ((msg.content.includes ('給') || msg.content.includes ('吃'))
 && msg.content.includes ('骨頭')){
	 msg.reply('................嗯，真是塊好骨頭');
		}
		
		else if (msg.content.includes ('嗚嗚')){
	 msg.reply('要是有什麼煩惱的話，我不介意當你的傾訴對象');
		}
		
		else if (msg.content.includes ('貓耳') || msg.content.includes ('喵喵')){
		const meow = ['我是狼啊，為甚麼要我戴這種東西', '這實在............是恥辱............', 
		'我才不要戴貓耳', '嗷嗚..............https://imgur.com/L41cdUL.png'];

		msg.reply (meow[Math.floor(Math.random() * meow.length)]).then(d_msg => {d_msg.delete(60000);});
		}
				
		else if (msg.content.includes ('摸摸') || msg.content.includes ('梳毛')){
		if (msg.content.includes ('給愛夏') || msg.content.includes ('讓愛夏')){
			return
		}
	 msg.reply('你想替我梳毛? 那好吧');
		}
				
		else if (msg.content.includes ('尼尼')){
		msg.reply ('你想靠過來嗎，可以啊');
		}
		
		else if (msg.content.includes ('你好')){
	 msg.reply('猶大。所謂的帝國之棺，說的就是我');
		}
		
		else if (msg.content.includes ('愛夏') && msg.content.includes ('結婚')){
	 msg.channel.send ('為甚麼我非要做這種事情不可............!!!!').then(d_msg => {d_msg.delete(60000);});
		}
			}
		
		if (msg.content.includes ('猶大')){
			if (a2){
			if (msg.author.id != '628188892767715329') {//
		
		if ((msg.content.includes ('當') || msg.content.includes ('做')) && msg.content.includes ('寵物')){
	 msg.reply('誰要當你的寵物................!!!!!!!!!!!!!!!');
		}
		
		else if (msg.content.includes ('表白')){
	 msg.reply('我只忠於皇帝一人................');
		}
		
		else if (msg.content.includes ('抱抱')){
	 msg.reply('抱歉.................我不太習慣讓外人抱我');
		}
		
		
		
		else if (msg.content.includes ('雷根糖') && msg.content.includes ('占卜')){
			msg.reply('無聊........那本來就是隨便胡扯的東西而已吧');//.then(d_msg => {d_msg.delete(60000);});
		}
		
		else if (msg.content.includes ('雷根糖') && (msg.content.includes ('吃') || msg.content.includes ('喜歡'))){
			msg.reply ('吃那種東西會有營養的嗎');
		}
		
			}
		}
		}
		
			}
		}
		
		
		
		
		if (msg.content.includes ('猶大')
 && msg.content.includes ('吃') && (msg.content.includes ('什麼') || msg.content.includes ('甚麼'))){
	if (msg.content.includes ('雷根糖') && msg.content.includes ('占卜')){
		return
		}
	number = 5;
    var eat = Math.floor(Math.random() * (number - 1 + 1)) + 1;
	
		switch (eat){
			case 1:
				msg.reply ('給我骨頭');
				break;
				
			case 2:
				msg.reply ('那傢伙做的焦糖布丁.........意外地味道還不錯.......');
				break;
			
			case 3:
				msg.reply ('吃完的雞肉剩下的骨頭，能給我嗎?');
				break;
			
			case 4:
				msg.reply ('人類的食物不合我口味');
				break;
				
			case 5:
				msg.reply ('沒想到那傢伙居然會做飯啊............');
				break;
				
			
		}
		}
		}
		
		
	if (msg.author.id === '628188892767715329') {//
  if (msg.content.includes ('你的占卜結果是 失敗的卡邦尼意大利麵味')
	  && msg.content.includes ('有低機率會發生極度的隨便怎樣也沒所謂的小事的暗示')) {

    msg.channel.send('極度的隨便怎樣也沒所謂吧').then(d_msg => {d_msg.delete(60000);});
	
	}
	
	  if (msg.content.includes ('你的占卜結果是 草莓味 : 命運的暗示')) {

    msg.channel.send('這好像是占卜來吧......?').then(d_msg => {d_msg.delete(60000);});
	
	}
	
		  if (msg.content.includes ('你的占卜結果是 香檳味 : 愉快的派對的開始的暗示')) {

    msg.channel.send('Paripi是甚麼鬼......').then(d_msg => {d_msg.delete(60000);});
	
	}
	
		  if (msg.content.includes ('...............猶大，來讓我摸摸吧?')) {

    msg.channel.send('不要').then(d_msg => {d_msg.delete(60000);});
	
	}
	
	if (msg.content.includes ('你的占卜結果是 骨頭味')){
	setTimeout(function(){ 
    		msg.channel.send('.................................'); 
	}, 3000);

	}
	
	if (msg.content === ('猶大? 你想要?')){
	setTimeout(function(){ 
    		msg.channel.send('..................................................'); 
	}, 3000);
	}
	
		if (msg.content === ('來，給你吧')){
	setTimeout(function(){ 
    		msg.channel.send('................................謝謝'); 
	}, 3000);
	}
	
	if (msg.content.includes ('可是馬修也讚成這是個出色的偽裝呢，你說對不對?')) {
	setTimeout(function(){
    msg.channel.send('.......................................切......................').then(d_msg => {d_msg.delete(60000);});
	}, 3000);
	}
	
	if (msg.content.includes ('機會難得，我來替你梳毛吧，猶大?')) {
	setTimeout(function(){
    msg.channel.send('..........隨你的便');
	}, 3000);
	}
	
	if (msg.content.includes ('怎樣，舒服嗎?')) {
	setTimeout(function(){
    msg.channel.send('.........................哼');
	}, 3000);
	
	}
	
	//if (msg.content === ('我的占卜可是從來沒有失準過')){
	//setTimeout(function(){ 
    		//msg.channel.send('因為也從來沒有占卜過').then(d_msg => {d_msg.delete(60000);}; 
	//}, 2000);
	//}
	
	
	}})
	
	
	
	
})





bot_secret_token = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
//
client.login(process.env.BOT_TOKEN);
