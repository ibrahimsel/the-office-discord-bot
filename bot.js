const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
	if (message.author.bot) return;
	var dcMessage = message.content;
	var voiceChannel = message.member.voice.channel;
	var audio_file = dcMessage + ".mp3"
	var current_audio_files = ["kms.mp3", "theme.mp3", "godno.mp3"]

	if (current_audio_files.includes(audio_file) && message.member.voice.channel)
	{
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play(audio_file);

		dispatcher.on('start', () => {
			message.channel.send("playing...");
		});

		dispatcher.on('finish', () => {
			message.channel.send("finished playing");
			voiceChannel.leave();
		});

		dispatcher.on('error', console.error);

	}
	
	if (dcMessage.search("İ") != -1)
		dcMessage = dcMessage.replace(/İ/g, "I");
	
	if (dcMessage == "!help")
		message.channel.send('!audio: list of current audio files' + 
		                      "!");

	if (dcMessage == "!audio")
		message.channel.send("Current audio files: kms, theme");
	
	if (dcMessage.search(/pam/i) != -1)
		message.channel.send("Dunder Mifflin this is Pam");

	if (dcMessage.search(/dwight/i) != -1)
		message.channel.send("Bears, beets, Battlestar Galactica");
	
	
	// #region
	/* function makeRandom(length) {
   var result           = '';
   var characters       = 'HA';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
   } */
   // #endregion
});
