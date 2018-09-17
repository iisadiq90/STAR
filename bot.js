const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "!";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '#s') {
        message.reply('yas');
      }
});







client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}`);
})
 message.channel.send(`:OK:** -  تم الأرسال **`); 
 message.delete(); 
};     
});


























client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" هلا!!");
    }
});







  client.on('message', message => {
     if (message.content === (prefix + "bot")) {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("#8650a7")
  .addField("** ✅ Servers: **" , client.guilds.size)
  .addField("** ✅ Users: **" , client.users.size)
  .addField("** ✅ Channels: **" , client.channels.size)
    .addField("** 🚀 Ping **" , Date.now() - message.createdTimestamp)
    .setTimestamp()
  message.channel.sendEmbed(embed);
    }
});
  






  const arraySort = require('array-sort'),
table = require('table');

client.on('message' , async (message) => {

    if(message.content.startsWith(prefix + "topinvite")) {

  let invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = [['الدعوات', 'الاشخاص']];
    invites.forEach(i => {
      possibleInvites.push([i.inviter.username , i.uses]);
    })
    const embed = new Discord.RichEmbed()
    .setColor(0x7289da)
    .setTitle("دعوات السيرفر")
    .addField(' المتصدرين' , `${table.table(possibleInvites)}`)

    message.channel.send(embed)
    }
});









  function codes() {
       this.clear = function(message) {
           const args = message.content.slice(config.prefix.length).trim().split(/ +/g); const command = args.shift().toLowerCase();
if(command == "clear") {
message.delete() if(!message.channel.guild) return; if(message.member.hasPermission(0x2000)){ let count = args[0] || 100; let messagecount = parseInt(count); message.channel.fetchMessages({limit: messagecount}) .then( messages => { count = messages.array().length message.channel.send(` ** messages deleted count: ${count} **`).then(m => m.delete(2500)); message.delete(60000); return messages; }) .then(messages => message.channel.bulkDelete(messages)) } else { var manage = new Discord.RichEmbed() .setDescription('You Do Not Have Permission to use this') .setColor("RANDOM") message.channel.send(manage) return;
}
       }
}

module.exports = STAR;

  var botid = ["YOUR BOT ID HERE"];
   client.on('message', message => {
       if(message.content.startsWith(`${prefix}invite`)){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("Invite Me !.")
           .setURL(`https://discordapp.com/oauth2/authorize/?permissions=8&scope=bot&client_id=${botid}`)
           .setTimestamp()
           .setColor("RANDOM")
           message.channel.send({embed})
       }
   });



















client.login(process.env.BOT_TOKEN);
