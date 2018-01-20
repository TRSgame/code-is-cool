const Discord = require('discord.js');
const configg = require('./configg.json');

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
  })
  .catch((error) => {
    console.error(error);
  });

bot.on('message',message=>{
    if(message.content === "ping"){
       message.reply("pong");
       console.log('ping pong');
    }
    if(message.content === "//if") {
      message.channel.send("```if``` veut dire 'si' en français, il permet de tester une condition :\nexemple : ```JavaScript\nif(message.content === 'ping'){\nmessage.reply('pong');\nconsole.log('ping pong');\n}```\ndans ce cas si le message est `ping`, on répondra `pong` et dans la console sera dit `ping pong`.")
    }
});