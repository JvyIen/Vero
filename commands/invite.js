const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'invite links',
    usage: 'invite',
    category: "utilities",
    aliases: null,
    run: async(client,message,args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle('Invite Link!')
         .setColor(message.member.displayHexColor)
        .setURL('https://discord.com/oauth2/authorize?client_id=767085922356822017&scope=bot&permissions=808840318')
        .setDescription('Invite link for the Vero!')
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send({embed});
    }
}
