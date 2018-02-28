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
    .addField("Raaison", reason);

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


bot.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong !')
    }
  })
//Créateur

bot.on('message', message => {
  if (message.content === `${prefix}hcreateur`) {
    if (message.author.id != '205752580251451392') {return message.reply("Tu n'est pas **mon créateur** !")
      message.reply("Non configurer !")



  bot.on('message', message => {
      if (message.content.startsWith(`${prefix}setgame`)) {
        if (message.author.id != '205752580251451392') {return message.reply("Tu n'est pas **mon créateur** !")
        } else {
          var game = message.content.substr(10);
          message.delete(message.author)
          bot.user.setPresence({game: {name : game, type :0}});
          message.reply("Je joue désormais à " + game)
    }}
})
bot.on('message', message => {
  if (message.content.startsWith(`${prefix}setusername`)) {
    if (message.author.id != '205752580251451392') {return message.reply("Tu n'est pas **mon créateur** !")
    } else {
      var username = message.content.substr(14);
      message.delete(message.author)
      bot.user.setUsername(username)
      message.reply("Mon nom est désormais " + username)
    }}})

    bot.on('message', message => {
      if (message.content.startsWith(`${prefix}setavatar`)) {
        if (message.author.id != '205752580251451392') {return message.reply("Tu n'est pas **mon créateur** !")
        } else {
          var avatar = message.content.substr();
          message.delete(message.author)
          bot.user.setAvatar(avatar)
          message.reply("Avatar changé avec succes !")}}})}}})

//Admin role
        }}})
