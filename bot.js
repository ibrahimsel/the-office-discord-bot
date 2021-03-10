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
							    "deadinside", "effectonwomen", "depression", "ignorantslut",
							    "sun", "alcohol", "hurt", "guidance", "nooneasked", 
							    "friendship", "delusion", "insidejokes", "ty", "beyonce", "badumts",
							    "nobodycares", "hero", "roasted", "stutter", "identity", 
							    "bs", "mylife", "dancing", "hentai", "boyhaveyou", "welcoming", "scranton", 
							    "prostate", "babyback", "ohh", "sleepwithhim", "waterisfine", "chicken", 
								"justlostaclient", "waa", "woo", "dancinginthegym", "dammit", "itsmichael",
							    "puke", "ayy", "no", "skeletonman"]
	// console.log(current_audio_files.length);

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
			message.channel.send("\n!list: list of current quotes\n" +
								 "!author: outputs info about the author of this bot\n");
			break;

		case "!list":
			message.channel.send("\nCurrent quotes:\n\n" + 
							 "Michael Scott\n-------\n" + 
							 "1-) alcohol 2-) bankruptcy 3-) britney" +
							 "\n4-) calm 5-) deadinside 6-) godno" +
							 "\n7-) idiot 8-) ignorantslut 9-) illkillyou" +
							 "\n10-) kms 11-) turtles 12-) wellwell" +
							 "\n13-) whyareyou 14-) hurt 15-) guidance" +
							 "\n16-) nooneasked 17-) insidejokes 18-) beyonce" +
							 "\n19-) nobodycares 20-) hero 21-) roasted 22-) bs" +
							 "\n23-) mylife 24-) dancing 25-) welcoming 26-) chicken" +
							 "\n27-) itsmichael" + 
							 "\nDwight Schrute\n-------\n" +
							 "1-) depression 2-) perfektenschlag 3-) perfektenschlag_right" +
							 "\n4-) perfektenschlag_left 5-) procedure 6-) identity 7-) onecrisis" +
							 "\n8-) ohh 9-) waterisfine 10-) puke 11-) no" +
							 "\nRobert California\n-------\n" +
							 "1-) imfine 2-) lizardking 3-) oof" +
							 "\n4-) sexuality" +
							 "\nOthers\n-------\n" +
							 "1-) effectonwomen 2-) kelly_slut 3-) ryan_bitch" +
							 "\n4-) sun 5-) theme 6-) friendship 7-) delusion 8-) ty" +
							 "\n9-) badumts 10-) stutter 11-) hentai 12-) boyhaveyou" +
							 "\n13-) scranton 14-) prostate 15-) babyback 16-) sleepwithhim" +
							 "\n17-) justlostaclient 18-) woo 19-) dancinginthegym 20-) dammit" +
							 "\n21-) ayy 22-) skeletonman");
			break;
			
		
		case "!author":
			message.channel.send("\n*NAME: Ibrahim Sel\nJOB: Aspiring Artificial Intelligence Specialist*\n")
	
	}
	
	}
});
client.login(your_token);
