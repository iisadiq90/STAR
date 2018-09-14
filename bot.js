const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "#";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '#s') {
        message.reply('@everyone ||
من هنا يتم تفعيل ألاعضاء 
أضغط على الأيموجي لأختيار ألرتبة');
      }
});





















client.login(process.env.BOT_TOKEN);
