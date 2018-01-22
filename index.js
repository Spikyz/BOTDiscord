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
    bot.user.setPresence({ game: { name: '[//help] NeroBOT | ${TailleServeurs} serveur(s) | ${TailleMembres} membres`);', type: 0} });
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

    if (message.content === prefix + "test"){
        var test_embed = new Discord.RichEmbed()
            .setColor('#f1c40f')
            .addField("Bot Ready !", "Le bot est Opérationnel")
        message.channel.sendEmbed(test_embed);
        console.log("Commande //test demandée !");

    }

    if (message.content === prefix + "inviteme"){
        message.channel.send("Voici notre Discord ! \n - ```https://discord.me/henosia```");
        console.log("Commande //inviteme demandée !");
    }
    });
    
function story_random(min, max) {
        min = Math.ceil(1);
        max = Math.floor(storynumber);
        randnum = Math.floor(Math.random() * (max - min +1) + min);
}

//Captcha

const client = new Discord.Client();

client.on("ready", () => {

var TailleMembres = client.users.size;
var TailleServeurs = client.guilds.size;

client.user.setGame("CAPTCHA BOT EN LIGNE");

console.log("--------------------------------------");

console.log(`Je suis sur ${TailleServeurs} serveur(s) avec ${TailleMembres} utilisateurs`);

});


var Attente = [];


client.on('message', (msg) => {

  if(msg.channel.name == "certification"){

  if(msg.author !== client.user) {

    msg.delete();

  }else{

    msg.channel.send();

  }
}

});


client.on('message', (msg) => {

if(msg.author.id != client.id){

if(msg.channel.name == "certification" && msg.content.startsWith(prefix)){

        var say = msg.content.substr(1);

        for(i=0;i<Attente.length;i++){

            var code = Attente[i].indexOf("x");

        }

        code++;

        for(i=0;i<Attente.length;i++){

var recode = Attente[i].substr(code);

}
		if(say == recode){

            Attente.pop();     

let NouveauMembre = msg.guild.roles.find("name", "Nouveau");

if(!msg.guild.roles.exists("name", "Nouveau")) {

        return  msg.channel.send("**:x: Le role `Nouveau` n'existe pas, veuillez le créer pour faire fonctionner le captcha!**")
     
      } 
msg.member.addRole(NouveauMembre).catch(err => console.log(err));   

        }else{

            msg.author.send("**:x: Vous avez pas réussi à passer le captcha...**");

            msg.delete();

            if(!msg.guild.member(client.user).hasPermission("KICK_MEMBERS")) {

  return;
}

msg.guild.member(msg.author).kick();

		}
  }
}

});

client.on('guildMemberAdd', member => {  

const salon = member.guild.channels.find('name', 'bienvenue');

    if(!salon) return;

var captcha = String(Math.random()).charAt(4) + String(Math.random()).charAt(4) + String(Math.random()).charAt(4) + String(Math.random()).charAt(4) + String(Math.random()).charAt(4);
           
            member.send("**Bienvenue @"+ member.user.username + "** copie/colle le code ci-join dans **#certification** pour passer le captcha du serveur\n```//" + captcha + "```");
        
            member.user.id;
         
            Attente.push(member.user.id + "x" + captcha);

    salon.send("**Bienvenue @"+ member.user.username + "**"); 

});


client.login(process.env.TOKEN);

