const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "s#";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '#s') {
        message.reply('yas');
      }
});








  bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray.slice(1);

if(cmd === `${prefix}serverinfo`);
let sicon = message.guild.displyAvatarURL;
let serverEmbed = new Discord.RichEmbed()
.setDescription("``Server Information``")
.addField("Server Name", message.guild.name)
.addField("Created On", message.guild.createdAt)
.addField("You Joined", message.member.joinedAt)
.addField("Total Members", message.guild.memberCount)
.addField("Server Owner", message.guild.owner.user.username)
.addField("Rooms", message.guild.channels.size)
.addField("Roles", message.guild.roles.size)
.addField("Region", message.guild.region)
.addField("Server ID", message.guild.id);

return message.channel.send(serverEmbed);
});
  





client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}`);
})
 message.channel.send(`:white_check_mark:** -  تم الأرسال **`); 
 message.delete(); 
};     
});













  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
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
  




   client.on('message', message => {
       if(message.content.startsWith(prefix + "invite")){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("Invite Me !.")
           .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=489839312150593556&permissions=1610087927&scope=bot`)
           .setTimestamp()
           .setColor("#ff006c")
           message.channel.send({embed})
       }
   });


















  client.on("message", message => { 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "STAR"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
  


















  








client.login(process.env.BOT_TOKEN);
