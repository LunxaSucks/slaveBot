const Discord = require("discord.js");

const Bot = new Discord.Client();
const token = "NTcxMzMwMzM1NjY1NTUzNDA5.XMibRA.3tg7K5swisHvy7HWg8LEenIlBnM";

const PREFIX = "!"


Bot.on("message", message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    var gayLevel = Math.floor(Math.random() * 100) + 1;
    var ppSize = Math.floor(Math.random() * 16) + 1;

    switch(args[0]){


        case 'gayLevel':
        var Embed = new Discord.RichEmbed()
        .addField("Gay Level","Your gayness Level is " + gayLevel + "% Congrats! you fucking bean")
        .setThumbnail(message.author.avatarURL)
        .setColor("#00ff59")
        message.channel.sendEmbed(Embed);
        break;
        case 'clear':
        if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("You can't use that command you bean")
        if(!args[1]) return message.channel.send("Please define a second Arg aka define a Number you bean") 

        message.channel.bulkDelete(args[1])
        case "penisSize":
        var Embed = new Discord.RichEmbed()
        .addField("PP Size","Your PP Size is " + ppSize + " inches! Congrats you fucking bean")
        .setThumbnail(message.author.avatarURL)
        .setColor("#0032FF")
        message.channel.sendEmbed(Embed);
        break;
        case "commands":
        var Embed = new Discord.RichEmbed()
        .addField("Commands","Current Bot Commands are... ")
        .addField("1 - !gayLevel","======================")
        .addField("2 - !penisSize","======================")
        .addField("3 - !commands","======================")
        .setColor("#242F5E")
        message.channel.sendEmbed(Embed)
        
    }

    if(message.content == "hi"){
        var Embed = new Discord.RichEmbed()
        .addField("Welcome!","Welcome "+ message.author.username+ " ,please read the rules before doing anything, you bean")
        .addField("Stuff we Do and Who we Are","======================")
        .addField("1 - Talk with Friends and People","======================")
        .addField("2 - We host game nights","======================")
        .addField("3 - We aren't gay Trust me","======================")
        .addField("4 - I'm being hosta-i mean what?","======================")
        .setColor("#d5ff00")
        message.channel.sendEmbed(Embed)
        
    }
    
})


Bot.on("guildMemberAdd",member =>{
    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if(!channel) return;
    channel.send(`Welcome ${member}, read the rules before doing anything you bean`)
})

Bot.login(process.env.B0T_T0KEN);
