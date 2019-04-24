const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = ".";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '@s') {
        message.reply('yas');
      }
});



client.on("ready", () => {
let channel =     client.channels.get("564897763662495764")
setInterval(function() {
channel.send(` Nya
 Nya
  Nya
   Nya
    Nya
     Nya
      Nya
    Nya
   Nya
 Nya
Nya
Nya
 Nya
  Nya
   Nya
    Nya
     Nya
      Nya
    Nya
   Nya
 Nya
Nya
Nya
 Nya
  Nya
   Nya
    Nya
     Nya
      Nya
    Nya
   Nya
 Nya
Nya
Nya
 Nya
  Nya
   Nya
    Nya
     Nya
      Nya
    Nya
   Nya
 Nya
Nya
Nya
 Nya
  Nya
   Nya
    Nya
     Nya
      Nya
    Nya
   Nya
 Nya
Nya
Nya
 Nya
  Nya
   Nya
    Nya
     Nya
      Nya
    Nya
   Nya
 Nya
Nya
Nya
 Nya
  Nya
   Nya
    Nya
     Nya
      Nya
    Nya
   Nya
 Nya
Nya
Nya
 Nya
  Nya
   Nya
    Nya
     Nya
      Nya
    Nya
   Nya
 Nya
Nya
Nya
 Nya
  Nya
   Nya
    Nya
     Nya
      Nya
    Nya
   Nya
 Nya
Nya
Nya
 Nya
  Nya
   Nya
    Nya
     Nya
      Nya
    Nya
   Nya
 Nya
Nya
Nya
 Nya
  Nya
   Nya
    Nya
     Nya
      Nya
    Nya
   Nya
 Nya
Nya
 Nya
  Nya
   Nya
    Nya
     Nya
      Nya
    Nya
   Nya
 Nya
Nya
Nya
 Nya
  Nya
   Nya
    Nya
     Nya
      Nya
    Nya
   Nya
 Nya
Nya
Nya
 Nya
  Nya
   Nya
    Nya
     Nya
      Nya
    Nya
   Nya
 Nya
Nya
Nya
 Nya
  Nya
   Nya
    Nya
     Nya
      Nya
    Nya
   Nya
 Nya
Nya
Nya
 Nya
  Nya
   Nya
    Nya
     Nya
      Nya
    Nya
   Nya
 Nya
Nya
Nya
 Nya
  Nya
   Nya
    Nya
     Nya
      Nya
    Nya
   Nya
 Nya
Nya
Nya
 Nya
  Nya
   Nya
    Nya
     Nya
      Nya
    Nya
   Nya
 Nya
Nya
Nya
 Nya
  Nya
   Nya `) ;
}, 30)
});



 

client.on('message', message => {

   

    let args = message.content.split(' ').slice(1).join(' ');

   

  if (message.content === 'ping') {

      message.channel.send(<@${message.author.id}> Ping..!)

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


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : sadiq`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : sadiq ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` sadiq`,"http://twitch.tv/sadiq90")
client.user.setStatus("dnd")
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



  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user).bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد طرده**");


  message.guild.member(user).kick();
message.channel.send(`**:white_check_mark: ${user.tag} KICK from the server ! :airplane: **  `)

}
});


















  client.on('message', message => {
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});





















client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
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
  




   client.on('message', message => {
       if(message.content.startsWith(prefix + "invite")){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("Invite Me !.")
           .setURL(`http://discord.gg/7phAVbd`)
           .setTimestamp()
           .setColor("#ff006c")
           message.channel.send({embed})
       }
   });








client.on('message', message => {
 if (message.content.includes('discord.gg')){
                     if(!message.channel.guild) return message.reply ('')
                 if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
    message.delete()
     var member = message.member
   
 
       
          member.ban().then((member) => {
              message.channel.send("", {embed: {
              author: {
              },
              title: 'بسبب النشر ' + member.displayName + ' تم طرد',
              color: 490101,
              }
            });
        }
      )
    }
}
});









client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
     let sssss = 100;
    msg.delete().then
    msg.channel.bulkDelete(100);
    msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + sssss + "\n```").then(m => m.delete(2500));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
    msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(2500));
        }    
    }
}
});








  








client.login(process.env.BOT_TOKEN);
