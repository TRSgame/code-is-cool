const Discord = require('discord.js');
const configg = require('configg.json');

var bot = new Discord.Client();

bot.on('ready',() => {
   console.log("Bot Ready");   
}) 

bot.login(configg.token)
.then(() => {
    console.log('Bot logged in');
  
    //Guild = bot.guilds.find("name", "Break Star");
       //bot.channels.find("name", "bot-spam").send("Je suis connecté vous pouvez désormais utiliser mes commandes :-)");
    //Guild = bot.guilds.find("name", "Villageoiscraft");
       bot.channels.find("name", "bot-spam").send("Je suis connecté vous pouvez désormais utiliser mes commandes :-)");
  
   onLogin();
  })
  .catch((error) => {
    console.error(error);
  });

bot.on('message',message=>{
    if(message.content === "ping"){
       message.reply("pong");
       console.log('ping pong');
    }
});