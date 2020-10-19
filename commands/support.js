const Discord = require('discord.js');

module.exports = {
    name: 'support',
    description: 'support server invite',
    usage: 'invite',
    category: "utilities",
    aliases: null,
    run: async(client,message,args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle('Support Server!')
        .setColor(message.member.displayHexColor)
        .setURL('https://discord.gg/NkaWZfU')
        .setDescription('Vero\'s Support Server!')
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send({embed});
    }
}
