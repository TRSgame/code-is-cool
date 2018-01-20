const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on('ready',() => {
   console.log("Bot Ready");   
}) 

bot.login(configg.token);

bot.on('message',message=>{
    if(message.content === "ping"){
       message.reply("pong");
       console.log('ping pong');
    }
});