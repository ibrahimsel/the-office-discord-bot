const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', async message => {
    if (message.author.bot) return;
    var dcMessage = message.content;
    var voiceChannel = message.member.voice.channel;
    var audio_file = "Audio Files/" + dcMessage + ".mp3"
    
    var current_audio_files = ["kms", "theme", "godno", "lizardking", "lemonhead",
                                "oof", "imfine", "lemonhead", "ryan_bitch", 
                                "sexuality", "idiot", "perfektenschlag", "perfektenschlag_left",
                                "perfektenschlag_right", "britney", "bankruptcy", "kelly_slut",
                                 "wellwell", "turtles", "whyareyou", "calm", "procedure",
                                "deadinside", "effectonwomen", "depression", "ignorantslut",
                                "sun", "alcohol", "hurt", "guidance", "nooneasked", 
                                "friendship", "ty", "beyonce", "badumts",
                                "nobodycares", "hero", "roasted", "stutter", "identity", 
                                "bs", "mylife", "dancing", "hentai", "boyhaveyou", "welcoming", "scranton", 
                                "prostate", "babyback", "ohh", "sleepwithhim", "waterisfine", "chicken", 
                                "justlostaclient", "waa", "woo", "dancinginthegym", "dammit", "itsmichael",
                                "puke", "ayy", "no", "skeletonman"]



    if (current_audio_files.includes(dcMessage) && message.member.voice.channel)
    {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play(audio_file);
        dispatcher.on('start', () => {
            message.channel.send("playing " + dcMessage);
            console.log(voiceChannel.members);
        });

        dispatcher.on('finish', () => {
            voiceChannel.leave();
        });

        dispatcher.on('error', console.error);
    }
    
    else if (current_audio_files.includes(dcMessage) && !message.member.voice.channel)
        message.channel.send("connect to a voice channel first");
    
    if (dcMessage.search("İ") != -1)
        dcMessage = dcMessage.replace(/İ/g, "I");

    listMessage = "\nCurrent quotes:\n" + 
                             "Michael Scott\n-------\n" + 
                             "alcohol-bankruptcy-britney" +
                             "\ncalm-deadinside godno" +
                             "\nidiot ignorantslut illkillyou" +
                             "\nkms turtles wellwell" +
                             "\nwhyareyou hurt guidance" +
                             "\nnooneasked beyonce" +
                             "\nnobodycares hero roasted bs" +
                             "\nmylife dancing welcoming chicken" +
                             "\nitsmichael\n" + 
                             "\nDwight Schrute\n-------\n" +
                             "depression perfektenschlag perfektenschlag_right" +
                             "\nperfektenschlag_left procedure identity onecrisis" +
                             "\nohh waterisfine puke no\n" +
                             "\nRobert California\n-------\n" +
                             "imfine lizardking oof" +
                             "\nsexuality\n" +
                             "\nOthers\n-------\n" +
                             "effectonwomen kellyslut ryanbitch" +
                             "\nsun theme friendship ty" +
                             "\nbadumts stutter hentai boyhaveyou" +
                             "\nscranton prostate babyback sleepwithhim" +
                             "\njustlostaclient woo waa dancinginthegym dammit" +
                             "\nayy skeletonman";

    listMessage = listMessage.replace(/ /g, "-")
    
    switch (dcMessage)
    {
        case "!help":
            message.channel.send("\n!list: list of current quotes\n" +
                                 "!author: outputs info about the author of this bot\n");
            break;

        case "!list":
            message.channel.send(listMessage);
            break;

        case "!author":
            message.channel.send("\n*NAME: Ibrahim Sel\nJOB: Aspiring Artificial Intelligence Specialist*\n");
            break;
    }
});

client.login("");  // insert your bot token here
