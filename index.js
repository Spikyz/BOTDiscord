const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");

bot.on('ready', function () {
  console.log("Je suis connecté !")
  bot.user.setActivity(`${bot.users.size} utilisateurs | ${bot.guilds.size} serveurs`, {type: "WATCHING"});
})

bot.login(tokenfile.token);

bot.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `<@418338601382969345>`){
    message.reply("Mon préfix est ``th!``. **th!aide** pour voir mes commandes")
  }
  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Je ne trouve pas l'utilisateur.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS" || !message.author.id === "205752580251451392")) return message.channel.send("Tu n'as pas la permissions (< BAN_MEMBERS )");
    if(bUser.hasPermission("BAN_MEMBERS" || bUser.id === "205752580251451392")) return message.channel.send("Tu ne peux pas kick cette utilisateur !");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Exclusion~")
    .setColor("#bc0000")
    .addField("Joueur exclu", `${bUser} avec l'ID ${bUser.id}`)
    .addField("Exclu par", `<@${message.author.id}> avec l'ID ${message.author.id}`)
    .addField("Salon", message.channel)
    .addField("Date", message.createdAt)
    .addField("Raison", bReason);

    let BanChannel = message.guild.channels.find(`name`, "mod-logs");
    if(!BanChannel) return message.channel.send("Je ne trouve pas le salon **#mod-logs**.");

    message.guild.member(bUser).ban(bReason);
    BanChannel.send(banEmbed);

  }

  if(cmd === `${prefix}kick`){

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Je ne trouve pas l'utilisateur.");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS" || !message.author.id === "205752580251451392")) return message.channel.send("Tu n'as pas la permissions (< KICK_MEMBERS )");
    if(kUser.hasPermission("KICK_MEMBERS" || kUser.id === "205752580251451392")) return message.channel.send("Tu ne peux pas kick cette utilisateur !");


    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Expulsion~")
    .setColor("#e56b00")
    .addField("Joueur expulsé", `${kUser} avec l'ID: ${kUser.id}`)
    .addField("Expulsé par", `<@${message.author.id}> avec l'ID: ${message.author.id}`)
    .addField("Salon", message.channel)
    .addField("Date", message.createdAt)
    .addField("Raison", kReason);
    
    let kickChannel = message.guild.channels.find(`name`, "mod-logs");
    if(!kickChannel) return message.channel.send("Je ne trouve pas le salon **#mod-logs**.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
  }


  if(cmd === `${prefix}report`){

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Je ne trouve pas l'utilisateur.");
    let Rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("_Signalement_")
    .setColor("#15f153")
    .addField("Signalement du joueur", `${rUser} avec l'ID: ${rUser.id}`)
    .addField("Signalé par", `${message.author} avec l'ID: ${message.author.id}`)
    .addField("Salon", message.channel)
    .addField("Date", message.createdAt)
    .addField("Raison", Rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports-logs");
    if(!reportschannel) retur, message.channel.send("Je ne trouve pas le salon **#reports-logs**.")

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
  }
  if(cmd === `${prefix}suggest`){
    let suggest = args.join(" ").slice(22);
    let suggestEmbed = new Discord.RichEmbed()
    .setDescription("Suggestion")
    .addField("Suggestion de", `${message.author} avec l'ID: ${message.author.id}`)
    .addField("Serveur", message.guild.name)
    .addField("Date", message.createdAt)
    .addField("Suggestion", suggest)

    let suggestChannel = message.guild.find(`name`, "418325777864589312");
    suggestChannel.send(suggestEmbed)
  }
  if(cmd === `${prefix}serveur`){

    message.delete(message.author)

    let sicon = message.guild.iconURL;
    let serveurembed = new Discord.RichEmbed()
    .setDescription("_Information du serveur_")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Nom du serveur", message.guild.name)
    .addField("Crée le", message.guild.createdAt)
    .addField("Rejoins le", message.member.joinedAt)
    .addField("Membres total", message.guild.memberCount)
    .setFooter(`Demandé par @${message.author.username}`, message.author.displayAvatarURL)

    message.channel.send(serveurembed);
  }
  if(cmd === `${prefix}info`){

    message.delete(message.author)

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("_Information du bot_")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Nom du bot", bot.user.username)
    .addField("Créateur", "<@205752580251451392>")
    .addField("Crée le", bot.user.createdAt)
    .addField("Utilisateurs", bot.users.size)
    .addField("Serveurs", bot.guilds.size)
    .setFooter(`Demandé par @${message.author.username}`, message.author.displayAvatarURL)

    message.channel.send(botembed);
  }
  if(cmd === `${prefix}support`){

    message.delete(message.author)

    let bicon = bot.user.displayAvatarURL;
    let supportEmbed = new Discord.RichEmbed()
    .setDescription("_Serveur Support_")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Vous souhaites rejoindre le serveur support ?", "https://discord.gg/6mB7MZx")
    .setFooter(`Demandé par @${message.author.username}`, message.author.displayAvatarURL)

    message.channel.send(supportEmbed)
  }
//Page d'aide
  if(cmd === `${prefix}aide`){

    message.delete(message.author)

    let bicon = bot.user.displayAvatarURL;
    let helpembed = new Discord.RichEmbed()
    .setDescription("_Pages d'aides_")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Liste des commandes disponible", "Théo est un bot Français crée par <@205752580251451392> dans le but de faciliter la gestion de votre serveur.")
    .addBlankField()
    .addField("Pages d'aides", "``hcreateur``,``hadmin``,``hmod``,``hassist``.")
    .addField(":gear: Utiles", "``info``,``serveur``,``report``")
    .setFooter(`Demandé par @${message.author.username}`, message.author.displayAvatarURL)

    message.author.sendEmbed(helpembed);
  }
  if(cmd === `${prefix}hcreateur`){

    message.delete(message.author)

    let bicon = bot.user.displayAvatarURL;
    let hcreateur = new Discord.RichEmbed()
    .setDescription("_Pages d'aides Créateur_")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Liste des commandes du Créateur disponible", "Non défini")

    message.channel.send(hcreateur);
    
  }
  if(cmd === `${prefix}hadmin`){

    message.delete(message.author)

    let bicon = bot.user.displayAvatarURL;
    let hadmin = new Discord.RichEmbed()
    .setDescription("_Pages d'aides Admin")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Liste des commandes d'Admin disponible", "Non défini")

    message.channel.send(hadmin);
  }
  if(cmd === `${prefix}hmod`){

    message.delete(message.author)

    let bicon = bot.user.displayAvatarURL;
    let hmod = new Discord.RichEmbed()
    .setDescription("_Pages d'aides Modérateur_")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Liste des commandes Modérateur disponible", "`ban`,`kick`")

    message.channel.send(hmod);
  }
  if(cmd === `${prefix}hassist`){

    message.delete(message.author)

    let bicon = bot.user.displayAvatarURL;
    let hassist = new Discord.RichEmbed()
    .setDescription("_Pages d'aides Assistant_")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Liste des commandes d'Assistant disponible", "Non défini")

    message.channel.send(hassist);
  }})
