const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
  name:"mute",
  description: "yes",


    async run (client, message, args) { 
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You can\'t use that!');

    var user = message.mentions.users.first();
    if(!user) return message.reply('You didn\'t mention anyone!');

    var member;

    try {
        member = await message.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return message.reply('They aren\'t in the server!');
    if(member.hasPermission('MANAGE_MESSAGES')) return message.reply('You cannot mute that person!');

    var rawTime = args[1];
    var time = ms(rawTime);
    if(!time) return message.reply('You didn\'t specify a time!');

    var reason = args.splice(2).join(' ');
    if(!reason) return message.reply('You need to give a reason!');

    try {
        user.send(`You were muted in **${message.guild.name}** for the following reason: \**${reason}\**`);
    } catch(err) {
        console.warn(err);
    }

    var role = message.guild.roles.cache.find(r => r.name === 'Muted');

    member.roles.add(role);

    setTimeout(async() => {
        member.roles.remove(role);
         message.channel.send(`${user} is now unmuted.`)
    }, time);

    const muteembed = new Discord.MessageEmbed()
    .setTitle('Muted')
    .setColor('#cc0000')
    .setDescription(`User Muted: ${user} \n Muted By: ${message.author} \n Reason: ${reason} \n Time: ${rawTime}`)
    .setFooter('Muted By ' + message.author.username);

    message.channel.send(muteembed);
    

     
  }
}