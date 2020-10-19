const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',

    run: async (bot, message, args) => {
        const msg = await message.channel.send('Generating avatar...');

        const mentionedUser = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
        
    .setColor(message.member.displayHexColor)
            .setImage(`${mentionedUser.displayAvatarURL({ dynamic : true, size: 256 })}`)
            .setTitle(`Avatar of ${mentionedUser.username}`)
            .setFooter('Searched by ' + message.author.username);

        message.channel.send(embed);


        msg.delete();
    },
};