const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const db = low(adapter);

var bot = new Discord.Client();
var prefix = ("//");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[//help] HenosiaBOT', type: 0} });
    console.log("Bot Ready !");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {

    var msgauthor = message.author.id;

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#f1c40f')
            .addField("Commandes du bot !", "-  //help : affiche les commandes du bot ! \n -  //inviteme : rejoindre le discord du bot")
        message.channel.sendEmbed(help_embed);
        console.log("Commande //help demandée !");
    }
     if (message.content === prefix + "info"){
        var info_embed = new Discord.RichEmbed()
            .setColor('#f1c40f')
            .addField("***Information:***", "\n **Nom** \n HenosiaBOT \n \n **Prefix de base** \n // \n \n **Auteur** \n @Spikyz™#4563 \n \n **Statue** \n En développement ( 5% ) \n \n **Library** \n Discord.js \n \n **Version** \n 0.0.1")
        message.channel.sendEmbed(info_embed);
        console.log("Commande //info demandée !");
   }
    if (message.content === prefix + "promote"){
        var promote_embed = new Discord.RichEmbed()
            .setColor('#f1c40f')
            .addField("***Promote !***", "@ArZiX76#0575  est désormais @Animateur 🎙")
        message.channel.sendEmbed(promote_embed);
        console.log("Commande //promote demandée !");
   }
    if (message.content === prefix + "promote"){
        var promote_embed = new Discord.RichEmbed()
            .setColor('#f1c40f')
            .addField("***Promote !***", "@ArZiX76#0575  est désormais @Animateur 🎙")
        message.channel.sendEmbed(promote_embed);
        console.log("Commande //promote demandée !");
   }
    if (message.content === prefix + "certifie"){
        var afaire_embed = new Discord.RichEmbed()
            .setColor('#f1c40f')
            .setTitle("Bienvenue sur mon serveur !")
            .setDescription("Pour pouvoir avoir acces à mon serveur discord, vous devez rentré ici le code que le bot @Sarah#4101 vous as envoyé en message privé.", "Si vous entré le mauvais code, vous serez expulsé de mon serveur !")
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

    if (message.content === prefix + "guild"){
        message.channel.send("Voici notre Discord ! \n - **https://discord.me/henosia**");
        console.log("Commande //inviteme demandée !");
    }

    if (message.content === prefix + "invite"){
      message.channel.send("Voici mon lien d'invitation ! \n - **https://discordapp.com/oauth2/authorize?client_id=405406014041751553&scope=bot&permissions=2146958591**");
      console.log("Commande //inviteme demandée !");
    }
    if (message.content === prefix + "espace"){
      message.channel.send("=================================================================================");
      console.log("Commande //espace demandée !");
    }
    if (message.content.startsWith(prefix + "setgame")) {
        if (message.author.id != '205752580251451392') {return message.reply("Tu n'est pas **mon créateur**")
        } else {
            var game = message.content.substr(10);
            message.delete(message.author)
            client.user.setPresence({game: {name : game, type :0}});
        }}
    }
    });
