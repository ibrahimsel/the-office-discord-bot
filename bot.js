const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
	if (message.author.bot) return;
	var dcMessage = message.content;
	var voiceChannel = message.member.voice.channel;
	var audio_file = "mp3/" + dcMessage + ".mp3"
	var current_audio_files = ["kms", "theme", "godno", "lizardking", "lemonhead",
                                "oof", "imfine", "lemonhead", "ryan_bitch", 
							    "sexuality", "idiot", "perfektenschlag", "perfektenschlag_left",
							    "perfektenschlag_right", "britney", "bankruptcy", "kelly_slut",
						 	    "wellwell", "turtles", "whyareyou", "calm", "procedure",
							    "deadinside", "effectonwoman", "depression", "ignorantslut",
							    "sun"]

	if (current_audio_files.includes(dcMessage) && message.member.voice.channel)
	{
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play(audio_file);

		dispatcher.on('start', () => {
			message.channel.send("playing " + dcMessage);
		});

		dispatcher.on('finish', () => {
			// message.channel.send("finished playing");
			voiceChannel.leave();
		});

		dispatcher.on('error', console.error);

	}
	
	if (dcMessage.search("İ") != -1)
		dcMessage = dcMessage.replace(/İ/g, "I");

	if (dcMessage.search(/pam/i) != -1)
		message.channel.send("Dunder Mifflin this is Pam");

	
	if (dcMessage.search(/dwight/i) != -1)
		message.channel.send("Bears, beets, Battlestar Galactica");
	
	switch (dcMessage)
	{
		case "!help":
			message.channel.send("!list: list of current quotes\n",
					     "!author: outputs info about the author of this bot\n");
			break;

		case "!list":
			message.channel.send("Current quotes:\n\n", 
							 "Michael Scott\n-------\n", 
							 "1-) alcohol\n2-) bankruptcy\n3-) britney",
							 "\n4-) calm\n5-) deadinside\n6-) godno",
							 "\n7-) idiot\n8-) ignorantslut\n9-) illkillyou",
							 "\n10-) kms\n11-) turtles\n12-) wellwell",
							 "\n13-) whyareyou",
							 "\nDwight Schrute\n-------\n",
							 "\n1-) depression\n2-) perfektenschlag\n3-) perfektenschlag_right",
							 "\n4-) perfektenschlag_left\n5-) procedure",
							 "\nRobert California\n-------\n",
							 "1-) imfine\n2-) lizardking\n3-) oof",
							 "\n4-) sexuality",
							 "\nOthers\n-------\n",
							 "1-) effectonwoman\n2-) kelly_slut\n3-) ryan_bitch",
							 "\n4-) sun\n5-) theme");
			break;
		
		case "!author":
			message.channel.send("*************\nName: Ibrahim Sel\nJob: Artificial Intelligence Specialist\n*************")
	}
});
client.login(your_token);
