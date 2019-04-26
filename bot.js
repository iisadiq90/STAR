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





var config = {
  events: [
    {type: "CHANNEL_CREATE", logType: "CHANNEL_CREATE", limit: 4 , delay: 5000},
    {type: "CHANNEL_DELETE", logType: "CHANNEL_DELETE", limit: 3, delay: 5000},
    {type: "GUILD_MEMBER_REMOVE", logType: "MEMBER_KICK", limit: 5, delay: 5000},
    {type: "GUILD_BAN_ADD", logType: "MEMBER_BAN_ADD", limit: 2, delay: 5000},
    {type: "GUILD_ROLE_CREATE", logType: "ROLE_CREATE", limit: 4, delay: 5000},
    {type: "GUILD_ROLE_DELETE", logType: "ROLE_DELETE", limit: 4, delay: 5000},
  ]
}
client.on("error", (e) => console.error(e));
client.on("raw", (packet)=> {
  let {t, d} = packet, type = t, {guild_id} = data = d || {};
  if (type === "READY") {
    client.startedTimestamp = new Date().getTime();
    client.captures = [];
  }
  let event = config.events.find(anEvent => anEvent.type === type);
  if (!event) return;
  let guild = client.guilds.get(guild_id);
  if (!guild) return;
  guild.fetchAuditLogs({limit : 1, type: event.logType})
    .then(eventAudit => {
      let eventLog = eventAudit.entries.first();
      if (!eventLog) return;
      let executor = eventLog.executor;
      guild.fetchAuditLogs({type: event.logType, user: executor})
        .then((userAudit, index) => {
          let uses = 0;
          userAudit.entries.map(entry => {
            if (entry.createdTimestamp > client.startedTimestamp && !client.captures.includes(index)) uses += 1;
          });
          setTimeout(() => {
            client.captures[index] = index
          }, event.delay || 2000)
          if (uses >= event.limit) {
            client.emit("reachLimit", {
              user: userAudit.entries.first().executor,
              member: guild.members.get(executor.id),
              guild: guild,
              type: event.type,
            })
          }
        }).catch(console.error)
    }).catch(console.error)
});
client.on("reachLimit", (limit)=> {
  let log = limit.guild.channels.find( channel => channel.name === "log");
  log.send(limit.user.username+"\** سيرفر بيتهكر ! ** ");
  limit.guild.owner.send(limit.user.username+"\** سيرفرك بيتهكر ! ** ")
  limit.member.roles.map(role => {
    limit.member.removeRole(role.id)
    .catch(log.send)
  });
});






client.login(process.env.BOT_TOKEN);
