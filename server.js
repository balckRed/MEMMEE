const express = require("express");
const session = require("express-session");
const request = require("request");
const app = express ();
app.get ('/', (req, res) => {
res.sendStatus (200);
});
app.listen (process.env.PORT);
function m() {
request.get(`https://${process.env.PROJECT_DOMAIN}.glitch.me/`, (error, response, body) => {
let ff = body;
return ff
}
)}
setInterval(m, 60000); 

  const Discord = require('discord.js');
  const { Client, RichEmbed } = require("discord.js");
  const client = new Client({ disableEveryone: false})
  const botversion = require('./package.json').version;
  const fs = require('fs');
  const ms = require("ms");
const moment = require("moment");
  const prefix = '#'
  const devs = ['541532350719459348','99351862692544532']
//  client.login(process.env.BOT_TOKEN);
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  })



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
    client.user.setActivity(' #help-vip-me | Me Codes V5.0.2 ', { type: 'PLAYING' })
});


// const buy = JSON.parse(fs.readFileSync('./buy.json' , 'utf8'));
// client.on('message',message =>{
//   if(message.content.startsWith(prefix + 'buy ro111le')) {
//   if(!buy[message.guild.id]) buy[message.guild.id] = {
//   role:'null',
//   price:'null',
//   transfer:'null',
//   onoff:'Off'
//   };fs.writeFile("./buy.json",JSON.stringify(buy),(err)=>{if(err)console.error(err)})
//   if(!message.member.hasPermission('MANAGE_GUILD')) return;
//   let args = message.content.split(" ").slice(2).join(" ");
//   if(!args) return message.channel.send(`🙄 Please Type the role Name/ID`);
//   let role = message.guild.roles.find('name',args)||message.guild.roles.find('id',args);
//   if(!role) return message.channel.send(`🙄 I Can't find this role`);
//   buy[message.guild.id].role = role.id
//   fs.writeFile("./buy.json", JSON.stringify(buy), (err) => {if (err) console.error(err)})
//   message.channel.send(new Discord.RichEmbed()
//   .setColor('#35393e').setFooter(message.author.tag,message.author.avatarURL).setTimestamp()
//   .setAuthor('Change settings',message.guild.iconURL)
//   .addField(`**Role Now**`,`**\`\`\`${role.name}\`\`\`**`,true)
//   )
//   }
//   if(message.content.startsWith(prefix+'buy aaaa2')) {
//   if(!message.member.hasPermission('MANAGE_GUILD')) return;
//   if(!buy[message.guild.id]) buy[message.guild.id] = {
//   role:'null',
//   price:'null',
//   transfer:'null',
//   onoff:'Off'
//   };fs.writeFile("./buy.json",JSON.stringify(buy),(err)=>{if(err)console.error(err)})
//   let args = message.content.split(" ").slice(2).join(" ");
//   if(!args) return message.channel.send(`🙄 Please Type the role Price`)
//   if(isNaN(parseInt(args))) return message.channel.send(`🙄 The price is wrong!`)
//   if(parseInt(args)<0) return message.channel.send(`🙄 The price is wrong!`)
//   buy[message.guild.id].price = args
//   fs.writeFile("./buy.json", JSON.stringify(buy),(err)=>{if(err)console.error(err)})
//   message.channel.send(new Discord.RichEmbed()
//   .setColor('#36393e').setFooter(message.author.tag,message.author.avatarURL).setTimestamp()
//   .setAuthor('Change settings',message.guild.iconURL)
//   .addField(`**Role Price Now**`,`**\`\`\`${args}$\`\`\`**`,true)
//   )
//   }
//   if(message.content.startsWith(prefix+'buy a11111')) {
//   if(!message.member.hasPermission('MANAGE_GUILD')) return;
//   if(!buy[message.guild.id]) buy[message.guild.id] = {
//   role:'null',
//   price:'null',
//   transfer:'null',
//   onoff:'Off'
//   };fs.writeFile("./buy.json",JSON.stringify(buy),(err)=>{if(err)console.error(err)})
//   let user = message.mentions.members.first() || message.guild.members.get(message.content.split(" ")[2])
//   buy[message.guild.id].transfer = user.id
//   fs.writeFile("./buy.json", JSON.stringify(buy), (err) => {if (err) console.error(err)})
//   message.channel.send(new Discord.RichEmbed()
//   .setColor('#36393e').setFooter(message.author.tag,message.author.avatarURL).setTimestamp()
//   .setAuthor('Change settings',message.guild.iconURL)
//   .addField(`**Trans To**`,`**${user}**`,true)
//                       )
//   }
//   if(message.content.startsWith(prefix+'buy on')) {
//   if(!message.member.hasPermission('MANAGE_GUILD')) return;
//   if(!buy[message.guild.id]) buy[message.guild.id] = {
//   role:'null',
//   price:'null',
//   transfer:'null',
//   onoff:'Off'
//   };fs.writeFile("./buy.json",JSON.stringify(buy),(err)=>{if(err)console.error(err)})
//   buy[message.guild.id].onoff = 'On'
//   fs.writeFile("./buy.json", JSON.stringify(buy), (err) => {if (err) console.error(err)})
//   let on1 = new Discord.RichEmbed()
//   .setColor('#36393e')
//   .setDescription(`**\`\`\`The BuyRole Has Been Enabled\`\`\`**`)
//   message.channel.send(on1)
//   }
//   if(message.content.startsWith(prefix+'buy off')) {
//   if(!message.member.hasPermission('MANAGE_GUILD')) return;
//   if(!buy[message.guild.id]) buy[message.guild.id] = {
//   role:'null',
//   price:'null',
//   transfer:'null',
//   onoff:'Off'
//   };fs.writeFile("./buy.json",JSON.stringify(buy),(err)=>{if(err)console.error(err)})
//   buy[message.guild.id].onoff = 'Off'
//   fs.writeFile("./buy.json", JSON.stringify(buy), (err) => {if (err) console.error(err)})
//   let off1 = new Discord.RichEmbed()
//   .setColor('#36393e')
//   .setDescription(`**\`\`\`The BuyRole has been disabled\`\`\`**`)
//   message.channel.send(off1)
//   }
//   if(message == prefix + 'buy vip') {
//   if(!buy[message.guild.id]) buy[message.guild.id] = {
//   role:'null',
//   price:'null',
//   transfer:'null',
//   onoff:'Off'
//   };fs.writeFile("./buy.json",JSON.stringify(buy),(err)=>{if(err)console.error(err)})
//   let pp = buy[message.guild.id].price
//   let brole = message.guild.roles.find('id',buy[message.guild.id].role)
//   let btrans = buy[message.guild.id].transfer
//   if(!brole) return message.channel.send(`🙁 Please setup the command again`)
//   if(!message.guild.members.find('id',buy[message.guild.id].transfer))return message.channel.send(`🙁 Please setup the command again`)
//   if(buy[message.guild.id].onoff === 'Off') return message.channel.send(`🙁 - the command has been disabled\nplease type __${prefix}buy on__ to turn it on`)
//   if(message.author.id === buy[message.guild.id].transfer) return message.channel.send(`you can't buy a rank because you can't transfer credits to your self 🤗`)
//   if(message.member.roles.find(r=>r.id == buy[message.guild.id].role)) return message.reply(`**You already have the rank \`${brole.name}\` ✅**`);
//   message.channel.send(new Discord.RichEmbed()
//   .setColor('#36393e')
//   .addField(`**Command:**`, `**\`#credits ${message.guild.members.get(buy[message.guild.id].transfer)} ${buy[message.guild.id].price}\`**`)).then(msgs=>{
//   let lPrice = Math.floor(pp-(pp*(5/100)));
//   let filter = response => response.author.id == "567703512763334685" && response.mentions._content.includes(`:moneybag: | ${message.author.username}, has transferred \`$${lPrice}\` to <@${buy[message.guild.id].transfer}>`);
//   message.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
//   .then( collected =>{
//   let log = message.guild.channels.find("name", `❖・log・vip`);
//        moment.locale("en-TN");
//   let gg = new Discord.RichEmbed()
//   .setColor('#36393e')
//   .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588151955063570433/582096911448801288.png`)
//   .setAuthor(`New purchase`,`https://cdn.discordapp.com/attachments/584630360017469461/584687464334098432/581239984376381455.gif`)
//   .addField(`**User :**`,`${message.author.id}، ${message.author}`,true)
//   .addField(`**Role :**`,`\`\`\`${brole.name}\`\`\``,true)
//   .addField(`**💰 Rank Price :**`,`\`\`\`${buy[message.guild.id].price}$\`\`\``,true)
//   .addField(`**💳 Transferd To :**`,`<@${buy[message.guild.id].transfer}>`,true)
// .addField(`**Date:**`,`\`\`\`${moment(message.author).format('DD/MM/YYYY')}\`\`\` `,true)
//   .setTimestamp();
//   if(log) log.send(gg)
//   const done = new Discord.RichEmbed()
//   .setColor('#36393e')
//   .setDescription(`**\`\`\`Done Buy Role ${brole.name}\`\`\`**`)
//   .setTimestamp();
//   message.member.addRole(brole)
//   message.channel.send(done);
//  var mmm = setTimeout(() => {
// message.member.removeRole(brole)
// }, 2592000000)
//   message.author.send(new Discord.RichEmbed()
//   .setColor("#36393e")
//   .setTitle('Role VIP')
//   .setDescription(`\`\`\`RANK NAME: ${brole.name} RANK PRICE: ${buy[message.guild.id].price}$ \`\`\``)
//   .setFooter(message.guild.name,message.guild.iconURL))
// })
// })
// }
// });



client.on('raw', payload => {
    if(payload.t === 'MESSAGE_REACTION_ADD') {
        if(payload.d.emoji.name === '⚙️')
        {
            if(payload.d.message_id === '692827797483421768') {
                let channel = client.channels.get(payload.d.channel_id)
                if(channel.messages.has(payload.d.message_id)) {
                    return;
            
                } else { 
                    channel.fetchMessage(payload.d.message_id)
                    .then(msg => {
                        let reaction = msg.reactions.get("⚙️");
                        let user = client.users.get(payload.d.user_id);
                        client.emit('messageReactionAdd', reaction, user);
                    })
                }
            }
        } else if(payload.d.emoji.name === "📝") {
            let channel = client.channels.get(payload.d.channel_id);
            if(channel.messages.has(payload.d.message_id)) {
                return;
            }
            else {
                channel.fetchMessage(payload.d.message_id)
                .then(msg => {
                    let reaction = msg.reactions.get("📝");
                    let user = client.users.get(payload.d.user_id);
                    client.emit('messageReactionAdd', reaction, user);
                })
            }
        } else if(payload.d.emoji.name === "📚") {
            let channel = client.channels.get(payload.d.channel_id);
            if(channel.messages.has(payload.d.message_id)) {
                return;
            }
            else {
                channel.fetchMessage(payload.d.message_id)
                .then(msg => {
                    let reaction = msg.reactions.get("📚");
                    let user = client.users.get(payload.d.user_id);
                    client.emit('messageReactionAdd', reaction, user);
                }) 
            }
        }  
    }
}) 

client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === '⚙️') { 
       
      const member = reaction.message.guild.members.get(user.id)
      if (member.id !== client.user.id) {
  let role = reaction.message.guild.roles.find(r => r.name === "Codes")
member.addRole(role.id)
      }
      } else if(reaction.emoji.name === '📝') {
      const member = reaction.message.guild.members.get(user.id)
    if(member.id !== client.user.id) {
  let rolee = reaction.message.guild.roles.find(r => r.name === "Education") 
member.addRole(rolee.id)
   }
  } else if(reaction.emoji.name === '📚') {
   const member = reaction.message.guild.members.get(user.id)
   if(member.id !== client.user.id) {
     let roleee = reaction.message.guild.roles.find(r => r.name === "Tutorials")
member.addRole(roleee.id)
   }
  }
})



	client.on('message', message => {
    if (message.author.bot) return;
    if (message.content === prefix + "help-vip-py") {
    if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

 **=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 
نـاسـفف
 لا يـوجـد أكـواد بـايـثـون ألان , لـكـن سـيـتـم وضـع اكـواد قـريـبـا ..  <a:Gears:677203489650114560> 

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
}) 
 
 	client.on('message', message => {
    if (message.author.bot) return;
    if (message.content === prefix + "help-vip-photoshop") {
if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 
<:Photoshop_CC_icon:602118339699015710> | 1 \`-\` ${prefix}help-vip-photoshop-1 <a:1111:597802499633709076> __P__hotoshop __F__iles

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
}) 

    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-vip-photoshop-1") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __P__hotoshop __F__iles
<a:28:674311913576071179> | __C__ode : http://www.mediafire.com/file/qowkg3915lzr2nz/%25D8%25B5%25D9%2588%25D8%25B1_%25D9%2581%25D9%2588%25D8%25AA%25D9%2588%25D8%25B4%25D9%2588%25D8%25A8.zip/file
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __P__hotoshop
 **
 `);

    }
});

 	client.on('message', message => {
    if (message.author.bot) return;
    if (message.content === prefix + "help-vip-me") {
      if (message.channel.id !== '692785469255057478') return message.reply(`** ..لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

<a:583733810508595212:594992244512129024> | 1 \`-\` ${prefix}help-vip-discord <a:1111:597802499633709076> __D__epartment __o__f __D__iscord 
:globe_with_meridians: | 2 \`-\` ${prefix}help-vip-Sites <a:1111:597802499633709076> __S__ites __S__ection
<a:592019220397686794:594177289533653012> | 3 \`-\` ${prefix}help-vip-theme <a:1111:597802499633709076> __S__ection __T__heme
<a:541930665080520714:594176031385190400> | 4 \`-\` ${prefix}help-vip-hosting <a:1111:597802499633709076> __H__osting __S__ection
<:Photoshop_CC_icon:602118339699015710> | 5 \`-\` ${prefix}help-vip-photoshop <a:1111:597802499633709076> __S__ection __P__hotoshop
<a:27:674311912917303296>  | 6 \`-\` ${prefix}help-vip-program <a:1111:597802499633709076> __S__ection __P__rogram

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
}) 

 	client.on('message', message => {
    if (message.author.bot) return;
    if (message.content === prefix + "help-vip-discord") {
      if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

<:2_:597778055188185150> | 1 \`-\` #help-vip-discord-js <a:1111:597802499633709076> __J__ava __S__cript __S__ection 
<:5_:597778029099352075> | 2 \`-\` #help-vip-discord-py <a:1111:597802499633709076> __P__ython __S__ection 

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
}) 

 	client.on('message', message => {
    if (message.author.bot) return;
    if (message.content === prefix + "help-vip-js-music") {
        if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

 **=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 
<:2_:597778055188185150> | 1 \`-\` #help-vip-js-music-1 <a:1111:597802499633709076> __C__odes  __M__usic

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
}) 

    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-vip-js-music-1") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __C__odes  __M__usic 
<a:28:674311913576071179> | __C__ode : https://pastebin.com/tdz58Zpz
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odes  __M__usic
 **
 `);

    }
});


 	client.on('message', message => {
    if (message.author.bot) return;
    if (message.content === prefix + "help-vip-discord-js") {
        if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

<:2_:597778055188185150> | 1 \`-\` #help-vip-js-admin <a:1111:597802499633709076> Department of Administration Code
<:2_:597778055188185150> | 2 \`-\` #help-vip-js-general <a:1111:597802499633709076> Section General Code
<:2_:597778055188185150> | 3 \`-\` #help-vip-js-welcome  <a:1111:597802499633709076> __W__elcome 
<:2_:597778055188185150> | 4 \`-\` #help-vip-js-help <a:1111:597802499633709076> __C__odes __H__elp
<:2_:597778055188185150> | 5 \`-\` #help-vip-js-bc <a:1111:597802499633709076>  __C__odes __B__roadcast
<:2_:597778055188185150> | 6 \`-\` #help-vip-js-own <a:1111:597802499633709076> __C__ompanion __b__ot
<:2_:597778055188185150> | 7 \`-\` #help-vip-js-music <a:1111:597802499633709076> __C__odes  __M__usic


=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
}) 

 	client.on('message', message => {
    if (message.author.bot) return;
    if (message.content === prefix + "help-vip-js-own") {
        if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

 **=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 
<:2_:597778055188185150> | 1 \`-\` #help-vip-js-own-1 <a:1111:597802499633709076> __B__rafx __b__ot __c__hanged
<:2_:597778055188185150> | 2 \`-\` #help-vip-js-own-2 <a:1111:597802499633709076> __T__he __b__ot's __c__ondition __h__as __c__hanged

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
}) 

    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-vip-js-own-1") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __B__rafx __b__ot __c__hanged
<a:28:674311913576071179> | __C__ode : https://pastebin.com/wMGsXWb4
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__ompanion __b__ot
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-vip-js-own-2") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __T__he __b__ot's __c__ondition __h__as __c__hanged
<a:28:674311913576071179> | __C__ode : https://github.com/DoMaBOY/stream
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__ompanion __b__ot
 **
 `);

    }
});

 	client.on('message', message => {
    if (message.author.bot) return;
    
    if (message.content === prefix + "help-vip-js-bc") {
        if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

 **=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 
<:2_:597778055188185150> | 1 \`-\` #help-vip-js-bc-1 <a:1111:597802499633709076> __B__roadcast __P__ro__B__ot
<:2_:597778055188185150> | 2 \`-\` #help-vip-js-bc-2 <a:1111:597802499633709076> ___B__roadcast __b__y __E__moji

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
}) 

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-bc-1") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __B__roadcast __P__ro__B__ot
<a:28:674311913576071179> | __C__ode : https://pastebin.com/EmDvKtAL
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __B__roadcast
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-bc-2") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : ___B__roadcast __b__y __E__moji
<a:28:674311913576071179> | __C__ode : https://pastebin.com/jurcUVMT
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __B__roadcast
 **
 `);

    }
});

 	client.on('message', message => {
    if (message.author.bot) return;
    
    if (message.content === prefix + "help-vip-js-admin") {
        if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

<:2_:597778055188185150> | 1 \`-\` #help-vip-js-admin-1 <a:1111:597802499633709076> __K__ick __M__ember
<:2_:597778055188185150> | 2 \`-\` #help-vip-js-admin-2 <a:1111:597802499633709076> __B__an __M__ember
<:2_:597778055188185150> | 3 \`-\` #help-vip-js-admin-3 <a:1111:597802499633709076> __M__ute __U__nscrew __M__ute
<:2_:597778055188185150> | 4 \`-\` #help-vip-js-admin-4 <a:1111:597802499633709076> __G__ive __R__owley
<:2_:597778055188185150> | 5 \`-\` #help-vip-js-admin-5 <a:1111:597802499633709076> __C__lear __C__hat
<:2_:597778055188185150> | 6 \`-\` #help-vip-js-admin-6 <a:1111:597802499633709076> __C__ode __W__arning
<:2_:597778055188185150> | 7 \`-\` #help-vip-js-admin-7 <a:1111:597802499633709076> __S__erver ___I__nformation
<:2_:597778055188185150> | 8 \`-\` #help-vip-js-admin-8 <a:1111:597802499633709076> __D__elete __R__om __a__nd __V__oice __&__ __C__hat
<:2_:597778055188185150> | 9 \`-\` #help-vip-js-admin-9 <a:1111:597802499633709076> __P__revent __P__osting
<:2_:597778055188185150> | 10 \`-\` #help-vip-js-admin-10 <a:1111:597802499633709076> __A__utomatic __r__eply

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
}) 

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-admin-1") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
**
<a:33:674311916776194084> | __D__escribe : __K__ick __M__ember
<a:28:674311913576071179> | __C__ode : https://pastebin.com/My2nYTug
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __A__dmin
**
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-admin-2") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __B__an __M__ember
<a:28:674311913576071179> | __C__ode : https://pastebin.com/ZpiKHpAS 
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __A__dmin
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-admin-3") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __M__ute __U__nscrew __M__ute
<a:28:674311913576071179> | __C__ode : https://pastebin.com/dDTzWNjS
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __A__dmin
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-admin-4") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __G__ive __R__owley
<a:28:674311913576071179> | __C__ode : https://pastebin.com/fC10hJ4W
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __A__dmin
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-admin-5") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __C__lear __C__hat
<a:28:674311913576071179> | __C__ode : https://pastebin.com/QX1bwk2p
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __A__dmin
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-admin-6") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __C__ode __W__arning
<a:28:674311913576071179> | __C__ode : https://pastebin.com/AYjEQNdh
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __A__dmin
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-admin-7") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __S__erver ___I__nformation
<a:28:674311913576071179> | __C__ode : https://pastebin.com/UAhHe840
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __A__dmin
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-admin-8") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __D__elete __R__om __a__nd __V__oice __&__ __C__hat
<a:28:674311913576071179> | __C__ode : https://pastebin.com/uPNYyUVz
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __A__dmin
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-admin-9") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __P__revent __P__osting
<a:28:674311913576071179> | __C__ode : https://pastebin.com/PZhjAX3Y
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __A__dmin
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-admin-10") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __A__utomatic __r__eply
<a:28:674311913576071179> | __C__ode : https://pastebin.com/AMxfhHxc
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __A__dmin
 **
 `);

    }
});

 	client.on('message', message => {
    if (message.author.bot) return;
    
    if (message.content === prefix + "help-vip-js-general") {
        if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

<:2_:597778055188185150> | 1 \`-\` #help-vip-js-general-1 <a:1111:597802499633709076> __P__revent __c__ursing
<:2_:597778055188185150> | 2 \`-\` #help-vip-js-general-2 <a:1111:597802499633709076> __A__vatar __P__roBot
<:2_:597778055188185150> | 3 \`-\` #help-vip-js-general-3 <a:1111:597802499633709076> __T__he __n__umber __o__f __m__embers __i__n __R__om __v__ocal
<:2_:597778055188185150> | 4 \`-\` #help-vip-js-general-4 <a:1111:597802499633709076> __C__onvert __s__peech __t__o __e__moji
<:2_:597778055188185150> | 5 \`-\` #help-vip-js-general-5 <a:1111:597802499633709076> __I__soy __S__creen __S__hare __t__o __R__om __V__ocal
<:2_:597778055188185150> | 6 \`-\` #help-vip-js-general-6 <a:1111:597802499633709076> __T__o __s__earch __f__or __c__olloquial __w__ords
<:2_:597778055188185150> | 7 \`-\` #help-vip-js-general-7 <a:1111:597802499633709076> __V__oice __O__nline
<:2_:597778055188185150> | 8 \`-\` #help-vip-js-general-8 <a:1111:597802499633709076> __T__op __S__urf
<:2_:597778055188185150> | 9 \`-\` #help-vip-js-general-9 <a:1111:597802499633709076> __D__eveloper __S__uggestions
<:2_:597778055188185150> | 10 \`-\` #help-vip-js-general-10 <a:1111:597802499633709076> __P__ull __a__ll __t__he __r__um __i__n __y__our __r__um**`);
 
       
    }
}) 

 	client.on('message', message => {
    if (message.author.bot) return;
    
    if (message.content === prefix + "help-vip-js-general") {
        if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`
**<:2_:597778055188185150> | 11 \`-\` #help-vip-js-general-11 <a:1111:597802499633709076> __C__ode __o__f __s__canning __o__f __b__ot __m__essages __f__rom __r__um.
<:2_:597778055188185150> | 12 \`-\` #help-vip-js-general-12 <a:1111:597802499633709076> __p__ing __p__ro __b__ot
<:2_:597778055188185150> | 13 \`-\` #help-vip-js-general-13 <a:1111:597802499633709076> __S__earch __G__oogle
<:2_:597778055188185150> | 14 \`-\` #help-vip-js-general-14 <a:1111:597802499633709076> __L__ink __c__ode __w__ith __a__ctivation __a__nd __d__eactivation
<:2_:597778055188185150> | 15 \`-\` #help-vip-js-general-15 <a:1111:597802499633709076> __B__ack __r__anks __l__ike __P__ro __B__ot
<:2_:597778055188185150> | 16 \`-\` #help-vip-js-general-16 <a:1111:597802499633709076> __W__arning __c__ode
<:2_:597778055188185150> | 17 \`-\` #help-vip-js-general-17 <a:1111:597802499633709076> __W__eather __c__ode
<:2_:597778055188185150> | 18 \`-\` #help-vip-js-general-18 <a:1111:597802499633709076> __R__ank __i__nformation __c__ode
<:2_:597778055188185150> | 19 \`-\` #help-vip-js-general-19 <a:1111:597802499633709076>  __N__o __l__imit __i__s __w__ritten __t__o __m__odify __o__n __t__he __r__ight __c__ommand
<:2_:597778055188185150> | 20 \`-\` #help-vip-js-general-20 <a:1111:597802499633709076>  __D__escribe : __P__rohibition __o__f __p__ublication

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
})

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-1") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __P__revent __c__ursing
<a:28:674311913576071179> | __C__ode : https://pastebin.com/RR1GpArA 
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-2") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __A__vatar __P__roBot
<a:28:674311913576071179> | __C__ode : https://pastebin.com/Sh63TqT9
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-3") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __T__he __n__umber __o__f __m__embers __i__n __R__om __v__ocal
<a:28:674311913576071179> | __C__ode : https://pastebin.com/4mVmuGcz
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-4") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __C__onvert __s__peech __t__o __e__moji
<a:28:674311913576071179> | __C__ode : https://pastebin.com/FDwnKHh5
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-5") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __I__soy __S__creen __S__hare __t__o __R__om __V__ocal
<a:28:674311913576071179> | __C__ode : https://pastebin.com/WtwULEBT
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-6") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __T__o __s__earch __f__or __c__olloquial __w__ords
<a:28:674311913576071179> | __C__ode : https://pastebin.com/wSvjs9Ea
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-7") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __V__oice __O__nline
<a:28:674311913576071179> | __C__ode : https://pastebin.com/2NMq6ysx
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-8") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __T__op __S__urf
<a:28:674311913576071179> | __C__ode : https://pastebin.com/7SJ2CGuL
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-9") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __D__eveloper __S__uggestions
<a:28:674311913576071179> | __C__ode : https://pastebin.com/yLNsCpzz
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-10") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __P__ull __a__ll __t__he __r__um __i__n __y__our __r__um
<a:28:674311913576071179> | __C__ode : https://pastebin.com/fS3zm5PH
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-11") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __C__ode __o__f __s__canning __o__f __b__ot __m__essages __f__rom __r__um.
<a:28:674311913576071179> | __C__ode : https://pastebin.com/mHgm1ThN
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-12") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __p__ing __p__ro __b__ot
<a:28:674311913576071179> | __C__ode : https://pastebin.com/4rugc09b
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-13") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __S__earch __G__oogle
<a:28:674311913576071179> | __C__ode : https://pastebin.com/3PxtHTze
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-14") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __L__ink __c__ode __w__ith __a__ctivation __a__nd __d__eactivation
<a:28:674311913576071179> | __C__ode : https://pastebin.com/WUjcMkuQ
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-15") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __B__ack __r__anks __l__ike __P__ro __B__ot
<a:28:674311913576071179> | __C__ode : https://pastebin.com/2sWwcBYy
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-16") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __W__arning __c__ode
<a:28:674311913576071179> | __C__ode : https://pastebin.com/ph3ZDDjF
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-17") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __W__eather __c__ode
<a:28:674311913576071179> | __C__ode : https://pastebin.com/jFRARHUg
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-18") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __R__ank __i__nformation __c__ode
<a:28:674311913576071179> | __C__ode : https://pastebin.com/eFANQbRq
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-19") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __N__o __l__imit __i__s __w__ritten __t__o __m__odify __o__n __t__he __r__ight __c__ommand
<a:28:674311913576071179> | __C__ode : https://pastebin.com/YnzGBqzp
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-general-20") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __P__rohibition __o__f __p__ublication
<a:28:674311913576071179> | __C__ode : https://pastebin.com/1GaiEFPh
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __G__eneral
 **
 `);

    }
});


 	client.on('message', message => {
    if (message.author.bot) return;
    
    if (message.content === prefix + "help-vip-js-welcome") {
        if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

 **=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 
<:2_:597778055188185150> | 1 \`-\` #help-vip-js-welcome-1 <a:1111:597802499633709076> __W__elcome __i__n __y__our
<:2_:597778055188185150> | 2 \`-\` #help-vip-js-welcome-2 <a:1111:597802499633709076> __W__elcome __l__ike __S__Bot
<:2_:597778055188185150> | 3 \`-\` #help-vip-js-welcome-3 <a:1111:597802499633709076> __W__elcome __t__o __a__n __i__maginary __a__ccount
<:2_:597778055188185150> | 4 \`-\` #help-vip-js-welcome-4 <a:1111:597802499633709076> __W__elcome __l__ike __P__ro __B__ot

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
}) 

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-welcome-1") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __W__elcome __i__n __y__our
<a:28:674311913576071179> | __C__ode : https://pastebin.com/BVQkQ55g 
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __W__elcome 
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-welcome-2") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __W__elcome __l__ike __S__Bot
<a:28:674311913576071179> | __C__ode : https://pastebin.com/j0RiUhR9
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __W__elcome 
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-welcome-3") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __W__elcome __t__o __a__n __i__maginary __a__ccount
<a:28:674311913576071179> | __C__ode : https://pastebin.com/RgjHzWez
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __W__elcome 
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-welcome-4") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __W__elcome __l__ike __P__ro __B__ot
<a:28:674311913576071179> | __C__ode : https://pastebin.com/s5tB2xJT
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __W__elcome 
 **
 `);

    }
});


 	client.on('message', message => {
    if (message.author.bot) return;
    
    if (message.content === prefix + "help-vip-js-help") {
        if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

<:2_:597778055188185150> | 1 \`-\` #help-vip-js-help-1 <a:1111:597802499633709076> __H__elp __B__a __E__moji
<:2_:597778055188185150> | 2 \`-\` #help-vip-js-help-2 <a:1111:597802499633709076> __H__elp __O__rdinary
<:2_:597778055188185150> | 3 \`-\` #help-vip-js-help-3 <a:1111:597802499633709076> __H__elp __I__n __P__rivate
<:2_:597778055188185150> | 4 \`-\` #help-vip-js-help-4 <a:1111:597802499633709076> __H__elp __S__pecific __r__anks

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
}) 

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-help-1") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __H__elp __B__a __E__moji
<a:28:674311913576071179> | __C__ode : https://pastebin.com/k9sS9aZK
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __H__elp
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-help-2") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __H__elp __O__rdinary
<a:28:674311913576071179> | __C__ode : https://pastebin.com/7eRh1xWN
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __H__elp
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-help-3") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __H__elp __I__n __P__rivate
<a:28:674311913576071179> | __C__ode : https://pastebin.com/yDJSPe1Y
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __H__elp
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-js-help-4") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __H__elp __S__pecific __r__anks
<a:28:674311913576071179> | __C__ode : https://pastebin.com/WqTVxmCr
<a:27:674311912917303296>  | __T__ype __o__f __c__ode : __H__elp
 **
 `);

    }
});






//// قسم اكواد الموقع




 	client.on('message', message => {
    if (message.author.bot) return;
    
    if (message.content === prefix + "help-vip-sites") {
        if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

 **=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 
<:4_:597778036171079681> | 1 \`-\` #help-vip-html <a:1111:597802499633709076> __L__ist __C__odes __HTML__
<:1_:597778061995278360> | 2 \`-\` #help-vip-php <a:1111:597802499633709076> __L__ist __C__odes __PHP__

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
})


 	client.on('message', message => {
    if (message.author.bot) return;
    
    if (message.content === prefix + "help-vip-html") {
        if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

 **=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 
<:4_:597778036171079681> | 1 \`-\` #help-vip-html-game <a:1111:597802499633709076> __C__odes __G__ame
<:4_:597778036171079681> | 2 \`-\` #help-vip-html-general <a:1111:597802499633709076> __C__odes __G__eneral

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
}) 

 	client.on('message', message => {
    if (message.author.bot) return;
    
    if (message.content === prefix + "help-vip-html-game") {
        if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

 **=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 
<:4_:597778036171079681> | 1 \`-\` #help-vip-html-game-1 <a:1111:597802499633709076> __T__he __W__orm __G__ame
<:4_:597778036171079681> | 2 \`-\` #help-vip-html-game-2 <a:1111:597802499633709076> __C__ircle __G__ames
<:4_:597778036171079681> | 3 \`-\` #help-vip-html-game-3 <a:1111:597802499633709076> __1000__ __G__ames
<:4_:597778036171079681> | 4 \`-\` #help-vip-html-game-4 <a:1111:597802499633709076> __T__om __A__nd __J__erry __G__ame
<:4_:597778036171079681> | 5 \`-\` #help-vip-html-game-5 <a:1111:597802499633709076> __C__ar __R__acing __G__ame __C__ode
<:4_:597778036171079681> | 6 \`-\` #help-vip-html-game-6 <a:1111:597802499633709076> __A__ircraft __W__ar __G__ame
<:4_:597778036171079681> | 7 \`-\` #help-vip-html-game-7 <a:1111:597802499633709076> __R__isky __R__acer __(Mathematical game)__


=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
}) 

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-html-game-1") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __T__he __W__orm __G__ame
<a:28:674311913576071179> | __C__ode : https://pastebin.com/xQNjvXKw
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odes __G__ame
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-html-game-2") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __C__ircle __G__ames
<a:28:674311913576071179> | __C__ode : https://pastebin.com/Rbe6jaAY
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odes __G__ame
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-html-game-3") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __1000__ __G__ames
<a:28:674311913576071179> | __C__ode : https://pastebin.com/3nyC4r5Z
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odes __G__ame
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-html-game-4") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __T__om __A__nd __J__erry __G__ame
<a:28:674311913576071179> | __C__ode : https://pastebin.com/6ZisX8eU
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odes __G__ame
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-html-game-5") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __C__ar __R__acing __G__ame __C__ode
<a:28:674311913576071179> | __C__ode : https://pastebin.com/dZAbt4qi
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odes __G__ame
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-html-game-6") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __A__ircraft __W__ar __G__ame
<a:28:674311913576071179> | __C__ode : https://pastebin.com/zamZfuK2
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odes __G__ame
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-html-game-7") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __R__isky __R__acer __(Mathematical game)__
<a:28:674311913576071179> | __C__ode : https://pastebin.com/UXMbC76w
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odes __G__ame
 **
 `);

    }
});



 	client.on('message', message => {
    if (message.author.bot) return;
    
    if (message.content === prefix + "help-vip-html-general") {
        if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

 **=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 
<:4_:597778036171079681> | 1 \`-\` #help-vip-html-general-1 <a:1111:597802499633709076> __S__et __F__ire __B__y __D__ate __W__ith __S__ubject
<:4_:597778036171079681> | 2 \`-\` #help-vip-html-general-2 <a:1111:597802499633709076> __T__ext __I__nside __F__ixed __F__rame __W__ith __H__idden __A__udio __S__ource
<:4_:597778036171079681> | 3 \`-\` #help-vip-html-general-3 <a:1111:597802499633709076> __Q__uestion __A__nd __A__nswer __O__ptions __M__enu
<:4_:597778036171079681> | 4 \`-\` #help-vip-html-general-4 <a:1111:597802499633709076> __V__ideo __F__ile __P__lay __C__ode __(with screen frame)__
<:4_:597778036171079681> | 5 \`-\` #help-vip-html-general-5 <a:1111:597802499633709076> __Y__our __F__avorite __C__olor __I__ist __F__or __D__ackground
<:4_:597778036171079681> | 6 \`-\` #help-vip-html-general-6 <a:1111:597802499633709076> __C__hallenge __L__ist
<:4_:597778036171079681> | 7 \`-\` #help-vip-html-general-7 <a:1111:597802499633709076> __V__arious __F__orms __T__o __E__xit __T__he __P__age
<:4_:597778036171079681> | 8 \`-\` #help-vip-html-general-8 <a:1111:597802499633709076> __A__nd __A__nswer __C__ode
<:4_:597778036171079681> | 9 \`-\` #help-vip-html-general-9 <a:1111:597802499633709076> __W__riting __C__ode __W__ith __F__ire

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
}) 

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-html-general-1") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __S__et __F__ire __B__y __D__ate __W__ith __S__ubject
<a:28:674311913576071179> | __C__ode : https://pastebin.com/4yysQ4ds
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odes __G__eneral
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-html-general-2") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __T__ext __I__nside __F__ixed __F__rame __W__ith __H__idden __A__udio __S__ource
<a:28:674311913576071179> | __C__ode : https://pastebin.com/ngqqe8L2
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odes __G__eneral
 **
 `);

    }
});

     client.on('message', message => {
    if (message.author.bot) return;
  
     if (message.content === prefix + "help-vip-html-general-3") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __Q__uestion __A__nd __A__nswer __O__ptions __M__enu
<a:28:674311913576071179> | __C__ode : https://pastebin.com/cC3r7NiL
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odes __G__eneral
 **
 `);

    }
});

     client.on('message', message => {
    if (message.author.bot) return;
  
     if (message.content === prefix + "help-vip-html-general-4") {
         if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __V__ideo __F__ile __P__lay __C__ode __(with screen frame)__
<a:28:674311913576071179> | __C__ode : https://pastebin.com/04P1Sr46
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odes __G__eneral
 **
 `);

    }
});

     client.on('message', message => {
    if (message.author.bot) return;
  
     if (message.content === prefix + "help-vip-html-general-5") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __Y__our __F__avorite __C__olor __I__ist __F__or __D__ackground
<a:28:674311913576071179> | __C__ode : https://pastebin.com/eRLWBSKm
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odes __G__eneral
 **
 `);

    }
});

     client.on('message', message => {
    if (message.author.bot) return;
  
     if (message.content === prefix + "help-vip-html-general-6") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __C__hallenge __L__ist
<a:28:674311913576071179> | __C__ode : https://pastebin.com/RMVXsUcH
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odes __G__eneral
 **
 `);

    }
});

     client.on('message', message => {
    if (message.author.bot) return;
  
     if (message.content === prefix + "help-vip-html-general-7") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __V__arious __F__orms __T__o __E__xit __T__he __P__age
<a:28:674311913576071179> | __C__ode : https://pastebin.com/q2aAqpQJ
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odes __G__eneral
 **
 `);

    }
});

     client.on('message', message => {
    if (message.author.bot) return;
  
     if (message.content === prefix + "help-vip-html-general-8") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __B__utton __A__nd __A__nswer __C__ode
<a:28:674311913576071179> | __C__ode : \`\`\` <input type=button value=النص على الزر onClick="alert('الاجابه')"> <P  \`\`\`
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odes __G__eneral
 **
 `);

    }
});

     client.on('message', message => {
    if (message.author.bot) return;
  
     if (message.content === prefix + "help-vip-html-general-9") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __W__riting __C__ode __W__ith __F__ire
<a:28:674311913576071179> | __C__ode : \`\`\` 
<BR><BR><BR><head><BR><meta name="GENERATOR"
content="Microsoft FrontPage 4.0"><BR><meta name="ProgId"
content="FrontPage.Editor.Document"><BR></head><APPLET
codebase="http://ie.yimg.com/e/5da47e1c/h/87d89c18"
width=300height=300 code="flame.class" height="128"> <BR>
<param name="text" value="الــنــار مـاتـحـرق+ الا +رجــل واطـيـهـا">
</applet> <BR> 
<br> 
<DIV id=cdiv \`\`\`
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odes __G__eneral
 **
 `);

    }
});



 	client.on('message', message => {
    if (message.author.bot) return;
    
    if (message.content === prefix + "help-vip-php") {
      if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

 **=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 
<:1_:597778061995278360> | 1 \`-\` #help-vip-php-1 <a:1111:597802499633709076> __A__utomatic __F__acebook __F__etch __C__ount
<:1_:597778061995278360> | 2 \`-\` #help-vip-php-2 <a:1111:597802499633709076> __C__heck __T__he __M__ail __I__f __I__t __I__s __C__orrect
<:1_:597778061995278360> | 3 \`-\` #help-vip-php-3 <a:1111:597802499633709076> __F__enection __I__nput __P__rotection 
<:1_:597778061995278360> | 4 \`-\` #help-vip-php-4 <a:1111:597802499633709076> __V__iew __T__he __S__ize __O__f __T__he __F__ile __I__n __A__n __U__nreadable __F__ormat __A__s __MB__
<:1_:597778061995278360> | 5 \`-\` #help-vip-php-5 <a:1111:597802499633709076> __HTML5__ __T__emplate __I__s __O__perational

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
}) 



   client.on('message', message => {
    if (message.author.bot) return;

     if (message.content === prefix + "help-vip-php-1") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __A__utomatic __F__acebook __F__etch __C__ount
<a:28:674311913576071179> | __C__ode : 
\`\`\`
<?php
$source_url = "http://www.facebook.com/traidnt";
$url = "http://api.facebook.com/restserver.php?method=links.getStats&urls=".urlencode($sourceرمز PHP:_url);
$xml = file_get_contents($url);
$xml = simplexml_load_string($xml);
echo "Like --- ".$likes = $xml->link_stat->like_count;
?>
\`\`\`
	 <a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odec __PHP__
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-php-2") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __C__heck __T__he __M__ail __I__f __I__t __I__s __C__orrect
<a:28:674311913576071179> | __C__ode : 

\`\`\`\
if (filter_var('asasss44@fexample.com', FILTER_VALIDATE_EMAIL)) {
    echo "email is ok.";
} else {
    echo "Wrong email.";

\`\`\`\
	 <a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odec __PHP__
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-php-3") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __F__enection __I__nput __P__rotection 
<a:28:674311913576071179> | __C__ode : 

\`\`\`\
function clean_value($getandpost) 
    { 
    $getandpost = htmlspecialchars($getandpost); 
    $getandpost = str_replace("select","",$getandpost); 
    $getandpost = str_replace("update","",$getandpost); 
    $getandpost = str_replace("insert","",$getandpost); 
    $getandpost = str_replace("where","",$getandpost); 
    $getandpost = str_replace("like","",$getandpost); 
    $getandpost = str_replace("or","",$getandpost); 
    $getandpost = str_replace("and","",$getandpost); 
    $getandpost = str_replace("set","",$getandpost); 
    $getandpost = str_replace("into","",$getandpost);
    $getandpost = str_replace('"',"",$getandpost); 
    $codenumber = str_replace("'", "", $codenumber); 
    $codenumber = str_replace(";", "", $codenumber); 
    $codenumber = str_replace(">", "", $codenumber); 
    $codenumber = str_replace("<", "", $codenumber); 
    $getandpost=strip_tags($getandpost); 
    return $getandpost; 
\`\`\`\
	 <a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odec __PHP__
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-php-4") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __V__iew __T__he __S__ize __O__f __T__he __F__ile __I__n __A__n __U__nreadable __F__ormat __A__s __MB__
<a:28:674311913576071179> | __C__ode : 
\`\`\`\
<?php 
function file_size($url){ 
    $size = filesize($url); 
    if($size >= 1073741824){ 
        $fileSize = round($size/1024/1024/1024,1) . 'GB'; 
    }elseif($size >= 1048576){ 
        $fileSize = round($size/1024/1024,1) . 'MB'; 
    }elseif($size >= 1024){ 
        $fileSize = round($size/1024,1) . 'KB'; 
    }else{ 
        $fileSize = $size . ' bytes'; 
    } 
    return $fileSize; 
} 
echo file_size('0.rar'); 
?>
\`\`\`\
	 <a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odec __PHP__
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-php-5") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __HTML5__ __T__emplate __I__s __O__perational
<a:28:674311913576071179> | __C__ode : https://pastebin.com/fyuynWsq
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __C__odec __PHP__
 **
 `);

    }
});








 	client.on('message', message => {
    if (message.author.bot) return;
    
    if (message.content === prefix + "help-vip-theme") {
      if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

 **=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 
<a:592019220397686794:594177289533653012> | 1 \`-\` #help-vip-theme-1 <a:1111:597802499633709076> __T__heme 1
<a:592019220397686794:594177289533653012> | 2 \`-\` #help-vip-theme-2 <a:1111:597802499633709076> __T__heme 2
<a:592019220397686794:594177289533653012> | 3 \`-\` #help-vip-theme-3 <a:1111:597802499633709076> __T__heme 3
<a:592019220397686794:594177289533653012> | 4 \`-\` #help-vip-theme-4 <a:1111:597802499633709076> __T__heme 4
<a:592019220397686794:594177289533653012> | 5 \`-\` #help-vip-theme-5 <a:1111:597802499633709076> __T__heme 5

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
}) 

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-theme-1") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __T__heme 1
<a:28:674311913576071179> | __C__ode : https://send.firefox.com/download/04972aa4b7e91e93/#6B3fYUAdwKrzwhr3FHSnuQ
<:580185227381702676:677203444788101170> | __P__ictures : https://g.top4top.io/p_1544vev4l1.jpg
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __T__heme
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-theme-2") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __T__heme 2
<a:28:674311913576071179> | __C__ode : https://send.firefox.com/download/6dff7d3933b1a773/#u08JzA0JzonncHVjU1bm0A
<:580185227381702676:677203444788101170> | __P__ictures : https://i.top4top.io/p_15444dun91.jpg
<a:27:674311912917303296> | __T__ype __o__f __c__ode :  __T__heme
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-theme-3") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __T__heme 3
<a:28:674311913576071179> | __C__ode : https://send.firefox.com/download/0eb9cebc7a97fd1e/#aKl3U18uYx-7VSAT6Y0AHQ
<:580185227381702676:677203444788101170> | __P__ictures : https://h.top4top.io/p_1544kjluy1.jpg
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __T__heme
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-theme-4") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __T__heme 4
<a:28:674311913576071179> | __C__ode : https://send.firefox.com/download/0b7599548a5b8f5e/#xPkv3GyEqM8llG9sjdytHQ
<:580185227381702676:677203444788101170> | __P__ictures : https://c.top4top.io/p_1544yng9g1.jpg
<a:27:674311912917303296> |__T__ype __o__f __c__ode : __T__heme
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-theme-5") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __T__heme 5
<a:28:674311913576071179> | __C__ode : https://send.firefox.com/download/baad9ba052558304/#QRQxaEjqqpED2_YNEAcA3A
<:580185227381702676:677203444788101170> | __P__ictures : https://g.top4top.io/p_15449y3rz1.jpg
<a:27:674311912917303296> | __T__ype __o__f __c__ode :  __T__heme
 **
 `);

    }
});






 	client.on('message', message => {
    if (message.author.bot) return;
    
    if (message.content === prefix + "help-vip-program") {
      if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

 **=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 
<a:27:674311912917303296> | 1 \`-\` #help-vip-program-1 <a:1111:597802499633709076> __P__rogram __T__heme
<a:27:674311912917303296> | 2 \`-\` #help-vip-program-2 <a:1111:597802499633709076> __P__rogram __A__ny __D__esk 
<a:27:674311912917303296> | 3 \`-\` #help-vip-program-3 <a:1111:597802499633709076> __P__rogram __F__ile __Z__illa
<a:27:674311912917303296> | 4 \`-\` #help-vip-program-4 <a:1111:597802499633709076> __P__rogram __N__otepad
<a:27:674311912917303296> | 5 \`-\` #help-vip-program-5 <a:1111:597802499633709076> __P__rogram __W__O __M__ic
<a:27:674311912917303296> | 6 \`-\` #help-vip-program-6 <a:1111:597802499633709076> __P__rogram __B__dcamsetup
<a:27:674311912917303296> | 7 \`-\` #help-vip-program-7 <a:1111:597802499633709076> __P__rogram __S__imple __S__hutdown __T__imer

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
}) 

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-program-1") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __P__rogram __T__heme
<a:28:674311913576071179> | __C__ode : https://betterdiscord.net/home/
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __P__rogram 
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-program-2") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __P__rogram __A__ny __D__esk 
<a:28:674311913576071179> | __C__ode : https://anydesk.com/en/downloads
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __P__rogram
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-program-3") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __P__rogram __F__ile __Z__illa
<a:28:674311913576071179> | __C__ode : https://filezilla-project.org/
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __P__rogram
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-program-4") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __P__rogram __N__otepad
<a:28:674311913576071179> | __C__ode : https://notepad-plus-plus.org/
<a:27:674311912917303296> | __T__ype __o__f __c__ode :  __P__rogram
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-program-5") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __P__rogram __W__O __M__ic
<a:28:674311913576071179> | __C__ode : https://www.filehorse.com/download-wo-mic/
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __P__rogram
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-program-6") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __P__rogram __B__dcamsetup
<a:28:674311913576071179> | __C__ode : https://bandicam.ar.uptodown.com/windows
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __P__rogram
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-program-7") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __P__rogram __S__imple __S__hutdown __T__imer
<a:28:674311913576071179> | __C__ode : http://www.pcwintech.com/simple-shutdown-timer
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __P__rogram
 **
 `);

    }
});


	client.on('message', message => {
    if (message.author.bot) return;
    
    if (message.content === prefix + "help-vip-hosting") {
      if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
	if(!message.channel.guild) return message.reply(' ');
	let rank = message.guild.member(message.author).roles.find('name', '⌥  VIP');
    if (!rank) return message.channel.send('**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **');
 message.channel.sendMessage(`<:580185227381702676:601050622493458432> **__V__IP __M__e __c__ode __s__ection** <:580185227381702676:601050622493458432>

 **=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 
<a:541930665080520714:594176031385190400> | 1 \`-\` #help-vip-hosting-1 <a:1111:597802499633709076> __H__osting __G__litch
<a:541930665080520714:594176031385190400> | 2 \`-\` #help-vip-hosting-2 <a:1111:597802499633709076> __H__osting __H__eroku
<a:541930665080520714:594176031385190400> | 3 \`-\` #help-vip-hosting-3 <a:1111:597802499633709076> __H__osting __R__epl
<a:541930665080520714:594176031385190400> | 4 \`-\` #help-vip-hosting-4 <a:1111:597802499633709076> __H__osting __E__vennode
<a:541930665080520714:594176031385190400> | 5 \`-\` #help-vip-hosting-5 <a:1111:597802499633709076> __G__ithub

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=**`);
 
       
    }
}) 

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-hosting-1") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __H__osting
<a:28:674311913576071179> | __C__ode : https://glitch.com/
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __H__osting
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-hosting-2") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __H__osting __H__eroku
<a:28:674311913576071179> | __C__ode : https://dashboard.heroku.com/
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __H__osting
 **
 `);

    }
});

    client.on('message', message => {
    if (message.author.bot) return;
 
     if (message.content === prefix + "help-vip-hosting-3") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __H__osting __R__epl
<a:28:674311913576071179> | __C__ode : https://repl.it/repls
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __H__osting
 **
 `);

    }
});

   client.on('message', message => {
    if (message.author.bot) return;

     if (message.content === prefix + "help-vip-hosting-4") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __H__osting __E__vennode
<a:28:674311913576071179> | __C__ode : https://evennode.com
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __H__osting
 **
 `);

    }
});

   client.on('message', message => {
    if (message.author.bot) return;

     if (message.content === prefix + "help-vip-hosting-5") {
       if (message.channel.id !== '692785469255057478') return message.reply(`** لا يمكنك كتابة امر vip هنا توجة الي روم <#692785469255057478> ** <a:585881512587821089:677203439037448193>`)
		 let staff = message.guild.member(message.author).roles.find('name' ,"⌥  VIP");
      if(!staff) return message.reply(`**<a:591621003919097856:594172692865744900> | __T__here __i__s __n__o __m__atching __r__ank __ <@&603355148995264513>__ .. **`)
		 message.channel.send('<a:587128813712965634:602082800660643868> | ** __T__he __c__ode __h__as __b__een __s__ent __in __In __y__our **');
            
 message.author.sendMessage(`
  **
<a:33:674311916776194084> | __D__escribe : __G__ithub
<a:28:674311913576071179> | __C__ode : https://github.com
<a:27:674311912917303296> | __T__ype __o__f __c__ode : __H__osting
 **
 `);

    }
});




