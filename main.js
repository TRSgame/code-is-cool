const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on('ready',() => {
   console.log("Bot Ready");   
}) 

bot.login(configg.token);