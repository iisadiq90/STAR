const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = ".";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'bro') {
        message.reply('yas');
      }
});





client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

});

 

client.on('message', message => {

   

    let args = message.content.split(' ').slice(1).join(' ');

   

  if (message.content === 'ping') {

      message.channel.send(`<@${message.author.id}> Ping..!`)

  }

 

 

  if (message.content.startsWith('.bc')) {

          if (!args[0]) {

message.channel.send(".bc <message>");

return;

}

message.guild.members.forEach(m => {

   if(!message.member.hasPermission('ADMINISTRATOR')) return;

   m.send(`${args} ${m}`);

 

});

  }

 

});




client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

});

 

client.on('message', message => {

   

    let args = message.content.split(' ').slice(1).join(' ');

   

  if (message.content === 'ping') {

      message.channel.send(`<@${message.author.id}> Ping..!`)

  }

 

 

  if (message.content.startsWith('.nbc')) {

          if (!args[0]) {

message.channel.send(".bc <message>");

return;

}

message.guild.members.forEach(m => {

   if(!message.member.hasPermission('ADMINISTRATOR')) return;

   m.send(`${args}`);

 

});

  }

 

});


client.on("message", message => {

            if (message.content.startsWith(prefix + "bco")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult} ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
































client.on('message', message => {
 
       if(message.content === prefix + "mc") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');
 
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
 
              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
              });
                }
//viper
    if(message.content === prefix + "umc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');
 
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true
 
              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
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





client.login(process.env.BOT_TOKEN);
