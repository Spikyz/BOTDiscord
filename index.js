const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");

bot.on('ready', function () {
  console.log('Je suis connecté !')
})

bot.login(tokenfile.token);

bot.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


  if(cmd === `${prefix}report`){

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Je ne trouve pas l'utilisateur.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("_Signalement_")
    .setColor("#15f153")
    .addField("Signalement du joueur", `${rUser} avec l'ID: ${rUser.id}`)
    .addField("Signalé par", `${message.author} avec l'ID: ${message.author.id}`)
    .addField("Salon", message.channel)
    .addField("Date", message.createdAt)
    .addField("Raison", reason);

    let reportschannel = message.guild.channels.find(`name`, "reports-logs");
    if(!reportschannel) retur, message.channel.send("Je ne trouve pas le canal **#reports-logs**.")

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);



  if(cmd === `${prefix}serveur`){

    let sicon = message.guild.iconURL;
    let serveurembed = new Discord.RichEmbed()
    .setDescription("_Information du serveur_")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Nom du serveur", message.guild.name)
    .addField("Crée le", message.guild.createdAt)
    .addField("Rejoins le", message.member.joinedAt)
    .addField("Membres total", message.guild.memberCount);

    return message.channel.send(serveurembed);
  }




  if(cmd === `${prefix}info`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("_Information du bot_")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Nom du bot", bot.user.username)
    .addField("Créateur", "• Spikyz™#4563")
    .addField("Crée le", bot.user.createdAt);

    return message.channel.send(botembed);

  if(cmd === `${prefix}aide`)

    var helpembed = new Discord.RichEmbed()
    .setDescription("_Pages d'aides_")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Pages d'aides", "`hcreateur`: affiche les commandes du Créateur", "`hadmin`: affiche les commandes d'Administration", "`hmod`: affiche les commandes de Modération", "`hassist`: affiche les commandes d'Assistance !")

    return message.reply(helpembed);
  }}})
