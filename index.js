const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: []})
    .write()

var bot = new Discord.Client();
var prefix = ("//");
var randnum = 0;

var storynumber = db.get('histoires').map('story_value').value();

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[//help] HenosiaBOT', type: 0} });
    console.log("Bot Ready !");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {

    var msgauthor = message.author.id;

    if (message.author.bot)return;

    if (message.content === "ping"){
        message.reply("pong");
        console.log("ping pong !");
    }

    if (message.content === "Bonjour"){
        message.reply("Bonjour");
    }

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()){

        case "newstory":
        var value = message.content.substring(10);
        var author = message.author.id;
        console.log(value);
        message.reply("Ajout de l'histoire a la base de données")

        db.get('histoires')
            .push({ story_value: value, story_author: author})
            .write();
        break;

        case "tellstory":

        story_random();
        console.log(randnum);

        var story = db.get('histoires[${randnum}].story_value').toString().value();
        var author_story = db.get('histoires[${randnum}].author').toString().value();
        console.log(story);

        message.channel.send('Histoire : ${story} Histoire de ${author_story})') 

        break;
    }

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#f1c40f')
            .addField("Commandes du bot !", "-  //help : affiche les commandes du bot ! \n -  //inviteme : rejoindre le discord du bot")
        message.channel.sendEmbed(help_embed);
        console.log("Commande //help demandée !");
    }

    if (message.content === prefix + "afaire"){
        var afaire_embed = new Discord.RichEmbed()
            .setColor('#f1c40f')
            .addField("Commandes a faire disponible ici !", "***https://hastebin.com/erupesiber.pl***")
            message.channel.sendEmbed(afaire_embed);
        console.log("Commande //afaire demandée !");
    }
    if (message.content === prefix + "test"){
        var test_embed = new Discord.RichEmbed()
            .setColor('#f1c40f')
            .addField("Bot Ready !", "Le bot est Opérationnel")
        message.channel.sendEmbed(test_embed);
        console.log("Commande //test demandée !");

    }

    if (message.content === prefix + "inviteme"){
        message.channel.send("Voici notre Discord ! \n - **https://discord.me/henosia**");
        console.log("Commande //inviteme demandée !");
    }

    if (message.content === prefix + "invite"){
      message.channel.send("Voici mon lien d'invitation ! \n - **https://discordapp.com/oauth2/authorize?client_id=405406014041751553&scope=bot&permissions=2146958591**");
      console.log("Commande //inviteme demandée !");
    }


    });
    
function story_random(min, max) {
        min = Math.ceil(1);
        max = Math.floor(storynumber);
        randnum = Math.floor(Math.random() * (max - min +1) + min);
}
